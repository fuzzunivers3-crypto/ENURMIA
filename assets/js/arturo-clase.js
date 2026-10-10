/* ============================================================
   ARTURO EXPLICA — la clase paso a paso
   Cuando una pregunta no entra, Arturo abre una pantalla central y
   la desmonta con el estudiante: que se pregunta, cual es el dato
   que decide, por que la correcta lo es, por que las otras fallan y
   donde esta la trampa.

   Los pasos se arman con lo que la pregunta ya trae escrito (caso,
   clave, exp, no, trampa, obj, ref). No necesita internet ni IA.
   Si hay nube y cuota, el ultimo paso ofrece ademas contarlo por
   otro angulo con ArturoIA.

   Armar los pasos (pasos) no toca el DOM: se puede validar en Node.

   LECCIONES: la misma pantalla sirve para explicar un tema de los
   bloques de Medicina practica (ArturoClase.leccion). Cada paso trae
   su escena ya pintada (html) y la leccion puede cerrar con un paso
   de comprobacion: una mini pregunta que, si se acierta, avisa con
   alAprobar (el bloque lo cuenta como estudiado).
   ============================================================ */
window.ArturoClase = (function () {

  const L = ['A', 'B', 'C', 'D', 'E', 'F'];

  /* Algunas explicaciones traen *enfasis* con asteriscos; Arturo lo dice,
     no lo deletrea. */
  function limpio(s){ return String(s == null ? '' : s).replace(/\*([^*]+)\*/g, '$1'); }

  function esc(s){
    if (window.UI && UI.esc) return UI.esc(s);
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
    });
  }

  /* ---------- trocear la explicacion ----------
     Una explicacion larga dicha de un tiron no es una clase. Se parte
     en frases y se agrupan en trozos de unos 230 caracteres, con tope
     de 4 trozos para que no se haga eterna. */
  function trozos(texto){
    const t = limpio(texto).trim();
    if (!t) return [];
    const frases = t.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ¿¡0-9])/);
    const meta = Math.max(230, Math.ceil(t.length / 4));
    const out = [];
    let actual = '';
    frases.forEach(function (f) {
      if (actual && (actual + ' ' + f).length > meta){ out.push(actual); actual = f; }
      else actual = actual ? actual + ' ' + f : f;
    });
    if (actual) out.push(actual);
    return out;
  }

  /* ---------- los pasos ----------
     Cada paso: { titulo, humor, voz, escena }. escena es una descripcion
     (no HTML): el pintado decide como se dibuja. */
  function pasos(q, elegida){
    const out = [];
    const tuvoMarca = (elegida !== null && elegida !== undefined && elegida !== q.ok);
    const nombre = (window.Arturo && Arturo.nombre) ? Arturo.nombre() : 'Arturo';

    out.push({
      titulo: 'Qué te están preguntando',
      humor: tuvoMarca ? 'neutro' : 'atento',
      voz: tuvoMarca
        ? 'Vamos a verlo juntos. Marcaste la ' + L[elegida] + ', y no pasa nada: lo importante es ver dónde se tuerce. Primero, qué te están preguntando.'
        : 'Vamos a verlo juntos, sin prisa. Primero, qué te están preguntando.',
      escena: { tipo: 'enunciado' }
    });

    if (q.clave){
      out.push({
        titulo: 'El dato que decide',
        humor: 'atento',
        voz: 'Toda la pregunta se resuelve con una sola idea. Fíjate bien en esta.',
        escena: { tipo: 'clave' }
      });
    }

    const partes = trozos(q.exp);
    partes.forEach(function (p, i) {
      out.push({
        titulo: partes.length > 1
          ? 'Por qué es la ' + L[q.ok] + ' (' + (i + 1) + '/' + partes.length + ')'
          : 'Por qué es la ' + L[q.ok],
        humor: 'neutro',
        voz: p,
        escena: { tipo: 'opciones', modo: 'correcta' }
      });
    });

    const noMapa = q.no || {};
    if (tuvoMarca && noMapa[elegida] !== undefined){
      out.push({
        titulo: 'Por qué la ' + L[elegida] + ' no era',
        humor: 'preocupado',
        voz: limpio(noMapa[elegida]),
        escena: { tipo: 'opciones', modo: 'tuya', elegida: elegida }
      });
    }

    const otras = Object.keys(noMapa).map(Number).filter(function (k) {
      return k !== q.ok && !(tuvoMarca && k === elegida);
    }).sort();
    if (otras.length){
      out.push({
        titulo: 'Las otras opciones, una por una',
        humor: 'neutro',
        voz: otras.length === 1 ? 'Y la que queda, rápido.' : 'Y las otras, rápido. Mira cómo caen una por una.',
        escena: { tipo: 'descartes', claves: otras }
      });
    }

    if (q.trampa){
      out.push({
        titulo: 'La trampa',
        humor: 'atento',
        voz: limpio(q.trampa),
        escena: { tipo: 'trampa' }
      });
    }

    out.push({
      titulo: 'Para llevarte',
      humor: 'feliz',
      voz: 'Si solo te quedas con una cosa de esta pregunta, que sea esto.',
      escena: { tipo: 'cierre' },
      ultimo: true
    });

    return out;
  }

  /* ---------- las escenas ---------- */
  function opciones(q, modo, elegida){
    return '<div class="opciones cl-ops">' + (q.ops || []).map(function (o, k) {
      let c = 'opcion cl-op';
      if (modo === 'correcta') c += k === q.ok ? ' correcta cl-op--luce' : ' apagada';
      else if (modo === 'tuya') c += k === elegida ? ' incorrecta' : (k === q.ok ? ' correcta' : ' apagada');
      return '<div class="' + c + '" style="--d:' + (k * 0.09).toFixed(2) + 's">' +
        '<span class="opcion__letra">' + L[k] + '</span>' +
        '<span class="opcion__texto">' + esc(o) + '</span></div>';
    }).join('') + '</div>';
  }

  function escena(q, e){
    if (e.tipo === 'enunciado'){
      return (q.caso ? '<p class="cl-caso">' + esc(q.caso) + '</p>' : '') +
        '<h3 class="cl-enun">' + esc(q.enunciado) + '</h3>';
    }
    if (e.tipo === 'clave'){
      return '<div class="cl-clave"><span class="cl-clave__ico">🔑</span><p>' + esc(limpio(q.clave)) + '</p></div>';
    }
    if (e.tipo === 'opciones') return opciones(q, e.modo, e.elegida);
    if (e.tipo === 'descartes'){
      return '<div class="cl-descartes">' + e.claves.map(function (k, i) {
        return '<div class="cl-descarte" style="--d:' + (0.25 + i * 0.7).toFixed(2) + 's">' +
          '<div class="cl-descarte__op"><span class="opcion__letra">' + L[k] + '</span>' +
          '<span class="cl-descarte__txt">' + esc(q.ops[k]) + '</span></div>' +
          '<p><b>✕</b> ' + esc(limpio(q.no[k])) + '</p></div>';
      }).join('') + '</div>';
    }
    if (e.tipo === 'trampa'){
      return '<div class="cl-trampa"><span class="cl-trampa__ico">⚠️</span>' +
        '<div><b>Aquí es donde cae la gente</b>' +
        (q.dx && q.dx.length
          ? '<div class="cl-chips">' + q.dx.map(function (d) { return '<span class="chip">' + esc(d) + '</span>'; }).join('') + '</div>'
          : '') + '</div></div>';
    }
    if (e.tipo === 'cierre'){
      return (q.clave ? '<div class="cl-clave"><span class="cl-clave__ico">🔑</span><p>' + esc(limpio(q.clave)) + '</p></div>' : '') +
        (q.obj ? '<p class="cl-obj"><b>Recuerda:</b> ' + esc(limpio(q.obj)) + '</p>' : '') +
        (q.ref ? '<p class="cl-ref">' + esc(q.ref) + '</p>' : '');
    }
    if (e.tipo === 'otroangulo'){
      return '<div class="cl-otro"><p>' + esc(e.texto) + '</p></div>';
    }
    if (e.tipo === 'pensando'){
      return '<div class="cl-pensando"><i></i><i></i><i></i></div>';
    }
    if (e.tipo === 'html') return e.html || '';
    if (e.tipo === 'comprueba'){
      const c = e.c;
      return '<p class="cl-comprueba__q">' + esc(c.q) + '</p>' +
        '<div class="opciones cl-ops cl-comprueba">' + c.ops.map(function (o, k) {
          return '<button class="opcion cl-op cl-op--elige" data-cl="' + k + '" style="--d:' + (k * 0.08).toFixed(2) + 's">' +
            '<span class="opcion__letra">' + L[k] + '</span><span class="opcion__texto">' + esc(o) + '</span></button>';
        }).join('') + '</div><div class="cl-comprueba__res"></div>';
    }
    return '';
  }

  /* ---------- la pantalla ---------- */
  let abierta = null;

  /* Clase de una pregunta (el boton "Aun no lo entiendo"). */
  function abrir(q, elegida){
    if (!q || !q.exp || !window.document) return;
    const lista = pasos(q, elegida);
    const ya = (window.ArturoIA) ? ArturoIA.guardada(q.id, elegida) : null;
    abrirLista(lista, {
      titulo: null,
      escena: function (p) { return escena(q, p.escena); },
      ia: { q: q, elegida: elegida },
      otroYa: ya
    });
  }

  /* Leccion de un tema de Medicina practica.
     L = { titulo, pasos:[{titulo, humor, voz, html}], comprueba:{q, ops, ok, exp}, alAprobar } */
  function leccion(L){
    if (!L || !L.pasos || !L.pasos.length || !window.document) return;
    const lista = L.pasos.map(function (p) { return { titulo: p.titulo, humor: p.humor || 'atento', voz: p.voz, escena: { tipo: 'html', html: p.html } }; });
    if (L.comprueba && L.comprueba.ops && L.comprueba.ops.length > 1){
      lista.push({ titulo: 'Comprueba que lo tienes', humor: 'atento', voz: 'Ahora tú. Una sola pregunta para ver si se quedó.',
        escena: { tipo: 'comprueba', c: L.comprueba }, comprueba: true });
    }
    lista[lista.length - 1].ultimo = true;
    abrirLista(lista, {
      titulo: L.titulo || null,
      escena: function (p) { return escena(null, p.escena); },
      alAprobar: L.alAprobar
    });
  }

  function abrirLista(lista, op){
    if (abierta) abierta.cerrar();
    const nombre = Arturo.nombre();
    if (op.otroYa) agregarOtro(op.otroYa);
    let i = 0, pararVoz = null, cargandoIA = false;

    const velo = document.createElement('div');
    velo.className = 'velo clase-velo';
    velo.innerHTML =
      '<div class="clase" role="dialog" aria-modal="true" aria-label="' + esc(nombre) + ' te lo explica">' +
        '<div class="clase__cab">' +
          '<b>' + esc(nombre) + ' te lo explica' + (op.titulo ? ' · ' + esc(op.titulo) : '') + '</b>' +
          '<span class="clase__paso mono"></span>' +
          '<button class="clase__x" aria-label="Cerrar">✕</button>' +
          '<div class="clase__prog"><i></i></div>' +
        '</div>' +
        '<div class="clase__cuerpo">' +
          '<div class="clase__av"></div>' +
          '<div class="clase__col">' +
            '<div class="clase__voz arturo"><div class="arturo__texto"><p></p></div></div>' +
            '<div class="clase__titulo"></div>' +
            '<div class="clase__escena"></div>' +
          '</div>' +
        '</div>' +
        '<div class="clase__pie">' +
          '<button class="btn btn--fantasma btn--sm" id="claseAtras">← Atrás</button>' +
          '<span class="grow"></span>' +
          '<button class="btn btn--fantasma btn--sm" id="claseOtro" hidden>Explícamelo de otra forma</button>' +
          '<button class="btn" id="claseSig">Siguiente →</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(velo);

    const $ = function (s) { return velo.querySelector(s); };
    const voz = $('.clase__voz'), vozP = voz.querySelector('p');
    const btnSig = $('#claseSig'), btnAtras = $('#claseAtras'), btnOtro = $('#claseOtro');

    function agregarOtro(texto){
      const hay = lista.findIndex(function (p) { return p.escena.tipo === 'otroangulo'; });
      const paso = {
        titulo: 'De otra forma', humor: 'atento',
        voz: 'Mira, dicho de otra manera.',
        escena: { tipo: 'otroangulo', texto: texto }, ultimo: true
      };
      lista.forEach(function (p) { p.ultimo = false; });
      if (hay >= 0) lista.splice(hay, 1);
      lista.push(paso);
    }

    function puedeIA(){
      return !!(op.ia && window.ArturoIA && (ArturoIA.disponible()) && !lista.some(function (p) { return p.escena.tipo === 'otroangulo'; }));
    }

    function pintar(humorForzado){
      const p = lista[i];
      const humor = humorForzado || p.humor;
      $('.clase__av').innerHTML = Arturo.cara(humor, false);
      $('.clase__paso').textContent = (i + 1) + ' / ' + lista.length;
      $('.clase__prog i').style.width = Math.round((i + 1) / lista.length * 100) + '%';
      $('.clase__titulo').textContent = p.titulo;
      const esc_ = $('.clase__escena');
      esc_.innerHTML = op.escena(p);
      if (p.comprueba) engancharComprueba(p);
      esc_.classList.remove('clase__escena--nueva'); void esc_.offsetWidth;
      esc_.classList.add('clase__escena--nueva');
      btnAtras.disabled = i === 0;
      btnSig.textContent = p.comprueba && !p.respondida ? 'Saltar' : (p.ultimo ? '¡Entendido!' : 'Siguiente →');
      btnOtro.hidden = !(p.ultimo && puedeIA());
      /* Primero se corta la voz anterior: si no, al terminar de golpe
         reescribiria su texto encima del nuevo. */
      if (pararVoz) pararVoz();
      vozP.textContent = p.voz;
      voz.classList.remove('clase__voz--nueva'); void voz.offsetWidth;
      voz.classList.add('clase__voz--nueva');
      pararVoz = Arturo.decir(vozP, voz);
    }

    /* paso de comprobacion: elegir una opcion la corrige ahi mismo */
    function engancharComprueba(p){
      const c = p.escena.c;
      velo.querySelectorAll('[data-cl]').forEach(function (b) {
        b.onclick = function () {
          if (p.respondida) return;
          const k = +b.dataset.cl, bien = k === c.ok;
          p.respondida = true;
          velo.querySelectorAll('[data-cl]').forEach(function (x) {
            const kk = +x.dataset.cl; x.disabled = true;
            x.classList.add(kk === c.ok ? 'correcta' : (kk === k ? 'incorrecta' : 'apagada'));
          });
          $('.clase__escena .cl-comprueba__res').innerHTML = '<div class="cl-comprueba__msg ' + (bien ? 'ok' : 'mal') + '"><b>' +
            (bien ? '¡Eso es!' : 'Casi. Era la ' + L[c.ok] + '.') + '</b>' + (c.exp ? ' ' + esc(limpio(c.exp)) : '') + '</div>';
          $('.clase__av').innerHTML = Arturo.cara(bien ? 'feliz' : 'preocupado', false);
          if (pararVoz) pararVoz();
          vozP.textContent = bien ? 'Eso es. Lo tienes.' : 'Casi. Mira por qué, y vuelve a intentarlo cuando quieras.';
          pararVoz = Arturo.decir(vozP, voz);
          btnSig.textContent = '¡Entendido!';
          if (bien && op.alAprobar) { try { op.alAprobar(); } catch (e) { console.warn(e); } }
        };
      });
    }

    function ir(d){
      const n = i + d;
      if (n < 0) return;
      if (n >= lista.length) return cerrar();
      i = n; pintar();
    }

    function cerrar(){
      if (pararVoz) pararVoz();
      document.removeEventListener('keydown', tecla);
      velo.remove();
      if (abierta && abierta.el === velo) abierta = null;
    }

    function tecla(e){
      if (e.key === 'Escape') cerrar();
      else if (e.key === 'ArrowRight' || e.key === 'Enter'){ e.preventDefault(); ir(1); }
      else if (e.key === 'ArrowLeft') ir(-1);
    }

    btnSig.onclick = function () { ir(1); };
    btnAtras.onclick = function () { ir(-1); };
    $('.clase__x').onclick = cerrar;
    velo.addEventListener('click', function (e) { if (e.target === velo) cerrar(); });
    /* Tocar la burbuja mientras escribe la completa. */
    voz.addEventListener('click', function () { if (pararVoz) pararVoz(); });
    document.addEventListener('keydown', tecla);

    btnOtro.onclick = async function () {
      if (cargandoIA) return;
      cargandoIA = true;
      btnOtro.disabled = true;
      $('.clase__titulo').textContent = 'Pensándolo de otra manera…';
      $('.clase__escena').innerHTML = escena(null, { tipo: 'pensando' });
      $('.clase__av').innerHTML = Arturo.cara('atento', false);
      try {
        const texto = await ArturoIA.reexplicar(op.ia.q, op.ia.elegida);
        agregarOtro(texto);
        i = lista.length - 1;
        pintar();
      } catch (e) {
        const m = e && e.message;
        if (window.UI) UI.tostada(m === 'sin-cuota'
          ? nombre + ' ya no puede reformular más por hoy. Vuelve mañana.'
          : nombre + ' no puede reformular ahora mismo.', 'mal');
        pintar();
      }
      cargandoIA = false;
      btnOtro.disabled = false;
    };

    abierta = { el: velo, cerrar: cerrar };
    pintar();
    btnSig.focus();
  }

  return { abrir: abrir, leccion: leccion, pasos: pasos, trozos: trozos, limpio: limpio };
})();
