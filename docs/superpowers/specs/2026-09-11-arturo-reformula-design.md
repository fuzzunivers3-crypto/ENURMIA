# Arturo reformula: explicar otra vez lo que no se entendió

**Fecha:** 2026-09-11 · **Programa:** ENURMIA · **Estado:** diseño aprobado

## El problema

Cuando un estudiante falla una pregunta, ENURMIA ya le da mucho: la explicación
completa, el dato clave, la trampa y **por qué falla cada distractor** — todo
escrito a mano y con bibliografía (`sesion.js:196` y `:622` pintan el bloque
`no:{}`). Ese material es bueno y no hay IA que lo mejore.

Pero a veces una explicación no entra. No porque esté mal escrita, sino porque
ese estudiante concreto necesitaba otro ángulo. Hoy, ahí, la app no tiene nada
más que ofrecer: el texto es el que es.

Eso es lo único que la IA aporta aquí, y por eso es lo único que se construye.

## Decisiones tomadas

| Pregunta | Decisión |
|---|---|
| Qué hace la IA | Reformular una explicación ya escrita, a demanda |
| Qué NO hace | Chat abierto, paciente virtual, generar contenido nuevo |
| Proveedor | Capa gratuita (Gemini Flash), con el proxy escrito agnóstico |
| Dónde vive la clave | En una Edge Function de Supabase. Nunca en el navegador |
| Sin cuota o sin internet | El botón no aparece; el resto de la app no se entera |
| Modelo | Variable de entorno del servidor, no constante del código |

## Lo que ve el estudiante

En la revisión de una pregunta —la pantalla que ya muestra explicación y
descartes— aparece un botón **"Aún no lo entiendo"**. Al pulsarlo, Arturo
escribe debajo una versión distinta de la misma explicación: más corta, por otro
ángulo, en su voz de siempre.

No es un chat. Es una llamada, corta y puntual. Esa forma no es una limitación
que arrastramos: es lo que hace que la función sea viable sobre una cuota
compartida entre todos los estudiantes.

## La regla que lo hace seguro

Este es el centro del diseño, no un detalle de implementación.

El modelo recibe, en cada llamada, **el material de esa pregunta concreta**:
enunciado, caso, las opciones, cuál es la correcta, el dato clave, la
explicación, la trampa, el descarte del distractor que el estudiante marcó, el
tema y la bibliografía. Y una instrucción dura: **explicar solo desde ahí**.

Si la duda no se contesta con ese material, Arturo lo dice y remite a la
bibliografía, en vez de rellenar el hueco.

El motivo no es estilístico. En una app de preparación médica, un modelo que
improvisa una dosis o un criterio diagnóstico le enseña algo falso a alguien que
lo va a usar con pacientes. Con el material delante, el modelo **reformula** en
vez de **recordar**, y recordar es donde se equivoca. Es además la misma regla
que ya gobierna el banco de ENURMIA: ninguna pregunta entra sin bibliografía.

### El prompt de sistema

```
Eres Arturo, profesor clinico. Un estudiante de medicina no entendio una
explicacion y te pide que se la cuentes de otra forma.

Reglas que no puedes romper:
- Explica UNICAMENTE con el material que viene abajo. No anadas datos,
  cifras, dosis ni criterios que no esten ahi.
- Si lo que pregunta no se puede contestar con ese material, dilo en una
  frase y remitelo a la bibliografia que se te da.
- No repitas la explicacion original con otras palabras sueltas: cambia el
  angulo. Si la original iba por el mecanismo, ve por el caso; si iba por el
  caso, ve por lo que decide la conducta.

Como escribes:
- Espanol, de tu, frases cortas, prosa seguida.
- Nada de listas, titulos ni negritas.
- Maximo 110 palabras.
- Escribes alrededor de "que hago con este paciente delante".
```

## Arquitectura

### Por qué hay un servidor de por medio

La app se publica como archivos estáticos (`_PUBLICAR_WEB`). Una clave de API en
el navegador es una clave pública: cualquiera la lee del código y gasta la
cuenta. La llamada pasa obligatoriamente por una **Edge Function de Supabase**,
donde la clave vive como variable de entorno del servidor.

### Las tres piezas

**1. `assets/js/arturo-ia.js` — el cliente.** Sin DOM, igual que `ruta.js`, para
poder validarlo en Node. Arma el material, llama a la función, guarda el
resultado. Expone:

```
disponible()              -> bool   (las cuatro condiciones de abajo, a la vez)
armarMaterial(q, elegida) -> objeto con el material de esa pregunta
clave(qid, elegida)       -> string, la llave de cache
guardada(qid, elegida)    -> string | null
reexplicar(q, elegida)    -> Promise<string>
```

`disponible()` exige las cuatro a la vez: `d.ajustes.reexplicar !== false`,
`navigator.onLine`, `Almacen.sesion().nube` (una cuenta solo local no puede
autenticarse contra la función) y que la cuota no se haya agotado ya en esta
sesión.

**2. `supabase/functions/arturo-reexplica/index.ts` — el proxy.** En cada
petición, y en este orden:

1. Solo `POST`. Cualquier otra cosa, 405.
2. Verifica el JWT de Supabase. Sin sesión, 401.
3. Comprueba en `suscripciones` que el estado esté activo. Si no, 403.
4. Cuenta el uso del día en `uso_ia`. Pasado el tope, 429.
5. Valida el cuerpo: `qid` con forma de id, material por debajo de 6 KB.
6. Arma el prompt y llama al proveedor.
7. Devuelve `{ texto }`, o un código que el cliente sabe traducir.

**3. La tabla `uso_ia`.** Tres columnas: `user_id`, `dia` (date), `n` (int), con
clave primaria compuesta. Un `upsert` que incrementa. Tope: **20 al día por
estudiante**. Con una cuota compartida entre todos, el límite por persona no es
tacañería: es lo que evita que uno solo deje mudo a Arturo para los demás.

El día se cuenta en **UTC**, que es la fecha que ve el servidor. Para un
estudiante en República Dominicana el contador se reinicia a las 8 de la noche,
no a medianoche. Es un detalle menor y el precio de no complicar la tabla con
zonas horarias; si algún día molesta, se guarda el desfase en la fila.

### Agnóstico del proveedor

Tres variables de entorno: `IA_PROVEEDOR` (`gemini` | `groq` | `anthropic`),
`IA_MODELO`, `IA_CLAVE`. Una función `llamar()` con un `switch` de tres ramas
que devuelven todas una cadena. Cambiar de proveedor o de modelo es cambiar una
variable en el panel de Supabase; la app no se toca ni se vuelve a publicar.

Se arranca con Gemini Flash en su capa gratuita. Los límites exactos de esa capa
cambian cada pocos meses, así que **se confirman al implementar**, no se fijan
aquí de memoria.

## Guardar lo generado

```js
d.reexplicaciones = {
  'TE-012|2': { texto: '...', fecha: 1757548800000 }
}
```

La llave es el id de la pregunta más el índice de la opción que marcó el
estudiante: la reformulación depende de **qué** se equivocó, no solo de la
pregunta. Si no llegó a marcar nada —se acabó el tiempo, o dejó la pregunta en
blanco— la llave usa `-` en lugar del índice (`'TE-012|-'`) y el material va sin
bloque de descarte: no hay distractor que explicar, solo la respuesta.

Volver a abrir la misma pregunta lee lo guardado y **no gasta cuota**. Con un
límite compartido, esto es lo que más ahorra.

Se podan las entradas más viejas por encima de **100**, que a ~400 caracteres
cada una son unos 40 KB. El objeto `datos` entero viaja a Supabase en cada
sincronización (`nube.js:116`), así que este tope no es cosmético: es el freno
para que la función no engorde el blob que se sube.

## Degradación

El principio ya establecido en ENURMIA es que la nube es un espejo y la app
funciona sin internet. Esta función se somete a eso:

| Situación | Qué pasa |
|---|---|
| Sin internet (`navigator.onLine`) | El botón no se pinta |
| Cuenta local, sin nube | El botón no se pinta: la función exige sesión |
| Ajuste desactivado | El botón no se pinta |
| Cuota agotada (429) | Aviso de una línea y el botón se retira esa sesión |
| Error del proveedor | Aviso de una línea; nada más se rompe |
| Ya hay una guardada | Se muestra sin llamar a nadie |

La Ruta, Arturo de reglas y los tres pasos **no dependen de esto en absoluto**.
Si la función no existe, la app es exactamente la de hoy.

## Lo que se toca

**Nuevos**
- `assets/js/arturo-ia.js` — cliente, sin DOM
- `supabase/functions/arturo-reexplica/index.ts` — el proxy
- `NUBE_IA.txt` — cómo desplegarlo y qué variables poner, en el mismo tono que `NUBE_SUPABASE.txt`

**Editados**
- `assets/js/vistas/sesion.js` — el botón, en los dos sitios donde ya se pintan los descartes (`:196` y `:622`)
- `assets/js/almacen.js` — `reexplicaciones: {}` en `datosNuevos`
- `assets/js/vistas/paneles.js` — un interruptor en Ajustes
- `app.html` — un `<script>`
- `herramientas_validar_ruta.js` — las comprobaciones de abajo

## Verificación

`armarMaterial` y la poda son funciones puras, así que entran en el validador de
Node que ya existe:

1. El material lleva los campos que debe: enunciado, caso, opciones, correcta,
   clave, exp, trampa, descarte de la opción marcada, tema y bibliografía.
2. **No lleva nada fuera de esa lista** — ni el progreso del estudiante, ni su
   nombre, ni ids de otras preguntas.
3. Una pregunta sin `exp` no produce material: el botón no debe existir ahí.
4. El material de la pregunta más larga del banco cabe por debajo de 6 KB.
5. La llave de caché distingue dos distractores distintos de la misma pregunta.
6. La poda deja exactamente las 100 más recientes y tira las viejas.

El proxy se prueba a mano contra la función desplegada (sin sesión → 401, con
sesión → texto). El botón, en el navegador, con y sin conexión.

## Fuera de alcance, a propósito

**El banco no sube a Supabase.** Lo correcto sería que la función buscara la
pregunta por `qid` en el servidor, en vez de fiarse del material que manda el
navegador. Hoy el banco vive en archivos `.js` y subirlo es un proyecto propio.
Con sesión obligatoria, suscripción activa, tope de tamaño y límite diario por
estudiante, el riesgo real —que alguien use la cuota como chatbot gratis— queda
acotado a 20 llamadas suyas al día. Queda anotado como el siguiente paso si la
función se queda.

**Ni chat abierto ni paciente virtual.** Son otra cosa, con otro coste y otro
riesgo. Una cosa a la vez.
