# La Ruta + Arturo — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Añadir a ENURMIA un recorrido guiado que consume el temario en tandas (estudiar N temas → simulacro de esos temas → siguiente tanda, hasta agotar los 101), con un profesor llamado Arturo que encadena los pasos y habla en cada pantalla donde termina uno.

**Architecture:** Dos módulos de núcleo sin DOM (`ruta.js` = el recorrido, `arturo.js` = la voz) más una vista (`vistas/ruta.js`). El principio que lo ordena todo: **la Ruta no guarda el progreso de los tres pasos, lo deduce** de `d.apuntes`, `d.srs` y `d.srsTarjetas`. Por eso no hay callbacks que cablear y el trabajo previo del estudiante cuenta retroactivamente.

**Tech Stack:** HTML/CSS/JavaScript ES5-ish sin build, sin framework, sin bundler. Módulos IIFE sobre `window`. Persistencia en `localStorage` vía `Almacen`, con espejo en Supabase que sube el objeto `datos` entero. Node solo para validar.

**Spec:** `docs/superpowers/specs/2026-09-11-ruta-temario-design.md`

## Global Constraints

- **Español en todo**: nombres de funciones, variables, comentarios y texto de interfaz. Los comentarios del código fuente van **sin tildes** (convención del proyecto); el texto que ve el estudiante va **con tildes**.
- **Sin dependencias nuevas.** Nada de npm, nada de CDN. Node solo ejecuta el validador.
- **Cadenas en comillas simples.** Cuidado con los apóstrofos dentro del texto (`King's College` rompió un lote): evitarlos o escaparlos.
- **Nada de `async`/`await`, template literals ni `class`** en los archivos de `assets/js/`: el resto del proyecto es ES5 con `const`/`let` y hay que parecerse a lo que ya está.
- **Archivos grandes con `Write`, no con heredoc de Bash.** Está documentado que falla con ENAMETOOLONG.
- **Verificación de cada tarea:** `node --check <archivo>` sobre lo tocado y `node herramientas_validar_ruta.js`.
- **Umbrales, textuales del spec:** meta de preguntas `min(10, disponibles)`, meta de tarjetas `min(12, disponibles)`, corte de paso de preguntas **70%**, corte de tema flojo **60%**, mínimo de preguntas para rescatar un tema flojo **3**, `tam` acotado a **2..20**, simulacro `n = clamp(temasDeLaTanda * 6, 20, 100)` con **70%** de la tanda y **30%** de repaso.
- **Rama:** `ruta-temario`, ya creada. Un commit por tarea.

## Estructura de ficheros

| Fichero | Responsabilidad |
|---|---|
| `assets/js/ruta.js` | **Nuevo.** El recorrido: orden, tandas, los tres pasos, el simulacro de cierre, la reinyección. Sin DOM, cargable en Node. |
| `assets/js/arturo.js` | **Nuevo.** La voz: plantillas de texto, el hilo del tema, `paso()`, `barra()`, `seguir()`. Sin DOM salvo `barra()`, que devuelve una cadena. |
| `assets/js/vistas/ruta.js` | **Nuevo.** La pantalla de Arturo: arranque, tanda en curso, simulacro, historial, cierre. |
| `herramientas_validar_ruta.js` | **Nuevo.** Arnés de validación en Node, a imagen de los `herramientas_validar_*.py`. |
| `assets/js/motor.js` | Modificado: `Tarjetas.sesion` acepta `ids`, y `Motor.proximaAccion` consulta la Ruta. |
| `assets/js/almacen.js` | Modificado: `ruta: null` en `datosNuevos`. |
| `assets/js/app.js` | Modificado: pantalla `ruta` en `PANTALLAS` y en `MENUS.enurm`. |
| `assets/js/vistas/paneles.js` | Modificado: Inicio muestra a Arturo; se retira el plan de 7 días. |
| `assets/js/vistas/temario.js` | Modificado: usa `Ruta.preguntasDe` en vez de su propio índice duplicado. |
| `assets/js/vistas/apuntes.js` | Modificado: `Arturo.barra()` al pie del apunte. |
| `assets/js/vistas/sesion.js` | Modificado: `Arturo.barra()` en la pantalla de resultado. |
| `assets/js/vistas/flashcards.js` | Modificado: `Arturo.barra()` al fin de sesión. |
| `assets/css/app.css` | Modificado: el sello y la tira de Arturo. |
| `app.html` | Modificado: tres `<script>` nuevos. |

**Desvío consciente del spec:** el spec decía que `vistas/temario.js` exportara `preguntasDe` para que la Ruta lo reusara. Se invierte: **el índice tema↔banco vive en `ruta.js`** y es `temario.js` quien lo consume. Motivo: `vistas/temario.js` hace `const esc = UI.esc;` en el cuerpo del módulo, así que no se puede cargar en Node sin DOM, y el validador no podría tocar nada. La duplicación se elimina igual, pero en la dirección que deja el núcleo testeable.

## Orden de carga en `app.html`

`ruta.js` y `arturo.js` van en el bloque **núcleo**, después de `motor.js` y **antes** de las vistas, porque `vistas/temario.js` pasará a llamar a `Ruta.preguntasDe`. `vistas/ruta.js` va con las demás vistas.

---

### Task 1: Arnés de validación, orden del recorrido y creación de la ruta

**Files:**
- Create: `herramientas_validar_ruta.js`
- Create: `assets/js/ruta.js`

**Interfaces:**
- Consumes: `window.TEMARIO` (de `datos/temario.js`), `Almacen.datos()`, `Almacen.guardar()`, `Almacen.programa()`.
- Produces:
  - `Ruta.crear(tam)` → objeto ruta y lo guarda en `d.ruta`
  - `Ruta.activa()` → objeto ruta o `null`
  - `Ruta.borrar()` → `undefined`
  - `Ruta.temas()` → `[{ t, claves, bloque, em }]`
  - `Ruta.invalidar()` → `undefined`
  - `Ruta._orden()` → `string[]` con los 101 nombres intercalados
  - `Ruta._tandas(total, tam)` → `number[]` cuyo sumatorio es `total`
  - Forma de `d.ruta`: `{ v, creado, tam, vuelta, orden, tandasN, cursor, tanda, repaso, hilo, terminada, historial }`

- [ ] **Step 1: Escribir el arnés con las comprobaciones que deben fallar**

Crear `herramientas_validar_ruta.js`:

```js
/* ============================================================
   VALIDADOR DE LA RUTA Y DE ARTURO
   Se ejecuta con:   node herramientas_validar_ruta.js
   El proyecto no tiene framework de tests: esto sigue la
   convencion de los herramientas_validar_*.py, pero en Node
   porque lo que valida es codigo del navegador.
   ============================================================ */

const fs = require('fs');
const path = require('path');

global.window = global;

/* ---------- cargar un archivo del navegador en este proceso ---------- */
function cargar(rel){
  const src = fs.readFileSync(path.join(__dirname, rel), 'utf8');
  (0, eval)(src);
}

/* Los datos van en el mismo orden que app.html: primero los bancos,
   despues la cuarentena, despues las explicaciones que se fusionan
   encima, y al final temario, tarjetas y apuntes. */
const dir = fs.readdirSync(path.join(__dirname, 'datos')).filter(f => f.endsWith('.js'));
const orden = []
  .concat(dir.filter(f => /^banco-/.test(f)).sort())
  .concat(dir.filter(f => /^revision-/.test(f)).sort())
  .concat(dir.filter(f => /^explicaciones-/.test(f)).sort())
  .concat(['temario.js', 'tarjetas.js'])
  .concat(dir.filter(f => /^apuntes-/.test(f)).sort());
orden.forEach(f => cargar('datos/' + f));

/* ---------- un estudiante de mentira ---------- */
function estudianteVacio(){
  return {
    perfil:{ nombre:'Prueba', creado:Date.now(), cuatrimestre:null },
    respuestas:[], srs:{}, marcadas:[], simulacros:[], casos:{},
    srsTarjetas:{}, tarjetas:{ vistas:0, sesiones:0 }, apuntes:{},
    racha:{ dias:0, ultimo:null },
    desafios:{ mejor:0, mejorMes:0, mes:null, partidas:0 },
    material:[], medallas:[], plan:null, ruta:null,
    ajustes:{ pedirConfianza:true, defenderRespuesta:false, animaciones:true, bancoExtendido:true }
  };
}
let D = estudianteVacio();
function reiniciar(){ D = estudianteVacio(); if (window.Ruta) Ruta.invalidar(); }

window.Almacen = {
  datos: function(){ return D; },
  guardar: function(){},
  programa: function(){ return 'enurm'; },
  cuatrimestre: function(){ return null; }
};

cargar('assets/js/motor.js');
cargar('assets/js/ruta.js');
Motor.aplicarExplicaciones();

/* ---------- comprobaciones ---------- */
let pasadas = 0;
const fallos = [];
function ok(cond, msg){ if (cond) pasadas++; else fallos.push(msg); }
function igual(a, b, msg){
  ok(a === b, msg + '  (esperaba ' + JSON.stringify(b) + ', salio ' + JSON.stringify(a) + ')');
}
function titulo(t){ console.log('\n— ' + t); }
function fin(){
  console.log('\n' + pasadas + ' comprobaciones pasadas.');
  if (fallos.length){
    console.log(fallos.length + ' FALLOS:');
    fallos.forEach(function(f){ console.log('  x ' + f); });
    process.exit(1);
  }
  console.log('Todo en orden.');
}

/* ============================================================
   1. El orden del recorrido
   ============================================================ */
titulo('Orden del recorrido');

const TEMAS = Ruta.temas();
igual(TEMAS.length, 101, 'el temario de ENURMIA tiene 101 temas');

const ORDEN = Ruta._orden();
igual(ORDEN.length, 101, 'el orden lleva los 101 temas');

const unicos = {};
let repes = 0;
ORDEN.forEach(function(n){ if (unicos[n]) repes++; unicos[n] = 1; });
igual(repes, 0, 'ningun tema aparece dos veces en el orden');
igual(Object.keys(unicos).length, 101, 'los 101 temas distintos estan en el orden');

/* En cualquier prefijo el reparto por bloque no se desvia mas de 1 tema
   del proporcional: eso es lo que evita ocho tandas seguidas de Medicina
   Interna al principio. */
const bloqueDe = {};
TEMAS.forEach(function(t){ bloqueDe[t.t] = t.bloque; });
const tamBloque = {};
TEMAS.forEach(function(t){ tamBloque[t.bloque] = (tamBloque[t.bloque] || 0) + 1; });

let desviacionMax = 0;
const acum = {};
ORDEN.forEach(function(n, i){
  const b = bloqueDe[n];
  acum[b] = (acum[b] || 0) + 1;
  const k = i + 1;
  Object.keys(tamBloque).forEach(function(bb){
    const esperado = k * tamBloque[bb] / 101;
    const dif = Math.abs((acum[bb] || 0) - esperado);
    if (dif > desviacionMax) desviacionMax = dif;
  });
});
ok(desviacionMax <= 1, 'el reparto por bloque nunca se desvia mas de 1 tema (max ' + desviacionMax.toFixed(2) + ')');

/* La primera tanda de 5 debe salir 2 de Medicina Interna y uno de cada
   uno de los otros tres bloques. */
const primeros5 = ORDEN.slice(0, 5).map(function(n){ return bloqueDe[n]; });
igual(primeros5.filter(function(b){ return b === 'Medicina Interna'; }).length, 2,
      'la primera tanda de 5 lleva 2 de Medicina Interna');
igual(new Set(primeros5).size, 4, 'la primera tanda de 5 toca los cuatro bloques');

/* ============================================================
   2. Tamanos de tanda equilibrados
   ============================================================ */
titulo('Tamanos de tanda');

[3, 5, 8, 10].forEach(function(tam){
  const t = Ruta._tandas(101, tam);
  const suma = t.reduce(function(a, c){ return a + c; }, 0);
  igual(suma, 101, 'con tam=' + tam + ' las tandas suman 101');
  const min = Math.min.apply(null, t), max = Math.max.apply(null, t);
  ok(max - min <= 1, 'con tam=' + tam + ' ninguna tanda se descuelga (min ' + min + ', max ' + max + ')');
});

igual(Ruta._tandas(101, 5).length, 20, 'con tam=5 salen 20 tandas');

/* La primera tanda tiene que ser del tamano que pidio el estudiante:
   si pide 5 no puede recibir 6. Los sobrantes se colocan donde no
   toquen la primera. */
[2, 3, 5, 8, 10, 20].forEach(function (tam) {
  igual(Ruta._tandas(101, tam)[0], tam, 'con tam=' + tam + ' la primera tanda trae ' + tam + ' temas');
});

/* ============================================================
   3. Crear la ruta, con tam fuera de rango incluido
   ============================================================ */
titulo('Crear la ruta');

reiniciar();
igual(Ruta.activa(), null, 'sin crear nada no hay ruta');

const r1 = Ruta.crear(5);
ok(!!r1, 'crear(5) devuelve una ruta');
igual(r1.tam, 5, 'guarda el tamano pedido');
igual(r1.vuelta, 1, 'empieza en la vuelta 1');
igual(r1.cursor, 0, 'el cursor empieza en 0');
igual(r1.tanda, 1, 'la tanda empieza en 1');
igual(r1.orden.length, 101, 'la ruta guarda los 101 temas');
igual(r1.repaso.length, 0, 'la cola de repaso empieza vacia');
igual(r1.historial.length, 0, 'el historial empieza vacio');
igual(r1.terminada, null, 'la ruta nace sin terminar');
ok(Ruta.activa() === r1, 'activa() devuelve la ruta recien creada');

reiniciar();
const rMin = Ruta.crear(1);
igual(rMin.tam, 2, 'crear(1) se acota a 2');
igual(rMin.tandasN.reduce(function(a, c){ return a + c; }, 0), 101, 'crear(1) sigue cubriendo los 101 temas');

reiniciar();
const rMax = Ruta.crear(50);
igual(rMax.tam, 20, 'crear(50) se acota a 20');
igual(rMax.tandasN.reduce(function(a, c){ return a + c; }, 0), 101, 'crear(50) sigue cubriendo los 101 temas');

reiniciar();
Ruta.crear(5);
Ruta.borrar();
igual(Ruta.activa(), null, 'borrar() deja la ruta en null');

fin();
```

- [ ] **Step 2: Ejecutarlo para verificar que falla**

Run: `node herramientas_validar_ruta.js`
Expected: FAIL con `Cannot find module ... assets/js/ruta.js` (el archivo todavía no existe).

- [ ] **Step 3: Escribir la implementación mínima**

Crear `assets/js/ruta.js` (con la herramienta Write, no con heredoc):

```js
/* ============================================================
   RUTA — el recorrido guiado del temario
   Estudias una tanda de temas, la mide un simulacro de esos
   mismos temas, y se desbloquea la siguiente. Hasta agotar los
   101 temas del programa.

   El principio que lo ordena todo: la Ruta NO guarda el progreso
   de los tres pasos. Lo deduce de lo que la app ya lleva
   (d.apuntes, d.srs, d.srsTarjetas). Por eso el trabajo hecho
   antes de crear la ruta cuenta, y estudiar un tema desde la
   pantalla Temario cuenta igual que hacerlo desde aqui.

   Este archivo no toca el DOM a proposito: tiene que poder
   cargarse en Node para que herramientas_validar_ruta.js lo
   compruebe sin navegador.
   ============================================================ */
window.Ruta = (function () {

  const META_PREG = 10;      // preguntas que pide un tema, si las tiene
  const META_TARJ = 12;      // tarjetas que pide un tema, si las tiene
  const CORTE_PREG = 70;     // % para dar por hecho el paso de preguntas
  const CORTE_FLOJO = 60;    // % por debajo del cual un tema queda flojo
  const MIN_RESCATE = 3;     // preguntas minimas para sacar un tema de la cola
  const TAM_MIN = 2, TAM_MAX = 20;

  function datos(){ return Almacen.datos(); }
  function guardar(){ Almacen.guardar(); }

  /* ---------- temas del programa en curso ---------- */
  /* Se filtra por programa aqui y no al cargar el archivo para que
     cambiar de programa se note sin recargar la pagina, igual que hace
     la vista del Temario. */
  function bloques(){
    const prog = Almacen.programa();
    return (window.TEMARIO || []).filter(function (b) {
      return prog === 'unirm' ? b.programa === 'unirm' : b.programa !== 'unirm';
    });
  }

  let cTemas = null, cProg = null;
  function temas(){
    const p = Almacen.programa();
    if (cTemas && cProg === p) return cTemas;
    cProg = p;
    cTemas = [];
    bloques().forEach(function (b) {
      b.temas.forEach(function (t) {
        cTemas.push({ t: t.t, claves: t.claves || [], bloque: b.bloque, em: b.em });
      });
    });
    return cTemas;
  }

  function temaPorNombre(n){
    const L = temas();
    for (let i = 0; i < L.length; i++) if (L[i].t === n) return L[i];
    return null;
  }

  function invalidar(){ cTemas = null; cProg = null; }

  /* ---------- el orden del recorrido ---------- */
  /* Los bloques estan escritos por peso (Medicina Interna 41, Gineco 21,
     Pediatria 20, Cirugia 19). Recorrerlos en ese orden dejaria al
     estudiante ocho tandas seguidas dentro de Medicina Interna antes de
     ver una pregunta de Pediatria.

     Se intercalan: al tema j de un bloque de n temas le toca la clave
     (j + 0.5) / n, y se ordena por esa clave. Eso reparte en proporcion
     en CUALQUIER prefijo, no solo al final, asi que hasta la primera
     tanda ya se parece al examen real. */
  function ordenIntercalado(){
    const marcas = [];
    bloques().forEach(function (b, bi) {
      const n = b.temas.length;
      b.temas.forEach(function (t, j) {
        marcas.push({ nombre: t.t, k: (j + 0.5) / n, bi: bi, j: j });
      });
    });
    marcas.sort(function (a, c) {
      return (a.k - c.k) || (a.bi - c.bi) || (a.j - c.j);
    });
    return marcas.map(function (m) { return m.nombre; });
  }

  /* 101 no es multiplo de casi nada, y una ultima tanda de 1 tema queda
     coja. Se decide cuantas tandas caben y se reparte entero, con una
     regla para donde van los sobrantes: el estudiante pidio tandas de
     `tam` y la primera tiene que ser de `tam`, no una mas ni una menos.
     Si el reparto base ya da `tam`, los sobrantes van al final; si se
     queda corto, van al principio. Asi tam=5 da [5 x19, 6] y tam=3 da
     [3 x33, 2]: en los dos casos la primera tanda es la que pidio. */
  function repartirTandas(total, tam){
    const t = acotar(tam);
    const nT = Math.max(1, Math.round(total / t));
    const base = Math.floor(total / nT);
    const resto = total % nT;
    const alPrincipio = base < t;
    const out = [];
    for (let i = 0; i < nT; i++){
      const extra = alPrincipio ? (i < resto) : (i >= nT - resto);
      out.push(base + (extra ? 1 : 0));
    }
    return out;
  }

  function acotar(tam){
    const n = Math.round(tam) || 5;
    return Math.max(TAM_MIN, Math.min(TAM_MAX, n));
  }

  /* ---------- ciclo de vida ---------- */
  function activa(){
    const d = datos();
    return (d && d.ruta) ? d.ruta : null;
  }

  function crear(tam){
    const d = datos();
    if (!d) return null;
    const orden = ordenIntercalado();
    d.ruta = {
      v: 1,
      creado: Date.now(),
      tam: acotar(tam),
      vuelta: 1,
      orden: orden,
      tandasN: repartirTandas(orden.length, tam),
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

  function borrar(){
    const d = datos();
    if (!d) return;
    d.ruta = null;
    guardar();
  }

  return {
    activa: activa, crear: crear, borrar: borrar,
    temas: temas, temaPorNombre: temaPorNombre, invalidar: invalidar,
    _orden: ordenIntercalado, _tandas: repartirTandas
  };
})();
```

- [ ] **Step 4: Ejecutar el validador y verificar que pasa**

Run: `node --check assets/js/ruta.js && node herramientas_validar_ruta.js`
Expected: PASS — "Todo en orden." con ~25 comprobaciones.

- [ ] **Step 5: Commit**

```bash
git add herramientas_validar_ruta.js assets/js/ruta.js
git commit -m "Ruta: orden intercalado del temario y tandas equilibradas"
```

---

### Task 2: Índice tema↔banco y material de cada tema

**Files:**
- Modify: `assets/js/ruta.js`
- Modify: `herramientas_validar_ruta.js`

**Interfaces:**
- Consumes: `Ruta.temaPorNombre` y `Ruta.invalidar` (Task 1), `Motor.bancoActivo()`, `Tarjetas.mazo()`, `window.APUNTES`.
- Produces:
  - `Ruta.preguntasDe(nombreTema)` → `Pregunta[]`
  - `Ruta.tarjetasDe(nombreTema)` → `Tarjeta[]`
  - `Ruta.claveApunte(nombreTema)` → `string | null` (la clave de `window.APUNTES`)

- [ ] **Step 1: Añadir al validador las comprobaciones de material**

Insertar en `herramientas_validar_ruta.js`, justo antes de la línea `fin();`:

```js
/* ============================================================
   4. El material de cada tema
   ============================================================ */
titulo('Material por tema');

reiniciar();

igual(Ruta.preguntasDe('Tema que no existe').length, 0, 'un tema inexistente no devuelve preguntas');
ok(Ruta.preguntasDe('Hipertension arterial').length === 0 ||
   Ruta.preguntasDe('Hipertensión arterial').length > 0,
   'el emparejamiento usa el nombre exacto del temario');

let sinApunte = 0, pocasPreg = 0, pocasTarj = 0;
const flacos = [];
Ruta.temas().forEach(function (t) {
  const k = Ruta.claveApunte(t.t);
  const qs = Ruta.preguntasDe(t.t);
  const exp = qs.filter(function (q) { return !!q.exp; });
  const cs = Ruta.tarjetasDe(t.t);
  if (!k) { sinApunte++; flacos.push('sin apunte: ' + t.t); }
  if (exp.length < 5) { pocasPreg++; flacos.push('menos de 5 explicadas: ' + t.t + ' (' + exp.length + ')'); }
  if (cs.length < 10) { pocasTarj++; flacos.push('menos de 10 tarjetas: ' + t.t + ' (' + cs.length + ')'); }
});
igual(sinApunte, 0, 'los 101 temas tienen apunte');
igual(pocasPreg, 0, 'los 101 temas tienen al menos 5 preguntas explicadas');
igual(pocasTarj, 0, 'los 101 temas tienen al menos 10 flashcards');
if (flacos.length) flacos.forEach(function (f) { console.log('    · ' + f); });

/* Las tarjetas de un tema tienen que venir de sus preguntas: es lo que
   hoy NO hace el boton "Flashcards del tema" del Temario. */
const idsHTA = {};
Ruta.preguntasDe('Hipertensión arterial').forEach(function (q) { idsHTA[q.id] = 1; });
const cartasHTA = Ruta.tarjetasDe('Hipertensión arterial');
ok(cartasHTA.length > 0, 'hipertension arterial tiene flashcards');
ok(cartasHTA.every(function (c) { return !!idsHTA[c.origen]; }),
   'todas las flashcards de un tema nacen de preguntas de ese tema');
```

- [ ] **Step 2: Ejecutarlo para verificar que falla**

Run: `node herramientas_validar_ruta.js`
Expected: FAIL con `TypeError: Ruta.preguntasDe is not a function`.

- [ ] **Step 3: Implementar el índice en `assets/js/ruta.js`**

Insertar este bloque justo después de la función `invalidar()` y **reemplazar** el cuerpo de `invalidar` por la versión que limpia también los cachés nuevos:

```js
  /* ---------- emparejar temas con el banco ---------- */
  /* Cada tema del temario lleva `claves`: las palabras con las que se
     engancha con las preguntas. Se normaliza a minusculas y sin tildes y
     se busca en todo el texto util de la pregunta. Es el mismo criterio
     que usa la vista del Temario, pero vive aqui porque esa vista
     necesita UI y el DOM y este archivo tiene que correr en Node. */
  function norm(s){
    return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  let cIndice = null, cIndiceLargo = -1;
  function indice(){
    const banco = Motor.bancoActivo();
    if (cIndice && cIndiceLargo === banco.length) return cIndice;
    cIndiceLargo = banco.length;
    cIndice = banco.map(function (q) {
      return {
        q: q,
        txt: norm([q.enunciado, q.caso, q.tema, q.sub, q.clave, q.exp,
                   (q.tags || []).join(' ')].join(' '))
      };
    });
    return cIndice;
  }

  function preguntasDe(nombre){
    const t = temaPorNombre(nombre);
    if (!t) return [];
    const ks = t.claves.map(norm).filter(Boolean);
    if (!ks.length) return [];
    return indice().filter(function (x) {
      return ks.some(function (k) { return x.txt.indexOf(k) >= 0; });
    }).map(function (x) { return x.q; });
  }

  function tarjetasDe(nombre){
    const ids = {};
    preguntasDe(nombre).forEach(function (q) { ids[q.id] = 1; });
    return Tarjetas.mazo().filter(function (c) { return c.origen && ids[c.origen]; });
  }

  /* ---------- el texto de cada tema ---------- */
  /* Se busca en window.APUNTES directamente y no via Apuntes.claveDeTema
     porque ese modulo es una vista: necesita UI y el DOM. El
     emparejamiento es el mismo, por nombre exacto. */
  let cApuntes = null, cApProg = null;
  function apuntesDelPrograma(){
    const p = Almacen.programa();
    if (cApuntes && cApProg === p) return cApuntes;
    cApProg = p;
    cApuntes = {};
    const todo = window.APUNTES || {};
    Object.keys(todo).forEach(function (k) {
      const suyo = (todo[k].programa === 'unirm');
      if (p === 'unirm' ? suyo : !suyo) cApuntes[todo[k].tema] = k;
    });
    return cApuntes;
  }

  function claveApunte(nombre){ return apuntesDelPrograma()[nombre] || null; }
```

Y reemplazar:

```js
  function invalidar(){ cTemas = null; cProg = null; }
```

por:

```js
  function invalidar(){
    cTemas = null; cProg = null;
    cIndice = null; cIndiceLargo = -1;
    cApuntes = null; cApProg = null;
  }
```

Añadir al `return` del módulo: `preguntasDe: preguntasDe, tarjetasDe: tarjetasDe, claveApunte: claveApunte,`

- [ ] **Step 4: Ejecutar y verificar que pasa**

Run: `node --check assets/js/ruta.js && node herramientas_validar_ruta.js`
Expected: PASS. Si alguna comprobación de material falla, imprime el nombre del tema flaco — eso es un dato real del banco, no un fallo del código: anotarlo y consultar antes de bajar el umbral.

- [ ] **Step 5: Commit**

```bash
git add assets/js/ruta.js herramientas_validar_ruta.js
git commit -m "Ruta: indice tema-banco, tarjetas y apunte de cada tema"
```

---

### Task 3: Los tres pasos, la tanda en curso y el avance

**Files:**
- Modify: `assets/js/ruta.js`
- Modify: `herramientas_validar_ruta.js`

**Interfaces:**
- Consumes: `Ruta.preguntasDe`, `Ruta.tarjetasDe`, `Ruta.claveApunte` (Task 2).
- Produces:
  - `Ruta.pasosDe(nombreTema)` → `{ tema, leer:{hecho,clave,sinTexto}, preg:{hechas,meta,pct,hecho}, tarj:{hechas,meta,hecho}, completo }`
  - `Ruta.tandaActual()` → `{ n, indice, temas:[pasosDe + bloque + em], perdidos, completa }` o `null`
  - `Ruta.avance()` → `{ temasCerrados, total, pct, tanda, tandas, repaso, vuelta, terminada }` o `null`

- [ ] **Step 1: Añadir las comprobaciones de los tres pasos**

Insertar en `herramientas_validar_ruta.js` antes de `fin();`:

```js
/* ============================================================
   5. Los tres pasos
   ============================================================ */
titulo('Los tres pasos');

/* Marca un tema como estudiado del todo, tocando SOLO el progreso
   normal del estudiante: es la prueba de que la Ruta lo deduce y no
   guarda nada aparte. */
function estudiarTema(nombre){
  const k = Ruta.claveApunte(nombre);
  if (k) D.apuntes[k] = Date.now();
  Ruta.preguntasDe(nombre).slice(0, 10).forEach(function (q) {
    D.srs[q.id] = { vistas:1, aciertos:1, fallos:0, prox: Date.now() + 86400000 };
  });
  Ruta.tarjetasDe(nombre).slice(0, 12).forEach(function (c) {
    D.srsTarjetas[c.id] = { vistas:1, nivel:1, prox: Date.now() + 86400000 };
  });
}

reiniciar();
Ruta.crear(5);
const t0 = Ruta.activa().orden[0];

let p = Ruta.pasosDe(t0);
igual(p.leer.hecho, false, 'un tema sin leer no tiene el paso de leer');
igual(p.preg.hecho, false, 'un tema sin preguntas hechas no tiene el paso de preguntas');
igual(p.tarj.hecho, false, 'un tema sin tarjetas repasadas no tiene el paso de tarjetas');
igual(p.completo, false, 'un tema recien empezado no esta completo');
igual(p.preg.meta, 10, 'la meta de preguntas es 10 cuando hay de sobra');
igual(p.tarj.meta, 12, 'la meta de tarjetas es 12 cuando hay de sobra');

D.apuntes[Ruta.claveApunte(t0)] = Date.now();
p = Ruta.pasosDe(t0);
igual(p.leer.hecho, true, 'marcar el apunte leido cierra el paso de leer');
igual(p.completo, false, 'leer solo no completa el tema');

/* Nueve de diez no basta, y diez con mal porcentaje tampoco. */
Ruta.preguntasDe(t0).slice(0, 9).forEach(function (q) {
  D.srs[q.id] = { vistas:1, aciertos:1, fallos:0, prox:0 };
});
igual(Ruta.pasosDe(t0).preg.hecho, false, 'nueve preguntas de diez no cierran el paso');

reiniciar();
Ruta.crear(5);
Ruta.preguntasDe(t0).slice(0, 10).forEach(function (q) {
  D.srs[q.id] = { vistas:1, aciertos:0, fallos:1, prox:0 };
});
igual(Ruta.pasosDe(t0).preg.pct, 0, 'diez preguntas falladas dan 0% de dominio');
igual(Ruta.pasosDe(t0).preg.hecho, false, 'diez preguntas con 0% no cierran el paso');

reiniciar();
Ruta.crear(5);
estudiarTema(t0);
p = Ruta.pasosDe(t0);
igual(p.completo, true, 'los tres pasos hechos completan el tema');

/* ============================================================
   6. La tanda en curso y el avance
   ============================================================ */
titulo('Tanda y avance');

reiniciar();
Ruta.crear(5);
let ta = Ruta.tandaActual();
igual(ta.indice, 1, 'la primera tanda es la 1');
igual(ta.temas.length, ta.n, 'la tanda trae tantas fichas como temas');
igual(ta.completa, false, 'una tanda sin estudiar no esta completa');
igual(ta.perdidos, 0, 'ningun tema de la tanda falta del temario');

ta.temas.forEach(function (f) { estudiarTema(f.tema); });
Ruta.invalidar();
igual(Ruta.tandaActual().completa, true, 'estudiar todos los temas completa la tanda');

const av = Ruta.avance();
igual(av.temasCerrados, 0, 'sin cerrar tanda no hay temas cerrados');
igual(av.total, 101, 'el avance cuenta sobre 101 temas');
igual(av.tanda, 1, 'el avance dice en que tanda vas');
igual(av.tandas, 20, 'con tam=5 el avance dice que hay 20 tandas');
igual(av.pct, 0, 'el avance empieza en 0%');
igual(av.vuelta, 1, 'el avance dice la vuelta');

/* En la segunda vuelta los pasos no bloquean. */
reiniciar();
const rv = Ruta.crear(5);
rv.vuelta = 2;
igual(Ruta.tandaActual().completa, true, 'en la vuelta 2 la tanda esta abierta sin estudiar nada');
```

- [ ] **Step 2: Ejecutarlo para verificar que falla**

Run: `node herramientas_validar_ruta.js`
Expected: FAIL con `TypeError: Ruta.pasosDe is not a function`.

- [ ] **Step 3: Implementar en `assets/js/ruta.js`**

Insertar antes del `return` del módulo:

```js
  /* ---------- los tres pasos de un tema ---------- */
  /* Nada de esto se guarda: se lee del progreso normal del estudiante.
     Asi el trabajo hecho antes de crear la ruta cuenta, y estudiar un
     tema desde otra pantalla cuenta igual. */
  function pasosDe(nombre){
    const d = datos();
    const k = claveApunte(nombre);

    /* Sin apunte, el paso de leer se da por hecho: un tema nuevo del
       temario que todavia no tenga texto no puede atascar la ruta. */
    const leer = {
      clave: k,
      sinTexto: !k,
      hecho: !k || !!(d.apuntes && d.apuntes[k])
    };

    const qs = preguntasDe(nombre);
    const metaP = Math.min(META_PREG, qs.length);
    let vistas = 0, dominadas = 0;
    qs.forEach(function (q) {
      const s = d.srs[q.id];
      if (!s) return;
      vistas++;
      if (s.aciertos > s.fallos) dominadas++;
    });
    const pct = vistas ? Math.round(dominadas / vistas * 100) : null;
    const preg = {
      hechas: vistas, meta: metaP, pct: pct,
      hecho: metaP === 0 || (vistas >= metaP && pct >= CORTE_PREG)
    };

    const cs = tarjetasDe(nombre);
    const metaT = Math.min(META_TARJ, cs.length);
    let repasadas = 0;
    cs.forEach(function (c) { if (d.srsTarjetas[c.id]) repasadas++; });
    const tarj = {
      hechas: repasadas, meta: metaT,
      hecho: metaT === 0 || repasadas >= metaT
    };

    return {
      tema: nombre, leer: leer, preg: preg, tarj: tarj,
      completo: leer.hecho && preg.hecho && tarj.hecho
    };
  }

  /* ---------- la tanda en curso ---------- */
  function tandaActual(){
    const r = activa();
    if (!r) return null;
    const n = r.tandasN[r.tanda - 1] || 0;
    const nombres = r.orden.slice(r.cursor, r.cursor + n);

    /* Un tema que ya no existe en el temario (renombrado entre
       versiones) se salta como si estuviera cerrado, en vez de dejar la
       ruta encallada. La pantalla lo dice en el pie. */
    const vivos = nombres.filter(function (x) { return !!temaPorNombre(x); });
    const fichas = vivos.map(function (x) {
      const p = pasosDe(x);
      const t = temaPorNombre(x);
      p.bloque = t.bloque;
      p.em = t.em;
      return p;
    });

    return {
      n: n,
      indice: r.tanda,
      temas: fichas,
      perdidos: nombres.length - vivos.length,
      /* En la segunda vuelta los tres pasos ya estan hechos por
         definicion, porque se deducen del progreso. Si bloquearan, la
         vuelta nacería completa y se saltaria el recorrido entero: por
         eso a partir de la vuelta 2 el simulacro esta abierto siempre. */
      completa: r.vuelta >= 2 || (fichas.length > 0 && fichas.every(function (f) { return f.completo; }))
    };
  }

  function avance(){
    const r = activa();
    if (!r) return null;
    const cerrados = Math.min(r.cursor, r.orden.length);
    return {
      temasCerrados: cerrados,
      total: r.orden.length,
      pct: Math.round(cerrados / Math.max(1, r.orden.length) * 100),
      tanda: r.tanda,
      tandas: r.tandasN.length,
      repaso: r.repaso.slice(),
      vuelta: r.vuelta,
      terminada: !!r.terminada
    };
  }
```

Añadir al `return`: `pasosDe: pasosDe, tandaActual: tandaActual, avance: avance,`

- [ ] **Step 4: Ejecutar y verificar que pasa**

Run: `node --check assets/js/ruta.js && node herramientas_validar_ruta.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add assets/js/ruta.js herramientas_validar_ruta.js
git commit -m "Ruta: los tres pasos deducidos del progreso, tanda y avance"
```

---

### Task 4: El simulacro de cierre de tanda

**Files:**
- Modify: `assets/js/ruta.js`
- Modify: `herramientas_validar_ruta.js`

**Interfaces:**
- Consumes: `Ruta.tandaActual`, `Ruta.pasosDe`, `Ruta.preguntasDe` (Tasks 2-3), `Motor.seleccionar`.
- Produces:
  - `Ruta.simulacroDeTanda()` → `Pregunta[]` de longitud `n`, sin ids repetidos
  - `Ruta.minutosDeTanda()` → `number` (minutos del examen)
  - `Ruta._reparto()` → `{ n, nTanda, nRepaso, puestasTanda, puestasRepaso, puestasRelleno }` del último `simulacroDeTanda()`

- [ ] **Step 1: Añadir las comprobaciones del simulacro**

Insertar en `herramientas_validar_ruta.js` antes de `fin();`:

```js
/* ============================================================
   7. El simulacro de cierre
   ============================================================ */
titulo('Simulacro de cierre');

reiniciar();
Ruta.crear(5);
Ruta.tandaActual().temas.forEach(function (f) { estudiarTema(f.tema); });
Ruta.invalidar();

const sim1 = Ruta.simulacroDeTanda();
const rep1 = Ruta._reparto();
igual(sim1.length, rep1.n, 'el simulacro devuelve exactamente n preguntas');
ok(rep1.n >= 20 && rep1.n <= 100, 'n queda entre 20 y 100 (salio ' + rep1.n + ')');
igual(rep1.n, 30, 'con una tanda de 5 temas el simulacro es de 30 preguntas');
igual(Ruta.minutosDeTanda(), 36, 'con 30 preguntas el examen dura 36 minutos');

const vistos = {};
let dups = 0;
sim1.forEach(function (q) { if (vistos[q.id]) dups++; vistos[q.id] = 1; });
igual(dups, 0, 'el simulacro no repite ninguna pregunta');

igual(rep1.nTanda, 21, 'el 70% de 30 son 21 preguntas de la tanda');
igual(rep1.nRepaso, 9, 'el 30% restante son 9 de repaso');
igual(rep1.puestasTanda, 21, 'se colocan las 21 de la tanda');
/* En la primera tanda no hay temas cerrados todavia, asi que el bloque
   de repaso no tiene de donde salir y lo cubre el relleno general. */
igual(rep1.puestasRepaso, 0, 'en la tanda 1 no hay repaso acumulado');
igual(rep1.puestasRelleno, 9, 'el relleno general cubre lo que falta');

/* Con tandas ya cerradas, el bloque de repaso si se llena. */
reiniciar();
const r7 = Ruta.crear(5);
r7.cursor = 20;
r7.tanda = 5;
Ruta.invalidar();
Ruta.tandaActual().temas.forEach(function (f) { estudiarTema(f.tema); });
Ruta.invalidar();

const sim2 = Ruta.simulacroDeTanda();
const rep2 = Ruta._reparto();
igual(sim2.length, rep2.n, 'con repaso disponible sigue devolviendo n preguntas');
ok(rep2.puestasRepaso >= rep2.nRepaso - 1,
   'el bloque de repaso se llena con temas ya cerrados (' + rep2.puestasRepaso + ' de ' + rep2.nRepaso + ')');

/* Los temas flojos pasan delante en el bloque de repaso. */
reiniciar();
const r8 = Ruta.crear(5);
r8.cursor = 20;
r8.tanda = 5;
r8.repaso = [r8.orden[0]];
Ruta.invalidar();
Ruta.tandaActual().temas.forEach(function (f) { estudiarTema(f.tema); });
Ruta.invalidar();

const sim3 = Ruta.simulacroDeTanda();
const idsFlojo = {};
Ruta.preguntasDe(r8.orden[0]).forEach(function (q) { idsFlojo[q.id] = 1; });
ok(sim3.some(function (q) { return idsFlojo[q.id]; }),
   'un tema en la cola de repaso aparece en el simulacro');
```

- [ ] **Step 2: Ejecutarlo para verificar que falla**

Run: `node herramientas_validar_ruta.js`
Expected: FAIL con `TypeError: Ruta.simulacroDeTanda is not a function`.

- [ ] **Step 3: Implementar en `assets/js/ruta.js`**

Insertar antes del `return` del módulo:

```js
  /* ---------- el simulacro que cierra la tanda ---------- */
  function barajar(a){
    const c = a.slice();
    for (let i = c.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      const t = c[i]; c[i] = c[j]; c[j] = t;
    }
    return c;
  }

  function dominioTema(nombre){
    const p = pasosDe(nombre).preg.pct;
    return p === null ? 0 : p;
  }

  /* El reparto del ultimo simulacro generado. No se persiste: existe
     para que el validador pueda comprobar el 70/30 de verdad, en vez de
     deducirlo volviendo a emparejar preguntas con temas (las claves de
     dos temas se solapan y el recuento saldria inflado). */
  let ultimoReparto = null;
  function reparto(){ return ultimoReparto; }

  function tamanoSimulacro(){
    const ta = tandaActual();
    const k = ta ? ta.temas.length : 0;
    return Math.max(20, Math.min(100, k * 6));
  }

  function minutosDeTanda(){ return Math.round(tamanoSimulacro() * 1.2); }

  function simulacroDeTanda(){
    const r = activa();
    if (!r) return [];
    const ta = tandaActual();
    if (!ta || !ta.temas.length) return [];

    const n = tamanoSimulacro();
    const nTanda = Math.round(n * 0.7);
    const nRepaso = n - nTanda;
    const usados = {};
    const salida = [];

    function tomar(lista, cuantos){
      let puestos = 0;
      for (let i = 0; i < lista.length && puestos < cuantos; i++){
        const q = lista[i];
        if (usados[q.id]) continue;
        usados[q.id] = 1;
        salida.push(q);
        puestos++;
      }
      return puestos;
    }

    /* 1. El bloque de la tanda, a partes iguales entre sus temas. Los
          restos van a los temas que peor dominas. Dentro de cada tema se
          ponen delante las explicadas: una pregunta sin explicacion no
          ensena nada cuando se repasa el examen. */
    const k = ta.temas.length;
    const porTema = Math.floor(nTanda / k);
    const sobran = nTanda - porTema * k;
    const orden = ta.temas.slice().sort(function (a, b) {
      return dominioTema(a.tema) - dominioTema(b.tema);
    });
    let puestasTanda = 0;
    orden.forEach(function (f, i) {
      const cupo = porTema + (i < sobran ? 1 : 0);
      const qs = preguntasDe(f.tema);
      const conExp = barajar(qs.filter(function (q) { return !!q.exp; }));
      const sinExp = barajar(qs.filter(function (q) { return !q.exp; }));
      puestasTanda += tomar(conExp.concat(sinExp), cupo);
    });

    /* 2. El bloque de repaso: los temas ya cerrados, con los flojos
          delante y el resto por dominio ascendente. Se cogen como mucho
          seis por tema para que el repaso no lo acapare uno solo. */
    const cerrados = r.orden.slice(0, r.cursor).filter(function (x) {
      return !!temaPorNombre(x);
    });
    const flojos = cerrados.filter(function (x) { return r.repaso.indexOf(x) >= 0; });
    const resto = cerrados.filter(function (x) { return r.repaso.indexOf(x) < 0; })
      .sort(function (a, b) { return dominioTema(a) - dominioTema(b); });

    const pozo = [];
    flojos.concat(resto).forEach(function (x) {
      const qs = preguntasDe(x).filter(function (q) { return !!q.exp; });
      barajar(qs).slice(0, 6).forEach(function (q) { pozo.push(q); });
    });
    const puestasRepaso = tomar(pozo, nRepaso);

    /* 3. Si aun falta (tanda 1, o temas muy delgados), lo cubre el
          selector general con la distribucion del examen real. */
    let puestasRelleno = 0;
    if (salida.length < n){
      const falta = n - salida.length;
      const extra = Motor.seleccionar({ n: falta * 3, distribuida: true });
      puestasRelleno = tomar(extra, falta);
    }

    ultimoReparto = {
      n: n, nTanda: nTanda, nRepaso: nRepaso,
      puestasTanda: puestasTanda,
      puestasRepaso: puestasRepaso,
      puestasRelleno: puestasRelleno
    };

    return barajar(salida).slice(0, n);
  }
```

Añadir al `return`: `simulacroDeTanda: simulacroDeTanda, minutosDeTanda: minutosDeTanda, tamanoSimulacro: tamanoSimulacro, _reparto: reparto,`

- [ ] **Step 4: Ejecutar y verificar que pasa**

Run: `node --check assets/js/ruta.js && node herramientas_validar_ruta.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add assets/js/ruta.js herramientas_validar_ruta.js
git commit -m "Ruta: simulacro de cierre con 70% de la tanda y 30% de repaso"
```

---

### Task 5: Cierre de tanda, reinyección de flojos y segunda vuelta

**Files:**
- Modify: `assets/js/ruta.js`
- Modify: `herramientas_validar_ruta.js`

**Interfaces:**
- Consumes: `Ruta.tandaActual`, `Ruta.preguntasDe`, `Ruta._orden`, `Ruta._tandas`.
- Produces:
  - `Ruta.cerrarTanda(resultado)` → `{ porTema:{nombre:pct}, flojos:string[], recuperados:string[] }`, donde `resultado` es `{ respuestas:[{qid, ok}] }` — la misma forma que lleva `S.respuestas` en `vistas/sesion.js`
  - `Ruta.segundaVuelta()` → la ruta con `vuelta` incrementada
  - `Ruta.temasNuevos()` → `string[]` con los temas del temario que no están en `orden`
  - `Ruta.absorber()` → los añade al final del recorrido y devuelve cuántos absorbió

- [ ] **Step 1: Añadir las comprobaciones del cierre**

Insertar en `herramientas_validar_ruta.js` antes de `fin();`:

```js
/* ============================================================
   8. Cierre de tanda y reinyeccion
   ============================================================ */
titulo('Cierre de tanda');

/* Construye un resultado de examen falso: de cada tema de la lista,
   `cuantas` preguntas con el porcentaje de acierto pedido. */
function examenFalso(pares){
  const respuestas = [];
  pares.forEach(function (par) {
    const qs = Ruta.preguntasDe(par.tema).slice(0, par.cuantas);
    const aciertos = Math.round(qs.length * par.pct / 100);
    qs.forEach(function (q, i) { respuestas.push({ qid:q.id, ok: i < aciertos }); });
  });
  return { respuestas: respuestas };
}

reiniciar();
const rc = Ruta.crear(5);
const temasT1 = Ruta.tandaActual().temas.map(function (f) { return f.tema; });
temasT1.forEach(estudiarTema);
Ruta.invalidar();

/* El primero sale al 40% (flojo), los demas al 90%. */
const res1 = Ruta.cerrarTanda(examenFalso(
  temasT1.map(function (t, i) { return { tema:t, cuantas:5, pct: i === 0 ? 40 : 90 }; })
));

igual(res1.flojos.length, 1, 'solo el tema por debajo del 60% queda flojo');
igual(res1.flojos[0], temasT1[0], 'el tema flojo es el que salio al 40%');
igual(Ruta.activa().repaso.length, 1, 'el tema flojo entra en la cola de repaso');
igual(Ruta.activa().cursor, 5, 'el cursor avanza los temas de la tanda');
igual(Ruta.activa().tanda, 2, 'se pasa a la tanda siguiente');
igual(Ruta.activa().historial.length, 1, 'la tanda cerrada queda en el historial');
igual(Ruta.activa().hilo, null, 'cerrar la tanda cierra el hilo');
igual(Ruta.avance().temasCerrados, 5, 'el avance cuenta los 5 temas cerrados');

const h = Ruta.activa().historial[0];
igual(h.n, 1, 'el historial guarda el numero de tanda');
igual(h.temas.length, 5, 'el historial guarda los temas de la tanda');
ok(h.pct > 0 && h.pct < 100, 'el historial guarda el porcentaje global (' + h.pct + '%)');
ok(h.porTema[temasT1[0]] < 60, 'el historial guarda el porcentaje por tema');

/* La tanda se cierra siempre, aunque salga fatal. */
reiniciar();
const rz = Ruta.crear(5);
const temasZ = Ruta.tandaActual().temas.map(function (f) { return f.tema; });
temasZ.forEach(estudiarTema);
Ruta.invalidar();
Ruta.cerrarTanda(examenFalso(temasZ.map(function (t) { return { tema:t, cuantas:5, pct:0 }; })));
igual(Ruta.activa().cursor, 5, 'con 0% la tanda se cierra igual');
igual(Ruta.activa().repaso.length, 5, 'con 0% los cinco temas quedan flojos');

/* Un tema flojo se recupera con >= 60% y al menos 3 preguntas. */
reiniciar();
const rr = Ruta.crear(5);
const temasR = Ruta.tandaActual().temas.map(function (f) { return f.tema; });
temasR.forEach(estudiarTema);
Ruta.invalidar();
Ruta.cerrarTanda(examenFalso([{ tema:temasR[0], cuantas:5, pct:20 }]));
igual(Ruta.activa().repaso.length, 1, 'el tema queda en la cola');

const temasT2 = Ruta.tandaActual().temas.map(function (f) { return f.tema; });
temasT2.forEach(estudiarTema);
Ruta.invalidar();
const res2 = Ruta.cerrarTanda(examenFalso(
  [{ tema:temasR[0], cuantas:5, pct:100 }].concat(
    temasT2.map(function (t) { return { tema:t, cuantas:4, pct:100 }; }))
));
igual(res2.recuperados.length, 1, 'el tema flojo se recupera al sacar 100%');
igual(Ruta.activa().repaso.length, 0, 'la cola de repaso queda vacia');

/* Con menos de 3 preguntas no se rescata: una pregunta afortunada no
   puede sacar un tema de la cola. */
reiniciar();
const rp = Ruta.crear(5);
const temasP = Ruta.tandaActual().temas.map(function (f) { return f.tema; });
temasP.forEach(estudiarTema);
Ruta.invalidar();
Ruta.cerrarTanda(examenFalso([{ tema:temasP[0], cuantas:5, pct:20 }]));
const temasP2 = Ruta.tandaActual().temas.map(function (f) { return f.tema; });
temasP2.forEach(estudiarTema);
Ruta.invalidar();
Ruta.cerrarTanda(examenFalso(
  [{ tema:temasP[0], cuantas:2, pct:100 }].concat(
    temasP2.map(function (t) { return { tema:t, cuantas:4, pct:100 }; }))
));
igual(Ruta.activa().repaso.length, 1, 'con 2 preguntas al 100% el tema sigue en la cola');

/* ============================================================
   9. Fin del recorrido y segunda vuelta
   ============================================================ */
titulo('Fin y segunda vuelta');

reiniciar();
const rf = Ruta.crear(5);
/* Con tam=5 las tandas son [5 x19, 6]: antes de la ultima hay 95 temas. */
rf.cursor = 95;
rf.tanda = rf.tandasN.length;
Ruta.invalidar();
const ultimos = Ruta.tandaActual().temas.map(function (f) { return f.tema; });
ultimos.forEach(estudiarTema);
Ruta.invalidar();
Ruta.cerrarTanda(examenFalso([{ tema:ultimos[0], cuantas:4, pct:20 }]));
ok(!!Ruta.activa().terminada, 'al agotar los temas la ruta queda terminada');
igual(Ruta.avance().terminada, true, 'el avance dice que la ruta termino');
igual(Ruta.avance().pct, 100, 'el avance llega al 100%');

const flojoFinal = Ruta.activa().repaso[0];
const rv2 = Ruta.segundaVuelta();
igual(rv2.vuelta, 2, 'la segunda vuelta incrementa el contador');
igual(rv2.cursor, 0, 'la segunda vuelta reinicia el cursor');
igual(rv2.tanda, 1, 'la segunda vuelta reinicia la tanda');
igual(rv2.terminada, null, 'la segunda vuelta deja de estar terminada');
igual(rv2.orden.length, 101, 'la segunda vuelta recorre los 101 temas otra vez');
igual(rv2.orden[0], flojoFinal, 'la segunda vuelta empieza por el tema flojo');
ok(rv2.historial.length > 0, 'la segunda vuelta conserva el historial');
igual(Ruta.tandaActual().completa, true, 'en la segunda vuelta el simulacro esta abierto ya');

/* ============================================================
   9 bis. Temas anadidos al temario con la ruta ya en marcha
   ============================================================ */
titulo('Temas nuevos');

reiniciar();
const rn = Ruta.crear(5);
igual(Ruta.temasNuevos().length, 0, 'una ruta recien creada no deja temas fuera');

/* Se simula que el temario crecio: se quitan dos del recorrido. */
const fuera = rn.orden.splice(40, 2);
rn.tandasN = Ruta._tandas(rn.orden.length, rn.tam);
igual(Ruta.temasNuevos().length, 2, 'detecta los dos temas fuera del recorrido');

rn.cursor = 10;
rn.tanda = 3;
rn.repaso = [rn.orden[0]];
const antesHistorial = rn.historial.length;
const absorbidos = Ruta.absorber();

igual(absorbidos, 2, 'absorber() se lleva los dos temas');
igual(Ruta.temasNuevos().length, 0, 'despues de absorber no queda ninguno fuera');
igual(Ruta.activa().orden.length, 101, 'el recorrido vuelve a tener los 101 temas');
igual(Ruta.activa().orden[99], fuera[0], 'los nuevos se anaden al final, no en medio');
igual(Ruta.activa().cursor, 10, 'absorber no mueve el cursor');
igual(Ruta.activa().tanda, 3, 'absorber no cambia la tanda en curso');
igual(Ruta.activa().repaso.length, 1, 'absorber conserva la cola de repaso');
igual(Ruta.activa().historial.length, antesHistorial, 'absorber conserva el historial');
igual(Ruta.activa().tandasN.reduce(function (a, c) { return a + c; }, 0), 101,
      'las tandas vuelven a sumar 101');
```

- [ ] **Step 2: Ejecutarlo para verificar que falla**

Run: `node herramientas_validar_ruta.js`
Expected: FAIL con `TypeError: Ruta.cerrarTanda is not a function`.

- [ ] **Step 3: Implementar en `assets/js/ruta.js`**

Insertar antes del `return` del módulo:

```js
  /* ---------- cerrar la tanda ---------- */
  /* `resultado` viene de la sesion: { respuestas:[{qid, ok}] }.
     La tanda se cierra SIEMPRE, saque lo que saque. Lo que cambia con un
     mal resultado es que los temas flojos vuelven mezclados en las
     tandas siguientes, no que el avance se bloquee. */
  function cerrarTanda(resultado){
    const r = activa();
    if (!r) return null;
    const ta = tandaActual();
    if (!ta) return null;

    const resp = (resultado && resultado.respuestas) || [];
    const porTema = {}, cuenta = {};

    /* Una pregunta que pertenece a dos temas cuenta en los dos: las
       claves del temario se solapan a proposito. */
    function medir(nombre){
      const ids = {};
      preguntasDe(nombre).forEach(function (q) { ids[q.id] = 1; });
      const mias = resp.filter(function (x) { return ids[x.qid]; });
      if (!mias.length) return;
      cuenta[nombre] = mias.length;
      porTema[nombre] = Math.round(
        mias.filter(function (x) { return x.ok; }).length / mias.length * 100);
    }

    ta.temas.forEach(function (f) { medir(f.tema); });
    r.repaso.forEach(function (x) { medir(x); });

    /* Regla 1: los temas DE LA TANDA se pueden marcar flojos. */
    const flojos = [];
    ta.temas.forEach(function (f) {
      if (cuenta[f.tema] && porTema[f.tema] < CORTE_FLOJO){
        flojos.push(f.tema);
        if (r.repaso.indexOf(f.tema) < 0) r.repaso.push(f.tema);
      }
    });

    /* Regla 2: los temas que YA estaban en la cola solo se pueden
       recuperar, nunca penalizar dos veces. Hacen falta 3 preguntas para
       que una sola afortunada no los rescate. */
    const recuperados = [];
    r.repaso.slice().forEach(function (x) {
      if (flojos.indexOf(x) >= 0) return;
      if ((cuenta[x] || 0) >= MIN_RESCATE && porTema[x] >= CORTE_FLOJO){
        recuperados.push(x);
        r.repaso.splice(r.repaso.indexOf(x), 1);
      }
    });

    const correctas = resp.filter(function (x) { return x.ok; }).length;
    r.historial.push({
      n: r.tanda,
      temas: ta.temas.map(function (f) { return f.tema; }),
      fecha: Date.now(),
      pct: resp.length ? Math.round(correctas / resp.length * 100) : 0,
      correctas: correctas,
      total: resp.length,
      porTema: porTema,
      flojos: flojos
    });

    r.cursor += ta.n;
    r.tanda += 1;
    r.hilo = null;
    if (r.cursor >= r.orden.length) r.terminada = Date.now();
    guardar();

    return { porTema: porTema, flojos: flojos, recuperados: recuperados };
  }

  /* ---------- segunda vuelta ---------- */
  /* No repite los tres pasos, y no puede: como el progreso se deduce del
     estado del estudiante, los 101 temas ya los tienen hechos y una
     vuelta normal naceria completa. A partir de la vuelta 2 el recorrido
     es de solo simulacros, empezando por lo que quedo flojo. */
  function segundaVuelta(){
    const r = activa();
    if (!r) return null;
    const flojos = r.repaso.filter(function (x) { return !!temaPorNombre(x); });
    const resto = ordenIntercalado().filter(function (x) { return flojos.indexOf(x) < 0; });
    const orden = flojos.concat(resto);
    r.vuelta += 1;
    r.orden = orden;
    r.tandasN = repartirTandas(orden.length, r.tam);
    r.cursor = 0;
    r.tanda = 1;
    r.hilo = null;
    r.terminada = null;
    guardar();
    return r;
  }
```

Y añadir también, en el mismo bloque:

```js
  /* ---------- temas que entraron al temario despues ---------- */
  /* Un tema nuevo no se puede meter en medio del recorrido: correria el
     cursor y descuadraria las tandas ya cerradas. Se anade al final, que
     ademas es donde toca estudiarlo, y solo se recalculan las tandas que
     aun no has empezado. Asi el cursor, el historial y la cola de repaso
     quedan exactamente como estaban. */
  function temasNuevos(){
    const r = activa();
    if (!r) return [];
    const dentro = {};
    r.orden.forEach(function (x) { dentro[x] = 1; });
    return temas().filter(function (t) { return !dentro[t.t]; })
                  .map(function (t) { return t.t; });
  }

  function absorber(){
    const r = activa();
    if (!r) return 0;
    const nuevos = temasNuevos();
    if (!nuevos.length) return 0;

    r.orden = r.orden.concat(nuevos);
    const cerradas = r.tandasN.slice(0, r.tanda - 1);
    const restantes = r.orden.length - r.cursor;
    r.tandasN = cerradas.concat(repartirTandas(restantes, r.tam));
    guardar();
    return nuevos.length;
  }
```

Añadir al `return`: `cerrarTanda: cerrarTanda, segundaVuelta: segundaVuelta, temasNuevos: temasNuevos, absorber: absorber,`

- [ ] **Step 4: Ejecutar y verificar que pasa**

Run: `node --check assets/js/ruta.js && node herramientas_validar_ruta.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add assets/js/ruta.js herramientas_validar_ruta.js
git commit -m "Ruta: cierre de tanda, reinyeccion, segunda vuelta y temas nuevos"
```

---

### Task 6: El hilo del tema, el próximo paso y la voz de Arturo

**Files:**
- Modify: `assets/js/ruta.js`
- Create: `assets/js/arturo.js`
- Modify: `herramientas_validar_ruta.js`

**Interfaces:**
- Consumes: todo lo anterior de `Ruta`.
- Produces:
  - `Ruta.proximoPaso()` → `{ tipo:'sinruta'|'leer'|'preg'|'tarj'|'simulacro'|'fin', tema?, clave?, meta?, hechas?, pct?, tanda?, n? }`
  - `Ruta.hilo()` / `Ruta.abrirHilo(tema)` / `Ruta.cerrarHilo()`
  - `Arturo.paso()` → `{ tipo, tema, titulo, frase, boton }`
  - `Arturo.frase(clave, ctx)` → `string`
  - `Arturo.barra(op)` → `string` con HTML
  - `Arturo.enganchar()` → cablea el botón de `barra()`
  - `Arturo.seguir()` → navega y lanza la acción del paso
  - `Arturo.NOMBRE` → `'Arturo'`

- [ ] **Step 1: Añadir las comprobaciones del paso y de la voz**

Insertar en `herramientas_validar_ruta.js` antes de `fin();`:

```js
/* ============================================================
   10. El proximo paso y el hilo
   ============================================================ */
titulo('Proximo paso');

reiniciar();
igual(Ruta.proximoPaso().tipo, 'sinruta', 'sin ruta el paso es sinruta');

Ruta.crear(5);
const tA = Ruta.activa().orden[0];
let pp = Ruta.proximoPaso();
igual(pp.tipo, 'leer', 'lo primero de un tema es leer');
igual(pp.tema, tA, 'el primer tema de la tanda es el primero del orden');
ok(!!pp.clave, 'el paso de leer trae la clave del apunte');

D.apuntes[Ruta.claveApunte(tA)] = Date.now();
Ruta.invalidar();
pp = Ruta.proximoPaso();
igual(pp.tipo, 'preg', 'despues de leer tocan las preguntas');
igual(pp.tema, tA, 'las preguntas son del mismo tema, no de otro');

Ruta.preguntasDe(tA).slice(0, 10).forEach(function (q) {
  D.srs[q.id] = { vistas:1, aciertos:1, fallos:0, prox:0 };
});
Ruta.invalidar();
pp = Ruta.proximoPaso();
igual(pp.tipo, 'tarj', 'despues de las preguntas tocan las tarjetas');
igual(pp.tema, tA, 'las tarjetas son del mismo tema');

Ruta.tarjetasDe(tA).slice(0, 12).forEach(function (c) {
  D.srsTarjetas[c.id] = { vistas:1, nivel:1, prox:0 };
});
Ruta.invalidar();
pp = Ruta.proximoPaso();
igual(pp.tipo, 'leer', 'cerrado un tema se pasa al siguiente');
ok(pp.tema !== tA, 'el siguiente paso ya no es del tema cerrado');

Ruta.tandaActual().temas.forEach(function (f) { estudiarTema(f.tema); });
Ruta.invalidar();
igual(Ruta.proximoPaso().tipo, 'simulacro', 'con la tanda completa toca el simulacro');

/* El hilo manda: un tema empezado no se suelta por otro. */
reiniciar();
Ruta.crear(5);
const tercero = Ruta.tandaActual().temas[2].tema;
D.apuntes[Ruta.claveApunte(tercero)] = Date.now();
Ruta.abrirHilo(tercero);
Ruta.invalidar();
igual(Ruta.proximoPaso().tema, tercero, 'con el hilo abierto se sigue con ese tema');
igual(Ruta.proximoPaso().tipo, 'preg', 'y por el paso que le toca');
igual(Ruta.hilo().tema, tercero, 'hilo() dice que tema esta abierto');
Ruta.cerrarHilo();
igual(Ruta.hilo(), null, 'cerrarHilo lo deja en null');

/* ============================================================
   11. La voz de Arturo
   ============================================================ */
titulo('Arturo');

cargar('assets/js/arturo.js');

igual(Arturo.NOMBRE, 'Arturo', 'el profesor se llama Arturo');

/* Todos los estados posibles dan una frase y un titulo. */
const estados = [];

reiniciar();
estados.push({ n:'sin ruta', p:Arturo.paso() });

Ruta.crear(5);
estados.push({ n:'leer', p:Arturo.paso() });

const tB = Ruta.activa().orden[0];
D.apuntes[Ruta.claveApunte(tB)] = Date.now();
Ruta.invalidar();
estados.push({ n:'preguntas', p:Arturo.paso() });

Ruta.preguntasDe(tB).slice(0, 10).forEach(function (q) {
  D.srs[q.id] = { vistas:1, aciertos:1, fallos:0, prox:0 };
});
Ruta.invalidar();
estados.push({ n:'tarjetas', p:Arturo.paso() });

Ruta.tandaActual().temas.forEach(function (f) { estudiarTema(f.tema); });
Ruta.invalidar();
estados.push({ n:'simulacro', p:Arturo.paso() });

Ruta.activa().terminada = Date.now();
estados.push({ n:'fin', p:Arturo.paso() });

estados.forEach(function (e) {
  ok(!!e.p, 'hay paso en el estado "' + e.n + '"');
  ok(!!e.p.frase && e.p.frase.length > 10, 'hay frase en el estado "' + e.n + '"');
  ok(!!e.p.titulo, 'hay titulo en el estado "' + e.n + '"');
  ok(!!e.p.boton, 'hay boton en el estado "' + e.n + '"');
  ok(e.p.frase.indexOf('{') < 0, 'la frase de "' + e.n + '" no deja huecos sin rellenar');
});

/* Cada situacion tiene al menos tres frases, y no repite la misma dos
   veces seguidas. */
const SITUACIONES = ['sinruta', 'leer', 'preg', 'tarj', 'simulacro', 'fin',
                     'cierraLectura', 'resultadoAlto', 'resultadoBajo',
                     'cierraTema', 'resultadoTanda', 'retomar'];
SITUACIONES.forEach(function (s) {
  const vistas = {};
  for (let i = 0; i < 40; i++) vistas[Arturo.frase(s, { tema:'Gota', tanda:3, tandas:20, repaso:1 })] = 1;
  const distintas = Object.keys(vistas).length;
  ok(distintas >= 3, 'la situacion "' + s + '" tiene al menos 3 frases (salieron ' + distintas + ')');
  let seguidas = 0, previa = null;
  for (let i = 0; i < 40; i++){
    const f = Arturo.frase(s, { tema:'Gota', tanda:3, tandas:20, repaso:1 });
    if (f === previa) seguidas++;
    previa = f;
  }
  igual(seguidas, 0, 'la situacion "' + s + '" no repite frase dos veces seguidas');
});

/* barra() devuelve HTML sin depender del DOM. */
reiniciar();
Ruta.crear(5);
const html = Arturo.barra();
ok(html.indexOf('arturo') >= 0, 'barra() devuelve la tira de Arturo');
ok(html.indexOf('arturoSeguir') >= 0, 'barra() trae el boton de seguir');
```

- [ ] **Step 2: Ejecutarlo para verificar que falla**

Run: `node herramientas_validar_ruta.js`
Expected: FAIL con `TypeError: Ruta.proximoPaso is not a function`.

- [ ] **Step 3: Añadir el hilo y el próximo paso a `assets/js/ruta.js`**

Insertar antes del `return` del módulo:

```js
  /* ---------- el hilo: el tema que Arturo acompaña ---------- */
  function hilo(){
    const r = activa();
    return (r && r.hilo) ? r.hilo : null;
  }
  function abrirHilo(tema){
    const r = activa();
    if (!r) return;
    r.hilo = { tema: tema, abierto: Date.now() };
    guardar();
  }
  function cerrarHilo(){
    const r = activa();
    if (!r) return;
    r.hilo = null;
    guardar();
  }

  /* ---------- que toca ahora ---------- */
  function pasoDeTema(f){
    if (!f.leer.hecho)
      return { tipo:'leer', tema:f.tema, clave:f.leer.clave };
    if (!f.preg.hecho)
      return { tipo:'preg', tema:f.tema, meta:f.preg.meta, hechas:f.preg.hechas, pct:f.preg.pct };
    return { tipo:'tarj', tema:f.tema, meta:f.tarj.meta, hechas:f.tarj.hechas };
  }

  function proximoPaso(){
    const r = activa();
    if (!r) return { tipo:'sinruta' };
    if (r.terminada) return { tipo:'fin' };
    const ta = tandaActual();
    if (!ta || !ta.temas.length) return { tipo:'fin' };

    /* Un tema empezado no se suelta a medias por empezar otro: si hay
       hilo abierto y ese tema sigue sin cerrar, se sigue por ahi. */
    if (r.hilo && r.hilo.tema){
      for (let i = 0; i < ta.temas.length; i++){
        if (ta.temas[i].tema === r.hilo.tema && !ta.temas[i].completo)
          return pasoDeTema(ta.temas[i]);
      }
    }
    for (let j = 0; j < ta.temas.length; j++){
      if (!ta.temas[j].completo) return pasoDeTema(ta.temas[j]);
    }
    return { tipo:'simulacro', tanda:r.tanda, n:ta.temas.length };
  }
```

Añadir al `return`: `proximoPaso: proximoPaso, hilo: hilo, abrirHilo: abrirHilo, cerrarHilo: cerrarHilo,`

- [ ] **Step 4: Escribir `assets/js/arturo.js`**

Crear el archivo con la herramienta Write:

```js
/* ============================================================
   ARTURO — el profesor que guia el recorrido
   La Ruta sabe que toca. Arturo es quien lo dice, y quien
   encadena la lectura con las preguntas y las preguntas con las
   tarjetas sin soltar al estudiante en el menu entre paso y paso.

   Que es: un sistema de reglas sobre el estado de la ruta, con el
   texto escrito a mano. Que NO es: un chat ni un modelo de
   lenguaje. La app corre sin servidor y sin internet, asi que no
   hay nada aqui que pueda improvisar una respuesta.

   La voz: profesor clinico, segunda persona, frases cortas. La
   misma de los apuntes, la que se escribe alrededor de "que hago
   con este paciente delante". No la de un animador.
   ============================================================ */
window.Arturo = (function () {

  const NOMBRE = 'Arturo';

  /* Este modulo tiene que poder cargarse en Node para validarlo, y alli
     no hay UI. Por eso el escapado se resuelve en cada llamada y no en
     una constante del cuerpo del modulo. */
  function esc(s){
    if (window.UI && UI.esc) return UI.esc(s);
    return String(s == null ? '' : s);
  }

  /* ---------- el texto ----------
     {tema} {tanda} {tandas} {repaso} {pct} se rellenan solos. */
  const FRASES = {
    sinruta: [
      'Soy Arturo. Si me dejas, te llevo el estudio: escogemos cuantos temas quieres llevar a la vez y los vamos cerrando con examen hasta acabar el temario.',
      'Estudiar a saltos cansa y no cunde. Arma tu recorrido y yo te digo cada dia que toca, sin que tengas que decidirlo tu.',
      'Aqui hay 101 temas. Los vamos a ir cerrando por tandas, y cada tanda termina con un examen de lo que acabas de estudiar. Empecemos.'
    ],
    leer: [
      'Empezamos por el texto de {tema}. Leelo entero, sin saltar las cajas: ahi esta lo que decide la conducta.',
      'Toca {tema}. Primero el texto, que es donde se entiende; las preguntas vienen despues y se contestan solas.',
      'Abre {tema} y leelo con calma. No lo estudies para responder todavia, estudialo para saber que harias con ese paciente delante.'
    ],
    preg: [
      'Ya tienes el texto de {tema}. Ahora las preguntas del mismo tema: quiero ver si lo que leiste te sirve para decidir.',
      'Vamos a probar {tema}. {meta} preguntas, con explicacion. Lo que falles ahora no te lo cobra nadie.',
      'Leiste {tema}; ahora hay que usarlo. Te pongo sus preguntas y vemos que quedo flojo.'
    ],
    tarj: [
      'Buen trabajo con las preguntas de {tema}. Cierra el tema con sus tarjetas: son el dato clave y la trampa de cada una.',
      'Falta lo que se olvida primero. Pasa las tarjetas de {tema} y lo dejamos sujeto.',
      'Ultimo paso de {tema}: las tarjetas. Son cortas y son las que hacen que dentro de un mes sigas sabiendolo.'
    ],
    simulacro: [
      'La tanda {tanda} esta completa. Toca medirla: examen de estos temas, con reloj y sin ayudas.',
      'Ya cerraste los temas de esta tanda. Ahora el examen, que es donde se ve lo que de verdad quedo.',
      'Terminaste de estudiar la tanda {tanda}. Vamos al examen; sale de estos temas y de algo de lo anterior.'
    ],
    fin: [
      'Recorriste el temario entero. Eso no lo hace casi nadie. Podemos dar una segunda vuelta, mas corta y de puro examen, o medirte con un simulacro completo.',
      'Se acabaron los 101 temas. Lo que queda ahora es sostenerlo: segunda vuelta de solo examenes, o simulacro completo del ENURM.',
      'Cerramos el temario. A partir de aqui ya no se trata de aprenderlo, sino de que no se te caiga: elige segunda vuelta o simulacro completo.'
    ],
    cierraLectura: [
      'Hasta aqui el texto de {tema}. Ahora las preguntas, que es donde se ve si lo entendiste.',
      'Ya esta leido {tema}. No lo dejes ahi: te pongo sus preguntas y salimos de dudas.',
      'Terminaste {tema}. Sigue conmigo, que lo siguiente es ponerlo a prueba.'
    ],
    resultadoAlto: [
      'Eso estuvo bien. {tema} lo tienes. Cierra con las tarjetas y pasamos al siguiente.',
      '{pct}% en {tema}. Vas sobrado; remata con las tarjetas y seguimos.',
      'Bien resuelto. Te faltan solo las tarjetas de {tema} para darlo por cerrado.'
    ],
    resultadoBajo: [
      'Ahi hay un hueco. Vuelve al texto de {tema} antes de seguir: no quiero que lo arrastres hasta el examen.',
      '{pct}% en {tema} no alcanza. Relee el tema y repite las preguntas; no es tiempo perdido, es el tiempo que hace falta.',
      'Esto no quedo. Te devuelvo al texto de {tema}, y volvemos a las preguntas cuando lo tengas.'
    ],
    cierraTema: [
      'Tema cerrado. Vamos con el siguiente de la tanda {tanda}.',
      '{tema} queda listo. Sigue el proximo; llevamos buen ritmo.',
      'Uno menos. Te espero en el siguiente tema de esta tanda.'
    ],
    resultadoTanda: [
      'Ahi tienes la tanda {tanda}. Lo que salio flojo no se pierde: vuelve mezclado en los proximos examenes.',
      'Cerrada la tanda {tanda}. Los temas que no llegaron al 60% te los voy a devolver mas adelante, no te libras.',
      'Tanda {tanda} medida. Seguimos avanzando; lo flojo lo recupero yo por ti.'
    ],
    retomar: [
      'Lo dejamos en {tema}. Sigamos por ahi antes de abrir nada nuevo.',
      'Tenias {tema} a medias. Terminemoslo y despues pasamos al siguiente.',
      'Volvemos a {tema}, que quedo empezado. Un tema a medias no cuenta.'
    ]
  };

  const TITULOS = {
    sinruta:   'Arma tu recorrido',
    leer:      'Toca leer',
    preg:      'Toca practicar',
    tarj:      'Toca fijar',
    simulacro: 'Toca medirse',
    fin:       'Temario terminado'
  };

  const BOTONES = {
    sinruta:   'Empezar con Arturo',
    leer:      'Leer el tema',
    preg:      'Hacer las preguntas',
    tarj:      'Pasar las tarjetas',
    simulacro: 'Empezar el examen',
    fin:       'Ver el cierre'
  };

  /* ---------- elegir frase sin repetirse ---------- */
  const ultima = {};

  function rellenar(s, ctx){
    return String(s).replace(/\{(\w+)\}/g, function (m, k) {
      return (ctx && ctx[k] !== null && ctx[k] !== undefined) ? ctx[k] : '';
    });
  }

  function frase(clave, ctx){
    const banco = FRASES[clave];
    if (!banco || !banco.length) return '';
    let i = Math.floor(Math.random() * banco.length);
    if (banco.length > 1 && i === ultima[clave]) i = (i + 1) % banco.length;
    ultima[clave] = i;
    return rellenar(banco[i], ctx);
  }

  /* ---------- el paso del dia ---------- */
  function paso(){
    const p = Ruta.proximoPaso();
    const r = Ruta.activa();
    const ctx = {
      tema: p.tema || '',
      meta: p.meta || 0,
      pct: p.pct === null || p.pct === undefined ? '' : p.pct,
      tanda: r ? r.tanda : 0,
      tandas: r ? r.tandasN.length : 0,
      repaso: r ? r.repaso.length : 0
    };
    return {
      tipo: p.tipo,
      tema: p.tema || null,
      titulo: TITULOS[p.tipo] || '',
      frase: frase(p.tipo, ctx),
      boton: BOTONES[p.tipo] || 'Seguir'
    };
  }

  /* ---------- la tira, para incrustar en cualquier vista ---------- */
  /* op.frase y op.boton permiten que una pantalla concreta ponga el
     remate que le toca (cerrar la lectura, interpretar un resultado) en
     vez del paso generico. */
  function barra(op){
    op = op || {};
    const p = paso();
    const texto = op.frase || p.frase;
    const boton = op.boton === null ? null : (op.boton || p.boton);
    return '<div class="arturo">' +
        '<span class="arturo__sello">A</span>' +
        '<div class="arturo__texto">' +
          '<b>' + NOMBRE + '</b>' +
          '<p>' + esc(texto) + '</p>' +
        '</div>' +
        (boton ? '<button class="btn btn--sm" id="arturoSeguir">' + esc(boton) + '</button>' : '') +
      '</div>';
  }

  function enganchar(){
    const b = document.getElementById('arturoSeguir');
    if (b) b.onclick = seguir;
  }

  /* ---------- el boton unico ---------- */
  function seguir(){
    const p = Ruta.proximoPaso();

    if (p.tipo === 'sinruta' || p.tipo === 'fin' || p.tipo === 'simulacro')
      return App.ir('ruta');

    Ruta.abrirHilo(p.tema);

    if (p.tipo === 'leer'){
      App.ir('estudiar');
      if (p.clave && window.Apuntes) Apuntes.abrir(p.clave);
      return;
    }

    if (p.tipo === 'preg'){
      const qs = Ruta.preguntasDe(p.tema);
      if (!qs.length) return UI.tostada('Este tema todavía no tiene preguntas', 'mal');
      const orden = qs.slice().sort(function (a, b) {
        return (b.exp ? 1 : 0) - (a.exp ? 1 : 0);
      }).slice(0, Math.max(10, p.meta || 10));
      return Sesion.iniciar({
        modo: 'aprender', titulo: p.tema,
        preguntas: orden.sort(function () { return Math.random() - 0.5; })
      });
    }

    if (p.tipo === 'tarj'){
      const cs = Ruta.tarjetasDe(p.tema);
      if (!cs.length) return UI.tostada('Este tema todavía no tiene flashcards', 'mal');
      return Flashcards.iniciar({
        n: Math.max(12, p.meta || 12),
        titulo: p.tema,
        ids: cs.map(function (c) { return c.id; })
      });
    }
  }

  return {
    NOMBRE: NOMBRE,
    paso: paso, frase: frase, barra: barra,
    enganchar: enganchar, seguir: seguir
  };
})();
```

- [ ] **Step 5: Ejecutar y verificar que pasa**

Run: `node --check assets/js/ruta.js && node --check assets/js/arturo.js && node herramientas_validar_ruta.js`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add assets/js/ruta.js assets/js/arturo.js herramientas_validar_ruta.js
git commit -m "Arturo: el hilo del tema, el proximo paso y la voz del profesor"
```

---

### Task 7: La pantalla de Arturo

**Files:**
- Create: `assets/js/vistas/ruta.js`
- Modify: `assets/js/almacen.js:50-67`
- Modify: `assets/js/app.js:14-31` y `:41-51`
- Modify: `app.html`
- Modify: `assets/css/app.css`
- Modify: `assets/js/motor.js` (`Tarjetas.sesion`, dentro de la función `sesion(op)`)

**Interfaces:**
- Consumes: todo `Ruta` y `Arturo`; `UI.esc`, `UI.barra`, `UI.pctTexto`, `UI.modal`, `UI.tostada`, `UI.fecha`; `Sesion.iniciar`; `App.ir`.
- Produces: `VistaRuta.menu()` — la pantalla, registrada en `App.PANTALLAS.ruta`.

- [ ] **Step 1: Dar a `Tarjetas.sesion` el filtro por ids que le falta**

En `assets/js/motor.js`, dentro de `function sesion(op)`, justo después de `let fuente = mazo();`, insertar:

```js
    /* Filtro por lista explicita de tarjetas. Lo necesita la Ruta para
       pasar las tarjetas de UN tema del temario: `op.tema` filtra por el
       campo `tema` de la pregunta de origen, que no es lo mismo que el
       nombre del tema del programa. */
    if (op.ids && op.ids.length){
      const permitidas = {};
      op.ids.forEach(function (x) { permitidas[x] = 1; });
      fuente = fuente.filter(function (t) { return permitidas[t.id]; });
    }
```

Verificar con: `node --check assets/js/motor.js`

- [ ] **Step 2: Reservar el hueco en el estado del estudiante**

En `assets/js/almacen.js`, dentro de `datosNuevos`, añadir la línea después de `plan: null,`:

```js
      ruta: null,               // el recorrido guiado del temario (ver assets/js/ruta.js)
```

Verificar con: `node --check assets/js/almacen.js`

- [ ] **Step 3: Escribir la pantalla**

Crear `assets/js/vistas/ruta.js` con la herramienta Write:

```js
/* ============================================================
   LA PANTALLA DE ARTURO
   Tres caras: la de antes de empezar (elegir el tamano de la
   tanda), la del recorrido en marcha, y la del cierre cuando se
   agota el temario.
   ============================================================ */
window.VistaRuta = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  function menu(){
    /* El ajuste del banco extendido cambia las preguntas de cada tema, y
       ese cache solo se limpia desde aqui y desde el Temario. */
    Ruta.invalidar();
    const r = Ruta.activa();
    if (!r) return arranque();
    if (r.terminada) return cierre();
    return recorrido();
  }

  /* ---------- 1. antes de empezar ---------- */
  function arranque(){
    const total = Ruta.temas().length;
    const p = Arturo.paso();

    V().innerHTML =
    '<div class="escalona" style="max-width:900px">' +
      '<div class="encabezado"><p class="eyebrow">Tu profesor</p>' +
      '<h1>Arturo te lleva el estudio</h1>' +
      '<p>' + esc(p.frase) + '</p></div>' +

      '<div class="card card--sangria" style="margin-bottom:18px">' +
        '<span class="eyebrow" style="color:rgba(255,255,255,.5)">Como funciona</span>' +
        '<h3 style="font-size:23px;margin:8px 0 12px">Estudiar, medirse, avanzar</h3>' +
        '<p style="color:rgba(255,255,255,.78);font-size:14.5px">De cada tema se leen sus apuntes, se hacen sus preguntas y se pasan sus tarjetas. Cuando la tanda entera esta hecha, entra un examen de esos mismos temas con algo de lo anterior mezclado. Lo que salga flojo vuelve solo en los examenes siguientes. Y asi hasta agotar los ' + total + ' temas del programa.</p>' +
      '</div>' +

      '<div class="card">' +
        '<span class="eyebrow">Cuantos temas quieres llevar a la vez</span>' +
        '<p class="muted" style="margin:8px 0 14px;font-size:13.5px">Tandas cortas dan mas examenes y mas sensacion de avance. Tandas largas se parecen mas al examen real. Se puede cambiar despues rehaciendo el recorrido.</p>' +
        '<div style="display:flex;flex-direction:column;gap:9px">' +
          opcion(3, 'Tandas cortas', total) +
          opcion(5, 'El ritmo recomendado', total) +
          opcion(8, 'Tandas largas', total) +
          opcion(10, 'Lo mas parecido al examen', total) +
        '</div>' +
        '<div class="row" style="gap:9px;margin-top:16px;align-items:center">' +
          '<span class="muted" style="font-size:13px">O a medida:</span>' +
          '<input id="rutaTam" type="number" min="2" max="20" value="5" style="width:80px">' +
          '<button class="btn btn--sm btn--fantasma" id="rutaMedida">Crear con ese tamaño</button>' +
        '</div>' +
      '</div>' +
    '</div>';

    UI.$$('[data-tam]').forEach(function (b) {
      b.onclick = function () { empezar(+b.dataset.tam); };
    });
    document.getElementById('rutaMedida').onclick = function () {
      empezar(+document.getElementById('rutaTam').value);
    };
  }

  function opcion(tam, texto, total){
    const tandas = Ruta._tandas(total, tam).length;
    return '<button class="accion-clinica" data-tam="' + tam + '">' +
      '<span class="em">📚</span>' +
      '<span class="grow"><b>' + tam + ' temas por tanda</b>' +
      '<small>' + esc(texto) + ' · ' + tandas + ' tandas hasta terminar</small></span>→</button>';
  }

  function empezar(tam){
    Ruta.crear(tam);
    UI.tostada('Recorrido creado. Arturo te espera.', 'ok');
    menu();
  }

  /* ---------- 2. el recorrido en marcha ---------- */
  function recorrido(){
    const r = Ruta.activa();
    const av = Ruta.avance();
    const ta = Ruta.tandaActual();
    const soloExamen = r.vuelta >= 2;

    const filas = ta.temas.map(function (f, i) {
      return '<div class="ruta__tema' + (f.completo ? ' ruta__tema--ok' : '') + '">' +
        '<span class="ruta__n">' + (i + 1) + '</span>' +
        '<span class="grow">' +
          '<b style="display:block;font-size:14px">' + esc(f.tema) + '</b>' +
          '<small class="muted">' + esc(f.em + ' ' + f.bloque) + '</small>' +
        '</span>' +
        (soloExamen ? '' :
          casilla(f.tema, 'leer', '📖', f.leer.hecho, f.leer.sinTexto ? 'sin texto' : 'leer') +
          casilla(f.tema, 'preg', '📝', f.preg.hecho, f.preg.hechas + '/' + f.preg.meta) +
          casilla(f.tema, 'tarj', '⚡', f.tarj.hecho, f.tarj.hechas + '/' + f.tarj.meta)) +
      '</div>';
    }).join('');

    const historial = r.historial.slice().reverse().map(function (h) {
      return '<div class="item-lista"><span class="item-lista__n">Tanda ' + h.n + '</span>' +
        '<span class="grow"><b style="display:block">' + h.pct + '% · ' + h.correctas + '/' + h.total + '</b>' +
        '<small class="muted">' + esc(h.temas.slice(0, 3).join(', ')) +
        (h.temas.length > 3 ? ' y ' + (h.temas.length - 3) + ' mas' : '') + '</small></span>' +
        '<span class="chip ' + (h.pct >= 70 ? 'chip--verde' : h.pct >= 50 ? 'chip--yodo' : 'chip--sangria') + '">' +
        (h.flojos.length ? h.flojos.length + ' flojo' + (h.flojos.length === 1 ? '' : 's') : 'limpio') +
        '</span></div>';
    }).join('') || '<p class="muted">Todavía no has cerrado ninguna tanda.</p>';

    const avisoRepaso = r.repaso.length
      ? '<div class="card card--yodo" style="margin-bottom:18px">' +
        '<span class="eyebrow">Pendiente de recuperar</span>' +
        '<p style="margin:6px 0 12px">' + r.repaso.length + ' tema' + (r.repaso.length === 1 ? '' : 's') +
        ' no llegaron al 60% en su examen: ' + esc(r.repaso.slice(0, 4).join(', ')) +
        (r.repaso.length > 4 ? ' y ' + (r.repaso.length - 4) + ' más' : '') +
        '. Vuelven solos en los próximos exámenes.</p>' +
        '<button class="btn btn--sm" id="rutaRepasar">Entrenarlos ahora</button></div>'
      : '';

    const avisoPerdidos = ta.perdidos
      ? '<p class="muted" style="margin-top:12px;font-size:12.5px">' + ta.perdidos +
        ' tema(s) de tu recorrido ya no están en el temario y se saltan.</p>'
      : '';

    /* El temario puede crecer mientras alguien va por la tanda 7. Los
       temas nuevos no se cuelan en medio (correrian el cursor): se
       ofrecen para el final del recorrido. */
    const nuevos = Ruta.temasNuevos();
    const avisoNuevos = nuevos.length
      ? '<div class="card card--suero" style="margin-bottom:18px">' +
        '<span class="eyebrow">Temario ampliado</span>' +
        '<p style="margin:6px 0 12px">Hay ' + nuevos.length + ' tema' +
        (nuevos.length === 1 ? '' : 's') + ' nuevo' + (nuevos.length === 1 ? '' : 's') +
        ' que no estaban cuando creaste el recorrido: ' + esc(nuevos.slice(0, 3).join(', ')) +
        (nuevos.length > 3 ? ' y ' + (nuevos.length - 3) + ' más' : '') +
        '. Puedo añadirlos al final sin tocar lo que llevas.</p>' +
        '<button class="btn btn--sm" id="rutaAbsorber">Añadirlos al recorrido</button></div>'
      : '';

    V().innerHTML =
    '<div class="escalona" style="max-width:1000px">' +
      '<div class="encabezado"><p class="eyebrow">' +
        (soloExamen ? 'Segunda vuelta' : 'Tu recorrido') + '</p>' +
      '<h1>Tanda ' + av.tanda + ' de ' + av.tandas + '</h1>' +
      '<p>Llevas ' + av.temasCerrados + ' de ' + av.total + ' temas cerrados.</p></div>' +

      Arturo.barra() +

      '<div class="card" style="margin:18px 0">' +
        '<div class="row-b" style="margin-bottom:8px"><span class="eyebrow">Avance por el temario</span>' +
        '<span class="mono">' + av.temasCerrados + ' / ' + av.total + '</span></div>' +
        UI.barra(av.pct) +
      '</div>' +

      avisoRepaso +
      avisoNuevos +

      '<div class="card" style="margin-bottom:18px">' +
        '<span class="eyebrow">Los temas de esta tanda</span>' +
        (soloExamen
          ? '<p class="muted" style="margin:8px 0 0;font-size:13.5px">En la segunda vuelta no se repiten los tres pasos: ya los hiciste. El examen está abierto desde ahora.</p>'
          : '<p class="muted" style="margin:8px 0 0;font-size:13.5px">Cada tema se cierra con sus tres pasos. Toca cualquiera para ir.</p>') +
        '<div class="ruta__lista" style="margin-top:14px">' + filas + '</div>' +
        avisoPerdidos +
      '</div>' +

      '<div class="card' + (ta.completa ? ' card--sangria' : '') + '" style="margin-bottom:18px">' +
        '<span class="eyebrow"' + (ta.completa ? ' style="color:rgba(255,255,255,.5)"' : '') + '>Examen de la tanda</span>' +
        '<h3 style="font-size:22px;margin:8px 0 10px">' + Ruta.tamanoSimulacro() + ' preguntas · ' +
          Ruta.minutosDeTanda() + ' minutos</h3>' +
        '<p style="font-size:14px' + (ta.completa ? ';color:rgba(255,255,255,.75)' : '') + '">Siete de cada diez preguntas salen de los temas de esta tanda; el resto, de lo que ya cerraste. Con reloj y sin explicación hasta el final.</p>' +
        (ta.completa
          ? '<button class="btn btn--claro" style="margin-top:14px" id="rutaSim">Empezar el examen</button>'
          : '<p class="muted" style="margin-top:12px;font-size:13px">Se abre cuando los ' + ta.temas.length + ' temas estén cerrados.</p>') +
      '</div>' +

      '<div class="card"><span class="eyebrow">Tandas cerradas</span>' +
      '<div style="display:flex;flex-direction:column;gap:9px;margin-top:14px">' + historial + '</div></div>' +

      '<div class="row" style="margin-top:18px">' +
        '<button class="btn btn--fantasma btn--sm" id="rutaRehacer">Rehacer el recorrido</button>' +
      '</div>' +
    '</div>';

    Arturo.enganchar();

    UI.$$('[data-paso]').forEach(function (b) {
      b.onclick = function () {
        Ruta.abrirHilo(b.dataset.tema);
        lanzarPaso(b.dataset.tema, b.dataset.paso);
      };
    });

    const rep = document.getElementById('rutaRepasar');
    if (rep) rep.onclick = function () {
      const ids = {};
      const qs = [];
      r.repaso.forEach(function (t) {
        Ruta.preguntasDe(t).forEach(function (q) {
          if (!ids[q.id] && q.exp){ ids[q.id] = 1; qs.push(q); }
        });
      });
      if (!qs.length) return UI.tostada('No hay preguntas explicadas de esos temas', 'mal');
      Sesion.iniciar({ modo:'aprender', titulo:'Temas por recuperar',
        preguntas: qs.sort(function () { return Math.random() - 0.5; }).slice(0, 20) });
    };

    const abs = document.getElementById('rutaAbsorber');
    if (abs) abs.onclick = function () {
      const n = Ruta.absorber();
      UI.tostada(n + ' tema(s) añadidos al final del recorrido', 'ok');
      menu();
    };

    const sim = document.getElementById('rutaSim');
    if (sim) sim.onclick = empezarSimulacro;

    document.getElementById('rutaRehacer').onclick = function () {
      UI.modal('<h3 style="font-size:22px;margin-bottom:10px">¿Rehacer el recorrido?</h3>' +
        '<p class="muted">Se borra el recorrido y su historial de tandas. Lo que has estudiado no se pierde: los temas que ya tengas hechos aparecerán cerrados desde el primer día.</p>' +
        '<div class="row" style="margin-top:20px;gap:9px">' +
        '<button class="btn btn--fantasma grow" onclick="this.closest(\'.velo\').remove()">Dejarlo como está</button>' +
        '<button class="btn grow" id="rutaConfirmarRehacer">Rehacer</button></div>');
      document.getElementById('rutaConfirmarRehacer').onclick = function () {
        document.querySelector('.velo').remove();
        Ruta.borrar();
        menu();
      };
    };
  }

  function casilla(tema, paso, em, hecho, texto){
    return '<button class="ruta__paso' + (hecho ? ' ruta__paso--ok' : '') + '" ' +
      'data-tema="' + esc(tema) + '" data-paso="' + paso + '" title="' + esc(texto) + '">' +
      '<span>' + (hecho ? '✓' : em) + '</span>' +
      '<small>' + esc(texto) + '</small></button>';
  }

  function lanzarPaso(tema, paso){
    if (paso === 'leer'){
      const k = Ruta.claveApunte(tema);
      if (!k) return UI.tostada('Este tema todavía no tiene texto escrito', 'mal');
      App.ir('estudiar');
      return Apuntes.abrir(k);
    }
    if (paso === 'preg'){
      const qs = Ruta.preguntasDe(tema);
      if (!qs.length) return UI.tostada('Este tema todavía no tiene preguntas', 'mal');
      const orden = qs.slice().sort(function (a, b) { return (b.exp ? 1 : 0) - (a.exp ? 1 : 0); }).slice(0, 10);
      return Sesion.iniciar({ modo:'aprender', titulo:tema,
        preguntas: orden.sort(function () { return Math.random() - 0.5; }) });
    }
    const cs = Ruta.tarjetasDe(tema);
    if (!cs.length) return UI.tostada('Este tema todavía no tiene flashcards', 'mal');
    Flashcards.iniciar({ n:12, titulo:tema, ids: cs.map(function (c) { return c.id; }) });
  }

  function empezarSimulacro(){
    const preguntas = Ruta.simulacroDeTanda();
    if (!preguntas.length) return UI.tostada('No se pudo armar el examen', 'mal');
    const min = Ruta.minutosDeTanda();
    const tanda = Ruta.activa().tanda;

    UI.modal('<h3 style="font-size:22px;margin-bottom:10px">' + preguntas.length +
      ' preguntas · ' + min + ' minutos</h3>' +
      '<p class="muted">' + esc(Arturo.frase('simulacro', { tanda: tanda })) + '</p>' +
      '<div class="row" style="margin-top:20px;gap:9px">' +
      '<button class="btn btn--fantasma grow" onclick="this.closest(\'.velo\').remove()">Todavía no</button>' +
      '<button class="btn grow" id="rutaEmpezarSim">Empezar ahora</button></div>');

    document.getElementById('rutaEmpezarSim').onclick = function () {
      document.querySelector('.velo').remove();
      Sesion.iniciar({
        modo: 'examen',
        titulo: 'Examen de la tanda ' + tanda,
        preguntas: preguntas,
        tiempoTotal: min * 60000,
        etiqueta: 'Ruta · tanda ' + tanda,
        alTerminar: function (res) { Ruta.cerrarTanda(res); }
      });
    };
  }

  /* ---------- 3. el cierre ---------- */
  function cierre(){
    const r = Ruta.activa();
    const medias = r.historial.map(function (h) { return h.pct; });
    const media = medias.length
      ? Math.round(medias.reduce(function (a, c) { return a + c; }, 0) / medias.length) : 0;

    V().innerHTML =
    '<div class="escalona" style="max-width:900px">' +
      '<div class="encabezado"><p class="eyebrow">Recorrido terminado</p>' +
      '<h1>Cerraste el temario completo</h1>' +
      '<p>' + esc(Arturo.frase('fin', {})) + '</p></div>' +

      '<div class="rejilla rejilla--3" style="margin-bottom:18px">' +
        '<div class="metrica"><b>' + r.orden.length + '</b><span>Temas recorridos</span></div>' +
        '<div class="metrica"><b>' + r.historial.length + '</b><span>Tandas cerradas</span></div>' +
        '<div class="metrica"><b>' + media + '%</b><span>Media de los exámenes</span></div>' +
      '</div>' +

      (r.repaso.length
        ? '<div class="card card--yodo" style="margin-bottom:18px"><span class="eyebrow">Lo que quedó flojo</span>' +
          '<p style="margin-top:6px">' + esc(r.repaso.join(', ')) + '</p></div>'
        : '<div class="card card--verde" style="margin-bottom:18px"><b>Ningún tema quedó por debajo del 60%.</b></div>') +

      '<div class="row wrap" style="gap:9px">' +
        '<button class="btn" id="rutaVuelta">Segunda vuelta</button>' +
        '<button class="btn btn--fantasma" id="rutaSimFinal">Simulacro completo de 100</button>' +
      '</div>' +
    '</div>';

    document.getElementById('rutaVuelta').onclick = function () {
      Ruta.segundaVuelta();
      UI.tostada('Segunda vuelta: solo exámenes, empezando por lo flojo', 'ok');
      menu();
    };
    document.getElementById('rutaSimFinal').onclick = function () { App.ir('simulacro'); };
  }

  return { menu: menu };
})();
```

- [ ] **Step 4: Hacer que la sesión avise al terminar**

`vistas/sesion.js` guarda `alTerminar` en `S` pero no lo invoca nunca — es código muerto desde antes. La pantalla de la Ruta lo necesita para cerrar la tanda. En `assets/js/vistas/sesion.js`, dentro de `function terminar(porTiempo)`, justo después de la línea `const nuevas = Motor.revisarMedallas();`, insertar:

```js
    /* El callback estaba previsto desde el principio pero no se llamaba
       nunca. Lo usa la Ruta para cerrar la tanda con el resultado del
       examen. Se llama antes de pintar para que la pantalla de resultado
       ya vea el estado nuevo. */
    if (S.alTerminar){
      try { S.alTerminar({ respuestas: res, pct: pct, correctas: ok, total: res.length }); }
      catch (e) { console.warn('alTerminar fallo:', e); }
    }
```

Verificar con: `node --check assets/js/vistas/sesion.js`

- [ ] **Step 5: Registrar la pantalla**

En `assets/js/app.js`, dentro de `PANTALLAS`, añadir después de la línea de `inicio`:

```js
    ruta:        { em:'👨‍⚕️', nombre:'Arturo',        ver: p => VistaRuta.menu(p) },
```

Y en `MENUS.enurm`, reemplazar las tres listas por:

```js
      arriba: ['inicio','ruta','simulacro','estudiar','temario','entrenar','clinica','flashcards','desafio','ranking','biblioteca'],
      abajo:  ['progreso','preparacion','ajustes'],
      movil:  ['inicio','ruta','estudiar','flashcards','progreso']
```

Verificar con: `node --check assets/js/app.js`

- [ ] **Step 6: Cargar los archivos en `app.html`**

Después de `<script src="assets/js/motor.js"></script>`, añadir:

```html
<script src="assets/js/ruta.js"></script>
<script src="assets/js/arturo.js"></script>
```

Y en el bloque de vistas, después de `<script src="assets/js/vistas/temario.js"></script>`, añadir:

```html
<script src="assets/js/vistas/ruta.js"></script>
```

- [ ] **Step 7: Dar estilo a Arturo y a la lista de temas**

Al final de `assets/css/app.css`, añadir:

```css
/* ---------- Arturo ---------- */
.arturo{
  display:flex; align-items:center; gap:14px;
  background:var(--papel); border:1px solid var(--linea);
  border-left:4px solid var(--sangria);
  border-radius:var(--radio); padding:16px 18px;
}
.arturo__sello{
  flex:none; width:40px; height:40px; border-radius:50%;
  background:var(--sangria); color:#fff;
  display:flex; align-items:center; justify-content:center;
  font-family:var(--display); font-size:20px; font-weight:700;
}
.arturo__texto{ flex:1; min-width:0 }
.arturo__texto b{ display:block; font-size:12px; letter-spacing:.08em;
  text-transform:uppercase; opacity:.55; margin-bottom:3px }
.arturo__texto p{ margin:0; font-size:14.5px; line-height:1.5 }

/* ---------- lista de temas de la tanda ---------- */
.ruta__lista{ display:flex; flex-direction:column; gap:8px }
.ruta__tema{
  display:flex; align-items:center; gap:12px;
  padding:10px 12px; border:1px solid var(--linea); border-radius:10px;
}
.ruta__tema--ok{ border-color:var(--verde); background:rgba(0,0,0,.02) }
.ruta__n{
  flex:none; width:24px; height:24px; border-radius:50%;
  background:var(--linea); display:flex; align-items:center;
  justify-content:center; font-size:12px; font-weight:600;
}
.ruta__paso{
  flex:none; width:54px; padding:6px 4px; border:1px solid var(--linea);
  border-radius:9px; background:transparent; cursor:pointer;
  display:flex; flex-direction:column; align-items:center; gap:2px;
}
.ruta__paso:hover{ border-color:var(--sangria) }
.ruta__paso small{ font-size:10px; opacity:.6 }
.ruta__paso--ok{ border-color:var(--verde); color:var(--verde) }

@media (max-width:640px){
  .ruta__tema{ flex-wrap:wrap }
  .ruta__tema .grow{ flex-basis:100%; margin-bottom:6px }
  .arturo{ flex-wrap:wrap }
  .arturo .btn{ width:100% }
}
```

Si alguna de las variables (`--papel`, `--linea`, `--sangria`, `--verde`, `--radio`, `--display`) no existe con ese nombre, buscar el nombre real en el `:root` de `assets/css/app.css` y usar ese — no inventar variables nuevas.

- [ ] **Step 8: Comprobarlo en el navegador**

Abrir `ABRIR ENURM.bat`, entrar con una cuenta y verificar:
1. Aparece **👨‍⚕️ Arturo** como segunda entrada del menú.
2. La pantalla de arranque ofrece 3/5/8/10 y el campo a medida, y cada opción dice cuántas tandas salen.
3. Al crear el recorrido con 5, la primera tanda trae exactamente 5 temas, de cuatro bloques distintos (2 de Medicina Interna).
4. Las casillas llevan a leer, a las preguntas y a las flashcards del tema correcto.
5. El bloque del examen está bloqueado y dice cuántos temas faltan.
6. La consola no tiene errores.

- [ ] **Step 9: Commit**

```bash
git add assets/js/vistas/ruta.js assets/js/almacen.js assets/js/app.js assets/js/motor.js assets/js/vistas/sesion.js assets/css/app.css app.html
git commit -m "Arturo: la pantalla del recorrido y su sitio en el menu"
```

---

### Task 8: Los enganches — Inicio, próxima acción y el remate de cada pantalla

**Files:**
- Modify: `assets/js/motor.js` (`proximaAccion`, sobre la línea 478)
- Modify: `assets/js/vistas/paneles.js` (`inicio` sobre la 19; `preparacion` sobre la 645)
- Modify: `assets/js/vistas/apuntes.js` (al pie de `abrir`)
- Modify: `assets/js/vistas/sesion.js` (pantalla de resultado)
- Modify: `assets/js/vistas/flashcards.js` (`terminar`)
- Modify: `assets/js/vistas/temario.js` (usar `Ruta.preguntasDe`)

**Interfaces:**
- Consumes: `Arturo.barra`, `Arturo.enganchar`, `Arturo.frase`, `Ruta.activa`, `Ruta.proximoPaso`, `Ruta.hilo`, `Ruta.pasosDe`, `Ruta.preguntasDe`.
- Produces: ningún símbolo nuevo. Cambia el comportamiento de `Motor.proximaAccion()`, que pasa a devolver `{ titulo, texto, accion:'ruta', param:{}, boton }` cuando hay recorrido activo.

- [ ] **Step 1: Que la próxima acción sea la de Arturo**

En `assets/js/motor.js`, al principio de `function proximaAccion()`, antes de cualquier otra línea, insertar:

```js
    /* Con un recorrido en marcha manda Arturo: la app deja de ofrecer
       opciones y pasa a dirigir. Las heuristicas de abajo siguen ahi para
       quien no haya creado recorrido. */
    if (window.Ruta && Ruta.activa() && window.Arturo){
      const p = Arturo.paso();
      if (p.tipo !== 'sinruta'){
        return { titulo: p.titulo, texto: p.frase, accion: 'ruta', param: {}, boton: p.boton };
      }
    }
```

Verificar con: `node --check assets/js/motor.js`

- [ ] **Step 2: Que Inicio muestre a Arturo**

En `assets/js/vistas/paneles.js`, dentro de `function inicio()`, localizar el bloque que pinta la tarjeta de `acc` (la que usa `Motor.proximaAccion()`). Insertar **antes** de ese bloque, en el HTML de `V().innerHTML`, justo después de `avisoVacio +`:

```js
      (window.Ruta && Ruta.activa() ? Arturo.barra() + '<div style="height:18px"></div>' : '') +
```

Y al final de la función, después de que el HTML esté puesto, añadir:

```js
    if (window.Ruta && Ruta.activa()) Arturo.enganchar();
```

- [ ] **Step 3: Retirar el plan de 7 días de "¿Estoy listo?"**

En `assets/js/vistas/paneles.js`, dentro de `function preparacion()`:

1. Borrar la línea `const plan = d.plan;` y todo el bloque `const planHtml = plan ? ... : '...';`.
2. Reemplazar el `<div class="card">` final del plan (el que tiene `Plan de estudio de 7 días` y `btnPlan`) por:

```js
      '<div class="card"><span class="eyebrow">Quién te guía</span>' +
        '<h3 style="font-size:22px;margin:8px 0 10px">Arturo lleva tu recorrido</h3>' +
        '<p class="muted" style="font-size:13.5px">El índice de arriba te dice dónde estás. El recorrido de Arturo te dice qué hacer con eso: qué tema toca hoy, en qué orden y cuándo medirte.</p>' +
        '<button class="btn btn--sm" style="margin-top:14px" id="prepRuta">Ir con Arturo</button>' +
      '</div>' +
```

3. Borrar el manejador `document.getElementById('btnPlan').onclick = ...` y el bloque `UI.$$('[data-plan]').forEach(...)` entero.
4. Añadir en su lugar:

```js
    document.getElementById('prepRuta').onclick = () => App.ir('ruta');
```

`Motor.generarPlan` y `d.plan` se quedan en el código sin invocarse, por si se quiere recuperar.

Verificar con: `node --check assets/js/vistas/paneles.js`

- [ ] **Step 4: Que Arturo remate la lectura de un apunte**

En `assets/js/vistas/apuntes.js`, dentro de `function abrir(k)`, en el bloque `.lectura__pie` — la línea que hoy dice:

```js
            (qs.length ? '' : '<p class="muted" style="margin-top:10px;font-size:12.5px">Este tema todavía no tiene preguntas enlazadas.</p>') +
```

Añadir **justo debajo de ella**, dentro del mismo `lectura__pie`:

```js
            rematePie(ap) +
```

Y definir la función auxiliar dentro del módulo `Apuntes`, antes de `function abrir(k)`:

```js
  /* Arturo remata la lectura solo si este es el tema que esta
     acompañando: leer un apunte suelto desde el indice no tiene por que
     arrastrarte al recorrido. */
  function rematePie(ap){
    if (!window.Ruta || !Ruta.activa() || !window.Arturo) return '';
    const h = Ruta.hilo();
    if (!h || h.tema !== ap.tema) return '';
    return '<div style="margin-top:16px">' +
      Arturo.barra({ frase: Arturo.frase('cierraLectura', { tema: ap.tema }) }) +
      '</div>';
  }
```

Y junto a los demás manejadores que cablea `abrir` (después de `seguirLectura();`), añadir:

```js
    if (window.Arturo) Arturo.enganchar();
```

Verificar con: `node --check assets/js/vistas/apuntes.js`

- [ ] **Step 5: Que Arturo interprete el resultado de una tanda de preguntas**

En `assets/js/vistas/sesion.js`, dentro de `function terminar(porTiempo)`, en el HTML del resultado, insertar justo después de `extra +`:

```js
        remateArturo(pct) +
```

Y añadir esta función auxiliar dentro del módulo `Sesion`, antes de `function terminar`:

```js
  /* El remate de Arturo despues de una tanda de preguntas de un tema del
     recorrido. No aparece en el simulacro (ahi cierra la tanda entera) ni
     fuera del recorrido. */
  function remateArturo(pct){
    if (!window.Ruta || !Ruta.activa() || !window.Arturo) return '';
    if (S.modo !== 'aprender') return '';
    const h = Ruta.hilo();
    if (!h || h.tema !== S.titulo) return '';
    const p = Ruta.pasosDe(h.tema);
    const clave = p.preg.hecho ? 'resultadoAlto' : 'resultadoBajo';
    return '<div style="margin-bottom:18px">' +
      Arturo.barra({ frase: Arturo.frase(clave, { tema:h.tema, pct:pct }) }) +
      '</div>';
  }
```

Y después de que el HTML del resultado esté puesto, junto a los demás manejadores, añadir:

```js
    if (window.Arturo) Arturo.enganchar();
```

Verificar con: `node --check assets/js/vistas/sesion.js`

- [ ] **Step 6: Que Arturo cierre el tema al acabar las tarjetas**

En `assets/js/vistas/flashcards.js`, dentro de `function terminar()`, insertar en el HTML justo antes del bloque `'<div class="row wrap" style="gap:9px">'`:

```js
      (window.Ruta && Ruta.activa() && Ruta.hilo() && Ruta.hilo().tema === S.titulo
        ? '<div style="margin-bottom:18px">' +
          Arturo.barra({ frase: Arturo.frase(
            Ruta.pasosDe(S.titulo).completo ? 'cierraTema' : 'tarj',
            { tema: S.titulo, tanda: Ruta.activa().tanda }) }) +
          '</div>'
        : '') +
```

**Cuidado:** la función hace `S = null;` antes de cablear los botones. Guardar el título antes (ya lo hace: `const titulo = S.titulo;`) y usar `titulo` en lugar de `S.titulo` si el bloque se coloca después de esa línea. Colocarlo **antes** de `S = null;` es más simple. Añadir después de los manejadores:

```js
    if (window.Arturo) Arturo.enganchar();
```

Verificar con: `node --check assets/js/vistas/flashcards.js`

- [ ] **Step 7: Quitar el índice duplicado del Temario**

En `assets/js/vistas/temario.js`:

1. Borrar las funciones `norm`, `indice` e `invalidar` y la variable `cache`, y borrar también la función `preguntasDe`.
2. Reemplazar las llamadas a `preguntasDe(tema)` por `Ruta.preguntasDe(tema.t)`.
3. Reemplazar `invalidar()` (dentro de `menu()`) por `Ruta.invalidar()`.
4. En el `return` del módulo, reemplazar `return { menu, invalidar };` por `return { menu, invalidar: () => Ruta.invalidar() };` para no romper a nadie que llamara a `Temario.invalidar()`.
5. Arreglar de paso el botón de flashcards del tema, que hoy calcula las cartas y luego las ignora. Reemplazar el cuerpo de `document.getElementById('tTarjetas').onclick` por:

```js
    document.getElementById('tTarjetas').onclick = () => {
      document.querySelector('.velo').remove();
      const cartas = Ruta.tarjetasDe(tema.t);
      if (!cartas.length) return UI.tostada('Este tema aún no tiene flashcards: nacen de las preguntas explicadas', 'mal');
      Flashcards.iniciar({ n: Math.min(30, cartas.length), titulo: tema.t,
        ids: cartas.map(c => c.id) });
    };
```

Verificar con: `node --check assets/js/vistas/temario.js`

- [ ] **Step 8: Pasar el validador entero**

Run: `node herramientas_validar_ruta.js`
Expected: PASS, todas las comprobaciones de las tareas 1 a 6.

- [ ] **Step 9: Recorrido completo en el navegador**

Abrir `ABRIR ENURM.bat` con una cuenta nueva y verificar de punta a punta:
1. Inicio muestra la tira de Arturo y su botón lleva al paso correcto.
2. El botón de Arturo desde Inicio abre el apunte del primer tema.
3. Al pie del apunte aparece Arturo cerrando la lectura, y su botón lanza las preguntas **de ese mismo tema**.
4. La pantalla de resultado de esas preguntas trae el remate de Arturo, alto o bajo según el porcentaje.
5. Su botón lanza las flashcards del mismo tema (12 tarjetas, todas suyas).
6. Al acabarlas, Arturo anuncia el siguiente tema.
7. Con la tanda completa, el examen se desbloquea; al terminarlo, la tanda se cierra sola, el cursor avanza y los temas por debajo del 60% aparecen en el aviso de repaso.
8. "¿Estoy listo?" ya no muestra el plan de 7 días sino el enlace a Arturo.
9. El Temario sigue funcionando, y su botón "Flashcards del tema" ahora trae las tarjetas de ese tema.
10. La consola no tiene errores en ningún paso.

- [ ] **Step 10: Commit**

```bash
git add assets/js/motor.js assets/js/vistas/paneles.js assets/js/vistas/apuntes.js assets/js/vistas/sesion.js assets/js/vistas/flashcards.js assets/js/vistas/temario.js
git commit -m "Arturo guia toda la app: inicio, apuntes, preguntas y tarjetas"
```

---

## Notas para quien ejecute esto

- **El validador es la red.** Ejecutarlo después de cada tarea, no solo al final. Si una comprobación de material falla (un tema sin apunte, con pocas preguntas o pocas tarjetas), es un dato real del banco: anotarlo y preguntar antes de bajar el umbral.
- **Los archivos nuevos se escriben con `Write`.** Está documentado en este proyecto que un heredoc de Bash falla con archivos grandes.
- **Cuidado con los apóstrofos** dentro de las cadenas de texto: las cadenas van en comillas simples y un apóstrofo sin escapar rompe el archivo entero.
- **No tocar `datos/`.** Esta función no añade ni modifica ninguna pregunta, apunte ni tarjeta.
- **El plan de 7 días se retira de la interfaz pero no se borra del código.** Si al final se prefiere conservarlo, lo único que hay que revertir es el Step 3 de la Task 8.
