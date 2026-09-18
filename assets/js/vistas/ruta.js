/* ============================================================
   LA PANTALLA DE ARTURO
   Tres caras: la de antes de empezar (elegir el tamano de la
   tanda), la del recorrido en marcha, y la del cierre cuando se
   agota el temario.
   ============================================================ */
window.VistaRuta = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  function menu(){
    /* No se invalida nada aqui a proposito. El indice del banco se
       rehace solo cuando cambia su tamano (el ajuste del banco
       extendido), y el emparejamiento por tema cuelga de el. Invalidar
       en cada repintado tiraba ese memo y pintar tardaba tres segundos. */
    const r = Ruta.activa();
    if (!r) return arranque();
    if (r.terminada) return cierre();
    return recorrido();
  }

  /* ---------- 1. antes de empezar ---------- */
  /* Los bloques marcados en la pantalla de arranque. Vive fuera de la
     funcion porque repintamos al marcar y desmarcar para recalcular
     cuantas tandas salen. */
  let elegidos = null;

  /* El tamano de tanda elegido, para que el selector pueda decir cuantas
     tandas sale cada bloque antes de crear nada. */
  let tamElegido = 5;
  function tamActual(){ return tamElegido; }

  /* El selector se usa en dos sitios: esta pantalla y el menu de
     bienvenida de Inicio. Devuelve HTML; quien lo pinta cablea los
     botones con engancharSelector. */
  function selectorBloques(elegidosLista, tam){
    const bls = Ruta.bloquesDisponibles();
    const puestos = elegidosLista.filter(function (n) {
      return bls.some(function (b) { return b.bloque === n; });
    });

    const filas = bls.map(function (b) {
      const i = puestos.indexOf(b.bloque);
      const on = i >= 0;
      const tandas = Ruta._tandas(b.n, tam).length;
      return '<div class="bl-fila' + (on ? ' bl-fila--on' : '') + '">' +
        '<button class="bl-marca" data-bl="' + esc(b.bloque) + '">' +
          (on ? (i + 1) : '') + '</button>' +
        '<span style="font-size:18px">' + b.em + '</span>' +
        '<span class="grow"><b>' + esc(b.bloque) + '</b>' +
          '<small class="muted" style="display:block;font-size:12px">' +
            b.n + ' temas · ' + tandas + ' tanda' + (tandas === 1 ? '' : 's') + '</small></span>' +
        (on ? '<span class="bl-flechas">' +
          '<button class="bl-mover" data-sube="' + esc(b.bloque) + '"' +
            (i === 0 ? ' disabled' : '') + '>↑</button>' +
          '<button class="bl-mover" data-baja="' + esc(b.bloque) + '"' +
            (i === puestos.length - 1 ? ' disabled' : '') + '>↓</button>' +
        '</span>' : '') +
      '</div>';
    }).join('');

    const dentro = bls.filter(function (b) { return puestos.indexOf(b.bloque) >= 0; });
    const temas = dentro.reduce(function (a, b) { return a + b.n; }, 0);
    /* Las tandas se suman POR BLOQUE, que es como las reparte el
       recorrido. Calcularlas sobre el total daria otra cifra en cuanto
       los tamanos no cuadren, y el pie estaria mintiendo. */
    const tandasTotal = dentro.reduce(function (a, b) {
      return a + Ruta._tandas(b.n, tam).length;
    }, 0);

    return '<div class="bl-lista">' + filas + '</div>' +
      '<p class="muted" style="margin-top:12px;font-size:13px">' +
        (temas
          ? 'Tu recorrido: <b>' + temas + ' temas</b> en <b>' + tandasTotal + ' tandas</b>, en ese orden.'
          : 'Marca al menos un bloque.') + '</p>';
  }

  /* Cablea las casillas y las flechas. `lista` se modifica en sitio y
     `repintar` vuelve a dibujar. */
  function engancharSelector(lista, repintar){
    UI.$$('[data-bl]').forEach(function (b) {
      b.onclick = function () {
        const n = b.dataset.bl;
        const i = lista.indexOf(n);
        if (i >= 0) lista.splice(i, 1); else lista.push(n);
        repintar();
      };
    });
    UI.$$('[data-sube]').forEach(function (b) {
      b.onclick = function () {
        const i = lista.indexOf(b.dataset.sube);
        if (i > 0){
          const t = lista[i - 1]; lista[i - 1] = lista[i]; lista[i] = t;
          repintar();
        }
      };
    });
    UI.$$('[data-baja]').forEach(function (b) {
      b.onclick = function () {
        const i = lista.indexOf(b.dataset.baja);
        if (i >= 0 && i < lista.length - 1){
          const t = lista[i + 1]; lista[i + 1] = lista[i]; lista[i] = t;
          repintar();
        }
      };
    });
  }

  function arranque(){
    const bls = Ruta.bloquesDisponibles();
    if (elegidos === null) elegidos = bls.map(function (b) { return b.bloque; });
    const total = bls.filter(function (b) { return elegidos.indexOf(b.bloque) >= 0; })
                     .reduce(function (a, b) { return a + b.n; }, 0);
    const p = Arturo.paso();
    const nombre = Arturo.nombre();

    V().innerHTML =
    '<div class="escalona" style="max-width:900px">' +
      '<div class="encabezado"><p class="eyebrow">Tu profesor</p>' +
      '<h1>' + esc(nombre) + ' te lleva el estudio</h1>' +
      '<p>' + esc(p.frase) + '</p></div>' +

      '<div class="card card--sangria" style="margin-bottom:18px">' +
        '<span class="eyebrow" style="color:rgba(255,255,255,.5)">Cómo funciona</span>' +
        '<h3 style="font-size:23px;margin:8px 0 12px">Estudiar, medirse, avanzar</h3>' +
        '<p style="color:rgba(255,255,255,.78);font-size:14.5px">De cada tema se leen sus apuntes, se hacen sus preguntas y se pasan sus tarjetas. Cuando la tanda entera está hecha, entra un examen de esos mismos temas con algo de lo anterior mezclado. Lo que salga flojo vuelve solo en los exámenes siguientes. Y así hasta agotar los ' + total + ' temas del programa.</p>' +
      '</div>' +

      '<div class="card" style="margin-bottom:18px">' +
        '<span class="eyebrow">Qué quieres estudiar, y en qué orden</span>' +
        '<p class="muted" style="margin:8px 0 14px;font-size:13.5px">Marca los bloques y ordénalos con las flechas. Cerrarás uno antes de pasar al siguiente. Fíjate en los números de cada bloque: el orden cambia mucho cuándo llegas a la primera puerta.</p>' +
        selectorBloques(elegidos, tamActual()) +
      '</div>' +

      '<div class="card">' +
        '<span class="eyebrow">Cuántos temas quieres llevar a la vez</span>' +
        '<p class="muted" style="margin:8px 0 14px;font-size:13.5px">Tandas cortas dan más exámenes y más sensación de avance. Tandas largas se parecen más al examen real. Se puede cambiar después rehaciendo el recorrido.</p>' +
        '<div style="display:flex;flex-direction:column;gap:9px">' +
          opcion(3, 'Tandas cortas', total) +
          opcion(5, 'El ritmo recomendado', total) +
          opcion(8, 'Tandas largas', total) +
          opcion(10, 'Lo más parecido al examen', total) +
        '</div>' +
        '<div class="row" style="gap:9px;margin-top:16px;align-items:center">' +
          '<span class="muted" style="font-size:13px">O a medida:</span>' +
          '<input id="rutaTam" type="number" min="2" max="20" value="5" style="width:80px">' +
          '<button class="btn btn--sm btn--fantasma" id="rutaMedida">Crear con ese tamaño</button>' +
        '</div>' +
      '</div>' +
    '</div>';

    engancharSelector(elegidos, arranque);
    UI.$$('[data-tam]').forEach(function (b) {
      b.onclick = function () { tamElegido = +b.dataset.tam; empezar(tamElegido); };
    });
    document.getElementById('rutaMedida').onclick = function () {
      tamElegido = +document.getElementById('rutaTam').value;
      empezar(tamElegido);
    };
  }

  function opcion(tam, texto, total){
    const tandas = Ruta._tandas(total, tam).length;
    return '<button class="accion-clinica" data-tam="' + tam + '">' +
      '<span class="em">📚</span>' +
      '<span class="grow"><b>' + tam + ' temas por tanda</b>' +
      '<small>' + esc(texto) + ' · ' + tandas + ' tandas hasta terminar</small></span>→</button>';
  }

  function empezar(tam){
    if (!elegidos.length) return UI.tostada('Marca al menos un bloque', 'mal');
    Ruta.crear(tam, elegidos);
    UI.tostada('Recorrido creado. ' + Arturo.nombre() + ' te espera.', 'ok');
    menu();
  }

  /* ---------- 2. el recorrido en marcha ---------- */
  function recorrido(){
    const r = Ruta.activa();
    const av = Ruta.avance();
    const ta = Ruta.tandaActual();
    const soloExamen = r.vuelta >= 2;

    const filas = ta.temas.map(function (f, i) {
      return '<div class="ruta__tema' + (f.completo ? ' ruta__tema--ok' : '') + '">' +
        '<span class="ruta__n">' + (i + 1) + '</span>' +
        '<span class="grow">' +
          '<b style="display:block;font-size:14px">' + esc(f.tema) + '</b>' +
          '<small class="muted">' + esc(f.em + ' ' + f.bloque) + '</small>' +
        '</span>' +
        (soloExamen ? '' :
          casilla(f.tema, 'leer', '📖', f.leer.hecho, f.leer.sinTexto ? 'sin texto' : 'leer') +
          casilla(f.tema, 'preg', '📝', f.preg.hecho, f.preg.hechas + '/' + f.preg.meta) +
          casilla(f.tema, 'tarj', '⚡', f.tarj.hecho, f.tarj.hechas + '/' + f.tarj.meta)) +
        /* Cerrado el tema se puede medir en caliente, sin esperar al
           examen de la tanda. Si ya se hizo, se ve la nota. */
        (f.completo
          ? (Ruta.notaDeTema(f.tema) === null
              ? '<button class="btn btn--sm btn--fantasma" data-examen="' + esc(f.tema) + '">Examinarme</button>'
              : '<span class="chip ' + (Ruta.notaDeTema(f.tema) >= 60 ? 'chip--verde' : 'chip--sangria') +
                '" data-examen="' + esc(f.tema) + '" style="cursor:pointer">' +
                Ruta.notaDeTema(f.tema) + '%</span>')
          : '') +
      '</div>';
    }).join('');

    const historial = r.historial.slice().reverse().map(function (h) {
      return '<div class="item-lista"><span class="item-lista__n">Tanda ' + h.n + '</span>' +
        '<span class="grow"><b style="display:block">' + h.pct + '% · ' + h.correctas + '/' + h.total + '</b>' +
        '<small class="muted">' + esc(h.temas.slice(0, 3).join(', ')) +
        (h.temas.length > 3 ? ' y ' + (h.temas.length - 3) + ' más' : '') + '</small></span>' +
        '<span class="chip ' + (h.pct >= 70 ? 'chip--verde' : h.pct >= 50 ? 'chip--yodo' : 'chip--sangria') + '">' +
        (h.flojos.length ? h.flojos.length + ' flojo' + (h.flojos.length === 1 ? '' : 's') : 'limpio') +
        '</span></div>';
    }).join('') || '<p class="muted">Todavía no has cerrado ninguna tanda.</p>';

    const avisoRepaso = r.repaso.length
      ? '<div class="card card--yodo" style="margin-bottom:18px">' +
        '<span class="eyebrow">Pendiente de recuperar</span>' +
        '<p style="margin:6px 0 12px">' + r.repaso.length + ' tema' + (r.repaso.length === 1 ? '' : 's') +
        ' no llegaron al 60% en su examen: ' + esc(r.repaso.slice(0, 4).join(', ')) +
        (r.repaso.length > 4 ? ' y ' + (r.repaso.length - 4) + ' más' : '') +
        '. Vuelven solos en los próximos exámenes.</p>' +
        '<button class="btn btn--sm" id="rutaRepasar">Entrenarlos ahora</button></div>'
      : '';

    const avisoPerdidos = ta.perdidos
      ? '<p class="muted" style="margin-top:12px;font-size:12.5px">' + ta.perdidos +
        ' tema(s) de tu recorrido ya no están en el temario y se saltan.</p>'
      : '';

    /* El temario puede crecer mientras alguien va por la tanda 7. Los
       temas nuevos no se cuelan en medio (correrian el cursor): se
       ofrecen para el final del recorrido. */
    /* La tira de bloques: donde estas, que cerraste y que falta. Solo
       tiene sentido en modo bloques. */
    const tiraBloques = Ruta.porBloques()
      ? '<div class="card" style="margin-bottom:18px">' +
        '<span class="eyebrow">Tu recorrido por bloques</span>' +
        '<div class="bl-tira">' +
          r.bloques.map(function (n) {
            const e = Ruta.estadoBloque(n);
            const cls = e.cerrado ? ' bl-paso--ok' : e.disponible ? ' bl-paso--act' : '';
            return '<div class="bl-paso' + cls + '">' +
              '<b>' + esc(n) + '</b>' +
              '<small>' + (e.cerrado ? '✓ cerrado · ' + e.pct + '%'
                         : e.disponible ? e.hechos + ' de ' + e.total + ' temas'
                         : '🔒 ' + e.total + ' temas') + '</small>' +
            '</div>';
          }).join('') +
        '</div></div>'
      : '';

    /* Con todos los temas del bloque hechos, el examen de tanda deja
       paso al del bloque: es el que abre la puerta. */
    const bAct = Ruta.porBloques() ? Ruta.bloqueActual() : null;
    const eAct = bAct ? Ruta.estadoBloque(bAct) : null;
    const tocaExamenBloque = !!(eAct && eAct.completo && !eAct.cerrado);
    const nExBloque = tocaExamenBloque ? Ruta.tamExamenDeBloque(bAct) : 0;

    const bloqueExamenBloque = tocaExamenBloque
      ? '<div class="card card--sangria" style="margin-bottom:18px">' +
        '<span class="eyebrow" style="color:rgba(255,255,255,.5)">Examen del bloque</span>' +
        '<h3 style="font-size:23px;margin:8px 0 10px">' + esc(bAct) + '</h3>' +
        '<p style="color:rgba(255,255,255,.78);font-size:14.5px">Tienes los ' + eAct.total +
        ' temas hechos. Este examen sale de todo el bloque, no solo de la última tanda, y hace falta un 60% para abrir el siguiente. Si no llega, puedes repetirlo.</p>' +
        '<p style="color:rgba(255,255,255,.6);font-size:13px;margin-top:8px">' +
          nExBloque + ' preguntas · ' + Ruta.minutosDeBloque(bAct) + ' minutos</p>' +
        '<button class="btn btn--claro" style="margin-top:14px" id="rutaSimBloque">Empezar el examen del bloque</button>' +
      '</div>'
      : '';

    const nuevos = Ruta.temasNuevos();
    const avisoNuevos = nuevos.length
      ? '<div class="card card--suero" style="margin-bottom:18px">' +
        '<span class="eyebrow">Temario ampliado</span>' +
        '<p style="margin:6px 0 12px">Hay ' + nuevos.length + ' tema' +
        (nuevos.length === 1 ? '' : 's') + ' nuevo' + (nuevos.length === 1 ? '' : 's') +
        ' que no estaban cuando creaste el recorrido: ' + esc(nuevos.slice(0, 3).join(', ')) +
        (nuevos.length > 3 ? ' y ' + (nuevos.length - 3) + ' más' : '') +
        '. Puedo añadirlos al final sin tocar lo que llevas.</p>' +
        '<button class="btn btn--sm" id="rutaAbsorber">Añadirlos al recorrido</button></div>'
      : '';

    V().innerHTML =
    '<div class="escalona" style="max-width:1000px">' +
      '<div class="encabezado"><p class="eyebrow">' +
        (soloExamen ? 'Segunda vuelta' : 'Tu recorrido') + '</p>' +
      '<h1>Tanda ' + av.tanda + ' de ' + av.tandas + '</h1>' +
      '<p>Llevas ' + av.temasCerrados + ' de ' + av.total + ' temas cerrados.</p></div>' +

      Arturo.barra() +
      tiraBloques +

      '<div class="card" style="margin:18px 0">' +
        '<div class="row-b" style="margin-bottom:8px"><span class="eyebrow">Avance por el temario</span>' +
        '<span class="mono">' + av.temasCerrados + ' / ' + av.total + '</span></div>' +
        UI.barra(av.pct) +
      '</div>' +

      avisoRepaso +
      avisoNuevos +

      '<div class="card" style="margin-bottom:18px">' +
        '<span class="eyebrow">Los temas de esta tanda</span>' +
        (soloExamen
          ? '<p class="muted" style="margin:8px 0 0;font-size:13.5px">En la segunda vuelta no se repiten los tres pasos: ya los hiciste. El examen está abierto desde ahora.</p>'
          : '<p class="muted" style="margin:8px 0 0;font-size:13.5px">Cada tema se cierra con sus tres pasos. Toca cualquiera para ir.</p>') +
        '<div class="ruta__lista" style="margin-top:14px">' + filas + '</div>' +
        avisoPerdidos +
      '</div>' +

      bloqueExamenBloque +

      (tocaExamenBloque ? '' :
      '<div class="card' + (ta.completa ? ' card--sangria' : '') + '" style="margin-bottom:18px">' +
        '<span class="eyebrow"' + (ta.completa ? ' style="color:rgba(255,255,255,.5)"' : '') + '>Examen de la tanda</span>' +
        '<h3 style="font-size:22px;margin:8px 0 10px">' + Ruta.tamanoSimulacro() + ' preguntas · ' +
          Ruta.minutosDeTanda() + ' minutos</h3>' +
        '<p style="font-size:14px' + (ta.completa ? ';color:rgba(255,255,255,.75)' : '') + '">Siete de cada diez preguntas salen de los temas de esta tanda; el resto, de lo que ya cerraste. Con reloj y sin explicación hasta el final.</p>' +
        (ta.completa
          ? '<button class="btn btn--claro" style="margin-top:14px" id="rutaSim">Empezar el examen</button>'
          : '<p class="muted" style="margin-top:12px;font-size:13px">Se abre cuando los ' + ta.temas.length + ' temas estén cerrados.</p>') +
      '</div>') +

      '<div class="card"><span class="eyebrow">Tandas cerradas</span>' +
      '<div style="display:flex;flex-direction:column;gap:9px;margin-top:14px">' + historial + '</div></div>' +

      '<div class="row" style="margin-top:18px">' +
        '<button class="btn btn--fantasma btn--sm" id="rutaRehacer">Rehacer el recorrido</button>' +
      '</div>' +
    '</div>';

    Arturo.enganchar();

    UI.$$('[data-paso]').forEach(function (b) {
      b.onclick = function () {
        Ruta.abrirHilo(b.dataset.tema);
        lanzarPaso(b.dataset.tema, b.dataset.paso);
      };
    });

    UI.$$('[data-examen]').forEach(function (b) {
      b.onclick = function (e) { e.stopPropagation(); examenDeTema(b.dataset.examen); };
    });

    const rep = document.getElementById('rutaRepasar');
    if (rep) rep.onclick = function () {
      const ids = {};
      const qs = [];
      r.repaso.forEach(function (t) {
        Ruta.preguntasDe(t).forEach(function (q) {
          if (!ids[q.id] && q.exp){ ids[q.id] = 1; qs.push(q); }
        });
      });
      if (!qs.length) return UI.tostada('No hay preguntas explicadas de esos temas', 'mal');
      Sesion.iniciar({ modo:'aprender', titulo:'Temas por recuperar',
        preguntas: qs.sort(function () { return Math.random() - 0.5; }).slice(0, 20) });
    };

    const abs = document.getElementById('rutaAbsorber');
    if (abs) abs.onclick = function () {
      const n = Ruta.absorber();
      UI.tostada(n + ' tema(s) añadidos al final del recorrido', 'ok');
      menu();
    };

    const sb = document.getElementById('rutaSimBloque');
    if (sb) sb.onclick = function () { empezarExamenDeBloque(bAct); };

    const sim = document.getElementById('rutaSim');
    if (sim) sim.onclick = empezarSimulacro;

    document.getElementById('rutaRehacer').onclick = function () {
      UI.modal('<h3 style="font-size:22px;margin-bottom:10px">¿Rehacer el recorrido?</h3>' +
        '<p class="muted">Se borra el recorrido y su historial de tandas. Lo que has estudiado no se pierde: los temas que ya tengas hechos aparecerán cerrados desde el primer día.</p>' +
        '<div class="row" style="margin-top:20px;gap:9px">' +
        '<button class="btn btn--fantasma grow" onclick="this.closest(\'.velo\').remove()">Dejarlo como está</button>' +
        '<button class="btn grow" id="rutaConfirmarRehacer">Rehacer</button></div>');
      document.getElementById('rutaConfirmarRehacer').onclick = function () {
        document.querySelector('.velo').remove();
        Ruta.borrar();
        menu();
      };
    };
  }

  function casilla(tema, paso, em, hecho, texto){
    return '<button class="ruta__paso' + (hecho ? ' ruta__paso--ok' : '') + '" ' +
      'data-tema="' + esc(tema) + '" data-paso="' + paso + '" title="' + esc(texto) + '">' +
      '<span>' + (hecho ? '✓' : em) + '</span>' +
      '<small>' + esc(texto) + '</small></button>';
  }

  function lanzarPaso(tema, paso){
    if (paso === 'leer'){
      const k = Ruta.claveApunte(tema);
      if (!k) return UI.tostada('Este tema todavía no tiene texto escrito', 'mal');
      App.ir('estudiar');
      return Apuntes.abrir(k);
    }
    if (paso === 'preg'){
      const qs = Ruta.preguntasDe(tema);
      if (!qs.length) return UI.tostada('Este tema todavía no tiene preguntas', 'mal');
      const orden = qs.slice().sort(function (a, b) { return (b.exp ? 1 : 0) - (a.exp ? 1 : 0); }).slice(0, 10);
      return Sesion.iniciar({ modo:'aprender', titulo:tema,
        preguntas: orden.sort(function () { return Math.random() - 0.5; }) });
    }
    const cs = Ruta.tarjetasDe(tema);
    if (!cs.length) return UI.tostada('Este tema todavía no tiene flashcards', 'mal');
    Flashcards.iniciar({ n:12, titulo:tema, ids: cs.map(function (c) { return c.id; }) });
  }

  /* Examen corto de UN tema, para medirse recien cerrado en vez de
     esperar al de la tanda. No mueve el recorrido: solo deja nota y, si
     se suspende, adelanta la entrada en la cola de repaso. */
  function examenDeTema(tema){
    const preguntas = Ruta.examenDeTema(tema);
    if (!preguntas.length) return UI.tostada('Este tema no tiene preguntas para examinarte', 'mal');
    const min = Ruta.minutosDeTema(tema);

    UI.modal('<p class="eyebrow">Examen del tema</p>' +
      '<h3 style="font-size:22px;margin:4px 0 10px">' + esc(tema) + '</h3>' +
      '<p class="muted">' + preguntas.length + ' preguntas · ' + min + ' minutos. Con reloj y sin explicación hasta el final. Si sacas 60% o más queda cerrado; si no, te lo devuelvo mezclado más adelante.</p>' +
      '<div class="row" style="margin-top:20px;gap:9px">' +
      '<button class="btn btn--fantasma grow" onclick="this.closest(\'.velo\').remove()">Todavía no</button>' +
      '<button class="btn grow" id="rutaEmpezarTema">Empezar</button></div>');

    document.getElementById('rutaEmpezarTema').onclick = function () {
      document.querySelector('.velo').remove();
      Ruta.abrirHilo(tema);
      Sesion.iniciar({
        modo: 'examen',
        titulo: tema,
        preguntas: preguntas,
        tiempoTotal: min * 60000,
        etiqueta: 'Tema · ' + tema,
        alTerminar: function (res) { Ruta.cerrarExamenDeTema(tema, res); }
      });
    };
  }

  /* El examen que abre la puerta al bloque siguiente. */
  function empezarExamenDeBloque(nombre){
    const preguntas = Ruta.examenDeBloque(nombre);
    if (!preguntas.length) return UI.tostada('Este bloque no tiene preguntas para examinarte', 'mal');
    const min = Ruta.minutosDeBloque(nombre);

    UI.modal('<p class="eyebrow">Examen del bloque</p>' +
      '<h3 style="font-size:23px;margin:4px 0 10px">' + esc(nombre) + '</h3>' +
      '<p class="muted">' + preguntas.length + ' preguntas · ' + min + ' minutos, de todo el bloque. Con 60% o más se cierra y se abre el siguiente. Si no llega, lo repites cuando quieras, y los temas que salgan flojos volverán mezclados.</p>' +
      '<div class="row" style="margin-top:20px;gap:9px">' +
      '<button class="btn btn--fantasma grow" onclick="this.closest(\'.velo\').remove()">Todavía no</button>' +
      '<button class="btn grow" id="rutaEmpezarBloque">Empezar</button></div>');

    document.getElementById('rutaEmpezarBloque').onclick = function () {
      document.querySelector('.velo').remove();
      Sesion.iniciar({
        modo: 'examen',
        titulo: 'Examen de ' + nombre,
        preguntas: preguntas,
        tiempoTotal: min * 60000,
        etiqueta: 'Bloque · ' + nombre,
        alTerminar: function (res) {
          const rr = Ruta.cerrarExamenDeBloque(nombre, res);
          UI.tostada(rr.aprobado
            ? '¡Bloque cerrado con ' + rr.pct + '%! Se abre el siguiente.'
            : rr.pct + '%: hace falta 60% para abrir el siguiente. Puedes repetirlo.',
            rr.aprobado ? 'ok' : 'mal');
        }
      });
    };
  }

  function empezarSimulacro(){
    const preguntas = Ruta.simulacroDeTanda();
    if (!preguntas.length) return UI.tostada('No se pudo armar el examen', 'mal');
    const min = Ruta.minutosDeTanda();
    const tanda = Ruta.activa().tanda;

    UI.modal('<h3 style="font-size:22px;margin-bottom:10px">' + preguntas.length +
      ' preguntas · ' + min + ' minutos</h3>' +
      '<p class="muted">' + esc(Arturo.frase('simulacro', { tanda: tanda })) + '</p>' +
      '<div class="row" style="margin-top:20px;gap:9px">' +
      '<button class="btn btn--fantasma grow" onclick="this.closest(\'.velo\').remove()">Todavía no</button>' +
      '<button class="btn grow" id="rutaEmpezarSim">Empezar ahora</button></div>');

    document.getElementById('rutaEmpezarSim').onclick = function () {
      document.querySelector('.velo').remove();
      Sesion.iniciar({
        modo: 'examen',
        titulo: 'Examen de la tanda ' + tanda,
        preguntas: preguntas,
        tiempoTotal: min * 60000,
        etiqueta: 'Ruta · tanda ' + tanda,
        alTerminar: function (res) { Ruta.cerrarTanda(res); }
      });
    };
  }

  /* ---------- 3. el cierre ---------- */
  function cierre(){
    const r = Ruta.activa();
    const medias = r.historial.map(function (h) { return h.pct; });
    const media = medias.length
      ? Math.round(medias.reduce(function (a, c) { return a + c; }, 0) / medias.length) : 0;

    V().innerHTML =
    '<div class="escalona" style="max-width:900px">' +
      '<div class="encabezado"><p class="eyebrow">Recorrido terminado</p>' +
      '<h1>Cerraste el temario completo</h1>' +
      '<p>' + esc(Arturo.frase('fin', {})) + '</p></div>' +

      '<div class="rejilla rejilla--3" style="margin-bottom:18px">' +
        '<div class="metrica"><b>' + r.orden.length + '</b><span>Temas recorridos</span></div>' +
        '<div class="metrica"><b>' + r.historial.length + '</b><span>Tandas cerradas</span></div>' +
        '<div class="metrica"><b>' + media + '%</b><span>Media de los exámenes</span></div>' +
      '</div>' +

      (r.repaso.length
        ? '<div class="card card--yodo" style="margin-bottom:18px"><span class="eyebrow">Lo que quedó flojo</span>' +
          '<p style="margin-top:6px">' + esc(r.repaso.join(', ')) + '</p></div>'
        : '<div class="card card--verde" style="margin-bottom:18px"><b>Ningún tema quedó por debajo del 60%.</b></div>') +

      '<div class="row wrap" style="gap:9px">' +
        '<button class="btn" id="rutaVuelta">Segunda vuelta</button>' +
        '<button class="btn btn--fantasma" id="rutaSimFinal">Simulacro completo de 100</button>' +
      '</div>' +
    '</div>';

    document.getElementById('rutaVuelta').onclick = function () {
      Ruta.segundaVuelta();
      UI.tostada('Segunda vuelta: solo exámenes, empezando por lo flojo', 'ok');
      menu();
    };
    document.getElementById('rutaSimFinal').onclick = function () { App.ir('simulacro'); };
  }

  return { menu: menu, examenDeTema: examenDeTema,
           selectorBloques: selectorBloques, engancharSelector: engancharSelector };
})();
