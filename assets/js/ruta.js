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

  function invalidar(){
    cTemas = null; cProg = null;
    cIndice = null; cIndiceLargo = -1;
    cApuntes = null; cApProg = null;
  }

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
    preguntasDe: preguntasDe, tarjetasDe: tarjetasDe, claveApunte: claveApunte,
    _orden: ordenIntercalado, _tandas: repartirTandas
  };
})();
