/* ============================================================
   PREGUNTAS EN CUARENTENA
   Items del banco extendido que no deben llegar al estudiante,
   por uno de dos motivos:
     1. Su respuesta "oficial" en el dataset contradice a la
        bibliografía estándar (cohorte MIR-2017 de medicina).
     2. No son materia del ENURM porque proceden de otro examen
        (cohorte FIR, preguntas con sufijo -P-).
   El caso 1 es un problema de veracidad y el 2 de temario, pero
   la consecuencia es la misma: fuera del estudio hasta que se
   revisen una a una.

   Se detectan al leer cada pregunta para escribir su explicación.
   Mientras están aquí NO se le muestran al estudiante: enseñar una
   respuesta falsa es peor que no enseñar nada.

   Ni se corrigen ni se borran en silencio. Quedan documentadas con
   el motivo, para que puedan revisarse contra la plantilla oficial
   del Ministerio de Sanidad y reincorporarse o descartarse.

   Para reincorporar una pregunta: bórrala de este archivo. Si
   además hay que corregir su respuesta, añade `ok:<índice>` en su
   entrada de explicaciones-mir-*.js, que sobrescribe el banco.
   ============================================================ */
window.REVISION = Object.assign(window.REVISION || {}, {

'MIR-2017-M68': {
  detectado:'2026-09-08',
  claveDataset:2,        // "Rotura de la pared libre del ventrículo izquierdo"
  claveProbable:3,       // "Rotura en el tabique interventricular"
  motivo:'El caso describe un soplo sistólico CON FRÉMITO aparecido 48 horas después de un infarto anterior. El frémito implica un chorro turbulento de alta velocidad entre cavidades, que es lo propio de la comunicación interventricular postinfarto. La rotura de pared libre vierte sangre al pericardio, produce taponamiento y disociación electromecánica, y característicamente NO da soplo ni frémito. La propia pregunta MIR-2015-M55, ya explicada en el lote 1, afirma exactamente eso.',
  ref:'Harrison 21.ª ed., complicaciones mecánicas del infarto agudo de miocardio.'
},

'MIR-2017-M81': {
  detectado:'2026-09-08',
  claveDataset:0,        // "Ecografía de abdomen"
  claveProbable:3,       // "Estudio isotópico de vaciamiento gástrico"
  motivo:'Diabética tipo 1 de más de 20 años con náuseas, vómitos de alimentos, distensión y pérdida de peso, con gastroscopia que muestra restos alimentarios sin obstrucción: es una gastroparesia diabética. La prueba de referencia para diagnosticarla y cuantificarla es la gammagrafía de vaciamiento gástrico. La ecografía abdominal no evalúa el vaciamiento gástrico.',
  ref:'Harrison 21.ª ed., trastornos de la motilidad gastrointestinal; guías de la American College of Gastroenterology sobre gastroparesia.'
},

'MIR-2017-M85': {
  detectado:'2026-09-08',
  claveDataset:1,        // "Neumatosis quística intestinal"
  claveProbable:2,       // "Esprúe celíaco refractario"
  motivo:'Se pregunta en qué enfermedad se encuentran úlceras aisladas en yeyuno distal con anemia ferropénica crónica. La yeyunitis ulcerativa es una complicación característica de la enfermedad celíaca refractaria. La neumatosis quística intestinal consiste en quistes llenos de gas en la pared intestinal, no en úlceras.',
  ref:'Harrison 21.ª ed., enfermedad celíaca y trastornos de malabsorción.'
},

'MIR-2017-M111': {
  detectado:'2026-09-08',
  claveDataset:2,        // "Trombocitopenia inmune primaria"
  claveProbable:0,       // "Tromboastenia de Glanzmann"
  motivo:'El error es evidente: la paciente tiene 182.000 plaquetas, es decir, recuento NORMAL, de modo que no puede tener una trombocitopenia. Además el caso describe ausencia de agregación con ADP, colágeno y epinefrina, aglutinación con ristocetina conservada y ausencia de la glucoproteína IIb-IIIa en citometría, que es la definición misma de la tromboastenia de Glanzmann.',
  ref:'Harrison 21.ª ed., trastornos de la función plaquetaria.'
},

'MIR-2017-M164': {
  detectado:'2026-09-08',
  claveDataset:0,        // "Dos puntos"
  claveProbable:2,       // "Tres puntos"
  motivo:'Al escribir su explicación en el lote 2 ya no me salía la cuenta y tuve que rodearla. Desglosando: frecuencia cardíaca de 80 (<100) = 1 · respiración lenta e irregular = 1 · flacidez = 0 · sin respuesta al estímulo = 0 · cuerpo rosado con acrocianosis = 1. Total 3, no 2. Con el año 2017 comprometido, se retira en vez de forzar la explicación.',
  ref:'Nelson 22.ª ed. y Programa de Reanimación Neonatal (AAP/AHA).'
},

'MIR-2017-M107': {
  detectado:'2026-09-08',
  claveDataset:3,        // "solo medias compresivas"
  claveProbable:0,       // "heparina de bajo peso molecular durante el embarazo y 6 semanas posparto"
  motivo:'Un antecedente de tromboembolia provocada por anticonceptivos hormonales sitúa a la paciente en riesgo suficiente para recomendar tromboprofilaxis con heparina de bajo peso molecular durante la gestación y el puerperio, no solo medidas mecánicas. Al escribirla en el lote 2 me resultó sorprendente y la justifiqué forzando el razonamiento; con el año comprometido, se retira.',
  ref:'Guías del RCOG sobre tromboembolismo venoso en el embarazo y el puerperio.'
},

'MIR-2017-M200': {
  detectado:'2026-09-08',
  claveDataset:1,        // "Beta-bloqueantes"
  claveProbable:3,       // "Derivados de prostaglandinas"
  motivo:'El paciente es ASMÁTICO. Los betabloqueantes tópicos se absorben por vía sistémica y pueden desencadenar broncoespasmo: están contraindicados. Los análogos de prostaglandinas son de primera línea en el glaucoma de ángulo abierto y no tienen ese problema.',
  ref:'Kanski, Oftalmología Clínica; guías de la European Glaucoma Society.'
},

'MIR-2017-M214': {
  detectado:'2026-09-08',
  claveDataset:1,        // "Cálculo de la regresión lineal"
  claveProbable:2,       // "Estimador de Kaplan-Meier"
  motivo:'Se pregunta cómo evaluar SUPERVIVENCIA. El análisis de supervivencia con datos censurados es exactamente el estimador de Kaplan-Meier. La regresión lineal no maneja censura ni tiempo hasta el evento.',
  ref:'Gordis, Epidemiología; Kleinbaum, Survival Analysis.'
},

'MIR-2017-M93': {
  detectado:'2026-09-08',
  claveDataset:2,        // "Polineuropatía amiloidótica hereditaria"
  claveProbable:0,       // "Enfermedad de Fabry"
  motivo:'El propio enunciado enumera las tres claves —neuropatía dolorosa, hipohidrosis y angioqueratomas— que son la tríada de la enfermedad de Fabry. La polineuropatía amiloidótica no cursa con angioqueratomas ni con hipohidrosis de este tipo.',
  ref:'Harrison 21.ª ed., enfermedades por depósito lisosomal.'
},

'MIR-2017-M131': {
  detectado:'2026-09-08',
  claveDataset:2,        // "Glomerulonefritis mesangial IgA"
  claveProbable:3,       // "Glomerulonefritis membranoproliferativa"
  motivo:'El caso tiene C3 de 20 y C4 de 10, ambos BAJOS. La nefropatía IgA cursa con complemento NORMAL. El consumo de las dos vías apunta a glomerulonefritis membranoproliferativa.',
  ref:'Harrison 21.ª ed., glomerulopatías; guía KDIGO de glomerulonefritis.'
},

'MIR-2017-M121': {
  detectado:'2026-09-08',
  claveDataset:1,        // añade trimetoprim-sulfametoxazol
  claveProbable:0,       // "Ceftriaxona + azitromicina"
  motivo:'El paciente tiene 550 CD4 y carga viral indetectable: no hay riesgo de Pneumocystis, cuya profilaxis y tratamiento empiezan a considerarse por debajo de 200 CD4. Además la radiografía muestra consolidación LOBAR, patrón de neumonía bacteriana típica. Cubrir Pneumocystis aquí es tratamiento innecesario.',
  ref:'Guías ATS/IDSA de neumonía adquirida en la comunidad; Panel on Opportunistic Infections.'
},

'MIR-2017-M115': {
  detectado:'2026-09-08',
  claveDataset:2,        // "Neumonía por Estafilococo aureus"
  claveProbable:1,       // "Aspergilosis pulmonar invasiva"
  motivo:'Neutropenia grave a los 30 días de un trasplante de precursores, con nódulos pulmonares múltiples y CAVITADOS que no responden a cinco días de antibiótico de amplio espectro: es el cuadro de la aspergilosis pulmonar invasiva.',
  ref:'Mandell, Principios y Práctica de Enfermedades Infecciosas; guías IDSA sobre aspergilosis.'
},

'MIR-2017-M181': {
  detectado:'2026-09-08',
  claveDataset:3,        // "Cobertura con injerto de piel"
  claveProbable:1,       // "Biopsia de la zona mamelonada"
  motivo:'Una úlcera de 10 años que no cierra y cuyo borde empieza a mamelonarse obliga a descartar una úlcera de Marjolin, es decir, un carcinoma escamoso sobre úlcera crónica. Injertar sobre una posible neoplasia sin biopsiarla antes es un error grave.',
  ref:'Fitzpatrick, Dermatología en Medicina General; Schwartz, Principios de Cirugía, 11.ª ed.'
},

'MIR-2017-M155': {
  detectado:'2026-09-08',
  claveDataset:1,        // "infarto silviano cortico-subcortical"
  claveProbable:0,       // "infarto lacunar capsular izquierdo"
  motivo:'Hemiplejía derecha con disartria leve y SIN alteración del lenguaje: es un síndrome motor puro, propio del infarto lacunar de la cápsula interna. Un infarto silviano cortico-subcortical izquierdo produciría afasia, que el enunciado descarta explícitamente.',
  ref:'Harrison 21.ª ed., enfermedad cerebrovascular; clasificación de síndromes lacunares.'
},

'MIR-2017-M119': {
  detectado:'2026-09-08',
  claveDataset:2,
  claveProbable:null,
  motivo:'Fiebre Q. La clave afirma que en la forma AGUDA se elevan generalmente los anticuerpos frente a antígenos de fase I. Lo establecido es lo contrario: en la fase aguda predominan los de fase II, y el ascenso mantenido de fase I es lo que caracteriza la forma CRÓNICA. La opción podría sostenerse por eliminación, pero no con la seguridad que exige un año comprometido. Se retira: no me consta cuál es la correcta.',
  ref:'Mandell, Principios y Práctica de Enfermedades Infecciosas, fiebre Q.'
},

'MIR-2017-M163': {
  detectado:'2026-09-08',
  claveDataset:3,
  claveProbable:null,
  motivo:'Neonato de 20 días con vómitos desde el nacimiento que recaen al realimentar. La clave da reflujo gastroesofágico, pero la leucocitosis con desviación izquierda y el patrón de recaída encajan igual o mejor con enterocolitis inducida por proteínas de leche de vaca. Al escribir su explicación en el lote 3 tuve que forzar el argumento. Con el año comprometido, se retira.',
  ref:'Nelson 22.ª ed.; guías ESPGHAN sobre alergia a proteínas de leche de vaca.'
},

'MIR-2017-M71': {
  detectado:'2026-09-08',
  claveDataset:2,        // "Anti-aldosterónicos"
  claveProbable:0,       // "Ivabradina"
  motivo:'Se pregunta cuál NO aporta beneficio. La ivabradina actúa sobre el nodo sinusal y es INEFICAZ en fibrilación auricular permanente, que es la situación del paciente. Los antialdosterónicos sí reducen mortalidad en la insuficiencia cardíaca con disfunción sistólica grave.',
  ref:'Guía ESC de insuficiencia cardíaca.'
}

});

/* ------------------------------------------------------------
   CUARENTENA DE COHORTE: MIR 2017, categoría medicina
   ------------------------------------------------------------
   No es un defecto disperso: es un año entero con la clave de
   respuestas corrompida en el dataset de origen.

   La evidencia: de unas 23 preguntas del MIR 2017 leídas con
   atención, la mitad tiene marcada como correcta una opción que
   contradice a la bibliografía. En los mismos lotes se leyeron 78
   preguntas de 2015 y 61 de 2016 sin encontrar NI UNA.

   Ejemplos que no admiten discusión:
     · M200 recomienda BETABLOQUEANTES para el glaucoma de un
       paciente ASMÁTICO, cuando están contraindicados.
     · M214 propone regresión lineal para evaluar SUPERVIVENCIA,
       cuando eso es Kaplan-Meier.
     · M93 describe literalmente la tríada de Fabry —neuropatía
       dolorosa, hipohidrosis y angioqueratomas— y da como
       correcta una polineuropatía amiloidótica.
     · M131 da nefropatía IgA con C3 y C4 BAJOS, cuando la IgA
       cursa con complemento normal.
     · M121 añade cobertura para Pneumocystis en un paciente con
       550 CD4, donde no hace falta.

   Qué se hace: las 195 preguntas de MIR-2017 medicina quedan
   fuera del estudio, EXCEPTO las que se verificaron una a una al
   escribirles la explicación (las que tienen `verificado`).
   No se puede saber cuáles del resto son correctas sin revisarlas
   contra la plantilla oficial del Ministerio de Sanidad.

   Cómo levantar la cuarentena: contrastar el año contra la
   plantilla oficial y borrar esta regla, o ir verificando
   pregunta a pregunta escribiéndoles la explicación.
   ------------------------------------------------------------ */
window.REVISION_COHORTE = [
  {
    id:'mir-2017-medicina',
    prueba: q => /^MIR-2017-M/.test(q.id) && !q.verificado,
    motivo:'Clave de respuestas corrompida en el dataset para el MIR 2017 de medicina. ~50% de error en la muestra leída.',
    afectadas:'MIR-2017-M* sin verificación individual'
  },
  {
    id:'fir-farmacia',
    prueba: q => /^MIR-\d{4}-P/.test(q.id) && !q.verificado,
    motivo:'Las preguntas con sufijo -P- no son del MIR sino del examen FIR (Farmacéutico Interno Residente), y estaban etiquetadas en bloque como esp:"Farmacología", con lo que ocupaban el 8% de cada simulacro. Junto a farmacología clínica aprovechable traen química analítica, tecnología farmacéutica, diseño de fármacos y farmacoeconomía, que no son materia del ENURM. Salen del estudio salvo las que se revisan una a una: al escribirles explicación quedan verificado:true, se reclasifican a su especialidad real y vuelven a entrar.',
    afectadas:'MIR-*-P* sin revisión individual'
  }
];
