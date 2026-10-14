/* ============================================================
   TE ESCUCHAMOS — tickets de soporte
   ------------------------------------------------------------
   Un problema o una recomendacion, en dos lineas, que le llega a
   shael directo al correo. Vive fuera de SOLO_CON_MEMBRESIA a
   proposito: un estudiante con la membresia vencida tiene que
   poder seguir reportando algo roto, no solo el que esta al dia.
   ============================================================ */
window.Soporte = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  let form = { tipo:'problema', asunto:'', mensaje:'' };
  let tickets = null;   // null = todavia no se cargaron

  function motivoNoDisponible(){
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return 'sin-internet';
    const s = Almacen.sesion();
    if (!s || !s.nube) return 'sin-nube';
    return null;
  }

  const ESTADO_TXT = { abierto:'Enviado', respondido:'Respondido', cerrado:'Cerrado' };
  const ESTADO_CLASE = { abierto:'chip--yodo', respondido:'chip--verde', cerrado:'chip--carbon' };

  function fecha(t){
    try { return new Date(t).toLocaleDateString('es-DO', { day:'2-digit', month:'short', year:'numeric' }); }
    catch (e) { return ''; }
  }

  async function menu(){
    const motivo = motivoNoDisponible();

    V().innerHTML =
    '<div class="escalona" style="max-width:820px">' +
      '<div class="encabezado"><p class="eyebrow">Te escuchamos</p>' +
      '<h1>¿Algo no funciona o se te ocurre cómo mejorar esto?</h1>' +
      '<p>Cuéntamelo aquí. Me llega directo a mi correo y lo leo yo mismo, no un formulario perdido en algún lado.</p></div>' +

      (motivo ? avisoNoDisponible(motivo) : cajaFormulario()) +

      '<div class="card" id="tkListaCaja" style="margin-top:18px"><span class="eyebrow">Tus tickets</span>' +
        '<div id="tkLista" style="margin-top:14px"><p class="muted">' +
        (motivo ? 'Necesitas conexión para ver tus tickets anteriores.' : 'Cargando…') + '</p></div></div>' +
    '</div>';

    if (!motivo){
      enlazarFormulario();
      pintarLista();
      montarRedactor();
    }
  }

  /* ============================================================
     REDACTOR DE CORREOS (solo admin)
     ------------------------------------------------------------
     Elegir estudiantes de la lista del servidor (la misma de
     Administracion, siempre al dia porque cada registro crea su
     fila), escoger una plantilla y enviar. El correo lo arma y lo
     manda la Edge Function aviso-correo (tipo 'enviar'): ahi se
     comprueba de nuevo que quien llama es admin, se ponen los
     datos de cada estudiante y se filtran las promociones a quien
     no las acepto. La vista previa la pide al mismo servidor, asi
     que lo que se ve es exactamente lo que llega.
     ============================================================ */
  const PLANTILLAS = {
    cortesia: {
      nombre: '🎁 Cortesía', promo: false, etiqueta: 'Membresía de cortesía',
      asunto: '¡{nombre}, tienes una cortesía en {programa}!',
      titulo: '¡Hola, {nombre}! Te regalamos acceso a {programa}',
      mensaje:
        'Es un gusto saludarte. Queremos agradecerte por formar parte de {programa} y por confiar en nosotros en tu preparación. ' +
        'Como muestra de ese agradecimiento, te otorgamos una *membresía de cortesía*, sin ningún costo para ti.\n\n' +
        'Tienes acceso completo a la plataforma hasta el *{vence}*. No necesitas hacer nada más: solo entra con tu correo y tu contraseña de siempre y sigue avanzando.\n\n' +
        'Si tienes cualquier duda o sugerencia, responde directamente a este correo; con gusto te atenderemos.'
    },
    aviso: {
      nombre: '📢 Aviso', promo: false, etiqueta: 'Aviso',
      asunto: 'Novedades en {programa}',
      titulo: 'Hola, {nombre}',
      mensaje: 'Escribe aquí el aviso. Deja una línea en blanco entre párrafos y pon *asteriscos* alrededor de lo que quieras resaltar.'
    },
    promo: {
      nombre: '✨ Promoción', promo: true, etiqueta: 'Novedad',
      asunto: 'Algo nuevo para ti en {programa}',
      titulo: 'Hola, {nombre}',
      mensaje: 'Escribe aquí la promoción, el curso o la clase. Solo les llegará a quienes aceptaron recibir novedades al registrarse.'
    }
  };

  let red = null;   // estado del redactor; null = aun no montado

  async function montarRedactor(){
    let p = null;
    try { p = await Nube.perfil(); } catch (e) { return; }
    if (!p || p.rol !== 'admin') return;
    const vista = document.querySelector('#vista .escalona');
    if (!vista || document.getElementById('rdCaja')) return;

    if (!red) red = { plantilla:'cortesia', asunto:'', titulo:'', mensaje:'', etiqueta:'', boton:true,
      filtro:'todos', buscar:'', marcados:new Set(), alumnos:null, confirmar:false };
    if (!red.asunto) cargarPlantilla(red.plantilla);

    const caja = document.createElement('div');
    caja.className = 'card'; caja.id = 'rdCaja'; caja.style.marginBottom = '18px';
    vista.insertBefore(caja, vista.children[1] || null);
    pintarRedactor();

    if (!red.alumnos){
      const [u, pr, ac] = await Promise.all([Nube.listarUsuarios(), Nube.listarProgramas(), Nube.listarConsentimientos()]);
      if (!u.ok){ red.alumnos = []; red.errorLista = u.error; }
      else red.alumnos = u.filas.map(f => ({ id:f.user_id, correo:f.correo || '', nombre:f.nombre || '',
        programa: pr.mapa[f.user_id] || 'enurm', plan:f.plan || '', vence:f.vence || '', acepta: !!ac.mapa[f.user_id] }));
      if (document.getElementById('rdCaja')) pintarRedactor();
    }
  }

  function cargarPlantilla(id){
    const t = PLANTILLAS[id];
    red.plantilla = id; red.asunto = t.asunto; red.titulo = t.titulo; red.mensaje = t.mensaje; red.etiqueta = t.etiqueta;
    red.confirmar = false;
  }

  function visibles(){
    const q = red.buscar.trim().toLowerCase();
    return (red.alumnos || []).filter(a => {
      if (red.filtro === 'enurm' && a.programa !== 'enurm') return false;
      if (red.filtro === 'unirm' && a.programa !== 'unirm') return false;
      if (red.filtro === 'cortesia' && a.plan !== 'cortesia') return false;
      if (red.filtro === 'promos' && !a.acepta) return false;
      return !q || (a.nombre + ' ' + a.correo).toLowerCase().includes(q);
    });
  }

  function fechaCorta(t){
    if (!t) return 'sin fecha';
    try { return new Date(t).toLocaleDateString('es-DO', { day:'numeric', month:'short', year:'numeric' }); } catch (e) { return ''; }
  }

  function pintarRedactor(){
    const caja = document.getElementById('rdCaja');
    if (!caja) return;
    const promo = PLANTILLAS[red.plantilla].promo;
    const n = red.marcados.size;
    const sinPromo = promo ? (red.alumnos || []).filter(a => red.marcados.has(a.id) && !a.acepta).length : 0;
    const FILTROS = [['todos','Todos'],['enurm','ENURMIA'],['unirm','UNIRMIA'],['cortesia','Con cortesía'],['promos','Aceptan promociones']];

    caja.innerHTML =
      '<span class="eyebrow">Solo admin · Enviar correo a estudiantes</span>' +
      '<p class="muted" style="margin:6px 0 12px;font-size:13.5px">Sale desde el correo de ENURMIA con el logo y los colores de la marca. ' +
      'Puedes usar <b>{nombre}</b>, <b>{programa}</b>, <b>{vence}</b> y <b>{plan}</b>: se cambian por los datos de cada estudiante.</p>' +

      '<div class="filtros" style="margin:0 0 12px">' +
        Object.keys(PLANTILLAS).map(id =>
          '<button class="chip' + (red.plantilla === id ? ' on' : '') + '" data-rd-plantilla="' + id + '">' + PLANTILLAS[id].nombre + '</button>').join('') +
      '</div>' +

      '<div class="campo"><label for="rdAsunto">Asunto</label>' +
        '<input id="rdAsunto" type="text" maxlength="160" value="' + esc(red.asunto) + '"></div>' +
      '<div class="campo"><label for="rdTitulo">Título dentro del correo</label>' +
        '<input id="rdTitulo" type="text" maxlength="160" value="' + esc(red.titulo) + '"></div>' +
      '<div class="campo"><label for="rdMensaje">Mensaje</label>' +
        '<textarea id="rdMensaje" rows="8" style="width:100%;font:inherit;padding:12px;border-radius:10px;border:1px solid var(--linea);resize:vertical">' +
        esc(red.mensaje) + '</textarea></div>' +
      '<label style="display:flex;gap:8px;align-items:center;font-size:14px;margin:0 0 14px">' +
        '<input type="checkbox" id="rdBoton"' + (red.boton ? ' checked' : '') + '> Incluir el botón "Entrar a ENURMIA"</label>' +

      '<span class="eyebrow">Para quién</span>' +
      '<div class="filtros" style="margin:10px 0">' +
        FILTROS.map(([id, txt]) => '<button class="chip' + (red.filtro === id ? ' on' : '') + '" data-rd-filtro="' + id + '">' + txt + '</button>').join('') +
      '</div>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:10px">' +
        '<input id="rdBuscar" type="search" placeholder="Buscar por nombre o correo" value="' + esc(red.buscar) + '" ' +
        'style="flex:1;min-width:180px;font:inherit;padding:10px 12px;border-radius:10px;border:1px solid var(--linea)">' +
        '<button class="btn btn--fantasma" id="rdTodos">Marcar los de la lista</button>' +
        '<button class="btn btn--fantasma" id="rdNinguno">Quitar todos</button>' +
      '</div>' +
      '<div id="rdLista" style="max-height:320px;overflow:auto;border:1px solid var(--linea);border-radius:12px">' + filasAlumnos() + '</div>' +

      '<p style="margin:12px 0 0;font-size:14px"><b>' + n + '</b> seleccionado' + (n === 1 ? '' : 's') +
        (sinPromo ? ' · <span style="color:var(--sangria)">' + sinPromo + ' no aceptaron promociones y se saltarán</span>' : '') + '</p>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px">' +
        '<button class="btn btn--fantasma" id="rdVista"' + (n ? '' : ' disabled') + '>Vista previa</button>' +
        '<button class="btn" id="rdEnviar"' + (n ? '' : ' disabled') + '>' +
          (red.confirmar ? '¿Seguro? Enviar a ' + n : 'Enviar a ' + n + ' estudiante' + (n === 1 ? '' : 's')) + '</button>' +
      '</div>' +
      '<div id="rdAviso"></div>' +
      '<div id="rdPrevia"></div>';

    enlazarRedactor();
  }

  function filasAlumnos(){
    if (!red.alumnos) return '<p class="muted" style="padding:12px;margin:0">Cargando estudiantes…</p>';
    if (red.errorLista) return '<p class="muted" style="padding:12px;margin:0">No se pudo cargar la lista: ' + esc(red.errorLista) + '</p>';
    const vs = visibles();
    if (!vs.length) return '<p class="muted" style="padding:12px;margin:0">Nadie coincide con ese filtro.</p>';
    return vs.map(a =>
      '<label style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;border-bottom:1px solid var(--linea);cursor:pointer">' +
        '<input type="checkbox" data-rd-alumno="' + esc(a.id) + '"' + (red.marcados.has(a.id) ? ' checked' : '') + ' style="margin-top:3px">' +
        '<span style="flex:1;min-width:0">' +
          '<b style="font-size:14px">' + esc(a.nombre || a.correo) + '</b> ' +
          '<span class="chip ' + (a.programa === 'unirm' ? 'chip--lila' : 'chip--sangria') + '" style="font-size:11px">' + (a.programa === 'unirm' ? 'UNIRMIA' : 'ENURMIA') + '</span>' +
          (a.acepta ? ' <span class="chip chip--verde" style="font-size:11px" title="Aceptó recibir promociones">✉️ promos</span>' : '') +
          '<small class="muted" style="display:block;overflow-wrap:anywhere">' + esc(a.correo) + ' · ' + esc(a.plan || 'sin plan') + ' · vence ' + esc(fechaCorta(a.vence)) + '</small>' +
        '</span>' +
      '</label>').join('');
  }

  function leerCampos(){
    const v = id => { const el = document.getElementById(id); return el ? el.value : ''; };
    red.asunto = v('rdAsunto'); red.titulo = v('rdTitulo'); red.mensaje = v('rdMensaje');
    const b = document.getElementById('rdBoton'); if (b) red.boton = b.checked;
  }

  function enlazarRedactor(){
    UI.$$('[data-rd-plantilla]').forEach(b => b.onclick = () => { leerCampos(); cargarPlantilla(b.dataset.rdPlantilla); pintarRedactor(); });
    UI.$$('[data-rd-filtro]').forEach(b => b.onclick = () => { leerCampos(); red.filtro = b.dataset.rdFiltro; pintarRedactor(); });
    ['rdAsunto','rdTitulo','rdMensaje'].forEach(id => { document.getElementById(id).oninput = () => { leerCampos(); red.confirmar = false; }; });
    document.getElementById('rdBoton').onchange = leerCampos;
    document.getElementById('rdBuscar').oninput = e => {
      red.buscar = e.target.value;
      document.getElementById('rdLista').innerHTML = filasAlumnos();
      enlazarCasillas();
    };
    document.getElementById('rdTodos').onclick = () => { leerCampos(); visibles().forEach(a => red.marcados.add(a.id)); red.confirmar = false; pintarRedactor(); };
    document.getElementById('rdNinguno').onclick = () => { leerCampos(); red.marcados.clear(); red.confirmar = false; pintarRedactor(); };
    document.getElementById('rdVista').onclick = vistaPrevia;
    document.getElementById('rdEnviar').onclick = enviarCorreos;
    enlazarCasillas();
  }

  function enlazarCasillas(){
    UI.$$('[data-rd-alumno]').forEach(c => c.onchange = () => {
      leerCampos();
      if (c.checked) red.marcados.add(c.dataset.rdAlumno); else red.marcados.delete(c.dataset.rdAlumno);
      red.confirmar = false;
      const scroll = document.getElementById('rdLista').scrollTop;
      pintarRedactor();
      document.getElementById('rdLista').scrollTop = scroll;
    });
  }

  function cuerpoPeticion(ids, vista){
    const t = PLANTILLAS[red.plantilla];
    return { tipo:'enviar', vista: !!vista, user_ids: ids, asunto: red.asunto, titulo: red.titulo,
      mensaje: red.mensaje, etiqueta: red.etiqueta || t.etiqueta, promo: t.promo, boton: red.boton };
  }

  function faltaTexto(){
    if (!red.asunto.trim()) return 'Ponle un asunto.';
    if (red.mensaje.trim().length < 5) return 'Escribe el mensaje.';
    return null;
  }

  async function vistaPrevia(){
    leerCampos();
    const aviso = document.getElementById('rdAviso');
    const falta = faltaTexto();
    if (falta) return aviso.innerHTML = '<div class="aviso">' + esc(falta) + '</div>';
    const ids = (red.alumnos || []).filter(a => red.marcados.has(a.id)).map(a => a.id);
    aviso.innerHTML = '<p class="muted" style="margin-top:12px">Armando la vista previa…</p>';
    try {
      const r = await Nube.invocar('aviso-correo', cuerpoPeticion(ids.slice(0, 1), true));
      if (!r || !r.html){ aviso.innerHTML = '<div class="aviso">' + esc(mensajeRedactor(r && r.error)) + '</div>'; return; }
      aviso.innerHTML = '';
      const previa = document.getElementById('rdPrevia');
      previa.innerHTML = '<p style="margin:14px 0 6px;font-size:13.5px">Así le llega a <b>' + esc(r.para) + '</b> · Asunto: <b>' + esc(r.asunto) + '</b></p>' +
        '<iframe id="rdMarco" sandbox="" style="width:100%;height:640px;border:1px solid var(--linea);border-radius:12px;background:#f6f0ec"></iframe>';
      document.getElementById('rdMarco').srcdoc = r.html;
    } catch (e) {
      aviso.innerHTML = '<div class="aviso">No se pudo conectar con el servidor.</div>';
    }
  }

  async function enviarCorreos(){
    leerCampos();
    const aviso = document.getElementById('rdAviso');
    const falta = faltaTexto();
    if (falta) return aviso.innerHTML = '<div class="aviso">' + esc(falta) + '</div>';
    if (!red.confirmar){ red.confirmar = true; pintarRedactor(); return; }

    const ids = (red.alumnos || []).filter(a => red.marcados.has(a.id)).map(a => a.id);
    const btn = document.getElementById('rdEnviar');
    btn.disabled = true; btn.textContent = 'Enviando ' + ids.length + '…';
    try {
      const r = await Nube.invocar('aviso-correo', cuerpoPeticion(ids, false));
      red.confirmar = false;
      if (!r || typeof r.enviados !== 'number'){
        pintarRedactor();
        document.getElementById('rdAviso').innerHTML = '<div class="aviso">' + esc(mensajeRedactor(r && r.error)) + '</div>';
        return;
      }
      const fallidos = r.fallidos || [];
      red.marcados.clear();
      pintarRedactor();
      UI.tostada(r.enviados + ' correo' + (r.enviados === 1 ? '' : 's') + ' enviado' + (r.enviados === 1 ? '' : 's') + '.', 'ok');
      document.getElementById('rdAviso').innerHTML =
        '<div class="aviso aviso--ok">Enviados: <b>' + r.enviados + '</b> de ' + r.total + '.</div>' +
        (fallidos.length ? '<div class="aviso">No salieron:<br>' +
          fallidos.map(f => esc(f.correo) + ' — ' + esc(f.error || 'error')).join('<br>') + '</div>' : '');
    } catch (e) {
      red.confirmar = false;
      pintarRedactor();
      document.getElementById('rdAviso').innerHTML = '<div class="aviso">No se pudo conectar con el servidor. Revisa antes de reintentar: pudo haber salido una parte.</div>';
    }
  }

  function mensajeRedactor(cod){
    const M = {
      'sin-sesion': 'Tu sesión expiró. Vuelve a entrar.',
      'no-autorizado': 'Esta función es solo para administradores.',
      'sin-destinatarios': 'Elige al menos un estudiante.',
      'sin-texto': 'Falta el asunto o el mensaje.',
      'sin correo': 'Ese estudiante no tiene correo.'
    };
    return M[cod] || 'No se pudo hacer ahora mismo. Intenta de nuevo en un rato.';
  }

  function avisoNoDisponible(motivo){
    const msg = motivo === 'sin-internet'
      ? 'Necesitas conexión a internet para mandar un ticket: se guarda en el servidor, no en este navegador.'
      : 'Esta función necesita una cuenta en la nube (no una cuenta solo local).';
    return '<div class="card"><p class="muted">' + esc(msg) + '</p></div>';
  }

  function cajaFormulario(){
    return '<div class="card">' +
      '<span class="eyebrow">Nuevo ticket</span>' +
      '<div class="filtros" style="margin:12px 0">' +
        '<button class="chip' + (form.tipo === 'problema' ? ' on' : '') + '" data-tk-tipo="problema">🐛 Algo no funciona</button>' +
        '<button class="chip' + (form.tipo === 'recomendacion' ? ' on' : '') + '" data-tk-tipo="recomendacion">💡 Una idea</button>' +
      '</div>' +
      '<div class="campo">' +
        '<label for="tkAsunto">Resúmelo en una frase</label>' +
        '<input id="tkAsunto" type="text" maxlength="140" placeholder="Ej: El simulacro se queda cargando al terminar" value="' + esc(form.asunto) + '">' +
      '</div>' +
      '<div class="campo">' +
        '<label for="tkMensaje">Cuéntame con detalle</label>' +
        '<textarea id="tkMensaje" rows="6" placeholder="Qué pasó, en qué pantalla, o qué te gustaría que hubiera…" ' +
        'style="width:100%;font:inherit;padding:12px;border-radius:10px;border:1px solid var(--linea);resize:vertical">' + esc(form.mensaje) + '</textarea>' +
      '</div>' +
      '<button class="btn btn--lg" id="tkEnviar">Enviar</button>' +
      '<div id="tkAviso"></div>' +
    '</div>';
  }

  function enlazarFormulario(){
    UI.$$('[data-tk-tipo]').forEach(b => b.onclick = () => { form.tipo = b.dataset.tkTipo; menu(); });

    document.getElementById('tkAsunto').oninput = e => { form.asunto = e.target.value; };
    document.getElementById('tkMensaje').oninput = e => { form.mensaje = e.target.value; };

    document.getElementById('tkEnviar').onclick = enviar;
  }

  async function enviar(){
    const asunto = (document.getElementById('tkAsunto').value || '').trim();
    const mensaje = (document.getElementById('tkMensaje').value || '').trim();
    const aviso = document.getElementById('tkAviso');
    const btn = document.getElementById('tkEnviar');

    if (!asunto) return aviso.innerHTML = '<div class="aviso">Ponle un resumen corto.</div>';
    if (mensaje.length < 5) return aviso.innerHTML = '<div class="aviso">Cuéntame un poco más, con eso no alcanza.</div>';

    btn.disabled = true; btn.textContent = 'Enviando…';
    aviso.innerHTML = '';

    try {
      const r = await Nube.crearTicket({ programa: Almacen.programa(), tipo: form.tipo, asunto, mensaje });
      if (r && r.error){
        btn.disabled = false; btn.textContent = 'Enviar';
        return aviso.innerHTML = '<div class="aviso">' + esc(mensajeError(r.error)) + '</div>';
      }
      form = { tipo:'problema', asunto:'', mensaje:'' };
      UI.tostada('Enviado. Gracias por avisarme.', 'ok');
      menu();
    } catch (e) {
      btn.disabled = false; btn.textContent = 'Enviar';
      aviso.innerHTML = '<div class="aviso">No se pudo conectar con el servidor. Intenta de nuevo.</div>';
    }
  }

  function mensajeError(cod){
    const M = {
      'sin-sesion':    'Tu sesión expiró. Vuelve a entrar e inténtalo otra vez.',
      'sin-asunto':    'Ponle un resumen corto.',
      'mensaje-corto': 'Cuéntame un poco más, con eso no alcanza.',
      'sin-cuota':     'Ya mandaste varios tickets hoy. Dame un poco de tiempo para leerlos antes de mandar más.'
    };
    return M[cod] || 'No se pudo enviar ahora mismo. Intenta de nuevo en un rato.';
  }

  async function pintarLista(){
    const cont = document.getElementById('tkLista');
    if (!cont) return;
    const r = await Nube.misTickets();
    tickets = r.ok ? r.filas : [];
    if (!document.getElementById('tkLista')) return; // la pantalla pudo cambiar mientras esperaba

    if (!r.ok){
      cont.innerHTML = '<p class="muted">No se pudo cargar tu historial ahora mismo.</p>';
      return;
    }
    if (!tickets.length){
      cont.innerHTML = '<p class="muted">Todavía no has mandado ningún ticket.</p>';
      return;
    }
    cont.innerHTML = '<div style="display:flex;flex-direction:column;gap:10px">' +
      tickets.map(t =>
        '<div class="item-lista" style="align-items:flex-start">' +
          '<span class="item-lista__n">' + (t.tipo === 'recomendacion' ? '💡' : '🐛') + '</span>' +
          '<span class="grow">' +
            '<div class="row-b"><b style="font-size:14px">' + esc(t.asunto) + '</b>' +
            '<span class="chip ' + (ESTADO_CLASE[t.estado] || '') + '">' + esc(ESTADO_TXT[t.estado] || t.estado) + '</span></div>' +
            '<small class="muted" style="display:block;margin:2px 0 6px">' + fecha(t.creado) + '</small>' +
            '<p style="font-size:13.5px;margin:0">' + esc(t.mensaje) + '</p>' +
            (t.respuesta ? '<div class="bloque bloque--porque" style="margin-top:10px">' +
              '<span class="eyebrow">Mi respuesta</span><p>' + esc(t.respuesta) + '</p></div>' : '') +
          '</span>' +
        '</div>').join('') +
    '</div>';
  }

  return { menu };
})();
