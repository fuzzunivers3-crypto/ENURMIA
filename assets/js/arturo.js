/* ============================================================
   ARTURO — el profesor que guia el recorrido
   La Ruta sabe que toca. Arturo es quien lo dice, y quien
   encadena la lectura con las preguntas y las preguntas con las
   tarjetas sin soltar al estudiante en el menu entre paso y paso.

   Que es: un sistema de reglas sobre el estado de la ruta, con el
   texto escrito a mano. Que NO es: un chat ni un modelo de
   lenguaje. La app corre sin servidor y sin internet, asi que no
   hay nada aqui que pueda improvisar una respuesta.

   La voz: profesor clinico, segunda persona, frases cortas. La
   misma de los apuntes, la que se escribe alrededor de "que hago
   con este paciente delante". No la de un animador.
   ============================================================ */
window.Arturo = (function () {

  const NOMBRE = 'Arturo';

  /* Este modulo tiene que poder cargarse en Node para validarlo, y alli
     no hay UI. Por eso el escapado se resuelve en cada llamada y no en
     una constante del cuerpo del modulo. */
  function esc(s){
    if (window.UI && UI.esc) return UI.esc(s);
    return String(s == null ? '' : s);
  }

  /* ---------- el texto ----------
     {tema} {tanda} {tandas} {repaso} {pct} {meta} se rellenan solos. */
  const FRASES = {
    sinruta: [
      'Soy Arturo. Si me dejas, te llevo el estudio: escogemos cuantos temas quieres llevar a la vez y los vamos cerrando con examen hasta acabar el temario.',
      'Estudiar a saltos cansa y no cunde. Arma tu recorrido y yo te digo cada dia que toca, sin que tengas que decidirlo tu.',
      'Aqui hay 101 temas. Los vamos a ir cerrando por tandas, y cada tanda termina con un examen de lo que acabas de estudiar. Empecemos.'
    ],
    leer: [
      'Empezamos por el texto de {tema}. Leelo entero, sin saltar las cajas: ahi esta lo que decide la conducta.',
      'Toca {tema}. Primero el texto, que es donde se entiende; las preguntas vienen despues y se contestan solas.',
      'Abre {tema} y leelo con calma. No lo estudies para responder todavia, estudialo para saber que harias con ese paciente delante.'
    ],
    preg: [
      'Ya tienes el texto de {tema}. Ahora las preguntas del mismo tema: quiero ver si lo que leiste te sirve para decidir.',
      'Vamos a probar {tema}. {meta} preguntas, con explicacion. Lo que falles ahora no te lo cobra nadie.',
      'Leiste {tema}; ahora hay que usarlo. Te pongo sus preguntas y vemos que quedo flojo.'
    ],
    tarj: [
      'Buen trabajo con las preguntas de {tema}. Cierra el tema con sus tarjetas: son el dato clave y la trampa de cada una.',
      'Falta lo que se olvida primero. Pasa las tarjetas de {tema} y lo dejamos sujeto.',
      'Ultimo paso de {tema}: las tarjetas. Son cortas y son las que hacen que dentro de un mes sigas sabiendolo.'
    ],
    simulacro: [
      'La tanda {tanda} esta completa. Toca medirla: examen de estos temas, con reloj y sin ayudas.',
      'Ya cerraste los temas de esta tanda. Ahora el examen, que es donde se ve lo que de verdad quedo.',
      'Terminaste de estudiar la tanda {tanda}. Vamos al examen; sale de estos temas y de algo de lo anterior.'
    ],
    fin: [
      'Recorriste el temario entero. Eso no lo hace casi nadie. Podemos dar una segunda vuelta, mas corta y de puro examen, o medirte con un simulacro completo.',
      'Se acabaron los 101 temas. Lo que queda ahora es sostenerlo: segunda vuelta de solo examenes, o simulacro completo del ENURM.',
      'Cerramos el temario. A partir de aqui ya no se trata de aprenderlo, sino de que no se te caiga: elige segunda vuelta o simulacro completo.'
    ],
    cierraLectura: [
      'Hasta aqui el texto de {tema}. Ahora las preguntas, que es donde se ve si lo entendiste.',
      'Ya esta leido {tema}. No lo dejes ahi: te pongo sus preguntas y salimos de dudas.',
      'Terminaste {tema}. Sigue conmigo, que lo siguiente es ponerlo a prueba.'
    ],
    resultadoAlto: [
      'Eso estuvo bien. {tema} lo tienes. Cierra con las tarjetas y pasamos al siguiente.',
      '{pct}% en {tema}. Vas sobrado; remata con las tarjetas y seguimos.',
      'Bien resuelto. Te faltan solo las tarjetas de {tema} para darlo por cerrado.'
    ],
    resultadoBajo: [
      'Ahi hay un hueco. Vuelve al texto de {tema} antes de seguir: no quiero que lo arrastres hasta el examen.',
      '{pct}% en {tema} no alcanza. Relee el tema y repite las preguntas; no es tiempo perdido, es el tiempo que hace falta.',
      'Esto no quedo. Te devuelvo al texto de {tema}, y volvemos a las preguntas cuando lo tengas.'
    ],
    cierraTema: [
      'Tema cerrado. Vamos con el siguiente de la tanda {tanda}.',
      '{tema} queda listo. Sigue el proximo; llevamos buen ritmo.',
      'Uno menos. Te espero en el siguiente tema de esta tanda.'
    ],
    resultadoTanda: [
      'Ahi tienes la tanda {tanda}. Lo que salio flojo no se pierde: vuelve mezclado en los proximos examenes.',
      'Cerrada la tanda {tanda}. Los temas que no llegaron al 60% te los voy a devolver mas adelante, no te libras.',
      'Tanda {tanda} medida. Seguimos avanzando; lo flojo lo recupero yo por ti.'
    ],
    eligeTema: [
      'Tema cerrado. Puedes seguir con el siguiente o medirte ahora mismo con este, en caliente.',
      'Ya esta {tema}. O pasamos al siguiente, o te examino de este ahora que lo tienes fresco.',
      '{tema} queda hecho. Tu decides: seguimos avanzando o lo pruebas ya con un examen corto.'
    ],
    temaSolido: [
      '{pct}% en {tema}. Ese lo tienes sujeto; sigamos.',
      'Bien. {tema} queda solido con {pct}%. Al siguiente.',
      '{pct}% y sin dudar. {tema} ya no me preocupa.'
    ],
    temaFlojo: [
      '{pct}% en {tema}. Te lo apunto para repasar: va a volver en los proximos examenes.',
      'Ese no quedo: {pct}%. Lo meto en la cola y te lo devuelvo mas adelante.',
      '{pct}% no alcanza en {tema}. Mejor saberlo ahora que el dia del examen.'
    ],
    retomar: [
      'Lo dejamos en {tema}. Sigamos por ahi antes de abrir nada nuevo.',
      'Tenias {tema} a medias. Terminemoslo y despues pasamos al siguiente.',
      'Volvemos a {tema}, que quedo empezado. Un tema a medias no cuenta.'
    ]
  };

  const TITULOS = {
    sinruta:   'Arma tu recorrido',
    leer:      'Toca leer',
    preg:      'Toca practicar',
    tarj:      'Toca fijar',
    simulacro: 'Toca medirse',
    fin:       'Temario terminado'
  };

  const BOTONES = {
    sinruta:   'Empezar con Arturo',
    leer:      'Leer el tema',
    preg:      'Hacer las preguntas',
    tarj:      'Pasar las tarjetas',
    simulacro: 'Empezar el examen',
    fin:       'Ver el cierre'
  };

  /* ---------- elegir frase sin repetirse ---------- */
  const ultima = {};

  function rellenar(s, ctx){
    return String(s).replace(/\{(\w+)\}/g, function (m, k) {
      return (ctx && ctx[k] !== null && ctx[k] !== undefined) ? ctx[k] : '';
    });
  }

  function frase(clave, ctx){
    const banco = FRASES[clave];
    if (!banco || !banco.length) return '';
    let i = Math.floor(Math.random() * banco.length);
    if (banco.length > 1 && i === ultima[clave]) i = (i + 1) % banco.length;
    ultima[clave] = i;
    return rellenar(banco[i], ctx);
  }

  /* ---------- el paso del dia ---------- */
  function paso(){
    const p = Ruta.proximoPaso();
    const r = Ruta.activa();
    const ctx = {
      tema: p.tema || '',
      meta: p.meta || 0,
      pct: (p.pct === null || p.pct === undefined) ? '' : p.pct,
      tanda: r ? r.tanda : 0,
      tandas: r ? r.tandasN.length : 0,
      repaso: r ? r.repaso.length : 0
    };
    return {
      tipo: p.tipo,
      tema: p.tema || null,
      titulo: TITULOS[p.tipo] || '',
      frase: frase(p.tipo, ctx),
      boton: BOTONES[p.tipo] || 'Seguir'
    };
  }

  /* ---------- la tira, para incrustar en cualquier vista ---------- */
  /* op.frase y op.boton permiten que una pantalla concreta ponga el
     remate que le toca (cerrar la lectura, interpretar un resultado) en
     vez del paso generico. */
  function barra(op){
    op = op || {};
    const p = paso();
    const texto = op.frase || p.frase;
    const boton = op.boton === null ? null : (op.boton || p.boton);
    const accion = op.accion || '';
    return '<div class="arturo">' +
        '<span class="arturo__sello">A</span>' +
        '<div class="arturo__texto">' +
          '<b>' + NOMBRE + '</b>' +
          '<p>' + esc(texto) + '</p>' +
        '</div>' +
        (boton ? '<button class="btn btn--sm" id="arturoSeguir" data-accion="' +
                 esc(accion) + '">' + esc(boton) + '</button>' : '') +
        (op.boton2 ? '<button class="btn btn--sm btn--fantasma" id="arturoOtro" data-accion="' +
                 esc(op.accion2 || '') + '">' + esc(op.boton2) + '</button>' : '') +
      '</div>';
  }

  function enganchar(){
    cablear(document.getElementById('arturoSeguir'));
    cablear(document.getElementById('arturoOtro'));
  }

  function cablear(b){
    if (!b) return;
    const accion = b.getAttribute('data-accion') || '';
    b.onclick = function () {
      if (accion === 'cerrarLectura') return cerrarLectura();
      if (accion === 'releer') return releer();
      if (accion === 'examenTema') return examenDeTema();
      seguir();
    };
  }

  /* Medirse de un tema recien cerrado, sin esperar al examen de la tanda.
     Se lanza sobre el tema del hilo, que es el que se acaba de terminar. */
  function examenDeTema(){
    const h = Ruta.hilo();
    const tema = h ? h.tema : null;
    if (!tema) return App.ir('ruta');
    if (window.VistaRuta) return VistaRuta.examenDeTema(tema);
    App.ir('ruta');
  }

  /* Llegar al pie del texto ES haberlo leido. Sin esto la cadena se
     rompe justo donde tiene que encadenar: Arturo dice "ahora las
     preguntas" pero el paso siguiente sigue siendo leer, porque el
     apunte no se marca solo, y el boton te devuelve al texto. */
  function cerrarLectura(){
    const h = Ruta.hilo();
    if (h && window.Apuntes){
      const k = Ruta.claveApunte(h.tema);
      if (k) Apuntes.marcarLeido(k);
    }
    seguir();
  }

  /* Cuando las preguntas salen mal, el sitio al que hay que volver es el
     texto, no otra tanda de preguntas. */
  function releer(){
    const h = Ruta.hilo();
    const k = h ? Ruta.claveApunte(h.tema) : null;
    if (!k) return App.ir('ruta');
    App.ir('estudiar');
    Apuntes.abrir(k);
  }

  /* ---------- el boton unico ---------- */
  function seguir(){
    const p = Ruta.proximoPaso();

    if (p.tipo === 'sinruta' || p.tipo === 'fin' || p.tipo === 'simulacro')
      return App.ir('ruta');

    Ruta.abrirHilo(p.tema);

    if (p.tipo === 'leer'){
      App.ir('estudiar');
      if (p.clave && window.Apuntes) Apuntes.abrir(p.clave);
      return;
    }

    if (p.tipo === 'preg'){
      const qs = Ruta.preguntasDe(p.tema);
      if (!qs.length) return UI.tostada('Este tema todavía no tiene preguntas', 'mal');
      const orden = qs.slice().sort(function (a, b) {
        return (b.exp ? 1 : 0) - (a.exp ? 1 : 0);
      }).slice(0, Math.max(10, p.meta || 10));
      return Sesion.iniciar({
        modo: 'aprender', titulo: p.tema,
        preguntas: orden.sort(function () { return Math.random() - 0.5; })
      });
    }

    if (p.tipo === 'tarj'){
      const cs = Ruta.tarjetasDe(p.tema);
      if (!cs.length) return UI.tostada('Este tema todavía no tiene flashcards', 'mal');
      return Flashcards.iniciar({
        n: Math.max(12, p.meta || 12),
        titulo: p.tema,
        ids: cs.map(function (c) { return c.id; })
      });
    }
  }

  return {
    NOMBRE: NOMBRE,
    paso: paso, frase: frase, barra: barra,
    enganchar: enganchar, seguir: seguir,
    cerrarLectura: cerrarLectura, releer: releer,
    examenDeTema: examenDeTema
  };
})();
