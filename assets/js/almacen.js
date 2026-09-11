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

  /* Una cuenta de la nube se refleja aqui como una cuenta local mas,
     con usuario 'nube:<uid>'. Asi todo lo de abajo (datos, guardar,
     exportar, racha) sigue funcionando sin enterarse de que hay
     Supabase detras. La contrasena de esas cuentas NO vive aqui:
     la guarda Supabase, por eso no tienen salt ni hash. */
  const usuarioNube = uid => 'nube:' + uid;

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
      desafios: { mejor: 0, mejorMes: 0, mes: null, partidas: 0 },
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

  function salir() {
    const s = sesion();
    localStorage.removeItem(LLAVE_SESION);
    cache = null;
    if (s && s.nube && window.Nube && Nube.disponible()) { try { Nube.salir(); } catch (e) {} }
  }

  /* ---------- cuentas de la nube ---------- */
  /* Crea o actualiza el reflejo local de una cuenta de Supabase y
     abre sesion con ella. Devuelve el usuario local equivalente. */
  function abrirSesionNube(uid, nombre, correo, programa) {
    const u = usuarioNube(uid);
    const lista = usuarios();
    const ya = lista.find(x => x.usuario === u);
    if (ya) { ya.nombre = nombre || ya.nombre; ya.correo = correo || ya.correo;
              if (programa) ya.programa = programa; }
    else lista.push({ usuario: u, nombre: nombre || correo || 'Estudiante', correo: correo,
                      nube: true, programa: programa || 'enurm', creado: Date.now() });
    escribir(LLAVE_USUARIOS, lista);
    if (!leer(LLAVE_DATOS(u), null)) escribir(LLAVE_DATOS(u), datosNuevos(nombre || correo || 'Estudiante'));
    escribir(LLAVE_SESION, u);
    cache = null;
    return u;
  }

  /* Sustituye el progreso local del usuario en sesion por el que
     viene de la nube. Se usa al entrar cuando la nube va por delante. */
  function adoptar(datosNube) {
    const s = sesion(); if (!s || !datosNube) return false;
    const base = datosNuevos(s.nombre);
    for (const k in base) if (!(k in datosNube)) datosNube[k] = base[k];
    for (const k in base.ajustes) if (!(k in (datosNube.ajustes || {}))) datosNube.ajustes[k] = base.ajustes[k];
    cache = datosNube; cache.__u = s.usuario;
    guardar({ sinSubir: true });
    return true;
  }

  /* La cuenta LOCAL (de las de antes, sin nube) con mas progreso
     acumulado. Sirve para no perder lo estudiado cuando alguien que
     ya usaba la app se crea su primera cuenta en la nube. */
  function mejorLocal() {
    let mejor = null;
    usuarios().filter(u => !u.nube).forEach(u => {
      const d = leer(LLAVE_DATOS(u.usuario), null);
      const p = peso(d);
      if (d && p > 0 && (!mejor || p > mejor.peso)) mejor = { usuario: u.usuario, nombre: u.nombre, datos: d, peso: p };
    });
    return mejor;
  }

  /* Cuanta actividad acumula un blob de progreso. Sirve para decidir,
     al entrar, si manda lo local o lo de la nube. */
  function peso(d) {
    if (!d) return -1;
    return (d.respuestas ? d.respuestas.length : 0) +
           (d.simulacros ? d.simulacros.length : 0) +
           (d.srs ? Object.keys(d.srs).length : 0) +
           (d.srsTarjetas ? Object.keys(d.srsTarjetas).length : 0);
  }

  function sesion() {
    const u = leer(LLAVE_SESION, null);
    if (!u) return null;
    return usuarios().find(x => x.usuario === u) || null;
  }

  function cambiarClave(actual, nueva) {
    const s = sesion();
    if (!s) return { ok: false, error: 'No hay sesión abierta.' };
    if (s.nube) return { ok: false, error: 'Tu contraseña la guarda el servidor, no este navegador. Cámbiala desde el enlace de recuperación que se envía a tu correo.' };
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

  /* Guarda en local siempre y, si la cuenta es de la nube, programa
     una subida. La subida va con retardo a proposito: guardar() se
     llama en cada respuesta y no queremos una peticion por click. */
  let temporizadorSubida = null;
  let estadoSync = 'local';        // local | pendiente | subiendo | ok | error
  let alCambiarSync = null;

  function marcarSync(e) { estadoSync = e; if (alCambiarSync) { try { alCambiarSync(e); } catch (x) {} } }

  function guardar(op) {
    const s = sesion();
    if (!s || !cache) return;
    cache.guardadoEn = Date.now();
    const copia = Object.assign({}, cache);
    delete copia.__u;
    escribir(LLAVE_DATOS(s.usuario), copia);
    if (!(op && op.sinSubir)) programarSubida(s, copia);
  }

  function programarSubida(s, copia) {
    if (!s.nube || !window.Nube || !Nube.disponible()) return;
    marcarSync('pendiente');
    if (temporizadorSubida) clearTimeout(temporizadorSubida);
    temporizadorSubida = setTimeout(() => { subirAhora(s, copia); }, 4000);
  }

  function subirAhora(s, copia) {
    marcarSync('subiendo');
    Nube.subir(copia, s.nombre).then(r => {
      marcarSync(r && r.ok ? 'ok' : 'error');
    }).catch(() => marcarSync('error'));
  }

  /* Fuerza la subida inmediata: al cerrar sesion o al cerrar la pagina. */
  function sincronizarYa() {
    const s = sesion(); if (!s || !s.nube || !cache) return;
    if (temporizadorSubida) { clearTimeout(temporizadorSubida); temporizadorSubida = null; }
    const copia = Object.assign({}, cache); delete copia.__u;
    subirAhora(s, copia);
  }

  function sync() { return estadoSync; }
  function alSincronizar(fn) { alCambiarSync = fn; }

  function reiniciarProgreso() {
    const s = sesion();
    if (!s) return;
    cache = datosNuevos(s.nombre); cache.__u = s.usuario;
    guardar();
  }

  /* ---------- programa: ENURMIA o UNIRMIA ----------
     Las cuentas son separadas, asi que el programa es una propiedad de la
     cuenta y no un interruptor que se pueda cambiar desde dentro. Aqui solo
     se guarda el reflejo local de lo que dice `perfiles.programa` en el
     servidor; si no consta, se asume ENURMIA, que es lo que habia antes. */
  function programa() {
    const s = sesion();
    return (s && s.programa === 'unirm') ? 'unirm' : 'enurm';
  }

  function fijarPrograma(p) {
    const v = (p === 'unirm') ? 'unirm' : 'enurm';
    const s = sesion(); if (!s) return v;
    if (s.programa === v) return v;
    const lista = usuarios();
    const u = lista.find(x => x.usuario === s.usuario);
    if (u) { u.programa = v; escribir(LLAVE_USUARIOS, lista); }
    return v;
  }

  /* ---------- marcas del modo desafio ----------
     Se guarda la mejor marca en local SIEMPRE (para que funcione sin
     internet y para poder ensenarla al instante) y ademas se manda al
     servidor, que es quien manda en la clasificacion publica. El servidor
     no se fia de este numero: valida el rango y se queda con el maximo. */
  function registrarDesafio(puntos) {
    const d = datos(); if (!d) return null;
    const n = Math.max(0, Math.round(Number(puntos) || 0));
    const mes = hoyISO().slice(0, 7);
    if (!d.desafios) d.desafios = { mejor: 0, mejorMes: 0, mes: null, partidas: 0 };
    const x = d.desafios;
    const recordHistorico = n > (x.mejor || 0);
    const recordMes = (x.mes !== mes) || n > (x.mejorMes || 0);
    x.mejor = Math.max(x.mejor || 0, n);
    x.mejorMes = (x.mes === mes) ? Math.max(x.mejorMes || 0, n) : n;
    x.mes = mes;
    x.partidas = (x.partidas || 0) + 1;
    guardar();

    const s = sesion();
    if (s && s.nube && window.Nube && Nube.disponible()) {
      // Si falla no se pierde nada: la marca local ya esta guardada.
      try { Nube.registrarDesafio(n); } catch (e) {}
    }
    return { puntos: n, recordHistorico, recordMes, mejor: x.mejor, mejorMes: x.mejorMes };
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
    tocarRacha, hoyISO,
    programa, fijarPrograma, registrarDesafio,
    // puente con la nube
    abrirSesionNube, adoptar, peso, mejorLocal, sincronizarYa, sync, alSincronizar
  };
})();
