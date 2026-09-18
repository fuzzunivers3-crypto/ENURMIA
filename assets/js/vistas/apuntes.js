/* ============================================================
   ESTUDIAR — los temas explicados para leer, no para consultar
   Cada tema es un texto seguido, con tres marcas que siempre
   responden a la misma pregunta:
     FOCO      qué decide la conducta en este paciente
     ALARMA    qué no se puede pasar por alto
     RECORDAR  lo que hay que llevarse a la cabeza
   ============================================================ */
window.Apuntes = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }
  let filtro = null;
  let observador = null;

  /* ---------- datos ---------- */
  /* Los apuntes de UNIRMIA llevan `programa:'unirm'`; los de ENURMIA no
     llevan nada, igual que en el banco y en las tarjetas. Un estudiante de
     ciencias basicas no tiene que tropezarse con un apunte de crisis
     hipertensiva, ni al reves. */
  function todos(){
    const prog = Almacen.programa();
    const todo = window.APUNTES || {};
    const activas = prog === 'unirm' ? Almacen.materiasUnirm() : null;
    const out = {};
    Object.keys(todo).forEach(k => {
      const a = todo[k];
      const suyo = (a.programa === 'unirm');
      if (prog === 'unirm' ? suyo : !suyo){
        if (activas && activas.indexOf(a.bloque) < 0) return;
        out[k] = a;
      }
    });
    return out;
  }
  function lista(){ return Object.keys(todos()).map(k => Object.assign({ k }, todos()[k])); }

  function leidos(){
    const d = Almacen.datos();
    if (!d) return {};
    if (!d.apuntes) d.apuntes = {};
    return d.apuntes;
  }
  function marcarLeido(k){
    const d = Almacen.datos(); if (!d) return;
    if (!d.apuntes) d.apuntes = {};
    d.apuntes[k] = Date.now();
    Almacen.guardar();
  }
  function quitarLeido(k){
    const d = Almacen.datos(); if (!d) return;
    if (d.apuntes) delete d.apuntes[k];
    Almacen.guardar();
  }

  /* ---------- enlace con el banco de preguntas ---------- */
  function norm(s){
    return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  function preguntasDe(ap){
    const ks = (ap.claves || []).map(norm).filter(Boolean);
    if (!ks.length) return [];
    return Motor.bancoActivo().filter(q => {
      const t = norm([q.enunciado, q.caso, q.tema, q.sub, q.clave, q.exp, (q.tags || []).join(' ')].join(' '));
      return ks.some(x => t.indexOf(x) >= 0);
    });
  }

  /* ============================================================
     MENÚ
     ============================================================ */
  function menu(){
    const L = lista();
    if (!L.length){
      V().innerHTML = '<div class="encabezado"><h1>Estudiar</h1>' +
        '<p>Todavía no hay temas escritos.</p></div>';
      return;
    }

    const ls = leidos();
    const bloques = {};
    L.forEach(a => { (bloques[a.bloque] = bloques[a.bloque] || []).push(a); });
    const nombres = Object.keys(bloques);
    const total = L.length;
    const hechos = L.filter(a => ls[a.k]).length;
    const pct = Math.round(hechos / total * 100);
    const minutos = L.filter(a => !ls[a.k]).reduce((s, a) => s + (a.min || 6), 0);

    const secciones = nombres
      .filter(b => !filtro || b === filtro)
      .map(b => {
        const arr = bloques[b];
        const listos = arr.filter(a => ls[a.k]).length;
        return '<div style="margin-bottom:26px">' +
          '<div class="row-b" style="margin-bottom:12px">' +
            '<span class="eyebrow">' + esc(b) + '</span>' +
            '<span class="mono" style="font-size:11.5px;color:var(--tinta-40)">' +
              listos + ' de ' + arr.length + ' leídos</span>' +
          '</div>' +
          '<div class="apuntes-rejilla">' +
            arr.map(a =>
              '<button class="apunte' + (ls[a.k] ? ' apunte--leido' : '') + '" data-ap="' + esc(a.k) + '">' +
                '<span class="apunte__t">' + esc(a.tema) + '</span>' +
                '<span class="apunte__idea">' + esc(a.idea) + '</span>' +
                '<span class="apunte__pie">' + (a.min || 6) + ' min' +
                  (ls[a.k] ? ' · leído' : '') + '</span>' +
              '</button>').join('') +
          '</div></div>';
      }).join('');

    V().innerHTML =
    '<div class="escalona">' +
      '<div class="encabezado"><p class="eyebrow">Estudiar</p>' +
      '<h1>Los temas, explicados</h1>' +
      '<p>Aquí no hay preguntas: hay texto para leer. ' + (Almacen.programa() === 'unirm' ? 'Cada tema está escrito para que entiendas el mecanismo, no para que te lo aprendas de memoria.' : 'Cada tema está escrito para que entiendas cómo se presenta el paciente, cómo se confirma el diagnóstico y qué decide la conducta.') + ' Si tienes poco tiempo, el bloque negro del final es lo que hay que llevarse.</p></div>' +

      '<div class="rejilla rejilla--4" style="margin-bottom:18px">' +
        '<div class="metrica"><b>' + total + '</b><span>Temas escritos</span></div>' +
        '<div class="metrica"><b>' + hechos + '</b><span>Ya leídos</span>' +
          '<span class="delta ' + (pct >= 50 ? 'delta--sube' : 'delta--baja') + '">' + pct + '%</span></div>' +
        '<div class="metrica"><b>' + Math.round(minutos / 60 * 10) / 10 + ' h</b><span>Lectura pendiente</span></div>' +
        '<div class="metrica"><b>' + nombres.length + '</b><span>Bloques</span></div>' +
      '</div>' +

      '<div class="card" style="margin-bottom:18px">' +
        '<div class="row-b" style="margin-bottom:8px"><span class="eyebrow">Avance de lectura</span>' +
        '<span class="mono">' + hechos + ' / ' + total + '</span></div>' + UI.barra(pct) +
      '</div>' +

      '<div class="filtros">' +
        '<button class="chip' + (filtro ? '' : ' chip--sangria') + '" data-f="">Todos</button>' +
        nombres.map(b => '<button class="chip' + (filtro === b ? ' chip--sangria' : '') +
          '" data-f="' + esc(b) + '">' + esc(b) + '</button>').join('') +
      '</div>' +

      secciones +
    '</div>';

    UI.$$('[data-ap]').forEach(b => b.onclick = () => abrir(b.dataset.ap));
    UI.$$('[data-f]').forEach(b => b.onclick = () => { filtro = b.dataset.f || null; menu(); });
  }

  /* ============================================================
     LECTURA DE UN TEMA
     ============================================================ */
  /* Arturo remata la lectura solo si este es el tema que esta
     acompanando: leer un apunte suelto desde el indice no tiene por que
     arrastrarte al recorrido. */
  function rematePie(ap){
    if (!window.Ruta || !Ruta.activa() || !window.Arturo) return '';
    const h = Ruta.hilo();
    if (!h || h.tema !== ap.tema) return '';
    return '<div style="margin-top:16px">' +
      Arturo.barra({ frase: Arturo.frase('cierraLectura', { tema: ap.tema }),
                     boton: 'Hacer las preguntas', accion: 'cerrarLectura' }) +
      '</div>';
  }

  function abrir(k){
    const ap = todos()[k];
    if (!ap) return UI.tostada('Ese tema todavía no está escrito', 'mal');

    const ls = leidos();
    const yaLeido = !!ls[k];
    const qs = preguntasDe(ap);
    const explicadas = qs.filter(q => q.exp);

    const cuerpo = (ap.secciones || []).map((s, i) =>
      '<h2 id="s' + i + '">' + esc(s.t) + '</h2>' +
      s.p.map(par => '<p>' + resaltar(par) + '</p>').join('') +
      (s.foco ? caja('foco', 'Lo que decide la conducta', s.foco) : '') +
      (s.alarma ? caja('alarma', 'No se puede pasar por alto', s.alarma) : '')
    ).join('');

    const indice = (ap.secciones || []).map((s, i) =>
      '<a href="#s' + i + '" data-ir="s' + i + '">' + esc(s.t) + '</a>').join('') +
      '<a href="#recordar" data-ir="recordar">Para llevarse</a>';

    V().innerHTML =
    '<div class="escalona">' +
      '<button class="btn btn--sm btn--fantasma" id="volver" style="margin-bottom:14px">← Todos los temas</button>' +

      '<div class="encabezado" style="margin-bottom:20px">' +
        '<p class="eyebrow">' + esc(ap.bloque) + ' · ' + (ap.min || 6) + ' min de lectura</p>' +
        '<h1>' + esc(ap.tema) + '</h1>' +
        '<p>' + esc(ap.idea) + '</p>' +
      '</div>' +

      '<div class="lectura">' +
        '<nav class="lectura__indice">' + indice + '</nav>' +
        '<div>' +
          '<article class="texto">' + cuerpo +
            '<div class="recordar" id="recordar">' +
              '<div class="recordar__t">▸ Para llevarse</div><ul>' +
              (ap.recordar || []).map(x => '<li>' + resaltar(x) + '</li>').join('') +
              '</ul></div>' +
            (ap.ref ? '<p class="fuente">' + esc(ap.ref) + '</p>' : '') +
          '</article>' +

          '<div class="lectura__pie">' +
            '<div class="row wrap" style="gap:8px">' +
              '<button class="btn btn--sm' + (yaLeido ? ' btn--fantasma' : '') + '" id="leido">' +
                (yaLeido ? '✓ Leído — desmarcar' : 'Marcar como leído') + '</button>' +
              (qs.length ? '<button class="btn btn--sm btn--fantasma" id="practicar">Practicar el tema (' + qs.length + ')</button>' : '') +
              (explicadas.length ? '<button class="btn btn--sm btn--fantasma" id="explicadas">Solo las explicadas (' + explicadas.length + ')</button>' : '') +
              (ap.sigue ? '<button class="btn btn--sm btn--fantasma" data-ap="' + esc(ap.sigue) + '">Siguiente tema →</button>' : '') +
            '</div>' +
            (qs.length ? '' : '<p class="muted" style="margin-top:10px;font-size:12.5px">Este tema todavía no tiene preguntas enlazadas.</p>') +
            rematePie(ap) +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

    document.getElementById('volver').onclick = () => menu();
    document.getElementById('leido').onclick = () => {
      if (leidos()[k]){ quitarLeido(k); UI.tostada('Desmarcado'); }
      else { marcarLeido(k); UI.tostada('Tema marcado como leído', 'ok'); }
      abrir(k);
    };
    const bp = document.getElementById('practicar');
    if (bp) bp.onclick = () => lanzar(qs, ap.tema);
    const be = document.getElementById('explicadas');
    if (be) be.onclick = () => lanzar(explicadas, ap.tema);
    UI.$$('[data-ap]').forEach(b => b.onclick = () => { window.scrollTo(0, 0); abrir(b.dataset.ap); });

    // índice: desplazamiento suave y marca de la sección visible
    UI.$$('[data-ir]').forEach(a => a.onclick = e => {
      e.preventDefault();
      const el = document.getElementById(a.dataset.ir);
      if (el) el.scrollIntoView({ behavior:'smooth', block:'start' });
    });
    seguirLectura();
    if (window.Arturo) Arturo.enganchar();
    window.scrollTo(0, 0);
  }

  /* Marca en el índice la sección que se está leyendo */
  function seguirLectura(){
    if (observador) observador.disconnect();
    const enlaces = UI.$$('[data-ir]');
    if (!enlaces.length || !window.IntersectionObserver) return;
    observador = new IntersectionObserver(entradas => {
      entradas.forEach(en => {
        if (!en.isIntersecting) return;
        enlaces.forEach(a => a.classList.toggle('act', a.dataset.ir === en.target.id));
      });
    }, { rootMargin:'-90px 0px -70% 0px' });
    enlaces.forEach(a => {
      const el = document.getElementById(a.dataset.ir);
      if (el) observador.observe(el);
    });
  }

  function caja(clase, titulo, items){
    return '<div class="' + clase + '">' +
      '<div class="' + clase + '__t">▸ ' + esc(titulo) + '</div><ul>' +
      items.map(x => '<li>' + resaltar(x) + '</li>').join('') + '</ul></div>';
  }

  /* *negrita* y _énfasis_ sobre texto ya escapado */
  function resaltar(s){
    return esc(s)
      .replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
      .replace(/_([^_]+)_/g, '<em>$1</em>');
  }

  function lanzar(preguntas, titulo){
    if (!preguntas.length) return UI.tostada('No hay preguntas de este tema', 'mal');
    const orden = preguntas.slice().sort((a, b) => (b.exp ? 1 : 0) - (a.exp ? 1 : 0));
    const n = Math.min(20, orden.length);
    Sesion.iniciar({ modo:'aprender', titulo: titulo,
      preguntas: orden.slice(0, n).sort(() => Math.random() - 0.5) });
  }

  /* Para que el Temario pueda saltar al texto de un tema */
  function claveDeTema(nombreTema){
    const L = lista();
    const hit = L.find(a => a.tema === nombreTema);
    return hit ? hit.k : null;
  }

  return { menu, abrir, claveDeTema, preguntasDe, marcarLeido };
})();
