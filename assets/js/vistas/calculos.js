/* ============================================================
   CALCULOS MEDICOS (ENURMIA)
   Lista de calculos, ficha con la explicacion, calculadora en
   vivo, ejemplo resuelto y practica con casos al azar. Todo sale
   de CALCULOS (datos/calculos.js): cada calcular() es la unica
   fuente de verdad, asi el ejemplo y la practica no pueden
   contradecir a la calculadora.
   ============================================================ */
window.Calculos = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  const COLOR = { ok: 'card--verde', alerta: 'card--yodo', peligro: 'card--sangria', info: 'card--suero' };
  let filtro = { texto: '', grupo: '' };
  let racha = { bien: 0, total: 0 };
  let caso = null;

  function hoyISO(){
    const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  }
  function haceDias(n){
    const d = new Date(); d.setDate(d.getDate() - n); d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  }
  function norm(s){ return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function fmt(x, n){ return Number(x).toFixed(n).replace('.', ','); }
  function porId(id){ return (window.CALCULOS || []).find(c => c.id === id); }

  /* ---------- lista ---------- */
  function menu(param){
    const c = param && porId(param);
    if (c) return ficha(c);
    lista();
  }

  function lista(){
    const todos = window.CALCULOS || [];
    const grupos = window.CALCULOS_GRUPOS || [];
    const visibles = todos.filter(c =>
      (!filtro.grupo || c.grupo === filtro.grupo) &&
      (!filtro.texto || norm(c.nombre + ' ' + c.que + ' ' + c.sirve).indexOf(norm(filtro.texto)) >= 0));

    V().innerHTML =
    '<div class="escalona" style="max-width:920px">' +
      '<div class="encabezado"><p class="eyebrow">Medicina práctica · Cálculos</p>' +
      '<h1>Los cálculos que se usan a la cabecera del paciente</h1>' +
      '<p>Cada uno explica qué es, cómo se hace, para qué sirve, por qué se hace y cómo cambia la conducta con el paciente. ' +
      'Tiene calculadora, un ejemplo resuelto paso a paso y casos para practicar.</p></div>' +
      (window.Juego ? Juego.zona('calculos') : '') +
      '<div class="row" style="gap:8px;flex-wrap:wrap;margin-bottom:14px">' +
        '<input id="calBuscar" class="grow" placeholder="Buscar: calcio, glomerular, quemado…" value="' + esc(filtro.texto) + '" ' +
          'style="min-width:220px;padding:10px 12px;border-radius:9px;border:1.5px solid var(--linea);font:inherit">' +
      '</div>' +
      '<div class="filtros" style="margin-bottom:18px">' +
        '<button class="chip' + (filtro.grupo ? '' : ' chip--carbon') + '" data-grupo="">Todos · ' + todos.length + '</button>' +
        grupos.map(g => '<button class="chip' + (filtro.grupo === g ? ' chip--carbon' : '') + '" data-grupo="' + esc(g) + '">' + esc(g) + '</button>').join('') +
      '</div>' +
      (visibles.length
        ? '<div class="rejilla rejilla--2">' + visibles.map(tarjeta).join('') + '</div>'
        : '<p class="muted">Ningún cálculo coincide con la búsqueda.</p>') +
    '</div>';

    if (window.Juego) Juego.enganchar();
    const b = document.getElementById('calBuscar');
    b.oninput = () => {
      filtro.texto = b.value;
      const pos = b.selectionStart;
      lista();
      const n = document.getElementById('calBuscar'); n.focus(); n.setSelectionRange(pos, pos);
    };
    UI.$$('[data-grupo]').forEach(x => x.onclick = () => { filtro.grupo = x.dataset.grupo; lista(); });
    UI.$$('[data-calc]').forEach(x => x.onclick = () => App.ir('calculos', x.dataset.calc));
  }

  function tarjeta(c){
    return '<button class="card" data-calc="' + esc(c.id) + '" style="text-align:left;cursor:pointer;font:inherit">' +
      '<div style="font-size:26px">' + c.em + '</div>' +
      '<h3 style="margin:6px 0 4px">' + esc(c.nombre) + '</h3>' +
      '<p class="muted" style="font-size:13.5px;margin:0">' + esc(c.que) + '</p>' +
      '<span class="chip" style="margin-top:10px">' + esc(c.grupo) + '</span>' +
    '</button>';
  }

  /* ---------- ficha ---------- */
  function seccion(rotulo, texto, extra){
    return '<div class="card" style="margin-bottom:12px' + (extra || '') + '"><span class="eyebrow">' + rotulo + '</span>' +
      '<p style="margin:6px 0 0;line-height:1.6">' + esc(texto) + '</p></div>';
  }

  function campoHtml(f, valor, pref){
    const id = pref + f.id;
    if (f.tipo === 'sel'){
      return '<label class="campo"><span>' + esc(f.etq) + '</span><select id="' + id + '" data-f="' + f.id + '" ' +
        'style="padding:10px;border-radius:9px;border:1.5px solid var(--linea);font:inherit;background:var(--papel)">' +
        f.opciones.map(o => '<option value="' + o[0] + '"' + (+valor === o[0] ? ' selected' : '') + '>' + esc(o[1]) + '</option>').join('') +
      '</select></label>';
    }
    if (f.tipo === 'chk'){
      return '<label class="row" style="gap:10px;align-items:center;margin:8px 0;cursor:pointer">' +
        '<input type="checkbox" id="' + id + '" data-f="' + f.id + '"' + (+valor ? ' checked' : '') + ' style="width:20px;height:20px"> ' +
        '<span>' + esc(f.etq) + '</span></label>';
    }
    if (f.tipo === 'fecha'){
      return '<label class="campo"><span>' + esc(f.etq) + '</span><input type="date" id="' + id + '" data-f="' + f.id + '" value="' + esc(valor || '') + '" ' +
        'style="padding:10px;border-radius:9px;border:1.5px solid var(--linea);font:inherit"></label>';
    }
    return '<label class="campo"><span>' + esc(f.etq) + (f.u ? ' <span class="muted">(' + esc(f.u) + ')</span>' : '') + '</span>' +
      '<input type="number" inputmode="decimal" id="' + id + '" data-f="' + f.id + '" min="' + f.min + '" max="' + f.max + '" step="' + f.paso + '" value="' + esc(valor) + '" ' +
      'style="padding:10px;border-radius:9px;border:1.5px solid var(--linea);font:inherit"></label>';
  }

  function leer(c, pref){
    const v = {}; let falta = false;
    c.campos.forEach(f => {
      const el = document.getElementById(pref + f.id);
      if (!el) { falta = true; return; }
      if (f.tipo === 'chk') v[f.id] = el.checked ? 1 : 0;
      else if (f.tipo === 'fecha'){ if (!el.value) falta = true; v[f.id] = el.value; }
      else if (f.tipo === 'sel') v[f.id] = +el.value;
      else { const n = parseFloat(String(el.value).replace(',', '.')); if (isNaN(n)) falta = true; v[f.id] = n; }
    });
    return falta ? null : v;
  }

  function resultadoHtml(c, v){
    if (!v) return '<p class="muted">Completa todos los datos para calcular.</p>';
    let r;
    try { r = c.calcular(v); } catch (e) { return '<p class="muted">No se pudo calcular con esos datos.</p>'; }
    if (r.valor === null || r.valor === undefined || isNaN(r.valor)) return '<div class="aviso">' + esc(r.lectura || 'Revisa los datos.') + '</div>';
    const fuera = c.campos.filter(f => f.tipo === 'num' && (v[f.id] < f.min || v[f.id] > f.max)).map(f => f.etq);
    const dec = Math.abs(r.valor) >= 100 || Number.isInteger(r.valor) ? 0 : Math.abs(r.valor) >= 10 ? 1 : 2;
    return '<div class="card ' + (COLOR[r.nivel] || '') + '" style="margin:0">' +
        '<span class="eyebrow">Resultado</span>' +
        '<div class="mono" style="font-size:40px;font-weight:800;margin:4px 0">' + fmt(r.valor, dec) + ' <span style="font-size:15px;font-weight:600">' + esc(r.unidad) + '</span></div>' +
        '<p style="margin:0;line-height:1.5">' + esc(r.lectura) + '</p>' +
        (r.extra.length ? '<ul style="margin:10px 0 0;padding-left:18px">' + r.extra.map(e => '<li><b>' + esc(e.etq) + ':</b> ' + esc(e.val) + '</li>').join('') + '</ul>' : '') +
      '</div>' +
      (fuera.length ? '<p class="muted" style="font-size:12.5px;margin-top:8px">⚠️ Fuera del rango habitual: ' + esc(fuera.join(', ')) + '. Revisa las unidades.</p>' : '') +
      (r.pasos.length ? '<details style="margin-top:10px"><summary style="cursor:pointer;font-weight:600">Ver el cálculo paso a paso</summary>' +
        '<ol style="margin:8px 0 0;padding-left:20px;line-height:1.7">' + r.pasos.map(p => '<li class="mono" style="font-size:13px">' + esc(p) + '</li>').join('') + '</ol></details>' : '');
  }

  function ficha(c){
    caso = null;
    const defs = {};
    c.campos.forEach(f => { defs[f.id] = f.tipo === 'fecha' ? (f.rand && f.rand[1] === 0 ? hoyISO() : haceDias(120)) : f.def; });
    const ejR = c.calcular(c.ej);
    const ejDec = Math.abs(ejR.valor) >= 100 || Number.isInteger(ejR.valor) ? 0 : Math.abs(ejR.valor) >= 10 ? 1 : 2;

    V().innerHTML =
    '<div class="escalona" style="max-width:820px">' +
      '<button class="btn btn--sm btn--fantasma" id="calAtras" style="margin-bottom:12px">← Todos los cálculos</button>' +
      '<div class="encabezado"><p class="eyebrow">' + esc(c.grupo) + '</p><h1>' + c.em + ' ' + esc(c.nombre) + '</h1><p>' + esc(c.que) + '</p></div>' +
      '<div class="card card--carbon mono" style="margin-bottom:12px;padding:16px;line-height:1.6;font-size:14px">' + esc(c.formula) + '</div>' +
      seccion('Para qué sirve', c.sirve) +
      seccion('Por qué se hace', c.porque) +
      seccion('Cómo cambia la conducta', c.conducta) +

      '<div class="card" style="margin:18px 0"><span class="eyebrow">Calculadora</span>' +
        '<div id="calCampos" style="margin-top:8px">' + c.campos.map(f => campoHtml(f, defs[f.id], 'c_')).join('') + '</div>' +
        '<div id="calRes" style="margin-top:14px"></div></div>' +

      '<div class="card" style="margin-bottom:18px"><span class="eyebrow">Ejemplo resuelto</span>' +
        '<p style="margin:6px 0 8px;line-height:1.6"><b>Caso:</b> ' + esc(c.ejTxt) + '</p>' +
        '<ol style="margin:0 0 8px;padding-left:20px;line-height:1.7">' + ejR.pasos.map(p => '<li class="mono" style="font-size:13px">' + esc(p) + '</li>').join('') + '</ol>' +
        '<p style="margin:0"><b>Resultado: ' + fmt(ejR.valor, ejDec) + ' ' + esc(ejR.unidad) + '.</b> ' + esc(ejR.lectura) + '</p></div>' +

      '<div class="card" id="calPractica" style="margin-bottom:30px"><span class="eyebrow">Practica</span>' +
        '<p style="margin:6px 0 10px">Te doy datos al azar; calcula tú el resultado y compruébalo. <span class="muted" id="calRacha"></span></p>' +
        '<div id="calCaso"></div>' +
        '<button class="btn btn--vivo" id="calNuevo">Ponme un caso</button></div>' +
    '</div>';

    const pintar = () => { document.getElementById('calRes').innerHTML = resultadoHtml(c, leer(c, 'c_')); };
    UI.$$('#calCampos [data-f]').forEach(el => { el.oninput = pintar; el.onchange = pintar; });
    pintar();
    pintarRacha();
    document.getElementById('calAtras').onclick = () => App.ir('calculos');
    document.getElementById('calNuevo').onclick = () => nuevoCaso(c);
  }

  /* ---------- practica ---------- */
  function azar(a, b){ return a + Math.random() * (b - a); }

  function generar(c){
    const v = {};
    c.campos.forEach(f => {
      if (f.tipo === 'num'){
        let x = f.def * azar(0.6, 1.5);
        x = Math.min(f.max, Math.max(f.min, x));
        const d = (String(f.paso).split('.')[1] || '').length;
        v[f.id] = +(Math.round(x / f.paso) * f.paso).toFixed(d);
      } else if (f.tipo === 'sel'){
        v[f.id] = f.opciones[Math.floor(Math.random() * f.opciones.length)][0];
      } else if (f.tipo === 'chk'){
        v[f.id] = Math.random() < 0.4 ? 1 : 0;
      } else if (f.tipo === 'fecha'){
        const r = f.rand || [60, 260];
        v[f.id] = haceDias(Math.round(azar(r[0], r[1])));
      }
    });
    return v;
  }

  function etiquetaDato(f, x){
    if (f.tipo === 'sel') { const o = f.opciones.find(o => o[0] === x); return o ? o[1] : x; }
    if (f.tipo === 'chk') return x ? 'Sí' : 'No';
    if (f.tipo === 'fecha') return new Date(x + 'T00:00:00').toLocaleDateString('es-DO', { day: 'numeric', month: 'long', year: 'numeric' });
    return fmt(x, String(x).indexOf('.') >= 0 ? (String(x).split('.')[1] || '').length : 0) + (f.u ? ' ' + f.u : '');
  }

  function nuevoCaso(c){
    let v, r, n = 0;
    do { v = generar(c); r = c.calcular(v); n++; } while ((r.valor === null || isNaN(r.valor)) && n < 20);
    caso = { id: c.id, v, r };
    const exacto = /puntos|de 15|de 10|semanas/.test(r.unidad);
    document.getElementById('calCaso').innerHTML =
      '<div class="card card--suero" style="margin:0 0 10px"><ul style="margin:0;padding-left:18px;line-height:1.8">' +
        c.campos.map(f => '<li><b>' + esc(f.etq) + ':</b> ' + esc(etiquetaDato(f, v[f.id])) + '</li>').join('') + '</ul></div>' +
      '<div class="row" style="gap:8px;align-items:center;margin-bottom:10px">' +
        '<input id="calResp" type="number" step="any" inputmode="decimal" placeholder="Tu resultado (' + esc(r.unidad) + ')" class="grow" ' +
          'style="padding:10px;border-radius:9px;border:1.5px solid var(--linea);font:inherit">' +
        '<button class="btn" id="calComprobar">Comprobar</button></div>' +
      '<p class="muted" style="font-size:12.5px;margin:0 0 10px">' + (exacto ? 'Responde con el número exacto.' : 'Se acepta un margen del 3 %.') + '</p>' +
      '<div id="calVered"></div>';
    document.getElementById('calComprobar').onclick = () => comprobar(c, exacto);
    document.getElementById('calResp').onkeydown = e => { if (e.key === 'Enter') comprobar(c, exacto); };
    document.getElementById('calResp').focus();
  }

  function comprobar(c, exacto){
    if (!caso || caso.id !== c.id) return;
    const txt = document.getElementById('calResp').value;
    const x = parseFloat(String(txt).replace(',', '.'));
    if (isNaN(x)) { UI.tostada('Escribe un número.', 'mal'); return; }
    const real = caso.r.valor;
    const bien = exacto ? Math.round(x) === Math.round(real) : Math.abs(x - real) <= Math.abs(real) * 0.03 + 1e-9;
    racha.total++; if (bien) racha.bien++;
    pintarRacha();
    const dec = Math.abs(real) >= 100 || Number.isInteger(real) ? 0 : Math.abs(real) >= 10 ? 1 : 2;
    document.getElementById('calVered').innerHTML =
      '<div class="card ' + (bien ? 'card--verde' : 'card--sangria') + '" style="margin:0">' +
        '<b>' + (bien ? '¡Correcto!' : 'No coincide.') + '</b> Resultado: ' + fmt(real, dec) + ' ' + esc(caso.r.unidad) + '. ' + esc(caso.r.lectura) +
        '<ol style="margin:8px 0 0;padding-left:20px;line-height:1.7">' + caso.r.pasos.map(p => '<li class="mono" style="font-size:13px">' + esc(p) + '</li>').join('') + '</ol></div>';
    document.getElementById('calComprobar').disabled = true;
  }

  function pintarRacha(){
    const el = document.getElementById('calRacha');
    if (el) el.textContent = racha.total ? 'Aciertos de esta sesión: ' + racha.bien + ' de ' + racha.total + '.' : '';
  }

  return { menu };
})();
