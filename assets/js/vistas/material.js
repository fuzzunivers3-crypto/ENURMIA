/* ============================================================
   MI MATERIAL — el estudiante trae sus apuntes
   ------------------------------------------------------------
   Lo que da un profesor en clase no está en ningún libro: su
   guía, su presentación, lo que dictó y lo que dijo que iba a
   preguntar. Eso es justo lo que hay que estudiar, y es lo único
   que yo no puedo escribir por él.

   Qué hace esto, dicho sin adornos: coge el texto que trae el
   estudiante y lo convierte en apuntes legibles y en flashcards
   de huecos. El troceado es del navegador, sin inteligencia
   artificial y sin mandar el texto a ningún servidor. Sirve para
   memorizar lo que ya está escrito ahí, que en ciencias básicas
   es media asignatura. No sustituye a una pregunta bien hecha, y
   la pantalla lo dice.

   Las tarjetas generadas se meten en window.TARJETAS como
   cualquier otra, asi que heredan gratis la repetición
   espaciada, el progreso y el repaso diario.
   ============================================================ */
window.Material = (function () {

  const esc = UI.esc;
  function V(){ return document.getElementById('vista'); }

  const TOPE = 300000;      // caracteres guardados en total, ver nota abajo
  const MAX_TARJETAS = 60;  // por documento

  /* El material viaja dentro del progreso, asi que se sincroniza con la
     nube y sigue al estudiante a otra computadora. Por eso hay tope: ese
     progreso es una sola fila jsonb y no es sitio para meter un libro. */
  function docs(){
    const d = Almacen.datos();
    if (!d.material) d.material = [];
    return d.material;
  }

  function pesoTotal(){ return docs().reduce((a, x) => a + (x.texto || '').length, 0); }

  /* ---------- troceado del texto ---------- */

  /* Un titulo es una linea corta, sin punto final, que no parece una frase
     suelta. Con eso basta para respetar la estructura que el estudiante ya
     le dio a sus apuntes en vez de inventarme otra. */
  function esTitulo(l){
    const t = l.trim();
    if (!t || t.length > 80) return false;
    if (/[.;:]$/.test(t)) return /:$/.test(t);
    return /^[A-ZÁÉÍÓÚÑ0-9]/.test(t) && t.split(/\s+/).length <= 12;
  }

  function secciones(texto){
    const lineas = texto.replace(/\r/g, '').split('\n');
    const out = [];
    let actual = { t:'', p:[] };
    let parrafo = [];
    const cerrar = () => { if (parrafo.length){ actual.p.push(parrafo.join(' ').trim()); parrafo = []; } };
    lineas.forEach(l => {
      const t = l.trim();
      if (!t){ cerrar(); return; }
      if (esTitulo(t) && (actual.p.length || parrafo.length)){
        cerrar();
        if (actual.t || actual.p.length) out.push(actual);
        actual = { t: t.replace(/:$/, ''), p: [] };
        return;
      }
      if (esTitulo(t) && !actual.t){ actual.t = t.replace(/:$/, ''); return; }
      parrafo.push(t);
    });
    cerrar();
    if (actual.t || actual.p.length) out.push(actual);
    return out.filter(s => s.p.length || s.t);
  }

  const VACIAS = ('de la el los las un una unos unas y o que en con por para del al se su sus es son ' +
    'como mas más pero si no lo le cuando donde cual cuales entre sobre desde hasta este esta estos ' +
    'estas ese esa eso aquel tambien también muy todo toda todos todas cada otro otra puede pueden ' +
    'debe deben hay ser estar tiene tienen').split(' ');

  function frases(texto){
    return texto.replace(/\s+/g, ' ')
      .split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ¿¡])/)
      .map(f => f.trim())
      .filter(f => f.length >= 45 && f.length <= 240);
  }

  /* Que se tapa en cada frase. Por orden de utilidad real para estudiar:
     primero las cifras con unidad (que es lo que se olvida), luego los
     nombres propios de estructuras y terminos tecnicos, y de ultimo la
     palabra larga que quede. Si no hay nada que merezca taparse, la frase
     se descarta: una tarjeta con un hueco tonto es peor que ninguna. */
  function hueco(frase){
    let m = frase.match(/\b\d+([.,]\d+)?\s?(%|mmHg|mg|g|kg|ml|L|mmol\/L|mEq\/L|mm|cm|µm|nm|kDa|ºC|°C|horas|días|semanas|meses|años)\b/);
    if (m) return m[0];

    const palabras = frase.split(/\s+/);
    const propios = palabras.slice(1)
      .map(p => p.replace(/^[¿¡("']+|[.,;:)"'?!]+$/g, ''))
      .filter(p => p.length > 3 && /^[A-ZÁÉÍÓÚÑ]/.test(p));
    if (propios.length) return propios[0];

    const largas = palabras
      .map(p => p.replace(/^[¿¡("']+|[.,;:)"'?!]+$/g, ''))
      .filter(p => p.length >= 9 && VACIAS.indexOf(p.toLowerCase()) < 0 && /^[a-záéíóúñ]/i.test(p));
    return largas.length ? largas[0] : null;
  }

  /* Las frases se sacan parrafo a parrafo, NO del texto entero de corrido.
     Si se aplana todo, el titulo de la seccion se pega a la primera frase
     que viene debajo y salen tarjetas como "Osteologia del miembro superior
     La clavicula es...". El troceado en secciones ya separa titulo de
     cuerpo, asi que se aprovecha: de paso, el titulo sirve para saber de
     que va la tarjeta. */
  function generarTarjetas(doc){
    const vistas = {};
    const cartas = [];
    const trozos = [];
    secciones(doc.texto).forEach(sec => {
      sec.p.forEach(par => frases(par).forEach(f => trozos.push({ f, t: sec.t })));
    });

    trozos.forEach(({ f, t: titulo }) => {
      if (cartas.length >= MAX_TARJETAS) return;

      /* Frase de definicion: se pregunta derecho, que es como se estudia. */
      const def = f.match(/^(?:La|El|Los|Las)?\s*([A-Za-zÁÉÍÓÚÑáéíóúñ\s-]{3,55}?)\s+(?:es|son)\s+(.{25,200})$/);
      if (def && def[2]){
        const clave = def[1].trim().toLowerCase();
        if (!vistas['d:' + clave]){
          vistas['d:' + clave] = true;
          cartas.push({ a: '¿Qué es ' + def[1].trim() + '?', b: def[2].trim().replace(/\.$/, '') + '.', t: titulo });
          return;
        }
      }

      const h = hueco(f);
      if (!h || vistas['h:' + h.toLowerCase()]) return;
      vistas['h:' + h.toLowerCase()] = true;
      cartas.push({ a: f.replace(h, '________'), b: h, t: titulo });
    });

    return cartas.map((c, i) => ({
      id: 'MAT-' + doc.id + '-' + i,
      esp: 'Mi material',
      tema: c.t || doc.nombre,
      programa: Almacen.programa(),
      propia: true,
      a: c.a, b: c.b,
      mas: 'De tu documento «' + doc.nombre + '».'
    }));
  }

  /* Las tarjetas generadas se inyectan en el mazo global para que el resto
     de la aplicacion (repaso espaciado, progreso, racha) las trate igual
     que a las escritas a mano. Se rehace entero en cada llamada para que
     borrar un documento borre tambien sus tarjetas. */
  function sembrar(){
    window.TARJETAS = (window.TARJETAS || []).filter(t => !t.propia);
    docs().forEach(d => {
      window.TARJETAS = window.TARJETAS.concat(generarTarjetas(d));
    });
    if (window.Tarjetas && Tarjetas.invalidar) Tarjetas.invalidar();
    return window.TARJETAS.filter(t => t.propia).length;
  }

  /* ---------- pantalla ---------- */
  function menu(){
    const lista = docs();
    const c = Almacen.cuatrimestre();
    const info = (window.UNIRM_CUATRIMESTRES || {})[c];
    const asigs = info ? info.asignaturas.map(a => a.nombre) : [];

    const fichas = lista.map(d => {
      const n = generarTarjetas(d).length;
      return '<div class="item-lista" data-doc="' + esc(d.id) + '">' +
        '<span class="item-lista__n">📎</span>' +
        '<span class="grow"><b style="display:block;font-size:14px">' + esc(d.nombre) + '</b>' +
        '<small class="muted">' + esc(d.asignatura || 'Sin asignatura') + ' · ' +
        Math.round(d.texto.length / 1000) + ' mil caracteres · ' + n + ' tarjetas</small></span>' +
        '<span class="chip chip--sangria">Abrir</span>' +
        '<button class="btn btn--sm btn--fantasma" data-borrar="' + esc(d.id) + '">Quitar</button></div>';
    }).join('');

    V().innerHTML =
    '<div class="escalona" style="max-width:900px">' +
      '<div class="encabezado"><p class="eyebrow">Mi material</p>' +
      '<h1>Estudia lo que da tu profesor</h1>' +
      '<p>Pega aquí la guía, el resumen o lo que dictaron en clase. La plataforma lo ordena para ' +
      'leerlo y te saca flashcards de huecos para memorizarlo.</p></div>' +

      '<div class="card card--yodo" style="margin-bottom:18px">' +
        '<span class="eyebrow">Cómo funciona esto, sin adornos</span>' +
        '<p style="margin-top:6px;font-size:14px">El troceado lo hace tu navegador: <b>tu texto no sale de ' +
        'esta computadora</b> salvo para guardarse en tu propia cuenta. No hay inteligencia artificial ' +
        'detrás, así que las tarjetas son tan buenas como el texto que pegues: sirven para ' +
        '<b>memorizar lo que ya está escrito ahí</b>, que en ciencias básicas es media asignatura. ' +
        'No sustituyen a una pregunta bien hecha, y no te van a explicar lo que tu apunte no explique.</p>' +
      '</div>' +

      '<div class="card" style="margin-bottom:18px">' +
        '<span class="eyebrow">Añadir material</span>' +
        '<div class="campo" style="margin-top:12px">' +
          '<label for="matNombre">De qué es</label>' +
          '<input id="matNombre" type="text" maxlength="60" placeholder="Ej: Osteología del miembro superior">' +
        '</div>' +
        (asigs.length ? '<div class="campo">' +
          '<label for="matAsig">Asignatura</label>' +
          '<select id="matAsig">' + asigs.map(a => '<option>' + esc(a) + '</option>').join('') + '</select>' +
        '</div>' : '') +
        '<div class="campo">' +
          '<label for="matTexto">Pega el texto</label>' +
          '<textarea id="matTexto" rows="8" placeholder="Pega aquí tus apuntes…" ' +
          'style="width:100%;font:inherit;padding:12px;border-radius:10px;border:1px solid var(--linea);resize:vertical"></textarea>' +
        '</div>' +
        '<div class="row wrap" style="gap:9px">' +
          '<button class="btn" id="matGuardar">Guardar y generar</button>' +
          '<button class="btn btn--fantasma" id="matArchivo">Cargar un archivo .txt</button>' +
          '<input type="file" id="matFile" accept=".txt,.md,text/plain" class="hidden">' +
        '</div>' +
        '<p class="muted" style="font-size:12.5px;margin-top:10px">Si lo tuyo es un PDF o un Word, ' +
        'ábrelo, selecciona todo, copia y pega aquí. Llevas ' + Math.round(pesoTotal() / 1000) +
        ' de ' + (TOPE / 1000) + ' mil caracteres usados.</p>' +
        '<div id="matAviso"></div>' +
      '</div>' +

      (lista.length
        ? '<div class="card"><span class="eyebrow">Tus documentos</span>' +
          '<div style="display:flex;flex-direction:column;gap:9px;margin-top:14px">' + fichas + '</div>' +
          '<div class="row wrap" style="gap:9px;margin-top:16px">' +
            '<button class="btn btn--sm" id="matRepasar">Repasar mis tarjetas</button>' +
          '</div></div>'
        : '<div class="card"><p class="muted">Todavía no has subido nada.</p></div>') +
    '</div>';

    document.getElementById('matArchivo').onclick = () => document.getElementById('matFile').click();
    document.getElementById('matFile').onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      const lector = new FileReader();
      lector.onload = () => {
        document.getElementById('matTexto').value = lector.result;
        if (!document.getElementById('matNombre').value)
          document.getElementById('matNombre').value = f.name.replace(/\.[^.]+$/, '');
        UI.tostada('Archivo cargado. Revísalo y guarda.', 'ok');
      };
      lector.readAsText(f);
    };

    document.getElementById('matGuardar').onclick = () => {
      const nombre = document.getElementById('matNombre').value.trim();
      const texto = document.getElementById('matTexto').value.trim();
      const asigSel = document.getElementById('matAsig');
      const aviso = document.getElementById('matAviso');
      if (!nombre || !texto)
        return aviso.innerHTML = '<div class="aviso">Ponle un nombre y pega el texto.</div>';
      if (texto.length < 200)
        return aviso.innerHTML = '<div class="aviso">Eso es muy corto para sacar nada útil. Pega al menos un par de párrafos.</div>';
      if (pesoTotal() + texto.length > TOPE)
        return aviso.innerHTML = '<div class="aviso">No cabe: tu material ocupa ya casi todo el espacio. ' +
          'Quita algún documento viejo antes de añadir este.</div>';

      docs().push({
        id: Date.now().toString(36),
        nombre, texto,
        asignatura: asigSel ? asigSel.value : null,
        creado: Date.now()
      });
      Almacen.guardar();
      const n = sembrar();
      UI.tostada('Guardado. ' + n + ' tarjetas listas.', 'ok');
      menu();
    };

    UI.$$('[data-borrar]').forEach(b => b.onclick = ev => {
      ev.stopPropagation();
      const i = docs().findIndex(d => d.id === b.dataset.borrar);
      if (i < 0) return;
      docs().splice(i, 1);
      Almacen.guardar();
      sembrar();
      UI.tostada('Documento quitado');
      menu();
    });

    UI.$$('[data-doc]').forEach(el => el.onclick = () => leer(el.dataset.doc));

    const rep = document.getElementById('matRepasar');
    if (rep) rep.onclick = () => {
      sembrar();
      App.ir('flashcards');
    };
  }

  /* ---------- lector ---------- */
  function leer(id){
    const d = docs().find(x => x.id === id); if (!d) return;
    const secs = secciones(d.texto);
    const cuerpo = secs.map(s =>
      (s.t ? '<h3 style="font-size:18px;margin:22px 0 8px">' + esc(s.t) + '</h3>' : '') +
      s.p.map(p => '<p style="margin-bottom:12px;line-height:1.75">' + esc(p) + '</p>').join('')
    ).join('');

    V().innerHTML =
    '<div class="escalona" style="max-width:760px">' +
      '<div class="encabezado"><p class="eyebrow">' + esc(d.asignatura || 'Mi material') + '</p>' +
      '<h1>' + esc(d.nombre) + '</h1>' +
      '<p>' + secs.length + (secs.length === 1 ? ' sección' : ' secciones') + ' · ' +
      generarTarjetas(d).length + ' tarjetas generadas</p></div>' +
      '<div class="card" style="margin-bottom:18px">' + (cuerpo || '<p class="muted">Sin contenido legible.</p>') + '</div>' +
      '<div class="row wrap" style="gap:9px">' +
        '<button class="btn" id="matCards">Repasar sus tarjetas</button>' +
        '<button class="btn btn--fantasma" id="matVolver">Volver a mi material</button>' +
      '</div>' +
    '</div>';

    document.getElementById('matVolver').onclick = () => menu();
    document.getElementById('matCards').onclick = () => { sembrar(); App.ir('flashcards'); };
  }

  return { menu, sembrar };
})();
