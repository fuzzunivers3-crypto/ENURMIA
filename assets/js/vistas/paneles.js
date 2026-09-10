/* ============================================================
   VISTAS — inicio, entrenar, simulacro, desafio,
   biblioteca, progreso y ajustes
   ============================================================ */
window.Vistas = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  /* ============================================================
     INICIO
     ============================================================ */
  function inicio(){
    const d = Almacen.datos();
    const r = Motor.resumen();
    const prep = Motor.preparacion();
    const acc = Motor.proximaAccion();
    const areas = Motor.dominioPorEspecialidad();
    const niv = Motor.nivel();

    const debiles = areas.filter(a => a.dominio !== null).slice(0, 4);
    const sinTocar = areas.filter(a => a.dominio === null).slice(0, 4);

    const filas = (debiles.length ? debiles : areas.slice(0, 4)).map(a =>
      '<div class="dominio__fila" data-esp="' + esc(a.nombre) + '">' +
        '<div class="row-b"><b>' + esc(a.nombre) + '</b>' +
        '<span class="mono">' + UI.pctTexto(a.dominio) + '</span></div>' +
        UI.barra(a.dominio) +
        '<small class="muted" style="font-size:12px">' + a.respondidas + ' respondidas de ' + a.total + ' disponibles</small>' +
      '</div>').join('');

    V().innerHTML =
    '<div class="escalona">' +
      '<div class="encabezado">' +
        '<p class="eyebrow">' + esc(UI.saludo()) + '</p>' +
        '<h1>' + esc(d.perfil.nombre) + ', esto es lo que toca hoy</h1>' +
        '<p>' + (r.respondidas === 0
          ? 'Todavía no tengo datos tuyos. Diez preguntas bastan para saber dónde estás parado.'
          : 'Llevas ' + r.respondidas + ' preguntas respondidas y ' + r.racha + (r.racha === 1 ? ' día' : ' días') + ' de racha.') + '</p>' +
      '</div>' +

      '<div class="rejilla rejilla--4" style="margin-bottom:18px">' +
        '<div class="metrica"><b>' + prep.pct + '%</b><span>Preparación ENURM</span>' +
          '<span class="delta ' + (prep.pct >= 70 ? 'delta--sube' : 'delta--baja') + '">' + esc(prep.etiqueta) + '</span></div>' +
        '<div class="metrica"><b>' + r.respondidas + '</b><span>Preguntas respondidas</span>' +
          '<span class="delta">' + r.cobertura + '% del banco visto</span></div>' +
        '<div class="metrica"><b>' + r.precision + '%</b><span>Precisión global</span>' +
          '<span class="delta">' + r.correctas + ' correctas</span></div>' +
        '<div class="metrica"><b>' + r.racha + '</b><span>Días de racha</span>' +
          '<span class="delta">' + esc(niv.actual.em + ' ' + niv.actual.nombre) + '</span></div>' +
      '</div>' +

      '<div class="rejilla rejilla--tablero">' +
        '<div style="display:flex;flex-direction:column;gap:16px">' +

          '<div class="accion">' +
            '<p class="eyebrow">Tu próxima mejor acción</p>' +
            '<h3>' + esc(acc.titulo) + '</h3>' +
            '<p>' + esc(acc.texto) + '</p>' +
            '<button class="btn btn--claro" id="btnAccion">' + esc(acc.boton) + ' →</button>' +
          '</div>' +

          '<div class="card">' +
            '<div class="row-b" style="margin-bottom:16px">' +
              '<span class="eyebrow">Tu dominio por especialidad</span>' +
              '<button class="chip" id="verTodas">Ver todas →</button></div>' +
            '<div class="dominio">' + filas + '</div>' +
            (sinTocar.length ? '<p class="muted" style="margin-top:16px;font-size:13px">Sin datos todavía en: ' +
              sinTocar.map(a => esc(a.nombre)).join(', ') + '.</p>' : '') +
          '</div>' +

          '<div class="rejilla rejilla--2">' +
            atajo('🧠', 'Entrenar', 'Preguntas con explicación completa', 'entrenar', 'card--rosa') +
            atajo('📝', 'Simulacro', 'Con reloj, sin ayudas', 'simulacro', 'card--suero') +
            atajo('🩺', 'Clínica', 'Casos y pacientes virtuales', 'clinica', 'card--verde') +
            atajo('⚔️', 'Desafío', 'Difíciles contra reloj', 'desafio', 'card--yodo') +
          '</div>' +
        '</div>' +

        '<div style="display:flex;flex-direction:column;gap:16px">' +
          '<div class="card card--carbon">' +
            '<div class="row-b"><span class="eyebrow" style="color:rgba(255,255,255,.45)">Nivel actual</span>' +
            '<span style="font-size:22px">' + niv.actual.em + '</span></div>' +
            '<h3 style="font-size:22px;margin:6px 0 12px">' + esc(niv.actual.nombre) + '</h3>' +
            '<div class="barra" style="background:rgba(255,255,255,.14)"><i style="width:' + niv.pct + '%;background:#B31331"></i></div>' +
            '<p style="margin-top:10px;font-size:13px;color:rgba(255,255,255,.6)">' +
              (niv.siguiente ? 'Faltan ' + niv.faltan + ' preguntas para ' + esc(niv.siguiente.nombre)
                             : 'Has llegado al último nivel.') + '</p>' +
          '</div>' +

          '<div class="card">' +
            '<span class="eyebrow">Pendientes de repaso</span>' +
            '<div class="row" style="margin:12px 0;gap:22px">' +
              '<div><b style="font-family:var(--display);font-size:32px;display:block;line-height:1">' + r.pendientes + '</b>' +
              '<small class="muted">vencidas hoy</small></div>' +
              '<div><b style="font-family:var(--display);font-size:32px;display:block;line-height:1">' + r.falladas + '</b>' +
              '<small class="muted">falladas</small></div>' +
              '<div><b style="font-family:var(--display);font-size:32px;display:block;line-height:1">' + r.marcadas + '</b>' +
              '<small class="muted">marcadas</small></div>' +
            '</div>' +
            '<button class="btn btn--ancho btn--sm" id="btnRepaso">Hacer el repaso de hoy</button>' +
          '</div>' +

          '<div class="card card--rosa">' +
            '<span class="eyebrow">¿Estoy listo para el ENURM?</span>' +
            '<p style="margin:8px 0 14px;font-size:14px">Tu índice combina dominio, volumen de práctica, amplitud y consistencia entre áreas.</p>' +
            '<button class="btn btn--sm btn--ancho" id="btnPrep">Ver mi preparación</button>' +
          '</div>' +

          '<div class="card">' +
            '<span class="eyebrow">Racha</span>' +
            '<div class="row" style="margin-top:8px;gap:10px;align-items:baseline">' +
              '<b style="font-family:var(--display);font-size:38px;line-height:1">' + r.racha + '</b>' +
              '<span class="muted">' + (r.racha === 1 ? 'día seguido' : 'días seguidos') + '</span></div>' +
            '<div style="height:30px;color:var(--sangria-vivo);margin-top:8px">' + UI.ecg(220, 30) + '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

    document.getElementById('btnAccion').onclick = () => {
      if (acc.accion === 'entrenar') lanzarEntrenamiento(acc.param);
      else App.ir(acc.accion);
    };
    document.getElementById('verTodas').onclick = () => App.ir('progreso');
    document.getElementById('btnPrep').onclick = () => App.ir('preparacion');
    document.getElementById('btnRepaso').onclick = () => {
      const n = Motor.resumen().pendientes;
      if (!n) return UI.tostada('No tienes repasos vencidos. Entrena material nuevo.');
      lanzarEntrenamiento({ soloPendientes:true, n:Math.min(20, n) });
    };
    UI.$$('[data-esp]').forEach(el => el.onclick = () => App.ir('entrenar', { esp: el.dataset.esp }));
    UI.$$('[data-atajo]').forEach(el => el.onclick = () => App.ir(el.dataset.atajo));

    setTimeout(() => UI.$$('.barra i').forEach(b => b.style.width = b.style.width), 30);
  }

  function atajo(em, titulo, texto, destino, cls){
    return '<button class="card ' + cls + ' card--flota" data-atajo="' + destino + '" style="text-align:left;cursor:pointer;border:none;font:inherit">' +
      '<span style="font-size:24px">' + em + '</span>' +
      '<b style="display:block;font-family:var(--display);font-size:18px;margin-top:8px">' + esc(titulo) + '</b>' +
      '<small class="muted" style="font-size:12.5px">' + esc(texto) + '</small></button>';
  }

  /* ============================================================
     ENTRENAR — configuracion
     ============================================================ */
  let filtro = { esp:null, tema:null, sub:null, n:10, modo:'aprender', banco:'todo' };

  function entrenar(param){
    if (param && param.esp) filtro.esp = param.esp;
    const esps = Motor.especialidades();
    const temas = filtro.esp ? Motor.temas(filtro.esp) : [];
    const r = Motor.resumen();

    const opBanco = filtro.banco === 'curado' ? { soloCurado:true }
                : filtro.banco === 'extendido' ? { soloExtendido:true } : {};
    const disponibles = Motor.seleccionar(Object.assign({ esp:filtro.esp, tema:filtro.tema, sub:filtro.sub, n:9999 }, opBanco)).length;

    V().innerHTML =
    '<div class="escalona" style="max-width:960px">' +
      '<div class="encabezado"><p class="eyebrow">Modo aprender</p>' +
      '<h1>Entrena con explicación completa</h1>' +
      '<p>Sin reloj y con ayudas disponibles. Cada respuesta te devuelve el porqué, el dato clave, la trampa y la fuente.</p></div>' +

      '<div class="card" style="margin-bottom:16px">' +
        '<span class="eyebrow">Especialidad</span>' +
        '<div class="filtros" style="margin-top:12px">' +
          '<button class="chip' + (!filtro.esp ? ' on' : '') + '" data-f-esp="">Todas</button>' +
          esps.map(e => '<button class="chip' + (filtro.esp === e.nombre ? ' on' : '') +
            '" data-f-esp="' + esc(e.nombre) + '">' + esc(e.nombre) + ' · ' + e.total + '</button>').join('') +
        '</div>' +
        (temas.length ? '<span class="eyebrow" style="display:block;margin-top:18px">Tema</span>' +
          '<div class="filtros" style="margin-top:12px;margin-bottom:0">' +
          '<button class="chip' + (!filtro.tema ? ' on' : '') + '" data-f-tema="">Todos</button>' +
          temas.map(t => '<button class="chip' + (filtro.tema === t.tema ? ' on' : '') +
            '" data-f-tema="' + esc(t.tema) + '">' + esc(t.tema) + ' · ' + t.total + '</button>').join('') + '</div>' : '') +
      '</div>' +

      '<div class="card" style="margin-bottom:16px">' +
        '<span class="eyebrow">Cuántas preguntas</span>' +
        '<div class="filtros" style="margin-top:12px;margin-bottom:0">' +
          [5,10,20,30].map(n => '<button class="chip' + (filtro.n === n ? ' on' : '') +
            '" data-f-n="' + n + '">' + n + '</button>').join('') +
        '</div>' +
        '<p class="muted" style="margin-top:14px;font-size:13.5px">Hay <b>' + disponibles +
        '</b> preguntas disponibles con este filtro. La selección prioriza lo que fallaste, lo vencido y tus áreas débiles.</p>' +
        '<div class="filtros" style="margin-top:12px;margin-bottom:0">' +
          '<button class="chip' + (filtro.banco === 'todo' ? ' on' : '') + '" data-f-banco="todo">Todo el banco · ' + r.disponibles + '</button>' +
          '<button class="chip' + (filtro.banco === 'curado' ? ' on' : '') + '" data-f-banco="curado">Solo con explicación · ' + r.curadas + '</button>' +
          '<button class="chip' + (filtro.banco === 'extendido' ? ' on' : '') + '" data-f-banco="extendido">Solo exámenes MIR · ' + r.extendidas + '</button>' +
        '</div>' +
        '<div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--linea)">' +
          '<div class="row-b" style="margin-bottom:6px">' +
            '<span class="eyebrow">Explicaciones escritas</span>' +
            '<span class="mono" style="font-size:12.5px">' + r.conExplicacion + ' de ' + (r.curadas + r.extendidas) + '</span></div>' +
          UI.barra(Math.round(r.conExplicacion / Math.max(1, r.curadas + r.extendidas) * 100), true) +
          '<p class="muted" style="margin-top:8px;font-size:12.5px">Las preguntas importadas traen la respuesta oficial del examen. La explicación se redacta por lotes: ya van ' +
          r.enriquecidas + ' de las ' + r.extendidas + ' importadas.</p>' +
        '</div>' +
      '</div>' +

      '<div class="rejilla rejilla--3" style="margin-bottom:18px">' +
        modoCard('🧠', 'Aprender', 'Explicación después de cada pregunta', 'aprender') +
        modoCard('🎯', 'Razonamiento guiado', 'Seis pasos antes de ver las opciones', 'razonar') +
        modoCard('🔁', 'Solo mis errores', r.falladas + ' preguntas falladas esperando', 'errores') +
      '</div>' +

      '<div class="row wrap" style="gap:9px">' +
        '<button class="btn btn--lg" id="btnEmpezar">Empezar sesión →</button>' +
        (r.marcadas ? '<button class="btn btn--fantasma" id="btnMarcadas">Repasar mis ' + r.marcadas + ' marcadas</button>' : '') +
        (r.pendientes ? '<button class="btn btn--fantasma" id="btnVencidas">Repaso vencido (' + r.pendientes + ')</button>' : '') +
      '</div>' +
    '</div>';

    UI.$$('[data-f-esp]').forEach(b => b.onclick = () => {
      filtro.esp = b.dataset.fEsp || null; filtro.tema = null; entrenar();
    });
    UI.$$('[data-f-tema]').forEach(b => b.onclick = () => { filtro.tema = b.dataset.fTema || null; entrenar(); });
    UI.$$('[data-f-n]').forEach(b => b.onclick = () => { filtro.n = +b.dataset.fN; entrenar(); });
    UI.$$('[data-f-banco]').forEach(b => b.onclick = () => { filtro.banco = b.dataset.fBanco; entrenar(); });
    UI.$$('[data-modo]').forEach(b => b.onclick = () => { filtro.modo = b.dataset.modo; entrenar(); });

    document.getElementById('btnEmpezar').onclick = () => {
      const soloFalladas = filtro.modo === 'errores';
      lanzarEntrenamiento(Object.assign({ esp:filtro.esp, tema:filtro.tema, n:filtro.n, soloFalladas,
        modo: filtro.modo === 'razonar' ? 'razonar' : 'aprender' }, opBanco));
    };
    const bm = document.getElementById('btnMarcadas');
    if (bm) bm.onclick = () => lanzarEntrenamiento({ soloMarcadas:true, n:30 });
    const bv = document.getElementById('btnVencidas');
    if (bv) bv.onclick = () => lanzarEntrenamiento({ soloPendientes:true, n:20 });
  }

  function modoCard(em, titulo, texto, id){
    const on = filtro.modo === id;
    return '<button class="card' + (on ? ' card--carbon' : '') + ' card--flota" data-modo="' + id +
      '" style="text-align:left;cursor:pointer;font:inherit;border:' + (on ? 'none' : '1px solid var(--linea)') + '">' +
      '<span style="font-size:22px">' + em + '</span>' +
      '<b style="display:block;font-family:var(--display);font-size:17px;margin-top:7px">' + esc(titulo) + '</b>' +
      '<small style="font-size:12.5px;' + (on ? 'color:rgba(255,255,255,.6)' : 'color:var(--tinta-60)') + '">' + esc(texto) + '</small></button>';
  }

  function lanzarEntrenamiento(op){
    const preguntas = Motor.seleccionar(op);
    if (!preguntas.length) return UI.tostada('No hay preguntas con ese filtro', 'mal');
    Sesion.iniciar({
      modo: op.modo || 'aprender',
      titulo: op.soloFalladas ? 'Repaso de errores' : op.soloPendientes ? 'Repaso programado'
              : op.soloMarcadas ? 'Preguntas marcadas' : (op.esp || 'Entrenamiento general'),
      preguntas
    });
  }

  /* ============================================================
     SIMULACRO
     ============================================================ */
  function simulacro(){
    const d = Almacen.datos();
    const total = Motor.banco().length;
    const previos = d.simulacros.slice().reverse();

    const historial = previos.length ? previos.map(s =>
      '<div class="item-lista"><span class="item-lista__n">' + UI.fecha(s.fecha) + '</span>' +
      '<span class="grow"><b style="display:block">' + s.precision + '% · ' + s.correctas + '/' + s.respondidas + '</b>' +
      '<small class="muted">' + esc(s.etiqueta || 'Simulacro') + ' · ' + UI.reloj(s.ms) + '</small></span>' +
      '<span class="chip ' + (s.precision >= 70 ? 'chip--verde' : s.precision >= 50 ? 'chip--yodo' : 'chip--sangria') + '">' +
      (s.precision >= 70 ? 'Aprobatorio' : s.precision >= 50 ? 'Justo' : 'Bajo') + '</span></div>').join('')
      : '<p class="muted">Todavía no has hecho ningún simulacro.</p>';

    const dist = Object.keys(Motor.DISTRIBUCION).map(e =>
      '<div class="row-b" style="font-size:13.5px;padding:5px 0"><span>' + esc(e) + '</span>' +
      '<span class="mono">' + Math.round(Motor.DISTRIBUCION[e] * 100) + '%</span></div>').join('');

    V().innerHTML =
    '<div class="escalona" style="max-width:960px">' +
      '<div class="encabezado"><p class="eyebrow">Modo examen</p>' +
      '<h1>Simulacro ENURM</h1>' +
      '<p>Con reloj, sin pistas y sin explicación hasta el final. Así es como se siente el examen real.</p></div>' +

      '<div class="rejilla rejilla--2" style="margin-bottom:18px">' +
        '<div class="card card--sangria">' +
          '<span class="eyebrow" style="color:rgba(255,255,255,.5)">Simulacro adaptativo</span>' +
          '<h3 style="font-size:24px;margin:8px 0 10px">Ajustado a tu nivel</h3>' +
          '<p style="color:rgba(255,255,255,.75);font-size:14px">La selección pondera tus errores recientes, tus áreas débiles y las preguntas que hace tiempo no ves. Distribución de referencia:</p>' +
          '<div style="margin-top:14px;border-top:1px solid rgba(255,255,255,.18);padding-top:10px">' + dist + '</div>' +
        '</div>' +
        '<div class="card">' +
          '<span class="eyebrow">Elige el formato</span>' +
          '<div style="display:flex;flex-direction:column;gap:9px;margin-top:14px">' +
            formato('Simulacro corto', '25 preguntas · 30 minutos', 25, 30) +
            formato('Medio simulacro', '50 preguntas · 60 minutos', 50, 60) +
            formato('Simulacro completo', Math.min(100, total) + ' preguntas · 120 minutos', 100, 120) +
          '</div>' +
          '<p class="muted" style="margin-top:14px;font-size:12.5px">El banco tiene ' + total +
          ' preguntas cargadas. Si pides más de las disponibles, se usan todas.</p>' +
        '</div>' +
      '</div>' +

      '<div class="card"><span class="eyebrow">Tus simulacros anteriores</span>' +
      '<div style="display:flex;flex-direction:column;gap:9px;margin-top:14px">' + historial + '</div></div>' +
    '</div>';

    UI.$$('[data-sim]').forEach(b => b.onclick = () => {
      const n = +b.dataset.sim, min = +b.dataset.min;
      const preguntas = Motor.seleccionar({ n, distribuida:true });
      UI.modal('<h3 style="font-size:22px;margin-bottom:10px">' + preguntas.length + ' preguntas · ' + min + ' minutos</h3>' +
        '<p class="muted">Sin pistas, sin explicación hasta el final y con el reloj corriendo. Si se acaba el tiempo se califica lo respondido.</p>' +
        '<div class="row" style="margin-top:20px;gap:9px">' +
        '<button class="btn btn--fantasma grow" onclick="this.closest(\'.velo\').remove()">Todavía no</button>' +
        '<button class="btn grow" id="empezarSim">Empezar ahora</button></div>');
      document.getElementById('empezarSim').onclick = () => {
        document.querySelector('.velo').remove();
        Sesion.iniciar({ modo:'examen', titulo:'Simulacro ENURM', preguntas,
          tiempoTotal: min * 60000, etiqueta: preguntas.length + ' preguntas' });
      };
    });
  }

  function formato(titulo, texto, n, min){
    return '<button class="accion-clinica" data-sim="' + n + '" data-min="' + min + '">' +
      '<span class="em">📝</span><span class="grow"><b>' + esc(titulo) + '</b><small>' + esc(texto) + '</small></span>→</button>';
  }

  /* ============================================================
     DESAFIO
     ============================================================ */
  function desafio(){
    const dificiles = Motor.seleccionar({ difMin:4, n:999 }).length;
    V().innerHTML =
    '<div class="escalona" style="max-width:860px">' +
      '<div class="encabezado"><p class="eyebrow">Modo desafío</p>' +
      '<h1>Casos difíciles contra reloj</h1>' +
      '<p>Sesenta segundos por pregunta, tres vidas y multiplicador por racha. Para cuando ya dominas lo básico.</p></div>' +

      '<div class="card card--carbon" style="margin-bottom:18px">' +
        '<div class="row-b"><div>' +
          '<span class="eyebrow" style="color:rgba(255,255,255,.45)">Reglas</span>' +
          '<h3 style="font-size:22px;margin-top:6px">3 vidas · 60 segundos · sin ayudas</h3>' +
        '</div><span style="font-size:34px">⚔️</span></div>' +
        '<ul style="margin:14px 0 0;padding-left:18px;color:rgba(255,255,255,.72);font-size:14px;line-height:1.9">' +
          '<li>Cada acierto suma 100 puntos más el tiempo que te sobre.</li>' +
          '<li>Dos aciertos seguidos activan el multiplicador, hasta ×5.</li>' +
          '<li>Fallar o quedarte sin tiempo cuesta una vida.</li>' +
        '</ul>' +
      '</div>' +

      '<div class="rejilla rejilla--2" style="margin-bottom:18px">' +
        '<button class="card card--yodo card--flota" data-reto="10" style="text-align:left;cursor:pointer;font:inherit;border:none">' +
          '<span style="font-size:24px">🔥</span><b style="display:block;font-family:var(--display);font-size:19px;margin-top:8px">Reto de 10</b>' +
          '<small class="muted">Rápido. ¿Puedes hacer 9 de 10?</small></button>' +
        '<button class="card card--rosa card--flota" data-reto="20" style="text-align:left;cursor:pointer;font:inherit;border:none">' +
          '<span style="font-size:24px">💀</span><b style="display:block;font-family:var(--display);font-size:19px;margin-top:8px">Alto rendimiento</b>' +
          '<small class="muted">20 preguntas, solo dificultad alta y muy alta</small></button>' +
      '</div>' +

      '<p class="muted" style="font-size:13.5px">Hay ' + dificiles + ' preguntas de dificultad alta o muy alta en el banco.</p>' +
    '</div>';

    UI.$$('[data-reto]').forEach(b => b.onclick = () => {
      const n = +b.dataset.reto;
      const preguntas = Motor.seleccionar(n === 20 ? { difMin:4, n } : { n });
      if (!preguntas.length) return UI.tostada('No hay preguntas disponibles', 'mal');
      Sesion.iniciar({ modo:'desafio', titulo:'Desafío', preguntas, tiempoPregunta:60000, vidas:3 });
    });
  }

  /* ============================================================
     BIBLIOTECA
     ============================================================ */
  let bibFiltro = { esp:null, texto:'' };

  function biblioteca(){
    const esps = Motor.especialidades();
    let lista = Motor.banco().filter(q => !Motor.enRevision(q.id));
    if (bibFiltro.esp) lista = lista.filter(q => q.esp === bibFiltro.esp);
    if (bibFiltro.texto){
      const t = bibFiltro.texto.toLowerCase();
      lista = lista.filter(q =>
        (q.enunciado + ' ' + (q.caso || '') + ' ' + q.sub + ' ' + q.tema + ' ' + (q.tags || []).join(' ')).toLowerCase().indexOf(t) >= 0);
    }

    const items = lista.slice(0, 120).map(q => {
      const s = Motor.estadoPregunta(q.id);
      const estado = !s ? '<span class="chip">Sin ver</span>'
        : s.fallos > s.aciertos ? '<span class="chip chip--sangria">Fallada</span>'
        : s.paso >= 4 ? '<span class="chip chip--verde">Dominada</span>'
        : '<span class="chip chip--yodo">En progreso</span>';
      return '<div class="item-lista" data-q="' + q.id + '">' +
        '<span class="item-lista__n">' + esc(q.id) + '</span>' +
        '<span class="grow"><b style="display:block;font-size:14px">' + esc(q.sub) + '</b>' +
        '<small class="muted">' + esc(q.esp) + ' · ' + esc(q.tema) + '</small></span>' +
        estado + '</div>';
    }).join('');

    V().innerHTML =
    '<div class="escalona">' +
      '<div class="encabezado"><p class="eyebrow">Biblioteca</p>' +
      '<h1>Todo el banco, abierto</h1>' +
      '<p>Cada pregunta con su explicación, su trampa y su bibliografía. Úsalo como material de consulta, no solo de examen.</p></div>' +

      '<div class="card" style="margin-bottom:16px">' +
        '<div class="buscador" style="max-width:none;box-shadow:none;border-color:var(--linea)">' +
          '<span>🔍</span><input id="bibBuscar" placeholder="Buscar por tema, síntoma o palabra clave…" value="' + esc(bibFiltro.texto) + '"></div>' +
        '<div class="filtros" style="margin-top:14px;margin-bottom:0">' +
          '<button class="chip' + (!bibFiltro.esp ? ' on' : '') + '" data-b-esp="">Todas · ' + Motor.banco().length + '</button>' +
          esps.map(e => '<button class="chip' + (bibFiltro.esp === e.nombre ? ' on' : '') +
            '" data-b-esp="' + esc(e.nombre) + '">' + esc(e.nombre) + ' · ' + e.total + '</button>').join('') +
        '</div>' +
      '</div>' +

      '<p class="muted" style="margin-bottom:12px;font-size:13.5px">' + lista.length + ' preguntas' +
      (lista.length > 120 ? ' · mostrando las primeras 120' : '') + '</p>' +
      '<div style="display:flex;flex-direction:column;gap:9px">' + (items || '<p class="muted">Nada coincide con esa búsqueda.</p>') + '</div>' +
    '</div>';

    UI.$$('[data-b-esp]').forEach(b => b.onclick = () => { bibFiltro.esp = b.dataset.bEsp || null; biblioteca(); });
    UI.$$('[data-q]').forEach(el => el.onclick = () => Sesion.revisarPregunta(el.dataset.q));
    const inp = document.getElementById('bibBuscar');
    let t;
    inp.oninput = () => { clearTimeout(t); t = setTimeout(() => {
      bibFiltro.texto = inp.value; biblioteca();
      const n = document.getElementById('bibBuscar'); n.focus(); n.setSelectionRange(n.value.length, n.value.length);
    }, 320); };
  }

  /* ============================================================
     PROGRESO
     ============================================================ */
  function progreso(){
    const r = Motor.resumen();
    const areas = Motor.dominioPorEspecialidad();
    const serie = Motor.serieDiaria(14);
    const errores = Motor.erroresPorTipo();
    const frag = Motor.fragilidad();
    const meds = Motor.medallas();
    const mapa = Motor.mapaConocimiento();

    if (r.respondidas === 0){
      V().innerHTML = '<div class="encabezado"><h1>Todavía no hay nada que medir</h1>' +
        '<p>Responde algunas preguntas y esta pantalla se llena: dominio por área, tipos de error, curva de precisión y mapa de conocimiento.</p></div>' +
        '<button class="btn btn--lg" onclick="App.ir(\'entrenar\')">Empezar a entrenar →</button>';
      return;
    }

    const filasAreas = areas.map(a =>
      '<div class="dominio__fila" data-ir-esp="' + esc(a.nombre) + '">' +
        '<div class="row-b"><b>' + esc(a.nombre) + '</b><span class="mono">' + UI.pctTexto(a.dominio) + '</span></div>' +
        UI.barra(a.dominio) +
        '<small class="muted" style="font-size:12px">' + a.respondidas + ' respondidas</small></div>').join('');

    const filasError = errores.filter(e => e.n > 0).map(e =>
      '<div style="margin-bottom:12px"><div class="row-b" style="margin-bottom:5px">' +
      '<span class="row" style="gap:8px"><span class="err-punto" style="background:' + e.color + '"></span>' +
      '<b style="font-size:13.5px">' + esc(e.nombre) + '</b></span>' +
      '<span class="mono" style="font-size:13px">' + e.n + ' · ' + e.pct + '%</span></div>' +
      '<div class="barra barra--fina"><i style="width:' + e.pct + '%;background:' + e.color + '"></i></div></div>').join('');

    const nodos = mapa.map((esp, i) =>
      '<div class="nodo" data-nodo="' + i + '">' +
        '<button class="nodo__cabeza"><span class="nodo__flecha">▶</span>' +
        '<b class="grow">' + esc(esp.esp) + '</b>' +
        '<span class="mono" style="font-size:13px">' + UI.pctTexto(esp.dominio) + '</span></button>' +
        '<div class="nodo__hijos">' +
          esp.temas.map(t =>
            '<div><div class="row-b" style="margin-bottom:6px"><b style="font-size:13.5px">' + esc(t.tema) + '</b>' +
            '<span class="mono" style="font-size:12.5px">' + UI.pctTexto(t.dominio) + '</span></div>' +
            t.subs.map(s => '<div class="hoja" data-hoja-esp="' + esc(esp.esp) + '" data-hoja-tema="' + esc(t.tema) + '">' +
              '<span class="grow" style="font-size:13px">' + esc(s.sub) + '</span>' +
              UI.barra(s.dominio) + '<span class="mono" style="font-size:12px;width:38px;text-align:right">' +
              UI.pctTexto(s.dominio) + '</span></div>').join('') + '</div>').join('') +
        '</div>' +
      '</div>').join('');

    V().innerHTML =
    '<div class="escalona">' +
      '<div class="encabezado"><p class="eyebrow">Mi progreso</p><h1>Cómo estás aprendiendo</h1>' +
      '<p>No solo qué fallaste: también cómo lo fallaste y en qué parte del mapa está el hueco.</p></div>' +

      '<div class="rejilla rejilla--4" style="margin-bottom:18px">' +
        '<div class="metrica"><b>' + r.respondidas + '</b><span>Respondidas</span></div>' +
        '<div class="metrica"><b>' + r.precision + '%</b><span>Precisión global</span></div>' +
        '<div class="metrica"><b>' + r.simulacros + '</b><span>Simulacros</span></div>' +
        '<div class="metrica"><b>' + r.cobertura + '%</b><span>Banco recorrido</span></div>' +
      '</div>' +

      '<div class="rejilla rejilla--tablero" style="margin-bottom:18px">' +
        '<div class="card"><span class="eyebrow">Precisión de los últimos 14 días</span>' +
          '<div style="margin-top:14px">' + UI.grafico(serie) + '</div></div>' +
        '<div class="card"><span class="eyebrow">Cómo estás fallando</span>' +
          '<p class="muted" style="margin:6px 0 14px;font-size:13px">Clasificación de tus errores. Saber el tipo de error dice más que la especialidad.</p>' +
          (filasError || '<p class="muted">Aún no has clasificado ningún error. Cuando falles una pregunta, elige el motivo: se acumula aquí.</p>') +
          (frag.total >= 5 ? '<div class="bloque bloque--clave" style="margin-top:14px"><span class="eyebrow">Confianza vs conocimiento</span>' +
          '<p>' + frag.fragil + ' aciertos con poca seguridad y ' + frag.excesoConfianza +
          ' errores con mucha seguridad. Los primeros son conocimiento frágil; los segundos, puntos ciegos.</p></div>' : '') +
        '</div>' +
      '</div>' +

      '<div class="card" style="margin-bottom:18px"><span class="eyebrow">Dominio por especialidad</span>' +
        '<p class="muted" style="margin:6px 0 16px;font-size:13px">Ordenado de menor a mayor dominio. Toca cualquiera para entrenar esa área.</p>' +
        '<div class="dominio">' + filasAreas + '</div></div>' +

      '<div class="card" style="margin-bottom:18px"><span class="eyebrow">Mapa de conocimiento</span>' +
        '<p class="muted" style="margin:6px 0 16px;font-size:13px">Especialidad → tema → subtema. Ahí es donde se ve el hueco exacto.</p>' +
        '<div class="mapa">' + nodos + '</div></div>' +

      '<div class="card"><span class="eyebrow">Medallas</span>' +
        '<div class="medallas" style="margin-top:14px">' +
          meds.map(m => '<div class="medalla' + (m.ganada ? ' ganada' : '') + '">' +
            '<span class="em">' + m.em + '</span><b>' + esc(m.nombre) + '</b>' +
            '<small>' + esc(m.desc) + '</small></div>').join('') +
        '</div></div>' +
    '</div>';

    UI.$$('[data-ir-esp]').forEach(el => el.onclick = () => App.ir('entrenar', { esp: el.dataset.irEsp }));
    UI.$$('.nodo__cabeza').forEach(b => b.onclick = () => b.parentElement.classList.toggle('abierto'));
    UI.$$('.hoja').forEach(el => el.onclick = e => {
      e.stopPropagation();
      lanzarEntrenamiento({ esp: el.dataset.hojaEsp, tema: el.dataset.hojaTema, n:10 });
    });
  }

  /* ============================================================
     PREPARACION ENURM
     ============================================================ */
  function preparacion(){
    const p = Motor.preparacion();
    const d = Almacen.datos();
    const plan = d.plan;

    const fuerzas = p.fuerzas.length
      ? p.fuerzas.map(a => '<div class="row" style="gap:9px;padding:7px 0"><span>🟢</span><b class="grow">' + esc(a.nombre) + '</b><span class="mono">' + a.dominio + '%</span></div>').join('')
      : '<p class="muted">Todavía no hay ningún área por encima del 75%.</p>';

    const debiles = p.debilidades.length
      ? p.debilidades.map(a => '<div class="row" style="gap:9px;padding:7px 0;cursor:pointer" data-deb="' + esc(a.nombre) + '">' +
          '<span>' + (a.dominio < 50 ? '🔴' : '🟠') + '</span><b class="grow">' + esc(a.nombre) + '</b>' +
          '<span class="mono">' + a.dominio + '%</span></div>').join('')
      : '<p class="muted">Ninguna área por debajo del 65%. Buen equilibrio.</p>';

    const planHtml = plan ? plan.dias.map(dd =>
      '<div class="item-lista" data-plan="' + dd.dia + '">' +
        '<span class="item-lista__n">Día ' + dd.dia + '</span>' +
        '<span class="grow"><b style="display:block;font-size:14px">' + esc(dd.titulo) + '</b>' +
        '<small class="muted">' + esc(dd.detalle) + '</small></span>' +
        '<span class="chip ' + (dd.hecho ? 'chip--verde' : '') + '">' + (dd.hecho ? '✓ Hecho' : 'Empezar') + '</span></div>').join('')
      : '<p class="muted">Genera tu plan y la plataforma reparte los siete días según tus áreas más débiles.</p>';

    V().innerHTML =
    '<div class="escalona" style="max-width:1000px">' +
      '<div class="encabezado"><p class="eyebrow">Índice de preparación</p>' +
      '<h1>¿Estoy listo para el ENURM?</h1>' +
      '<p>' + esc(p.detalle) + '</p></div>' +

      '<div class="rejilla rejilla--tablero" style="margin-bottom:18px">' +
        '<div class="card" style="text-align:center;padding:30px">' +
          UI.anillo(p.pct, p.etiqueta) +
          '<p class="muted" style="margin-top:18px;font-size:13.5px;max-width:420px;margin-left:auto;margin-right:auto">' +
          (p.pct >= 85 ? 'Estás en rango de preparación alto. Mantén el ritmo y no abandones las áreas fuertes.'
           : p.pct >= 70 ? 'Vas encaminado. Cerrar dos o tres debilidades te mueve mucho el índice.'
           : p.pct >= 50 ? 'Hay base, pero el índice se sostiene sobre pocas áreas. Amplía la cobertura.'
           : 'Etapa inicial. Lo que más sube este número ahora es volumen de práctica con explicación.') + '</p>' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;gap:16px">' +
          '<div class="card card--verde"><span class="eyebrow">Fortalezas</span><div style="margin-top:10px">' + fuerzas + '</div></div>' +
          '<div class="card card--rosa"><span class="eyebrow">Debilidades</span><div style="margin-top:10px">' + debiles + '</div></div>' +
        '</div>' +
      '</div>' +

      '<div class="card">' +
        '<div class="row-b" style="margin-bottom:14px"><span class="eyebrow">Plan de estudio de 7 días</span>' +
        '<button class="btn btn--sm" id="btnPlan">' + (plan ? 'Regenerar plan' : 'Generar plan') + '</button></div>' +
        '<div style="display:flex;flex-direction:column;gap:9px">' + planHtml + '</div>' +
      '</div>' +
    '</div>';

    document.getElementById('btnPlan').onclick = () => {
      Motor.generarPlan();
      UI.tostada('Plan generado según tus áreas más débiles', 'ok');
      preparacion();
    };
    UI.$$('[data-deb]').forEach(el => el.onclick = () => App.ir('entrenar', { esp: el.dataset.deb }));
    UI.$$('[data-plan]').forEach(el => el.onclick = () => {
      const dd = plan.dias[+el.dataset.plan - 1];
      dd.hecho = true; Almacen.guardar();
      if (dd.tipo === 'simulacro') return App.ir('simulacro');
      if (dd.tipo === 'clinica') return App.ir('clinica');
      if (dd.tipo === 'errores') return lanzarEntrenamiento({ soloFalladas:true, n:20 });
      lanzarEntrenamiento({ esp: dd.esp, n:20 });
    });
  }

  /* ============================================================
     AJUSTES
     ============================================================ */
  function ajustes(){
    const d = Almacen.datos();
    const s = Almacen.sesion();
    const a = d.ajustes;

    V().innerHTML =
    '<div class="escalona" style="max-width:760px">' +
      '<div class="encabezado"><p class="eyebrow">Ajustes</p><h1>Tu cuenta y tu forma de estudiar</h1></div>' +

      '<div class="card" style="margin-bottom:16px"><span class="eyebrow">Cuenta</span>' +
        '<div class="row" style="margin-top:14px;gap:14px">' +
          '<span class="avatar" style="width:52px;height:52px;font-size:20px">' + esc(d.perfil.nombre.charAt(0).toUpperCase()) + '</span>' +
          '<div class="grow"><b style="font-size:17px;display:block">' + esc(d.perfil.nombre) + '</b>' +
          '<small class="muted">usuario: ' + esc(s.usuario) + ' · desde ' + UI.fecha(d.perfil.creado) + '</small></div>' +
          '<button class="btn btn--sm btn--fantasma" id="btnClave">Cambiar contraseña</button>' +
        '</div>' +
      '</div>' +

      '<div class="card" style="margin-bottom:16px"><span class="eyebrow">Cómo quieres entrenar</span>' +
        conmutador('pedirConfianza', 'Preguntar mi nivel de confianza', 'Antes de confirmar, declaras qué tan seguro estás. Acertar con poca seguridad se trata como conocimiento frágil.', a.pedirConfianza) +
        conmutador('defenderRespuesta', 'Pedirme que defienda mi respuesta', 'Escribes tu razonamiento antes de ver el resultado y recibes análisis del argumento, no solo del acierto.', a.defenderRespuesta) +
        conmutador('bancoExtendido', 'Incluir el banco extendido',
          'Añade ' + Motor.resumen().extendidas + ' preguntas reales del MIR de medicina (España, 2013-2022) a las ' +
          Motor.resumen().curadas + ' redactadas aquí. ' + Motor.resumen().enriquecidas +
          ' ya tienen explicación completa; el resto trae la respuesta oficial pero todavía no el porqué. ' +
          'No se incluye el bloque del examen FIR de farmacia, que quedó fuera por no ser materia del ENURM. ' +
          'Apágalo si prefieres estudiar solo con explicación completa.', a.bancoExtendido) +
      '</div>' +

      '<div class="card" style="margin-bottom:16px" id="tarjetaSuscripcion"><span class="eyebrow">Tu suscripción</span>' +
        '<p class="muted" style="margin-top:8px;font-size:13.5px">Consultando…</p></div>' +

      '<div class="card" style="margin-bottom:16px"><span class="eyebrow">Copia de seguridad</span>' +
        '<p class="muted" style="margin:8px 0 14px;font-size:13.5px">Tu progreso vive solo en este navegador. Si vas a formatear, cambiar de computadora o limpiar datos, exporta primero.</p>' +
        '<div class="row wrap" style="gap:9px">' +
          '<button class="btn btn--sm" id="btnExportar">Exportar mi progreso</button>' +
          '<button class="btn btn--sm btn--fantasma" id="btnImportar">Importar desde archivo</button>' +
          '<input type="file" id="archivo" accept="application/json" class="hidden">' +
        '</div>' +
      '</div>' +

      '<div class="card"><span class="eyebrow">Zona delicada</span>' +
        '<div class="row wrap" style="gap:9px;margin-top:14px">' +
          '<button class="btn btn--sm btn--fantasma" id="btnReiniciar">Borrar mi progreso</button>' +
          '<button class="btn btn--sm btn--carbon" id="btnSalirCuenta">Cerrar sesión</button>' +
        '</div>' +
      '</div>' +
    '</div>';

    pintarSuscripcion();

    UI.$$('[data-ajuste]').forEach(b => b.onclick = () => {
      const k = b.dataset.ajuste;
      d.ajustes[k] = !d.ajustes[k];
      Almacen.guardar(); ajustes();
    });

    document.getElementById('btnClave').onclick = () => {
      UI.modal('<h3 style="font-size:21px;margin-bottom:16px">Cambiar contraseña</h3>' +
        '<div class="campo"><label>Contraseña actual</label><input type="password" id="c1"></div>' +
        '<div class="campo"><label>Nueva contraseña</label><input type="password" id="c2"></div>' +
        '<div id="msgClave"></div>' +
        '<button class="btn btn--ancho" style="margin-top:14px" id="guardarClave">Guardar</button>');
      document.getElementById('guardarClave').onclick = () => {
        const r = Almacen.cambiarClave(document.getElementById('c1').value, document.getElementById('c2').value);
        if (!r.ok) return document.getElementById('msgClave').innerHTML = '<div class="aviso">' + esc(r.error) + '</div>';
        document.querySelector('.velo').remove();
        UI.tostada('Contraseña actualizada', 'ok');
      };
    };

    document.getElementById('btnExportar').onclick = () => {
      const txt = Almacen.exportar();
      const blob = new Blob([txt], { type:'application/json' });
      const a2 = document.createElement('a');
      a2.href = URL.createObjectURL(blob);
      a2.download = 'enurm-progreso-' + Almacen.hoyISO() + '.json';
      a2.click();
      UI.tostada('Archivo descargado', 'ok');
    };
    document.getElementById('btnImportar').onclick = () => document.getElementById('archivo').click();
    document.getElementById('archivo').onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      const lector = new FileReader();
      lector.onload = () => {
        const r = Almacen.importar(lector.result);
        UI.tostada(r.ok ? 'Progreso importado' : r.error, r.ok ? 'ok' : 'mal');
        if (r.ok) App.ir('inicio');
      };
      lector.readAsText(f);
    };

    document.getElementById('btnReiniciar').onclick = () => {
      UI.modal('<h3 style="font-size:21px;margin-bottom:10px">¿Borrar todo tu progreso?</h3>' +
        '<p class="muted">Se pierden respuestas, simulacros, rachas y medallas. La cuenta se mantiene. Esto no se puede deshacer.</p>' +
        '<div class="row" style="margin-top:20px;gap:9px">' +
        '<button class="btn btn--fantasma grow" onclick="this.closest(\'.velo\').remove()">Cancelar</button>' +
        '<button class="btn grow" id="siBorrar">Sí, borrar</button></div>');
      document.getElementById('siBorrar').onclick = () => {
        Almacen.reiniciarProgreso();
        document.querySelector('.velo').remove();
        UI.tostada('Progreso borrado');
        App.ir('inicio');
      };
    };
    document.getElementById('btnSalirCuenta').onclick = () => { Almacen.salir(); location.href = 'index.html'; };
  }

  /* Estado de la suscripcion del propio estudiante. Se consulta al
     servidor porque la fila la controla el administrador, no el
     navegador: aqui solo se muestra lo que diga la base de datos. */
  async function pintarSuscripcion(){
    const caja = document.getElementById('tarjetaSuscripcion');
    if (!caja) return;
    const s = Almacen.sesion();
    if (!s || !s.nube || !window.Nube || !Nube.disponible()){
      caja.innerHTML = '<span class="eyebrow">Tu suscripción</span>' +
        '<p class="muted" style="margin-top:8px;font-size:13.5px">Esta es una sesión local, sin cuenta en la nube.</p>';
      return;
    }
    let sus = null;
    try { sus = await Nube.miSuscripcion(); } catch (e) { sus = null; }
    if (!sus){
      caja.innerHTML = '<span class="eyebrow">Tu suscripción</span>' +
        '<p class="muted" style="margin-top:8px;font-size:13.5px">No se pudo consultar ahora mismo.</p>';
      return;
    }
    const dias = sus.vence ? Math.ceil((new Date(sus.vence).getTime() - Date.now()) / 86400000) : null;
    const vencida = sus.estado !== 'activa' || (dias !== null && dias < 0);
    const fecha = sus.vence ? UI.fecha(new Date(sus.vence).getTime()) : '—';

    caja.innerHTML = '<span class="eyebrow">Tu suscripción</span>' +
      '<div class="row" style="margin-top:12px;gap:14px;align-items:center">' +
        '<div class="grow"><b style="font-size:16px;text-transform:capitalize">' + esc(sus.plan) + '</b>' +
        '<p class="muted" style="font-size:13px;margin-top:3px">' +
          (vencida ? 'Vencida o inactiva desde el ' + esc(fecha)
                   : 'Activa hasta el ' + esc(fecha) + (dias !== null ? ' · quedan ' + dias + (dias === 1 ? ' día' : ' días') : '')) +
        '</p></div>' +
        '<span style="padding:4px 11px;border-radius:999px;font-size:12px;font-weight:700;color:#fff;background:' +
          (vencida ? 'var(--mal, #b3261e)' : 'var(--ok, #1f8a4c)') + '">' +
          (vencida ? 'inactiva' : 'activa') + '</span>' +
      '</div>' +
      (vencida ? '<p class="muted" style="font-size:12.5px;margin-top:10px">Escribe al administrador para renovarla.</p>' : '');
  }

  function conmutador(id, titulo, texto, on){
    return '<div class="row" style="gap:14px;padding:14px 0;border-bottom:1px solid var(--linea);align-items:flex-start">' +
      '<div class="grow"><b style="font-size:14.5px">' + esc(titulo) + '</b>' +
      '<p class="muted" style="font-size:13px;margin-top:3px">' + esc(texto) + '</p></div>' +
      '<button class="btn btn--sm ' + (on ? '' : 'btn--fantasma') + '" data-ajuste="' + id + '">' +
      (on ? 'Activado' : 'Desactivado') + '</button></div>';
  }

  return { inicio, entrenar, simulacro, desafio, biblioteca, progreso, preparacion, ajustes, lanzarEntrenamiento };
})();
