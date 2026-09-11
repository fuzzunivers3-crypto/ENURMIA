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
      const conExp = barajar(qs.filter(function (q) { return !!q.exp; }));
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
      puestasRepaso += tomar(barajar(qs).slice(0, 6),
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
    temasNuevos: temasNuevos, absorber: absorber,
    temas: temas, temaPorNombre: temaPorNombre, invalidar: invalidar,
    preguntasDe: preguntasDe, tarjetasDe: tarjetasDe, claveApunte: claveApunte,
    _orden: ordenIntercalado, _tandas: repartirTandas
  };
})();
