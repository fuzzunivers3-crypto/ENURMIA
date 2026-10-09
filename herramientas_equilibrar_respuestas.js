/* ============================================================
   EQUILIBRAR LA POSICION DE LA RESPUESTA CORRECTA
   En los bancos curados (datos/banco-01..27) la correcta caia casi
   siempre en la opcion b: se podia acertar sin saber. Este script
   reordena las opciones de cada pregunta para que la correcta quede
   repartida a partes iguales entre a, b, c y d dentro de cada
   archivo, sin tocar ningun texto:
     - la opcion correcta se mueve a su nueva posicion y los
       distractores conservan su orden relativo;
     - "ok" apunta a la nueva posicion;
     - las explicaciones por distractor ("no") se re-indexan;
     - se marca ord:2 para que Arturo no reutilice re-explicaciones
       guardadas con el orden viejo.
   Es determinista (misma entrada, misma salida) e idempotente: una
   pregunta con ord:2 no se vuelve a tocar.
   Uso:  node herramientas_equilibrar_respuestas.js [--aplicar]
   Sin --aplicar solo informa lo que haria.
   ============================================================ */
const fs = require('fs'), path = require('path');
const APLICAR = process.argv.includes('--aplicar');
const DIR = path.join(__dirname, 'datos');
const archivos = fs.readdirSync(DIR).filter(f => /^banco-\d\d-/.test(f)).sort();

/* ---------- escaner minimo de JS: salta cadenas y comentarios ---------- */
function fin(src, i, abre, cierra){
  let prof = 0;
  for (; i < src.length; i++) {
    const c = src[i];
    if (c === '"' || c === "'" || c === '`') { const q = c; i++; while (i < src.length && src[i] !== q) { if (src[i] === '\\') i++; i++; } continue; }
    if (c === '/' && src[i + 1] === '/') { while (i < src.length && src[i] !== '\n') i++; continue; }
    if (c === '/' && src[i + 1] === '*') { i = src.indexOf('*/', i + 2) + 1; continue; }
    if (c === abre) prof++;
    else if (c === cierra) { prof--; if (prof === 0) return i; }
  }
  throw new Error('sin cierre');
}
/* rango [desde, hasta) de la propiedad `clave:` dentro del objeto [a, b) */
function prop(src, a, b, clave){
  const re = new RegExp('(^|[\\s,{])' + clave + '\\s*:\\s*', 'g'); re.lastIndex = a;
  let m;
  while ((m = re.exec(src)) && m.index < b) {
    const v = m.index + m[0].length;
    // la coincidencia no debe estar dentro de una cadena: comprobamos que estamos a profundidad 1 del objeto
    if (profundidad(src, a, m.index + m[1].length) !== 1) continue;
    const c = src[v];
    if (c === '[') return [v, fin(src, v, '[', ']') + 1];
    if (c === '{') return [v, fin(src, v, '{', '}') + 1];
    const e = /[\d.]+/.exec(src.slice(v)); return [v, v + e[0].length];
  }
  return null;
}
function profundidad(src, a, hasta){
  let p = 0;
  for (let i = a; i < hasta; i++) {
    const c = src[i];
    if (c === '"' || c === "'" || c === '`') { const q = c; i++; while (i < hasta && src[i] !== q) { if (src[i] === '\\') i++; i++; } continue; }
    if (c === '/' && src[i + 1] === '/') { while (i < hasta && src[i] !== '\n') i++; continue; }
    if (c === '/' && src[i + 1] === '*') { i = src.indexOf('*/', i + 2) + 1; continue; }
    if (c === '{' || c === '[') p++; else if (c === '}' || c === ']') p--;
  }
  return p;
}
const lit = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";

/* posiciones objetivo: ciclos barajados de 0..n-1 con semilla fija, sin repetir la misma letra dos veces seguidas */
function objetivos(cuantas, n, semilla){
  let s = semilla >>> 0; const r = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  const out = [];
  while (out.length < cuantas) {
    let ciclo = [...Array(n).keys()];
    for (let i = n - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [ciclo[i], ciclo[j]] = [ciclo[j], ciclo[i]]; }
    if (out.length && ciclo[0] === out[out.length - 1]) ciclo.push(ciclo.shift());
    out.push(...ciclo);
  }
  return out.slice(0, cuantas);
}

let total = 0, movidas = 0;
const informe = [];
for (const f of archivos) {
  const ruta = path.join(DIR, f);
  let src = fs.readFileSync(ruta, 'utf8');
  // eval solo sobre los archivos de datos de este mismo repositorio (no hay entrada externa)
  global.window = {}; eval(src.replace(/^﻿/, ''));
  const qs = window.BANCO || [];
  const antes = qs.map(q => q.ok);
  const meta = objetivos(qs.length, 4, [...f].reduce((h, c) => h * 31 + c.charCodeAt(0), 7));
  // se edita de atras hacia adelante para no desplazar los indices pendientes
  const cambios = [];
  qs.forEach((q, k) => {
    total++;
    if (q.ord === 2 || !Array.isArray(q.ops) || q.ops.length !== 4) return;
    const nueva = meta[k];
    const quitar = q.ops.filter((_, i) => i !== q.ok);
    const ops = quitar.slice(); ops.splice(nueva, 0, q.ops[q.ok]);
    const mapa = {}; q.ops.forEach((o, i) => { mapa[i] = ops.indexOf(o); });
    const no = {}; Object.keys(q.no || {}).forEach(i => { no[mapa[i]] = q.no[i]; });
    const ini = src.search(new RegExp("id\\s*:\\s*['\"]" + q.id.replace(/[-]/g, '\\-') + "['\"]"));
    if (ini < 0) throw new Error('no encuentro ' + q.id);
    const a = src.lastIndexOf('{', ini), b = fin(src, a, '{', '}');
    cambios.push({ a, b, q, ops, ok: nueva, no });
    if (nueva !== q.ok) movidas++;
  });
  cambios.sort((x, y) => y.a - x.a).forEach(({ a, b, q, ops, ok, no }) => {
    let obj = src.slice(a, b + 1);
    const reemplazar = (clave, valor) => {
      const r = prop(obj, 0, obj.length, clave); if (!r) throw new Error(q.id + ' sin ' + clave);
      obj = obj.slice(0, r[0]) + valor + obj.slice(r[1]);
    };
    reemplazar('ops', '[' + ops.map(lit).join(',') + ']');
    reemplazar('ok', String(ok));
    if (q.no) reemplazar('no', '{' + Object.keys(no).sort().map(k => k + ':' + lit(no[k])).join(',\n    ') + '}');
    obj = obj.replace(/(\bok\s*:\s*\d+)/, '$1, ord:2');
    src = src.slice(0, a) + obj + src.slice(b + 1);
  });

  // verificacion: misma pregunta, mismas opciones, misma correcta, cada "no" sobre el mismo texto
  global.window = {}; eval(src.replace(/^﻿/, ''));
  const nuevos = window.BANCO;
  qs.forEach((q, k) => {
    const n = nuevos[k];
    if (n.id !== q.id || n.ops[n.ok] !== q.ops[q.ok] || n.ops.slice().sort().join('|') !== q.ops.slice().sort().join('|')) throw new Error('verificacion ops ' + q.id);
    Object.keys(q.no || {}).forEach(i => { const j = n.ops.indexOf(q.ops[i]); if (n.no[j] !== q.no[i]) throw new Error('verificacion no ' + q.id); });
    for (const c of ['exp', 'clave', 'enunciado', 'trampa', 'caso']) if (JSON.stringify(n[c]) !== JSON.stringify(q[c])) throw new Error('verificacion ' + c + ' ' + q.id);
  });
  const cuenta = (arr) => [0, 1, 2, 3].map(i => 'abcd'[i] + ':' + arr.filter(x => x === i).length).join(' ');
  informe.push(f.padEnd(46) + ' antes ' + cuenta(antes) + '   ahora ' + cuenta(nuevos.map(q => q.ok)));
  if (APLICAR) fs.writeFileSync(ruta, src);
}
console.log(informe.join('\n'));
console.log('\n' + total + ' preguntas revisadas, ' + movidas + ' con la correcta en otra posición. ' + (APLICAR ? 'APLICADO.' : 'Simulacro: añade --aplicar para escribir.'));

/* ---------- segunda pasada: preguntas anidadas (simulacro diagnostico y practica de cronicas) ----------
   Aqui las preguntas no tienen id propio, asi que se recorren en el orden en que aparecen en
   el archivo: cada objeto literal que tenga ops (lista) y ok (numero) a su primer nivel. */
const ANIDADOS = ['casos-dx.js', 'cronicas-1.js', 'cronicas-2.js'];
const evaluar = (txt) => (0, eval)('(' + txt + ')'); // solo literales de los datos de este repositorio
function objetosConOps(src){
  const out = [];
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (c === '"' || c === "'" || c === '`') { const q = c; i++; while (i < src.length && src[i] !== q) { if (src[i] === '\\') i++; i++; } continue; }
    if (c === '/' && src[i + 1] === '/') { while (i < src.length && src[i] !== '\n') i++; continue; }
    if (c === '/' && src[i + 1] === '*') { i = src.indexOf('*/', i + 2) + 1; continue; }
    if (c !== '{') continue;
    const b = fin(src, i, '{', '}');
    const pOps = prop(src, i, b, 'ops'), pOk = prop(src, i, b, 'ok');
    if (pOps && pOk && /^\d+$/.test(src.slice(pOk[0], pOk[1])) && src[pOps[0]] === '[') {
      let q; try { q = evaluar(src.slice(i, b + 1)); } catch (e) { continue; }
      if (Array.isArray(q.ops) && typeof q.ok === 'number' && q.ops.every(o => typeof o === 'string')) out.push({ a: i, b, q });
    }
  }
  return out;
}
let total2 = 0, movidas2 = 0;
for (const f of ANIDADOS) {
  const ruta = path.join(DIR, f);
  let src = fs.readFileSync(ruta, 'utf8');
  const objs = objetosConOps(src);
  const antes = objs.map(o => o.q.ok);
  const n = Math.min(...objs.map(o => o.q.ops.length));
  const meta = objetivos(objs.length, n, [...f].reduce((h, c) => h * 31 + c.charCodeAt(0), 11));
  objs.slice().reverse().forEach((o) => {
    const k = objs.indexOf(o), q = o.q; total2++;
    if (q.ord === 2) return;
    const nueva = Math.min(meta[k], q.ops.length - 1);
    const ops = q.ops.filter((_, i) => i !== q.ok); ops.splice(nueva, 0, q.ops[q.ok]);
    let obj = src.slice(o.a, o.b + 1);
    const r1 = prop(obj, 0, obj.length, 'ops'); obj = obj.slice(0, r1[0]) + '[' + ops.map(lit).join(', ') + ']' + obj.slice(r1[1]);
    const r2 = prop(obj, 0, obj.length, 'ok'); obj = obj.slice(0, r2[0]) + nueva + ', ord: 2' + obj.slice(r2[1]);
    if (nueva !== q.ok) movidas2++;
    src = src.slice(0, o.a) + obj + src.slice(o.b + 1);
  });
  const despues = objetosConOps(src);
  if (despues.length !== objs.length) throw new Error('verificacion cuenta ' + f);
  despues.forEach((o, k) => {
    const v = objs[k].q, nq = o.q;
    if (nq.ops[nq.ok] !== v.ops[v.ok] || nq.ops.slice().sort().join('|') !== v.ops.slice().sort().join('|')) throw new Error('verificacion ' + f + ' #' + k);
    for (const c of ['q', 'exp', 'esc', 'titulo']) if (JSON.stringify(nq[c]) !== JSON.stringify(v[c])) throw new Error('verificacion ' + c + ' ' + f + ' #' + k);
  });
  const cuenta = (arr) => [0, 1, 2, 3, 4].filter(i => i < 5).map(i => 'abcde'[i] + ':' + arr.filter(x => x === i).length).join(' ');
  console.log(f.padEnd(46) + ' antes ' + cuenta(antes) + '   ahora ' + cuenta(despues.map(o => o.q.ok)));
  if (APLICAR) fs.writeFileSync(ruta, src);
}
console.log(total2 + ' preguntas anidadas revisadas, ' + movidas2 + ' movidas. ' + (APLICAR ? 'APLICADO.' : 'Simulacro.'));
