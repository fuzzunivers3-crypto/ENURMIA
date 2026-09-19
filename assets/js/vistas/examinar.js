/* ============================================================
   EXAMINAR — el estudiante sube su documento y la IA le arma
   un examen de práctica sobre EXACTAMENTE ese material.
   ------------------------------------------------------------
   Distinto de "Mi material" (assets/js/vistas/material.js): ahí
   el troceado es del navegador y el texto no sale de la
   computadora. Aquí SÍ sale: el documento se manda, una vez, a
   la Edge Function `examinar-generar` para que el modelo redacte
   las preguntas. Por eso la pantalla lo dice con todas sus
   letras, sin adornos, antes de que nadie suba nada.

   La extracción de PDF/Word (pdf.js, mammoth.js) es 100% en el
   navegador: solo el TEXTO ya extraído via a la función, nunca
   el archivo. Las librerías se cargan diferidas (CDN) la primera
   vez que hacen falta, no en cada carga de la app.

   Las preguntas generadas NO se meten en Sesion.iniciar ni en
   Motor.registrar: son de un banco ajeno, efímero, que no debe
   ensuciar el progreso, las medallas ni el repaso espaciado del
   banco real. Por eso este archivo trae su propio recorrido de
   pregunta-respuesta, reutilizando las mismas clases visuales.
   ============================================================ */
window.Examinar = (function () {

  const esc = UI.esc, L = UI.LETRAS;
  function V(){ return document.getElementById('vista'); }

  const TOPE_TEXTO = 45000;   // espejo del tope del servidor, ver examinar-generar
  const MIN_TEXTO = 400;

  const PDF_JS = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
  const PDF_WORKER = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  const MAMMOTH_JS = 'https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js';

  /* ---------- estado del formulario de subida ---------- */
  let form = { archivo:null, texto:null, titulo:'', n:10, extrayendo:false };

  /* ---------- estado de un examen en curso ---------- */
  let Q = null;   // { examen, i, elegida, revelada, correctas }

  function libCargada(src){ return !!document.querySelector('script[src="' + src + '"]'); }
  function cargarScript(src){
    return new Promise((resolve, reject) => {
      if (libCargada(src)) return resolve();
      const s = document.createElement('script');
      s.src = src;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('lib'));
      document.head.appendChild(s);
    });
  }

  /* ---------- extraccion ---------- */
  async function extraerPDF(archivo){
    if (!window.pdfjsLib){
      await cargarScript(PDF_JS);
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDF_WORKER;
    }
    const buf = await archivo.arrayBuffer();
    const doc = await window.pdfjsLib.getDocument({ data: buf }).promise;
    let texto = '';
    for (let i = 1; i <= doc.numPages; i++){
      const pagina = await doc.getPage(i);
      const contenido = await pagina.getTextContent();
      texto += contenido.items.map(it => it.str).join(' ') + '\n\n';
    }
    return texto.trim();
  }

  async function extraerDocx(archivo){
    if (!window.mammoth) await cargarScript(MAMMOTH_JS);
    const buf = await archivo.arrayBuffer();
    const r = await window.mammoth.extractRawText({ arrayBuffer: buf });
    return (r.value || '').trim();
  }

  async function extraerArchivo(archivo){
    const nombre = archivo.name.toLowerCase();
    if (nombre.endsWith('.pdf')) return extraerPDF(archivo);
    if (nombre.endsWith('.docx')) return extraerDocx(archivo);
    throw new Error('formato');
  }

  /* ---------- disponibilidad ---------- */
  function motivoNoDisponible(){
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return 'sin-internet';
    const s = Almacen.sesion();
    if (!s || !s.nube) return 'sin-nube';
    return null;
  }

  /* ============================================================
     PANTALLA PRINCIPAL
     ============================================================ */
  async function menu(){
    const motivo = motivoNoDisponible();

    V().innerHTML =
    '<div class="escalona" style="max-width:820px">' +
      '<div class="encabezado"><p class="eyebrow">Examinar</p>' +
      '<h1>Convierte tu documento en un examen</h1>' +
      '<p>Sube la guía, el resumen o los apuntes de una clase. La inteligencia artificial redacta un examen de opción múltiple sacado únicamente de ese material, con el porqué de cada respuesta.</p></div>' +

      '<div class="card card--suero" style="margin-bottom:18px">' +
        '<span class="eyebrow">A diferencia de «Mi material»</span>' +
        '<p style="margin-top:6px;font-size:14px">Aquí tu documento <b>sí sale de esta computadora</b>: el texto se envía, una sola vez por examen, a través de tu cuenta, para que la IA redacte las preguntas. No subas documentos con datos reales de pacientes ni información personal de terceros. El PDF o Word en sí nunca se guarda: solo el texto que se extrae, y solo mientras dura la generación.</p>' +
      '</div>' +

      (motivo ? avisoNoDisponible(motivo) : cajaSubida()) +

      '<div class="card" id="exListaCaja" style="margin-top:18px"><span class="eyebrow">Tus exámenes generados</span>' +
        '<div id="exLista" style="margin-top:14px"><p class="muted">Cargando…</p></div></div>' +
    '</div>';

    if (!motivo) enlazarSubida();
    pintarLista();
  }

  function avisoNoDisponible(motivo){
    const msg = motivo === 'sin-internet'
      ? 'Necesitas conexión a internet para generar un examen: el modelo corre en un servidor, no en tu teléfono.'
      : 'Esta función necesita una cuenta en la nube (no una cuenta solo local): es la que autentica la petición ante el servidor.';
    return '<div class="card"><p class="muted">' + esc(msg) + '</p></div>';
  }

  function cajaSubida(){
    return '<div class="card" style="margin-bottom:0">' +
      '<span class="eyebrow">Nuevo examen</span>' +
      '<div class="campo" style="margin-top:12px">' +
        '<label for="exTitulo">De qué es</label>' +
        '<input id="exTitulo" type="text" maxlength="80" placeholder="Ej: Farmacología cardiovascular, clase 4">' +
      '</div>' +
      '<div class="row wrap" style="gap:9px;margin:4px 0 6px">' +
        '<button class="btn btn--fantasma" id="exArchivo">Elegir PDF o Word</button>' +
        '<input type="file" id="exFile" accept=".pdf,.docx" class="hidden">' +
        '<span class="muted" id="exNombre" style="font-size:13px"></span>' +
      '</div>' +
      '<div id="exEstado" style="font-size:13px"></div>' +
      '<div style="margin-top:14px">' +
        '<span class="eyebrow">Cuántas preguntas</span>' +
        '<div class="filtros" style="margin-top:10px">' +
          [5,10,15].map(n => '<button class="chip' + (form.n === n ? ' on' : '') +
            '" data-ex-n="' + n + '">' + n + '</button>').join('') +
        '</div>' +
      '</div>' +
      '<button class="btn btn--lg" id="exGenerar" style="margin-top:16px" disabled>Generar examen</button>' +
      '<p class="muted" style="font-size:12.5px;margin-top:10px">Tope: 3 exámenes generados por día por estudiante, para que la cuota compartida alcance para todos.</p>' +
      '<div id="exAviso"></div>' +
    '</div>';
  }

  function enlazarSubida(){
    const btnArchivo = document.getElementById('exArchivo');
    const input = document.getElementById('exFile');
    btnArchivo.onclick = () => input.click();

    input.onchange = async () => {
      const archivo = input.files[0];
      if (!archivo) return;
      form.archivo = archivo;
      form.texto = null;
      document.getElementById('exNombre').textContent = archivo.name;
      const estado = document.getElementById('exEstado');
      const btnGenerar = document.getElementById('exGenerar');
      btnGenerar.disabled = true;
      estado.innerHTML = '<span class="muted">Leyendo el documento…</span>';
      try {
        const texto = await extraerArchivo(archivo);
        if (texto.length < MIN_TEXTO){
          estado.innerHTML = '<span style="color:var(--sangria-vivo)">Se extrajeron muy pocos caracteres (' +
            texto.length + '). Puede ser un PDF escaneado como imagen, que no trae texto seleccionable.</span>';
          return;
        }
        form.texto = texto;
        const recortado = texto.length > TOPE_TEXTO;
        estado.innerHTML = '<span style="color:var(--quirofano)">Listo: ' + texto.length.toLocaleString('es') +
          ' caracteres' + (recortado ? ' (se usarán los primeros ' + TOPE_TEXTO.toLocaleString('es') + ')' : '') + '.</span>';
        btnGenerar.disabled = false;
      } catch (e) {
        estado.innerHTML = '<span style="color:var(--sangria-vivo)">No se pudo leer ese archivo' +
          (e && e.message === 'formato' ? ': solo se aceptan .pdf y .docx.' : '. Prueba con otro archivo.') + '</span>';
      }
    };

    UI.$$('[data-ex-n]').forEach(b => b.onclick = () => { form.n = +b.dataset.exN; menu(); });

    document.getElementById('exGenerar').onclick = generar;
  }

  async function generar(){
    const titulo = (document.getElementById('exTitulo').value || '').trim() || (form.archivo ? form.archivo.name : 'Examen');
    const aviso = document.getElementById('exAviso');
    const estado = document.getElementById('exEstado');
    const btn = document.getElementById('exGenerar');
    if (!form.texto) return;

    btn.disabled = true;
    btn.textContent = 'Generando…';
    aviso.innerHTML = '';
    estado.innerHTML = '<span class="combo" style="display:inline-block">Generando tu examen, puede tardar hasta un minuto…</span>';

    try {
      const r = await Nube.invocar('examinar-generar', {
        texto: form.texto, titulo, programa: Almacen.programa(), numPreguntas: form.n
      });
      if (r && r.error){
        aviso.innerHTML = '<div class="aviso">' + esc(mensajeError(r.error)) + '</div>';
        estado.innerHTML = '';
        btn.disabled = false; btn.textContent = 'Generar examen';
        return;
      }
      if (!r || !r.examen){
        aviso.innerHTML = '<div class="aviso">No se pudo generar el examen ahora mismo.</div>';
        estado.innerHTML = '';
        btn.disabled = false; btn.textContent = 'Generar examen';
        return;
      }
      form = { archivo:null, texto:null, titulo:'', n: form.n, extrayendo:false };
      UI.tostada('Examen listo: ' + r.examen.preguntas.length + ' preguntas', 'ok');
      tomar(r.examen);
    } catch (e) {
      aviso.innerHTML = '<div class="aviso">No se pudo conectar con el servidor. Intenta de nuevo.</div>';
      estado.innerHTML = '';
      btn.disabled = false; btn.textContent = 'Generar examen';
    }
  }

  function mensajeError(cod){
    const M = {
      'sin-sesion':       'Tu sesión expiró. Vuelve a entrar e inténtalo otra vez.',
      'sin-suscripcion':  'Necesitas una membresía activa para generar exámenes.',
      'sin-cuota':        'Ya generaste tus exámenes de hoy. El cupo se reinicia mañana.',
      'material-corto':   'El texto extraído es muy corto para armar un examen serio.',
      'sin-preguntas':    'El modelo no pudo redactar preguntas válidas de este documento. Prueba con otro material.',
      'json-invalido':    'El modelo no pudo terminar de armar el examen. Prueba con menos preguntas o un texto más corto.',
    };
    if (cod && cod.startsWith('corte-')){
      return 'El modelo no pudo terminar de armar el examen. Prueba con menos preguntas o un texto más corto.';
    }
    return M[cod] || 'No se pudo generar el examen ahora mismo. Intenta de nuevo en un rato.';
  }

  /* ============================================================
     LISTA DE EXAMENES YA GENERADOS
     ============================================================ */
  async function pintarLista(){
    const cont = document.getElementById('exLista');
    if (!cont) return;
    if (motivoNoDisponible() === 'sin-nube'){
      cont.innerHTML = '<p class="muted">Disponible solo con cuenta en la nube.</p>';
      return;
    }
    const r = await Nube.misExamenes();
    if (!cont) return; // la vista pudo cambiar mientras esto esperaba
    if (!r.ok){ cont.innerHTML = '<p class="muted">' + esc(r.error || 'No se pudo cargar la lista.') + '</p>'; return; }
    if (!r.filas.length){ cont.innerHTML = '<p class="muted">Todavía no has generado ningún examen.</p>'; return; }

    cont.innerHTML = '<div style="display:flex;flex-direction:column;gap:9px">' +
      r.filas.map(f => {
        const ui = f.ultimo_intento;
        return '<div class="item-lista" data-abrir="' + esc(f.id) + '">' +
          '<span class="item-lista__n">🧾</span>' +
          '<span class="grow"><b style="display:block;font-size:14px">' + esc(f.titulo) + '</b>' +
          '<small class="muted">' + UI.fecha(f.creado) + ' · ' + f.preguntas.length + ' preguntas' +
          (ui ? ' · último intento ' + ui.correctas + '/' + ui.total : '') + '</small></span>' +
          '<button class="btn btn--sm" data-repasar="' + esc(f.id) + '">Repasar</button>' +
          '<button class="btn btn--sm btn--fantasma" data-quitar="' + esc(f.id) + '">Quitar</button></div>';
      }).join('') + '</div>';

    UI.$$('[data-repasar]').forEach(b => b.onclick = ev => {
      ev.stopPropagation();
      const f = r.filas.find(x => x.id === b.dataset.repasar);
      if (f) tomar(f);
    });
    UI.$$('[data-quitar]').forEach(b => b.onclick = ev => {
      ev.stopPropagation();
      const id = b.dataset.quitar;
      UI.modal('<h3 style="font-size:20px;margin-bottom:10px">¿Quitar este examen?</h3>' +
        '<p class="muted">No se puede deshacer.</p>' +
        '<div class="row" style="margin-top:20px;gap:9px">' +
        '<button class="btn btn--fantasma grow" onclick="this.closest(\'.velo\').remove()">Cancelar</button>' +
        '<button class="btn grow" id="exSiQuitar">Quitar</button></div>');
      document.getElementById('exSiQuitar').onclick = async () => {
        document.querySelector('.velo').remove();
        await Nube.borrarExamen(id);
        pintarLista();
      };
    });
  }

  /* ============================================================
     TOMAR EL EXAMEN
     No pasa por Sesion.iniciar ni Motor.registrar a propósito:
     estas preguntas no forman parte del banco real y no deben
     ensuciar el progreso, las medallas ni el repaso espaciado.
     ============================================================ */
  function tomar(examen){
    Q = { examen, i:0, elegida:null, revelada:false, correctas:0 };
    pintarPregunta();
  }

  function pq(){ return Q.examen.preguntas[Q.i]; }

  function pintarPregunta(){
    const p = pq();
    const total = Q.examen.preguntas.length;

    V().innerHTML =
    '<div class="escalona" style="max-width:760px">' +
      '<div class="row-b" style="margin-bottom:14px">' +
        '<span class="eyebrow">' + esc(Q.examen.titulo) + ' · ' + (Q.i + 1) + '/' + total + '</span>' +
        '<button class="btn btn--sm btn--fantasma" id="exSalir">Salir</button></div>' +
      (p.caso ? '<p class="pregunta__caso">' + esc(p.caso) + '</p>' : '') +
      '<h2 class="pregunta__enunciado">' + esc(p.enunciado) + '</h2>' +
      '<div class="opciones">' + p.ops.map((o, k) => opcionHtml(p, k)).join('') + '</div>' +
      (Q.revelada ? explicacionGenerada(p) : '') +
      '<div class="row wrap" style="gap:9px;margin-top:16px">' +
        (!Q.revelada
          ? '<button class="btn" id="exConfirmar"' + (Q.elegida === null ? ' disabled' : '') + '>Confirmar</button>'
          : '<button class="btn" id="exSiguiente">' + (Q.i + 1 < total ? 'Siguiente →' : 'Ver resultado') + '</button>') +
      '</div>' +
    '</div>';

    enlazarPregunta();
  }

  function opcionHtml(p, k){
    let cls = '';
    if (!Q.revelada){
      cls = Q.elegida === k ? ' sel' : '';
    } else {
      cls = k === p.ok ? ' correcta' : (k === Q.elegida ? ' incorrecta' : ' apagada');
    }
    return '<button class="opcion' + cls + '" data-op="' + k + '"' + (Q.revelada ? ' disabled' : '') + '>' +
      '<span class="opcion__letra">' + L[k] + '</span><span>' + esc(p.ops[k]) + '</span></button>';
  }

  function explicacionGenerada(p){
    const ok = Q.elegida === p.ok;
    const descartes = Object.keys(p.no || {}).map(k =>
      '<div class="descarte"><b>' + L[k] + '</b><span>' + esc(p.no[k]) + '</span></div>').join('');

    return '<div class="explica">' +
      '<div class="veredicto veredicto--' + (ok ? 'ok' : 'mal') + '">' +
        '<span class="veredicto__sello">' + (ok ? '✓' : '✕') + '</span>' +
        '<span><b>' + (ok ? 'Correcto' : 'Incorrecto') + '</b>' +
        '<small>' + (ok ? 'Respuesta ' + L[p.ok] : 'Tu respuesta: ' + (Q.elegida === null ? 'sin responder' : L[Q.elegida]) +
          ' · Correcta: ' + L[p.ok]) + '</small></span></div>' +
      '<div class="bloque bloque--porque"><span class="eyebrow">Por qué ' + L[p.ok] + ' es la correcta</span><p>' + esc(p.exp) + '</p></div>' +
      (p.clave ? '<div class="bloque bloque--clave"><span class="eyebrow">Dato clave</span><p>' + esc(p.clave) + '</p></div>' : '') +
      (descartes ? '<div class="bloque"><span class="eyebrow">Por qué no las otras</span><div class="descartes">' + descartes + '</div></div>' : '') +
      (p.trampa ? '<div class="bloque bloque--trampa"><span class="eyebrow">La trampa de esta pregunta</span><p>' + esc(p.trampa) + '</p></div>' : '') +
      (p.consideracion ? '<div class="bloque bloque--clave"><span class="eyebrow">Consideración clínica</span><p>' + esc(p.consideracion) + '</p></div>' : '') +
      '<div class="bloque bloque--fuente"><span class="eyebrow">Fuente</span><p>' + esc(p.ref) + '</p></div>' +
    '</div>';
  }

  function enlazarPregunta(){
    UI.$$('[data-op]').forEach(b => b.onclick = () => {
      if (Q.revelada) return;
      Q.elegida = +b.dataset.op;
      pintarPregunta();
    });
    const salir = document.getElementById('exSalir');
    if (salir) salir.onclick = () => { Q = null; App.ir('examinar'); };

    const conf = document.getElementById('exConfirmar');
    if (conf) conf.onclick = () => {
      if (Q.elegida === null) return;
      if (Q.elegida === pq().ok) Q.correctas++;
      Q.revelada = true;
      pintarPregunta();
    };
    const sig = document.getElementById('exSiguiente');
    if (sig) sig.onclick = () => {
      Q.i++;
      Q.elegida = null; Q.revelada = false;
      if (Q.i >= Q.examen.preguntas.length) return terminar();
      pintarPregunta();
      window.scrollTo({ top:0, behavior:'smooth' });
    };
  }

  async function terminar(){
    const total = Q.examen.preguntas.length;
    const precision = Math.round((Q.correctas / total) * 100);
    const intento = { fecha: Date.now(), correctas: Q.correctas, total, precision };

    if (Q.examen.id) await Nube.guardarIntentoExamen(Q.examen.id, intento);

    V().innerHTML =
    '<div class="escalona" style="max-width:640px;text-align:center">' +
      '<div class="encabezado"><p class="eyebrow">Resultado</p><h1>' + esc(Q.examen.titulo) + '</h1></div>' +
      '<div class="card" style="padding:32px 24px">' +
        '<div style="font-family:var(--display);font-size:46px">' + precision + '%</div>' +
        '<p class="muted" style="margin-top:6px">' + Q.correctas + ' de ' + total + ' correctas</p>' +
      '</div>' +
      '<div class="row wrap" style="gap:9px;margin-top:18px;justify-content:center">' +
        '<button class="btn" id="exRepetir">Repetir este examen</button>' +
        '<button class="btn btn--fantasma" id="exVolver">Volver a Examinar</button>' +
      '</div>' +
    '</div>';

    document.getElementById('exRepetir').onclick = () => tomar(Q.examen);
    document.getElementById('exVolver').onclick = () => { Q = null; App.ir('examinar'); };
  }

  return { menu };
})();
