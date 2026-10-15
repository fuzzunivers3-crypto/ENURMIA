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

  /* El mismo companero, dos nombres: Arturo en ENURMIA (profesor clinico
     de residencia) y R2D2 en UNIRMIA. Es una funcion y no una constante
     porque el programa puede confirmarse tarde (el servidor responde
     despues de que la pantalla ya este puesta), igual que en el resto
     de la app. Este modulo tiene que poder cargarse en Node para
     validarlo, y alli no hay Almacen: se cae a 'Arturo' por defecto. */
  function nombre(){
    if (window.Almacen && Almacen.programa) return Almacen.programa() === 'unirm' ? 'R2D2' : 'Arturo';
    return 'Arturo';
  }

  /* Este modulo tiene que poder cargarse en Node para validarlo, y alli
     no hay UI. Por eso el escapado se resuelve en cada llamada y no en
     una constante del cuerpo del modulo. */
  function esc(s){
    if (window.UI && UI.esc) return UI.esc(s);
    return String(s == null ? '' : s);
  }

  /* ---------- el texto ----------
     {tema} {tanda} {tandas} {repaso} {pct} {meta} {nombre} se rellenan
     solos. Solo sinruta se nombra a si mismo: el resto ya habla en
     segunda persona sin decir su nombre, asi que no hace falta tocarlo. */
  const FRASES = {
    sinruta: [
      'Soy {nombre}. Si me dejas, te llevo el estudio: escogemos cuantos temas quieres llevar a la vez y los vamos cerrando con examen hasta acabar el temario.',
      'Estudiar a saltos cansa y no cunde. Arma tu recorrido y yo te digo cada dia que toca, sin que tengas que decidirlo tu.',
      'Vamos a organizar todo el temario por tandas, y cada tanda termina con un examen de lo que acabas de estudiar. Empecemos.'
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
      'Se acabaron los {total} temas. Lo que queda ahora es sostenerlo: segunda vuelta de solo examenes, o simulacro completo.',
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
      repaso: r ? r.repaso.length : 0,
      total: r ? r.orden.length : 0,
      nombre: nombre()
    };
    return {
      tipo: p.tipo,
      tema: p.tema || null,
      titulo: TITULOS[p.tipo] || '',
      frase: frase(p.tipo, ctx),
      boton: p.tipo === 'sinruta' ? ('Empezar con ' + nombre()) : (BOTONES[p.tipo] || 'Seguir')
    };
  }

  /* ---------- la cara ----------
     Dibujado en SVG en linea: sin archivos que cargar, funciona sin
     internet y hereda la paleta. El gesto (humor) y el accesorio
     (insignia) cambian segun lo que Arturo esta haciendo en ese
     momento; el parpadeo y el habla los pone el CSS. */
  const HUMOR_DE_PASO = {
    sinruta: 'neutro', leer: 'neutro', preg: 'atento', tarj: 'neutro',
    simulacro: 'atento', fin: 'feliz'
  };
  const INSIGNIA = {
    sinruta: '🧭', leer: '📖', preg: '❓', tarj: '🗂️', simulacro: '⏱️',
    fin: '🏆', feliz: '✨', preocupado: '📖'
  };

  function caraArturo(humor){
    const cejas = {
      neutro:     'M27 30 H38 M42 30 H53',
      atento:     'M27 28 Q32.5 25 38 28 M42 28 Q47.5 25 53 28',
      feliz:      'M27 29 Q32.5 26 38 29 M42 29 Q47.5 26 53 29',
      preocupado: 'M27 32 L38 28.5 M42 28.5 L53 32'
    }[humor] || 'M27 30 H38 M42 30 H53';
    const boca = {
      neutro:     '<path d="M33 50 Q40 54 47 50" class="av__trazo"/>',
      atento:     '<path d="M34 50.5 Q40 52.5 46 50.5" class="av__trazo"/>',
      feliz:      '<path d="M31 48.5 Q40 60 49 48.5 Z" fill="#8A2A38" stroke="#4A0812" stroke-width="1.4" stroke-linejoin="round"/>',
      preocupado: '<path d="M34 53 Q40 48.5 46 53" class="av__trazo"/>'
    }[humor] || '';
    return '<svg class="av av--arturo av--' + humor + '" viewBox="0 0 80 80" aria-hidden="true">' +
      '<g class="av__cuerpo">' +
        '<path d="M8 82 Q10 58 40 58 Q70 58 72 82 Z" fill="#fff" stroke="#E7DCD4" stroke-width="1.5"/>' +
        '<path d="M31 58 L40 74 L49 58 Z" fill="#6E0F1F"/>' +
        '<path d="M25 60 Q22 76 35 76" fill="none" stroke="#2A1F1D" stroke-width="2" stroke-linecap="round"/>' +
        '<circle cx="36.5" cy="76" r="3" fill="#7FA8C4" stroke="#2A1F1D" stroke-width="1.4"/>' +
      '</g>' +
      '<rect x="35" y="49" width="10" height="11" rx="3" fill="#D9A582"/>' +
      '<g class="av__cabeza">' +
        '<ellipse cx="40" cy="37" rx="17" ry="19" fill="#E8B896"/>' +
        '<path d="M22.5 35 Q21 13 40 13.5 Q59 13 57.5 35 Q54 24.5 40 24 Q26 24.5 22.5 35 Z" fill="#2A1F1D"/>' +
        '<circle cx="32.5" cy="38" r="6" fill="#fff" fill-opacity=".55" stroke="#2A1F1D" stroke-width="1.6"/>' +
        '<circle cx="47.5" cy="38" r="6" fill="#fff" fill-opacity=".55" stroke="#2A1F1D" stroke-width="1.6"/>' +
        '<path d="M38.5 38 H41.5" stroke="#2A1F1D" stroke-width="1.6"/>' +
        '<g class="av__ojos"><circle cx="32.5" cy="38" r="1.9" fill="#2A1F1D"/><circle cx="47.5" cy="38" r="1.9" fill="#2A1F1D"/></g>' +
        '<path d="' + cejas + '" class="av__trazo av__ceja"/>' +
        '<g class="av__boca">' + boca + '</g>' +
      '</g>' +
    '</svg>';
  }

  function caraRobot(humor){
    const lente = { neutro:'#7FA8C4', atento:'#7FA8C4', feliz:'#4E8C74', preocupado:'#C8873A' }[humor] || '#7FA8C4';
    return '<svg class="av av--robot av--' + humor + '" viewBox="0 0 80 80" aria-hidden="true">' +
      '<path class="av__antena" d="M52 16 L56 6" stroke="#6B5F5A" stroke-width="2" stroke-linecap="round"/>' +
      '<circle class="av__antena" cx="56.5" cy="5.5" r="2.4" fill="#B31331"/>' +
      '<g class="av__cabeza">' +
        '<path d="M18 44 A22 22 0 0 1 62 44 Z" fill="#EEF2F5" stroke="#9C918C" stroke-width="1.6" stroke-linejoin="round"/>' +
        '<path d="M22 36 A19 19 0 0 1 36 24 L33 44 H20 Z" fill="#7FA8C4" fill-opacity=".85"/>' +
        '<path d="M58 36 A19 19 0 0 0 44 24 L47 44 H60 Z" fill="#7FA8C4" fill-opacity=".85"/>' +
        '<circle cx="40" cy="33" r="8.5" fill="#16100F" stroke="#9C918C" stroke-width="1.6"/>' +
        '<g class="av__ojos"><circle class="av__lente" cx="40" cy="33" r="5" fill="' + lente + '"/>' +
        '<circle cx="38" cy="31" r="1.5" fill="#fff" fill-opacity=".85"/></g>' +
      '</g>' +
      '<g class="av__cuerpo">' +
        '<rect x="16" y="44" width="48" height="30" rx="6" fill="#F4F6F8" stroke="#9C918C" stroke-width="1.6"/>' +
        '<rect x="22" y="50" width="14" height="9" rx="2" fill="#7FA8C4"/>' +
        '<rect x="40" y="50" width="18" height="4" rx="2" fill="#6E0F1F"/>' +
        '<rect x="40" y="57" width="10" height="4" rx="2" fill="#DCEDE4" stroke="#4E8C74" stroke-width=".8"/>' +
        '<rect x="22" y="64" width="36" height="4" rx="2" fill="#7FA8C4" fill-opacity=".6"/>' +
        '<rect x="22" y="74" width="8" height="6" rx="2" fill="#9C918C"/>' +
        '<rect x="50" y="74" width="8" height="6" rx="2" fill="#9C918C"/>' +
      '</g>' +
    '</svg>';
  }

  function cara(humor, insignia){
    const svg = nombre() === 'R2D2' ? caraRobot(humor) : caraArturo(humor);
    const ins = insignia === false ? '' : (INSIGNIA[insignia] || INSIGNIA[humor] || '');
    return '<span class="arturo__av">' + svg +
      (ins ? '<span class="arturo__insignia">' + ins + '</span>' : '') + '</span>';
  }

  /* Escribe el texto como si lo dijera. Mientras escribe, la tira lleva
     la clase arturo--habla y la cara mueve la boca (o la lente). Con
     "reducir movimiento" activado, el texto aparece entero y sin cara
     animada. Se escribe con textContent: nada de lo que llegue aqui se
     interpreta como HTML. */
  function hablar(caja){
    const p = caja.querySelector('.arturo__texto p');
    if (!p || p.dataset.dicho) return;
    p.dataset.dicho = '1';
    decir(p, caja);
  }

  /* Escribe el texto de p letra a letra y marca caja como "hablando".
     Devuelve una funcion que lo termina de golpe (para el que no quiere
     esperar) o lo corta si la pantalla ya cambio. */
  function decir(p, caja, alAcabar){
    if (p._hablando) p._hablando(true);
    const texto = p.textContent;
    let quieto = false;
    try { quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    if (quieto || texto.length < 2){ if (alAcabar) alAcabar(); return function () {}; }
    p.style.minHeight = p.offsetHeight + 'px';
    p.textContent = '';
    caja.classList.add('arturo--habla');
    const paso = Math.max(1, Math.ceil(texto.length / 70));
    let i = 0, fin = false;
    function acabar(completo){
      if (fin) return;
      fin = true;
      clearInterval(t);
      if (completo) p.textContent = texto;
      caja.classList.remove('arturo--habla');
      p.style.minHeight = '';
      p._hablando = null;
      if (alAcabar) alAcabar();
    }
    const t = setInterval(function () {
      if (!document.body.contains(p)) { acabar(false); return; }
      i = Math.min(texto.length, i + paso);
      p.textContent = texto.slice(0, i);
      if (i >= texto.length) acabar(false);
    }, 18);
    p._hablando = acabar;
    return function () { acabar(true); };
  }

  /* ---------- la tira, para incrustar en cualquier vista ---------- */
  /* op.frase y op.boton permiten que una pantalla concreta ponga el
     remate que le toca (cerrar la lectura, interpretar un resultado) en
     vez del paso generico. */
  function barra(op){
    op = op || {};
    const p = paso();
    const n = nombre();
    const texto = op.frase || p.frase;
    const boton = op.boton === null ? null : (op.boton || p.boton);
    const accion = op.accion || '';
    const humor = op.humor || HUMOR_DE_PASO[p.tipo] || 'neutro';
    return '<div class="arturo arturo--' + humor + '">' +
        cara(humor, op.humor ? op.humor : p.tipo) +
        '<div class="arturo__texto">' +
          '<b>' + esc(n) + '</b>' +
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
    document.querySelectorAll('.arturo').forEach(hablar);
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
    /* Un tema corto no se pregunta solo: se avisa y se sigue leyendo. */
    if (h && Ruta.esCorto(h.tema)){
      const d = Ruta.preguntasDelPaso(h.tema);
      if (d.faltan > 0) UI.tostada('«' + h.tema + '» tiene pocas preguntas propias. Lee ' + d.faltan +
        (d.faltan === 1 ? ' tema más' : ' temas más') + ' y te pregunto de los ' + (d.grupo.length + d.faltan) + ' juntos.');
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
      /* Solo preguntas propias del tema. Un tema corto se pregunta junto
         con otros temas leidos (Ruta.preguntasDelPaso ya las intercala). */
      const d = Ruta.preguntasDelPaso(p.tema);
      if (!d.preguntas.length) return UI.tostada('Este tema todavía no tiene preguntas', 'mal');
      const junto = d.grupo.length > 1;
      const orden = junto ? d.preguntas.slice(0, 12) : d.preguntas.slice().sort(function (a, b) {
        return (b.exp ? 1 : 0) - (a.exp ? 1 : 0);
      }).slice(0, Math.max(10, p.meta || 10));
      return Sesion.iniciar({
        modo: 'aprender', titulo: junto ? d.grupo.join(' · ') : p.tema,
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
    nombre: nombre, cara: cara, decir: decir,
    paso: paso, frase: frase, barra: barra,
    enganchar: enganchar, seguir: seguir,
    cerrarLectura: cerrarLectura, releer: releer,
    examenDeTema: examenDeTema
  };
})();
