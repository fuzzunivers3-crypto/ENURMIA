/* ============================================================
   APUNTES 01 — Cardiovascular y respiratorio
   Texto para leer de corrido. Cada tema está escrito alrededor
   de una pregunta: ¿qué hago con este paciente delante?
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================================================== */
'hipertension-arterial': {
  tema:'Hipertensión arterial',
  bloque:'Medicina Interna',
  min:7,
  idea:'La enfermedad más frecuente de la consulta y la que más años de vida cuesta cuando se maneja mal. Casi todo se juega en medir bien y en no perseguir un número aislado.',
  claves:['hipertensi','presión arterial','antihipertensiv','MAPA','bata blanca'],
  sigue:'crisis-hipertensiva',
  secciones:[
    {
      t:'Qué es y por qué mata',
      p:[
        'La hipertensión es una presión mantenida por encima de lo que el árbol vascular tolera sin dañarse. No duele, no se siente y no da síntomas hasta que ya rompió algo: por eso se la llama el asesino silencioso, y por eso el diagnóstico depende de que alguien la busque.',
        'El daño se produce en dos frentes. Por un lado, la presión alta acelera la aterosclerosis, y de ahí salen el infarto y el ictus isquémico. Por otro, castiga directamente las arterias pequeñas: las del riñón, que acaban en nefropatía; las de la retina, que dan la retinopatía hipertensiva; y las perforantes cerebrales, cuya rotura produce la hemorragia intracerebral típica de los ganglios basales. Entender esos dos mecanismos explica por qué el hipertenso se estudia mirando corazón, riñón, retina y cerebro, y no solo el tensiómetro.'
      ]
    },
    {
      t:'Medir bien es la mitad del diagnóstico',
      p:[
        'Una toma mal hecha se equivoca en 10 o 20 mmHg, y con esa diferencia se trata a quien no lo necesita o se deja sin tratar a quien sí. La técnica correcta no es un formalismo: el paciente sentado con la espalda apoyada y los pies en el suelo, cinco minutos de reposo previo, el brazo apoyado a la altura del corazón, un manguito del tamaño adecuado —uno pequeño en un brazo grueso sobrestima—, sin tabaco ni café en la media hora previa, y el promedio de al menos dos tomas.',
        'El diagnóstico no se hace en una sola visita. Se confirma con tomas en visitas distintas o, mejor, con monitorización ambulatoria de 24 horas o automedida domiciliaria. Esas técnicas además desenmascaran dos situaciones que la consulta no distingue: la *hipertensión de bata blanca*, que sube solo en el consultorio y no requiere tratamiento farmacológico, y la *hipertensión enmascarada*, normal en consulta y alta fuera de ella, que sí tiene riesgo y pasa desapercibida.'
      ],
      foco:[
        'Antes de diagnosticar, pregúntate si la toma fue técnicamente correcta y si hay más de una.',
        'Un descenso nocturno menor del 10% —patrón _non-dipper_— se asocia a más daño de órgano: solo lo ve el monitoreo de 24 horas.'
      ]
    },
    {
      t:'A quién hay que estudiar por hipertensión secundaria',
      p:[
        'La inmensa mayoría son hipertensiones esenciales, sin causa única identificable. Pero hay un grupo en el que buscar una causa cambia el tratamiento, y se reconoce por cuatro señales: inicio muy precoz —antes de los 30— o muy tardío, hipertensión resistente pese a tres fármacos incluyendo un diurético, deterioro brusco de un paciente antes controlado, o datos que apunten a un cuadro concreto.',
        'Los tres cuadros que más rinden son el *hiperaldosteronismo primario*, que se sospecha ante hipopotasemia espontánea o inducida por diuréticos y se criba con el cociente aldosterona/renina; la *estenosis de arteria renal*, que da soplo abdominal y deterioro de la función renal al iniciar un IECA; y el *feocromocitoma*, con crisis paroxísticas de hipertensión, cefalea, sudoración y palpitaciones. En el paciente joven no hay que olvidar palpar los pulsos femorales: su ausencia o retraso delata una coartación de aorta.'
      ]
    },
    {
      t:'Cómo se trata',
      p:[
        'El tratamiento tiene siempre dos capas. La primera son los cambios de estilo de vida, que no son un adorno: reducir la sal, perder peso, hacer ejercicio aeróbico regular, moderar el alcohol y dejar el tabaco bajan la presión de forma medible y potencian los fármacos.',
        'La segunda son los antihipertensivos, y hoy se prefiere empezar con una combinación a dosis bajas antes que subir al máximo un solo fármaco: se controla más y con menos efectos adversos. Las cuatro familias de base son los IECA o los ARA II, los calcioantagonistas y las tiazidas; los betabloqueantes ya no son de primera línea salvo indicación concreta, como la cardiopatía isquémica o el control de frecuencia.',
        'La comorbilidad elige el fármaco. En el diabético con albuminuria y en el paciente con enfermedad renal crónica se prefiere el bloqueo del sistema renina-angiotensina por su nefroprotección. En la insuficiencia cardíaca con fracción reducida se usan los fármacos que además reducen mortalidad. En el paciente negro, los calcioantagonistas y las tiazidas suelen ser más eficaces. Y en la mujer en edad fértil hay que elegir pensando en un posible embarazo: los IECA y los ARA II son fetotóxicos.'
      ],
      foco:[
        'Nunca se combinan IECA y ARA II: aumentan la hiperpotasemia y el daño renal sin beneficio.',
        'Un ascenso de la creatinina de hasta un 30% al iniciar un IECA es esperable y NO obliga a suspenderlo.',
        'Antes de subir dosis en un paciente que no controla, comprueba la adherencia y simplifica el régimen.'
      ],
      alarma:[
        'Hipertensión con cefalea intensa, visión borrosa, dolor torácico, disnea o focalidad neurológica: no es una cifra, es una emergencia.',
        'Hipertensión resistente en un joven con hipopotasemia: estudia hiperaldosteronismo antes de seguir añadiendo pastillas.'
      ]
    }
  ],
  recordar:[
    'El diagnóstico exige *varias tomas bien hechas*, no una cifra suelta.',
    'La *hipertensión de bata blanca* no se trata con fármacos; la *enmascarada* sí, y solo se ve fuera de la consulta.',
    'Primera línea: IECA o ARA II, calcioantagonista y tiazida. La comorbilidad decide cuál.',
    '*Nunca* IECA + ARA II juntos.',
    'Resistente + hipopotasemia = piensa en hiperaldosteronismo primario.'
  ],
  ref:'Guía ESC/ESH 2023 sobre hipertensión arterial; guías KDIGO; Harrison, 21.ª ed.'
},

/* ==================================================== */
'crisis-hipertensiva': {
  tema:'Crisis hipertensiva',
  bloque:'Medicina Interna',
  min:5,
  idea:'Lo que separa la urgencia de la emergencia no es la cifra: es si hay un órgano dañándose ahora mismo. Y bajar la presión demasiado rápido hace más daño que la propia cifra.',
  claves:['crisis hipertensiva','emergencia hipertensiva','urgencia hipertensiva','edema agudo de pulmón'],
  sigue:'insuficiencia-cardiaca',
  secciones:[
    {
      t:'La pregunta que ordena todo',
      p:[
        'Ante una presión muy elevada, la primera pregunta no es cuánto marca, sino si hay *daño agudo de órgano diana*. De la respuesta salen dos escenarios completamente distintos.',
        'Si no hay daño, se trata de una *urgencia hipertensiva*: se maneja con reposo, reevaluación tras unos minutos —muchas cifras bajan solas al quitar el dolor, la ansiedad o la retención urinaria—, ajuste del tratamiento oral y control ambulatorio en días. Si hay daño, es una *emergencia hipertensiva*: ingreso, fármaco intravenoso titulable y descenso controlado.',
        'El daño agudo se busca preguntando y explorando, no con una batería infinita de pruebas: cefalea intensa con alteración visual o confusión apunta a encefalopatía; el dolor torácico, a síndrome coronario o disección aórtica; la disnea con crepitantes, a edema agudo de pulmón; la focalidad neurológica, a ictus; y en la gestante, la hipertensión con síntomas es preeclampsia hasta que se demuestre lo contrario.'
      ],
      foco:[
        'El fondo de ojo y una tira reactiva de orina cuestan minutos y detectan daño que la anamnesis no da.',
        'La emergencia se define por el órgano, no por el número: hay emergencias con 180/110 y urgencias con 230/130.'
      ]
    },
    {
      t:'Cómo se baja y hasta dónde',
      p:[
        'En la emergencia hipertensiva el objetivo NO es normalizar la presión. Se reduce la presión arterial media entre un 20 y un 25% en la primera hora, y después de forma gradual en las siguientes 24 a 48 horas. La razón es fisiológica: en el hipertenso crónico la curva de autorregulación cerebral está desplazada a la derecha, de modo que su cerebro deja de perfundirse bien a presiones que en otra persona serían normales. Bajar de golpe produce isquemia cerebral, renal y coronaria.',
        'Se emplean fármacos intravenosos de vida media corta y efecto titulable: labetalol, nicardipino, nitroprusiato o nitroglicerina según el escenario. La vía sublingual está desaconsejada precisamente porque produce descensos bruscos e impredecibles.',
        'Hay tres excepciones donde el descenso sí debe ser rápido y agresivo: la *disección aórtica*, donde el objetivo es una sistólica en torno a 100-120 mmHg y una frecuencia baja, controlando primero la frecuencia con un betabloqueante antes de vasodilatar; la *eclampsia*, y el *edema agudo de pulmón*.'
      ],
      alarma:[
        'Dolor torácico transfixiante que irradia a la espalda con asimetría de pulsos: disección aórtica. Betabloqueante primero, después vasodilatador.',
        'En el ictus isquémico agudo NO se baja la presión salvo que supere 185/110 y se vaya a trombolizar: la hipertensión mantiene perfundida la penumbra.'
      ]
    }
  ],
  recordar:[
    'Urgencia = cifras altas *sin* daño de órgano → tratamiento oral y control en días.',
    'Emergencia = daño agudo de órgano → intravenoso y descenso *controlado*.',
    'Objetivo en la emergencia: bajar la presión media *20-25% en la primera hora*, no normalizarla.',
    'Nada de sublingual: el descenso brusco produce isquemia.',
    'Excepciones que sí se bajan rápido: *disección aórtica*, eclampsia y edema agudo de pulmón.'
  ],
  ref:'Guía ESC/ESH 2023 sobre hipertensión arterial; guías AHA/ASA sobre ictus.'
},

/* ==================================================== */
'insuficiencia-cardiaca': {
  tema:'Insuficiencia cardíaca',
  bloque:'Medicina Interna',
  min:8,
  idea:'Un corazón que no bombea lo suficiente o que lo hace a costa de presiones altas. El tratamiento se divide en dos mundos: lo que quita síntomas y lo que alarga la vida, y no son lo mismo.',
  claves:['insuficiencia cardíaca','FEVI','ortopnea','disnea paroxística','péptido natriurético','NT-proBNP'],
  sigue:'sindrome-coronario-agudo',
  secciones:[
    {
      t:'Congestión por detrás, bajo gasto por delante',
      p:[
        'Casi toda la clínica de la insuficiencia cardíaca se deduce de dos ideas. La primera es que la sangre se remansa *por detrás* de la cavidad que falla: si falla el ventrículo izquierdo, se acumula en el pulmón y aparecen disnea, ortopnea, disnea paroxística nocturna y crepitantes; si falla el derecho, se acumula en el territorio sistémico y aparecen ingurgitación yugular, hepatomegalia, ascitis y edemas.',
        'La segunda es que el gasto cardíaco cae *por delante*, y de ahí la fatiga, la intolerancia al esfuerzo, la oliguria y, en fases avanzadas, la hipoperfusión periférica. La causa más frecuente de fallo derecho, conviene recordarlo, es el fallo izquierdo.'
      ],
      foco:[
        'La *ingurgitación yugular* con reflujo hepatoyugular es el signo más específico de congestión. Los edemas engañan: también los produce la insuficiencia venosa, la hipoalbuminemia o un calcioantagonista.',
        'La ortopnea y la disnea paroxística nocturna son mucho más específicas que la disnea de esfuerzo aislada.'
      ]
    },
    {
      t:'Cómo se confirma y cómo se clasifica',
      p:[
        'El diagnóstico combina clínica compatible, péptidos natriuréticos y ecocardiografía. Los *péptidos* —BNP o NT-proBNP— sirven sobre todo para descartar: un valor bajo en un paciente con disnea aguda hace muy improbable el origen cardíaco y orienta al pulmón. Un valor alto apoya, pero es menos específico, porque también sube con la edad, la insuficiencia renal, la fibrilación auricular o la embolia pulmonar, y baja falsamente en la obesidad.',
        'La *ecocardiografía* es la prueba que define el tipo, y esa clasificación manda sobre el tratamiento: fracción de eyección reducida cuando es igual o menor del 40%, levemente reducida entre 41 y 49, y preservada a partir de 50. Conviene tener claro que la fracción de eyección y la clase funcional de la NYHA son ejes independientes: hay pacientes con fracción del 25% en clase I y pacientes con fracción normal en clase III.'
      ]
    },
    {
      t:'Tratamiento: lo que alivia y lo que salva',
      p:[
        'En la insuficiencia cardíaca con *fracción reducida*, cuatro familias han demostrado reducir mortalidad y forman los llamados cuatro pilares: el bloqueo del sistema renina-angiotensina, preferentemente con un ARNI como sacubitrilo-valsartán; los betabloqueantes; los antagonistas del receptor mineralocorticoide; y los inhibidores de SGLT2. Deben iniciarse pronto, los cuatro, y titularse hasta la dosis tolerada.',
        'Los *diuréticos de asa* ocupan un lugar aparte: son imprescindibles para controlar la congestión y hacen que el paciente respire, pero no prolongan la vida. Confundir esa mejoría sintomática con un buen tratamiento es el error más común: el paciente sale del hospital sin disnea y sin ninguno de los fármacos que le habrían dado años.',
        'En la insuficiencia cardíaca con *fracción preservada* el arsenal es más corto: diuréticos para la congestión, control estricto de la presión arterial, de la fibrilación auricular y del peso, y los inhibidores de SGLT2, que son los únicos que han demostrado beneficio claro en este grupo.'
      ],
      foco:[
        'Diurético = síntomas. Los cuatro pilares = pronóstico. No confundir uno con otro.',
        'La descompensación casi siempre tiene un desencadenante: transgresión de sal o de líquidos, abandono del tratamiento, infección, anemia, arritmia —sobre todo fibrilación auricular—, isquemia o un antiinflamatorio no esteroideo. Buscarlo es parte del tratamiento.'
      ],
      alarma:[
        'Hipotensión con mala perfusión, oliguria y frialdad: shock cardiogénico, no una simple descompensación.',
        'Los antiinflamatorios no esteroideos retienen sodio y descompensan: hay que revisarlos siempre en la lista de fármacos.'
      ]
    }
  ],
  recordar:[
    'Congestión *detrás*, bajo gasto *delante*: con eso se deduce toda la exploración.',
    'Los péptidos natriuréticos sirven para *descartar* más que para confirmar.',
    'Fracción reducida: los *cuatro pilares* —ARNI o IECA, betabloqueante, antialdosterónico e iSGLT2— son los que alargan la vida.',
    'El diurético alivia pero *no* mejora el pronóstico.',
    'En toda descompensación, busca el desencadenante.'
  ],
  ref:'Guía ESC 2021 y actualización 2023 sobre insuficiencia cardíaca; Harrison, 21.ª ed.'
},

/* ==================================================== */
'sindrome-coronario-agudo': {
  tema:'Síndrome coronario agudo',
  bloque:'Medicina Interna',
  min:8,
  idea:'Tiempo es músculo. Todo el manejo se organiza alrededor de una sola decisión: ¿hay elevación del ST y, si la hay, cuánto tardo en abrir la arteria?',
  claves:['síndrome coronario','SCACEST','SCASEST','infarto','troponina','angioplastia','reperfusión'],
  sigue:'angina-estable-e-inestable',
  secciones:[
    {
      t:'Un mismo mecanismo, tres presentaciones',
      p:[
        'Detrás de los síndromes coronarios agudos hay casi siempre lo mismo: una placa de ateroma que se rompe o se erosiona y sobre la que se forma un trombo. Lo que cambia es cuánto ocluye ese trombo.',
        'Si la oclusión es *completa y persistente*, todo el espesor de la pared se queda sin flujo y en el electrocardiograma aparece la elevación del segmento ST: es el infarto con elevación del ST, y es el que exige abrir la arteria de inmediato. Si la oclusión es *parcial o intermitente*, no hay elevación del ST y el cuadro se separa en dos según la troponina: si se eleva, hay necrosis y se trata de un infarto sin elevación del ST; si no se eleva, es una angina inestable.'
      ]
    },
    {
      t:'El electrocardiograma manda',
      p:[
        'Ante un dolor torácico sugestivo, el electrocardiograma debe realizarse e interpretarse en los primeros diez minutos. La localización orienta la arteria y anticipa las complicaciones: V1-V4 corresponde a la cara anteroseptal y a la descendente anterior, con riesgo de fallo de bomba; DII, DIII y aVF a la cara inferior y a la coronaria derecha, con riesgo de bloqueos y bradicardia; DI, aVL, V5 y V6 a la lateral.',
        'Hay dos reflejos que salvan pacientes. El primero: ante un infarto inferior, registrar siempre las *derivaciones derechas*, sobre todo V4R, porque la afectación del ventrículo derecho cambia el tratamiento. El segundo: ante un descenso marcado del ST en V1-V3, pensar en un infarto *posterior*, que es una elevación vista del revés, y registrar las derivaciones posteriores.',
        'La *troponina* confirma la necrosis, pero se interpreta como curva, no como valor aislado: hace falta un patrón de ascenso o descenso con al menos un valor por encima del percentil 99. Una troponina elevada y estable indica daño miocárdico crónico —insuficiencia renal, insuficiencia cardíaca, miocarditis, sepsis, taquiarritmia— y no un infarto.'
      ],
      foco:[
        'En el infarto de ventrículo derecho, los nitratos, los diuréticos y los opioides pueden provocar un colapso: ese ventrículo depende de la precarga. Se carga volumen.',
        'Mujeres, ancianos y diabéticos pueden infartar *sin dolor torácico*: disnea, sudoración, malestar epigástrico o síncope. Ante malestar agudo inexplicado con factores de riesgo, haz un electrocardiograma.'
      ]
    },
    {
      t:'Reperfundir: la decisión del reloj',
      p:[
        'En el infarto con elevación del ST, la estrategia preferida es la *angioplastia primaria*, siempre que pueda realizarse dentro de los 120 minutos desde el diagnóstico electrocardiográfico. Si ese plazo no se puede cumplir —porque el centro no tiene hemodinámica y el traslado es largo—, se administra *fibrinólisis* en los primeros diez minutos y después se traslada al paciente para coronariografía entre 2 y 24 horas más tarde, haya funcionado o no.',
        'Trasladar a un paciente durante tres horas "porque la angioplastia es mejor" es un error: lo es solo si llega a tiempo. Pasado el plazo, la fibrinólisis inmediata salva más músculo.',
        'Alrededor de la reperfusión va el tratamiento farmacológico: doble antiagregación, anticoagulación, betabloqueante si no hay contraindicación, estatina de alta intensidad desde el ingreso y, después, IECA. En el síndrome sin elevación del ST no hay reperfusión inmediata sino estratificación del riesgo, que decide si la coronariografía se hace en las primeras 2, 24 o 72 horas.'
      ],
      alarma:[
        'Dolor torácico con elevación del ST: activa el código infarto, no pidas más pruebas.',
        'Hipotensión tras nitroglicerina en un infarto inferior: sospecha ventrículo derecho y carga volumen.',
        'Soplo nuevo, deterioro brusco o shock días después: complicación mecánica —rotura de pared, comunicación interventricular, insuficiencia mitral aguda—.'
      ]
    }
  ],
  recordar:[
    'ECG en los primeros *10 minutos*; la troponina se lee como *curva*.',
    'Angioplastia primaria si es posible en *120 minutos*; si no, fibrinólisis ya.',
    'Infarto inferior → mira *V4R*: si hay ventrículo derecho, nada de nitratos.',
    'Descenso de ST en V1-V3 puede ser un infarto *posterior*.',
    'Diabéticos, ancianos y mujeres pueden infartar *sin dolor*.'
  ],
  ref:'Guía ESC 2023 sobre síndromes coronarios agudos; cuarta definición universal del infarto de miocardio.'
},

/* ==================================================== */
'angina-estable-e-inestable': {
  tema:'Angina estable e inestable',
  bloque:'Medicina Interna',
  min:5,
  idea:'La misma placa, dos situaciones distintas. Lo que las separa no es la intensidad del dolor sino si el patrón cambió.',
  claves:['angina','dolor torácico','isquémic','ergometría'],
  sigue:'arritmias',
  secciones:[
    {
      t:'Estable: el umbral se respeta',
      p:[
        'La angina estable es un desequilibrio previsible entre la demanda de oxígeno del miocardio y lo que la coronaria estenosada puede aportar. Aparece siempre con el mismo nivel de esfuerzo, dura pocos minutos y cede con el reposo o con nitroglicerina sublingual. Ese carácter reproducible es su definición.',
        'El dolor típico se describe como opresivo, retroesternal, irradiado a brazo izquierdo, cuello o mandíbula, desencadenado por el esfuerzo, el frío, las comidas copiosas o el estrés. Cuando reúne las tres características —localización típica, desencadenante por esfuerzo y alivio con reposo o nitratos— se habla de angina típica; con dos, atípica; con una o ninguna, dolor no anginoso.',
        'El estudio se apoya en pruebas de detección de isquemia —ergometría, ecocardiografía o resonancia de estrés, estudios de perfusión— o en la angiotomografía coronaria, que valora la anatomía. El tratamiento tiene dos objetivos separados: mejorar el pronóstico con antiagregación y estatina de alta intensidad, y aliviar los síntomas con betabloqueantes o calcioantagonistas y nitratos.'
      ]
    },
    {
      t:'Inestable: el patrón se rompe',
      p:[
        'La angina se vuelve inestable cuando cambia: aparece en reposo, es de reciente comienzo, o el umbral de esfuerzo baja de forma progresiva, lo que se llama angina en crescendo. Ese cambio refleja que la placa se ha complicado con un trombo, aunque no llegue a ocluir del todo.',
        'Es un síndrome coronario agudo y se trata como tal: ingreso, antiagregación, anticoagulación, antianginosos y estratificación del riesgo para decidir el momento de la coronariografía. La troponina, por definición, es normal —si se eleva, ya es un infarto sin elevación del ST—, y esa normalidad es justamente la trampa: tranquiliza y hace que se dé de alta a un paciente con riesgo alto.'
      ],
      foco:[
        'La pregunta que decide: ¿este dolor apareció con el mismo esfuerzo de siempre, o el patrón cambió en los últimos días?',
        'Troponina normal *no* significa bajo riesgo cuando el patrón es de angina inestable.'
      ],
      alarma:[
        'Angina de reposo, prolongada o en crescendo: no se estudia de forma ambulatoria.',
        'Angina que aparece por primera vez en un paciente con factores de riesgo: es inestable por definición.'
      ]
    }
  ],
  recordar:[
    'Estable = *umbral fijo y reproducible*, cede con reposo.',
    'Inestable = reposo, reciente comienzo o *en crescendo* → es un síndrome coronario agudo.',
    'En la estable, antiagregante y estatina mejoran el *pronóstico*; los antianginosos, los *síntomas*.',
    'En la inestable la troponina es normal: no te fíes de ella.'
  ],
  ref:'Guía ESC 2023 sobre síndromes coronarios agudos y guía ESC sobre síndromes coronarios crónicos.'
},

/* ==================================================== */
'arritmias': {
  tema:'Arritmias',
  bloque:'Medicina Interna',
  min:8,
  idea:'Tres preguntas resuelven casi cualquier arritmia: ¿el paciente está estable?, ¿el QRS es ancho o estrecho?, ¿el ritmo es regular o irregular?',
  claves:['fibrilación auricular','arritmi','taquicardia','bradicardia','bloqueo AV','marcapasos','CHA'],
  sigue:'interpretacion-basica-del-ecg',
  secciones:[
    {
      t:'El algoritmo de las tres preguntas',
      p:[
        'La primera pregunta es siempre la *estabilidad hemodinámica*: hipotensión, alteración de la conciencia, dolor torácico isquémico o insuficiencia cardíaca aguda. Si el paciente está inestable, la respuesta es eléctrica —cardioversión sincronizada en las taquiarritmias, marcapasos en las bradiarritmias— y no se pierde tiempo con fármacos. La frecuencia por sí sola no decide nada: hay pacientes estables a 190 y pacientes en shock a 140.',
        'La segunda es la *anchura del QRS*. Estrecho significa que el impulso baja por el sistema de conducción normal, de modo que el origen está por encima del ventrículo. Ancho significa que el ventrículo se despolariza de forma anómala, y en un paciente con cardiopatía estructural o infarto previo eso es una taquicardia ventricular hasta que se demuestre lo contrario.',
        'La tercera es la *regularidad*. Una taquicardia de QRS estrecho regular sugiere reentrada nodal o flutter con conducción fija; irregular, fibrilación auricular.'
      ],
      foco:[
        'Taquicardia de QRS *ancho* en cardiópata: trátala como ventricular. Dar verapamilo puede provocar un colapso.',
        'En el paciente estable hay tiempo para el ECG de 12 derivaciones; en el inestable, para la descarga.'
      ]
    },
    {
      t:'Fibrilación auricular: frecuencia, ritmo y trombo',
      p:[
        'Es la arritmia sostenida más frecuente. Se reconoce por la ausencia de ondas P y la irregularidad completa de los intervalos R-R. Su manejo se organiza en tres decisiones independientes.',
        'La primera es el *control de frecuencia* frente al *control de ritmo*: ninguna estrategia es universalmente superior en supervivencia, aunque el control de ritmo precoz beneficia a pacientes seleccionados y sintomáticos.',
        'La segunda es la *cardioversión*, y aquí manda la regla de las 48 horas: si la arritmia lleva más de ese tiempo o su duración es incierta, puede haber un trombo en la orejuela izquierda y revertir sin más puede provocar un ictus. Hay dos caminos: descartar el trombo con ecocardiografía transesofágica, o anticoagular tres semanas antes. En cualquier caso se mantiene la anticoagulación al menos cuatro semanas después, porque la aurícula tarda en recuperar su contractilidad.',
        'La tercera, y la que más vidas cambia, es la *anticoagulación crónica*, que se decide con la escala CHA2DS2-VASc y no depende de si el paciente está en ritmo sinusal o no. La aspirina no es una alternativa: no protege del ictus cardioembólico y sí sangra.'
      ],
      alarma:[
        'Fibrilación auricular de más de 48 horas: no cardiovertir sin descartar trombo o anticoagular antes.',
        'Fibrilación auricular con QRS ancho, muy rápida e irregular en un joven: sospecha preexcitación. Los frenadores del nodo —digoxina, verapamilo, adenosina— están contraindicados.'
      ]
    },
    {
      t:'Bradiarritmias y bloqueos',
      p:[
        'En las bradicardias la pregunta es la misma: ¿hay síntomas o inestabilidad? Si los hay, se administra atropina y, si no responde, marcapasos transcutáneo o perfusión de isoproterenol o adrenalina como puente al definitivo. En paralelo se buscan causas reversibles: fármacos frenadores, hiperpotasemia, isquemia, hipotiroidismo.',
        'De los bloqueos auriculoventriculares, lo importante es separar dos. El *Mobitz I* o Wenckebach alarga progresivamente el PR hasta que un latido no conduce; suele ser nodal, benigno y no requiere marcapasos si es asintomático. El *Mobitz II* mantiene el PR constante y de pronto falla un latido; es infrahisiano, tiene riesgo de progresar a bloqueo completo y sí es indicación de marcapasos, igual que el bloqueo completo sintomático.'
      ]
    }
  ],
  recordar:[
    'Inestable → *electricidad*, sin demora.',
    'QRS ancho + cardiopatía = *taquicardia ventricular* hasta que se demuestre lo contrario.',
    'Fibrilación auricular > *48 h*: no cardiovertir sin descartar trombo.',
    'La anticoagulación se decide por *CHA2DS2-VASc*, no por los síntomas.',
    'Mobitz I: se vigila. Mobitz II y bloqueo completo: *marcapasos*.'
  ],
  ref:'Guía ESC 2024 sobre fibrilación auricular; guías ESC sobre taquicardias supraventriculares y estimulación cardíaca.'
},

/* ==================================================== */
'interpretacion-basica-del-ecg': {
  tema:'Interpretación básica del ECG',
  bloque:'Medicina Interna',
  min:7,
  idea:'Leerlo siempre en el mismo orden evita que un hallazgo llamativo tape otro más importante. El orden es la técnica.',
  claves:['electrocardiogram','ECG','segmento ST','onda T','onda Q','QT','QRS'],
  sigue:'neumonia-adquirida-en-la-comunidad',
  secciones:[
    {
      t:'Un orden fijo, siempre el mismo',
      p:[
        'La lectura sistemática consiste en responder siempre las mismas preguntas: frecuencia, ritmo, eje, intervalos, morfología del QRS y, por último, repolarización, es decir, segmento ST y onda T. El orden importa porque un ST llamativo captura la atención y hace que se pase por alto una onda P que no está o un PR que se alarga.',
        'Para la *frecuencia*, con papel a 25 mm/s y ritmo regular, se divide 300 entre el número de cuadros grandes entre dos R. Para el *ritmo*, la pregunta es si hay una onda P delante de cada QRS con un PR constante. Los *intervalos* a vigilar son el PR, normal entre 120 y 200 ms, el QRS, normal por debajo de 120, y el QT corregido, cuya prolongación predispone a la torsade de pointes.'
      ]
    },
    {
      t:'Qué mira cada derivación',
      p:[
        'Las derivaciones son ventanas al corazón, y saber a qué territorio corresponde cada una es lo que convierte un hallazgo en un diagnóstico. DII, DIII y aVF miran la *cara inferior*, irrigada habitualmente por la coronaria derecha. V1 y V2 el *septo*; V3 y V4 la *cara anterior*, territorio de la descendente anterior. V5, V6, DI y aVL la *cara lateral*, de la circunfleja.',
        'Los cambios agrupados por territorio son los que tienen valor. Una alteración aislada en una sola derivación rara vez significa algo; en cambio, la elevación del ST en dos derivaciones contiguas del mismo territorio, con descenso especular en las opuestas, es un infarto.'
      ],
      foco:[
        'Elevación del ST *convexa*, localizada por territorio y con imagen especular = infarto.',
        'Elevación *cóncava*, difusa, sin especular y con descenso del PR = pericarditis.'
      ]
    },
    {
      t:'Los patrones que hay que reconocer de un vistazo',
      p:[
        'Algunos trazados tienen que salir sin pensarlo. La *fibrilación auricular*: sin ondas P y con R-R completamente irregular. El *flutter*: ondas en dientes de sierra a unos 300 por minuto. El *bloqueo completo*: ondas P y QRS disociados, cada uno a su ritmo.',
        'En electrolitos, la *hiperpotasemia* sigue una secuencia que hay que conocer porque obliga a tratar sin esperar al laboratorio: ondas T altas y picudas, después aplanamiento y desaparición de la onda P, luego ensanchamiento del QRS y finalmente onda sinusoidal. La *hipopotasemia* hace lo contrario: aplana la T y saca la onda U.',
        'Y en el paciente con disnea, el patrón *S1Q3T3* es el hallazgo clásico de la embolia pulmonar, aunque poco sensible: lo más frecuente en la embolia es simplemente una taquicardia sinusal, y un ECG normal no la descarta.'
      ],
      alarma:[
        'Ondas T picudas con QRS ancho en un paciente renal: hiperpotasemia grave. Gluconato cálcico ya.',
        'QT largo en un paciente que va a recibir fármacos que lo alargan más: riesgo de torsade.'
      ]
    }
  ],
  recordar:[
    'Léelo *siempre en el mismo orden*: frecuencia, ritmo, eje, intervalos, QRS, repolarización.',
    'Inferior = DII, DIII, aVF. Anteroseptal = V1-V4. Lateral = DI, aVL, V5, V6.',
    'Infarto: ST *convexo*, por territorio, con especular. Pericarditis: ST *difuso y cóncavo* con PR descendido.',
    'Hiperpotasemia: T picuda → P desaparece → QRS ancho → sinusoidal.',
    'Un ECG normal *no* descarta embolia pulmonar.'
  ],
  ref:'Goldberger, Electrocardiografía Clínica; guías ESC.'
},

/* ==================================================== */
'neumonia-adquirida-en-la-comunidad': {
  tema:'Neumonía adquirida en la comunidad',
  bloque:'Medicina Interna',
  min:6,
  idea:'El diagnóstico suele ser fácil; lo que se falla es decidir dónde se trata al paciente y reconocer al que no está respondiendo.',
  claves:['neumonía','CURB','consolidación','amoxicilina','ceftriaxona'],
  sigue:'epoc',
  secciones:[
    {
      t:'Reconocerla',
      p:[
        'La neumonía se sospecha ante fiebre, tos, expectoración, dolor pleurítico y disnea, con crepitantes o soplo tubárico en la auscultación, y se confirma con un infiltrado en la radiografía de tórax. En el anciano puede faltar casi todo eso: a veces la única manifestación es la confusión, la caída o el deterioro funcional, y por eso el umbral para radiografiar debe ser más bajo.',
        'La forma clásica, típicamente neumocócica, es de inicio brusco, con fiebre alta, escalofríos, dolor pleurítico y condensación lobar. La forma *atípica*, con Mycoplasma a la cabeza, afecta a jóvenes, es subaguda, cursa con tos seca, cefalea y malestar, y muestra una disociación característica: la radiografía es más llamativa que la auscultación. Esa distinción importa porque Mycoplasma carece de pared celular y los betalactámicos no le afectan: necesita macrólido o doxiciclina.'
      ]
    },
    {
      t:'La decisión que de verdad se evalúa: dónde se trata',
      p:[
        'Más que el antibiótico, lo que se juzga es el destino del paciente. La escala *CURB-65* lo objetiva con cinco criterios: confusión, urea elevada, frecuencia respiratoria igual o mayor de 30, presión arterial baja y edad igual o mayor de 65 años. Con 0 o 1 punto el manejo puede ser ambulatorio; con 2 se valora el ingreso; con 3 o más está indicado ingresar y hay que valorar cuidados intensivos.',
        'El tratamiento ambulatorio del paciente sano se apoya en amoxicilina a dosis altas, cubriendo neumococo, con macrólido si se sospecha atípica. En el paciente hospitalizado se usa un betalactámico asociado a macrólido, o una quinolona respiratoria. Y lo que decide el pronóstico tanto como el fármaco es la precocidad: el antibiótico se administra cuanto antes, sin esperar resultados microbiológicos.'
      ],
      foco:[
        'Un paciente que a las 72 horas no mejora obliga a replantear: ¿derrame complicado o empiema?, ¿germen no cubierto?, ¿no es una infección?, ¿es un huésped inmunodeprimido?',
        'Ante un derrame nuevo, la toracocentesis va antes que el cambio de antibiótico.'
      ],
      alarma:[
        'Confusión, taquipnea de 30 o más, hipotensión o hipoxemia: valora ingreso y sepsis.',
        'Neumonía necrotizante o absceso en un alcohólico: piensa en Klebsiella o en anaerobios por aspiración.'
      ]
    }
  ],
  recordar:[
    '*CURB-65* decide el destino: 0-1 casa, 2 valorar, ≥3 ingreso.',
    'Atípica = joven, subaguda, *disociación clínico-radiológica* → macrólido, no betalactámico.',
    'El anciano puede presentar solo *confusión* o deterioro funcional.',
    'Si no mejora en 72 horas: busca *complicación local* antes de cambiar el antibiótico.'
  ],
  ref:'Guías ATS/IDSA sobre neumonía adquirida en la comunidad; British Thoracic Society.'
},

/* ==================================================== */
'epoc': {
  tema:'EPOC',
  bloque:'Medicina Interna',
  min:6,
  idea:'Se diagnostica con espirometría posbroncodilatador, y solo dos medidas alargan la vida: dejar de fumar y, cuando está indicada, la oxigenoterapia continua.',
  claves:['EPOC','enfisema','bronquitis crónica','GOLD','DLCO','ventilación no invasiva'],
  sigue:'asma-bronquial',
  secciones:[
    {
      t:'El criterio que la define',
      p:[
        'La EPOC es una obstrucción crónica al flujo aéreo que no revierte del todo, en un paciente con exposición de riesgo —tabaco sobre todo, pero también humo de biomasa— y síntomas compatibles: disnea de esfuerzo progresiva, tos y expectoración crónicas.',
        'El diagnóstico es espirométrico y exige una relación FEV1/FVC menor de 0,70 *después* de broncodilatador. Ese matiz es lo que la separa del asma, donde la obstrucción revierte. Diagnosticar sin repetir tras el broncodilatador etiqueta de EPOC a asmáticos, con otro tratamiento y otro pronóstico.',
        'Una vez confirmada, la gravedad se gradúa por el FEV1, pero el tratamiento se elige por los *síntomas y las exacerbaciones*, no por el FEV1 aislado.'
      ]
    },
    {
      t:'Qué modifica el curso y qué solo alivia',
      p:[
        'Solo dos intervenciones han demostrado aumentar la supervivencia. La primera y más importante es *dejar de fumar*, que además frena la caída acelerada del FEV1. La segunda es la *oxigenoterapia domiciliaria continua*, al menos 15 horas al día, indicada cuando la presión arterial de oxígeno en situación estable es igual o menor de 55 mmHg, o está entre 56 y 59 con poliglobulia, hipertensión pulmonar o cor pulmonale. El beneficio depende de las horas de uso: prescribirla "para cuando se ahogue" desperdicia su efecto.',
        'El resto del tratamiento mejora síntomas, calidad de vida y exacerbaciones: broncodilatadores de acción prolongada, corticoides inhalados en fenotipos concretos, vacunación antigripal y antineumocócica y, muy especialmente, la *rehabilitación respiratoria*, que es la intervención no farmacológica con mayor efecto y que rompe el círculo de disnea, inactividad y desacondicionamiento.'
      ],
      foco:[
        'La oxigenoterapia se indica por gasometría en fase *estable*, no durante una exacerbación.',
        'Se recomienda ejercicio supervisado, no reposo: el reposo empeora la disnea.'
      ]
    },
    {
      t:'La exacerbación',
      p:[
        'Se define por el empeoramiento agudo de los síntomas respecto a la situación basal, y los *criterios de Anthonisen* orientan el uso de antibiótico: aumento de la disnea, del volumen del esputo y de su purulencia. Se indica antibiótico cuando están los tres, cuando hay dos siendo uno la purulencia, o cuando el paciente requiere ventilación.',
        'El tratamiento incluye broncodilatadores de acción corta, un ciclo corto de corticoide sistémico —que acorta la recuperación y reduce las recaídas— y oxigenoterapia *controlada*, con objetivo de saturación entre 88 y 92%. En el retenedor de CO2, el oxígeno a alto flujo puede provocar hipercapnia y acidosis. Ante acidosis respiratoria, la ventilación mecánica no invasiva reduce la intubación y la mortalidad.'
      ],
      alarma:[
        'Somnolencia progresiva en una exacerbación: sospecha hipercapnia, no cansancio.',
        'Saturación objetivo *88-92%*: en la EPOC, más oxígeno no es mejor.'
      ]
    }
  ],
  recordar:[
    'Diagnóstico: FEV1/FVC < 0,70 *posbroncodilatador*.',
    'Solo alargan la vida: *dejar de fumar* y la *oxigenoterapia continua* ≥15 h/día.',
    'La rehabilitación respiratoria es la mejor medida no farmacológica.',
    'Exacerbación: criterios de *Anthonisen* para el antibiótico; corticoide corto; oxígeno al *88-92%*.',
    'Acidosis respiratoria → ventilación no invasiva.'
  ],
  ref:'Informe GOLD; ensayos NOTT y MRC; Harrison, 21.ª ed.'
},

/* ==================================================== */
'asma-bronquial': {
  tema:'Asma bronquial',
  bloque:'Medicina Interna',
  min:6,
  idea:'Es una enfermedad inflamatoria, no solo broncoespástica. Por eso el tratamiento de fondo es el corticoide inhalado y no el broncodilatador de rescate.',
  claves:['asma','sibilancia','metacolina','salbutamol','GINA','broncodilatador'],
  sigue:'derrame-pleural',
  secciones:[
    {
      t:'Obstrucción variable y reversible',
      p:[
        'El asma se caracteriza por síntomas respiratorios variables —sibilancias, tos, opresión torácica y disnea— junto con una limitación variable del flujo aéreo. La palabra clave es *variable*: los síntomas cambian con el tiempo y con los desencadenantes, y por eso una exploración normal en un día bueno no descarta nada.',
        'La confirmación funcional busca esa variabilidad. En la espirometría, la reversibilidad se define por un aumento del FEV1 de al menos un 12% y 200 mL tras broncodilatador. Si la espirometría es normal, se recurre a la variabilidad del flujo espiratorio máximo o a una prueba de provocación con metacolina. En menores de 5 o 6 años, que no colaboran con la espirometría, el diagnóstico es clínico y se apoya en la respuesta a un tratamiento de prueba.'
      ]
    },
    {
      t:'Tratamiento de fondo',
      p:[
        'El error histórico del asma fue tratarla solo con broncodilatador. El paciente mejora, se siente bien y sigue inflamado, hasta que llega la crisis. Por eso las guías actuales han retirado la recomendación de salbutamol en monoterapia incluso en el asma leve: aumenta las exacerbaciones y se asoció a muertes evitables.',
        'La base del tratamiento es el *corticoide inhalado*, solo o combinado con un broncodilatador de acción prolongada, y se escalona según el control. Junto al fármaco hay tres cosas que valen tanto como él: comprobar la técnica inhalatoria, revisar la adherencia y controlar los desencadenantes —alérgenos, tabaco, reflujo, rinitis, fármacos como los antiinflamatorios en el asma sensible—.'
      ],
      foco:[
        'Un paciente que consume muchos inhaladores de rescate está mal controlado, aunque se sienta bien.',
        'Antes de subir de escalón, revisa técnica, adherencia y desencadenantes: casi siempre el fallo está ahí.'
      ]
    },
    {
      t:'La crisis y sus signos de gravedad',
      p:[
        'El tratamiento de la crisis moderada o grave combina oxígeno con objetivo de saturación por encima del 94%, salbutamol inhalado en tandas —añadiendo bromuro de ipratropio en las graves— y corticoide sistémico administrado *precozmente*, porque tarda horas en actuar y darlo tarde equivale casi a no darlo.',
        'Los signos que anuncian riesgo vital hay que reconocerlos porque son contraintuitivos. El *silencio auscultatorio* es peor señal que unas sibilancias ruidosas: si no circula aire, no hay ruido. La *bradicardia* y la hipotensión indican agotamiento tras la fase de taquicardia. Y una pCO2 que se normaliza en plena crisis no significa mejoría: significa que el músculo respiratorio ya no compensa y que la parada está cerca.'
      ],
      alarma:[
        'Silencio auscultatorio, bradicardia, cianosis, confusión o incapacidad para hablar: riesgo vital inmediato.',
        'pCO2 normal o alta en una crisis: fatiga muscular, no mejoría.'
      ]
    }
  ],
  recordar:[
    'Reversibilidad: FEV1 sube *≥12% y 200 mL* tras broncodilatador.',
    'La base del tratamiento es el *corticoide inhalado*; el salbutamol solo, nunca.',
    'Corticoide sistémico *precoz* en la crisis: tarda horas.',
    'Silencio auscultatorio y pCO2 normalizada = *gravedad extrema*.'
  ],
  ref:'Estrategia GINA; Harrison, 21.ª ed.'
},

/* ==================================================== */
'derrame-pleural': {
  tema:'Derrame pleural',
  bloque:'Medicina Interna',
  min:5,
  idea:'Todo empieza con una pregunta binaria: ¿exudado o trasudado? De ahí sale toda la búsqueda diagnóstica.',
  claves:['derrame pleural','Light','exudado','trasudado','toracocentesis','empiema','ADA pleural'],
  sigue:'tromboembolia-pulmonar',
  secciones:[
    {
      t:'Los criterios de Light',
      p:[
        'La toracocentesis diagnóstica separa dos mundos. El *trasudado* se produce por un desequilibrio de presiones con pleura sana: insuficiencia cardíaca, cirrosis, síndrome nefrótico. El *exudado* implica que la pleura está enferma: infección, neoplasia, tuberculosis, embolia pulmonar, enfermedad autoinmune.',
        'Los criterios de Light clasifican como exudado si se cumple *al menos uno* de estos tres: cociente de proteínas pleura/suero mayor de 0,5, cociente de LDH pleura/suero mayor de 0,6, o LDH pleural superior a dos tercios del límite alto del suero. Exigir los tres es el error clásico y desvía toda la búsqueda posterior.'
      ],
      foco:[
        'Basta *un* criterio de Light para hablar de exudado.',
        'Un derrame masivo, hemático o que se reproduce rápido obliga a descartar neoplasia.'
      ]
    },
    {
      t:'El derrame paraneumónico: cuándo hay que drenar',
      p:[
        'Cuando el derrame acompaña a una neumonía, la decisión que importa es si hay que colocar un tubo. Se considera complicado —y por tanto se drena— si el pH del líquido es menor de 7,20, si la glucosa es baja, o si hay pus franco, gérmenes en la tinción de Gram o cultivo positivo.',
        'La razón para no esperar es que el derrame complicado se tabica en días y evoluciona a empiema y fibrotórax: pasado ese punto ya no se drena bien y hace falta fibrinolítico intrapleural o cirugía toracoscópica. El antibiótico solo no resuelve una colección.',
        'Otros datos del líquido orientan la causa: la adenosina desaminasa alta y el predominio linfocitario sugieren tuberculosis; la citología positiva confirma la neoplasia; los triglicéridos altos indican quilotórax; y la amilasa elevada apunta a pancreatitis o rotura esofágica.'
      ],
      alarma:[
        'pH menor de 7,20 en un derrame paraneumónico: tubo de tórax, no más antibiótico.',
        'Neumonía que no mejora en 72 horas con derrame nuevo: puncionar antes de cambiar de fármaco.'
      ]
    }
  ],
  recordar:[
    'Un solo criterio de *Light* ya define exudado.',
    'Trasudado = presiones (corazón, hígado, riñón). Exudado = pleura enferma.',
    'Paraneumónico complicado (*pH < 7,20*, glucosa baja, pus): se drena.',
    'ADA alta + linfocitos = tuberculosis pleural.'
  ],
  ref:'Guías de la British Thoracic Society sobre enfermedad pleural; Harrison, 21.ª ed.'
},

/* ==================================================== */
'tromboembolia-pulmonar': {
  tema:'Tromboembolia pulmonar',
  bloque:'Medicina Interna',
  min:6,
  idea:'La probabilidad clínica previa decide qué prueba pedir. Usar el dímero D en el paciente equivocado es la forma más común de perder un diagnóstico mortal.',
  claves:['tromboembolia','TEP','Wells','dímero D','angiotomografía','trombosis venosa'],
  sigue:'tuberculosis',
  secciones:[
    {
      t:'Sospecharla',
      p:[
        'La embolia pulmonar se presenta de forma inespecífica: disnea súbita, dolor pleurítico, taquicardia, tos, a veces síncope o hemoptisis. Lo que la pone sobre la mesa no son los síntomas sino el *contexto*: cirugía o inmovilización recientes, cáncer activo, embarazo o puerperio, anticonceptivos, viaje prolongado, trombofilia o antecedente de trombosis.',
        'Ni el electrocardiograma ni la radiografía la diagnostican. El hallazgo electrocardiográfico más frecuente es la taquicardia sinusal, y el clásico S1Q3T3 aparece en una minoría. Sirven, eso sí, para descartar otras causas de dolor torácico.'
      ]
    },
    {
      t:'La secuencia diagnóstica',
      p:[
        'Primero se estima la *probabilidad clínica* con una escala validada, como la de Wells o la de Ginebra. Y esa estimación determina el siguiente paso, no al revés.',
        'Con probabilidad *baja o intermedia*, el dímero D es útil: su valor predictivo negativo es excelente y un resultado negativo permite descartar sin más pruebas. Conviene recordar que se eleva de forma inespecífica con la edad, el embarazo, la inflamación, el cáncer o la cirugía, de modo que un dímero positivo no confirma nada.',
        'Con probabilidad *alta*, el dímero D no sirve: un resultado negativo no descarta y solo genera falsa tranquilidad. Se pasa directamente a la angiotomografía pulmonar y, si no hay contraindicación hemorrágica, se inicia la anticoagulación mientras se confirma, porque el riesgo de esperar supera al de tratar.'
      ],
      foco:[
        'La pregunta antes de pedir el dímero D: ¿cuál es mi probabilidad previa? Si es alta, no lo pidas.',
        'En el paciente inestable con sospecha alta, la ecocardiografía a pie de cama que muestra sobrecarga derecha puede bastar para tratar.'
      ]
    },
    {
      t:'Tratar según el riesgo',
      p:[
        'El tratamiento base es la anticoagulación. La *trombólisis sistémica* se reserva para la embolia de alto riesgo, es decir, la que cursa con inestabilidad hemodinámica: hipotensión mantenida o shock. En el resto, incluida la embolia con disfunción del ventrículo derecho pero sin hipotensión, se anticoagula y se vigila estrechamente.',
        'La duración depende del contexto: al menos tres meses siempre, y de forma indefinida si el factor de riesgo persiste, si la embolia fue no provocada y recurrente, o si hay cáncer activo. La prevención, por último, es donde más se puede hacer: profilaxis en el paciente quirúrgico y en el ingresado de riesgo, y movilización precoz.'
      ],
      alarma:[
        'Hipotensión mantenida con sospecha de embolia: alto riesgo, valora trombólisis.',
        'Disnea súbita inexplicada en el postoperatorio o en la puérpera: piensa en embolia antes de buscar otra cosa.'
      ]
    }
  ],
  recordar:[
    'Primero la *probabilidad clínica*, después la prueba.',
    'Probabilidad alta → *no* dímero D: angiotomografía y anticoagular ya.',
    'Dímero D: bueno para *descartar*, inútil para confirmar.',
    'Trombólisis solo en la embolia de *alto riesgo* (inestable).',
    'Anticoagulación mínimo *3 meses*; indefinida si el riesgo persiste.'
  ],
  ref:'Guía ESC 2019 sobre diagnóstico y tratamiento de la embolia pulmonar aguda.'
}

});
