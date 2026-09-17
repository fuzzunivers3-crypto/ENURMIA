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
     GENERADOR DE CÓDIGOS
     Sustituye al SQL a mano: se elige el plan, se genera y queda un
     botón que copia el mensaje entero listo para pegar en WhatsApp.
     ============================================================ */
  const PLANES_CODIGO = [
    { id:'mensual',    meses:1,  nombre:'1 mes',    precio:450  },
    { id:'trimestral', meses:3,  nombre:'3 meses',  precio:1200 },
    { id:'semestral',  meses:6,  nombre:'6 meses',  precio:2500 },
    { id:'anual',      meses:12, nombre:'12 meses', precio:4000 },
    { id:'cortesia',   meses:1,  nombre:'Cortesía (1 mes)', precio:0 }
  ];

  /* Los codigos recien generados sobreviven al repintado: pintar() rehace
     todo el HTML y se llama en cada tecla del buscador. Sin esto, generas
     un codigo, empiezas a buscar a quien pago y lo pierdes de vista. */
  let ultimos = null;   // { plan, codigos:[] }

  function filaCodigo(c){
    return '<div class="row" style="gap:9px;align-items:center;margin-bottom:8px">' +
      '<code class="grow" style="font-size:16px;font-weight:800;letter-spacing:.06em;' +
        'padding:10px 13px;background:var(--hueso-hondo);border-radius:9px">' + esc(c) + '</code>' +
      '<button class="btn btn--sm" data-copiar="' + esc(c) + '">Copiar mensaje</button>' +
    '</div>';
  }

  function generador(){
    return '<div class="card" style="margin-bottom:18px">' +
      '<b style="font-size:15px">Generar código de acceso</b>' +
      '<p class="muted" style="font-size:13px;margin:6px 0 16px">' +
        'Cuando confirmes un pago, genera el código aquí y envíalo. ' +
        'Sirve una sola vez y queda registrado quién lo usó.</p>' +
      '<div class="row wrap" style="gap:9px;align-items:center">' +
        '<select id="codPlan" style="padding:11px 13px;border-radius:10px;' +
          'border:1.5px solid var(--linea);font:inherit;background:var(--papel)">' +
          PLANES_CODIGO.map(p => '<option value="' + p.id + '">' + esc(p.nombre) +
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
        (Almacen.programa() === 'unirm' ? 'UNIRMIA' : 'ENURMIA') + '.\n\n' +
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
    const btn = document.getElementById('btnGenerar');
    if (!btn) return;
    btn.onclick = async () => {
      const id = document.getElementById('codPlan').value;
      const plan = PLANES_CODIGO.find(p => p.id === id);
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
