/* ============================================================
   APUNTES 07 — Pediatría
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================================================== */
'atencion-al-recien-nacido': {
  tema:'Atención al recién nacido',
  bloque:'Pediatría',
  min:5,
  idea:'Tres preguntas al nacer deciden todo. Si las tres son afirmativas, el recién nacido se seca y se pone sobre su madre: lo demás sobra.',
  claves:['recién nacido','Apgar','piel con piel','pinzamiento','adaptación neonatal'],
  sigue:'reanimacion-neonatal',
  secciones:[
    {
      t:'Las tres preguntas',
      p:[
        'Al nacer se responden tres preguntas: ¿es a término?, ¿respira o llora?, ¿tiene buen tono? Si las tres son afirmativas, el niño pasa con su madre: se seca, se coloca *piel con piel*, se cubre para evitar la pérdida de calor y se pinza el cordón de forma *tardía*, entre uno y tres minutos, lo que mejora los depósitos de hierro y reduce la anemia del lactante.',
        'Las rutinas heredadas —aspirar sistemáticamente, separar al niño, pesarlo de inmediato— están desaconsejadas: la aspiración no aporta beneficio y puede provocar bradicardia refleja y apnea, y la separación interfiere con la termorregulación y con el inicio de la lactancia.',
        'La *puntuación de Apgar* valora frecuencia cardíaca, esfuerzo respiratorio, tono, irritabilidad refleja y color al minuto y a los cinco minutos. Describe la adaptación y permite comparar la evolución, pero *no* se usa para decidir el inicio de la reanimación —eso lo deciden las tres preguntas— ni predice por sí sola el pronóstico neurológico.'
      ],
      foco:[
        'Piel con piel y pinzamiento tardío en el recién nacido vigoroso.',
        'El Apgar describe, no dirige la reanimación.'
      ]
    },
    {
      t:'Las tres profilaxis',
      p:[
        'Antes de salir de la sala de partos, todo recién nacido recibe tres cosas. *Vitamina K intramuscular*, para prevenir la enfermedad hemorrágica: el paso placentario es escaso, la leche materna aporta poco y el intestino aún no está colonizado por la flora que la produce; la forma intramuscular previene de manera fiable también la forma tardía, que puede debutar con hemorragia intracraneal.',
        '*Profilaxis ocular* con eritromicina o tetraciclina tópicas, frente a la oftalmía neonatal por gonococo y clamidia. Y la primera dosis de la vacuna contra la *hepatitis B*, que en el hijo de madre positiva se acompaña de inmunoglobulina específica.',
        'A esto se suman el tamiz neonatal —que detecta enfermedades graves, silenciosas y tratables como el hipotiroidismo congénito, donde el retraso deja daño neurológico irreversible— y el cribado auditivo y el de cardiopatías con oximetría de pulso.'
      ],
      alarma:[
        'Ictericia en las primeras 24 horas: nunca es fisiológica.',
        'Cianosis que no mejora con oxígeno: piensa en cardiopatía, no en pulmón.'
      ]
    }
  ],
  recordar:[
    'Tres preguntas: *a término, respira o llora, buen tono*.',
    'Vigoroso → secar, *piel con piel*, pinzamiento *tardío*.',
    'Tres profilaxis: *vitamina K, ocular y hepatitis B*.',
    'El Apgar no decide la reanimación ni predice el pronóstico.'
  ],
  ref:'Programa de Reanimación Neonatal AAP/AHA; OMS, atención del recién nacido; Nelson, 22.ª ed.'
},

/* ==================================================== */
'reanimacion-neonatal': {
  tema:'Reanimación neonatal',
  bloque:'Pediatría',
  min:5,
  idea:'Casi todo se resuelve ventilando. En el recién nacido el paro es respiratorio, no cardíaco, y por eso el algoritmo del adulto no sirve.',
  claves:['reanimación neonatal','ventilación con presión positiva','frecuencia cardíaca','aire ambiente'],
  sigue:'ictericia-neonatal',
  secciones:[
    {
      t:'Ventilar es la intervención central',
      p:[
        'La bradicardia del recién nacido casi siempre se debe a que el pulmón no se ha aireado. Por eso la *ventilación con presión positiva* es la maniobra que resuelve la mayoría de las reanimaciones, y se inicia cuando el niño está apneico, boquea o tiene una frecuencia cardíaca menor de 100 pese a los pasos iniciales de secado y estimulación.',
        'El indicador más fiable de que la ventilación es eficaz es el *ascenso de la frecuencia cardíaca*. El color es tardío y poco fiable, y la saturación asciende de forma progresiva en los primeros minutos de vida, por lo que se compara con tablas por minuto de vida y no con los valores del adulto.',
        'Si la frecuencia no mejora, el problema casi siempre está en la técnica: hay que aplicar los pasos correctivos —reajustar la mascarilla, reposicionar la cabeza, aspirar secreciones, abrir la boca, aumentar la presión y considerar vía aérea alternativa— antes de escalar.'
      ],
      foco:[
        'Las compresiones solo se añaden si, tras 30 segundos de ventilación *eficaz*, la frecuencia sigue por debajo de *60*, con relación 3 a 1.',
        'Se inicia con *aire ambiente* en el recién nacido a término: el oxígeno al 100% de entrada se asocia a más estrés oxidativo y peores resultados.'
      ],
      alarma:[
        'Aplicar el algoritmo del adulto y empezar por compresiones: en el neonato el orden es distinto.',
        'Buscar saturaciones de adulto en el primer minuto lleva a hiperoxigenar.'
      ]
    }
  ],
  recordar:[
    'La intervención clave es *ventilar*.',
    'Éxito = sube la *frecuencia cardíaca*.',
    'Compresiones si FC < *60* tras 30 s de ventilación eficaz, relación *3:1*.',
    'A término: empezar con *aire ambiente*.'
  ],
  ref:'Programa de Reanimación Neonatal, AAP/AHA, 8.ª edición.'
},

/* ==================================================== */
'ictericia-neonatal': {
  tema:'Ictericia neonatal',
  bloque:'Pediatría',
  min:5,
  idea:'Fraccionar la bilirrubina es lo que separa un proceso benigno de una urgencia quirúrgica. Sin fraccionar no se puede decidir nada.',
  claves:['ictericia neonatal','bilirrubina','fototerapia','atresia biliar','kernícterus'],
  sigue:'profilaxis-del-recien-nacido',
  secciones:[
    {
      t:'Fisiológica o no',
      p:[
        'La ictericia *fisiológica* aparece después de las 24 horas de vida, es siempre a expensas de bilirrubina *indirecta*, asciende despacio, alcanza su pico hacia el tercer o cuarto día y se resuelve en la segunda semana. Se debe a la inmadurez de la conjugación hepática, la mayor masa eritrocitaria y la circulación enterohepática aumentada.',
        'Hay tres situaciones que la descartan de entrada. Primera: la ictericia que aparece en las *primeras 24 horas* nunca es fisiológica y obliga a descartar hemólisis —incompatibilidad ABO o Rh, esferocitosis, déficit de G6PD—. Segunda: el ascenso rápido o cifras muy altas para la edad en horas. Y tercera, la más importante conceptualmente: la elevación de la bilirrubina *directa*.',
        'La bilirrubina directa elevada —por encima de 1 mg/dL o de un 20% del total— significa *colestasis* y nunca es fisiológica. La primera sospecha es la atresia de vías biliares, cuyo pronóstico depende de operar antes de los 60 días de vida. Por eso toda ictericia que persiste más de dos semanas debe fraccionarse, sin excepción.'
      ],
      foco:[
        'Resta mentalmente: total menos indirecta. Si la directa está alta, es colestasis y corre el reloj.',
        'La ictericia por lactancia materna es benigna y a expensas de indirecta: no obliga a suspender la lactancia.'
      ]
    },
    {
      t:'Tratar la hiperbilirrubinemia indirecta',
      p:[
        'El objetivo del tratamiento es evitar el *kernícterus*, el depósito de bilirrubina en los ganglios basales, que produce daño neurológico irreversible.',
        'La *fototerapia* isomeriza la bilirrubina y permite eliminarla sin necesidad de conjugación. La indicación se decide con nomogramas según las horas de vida, la edad gestacional y los factores de riesgo, no con una cifra única. Si las cifras siguen ascendiendo pese a fototerapia intensiva, se recurre a la *exanguinotransfusión*.',
        'La prevención de la enfermedad hemolítica por Rh merece recordarse aquí: toda gestante Rh negativa no sensibilizada recibe inmunoglobulina *anti-D* en la semana 28, tras el parto si el recién nacido es Rh positivo, y ante cualquier episodio con riesgo de paso de sangre fetal.'
      ],
      alarma:[
        'Ictericia en las primeras 24 horas: hemólisis hasta que se demuestre lo contrario.',
        'Bilirrubina directa alta: colestasis, estudio urgente, ventana quirúrgica de 60 días.'
      ]
    }
  ],
  recordar:[
    'Fisiológica: *después* de 24 h, siempre *indirecta*, ascenso lento.',
    'Primeras 24 h → *hemólisis*.',
    'Bilirrubina *directa* alta → colestasis → atresia biliar, operar antes de los *60 días*.',
    'Fototerapia por nomograma; el objetivo es evitar el *kernícterus*.'
  ],
  ref:'Guías de la American Academy of Pediatrics sobre hiperbilirrubinemia neonatal; Nelson, 22.ª ed.'
},

/* ==================================================== */
'profilaxis-del-recien-nacido': {
  tema:'Profilaxis del recién nacido',
  bloque:'Pediatría',
  min:3,
  idea:'Tres intervenciones de un minuto que previenen una hemorragia intracraneal, una ceguera y una hepatitis crónica.',
  claves:['vitamina K','profilaxis ocular','hepatitis B','oftalmía neonatal'],
  sigue:'lactancia-materna',
  secciones:[
    {
      t:'Las tres, y por qué',
      p:[
        'La *vitamina K intramuscular* previene la enfermedad hemorrágica del recién nacido. El feto tiene reservas escasas porque el paso placentario es limitado, la leche materna aporta poco y el intestino todavía no está colonizado por la flora que la sintetiza. Sin profilaxis puede aparecer la forma clásica en la primera semana o la *tardía*, semanas después, cuya manifestación puede ser directamente una hemorragia intracraneal. La vía intramuscular previene las tres formas de manera fiable.',
        'La *profilaxis ocular* con eritromicina o tetraciclina tópicas previene la oftalmía neonatal por gonococo y clamidia, que era una causa clásica de ceguera.',
        'La *vacuna contra la hepatitis B* al nacer corta la transmisión vertical, que es especialmente relevante porque el recién nacido infectado cronifica en un porcentaje altísimo. En el hijo de madre positiva se añade inmunoglobulina específica.'
      ],
      alarma:[
        'Rechazar o retrasar la vitamina K expone a la forma tardía, que puede debutar con hemorragia cerebral.'
      ]
    }
  ],
  recordar:[
    '*Vitamina K* intramuscular: previene también la forma *tardía*.',
    '*Profilaxis ocular*: gonococo y clamidia.',
    '*Hepatitis B* al nacer; con inmunoglobulina si la madre es positiva.'
  ],
  ref:'Guías de la American Academy of Pediatrics; OMS, atención del recién nacido.'
},

/* ==================================================== */
'lactancia-materna': {
  tema:'Lactancia materna',
  bloque:'Pediatría',
  min:5,
  idea:'Exclusiva seis meses y complementada hasta los dos años. Y casi todas las razones por las que se suspende no son razones de verdad.',
  claves:['lactancia materna','alimentación complementaria','mastitis','galactosemia'],
  sigue:'aiepi',
  secciones:[
    {
      t:'Qué se recomienda y por qué',
      p:[
        'La OMS recomienda lactancia materna *exclusiva* durante los primeros seis meses —sin agua ni infusiones, que no hacen falta ni siquiera con calor— y después alimentación complementaria manteniendo la lactancia hasta los dos años o más.',
        'El beneficio está bien documentado: la leche materna aporta inmunoglobulina A secretora, lactoferrina y factores de crecimiento, reduce las infecciones respiratorias y digestivas y la mortalidad infantil, y en la madre disminuye el riesgo de cáncer de mama y de ovario.',
        'A los seis meses empieza la *alimentación complementaria*, y el nutriente que marca ese momento es el *hierro*: los depósitos acumulados durante la gestación se agotan y la leche aporta poco. Por eso la complementaria debe incluir alimentos ricos en hierro —carnes, vísceras, legumbres, fortificados— y no solo papillas de cereales y frutas.'
      ]
    },
    {
      t:'Los falsos motivos para suspenderla',
      p:[
        'Las contraindicaciones *absolutas* son pocas: la galactosemia clásica del lactante, la infección materna por VIH en contextos donde la lactancia artificial es segura y sostenible, el HTLV-1, la tuberculosis activa no tratada mientras dure el contagio, y algunos tratamientos como la quimioterapia y los radiofármacos.',
        'No la contraindican, en cambio, la *mastitis* —donde mantener el vaciado es parte del tratamiento, y suspender favorece el absceso—, la ictericia por lactancia, las infecciones respiratorias comunes de la madre, ni la inmensa mayoría de los fármacos. Ante una prescripción, lo correcto es consultar fuentes de compatibilidad y elegir el fármaco adecuado, no destetar por precaución: ese consejo suele terminar en destete definitivo.'
      ],
      alarma:[
        'Mastitis: seguir vaciando la mama. Suspender empeora el cuadro.',
        'Introducir leche de vaca entera antes del año: aporta poco hierro y produce microsangrado intestinal.'
      ]
    }
  ],
  recordar:[
    '*Exclusiva 6 meses*, complementada hasta los *2 años*.',
    'A los 6 meses el nutriente limitante es el *hierro*.',
    'Contraindicaciones reales: *galactosemia*, VIH según contexto, HTLV-1, quimioterapia.',
    'Mastitis: se sigue amamantando.'
  ],
  ref:'OMS/UNICEF, estrategia mundial para la alimentación del lactante; Academy of Breastfeeding Medicine.'
},

/* ==================================================== */
'aiepi': {
  tema:'AIEPI',
  bloque:'Pediatría',
  min:6,
  idea:'Una estrategia para que cualquier profesional del primer nivel detecte al niño grave y decida bien. Empieza siempre por los signos de peligro.',
  claves:['AIEPI','signos de peligro','clasificación','referencia','consejería'],
  sigue:'fiebre-en-pediatria',
  secciones:[
    {
      t:'Evaluar de forma integrada',
      p:[
        'La estrategia de Atención Integrada a las Enfermedades Prevalentes de la Infancia parte de dos hechos: los niños llegan con problemas superpuestos, y las principales causas de muerte infantil son pocas y en buena medida evitables.',
        'Por eso en cada consulta se evalúa de forma sistemática lo mismo, con independencia del motivo por el que vinieron: signos generales de peligro, tos o dificultad respiratoria, diarrea, fiebre, problemas de oído, estado nutricional y anemia, vacunación y alimentación. Esa mirada integrada detecta desnutrición, anemia o vacunas atrasadas que nadie mencionó.',
        'Lo primero, siempre, son los *signos generales de peligro*: no puede beber o mamar, vomita todo lo que ingiere, ha tenido convulsiones, o está letárgico o inconsciente. Su presencia indica riesgo vital y obliga a referir de urgencia, administrando la primera dosis del tratamiento *antes* del traslado.'
      ]
    },
    {
      t:'Clasificar por colores y actuar',
      p:[
        'Cada problema se clasifica con un color que determina la conducta. El *rojo* indica una condición grave que requiere referencia urgente al hospital. El *amarillo*, una condición que se trata de forma ambulatoria con medicación específica, indicaciones a la madre y control en dos días. El *verde*, un problema leve que se maneja en casa con medidas de sostén, consejería y signos de alarma explicados.',
        'Dos aplicaciones concretas conviene tenerlas memorizadas. En respiratorio, la *frecuencia respiratoria* define la neumonía: 60 o más por minuto en el menor de 2 meses, 50 o más entre 2 y 11 meses, y 40 o más entre 1 y 5 años; hay que contarla durante un minuto completo y con el niño tranquilo. Con taquipnea sin tiraje ni signos de peligro se clasifica como neumonía y se trata con amoxicilina oral y control en dos días; el tiraje subcostal o cualquier signo de peligro la convierten en neumonía grave y obligan a referir.',
        'En diarrea, la clasificación de la deshidratación define el plan: *plan A* en casa para el niño sin deshidratación, *plan B* con sales de rehidratación oral supervisadas para la deshidratación con signos, y *plan C* intravenoso para la grave, con letargia, incapacidad para beber o shock. A todo episodio se añade *zinc* durante 10 a 14 días, que acorta la duración y reduce las recurrencias, y se mantiene la alimentación: el ayuno prolonga la diarrea.'
      ],
      alarma:[
        'No referir sin administrar la primera dosis del tratamiento.',
        'Contar mal la frecuencia respiratoria invalida toda la clasificación.'
      ]
    }
  ],
  recordar:[
    'Primero, *signos generales de peligro*: no bebe, vomita todo, convulsiona, letárgico.',
    'Colores: *rojo referir, amarillo tratar, verde casa*.',
    'Taquipnea: *60/50/40* según la edad.',
    'Diarrea: planes *A, B, C* + *zinc* + seguir alimentando.'
  ],
  ref:'OMS/UNICEF, AIEPI: cuadro de procedimientos.'
},

/* ==================================================== */
'fiebre-en-pediatria': {
  tema:'Fiebre en pediatría',
  bloque:'Pediatría',
  min:5,
  idea:'La edad manda. Por debajo del mes, la fiebre es siempre estudio completo, aunque el niño tenga buen aspecto.',
  claves:['fiebre','lactante febril','sin foco','antitérmico','sepsis'],
  sigue:'convulsiones-febriles',
  secciones:[
    {
      t:'El riesgo cambia con la edad',
      p:[
        'En el *menor de 28 días*, el sistema inmunitario es inmaduro y la infección bacteriana grave puede cursar sin ningún signo localizador y con buen aspecto general, hasta que el niño se descompensa bruscamente. Por eso la fiebre a esa edad obliga a estudio completo —hemograma, reactantes, hemocultivo, orina con urocultivo y punción lumbar—, ingreso y antibiótico empírico intravenoso. El buen aspecto no es un criterio de seguridad en este grupo.',
        'Entre *1 y 3 meses* se aplican protocolos de estratificación de riesgo que permiten manejos menos agresivos en niños seleccionados con criterios de bajo riesgo. Por encima de los 3 meses, y especialmente en el niño vacunado, la evaluación se apoya más en el aspecto general y en la búsqueda de foco.',
        'En el niño febril *sin foco*, la infección urinaria es la causa bacteriana más frecuente y a menudo el único síntoma es la fiebre. La muestra debe obtenerse por *sondaje o punción suprapúbica*: la bolsa colectora contamina con frecuencia y un cultivo positivo por bolsa no permite diagnosticar.'
      ],
      foco:[
        'Fiebre sin foco en el lactante: piensa en orina, y recoge la muestra bien.',
        'Tras una infección urinaria febril en el lactante, hay que estudiar el tracto urinario con ecografía.'
      ]
    },
    {
      t:'Para qué sirve el antitérmico',
      p:[
        'La fiebre es una respuesta fisiológica de defensa y en los rangos habituales no produce daño cerebral. El objetivo del antitérmico es el *confort* del niño, no alcanzar una cifra concreta en el termómetro.',
        'Dos ideas que hay que desmontar en la consulta: los antitérmicos *no previenen las convulsiones febriles*, así que administrarlos con esa intención no está justificado; y no deben alternarse ni combinarse paracetamol e ibuprofeno de forma sistemática, por el riesgo de errores de dosificación. Si el niño duerme tranquilo, el descanso vale más que la cifra.'
      ],
      alarma:[
        'Menor de 28 días con fiebre: estudio completo e ingreso, aunque tenga buen aspecto.',
        'Petequias con fiebre: sospecha meningococemia.'
      ]
    }
  ],
  recordar:[
    '*< 28 días* con fiebre: estudio completo, ingreso y antibiótico.',
    'Fiebre sin foco: descarta *infección urinaria*, con muestra por sondaje.',
    'El antitérmico busca *confort*, no una cifra.',
    'Los antitérmicos *no* previenen convulsiones febriles.'
  ],
  ref:'Guías de la American Academy of Pediatrics sobre el lactante febril y sobre infección urinaria; Nelson, 22.ª ed.'
},

/* ==================================================== */
'convulsiones-febriles': {
  tema:'Epilepsia en pediatría',
  bloque:'Pediatría',
  min:5,
  idea:'La convulsión febril simple es benigna y no necesita casi nada. Lo importante es reconocerla y no convertirla en una enfermedad.',
  claves:['convulsión febril','epilepsia infantil','ausencias','electroencefalograma'],
  sigue:'bronquiolitis',
  secciones:[
    {
      t:'Convulsión febril: simple o compleja',
      p:[
        'La convulsión febril *simple* es generalizada, dura menos de 15 minutos, no se repite en 24 horas, ocurre entre los 6 meses y los 5 años y se sigue de recuperación neurológica completa. No precisa electroencefalograma, ni neuroimagen, ni tratamiento antiepiléptico crónico: lo que hay que hacer es buscar el foco de la fiebre y explicar a los padres el buen pronóstico.',
        'Es *compleja* si es focal, dura más de 15 minutos o se repite en 24 horas, y entonces sí requiere más estudio. La punción lumbar se plantea si hay signos meníngeos, mal estado general, edad menor de 12 meses con vacunación incompleta, o antibiótico previo que pueda enmascarar.',
        'Una convulsión febril simple no es epilepsia y el riesgo de desarrollarla es solo ligeramente superior al de la población general. Sobrestudiar a estos niños genera alarma familiar desproporcionada.'
      ]
    },
    {
      t:'Epilepsia de ausencias',
      p:[
        'El síndrome epiléptico infantil que más se pasa por alto es la *epilepsia de ausencias*: episodios de desconexión de pocos segundos, muy frecuentes a lo largo del día, sin aura ni confusión posterior, en niños de edad escolar. Se confunden con distracción y con falta de atención en clase.',
        'El electroencefalograma muestra descargas generalizadas de *punta-onda a 3 Hz*, y la hiperventilación durante tres minutos suele reproducir la crisis en la propia consulta, lo que la convierte en una maniobra diagnóstica muy útil. El tratamiento de elección es la etosuximida, o el valproato si hay crisis generalizadas asociadas, y el pronóstico suele ser bueno.'
      ],
      alarma:[
        'Crisis de más de 5 minutos: estado epiléptico, se trata.',
        'Antes de etiquetar de epilepsia, descarta hipoglucemia y alteraciones electrolíticas.'
      ]
    }
  ],
  recordar:[
    'Febril *simple*: generalizada, < 15 min, única en 24 h, recuperación completa → nada de EEG ni imagen.',
    'Compleja: focal, > 15 min o repetida.',
    'No es epilepsia y el pronóstico es bueno.',
    'Ausencias: *punta-onda 3 Hz*, se reproduce con hiperventilación, etosuximida.'
  ],
  ref:'Guías de la American Academy of Pediatrics sobre convulsiones febriles; Nelson, 22.ª ed.'
},

/* ==================================================== */
'bronquiolitis': {
  tema:'Bronquiolitis',
  bloque:'Pediatría',
  min:4,
  idea:'Se trata con soporte. Casi nada de lo que se prescribe habitualmente ha demostrado servir.',
  claves:['bronquiolitis','virus respiratorio sincitial','sibilancias del lactante','soporte'],
  sigue:'asma-en-pediatria',
  secciones:[
    {
      t:'Reconocerla y tratarla',
      p:[
        'Es el primer episodio de dificultad respiratoria con sibilancias y crepitantes en un lactante, precedido de un catarro de vías altas, en temporada epidémica. El agente principal es el virus respiratorio sincitial.',
        'El tratamiento es de *soporte*: mantener la hidratación, asegurar la permeabilidad nasal con lavados, administrar oxígeno cuando la saturación lo requiere y vigilar la alimentación y el trabajo respiratorio. Ni los corticoides, ni los broncodilatadores, ni los antibióticos han demostrado modificar el curso en el primer episodio típico.',
        'La razón por la que el broncodilatador no funciona como en el asma es mecánica: la obstrucción se debe a moco, edema y detritus celulares, no a broncoespasmo. Tratarla como asma por la presencia de sibilancias es el error conceptual más común.'
      ],
      alarma:[
        'Apneas en el lactante pequeño, sobre todo prematuro: pueden ser la forma de presentación.',
        'Rechazo del alimento y trabajo respiratorio importante: criterios de ingreso.'
      ]
    }
  ],
  recordar:[
    'Primer episodio de sibilancias en el lactante, tras catarro: *bronquiolitis*.',
    'Tratamiento: *soporte*, no broncodilatador ni corticoide ni antibiótico.',
    'La obstrucción es por *moco y edema*, no por broncoespasmo.',
    'Vigilar apneas, hidratación y trabajo respiratorio.'
  ],
  ref:'Guía de la American Academy of Pediatrics sobre bronquiolitis; Nelson, 22.ª ed.'
},

/* ==================================================== */
'asma-en-pediatria': {
  tema:'Asma en pediatría',
  bloque:'Pediatría',
  min:4,
  idea:'Antes de los 5 o 6 años no hay espirometría fiable: el diagnóstico es clínico y la respuesta al tratamiento forma parte de la prueba.',
  claves:['asma infantil','sibilancias recurrentes','corticoide inhalado','cámara espaciadora'],
  sigue:'neumonia-en-pediatria',
  secciones:[
    {
      t:'Diagnosticar sin espirometría',
      p:[
        'En el preescolar el diagnóstico se apoya en el patrón clínico: episodios *recurrentes* de sibilancias, tos y disnea, con desencadenantes identificables —infecciones virales, ejercicio, alérgenos—, síntomas también entre los episodios, antecedentes personales o familiares de atopia, y respuesta favorable a una prueba terapéutica con corticoide inhalado que empeora al retirarlo.',
        'La radiografía sirve para descartar otras causas —cuerpo extraño, fibrosis quística, cardiopatía—, no para diagnosticar asma. Retrasar el tratamiento porque no se puede confirmar con espirometría es un error: en esta edad, la prueba terapéutica bien planteada es una herramienta diagnóstica legítima.',
        'El tratamiento de fondo es el *corticoide inhalado*, siempre con *cámara espaciadora*, que en el niño mejora de forma sustancial el depósito pulmonar. Revisar la técnica en cada visita vale tanto como ajustar la dosis.'
      ]
    },
    {
      t:'La crisis',
      p:[
        'El tratamiento combina oxígeno si la saturación lo requiere, salbutamol inhalado con cámara o nebulizado en tandas repetidas —añadiendo bromuro de ipratropio en las crisis graves— y *corticoide sistémico precoz*, que tarda horas en actuar y por eso darlo tarde equivale casi a no darlo.',
        'Los signos de gravedad son los mismos que en el adulto y hay que reconocerlos porque son contraintuitivos: silencio auscultatorio, bradicardia, cianosis, incapacidad para hablar o llorar, somnolencia, y una pCO2 que se normaliza en plena crisis, lo que indica agotamiento y no mejoría.'
      ],
      alarma:[
        'Silencio auscultatorio: no es que esté mejor, es que casi no ventila.',
        'Sedar a un niño en crisis asmática está contraindicado.'
      ]
    }
  ],
  recordar:[
    'Preescolar: diagnóstico *clínico* + prueba terapéutica.',
    'Corticoide inhalado *con cámara*; revisar técnica siempre.',
    'Crisis: oxígeno, salbutamol en tandas y corticoide *precoz*.',
    'Silencio auscultatorio y pCO2 normalizada = gravedad.'
  ],
  ref:'Estrategia GINA, capítulo de menores de 5 años; Nelson, 22.ª ed.'
},

/* ==================================================== */
'neumonia-en-pediatria': {
  tema:'Neumonía en pediatría',
  bloque:'Pediatría',
  min:4,
  idea:'En el lactante la mayoría son virales. La frecuencia respiratoria decide la clasificación y la amoxicilina sigue siendo el antibiótico.',
  claves:['neumonía infantil','taquipnea','amoxicilina','neumococo','virus respiratorio sincitial'],
  sigue:'infecciones-urinarias-en-pediatria',
  secciones:[
    {
      t:'Quién la causa y cómo se clasifica',
      p:[
        'En el menor de 1 año predominan claramente los *virus*, con el virus respiratorio sincitial a la cabeza. Entre las bacterias, *Streptococcus pneumoniae* es la más frecuente a cualquier edad y la que determina el tratamiento empírico. En el escolar y el adolescente cobra peso Mycoplasma, con un cuadro más subagudo, tos seca y disociación entre una radiografía llamativa y una auscultación pobre.',
        'Orientan a etiología bacteriana la fiebre alta de inicio brusco, el aspecto tóxico y la condensación lobar. La consecuencia práctica es importante: prescribir antibiótico a todo lactante con fiebre y tos trata sobre todo cuadros virales, y solo genera resistencias y efectos adversos.',
        'La clasificación operativa se apoya en la *frecuencia respiratoria*, contada durante un minuto completo y con el niño tranquilo, con los umbrales de AIEPI. Con taquipnea y sin tiraje ni signos de peligro se trata de forma ambulatoria; el tiraje subcostal o cualquier signo general de peligro indican neumonía grave y referencia.'
      ]
    },
    {
      t:'Tratamiento',
      p:[
        'En el niño previamente sano y vacunado que se trata de forma ambulatoria, el antibiótico de elección es la *amoxicilina a dosis altas*, que supera las concentraciones necesarias frente a las cepas de neumococo con sensibilidad disminuida. En el escolar con cuadro atípico se añade o se prefiere un macrólido.',
        'Las quinolonas se evitan en pediatría salvo indicaciones concretas, y las cefalosporinas de tercera generación orales amplían el espectro sin necesidad en los cuadros leves. Si no hay mejoría en 48 a 72 horas hay que reevaluar y pensar en derrame paraneumónico o empiema.'
      ],
      alarma:[
        'Deterioro o fiebre persistente a las 72 horas: busca derrame.',
        'Tiraje subcostal o signos de peligro: referencia.'
      ]
    }
  ],
  recordar:[
    'Lactante: mayoría *virales*. Bacteria más frecuente: *neumococo*.',
    'Clasificación por *frecuencia respiratoria* (60/50/40).',
    'Ambulatorio: *amoxicilina a dosis altas*.',
    'Escolar con cuadro atípico: macrólido.'
  ],
  ref:'Guías de la Pediatric Infectious Diseases Society y de la IDSA; AIEPI; Nelson, 22.ª ed.'
},

/* ==================================================== */
'infecciones-urinarias-en-pediatria': {
  tema:'Infecciones urinarias en pediatría',
  bloque:'Pediatría',
  min:4,
  idea:'La muestra mal recogida arruina el diagnóstico. Y la infección febril repetida obliga a buscar por qué se repite.',
  claves:['infección urinaria','urocultivo','reflujo vesicoureteral','sondaje','pielonefritis'],
  sigue:'diarreas',
  secciones:[
    {
      t:'Diagnosticar bien',
      p:[
        'En el lactante febril sin foco, la infección urinaria es la causa bacteriana más frecuente, y con frecuencia la fiebre es el único síntoma. Cuanto menor es el niño, más inespecífica es la presentación: irritabilidad, rechazo del alimento, vómitos, ictericia prolongada o escasa ganancia de peso.',
        'La muestra debe obtenerse por *sondaje vesical o punción suprapúbica*. La bolsa colectora tiene una tasa de contaminación muy alta: un cultivo positivo por bolsa no permite diagnosticar y lleva a tratar a niños sanos y a someterlos a estudios innecesarios, aunque un resultado negativo sí ayude a descartar.'
      ]
    },
    {
      t:'Cuándo estudiar el tracto urinario',
      p:[
        'La infección urinaria febril en el lactante suele ser una pielonefritis, y las pielonefritis repetidas dejan cicatrices renales que a largo plazo se traducen en hipertensión y enfermedad renal crónica. Por eso no basta con tratar cada episodio: hay que preguntarse por qué se repite.',
        'El estudio inicial es la *ecografía renal y vesical*. La cistouretrografía miccional, que busca el *reflujo vesicoureteral*, se indica ante ecografía alterada, infecciones febriles recurrentes o gérmenes atípicos, según el protocolo local. También hay que valorar el hábito miccional y el estreñimiento, que son causas frecuentes y corregibles de infección recurrente.'
      ],
      alarma:[
        'Cultivo positivo obtenido por bolsa: no diagnostica.',
        'Segunda infección febril: estudia el tracto urinario.'
      ]
    }
  ],
  recordar:[
    'Fiebre sin foco en el lactante: piensa en *orina*.',
    'Muestra por *sondaje o punción suprapúbica*, nunca por bolsa para cultivar.',
    'Febril = pielonefritis → riesgo de *cicatriz renal*.',
    'Recurrencia → ecografía y valorar *reflujo vesicoureteral*.'
  ],
  ref:'Guías de la American Academy of Pediatrics sobre infección urinaria en lactantes; guías NICE.'
},

/* ==================================================== */
'diarreas': {
  tema:'Diarreas',
  bloque:'Pediatría',
  min:5,
  idea:'Rehidratar, dar zinc y seguir alimentando. El antibiótico es la excepción, no la regla.',
  claves:['diarrea','sales de rehidratación','zinc','disentería','rotavirus'],
  sigue:'deshidratacion',
  secciones:[
    {
      t:'El tratamiento que sí funciona',
      p:[
        'La mayoría de las gastroenteritis agudas infantiles son *virales*, con el rotavirus a la cabeza en los no vacunados, y se resuelven solas. Lo que salva vidas es la rehidratación, no el antibiótico.',
        'Tres medidas componen el tratamiento. Las *sales de rehidratación oral* de osmolaridad reducida, que corrigen y previenen la deshidratación. El *zinc* durante 10 a 14 días en menores de 5 años, que acorta la duración, reduce el volumen de las deposiciones y disminuye la incidencia de nuevos episodios en los meses siguientes. Y *mantener la alimentación*, incluida la lactancia: el ayuno prolonga la diarrea y empeora el estado nutricional.',
        'Los antidiarreicos como la loperamida están contraindicados en niños, por riesgo de íleo, distensión y enmascaramiento de las pérdidas.'
      ]
    },
    {
      t:'Cuándo sí hay antibiótico y cuándo preocuparse',
      p:[
        'El antibiótico se reserva para situaciones concretas: disentería —sobre todo por Shigella—, cólera, amebiasis y giardiasis sintomáticas, fiebre tifoidea, y niños con sospecha de infección invasiva, inmunodeprimidos o menores de tres meses con fiebre.',
        'Un matiz importante: ante sospecha de *Escherichia coli productora de toxina Shiga*, el antibiótico puede aumentar el riesgo de síndrome hemolítico urémico, de modo que tratar toda diarrea con sangre de forma automática no es correcto.',
        'La diarrea que dura *14 días o más* se llama persistente, se asocia a desnutrición y a mayor mortalidad, y requiere un abordaje distinto, con valoración nutricional, manejo dietético específico y búsqueda de infecciones subyacentes.'
      ],
      alarma:[
        'Diarrea con sangre: no des antibiótico automáticamente; valora el riesgo de síndrome hemolítico urémico.',
        'Diarrea de 14 días o más: es persistente, cambia el abordaje.'
      ]
    }
  ],
  recordar:[
    'Base: *sales de rehidratación + zinc + seguir alimentando*.',
    'Antidiarreicos: *contraindicados* en niños.',
    'Antibiótico solo en disentería, cólera, amebiasis, giardiasis y casos seleccionados.',
    '*14 días o más* = diarrea persistente.'
  ],
  ref:'OMS/UNICEF, tratamiento clínico de la diarrea aguda; guías de la ESPGHAN.'
},

/* ==================================================== */
'deshidratacion': {
  tema:'Deshidratación',
  bloque:'Pediatría',
  min:4,
  idea:'Tres signos bastan para graduarla, y el grado decide la vía: oral casi siempre, intravenosa solo en la grave.',
  claves:['deshidratación','pliegue cutáneo','relleno capilar','plan C','sales de rehidratación'],
  sigue:'desnutricion',
  secciones:[
    {
      t:'Cómo se gradúa',
      p:[
        'El indicador más preciso del déficit es la *pérdida aguda de peso* respecto al peso previo: un 5% corresponde a deshidratación leve, un 10% a moderada y más del 10% a grave. Como ese peso previo rara vez se conoce, se recurre a los signos clínicos.',
        'Los tres de mayor rendimiento son el *relleno capilar prolongado*, el *pliegue cutáneo* que se recupera lentamente y el *patrón respiratorio anormal*. Se completan con ojos hundidos, mucosas secas, sed y estado de conciencia. La sed intensa y las mucosas secas son precoces pero poco precisas para graduar.'
      ]
    },
    {
      t:'Elegir la vía',
      p:[
        'Sin signos de deshidratación, *plan A* en casa: líquidos, zinc, alimentación y signos de alarma explicados. Con signos —sed intensa, ojos hundidos, pliegue lento, irritabilidad—, *plan B*: sales de rehidratación oral supervisadas en el servicio, en torno a 75 mL/kg en 4 horas, con reevaluación periódica.',
        'La deshidratación *grave* se define por dos o más de estos signos: letargia o inconsciencia, ojos muy hundidos, incapacidad para beber o beber muy mal, y pliegue que se recupera muy lentamente. Requiere *plan C*: hidratación intravenosa inmediata con cristaloides en bolos escalonados según la edad, con reevaluación frecuente. Si no hay acceso venoso, vía intraósea o sonda nasogástrica mientras se organiza el traslado.',
        'La vía oral es tan eficaz como la intravenosa en la deshidratación leve y moderada, más segura y más barata: recurrir a la vena por comodidad no es una mejora.'
      ],
      alarma:[
        'Letargia o incapacidad para beber: plan C, no insistas con la vía oral.',
        'Shock: reposición rápida y reevaluación continua.'
      ]
    }
  ],
  recordar:[
    'Mejor indicador: *pérdida de peso*; si no, relleno capilar, pliegue y respiración.',
    'Plan *A* casa · plan *B* oral supervisado · plan *C* intravenoso.',
    'Grave: *letargia*, no puede beber, pliegue muy lento.',
    'La vía oral basta en leve y moderada.'
  ],
  ref:'OMS/UNICEF, tratamiento de la diarrea; estrategia AIEPI.'
},

/* ==================================================== */
'desnutricion': {
  tema:'Desnutrición',
  bloque:'Pediatría',
  min:5,
  idea:'El edema clasifica como grave por sí solo. Y realimentar rápido puede matar: la lentitud aquí es tratamiento.',
  claves:['desnutrición','kwashiorkor','marasmo','perímetro braquial','realimentación'],
  sigue:'anemia-en-pediatria',
  secciones:[
    {
      t:'Aguda y crónica, marasmo y kwashiorkor',
      p:[
        'Los indicadores antropométricos distinguen dos procesos distintos. El *peso para la talla* bajo indica desnutrición *aguda* o emaciación: es reciente y potencialmente reversible con rapidez. La *talla para la edad* baja indica desnutrición *crónica* o retraso del crecimiento: refleja el efecto acumulado de años de privación e infecciones repetidas. Un niño puede tener retraso del crecimiento y un peso "adecuado para su talla" y llevar años desnutrido.',
        'Dentro de la desnutrición aguda grave, el *marasmo* es la emaciación extrema sin edema, con aspecto de piel y huesos y un niño alerta y hambriento. El *kwashiorkor* es la forma edematosa: el *edema bilateral con fóvea* es su criterio definitorio, y se acompaña de cambios en el cabello y la piel, hepatomegalia por esteatosis, apatía e irritabilidad. El edema falsea el peso y hace que el niño parezca mejor nutrido de lo que está: por eso el edema bilateral clasifica directamente como grave, sin mirar el peso.',
        'El *perímetro braquial medio* es una herramienta de cribado excelente: rápida, barata y sin necesidad de balanza, muy útil en terreno y en emergencias.'
      ]
    },
    {
      t:'El síndrome de realimentación',
      p:[
        'Al reintroducir los hidratos de carbono, la insulina se eleva y empuja *fósforo, potasio y magnesio* al interior de las células, donde se consumen para producir ATP. En un organismo con los depósitos agotados, eso provoca hipofosfatemia grave con insuficiencia cardíaca, arritmias, debilidad muscular y retención hídrica. Puede ser mortal.',
        'Se previene comenzando con un aporte calórico bajo, aumentándolo de forma progresiva, administrando tiamina y vigilando y reponiendo los electrolitos a diario en los primeros días. Alimentar con generosidad al niño desnutrido, que parece lo más lógico, es justo lo peligroso.'
      ],
      alarma:[
        'Edema bilateral: desnutrición aguda *grave*, sin discusión.',
        'Insuficiencia cardíaca tras iniciar la alimentación: síndrome de realimentación.'
      ]
    }
  ],
  recordar:[
    'Peso/talla = *aguda*. Talla/edad = *crónica*.',
    'Kwashiorkor = *edema*; marasmo = emaciación sin edema.',
    'El edema clasifica como grave *aunque el peso parezca bien*.',
    'Realimentar *despacio*, con tiamina y control de fósforo, potasio y magnesio.'
  ],
  ref:'OMS, tratamiento de la desnutrición aguda grave; UNICEF; Nelson, 22.ª ed.'
},

/* ==================================================== */
'anemia-en-pediatria': {
  tema:'Anemia en pediatría',
  bloque:'Pediatría',
  min:4,
  idea:'La ferropenia es la causa dominante, empieza mucho antes de que baje la hemoglobina y se previene con alimentación.',
  claves:['anemia ferropénica','ferritina','hierro','lactante','leche de vaca'],
  sigue:'parasitosis',
  secciones:[
    {
      t:'Por qué el lactante se queda sin hierro',
      p:[
        'El recién nacido cuenta con los depósitos acumulados durante la gestación, que se agotan hacia los 4 a 6 meses, justo cuando el crecimiento es rápido y la leche aporta poco hierro. De ahí que la anemia ferropénica sea, con diferencia, la más frecuente de la infancia.',
        'Los factores de riesgo son la prematuridad y el bajo peso al nacer —que reducen los depósitos iniciales—, la introducción precoz de *leche de vaca entera* antes del año, que además de aportar poco hierro produce microsangrado intestinal, y una alimentación complementaria pobre en hierro.',
        'La secuencia de laboratorio importa: primero baja la *ferritina*, que refleja los depósitos y es el marcador más precoz; después cae el hierro sérico y sube la capacidad de fijación; y solo al final aparece la anemia, primero normocítica y luego microcítica e hipocroma. Descartar ferropenia por una hemoglobina normal deja pasar al niño que ya tiene los depósitos vacíos y repercusión en su desarrollo.'
      ]
    },
    {
      t:'Tratar y prevenir',
      p:[
        'El hierro oral se absorbe mejor con el estómago vacío o acompañado de *vitamina C*, y peor con lácteos, té, café, fitatos y antiácidos. Conviene advertir de las molestias digestivas y del oscurecimiento de las heces, que es normal pero asusta si no se anticipa.',
        'Y una regla que evita recaídas: el tratamiento se mantiene *varios meses después* de normalizar la hemoglobina, para rellenar los depósitos. Suspenderlo en cuanto el hemograma se corrige es la causa más frecuente de recurrencia.',
        'En zonas endémicas hay que recordar la *uncinariasis*: los parásitos se fijan a la mucosa intestinal y producen pérdida crónica de sangre. Dar hierro sin desparasitar no resuelve nada.'
      ],
      alarma:[
        'Anemia que no responde al hierro: revisa el cumplimiento, la absorción y busca pérdidas o parásitos.',
        'Leche de vaca entera antes del año: no.'
      ]
    }
  ],
  recordar:[
    'Depósitos agotados hacia los *4-6 meses*.',
    'La *ferritina* baja antes que la hemoglobina.',
    'Hierro con *vitamina C*, lejos de lácteos.',
    'Mantener el tratamiento *meses después* de normalizar la hemoglobina.'
  ],
  ref:'Nelson, 22.ª ed.; OMS, prevención de la anemia ferropénica.'
},

/* ==================================================== */
'parasitosis': {
  tema:'Parasitosis',
  bloque:'Pediatría',
  min:5,
  idea:'Cada parásito produce un patrón distinto, y el fármaco depende de cuál sea: desparasitar a ciegas no siempre acierta.',
  claves:['parasitosis','giardia','amebiasis','uncinaria','oxiuros','albendazol'],
  sigue:'calculo-de-dosis',
  secciones:[
    {
      t:'Reconocer por el patrón',
      p:[
        '*Giardia lamblia* se adhiere al duodeno y al yeyuno y produce un síndrome de malabsorción: diarrea crónica con heces grasosas, distensión, flatulencia intensa y pérdida de peso, sin sangre ni fiebre porque no es invasiva. Se trata con metronidazol o tinidazol.',
        '*Entamoeba histolytica* sí es invasiva: produce disentería con moco y sangre, dolor abdominal y tenesmo, y puede complicarse con absceso hepático. Se trata con metronidazol seguido de un amebicida luminal.',
        'Las *uncinarias* penetran por la piel descalza y se fijan a la mucosa del intestino delgado, donde chupan sangre: el resultado es *anemia ferropénica* crónica con impacto en el crecimiento y el rendimiento escolar. La prevención combina calzado, saneamiento y desparasitación periódica.',
        '*Enterobius vermicularis*, el oxiuro, produce prurito anal nocturno y se diagnostica con la prueba de la cinta adhesiva; hay que tratar a toda la familia. Y *Ascaris lumbricoides* suele ser asintomático pero puede producir obstrucción intestinal y síntomas respiratorios durante su migración pulmonar.'
      ],
      foco:[
        'Anemia ferropénica en zona rural: piensa en uncinaria y desparasita, además de dar hierro.',
        'Diarrea grasosa sin sangre = giardia (metronidazol). Diarrea con sangre = ameba (metronidazol + luminal). Albendazol no cubre ninguna de las dos.'
      ]
    }
  ],
  recordar:[
    'Giardia: *esteatorrea* sin sangre → metronidazol.',
    'Ameba: *disentería* + absceso hepático.',
    'Uncinaria: *anemia ferropénica*; entra por la piel.',
    'Oxiuro: prurito anal nocturno, tratar a *toda la familia*.'
  ],
  ref:'OMS, helmintiasis transmitidas por el suelo; Nelson, 22.ª ed.'
},

/* ==================================================== */
'calculo-de-dosis': {
  tema:'Cálculo de dosis de medicamentos',
  bloque:'Pediatría',
  min:3,
  idea:'Tres pasos siempre iguales, y dos comprobaciones que evitan los errores que más daño hacen.',
  claves:['cálculo de dosis','mg/kg','jarabe','dosis pediátrica'],
  sigue:'programa-ampliado-de-inmunizaciones',
  secciones:[
    {
      t:'Los tres pasos',
      p:[
        'Primero, la *dosis diaria*: miligramos por kilo por el peso del niño. Segundo, la *dosis por toma*: dividir entre el número de tomas al día. Tercero, el *volumen*: aplicar la concentración de la presentación disponible mediante una regla de tres.',
        'Por ejemplo, amoxicilina a 50 mg/kg/día en tres tomas a un niño de 18 kg: 50 por 18 son 900 mg al día; entre 3 tomas, 300 mg por toma; y si la suspensión trae 250 mg en 5 mL, corresponden 6 mL por toma.',
        'Dos comprobaciones evitan la mayoría de los errores graves. La primera: verificar la *concentración exacta* del preparado disponible, porque el mismo fármaco se comercializa en concentraciones distintas y usar la de otra marca multiplica o divide la dosis. La segunda: comprobar que la dosis calculada no supere la dosis máxima del adulto.'
      ],
      alarma:[
        'Administrar la dosis *diaria* completa en cada toma: es uno de los errores pediátricos más frecuentes y más graves.',
        'Usar cucharas en lugar de jeringa dosificadora: el volumen es impreciso.'
      ]
    }
  ],
  recordar:[
    'Dosis diaria → dosis por toma → *volumen*.',
    'Comprueba la *concentración* de esa presentación concreta.',
    'No superar la dosis máxima del adulto.',
    'Jeringa dosificadora, no cucharas.'
  ],
  ref:'Formularios de dosificación pediátrica; Nelson, 22.ª ed.'
},

/* ==================================================== */
'programa-ampliado-de-inmunizaciones': {
  tema:'Programa Ampliado de Inmunizaciones (PAI)',
  bloque:'Pediatría',
  min:5,
  idea:'La mayoría de las contraindicaciones que se invocan son falsas, y cada aplazamiento innecesario deja a un niño sin proteger.',
  claves:['vacunas','inmunización','PAI','contraindicaciones','esquema'],
  sigue:'control-prenatal-desde-pediatria',
  secciones:[
    {
      t:'Vivas e inactivadas',
      p:[
        'La distinción que ordena casi todo es entre vacunas *vivas atenuadas* —triple viral, varicela, fiebre amarilla, BCG, rotavirus, polio oral— y el resto, que son inactivadas, de subunidades, conjugadas o toxoides.',
        'Las vivas pueden replicarse de forma descontrolada en el huésped gravemente inmunodeprimido y están contraindicadas en esa situación y en el embarazo. Las inactivadas no comparten ese riesgo: pueden administrarse, aunque la respuesta sea menor. Una medida útil en el entorno del inmunodeprimido es vacunar a los convivientes.',
        'La *BCG* merece una precisión: su beneficio demostrado es prevenir las formas graves del lactante —meningitis tuberculosa y tuberculosis miliar—, no la tuberculosis pulmonar del adulto, y por eso no elimina la enfermedad de la población.'
      ]
    },
    {
      t:'Falsas contraindicaciones y esquemas interrumpidos',
      p:[
        'No contraindican vacunar: la enfermedad leve con o sin febrícula, la diarrea, el tratamiento antibiótico en curso, la prematuridad, la lactancia, ni el antecedente familiar de reacciones. Posponer por estos motivos genera *oportunidades perdidas*, y muchas veces esos niños no regresan.',
        'Las contraindicaciones verdaderas son la anafilaxia previa a la vacuna o a alguno de sus componentes, la enfermedad aguda grave, y las vacunas vivas en la inmunodepresión grave y en el embarazo.',
        'Y una regla que ahorra pinchazos: *dosis puesta, dosis que cuenta*. Un intervalo mayor del recomendado no reduce la respuesta final, de modo que un esquema interrumpido nunca se reinicia: se continúa desde donde quedó, respetando los intervalos mínimos. Lo que sí importa es no acortar por debajo de esos mínimos.'
      ],
      alarma:[
        'Posponer "por si acaso" ante un catarro leve: oportunidad perdida.',
        'Reiniciar un esquema interrumpido: innecesario.'
      ]
    }
  ],
  recordar:[
    'Vivas atenuadas: contraindicadas en *inmunodepresión grave* y embarazo.',
    'Catarro leve, diarrea, antibiótico o prematuridad: *no* contraindican.',
    'Esquema interrumpido: se *continúa*, nunca se reinicia.',
    'BCG protege del *meníngeo y miliar* del niño.'
  ],
  ref:'Recomendaciones del ACIP; OMS, documentos de posición sobre vacunas; esquema nacional de inmunizaciones.'
},

/* ==================================================== */
'control-prenatal-desde-pediatria': {
  tema:'Control prenatal desde pediatría',
  bloque:'Pediatría',
  min:5,
  idea:'Lo que se hace antes de nacer determina buena parte de lo que el pediatra verá después. Aquí se previene, no se trata.',
  claves:['TORCH','toxoplasmosis','sífilis congénita','ácido fólico','transmisión vertical'],
  sigue:'crecimiento-y-desarrollo',
  secciones:[
    {
      t:'Las infecciones congénitas',
      p:[
        'El grupo TORCH agrupa infecciones que se transmiten al feto y que se distinguen por su patrón. La *toxoplasmosis congénita* da la tríada de coriorretinitis, hidrocefalia y calcificaciones intracraneales *difusas*. La *rubéola congénita*, la de sordera, cataratas y cardiopatía, clásicamente el ductus persistente. El *citomegalovirus* produce microcefalia con calcificaciones *periventriculares* y sordera neurosensorial, y es la causa infecciosa más frecuente de sordera congénita.',
        'La *sífilis congénita* merece atención aparte porque es enteramente prevenible: provoca aborto, muerte fetal, prematuridad y secuelas graves, y la penicilina benzatina administrada a la gestante lo evita. Es el único tratamiento eficaz para prevenirla, de modo que en la gestante alérgica se *desensibiliza* y se trata igualmente con penicilina; no hay alternativa aceptable. Debe completarse al menos 30 días antes del parto.',
        'También se previene la transmisión vertical del *VIH* con tratamiento antirretroviral, y la de la *hepatitis B* con vacuna e inmunoglobulina al recién nacido.'
      ],
      foco:[
        'Calcificaciones *difusas* = toxoplasma; *periventriculares* = citomegalovirus. Es la distinción que más se pregunta.'
      ]
    },
    {
      t:'Prevención antes de la concepción',
      p:[
        'El *ácido fólico* debe iniciarse al menos un mes antes de la concepción, porque el tubo neural se cierra hacia el día 28: cuando el embarazo se confirma, esa ventana ya se cerró. La dosis habitual es 0,4 mg al día, y sube a 4 mg en mujeres con antecedente de hijo con defecto del tubo neural.',
        'Antes del embarazo también se revisa el estado vacunal —rubéola y varicela, que son vacunas vivas y no pueden administrarse durante la gestación—, se optimiza el control de enfermedades crónicas y se ajustan los fármacos: los IECA y los ARA II son fetotóxicos y se sustituyen por alfametildopa, labetalol o nifedipino; los antiepilépticos se revisan por su teratogenicidad.',
        'Y hay que prevenir la *isoinmunización Rh*: toda gestante Rh negativa no sensibilizada recibe inmunoglobulina anti-D en la semana 28 y tras el parto si el recién nacido es Rh positivo, además de ante cualquier episodio con riesgo de paso de sangre fetal.'
      ],
      alarma:[
        'Empezar el folato en la primera consulta prenatal: para el tubo neural, ya es tarde.',
        'Sífilis en la gestante: penicilina siempre, desensibilizando si es alérgica.'
      ]
    }
  ],
  recordar:[
    'Toxoplasma: calcificaciones *difusas* + coriorretinitis + hidrocefalia.',
    'Citomegalovirus: calcificaciones *periventriculares* + sordera.',
    'Sífilis: *penicilina*, desensibilizar si hay alergia.',
    'Folato *preconcepcional*: el tubo neural cierra el día 28.',
    'Rh negativa: *anti-D* en la semana 28 y posparto.'
  ],
  ref:'Nelson, 22.ª ed., infecciones congénitas; guías de los CDC y de la OMS; boletines del ACOG.'
},

/* ==================================================== */
'crecimiento-y-desarrollo': {
  tema:'Crecimiento y desarrollo',
  bloque:'Pediatría',
  min:5,
  idea:'Los hitos no se memorizan por deporte: sirven para detectar el retraso cuando la intervención todavía cambia el resultado.',
  claves:['hitos del desarrollo','crecimiento','percentiles','velocidad de crecimiento','desarrollo psicomotor'],
  sigue:'cuadrantes-del-abdomen',
  secciones:[
    {
      t:'Los hitos y sus señales de alarma',
      p:[
        'Las referencias básicas son: sostén cefálico hacia los 3 meses, sedestación sin apoyo hacia los 6, bipedestación con apoyo y pinza hacia los 9, marcha independiente y primeras palabras con significado entre los 12 y los 15 meses, y frases de dos palabras hacia los 24.',
        'Su utilidad está en las señales de alarma: no sentarse a los 9 meses, no caminar a los 18, no decir palabras con significado a los 16 a 18 meses. Ante ellas hay que evaluar, y lo primero es descartar *hipoacusia*, que puede explicar buena parte de un retraso del lenguaje.',
        'Hay señales que apuntan específicamente al *trastorno del espectro autista* y que a los 24 meses no admiten espera: no señalar para compartir intereses, no responder de forma consistente al nombre, ausencia de lenguaje con significado y conductas repetitivas. La intervención temprana mejora los resultados a largo plazo, y esperar cierra esa ventana.'
      ]
    },
    {
      t:'Crecimiento: la pendiente, no el punto',
      p:[
        'Una talla baja *estable*, que sigue su percentil a lo largo del tiempo, suele corresponder a una variante normal: talla baja familiar o retraso constitucional del crecimiento. Lo preocupante es la *desaceleración*: el niño que cruza percentiles hacia abajo tiene una velocidad de crecimiento anormal y eso obliga a estudiar causas —hipotiroidismo, déficit de hormona de crecimiento, celiaquía, enfermedad crónica, deprivación psicosocial—.',
        'Por eso las mediciones seriadas registradas en la curva valen más que cualquier valor aislado, y por eso la curva se rellena en cada visita. También hay que vigilar el perímetro cefálico en los primeros dos años, que informa del crecimiento craneal y del neurodesarrollo.'
      ],
      alarma:[
        'Cruzar percentiles hacia abajo: estudia, no esperes.',
        'Señales de alarma del desarrollo a los 24 meses: derivación, no "cada niño lleva su ritmo".'
      ]
    }
  ],
  recordar:[
    '3 sostén cefálico · 6 sentarse · 9 pinza · 12-15 caminar y primeras palabras · 24 frases.',
    'Ante retraso del lenguaje, descarta *hipoacusia* primero.',
    'Lo que informa es la *velocidad de crecimiento*, no un punto aislado.',
    'Señales de autismo a los 24 meses: derivar ya.'
  ],
  ref:'Nelson, 22.ª ed.; OMS, patrones de crecimiento infantil; guías de la AAP sobre cribado del desarrollo.'
}

});
