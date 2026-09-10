/* ============================================================
   APUNTES 04 — Emergencias
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================================================== */
'shock': {
  tema:'Shock: hipovolémico, cardiogénico, séptico y anafiláctico',
  bloque:'Medicina Interna',
  min:7,
  idea:'Shock es hipoperfusión, no una cifra de presión. El perfil hemodinámico dice qué tipo es, y de ahí sale si hay que dar volumen, inotrópico o vasopresor.',
  claves:['shock','séptico','cardiogénico','hipovolémico','noradrenalina','lactato','vasopresor'],
  sigue:'paro-cardiorrespiratorio-y-rcp',
  secciones:[
    {
      t:'Qué es y cómo se reconoce',
      p:[
        'El shock es un estado de hipoperfusión tisular con aporte de oxígeno insuficiente para las necesidades celulares. La presión arterial puede estar todavía normal —el shock compensado existe— y por eso el diagnóstico se apoya en los signos de perfusión: relleno capilar prolongado, piel fría y moteada o caliente según el tipo, oliguria, alteración del estado mental y elevación del *lactato*.',
        'Los mecanismos son cuatro y conviene tenerlos claros porque el tratamiento es distinto: hipovolémico por pérdida de volumen, cardiogénico por fallo de bomba, distributivo por vasodilatación —séptico, anafiláctico, neurogénico— y obstructivo por un obstáculo mecánico al llenado o a la eyección —neumotórax a tensión, taponamiento, embolia masiva—.'
      ]
    },
    {
      t:'El perfil hemodinámico',
      p:[
        'Tres variables ordenan el diagnóstico: la presión de llenado, el gasto cardíaco y las resistencias periféricas.',
        'En el *hipovolémico* el llenado está bajo, el gasto bajo y las resistencias altas: piel fría, taquicardia, yugulares colapsadas. En el *cardiogénico* el llenado está alto, el gasto bajo y las resistencias altas: piel fría, ingurgitación yugular, congestión pulmonar. En los *distributivos* las resistencias están bajas y el gasto suele ser alto al inicio: piel caliente, yugulares colapsadas. En el *obstructivo*, el llenado está alto con gasto bajo, pero con signos propios: desviación traqueal y timpanismo en el neumotórax a tensión; tríada de Beck en el taponamiento.',
        'Dos combinaciones merecen atención especial. El *shock neurogénico* de la lesión medular alta cursa con hipotensión y *bradicardia* con piel caliente, lo contrario del hemorrágico, aunque puedan coexistir. Y en el *hemorrágico* la hipotensión es un signo tardío: lo precoz es la taquicardia con estrechamiento de la presión de pulso, sobre todo en el joven, que compensa muy bien hasta que se desploma.'
      ],
      foco:[
        'Piel fría = vasoconstricción (hipovolémico, cardiogénico). Piel caliente = vasodilatación (distributivo).',
        'Yugulares: colapsadas en hipovolémico y distributivo; ingurgitadas en cardiogénico y obstructivo.'
      ]
    },
    {
      t:'Tratar según el tipo',
      p:[
        'En el *hipovolémico* se repone volumen y, sobre todo, se detiene la pérdida: sin controlar el sangrado, transfundir solo compra tiempo. En el *cardiogénico* el volumen puede empeorar la congestión: se usan inotrópicos y se trata la causa, habitualmente reperfundiendo. En el *obstructivo* el tratamiento es mecánico: descomprimir el neumotórax, drenar el taponamiento.',
        'En el *séptico*, el paquete de la primera hora marca el pronóstico: medir lactato, obtener hemocultivos sin retrasar el antibiótico, administrar antibiótico de amplio espectro, reponer cristaloides a 30 mL/kg e iniciar *noradrenalina* si no se alcanza una presión arterial media de 65 mmHg. La noradrenalina es el vasopresor de primera elección; la dopamina quedó atrás por su perfil arritmogénico.',
        'En el *anafiláctico*, adrenalina intramuscular en el muslo, sin demora, y sin sustituirla por corticoides ni antihistamínicos.'
      ],
      alarma:[
        'Lactato elevado con presión normal: shock compensado, no lo pases por alto.',
        'Reponer volumen indefinidamente en el séptico: pasado el punto de respuesta, el exceso empeora el pronóstico.'
      ]
    }
  ],
  recordar:[
    'Shock = *hipoperfusión*, no una cifra de presión.',
    'Perfil: llenado, gasto y *resistencias* clasifican el tipo.',
    'Hipovolémico y cardiogénico: piel *fría*. Distributivos: piel *caliente*.',
    'Séptico: paquete de la *primera hora* y *noradrenalina*, objetivo PAM 65.',
    'Neurogénico: hipotensión con *bradicardia*.'
  ],
  ref:'Surviving Sepsis Campaign; ATLS, 10.ª ed.; Harrison, 21.ª ed.'
},

/* ==================================================== */
'paro-cardiorrespiratorio-y-rcp': {
  tema:'Paro cardiorrespiratorio y RCP',
  bloque:'Medicina Interna',
  min:6,
  idea:'La supervivencia depende de dos cosas: compresiones de calidad sin interrupciones y desfibrilación precoz cuando el ritmo lo permite.',
  claves:['parada cardiorrespiratoria','reanimación','compresiones','desfibrila','adrenalina','fibrilación ventricular'],
  sigue:'intoxicaciones-frecuentes',
  secciones:[
    {
      t:'Compresiones de calidad',
      p:[
        'La calidad de las compresiones es el factor que más pesa. Profundidad de 5 a 6 centímetros en el adulto, frecuencia de 100 a 120 por minuto, *reexpansión completa* del tórax entre compresiones —apoyarse impide el llenado y es un error muy frecuente— y mínimas interrupciones. Cada pausa reduce la presión de perfusión coronaria y hay que reconstruirla desde cero.',
        'La relación es 30 compresiones por 2 ventilaciones sin vía aérea avanzada. Con vía aérea avanzada, las compresiones se hacen continuas y se ventila de forma asincrónica.'
      ]
    },
    {
      t:'Desfibrilable o no',
      p:[
        'El ritmo divide el algoritmo. La *fibrilación ventricular* y la *taquicardia ventricular sin pulso* son desfibrilables: la descarga es el tratamiento y la probabilidad de éxito cae en torno a un 10% por cada minuto de retraso. Tras la descarga se reanudan las compresiones de inmediato durante dos minutos antes de reevaluar; comprobar el pulso justo después es una pausa innecesaria. En estos ritmos la adrenalina y la amiodarona se administran tras la tercera descarga.',
        'La *asistolia* y la *actividad eléctrica sin pulso* no son desfibrilables: aquí la adrenalina se administra cuanto antes y, sobre todo, hay que buscar la causa, porque sin corregirla la reanimación rara vez funciona. Las causas reversibles se recuerdan como las 4 H y las 4 T: hipoxia, hipovolemia, alteraciones del potasio y metabólicas, e hipotermia; neumotórax a Tensión, Taponamiento, Tóxicos y Trombosis coronaria o pulmonar.',
        'Un detalle que cambia decisiones: en la *hipotermia profunda* la reanimación se prolonga hasta recalentar, porque el frío protege el cerebro y se han descrito recuperaciones completas tras paradas largas. Nadie está muerto hasta que está caliente y muerto.'
      ],
      alarma:[
        'No interrumpir las compresiones más de lo imprescindible.',
        'En la actividad eléctrica sin pulso, buscar las 4 H y 4 T es tan importante como la adrenalina.'
      ]
    }
  ],
  recordar:[
    'Compresiones: *5-6 cm*, *100-120/min*, reexpansión completa, mínimas pausas.',
    'Desfibrilable: descarga *inmediata* y reanudar compresiones sin comprobar pulso.',
    'No desfibrilable: adrenalina precoz + *4 H y 4 T*.',
    'Hipotermia: reanimación *prolongada*.'
  ],
  ref:'Guías del European Resuscitation Council y de la American Heart Association.'
},

/* ==================================================== */
'intoxicaciones-frecuentes': {
  tema:'Intoxicaciones frecuentes',
  bloque:'Medicina Interna',
  min:7,
  idea:'El toxíndrome identifica al culpable con la exploración. Y cada antídoto tiene su momento: administrado tarde, no sirve.',
  claves:['intoxicación','antídoto','paracetamol','organofosforado','N-acetilcisteína','atropina','cianuro','naloxona'],
  sigue:'anafilaxia',
  secciones:[
    {
      t:'Reconocer el toxíndrome',
      p:[
        'La exploración permite agrupar los tóxicos por el patrón que producen. El *colinérgico* —organofosforados, carbamatos— da miosis, sialorrea, broncorrea, bradicardia, vómitos, diarrea, sudoración y fasciculaciones. El *anticolinérgico* produce lo contrario: midriasis, piel seca y caliente, retención urinaria, taquicardia, hipertermia y delirio.',
        'El *opioide* combina depresión de la conciencia, depresión respiratoria y *miosis puntiforme*. El *simpaticomimético* —cocaína, anfetaminas— da midriasis, taquicardia, hipertensión, hipertermia y agitación, con piel sudorosa, que es lo que lo separa del anticolinérgico. Y el *sedante* deprime la conciencia y la respiración con pupilas normales.',
        'Ese reconocimiento es lo que orienta el antídoto antes de cualquier análisis.'
      ]
    },
    {
      t:'Los antídotos y su ventana',
      p:[
        'El *paracetamol* merece un párrafo propio porque su trampa es característica: la fase inicial es silente o solo digestiva, con analítica normal, mientras el metabolito NAPQI agota el glutatión. El daño hepático aparece entre las 24 y las 72 horas, cuando el antídoto ya es mucho menos eficaz. La *N-acetilcisteína* es máximamente eficaz en las primeras 8 a 10 horas y se indica según la concentración plasmática a partir de las 4 horas sobre el nomograma de Rumack-Matthew, o directamente si hay dudas sobre el momento o la dosis. Dar de alta a un intoxicado asintomático es el error clásico.',
        'En los *organofosforados* se administra atropina en dosis repetidas y crecientes, cuyo objetivo terapéutico es *secar las secreciones bronquiales* —no la frecuencia cardíaca ni el tamaño pupilar—, junto con pralidoxima, que reactiva la enzima antes de que el enlace envejezca y se haga irreversible.',
        'En los *opioides*, naloxona, teniendo en cuenta que su vida media es más corta que la de muchos opioides: puede hacer falta repetir la dosis o mantener perfusión. En las *benzodiacepinas*, el flumazenilo existe pero está contraindicado en epilépticos, en consumidores crónicos y ante sospecha de coingesta de tricíclicos, porque puede desencadenar convulsiones refractarias; el tratamiento suele ser de soporte. En el *hierro*, deferoxamina, recordando que hay una fase de mejoría engañosa y que el carbón activado no adsorbe metales.'
      ],
      foco:[
        'El *carbón activado* es útil en la primera hora o dos, con vía aérea protegida, y no sirve para metales, alcoholes, cáusticos ni hidrocarburos.',
        'Ante cáusticos: no provocar el vómito, no neutralizar, no sonda a ciegas. Vía aérea, ayuno y endoscopia precoz.'
      ],
      alarma:[
        'Paracetamol asintomático con analítica normal: es el momento de tratar, no de dar el alta.',
        'Flumazenilo en un epiléptico o ante tricíclicos: convulsiones refractarias.'
      ]
    }
  ],
  recordar:[
    'El *toxíndrome* identifica al tóxico con la exploración.',
    'Paracetamol: fase *silente*; N-acetilcisteína en las primeras horas.',
    'Organofosforados: atropina hasta *secar secreciones* + pralidoxima.',
    'Opioides: naloxona, vigilando la *reaparición* de la depresión.',
    'Carbón: primera hora, vía aérea protegida, y *no* para metales ni cáusticos.'
  ],
  ref:'Goldfrank, Toxicologic Emergencies; posicionamientos de sociedades de toxicología clínica.'
},

/* ==================================================== */
'anafilaxia': {
  tema:'Anafilaxia',
  bloque:'Medicina Interna',
  min:4,
  idea:'Adrenalina intramuscular en el muslo, sin demora y sin sustituirla por nada. El retraso es la causa principal de muerte.',
  claves:['anafilaxia','adrenalina intramuscular','urticaria','angioedema','estridor'],
  sigue:'control-prenatal',
  secciones:[
    {
      t:'Reconocerla',
      p:[
        'La anafilaxia es una reacción sistémica grave y de instauración rápida. Se diagnostica clínicamente ante la afectación aguda de dos o más sistemas tras la exposición a un alérgeno probable —piel o mucosas con urticaria o angioedema, vía respiratoria con estridor, disnea o broncoespasmo, sistema cardiovascular con hipotensión, y digestivo con vómitos o dolor abdominal—, o ante hipotensión aislada tras un alérgeno conocido.',
        'No hace falta que haya urticaria: hasta un 10-20% de las anafilaxias cursan sin lesiones cutáneas, y esperar a verlas retrasa el tratamiento.'
      ]
    },
    {
      t:'Tratamiento y lo que viene después',
      p:[
        'La *adrenalina* es el único fármaco que revierte el mecanismo: vasoconstriñe, broncodilata, aumenta la contractilidad y frena la liberación de mediadores. Se administra por vía *intramuscular en la cara anterolateral del muslo*, que alcanza concentraciones más rápidas y fiables que la subcutánea, cuya absorción es errática precisamente porque hay vasoconstricción. La dosis en el adulto es 0,3-0,5 mg de la solución 1/1000, repetible cada 5 a 15 minutos. No hay contraindicación absoluta en la anafilaxia.',
        'Se acompaña de retirada del alérgeno, posición en decúbito con las piernas elevadas —levantar de golpe a un paciente hipotenso puede provocar una parada—, oxígeno y líquidos. Los corticoides y los antihistamínicos son coadyuvantes: no salvan la vida y tardan demasiado.',
        'Y el alta no es el final. Entre un 5 y un 20% presentan una *reacción bifásica* horas después sin nueva exposición, de modo que hay un periodo de observación. Antes de irse, el paciente debe salir con autoinyector de adrenalina, adiestramiento en su uso, plan de acción escrito, identificación del alérgeno y derivación a alergología.'
      ],
      alarma:[
        'No sustituir la adrenalina por corticoide o antihistamínico.',
        'No incorporar bruscamente al paciente hipotenso.',
        'No dar el alta sin autoinyector ni plan.'
      ]
    }
  ],
  recordar:[
    'Diagnóstico *clínico*: dos sistemas afectados, o hipotensión tras alérgeno conocido.',
    '*Adrenalina intramuscular* en el muslo, ya. Sin contraindicación absoluta.',
    'Puede no haber urticaria.',
    'Vigilar la *reacción bifásica* y dar autoinyector al alta.'
  ],
  ref:'Guías de la World Allergy Organization y de la EAACI sobre anafilaxia.'
}

});
