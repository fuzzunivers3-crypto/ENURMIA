/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 10 (lote 2)
   Cubre FARMACOTERAPEUTICA al estandar extenso (3 secciones,
   ~200-300 palabras por seccion, min 13-14). Segunda materia del
   cuatrimestre 10 (por peso en creditos).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== FARMACOTERAPEUTICA ==================== */
'principios-farmacoterapia-racional': {
  tema:'Principios de farmacoterapia racional',
  bloque:'Farmacoterapéutica', programa:'unirm', cuatri:10, min:13,
  idea:'La Farmacología de 9no enseñó qué hace cada fármaco por separado. La Farmacoterapéutica cambia la pregunta: dado un paciente real, con sus comorbilidades y su contexto, ¿cuál es la mejor elección posible, no la más "correcta" en abstracto?',
  claves:['farmacoterapia racional','selección del fármaco','relación beneficio-riesgo'],
  sigue:'terapeutica-dolor-analgesia-escalonada',
  secciones:[
    {
      t:'De la farmacología al paciente concreto',
      p:[
        'La *farmacoterapia racional* es el proceso de seleccionar, para un paciente específico, el fármaco correcto, en la dosis correcta, por el tiempo correcto, considerando sus características individuales -edad, función renal y hepática, otras enfermedades, otros medicamentos que ya toma-, no solo el diagnóstico aislado. Esto retoma directamente el criterio de selección ya introducido en Farmacología (9no), pero lo aplica ahora a decisiones clínicas reales, con toda su complejidad.',
        'La diferencia entre saber qué hace un fármaco y saber si ese fármaco es la mejor elección para ESTE paciente es, en esencia, la diferencia entre la farmacología básica y la farmacoterapéutica: el mismo conocimiento farmacológico puede llevar a decisiones muy distintas según el contexto clínico específico.'
      ]
    },
    {
      t:'La relación beneficio-riesgo como eje de toda decisión',
      p:[
        'Ningún fármaco es completamente seguro ni completamente eficaz en todos los casos: cada decisión de prescripción implica sopesar el beneficio esperado (control de síntomas, prevención de complicaciones, mejora de la sobrevida) contra el riesgo real (efectos adversos, interacciones, costo, carga de tomar el medicamento) para ese paciente específico -un balance que puede inclinarse de forma distinta en dos pacientes con el mismo diagnóstico pero contextos diferentes.',
        'Esta relación beneficio-riesgo no es estática: cambia con la edad del paciente, la presencia de otras enfermedades, la esperanza de vida, y las preferencias del propio paciente sobre qué riesgos está dispuesto a asumir -por eso la farmacoterapia racional no es aplicar una fórmula fija, sino un ejercicio de juicio clínico caso por caso.'
      ]
    },
    {
      t:'Elegir bien, no solo elegir algo eficaz',
      p:[
        'Un error frecuente es asumir que el fármaco "más potente" o "más nuevo" es automáticamente la mejor elección: la farmacoterapia racional exige preguntar también si ese fármaco es necesario en este caso, si existe una alternativa más segura con eficacia comparable, y si el paciente realmente podrá tomarlo de forma sostenida (costo, frecuencia de dosis, efectos secundarios tolerables).',
        'Este principio conecta directamente con el uso racional de antimicrobianos ya visto en Farmacología: elegir el fármaco más específico y con menor impacto colateral posible, en vez de recurrir automáticamente a la opción de mayor espectro o mayor potencia, es una idea que se repite a lo largo de toda la farmacoterapéutica, no solo en el contexto antimicrobiano.'
      ],
      foco:[
        '*Consideración clínica*: antes de prescribir, preguntarse "¿es este fármaco realmente necesario, y es esta la mejor opción para este paciente específico?" es el hábito central que distingue la farmacoterapia racional de la prescripción automática por diagnóstico.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 1 y 65.'
},

'terapeutica-dolor-analgesia-escalonada': {
  tema:'Terapéutica del dolor y analgesia escalonada',
  bloque:'Farmacoterapéutica', programa:'unirm', cuatri:10, min:13,
  idea:'La escalera analgésica no es una lista de fármacos ordenados de menor a mayor potencia por capricho: es un algoritmo diseñado para lograr el mejor control del dolor con el menor riesgo posible, subiendo de escalón solo cuando realmente hace falta.',
  claves:['escalera analgésica','dolor agudo','dolor crónico','opioides'],
  sigue:'terapeutica-antimicrobiana-dirigida',
  secciones:[
    {
      t:'La escalera analgésica: un algoritmo, no una lista',
      p:[
        'La escalera analgésica organiza el tratamiento del dolor en niveles progresivos: el primer escalón usa analgésicos no opioides (paracetamol, AINE, ya vistos en Farmacología) para dolor leve; el segundo añade opioides débiles para dolor moderado que no responde al primer escalón; el tercero usa opioides potentes para dolor severo. La regla es subir de escalón solo cuando el nivel actual, bien utilizado, no logra un control adecuado -no empezar directamente en un escalón alto "por si acaso".',
        'Este enfoque escalonado busca precisamente evitar el uso innecesario de opioides potentes, con sus riesgos ya vistos en Farmacología (depresión respiratoria, dependencia), reservándolos para cuando el dolor realmente lo justifica.'
      ]
    },
    {
      t:'Dolor agudo vs. crónico: dos problemas distintos',
      p:[
        'El dolor agudo tiene una causa identificable y reciente (una cirugía, un trauma, un proceso inflamatorio activo), y su tratamiento se orienta a controlar el síntoma mientras la causa se resuelve; el dolor crónico persiste más allá del tiempo normal de curación esperado, y con frecuencia involucra cambios en el propio sistema nervioso que procesa el dolor, no solo la causa original -razón por la cual el dolor crónico requiere con frecuencia un abordaje multimodal, no solo analgésicos.',
        'Tratar el dolor crónico exactamente igual que el agudo -escalando opioides sin límite ante la falta de respuesta- ignora esta diferencia fundamental y expone al paciente a riesgos de dependencia sin necesariamente mejorar el control real del dolor.'
      ]
    },
    {
      t:'Opioides: eficaces, pero con un margen que exige vigilancia',
      p:[
        'Los opioides son extremadamente eficaces para el dolor severo, pero su uso requiere vigilancia activa de efectos adversos (depresión respiratoria, estreñimiento, sedación) y del riesgo de dependencia con el uso prolongado, retomando directamente lo ya visto en Farmacología sobre este grupo de fármacos.',
        'En la práctica de la terapéutica del dolor, esto se traduce en usar la dosis mínima eficaz, reevaluar periódicamente si el nivel de opioide sigue siendo necesario, y anticipar y tratar activamente los efectos adversos esperables (por ejemplo, prescribir un laxante junto con un opioide, en vez de esperar a que el estreñimiento se vuelva un problema).'
      ],
      foco:[
        '*Consideración clínica*: subir de escalón en la analgesia debe ser una decisión basada en la respuesta real del paciente al escalón actual, bien administrado, no una decisión automática por la intensidad reportada del dolor sin haber optimizado primero el nivel más bajo posible.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 31.'
},

'terapeutica-antimicrobiana-dirigida': {
  tema:'Terapéutica antimicrobiana dirigida',
  bloque:'Farmacoterapéutica', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma directamente el uso racional de antimicrobianos ya visto en Farmacología, pero con la pregunta añadida de cómo pasar, en la práctica clínica real, de un tratamiento empírico inicial a uno dirigido tan pronto como sea posible.',
  claves:['antibiograma','terapia empírica','terapia dirigida','desescalamiento antibiótico'],
  sigue:'terapeutica-cardiovascular',
  secciones:[
    {
      t:'Del empírico al dirigido: el rol del antibiograma',
      p:[
        'El *antibiograma* es el estudio que determina, en el laboratorio, a qué antibióticos específicos es sensible el germen aislado de un cultivo del paciente; una vez disponible, permite pasar de la terapia empírica (elegida antes de conocer el germen, basada en la probabilidad clínica) a la terapia dirigida (ajustada al germen y su sensibilidad real), ya introducida conceptualmente en Farmacología.',
        'El tiempo que toma obtener un antibiograma (típicamente 48 a 72 horas desde el cultivo) explica por qué la terapia empírica inicial sigue siendo necesaria en la práctica: no se puede esperar el resultado del laboratorio para empezar a tratar una infección potencialmente grave.'
      ]
    },
    {
      t:'Desescalamiento antibiótico: reducir, no solo ajustar',
      p:[
        'El *desescalamiento antibiótico* es la práctica de reducir deliberadamente el espectro (o la cantidad) de antibióticos una vez se conoce el germen causante y su sensibilidad, incluso si la terapia empírica inicial -de amplio espectro, por precaución- ya estaba dando resultado clínico favorable.',
        'Esta práctica no es un signo de duda sobre el tratamiento inicial: es la aplicación directa del uso racional de antimicrobianos ya visto en Farmacología, reduciendo la presión selectiva hacia la resistencia bacteriana tan pronto como la información disponible lo permite, sin esperar a que el paciente empeore para "justificar" mantener un espectro amplio.'
      ]
    },
    {
      t:'Cuándo la terapia empírica de amplio espectro sí se justifica',
      p:[
        'En un paciente con sospecha de infección grave y rápidamente progresiva (sepsis, por ejemplo), la terapia empírica de amplio espectro, iniciada sin demora, está justificada precisamente porque el riesgo de no cubrir al germen real supera, en ese momento crítico, el riesgo poblacional de resistencia a largo plazo -un balance de riesgo distinto al de una infección leve y no urgente, donde sí conviene ser más conservador desde el inicio.',
        'Esta distinción -amplio espectro justificado en sepsis, evitable en infecciones leves- es un ejemplo directo de cómo la farmacoterapia racional (ya vista en el primer tema de este bloque) pondera el beneficio y el riesgo según la gravedad y la urgencia real de cada caso.'
      ],
      foco:[
        '*Consideración clínica*: iniciar amplio espectro en una sepsis y desescalar tan pronto llegue el antibiograma no es contradictorio; es la secuencia correcta que equilibra la urgencia inicial con el uso racional a mediano plazo.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 51.'
},

'terapeutica-cardiovascular': {
  tema:'Terapéutica cardiovascular',
  bloque:'Farmacoterapéutica', programa:'unirm', cuatri:10, min:13,
  idea:'La hipertensión y la insuficiencia cardíaca ya se estudiaron por separado en Fisiopatología y en Farmacología; aquí la pregunta cambia a cómo combinar y ajustar fármacos reales en un paciente que, con frecuencia, tiene ambas condiciones a la vez.',
  claves:['hipertensión arterial','insuficiencia cardíaca','antihipertensivos','anticoagulación'],
  sigue:'terapeutica-diabetes-mellitus',
  secciones:[
    {
      t:'Hipertensión arterial: metas y combinación de fármacos',
      p:[
        'El tratamiento de la hipertensión arterial rara vez logra su meta con un solo fármaco a dosis máxima: la práctica clínica actual favorece combinar dos o más antihipertensivos de mecanismos complementarios (por ejemplo, un IECA con un diurético) a dosis moderadas, en vez de escalar un solo fármaco hasta su dosis máxima, porque esa combinación suele lograr mejor control con menos efectos adversos que la monoterapia a dosis alta.',
        'La elección de qué antihipertensivos combinar depende del contexto del paciente: un diabético se beneficia especialmente de un IECA o ARA-II por su efecto protector renal adicional (ya visto en Farmacología), mientras que un paciente con angina se beneficia de un betabloqueador que además controla los síntomas cardíacos.'
      ]
    },
    {
      t:'Insuficiencia cardíaca: fármacos que cambian el pronóstico',
      p:[
        'En la insuficiencia cardíaca, ciertos grupos de fármacos (IECA o ARA-II, betabloqueadores específicos, antagonistas de la aldosterona) no solo alivian síntomas, sino que han demostrado reducir la mortalidad, retomando el manejo de la insuficiencia cardíaca ya introducido en Fisiopatología: esto cambia la lógica de la prescripción, porque estos fármacos se mantienen e intensifican incluso en pacientes relativamente estables, no solo cuando hay síntomas activos.',
        'Este es un punto que sorprende a muchos estudiantes: a diferencia de un analgésico, que se usa "según haga falta", estos fármacos modificadores de la enfermedad se prescriben de forma sostenida precisamente porque su beneficio en sobrevida depende del uso continuo, no del alivio momentáneo de un síntoma.'
      ]
    },
    {
      t:'Anticoagulación: prevenir el evento antes de que ocurra',
      p:[
        'La anticoagulación se usa en varios escenarios cardiovasculares para prevenir la formación de trombos que podrían causar un ictus u otro evento embólico -por ejemplo, en la fibrilación auricular, donde la contracción auricular ineficaz favorece la formación de trombos que pueden desprenderse y viajar hacia el cerebro.',
        'La decisión de anticoagular a un paciente siempre implica sopesar el beneficio (reducción del riesgo de evento embólico) contra el riesgo de sangrado que todo anticoagulante conlleva -un ejemplo más de la relación beneficio-riesgo individualizada que atraviesa toda la farmacoterapéutica, evaluada con herramientas específicas que estiman ambos riesgos para cada paciente.'
      ],
      foco:[
        '*Consideración clínica*: en un paciente con hipertensión y diabetes simultáneas, elegir un IECA o ARA-II como antihipertensivo de base aprovecha su doble beneficio (control de presión y protección renal), un ejemplo de cómo la comorbilidad debe guiar la elección del fármaco, no solo el diagnóstico aislado.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 11-13.'
},

'terapeutica-diabetes-mellitus': {
  tema:'Terapéutica de la diabetes mellitus',
  bloque:'Farmacoterapéutica', programa:'unirm', cuatri:10, min:13,
  idea:'La metformina y la insulina ya se vieron en Farmacología; aquí la pregunta es cómo decidir, en la práctica, cuándo intensificar el tratamiento y qué meta glucémica perseguir en cada paciente específico -que no es la misma para todos.',
  claves:['hipoglucemiantes orales','insulina','metas glucémicas','diabetes tipo 2'],
  sigue:'terapeutica-respiratoria',
  secciones:[
    {
      t:'Metas glucémicas individualizadas, no un número único para todos',
      p:[
        'Las metas glucémicas en diabetes tipo 2 no son un valor fijo aplicable a cualquier paciente: un adulto joven sin complicaciones se beneficia de una meta estricta, que reduce el riesgo de complicaciones a largo plazo (retomando la nefropatía diabética ya vista en Anatomía Patológica II), mientras que un paciente anciano, frágil, con múltiples comorbilidades, puede beneficiarse de una meta más relajada, porque el riesgo de hipoglucemia (peligrosa en ese contexto) puede superar al beneficio de un control muy estricto.',
        'Esta individualización de la meta es un ejemplo directo de farmacoterapia racional: el mismo diagnóstico (diabetes tipo 2) no implica automáticamente el mismo objetivo de tratamiento para dos pacientes distintos.'
      ]
    },
    {
      t:'Escalamiento del tratamiento: de la metformina hacia la combinación',
      p:[
        'La metformina, ya vista en Farmacología como primera línea por su perfil de seguridad, se mantiene como base del tratamiento en la mayoría de los pacientes; cuando no logra la meta glucémica individualizada por sí sola, se añade un segundo fármaco (de otro grupo, con mecanismo complementario) en vez de reemplazarla, buscando el efecto combinado de ambos mecanismos.',
        'La elección del segundo fármaco no es arbitraria: en un paciente con enfermedad cardiovascular establecida, ciertos grupos de hipoglucemiantes orales han demostrado beneficio cardiovascular adicional, más allá del simple control de la glucosa -otro ejemplo de cómo las comorbilidades del paciente, no solo el nivel de glucosa, orientan la elección real del fármaco.'
      ]
    },
    {
      t:'Cuándo pasar a insulina',
      p:[
        'La insulina se añade cuando los hipoglucemiantes orales combinados, incluso a dosis adecuadas, no logran controlar la glucosa, o cuando existe una razón clínica que exige control inmediato (una descompensación aguda, una cirugía próxima, un embarazo) que no puede esperar el ajuste gradual de fármacos orales.',
        'Muchos pacientes y, con frecuencia, algunos profesionales de salud perciben el inicio de insulina como un "fracaso" del tratamiento previo, pero en realidad es simplemente el siguiente escalón lógico cuando el control glucémico lo requiere -una percepción errónea que puede retrasar innecesariamente un tratamiento que mejoraría el control real de la enfermedad.'
      ],
      foco:[
        '*Consideración clínica*: la meta glucémica correcta para un paciente concreto depende de su edad, sus comorbilidades y su riesgo de hipoglucemia, no es un número universal aplicable a cualquier diagnóstico de diabetes tipo 2.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 41.'
},

'terapeutica-respiratoria': {
  tema:'Terapéutica respiratoria',
  bloque:'Farmacoterapéutica', programa:'unirm', cuatri:10, min:13,
  idea:'El asma y la EPOC comparten fármacos (broncodilatadores, corticoides inhalados) pero se tratan con lógicas distintas: uno es una enfermedad predominantemente reversible e inflamatoria, el otro tiene un componente de daño estructural que no revierte con el tratamiento.',
  claves:['asma','EPOC','broncodilatadores','corticoides inhalados'],
  sigue:'terapeutica-gastrointestinal',
  secciones:[
    {
      t:'Asma: tratamiento escalonado según control, no según gravedad fija',
      p:[
        'El tratamiento del asma sigue un enfoque escalonado similar en lógica a la escalera analgésica: se ajusta según el nivel de control real de los síntomas del paciente (frecuencia de síntomas, uso de medicación de rescate, limitación de actividad), no según una clasificación de gravedad fija asignada una sola vez. Un paciente bien controlado puede, con el tiempo, reducir su tratamiento; uno mal controlado necesita intensificarlo.',
        'Los corticoides inhalados, retomando su mecanismo antiinflamatorio ya visto en Farmacología, son la base del tratamiento de mantenimiento en el asma persistente, porque actúan sobre la inflamación crónica subyacente de la vía aérea, no solo sobre el broncoespasmo agudo -una distinción importante frente a los broncodilatadores de rescate, que alivian el síntoma pero no tratan la inflamación de fondo.'
      ]
    },
    {
      t:'EPOC: el daño estructural cambia la meta del tratamiento',
      p:[
        'A diferencia del asma, la EPOC involucra un daño estructural del pulmón (retomando el enfisema ya visto en Anatomía Patológica II) que no revierte con el tratamiento farmacológico: la meta terapéutica no es "curar" ni revertir completamente la obstrucción, sino reducir síntomas, prevenir exacerbaciones y enlentecer el deterioro de la función pulmonar.',
        'Esta diferencia de meta -control total en el asma reversible, manejo de una condición progresiva en la EPOC- explica por qué el enfoque terapéutico, aunque comparta fármacos, no es intercambiable entre ambas enfermedades sin ajustar las expectativas clínicas reales.'
      ]
    },
    {
      t:'Broncodilatadores: alivio rápido vs. mantenimiento sostenido',
      p:[
        'Los broncodilatadores de acción corta se usan para el alivio rápido de síntomas agudos (rescate), mientras que los de acción prolongada se usan como parte del tratamiento de mantenimiento regular, tanto en asma como en EPOC -confundir estas dos funciones, usando un broncodilatador de acción corta como base del tratamiento diario, deja al paciente sin control real de la enfermedad de fondo.',
        'El uso frecuente de medicación de rescate (varias veces por semana) es, en sí mismo, una señal clínica de que el tratamiento de mantenimiento no está funcionando adecuadamente y necesita ajustarse, no una situación a normalizar simplemente aumentando la disponibilidad del inhalador de rescate.'
      ],
      foco:[
        '*Consideración clínica*: un paciente que usa su inhalador de rescate con mucha frecuencia no necesita "más rescate"; necesita una reevaluación del tratamiento de mantenimiento de fondo, sea asma o EPOC.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 20.'
},

'terapeutica-gastrointestinal': {
  tema:'Terapéutica gastrointestinal',
  bloque:'Farmacoterapéutica', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma la enfermedad ácido-péptica ya vista en Anatomía Patológica II desde el ángulo del tratamiento: cómo se usa un inhibidor de bomba de protones en la práctica real, y por qué su uso indiscriminado y prolongado no está libre de riesgo.',
  claves:['enfermedad ácido-péptica','inhibidores de bomba de protones','antieméticos'],
  sigue:'terapeutica-psiquiatrica-basica',
  secciones:[
    {
      t:'Inhibidores de bomba de protones: eficaces, pero no inocuos a largo plazo',
      p:[
        'Los inhibidores de bomba de protones son extremadamente eficaces para tratar la enfermedad ácido-péptica (gastritis, úlcera péptica, enfermedad por reflujo), al bloquear de forma potente la secreción ácida gástrica; su eficacia y su perfil de seguridad favorable a corto plazo han llevado, en la práctica clínica, a un uso extendido más allá de sus indicaciones claras y del tiempo necesario.',
        'El uso prolongado e innecesario de inhibidores de bomba de protones se ha asociado con riesgos que solo se hacen evidentes a largo plazo: mayor riesgo de ciertas infecciones intestinales, alteración de la absorción de algunos nutrientes, y posible impacto en la densidad ósea -un ejemplo directo de por qué la farmacoterapia racional exige preguntarse periódicamente si un tratamiento sigue siendo necesario, no solo si sigue siendo eficaz.'
      ]
    },
    {
      t:'Cuándo revisar y suspender, no solo cuándo iniciar',
      p:[
        'Muchos pacientes inician un inhibidor de bomba de protones por una indicación aguda clara (una úlcera activa, por ejemplo) y continúan tomándolo indefinidamente sin que nadie revise si ya cumplió su objetivo terapéutico -un ejemplo del mismo principio ya visto en prevención cuaternaria (Medicina Preventiva, 9no): a veces la mejor conducta médica es suspender un tratamiento que ya no aporta beneficio neto, no simplemente mantenerlo por inercia.',
        'Revisar periódicamente la necesidad continuada de un inhibidor de bomba de protones -y suspenderlo o reducirlo cuando ya no está indicado- es una práctica de farmacoterapia racional cada vez más reconocida, precisamente por el riesgo acumulado de su uso prolongado innecesario.'
      ]
    },
    {
      t:'Antieméticos: elegir según el mecanismo de las náuseas',
      p:[
        'Los antieméticos actúan sobre distintos mecanismos según su tipo: algunos bloquean receptores de dopamina, otros de serotonina, otros actúan sobre el sistema vestibular -elegir el antiemético correcto depende de identificar, en lo posible, cuál es el mecanismo predominante de las náuseas del paciente (por ejemplo, náuseas por quimioterapia responden mejor a un mecanismo distinto que el mareo por movimiento).',
        'Usar el mismo antiemético para cualquier causa de náuseas, sin considerar el mecanismo probable, reduce la probabilidad de un alivio efectivo -otro ejemplo de que elegir el fármaco correcto para el mecanismo correcto, y no solo para el síntoma general, es el eje de toda la farmacoterapéutica.'
      ],
      foco:[
        '*Consideración clínica*: ante un paciente que lleva años tomando un inhibidor de bomba de protones sin que nadie haya revisado si todavía lo necesita, la pregunta correcta no es "¿lo sigo recetando?" sino "¿todavía está indicado?".'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 62.'
},

'terapeutica-psiquiatrica-basica': {
  tema:'Terapéutica psiquiátrica básica',
  bloque:'Farmacoterapéutica', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma los antidepresivos, ansiolíticos y antipsicóticos ya vistos en Farmacología desde el ángulo de la adherencia real: un fármaco psiquiátrico perfectamente elegido no sirve de nada si el paciente lo abandona antes de tiempo.',
  claves:['antidepresivos','ansiolíticos','antipsicóticos','adherencia al tratamiento psiquiátrico'],
  sigue:'farmacovigilancia-reacciones-adversas',
  secciones:[
    {
      t:'La latencia del efecto: el reto central de la adherencia',
      p:[
        'Retomando la latencia del efecto antidepresivo ya vista en Farmacología (semanas, pese a que la serotonina aumenta casi de inmediato), el mayor reto práctico de la terapéutica psiquiátrica es sostener la adherencia del paciente durante ese período inicial, en el que puede haber efectos adversos tempranos pero todavía no el beneficio terapéutico completo -precisamente el momento donde más pacientes abandonan el tratamiento por su cuenta.',
        'Explicar esta latencia con claridad desde el inicio del tratamiento, antes de que el paciente experimente esa brecha entre efectos adversos tempranos y beneficio tardío, es una intervención simple que mejora directamente la adherencia real al tratamiento.'
      ]
    },
    {
      t:'Ansiolíticos: utilidad a corto plazo, riesgo si se prolonga',
      p:[
        'Los ansiolíticos, con frecuencia benzodiazepinas (ya vistas en Farmacología), son útiles para el alivio rápido de síntomas de ansiedad aguda, pero su uso prolongado conlleva riesgo de dependencia y tolerancia, por lo que la práctica recomendada es usarlos por el menor tiempo posible, como puente mientras un tratamiento de fondo (como un antidepresivo, en el caso de un trastorno de ansiedad) alcanza su efecto completo.',
        'Prescribir un ansiolítico indefinidamente, sin un plan claro de reducción o un tratamiento de fondo en marcha, expone al paciente a un riesgo acumulado de dependencia sin abordar la causa subyacente de su ansiedad.'
      ]
    },
    {
      t:'Antipsicóticos: vigilancia activa de efectos adversos metabólicos y motores',
      p:[
        'El uso de antipsicóticos, retomando su mecanismo ya visto en Farmacología, requiere vigilancia activa no solo de síntomas extrapiramidales (más frecuentes con los típicos), sino también de efectos metabólicos (aumento de peso, alteración de la glucosa y los lípidos), especialmente frecuentes con algunos antipsicóticos atípicos, que pueden pasar desapercibidos si no se buscan activamente con controles periódicos.',
        'La adherencia en el tratamiento antipsicótico de largo plazo es particularmente sensible, porque los efectos adversos (sedación, aumento de peso, síntomas motores) son con frecuencia más perceptibles día a día para el paciente que el beneficio de prevenir una recaída futura -un desafío clínico que exige explicar el balance de riesgo-beneficio de forma explícita y repetida, no asumir que el paciente lo entiende y lo acepta automáticamente.'
      ],
      foco:[
        '*Consideración clínica*: un fármaco psiquiátrico bien elegido, pero abandonado por el paciente antes de que haga efecto, tiene el mismo resultado clínico que no haberlo prescrito -la adherencia no es un detalle secundario, es parte central del éxito del tratamiento.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 29-30.'
},

'farmacovigilancia-reacciones-adversas': {
  tema:'Farmacovigilancia y reacciones adversas',
  bloque:'Farmacoterapéutica', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma la farmacovigilancia ya vista en Farmacología, pero desde el rol activo que tiene cada médico prescriptor: no basta con saber que existe un sistema de notificación, hay que usarlo activamente cuando corresponde.',
  claves:['farmacovigilancia','reacción adversa a medicamento','notificación espontánea'],
  sigue:'interacciones-medicamentosas-relevantes',
  secciones:[
    {
      t:'La notificación espontánea: el motor de la farmacovigilancia real',
      p:[
        'La *notificación espontánea* es el mecanismo por el cual un profesional de salud reporta una sospecha de reacción adversa a un medicamento al sistema de farmacovigilancia correspondiente, sin necesidad de que exista una investigación formal previa; es, en la práctica, la fuente más importante de datos de seguridad de un fármaco después de su comercialización, complementando lo ya visto sobre las limitaciones de los ensayos clínicos previos a la aprobación.',
        'Muchos profesionales asumen erróneamente que solo deben notificar reacciones adversas graves o completamente nuevas, cuando en realidad el sistema depende de que se reporten también reacciones ya conocidas, para poder estimar con precisión su frecuencia real en la práctica clínica más amplia -retomando directamente lo ya visto en Farmacología sobre este punto.'
      ]
    },
    {
      t:'Reconocer una reacción adversa entre otras posibles causas',
      p:[
        'Identificar que un síntoma nuevo en un paciente es, en realidad, una reacción adversa a un medicamento -y no una manifestación de su enfermedad de base, o una condición completamente nueva- requiere mantener siempre presente la posibilidad farmacológica al evaluar cualquier síntoma nuevo, especialmente si apareció después de iniciar o cambiar un tratamiento.',
        'Esta sospecha activa es particularmente relevante en pacientes polimedicados, donde un síntoma nuevo tiene múltiples explicaciones posibles compitiendo entre sí, y la reacción adversa puede quedar oculta entre las demás posibilidades si no se considera explícitamente.'
      ]
    },
    {
      t:'De la sospecha individual al patrón poblacional',
      p:[
        'Una sola notificación de reacción adversa, aislada, puede no significar mucho -podría ser coincidencia-, pero cuando muchos profesionales notifican de forma independiente una reacción similar asociada al mismo fármaco, ese patrón acumulado puede revelar un riesgo real que ningún ensayo clínico individual había detectado antes de la comercialización.',
        'Este es, en esencia, el mismo argumento ya usado en Farmacología para justificar por qué la notificación de reacciones adversas "ya conocidas" también tiene valor: cada notificación individual contribuye a un patrón poblacional que, acumulado, es mucho más informativo que cualquier caso aislado.'
      ],
      foco:[
        '*Consideración clínica*: la farmacovigilancia efectiva depende de que cada médico notifique de forma sistemática, no solo cuando sospecha algo "raro" o completamente nuevo -el patrón poblacional se construye con la suma de reportes individuales, incluidos los aparentemente ordinarios.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 5.'
},

'interacciones-medicamentosas-relevantes': {
  tema:'Interacciones medicamentosas clínicamente relevantes',
  bloque:'Farmacoterapéutica', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma las interacciones farmacológicas ya vistas en Farmacología, pero aplicadas al reto real de la polifarmacia: revisar sistemáticamente la lista completa de medicamentos de un paciente, no solo el fármaco que se está a punto de agregar.',
  claves:['interacción farmacológica grave','polifarmacia','revisión de medicación'],
  sigue:'ajuste-dosis-insuficiencia-renal-hepatica',
  secciones:[
    {
      t:'Por qué revisar toda la lista, no solo el fármaco nuevo',
      p:[
        'Cuando se agrega un fármaco nuevo a un paciente que ya toma varios medicamentos, el riesgo de interacción no depende solo de ese fármaco nuevo con cada uno de los existentes por separado, sino también de combinaciones más complejas entre varios fármacos a la vez -razón por la cual una *revisión de medicación* completa y sistemática, no una revisión superficial del fármaco recién agregado, es la práctica recomendada.',
        'Esta revisión sistemática debe repetirse periódicamente, no solo al momento de agregar un fármaco nuevo, porque la situación clínica del paciente cambia con el tiempo (nueva función renal, nueva comorbilidad) y una combinación que era segura antes puede volverse riesgosa después.'
      ]
    },
    {
      t:'Interacciones farmacológicas graves: reconocer las que sí importan',
      p:[
        'No todas las interacciones farmacológicas tienen la misma relevancia clínica: algunas son teóricas o de impacto mínimo, mientras que otras son *interacciones farmacológicas graves*, capaces de causar toxicidad significativa o pérdida completa de eficacia de un tratamiento importante -distinguir cuáles interacciones realmente importan, entre la enorme cantidad de interacciones posibles en un paciente polimedicado, es una habilidad clínica central.',
        'Un ejemplo clásico es la combinación de un inhibidor enzimático potente con un fármaco de margen terapéutico estrecho (donde la diferencia entre dosis eficaz y dosis tóxica es pequeña): en ese contexto, incluso un aumento moderado en la concentración del segundo fármaco, causado por la inhibición enzimática, puede tener consecuencias clínicas serias.'
      ]
    },
    {
      t:'Polifarmacia: el contexto que multiplica el riesgo',
      p:[
        'La *polifarmacia* -el uso simultáneo de múltiples medicamentos, frecuente en pacientes de edad avanzada con varias comorbilidades- no es en sí misma incorrecta cuando cada fármaco está justificado, pero multiplica exponencialmente el número de combinaciones posibles de interacción, retomando directamente lo ya visto en Farmacología sobre este crecimiento no lineal del riesgo.',
        'En un paciente polimedicado, cada visita clínica es una oportunidad para preguntar explícitamente si cada fármaco de la lista sigue siendo necesario, no solo para agregar uno nuevo -reducir la lista, cuando es clínicamente apropiado, es tan parte de la farmacoterapia racional como elegir bien un fármaco nuevo.'
      ],
      foco:[
        '*Consideración clínica*: antes de agregar cualquier fármaco nuevo a un paciente polimedicado, revisar la lista completa de medicación (no solo comparar el fármaco nuevo contra cada uno por separado) es el paso que con más frecuencia se omite, y el que más interacciones graves previene.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 66.'
},

'ajuste-dosis-insuficiencia-renal-hepatica': {
  tema:'Ajuste de dosis en insuficiencia renal y hepática',
  bloque:'Farmacoterapéutica', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma directamente el riesgo de acumulación por eliminación renal disminuida ya visto en Farmacología, pero aquí se convierte en un cálculo práctico: cuánto reducir la dosis, o cada cuánto espaciarla, para un paciente concreto.',
  claves:['ajuste de dosis','depuración de creatinina','insuficiencia hepática'],
  sigue:'farmacoterapia-embarazo-lactancia',
  secciones:[
    {
      t:'Ajuste renal: estimar la función antes de decidir la dosis',
      p:[
        'La *depuración de creatinina* (o una estimación equivalente de la tasa de filtración glomerular) es el dato central para decidir cómo ajustar la dosis de un fármaco de eliminación predominantemente renal en un paciente con función renal disminuida: en general, se puede reducir la dosis administrada, aumentar el intervalo entre dosis, o ambas estrategias combinadas, según las características específicas del fármaco.',
        'Este cálculo no es opcional en un paciente con insuficiencia renal conocida: administrar la dosis estándar sin ajuste, en un fármaco de eliminación renal, repite exactamente el riesgo de acumulación tóxica ya explicado conceptualmente en Farmacología, ahora convertido en un cálculo clínico concreto que debe hacerse antes de prescribir.'
      ]
    },
    {
      t:'Ajuste hepático: más difícil de cuantificar, igual de importante',
      p:[
        'La *insuficiencia hepática* también requiere ajuste de dosis para fármacos que dependen del metabolismo hepático para su eliminación, pero a diferencia de la función renal (que se estima con relativa precisión mediante la depuración de creatinina), la función hepática es más difícil de cuantificar de forma numérica precisa, así que el ajuste en insuficiencia hepática se basa con frecuencia en criterio clínico y en escalas de severidad, más que en una fórmula exacta.',
        'Esta diferencia práctica -ajuste renal más cuantificable, ajuste hepático más basado en criterio clínico- no significa que el ajuste hepático sea menos importante; significa que exige un juicio clínico más cuidadoso, prestando atención a signos de disfunción hepática avanzada (ictericia, ascitis, alteración de la coagulación) que orientan la magnitud del ajuste necesario.'
      ]
    },
    {
      t:'Cuando ambos órganos están comprometidos',
      p:[
        'En un paciente con compromiso simultáneo de la función renal y hepática -un escenario no infrecuente en enfermedad avanzada-, el ajuste de dosis se vuelve considerablemente más complejo, porque un fármaco que normalmente se elimina en parte por cada vía puede acumularse de forma impredecible si ambas rutas de eliminación están comprometidas a la vez.',
        'En estos casos, la recomendación general es preferir fármacos con menor dependencia de ambas vías de eliminación, cuando existan alternativas terapéuticamente equivalentes, y vigilar clínicamente al paciente de forma más estrecha que en un paciente con compromiso de un solo órgano.'
      ],
      foco:[
        '*Consideración clínica*: nunca asumir que la dosis estándar de un fármaco es segura en un paciente con insuficiencia renal o hepática conocida, sin verificar antes su vía principal de eliminación y calcular el ajuste correspondiente.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 3-4.'
},

'farmacoterapia-embarazo-lactancia': {
  tema:'Farmacoterapia en el embarazo y la lactancia',
  bloque:'Farmacoterapéutica', programa:'unirm', cuatri:10, min:13,
  idea:'Cierra el bloque de Farmacoterapéutica con el escenario donde la relación beneficio-riesgo, tema central de todo el bloque, se complica al máximo: cada decisión afecta potencialmente a dos personas a la vez, no solo a quien recibe el fármaco directamente.',
  claves:['categoría de riesgo en el embarazo','fármacos seguros en lactancia','teratogenicidad'],
  sigue:'principios-medicina-familiar',
  secciones:[
    {
      t:'Teratogenicidad: el momento del embarazo importa tanto como el fármaco',
      p:[
        'La *teratogenicidad* (capacidad de un fármaco de causar malformaciones congénitas) no es un riesgo fijo e idéntico durante todo el embarazo: el primer trimestre, cuando se forman los órganos del embrión (organogénesis, ya vista en Embriología), es el período de mayor vulnerabilidad a los efectos teratogénicos, mientras que el mismo fármaco puede tener un perfil de riesgo distinto en etapas más avanzadas del embarazo.',
        'Esto tiene una implicación práctica importante: la seguridad de un fármaco en el embarazo no puede evaluarse como una pregunta de sí o no genérica, sino que depende de en qué momento específico del embarazo se administraría, y de si existe una alternativa más segura para esa misma indicación en ese trimestre concreto.'
      ]
    },
    {
      t:'Categorías de riesgo: una guía, no una certeza absoluta',
      p:[
        'La *categoría de riesgo en el embarazo* de un fármaco resume, de forma simplificada, la evidencia disponible sobre su seguridad durante la gestación, pero esta categorización tiene limitaciones importantes: la evidencia en humanos durante el embarazo es, por razones éticas obvias, mucho más limitada que para la población general, así que muchas categorías se basan en evidencia indirecta o en estudios en animales, no en ensayos clínicos controlados en mujeres embarazadas.',
        'Esta limitación de la evidencia no significa que todos los fármacos sean igual de riesgosos: hay fármacos con un perfil de seguridad bien establecido y ampliamente usado durante el embarazo, y otros con teratogenicidad claramente demostrada que deben evitarse activamente -el punto es no confundir "poca evidencia directa" con "seguro" ni con "peligroso" sin verificar el perfil específico de cada fármaco.'
      ]
    },
    {
      t:'Lactancia: un cálculo distinto al del embarazo',
      p:[
        'La seguridad de un fármaco durante la lactancia depende de un cálculo distinto al del embarazo: qué proporción del fármaco pasa a la leche materna, y qué efecto tendría esa cantidad, generalmente pequeña, sobre el lactante -muchos fármacos considerados de riesgo durante el embarazo son, en cambio, relativamente seguros durante la lactancia, precisamente porque el mecanismo de exposición y la dosis que recibe el bebé son muy distintos.',
        'Esta distinción es clínicamente relevante porque, con frecuencia, se suspende innecesariamente la lactancia por precaución excesiva ante un fármaco que en realidad tiene un perfil de seguridad aceptable durante esta etapa, privando al bebé de los beneficios ya conocidos de la lactancia materna sin un beneficio real de seguridad a cambio.'
      ],
      foco:[
        'Este tema cierra el bloque de Farmacoterapéutica retomando su idea central desde el inicio: la relación beneficio-riesgo nunca es genérica, depende siempre del paciente concreto -y en el embarazo y la lactancia, de dos personas a la vez, cada una con su propio perfil de riesgo específico.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 59.'
}

});
