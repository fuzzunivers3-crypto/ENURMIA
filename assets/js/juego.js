/* ============================================================
   JUEGO (ENURMIA) - "Aprende jugando" en Medicina practica
   Motor comun para los cinco bloques: vidas, combo, tiempo,
   puntos, XP, niveles e insignias. Tres mecanicas:
     quiz     elegir la respuesta correcta contra reloj
     ordenar  tocar las piezas en el orden correcto
     deslizar mandar cada tarjeta a su lado (p. ej. HACER / NO HACER)
   Cada juego se arma con los datos reales de su bloque (nunca
   inventa contenido) y al terminar manda a estudiar a fondo.
   El progreso se guarda en datos().juego.
   ============================================================ */
window.Juego = (function () {

  const esc = UI.esc;
  const VIDAS = 3, RONDAS = 10;

  /* ---------- utilidades ---------- */
  const azar = (a) => a[Math.floor(Math.random() * a.length)];
  const barajar = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const corta = (s, n) => { s = String(s || ''); return s.length > n ? s.slice(0, n - 1).replace(/[ ,;:.]+\S*$/, '') + '…' : s; };
  const primera = (s) => String(s || '').split(/(?<=[.:])\s/)[0];
  const frase = (s) => String(s || '').split(/(?<=\.)\s/)[0];
  /* "No retrases la adrenalina…" → "Retrasar la adrenalina…" (infinitivo, como las de "hacer"): la tarjeta muestra la accion
     tentadora sin delatar la respuesta. Tabla cerrada de los verbos que usan los datos;
     si aparece uno nuevo, la frase no entra al juego (nunca se muestra mal conjugada). */
  const AFIRMA = { des: 'Dar', retrases: 'Retrasar', uses: 'Usar', olvides: 'Olvidar', dejes: 'Dejar', bajes: 'Bajar', esperes: 'Esperar', hagas: 'Hacer',
    pongas: 'Poner', 'te tranquilices': 'Tranquilizarse', intubes: 'Intubar', suspendas: 'Suspender', trates: 'Tratar', interrumpas: 'Interrumpir',
    hiperventiles: 'Hiperventilar', pierdas: 'Perder', acuestes: 'Acostar', sigas: 'Seguir', levantes: 'Levantar', sedes: 'Sedar', inicies: 'Iniciar',
    tardes: 'Tardar', sobretransfundas: 'Sobretransfundir', interpretes: 'Interpretar', retires: 'Retirar', enfríes: 'Enfriar', sobrecargues: 'Sobrecargar',
    dependas: 'Depender', dar: 'Dar', cardiovertir: 'Cardiovertir' };
  function afirmar(s){
    const m = String(s).match(/^No ((?:te )?\S+)(.*)$/i);
    if (!m) return null;
    const v = AFIRMA[m[1].toLowerCase()];
    return v ? v + m[2] : null;
  }
  function animar(){ const d = Almacen.datos(); return !d || !d.ajustes || d.ajustes.animaciones !== false; }

  /* ---------- progreso ---------- */
  const NIVELES = [
    [0, 'Estudiante'], [150, 'Externo'], [400, 'Interno'], [800, 'Residente R1'], [1400, 'Residente R2'],
    [2200, 'Residente R3'], [3200, 'Médico adjunto'], [4600, 'Jefe de servicio'], [6500, 'Maestro clínico']
  ];
  function estado(){
    const d = Almacen.datos(); if (!d) return { xp: 0, bloques: {} };
    if (!d.juego) d.juego = { xp: 0, bloques: {}, sonido: true };
    return d.juego;
  }
  function nivel(xp){
    let i = 0; while (i + 1 < NIVELES.length && xp >= NIVELES[i + 1][0]) i++;
    const desde = NIVELES[i][0], hasta = NIVELES[i + 1] ? NIVELES[i + 1][0] : desde;
    return { n: i + 1, nombre: NIVELES[i][1], desde, hasta, pct: hasta > desde ? (xp - desde) / (hasta - desde) : 1, sig: NIVELES[i + 1] ? NIVELES[i + 1][1] : null };
  }
  function registro(bloque, juego){ const e = estado(); e.bloques[bloque] = e.bloques[bloque] || {}; return e.bloques[bloque][juego] || { mejor: 0, estrellas: 0, partidas: 0 }; }
  /* avance del bloque: estrellas ganadas sobre las posibles (3 por juego) */
  function avance(bloque){
    const b = BLOQUES[bloque]; if (!b) return 0;
    const e = estado().bloques[bloque] || {};
    return b.juegos.reduce((s, j) => s + ((e[j.id] && e[j.id].estrellas) || 0), 0) / (b.juegos.length * 3);
  }

  /* ---------- sonido (sintetizado, sin archivos) ---------- */
  let ctx = null;
  function tono(tipo){
    if (!estado().sonido) return;
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      const notas = { bien: [[660, 0], [880, .07]], combo: [[660, 0], [880, .06], [1175, .12]], mal: [[220, 0], [165, .09]], fin: [[523, 0], [659, .1], [784, .2], [1047, .3]] }[tipo] || [];
      notas.forEach(([f, t]) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = tipo === 'mal' ? 'triangle' : 'sine'; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, ctx.currentTime + t);
        g.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + t + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + t + 0.16);
        o.connect(g); g.connect(ctx.destination); o.start(ctx.currentTime + t); o.stop(ctx.currentTime + t + 0.18);
      });
    } catch (e) {}
  }

  /* ============================================================
     GENERADORES: cada juego convierte los datos del bloque en
     rondas. q = enunciado, ops = opciones, ok = indice correcto,
     exp = la explicacion que se ve al responder.
     ============================================================ */
  function opsCon(correcta, pool, n){
    const otras = barajar(pool.filter(x => x !== correcta)).slice(0, n - 1);
    const ops = barajar(otras.concat([correcta]));
    return { ops, ok: ops.indexOf(correcta) };
  }

  const fmtN = (x, d) => Number(x).toFixed(d).replace('.', ',');
  function decimales(v){ const a = Math.abs(v); return Number.isInteger(v) ? 0 : a < 10 ? 1 : 0; }
  function valorCampo(k){
    if (k.tipo === 'sel') return azar(k.opciones)[0];
    if (k.tipo === 'chk') return Math.random() < 0.4 ? 1 : 0;
    const span = Math.max((k.max - k.min) * 0.12, Math.abs(k.def) * 0.35);
    let v = k.def + (Math.random() * 2 - 1) * span;
    v = Math.min(k.max, Math.max(k.min, v));
    const paso = k.paso || 1; v = Math.round(v / paso) * paso;
    return Number(v.toFixed(paso < 1 ? String(paso).split('.')[1].length : 0));
  }

  const BLOQUES = {
    calculos: { nombre: 'Cálculos médicos', em: '🧮', modulo: 'Calculos', juegos: [
      { id: 'cual', em: '🎯', nombre: '¿Qué cálculo uso?', desc: 'Te digo para qué lo necesitas; tú eliges el cálculo.', tipo: 'quiz', tiempo: 14,
        rondas: () => barajar(window.CALCULOS).slice(0, RONDAS).map(c => {
          const o = opsCon(c.nombre, window.CALCULOS.map(x => x.nombre), 4);
          return { q: c.sirve, sub: c.grupo, ops: o.ops, ok: o.ok, exp: c.nombre + ': ' + c.que };
        }) },
      { id: 'relampago', em: '⚡', nombre: 'Cálculo relámpago', desc: 'Un paciente al azar: calcula de cabeza y elige el resultado.', tipo: 'quiz', tiempo: 25,
        rondas: () => {
          const aptos = window.CALCULOS.filter(c => c.campos.every(k => k.tipo !== 'fecha'));
          const out = [];
          for (const c of barajar(aptos)) {
            if (out.length >= RONDAS) break;
            const v = {}; c.campos.forEach(k => { v[k.id] = valorCampo(k); });
            let r; try { r = c.calcular(v); } catch (e) { continue; }
            if (!r || typeof r.valor !== 'number' || !isFinite(r.valor)) continue;
            const d = decimales(r.valor);
            const bien = fmtN(r.valor, d);
            const fac = barajar([0.6, 0.75, 0.85, 1.2, 1.35, 1.6]);
            const malas = [];
            for (const f of fac) {
              let x = r.valor * f; if (d === 0) x = Math.round(x) === Math.round(r.valor) ? Math.round(r.valor) + (f > 1 ? 1 : -1) : x;
              const t = fmtN(x, d); if (t !== bien && malas.indexOf(t) < 0 && x >= 0) malas.push(t);
              if (malas.length === 3) break;
            }
            if (malas.length < 3) continue;
            const ops = barajar(malas.concat([bien]));
            const datos = c.campos.map(k => {
              const val = k.tipo === 'sel' ? (k.opciones.find(o => o[0] === v[k.id]) || [0, ''])[1] : k.tipo === 'chk' ? (v[k.id] ? 'sí' : 'no') : String(v[k.id]).replace('.', ',') + (k.u ? ' ' + k.u : '');
              return k.etq + ': ' + val;
            });
            out.push({ q: c.nombre, lista: datos, ops: ops.map(o => o + ' ' + r.unidad), ok: ops.indexOf(bien),
              exp: (r.pasos && r.pasos.length ? r.pasos.join(' → ') + '. ' : '') + (r.lectura || '') });
          }
          return out;
        } }
    ] },

    tubos: { nombre: 'Tubos de laboratorio', em: '🧪', modulo: 'Tubos', juegos: [
      { id: 'gradilla', em: '🧫', nombre: 'Arma la gradilla', desc: 'Toca los tubos en el orden de extracción correcto.', tipo: 'ordenar', tiempo: 40,
        rondas: () => {
          const orden = window.TUBOS.slice().sort((a, b) => a.orden - b.orden);
          const sets = [0, 1, 2].map(() => barajar(orden).slice(0, 5).sort((a, b) => a.orden - b.orden));
          sets.unshift(orden.filter(t => ['hemo', 'azul', 'rojo', 'amarillo', 'verde', 'lila', 'gris'].indexOf(t.id) >= 0));
          return sets.map(s => ({ q: 'Ordena para extraer', items: s.map(t => ({ t: t.nombre.replace(/^Tapón /, '').replace(/ \(.*\)/, '').replace('Frascos de hemocultivo', 'Hemocultivo').replace(/^./, (c) => c.toUpperCase()), color: t.color })),
            exp: window.TUBOS_ORDEN_PORQUE }));
        } },
      { id: 'veloz', em: '🏎️', nombre: 'Tubo veloz', desc: 'Te digo la prueba; toca su tubo antes de que acabe el tiempo.', tipo: 'quiz', tiempo: 9,
        rondas: () => barajar(window.TUBOS_QUIZ).slice(0, RONDAS).map(([prueba, id]) => {
          const t = window.TUBOS.find(x => x.id === id);
          const otros = barajar(window.TUBOS.filter(x => x.id !== id)).slice(0, 3);
          const ops = barajar(otros.concat([t]));
          return { q: prueba, sub: '¿En qué tubo va?', ops: ops.map(x => x.nombre.replace(/ \(.*\)/, '')), colores: ops.map(x => x.color), ok: ops.indexOf(t), exp: t.clave };
        }) }
    ] },

    laboratorio: { nombre: 'Analíticas e imágenes', em: '🔬', modulo: 'Laboratorio', juegos: [
      { id: 'detective', em: '🕵️', nombre: 'Detective de patrones', desc: 'Lee las pistas del laboratorio y nombra el patrón.', tipo: 'quiz', tiempo: 18,
        rondas: () => barajar(window.PATRONES).slice(0, RONDAS).map(p => {
          const o = opsCon(p.titulo, window.PATRONES.map(x => x.titulo), 4);
          return { q: 'Pistas', lista: p.pistas, ops: o.ops, ok: o.ok, exp: p.dx + (p.nota ? ' ' + p.nota : '') };
        }) },
      { id: 'prueba', em: '🧬', nombre: '¿Qué prueba es?', desc: 'Te digo qué mide; tú eliges la prueba.', tipo: 'quiz', tiempo: 14,
        rondas: () => barajar(window.PRUEBAS).slice(0, RONDAS).map(p => {
          const mismas = window.PRUEBAS.filter(x => x.grupo === p.grupo).map(x => x.nombre);
          const pool = mismas.length >= 4 ? mismas : window.PRUEBAS.map(x => x.nombre);
          const o = opsCon(p.nombre, pool, 4);
          return { q: corta(p.mide, 170), sub: p.grupo, ops: o.ops, ok: o.ok, exp: p.nombre + ': ' + primera(p.solo) };
        }) }
    ] },

    emergencias: { nombre: 'Emergencias médicas', em: '🚑', modulo: 'Emergencias', juegos: [
      { id: 'codigo', em: '🚨', nombre: 'Código rojo', desc: 'Ordena los primeros pasos antes de que se acabe el tiempo.', tipo: 'ordenar', tiempo: 45,
        rondas: () => barajar(window.EMERGENCIAS.filter(e => e.pasos && e.pasos.length >= 4)).slice(0, 4).map(e => ({
          q: e.em + ' ' + e.nombre, items: e.pasos.slice(0, 6).map(t => ({ t })), exp: e.salvar })) },
      { id: 'hacer', em: '👉', nombre: '¿Hacer o NO hacer?', desc: 'Manda cada acción a su lado. Rápido, como en la guardia.', tipo: 'deslizar', tiempo: 12,
        izq: 'NO hacer', der: 'Hacer',
        rondas: () => {
          const out = [];
          barajar(window.EMERGENCIAS).forEach(e => {
            if (e.hacer && e.hacer.length) out.push({ t: corta(frase(azar(e.hacer)).replace(/\.$/, ''), 160), ctx: e.em + ' ' + e.nombre, lado: 'der', exp: e.salvar });
            if (e.noHacer && e.noHacer.length) {
              const x = azar(e.noHacer), accion = afirmar(x.split(/:\s/)[0].replace(/[.:]\s*$/, ''));
              if (accion) out.push({ t: corta(accion, 160), ctx: e.em + ' ' + e.nombre, lado: 'izq', exp: x });
            }
          });
          return barajar(out).slice(0, 12);
        } }
    ] },

    cronicas: { nombre: 'Enfermedades crónicas', em: '🩺', modulo: 'Cronicas', juegos: [
      { id: 'metas', em: '🎯', nombre: 'Metas en la diana', desc: 'Elige la cifra meta correcta de cada enfermedad.', tipo: 'quiz', tiempo: 14,
        rondas: () => {
          const todas = []; window.CRONICAS.forEach(c => (c.metas || []).forEach(m => todas.push({ c, m })));
          return barajar(todas).slice(0, RONDAS).map(({ c, m }) => {
            const pool = todas.filter(x => x.m[1] !== m[1]).map(x => x.m[1]);
            const o = opsCon(m[1], [m[1]].concat(pool), 4);
            return { q: m[0], sub: c.em + ' ' + c.nombre, ops: o.ops, ok: o.ok, exp: c.nombre + ' · ' + m[0] + ': ' + m[1] + '. Referencia: ' + c.guia + '.' };
          });
        } },
      { id: 'caso', em: '🩻', nombre: 'Caso rápido', desc: 'Casos clínicos de los capítulos, contra reloj.', tipo: 'quiz', tiempo: 35,
        rondas: () => {
          const todas = []; window.CRONICAS.forEach(c => (c.practica || []).forEach(p => todas.push({ c, p })));
          return barajar(todas).slice(0, 8).map(({ c, p }) => {
            const idx = barajar(p.ops.map((_, i) => i));
            return { q: p.q, sub: c.em + ' ' + c.nombre, ops: idx.map(i => p.ops[i]), ok: idx.indexOf(p.ok), exp: p.exp };
          });
        } }
    ] }
  };

  /* ============================================================
     ZONA DE JUEGO (va arriba de cada bloque)
     ============================================================ */
  function zona(bloque){
    const b = BLOQUES[bloque]; if (!b) return '';
    const av = avance(bloque);
    return '<section class="jg-zona" id="jgZona">' +
      '<div class="jg-zona__cab"><div><p class="jg-zona__eyebrow">Paso 1 · Aprende jugando</p>' +
      '<h2 class="jg-zona__titulo">Juega primero, luego estúdialo a fondo</h2>' +
      '<p class="jg-zona__sub">Partidas de 2 minutos con los datos reales del bloque. Cada error trae su explicación.</p></div>' +
      anillo(av, b.em) + '</div>' +
      '<div class="jg-zona__juegos">' + b.juegos.map(j => {
        const r = registro(bloque, j.id);
        return '<button class="jg-boton" data-jg="' + bloque + ':' + j.id + '">' +
          '<span class="jg-boton__em">' + j.em + '</span>' +
          '<span class="jg-boton__txt"><b>' + esc(j.nombre) + '</b><small>' + esc(j.desc) + '</small></span>' +
          '<span class="jg-boton__meta">' + estrellas(r.estrellas) + (r.mejor ? '<small>Récord ' + r.mejor + '</small>' : '<small>Nuevo</small>') + '</span>' +
          '<span class="jg-boton__play">▶</span></button>';
      }).join('') + '</div>' +
      '<a class="jg-zona__luego" href="#jgFondo">Paso 2 · Estudiar a fondo ↓</a>' +
    '</section><div id="jgFondo"></div>';
  }
  function enganchar(){
    UI.$$('[data-jg]').forEach(x => x.onclick = () => { const [b, j] = x.dataset.jg.split(':'); jugar(b, j); });
    const l = document.querySelector('.jg-zona__luego');
    if (l) l.onclick = (e) => { e.preventDefault(); const f = document.getElementById('jgFondo'); if (f) f.scrollIntoView({ behavior: animar() ? 'smooth' : 'auto', block: 'start' }); };
  }
  function anillo(p, em){
    const R = 26, L = 2 * Math.PI * R;
    return '<div class="jg-anillo" title="' + Math.round(p * 100) + ' % de estrellas"><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="' + R + '" class="jg-anillo__fondo"/>' +
      '<circle cx="32" cy="32" r="' + R + '" class="jg-anillo__val" style="stroke-dasharray:' + L.toFixed(1) + ';stroke-dashoffset:' + (L * (1 - p)).toFixed(1) + '"/></svg><span>' + em + '</span></div>';
  }
  function estrellas(n){ return '<span class="jg-estrellas">' + [0, 1, 2].map(i => '<i class="' + (i < n ? 'on' : '') + '">★</i>').join('') + '</span>'; }

  /* barra de nivel para la portada de Medicina practica */
  function barraNivel(){
    const e = estado(), nv = nivel(e.xp || 0);
    return '<div class="jg-nivel"><div class="jg-nivel__insignia">' + nv.n + '</div>' +
      '<div class="jg-nivel__info"><div class="jg-nivel__fila"><b>' + esc(nv.nombre) + '</b><span>' + (e.xp || 0) + ' XP</span></div>' +
      '<div class="jg-nivel__barra"><i style="width:' + Math.round(nv.pct * 100) + '%"></i></div>' +
      '<small>' + (nv.sig ? 'Siguiente: ' + esc(nv.sig) + ' a los ' + nv.hasta + ' XP' : 'Nivel máximo') + '</small></div></div>';
  }

  /* ============================================================
     PARTIDA
     ============================================================ */
  let P = null; // partida en curso

  function jugar(bloque, juegoId){
    const b = BLOQUES[bloque], j = b && b.juegos.find(x => x.id === juegoId);
    if (!j) return;
    let rondas = [];
    try { rondas = j.rondas().filter(Boolean); } catch (e) { console.warn('Juego', e); }
    if (!rondas.length) { UI.toast && UI.toast('Este juego no tiene datos todavía.'); return; }
    cerrar();
    P = { bloque, j, rondas, i: 0, vidas: VIDAS, puntos: 0, combo: 0, mejorCombo: 0, bien: 0, hechas: 0, reloj: null, t0: 0, bloqueada: false };
    const velo = document.createElement('div');
    velo.className = 'jg-velo' + (animar() ? '' : ' jg-quieto');
    velo.id = 'jgVelo';
    velo.innerHTML =
      '<div class="jg-pantalla" role="dialog" aria-label="' + esc(j.nombre) + '">' +
        '<header class="jg-hud">' +
          '<button class="jg-x" id="jgCerrar" aria-label="Salir">✕</button>' +
          '<div class="jg-hud__titulo"><span>' + j.em + '</span>' + esc(j.nombre) + '</div>' +
          '<button class="jg-x" id="jgSonido" aria-label="Sonido">' + (estado().sonido ? '🔊' : '🔈') + '</button>' +
        '</header>' +
        '<div class="jg-marcador"><span class="jg-vidas" id="jgVidas"></span><span class="jg-combo" id="jgCombo"></span><span class="jg-puntos" id="jgPuntos">0</span></div>' +
        '<div class="jg-progreso"><i id="jgProg"></i></div>' +
        '<div class="jg-tiempo"><i id="jgTiempo"></i></div>' +
        '<main class="jg-escena" id="jgEscena"></main>' +
      '</div>';
    document.body.appendChild(velo);
    document.body.classList.add('jg-abierto');
    document.getElementById('jgCerrar').onclick = () => { cerrar(); };
    document.getElementById('jgSonido').onclick = (e) => { const s = estado(); s.sonido = !s.sonido; Almacen.guardar(); e.currentTarget.textContent = s.sonido ? '🔊' : '🔈'; };
    document.addEventListener('keydown', teclas);
    hud(); ronda();
  }

  function cerrar(){
    if (P && P.reloj) cancelAnimationFrame(P.reloj);
    document.removeEventListener('keydown', teclas);
    const v = document.getElementById('jgVelo'); if (v) v.remove();
    document.body.classList.remove('jg-abierto');
    P = null;
  }

  function hud(){
    if (!P) return;
    document.getElementById('jgVidas').innerHTML = [0, 1, 2].map(i => '<i class="' + (i < P.vidas ? 'on' : '') + '">♥</i>').join('');
    const m = mult();
    document.getElementById('jgCombo').innerHTML = P.combo >= 2 ? '🔥 ' + P.combo + (m > 1 ? ' <b>×' + String(m).replace('.', ',') + '</b>' : '') : '';
    document.getElementById('jgPuntos').textContent = P.puntos;
    document.getElementById('jgProg').style.width = (P.i / P.rondas.length * 100) + '%';
  }
  const mult = () => (!P ? 1 : P.combo >= 8 ? 3 : P.combo >= 5 ? 2 : P.combo >= 3 ? 1.5 : 1);

  /* reloj de la ronda: barra que se vacia; al llegar a 0 cuenta como fallo */
  function arrancarReloj(seg, alAgotar){
    const barra = document.getElementById('jgTiempo');
    P.t0 = performance.now(); P.seg = seg;
    const paso = () => {
      if (!P) return;
      const r = Math.max(0, 1 - (performance.now() - P.t0) / (seg * 1000));
      barra.style.width = (r * 100) + '%';
      barra.classList.toggle('poco', r < 0.3);
      if (r <= 0) { P.reloj = null; alAgotar(); return; }
      P.reloj = requestAnimationFrame(paso);
    };
    if (P.reloj) cancelAnimationFrame(P.reloj);
    P.reloj = requestAnimationFrame(paso);
  }
  function pararReloj(){ if (P && P.reloj) { cancelAnimationFrame(P.reloj); P.reloj = null; } return P ? Math.max(0, 1 - (performance.now() - P.t0) / (P.seg * 1000)) : 0; }

  function acierto(resto){
    P.combo++; P.mejorCombo = Math.max(P.mejorCombo, P.combo); P.bien++;
    const gan = Math.round((100 + 60 * resto) * mult());
    P.puntos += gan;
    tono(P.combo >= 3 ? 'combo' : 'bien');
    flotante('+' + gan, 'bien');
    hud();
  }
  function fallo(){
    P.combo = 0; P.vidas--;
    tono('mal');
    const e = document.getElementById('jgEscena'); if (e && animar()) { e.classList.remove('jg-sacude'); void e.offsetWidth; e.classList.add('jg-sacude'); }
    hud();
  }
  function flotante(txt, cls){
    if (!animar()) return;
    const f = document.createElement('div'); f.className = 'jg-flota ' + cls; f.textContent = txt;
    document.querySelector('.jg-pantalla').appendChild(f); setTimeout(() => f.remove(), 900);
  }

  /* panel de explicacion despues de cada respuesta */
  function explicar(bien, texto, extra){
    const e = document.getElementById('jgEscena');
    const d = document.createElement('div');
    d.className = 'jg-exp ' + (bien ? 'ok' : 'mal');
    d.innerHTML = '<b>' + (bien ? (P.combo >= 3 ? '¡En racha! 🔥' : '¡Correcto!') : (extra || 'Casi.')) + '</b>' + (texto ? '<p>' + esc(texto) + '</p>' : '') +
      '<button class="jg-sig" id="jgSig">' + (P.vidas <= 0 ? 'Ver resultado' : (P.i + 1 >= P.rondas.length ? 'Terminar' : 'Siguiente →')) + '</button>';
    e.appendChild(d);
    const s = document.getElementById('jgSig'); s.focus({ preventScroll: true });
    s.onclick = siguiente;
  }
  function siguiente(){
    if (!P) return;
    P.i++;
    if (P.vidas <= 0 || P.i >= P.rondas.length) return fin();
    hud(); ronda();
  }

  function ronda(){
    const r = P.rondas[P.i];
    P.bloqueada = false;
    ({ quiz: rQuiz, ordenar: rOrdenar, deslizar: rDeslizar })[P.j.tipo](r);
  }

  /* ---------- quiz ---------- */
  function rQuiz(r){
    const e = document.getElementById('jgEscena');
    e.innerHTML =
      '<div class="jg-carta jg-entra">' +
        (r.sub ? '<p class="jg-carta__sub">' + esc(r.sub) + '</p>' : '') +
        '<h3 class="jg-carta__q">' + esc(r.q) + '</h3>' +
        (r.lista ? '<ul class="jg-carta__lista">' + r.lista.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>' : '') +
      '</div>' +
      '<div class="jg-ops">' + r.ops.map((o, k) =>
        '<button class="jg-op jg-entra" style="--k:' + k + '" data-k="' + k + '">' +
          '<span class="jg-op__tecla">' + (k + 1) + '</span>' +
          (r.colores ? '<span class="jg-op__color" style="background:' + r.colores[k] + '"></span>' : '') +
          '<span>' + esc(o) + '</span></button>').join('') + '</div>';
    UI.$$('.jg-op').forEach(b => b.onclick = () => responderQuiz(+b.dataset.k));
    arrancarReloj(P.j.tiempo, () => responderQuiz(-1));
  }
  function responderQuiz(k){
    if (!P || P.bloqueada) return;
    P.bloqueada = true;
    const r = P.rondas[P.i], resto = pararReloj(), bien = k === r.ok;
    P.hechas++;
    UI.$$('.jg-op').forEach(b => { b.disabled = true; const kk = +b.dataset.k; if (kk === r.ok) b.classList.add('ok'); else if (kk === k) b.classList.add('mal'); });
    bien ? acierto(resto) : fallo();
    explicar(bien, r.exp, k < 0 ? '⏱ Se acabó el tiempo.' : 'Era: ' + r.ops[r.ok]);
  }

  /* ---------- ordenar ---------- */
  function rOrdenar(r){
    const e = document.getElementById('jgEscena');
    const piezas = barajar(r.items.map((it, k) => ({ ...it, k })));
    P.ord = { sig: 0, errores: 0 };
    e.innerHTML =
      '<div class="jg-carta jg-entra"><p class="jg-carta__sub">Toca en orden · ' + r.items.length + ' pasos</p><h3 class="jg-carta__q">' + esc(r.q) + '</h3></div>' +
      '<ol class="jg-hecho" id="jgHecho"></ol>' +
      '<div class="jg-piezas">' + piezas.map((p, i) =>
        '<button class="jg-pieza jg-entra" style="--k:' + i + '" data-k="' + p.k + '">' +
          (p.color ? '<span class="jg-op__color" style="background:' + p.color + '"></span>' : '') + '<span>' + esc(p.t) + '</span></button>').join('') + '</div>';
    UI.$$('.jg-pieza').forEach(b => b.onclick = () => tocarPieza(b));
    arrancarReloj(P.j.tiempo, () => terminarOrden(false, true));
  }
  function tocarPieza(b){
    if (!P || P.bloqueada) return;
    const r = P.rondas[P.i], k = +b.dataset.k;
    if (k === P.ord.sig) {
      b.classList.add('ok'); b.disabled = true;
      const li = document.createElement('li'); li.className = 'jg-entra'; li.innerHTML = b.innerHTML; document.getElementById('jgHecho').appendChild(li);
      setTimeout(() => b.classList.add('ida'), 120);
      P.ord.sig++; tono('bien');
      if (P.ord.sig >= r.items.length) terminarOrden(P.ord.errores === 0, false);
    } else {
      P.ord.errores++; b.classList.remove('mal'); void b.offsetWidth; b.classList.add('mal');
      tono('mal');
      if (P.ord.errores >= 2) terminarOrden(false, false);
    }
  }
  function terminarOrden(perfecto, tiempo){
    if (!P || P.bloqueada) return;
    P.bloqueada = true;
    const r = P.rondas[P.i], resto = pararReloj();
    P.hechas++;
    UI.$$('.jg-pieza').forEach(b => b.disabled = true);
    if (perfecto) acierto(resto); else fallo();
    const correcto = r.items.map((x, i) => (i + 1) + '. ' + x.t).join('  ');
    explicar(perfecto, (perfecto ? '' : 'El orden es: ' + correcto + '. ') + (r.exp || ''), tiempo ? '⏱ Se acabó el tiempo.' : 'Dos errores: repasa el orden.');
  }

  /* ---------- deslizar ---------- */
  function rDeslizar(r){
    const e = document.getElementById('jgEscena');
    e.innerHTML =
      '<div class="jg-lados"><span class="izq">← ' + esc(P.j.izq) + '</span><span class="der">' + esc(P.j.der) + ' →</span></div>' +
      '<div class="jg-mazo"><div class="jg-tarjeta jg-entra" id="jgTarjeta">' +
        (r.ctx ? '<p class="jg-carta__sub">' + esc(r.ctx) + '</p>' : '') + '<h3 class="jg-carta__q">' + esc(r.t) + '</h3>' +
        '<span class="jg-sello izq">' + esc(P.j.izq) + '</span><span class="jg-sello der">' + esc(P.j.der) + '</span></div></div>' +
      '<div class="jg-ops jg-ops--2"><button class="jg-op no" data-l="izq">✋ ' + esc(P.j.izq) + '</button><button class="jg-op si" data-l="der">' + esc(P.j.der) + ' ✔</button></div>';
    UI.$$('[data-l]').forEach(b => b.onclick = () => responderLado(b.dataset.l));
    arrastre(document.getElementById('jgTarjeta'));
    arrancarReloj(P.j.tiempo, () => responderLado(null));
  }
  function arrastre(t){
    let x0 = null, dx = 0;
    t.addEventListener('pointerdown', (ev) => { if (P.bloqueada) return; x0 = ev.clientX; t.setPointerCapture(ev.pointerId); t.classList.add('arrastra'); });
    t.addEventListener('pointermove', (ev) => {
      if (x0 === null) return; dx = ev.clientX - x0;
      t.style.transform = 'translateX(' + dx + 'px) rotate(' + (dx / 18) + 'deg)';
      t.classList.toggle('va-izq', dx < -40); t.classList.toggle('va-der', dx > 40);
    });
    const soltar = () => {
      if (x0 === null) return; x0 = null; t.classList.remove('arrastra');
      if (Math.abs(dx) > 90) responderLado(dx > 0 ? 'der' : 'izq'); else { t.style.transform = ''; t.classList.remove('va-izq', 'va-der'); }
      dx = 0;
    };
    t.addEventListener('pointerup', soltar); t.addEventListener('pointercancel', soltar);
  }
  function responderLado(lado){
    if (!P || P.bloqueada) return;
    P.bloqueada = true;
    const r = P.rondas[P.i], resto = pararReloj(), bien = lado === r.lado;
    P.hechas++;
    const t = document.getElementById('jgTarjeta');
    if (t) { t.classList.add('sale-' + (lado || r.lado)); }
    UI.$$('[data-l]').forEach(b => { b.disabled = true; if (b.dataset.l === r.lado) b.classList.add('ok'); else if (b.dataset.l === lado) b.classList.add('mal'); });
    bien ? acierto(resto) : fallo();
    explicar(bien, r.exp, lado ? 'Esto va en «' + (r.lado === 'der' ? P.j.der : P.j.izq) + '».' : '⏱ Se acabó el tiempo.');
  }

  /* teclado: 1-4 responde, flechas deslizan, Enter sigue, Esc sale */
  function teclas(ev){
    if (!P) return;
    if (ev.key === 'Escape') return cerrar();
    const sig = document.getElementById('jgSig');
    if (sig && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); return sig.click(); }
    if (P.bloqueada) return;
    if (P.j.tipo === 'quiz' && /^[1-6]$/.test(ev.key)) responderQuiz(+ev.key - 1);
    if (P.j.tipo === 'deslizar' && (ev.key === 'ArrowLeft' || ev.key === 'ArrowRight')) responderLado(ev.key === 'ArrowLeft' ? 'izq' : 'der');
  }

  /* ---------- final ---------- */
  function fin(){
    pararReloj();
    const pct = P.hechas ? P.bien / P.rondas.length : 0;
    const est = pct >= 0.9 ? 3 : pct >= 0.7 ? 2 : pct >= 0.4 ? 1 : 0;
    const xp = Math.round(P.puntos / 10) + est * 15;
    const e = estado();
    const antes = nivel(e.xp || 0);
    e.xp = (e.xp || 0) + xp;
    e.bloques[P.bloque] = e.bloques[P.bloque] || {};
    const r = registro(P.bloque, P.j.id);
    const record = P.puntos > r.mejor;
    e.bloques[P.bloque][P.j.id] = { mejor: Math.max(r.mejor, P.puntos), estrellas: Math.max(r.estrellas, est), partidas: r.partidas + 1 };
    Almacen.guardar();
    const despues = nivel(e.xp);
    tono('fin');
    const msg = est === 3 ? 'Dominio total.' : est === 2 ? 'Muy bien: ya casi lo tienes.' : est === 1 ? 'Buen comienzo. Estúdialo a fondo y vuelve.' : 'Aquí hay terreno por ganar: estúdialo a fondo y vuelve a jugar.';
    document.getElementById('jgTiempo').style.width = '0';
    document.getElementById('jgProg').style.width = '100%';
    document.getElementById('jgEscena').innerHTML =
      '<div class="jg-final jg-entra">' +
        (est === 3 && animar() ? confeti() : '') +
        '<div class="jg-final__estrellas">' + [0, 1, 2].map(i => '<i class="' + (i < est ? 'on' : '') + '" style="--k:' + i + '">★</i>').join('') + '</div>' +
        '<h3>' + (P.vidas <= 0 ? 'Sin vidas' : '¡Partida completa!') + '</h3><p class="jg-final__msg">' + msg + '</p>' +
        '<div class="jg-final__datos">' +
          '<div><b>' + P.puntos + '</b><small>puntos' + (record ? ' · récord' : '') + '</small></div>' +
          '<div><b>' + P.bien + '/' + P.rondas.length + '</b><small>aciertos</small></div>' +
          '<div><b>' + P.mejorCombo + '</b><small>mejor racha</small></div>' +
          '<div><b>+' + xp + '</b><small>XP</small></div></div>' +
        (despues.n > antes.n ? '<p class="jg-final__sube">⬆ Subiste a <b>' + esc(despues.nombre) + '</b></p>' : '') +
        '<div class="jg-final__botones"><button class="jg-sig" id="jgOtra">↻ Jugar otra vez</button>' +
        '<button class="jg-sig jg-sig--claro" id="jgFondoBtn">📖 Ahora estúdialo a fondo</button></div>' +
      '</div>';
    const bloque = P.bloque, jid = P.j.id;
    document.getElementById('jgOtra').onclick = () => jugar(bloque, jid);
    document.getElementById('jgFondoBtn').onclick = () => {
      cerrar();
      const z = document.getElementById('jgZona');
      if (z) { z.outerHTML = zona(bloque).replace('<div id="jgFondo"></div>', ''); enganchar(); }
      const f = document.getElementById('jgFondo'); if (f) f.scrollIntoView({ behavior: animar() ? 'smooth' : 'auto' });
    };
  }
  function confeti(){
    const c = ['#F96F89', '#FFB3C1', '#ffffff', '#C9476A', '#FFD6DE'];
    let s = '<div class="jg-confeti" aria-hidden="true">';
    for (let i = 0; i < 36; i++) s += '<i style="left:' + Math.round(Math.random() * 100) + '%;background:' + c[i % c.length] + ';--d:' + (Math.random() * 0.6).toFixed(2) + 's;--r:' + Math.round(Math.random() * 720 - 360) + 'deg"></i>';
    return s + '</div>';
  }

  return { zona, enganchar, jugar, barraNivel, avance, anillo, BLOQUES };
})();
