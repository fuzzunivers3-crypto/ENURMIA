/* ============================================================
   PRÓXIMOS CURSOS (UNIRMIA)
   ------------------------------------------------------------
   Cursos, certificados y diplomados que el admin va publicando.
   Solo lectura para el estudiante: lo que puede hacer es verlos
   y, si trae enlace, abrirlo. Publicar y editar vive en el panel
   de Administración.
   ============================================================ */
window.Proximos = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  function motivoNoDisponible(){
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return 'sin-internet';
    const s = Almacen.sesion();
    if (!s || !s.nube) return 'sin-nube';
    return null;
  }

  const TIPO_TXT = { curso:'Curso', certificado:'Certificado', diplomado:'Diplomado' };
  const TIPO_EM  = { curso:'📚', certificado:'🏅', diplomado:'🎓' };

  function fecha(f){
    if (!f) return null;
    try { return new Date(f + 'T00:00:00').toLocaleDateString('es-DO', { day:'numeric', month:'long', year:'numeric' }); }
    catch (e) { return null; }
  }

  /* Solo http(s): el enlace lo escribe el admin, pero nada obliga a que
     pase por el <input type="url"> del formulario (un insert directo por
     SQL o un bug ahi no lo impediria), y un esquema como javascript: en
     un href se ejecuta al hacer clic. Mejor no confiar en el esquema. */
  function enlaceSeguro(url){
    return url && /^https?:\/\//i.test(url) ? url : null;
  }

  async function menu(){
    const motivo = motivoNoDisponible();

    V().innerHTML =
    '<div class="escalona" style="max-width:820px">' +
      '<div class="encabezado"><p class="eyebrow">Próximos cursos</p>' +
      '<h1>Lo que viene además de tus asignaturas</h1>' +
      '<p>Cursos cortos, certificados y diplomados que se van abriendo. Aparecen aquí en cuanto se publican.</p></div>' +

      (motivo
        ? '<div class="card"><p class="muted">' + esc(motivo === 'sin-internet'
            ? 'Necesitas conexión a internet para ver esta lista.'
            : 'Esta función necesita una cuenta en la nube (no una cuenta solo local).') + '</p></div>'
        : '<div id="prxLista"><p class="muted">Cargando…</p></div>') +
    '</div>';

    if (!motivo) pintarLista();
  }

  async function pintarLista(){
    const cont = document.getElementById('prxLista');
    if (!cont) return;
    const r = await Nube.eventosUnirm();
    if (!document.getElementById('prxLista')) return;

    if (!r.ok){
      cont.innerHTML = '<p class="muted">No se pudo cargar la lista ahora mismo.</p>';
      return;
    }
    const activos = r.filas.filter(e => e.activo !== false);
    if (!activos.length){
      cont.innerHTML = '<div class="card"><p class="muted">Todavía no hay nada publicado. Vuelve pronto.</p></div>';
      return;
    }
    cont.innerHTML = '<div style="display:flex;flex-direction:column;gap:12px">' +
      activos.map(e => {
        const enlace = enlaceSeguro(e.enlace);
        return '<div class="card">' +
          '<div class="row-b" style="margin-bottom:6px">' +
            '<span class="chip chip--carbon">' + (TIPO_EM[e.tipo] || '📌') + ' ' + esc(TIPO_TXT[e.tipo] || e.tipo) + '</span>' +
            (fecha(e.fecha) ? '<span class="muted mono" style="font-size:12.5px">' + esc(fecha(e.fecha)) + '</span>' : '') +
          '</div>' +
          '<b style="display:block;font-family:var(--display);font-size:18px;margin-bottom:4px">' + esc(e.titulo) + '</b>' +
          (e.descripcion ? '<p style="font-size:13.5px;margin-bottom:' + (enlace ? '10px' : '0') + '">' + esc(e.descripcion) + '</p>' : '') +
          (enlace ? '<a class="btn btn--sm" href="' + esc(enlace) + '" target="_blank" rel="noopener">Más información</a>' : '') +
        '</div>';
      }).join('') +
    '</div>';
  }

  return { menu };
})();
