/* ============================================================
   SIMULACRO DIAGNOSTICO (ENURMIA)
   Un caso, un catalogo de pruebas y un diagnostico final. Los
   resultados salen al pedir cada prueba. Se puntua el
   diagnostico, haber pedido lo que decide y no haber pedido de
   mas. Datos: datos/casos-dx.js + datos/pruebas.js.
   ============================================================ */
window.Diagnostico = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  const SIN_HALLAZGO = 'Sin hallazgos que cambien el diagnóstico.';
  let s = null; // { caso, pedidas:[], fase }

  function porId(id){ return window.PRUEBAS.find(p => p.id === id); }
  function hist(){
    const d = Almacen.datos();
    if (!d.dxCasos) d.dxCasos = {};
    return d.dxCasos;
  }

  /* ---------- lista de casos ---------- */
  function menu(param){
    const c = param && window.CASOS_DX.find(x => x.id === param);
    if (c) return empezar(c);
    s = null;
    const h = hist();
    V().innerHTML =
    '<div class="escalona" style="max-width:920px">' +
      '<button class="btn btn--sm btn--fantasma" id="dxAtras" style="margin-bottom:12px">← Analíticas e imágenes</button>' +
      '<div class="encabezado"><p class="eyebrow">Medicina práctica · Simulacro diagnóstico</p>' +
      '<h1>Llega al diagnóstico con las pruebas que pidas</h1>' +
      '<p>Lees el caso, eliges qué pedir (cada resultado aparece al pedirlo) y al final decides el diagnóstico. ' +
      'Pesa lo que decide, no pedir todo: cada prueba innecesaria te resta.</p></div>' +
      '<button class="btn btn--vivo" id="dxAzar" style="margin-bottom:16px">🎲 Caso al azar</button>' +
      '<div class="rejilla rejilla--2">' + window.CASOS_DX.map(c => {
        const r = h[c.id];
        return '<button class="card" data-c="' + c.id + '" style="text-align:left;cursor:pointer;font:inherit">' +
          '<h3 style="margin:0 0 6px">' + esc(c.titulo) + '</h3>' +
          '<p class="muted" style="font-size:13.5px;margin:0">' + esc(c.esc.slice(0, 120)) + '…</p>' +
          '<div style="margin-top:10px"><span class="chip">' + (c.dif === 1 ? 'Básico' : 'Intermedio') + '</span>' +
          (r ? ' <span class="chip chip--verde">Mejor: ' + r.mejor + '/100</span>' : '') + '</div></button>';
      }).join('') + '</div>' +
    '</div>';
    document.getElementById('dxAtras').onclick = () => App.ir('laboratorio');
    document.getElementById('dxAzar').onclick = () => {
      const lista = window.CASOS_DX;
      empezar(lista[Math.floor(Math.random() * lista.length)]);
    };
    UI.$$('[data-c]').forEach(b => b.onclick = () => empezar(window.CASOS_DX.find(x => x.id === b.dataset.c)));
  }

  /* ---------- el caso ---------- */
  function empezar(caso){
    s = { caso, pedidas: [], fase: 'pedir', eleccion: null };
    pintar();
  }

  function pintar(){
    const c = s.caso;
    const pedidasHtml = s.pedidas.length
      ? s.pedidas.map(id => {
          const p = porId(id);
          return '<div class="card card--suero" style="margin:0 0 8px;padding:12px 14px"><b>' + p.em + ' ' + esc(p.nombre) + '</b><p style="margin:4px 0 0;line-height:1.5">' + esc(c.res[id] || SIN_HALLAZGO) + '</p></div>';
        }).join('')
      : '<p class="muted" style="margin:0">Todavía no has pedido ninguna prueba.</p>';

    const grupos = window.PRUEBAS_GRUPOS.map(g => {
      const lista = window.PRUEBAS.filter(p => p.grupo === g);
      return '<details style="margin-bottom:8px"' + (lista.some(p => s.pedidas.indexOf(p.id) >= 0) ? ' open' : '') + '><summary style="cursor:pointer;font-weight:600">' + esc(g) + '</summary>' +
        '<div class="filtros" style="margin-top:8px">' + lista.map(p =>
          '<button class="chip' + (s.pedidas.indexOf(p.id) >= 0 ? ' chip--carbon' : '') + '" data-pedir="' + p.id + '"' + (s.fase !== 'pedir' ? ' disabled' : '') + '>' + esc(p.nombre) + '</button>').join('') + '</div></details>';
    }).join('');

    V().innerHTML =
    '<div class="escalona" style="max-width:920px">' +
      '<button class="btn btn--sm btn--fantasma" id="dxLista" style="margin-bottom:12px">← Todos los casos</button>' +
      '<div class="card card--carbon" style="margin-bottom:14px"><span class="eyebrow" style="color:rgba(255,255,255,.5)">Caso · ' + esc(c.titulo) + '</span>' +
        '<p style="margin:8px 0;line-height:1.6;font-size:16px">' + esc(c.esc) + '</p>' +
        '<p class="mono" style="margin:0;font-size:13px;color:rgba(255,255,255,.75)">' + esc(c.vitales) + '</p></div>' +

      (s.fase === 'fin' ? final() :
      '<div class="rejilla rejilla--2" style="align-items:start">' +
        '<div class="card"><span class="eyebrow">Pide pruebas</span><div style="margin-top:8px">' + grupos + '</div></div>' +
        '<div class="card"><span class="eyebrow">Resultados · ' + s.pedidas.length + ' pedidas</span><div style="margin-top:8px">' + pedidasHtml + '</div></div>' +
      '</div>' +
      (s.fase === 'pedir'
        ? '<div style="margin:16px 0 30px"><button class="btn btn--vivo" id="dxYa">Ya sé el diagnóstico →</button></div>'
        : '<div class="card" style="margin:16px 0 30px"><span class="eyebrow">¿Cuál es tu diagnóstico?</span><div id="dxOps" style="margin-top:10px">' +
            c.ops.map((o, i) => '<label class="row" style="gap:10px;align-items:center;padding:10px 12px;border:1.5px solid var(--linea);border-radius:10px;margin-bottom:8px;cursor:pointer">' +
              '<input type="radio" name="dxop" value="' + i + '"> <span>' + esc(o) + '</span></label>').join('') +
            '</div><button class="btn btn--vivo" id="dxOk" disabled>Confirmar diagnóstico</button></div>')) +
    '</div>';

    document.getElementById('dxLista').onclick = () => menu();
    UI.$$('[data-pedir]').forEach(b => b.onclick = () => {
      const id = b.dataset.pedir, i = s.pedidas.indexOf(id);
      if (i >= 0) s.pedidas.splice(i, 1); else s.pedidas.push(id);
      pintar();
    });
    const otro = document.getElementById('dxOtro');
    if (otro){
      otro.onclick = () => {
        const otros = window.CASOS_DX.filter(x => x.id !== s.caso.id);
        empezar(otros[Math.floor(Math.random() * otros.length)]);
      };
      document.getElementById('dxRep').onclick = () => empezar(s.caso);
    }
    const ya = document.getElementById('dxYa');
    if (ya) ya.onclick = () => { s.fase = 'dx'; pintar(); window.scrollTo(0, document.body.scrollHeight); };
    const ok = document.getElementById('dxOk');
    if (ok){
      UI.$$('[name="dxop"]').forEach(r => r.onchange = () => { s.eleccion = +r.value; ok.disabled = false; });
      ok.onclick = () => { s.fase = 'fin'; guardar(); pintar(); window.scrollTo(0, 0); };
    }
  }

  /* ---------- puntaje ---------- */
  function puntuar(){
    const c = s.caso;
    const acierto = s.eleccion === c.ok;
    const claves = c.claves.filter(k => s.pedidas.indexOf(k) >= 0);
    const faltan = c.claves.filter(k => s.pedidas.indexOf(k) < 0);
    const sobran = s.pedidas.filter(k => c.claves.indexOf(k) < 0 && c.utiles.indexOf(k) < 0);
    let p = (acierto ? 50 : 0) + Math.round(40 * claves.length / c.claves.length) - 4 * sobran.length;
    if (acierto && s.pedidas.length <= c.claves.length + 3 && !faltan.length) p += 10;
    return { acierto, claves, faltan, sobran, total: Math.max(0, Math.min(100, p)) };
  }

  function guardar(){
    const r = puntuar(), h = hist(), a = h[s.caso.id] || { mejor: 0, intentos: 0 };
    a.mejor = Math.max(a.mejor, r.total); a.intentos++;
    h[s.caso.id] = a;
    Almacen.guardar();
  }

  function final(){
    const c = s.caso, r = puntuar();
    const nombres = ids => ids.map(id => esc(porId(id).nombre)).join(', ');
    return '<div class="card ' + (r.acierto ? 'card--verde' : 'card--sangria') + '" style="margin-bottom:14px">' +
        '<span class="eyebrow">Resultado</span>' +
        '<div class="mono" style="font-size:40px;font-weight:800;margin:4px 0">' + r.total + '<span style="font-size:16px"> / 100</span></div>' +
        '<p style="margin:0;line-height:1.6"><b>' + (r.acierto ? 'Diagnóstico correcto: ' : 'Tu respuesta fue «' + esc(c.ops[s.eleccion]) + '». El diagnóstico era: ') + esc(c.ops[c.ok]) + '.</b></p></div>' +

      '<div class="card" style="margin-bottom:12px"><span class="eyebrow">Tus pruebas</span>' +
        '<ul style="margin:8px 0 0;padding-left:18px;line-height:1.7">' +
          '<li><b>Las que deciden:</b> ' + (r.claves.length ? nombres(r.claves) : 'ninguna') + '.</li>' +
          (r.faltan.length ? '<li><b>Te faltó pedir:</b> ' + nombres(r.faltan) + '.</li>' : '') +
          (r.sobran.length ? '<li><b>Innecesarias (cada una resta 4):</b> ' + nombres(r.sobran) + '.</li>' : '<li>No pediste pruebas innecesarias.</li>') +
        '</ul></div>' +
      '<div class="card" style="margin-bottom:12px"><span class="eyebrow">Por qué es este diagnóstico</span><p style="margin:6px 0 0;line-height:1.7">' + esc(c.porque) + '</p></div>' +
      '<div class="card" style="margin-bottom:12px"><span class="eyebrow">Qué se hace después</span><p style="margin:6px 0 0;line-height:1.7">' + esc(c.abordaje) + '</p></div>' +
      '<p class="muted" style="font-size:13px">Referencia: ' + esc(c.ref) + '</p>' +
      '<div class="row" style="gap:8px;margin:16px 0 30px"><button class="btn btn--vivo" id="dxOtro">Otro caso</button><button class="btn btn--fantasma" id="dxRep">Repetir este</button></div>';
  }

  return { menu };
})();
