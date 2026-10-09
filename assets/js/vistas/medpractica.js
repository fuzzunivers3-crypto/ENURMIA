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

  function menu(){
    V().innerHTML =
    '<div class="escalona" style="max-width:920px">' +
      '<div class="encabezado"><p class="eyebrow">Medicina práctica</p>' +
      '<h1>Lo que se usa en el día a día clínico</h1>' +
      '<p>Herramientas y guías para razonar y actuar con el paciente delante.</p></div>' +
      '<div class="rejilla rejilla--2">' + BLOQUES.map(b => {
        const listo = !!window[b.modulo];
        return '<button class="card" ' + (listo ? 'data-b="' + b.id + '"' : 'disabled') + ' style="text-align:left;font:inherit;' + (listo ? 'cursor:pointer' : 'opacity:.55') + '">' +
          '<div style="font-size:28px">' + b.em + '</div><h3 style="margin:6px 0 4px">' + esc(b.nombre) + '</h3>' +
          '<p class="muted" style="font-size:13.5px;margin:0">' + esc(b.desc) + '</p>' +
          (listo ? '' : '<span class="chip" style="margin-top:10px">En preparación</span>') + '</button>';
      }).join('') + '</div>' +
    '</div>';
    UI.$$('[data-b]').forEach(x => x.onclick = () => App.ir(x.dataset.b));
  }

  return { menu };
})();
