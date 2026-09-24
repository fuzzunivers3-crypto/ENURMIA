/* ============================================================
   DUELO EN VIVO
   ------------------------------------------------------------
   Version "reto por codigo" del desafio: dos estudiantes reciben
   el MISMO set de preguntas y corren cada quien a su ritmo, viendo
   el marcador del otro actualizarse en vivo. Sin sala de espera
   con desconocidos: uno crea el codigo y se lo manda al otro por
   fuera (WhatsApp, etc). El emparejamiento aleatorio con quien
   este disponible queda para una fase futura.

   Va por Supabase Realtime (canal = 'duelo-' + codigo), sin tabla
   ni RLS: quien conoce el codigo se puede unir, y no viaja nada
   mas sensible que el progreso de un juego. Las preguntas mismas
   NUNCA viajan completas por el canal (solo sus ids): cada cliente
   ya tiene el banco entero cargado en el navegador, igual que en
   cualquier otro modo de la app.
   ============================================================ */
window.Duelo = (function () {

  const esc = UI.esc, L = UI.LETRAS;
  function V(){ return document.getElementById('vista'); }

  const ALFABETO = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  function codigoAleatorio(){
    let s = '';
    for (let i = 0; i < 5; i++) s += ALFABETO[Math.floor(Math.random() * ALFABETO.length)];
    return s;
  }
  function normalizarCodigo(s){ return (s || '').toUpperCase().replace(/[^A-Z0-9]/g, ''); }

  let form = { n: 10 };
  let D = null;   // estado del duelo en curso, ver iniciarSala()

  function disponible(){
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return 'sin-internet';
    const s = Almacen.sesion();
    if (!s || !s.nube) return 'sin-nube';
    return null;
  }

  /* ============================================================
     MENU
     ============================================================ */
  function menu(){
    const motivo = disponible();
    if (motivo){
      V().innerHTML = '<div class="escalona" style="max-width:640px">' +
        '<div class="encabezado"><p class="eyebrow">Duelo en vivo</p><h1>Reta a un compañero</h1></div>' +
        '<div class="card"><p class="muted">' + (motivo === 'sin-internet'
          ? 'Necesitas conexión a internet: el duelo se juega en vivo contra otra persona.'
          : 'Necesitas una cuenta en la nube (no una cuenta solo local) para retar a alguien.') + '</p></div></div>';
      return;
    }

    V().innerHTML =
    '<div class="escalona" style="max-width:640px">' +
      '<div class="encabezado"><p class="eyebrow">Duelo en vivo</p><h1>Reta a un compañero</h1>' +
      '<p>Las mismas preguntas, al mismo tiempo. Cada quien a su ritmo, con el marcador del otro actualizándose en vivo.</p></div>' +

      '<div class="card" style="margin-bottom:16px">' +
        '<span class="eyebrow">Crear un duelo</span>' +
        '<div class="filtros" style="margin:12px 0">' +
          [5,10,15].map(n => '<button class="chip' + (form.n === n ? ' on' : '') +
            '" data-dl-n="' + n + '">' + n + ' preguntas</button>').join('') +
        '</div>' +
        '<button class="btn btn--lg btn--ancho" id="dlCrear">Crear código</button>' +
      '</div>' +

      '<div class="card">' +
        '<span class="eyebrow">Unirme con un código</span>' +
        '<div class="campo" style="margin:12px 0">' +
          '<input id="dlCodigo" maxlength="5" style="text-transform:uppercase;letter-spacing:2px;font-family:var(--mono)" placeholder="Ej: 7K2PQ">' +
        '</div>' +
        '<label class="row" style="gap:8px;align-items:center;font-size:13.5px;color:var(--tinta-3,#666);margin-bottom:12px;cursor:pointer">' +
          '<input type="checkbox" id="dlEspectador"> Solo quiero mirar (espectador, no respondo preguntas)' +
        '</label>' +
        '<button class="btn btn--lg btn--ancho btn--fantasma" id="dlUnirse">Unirme al duelo</button>' +
      '</div>' +
    '</div>';

    UI.$$('[data-dl-n]').forEach(b => b.onclick = () => { form.n = +b.dataset.dlN; menu(); });
    document.getElementById('dlCrear').onclick = crear;
    document.getElementById('dlUnirse').onclick = () => {
      const comoEspectador = document.getElementById('dlEspectador').checked;
      unirse(document.getElementById('dlCodigo').value, comoEspectador);
    };
  }

  async function crear(){
    const preguntas = Motor.seleccionar({ n: form.n });
    if (!preguntas.length) return UI.tostada('No hay preguntas disponibles', 'mal');
    await iniciarSala(codigoAleatorio(), 'host', preguntas.map(p => p.id));
  }

  async function unirse(codigo, comoEspectador){
    codigo = normalizarCodigo(codigo);
    if (codigo.length < 4) return UI.tostada('Ese código está incompleto', 'mal');
    await iniciarSala(codigo, comoEspectador ? 'espectador' : 'invitado', null);
  }

  /* ============================================================
     SALA (espera + sincronizacion)
     ============================================================ */
  async function iniciarSala(codigo, rol, idsPreguntas){
    const u = await Nube.usuario();
    if (!u) return UI.tostada('No hay sesión en la nube', 'mal');
    const perfil = await Nube.perfil();
    const canal = Nube.canal('duelo-' + codigo, { config: { presence: { key: u.id } } });
    if (!canal) return UI.tostada('No se pudo conectar con el servidor', 'mal');

    D = {
      codigo, rol, canal,
      yo: { id: u.id, nombre: (perfil && perfil.nombre) || 'Tú' },
      rival: null,
      ids: idsPreguntas, empezado: false,
      i: 0, elegida: null, revelada: false, correctas: 0, respondidas: 0,
      rivalProgreso: { respondidas: 0, correctas: 0 },
      rivalListo: null, miResultado: null,
      inicio: null, cronometro: null,
      /* Solo lo usa el espectador: uid -> {nombre, respondidas, correctas,
         terminado, ms}. Se llena con los mismos broadcasts de 'progreso' y
         'listo' que ya se mandan los dos jugadores entre si, asi que no
         hace falta que ellos manden nada nuevo ni sepan que los miran. */
      marcador: {}
    };

    if (rol === 'espectador') pintarEspectador();
    else pintarEspera();

    canal
      .on('broadcast', { event: 'empezar' }, ({ payload }) => {
        if (D.rol === 'espectador') return; // el espectador no corre preguntas, solo mira el marcador
        empezarCarrera(payload);
      })
      .on('broadcast', { event: 'progreso' }, ({ payload }) => {
        registrarProgreso(payload);
        if (D.rol === 'espectador') return pintarEspectador();
        if (payload.uid !== D.yo.id) D.rivalProgreso = { respondidas: payload.respondidas, correctas: payload.correctas };
        actualizarMarcador();
      })
      .on('broadcast', { event: 'listo' }, ({ payload }) => {
        registrarProgreso(payload, true);
        if (D.rol === 'espectador') return pintarEspectador();
        if (payload.uid === D.yo.id) return;
        D.rivalListo = payload;
        if (D.miResultado) mostrarResultado();
        else actualizarMarcador();
      })
      .on('presence', { event: 'sync' }, () => sincronizarPresencia())
      .subscribe(async (estado) => {
        if (estado === 'SUBSCRIBED') {
          await canal.track({ nombre: D.yo.nombre, programa: Almacen.programa(), rol: D.rol });
        }
      });
  }

  /* Guarda el marcador de un jugador (host o invitado) segun lo que va
     transmitiendo por 'progreso'/'listo'. Solo lo consume la vista de
     espectador, pero se llama siempre: es barato y evita duplicar la
     logica de "de quien es este payload" en dos sitios. */
  function registrarProgreso(payload, terminado){
    const anterior = D.marcador[payload.uid];
    const meta = metaDe(payload.uid);
    D.marcador[payload.uid] = {
      nombre: (meta && meta.nombre) || (anterior && anterior.nombre) || 'Jugador',
      respondidas: payload.respondidas, correctas: payload.correctas,
      terminado: !!terminado || (anterior && anterior.terminado) || false,
      ms: terminado ? payload.ms : (anterior && anterior.ms)
    };
  }

  function metaDe(uid){
    const estado = D.canal.presenceState();
    const arr = estado[uid];
    return arr && arr[0];
  }

  function otrasClaves(){
    const estado = D.canal.presenceState();
    return Object.keys(estado).filter(k => k !== D.yo.id);
  }

  /* Los "otros" que cuentan para emparejar un duelo: nunca un espectador.
     Que alguien entre solo a mirar no debe arrancar la carrera ni
     convertirse en el rival de nadie. */
  function otrosJugadores(){
    return otrasClaves().filter(k => { const m = metaDe(k); return !m || m.rol !== 'espectador'; });
  }

  function jugadoresConectados(){
    const estado = D.canal.presenceState();
    return Object.keys(estado).filter(k => { const m = estado[k][0]; return !m || m.rol !== 'espectador'; });
  }

  function espectadoresConectados(){
    const estado = D.canal.presenceState();
    return Object.keys(estado).filter(k => { const m = estado[k][0]; return m && m.rol === 'espectador'; }).length;
  }

  function sincronizarPresencia(){
    if (!D) return;
    if (D.rol === 'espectador'){
      if (!D.empezado) pintarEspectador();
      return;
    }
    if (D.empezado) return;
    const otros = otrosJugadores();
    const estado = D.canal.presenceState();

    if (otros.length){
      const meta = estado[otros[0]][0];
      D.rival = { id: otros[0], nombre: meta.nombre || 'Rival' };
      if (meta.programa && meta.programa !== Almacen.programa()){
        UI.tostada('Ese código es de otro programa', 'mal');
        return salir();
      }
    }
    pintarEspera();

    /* Solo el host decide cuando arrancar: si los dos escucharan la
       condicion "somos 2" y las dos mandaran 'empezar', se duplicaria
       el arranque y podrian pelear dos listas de preguntas distintas.
       Los espectadores no cuentan para esta condicion (ver otrosJugadores). */
    if (D.rol === 'host' && otros.length && !D.empezado){
      D.empezado = true;
      const payload = { ids: D.ids, programa: Almacen.programa(), arranca: Date.now() + 3000 };
      D.canal.send({ type:'broadcast', event:'empezar', payload });
      empezarCarrera(payload);
    }
  }

  function pintarEspera(){
    if (!D || D.empezado) return;
    const nEsp = espectadoresConectados();
    V().innerHTML =
    '<div class="escalona" style="max-width:520px;text-align:center">' +
      '<div class="encabezado"><p class="eyebrow">Duelo en vivo</p><h1>' +
      (D.rival ? 'Listos para empezar' : 'Esperando a tu rival') + '</h1></div>' +
      '<div class="card" style="padding:32px 24px">' +
        (D.rol === 'host'
          ? '<span class="eyebrow">Comparte este código</span>' +
            '<div style="font-family:var(--mono);font-size:38px;letter-spacing:6px;margin:12px 0">' + esc(D.codigo) + '</div>'
          : '<p class="muted">Conectado a la sala <b style="font-family:var(--mono)">' + esc(D.codigo) + '</b></p>') +
        '<p class="muted" style="margin-top:10px">' + (D.rival
          ? 'Arrancando contra <b>' + esc(D.rival.nombre) + '</b>…'
          : 'Nadie más se ha unido todavía.') + '</p>' +
        (nEsp ? '<p class="muted" style="font-size:12.5px;margin-top:6px">👀 ' + nEsp +
          (nEsp === 1 ? ' persona mirando' : ' personas mirando') + '</p>' : '') +
      '</div>' +
      '<button class="btn btn--fantasma" id="dlSalirEspera" style="margin-top:12px">Cancelar</button>' +
    '</div>';
    const b = document.getElementById('dlSalirEspera');
    if (b) b.onclick = () => { salir(); App.ir('duelo'); };
  }

  /* ============================================================
     VISTA DE ESPECTADOR
     ------------------------------------------------------------
     No corre preguntas ni cuenta para arrancar el duelo (ver
     otrosJugadores). Solo mira, via presencia, quien esta jugando, y via
     los broadcasts de 'progreso'/'listo' que los jugadores YA se mandan
     entre si, el marcador de cada uno en vivo. Funciona incluso si el
     espectador entra despues de que el duelo ya arranco: no depende del
     broadcast 'empezar' (que no se reenvia a quien llega tarde), solo del
     marcador acumulado en D.marcador.
     ============================================================ */
  function pintarEspectador(){
    if (!D) return;
    const estado = D.canal.presenceState();
    const idsJugadores = jugadoresConectados();
    const nEsp = espectadoresConectados();

    if (idsJugadores.length < 2){
      V().innerHTML =
      '<div class="escalona" style="max-width:520px;text-align:center">' +
        '<div class="encabezado"><p class="eyebrow">Duelo en vivo · espectador</p><h1>Esperando jugadores</h1></div>' +
        '<div class="card" style="padding:28px 22px">' +
          '<p class="muted">Sala <b style="font-family:var(--mono)">' + esc(D.codigo) + '</b> · ' +
            idsJugadores.length + ' de 2 jugadores conectados</p>' +
          (nEsp > 1 ? '<p class="muted" style="font-size:12.5px;margin-top:6px">👀 ' + (nEsp - 1) +
            ' espectadores más</p>' : '') +
        '</div>' +
        '<button class="btn btn--fantasma" style="margin-top:12px" id="dlSalirEspectador">Salir</button>' +
      '</div>';
    } else {
      const filas = idsJugadores.map(id => {
        const meta = estado[id][0] || {};
        const m = D.marcador[id] || { respondidas:0, correctas:0, terminado:false };
        return '<div class="card' + (m.terminado ? ' card--verde' : '') + '" style="padding:16px 18px;text-align:center">' +
          '<span class="eyebrow">' + esc(meta.nombre || 'Jugador') + '</span>' +
          '<div style="font-family:var(--display);font-size:28px;margin-top:6px">' + m.correctas + '/' + m.respondidas + '</div>' +
          (m.terminado ? '<small class="muted">Terminó en ' + UI.reloj(m.ms || 0) + '</small>' : '<small class="muted">Jugando…</small>') +
        '</div>';
      }).join('');
      const ambosTerminaron = idsJugadores.every(id => D.marcador[id] && D.marcador[id].terminado);

      V().innerHTML =
      '<div class="escalona" style="max-width:640px">' +
        '<div class="encabezado"><p class="eyebrow">Duelo en vivo · espectador</p><h1>' +
          (ambosTerminaron ? 'Duelo terminado' : 'Duelo en curso') + '</h1></div>' +
        '<div class="rejilla rejilla--2" style="margin-bottom:16px">' + filas + '</div>' +
        (nEsp > 1 ? '<p class="muted" style="font-size:12.5px;text-align:center">👀 ' + nEsp + ' personas mirando</p>' : '') +
        '<button class="btn btn--fantasma btn--ancho" id="dlSalirEspectador" style="margin-top:12px">Salir</button>' +
      '</div>';
    }
    const b = document.getElementById('dlSalirEspectador');
    if (b) b.onclick = () => { salir(); App.ir('duelo'); };
  }

  /* ============================================================
     LA CARRERA
     ============================================================ */
  function empezarCarrera(payload){
    if (!D || D.corriendo || D.contando) return;
    D.ids = payload.ids;
    D.empezado = true;
    D.contando = true;
    const falta = Math.max(1, Math.round((payload.arranca - Date.now()) / 1000));
    pintarCuentaAtras(falta);
    setTimeout(() => {
      if (!D) return;
      D.corriendo = true;
      D.inicio = payload.arranca;
      D.cronometro = setInterval(() => {
        const el = document.getElementById('dlReloj');
        if (el) el.textContent = UI.reloj(Date.now() - D.inicio);
      }, 1000);
      pintarPregunta();
    }, Math.max(0, payload.arranca - Date.now()));
  }

  function pintarCuentaAtras(seg){
    V().innerHTML =
    '<div class="escalona" style="max-width:420px;text-align:center">' +
      '<div class="encabezado"><p class="eyebrow">Duelo en vivo</p><h1>Arranca ya…</h1></div>' +
      '<div style="font-family:var(--display);font-size:64px" id="dlCuenta">' + seg + '</div>' +
    '</div>';
    let s = seg;
    const t = setInterval(() => {
      s--;
      const el = document.getElementById('dlCuenta');
      if (!el || s < 0){ clearInterval(t); return; }
      el.textContent = Math.max(s, 0);
    }, 1000);
  }

  function pq(){ return Motor.porId(D.ids[D.i]); }

  function pintarPregunta(){
    const p = pq();
    if (!p){
      UI.tostada('Una pregunta de este duelo ya no está disponible', 'mal');
      return terminarPropio();
    }
    const total = D.ids.length;

    V().innerHTML =
    '<div class="row-b" style="margin-bottom:10px;flex-wrap:wrap;gap:8px">' +
      '<span class="eyebrow">Duelo · ' + (D.i + 1) + '/' + total + '</span>' +
      '<span class="mono" id="dlReloj" style="font-size:13px">' + UI.reloj(Date.now() - D.inicio) + '</span>' +
    '</div>' +
    marcadorHtml() +
    '<div class="escalona" style="max-width:760px;padding-top:14px">' +
      (p.caso ? '<p class="pregunta__caso">' + esc(p.caso) + '</p>' : '') +
      '<h2 class="pregunta__enunciado">' + esc(p.enunciado) + '</h2>' +
      '<div class="opciones">' + p.ops.map((o, k) => opcionHtml(p, k)).join('') + '</div>' +
      (D.revelada ? explicacionDuelo(p) : '') +
      '<div class="row wrap" style="gap:9px;margin-top:16px">' +
        (!D.revelada
          ? '<button class="btn" id="dlConfirmar"' + (D.elegida === null ? ' disabled' : '') + '>Confirmar</button>'
          : '<button class="btn" id="dlSiguiente">' + (D.i + 1 < total ? 'Siguiente →' : 'Terminar') + '</button>') +
      '</div>' +
    '</div>';

    enlazarPregunta();
  }

  function marcadorHtml(){
    const total = D.ids.length;
    const nEsp = espectadoresConectados();
    return '<div class="card" style="margin-bottom:14px;padding:14px 18px">' +
      '<div class="row-b" style="font-size:13.5px">' +
        '<span><b>Tú</b> · ' + D.correctas + '/' + D.respondidas + '</span>' +
        '<span style="opacity:.5">vs</span>' +
        '<span><b>' + esc(D.rival ? D.rival.nombre : 'Rival') + '</b> · ' +
          D.rivalProgreso.correctas + '/' + D.rivalProgreso.respondidas + '</span>' +
        (nEsp ? '<span style="opacity:.6;font-size:12px">👀 ' + nEsp + '</span>' : '') +
      '</div>' +
      '<div class="row" style="gap:6px;margin-top:8px">' +
        UI.barra(Math.round(D.respondidas / total * 100)) +
      '</div>' +
    '</div>';
  }

  function opcionHtml(p, k){
    let cls = '';
    if (!D.revelada) cls = D.elegida === k ? ' sel' : '';
    else cls = k === p.ok ? ' correcta' : (k === D.elegida ? ' incorrecta' : ' apagada');
    return '<button class="opcion' + cls + '" data-op="' + k + '"' + (D.revelada ? ' disabled' : '') + '>' +
      '<span class="opcion__letra">' + L[k] + '</span><span>' + esc(p.ops[k]) + '</span></button>';
  }

  function explicacionDuelo(p){
    const ok = D.elegida === p.ok;
    const descartes = Object.keys(p.no || {}).map(k =>
      '<div class="descarte"><b>' + L[k] + '</b><span>' + esc(p.no[k]) + '</span></div>').join('');
    return '<div class="explica">' +
      '<div class="veredicto veredicto--' + (ok ? 'ok' : 'mal') + '">' +
        '<span class="veredicto__sello">' + (ok ? '✓' : '✕') + '</span>' +
        '<span><b>' + (ok ? 'Correcto' : 'Incorrecto') + '</b>' +
        '<small>Correcta: ' + L[p.ok] + '</small></span></div>' +
      (p.exp ? '<div class="bloque bloque--porque"><span class="eyebrow">Por qué</span><p>' + esc(p.exp) + '</p></div>' : '') +
      (p.clave ? '<div class="bloque bloque--clave"><span class="eyebrow">Dato clave</span><p>' + esc(p.clave) + '</p></div>' : '') +
      (descartes ? '<div class="bloque"><span class="eyebrow">Por qué no las otras</span><div class="descartes">' + descartes + '</div></div>' : '') +
    '</div>';
  }

  function enlazarPregunta(){
    UI.$$('[data-op]').forEach(b => b.onclick = () => {
      if (D.revelada) return;
      D.elegida = +b.dataset.op;
      pintarPregunta();
    });
    const conf = document.getElementById('dlConfirmar');
    if (conf) conf.onclick = () => {
      if (D.elegida === null) return;
      D.respondidas++;
      if (D.elegida === pq().ok) D.correctas++;
      D.revelada = true;
      D.canal.send({ type:'broadcast', event:'progreso',
        payload:{ uid: D.yo.id, respondidas: D.respondidas, correctas: D.correctas } });
      pintarPregunta();
    };
    const sig = document.getElementById('dlSiguiente');
    if (sig) sig.onclick = () => {
      D.i++; D.elegida = null; D.revelada = false;
      if (D.i >= D.ids.length) return terminarPropio();
      pintarPregunta();
      window.scrollTo({ top:0, behavior:'smooth' });
    };
  }

  function actualizarMarcador(){
    if (D && D.corriendo && !D.miResultado) pintarPregunta();
  }

  /* ============================================================
     CIERRE
     ============================================================ */
  function terminarPropio(){
    if (D.cronometro) clearInterval(D.cronometro);
    const ms = Date.now() - D.inicio;
    D.miResultado = { correctas: D.correctas, respondidas: D.respondidas, ms };
    D.canal.send({ type:'broadcast', event:'listo',
      payload:{ uid: D.yo.id, correctas: D.correctas, respondidas: D.respondidas, ms } });

    const puntos = D.correctas * 100;
    Nube.registrarDesafio(puntos);

    if (D.rivalListo) mostrarResultado();
    else pintarEsperandoRival();
  }

  function pintarEsperandoRival(){
    V().innerHTML =
    '<div class="escalona" style="max-width:520px;text-align:center">' +
      '<div class="encabezado"><p class="eyebrow">Duelo en vivo</p><h1>Ya terminaste</h1></div>' +
      '<div class="card" style="padding:28px 22px">' +
        '<div style="font-family:var(--display);font-size:34px">' + D.correctas + '/' + D.respondidas + '</div>' +
        '<p class="muted" style="margin-top:10px">Esperando a que <b>' + esc(D.rival ? D.rival.nombre : 'tu rival') +
        '</b> termine · lleva ' + D.rivalProgreso.correctas + '/' + D.rivalProgreso.respondidas + '</p>' +
      '</div>' +
      '<button class="btn btn--fantasma" style="margin-top:12px" id="dlSalirFin">Salir sin esperar</button>' +
    '</div>';
    document.getElementById('dlSalirFin').onclick = () => { salir(); App.ir('duelo'); };
  }

  function mostrarResultado(){
    const yo = D.miResultado, riv = D.rivalListo;
    let veredicto;
    if (yo.correctas !== riv.correctas) veredicto = yo.correctas > riv.correctas ? 'gane' : 'perdi';
    else veredicto = yo.ms < riv.ms ? 'gane' : (yo.ms > riv.ms ? 'perdi' : 'empate');

    const titulo = { gane:'¡Ganaste el duelo!', perdi:'Esta vez no', empate:'Empate' }[veredicto];
    const color = { gane:'card--verde', perdi:'card--rosa', empate:'card--yodo' }[veredicto];

    V().innerHTML =
    '<div class="escalona" style="max-width:600px;text-align:center">' +
      '<div class="encabezado"><p class="eyebrow">Duelo en vivo</p><h1>' + titulo + '</h1></div>' +
      '<div class="rejilla rejilla--2" style="margin-bottom:16px">' +
        '<div class="card ' + (veredicto === 'gane' ? color : '') + '">' +
          '<span class="eyebrow">Tú</span><div style="font-family:var(--display);font-size:32px;margin-top:6px">' +
          yo.correctas + '/' + yo.respondidas + '</div><small class="muted">' + UI.reloj(yo.ms) + '</small></div>' +
        '<div class="card ' + (veredicto === 'perdi' ? color : '') + '">' +
          '<span class="eyebrow">' + esc(D.rival ? D.rival.nombre : 'Rival') + '</span>' +
          '<div style="font-family:var(--display);font-size:32px;margin-top:6px">' + riv.correctas + '/' + riv.respondidas +
          '</div><small class="muted">' + UI.reloj(riv.ms) + '</small></div>' +
      '</div>' +
      '<div class="row wrap" style="gap:9px;justify-content:center">' +
        '<button class="btn" id="dlOtroDuelo">Otro duelo</button>' +
        '<button class="btn btn--fantasma" id="dlInicio">Volver al inicio</button>' +
      '</div>' +
    '</div>';

    document.getElementById('dlOtroDuelo').onclick = () => { salir(); App.ir('duelo'); };
    document.getElementById('dlInicio').onclick = () => { salir(); App.ir('inicio'); };
  }

  /* ============================================================
     SALIR / LIMPIEZA
     ============================================================ */
  function salir(){
    if (D){
      if (D.cronometro) clearInterval(D.cronometro);
      if (D.canal) { try { D.canal.unsubscribe(); } catch (e) {} }
    }
    D = null;
  }

  return { menu, salir };
})();
