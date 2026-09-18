/* ============================================================
   CASOS — UNIRMIA
   ------------------------------------------------------------
   Mismo motor de arbol de decisiones que assets/js/vistas/clinica.js
   (ENURMIA), pero generalizado: ahi cada caso es un PACIENTE con
   VITALES porque el programa entero es clinico. Aqui no: en 7mo y
   8vo (ciencias basicas) el caso es un proceso o una estructura,
   no un paciente. Por eso "paciente" -> `escena` (rotulo + detalle)
   y "vitales" -> `panel` (variables del sistema), y el motor cambia
   las etiquetas segun `caso.tipo` ('mecanismo' | 'clinico').

   Deliberadamente NO se copia el modo "paciente virtual" de
   Clinica.js (interrogatorio libre): eso encaja con clinica real,
   no con mecanismos de bioquimica o genetica. Un solo formato,
   el arbol de decisiones, sirve para los dos tipos.
   ============================================================ */
window.CasosUnirm = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  function datos(){
    const d = Almacen.datos();
    if (!d.casosUnirm) d.casosUnirm = {};
    return d.casosUnirm;
  }

  let filtro = { cuat: null };

  /* ============================================================
     MENU
     ============================================================ */
  function menu(){
    const hechos = datos();
    const activas = Almacen.materiasUnirm();
    const propios = CASOS_UNIRM.filter(c => activas.indexOf(c.esp) >= 0);
    const cuats = Array.from(new Set(propios.map(c => c.cuatrimestre))).sort();
    const lista = propios.filter(c => !filtro.cuat || c.cuatrimestre === filtro.cuat);

    const tarjetas = lista.map(c => {
      const hecho = hechos[c.id];
      return '<button class="card card--flota" data-caso="' + esc(c.id) + '" style="text-align:left;cursor:pointer;font:inherit;border:1px solid var(--linea)">' +
        '<div class="row-b" style="margin-bottom:10px">' +
          '<span class="chip chip--carbon">' + esc(c.esp) + ' · ' + c.cuatrimestre + 'mo</span>' +
          (hecho ? '<span class="chip chip--verde">' + esc(hecho.nivel || 'Completado') + '</span>' : UI.chipDif(c.dif)) +
        '</div>' +
        '<b style="display:block;font-family:var(--display);font-size:19px;margin-bottom:6px">' + esc(c.titulo) + '</b>' +
        '<small class="muted" style="font-size:13px">' + esc(c.resumen) + '</small></button>';
    }).join('');

    V().innerHTML =
    '<div class="escalona">' +
      '<div class="encabezado"><p class="eyebrow">Casos prácticos</p>' +
      '<h1>Decidir paso a paso, no elegir entre cuatro letras</h1>' +
      '<p>En 7mo y 8vo son mecanismos y estructuras; en 9no ya entra el razonamiento clínico. Cada decisión abre un camino distinto, y al final ves el análisis completo de tu recorrido.</p></div>' +

      '<div class="filtros" style="margin-bottom:18px">' +
        '<button class="chip' + (!filtro.cuat ? ' on' : '') + '" data-f-cuat="">Todos</button>' +
        cuats.map(n => '<button class="chip' + (filtro.cuat === n ? ' on' : '') +
          '" data-f-cuat="' + n + '">' + n + 'mo</button>').join('') +
      '</div>' +

      '<div class="rejilla rejilla--3">' + (tarjetas || '<p class="muted">' +
        (activas.length ? 'Todavía no hay casos de tus materias activas.' : 'Elige tus materias en Inicio para ver casos.') +
        '</p>') + '</div>' +
    '</div>';

    UI.$$('[data-f-cuat]').forEach(b => b.onclick = () => { filtro.cuat = b.dataset.fCuat ? +b.dataset.fCuat : null; menu(); });
    UI.$$('[data-caso]').forEach(b => b.onclick = () => abrir(b.dataset.caso));
  }

  /* ============================================================
     EL CASO
     ============================================================ */
  let C = null;

  function abrir(id){
    const caso = CASOS_UNIRM.find(c => c.id === id);
    if (!caso) return;
    C = { caso, nodo:'inicio', puntos:0, ruta:[], inicio:Date.now() };
    pintar();
  }

  function esClinico(caso){ return caso.tipo === 'clinico'; }

  function pintar(){
    const n = C.caso.nodos[C.nodo];
    if (n.final) return final(n);

    const c = C.caso;
    const panel = Object.keys(c.panel || {}).map(k =>
      '<div class="vital"><span>' + esc(k) + '</span><b>' + esc(c.panel[k]) + '</b></div>').join('');

    const historial = C.ruta.map(p =>
      '<div class="dialogo dialogo--medico"><span class="dialogo__quien">Tu decisión</span>' + esc(p.txt) + '</div>' +
      (p.retro ? '<div class="dialogo dialogo--hallazgo"><span class="dialogo__quien">Devolución</span>' + esc(p.retro) + '</div>' : '')).join('');

    V().innerHTML =
    '<div class="sesion__barra"><button class="icono" id="csSalir">✕</button>' +
      '<b class="grow" style="font-size:14px">' + esc(c.titulo) + '</b>' +
      '<span class="chip chip--carbon">' + esc(c.esp) + '</span></div>' +

    '<div class="consulta">' +
      '<div class="expediente">' +
        '<div class="expediente__cabeza">' +
          '<span class="avatar">' + (esClinico(c) ? '🩺' : '🧬') + '</span>' +
          '<div class="grow"><b style="font-size:16px">' + esc(c.escena.rotulo) + '</b>' +
          '<small style="display:block;opacity:.65;font-size:12.5px">' + esc(c.escena.detalle) + '</small></div>' +
        '</div>' +
        '<div class="expediente__cuerpo" id="csCuerpo">' +
          historial +
          '<div class="dialogo dialogo--paciente"><span class="dialogo__quien">Situación</span>' + esc(n.texto) + '</div>' +
        '</div>' +
      '</div>' +

      '<div style="display:flex;flex-direction:column;gap:16px">' +
        (panel ? '<div class="card"><span class="eyebrow">' + (esClinico(c) ? 'Constantes vitales' : 'Estado del sistema') + '</span>' +
          '<div class="vitales" style="margin-top:12px">' + panel + '</div></div>' : '') +
        '<div class="card"><span class="eyebrow">' + (esClinico(c) ? '¿Qué haces?' : '¿Cuál es el siguiente paso?') + '</span>' +
          '<div class="acciones-clinicas" style="margin-top:12px">' +
            n.opciones.map((o, k) => '<button class="accion-clinica" data-op="' + k + '">' +
              '<span class="em">→</span><span class="grow">' + esc(o.txt) + '</span></button>').join('') +
          '</div></div>' +
      '</div>' +
    '</div>';

    document.getElementById('csSalir').onclick = () => App.ir('casos');
    const cuerpo = document.getElementById('csCuerpo');
    cuerpo.scrollTop = cuerpo.scrollHeight;

    UI.$$('[data-op]').forEach(b => b.onclick = () => {
      const o = n.opciones[+b.dataset.op];
      C.puntos += o.pts || 0;
      C.ruta.push({ txt:o.txt, retro:o.retro });
      if (o.retro) UI.tostada(o.retro, (o.pts || 0) > 0 ? 'ok' : (o.pts || 0) < 0 ? 'mal' : '');
      C.nodo = o.sig;
      pintar();
    });
  }

  function final(n){
    const max = 30;
    const pct = Math.max(0, Math.min(100, Math.round((C.puntos + 10) / (max + 10) * 100)));
    const d = datos();
    d[C.caso.id] = { nivel:n.nivel, puntos:C.puntos, pct, fecha:Date.now() };
    Almacen.guardar();

    const color = n.nivel === 'excelente' ? 'card--verde' : n.nivel === 'grave' ? 'card--rosa' : 'card--yodo';
    const etiqueta = { excelente:'Recorrido excelente', aceptable:'Recorrido aceptable', mejorable:'Recorrido mejorable', grave:'Se te escapó lo esencial' }[n.nivel] || 'Terminado';
    const c = C.caso;

    V().innerHTML =
    '<div class="sesion escalona">' +
      '<div class="encabezado"><p class="eyebrow">' + esc(c.titulo) + '</p><h1>' + esc(etiqueta) + '</h1></div>' +

      '<div class="card ' + color + '" style="margin-bottom:16px">' +
        '<span class="eyebrow">Desenlace</span><p style="margin-top:8px;font-size:15px;line-height:1.65">' + esc(n.texto) + '</p></div>' +

      '<div class="rejilla rejilla--3" style="margin-bottom:16px">' +
        '<div class="metrica"><b>' + pct + '%</b><span>Calidad de las decisiones</span></div>' +
        '<div class="metrica"><b>' + C.ruta.length + '</b><span>Decisiones tomadas</span></div>' +
        '<div class="metrica"><b>' + UI.reloj(Date.now() - C.inicio) + '</b><span>Tiempo</span></div>' +
      '</div>' +

      '<div class="bloque bloque--clave"><span class="eyebrow">' + (esClinico(c) ? 'Diagnóstico' : 'Concepto clave') + '</span><p>' + esc(n.dx) + '</p></div>' +
      '<div class="bloque bloque--porque"><span class="eyebrow">Lo que este caso enseña</span><p>' + esc(n.ensena) + '</p></div>' +

      '<div class="card" style="margin:16px 0"><span class="eyebrow">Tu recorrido</span>' +
        '<div style="display:flex;flex-direction:column;gap:9px;margin-top:14px">' +
          C.ruta.map((p, i) => '<div class="descarte"><b>' + (i + 1) + '</b><span><b style="display:block">' + esc(p.txt) + '</b>' +
          (p.retro ? '<small class="muted">' + esc(p.retro) + '</small>' : '') + '</span></div>').join('') +
        '</div></div>' +

      '<div class="row wrap" style="gap:9px">' +
        '<button class="btn" id="csOtraVez">Repetir el caso</button>' +
        '<button class="btn btn--fantasma" id="csOtroCaso">Otro caso</button>' +
        '<button class="btn btn--carbon" id="csCasa">Volver al inicio</button>' +
      '</div>' +
    '</div>';

    document.getElementById('csOtraVez').onclick = () => abrir(c.id);
    document.getElementById('csOtroCaso').onclick = () => App.ir('casos');
    document.getElementById('csCasa').onclick = () => App.ir('inicio');
  }

  return { menu };
})();
