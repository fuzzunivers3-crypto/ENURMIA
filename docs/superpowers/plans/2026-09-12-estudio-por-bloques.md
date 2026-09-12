# Estudio por bloques — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Que el estudiante elija los bloques del temario y su orden, y no pase al siguiente hasta cerrar el anterior con sus temas hechos y un examen del bloque aprobado.

**Architecture:** El motor gana un segundo modo de orden (`'bloques'` frente al `'mezclado'` que ya existe), las puertas entre bloques y un pool de preguntas disponibles filtrado por `esp`. Las vistas ganan el selector con orden, la tira de estado de bloques, el menú de bienvenida en Inicio y los dos botones de simulacro. Nada de esto toca los recorridos ya creados: sin `modo` se leen como `'mezclado'` y ninguna puerta les aplica.

**Tech Stack:** HTML/CSS/JavaScript sin build, módulos IIFE sobre `window`, persistencia en `localStorage` vía `Almacen` con espejo en Supabase. Node solo para el validador.

**Spec:** `docs/superpowers/specs/2026-09-12-estudio-por-bloques-design.md`

## Global Constraints

- **Español en todo.** Comentarios del código fuente **sin tildes**; texto que ve el estudiante, **con tildes**.
- **`assets/js/ruta.js` no toca el DOM.** Tiene que cargarse en Node para el validador. Nada de `async`/`await` ahí.
- **Cadenas en comillas simples**, cuidado con los apóstrofos.
- **Umbrales, textuales del spec:** examen de bloque `min(40, explicadas del bloque)` a `n * 1.2` minutos, aprobado con **≥60%**, tema flojo por debajo de **60%**.
- **Los cuatro bloques del temario coinciden exactos con los valores de `q.esp`** — verificado contra los datos: `'Medicina Interna'`, `'Ginecología y Obstetricia'`, `'Pediatría'`, `'Cirugía'`. El filtro es comparación directa.
- **Un recorrido sin `modo` es `'mezclado'`.** No hay migración que ejecutar y no se le puede romper nada.
- **El simulacro completo NUNCA se filtra.** Es la decisión que más protege al estudiante: un simulacro limitado a lo estudiado devuelve un número que miente.
- **Verificación:** `node --check` sobre lo tocado y `node herramientas_validar_ruta.js`.
- **Rama:** `ruta-temario`. Un commit por tarea.

## Estructura de ficheros

| Fichero | Responsabilidad |
|---|---|
| `assets/js/ruta.js` | Orden por bloques, puertas, examen de bloque, pool disponible |
| `assets/js/vistas/ruta.js` | Selector con orden y cifras, tira de bloques, examen de bloque |
| `assets/js/vistas/paneles.js` | Menú de bienvenida, Entrenar filtrado, dos botones de simulacro, el ajuste |
| `assets/js/almacen.js` | `ajustes.porBloques`, `ajustes.bienvenidaVista` |
| `assets/css/app.css` | La tira de bloques y las filas ordenables |
| `herramientas_validar_ruta.js` | Las comprobaciones |

---

### Task 1: El orden por bloques y el modo

**Files:**
- Modify: `assets/js/ruta.js`
- Modify: `assets/js/almacen.js`
- Modify: `herramientas_validar_ruta.js`

**Interfaces:**
- Consumes: `Ruta.bloques()` (interno), `Ruta.temas()`, `Ruta._tandas`, `Almacen.datos()`.
- Produces:
  - `Ruta._ordenPorBloques(elegidosEnOrden)` → `string[]` concatenando bloques en ese orden
  - `Ruta.crear(tam, elegidos)` → ahora fija `modo` según `d.ajustes.porBloques` y guarda `bloquesCerrados: {}`
  - `Ruta.porBloques()` → `bool`, si el recorrido activo va en modo bloques **y** la norma sigue activada
  - `Ruta.temasDeBloque(nombre)` → `string[]` con los nombres de tema de ese bloque

- [ ] **Step 1: Escribir las comprobaciones que fallan**

Insertar en `herramientas_validar_ruta.js` antes de la línea final `fin();`:

```js
/* ============================================================
   15. Orden por bloques y modo del recorrido
   ============================================================ */
titulo('Orden por bloques');

/* Concatenacion pura, en el orden pedido: nada de intercalar. */
const ordenPB = Ruta._ordenPorBloques(['Pediatría', 'Cirugía']);
igual(ordenPB.length, 39, 'Pediatria y Cirugia suman 39 temas');
const bloquePB = ordenPB.map(function (n) { return Ruta.temaPorNombre(n).bloque; });
igual(bloquePB.slice(0, 20).filter(function (b) { return b === 'Pediatría'; }).length, 20,
      'los 20 primeros son todos de Pediatria');
igual(bloquePB.slice(20).filter(function (b) { return b === 'Cirugía'; }).length, 19,
      'los 19 siguientes son todos de Cirugia');

/* El orden manda: al revés sale al revés. */
const alReves = Ruta._ordenPorBloques(['Cirugía', 'Pediatría']);
igual(Ruta.temaPorNombre(alReves[0]).bloque, 'Cirugía', 'invertir la lista invierte el recorrido');

/* Dentro de un bloque se respeta el orden del temario. */
igual(Ruta._ordenPorBloques(['Pediatría'])[0],
      Ruta.temas().filter(function (t) { return t.bloque === 'Pediatría'; })[0].t,
      'dentro del bloque los temas van en el orden del temario');

/* ---- el modo se fija al crear, mirando el ajuste ---- */
reiniciar();
D.ajustes.porBloques = true;
const rB = Ruta.crear(5, ['Pediatría', 'Cirugía']);
igual(rB.modo, 'bloques', 'con la norma activada el recorrido nace en modo bloques');
igual(rB.orden.length, 39, 'y recorre los dos bloques elegidos');
igual(Ruta.temaPorNombre(rB.orden[0]).bloque, 'Pediatría', 'empieza por el primero que eligio');
ok(!!rB.bloquesCerrados, 'nace con el registro de bloques cerrados');
igual(Object.keys(rB.bloquesCerrados).length, 0, 'y vacio');
igual(Ruta.porBloques(), true, 'porBloques() dice que si');

reiniciar();
D.ajustes.porBloques = false;
const rM = Ruta.crear(5, ['Pediatría', 'Cirugía']);
igual(rM.modo, 'mezclado', 'con la norma apagada el recorrido nace mezclado');
/* Mezclado = intercalado: los dos bloques aparecen desde el principio. */
const primeros4 = rM.orden.slice(0, 4).map(function (n) { return Ruta.temaPorNombre(n).bloque; });
igual(new Set(primeros4).size, 2, 'en mezclado los dos bloques salen desde el principio');
igual(Ruta.porBloques(), false, 'porBloques() dice que no');

/* ---- un recorrido viejo, sin modo, se lee como mezclado ---- */
reiniciar();
D.ajustes.porBloques = true;
const rViejo = Ruta.crear(5);
delete rViejo.modo;
delete rViejo.bloquesCerrados;
igual(Ruta.porBloques(), false, 'un recorrido sin modo no tiene puertas aunque la norma este activada');

/* ---- apagar la norma con el recorrido en marcha quita las puertas ---- */
reiniciar();
D.ajustes.porBloques = true;
Ruta.crear(5, ['Pediatría', 'Cirugía']);
igual(Ruta.porBloques(), true, 'con la norma activada hay puertas');
D.ajustes.porBloques = false;
igual(Ruta.porBloques(), false, 'apagar la norma las quita al instante');
igual(Ruta.activa().modo, 'bloques', 'pero no reescribe el orden ya creado');

/* ---- las tandas se reparten DENTRO de cada bloque ----
   Si una tanda quedara a caballo entre dos bloques, al cerrar el bloque
   el cursor caeria a mitad de tanda y el recorrido se encallaria con una
   tanda que ya no se puede cerrar. Cada frontera de bloque tiene que ser
   tambien frontera de tanda. */
reiniciar();
D.ajustes.porBloques = true;
const rF = Ruta.crear(5, ['Pediatría', 'Cirugía']);
igual(rF.tandasN.reduce(function (a, c) { return a + c; }, 0), 39,
      'las tandas suman los 39 temas de los dos bloques');
let acumF = 0, fronteras = [];
rF.tandasN.forEach(function (n) { acumF += n; fronteras.push(acumF); });
ok(fronteras.indexOf(20) >= 0,
   'el final de Pediatria (tema 20) es frontera de tanda');
igual(rF.tandasN.length, Ruta._tandas(20, 5).length + Ruta._tandas(19, 5).length,
      'el numero de tandas es la suma de las de cada bloque');

/* ---- los temas de un bloque ---- */
igual(Ruta.temasDeBloque('Pediatría').length, 20, 'Pediatria tiene 20 temas');
igual(Ruta.temasDeBloque('Medicina Interna').length, 41, 'Medicina Interna tiene 41');
igual(Ruta.temasDeBloque('No existe').length, 0, 'un bloque inexistente no tiene temas');
```

- [ ] **Step 2: Ejecutarlo para verificar que falla**

Run: `node herramientas_validar_ruta.js`
Expected: FAIL con `TypeError: Ruta._ordenPorBloques is not a function`.

- [ ] **Step 3: Implementar en `assets/js/ruta.js`**

Añadir el ajuste en `assets/js/almacen.js`, dentro de `datosNuevos`, al objeto `ajustes`:

```js
      ajustes: { pedirConfianza: true, defenderRespuesta: false, animaciones: true, bancoExtendido: true, reexplicar: true, porBloques: true, bienvenidaVista: false }
```

En `assets/js/ruta.js`, justo después de `ordenIntercalado`, añadir:

```js
  /* El otro modo de recorrido: los bloques enteros, uno detras de otro,
     en el orden que eligio el estudiante. Concatenacion pura, sin
     intercalar: dentro de cada bloque los temas van como estan escritos
     en el temario, que ya es un orden didactico. */
  function ordenPorBloques(elegidos){
    const filtro = normalizarBloques(elegidos);
    const out = [];
    filtro.forEach(function (nombre) {
      bloques().forEach(function (b) {
        if (b.bloque !== nombre) return;
        b.temas.forEach(function (t) { out.push(t.t); });
      });
    });
    return out;
  }

  function temasDeBloque(nombre){
    return temas().filter(function (t) { return t.bloque === nombre; })
                  .map(function (t) { return t.t; });
  }

  /* Las puertas solo aplican si el recorrido nacio en modo bloques Y la
     norma sigue activada. Un recorrido creado antes de que esto
     existiera no tiene `modo`, y eso es 'mezclado': no se le puede
     imponer un orden por bloques a media carrera. */
  function porBloques(){
    const r = activa();
    const d = datos();
    if (!r || r.modo !== 'bloques') return false;
    return !(d && d.ajustes && d.ajustes.porBloques === false);
  }
```

Reemplazar `crear` entero por:

```js
  function crear(tam, elegidos){
    const d = datos();
    if (!d) return null;
    const bls = normalizarBloques(elegidos);
    /* El modo se decide aqui, mirando el ajuste, y ya no cambia: apagar
       la norma despues quita las puertas pero no reescribe el orden,
       porque reordenar con el cursor a medias descuadraria las tandas
       ya cerradas. */
    const modo = (d.ajustes && d.ajustes.porBloques === false) ? 'mezclado' : 'bloques';
    const orden = (modo === 'bloques') ? ordenPorBloques(bls) : ordenIntercalado(bls);
    /* En modo bloques las tandas se reparten DENTRO de cada bloque y se
       concatenan, no sobre los 101 temas seguidos. Si no, una tanda
       quedaria a caballo entre dos bloques y al cerrar el bloque el
       cursor caeria a mitad de tanda: el recorrido se encallaria con una
       tanda que ya no se puede cerrar. Asi cada frontera de bloque es
       tambien frontera de tanda. */
    const tandasN = (modo === 'bloques')
      ? bls.reduce(function (acc, nombre) {
          return acc.concat(repartirTandas(temasDeBloque(nombre).length, tam));
        }, [])
      : repartirTandas(orden.length, tam);
    d.ruta = {
      v: 1,
      creado: Date.now(),
      tam: acotar(tam),
      vuelta: 1,
      modo: modo,
      bloques: bls,
      bloquesCerrados: {},
      orden: orden,
      examenes: {},
      tandasN: tandasN,
      cursor: 0,
      tanda: 1,
      repaso: [],
      hilo: null,
      terminada: null,
      historial: []
    };
    guardar();
    return d.ruta;
  }
```

**Importante sobre `normalizarBloques`:** hoy filtra los válidos pero **pierde el orden pedido** si se apoya en el orden de `bloques()`. Comprobar que devuelve `elegidos` en el orden en que llegan y no el del temario. La versión correcta es la que ya hay:

```js
  function normalizarBloques(elegidos){
    const todos = bloques().map(function (b) { return b.bloque; });
    if (!elegidos || !elegidos.length) return todos;
    const validos = elegidos.filter(function (x) { return todos.indexOf(x) >= 0; });
    return validos.length ? validos : todos;
  }
```

`validos` conserva el orden de `elegidos`, que es lo que hace falta. No tocarla.

Añadir al `return` del módulo:

```js
    _ordenPorBloques: ordenPorBloques, temasDeBloque: temasDeBloque,
    porBloques: porBloques,
```

- [ ] **Step 4: Ejecutar y verificar que pasa**

Run: `node --check assets/js/ruta.js && node --check assets/js/almacen.js && node herramientas_validar_ruta.js`
Expected: PASS.

Si falla `'con la norma apagada el recorrido nace mezclado'`, el arnés no está reiniciando `D.ajustes`: `reiniciar()` reconstruye el estudiante entero, así que hay que poner `D.ajustes.porBloques` **después** de cada `reiniciar()`.

- [ ] **Step 5: Commit**

```bash
git add assets/js/ruta.js assets/js/almacen.js herramientas_validar_ruta.js
git commit -m "Ruta: orden por bloques y modo del recorrido"
```

---

### Task 2: Las puertas y el examen de bloque

**Files:**
- Modify: `assets/js/ruta.js`
- Modify: `herramientas_validar_ruta.js`

**Interfaces:**
- Consumes: `Ruta.porBloques()`, `Ruta.temasDeBloque(nombre)`, `Ruta.pasosDe(tema)`, `Ruta.preguntasDe(tema)` (Task 1 y lo que ya había).
- Produces:
  - `Ruta.bloqueActual()` → `string | null` — el primero de `bloques` sin cerrar
  - `Ruta.estadoBloque(nombre)` → `{ nombre, total, hechos, completo, cerrado, pct, disponible }`
  - `Ruta.bloqueDisponible(nombre)` → `bool`
  - `Ruta.examenDeBloque(nombre)` → `Pregunta[]`
  - `Ruta.minutosDeBloque(nombre)` → `number`
  - `Ruta.cerrarExamenDeBloque(nombre, resultado)` → `{ pct, aprobado, flojos }`

- [ ] **Step 1: Escribir las comprobaciones**

Insertar antes de `fin();`:

```js
/* ============================================================
   16. Las puertas entre bloques
   ============================================================ */
titulo('Puertas entre bloques');

/* Cierra todos los temas de un bloque tocando solo el progreso normal. */
function estudiarBloque(nombre){
  Ruta.temasDeBloque(nombre).forEach(estudiarTema);
  Ruta.invalidar();
}

reiniciar();
D.ajustes.porBloques = true;
Ruta.crear(5, ['Pediatría', 'Cirugía']);

igual(Ruta.bloqueActual(), 'Pediatría', 'el bloque actual es el primero elegido');
igual(Ruta.bloqueDisponible('Pediatría'), true, 'el actual esta disponible');
igual(Ruta.bloqueDisponible('Cirugía'), false, 'el siguiente esta cerrado con llave');

let eB = Ruta.estadoBloque('Pediatría');
igual(eB.total, 20, 'Pediatria tiene 20 temas');
igual(eB.hechos, 0, 'sin estudiar nada lleva 0');
igual(eB.completo, false, 'no esta completo');
igual(eB.cerrado, false, 'ni cerrado');

/* Con TODOS los temas hechos pero sin examen, el bloque sigue abierto:
   esa es la diferencia entre "hice los deberes" y "esto lo se". */
estudiarBloque('Pediatría');
eB = Ruta.estadoBloque('Pediatría');
igual(eB.hechos, 20, 'los 20 temas quedan hechos');
igual(eB.completo, true, 'el bloque esta completo de temas');
igual(eB.cerrado, false, 'pero NO cerrado: falta el examen');
igual(Ruta.bloqueDisponible('Cirugía'), false, 'y el siguiente sigue con llave');
igual(Ruta.bloqueActual(), 'Pediatría', 'el bloque actual no avanza sin aprobar');

/* El examen del bloque sale de TODO el bloque, no de la ultima tanda. */
const exB = Ruta.examenDeBloque('Pediatría');
ok(exB.length > 0, 'el examen de bloque trae preguntas');
ok(exB.length <= 40, 'como mucho 40 (salieron ' + exB.length + ')');
const vistosB = {};
let dupsB = 0;
exB.forEach(function (q) { if (vistosB[q.id]) dupsB++; vistosB[q.id] = 1; });
igual(dupsB, 0, 'sin preguntas repetidas');
const idsPed = {};
Ruta.temasDeBloque('Pediatría').forEach(function (t) {
  Ruta.preguntasDe(t).forEach(function (q) { idsPed[q.id] = 1; });
});
ok(exB.every(function (q) { return idsPed[q.id]; }), 'todas las preguntas son del bloque');
ok(Ruta.minutosDeBloque('Pediatría') > 0, 'el examen tiene tiempo asignado');

/* Suspenderlo no cierra nada y se puede repetir. */
const mal = Ruta.cerrarExamenDeBloque('Pediatría', {
  respuestas: exB.map(function (q) { return { qid:q.id, ok:false }; })
});
igual(mal.pct, 0, 'un examen fallado da 0%');
igual(mal.aprobado, false, 'y no aprueba');
igual(Ruta.estadoBloque('Pediatría').cerrado, false, 'el bloque sigue abierto');
igual(Ruta.bloqueDisponible('Cirugía'), false, 'y el siguiente con llave');
ok(Ruta.examenDeBloque('Pediatría').length > 0, 'se puede repetir el examen');

/* Aprobarlo cierra el bloque y abre el siguiente. */
const bien = Ruta.cerrarExamenDeBloque('Pediatría', {
  respuestas: exB.map(function (q) { return { qid:q.id, ok:true }; })
});
igual(bien.pct, 100, 'un examen perfecto da 100%');
igual(bien.aprobado, true, 'y aprueba');
igual(Ruta.estadoBloque('Pediatría').cerrado, true, 'el bloque queda cerrado');
igual(Ruta.estadoBloque('Pediatría').pct, 100, 'con su nota');
igual(Ruta.bloqueActual(), 'Cirugía', 'el bloque actual pasa al siguiente');
igual(Ruta.bloqueDisponible('Cirugía'), true, 'que ya esta disponible');
igual(Ruta.bloqueDisponible('Pediatría'), true, 'y el cerrado sigue accesible');

/* Y el cursor salta al primer tema del bloque siguiente, en frontera de
   tanda: sin esto el recorrido se queda encallado en la ultima tanda de
   un bloque que ya esta cerrado. */
igual(Ruta.activa().cursor, 20, 'el cursor salta al primer tema de Cirugia');
igual(Ruta.temaPorNombre(Ruta.activa().orden[Ruta.activa().cursor]).bloque, 'Cirugía',
      'y ese tema es del bloque siguiente');
const taTrasCierre = Ruta.tandaActual();
ok(!!taTrasCierre && taTrasCierre.temas.length > 0, 'hay tanda en curso despues de cerrar');
ok(taTrasCierre.temas.every(function (f) {
     return Ruta.temaPorNombre(f.tema).bloque === 'Cirugía';
   }), 'y todos sus temas son del bloque nuevo');

/* Justo en el corte: 60% aprueba. */
reiniciar();
D.ajustes.porBloques = true;
Ruta.crear(5, ['Pediatría', 'Cirugía']);
estudiarBloque('Pediatría');
const ex60 = Ruta.examenDeBloque('Pediatría');
const justo = Math.round(ex60.length * 0.6);
const r60 = Ruta.cerrarExamenDeBloque('Pediatría', {
  respuestas: ex60.map(function (q, i) { return { qid:q.id, ok: i < justo }; })
});
ok(r60.pct >= 60, 'el examen al 60% da ' + r60.pct + '%');
igual(r60.aprobado, true, 'y con 60% se aprueba');

/* Con la norma apagada no hay puertas de ningun tipo. */
D.ajustes.porBloques = false;
igual(Ruta.bloqueDisponible('Cirugía'), true, 'sin norma todos los bloques estan disponibles');
```

- [ ] **Step 2: Ejecutarlo para verificar que falla**

Run: `node herramientas_validar_ruta.js`
Expected: FAIL con `TypeError: Ruta.bloqueActual is not a function`.

- [ ] **Step 3: Implementar en `assets/js/ruta.js`**

Insertar antes del `return` del módulo:

```js
  /* ---------- las puertas entre bloques ---------- */
  function estadoBloque(nombre){
    const r = activa();
    const ts = temasDeBloque(nombre);
    let hechos = 0;
    ts.forEach(function (t) { if (pasosDe(t).completo) hechos++; });
    const cerrado = !!(r && r.bloquesCerrados && r.bloquesCerrados[nombre]);
    return {
      nombre: nombre,
      total: ts.length,
      hechos: hechos,
      completo: ts.length > 0 && hechos === ts.length,
      cerrado: cerrado,
      pct: cerrado ? r.bloquesCerrados[nombre].pct : null,
      disponible: bloqueDisponible(nombre)
    };
  }

  /* El primero de la lista que no este cerrado. Cuando no queda ninguno,
     el recorrido se acabo. */
  function bloqueActual(){
    const r = activa();
    if (!r) return null;
    const cerrados = r.bloquesCerrados || {};
    for (let i = 0; i < r.bloques.length; i++){
      if (!cerrados[r.bloques[i]]) return r.bloques[i];
    }
    return null;
  }

  function bloqueDisponible(nombre){
    if (!porBloques()) return true;
    const r = activa();
    if (!r) return true;
    if (r.bloquesCerrados && r.bloquesCerrados[nombre]) return true;
    return bloqueActual() === nombre;
  }

  /* ---------- el examen que abre la puerta ---------- */
  /* Sale de TODO el bloque, no de la ultima tanda: la diferencia entre
     "hice los deberes" y "esto lo se". */
  function examenDeBloque(nombre){
    const ts = temasDeBloque(nombre);
    if (!ts.length) return [];
    const n = Math.min(40, ts.reduce(function (a, t) {
      return a + preguntasDe(t).filter(function (q) { return !!q.exp; }).length;
    }, 0));
    if (!n) return [];

    const usados = {};
    const salida = [];
    const mapa = {};
    const porTema = Math.max(1, Math.floor(n / ts.length));

    /* Los temas que peor llevas van primero, para que si el cupo no
       alcanza a todos se gaste donde hace falta. */
    const orden = ts.slice().sort(function (a, b) {
      return dominioTema(a) - dominioTema(b);
    });

    orden.forEach(function (t) {
      if (salida.length >= n) return;
      const qs = barajar(preguntasDe(t).filter(function (q) { return !!q.exp; }));
      let puestos = 0;
      for (let i = 0; i < qs.length && puestos < porTema && salida.length < n; i++){
        if (usados[qs[i].id]) continue;
        usados[qs[i].id] = 1;
        salida.push(qs[i]);
        mapa[qs[i].id] = t;
        puestos++;
      }
    });

    /* Si el reparto por tema no llego a n, se completa con lo que quede
       del bloque. */
    if (salida.length < n){
      orden.forEach(function (t) {
        if (salida.length >= n) return;
        preguntasDe(t).filter(function (q) { return !!q.exp; }).forEach(function (q) {
          if (salida.length >= n || usados[q.id]) return;
          usados[q.id] = 1;
          salida.push(q);
          mapa[q.id] = t;
        });
      });
    }

    const r = activa();
    if (r){ r.sim = mapa; guardar(); }
    return barajar(salida);
  }

  function minutosDeBloque(nombre){
    return Math.max(2, Math.round(examenDeBloque(nombre).length * 1.2));
  }

  function cerrarExamenDeBloque(nombre, resultado){
    const r = activa();
    if (!r) return null;
    const resp = (resultado && resultado.respuestas) || [];
    if (!resp.length) return { pct: 0, aprobado: false, flojos: [] };

    const pct = Math.round(
      resp.filter(function (x) { return x.ok; }).length / resp.length * 100);
    const aprobado = pct >= CORTE_FLOJO;

    /* Los temas por debajo del corte entran en la cola de repaso, se
       apruebe o no: repetir el examen no tiene que ser repetir lo mismo. */
    const mapa = r.sim || {};
    const cuenta = {}, aciertos = {};
    resp.forEach(function (x) {
      const t = mapa[x.qid];
      if (!t) return;
      cuenta[t] = (cuenta[t] || 0) + 1;
      if (x.ok) aciertos[t] = (aciertos[t] || 0) + 1;
    });
    const flojos = [];
    Object.keys(cuenta).forEach(function (t) {
      const p = Math.round((aciertos[t] || 0) / cuenta[t] * 100);
      if (p < CORTE_FLOJO){
        flojos.push(t);
        if (r.repaso.indexOf(t) < 0) r.repaso.push(t);
      }
    });

    if (aprobado){
      if (!r.bloquesCerrados) r.bloquesCerrados = {};
      r.bloquesCerrados[nombre] = { fecha: Date.now(), pct: pct };
      /* El cursor salta al primer tema del bloque siguiente. Como las
         tandas se reparten por bloque, esa posicion es siempre frontera
         de tanda, asi que la cuenta de tandas cuadra sin arrastres. */
      const suyos = temasDeBloque(nombre).length;
      let antes = 0;
      for (let i = 0; i < r.bloques.length; i++){
        if (r.bloques[i] === nombre) break;
        antes += temasDeBloque(r.bloques[i]).length;
      }
      const destino = antes + suyos;
      if (destino > r.cursor){
        r.cursor = destino;
        let acumulado = 0, n = 1;
        for (let j = 0; j < r.tandasN.length && acumulado < destino; j++){
          acumulado += r.tandasN[j];
          n = j + 2;
        }
        r.tanda = n;
      }
      if (r.cursor >= r.orden.length) r.terminada = Date.now();
    }
    r.sim = null;
    guardar();
    return { pct: pct, aprobado: aprobado, flojos: flojos };
  }
```

Añadir al `return`:

```js
    bloqueActual: bloqueActual, bloqueDisponible: bloqueDisponible,
    estadoBloque: estadoBloque, examenDeBloque: examenDeBloque,
    minutosDeBloque: minutosDeBloque, cerrarExamenDeBloque: cerrarExamenDeBloque,
```

- [ ] **Step 4: Ejecutar y verificar que pasa**

Run: `node --check assets/js/ruta.js && node herramientas_validar_ruta.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add assets/js/ruta.js herramientas_validar_ruta.js
git commit -m "Ruta: puertas entre bloques y examen que las abre"
```

---

### Task 3: Qué se puede entrenar

**Files:**
- Modify: `assets/js/ruta.js`
- Modify: `herramientas_validar_ruta.js`

**Interfaces:**
- Consumes: `Ruta.porBloques()`, `Ruta.bloqueActual()`, `Motor.bancoActivo()`.
- Produces:
  - `Ruta.esTransversal(esp)` → `bool`
  - `Ruta.bloquesAbiertos()` → `string[]` — cerrados más el actual
  - `Ruta.preguntasDisponibles()` → `Pregunta[]`
  - `Ruta.espDisponible(esp)` → `bool`

- [ ] **Step 1: Escribir las comprobaciones**

Insertar antes de `fin();`:

```js
/* ============================================================
   17. Que se puede entrenar
   ============================================================ */
titulo('Pool disponible');

reiniciar();
D.ajustes.porBloques = true;
Ruta.crear(5, ['Pediatría', 'Cirugía']);

/* Las transversales nunca se cierran: no estan en ningun bloque del
   temario y atraviesan todos. Ponerlas tras una puerta dejaria al
   estudiante sin poder estudiarlas nunca. */
igual(Ruta.esTransversal('Farmacología'), true, 'Farmacologia es transversal');
igual(Ruta.esTransversal('Ciencias Básicas'), true, 'Ciencias Basicas es transversal');
igual(Ruta.esTransversal('Epidemiología'), true, 'Epidemiologia es transversal');
igual(Ruta.esTransversal('Pediatría'), false, 'Pediatria NO es transversal, es un bloque');
igual(Ruta.esTransversal('Medicina Interna'), false, 'Medicina Interna tampoco');

igual(Ruta.espDisponible('Pediatría'), true, 'el bloque actual esta disponible');
igual(Ruta.espDisponible('Cirugía'), false, 'el bloque siguiente no');
igual(Ruta.espDisponible('Medicina Interna'), false, 'un bloque no elegido tampoco');
igual(Ruta.espDisponible('Farmacología'), true, 'las transversales siempre');

const pool = Ruta.preguntasDisponibles();
ok(pool.length > 0, 'hay preguntas disponibles');
igual(pool.filter(function (q) { return q.esp === 'Cirugía'; }).length, 0,
      'ninguna de un bloque con llave');
ok(pool.filter(function (q) { return q.esp === 'Pediatría'; }).length > 0,
   'si las del bloque actual');
ok(pool.filter(function (q) { return q.esp === 'Farmacología'; }).length > 0,
   'y las transversales');
ok(pool.length < Motor.bancoActivo().length, 'el pool es menor que el banco entero');

/* Al cerrar Pediatria entran las de Cirugia. */
Ruta.temasDeBloque('Pediatría').forEach(estudiarTema);
Ruta.invalidar();
const exPed = Ruta.examenDeBloque('Pediatría');
Ruta.cerrarExamenDeBloque('Pediatría', {
  respuestas: exPed.map(function (q) { return { qid:q.id, ok:true }; })
});
const pool2 = Ruta.preguntasDisponibles();
ok(pool2.filter(function (q) { return q.esp === 'Cirugía'; }).length > 0,
   'cerrado Pediatria, entran las de Cirugia');
ok(pool2.filter(function (q) { return q.esp === 'Pediatría'; }).length > 0,
   'y las de Pediatria siguen');
ok(pool2.length > pool.length, 'el pool crece al avanzar');

/* Con la norma apagada, el banco entero. */
D.ajustes.porBloques = false;
igual(Ruta.preguntasDisponibles().length, Motor.bancoActivo().length,
      'sin norma el pool es el banco activo entero');
igual(Ruta.espDisponible('Medicina Interna'), true, 'y todo esta disponible');

/* Sin recorrido tampoco se limita nada. */
reiniciar();
igual(Ruta.preguntasDisponibles().length, Motor.bancoActivo().length,
      'sin recorrido el pool es el banco entero');
```

- [ ] **Step 2: Ejecutarlo para verificar que falla**

Run: `node herramientas_validar_ruta.js`
Expected: FAIL con `TypeError: Ruta.esTransversal is not a function`.

- [ ] **Step 3: Implementar en `assets/js/ruta.js`**

Insertar antes del `return`:

```js
  /* ---------- que se puede entrenar ---------- */
  /* El filtro va por la especialidad de la pregunta y no recorriendo los
     temas: recorrer los temas dejaria fuera las preguntas de un bloque
     abierto que ninguna clave del temario llega a enganchar, y esas
     existen. Los cuatro bloques del temario y los valores de `esp`
     coinciden exactos, asi que es comparacion directa. */
  function nombresDeBloque(){
    return bloques().map(function (b) { return b.bloque; });
  }

  /* Farmacologia, Ciencias Basicas, Epidemiologia, Salud Publica,
     Bioetica, Emergencias, Psiquiatria y Medicina Familiar no estan en
     ningun bloque del temario y atraviesan todos. Nunca se cierran:
     ponerlas tras una puerta dejaria al estudiante sin poder
     estudiarlas nunca. */
  function esTransversal(esp){
    return nombresDeBloque().indexOf(esp) < 0;
  }

  function bloquesAbiertos(){
    const r = activa();
    if (!r) return nombresDeBloque();
    const cerrados = Object.keys(r.bloquesCerrados || {});
    const act = bloqueActual();
    return act ? cerrados.concat([act]) : cerrados;
  }

  function espDisponible(esp){
    if (!porBloques()) return true;
    if (esTransversal(esp)) return true;
    return bloquesAbiertos().indexOf(esp) >= 0;
  }

  function preguntasDisponibles(){
    const banco = Motor.bancoActivo();
    if (!porBloques()) return banco;
    return banco.filter(function (q) { return espDisponible(q.esp); });
  }
```

Añadir al `return`:

```js
    esTransversal: esTransversal, bloquesAbiertos: bloquesAbiertos,
    espDisponible: espDisponible, preguntasDisponibles: preguntasDisponibles,
```

- [ ] **Step 4: Ejecutar y verificar que pasa**

Run: `node --check assets/js/ruta.js && node herramientas_validar_ruta.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add assets/js/ruta.js herramientas_validar_ruta.js
git commit -m "Ruta: el pool de lo que se puede entrenar, con las transversales siempre abiertas"
```

---

### Task 4: El selector con orden y cifras

**Files:**
- Modify: `assets/js/vistas/ruta.js`
- Modify: `assets/css/app.css`

**Interfaces:**
- Consumes: `Ruta.bloquesDisponibles()`, `Ruta._tandas(total, tam)`, `Ruta.crear(tam, elegidos)`.
- Produces: `VistaRuta.selectorBloques(elegidos, tam, alCambiar)` → `string` con el HTML del selector, reutilizable desde la pantalla de Arturo y desde el menú de bienvenida de Inicio.

- [ ] **Step 1: Sustituir el selector de la pantalla de arranque**

En `assets/js/vistas/ruta.js`, reemplazar la tarjeta de bloques dentro de `arranque()` — el bloque que empieza por `'<span class="eyebrow">Qué quieres estudiar</span>'` — por una llamada al selector compartido, y definir el selector como función del módulo:

```js
  /* El selector se usa en dos sitios: esta pantalla y el menu de
     bienvenida de Inicio. Devuelve HTML; quien lo pinta cablea los
     botones con engancharSelector. */
  function selectorBloques(elegidos, tam){
    const bls = Ruta.bloquesDisponibles();
    const puestos = elegidos.filter(function (n) {
      return bls.some(function (b) { return b.bloque === n; });
    });

    const filas = bls.map(function (b) {
      const i = puestos.indexOf(b.bloque);
      const on = i >= 0;
      const tandas = Ruta._tandas(b.n, tam).length;
      return '<div class="bl-fila' + (on ? ' bl-fila--on' : '') + '">' +
        '<button class="bl-marca" data-bl="' + esc(b.bloque) + '">' +
          (on ? (i + 1) : '') + '</button>' +
        '<span style="font-size:18px">' + b.em + '</span>' +
        '<span class="grow"><b>' + esc(b.bloque) + '</b>' +
          '<small class="muted" style="display:block;font-size:12px">' +
            b.n + ' temas · ' + tandas + ' tanda' + (tandas === 1 ? '' : 's') + '</small></span>' +
        (on ? '<span class="bl-flechas">' +
          '<button class="bl-mover" data-sube="' + esc(b.bloque) + '"' +
            (i === 0 ? ' disabled' : '') + '>↑</button>' +
          '<button class="bl-mover" data-baja="' + esc(b.bloque) + '"' +
            (i === puestos.length - 1 ? ' disabled' : '') + '>↓</button>' +
        '</span>' : '') +
      '</div>';
    }).join('');

    const temas = bls.filter(function (b) { return puestos.indexOf(b.bloque) >= 0; })
                     .reduce(function (a, b) { return a + b.n; }, 0);
    const tandasTotal = temas ? Ruta._tandas(temas, tam).length : 0;

    return '<div class="bl-lista">' + filas + '</div>' +
      '<p class="muted" style="margin-top:12px;font-size:13px">' +
        (temas
          ? 'Tu recorrido: <b>' + temas + ' temas</b> en <b>' + tandasTotal + ' tandas</b>, en ese orden.'
          : 'Marca al menos un bloque.') + '</p>';
  }

  /* Cablea las casillas y las flechas. `elegidos` se modifica en sitio y
     `repintar` vuelve a dibujar. */
  function engancharSelector(elegidos, repintar){
    UI.$$('[data-bl]').forEach(function (b) {
      b.onclick = function () {
        const n = b.dataset.bl;
        const i = elegidos.indexOf(n);
        if (i >= 0) elegidos.splice(i, 1); else elegidos.push(n);
        repintar();
      };
    });
    UI.$$('[data-sube]').forEach(function (b) {
      b.onclick = function () {
        const i = elegidos.indexOf(b.dataset.sube);
        if (i > 0){
          const t = elegidos[i - 1]; elegidos[i - 1] = elegidos[i]; elegidos[i] = t;
          repintar();
        }
      };
    });
    UI.$$('[data-baja]').forEach(function (b) {
      b.onclick = function () {
        const i = elegidos.indexOf(b.dataset.baja);
        if (i >= 0 && i < elegidos.length - 1){
          const t = elegidos[i + 1]; elegidos[i + 1] = elegidos[i]; elegidos[i] = t;
          repintar();
        }
      };
    });
  }
```

En `arranque()`, la tarjeta pasa a ser:

```js
      '<div class="card" style="margin-bottom:18px">' +
        '<span class="eyebrow">Qué quieres estudiar, y en qué orden</span>' +
        '<p class="muted" style="margin:8px 0 14px;font-size:13.5px">Marca los bloques y ordénalos con las flechas. Cerrarás uno antes de pasar al siguiente. Fíjate en los números: Medicina Interna son 41 temas y Cirugía 19, así que el orden cambia mucho cuándo llegas a la primera puerta.</p>' +
        selectorBloques(elegidos, tamActual()) +
      '</div>' +
```

Y sustituir el manejador viejo `UI.$$('[data-bloque]')` por:

```js
    engancharSelector(elegidos, arranque);
```

Añadir arriba del módulo, junto a `let elegidos = null;`:

```js
  /* El tamano de tanda elegido, para que el selector pueda decir cuantas
     tandas sale cada bloque antes de crear nada. */
  let tamElegido = 5;
  function tamActual(){ return tamElegido; }
```

y en los manejadores de `[data-tam]` y del campo a medida, poner `tamElegido` antes de llamar a `empezar`:

```js
    UI.$$('[data-tam]').forEach(function (b) {
      b.onclick = function () { tamElegido = +b.dataset.tam; empezar(tamElegido); };
    });
    document.getElementById('rutaMedida').onclick = function () {
      tamElegido = +document.getElementById('rutaTam').value;
      empezar(tamElegido);
    };
```

Exportar el selector: en el `return` del módulo, añadir `selectorBloques: selectorBloques, engancharSelector: engancharSelector`.

- [ ] **Step 2: El estilo**

Al final de `assets/css/app.css`:

```css
/* ---------- selector de bloques con orden ---------- */
.bl-lista{ display:flex; flex-direction:column; gap:8px }
.bl-fila{
  display:flex; align-items:center; gap:10px;
  padding:11px 13px; border:1px solid var(--linea); border-radius:var(--r-sm);
  background:var(--papel);
}
.bl-fila--on{ border-color:var(--sangria); background:var(--sangria-luz) }
.bl-marca{
  flex:none; width:26px; height:26px; border-radius:8px;
  border:1.5px solid var(--linea); background:var(--papel); cursor:pointer;
  font:inherit; font-size:13px; font-weight:700; color:var(--tinta-40);
}
.bl-fila--on .bl-marca{
  background:var(--sangria); border-color:var(--sangria); color:#fff;
}
.bl-flechas{ flex:none; display:flex; flex-direction:column; gap:2px }
.bl-mover{
  width:24px; height:18px; line-height:1; padding:0;
  border:1px solid var(--linea); border-radius:6px;
  background:var(--papel); cursor:pointer; font-size:11px; color:inherit;
}
.bl-mover:disabled{ opacity:.3; cursor:default }
.bl-mover:hover:not(:disabled){ border-color:var(--sangria) }
```

- [ ] **Step 3: Comprobarlo en el navegador**

```bash
python -m http.server 8777
```

Con una cuenta nueva, ir a Arturo y comprobar:

1. Las cuatro filas dicen sus temas y sus tandas: Medicina Interna 41 temas · 9 tandas, Cirugía 19 · 4.
2. Al marcar un bloque aparece su número de orden; al marcar otro, el 2.
3. Las flechas suben y bajan, y están deshabilitadas en los extremos.
4. El pie dice el total de temas y de tandas y cambia al marcar y reordenar.
5. Al cambiar el tamaño de tanda, las cifras por bloque se recalculan.
6. Consola sin errores.

- [ ] **Step 4: Commit**

```bash
git add assets/js/vistas/ruta.js assets/css/app.css
git commit -m "Selector de bloques con orden, temas y tandas a la vista"
```

---

### Task 5: La pantalla del recorrido con la tira de bloques

**Files:**
- Modify: `assets/js/vistas/ruta.js`

**Interfaces:**
- Consumes: `Ruta.porBloques()`, `Ruta.estadoBloque(n)`, `Ruta.bloqueActual()`, `Ruta.examenDeBloque(n)`, `Ruta.minutosDeBloque(n)`, `Ruta.cerrarExamenDeBloque(n, res)` (Tasks 1-3).
- Produces: ningún símbolo nuevo.

- [ ] **Step 1: Añadir la tira de bloques y el examen de bloque**

En `assets/js/vistas/ruta.js`, dentro de `recorrido()`, añadir antes de `V().innerHTML`:

```js
    /* La tira de bloques: donde estas, que cerraste y que falta. Solo
       tiene sentido en modo bloques. */
    const tiraBloques = Ruta.porBloques()
      ? '<div class="card" style="margin-bottom:18px">' +
        '<span class="eyebrow">Tu recorrido por bloques</span>' +
        '<div class="bl-tira">' +
          r.bloques.map(function (n) {
            const e = Ruta.estadoBloque(n);
            const cls = e.cerrado ? ' bl-paso--ok' : e.disponible ? ' bl-paso--act' : '';
            return '<div class="bl-paso' + cls + '">' +
              '<b>' + esc(n) + '</b>' +
              '<small>' + (e.cerrado ? '✓ cerrado · ' + e.pct + '%'
                         : e.disponible ? e.hechos + ' de ' + e.total + ' temas'
                         : '🔒 ' + e.total + ' temas') + '</small>' +
            '</div>';
          }).join('') +
        '</div></div>'
      : '';

    /* Con todos los temas del bloque hechos, el examen de tanda deja
       paso al examen del bloque: es el que abre la puerta. */
    const bAct = Ruta.porBloques() ? Ruta.bloqueActual() : null;
    const eAct = bAct ? Ruta.estadoBloque(bAct) : null;
    const tocaExamenBloque = !!(eAct && eAct.completo && !eAct.cerrado);

    const bloqueExamenBloque = tocaExamenBloque
      ? '<div class="card card--sangria" style="margin-bottom:18px">' +
        '<span class="eyebrow" style="color:rgba(255,255,255,.5)">Examen del bloque</span>' +
        '<h3 style="font-size:23px;margin:8px 0 10px">' + esc(bAct) + '</h3>' +
        '<p style="color:rgba(255,255,255,.78);font-size:14.5px">Tienes los ' + eAct.total +
        ' temas hechos. Este examen sale de todo el bloque, no solo de la última tanda, y hace falta un 60% para abrir el siguiente. Si no llega, puedes repetirlo.</p>' +
        '<p style="color:rgba(255,255,255,.6);font-size:13px;margin-top:8px">' +
          Ruta.examenDeBloque(bAct).length + ' preguntas · ' + Ruta.minutosDeBloque(bAct) + ' minutos</p>' +
        '<button class="btn btn--claro" style="margin-top:14px" id="rutaSimBloque">Empezar el examen del bloque</button>' +
      '</div>'
      : '';
```

Insertarlos en el HTML: `tiraBloques` justo después de `Arturo.barra()`, y `bloqueExamenBloque` justo antes de la tarjeta del examen de tanda. La tarjeta del examen de tanda pasa a ocultarse cuando toca el del bloque:

Envolver la tarjeta que ya existe. Localizar su apertura, que hoy es:

```js
      '<div class="card' + (ta.completa ? ' card--sangria' : '') + '" style="margin-bottom:18px">' +
        '<span class="eyebrow"' + (ta.completa ? ' style="color:rgba(255,255,255,.5)"' : '') + '>Examen de la tanda</span>' +
```

y anteponerle `(tocaExamenBloque ? '' :`. Su cierre de hoy es la línea que
sigue al párrafo de "Se abre cuando los N temas estén cerrados":

```js
      '</div>' +
```

que pasa a ser:

```js
      '</div>') +
```

De modo que la tarjeta entera queda dentro del ternario y desaparece cuando
toca el examen del bloque. No se cambia ni una línea de su contenido.

Y cablear el botón junto a los demás manejadores:

```js
    const sb = document.getElementById('rutaSimBloque');
    if (sb) sb.onclick = function () { empezarExamenDeBloque(bAct); };
```

- [ ] **Step 2: Escribir la función del examen de bloque**

Junto a `empezarSimulacro`, añadir:

```js
  /* El examen que abre la puerta al bloque siguiente. */
  function empezarExamenDeBloque(nombre){
    const preguntas = Ruta.examenDeBloque(nombre);
    if (!preguntas.length) return UI.tostada('Este bloque no tiene preguntas para examinarte', 'mal');
    const min = Ruta.minutosDeBloque(nombre);

    UI.modal('<p class="eyebrow">Examen del bloque</p>' +
      '<h3 style="font-size:23px;margin:4px 0 10px">' + esc(nombre) + '</h3>' +
      '<p class="muted">' + preguntas.length + ' preguntas · ' + min + ' minutos, de todo el bloque. Con 60% o más se cierra y se abre el siguiente. Si no llega, lo repites cuando quieras, y los temas que salgan flojos volverán mezclados.</p>' +
      '<div class="row" style="margin-top:20px;gap:9px">' +
      '<button class="btn btn--fantasma grow" onclick="this.closest(\'.velo\').remove()">Todavía no</button>' +
      '<button class="btn grow" id="rutaEmpezarBloque">Empezar</button></div>');

    document.getElementById('rutaEmpezarBloque').onclick = function () {
      document.querySelector('.velo').remove();
      Sesion.iniciar({
        modo: 'examen',
        titulo: 'Examen de ' + nombre,
        preguntas: preguntas,
        tiempoTotal: min * 60000,
        etiqueta: 'Bloque · ' + nombre,
        alTerminar: function (res) {
          const r = Ruta.cerrarExamenDeBloque(nombre, res);
          UI.tostada(r.aprobado
            ? '¡Bloque cerrado con ' + r.pct + '%! Se abre el siguiente.'
            : r.pct + '%: hace falta 60% para abrir el siguiente. Puedes repetirlo.',
            r.aprobado ? 'ok' : 'mal');
        }
      });
    };
  }
```

- [ ] **Step 3: El estilo de la tira**

Al final de `assets/css/app.css`:

```css
/* ---------- tira de bloques del recorrido ---------- */
.bl-tira{ display:flex; flex-wrap:wrap; gap:8px; margin-top:12px }
.bl-paso{
  flex:1 1 150px; padding:10px 12px;
  border:1px solid var(--linea); border-radius:var(--r-sm);
  background:var(--papel);
}
.bl-paso b{ display:block; font-size:13.5px }
.bl-paso small{ font-size:11.5px; color:var(--tinta-40) }
.bl-paso--ok{ border-color:var(--quirofano); background:var(--quirofano-luz) }
.bl-paso--act{ border-color:var(--sangria); background:var(--sangria-luz) }
```

- [ ] **Step 4: Comprobarlo en el navegador**

Con una cuenta nueva y la norma activada, crear un recorrido con Pediatría y Cirugía, tandas de 5:

1. La tira muestra Pediatría en curso y Cirugía con candado.
2. Marcando los 20 temas de Pediatría como hechos (con la consola del navegador, tocando solo `d.apuntes`, `d.srs` y `d.srsTarjetas`), la tarjeta del examen de tanda desaparece y sale la del examen del bloque.
3. Hacer el examen fallándolo: avisa del porcentaje y el bloque sigue con Cirugía bloqueada.
4. Repetirlo acertando: avisa de que se cerró, la tira pone Pediatría en verde con su nota y Cirugía pasa a estar en curso.
5. Consola sin errores.

- [ ] **Step 5: Commit**

```bash
git add assets/js/vistas/ruta.js assets/css/app.css
git commit -m "La pantalla del recorrido muestra los bloques y su examen de puerta"
```

---

### Task 6: Inicio, Entrenar y los dos simulacros

**Files:**
- Modify: `assets/js/vistas/paneles.js`

**Interfaces:**
- Consumes: `Ruta.porBloques()`, `Ruta.espDisponible(esp)`, `Ruta.preguntasDisponibles()`, `Ruta.bloqueActual()`, `VistaRuta.selectorBloques`, `VistaRuta.engancharSelector`, `Ruta.crear`.
- Produces: ningún símbolo nuevo.

- [ ] **Step 1: El menú de bienvenida en Inicio**

En `assets/js/vistas/paneles.js`, dentro de `inicio()`, después de que el HTML esté puesto y junto a los demás manejadores, añadir:

```js
    /* Lo primero que ve un estudiante nuevo: organizar su estudio. Solo
       sale si no hay recorrido y no lo ha despachado antes. */
    if (!Ruta.activa() && !d.ajustes.bienvenidaVista && window.VistaRuta){
      setTimeout(bienvenida, 350);
    }
```

Y definir la función junto a `inicio`:

```js
  /* El menu central de la primera vez. Usa el mismo selector que la
     pantalla de Arturo para no tener dos sitios que mantener. */
  function bienvenida(){
    const elegidos = Ruta.bloquesDisponibles().map(function (b) { return b.bloque; });
    let tam = 5;

    function pintar(){
      UI.modal(
        '<p class="eyebrow">Antes de empezar</p>' +
        '<h3 style="font-size:24px;margin:4px 0 10px">Vamos a organizar tu estudio</h3>' +
        '<p class="muted" style="margin-bottom:16px">Elige los bloques que quieres preparar y en qué orden. Irás cerrándolos de uno en uno: no pasas al siguiente hasta terminar el anterior.</p>' +
        VistaRuta.selectorBloques(elegidos, tam) +
        '<div class="row" style="gap:9px;margin:16px 0;align-items:center">' +
          '<span class="muted" style="font-size:13px">Temas por tanda:</span>' +
          [3, 5, 8, 10].map(function (n) {
            return '<button class="chip' + (tam === n ? ' on' : '') + '" data-bt="' + n + '">' + n + '</button>';
          }).join('') +
        '</div>' +
        '<div class="row" style="margin-top:18px;gap:9px">' +
          '<button class="btn btn--fantasma grow" id="bvDespues">Lo haré después</button>' +
          '<button class="btn grow" id="bvCrear">Crear mi recorrido</button>' +
        '</div>');

      VistaRuta.engancharSelector(elegidos, pintar);
      UI.$$('[data-bt]').forEach(function (b) {
        b.onclick = function () { tam = +b.dataset.bt; pintar(); };
      });
      document.getElementById('bvDespues').onclick = function () {
        const dd = Almacen.datos();
        dd.ajustes.bienvenidaVista = true;
        Almacen.guardar();
        document.querySelector('.velo').remove();
      };
      document.getElementById('bvCrear').onclick = function () {
        if (!elegidos.length) return UI.tostada('Marca al menos un bloque', 'mal');
        const dd = Almacen.datos();
        dd.ajustes.bienvenidaVista = true;
        Almacen.guardar();
        Ruta.crear(tam, elegidos);
        document.querySelector('.velo').remove();
        UI.tostada('Recorrido creado. Arturo te espera.', 'ok');
        App.ir('ruta');
      };
    }

    pintar();
  }
```

Verificar: `node --check assets/js/vistas/paneles.js`

- [ ] **Step 2: Entrenar limitado al progreso**

En `entrenar()`, sustituir la línea que construye `esps`:

```js
    const esps = Motor.especialidades();
```

por:

```js
    /* Con la norma de bloques activada, solo se entrena lo ya cerrado,
       el bloque en curso y las transversales. Los demas salen con
       candado y dicen que falta. */
    const esps = Motor.especialidades();
    const bloqueado = function (n) { return window.Ruta && !Ruta.espDisponible(n); };
    const faltaCerrar = (window.Ruta && Ruta.porBloques()) ? Ruta.bloqueActual() : null;
```

Sustituir el `map` de los chips de especialidad por:

```js
          esps.map(e => bloqueado(e.nombre)
            ? '<button class="chip chip--llave" data-llave="' + esc(e.nombre) + '">🔒 ' + esc(e.nombre) + '</button>'
            : '<button class="chip' + (filtro.esp === e.nombre ? ' on' : '') +
              '" data-f-esp="' + esc(e.nombre) + '">' + esc(e.nombre) + ' · ' + e.total + '</button>').join('') +
```

Y junto a los manejadores, añadir:

```js
    UI.$$('[data-llave]').forEach(b => b.onclick = () => UI.tostada(
      faltaCerrar
        ? 'Cierra ' + faltaCerrar + ' para abrir este bloque. Puedes quitar la norma en Ajustes.'
        : 'Este bloque todavía no está abierto.', 'mal'));
```

Y en `lanzarEntrenamiento`, limitar el pool. Sustituir su primera línea por:

```js
  function lanzarEntrenamiento(op){
    /* Con la norma activada el entrenamiento sale solo de lo abierto. */
    if (window.Ruta && Ruta.porBloques() && !op.esp){
      const pool = Ruta.preguntasDisponibles();
      const ids = {};
      pool.forEach(function (q) { ids[q.id] = 1; });
      const sel = Motor.seleccionar(op).filter(function (q) { return ids[q.id]; });
      if (sel.length) return Sesion.iniciar({ modo: op.modo || 'aprender',
        titulo: op.titulo || 'Entrenamiento', preguntas: sel });
    }
```

(dejando el resto del cuerpo tal como está).

Verificar: `node --check assets/js/vistas/paneles.js`

- [ ] **Step 3: Los dos botones de simulacro**

En `simulacro()`, sustituir la tarjeta "Elige el formato" para que tenga las dos familias. Reemplazar el bloque de los tres `formato(...)` por:

```js
          '<span class="eyebrow" style="display:block;margin-bottom:8px">Simulacro ENURM — de todo el temario</span>' +
          formato('Simulacro corto', '25 preguntas · 30 minutos', 25, 30) +
          formato('Medio simulacro', '50 preguntas · 60 minutos', 50, 60) +
          formato('Simulacro completo', Math.min(100, total) + ' preguntas · 120 minutos', 100, 120) +
          '<p class="muted" style="margin:12px 0 0;font-size:12.5px">Siempre del temario completo, hayas estudiado o no. Es el único número que responde a "¿estaría listo hoy?".</p>' +
          ((window.Ruta && Ruta.porBloques())
            ? '<div style="border-top:1px solid var(--linea);margin-top:16px;padding-top:16px">' +
              '<span class="eyebrow" style="display:block;margin-bottom:8px">Examen de lo que llevas</span>' +
              '<button class="accion-clinica" id="simMio"><span class="em">📗</span>' +
              '<span class="grow"><b>Examen de mi bloque</b><small>Solo de lo que ya estudiaste · 30 preguntas</small></span>→</button>' +
              '</div>'
            : '') +
```

Y cablear el botón nuevo junto a los demás:

```js
    const sm = document.getElementById('simMio');
    if (sm) sm.onclick = () => {
      const pool = Ruta.preguntasDisponibles().filter(q => !!q.exp);
      if (pool.length < 10) return UI.tostada('Todavía no has abierto suficientes preguntas', 'mal');
      const n = Math.min(30, pool.length);
      const preguntas = pool.sort(() => Math.random() - 0.5).slice(0, n);
      Sesion.iniciar({ modo:'examen', titulo:'Examen de lo que llevas',
        preguntas, tiempoTotal: Math.round(n * 1.2) * 60000,
        etiqueta: 'Mi bloque · ' + n + ' preguntas' });
    };
```

En el resultado del simulacro completo, añadir la línea de cobertura. En `assets/js/vistas/sesion.js` ya se pinta `nota`; aquí basta con el aviso de la propia pantalla de Simulacro, encima del historial:

```js
      ((window.Ruta && Ruta.activa())
        ? '<p class="muted" style="margin:-6px 0 18px;font-size:13px">Llevas el ' +
          Ruta.avance().pct + '% del temario recorrido. El simulacro ENURM te pregunta del 100%, que es lo que hará el examen real.</p>'
        : '') +
```

Verificar: `node --check assets/js/vistas/paneles.js`

- [ ] **Step 4: El conmutador en Ajustes**

Junto a los otros `conmutador(...)` de `ajustes()`:

```js
        conmutador('porBloques', 'Estudiar por bloques en orden',
          'Eliges los bloques y su orden, y no pasas al siguiente hasta cerrar el anterior con sus temas hechos y su examen aprobado. Al apagarlo desaparecen los candados y entras a lo que quieras; tu avance se sigue registrando igual.',
          a.porBloques !== false) +
```

El manejador `[data-ajuste]` ya existente lo cubre, porque la clave nace en `true`.

Y el estilo del chip con candado, al final de `assets/css/app.css`:

```css
.chip--llave{ opacity:.55; border-style:dashed; cursor:pointer }
```

- [ ] **Step 5: Comprobarlo en el navegador**

Con una cuenta nueva:

1. Al entrar por primera vez sale el menú de bienvenida con los cuatro bloques y sus cifras.
2. "Lo haré después" lo cierra y **no vuelve a salir** al recargar.
3. Con una cuenta nueva distinta, crear el recorrido desde el menú: lleva a la pantalla de Arturo con el orden elegido.
4. En Entrenar, los bloques no abiertos salen con 🔒 y al tocarlos dicen qué cerrar.
5. En Simulacro hay dos familias, y el aviso del porcentaje recorrido.
6. Apagar la norma en Ajustes: desaparecen los candados de Entrenar y el botón "Examen de mi bloque".
7. Consola sin errores en todos los pasos.

- [ ] **Step 6: Commit**

```bash
git add assets/js/vistas/paneles.js assets/css/app.css
git commit -m "Inicio, Entrenar y los simulacros atados al recorrido por bloques"
```

---

## Notas para quien ejecute esto

- **El simulacro completo no se filtra nunca.** Si en algún momento te ves añadiendo `preguntasDisponibles()` a los botones de 25/50/100, para: eso convierte el índice de preparación en un número que miente.
- **Las transversales nunca se bloquean.** Farmacología, Ciencias Básicas, Epidemiología, Salud Pública, Bioética, Emergencias, Psiquiatría y Medicina Familiar no están en ningún bloque del temario. Si acaban detrás de un candado, el estudiante no puede estudiarlas nunca.
- **No se puede reordenar un recorrido en marcha.** Es deliberado: mover bloques con el cursor a medias descuadra las tandas cerradas. Rehacer el recorrido es la salida.
- **Un recorrido sin `modo` es `'mezclado'`.** No escribas migraciones: los recorridos viejos tienen que seguir funcionando exactamente igual.
- **No toques `datos/`.**
