/* ============================================================
   AVISO-CORREO — dos avisos por correo, una sola funcion
   1. 'registro': alguien se registro -> correo al admin.
      La llama el trigger aviso_registro de auth.users (pg_net), con
      el secreto compartido AVISO_SECRETO en la cabecera x-aviso.
   2. 'cortesia': el admin dio dias o meses desde el panel -> correo
      al estudiante. La llama el navegador del admin con su sesion;
      aqui se comprueba que de verdad es admin.
   2b. 'regalo' (solo con el secreto): campana a varios estudiantes.
   2c. 'enviar' (sesion de admin): el redactor de "Te escuchamos";
      plantillas, varios destinatarios y vista previa sin enviar.
   3. 'estado' (diagnostico, solo con el secreto): dominios de Resend.

   Va con verify_jwt = false porque el trigger no tiene sesion de
   usuario; cada camino se autentica a mano mas abajo.
   ============================================================ */
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

/* Mismo destino que los tickets de "Te escuchamos". */
const CORREO_ADMIN = Deno.env.get('TICKET_CORREO_DESTINO') || 'fuzzunivers.3@gmail.com';
const WEB = 'https://www.enurmia.dpdns.org';

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
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const raizDe = (p: string) => p === 'unirm' ? 'UNIRMIA' : 'ENURMIA';

function fechaLarga(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('es-DO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Santo_Domingo' });
  } catch { return iso.slice(0, 10); }
}

/* Dos proveedores. Brevo va primero si tiene clave: deja enviar a
   cualquier estudiante con solo verificar el correo remitente (Resend
   exige un dominio propio y no acepta dpdns.org por ser publico).
   Resend queda de respaldo, y con onboarding@resend.dev solo entrega
   a la propia cuenta de Resend. El error se devuelve tal cual: el panel
   lo ensena. */
type Correo = { de: string; para: string; asunto: string; texto: string; html: string; responder?: string };

async function enviarBrevo(c: Correo, clave: string): Promise<{ ok: boolean; error?: string }> {
  const remitente = Deno.env.get('BREVO_FROM') || 'enurmia.rd@gmail.com';
  try {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'accept': 'application/json', 'api-key': clave },
      body: JSON.stringify({
        sender: { name: c.de, email: remitente }, to: [{ email: c.para }],
        replyTo: c.responder ? { email: c.responder } : undefined,
        subject: c.asunto, textContent: c.texto, htmlContent: c.html
      })
    });
    if (r.ok) return { ok: true };
    const t = await r.json().catch(() => ({}));
    return { ok: false, error: (t && (t.message || t.code)) || ('Brevo ' + r.status) };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

async function enviar(c: Correo): Promise<{ ok: boolean; error?: string }> {
  const brevo = Deno.env.get('BREVO_API_KEY');
  if (brevo) return enviarBrevo(c, brevo);
  const clave = Deno.env.get('RESEND_API_KEY');
  if (!clave) return { ok: false, error: 'Falta RESEND_API_KEY en el servidor.' };
  const remitente = Deno.env.get('RESEND_FROM') || 'onboarding@resend.dev';
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${clave}` },
      body: JSON.stringify({
        from: `${c.de} <${remitente}>`, to: [c.para], reply_to: c.responder || undefined,
        subject: c.asunto, text: c.texto, html: c.html
      })
    });
    if (r.ok) return { ok: true };
    const t = await r.json().catch(() => ({}));
    return { ok: false, error: (t && (t.message || t.error)) || ('Resend ' + r.status) };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

/* Caja comun de los correos: vino del logo, legible en el telefono. */
function plantilla(titulo: string, cuerpo: string, boton?: { texto: string; url: string }): string {
  return '<div style="background:#f6f0ec;padding:28px 12px;font-family:Arial,Helvetica,sans-serif">' +
    '<div style="max-width:520px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden">' +
      '<div style="background:#47061C;color:#fff;padding:20px 26px;font-size:20px;font-weight:800">ENURM<span style="color:#F96F89">IA</span></div>' +
      '<div style="padding:26px;color:#2a1a20;font-size:15px;line-height:1.55">' +
        '<h1 style="font-size:22px;margin:0 0 12px;color:#47061C">' + titulo + '</h1>' + cuerpo +
        (boton ? '<p style="margin:24px 0 4px"><a href="' + boton.url + '" style="background:#8E1230;color:#fff;text-decoration:none;' +
          'padding:13px 22px;border-radius:10px;font-weight:700;display:inline-block">' + escHtml(boton.texto) + '</a></p>' : '') +
      '</div>' +
    '</div></div>';
}

/* La caja con el logo, para los correos que redacta el admin. El logo se
   sirve desde la web (Gmail y Outlook no muestran imagenes en base64). */
function plantillaMarca(o: { raiz: string; etiqueta: string; titulo: string; cuerpo: string; pie: string;
  boton?: { texto: string; url: string } }): string {
  return '<div style="background:#f6f0ec;padding:28px 12px;font-family:Arial,Helvetica,sans-serif">' +
    '<div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #ead9de">' +
      '<div style="background:#47061C;padding:26px 20px 22px;text-align:center">' +
        '<img src="' + WEB + '/assets/img/logo-enurmia.png" alt="' + o.raiz + '" width="200" ' +
        'style="display:block;margin:0 auto;width:200px;max-width:70%;height:auto;border:0;color:#ffffff;font-size:24px;font-weight:800">' +
      '</div>' +
      '<div style="height:4px;background:#F96F89;line-height:4px;font-size:0">&nbsp;</div>' +
      '<div style="padding:30px 28px 26px;color:#2a1a20;font-size:15px;line-height:1.6">' +
        (o.etiqueta ? '<p style="margin:0 0 6px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#8E1230;font-weight:700">' + escHtml(o.etiqueta) + '</p>' : '') +
        (o.titulo ? '<h1 style="font-size:24px;line-height:1.25;margin:0 0 18px;color:#47061C">' + escHtml(o.titulo) + '</h1>' : '') +
        o.cuerpo +
        (o.boton ? '<p style="margin:24px 0 24px;text-align:center"><a href="' + o.boton.url + '" style="background:#8E1230;color:#ffffff;' +
          'text-decoration:none;padding:14px 28px;border-radius:10px;font-weight:700;display:inline-block">' + escHtml(o.boton.texto) + '</a></p>' : '') +
        '<p style="margin:0 0 4px">¡Mucho éxito en tu preparación!</p>' +
        '<p style="margin:0;color:#47061C"><strong>Equipo ' + o.raiz + '</strong><br><span style="font-size:13px;color:#8a7a80">Tu ruta en medicina</span></p>' +
        '<p style="margin:22px 0 0;font-size:12px;color:#8a7a80">' + escHtml(o.pie) + '</p>' +
      '</div>' +
      '<div style="background:#47061C;color:#e9cfd6;text-align:center;padding:14px 20px;font-size:12px">' +
        o.raiz.slice(0, -2) + '<span style="color:#F96F89;font-weight:700">IA</span> · ' +
        '<a href="' + WEB + '" style="color:#F96F89;text-decoration:none">www.enurmia.dpdns.org</a>' +
      '</div>' +
    '</div></div>';
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'metodo' }, 405);

  let cuerpo: Record<string, unknown>;
  try { cuerpo = await req.json(); } catch { return json({ error: 'cuerpo' }, 400); }
  const tipo = String(cuerpo.tipo || '');

  const admin = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
  const secreto = Deno.env.get('AVISO_SECRETO') || '';
  const conSecreto = !!secreto && req.headers.get('x-aviso') === secreto;

  /* ---------- 1. registro (solo desde el trigger) ---------- */
  if (tipo === 'registro'){
    if (!conSecreto) return json({ error: 'no-autorizado' }, 401);
    const correo = String(cuerpo.correo || '');
    const nombre = String(cuerpo.nombre || '') || correo.split('@')[0];
    const raiz = raizDe(String(cuerpo.programa || ''));
    const promo = cuerpo.acepta_correos === true ? 'Sí' : 'No';
    const { count } = await admin.from('perfiles').select('user_id', { count: 'exact', head: true });
    const r = await enviar({
      de: `${raiz} — Registros`, para: CORREO_ADMIN, responder: correo || undefined,
      asunto: `[${raiz}] Nuevo registro: ${nombre}`,
      texto: `${nombre} (${correo}) se acaba de registrar en ${raiz}.\nCuentas en total: ${count ?? '?'}.\n\nPanel: ${WEB}/app.html#admin`,
      html: plantilla('Nuevo registro en ' + raiz,
        '<p><b>' + escHtml(nombre) + '</b> se acaba de registrar.</p>' +
        '<p style="margin:0">Correo: <a href="mailto:' + escHtml(correo) + '">' + escHtml(correo) + '</a><br>' +
        'Programa: ' + raiz + '<br>Acepta correos de promociones: <b>' + promo + '</b><br>Cuentas en total: ' + (count ?? '?') + '</p>',
        { texto: 'Abrir el panel', url: WEB + '/app.html#admin' })
    });
    return json(r, r.ok ? 200 : 502);
  }

  /* ---------- 2. cortesia (desde el panel del admin) ---------- */
  if (tipo === 'cortesia'){
    const token = (req.headers.get('Authorization') || '').replace('Bearer ', '');
    const { data: quien } = await admin.auth.getUser(token);
    if (!quien?.user) return json({ error: 'sin-sesion' }, 401);
    const { data: yo } = await admin.from('perfiles').select('rol').eq('user_id', quien.user.id).maybeSingle();
    if (yo?.rol !== 'admin') return json({ error: 'no-autorizado' }, 403);

    const uid = String(cuerpo.user_id || '');
    const { data: sus } = await admin.from('suscripciones').select('plan, estado, vence').eq('user_id', uid).maybeSingle();
    const { data: per } = await admin.from('perfiles').select('correo, nombre, programa').eq('user_id', uid).maybeSingle();
    if (!sus?.vence || !per?.correo) return json({ ok: false, error: 'Ese estudiante no tiene correo o fecha de vencimiento.' }, 400);

    /* Los dias regalados se cuentan desde lo que tenia (o desde hoy si ya
       estaba vencido): asi el correo dice lo mismo que hizo el boton. */
    const antes = cuerpo.vence_antes ? new Date(String(cuerpo.vence_antes)).getTime() : 0;
    const base = Math.max(antes || 0, Date.now());
    const dias = Math.max(1, Math.round((new Date(sus.vence).getTime() - base) / 86400000));
    const cuanto = dias % 365 === 0 ? (dias / 365 === 1 ? '1 año' : (dias / 365) + ' años')
      : dias % 30 === 0 ? (dias / 30 === 1 ? '1 mes' : (dias / 30) + ' meses')
      : dias === 1 ? '1 día' : dias + ' días';
    const raiz = raizDe(per.programa || '');
    const nombre = (per.nombre || per.correo.split('@')[0]).split(' ')[0];
    const vence = fechaLarga(sus.vence);
    const regalo = sus.plan === 'cortesia';

    const titulo = regalo ? `¡Te regalamos ${cuanto} de ${raiz}!` : `Tu membresía de ${raiz} está activa`;
    const parrafo = regalo
      ? `Hola, ${nombre}. Te activamos <b>${cuanto} de cortesía</b> en ${raiz}: tienes acceso completo a simulacros, práctica con explicación, casos clínicos y todo lo demás.`
      : `Hola, ${nombre}. Sumamos <b>${cuanto}</b> a tu membresía de ${raiz}. Ya tienes acceso completo.`;
    const r = await enviar({
      de: raiz, para: per.correo, responder: CORREO_ADMIN,
      asunto: titulo,
      texto: parrafo.replace(/<[^>]+>/g, '') + `\n\nTu acceso vence el ${vence}.\nEntra aquí: ${WEB}`,
      html: plantilla(escHtml(titulo),
        '<p>' + parrafo.replace(nombre, escHtml(nombre)) + '</p>' +
        '<p style="margin:0">Tu acceso vence el <b>' + escHtml(vence) + '</b>.</p>' +
        '<p style="margin:22px 0 0;font-size:12px;color:#8a7a80">Te escribimos porque tienes una cuenta en ' + raiz +
        ' y este aviso es sobre tu membresía.</p>',
        { texto: 'Entrar a ' + raiz, url: WEB })
    });
    return json({ ...r, para: per.correo, cuanto }, r.ok ? 200 : 502);
  }

  /* ---------- 2b. regalo (envio a varios, solo con el secreto) ----------
     Para campanas puntuales como "1 mes gratis": la membresia ya se
     extendio antes en la base de datos; aqui solo se lee la fecha real
     de cada estudiante y se le escribe. Un correo cada 300 ms para no
     pasar el limite de Brevo. */
  if (tipo === 'regalo'){
    if (!conSecreto) return json({ error: 'no-autorizado' }, 401);
    const ids = Array.isArray(cuerpo.user_ids) ? (cuerpo.user_ids as unknown[]).map(String).slice(0, 200) : [];
    const res: { correo: string; ok: boolean; error?: string }[] = [];
    for (const uid of ids){
      const { data: per } = await admin.from('perfiles').select('correo, nombre, programa').eq('user_id', uid).maybeSingle();
      const { data: sus } = await admin.from('suscripciones').select('vence').eq('user_id', uid).maybeSingle();
      if (!per?.correo || !sus?.vence){ res.push({ correo: per?.correo || uid, ok: false, error: 'sin correo o sin fecha' }); continue; }
      const raiz = raizDe(per.programa || '');
      const nombre = escHtml(((per.nombre || '').trim().split(/\s+/)[0]) || per.correo.split('@')[0]);
      const vence = fechaLarga(sus.vence);
      const incluye = raiz === 'UNIRMIA'
        ? 'temas explicados, práctica con explicación detallada, flashcards y casos clínicos'
        : 'simulacros con reloj, preguntas con explicación detallada, casos clínicos, medicina práctica, flashcards y las clases de Arturo, tu profesor dentro de la plataforma';
      const p = [
        `Gracias por formar parte de ${raiz}. Queremos acompañarte de cerca en tu preparación y, como muestra de ello, te regalamos <b>un mes de suscripción gratis</b>, que ya está activo en tu cuenta.`,
        `Durante este mes tienes acceso completo a ${incluye}.`,
        `Tu acceso está activo hasta el <b>${escHtml(vence)}</b>. No tienes que hacer nada: solo entra con tu correo y tu contraseña de siempre.`,
        `Si tienes cualquier duda, responde a este correo o escríbenos por WhatsApp al 849-371-2222. Estaremos encantados de ayudarte.`
      ];
      const r = await enviar({
        de: raiz, para: per.correo, responder: Deno.env.get('BREVO_FROM') || undefined,
        asunto: `Un regalo para ti: 1 mes gratis de ${raiz}`,
        texto: `Hola, ${nombre}:\n\n` + p.map((x) => x.replace(/<[^>]+>/g, '')).join('\n\n') + `\n\n¡Mucho éxito en tu estudio!\nEl equipo de ${raiz}\n${WEB}`,
        html: plantilla(`Hola, ${nombre}:`,
          p.map((x) => '<p>' + x + '</p>').join('') +
          '<p style="margin:18px 0 0">¡Mucho éxito en tu estudio!<br><b>El equipo de ' + raiz + '</b></p>' +
          '<p style="margin:22px 0 0;font-size:12px;color:#8a7a80">Te escribimos porque tienes una cuenta en ' + raiz + ' y este aviso es sobre tu membresía.</p>',
          { texto: 'Entrar a ' + raiz, url: WEB })
      });
      res.push({ correo: per.correo, ...r });
      await new Promise((ok) => setTimeout(ok, 300));
    }
    return json({ enviados: res.filter((x) => x.ok).length, fallidos: res.filter((x) => !x.ok), total: res.length });
  }

  /* ---------- 2c. enviar (redactor de "Te escuchamos", solo admin) ----------
     El admin elige estudiantes, una plantilla y escribe el texto. El texto
     es plano: aqui se escapa y se parte en parrafos, asi nadie mete HTML
     en un correo que sale con el nombre de la marca. Marcadores:
     {nombre} {programa} {vence} {plan}. Con vista:true NO se envia nada:
     devuelve el HTML del primer destinatario, que es justo lo que llegaria.
     Las promociones solo salen a quien marco la casilla al registrarse
     (perfiles.acepta_correos); a los demas se les salta y se dice por que. */
  if (tipo === 'enviar'){
    const token = (req.headers.get('Authorization') || '').replace('Bearer ', '');
    const { data: quien } = await admin.auth.getUser(token);
    if (!quien?.user) return json({ error: 'sin-sesion' }, 401);
    const { data: yo } = await admin.from('perfiles').select('rol').eq('user_id', quien.user.id).maybeSingle();
    if (yo?.rol !== 'admin') return json({ error: 'no-autorizado' }, 403);

    const ids = Array.isArray(cuerpo.user_ids) ? (cuerpo.user_ids as unknown[]).map(String).slice(0, 200) : [];
    const asuntoBase = String(cuerpo.asunto || '').trim().slice(0, 160);
    const tituloBase = String(cuerpo.titulo || '').trim().slice(0, 160);
    const mensajeBase = String(cuerpo.mensaje || '').trim().slice(0, 6000);
    const etiqueta = String(cuerpo.etiqueta || '').trim().slice(0, 60);
    const promo = cuerpo.promo === true;
    const conBoton = cuerpo.boton !== false;
    const vista = cuerpo.vista === true;
    if (!ids.length) return json({ error: 'sin-destinatarios' }, 400);
    if (!asuntoBase || !mensajeBase) return json({ error: 'sin-texto' }, 400);

    const PLAN_TXT: Record<string, string> = { prueba: 'prueba gratis', mensual: 'mensual', trimestral: 'trimestral',
      semestral: 'semestral', anual: 'anual', cortesia: 'de cortesía' };
    const res: { correo: string; ok: boolean; error?: string }[] = [];

    for (const uid of (vista ? ids.slice(0, 1) : ids)){
      const { data: per } = await admin.from('perfiles').select('correo, nombre, programa, acepta_correos').eq('user_id', uid).maybeSingle();
      if (!per?.correo){ res.push({ correo: uid, ok: false, error: 'sin correo' }); continue; }
      if (promo && !per.acepta_correos && !vista){ res.push({ correo: per.correo, ok: false, error: 'no aceptó promociones' }); continue; }
      const { data: sus } = await admin.from('suscripciones').select('plan, vence').eq('user_id', uid).maybeSingle();
      const raiz = raizDe(per.programa || '');
      const nombre = ((per.nombre || '').trim().split(/\s+/)[0]) || per.correo.split('@')[0];
      const datos: Record<string, string> = {
        nombre, programa: raiz,
        vence: sus?.vence ? fechaLarga(sus.vence) : '(sin fecha)',
        plan: sus?.plan ? (PLAN_TXT[sus.plan] || sus.plan) : '(sin plan)'
      };
      const poner = (t: string) => t.replace(/\{(nombre|programa|vence|plan)\}/g, (_, k) => datos[k]);
      const asunto = poner(asuntoBase);
      const titulo = poner(tituloBase);
      const parrafos = poner(mensajeBase).split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
      const cuerpoHtml = parrafos.map((p) =>
        '<p style="margin:0 0 14px">' + escHtml(p).replace(/\*([^*\n]+)\*/g, '<strong style="color:#8E1230">$1</strong>').replace(/\n/g, '<br>') + '</p>').join('');
      const pie = promo
        ? 'Te escribimos porque aceptaste recibir novedades de ' + raiz + ' al registrarte.'
        : 'Te escribimos porque tienes una cuenta en ' + raiz + '.';
      const html = plantillaMarca({ raiz, etiqueta, titulo, cuerpo: cuerpoHtml, pie,
        boton: conBoton ? { texto: 'Entrar a ' + raiz, url: WEB } : undefined });
      const texto = (titulo ? titulo + '\n\n' : '') + parrafos.map((p) => p.replace(/\*([^*\n]+)\*/g, '$1')).join('\n\n') +
        `\n\nEquipo ${raiz}\n${WEB}`;

      if (vista) return json({ ok: true, para: per.correo, asunto, html });

      const r = await enviar({ de: raiz, para: per.correo, asunto, texto, html,
        responder: Deno.env.get('BREVO_FROM') || undefined });
      res.push({ correo: per.correo, ...r });
      await new Promise((ok) => setTimeout(ok, 300));
    }
    if (vista) return json({ ok: false, error: res[0]?.error || 'sin correo' }, 400);
    return json({ enviados: res.filter((x) => x.ok).length, fallidos: res.filter((x) => !x.ok), total: res.length });
  }

  /* ---------- 3. estado (diagnostico) ---------- */
  if (tipo === 'estado'){
    if (!conSecreto) return json({ error: 'no-autorizado' }, 401);
    const clave = Deno.env.get('RESEND_API_KEY');
    const r = await fetch('https://api.resend.com/domains', { headers: { 'Authorization': `Bearer ${clave}` } });
    const t = await r.json().catch(() => ({}));
    return json({ remitente: Deno.env.get('RESEND_FROM') || 'onboarding@resend.dev', http: r.status,
      proveedor: Deno.env.get('BREVO_API_KEY') ? 'brevo' : 'resend', remitenteBrevo: Deno.env.get('BREVO_FROM') || 'enurmia.rd@gmail.com',
      dominios: ((t && t.data) || []).map((d: { name: string; status: string }) => ({ name: d.name, status: d.status })),
      mensaje: t && t.message });
  }

  return json({ error: 'tipo' }, 400);
});
