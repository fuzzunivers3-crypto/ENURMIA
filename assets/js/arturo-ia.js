/* ============================================================
   ARTURO REFORMULA
   Cuando la explicacion escrita no entra, Arturo la cuenta por
   otro angulo. Solo eso: no es un chat.

   Lo que se manda a la funcion es una LISTA BLANCA con el
   material de esa pregunta. Ni el progreso del estudiante, ni su
   nombre, ni nada que no haga falta para reformular.

   Este archivo no toca el DOM: tiene que cargarse en Node para
   que el validador lo compruebe.
   ============================================================ */
window.ArturoIA = (function () {

  const TOPE_MATERIAL = 6144;    // bytes del JSON que viaja
  const TOPE_GUARDADAS = 100;    // el objeto datos entero sube a Supabase
  const FUNCION = 'arturo-reexplica';

  /* Se enciende al recibir un 429 y dura lo que dure la pestana: no tiene
     sentido seguir pidiendo cuando ya se sabe que no hay. */
  let sinCuota = false;

  function datos(){ return Almacen.datos(); }

  function disponible(){
    const d = datos();
    if (!d) return false;
    if (d.ajustes && d.ajustes.reexplicar === false) return false;
    if (sinCuota) return false;
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return false;
    /* La funcion exige sesion de Supabase: una cuenta solo local no puede
       autenticarse contra ella. */
    const s = Almacen.sesion();
    return !!(s && s.nube);
  }

  function clave(qid, elegida){
    const e = (elegida === null || elegida === undefined) ? '-' : elegida;
    return qid + '|' + e;
  }

  function recortar(s, n){
    s = String(s === null || s === undefined ? '' : s);
    return s.length > n ? s.slice(0, n - 1) + '…' : s;
  }

  /* ---------- el material ---------- */
  /* Lista blanca explicita. Si algun dia hace falta mandar un campo mas,
     se anade aqui a proposito y el validador lo cazara. */
  function armarMaterial(q, elegida){
    if (!q || !q.exp) return null;
    const m = {
      qid: q.id,
      tema: recortar(q.sub || q.tema, 120),
      enunciado: recortar(q.enunciado, 700),
      caso: recortar(q.caso, 1200),
      opciones: (q.ops || []).map(function (o) { return recortar(o, 300); }),
      correcta: q.ok,
      clave: recortar(q.clave, 400),
      exp: recortar(q.exp, 1600),
      trampa: recortar(q.trampa, 400),
      ref: recortar(q.ref, 200)
    };
    const marco = (elegida !== null && elegida !== undefined && elegida !== q.ok);
    if (marco && q.no && q.no[elegida] !== undefined){
      m.descarte = recortar(q.no[elegida], 400);
      m.eligio = elegida;
    }
    return m;
  }

  function pesa(m){ return JSON.stringify(m).length; }

  /* ---------- guardar lo generado ---------- */
  function guardadas(){
    const d = datos();
    if (!d) return {};
    if (!d.reexplicaciones) d.reexplicaciones = {};
    return d.reexplicaciones;
  }

  function guardada(qid, elegida){
    const g = guardadas()[clave(qid, elegida)];
    return g ? g.texto : null;
  }

  /* Se tiran las mas viejas. Este objeto viaja entero a Supabase en cada
     sincronizacion, asi que no puede crecer sin freno. */
  function podar(mapa, tope){
    const llaves = Object.keys(mapa);
    if (llaves.length <= tope) return mapa;
    llaves.sort(function (a, b) { return (mapa[b].fecha || 0) - (mapa[a].fecha || 0); });
    const out = {};
    llaves.slice(0, tope).forEach(function (k) { out[k] = mapa[k]; });
    return out;
  }

  function guardar(qid, elegida, texto){
    const d = datos();
    if (!d) return;
    const g = guardadas();
    g[clave(qid, elegida)] = { texto: texto, fecha: Date.now() };
    d.reexplicaciones = podar(g, TOPE_GUARDADAS);
    Almacen.guardar();
  }

  /* ---------- la llamada ---------- */
  async function reexplicar(q, elegida){
    const ya = guardada(q.id, elegida);
    if (ya) return ya;

    const material = armarMaterial(q, elegida);
    if (!material) throw new Error('sin-material');
    if (pesa(material) > TOPE_MATERIAL) throw new Error('material-grande');

    const r = await Nube.invocar(FUNCION, { material: material });

    if (r && r.error === 'sin-cuota'){ sinCuota = true; throw new Error('sin-cuota'); }
    if (!r || !r.texto) throw new Error('sin-respuesta');

    guardar(q.id, elegida, r.texto);
    return r.texto;
  }

  return {
    disponible: disponible, clave: clave, armarMaterial: armarMaterial,
    pesa: pesa, guardada: guardada, guardar: guardar, reexplicar: reexplicar,
    _podar: podar
  };
})();
