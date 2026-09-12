# Estudio por bloques: orden elegido y progresión con puertas

**Fecha:** 2026-09-12 · **Programa:** ENURMIA · **Estado:** diseño aprobado

## El problema

El recorrido de Arturo reparte los 101 temas **intercalados** entre los cuatro
bloques, en proporción a su peso. Se hizo así por una razón buena: cada tanda se
parece al examen real desde el primer día, y nadie pasa dos meses encerrado en
cardiología antes de ver una pregunta de Pediatría.

Pero ese orden no deja organizar el estudio como lo organiza un estudiante real.
Quien va a por Pediatría porque la lleva floja no quiere que le caiga un tema de
Cirugía por el medio, y quien quiere cerrar bloques de uno en uno no tiene forma
de hacerlo.

Esto añade el modo que falta: **eliges los bloques y su orden, y no pasas al
siguiente hasta cerrar el anterior**.

## Decisiones tomadas

| Pregunta | Decisión |
|---|---|
| Orden | Lo elige el estudiante, bloque a bloque |
| Puerta | Todos los temas cerrados **y** examen de bloque con ≥60% |
| Simulacro | Dos botones: uno de lo estudiado, otro del ENURM completo |
| La norma | Activada por defecto, se apaga en Ajustes |
| Con la norma apagada | Todo libre, como hoy |
| Primera vez | Menú central en Inicio para organizar el estudio |
| Recorridos ya creados | No se tocan: las puertas solo aplican al modo bloques |
| Áreas transversales | Siempre abiertas |

## El cambio de fondo, dicho claro

El intercalado y el estudio por bloques responden a dos ideas distintas de cómo
se aprende, y **las dos son defendibles**:

- **Intercalado** (lo que hay): mezcla desde el principio, cada examen se parece
  al real, nada se enfría. Es lo que recomienda la investigación sobre práctica
  intercalada.
- **Por bloques** (lo que se añade): dominio de un tema antes de pasar al
  siguiente. Es como estudia casi todo el mundo y como están escritos los libros.

Lo que compensa el riesgo del segundo —que Pediatría se enfríe mientras estás en
Cirugía— es que **el 30% de repaso de cada examen de tanda sigue trayendo lo
anterior**. Ese mecanismo ya existe y no se toca; aquí es lo que impide que el
estudio por bloques se convierta en olvidar por bloques.

Los dos modos conviven. El intercalado sigue siendo lo que sale si la norma está
apagada al crear el recorrido.

## Modelo de datos

```js
d.ruta = {
  ...,                          // lo que ya había
  modo: 'bloques',              // 'bloques' | 'mezclado'
  bloques: ['Pediatría', 'Ginecología y Obstetricia', ...],  // AHORA IMPORTA EL ORDEN
  bloquesCerrados: {
    'Pediatría': { fecha: 1757548800000, pct: 78 }
  }
}

d.ajustes.porBloques = true     // la norma
d.ajustes.bienvenidaVista = true // el menú de primera vez, ya despachado
```

`bloques` ya existía como array; lo nuevo es que **su orden es el orden del
recorrido**. Un recorrido creado antes de esto no tiene `modo`, y eso se lee
como `'mezclado'`: las puertas no le aplican y sigue funcionando igual.

**Quién fija `modo`:** se decide **al crear el recorrido**, mirando el ajuste en
ese momento. Con la norma activada nace `'bloques'`; con la norma apagada nace
`'mezclado'` y el orden vuelve a ser el intercalado. Apagar la norma después
quita las puertas pero no reescribe el orden, porque reordenar con el cursor a
medias descuadraría las tandas ya cerradas.

## Algoritmos

### El orden

```js
ordenPorBloques(elegidosEnOrden)  // concatena los bloques en ese orden,
                                  // y dentro de cada uno los temas en el
                                  // orden en que están escritos en el temario
```

No hay intercalado ni reparto proporcional: es concatenación pura. El orden del
temario dentro de cada bloque ya es didáctico (en Medicina Interna va cardio,
respiratorio, digestivo…), así que se respeta tal cual.

`ordenIntercalado` **se queda** y se usa cuando `modo === 'mezclado'`.

### La puerta

Un bloque está cerrado cuando se cumplen las dos:

1. **Todos sus temas completos** — los tres pasos de cada uno.
2. **Examen de bloque aprobado** — `bloquesCerrados[nombre]` existe.

```js
bloqueActual()        -> el primero de `bloques` que no esté cerrado, o null
bloqueDisponible(b)   -> true si es el actual, si ya está cerrado,
                         o si la norma está apagada
temasDelBloqueHechos(b) -> { hechos, total, completo }
```

### El examen de bloque

```
n = min(40, preguntas explicadas del bloque)
minutos = round(n * 1.2)
```

Se arma **de todo el bloque**, no solo de la última tanda: repartido a partes
iguales entre sus temas, priorizando los de peor dominio y las preguntas
explicadas. Igual que el examen de tanda, guarda el mapa `pregunta → tema` en
`d.ruta.sim` para medir por tema sin el ruido del emparejamiento por claves.

Aprobado con **≥60%**. Al aprobarlo:

- `bloquesCerrados[bloque] = { fecha, pct }`
- los temas por debajo del 60% entran en la cola de repaso
- se abre el bloque siguiente

Si no llega al 60% se puede repetir cuantas veces haga falta. **No se bloquea a
nadie sin salida**: los temas flojos entran igualmente en la cola, así que
repetir el examen no es repetir lo mismo.

### Qué se puede entrenar

```js
preguntasDisponibles()
```

El filtro va por la **especialidad de la pregunta** (`q.esp`), no por los temas:

> Entran las preguntas cuya `esp` sea uno de los bloques cerrados o el bloque
> actual, más todas las transversales. Con la norma apagada, el banco entero.

Se hace por `esp` y no recorriendo los temas a propósito. Recorrer los temas
dejaría fuera las preguntas de un bloque abierto que ninguna `clave` del temario
llega a enganchar, y esas existen: el emparejamiento por claves cubre los temas
del programa, no todo el banco. Por `esp` no hay huecos.

Los cuatro bloques del temario y los valores de `esp` **coinciden exactamente**
—'Medicina Interna', 'Ginecología y Obstetricia', 'Pediatría', 'Cirugía'—, lo
que hace que el filtro sea una comparación directa y no una traducción entre dos
taxonomías.

Las transversales —Farmacología, Ciencias Básicas, Epidemiología, Salud Pública,
Bioética, Emergencias, Psiquiatría, Medicina Familiar— **nunca se cierran**. No
están en ninguno de los cuatro bloques del temario y atraviesan todos, así que
ponerlas detrás de una puerta dejaría al estudiante sin poder estudiarlas nunca.
Se identifican por exclusión: una `esp` que no sea uno de los cuatro bloques es
transversal.

## La superficie visible

### El menú de bienvenida

En Inicio, si no hay recorrido y `ajustes.bienvenidaVista` no está puesto, se
abre un modal centrado nada más entrar:

> **Vamos a organizar tu estudio**
> Elige los bloques que quieres preparar y en qué orden. Irás cerrándolos de uno
> en uno: no pasas al siguiente hasta terminar el anterior.

Dentro, el mismo selector que la pantalla de Arturo, más el tamaño de tanda.
Abajo, **"Lo haré después"**, que marca `bienvenidaVista` y no vuelve a salir.

Es lo primero que ve un estudiante nuevo, que es lo que se pidió.

### El selector con orden

Cada bloque es una fila con casilla. Al marcarlo se añade **al final** de la
lista elegida y muestra su número. Las filas elegidas llevan **↑ ↓** para
moverlas.

Nada de arrastrar y soltar: sin librerías, funciona en móvil y con teclado, y no
hay estado intermedio que se pueda quedar a medias.

### La pantalla del recorrido

Encima de la tanda aparece la tira de bloques en su orden, cada uno con su
estado: cerrado (con su nota), en curso (con cuántos temas lleva), o con candado
y el texto de qué falta para abrirlo.

Cuando todos los temas del bloque están completos, en lugar del examen de tanda
aparece el **examen del bloque**, con su nombre y lo que se juega.

### Entrenar

Con la norma activada, el pool se limita a `preguntasDisponibles()`. Los chips
de especialidad de bloques aún cerrados salen con candado y, al tocarlos, dicen
qué bloque hay que cerrar antes.

### Simulacro: dos botones

- **Examen de mi bloque** — de `preguntasDisponibles()`. Mide el avance.
- **Simulacro ENURM** — del banco entero, con la distribución real, **siempre**.
  Encima del resultado, una línea: *"Medido sobre el temario completo; llevas el
  34% recorrido"*.

Esta separación es deliberada y es la parte del diseño que más protege al
estudiante. Un simulacro limitado a lo estudiado devuelve un 85% que no
significa nada y dice "estás listo" cuando no lo está. El índice de preparación
de la app se alimenta **solo** del simulacro completo.

### Ajustes

Un conmutador: **"Estudiar por bloques en orden"**, activado por defecto.
Apagarlo quita las puertas de inmediato; el recorrido sigue marcando el avance.

## Degradación y casos límite

- **Recorrido antiguo sin `modo`**: se lee como `'mezclado'`. Ninguna puerta, todo
  como hoy. No hay migración que ejecutar.
- **Norma apagada a mitad**: las puertas desaparecen al instante; `bloquesCerrados`
  se conserva por si se vuelve a activar.
- **Un bloque sin preguntas suficientes para 40**: el examen usa las que haya
  (`min(40, disponibles)`), igual que hacen los otros exámenes.
- **Un solo bloque elegido**: al cerrarlo, el recorrido termina. Vale lo que ya
  hay para el fin de recorrido y la segunda vuelta.
- **El estudiante reordena después de empezar**: no se permite reordenar un
  recorrido en marcha; hay que rehacerlo. Reordenar con el cursor a medias
  descuadraría las tandas ya cerradas, y el aviso lo dice.

## Lo que se toca

**Editados**
- `assets/js/ruta.js` — `ordenPorBloques`, `bloqueActual`, `bloqueDisponible`, `examenDeBloque`, `cerrarExamenDeBloque`, `preguntasDisponibles`, `esTransversal`
- `assets/js/vistas/ruta.js` — selector con orden, tira de bloques, examen de bloque
- `assets/js/vistas/paneles.js` — menú de bienvenida, Entrenar filtrado, los dos botones, el ajuste
- `assets/js/almacen.js` — `ajustes.porBloques`, `ajustes.bienvenidaVista`
- `herramientas_validar_ruta.js` — las comprobaciones de abajo

## Verificación

1. `ordenPorBloques(['Pediatría','Cirugía'])` devuelve los 20 de Pediatría y luego
   los 19 de Cirugía, en ese orden y sin mezclar.
2. Un recorrido sin `modo` se comporta como `'mezclado'`: `bloqueDisponible`
   devuelve true para todos.
3. Con todos los temas del primer bloque completos pero sin examen de bloque, el
   bloque **no** está cerrado y el siguiente **no** está disponible.
4. Al aprobar el examen de bloque con ≥60%, se cierra, se abre el siguiente y los
   temas por debajo de 60 entran en la cola de repaso.
5. Con <60% no se cierra y se puede repetir.
6. `preguntasDisponibles()` con el primer bloque en curso trae solo temas de ese
   bloque más las transversales, y ninguna de un bloque posterior.
7. Con la norma apagada, `preguntasDisponibles()` devuelve el banco activo entero.
8. `examenDeBloque` devuelve `min(40, explicadas del bloque)` sin repetir ids y
   todas del bloque.
