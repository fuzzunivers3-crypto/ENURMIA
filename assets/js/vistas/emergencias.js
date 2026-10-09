/* ============================================================
   EMERGENCIAS MEDICAS (ENURMIA)
   Lista de emergencias, ficha de abordaje (primeros pasos en
   orden, que hacer, que NO hacer, la idea que salva la vida) y
   un ejercicio para ordenar los pasos de memoria. Datos en
   datos/emergencias.js.
   ============================================================ */
window.Emergencias = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  let filtro = { texto: '', grupo: '' };
  let drill = null; // { id, orden:[...mezclados], hechos:[...], errores }

  function norm(s){ return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function porId(id){ return window.EMERGENCIAS.find(e => e.id === id); }

  function menu(param){
    const e = param && porId(param);
    if (e) return ficha(e);
    lista();
  }

  /* ---------- lista ---------- */
  function lista(){
    const visibles = window.EMERGENCIAS.filter(e =>
      (!filtro.grupo || e.grupo === filtro.grupo) &&
      (!filtro.texto || norm(e.nombre + ' ' + e.reconoce).indexOf(norm(filtro.texto)) >= 0));

    V().innerHTML =
    '<div class="escalona" style="max-width:920px">' +
      '<button class="btn btn--sm btn--fantasma" id="emAtras" style="margin-bottom:12px">← Medicina práctica</button>' +
      '<div class="encabezado"><p class="eyebrow">Medicina práctica · Emergencias</p>' +
      '<h1>Cómo abordar lo que no puede esperar</h1>' +
      '<p>Cada emergencia: cómo se reconoce, cuánto tiempo hay, qué hacer y en qué orden, qué no hacer nunca y la idea que salva la vida. ' +
      'Al final de cada una, un ejercicio para ordenar los pasos de memoria.</p></div>' +
      (window.Juego ? Juego.zona('emergencias') : '') +
      '<div class="card card--yodo" style="margin-bottom:16px"><b>Nota:</b> las dosis son de adulto salvo que se indique y sirven para estudiar. En la práctica se contrastan con el protocolo de tu institución.</div>' +
      '<input id="emBuscar" placeholder="Buscar: paro, anafilaxia, convulsión…" value="' + esc(filtro.texto) + '" ' +
        'style="width:100%;box-sizing:border-box;padding:10px 12px;border-radius:9px;border:1.5px solid var(--linea);font:inherit;margin-bottom:12px">' +
      '<div class="filtros" style="margin-bottom:18px">' +
        '<button class="chip' + (filtro.grupo ? '' : ' chip--carbon') + '" data-g="">Todas · ' + window.EMERGENCIAS.length + '</button>' +
        window.EMERGENCIAS_GRUPOS.map(g => '<button class="chip' + (filtro.grupo === g ? ' chip--carbon' : '') + '" data-g="' + esc(g) + '">' + esc(g) + '</button>').join('') +
      '</div>' +
      (visibles.length ? '<div class="rejilla rejilla--2">' + visibles.map(e =>
        (window.Juego && Juego.situacion('emergencias', 'emergencias', e.id) === 'bloqueado') ? Juego.tarjetaCerrada(e.em, e.nombre) :
        '<button class="card" data-e="' + e.id + '" style="text-align:left;cursor:pointer;font:inherit">' +
          '<div style="font-size:26px">' + e.em + '</div><h3 style="margin:6px 0 4px">' + esc(e.nombre) + '</h3>' +
          '<p class="muted" style="font-size:13.5px;margin:0">' + esc(e.reconoce.slice(0, 110)) + '…</p>' +
          '<span class="chip" style="margin-top:10px">' + esc(e.grupo) + '</span></button>').join('') + '</div>'
        : '<p class="muted">Ninguna emergencia coincide.</p>') +
    '</div>';

    document.getElementById('emAtras').onclick = () => App.ir('medpractica');
    if (window.Juego) Juego.enganchar();
    const b = document.getElementById('emBuscar');
    b.oninput = () => {
      filtro.texto = b.value; const pos = b.selectionStart; lista();
      const n = document.getElementById('emBuscar'); n.focus(); n.setSelectionRange(pos, pos);
    };
    UI.$$('[data-g]').forEach(x => x.onclick = () => { filtro.grupo = x.dataset.g; lista(); });
    UI.$$('[data-e]').forEach(x => x.onclick = () => App.ir('emergencias', x.dataset.e));
    if (window.Juego) Juego.engancharCerradas();
  }

  /* ---------- ficha ---------- */
  function lis(a){ return '<ul style="margin:6px 0 0;padding-left:18px;line-height:1.7">' + a.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>'; }

  function ficha(e){
    drill = null;
    if (window.Juego && Juego.situacion('emergencias', 'emergencias', e.id) === 'bloqueado') {
      V().innerHTML = '<div class="escalona" style="max-width:820px">' + Juego.candado('emergencias', 'emergencias', 'Volver a las emergencias') + '</div>';
      document.getElementById('jgVolver').onclick = () => App.ir('emergencias');
      return;
    }
    V().innerHTML =
    '<div class="escalona" style="max-width:820px">' +
      '<button class="btn btn--sm btn--fantasma" id="emLista" style="margin-bottom:12px">← Todas las emergencias</button>' +
      '<div class="encabezado"><p class="eyebrow">' + esc(e.grupo) + '</p><h1>' + e.em + ' ' + esc(e.nombre) + '</h1></div>' +
      '<div class="card" style="margin-bottom:12px"><span class="eyebrow">Cómo se reconoce</span><p style="margin:6px 0 0;line-height:1.6">' + esc(e.reconoce) + '</p></div>' +
      '<div class="card card--sangria" style="margin-bottom:12px"><span class="eyebrow">Cuándo: el tiempo que hay</span><p style="margin:6px 0 0;line-height:1.6">' + esc(e.tiempo) + '</p></div>' +
      '<div class="card" style="margin-bottom:12px"><span class="eyebrow">Primeros pasos, en orden</span>' +
        '<ol style="margin:6px 0 0;padding-left:20px;line-height:1.8">' + e.pasos.map(p => '<li>' + esc(p) + '</li>').join('') + '</ol></div>' +
      '<div class="card card--verde" style="margin-bottom:12px"><span class="eyebrow">Qué hacer</span>' + lis(e.hacer) + '</div>' +
      '<div class="card card--sangria" style="margin-bottom:12px"><span class="eyebrow">Qué NO hacer</span>' + lis(e.noHacer) + '</div>' +
      '<div class="card card--yodo" style="margin-bottom:12px"><span class="eyebrow">Cómo salvar una vida</span><p style="margin:6px 0 0;line-height:1.6;font-weight:600">' + esc(e.salvar) + '</p></div>' +
      '<p class="muted" style="font-size:13px">Referencia: ' + esc(e.ref) + '</p>' +
      '<div class="card" style="margin:16px 0 30px"><span class="eyebrow">Practica: ordena los pasos</span>' +
        '<p style="margin:6px 0 10px">Sin mirar arriba, toca los pasos en el orden correcto.</p>' +
        '<div id="emDrill"></div></div>' +
      '<div id="jgEstudioEm" style="margin:-14px 0 30px"></div>' +
    '</div>';
    document.getElementById('emLista').onclick = () => App.ir('emergencias');
    nuevoDrill(e);
    if (window.Juego) Juego.montarEstudio(document.getElementById('jgEstudioEm'), 'emergencias', 'emergencias', e.id);
  }

  /* ---------- ejercicio de ordenar ---------- */
  function mezclar(a){
    const b = a.map((t, i) => ({ t, i }));
    do { b.sort(() => Math.random() - 0.5); } while (b.length > 1 && b.every((x, k) => x.i === k));
    return b;
  }

  function nuevoDrill(e){
    drill = { id: e.id, opciones: mezclar(e.pasos), hechos: [], errores: 0 };
    pintarDrill(e);
  }

  function pintarDrill(e){
    const cont = document.getElementById('emDrill'); if (!cont) return;
    const fin = drill.hechos.length === e.pasos.length;
    cont.innerHTML =
      '<ol style="margin:0 0 10px;padding-left:20px;line-height:1.7">' + drill.hechos.map(i => '<li style="color:var(--quirofano)">' + esc(e.pasos[i]) + '</li>').join('') + '</ol>' +
      (fin
        ? '<div class="card ' + (drill.errores ? 'card--yodo' : 'card--verde') + '" style="margin:0 0 10px"><b>' + (drill.errores ? '¡Orden completo! Con ' + drill.errores + (drill.errores === 1 ? ' error.' : ' errores.') : '¡Orden perfecto, sin errores!') + '</b></div>' +
          '<button class="btn" id="emOtra">Repetir</button>'
        : '<div class="filtros">' + drill.opciones.filter(o => drill.hechos.indexOf(o.i) < 0).map(o =>
            '<button class="chip" data-paso="' + o.i + '" style="text-align:left;white-space:normal">' + esc(e.pasos[o.i]) + '</button>').join('') + '</div>' +
          (drill.errores ? '<p class="muted" style="margin:10px 0 0;font-size:13px">Errores: ' + drill.errores + '. Piensa qué iría antes.</p>' : ''));
    UI.$$('[data-paso]').forEach(b => b.onclick = () => {
      const i = +b.dataset.paso;
      if (i === drill.hechos.length){ drill.hechos.push(i); }
      else { drill.errores++; }
      pintarDrill(e);
    });
    const otra = document.getElementById('emOtra');
    if (otra) otra.onclick = () => nuevoDrill(e);
  }

  return { menu };
})();
