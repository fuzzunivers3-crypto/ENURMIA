# La Ruta: recorrido guiado del temario

**Fecha:** 2026-09-11 · **Programa:** ENURMIA · **Estado:** diseño aprobado

## El problema

ENURMIA tiene todo el material (101 temas del temario, 104 apuntes, 2.279
preguntas activas, ~3.000 flashcards) y varias puertas de entrada, pero
ninguna de ellas dice **qué hacer hoy y en qué orden**. El estudiante elige:
entrar al simulacro, abrir un apunte suelto, repasar errores. El plan de 7
días (`Motor.generarPlan`) reparte por especialidad débil, no recorre el
temario ni se agota nunca.

La Ruta invierte eso: el programa dirige. Estudias una tanda de temas
completa, te mide un simulacro de esos temas, y la tanda siguiente se
desbloquea. Se repite hasta agotar los 101 temas.

## Decisiones tomadas

| Pregunta | Decisión |
|---|---|
| Tamaño de tanda | Lo elige el estudiante al crear la ruta (3 / 5 / 8 / 10 o a medida) |
| Qué exige un tema | Los tres pasos: leer el apunte, tanda de preguntas, flashcards |
| Preguntas del simulacro | ~70% de la tanda + ~30% de repaso acumulado |
| Si sale bajo | Avanza igual; los temas flojos se reinyectan en las tandas siguientes |
| Alcance | Solo ENURMIA. El código queda genérico para añadir UNIRMIA después |
| Orden del recorrido | Uno solo, intercalado por peso de bloque. Sin "empezar por lo débil" |
| Quién guía | **Arturo**, un profesor con voz propia que acompaña todo el recorrido |

## Principio de diseño: la Ruta no duplica progreso

El descubrimiento que ordena todo el diseño: **los tres pasos se deducen del
estado que la app ya lleva**, no se guardan aparte.

- Leer → `d.apuntes[clave]` (lo escribe `Apuntes.marcarLeido`)
- Preguntas → `d.srs[qid]` de las preguntas del tema
- Flashcards → `d.srsTarjetas[id]` de las tarjetas del tema

Tres consecuencias:

1. **No se toca `sesion.js` ni `flashcards.js`.** Es lo que se evita: en
   `sesion.js:37` se guarda un `alTerminar` que no se invoca en ningún sitio,
   y `Flashcards.iniciar` no tiene callback ninguno. Cablear callbacks habría
   significado editar los dos motores de sesión.
2. **El trabajo previo cuenta retroactivamente.** Quien ya leyó 40 apuntes
   encuentra esos temas cerrados el día que crea la ruta.
3. **Nada se descuadra si el estudiante se sale del carril.** Si estudia un
   tema desde la pantalla Temario en vez de desde la Ruta, la Ruta se entera
   igual.

`d.ruta` guarda solo lo que no es deducible: el orden, el cursor y la
historia.

## Modelo de datos

```js
d.ruta = {
  v: 1,
  creado: 1757548800000,
  tam: 5,                       // tamaño pedido por el estudiante (2..20)
  vuelta: 1,                    // 1 = recorrido normal; 2+ = segunda vuelta, solo simulacros
  orden: ['Hipertensión arterial', ...],   // los 101 nombres de tema, en orden
  tandasN: [6, 5, 5, ...],      // cuántos temas lleva cada tanda; suma 101
  cursor: 0,                    // índice en `orden` del primer tema de la tanda en curso
  tanda: 1,                     // 1-based
  repaso: ['Gota'],             // temas flojos pendientes de recuperar
  hilo: { tema:'Insuficiencia cardíaca', abierto: ts },  // el tema que Arturo acompaña
  terminada: null,              // ts cuando cursor alcanza orden.length
  historial: [
    { n:1, temas:['Hipertensión arterial', ...], fecha:ts,
      pct:72, correctas:22, total:30,
      porTema:{ 'Hipertensión arterial':83, 'Gota':40 },
      flojos:['Gota'] }
  ]
}
```

**La clave de un tema es su nombre** (`tema.t`). Verificado: los 101 nombres
son únicos y los 101 tienen apunte con `APUNTES[k].tema` idéntico, que es lo
que empareja `Apuntes.claveDeTema`. Un cambio de redacción en un nombre del
temario rompe la ruta guardada del estudiante; se mitiga en "Degradación".

`d.ruta` viaja a Supabase sin trabajo extra: `nube.js:116` sube el objeto
`datos` entero.

## Algoritmos

### Orden intercalado

Los bloques están escritos por peso (Medicina Interna 41, Gineco-Obstetricia
21, Pediatría 20, Cirugía 19). Recorrerlos en ese orden dejaría al estudiante
ocho tandas seguidas dentro de Medicina Interna antes de ver una pregunta de
Pediatría. Se intercalan en proporción:

> A cada tema `j` (0-indexed) del bloque `b` con `n_b` temas se le asigna la
> clave `(j + 0.5) / n_b`. Se ordenan los 101 por esa clave ascendente; los
> empates se rompen por el orden del bloque en `TEMARIO`.

Esto reparte proporcionalmente en **cualquier** prefijo, no solo al final.
Con tanda de 5 la primera sale 2 Medicina Interna / 1 Gineco / 1 Pediatría /
1 Cirugía, que es aproximadamente el reparto del ENURM real. El orden se
calcula una vez, al crear la ruta, y se guarda: no se recalcula nunca.

### Tamaños de tanda equilibrados

101 no es múltiplo de casi nada, y una última tanda de 1 tema queda coja:

```
nTandas = max(1, round(101 / tam))
base    = floor(101 / nTandas)
resto   = 101 % nTandas
```

Los `resto` sobrantes se reparten **donde no toquen a la primera tanda**:
quien pidió tandas de 5 tiene que recibir 5 en la primera, no 6. Si el
reparto base ya da `tam`, los sobrantes van a las últimas tandas; si se queda
corto, van a las primeras.

| tam pedido | tandas | reparto real |
|---|---|---|
| 3 | 34 | 33 de 3 + 1 de 2 |
| 5 | 20 | 1 de 6 + 19 de 5 |
| 8 | 13 | 10 de 8 + 3 de 7 |
| 10 | 10 | 1 de 11 + 9 de 10 |

`tam` se acota a **2..20** antes de calcular nada, venga del selector o del
campo "a medida".

### Los tres pasos

Sea `Q` las preguntas del tema (emparejadas por `tema.claves`, el mismo
índice que usa `Temario.preguntasDe`) y `C` sus flashcards (las derivadas
llevan `origen` = id de la pregunta).

| Paso | Meta | Hecho cuando |
|---|---|---|
| Leer | — | `d.apuntes[claveApunte]` existe |
| Preguntas | `min(10, Q.length)` | vistas >= meta **y** pct >= 70 |
| Flashcards | `min(12, C.length)` | tarjetas con registro en `d.srsTarjetas` >= meta |

`pct` usa el criterio que ya aplica `Temario.estadoTema`: una pregunta cuenta
como dominada si `d.srs[qid].aciertos > d.srs[qid].fallos`; `pct` es
dominadas sobre vistas. Reusar el criterio mantiene coherentes los dos
porcentajes que el estudiante ve.

Las metas son `min(n, disponibles)` y no cifras fijas porque hay temas
delgados: el más pobre, Reanimación neonatal, tiene 5 preguntas explicadas y
10 tarjetas. Comprobado que **los 101 temas dan para los tres pasos**: ninguno
baja de 5 preguntas explicadas ni de 10 flashcards.

### Selección del simulacro de cierre

```
n       = clamp(tandaN * 6, 20, 100)      // tandaN = temas de ESTA tanda
nTanda  = round(n * 0.7)
nRepaso = n - nTanda
```

Con tanda de 5: 30 preguntas y 36 minutos (`n * 1.2`, el ritmo del ENURM
real: 100 preguntas en 120 minutos).

1. **Bloque de la tanda** (`nTanda`): `floor(nTanda / k)` por tema; los restos
   van a los temas con peor dominio. Dentro de cada tema se priorizan las
   explicadas y se baraja.
2. **Bloque de repaso** (`nRepaso`): del pool de temas ya cerrados, primero
   los que están en `d.ruta.repaso`, luego el resto por dominio ascendente.
3. **Deduplicar por id en todo momento.** Las `claves` de dos temas se solapan
   (hiperpotasemia y trastornos ácido-base comparten preguntas), así que un
   mismo id puede salir por dos caminos.
4. Si no se llega a `n`, completar con `Motor.seleccionar({ n: falta,
   distribuida:true })` descartando los ids ya usados.

La sesión arranca en modo `examen` con `etiqueta: 'Ruta · tanda N'`, y el
resultado se guarda también con `Motor.guardarSimulacro` para que aparezca en
el historial de la pantalla Simulacro que ya existe.

### Cierre de tanda y reinyección

Al terminar el simulacro se calcula el porcentaje de **cada tema que aportó
preguntas al examen** —los de la tanda y los del bloque de repaso— usando
solo **las preguntas que se le asignaron al armar el examen**.

Esto último no es un detalle: medirlo volviendo a emparejar por `claves`
da un resultado falso, porque las claves de dos temas se solapan. `hipertensi`
engancha también las preguntas de preeclampsia, así que Hipertensión arterial
se llevaba el crédito de un tema de Ginecología respondido bien y nunca
llegaba a marcarse flojo. Por eso `simulacroDeTanda()` guarda el mapa
`pregunta → tema` en `d.ruta.sim`, que sobrevive a un refresco a mitad de
examen y se limpia al cerrar la tanda. Las preguntas de relleno no se
atribuyen a ningún tema del recorrido: no vienen de él.

Luego se aplican dos reglas distintas según de dónde venga el tema:

- **Temas de la tanda**: `pct < 60` con al menos 1 pregunta → se marca
  **flojo** y entra en `d.ruta.repaso`. Un tema sin ninguna pregunta en el
  examen no se evalúa y no se marca flojo.
- **Temas ya en `repaso`**: `pct >= 60` **con al menos 3 preguntas** → sale de
  la cola. El mínimo de 3 evita que una sola pregunta afortunada lo rescate.
  Un tema de la cola que vuelve a salir mal no se penaliza dos veces: sigue
  donde estaba.

Después: `cursor += tandaN`, `tanda++`, se empuja la entrada al `historial`.
La tanda se cierra **siempre**, saque lo que saque. El avance nunca se
bloquea.

### Final del recorrido

Con `cursor >= orden.length` se fija `terminada` y la pantalla cambia a un
cierre: temas cerrados, media de las tandas, cuáles quedaron flojos. Dos
salidas: **segunda vuelta** o **simulacro completo de 100**.

**La segunda vuelta no repite los tres pasos.** No puede: como el progreso se
deduce de `d.apuntes`, `d.srs` y `d.srsTarjetas`, los 101 temas ya los tienen
hechos y una segunda vuelta normal nacería completa y se saltaría todo. Así
que `vuelta >= 2` es un **recorrido de solo simulacros**: mismo orden, pero
empezando por los temas que quedaron flojos, sin casillas de leer / preguntas
/ flashcards, y con el simulacro de cierre desbloqueado desde el primer día.
Los tres pasos siguen visibles en cada ficha como atajo para quien quiera
volver a leer, pero ya no bloquean nada. El `historial` de la primera vuelta
se conserva.

## API

`window.Ruta` en `assets/js/ruta.js`, sin DOM:

```
activa()                  -> d.ruta | null
crear(tam)                -> acota tam a 2..20, construye orden y tandasN, guarda
borrar()
segundaVuelta()           -> ruta con vuelta+1, flojos delante, solo simulacros
tandaActual()             -> { n, indice, temas:[fichaTema], completa }
pasosDe(nombreTema)       -> { leer:{hecho}, preg:{hechas,meta,pct,hecho}, tarj:{hechas,meta,hecho} }
preguntasDe(nombreTema)   -> Pregunta[]
tarjetasDe(nombreTema)    -> Tarjeta[]
simulacroDeTanda()        -> Pregunta[]
cerrarTanda(resultado)    -> { porTema, flojos, recuperados }
avance()                  -> { temasCerrados, total, pct, tanda, tandas, repaso }
proximoPaso()             -> { tipo:'leer'|'preg'|'tarj'|'simulacro'|'fin', tema, ... }
```

`proximoPaso()` es el que convierte la app en guía: lo consumen la pantalla
Inicio y `Motor.proximaAccion()`.

## Arturo

La Ruta sabe qué toca. **Arturo es quien lo dice.** Sin él, el recorrido es una
lista de casillas; con él, es un profesor que te lleva de la lectura a las
preguntas y de ahí a las tarjetas sin soltarte en el menú entre paso y paso.

### Qué es y qué no es

Arturo es un **sistema de reglas sobre el estado de la ruta, con texto escrito
a mano**. No es un chat ni un modelo de lenguaje: la app funciona sin servidor
y sin internet, así que no hay nada que pueda improvisar una respuesta. Arturo
elige entre frases escritas según el momento del recorrido, el tema en curso y
cómo vienen saliendo los resultados. Eso es suficiente para guiar, y es
honesto con lo que la plataforma puede sostener.

### El hilo

Lo que hace que Arturo guíe de verdad y no solo comente es que **mantiene el
tema en curso**. Estás leyendo Insuficiencia cardíaca: al terminar el texto,
Arturo no te devuelve al índice, te dice *"ya está el texto; ahora las diez
preguntas de este mismo tema"* y te las lanza. Al acabarlas te interpreta el
resultado y encadena las tarjetas. Al cerrarlas, anuncia el tema siguiente de
la tanda —o el simulacro, si era el último.

```js
d.ruta.hilo = { tema:'Insuficiencia cardíaca', abierto: 1757548800000 }
```

Es el **único estado nuevo** que añade Arturo. Se fija al empezar un tema de la
tanda y se limpia cuando el tema queda completo. Si el estudiante se va por su
cuenta a otra pantalla, el hilo sigue ahí esperándolo, y Arturo lo retoma con
*"lo dejamos en insuficiencia cardíaca"*.

### Dónde aparece

Aquí está el "todo el desglose de la página": Arturo remata **cada pantalla
donde termina un paso**, no solo la suya.

| Pantalla | Momento | Qué hace Arturo |
|---|---|---|
| Arturo (la Ruta) | siempre | tarjeta de cabecera con el paso del día y el botón Seguir |
| Inicio | siempre | la tarjeta principal pasa a ser su frase del día |
| Estudiar | pie del apunte | cierra la lectura y lanza las preguntas del mismo tema |
| Sesión de preguntas | pantalla de resultado | interpreta el pct y encadena tarjetas, o manda a releer |
| Flashcards | fin de sesión | cierra el tema y anuncia el siguiente |
| Simulacro de cierre | antes y después | qué se mide; y al terminar, qué salió flojo y qué toca |

**Durante el simulacro no habla.** El examen se hace solo, como el de verdad.

Ninguno de estos enganches necesita callbacks: las pantallas de fin ya existen
y Arturo lee el estado deducido, igual que la Ruta. Son inserciones de una
tira de HTML en un sitio que ya se repinta.

### La voz

Profesor clínico, sobrio, segunda persona, frases cortas. La misma voz de los
apuntes —la que se escribe alrededor de *"qué hago con este paciente
delante"*— no la de un animador. Dice lo que toca y por qué toca, y cuando
algo sale mal lo nombra sin adornarlo.

El texto vive en `assets/js/arturo.js` como plantillas por situación
(abrir tema, cerrar lectura, resultado alto, resultado bajo, cerrar tema,
abrir simulacro, resultado de tanda, tema flojo, retomar hilo, fin de
recorrido), varias frases por situación para que no se repita al tercer día.

Sin ilustración de personaje: un sello con la inicial en rojo sangría, del
mismo palo que el avatar del perfil. La plataforma ya tiene una identidad
visual y Arturo entra dentro de ella, no encima.

### API

`window.Arturo` en `assets/js/arturo.js`:

```
paso()        -> { tipo, tema, titulo, frase, boton }   // envuelve Ruta.proximoPaso()
frase(ctx)    -> string    // el texto para un momento concreto
barra(ctx)    -> string    // la tira de Arturo, HTML, para incrustar en cualquier vista
seguir()      -> navega y lanza la acción del paso actual
hilo()        -> { tema, en } | null
abrirHilo(t) / cerrarHilo()
```

`seguir()` es el botón único: sea cual sea el paso, Arturo sabe a dónde
llevarte.

## Superficie visible

**Pantalla nueva `ruta`** (emoji 👨‍⚕️, nombre **"Arturo"**), **segunda del menú
de ENURMIA**, entre Inicio y Simulacro. Se llama por su nombre y no "Mi ruta"
a propósito: el estudiante entra a ver a su profesor, no a consultar un
diagrama de avance.

- *Sin ruta*: Arturo se presenta, explica el recorrido y pregunta el tamaño de
  tanda.
- *Con ruta*: tarjeta de Arturo arriba con el paso del día y el botón Seguir;
  debajo, "Tanda 3 de 20" y barra de avance global; tarjeta de
  la tanda en curso con un tema por fila y tres casillas por tema
  (`○ leer / ○ preguntas / ○ tarjetas`), cada casilla un botón que lanza su
  acción; bloque del simulacro de cierre, bloqueado hasta que los temas estén
  completos; aviso de repaso pendiente con botón para entrenar los flojos;
  historial de tandas cerradas.
- *Terminada*: la pantalla de cierre descrita arriba.

**Inicio** (`paneles.js:19`): con ruta activa, la tarjeta principal pasa a ser
la frase de Arturo con su botón Seguir.

**`Motor.proximaAccion()`** (`motor.js:478`): con ruta activa devuelve el paso
de la ruta antes que cualquiera de sus heurísticas actuales.

**Enganches de Arturo** en los pies de `vistas/apuntes.js`, `vistas/sesion.js`
(pantalla de resultado) y `vistas/flashcards.js` (fin de sesión): una llamada
a `Arturo.barra(ctx)` donde esas vistas ya pintan su cierre. Son ediciones de
una línea; no se cablea ningún callback nuevo.

**Plan de 7 días:** se retira de la pantalla "¿Estoy listo?"
(`paneles.js:645-712`) y su sitio lo ocupa un enlace a la Ruta. Dos planes
compitiendo por el mismo estudiante confunden. `Motor.generarPlan` y `d.plan`
se quedan en el código, sin invocarse, por si se quiere recuperar.

## Ficheros

**Nuevos**
- `assets/js/ruta.js` — motor del recorrido
- `assets/js/arturo.js` — la voz: plantillas de texto, hilo y `barra()`
- `assets/js/vistas/ruta.js` — pantalla de Arturo
- `herramientas_validar_ruta.js` — validador

**Editados**
- `app.html` — tres `<script>` (`ruta.js` y `arturo.js` con el núcleo, `vistas/ruta.js` con las vistas)
- `assets/js/app.js` — entrada en `PANTALLAS` y en `MENUS.enurm.arriba` / `.movil`
- `assets/js/almacen.js` — `ruta: null` en `datosNuevos`
- `assets/js/motor.js` — `proximaAccion` consulta la ruta
- `assets/js/vistas/paneles.js` — Inicio, y retirada del plan de 7 días
- `assets/js/vistas/temario.js` — exportar `preguntasDe` e `indice` en vez de
  que la Ruta duplique el emparejamiento tema-banco
- `assets/js/vistas/apuntes.js` — `Arturo.barra()` al pie del apunte
- `assets/js/vistas/sesion.js` — `Arturo.barra()` en la pantalla de resultado
- `assets/js/vistas/flashcards.js` — `Arturo.barra()` al fin de sesión
- `assets/css/app.css` — el sello y la tira de Arturo

## Degradación y casos límite

- **Sin apunte para un tema**: el paso de leer se da por satisfecho y la ficha
  lo dice. Hoy no pasa (101/101 tienen apunte), pero un tema nuevo en
  `temario.js` sin apunte no debe atascar la ruta.
- **Tema del temario que ya no existe** (renombrado entre versiones): al
  cargar la ruta, los nombres de `orden` que no estén en el temario actual se
  saltan como si estuvieran completos, y el pie de la pantalla lo dice
  ("2 temas de tu ruta ya no están en el temario"). No se guarda ninguna
  marca nueva y no se invalida la ruta entera.
- **Temas nuevos añadidos al temario** con una ruta ya en curso: no se
  insertan solos en el orden guardado, porque hacerlo descuadraría el cursor.
  La pantalla avisa de que hay N temas fuera del recorrido y ofrece
  **absorberlos al final**: se añaden a `orden` y se alarga `tandasN`, con lo
  que el cursor, el historial y la cola de repaso quedan intactos. Rehacer la
  ruta desde cero sigue siendo posible, pero es otra cosa y avisa de que borra
  el historial.
- **Ajuste `bancoExtendido` apagado**: cambia `Motor.bancoActivo()` y con él
  las preguntas de cada tema. La Ruta llama a `Temario.invalidar()` al entrar
  en la pantalla, porque ese caché se invalida hoy solo desde `Temario.menu()`.
- **El estudiante abandona el simulacro a medias**: no se cierra la tanda. El
  simulacro se puede repetir; solo cuenta el que termina.
- **UNIRMIA**: la pantalla no aparece en su menú. El motor se escribe sobre
  `Temario.bloques()` y `Apuntes.lista()`, que ya filtran por programa, para
  que añadirlo más adelante sea solo cablear el menú y cambiar el cierre de
  tanda (UNIRMIA no tiene simulacro).

## Verificación

El proyecto no tiene framework de tests: es HTML/JS sin build, y la
verificación se hace con validadores en la raíz (`herramientas_validar_*.py`).
Se sigue esa convención.

`node --check` sobre los dos ficheros nuevos, y `herramientas_validar_ruta.js`
comprobando:

1. Los 101 temas entran **exactamente una vez** en `orden`.
2. `tandasN` suma 101 para tam = 3, 5, 8 y 10.
3. En cualquier prefijo del orden, el reparto por bloque no se desvía más de
   1 tema del proporcional.
4. Los 101 temas tienen apunte, >= 5 preguntas explicadas y >= 10 flashcards
   (es decir: dan para los tres pasos).
5. `simulacroDeTanda()` devuelve `n` preguntas, sin ids repetidos, con el
   reparto 70/30 dentro de una pregunta de tolerancia.
6. `cerrarTanda()` con un resultado sintético marca flojos por debajo de 60,
   recupera por encima de 60 con >= 3 preguntas, y avanza el cursor.
7. `segundaVuelta()` deja `vuelta = 2`, pone los flojos al principio del
   orden, conserva el `historial` y devuelve `tandaActual().completa === true`
   sin que el estudiante haga nada.
8. `crear()` acota: `crear(1)` y `crear(50)` producen rutas válidas de 101
   temas.
9. `Arturo.paso()` devuelve un paso con frase y botón para **todos** los
   estados posibles del recorrido (sin ruta, hilo abierto, tema completo,
   tanda completa, simulacro pendiente, repaso pendiente, vuelta 2,
   terminada). Ninguno cae en frase vacía.
10. Cada situación de la voz tiene al menos tres frases distintas, y
    `frase()` no repite la misma dos veces seguidas para un mismo estado.
