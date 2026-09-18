/* ============================================================
   ÍNDICE — calculadora de índice académico (UNIRMIA)
   ------------------------------------------------------------
   Calculadora en blanco, no atada al pensum: el estudiante agrega
   sus propias filas (nombre libre, créditos, nota) y el índice se
   calcula solo, ponderado por crédito. A=4, B=3, C=2, D=1, F=0.
   Sirve igual para un cuatrimestre completo, para unas pocas
   materias sueltas o para el acumulado de la carrera entera: es
   el estudiante quien decide qué filas mete.
   ============================================================ */
window.Indice = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  const PUNTOS = { A:4, B:3, C:2, D:1, F:0 };
  const LETRAS = ['A','B','C','D','F'];

  function datos(){
    const d = Almacen.datos();
    if (!d.indice || !Array.isArray(d.indice.filas)) d.indice = { filas: [] };
    return d.indice;
  }

  function filas(){ return datos().filas; }

  function idNuevo(){ return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  function calcular(){
    let puntos = 0, creditos = 0, contadas = 0;
    filas().forEach(f => {
      const cr = +f.creditos;
      if (!f.nota || !cr) return;
      puntos += PUNTOS[f.nota] * cr;
      creditos += cr;
      contadas++;
    });
    return { indice: creditos ? puntos / creditos : null, creditos, contadas };
  }

  function colorIndice(v){
    if (v === null) return '';
    if (v >= 3.5) return 'color:var(--quirofano, #1f8a4c)';
    if (v >= 2.5) return '';
    return 'color:var(--sangria-vivo, #b3261e)';
  }

  function filaHtml(f, i){
    return '<div class="row" style="gap:8px;align-items:center;margin-bottom:8px" data-fila="' + esc(f.id) + '">' +
      '<input data-campo="nombre" data-id="' + esc(f.id) + '" class="grow" placeholder="Materia ' + (i + 1) + '" ' +
        'value="' + esc(f.nombre || '') + '" style="padding:10px 12px;border-radius:9px;border:1.5px solid var(--linea);font:inherit">' +
      '<input data-campo="creditos" data-id="' + esc(f.id) + '" type="number" min="0" max="20" placeholder="Cr." ' +
        'value="' + esc(f.creditos != null ? f.creditos : '') + '" style="width:64px;padding:10px 8px;border-radius:9px;' +
        'border:1.5px solid var(--linea);font:inherit;text-align:center">' +
      '<select data-campo="nota" data-id="' + esc(f.id) + '" style="width:66px;padding:10px 8px;border-radius:9px;' +
        'border:1.5px solid var(--linea);font:inherit;background:var(--papel)">' +
        '<option value="">—</option>' +
        LETRAS.map(l => '<option value="' + l + '"' + (f.nota === l ? ' selected' : '') + '>' + l + '</option>').join('') +
      '</select>' +
      '<button class="icono" data-quitar="' + esc(f.id) + '" title="Quitar fila">✕</button>' +
    '</div>';
  }

  function menu(){
    const lista = filas();
    if (!lista.length) lista.push({ id: idNuevo(), nombre:'', creditos:3, nota:'' });
    const r = calcular();

    V().innerHTML =
    '<div class="escalona" style="max-width:640px">' +
      '<div class="encabezado"><p class="eyebrow">Índice</p>' +
      '<h1>Calculadora de índice académico</h1>' +
      '<p>Agrega tus materias con sus créditos y la nota, y el índice se calcula solo, ponderado por crédito: ' +
      '<b>A</b> = 4, <b>B</b> = 3, <b>C</b> = 2, <b>D</b> = 1, <b>F</b> = 0.</p></div>' +

      '<div class="card card--carbon" style="margin-bottom:18px;text-align:center;padding:28px">' +
        '<span class="eyebrow" style="color:rgba(255,255,255,.5)">Tu índice</span>' +
        '<div class="mono" style="font-size:48px;font-weight:800;margin-top:6px;' +
          (r.indice !== null ? colorIndice(r.indice).replace('color:', 'color:') : '') + '">' +
          (r.indice === null ? '—' : r.indice.toFixed(2)) + '</div>' +
        '<p style="color:rgba(255,255,255,.7);font-size:13px;margin-top:6px">' +
          (r.indice === null ? 'Pon al menos una nota para calcularlo.' :
            r.contadas + (r.contadas === 1 ? ' materia' : ' materias') + ' · ' + r.creditos + ' créditos contados') + '</p>' +
      '</div>' +

      '<div class="card">' +
        '<div class="row" style="gap:8px;margin-bottom:8px;font-size:11.5px;color:var(--tinta-60)">' +
          '<span class="grow">MATERIA</span><span style="width:64px;text-align:center">CR.</span>' +
          '<span style="width:66px;text-align:center">NOTA</span><span style="width:22px"></span>' +
        '</div>' +
        '<div id="idxFilas">' + lista.map(filaHtml).join('') + '</div>' +
        '<button class="btn btn--sm btn--fantasma" id="idxAgregar" style="margin-top:6px">+ Agregar materia</button>' +
      '</div>' +
    '</div>';

    UI.$$('[data-campo]').forEach(el => {
      const ev = el.tagName === 'SELECT' ? 'onchange' : 'oninput';
      el[ev] = () => {
        const f = filas().find(x => x.id === el.dataset.id); if (!f) return;
        f[el.dataset.campo] = el.dataset.campo === 'creditos' ? el.value.replace(/[^\d]/g, '') : el.value;
        Almacen.guardar();
        if (el.dataset.campo !== 'nombre') menu(); else pintarResultado();
      };
    });

    UI.$$('[data-quitar]').forEach(b => b.onclick = () => {
      const i = filas().findIndex(x => x.id === b.dataset.quitar);
      if (i >= 0) filas().splice(i, 1);
      Almacen.guardar();
      menu();
    });

    document.getElementById('idxAgregar').onclick = () => {
      filas().push({ id: idNuevo(), nombre:'', creditos:3, nota:'' });
      Almacen.guardar();
      menu();
    };
  }

  /* El nombre de la materia no cambia el resultado, asi que no hace
     falta repintar toda la pantalla (y perder el foco del input) cada
     vez que se teclea una letra: solo se actualiza el numero grande. */
  function pintarResultado(){
    const r = calcular();
    const cont = document.querySelector('.card--carbon .mono');
    const nota = document.querySelector('.card--carbon p');
    if (!cont) return;
    cont.textContent = r.indice === null ? '—' : r.indice.toFixed(2);
    cont.style.cssText = 'font-size:48px;font-weight:800;margin-top:6px;' + colorIndice(r.indice);
    if (nota) nota.textContent = r.indice === null ? 'Pon al menos una nota para calcularlo.' :
      r.contadas + (r.contadas === 1 ? ' materia' : ' materias') + ' · ' + r.creditos + ' créditos contados';
  }

  return { menu };
})();
