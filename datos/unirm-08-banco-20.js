/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE FISIOLOGIA II (2/2)
   Completa Fisiologia II a 50 preguntas junto con banco-19.js.
   Cubre fisiologia digestiva, endocrinologia, curva de funcion
   ventricular, circulacion coronaria, volumenes pulmonares,
   fisiologia del ejercicio, motilidad gastrointestinal y
   miccion (temas 10-17).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== FISIOLOGIA II ===================== */
{
  id:'U8-F-Q28', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Secreción gástrica', sub:'Fase cefálica',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué caracteriza a la fase cefálica de la secreción gástrica?',
  ops:[
    'Se activa cuando el alimento ya llegó al duodeno',
    'Se activa incluso antes de que la comida llegue al estómago, por la vista, el olor o el pensamiento de la comida, mediada por el nervio vago',
    'Es la fase que aporta la mayor proporción del ácido total secretado',
    'Es predominantemente inhibitoria sobre la secreción gástrica'
  ],
  ok:1,
  clave:'La fase cefálica se activa antes de que la comida llegue al estómago, mediada por el nervio vago.',
  exp:'La fase cefálica de la secreción gástrica ocurre incluso ANTES de que la comida llegue al estómago, activada por la vista, el olor o el pensamiento de la comida, mediada por el nervio vago -es la razón por la que "se hace agua la boca" y comienza la secreción gástrica anticipada. Es distinta de la fase gástrica (que aporta la mayor proporción del ácido, activada por la distensión del estómago y la gastrina) y de la fase intestinal (predominantemente inhibitoria, cuando el quimo llega al duodeno).',
  no:{
    0:'Esa descripción corresponde a la fase intestinal, no a la cefálica, que ocurre antes de que la comida siquiera llegue al estómago.',
    2:'La fase que aporta la mayor proporción del ácido total secretado es la fase gástrica, no la cefálica.',
    3:'La fase cefálica es estimulante de la secreción gástrica, no inhibitoria; la fase predominantemente inhibitoria es la intestinal.'
  },
  trampa:'Confundir las tres fases de la secreción gástrica entre sí, atribuyendo a la cefálica características propias de la gástrica o la intestinal.',
  obj:'Describir la fase cefálica de la secreción gástrica y su mecanismo de activación.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['fase cefálica','secreción gástrica','nervio vago','gastrina']
},
{
  id:'U8-F-Q29', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Bilis', sub:'Función real',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la función real de la bilis en la digestión de las grasas?',
  ops:[
    'Contiene enzimas que digieren directamente las grasas en ácidos grasos',
    'Emulsifica las grasas (rompiéndolas en gotas pequeñas), aumentando la superficie disponible para que las enzimas lipolíticas actúen eficientemente; NO contiene enzimas digestivas',
    'La bilis no tiene ninguna función en la digestión de grasas',
    'La bilis digiere proteínas, no grasas'
  ],
  ok:1,
  clave:'La bilis emulsifica las grasas pero no contiene enzimas digestivas; esa es tarea del páncreas.',
  exp:'La bilis, producida en el hígado y concentrada en la vesícula biliar, no contiene enzimas digestivas: su función es emulsificar las grasas mediante las sales biliares, rompiéndolas en gotas pequeñas y aumentando la superficie disponible para que las enzimas lipolíticas (producidas por el páncreas) actúen eficientemente. Sin bilis, la digestión de grasas es muy ineficiente, aunque las enzimas pancreáticas estén presentes en cantidad normal -es un error conceptual frecuente pensar que la bilis "digiere" directamente las grasas.',
  no:{
    0:'La bilis no contiene enzimas; son las enzimas pancreáticas (como la lipasa) las que digieren directamente las grasas, trabajando junto con la bilis emulsificada.',
    2:'La bilis sí tiene una función esencial en la digestión de grasas, aunque indirecta (emulsificación), no directa (digestión enzimática).',
    3:'La bilis está relacionada específicamente con la digestión de grasas (emulsificación), no con las proteínas.'
  },
  trampa:'Asumir que la bilis contiene enzimas digestivas, confundiendo su función emulsificante con la función enzimática propia del páncreas.',
  obj:'Explicar la función emulsificante de la bilis, distinguiéndola de la función enzimática del páncreas.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['bilis','emulsificación de grasas','sales biliares','enzimas pancreáticas']
},
{
  id:'U8-F-Q30', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Colecistoquinina', sub:'Coordinación digestiva',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué procesos digestivos coordina la colecistoquinina (CCK) en respuesta a la grasa en el duodeno?',
  ops:[
    'Solo estimula la secreción de saliva',
    'Contracción de la vesícula biliar, secreción de enzimas pancreáticas, relajación del esfínter de Oddi y enlentecimiento del vaciamiento gástrico',
    'Únicamente acelera el vaciamiento gástrico',
    'Inhibe por completo la secreción de enzimas pancreáticas'
  ],
  ok:1,
  clave:'La CCK coordina simultáneamente contracción vesicular, secreción pancreática, relajación del esfínter de Oddi y enlentecimiento gástrico.',
  exp:'La colecistoquinina, liberada por el duodeno en respuesta a grasas y proteínas, coordina la respuesta digestiva a esa comida: estimula la contracción de la vesícula biliar (liberando bilis hacia el duodeno), estimula la secreción de enzimas pancreáticas, relaja el esfínter de Oddi (facilitando el paso de bilis y jugo pancreático), y enlentece el vaciamiento gástrico (dando más tiempo al duodeno para procesar la grasa recibida). Es un ejemplo de cómo una sola hormona coordina varios procesos digestivos simultáneamente, todos orientados a procesar eficientemente la grasa.',
  no:{
    0:'La CCK no actúa sobre la secreción salival; su acción es sobre la vesícula biliar, el páncreas, el esfínter de Oddi y el vaciamiento gástrico.',
    2:'La CCK ENLENTECE (no acelera) el vaciamiento gástrico, dando más tiempo al duodeno para procesar la carga de grasa recibida.',
    3:'La CCK ESTIMULA (no inhibe) la secreción de enzimas pancreáticas, como parte de su respuesta coordinada a la grasa duodenal.'
  },
  trampa:'Invertir alguno de los efectos de la CCK (por ejemplo, el efecto sobre el vaciamiento gástrico) o atribuirle una acción sobre un órgano no relacionado.',
  obj:'Describir los efectos coordinados de la colecistoquinina sobre la digestión de grasas.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['colecistoquinina','vesícula biliar','esfínter de Oddi','vaciamiento gástrico']
},
{
  id:'U8-F-Q31', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Ejes hormonales', sub:'Patrón de tres niveles',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué patrón general de tres niveles siguen muchos sistemas hormonales, como el eje tiroideo o el suprarrenal?',
  ops:[
    'La glándula periférica actúa directamente sobre el hipotálamo, sin pasar por la hipófisis',
    'Hipotálamo (hormona liberadora) → hipófisis anterior (hormona trófica) → glándula endocrina periférica (hormona final)',
    'Solo existe un nivel hormonal, sin jerarquía',
    'La hipófisis actúa siempre de forma independiente del hipotálamo'
  ],
  ok:1,
  clave:'El patrón de tres niveles es: hipotálamo → hipófisis anterior (hormona trófica) → glándula periférica (hormona final).',
  exp:'Muchos sistemas hormonales siguen un patrón jerárquico de tres niveles: el hipotálamo secreta una hormona liberadora que actúa sobre la hipófisis anterior, estimulándola a secretar una hormona trófica, que a su vez actúa sobre una glándula endocrina periférica, estimulándola a secretar la hormona final que actúa sobre los tejidos diana. Ejemplos incluyen el eje tiroideo (TRH → TSH → hormonas tiroideas), el suprarrenal (CRH → ACTH → cortisol) y el gonadal (GnRH → LH/FSH → hormonas sexuales).',
  no:{
    0:'La glándula periférica actúa de vuelta sobre el hipotálamo y la hipófisis mediante retroalimentación negativa, pero el flujo de estimulación inicial va en la dirección hipotálamo → hipófisis → glándula periférica, no al revés.',
    2:'Sí existe una jerarquía de tres niveles bien definida en muchos sistemas hormonales, no un solo nivel aislado.',
    3:'La hipófisis anterior depende de las hormonas liberadoras del hipotálamo para secretar sus propias hormonas tróficas; no actúa de forma completamente independiente.'
  },
  trampa:'Invertir el orden del patrón jerárquico, o no reconocer la existencia de los tres niveles como un patrón general aplicable a distintos ejes hormonales.',
  obj:'Describir el patrón general de tres niveles de los ejes hormonales hipotálamo-hipófisis-glándula periférica.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['eje hipotálamo-hipófisis','hormona trófica','retroalimentación negativa','patrón hormonal']
},
{
  id:'U8-F-Q32', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Retroalimentación negativa', sub:'Interpretación de estudios hormonales',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente tiene TSH elevada y hormona tiroidea (T4) baja en sus estudios de laboratorio.',
  enunciado:'Según el razonamiento de retroalimentación negativa en un eje hormonal de tres niveles, ¿dónde está más probablemente el problema?',
  ops:[
    'En el hipotálamo o la hipófisis, que no están generando suficiente estímulo',
    'En la propia glándula tiroides (periférica), que no responde adecuadamente al estímulo trófico de la TSH, pese a que esta está elevada intentando compensar',
    'No puede determinarse nada con esta información',
    'Es imposible que la TSH y la T4 tengan direcciones opuestas'
  ],
  ok:1,
  clave:'TSH alta + T4 baja indica que el problema está en la glándula tiroides, que no responde pese al estímulo trófico elevado.',
  exp:'Si una hormona trófica (TSH) está ALTA y la hormona final correspondiente (T4) está BAJA, el razonamiento de retroalimentación negativa indica que el problema está en la propia glándula PERIFÉRICA (la tiroides): esta no está respondiendo adecuadamente al estímulo trófico, así que el eje "compensa" aumentando la TSH en un intento (fallido) de estimular más producción -esto es hipotiroidismo primario. Si el problema estuviera en el hipotálamo o la hipófisis (hipotiroidismo central), ambas hormonas, trófica y final, estarían bajas, porque el estímulo inicial nunca se generó adecuadamente.',
  no:{
    0:'Si el problema estuviera en el hipotálamo o la hipófisis, se esperaría que la TSH estuviera BAJA (no generando suficiente estímulo), no elevada como en este caso.',
    2:'Sí puede determinarse: el patrón específico (trófica alta, final baja) es característico y permite localizar el problema en la glándula periférica.',
    3:'Es exactamente el patrón esperado en el hipotiroidismo primario: la trófica se eleva compensatoriamente mientras la final permanece baja, precisamente porque van en direcciones opuestas.'
  },
  trampa:'No aplicar el razonamiento de retroalimentación negativa para distinguir un problema de la glándula periférica de uno del hipotálamo/hipófisis según el patrón de ambas hormonas.',
  obj:'Aplicar el razonamiento de retroalimentación negativa para localizar la causa de una alteración hormonal.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['retroalimentación negativa','TSH','hipotiroidismo primario','eje tiroideo']
},
{
  id:'U8-F-Q33', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Curva de función ventricular', sub:'Precarga vs. contractilidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre un cambio de PRECARGA y un cambio de CONTRACTILIDAD en la curva de función ventricular?',
  ops:[
    'Ambos producen exactamente el mismo efecto sobre la curva',
    'Un cambio de precarga mueve al corazón a lo largo de la MISMA curva; un cambio de contractilidad desplaza a toda la curva hacia arriba o hacia abajo',
    'Un cambio de contractilidad mueve al corazón a lo largo de la misma curva; un cambio de precarga desplaza toda la curva',
    'Ninguno de los dos afecta la curva de función ventricular'
  ],
  ok:1,
  clave:'Precarga = movimiento a lo largo de la misma curva. Contractilidad = desplazamiento de toda la curva hacia arriba o abajo.',
  exp:'La curva de función ventricular grafica el volumen sistólico contra la precarga. Un cambio en la PRECARGA mueve al corazón a lo largo de la MISMA curva (más precarga, más arriba en la misma curva, sin cambiar su forma). Un cambio en la CONTRACTILIDAD, en cambio, desplaza a toda la curva hacia arriba (mayor contractilidad) o hacia abajo (menor contractilidad), de modo que la misma precarga ahora produce un volumen sistólico distinto. Distinguir estos dos tipos de cambio es la clave conceptual de este tema.',
  no:{
    0:'No producen el mismo efecto: uno mueve el punto a lo largo de la curva existente, el otro desplaza la curva completa a una posición nueva.',
    2:'Está invertido: es la precarga la que mueve el punto a lo largo de la misma curva, y la contractilidad la que desplaza la curva completa.',
    3:'Ambos sí afectan la curva de función ventricular, cada uno de una forma distinta y bien caracterizada.'
  },
  trampa:'Invertir cuál de los dos factores (precarga o contractilidad) mueve el punto a lo largo de la curva existente y cuál desplaza la curva completa.',
  obj:'Distinguir el efecto de un cambio de precarga del efecto de un cambio de contractilidad sobre la curva de función ventricular.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['curva de función ventricular','precarga','contractilidad','Frank-Starling']
},
{
  id:'U8-F-Q34', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Insuficiencia cardíaca', sub:'Desplazamiento crónico de la curva',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con insuficiencia cardíaca con función sistólica reducida tiene presiones de llenado ventricular elevadas (alta precarga), pero un gasto cardíaco insuficiente para las demandas del cuerpo.',
  enunciado:'¿Qué explica, en términos de la curva de función ventricular, que este paciente tenga presiones de llenado altas sin lograr un gasto cardíaco adecuado?',
  ops:[
    'La curva de función ventricular está desplazada hacia ABAJO de forma crónica: para cualquier nivel de precarga, este corazón genera menos volumen sistólico que uno sano',
    'La curva está desplazada hacia arriba, generando más volumen sistólico de lo normal',
    'La precarga elevada por sí sola siempre garantiza un gasto cardíaco adecuado, sin importar la contractilidad',
    'No existe ninguna relación entre la curva de función ventricular y la insuficiencia cardíaca'
  ],
  ok:0,
  clave:'En la insuficiencia cardíaca sistólica, la curva está desplazada hacia abajo de forma crónica, por lo que la misma precarga produce menos volumen sistólico.',
  exp:'En la insuficiencia cardíaca con función sistólica reducida, la curva de función ventricular está desplazada hacia ABAJO de forma crónica (menor contractilidad): para cualquier nivel de precarga, el corazón genera menos volumen sistólico que un corazón sano. Esto explica por qué estos pacientes con frecuencia tienen presiones de llenado elevadas (alta precarga, en un intento compensatorio del organismo de "empujar" la curva) sin lograr un gasto cardíaco adecuado -el problema no es la falta de precarga, sino la curva desplazada hacia abajo por la contractilidad reducida.',
  no:{
    1:'Es al revés de lo que ocurre en la insuficiencia cardíaca sistólica: la curva está desplazada hacia ABAJO (menor contractilidad), no hacia arriba.',
    2:'Precisamente el caso descrito muestra que la precarga elevada, por sí sola, NO garantiza un gasto cardíaco adecuado si la curva está desplazada hacia abajo por baja contractilidad.',
    3:'Sí existe una relación directa: la insuficiencia cardíaca sistólica se caracteriza precisamente por un desplazamiento crónico hacia abajo de la curva de función ventricular.'
  },
  trampa:'Asumir que una precarga elevada siempre se traduce en un gasto cardíaco adecuado, sin considerar que la curva completa puede estar desplazada hacia abajo por baja contractilidad.',
  obj:'Explicar el desplazamiento crónico hacia abajo de la curva de función ventricular en la insuficiencia cardíaca sistólica.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['insuficiencia cardíaca','curva de función ventricular','contractilidad reducida','precarga elevada']
},
{
  id:'U8-F-Q35', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Circulación coronaria', sub:'Flujo en diástole',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el flujo coronario del ventrículo izquierdo ocurre principalmente durante la DIÁSTOLE y no durante la sístole?',
  ops:[
    'Porque la presión aórtica es más baja durante la diástole',
    'Porque durante la sístole, la contracción del músculo ventricular comprime mecánicamente a los vasos coronarios que lo atraviesan, reduciendo el flujo pese a la mayor presión aórtica en ese momento',
    'Porque las coronarias solo tienen válvulas que se abren en diástole',
    'El flujo coronario es igual en sístole y diástole'
  ],
  ok:1,
  clave:'La compresión mecánica de los vasos coronarios durante la contracción sistólica reduce el flujo en ese momento, pese a la mayor presión aórtica.',
  exp:'Durante la sístole, la contracción del músculo ventricular comprime mecánicamente a los vasos coronarios que lo atraviesan (especialmente en el ventrículo izquierdo, de pared gruesa), reduciendo drásticamente el flujo a través de ellos, pese a que es precisamente cuando la presión aórtica (la fuerza que empuja la sangre hacia las coronarias) es más alta. Por eso, a diferencia de la mayoría de los lechos vasculares del cuerpo, el flujo coronario del ventrículo izquierdo ocurre principalmente durante la DIÁSTOLE, cuando el músculo se relaja y deja de comprimir a los vasos.',
  no:{
    0:'La presión aórtica es, de hecho, MÁS ALTA durante la sístole, no más baja; el factor determinante del bajo flujo sistólico es la compresión mecánica, no la presión aórtica.',
    2:'Las coronarias no tienen válvulas propias que se abran solo en diástole; el fenómeno se explica por la compresión mecánica del músculo circundante durante la sístole.',
    3:'El flujo coronario es marcadamente distinto entre sístole y diástole, siendo predominante durante esta última.'
  },
  trampa:'Buscar la explicación en la presión aórtica (que de hecho es mayor en sístole) en vez de en la compresión mecánica de los vasos coronarios por la contracción del propio músculo que atraviesan.',
  obj:'Explicar por qué el flujo coronario del ventrículo izquierdo ocurre principalmente en diástole.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['circulación coronaria','diástole','compresión sistólica','flujo coronario']
},
{
  id:'U8-F-Q36', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Reserva coronaria', sub:'Angina de esfuerzo vs. reposo',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con una estenosis coronaria moderada presenta angina solo durante el ejercicio intenso, con flujo coronario en reposo aparentemente normal.',
  enunciado:'¿Qué concepto explica que la angina aparezca primero con el esfuerzo y no en reposo, en las etapas iniciales de una estenosis coronaria?',
  ops:[
    'La estenosis progresiva consume primero la RESERVA coronaria (la capacidad de aumentar el flujo ante mayor demanda), antes de comprometer el flujo BASAL en reposo',
    'El flujo coronario nunca varía según el nivel de estenosis',
    'La angina de esfuerzo no tiene relación con la circulación coronaria',
    'El flujo basal siempre se compromete antes que la reserva coronaria'
  ],
  ok:0,
  clave:'La estenosis progresiva agota primero la reserva coronaria (esfuerzo); el flujo basal en reposo se compromete solo en etapas más avanzadas.',
  exp:'La reserva coronaria es la capacidad del flujo coronario de aumentar por encima de su nivel basal ante una mayor demanda, como durante el ejercicio. Una estenosis coronaria progresiva reduce primero esta reserva -el flujo basal en reposo puede seguir siendo normal, porque la vasodilatación compensatoria distal a la estenosis mantiene un flujo adecuado en reposo-, y solo cuando la estenosis es muy severa el flujo basal mismo se ve comprometido. Esto explica por qué la angina típicamente aparece primero con el esfuerzo (cuando se agota la reserva ya reducida) y solo en etapas más avanzadas aparece también en reposo.',
  no:{
    1:'El flujo coronario sí varía según el grado de estenosis, tanto en reposo como durante el esfuerzo, especialmente a medida que la estenosis progresa.',
    2:'La angina de esfuerzo tiene una relación directa con la circulación coronaria: refleja precisamente el agotamiento de la reserva coronaria ante la mayor demanda del ejercicio.',
    3:'Es al revés: la reserva coronaria se agota PRIMERO; el flujo basal en reposo se compromete solo en etapas más avanzadas de la estenosis.'
  },
  trampa:'No distinguir entre el flujo basal (en reposo) y la reserva coronaria (capacidad de aumentar el flujo), que se afectan en momentos distintos de la progresión de una estenosis coronaria.',
  obj:'Explicar por qué la angina de esfuerzo precede a la angina de reposo en la progresión de una estenosis coronaria.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['reserva coronaria','angina de esfuerzo','estenosis coronaria','flujo basal']
},
{
  id:'U8-F-Q37', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Volúmenes pulmonares', sub:'Capacidad vital',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué volúmenes pulmonares componen la capacidad vital?',
  ops:[
    'Volumen de reserva inspiratoria + volumen corriente + volumen de reserva espiratoria (SIN el volumen residual)',
    'Solo el volumen corriente',
    'Volumen de reserva inspiratoria + volumen corriente + volumen de reserva espiratoria + volumen residual',
    'Solo el volumen residual'
  ],
  ok:0,
  clave:'La capacidad vital es la suma de reserva inspiratoria, corriente y reserva espiratoria, sin incluir el volumen residual.',
  exp:'La capacidad vital es la suma del volumen de reserva inspiratoria, el volumen corriente y el volumen de reserva espiratoria -es decir, todo el aire que se puede movilizar voluntariamente, desde una inspiración máxima hasta una espiración máxima, SIN incluir el volumen residual (que, por definición, nunca puede expulsarse ni siquiera con la espiración forzada máxima). Si se le suma el volumen residual a la capacidad vital, se obtiene la capacidad pulmonar total, un parámetro distinto.',
  no:{
    1:'El volumen corriente es solo uno de los tres componentes de la capacidad vital, no la capacidad vital completa por sí solo.',
    2:'Esa suma (incluyendo el volumen residual) corresponde a la capacidad pulmonar TOTAL, no a la capacidad vital.',
    3:'El volumen residual por sí solo no constituye ninguna capacidad pulmonar completa; es uno de los cuatro volúmenes básicos.'
  },
  trampa:'Incluir por error el volumen residual dentro de la capacidad vital, confundiéndola con la capacidad pulmonar total.',
  obj:'Definir la capacidad vital como la suma de tres volúmenes pulmonares, sin el volumen residual.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['capacidad vital','volumen residual','capacidad pulmonar total','volúmenes pulmonares']
},
{
  id:'U8-F-Q38', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Espirometría', sub:'Limitación para medir volumen residual',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la espirometría convencional NO puede medir directamente el volumen residual ni la capacidad pulmonar total?',
  ops:[
    'Porque la espirometría mide volúmenes que el paciente efectivamente moviliza a través del espirómetro, y el volumen residual es, por definición, el aire que nunca puede exhalarse',
    'Porque la espirometría no puede medir ningún volumen pulmonar',
    'Porque el volumen residual y la capacidad pulmonar total no existen realmente',
    'Porque la espirometría solo se usa para medir la frecuencia cardíaca'
  ],
  ok:0,
  clave:'La espirometría mide aire movilizado; el volumen residual, por definición, nunca se exhala, así que no puede medirse así.',
  exp:'La espirometría convencional mide volúmenes de aire que el paciente efectivamente moviliza (inspira o espira) a través del espirómetro. Como el volumen residual es, por definición, el aire que NUNCA sale del pulmón (ni siquiera con la espiración forzada máxima), la espirometría simple no puede medirlo directamente, y tampoco puede medir ninguna capacidad que lo incluya (capacidad residual funcional, capacidad pulmonar total). Para eso se necesitan técnicas adicionales, como la dilución de helio o la pletismografía corporal.',
  no:{
    1:'La espirometría sí mide varios volúmenes y capacidades pulmonares (volumen corriente, capacidad vital, entre otros), solo que no puede medir aquellos que incluyen al volumen residual.',
    2:'El volumen residual y la capacidad pulmonar total sí existen y son medibles, solo que con técnicas distintas a la espirometría simple.',
    3:'La espirometría mide volúmenes y flujos respiratorios, no la frecuencia cardíaca, que es un parámetro cardiovascular no respiratorio.'
  },
  trampa:'No reconocer la limitación específica de la espirometría (solo mide aire movilizado) como la razón de que no pueda medir el volumen residual.',
  obj:'Explicar por qué la espirometría no puede medir directamente el volumen residual.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['espirometría','volumen residual','pletismografía','dilución de helio']
},
{
  id:'U8-F-Q39', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Ejercicio', sub:'Redistribución del flujo sanguíneo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Durante el ejercicio dinámico intenso, ¿qué ocurre con el flujo sanguíneo hacia el territorio esplácnico (intestinal) y renal?',
  ops:[
    'Aumenta proporcionalmente igual que en el músculo activo',
    'Disminuye de forma relativa (vasoconstricción), para priorizar el flujo hacia el músculo esquelético activo',
    'Se detiene por completo, sin ningún flujo residual',
    'No cambia en absoluto durante el ejercicio'
  ],
  ok:1,
  clave:'Durante el ejercicio intenso, hay vasoconstricción relativa en territorios esplácnico y renal, priorizando el flujo hacia el músculo activo.',
  exp:'Durante el ejercicio dinámico, ocurre una redistribución regional del flujo sanguíneo: vasodilatación local en el músculo esquelético activo (por metabolitos vasodilatadores como CO2, potasio y adenosina) y vasoconstricción relativa en territorios menos prioritarios en ese momento, como el esplácnico y el renal, para priorizar el flujo hacia el músculo que está trabajando. No es un aumento uniforme de flujo en todo el cuerpo, sino una redistribución dirigida según la demanda metabólica regional.',
  no:{
    0:'No aumenta proporcionalmente igual; al contrario, disminuye de forma relativa en estos territorios mientras aumenta marcadamente en el músculo activo.',
    2:'No se detiene por completo; sigue habiendo flujo residual hacia estos territorios, solo que reducido de forma relativa comparado con el reposo.',
    3:'Sí cambia de forma significativa durante el ejercicio, como parte de la redistribución regional del flujo sanguíneo.'
  },
  trampa:'Asumir que el aumento del gasto cardíaco durante el ejercicio se distribuye uniformemente a todos los territorios, sin considerar la redistribución regional dirigida.',
  obj:'Describir la redistribución del flujo sanguíneo hacia los territorios esplácnico y renal durante el ejercicio.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['ejercicio','redistribución del flujo sanguíneo','vasoconstricción esplácnica','músculo esquelético activo']
},
{
  id:'U8-F-Q40', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'VO2 máx', sub:'Efecto del entrenamiento',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo mejora principalmente el entrenamiento aeróbico regular el consumo de oxígeno máximo (VO2 máx)?',
  ops:[
    'Principalmente aumentando la frecuencia cardíaca máxima alcanzable',
    'Principalmente aumentando el volumen sistólico máximo (por hipertrofia cardíaca fisiológica y mayor volumen sanguíneo), mientras la frecuencia cardíaca máxima tiende a cambiar poco o incluso disminuir ligeramente en reposo',
    'El entrenamiento aeróbico no tiene ningún efecto sobre el VO2 máx',
    'Únicamente mejorando la función pulmonar, sin ningún cambio cardiovascular'
  ],
  ok:1,
  clave:'El entrenamiento aeróbico mejora el VO2 máx principalmente por el aumento del volumen sistólico máximo, no de la frecuencia cardíaca máxima.',
  exp:'El entrenamiento aeróbico regular aumenta el VO2 máx principalmente al aumentar el volumen sistólico máximo (por hipertrofia cardíaca fisiológica y mayor volumen sanguíneo), más que al aumentar la frecuencia cardíaca máxima, que de hecho tiende a disminuir ligeramente en reposo y durante el ejercicio submáximo con el entrenamiento (bradicardia del atleta, reflejo de un mayor tono vagal). El corazón entrenado bombea más sangre por cada latido, no necesariamente late más rápido en su máximo.',
  no:{
    0:'La frecuencia cardíaca máxima cambia poco con el entrenamiento (está determinada en gran parte por la edad); el principal mecanismo de mejora es el aumento del volumen sistólico.',
    2:'El entrenamiento aeróbico sí tiene un efecto bien documentado y significativo sobre el VO2 máx, a través de adaptaciones cardiovasculares.',
    3:'Aunque puede haber cierta adaptación pulmonar, el mecanismo principal de mejora del VO2 máx con el entrenamiento es cardiovascular (volumen sistólico), no exclusivamente pulmonar.'
  },
  trampa:'Asumir que el entrenamiento mejora el VO2 máx principalmente acelerando el corazón al máximo, cuando el mecanismo real es que cada latido bombea más sangre (mayor volumen sistólico).',
  obj:'Explicar el mecanismo principal por el que el entrenamiento aeróbico mejora el VO2 máx.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['VO2 máx','entrenamiento aeróbico','volumen sistólico','bradicardia del atleta']
},
{
  id:'U8-F-Q41', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Umbral anaeróbico', sub:'Concepto y entrenamiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ocurre fisiológicamente cuando un ejercicio supera el umbral anaeróbico de una persona?',
  ops:[
    'El metabolismo anaeróbico deja de contribuir por completo a la producción de energía',
    'El metabolismo anaeróbico comienza a contribuir de forma creciente, con acumulación progresiva de lactato, limitando la duración sostenible del esfuerzo',
    'El ejercicio se vuelve automáticamente más sostenible a largo plazo',
    'El umbral anaeróbico es un concepto sin ninguna aplicación práctica en el entrenamiento'
  ],
  ok:1,
  clave:'Por encima del umbral anaeróbico, la contribución del metabolismo anaeróbico crece, con acumulación de lactato que limita la duración del esfuerzo.',
  exp:'El umbral anaeróbico es la intensidad de ejercicio a partir de la cual el metabolismo anaeróbico (glucólisis anaeróbica, con producción de ácido láctico) comienza a contribuir de forma creciente a la producción de energía, porque el aporte de oxígeno vía metabolismo aeróbico ya no es suficiente para la demanda energética en ese nivel de intensidad. Por encima del umbral, la acumulación progresiva de lactato y el descenso del pH muscular limitan la duración del esfuerzo, que solo puede mantenerse por periodos breves. El entrenamiento de resistencia desplaza este umbral hacia intensidades más altas.',
  no:{
    0:'Es al revés: por encima del umbral, el metabolismo anaeróbico contribuye CADA VEZ MÁS, no deja de contribuir.',
    2:'Por encima del umbral, el ejercicio se vuelve MENOS sostenible a largo plazo, por la acumulación progresiva de lactato, no más sostenible.',
    3:'El umbral anaeróbico tiene aplicaciones prácticas directas en el diseño de programas de entrenamiento de resistencia, precisamente porque delimita la intensidad sostenible a largo plazo.'
  },
  trampa:'Invertir el efecto de superar el umbral anaeróbico sobre la sostenibilidad del esfuerzo, o subestimar su relevancia práctica.',
  obj:'Explicar el concepto de umbral anaeróbico y sus consecuencias sobre la sostenibilidad del ejercicio.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['umbral anaeróbico','ácido láctico','entrenamiento de resistencia','metabolismo anaeróbico']
},
{
  id:'U8-F-Q42', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Esfínter esofágico inferior', sub:'Reflujo gastroesofágico',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta episodios frecuentes de ardor retroesternal (pirosis), sugestivos de reflujo del contenido gástrico hacia el esófago.',
  enunciado:'¿Qué disfunción del esfínter esofágico inferior explica mejor este cuadro?',
  ops:[
    'Un tono basal aumentado del esfínter, que impide el paso de cualquier contenido',
    'Relajaciones inapropiadas o tono basal reducido del esfínter esofágico inferior, que normalmente se mantiene cerrado para prevenir el reflujo',
    'El esfínter esofágico inferior no tiene ninguna función relacionada con el reflujo',
    'El esfínter pilórico es el responsable directo de este síntoma'
  ],
  ok:1,
  clave:'La incompetencia del esfínter esofágico inferior (relajaciones inapropiadas o tono reducido) es la base fisiopatológica del reflujo gastroesofágico.',
  exp:'El esfínter esofágico inferior, situado entre el esófago y el estómago, se mantiene normalmente contraído (tónicamente cerrado) para prevenir el reflujo del contenido gástrico ácido hacia el esófago, relajándose transitoriamente solo para permitir el paso del bolo alimenticio durante la deglución. Su incompetencia -por relajaciones inapropiadas (fuera del contexto de la deglución) o por un tono basal reducido- es la base fisiopatológica de la enfermedad por reflujo gastroesofágico, permitiendo que el contenido ácido gástrico ascienda hacia el esófago y produzca los síntomas característicos como la pirosis.',
  no:{
    0:'Un tono AUMENTADO del esfínter dificultaría el paso normal del alimento (como en la acalasia), no produciría reflujo; el reflujo se asocia más bien a un tono reducido o relajaciones inapropiadas.',
    2:'El esfínter esofágico inferior tiene una función central y bien establecida en la prevención del reflujo gastroesofágico.',
    3:'El esfínter pilórico regula el vaciamiento gástrico hacia el duodeno, un proceso distinto, sin relación directa con el reflujo hacia el esófago.'
  },
  trampa:'Confundir el mecanismo de la disfunción (tono aumentado vs. reducido) o atribuir el reflujo a un esfínter distinto (pilórico) que regula un proceso diferente.',
  obj:'Explicar la base fisiopatológica del reflujo gastroesofágico por incompetencia del esfínter esofágico inferior.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['esfínter esofágico inferior','reflujo gastroesofágico','pirosis','tono basal']
},
{
  id:'U8-F-Q43', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Complejo motor migratorio', sub:'Función interdigestiva',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple el complejo motor migratorio, y en qué periodo ocurre?',
  ops:[
    'Ocurre solo durante la digestión activa, mezclando el contenido intestinal',
    'Ocurre en el periodo interdigestivo (entre comidas), "barriendo" restos de alimento no digerido, secreciones y bacterias hacia el colon',
    'No tiene ninguna función real, es un patrón sin propósito',
    'Solo ocurre en el estómago, sin extenderse al intestino delgado'
  ],
  ok:1,
  clave:'El complejo motor migratorio ocurre entre comidas y "barre" el contenido residual del intestino delgado hacia el colon.',
  exp:'Entre comidas (en el periodo interdigestivo), aparece el complejo motor migratorio: ondas de contracción intensa que se originan en el estómago y se propagan progresivamente a lo largo del intestino delgado, cada 90 a 120 minutos aproximadamente, con la función de "barrer" los restos de alimento no digerido, secreciones y bacterias hacia el colon, manteniendo relativamente limpio y estéril al intestino delgado entre comidas. Este patrón se interrumpe en cuanto se ingiere alimento, reemplazado por el patrón de motilidad postprandial.',
  no:{
    0:'Es al revés: el complejo motor migratorio ocurre en el periodo INTERdigestivo (entre comidas), no durante la digestión activa, que tiene su propio patrón de motilidad distinto (contracciones de segmentación).',
    2:'Sí tiene una función real y bien establecida: mantener limpio el intestino delgado entre comidas, barriendo residuos y bacterias hacia el colon.',
    3:'Se origina en el estómago pero se propaga a lo largo de todo el intestino delgado, no se limita solo al estómago.'
  },
  trampa:'Confundir el periodo en que ocurre el complejo motor migratorio (interdigestivo) con el periodo postprandial, que tiene un patrón de motilidad distinto.',
  obj:'Describir la función y el momento de aparición del complejo motor migratorio.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['complejo motor migratorio','periodo interdigestivo','sobrecrecimiento bacteriano','motilidad intestinal']
},
{
  id:'U8-F-Q44', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Complejo motor migratorio', sub:'Sobrecrecimiento bacteriano',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con una neuropatía que altera la motilidad interdigestiva del intestino delgado desarrolla sobrecrecimiento bacteriano en ese segmento.',
  enunciado:'¿Qué mecanismo fisiológico conecta la alteración de la motilidad interdigestiva con el desarrollo de sobrecrecimiento bacteriano?',
  ops:[
    'La pérdida del complejo motor migratorio, que normalmente "barre" bacterias y residuos del intestino delgado entre comidas, permite su acumulación y proliferación',
    'El sobrecrecimiento bacteriano no tiene relación con la motilidad intestinal',
    'La motilidad interdigestiva no existe en el intestino delgado',
    'El complejo motor migratorio solo actúa en el colon, no en el intestino delgado'
  ],
  ok:0,
  clave:'La pérdida del complejo motor migratorio elimina el mecanismo de "barrido" periódico, permitiendo la acumulación bacteriana en el intestino delgado.',
  exp:'El complejo motor migratorio cumple la función de "barrer" periódicamente los restos de alimento, secreciones y bacterias del intestino delgado hacia el colon durante el periodo interdigestivo. Cuando este patrón de motilidad se altera (como en ciertas neuropatías que afectan la inervación intestinal), se pierde ese mecanismo periódico de limpieza, lo que permite que las bacterias se acumulen y proliferen en el intestino delgado en cantidades anormalmente altas -el sobrecrecimiento bacteriano del intestino delgado, con consecuencias como malabsorción y síntomas digestivos.',
  no:{
    1:'Sí existe una relación bien documentada: la alteración del complejo motor migratorio es un mecanismo reconocido de sobrecrecimiento bacteriano del intestino delgado.',
    2:'La motilidad interdigestiva sí existe y es precisamente el complejo motor migratorio, un patrón de motilidad bien caracterizado del intestino delgado (y el estómago) entre comidas.',
    3:'El complejo motor migratorio se origina en el estómago y se propaga específicamente a lo largo del intestino delgado, no del colon.'
  },
  trampa:'No conectar la pérdida de un mecanismo de motilidad periódico específico (el complejo motor migratorio) con su consecuencia directa: la acumulación bacteriana sin ese "barrido" regular.',
  obj:'Explicar la relación entre la alteración del complejo motor migratorio y el sobrecrecimiento bacteriano del intestino delgado.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['complejo motor migratorio','sobrecrecimiento bacteriano','neuropatía intestinal','motilidad interdigestiva']
},
{
  id:'U8-F-Q45', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Esfínteres uretrales', sub:'Interno vs. externo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre el esfínter uretral interno y el externo en términos de control?',
  ops:[
    'Ambos están bajo control voluntario',
    'El interno es músculo liso bajo control autónomo (involuntario); el externo es músculo estriado bajo control voluntario aprendido',
    'Ambos son músculo estriado bajo control voluntario',
    'El externo es involuntario y el interno es voluntario'
  ],
  ok:1,
  clave:'Esfínter interno = músculo liso, autónomo, involuntario. Esfínter externo = músculo estriado, control voluntario aprendido.',
  exp:'El esfínter uretral interno es músculo liso, bajo control autónomo, involuntario, y se relaja automáticamente como parte del reflejo miccional cuando la vejiga se llena lo suficiente. El esfínter uretral externo es músculo estriado, bajo control somático voluntario, aprendido durante la infancia, que puede contraerse voluntariamente para posponer la micción incluso cuando el reflejo autónomo ya se activó, y relajarse voluntariamente para permitir la micción en el momento apropiado. El control consciente de la micción se ejerce sobre el externo, no sobre el interno.',
  no:{
    0:'Solo el esfínter externo está bajo control voluntario; el interno es autónomo e involuntario.',
    2:'Solo el esfínter externo es músculo estriado voluntario; el interno es músculo liso bajo control autónomo.',
    3:'Está invertido: el interno es el involuntario (autónomo), y el externo es el voluntario (control aprendido).'
  },
  trampa:'Invertir cuál esfínter (interno o externo) está bajo control voluntario y cuál es autónomo e involuntario.',
  obj:'Distinguir el esfínter uretral interno del externo por su tipo de control.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['esfínter uretral interno','esfínter uretral externo','control voluntario','reflejo miccional']
},
{
  id:'U8-F-Q46', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Vejiga neurogénica', sub:'Lesión medular alta',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con una lesión medular torácica alta (por encima del centro sacro de la micción) presenta episodios de micción involuntaria refleja, sin ningún control voluntario posible sobre el momento de orinar.',
  enunciado:'¿Qué tipo de disfunción vesical corresponde a este cuadro, y por qué ocurre?',
  ops:[
    'Vejiga flácida, porque el arco reflejo sacro está destruido',
    'Vejiga espástica o hiperrefléxica: el arco reflejo sacro básico permanece intacto, pero se interrumpió el control voluntario descendente desde el cerebro',
    'No hay ninguna alteración vesical esperable en este tipo de lesión',
    'La vejiga deja de llenarse por completo tras este tipo de lesión'
  ],
  ok:1,
  clave:'Una lesión por encima del centro sacro produce vejiga espástica: el reflejo sacro sigue intacto, pero sin control voluntario descendente.',
  exp:'Una lesión medular por encima del centro sacro de la micción (S2-S4) interrumpe el control voluntario descendente sobre el reflejo miccional, pero el arco reflejo sacro básico permanece intacto: el resultado es una vejiga espástica o hiperrefléxica, que se vacía de forma refleja e involuntaria en cuanto se llena lo suficiente, sin ningún control voluntario posible, porque la señal de "puedo posponer esto" nunca llega desde el cerebro hasta el centro sacro. Esto es distinto de una lesión que afecta directamente al arco reflejo sacro mismo, que produciría una vejiga flácida.',
  no:{
    0:'La vejiga flácida correspondería a una lesión que afecta directamente al arco reflejo sacro (S2-S4) o a los nervios periféricos, no a una lesión por ENCIMA de ese nivel, que deja el arco intacto.',
    2:'Sí hay una alteración vesical esperable y bien caracterizada (vejiga espástica) tras una lesión medular por encima del centro sacro de la micción.',
    3:'La vejiga sigue llenándose con normalidad; lo que se pierde es el control voluntario sobre cuándo vaciarla, no la capacidad de llenado en sí.'
  },
  trampa:'Confundir el tipo de disfunción vesical según el nivel de la lesión: una lesión ALTA (por encima de S2-S4) da vejiga espástica, mientras que una lesión que afecta directamente al arco sacro da vejiga flácida -son mecanismos y niveles distintos.',
  obj:'Explicar el mecanismo de la vejiga espástica tras una lesión medular por encima del centro sacro de la micción.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['vejiga espástica','lesión medular alta','reflejo miccional','centro sacro de la micción']
},
{
  id:'U8-F-Q47', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Vejiga neurogénica', sub:'Lesión del arco sacro',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con una lesión de cola de caballo (que afecta directamente a los nervios sacros S2-S4) presenta retención urinaria progresiva con incontinencia por rebosamiento, sin contracciones vesicales eficaces.',
  enunciado:'¿Qué tipo de disfunción vesical corresponde a este cuadro?',
  ops:[
    'Vejiga espástica, con micción refleja involuntaria frecuente',
    'Vejiga flácida o arrefléxica: se interrumpe el propio arco reflejo sacro, la vejiga se sobredistiende progresivamente sin contraerse de forma eficaz',
    'No hay ninguna alteración vesical esperable en este tipo de lesión',
    'El control voluntario sobre la micción permanece completamente intacto'
  ],
  ok:1,
  clave:'La lesión directa del arco sacro (S2-S4) produce vejiga flácida, con retención e incontinencia por rebosamiento.',
  exp:'Una lesión que afecta directamente al centro sacro de la micción o a los nervios periféricos que lo conectan con la vejiga (como en una lesión de cola de caballo) interrumpe el propio arco reflejo miccional: el resultado es una vejiga flácida o arrefléxica, que se sobredistiende progresivamente sin contraerse de forma eficaz, con retención urinaria e incontinencia por rebosamiento (la vejiga tan llena que el exceso se escapa pasivamente). Esto es distinto de la vejiga espástica, que ocurre cuando el arco reflejo sacro permanece intacto pero se pierde el control voluntario descendente desde una lesión más alta.',
  no:{
    0:'La vejiga espástica correspondería a una lesión por ENCIMA del centro sacro, que deja el arco reflejo intacto; en este caso la lesión afecta directamente al arco sacro mismo, produciendo el patrón opuesto (flácido).',
    2:'Sí hay una alteración vesical esperable y bien caracterizada (vejiga flácida) tras una lesión que afecta directamente al arco reflejo sacro.',
    3:'El control voluntario no puede ejercerse eficazmente si el propio arco reflejo básico sobre el que actuaría está interrumpido; la disfunción es mucho más profunda que solo una pérdida de control voluntario.'
  },
  trampa:'Confundir el patrón de vejiga flácida (lesión directa del arco sacro) con el de vejiga espástica (lesión por encima del arco sacro, que lo deja intacto) -son mecanismos opuestos según el nivel exacto de la lesión.',
  obj:'Explicar el mecanismo de la vejiga flácida tras una lesión que afecta directamente al arco reflejo sacro.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['vejiga flácida','lesión de cola de caballo','incontinencia por rebosamiento','arco reflejo sacro']
},
{
  id:'U8-F-Q48', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Reflejo miccional', sub:'Componentes del arco reflejo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué dos eventos coordina el reflejo miccional básico cuando se activa por la distensión vesical?',
  ops:[
    'Contracción del detrusor y contracción simultánea del esfínter uretral interno',
    'Contracción del músculo detrusor (inervado por el parasimpático) y relajación coordinada del esfínter uretral interno',
    'Relajación del detrusor y contracción del esfínter uretral interno',
    'El reflejo miccional no involucra al músculo detrusor'
  ],
  ok:1,
  clave:'El reflejo miccional coordina la contracción del detrusor con la relajación del esfínter uretral interno.',
  exp:'Cuando los receptores de estiramiento de la pared vesical detectan la distensión progresiva y envían señales aferentes hacia la médula espinal sacra, se activa el reflejo miccional: contracción del músculo detrusor (la capa muscular de la pared vesical, inervada por el parasimpático) coordinada con la relajación del esfínter uretral interno (músculo liso, bajo control autónomo). Ambos eventos deben ocurrir de forma coordinada para que la micción sea eficaz: si el detrusor se contrajera sin relajación del esfínter interno, la vejiga no podría vaciarse eficientemente.',
  no:{
    0:'Si el esfínter interno se contrajera al mismo tiempo que el detrusor, se opondría al flujo de orina; la coordinación normal requiere que el esfínter se RELAJE, no que se contraiga.',
    2:'Es al revés: el reflejo miccional contrae el detrusor (no lo relaja) mientras relaja el esfínter interno (no lo contrae).',
    3:'El músculo detrusor es precisamente el componente central del reflejo miccional, cuya contracción coordinada con la relajación del esfínter es lo que produce la micción.'
  },
  trampa:'Invertir la acción de alguno de los dos componentes del reflejo (detrusor y esfínter interno), que deben actuar de forma coordinada pero en direcciones opuestas entre sí.',
  obj:'Describir la coordinación entre la contracción del detrusor y la relajación del esfínter uretral interno en el reflejo miccional.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['reflejo miccional','músculo detrusor','esfínter uretral interno','médula sacra']
},
{
  id:'U8-F-Q49', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Fisiología digestiva', sub:'Zimógenos pancreáticos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las enzimas pancreáticas proteolíticas se secretan inicialmente en forma inactiva (zimógenos)?',
  ops:[
    'Porque el páncreas no puede producir enzimas activas',
    'Para evitar que el propio páncreas se autodigiera; las enzimas se activan solo dentro de la luz duodenal',
    'Porque las enzimas inactivas digieren mejor las proteínas',
    'No hay ninguna razón funcional para esta secreción en forma inactiva'
  ],
  ok:1,
  clave:'Los zimógenos protegen al páncreas de autodigestión; se activan solo dentro de la luz intestinal.',
  exp:'Las enzimas proteolíticas del páncreas (tripsina, quimotripsina, carboxipeptidasa) se secretan inicialmente en forma inactiva, como zimógenos, y se activan solo dentro de la luz duodenal, mediante una cascada que comienza con la activación de tripsinógeno a tripsina (por la enteroquinasa del borde en cepillo duodenal), que a su vez activa a las demás. Esta secreción en forma inactiva evita que las enzimas proteolíticas digieran las proteínas del propio tejido pancreático antes de llegar a la luz intestinal, protegiendo al páncreas de autodigestión -cuando este mecanismo falla, se produce la activación prematura de enzimas dentro del propio páncreas, un mecanismo central en la pancreatitis aguda.',
  no:{
    0:'El páncreas sí produce enzimas funcionales; la cuestión es que las secreta inicialmente en forma inactiva por una razón protectora específica, no por incapacidad de producirlas activas.',
    2:'Las enzimas inactivas (zimógenos) no digieren nada hasta que se activan; la forma inactiva no mejora la digestión, la pospone hasta el lugar correcto.',
    3:'Sí existe una razón funcional clara y bien establecida: proteger al propio tejido pancreático de la acción digestiva de sus propias enzimas proteolíticas.'
  },
  trampa:'No reconocer la función protectora específica (evitar autodigestión pancreática) de la secreción de enzimas proteolíticas en forma inactiva.',
  obj:'Explicar la razón fisiológica de la secreción pancreática de enzimas proteolíticas en forma de zimógenos inactivos.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['zimógenos pancreáticos','tripsinógeno','autodigestión pancreática','pancreatitis aguda']
},
{
  id:'U8-F-Q50', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Ciclo cardíaco', sub:'Contracción isovolumétrica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué caracteriza a la fase de contracción isovolumétrica del ciclo cardíaco?',
  ops:[
    'El ventrículo se contrae sin cambiar de volumen, porque todas las válvulas (AV y semilunares) están cerradas en ese momento',
    'Es la fase en que las válvulas semilunares ya están abiertas y la sangre está siendo expulsada',
    'Es la fase de llenado pasivo del ventrículo',
    'Ocurre después de que las válvulas semilunares se cierran'
  ],
  ok:0,
  clave:'En la contracción isovolumétrica, todas las válvulas están cerradas y el ventrículo se contrae sin cambiar su volumen.',
  exp:'Después de que la presión ventricular supera a la auricular (cerrando las válvulas AV, generando R1), ocurre la fase de contracción isovolumétrica: el ventrículo se contrae, aumentando su presión, pero sin cambiar de volumen, porque tanto las válvulas AV como las semilunares están cerradas en ese momento (ni entra ni sale sangre). Esta fase termina cuando la presión ventricular supera a la de la arteria de salida correspondiente, abriendo las válvulas semilunares e iniciando la fase de eyección propiamente dicha.',
  no:{
    1:'Esa descripción corresponde a la fase de eyección, posterior a la contracción isovolumétrica, cuando las válvulas semilunares ya se abrieron.',
    2:'La fase de llenado pasivo ocurre durante la diástole, con las válvulas AV abiertas, un momento distinto de la contracción isovolumétrica sistólica.',
    3:'La contracción isovolumétrica ocurre ANTES de la apertura (no después del cierre) de las válvulas semilunares, al inicio de la sístole.'
  },
  trampa:'Confundir la fase de contracción isovolumétrica con otras fases del ciclo cardíaco (eyección, llenado), o invertir su posición temporal respecto a la apertura de las válvulas semilunares.',
  obj:'Describir la fase de contracción isovolumétrica del ciclo cardíaco y el estado de las válvulas durante esta fase.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['contracción isovolumétrica','ciclo cardíaco','válvulas cardíacas','fase de eyección']
}

]);
