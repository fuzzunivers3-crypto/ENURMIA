/* ============================================================
   APP — armazon, navegacion y arranque
   ============================================================ */
window.App = (function () {

  const esc = UI.esc;

  /* Todas las pantallas que existen. Cada programa arma su menu con las
     que le sirven: no es lo mismo preparar una oposicion que aprobar un
     cuatrimestre, y forzar el mismo orden a los dos seria comodo para mi
     y malo para ellos. */
  const PANTALLAS = {
    inicio:      { em:'🏠', nombre:'Inicio',         ver: p => Vistas.inicio(p) },
    simulacro:   { em:'📝', nombre:'Simulacro',      ver: p => Vistas.simulacro(p) },
    estudiar:    { em:'📖', nombre:'Estudiar',       ver: p => Apuntes.menu(p) },
    temario:     { em:'🗂️', nombre:'Temario',        ver: p => Temario.menu(p) },
    entrenar:    { em:'🧠', nombre:'Entrenar',       ver: p => Vistas.entrenar(p) },
    practicar:   { em:'🧠', nombre:'Practicar',      ver: p => Vistas.entrenar(p) },
    clinica:     { em:'🩺', nombre:'Clínica',        ver: p => Clinica.menu(p) },
    flashcards:  { em:'⚡', nombre:'Flashcards',     ver: p => Flashcards.menu(p) },
    material:    { em:'📎', nombre:'Mi material',    ver: p => Material.menu(p) },
    razonar:     { em:'🔍', nombre:'Razonar',        ver: p => Vistas.razonar(p) },
    desafio:     { em:'⚔️', nombre:'Desafío',        ver: p => Vistas.desafio(p) },
    ranking:     { em:'🏆', nombre:'Clasificación',  ver: () => Ranking.menu() },
    biblioteca:  { em:'📚', nombre:'Biblioteca',     ver: p => Vistas.biblioteca(p) },
    progreso:    { em:'📊', nombre:'Progreso',       ver: p => Vistas.progreso(p) },
    preparacion: { em:'🎓', nombre:'¿Estoy listo?',  ver: p => Vistas.preparacion(p) },
    ajustes:     { em:'⚙️', nombre:'Ajustes',        ver: p => Vistas.ajustes(p) },
    admin:       { em:'🛡️', nombre:'Administración', ver: () => Admin.menu() }
  };

  /* ENURMIA va de examen: el simulacro arriba y todo apuntando a el.
     UNIRMIA va de aprender una asignatura: primero leer y memorizar,
     despues practicar, y solo entonces razonar sobre lo aprendido. Por eso
     el orden no es el mismo ni las pantallas tampoco: un estudiante de
     cuatrimestre 7 no tiene nada que hacer en un simulacro del ENURM. */
  const MENUS = {
    enurm: {
      arriba: ['inicio','simulacro','estudiar','temario','entrenar','clinica','flashcards','desafio','ranking','biblioteca'],
      abajo:  ['progreso','preparacion','ajustes'],
      movil:  ['inicio','estudiar','flashcards','clinica','progreso']
    },
    unirm: {
      arriba: ['inicio','estudiar','temario','flashcards','material','practicar','razonar','desafio','ranking'],
      abajo:  ['progreso','ajustes'],
      movil:  ['inicio','estudiar','flashcards','practicar','progreso']
    }
  };

  /* El rol lo confirma el servidor despues de arrancar, asi que se guarda
     en una bandera y no como una ruta suelta: RUTAS se recalcula en cada
     repintado y un push se habria perdido. */
  let esAdmin = false;

  function menu(){
    const m = MENUS[Almacen.programa()] || MENUS.enurm;
    if (!esAdmin) return m;
    return { arriba: m.arriba, abajo: m.abajo.concat('admin'), movil: m.movil };
  }

  function rutas(){
    const m = menu();
    return m.arriba.concat(m.abajo).map(id => Object.assign({ id }, PANTALLAS[id]));
  }

  /* Se recalcula en cada repintado porque el programa puede confirmarse
     tarde: el servidor responde despues de que la pantalla ya este puesta. */
  let RUTAS = rutas();
  let actual = 'inicio';

  function ir(id, param){
    const ruta = RUTAS.find(r => r.id === id) || RUTAS[0];
    if (window.Sesion) Sesion.salir();
    if (window.Flashcards) Flashcards.salir();
    actual = ruta.id;
    marcar();
    document.getElementById('vista').innerHTML = '';
    ruta.ver(param);
    window.scrollTo({ top:0, behavior:'instant' in window ? 'instant' : 'auto' });
    try { history.replaceState(null, '', '#' + ruta.id); } catch (e) {}
  }

  function marcar(){
    UI.$$('.rail__link').forEach(b => b.classList.toggle('on', b.dataset.ruta === actual));
    UI.$$('.movil button').forEach(b => b.classList.toggle('on', b.dataset.ruta === actual));
  }

  function marcaPrograma(){ return Almacen.programa() === 'unirm' ? 'UNIRMIA' : 'ENURMIA'; }

  function boton(id){
    const x = PANTALLAS[id];
    return '<button class="rail__link" data-ruta="' + id + '"><span class="em">' + x.em + '</span>' + esc(x.nombre) + '</button>';
  }

  function armazon(){
    const s = Almacen.sesion();
    RUTAS = rutas();
    document.title = marcaPrograma();
    const d = Almacen.datos();
    const r = Motor.resumen();

    document.getElementById('app').innerHTML =
    '<aside class="rail">' +
      '<div class="rail__marca"><span class="marca__sello">✚</span>' +
        marcaPrograma() + '</div>' +
      menu().arriba.map(id => boton(id)).join('') +
      '<div class="rail__sep"></div>' +
      menu().abajo.map(id => boton(id)).join('') +
      '<div class="rail__pie">' +
        '<span class="eyebrow">Racha</span>' +
        '<div class="rail__racha"><b>' + r.racha + '</b><span style="font-size:12px;opacity:.6">' +
          (r.racha === 1 ? 'día' : 'días') + '</span></div>' +
        '<div class="rail__trazo">' + UI.ecg(190, 26) + '</div>' +
      '</div>' +
    '</aside>' +

    '<main class="lienzo">' +
      '<div class="barra-sup">' +
        '<div class="buscador"><span>🔍</span>' +
          '<input id="buscarGlobal" placeholder="Buscar un tema: dengue, preeclampsia, hiperpotasemia…"></div>' +
        '<span class="grow"></span>' +
        '<button class="icono" id="btnRachaTop" title="Racha">🔥</button>' +
        '<div class="perfil" id="perfilTop">' +
          '<span class="avatar">' + esc(d.perfil.nombre.charAt(0).toUpperCase()) + '</span>' +
          '<span><b>' + esc(d.perfil.nombre) + '</b><small>' + esc(s.usuario) + '</small></span>' +
        '</div>' +
      '</div>' +
      '<div id="vista"></div>' +
    '</main>' +

    '<nav class="movil">' +
      menu().movil.map(id => {
        const x = PANTALLAS[id];
        return '<button data-ruta="' + id + '" title="' + esc(x.nombre) + '">' + x.em + '</button>';
      }).join('') +
    '</nav>';

    UI.$$('[data-ruta]').forEach(b => b.onclick = () => ir(b.dataset.ruta));

    document.getElementById('perfilTop').onclick = () => ir('ajustes');
    document.getElementById('btnRachaTop').onclick = () => {
      UI.tostada('🔥 ' + r.racha + (r.racha === 1 ? ' día seguido' : ' días seguidos') + ' entrenando');
    };

    const buscar = document.getElementById('buscarGlobal');
    buscar.onkeydown = e => {
      if (e.key !== 'Enter') return;
      const t = buscar.value.trim();
      if (!t) return;
      ir('biblioteca');
      setTimeout(() => {
        const campo = document.getElementById('bibBuscar');
        if (campo){ campo.value = t; campo.dispatchEvent(new Event('input')); }
      }, 60);
    };
  }

  /* La subida a la nube va con 4 segundos de retardo para no lanzar una
     peticion por cada click. Eso deja una ventana pequena de perdida si
     el estudiante cierra de golpe, asi que forzamos la subida cuando la
     pestana deja de estar visible, que es el momento fiable para hacerlo
     (beforeunload aborta las peticiones a medias en muchos navegadores). */
  function vigilarSincronizacion(){
    const s = Almacen.sesion();
    if (!s || !s.nube) return;
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') Almacen.sincronizarYa();
    });
    window.addEventListener('online', () => Almacen.sincronizarYa());
    Almacen.alSincronizar(estado => {
      const p = document.getElementById('perfilTop');
      if (!p) return;
      p.dataset.sync = estado;
      p.title = estado === 'ok'       ? 'Progreso guardado en la nube'
              : estado === 'error'    ? 'No se pudo sincronizar. Se reintentará.'
              : estado === 'subiendo' ? 'Sincronizando…'
              : estado === 'pendiente'? 'Cambios sin subir todavía'
              : '';
    });
  }

  /* El rol se pregunta al servidor, no se deduce del navegador. Si la
     respuesta es 'admin' se anade la ruta y se repinta el armazon para
     que aparezca en el menu. Aunque alguien forzara la ruta a mano, el
     panel no le devolveria nada: el RLS decide, no esta pantalla. */
  async function comprobarRol(){
    const s = Almacen.sesion();
    if (!s || !s.nube || !window.Nube || !Nube.disponible()) return;
    let p = null;
    try { p = await Nube.perfil(); } catch (e) { return; }
    if (!p) return;

    /* El programa lo dice el servidor, no este navegador. Si no coincide con
       el reflejo local hay que corregirlo, y eso cambia el menu entero:
       ENURMIA y UNIRMIA no tienen las mismas pantallas. Se repinta solo la
       barra lateral, nunca #vista: si la respuesta llega tarde y el
       estudiante ya empezo una sesion de preguntas, repintar la cortaria. */
    const cambioPrograma = p.programa && p.programa !== Almacen.programa();
    if (cambioPrograma) Almacen.fijarPrograma(p.programa);
    if (p.rol === 'admin') esAdmin = true;
    if (!cambioPrograma && !esAdmin) return;

    RUTAS = rutas();
    document.title = marcaPrograma();
    repintarBarra();
    marcar();
  }

  /* Rehace la barra lateral dejando #vista intacto. */
  function repintarBarra(){
    const rail = document.querySelector('.rail');
    if (!rail) return;
    const marca = rail.querySelector('.rail__marca');
    const pie = rail.querySelector('.rail__pie');
    if (marca) marca.innerHTML = '<span class="marca__sello">✚</span>' + marcaPrograma();
    rail.querySelectorAll('.rail__link, .rail__sep').forEach(e => e.remove());
    const trozo = document.createElement('div');
    trozo.innerHTML = menu().arriba.map(id => boton(id)).join('') +
      '<div class="rail__sep"></div>' + menu().abajo.map(id => boton(id)).join('');
    while (trozo.firstChild) rail.insertBefore(trozo.firstChild, pie);
    rail.querySelectorAll('[data-ruta]').forEach(b => b.onclick = () => ir(b.dataset.ruta));
  }

  function arrancar(){
    if (!Almacen.sesion()){ location.replace('index.html'); return; }
    Motor.aplicarExplicaciones();
    /* Las tarjetas del material propio se rehacen al arrancar: viven en el
       progreso, no en un archivo, asi que no existen hasta que alguien las
       vuelve a generar a partir del texto guardado. */
    if (window.Material) try { Material.sembrar(); } catch (e) {}
    Almacen.tocarRacha();
    armazon();
    vigilarSincronizacion();
    comprobarRol();
    const hash = (location.hash || '').replace('#','');
    ir(RUTAS.some(r => r.id === hash) ? hash : 'inicio');

    // atajos de teclado
    document.addEventListener('keydown', e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const mapa = { '1':'inicio','2':'estudiar','3':'temario','4':'entrenar','5':'simulacro','6':'clinica','7':'flashcards','8':'progreso' };
      if (mapa[e.key]) ir(mapa[e.key]);
      if (/^[a-dA-D]$/.test(e.key)){
        const k = 'abcd'.indexOf(e.key.toLowerCase());
        const op = UI.$$('.opcion')[k];
        if (op && !op.disabled) op.click();
      }
      if (e.key === 'Enter'){
        const c = document.getElementById('btnConfirmar') || document.getElementById('btnSiguiente');
        if (c && !c.disabled) c.click();
      }
    });
  }

  return { ir, arrancar, RUTAS };
})();

document.addEventListener('DOMContentLoaded', App.arrancar);
