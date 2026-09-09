/* ============================================================
   TEMARIO — estudiar por temas, no al azar
   Muestra los cinco bloques, cuánto material hay de cada tema,
   cuánto dominas y te deja entrar a estudiarlo directamente.
   ============================================================ */
window.Temario = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }
  let abierto = null;

  /* ---------- emparejar temas con el banco ---------- */
  function norm(s){
    return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  let cache = null;
  function indice(){
    if (cache) return cache;
    cache = Motor.bancoActivo().map(q => ({
      q,
      txt: norm([q.enunciado, q.caso, q.tema, q.sub, q.clave, q.exp, (q.tags || []).join(' ')].join(' '))
    }));
    return cache;
  }
  function invalidar(){ cache = null; }

  function preguntasDe(tema){
    const ks = tema.claves.map(norm).filter(Boolean);
    return indice().filter(x => ks.some(k => x.txt.indexOf(k) >= 0)).map(x => x.q);
  }

  function estadoTema(tema){
    const qs = preguntasDe(tema);
    const conExp = qs.filter(q => !!q.exp).length;
    const d = Almacen.datos();
    let vistas = 0, ok = 0;
    qs.forEach(q => {
      const s = d.srs[q.id];
      if (s){ vistas++; ok += (s.aciertos > s.fallos) ? 1 : 0; }
    });
    return {
      total: qs.length, conExp, vistas,
      dominio: vistas ? Math.round(ok / vistas * 100) : null,
      preguntas: qs
    };
  }

  /* ============================================================
     VISTA
     ============================================================ */
  function menu(){
    invalidar();
    const bloques = (window.TEMARIO || []).map((b, bi) => {
      const estados = b.temas.map(estadoTema);
      const totalPreg = estados.reduce((s, e) => s + e.total, 0);
      const totalExp  = estados.reduce((s, e) => s + e.conExp, 0);
      const tocados   = estados.filter(e => e.vistas > 0).length;
      const doms      = estados.filter(e => e.dominio !== null).map(e => e.dominio);
      const dom       = doms.length ? Math.round(doms.reduce((a, c) => a + c, 0) / doms.length) : null;
      const pctTemas  = Math.round(tocados / b.temas.length * 100);

      const filas = b.temas.map((t, ti) => {
        const e = estados[ti];
        return '<div class="hoja" data-tema="' + bi + '-' + ti + '">' +
          '<span class="grow" style="font-size:13.5px">' + esc(t.t) + '</span>' +
          '<span class="chip" style="font-size:11px">' + e.total + ' preg' +
            (e.conExp ? ' · ' + e.conExp + ' explicadas' : '') + '</span>' +
          UI.barra(e.dominio) +
          '<span class="mono" style="font-size:12px;width:40px;text-align:right">' + UI.pctTexto(e.dominio) + '</span>' +
        '</div>';
      }).join('');

      return '<div class="nodo' + (abierto === bi ? ' abierto' : '') + '" data-bloque="' + bi + '">' +
        '<button class="nodo__cabeza">' +
          '<span class="nodo__flecha">▶</span>' +
          '<span style="font-size:20px">' + b.em + '</span>' +
          '<span class="grow"><b>' + esc(b.bloque) + '</b>' +
          '<small class="muted" style="display:block;font-size:12px">' + b.temas.length + ' temas · ' +
            totalPreg + ' preguntas · ' + totalExp + ' con explicación</small></span>' +
          '<span class="mono" style="font-size:13px">' + UI.pctTexto(dom) + '</span>' +
        '</button>' +
        '<div class="nodo__hijos">' +
          '<p class="muted" style="font-size:12.5px;margin-bottom:12px">' + esc(b.nota) + '</p>' +
          '<div class="row-b" style="margin-bottom:10px">' +
            '<span class="eyebrow">Temas tocados</span>' +
            '<span class="mono" style="font-size:12px">' + tocados + ' de ' + b.temas.length + '</span></div>' +
          UI.barra(pctTemas, true) +
          '<div style="margin-top:14px;display:flex;flex-direction:column;gap:6px">' + filas + '</div>' +
          '<button class="btn btn--sm" style="margin-top:14px" data-bloque-todo="' + bi + '">Entrenar todo el bloque →</button>' +
        '</div>' +
      '</div>';
    }).join('');

    // resumen global
    let temasTotales = 0, temasTocados = 0;
    (window.TEMARIO || []).forEach(b => b.temas.forEach(t => {
      temasTotales++;
      if (estadoTema(t).vistas > 0) temasTocados++;
    }));
    const pctGlobal = Math.round(temasTocados / Math.max(1, temasTotales) * 100);

    V().innerHTML =
    '<div class="escalona">' +
      '<div class="encabezado"><p class="eyebrow">Temario</p>' +
      '<h1>Estudiar por temas, no al azar</h1>' +
      '<p>Los cuatro bloques con todo lo que hay que llevar preparado. Cada tema te dice cuánto material tiene, cuánto llevas dominado y te deja entrar a estudiarlo directamente.</p></div>' +

      '<div class="rejilla rejilla--4" style="margin-bottom:18px">' +
        '<div class="metrica"><b>' + temasTotales + '</b><span>Temas del programa</span></div>' +
        '<div class="metrica"><b>' + temasTocados + '</b><span>Ya tocados</span>' +
          '<span class="delta ' + (pctGlobal >= 50 ? 'delta--sube' : 'delta--baja') + '">' + pctGlobal + '% del temario</span></div>' +
        '<div class="metrica"><b>' + Motor.bancoActivo().length + '</b><span>Preguntas disponibles</span></div>' +
        '<div class="metrica"><b>' + Motor.resumen().conExplicacion + '</b><span>Con explicación</span></div>' +
      '</div>' +

      '<div class="card" style="margin-bottom:18px">' +
        '<div class="row-b" style="margin-bottom:8px"><span class="eyebrow">Avance por el temario</span>' +
        '<span class="mono">' + temasTocados + ' / ' + temasTotales + '</span></div>' +
        UI.barra(pctGlobal) +
        '<p class="muted" style="margin-top:10px;font-size:13px">Un tema cuenta como tocado en cuanto respondes una pregunta suya. El porcentaje de la derecha de cada tema es tu dominio, no tu avance.</p>' +
      '</div>' +

      '<div class="mapa">' + bloques + '</div>' +

      '<div class="card" style="margin-top:18px"><span class="eyebrow">Además del temario</span>' +
        '<p class="muted" style="margin:8px 0 12px;font-size:13.5px">El examen también evalúa estos bloques transversales, que tienen banco propio:</p>' +
        '<div class="filtros" style="margin-bottom:0">' +
          (window.TEMARIO_TRANSVERSAL || []).map(e =>
            '<button class="chip" data-transv="' + esc(e) + '">' + esc(e) + '</button>').join('') +
        '</div></div>' +
    '</div>';

    UI.$$('.nodo__cabeza').forEach(b => b.onclick = () => {
      const bi = +b.parentElement.dataset.bloque;
      abierto = (abierto === bi) ? null : bi;
      menu();
    });
    UI.$$('[data-tema]').forEach(el => el.onclick = e => {
      e.stopPropagation();
      const [bi, ti] = el.dataset.tema.split('-').map(Number);
      abrirTema(window.TEMARIO[bi].temas[ti], window.TEMARIO[bi].bloque);
    });
    UI.$$('[data-bloque-todo]').forEach(b => b.onclick = e => {
      e.stopPropagation();
      const bl = window.TEMARIO[+b.dataset.bloqueTodo];
      const ids = {};
      bl.temas.forEach(t => preguntasDe(t).forEach(q => ids[q.id] = q));
      lanzar(Object.values(ids), bl.bloque);
    });
    UI.$$('[data-transv]').forEach(b => b.onclick = () => App.ir('entrenar', { esp: b.dataset.transv }));
  }

  /* ---------- ficha de un tema ---------- */
  function abrirTema(tema, bloque){
    const e = estadoTema(tema);
    if (!e.total) return UI.tostada('Todavía no hay preguntas de ese tema', 'mal');

    const explicadas = e.preguntas.filter(q => q.exp);
    const listado = e.preguntas.slice(0, 40).map(q =>
      '<div class="item-lista" data-ver="' + q.id + '">' +
        '<span class="item-lista__n">' + esc(q.id) + '</span>' +
        '<span class="grow"><b style="display:block;font-size:13.5px">' + esc(q.sub || q.tema) + '</b>' +
        '<small class="muted">' + esc(q.esp) + '</small></span>' +
        (q.exp ? '<span class="chip chip--verde">explicada</span>' : '<span class="chip">sin explicar</span>') +
      '</div>').join('');

    UI.modal(
      '<p class="eyebrow">' + esc(bloque) + '</p>' +
      '<h3 style="font-size:23px;margin:4px 0 14px">' + esc(tema.t) + '</h3>' +
      '<div class="rejilla rejilla--3" style="margin-bottom:16px">' +
        '<div class="metrica" style="padding:12px"><b style="font-size:26px">' + e.total + '</b><span>Preguntas</span></div>' +
        '<div class="metrica" style="padding:12px"><b style="font-size:26px">' + e.conExp + '</b><span>Explicadas</span></div>' +
        '<div class="metrica" style="padding:12px"><b style="font-size:26px">' + UI.pctTexto(e.dominio) + '</b><span>Tu dominio</span></div>' +
      '</div>' +
      '<div class="row wrap" style="gap:8px;margin-bottom:16px">' +
        (window.Apuntes && Apuntes.claveDeTema(tema.t) ? '<button class="btn btn--sm" id="tLeer">📖 Leer el tema</button>' : '') +
        '<button class="btn btn--sm' + (window.Apuntes && Apuntes.claveDeTema(tema.t) ? ' btn--fantasma' : '') + '" id="tEntrenar">Entrenar este tema</button>' +
        (explicadas.length ? '<button class="btn btn--sm btn--fantasma" id="tExplicadas">Solo las explicadas (' + explicadas.length + ')</button>' : '') +
        '<button class="btn btn--sm btn--fantasma" id="tTarjetas">Flashcards del tema</button>' +
      '</div>' +
      '<span class="eyebrow">Preguntas del tema</span>' +
      '<div style="display:flex;flex-direction:column;gap:7px;margin-top:10px">' + listado + '</div>' +
      (e.total > 40 ? '<p class="muted" style="margin-top:10px;font-size:12.5px">Mostrando 40 de ' + e.total + '.</p>' : '')
    );

    const bl = document.getElementById('tLeer');
    if (bl) bl.onclick = () => {
      document.querySelector('.velo').remove();
      App.ir('estudiar');
      Apuntes.abrir(Apuntes.claveDeTema(tema.t));
    };
    document.getElementById('tEntrenar').onclick = () => {
      document.querySelector('.velo').remove();
      lanzar(e.preguntas, tema.t);
    };
    const be = document.getElementById('tExplicadas');
    if (be) be.onclick = () => {
      document.querySelector('.velo').remove();
      lanzar(explicadas, tema.t);
    };
    document.getElementById('tTarjetas').onclick = () => {
      document.querySelector('.velo').remove();
      const ids = e.preguntas.map(q => q.id);
      const cartas = Tarjetas.mazo().filter(t => t.origen && ids.indexOf(t.origen) >= 0);
      if (!cartas.length) return UI.tostada('Este tema aún no tiene flashcards: nacen de las preguntas explicadas', 'mal');
      Flashcards.iniciar({ n: Math.min(30, cartas.length), titulo: tema.t, soloDerivadas: true });
    };
    UI.$$('[data-ver]').forEach(el => el.onclick = () => Sesion.revisarPregunta(el.dataset.ver));
  }

  function lanzar(preguntas, titulo){
    if (!preguntas.length) return UI.tostada('No hay preguntas', 'mal');
    // se priorizan las explicadas y se barajan
    const orden = preguntas.slice().sort((a, b) => (b.exp ? 1 : 0) - (a.exp ? 1 : 0));
    const n = Math.min(20, orden.length);
    Sesion.iniciar({ modo:'aprender', titulo, preguntas: orden.slice(0, n).sort(() => Math.random() - 0.5) });
  }

  return { menu, invalidar };
})();
