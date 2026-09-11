/* ============================================================
   RANKING — clasificacion de los desafios
   ------------------------------------------------------------
   Dos tablas: la del mes en curso y la historica. La del mes
   existe para que quien empieza hoy tenga algo que ganar; si
   solo hubiera historica, el que lleva medio ano acumulando
   marcas seria intocable y competir dejaria de tener sentido.

   Aparecer es VOLUNTARIO y esta apagado de fabrica. Mientras el
   estudiante no lo encienda, su marca se guarda pero nadie mas
   la ve: la politica del servidor solo deja leer las filas con
   `publico = true`, la propia y las del administrador.

   Lo unico que se hace publico es el alias y el puntaje. Ni el
   correo, ni el progreso, ni los aciertos, ni nada del estudio.
   ============================================================ */
window.Ranking = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  let tabla = 'mes';          // 'mes' | 'historico'
  let ajuste = null;          // fila propia de la nube (alias / publico)

  const MEDALLAS = ['🥇','🥈','🥉'];

  function nombrePrograma(){
    return Almacen.programa() === 'unirm' ? 'unirmianos' : 'enurmianos';
  }

  function mesLargo(){
    const m = ['enero','febrero','marzo','abril','mayo','junio','julio',
               'agosto','septiembre','octubre','noviembre','diciembre'];
    const d = new Date();
    return m[d.getMonth()] + ' de ' + d.getFullYear();
  }

  /* ---------- pantalla ---------- */
  function menu(){
    const d = Almacen.datos();
    const mias = (d && d.desafios) || { mejor:0, mejorMes:0, mes:null, partidas:0 };
    const mesHoy = Almacen.hoyISO().slice(0, 7);
    const mejorMes = (mias.mes === mesHoy) ? (mias.mejorMes || 0) : 0;

    V().innerHTML =
    '<div class="escalona" style="max-width:900px">' +
      '<div class="encabezado"><p class="eyebrow">Clasificación</p>' +
      '<h1>Los ' + nombrePrograma() + ' del desafío</h1>' +
      '<p>Solo aparece quien quiere aparecer. Se comparte el alias y el puntaje, nada más: ' +
      'ni tu correo, ni tus aciertos, ni lo que estudias.</p></div>' +

      '<div class="rejilla rejilla--3" style="margin-bottom:18px">' +
        '<div class="metrica"><b>' + (mias.mejor || 0) + '</b><span>Tu mejor marca</span></div>' +
        '<div class="metrica"><b>' + mejorMes + '</b><span>Tu mejor marca del mes</span></div>' +
        '<div class="metrica"><b>' + (mias.partidas || 0) + '</b><span>Desafíos jugados</span></div>' +
      '</div>' +

      '<div class="card" id="cajaOptIn" style="margin-bottom:18px">' +
        '<span class="eyebrow">Tu sitio en la lista</span>' +
        '<p class="muted" style="margin-top:8px;font-size:13.5px">Comprobando…</p>' +
      '</div>' +

      '<div class="pestanas" style="margin-bottom:16px">' +
        '<button class="' + (tabla === 'mes' ? 'on' : '') + '" data-tabla="mes">Este mes</button>' +
        '<button class="' + (tabla === 'historico' ? 'on' : '') + '" data-tabla="historico">Histórico</button>' +
      '</div>' +

      '<div class="card" id="cajaTabla">' +
        '<span class="eyebrow">' + (tabla === 'mes' ? esc(mesLargo()) : 'Todas las marcas') + '</span>' +
        '<p class="muted" style="margin-top:10px;font-size:13.5px">Cargando la clasificación…</p>' +
      '</div>' +

      '<p class="muted" style="font-size:13px;margin-top:16px">' +
      'La marca del mes se reinicia sola el día 1. La histórica no se borra nunca.</p>' +
    '</div>';

    UI.$$('[data-tabla]').forEach(b => b.onclick = () => {
      if (tabla === b.dataset.tabla) return;
      tabla = b.dataset.tabla;
      menu();
    });

    pintarOptIn();
    pintarTabla();
  }

  /* ---------- tarjeta de participacion ---------- */
  async function pintarOptIn(){
    const caja = document.getElementById('cajaOptIn');
    if (!caja) return;
    const s = Almacen.sesion();

    if (!s || !s.nube || !window.Nube || !Nube.disponible()){
      caja.innerHTML = '<span class="eyebrow">Tu sitio en la lista</span>' +
        '<p class="muted" style="margin-top:8px;font-size:13.5px">Esta es una sesión sin cuenta en la nube, ' +
        'así que tus marcas se guardan solo en este navegador. Para competir con los demás necesitas ' +
        'entrar con tu cuenta.</p>';
      return;
    }

    try { ajuste = await Nube.miRanking(); } catch (e) { ajuste = null; }
    if (!document.getElementById('cajaOptIn')) return;   // se cambio de vista mientras tanto

    const dentro = !!(ajuste && ajuste.publico);
    const alias = (ajuste && ajuste.alias) || (Almacen.datos().perfil.nombre || 'Estudiante');

    caja.innerHTML =
      '<span class="eyebrow">Tu sitio en la lista</span>' +
      '<div class="row-b" style="gap:14px;margin-top:12px;align-items:flex-start">' +
        '<div class="grow"><b style="font-size:14.5px">' +
          (dentro ? 'Estás en la clasificación' : 'No estás en la clasificación') + '</b>' +
          '<p class="muted" style="font-size:13px;margin-top:3px">' +
          (dentro
            ? 'Los demás ven tu alias y tu puntaje. Puedes salir cuando quieras y desapareces al instante.'
            : 'Tus marcas se guardan igual. Enciende esto solo si te apetece competir.') +
          '</p></div>' +
        '<button class="btn btn--sm ' + (dentro ? '' : 'btn--fantasma') + '" id="btnOptIn">' +
          (dentro ? 'Participando' : 'No participo') + '</button>' +
      '</div>' +
      '<div class="campo" style="margin-top:14px">' +
        '<label for="aliasRk">Cómo quieres que te vean</label>' +
        '<input id="aliasRk" type="text" maxlength="24" value="' + esc(alias) + '" placeholder="Tu alias">' +
      '</div>' +
      '<div class="row" style="gap:9px">' +
        '<button class="btn btn--sm btn--fantasma" id="btnAlias">Guardar alias</button>' +
        '<span class="muted" style="font-size:12.5px;align-self:center">No hace falta tu nombre real.</span>' +
      '</div>' +
      '<div id="msgRk"></div>';

    document.getElementById('btnOptIn').onclick = async () => {
      const b = document.getElementById('btnOptIn');
      b.disabled = true;
      const r = await Nube.configurarRanking(document.getElementById('aliasRk').value.trim(), !dentro);
      b.disabled = false;
      if (!r.ok) return UI.tostada(r.error, 'mal');
      UI.tostada(dentro ? 'Saliste de la clasificación' : 'Ya estás en la clasificación', 'ok');
      await pintarOptIn();
      pintarTabla();
    };

    document.getElementById('btnAlias').onclick = async () => {
      const nuevo = document.getElementById('aliasRk').value.trim();
      if (!nuevo) return UI.tostada('Escribe un alias', 'mal');
      const r = await Nube.configurarRanking(nuevo, dentro);
      if (!r.ok) return UI.tostada(r.error, 'mal');
      UI.tostada('Alias guardado', 'ok');
      pintarTabla();
    };
  }

  /* ---------- la tabla ---------- */
  async function pintarTabla(){
    const caja = document.getElementById('cajaTabla');
    if (!caja) return;
    const titulo = '<span class="eyebrow">' + (tabla === 'mes' ? esc(mesLargo()) : 'Todas las marcas') + '</span>';
    const s = Almacen.sesion();

    if (!s || !s.nube || !window.Nube || !Nube.disponible()){
      caja.innerHTML = titulo + '<p class="muted" style="margin-top:10px;font-size:13.5px">' +
        'Sin conexión con el servidor no hay clasificación que enseñar. Tus marcas siguen guardándose aquí.</p>';
      return;
    }

    const r = await Nube.clasificacion(Almacen.programa(), tabla, 50);
    if (!document.getElementById('cajaTabla')) return;
    if (!r.ok){
      caja.innerHTML = titulo + '<p class="muted" style="margin-top:10px;font-size:13.5px">' + esc(r.error) + '</p>';
      return;
    }
    if (!r.filas.length){
      caja.innerHTML = titulo +
        '<p class="muted" style="margin-top:10px;font-size:13.5px">' +
        (tabla === 'mes'
          ? 'Este mes todavía no hay ninguna marca publicada. Puedes ser el primero.'
          : 'Todavía no hay marcas publicadas. Juega un desafío y enciende la participación aquí arriba.') +
        '</p>';
      return;
    }

    const col = tabla === 'mes' ? 'mejor_mes' : 'mejor_historico';
    const filas = r.filas.map((f, i) => {
      const yo = f.user_id === r.miId;
      const puesto = MEDALLAS[i] || (i + 1);
      return '<div class="item-lista"' + (yo ? ' style="outline:2px solid var(--acento, #6E0F1F)"' : '') + '>' +
        '<span class="item-lista__n">' + puesto + '</span>' +
        '<span class="grow"><b style="display:block;font-size:14px">' + esc(f.alias || 'Estudiante') +
          (yo ? ' <span class="chip chip--sangria">tú</span>' : '') + '</b>' +
        '<small class="muted">' + (f.partidas || 0) + (f.partidas === 1 ? ' desafío' : ' desafíos') + '</small></span>' +
        '<span class="mono" style="font-weight:600">' + (f[col] || 0) + ' pts</span></div>';
    }).join('');

    caja.innerHTML = titulo +
      (r.miPuesto ? '<p class="muted" style="margin:8px 0 0;font-size:13.5px">Vas en el puesto <b>' + r.miPuesto + '</b> de ' + r.filas.length + '.</p>' : '') +
      '<div style="display:flex;flex-direction:column;gap:9px;margin-top:14px">' + filas + '</div>';
  }

  return { menu };
})();
