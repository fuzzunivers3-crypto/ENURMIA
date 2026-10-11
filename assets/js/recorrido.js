/* ============================================================
   RECORRIDO — "para que sirve cada cosa" de cada seccion
   La primera vez que el estudiante entra a una seccion, Arturo (R2D2
   en UNIRMIA) ilumina sus partes una por una y explica para que sirve
   cada una. El boton "?" de la barra de arriba lo vuelve a abrir
   cuando quiera, y en Ajustes se apaga o se reinicia.

   Cada paso dice QUE iluminar con un selector (dentro de #vista, o en
   toda la pagina si empieza por "doc:") y, si hace falta, un trozo de
   texto que el elemento debe contener ("con"). Si un paso no encuentra
   su elemento -una cuenta sin datos, una pantalla que cambia- se salta
   solo: la guia nunca apunta a la nada.

   {A} = Arturo o R2D2, {P} = ENURMIA o UNIRMIA, {E} = el examen.
   ============================================================ */
window.Recorrido = (function () {

  const PASOS = {
    inicio: [
      { t: 'Inicio, tu punto de partida', x: 'Cada vez que entras empiezas aquí. En un minuto te enseño qué hay en esta pantalla para que nunca te pierdas.' },
      { en: 'doc:.rail', t: 'El menú', x: 'Aquí están todas las secciones de {P}. Toca cualquiera para ir a ella.' },
      { en: 'doc:.movil', t: 'El menú', x: 'Abajo tienes las secciones que más se usan. El botón ☰ abre todas las demás.' },
      { en: '.card', con: 'Antes de empezar', solo: 'unirm', t: 'Elige tus materias', x: 'Marca las asignaturas que estás cursando. Eso decide lo que ves en Temario, Entrenar, Simulacro y Casos.' },
      { en: '.encabezado', t: 'Tu resumen del día', x: 'Tu saludo, cuántas preguntas llevas y tus días seguidos estudiando.' },
      { en: '.rejilla--4', t: 'Tus números de un vistazo', x: 'Tu preparación, las preguntas que has respondido, tu precisión (cuántas aciertas de cada 100) y tu racha de días seguidos.' },
      { en: '.rejilla--tablero > :nth-child(1)', con: 'próxima mejor acción', t: 'Qué te conviene hacer ahora', x: '{P} mira tus datos y te propone lo que más te ayuda hoy, con un botón para empezar. Debajo ves tu dominio en cada especialidad, de la más floja a la más fuerte.' },
      { en: '.rejilla--tablero > :nth-child(2)', t: 'Tu nivel y tus repasos', x: 'Tu nivel sube con cada pregunta. «Pendientes de repaso» te junta lo que fallaste o marcaste para que vuelvas sobre ello en el momento justo.' },
      { en: 'doc:#btnGuia', t: '¿Te pierdes? Pulsa aquí', x: 'Este botón «?» está en todas las secciones. Púlsalo cuando quieras y te vuelvo a explicar para qué sirve cada cosa.' }
    ],
    ruta: [
      { t: '{A}, tu profesor', x: '{A} organiza tu estudio por ti: decide el orden de los temas y te lleva paso a paso, como un profesor particular.' },
      { en: '.card--sangria', con: 'Cómo funciona', t: 'Cómo trabajamos', x: 'De cada tema lees los apuntes, haces sus preguntas y repasas sus tarjetas. Cada tanda de temas termina con un examen para medir lo aprendido.' },
      { en: '.card', con: 'Qué quieres estudiar', t: 'Elige y ordena los bloques', x: 'Marca los bloques que quieres estudiar y ordénalos con las flechas ↑ ↓. Terminarás uno antes de pasar al siguiente.' },
      { en: '.card', con: 'Cuántos temas', t: 'El tamaño de cada tanda', x: 'Tandas cortas dan más exámenes y más sensación de avance; tandas largas, menos interrupciones. Elige el tamaño y crea tu recorrido.' }
    ],
    simulacro: [
      { t: 'Simulacro: el examen de verdad', x: 'Aquí practicas como el día del {E}: con reloj, sin pistas y sin ver la explicación hasta el final.' },
      { en: '.rejilla--2 > :nth-child(1)', t: 'Simulacro adaptativo', x: 'Elige las preguntas según tus errores recientes, tus áreas débiles y lo que hace tiempo no ves. Es el que más te ayuda a mejorar.' },
      { en: '.rejilla--2 > :nth-child(2)', t: 'Elige el formato', x: 'Decide cuántas preguntas y cuánto tiempo. Salen de todo el temario: así sabes cómo estarías si el examen fuera hoy.' },
      { en: '.card', con: 'simulacros anteriores', t: 'Tu historial', x: 'Aquí quedan tus simulacros con su nota, para ver si vas mejorando.' }
    ],
    estudiar: [
      { t: 'Estudiar: los temas para leer', x: 'Aquí no hay preguntas: hay texto. Cada tema está explicado para entenderlo, no para memorizarlo.' },
      { en: '.rejilla--4', t: 'Tu lectura en números', x: 'Cuántos temas hay, cuántos has leído, el tiempo de lectura que te queda y los bloques.' },
      { en: '.card', con: 'Avance de lectura', t: 'Tu avance', x: 'La barra se llena a medida que lees temas.' },
      { en: '.filtros', t: 'Filtra por bloque', x: 'Toca un bloque para ver solo sus temas.' },
      { en: '.apuntes-rejilla', t: 'Los temas', x: 'Toca cualquiera para abrirlo y leerlo. Al terminar puedes pasar a sus preguntas.' }
    ],
    temario: [
      { t: 'Temario: estudiar por temas', x: 'El programa del examen organizado en bloques y temas, para estudiar en orden y no al azar.' },
      { en: '.rejilla--4', t: 'El temario en números', x: 'Los temas del programa, cuántos ya tocaste, las preguntas disponibles y cuántas traen explicación.' },
      { en: '.card', con: 'Avance por el temario', t: 'Tu avance', x: 'Un tema cuenta como tocado en cuanto respondes una pregunta suya.' },
      { en: '.mapa', t: 'Los bloques', x: 'Abre un bloque para ver sus temas. Cada tema te deja leer, practicar sus preguntas o repasar sus tarjetas.' },
      { en: '.card', con: 'Además del temario', t: 'Lo que también entra', x: 'Bloques transversales como Epidemiología, Bioética o Farmacología, que también se evalúan.' }
    ],
    entrenar: [
      { t: 'Entrenar: practicar con explicación', x: 'Preguntas sin reloj y con ayudas. Después de cada respuesta ves por qué es la correcta, por qué fallan las otras y de dónde sale.' },
      { en: '.card', con: 'Especialidad', t: 'Elige la especialidad', x: 'Toca la que quieres practicar, o «Todas» para mezclarlas.' },
      { en: '.card', con: 'Cuántas preguntas', t: 'Cuántas y de dónde', x: 'Elige cuántas preguntas y de qué parte del banco: todo, solo las que traen explicación o solo exámenes reales.' },
      { en: '.rejilla--3', con: 'Aprender', t: 'Tres formas de entrenar', x: 'Aprender es la práctica normal. Razonamiento guiado te hace pensar en seis pasos antes de ver las opciones, como en la consulta. Solo mis errores te devuelve a lo que fallaste.' },
      { en: '#btnEmpezar', t: 'Y a empezar', x: 'Cuando lo tengas elegido, empieza aquí. Si fallas y no lo entiendes, el botón «Aún no lo entiendo» me llama para explicártelo paso a paso.' }
    ],
    practicar: 'entrenar',
    clinica: [
      { t: 'Clínica: decidir como médico', x: 'Aquí no eliges entre cuatro letras: tomas decisiones y el caso avanza según lo que hagas.' },
      { en: '.card--carbon', t: 'Cómo funciona', x: 'Cada decisión abre un camino distinto. Al final recibes el análisis de tu razonamiento, no solo un puntaje.' },
      { en: '.rejilla--3:has([data-caso])', t: 'Casos interactivos', x: 'Historias clínicas completas. Toca una para empezar.' },
      { en: '.rejilla--3:has([data-pv])', t: 'Pacientes virtuales', x: 'Le preguntas lo que quieras, lo examinas y pides los estudios que consideres, como en una consulta real.' }
    ],
    medpractica: [
      { t: 'Medicina práctica', x: 'Lo que se usa en el día a día de la clínica: cálculos, tubos de laboratorio, analíticas, emergencias y enfermedades crónicas, aprendido jugando.' },
      { en: '.jg-nivel', t: 'Tu nivel', x: 'Ganas puntos (XP) en cada juego y vas subiendo de nivel: de Estudiante a Externo, y así hacia arriba.' },
      { en: '.mp-bloques', t: 'Los cinco bloques', x: 'En cada bloque estudias 3 temas, juegas con ellos y se desbloquean los 3 siguientes. Si fallas, te doy la clase del tema.' }
    ],
    flashcards: [
      { t: 'Flashcards: repaso rápido', x: 'Tarjetas de pregunta y respuesta para repasar en cinco minutos. Te las vuelvo a enseñar justo cuando estás por olvidarlas.' },
      { en: '.rejilla--4', t: 'Tu mazo en números', x: 'Las que te toca repasar hoy, las que no has visto, las que ya dominas y tus repasos totales.' },
      { en: '.rejilla--3', con: 'Relámpago', t: 'Tres atajos', x: 'Relámpago es una ronda rápida. Repaso de hoy, lo que te toca repasar hoy. Solo mis fallos, las que se te resisten.' },
      { en: '.card', con: 'Sesión a medida', t: 'Arma tu sesión', x: 'Elige la especialidad, cuántas tarjetas y de dónde salen.' },
      { en: '.card', con: 'Progreso del mazo', t: 'Tu avance', x: 'Cuántas tarjetas del mazo has visto ya.' }
    ],
    desafio: [
      { t: 'Desafío: contra reloj', x: 'Preguntas difíciles con 60 segundos cada una, tres vidas y puntos extra por racha. Para ponerte a prueba.' },
      { en: '.card--carbon', con: 'Reglas', t: 'Las reglas', x: 'Cada acierto suma puntos más el tiempo que te sobra, y los aciertos seguidos multiplican.' },
      { en: '.rejilla--2', t: 'Elige el reto', x: 'Reto de 10 preguntas o Alto rendimiento, con 20.' },
      { en: '.card--lila', t: 'Duelo en vivo', x: 'Compite con un compañero en tiempo real compartiendo un código.' }
    ],
    ranking: [
      { t: 'Clasificación', x: 'La tabla de puntos del Desafío. Solo aparece quien quiere aparecer, con un alias.' },
      { en: '.rejilla--3', t: 'Tus marcas', x: 'Tus mejores puntajes.' },
      { en: '#cajaOptIn', t: 'Tu sitio en la lista', x: 'Aquí decides si apareces en la tabla y con qué alias.' },
      { en: '.pestanas', t: 'Este mes o histórico', x: 'La tabla del mes se reinicia el día 1; la histórica no se borra nunca.' }
    ],
    biblioteca: [
      { t: 'Biblioteca: todo el banco abierto', x: 'Todas las preguntas con su explicación, su trampa y su bibliografía, para consultarlas como un libro.' },
      { en: '.buscador', t: 'Busca', x: 'Escribe un tema, una enfermedad o cualquier palabra.' },
      { en: '.filtros', t: 'Filtra por especialidad', x: 'Toca una especialidad para ver solo sus preguntas.' },
      { en: '.item-lista', t: 'Abre cualquier pregunta', x: 'Tócala para verla entera, con su explicación.' }
    ],
    progreso: [
      { t: 'Progreso: cómo vas aprendiendo', x: 'No solo qué fallaste: también cómo lo fallaste y en qué parte del temario.' },
      { en: '.rejilla--4', t: 'Tus totales', x: 'Preguntas respondidas, precisión, simulacros hechos y cuánto del banco has recorrido.' },
      { en: '.rejilla--tablero > :nth-child(1)', t: 'Tus últimos 14 días', x: 'Tu precisión día a día: si la línea sube, vas bien.' },
      { en: '.rejilla--tablero > :nth-child(2)', t: 'Cómo estás fallando', x: 'El tipo de error que cometes y si fallas con mucha seguridad, que es lo más peligroso porque no lo ves venir.' },
      { en: '.card', con: 'Dominio por especialidad', t: 'Tu dominio por especialidad', x: 'De la más floja a la más fuerte. Toca una para entrenarla.' },
      { en: '.card', con: 'Mapa de conocimiento', t: 'Tu mapa', x: 'Baja de especialidad a tema y a subtema para encontrar el hueco exacto.' },
      { en: '.medallas', t: 'Tus medallas', x: 'Logros que vas desbloqueando al estudiar.' }
    ],
    preparacion: [
      { t: '¿Estoy listo?', x: 'Un índice de 0 a 100 que responde a la gran pregunta: ¿qué tan preparado estás hoy para el {E}?' },
      { en: '.rejilla--tablero > :nth-child(1)', t: 'Tu índice', x: 'Combina tu dominio, cuánto practicas, cuántas áreas cubres y lo constante que eres.' },
      { en: '.rejilla--tablero > :nth-child(2)', t: 'Fortalezas y debilidades', x: 'Lo verde lo dominas. Lo rojo y lo naranja es donde más sube tu índice si lo trabajas.' },
      { en: '.card', con: 'Quién te guía', t: 'Para cerrar las debilidades', x: 'Si no sabes por dónde empezar, te armo yo el recorrido.' }
    ],
    ajustes: [
      { t: 'Ajustes', x: 'Tu cuenta y tu forma de estudiar.' },
      { en: '.card', con: 'Cuenta', t: 'Tu cuenta', x: 'Tu nombre y tu contraseña.' },
      { en: '.card', con: 'Tus materias', t: 'Tus materias', x: 'Cámbialas cuando cambies de cuatrimestre.' },
      { en: '.card', con: 'Cómo quieres entrenar', t: 'Cómo quieres entrenar', x: 'Activa o apaga ayudas: pedir tu nivel de confianza, defender tu respuesta, el banco extendido, los candados por bloques y que yo te reformule. Aquí también puedes apagar estas guías.' },
      { en: '#tarjetaSuscripcion', t: 'Tu suscripción', x: 'Tu plan y hasta cuándo tienes acceso.' },
      { en: '.card', con: 'Copia de seguridad', t: 'Copia de seguridad', x: 'Guarda tu progreso en un archivo o recupéralo.' },
      { en: '.card', con: 'Zona delicada', t: 'Zona delicada', x: 'Borrar tu progreso o cerrar sesión. Ojo: borrar no se puede deshacer.' }
    ],
    soporte: [
      { t: 'Te escuchamos', x: '¿Algo no funciona o se te ocurre una mejora? Escríbelo aquí: nos llega directo.' },
      { en: '.card:has(textarea)', t: 'Cuéntanos', x: 'Elige si es un problema o una recomendación, ponle un asunto y explícalo.' },
      { en: '#tkListaCaja', t: 'Tus mensajes', x: 'Los mensajes que ya enviaste y su respuesta.' }
    ],
    casos: [
      { t: 'Casos prácticos', x: 'Casos de tus materias para decidir paso a paso: mecanismos y estructuras en los primeros bloques, casos clínicos más adelante.' },
      { en: '.filtros', t: 'Filtra por cuatrimestre', x: 'Toca un cuatrimestre para ver solo sus casos.' },
      { en: '.rejilla--3', t: 'Los casos', x: 'Toca uno para empezar.' }
    ],
    examinar: [
      { t: 'Examinar: tu documento hecho examen', x: 'Sube la guía, el resumen o los apuntes de una clase y la inteligencia artificial te arma un examen sobre ese contenido.' },
      { en: '.card--suero', t: 'Tenlo en cuenta', x: 'A diferencia de «Mi material», tu documento sí se envía al servidor para poder generar el examen.' },
      { en: '.card:has(input[type=file])', t: 'Sube tu archivo', x: 'Aquí eliges el documento y creas el examen.' },
      { en: '#exListaCaja', t: 'Tus exámenes', x: 'Los exámenes que ya generaste, para repetirlos cuando quieras.' }
    ],
    indice: [
      { t: 'Calculadora de índice', x: 'Calcula tu índice académico con tus notas y los créditos de cada materia.' },
      { en: '.card--carbon', t: 'Tu índice', x: 'Se actualiza al momento, con cada nota que pones.' },
      { en: '.card:has(#idxFilas)', t: 'Tus materias', x: 'Pon cada materia con sus créditos y su nota (A, B, C, D o F). Con «+ Agregar materia» sumas más.' }
    ],
    proximos: [
      { t: 'Próximos cursos', x: 'Cursos cortos, certificados y diplomados que se van abriendo, además de tus asignaturas.' }
    ]
  };

  let actual = null;   // { pasos, i, seccion, capa, foco, tarjeta, alMover, alTecla }

  const reducir = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const movil = () => window.innerWidth <= 900;

  function ajustes(){ const d = Almacen.datos(); return d && d.ajustes; }

  function texto(s){
    const unirm = Almacen.programa() === 'unirm';
    return String(s || '')
      .replace(/\{A\}/g, window.Arturo ? Arturo.nombre() : 'Arturo')
      .replace(/\{P\}/g, unirm ? 'UNIRMIA' : 'ENURMIA')
      .replace(/\{E\}/g, unirm ? 'examen' : 'ENURM');
  }

  function visible(el){
    const r = el.getBoundingClientRect();
    return r.width > 4 && r.height > 4 && getComputedStyle(el).visibility !== 'hidden';
  }

  function buscar(p){
    let raiz = document.getElementById('vista'), sel = p.en;
    if (sel.indexOf('doc:') === 0){ raiz = document; sel = sel.slice(4); }
    if (!raiz) return null;
    let lista;
    try { lista = Array.prototype.slice.call(raiz.querySelectorAll(sel)); } catch (e) { return null; }
    lista = lista.filter(visible);
    if (p.con){
      const c = p.con.toLowerCase();
      lista = lista.filter(e => e.textContent.toLowerCase().indexOf(c) !== -1);
    }
    return lista[0] || null;
  }

  function pasosDe(seccion){
    let lista = PASOS[seccion];
    if (typeof lista === 'string') lista = PASOS[lista];
    return lista || null;
  }

  /* Los pasos que de verdad se pueden ensenar ahora. Una seccion sin
     guia escrita recibe una sola tarjeta con su propio encabezado. */
  function armar(seccion){
    const prog = Almacen.programa();
    let lista = (pasosDe(seccion) || []).filter(p => !p.solo || p.solo === prog);
    if (!lista.length){
      const h = document.querySelector('#vista h1');
      if (!h) return [];
      const sub = document.querySelector('#vista .encabezado h1 + p');
      lista = [{ t: h.textContent, x: sub ? sub.textContent : 'Esta pantalla todavía no tiene una guía paso a paso.' }];
    }
    return lista
      .map(p => Object.assign({}, p, { el: p.en ? buscar(p) : null }))
      .filter(p => !p.en || p.el);
  }

  function seccionActual(){
    return (location.hash || '#inicio').slice(1).split(/[?&]/)[0] || 'inicio';
  }

  /* ---------- pintar ---------- */

  function fijo(el){
    for (let e = el; e && e !== document.body; e = e.parentElement){
      const pos = getComputedStyle(e).position;
      if (pos === 'fixed' || pos === 'sticky') return true;
    }
    return false;
  }

  /* Lleva el elemento a la vista: en el telefono arriba (la tarjeta va
     abajo); en la computadora mas o menos al centro. */
  function llevar(el){
    if (fijo(el)) return;
    const r = el.getBoundingClientRect();
    const arriba = movil() ? 84 : Math.max(90, (innerHeight - Math.min(r.height, innerHeight * 0.6)) / 2 - 70);
    window.scrollTo({ top: Math.max(0, scrollY + r.top - arriba), behavior: reducir() ? 'auto' : 'smooth' });
  }

  function posicionar(){
    if (!actual) return;
    const p = actual.pasos[actual.i];
    const foco = actual.foco, tj = actual.tarjeta;
    const el = p.el && document.contains(p.el) ? p.el : (p.en ? (p.el = buscar(p)) : null);

    if (!el){
      foco.classList.add('rec__foco--nada');
      tj.classList.add('rec__tarjeta--centro');
      tj.style.left = tj.style.top = '';
      return;
    }
    foco.classList.remove('rec__foco--nada');
    tj.classList.remove('rec__tarjeta--centro');

    const r = el.getBoundingClientRect(), pad = 8;
    const alto = tj.offsetHeight, ancho = tj.offsetWidth;
    const techo = 8;
    // en el telefono la tarjeta tapa el fondo de la pantalla: el foco no baja de ahi
    const suelo = movil() && !fijo(el) ? innerHeight - alto - 24 : innerHeight - 8;
    const top = Math.max(techo, r.top - pad);
    const bottom = Math.min(Math.max(top + 30, r.bottom + pad), suelo);
    foco.style.left = Math.max(4, r.left - pad) + 'px';
    foco.style.top = top + 'px';
    foco.style.width = Math.min(innerWidth - 8, r.width + pad * 2) + 'px';
    foco.style.height = Math.max(30, bottom - top) + 'px';

    if (movil()){
      tj.style.left = ''; tj.style.top = '';
      // si lo iluminado es la barra de abajo, la tarjeta sube por encima de ella
      tj.classList.toggle('rec__tarjeta--alta', fijo(el) && r.top > innerHeight / 2);
      return;
    }
    const m = 14;
    let x, y;
    if (innerHeight - r.bottom > alto + m * 2){ y = r.bottom + m; x = r.left; }
    else if (r.top > alto + m * 2){ y = r.top - alto - m; x = r.left; }
    else if (innerWidth - r.right > ancho + m * 2){ x = r.right + m; y = r.top; }
    else if (r.left > ancho + m * 2){ x = r.left - ancho - m; y = r.top; }
    else { x = innerWidth - ancho - 24; y = innerHeight - alto - 24; }
    tj.style.left = Math.min(Math.max(12, x), innerWidth - ancho - 12) + 'px';
    tj.style.top = Math.min(Math.max(12, y), innerHeight - alto - 12) + 'px';
  }

  function pintarPaso(){
    const p = actual.pasos[actual.i], n = actual.pasos.length, ult = actual.i === n - 1;
    const tj = actual.tarjeta;
    tj.querySelector('.rec__cuenta').textContent = (actual.i + 1) + ' de ' + n;
    tj.querySelector('h3').textContent = texto(p.t);
    tj.querySelector('.rec__texto').textContent = texto(p.x);
    tj.querySelector('.rec__atras').style.visibility = actual.i ? 'visible' : 'hidden';
    tj.querySelector('.rec__sig').textContent = ult ? 'Entendido' : 'Siguiente →';
    tj.querySelector('.rec__puntos').innerHTML = actual.pasos.map((_, k) =>
      '<i class="' + (k === actual.i ? 'on' : '') + '"></i>').join('');
    tj.classList.remove('rec__tarjeta--entra'); void tj.offsetWidth; tj.classList.add('rec__tarjeta--entra');

    const el = p.el && document.contains(p.el) ? p.el : (p.en ? (p.el = buscar(p)) : null);
    if (el) llevar(el);
    posicionar();
    setTimeout(posicionar, reducir() ? 30 : 420);
    tj.querySelector('.rec__sig').focus({ preventScroll: true });
  }

  function mover(d){
    if (!actual) return;
    const j = actual.i + d;
    if (j < 0) return;
    if (j >= actual.pasos.length) return cerrar();
    actual.i = j;
    pintarPaso();
  }

  function abrir(pasos, seccion){
    cerrar();
    const capa = document.createElement('div');
    capa.className = 'rec';
    capa.setAttribute('role', 'dialog');
    capa.setAttribute('aria-modal', 'true');
    capa.setAttribute('aria-label', 'Guía de esta sección');
    const quien = window.Arturo ? Arturo.nombre() : 'Arturo';
    capa.innerHTML =
      '<div class="rec__foco"></div>' +
      '<div class="rec__tarjeta" aria-live="polite">' +
        '<div class="rec__cab">' +
          (window.Arturo ? Arturo.cara('feliz', false) : '') +
          '<div class="grow"><span class="rec__quien">' + UI.esc(quien) + ' te explica</span>' +
          '<span class="rec__cuenta"></span></div>' +
          '<button class="rec__x" type="button" aria-label="Cerrar la guía">✕</button>' +
        '</div>' +
        '<h3></h3><p class="rec__texto"></p>' +
        '<div class="rec__pie">' +
          '<div class="rec__puntos" aria-hidden="true"></div>' +
          '<button class="btn btn--sm btn--fantasma rec__atras" type="button">← Atrás</button>' +
          '<button class="btn btn--sm rec__sig" type="button">Siguiente →</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(capa);
    document.body.classList.add('rec-abierto');

    actual = {
      pasos: pasos, i: 0, seccion: seccion, capa: capa,
      foco: capa.querySelector('.rec__foco'), tarjeta: capa.querySelector('.rec__tarjeta'),
      antes: document.activeElement
    };
    capa.querySelector('.rec__x').onclick = cerrar;
    capa.querySelector('.rec__atras').onclick = () => mover(-1);
    capa.querySelector('.rec__sig').onclick = () => mover(1);
    // tocar fuera de la tarjeta avanza: es lo que la gente hace sin pensar
    capa.addEventListener('click', e => { if (actual && (e.target === capa || e.target === actual.foco)) mover(1); });

    let pend = false;
    actual.alMover = () => { if (pend) return; pend = true; requestAnimationFrame(() => { pend = false; posicionar(); }); };
    actual.alTecla = e => {
      if (e.key === 'Escape'){ e.preventDefault(); cerrar(); }
      else if (e.key === 'ArrowRight'){ e.preventDefault(); mover(1); }
      else if (e.key === 'ArrowLeft'){ e.preventDefault(); mover(-1); }
    };
    addEventListener('scroll', actual.alMover, { passive: true });
    addEventListener('resize', actual.alMover);
    document.addEventListener('keydown', actual.alTecla, true);
    pintarPaso();
  }

  function cerrar(){
    if (!actual) return;
    const a = actual; actual = null;
    removeEventListener('scroll', a.alMover);
    removeEventListener('resize', a.alMover);
    document.removeEventListener('keydown', a.alTecla, true);
    a.capa.remove();
    document.body.classList.remove('rec-abierto');
    if (a.antes && a.antes.focus) try { a.antes.focus({ preventScroll: true }); } catch (e) {}
  }

  function marcarVista(seccion){
    const a = ajustes(); if (!a) return;
    a.guiasVistas = Object.assign({}, a.guiasVistas, { [seccion]: Date.now() });
    Almacen.guardar();
  }

  /* ---------- puertas de entrada ---------- */

  /* App.ir lo llama al pintar cada seccion. Espera a que termine la
     entrada animada y a que no haya otra ventana encima (la bienvenida
     de Inicio, una clase de Arturo): si la hay, vuelve a mirar hasta
     que se cierre, mientras el estudiante siga en la misma seccion. */
  let espera = null;
  function alEntrar(seccion){
    if (espera){ clearTimeout(espera); espera = null; }
    if (actual) cerrar();
    const a = ajustes();
    if (!a || a.guias === false || !pasosDe(seccion)) return;
    if ((a.guiasVistas || {})[seccion]) return;
    let intentos = 0;
    const mirar = () => {
      espera = null;
      if (seccionActual() !== seccion || actual) return;
      if (document.querySelector('.velo, .clase-velo, .membresia-velo:not(.hidden), .sesion, .movil-velo')){
        if (++intentos < 120) espera = setTimeout(mirar, 500);
        return;
      }
      const pasos = armar(seccion);
      // si la pantalla aun no tiene nada que ensenar (sin datos), se deja
      // para otra visita en vez de gastar la guia en una pantalla vacia
      const apunta = (pasosDe(seccion) || []).some(p => p.en);
      if (apunta && pasos.filter(p => p.el).length < 1) return;
      marcarVista(seccion);
      abrir(pasos, seccion);
    };
    espera = setTimeout(mirar, 750);
  }

  /* El boton "?" de la barra de arriba. */
  function ahora(){
    const s = seccionActual();
    const pasos = armar(s);
    if (!pasos.length){ UI.tostada('Esta pantalla todavía no tiene guía.'); return; }
    marcarVista(s);
    abrir(pasos, s);
  }

  function reiniciar(){
    const a = ajustes(); if (!a) return;
    a.guiasVistas = {};
    Almacen.guardar();
  }

  return { alEntrar, ahora, cerrar, reiniciar, PASOS };
})();
