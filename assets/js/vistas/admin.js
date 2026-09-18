/* ============================================================
   ADMIN — panel del superusuario
   Quien esta registrado, en que estado tiene la suscripcion y
   cuanto ha estudiado. Permite cambiar plan, estado y fecha de
   vencimiento, y promover o degradar administradores.

   Importante: esta vista NO es la que da los permisos. Todo lo
   que se hace aqui pasa por el RLS de Supabase, que solo deja
   pasar a quien tiene rol 'admin' en la tabla perfiles. Ocultar
   el boton es cosmetica; la puerta esta en el servidor.
   ============================================================ */
window.Admin = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  let filas = [];
  let filtro = '';

  const PLANES  = ['prueba','mensual','trimestral','semestral','anual','cortesia'];
  const ESTADOS = ['activa','vencida','cancelada'];

  function fecha(t){
    if (!t) return '—';
    try { return new Date(t).toLocaleDateString('es-DO', { day:'2-digit', month:'short', year:'numeric' }); }
    catch (e) { return String(t).slice(0,10); }
  }

  function diasRestantes(vence){
    if (!vence) return null;
    return Math.ceil((new Date(vence).getTime() - Date.now()) / 86400000);
  }

  /* Estado real: aunque la columna diga 'activa', si la fecha ya paso
     la suscripcion esta vencida de hecho. Se muestra lo que es. */
  function estadoReal(f){
    if (f.estado !== 'activa') return f.estado;
    const d = diasRestantes(f.vence);
    if (d !== null && d < 0) return 'vencida';
    return 'activa';
  }

  function pastilla(f){
    const e = estadoReal(f);
    const color = e === 'activa' ? 'var(--ok, #1f8a4c)' : e === 'vencida' ? 'var(--mal, #b3261e)' : 'var(--tinta-3, #777)';
    const d = diasRestantes(f.vence);
    const cola = (e === 'activa' && d !== null) ? ' · ' + d + ' d' : '';
    return '<span style="display:inline-block;padding:2px 9px;border-radius:999px;font-size:11.5px;' +
           'font-weight:700;color:#fff;background:' + color + '">' + esc(e) + esc(cola) + '</span>';
  }

  /* ============================================================
     PINTADO
     ============================================================ */
  function menu(){
    V().innerHTML =
      '<div class="escalona" style="max-width:1100px">' +
        '<div class="encabezado"><p class="eyebrow">Administración</p>' +
        '<h1>Quién está registrado</h1></div>' +
        '<div class="card"><p class="muted">Cargando usuarios…</p></div>' +
      '</div>';
    cargar();
    cargarTickets();
    cargarEventos();
  }

  async function cargar(){
    const r = await Nube.listarUsuarios();
    if (!r.ok){
      V().innerHTML =
        '<div class="escalona" style="max-width:1100px">' +
          '<div class="encabezado"><p class="eyebrow">Administración</p><h1>Quién está registrado</h1></div>' +
          '<div class="card"><p>No se pudo cargar la lista.</p>' +
          '<p class="muted" style="margin-top:6px">' + esc(r.error) + '</p></div>' +
        '</div>';
      return;
    }
    filas = r.filas;
    pintar();
  }

  /* ============================================================
     TICKETS ("Te escuchamos")
     Se cargan aparte de los usuarios: son datos distintos y no hay
     que bloquear la tabla de suscripciones mientras llegan. Si
     todavia no llegaron cuando pintar() corre por primera vez, la
     tarjeta sale vacia y se rellena sola en cuanto cargarTickets()
     termine (vuelve a llamar pintar()).
     ============================================================ */
  let ticketsAdmin = null;
  const TICKET_TIPO_TXT = { problema:'🐛 Problema', recomendacion:'💡 Recomendación' };
  const TICKET_ESTADO_CLASE = { abierto:'chip--yodo', respondido:'chip--verde', cerrado:'chip--carbon' };

  async function cargarTickets(){
    const r = await Nube.listarTickets();
    ticketsAdmin = r.ok ? r.filas : [];
    pintar();
  }

  function tarjetaTickets(){
    if (ticketsAdmin === null){
      return '<div class="card" style="margin-bottom:18px"><b style="font-size:15px">Te escuchamos</b>' +
        '<p class="muted" style="margin-top:8px">Cargando tickets…</p></div>';
    }
    const abiertos = ticketsAdmin.filter(t => t.estado === 'abierto');
    const resto = ticketsAdmin.filter(t => t.estado !== 'abierto');
    const lista = abiertos.concat(resto).slice(0, 12);

    return '<div class="card" style="margin-bottom:18px">' +
      '<div class="row-b" style="margin-bottom:6px"><b style="font-size:15px">Te escuchamos</b>' +
      '<span class="chip' + (abiertos.length ? ' chip--yodo' : '') + '">' + abiertos.length + ' sin responder</span></div>' +
      '<p class="muted" style="font-size:13px;margin-bottom:12px">Problemas y recomendaciones que mandan los estudiantes, de los dos programas.</p>' +
      (lista.length
        ? '<div style="display:flex;flex-direction:column;gap:8px">' + lista.map(t =>
            '<div class="row-b" style="padding:9px 0;border-bottom:1px solid var(--linea)">' +
              '<span class="grow">' +
                '<b style="font-size:13.5px">' + esc(t.asunto) + '</b>' +
                '<br><small class="muted">' + esc(TICKET_TIPO_TXT[t.tipo] || t.tipo) + ' · ' +
                  esc(t.programa === 'unirm' ? 'UNIRMIA' : 'ENURMIA') + ' · ' + esc(t.nombre || t.correo || '—') + '</small>' +
              '</span>' +
              '<span class="chip ' + (TICKET_ESTADO_CLASE[t.estado] || '') + '">' + esc(t.estado) + '</span> ' +
              '<button class="btn btn--sm" data-ticket="' + esc(t.id) + '">Ver</button>' +
            '</div>').join('') + '</div>'
        : '<p class="muted">Todavía no ha llegado ninguno.</p>') +
    '</div>';
  }

  function engancharTickets(){
    UI.$$('[data-ticket]').forEach(b => b.onclick = () => abrirTicket(b.dataset.ticket));
  }

  function abrirTicket(id){
    const t = (ticketsAdmin || []).find(x => x.id === id); if (!t) return;
    UI.modal(
      '<h3 style="font-size:19px;margin-bottom:4px">' + esc(t.asunto) + '</h3>' +
      '<p class="muted" style="font-size:12.5px;margin-bottom:14px">' +
        esc(TICKET_TIPO_TXT[t.tipo] || t.tipo) + ' · ' + esc(t.programa === 'unirm' ? 'UNIRMIA' : 'ENURMIA') +
        ' · ' + esc(t.nombre || '—') + (t.correo ? ' · ' + esc(t.correo) : '') + '</p>' +
      '<div class="bloque" style="margin-bottom:14px"><p>' + esc(t.mensaje) + '</p></div>' +
      '<div class="campo"><label>Tu respuesta (opcional, la ve el estudiante en su cuenta)</label>' +
        '<textarea id="tkRespuesta" rows="4" style="width:100%;font:inherit;padding:11px;border-radius:10px;' +
        'border:1.5px solid var(--linea);resize:vertical">' + esc(t.respuesta || '') + '</textarea></div>' +
      '<div class="campo"><label>Estado</label><select id="tkEstado">' +
        ['abierto','respondido','cerrado'].map(s => '<option value="' + s + '"' +
          (t.estado === s ? ' selected' : '') + '>' + s + '</option>').join('') +
      '</select></div>' +
      '<button class="btn btn--ancho" id="tkGuardar">Guardar</button>' +
      '<div id="tkAvisoAdmin"></div>'
    );
    document.getElementById('tkGuardar').onclick = async () => {
      const btn = document.getElementById('tkGuardar');
      btn.disabled = true; btn.textContent = 'Guardando…';
      const respuesta = document.getElementById('tkRespuesta').value.trim();
      const estado = document.getElementById('tkEstado').value;
      const r = await Nube.responderTicket(t.id, respuesta, estado);
      if (!r.ok){
        btn.disabled = false; btn.textContent = 'Guardar';
        return document.getElementById('tkAvisoAdmin').innerHTML = '<div class="aviso">' + esc(r.error) + '</div>';
      }
      UI.tostada('Ticket actualizado', 'bien');
      document.querySelector('.velo, .modal__velo, [data-velo]')?.remove();
      cargarTickets();
    };
  }

  /* ============================================================
     PRÓXIMOS CURSOS (UNIRMIA)
     Publicar, editar, desactivar y borrar cursos/certificados/
     diplomados que ve el estudiante en su propia pantalla
     "Próximos cursos". Igual que con tickets, se carga aparte de
     la tabla de usuarios.
     ============================================================ */
  let eventosAdmin = null;
  const EVENTO_TIPO = ['curso','certificado','diplomado'];
  const EVENTO_TIPO_TXT = { curso:'📚 Curso', certificado:'🏅 Certificado', diplomado:'🎓 Diplomado' };

  async function cargarEventos(){
    const r = await Nube.eventosUnirm();
    eventosAdmin = r.ok ? r.filas : [];
    pintar();
  }

  function tarjetaEventos(){
    if (eventosAdmin === null){
      return '<div class="card" style="margin-bottom:18px"><b style="font-size:15px">Próximos cursos (UNIRMIA)</b>' +
        '<p class="muted" style="margin-top:8px">Cargando…</p></div>';
    }
    const lista = eventosAdmin.slice().sort((a, b) => (b.activo ? 1 : 0) - (a.activo ? 1 : 0));

    return '<div class="card" style="margin-bottom:18px">' +
      '<div class="row-b" style="margin-bottom:10px"><b style="font-size:15px">Próximos cursos (UNIRMIA)</b>' +
      '<button class="btn btn--sm" id="btnNuevoEvento">Publicar uno nuevo</button></div>' +
      (lista.length
        ? '<div style="display:flex;flex-direction:column;gap:8px">' + lista.map(e =>
            '<div class="row-b" style="padding:9px 0;border-bottom:1px solid var(--linea);' +
              (e.activo ? '' : 'opacity:.5') + '">' +
              '<span class="grow"><b style="font-size:13.5px">' + esc(e.titulo) + '</b>' +
                '<br><small class="muted">' + esc(EVENTO_TIPO_TXT[e.tipo] || e.tipo) +
                (e.fecha ? ' · ' + esc(e.fecha) : '') + (e.activo ? '' : ' · desactivado') + '</small></span>' +
              '<button class="btn btn--sm btn--fantasma" data-evento="' + esc(e.id) + '">Editar</button>' +
            '</div>').join('') + '</div>'
        : '<p class="muted">Todavía no has publicado nada.</p>') +
    '</div>';
  }

  function formularioEvento(e){
    e = e || {};
    return '<h3 style="font-size:20px;margin-bottom:14px">' + (e.id ? 'Editar' : 'Publicar') + ' curso</h3>' +
      '<div class="campo"><label>Tipo</label><select id="evTipo">' +
        EVENTO_TIPO.map(t => '<option value="' + t + '"' + (e.tipo === t ? ' selected' : '') + '>' +
          esc(EVENTO_TIPO_TXT[t]) + '</option>').join('') +
      '</select></div>' +
      '<div class="campo"><label>Título</label><input id="evTitulo" maxlength="120" value="' + esc(e.titulo || '') + '"></div>' +
      '<div class="campo"><label>Descripción (opcional)</label>' +
        '<textarea id="evDescripcion" rows="3" style="width:100%;font:inherit;padding:11px;border-radius:10px;' +
        'border:1.5px solid var(--linea);resize:vertical">' + esc(e.descripcion || '') + '</textarea></div>' +
      '<div class="campo"><label>Fecha (opcional)</label><input id="evFecha" type="date" value="' + esc(e.fecha || '') + '"></div>' +
      '<div class="campo"><label>Enlace (opcional, WhatsApp, formulario, etc.)</label>' +
        '<input id="evEnlace" type="url" placeholder="https://…" value="' + esc(e.enlace || '') + '"></div>' +
      '<label class="row" style="gap:8px;align-items:center;margin:4px 0 16px;cursor:pointer">' +
        '<input type="checkbox" id="evActivo"' + (e.activo === false ? '' : ' checked') + '>' +
        '<span>Visible para los estudiantes</span></label>' +
      '<div class="row" style="gap:9px">' +
        '<button class="btn btn--ancho" id="evGuardar">Guardar</button>' +
        (e.id ? '<button class="btn btn--fantasma" id="evBorrar">Borrar</button>' : '') +
      '</div>' +
      '<div id="evAviso"></div>';
  }

  function abrirEvento(id){
    const e = id ? (eventosAdmin || []).find(x => x.id === id) : null;
    UI.modal(formularioEvento(e));

    document.getElementById('evGuardar').onclick = async () => {
      const btn = document.getElementById('evGuardar');
      const titulo = document.getElementById('evTitulo').value.trim();
      if (!titulo) return document.getElementById('evAviso').innerHTML = '<div class="aviso">Ponle un título.</div>';

      /* Solo http(s): el estudiante ve este enlace como un <a href>, asi
         que un esquema como javascript: se ejecutaria al hacer clic. */
      const enlace = document.getElementById('evEnlace').value.trim();
      if (enlace && !/^https?:\/\//i.test(enlace))
        return document.getElementById('evAviso').innerHTML = '<div class="aviso">El enlace debe empezar con http:// o https://</div>';

      btn.disabled = true; btn.textContent = 'Guardando…';
      const datos = {
        tipo: document.getElementById('evTipo').value,
        titulo,
        descripcion: document.getElementById('evDescripcion').value.trim() || null,
        fecha: document.getElementById('evFecha').value || null,
        enlace: enlace || null,
        activo: document.getElementById('evActivo').checked
      };
      if (e && e.id) datos.id = e.id;

      const r = await Nube.guardarEventoUnirm(datos);
      if (!r.ok){
        btn.disabled = false; btn.textContent = 'Guardar';
        return document.getElementById('evAviso').innerHTML = '<div class="aviso">' + esc(r.error) + '</div>';
      }
      UI.tostada('Publicado', 'bien');
      document.querySelector('.velo, .modal__velo, [data-velo]')?.remove();
      cargarEventos();
    };

    const btnBorrar = document.getElementById('evBorrar');
    if (btnBorrar) btnBorrar.onclick = async () => {
      btnBorrar.disabled = true; btnBorrar.textContent = 'Borrando…';
      const r = await Nube.borrarEventoUnirm(e.id);
      if (!r.ok){
        btnBorrar.disabled = false; btnBorrar.textContent = 'Borrar';
        return document.getElementById('evAviso').innerHTML = '<div class="aviso">' + esc(r.error) + '</div>';
      }
      UI.tostada('Borrado', 'bien');
      document.querySelector('.velo, .modal__velo, [data-velo]')?.remove();
      cargarEventos();
    };
  }

  function engancharEventos(){
    const nuevo = document.getElementById('btnNuevoEvento');
    if (nuevo) nuevo.onclick = () => abrirEvento(null);
    UI.$$('[data-evento]').forEach(b => b.onclick = () => abrirEvento(b.dataset.evento));
  }

  /* ============================================================
     GENERADOR DE CÓDIGOS
     Sustituye al SQL a mano: se elige el plan, se genera y queda un
     botón que copia el mensaje entero listo para pegar en WhatsApp.
     ============================================================ */
  /* UNIRMIA cuesta menos que ENURMIA (publico y banco distintos): el
     precio de aqui es solo informativo (ni se guarda ni se valida en la
     base de datos, `generar_codigos` solo recibe plan+meses), asi que
     el generador deja elegir para cual de los dos se esta cobrando en
     vez de asumir el programa de la cuenta del admin. */
  const PLANES_CODIGO_POR_PROGRAMA = {
    enurm: [
      { id:'mensual',    meses:1,  nombre:'1 mes',    precio:450  },
      { id:'trimestral', meses:3,  nombre:'3 meses',  precio:1200 },
      { id:'semestral',  meses:6,  nombre:'6 meses',  precio:2500 },
      { id:'anual',      meses:12, nombre:'12 meses', precio:4000 },
      { id:'cortesia',   meses:1,  nombre:'Cortesía (1 mes)', precio:0 }
    ],
    unirm: [
      { id:'mensual',    meses:1,  nombre:'1 mes',    precio:250  },
      { id:'trimestral', meses:3,  nombre:'3 meses',  precio:700  },
      { id:'semestral',  meses:6,  nombre:'6 meses',  precio:1200 },
      { id:'anual',      meses:12, nombre:'12 meses', precio:2000 },
      { id:'cortesia',   meses:1,  nombre:'Cortesía (1 mes)', precio:0 }
    ]
  };

  /* Los codigos recien generados y el programa elegido sobreviven al
     repintado: pintar() rehace todo el HTML y se llama en cada tecla del
     buscador. Sin esto, generas un codigo, empiezas a buscar a quien
     pago y lo pierdes de vista. */
  let ultimos = null;      // { plan, codigos:[] }
  let progGenerador = Almacen.programa();

  function filaCodigo(c){
    return '<div class="row" style="gap:9px;align-items:center;margin-bottom:8px">' +
      '<code class="grow" style="font-size:16px;font-weight:800;letter-spacing:.06em;' +
        'padding:10px 13px;background:var(--hueso-hondo);border-radius:9px">' + esc(c) + '</code>' +
      '<button class="btn btn--sm" data-copiar="' + esc(c) + '">Copiar mensaje</button>' +
    '</div>';
  }

  function generador(){
    const planes = PLANES_CODIGO_POR_PROGRAMA[progGenerador];
    return '<div class="card" style="margin-bottom:18px">' +
      '<b style="font-size:15px">Generar código de acceso</b>' +
      '<p class="muted" style="font-size:13px;margin:6px 0 12px">' +
        'Cuando confirmes un pago, genera el código aquí y envíalo. ' +
        'Sirve una sola vez y queda registrado quién lo usó.</p>' +
      '<div class="row wrap" style="gap:6px;margin-bottom:12px">' +
        '<button type="button" class="chip' + (progGenerador === 'enurm' ? ' on' : '') +
          '" data-prog-gen="enurm">ENURMIA</button>' +
        '<button type="button" class="chip' + (progGenerador === 'unirm' ? ' on' : '') +
          '" data-prog-gen="unirm">UNIRMIA</button>' +
      '</div>' +
      '<div class="row wrap" style="gap:9px;align-items:center">' +
        '<select id="codPlan" style="padding:11px 13px;border-radius:10px;' +
          'border:1.5px solid var(--linea);font:inherit;background:var(--papel)">' +
          planes.map(p => '<option value="' + p.id + '">' + esc(p.nombre) +
            (p.precio ? ' — RD$' + p.precio.toLocaleString('es-DO') : '') + '</option>').join('') +
        '</select>' +
        '<input id="codCuantos" type="number" min="1" max="50" value="1" ' +
          'style="width:76px;padding:11px 13px;border-radius:10px;border:1.5px solid var(--linea);font:inherit">' +
        '<input id="codNota" type="text" placeholder="Nota (ej: pago de Juan, 17 sept)" ' +
          'class="grow" style="min-width:180px;padding:11px 13px;border-radius:10px;' +
          'border:1.5px solid var(--linea);font:inherit">' +
        '<button class="btn" id="btnGenerar">Generar</button>' +
      '</div>' +
      '<div id="codSalida">' +
        (ultimos ? '<div style="margin-top:16px;padding-top:15px;border-top:1px solid var(--linea)">' +
                   ultimos.codigos.map(filaCodigo).join('') + '</div>' : '') +
      '</div>' +
    '</div>';
  }

  function engancharCopiar(){
    UI.$$('[data-copiar]').forEach(b => b.onclick = async () => {
      const cod = b.dataset.copiar;
      const nombrePlan = (ultimos && ultimos.plan) ? ultimos.plan.nombre : '';
      const msg = '¡Listo! Ya puedes activar tu membresía de ' +
        (progGenerador === 'unirm' ? 'UNIRMIA' : 'ENURMIA') + '.\n\n' +
        'Tu código: ' + cod + '\n' +
        (nombrePlan ? 'Plan: ' + nombrePlan + '\n' : '') + '\n' +
        'Entra, elige "Ya pagué y tengo mi código" y escríbelo. ' +
        'Tu acceso queda activo al instante.';
      try {
        await navigator.clipboard.writeText(msg);
        b.textContent = 'Copiado ✓';
        setTimeout(() => { b.textContent = 'Copiar mensaje'; }, 2000);
      } catch (e) {
        UI.tostada('No se pudo copiar. El código es ' + cod, 'mal');
      }
    });
  }

  function engancharGenerador(){
    engancharCopiar();
    UI.$$('[data-prog-gen]').forEach(b => b.onclick = () => {
      progGenerador = b.dataset.progGen;
      ultimos = null;
      pintar();
    });
    const btn = document.getElementById('btnGenerar');
    if (!btn) return;
    btn.onclick = async () => {
      const id = document.getElementById('codPlan').value;
      const plan = PLANES_CODIGO_POR_PROGRAMA[progGenerador].find(p => p.id === id);
      const cuantos = Math.max(1, Math.min(50, +document.getElementById('codCuantos').value || 1));
      const nota = document.getElementById('codNota').value.trim();
      const salida = document.getElementById('codSalida');

      btn.disabled = true; btn.textContent = 'Generando…';
      let r = { ok:false, error:'No se pudo conectar.' };
      try { r = await Nube.generarCodigos(plan.id, plan.meses, cuantos, nota); } catch (e) {}
      btn.disabled = false; btn.textContent = 'Generar';

      if (!r.ok){
        salida.innerHTML = '<div class="aviso" style="margin-top:14px">' + esc(r.error) + '</div>';
        return;
      }

      ultimos = { plan, codigos: r.codigos };
      salida.innerHTML =
        '<div style="margin-top:16px;padding-top:15px;border-top:1px solid var(--linea)">' +
        r.codigos.map(filaCodigo).join('') + '</div>';
      engancharCopiar();
    };
  }

  function resumen(){
    const total = filas.length;
    const activos = filas.filter(f => estadoReal(f) === 'activa').length;
    const vencidos = filas.filter(f => estadoReal(f) === 'vencida').length;
    const admins = filas.filter(f => f.rol === 'admin').length;
    const activosSemana = filas.filter(f => f.ultima_actividad &&
      (Date.now() - new Date(f.ultima_actividad).getTime()) < 7 * 86400000).length;

    const tarjeta = (n, t) =>
      '<div class="card" style="flex:1;min-width:140px;text-align:center">' +
        '<b style="font-size:26px;display:block">' + n + '</b>' +
        '<small class="muted">' + esc(t) + '</small></div>';

    return '<div class="row wrap" style="gap:12px;margin-bottom:18px">' +
      tarjeta(total, 'registrados') +
      tarjeta(activos, 'con suscripción activa') +
      tarjeta(vencidos, 'vencidos') +
      tarjeta(activosSemana, 'estudiaron esta semana') +
      tarjeta(admins, admins === 1 ? 'administrador' : 'administradores') +
    '</div>';
  }

  function pintar(){
    const q = filtro.trim().toLowerCase();
    const lista = q
      ? filas.filter(f => ((f.correo || '') + ' ' + (f.nombre || '')).toLowerCase().includes(q))
      : filas;

    const cuerpo = lista.length ? lista.map(f =>
      '<tr data-uid="' + esc(f.user_id) + '">' +
        '<td><b>' + esc(f.nombre || '—') + '</b>' +
          (f.rol === 'admin' ? ' <span class="eyebrow" style="color:var(--acento)">admin</span>' : '') +
          '<br><small class="muted">' + esc(f.correo || '—') + '</small></td>' +
        '<td>' + esc(f.plan || '—') + '<br>' + pastilla(f) + '</td>' +
        '<td><small class="muted">vence</small><br>' + esc(fecha(f.vence)) + '</td>' +
        '<td>' + (f.respuestas || 0) + ' resp.<br>' +
          '<small class="muted">' + (f.simulacros || 0) + ' simulacros</small></td>' +
        '<td><small class="muted">' + esc(fecha(f.ultima_actividad)) + '</small></td>' +
        '<td style="white-space:nowrap">' +
          '<button class="btn btn--sm" data-editar="' + esc(f.user_id) + '">Suscripción</button> ' +
          '<button class="btn btn--sm btn--fantasma" data-ver="' + esc(f.user_id) + '">Datos</button>' +
        '</td>' +
      '</tr>').join('')
      : '<tr><td colspan="6"><p class="muted" style="padding:14px 0">Todavía no hay nadie registrado con ese criterio.</p></td></tr>';

    V().innerHTML =
    '<div class="escalona" style="max-width:1100px">' +
      '<div class="encabezado"><p class="eyebrow">Administración</p>' +
      '<h1>Quién está registrado</h1>' +
      '<p class="muted">Cada fila es una cuenta real. Los cambios de suscripción se aplican al instante.</p></div>' +

      resumen() +
      tarjetaTickets() +
      tarjetaEventos() +
      generador() +

      '<div class="card">' +
        '<div class="row" style="gap:10px;margin-bottom:12px">' +
          '<input id="buscarUsuario" class="grow" placeholder="Buscar por nombre o correo…" value="' + esc(filtro) + '">' +
          '<button class="btn btn--sm btn--fantasma" id="recargar">Recargar</button>' +
        '</div>' +
        '<div style="overflow-x:auto">' +
          '<table style="width:100%;border-collapse:collapse;font-size:13.5px">' +
            '<thead><tr style="text-align:left;border-bottom:1px solid var(--linea)">' +
              '<th style="padding:8px 6px">Estudiante</th><th>Plan</th><th>Vence</th>' +
              '<th>Actividad</th><th>Último día</th><th></th>' +
            '</tr></thead>' +
            '<tbody>' + cuerpo + '</tbody>' +
          '</table>' +
        '</div>' +
      '</div>' +
    '</div>';

    const buscador = document.getElementById('buscarUsuario');
    buscador.oninput = e => { filtro = e.target.value; const p = e.target.selectionStart; pintar();
      const b2 = document.getElementById('buscarUsuario'); b2.focus(); b2.setSelectionRange(p, p); };
    document.getElementById('recargar').onclick = () => cargar();
    UI.$$('[data-editar]').forEach(b => b.onclick = () => editar(b.dataset.editar));
    UI.$$('[data-ver]').forEach(b => b.onclick = () => verDatos(b.dataset.ver));
    engancharGenerador();
    engancharTickets();
    engancharEventos();
  }

  /* ============================================================
     EDITAR SUSCRIPCION
     ============================================================ */
  function editar(uid){
    const f = filas.find(x => x.user_id === uid); if (!f) return;
    const hoy = new Date();
    const iso = t => { try { return new Date(t).toISOString().slice(0,10); } catch(e){ return ''; } };

    UI.modal(
      '<h3 style="font-size:20px;margin-bottom:4px">' + esc(f.nombre || f.correo) + '</h3>' +
      '<p class="muted" style="font-size:13px;margin-bottom:16px">' + esc(f.correo || '') + '</p>' +

      '<div class="campo"><label>Plan</label><select id="mPlan">' +
        PLANES.map(p => '<option value="' + p + '"' + (f.plan === p ? ' selected' : '') + '>' + p + '</option>').join('') +
      '</select></div>' +

      '<div class="campo"><label>Estado</label><select id="mEstado">' +
        ESTADOS.map(s => '<option value="' + s + '"' + (f.estado === s ? ' selected' : '') + '>' + s + '</option>').join('') +
      '</select></div>' +

      '<div class="campo"><label>Vence</label>' +
        '<input id="mVence" type="date" value="' + esc(f.vence ? iso(f.vence) : '') + '"></div>' +
      '<div class="row wrap" style="gap:6px;margin:-6px 0 14px">' +
        '<button class="btn btn--sm btn--fantasma" data-sumar="30">+30 días</button>' +
        '<button class="btn btn--sm btn--fantasma" data-sumar="180">+6 meses</button>' +
        '<button class="btn btn--sm btn--fantasma" data-sumar="365">+1 año</button>' +
      '</div>' +

      '<div class="campo"><label>Notas internas</label>' +
        '<input id="mNotas" value="' + esc(f.notas || '') + '" placeholder="pagó por transferencia, beca, etc."></div>' +

      '<div class="campo"><label>Rol</label><select id="mRol">' +
        '<option value="estudiante"' + (f.rol === 'estudiante' ? ' selected' : '') + '>estudiante</option>' +
        '<option value="admin"' + (f.rol === 'admin' ? ' selected' : '') + '>admin</option>' +
      '</select></div>' +

      '<div class="row" style="gap:9px;margin-top:16px">' +
        '<button class="btn btn--ancho" id="mGuardar">Guardar cambios</button>' +
      '</div>' +
      '<div id="mAviso"></div>'
    );

    UI.$$('[data-sumar]').forEach(b => b.onclick = () => {
      const base = document.getElementById('mVence').value
        ? new Date(document.getElementById('mVence').value) : hoy;
      const desde = base.getTime() > Date.now() ? base : hoy;
      const d = new Date(desde.getTime() + Number(b.dataset.sumar) * 86400000);
      document.getElementById('mVence').value = d.toISOString().slice(0,10);
      document.getElementById('mEstado').value = 'activa';
    });

    document.getElementById('mGuardar').onclick = async () => {
      const btn = document.getElementById('mGuardar');
      btn.disabled = true; btn.textContent = 'Guardando…';
      const venceTxt = document.getElementById('mVence').value;
      const cambios = {
        plan: document.getElementById('mPlan').value,
        estado: document.getElementById('mEstado').value,
        vence: venceTxt ? new Date(venceTxt + 'T23:59:59').toISOString() : null,
        notas: document.getElementById('mNotas').value || null
      };
      const r1 = await Nube.guardarSuscripcion(uid, cambios);
      const rolNuevo = document.getElementById('mRol').value;
      const r2 = (rolNuevo !== f.rol) ? await Nube.cambiarRol(uid, rolNuevo) : { ok:true };

      if (!r1.ok || !r2.ok){
        btn.disabled = false; btn.textContent = 'Guardar cambios';
        document.getElementById('mAviso').innerHTML =
          '<div class="aviso">' + esc((r1.error || '') + ' ' + (r2.error || '')) + '</div>';
        return;
      }
      UI.tostada('Suscripción actualizada', 'bien');
      document.querySelector('.velo, .modal__velo, [data-velo]')?.remove();
      cargar();
    };
  }

  /* ============================================================
     VER LOS DATOS DE UN ESTUDIANTE
     ============================================================ */
  async function verDatos(uid){
    const f = filas.find(x => x.user_id === uid);
    UI.modal('<h3 style="font-size:20px;margin-bottom:14px">' + esc(f ? (f.nombre || f.correo) : '') + '</h3>' +
             '<p class="muted">Cargando su progreso…</p>');
    const r = await Nube.progresoDe(uid);
    const d = (r.ok && r.fila) ? r.fila.datos : null;
    if (!d){
      UI.modal('<h3 style="font-size:20px;margin-bottom:10px">Sin datos</h3>' +
               '<p class="muted">' + esc(r.error || 'Esta cuenta todavía no ha estudiado nada.') + '</p>');
      return;
    }
    const resp = (d.respuestas || []);
    const aciertos = resp.filter(x => x.ok).length;
    const prec = resp.length ? Math.round(aciertos / resp.length * 100) : null;
    const linea = (k, v) =>
      '<div class="row" style="padding:7px 0;border-bottom:1px solid var(--linea)">' +
      '<span class="grow muted">' + esc(k) + '</span><b>' + esc(String(v)) + '</b></div>';

    UI.modal(
      '<h3 style="font-size:20px;margin-bottom:4px">' + esc(f ? (f.nombre || f.correo) : '') + '</h3>' +
      '<p class="muted" style="font-size:13px;margin-bottom:14px">' + esc(f ? (f.correo || '') : '') + '</p>' +
      linea('Preguntas respondidas', resp.length) +
      linea('Precisión', prec === null ? '—' : prec + '%') +
      linea('Simulacros completos', (d.simulacros || []).length) +
      linea('Preguntas en repaso espaciado', Object.keys(d.srs || {}).length) +
      linea('Flashcards en repaso', Object.keys(d.srsTarjetas || {}).length) +
      linea('Temas leídos en Estudiar', Object.keys(d.apuntes || {}).length) +
      linea('Racha actual', (d.racha && d.racha.dias) || 0) +
      linea('Última sincronización', fecha(r.fila.actualizado)) +
      '<p class="muted" style="font-size:12px;margin-top:14px">Resumen del progreso. No se muestran respuestas ' +
      'individuales: para administrar suscripciones no hacen falta.</p>'
    );
  }

  return { menu };
})();
