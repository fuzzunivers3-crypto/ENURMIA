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
  /* En UNIRMIA, ademas de filtrar por programa, solo entran los bloques
     (materias) que el estudiante activo eligio: el mismo criterio que ya
     aplican Temario, Apuntes y Casos, para que la ruta no le arme un
     recorrido con materias que todavia no esta cursando. */
  function bloques(){
    const prog = Almacen.programa();
    let lista = (window.TEMARIO || []).filter(function (b) {
      return prog === 'unirm' ? b.programa === 'unirm' : b.programa !== 'unirm';
    });
    if (prog === 'unirm' && window.Almacen && Almacen.materiasUnirm){
      const activas = Almacen.materiasUnirm();
      lista = lista.filter(function (b) { return activas.indexOf(b.bloque) >= 0; });
    }
    return lista;
  }

  let cTemas = null, cProg = null, cMaterias = '\0';
  function temas(){
    const p = Almacen.programa();
    const clave = (p === 'unirm' && window.Almacen && Almacen.materiasUnirm)
      ? Almacen.materiasUnirm().slice().sort().join('|') : '';
    if (cTemas && cProg === p && cMaterias === clave) return cTemas;
    cProg = p; cMaterias = clave;
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
    cPorTema = {}; cTarjTema = {};
  }

  /* ---------- emparejar temas con el banco ---------- */
  /* Cada tema del temario lleva `claves`: las palabras con las que se
     engancha con las preguntas. Donde aparece la clave importa tanto
     como que aparezca:

       NIVEL 1  tema / sub / tags   -> la pregunta TRATA de eso
       NIVEL 2  clave / enunciado   -> tiene que ver, sirve de relleno
       NUNCA    caso / explicacion  -> mencion de pasada

     El caso clinico es narrativa: toda vinneta reporta la presion
     arterial en las constantes vitales, asi que buscar ahi hacia que la
     clave "presion arterial" casara con medio banco y estudiando
     Hipertension arterial salieran preguntas de neumonia, preeclampsia o
     sindrome neuroleptico maligno. Medido: 128 de 162 eran ruido.

     Se devuelve nivel 1 primero y nivel 2 detras, de modo que quien
     corte por las diez primeras se lleva lo bueno y los temas con poco
     material propio no se quedan sin nada. */
  function norm(s){
    return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  /* La clave tiene que empezar en frontera de palabra. Puede continuar
     (hipertensi engancha hipertension e hipertensiva, que es lo que se
     quiere) pero no arrancar a mitad: si no, `parto` casa dentro de
     posparto y `gota` dentro de gotas. */
  function casa(txt, k){
    let i = txt.indexOf(k);
    while (i >= 0){
      const antes = i === 0 ? ' ' : txt.charAt(i - 1);
      if (!/[a-z0-9]/.test(antes)) return true;
      i = txt.indexOf(k, i + 1);
    }
    return false;
  }

  let cIndice = null, cIndiceLargo = -1;
  function indice(){
    const banco = Motor.bancoActivo();
    if (cIndice && cIndiceLargo === banco.length) return cIndice;
    cIndiceLargo = banco.length;
    /* El emparejamiento por tema cuelga de este indice, asi que se tira
       exactamente cuando el indice se rehace: ni antes (perderiamos el
       memo en cada repintado) ni despues (serviriamos preguntas de un
       banco que ya cambio). */
    cPorTema = {}; cTarjTema = {};
    cIndice = banco.map(function (q) {
      return {
        q: q,
        deQue: norm([q.tema, q.sub, (q.tags || []).join(' ')].join(' ')),
        roza: norm([q.clave, q.enunciado].join(' '))
      };
    });
    return cIndice;
  }

  /* Emparejar un tema recorre las 2.279 preguntas del banco, y la
     pantalla del recorrido lo pide cientos de veces por pintado: una vez
     por tema para los tres pasos, otra para las tarjetas, y otra por cada
     comparacion al ordenar. Sin memoria, pintar un bloque de 41 temas
     tardaba once segundos. Se guarda por tema y se tira entero en
     invalidar(), igual que el indice. */
  let cPorTema = {}, cTarjTema = {};

  function preguntasDe(nombre){
    /* indice() PRIMERO, y solo despues se mira el memo: es indice() quien
       detecta que el banco cambio de tamano y tira el memo. Al reves, el
       memo cortocircuitaba esa comprobacion y un estudiante que apagara
       el banco extendido seguia viendo preguntas del MIR en sus temas. */
    const idx = indice();
    if (cPorTema[nombre]) return cPorTema[nombre];
    const t = temaPorNombre(nombre);
    if (!t) return [];
    const ks = t.claves.map(norm).filter(Boolean);
    if (!ks.length) return [];
    const n1 = [], n2 = [];
    idx.forEach(function (x) {
      if (ks.some(function (k) { return casa(x.deQue, k); })) n1.push(x.q);
      else if (ks.some(function (k) { return casa(x.roza, k); })) n2.push(x.q);
    });
    cPorTema[nombre] = n1.concat(n2);
    return cPorTema[nombre];
  }

  function tarjetasDe(nombre){
    /* preguntasDe() primero, por lo mismo: puede tirar los dos memos. */
    const qs = preguntasDe(nombre);
    if (cTarjTema[nombre]) return cTarjTema[nombre];
    const ids = {};
    qs.forEach(function (q) { ids[q.id] = 1; });
    cTarjTema[nombre] = Tarjetas.mazo().filter(function (c) {
      return c.origen && ids[c.origen];
    });
    return cTarjTema[nombre];
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
  /* Los bloques que el estudiante puede meter en su recorrido. No todo el
     mundo prepara el temario entero de golpe: hay quien viene a cerrar
     Pediatria antes del examen y no quiere ver cardiologia por el medio. */
  function bloquesDisponibles(){
    return bloques().map(function (b) {
      return { bloque: b.bloque, em: b.em, n: b.temas.length };
    });
  }

  /* Una lista vacia o ausente significa "todos": es lo que quiere quien no
     toca las casillas, y evita que un recorrido nazca sin temas. */
  function normalizarBloques(elegidos){
    const todos = bloques().map(function (b) { return b.bloque; });
    if (!elegidos || !elegidos.length) return todos;
    const validos = elegidos.filter(function (x) { return todos.indexOf(x) >= 0; });
    return validos.length ? validos : todos;
  }

  function ordenIntercalado(elegidos){
    const marcas = [];
    const filtro = normalizarBloques(elegidos);
    bloques().filter(function (b) {
      return filtro.indexOf(b.bloque) >= 0;
    }).forEach(function (b, bi) {
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
       concatenan, no sobre los temas seguidos. Si no, una tanda quedaria
       a caballo entre dos bloques y al cerrar el bloque el cursor caeria
       a mitad de tanda: el recorrido se encallaria con una tanda que ya
       no se puede cerrar. Asi cada frontera de bloque es tambien
       frontera de tanda. */
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

  function borrar(){
    const d = datos();
    if (!d) return;
    d.ruta = null;
    guardar();
  }

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
         vuelta naceria completa y se saltaria el recorrido entero: por
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

    /* De que tema se pregunta cada una. Hace falta guardarlo: medir un
       tema volviendo a emparejar por `claves` al terminar el examen da
       un resultado falso, porque las claves de dos temas se solapan
       (`hipertensi` engancha tambien las preguntas de preeclampsia) y el
       tema se llevaria el credito de las preguntas de otro. */
    const mapa = {};

    function tomar(lista, cuantos, tema){
      let puestos = 0;
      for (let i = 0; i < lista.length && puestos < cuantos; i++){
        const q = lista[i];
        if (usados[q.id]) continue;
        usados[q.id] = 1;
        salida.push(q);
        if (tema) mapa[q.id] = tema;
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
      const exp = qs.filter(function (q) { return !!q.exp; });
      /* Se baraja solo dentro de las primeras. preguntasDe devuelve las
         que tratan del tema delante y el relleno detras: barajar la
         lista entera volveria a mezclar lo uno con lo otro. */
      const ventana = Math.max(cupo * 3, 12);
      const conExp = barajar(exp.slice(0, ventana)).concat(exp.slice(ventana));
      const sinExp = barajar(qs.filter(function (q) { return !q.exp; }));
      puestasTanda += tomar(conExp.concat(sinExp), cupo, f.tema);
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

    let puestasRepaso = 0;
    const cola = flojos.concat(resto);
    for (let i = 0; i < cola.length && puestasRepaso < nRepaso; i++){
      const qs = preguntasDe(cola[i]).filter(function (q) { return !!q.exp; });
      puestasRepaso += tomar(barajar(qs.slice(0, 12)).slice(0, 6),
                             nRepaso - puestasRepaso, cola[i]);
    }

    /* 3. Si aun falta (tanda 1, o temas muy delgados), lo cubre el
          selector general con la distribucion del examen real. Estas no
          se atribuyen a ningun tema del recorrido: no vienen de el. */
    let puestasRelleno = 0;
    if (salida.length < n){
      const falta = n - salida.length;
      const extra = Motor.seleccionar({ n: falta * 3, distribuida: true });
      puestasRelleno = tomar(extra, falta, null);
    }

    /* Se guarda en la ruta y no en una variable del modulo para que
       sobreviva a un refresco de la pagina a mitad de examen. */
    r.sim = mapa;
    guardar();

    ultimoReparto = {
      n: n, nTanda: nTanda, nRepaso: nRepaso,
      puestasTanda: puestasTanda,
      puestasRepaso: puestasRepaso,
      puestasRelleno: puestasRelleno
    };

    return barajar(salida).slice(0, n);
  }

  /* ---------- examinarse de UN tema al cerrarlo ---------- */
  /* Es opcional y no sustituye al examen de la tanda: sirve para medirse
     en caliente, recien estudiado el tema, en vez de esperar a que la
     tanda entera este hecha. Por eso no mueve el cursor ni cierra nada.
     Lo que si hace es adelantar la reinyeccion: un tema que se suspende
     aqui entra en la cola de repaso sin esperar al examen de la tanda. */
  function examenDeTema(nombre){
    const qs = preguntasDe(nombre);
    if (!qs.length) return [];
    const exp = qs.filter(function (q) { return !!q.exp; });
    const sin = qs.filter(function (q) { return !q.exp; });
    const n = Math.min(META_PREG, qs.length);
    /* Se baraja dentro de una ventana corta para no perder el orden por
       nivel que trae preguntasDe: primero las que tratan del tema. */
    const pozo = barajar(exp.slice(0, Math.max(n * 2, 12)))
                   .concat(exp.slice(Math.max(n * 2, 12)))
                   .concat(barajar(sin));
    return pozo.slice(0, n);
  }

  function minutosDeTema(nombre){
    return Math.max(2, Math.round(examenDeTema(nombre).length * 1.2));
  }

  function cerrarExamenDeTema(nombre, resultado){
    const r = activa();
    if (!r) return null;
    const resp = (resultado && resultado.respuestas) || [];
    if (!resp.length) return { pct: 0, solido: false };

    const pct = Math.round(
      resp.filter(function (x) { return x.ok; }).length / resp.length * 100);
    const solido = pct >= CORTE_FLOJO;

    if (!r.examenes) r.examenes = {};
    r.examenes[nombre] = pct;

    if (solido){
      const i = r.repaso.indexOf(nombre);
      if (i >= 0) r.repaso.splice(i, 1);
    } else if (r.repaso.indexOf(nombre) < 0){
      r.repaso.push(nombre);
    }
    guardar();
    return { pct: pct, solido: solido };
  }

  function notaDeTema(nombre){
    const r = activa();
    if (!r || !r.examenes) return null;
    const n = r.examenes[nombre];
    return (n === undefined) ? null : n;
  }

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
  /* Cuantas preguntas tendria el examen, sin llegar a armarlo. La vista
     lo necesita para anunciarlo en cada pintado, y armar el examen es
     caro: ordena los temas por dominio y eso recorre el banco y el mazo
     por cada comparacion. Llamarlo tres veces por pintado congelaba el
     navegador. */
  function tamExamenDeBloque(nombre){
    const ts = temasDeBloque(nombre);
    if (!ts.length) return 0;
    return Math.min(40, ts.reduce(function (a, t) {
      return a + preguntasDe(t).filter(function (q) { return !!q.exp; }).length;
    }, 0));
  }

  function examenDeBloque(nombre){
    const ts = temasDeBloque(nombre);
    if (!ts.length) return [];
    const n = tamExamenDeBloque(nombre);
    if (!n) return [];

    const usados = {};
    const salida = [];
    const mapa = {};
    const porTema = Math.max(1, Math.floor(n / ts.length));

    /* Los temas que peor llevas van primero, para que si el cupo no
       alcanza a todos se gaste donde hace falta. El dominio se calcula
       UNA vez por tema: dentro del comparador se recalcularia en cada
       comparacion, y cada calculo recorre el banco y el mazo. */
    const dom = {};
    ts.forEach(function (t) { dom[t] = dominioTema(t); });
    const orden = ts.slice().sort(function (a, b) { return dom[a] - dom[b]; });

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
    return Math.max(2, Math.round(tamExamenDeBloque(nombre) * 1.2));
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

    /* Cada tema se mide con las preguntas que se le asignaron al armar
       el examen, no volviendo a emparejar por `claves`: eso ultimo daria
       un resultado falso porque las claves de dos temas se solapan y el
       tema se llevaria el credito de las preguntas del otro.
       El emparejamiento por claves queda de reserva por si el mapa no
       esta (una ruta guardada antes de que esto existiera). */
    const mapa = r.sim || null;

    function medir(nombre){
      let mias;
      if (mapa){
        mias = resp.filter(function (x) { return mapa[x.qid] === nombre; });
      } else {
        const ids = {};
        preguntasDe(nombre).forEach(function (q) { ids[q.id] = 1; });
        mias = resp.filter(function (x) { return ids[x.qid]; });
      }
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
    r.sim = null;
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
    const resto = ordenIntercalado(r.bloques).filter(function (x) { return flojos.indexOf(x) < 0; });
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
    /* Un tema de un bloque que el estudiante no eligio no es un tema
       "nuevo" que le falte: es que no lo quiso. */
    const suyos = normalizarBloques(r.bloques);
    return temas().filter(function (t) {
      return !dentro[t.t] && suyos.indexOf(t.bloque) >= 0;
    }).map(function (t) { return t.t; });
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

  /* ---------- el hilo: el tema que Arturo acompana ---------- */
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

  return {
    activa: activa, crear: crear, borrar: borrar,
    proximoPaso: proximoPaso, hilo: hilo, abrirHilo: abrirHilo, cerrarHilo: cerrarHilo,
    pasosDe: pasosDe, tandaActual: tandaActual, avance: avance,
    simulacroDeTanda: simulacroDeTanda, minutosDeTanda: minutosDeTanda,
    tamanoSimulacro: tamanoSimulacro, _reparto: reparto,
    cerrarTanda: cerrarTanda, segundaVuelta: segundaVuelta,
    examenDeTema: examenDeTema, minutosDeTema: minutosDeTema,
    cerrarExamenDeTema: cerrarExamenDeTema, notaDeTema: notaDeTema,
    temasNuevos: temasNuevos, absorber: absorber,
    temas: temas, temaPorNombre: temaPorNombre, invalidar: invalidar,
    bloquesDisponibles: bloquesDisponibles,
    _ordenPorBloques: ordenPorBloques, temasDeBloque: temasDeBloque,
    porBloques: porBloques,
    esTransversal: esTransversal, bloquesAbiertos: bloquesAbiertos,
    espDisponible: espDisponible, preguntasDisponibles: preguntasDisponibles,
    bloqueActual: bloqueActual, bloqueDisponible: bloqueDisponible,
    estadoBloque: estadoBloque, examenDeBloque: examenDeBloque,
    minutosDeBloque: minutosDeBloque, tamExamenDeBloque: tamExamenDeBloque, cerrarExamenDeBloque: cerrarExamenDeBloque,
    preguntasDe: preguntasDe, tarjetasDe: tarjetasDe, claveApunte: claveApunte,
    _orden: ordenIntercalado, _tandas: repartirTandas
  };
})();
