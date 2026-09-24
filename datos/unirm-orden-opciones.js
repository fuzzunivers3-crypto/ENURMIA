/* ============================================================
   UNIRMIA — ORDEN DE LAS OPCIONES
   Debe cargarse DESPUÉS de todos los archivos de banco de UNIRMIA.

   Las preguntas de UNIRMIA se escribieron con la respuesta correcta
   casi siempre en la misma posición (medido: 132 de 172 en la B, y
   32 de 50 de Anatomía I en la A). Con eso un estudiante acierta por
   patrón sin saber el tema. En lugar de reescribir cientos de
   preguntas a mano, aquí se coloca la correcta en una posición
   repartida al azar entre A, B, C y D.

   - Es DETERMINISTA: la posición depende solo del id de la pregunta,
     así que es la misma en cada sesión, en cada dispositivo y para
     los dos jugadores de un duelo.
   - Mueve la correcta y deja las demás opciones en su orden original.
   - Reordena ops, ok y no a la vez, para que la explicación de cada
     opción siga acompañando a la opción correcta.
   - Salta las preguntas cuyo texto se refiere a otras opciones por
     posición ("todas las anteriores", "opción B", "ambas"...), donde
     mover algo cambiaría el sentido.
   - Solo toca programa 'unirm'. Las de ENURMIA no se modifican.
   Las preguntas nuevas que se agreguen a UNIRMIA heredan esto solas.
   ============================================================ */
(function () {
  /* Una opción que dice "Ambas", "Todas las anteriores"... o un texto que
     cita una opción por su letra/posición depende del orden. Las palabras
     "ambos"/"ambas" dentro de una frase normal ("a ambos lados") no cuentan. */
  const OPCION_RELATIVA = /^\s*(ambas|ambos|todas|todos|ninguna|ninguno|las dos|los dos)\b|\b(ambas|ambos) (son|opciones|son correctas)\b|todas las anteriores|ninguna de las anteriores|las dos anteriores/i;
  const CITA_POSICION = /opci[oó]n(es)? [a-d]\b|(^|\s)[a-d]\)(\s|$)|\b(primera|segunda|tercera|cuarta|ultima|última) opci[oó]n/i;

  function hashId(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  /* Un par de vueltas para que ids consecutivos (Q01, Q02...) no
     produzcan posiciones parecidas entre sí. */
  function posicion(id, n) {
    let x = hashId(id);
    x = Math.imul(x ^ (x >>> 15), 2246822507) >>> 0;
    x = Math.imul(x ^ (x >>> 13), 3266489909) >>> 0;
    x = (x ^ (x >>> 16)) >>> 0;
    return x % n;
  }

  (window.BANCO || []).forEach(function (q) {
    if (!q || q.programa !== 'unirm' || q._ordenado) return;
    if (!Array.isArray(q.ops) || q.ops.length < 2) return;
    const n = q.ops.length;
    if (typeof q.ok !== 'number' || q.ok < 0 || q.ok >= n) return;

    const explicaciones = Object.keys(q.no || {}).map(function (k) { return q.no[k]; })
      .concat([q.exp || '', q.clave || '']);
    if (q.ops.some(function (t) { return OPCION_RELATIVA.test(String(t)) || CITA_POSICION.test(String(t)); })) return;
    if (explicaciones.some(function (t) { return CITA_POSICION.test(String(t)) || /todas las anteriores|ninguna de las anteriores/i.test(String(t)); })) return;

    const destino = posicion(q.id || q.enunciado || '', n);
    if (destino === q.ok) { q._ordenado = true; return; }

    const otros = [];
    for (let i = 0; i < n; i++) if (i !== q.ok) otros.push(i);
    const orden = otros.slice();
    orden.splice(destino, 0, q.ok);   // orden[nuevaPos] = posición antigua

    const viejoNo = q.no || {};
    const nuevoNo = {};
    orden.forEach(function (viejo, nuevo) {
      if (nuevo === destino) return;
      if (viejoNo[viejo] !== undefined) nuevoNo[nuevo] = viejoNo[viejo];
    });

    q.ops = orden.map(function (viejo) { return q.ops[viejo]; });
    q.ok = destino;
    if (q.no) q.no = nuevoNo;
    q._ordenado = true;
  });
})();
