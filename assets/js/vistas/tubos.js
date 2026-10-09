/* ============================================================
   TUBOS DE LABORATORIO (ENURMIA)
   Galeria de tubos con animacion: llenado en orden de extraccion,
   inversion del tubo y centrifugado (se ve como se separa el suero
   o el plasma). Al final, un quiz "en que tubo va esta prueba".
   Datos en datos/tubos.js.
   ============================================================ */
window.Tubos = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  const SANGRE = '#8F1D2C', CELULAS = '#6E1220', SUERO = '#E8C46A', PLASMA = '#F2E3A1', GEL = '#D8D3A0';
  const SEPARA = { rojo: 'suero', naranja: 'suero', amarillo: 'suero', azul: 'plasma', verde: 'plasma', gris: 'plasma' };
  const SECUENCIA = ['hemo', 'azul', 'rojo', 'amarillo', 'verde', 'lila', 'gris'];

  let uid = 0;
  let sel = 'lila';
  let quiz = { bien: 0, total: 0, actual: null, respondida: false };

  function porId(id){ return window.TUBOS.find(t => t.id === id); }
  function animar(){ const d = Almacen.datos(); return !d || !d.ajustes || d.ajustes.animaciones !== false; }

  /* ---------- dibujo ---------- */
  function svg(t, opts){
    opts = opts || {};
    const n = ++uid;
    const sep = SEPARA[t.id];
    const tope = t.frasco
      ? '<rect x="9" y="2" width="26" height="14" rx="3" fill="' + t.color + '"/>'
      : '<rect x="5" y="3" width="34" height="19" rx="4" fill="' + t.color + '"/>';
    const cuerpo = t.frasco ? 'M5 20 H39 V108 a8 8 0 0 1 -8 8 H13 a8 8 0 0 1 -8 -8 Z' : 'M8 22 H36 V104 a14 14 0 0 1 -28 0 Z';
    return '<svg viewBox="0 0 44 122" class="tubo-svg' + (opts.llena ? ' tubo-anim' : '') + '" style="' + (opts.retardo !== undefined ? '--d:' + opts.retardo + 's' : '') + '" aria-hidden="true">' +
      '<defs><clipPath id="tc' + n + '"><path d="' + cuerpo + '"/></clipPath></defs>' +
      '<g class="tubo-cuerpo">' + tope +
      '<path d="' + cuerpo + '" fill="#fff" fill-opacity=".55" stroke="#9C918C" stroke-width="2"/>' +
      '<g clip-path="url(#tc' + n + ')">' +
        '<rect class="tubo-liq" x="4" y="' + (t.frasco ? 52 : 50) + '" width="38" height="72" fill="' + (t.frasco ? '#B9772F' : SANGRE) + '"/>' +
        (sep ? '<rect class="tubo-cel" x="4" y="' + (sep === 'suero' ? 84 : 86) + '" width="38" height="40" fill="' + CELULAS + '"/>' +
               '<rect class="tubo-top" x="4" y="50" width="38" height="' + (sep === 'suero' ? 36 : 38) + '" fill="' + (sep === 'suero' ? SUERO : PLASMA) + '"/>' : '') +
        (t.id === 'amarillo' ? '<rect class="tubo-gel" x="4" y="83" width="38" height="5" fill="' + GEL + '"/>' : '') +
      '</g></g></svg>';
  }

  /* ---------- pantalla ---------- */
  function menu(){
    const orden = SECUENCIA.map(porId);
    V().innerHTML =
    '<div class="escalona" style="max-width:940px">' +
      '<button class="btn btn--sm btn--fantasma" id="tbAtras" style="margin-bottom:12px">← Medicina práctica</button>' +
      '<div class="encabezado"><p class="eyebrow">Medicina práctica · Tubos</p>' +
      '<h1>Cada tubo, su color y su para qué</h1>' +
      '<p>Lo que tiene cada tubo, qué se pide en él, cuántas veces se invierte y por qué el orden de extracción importa.</p></div>' +

      '<div class="card" style="margin-bottom:16px"><span class="eyebrow">Orden de extracción</span>' +
        '<div class="row" style="justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin:6px 0 4px">' +
          '<p style="margin:0;line-height:1.5;max-width:560px">' + esc(window.TUBOS_ORDEN) + '</p>' +
          '<button class="btn btn--vivo" id="tbPlay">▶ Ver la extracción</button></div>' +
        '<div class="tubo-fila" id="tbFila">' + filaOrden(orden, false) + '</div>' +
        '<p style="margin:8px 0 0;line-height:1.6"><b>Por qué:</b> ' + esc(window.TUBOS_ORDEN_PORQUE) + '</p>' +
        '<p class="muted" style="margin:6px 0 0;font-size:13px">Regla para recordarlo: ' + esc(window.TUBOS_REGLA) + '</p></div>' +

      '<div class="card" style="margin-bottom:16px"><span class="eyebrow">Toca un tubo</span>' +
        '<div class="tubo-galeria" id="tbGaleria">' +
          window.TUBOS.map(t => '<button class="tubo-item' + (t.id === sel ? ' on' : '') + '" data-t="' + t.id + '" title="' + esc(t.nombre) + '">' + svg(t) +
            '<span>' + esc(t.nombre.replace(/^Tapón /, '').replace(/ \(.*\)/, '')) + '</span></button>').join('') +
        '</div></div>' +

      '<div id="tbDetalle"></div>' +

      '<div class="card" style="margin:16px 0 30px"><span class="eyebrow">Practica</span>' +
        '<p style="margin:6px 0 10px">¿En qué tubo se toma cada prueba? <span class="muted" id="tbRacha"></span></p>' +
        '<div id="tbQuiz"></div></div>' +
    '</div>';

    document.getElementById('tbAtras').onclick = () => App.ir('medpractica');
    UI.$$('[data-t]').forEach(b => b.onclick = () => { sel = b.dataset.t; UI.$$('[data-t]').forEach(x => x.classList.toggle('on', x.dataset.t === sel)); detalle(); });
    document.getElementById('tbPlay').onclick = () => {
      document.getElementById('tbFila').innerHTML = filaOrden(orden, animar());
    };
    detalle();
    nuevaPregunta();
  }

  function filaOrden(lista, anim){
    return lista.map((t, i) =>
      '<div class="tubo-paso"><span class="tubo-num">' + (i + 1) + '</span>' + svg(t, { llena: anim, retardo: i * 0.9 }) +
      '<small>' + esc(t.nombre.replace(/^Tapón /, '').replace(/ \(.*\)/, '').replace('Frascos de hemocultivo', 'Hemocultivo')) + '</small></div>').join('');
  }

  /* ---------- detalle ---------- */
  function detalle(){
    const t = porId(sel); if (!t) return;
    const sep = SEPARA[t.id];
    document.getElementById('tbDetalle').innerHTML =
    '<div class="card"><div class="tubo-det">' +
      '<div class="tubo-det__arte"><div id="tbGrande" class="tubo-grande">' + svg(t) + '</div>' +
        '<div class="row" style="gap:6px;flex-wrap:wrap;justify-content:center;margin-top:8px">' +
          '<button class="btn btn--sm" id="tbInv">↻ Invertir</button>' +
          (sep ? '<button class="btn btn--sm" id="tbCen">⟳ Centrifugar</button>' : '') + '</div>' +
        '<p class="muted" style="font-size:12px;text-align:center;margin:6px 0 0">' + esc(t.inversiones) + '</p></div>' +
      '<div class="tubo-det__texto">' +
        '<span class="eyebrow">' + esc(t.tapon) + '</span><h2 style="margin:2px 0 8px">' + esc(t.nombre) + '</h2>' +
        fila('Aditivo', t.aditivo) + fila('Muestra que se obtiene', t.muestra) + fila('Cómo funciona', t.mecanismo) +
        '<p style="margin:10px 0 4px"><b>Se usa para:</b></p><div class="filtros">' + t.pruebas.map(p => '<span class="chip">' + esc(p) + '</span>').join('') + '</div>' +
        fila('Cuándo pedirlo', t.cuando) +
        '<p style="margin:10px 0 4px"><b>Errores que arruinan la muestra:</b></p><ul style="margin:0;padding-left:18px;line-height:1.6">' + t.errores.map(e => '<li>' + esc(e) + '</li>').join('') + '</ul>' +
        '<div class="card card--yodo" style="margin:12px 0 0"><b>A recordar:</b> ' + esc(t.clave) + '</div>' +
      '</div></div></div>';

    const g = document.getElementById('tbGrande');
    document.getElementById('tbInv').onclick = () => {
      if (!animar()) return;
      g.classList.remove('tubo-inv'); void g.offsetWidth; g.classList.add('tubo-inv');
    };
    const cen = document.getElementById('tbCen');
    if (cen) cen.onclick = () => {
      g.classList.remove('tubo-sep', 'tubo-gira'); void g.offsetWidth;
      g.classList.add(animar() ? 'tubo-gira' : 'tubo-sep');
      if (animar()) setTimeout(() => { g.classList.remove('tubo-gira'); g.classList.add('tubo-sep'); }, 1300);
    };
  }

  function fila(t, x){ return '<p style="margin:6px 0;line-height:1.6"><b>' + esc(t) + ':</b> ' + esc(x) + '</p>'; }

  /* ---------- quiz ---------- */
  function nuevaPregunta(){
    const lista = window.TUBOS_QUIZ;
    const [prueba, correcto] = lista[Math.floor(Math.random() * lista.length)];
    const otros = window.TUBOS.filter(t => t.id !== correcto).sort(() => Math.random() - 0.5).slice(0, 3);
    const ops = otros.concat(porId(correcto)).sort(() => Math.random() - 0.5);
    quiz.actual = { prueba, correcto }; quiz.respondida = false;
    document.getElementById('tbQuiz').innerHTML =
      '<p style="font-weight:700;margin:0 0 10px">' + esc(prueba) + '</p>' +
      '<div class="tubo-ops">' + ops.map(t => '<button class="tubo-op" data-op="' + t.id + '"><span class="tubo-chip" style="background:' + t.color + '"></span>' + esc(t.nombre) + '</button>').join('') + '</div>' +
      '<div id="tbVered" style="margin-top:10px"></div>';
    UI.$$('[data-op]').forEach(b => b.onclick = () => responder(b.dataset.op));
    pintarRacha();
  }

  function responder(id){
    if (quiz.respondida) return;
    quiz.respondida = true; quiz.total++;
    const t = porId(quiz.actual.correcto), bien = id === t.id;
    if (bien) quiz.bien++;
    UI.$$('[data-op]').forEach(b => {
      b.disabled = true;
      if (b.dataset.op === t.id) b.classList.add('ok');
      else if (b.dataset.op === id) b.classList.add('mal');
    });
    document.getElementById('tbVered').innerHTML =
      '<div class="card ' + (bien ? 'card--verde' : 'card--sangria') + '" style="margin:0"><b>' + (bien ? '¡Correcto!' : 'Va en el ' + esc(t.nombre.toLowerCase()) + '.') + '</b> ' +
      esc(t.clave) + '</div><button class="btn" id="tbSig" style="margin-top:10px">Otra →</button>';
    document.getElementById('tbSig').onclick = nuevaPregunta;
    pintarRacha();
  }

  function pintarRacha(){
    const el = document.getElementById('tbRacha');
    if (el) el.textContent = quiz.total ? 'Aciertos: ' + quiz.bien + ' de ' + quiz.total + '.' : '';
  }

  return { menu };
})();
