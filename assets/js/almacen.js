/* ============================================================
   ALMACEN — cuentas locales y persistencia
   Todo vive en localStorage. Sin servidor, sin red.
   Nota honesta: el hash con salt evita guardar la contrasena en
   texto plano, pero no es seguridad de servidor. Es una cuenta
   local para separar perfiles en la misma computadora.
   ============================================================ */
window.Almacen = (function () {

  const LLAVE_USUARIOS = 'enurm.usuarios';
  const LLAVE_SESION   = 'enurm.sesion';
  const LLAVE_DATOS    = u => 'enurm.datos.' + u;

  /* ---------- utilidades ---------- */
  function leer(llave, porDefecto) {
    try { const v = localStorage.getItem(llave); return v ? JSON.parse(v) : porDefecto; }
    catch (e) { return porDefecto; }
  }
  function escribir(llave, valor) {
    try { localStorage.setItem(llave, JSON.stringify(valor)); return true; }
    catch (e) { console.warn('No se pudo guardar:', e); return false; }
  }

  function sal() {
    return Math.random().toString(36).slice(2, 12) + Date.now().toString(36);
  }

  // hash iterado determinista (djb2 + xorshift), suficiente para uso local
  function hash(texto, salt) {
    let s = salt + '|' + texto + '|enurm';
    let h = 5381;
    for (let vuelta = 0; vuelta < 800; vuelta++) {
      for (let i = 0; i < s.length; i++) {
        h = ((h << 5) + h + s.charCodeAt(i)) | 0;
      }
      h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
      s = (h >>> 0).toString(36) + salt;
    }
    return (h >>> 0).toString(36) + '.' + s.slice(0, 12);
  }

  /* ---------- estado inicial de un estudiante ---------- */
  function datosNuevos(nombre) {
    return {
      perfil: { nombre: nombre, creado: Date.now() },
      respuestas: [],           // historial completo
      srs: {},                  // repeticion espaciada por pregunta
      marcadas: [],             // preguntas marcadas para revisar
      simulacros: [],           // resultados de examenes completos
      casos: {},                // casos clinicos y pacientes virtuales
      srsTarjetas: {},          // repeticion espaciada de las flashcards
      tarjetas: { vistas:0, sesiones:0 },
      apuntes: {},              // temas leidos en la seccion Estudiar
      racha: { dias: 0, ultimo: null },
      medallas: [],
      plan: null,               // plan de estudio de 7 dias
      ajustes: { pedirConfianza: true, defenderRespuesta: false, animaciones: true, bancoExtendido: true }
    };
  }

  /* ---------- cuentas ---------- */
  function usuarios() { return leer(LLAVE_USUARIOS, []); }

  function registrar({ nombre, usuario, clave }) {
    const lista = usuarios();
    if (lista.some(u => u.usuario === usuario)) {
      return { ok: false, error: 'Ese usuario ya existe en este navegador. Prueba con otro o entra con él.' };
    }
    const s = sal();
    lista.push({ usuario, nombre: nombre || usuario, salt: s, hash: hash(clave, s), creado: Date.now() });
    escribir(LLAVE_USUARIOS, lista);
    escribir(LLAVE_DATOS(usuario), datosNuevos(nombre || usuario));
    escribir(LLAVE_SESION, usuario);
    return { ok: true };
  }

  function entrar(usuario, clave) {
    const u = usuarios().find(x => x.usuario === usuario);
    if (!u) return { ok: false, error: 'No encontramos ese usuario en este navegador.' };
    if (hash(clave, u.salt) !== u.hash) return { ok: false, error: 'La contraseña no coincide.' };
    escribir(LLAVE_SESION, usuario);
    return { ok: true };
  }

  function salir() { localStorage.removeItem(LLAVE_SESION); }

  function sesion() {
    const u = leer(LLAVE_SESION, null);
    if (!u) return null;
    return usuarios().find(x => x.usuario === u) || null;
  }

  function cambiarClave(actual, nueva) {
    const s = sesion();
    if (!s) return { ok: false, error: 'No hay sesión abierta.' };
    if (hash(actual, s.salt) !== s.hash) return { ok: false, error: 'La contraseña actual no coincide.' };
    const lista = usuarios();
    const u = lista.find(x => x.usuario === s.usuario);
    u.salt = sal(); u.hash = hash(nueva, u.salt);
    escribir(LLAVE_USUARIOS, lista);
    return { ok: true };
  }

  /* ---------- datos del estudiante ---------- */
  let cache = null;

  function datos() {
    const s = sesion();
    if (!s) return null;
    if (cache && cache.__u === s.usuario) return cache;
    const d = leer(LLAVE_DATOS(s.usuario), datosNuevos(s.nombre));
    // migracion suave: rellenar campos que falten
    const base = datosNuevos(s.nombre);
    for (const k in base) if (!(k in d)) d[k] = base[k];
    for (const k in base.ajustes) if (!(k in d.ajustes)) d.ajustes[k] = base.ajustes[k];
    d.__u = s.usuario;
    cache = d;
    return d;
  }

  function guardar() {
    const s = sesion();
    if (!s || !cache) return;
    const copia = Object.assign({}, cache);
    delete copia.__u;
    escribir(LLAVE_DATOS(s.usuario), copia);
  }

  function reiniciarProgreso() {
    const s = sesion();
    if (!s) return;
    cache = datosNuevos(s.nombre); cache.__u = s.usuario;
    guardar();
  }

  /* ---------- respaldo ---------- */
  function exportar() {
    const s = sesion(); if (!s) return null;
    const copia = Object.assign({}, datos()); delete copia.__u;
    return JSON.stringify({ version: 1, usuario: s.usuario, exportado: Date.now(), datos: copia }, null, 2);
  }

  function importar(texto) {
    try {
      const paquete = JSON.parse(texto);
      if (!paquete.datos) return { ok: false, error: 'El archivo no tiene el formato esperado.' };
      const s = sesion(); if (!s) return { ok: false, error: 'No hay sesión abierta.' };
      cache = paquete.datos; cache.__u = s.usuario;
      guardar();
      return { ok: true };
    } catch (e) { return { ok: false, error: 'No se pudo leer el archivo.' }; }
  }

  /* ---------- racha diaria ---------- */
  function hoyISO() { const d = new Date(); return d.toISOString().slice(0, 10); }

  function tocarRacha() {
    const d = datos(); if (!d) return;
    const hoy = hoyISO();
    if (d.racha.ultimo === hoy) return;
    const ayer = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    d.racha.dias = (d.racha.ultimo === ayer) ? d.racha.dias + 1 : 1;
    d.racha.ultimo = hoy;
    guardar();
  }

  return {
    usuarios, registrar, entrar, salir, sesion, cambiarClave,
    datos, guardar, reiniciarProgreso, exportar, importar,
    tocarRacha, hoyISO
  };
})();
