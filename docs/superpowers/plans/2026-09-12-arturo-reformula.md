# Arturo reformula — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Un botón "Aún no lo entiendo" en la revisión de una pregunta fallada, que hace que Arturo cuente esa misma explicación por otro ángulo, usando solo el material ya escrito para esa pregunta.

**Architecture:** Tres piezas. Un cliente sin DOM (`arturo-ia.js`) que arma el material, guarda lo generado y lo reutiliza. Una Edge Function de Supabase que guarda la clave, exige sesión y suscripción, limita por estudiante y llama al proveedor. Y el botón, en los dos sitios de `sesion.js` donde ya se pintan los descartes.

**Tech Stack:** HTML/CSS/JavaScript sin build en el navegador. Deno + TypeScript en la Edge Function. Supabase (auth, Postgres, Functions) ya presente. Proveedor por defecto: Gemini Flash en su capa gratuita.

**Spec:** `docs/superpowers/specs/2026-09-11-arturo-reformula-design.md`

## Global Constraints

- **Español en todo.** Comentarios del código fuente **sin tildes** (convención del proyecto); texto que ve el estudiante, **con tildes**.
- **La clave de API nunca sale del servidor.** Ni en `assets/`, ni en `app.html`, ni en ningún archivo que se publique. Si en cualquier paso te ves escribiendo la clave en un archivo del navegador, has entendido mal el diseño: para.
- **`assets/js/arturo-ia.js` no toca el DOM.** Tiene que cargarse en Node para que el validador lo compruebe. `async`/`await` sí se usa aquí: `nube.js` ya lo hace.
- **Cadenas en comillas simples**, cuidado con los apóstrofos dentro del texto.
- **Umbrales, textuales del spec:** material por debajo de **6 KB**, tope de **20 llamadas al día** por estudiante contadas en **UTC**, **100** reformulaciones guardadas como máximo, respuesta de **110 palabras** como máximo.
- **Nada de esto puede romper lo que ya existe.** Si la función no responde, o no hay internet, o la cuenta es solo local, la app tiene que ser exactamente la de hoy.
- **Verificación:** `node --check` sobre lo tocado y `node herramientas_validar_ruta.js`.
- **Rama:** `ruta-temario`, ya creada. Un commit por tarea.

## Estructura de ficheros

| Fichero | Responsabilidad |
|---|---|
| `assets/js/arturo-ia.js` | **Nuevo.** Arma el material, decide si la función está disponible, guarda y reutiliza lo generado. Sin DOM. |
| `supabase/functions/arturo-reexplica/index.ts` | **Nuevo.** El proxy: auth, suscripción, límite diario, prompt y llamada al proveedor. |
| `NUBE_IA.txt` | **Nuevo.** Cómo desplegar y qué variables poner, en el tono de `NUBE_SUPABASE.txt`. |
| `assets/js/nube.js` | Modificado: `invocar(nombre, cuerpo)` para llamar Edge Functions con la sesión. |
| `assets/js/vistas/sesion.js` | Modificado: el botón, en los dos sitios que ya pintan descartes. |
| `assets/js/almacen.js` | Modificado: `reexplicaciones: {}` y `ajustes.reexplicar: true`. |
| `assets/js/vistas/paneles.js` | Modificado: el interruptor en Ajustes. |
| `app.html` | Modificado: un `<script>`. |
| `herramientas_validar_ruta.js` | Modificado: las comprobaciones del material y la poda. |

---

### Task 1: El cliente — armar el material, guardar y reutilizar

**Files:**
- Create: `assets/js/arturo-ia.js`
- Modify: `assets/js/almacen.js` (`datosNuevos`)
- Modify: `herramientas_validar_ruta.js`

**Interfaces:**
- Consumes: `Almacen.datos()`, `Almacen.guardar()`, `Almacen.sesion()`, `Motor.porId(id)`.
- Produces:
  - `ArturoIA.armarMaterial(q, elegida)` → objeto con la lista blanca de campos, o `null` si la pregunta no tiene `exp`
  - `ArturoIA.clave(qid, elegida)` → `'TE-012|2'` o `'TE-012|-'`
  - `ArturoIA.guardada(qid, elegida)` → `string | null`
  - `ArturoIA.guardar(qid, elegida, texto)` → guarda y poda a 100
  - `ArturoIA.disponible()` → `bool`
  - `ArturoIA.pesa(material)` → `number` (bytes del JSON)
  - `ArturoIA._podar(mapa, tope)` → mapa podado (para el validador)
  - `ArturoIA.reexplicar(q, elegida)` → `Promise<string>`; rechaza con `Error` cuyo `message` es uno de `sin-material`, `material-grande`, `sin-cuota`, `sin-respuesta`

- [ ] **Step 1: Escribir las comprobaciones que fallan**

Insertar en `herramientas_validar_ruta.js`, justo antes de la línea final `fin();`:

```js
/* ============================================================
   14. Arturo reformula: el material que se manda
   ============================================================ */
titulo('Material para reformular');

cargar('assets/js/arturo-ia.js');

reiniciar();

/* Una pregunta con explicacion completa del banco curado. */
const qRef = Motor.bancoActivo().filter(function (q) {
  return q.exp && q.no && Object.keys(q.no).length && q.ops && q.ops.length === 4;
})[0];
ok(!!qRef, 'hay una pregunta con explicacion y descartes para la prueba');

/* El nombre se pone ANTES de armar el material: si se pusiera despues, la
   comprobacion de mas abajo pasaria sola y no probaria nada. */
D.perfil.nombre = 'NombreDelEstudiante';

const distinto = qRef.ok === 0 ? 1 : 0;
const mat = ArturoIA.armarMaterial(qRef, distinto);

/* 1. Lleva lo que hace falta para reformular. */
['qid', 'tema', 'enunciado', 'opciones', 'correcta', 'clave', 'exp', 'ref'].forEach(function (k) {
  ok(mat[k] !== undefined, 'el material lleva ' + k);
});
igual(mat.qid, qRef.id, 'el material identifica la pregunta');
igual(mat.correcta, qRef.ok, 'el material dice cual es la correcta');
ok(mat.descarte !== undefined, 'lleva el descarte del distractor que se marco');
igual(mat.eligio, distinto, 'y dice cual se marco');

/* 2. Y NADA mas. Esta es la comprobacion que importa: lo que se manda a
      un tercero es una lista blanca, no el objeto pregunta entero ni nada
      del estudiante. */
const PERMITIDOS = ['qid','tema','enunciado','caso','opciones','correcta',
                    'clave','exp','trampa','ref','descarte','eligio'];
const colados = Object.keys(mat).filter(function (k) { return PERMITIDOS.indexOf(k) < 0; });
igual(colados.length, 0, 'no se cuela ningun campo fuera de la lista blanca' +
  (colados.length ? ' (' + colados.join(', ') + ')' : ''));

/* El progreso del estudiante no puede viajar ni por accidente. */
const texto = JSON.stringify(mat);
ok(texto.indexOf('NombreDelEstudiante') < 0, 'el nombre del estudiante no viaja');
ok(texto.indexOf('srs') < 0 && texto.indexOf('respuestas') < 0, 'el progreso no viaja');

/* 3. Sin explicacion no hay material: ahi el boton no debe existir. */
const qSin = Motor.banco().filter(function (q) { return !q.exp; })[0];
if (qSin) igual(ArturoIA.armarMaterial(qSin, 0), null, 'una pregunta sin explicacion no produce material');

/* 4. Si no marco nada, no hay descarte pero si material. */
const matBlanco = ArturoIA.armarMaterial(qRef, null);
ok(!!matBlanco, 'sin marcar opcion sigue habiendo material');
igual(matBlanco.descarte, undefined, 'sin marcar opcion no hay descarte');

/* 5. La pregunta mas larga del banco cabe por debajo del tope de 6 KB. */
let peorPeso = 0, peorId = '';
Motor.bancoActivo().forEach(function (q) {
  const m = ArturoIA.armarMaterial(q, 0);
  if (!m) return;
  const p = ArturoIA.pesa(m);
  if (p > peorPeso){ peorPeso = p; peorId = q.id; }
});
ok(peorPeso <= 6144, 'la pregunta mas pesada cabe en 6 KB (' + peorId + ': ' + peorPeso + ' bytes)');

/* 6. La llave distingue dos distractores de la misma pregunta. */
ok(ArturoIA.clave('TE-012', 1) !== ArturoIA.clave('TE-012', 2), 'dos distractores dan llaves distintas');
igual(ArturoIA.clave('TE-012', null), 'TE-012|-', 'sin marcar opcion la llave usa un guion');

/* 7. Guardar y reutilizar. */
reiniciar();
igual(ArturoIA.guardada('TE-012', 1), null, 'sin nada guardado devuelve null');
ArturoIA.guardar('TE-012', 1, 'Otra forma de verlo.');
igual(ArturoIA.guardada('TE-012', 1), 'Otra forma de verlo.', 'lo guardado se recupera');
igual(ArturoIA.guardada('TE-012', 2), null, 'y no se confunde con otro distractor');

/* 8. La poda deja las 100 mas recientes. Este objeto viaja entero a
      Supabase en cada sincronizacion, asi que el tope no es cosmetico. */
const mapa = {};
for (let i = 0; i < 130; i++) mapa['Q-' + i + '|0'] = { texto:'t', fecha: 1000 + i };
const podado = ArturoIA._podar(mapa, 100);
igual(Object.keys(podado).length, 100, 'la poda deja exactamente 100');
ok(!!podado['Q-129|0'], 'conserva la mas reciente');
ok(!podado['Q-0|0'], 'tira la mas vieja');

/* 9. Sin sesion de nube no esta disponible: la funcion exige autenticacion. */
igual(ArturoIA.disponible(), false, 'una cuenta solo local no puede usarlo');
```

El arnés necesita un `Almacen.sesion()` que por defecto no sea de nube. Añadir esa clave al objeto `window.Almacen` del validador (está sobre la línea 47):

```js
  sesion: function(){ return sesionFalsa; },
```

y declarar arriba, junto a `let D = estudianteVacio();`:

```js
let sesionFalsa = { usuario:'prueba', nube:false };
```

- [ ] **Step 2: Ejecutarlo para verificar que falla**

Run: `node herramientas_validar_ruta.js`
Expected: FAIL con `ENOENT ... assets/js/arturo-ia.js` (el archivo no existe).

- [ ] **Step 3: Reservar el hueco en el estado del estudiante**

En `assets/js/almacen.js`, dentro de `datosNuevos`, añadir tras la línea de `ruta: null,`:

```js
      reexplicaciones: {},      // lo que Arturo ha reformulado, por pregunta
```

Y en el objeto `ajustes` de esa misma función, añadir la clave al final:

```js
      ajustes: { pedirConfianza: true, defenderRespuesta: false, animaciones: true, bancoExtendido: true, reexplicar: true }
```

Verificar: `node --check assets/js/almacen.js`

- [ ] **Step 4: Escribir `assets/js/arturo-ia.js`**

Crear el archivo con la herramienta Write:

```js
/* ============================================================
   ARTURO REFORMULA
   Cuando la explicacion escrita no entra, Arturo la cuenta por
   otro angulo. Solo eso: no es un chat.

   Lo que se manda a la funcion es una LISTA BLANCA con el
   material de esa pregunta. Ni el progreso del estudiante, ni su
   nombre, ni nada que no haga falta para reformular.

   Este archivo no toca el DOM: tiene que cargarse en Node para
   que el validador lo compruebe.
   ============================================================ */
window.ArturoIA = (function () {

  const TOPE_MATERIAL = 6144;    // bytes del JSON que viaja
  const TOPE_GUARDADAS = 100;    // el objeto datos entero sube a Supabase
  const FUNCION = 'arturo-reexplica';

  /* Se enciende al recibir un 429 y dura lo que dure la pestana: no tiene
     sentido seguir pidiendo cuando ya se sabe que no hay. */
  let sinCuota = false;

  function datos(){ return Almacen.datos(); }

  function disponible(){
    const d = datos();
    if (!d) return false;
    if (d.ajustes && d.ajustes.reexplicar === false) return false;
    if (sinCuota) return false;
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return false;
    /* La funcion exige sesion de Supabase: una cuenta solo local no puede
       autenticarse contra ella. */
    const s = Almacen.sesion();
    return !!(s && s.nube);
  }

  function clave(qid, elegida){
    const e = (elegida === null || elegida === undefined) ? '-' : elegida;
    return qid + '|' + e;
  }

  function recortar(s, n){
    s = String(s === null || s === undefined ? '' : s);
    return s.length > n ? s.slice(0, n - 1) + '…' : s;
  }

  /* ---------- el material ---------- */
  /* Lista blanca explicita. Si algun dia hace falta mandar un campo mas,
     se anade aqui a proposito y el validador lo cazara. */
  function armarMaterial(q, elegida){
    if (!q || !q.exp) return null;
    const m = {
      qid: q.id,
      tema: recortar(q.sub || q.tema, 120),
      enunciado: recortar(q.enunciado, 700),
      caso: recortar(q.caso, 1200),
      opciones: (q.ops || []).map(function (o) { return recortar(o, 300); }),
      correcta: q.ok,
      clave: recortar(q.clave, 400),
      exp: recortar(q.exp, 1600),
      trampa: recortar(q.trampa, 400),
      ref: recortar(q.ref, 200)
    };
    const marco = (elegida !== null && elegida !== undefined && elegida !== q.ok);
    if (marco && q.no && q.no[elegida] !== undefined){
      m.descarte = recortar(q.no[elegida], 400);
      m.eligio = elegida;
    }
    return m;
  }

  function pesa(m){ return JSON.stringify(m).length; }

  /* ---------- guardar lo generado ---------- */
  function guardadas(){
    const d = datos();
    if (!d) return {};
    if (!d.reexplicaciones) d.reexplicaciones = {};
    return d.reexplicaciones;
  }

  function guardada(qid, elegida){
    const g = guardadas()[clave(qid, elegida)];
    return g ? g.texto : null;
  }

  /* Se tiran las mas viejas. Este objeto viaja entero a Supabase en cada
     sincronizacion, asi que no puede crecer sin freno. */
  function podar(mapa, tope){
    const llaves = Object.keys(mapa);
    if (llaves.length <= tope) return mapa;
    llaves.sort(function (a, b) { return (mapa[b].fecha || 0) - (mapa[a].fecha || 0); });
    const out = {};
    llaves.slice(0, tope).forEach(function (k) { out[k] = mapa[k]; });
    return out;
  }

  function guardar(qid, elegida, texto){
    const d = datos();
    if (!d) return;
    const g = guardadas();
    g[clave(qid, elegida)] = { texto: texto, fecha: Date.now() };
    d.reexplicaciones = podar(g, TOPE_GUARDADAS);
    Almacen.guardar();
  }

  /* ---------- la llamada ---------- */
  async function reexplicar(q, elegida){
    const ya = guardada(q.id, elegida);
    if (ya) return ya;

    const material = armarMaterial(q, elegida);
    if (!material) throw new Error('sin-material');
    if (pesa(material) > TOPE_MATERIAL) throw new Error('material-grande');

    const r = await Nube.invocar(FUNCION, { material: material });

    if (r && r.error === 'sin-cuota'){ sinCuota = true; throw new Error('sin-cuota'); }
    if (!r || !r.texto) throw new Error('sin-respuesta');

    guardar(q.id, elegida, r.texto);
    return r.texto;
  }

  return {
    disponible: disponible, clave: clave, armarMaterial: armarMaterial,
    pesa: pesa, guardada: guardada, guardar: guardar, reexplicar: reexplicar,
    _podar: podar
  };
})();
```

- [ ] **Step 5: Ejecutar y verificar que pasa**

Run: `node --check assets/js/arturo-ia.js && node herramientas_validar_ruta.js`
Expected: PASS. Si la comprobación del peso falla, imprime el id de la pregunta más pesada: mira ese caso concreto y baja el recorte de `caso` o de `exp`, **no** subas el tope de 6 KB.

- [ ] **Step 6: Commit**

```bash
git add assets/js/arturo-ia.js assets/js/almacen.js herramientas_validar_ruta.js
git commit -m "Arturo reformula: el material que viaja es una lista blanca"
```

---

### Task 2: La Edge Function

**Files:**
- Create: `supabase/functions/arturo-reexplica/index.ts`
- Create: `NUBE_IA.txt`
- Modify: `assets/js/nube.js`

**Interfaces:**
- Consumes: `ArturoIA` manda `{ material: {...} }` (Task 1).
- Produces:
  - `Nube.invocar(nombre, cuerpo)` → `Promise<objeto>` — invoca una Edge Function con la sesión del estudiante
  - La función responde `{ texto: string }`, o `{ error: 'sin-cuota' | 'sin-sesion' | 'sin-suscripcion' | 'material' }` con el código HTTP correspondiente

- [ ] **Step 1: Crear la tabla del contador**

En el editor SQL de Supabase:

```sql
create table if not exists uso_ia (
  user_id uuid not null references auth.users(id) on delete cascade,
  dia date not null,
  n int not null default 0,
  primary key (user_id, dia)
);

alter table uso_ia enable row level security;

-- Nadie escribe aqui desde el navegador: solo la Edge Function, que usa
-- la clave de servicio y se salta RLS. Sin politicas, la tabla queda
-- cerrada para los clientes, que es lo que se quiere.
```

Verificar: `select * from uso_ia;` devuelve cero filas sin error.

- [ ] **Step 2: Escribir la función**

Crear `supabase/functions/arturo-reexplica/index.ts`:

```ts
/* ============================================================
   ARTURO REFORMULA — el proxy
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
  const ops = (m.opciones as string[] || [])
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
    m.descarte ? `El estudiante marco ${'ABCD'[m.eligio as number]}, y esta descartada porque: ${m.descarte}` : 'El estudiante no marco ninguna opcion.',
    `Bibliografia: ${m.ref}`
  ].filter(Boolean);
  return partes.join('\n\n') +
    '\n\nCuenta esta explicacion otra vez, por otro angulo.';
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
```

- [ ] **Step 3: Desplegar y comprobar las tres respuestas**

Desplegar (desde la raíz del proyecto, con la CLI de Supabase instalada y sesión iniciada):

```bash
supabase functions deploy arturo-reexplica
supabase secrets set IA_PROVEEDOR=gemini IA_MODELO=gemini-2.0-flash IA_CLAVE=<la-clave-de-google>
```

Comprobar que rechaza sin sesión:

```bash
curl -s -o /dev/null -w "%{http_code}\n" -X POST \
  https://<tu-proyecto>.supabase.co/functions/v1/arturo-reexplica \
  -H "Content-Type: application/json" -d '{"material":{}}'
```
Expected: `401`

**Sobre la forma exacta de la llamada a Google:** los endpoints y los nombres de campo de Gemini han cambiado más de una vez. Antes de dar la rama por buena, lanzar una llamada directa contra la documentación vigente:

```bash
curl -s -X POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=$IA_CLAVE" \
  -H 'Content-Type: application/json' \
  -d '{"contents":[{"role":"user","parts":[{"text":"Di hola en una frase."}]}]}'
```
Si la respuesta no tiene la forma `candidates[0].content.parts[0].text`, ajustar **solo** la rama `gemini` de `llamar()`; el resto de la función no cambia. Lo mismo vale para el nombre del modelo, que se mueve entre versiones.

- [ ] **Step 4: Dar a `nube.js` la forma de invocar funciones**

En `assets/js/nube.js`, antes del `return` del módulo, añadir:

```js
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
```

Y añadir `invocar` a la lista del `return`:

```js
  return { disponible, registrar, entrar, salir, usuario, recuperar, bajar, subir,
           perfil, miSuscripcion, invocar,
```

Verificar: `node --check assets/js/nube.js`

- [ ] **Step 5: Escribir la nota de despliegue**

Crear `NUBE_IA.txt`:

```
ARTURO REFORMULA — QUE HAY QUE TENER PUESTO
===========================================

Que hace
--------
Cuando un estudiante falla una pregunta y la explicacion escrita no le
entra, puede pulsar "Aun no lo entiendo" y Arturo se la cuenta por otro
angulo. Nada mas: no es un chat.

El modelo recibe SOLO el material de esa pregunta (enunciado, caso,
opciones, explicacion, trampa, descarte y bibliografia) y la instruccion
de explicar unicamente desde ahi. Si la duda no se contesta con eso, lo
dice y remite a la bibliografia. Eso es lo que impide que se invente una
dosis, que en una app de medicina no es un detalle.

La clave nunca esta en la app
-----------------------------
La app se publica como archivos estaticos: una clave ahi la lee
cualquiera. Vive como secreto de la Edge Function `arturo-reexplica`.

Variables a poner (panel de Supabase -> Edge Functions -> Secrets):

  IA_PROVEEDOR   gemini | groq | anthropic
  IA_MODELO      el nombre del modelo en ese proveedor
  IA_CLAVE       la clave de API

Cambiar de proveedor o de modelo es cambiar estas variables. La app no se
toca y no hace falta volver a publicarla.

La tabla del contador
---------------------
`uso_ia` (user_id, dia, n) limita a 20 llamadas al dia por estudiante.
La cuota gratuita se comparte entre TODOS, asi que el tope por persona es
lo que evita que uno solo deje mudo a Arturo para los demas.

El dia se cuenta en UTC: para Republica Dominicana el contador se
reinicia a las 8 de la noche, no a medianoche.

Cuando no hay cuota
-------------------
El boton avisa en una linea y se retira el resto de la sesion. La Ruta,
el Arturo de reglas y los tres pasos no dependen de esto para nada: si la
funcion no existiera, la app seria exactamente la de hoy.

Si la capa gratuita se queda corta
----------------------------------
Poner IA_PROVEEDOR=anthropic, IA_MODELO=claude-haiku-4-5 y la clave de
Anthropic. Sale alrededor de 0,40 dolares al mes por estudiante activo
(unas 100 reformulaciones). No hay que tocar ni una linea de la app.
```

- [ ] **Step 6: Commit**

```bash
git add supabase/functions/arturo-reexplica/index.ts NUBE_IA.txt assets/js/nube.js
git commit -m "Arturo reformula: la Edge Function que guarda la clave"
```

---

### Task 3: El botón

**Files:**
- Modify: `assets/js/vistas/sesion.js` (los dos bloques que pintan `descartes`, sobre `:196` y `:622`)
- Modify: `assets/js/vistas/paneles.js` (Ajustes)
- Modify: `app.html`

**Interfaces:**
- Consumes: `ArturoIA.disponible()`, `ArturoIA.guardada(qid, elegida)`, `ArturoIA.reexplicar(q, elegida)` (Task 1); `Arturo.barra({frase, boton})` (ya existe).
- Produces: ningún símbolo nuevo.

- [ ] **Step 1: Cargar el archivo**

En `app.html`, después de `<script src="assets/js/arturo.js"></script>`, añadir:

```html
<script src="assets/js/arturo-ia.js"></script>
```

- [ ] **Step 2: Añadir el bloque del botón a `sesion.js`**

En `assets/js/vistas/sesion.js`, antes de `function terminar(porTiempo)`, añadir:

```js
  /* ---------- "Aun no lo entiendo" ---------- */
  /* Solo aparece si hay explicacion escrita que reformular y la funcion
     esta disponible (ajuste activo, con internet, cuenta de nube y con
     cuota). Si ya se pidio antes, se muestra lo guardado sin gastar. */
  function bloqueReexplicar(p, elegida){
    if (!window.ArturoIA || !p.exp) return '';
    const ya = ArturoIA.guardada(p.id, elegida);
    if (ya){
      return '<div class="reexp" id="reexp-' + esc(p.id) + '">' +
        '<span class="eyebrow">Arturo, de otra forma</span>' +
        '<p>' + esc(ya) + '</p></div>';
    }
    if (!ArturoIA.disponible()) return '';
    return '<div class="reexp reexp--vacio" id="reexp-' + esc(p.id) + '">' +
      '<button class="btn btn--sm btn--fantasma" data-reexp="' + esc(p.id) +
      '" data-elegida="' + (elegida === null || elegida === undefined ? '' : elegida) +
      '">Aún no lo entiendo</button></div>';
  }

  /* Cablea los botones que haya en pantalla. Se llama despues de pintar. */
  function engancharReexplicar(){
    UI.$$('[data-reexp]').forEach(function (b) {
      b.onclick = async function () {
        const qid = b.dataset.reexp;
        const cruda = b.dataset.elegida;
        const elegida = cruda === '' ? null : +cruda;
        const q = Motor.porId(qid);
        if (!q) return;
        const caja = document.getElementById('reexp-' + qid);
        b.disabled = true;
        b.textContent = 'Arturo lo está pensando…';
        try {
          const texto = await ArturoIA.reexplicar(q, elegida);
          caja.classList.remove('reexp--vacio');
          caja.innerHTML = '<span class="eyebrow">Arturo, de otra forma</span>' +
                           '<p>' + esc(texto) + '</p>';
        } catch (e) {
          const m = e && e.message;
          UI.tostada(m === 'sin-cuota'
            ? 'Arturo ya no puede reformular más por hoy. Vuelve mañana.'
            : 'Arturo no puede reformular ahora mismo.', 'mal');
          if (m === 'sin-cuota') caja.remove();
          else { b.disabled = false; b.textContent = 'Aún no lo entiendo'; }
        }
      };
    });
  }
```

- [ ] **Step 3: Pintarlo en los dos sitios**

Hay exactamente **dos** líneas idénticas que pintan los descartes, en `sesion.js:236` y `sesion.js:635`:

```js
      (descartes ? '<div class="bloque"><span class="eyebrow">Por qué no las otras</span><div class="descartes">' + descartes + '</div></div>' : '') +
```

Añadir **debajo de cada una de las dos**:

```js
      bloqueReexplicar(p, ultimaElegida(p.id)) +
```

Y definir el ayudante junto a `bloqueReexplicar`, porque los dos sitios necesitan lo mismo — qué opción marcó el estudiante — y solo el historial lo sabe en ambos casos:

```js
  /* Que marco el estudiante la ultima vez que vio esta pregunta. Sirve
     igual dentro de una sesion en curso que revisandola despues, que es
     lo que hace falta porque el bloque se pinta en los dos sitios. */
  function ultimaElegida(qid){
    const d = Almacen.datos();
    if (!d || !d.respuestas) return null;
    for (let i = d.respuestas.length - 1; i >= 0; i--){
      if (d.respuestas[i].qid === qid) return d.respuestas[i].elegida;
    }
    return null;
  }
```

Después de cada uno de los dos `innerHTML` / `UI.modal(...)` correspondientes, llamar a `engancharReexplicar();` junto a los demás manejadores.

Verificar: `node --check assets/js/vistas/sesion.js`

- [ ] **Step 4: El interruptor en Ajustes**

En `assets/js/vistas/paneles.js`, dentro de `function ajustes()`, añadir una llamada más a `conmutador` junto a las que ya hay:

```js
        conmutador('reexplicar', 'Arturo puede reformular',
          'Cuando falles una pregunta y la explicación no te entre, puedes pedirle a Arturo que te la cuente de otra forma. Necesita internet y cuenta en la nube.',
          d.ajustes.reexplicar !== false) +
```

El manejador ya existe (`UI.$$('[data-ajuste]')` sobre la línea 747) y hace `d.ajustes[k] = !d.ajustes[k]`, así que funciona sin tocarlo porque la clave nace en `true`.

Verificar: `node --check assets/js/vistas/paneles.js`

- [ ] **Step 5: El estilo**

Al final de `assets/css/app.css`:

```css
/* ---------- Arturo reformula ---------- */
.reexp{
  margin-top:14px; padding:14px 16px;
  border-left:3px solid var(--sangria); background:var(--hueso);
  border-radius:var(--r-sm);
}
.reexp .eyebrow{ display:block; margin-bottom:6px }
.reexp p{ margin:0; font-size:14px; line-height:1.55 }
.reexp--vacio{ background:transparent; border-left-color:var(--linea); padding:10px 0 0 }
```

- [ ] **Step 6: Comprobarlo en el navegador**

Levantar el servidor y abrir la app:

```bash
python -m http.server 8777
```

Con una **cuenta de nube** y suscripción activa, fallar una pregunta a propósito, abrir su revisión y comprobar:

1. Aparece "Aún no lo entiendo" debajo de los descartes.
2. Al pulsarlo, el botón dice "Arturo lo está pensando…" y luego sale el texto.
3. El texto no inventa: contrastarlo con la explicación escrita de esa pregunta.
4. Cerrar y volver a abrir la misma pregunta: sale lo guardado **sin** volver a llamar (comprobarlo en la pestaña Red del navegador: no debe haber petición).
5. Desactivar el ajuste en Ajustes: el botón desaparece.
6. Poner el navegador en modo sin conexión: el botón desaparece.
7. Con una cuenta **solo local** (sin nube): el botón no aparece.
8. La consola no tiene errores en ningún caso.

- [ ] **Step 7: Commit**

```bash
git add assets/js/vistas/sesion.js assets/js/vistas/paneles.js assets/css/app.css app.html
git commit -m "Arturo reformula: el boton donde el estudiante se atasca"
```

---

## Notas para quien ejecute esto

- **Si te ves escribiendo la clave de API en un archivo de `assets/` o en `app.html`, para.** Ese archivo se publica; la clave sería pública. La clave vive solo como secreto de la Edge Function.
- **La comprobación de la lista blanca (Task 1, Step 1, punto 2) es la que más importa.** Es lo que garantiza que a un tercero solo le llega el material de una pregunta y nunca el progreso ni el nombre del estudiante. Si añades un campo al material, añádelo también a `PERMITIDOS` a propósito, no para callar el test.
- **La forma exacta de la llamada a Gemini hay que confirmarla** contra la documentación vigente (Task 2, Step 3). Los endpoints y los nombres de modelo de Google cambian cada pocos meses; el resto de la función no depende de eso.
- **No toques `datos/`.** Esta función no añade ni modifica ninguna pregunta.
- **Si al probar en el navegador el texto generado se inventa algo**, no es un fallo del botón: es el prompt. Endurece las reglas del `SISTEMA` en la función y vuelve a desplegar; no hace falta tocar la app.
