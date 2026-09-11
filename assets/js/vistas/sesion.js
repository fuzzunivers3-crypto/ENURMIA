/* ============================================================
   SESION — el motor de preguntas
   Modos: aprender · examen · desafio · razonar
   ============================================================ */
window.Sesion = (function () {

  const esc = UI.esc, L = UI.LETRAS;
  let S = null;              // estado de la sesion activa
  let cronometro = null;

  /* ============================================================
     ARRANQUE
     ============================================================ */
  function iniciar(cfg){
    if (!cfg.preguntas || !cfg.preguntas.length){
      UI.tostada('No hay preguntas que cumplan ese filtro', 'mal');
      return App.ir('inicio');
    }
    S = {
      modo: cfg.modo || 'aprender',
      titulo: cfg.titulo || 'Entrenamiento',
      preguntas: cfg.preguntas,
      i: 0,
      respuestas: [],                 // {qid, elegida, ok, ms, confianza, tipoError, cambio}
      elegida: null,
      previa: null,                   // para detectar cambio de respuesta
      revelada: false,
      inicioPregunta: Date.now(),
      inicioSesion: Date.now(),
      tiempoTotal: cfg.tiempoTotal || null,
      tiempoPregunta: cfg.tiempoPregunta || null,
      restante: cfg.tiempoTotal || cfg.tiempoPregunta || null,
      vidas: cfg.vidas || null,
      combo: 0, mejorCombo: 0, puntos: 0,
      pasoRazon: 0, razonamiento: {},
      defensa: null, confianza: null, usoAyuda: false,
      alTerminar: cfg.alTerminar || null,
      etiqueta: cfg.etiqueta || null
    };
    pintar();
    if (S.tiempoTotal || S.tiempoPregunta) arrancarReloj();
  }

  function salir(){
    detenerReloj();
    S = null;
  }

  /* ============================================================
     RELOJ
     ============================================================ */
  function arrancarReloj(){
    detenerReloj();
    cronometro = setInterval(() => {
      if (!S) return detenerReloj();
      S.restante -= 1000;
      const el = document.getElementById('reloj');
      if (el){
        el.textContent = UI.reloj(S.restante);
        el.parentElement.classList.toggle('reloj--urgente', S.restante <= 30000);
      }
      if (S.restante <= 0){
        if (S.modo === 'desafio'){ detenerReloj(); tiempoAgotadoPregunta(); }
        else { detenerReloj(); terminar(true); }
      }
    }, 1000);
  }
  function detenerReloj(){ if (cronometro){ clearInterval(cronometro); cronometro = null; } }

  function tiempoAgotadoPregunta(){
    if (S.vidas !== null){ S.vidas--; }
    S.combo = 0;
    registrarRespuesta(null, false, true);
    UI.tostada('Se acabó el tiempo', 'mal');
    if (S.vidas !== null && S.vidas <= 0) return terminar();
    setTimeout(siguiente, 700);
  }

  /* ============================================================
     PINTADO PRINCIPAL
     ============================================================ */
  function q(){ return S.preguntas[S.i]; }

  function pintar(){
    const cont = document.getElementById('vista');
    if (S.modo === 'razonar' && S.pasoRazon < 6) return pintarRazonamiento(cont);
    cont.innerHTML = plantillaPregunta();
    enlazar();
  }

  function barraSuperior(){
    const puntos = S.preguntas.map((p, idx) => {
      let c = 'pt';
      const r = S.respuestas.find(x => x.qid === p.id);
      if (idx === S.i) c += ' now';
      else if (r) c += r.ok ? ' ok' : ' mal';
      else if (Motor.estaMarcada(p.id)) c += ' marcada';
      return '<i class="' + c + '"></i>';
    }).join('');

    let reloj = '';
    if (S.restante !== null && S.restante !== undefined){
      reloj = '<div class="reloj"><span class="reloj__trazo">' + UI.ecg(44, 20) + '</span>' +
              '<span id="reloj">' + UI.reloj(S.restante) + '</span></div>';
    }

    let hud = '';
    if (S.modo === 'desafio'){
      const vidas = [0,1,2].map(k => '<span class="vida' + (k < S.vidas ? '' : ' perdida') + '">❤️</span>').join('');
      hud = '<div class="row" style="gap:14px">' +
            '<span class="vidas">' + vidas + '</span>' +
            (S.combo >= 2 ? '<span class="combo">🔥 ' + S.combo + ' seguidas</span>' : '') +
            '<span class="mono" style="font-weight:600">' + S.puntos + ' pts</span></div>';
    }

    return '<div class="sesion__barra">' +
      '<button class="icono" id="btnSalir" title="Salir de la sesión">✕</button>' +
      '<span class="mono nowrap" style="font-size:12.5px;font-weight:600">' + (S.i + 1) + ' / ' + S.preguntas.length + '</span>' +
      '<span class="progreso-pts">' + puntos + '</span>' + hud + reloj + '</div>';
  }

  function plantillaPregunta(){
    const p = q();
    const marcada = Motor.estaMarcada(p.id);
    const aprender = S.modo === 'aprender' || S.modo === 'razonar';

    const opciones = p.ops.map((o, k) => {
      let cls = 'opcion';
      if (S.revelada){
        if (k === p.ok) cls += ' correcta';
        else if (k === S.elegida) cls += ' incorrecta';
        else cls += ' apagada';
      } else if (k === S.elegida) cls += ' sel';
      return '<button class="' + cls + '" data-op="' + k + '"' + (S.revelada ? ' disabled' : '') + '>' +
             '<span class="opcion__letra">' + L[k] + '</span>' +
             '<span class="opcion__texto">' + esc(o) + '</span></button>';
    }).join('');

    let ayudas = '';
    if (aprender && !S.revelada){
      ayudas = '<button class="btn btn--sm btn--fantasma" id="btnPista">💡 Pista</button>' +
               '<button class="btn btn--sm btn--fantasma" id="btnAnalizar">🧠 Analizar el caso</button>';
    }

    let confianza = '';
    if (!S.revelada && S.elegida !== null && S.modo !== 'desafio' && Almacen.datos().ajustes.pedirConfianza){
      confianza = '<div class="confianza"><span>¿Qué tan seguro estás?</span>' +
        ['baja','media','alta'].map(v =>
          '<button class="btn btn--sm ' + (S.confianza === v ? 'btn--carbon' : 'btn--fantasma') +
          '" data-conf="' + v + '">' + (v === 'baja' ? 'Poco' : v === 'media' ? 'Algo' : 'Mucho') + '</button>').join('') +
        '</div>';
    }

    let defender = '';
    if (!S.revelada && S.elegida !== null && aprender && Almacen.datos().ajustes.defenderRespuesta){
      defender = '<div style="margin-top:14px"><label class="eyebrow" style="display:block;margin-bottom:7px">Antes de ver la respuesta: ¿por qué elegiste esa opción?</label>' +
        '<textarea class="campo-largo" id="defensa" placeholder="Escribe el dato que te hizo decidir y por qué descartaste los demás."></textarea></div>';
    }

    const caso = p.caso ? '<p class="pregunta__caso">' + esc(p.caso) + '</p>' : '';

    return barraSuperior() +
      '<div class="sesion"><article class="pregunta">' +
        '<div class="pregunta__meta">' +
          '<span class="chip chip--carbon">' + esc(p.esp) + '</span>' +
          '<span class="chip">' + esc(p.tema) + '</span>' +
          (p.sub && p.sub !== p.tema ? '<span class="chip chip--suero">' + esc(p.sub) + '</span>' : '') +
          (S.modo === 'examen' ? '' : UI.chipDif(p.dif)) +
          (p.fuente === 'MIR' ? '<span class="chip chip--lila" title="Pregunta real de examen MIR, sin explicación propia todavía">MIR ' +
            esc((p.tags && p.tags[1]) || '') + '</span>' : '') +
        '</div>' + caso +
        '<h2 class="pregunta__enunciado">' + esc(p.enunciado) + '</h2>' +
        '<div class="opciones">' + opciones + '</div>' +
        confianza + defender +
        '<div class="acciones-pregunta">' +
          ayudas +
          '<button class="btn btn--sm btn--fantasma" id="btnMarcar">' + (marcada ? '📌 Marcada' : '📌 Marcar') + '</button>' +
          '<span class="grow"></span>' +
          (S.revelada
            ? '<button class="btn" id="btnSiguiente">' + (S.i === S.preguntas.length - 1 ? 'Ver resultados' : 'Siguiente') + ' →</button>'
            : '<button class="btn" id="btnConfirmar"' + (S.elegida === null ? ' disabled' : '') + '>Confirmar</button>') +
        '</div>' +
        (S.revelada ? explicacion() : '') +
      '</article></div>';
  }

  /* ============================================================
     EXPLICACION
     ============================================================ */
  function explicacion(){
    if (S.modo === 'examen') return '';
    const p = q();
    const ok = S.elegida === p.ok;
    const r = S.respuestas[S.respuestas.length - 1] || {};

    const descartes = Object.keys(p.no || {}).map(k =>
      '<div class="descarte"><b>' + L[k] + '</b><span>' + esc(p.no[k]) + '</span></div>').join('');

    let defensa = '';
    if (S.defensa){
      const a = Motor.analizarDefensa(S.defensa, p);
      defensa = '<div class="bloque bloque--trampa"><span class="eyebrow">Tu argumento</span>' +
        '<p style="font-style:italic;margin-bottom:8px">"' + esc(S.defensa) + '"</p><p>' + esc(a.msg) + '</p></div>';
    }

    let error = '';
    if (!ok){
      const pat = Motor.patronDeError(p.id);
      error = '<div class="bloque"><span class="eyebrow">¿Cómo fallaste esta?</span>' +
        '<p style="margin-bottom:10px">Clasificarlo es lo que permite ver tu patrón. Elige el que mejor describa lo que te pasó.</p>' +
        '<div class="errores-tipo">' +
        Motor.TIPOS_ERROR.map(t =>
          '<button class="err-btn' + (r.tipoError === t.id ? ' on' : '') + '" data-err="' + t.id + '">' +
          '<span class="err-punto" style="background:' + t.color + '"></span>' + esc(t.nombre) + '</button>').join('') +
        '</div>' +
        (pat && pat.n >= 3 ? '<p class="muted" style="margin-top:11px;font-size:13px">⚠️ Llevas ' + pat.n +
          ' errores en <b>' + esc(pat.tema) + '</b> en los últimos 10 días. Dominio estimado del tema: ' +
          UI.pctTexto(pat.dominio) + '.</p>' : '') +
        '</div>';
    }

    return '<div class="explica">' +
      '<div class="veredicto veredicto--' + (ok ? 'ok' : 'mal') + '">' +
        '<span class="veredicto__sello">' + (ok ? '✓' : '✕') + '</span>' +
        '<span><b>' + (ok ? 'Correcto' : 'Incorrecto') + '</b>' +
        '<small>' + (ok ? 'Respuesta ' + L[p.ok] : 'Tu respuesta: ' + (S.elegida === null ? 'sin responder' : L[S.elegida]) +
          ' · Correcta: ' + L[p.ok]) + '</small></span></div>' +
      defensa +
      (p.exp
        ? '<div class="bloque bloque--porque"><span class="eyebrow">Por qué ' + L[p.ok] + ' es la correcta</span><p>' + esc(p.exp) + '</p></div>'
        : '<div class="bloque bloque--porque"><span class="eyebrow">Respuesta correcta</span><p>' +
          L[p.ok] + '. ' + esc(p.ops[p.ok]) + '</p></div>' +
          '<div class="bloque bloque--trampa"><span class="eyebrow">Sin explicación verificada todavía</span>' +
          '<p>Esta pregunta viene de un examen real, con su respuesta oficial, pero aún no tiene la explicación redactada ni contrastada con bibliografía. La respuesta es fiable; el porqué está pendiente.</p></div>') +
      (p.clave ? '<div class="bloque bloque--clave"><span class="eyebrow">Dato clave</span><p>' + esc(p.clave) + '</p></div>' : '') +
      (descartes ? '<div class="bloque"><span class="eyebrow">Por qué no las otras</span><div class="descartes">' + descartes + '</div></div>' : '') +
      (p.trampa ? '<div class="bloque bloque--trampa"><span class="eyebrow">La trampa de esta pregunta</span><p>' + esc(p.trampa) + '</p></div>' : '') +
      (p.dx && p.dx.length ? '<div class="bloque"><span class="eyebrow">Diagnósticos a considerar</span><p>' + p.dx.map(esc).join(' · ') + '</p></div>' : '') +
      (p.obj ? '<div class="bloque"><span class="eyebrow">Qué debes recordar</span><p>' + esc(p.obj) + '</p></div>' : '') +
      error +
      '<div class="bloque bloque--fuente"><span class="eyebrow">Bibliografía</span><p>' + esc(p.ref) + '</p></div>' +
    '</div>';
  }

  /* ============================================================
     RAZONAMIENTO GUIADO (6 pasos antes de la pregunta)
     ============================================================ */
  const PASOS = [
    { t:'¿Cuál es el problema principal?', h:'Resume en una frase qué le pasa a este paciente. Todavía no diagnostiques.', tipo:'texto' },
    { t:'¿Cuáles son tus diagnósticos diferenciales?', h:'Marca los que considerarías ante este cuadro.', tipo:'dx' },
    { t:'¿Qué dato apoya más tu primera opción?', h:'Señala el hallazgo que más peso tiene a favor.', tipo:'texto' },
    { t:'¿Qué dato contradice tu diagnóstico?', h:'Un buen clínico busca lo que no encaja.', tipo:'texto' },
    { t:'¿Qué estudio pedirías y por qué?', h:'Un estudio que cambie tu conducta, no uno que solo confirme lo que ya sabes.', tipo:'texto' },
    { t:'¿Cuál es el diagnóstico más probable?', h:'Ahora sí: comprométete con una respuesta.', tipo:'texto' }
  ];

  function pintarRazonamiento(cont){
    const p = q(), paso = PASOS[S.pasoRazon];
    const barras = PASOS.map((x, k) =>
      '<div class="paso' + (k < S.pasoRazon ? ' hecho' : k === S.pasoRazon ? ' actual' : '') + '"><i></i></div>').join('');

    let cuerpo;
    if (paso.tipo === 'dx'){
      const opciones = (p.dx && p.dx.length ? p.dx : ['Sin diferenciales cargados']).slice().sort(() => Math.random() - 0.5);
      S.dxMostrados = opciones;
      cuerpo = '<div class="dx-lista">' + opciones.map((d, k) =>
        '<button class="dx" data-dx="' + k + '"><span class="dx__marca">✓</span><span>' + esc(d) + '</span></button>').join('') + '</div>';
    } else {
      cuerpo = '<textarea class="campo-largo" id="razonTexto" placeholder="Escribe tu razonamiento…">' +
               esc(S.razonamiento[S.pasoRazon] || '') + '</textarea>';
    }

    cont.innerHTML = barraSuperior() +
      '<div class="sesion"><article class="pregunta">' +
        '<div class="pregunta__meta"><span class="chip chip--carbon">Entrena tu razonamiento</span>' +
        '<span class="chip">' + esc(p.esp) + '</span>' +
        '<span class="chip chip--suero">Paso ' + (S.pasoRazon + 1) + ' de 6</span></div>' +
        '<div class="pasos">' + barras + '</div>' +
        (p.caso ? '<p class="pregunta__caso">' + esc(p.caso) + '</p>' : '<p class="pregunta__caso">' + esc(p.enunciado) + '</p>') +
        '<h2 class="pregunta__enunciado">' + esc(paso.t) + '</h2>' +
        '<p class="muted" style="margin-bottom:14px;font-size:14px">' + esc(paso.h) + '</p>' +
        cuerpo +
        '<div class="acciones-pregunta">' +
          (S.pasoRazon > 0 ? '<button class="btn btn--sm btn--fantasma" id="btnAtrasRazon">← Atrás</button>' : '') +
          '<span class="grow"></span>' +
          '<button class="btn" id="btnSigRazon">' + (S.pasoRazon === 5 ? 'Ver la pregunta →' : 'Continuar →') + '</button>' +
        '</div>' +
      '</article></div>';

    document.getElementById('btnSalir').onclick = confirmarSalida;
    const sel = S.razonamiento['dx'] || [];
    UI.$$('.dx').forEach(b => {
      const k = +b.dataset.dx;
      if (sel.indexOf(k) >= 0) b.classList.add('on');
      b.onclick = () => {
        b.classList.toggle('on');
        const arr = S.razonamiento['dx'] || [];
        const i = arr.indexOf(k);
        if (i >= 0) arr.splice(i, 1); else arr.push(k);
        S.razonamiento['dx'] = arr;
      };
    });
    const atras = document.getElementById('btnAtrasRazon');
    if (atras) atras.onclick = () => { S.pasoRazon--; pintar(); };
    document.getElementById('btnSigRazon').onclick = () => {
      const t = document.getElementById('razonTexto');
      if (t){
        if (t.value.trim().length < 3) return UI.tostada('Escribe tu razonamiento antes de continuar', 'mal');
        S.razonamiento[S.pasoRazon] = t.value.trim();
      }
      S.pasoRazon++;
      pintar();
    };
  }

  /* ============================================================
     EVENTOS DE LA PREGUNTA
     ============================================================ */
  function enlazar(){
    document.getElementById('btnSalir').onclick = confirmarSalida;

    UI.$$('.opcion').forEach(b => {
      b.onclick = () => {
        if (S.revelada) return;
        if (S.elegida !== null && S.elegida !== +b.dataset.op) S.previa = S.elegida;
        S.elegida = +b.dataset.op;
        pintar();
      };
    });

    UI.$$('[data-conf]').forEach(b => {
      b.onclick = () => { S.confianza = b.dataset.conf; pintar(); };
    });

    const marcar = document.getElementById('btnMarcar');
    if (marcar) marcar.onclick = () => {
      const ahora = Motor.alternarMarcada(q().id);
      UI.tostada(ahora ? 'Pregunta marcada para revisar' : 'Marca retirada');
      pintar();
    };

    const pista = document.getElementById('btnPista');
    if (pista) pista.onclick = () => {
      S.usoAyuda = true;
      UI.modal('<h3 style="font-size:20px;margin-bottom:10px">Pista</h3>' +
        '<p style="line-height:1.6">' + esc(q().clave) + '</p>' +
        '<p class="muted" style="margin-top:14px;font-size:13px">Usar pistas no está penalizado, pero queda registrado: las preguntas resueltas con ayuda vuelven antes.</p>' +
        '<button class="btn btn--ancho" style="margin-top:18px" onclick="this.closest(\'.velo\').remove()">Entendido</button>');
    };

    const analizar = document.getElementById('btnAnalizar');
    if (analizar) analizar.onclick = () => {
      S.usoAyuda = true;
      const p = q();
      UI.modal('<h3 style="font-size:20px;margin-bottom:12px">Cómo desarmar este caso</h3>' +
        '<div class="bloque"><span class="eyebrow">1 · Problema principal</span><p>Léelo otra vez y resume en una frase qué le pasa al paciente.</p></div>' +
        '<div class="bloque"><span class="eyebrow">2 · Diferenciales en juego</span><p>' +
          (p.dx && p.dx.length ? p.dx.map(esc).join(' · ') : 'Piensa en al menos tres posibilidades antes de elegir.') + '</p></div>' +
        '<div class="bloque"><span class="eyebrow">3 · Qué habilidad se te pide</span><p>' + esc(p.hab) + '</p></div>' +
        '<div class="bloque"><span class="eyebrow">4 · La pregunta detrás de la pregunta</span><p>Antes de responder, pregúntate qué dato del enunciado obliga a elegir una opción y a descartar las demás.</p></div>' +
        '<button class="btn btn--ancho" style="margin-top:16px" onclick="this.closest(\'.velo\').remove()">Volver a la pregunta</button>');
    };

    const conf = document.getElementById('btnConfirmar');
    if (conf) conf.onclick = confirmar;

    const sig = document.getElementById('btnSiguiente');
    if (sig) sig.onclick = siguiente;

    UI.$$('[data-err]').forEach(b => {
      b.onclick = () => {
        const r = S.respuestas[S.respuestas.length - 1];
        const d = Almacen.datos();
        const hist = d.respuestas[d.respuestas.length - 1];
        r.tipoError = b.dataset.err;
        if (hist && hist.qid === r.qid) hist.tipoError = b.dataset.err;
        Almacen.guardar();
        UI.$$('[data-err]').forEach(x => x.classList.remove('on'));
        b.classList.add('on');
        UI.tostada('Anotado. Lo verás en tu análisis de errores');
      };
    });
  }

  function confirmar(){
    if (S.elegida === null) return;
    const p = q(), ok = S.elegida === p.ok;
    const t = document.getElementById('defensa');
    if (t) S.defensa = t.value.trim() || null;

    registrarRespuesta(S.elegida, ok, false);

    if (S.modo === 'desafio'){
      if (ok){
        S.combo++; S.mejorCombo = Math.max(S.mejorCombo, S.combo);
        S.puntos += 100 * Math.min(5, 1 + Math.floor(S.combo / 2)) + Math.max(0, Math.round(S.restante / 1000)) * 2;
        UI.tostada('¡Correcto! +' + (S.combo >= 2 ? 'combo x' + Math.min(5, 1 + Math.floor(S.combo / 2)) : '100'), 'ok');
      } else {
        S.combo = 0; S.vidas--;
        UI.tostada('Fallaste. Te queda' + (S.vidas === 1 ? ' 1 vida' : 'n ' + Math.max(0, S.vidas) + ' vidas'), 'mal');
      }
      detenerReloj();
      if (S.vidas <= 0) return terminar();
      S.revelada = true; pintar();
      return;
    }

    if (S.modo === 'examen'){
      siguiente();
      return;
    }

    S.revelada = true;
    const nuevas = Motor.revisarMedallas();
    nuevas.forEach(m => UI.tostada(m.em + ' Medalla: ' + m.nombre, 'ok'));
    pintar();
    const ex = document.querySelector('.explica');
    if (ex) ex.scrollIntoView({ behavior:'smooth', block:'nearest' });
  }

  function registrarRespuesta(elegida, ok, agotado){
    const p = q();
    const reg = {
      qid: p.id, elegida, ok, ms: Date.now() - S.inicioPregunta,
      modo: S.modo, confianza: S.confianza,
      cambio: S.previa !== null && !ok, ayuda: S.usoAyuda,
      tipoError: agotado ? 'lectura' : (S.previa !== null && !ok ? 'cambio' : null)
    };
    S.respuestas.push(reg);
    Motor.registrar(reg);
  }

  function siguiente(){
    S.i++;
    S.elegida = null; S.previa = null; S.revelada = false;
    S.confianza = null; S.defensa = null; S.usoAyuda = false;
    S.pasoRazon = 0; S.razonamiento = {};
    S.inicioPregunta = Date.now();
    if (S.i >= S.preguntas.length) return terminar();
    if (S.modo === 'desafio'){ S.restante = S.tiempoPregunta; arrancarReloj(); }
    pintar();
    window.scrollTo({ top:0, behavior:'smooth' });
  }

  function confirmarSalida(){
    if (S.respuestas.length === 0){ salir(); return App.ir('inicio'); }
    UI.modal('<h3 style="font-size:21px;margin-bottom:10px">¿Salir de la sesión?</h3>' +
      '<p class="muted">Llevas ' + S.respuestas.length + ' de ' + S.preguntas.length +
      ' preguntas. Lo respondido ya quedó guardado; lo que falta se pierde.</p>' +
      '<div class="row" style="margin-top:20px;gap:9px">' +
      '<button class="btn btn--fantasma grow" onclick="this.closest(\'.velo\').remove()">Seguir aquí</button>' +
      '<button class="btn grow" id="siSalir">Salir</button></div>');
    document.getElementById('siSalir').onclick = () => {
      document.querySelector('.velo').remove();
      terminar();
    };
  }

  /* ============================================================
     RESULTADOS
     ============================================================ */
  function terminar(porTiempo){
    detenerReloj();
    const res = S.respuestas;
    const ok = res.filter(x => x.ok).length;
    const total = res.length || 1;
    const pct = Math.round(ok / total * 100);
    const duracion = Date.now() - S.inicioSesion;

    if (S.modo === 'examen' || S.modo === 'simulacro'){
      const porEsp = {};
      res.forEach(r => {
        const p = Motor.porId(r.qid); if (!p) return;
        porEsp[p.esp] = porEsp[p.esp] || { n:0, ok:0 };
        porEsp[p.esp].n++; if (r.ok) porEsp[p.esp].ok++;
      });
      Motor.guardarSimulacro({
        fecha: Date.now(), total: S.preguntas.length, respondidas: res.length,
        correctas: ok, precision: pct, ms: duracion, porEsp,
        etiqueta: S.etiqueta || 'Simulacro'
      });
    }

    const nuevas = Motor.revisarMedallas();

    // desglose por especialidad
    const porEsp = {};
    res.forEach(r => {
      const p = Motor.porId(r.qid); if (!p) return;
      porEsp[p.esp] = porEsp[p.esp] || { n:0, ok:0 };
      porEsp[p.esp].n++; if (r.ok) porEsp[p.esp].ok++;
    });
    const filasEsp = Object.keys(porEsp).sort().map(e => {
      const x = porEsp[e], p = Math.round(x.ok / x.n * 100);
      return '<div class="dominio__fila"><div class="row-b"><b>' + esc(e) + '</b>' +
        '<span class="mono">' + x.ok + '/' + x.n + ' · ' + p + '%</span></div>' + UI.barra(p) + '</div>';
    }).join('');

    // lista para revisar
    const falladas = res.filter(x => !x.ok);
    const listaFallos = falladas.map(r => {
      const p = Motor.porId(r.qid);
      return '<div class="item-lista" data-rev="' + p.id + '">' +
        '<span class="item-lista__n">' + esc(p.id) + '</span>' +
        '<span class="grow"><b style="display:block;font-size:14px">' + esc(p.sub) + '</b>' +
        '<small class="muted">' + esc(p.esp) + ' · ' + esc(p.tema) + '</small></span>' +
        '<span class="chip chip--sangria">Ver por qué</span></div>';
    }).join('');

    let extra = '';
    if (S.modo === 'desafio'){
      /* Aqui es donde el puntaje deja de ser un numero de pantalla y pasa a
         existir: se guarda la marca en local y, si hay cuenta en la nube, se
         manda al servidor. Sin esta llamada el ranking no tendria de donde
         salir, porque hasta ahora los puntos morian al cerrar la sesion. */
      const marca = Almacen.registrarDesafio(S.puntos) || {};
      const sello = marca.recordHistorico ? '<div class="card card--rosa" style="margin-bottom:18px">' +
            '<b>🏆 Nueva mejor marca: ' + S.puntos + ' puntos.</b>' +
            '<p class="muted" style="margin-top:4px">Superaste todo lo que habías hecho antes en modo desafío.</p></div>'
          : marca.recordMes ? '<div class="card card--yodo" style="margin-bottom:18px">' +
            '<b>📅 Mejor marca del mes: ' + S.puntos + ' puntos.</b>' +
            '<p class="muted" style="margin-top:4px">Tu récord histórico sigue en ' + marca.mejor + '.</p></div>'
          : '';
      extra = '<div class="rejilla rejilla--3" style="margin-bottom:18px">' +
        '<div class="metrica"><b>' + S.puntos + '</b><span>Puntos</span></div>' +
        '<div class="metrica"><b>' + S.mejorCombo + '</b><span>Mejor racha seguida</span></div>' +
        '<div class="metrica"><b>' + Math.max(0, S.vidas) + '</b><span>Vidas restantes</span></div></div>' +
        sello;
    }

    const frag = Motor.fragilidad();
    const nota = pct >= 85 ? 'Dominio sólido de este bloque.'
      : pct >= 70 ? 'Vas bien. Lo que fallaste es donde está la ganancia.'
      : pct >= 50 ? 'Base presente, pero hay huecos que conviene cerrar antes del examen.'
      : 'Este bloque necesita estudio de fondo, no solo más preguntas.';

    document.getElementById('vista').innerHTML =
      '<div class="sesion escalona">' +
        (porTiempo ? '<div class="aviso" style="margin-bottom:16px">Se agotó el tiempo. Se calificó lo respondido.</div>' : '') +
        '<div class="encabezado"><p class="eyebrow">' + esc(S.titulo) + '</p>' +
        '<h1>' + pct + '% de precisión</h1>' +
        '<p>' + ok + ' correctas de ' + res.length + ' respondidas · ' + UI.reloj(duracion) + ' en total. ' + nota + '</p></div>' +
        extra +
        '<div class="rejilla rejilla--3" style="margin-bottom:18px">' +
          '<div class="metrica"><b>' + ok + '</b><span>Correctas</span></div>' +
          '<div class="metrica"><b>' + (res.length - ok) + '</b><span>Incorrectas</span></div>' +
          '<div class="metrica"><b>' + UI.reloj(Math.round(duracion / Math.max(1, res.length))) + '</b><span>Promedio por pregunta</span></div>' +
        '</div>' +
        (frag.total >= 5 && frag.fragil > 0 ?
          '<div class="card card--yodo" style="margin-bottom:18px"><span class="eyebrow">Confianza vs conocimiento</span>' +
          '<p style="margin-top:6px">Acertaste ' + frag.fragil + ' preguntas declarando poca seguridad. Eso es conocimiento frágil: la plataforma las traerá de vuelta antes de lo normal.</p></div>' : '') +
        (filasEsp ? '<div class="card" style="margin-bottom:18px"><span class="eyebrow">Desglose por especialidad</span>' +
          '<div class="dominio" style="margin-top:14px">' + filasEsp + '</div></div>' : '') +
        (listaFallos ? '<div class="card" style="margin-bottom:18px"><span class="eyebrow">Lo que fallaste</span>' +
          '<p class="muted" style="margin:6px 0 14px;font-size:13.5px">Toca cualquiera para leer la explicación completa.</p>' +
          '<div style="display:flex;flex-direction:column;gap:9px">' + listaFallos + '</div></div>'
          : '<div class="card card--verde" style="margin-bottom:18px"><b>Sin errores en esta sesión.</b><p class="muted" style="margin-top:4px">Sube la dificultad: en el modo desafío te esperan los casos difíciles.</p></div>') +
        (nuevas.length ? '<div class="card card--rosa" style="margin-bottom:18px"><span class="eyebrow">Nuevas medallas</span><p style="margin-top:6px">' +
          nuevas.map(m => m.em + ' ' + esc(m.nombre)).join(' · ') + '</p></div>' : '') +
        '<div class="row wrap" style="gap:9px">' +
          (falladas.length ? '<button class="btn" id="btnRepasar">Repasar solo lo fallado</button>' : '') +
          '<button class="btn btn--fantasma" id="btnOtra">Otra sesión igual</button>' +
          (S.modo === 'desafio' ? '<button class="btn btn--fantasma" id="btnRanking">Ver la clasificación</button>' : '') +
          '<button class="btn btn--fantasma" id="btnProgreso">Ver mi progreso</button>' +
          '<button class="btn btn--carbon" id="btnInicio">Volver al inicio</button>' +
        '</div>' +
      '</div>';

    const cfgPrevia = { modo:S.modo, titulo:S.titulo, preguntas:S.preguntas.slice(),
                        tiempoTotal:S.tiempoTotal, tiempoPregunta:S.tiempoPregunta, vidas:3 };
    const idsFallados = falladas.map(x => x.qid);

    UI.$$('[data-rev]').forEach(el => {
      el.onclick = () => revisarPregunta(el.dataset.rev);
    });
    const rep = document.getElementById('btnRepasar');
    if (rep) rep.onclick = () => iniciar({ modo:'aprender', titulo:'Repaso de errores',
      preguntas: idsFallados.map(Motor.porId).filter(Boolean) });
    document.getElementById('btnOtra').onclick = () => {
      const nuevasP = Motor.seleccionar({ n: cfgPrevia.preguntas.length });
      iniciar({ ...cfgPrevia, preguntas: nuevasP.length ? nuevasP : cfgPrevia.preguntas });
    };
    const btnRk = document.getElementById('btnRanking');
    if (btnRk) btnRk.onclick = () => { salir(); App.ir('ranking'); };
    document.getElementById('btnProgreso').onclick = () => { salir(); App.ir('progreso'); };
    document.getElementById('btnInicio').onclick = () => { salir(); App.ir('inicio'); };
  }

  /* ---------- revisar una pregunta suelta ---------- */
  function revisarPregunta(qid){
    const p = Motor.porId(qid); if (!p) return;
    const descartes = Object.keys(p.no || {}).map(k =>
      '<div class="descarte"><b>' + L[k] + '</b><span>' + esc(p.no[k]) + '</span></div>').join('');
    UI.modal(
      '<div class="pregunta__meta"><span class="chip chip--carbon">' + esc(p.esp) + '</span>' +
      '<span class="chip">' + esc(p.tema) + '</span></div>' +
      (p.caso ? '<p class="pregunta__caso" style="font-size:15px;margin-bottom:12px">' + esc(p.caso) + '</p>' : '') +
      '<h3 style="font-size:19px;margin-bottom:14px">' + esc(p.enunciado) + '</h3>' +
      '<div class="opciones" style="margin-bottom:16px">' +
        p.ops.map((o, k) => '<div class="opcion ' + (k === p.ok ? 'correcta' : 'apagada') + '">' +
        '<span class="opcion__letra">' + L[k] + '</span><span class="opcion__texto">' + esc(o) + '</span></div>').join('') +
      '</div>' +
      '<div class="bloque bloque--porque"><span class="eyebrow">Por qué</span><p>' + esc(p.exp) + '</p></div>' +
      '<div class="bloque bloque--clave"><span class="eyebrow">Dato clave</span><p>' + esc(p.clave) + '</p></div>' +
      (descartes ? '<div class="bloque"><span class="eyebrow">Por qué no las otras</span><div class="descartes">' + descartes + '</div></div>' : '') +
      (p.trampa ? '<div class="bloque bloque--trampa"><span class="eyebrow">La trampa</span><p>' + esc(p.trampa) + '</p></div>' : '') +
      '<div class="bloque bloque--fuente"><span class="eyebrow">Bibliografía</span><p>' + esc(p.ref) + '</p></div>' +
      '<button class="btn btn--ancho" style="margin-top:16px" onclick="this.closest(\'.velo\').remove()">Cerrar</button>');
  }

  return { iniciar, salir, revisarPregunta };
})();
