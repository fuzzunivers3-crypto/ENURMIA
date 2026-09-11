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

fin();
