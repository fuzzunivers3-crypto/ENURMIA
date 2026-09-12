/* ============================================================
   FLASHCARDS — para los días sin tiempo
   Anverso → volteo → calificación. Tres toques por tarjeta.
   Teclado: espacio voltea, 1-4 califican.
   ============================================================ */
window.Flashcards = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  let S = null;   // sesión activa
  let filtro = { esp:null, n:20, tipo:'todo' };

  /* ============================================================
     MENÚ
     ============================================================ */
  function menu(){
    const r = Tarjetas.resumen();
    const areas = Tarjetas.porEspecialidad();
    const falladas = Motor.falladas().length;

    const chipsEsp = areas.map(a =>
      '<button class="chip' + (filtro.esp === a.nombre ? ' on' : '') + '" data-t-esp="' + esc(a.nombre) + '">' +
      esc(a.nombre) + ' · ' + a.total + (a.vencidas ? ' <b style="color:var(--sangria-vivo)">·' + a.vencidas + '</b>' : '') +
      '</button>').join('');

    V().innerHTML =
    '<div class="escalona" style="max-width:1000px">' +
      '<div class="encabezado"><p class="eyebrow">Flashcards</p>' +
      '<h1>Cinco minutos también cuentan</h1>' +
      '<p>Para los días en que no da tiempo de sentarse a hacer preguntas. Anverso, volteas, dices si lo sabías. La tarjeta que fallas vuelve hoy mismo; la que dominas no la ves en un mes.</p></div>' +

      '<div class="rejilla rejilla--4" style="margin-bottom:18px">' +
        '<div class="metrica"><b>' + r.vencidas + '</b><span>Vencidas hoy</span>' +
          '<span class="delta ' + (r.vencidas ? 'delta--baja' : 'delta--sube') + '">' +
          (r.vencidas ? 'toca repasarlas' : 'al día') + '</span></div>' +
        '<div class="metrica"><b>' + r.nuevas + '</b><span>Sin ver</span></div>' +
        '<div class="metrica"><b>' + r.dominadas + '</b><span>Dominadas</span></div>' +
        '<div class="metrica"><b>' + r.repasos + '</b><span>Repasos totales</span></div>' +
      '</div>' +

      '<div class="rejilla rejilla--3" style="margin-bottom:18px">' +
        lanzador('⚡', 'Relámpago', '10 tarjetas. Lo justo para el bus.', 'relampago', 'card--yodo') +
        lanzador('🔁', 'Repaso de hoy', r.vencidas ? r.vencidas + ' tarjetas vencidas' : 'Nada vencido, verás material nuevo', 'hoy', 'card--rosa') +
        lanzador('🎯', 'Solo mis fallos', falladas ? 'Tarjetas de las ' + falladas + ' preguntas que fallaste' : 'Aún no has fallado preguntas', 'fallos', 'card--suero') +
      '</div>' +

      '<div class="card" style="margin-bottom:18px">' +
        '<div class="row-b" style="margin-bottom:14px">' +
          '<span class="eyebrow">Sesión a medida</span>' +
          '<span class="mono" style="font-size:12.5px">' + r.total + ' tarjetas · ' + r.curadas + ' escritas + ' + r.derivadas + ' del banco</span>' +
        '</div>' +
        '<div class="filtros">' +
          '<button class="chip' + (!filtro.esp ? ' on' : '') + '" data-t-esp="">Todas</button>' + chipsEsp +
        '</div>' +
        '<span class="eyebrow" style="display:block;margin:14px 0 10px">Cuántas</span>' +
        '<div class="filtros" style="margin-bottom:0">' +
          [10, 20, 40, 60].map(n => '<button class="chip' + (filtro.n === n ? ' on' : '') +
            '" data-t-n="' + n + '">' + n + '</button>').join('') +
        '</div>' +
        '<div class="filtros" style="margin-top:14px;margin-bottom:0">' +
          [['todo','Todas'],['curadas','Solo las escritas a mano'],['derivadas','Solo las del banco']].map(x =>
            '<button class="chip' + (filtro.tipo === x[0] ? ' on' : '') + '" data-t-tipo="' + x[0] + '">' + x[1] + '</button>').join('') +
        '</div>' +
        '<button class="btn btn--lg" style="margin-top:18px" id="btnTarjetas">Empezar →</button>' +
      '</div>' +

      '<div class="card"><span class="eyebrow">Progreso del mazo</span>' +
        '<div class="row-b" style="margin:12px 0 6px"><b>' + r.vistas + ' de ' + r.total + ' vistas</b>' +
        '<span class="mono">' + r.pct + '%</span></div>' + UI.barra(r.pct) +
        '<p class="muted" style="margin-top:12px;font-size:13px">Cada pregunta con explicación aporta dos tarjetas automáticas: su dato clave y su trampa. Según se escriben más explicaciones, el mazo crece solo.</p>' +
      '</div>' +
    '</div>';

    UI.$$('[data-t-esp]').forEach(b => b.onclick = () => { filtro.esp = b.dataset.tEsp || null; menu(); });
    UI.$$('[data-t-n]').forEach(b => b.onclick = () => { filtro.n = +b.dataset.tN; menu(); });
    UI.$$('[data-t-tipo]').forEach(b => b.onclick = () => { filtro.tipo = b.dataset.tTipo; menu(); });

    document.getElementById('btnTarjetas').onclick = () => iniciar({
      esp: filtro.esp, n: filtro.n,
      soloCuradas: filtro.tipo === 'curadas',
      soloDerivadas: filtro.tipo === 'derivadas',
      titulo: filtro.esp || 'Repaso general'
    });

    UI.$$('[data-lanza]').forEach(b => b.onclick = () => {
      const k = b.dataset.lanza;
      if (k === 'relampago') iniciar({ n:10, titulo:'Relámpago' });
      if (k === 'hoy')       iniciar({ n:Math.max(20, r.vencidas), titulo:'Repaso de hoy' });
      if (k === 'fallos'){
        if (!falladas) return UI.tostada('Todavía no tienes preguntas falladas', 'mal');
        iniciar({ n:30, soloFalladas:true, titulo:'Mis fallos' });
      }
    });
  }

  function lanzador(em, titulo, texto, id, cls){
    return '<button class="card ' + cls + ' card--flota" data-lanza="' + id +
      '" style="text-align:left;cursor:pointer;font:inherit;border:none">' +
      '<span style="font-size:24px">' + em + '</span>' +
      '<b style="display:block;font-family:var(--display);font-size:19px;margin-top:8px">' + esc(titulo) + '</b>' +
      '<small class="muted" style="font-size:12.5px">' + esc(texto) + '</small></button>';
  }

  /* ============================================================
     SESIÓN
     ============================================================ */
  function iniciar(cfg){
    const cartas = Tarjetas.sesion(cfg);
    if (!cartas.length) return UI.tostada('No hay tarjetas con ese filtro', 'mal');
    S = { cartas, i:0, volteada:false, titulo:cfg.titulo || 'Repaso',
          inicio:Date.now(), notas:[], repetir:[] };
    pintar();
  }

  function carta(){ return S.cartas[S.i]; }

  function pintar(){
    const t = carta();
    const s = Tarjetas.estado(t.id);
    const hechas = S.i;
    const pct = Math.round(hechas / S.cartas.length * 100);

    V().innerHTML =
    '<div class="sesion__barra">' +
      '<button class="icono" id="btnSalirT">✕</button>' +
      '<span class="mono nowrap" style="font-size:12.5px;font-weight:600">' + (S.i + 1) + ' / ' + S.cartas.length + '</span>' +
      '<span class="progreso-pts"><i class="pt" style="flex:' + Math.max(pct,1) + ';background:var(--carbon)"></i>' +
      '<i class="pt" style="flex:' + Math.max(100-pct,1) + '"></i></span>' +
      '<span class="chip">' + esc(t.esp) + '</span>' +
      (s ? '<span class="chip chip--suero">visto ' + s.vistas + '×</span>'
         : '<span class="chip chip--yodo">nueva</span>') +
    '</div>' +

    '<div class="tarjeta-zona">' +
      '<div class="tarjeta' + (S.volteada ? ' girada' : '') + '" id="tarjeta">' +
        '<div class="tarjeta__cara tarjeta__cara--frente">' +
          '<span class="eyebrow">' + esc(t.tema) + '</span>' +
          '<p class="tarjeta__texto">' + esc(t.a).replace(/\n/g, '<br>') + '</p>' +
          '<span class="tarjeta__pista">toca para ver la respuesta</span>' +
        '</div>' +
        '<div class="tarjeta__cara tarjeta__cara--dorso">' +
          '<span class="eyebrow" style="color:rgba(255,255,255,.5)">Respuesta</span>' +
          '<p class="tarjeta__texto">' + esc(t.b) + '</p>' +
          (t.mas ? '<p class="tarjeta__mas">' + esc(t.mas) + '</p>' : '') +
        '</div>' +
      '</div>' +

      (S.volteada
        ? '<div class="calificar">' +
            '<span class="eyebrow" style="display:block;text-align:center;margin-bottom:10px">¿Lo sabías?</span>' +
            '<div class="calificar__botones">' +
              nota(1, 'No', 'hoy mismo', 'btn--vivo') +
              nota(2, 'Casi', '1 día', 'btn--fantasma') +
              nota(3, 'Sí', '3 días', 'btn--fantasma') +
              nota(4, 'Fácil', 'más tiempo', 'btn--verde') +
            '</div>' +
          '</div>'
        : '<button class="btn btn--lg btn--carbon" id="btnVoltear" style="margin-top:20px">Ver la respuesta</button>') +

      (t.origen ? '<button class="chip" id="verPregunta" style="margin-top:16px">Ver la pregunta de la que sale →</button>' : '') +
      '<p class="muted" style="margin-top:18px;font-size:12px;text-align:center">Espacio para voltear · 1 a 4 para calificar</p>' +
    '</div>';

    document.getElementById('btnSalirT').onclick = terminar;
    const bv = document.getElementById('btnVoltear');
    if (bv) bv.onclick = voltear;
    document.getElementById('tarjeta').onclick = () => { if (!S.volteada) voltear(); };
    UI.$$('[data-nota]').forEach(b => b.onclick = () => calificar(+b.dataset.nota));
    const vp = document.getElementById('verPregunta');
    if (vp) vp.onclick = e => { e.stopPropagation(); Sesion.revisarPregunta(t.origen); };
  }

  function nota(n, txt, sub, cls){
    return '<button class="btn ' + cls + ' calificar__b" data-nota="' + n + '">' +
      '<b>' + txt + '</b><small>' + sub + '</small></button>';
  }

  function voltear(){
    S.volteada = true;
    pintar();
  }

  function calificar(n){
    const t = carta();
    Tarjetas.calificar(t.id, n);
    S.notas.push(n);
    if (n === 1) S.repetir.push(t);      // vuelve al final de esta misma sesión
    S.i++;
    S.volteada = false;
    if (S.i >= S.cartas.length){
      if (S.repetir.length){
        S.cartas = S.repetir; S.repetir = []; S.i = 0;
        UI.tostada('Repetimos las que fallaste');
        return pintar();
      }
      return terminar();
    }
    pintar();
  }

  /* ============================================================
     CIERRE
     ============================================================ */
  /* Cerrado el tema, Arturo no decide por el estudiante: ofrece las dos
     salidas que tiene sentido tomar ahi. */
  function remateTema(tema){
    const completo = Ruta.pasosDe(tema).completo;
    if (!completo){
      return Arturo.barra({ frase: Arturo.frase('tarj', { tema: tema }) });
    }
    return Arturo.barra({
      frase: Arturo.frase('eligeTema', { tema: tema, tanda: Ruta.activa().tanda }),
      boton: 'Siguiente tema',
      boton2: 'Examinarme de este tema',
      accion2: 'examenTema'
    });
  }

  function terminar(){
    if (!S) return App.ir('flashcards');
    const total = S.notas.length;
    if (!total){ S = null; return App.ir('flashcards'); }

    const bien = S.notas.filter(n => n >= 3).length;
    const dur = Date.now() - S.inicio;
    const d = Almacen.datos(); d.tarjetas.sesiones++; Almacen.guardar();
    const r = Tarjetas.resumen();

    V().innerHTML =
    '<div class="sesion escalona">' +
      '<div class="encabezado"><p class="eyebrow">' + esc(S.titulo) + '</p>' +
      '<h1>' + total + ' tarjetas en ' + UI.reloj(dur) + '</h1>' +
      '<p>' + (bien === total ? 'Las sabías todas. Sube la dificultad o mete material nuevo.'
        : bien >= total * 0.7 ? 'Buen repaso. Las que fallaste vuelven mañana.'
        : 'Este bloque necesita más vueltas. Las falladas vuelven hoy y mañana.') + '</p></div>' +

      '<div class="rejilla rejilla--3" style="margin-bottom:18px">' +
        '<div class="metrica"><b>' + bien + '</b><span>Las sabías</span></div>' +
        '<div class="metrica"><b>' + (total - bien) + '</b><span>Para repasar</span></div>' +
        '<div class="metrica"><b>' + UI.reloj(Math.round(dur / total)) + '</b><span>Por tarjeta</span></div>' +
      '</div>' +

      '<div class="card" style="margin-bottom:18px"><span class="eyebrow">Estado del mazo</span>' +
        '<div class="row-b" style="margin:12px 0 6px"><b>' + r.vistas + ' de ' + r.total + '</b>' +
        '<span class="mono">' + r.pct + '%</span></div>' + UI.barra(r.pct) +
        '<p class="muted" style="margin-top:10px;font-size:13px">Vencidas para mañana: ' + r.vencidas + '</p></div>' +

      (window.Ruta && Ruta.activa() && window.Arturo && Ruta.hilo() && Ruta.hilo().tema === S.titulo
        ? '<div style="margin-bottom:18px">' + remateTema(S.titulo) + '</div>'
        : '') +

      '<div class="row wrap" style="gap:9px">' +
        '<button class="btn" id="btnMas">Otra tanda</button>' +
        '<button class="btn btn--fantasma" id="btnMenuT">Volver a flashcards</button>' +
        '<button class="btn btn--carbon" id="btnCasaT">Inicio</button>' +
      '</div>' +
    '</div>';

    const titulo = S.titulo;
    S = null;
    document.getElementById('btnMas').onclick = () => iniciar({ n:20, titulo });
    document.getElementById('btnMenuT').onclick = () => App.ir('flashcards');
    document.getElementById('btnCasaT').onclick = () => App.ir('inicio');
    if (window.Arturo) Arturo.enganchar();
  }

  /* ---------- atajos de teclado ---------- */
  function tecla(e){
    if (!S) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.code === 'Space'){ e.preventDefault(); if (!S.volteada) voltear(); return; }
    if (S.volteada && /^[1-4]$/.test(e.key)) calificar(+e.key);
  }
  document.addEventListener('keydown', tecla);

  function salir(){ S = null; }

  return { menu, iniciar, salir };
})();
