/* ============================================================
   VALIDADOR DE CASOS INTERACTIVOS Y PACIENTES VIRTUALES
   Se ejecuta con:   node herramientas_validar_casos.js

   Lo que mas importa aqui no es que el texto este bonito: es que
   el arbol de decisiones NO tenga callejones sin salida. Un `sig`
   que apunta a un nodo inexistente deja al estudiante encerrado a
   mitad de caso, y eso no se ve leyendo el archivo.
   ============================================================ */

const fs = require('fs');
const path = require('path');

global.window = global;

function cargar(rel){
  (0, eval)(fs.readFileSync(path.join(__dirname, rel), 'utf8'));
}

/* Todos los archivos de casos, en el orden de app.html */
const dir = fs.readdirSync(path.join(__dirname, 'datos')).filter(f => f.endsWith('.js'));
['casos.js'].concat(dir.filter(f => /^casos-/.test(f)).sort())
  .forEach(function (f) {
    if (fs.existsSync(path.join(__dirname, 'datos', f))) cargar('datos/' + f);
  });

const CASOS = window.CASOS || [];
const PACIENTES = window.PACIENTES || [];

let pasadas = 0;
const fallos = [];
function ok(cond, msg){ if (cond) pasadas++; else fallos.push(msg); }
function igual(a, b, msg){
  ok(a === b, msg + '  (esperaba ' + JSON.stringify(b) + ', salio ' + JSON.stringify(a) + ')');
}
function titulo(t){ console.log('\n- ' + t); }

/* ============================================================
   1. Los casos interactivos
   ============================================================ */
titulo('Casos interactivos: ' + CASOS.length);

const idsCaso = {};
CASOS.forEach(function (c) {
  const donde = 'caso ' + (c.id || '(sin id)');

  ok(!!c.id, donde + ': tiene id');
  ok(!idsCaso[c.id], donde + ': el id no esta repetido');
  idsCaso[c.id] = 1;

  ['titulo', 'esp', 'resumen', 'paciente', 'vitales', 'nodos'].forEach(function (k) {
    ok(c[k] !== undefined, donde + ': tiene ' + k);
  });
  ok(typeof c.dif === 'number' && c.dif >= 1 && c.dif <= 5, donde + ': dificultad entre 1 y 5');

  /* La regla del banco: nada entra sin bibliografia. Un arbol de
     decisiones ensena conducta en varios pasos, asi que con mas razon. */
  ok(!!c.ref && c.ref.length > 10, donde + ': tiene bibliografia');

  if (!c.nodos) return;
  const nombres = Object.keys(c.nodos);
  ok(nombres.indexOf('inicio') >= 0, donde + ': tiene nodo de inicio');

  const alcanzados = {};
  let finales = 0;

  nombres.forEach(function (n) {
    const nodo = c.nodos[n];
    const aqui = donde + ', nodo "' + n + '"';

    if (nodo.final){
      finales++;
      ok(!!nodo.texto, aqui + ': el final tiene texto');
      ok(!!nodo.nivel, aqui + ': el final tiene nivel');
      ok(!!nodo.dx, aqui + ': el final dice el diagnostico');
      return;
    }

    ok(!!nodo.texto, aqui + ': tiene texto');
    /* Una sola opcion es legitimo: es un embudo, el camino de vuelta
       tras una decision equivocada. Lo que no vale es ninguna. */
    ok(Array.isArray(nodo.opciones) && nodo.opciones.length >= 1,
       aqui + ': tiene al menos una opcion');

    (nodo.opciones || []).forEach(function (o, i) {
      const op = aqui + ', opcion ' + (i + 1);
      ok(!!o.txt, op + ': tiene texto');
      ok(typeof o.pts === 'number', op + ': tiene puntos');
      /* Sin retro, una decision mala no ensena nada: el estudiante ve
         que perdio puntos y no sabe por que. */
      ok(!!o.retro && o.retro.length > 20, op + ': explica por que');
      /* EL FALLO QUE IMPORTA: un sig a un nodo que no existe deja al
         estudiante encerrado a mitad de caso. */
      ok(c.nodos[o.sig] !== undefined,
         op + ': su sig "' + o.sig + '" existe como nodo');
      alcanzados[o.sig] = 1;
    });
  });

  ok(finales > 0, donde + ': tiene al menos un final');

  /* Nodos huerfanos: escritos pero inalcanzables. No rompen nada, pero
     son trabajo tirado y casi siempre significan un sig mal escrito. */
  const huerfanos = nombres.filter(function (n) {
    return n !== 'inicio' && !alcanzados[n];
  });
  igual(huerfanos.length, 0, donde + ': sin nodos inalcanzables' +
    (huerfanos.length ? ' (' + huerfanos.join(', ') + ')' : ''));
});

/* ============================================================
   2. Los pacientes virtuales
   ============================================================ */
titulo('Pacientes virtuales: ' + PACIENTES.length);

const idsPac = {};
PACIENTES.forEach(function (p) {
  const donde = 'paciente ' + (p.id || '(sin id)');

  ok(!!p.id, donde + ': tiene id');
  ok(!idsPac[p.id], donde + ': el id no esta repetido');
  idsPac[p.id] = 1;

  ['titulo', 'edad', 'sexo', 'esp', 'apertura', 'vitales',
   'dxCorrecto', 'dxOpciones', 'tratamiento', 'tratamientoOpciones',
   'interrogatorio', 'examen', 'estudios', 'debiste', 'ensena'].forEach(function (k) {
    ok(p[k] !== undefined, donde + ': tiene ' + k);
  });

  ok(!!p.ref && p.ref.length > 10, donde + ': tiene bibliografia');
  ok(typeof p.dif === 'number' && p.dif >= 1 && p.dif <= 5, donde + ': dificultad entre 1 y 5');

  /* La respuesta correcta tiene que estar entre las opciones, o el
     estudiante no puede acertar ni queriendo. */
  ok((p.dxOpciones || []).indexOf(p.dxCorrecto) >= 0,
     donde + ': el diagnostico correcto esta entre las opciones');
  ok((p.tratamientoOpciones || []).indexOf(p.tratamiento) >= 0,
     donde + ': el tratamiento correcto esta entre las opciones');
  ok((p.dxOpciones || []).length >= 4, donde + ': al menos 4 diagnosticos para elegir');
  ok((p.tratamientoOpciones || []).length >= 4, donde + ': al menos 4 tratamientos');

  /* El interrogatorio es el corazon del ejercicio: si tiene pocas
     entradas, el estudiante pregunta y no recibe nada. */
  ok((p.interrogatorio || []).length >= 8,
     donde + ': al menos 8 grupos de preguntas (tiene ' + (p.interrogatorio || []).length + ')');

  let sinClaves = 0, sinValor = 0;
  (p.interrogatorio || []).forEach(function (e) {
    if (!Array.isArray(e.claves) || !e.claves.length || !e.r) sinClaves++;
    if (['clave', 'util', 'neutro', 'ruido'].indexOf(e.valor) < 0) sinValor++;
  });
  igual(sinClaves, 0, donde + ': cada entrada del interrogatorio tiene claves y respuesta');
  igual(sinValor, 0, donde + ': cada entrada tiene un valor valido (clave/util/neutro/ruido)');

  /* Al menos una pregunta tiene que ser la que decide el caso. */
  const claves = (p.interrogatorio || []).filter(function (e) { return e.valor === 'clave'; });
  ok(claves.length >= 1, donde + ': al menos una pregunta es la que decide');

  ok((p.debiste || []).length >= 2, donde + ': dice al menos dos cosas que debiste preguntar');
  ok(!!p.ensena && p.ensena.length > 40, donde + ': cierra con lo que ensena el caso');
});

/* ============================================================
   3. El reparto por especialidad
   ============================================================ */
titulo('Reparto');

const DISTRIBUCION = {
  'Medicina Interna':0.28, 'Pediatría':0.15, 'Ginecología y Obstetricia':0.14,
  'Cirugía':0.08, 'Farmacología':0.08, 'Ciencias Básicas':0.07,
  'Epidemiología':0.05, 'Salud Pública':0.05, 'Emergencias':0.04,
  'Psiquiatría':0.03, 'Bioética':0.02, 'Medicina Familiar':0.01
};

function reparto(lista, nombre){
  const por = {};
  lista.forEach(function (x) { por[x.esp] = (por[x.esp] || 0) + 1; });
  console.log('  ' + nombre + ' (' + lista.length + '):');
  Object.keys(por).sort(function (a, b) { return por[b] - por[a]; })
    .forEach(function (e) {
      const esperado = DISTRIBUCION[e] !== undefined
        ? ' (peso ENURM ' + Math.round(DISTRIBUCION[e] * 100) + '%, aqui ' +
          Math.round(por[e] / lista.length * 100) + '%)' : ' (fuera de la distribucion)';
      console.log('     ' + por[e] + '  ' + e + esperado);
    });
  const fuera = Object.keys(por).filter(function (e) { return DISTRIBUCION[e] === undefined; });
  igual(fuera.length, 0, nombre + ': ninguna especialidad fuera de la distribucion del ENURM' +
    (fuera.length ? ' (' + fuera.join(', ') + ')' : ''));
}

reparto(CASOS, 'Casos interactivos');
reparto(PACIENTES, 'Pacientes virtuales');

/* ============================================================
   4. El objetivo
   ============================================================ */
titulo('Objetivo');
const META = 50;
ok(CASOS.length >= META, 'hay al menos ' + META + ' casos interactivos (van ' + CASOS.length + ')');
ok(PACIENTES.length >= META, 'hay al menos ' + META + ' pacientes virtuales (van ' + PACIENTES.length + ')');

console.log('\n' + pasadas + ' comprobaciones pasadas.');
if (fallos.length){
  console.log(fallos.length + ' FALLOS:');
  fallos.forEach(function (f) { console.log('  x ' + f); });
  process.exit(1);
}
console.log('Todo en orden.');
