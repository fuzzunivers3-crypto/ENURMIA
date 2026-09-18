/* ============================================================
   EXAMINAR - el proxy
   El estudiante sube un documento propio (PDF o Word, extraido a
   texto plano en el navegador) y esto genera un examen de opcion
   multiple a partir de EXACTAMENTE ese material. Misma clave y
   mismo servidor que arturo-reexplica; distinto uso, distinta
   cuota (esto pesa mucho mas por llamada).

   La clave NUNCA baja al navegador: la app se publica como
   archivos estaticos y ahi una clave es una clave publica.
   ============================================================ */
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const TOPE_DIA = 3;             // examenes generados por estudiante al dia
const TOPE_TEXTO = 45000;       // caracteres del material que se manda al modelo
const MIN_TEXTO = 400;          // menos que esto no da para preguntas serias
const MAX_PREGUNTAS = 15;

const SISTEMA = `Eres un profesor que redacta examenes de practica para un estudiante universitario dominicano, a partir UNICAMENTE del material de estudio que el mismo estudiante subio.

Reglas que no puedes romper:
- Usa SOLO el contenido del material de abajo. No inventes datos, cifras, nombres ni criterios que no esten ahi.
- Cada pregunta tiene que poder responderse leyendo el material. Si el material no alcanza para el numero de preguntas pedido, genera menos: nunca rellenes con algo inventado.
- Cuatro opciones por pregunta, una sola correcta, variando el tipo (definicion, aplicacion de un caso, comparacion) en vez de repetir el mismo patron.
- Cada opcion incorrecta necesita su propia razon de por que esta mal, no una frase generica repetida.
- Cuando el tema de una pregunta sea del ambito clinico o de la salud, agrega en "consideracion" un dato clinico BASICO y de consenso bien establecido (algo que cualquier libro de texto estandar confirmaria) que refuerce por que la respuesta correcta lo es. Si la materia no es clinica, o no estas seguro de que el dato sea exacto, deja "consideracion" como cadena vacia: es preferible no decir nada a inventar un dato clinico.
- Español, con el mismo vocabulario y nivel del material.

Devuelve exactamente el JSON que pide el formato de salida, nada de texto fuera de eso.`;

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

async function motivo(r: Response, clave: string): Promise<string> {
  let t = '';
  try { t = await r.text(); } catch { t = ''; }
  if (clave) t = t.split(clave).join('***');
  return t.replace(/\s+/g, ' ').slice(0, 300);
}

type PreguntaCruda = {
  enunciado?: string; caso?: string; tema?: string;
  ops?: string[]; ok?: number; clave?: string; exp?: string;
  descartes?: string[]; trampa?: string; consideracion?: string;
};

const ESQUEMA = {
  type: 'ARRAY',
  items: {
    type: 'OBJECT',
    properties: {
      enunciado:     { type: 'STRING' },
      caso:          { type: 'STRING' },
      tema:          { type: 'STRING' },
      ops:           { type: 'ARRAY', items: { type: 'STRING' } },
      ok:            { type: 'INTEGER' },
      clave:         { type: 'STRING' },
      exp:           { type: 'STRING' },
      descartes:     { type: 'ARRAY', items: { type: 'STRING' } },
      trampa:        { type: 'STRING' },
      consideracion: { type: 'STRING' }
    },
    required: ['enunciado', 'ops', 'ok', 'clave', 'exp', 'descartes']
  }
};

function prompt(texto: string, n: number, titulo: string): string {
  return `Material (documento del estudiante, titulo "${titulo}"):\n\n${texto}\n\n---\nGenera exactamente ${n} preguntas de opcion multiple sobre este material, siguiendo todas las reglas del sistema.`;
}

/* Una rama por proveedor. Solo la de Gemini pide salida JSON estructurada
   de verdad (responseSchema); las otras dos piden JSON por instruccion y
   se parsean con tolerancia, para el dia que se cambie de proveedor. */
async function llamar(sistema: string, mensaje: string): Promise<PreguntaCruda[]> {
  const proveedor = Deno.env.get('IA_PROVEEDOR') || 'gemini';
  const modelo = Deno.env.get('IA_MODELO') || 'gemini-2.0-flash';
  const clave = Deno.env.get('IA_CLAVE') || '';
  if (!clave) throw new Error('sin-clave');

  if (proveedor === 'gemini'){
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent?key=${clave}`;
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: sistema }] },
        contents: [{ role: 'user', parts: [{ text: mensaje }] }],
        generationConfig: {
          maxOutputTokens: 8192, temperature: 0.6,
          responseMimeType: 'application/json',
          responseSchema: ESQUEMA
        }
      })
    });
    if (r.status === 429) throw new Error('sin-cuota');
    if (!r.ok) throw new Error('proveedor-' + r.status + ': ' + await motivo(r, clave));
    const j = await r.json();
    const cand = j?.candidates?.[0];
    const txt = cand?.content?.parts?.[0]?.text ?? '';
    if (!txt && cand?.finishReason) throw new Error('corte-' + cand.finishReason);
    try { return JSON.parse(txt); } catch { throw new Error('json-invalido'); }
  }

  if (proveedor === 'groq' || proveedor === 'anthropic'){
    const pedido = mensaje + '\n\nResponde SOLO con un array JSON valido, sin texto alrededor ni bloques de codigo.';
    let txt = '';
    if (proveedor === 'groq'){
      const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${clave}` },
        body: JSON.stringify({ model: modelo, max_tokens: 4000,
          messages: [{ role: 'system', content: sistema }, { role: 'user', content: pedido }] })
      });
      if (r.status === 429) throw new Error('sin-cuota');
      if (!r.ok) throw new Error('proveedor-' + r.status + ': ' + await motivo(r, clave));
      const j = await r.json();
      txt = j?.choices?.[0]?.message?.content ?? '';
    } else {
      const r = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': clave, 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({ model: modelo, max_tokens: 4000, system: sistema,
          messages: [{ role: 'user', content: pedido }] })
      });
      if (r.status === 429) throw new Error('sin-cuota');
      if (!r.ok) throw new Error('proveedor-' + r.status + ': ' + await motivo(r, clave));
      const j = await r.json();
      const bloque = (j?.content || []).find((b: { type: string }) => b.type === 'text');
      txt = bloque?.text ?? '';
    }
    const m = txt.match(/\[[\s\S]*\]/);
    if (!m) throw new Error('json-invalido');
    try { return JSON.parse(m[0]); } catch { throw new Error('json-invalido'); }
  }

  throw new Error('proveedor-desconocido');
}

/* Convierte lo que devolvio el modelo al formato que ya sabe pintar
   sesion.js en el resto de la app (id, enunciado, ops, ok, exp, no{},
   clave, trampa, ref, esp). El "ref" NUNCA lo pone el modelo: seria una
   bibliografia inventada, y este banco no tiene forma de contrastarla.
   La fuente honesta es el propio documento del estudiante. */
function normalizar(crudas: PreguntaCruda[], titulo: string, esp: string): Record<string, unknown>[] {
  const out: Record<string, unknown>[] = [];
  crudas.slice(0, MAX_PREGUNTAS).forEach((p, i) => {
    if (!p || !Array.isArray(p.ops) || p.ops.length !== 4) return;
    const ok = Number(p.ok);
    if (!Number.isInteger(ok) || ok < 0 || ok > 3) return;
    if (!p.enunciado || !p.clave || !p.exp) return;

    const no: Record<number, string> = {};
    (p.descartes || []).forEach((d, k) => { if (k !== ok && d) no[k] = d; });

    out.push({
      id: 'GEN-' + Date.now().toString(36) + '-' + i,
      esp,
      tema: p.tema || titulo,
      enunciado: p.enunciado,
      caso: p.caso || undefined,
      ops: p.ops,
      ok,
      clave: p.clave,
      exp: p.exp,
      no,
      trampa: p.trampa || undefined,
      consideracion: p.consideracion || undefined,
      ref: 'Tu documento: «' + titulo + '». Generado automaticamente: repasa el razonamiento con criterio propio.'
    });
  });
  return out;
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

  /* 2. Suscripcion activa DE VERDAD (mismo criterio que arturo-reexplica:
        la columna puede seguir en 'activa' con la fecha ya pasada). */
  const { data: sus } = await admin
    .from('suscripciones').select('estado, vence').eq('user_id', user.id).maybeSingle();
  if (!sus || sus.estado !== 'activa') return json({ error: 'sin-suscripcion' }, 403);
  if (sus.vence && new Date(sus.vence).getTime() < Date.now()){
    return json({ error: 'sin-suscripcion' }, 403);
  }

  /* 3. Limite diario, en su propia tabla: generar un examen pesa mucho mas
        por llamada que una reformulacion, asi que comparte proveedor y
        clave pero NO comparte cupo con Arturo. */
  const dia = new Date().toISOString().slice(0, 10);
  const { data: uso } = await admin
    .from('examinar_uso').select('n').eq('user_id', user.id).eq('dia', dia).maybeSingle();
  const llevados = uso?.n ?? 0;
  if (llevados >= TOPE_DIA) return json({ error: 'sin-cuota' }, 429);

  /* 4. El cuerpo */
  let texto = '', titulo = '', programa = 'unirm', numPreguntas = 10;
  try {
    const cuerpo = await req.json();
    texto = String(cuerpo?.texto || '');
    titulo = String(cuerpo?.titulo || 'Documento sin título').slice(0, 120);
    programa = cuerpo?.programa === 'enurm' ? 'enurm' : 'unirm';
    numPreguntas = Math.min(MAX_PREGUNTAS, Math.max(3, Math.round(Number(cuerpo?.numPreguntas) || 10)));
  } catch { return json({ error: 'cuerpo' }, 400); }

  if (texto.length < MIN_TEXTO) return json({ error: 'material-corto' }, 400);
  if (texto.length > TOPE_TEXTO) texto = texto.slice(0, TOPE_TEXTO);

  /* 5. El modelo */
  let crudas: PreguntaCruda[] = [];
  try {
    crudas = await llamar(SISTEMA, prompt(texto, numPreguntas, titulo));
  } catch (e) {
    const msg = (e as Error).message;
    if (msg === 'sin-cuota') return json({ error: 'sin-cuota' }, 429);
    return json({ error: msg }, 502);
  }

  const preguntas = normalizar(crudas, titulo, 'Generado · ' + titulo);
  if (!preguntas.length) return json({ error: 'sin-preguntas' }, 502);

  /* 6. Guardar el examen. Con service_role, asi que el RLS de la tabla no
        aplica aqui: la politica de la tabla es para cuando el ESTUDIANTE
        la lee despues desde el navegador. */
  const { data: fila, error: errGuardar } = await admin
    .from('examenes_generados')
    .insert({ user_id: user.id, programa, titulo, preguntas })
    .select('id, titulo, programa, preguntas, creado')
    .single();
  if (errGuardar) return json({ error: 'guardar: ' + errGuardar.message }, 500);

  /* 7. Se cuenta DESPUES de que todo saliera bien: un fallo del proveedor
        o al guardar no le gasta el dia al estudiante. */
  await admin.from('examinar_uso')
    .upsert({ user_id: user.id, dia, n: llevados + 1 }, { onConflict: 'user_id,dia' });

  return json({ examen: fila });
});
