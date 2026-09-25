/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE RELACION MEDICO-PACIENTE (1/2)
   Amplia Relacion Medico-Paciente de 1 a 50 preguntas junto con
   unirm-09-banco-17.js. Esta parte cubre consentimiento
   informado, comunicacion de malas noticias, confidencialidad y
   principios de bioetica medica (temas 1-4).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== RELACION MEDICO-PACIENTE ===================== */
{
  id:'U9-RM-Q02', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Consentimiento informado', sub:'El papel firmado no reemplaza el proceso',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente firma el formulario de consentimiento treinta segundos antes de entrar a cirugía, sin que antes se le hayan explicado los riesgos ni las alternativas disponibles.',
  enunciado:'¿Este consentimiento es válido?',
  ops:[
    'No, porque el documento firmado registra que la conversación ocurrió, pero no la reemplaza; sin la explicación previa, el proceso real nunca ocurrió',
    'Sí, porque la firma del paciente es, por sí sola, suficiente para que el consentimiento sea válido', 'Sí, siempre que el paciente haya leído el formulario antes de firmarlo, sin importar si alguien se lo explicó', 'No es posible determinar la validez del consentimiento sin conocer el tipo específico de cirugía'],
  ok:0,
  clave:'No es válido: el documento firmado registra que la conversación ocurrió, pero no la reemplaza; sin explicación previa, el proceso real nunca ocurrió.',
  exp:'El consentimiento informado no es el papel que se firma: es un PROCESO de conversación, y el papel firmado es solo la evidencia de que ese proceso ocurrió. Pedirle a un paciente que firme un formulario sin haber explicado antes los riesgos ni las alternativas no es consentimiento informado válido, aunque exista una firma -el documento registra la conversación, no la reemplaza.',
  no:{
    1:'La firma por sí sola NO es suficiente; se requiere que el proceso completo de información y comprensión haya ocurrido antes de la firma.',
    2:'Leer el formulario sin que se le haya explicado ni haya tenido oportunidad de preguntar no cumple con el proceso real de consentimiento informado.',
    3:'La validez del consentimiento depende del PROCESO seguido (información, comprensión, voluntariedad), no del tipo específico de cirugía realizada.'
  },
  trampa:'Confundir la existencia de una firma con la validez real del proceso de consentimiento informado.',
  obj:'Determinar si un consentimiento firmado sin explicación previa es válido.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 4.',
  tags:['consentimiento informado','proceso vs. documento','firma sin explicación']
},
{
  id:'U9-RM-Q03', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Consentimiento informado', sub:'Excepción de emergencia vital',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente llega inconsciente a emergencias con una lesión que pone en riesgo inmediato su vida, y no hay ningún representante legal disponible en ese momento.',
  enunciado:'¿Se puede actuar sin obtener el consentimiento informado habitual en este caso?',
  ops:[
    'Sí, bajo el principio de que una persona razonable, en esa situación, habría querido ser tratada',
    'No, nunca se puede actuar médicamente sin el consentimiento informado explícito del paciente o su representante', 'Solo se puede actuar si un juez autoriza expresamente el procedimiento de emergencia', 'Se debe esperar a que el paciente recupere la conciencia, sin importar el riesgo vital inmediato'],
  ok:0,
  clave:'Sí, bajo el principio de que una persona razonable, en esa situación, habría querido ser tratada.',
  exp:'La emergencia que pone en riesgo inmediato la vida, cuando el paciente no puede expresar su voluntad y no hay un representante disponible, es una excepción reconocida al proceso habitual de consentimiento informado: se actúa bajo el principio de que una persona razonable, en esa situación, habría querido ser tratada -esperar comprometería la vida del paciente sin ningún beneficio real.',
  no:{
    1:'La emergencia vital inmediata es precisamente una de las excepciones reconocidas donde se puede actuar sin el proceso habitual de consentimiento.',
    2:'Esperar la autorización judicial en una emergencia vital inmediata retrasaría la atención de forma peligrosa; esta excepción no requiere ese paso.',
    3:'Esperar a que el paciente recupere la conciencia, en una emergencia vital inmediata, podría costarle la vida; por eso existe esta excepción reconocida.'
  },
  trampa:'No reconocer la emergencia vital inmediata como una excepción legítima y bien establecida al proceso habitual de consentimiento informado.',
  obj:'Aplicar la excepción de emergencia vital al consentimiento informado.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 4.',
  tags:['excepción de emergencia','consentimiento informado','riesgo vital inmediato']
},
{
  id:'U9-RM-Q04', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Consentimiento informado', sub:'Rechazo del paciente informado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el rechazo de un tratamiento por parte de un paciente informado y con capacidad para decidir es considerado una excepción legítima, y no una falla del consentimiento?',
  ops:[
    'Porque el rechazo informado también es parte de la autonomía del paciente: tiene derecho a decir que no, aunque esa decisión parezca equivocada desde la perspectiva médica',
    'Un paciente nunca tiene derecho legítimo a rechazar un tratamiento recomendado por el equipo médico', 'El rechazo del paciente solo es válido si coincide con la recomendación del equipo médico tratante', 'Rechazar un tratamiento siempre indica que el paciente no comprendió correctamente la información brindada'],
  ok:0,
  clave:'El rechazo informado también es parte de la autonomía del paciente: tiene derecho a decir que no, aunque esa decisión parezca equivocada desde la perspectiva médica.',
  exp:'El rechazo válido del propio paciente informado también es parte de su autonomía: tiene derecho a decir que no, incluso si esa decisión parece equivocada desde la perspectiva médica, siempre que esté adecuadamente informado y tenga capacidad para decidir -no es una falla del proceso de consentimiento, sino su ejercicio legítimo en sentido negativo.',
  no:{
    1:'Un paciente con capacidad para decidir SÍ tiene el derecho legítimo de rechazar un tratamiento recomendado, como parte de su autonomía.',
    2:'La validez del rechazo no depende de si coincide con la recomendación médica; depende de que el paciente esté informado y tenga capacidad para decidir.',
    3:'Rechazar un tratamiento no indica automáticamente falta de comprensión; puede ser una decisión plenamente informada y voluntaria.'
  },
  trampa:'Asumir que un rechazo del paciente siempre implica que no comprendió la información, en vez de reconocerlo como un ejercicio legítimo de autonomía.',
  obj:'Explicar por qué el rechazo informado de un tratamiento es una excepción legítima del consentimiento, no una falla del proceso.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 4.',
  tags:['rechazo informado','autonomía del paciente','derecho a decir que no']
},
{
  id:'U9-RM-Q05', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Consentimiento informado', sub:'Capacidad para decidir específica, no global',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con un diagnóstico psiquiátrico estable comprende con claridad la información sobre un procedimiento quirúrgico menor, valora los riesgos y beneficios, y comunica una decisión coherente al respecto.',
  enunciado:'¿Tiene este paciente capacidad para decidir sobre este procedimiento específico?',
  ops:[
    'Sí, porque la capacidad para decidir se evalúa para ESA decisión concreta, no de forma global basada solo en el diagnóstico psiquiátrico',
    'No, ningún paciente con un diagnóstico psiquiátrico puede tener capacidad para decidir sobre ningún procedimiento médico', 'La capacidad para decidir depende exclusivamente del diagnóstico psiquiátrico del paciente, sin importar su comprensión real', 'Solo un paciente sin ningún diagnóstico psiquiátrico puede tener capacidad legítima para decidir sobre su tratamiento'],
  ok:0,
  clave:'Sí, porque la capacidad para decidir se evalúa para ESA decisión concreta, no de forma global basada solo en el diagnóstico psiquiátrico.',
  exp:'La capacidad para decidir no es todo o nada ni depende solo del diagnóstico: un paciente con una enfermedad psiquiátrica puede tener capacidad para decidir sobre un procedimiento concreto, si comprende la información, la valora y puede comunicar una decisión coherente. Se evalúa la capacidad para ESA decisión concreta, no la persona en abstracto según su diagnóstico.',
  no:{
    1:'Un diagnóstico psiquiátrico, por sí solo, no elimina automáticamente la capacidad para decidir sobre una decisión concreta que el paciente sí comprende.',
    2:'La capacidad para decidir depende de la comprensión, valoración y comunicación real de la decisión, no exclusivamente del diagnóstico psiquiátrico presente.',
    3:'Un paciente sin diagnóstico psiquiátrico también puede, en ciertas situaciones, carecer de capacidad para una decisión específica; el diagnóstico no es el criterio determinante.'
  },
  trampa:'Asumir que un diagnóstico psiquiátrico elimina automáticamente la capacidad para decidir, en vez de evaluar la capacidad para la decisión concreta en cuestión.',
  obj:'Aplicar el criterio de que la capacidad para decidir es específica de cada decisión concreta, no un juicio global basado en el diagnóstico.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 4.',
  tags:['capacidad para decidir','evaluación específica','diagnóstico psiquiátrico']
},
{
  id:'U9-RM-Q06', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Consentimiento informado', sub:'Consentimiento en menores de edad',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Quién otorga el consentimiento informado para un procedimiento médico en un menor de edad, fuera de una emergencia vital inmediata?',
  ops:['Un representante legal del menor', 'El propio menor, sin ninguna excepción posible en ningún caso', 'Ningún procedimiento médico puede realizarse en un menor de edad bajo ninguna circunstancia', 'Un médico distinto del que atiende directamente al menor, de forma independiente'],
  ok:0,
  clave:'Un representante legal del menor otorga el consentimiento, salvo la emergencia vital inmediata.',
  exp:'En menor de edad o adulto sin capacidad para decidir, el consentimiento lo otorga un representante legal -salvo, de nuevo, la emergencia vital inmediata, donde actuar no puede esperar a localizar a ese representante-; esta excepción existe precisamente porque el menor, por su edad, generalmente no tiene la capacidad legal reconocida para dar ese consentimiento por sí solo en la mayoría de los procedimientos.',
  no:{
    1:'Existen excepciones reales (la emergencia vital inmediata) donde se puede actuar sin esperar el consentimiento del representante legal.',
    2:'Sí es posible realizar procedimientos médicos en menores de edad, con el consentimiento otorgado por su representante legal.',
    3:'El consentimiento lo otorga el representante legal del menor, no un médico independiente ajeno a la relación de representación legal.'
  },
  trampa:'Asumir que un menor de edad nunca puede recibir atención médica, o que el consentimiento debe venir de una fuente distinta al representante legal.',
  obj:'Identificar quién otorga el consentimiento informado en un menor de edad, fuera de la emergencia vital inmediata.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 4.',
  tags:['consentimiento en menores','representante legal','excepción de emergencia']
},
{
  id:'U9-RM-Q07', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Consentimiento informado', sub:'Elementos que deben cumplirse a la vez',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué elementos deben cumplirse SIMULTÁNEAMENTE para que un consentimiento informado sea válido?',
  ops:[
    'Información comprensible sobre riesgos, beneficios y alternativas; capacidad para decidir; voluntariedad sin coacción; y una decisión expresada de forma clara',
    'Basta con que el paciente reciba información, sin importar si tiene capacidad para decidir o si actúa voluntariamente', 'Solo es necesario que el paciente firme un documento, sin ningún otro requisito adicional', 'Basta con que la decisión sea voluntaria, sin importar si el paciente recibió información comprensible'],
  ok:0,
  clave:'Información comprensible, capacidad para decidir, voluntariedad sin coacción, y una decisión expresada de forma clara, todos a la vez.',
  exp:'Para que un consentimiento sea válido, tienen que cumplirse varios elementos a la vez: que el paciente reciba información comprensible sobre el procedimiento, sus beneficios esperados, sus riesgos y las alternativas disponibles; que el paciente tenga capacidad para decidir; que la decisión sea voluntaria, sin coacción; y que quede expresada de forma clara -la ausencia de cualquiera de estos elementos invalida el proceso, aunque los demás estén presentes.',
  no:{
    1:'La capacidad para decidir es un elemento necesario, no opcional; sin ella, el consentimiento no es válido aunque haya información.',
    2:'Una firma sola, sin el proceso real de información y comprensión, no constituye un consentimiento informado válido.',
    3:'La voluntariedad sin información comprensible no es suficiente; el paciente necesita entender lo que está decidiendo.'
  },
  trampa:'Reducir los elementos del consentimiento informado a uno solo (la firma, la información, o la voluntariedad), en vez de reconocer que todos deben cumplirse a la vez.',
  obj:'Identificar los elementos que deben cumplirse simultáneamente para que un consentimiento informado sea válido.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 4.',
  tags:['elementos del consentimiento','información comprensible','voluntariedad']
},
{
  id:'U9-RM-Q08', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Consentimiento informado', sub:'El consentimiento incluye la alternativa de no hacer nada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la información brindada para un consentimiento informado debe incluir la alternativa de "no hacer nada", y no solo las opciones de tratamiento activo?',
  ops:[
    'Porque el paciente tiene derecho a conocer todas las alternativas reales disponibles, incluida la de no intervenir, para poder decidir con información completa',
    'La alternativa de no hacer nada nunca es relevante para un consentimiento informado válido', 'Solo se deben presentar las alternativas de tratamiento que el médico considera más recomendables', 'Mencionar la opción de no tratar siempre desanima al paciente de aceptar cualquier tratamiento necesario'],
  ok:0,
  clave:'El paciente tiene derecho a conocer todas las alternativas reales disponibles, incluida la de no intervenir, para decidir con información completa.',
  exp:'Para que un consentimiento sea válido, el paciente debe recibir información comprensible sobre el procedimiento, sus beneficios esperados, sus riesgos y las alternativas disponibles, incluida la alternativa de no hacer nada: omitir esta opción limita artificialmente las alternativas reales que el paciente puede considerar, comprometiendo la calidad de su decisión autónoma.',
  no:{
    1:'La alternativa de no hacer nada es precisamente una de las alternativas que debe presentarse para que el consentimiento sea completo y válido.',
    2:'El paciente tiene derecho a conocer TODAS las alternativas reales, no solo las que el médico personalmente prefiere o recomienda.',
    3:'Presentar la opción de no tratar no necesariamente desanima al paciente; es parte de brindarle información completa para una decisión autónoma real.'
  },
  trampa:'Asumir que el consentimiento informado solo requiere presentar las opciones de tratamiento activo, omitiendo la alternativa de no intervenir.',
  obj:'Explicar por qué la alternativa de no hacer nada debe incluirse en la información brindada para el consentimiento informado.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 4.',
  tags:['alternativa de no tratar','información completa','decisión autónoma']
},
{
  id:'U9-RM-Q09', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Comunicación de malas noticias', sub:'Los seis pasos del protocolo SPIKES',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué representa cada letra del protocolo SPIKES para comunicar malas noticias?',
  ops:[
    'Setting (entorno), Perception (percepción del paciente), Invitation (invitación), Knowledge (información), Emotions (emociones), Strategy/Summary (estrategia/resumen)',
    'Symptom (síntoma), Prognosis (pronóstico), Intervention (intervención), Knowledge (conocimiento), Ethics (ética), Support (apoyo)', 'Solo describe el orden alfabético en que deben presentarse los diagnósticos al paciente', 'Se refiere exclusivamente a los medicamentos que se pueden prescribir tras dar una mala noticia'],
  ok:0,
  clave:'Setting (entorno), Perception (percepción), Invitation (invitación), Knowledge (información), Emotions (emociones), Strategy/Summary (estrategia/resumen).',
  exp:'El protocolo SPIKES organiza la comunicación de malas noticias en seis pasos: preparar el entorno adecuado (Setting), explorar qué sabe ya el paciente (Perception), preguntar qué tanto quiere saber (Invitation), dar la información (Knowledge), responder a las emociones con empatía clínica (Emotions), y finalmente resumir y planificar los próximos pasos (Strategy/Summary).',
  no:{
    1:'Esta secuencia no corresponde al protocolo SPIKES real, que sigue el orden Setting, Perception, Invitation, Knowledge, Emotions, Strategy/Summary.',
    2:'El protocolo SPIKES no organiza diagnósticos alfabéticamente; es una secuencia de pasos de comunicación estructurada.',
    3:'El protocolo SPIKES es un marco de comunicación, no una guía sobre prescripción de medicamentos tras una mala noticia.'
  },
  trampa:'Confundir el significado real de las siglas SPIKES con otro acrónimo o con un contenido no relacionado con la comunicación estructurada.',
  obj:'Recordar el significado de cada paso del protocolo SPIKES para comunicar malas noticias.',
  ref:'Baile et al., SPIKES: A Six-Step Protocol.',
  tags:['protocolo SPIKES','seis pasos','comunicación de malas noticias']
},
{
  id:'U9-RM-Q10', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Comunicación de malas noticias', sub:'Por qué explorar la percepción previa',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el paso "Perception" (explorar qué sabe ya el paciente) se hace ANTES de dar la información nueva?',
  ops:[
    'Porque evita repetir información que el paciente ya tiene, y revela si tiene una idea equivocada que hay que corregir antes de construir sobre ella',
    'El paso Perception no tiene ninguna relación con la calidad de la información que se dará después', 'Explorar la percepción previa del paciente siempre retrasa innecesariamente la comunicación de la noticia', 'Se hace después de dar la información, no antes, según el orden real del protocolo SPIKES'],
  ok:0,
  clave:'Evita repetir información que el paciente ya tiene, y revela si tiene una idea equivocada que hay que corregir antes de construir sobre ella.',
  exp:'Explorar primero qué sabe el paciente (Perception) evita repetir información que ya tiene, o -más importante- revela si el paciente tiene una idea equivocada que hay que corregir antes de construir sobre ella; dar información nueva sobre una base incorrecta puede generar más confusión que claridad.',
  no:{
    1:'El paso Perception tiene una relación directa con la calidad de la comunicación posterior, al asegurar una base correcta antes de añadir información nueva.',
    2:'Explorar la percepción previa no es una demora innecesaria; es un paso funcional que mejora la comunicación posterior, no un obstáculo.',
    3:'Según el orden real del protocolo SPIKES, Perception (P) va ANTES de Knowledge (K), no después.'
  },
  trampa:'Invertir el orden del protocolo SPIKES, o no reconocer la función real de explorar la percepción previa antes de dar información nueva.',
  obj:'Explicar por qué el paso Perception del protocolo SPIKES se realiza antes de dar la información nueva.',
  ref:'Baile et al., SPIKES: A Six-Step Protocol.',
  tags:['percepción previa','protocolo SPIKES','orden de los pasos']
},
{
  id:'U9-RM-Q11', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Comunicación de malas noticias', sub:'Dos errores opuestos que evita el protocolo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son los dos errores comunes y opuestos que el protocolo SPIKES busca evitar al comunicar una mala noticia?',
  ops:[
    'Dar la noticia tan bruscamente que el paciente no tiene tiempo de prepararse, o rodearla tanto que termina más confundido que informado',
    'El único error posible al comunicar una mala noticia es hacerlo con demasiada brusquedad, sin ninguna otra alternativa de error', 'El protocolo SPIKES no busca evitar ningún error específico; es solo una lista de temas a mencionar', 'El único error posible es tardar demasiado tiempo en la conversación completa, sin importar el contenido comunicado'],
  ok:0,
  clave:'Dar la noticia tan bruscamente que el paciente no tiene tiempo de prepararse, o rodearla tanto que termina más confundido que informado.',
  exp:'El protocolo SPIKES no es un guion que se recita palabra por palabra: es una secuencia lógica que evita dos errores comunes y opuestos -dar la noticia de forma tan brusca que el paciente no tiene tiempo de prepararse mentalmente, o rodearla tanto de rodeos y eufemismos que el paciente termina más confundido que informado sobre lo que realmente está pasando.',
  no:{
    1:'Existe un segundo error opuesto igual de relevante: rodear tanto la noticia con eufemismos que el paciente termina confundido, no solo la brusquedad.',
    2:'El protocolo SPIKES sí busca evitar errores específicos y bien identificados en la comunicación, no es una lista neutra de temas.',
    3:'El error central no es únicamente la duración de la conversación, sino el equilibrio entre claridad y sensibilidad al comunicar el contenido.'
  },
  trampa:'Identificar solo uno de los dos errores opuestos que el protocolo SPIKES busca evitar, sin reconocer que ambos extremos son problemáticos.',
  obj:'Identificar los dos errores opuestos que el protocolo SPIKES busca evitar al comunicar malas noticias.',
  ref:'Baile et al., SPIKES: A Six-Step Protocol.',
  tags:['errores en la comunicación','brusquedad','rodeos y eufemismos']
},
{
  id:'U9-RM-Q12', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Comunicación de malas noticias', sub:'Invitation y la autonomía del paciente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué principio ya visto en consentimiento informado retoma directamente el paso "Invitation" del protocolo SPIKES?',
  ops:[
    'La autonomía del paciente, respetando que no todos, en el mismo momento, quieren el mismo nivel de detalle sobre su situación',
    'El paso Invitation no tiene ninguna relación con ningún principio ya visto en consentimiento informado', 'La confidencialidad médica, un tema que se desarrolla más adelante en el bloque, no en este paso', 'La justicia distributiva de recursos de salud, sin ninguna relación con la cantidad de información deseada'],
  ok:0,
  clave:'La autonomía del paciente, respetando que no todos quieren el mismo nivel de detalle en el mismo momento.',
  exp:'Preguntar cuánto quiere saber (Invitation) respeta la autonomía del paciente, retomando directamente el principio ya visto en consentimiento informado: no todos, en el mismo momento, quieren el mismo nivel de detalle, y forzar información no deseada puede ser tan dañino como ocultarla.',
  no:{
    1:'El paso Invitation retoma directamente el principio de autonomía ya visto en consentimiento informado, aplicado a cuánta información recibir.',
    2:'La confidencialidad es un tema distinto, relacionado con proteger información compartida, no con cuánta información nueva el paciente desea recibir.',
    3:'La justicia distributiva no tiene relación directa con este paso específico; el principio que retoma es la autonomía del paciente.'
  },
  trampa:'No reconocer la conexión explícita entre el paso Invitation y el principio de autonomía ya desarrollado en el tema de consentimiento informado.',
  obj:'Explicar la conexión entre el paso Invitation del protocolo SPIKES y el principio de autonomía del paciente.',
  ref:'Baile et al., SPIKES: A Six-Step Protocol.',
  tags:['Invitation','autonomía del paciente','nivel de detalle deseado']
},
{
  id:'U9-RM-Q13', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Comunicación de malas noticias', sub:'Empatía clínica como paso activo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la empatía clínica en el protocolo SPIKES se describe como un paso "activo", más que "ser amable" en general?',
  ops:[
    'Porque implica reconocer explícitamente la emoción que el paciente muestra antes de continuar con más información, dándole espacio a esa reacción',
    'La empatía clínica en este contexto se limita a mantener un tono de voz agradable durante toda la conversación', 'Ser amable de forma general es exactamente equivalente a aplicar el paso de empatía del protocolo SPIKES', 'La empatía clínica en el protocolo SPIKES no requiere ninguna acción específica del profesional de salud'],
  ok:0,
  clave:'Implica reconocer explícitamente la emoción que el paciente muestra antes de continuar con más información, dándole espacio a esa reacción.',
  exp:'La empatía clínica en este contexto no es solo "ser amable": es reconocer explícitamente la emoción que el paciente muestra (silencio, llanto, enojo) antes de continuar con más información, dándole espacio a esa reacción en vez de avanzar como si no hubiera ocurrido -un paso activo y deliberado, no una disposición general de trato amable.',
  no:{
    1:'La empatía clínica en este contexto va más allá del tono de voz; requiere reconocer y nombrar activamente la emoción específica del paciente.',
    2:'Ser amable de forma general es distinto de reconocer explícitamente y dar espacio a la emoción específica del paciente en ese momento.',
    3:'La empatía clínica sí requiere una acción específica y deliberada: reconocer la emoción del paciente antes de continuar, no es pasiva.'
  },
  trampa:'Reducir la empatía clínica del protocolo SPIKES a una actitud general amable, sin reconocer el paso activo y específico que realmente implica.',
  obj:'Explicar por qué la empatía clínica en el protocolo SPIKES es un paso activo, no solo una actitud general amable.',
  ref:'Baile et al., SPIKES: A Six-Step Protocol.',
  tags:['empatía clínica','paso activo','reconocimiento de la emoción']
},
{
  id:'U9-RM-Q14', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Comunicación de malas noticias', sub:'Error de saltarse la pausa emocional',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico da una mala noticia y, de inmediato, sin pausa alguna, pasa directamente a explicar el plan de tratamiento, sin dar espacio a la reacción emocional del paciente.',
  enunciado:'¿Por qué esta conducta es considerada un error frecuente, incluso entre profesionales con buenas intenciones?',
  ops:[
    'Porque la incomodidad de sentarse con la emoción del paciente empuja a "resolver" rápido en vez de acompañar, saltándose un paso funcional del protocolo',
    'Pasar directamente al plan de tratamiento después de dar la noticia siempre es la conducta más eficiente y correcta', 'Dar espacio a la reacción emocional del paciente nunca tiene ningún impacto real en la comunicación posterior', 'Este comportamiento no tiene relación con ningún paso específico del protocolo SPIKES'],
  ok:0,
  clave:'La incomodidad de sentarse con la emoción del paciente empuja a "resolver" rápido en vez de acompañar, saltándose un paso funcional del protocolo.',
  exp:'Saltarse el paso de reconocer la emoción -pasar directamente de dar la información al plan de tratamiento, sin pausa para la reacción emocional- es uno de los errores más frecuentes en la comunicación de malas noticias, incluso entre profesionales con buenas intenciones, porque la incomodidad de sentarse con la emoción del paciente empuja a "resolver" rápido en vez de acompañar.',
  no:{
    1:'Pasar directamente al plan sin dar espacio emocional NO es la conducta más correcta; omite un paso funcional del protocolo SPIKES.',
    2:'Dar espacio a la reacción emocional sí tiene un impacto real: facilita que el paciente procese y retenga mejor la información posterior.',
    3:'Este comportamiento se relaciona directamente con el paso Emotions del protocolo SPIKES, que se está omitiendo en este caso.'
  },
  trampa:'Asumir que avanzar rápido hacia el plan de tratamiento es siempre más eficiente, sin reconocer el costo de saltarse el paso emocional del protocolo.',
  obj:'Explicar por qué saltarse la pausa para reconocer la emoción del paciente es un error frecuente en la comunicación de malas noticias.',
  ref:'Baile et al., SPIKES: A Six-Step Protocol.',
  tags:['pausa emocional','error frecuente','protocolo SPIKES']
},
{
  id:'U9-RM-Q15', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Comunicación de malas noticias', sub:'Dar malas noticias es una habilidad enseñable',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se considera que dar una mala noticia bien NO es simplemente un talento innato de algunos médicos?',
  ops:[
    'Porque es una habilidad con una estructura enseñable, y seguir esa estructura reduce mucho el daño adicional que una mala comunicación puede sumarle a la noticia',
    'La habilidad para comunicar malas noticias no puede mejorarse con ningún tipo de entrenamiento o estructura', 'Todos los médicos, sin ningún entrenamiento específico, comunican malas noticias exactamente de la misma forma', 'El protocolo SPIKES es completamente inútil para mejorar la comunicación de malas noticias en la práctica'],
  ok:0,
  clave:'Es una habilidad con una estructura enseñable, y seguir esa estructura reduce mucho el daño adicional que una mala comunicación puede sumar.',
  exp:'Dar una mala noticia bien no es un talento innato que algunos médicos tienen y otros no: es una habilidad con una estructura enseñable, como el protocolo SPIKES, y seguir esa estructura reduce mucho el daño adicional que una mala comunicación puede sumarle a una noticia que, de por sí, ya es dolorosa para el paciente.',
  no:{
    1:'Precisamente lo contrario: esta habilidad SÍ puede mejorarse mediante entrenamiento estructurado, como demuestra la existencia del protocolo SPIKES.',
    2:'Sin entrenamiento específico, los médicos suelen comunicar malas noticias de formas muy variables, algunas más efectivas que otras.',
    3:'El protocolo SPIKES es precisamente una herramienta útil y validada para mejorar la comunicación estructurada de malas noticias.'
  },
  trampa:'Asumir que la habilidad de comunicar malas noticias es un talento fijo e innato, sin reconocer que puede desarrollarse con una estructura enseñable.',
  obj:'Explicar por qué la comunicación de malas noticias es una habilidad enseñable, no un talento innato.',
  ref:'Baile et al., SPIKES: A Six-Step Protocol.',
  tags:['habilidad enseñable','estructura del protocolo','daño adicional evitable']
},
{
  id:'U9-RM-Q16', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Confidencialidad y secreto profesional', sub:'Por qué existe la confidencialidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la confidencialidad médica protege tanto al paciente individual como la eficacia general del sistema de salud?',
  ops:[
    'Porque sin la confianza de que la información se mantendrá privada, muchos pacientes ocultarían datos relevantes para su propio diagnóstico y tratamiento',
    'La confidencialidad médica es únicamente un formalismo legal, sin ninguna relación real con la calidad de la atención', 'La confidencialidad solo beneficia al paciente individual, sin ningún impacto sobre el sistema de salud en general', 'Los pacientes comparten la misma cantidad de información, sin importar si existe o no confidencialidad garantizada'],
  ok:0,
  clave:'Sin la confianza de que la información se mantendrá privada, muchos pacientes ocultarían datos relevantes para su propio diagnóstico y tratamiento.',
  exp:'La confidencialidad protege la información que un paciente comparte con su médico, y su justificación no es solo un formalismo legal: sin la confianza de que esa información se mantendrá privada, muchos pacientes ocultarían datos relevantes para su propio diagnóstico y tratamiento, comprometiendo la calidad de la atención -es un principio que protege tanto al paciente individual como la eficacia general del sistema de salud.',
  no:{
    1:'La confidencialidad tiene una justificación práctica real, más allá de lo legal, relacionada directamente con la calidad de la información que comparten los pacientes.',
    2:'La confidencialidad también tiene un impacto poblacional: si fuera poco confiable, erosionaría la confianza general del sistema de salud, no solo la de un paciente individual.',
    3:'La cantidad de información que un paciente comparte sí depende de la confianza en que se mantendrá confidencial; sin esa confianza, tiende a ocultar información relevante.'
  },
  trampa:'Reducir la justificación de la confidencialidad a un formalismo legal, sin reconocer su impacto real sobre la calidad de la atención y la confianza poblacional.',
  obj:'Explicar por qué la confidencialidad médica protege tanto al paciente individual como la eficacia del sistema de salud.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 6.',
  tags:['confidencialidad','confianza del paciente','eficacia del sistema de salud']
},
{
  id:'U9-RM-Q17', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Confidencialidad y secreto profesional', sub:'Familiares y acceso a información médica',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'El familiar cercano de un paciente adulto y competente solicita acceso a su información médica, sin que el paciente haya dado su consentimiento explícito para compartirla.',
  enunciado:'¿Tiene este familiar derecho automático a acceder a esa información?',
  ops:[
    'No, la confidencialidad se mantiene incluso frente a familiares cercanos del paciente adulto y competente, sin su consentimiento explícito',
    'Sí, cualquier familiar cercano siempre tiene derecho automático a acceder a la información médica de un paciente adulto', 'Solo el cónyuge tiene derecho automático a esta información, sin importar el consentimiento del paciente', 'El acceso depende únicamente de si el familiar paga los gastos médicos del paciente'],
  ok:0,
  clave:'No, la confidencialidad se mantiene incluso frente a familiares cercanos del paciente adulto y competente, sin su consentimiento explícito.',
  exp:'Fuera de las excepciones bien definidas de la confidencialidad, esta se mantiene incluso frente a familiares cercanos del paciente adulto y competente, que no tienen, por sí mismos, derecho automático a acceder a su información médica sin el consentimiento del paciente -un punto que sorprende a muchos estudiantes, que asumen erróneamente que un familiar cercano siempre tiene ese derecho.',
  no:{
    1:'Es precisamente lo contrario: ningún familiar cercano tiene derecho AUTOMÁTICO a esta información sin el consentimiento explícito del paciente adulto competente.',
    2:'El cónyuge tampoco tiene un derecho automático especial; el paciente adulto y competente mantiene el control sobre su propia información médica.',
    3:'Quién paga los gastos médicos no determina el derecho de acceso a la información confidencial; ese derecho depende del consentimiento del paciente.'
  },
  trampa:'Asumir erróneamente que un familiar cercano tiene derecho automático a la información médica de un paciente adulto y competente, sin su consentimiento.',
  obj:'Explicar que la confidencialidad se mantiene frente a familiares cercanos sin el consentimiento explícito del paciente adulto competente.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 6.',
  tags:['familiares y confidencialidad','paciente adulto competente','acceso a información médica']
},
{
  id:'U9-RM-Q18', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Confidencialidad y secreto profesional', sub:'Amenaza creíble hacia un tercero identificable',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Durante una consulta, un paciente expresa una amenaza creíble y concreta de causar daño físico a una persona identificable, con un plan específico.',
  enunciado:'¿Justifica esta situación romper la confidencialidad médica?',
  ops:[
    'Sí, un riesgo real e inminente para la vida de un tercero identificable es una de las excepciones reconocidas a la confidencialidad',
    'No, la confidencialidad médica nunca puede romperse bajo ninguna circunstancia, sin importar el riesgo para terceros', 'Solo se puede romper la confidencialidad si la amenaza es hacia el propio paciente, nunca hacia un tercero', 'Se debe romper la confidencialidad ante cualquier expresión de enojo del paciente, sin evaluar si hay una amenaza real y concreta'],
  ok:0,
  clave:'Sí, un riesgo real e inminente para la vida de un tercero identificable es una de las excepciones reconocidas a la confidencialidad.',
  exp:'Una ruptura justificada de la confidencialidad ocurre cuando existe un riesgo real e inminente para la vida del propio paciente o de terceros identificables -por ejemplo, una amenaza creíble y concreta hacia otra persona-, precisamente el escenario descrito en este caso, donde el riesgo de no compartir la información supera el daño de romper la confidencialidad.',
  no:{
    1:'La confidencialidad SÍ puede romperse en situaciones específicas y bien delimitadas, como el riesgo real e inminente hacia un tercero identificable.',
    2:'La excepción también aplica cuando el riesgo es hacia un tercero identificable, no exclusivamente hacia el propio paciente.',
    3:'No cualquier expresión de enojo justifica romper la confidencialidad; se requiere una amenaza creíble y concreta hacia una persona identificable.'
  },
  trampa:'Asumir que la confidencialidad nunca puede romperse, o que cualquier expresión emocional del paciente (sin amenaza real y concreta) justifica romperla.',
  obj:'Aplicar el criterio de riesgo real e inminente hacia un tercero identificable como excepción justificada a la confidencialidad.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 6.',
  tags:['amenaza creíble','tercero identificable','ruptura justificada']
},
{
  id:'U9-RM-Q19', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Confidencialidad y secreto profesional', sub:'Notificación obligatoria como excepción legal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las enfermedades de notificación obligatoria, ya vistas en Epidemiología, son una excepción legítima a la confidencialidad médica?',
  ops:[
    'Porque la ley exige explícitamente reportar cierta información, priorizando la vigilancia epidemiológica y la protección de la salud pública sobre la confidencialidad individual en ese caso específico',
    'Las enfermedades de notificación obligatoria no tienen ninguna relación real con las excepciones a la confidencialidad médica', 'Cualquier diagnóstico médico, sin excepción, debe reportarse obligatoriamente, eliminando por completo el concepto de confidencialidad', 'La notificación obligatoria solo aplica quando el propio paciente lo solicita explícitamente al médico'],
  ok:0,
  clave:'La ley exige explícitamente reportar cierta información, priorizando la vigilancia epidemiológica y la protección de la salud pública en ese caso específico.',
  exp:'Una ruptura justificada de la confidencialidad ocurre cuando la ley exige explícitamente reportar cierta información, como algunas enfermedades de notificación obligatoria, ya vistas en Epidemiología, o el maltrato infantil -en estos casos, la protección de la salud pública o de personas vulnerables justifica una excepción bien delimitada al principio general de confidencialidad.',
  no:{
    1:'Las enfermedades de notificación obligatoria son precisamente una de las excepciones legales reconocidas a la confidencialidad médica.',
    2:'Solo un número limitado y bien definido de condiciones son de notificación obligatoria, no todos los diagnósticos médicos sin excepción.',
    3:'La notificación obligatoria es un requisito legal independiente de la voluntad del paciente, no algo que dependa de su solicitud explícita.'
  },
  trampa:'Desconocer la notificación obligatoria como una excepción legal legítima y bien delimitada a la confidencialidad médica.',
  obj:'Explicar por qué las enfermedades de notificación obligatoria son una excepción legítima a la confidencialidad médica.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 6.',
  tags:['notificación obligatoria','excepción legal','salud pública']
},
{
  id:'U9-RM-Q20', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Confidencialidad y secreto profesional', sub:'Criterio de balance de riesgo',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico duda si una situación específica justifica romper la confidencialidad de un paciente.',
  enunciado:'¿Cuál es el criterio central que debe usar para tomar esta decisión?',
  ops:[
    'Evaluar si el riesgo de NO compartir la información es mayor y más concreto que el daño de romper la confianza del paciente',
    'Romper siempre la confidencialidad ante cualquier duda, sin importar el balance de riesgos involucrado', 'Nunca romper la confidencialidad ante ninguna duda, sin importar el riesgo potencial para terceros', 'Consultar exclusivamente la preferencia personal del médico, sin ningún criterio objetivo de balance de riesgo'],
  ok:0,
  clave:'Evaluar si el riesgo de NO compartir la información es mayor y más concreto que el daño de romper la confianza del paciente.',
  exp:'Ante la duda de si una situación justifica romper la confidencialidad, la pregunta central es si el riesgo de NO compartir la información es mayor y más concreto que el daño de romper la confianza del paciente -no una decisión que se toma a la ligera, sino un balance explícito entre dos riesgos reales.',
  no:{
    1:'Romper la confidencialidad automáticamente ante cualquier duda, sin evaluar el balance de riesgo, no es el criterio correcto establecido.',
    2:'Nunca romperla ante ninguna duda, sin evaluar el riesgo real, ignoraría situaciones donde la ruptura sí está justificada.',
    3:'El criterio se basa en un balance objetivo de riesgos, no en la preferencia personal subjetiva del médico sin fundamento clínico.'
  },
  trampa:'Aplicar una regla absoluta (romper siempre o nunca) en vez del criterio de balance de riesgo específico para cada situación.',
  obj:'Aplicar el criterio de balance de riesgo para decidir si romper la confidencialidad en una situación dudosa.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 6.',
  tags:['balance de riesgo','criterio de decisión','confidencialidad']
},
{
  id:'U9-RM-Q21', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Confidencialidad y secreto profesional', sub:'Excepciones deliberadamente estrechas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las excepciones reconocidas a la confidencialidad médica son deliberadamente estrechas y bien delimitadas?',
  ops:[
    'Porque ampliarlas más allá de lo necesario erosionaría la confianza general en la confidencialidad médica como principio',
    'Las excepciones a la confidencialidad son, de hecho, amplias y aplicables a casi cualquier situación clínica cotidiana', 'No existe ninguna razón particular para que las excepciones sean estrechas; podrían ser tan amplias como se quisiera sin consecuencias', 'Las excepciones estrechas existen únicamente por limitaciones técnicas de los sistemas de registro médico'],
  ok:0,
  clave:'Ampliarlas más allá de lo necesario erosionaría la confianza general en la confidencialidad médica como principio.',
  exp:'Las excepciones reconocidas a la confidencialidad son deliberadamente estrechas: ampliarlas más allá de lo necesario erosionaría la confianza general en la confidencialidad médica, mientras que no aplicarlas cuando realmente corresponde puede tener consecuencias graves y evitables para terceros identificables -un equilibrio deliberado entre proteger la confianza general y responder a riesgos reales concretos.',
  no:{
    1:'Las excepciones son precisamente estrechas y limitadas, no amplias ni aplicables a situaciones cotidianas sin un riesgo real bien definido.',
    2:'Sí existe una razón clara: ampliar las excepciones erosionaría la confianza general que sostiene la utilidad del principio de confidencialidad.',
    3:'La estrechez de las excepciones responde a una lógica ética deliberada, no a limitaciones técnicas de los sistemas de registro.'
  },
  trampa:'No reconocer la lógica deliberada detrás de mantener las excepciones a la confidencialidad estrechas y bien delimitadas.',
  obj:'Explicar por qué las excepciones a la confidencialidad médica se mantienen deliberadamente estrechas.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 6.',
  tags:['excepciones estrechas','confianza general','equilibrio ético']
},
{
  id:'U9-RM-Q22', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Confidencialidad y secreto profesional', sub:'Consentimiento explícito del propio paciente',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de las siguientes es una excepción legítima a la confidencialidad médica?',
  ops:[
    'Cuando el propio paciente da su consentimiento explícito para compartir su información con alguien más', 'Cuando cualquier persona ajena solicita la información, sin ninguna relación con el paciente', 'Cuando el médico simplemente considera que la información no es especialmente sensible', 'Cuando ha pasado un tiempo prolongado desde la consulta original del paciente'],
  ok:0,
  clave:'Cuando el propio paciente da su consentimiento explícito para compartir su información con alguien más.',
  exp:'Una ruptura justificada de la confidencialidad ocurre, entre otras situaciones, cuando el propio paciente da su consentimiento explícito para compartir su información con alguien más -en este caso, no hay conflicto real, porque es el propio paciente quien autoriza voluntariamente compartir sus datos.',
  no:{
    1:'Cualquier persona ajena sin relación con el paciente no tiene derecho a solicitar y recibir esta información sin justificación legítima.',
    2:'La sensibilidad percibida de la información por parte del médico, sin otro criterio, no es una excepción legítima reconocida a la confidencialidad.',
    3:'El tiempo transcurrido desde la consulta no es, por sí solo, una excepción reconocida a la obligación de confidencialidad médica.'
  },
  trampa:'Confundir criterios subjetivos o irrelevantes (tiempo transcurrido, percepción de sensibilidad) con las excepciones reales y bien delimitadas a la confidencialidad.',
  obj:'Identificar el consentimiento explícito del paciente como una excepción legítima a la confidencialidad médica.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 6.',
  tags:['consentimiento explícito','excepción legítima','confidencialidad']
},
{
  id:'U9-RM-Q23', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Principios de bioética médica', sub:'Diferencia entre beneficencia y no maleficencia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué se diferencia la no maleficencia de la beneficencia, si ambas parecen buscar el bienestar del paciente?',
  ops:[
    'La no maleficencia exige, además de buscar el bien, evitar activamente el mal, incluso al intentar ayudar; la beneficencia es la obligación de actuar buscando activamente el bienestar',
    'Ambos principios son exactamente sinónimos, sin ninguna diferencia conceptual real entre ellos', 'La no maleficencia solo aplica a procedimientos quirúrgicos, mientras que la beneficencia aplica a cualquier tipo de atención', 'La beneficencia exige evitar el daño, mientras que la no maleficencia exige buscar activamente el bienestar'],
  ok:0,
  clave:'La no maleficencia exige, además de buscar el bien, evitar activamente el mal, incluso al intentar ayudar; la beneficencia es la obligación de actuar buscando el bienestar.',
  exp:'La beneficencia es la obligación de actuar buscando activamente el bienestar del paciente. La no maleficencia (el principio clásico "primero no hacer daño") es la obligación de no causar daño innecesario, incluso al intentar ayudar -distinta de la beneficencia porque exige, además de buscar el bien, evitar activamente el mal, un matiz conceptual importante entre ambos principios.',
  no:{
    1:'Son principios relacionados pero conceptualmente distintos: uno se centra en buscar el bien, el otro en evitar el daño incluso al intentar ayudar.',
    2:'La distinción entre beneficencia y no maleficencia no depende del tipo de procedimiento (quirúrgico o no); es una distinción conceptual aplicable en general.',
    3:'Está invertido: la BENEFICENCIA busca el bienestar activamente, y la NO MALEFICENCIA exige evitar el daño, no al revés.'
  },
  trampa:'Confundir o invertir los conceptos de beneficencia (buscar el bien) y no maleficencia (evitar el daño), tratándolos como sinónimos.',
  obj:'Distinguir el principio de beneficencia del de no maleficencia en bioética médica.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 3-7.',
  tags:['beneficencia','no maleficencia','distinción conceptual']
},
{
  id:'U9-RM-Q24', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Principios de bioética médica', sub:'Autonomía vs. beneficencia en tensión',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente competente y adecuadamente informado rechaza un tratamiento que el equipo médico considera claramente beneficioso para su salud.',
  enunciado:'¿Qué principio prevalece generalmente en la bioética moderna en este escenario, y por qué?',
  ops:[
    'La autonomía del paciente competente, que tiene derecho a decidir sobre su propio cuerpo, incluso rechazando un tratamiento recomendado',
    'La beneficencia siempre prevalece sobre la autonomía del paciente, sin importar su nivel de información o capacidad para decidir', 'Ningún principio bioético tiene relevancia en este tipo de tensión entre autonomía y beneficencia', 'El principio de justicia es el que decide automáticamente este tipo de conflicto entre autonomía y beneficencia'],
  ok:0,
  clave:'La autonomía del paciente competente, que tiene derecho a decidir sobre su propio cuerpo, incluso rechazando un tratamiento recomendado.',
  exp:'Ante la tensión entre autonomía y beneficencia (un paciente competente rechaza un tratamiento que el equipo médico considera beneficioso), la bioética moderna, en general, da un peso considerable a la autonomía del paciente competente: el derecho a decidir sobre el propio cuerpo prevalece sobre el juicio del médico sobre lo que sería mejor para él, siempre que el paciente esté adecuadamente informado y tenga capacidad para decidir.',
  no:{
    1:'Es precisamente lo contrario: la bioética moderna da un peso considerable a la AUTONOMÍA del paciente competente en este tipo de tensión, no a la beneficencia automáticamente.',
    2:'Estos principios sí son relevantes y centrales para analizar este tipo de escenario, precisamente el objeto de estudio de la bioética clínica.',
    3:'La justicia se relaciona con la distribución equitativa de recursos, no es el principio que resuelve directamente esta tensión específica entre autonomía y beneficencia.'
  },
  trampa:'Asumir que la beneficencia (el criterio médico sobre lo mejor para el paciente) siempre prevalece sobre la autonomía de un paciente competente e informado.',
  obj:'Aplicar el peso que la bioética moderna da a la autonomía del paciente competente frente a la beneficencia.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 3-7.',
  tags:['autonomía vs. beneficencia','paciente competente','rechazo de tratamiento']
},
{
  id:'U9-RM-Q25', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Principios de bioética médica', sub:'Justicia y distribución de recursos escasos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un hospital enfrenta una sobrecarga y debe decidir cómo distribuir un número limitado de camas de cuidados intensivos entre varios pacientes que las necesitan.',
  enunciado:'¿Qué principio bioético está directamente en juego en esta decisión, y qué exige ese principio?',
  ops:[
    'El principio de justicia, que exige criterios explícitos y equitativos para la distribución, no decisiones arbitrarias caso por caso',
    'El principio de confidencialidad, que exige mantener en privado cuántas camas de cuidados intensivos están disponibles', 'El principio de autonomía, que exige que cada paciente decida individualmente cuántos recursos recibe', 'Ningún principio bioético aplica a decisiones administrativas sobre distribución de recursos hospitalarios'],
  ok:0,
  clave:'El principio de justicia, que exige criterios explícitos y equitativos para la distribución, no decisiones arbitrarias caso por caso.',
  exp:'Decidir cómo distribuir un recurso escaso, como camas de cuidados intensivos en una situación de sobrecarga, pone directamente en juego el principio de justicia: la obligación de distribuir los recursos de salud de forma equitativa, exigiendo criterios explícitos y equitativos, no decisiones arbitrarias caso por caso basadas en preferencias personales del equipo médico.',
  no:{
    1:'La confidencialidad se refiere a proteger información del paciente, no a la distribución de recursos hospitalarios escasos.',
    2:'La autonomía se refiere al derecho del paciente sobre su propio cuerpo, no a decidir la distribución de un recurso compartido y limitado.',
    3:'Los principios bioéticos, incluida la justicia, son centrales para analizar decisiones reales sobre distribución de recursos escasos en salud.'
  },
  trampa:'Confundir el principio de justicia (distribución equitativa) con otros principios bioéticos como autonomía o confidencialidad, que no aplican a este escenario específico.',
  obj:'Aplicar el principio de justicia a una decisión de distribución de recursos escasos en salud.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 3-7.',
  tags:['justicia distributiva','recurso escaso','criterios equitativos']
},
{
  id:'U9-RM-Q26', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Principios de bioética médica', sub:'No existe una jerarquía fija',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se dice que los cuatro principios de bioética médica NO forman una jerarquía fija donde uno siempre gana sobre los demás?',
  ops:[
    'Porque la bioética clínica real consiste, con frecuencia, en sopesarlos entre sí caso por caso, ya que en la práctica a veces entran en tensión unos con otros',
    'Porque en realidad solo existe un único principio bioético válido, y los demás son irrelevantes en la práctica clínica', 'Porque la autonomía siempre prevalece automáticamente sobre los otros tres principios, sin ninguna excepción posible', 'Porque estos cuatro principios nunca entran en tensión entre sí en ningún escenario clínico real'],
  ok:0,
  clave:'La bioética clínica real consiste, con frecuencia, en sopesarlos entre sí caso por caso, ya que en la práctica a veces entran en tensión unos con otros.',
  exp:'Estos cuatro principios no forman una jerarquía fija donde uno siempre gana sobre los demás: la bioética clínica real consiste, con frecuencia, en sopesarlos entre sí caso por caso, porque en la práctica a veces entran en tensión unos con otros -como ilustra el ejemplo de autonomía frente a beneficencia, donde el peso relativo depende del contexto específico del paciente.',
  no:{
    1:'Los cuatro principios son igualmente relevantes en la práctica bioética; no existe un único principio válido que haga irrelevantes a los demás.',
    2:'La autonomía tiene un peso considerable en muchos escenarios, pero no prevalece automáticamente y sin excepción en todos los casos posibles.',
    3:'Los principios sí pueden entrar en tensión en escenarios clínicos reales, como el caso ya visto del paciente que rechaza un tratamiento beneficioso.'
  },
  trampa:'Asumir que existe una jerarquía fija y automática entre los principios bioéticos, en vez de reconocer que requieren un balance caso por caso.',
  obj:'Explicar por qué los cuatro principios de bioética médica no forman una jerarquía fija.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 3-7.',
  tags:['jerarquía de principios','tensión entre principios','bioética clínica']
},
{
  id:'U9-RM-Q27', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Principios de bioética médica', sub:'Marco teórico del bloque completo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se relaciona el tema de principios de bioética médica con los demás temas del bloque de Relación Médico-Paciente?',
  ops:[
    'Es el marco teórico que sostiene a todos los demás temas: el consentimiento informado es la autonomía en la práctica, la confidencialidad protege la beneficencia, entre otras conexiones',
    'Los principios de bioética médica no tienen ninguna relación real con los demás temas del bloque', 'Cada tema del bloque desarrolla un principio bioético completamente distinto e independiente de los demás', 'Los principios de bioética médica reemplazan por completo la necesidad de estudiar los demás temas del bloque'],
  ok:0,
  clave:'Es el marco teórico que sostiene a todos los demás temas: el consentimiento informado es la autonomía en la práctica, la confidencialidad protege la beneficencia, entre otras conexiones.',
  exp:'Este tema es, en cierto sentido, el marco teórico que sostiene a todos los demás temas de este bloque: el consentimiento informado es la autonomía en la práctica; la confidencialidad protege la confianza necesaria para la beneficencia; la comunicación de malas noticias intenta minimizar el daño (no maleficencia) al dar información necesaria.',
  no:{
    1:'Los principios de bioética sí tienen una relación central y explícita con los demás temas del bloque, siendo su marco teórico subyacente.',
    2:'Los distintos temas del bloque no son completamente independientes; comparten el mismo marco de principios bioéticos aplicados a situaciones distintas.',
    3:'El tema de principios de bioética complementa, pero no reemplaza, la necesidad de estudiar la aplicación específica de esos principios en cada tema del bloque.'
  },
  trampa:'No reconocer la conexión explícita entre los principios de bioética médica y los demás temas del bloque como aplicaciones concretas de ese mismo marco.',
  obj:'Explicar cómo los principios de bioética médica funcionan como marco teórico de los demás temas del bloque.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 3-7.',
  tags:['marco teórico','conexión entre temas','aplicación de principios']
},
{
  id:'U9-RM-Q28', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Principios de bioética médica', sub:'Definición de autonomía',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es el principio de autonomía en bioética médica?',
  ops:[
    'El derecho del paciente a tomar sus propias decisiones informadas sobre su cuerpo y su atención', 'La obligación del médico de actuar buscando activamente el bienestar del paciente', 'La obligación de no causar daño innecesario, incluso al intentar ayudar', 'La obligación de distribuir los recursos de salud de forma equitativa'],
  ok:0,
  clave:'El derecho del paciente a tomar sus propias decisiones informadas sobre su cuerpo y su atención.',
  exp:'La autonomía, ya vista con detalle en consentimiento informado, es el derecho del paciente a tomar sus propias decisiones informadas sobre su cuerpo y su atención -distinta de la beneficencia (buscar el bienestar activamente), la no maleficencia (evitar el daño) y la justicia (distribución equitativa de recursos).',
  no:{
    1:'Esta definición corresponde a la beneficencia, no a la autonomía, que se centra en el derecho de decisión del paciente.',
    2:'Esta definición corresponde a la no maleficencia, no a la autonomía, que se centra en el derecho de decisión del paciente.',
    3:'Esta definición corresponde a la justicia, no a la autonomía, que se centra en el derecho de decisión del paciente sobre su propio cuerpo.'
  },
  trampa:'Confundir la definición de autonomía con la de alguno de los otros tres principios bioéticos (beneficencia, no maleficencia, justicia).',
  obj:'Recordar la definición del principio de autonomía en bioética médica.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 3-7.',
  tags:['autonomía','definición','principios bioéticos']
},
{
  id:'U9-RM-Q29', programa:'unirm', cuatri:9,
  esp:'Relación Médico-Paciente', tema:'Principios de bioética médica', sub:'Justicia sin discriminación injustificada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué exige el principio de justicia respecto al trato de los pacientes, más allá de la distribución de recursos?',
  ops:[
    'Tratar a los pacientes de forma equitativa, sin discriminación injustificada por ninguna característica que no sea clínicamente relevante',
    'Tratar a todos los pacientes exactamente de la misma manera, sin importar sus necesidades clínicas específicas', 'La justicia solo se aplica a la distribución de recursos materiales, sin ninguna relación con el trato a los pacientes', 'El principio de justicia permite tratar de forma distinta a los pacientes según características no relacionadas con su condición clínica'],
  ok:0,
  clave:'Tratar a los pacientes de forma equitativa, sin discriminación injustificada por ninguna característica que no sea clínicamente relevante.',
  exp:'La justicia es la obligación de distribuir los recursos de salud, y de tratar a los pacientes, de forma equitativa, sin discriminación injustificada por ninguna característica que no sea clínicamente relevante para la decisión que se está tomando -equitativo no significa necesariamente idéntico, sino sin discriminación basada en características irrelevantes para la necesidad clínica real.',
  no:{
    1:'Tratar a todos exactamente igual, sin considerar diferencias clínicas relevantes, no es lo mismo que un trato equitativo basado en la necesidad real.',
    2:'La justicia también exige un trato equitativo en la atención, no se limita exclusivamente a la distribución de recursos materiales.',
    3:'Es precisamente lo contrario: la justicia prohíbe tratar distinto según características NO relacionadas con la condición clínica del paciente.'
  },
  trampa:'Confundir equidad (sin discriminación injustificada) con igualdad idéntica sin considerar diferencias clínicas reales, o invertir el sentido de la no discriminación.',
  obj:'Explicar el alcance del principio de justicia respecto al trato equitativo de los pacientes.',
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 3-7.',
  tags:['justicia','trato equitativo','discriminación injustificada']
}

]);
