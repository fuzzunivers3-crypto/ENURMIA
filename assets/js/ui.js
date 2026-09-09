/* ============================================================
   UI — utilidades de interfaz compartidas
   ============================================================ */
window.UI = (function () {

  function esc(s){
    return String(s == null ? '' : s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  function $(sel, ctx){ return (ctx || document).querySelector(sel); }
  function $$(sel, ctx){ return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ---------- avisos ---------- */
  function tostada(texto, tipo){
    const cont = $('#tostadas');
    if (!cont) return;
    const el = document.createElement('div');
    el.className = 'tostada' + (tipo ? ' tostada--' + tipo : '');
    el.innerHTML = texto;
    cont.appendChild(el);
    setTimeout(() => {
      el.classList.add('sale');
      setTimeout(() => el.remove(), 320);
    }, 2600);
  }

  /* ---------- modal ---------- */
  function modal(html, alCerrar){
    const velo = document.createElement('div');
    velo.className = 'velo';
    velo.innerHTML = '<div class="modal">' + html + '</div>';
    velo.addEventListener('click', e => { if (e.target === velo) cerrar(); });
    function cerrar(){ velo.remove(); document.removeEventListener('keydown', tecla); if (alCerrar) alCerrar(); }
    function tecla(e){ if (e.key === 'Escape') cerrar(); }
    document.addEventListener('keydown', tecla);
    document.body.appendChild(velo);
    return { el: velo, cerrar };
  }

  /* ---------- firma: trazo de electrocardiograma ---------- */
  function ecg(ancho, alto, pausa){
    const a = ancho || 600, h = alto || 60, m = h / 2;
    const d = 'M0 ' + m + ' H' + (a*0.13) + ' L' + (a*0.16) + ' ' + m +
              ' L' + (a*0.18) + ' ' + (m - h*0.32) + ' L' + (a*0.20) + ' ' + (m + h*0.34) +
              ' L' + (a*0.22) + ' ' + m + ' H' + (a*0.48) +
              ' L' + (a*0.51) + ' ' + m + ' L' + (a*0.53) + ' ' + (m - h*0.36) +
              ' L' + (a*0.556) + ' ' + (m + h*0.34) + ' L' + (a*0.58) + ' ' + m +
              ' H' + a;
    return '<svg class="ecg' + (pausa ? ' ecg--pausa' : '') + '" viewBox="0 0 ' + a + ' ' + h +
           '" preserveAspectRatio="none" style="--dash:' + (a * 1.6) + '"><path d="' + d + '"/></svg>';
  }

  /* ---------- barra de dominio ---------- */
  function clase(pct){
    if (pct === null || pct === undefined) return '';
    return pct >= 75 ? 'b-alto' : (pct >= 60 ? 'b-medio' : 'b-bajo');
  }
  function barra(pct, fina){
    const v = (pct === null || pct === undefined) ? 0 : pct;
    return '<div class="barra' + (fina ? ' barra--fina' : '') + '"><i class="' + clase(pct) +
           '" style="width:' + v + '%"></i></div>';
  }
  function pctTexto(p){ return (p === null || p === undefined) ? '—' : p + '%'; }

  /* ---------- anillo de preparacion ---------- */
  function anillo(pct, etiqueta){
    const r = 88, c = 2 * Math.PI * r;
    const off = c - (c * pct / 100);
    return '<div class="anillo">' +
      '<svg viewBox="0 0 200 200"><circle class="fondo" cx="100" cy="100" r="' + r + '"/>' +
      '<circle class="valor" cx="100" cy="100" r="' + r + '" stroke-dasharray="' + c +
      '" stroke-dashoffset="' + off + '"/></svg>' +
      '<div class="anillo__centro"><b>' + pct + '%</b><span>' + esc(etiqueta) + '</span></div></div>';
  }

  /* ---------- grafico de linea ---------- */
  function grafico(serie){
    const puntos = serie.filter(p => p.precision !== null);
    if (puntos.length < 2){
      return '<p class="muted" style="padding:28px 0;text-align:center">Necesitas datos de al menos dos días para dibujar la curva.</p>';
    }
    const W = 560, H = 170, pad = 26;
    const paso = (W - pad * 2) / (serie.length - 1);
    const y = v => H - pad - ((v / 100) * (H - pad * 2));
    let d = '', area = '', circulos = '';
    serie.forEach((p, i) => {
      if (p.precision === null) return;
      const x = pad + i * paso, yy = y(p.precision);
      d += (d ? ' L' : 'M') + x.toFixed(1) + ' ' + yy.toFixed(1);
      circulos += '<circle class="punto" cx="' + x.toFixed(1) + '" cy="' + yy.toFixed(1) + '" r="3.5"/>';
    });
    const primera = serie.findIndex(p => p.precision !== null);
    const ultima = serie.length - 1 - serie.slice().reverse().findIndex(p => p.precision !== null);
    area = d + ' L' + (pad + ultima * paso).toFixed(1) + ' ' + (H - pad) +
           ' L' + (pad + primera * paso).toFixed(1) + ' ' + (H - pad) + ' Z';

    let ejes = '';
    [0, 50, 100].forEach(v => {
      ejes += '<line class="eje" x1="' + pad + '" y1="' + y(v) + '" x2="' + (W - pad) + '" y2="' + y(v) + '"/>' +
              '<text x="2" y="' + (y(v) + 3) + '">' + v + '</text>';
    });
    const dias = ['D','L','M','M','J','V','S'];
    let etiquetas = '';
    serie.forEach((p, i) => {
      if (serie.length > 10 && i % 3 !== 0) return;
      etiquetas += '<text x="' + (pad + i * paso - 3) + '" y="' + (H - 6) + '">' + dias[p.fecha.getDay()] + '</text>';
    });

    return '<svg class="grafico" viewBox="0 0 ' + W + ' ' + H + '">' +
      '<defs><linearGradient id="degradadoSangria" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#B31331"/><stop offset="100%" stop-color="#B31331" stop-opacity="0"/>' +
      '</linearGradient></defs>' + ejes +
      '<path class="area" d="' + area + '"/><path class="linea" d="' + d + '"/>' + circulos + etiquetas + '</svg>';
  }

  /* ---------- formato ---------- */
  function reloj(ms){
    const s = Math.max(0, Math.floor(ms / 1000));
    return String(Math.floor(s / 60)).padStart(2,'0') + ':' + String(s % 60).padStart(2,'0');
  }
  function fecha(ts){
    const d = new Date(ts);
    return d.toLocaleDateString('es-DO', { day:'2-digit', month:'short', year:'numeric' });
  }
  function saludo(){
    const h = new Date().getHours();
    if (h < 12) return 'Buenos días';
    if (h < 19) return 'Buenas tardes';
    return 'Buenas noches';
  }
  const LETRAS = ['A','B','C','D','E','F'];

  function chipDif(d){
    const n = ['Muy básica','Básica','Media','Alta','Muy alta'][d - 1] || 'Media';
    const cls = d >= 4 ? 'chip--sangria' : (d === 3 ? 'chip--yodo' : 'chip--verde');
    return '<span class="chip ' + cls + '">Dificultad ' + n.toLowerCase() + '</span>';
  }

  return { esc, $, $$, tostada, modal, ecg, barra, clase, pctTexto, anillo, grafico,
           reloj, fecha, saludo, LETRAS, chipDif };
})();
