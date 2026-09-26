/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 10, TANDA DE MEDICINA FAMILIAR (1/2)
   Primer banco de esta materia (0 preguntas previas). Prefijo
   U10-MF-. Esta parte cubre principios de medicina familiar, la
   familia como unidad, ciclo vital, genograma, atencion
   longitudinal y multimorbilidad (temas 1-6).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== MEDICINA FAMILIAR ===================== */
{
  id:'U10-MF-Q01', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Principios de la medicina familiar', sub:'Atención centrada en la persona',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué prioriza la atención centrada en la persona, a diferencia de un modelo centrado únicamente en la enfermedad?',
  ops:[
    'Entender al paciente como un individuo completo -sus valores, su contexto de vida, sus prioridades- por encima de tratar únicamente el diagnóstico que trae en ese momento',
    'La atención centrada en la persona ignora por completo el diagnóstico biomédico del paciente, enfocándose solo en aspectos sociales', 'No existe ninguna diferencia real entre la atención centrada en la persona y la centrada en la enfermedad', 'La atención centrada en la persona nunca considera las preferencias individuales del paciente sobre su tratamiento'],
  ok:0,
  clave:'Entender al paciente como un individuo completo -sus valores, su contexto de vida, sus prioridades- por encima de tratar únicamente el diagnóstico.',
  exp:'La atención centrada en la persona prioriza entender al paciente como un individuo completo -sus valores, su contexto de vida, sus prioridades- por encima de tratar únicamente el diagnóstico que trae en ese momento. Esto no significa ignorar la enfermedad; significa que la decisión clínica se toma considerando también quién es esa persona.',
  no:{
    1:'No ignora el diagnóstico biomédico; lo integra junto con la comprensión más amplia de la persona, sin descartar ninguno de los dos.',
    2:'Sí existe una diferencia real de enfoque entre priorizar la persona completa y priorizar únicamente el diagnóstico biomédico.',
    3:'Las preferencias individuales del paciente son, precisamente, un componente central de la atención centrada en la persona.'
  },
  trampa:'Asumir que la atención centrada en la persona excluye el manejo biomédico, en vez de integrarlo con la comprensión más amplia del individuo.',
  obj:'Explicar en qué consiste la atención centrada en la persona en medicina familiar.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 1.',
  tags:['atención centrada en la persona','individuo completo','contexto de vida']
},
{
  id:'U10-MF-Q02', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Principios de la medicina familiar', sub:'Rol de primer contacto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué significa que el médico de familia sea el "primer contacto" del paciente con el sistema de salud?',
  ops:[
    'Ser quien recibe el problema inicial, lo evalúa con una visión integral, y decide si puede manejarlo directamente o si amerita referencia a un especialista, coordinando el proceso',
    'Significa que el médico de familia siempre debe resolver cualquier problema de salud por sí solo, sin nunca referir a ningún especialista', 'El médico de familia como primer contacto nunca coordina ningún proceso posterior a la consulta inicial', 'Ser primer contacto no tiene ninguna relación con los niveles de atención del sistema de salud'],
  ok:0,
  clave:'Ser quien recibe el problema inicial, lo evalúa con una visión integral, y decide si puede manejarlo directamente o si amerita referencia, coordinando el proceso.',
  exp:'Ser el primer contacto no significa resolver todo por sí solo: significa ser quien recibe el problema inicial, lo evalúa con una visión integral, y decide -con criterio clínico- si puede manejarlo directamente o si amerita referencia a un especialista, coordinando ese proceso.',
  no:{
    1:'No implica resolver todo sin referir nunca; implica evaluar y decidir, con criterio, cuándo referir a un especialista.',
    2:'El médico de familia sí coordina el proceso posterior, incluyendo el seguimiento tras una eventual referencia.',
    3:'El rol de primer contacto tiene una relación directa con la lógica de niveles de atención del sistema de salud.'
  },
  trampa:'Asumir que ser primer contacto implica manejar todo sin nunca referir, en vez de reconocer el rol de evaluación y coordinación.',
  obj:'Explicar el rol del médico de familia como primer contacto del sistema de salud.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 1.',
  tags:['primer contacto','niveles de atención','coordinación']
},
{
  id:'U10-MF-Q03', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Principios de la medicina familiar', sub:'Valor clínico de la continuidad del cuidado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la continuidad del cuidado tiene un valor clínico real, más allá de un valor puramente relacional?',
  ops:[
    'Un médico que conoce la historia completa de un paciente detecta con más facilidad un cambio significativo respecto a su patrón habitual',
    'La continuidad del cuidado no tiene ningún valor clínico real, solo un valor relacional o de comodidad para el paciente', 'Un encuentro aislado en urgencias siempre detecta cambios clínicos con la misma facilidad que un médico de continuidad', 'El conocimiento acumulado de un paciente nunca ayuda a interpretar mejor sus síntomas nuevos'],
  ok:0,
  clave:'Un médico que conoce la historia completa de un paciente detecta con más facilidad un cambio significativo respecto a su patrón habitual.',
  exp:'Esta continuidad tiene un valor clínico real, no solo relacional: un médico que conoce la historia completa de un paciente detecta con más facilidad un cambio significativo respecto a su patrón habitual, y puede interpretar síntomas nuevos con el contexto de todo lo que ya sabe de esa persona.',
  no:{
    1:'La continuidad sí tiene un valor clínico real bien documentado, más allá de la comodidad relacional que también aporta.',
    2:'Un encuentro aislado, sin ese contexto histórico acumulado, típicamente tiene MENOS capacidad de detectar cambios sutiles respecto al patrón habitual.',
    3:'El conocimiento acumulado sí ayuda a interpretar mejor síntomas nuevos, precisamente aportando el contexto que un encuentro aislado no tiene.'
  },
  trampa:'Reducir el valor de la continuidad del cuidado a un aspecto meramente relacional o de comodidad, sin reconocer su valor clínico real.',
  obj:'Explicar el valor clínico real de la continuidad del cuidado en medicina familiar.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 1.',
  tags:['continuidad del cuidado','valor clínico','patrón habitual del paciente']
},
{
  id:'U10-MF-Q04', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Principios de la medicina familiar', sub:'Medicina familiar como especialidad propia',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es incorrecto describir a la medicina familiar como "menos especializada" que otras especialidades médicas?',
  ops:[
    'Porque tiene un enfoque propio -la persona a lo largo del tiempo, no el órgano o la enfermedad- que requiere habilidades distintas, no menos rigurosas',
    'La medicina familiar es, de hecho, la única especialidad que no requiere ningún entrenamiento riguroso adicional', 'Todas las especialidades médicas, incluida la medicina familiar, tienen exactamente el mismo enfoque y las mismas habilidades', 'La medicina familiar se limita exclusivamente a derivar pacientes, sin ninguna habilidad clínica propia'],
  ok:0,
  clave:'Tiene un enfoque propio -la persona a lo largo del tiempo, no el órgano o la enfermedad- que requiere habilidades distintas, no menos rigurosas.',
  exp:'La medicina familiar no es "medicina general" en el sentido de ser menos especializada; es una especialidad con un enfoque propio -la persona a lo largo del tiempo, no el órgano o la enfermedad- que requiere habilidades distintas, no menos rigurosas.',
  no:{
    1:'La medicina familiar sí requiere un entrenamiento riguroso específico, orientado a su enfoque propio distinto de otras especialidades.',
    2:'Cada especialidad tiene un enfoque y habilidades propias; la medicina familiar no es idéntica en enfoque a las especialidades de órgano o enfermedad.',
    3:'La medicina familiar tiene habilidades clínicas propias bien definidas, más allá de simplemente derivar pacientes a otros niveles.'
  },
  trampa:'Confundir el enfoque distinto de la medicina familiar (persona a lo largo del tiempo) con una falta de rigor o especialización real.',
  obj:'Explicar por qué la medicina familiar es una especialidad propia, no una versión "menos especializada" de la medicina.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 1.',
  tags:['medicina familiar como especialidad','enfoque propio','rigor clínico']
},
{
  id:'U10-MF-Q05', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Principios de la medicina familiar', sub:'Decisión clínica que integra valores del paciente',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente rechaza un tratamiento recomendado por razones personales relacionadas con sus valores y su calidad de vida, no por falta de comprensión de la información médica.',
  enunciado:'¿Cómo debería abordar esta situación un médico con enfoque de atención centrada en la persona?',
  ops:[
    'Considerando también quién es esa persona y qué es lo que realmente le importa, integrando sus valores en la decisión clínica, no solo la indicación biomédica en abstracto',
    'Insistiendo repetidamente en el tratamiento recomendado hasta que el paciente cambie de decisión, sin considerar sus razones personales', 'Ignorando por completo las razones personales del paciente, ya que solo la indicación biomédica debería determinar la conducta', 'Dando por terminada la relación médica con ese paciente al no seguir la recomendación biomédica indicada'],
  ok:0,
  clave:'Considerando también quién es esa persona y qué es lo que realmente le importa, integrando sus valores en la decisión clínica.',
  exp:'La atención centrada en la persona significa que la decisión clínica se toma considerando también quién es esa persona y qué es lo que realmente le importa a ella, no solo qué indica la guía clínica para ese diagnóstico en abstracto -una diferencia que cambia decisiones reales, como cuánto insistir en un tratamiento que el paciente rechaza por razones personales válidas.',
  no:{
    1:'Insistir sin considerar las razones personales del paciente contradice directamente el enfoque de atención centrada en la persona.',
    2:'Ignorar las razones personales del paciente no es coherente con integrar sus valores en la decisión clínica, un principio central de este enfoque.',
    3:'Terminar la relación médica no es la conducta apropiada; el enfoque centrado en la persona busca integrar sus valores, no descartar al paciente.'
  },
  trampa:'Asumir que la atención centrada en la persona significa ignorar por completo los valores del paciente en favor de la indicación biomédica, o viceversa.',
  obj:'Aplicar el enfoque de atención centrada en la persona ante el rechazo informado de un tratamiento por razones de valores personales.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 1.',
  tags:['valores del paciente','decisión clínica integrada','rechazo informado']
},
{
  id:'U10-MF-Q06', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'La familia como unidad de atención', sub:'Cuándo la familia es el objeto de atención',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué situaciones se propone que la unidad clínicamente relevante sea el sistema familiar completo, no solo el individuo?',
  ops:[
    'Cuando una enfermedad crónica de un miembro afecta la dinámica de toda la familia, o cuando un conflicto familiar mantiene o empeora un problema de salud individual',
    'La familia nunca debería considerarse como objeto de atención clínica, solo el individuo aislado', 'Cada consulta debería convertirse siempre en una sesión familiar completa, sin ninguna excepción', 'El concepto de familia como paciente no tiene ninguna aplicación real en la práctica de medicina familiar'],
  ok:0,
  clave:'Cuando una enfermedad crónica de un miembro afecta la dinámica de toda la familia, o cuando un conflicto familiar mantiene o empeora un problema de salud individual.',
  exp:'El concepto de familia como paciente propone que, en ciertas situaciones, la unidad clínicamente relevante no es solo el individuo sino el sistema familiar completo -por ejemplo, cuando una enfermedad crónica de un miembro afecta la dinámica de toda la familia, o cuando un conflicto familiar está manteniendo o empeorando un problema de salud individual.',
  no:{
    1:'La familia sí puede considerarse objeto de atención relevante en situaciones específicas bien identificables.',
    2:'No cada consulta se convierte en sesión familiar completa; se aplica en situaciones donde la familia está claramente involucrada.',
    3:'El concepto sí tiene aplicaciones reales y relevantes en la práctica clínica de medicina familiar, en los casos apropiados.'
  },
  trampa:'Asumir que "familia como paciente" significa convertir cada consulta en una intervención familiar completa, o que nunca aplica en la práctica real.',
  obj:'Explicar en qué situaciones la familia se considera la unidad clínicamente relevante de atención.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 4.',
  tags:['familia como paciente','sistema familiar','unidad clínica relevante']
},
{
  id:'U10-MF-Q07', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'La familia como unidad de atención', sub:'Rol de "paciente identificado"',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué revela el patrón de "paciente identificado" dentro de una dinámica familiar disfuncional?',
  ops:[
    'Que toda la atención familiar se concentra en el problema de salud de una sola persona, desviando la atención de otros conflictos familiares no resueltos',
    'El "paciente identificado" es simplemente el miembro de la familia con el diagnóstico médico más grave, sin ninguna relación con la dinámica familiar', 'Este patrón nunca tiene ninguna relación con conflictos familiares no resueltos', 'El "paciente identificado" siempre representa con precisión el único problema real que existe en esa familia'],
  ok:0,
  clave:'Que toda la atención familiar se concentra en el problema de salud de una sola persona, desviando la atención de otros conflictos familiares no resueltos.',
  exp:'Reconocer patrones disfuncionales -por ejemplo, un rol de "paciente identificado" donde toda la atención familiar se concentra en el problema de salud de una sola persona, desviando la atención de otros conflictos familiares no resueltos- ayuda al médico de familia a entender por qué ciertos problemas de salud persisten pese a un tratamiento biomédico aparentemente correcto.',
  no:{
    1:'El "paciente identificado" no se define solo por la gravedad del diagnóstico; se relaciona con un patrón dinámico de la familia completa.',
    2:'Este patrón sí tiene una relación directa con conflictos familiares no resueltos que quedan desplazados por el foco en un solo miembro.',
    3:'El problema identificado en un solo miembro puede, de hecho, NO representar el único problema real, sino un reflejo de una dinámica más amplia.'
  },
  trampa:'Asumir que el "paciente identificado" refleja el único problema real de la familia, sin considerar la dinámica más amplia que ese patrón puede estar ocultando.',
  obj:'Explicar el patrón de "paciente identificado" como reflejo de una dinámica familiar disfuncional más amplia.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 4.',
  tags:['paciente identificado','dinámica disfuncional','conflicto familiar oculto']
},
{
  id:'U10-MF-Q08', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'La familia como unidad de atención', sub:'Apoyo familiar como recurso pronóstico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué relación tiene el apoyo familiar disponible con el pronóstico de muchas condiciones crónicas?',
  ops:[
    'Un paciente con buen apoyo familiar tiene, en igualdad de condiciones clínicas, mejores resultados que uno sin ese apoyo',
    'El apoyo familiar no tiene ninguna relación real con el pronóstico de ninguna condición crónica o de cambio de comportamiento', 'Un paciente sin apoyo familiar siempre tiene exactamente el mismo pronóstico que uno con buen apoyo familiar', 'El apoyo familiar solo es relevante para condiciones agudas, nunca para condiciones crónicas'],
  ok:0,
  clave:'Un paciente con buen apoyo familiar tiene, en igualdad de condiciones clínicas, mejores resultados que uno sin ese apoyo.',
  exp:'El apoyo familiar es uno de los recursos más determinantes para el pronóstico de muchas condiciones, especialmente las crónicas o las que requieren un cambio sostenido de comportamiento: un paciente con buen apoyo familiar tiene, en igualdad de condiciones clínicas, mejores resultados que uno sin ese apoyo.',
  no:{
    1:'El apoyo familiar sí tiene una relación real y documentada con el pronóstico, especialmente en condiciones crónicas.',
    2:'El pronóstico sí puede diferir considerablemente según la disponibilidad de apoyo familiar, en igualdad de otras condiciones clínicas.',
    3:'El apoyo familiar es particularmente relevante en condiciones CRÓNICAS, que requieren sostenimiento a largo plazo del cambio de comportamiento.'
  },
  trampa:'Subestimar el valor pronóstico real del apoyo familiar, especialmente en condiciones crónicas que requieren manejo sostenido en el tiempo.',
  obj:'Explicar la relación entre el apoyo familiar disponible y el pronóstico de condiciones crónicas.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 4.',
  tags:['apoyo familiar','pronóstico','condiciones crónicas']
},
{
  id:'U10-MF-Q09', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'La familia como unidad de atención', sub:'Preguntar por el apoyo disponible, no asumirlo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es importante preguntar explícitamente por el apoyo familiar disponible de un paciente, en vez de asumirlo automáticamente?',
  ops:[
    'Porque esa información cambia cómo se diseña un plan de tratamiento realista, conectando con la importancia de las condiciones de vida ya vista en los determinantes sociales',
    'Preguntar por el apoyo familiar disponible no aporta ninguna información útil para el diseño del plan de tratamiento', 'Siempre se puede asumir con certeza que cualquier paciente tiene un apoyo familiar sólido y disponible', 'La disponibilidad de apoyo familiar nunca debería influir en el diseño de un plan de manejo clínico'],
  ok:0,
  clave:'Esa información cambia cómo se diseña un plan de tratamiento realista, conectando con la importancia de las condiciones de vida ya vista en los determinantes sociales.',
  exp:'Evaluar el apoyo familiar disponible -no asumirlo automáticamente ni descartarlo sin preguntar- es parte del trabajo del médico de familia al diseñar un plan de manejo realista, retomando directamente la importancia de las condiciones de vida del paciente ya vista en los determinantes sociales de la salud.',
  no:{
    1:'Esta información sí aporta un valor real, permitiendo diseñar un plan de tratamiento que se ajuste a la disponibilidad real de apoyo del paciente.',
    2:'No se puede asumir automáticamente que todo paciente tiene apoyo familiar sólido; debe evaluarse explícitamente en cada caso.',
    3:'La disponibilidad de apoyo familiar sí debería influir en el diseño del plan de manejo, siendo un factor clínicamente relevante.'
  },
  trampa:'Asumir automáticamente la disponibilidad de apoyo familiar sin preguntarlo explícitamente, perdiendo información relevante para el plan de tratamiento.',
  obj:'Explicar por qué preguntar explícitamente por el apoyo familiar disponible es parte del diseño de un plan de tratamiento realista.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 4.',
  tags:['evaluación del apoyo familiar','plan de tratamiento realista','determinantes sociales']
},
{
  id:'U10-MF-Q10', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Ciclo vital familiar', sub:'Tareas de desarrollo por etapa',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué caracteriza a cada etapa del ciclo vital familiar, más allá de simplemente el paso del tiempo?',
  ops:[
    'Cada etapa tiene tareas de desarrollo específicas que la familia debe resolver para avanzar de forma saludable a la siguiente etapa',
    'Todas las etapas del ciclo vital familiar son exactamente idénticas entre sí, sin ninguna tarea específica distintiva', 'El ciclo vital familiar no tiene ninguna relación con tareas de desarrollo ni con ajustes esperables', 'Las etapas del ciclo vital familiar ocurren en un orden completamente aleatorio, sin ninguna secuencia predecible'],
  ok:0,
  clave:'Cada etapa tiene tareas de desarrollo específicas que la familia debe resolver para avanzar de forma saludable a la siguiente etapa.',
  exp:'El ciclo vital familiar describe una secuencia de etapas razonablemente predecibles -formación de la pareja, llegada de los primeros hijos, familia con hijos en edad escolar, familia con adolescentes, nido vacío, vejez de la pareja original- cada una con tareas de desarrollo específicas que la familia debe resolver para avanzar de forma saludable a la siguiente etapa.',
  no:{
    1:'Cada etapa tiene tareas específicas y distintas (reorganización de roles, redefinición de la relación de pareja, entre otras).',
    2:'El ciclo vital familiar sí involucra tareas de desarrollo específicas y ajustes esperables en cada etapa.',
    3:'Las etapas siguen una secuencia razonablemente predecible, no un orden completamente aleatorio.'
  },
  trampa:'Asumir que las etapas del ciclo vital familiar son intercambiables o que ocurren sin ningún orden o tarea específica asociada.',
  obj:'Explicar qué caracteriza a cada etapa del ciclo vital familiar en términos de tareas de desarrollo específicas.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 5.',
  tags:['ciclo vital familiar','etapas de la familia','tareas de desarrollo']
},
{
  id:'U10-MF-Q11', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Ciclo vital familiar', sub:'Crisis normativas: esperables, no patológicas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es importante reconocer una crisis normativa del ciclo vital familiar como esperable, en vez de tratarla como patológica?',
  ops:[
    'Porque cambia cómo el médico de familia la aborda: no como un problema a "curar", sino como un proceso de ajuste a acompañar',
    'Las crisis normativas siempre son idénticas a un proceso patológico grave que requiere tratamiento médico inmediato', 'Reconocer una crisis como normativa no tiene ninguna implicación práctica real sobre cómo abordarla', 'Ninguna crisis familiar, normativa o no, requiere ningún tipo de acompañamiento por parte del médico de familia'],
  ok:0,
  clave:'Cambia cómo el médico de familia la aborda: no como un problema a "curar", sino como un proceso de ajuste a acompañar.',
  exp:'Reconocerlas como normativas, en vez de patológicas, cambia cómo el médico de familia las aborda: no como un problema a "curar", sino como un proceso de ajuste a acompañar. El problema clínico real no es que ocurra una crisis normativa -eso es esperable-, sino cuando una familia no logra resolverla adecuadamente.',
  no:{
    1:'Es precisamente lo contrario: una crisis normativa NO es idéntica a un proceso patológico; es un ajuste esperable, no una enfermedad.',
    2:'Reconocerla como normativa sí tiene una implicación práctica directa: cambia el enfoque de "curar" a "acompañar" el proceso de ajuste.',
    3:'El acompañamiento, aunque distinto de un tratamiento médico formal, sigue siendo un rol relevante del médico de familia ante estas crisis.'
  },
  trampa:'Confundir una crisis normativa esperable con un problema patológico que requiere tratamiento, en vez de acompañamiento del proceso de ajuste.',
  obj:'Explicar por qué reconocer una crisis normativa como esperable cambia el abordaje del médico de familia.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 5.',
  tags:['crisis normativas','ajuste esperable','acompañamiento clínico']
},
{
  id:'U10-MF-Q12', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Ciclo vital familiar', sub:'Anticipar tensiones según la etapa',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico de familia sabe que una familia que atiende tiene un hijo adolescente, y antes de que el paciente mencione nada específico, orienta algunas preguntas hacia posibles conflictos de autonomía en el hogar.',
  enunciado:'¿Qué principio del ciclo vital familiar ilustra esta conducta del médico?',
  ops:[
    'Conocer la etapa del ciclo vital familiar permite anticipar qué tipo de tensiones es probable que esté enfrentando esa familia, orientando mejor las preguntas',
    'Esta conducta no tiene ninguna relación real con el concepto de ciclo vital familiar', 'El médico debería evitar por completo anticipar cualquier tensión familiar basada en la etapa del ciclo vital', 'Cada familia con un adolescente enfrenta exactamente los mismos conflictos, sin ninguna variación individual'],
  ok:0,
  clave:'Conocer la etapa del ciclo vital familiar permite anticipar qué tipo de tensiones es probable que esté enfrentando esa familia, orientando mejor las preguntas.',
  exp:'Conocer en qué etapa del ciclo vital está una familia permite al médico de familia anticipar qué tipo de tensiones es probable que esté enfrentando, incluso antes de que el paciente las mencione explícitamente -esta anticipación no reemplaza preguntar directamente, pero sí orienta qué preguntas hacer.',
  no:{
    1:'Esta conducta ilustra directamente el uso práctico del conocimiento sobre el ciclo vital familiar para orientar la entrevista clínica.',
    2:'Anticipar tensiones según la etapa del ciclo vital es precisamente una aplicación útil de este concepto, no algo a evitar.',
    3:'Aunque la etapa orienta las preguntas, no todas las familias enfrentan exactamente los mismos conflictos; la anticipación complementa, no reemplaza, preguntar directamente.'
  },
  trampa:'No reconocer cómo el conocimiento de la etapa del ciclo vital orienta de forma práctica las preguntas clínicas del médico de familia.',
  obj:'Aplicar el conocimiento del ciclo vital familiar para anticipar y orientar preguntas clínicas relevantes.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 5.',
  tags:['anticipación de tensiones','etapa del ciclo vital','orientación de preguntas']
},
{
  id:'U10-MF-Q13', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Ciclo vital familiar', sub:'Ejemplo: llegada del primer hijo',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué tarea de desarrollo característica exige la llegada del primer hijo a una pareja?',
  ops:[
    'Reorganizar roles, tiempo y prioridades de la pareja', 'Redefinir la relación de pareja sin el rol organizador que los hijos ocupaban', 'Resolver conflictos de autonomía típicos de la adolescencia', 'Ninguna tarea de desarrollo específica está asociada a la llegada de un primer hijo'],
  ok:0,
  clave:'Reorganizar roles, tiempo y prioridades de la pareja.',
  exp:'La llegada del primer hijo exige que la pareja reorganice roles, tiempo y prioridades -una tarea de desarrollo distinta, por ejemplo, a la salida de los hijos del hogar, que exige que la pareja redefina su relación sin el rol organizador que los hijos ocupaban en el día a día familiar.',
  no:{
    1:'Redefinir la relación sin el rol organizador de los hijos corresponde a la etapa del "nido vacío", no a la llegada del primer hijo.',
    2:'Los conflictos de autonomía característicos corresponden a la etapa de la adolescencia, no a la llegada del primer hijo.',
    3:'Sí existe una tarea de desarrollo específica asociada a esta etapa: la reorganización de roles, tiempo y prioridades de la pareja.'
  },
  trampa:'Confundir la tarea de desarrollo característica de la llegada del primer hijo con la de otra etapa distinta del ciclo vital familiar.',
  obj:'Identificar la tarea de desarrollo característica asociada a la llegada del primer hijo en el ciclo vital familiar.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 5.',
  tags:['llegada del primer hijo','reorganización de roles','tarea de desarrollo']
},
{
  id:'U10-MF-Q14', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Genograma y evaluación familiar', sub:'Función adicional del genograma en medicina familiar',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué propósito adicional tiene el genograma en medicina familiar, más allá de registrar enfermedades y relaciones biológicas como en Genética Médica?',
  ops:[
    'Puede representar la calidad de las relaciones entre los miembros de la familia (cercanas, conflictivas, distantes), aportando una visión estructural de la dinámica familiar',
    'El genograma en medicina familiar se usa exactamente con el mismo único propósito que en Genética Médica, sin ninguna diferencia', 'El genograma nunca puede representar información sobre la calidad de las relaciones familiares', 'El genograma solo sirve para registrar información genética, sin ninguna aplicación en el contexto de medicina familiar'],
  ok:0,
  clave:'Puede representar la calidad de las relaciones entre los miembros de la familia (cercanas, conflictivas, distantes), aportando una visión estructural de la dinámica familiar.',
  exp:'El genograma se usa en medicina familiar con un propósito adicional: además de registrar enfermedades y relaciones biológicas, puede representar la calidad de las relaciones entre los miembros de la familia, aportando una visión estructural de la dinámica familiar de un vistazo.',
  no:{
    1:'El uso en medicina familiar añade un propósito adicional (dinámica relacional) distinto del uso más limitado en Genética Médica.',
    2:'El genograma sí puede representar la calidad de las relaciones familiares, un uso adicional específico de la medicina familiar.',
    3:'El genograma sí tiene una aplicación relevante en medicina familiar, más allá de su uso original en Genética Médica.'
  },
  trampa:'Asumir que el genograma en medicina familiar tiene exactamente el mismo propósito único que en Genética Médica, sin reconocer su función adicional.',
  obj:'Explicar el propósito adicional del genograma en medicina familiar respecto a su uso en Genética Médica.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 6.',
  tags:['genograma','dinámica familiar','uso adicional en medicina familiar']
},
{
  id:'U10-MF-Q15', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Genograma y evaluación familiar', sub:'Diferencia entre genograma y ecomapa',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué se diferencian el genograma y el ecomapa en cuanto a su enfoque?',
  ops:[
    'El genograma se enfoca hacia adentro (relaciones dentro de la familia y su historia); el ecomapa se enfoca hacia afuera (relaciones de la familia con su entorno)',
    'Ambas herramientas tienen exactamente el mismo enfoque, representando información idéntica sobre la familia', 'El genograma se enfoca hacia afuera, y el ecomapa se enfoca hacia adentro de la familia', 'Ninguna de las dos herramientas tiene relación real con los determinantes sociales de la salud'],
  ok:0,
  clave:'El genograma se enfoca hacia adentro (relaciones dentro de la familia y su historia); el ecomapa se enfoca hacia afuera (relaciones de la familia con su entorno).',
  exp:'Mientras el genograma se enfoca hacia adentro (relaciones dentro de la familia y su historia), el ecomapa se enfoca hacia afuera (relaciones de la familia con su entorno) -juntos, ofrecen una imagen bastante completa del contexto social real en el que vive un paciente.',
  no:{
    1:'Tienen enfoques distintos y complementarios, no idénticos: uno interno a la familia, el otro hacia su entorno externo.',
    2:'Está invertido: el GENOGRAMA se enfoca hacia adentro (familia), y el ECOMAPA hacia afuera (entorno), no al revés.',
    3:'El ecomapa, precisamente, tiene una relación directa con los determinantes sociales de la salud al representar el entorno social del paciente.'
  },
  trampa:'Invertir el enfoque del genograma (interno, familia) y el ecomapa (externo, entorno social), o asumir que son herramientas idénticas.',
  obj:'Distinguir el enfoque del genograma frente al del ecomapa en la evaluación familiar.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 6.',
  tags:['ecomapa','genograma','enfoque interno vs. externo']
},
{
  id:'U10-MF-Q16', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Genograma y evaluación familiar', sub:'Ventaja de una evaluación familiar estructurada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ventaja tiene una evaluación familiar estructurada sobre una conversación libre no estructurada, en casos complejos?',
  ops:[
    'Asegura que ningún aspecto relevante (comunicación, roles, apoyo, manejo de conflictos, recursos) se quede sin explorar por simple omisión',
    'Una conversación libre no estructurada siempre explora con la misma profundidad todos los aspectos relevantes de la dinámica familiar', 'La evaluación familiar estructurada nunca aporta ninguna ventaja real sobre una conversación libre', 'Ambos enfoques (estructurado y no estructurado) son exactamente equivalentes en cualquier caso, simple o complejo'],
  ok:0,
  clave:'Asegura que ningún aspecto relevante (comunicación, roles, apoyo, manejo de conflictos, recursos) se quede sin explorar por simple omisión.',
  exp:'Una evaluación familiar estructurada organiza la exploración de la dinámica familiar en categorías específicas, en vez de depender de una conversación libre y potencialmente incompleta, asegurando que ningún aspecto relevante se quede sin explorar por simple omisión, particularmente útil en casos complejos.',
  no:{
    1:'Una conversación libre corre el riesgo de quedarse en los aspectos más evidentes o cómodos, dejando fuera dimensiones igualmente relevantes.',
    2:'La evaluación estructurada sí aporta una ventaja real en casos complejos, al sistematizar la exploración de todos los aspectos relevantes.',
    3:'En casos complejos, el enfoque estructurado ofrece una ventaja real sobre el no estructurado, precisamente por su sistematicidad.'
  },
  trampa:'Subestimar el riesgo de omisión de una conversación no estructurada frente a la sistematicidad de una evaluación familiar estructurada.',
  obj:'Explicar la ventaja de una evaluación familiar estructurada en casos complejos de dinámica familiar.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 6.',
  tags:['evaluación familiar estructurada','sistematización','casos complejos']
},
{
  id:'U10-MF-Q17', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Genograma y evaluación familiar', sub:'Genograma y ecomapa como razonamiento clínico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el genograma y el ecomapa se consideran instrumentos de razonamiento clínico, más que solo herramientas de registro documental?',
  ops:[
    'Porque revelan, de un vistazo, patrones familiares y sociales que orientan directamente el plan de manejo del paciente',
    'El genograma y el ecomapa son exclusivamente herramientas administrativas, sin ninguna influencia real sobre el razonamiento clínico', 'Estas herramientas nunca aportan información que oriente decisiones sobre el plan de manejo de un paciente', 'El genograma y el ecomapa solo tienen valor documental histórico, sin ninguna aplicación práctica en la consulta actual'],
  ok:0,
  clave:'Porque revelan, de un vistazo, patrones familiares y sociales que orientan directamente el plan de manejo del paciente.',
  exp:'El genograma y el ecomapa no son solo herramientas de registro documental; son instrumentos de razonamiento clínico que revelan, de un vistazo, patrones familiares y sociales que orientan directamente el plan de manejo.',
  no:{
    1:'Tienen una función clínica activa, no meramente administrativa, al orientar directamente las decisiones sobre el manejo del paciente.',
    2:'Estas herramientas sí aportan información relevante que puede orientar decisiones concretas sobre el plan de manejo.',
    3:'Tienen una aplicación práctica activa en la consulta actual, más allá de un simple registro histórico documental.'
  },
  trampa:'Reducir el genograma y el ecomapa a herramientas puramente documentales o administrativas, sin reconocer su función de razonamiento clínico activo.',
  obj:'Explicar por qué el genograma y el ecomapa funcionan como instrumentos de razonamiento clínico.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 6.',
  tags:['razonamiento clínico','genograma y ecomapa','orientación del plan de manejo']
},
{
  id:'U10-MF-Q18', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Atención longitudinal y continuidad del cuidado', sub:'Interpretación de un dato aislado con contexto histórico',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente tiene una presión arterial que parecería "normal" para cualquier persona, pero su historia clínica longitudinal muestra que siempre ha tenido valores considerablemente más bajos que ese.',
  enunciado:'¿Por qué este valor "normal" podría ser, en realidad, una señal de alarma para este paciente específico?',
  ops:[
    'Porque el contexto histórico longitudinal cambia por completo la interpretación clínica de un dato aislado, respecto al patrón habitual de ese paciente',
    'Un valor "normal" siempre debe interpretarse exactamente igual para cualquier paciente, sin importar su historia clínica previa', 'La historia clínica longitudinal nunca debería influir en la interpretación de un valor de laboratorio o signo vital actual', 'Este escenario no tiene ninguna relación real con el valor de la atención longitudinal en medicina familiar'],
  ok:0,
  clave:'El contexto histórico longitudinal cambia por completo la interpretación clínica de un dato aislado, respecto al patrón habitual de ese paciente.',
  exp:'Un valor de presión arterial que parecería "normal" en un paciente cualquiera puede ser una señal de alarma en un paciente cuya historia longitudinal muestra que siempre ha tenido valores considerablemente más bajos -el contexto histórico cambia por completo la interpretación clínica de un mismo dato aislado.',
  no:{
    1:'Es precisamente lo contrario: un valor "normal" en términos poblacionales puede ser anormal para el patrón específico de un paciente.',
    2:'La historia clínica longitudinal sí debería influir en la interpretación de un dato actual, siendo precisamente el punto central de este ejemplo.',
    3:'Este escenario ilustra directamente el valor de la atención longitudinal para interpretar correctamente los datos clínicos de un paciente.'
  },
  trampa:'Interpretar un valor clínico exclusivamente según rangos poblacionales generales, sin considerar el patrón histórico específico de ese paciente.',
  obj:'Aplicar el valor de la historia clínica longitudinal para interpretar correctamente un dato clínico aparentemente normal.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 1.',
  tags:['historia clínica longitudinal','interpretación contextual','patrón habitual']
},
{
  id:'U10-MF-Q19', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Atención longitudinal y continuidad del cuidado', sub:'Ajuste progresivo del plan de manejo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ventaja ofrece el seguimiento a largo plazo para ajustar el plan de manejo de un paciente?',
  ops:[
    'Permite probar un ajuste, observar la respuesta, y refinar la conducta en consultas sucesivas, en vez de tomar decisiones definitivas basadas en un único punto de información',
    'El seguimiento a largo plazo nunca permite ajustar el plan de manejo de forma progresiva, solo tomar decisiones definitivas de una vez', 'Un único encuentro aislado siempre permite ajustar el plan de manejo con la misma precisión que un seguimiento a largo plazo', 'El seguimiento a largo plazo no aporta ninguna ventaja real sobre una decisión tomada en un solo momento'],
  ok:0,
  clave:'Permite probar un ajuste, observar la respuesta, y refinar la conducta en consultas sucesivas, en vez de decisiones definitivas basadas en un único punto de información.',
  exp:'El seguimiento a largo plazo permite ajustar el plan de manejo de forma progresiva y adaptada, en vez de tomar decisiones definitivas basadas en un único punto de información: un médico que sigue al paciente a lo largo del tiempo puede probar un ajuste, observar la respuesta, y refinar la conducta en consultas sucesivas.',
  no:{
    1:'Es precisamente lo contrario: el seguimiento a largo plazo permite un ajuste PROGRESIVO, no solo decisiones definitivas de una vez.',
    2:'Un encuentro aislado no tiene la misma capacidad de ajuste progresivo basado en respuesta observada a lo largo del tiempo.',
    3:'El seguimiento a largo plazo sí aporta una ventaja real: permite refinar la conducta según la respuesta observada en el tiempo.'
  },
  trampa:'Subestimar la ventaja del ajuste progresivo que permite el seguimiento a largo plazo frente a una decisión tomada en un único momento aislado.',
  obj:'Explicar la ventaja del seguimiento a largo plazo para el ajuste progresivo del plan de manejo.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 1.',
  tags:['seguimiento a largo plazo','ajuste progresivo','plan de manejo']
},
{
  id:'U10-MF-Q20', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Atención longitudinal y continuidad del cuidado', sub:'Costo clínico de la atención fragmentada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué costo clínico real, más allá de la incomodidad, tiene la atención fragmentada donde un paciente ve a un profesional distinto en cada consulta?',
  ops:[
    'Cada profesional debe reconstruir el contexto desde cero, con el riesgo real de omitir información relevante que un médico de continuidad ya conocería',
    'La atención fragmentada nunca tiene ningún costo clínico real, solo representa un inconveniente menor de comodidad para el paciente', 'Cada profesional en la atención fragmentada siempre tiene acceso automático a toda la información relevante previa del paciente', 'La atención fragmentada mejora, en vez de empeorar, la calidad de la información clínica disponible sobre el paciente'],
  ok:0,
  clave:'Cada profesional debe reconstruir el contexto desde cero, con el riesgo real de omitir información relevante que un médico de continuidad ya conocería.',
  exp:'La atención fragmentada pierde precisamente la ventaja de la continuidad: cada profesional debe reconstruir el contexto desde cero, con el riesgo real de omitir información relevante que un médico de continuidad ya conocería sin necesidad de preguntarla de nuevo -un costo clínico real, no solo un inconveniente de comodidad.',
  no:{
    1:'Es precisamente lo contrario: la atención fragmentada sí tiene un costo clínico real, relacionado con la pérdida de información en cada transición.',
    2:'En la atención fragmentada, cada profesional NO tiene automáticamente acceso a toda la información previa; debe reconstruirla desde cero.',
    3:'La atención fragmentada tiende a EMPEORAR, no mejorar, la calidad y continuidad de la información clínica disponible.'
  },
  trampa:'Subestimar el costo clínico real de la atención fragmentada, reduciéndolo a un simple inconveniente de comodidad para el paciente.',
  obj:'Explicar el costo clínico real de la atención fragmentada, más allá de la incomodidad para el paciente.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 1.',
  tags:['atención fragmentada','costo clínico real','pérdida de información']
},
{
  id:'U10-MF-Q21', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Atención longitudinal y continuidad del cuidado', sub:'Conexión con comunicación interprofesional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué riesgo ya visto en Relación Médico-Paciente se conecta el costo clínico de la atención fragmentada a lo largo del tiempo?',
  ops:[
    'El mismo tipo de riesgo de pérdida de información ya visto en la comunicación interprofesional deficiente, aplicado aquí a la continuidad temporal',
    'No existe ninguna conexión real entre la atención fragmentada a lo largo del tiempo y la comunicación interprofesional ya vista antes', 'La comunicación interprofesional deficiente solo aplica entre distintos profesionales en un mismo momento, sin ninguna relación temporal', 'El riesgo de pérdida de información en la comunicación interprofesional es completamente distinto al riesgo de la atención fragmentada temporal'],
  ok:0,
  clave:'El mismo tipo de riesgo de pérdida de información ya visto en la comunicación interprofesional deficiente, aplicado aquí a la continuidad temporal.',
  exp:'Esta fragmentación tiene un costo clínico real, relacionado directamente con el mismo tipo de riesgo de pérdida de información ya visto en la comunicación interprofesional deficiente (Relación Médico-Paciente, 9no), aplicado aquí a la continuidad a lo largo del tiempo, no solo entre profesionales en un mismo momento.',
  no:{
    1:'Sí existe una conexión conceptual directa: ambos riesgos comparten el mismo mecanismo de pérdida de información en una transición.',
    2:'El mismo principio de pérdida de información aplica también a la dimensión temporal, no solo a distintos profesionales en un mismo momento.',
    3:'Ambos riesgos comparten el mismo mecanismo conceptual de fondo (pérdida de información en una transición), aunque se apliquen a contextos distintos.'
  },
  trampa:'No reconocer la conexión conceptual entre el riesgo de la atención fragmentada temporal y el de la comunicación interprofesional deficiente ya vista antes.',
  obj:'Explicar la conexión conceptual entre el riesgo de la atención fragmentada temporal y el de la comunicación interprofesional deficiente.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 1.',
  tags:['comunicación interprofesional','conexión conceptual','pérdida de información']
},
{
  id:'U10-MF-Q22', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Manejo de la multimorbilidad', sub:'Limitación de las guías de una sola enfermedad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué aplicar mecánicamente cada guía clínica por separado a un paciente polipatológico puede resultar problemático?',
  ops:[
    'Porque la mayoría de las guías se desarrollan pensando en una sola enfermedad, sin considerar cómo interactúan sus recomendaciones cuando se aplican todas a la vez',
    'Las guías clínicas siempre consideran automáticamente todas las posibles combinaciones de enfermedades que un paciente pueda tener', 'Aplicar varias guías clínicas simultáneamente nunca genera ningún problema real de contradicción o redundancia', 'Los pacientes con multimorbilidad son extremadamente raros en la práctica de medicina familiar'],
  ok:0,
  clave:'La mayoría de las guías se desarrollan pensando en una sola enfermedad, sin considerar cómo interactúan sus recomendaciones cuando se aplican todas a la vez.',
  exp:'El problema práctico es que la mayoría de las guías clínicas se desarrollan y validan pensando en una sola enfermedad, sin considerar cómo interactúan sus recomendaciones cuando se aplican todas a la vez en la misma persona. Aplicarlas mecánicamente puede resultar en un plan contradictorio, redundante, o inmanejable.',
  no:{
    1:'Las guías clínicas típicamente NO consideran automáticamente todas las combinaciones posibles de enfermedades simultáneas de un paciente.',
    2:'Aplicar varias guías simultáneamente SÍ puede generar contradicciones o redundancias reales, un problema práctico bien documentado.',
    3:'La multimorbilidad es, de hecho, sumamente frecuente en la práctica de medicina familiar, especialmente en pacientes de edad avanzada.'
  },
  trampa:'Subestimar la frecuencia de la multimorbilidad o el riesgo real de contradicción al aplicar mecánicamente varias guías clínicas simultáneamente.',
  obj:'Explicar por qué aplicar mecánicamente varias guías clínicas por separado puede ser problemático en un paciente polipatológico.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 14.',
  tags:['guías de una sola enfermedad','paciente polipatológico','contradicción de recomendaciones']
},
{
  id:'U10-MF-Q23', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Manejo de la multimorbilidad', sub:'Consecuencia de una carga de tratamiento excesiva',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una carga de tratamiento excesiva puede llevar a un paciente a abandonar incluso las indicaciones más importantes de su tratamiento?',
  ops:[
    'Porque un paciente abrumado por demasiadas indicaciones simultáneas tiene más probabilidad de abandonar varias de ellas simplemente por sobrecarga práctica, no por falta de voluntad',
    'La carga de tratamiento nunca tiene ninguna relación real con la probabilidad de que un paciente abandone su tratamiento', 'Un paciente siempre prioriza automáticamente las indicaciones más importantes, sin importar cuántas indicaciones tenga en total', 'La carga de tratamiento solo afecta a pacientes con una sola enfermedad, nunca a pacientes polipatológicos'],
  ok:0,
  clave:'Un paciente abrumado por demasiadas indicaciones simultáneas tiene más probabilidad de abandonar varias de ellas simplemente por sobrecarga práctica, no por falta de voluntad.',
  exp:'Una carga de tratamiento excesiva no es solo una molestia; es un factor de riesgo real para la adherencia general: un paciente abrumado por demasiadas indicaciones simultáneas tiene más probabilidad de abandonar varias de ellas, incluso las más importantes, simplemente por sobrecarga práctica, no por falta de voluntad.',
  no:{
    1:'La carga de tratamiento sí tiene una relación causal real y documentada con el riesgo de abandono del tratamiento.',
    2:'Un paciente sobrecargado no necesariamente prioriza automáticamente lo más importante; el abandono puede ser desordenado bajo sobrecarga.',
    3:'La carga de tratamiento es particularmente relevante en pacientes POLIPATOLÓGICOS, donde se acumulan múltiples indicaciones simultáneas.'
  },
  trampa:'Asumir que el abandono del tratamiento siempre refleja falta de voluntad del paciente, sin reconocer el efecto real de la sobrecarga práctica acumulada.',
  obj:'Explicar por qué una carga de tratamiento excesiva puede llevar al abandono de indicaciones importantes.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 14.',
  tags:['carga de tratamiento','abandono del tratamiento','sobrecarga práctica']
},
{
  id:'U10-MF-Q24', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Manejo de la multimorbilidad', sub:'Priorizar en vez de sumar indicaciones',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente polipatológico tiene cuatro guías clínicas distintas aplicables, cada una recomendando fármacos y estudios adicionales, sumando una carga considerable.',
  enunciado:'¿Qué pregunta debería guiar al médico de familia en este escenario, en vez de simplemente sumar mecánicamente todas las recomendaciones?',
  ops:[
    'Cuál es el plan que, tomado en conjunto, este paciente concreto puede realmente sostener',
    '¿Qué dice la guía de cada enfermedad por separado?, sin ninguna consideración adicional sobre la carga combinada', 'La única pregunta relevante es cuál guía clínica es técnicamente más reciente o actualizada', 'No existe ninguna pregunta distinta a simplemente aplicar todas las recomendaciones de todas las guías sin excepción'],
  ok:0,
  clave:'Cuál es el plan que, tomado en conjunto, este paciente concreto puede realmente sostener.',
  exp:'En un paciente polipatológico, la pregunta correcta no es "¿qué dice la guía de cada enfermedad por separado?", sino "¿cuál es el plan que, tomado en conjunto, este paciente concreto puede realmente sostener?" -el manejo racional de la multimorbilidad exige priorizar, no solo sumar indicaciones.',
  no:{
    1:'Esta pregunta, centrada solo en cada guía por separado, es precisamente la que puede llevar a un plan contradictorio o inmanejable.',
    2:'La actualidad técnica de una guía no es el criterio central; lo central es la sostenibilidad del plan combinado para ese paciente.',
    3:'El manejo racional exige priorizar, no simplemente sumar mecánicamente todas las recomendaciones de todas las guías aplicables.'
  },
  trampa:'Asumir que la conducta correcta es sumar mecánicamente todas las recomendaciones de todas las guías aplicables, sin priorizar según la sostenibilidad real para el paciente.',
  obj:'Aplicar el principio de priorización, en vez de suma mecánica de indicaciones, en el manejo de un paciente polipatológico.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 14.',
  tags:['priorización del tratamiento','plan sostenible','paciente polipatológico']
},
{
  id:'U10-MF-Q25', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Manejo de la multimorbilidad', sub:'Conexión con la farmacoterapia racional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se extiende, en el manejo de la multimorbilidad, el principio de farmacoterapia racional ya visto en Farmacoterapéutica?',
  ops:[
    'Se extiende más allá de los fármacos hacia el plan de manejo completo, preguntando si cada indicación aporta un beneficio proporcional a la carga que representa',
    'El principio de farmacoterapia racional no tiene ninguna relación real con el manejo de la multimorbilidad', 'La farmacoterapia racional solo aplica a la elección de fármacos individuales, nunca a un plan de manejo integral', 'Este principio se aplica exactamente igual en multimorbilidad que en un paciente con una sola enfermedad, sin ninguna extensión adicional'],
  ok:0,
  clave:'Se extiende más allá de los fármacos hacia el plan de manejo completo, preguntando si cada indicación aporta un beneficio proporcional a la carga que representa.',
  exp:'Esta priorización retoma directamente la farmacoterapia racional ya vista en Farmacoterapéutica, y la extiende más allá de los fármacos hacia el plan de manejo completo: preguntarse, para cada indicación, si realmente aporta un beneficio proporcional a la carga que representa para ese paciente específico.',
  no:{
    1:'Sí existe una relación conceptual directa: el mismo principio de balance beneficio-carga se extiende del fármaco individual al plan de manejo completo.',
    2:'El principio se extiende más allá de los fármacos, aplicándose también a estudios, citas y otras indicaciones del plan integral.',
    3:'En un paciente con multimorbilidad, este principio se aplica de forma más compleja, considerando la carga combinada de múltiples indicaciones simultáneas.'
  },
  trampa:'No reconocer la extensión del principio de farmacoterapia racional desde el fármaco individual hacia el plan de manejo completo en multimorbilidad.',
  obj:'Explicar cómo el principio de farmacoterapia racional se extiende al plan de manejo completo en el contexto de multimorbilidad.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 14.',
  tags:['farmacoterapia racional','extensión al plan de manejo','multimorbilidad']
}

]);
