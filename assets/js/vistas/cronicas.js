/* ============================================================
   ENFERMEDADES CRONICAS (ENURMIA)
   Capitulos de manejo basados en guias vigentes: resumen, metas,
   secciones de prosa, cuando referir, perlas y preguntas de
   practica. Datos en datos/cronicas-1.js y cronicas-2.js.
   ============================================================ */
window.Cronicas = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  let filtro = { texto: '', grupo: '' };
  const hechas = {}; // id enfermedad -> { i: indiceElegido }

  function norm(s){ return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function porId(id){ return window.CRONICAS.find(c => c.id === id); }

  function menu(param){
    const c = param && porId(param);
    if (c) return capitulo(c);
    lista();
  }

  /* ---------- lista ---------- */
  function lista(){
    const visibles = window.CRONICAS.filter(c =>
      (!filtro.grupo || c.grupo === filtro.grupo) &&
      (!filtro.texto || norm(c.nombre + ' ' + c.resumen + ' ' + c.guia).indexOf(norm(filtro.texto)) >= 0));

    V().innerHTML =
    '<div class="escalona" style="max-width:920px">' +
      '<button class="btn btn--sm btn--fantasma" id="crAtras" style="margin-bottom:12px">← Medicina práctica</button>' +
      '<div class="encabezado"><p class="eyebrow">Medicina práctica · Enfermedades crónicas</p>' +
      '<h1>Aprender a tratar la enfermedad crónica</h1>' +
      '<p>Cada capítulo sigue la guía oficial más reciente: diagnóstico, metas, tratamiento escalonado con sus dosis, seguimiento, ' +
      'cuándo referir, errores frecuentes y preguntas para practicar.</p></div>' +
      (window.Juego ? Juego.zona('cronicas') : '') +
      '<div class="card card--yodo" style="margin-bottom:16px"><b>Nota:</b> el contenido resume las guías vigentes en octubre de 2026 y las dosis son de adulto, para estudiar. ' +
      'Las guías se actualizan: contrasta siempre con el texto original y con el protocolo de tu institución.</div>' +
      '<input id="crBuscar" placeholder="Buscar: hipertensión, EPOC, riñón, tiroides…" value="' + esc(filtro.texto) + '" ' +
        'style="width:100%;box-sizing:border-box;padding:10px 12px;border-radius:9px;border:1.5px solid var(--linea);font:inherit;margin-bottom:12px">' +
      '<div class="filtros" style="margin-bottom:18px">' +
        '<button class="chip' + (filtro.grupo ? '' : ' chip--carbon') + '" data-g="">Todas · ' + window.CRONICAS.length + '</button>' +
        window.CRONICAS_GRUPOS.map(g => '<button class="chip' + (filtro.grupo === g ? ' chip--carbon' : '') + '" data-g="' + esc(g) + '">' + esc(g) + '</button>').join('') +
      '</div>' +
      (visibles.length ? '<div class="rejilla rejilla--2">' + visibles.map(c =>
        '<button class="card" data-c="' + c.id + '" style="text-align:left;cursor:pointer;font:inherit">' +
          '<div style="font-size:26px">' + c.em + '</div><h3 style="margin:6px 0 4px">' + esc(c.nombre) + '</h3>' +
          '<p class="muted" style="font-size:13.5px;margin:0">' + esc(c.resumen.slice(0, 130)) + '…</p>' +
          '<span class="chip" style="margin-top:10px">' + esc(c.grupo) + '</span></button>').join('') + '</div>'
        : '<p class="muted">Ninguna enfermedad coincide.</p>') +
    '</div>';

    document.getElementById('crAtras').onclick = () => App.ir('medpractica');
    if (window.Juego) Juego.enganchar();
    const b = document.getElementById('crBuscar');
    b.oninput = () => {
      filtro.texto = b.value; const pos = b.selectionStart; lista();
      const n = document.getElementById('crBuscar'); n.focus(); n.setSelectionRange(pos, pos);
    };
    UI.$$('[data-g]').forEach(x => x.onclick = () => { filtro.grupo = x.dataset.g; lista(); });
    UI.$$('[data-c]').forEach(x => x.onclick = () => App.ir('cronicas', x.dataset.c));
  }

  /* ---------- capitulo ---------- */
  function lis(a){ return '<ul style="margin:6px 0 0;padding-left:18px;line-height:1.7">' + a.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>'; }

  function capitulo(c){
    hechas[c.id] = hechas[c.id] || {};
    V().innerHTML =
    '<div class="escalona" style="max-width:820px">' +
      '<button class="btn btn--sm btn--fantasma" id="crLista" style="margin-bottom:12px">← Todas las enfermedades</button>' +
      '<div class="encabezado"><p class="eyebrow">' + esc(c.grupo) + '</p><h1>' + c.em + ' ' + esc(c.nombre) + '</h1></div>' +
      '<div class="card card--suero" style="margin-bottom:12px"><span class="eyebrow">Guía de referencia</span><p style="margin:6px 0 0;line-height:1.6">' + esc(c.guia) + '</p></div>' +
      '<div class="card" style="margin-bottom:12px"><span class="eyebrow">En breve</span><p style="margin:6px 0 0;line-height:1.7">' + esc(c.resumen) + '</p></div>' +

      '<div class="card card--verde" style="margin-bottom:16px"><span class="eyebrow">Metas y cifras clave</span>' +
        '<div style="margin-top:8px">' + c.metas.map(m => '<div class="row" style="justify-content:space-between;gap:12px;padding:6px 0;border-bottom:1px solid rgba(0,0,0,.08)"><span>' + esc(m[0]) + '</span><b style="text-align:right">' + esc(m[1]) + '</b></div>').join('') + '</div></div>' +

      '<div class="filtros" style="margin-bottom:12px">' + c.secciones.map((s, i) => '<button class="chip" data-ir="crS' + i + '">' + esc(s.t) + '</button>').join('') + '</div>' +

      c.secciones.map((s, i) =>
        '<div class="card" id="crS' + i + '" style="margin-bottom:12px"><h3 style="margin:0 0 8px">' + esc(s.t) + '</h3>' +
        s.p.map(p => '<p style="margin:0 0 10px;line-height:1.75">' + esc(p) + '</p>').join('') + '</div>').join('') +

      '<div class="card card--sangria" style="margin:16px 0 12px"><span class="eyebrow">Cuándo referir</span>' + lis(c.referir) + '</div>' +
      '<div class="card card--yodo" style="margin-bottom:16px"><span class="eyebrow">Perlas y errores frecuentes</span>' + lis(c.perlas) + '</div>' +

      '<div class="card" style="margin-bottom:30px"><span class="eyebrow">Practica</span><div id="crPractica" style="margin-top:8px"></div></div>' +
    '</div>';

    document.getElementById('crLista').onclick = () => App.ir('cronicas');
    UI.$$('[data-ir]').forEach(b => b.onclick = () => {
      const el = document.getElementById(b.dataset.ir);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    practica(c);
  }

  function practica(c){
    const h = hechas[c.id];
    document.getElementById('crPractica').innerHTML = c.practica.map((q, qi) => {
      const el = h[qi];
      return '<div style="margin-bottom:18px"><p style="font-weight:700;line-height:1.5;margin:0 0 8px">' + (qi + 1) + '. ' + esc(q.q) + '</p>' +
        '<div class="tubo-ops" style="grid-template-columns:1fr">' + q.ops.map((o, oi) => {
          let cls = '';
          if (el !== undefined){ if (oi === q.ok) cls = ' ok'; else if (oi === el) cls = ' mal'; }
          return '<button class="tubo-op' + cls + '" data-q="' + qi + '" data-o="' + oi + '"' + (el !== undefined ? ' disabled' : '') + '>' +
            '<b style="flex:none">' + 'ABCD'[oi] + '</b><span>' + esc(o) + '</span></button>';
        }).join('') + '</div>' +
        (el !== undefined ? '<div class="card ' + (el === q.ok ? 'card--verde' : 'card--sangria') + '" style="margin:8px 0 0"><b>' + (el === q.ok ? '¡Correcto! ' : 'Correcta: ' + 'ABCD'[q.ok] + '. ') + '</b>' + esc(q.exp) + '</div>' : '') +
      '</div>';
    }).join('');
    UI.$$('[data-q]').forEach(b => b.onclick = () => { h[+b.dataset.q] = +b.dataset.o; practica(c); });
  }

  return { menu };
})();
