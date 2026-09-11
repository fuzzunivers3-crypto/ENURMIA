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

fin();
