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
    }
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
