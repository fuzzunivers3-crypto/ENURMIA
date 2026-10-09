/* ============================================================
   MEDICINA PRACTICA (ENURMIA)
   Portada que reune los bloques de uso clinico: cada uno es una
   pantalla propia con ruta directa. Un bloque aparece activo solo
   si su modulo esta cargado; si no, sale "en preparacion".
   ============================================================ */
window.MedPractica = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  const BLOQUES = [
    { id: 'calculos',    modulo: 'Calculos',    em: '🧮', nombre: 'Cálculos médicos',
      desc: 'Cómo se hacen, para qué sirven, por qué se hacen y cómo ayudan al paciente. Con calculadora y casos para practicar.' },
    { id: 'tubos',       modulo: 'Tubos',       em: '🧪', nombre: 'Tubos de laboratorio',
      desc: 'El color de cada tubo, qué contiene y qué pruebas se piden en él, animado.' },
    { id: 'laboratorio', modulo: 'Laboratorio', em: '🔬', nombre: 'Analíticas e imágenes',
      desc: 'Para qué sirve cada prueba, qué diagnóstico da sola o en combinación, cuándo pedirla, y un simulacro para diagnosticar.' },
    { id: 'emergencias', modulo: 'Emergencias', em: '🚑', nombre: 'Emergencias médicas',
      desc: 'Cómo abordarlas: qué hacer, qué no hacer, cuándo y cómo salvar una vida.' },
    { id: 'cronicas',    modulo: 'Cronicas',    em: '🩺', nombre: 'Enfermedades crónicas',
      desc: 'Manejo según las guías oficiales, con nivel académico alto.' }
  ];

  /* cada bloque, un tono de la paleta del logo (vino → rosa) */
  const TONOS = {
    calculos: ['#8A1A3E', '#47061C'], tubos: ['#C9476A', '#63102C'], laboratorio: ['#63102C', '#24071A'],
    emergencias: ['#A8233F', '#47061C'], cronicas: ['#F96F89', '#8A1A3E']
  };

  function menu(){
    const J = window.Juego;
    V().innerHTML =
    '<div class="escalona" style="max-width:960px">' +
      '<section class="mp-hero">' +
        '<svg class="mp-ecg" viewBox="0 0 260 60" aria-hidden="true"><path d="M0 30 H70 L80 30 L88 14 L96 44 L104 4 L112 52 L120 30 H170 L178 22 L186 30 H260"/></svg>' +
        '<p class="eyebrow">Medicina práctica</p>' +
        '<h1>Lo que se usa en el día a día clínico</h1>' +
        '<p>Primero juegas y te das cuenta de lo que sabes; luego lo estudias a fondo con el paciente delante. Cada partida suma XP.</p>' +
        (J ? J.barraNivel() : '') +
      '</section>' +
      '<div class="mp-bloques">' + BLOQUES.map(b => {
        const listo = !!window[b.modulo];
        const t = TONOS[b.id] || ['#8A1A3E', '#47061C'];
        const av = J ? J.avance(b.id) : 0;
        return '<button class="mp-bloque" style="--c1:' + t[0] + ';--c2:' + t[1] + '" ' + (listo ? 'data-b="' + b.id + '"' : 'disabled') + '>' +
          '<div class="row" style="justify-content:space-between;align-items:center">' +
            (J ? J.anillo(av, b.em) : '<div style="font-size:30px">' + b.em + '</div>') +
            '<span class="chip">' + (listo ? (J && J.BLOQUES[b.id] ? '🎮 ' + J.BLOQUES[b.id].juegos.length + ' juegos' : 'Abrir') : 'En preparación') + '</span></div>' +
          '<h3>' + esc(b.nombre) + '</h3>' +
          '<p>' + esc(b.desc) + '</p>' +
          '<div class="mp-bloque__pie"><span>' + (av ? Math.round(av * 100) + ' % de estrellas' : 'Empieza jugando') + '</span><span>Entrar →</span></div>' +
        '</button>';
      }).join('') + '</div>' +
    '</div>';
    UI.$$('[data-b]').forEach(x => x.onclick = () => App.ir(x.dataset.b));
  }

  return { menu };
})();
