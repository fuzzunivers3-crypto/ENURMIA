/* ============================================================
   APP — armazon, navegacion y arranque
   ============================================================ */
window.App = (function () {

  const esc = UI.esc;

  const RUTAS = [
    { id:'inicio',      em:'🏠', nombre:'Inicio',      ver: p => Vistas.inicio(p) },
    { id:'simulacro',   em:'📝', nombre:'Simulacro',   ver: p => Vistas.simulacro(p) },
    { id:'estudiar',    em:'📖', nombre:'Estudiar',    ver: p => Apuntes.menu(p) },
    { id:'temario',     em:'🗂️', nombre:'Temario',     ver: p => Temario.menu(p) },
    { id:'entrenar',    em:'🧠', nombre:'Entrenar',    ver: p => Vistas.entrenar(p) },
    { id:'clinica',     em:'🩺', nombre:'Clínica',     ver: p => Clinica.menu(p) },
    { id:'flashcards',  em:'⚡', nombre:'Flashcards',  ver: p => Flashcards.menu(p) },
    { id:'desafio',     em:'⚔️', nombre:'Desafío',     ver: p => Vistas.desafio(p) },
    { id:'biblioteca',  em:'📚', nombre:'Biblioteca',  ver: p => Vistas.biblioteca(p) },
    { id:'progreso',    em:'📊', nombre:'Progreso',    ver: p => Vistas.progreso(p) },
    { id:'preparacion', em:'🎓', nombre:'¿Estoy listo?', ver: p => Vistas.preparacion(p) },
    { id:'ajustes',     em:'⚙️', nombre:'Ajustes',     ver: p => Vistas.ajustes(p) }
  ];

  const MOVIL = ['inicio','estudiar','flashcards','clinica','progreso'];
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

  function armazon(){
    const s = Almacen.sesion();
    const d = Almacen.datos();
    const r = Motor.resumen();

    document.getElementById('app').innerHTML =
    '<aside class="rail">' +
      '<div class="rail__marca"><span class="marca__sello">✚</span>ENURMIA</div>' +
      RUTAS.slice(0, 9).map(x =>
        '<button class="rail__link" data-ruta="' + x.id + '"><span class="em">' + x.em + '</span>' + esc(x.nombre) + '</button>').join('') +
      '<div class="rail__sep"></div>' +
      RUTAS.slice(9).map(x =>
        '<button class="rail__link" data-ruta="' + x.id + '"><span class="em">' + x.em + '</span>' + esc(x.nombre) + '</button>').join('') +
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
      MOVIL.map(id => {
        const x = RUTAS.find(r => r.id === id);
        return '<button data-ruta="' + x.id + '" title="' + esc(x.nombre) + '">' + x.em + '</button>';
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
    if (!p || p.rol !== 'admin') return;
    if (RUTAS.some(r => r.id === 'admin')) return;
    RUTAS.push({ id:'admin', em:'🛡️', nombre:'Administración', ver: () => Admin.menu() });

    /* Se inserta el boton en el menu sin repintar el armazon: repintarlo
       borraria #vista y, si la respuesta del servidor llega tarde, podria
       cortar una sesion de preguntas ya empezada. */
    const rail = document.querySelector('.rail');
    const pie = rail ? rail.querySelector('.rail__pie') : null;
    if (rail && pie){
      const b = document.createElement('button');
      b.className = 'rail__link';
      b.dataset.ruta = 'admin';
      b.innerHTML = '<span class="em">🛡️</span>';
      b.appendChild(document.createTextNode('Administración'));
      b.onclick = () => ir('admin');
      rail.insertBefore(b, pie);
    }
    marcar();
  }

  function arrancar(){
    if (!Almacen.sesion()){ location.replace('index.html'); return; }
    Motor.aplicarExplicaciones();
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
