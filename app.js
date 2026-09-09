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

  function arrancar(){
    if (!Almacen.sesion()){ location.replace('index.html'); return; }
    Motor.aplicarExplicaciones();
    Almacen.tocarRacha();
    armazon();
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
