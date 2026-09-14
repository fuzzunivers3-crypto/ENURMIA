/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9
   Puente a clinica, pensum MED-R1-2014.

   Diferencia con el 7 y el 8: aqui el caso clinico vuelve a tener
   sentido en Semiologia, Fisiopatologia, Farmacologia y Anatomia
   Patologica, porque ya se pregunta razonamiento, no solo
   estructura. En Medicina Preventiva, Soporte Vital, Relacion
   Medico-Paciente y Salud y Comunidad se pregunta por protocolo
   y por criterio.

   Mismo estandar que los cuatrimestres anteriores: dato clave,
   por que falla cada opcion, la trampa, y de que libro sale.

   `esp` es la ASIGNATURA. Primer lote: 32 preguntas repartidas
   por peso en creditos.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== SEMIOLOGIA CLINICA ===================== */
{
  id:'U9-SC-Q01', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología respiratoria', sub:'Matidez a la percusión',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente refiere fiebre y dolor en el costado derecho al respirar. A la exploración se encuentra matidez a la percusión en la base pulmonar derecha, disminución del murmullo vesicular y aumento de las vibraciones vocales en esa zona.',
  enunciado:'¿Qué hallazgo es el que mejor distingue un proceso de consolidación pulmonar (como una neumonía) de un derrame pleural?',
  ops:[
    'La matidez a la percusión, presente en ambos',
    'El aumento de las vibraciones vocales, que está presente en la consolidación y abolido en el derrame',
    'La fiebre, que solo aparece en la consolidación',
    'La disminución del murmullo vesicular, que solo ocurre en el derrame'
  ],
  ok:1,
  clave:'Vibraciones vocales aumentadas orientan a consolidación; abolidas orientan a derrame.',
  exp:'Tanto la consolidación (el alvéolo se llena de exudado en vez de aire) como el derrame pleural (líquido entre las pleuras) dan matidez a la percusión y disminución del murmullo vesicular, porque en los dos casos el aire deja de llegar bien al oído. Lo que las separa es la vibración vocal: el tejido consolidado sigue siendo sólido y conduce el sonido de la voz mejor que el pulmón aireado, así que las vibraciones se palpan aumentadas. El líquido pleural, en cambio, amortigua esa vibración antes de que llegue a la pared torácica, así que se palpan abolidas.',
  no:{
    0:'La matidez por sí sola no distingue nada porque aparece en ambos cuadros; hay que combinarla con las vibraciones vocales.',
    2:'La fiebre es inespecífica: puede acompañar a una neumonía, pero también a un derrame paraneumónico o empiema.',
    3:'El murmullo vesicular disminuye en los dos casos, así que tampoco sirve para diferenciarlos por sí solo.'
  },
  trampa:'Buscar un solo signo "distintivo" en vez de combinar hallazgos. La semiología torácica se interpreta en conjunto: percusión, vibraciones vocales y auscultación juntas.',
  obj:'Diferenciar consolidación de derrame pleural por semiología, sin depender de imagen.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria.',
  tags:['matidez','vibraciones vocales','consolidación','derrame pleural']
},
{
  id:'U9-SC-Q02', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología cardiovascular', sub:'Ingurgitación yugular',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'La ingurgitación yugular visible con el paciente sentado a 45 grados refleja principalmente el aumento de presión en:',
  ops:[
    'La aurícula izquierda',
    'La aurícula derecha',
    'La arteria pulmonar',
    'El ventrículo izquierdo'
  ],
  ok:1,
  clave:'La vena yugular interna se comunica sin válvulas con la aurícula derecha.',
  exp:'La vena yugular interna drena directamente en la vena cava superior y de ahí a la aurícula derecha, sin ninguna válvula que interrumpa la columna de presión. Por eso la altura de la columna venosa yugular, medida en centímetros por encima del ángulo esternal con el paciente a 45 grados, es un reflejo directo y confiable de la presión venosa central, que a su vez refleja la presión de llenado de la aurícula derecha. Se eleva en la insuficiencia cardíaca derecha, el taponamiento pericárdico y la sobrecarga de volumen.',
  no:{
    0:'La presión de la aurícula izquierda se estima con otros signos, como los estertores pulmonares, no con la yugular.',
    2:'La presión de la arteria pulmonar no se explora al pie de cama con la vena yugular.',
    3:'El ventrículo izquierdo está separado de la circulación venosa sistémica por dos cavidades y dos válvulas; no hay relación directa.'
  },
  trampa:'Confundir "vena" con "lado izquierdo del corazón" por analogía con la circulación pulmonar. El sistema venoso sistémico drena siempre al lado derecho.',
  obj:'Relacionar la ingurgitación yugular con la presión de la aurícula derecha.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria.',
  tags:['ingurgitación yugular','presión venosa central','aurícula derecha']
},
{
  id:'U9-SC-Q03', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología abdominal', sub:'Signo de rebote',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un joven de 19 años consulta por dolor abdominal que comenzó difuso alrededor del ombligo y en las últimas horas se localizó en la fosa ilíaca derecha. Al palpar esa zona y retirar bruscamente la mano, el dolor se intensifica notablemente.',
  enunciado:'¿Qué significa ese hallazgo (signo de Blumberg positivo) y qué proceso sugiere junto con el resto del cuadro?',
  ops:[
    'Indica distensión de asas intestinales por gas, típica de una obstrucción',
    'Indica irritación peritoneal, compatible con apendicitis aguda',
    'Indica espasmo de la vesícula biliar',
    'Indica solamente dolor muscular de la pared abdominal'
  ],
  ok:1,
  clave:'El dolor a la descompresión brusca es signo de irritación peritoneal.',
  exp:'El signo de Blumberg (dolor a la descompresión) aparece porque el peritoneo parietal inflamado se estira al soltar la presión, generando un dolor más agudo que el de la compresión misma. La migración del dolor periumbilical hacia la fosa ilíaca derecha es la secuencia clásica de la apendicitis: primero dolor visceral difuso por distensión del apéndice, luego dolor somático localizado cuando la inflamación alcanza el peritoneo parietal adyacente. Esa combinación de migración más signo de rebote es lo que orienta el diagnóstico antes de cualquier estudio de imagen.',
  no:{
    0:'La distensión por gas da un dolor cólico difuso, no un signo de rebote localizado en fosa ilíaca derecha.',
    2:'El espasmo vesicular da signo de Murphy en el hipocondrio derecho, no en la fosa ilíaca.',
    3:'El dolor muscular de pared no empeora característicamente con la descompresión brusca ni sigue el patrón migratorio descrito.'
  },
  trampa:'Pensar el signo de rebote como "dolor a la palpación" sin más. Lo que lo hace positivo es que el dolor de SOLTAR sea mayor que el de apretar: eso es lo que delata al peritoneo.',
  obj:'Reconocer la secuencia clínica y el signo exploratorio de la irritación peritoneal.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria.',
  tags:['signo de Blumberg','irritación peritoneal','apendicitis','dolor migratorio']
},
{
  id:'U9-SC-Q04', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología neurológica básica', sub:'Signo de Babinski',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Un signo de Babinski positivo (extensión del primer dedo del pie al estimular el borde externo de la planta) en un adulto indica:',
  ops:[
    'Lesión de neurona motora inferior',
    'Lesión de la vía piramidal (neurona motora superior)',
    'Lesión del nervio periférico ciático',
    'Un hallazgo normal sin ningún significado'
  ],
  ok:1,
  clave:'El Babinski positivo en el adulto es signo de lesión de la vía piramidal.',
  exp:'El reflejo cutáneo plantar normal en el adulto es la flexión de los dedos. Cuando la vía corticoespinal (piramidal) está lesionada, se pierde la inhibición que esa vía ejerce sobre un reflejo primitivo de retirada, y aparece en su lugar la extensión del primer dedo con apertura en abanico de los demás: eso es el signo de Babinski. Es normal solo en el lactante, porque su vía piramidal todavía no está mielinizada; en el adulto siempre traduce daño de neurona motora superior, ya sea central (encefálico o medular) por debajo del nivel de la lesión.',
  no:{
    0:'La lesión de neurona motora inferior da hiporreflexia y atrofia muscular, no Babinski positivo; el reflejo plantar se mantiene flexor o está ausente.',
    2:'Una lesión aislada del nervio ciático (periférico) no libera el reflejo piramidal, porque ese reflejo depende de la vía central, no del nervio explorado.',
    3:'En el adulto no es un hallazgo normal; sí lo es en el lactante hasta que mieliniza la vía piramidal, típicamente antes de los dos años.'
  },
  trampa:'Olvidar que la interpretación depende de la edad: el mismo signo es normal en el lactante y patológico en el adulto.',
  obj:'Interpretar el signo de Babinski como marcador de lesión de neurona motora superior.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria.',
  tags:['Babinski','neurona motora superior','vía piramidal','reflejo plantar']
},
{
  id:'U9-SC-Q05', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Historia clínica: anamnesis', sub:'Enfermedad actual',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Dentro de la historia clínica, ¿qué diferencia principal hay entre el "motivo de consulta" y la "enfermedad actual"?',
  ops:[
    'Son lo mismo, solo cambia el nombre según el hospital',
    'El motivo de consulta es la razón inicial referida por el paciente, casi siempre en sus propias palabras; la enfermedad actual es el desarrollo cronológico y detallado de esa razón',
    'El motivo de consulta lo escribe el médico y la enfermedad actual la escribe el paciente',
    'La enfermedad actual incluye solo los antecedentes patológicos'
  ],
  ok:1,
  clave:'Motivo de consulta = síntoma guía; enfermedad actual = su desarrollo cronológico completo.',
  exp:'El motivo de consulta es breve, casi siempre una frase corta con las palabras del propio paciente ("dolor de pecho desde ayer"), y funciona como el título de la historia. La enfermedad actual es la narración ordenada en el tiempo de ese síntoma: cuándo empezó, cómo evolucionó, qué lo alivia o lo agrava, síntomas asociados, y todo lo relevante hasta el momento de la consulta. Un motivo de consulta mal delimitado suele producir una enfermedad actual desordenada, porque no queda claro qué historia hay que contar.',
  no:{
    0:'No son lo mismo: uno es el encabezado breve y el otro es el desarrollo detallado; confundirlos hace perder estructura a la historia.',
    2:'Ambos apartados los redacta el médico a partir de lo que refiere el paciente; la autoría no es lo que los distingue.',
    3:'Los antecedentes patológicos son un apartado aparte de la historia clínica, distinto tanto del motivo de consulta como de la enfermedad actual.'
  },
  trampa:'Tratar estos dos apartados como sinónimos intercambiables cuando en realidad tienen función distinta dentro de la estructura de la historia.',
  obj:'Distinguir la función de cada apartado inicial de la historia clínica.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria.',
  tags:['anamnesis','motivo de consulta','enfermedad actual','historia clínica']
},
{
  id:'U9-SC-Q06', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología osteoarticular', sub:'Derrame articular',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente refiere aumento de volumen en la rodilla tras un golpe, con dificultad para flexionarla. A la exploración, al presionar la rótula con los dedos y empujarla hacia el fémur, esta rebota y vuelve a su posición.',
  enunciado:'¿Cómo se llama ese signo y qué indica?',
  ops:[
    'Signo del cajón anterior; indica lesión del ligamento cruzado anterior',
    'Signo del choque rotuliano; indica derrame articular (líquido en la cavidad de la rodilla)',
    'Signo de Lachman; indica lesión meniscal',
    'Signo de Tinel; indica compresión de un nervio periférico'
  ],
  ok:1,
  clave:'El choque rotuliano positivo traduce líquido dentro de la articulación de la rodilla.',
  exp:'El signo del choque o tecleo rotuliano se explora comprimiendo la rótula contra el fémur: si hay líquido acumulado en la cavidad articular (sangre, sinovial inflamatoria o pus), la rótula "flota" sobre ese líquido y al empujarla choca contra el fémur y rebota, lo que se siente como un tecleo. Es el signo clásico para detectar derrame articular de rodilla al examen físico, independientemente de su causa exacta (traumática, inflamatoria o infecciosa).',
  no:{
    0:'El cajón anterior se explora traccionando la tibia hacia delante con la rodilla flexionada, y evalúa la integridad del ligamento cruzado anterior, no el líquido articular.',
    2:'El test de Lachman también evalúa el cruzado anterior, no el menisco ni el derrame.',
    3:'El signo de Tinel se usa para nervios periféricos comprimidos, como en el síndrome del túnel del carpo; no tiene relación con la rodilla en este contexto.'
  },
  trampa:'Confundir los distintos signos exploratorios de la rodilla porque todos se buscan con maniobras manuales parecidas. Cada uno evalúa una estructura distinta: ligamento, menisco o líquido.',
  obj:'Identificar el signo exploratorio de derrame articular de rodilla.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria.',
  tags:['choque rotuliano','derrame articular','rodilla','signo exploratorio']
},

/* ===================== ANATOMIA PATOLOGICA I ===================== */
{
  id:'U9-AP-Q01', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Necrosis: tipos', sub:'Necrosis caseosa',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'La necrosis caseosa, con aspecto macroscópico de "queso" blando y friable, es característica de:',
  ops:[
    'El infarto renal',
    'La tuberculosis y otras infecciones granulomatosas',
    'La necrosis grasa del páncreas',
    'El infarto cerebral'
  ],
  ok:1,
  clave:'La necrosis caseosa es la forma típica de los granulomas tuberculosos.',
  exp:'La necrosis caseosa combina rasgos de la coagulativa y la licuefactiva: el tejido pierde su arquitectura pero no se licúa del todo, quedando un material amorfo, granular, de aspecto blanquecino parecido al queso, visible sobre todo en el centro de los granulomas causados por Mycobacterium tuberculosis (y otras infecciones granulomatosas como algunas micosis profundas). Microscópicamente se ve como detritos eosinófilos granulares rodeados por un halo inflamatorio de células epitelioides, células gigantes multinucleadas y linfocitos.',
  no:{
    0:'El infarto renal (isquémico) da necrosis coagulativa, que preserva la arquitectura del tejido como una "sombra" del órgano original.',
    2:'La necrosis grasa del páncreas es un tipo aparte (necrosis grasa enzimática o traumática), con formación de jabones de calcio, no de material caseoso.',
    3:'El infarto cerebral da típicamente necrosis licuefactiva, porque el tejido nervioso tiene poco estroma de sostén y se disuelve en una cavidad quística.'
  },
  trampa:'Asociar "necrosis" con un solo patrón microscópico. Cada tejido y cada causa produce un patrón distinto, y ese patrón es justamente lo que orienta el diagnóstico.',
  obj:'Reconocer la necrosis caseosa como marcador morfológico de tuberculosis.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional.',
  tags:['necrosis caseosa','tuberculosis','granuloma']
},
{
  id:'U9-AP-Q02', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Inflamación aguda', sub:'Secuencia vascular',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'En la inflamación aguda, ¿cuál es la secuencia correcta de los cambios vasculares tras la lesión?',
  ops:[
    'Vasoconstricción sostenida, seguida de disminución del flujo sanguíneo',
    'Vasoconstricción transitoria breve, seguida de vasodilatación y aumento de la permeabilidad vascular',
    'Vasodilatación inmediata que nunca revierte',
    'No hay cambios vasculares en la inflamación aguda, solo celulares'
  ],
  ok:1,
  clave:'Vasoconstricción breve, luego vasodilatación con enlentecimiento del flujo y fuga de líquido.',
  exp:'Tras la lesión hay primero una vasoconstricción arteriolar transitoria, de segundos, mediada por reflejo neurogénico. Le sigue la vasodilatación, mediada por histamina y otros mediadores, que aumenta el flujo sanguíneo local (de ahí el calor y el rubor) y hace más lento el flujo en los vasos pequeños. Al mismo tiempo aumenta la permeabilidad de la microvasculatura, sobre todo de las vénulas poscapilares, lo que permite la salida de líquido rico en proteínas hacia el intersticio: eso es el edema inflamatorio (tumor). Esa combinación de enlentecimiento del flujo y salida de líquido concentra los eritrocitos y favorece que los leucocitos se marginen hacia la pared del vaso, paso previo a su salida al tejido.',
  no:{
    0:'La vasoconstricción no es sostenida: es breve y le sigue la vasodilatación, que es el cambio predominante y más prolongado.',
    2:'La vasodilatación sí puede revertir, y de hecho el proceso completo (vasoconstricción, vasodilatación, aumento de permeabilidad) es una secuencia, no un estado fijo.',
    3:'Los cambios vasculares son el primer evento de la inflamación aguda, previos y necesarios para que los cambios celulares (migración leucocitaria) puedan ocurrir.'
  },
  trampa:'Saltarse la fase de vasoconstricción inicial por ser tan breve, y empezar la secuencia directamente en la vasodilatación.',
  obj:'Ordenar cronológicamente los cambios vasculares de la inflamación aguda.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional.',
  tags:['inflamación aguda','vasodilatación','permeabilidad vascular']
},
{
  id:'U9-AP-Q03', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Alteraciones hemodinámicas: trombosis y embolia', sub:'Tríada de Virchow',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer de 45 años, obesa, con reposo prolongado en cama tras una cirugía ortopédica, desarrolla dolor y aumento de volumen en la pantorrilla izquierda, con la piel caliente y enrojecida sobre el trayecto venoso.',
  enunciado:'¿Cuáles son los tres factores de la tríada de Virchow que explican el riesgo de trombosis en este caso, y cuál predomina aquí?',
  ops:[
    'Hipercoagulabilidad, estasis del flujo sanguíneo y lesión endotelial; aquí predomina la estasis por el reposo prolongado',
    'Hipertensión, hiperlipidemia y tabaquismo; predomina el tabaquismo',
    'Anemia, leucocitosis y trombocitopenia; predomina la anemia',
    'Fiebre, taquicardia e hipotensión; predomina la fiebre'
  ],
  ok:0,
  clave:'La tríada de Virchow es estasis, hipercoagulabilidad y lesión endotelial.',
  exp:'La tríada de Virchow describe los tres mecanismos que favorecen la formación de un trombo: la estasis o enlentecimiento del flujo sanguíneo (que evita que los factores de coagulación activados se diluyan y se aclaren), la hipercoagulabilidad (estados que favorecen la coagulación, como el postoperatorio, el embarazo o ciertas trombofilias) y la lesión del endotelio vascular (que expone factor tisular y colágeno subendotelial). En este caso, el reposo prolongado tras cirugía es el factor predominante de estasis venosa, aunque la cirugía misma también aporta cierto grado de lesión endotelial e hipercoagulabilidad reactiva, por eso el postoperatorio es un escenario clásico de trombosis venosa profunda.',
  no:{
    1:'Esos son factores de riesgo cardiovascular para aterosclerosis, no la tríada fisiopatológica de la trombosis venosa.',
    2:'Esas son alteraciones hematológicas que pueden asociarse a distintas condiciones, pero no constituyen la tríada de Virchow.',
    3:'Esos son signos de respuesta sistémica o de infección, no los mecanismos que explican la formación del trombo.'
  },
  trampa:'Confundir los factores de riesgo de enfermedad arterial (aterosclerosis) con los mecanismos de trombosis venosa, que son fisiopatológicamente distintos.',
  obj:'Aplicar la tríada de Virchow a un caso clínico de trombosis venosa profunda.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional.',
  tags:['tríada de Virchow','trombosis venosa profunda','estasis','hipercoagulabilidad']
},
{
  id:'U9-AP-Q04', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Adaptaciones celulares', sub:'Metaplasia',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente fumador de larga data se somete a una biopsia bronquial por tos crónica. El patólogo describe que el epitelio cilíndrico ciliado normal del bronquio ha sido reemplazado por epitelio escamoso estratificado.',
  enunciado:'¿Cómo se llama este cambio y por qué se considera reversible si el estímulo desaparece?',
  ops:[
    'Displasia; es reversible porque las células no han perdido su capacidad de diferenciarse',
    'Metaplasia; es reversible porque es un cambio adaptativo de un tipo celular maduro a otro, sin alteración del ADN',
    'Anaplasia; es reversible porque las células malignas pueden revertir a su forma normal',
    'Hiperplasia; es reversible porque el estímulo hormonal desaparece'
  ],
  ok:1,
  clave:'La metaplasia es un cambio adaptativo y reversible de un tipo celular diferenciado a otro.',
  exp:'La metaplasia es el reemplazo de un tipo celular diferenciado por otro tipo celular igualmente diferenciado, como respuesta adaptativa a un estímulo crónico (en este caso, el humo del tabaco). El epitelio escamoso resiste mejor la agresión química que el epitelio cilíndrico ciliado, así que el cambio tiene sentido protector a corto plazo, aunque a costa de perder la función de limpieza mucociliar. Es reversible porque ocurre por reprogramación de células madre o progenitoras locales, sin que se produzcan mutaciones irreversibles del ADN; si el estímulo cesa, el epitelio puede volver a su forma original. El problema es que si el estímulo persiste, el epitelio metaplásico puede progresar a displasia y eventualmente a carcinoma.',
  no:{
    0:'La displasia sí implica cierto grado de desorden en la maduración celular y atipia, y es un paso más avanzado y menos reversible que la metaplasia; no es lo descrito en el caso.',
    2:'La anaplasia es la pérdida de diferenciación característica de las neoplasias malignas y no es reversible; no aplica a un cambio adaptativo benigno.',
    3:'La hiperplasia es aumento del número de células del mismo tipo, no un cambio de un tipo celular a otro; el caso describe un cambio de tipo celular, no de cantidad.'
  },
  trampa:'Confundir metaplasia (cambio de tipo celular) con displasia (desorden en la maduración) porque ambas pueden preceder al cáncer. La diferencia clave es si cambia el TIPO de célula o su ORGANIZACIÓN y atipia.',
  obj:'Distinguir metaplasia de displasia y anaplasia en el contexto de la adaptación celular.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional.',
  tags:['metaplasia','epitelio bronquial','tabaquismo','adaptación celular']
},
{
  id:'U9-AP-Q05', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Neoplasias: conceptos generales', sub:'Benigno vs. maligno',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de las siguientes características es la que MEJOR distingue a una neoplasia maligna de una benigna?',
  ops:[
    'El tamaño del tumor',
    'La capacidad de invadir tejidos vecinos y producir metástasis',
    'La presencia de una cápsula fibrosa',
    'La velocidad de crecimiento, siempre lenta en las malignas'
  ],
  ok:1,
  clave:'La capacidad de invadir y dar metástasis es el criterio definitorio de malignidad.',
  exp:'Aunque las neoplasias malignas suelen crecer más rápido, ser menos diferenciadas y carecer de cápsula, ninguna de esas características es absoluta ni definitoria por sí sola: hay tumores benignos que crecen rápido y tumores malignos de crecimiento lento. Lo que define biológicamente a la malignidad es la capacidad de invadir tejidos adyacentes rompiendo la membrana basal y de diseminarse a distancia por vía linfática, hemática o por siembra en cavidades para formar metástasis. Una neoplasia benigna, por definición, permanece localizada y no invade ni metastatiza, incluso si crece mucho de tamaño.',
  no:{
    0:'El tamaño no distingue malignidad: hay tumores benignos grandes (como algunos miomas uterinos) y tumores malignos pequeños ya con metástasis.',
    2:'Muchos tumores benignos están encapsulados, pero esto es una tendencia, no una regla absoluta, y no es el criterio biológico definitorio.',
    3:'La velocidad de crecimiento suele correlacionar con el grado de malignidad, pero hay excepciones en ambos sentidos; no es el criterio más confiable.'
  },
  trampa:'Elegir una característica "típica" (cápsula, velocidad) en vez del criterio biológico definitorio, que es la invasión y la metástasis.',
  obj:'Identificar el criterio biológico que define la malignidad de una neoplasia.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional.',
  tags:['neoplasia maligna','invasión','metástasis','neoplasia benigna']
},

/* ===================== FISIOPATOLOGIA ===================== */
{
  id:'U9-FP-Q01', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología del equilibrio ácido-base', sub:'Acidosis metabólica con anion gap elevado',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente diabético llega con respiración rápida y profunda, aliento con olor afrutado y glucemia muy elevada. Los gases arteriales muestran pH bajo y bicarbonato disminuido.',
  enunciado:'¿Qué tipo de trastorno ácido-base presenta y qué mecanismo lo explica?',
  ops:[
    'Alcalosis respiratoria por hiperventilación ansiosa',
    'Acidosis metabólica con anion gap elevado, por acumulación de cuerpos cetónicos',
    'Acidosis respiratoria por depresión del centro respiratorio',
    'Alcalosis metabólica por pérdida de ácido gástrico'
  ],
  ok:1,
  clave:'La cetoacidosis diabética produce acidosis metabólica con anion gap elevado.',
  exp:'En la cetoacidosis diabética, el déficit de insulina impide la utilización de glucosa y obliga al organismo a metabolizar ácidos grasos, generando cuerpos cetónicos (ácido betahidroxibutírico y acetoacético) que son ácidos fuertes. Estos ácidos consumen bicarbonato para ser amortiguados, bajando el pH y el bicarbonato sérico: eso es una acidosis metabólica. Como los cuerpos cetónicos son aniones no medidos habitualmente, el anion gap (Na menos la suma de Cl y bicarbonato) se eleva. La respiración rápida y profunda (respiración de Kussmaul) es la respuesta compensadora: el centro respiratorio se estimula para eliminar más CO2 y así intentar subir el pH, y es precisamente esa hiperventilación la que produce el característico olor afrutado (por la acetona exhalada).',
  no:{
    0:'La hiperventilación aquí no es primaria ni ansiosa: es compensadora de la acidosis metabólica, y los gases muestran bicarbonato bajo, no un trastorno respiratorio primario.',
    2:'La acidosis respiratoria cursa con retención de CO2 por hipoventilación, lo opuesto a la respiración de Kussmaul descrita, y no explica el bicarbonato bajo de causa metabólica.',
    3:'La alcalosis metabólica cursaría con pH y bicarbonato elevados, no disminuidos como en este caso.'
  },
  trampa:'Ver "respiración rápida" y pensar automáticamente en un problema respiratorio primario, sin notar que aquí la hiperventilación es la respuesta compensadora a una acidosis metabólica.',
  obj:'Reconocer la cetoacidosis diabética como causa de acidosis metabólica con anion gap elevado y su mecanismo compensador.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['cetoacidosis diabética','anion gap','respiración de Kussmaul','acidosis metabólica']
},
{
  id:'U9-FP-Q02', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la insuficiencia cardíaca', sub:'Mecanismos compensadores',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'En la insuficiencia cardíaca crónica, la activación del sistema renina-angiotensina-aldosterona inicialmente compensa el gasto cardíaco bajo, pero a largo plazo empeora la enfermedad principalmente porque:',
  ops:[
    'Disminuye la frecuencia cardíaca de forma excesiva',
    'Aumenta la retención de sodio y agua y la vasoconstricción, incrementando la precarga y la poscarga del corazón ya dañado',
    'Bloquea directamente los receptores beta del corazón',
    'Produce vasodilatación excesiva que baja demasiado la presión arterial'
  ],
  ok:1,
  clave:'La activación crónica del SRAA sobrecarga de volumen y presión a un corazón que ya no puede manejarlo.',
  exp:'Cuando el gasto cardíaco cae, los riñones perciben menor perfusión y activan el sistema renina-angiotensina-aldosterona como mecanismo compensador agudo: la angiotensina II vasoconstriñe para sostener la presión arterial, y la aldosterona retiene sodio y agua para aumentar el volumen circulante y así la precarga. A corto plazo esto ayuda a mantener la perfusión de órganos vitales. Pero mantenido de forma crónica, ese aumento sostenido de precarga (por retención de líquido) y de poscarga (por vasoconstricción) obliga a un corazón ya debilitado a trabajar contra una resistencia mayor y con mayor sobrecarga de volumen, lo que acelera el remodelado cardíaco patológico y empeora la función ventricular con el tiempo. Por eso los IECA y ARA-II, que bloquean este sistema, son pilares del tratamiento.',
  no:{
    0:'El SRAA no actúa principalmente disminuyendo la frecuencia cardíaca; ese no es su mecanismo central.',
    2:'El SRAA no actúa sobre receptores beta cardíacos; ese es el mecanismo del sistema simpático, otro eje compensador distinto activado en la insuficiencia cardíaca.',
    3:'El efecto neto del SRAA es vasoconstrictor, no vasodilatador; produce el efecto contrario al descrito en esta opción.'
  },
  trampa:'Pensar que un mecanismo "compensador" es automáticamente beneficioso. En la insuficiencia cardíaca crónica, varios mecanismos compensadores agudos (SRAA, sistema simpático) se vuelven perjudiciales si se mantienen activados de forma sostenida.',
  obj:'Explicar por qué la activación crónica del SRAA empeora la insuficiencia cardíaca.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['insuficiencia cardíaca','sistema renina-angiotensina-aldosterona','precarga','poscarga']
},
{
  id:'U9-FP-Q03', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología respiratoria: hipoxemia e hipercapnia', sub:'Shunt',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con neumonía extensa presenta hipoxemia marcada que no mejora al administrarle oxígeno al 100 por ciento.',
  enunciado:'¿Qué mecanismo de hipoxemia explica mejor la falta de respuesta al oxígeno suplementario?',
  ops:[
    'Hipoventilación alveolar simple',
    'Shunt (cortocircuito) intrapulmonar, donde sangre no oxigenada pasa a la circulación sistémica sin contactar alvéolos ventilados',
    'Disminución de la presión atmosférica de oxígeno',
    'Alteración de la difusión de oxígeno por engrosamiento leve de la membrana alveolo-capilar'
  ],
  ok:1,
  clave:'El shunt no responde a oxígeno suplementario porque la sangre nunca contacta alvéolo ventilado.',
  exp:'En la neumonía extensa, los alvéolos afectados están llenos de exudado y no se ventilan en absoluto, pero siguen siendo perfundidos: la sangre que pasa por esos capilares nunca entra en contacto con aire, ventilado o no, y sale tan poco oxigenada como entró. Esa sangre se mezcla luego con la sangre sí oxigenada de zonas sanas, bajando la saturación total. Como el problema es la ausencia total de contacto con aire (no una limitación de la cantidad de oxígeno disponible), aumentar la fracción inspirada de oxígeno no ayuda: no hay alvéolo funcionante al que ese oxígeno extra pueda llegar en la zona afectada. Esto contrasta con la hipoxemia por hipoventilación o por alteración leve de la difusión, que sí mejoran con oxígeno suplementario.',
  no:{
    0:'La hipoventilación simple sí responde a oxígeno suplementario, porque los alvéolos siguen recibiendo algo de aire, solo que en menor cantidad.',
    2:'La disminución de la presión atmosférica de oxígeno (como en altura) también responde a administrar oxígeno suplementario, porque sube la presión parcial disponible.',
    3:'Una alteración leve de la difusión sí mejora con oxígeno suplementario, porque aumentar el gradiente de presión de oxígeno compensa parcialmente la barrera de difusión.'
  },
  trampa:'Asumir que toda hipoxemia mejora con oxígeno suplementario. El shunt es precisamente la excepción clásica que hay que reconocer, porque cambia el manejo clínico.',
  obj:'Reconocer el shunt como causa de hipoxemia refractaria a oxígeno suplementario.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['shunt pulmonar','hipoxemia refractaria','neumonía']
},
{
  id:'U9-FP-Q04', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología renal: síndrome nefrótico y nefrítico', sub:'Diferenciación clínica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la diferencia clínica principal entre el síndrome nefrótico y el síndrome nefrítico?',
  ops:[
    'El nefrótico cursa con proteinuria masiva y edema por hipoalbuminemia, con poca hematuria; el nefrítico cursa con hematuria, hipertensión y proteinuria menos intensa, por inflamación glomerular',
    'Solo el nefrótico produce insuficiencia renal',
    'El nefrítico siempre cursa con proteinuria mayor a 3.5 gramos al día',
    'No hay diferencia clínica real entre ambos síndromes'
  ],
  ok:0,
  clave:'Nefrótico: proteinuria masiva y edema. Nefrítico: hematuria e hipertensión por inflamación.',
  exp:'El síndrome nefrótico se produce por daño en la barrera de filtración glomerular que aumenta mucho su permeabilidad a las proteínas, dando proteinuria masiva (mayor a 3.5 g/día), hipoalbuminemia y edema por la caída de la presión oncótica plasmática, con hematuria mínima o ausente. El síndrome nefrítico, en cambio, se produce por inflamación glomerular (glomerulonefritis) que daña la pared capilar de forma que dejan pasar eritrocitos, dando hematuria (a veces con cilindros hemáticos), junto con hipertensión y cierto grado de retención de sodio y agua por la caída del filtrado glomerular; la proteinuria está presente pero suele ser menos intensa que en el nefrótico.',
  no:{
    1:'Ambos síndromes pueden asociarse a distintos grados de deterioro de la función renal, no es exclusivo de uno solo.',
    2:'La proteinuria mayor a 3.5 g/día en 24 horas es criterio del síndrome NEFRÓTICO, no del nefrítico.',
    3:'Sí hay una diferencia clínica real y bien definida entre ambos, que además orienta el estudio y el manejo.'
  },
  trampa:'Confundir los nombres tan parecidos (nefrótico/nefrítico) y con ellos intercambiar sus características. Conviene fijar la regla: nefrÓtico va con prOteinuria masiva; nefrÍtico va con hematurIa e Inflamación.',
  obj:'Diferenciar el síndrome nefrótico del nefrítico por su cuadro clínico y mecanismo.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['síndrome nefrótico','síndrome nefrítico','proteinuria','hematuria']
},
{
  id:'U9-FP-Q05', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la insuficiencia hepática', sub:'Hipertensión portal y ascitis',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con cirrosis hepática avanzada desarrolla distensión abdominal progresiva con matidez desplazable a la percusión, además de venas dilatadas visibles alrededor del ombligo.',
  enunciado:'¿Qué mecanismo principal explica la formación de ascitis en este paciente?',
  ops:[
    'Aumento aislado de la presión arterial sistémica',
    'La combinación de hipertensión portal, que aumenta la presión hidrostática en los capilares esplácnicos, con hipoalbuminemia, que baja la presión oncótica plasmática',
    'Una infección aguda de la cavidad peritoneal',
    'Un aumento del gasto cardíaco'
  ],
  ok:1,
  clave:'Hipertensión portal más hipoalbuminemia empujan líquido hacia la cavidad peritoneal.',
  exp:'En la cirrosis, la fibrosis y distorsión de la arquitectura hepática obstruyen el flujo venoso portal, elevando la presión en todo el territorio esplácnico (hipertensión portal); esa presión elevada empuja líquido hacia fuera de los capilares, hacia la cavidad peritoneal. Al mismo tiempo, el hígado cirrótico sintetiza menos albúmina, lo que baja la presión oncótica plasmática que normalmente retiene líquido dentro del vaso. Ambos mecanismos actúan juntos: uno empuja el líquido hacia afuera (presión hidrostática alta) y el otro deja de sostenerlo dentro (presión oncótica baja), y el resultado es la acumulación de líquido libre en el abdomen, la ascitis. La circulación colateral visible alrededor del ombligo (cabeza de medusa) es otra consecuencia directa de la hipertensión portal, que busca vías alternativas para drenar la sangre portal hacia la circulación sistémica.',
  no:{
    0:'La hipertensión arterial sistémica no es el mecanismo relevante aquí; lo relevante es la hipertensión específicamente del sistema venoso portal.',
    2:'Una infección peritoneal (peritonitis bacteriana espontánea) puede complicar la ascitis ya existente, pero no es el mecanismo que la origina.',
    3:'En la cirrosis avanzada suele haber más bien un estado circulatorio hiperdinámico con vasodilatación esplácnica, pero no es un aumento del gasto cardíaco lo que explica directamente la ascitis.'
  },
  trampa:'Buscar una sola causa cuando el mecanismo real es la combinación de dos factores (presión hidrostática alta y presión oncótica baja) actuando a la vez.',
  obj:'Explicar la fisiopatología combinada de la ascitis en la cirrosis hepática.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['ascitis','hipertensión portal','cirrosis','hipoalbuminemia']
},

/* ===================== NEUROANATOMIA ===================== */
{
  id:'U9-NA-Q01', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Médula espinal: organización y vías largas', sub:'Decusación de vías',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente sufre una lesión medular que afecta el haz corticoespinal lateral izquierdo y el haz espinotalámico lateral derecho, ambos a nivel de la médula torácica.',
  enunciado:'¿Qué déficit clínico es de esperar, teniendo en cuenta dónde decusa (cruza) cada vía?',
  ops:[
    'Debilidad del lado izquierdo del cuerpo por debajo de la lesión y pérdida de dolor y temperatura del lado izquierdo también',
    'Debilidad del lado izquierdo del cuerpo por debajo de la lesión (porque el corticoespinal ya cruzó antes, en el bulbo) y pérdida de dolor y temperatura del lado izquierdo (porque el espinotalámico cruza a nivel medular, cerca de donde entra)',
    'Debilidad del lado derecho y pérdida de sensibilidad del lado derecho',
    'No hay ningún déficit porque las lesiones se compensan entre sí'
  ],
  ok:1,
  clave:'El corticoespinal ya cruzó en el bulbo; el espinotalámico cruza a nivel medular tras entrar.',
  exp:'El haz corticoespinal lateral desciende desde la corteza motora y decusa (cruza al lado opuesto) en la decusación de las pirámides, a nivel del bulbo raquídeo, mucho antes de llegar a la médula torácica. Por eso, una lesión del haz corticoespinal IZQUIERDO en la médula produce debilidad del lado IZQUIERDO del cuerpo por debajo de la lesión (el mismo lado de la lesión medular, porque el cruce ya ocurrió arriba). El haz espinotalámico lateral, en cambio, lleva la sensibilidad de dolor y temperatura, y cruza al lado opuesto casi inmediatamente después de entrar a la médula por la raíz posterior, ascendiendo ya cruzado. Por eso una lesión del espinotalámico DERECHO en la médula torácica afecta la sensibilidad de dolor y temperatura del lado IZQUIERDO, porque esas fibras ya vienen cruzadas desde ese nivel. En este caso ambas lesiones (corticoespinal izquierdo y espinotalámico derecho) terminan produciendo déficit del mismo lado, el izquierdo: debilidad y pérdida de dolor y temperatura.',
  no:{
    0:'Es la respuesta correcta en cuanto al lado afectado, pero la justificación de por qué ambas vías dan déficit del lado izquierdo pese a estar lesionadas en lados distintos es lo que hay que entender: por sus niveles de decusación diferentes.',
    2:'El lado derecho no es el afectado clínicamente en ninguna de las dos vías según su nivel de cruce descrito.',
    3:'Las lesiones no se compensan; cada vía lesionada produce su propio déficit y, en este caso, ambos coinciden del lado izquierdo.'
  },
  trampa:'Asumir que todas las vías medulares cruzan en el mismo sitio. El corticoespinal cruza arriba, en el bulbo; el espinotalámico cruza abajo, a nivel segmentario. Ese desfase es la base del síndrome de Brown-Séquard.',
  obj:'Aplicar los niveles de decusación del corticoespinal y el espinotalámico para predecir un déficit clínico.',
  ref:'Snell, Neuroanatomía Clínica.',
  tags:['decusación','haz corticoespinal','haz espinotalámico','síndrome de Brown-Séquard']
},
{
  id:'U9-NA-Q02', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Cerebelo', sub:'Ataxia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Un paciente con lesión cerebelosa presenta marcha inestable de base ampliada, dismetría al llevarse el dedo a la nariz y temblor que empeora al final del movimiento. ¿Cómo se explica esto en términos de la función cerebelosa?',
  ops:[
    'El cerebelo genera directamente el movimiento voluntario, y su lesión causa parálisis',
    'El cerebelo coordina y ajusta en tiempo real el movimiento iniciado por la corteza motora, comparando lo planeado con lo ejecutado; su lesión no causa debilidad sino descoordinación',
    'El cerebelo controla exclusivamente la sensibilidad dolorosa',
    'El cerebelo es responsable del lenguaje, y su lesión causa afasia'
  ],
  ok:1,
  clave:'El cerebelo coordina el movimiento; su lesión da ataxia, no parálisis.',
  exp:'El cerebelo no inicia el movimiento voluntario, eso lo hace la corteza motora a través de la vía corticoespinal. La función del cerebelo es recibir información en paralelo sobre la orden motora planeada y sobre la posición y movimiento real del cuerpo (propiocepción, vestibular, visual), comparar ambas señales, y ajustar el movimiento en curso para que sea suave, preciso y coordinado. Cuando el cerebelo se lesiona, la fuerza muscular se conserva (no hay parálisis) pero se pierde esa coordinación fina: aparece la ataxia, con marcha de base ampliada e inestable, dismetría (fallar el blanco, como al tocarse la nariz), y temblor de intención que empeora al acercarse al objetivo, porque falta el ajuste fino en el tramo final del movimiento.',
  no:{
    0:'El cerebelo no genera el movimiento voluntario, por eso su lesión no produce parálisis sino descoordinación con fuerza conservada.',
    2:'La sensibilidad dolorosa depende de las vías espinotalámicas y de la corteza somatosensorial, no del cerebelo.',
    3:'El lenguaje depende de áreas corticales específicas (Broca y Wernicke), no del cerebelo.'
  },
  trampa:'Confundir debilidad con descoordinación. La clave para reconocer patología cerebelosa es que la fuerza está conservada pero el movimiento es torpe e impreciso.',
  obj:'Explicar el rol coordinador del cerebelo y el cuadro clínico de su lesión.',
  ref:'Snell, Neuroanatomía Clínica.',
  tags:['cerebelo','ataxia','dismetría','temblor de intención']
},
{
  id:'U9-NA-Q03', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Irrigación cerebral', sub:'Arteria cerebral media',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente sufre un accidente cerebrovascular isquémico en el territorio de la arteria cerebral media izquierda. Presenta debilidad de predominio en cara y brazo derechos, con pierna relativamente respetada, además de dificultad para expresar el lenguaje.',
  enunciado:'¿Por qué el déficit motor predomina en cara y brazo, respetando más la pierna?',
  ops:[
    'Porque la arteria cerebral media irriga principalmente la porción lateral de la corteza motora, donde se representan cara y brazo, mientras que la pierna se representa en la porción medial, irrigada por la arteria cerebral anterior',
    'Porque la pierna no tiene representación en la corteza motora',
    'Porque el ACV siempre respeta la pierna sin excepción',
    'Porque la arteria cerebral media no irriga ninguna parte de la corteza motora'
  ],
  ok:0,
  clave:'La cerebral media irriga la corteza motora lateral (cara-brazo); la cerebral anterior irriga la medial (pierna).',
  exp:'La representación somatotópica de la corteza motora primaria (homúnculo de Penfield) tiene la cara y el brazo en su porción más lateral de la convexidad cerebral, y la pierna y el pie en su porción más medial, que se extiende hacia la cara interna del hemisferio, entre los dos hemisferios. La arteria cerebral media irriga la mayor parte de la convexidad lateral del hemisferio, incluyendo el área de cara y brazo; la arteria cerebral anterior irriga la cara medial, incluyendo el área de la pierna. Por eso un infarto de la cerebral media da un déficit de predominio faciobraquial, mientras que un infarto de la cerebral anterior daría predominio en la pierna. La afectación del lenguaje en este caso (hemisferio izquierdo, dominante en la mayoría de las personas) se debe a que la cerebral media también irriga las áreas de Broca y Wernicke.',
  no:{
    1:'La pierna sí tiene representación cortical, solo que en una zona irrigada por otra arteria (cerebral anterior), no por la media.',
    2:'Sí hay excepciones: un infarto de la arteria cerebral anterior afecta predominantemente la pierna, no la cara ni el brazo.',
    3:'La arteria cerebral media sí irriga una parte extensa de la corteza motora, precisamente la porción lateral donde están cara y brazo.'
  },
  trampa:'No relacionar la somatotopía cortical (dónde se representa cada parte del cuerpo) con el territorio vascular específico que irriga cada zona. Esa relación es la que permite predecir el déficit según qué arteria se ocluye.',
  obj:'Relacionar el territorio de la arteria cerebral media con el patrón de déficit motor y de lenguaje.',
  ref:'Snell, Neuroanatomía Clínica.',
  tags:['arteria cerebral media','homúnculo motor','accidente cerebrovascular','afasia']
},
{
  id:'U9-NA-Q04', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Tronco encefálico y pares craneales', sub:'Núcleos de pares craneales',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Los núcleos de la mayoría de los pares craneales (III al XII) se localizan en:',
  ops:[
    'La corteza cerebral exclusivamente',
    'El tronco encefálico (mesencéfalo, protuberancia y bulbo), salvo el I y el II que no tienen núcleo troncoencefálico verdadero',
    'El cerebelo',
    'La médula espinal cervical exclusivamente'
  ],
  ok:1,
  clave:'Del III al XII, los núcleos de pares craneales están en el tronco encefálico.',
  exp:'Los pares craneales III a XII tienen sus núcleos de origen (motor) o de terminación (sensitivo) dentro del tronco encefálico: el mesencéfalo aloja los núcleos del III y IV; la protuberancia, los del V, VI, VII y parte del VIII; el bulbo raquídeo, los del IX, X, XI (su porción craneal) y XII. El I par (olfatorio) y el II par (óptico) son en realidad extensiones del propio encéfalo (tractos de sustancia blanca), no nervios periféricos típicos, y no tienen núcleo troncoencefálico de la misma manera. Conocer esta distribución permite localizar lesiones del tronco encefálico según qué combinación de pares craneales está afectada.',
  no:{
    0:'La corteza cerebral no alberga los núcleos de los pares craneales; sí participa en el control voluntario de algunos de ellos a través de vías descendentes, pero los núcleos están en el tronco.',
    2:'El cerebelo no contiene núcleos de pares craneales; se conecta con el tronco encefálico mediante los pedúnculos cerebelosos, pero es una estructura distinta.',
    3:'La médula espinal cervical no alberga núcleos de pares craneales, aunque el XI par tiene una raíz espinal que asciende desde ahí hasta unirse a su porción craneal.'
  },
  trampa:'Olvidar la excepción del I y el II par, que a diferencia del resto no se originan de un núcleo troncoencefálico clásico.',
  obj:'Ubicar los núcleos de los pares craneales en las distintas porciones del tronco encefálico.',
  ref:'Snell, Neuroanatomía Clínica.',
  tags:['pares craneales','tronco encefálico','mesencéfalo','bulbo raquídeo']
},

/* ===================== FARMACOLOGIA ===================== */
{
  id:'U9-FA-Q01', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacocinética: metabolismo y excreción', sub:'Citocromo P450',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente que toma warfarina de forma estable inicia tratamiento con rifampicina para tuberculosis. A las dos semanas, sus controles muestran que el efecto anticoagulante de la warfarina ha disminuido notablemente, pese a mantener la misma dosis.',
  enunciado:'¿Qué mecanismo farmacocinético explica esta interacción?',
  ops:[
    'La rifampicina desplaza a la warfarina de su unión a proteínas plasmáticas',
    'La rifampicina es un inductor enzimático del citocromo P450, que acelera el metabolismo de la warfarina y reduce su concentración eficaz',
    'La rifampicina inhibe la absorción intestinal de la warfarina',
    'La rifampicina aumenta la excreción renal directa de la warfarina sin pasar por el hígado'
  ],
  ok:1,
  clave:'La rifampicina es un inductor enzimático clásico del citocromo P450.',
  exp:'La rifampicina es uno de los inductores enzimáticos más potentes del citocromo P450 hepático, en particular de la isoforma CYP3A4 y otras. La inducción enzimática significa que aumenta la cantidad de enzima disponible, típicamente porque estimula su síntesis a nivel de transcripción génica, un proceso que toma días a semanas en desarrollarse por completo (coincide con el tiempo descrito en el caso). La warfarina se metaboliza en gran parte por estas mismas enzimas, así que al aumentar su actividad, se metaboliza y elimina más rápido, bajando su concentración plasmática y, con ella, su efecto anticoagulante, aunque la dosis administrada no haya cambiado. Esta es una de las interacciones farmacocinéticas más citadas en la práctica clínica por su relevancia y por el riesgo de subanticoagulación si no se ajusta la dosis.',
  no:{
    0:'El desplazamiento de unión a proteínas plasmáticas es un mecanismo distinto, generalmente de efecto rápido y transitorio, no el que explica típicamente esta interacción con rifampicina.',
    2:'La interacción relevante entre rifampicina y warfarina es a nivel de metabolismo hepático, no de absorción intestinal.',
    3:'La warfarina se elimina principalmente por metabolismo hepático, no por excreción renal directa sin metabolizar.'
  },
  trampa:'Confundir inducción con inhibición enzimática, que tendrían el efecto contrario (la inhibición aumentaría el efecto de la warfarina, no lo disminuiría). El sentido del cambio en el efecto clínico es la pista para distinguir cuál de los dos mecanismos está ocurriendo.',
  obj:'Reconocer la inducción enzimática del citocromo P450 como mecanismo de interacción farmacológica.',
  ref:'Goodman & Gilman, Las Bases Farmacológicas de la Terapéutica.',
  tags:['inducción enzimática','citocromo P450','rifampicina','warfarina']
},
{
  id:'U9-FA-Q02', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Farmacodinamia: receptores y mecanismos de acción', sub:'Agonista vs. antagonista',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Un antagonista competitivo de un receptor se caracteriza porque:',
  ops:[
    'Se une al receptor y produce el mismo efecto biológico que el ligando endógeno, aunque con menor potencia',
    'Se une reversiblemente al mismo sitio del receptor que el agonista, sin activarlo, y puede ser desplazado si aumenta suficientemente la concentración del agonista',
    'Se une de forma irreversible a un sitio distinto del receptor y no puede ser revertido por ninguna dosis del agonista',
    'No tiene ninguna afinidad por el receptor'
  ],
  ok:1,
  clave:'El antagonista competitivo compite por el mismo sitio del receptor y puede desplazarse con más agonista.',
  exp:'Un antagonista competitivo tiene afinidad por el mismo sitio de unión del receptor que el agonista, pero al unirse no lo activa (carece de actividad intrínseca o eficacia). Como compite por el mismo sitio de forma reversible, su efecto puede superarse aumentando la concentración del agonista: a dosis suficientemente altas de agonista, este desplaza al antagonista y se puede alcanzar el efecto máximo, aunque se necesite más concentración para lograrlo (desplazamiento paralelo de la curva dosis-respuesta hacia la derecha, sin cambiar el efecto máximo). Esto lo distingue del antagonista no competitivo o irreversible, que se une a un sitio distinto o de forma covalente y no puede ser superado aumentando el agonista, reduciendo el efecto máximo alcanzable.',
  no:{
    0:'Eso describe a un agonista parcial, no a un antagonista: el antagonista, por definición, no activa el receptor ni produce el efecto biológico del ligando endógeno.',
    2:'Eso describe a un antagonista no competitivo o irreversible, no al competitivo, que es justamente reversible y superable con más agonista.',
    3:'El antagonista sí tiene afinidad por el receptor; de hecho, esa afinidad es lo que le permite ocupar el sitio y bloquear al agonista.'
  },
  trampa:'Confundir "antagonista" con "sin efecto ninguno sobre el receptor". El antagonista sí se une al receptor con afinidad; lo que no tiene es actividad intrínseca que lo active.',
  obj:'Diferenciar el antagonismo competitivo de otros tipos de interacción fármaco-receptor.',
  ref:'Goodman & Gilman, Las Bases Farmacológicas de la Terapéutica.',
  tags:['antagonista competitivo','receptor','curva dosis-respuesta','agonista parcial']
},
{
  id:'U9-FA-Q03', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Antibióticos: familias principales', sub:'Mecanismo de los betalactámicos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Los antibióticos betalactámicos (como la penicilina) ejercen su efecto bactericida principalmente porque:',
  ops:[
    'Inhiben la síntesis de proteínas bacterianas al unirse a la subunidad ribosomal 30S',
    'Inhiben la síntesis de la pared celular bacteriana al bloquear las proteínas fijadoras de penicilina, necesarias para el entrecruzamiento del peptidoglicano',
    'Inhiben la síntesis de ácido fólico bacteriano',
    'Inhiben la ADN girasa bacteriana'
  ],
  ok:1,
  clave:'Los betalactámicos bloquean las proteínas fijadoras de penicilina y frenan la síntesis de la pared celular.',
  exp:'Los betalactámicos tienen una estructura que imita al sustrato natural de las proteínas fijadoras de penicilina (PBP, transpeptidasas bacterianas), enzimas encargadas de formar los enlaces cruzados entre las cadenas de peptidoglicano que dan rigidez a la pared celular bacteriana. Al unirse de forma covalente e irreversible a esas enzimas, las inactivan, y la pared queda debilitada y no puede resistir la presión osmótica interna de la bacteria, que termina lisándose: por eso su efecto es bactericida. Esta es la razón por la que los betalactámicos son selectivos contra bacterias (que tienen pared celular) y no tóxicos para las células humanas, que carecen de ella.',
  no:{
    0:'Ese es el mecanismo de los aminoglucósidos, no de los betalactámicos.',
    2:'Ese es el mecanismo de las sulfonamidas y el trimetoprim, no de los betalactámicos.',
    3:'Ese es el mecanismo de las quinolonas, no de los betalactámicos.'
  },
  trampa:'Mezclar los mecanismos de acción de distintas familias de antibióticos porque todos "matan bacterias". Conviene fijar cada familia con su blanco molecular específico.',
  obj:'Relacionar la estructura de los betalactámicos con su mecanismo de acción sobre la pared celular.',
  ref:'Goodman & Gilman, Las Bases Farmacológicas de la Terapéutica.',
  tags:['betalactámicos','proteínas fijadoras de penicilina','pared celular','peptidoglicano']
},
{
  id:'U9-FA-Q04', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Fármacos cardiovasculares', sub:'IECA: efecto adverso característico',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente hipertenso inicia tratamiento con enalapril. A las pocas semanas consulta por tos seca persistente, sin otros síntomas respiratorios ni signos de infección.',
  enunciado:'¿Qué mecanismo explica esta tos y qué se debería hacer?',
  ops:[
    'Es una alergia grave al fármaco y requiere hospitalización inmediata',
    'Los IECA inhiben la degradación de la bradicinina, que se acumula en el tejido pulmonar e irrita las vías respiratorias; suele resolver al suspender el fármaco y puede cambiarse a un ARA-II',
    'Es una coincidencia sin relación con el fármaco',
    'Los IECA producen broncoespasmo directo por bloqueo de receptores beta-2'
  ],
  ok:1,
  clave:'La tos por IECA se debe a acumulación de bradicinina, no es alérgica ni broncoespástica.',
  exp:'La enzima convertidora de angiotensina (ECA) no solo transforma angiotensina I en angiotensina II, sino que también participa en la degradación de la bradicinina, un péptido que causa tos e irritación de la vía aérea cuando se acumula. Al inhibir la ECA, los IECA (como el enalapril) permiten que la bradicinina se acumule en el tejido pulmonar, produciendo una tos seca persistente en un porcentaje notable de pacientes. No es una reacción alérgica grave ni pone en riesgo la vida; el manejo habitual es suspender el IECA, tras lo cual la tos suele resolver en días a semanas, y sustituirlo por un antagonista del receptor de angiotensina II (ARA-II), que no afecta el metabolismo de la bradicinina y por eso no produce este efecto con la misma frecuencia.',
  no:{
    0:'No es una reacción alérgica grave que requiera hospitalización; es un efecto adverso conocido, frecuente y generalmente no peligroso.',
    2:'La relación temporal y el mecanismo farmacológico conocido hacen que sí exista una relación causal bien establecida entre los IECA y esta tos.',
    3:'El mecanismo no es broncoespasmo por bloqueo de receptores beta-2 (eso sería más propio de un betabloqueante no selectivo); es la acumulación de bradicinina.'
  },
  trampa:'Pensar que toda reacción a un fármaco es alérgica. La tos por IECA es un efecto adverso mecanístico predecible, no una hipersensibilidad, y eso cambia el manejo.',
  obj:'Explicar el mecanismo de la tos asociada a IECA y su manejo.',
  ref:'Goodman & Gilman, Las Bases Farmacológicas de la Terapéutica.',
  tags:['IECA','bradicinina','tos','enalapril','ARA-II']
},
{
  id:'U9-FA-Q05', programa:'unirm', cuatri:9,
  esp:'Farmacología', tema:'Reacciones adversas y toxicidad', sub:'Antídotos específicos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente llega a emergencias con somnolencia profunda, frecuencia respiratoria muy baja y pupilas puntiformes, tras haberse administrado una dosis excesiva de un analgésico opioide.',
  enunciado:'¿Cuál es el antídoto específico indicado y por qué mecanismo revierte la intoxicación?',
  ops:[
    'Flumazenil, porque antagoniza los receptores GABA',
    'Naloxona, porque es un antagonista competitivo de los receptores opioides mu, que desplaza al opioide y revierte la depresión respiratoria',
    'N-acetilcisteína, porque repone el glutatión hepático',
    'Atropina, porque bloquea los receptores muscarínicos'
  ],
  ok:1,
  clave:'La naloxona antagoniza competitivamente los receptores opioides mu y revierte la sobredosis.',
  exp:'Los opioides deprimen el centro respiratorio bulbar y producen miosis (pupilas puntiformes) al actuar como agonistas de los receptores opioides mu, principalmente. La naloxona es un antagonista competitivo de estos receptores, con alta afinidad por ellos: al administrarse, desplaza al opioide de su unión al receptor sin activarlo, revirtiendo rápidamente la depresión respiratoria y el resto de los efectos. Su acción es relativamente corta comparada con la de muchos opioides, por lo que a veces se necesitan dosis repetidas o una infusión continua para evitar que el paciente vuelva a deprimirse cuando el efecto de la naloxona se agota antes que el del opioide causante.',
  no:{
    0:'El flumazenil es el antídoto de las benzodiazepinas, que actúan sobre el receptor GABA-A, no de los opioides.',
    2:'La N-acetilcisteína es el antídoto de la intoxicación por paracetamol (acetaminofén), no de los opioides.',
    3:'La atropina se usa en la intoxicación por organofosforados o en la bradicardia sintomática, no en la sobredosis de opioides.'
  },
  trampa:'Mezclar antídotos de distintas sustancias porque todos "revierten una intoxicación". Cada antídoto tiene un blanco molecular específico que solo tiene sentido para su tóxico correspondiente.',
  obj:'Relacionar la tríada clínica de intoxicación opioide con su antídoto y mecanismo específico.',
  ref:'Goodman & Gilman, Las Bases Farmacológicas de la Terapéutica.',
  tags:['naloxona','intoxicación opioide','receptor mu','antídoto']
},

/* ===================== MEDICINA PREVENTIVA ===================== */
{
  id:'U9-MP-Q01', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Niveles de prevención', sub:'Clasificación de niveles',
  dif:1, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Aplicar quimioterapia a un paciente ya diagnosticado de cáncer, para evitar recaídas y complicaciones, corresponde al nivel de:',
  ops:[
    'Prevención primaria',
    'Prevención secundaria',
    'Prevención terciaria',
    'Promoción de la salud'
  ],
  ok:2,
  clave:'Tratar una enfermedad ya establecida para evitar complicaciones es prevención terciaria.',
  exp:'La prevención primaria actúa antes de que la enfermedad aparezca, evitando el factor de riesgo o la exposición (como la vacunación). La prevención secundaria busca detectar la enfermedad en fase temprana o asintomática, mediante tamizaje, para tratarla antes de que progrese (como una mamografía de rutina). La prevención terciaria actúa cuando la enfermedad ya está establecida y diagnosticada, y busca limitar sus complicaciones, evitar recaídas y favorecer la rehabilitación; aplicar tratamiento a un paciente ya diagnosticado de cáncer para evitar que progrese o recaiga encaja exactamente en este nivel.',
  no:{
    0:'La prevención primaria actúa antes de que exista la enfermedad, no después del diagnóstico.',
    1:'La prevención secundaria es la detección temprana mediante tamizaje, no el tratamiento de una enfermedad ya diagnosticada y en curso.',
    3:'La promoción de la salud son acciones generales sobre estilos de vida y entorno, no un tratamiento médico específico sobre un paciente ya diagnosticado.'
  },
  trampa:'Confundir "tratar para evitar que empeore" con prevención secundaria, solo porque suena a "prevenir algo". La secundaria es DETECTAR temprano, la terciaria es TRATAR lo ya existente para limitar el daño.',
  obj:'Clasificar correctamente una intervención médica según el nivel de prevención al que pertenece.',
  ref:'Piédrola Gil, Medicina Preventiva y Salud Pública.',
  tags:['prevención terciaria','niveles de prevención','rehabilitación']
},
{
  id:'U9-MP-Q02', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Tamizaje y detección temprana', sub:'Sensibilidad y especificidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Una prueba de tamizaje con alta sensibilidad pero baja especificidad se caracteriza principalmente por:',
  ops:[
    'Detectar correctamente a casi todos los enfermos, pero con muchos falsos positivos entre los sanos',
    'Detectar correctamente a casi todos los sanos, con pocos falsos negativos entre los enfermos',
    'No tener ninguna utilidad clínica',
    'Ser siempre la mejor opción para confirmar un diagnóstico'
  ],
  ok:0,
  clave:'Alta sensibilidad detecta bien a los enfermos, pero baja especificidad genera muchos falsos positivos.',
  exp:'La sensibilidad es la capacidad de una prueba de dar positivo en las personas que realmente tienen la enfermedad (pocos falsos negativos), lo que la hace útil para no dejar pasar casos, ideal en el tamizaje inicial de una población. La especificidad es la capacidad de dar negativo en las personas realmente sanas (pocos falsos positivos). Una prueba muy sensible pero poco específica detecta a casi todos los enfermos, pero también da positivo en muchas personas sanas, generando falsos positivos que después necesitan una prueba confirmatoria más específica para aclarar el diagnóstico definitivo. Por eso el tamizaje suele diseñarse con pruebas sensibles, y la confirmación con pruebas específicas.',
  no:{
    1:'Eso describe una prueba de alta especificidad, no de alta sensibilidad, que es la característica preguntada.',
    2:'Sí tiene utilidad clínica, precisamente como primer filtro de tamizaje poblacional, aunque requiera confirmación posterior.',
    3:'Para CONFIRMAR un diagnóstico conviene una prueba de alta especificidad, no una de alta sensibilidad con muchos falsos positivos.'
  },
  trampa:'Confundir sensibilidad con especificidad, que son conceptos complementarios pero miden cosas distintas: una se enfoca en los enfermos, la otra en los sanos.',
  obj:'Aplicar correctamente los conceptos de sensibilidad y especificidad a una prueba de tamizaje.',
  ref:'Piédrola Gil, Medicina Preventiva y Salud Pública.',
  tags:['sensibilidad','especificidad','tamizaje','falso positivo']
},

/* ===================== SOPORTE VITAL BASICO Y AVANZADO ===================== */
{
  id:'U9-SV-Q01', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Ritmos de paro y desfibrilación', sub:'Ritmos desfibrilables',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Durante una reanimación cardiopulmonar, el monitor muestra un trazado caótico, sin complejos QRS identificables, de amplitud y frecuencia irregular.',
  enunciado:'¿Qué ritmo es este y cuál es la conducta inmediata indicada?',
  ops:[
    'Asistolia; indicar desfibrilación inmediata',
    'Fibrilación ventricular; indicar desfibrilación inmediata, además de continuar compresiones de alta calidad',
    'Actividad eléctrica sin pulso; buscar y tratar la causa reversible sin desfibrilar',
    'Ritmo sinusal normal; no requiere ninguna intervención'
  ],
  ok:1,
  clave:'La fibrilación ventricular es un ritmo desfibrilable y requiere descarga inmediata.',
  exp:'El trazado descrito, caótico y sin complejos QRS organizados, es característico de la fibrilación ventricular: el corazón tiene actividad eléctrica pero completamente desorganizada, sin ninguna contracción mecánica efectiva. Es, junto con la taquicardia ventricular sin pulso, uno de los dos ritmos "desfibrilables" del algoritmo de paro cardíaco, porque la descarga eléctrica puede despolarizar simultáneamente al miocardio y darle la oportunidad de reanudar un ritmo organizado. Por eso la conducta inmediata es desfibrilar tan pronto como se identifica el ritmo, sin retrasar la descarga, combinado siempre con compresiones torácicas de alta calidad y la mínima interrupción posible de las mismas.',
  no:{
    0:'La asistolia es una línea plana, sin actividad eléctrica, y es un ritmo NO desfibrilable; desfibrilar una asistolia no tiene ningún beneficio.',
    2:'La actividad eléctrica sin pulso muestra un ritmo organizado en el monitor (no el caos descrito) pero sin pulso palpable, y tampoco es un ritmo desfibrilable; el manejo se centra en buscar causas reversibles.',
    3:'Un ritmo sinusal normal tiene ondas P y complejos QRS bien definidos y organizados, lo opuesto al trazado caótico descrito.'
  },
  trampa:'Confundir los ritmos desfibrilables (fibrilación ventricular y taquicardia ventricular sin pulso) con los no desfibrilables (asistolia y actividad eléctrica sin pulso). Esa distinción es la que determina si se desfibrila o no.',
  obj:'Reconocer la fibrilación ventricular como ritmo desfibrilable y su manejo inmediato.',
  ref:'American Heart Association, Guías de Soporte Vital Cardiovascular Avanzado.',
  tags:['fibrilación ventricular','desfibrilación','ritmo desfibrilable','paro cardíaco']
},

/* ===================== RELACION MEDICO-PACIENTE ===================== */
{
  id:'U9-RM-Q01', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Consentimiento informado', sub:'Elementos esenciales',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un cirujano explica a un paciente los riesgos, beneficios y alternativas de una operación programada, y el paciente firma un documento autorizando el procedimiento.',
  enunciado:'Para que este consentimiento informado sea válido, ¿qué condición adicional es indispensable?',
  ops:[
    'Que el paciente firme el documento, independientemente de si comprendió la información',
    'Que el paciente tenga capacidad para decidir (comprender la información, razonar sobre ella y comunicar su decisión) de forma voluntaria, sin coerción',
    'Que un familiar directo también firme el documento',
    'Que el documento sea revisado por un comité de ética antes de cualquier cirugía'
  ],
  ok:1,
  clave:'El consentimiento válido exige capacidad de decisión, comprensión real y voluntariedad, no solo una firma.',
  exp:'El consentimiento informado no es simplemente un documento firmado: es un proceso que requiere que el paciente reciba información adecuada (diagnóstico, riesgos, beneficios y alternativas), que tenga la capacidad de comprenderla y razonar sobre ella, que pueda comunicar una decisión coherente con sus valores, y que esa decisión sea tomada de forma voluntaria, sin presión ni coerción de terceros. Una firma obtenida sin que el paciente realmente entendiera la información, o bajo presión, no constituye un consentimiento válido desde el punto de vista ético y legal, aunque exista el papel firmado.',
  no:{
    0:'La sola firma sin comprensión real no constituye un consentimiento válido; el elemento central es la comprensión efectiva, no el trámite documental.',
    2:'Para un paciente adulto con capacidad de decisión conservada, no se requiere la firma de un familiar; el consentimiento es un derecho del propio paciente.',
    3:'La revisión por un comité de ética no es un requisito general para toda cirugía programada; se reserva para situaciones específicas de mayor complejidad ética.'
  },
  trampa:'Reducir el consentimiento informado a un trámite administrativo (la firma) en vez de entenderlo como un proceso de comunicación y comprensión real.',
  obj:'Identificar los elementos que hacen válido un consentimiento informado, más allá de la firma del documento.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica.',
  tags:['consentimiento informado','autonomía','capacidad para decidir']
},

/* ===================== SALUD Y COMUNIDAD I ===================== */
{
  id:'U9-SYC-Q01', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Determinantes sociales de la salud', sub:'Definición y ejemplos',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de las siguientes opciones es un ejemplo de determinante social de la salud, y no de un factor biológico individual?',
  ops:[
    'La predisposición genética a la hipertensión',
    'El nivel de ingresos y el acceso a educación de una comunidad',
    'La edad del paciente',
    'El grupo sanguíneo del paciente'
  ],
  ok:1,
  clave:'Los determinantes sociales son condiciones del entorno económico y social, no rasgos biológicos individuales.',
  exp:'Los determinantes sociales de la salud son las condiciones en las que las personas nacen, crecen, viven, trabajan y envejecen, moldeadas por la distribución del dinero, el poder y los recursos: el nivel de ingresos, el acceso a educación, la vivienda, el empleo y el acceso a servicios de salud son ejemplos centrales de estos determinantes. Se distinguen de los factores biológicos individuales (genética, edad, grupo sanguíneo), que son características propias de cada persona y no del contexto social en el que vive. Ambos tipos de factores influyen en la salud, pero los determinantes sociales explican en gran medida las desigualdades en salud entre poblaciones distintas.',
  no:{
    0:'Eso es un factor biológico individual (predisposición genética), no un determinante social.',
    2:'La edad es una característica biológica y demográfica individual, no un determinante social del entorno.',
    3:'El grupo sanguíneo es una característica biológica fija del individuo, no relacionada con condiciones sociales o económicas.'
  },
  trampa:'Mezclar factores de riesgo individuales (biológicos) con determinantes sociales (del entorno). Los determinantes sociales se refieren siempre a condiciones estructurales compartidas por una población, no a rasgos de una sola persona.',
  obj:'Distinguir determinantes sociales de la salud de factores de riesgo biológicos individuales.',
  ref:'OMS, Comisión sobre Determinantes Sociales de la Salud.',
  tags:['determinantes sociales','desigualdad en salud','acceso a educación']
}

]);
