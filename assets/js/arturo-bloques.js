/* ============================================================
   ARTURO EN LOS BLOQUES DE MEDICINA PRACTICA (ENURMIA)
   Arturo da la clase de cualquier tema de los cinco bloques con la
   misma pantalla de "Aun no lo entiendo" (ArturoClase.leccion). Los
   pasos se arman con lo que el tema ya trae escrito: no inventa
   contenido y no necesita internet.

   Tres sitios donde aparece:
     1. "Arturo, explicamelo" al final de cada tema.
     2. Cuando fallas: en los juegos, en la practica de calculos (resuelve
        contigo ESE paciente), al ordenar los pasos de una emergencia y en
        las preguntas de las cronicas.
     3. Como guia de la ruta de 3 en 3 (Juego.zona le pide el mensaje).
   La leccion cierra con una mini pregunta; si la aciertas, el tema
   cuenta como estudiado en la ruta.
   ============================================================ */
window.ArturoBloques = (function () {

  const L = ['A', 'B', 'C', 'D'];
  const esc = (s) => (window.UI && UI.esc ? UI.esc(s) : String(s == null ? '' : s));
  const limpio = (s) => (window.ArturoClase && ArturoClase.limpio ? ArturoClase.limpio(s) : String(s || ''));
  const barajar = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const corta = (s, n) => { s = String(s || ''); return s.length > n ? s.slice(0, n - 1).replace(/[ ,;:.]+\S*$/, '') + '…' : s; };
  const frases = (s) => String(s || '').split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ¿¡0-9])/).filter(Boolean);
  const nombreA = () => (window.Arturo && Arturo.nombre ? Arturo.nombre() : 'Arturo');
  const fmt = (x, n) => Number(x).toFixed(n).replace('.', ',');
  const dec = (v) => (Math.abs(v) >= 100 || Number.isInteger(v) ? 0 : Math.abs(v) >= 10 ? 1 : 2);

  /* mini pregunta: la correcta y tres distractoras de otros temas del mismo bloque */
  function pregunta(q, correcta, pool, exp){
    const otras = barajar(pool.filter((x) => x && x !== correcta)).slice(0, 3);
    if (otras.length < 2) return null;
    const ops = barajar(otras.concat([correcta]));
    return { q, ops, ok: ops.indexOf(correcta), exp };
  }
  const lista = (a, cls) => '<ul class="cl-lista' + (cls ? ' ' + cls : '') + '">' + a.map((x, i) => '<li style="--d:' + (0.1 + i * 0.12).toFixed(2) + 's">' + esc(limpio(x)) + '</li>').join('') + '</ul>';
  const tarjeta = (t) => '<p class="cl-caso">' + esc(limpio(t)) + '</p>';
  const clave = (t, ico) => '<div class="cl-clave"><span class="cl-clave__ico">' + (ico || '🔑') + '</span><p>' + esc(limpio(t)) + '</p></div>';
  /* pasos numerados con uno resaltado (para recorrer un orden de uno en uno) */
  const enOrden = (a, actual, hechos) => '<ol class="cl-orden">' + a.map((x, i) =>
    '<li class="' + (i === actual ? 'on' : i < hechos ? 'hecho' : 'luego') + '"><span>' + (i + 1) + '</span>' + esc(limpio(x)) + '</li>').join('') + '</ol>';

  /* ---------------- CALCULOS ---------------- */
  function calculo(c, ctx){
    ctx = ctx || {};
    const datos = ctx.v || c.ej;
    let r; try { r = c.calcular(datos); } catch (e) { r = null; }
    const pasosCalc = (r && r.pasos) || [];
    const etiqueta = (f, v) => f.tipo === 'sel' ? ((f.opciones.find((o) => o[0] === v) || [0, String(v)])[1]) : f.tipo === 'chk' ? (v ? 'sí' : 'no') : String(v).replace('.', ',') + (f.u ? ' ' + f.u : '');
    const fichaDatos = '<div class="cl-datos">' + c.campos.map((f) => '<span class="chip">' + esc(f.etq) + ': <b>' + esc(etiqueta(f, datos[f.id])) + '</b></span>').join('') + '</div>';
    const out = [
      { titulo: 'Qué es', humor: 'atento', voz: 'Vamos con ' + c.nombre + '. ' + limpio(c.que), html: '<h3 class="cl-enun">' + c.em + ' ' + esc(c.nombre) + '</h3>' + tarjeta(c.que) },
      { titulo: 'Para qué sirve', humor: 'atento', voz: limpio(c.sirve), html: clave(c.sirve, '🎯') },
      { titulo: 'La fórmula', humor: 'neutro', voz: 'Esta es la fórmula. No la memorices de golpe: fíjate en qué datos entran.', html: '<div class="cl-formula">' + esc(c.formula) + '</div>' +
        '<div class="cl-datos">' + c.campos.map((f) => '<span class="chip">' + esc(f.etq) + (f.u ? ' (' + esc(f.u) + ')' : '') + '</span>').join('') + '</div>' },
    ];
    if (r && pasosCalc.length) {
      const intro = ctx.v ? 'Resolvamos juntos este mismo paciente.' : 'Resolvamos un ejemplo, paso a paso.';
      out.push({ titulo: 'Los datos del paciente', humor: 'atento', voz: intro + (ctx.v ? '' : ' ' + limpio(c.ejTxt)), html: (ctx.v ? '' : tarjeta(c.ejTxt)) + fichaDatos });
      pasosCalc.forEach((p, i) => out.push({ titulo: 'Paso a paso (' + (i + 1) + '/' + pasosCalc.length + ')', humor: 'neutro',
        voz: (i === 0 ? 'Primero: ' : i === pasosCalc.length - 1 ? 'Y por último: ' : 'Ahora: ') + p,
        html: fichaDatos + '<ol class="cl-orden cl-orden--mono">' + pasosCalc.map((x, k) => '<li class="' + (k === i ? 'on' : k < i ? 'hecho' : 'luego') + '"><span>' + (k + 1) + '</span>' + esc(x) + '</li>').join('') + '</ol>' }));
      const res = fmt(r.valor, dec(r.valor)) + ' ' + r.unidad;
      const tuya = ctx.respuesta !== undefined && ctx.respuesta !== null && !isNaN(ctx.respuesta);
      out.push({ titulo: 'El resultado', humor: 'feliz', voz: 'Da ' + res + '. ' + limpio(r.lectura) + (tuya ? ' Tú pusiste ' + String(ctx.respuesta).replace('.', ',') + ': revisa en qué paso te separaste.' : ''),
        html: '<div class="cl-res"><b>' + esc(res) + '</b><p>' + esc(limpio(r.lectura)) + '</p>' + (tuya ? '<p class="cl-res__tuya">Tú pusiste: <b>' + esc(String(ctx.respuesta).replace('.', ',')) + '</b></p>' : '') + '</div>' });
    }
    out.push({ titulo: 'Por qué se hace', humor: 'neutro', voz: limpio(c.porque), html: tarjeta(c.porque) });
    out.push({ titulo: 'Cómo cambia la conducta', humor: 'atento', voz: limpio(c.conducta), html: clave(c.conducta, '🩺') });
    return { titulo: c.nombre, pasos: out,
      comprueba: pregunta('¿Para qué sirve ' + c.nombre + '?', corta(c.sirve, 140), window.CALCULOS.filter((x) => x.id !== c.id).map((x) => corta(x.sirve, 140)), c.nombre + ': ' + c.que) };
  }

  /* ---------------- TUBOS ---------------- */
  function tubo(t){
    const color = '<div class="cl-tubo"><span style="background:' + t.color + '"></span><div><b>' + esc(t.nombre) + '</b><small>' + esc(t.tapon) + '</small></div></div>';
    const otrasPruebas = [];
    window.TUBOS.filter((x) => x.id !== t.id).forEach((x) => x.pruebas.forEach((p) => { if (t.pruebas.indexOf(p) < 0) otrasPruebas.push(p); }));
    return { titulo: t.nombre, pasos: [
      { titulo: 'Qué tubo es', humor: 'atento', voz: 'Este es el ' + t.nombre.toLowerCase() + '. Tapón: ' + t.tapon + '.', html: color },
      { titulo: 'Qué lleva dentro', humor: 'neutro', voz: 'Lleva ' + limpio(t.aditivo).replace(/^./, (c) => c.toLowerCase()) + '. De aquí sale ' + limpio(t.muestra).toLowerCase() + '.', html: color + clave('Aditivo: ' + t.aditivo + ' · Muestra: ' + t.muestra, '🧪') },
      { titulo: 'Cómo funciona', humor: 'neutro', voz: limpio(t.mecanismo), html: tarjeta(t.mecanismo) },
      { titulo: 'Qué se pide en él', humor: 'atento', voz: 'Se usa para: ' + t.pruebas.join(', ') + '.', html: '<div class="cl-datos">' + t.pruebas.map((p) => '<span class="chip">' + esc(p) + '</span>').join('') + '</div>' },
      { titulo: 'Cuándo y cómo', humor: 'neutro', voz: limpio(t.cuando) + ' ' + limpio(t.inversiones) + '.', html: tarjeta(t.cuando) + clave(t.inversiones, '↻') },
      { titulo: 'Lo que arruina la muestra', humor: 'preocupado', voz: 'Y cuidado con esto. ' + t.errores.map(limpio).join(' '), html: lista(t.errores, 'cl-lista--mal') },
      { titulo: 'Para llevarte', humor: 'feliz', voz: limpio(t.clave), html: clave(t.clave) },
    ], comprueba: pregunta('¿Cuál de estas pruebas se toma en el ' + t.nombre.toLowerCase() + '?', t.pruebas[0], otrasPruebas, t.clave) };
  }

  /* ---------------- ANALITICAS: pruebas y patrones ---------------- */
  function prueba(p){
    return { titulo: p.nombre, pasos: [
      { titulo: 'Qué mide', humor: 'atento', voz: limpio(p.mide), html: '<h3 class="cl-enun">' + p.em + ' ' + esc(p.nombre) + '</h3>' + tarjeta(p.mide) },
      { titulo: 'Qué diagnostica sola', humor: 'neutro', voz: limpio(p.solo), html: clave(p.solo, '🔎') },
      { titulo: 'Qué dice en combinación', humor: 'neutro', voz: limpio(p.combinada), html: tarjeta(p.combinada) },
      { titulo: 'Cuándo pedirla', humor: 'atento', voz: limpio(p.cuando), html: tarjeta(p.cuando) },
      { titulo: 'Ojo', humor: 'preocupado', voz: limpio(p.ojo), html: '<div class="cl-trampa"><span class="cl-trampa__ico">⚠️</span><div>' + esc(limpio(p.ojo)) + '</div></div>' },
    ], comprueba: pregunta('¿Qué mide ' + p.nombre + '?', corta(p.mide, 130), window.PRUEBAS.filter((x) => x.id !== p.id).map((x) => corta(x.mide, 130)), p.nombre + ': ' + p.mide) };
  }
  function patron(p){
    return { titulo: p.titulo, pasos: [
      { titulo: 'Las pistas', humor: 'atento', voz: 'Mira estas pistas juntas, no una por una. ' + p.pistas.join('. ') + '.', html: lista(p.pistas) },
      { titulo: 'Qué sugiere', humor: 'neutro', voz: 'Juntas sugieren: ' + limpio(p.dx), html: lista(p.pistas) + clave(p.dx, '🧩') },
      { titulo: 'Para llevarte', humor: 'feliz', voz: limpio(p.nota) || 'El diagnóstico sale del patrón, no de un valor aislado.', html: '<h3 class="cl-enun">' + esc(p.titulo) + '</h3>' + (p.nota ? tarjeta(p.nota) : '') },
    ], comprueba: pregunta('Con estas pistas: ' + p.pistas.join(' · ') + ', ¿qué patrón es?', p.titulo, window.PATRONES.map((x) => x.titulo), p.dx) };
  }

  /* ---------------- EMERGENCIAS ---------------- */
  function emergencia(e, ctx){
    ctx = ctx || {};
    const out = [];
    if (ctx.puso !== undefined && ctx.debia !== undefined) {
      out.push({ titulo: 'Dónde se torció el orden', humor: 'preocupado',
        voz: 'Pusiste «' + e.pasos[ctx.puso] + '» antes de tiempo. En ese momento tocaba: ' + e.pasos[ctx.debia] + '. Vamos a recorrer el orden completo.',
        html: enOrden(e.pasos, ctx.debia, ctx.debia) });
    }
    out.push({ titulo: 'Cómo se reconoce', humor: 'atento', voz: limpio(e.reconoce), html: '<h3 class="cl-enun">' + e.em + ' ' + esc(e.nombre) + '</h3>' + tarjeta(e.reconoce) });
    out.push({ titulo: 'El tiempo que hay', humor: 'preocupado', voz: limpio(e.tiempo), html: '<div class="cl-trampa"><span class="cl-trampa__ico">⏱️</span><div>' + esc(limpio(e.tiempo)) + '</div></div>' });
    e.pasos.forEach((p, i) => out.push({ titulo: 'Primeros pasos (' + (i + 1) + '/' + e.pasos.length + ')', humor: 'neutro',
      voz: (i === 0 ? 'Primero: ' : i === e.pasos.length - 1 ? 'Y por último: ' : 'Después: ') + p + '.', html: enOrden(e.pasos, i, i) }));
    out.push({ titulo: 'Qué hacer', humor: 'atento', voz: e.hacer.map(limpio).join(' '), html: lista(e.hacer, 'cl-lista--bien') });
    out.push({ titulo: 'Qué NO hacer', humor: 'preocupado', voz: e.noHacer.map(limpio).join(' '), html: lista(e.noHacer, 'cl-lista--mal') });
    out.push({ titulo: 'Cómo salvar una vida', humor: 'feliz', voz: limpio(e.salvar), html: clave(e.salvar, '❤️') });
    return { titulo: e.nombre, pasos: out,
      comprueba: pregunta('En ' + e.nombre.toLowerCase() + ', ¿cuál es el primer paso?', e.pasos[0], e.pasos.slice(1), 'Primero: ' + e.pasos[0] + '.') };
  }

  /* ---------------- CRONICAS ---------------- */
  function cronica(c){
    const out = [
      { titulo: 'La guía de referencia', humor: 'atento', voz: 'Esto se apoya en: ' + limpio(c.guia) + '.', html: '<h3 class="cl-enun">' + c.em + ' ' + esc(c.nombre) + '</h3>' + tarjeta(c.guia) },
      { titulo: 'En breve', humor: 'neutro', voz: limpio(c.resumen), html: tarjeta(c.resumen) },
      { titulo: 'Metas y cifras clave', humor: 'atento', voz: 'Las cifras que tienes que manejar. ' + c.metas.map((m) => m[0] + ': ' + m[1]).join('. ') + '.',
        html: '<div class="cl-metas">' + c.metas.map((m) => '<div><span>' + esc(m[0]) + '</span><b>' + esc(m[1]) + '</b></div>').join('') + '</div>' },
    ];
    c.secciones.forEach((s) => s.p.forEach((parrafo, i) => out.push({ titulo: s.t + (s.p.length > 1 ? ' (' + (i + 1) + '/' + s.p.length + ')' : ''), humor: 'neutro',
      voz: limpio(parrafo), html: '<p class="cl-caso cl-caso--largo">' + esc(limpio(parrafo)) + '</p>' })));
    out.push({ titulo: 'Cuándo referir', humor: 'preocupado', voz: c.referir.map(limpio).join(' '), html: lista(c.referir, 'cl-lista--mal') });
    out.push({ titulo: 'Perlas y errores frecuentes', humor: 'feliz', voz: c.perlas.map(limpio).join(' '), html: lista(c.perlas) });
    const pr = (c.practica || [])[0];
    return { titulo: c.nombre, pasos: out, comprueba: pr ? { q: pr.q, ops: pr.ops, ok: pr.ok, exp: pr.exp } : null };
  }

  /* ---------------- abrir ---------------- */
  function item(bloque, pista, id){
    if (bloque === 'calculos') return (window.CALCULOS || []).find((x) => x.id === id);
    if (bloque === 'tubos') return (window.TUBOS || []).find((x) => x.id === id);
    if (bloque === 'laboratorio' && pista === 'pruebas') return (window.PRUEBAS || []).find((x) => x.id === id);
    if (bloque === 'laboratorio' && pista === 'patrones') return (window.PATRONES || [])[+String(id).replace('pat', '')];
    if (bloque === 'emergencias') return (window.EMERGENCIAS || []).find((x) => x.id === id);
    if (bloque === 'cronicas') return (window.CRONICAS || []).find((x) => x.id === id);
    return null;
  }
  const ARMAR = { calculos: calculo, tubos: tubo, emergencias: emergencia, cronicas: cronica,
    laboratorio: (x, ctx, pista) => (pista === 'patrones' ? patron(x) : prueba(x)) };

  /* abre la clase de un tema; ctx lleva el error concreto si viene de un fallo */
  function abrir(bloque, pista, id, ctx, alCambiar){
    const x = item(bloque, pista, id);
    if (!x || !window.ArturoClase || !ArturoClase.leccion) return;
    const L = ARMAR[bloque](x, ctx || {}, pista);
    L.alAprobar = () => {
      if (window.Juego && Juego.situacion(bloque, pista, id) === 'abierto') Juego.marcar(bloque, pista, id);
      if (alCambiar) alCambiar();
    };
    ArturoClase.leccion(L);
  }

  /* bloque "Arturo, explicamelo" para el final de cada tema */
  function cta(bloque, pista, id, texto){
    if (!window.ArturoClase || !ArturoClase.leccion || !item(bloque, pista, id)) return '';
    const cara = window.Arturo && Arturo.cara ? Arturo.cara('atento', false) : '';
    return '<div class="reexp-cta jg-arturo-cta">' + cara +
      '<div class="reexp-cta__txt"><b>' + esc(texto || '¿Te lo explico paso a paso?') + '</b>' +
      '<span>' + esc(nombreA()) + ' te lo desmonta y al final te hace una pregunta: si la aciertas, cuenta como estudiado.</span></div>' +
      '<button class="btn btn--sm" data-arb="' + esc(bloque + '|' + pista + '|' + id) + '">' + esc(nombreA()) + ', explícamelo</button></div>';
  }
  function enganchar(alCambiar){
    (window.UI ? UI.$$('[data-arb]') : []).forEach((b) => b.onclick = () => { const [bl, p, id] = b.dataset.arb.split('|'); abrir(bl, p, id, null, alCambiar); });
  }

  /* lo que dice Arturo como guia de la ruta */
  function guia(lleva, total, enNivel, deNivel, juegoAbierto){
    if (lleva >= total) return { humor: 'feliz', texto: '¡Completaste la ruta! Juega cuando quieras para no oxidarte.' };
    if (lleva === 0) return { humor: 'atento', texto: 'Empecemos por estos 3 temas. Cuando los estudies, se abre el juego y los 3 siguientes.' };
    const faltan = deNivel - enNivel;
    if (faltan > 0) return { humor: 'atento', texto: 'Te falta' + (faltan === 1 ? ' 1 tema' : 'n ' + faltan + ' temas') + ' para abrir el siguiente nivel.' + (juegoAbierto ? ' Mientras, ya puedes jugar con lo que llevas.' : '') };
    return { humor: 'feliz', texto: '¡Nivel completado! Juega con lo que llevas o sigue con los temas nuevos.' };
  }

  return { abrir, cta, enganchar, guia, item };
})();
