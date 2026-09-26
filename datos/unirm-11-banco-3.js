/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 11, TANDA DE OBSTETRICIA I (1/2)
   Primer banco de esta materia (0 preguntas previas). Prefijo
   U11-OB1-. Cubre los primeros 8 temas: fisiologia del embarazo,
   control prenatal, diagnostico de embarazo, cambios anatomicos
   y fisiologicos, nutricion en el embarazo, ecografia obstetrica
   basica, trabajo de parto normal y mecanismo del parto
   (Q01-Q29).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== OBSTETRICIA I ===================== */
{
  id:'U11-OB1-Q01', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Fisiología del embarazo normal', sub:'Por qué se cuenta desde la última menstruación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la duración del embarazo se calcula desde el primer día de la última menstruación, y no desde la fecha real de la concepción?',
  ops:[
    'Porque la fecha de la última menstruación es un dato conocido y verificable con mayor facilidad que la fecha exacta de la concepción', 'La fecha de la concepción siempre es más fácil de determinar con precisión que la fecha de la última menstruación', 'No existe ninguna razón práctica real para calcular el embarazo desde la última menstruación en vez de la concepción', 'El cálculo desde la última menstruación y desde la concepción siempre arroja exactamente el mismo resultado en días'],
  ok:0,
  clave:'Porque la fecha de la última menstruación es un dato conocido y verificable con mayor facilidad que la fecha exacta de la concepción.',
  exp:'Esta convención se usa porque la fecha de la última menstruación es un dato conocido y verificable con mayor facilidad que la fecha exacta de la concepción, que la mayoría de las mujeres no puede precisar.',
  no:{
    1:'Es precisamente lo contrario: la fecha de la última menstruación es más fácil de precisar que la fecha exacta de la concepción.',
    2:'Sí existe una razón práctica real: la disponibilidad y verificabilidad del dato de la última menstruación.',
    3:'Ambos cálculos no arrojan exactamente el mismo resultado, ya que la concepción ocurre generalmente semanas después del inicio del ciclo.'
  },
  trampa:'Asumir que la fecha de concepción es un dato más fácil de determinar que la fecha de la última menstruación.',
  obj:'Explicar por qué la duración del embarazo se calcula desde la última menstruación y no desde la concepción.',
  ref:'Williams, Obstetricia, cap. 4.',
  tags:['duración del embarazo','cálculo desde última menstruación']
},
{
  id:'U11-OB1-Q02', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Fisiología del embarazo normal', sub:'La edad gestacional como parámetro central',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la edad gestacional se considera el parámetro de referencia central para casi toda decisión obstétrica?',
  ops:[
    'Porque prácticamente toda decisión obstétrica, desde interpretar una ecografía hasta decidir sobre un parto pretérmino, se organiza alrededor de esta edad gestacional', 'La edad gestacional nunca tiene ninguna relación real con las decisiones clínicas tomadas durante el control del embarazo', 'La edad cronológica del embarazo contada de otra forma siempre es más relevante clínicamente que la edad gestacional', 'La edad gestacional solo es relevante para calcular la fecha probable de parto, sin ninguna otra utilidad clínica adicional'],
  ok:0,
  clave:'Porque prácticamente toda decisión obstétrica, desde interpretar una ecografía hasta decidir sobre un parto pretérmino, se organiza alrededor de esta edad gestacional.',
  exp:'La edad gestacional es el parámetro de referencia central para casi toda decisión obstétrica -desde interpretar una ecografía hasta decidir si un parto pretérmino requiere intervención específica, prácticamente todo en obstetricia se organiza alrededor de ella.',
  no:{
    1:'La edad gestacional sí tiene una relación directa y central con prácticamente toda decisión clínica tomada durante el embarazo.',
    2:'Es precisamente lo contrario: la edad gestacional es el parámetro que prevalece, no la edad cronológica contada de otra forma.',
    3:'La edad gestacional tiene múltiples utilidades clínicas, no se limita únicamente al cálculo de la fecha probable de parto.'
  },
  trampa:'Subestimar la centralidad de la edad gestacional como parámetro de referencia para la mayoría de las decisiones obstétricas.',
  obj:'Explicar por qué la edad gestacional es el parámetro central de referencia en la práctica obstétrica.',
  ref:'Williams, Obstetricia, cap. 4.',
  tags:['edad gestacional','parámetro de referencia central']
},
{
  id:'U11-OB1-Q03', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Fisiología del embarazo normal', sub:'Lógica clínica de los tres trimestres',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una gestante consulta por sangrado vaginal, primero a las 8 semanas de embarazo, y meses después nuevamente a las 34 semanas.',
  enunciado:'¿Por qué el diagnóstico diferencial de este mismo síntoma (sangrado vaginal) difiere entre ambas consultas, según la lógica de los trimestres vista en este tema?',
  ops:[
    'Porque cada trimestre tiene su propia lógica clínica predominante, y las causas más probables de sangrado difieren según se trate del primer o del tercer trimestre', 'El diagnóstico diferencial del sangrado vaginal en el embarazo es exactamente el mismo, sin importar el trimestre en que ocurra', 'La división del embarazo en trimestres no tiene ninguna relación real con el diagnóstico diferencial de ningún síntoma', 'El sangrado vaginal en el embarazo nunca amerita un diagnóstico diferencial distinto según la edad gestacional en que ocurre'],
  ok:0,
  clave:'Porque cada trimestre tiene su propia lógica clínica predominante, y las causas más probables de sangrado difieren según se trate del primer o del tercer trimestre.',
  exp:'La división por trimestres organiza tanto el tipo de vigilancia prenatal esperada como el diagnóstico diferencial de un síntoma dado: un sangrado en el primer trimestre sugiere causas distintas a un sangrado en el tercer trimestre.',
  no:{
    1:'Es precisamente lo contrario: el diagnóstico diferencial del sangrado vaginal SÍ difiere significativamente según el trimestre.',
    2:'La división en trimestres sí tiene una relación directa con el diagnóstico diferencial de síntomas como el sangrado vaginal.',
    3:'El sangrado vaginal sí amerita un diagnóstico diferencial distinto según la edad gestacional específica en que ocurre.'
  },
  trampa:'Asumir que el diagnóstico diferencial de un síntoma como el sangrado vaginal es idéntico sin importar el trimestre del embarazo.',
  obj:'Aplicar la lógica de los tres trimestres al diagnóstico diferencial de un mismo síntoma en distintos momentos del embarazo.',
  ref:'Williams, Obstetricia, cap. 4.',
  tags:['cambios fisiológicos del embarazo','lógica de los trimestres']
},
{
  id:'U11-OB1-Q04', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Control prenatal de la gestante', sub:'Por qué el control prenatal adecuado mejora los resultados',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un control prenatal adecuado -iniciado tempranamente y completado con la frecuencia recomendada- se asocia con mejores resultados maternos y perinatales?',
  ops:[
    'Porque permite detectar y manejar oportunamente condiciones que, sin vigilancia, podrían progresar sin ser reconocidas hasta un punto más avanzado y de mayor riesgo', 'El control prenatal nunca ha demostrado ninguna asociación real con mejores resultados maternos o perinatales en el embarazo', 'Un embarazo sin ningún control prenatal siempre tiene exactamente los mismos resultados que uno con control adecuado', 'El control prenatal solo tiene utilidad administrativa, sin ningún impacto real sobre los resultados clínicos del embarazo'],
  ok:0,
  clave:'Porque permite detectar y manejar oportunamente condiciones que, sin vigilancia, podrían progresar sin ser reconocidas hasta un punto más avanzado y de mayor riesgo.',
  exp:'La evidencia acumulada muestra de forma consistente que un control prenatal adecuado se asocia con mejores resultados, precisamente porque permite detectar y manejar oportunamente condiciones que, sin vigilancia, podrían progresar sin ser reconocidas hasta un punto más avanzado y de mayor riesgo.',
  no:{
    1:'El control prenatal sí ha demostrado, de forma consistente, una asociación real con mejores resultados maternos y perinatales.',
    2:'Es precisamente lo contrario: un embarazo sin control prenatal tiene, en general, peores resultados que uno con control adecuado.',
    3:'El control prenatal tiene un impacto clínico real, no solo administrativo, sobre los resultados del embarazo.'
  },
  trampa:'Subestimar el impacto clínico real del control prenatal, tratándolo como un trámite administrativo sin consecuencias en los resultados.',
  obj:'Explicar por qué un control prenatal adecuado se asocia con mejores resultados maternos y perinatales.',
  ref:'Williams, Obstetricia, cap. 9.',
  tags:['control prenatal','detección oportuna de complicaciones']
},
{
  id:'U11-OB1-Q05', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Control prenatal de la gestante', sub:'Componentes de la consulta prenatal de bajo riesgo',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué elementos incluye típicamente la consulta prenatal de bajo riesgo?',
  ops:[
    'Evaluación de la edad gestacional, registro de peso y presión arterial, medición de la altura uterina, auscultación de la frecuencia cardíaca fetal, y revisión de signos de alarma', 'Únicamente la medición del peso de la gestante, sin ninguna otra evaluación adicional relevante en la consulta', 'Solo la auscultación de la frecuencia cardíaca fetal, sin ninguna otra medición o evaluación complementaria', 'Exclusivamente la revisión de estudios de laboratorio, sin ninguna evaluación física directa de la gestante'],
  ok:0,
  clave:'Evaluación de la edad gestacional, registro de peso y presión arterial, medición de la altura uterina, auscultación de la frecuencia cardíaca fetal, y revisión de signos de alarma.',
  exp:'La consulta prenatal de bajo riesgo incluye típicamente: evaluación de la edad gestacional, registro del peso y la presión arterial, medición de la altura uterina, auscultación de la frecuencia cardíaca fetal, revisión de estudios de laboratorio programados, y evaluación de signos de alarma.',
  no:{
    1:'El peso es solo uno de varios componentes; la consulta integra también presión arterial, altura uterina y otros elementos.',
    2:'La frecuencia cardíaca fetal es solo uno de varios componentes de la consulta prenatal completa.',
    3:'Los estudios de laboratorio son solo un componente; la consulta también incluye evaluación física directa de la gestante.'
  },
  trampa:'Reducir la consulta prenatal de bajo riesgo a un solo componente aislado, sin reconocer el conjunto integrado de evaluaciones.',
  obj:'Identificar los elementos que incluye la consulta prenatal de bajo riesgo.',
  ref:'Williams, Obstetricia, cap. 9.',
  tags:['consulta prenatal de bajo riesgo','componentes integrados']
},
{
  id:'U11-OB1-Q06', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Control prenatal de la gestante', sub:'Por qué la frecuencia de controles aumenta en el tercer trimestre',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el calendario de controles prenatales recomienda una frecuencia creciente conforme avanza el embarazo?',
  ops:[
    'Porque el riesgo de complicaciones (trastornos hipertensivos, parto pretérmino, alteraciones del crecimiento fetal) aumenta hacia el tercer trimestre, y una vigilancia más cercana permite una detección más oportuna', 'La frecuencia de controles prenatales siempre debería ser exactamente la misma durante todo el embarazo, sin ninguna variación', 'El riesgo de complicaciones obstétricas es exactamente el mismo en cualquier trimestre del embarazo, sin ninguna variación real', 'Una frecuencia creciente de controles hacia el final del embarazo no aporta ninguna ventaja clínica real comprobada'],
  ok:0,
  clave:'Porque el riesgo de complicaciones (trastornos hipertensivos, parto pretérmino, alteraciones del crecimiento fetal) aumenta hacia el tercer trimestre, y una vigilancia más cercana permite una detección más oportuna.',
  exp:'El calendario sigue una frecuencia creciente porque el riesgo de complicaciones aumenta hacia el tercer trimestre, y una vigilancia más cercana permite una detección e intervención más oportuna -concentrar la vigilancia donde el riesgo real es mayor.',
  no:{
    1:'Es precisamente lo contrario: la frecuencia de controles debe AUMENTAR hacia el final del embarazo, no mantenerse constante.',
    2:'El riesgo de complicaciones SÍ varía según el trimestre, siendo mayor hacia el tercer trimestre del embarazo.',
    3:'Una frecuencia creciente sí aporta una ventaja clínica real, al concentrar la vigilancia donde el riesgo es mayor.'
  },
  trampa:'Asumir que la frecuencia de controles prenatales debería mantenerse uniforme durante todo el embarazo, sin ajustarse al riesgo variable.',
  obj:'Explicar por qué el calendario de controles prenatales recomienda una frecuencia creciente hacia el tercer trimestre.',
  ref:'Williams, Obstetricia, cap. 9.',
  tags:['calendario de controles','frecuencia creciente']
},
{
  id:'U11-OB1-Q07', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Diagnóstico de embarazo', sub:'La beta-hCG como marcador bioquímico',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la beta-hCG y qué papel cumple en el diagnóstico bioquímico del embarazo?',
  ops:[
    'Es la hormona producida por el tejido trofoblástico desde las primeras etapas del embarazo, cuya detección es la base del diagnóstico bioquímico de embarazo', 'La beta-hCG es una proteína producida exclusivamente por el riñón materno, sin ninguna relación real con el diagnóstico de embarazo', 'La beta-hCG solo puede detectarse varias semanas después de la ausencia de la menstruación esperada, nunca antes de ese momento', 'La beta-hCG es un marcador exclusivamente ecográfico, sin ninguna relación con pruebas de sangre o de orina'],
  ok:0,
  clave:'Es la hormona producida por el tejido trofoblástico desde las primeras etapas del embarazo, cuya detección es la base del diagnóstico bioquímico de embarazo.',
  exp:'La beta-hCG es la hormona producida por el tejido trofoblástico desde las primeras etapas del embarazo, y su detección es la base del diagnóstico bioquímico de embarazo, detectable incluso antes de la ausencia de la menstruación esperada.',
  no:{
    1:'La beta-hCG es producida por el tejido trofoblástico, no por el riñón materno.',
    2:'Es precisamente lo contrario: la beta-hCG puede detectarse incluso ANTES de que la mujer note la ausencia de su menstruación.',
    3:'La beta-hCG es un marcador bioquímico, detectable en sangre u orina, no exclusivamente un hallazgo ecográfico.'
  },
  trampa:'Confundir el origen y el momento de detección de la beta-hCG con otros marcadores o hallazgos del diagnóstico de embarazo.',
  obj:'Definir qué es la beta-hCG y su papel en el diagnóstico bioquímico del embarazo.',
  ref:'Williams, Obstetricia, cap. 3.',
  tags:['beta-hCG','diagnóstico bioquímico']
},
{
  id:'U11-OB1-Q08', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Diagnóstico de embarazo', sub:'Diferencia entre signos de presunción y de probabilidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre los signos de presunción y los signos de probabilidad de embarazo?',
  ops:[
    'Los de presunción son síntomas subjetivos referidos por la mujer; los de probabilidad son hallazgos objetivos detectados por el examinador, aunque ninguno confirma el diagnóstico por sí solo', 'Ambos tipos de signos confirman el diagnóstico de embarazo de forma definitiva y absoluta, sin necesidad de ningún hallazgo adicional', 'Los signos de presunción son siempre hallazgos objetivos del examinador, y los de probabilidad son siempre síntomas subjetivos', 'No existe ninguna diferencia real entre los signos de presunción y los signos de probabilidad de embarazo'],
  ok:0,
  clave:'Los de presunción son síntomas subjetivos referidos por la mujer; los de probabilidad son hallazgos objetivos detectados por el examinador, aunque ninguno confirma el diagnóstico por sí solo.',
  exp:'Los signos de presunción son los síntomas subjetivos referidos por la mujer que sugieren embarazo pero no lo confirman por sí solos; los signos de probabilidad son hallazgos objetivos del examinador que aumentan la sospecha, pero tampoco confirman el diagnóstico de forma definitiva.',
  no:{
    1:'Ninguno de los dos tipos de signos confirma el diagnóstico de forma definitiva; se requiere un signo de certeza adicional.',
    2:'Está invertido: los de PRESUNCIÓN son subjetivos, y los de PROBABILIDAD son objetivos, no al revés.',
    3:'Sí existe una diferencia real entre ambos tipos de signos, según su naturaleza subjetiva u objetiva.'
  },
  trampa:'Invertir las categorías de signos de presunción (subjetivos) y de probabilidad (objetivos), o asumir que alguno confirma el diagnóstico por sí solo.',
  obj:'Distinguir los signos de presunción de los signos de probabilidad de embarazo.',
  ref:'Williams, Obstetricia, cap. 3.',
  tags:['signos de presunción y probabilidad','diferencia subjetivo-objetivo']
},
{
  id:'U11-OB1-Q09', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Diagnóstico de embarazo', sub:'Consecuencia de un error en la estimación inicial de edad gestacional',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una gestante tiene una estimación de edad gestacional imprecisa desde el inicio de su control prenatal, basada únicamente en una fecha de última menstruación poco confiable, sin ecografía temprana de confirmación.',
  enunciado:'¿Qué consecuencia clínica puede generar este error inicial a lo largo del resto del embarazo?',
  ops:[
    'Interpretaciones erróneas del crecimiento fetal, decisiones equivocadas sobre el momento óptimo de una intervención, o una clasificación incorrecta de un parto como pretérmino o a término', 'Un error en la estimación inicial de la edad gestacional nunca tiene ninguna consecuencia real sobre el resto del control prenatal', 'La imprecisión en la fecha de última menstruación siempre se corrige automáticamente sin necesidad de ninguna intervención adicional', 'Las decisiones obstétricas posteriores nunca dependen de la precisión de la estimación inicial de la edad gestacional'],
  ok:0,
  clave:'Interpretaciones erróneas del crecimiento fetal, decisiones equivocadas sobre el momento óptimo de una intervención, o una clasificación incorrecta de un parto como pretérmino o a término.',
  exp:'Un error en la estimación inicial de la edad gestacional puede generar consecuencias en cascada durante todo el resto del control prenatal: interpretaciones erróneas del crecimiento fetal, decisiones equivocadas, o una clasificación incorrecta de un parto.',
  no:{
    1:'Este error inicial sí tiene consecuencias reales en cascada sobre el resto del control prenatal y las decisiones obstétricas.',
    2:'La imprecisión en la fecha de última menstruación no se corrige automáticamente; requiere una estimación adicional confiable.',
    3:'Las decisiones obstétricas posteriores sí dependen directamente de la precisión de la estimación inicial de edad gestacional.'
  },
  trampa:'Subestimar las consecuencias en cascada de un error temprano en la estimación de la edad gestacional sobre todo el resto del control prenatal.',
  obj:'Aplicar la comprensión de las consecuencias de un error inicial en la estimación de edad gestacional.',
  ref:'Williams, Obstetricia, cap. 3.',
  tags:['prueba de embarazo','consecuencias de error en edad gestacional']
},
{
  id:'U11-OB1-Q10', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Cambios anatómicos y fisiológicos del embarazo', sub:'Tendencia esperada de la presión arterial',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la tendencia esperada de la presión arterial durante un embarazo normal, y por qué es clínicamente relevante conocerla?',
  ops:[
    'Tiende a disminuir ligeramente durante el segundo trimestre, antes de tender a normalizarse hacia el final; una elevación significativa fuera de este patrón orienta hacia trastornos hipertensivos', 'La presión arterial siempre aumenta de forma progresiva y constante durante todo el embarazo, sin ninguna variación por trimestre', 'La presión arterial nunca cambia de ninguna forma durante un embarazo normal, manteniéndose exactamente igual en los tres trimestres', 'Conocer la tendencia esperada de la presión arterial durante el embarazo no tiene ninguna relevancia clínica real'],
  ok:0,
  clave:'Tiende a disminuir ligeramente durante el segundo trimestre, antes de tender a normalizarse hacia el final; una elevación significativa fuera de este patrón orienta hacia trastornos hipertensivos.',
  exp:'La presión arterial tiende a disminuir ligeramente durante el segundo trimestre, antes de tender a normalizarse hacia el final del embarazo; una presión arterial que se eleva de forma significativa, en vez de seguir este patrón esperado, orienta hacia los trastornos hipertensivos del embarazo.',
  no:{
    1:'Es precisamente lo contrario: la presión arterial tiende a DISMINUIR en el segundo trimestre, no a aumentar de forma constante.',
    2:'La presión arterial sí cambia durante el embarazo, siguiendo un patrón esperado de discreto descenso en el segundo trimestre.',
    3:'Conocer esta tendencia sí es clínicamente relevante, ya que una desviación de ella orienta hacia trastornos hipertensivos.'
  },
  trampa:'Asumir que la presión arterial aumenta de forma progresiva durante todo el embarazo, sin reconocer el patrón esperado de descenso en el segundo trimestre.',
  obj:'Explicar la tendencia esperada de la presión arterial durante el embarazo y su relevancia clínica.',
  ref:'Williams, Obstetricia, cap. 4.',
  tags:['cambios cardiovasculares del embarazo','tendencia de la presión arterial']
},
{
  id:'U11-OB1-Q11', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Cambios anatómicos y fisiológicos del embarazo', sub:'Distinguir la disnea fisiológica de una complicación',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una gestante en el tercer trimestre reporta una sensación leve y gradual de falta de aire, sin dolor torácico ni otros síntomas asociados. Otra gestante reporta una dificultad respiratoria de inicio súbito, acompañada de dolor torácico.',
  enunciado:'¿Cuál de las dos presentaciones corresponde a la disnea fisiológica esperada del embarazo, y cuál amerita evaluación por una posible complicación?',
  ops:[
    'La primera (leve, gradual, sin otros síntomas) es la disnea fisiológica esperada; la segunda (súbita, con dolor torácico) amerita evaluación urgente', 'Ambas presentaciones corresponden exactamente a la disnea fisiológica esperada del embarazo, sin ninguna diferencia clínica real', 'La segunda presentación (súbita, con dolor torácico) es la disnea fisiológica esperada, y la primera amerita evaluación urgente', 'Ninguna de las dos presentaciones descritas tiene ninguna relación real con los cambios respiratorios del embarazo'],
  ok:0,
  clave:'La primera (leve, gradual, sin otros síntomas) es la disnea fisiológica esperada; la segunda (súbita, con dolor torácico) amerita evaluación urgente.',
  exp:'La disnea fisiológica del embarazo es de inicio gradual, leve, sin otros signos de alarma asociados; una disnea de inicio súbito, progresiva, acompañada de dolor torácico señala una complicación real que amerita evaluación urgente.',
  no:{
    1:'Ambas presentaciones NO son equivalentes; solo la primera corresponde al patrón esperado de disnea fisiológica del embarazo.',
    2:'Está invertido: la disnea SÚBITA con dolor torácico es la que amerita evaluación urgente, no la gradual y leve.',
    3:'Ambas presentaciones sí tienen relación directa con los cambios respiratorios del embarazo, una fisiológica y otra patológica.'
  },
  trampa:'Confundir la disnea fisiológica esperada del embarazo (gradual, leve) con una disnea que señala una complicación real (súbita, con dolor torácico).',
  obj:'Distinguir la disnea fisiológica del embarazo de una disnea que amerita evaluación urgente por una posible complicación.',
  ref:'Williams, Obstetricia, cap. 4.',
  tags:['cambios respiratorios del embarazo','disnea fisiológica vs. patológica']
},
{
  id:'U11-OB1-Q12', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Cambios anatómicos y fisiológicos del embarazo', sub:'Interpretación de la creatinina sérica durante el embarazo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un valor de creatinina sérica considerado "normal para la población general" puede en realidad representar una función renal comprometida en una gestante?',
  ops:[
    'Porque el embarazo aumenta significativamente el flujo sanguíneo renal y la tasa de filtración glomerular, por lo que la gestante debería filtrar más de lo habitual, y ese mismo valor "normal" puede ser anormalmente alto para ella', 'La creatinina sérica siempre debe interpretarse exactamente con los mismos valores de referencia, sin importar si la mujer está embarazada o no', 'El embarazo disminuye significativamente el flujo sanguíneo renal, por lo que la función renal esperada durante la gestación es menor que fuera de ella', 'No existe ninguna diferencia real en la interpretación de la función renal entre una mujer embarazada y una no embarazada'],
  ok:0,
  clave:'Porque el embarazo aumenta significativamente el flujo sanguíneo renal y la tasa de filtración glomerular, por lo que la gestante debería filtrar más de lo habitual, y ese mismo valor "normal" puede ser anormalmente alto para ella.',
  exp:'El embarazo aumenta significativamente el flujo sanguíneo renal y la tasa de filtración glomerular; un valor de creatinina "normal para la población general" puede representar una función renal ya comprometida durante la gestación, porque el riñón debería estar filtrando más de lo habitual.',
  no:{
    1:'Es precisamente lo contrario: los valores de referencia deben AJUSTARSE al contexto fisiológico particular del embarazo.',
    2:'Es precisamente lo contrario: el embarazo AUMENTA, no disminuye, el flujo sanguíneo renal y la filtración glomerular.',
    3:'Sí existe una diferencia real en la interpretación de la función renal entre una gestante y una mujer no embarazada.'
  },
  trampa:'Aplicar los valores de referencia habituales de la población general sin ajustarlos al contexto fisiológico particular del embarazo.',
  obj:'Explicar por qué un valor de creatinina "normal" puede ser anormalmente alto en el contexto fisiológico de una gestante.',
  ref:'Williams, Obstetricia, cap. 4.',
  tags:['cambios renales del embarazo','interpretación de creatinina en el embarazo']
},
{
  id:'U11-OB1-Q13', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Nutrición en el embarazo', sub:'Individualización de la ganancia de peso recomendada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la ganancia de peso recomendada durante el embarazo varía según el índice de masa corporal previo de la mujer, en vez de ser un único rango fijo para todas?',
  ops:[
    'Porque una gestante con peso previo normal tiene un rango de ganancia recomendado distinto al de una gestante con sobrepeso u obesidad previa, retomando la evaluación individualizada del estado nutricional', 'La ganancia de peso recomendada durante el embarazo siempre es exactamente el mismo rango fijo para cualquier mujer, sin ninguna individualización', 'El índice de masa corporal previo al embarazo nunca tiene ninguna relación real con la ganancia de peso recomendada durante la gestación', 'Individualizar la ganancia de peso según el estado nutricional previo no aporta ninguna ventaja clínica real comprobada'],
  ok:0,
  clave:'Porque una gestante con peso previo normal tiene un rango de ganancia recomendado distinto al de una gestante con sobrepeso u obesidad previa, retomando la evaluación individualizada del estado nutricional.',
  exp:'La ganancia de peso recomendada varía según el índice de masa corporal previo de la mujer -esta individualización retoma la lógica ya vista en Nutrición general sobre la evaluación del estado nutricional como punto de partida antes de cualquier recomendación.',
  no:{
    1:'Es precisamente lo contrario: la ganancia de peso recomendada NO es un rango fijo único, sino individualizado según el peso previo.',
    2:'El índice de masa corporal previo sí tiene una relación directa con la ganancia de peso recomendada durante la gestación.',
    3:'Individualizar la ganancia de peso sí aporta una ventaja clínica real, evitando riesgos tanto de ganancia insuficiente como excesiva.'
  },
  trampa:'Asumir que la ganancia de peso recomendada en el embarazo es un rango único aplicable a cualquier mujer, sin considerar su estado nutricional previo.',
  obj:'Explicar por qué la ganancia de peso recomendada en el embarazo se individualiza según el índice de masa corporal previo.',
  ref:'Williams, Obstetricia, cap. 8.',
  tags:['ganancia de peso en el embarazo','individualización según IMC previo']
},
{
  id:'U11-OB1-Q14', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Nutrición en el embarazo', sub:'Por qué el ácido fólico se recomienda antes de la concepción',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la suplementación con ácido fólico idealmente debe iniciarse antes de la concepción, y no solo a partir de la primera consulta prenatal?',
  ops:[
    'Porque el tubo neural se forma en las primeras semanas del embarazo, con frecuencia antes de que la mujer siquiera confirme que está embarazada, y para la primera consulta ese periodo crítico ya ha pasado', 'El ácido fólico solo tiene efecto protector si se inicia exactamente a partir de la primera consulta prenatal, nunca antes de ese momento', 'El tubo neural se forma en etapas tardías del embarazo, mucho después de que la mujer ya confirmó su condición de embarazada', 'La suplementación preconcepcional con ácido fólico nunca ha demostrado ninguna ventaja real frente a iniciarla después de confirmar el embarazo'],
  ok:0,
  clave:'Porque el tubo neural se forma en las primeras semanas del embarazo, con frecuencia antes de que la mujer siquiera confirme que está embarazada, y para la primera consulta ese periodo crítico ya ha pasado.',
  exp:'El tubo neural se forma en las primeras semanas del embarazo, con frecuencia antes de que la mujer confirme que está embarazada -para cuando la primera consulta prenatal ocurre, el periodo más crítico de formación del tubo neural con frecuencia ya ha pasado.',
  no:{
    1:'Es precisamente lo contrario: el efecto protector es mayor cuanto antes se inicie, idealmente antes de la primera consulta prenatal.',
    2:'Es precisamente lo contrario: el tubo neural se forma en las PRIMERAS semanas del embarazo, no en etapas tardías.',
    3:'La suplementación preconcepcional sí ha demostrado una ventaja real frente a iniciarla después de confirmar el embarazo.'
  },
  trampa:'Asumir que la suplementación con ácido fólico es igual de efectiva iniciándola tras la confirmación del embarazo que antes de la concepción.',
  obj:'Explicar por qué la suplementación con ácido fólico debe idealmente iniciarse antes de la concepción.',
  ref:'Williams, Obstetricia, cap. 8.',
  tags:['ácido fólico','ventana crítica preconcepcional']
},
{
  id:'U11-OB1-Q15', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Nutrición en el embarazo', sub:'La suplementación complementa, no sustituye, la alimentación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la suplementación en el embarazo complementa, en vez de sustituir, una alimentación variada y de buena calidad nutricional?',
  ops:[
    'Porque la suplementación cubre necesidades específicas difíciles de alcanzar solo con la dieta, pero no reemplaza el valor de una alimentación general adecuada durante todo el embarazo', 'La suplementación en el embarazo siempre sustituye por completo la necesidad de una alimentación variada y de buena calidad', 'Una gestante que recibe suplementación adecuada no necesita ninguna consideración adicional sobre la calidad de su alimentación', 'No existe ninguna diferencia real entre suplementar y mantener una alimentación variada y de buena calidad nutricional'],
  ok:0,
  clave:'Porque la suplementación cubre necesidades específicas difíciles de alcanzar solo con la dieta, pero no reemplaza el valor de una alimentación general adecuada durante todo el embarazo.',
  exp:'La suplementación en el embarazo complementa, no sustituye, una alimentación variada y de buena calidad nutricional: cubre necesidades específicas difíciles de alcanzar solo con la dieta, pero no reemplaza el valor de una alimentación general adecuada.',
  no:{
    1:'Es precisamente lo contrario: la suplementación NO sustituye la necesidad de una alimentación variada y de buena calidad.',
    2:'Una gestante suplementada sí debe mantener consideración sobre la calidad general de su alimentación durante el embarazo.',
    3:'Sí existe una diferencia real: la suplementación cubre necesidades específicas, la alimentación general aporta un valor distinto y necesario.'
  },
  trampa:'Asumir que recibir suplementación nutricional hace innecesaria la atención a la calidad general de la alimentación durante el embarazo.',
  obj:'Explicar por qué la suplementación en el embarazo complementa, sin sustituir, una alimentación variada y de buena calidad.',
  ref:'Williams, Obstetricia, cap. 8.',
  tags:['suplementación en el embarazo','complemento de la alimentación']
},
{
  id:'U11-OB1-Q16', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Ecografía obstétrica básica', sub:'Funciones de la ecografía del primer trimestre',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué funciones cumple la ecografía del primer trimestre?',
  ops:[
    'Confirmar la localización intrauterina del embarazo, estimar la edad gestacional con precisión, determinar el número de fetos, y evaluar marcadores tempranos de riesgo', 'Únicamente medir el peso fetal estimado, sin ninguna otra función relevante en esta etapa temprana del embarazo', 'Solo detectar el sexo del feto, sin ninguna otra utilidad clínica relevante en el primer trimestre', 'La ecografía del primer trimestre no tiene ninguna función clínica específica distinta de la de cualquier otro trimestre'],
  ok:0,
  clave:'Confirmar la localización intrauterina del embarazo, estimar la edad gestacional con precisión, determinar el número de fetos, y evaluar marcadores tempranos de riesgo.',
  exp:'La ecografía del primer trimestre cumple funciones específicas: confirmar la localización intrauterina del embarazo, estimar la edad gestacional con la mayor precisión posible, determinar el número de fetos, y evaluar marcadores tempranos de riesgo.',
  no:{
    1:'La biometría fetal (peso estimado) es más propia del segundo y tercer trimestre, no la función principal del primer trimestre.',
    2:'La detección del sexo fetal no es la función principal ni la más relevante de la ecografía del primer trimestre.',
    3:'La ecografía del primer trimestre sí tiene funciones clínicas específicas y distintas de las de otros momentos del embarazo.'
  },
  trampa:'Confundir las funciones específicas de la ecografía del primer trimestre con las propias de la biometría fetal más tardía.',
  obj:'Identificar las funciones específicas que cumple la ecografía del primer trimestre.',
  ref:'Williams, Obstetricia, cap. 10.',
  tags:['ecografía del primer trimestre','funciones específicas']
},
{
  id:'U11-OB1-Q17', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Ecografía obstétrica básica', sub:'Trayectoria vs. medición aislada en biometría fetal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué en la biometría fetal seriada importa más la trayectoria de crecimiento que una sola medición aislada?',
  ops:[
    'Porque un feto que muestra una desaceleración progresiva en su crecimiento esperado, incluso sin caer por debajo de un umbral absoluto, es una señal que amerita vigilancia adicional', 'Una sola medición aislada de biometría fetal siempre aporta más información clínica que cualquier trayectoria observada en el tiempo', 'La trayectoria de crecimiento fetal a lo largo del embarazo nunca tiene ninguna relación real con el bienestar fetal esperado', 'Un feto que desacelera su crecimiento esperado nunca amerita ninguna vigilancia adicional mientras no caiga bajo un umbral absoluto'],
  ok:0,
  clave:'Porque un feto que muestra una desaceleración progresiva en su crecimiento esperado, incluso sin caer por debajo de un umbral absoluto, es una señal que amerita vigilancia adicional.',
  exp:'Al igual que la trayectoria de crecimiento ya vista en Pediatría I, lo que más importa en la biometría fetal seriada es la trayectoria a lo largo del embarazo: un feto con desaceleración progresiva, incluso sin caer bajo un umbral absoluto, amerita vigilancia adicional.',
  no:{
    1:'Es precisamente lo contrario: la trayectoria en el tiempo aporta más información clínica que una medición aislada.',
    2:'La trayectoria de crecimiento fetal sí tiene una relación directa y relevante con el bienestar fetal esperado.',
    3:'Un feto que desacelera su crecimiento sí amerita vigilancia adicional, incluso antes de caer bajo un umbral absoluto.'
  },
  trampa:'Confiar únicamente en una medición aislada de biometría fetal, sin considerar la trayectoria de crecimiento a lo largo del embarazo.',
  obj:'Explicar por qué la trayectoria de crecimiento en la biometría fetal seriada es más informativa que una medición aislada.',
  ref:'Williams, Obstetricia, cap. 10.',
  tags:['biometría fetal','trayectoria de crecimiento']
},
{
  id:'U11-OB1-Q18', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Ecografía obstétrica básica', sub:'Por qué no repetir ecografías sin indicación clara',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué repetir ecografías obstétricas de rutina sin una indicación clínica clara no se considera una buena práctica?',
  ops:[
    'Porque no mejora los resultados del embarazo y consume recursos que podrían dirigirse a otras prioridades del sistema de salud, retomando la lógica de indicadores de gestión ya vista', 'Repetir ecografías sin indicación clínica siempre mejora significativamente los resultados obstétricos del embarazo evaluado', 'Los recursos diagnósticos utilizados sin un propósito clínico específico nunca representan ningún costo real para el sistema de salud', 'La ecografía obstétrica de rutina reemplaza completamente la necesidad de la evaluación clínica sistemática del control prenatal'],
  ok:0,
  clave:'Porque no mejora los resultados del embarazo y consume recursos que podrían dirigirse a otras prioridades del sistema de salud, retomando la lógica de indicadores de gestión ya vista.',
  exp:'Repetir ecografías sin una indicación clínica clara no mejora los resultados del embarazo y consume recursos que podrían dirigirse a otras prioridades del sistema de salud, retomando la lógica ya vista sobre indicadores de gestión hospitalaria.',
  no:{
    1:'Es precisamente lo contrario: repetir ecografías sin indicación clara NO mejora los resultados obstétricos del embarazo.',
    2:'Cualquier recurso diagnóstico utilizado sin propósito clínico claro sí representa un costo real para el sistema de salud.',
    3:'La ecografía de rutina complementa, pero NO reemplaza, la evaluación clínica sistemática ya vista en control prenatal.'
  },
  trampa:'Asumir que más ecografías siempre significan mejor atención, sin considerar el uso eficiente de recursos con propósito clínico claro.',
  obj:'Explicar por qué repetir ecografías sin indicación clínica clara no se considera buena práctica.',
  ref:'Williams, Obstetricia, cap. 10.',
  tags:['ecografía obstétrica de rutina','uso eficiente de recursos diagnósticos']
},
{
  id:'U11-OB1-Q19', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Trabajo de parto normal', sub:'Las fases del primer periodo del trabajo de parto',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿En qué dos fases se divide el primer periodo (dilatación) del trabajo de parto?',
  ops:[
    'Fase latente (dilatación más lenta) y fase activa (dilatación más rápida y progresiva)', 'Fase expulsiva y fase de alumbramiento, ambas correspondientes al primer periodo del trabajo de parto', 'El primer periodo del trabajo de parto no se divide en ninguna fase específica reconocida clínicamente', 'Fase de encajamiento y fase de rotación, ambas correspondientes al primer periodo del trabajo de parto'],
  ok:0,
  clave:'Fase latente (dilatación más lenta) y fase activa (dilatación más rápida y progresiva).',
  exp:'El primer periodo (dilatación) se divide en una fase latente (dilatación más lenta, hasta aproximadamente 5-6 cm) y una fase activa (dilatación más rápida y progresiva).',
  no:{
    1:'La fase expulsiva corresponde al segundo periodo, y el alumbramiento al tercer periodo, no al primer periodo de dilatación.',
    2:'El primer periodo sí se divide en dos fases reconocidas clínicamente: latente y activa.',
    3:'El encajamiento y la rotación son parte del mecanismo del parto, no de las fases del primer periodo de dilatación.'
  },
  trampa:'Confundir las fases del primer periodo (latente y activa) con los periodos del trabajo de parto o con el mecanismo del parto.',
  obj:'Identificar las dos fases del primer periodo del trabajo de parto.',
  ref:'Williams, Obstetricia, cap. 21.',
  tags:['fases del trabajo de parto','fase latente y activa']
},
{
  id:'U11-OB1-Q20', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Trabajo de parto normal', sub:'Diferencia entre contracciones efectivas y de Braxton Hicks',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una gestante en el tercer trimestre reporta contracciones irregulares, generalmente no dolorosas o solo levemente molestas. Al evaluarla, no se documenta ningún cambio cervical progresivo.',
  enunciado:'¿Qué tipo de contracciones son más consistentes con esta descripción, y qué implica para el diagnóstico de trabajo de parto?',
  ops:[
    'Contracciones de Braxton Hicks, que no producen cambio cervical progresivo y no representan trabajo de parto real', 'Contracciones uterinas efectivas, que confirman de inmediato el diagnóstico de trabajo de parto real en esta gestante', 'Esta descripción no corresponde a ningún tipo de contracción reconocido clínicamente en el embarazo', 'El diagnóstico de trabajo de parto real depende únicamente del reporte subjetivo de contracciones de la gestante'],
  ok:0,
  clave:'Contracciones de Braxton Hicks, que no producen cambio cervical progresivo y no representan trabajo de parto real.',
  exp:'Las contracciones de Braxton Hicks son irregulares, generalmente no dolorosas o solo levemente molestas, y no producen ningún cambio cervical progresivo, por lo que no representan trabajo de parto real -exactamente lo descrito en este caso.',
  no:{
    1:'Las contracciones uterinas efectivas se acompañan de cambios cervicales progresivos, ausentes en este caso descrito.',
    2:'Esta descripción sí corresponde a un tipo de contracción reconocido: las contracciones de Braxton Hicks.',
    3:'El diagnóstico de trabajo de parto real requiere verificar cambios cervicales documentados, no solo el reporte subjetivo.'
  },
  trampa:'Confundir las contracciones de Braxton Hicks (irregulares, sin cambio cervical) con contracciones uterinas efectivas (trabajo de parto real).',
  obj:'Aplicar la distinción entre contracciones de Braxton Hicks y contracciones uterinas efectivas en un caso clínico.',
  ref:'Williams, Obstetricia, cap. 21.',
  tags:['contracciones uterinas efectivas','contracciones de Braxton Hicks']
},
{
  id:'U11-OB1-Q21', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Trabajo de parto normal', sub:'Qué registra el partograma y para qué sirve',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué permite hacer el partograma que no lograría una evaluación puntual y aislada del trabajo de parto?',
  ops:[
    'Comparar visualmente el progreso real de una gestante contra el patrón esperado a lo largo del tiempo, permitiendo detectar tempranamente una desviación', 'El partograma únicamente registra el peso estimado del feto, sin ninguna relación con el progreso del trabajo de parto', 'Una evaluación puntual y aislada siempre aporta exactamente la misma información que el registro gráfico continuo del partograma', 'El partograma no tiene ninguna utilidad real distinta de la de cualquier otra evaluación puntual del trabajo de parto'],
  ok:0,
  clave:'Comparar visualmente el progreso real de una gestante contra el patrón esperado a lo largo del tiempo, permitiendo detectar tempranamente una desviación.',
  exp:'El partograma permite comparar visualmente el progreso real de una gestante contra el patrón esperado, y detectar tempranamente una desviación -retomando la misma lógica ya vista sobre las curvas de crecimiento en Pediatría I: comparar una trayectoria contra un patrón de referencia en el tiempo.',
  no:{
    1:'El partograma registra dilatación cervical y descenso fetal, no el peso estimado del feto.',
    2:'Es precisamente lo contrario: una evaluación puntual NO aporta la misma información que el registro gráfico continuo en el tiempo.',
    3:'El partograma sí tiene una utilidad real distinta: permite comparar la trayectoria en el tiempo, no solo un punto aislado.'
  },
  trampa:'Subestimar el valor del registro continuo en el tiempo (partograma) frente a una evaluación puntual y aislada del trabajo de parto.',
  obj:'Explicar la utilidad del partograma para detectar desviaciones del progreso esperado del trabajo de parto.',
  ref:'Williams, Obstetricia, cap. 21.',
  tags:['partograma','comparación de trayectoria en el tiempo']
},
{
  id:'U11-OB1-Q22', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Mecanismo del parto', sub:'Por qué la presentación cefálica es la más favorable',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la presentación cefálica se considera, en general, la más favorable para un parto vaginal?',
  ops:[
    'Porque la cabeza fetal, aunque es la parte más grande y menos compresible del feto, tiene la capacidad de moldearse ligeramente y de orientarse de la forma más favorable a través de la pelvis materna', 'La presentación cefálica nunca ha demostrado ninguna ventaja real frente a otras presentaciones para el desarrollo de un parto vaginal', 'La cabeza fetal es la parte más pequeña y más fácilmente compresible de todo el cuerpo fetal durante el parto', 'Todas las presentaciones fetales (cefálica, podálica, de hombro) conllevan exactamente el mismo mecanismo de parto y el mismo riesgo'],
  ok:0,
  clave:'Porque la cabeza fetal, aunque es la parte más grande y menos compresible del feto, tiene la capacidad de moldearse ligeramente y de orientarse de la forma más favorable a través de la pelvis materna.',
  exp:'La presentación cefálica es la más favorable porque la cabeza fetal, aunque es la parte más grande y menos compresible del feto, tiene la capacidad de moldearse ligeramente y de orientarse de la forma más favorable posible a través de la pelvis materna.',
  no:{
    1:'La presentación cefálica sí ha demostrado, en general, ser la más favorable para el desarrollo de un parto vaginal.',
    2:'Es precisamente lo contrario: la cabeza fetal es la parte MÁS GRANDE y MENOS compresible del feto, no la más pequeña.',
    3:'Otras presentaciones (podálica, de hombro) conllevan un mecanismo distinto y, en general, mayor riesgo de complicaciones.'
  },
  trampa:'Subestimar por qué la presentación cefálica es favorable, o asumir que todas las presentaciones fetales conllevan el mismo riesgo.',
  obj:'Explicar por qué la presentación cefálica se considera la más favorable para un parto vaginal.',
  ref:'Williams, Obstetricia, cap. 22.',
  tags:['presentación cefálica','favorabilidad para parto vaginal']
},
{
  id:'U11-OB1-Q23', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Mecanismo del parto', sub:'Momento esperado del encajamiento según paridad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo difiere el momento esperado del encajamiento fetal entre una mujer primigesta y una con partos previos?',
  ops:[
    'En primigestas el encajamiento con frecuencia ocurre semanas antes del inicio del trabajo de parto; en mujeres con partos previos puede ocurrir ya iniciado el trabajo de parto', 'El momento del encajamiento fetal es exactamente el mismo en una primigesta que en una mujer con partos previos, sin ninguna diferencia real', 'En primigestas el encajamiento ocurre siempre durante el trabajo de parto activo, nunca antes de su inicio', 'El encajamiento fetal no tiene ninguna relación real con la paridad previa de la mujer evaluada'],
  ok:0,
  clave:'En primigestas el encajamiento con frecuencia ocurre semanas antes del inicio del trabajo de parto; en mujeres con partos previos puede ocurrir ya iniciado el trabajo de parto.',
  exp:'En primigestas, el encajamiento con frecuencia ocurre semanas antes del inicio del trabajo de parto, mientras en mujeres con partos previos puede ocurrir ya iniciado el trabajo de parto mismo.',
  no:{
    1:'Sí existe una diferencia real en el momento esperado del encajamiento según la paridad previa de la mujer.',
    2:'Es precisamente lo contrario: en primigestas el encajamiento suele ocurrir ANTES del trabajo de parto, no durante él.',
    3:'El encajamiento fetal sí tiene una relación directa con la paridad previa, según lo descrito en este tema.'
  },
  trampa:'Asumir que el momento esperado del encajamiento fetal es idéntico sin importar si la mujer es primigesta o ha tenido partos previos.',
  obj:'Explicar la diferencia en el momento esperado del encajamiento fetal según la paridad previa de la mujer.',
  ref:'Williams, Obstetricia, cap. 22.',
  tags:['encajamiento fetal','diferencia según paridad']
},
{
  id:'U11-OB1-Q24', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Mecanismo del parto', sub:'Secuencia de movimientos del mecanismo del parto',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la secuencia coordinada de movimientos del mecanismo del parto en la presentación cefálica?',
  ops:[
    'Encajamiento, descenso, flexión, rotación interna, extensión, rotación externa, y expulsión', 'Únicamente descenso y expulsión, sin ninguna otra fase intermedia reconocida en el mecanismo del parto', 'Rotación externa, flexión, encajamiento, descenso, y finalmente extensión, en ese orden específico', 'El mecanismo del parto no sigue ninguna secuencia coordinada específica de movimientos reconocida clínicamente'],
  ok:0,
  clave:'Encajamiento, descenso, flexión, rotación interna, extensión, rotación externa, y expulsión.',
  exp:'El mecanismo del parto en la presentación cefálica sigue una secuencia coordinada: encajamiento, descenso, flexión, rotación interna, extensión, rotación externa, y finalmente la expulsión del resto del cuerpo.',
  no:{
    1:'La secuencia completa incluye múltiples fases intermedias, no se limita solo a descenso y expulsión.',
    2:'Esta secuencia está fuera de orden; el mecanismo sigue específicamente: encajamiento, descenso, flexión, rotación interna, extensión, rotación externa.',
    3:'El mecanismo del parto sí sigue una secuencia coordinada y reconocida clínicamente, no ocurre de forma desordenada.'
  },
  trampa:'Desordenar la secuencia correcta de movimientos del mecanismo del parto, o reducirla a solo dos fases.',
  obj:'Identificar la secuencia coordinada de movimientos del mecanismo del parto en la presentación cefálica.',
  ref:'Williams, Obstetricia, cap. 22.',
  tags:['mecanismo del parto','secuencia de movimientos']
},
{
  id:'U11-OB1-Q25', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Atención del parto eutócico', sub:'Principio general de intervención mínima',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué principio general de la obstetricia moderna guía la atención del parto vaginal eutócico?',
  ops:[
    'Intervenir lo menos posible mientras el progreso siga un curso normal, reservando intervenciones más activas para cuando existe una indicación clínica específica', 'Intervenir de la forma más activa posible en todo momento del parto, sin importar si el progreso sigue un curso normal', 'La atención del parto vaginal eutócico nunca requiere ninguna vigilancia continua del progreso ni de la frecuencia cardíaca fetal', 'Cualquier intervención activa durante el parto debe aplicarse de forma rutinaria, sin necesidad de una indicación clínica específica'],
  ok:0,
  clave:'Intervenir lo menos posible mientras el progreso siga un curso normal, reservando intervenciones más activas para cuando existe una indicación clínica específica.',
  exp:'Un principio general de la obstetricia moderna es intervenir lo menos posible mientras el progreso siga un curso normal, reservando intervenciones más activas para cuando existe una indicación clínica específica -escalonar la intervención según la necesidad real.',
  no:{
    1:'Es precisamente lo contrario: se busca intervenir LO MENOS posible mientras el progreso sea normal, no de forma activa constante.',
    2:'La atención del parto vaginal sí requiere vigilancia continua del progreso y de la frecuencia cardíaca fetal.',
    3:'Es precisamente lo contrario: las intervenciones activas deben reservarse para indicaciones específicas, no aplicarse rutinariamente.'
  },
  trampa:'Asumir que la atención obstétrica moderna favorece la intervención activa constante, sin importar si el progreso del parto es normal.',
  obj:'Explicar el principio general de intervención mínima que guía la atención del parto vaginal eutócico.',
  ref:'Williams, Obstetricia, cap. 27.',
  tags:['atención del parto vaginal','principio de intervención mínima']
},
{
  id:'U11-OB1-Q26', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Atención del parto eutócico', sub:'Cambio de práctica de la episiotomía rutinaria a selectiva',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la práctica de la episiotomía ha evolucionado de rutinaria a selectiva?',
  ops:[
    'Porque la evidencia acumulada no demuestra un beneficio consistente de su uso rutinario frente a permitir un desgarro espontáneo cuando ocurre', 'La episiotomía siempre debe realizarse de forma rutinaria en cada parto vaginal, sin ninguna excepción posible reconocida', 'La evidencia acumulada demuestra un beneficio consistente y claro del uso rutinario de la episiotomía en todos los partos', 'El cambio de práctica de la episiotomía nunca tuvo ninguna relación real con la evidencia clínica disponible sobre su uso'],
  ok:0,
  clave:'Porque la evidencia acumulada no demuestra un beneficio consistente de su uso rutinario frente a permitir un desgarro espontáneo cuando ocurre.',
  exp:'La práctica ha evolucionado de rutinaria a selectiva porque la evidencia acumulada no demuestra un beneficio consistente de su uso rutinario frente a permitir un desgarro espontáneo cuando ocurre.',
  no:{
    1:'Es precisamente lo contrario: la episiotomía ya NO se recomienda de forma rutinaria, sino selectiva según indicaciones específicas.',
    2:'Es precisamente lo contrario: la evidencia NO demuestra un beneficio consistente del uso rutinario de la episiotomía.',
    3:'El cambio de práctica sí tuvo una relación directa con la evidencia clínica acumulada sobre el uso de la episiotomía.'
  },
  trampa:'Asumir que la episiotomía sigue siendo una práctica rutinaria recomendada en todo parto vaginal, sin reconocer el cambio hacia un uso selectivo.',
  obj:'Explicar por qué la práctica de la episiotomía cambió de rutinaria a selectiva, basado en la evidencia disponible.',
  ref:'Williams, Obstetricia, cap. 27.',
  tags:['episiotomía','cambio de práctica rutinaria a selectiva']
},
{
  id:'U11-OB1-Q27', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Atención del parto eutócico', sub:'Manejo activo del alumbramiento y hemorragia postparto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el manejo activo del alumbramiento reduce el riesgo de hemorragia postparto en comparación con un manejo puramente expectante?',
  ops:[
    'Porque incluye medidas como la administración de un fármaco uterotónico inmediatamente después del nacimiento, favoreciendo la contracción uterina y reduciendo el sangrado', 'El manejo activo del alumbramiento nunca ha demostrado ninguna ventaja real frente al manejo puramente expectante', 'El manejo puramente expectante del alumbramiento siempre reduce el riesgo de hemorragia postparto de forma más efectiva', 'La administración de fármacos uterotónicos después del nacimiento no tiene ninguna relación real con el riesgo de hemorragia'],
  ok:0,
  clave:'Porque incluye medidas como la administración de un fármaco uterotónico inmediatamente después del nacimiento, favoreciendo la contracción uterina y reduciendo el sangrado.',
  exp:'El manejo activo del alumbramiento, que incluye la administración de un fármaco uterotónico inmediatamente después del nacimiento, ha demostrado reducir significativamente el riesgo de hemorragia postparto en comparación con un manejo puramente expectante.',
  no:{
    1:'El manejo activo sí ha demostrado una ventaja real y documentada frente al manejo puramente expectante.',
    2:'Es precisamente lo contrario: el manejo ACTIVO reduce más el riesgo de hemorragia que el manejo puramente expectante.',
    3:'La administración de fármacos uterotónicos sí tiene una relación directa con la reducción del riesgo de hemorragia postparto.'
  },
  trampa:'Subestimar la ventaja del manejo activo del alumbramiento frente al manejo puramente expectante para prevenir la hemorragia postparto.',
  obj:'Explicar por qué el manejo activo del alumbramiento reduce el riesgo de hemorragia postparto.',
  ref:'Williams, Obstetricia, cap. 27.',
  tags:['alumbramiento','manejo activo vs. expectante']
},
{
  id:'U11-OB1-Q28', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Atención del parto eutócico', sub:'Protección del periné durante el segundo periodo',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué elementos incluye el acompañamiento activo de la gestante durante el segundo periodo del parto?',
  ops:[
    'Orientación sobre el pujo efectivo coordinado con las contracciones, y protección del periné durante la salida de la cabeza fetal', 'Únicamente la administración de un fármaco uterotónico, sin ninguna otra consideración durante el segundo periodo', 'Solo la vigilancia del partograma, sin ninguna orientación activa a la gestante durante el segundo periodo', 'El acompañamiento durante el segundo periodo del parto no incluye ninguna acción específica reconocida clínicamente'],
  ok:0,
  clave:'Orientación sobre el pujo efectivo coordinado con las contracciones, y protección del periné durante la salida de la cabeza fetal.',
  exp:'La atención del parto vaginal eutócico combina la vigilancia continua con el acompañamiento activo durante el segundo periodo (expulsivo), incluyendo orientación sobre el pujo efectivo coordinado con las contracciones, y la protección del periné durante la salida de la cabeza fetal.',
  no:{
    1:'El fármaco uterotónico corresponde al manejo del alumbramiento (tercer periodo), no específicamente al acompañamiento del segundo periodo.',
    2:'El partograma es parte de la vigilancia general del trabajo de parto, pero el acompañamiento del segundo periodo incluye acciones adicionales específicas.',
    3:'El acompañamiento del segundo periodo sí incluye acciones específicas reconocidas, como la orientación del pujo y la protección perineal.'
  },
  trampa:'Reducir el acompañamiento del segundo periodo del parto a un solo elemento aislado, sin reconocer el conjunto de acciones que lo componen.',
  obj:'Identificar los elementos del acompañamiento activo de la gestante durante el segundo periodo del parto.',
  ref:'Williams, Obstetricia, cap. 27.',
  tags:['atención del parto vaginal','acompañamiento del segundo periodo']
},
{
  id:'U11-OB1-Q29', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Trabajo de parto normal', sub:'La fase activa exige vigilancia más cercana',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una gestante presenta contracciones regulares y dilatación cervical de 7 cm, en progreso claro y documentado.',
  enunciado:'¿En qué fase del trabajo de parto se encuentra esta gestante, y qué implica esta fase para su manejo?',
  ops:[
    'Fase activa, que requiere una vigilancia mucho más cercana del progreso del trabajo de parto', 'Fase latente, que generalmente puede manejarse de forma expectante sin ninguna vigilancia cercana adicional', 'Esta presentación no corresponde a ninguna fase reconocida del trabajo de parto descrita en este tema', 'El manejo de esta gestante es idéntico sin importar la fase específica del trabajo de parto en que se encuentre'],
  ok:0,
  clave:'Fase activa, que requiere una vigilancia mucho más cercana del progreso del trabajo de parto.',
  exp:'Una gestante en fase activa, con dilatación progresiva (en este caso 7 cm) y contracciones regulares, requiere una vigilancia mucho más cercana del progreso del trabajo de parto, a diferencia de la fase latente que puede manejarse de forma más expectante.',
  no:{
    1:'La fase latente corresponde a dilatación más temprana (hasta 5-6 cm); 7 cm con progreso claro corresponde a la fase activa.',
    2:'Esta presentación sí corresponde a una fase reconocida: la fase activa del primer periodo del trabajo de parto.',
    3:'El manejo sí difiere según la fase: la fase activa requiere una vigilancia más cercana que la fase latente.'
  },
  trampa:'Confundir la fase activa (dilatación progresiva más avanzada) con la fase latente, o asumir que el manejo es idéntico en ambas fases.',
  obj:'Aplicar la identificación de la fase del trabajo de parto y su implicación para el manejo, en un caso clínico.',
  ref:'Williams, Obstetricia, cap. 21.',
  tags:['fases del trabajo de parto','vigilancia según fase activa']
}

]);
