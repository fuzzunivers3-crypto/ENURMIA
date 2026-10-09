/* ============================================================
   ANALITICAS E IMAGENES (ENURMIA)
   Catalogo de pruebas (para que sirve cada una, que diagnostica
   sola o en combinacion, cuando pedirla) y los patrones
   combinados. Datos en datos/pruebas.js. El simulacro
   diagnostico vive aparte (diagnostico.js) porque exige
   membresia y esto es lectura.
   ============================================================ */
window.Laboratorio = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  let tab = 'pruebas';
  let filtro = { texto: '', grupo: '' };
  let abierta = null;

  function norm(s){ return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  function menu(param){
    if (param === 'pruebas' || param === 'patrones') tab = param;
    V().innerHTML =
    '<div class="escalona" style="max-width:920px">' +
      '<button class="btn btn--sm btn--fantasma" id="labAtras" style="margin-bottom:12px">← Medicina práctica</button>' +
      '<div class="encabezado"><p class="eyebrow">Medicina práctica · Analíticas e imágenes</p>' +
      '<h1>Qué pedir, por qué y qué te dice</h1>' +
      '<p>Para qué sirve cada prueba, qué diagnóstico da sola o combinada con otras, y cuándo conviene pedirla. ' +
      'Después, ponlo a prueba en el simulacro diagnóstico.</p></div>' +
      (window.Juego ? Juego.zona('laboratorio') : '') +
      '<div class="row" style="gap:8px;flex-wrap:wrap;margin-bottom:16px">' +
        '<button class="chip' + (tab === 'pruebas' ? ' chip--carbon' : '') + '" data-tab="pruebas">Pruebas · ' + window.PRUEBAS.length + '</button>' +
        '<button class="chip' + (tab === 'patrones' ? ' chip--carbon' : '') + '" data-tab="patrones">Patrones combinados · ' + window.PATRONES.length + '</button>' +
        '<button class="btn btn--vivo btn--sm" id="labSim" style="margin-left:auto">🩺 Simulacro diagnóstico</button>' +
      '</div>' +
      '<div id="labCuerpo"></div>' +
    '</div>';

    document.getElementById('labAtras').onclick = () => App.ir('medpractica');
    if (window.Juego) Juego.enganchar();
    document.getElementById('labSim').onclick = () => App.ir('diagnostico');
    UI.$$('[data-tab]').forEach(b => b.onclick = () => { tab = b.dataset.tab; menu(); });
    if (tab === 'pruebas') pruebas(); else patrones();
  }

  /* ---------- pruebas ---------- */
  function pruebas(){
    const visibles = window.PRUEBAS.filter(p =>
      (!filtro.grupo || p.grupo === filtro.grupo) &&
      (!filtro.texto || norm([p.nombre, p.mide, p.solo, p.combinada, p.cuando].join(' ')).indexOf(norm(filtro.texto)) >= 0));

    document.getElementById('labCuerpo').innerHTML =
      '<input id="labBuscar" placeholder="Buscar: troponina, anemia, tiroides…" value="' + esc(filtro.texto) + '" ' +
        'style="width:100%;box-sizing:border-box;padding:10px 12px;border-radius:9px;border:1.5px solid var(--linea);font:inherit;margin-bottom:12px">' +
      '<div class="filtros" style="margin-bottom:16px">' +
        '<button class="chip' + (filtro.grupo ? '' : ' chip--carbon') + '" data-g="">Todas</button>' +
        window.PRUEBAS_GRUPOS.map(g => '<button class="chip' + (filtro.grupo === g ? ' chip--carbon' : '') + '" data-g="' + esc(g) + '">' + esc(g) + '</button>').join('') +
      '</div>' +
      (visibles.length ? visibles.map(fila).join('') : '<p class="muted">Ninguna prueba coincide.</p>');

    const b = document.getElementById('labBuscar');
    b.oninput = () => {
      filtro.texto = b.value; const pos = b.selectionStart; pruebas();
      const n = document.getElementById('labBuscar'); n.focus(); n.setSelectionRange(pos, pos);
    };
    UI.$$('[data-g]').forEach(x => x.onclick = () => { filtro.grupo = x.dataset.g; pruebas(); });
    UI.$$('details[data-p]').forEach(d => d.ontoggle = () => { if (d.open) abierta = d.dataset.p; });
    if (window.Juego) { Juego.engancharCerradas(); Juego.engancharEstudio(() => pruebas()); }
  }

  function fila(p){
    if (window.Juego && Juego.situacion('laboratorio', 'pruebas', p.id) === 'bloqueado')
      return '<div class="card jg-bloq jg-bloq--fila" data-jgbloq="1"><span style="font-size:20px;margin-right:8px">' + p.em + '</span><b>' + esc(p.nombre) + '</b>' +
        ' <span class="chip" style="margin-left:8px;font-weight:500">' + esc(p.grupo) + '</span><span class="jg-bloq__ic">🔒</span></div>';
    return '<details class="card" data-p="' + esc(p.id) + '"' + (abierta === p.id ? ' open' : '') + ' style="margin-bottom:10px;padding:14px 16px">' +
      '<summary style="cursor:pointer;font-weight:700;list-style:none"><span style="font-size:20px;margin-right:8px">' + p.em + '</span>' + esc(p.nombre) +
        ' <span class="chip" style="margin-left:8px;font-weight:500">' + esc(p.grupo) + '</span></summary>' +
      '<div style="margin-top:10px;line-height:1.6">' +
        linea('Qué mide', p.mide) + linea('Sola diagnostica', p.solo) + linea('En combinación', p.combinada) +
        linea('Cuándo pedirla', p.cuando) +
        '<div class="card card--yodo" style="margin:10px 0 0"><b>Ojo:</b> ' + esc(p.ojo) + '</div>' +
        (window.Juego ? '<div style="margin-top:12px">' + Juego.botonEstudio('laboratorio', 'pruebas', p.id) + '</div>' : '') +
      '</div></details>';
  }

  function linea(t, x){ return '<p style="margin:6px 0"><b>' + esc(t) + ':</b> ' + esc(x) + '</p>'; }

  /* ---------- patrones ---------- */
  function patrones(){
    document.getElementById('labCuerpo').innerHTML =
      '<p class="muted" style="margin:0 0 14px">Los hallazgos rara vez se interpretan solos: el diagnóstico sale del patrón.</p>' +
      '<div class="rejilla rejilla--2">' + window.PATRONES.map((p, i) =>
        (window.Juego && Juego.situacion('laboratorio', 'patrones', 'pat' + i) === 'bloqueado') ? Juego.tarjetaCerrada('🧩', p.titulo) :
        '<div class="card" id="pat' + i + '"><h3 style="margin:0 0 8px">' + esc(p.titulo) + '</h3>' +
        '<ul style="margin:0 0 10px;padding-left:18px;line-height:1.6">' + p.pistas.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>' +
        '<p style="margin:0 0 8px;line-height:1.6"><b>Sugiere:</b> ' + esc(p.dx) + '</p>' +
        '<p class="muted" style="margin:0;font-size:13.5px;line-height:1.5">' + esc(p.nota) + '</p>' +
        (window.Juego ? '<div style="margin-top:12px">' + Juego.botonEstudio('laboratorio', 'patrones', 'pat' + i) + '</div>' : '') + '</div>').join('') + '</div>';
    if (window.Juego) { Juego.engancharCerradas(); Juego.engancharEstudio(() => patrones()); }
  }

  /* abrir una prueba o un patron desde la ruta de estudio */
  function abrir(t, id){
    tab = t; filtro = { texto: '', grupo: '' };
    if (t === 'pruebas') abierta = id;
    App.ir('laboratorio', t);
    setTimeout(() => {
      const el = t === 'pruebas' ? document.querySelector('details[data-p="' + id + '"]') : document.getElementById(id);
      if (el) { if (el.tagName === 'DETAILS') el.open = true; el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }, 80);
  }

  return { menu, abrir };
})();
