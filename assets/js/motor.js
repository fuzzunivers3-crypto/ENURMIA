/* ============================================================
   MOTOR — seleccion adaptativa, repeticion espaciada,
   analisis de errores e indice de preparacion.
   ============================================================ */
window.Motor = (function () {

  const DIA = 86400000;
  const INTERVALOS = [0, 1, 3, 7, 16, 35, 75];

  /* ---------- taxonomia de errores ---------- */
  const TIPOS_ERROR = [
    { id:'concepto',  nombre:'No sabía el concepto',        color:'#B31331' },
    { id:'confusion', nombre:'Confundí dos diagnósticos',   color:'#C8873A' },
    { id:'dato',      nombre:'No identifiqué el dato clave', color:'#D8B23A' },
    { id:'lectura',   nombre:'Leí mal la pregunta',          color:'#7FA8C4' },
    { id:'cambio',    nombre:'Cambié una respuesta correcta',color:'#8E7BB0' },
    { id:'calculo',   nombre:'Error de cálculo',             color:'#4E8C74' }
  ];

  const NIVELES = [
    { min:0,    nombre:'Estudiante',        em:'📕' },
    { min:100,  nombre:'Interno',           em:'🩺' },
    { min:300,  nombre:'Clínico',           em:'🧠' },
    { min:700,  nombre:'Razonador clínico', em:'⚡' },
    { min:1500, nombre:'ENURM Ready',       em:'🏆' }
  ];

  /* Distribucion tematica del simulacro.
     Calibrada al peso real del ENURM: Medicina Interna es el bloque
     dominante; Farmacologia y ciencias basicas entran de forma
     sistematica; Cirugia pesa menos de lo que suele asumirse, y
     dermatologia, ORL, urologia y genetica aparecen poco. */
  const DISTRIBUCION = {
    'Medicina Interna':0.28, 'Pediatría':0.15, 'Ginecología y Obstetricia':0.14,
    'Cirugía':0.08, 'Farmacología':0.08, 'Ciencias Básicas':0.07,
    'Epidemiología':0.05, 'Salud Pública':0.05, 'Emergencias':0.04,
    'Psiquiatría':0.03, 'Bioética':0.02, 'Medicina Familiar':0.01
  };

  /* La distribucion de un simulacro depende del programa.

     ENURMIA reparte por especialidad, calibrado al peso real del ENURM.
     UNIRMIA no puede hacer eso: un estudiante de cuatrimestre 7 no tiene
     nada que hacer con preguntas de farmacologia, que es del 9. Asi que
     reparte por ASIGNATURA dentro de SU cuatrimestre, y con el peso en
     creditos que le da el pensum: Anatomia I son 6 creditos de 28, o sea
     que le tocan 6 de cada 28 preguntas. */
  function distribucion(){
    if (programaActivo() !== 'unirm') return DISTRIBUCION;
    const c = (window.UNIRM_CUATRIMESTRES || {})[cuatrimestreActivo()];
    if (!c) return DISTRIBUCION;
    const total = c.asignaturas.reduce((a, x) => a + x.cr, 0) || 1;
    const m = {};
    c.asignaturas.forEach(x => { m[x.nombre] = x.cr / total; });
    return m;
  }

  function cuatrimestreActivo(){
    const d = datos();
    const n = d && d.perfil ? +d.perfil.cuatrimestre : 0;
    return (n === 7 || n === 8 || n === 9) ? n : 7;
  }

  /* ---------- acceso al banco ----------
     Hay dos programas viviendo en el mismo armazon: ENURMIA (residencia)
     y UNIRMIA (universidad). Las preguntas de UNIRMIA llevan
     `programa:'unirm'`; las del ENURM no llevan nada, porque son las que
     ya existian y no vamos a reescribir miles de filas para anadir un
     campo que se puede deducir por ausencia.

     El resultado se memoriza porque banco() se llama en bucles (porId
     hace una busqueda lineal por cada pregunta de una sesion) y filtrar
     cinco mil objetos cada vez se notaria. La memoria se invalida sola si
     cambia el programa o si entra otro archivo de banco. */
  let bcLista = null, bcPrograma = null, bcLargo = -1;

  function programaActivo(){
    return (window.Almacen && Almacen.programa) ? Almacen.programa() : 'enurm';
  }

  function banco(){
    const todo = window.BANCO || [];
    const p = programaActivo();
    if (bcLista && bcPrograma === p && bcLargo === todo.length) return bcLista;
    bcPrograma = p; bcLargo = todo.length;
    bcLista = (p === 'unirm')
      ? todo.filter(q => q.programa === 'unirm')
      : todo.filter(q => q.programa !== 'unirm');
    return bcLista;
  }

  /* Capa de enriquecimiento. Los archivos banco-mir-*.js son
     autogenerados: si escribieramos las explicaciones ahi, se
     perderian al reimportar. Viven aparte, en explicaciones-*.js,
     y se fusionan por id al arrancar. */
  function aplicarExplicaciones(){
    const E = window.EXPLICACIONES || {};
    let n = 0;
    /* Sobre el banco entero, no sobre el del programa en curso: se aplica
       una sola vez al arrancar y asi no depende de quien haya entrado. */
    (window.BANCO || []).forEach(q => {
      const e = E[q.id];
      if (!e) return;
      Object.keys(e).forEach(k => { q[k] = e[k]; });
      q.verificado = true;
      n++;
    });
    return n;
  }
  function porId(id){ return banco().find(q => q.id === id); }

  function especialidades(){
    const m = {};
    banco().forEach(q => { m[q.esp] = (m[q.esp] || 0) + 1; });
    return Object.keys(m).sort().map(e => ({ nombre:e, total:m[e] }));
  }

  function temas(esp){
    const m = {};
    banco().filter(q => !esp || q.esp === esp).forEach(q => {
      const k = q.esp + ' · ' + q.tema;
      if (!m[k]) m[k] = { esp:q.esp, tema:q.tema, total:0, subs:{} };
      m[k].total++;
      m[k].subs[q.sub] = (m[k].subs[q.sub] || 0) + 1;
    });
    return Object.values(m);
  }

  /* ---------- historial ---------- */
  function datos(){ return Almacen.datos(); }
  function historial(){ const d = datos(); return d ? d.respuestas : []; }

  function porPregunta(qid){ return historial().filter(r => r.qid === qid); }

  function estadoPregunta(qid){
    const d = datos();
    return (d && d.srs[qid]) || null;
  }

  /* ---------- registrar una respuesta ---------- */
  function registrar(reg){
    const d = datos(); if (!d) return;
    const r = {
      qid: reg.qid, ok: !!reg.ok, elegida: reg.elegida,
      ms: reg.ms || 0, fecha: Date.now(), modo: reg.modo || 'entrenar',
      confianza: reg.confianza || null, tipoError: reg.tipoError || null,
      cambio: !!reg.cambio, ayuda: !!reg.ayuda
    };
    d.respuestas.push(r);
    actualizarSRS(qid_(reg.qid), reg.ok, reg.confianza);
    Almacen.tocarRacha();
    Almacen.guardar();
    return r;
  }
  function qid_(x){ return x; }

  /* ---------- repeticion espaciada (SM-2 adaptado) ---------- */
  function actualizarSRS(qid, ok, confianza){
    const d = datos(); if (!d) return;
    const s = d.srs[qid] || { paso:0, ef:2.5, prox:0, aciertos:0, fallos:0, visto:0 };
    s.visto++;
    if (ok){
      s.aciertos++;
      // acertar con baja confianza no premia igual: conocimiento fragil
      const salto = (confianza === 'baja') ? 0 : 1;
      s.paso = Math.min(s.paso + salto, INTERVALOS.length - 1);
      s.ef = Math.min(2.8, s.ef + (confianza === 'alta' ? 0.10 : 0.02));
    } else {
      s.fallos++;
      s.paso = 0;
      s.ef = Math.max(1.3, s.ef - 0.25);
    }
    const dias = INTERVALOS[s.paso] * (s.ef / 2.5);
    s.prox = Date.now() + Math.round(dias * DIA);
    d.srs[qid] = s;
  }

  function pendientes(){
    const d = datos(); if (!d) return [];
    const hoy = Date.now();
    return banco().filter(q => {
      const s = d.srs[q.id];
      return s && s.prox <= hoy;
    });
  }

  function noVistas(){
    const d = datos(); if (!d) return banco();
    return banco().filter(q => !d.srs[q.id]);
  }

  function falladas(){
    const d = datos(); if (!d) return [];
    return banco().filter(q => { const s = d.srs[q.id]; return s && s.fallos > 0 && s.paso <= 1; });
  }

  /* ---------- prioridad de una pregunta ---------- */
  function prioridad(q){
    const d = datos(); if (!d) return 1;
    const s = d.srs[q.id];
    let p = 1;
    if (!s) return 1.6;                                   // nunca vista: alta
    if (s.prox <= Date.now()) p += 1.4;                   // vencida
    if (s.fallos > 0) p += 0.8 * Math.min(s.fallos, 3);   // fallada
    const dom = dominioDe(q.esp);
    if (dom !== null && dom < 60) p += 0.9;               // area debil
    if (dom !== null && dom > 85) p -= 0.5;               // area dominada
    const dias = (Date.now() - (s.prox - INTERVALOS[s.paso] * DIA)) / DIA;
    if (dias > 20) p += 0.3;                              // hace mucho no se ve
    return Math.max(0.05, p);
  }

  function barajarPonderado(lista, n){
    const copia = lista.map(q => ({ q, w: prioridad(q) * (0.6 + Math.random()) }));
    copia.sort((a, b) => b.w - a.w);
    return copia.slice(0, n).map(x => x.q);
  }

  /* ---------- seleccion de preguntas ---------- */
  /* El banco extendido (preguntas reales de examen sin explicacion
     propia) se puede apagar desde Ajustes para estudiar solo con el
     banco curado. */
  /* Las preguntas en cuarentena nunca llegan al estudiante:
     su respuesta oficial contradice a la bibliografia. */
  function enRevision(id){
    if (window.REVISION && window.REVISION[id]) return true;
    const cohortes = window.REVISION_COHORTE || [];
    if (!cohortes.length) return false;
    const q = banco().find(x => x.id === id);
    if (!q) return false;
    return cohortes.some(c => c.prueba(q));
  }

  function bancoActivo(){
    const d = datos();
    let lista = banco().filter(q => !enRevision(q.id));
    if (d && d.ajustes && d.ajustes.bancoExtendido === false){
      lista = lista.filter(q => q.fuente !== 'MIR');
    }
    return lista;
  }

  function seleccionar(op){
    op = op || {};
    let lista = bancoActivo();
    if (op.soloCurado) lista = lista.filter(q => q.fuente !== 'MIR');
    if (op.soloExtendido) lista = lista.filter(q => q.fuente === 'MIR');

    if (op.esp)   lista = lista.filter(q => q.esp === op.esp);
    if (op.tema)  lista = lista.filter(q => q.tema === op.tema);
    if (op.sub)   lista = lista.filter(q => q.sub === op.sub);
    if (op.difMin) lista = lista.filter(q => q.dif >= op.difMin);
    if (op.soloFalladas){
      const ids = falladas().map(q => q.id);
      lista = lista.filter(q => ids.indexOf(q.id) >= 0);
    }
    if (op.soloMarcadas){
      const d = datos();
      lista = lista.filter(q => d.marcadas.indexOf(q.id) >= 0);
    }
    if (op.soloPendientes){
      const ids = pendientes().map(q => q.id);
      lista = lista.filter(q => ids.indexOf(q.id) >= 0);
    }
    if (!lista.length) return [];

    const n = Math.min(op.n || 10, lista.length);

    if (op.distribuida){
      const salida = [];
      const reparto = distribucion();
      Object.keys(reparto).forEach(esp => {
        const cupo = Math.round(n * reparto[esp]);
        const grupo = lista.filter(q => q.esp === esp);
        salida.push.apply(salida, barajarPonderado(grupo, cupo));
      });
      // completar con lo que falte
      const ids = salida.map(q => q.id);
      const resto = lista.filter(q => ids.indexOf(q.id) < 0);
      salida.push.apply(salida, barajarPonderado(resto, Math.max(0, n - salida.length)));
      return salida.slice(0, n).sort(() => Math.random() - 0.5);
    }

    return barajarPonderado(lista, n).sort(() => Math.random() - 0.5);
  }

  /* ---------- dominio por area ---------- */
  function dominioDe(esp, tema, sub){
    const h = historial();
    const ids = banco().filter(q =>
      (!esp || q.esp === esp) && (!tema || q.tema === tema) && (!sub || q.sub === sub)
    ).map(q => q.id);
    const r = h.filter(x => ids.indexOf(x.qid) >= 0);
    if (!r.length) return null;
    // se pondera mas lo reciente
    const ult = r.slice(-40);
    const ok = ult.filter(x => x.ok).length;
    return Math.round((ok / ult.length) * 100);
  }

  function dominioPorEspecialidad(){
    return especialidades().map(e => {
      const dom = dominioDe(e.nombre);
      const resp = historial().filter(h => { const q = porId(h.qid); return q && q.esp === e.nombre; }).length;
      return { nombre:e.nombre, total:e.total, respondidas:resp, dominio:dom };
    }).sort((a, b) => (a.dominio === null ? 999 : a.dominio) - (b.dominio === null ? 999 : b.dominio));
  }

  function mapaConocimiento(){
    const raiz = {};
    banco().forEach(q => {
      raiz[q.esp] = raiz[q.esp] || {};
      raiz[q.esp][q.tema] = raiz[q.esp][q.tema] || {};
      raiz[q.esp][q.tema][q.sub] = (raiz[q.esp][q.tema][q.sub] || 0) + 1;
    });
    return Object.keys(raiz).sort().map(esp => ({
      esp, dominio: dominioDe(esp),
      temas: Object.keys(raiz[esp]).sort().map(tema => ({
        tema, dominio: dominioDe(esp, tema),
        subs: Object.keys(raiz[esp][tema]).sort().map(sub => ({
          sub, total: raiz[esp][tema][sub], dominio: dominioDe(esp, tema, sub)
        }))
      }))
    }));
  }

  /* ---------- estadisticas generales ---------- */
  function resumen(){
    const h = historial();
    const ok = h.filter(x => x.ok).length;
    const d = datos();
    return {
      respondidas: h.length,
      correctas: ok,
      precision: h.length ? Math.round(ok / h.length * 100) : 0,
      racha: d ? d.racha.dias : 0,
      simulacros: d ? d.simulacros.length : 0,
      marcadas: d ? d.marcadas.length : 0,
      pendientes: pendientes().length,
      falladas: falladas().length,
      cobertura: Math.round((Object.keys(d ? d.srs : {}).length / Math.max(1, bancoActivo().length)) * 100),
      disponibles: bancoActivo().length,
      curadas: banco().filter(q => q.fuente !== 'MIR' && !enRevision(q.id)).length,
      extendidas: banco().filter(q => q.fuente === 'MIR' && !enRevision(q.id)).length,
      enriquecidas: banco().filter(q => q.fuente === 'MIR' && q.verificado && !enRevision(q.id)).length,
      conExplicacion: banco().filter(q => !!q.exp && !enRevision(q.id)).length,
      enCuarentena: Object.keys(window.REVISION || {}).length
    };
  }

  function serieDiaria(dias){
    const salida = [];
    for (let i = dias - 1; i >= 0; i--){
      const ini = new Date(); ini.setHours(0,0,0,0); ini.setTime(ini.getTime() - i * DIA);
      const fin = ini.getTime() + DIA;
      const r = historial().filter(x => x.fecha >= ini.getTime() && x.fecha < fin);
      salida.push({
        fecha: ini,
        total: r.length,
        precision: r.length ? Math.round(r.filter(x => x.ok).length / r.length * 100) : null
      });
    }
    return salida;
  }

  function erroresPorTipo(){
    const h = historial().filter(x => !x.ok && x.tipoError);
    const m = {};
    TIPOS_ERROR.forEach(t => m[t.id] = 0);
    h.forEach(x => { if (m[x.tipoError] !== undefined) m[x.tipoError]++; });
    const total = h.length || 1;
    return TIPOS_ERROR.map(t => ({
      id:t.id, nombre:t.nombre, color:t.color,
      n:m[t.id], pct: Math.round(m[t.id] / total * 100)
    })).sort((a, b) => b.n - a.n);
  }

  function patronDeError(qid){
    const q = porId(qid); if (!q) return null;
    const desde = Date.now() - 10 * DIA;
    const similares = historial().filter(x => {
      if (x.ok || x.fecha < desde) return false;
      const oq = porId(x.qid);
      return oq && oq.tema === q.tema;
    });
    return { tema:q.tema, n:similares.length, dominio: dominioDe(q.esp, q.tema) };
  }

  /* ---------- confianza vs conocimiento ---------- */
  function fragilidad(){
    const h = historial().filter(x => x.confianza);
    const acertadasBaja = h.filter(x => x.ok && x.confianza === 'baja').length;
    const falladasAlta  = h.filter(x => !x.ok && x.confianza === 'alta').length;
    return {
      total: h.length,
      fragil: acertadasBaja,
      excesoConfianza: falladasAlta,
      pctFragil: h.length ? Math.round(acertadasBaja / h.length * 100) : 0
    };
  }

  /* ---------- nivel y medallas ---------- */
  function nivel(){
    const n = historial().length;
    let actual = NIVELES[0], siguiente = NIVELES[1];
    for (let i = 0; i < NIVELES.length; i++){
      if (n >= NIVELES[i].min){ actual = NIVELES[i]; siguiente = NIVELES[i+1] || null; }
    }
    return {
      actual, siguiente, respondidas:n,
      faltan: siguiente ? siguiente.min - n : 0,
      pct: siguiente ? Math.round((n - actual.min) / (siguiente.min - actual.min) * 100) : 100
    };
  }

  const MEDALLAS = [
    { id:'primera',  em:'🎯', nombre:'Primera decisión',  desc:'Responde tu primera pregunta', test:r => r.respondidas >= 1 },
    { id:'cien',     em:'💯', nombre:'Cien preguntas',    desc:'Responde 100 preguntas',       test:r => r.respondidas >= 100 },
    { id:'racha7',   em:'🔥', nombre:'Siete días',        desc:'Entrena 7 días seguidos',      test:r => r.racha >= 7 },
    { id:'racha30',  em:'🌋', nombre:'Treinta días',      desc:'Entrena 30 días seguidos',     test:r => r.racha >= 30 },
    { id:'simu1',    em:'📝', nombre:'Primer simulacro',  desc:'Completa un simulacro',        test:r => r.simulacros >= 1 },
    { id:'simu10',   em:'🎓', nombre:'Diez simulacros',   desc:'Completa 10 simulacros',       test:r => r.simulacros >= 10 },
    { id:'precision',em:'🎖️', nombre:'Ochenta por ciento',desc:'Alcanza 80% de precisión',     test:r => r.precision >= 80 && r.respondidas >= 50 },
    { id:'cobertura',em:'🗺️', nombre:'Banco recorrido',   desc:'Ve el 100% del banco',         test:r => r.cobertura >= 100 },
    { id:'clinica',  em:'🩺', nombre:'Decisión clínica',  desc:'Completa un caso clínico',     test:(r,d) => Object.keys(d.casos || {}).length >= 1 },
    { id:'paciente', em:'👤', nombre:'Paciente virtual',  desc:'Atiende un paciente virtual',  test:(r,d) => Object.keys(d.casos || {}).some(k => k.indexOf('PV') === 0) }
  ];

  function medallas(){
    const r = resumen(), d = datos() || {};
    return MEDALLAS.map(m => ({ ...m, ganada: !!m.test(r, d) }));
  }

  function revisarMedallas(){
    const d = datos(); if (!d) return [];
    const nuevas = medallas().filter(m => m.ganada && d.medallas.indexOf(m.id) < 0);
    nuevas.forEach(m => d.medallas.push(m.id));
    if (nuevas.length) Almacen.guardar();
    return nuevas;
  }

  /* ---------- indice de preparacion ---------- */
  function preparacion(){
    const r = resumen();
    const areas = dominioPorEspecialidad().filter(a => a.dominio !== null);
    if (!areas.length) return { pct:0, etiqueta:'Sin datos', fuerzas:[], debilidades:[], detalle:'Responde algunas preguntas para calcular tu preparación.' };

    const promedio = areas.reduce((s, a) => s + a.dominio, 0) / areas.length;
    const cobertura = Math.min(1, r.respondidas / 300);         // volumen de práctica
    const amplitud  = areas.length / Math.max(1, especialidades().length);
    const consistencia = 1 - (desviacion(areas.map(a => a.dominio)) / 100);

    const pct = Math.round(
      promedio * 0.55 + cobertura * 100 * 0.20 + amplitud * 100 * 0.15 + consistencia * 100 * 0.10
    );

    let etiqueta = 'En construcción';
    if (pct >= 85) etiqueta = 'Preparado';
    else if (pct >= 70) etiqueta = 'Casi listo';
    else if (pct >= 50) etiqueta = 'En camino';

    return {
      pct: Math.max(0, Math.min(100, pct)),
      etiqueta,
      fuerzas: areas.filter(a => a.dominio >= 75).slice(0, 4),
      debilidades: areas.filter(a => a.dominio < 65).slice(0, 5),
      detalle: 'Combina tu dominio promedio (55%), el volumen de práctica (20%), cuántas áreas has tocado (15%) y qué tan parejo estás entre ellas (10%).'
    };
  }

  function desviacion(v){
    if (v.length < 2) return 0;
    const m = v.reduce((a, b) => a + b, 0) / v.length;
    return Math.sqrt(v.reduce((s, x) => s + (x - m) * (x - m), 0) / v.length);
  }

  /* ---------- proxima mejor accion ---------- */
  function proximaAccion(){
    const r = resumen();
    if (r.respondidas === 0){
      return { titulo:'Empieza por un diagnóstico rápido', texto:'Haz 10 preguntas mezcladas para que la plataforma sepa dónde estás parado.', accion:'entrenar', param:{ n:10 }, boton:'Empezar ahora' };
    }
    if (r.falladas >= 5){
      return { titulo:'Repasa lo que fallaste', texto:'Tienes ' + r.falladas + ' preguntas falladas esperando. Volver sobre el error es lo que más mueve la aguja.', accion:'entrenar', param:{ soloFalladas:true, n:Math.min(15, r.falladas) }, boton:'Repasar errores' };
    }
    if (r.pendientes >= 10){
      return { titulo:'Tienes repaso vencido', texto:r.pendientes + ' preguntas alcanzaron su fecha de repaso. Si las dejas pasar, se olvidan.', accion:'entrenar', param:{ soloPendientes:true, n:Math.min(20, r.pendientes) }, boton:'Hacer el repaso' };
    }
    const debiles = dominioPorEspecialidad().filter(a => a.dominio !== null && a.dominio < 70);
    if (debiles.length){
      const a = debiles[0];
      return { titulo:'Refuerza ' + a.nombre, texto:'Has respondido ' + a.respondidas + ' preguntas de esta área con ' + a.dominio + '% de precisión. Es tu punto más débil ahora mismo.', accion:'entrenar', param:{ esp:a.nombre, n:12 }, boton:'Entrenar ' + a.nombre };
    }
    if (r.simulacros === 0){
      return { titulo:'Ponte a prueba con un simulacro', texto:'Vas bien en el entrenamiento. Toca medirte con reloj y sin ayudas.', accion:'simulacro', param:{}, boton:'Iniciar simulacro' };
    }
    return { titulo:'Sube la dificultad', texto:'Dominas lo básico. Entra al modo desafío con casos difíciles y contra reloj.', accion:'desafio', param:{}, boton:'Ir al desafío' };
  }

  /* ---------- plan de 7 dias ---------- */
  function generarPlan(){
    const areas = dominioPorEspecialidad();
    const conDatos = areas.filter(a => a.dominio !== null);
    const sinDatos = areas.filter(a => a.dominio === null);
    const orden = conDatos.concat(sinDatos);
    const plan = [];
    for (let i = 0; i < 7; i++){
      const a = orden[i % Math.max(1, orden.length)];
      let tarea;
      if (i === 5) tarea = { tipo:'simulacro', titulo:'Simulacro completo', detalle:'100 preguntas cronometradas, sin ayudas.' };
      else if (i === 6) tarea = { tipo:'errores', titulo:'Repaso de errores de la semana', detalle:'Vuelve sobre todo lo que fallaste estos días.' };
      else if (i === 4) tarea = { tipo:'clinica', titulo:'Casos clínicos', detalle:'Un caso interactivo y un paciente virtual.' };
      else tarea = { tipo:'entrenar', esp:a ? a.nombre : null, titulo:a ? a.nombre : 'Mezcla general', detalle:'20 preguntas con explicación completa.' };
      plan.push({ dia:i + 1, ...tarea, hecho:false });
    }
    const d = datos();
    d.plan = { creado:Date.now(), dias:plan };
    Almacen.guardar();
    return d.plan;
  }

  /* ---------- simulacros ---------- */
  function guardarSimulacro(res){
    const d = datos(); if (!d) return;
    d.simulacros.push(res);
    Almacen.guardar();
  }

  /* ---------- marcadas ---------- */
  function alternarMarcada(qid){
    const d = datos(); if (!d) return false;
    const i = d.marcadas.indexOf(qid);
    if (i >= 0) d.marcadas.splice(i, 1); else d.marcadas.push(qid);
    Almacen.guardar();
    return i < 0;
  }
  function estaMarcada(qid){ const d = datos(); return d && d.marcadas.indexOf(qid) >= 0; }

  /* ---------- "defiende tu respuesta" ---------- */
  function analizarDefensa(texto, q){
    const t = (texto || '').toLowerCase();
    if (t.trim().length < 12) return { nivel:'corto', msg:'Escribe un poco más: el objetivo es que pongas en palabras el razonamiento, no solo la conclusión.' };
    const clave = (q.clave || '').toLowerCase();
    const palabras = clave.split(/[\s,.;:()]+/).filter(w => w.length > 4);
    const aciertos = palabras.filter(w => t.indexOf(w) >= 0).length;
    const razonamiento = /porque|ya que|debido|dado que|indica|sugiere|descarta|apoya|orienta|permite/.test(t);
    if (aciertos >= 2 && razonamiento)
      return { nivel:'solido', msg:'Tu argumento se apoya en el dato que efectivamente decide el caso, y explicas la relación entre el dato y la conclusión. Eso es razonamiento clínico.' };
    if (aciertos >= 1)
      return { nivel:'parcial', msg:'Mencionas el dato correcto, pero el argumento se queda corto: falta decir por qué ese dato inclina la decisión en esa dirección.' };
    if (razonamiento)
      return { nivel:'estructura', msg:'La estructura de tu argumento está bien, pero se apoya en un dato que no es el determinante del caso. Revisa el dato clave.' };
    return { nivel:'debil', msg:'Tu respuesta describe el caso, pero no argumenta. Pregúntate: ¿qué dato concreto me obliga a elegir esta opción y a descartar las otras?' };
  }

  return {
    banco, bancoActivo, enRevision, aplicarExplicaciones, porId, especialidades, temas,
    registrar, seleccionar, pendientes, noVistas, falladas, estadoPregunta,
    dominioDe, dominioPorEspecialidad, mapaConocimiento,
    resumen, serieDiaria, erroresPorTipo, patronDeError, fragilidad,
    nivel, medallas, revisarMedallas, preparacion, proximaAccion, generarPlan,
    guardarSimulacro, alternarMarcada, estaMarcada, analizarDefensa,
    TIPOS_ERROR, NIVELES, DISTRIBUCION, programaActivo, distribucion, cuatrimestreActivo
  };
})();

/* ============================================================
   MOTOR DE TARJETAS
   Repetición espaciada propia, separada de la de preguntas: una
   tarjeta se repasa mucho más a menudo que una pregunta.
   ============================================================ */
window.Tarjetas = (function () {

  const DIA = 86400000;
  // intervalos en dias, mas cortos que los del banco de preguntas
  const PASOS = [0, 0.02, 1, 3, 7, 15, 30, 60];

  function datos(){ return Almacen.datos(); }

  /* ---------- construccion del mazo ---------- */

  /* Ademas del mazo curado, cada pregunta ya explicada aporta dos
     tarjetas: su dato clave y su trampa. Se generan en memoria, no
     se guardan en disco. */
  function derivadas(){
    const salida = [];
    Motor.bancoActivo().forEach(q => {
      if (!q.exp) return;                       // solo las explicadas
      if (q.clave){
        salida.push({
          id: 'D-' + q.id + '-c', esp: q.esp, tema: q.tema, origen: q.id,
          a: '¿Cuál es el dato que decide en este caso?\n\n« ' + (q.sub || q.tema) + ' »',
          b: q.clave, mas: q.obj || '', tipo: 'clave'
        });
      }
      if (q.trampa){
        salida.push({
          id: 'D-' + q.id + '-t', esp: q.esp, tema: q.tema, origen: q.id,
          a: '¿Cuál es el error frecuente en este tema?\n\n« ' + (q.sub || q.tema) + ' »',
          b: q.trampa, mas: '', tipo: 'trampa'
        });
      }
    });
    return salida;
  }

  /* El mazo tambien es por programa: las tarjetas de UNIRMIA llevan
     `programa:'unirm'` y las de ENURMIA no llevan nada, igual que en el
     banco de preguntas. Las que genera el estudiante de su propio material
     llevan el programa en el que estaba cuando las creo. */
  let cacheMazo = null, cachePrograma = null;
  function mazo(){
    const prog = Motor.programaActivo();
    if (cacheMazo && cachePrograma === prog) return cacheMazo;
    cachePrograma = prog;
    const propias = (window.TARJETAS || []).filter(t =>
      prog === 'unirm' ? t.programa === 'unirm' : t.programa !== 'unirm');
    cacheMazo = propias.concat(derivadas());
    return cacheMazo;
  }
  function invalidar(){ cacheMazo = null; cachePrograma = null; }
  function porId(id){ return mazo().find(t => t.id === id); }

  /* ---------- estado ---------- */
  function estado(id){
    const d = datos();
    return (d && d.srsTarjetas[id]) || null;
  }

  function vencidas(){
    const ahora = Date.now();
    return mazo().filter(t => {
      const s = estado(t.id);
      return s && s.prox <= ahora;
    });
  }
  function nuevas(){
    return mazo().filter(t => !estado(t.id));
  }

  /* ---------- calificar ---------- */
  /* 1 otra vez · 2 difícil · 3 bien · 4 fácil */
  function calificar(id, nota){
    const d = datos(); if (!d) return;
    const s = d.srsTarjetas[id] || { paso:0, vistas:0, fallos:0, prox:0 };
    s.vistas++;
    if (nota === 1){ s.paso = 1; s.fallos++; }
    else if (nota === 2) s.paso = Math.max(1, s.paso - 1);
    else if (nota === 3) s.paso = Math.min(PASOS.length - 1, s.paso + 1);
    else s.paso = Math.min(PASOS.length - 1, s.paso + 2);
    s.prox = Date.now() + Math.round(PASOS[s.paso] * DIA);
    s.ultima = Date.now();
    d.srsTarjetas[id] = s;
    d.tarjetas.vistas++;
    Almacen.tocarRacha();
    Almacen.guardar();
    return s;
  }

  /* ---------- armar una sesion ---------- */
  function sesion(op){
    op = op || {};
    const n = op.n || 20;
    let fuente = mazo();

    if (op.esp)  fuente = fuente.filter(t => t.esp === op.esp);
    if (op.tema) fuente = fuente.filter(t => t.tema === op.tema);

    if (op.soloFalladas){
      // tarjetas nacidas de preguntas que el estudiante falló
      const fallos = Motor.falladas().map(q => q.id);
      fuente = fuente.filter(t => t.origen && fallos.indexOf(t.origen) >= 0);
    }
    if (op.soloCuradas)  fuente = fuente.filter(t => !t.origen);
    if (op.soloDerivadas) fuente = fuente.filter(t => !!t.origen);

    const ahora = Date.now();
    const debe  = fuente.filter(t => { const s = estado(t.id); return s && s.prox <= ahora; });
    const sinVer = fuente.filter(t => !estado(t.id));

    // primero lo vencido, después material nuevo
    const salida = debe.sort((a, b) => estado(a.id).prox - estado(b.id).prox).slice(0, n);
    if (salida.length < n){
      salida.push.apply(salida, barajar(sinVer).slice(0, n - salida.length));
    }
    // si aún falta, se repasa lo ya sabido
    if (salida.length < n){
      const ids = salida.map(t => t.id);
      const resto = fuente.filter(t => ids.indexOf(t.id) < 0);
      salida.push.apply(salida, barajar(resto).slice(0, n - salida.length));
    }
    return barajar(salida);
  }

  function barajar(a){
    const c = a.slice();
    for (let i = c.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      const t = c[i]; c[i] = c[j]; c[j] = t;
    }
    return c;
  }

  /* ---------- estadisticas ---------- */
  function resumen(){
    const d = datos();
    const total = mazo().length;
    const vistas = d ? Object.keys(d.srsTarjetas).length : 0;
    const dominadas = d ? Object.values(d.srsTarjetas).filter(s => s.paso >= 5).length : 0;
    return {
      total,
      curadas: (window.TARJETAS || []).length,
      derivadas: total - (window.TARJETAS || []).length,
      vistas,
      nuevas: total - vistas,
      vencidas: vencidas().length,
      dominadas,
      repasos: d ? d.tarjetas.vistas : 0,
      pct: total ? Math.round(vistas / total * 100) : 0
    };
  }

  function porEspecialidad(){
    const m = {};
    mazo().forEach(t => {
      m[t.esp] = m[t.esp] || { nombre:t.esp, total:0, vistas:0, vencidas:0 };
      m[t.esp].total++;
      const s = estado(t.id);
      if (s){ m[t.esp].vistas++; if (s.prox <= Date.now()) m[t.esp].vencidas++; }
    });
    return Object.values(m).sort((a, b) => b.total - a.total);
  }

  return { mazo, porId, sesion, calificar, estado, vencidas, nuevas,
           resumen, porEspecialidad, invalidar };
})();
