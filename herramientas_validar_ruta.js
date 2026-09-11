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
function titulo(t){ console.log('\n- ' + t); }
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

/* ============================================================
   4. El material de cada tema
   ============================================================ */
titulo('Material por tema');

reiniciar();

igual(Ruta.preguntasDe('Tema que no existe').length, 0, 'un tema inexistente no devuelve preguntas');
ok(Ruta.preguntasDe('Hipertensión arterial').length > 0,
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
if (flacos.length) flacos.forEach(function (f) { console.log('    . ' + f); });

/* Las tarjetas de un tema tienen que venir de sus preguntas: es lo que
   hoy NO hace el boton "Flashcards del tema" del Temario. */
const idsHTA = {};
Ruta.preguntasDe('Hipertensión arterial').forEach(function (q) { idsHTA[q.id] = 1; });
const cartasHTA = Ruta.tarjetasDe('Hipertensión arterial');
ok(cartasHTA.length > 0, 'hipertension arterial tiene flashcards');
ok(cartasHTA.every(function (c) { return !!idsHTA[c.origen]; }),
   'todas las flashcards de un tema nacen de preguntas de ese tema');

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
igual(ta.n, 5, 'con tam=5 la primera tanda trae 5 temas');
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

/* ============================================================
   8. Cierre de tanda y reinyeccion
   ============================================================ */
titulo('Cierre de tanda');

/* Genera el examen DE VERDAD y lo responde segun el tema al que se
   asigno cada pregunta. Medir por `claves` no vale: las de dos temas se
   solapan y el resultado saldria falseado. Los temas que no aparezcan en
   `pctPorTema` se responden al 100%. */
function examenReal(pctPorTema){
  const qs = Ruta.simulacroDeTanda();
  const mapa = Ruta.activa().sim || {};
  const porTema = {};
  qs.forEach(function (q) {
    const t = mapa[q.id] || '(relleno)';
    (porTema[t] = porTema[t] || []).push(q);
  });
  const respuestas = [];
  Object.keys(porTema).forEach(function (t) {
    const lista = porTema[t];
    const pct = pctPorTema[t] === undefined ? 100 : pctPorTema[t];
    const aciertos = Math.round(lista.length * pct / 100);
    lista.forEach(function (q, i) { respuestas.push({ qid:q.id, ok: i < aciertos }); });
  });
  return { respuestas: respuestas };
}

reiniciar();
const rc = Ruta.crear(5);
const temasT1 = Ruta.tandaActual().temas.map(function (f) { return f.tema; });
temasT1.forEach(estudiarTema);
Ruta.invalidar();

/* El primero sale al 40% (flojo), los demas al 90%. */
const notas1 = {};
temasT1.forEach(function (t, i) { notas1[t] = i === 0 ? 40 : 90; });
const res1 = Ruta.cerrarTanda(examenReal(notas1));

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

/* Cada tema se mide SOLO con sus preguntas asignadas. Es lo que fallaba
   midiendo por claves: el tema al 40% se llevaba el credito de las
   preguntas de preeclampsia porque las dos enganchan "hipertensi". */
ok(res1.porTema[temasT1[0]] < 60, 'el tema al 40% se mide como suyo, sin credito ajeno');
ok(res1.porTema[temasT1[1]] >= 60, 'los temas al 90% se miden por encima del corte');

/* La tanda se cierra siempre, aunque salga fatal. */
reiniciar();
const rz = Ruta.crear(5);
const temasZ = Ruta.tandaActual().temas.map(function (f) { return f.tema; });
temasZ.forEach(estudiarTema);
Ruta.invalidar();
const notasZ = {};
temasZ.forEach(function (t) { notasZ[t] = 0; });
Ruta.cerrarTanda(examenReal(notasZ));
igual(Ruta.activa().cursor, 5, 'con 0% la tanda se cierra igual');
igual(Ruta.activa().repaso.length, 5, 'con 0% los cinco temas quedan flojos');

/* Un tema flojo se recupera con >= 60% y al menos 3 preguntas. */
reiniciar();
const rr = Ruta.crear(5);
const temasR = Ruta.tandaActual().temas.map(function (f) { return f.tema; });
temasR.forEach(estudiarTema);
Ruta.invalidar();
const notasR = {}; notasR[temasR[0]] = 20;
Ruta.cerrarTanda(examenReal(notasR));
igual(Ruta.activa().repaso.length, 1, 'el tema queda en la cola');

const temasT2 = Ruta.tandaActual().temas.map(function (f) { return f.tema; });
temasT2.forEach(estudiarTema);
Ruta.invalidar();
/* El de la cola vuelve en el bloque de repaso; esta vez se responde bien. */
const res2 = Ruta.cerrarTanda(examenReal({}));
igual(res2.recuperados.length, 1, 'el tema flojo se recupera al sacar 100%');
igual(Ruta.activa().repaso.length, 0, 'la cola de repaso queda vacia');

/* Con menos de 3 preguntas no se rescata: una pregunta afortunada no
   puede sacar un tema de la cola. Se arma el mapa a mano porque el
   selector normal le habria dado seis. */
reiniciar();
const rp = Ruta.crear(5);
const tp = rp.orden[0];
rp.cursor = 5; rp.tanda = 2; rp.repaso = [tp];
Ruta.invalidar();
const dos = Ruta.preguntasDe(tp).slice(0, 2);
rp.sim = {};
dos.forEach(function (q) { rp.sim[q.id] = tp; });
Ruta.cerrarTanda({ respuestas: dos.map(function (q) { return { qid:q.id, ok:true }; }) });
igual(Ruta.activa().repaso.length, 1, 'con 2 preguntas al 100% el tema sigue en la cola');

reiniciar();
const rq = Ruta.crear(5);
const tq = rq.orden[0];
rq.cursor = 5; rq.tanda = 2; rq.repaso = [tq];
Ruta.invalidar();
const tres = Ruta.preguntasDe(tq).slice(0, 3);
rq.sim = {};
tres.forEach(function (q) { rq.sim[q.id] = tq; });
Ruta.cerrarTanda({ respuestas: tres.map(function (q) { return { qid:q.id, ok:true }; }) });
igual(Ruta.activa().repaso.length, 0, 'con 3 preguntas al 100% si se rescata');

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
var notasF = {}; notasF[ultimos[0]] = 20;
Ruta.cerrarTanda(examenReal(notasF));
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

fin();
