/* ============================================================
   NUBE — cuenta real y sincronizacion con Supabase
   ------------------------------------------------------------
   Principio de diseno: la nube NO manda durante el estudio.
   El estudio sigue leyendo y escribiendo en localStorage de
   forma sincrona, igual que siempre, porque `Almacen.datos()`
   se llama en decenas de sitios y es sincrono. La nube es un
   ESPEJO: se baja al entrar y se sube (con retardo) al guardar.

   Consecuencia buscada: sin internet la app funciona entera.
   Si el SDK no carga o falla la red, `Nube.disponible()` es
   false y todo sigue como antes, en local.
   ============================================================ */
window.Nube = (function () {

  /* Clave PUBLICA (publishable). Va en el navegador a proposito:
     no da acceso a nada por si sola. Lo que protege los datos es
     la politica RLS de la tabla `progreso`, que solo deja ver y
     escribir la fila cuyo user_id coincide con quien ha entrado.
     La clave secreta (service_role) NO debe aparecer nunca aqui. */
  const URL_PROYECTO = 'https://msxvpyddpqxmnhosgxnw.supabase.co';
  const CLAVE_PUBLICA = 'sb_publishable_gjn7bnD6_HhBNeke0h0z5A_nt9f4ig2';

  let cliente = null;
  let ultimoError = null;

  function iniciar(){
    if (cliente) return true;
    if (!window.supabase || !window.supabase.createClient) return false;
    try {
      cliente = window.supabase.createClient(URL_PROYECTO, CLAVE_PUBLICA, {
        auth: { persistSession: true, autoRefreshToken: true, storageKey: 'enurm.nube.auth' }
      });
      return true;
    } catch (e) {
      ultimoError = e;
      return false;
    }
  }

  function disponible(){ return iniciar(); }

  /* ---------- traduccion de errores a algo legible ---------- */
  function legible(e){
    const m = (e && (e.message || e.error_description || '')) || '';
    if (/Invalid login credentials/i.test(m)) return 'El correo o la contraseña no coinciden.';
    if (/Email not confirmed/i.test(m))      return 'Falta confirmar el correo. Abre el enlace que te enviamos y vuelve a entrar.';
    if (/User already registered/i.test(m))  return 'Ese correo ya tiene cuenta. Entra en lugar de crearla.';
    if (/Password should be at least/i.test(m)) return 'La contraseña es demasiado corta: usa al menos 6 caracteres.';
    if (/rate limit|too many/i.test(m))      return 'Demasiados intentos seguidos. Espera un minuto.';
    if (/fetch|network|Failed to fetch/i.test(m)) return 'No hay conexión con el servidor. Puedes seguir estudiando sin conexión.';
    return m || 'No se pudo completar la operación.';
  }

  /* ---------- cuenta ---------- */
  async function registrar(correo, clave, nombre, programa){
    if (!iniciar()) return { ok:false, error:'La sincronización no está disponible sin conexión.' };
    /* El programa (ENURMIA o UNIRMIA) viaja en los metadatos del registro.
       Un disparador del servidor lo copia a `perfiles.programa` y valida
       que sea uno de los dos: lo que llegue de aqui no se cree a ciegas. */
    const { data, error } = await cliente.auth.signUp({
      email: correo, password: clave,
      options: { data: { nombre: nombre || correo.split('@')[0],
                         programa: (programa === 'unirm' ? 'unirm' : 'enurm') } }
    });
    if (error) return { ok:false, error: legible(error) };
    // Si el proyecto exige confirmar el correo, aun no hay sesion abierta.
    const confirmar = !data.session;
    return { ok:true, confirmar:confirmar, usuario:data.user };
  }

  async function entrar(correo, clave){
    if (!iniciar()) return { ok:false, error:'La sincronización no está disponible sin conexión.' };
    const { data, error } = await cliente.auth.signInWithPassword({ email: correo, password: clave });
    if (error) return { ok:false, error: legible(error) };
    return { ok:true, usuario:data.user };
  }

  async function salir(){
    if (!iniciar()) return;
    try { await cliente.auth.signOut(); } catch (e) {}
  }

  async function usuario(){
    if (!iniciar()) return null;
    try {
      const { data } = await cliente.auth.getSession();
      return (data && data.session) ? data.session.user : null;
    } catch (e) { return null; }
  }

  async function recuperar(correo){
    if (!iniciar()) return { ok:false, error:'Sin conexión.' };
    const { error } = await cliente.auth.resetPasswordForEmail(correo);
    if (error) return { ok:false, error: legible(error) };
    return { ok:true };
  }

  /* ---------- progreso ---------- */
  async function bajar(){
    if (!iniciar()) return { ok:false, error:'Sin conexión.' };
    const u = await usuario();
    if (!u) return { ok:false, error:'No hay sesión en la nube.' };
    const { data, error } = await cliente
      .from('progreso').select('datos, nombre, actualizado')
      .eq('user_id', u.id).maybeSingle();
    if (error) return { ok:false, error: legible(error) };
    return { ok:true, fila: data || null };
  }

  async function subir(datos, nombre){
    if (!iniciar()) return { ok:false, error:'Sin conexión.' };
    const u = await usuario();
    if (!u) return { ok:false, error:'No hay sesión en la nube.' };
    const { error } = await cliente.from('progreso')
      .upsert({ user_id:u.id, datos:datos, nombre:nombre || null }, { onConflict:'user_id' });
    if (error) return { ok:false, error: legible(error) };
    return { ok:true };
  }

  /* ---------- perfil y rol ---------- */
  async function perfil(){
    if (!iniciar()) return null;
    const u = await usuario(); if (!u) return null;
    const { data } = await cliente.from('perfiles')
      .select('user_id, correo, nombre, rol, programa, creado').eq('user_id', u.id).maybeSingle();
    return data || null;
  }

  async function miSuscripcion(){
    if (!iniciar()) return null;
    const u = await usuario(); if (!u) return null;
    const { data } = await cliente.from('suscripciones')
      .select('plan, estado, inicia, vence, notas').eq('user_id', u.id).maybeSingle();
    return data || null;
  }

  /* ---------- ranking de desafios ----------
     Aparecer en la clasificacion es OPCIONAL y esta apagado de fabrica:
     la columna `publico` nace en false y solo la cambia el propio
     estudiante desde Ajustes. Mientras este en false su fila existe (se
     le guarda su marca) pero nadie mas la ve, porque la politica de
     lectura solo deja pasar `publico = true`, la fila propia y el admin.

     Los puntos NO se escriben con un update normal: la tabla no tiene
     politica de insert ni de update a proposito. Se entra por estas dos
     funciones, que corren en el servidor con SECURITY DEFINER y validan
     el rango. Asi nadie se pone diez millones de puntos desde la consola
     del navegador. */
  async function registrarDesafio(puntos){
    if (!iniciar()) return { ok:false, error:'Sin conexión.' };
    const u = await usuario(); if (!u) return { ok:false, error:'No hay sesión en la nube.' };
    const n = Math.max(0, Math.round(Number(puntos) || 0));
    const { error } = await cliente.rpc('registrar_desafio', { p_puntos: n });
    if (error) return { ok:false, error: legible(error) };
    return { ok:true };
  }

  async function configurarRanking(alias, publico){
    if (!iniciar()) return { ok:false, error:'Sin conexión.' };
    const u = await usuario(); if (!u) return { ok:false, error:'No hay sesión en la nube.' };
    const { error } = await cliente.rpc('configurar_ranking',
      { p_alias: (alias || '').slice(0, 24), p_publico: !!publico });
    if (error) return { ok:false, error: legible(error) };
    return { ok:true };
  }

  async function miRanking(){
    if (!iniciar()) return null;
    const u = await usuario(); if (!u) return null;
    const { data } = await cliente.from('ranking')
      .select('alias, publico, mejor_historico, mejor_mes, mes, partidas')
      .eq('user_id', u.id).maybeSingle();
    return data || null;
  }

  /* `tabla` = 'mes' o 'historico'. El mes se filtra en el servidor para
     que la marca del mes pasado no se cuele en la clasificacion de este. */
  async function clasificacion(programa, tabla, limite){
    if (!iniciar()) return { ok:false, error:'Sin conexión.', filas:[], yo:null };
    const u = await usuario();
    const col = tabla === 'mes' ? 'mejor_mes' : 'mejor_historico';
    let q = cliente.from('ranking')
      .select('user_id, alias, mejor_historico, mejor_mes, mes, partidas')
      .eq('programa', programa || 'enurm')
      .gt(col, 0)
      .order(col, { ascending:false })
      .limit(limite || 50);
    if (tabla === 'mes') q = q.eq('mes', mesActual());
    const { data, error } = await q;
    if (error) return { ok:false, error: legible(error), filas:[], yo:null };
    const filas = data || [];
    const yo = u ? filas.findIndex(f => f.user_id === u.id) : -1;
    return { ok:true, filas: filas, miPuesto: yo >= 0 ? yo + 1 : null, miId: u ? u.id : null };
  }

  function mesActual(){
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
  }

  /* ---------- administracion ----------
     Todo lo de abajo lo permite o lo bloquea el RLS del servidor, no el
     navegador: si un estudiante llamara a estas funciones, Postgres le
     devolveria cero filas o un error de permisos. La comprobacion del
     rol en la interfaz es solo para no ensenar botones inutiles. */
  async function listarUsuarios(){
    if (!iniciar()) return { ok:false, error:'Sin conexión.', filas:[] };
    const { data, error } = await cliente.from('panel_usuarios')
      .select('*').order('creado', { ascending:false });
    if (error) return { ok:false, error: legible(error), filas:[] };
    return { ok:true, filas: data || [] };
  }

  async function guardarSuscripcion(userId, cambios){
    if (!iniciar()) return { ok:false, error:'Sin conexión.' };
    const fila = Object.assign({ user_id:userId }, cambios);
    const { error } = await cliente.from('suscripciones').upsert(fila, { onConflict:'user_id' });
    if (error) return { ok:false, error: legible(error) };
    return { ok:true };
  }

  async function cambiarRol(userId, rol){
    if (!iniciar()) return { ok:false, error:'Sin conexión.' };
    const { error } = await cliente.from('perfiles').update({ rol:rol }).eq('user_id', userId);
    if (error) return { ok:false, error: legible(error) };
    return { ok:true };
  }

  async function progresoDe(userId){
    if (!iniciar()) return { ok:false, error:'Sin conexión.' };
    const { data, error } = await cliente.from('progreso')
      .select('datos, actualizado').eq('user_id', userId).maybeSingle();
    if (error) return { ok:false, error: legible(error) };
    return { ok:true, fila: data || null };
  }

  /* ---------- Edge Functions ---------- */
  /* El cliente de Supabase adjunta solo la sesion del estudiante, asi que
     la funcion sabe quien llama sin que nosotros mandemos nada. */
  async function invocar(nombre, cuerpo){
    if (!iniciar()) throw new Error('sin-conexion');
    const { data, error } = await cliente.functions.invoke(nombre, { body: cuerpo });
    if (error){
      /* Un 429 llega como error pero su cuerpo trae el motivo. */
      try {
        const t = await error.context.json();
        if (t && t.error) return t;
      } catch (e) {}
      throw error;
    }
    return data;
  }

  return { disponible, registrar, entrar, salir, usuario, recuperar, bajar, subir,
           perfil, miSuscripcion, invocar,
           registrarDesafio, configurarRanking, miRanking, clasificacion, mesActual,
           listarUsuarios, guardarSuscripcion, cambiarRol, progresoDe,
           URL_PROYECTO: URL_PROYECTO };
})();
