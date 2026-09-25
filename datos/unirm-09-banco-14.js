/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE SOPORTE VITAL (1/2)
   Amplia Soporte Vital Basico y Avanzado de 1 a 50 preguntas
   junto con unirm-09-banco-15.js. Esta parte cubre cadena de
   supervivencia, via aerea, ritmos de paro y soporte vital
   avanzado (temas 1-4).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== SOPORTE VITAL BASICO Y AVANZADO ===================== */
{
  id:'U9-SV-Q02', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Cadena de supervivencia y RCP básica', sub:'Por qué se llama "cadena"',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se usa la metáfora de una "cadena" para describir la secuencia de acciones ante un paro cardíaco?',
  ops:[
    'Porque si cualquiera de los eslabones (reconocimiento, RCP temprana, desfibrilación, soporte avanzado, cuidados posparo) falla o se retrasa, toda la secuencia pierde eficacia',
    'Es solo un nombre sin ningún significado práctico real', 'Porque cada eslabón funciona de forma completamente independiente de los demás', 'Porque la secuencia siempre debe repetirse varias veces en el mismo orden'],
  ok:0,
  clave:'Se llama "cadena" porque si cualquier eslabón falla o se retrasa, toda la secuencia pierde eficacia, sin importar qué tan bien se hagan los demás.',
  exp:'Se llama "cadena" a propósito: si cualquiera de los eslabones de la cadena de supervivencia -reconocimiento inmediato, RCP temprana, desfibrilación rápida, soporte vital avanzado efectivo, cuidados posparo- falla o se retrasa, toda la secuencia pierde eficacia, sin importar qué tan bien se hagan los demás eslabones.',
  no:{
    1:'La metáfora tiene un significado práctico central: comunica que cada paso depende de que los anteriores se hayan hecho bien y a tiempo.',
    2:'Los eslabones NO funcionan de forma independiente; el fallo de uno reduce la eficacia de toda la secuencia, sea cual sea su orden.',
    3:'La cadena describe una secuencia de acciones distintas en el tiempo, no una repetición cíclica del mismo paso.'
  },
  trampa:'No reconocer que la interdependencia entre eslabones es precisamente el significado central de la metáfora de la cadena.',
  obj:'Explicar el significado de la metáfora de "cadena" en la cadena de supervivencia.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['cadena de supervivencia','interdependencia de eslabones']
},
{
  id:'U9-SV-Q03', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Cadena de supervivencia y RCP básica', sub:'Tiempo y sobrevida en fibrilación ventricular',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se entrena a la población general, y no solo a personal de salud, en RCP básica?',
  ops:[
    'Porque la mayoría de los paros cardíacos ocurren fuera del hospital, y quien está presente en el primer minuto casi nunca es un médico',
    'Entrenar a la población general en RCP básica no tiene ningún impacto real en la sobrevida', 'Los paros cardíacos ocurren casi siempre dentro de un hospital, rodeados de personal de salud', 'La probabilidad de sobrevivir a una fibrilación ventricular no depende del tiempo transcurrido sin RCP'],
  ok:0,
  clave:'La mayoría de los paros cardíacos ocurren fuera del hospital, y quien está presente en el primer minuto casi nunca es un médico.',
  exp:'La probabilidad de sobrevivir a una fibrilación ventricular cae de forma pronunciada por cada minuto que pasa sin RCP ni desfibrilación; por eso se entrena a la población general en RCP básica: la mayoría de los paros ocurren fuera del hospital, y quien está presente en ese primer minuto crítico casi nunca es un médico o un profesional de salud entrenado.',
  no:{
    1:'Entrenar a la población general sí tiene un impacto documentado en la sobrevida, precisamente porque actúa en el primer minuto crítico.',
    2:'Es al revés: la MAYORÍA de los paros cardíacos ocurren FUERA del hospital, no dentro de uno rodeado de personal de salud.',
    3:'La probabilidad de sobrevivir a una fibrilación ventricular SÍ depende directamente del tiempo transcurrido sin RCP ni desfibrilación.'
  },
  trampa:'Subestimar la importancia de entrenar a la población general, asumiendo erróneamente que los paros ocurren mayormente en el hospital.',
  obj:'Explicar por qué se entrena a la población general en RCP básica.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['RCP básica','entrenamiento poblacional','fibrilación ventricular']
},
{
  id:'U9-SV-Q04', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Cadena de supervivencia y RCP básica', sub:'Iniciar compresiones sin confirmar el pulso',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se recomienda iniciar compresiones torácicas de inmediato ante un adulto que no responde y no respira con normalidad, sin esperar a confirmar el pulso con certeza?',
  ops:[
    'Porque confirmar el pulso con certeza puede hacer perder tiempo valioso, y hasta el personal entrenado tiene dificultad para palpar un pulso débil con rapidez',
    'Confirmar el pulso antes de iniciar compresiones nunca representa ninguna pérdida de tiempo relevante', 'Palpar el pulso es siempre un procedimiento rápido y sencillo, incluso para personal sin entrenamiento', 'Iniciar compresiones sin confirmar el pulso previamente es una práctica desaconsejada por las guías actuales'],
  ok:0,
  clave:'Confirmar el pulso con certeza puede hacer perder tiempo valioso, y hasta el personal entrenado tiene dificultad para palpar un pulso débil con rapidez.',
  exp:'Se recomienda iniciar compresiones torácicas de inmediato, sin esperar a confirmar el pulso con certeza, porque ese proceso de confirmación puede hacer perder tiempo valioso -incluso el personal de salud entrenado tiene dificultad para palpar un pulso débil con rapidez y seguridad bajo la presión de una emergencia, así que insistir en confirmarlo retrasa el inicio de una intervención que sí es urgente.',
  no:{
    1:'Confirmar el pulso sí puede representar una pérdida de tiempo relevante, precisamente el motivo de esta recomendación.',
    2:'Palpar el pulso con certeza NO es siempre rápido ni sencillo, ni siquiera para personal entrenado, especialmente bajo la presión de una emergencia.',
    3:'Es precisamente lo contrario: las guías actuales SÍ recomiendan iniciar compresiones sin esperar la confirmación certera del pulso.'
  },
  trampa:'Asumir que confirmar el pulso es un paso rápido y sin costo, ignorando el riesgo real de retrasar el inicio de las compresiones.',
  obj:'Explicar por qué se recomienda iniciar compresiones sin esperar a confirmar el pulso con certeza.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['compresiones torácicas','confirmación del pulso','inicio inmediato']
},
{
  id:'U9-SV-Q05', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Cadena de supervivencia y RCP básica', sub:'Frecuencia y profundidad de las compresiones',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la frecuencia y profundidad recomendada para las compresiones torácicas en un adulto?',
  ops:[
    '100 a 120 compresiones por minuto, con una profundidad de al menos 5 centímetros', '40 a 60 compresiones por minuto, con una profundidad de al menos 1 centímetro', '200 a 220 compresiones por minuto, sin ninguna profundidad mínima recomendada', '100 a 120 compresiones por minuto, evitando cualquier reexpansión del tórax entre compresiones'],
  ok:0,
  clave:'La frecuencia recomendada es de 100 a 120 compresiones por minuto, con una profundidad de al menos 5 centímetros en el adulto.',
  exp:'Las compresiones torácicas en un adulto se dan en el centro del pecho, a una frecuencia de 100 a 120 por minuto, con una profundidad de al menos 5 centímetros, permitiendo que el tórax vuelva a expandirse por completo entre una compresión y otra, y con la menor interrupción posible en toda la secuencia.',
  no:{
    1:'Esta frecuencia y profundidad son considerablemente menores a las recomendadas; una compresión tan superficial y lenta reduce mucho el flujo generado.',
    2:'Esta frecuencia es excesiva respecto a la recomendación (100-120/min), y las guías sí especifican una profundidad mínima (al menos 5 cm), no la omiten.',
    3:'Permitir la reexpansión completa del tórax entre compresiones es, precisamente, parte de la técnica correcta recomendada, no algo a evitar.'
  },
  trampa:'Confundir los valores exactos de frecuencia y profundidad, o ignorar la importancia de permitir la reexpansión completa del tórax entre compresiones.',
  obj:'Recordar la frecuencia y profundidad recomendada de las compresiones torácicas en un adulto.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['compresiones torácicas','frecuencia','profundidad']
},
{
  id:'U9-SV-Q06', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Cadena de supervivencia y RCP básica', sub:'Calidad de la compresión más allá de "estarla haciendo"',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué comprimir demasiado lento o demasiado superficial reduce la eficacia de la RCP, aunque técnicamente "se esté haciendo"?',
  ops:[
    'Porque reduce mucho el flujo de sangre generado artificialmente hacia el cerebro y el corazón, dando una falsa sensación de estar ayudando',
    'La velocidad y profundidad de las compresiones no tienen ninguna relación real con el flujo de sangre generado', 'Comprimir lento o superficial siempre genera exactamente el mismo flujo sanguíneo que comprimir a la frecuencia y profundidad recomendadas', 'Solo importa que las compresiones se estén realizando, sin importar su calidad técnica'],
  ok:0,
  clave:'Reduce mucho el flujo de sangre generado artificialmente hacia el cerebro y el corazón, dando una falsa sensación de estar ayudando.',
  exp:'Comprimir demasiado lento o demasiado superficial reduce mucho el flujo de sangre generado artificialmente hacia el cerebro y el corazón, aunque técnicamente "se esté haciendo RCP": la calidad de la compresión -frecuencia, profundidad, permitir la reexpansión completa, minimizar interrupciones- importa tanto como el hecho de estarla haciendo, y una RCP de mala calidad puede rendir muy poco flujo real pese a la apariencia de estar ayudando.',
  no:{
    1:'La velocidad y profundidad de las compresiones tienen una relación directa y central con el flujo sanguíneo generado, no son irrelevantes.',
    2:'Es al revés: comprimir lento o superficial genera un flujo MUCHO MENOR que comprimir a la frecuencia y profundidad recomendadas.',
    3:'La calidad técnica de las compresiones sí importa tanto como el hecho de realizarlas, precisamente el punto central de esta consideración.'
  },
  trampa:'Asumir que cualquier compresión, sin importar su calidad técnica, genera el mismo beneficio que una compresión de calidad adecuada.',
  obj:'Explicar por qué la calidad técnica de las compresiones importa tanto como el hecho de realizarlas.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['calidad de la compresión','flujo sanguíneo artificial','RCP de mala calidad']
},
{
  id:'U9-SV-Q07', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Cadena de supervivencia y RCP básica', sub:'RCP "solo con las manos" para reanimadores sin entrenamiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las guías actuales priorizan la RCP "solo con las manos" (compresiones continuas, sin ventilaciones de rescate) para un reanimador sin entrenamiento formal?',
  ops:[
    'Porque es más fácil de hacer bien bajo presión y evita las pausas para ventilar, que suelen ser largas e ineficientes cuando no se tiene práctica',
    'La RCP "solo con las manos" nunca es recomendada por ninguna guía actual de reanimación', 'Las ventilaciones de rescate siempre son más importantes que las compresiones para cualquier reanimador, entrenado o no', 'Un reanimador sin entrenamiento formal nunca debería iniciar ningún tipo de RCP'],
  ok:0,
  clave:'Es más fácil de hacer bien bajo presión y evita las pausas para ventilar, que suelen ser largas e ineficientes cuando no se tiene práctica.',
  exp:'Para un reanimador sin entrenamiento formal, las guías actuales priorizan la RCP "solo con las manos" (compresiones continuas, sin ventilaciones de rescate): es más fácil de hacer bien bajo presión y evita las pausas para ventilar, que suelen ser largas e ineficientes cuando no se tiene práctica -una simplificación deliberada, pensada para que más personas se animen a actuar en vez de no hacer nada por miedo a hacerlo mal.',
  no:{
    1:'La RCP "solo con las manos" sí es recomendada activamente por las guías actuales para reanimadores sin entrenamiento formal.',
    2:'Para un reanimador SIN entrenamiento, las guías priorizan justamente las compresiones continuas por encima de intentar ventilaciones que podría hacer mal.',
    3:'Actuar, aunque sea con RCP "solo con las manos", es preferible a no hacer nada; las guías buscan animar a la acción, no desalentarla.'
  },
  trampa:'Asumir que la RCP sin ventilaciones es una versión "incompleta" o desaconsejada, en vez de reconocerla como una recomendación deliberada para reanimadores sin entrenamiento.',
  obj:'Explicar por qué se recomienda la RCP "solo con las manos" para reanimadores sin entrenamiento formal.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['RCP solo con las manos','reanimador sin entrenamiento','ventilaciones de rescate']
},
{
  id:'U9-SV-Q08', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Cadena de supervivencia y RCP básica', sub:'Uso de un desfibrilador automático externo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un desfibrilador automático externo (DAE) puede ser usado por cualquier persona sin entrenamiento médico formal?',
  ops:[
    'Porque el propio dispositivo analiza el ritmo cardíaco y solo indica la descarga cuando corresponde, guiando por voz cada paso del proceso',
    'Un desfibrilador automático externo nunca puede ser usado de forma segura por alguien sin entrenamiento médico', 'El dispositivo siempre aplica una descarga automática, sin importar cuál sea el ritmo cardíaco detectado', 'El uso de un DAE requiere obligatoriamente la supervisión presencial de un médico en el lugar'],
  ok:0,
  clave:'El propio dispositivo analiza el ritmo cardíaco y solo indica la descarga cuando corresponde, guiando por voz cada paso del proceso.',
  exp:'Un desfibrilador automático externo (DAE) puede ser usado por cualquier persona sin entrenamiento médico formal porque el propio dispositivo analiza el ritmo cardíaco del paciente y solo indica la descarga cuando corresponde (es decir, cuando detecta un ritmo desfibrilable), guiando por voz cada paso del proceso, desde la colocación de los electrodos hasta el momento exacto de la descarga.',
  no:{
    1:'Un DAE está diseñado precisamente para ser usado de forma segura por personas sin entrenamiento médico, gracias a su análisis automático del ritmo y sus instrucciones por voz.',
    2:'El dispositivo NO aplica una descarga automática indiscriminada; analiza el ritmo primero y solo indica la descarga si el ritmo detectado es desfibrilable.',
    3:'El uso de un DAE no requiere la supervisión presencial de un médico; está diseñado específicamente para que cualquier persona pueda usarlo de forma segura.'
  },
  trampa:'Asumir que un DAE requiere entrenamiento médico especializado o supervisión médica presencial para usarse de forma segura.',
  obj:'Explicar por qué un desfibrilador automático externo puede ser usado de forma segura por cualquier persona sin entrenamiento médico.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['desfibrilador automático externo','análisis automático del ritmo','uso por población general']
},
{
  id:'U9-SV-Q09', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Cadena de supervivencia y RCP básica', sub:'Un eslabón perfecto no compensa otro fallido',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un paro cardíaco, se aplicó una desfibrilación técnicamente perfecta con el desfibrilador correcto, pero nadie inició compresiones torácicas mientras se esperaba a que llegara el dispositivo.',
  enunciado:'¿Por qué esta desfibrilación "perfecta" probablemente tendrá un resultado peor del esperado?',
  ops:[
    'Porque llegó tarde: sin compresiones mientras se esperaba, el flujo sanguíneo hacia el cerebro y el corazón se detuvo por completo durante ese tiempo, reduciendo la probabilidad de que la desfibrilación sea efectiva',
    'Una desfibrilación técnicamente perfecta siempre garantiza un buen resultado, sin importar qué haya pasado antes de aplicarla', 'Las compresiones torácicas nunca afectan la probabilidad de éxito de una desfibrilación posterior', 'El tiempo transcurrido antes de la desfibrilación nunca tiene ninguna relevancia para el resultado final'],
  ok:0,
  clave:'Llegó tarde: sin compresiones mientras se esperaba, el flujo sanguíneo se detuvo por completo, reduciendo la probabilidad de que la desfibrilación sea efectiva.',
  exp:'Este es un ejemplo directo de la lógica de la cadena de supervivencia: si cualquiera de los eslabones falla o se retrasa -en este caso, la ausencia de compresiones mientras se esperaba el desfibrilador-, toda la secuencia pierde eficacia, sin importar qué tan bien se haga el siguiente eslabón; una desfibrilación perfecta, aplicada tarde y sin flujo sanguíneo previo sostenido por compresiones, ya perdió gran parte de su valor potencial.',
  no:{
    1:'Una desfibrilación técnicamente perfecta NO garantiza un buen resultado si los eslabones anteriores de la cadena (como las compresiones) fallaron.',
    2:'Las compresiones torácicas sí afectan directamente la probabilidad de éxito de una desfibrilación posterior, al mantener algo de flujo sanguíneo hacia órganos vitales.',
    3:'El tiempo transcurrido sin RCP tiene una relevancia central y bien documentada para el resultado final de la reanimación.'
  },
  trampa:'Asumir que un eslabón ejecutado perfectamente (la desfibrilación) puede compensar por completo el fallo de otro eslabón anterior (las compresiones ausentes).',
  obj:'Aplicar la lógica de la cadena de supervivencia a un caso donde un eslabón perfecto no compensa el fallo de otro anterior.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['cadena de supervivencia','interdependencia de eslabones','compresiones antes de desfibrilar']
},
{
  id:'U9-SV-Q10', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Vía aérea y ventilación', sub:'La lengua como causa más frecuente de obstrucción',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la causa más frecuente de obstrucción de la vía aérea en un paciente inconsciente?',
  ops:[
    'La propia lengua, que cae hacia atrás por la disminución del tono muscular', 'Un cuerpo extraño alojado en la vía aérea', 'Una lesión traumática directa de la tráquea', 'Una reacción alérgica que inflama la vía aérea'],
  ok:0,
  clave:'La propia lengua es, con diferencia, la causa más frecuente de obstrucción de la vía aérea en un paciente inconsciente.',
  exp:'En una persona con el nivel de conciencia deprimido, el tono muscular de la lengua y de los tejidos blandos de la garganta disminuye, y la lengua puede caer hacia atrás, obstruyendo parcial o totalmente el paso del aire -es, con diferencia, la causa más frecuente de obstrucción de la vía aérea en un paciente inconsciente, mucho antes de pensar en otras causas como un cuerpo extraño o una lesión traumática.',
  no:{
    1:'Un cuerpo extraño es una causa posible de obstrucción, pero mucho menos frecuente que la caída de la lengua en un paciente inconsciente.',
    2:'Una lesión traumática de la tráquea es una causa mucho menos frecuente de obstrucción que la caída de la propia lengua.',
    3:'Una reacción alérgica es una causa posible pero mucho menos frecuente que la caída de la lengua como causa de obstrucción en un inconsciente.'
  },
  trampa:'Asumir que la obstrucción de la vía aérea en un inconsciente se debe principalmente a causas externas (cuerpo extraño, trauma) en vez de a la propia lengua.',
  obj:'Identificar la lengua como la causa más frecuente de obstrucción de la vía aérea en un paciente inconsciente.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['obstrucción de vía aérea','lengua','paciente inconsciente']
},
{
  id:'U9-SV-Q11', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Vía aérea y ventilación', sub:'Maniobra frente-mentón',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué logra la maniobra frente-mentón, y por qué es el primer paso básico ante un paciente inconsciente que no respira con normalidad?',
  ops:[
    'Desplaza la lengua hacia adelante, despejando el paso del aire hacia los pulmones',
    'La maniobra frente-mentón no tiene ningún efecto real sobre la vía aérea del paciente', 'Desplaza la lengua hacia atrás, empujándola más profundamente hacia la garganta', 'Solo puede aplicarse en pacientes conscientes que colaboran activamente con la maniobra'],
  ok:0,
  clave:'Desplaza la lengua hacia adelante, despejando el paso del aire hacia los pulmones.',
  exp:'La maniobra frente-mentón (inclinar la cabeza hacia atrás sujetando la frente, y elevar el mentón con los dedos de la otra mano) desplaza la lengua hacia adelante, despejando ese paso, y es el primer paso básico ante cualquier paciente inconsciente que no respira con normalidad -en muchos casos, solo con reposicionar la vía aérea de esta forma la persona vuelve a respirar espontáneamente, sin necesitar ninguna intervención adicional.',
  no:{
    1:'La maniobra frente-mentón sí tiene un efecto real y bien documentado: despejar la vía aérea al desplazar la lengua hacia adelante.',
    2:'Es precisamente lo contrario: la maniobra desplaza la lengua hacia ADELANTE, no hacia atrás, que sería empeorar la obstrucción.',
    3:'La maniobra frente-mentón se aplica precisamente en pacientes INCONSCIENTES, que por definición no pueden colaborar activamente.'
  },
  trampa:'Invertir el efecto de la maniobra frente-mentón sobre la posición de la lengua, o asumir que requiere colaboración consciente del paciente.',
  obj:'Explicar el mecanismo y el propósito de la maniobra frente-mentón.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['maniobra frente-mentón','vía aérea','reposicionamiento']
},
{
  id:'U9-SV-Q12', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Vía aérea y ventilación', sub:'Cánula orofaríngea y reflejo nauseoso',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Se intenta insertar una cánula orofaríngea en un paciente que todavía conserva un reflejo nauseoso presente.',
  enunciado:'¿Qué riesgo tiene esta intervención en este paciente específico?',
  ops:[
    'Puede provocar vómito, con el riesgo de aspiración del contenido gástrico hacia la vía aérea, empeorando la situación',
    'La cánula orofaríngea nunca representa ningún riesgo en ningún paciente, sin importar su nivel de conciencia', 'Este dispositivo solo puede usarse en pacientes completamente conscientes y colaboradores', 'El reflejo nauseoso presente no tiene ninguna relación con la seguridad de insertar una cánula orofaríngea'],
  ok:0,
  clave:'Puede provocar vómito, con el riesgo de aspiración del contenido gástrico hacia la vía aérea, empeorando la situación.',
  exp:'La cánula orofaríngea es útil en un paciente sin reflejo nauseoso (muy inconsciente, en paro o con un nivel de conciencia muy deprimido); en alguien con ese reflejo todavía presente, insertarla puede provocar vómito, con el riesgo consecuente de aspiración del contenido gástrico hacia la vía aérea, empeorando la situación en vez de mejorarla -por eso su uso está reservado a pacientes con un nivel de conciencia suficientemente deprimido.',
  no:{
    1:'La cánula orofaríngea sí representa un riesgo real en pacientes con reflejo nauseoso presente, precisamente el riesgo de provocar vómito y aspiración.',
    2:'Es precisamente lo contrario: la cánula orofaríngea se usa en pacientes MUY inconscientes, sin reflejo nauseoso, no en pacientes conscientes y colaboradores.',
    3:'El reflejo nauseoso presente tiene una relación directa con la seguridad de insertar este dispositivo; es precisamente el criterio que determina si es seguro hacerlo.'
  },
  trampa:'No reconocer que el reflejo nauseoso presente es una contraindicación relativa para insertar una cánula orofaríngea, por el riesgo de vómito y aspiración.',
  obj:'Explicar el riesgo de insertar una cánula orofaríngea en un paciente con reflejo nauseoso presente.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['cánula orofaríngea','reflejo nauseoso','riesgo de aspiración']
},
{
  id:'U9-SV-Q13', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Vía aérea y ventilación', sub:'Sellado de la ventilación con bolsa mascarilla',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la técnica del sellado es tan importante como el ritmo de compresión al usar una bolsa mascarilla?',
  ops:[
    'Porque un sellado deficiente hace que buena parte del aire escape hacia el ambiente en vez de entrar a los pulmones del paciente',
    'El sellado de la mascarilla no tiene ninguna relación con la cantidad de aire que llega a los pulmones del paciente', 'Un sellado deficiente siempre mejora, en vez de empeorar, la cantidad de aire que llega a los pulmones', 'Solo importa el ritmo de compresión de la bolsa; el sellado de la mascarilla es un detalle irrelevante'],
  ok:0,
  clave:'Un sellado deficiente hace que buena parte del aire escape hacia el ambiente en vez de entrar a los pulmones del paciente.',
  exp:'La ventilación con bolsa mascarilla permite entregar aire a presión positiva directamente hacia los pulmones de un paciente que no respira por sí solo, sellando la mascarilla firmemente sobre la nariz y la boca y comprimiendo la bolsa de forma rítmica; un sellado deficiente hace que buena parte del aire escape hacia el ambiente en vez de entrar a los pulmones, por lo que la técnica del sellado es tan importante como el propio ritmo de ventilación.',
  no:{
    1:'El sellado tiene una relación directa y central con la cantidad de aire que efectivamente llega a los pulmones del paciente.',
    2:'Es precisamente lo contrario: un sellado deficiente EMPEORA (reduce), no mejora, la cantidad de aire que llega a los pulmones.',
    3:'El sellado de la mascarilla es tan importante como el ritmo de compresión, no un detalle secundario o irrelevante.'
  },
  trampa:'Subestimar la importancia técnica del sellado de la mascarilla frente al ritmo de compresión de la bolsa.',
  obj:'Explicar por qué la técnica del sellado es tan importante como el ritmo de compresión en la ventilación con bolsa mascarilla.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['ventilación con bolsa mascarilla','sellado','presión positiva']
},
{
  id:'U9-SV-Q14', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Vía aérea y ventilación', sub:'Tracción mandibular en sospecha de trauma cervical',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente inconsciente que no respira con normalidad tiene sospecha de traumatismo de columna cervical, tras haber sufrido una caída significativa.',
  enunciado:'¿Qué maniobra se debe usar en este paciente en vez de la maniobra frente-mentón estándar, y por qué?',
  ops:[
    'La tracción mandibular, que desplaza la mandíbula hacia adelante sin inclinar el cuello hacia atrás, para no agravar una posible lesión de la médula espinal',
    'La maniobra frente-mentón estándar es igual de segura en cualquier paciente, sin importar la sospecha de trauma cervical', 'No existe ninguna maniobra alternativa a la frente-mentón para pacientes con sospecha de trauma cervical', 'Se debe evitar cualquier intento de abrir la vía aérea en un paciente con sospecha de trauma cervical'],
  ok:0,
  clave:'La tracción mandibular, que desplaza la mandíbula hacia adelante sin inclinar el cuello, para no agravar una posible lesión de la médula espinal.',
  exp:'Cuando existe sospecha de traumatismo de columna cervical, la maniobra frente-mentón estándar se modifica: en su lugar se usa la tracción mandibular, que desplaza la mandíbula hacia adelante sin inclinar el cuello hacia atrás, precisamente para no agravar una posible lesión de la médula espinal, ya vista en Neuroanatomía, que la inclinación cervical podría empeorar.',
  no:{
    1:'La maniobra frente-mentón estándar SÍ representa un riesgo adicional en sospecha de trauma cervical, por la inclinación del cuello que implica.',
    2:'Sí existe una maniobra alternativa específica para este escenario: la tracción mandibular, que evita inclinar el cuello.',
    3:'Abrir la vía aérea sigue siendo prioritario incluso con sospecha de trauma cervical; se usa la técnica alternativa (tracción mandibular), no se evita el objetivo por completo.'
  },
  trampa:'No reconocer que existe una técnica alternativa específica (tracción mandibular) para abrir la vía aérea sin arriesgar una posible lesión cervical.',
  obj:'Explicar por qué se usa la tracción mandibular en vez de la maniobra frente-mentón ante sospecha de trauma cervical.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['tracción mandibular','sospecha de trauma cervical','lesión de médula espinal']
},
{
  id:'U9-SV-Q15', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Vía aérea y ventilación', sub:'Precaución de columna cervical por defecto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se asume la precaución de columna cervical por defecto ante cualquier duda razonable de trauma cervical, en vez de esperar a confirmarlo con certeza?',
  ops:[
    'Porque el riesgo de agravar una lesión cervical real, al no tomar la precaución, es más grave que el costo de tomarla innecesariamente en un paciente que finalmente no la tenía',
    'La precaución de columna cervical nunca debe aplicarse hasta confirmar con absoluta certeza la existencia de una lesión', 'Tomar la precaución de columna cervical siempre empeora el pronóstico del paciente, tenga o no una lesión real', 'No existe ninguna diferencia práctica entre usar la maniobra frente-mentón o la tracción mandibular en ningún escenario'],
  ok:0,
  clave:'El riesgo de agravar una lesión cervical real, al no tomar la precaución, es más grave que el costo de tomarla innecesariamente.',
  exp:'Ante cualquier duda razonable sobre un posible trauma cervical (caída, accidente, golpe en la cabeza), se asume la precaución de columna cervical por defecto y se usa la tracción mandibular, en vez de arriesgarse a la maniobra frente-mentón estándar: el riesgo de agravar una lesión cervical real, si existiera, es considerablemente más grave que el costo de tomar la precaución innecesariamente en un paciente que finalmente no tenía esa lesión.',
  no:{
    1:'Es precisamente lo contrario: se asume la precaución POR DEFECTO ante la duda, sin esperar la confirmación certera, por el riesgo de agravar una lesión real.',
    2:'Tomar la precaución de columna cervical no empeora el pronóstico; en el peor de los casos (sin lesión real) tiene un costo mínimo, mientras que evitarla en un caso real sí puede ser grave.',
    3:'Sí existe una diferencia práctica real: la tracción mandibular evita el riesgo de inclinar el cuello que la maniobra frente-mentón estándar sí implica.'
  },
  trampa:'Esperar confirmación certera de una lesión cervical antes de tomar precauciones, ignorando el balance de riesgo que favorece la precaución por defecto.',
  obj:'Explicar por qué se asume la precaución de columna cervical por defecto ante la duda razonable, sin esperar confirmación certera.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['precaución de columna cervical','balance de riesgo','duda razonable']
},
{
  id:'U9-SV-Q16', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Vía aérea y ventilación', sub:'La técnica correcta según el paciente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué principio general del soporte vital ilustra el hecho de que la técnica para abrir la vía aérea cambie según haya o no sospecha de trauma cervical?',
  ops:[
    'Que la técnica correcta no es siempre la misma en todos los pacientes, sino la que mejor equilibra el objetivo inmediato con el riesgo específico de ese paciente en particular',
    'Que solo existe una única técnica correcta para abrir la vía aérea, válida para todos los pacientes sin excepción', 'Que el riesgo específico de cada paciente nunca debe influir en la elección de la técnica a usar', 'Que la sospecha de trauma cervical siempre debe ignorarse al momento de decidir cómo abrir la vía aérea'],
  ok:0,
  clave:'La técnica correcta no es siempre la misma en todos los pacientes, sino la que mejor equilibra el objetivo inmediato con el riesgo específico de ese paciente.',
  exp:'Esta modificación (tracción mandibular en vez de frente-mentón ante sospecha de trauma cervical) ilustra un principio general del soporte vital: la técnica correcta no es siempre la misma en todos los pacientes, sino la que mejor equilibra el objetivo inmediato (abrir la vía aérea) con el riesgo específico de ese paciente en particular (una posible lesión cervical no confirmada todavía).',
  no:{
    1:'Precisamente lo contrario: existen técnicas alternativas según el contexto clínico específico del paciente, no una única técnica universal.',
    2:'El riesgo específico de cada paciente sí debe influir en la elección de la técnica, como ilustra este mismo ejemplo de la tracción mandibular.',
    3:'La sospecha de trauma cervical es precisamente el factor que SÍ debe considerarse al elegir la técnica correcta para abrir la vía aérea.'
  },
  trampa:'Asumir que existe una única técnica universal correcta para todos los pacientes, sin considerar cómo el contexto clínico específico cambia la elección adecuada.',
  obj:'Explicar el principio general de que la técnica correcta se adapta al riesgo específico de cada paciente.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['individualización de la técnica','equilibrio de riesgo','vía aérea']
},
{
  id:'U9-SV-Q17', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Ritmos de paro y desfibrilación', sub:'Por qué desfibrilar la asistolia no tiene sentido',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué desfibrilar a un paciente en asistolia no tiene ningún sentido fisiológico?',
  ops:[
    'Porque la asistolia es la ausencia completa de actividad eléctrica cardíaca, y no hay nada que "reiniciar" con una descarga',
    'La asistolia siempre responde igual de bien a la desfibrilación que la fibrilación ventricular', 'Desfibrilar en asistolia es la intervención de primera línea recomendada por las guías actuales', 'La asistolia es un ritmo con actividad eléctrica excesiva, similar a la fibrilación ventricular'],
  ok:0,
  clave:'La asistolia es la ausencia completa de actividad eléctrica cardíaca, y no hay nada que "reiniciar" con una descarga.',
  exp:'La asistolia es la ausencia completa de actividad eléctrica cardíaca -una línea plana en el monitor- y no hay nada que "reiniciar" con una descarga, así que desfibrilar en asistolia no tiene ningún sentido fisiológico y solo retrasaría las compresiones torácicas, que sí importan en este ritmo, priorizando la RCP de calidad y la búsqueda de la causa reversible.',
  no:{
    1:'Es precisamente lo contrario: la asistolia NO es un ritmo desfibrilable, a diferencia de la fibrilación ventricular.',
    2:'La intervención de primera línea en asistolia es la RCP de alta calidad y buscar la causa reversible, no la desfibrilación.',
    3:'La asistolia es precisamente la AUSENCIA de actividad eléctrica, no un exceso de ella, a diferencia de la fibrilación ventricular.'
  },
  trampa:'Confundir la asistolia (ausencia de actividad eléctrica) con un ritmo desfibrilable como la fibrilación ventricular (actividad eléctrica caótica).',
  obj:'Explicar por qué desfibrilar a un paciente en asistolia no tiene ningún sentido fisiológico.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['asistolia','ritmo no desfibrilable','ausencia de actividad eléctrica']
},
{
  id:'U9-SV-Q18', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Ritmos de paro y desfibrilación', sub:'Actividad eléctrica sin pulso: la paradoja',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se considera "paradójica" la actividad eléctrica sin pulso como ritmo de paro?',
  ops:[
    'Porque el monitor muestra un ritmo eléctrico organizado y aparentemente normal, pero ese ritmo no logra generar un pulso palpable ni gasto cardíaco efectivo',
    'La actividad eléctrica sin pulso no tiene ninguna característica particular que la distinga de los demás ritmos de paro', 'En la actividad eléctrica sin pulso, el monitor siempre muestra una línea completamente plana, igual que en la asistolia', 'La actividad eléctrica sin pulso siempre es causada exclusivamente por una arritmia primaria del corazón'],
  ok:0,
  clave:'El monitor muestra un ritmo eléctrico organizado y aparentemente normal, pero ese ritmo no logra generar un pulso palpable ni gasto cardíaco efectivo.',
  exp:'La actividad eléctrica sin pulso es, paradójicamente, un ritmo eléctrico organizado y aparentemente normal en el monitor, pero que no logra generar un pulso palpable ni gasto cardíaco efectivo -por ejemplo, por una causa mecánica subyacente, como una pérdida masiva de volumen sanguíneo o una obstrucción del llenado cardíaco (un taponamiento cardíaco, por ejemplo)- lo que hace que la actividad eléctrica, aunque presente y aparentemente ordenada, no se traduzca en un latido real.',
  no:{
    1:'Precisamente esta característica -ritmo organizado sin pulso efectivo- es lo que la distingue de los demás ritmos de paro y explica por qué se considera paradójica.',
    2:'A diferencia de la asistolia (línea plana), la actividad eléctrica sin pulso muestra un ritmo ORGANIZADO en el monitor, esa es precisamente la paradoja.',
    3:'La actividad eléctrica sin pulso suele deberse con frecuencia a una causa MECÁNICA subyacente (hipovolemia, taponamiento), no exclusivamente a una arritmia primaria.'
  },
  trampa:'Confundir la actividad eléctrica sin pulso con la asistolia, o asumir que siempre tiene una causa eléctrica primaria en vez de una causa mecánica subyacente.',
  obj:'Explicar por qué la actividad eléctrica sin pulso se considera un ritmo paradójico de paro cardíaco.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['actividad eléctrica sin pulso','causa mecánica subyacente','ritmo organizado sin gasto cardíaco']
},
{
  id:'U9-SV-Q19', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Ritmos de paro y desfibrilación', sub:'Mecanismo de la descarga eléctrica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo actúa una descarga de desfibrilación sobre un ritmo desfibrilable como la fibrilación ventricular?',
  ops:[
    'Despolariza de golpe a todo el músculo cardíaco a la vez, dando al nodo sinusal la oportunidad de retomar el control del ritmo desde cero',
    'La descarga eléctrica introduce un ritmo cardíaco completamente nuevo, sin ninguna relación con el nodo sinusal natural del paciente', 'La descarga eléctrica solo afecta a una pequeña porción del músculo cardíaco, dejando el resto sin ningún cambio', 'La desfibrilación funciona añadiendo actividad eléctrica adicional a la ya presente en la fibrilación ventricular'],
  ok:0,
  clave:'Despolariza de golpe a todo el músculo cardíaco a la vez, dando al nodo sinusal la oportunidad de retomar el control del ritmo desde cero.',
  exp:'La descarga eléctrica del desfibrilador despolariza de golpe a todo el músculo cardíaco a la vez, "reiniciando" eléctricamente el corazón, y dando al nodo sinusal (el marcapasos natural del corazón, ya visto en Fisiología II) la oportunidad de retomar el control del ritmo desde cero, con la esperanza de que resurja un ritmo organizado y efectivo tras esa descarga.',
  no:{
    1:'La descarga no introduce un ritmo nuevo externo; "reinicia" la actividad eléctrica para que el nodo sinusal natural del paciente pueda retomar el control.',
    2:'La descarga despolariza a TODO el músculo cardíaco simultáneamente, no solo una porción, precisamente el mecanismo que permite "reiniciar" el ritmo.',
    3:'Es precisamente lo contrario: la descarga busca ELIMINAR la actividad eléctrica caótica existente, no añadir más actividad eléctrica.'
  },
  trampa:'Confundir el mecanismo de la desfibrilación (despolarización total que permite un reinicio) con la introducción de un ritmo externo o la adición de más actividad eléctrica.',
  obj:'Explicar el mecanismo por el cual la descarga de desfibrilación puede revertir un ritmo desfibrilable.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['desfibrilación','despolarización total','nodo sinusal']
},
{
  id:'U9-SV-Q20', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Ritmos de paro y desfibrilación', sub:'Por qué reconocer el ritmo decide toda la conducta',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué distinguir correctamente entre los cuatro ritmos posibles de un paro cardíaco es tan determinante para la conducta del equipo de reanimación?',
  ops:[
    'Porque aplicar una descarga a un ritmo no desfibrilable no solo es inútil, sino que retrasa las compresiones torácicas continuas, que en ese momento sí son la intervención con mayor beneficio real',
    'El ritmo específico del paro nunca influye en qué intervención se prioriza durante la reanimación', 'Todos los ritmos de paro requieren exactamente la misma conducta inmediata, sin ninguna diferencia', 'Reconocer el ritmo solo es relevante después de que el paciente ya se recuperó del paro'],
  ok:0,
  clave:'Aplicar una descarga a un ritmo no desfibrilable no solo es inútil, sino que retrasa las compresiones torácicas continuas, la intervención con mayor beneficio real en ese momento.',
  exp:'Distinguir entre estos cuatro ritmos posibles de un paro cardíaco es, en la práctica, el paso que decide toda la conducta siguiente del equipo de reanimación: aplicar una descarga a un ritmo no desfibrilable no solo es inútil, sino que retrasa las compresiones torácicas continuas, que en ese momento sí son la intervención con mayor beneficio real -por eso el algoritmo de paro incluye reevaluaciones periódicas del ritmo, ajustando la conducta según corresponda.',
  no:{
    1:'El ritmo específico del paro sí determina directamente qué intervención se prioriza, siendo precisamente el punto central de esta pregunta.',
    2:'Los cuatro ritmos de paro NO requieren la misma conducta inmediata; los desfibrilables requieren descarga, los no desfibrilables no.',
    3:'Reconocer el ritmo es relevante DURANTE la reanimación misma, para decidir la conducta inmediata, no solo después de la recuperación.'
  },
  trampa:'Subestimar la importancia clínica de identificar correctamente el ritmo de paro para decidir si desfibrilar o priorizar compresiones y buscar causas reversibles.',
  obj:'Explicar por qué reconocer correctamente el ritmo de paro determina la conducta del equipo de reanimación.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['reconocimiento del ritmo','conducta de reanimación','reevaluación periódica']
},
{
  id:'U9-SV-Q21', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Ritmos de paro y desfibrilación', sub:'Taquicardia ventricular sin pulso',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la taquicardia ventricular sin pulso es considerada un ritmo desfibrilable, igual que la fibrilación ventricular?',
  ops:[
    'Porque, aunque es una actividad eléctrica organizada, es extremadamente rápida y también incapaz de generar un latido efectivo',
    'La taquicardia ventricular sin pulso genera siempre un latido efectivo y un pulso palpable normal', 'La taquicardia ventricular sin pulso no tiene ninguna relación con la fibrilación ventricular en cuanto a su tratamiento', 'Este ritmo se caracteriza por la ausencia completa de actividad eléctrica cardíaca, igual que la asistolia'],
  ok:0,
  clave:'Aunque es una actividad eléctrica organizada, es extremadamente rápida y también incapaz de generar un latido efectivo.',
  exp:'La taquicardia ventricular sin pulso es una actividad eléctrica organizada pero extremadamente rápida, también incapaz de generar un latido efectivo pese a tener, en el monitor, una apariencia más ordenada que la fibrilación ventricular; por eso, igual que la fibrilación ventricular, es un ritmo "desfibrilable": la descarga eléctrica puede "reiniciar" el ritmo cardíaco y dar oportunidad a que el nodo sinusal retome el control.',
  no:{
    1:'Es precisamente lo contrario: por definición, la taquicardia ventricular SIN PULSO no genera un pulso palpable ni un latido efectivo.',
    2:'Ambos ritmos comparten el mismo tratamiento (desfibrilación), precisamente por ser ambos ritmos desfibrilables, aunque su apariencia eléctrica sea distinta.',
    3:'La ausencia completa de actividad eléctrica describe a la asistolia, no a la taquicardia ventricular sin pulso, que sí tiene actividad eléctrica organizada.'
  },
  trampa:'Confundir la taquicardia ventricular sin pulso con un ritmo que sí genera pulso, o con la asistolia, que carece por completo de actividad eléctrica.',
  obj:'Explicar por qué la taquicardia ventricular sin pulso es un ritmo desfibrilable pese a tener actividad eléctrica organizada.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['taquicardia ventricular sin pulso','ritmo desfibrilable','actividad eléctrica organizada']
},
{
  id:'U9-SV-Q22', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Ritmos de paro y desfibrilación', sub:'Tratamiento de los ritmos no desfibrilables',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿En qué se enfoca el tratamiento de un paciente en asistolia o en actividad eléctrica sin pulso, si no en la desfibrilación?',
  ops:[
    'En RCP de alta calidad y en buscar activamente y corregir la causa subyacente que está impidiendo un latido efectivo',
    'En estos ritmos no existe ningún tratamiento posible, y la reanimación debe suspenderse de inmediato', 'En aplicar descargas eléctricas repetidas hasta que el ritmo cambie a uno desfibrilable', 'En administrar exclusivamente fármacos, sin ninguna necesidad de mantener las compresiones torácicas'],
  ok:0,
  clave:'En RCP de alta calidad y en buscar activamente y corregir la causa subyacente que está impidiendo un latido efectivo.',
  exp:'En asistolia y actividad eléctrica sin pulso, ninguno de estos dos ritmos es desfibrilable: el tratamiento se enfoca en RCP de alta calidad y en buscar activamente y corregir la causa subyacente que está impidiendo un latido efectivo -por ejemplo, una hipovolemia severa o un taponamiento cardíaco-, no en la descarga eléctrica, que en estos ritmos no tiene ningún fundamento fisiológico.',
  no:{
    1:'Sí existe un tratamiento posible y bien definido para estos ritmos: RCP de calidad y búsqueda activa de causas reversibles; la reanimación no se suspende automáticamente.',
    2:'La desfibrilación no tiene fundamento fisiológico en estos ritmos no desfibrilables; aplicar descargas repetidas no es el tratamiento correcto.',
    3:'Las compresiones torácicas siguen siendo centrales en el tratamiento de estos ritmos; los fármacos se administran junto con la RCP continua, no en su lugar.'
  },
  trampa:'Asumir que la desfibrilación repetida es el tratamiento de cualquier ritmo de paro, ignorando que en ritmos no desfibrilables el enfoque es distinto.',
  obj:'Explicar en qué se enfoca el tratamiento de los ritmos no desfibrilables de paro cardíaco.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['ritmo no desfibrilable','causa reversible','RCP de alta calidad']
},
{
  id:'U9-SV-Q23', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Soporte vital avanzado: fármacos y algoritmo', sub:'Efecto vasoconstrictor de la epinefrina',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo ayuda el efecto vasoconstrictor de la epinefrina durante la reanimación de un paro cardíaco?',
  ops:[
    'Redirige la poca sangre que la RCP logra mover artificialmente hacia el corazón y el cerebro, los órganos más prioritarios en ese momento',
    'El efecto vasoconstrictor de la epinefrina no tiene ninguna relación con la distribución del flujo sanguíneo durante la reanimación', 'La epinefrina vasodilata los vasos sanguíneos, aumentando el flujo hacia todos los órganos por igual', 'La epinefrina se administra únicamente por su efecto sobre la frecuencia respiratoria, no sobre la circulación'],
  ok:0,
  clave:'Redirige la poca sangre que la RCP logra mover artificialmente hacia el corazón y el cerebro, los órganos más prioritarios en ese momento.',
  exp:'La epinefrina es el fármaco central del soporte vital avanzado en cualquier ritmo de paro: su efecto vasoconstrictor (a través de receptores alfa-adrenérgicos, ya vistos en Farmacología) redirige la poca sangre que la RCP logra mover artificialmente hacia el corazón y el cerebro, los órganos más prioritarios de proteger en ese momento crítico, sacrificando la perfusión de otros territorios menos urgentes como la piel o el intestino.',
  no:{
    1:'El efecto vasoconstrictor de la epinefrina tiene una relación directa y central con la redistribución del flujo sanguíneo durante la reanimación.',
    2:'Es precisamente lo contrario: la epinefrina VASOCONSTRIÑE (no vasodilata), redirigiendo el flujo hacia órganos prioritarios en vez de distribuirlo por igual.',
    3:'La epinefrina se administra principalmente por su efecto vasoconstrictor sobre la circulación, no por un efecto sobre la frecuencia respiratoria.'
  },
  trampa:'Invertir el efecto de la epinefrina (vasoconstricción, no vasodilatación) o desconocer su propósito de redirigir el flujo hacia órganos prioritarios.',
  obj:'Explicar el mecanismo por el cual el efecto vasoconstrictor de la epinefrina ayuda durante la reanimación.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['epinefrina','efecto vasoconstrictor','redistribución del flujo sanguíneo']
},
{
  id:'U9-SV-Q24', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Soporte vital avanzado: fármacos y algoritmo', sub:'Uso específico de la amiodarona',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Para qué situación específica se reserva la amiodarona dentro del soporte vital avanzado?',
  ops:[
    'Para los ritmos desfibrilables (fibrilación ventricular o taquicardia ventricular sin pulso) que persisten pese a la desfibrilación repetida',
    'La amiodarona se usa como primera línea en cualquier ritmo de paro, desfibrilable o no', 'La amiodarona se reserva exclusivamente para pacientes en asistolia, nunca para ritmos desfibrilables', 'La amiodarona reemplaza por completo la necesidad de aplicar desfibrilación en cualquier caso'],
  ok:0,
  clave:'Se reserva para los ritmos desfibrilables (fibrilación ventricular o taquicardia ventricular sin pulso) que persisten pese a la desfibrilación repetida.',
  exp:'La amiodarona se reserva específicamente para los ritmos desfibrilables (fibrilación ventricular o taquicardia ventricular sin pulso) que persisten pese a la desfibrilación repetida, actuando sobre la conducción eléctrica del corazón para intentar estabilizar un ritmo que la descarga eléctrica por sí sola no logró revertir.',
  no:{
    1:'La amiodarona no es de primera línea en cualquier ritmo; se reserva específicamente para ritmos desfibrilables persistentes tras la desfibrilación.',
    2:'Es precisamente lo contrario: la amiodarona se usa en ritmos DESFIBRILABLES persistentes, no en la asistolia, que no es un ritmo desfibrilable.',
    3:'La amiodarona complementa a la desfibrilación en ritmos persistentes, no la reemplaza; la descarga eléctrica sigue siendo necesaria.'
  },
  trampa:'Confundir el uso específico de la amiodarona (ritmos desfibrilables persistentes) con un uso general en cualquier ritmo de paro.',
  obj:'Explicar para qué situación específica se reserva el uso de la amiodarona en el soporte vital avanzado.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['amiodarona','ritmo desfibrilable persistente','conducción eléctrica cardíaca']
},
{
  id:'U9-SV-Q25', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Soporte vital avanzado: fármacos y algoritmo', sub:'Vía intraósea como alternativa',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un paciente en paro cardíaco, el equipo de reanimación tiene dificultad para lograr un acceso intravenoso rápido debido al colapso circulatorio.',
  enunciado:'¿Qué alternativa se recomienda en esta situación, y por qué?',
  ops:[
    'Una vía intraósea, administrada directamente al hueso, cuya médula ósea tiene una red vascular que permite llegar a la circulación general casi tan rápido como una vena',
    'Esperar el tiempo que sea necesario hasta lograr un acceso intravenoso, sin considerar ninguna alternativa', 'Suspender la administración de fármacos por completo hasta que el paciente recupere circulación espontánea', 'La vía intraósea nunca es una alternativa válida durante un paro cardíaco'],
  ok:0,
  clave:'Una vía intraósea, cuya médula ósea tiene una red vascular que permite llegar a la circulación general casi tan rápido como una vena.',
  exp:'Si no se logra rápido un acceso intravenoso, se recomienda una vía intraósea, administrada directamente al hueso, cuya médula ósea tiene una red vascular que permite llegar a la circulación general casi tan rápido como una vena -en un paciente en paro, cada segundo sin acceso a la circulación retrasa la administración de fármacos que podrían ser determinantes, así que no vale la pena insistir demasiado tiempo en una vía intravenosa difícil cuando la intraósea está disponible.',
  no:{
    1:'Esperar indefinidamente a lograr un acceso intravenoso retrasa fármacos potencialmente determinantes; existe una alternativa más rápida disponible.',
    2:'Los fármacos como la epinefrina siguen siendo centrales durante la reanimación; suspender su administración no es la conducta recomendada.',
    3:'La vía intraósea es precisamente una alternativa válida y recomendada cuando el acceso intravenoso es difícil durante un paro cardíaco.'
  },
  trampa:'No reconocer la vía intraósea como una alternativa rápida y válida cuando el acceso intravenoso es difícil durante la reanimación.',
  obj:'Explicar por qué la vía intraósea es una alternativa recomendada cuando el acceso intravenoso es difícil durante un paro.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['vía intraósea','acceso a la circulación','colapso circulatorio']
},
{
  id:'U9-SV-Q26', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Soporte vital avanzado: fármacos y algoritmo', sub:'El algoritmo como secuencia, no lista suelta',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el algoritmo de paro se describe como una secuencia temporal precisa, y no como una lista suelta de intervenciones?',
  ops:[
    'Porque está diseñado precisamente para minimizar las interrupciones de las compresiones torácicas, que siguen siendo la base de todo el manejo',
    'El orden en que se aplican las intervenciones del algoritmo de paro no tiene ninguna importancia real', 'Cualquier intervención del algoritmo puede aplicarse en cualquier momento, sin ninguna secuencia definida', 'El algoritmo de paro consiste únicamente en administrar fármacos, sin relación con las compresiones torácicas'],
  ok:0,
  clave:'Está diseñado precisamente para minimizar las interrupciones de las compresiones torácicas, que siguen siendo la base de todo el manejo.',
  exp:'El algoritmo de paro organiza las intervenciones (RCP continua, desfibrilación si el ritmo lo indica, fármacos administrados en momentos determinados, reevaluación periódica del ritmo) en una secuencia temporal precisa, diseñada precisamente para minimizar las interrupciones de las compresiones torácicas -recordando que la calidad de las compresiones sigue siendo la base de todo, y el resto de las intervenciones se insertan alrededor de ella, no en su lugar.',
  no:{
    1:'El orden de las intervenciones sí tiene una importancia central, precisamente para minimizar interrupciones de las compresiones torácicas.',
    2:'Las intervenciones del algoritmo siguen una secuencia definida y deliberada, no pueden aplicarse en cualquier momento sin criterio.',
    3:'El algoritmo integra fármacos, desfibrilación y compresiones torácicas de forma coordinada, no consiste únicamente en fármacos aislados.'
  },
  trampa:'Subestimar la importancia de la secuencia temporal precisa del algoritmo de paro, asumiendo que las intervenciones son intercambiables en cualquier orden.',
  obj:'Explicar por qué el algoritmo de paro se organiza como una secuencia temporal precisa, no como una lista suelta.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['algoritmo de paro','secuencia temporal','minimizar interrupciones']
},
{
  id:'U9-SV-Q27', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Soporte vital avanzado: fármacos y algoritmo', sub:'Costo de interrumpir las compresiones',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué cada pausa en las compresiones torácicas -para desfibrilar, para intubar, para verificar el ritmo- se planifica para ser lo más breve posible?',
  ops:[
    'Porque el flujo sanguíneo generado por las compresiones cae rápidamente apenas se interrumpen, y recuperar ese flujo eficiente lleva varias compresiones adicionales una vez que se reanudan',
    'Las pausas en las compresiones torácicas nunca afectan el flujo sanguíneo generado durante la reanimación', 'El flujo sanguíneo generado por las compresiones se mantiene exactamente igual, se interrumpan o no las compresiones', 'Reanudar las compresiones después de una pausa siempre recupera el flujo eficiente de forma inmediata, sin ningún retraso'],
  ok:0,
  clave:'El flujo sanguíneo generado por las compresiones cae rápidamente apenas se interrumpen, y recuperar ese flujo eficiente lleva varias compresiones adicionales.',
  exp:'Cada pausa en las compresiones -para desfibrilar, para intubar, para verificar el ritmo- se planifica para ser lo más breve posible, porque el flujo sanguíneo generado por las compresiones cae rápidamente apenas se interrumpen, y recuperar ese flujo eficiente lleva varias compresiones adicionales una vez que se reanudan -por eso minimizar el número y la duración de las pausas es un objetivo central del algoritmo de paro.',
  no:{
    1:'Las pausas en las compresiones sí afectan de forma directa y documentada el flujo sanguíneo generado durante la reanimación.',
    2:'Es precisamente lo contrario: el flujo sanguíneo CAE rápidamente al interrumpir las compresiones, no se mantiene igual.',
    3:'Reanudar las compresiones NO recupera el flujo eficiente de forma inmediata; se necesitan varias compresiones adicionales para restablecerlo.'
  },
  trampa:'Subestimar el costo real, en términos de flujo sanguíneo perdido, de cada interrupción de las compresiones torácicas durante la reanimación.',
  obj:'Explicar por qué cada pausa en las compresiones torácicas se planifica para ser lo más breve posible.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['pausas en las compresiones','flujo sanguíneo','recuperación del flujo eficiente']
},
{
  id:'U9-SV-Q28', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Soporte vital avanzado: fármacos y algoritmo', sub:'El soporte avanzado complementa, no reemplaza',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué sentido el soporte vital avanzado "complementa" a la RCP básica, en vez de reemplazarla?',
  ops:[
    'Añade fármacos y una vía de acceso a la circulación, sin que eso justifique nunca interrumpir las compresiones torácicas de calidad por más de unos segundos',
    'El soporte vital avanzado sustituye por completo la necesidad de realizar compresiones torácicas', 'Los fármacos del soporte vital avanzado eliminan la necesidad de cualquier desfibrilación posterior', 'El soporte vital avanzado y la RCP básica son dos protocolos completamente independientes, sin ninguna relación'],
  ok:0,
  clave:'Añade fármacos y una vía de acceso a la circulación, sin que eso justifique nunca interrumpir las compresiones torácicas de calidad por más de unos segundos.',
  exp:'El soporte vital avanzado no reemplaza a la RCP básica ya vista: la complementa, añadiendo fármacos y una vía de acceso a la circulación, sin que eso justifique nunca interrumpir las compresiones torácicas de calidad por más de unos segundos -ningún fármaco ni ninguna descarga eléctrica sustituye a la RCP de calidad, que sigue siendo la base de todo el manejo del paro.',
  no:{
    1:'Es precisamente lo contrario: el soporte vital avanzado se AÑADE a las compresiones torácicas, no las sustituye.',
    2:'Los fármacos complementan, pero no eliminan la necesidad de desfibrilación cuando el ritmo lo indica; ambas intervenciones coexisten en el algoritmo.',
    3:'El soporte vital avanzado y la RCP básica están estrechamente integrados en el mismo algoritmo de paro, no son protocolos independientes.'
  },
  trampa:'Asumir que el soporte vital avanzado (fármacos, vía de acceso) reemplaza la necesidad de mantener compresiones torácicas continuas de calidad.',
  obj:'Explicar en qué sentido el soporte vital avanzado complementa, en vez de reemplazar, a la RCP básica.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['soporte vital avanzado','complemento de la RCP básica','compresiones continuas']
},
{
  id:'U9-SV-Q29', programa:'unirm', cuatri:9,
  esp:'Soporte Vital Básico y Avanzado', tema:'Soporte vital avanzado: fármacos y algoritmo', sub:'Elección entre vía intravenosa e intraósea',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿De qué depende, en la práctica, la elección entre vía intravenosa e intraósea durante un paro cardíaco?',
  ops:[
    'De qué tan rápido se puede lograr un acceso confiable, dado que cada segundo sin acceso a la circulación retrasa fármacos potencialmente determinantes',
    'La vía intravenosa siempre debe intentarse durante el tiempo que sea necesario, sin importar cuánto tarde en lograrse', 'La elección entre ambas vías depende exclusivamente de la preferencia personal del reanimador, sin ningún criterio clínico', 'La vía intraósea nunca puede considerarse una opción válida mientras exista la posibilidad teórica de una vía intravenosa'],
  ok:0,
  clave:'De qué tan rápido se puede lograr un acceso confiable, dado que cada segundo sin acceso a la circulación retrasa fármacos potencialmente determinantes.',
  exp:'La elección entre vía intravenosa e intraósea depende, en la práctica, de qué tan rápido se puede lograr un acceso confiable: en un paciente en paro, cada segundo sin acceso a la circulación retrasa la administración de fármacos que podrían ser determinantes, así que no vale la pena insistir demasiado tiempo en una vía intravenosa difícil cuando la intraósea está disponible y puede lograrse más rápido.',
  no:{
    1:'Es precisamente lo contrario: no se recomienda insistir en la vía intravenosa "el tiempo que sea necesario"; se prioriza la rapidez del acceso.',
    2:'La elección se basa en un criterio clínico objetivo (rapidez del acceso confiable), no en la preferencia personal sin fundamento del reanimador.',
    3:'La vía intraósea sí es una opción válida y recomendada cuando el acceso intravenoso es difícil o tarda demasiado, no una alternativa de último recurso teórica.'
  },
  trampa:'Asumir que la vía intravenosa siempre debe priorizarse sin límite de tiempo, ignorando el criterio clínico real de elegir la vía más rápida disponible.',
  obj:'Explicar el criterio clínico que determina la elección entre vía intravenosa e intraósea durante un paro cardíaco.',
  ref:'American Heart Association, Guías de RCP y ACE.',
  tags:['vía intravenosa','vía intraósea','rapidez del acceso']
}

]);
