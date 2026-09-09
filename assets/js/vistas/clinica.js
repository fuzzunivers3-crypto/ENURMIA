/* ============================================================
   CLINICA — casos con arbol de decisiones y paciente virtual
   ============================================================ */
window.Clinica = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  /* ============================================================
     MENU
     ============================================================ */
  function menu(){
    const d = Almacen.datos();

    const casos = CASOS.map(c => {
      const hecho = d.casos[c.id];
      return '<button class="card card--flota" data-caso="' + c.id + '" style="text-align:left;cursor:pointer;font:inherit;border:1px solid var(--linea)">' +
        '<div class="row-b" style="margin-bottom:10px">' +
          '<span class="chip chip--carbon">' + esc(c.esp) + '</span>' +
          (hecho ? '<span class="chip chip--verde">' + esc(hecho.nivel || 'Completado') + '</span>' : UI.chipDif(c.dif)) +
        '</div>' +
        '<b style="display:block;font-family:var(--display);font-size:19px;margin-bottom:6px">' + esc(c.titulo) + '</b>' +
        '<small class="muted" style="font-size:13px">' + esc(c.resumen) + '</small></button>';
    }).join('');

    const pacientes = PACIENTES.map(p => {
      const hecho = d.casos[p.id];
      return '<button class="card card--flota" data-pv="' + p.id + '" style="text-align:left;cursor:pointer;font:inherit;border:1px solid var(--linea)">' +
        '<div class="row-b" style="margin-bottom:10px">' +
          '<span class="chip chip--sangria">Paciente virtual</span>' +
          (hecho ? '<span class="chip chip--verde">' + hecho.puntaje + '/100</span>' : UI.chipDif(p.dif)) +
        '</div>' +
        '<b style="display:block;font-family:var(--display);font-size:19px;margin-bottom:6px">' + esc(p.titulo) + '</b>' +
        '<small class="muted" style="font-size:13px">' + p.edad + ' años · ' + esc(p.sexo) + ' · ' + esc(p.esp) + '</small></button>';
    }).join('');

    V().innerHTML =
    '<div class="escalona">' +
      '<div class="encabezado"><p class="eyebrow">Modo clínica</p>' +
      '<h1>Decidir, no elegir entre cuatro letras</h1>' +
      '<p>Dos formatos: casos donde cada decisión cambia la historia, y pacientes virtuales a los que tienes que interrogar y examinar tú mismo.</p></div>' +

      '<div class="card card--carbon" style="margin-bottom:20px">' +
        '<div class="row-b"><div><span class="eyebrow" style="color:rgba(255,255,255,.45)">Cómo funciona</span>' +
        '<h3 style="font-size:21px;margin-top:6px">La historia continúa según lo que hagas</h3>' +
        '<p style="color:rgba(255,255,255,.7);font-size:14px;max-width:560px;margin-top:8px">No hay una respuesta correcta que marcar: hay decisiones que abren caminos. Al final recibes el análisis de tu razonamiento, no solo un puntaje.</p></div>' +
        '<span style="font-size:38px">🩺</span></div>' +
      '</div>' +

      '<h2 style="font-size:22px;margin-bottom:14px">Casos interactivos</h2>' +
      '<div class="rejilla rejilla--3" style="margin-bottom:28px">' + casos + '</div>' +

      '<h2 style="font-size:22px;margin-bottom:6px">Pacientes virtuales</h2>' +
      '<p class="muted" style="margin-bottom:14px;font-size:14px">Le preguntas lo que quieras, lo examinas y pides los estudios que consideres. Al final se evalúa qué preguntaste, qué te faltó y qué pediste de más.</p>' +
      '<div class="rejilla rejilla--3">' + pacientes + '</div>' +
    '</div>';

    UI.$$('[data-caso]').forEach(b => b.onclick = () => abrirCaso(b.dataset.caso));
    UI.$$('[data-pv]').forEach(b => b.onclick = () => abrirPaciente(b.dataset.pv));
  }

  /* ============================================================
     CASO CON ARBOL DE DECISIONES
     ============================================================ */
  let C = null;

  function abrirCaso(id){
    const caso = CASOS.find(c => c.id === id);
    C = { caso, nodo:'inicio', puntos:0, ruta:[], inicio:Date.now() };
    pintarCaso();
  }

  function pintarCaso(){
    const n = C.caso.nodos[C.nodo];
    if (n.final) return finalCaso(n);

    const vit = Object.keys(C.caso.vitales).map(k =>
      '<div class="vital"><span>' + esc(k) + '</span><b>' + esc(C.caso.vitales[k]) + '</b></div>').join('');

    const historial = C.ruta.map(p =>
      '<div class="dialogo dialogo--medico"><span class="dialogo__quien">Tu decisión</span>' + esc(p.txt) + '</div>' +
      (p.retro ? '<div class="dialogo dialogo--hallazgo"><span class="dialogo__quien">Devolución</span>' + esc(p.retro) + '</div>' : '')).join('');

    V().innerHTML =
    '<div class="sesion__barra"><button class="icono" id="btnSalirCaso">✕</button>' +
      '<b class="grow" style="font-size:14px">' + esc(C.caso.titulo) + '</b>' +
      '<span class="chip chip--carbon">' + esc(C.caso.esp) + '</span></div>' +

    '<div class="consulta">' +
      '<div class="expediente">' +
        '<div class="expediente__cabeza">' +
          '<span class="avatar">' + (C.caso.paciente.sexo === 'Femenino' ? '♀' : '♂') + '</span>' +
          '<div class="grow"><b style="font-size:16px">' + C.caso.paciente.edad + ' años · ' + esc(C.caso.paciente.sexo) + '</b>' +
          '<small style="display:block;opacity:.65;font-size:12.5px">' + esc(C.caso.paciente.motivo) + '</small></div>' +
        '</div>' +
        '<div class="expediente__cuerpo" id="cuerpoCaso">' +
          historial +
          '<div class="dialogo dialogo--paciente"><span class="dialogo__quien">Situación</span>' + esc(n.texto) + '</div>' +
        '</div>' +
      '</div>' +

      '<div style="display:flex;flex-direction:column;gap:16px">' +
        '<div class="card"><span class="eyebrow">Constantes vitales</span>' +
          '<div class="vitales" style="margin-top:12px">' + vit + '</div></div>' +
        '<div class="card"><span class="eyebrow">¿Qué haces?</span>' +
          '<div class="acciones-clinicas" style="margin-top:12px">' +
            n.opciones.map((o, k) => '<button class="accion-clinica" data-op="' + k + '">' +
              '<span class="em">→</span><span class="grow">' + esc(o.txt) + '</span></button>').join('') +
          '</div></div>' +
      '</div>' +
    '</div>';

    document.getElementById('btnSalirCaso').onclick = () => App.ir('clinica');
    const cuerpo = document.getElementById('cuerpoCaso');
    cuerpo.scrollTop = cuerpo.scrollHeight;

    UI.$$('[data-op]').forEach(b => b.onclick = () => {
      const o = n.opciones[+b.dataset.op];
      C.puntos += o.pts || 0;
      C.ruta.push({ txt:o.txt, retro:o.retro });
      if (o.retro) UI.tostada(o.retro, (o.pts || 0) > 0 ? 'ok' : (o.pts || 0) < 0 ? 'mal' : '');
      C.nodo = o.sig;
      pintarCaso();
    });
  }

  function finalCaso(n){
    const max = 85;
    const pct = Math.max(0, Math.min(100, Math.round((C.puntos + 30) / (max + 30) * 100)));
    const d = Almacen.datos();
    d.casos[C.caso.id] = { nivel:n.nivel, puntos:C.puntos, pct, fecha:Date.now() };
    Almacen.guardar();
    const nuevas = Motor.revisarMedallas();

    const color = n.nivel === 'excelente' ? 'card--verde' : n.nivel === 'grave' ? 'card--rosa' : 'card--yodo';
    const etiqueta = { excelente:'Manejo excelente', aceptable:'Manejo aceptable', mejorable:'Manejo mejorable', grave:'Manejo con daño evitable' }[n.nivel];

    V().innerHTML =
    '<div class="sesion escalona">' +
      '<div class="encabezado"><p class="eyebrow">' + esc(C.caso.titulo) + '</p><h1>' + esc(etiqueta) + '</h1></div>' +

      '<div class="card ' + color + '" style="margin-bottom:16px">' +
        '<span class="eyebrow">Desenlace</span><p style="margin-top:8px;font-size:15px;line-height:1.65">' + esc(n.texto) + '</p></div>' +

      '<div class="rejilla rejilla--3" style="margin-bottom:16px">' +
        '<div class="metrica"><b>' + pct + '%</b><span>Calidad de las decisiones</span></div>' +
        '<div class="metrica"><b>' + C.ruta.length + '</b><span>Decisiones tomadas</span></div>' +
        '<div class="metrica"><b>' + UI.reloj(Date.now() - C.inicio) + '</b><span>Tiempo</span></div>' +
      '</div>' +

      '<div class="bloque bloque--clave"><span class="eyebrow">Diagnóstico</span><p>' + esc(n.dx) + '</p></div>' +
      '<div class="bloque bloque--porque"><span class="eyebrow">Lo que este caso enseña</span><p>' + esc(n.ensena) + '</p></div>' +

      '<div class="card" style="margin:16px 0"><span class="eyebrow">Tu recorrido</span>' +
        '<div style="display:flex;flex-direction:column;gap:9px;margin-top:14px">' +
          C.ruta.map((p, i) => '<div class="descarte"><b>' + (i + 1) + '</b><span><b style="display:block">' + esc(p.txt) + '</b>' +
          (p.retro ? '<small class="muted">' + esc(p.retro) + '</small>' : '') + '</span></div>').join('') +
        '</div></div>' +

      (nuevas.length ? '<div class="card card--rosa" style="margin-bottom:16px"><span class="eyebrow">Nuevas medallas</span><p style="margin-top:6px">' +
        nuevas.map(m => m.em + ' ' + esc(m.nombre)).join(' · ') + '</p></div>' : '') +

      '<div class="row wrap" style="gap:9px">' +
        '<button class="btn" id="btnOtraVez">Repetir el caso</button>' +
        '<button class="btn btn--fantasma" id="btnOtroCaso">Otro caso</button>' +
        '<button class="btn btn--carbon" id="btnCasaCaso">Volver al inicio</button>' +
      '</div>' +
    '</div>';

    document.getElementById('btnOtraVez').onclick = () => abrirCaso(C.caso.id);
    document.getElementById('btnOtroCaso').onclick = () => App.ir('clinica');
    document.getElementById('btnCasaCaso').onclick = () => App.ir('inicio');
  }

  /* ============================================================
     PACIENTE VIRTUAL
     ============================================================ */
  let P = null;

  function abrirPaciente(id){
    const pac = PACIENTES.find(x => x.id === id);
    P = { pac, dialogo:[], preguntadas:[], examinadas:[], estudios:[], inicio:Date.now(), fallos:0 };
    P.dialogo.push({ quien:'paciente', txt:pac.apertura });
    pintarPaciente();
  }

  function pintarPaciente(){
    const pac = P.pac;
    const vit = Object.keys(pac.vitales).map(k =>
      '<div class="vital"><span>' + esc(k) + '</span><b>' + esc(pac.vitales[k]) + '</b></div>').join('');

    const burbujas = P.dialogo.map(m => {
      const cls = m.quien === 'medico' ? 'dialogo--medico'
        : m.quien === 'hallazgo' ? 'dialogo--hallazgo'
        : m.quien === 'sistema' ? 'dialogo--sistema' : 'dialogo--paciente';
      const quien = m.quien === 'medico' ? 'Tú' : m.quien === 'hallazgo' ? 'Hallazgo' :
                    m.quien === 'sistema' ? '' : 'Paciente';
      return '<div class="dialogo ' + cls + '">' + (quien ? '<span class="dialogo__quien">' + quien + '</span>' : '') + esc(m.txt) + '</div>';
    }).join('');

    const estudios = pac.estudios.map(e =>
      '<button class="accion-clinica' + (P.estudios.indexOf(e.id) >= 0 ? ' usada' : '') + '" data-est="' + e.id + '">' +
      '<span class="em">🧪</span><span class="grow">' + esc(e.nombre) + '</span></button>').join('');

    V().innerHTML =
    '<div class="sesion__barra"><button class="icono" id="btnSalirPV">✕</button>' +
      '<b class="grow" style="font-size:14px">' + esc(pac.titulo) + '</b>' +
      '<span class="mono" style="font-size:12.5px">' + P.preguntadas.length + ' preguntas · ' +
      P.examinadas.length + ' exploraciones · ' + P.estudios.length + ' estudios</span></div>' +

    '<div class="consulta">' +
      '<div class="expediente">' +
        '<div class="expediente__cabeza">' +
          '<span class="avatar">' + (pac.sexo === 'Femenino' ? '♀' : '♂') + '</span>' +
          '<div class="grow"><b style="font-size:16px">' + pac.edad + ' años · ' + esc(pac.sexo) + '</b>' +
          '<small style="display:block;opacity:.65;font-size:12.5px">Consulta espontánea</small></div>' +
          '<span class="chip chip--carbon" style="background:rgba(255,255,255,.14)">' + esc(pac.esp) + '</span>' +
        '</div>' +
        '<div class="expediente__cuerpo" id="cuerpoPV">' + burbujas + '</div>' +
        '<div class="expediente__pie">' +
          '<input id="entradaPV" class="grow" placeholder="Pregúntale algo, o escribe qué quieres examinar…" ' +
            'style="border:1.5px solid var(--linea);border-radius:14px;padding:11px 14px;outline:none">' +
          '<button class="btn btn--sm" id="btnPreguntar">Preguntar</button>' +
          '<button class="btn btn--sm btn--fantasma" id="btnExaminar">Examinar</button>' +
        '</div>' +
      '</div>' +

      '<div style="display:flex;flex-direction:column;gap:16px">' +
        '<div class="card"><span class="eyebrow">Constantes vitales</span>' +
          '<div class="vitales" style="margin-top:12px">' + vit + '</div></div>' +
        '<div class="card"><span class="eyebrow">Estudios disponibles</span>' +
          '<p class="muted" style="font-size:12.5px;margin:6px 0 12px">Pedir de más también se evalúa.</p>' +
          '<div class="acciones-clinicas">' + estudios + '</div></div>' +
        '<button class="btn btn--ancho btn--lg" id="btnCerrarCaso">Estoy listo para diagnosticar</button>' +
      '</div>' +
    '</div>';

    document.getElementById('btnSalirPV').onclick = () => App.ir('clinica');
    const cuerpo = document.getElementById('cuerpoPV');
    cuerpo.scrollTop = cuerpo.scrollHeight;

    const entrada = document.getElementById('entradaPV');
    entrada.focus();
    entrada.onkeydown = e => { if (e.key === 'Enter') preguntar(); };
    document.getElementById('btnPreguntar').onclick = preguntar;
    document.getElementById('btnExaminar').onclick = () => preguntar(true);
    document.getElementById('btnCerrarCaso').onclick = cerrarCaso;
    UI.$$('[data-est]').forEach(b => b.onclick = () => pedirEstudio(b.dataset.est));
  }

  function normalizar(s){
    return (s || '').toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[¿?¡!.,;:]/g, ' ');
  }

  function buscar(texto, lista){
    const t = normalizar(texto);
    let mejor = null, mejorN = 0;
    lista.forEach(item => {
      let n = 0;
      item.claves.forEach(c => { if (t.indexOf(normalizar(c)) >= 0) n++; });
      if (n > mejorN){ mejorN = n; mejor = item; }
    });
    return mejor;
  }

  function preguntar(esExamen){
    const inp = document.getElementById('entradaPV');
    const txt = inp.value.trim();
    if (!txt) return;
    P.dialogo.push({ quien:'medico', txt });

    const lista = esExamen ? P.pac.examen : P.pac.interrogatorio;
    const otra = esExamen ? P.pac.interrogatorio : P.pac.examen;
    let hit = buscar(txt, lista);
    let enExamen = !!esExamen;
    if (!hit){ hit = buscar(txt, otra); enExamen = !esExamen; }

    if (hit){
      const registro = enExamen ? P.examinadas : P.preguntadas;
      if (registro.indexOf(hit.r) < 0) registro.push(hit.r);
      P.dialogo.push({ quien: enExamen ? 'hallazgo' : 'paciente', txt: hit.r });
    } else {
      P.fallos++;
      P.dialogo.push({ quien:'paciente', txt: esExamen
        ? 'Sin hallazgos relevantes en esa exploración.'
        : 'No entendí bien, doctor. ¿Me lo puede preguntar de otra manera?' });
      if (P.fallos === 3){
        P.dialogo.push({ quien:'sistema', txt:'Prueba con frases simples: "desde cuándo", "se irradia", "antecedentes", "quiero auscultar los pulmones".' });
      }
    }
    inp.value = '';
    pintarPaciente();
  }

  function pedirEstudio(id){
    const e = P.pac.estudios.find(x => x.id === id);
    if (!e) return;
    if (P.estudios.indexOf(id) < 0) P.estudios.push(id);
    P.dialogo.push({ quien:'medico', txt:'Solicito: ' + e.nombre });
    P.dialogo.push({ quien:'hallazgo', txt:e.r });
    pintarPaciente();
  }

  function cerrarCaso(){
    const pac = P.pac;
    UI.modal('<h3 style="font-size:22px;margin-bottom:6px">Cierra el caso</h3>' +
      '<p class="muted" style="margin-bottom:18px">Compromete tu diagnóstico y tu conducta inicial.</p>' +
      '<span class="eyebrow">Diagnóstico más probable</span>' +
      '<div class="dx-lista" style="margin:10px 0 20px">' +
        pac.dxOpciones.map((d, k) => '<button class="dx" data-dxf="' + k + '"><span class="dx__marca">✓</span><span>' + esc(d) + '</span></button>').join('') +
      '</div>' +
      '<span class="eyebrow">Conducta inicial</span>' +
      '<div class="dx-lista" style="margin:10px 0 20px">' +
        pac.tratamientoOpciones.map((d, k) => '<button class="dx" data-tx="' + k + '"><span class="dx__marca">✓</span><span>' + esc(d) + '</span></button>').join('') +
      '</div>' +
      '<button class="btn btn--ancho btn--lg" id="btnEvaluar">Ver mi evaluación</button>');

    let dxSel = null, txSel = null;
    UI.$$('[data-dxf]').forEach(b => b.onclick = () => {
      UI.$$('[data-dxf]').forEach(x => x.classList.remove('on'));
      b.classList.add('on'); dxSel = pac.dxOpciones[+b.dataset.dxf];
    });
    UI.$$('[data-tx]').forEach(b => b.onclick = () => {
      UI.$$('[data-tx]').forEach(x => x.classList.remove('on'));
      b.classList.add('on'); txSel = pac.tratamientoOpciones[+b.dataset.tx];
    });
    document.getElementById('btnEvaluar').onclick = () => {
      if (!dxSel || !txSel) return UI.tostada('Elige diagnóstico y conducta', 'mal');
      document.querySelector('.velo').remove();
      evaluar(dxSel, txSel);
    };
  }

  function evaluar(dxSel, txSel){
    const pac = P.pac;

    const claveInt = pac.interrogatorio.filter(x => x.valor === 'clave');
    const claveEx  = pac.examen.filter(x => x.valor === 'clave');
    const claveEst = pac.estudios.filter(x => x.valor === 'clave');

    const hechasInt = claveInt.filter(x => P.preguntadas.indexOf(x.r) >= 0).length;
    const hechasEx  = claveEx.filter(x => P.examinadas.indexOf(x.r) >= 0).length;
    const hechasEst = claveEst.filter(x => P.estudios.indexOf(x.id) >= 0).length;
    const innecesarios = pac.estudios.filter(x => x.valor === 'innecesario' && P.estudios.indexOf(x.id) >= 0);

    const nHistoria = Math.round(((hechasInt / Math.max(1, claveInt.length)) * 0.65 +
                                  (hechasEx / Math.max(1, claveEx.length)) * 0.35) * 100);
    const nEstudios = Math.max(0, Math.round((hechasEst / Math.max(1, claveEst.length)) * 100 - innecesarios.length * 18));
    const nRecursos = Math.max(0, 100 - innecesarios.length * 25 - Math.max(0, P.estudios.length - 5) * 6);
    const dxOk = dxSel === pac.dxCorrecto;
    const txOk = txSel === pac.tratamiento;
    const nRazon = Math.round(nHistoria * 0.35 + nEstudios * 0.20 + (dxOk ? 30 : 0) + (txOk ? 15 : 0));

    const d = Almacen.datos();
    const previo = d.casos[pac.id];
    if (!previo || previo.puntaje < nRazon) d.casos[pac.id] = { puntaje:nRazon, dxOk, fecha:Date.now() };
    Almacen.guardar();
    const nuevas = Motor.revisarMedallas();

    const faltaron = claveInt.filter(x => P.preguntadas.indexOf(x.r) < 0)
      .concat(claveEx.filter(x => P.examinadas.indexOf(x.r) < 0));

    V().innerHTML =
    '<div class="sesion escalona">' +
      '<div class="encabezado"><p class="eyebrow">Paciente virtual · ' + esc(pac.titulo) + '</p>' +
      '<h1>Nivel de razonamiento clínico: ' + nRazon + '/100</h1>' +
      '<p>' + (dxOk ? 'Llegaste al diagnóstico correcto.' : 'El diagnóstico no era ese.') + ' Lo que más pesa aquí no es acertar, sino cómo lo obtuviste.</p></div>' +

      '<div class="rejilla rejilla--4" style="margin-bottom:18px">' +
        '<div class="metrica"><b>' + nHistoria + '</b><span>Historia clínica</span></div>' +
        '<div class="metrica"><b>' + nEstudios + '</b><span>Selección de estudios</span></div>' +
        '<div class="metrica"><b>' + nRecursos + '</b><span>Uso de recursos</span></div>' +
        '<div class="metrica"><b>' + (dxOk ? '✓' : '✕') + '</b><span>Diagnóstico</span></div>' +
      '</div>' +

      '<div class="veredicto veredicto--' + (dxOk ? 'ok' : 'mal') + '" style="margin-bottom:14px">' +
        '<span class="veredicto__sello">' + (dxOk ? '✓' : '✕') + '</span>' +
        '<span><b>' + esc(pac.dxCorrecto) + '</b><small>Tu diagnóstico: ' + esc(dxSel) + '</small></span></div>' +

      '<div class="bloque ' + (txOk ? 'bloque--porque' : '') + '"><span class="eyebrow">Conducta inicial correcta</span>' +
        '<p>' + esc(pac.tratamiento) + (txOk ? '' : ' · Tú elegiste: ' + esc(txSel)) + '</p></div>' +

      (faltaron.length ? '<div class="bloque bloque--clave"><span class="eyebrow">Lo que debiste preguntar o examinar</span>' +
        '<div class="descartes" style="margin-top:8px">' + faltaron.map(f =>
        '<div class="descarte"><b>?</b><span>' + esc(f.r) + '</span></div>').join('') + '</div></div>'
        : '<div class="bloque bloque--porque"><span class="eyebrow">Historia clínica</span><p>No se te escapó ningún dato clave. Excelente anamnesis.</p></div>') +

      (innecesarios.length ? '<div class="bloque bloque--trampa"><span class="eyebrow">Estudios innecesarios</span>' +
        '<p>' + innecesarios.map(x => esc(x.nombre)).join(' · ') + '. En la vida real cada estudio de más cuesta dinero, tiempo y a veces genera hallazgos que llevan a más estudios.</p></div>' : '') +

      '<div class="bloque bloque--fuente"><span class="eyebrow">Preguntas que debiste hacer, en orden</span>' +
        '<p>' + pac.debiste.map(esc).join(' → ') + '</p></div>' +

      '<div class="bloque bloque--porque"><span class="eyebrow">Lo que este paciente enseña</span><p>' + esc(pac.ensena) + '</p></div>' +

      (nuevas.length ? '<div class="card card--rosa" style="margin:16px 0"><span class="eyebrow">Nuevas medallas</span><p style="margin-top:6px">' +
        nuevas.map(m => m.em + ' ' + esc(m.nombre)).join(' · ') + '</p></div>' : '') +

      '<div class="row wrap" style="gap:9px;margin-top:18px">' +
        '<button class="btn" id="btnRepetirPV">Atender de nuevo</button>' +
        '<button class="btn btn--fantasma" id="btnOtroPV">Otro paciente</button>' +
        '<button class="btn btn--carbon" id="btnCasaPV">Volver al inicio</button>' +
      '</div>' +
    '</div>';

    document.getElementById('btnRepetirPV').onclick = () => abrirPaciente(pac.id);
    document.getElementById('btnOtroPV').onclick = () => App.ir('clinica');
    document.getElementById('btnCasaPV').onclick = () => App.ir('inicio');
  }

  return { menu, abrirCaso, abrirPaciente };
})();
