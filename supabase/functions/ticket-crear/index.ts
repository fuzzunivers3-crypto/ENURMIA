/* ============================================================
   TICKET-CREAR — "Te escuchamos"
   Guarda el ticket y avisa por correo. Exige sesion, valida el
   cuerpo y limita cuantos tickets puede mandar un mismo estudiante
   por dia (evitar que un envio a lo loco sature el correo).

   Por que va por Edge Function y no insert directo del navegador:
   asi el aviso por correo sale SIEMPRE que se crea un ticket, sin
   depender de que el estudiante tambien tenga permiso de insert
   (mismo patron que examenes_generados).
   ============================================================ */
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const TOPE_DIA = 5;
const MAX_ASUNTO = 140;
const MAX_MENSAJE = 4000;
const MIN_MENSAJE = 5;
/* Mientras el remitente de pruebas de Resend (onboarding@resend.dev) no
   tenga un dominio propio verificado, solo puede entregar al MISMO correo
   con el que se creo la cuenta de Resend -- por eso el destino es
   configurable por variable de entorno (TICKET_CORREO_DESTINO) y no un
   valor fijo: el dia que se verifique un dominio, cambia sin tocar codigo. */
const CORREO_DESTINO = Deno.env.get('TICKET_CORREO_DESTINO') || 'fuzzunivers.3@gmail.com';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

function json(cuerpo: unknown, estado = 200){
  return new Response(JSON.stringify(cuerpo), {
    status: estado,
    headers: Object.assign({ 'Content-Type': 'application/json' }, CORS)
  });
}

function escHtml(t: string): string {
  return String(t || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* Una sola funcion, un solo proveedor por ahora (Resend: sin
   verificar dominio, el remitente por defecto onboarding@resend.dev
   ya puede mandarle a la propia cuenta del que se registro con
   RESEND_API_KEY). Cambiar de proveedor es tocar solo esto. */
async function avisarPorCorreo(t: {
  programa: string; nombre: string; correo: string; tipo: string; asunto: string; mensaje: string;
}): Promise<boolean> {
  const clave = Deno.env.get('RESEND_API_KEY');
  if (!clave) return false;

  const remitente = Deno.env.get('RESEND_FROM') || 'onboarding@resend.dev';
  const raiz = t.programa === 'unirm' ? 'UNIRMIA' : 'ENURMIA';
  const tipoTxt = t.tipo === 'problema' ? 'Problema' : 'Recomendación';

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${clave}` },
      body: JSON.stringify({
        from: `${raiz} — Te escuchamos <${remitente}>`,
        to: [CORREO_DESTINO],
        reply_to: t.correo || undefined,
        subject: `[${raiz}] ${tipoTxt}: ${t.asunto}`,
        text: `${tipoTxt} de ${t.nombre || 'un estudiante'} (${t.correo || 'sin correo'}), en ${raiz}.\n\n${t.mensaje}`,
        html: `<p><b>${escHtml(tipoTxt)}</b> de ${escHtml(t.nombre || 'un estudiante')} ` +
              `(${escHtml(t.correo || 'sin correo')}), en <b>${raiz}</b>.</p>` +
              `<p style="white-space:pre-wrap">${escHtml(t.mensaje)}</p>`
      })
    });
    return r.ok;
  } catch {
    return false;
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'metodo' }, 405);

  const admin = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  );

  /* 1. Sesion */
  const auth = req.headers.get('Authorization') || '';
  const token = auth.replace('Bearer ', '');
  const { data: quien } = await admin.auth.getUser(token);
  const user = quien?.user;
  if (!user) return json({ error: 'sin-sesion' }, 401);

  /* 2. El cuerpo */
  let cuerpo: Record<string, unknown>;
  try { cuerpo = await req.json(); } catch { return json({ error: 'cuerpo' }, 400); }

  const programa = cuerpo.programa === 'unirm' ? 'unirm' : 'enurm';
  const tipo = cuerpo.tipo === 'recomendacion' ? 'recomendacion' : 'problema';
  const asunto = String(cuerpo.asunto || '').trim().slice(0, MAX_ASUNTO);
  const mensaje = String(cuerpo.mensaje || '').trim().slice(0, MAX_MENSAJE);

  if (!asunto) return json({ error: 'sin-asunto' }, 400);
  if (mensaje.length < MIN_MENSAJE) return json({ error: 'mensaje-corto' }, 400);

  /* 3. Limite diario, para que un envio repetido por error no llene el
        correo. Se cuenta en UTC, igual que el resto de cuotas de la app. */
  const desde = new Date(); desde.setUTCHours(0, 0, 0, 0);
  const { count } = await admin.from('tickets')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', user.id).gte('creado', desde.toISOString());
  if ((count ?? 0) >= TOPE_DIA) return json({ error: 'sin-cuota' }, 429);

  /* 4. Nombre para el correo: lo que haya en perfiles, si no el que trae
        la sesion, si no el correo mismo. */
  const { data: perfil } = await admin.from('perfiles')
    .select('nombre').eq('user_id', user.id).maybeSingle();
  const metaNombre = (user.user_metadata as Record<string, unknown> | undefined)?.nombre;
  const nombre: string = perfil?.nombre || (typeof metaNombre === 'string' ? metaNombre : '') ||
    (user.email || '').split('@')[0];

  /* 5. Guardar */
  const fila = {
    user_id: user.id, programa, nombre, correo: user.email || null,
    tipo, asunto, mensaje
  };
  const { data: nuevo, error } = await admin.from('tickets').insert(fila).select('id, creado').single();
  if (error) return json({ error: 'guardado' }, 500);

  /* 6. Avisar por correo. Si falla, el ticket ya quedo guardado y el
        admin lo ve igual desde el panel: no se pierde nada. */
  const enviado = await avisarPorCorreo({ programa, nombre, correo: user.email || '', tipo, asunto, mensaje });
  if (enviado){
    await admin.from('tickets').update({ email_enviado: true }).eq('id', nuevo.id);
  }

  return json({ ok: true, id: nuevo.id, creado: nuevo.creado, emailEnviado: enviado });
});
