/* ============================================================
   ARTURO REFORMULA - el proxy
   Guarda la clave del proveedor, exige sesion y suscripcion
   activa, limita por estudiante y llama al modelo.

   La clave NUNCA baja al navegador: la app se publica como
   archivos estaticos y ahi una clave es una clave publica.
   ============================================================ */
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const TOPE_DIA = 20;
const TOPE_MATERIAL = 6144;

const SISTEMA = `Eres Arturo, profesor clinico. Un estudiante de medicina no entendio una explicacion y te pide que se la cuentes de otra forma.

Reglas que no puedes romper:
- Explica UNICAMENTE con el material que viene abajo. No anadas datos, cifras, dosis ni criterios que no esten ahi.
- Si lo que pregunta no se puede contestar con ese material, dilo en una frase y remitelo a la bibliografia que se te da.
- No repitas la explicacion original con otras palabras sueltas: cambia el angulo. Si la original iba por el mecanismo, ve por el caso; si iba por el caso, ve por lo que decide la conducta.

Como escribes:
- Espanol, de tu, frases cortas, prosa seguida.
- Nada de listas, titulos ni negritas.
- Maximo 110 palabras.
- Escribes alrededor de "que hago con este paciente delante".`;

function json(cuerpo: unknown, estado = 200){
  return new Response(JSON.stringify(cuerpo), {
    status: estado,
    headers: { 'Content-Type': 'application/json' }
  });
}

function armarPregunta(m: Record<string, unknown>): string {
  const ops = ((m.opciones as string[]) || [])
    .map((o, i) => `${'ABCD'[i]}) ${o}`).join('\n');
  const partes = [
    `Tema: ${m.tema}`,
    m.caso ? `Caso: ${m.caso}` : '',
    `Pregunta: ${m.enunciado}`,
    `Opciones:\n${ops}`,
    `Respuesta correcta: ${'ABCD'[m.correcta as number]}`,
    `Dato que decide: ${m.clave}`,
    `Explicacion escrita: ${m.exp}`,
    m.trampa ? `Trampa frecuente: ${m.trampa}` : '',
    m.descarte
      ? `El estudiante marco ${'ABCD'[m.eligio as number]}, y esta descartada porque: ${m.descarte}`
      : 'El estudiante no marco ninguna opcion.',
    `Bibliografia: ${m.ref}`
  ].filter(Boolean);
  return partes.join('\n\n') + '\n\nCuenta esta explicacion otra vez, por otro angulo.';
}

/* Una rama por proveedor, todas devuelven una cadena. Cambiar de modelo
   o de proveedor es cambiar una variable de entorno, no tocar la app. */
async function llamar(sistema: string, pregunta: string): Promise<string> {
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
        contents: [{ role: 'user', parts: [{ text: pregunta }] }],
        generationConfig: { maxOutputTokens: 400, temperature: 0.7 }
      })
    });
    if (r.status === 429) throw new Error('sin-cuota');
    if (!r.ok) throw new Error('proveedor-' + r.status);
    const j = await r.json();
    return j?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  }

  if (proveedor === 'groq'){
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${clave}` },
      body: JSON.stringify({
        model: modelo,
        max_tokens: 400,
        messages: [
          { role: 'system', content: sistema },
          { role: 'user', content: pregunta }
        ]
      })
    });
    if (r.status === 429) throw new Error('sin-cuota');
    if (!r.ok) throw new Error('proveedor-' + r.status);
    const j = await r.json();
    return j?.choices?.[0]?.message?.content ?? '';
  }

  if (proveedor === 'anthropic'){
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': clave,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: modelo,
        max_tokens: 400,
        system: sistema,
        messages: [{ role: 'user', content: pregunta }]
      })
    });
    if (r.status === 429) throw new Error('sin-cuota');
    if (!r.ok) throw new Error('proveedor-' + r.status);
    const j = await r.json();
    const bloque = (j?.content || []).find((b: { type: string }) => b.type === 'text');
    return bloque?.text ?? '';
  }

  throw new Error('proveedor-desconocido');
}

Deno.serve(async (req) => {
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

  /* 2. Suscripcion activa */
  const { data: sus } = await admin
    .from('suscripciones').select('estado').eq('user_id', user.id).maybeSingle();
  if (!sus || sus.estado !== 'activa') return json({ error: 'sin-suscripcion' }, 403);

  /* 3. Limite diario. El dia se cuenta en UTC, que es la fecha del
        servidor: para alguien en Republica Dominicana el contador se
        reinicia a las 8 de la noche. */
  const dia = new Date().toISOString().slice(0, 10);
  const { data: uso } = await admin
    .from('uso_ia').select('n').eq('user_id', user.id).eq('dia', dia).maybeSingle();
  const llevadas = uso?.n ?? 0;
  if (llevadas >= TOPE_DIA) return json({ error: 'sin-cuota' }, 429);

  /* 4. El cuerpo */
  let material: Record<string, unknown>;
  try {
    const cuerpo = await req.json();
    material = cuerpo?.material;
  } catch { return json({ error: 'material' }, 400); }
  if (!material || typeof material !== 'object') return json({ error: 'material' }, 400);
  if (JSON.stringify(material).length > TOPE_MATERIAL) return json({ error: 'material' }, 413);
  if (!material.exp || !material.enunciado) return json({ error: 'material' }, 400);

  /* 5. El modelo */
  let texto = '';
  try {
    texto = await llamar(SISTEMA, armarPregunta(material));
  } catch (e) {
    const msg = (e as Error).message;
    if (msg === 'sin-cuota') return json({ error: 'sin-cuota' }, 429);
    return json({ error: msg }, 502);
  }
  if (!texto.trim()) return json({ error: 'sin-respuesta' }, 502);

  /* 6. Se cuenta DESPUES de que el modelo respondiera: no se le gasta
        cuota al estudiante por un fallo del proveedor. */
  await admin.from('uso_ia')
    .upsert({ user_id: user.id, dia: dia, n: llevadas + 1 },
            { onConflict: 'user_id,dia' });

  return json({ texto: texto.trim() });
});
