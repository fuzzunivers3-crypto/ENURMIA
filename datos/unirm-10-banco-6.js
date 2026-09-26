/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 10, TANDA DE MEDICINA FAMILIAR (2/2)
   Continua unirm-10-banco-5.js. Prefijo U10-MF-. Esta parte
   cubre visita domiciliaria, promocion de la salud en consulta,
   medicina basada en evidencia, coordinacion con especialistas,
   cuidados paliativos y el medico de familia en la comunidad
   (temas 7-12).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U10-MF-Q26', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Visita domiciliaria', sub:'Qué revela el hogar que el consultorio no puede',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipo de información revela una visita domiciliaria que ninguna pregunta directa en el consultorio captura con la misma fidelidad?',
  ops:[
    'Las condiciones reales de vida del paciente: seguridad del entorno, accesibilidad, apoyo familiar cotidiano, higiene y disponibilidad real de alimentos',
    'La visita domiciliaria nunca revela ninguna información real sobre las condiciones de vida del paciente', 'La información obtenida en una visita domiciliaria siempre es idéntica a la que el paciente relata en el consultorio', 'Solo estudios de laboratorio pueden revelar información relevante sobre la vida del paciente, nunca la observación directa'],
  ok:0,
  clave:'Las condiciones reales de vida del paciente: seguridad del entorno, accesibilidad, apoyo familiar cotidiano, higiene y disponibilidad real de alimentos.',
  exp:'Una visita domiciliaria permite observar directamente las condiciones reales de vida del paciente -seguridad del entorno físico, accesibilidad para alguien con movilidad limitada, presencia de apoyo familiar cotidiano, condiciones de higiene, disponibilidad real de alimentos- información que ninguna pregunta directa en el consultorio logra capturar con la misma fidelidad.',
  no:{
    1:'La visita domiciliaria sí revela información real y valiosa sobre las condiciones de vida, distinta de lo que se obtiene en consulta.',
    2:'La información puede diferir de lo relatado en consulta, precisamente porque la observación directa capta aspectos que el relato no siempre refleja.',
    3:'La observación directa del hogar aporta información valiosa complementaria, más allá de lo que capturan exclusivamente los estudios de laboratorio.'
  },
  trampa:'Asumir que la información obtenida en una visita domiciliaria es equivalente a la relatada en consulta, sin reconocer el valor de la observación directa.',
  obj:'Explicar qué información revela una visita domiciliaria que no se captura de la misma forma en el consultorio.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 15.',
  tags:['visita domiciliaria','condiciones reales de vida','observación directa']
},
{
  id:'U10-MF-Q27', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Visita domiciliaria', sub:'Paciente postrado y acceso a la atención',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la visita domiciliaria es, con frecuencia, la única vía real de acceso a la atención médica continua para un paciente postrado?',
  ops:[
    'Porque por su condición física no puede trasladarse al consultorio de forma segura o razonable, y sin ese servicio quedaría efectivamente excluido de la atención regular',
    'Un paciente postrado siempre puede trasladarse al consultorio sin ninguna dificultad real, sin importar su condición física', 'La visita domiciliaria nunca es realmente necesaria para un paciente postrado, quien puede acceder igual de bien a la atención regular', 'El acceso a servicios de salud no tiene ninguna relación con la movilidad física del paciente'],
  ok:0,
  clave:'Por su condición física no puede trasladarse al consultorio de forma segura o razonable, y sin ese servicio quedaría efectivamente excluido de la atención regular.',
  exp:'Un paciente postrado -que por su condición física no puede trasladarse al consultorio de forma segura o razonable- depende con frecuencia de la visita domiciliaria como su única vía real de acceso a la atención médica continua; sin ese servicio, este paciente quedaría efectivamente excluido de la atención médica regular.',
  no:{
    1:'Es precisamente lo contrario: un paciente postrado, por definición, tiene dificultad real para trasladarse de forma segura al consultorio.',
    2:'La visita domiciliaria sí es con frecuencia necesaria, siendo la única vía real de acceso continuo a la atención para este tipo de paciente.',
    3:'El acceso a servicios de salud sí tiene una relación directa con la movilidad física, retomando el concepto de acceso como determinante social.'
  },
  trampa:'Subestimar la barrera real de acceso que representa la limitación de movilidad de un paciente postrado, sin la visita domiciliaria como alternativa.',
  obj:'Explicar por qué la visita domiciliaria es la vía de acceso indispensable para un paciente postrado.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 15.',
  tags:['paciente postrado','acceso a la atención','determinante social']
},
{
  id:'U10-MF-Q28', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Visita domiciliaria', sub:'Evaluar el cuidado cotidiano en el hogar',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué información adicional, más allá de las condiciones físicas del hogar, permite evaluar una visita domiciliaria a un paciente postrado?',
  ops:[
    'Cómo su familia o cuidadores manejan su cuidado cotidiano: administración de medicamentos, cambios de posición, alimentación',
    'La visita domiciliaria nunca aporta información sobre cómo se maneja el cuidado cotidiano del paciente por parte de su familia', 'Solo se puede evaluar la infraestructura física de la vivienda, sin ninguna información sobre el cuidado brindado', 'La forma en que la familia administra medicamentos o cuida al paciente no tiene ninguna relevancia clínica real'],
  ok:0,
  clave:'Cómo su familia o cuidadores manejan su cuidado cotidiano: administración de medicamentos, cambios de posición, alimentación.',
  exp:'La atención de un paciente postrado en su domicilio también permite evaluar directamente cómo su familia o cuidadores manejan su cuidado cotidiano -administración de medicamentos, cambios de posición para evitar úlceras por presión, alimentación-, información esencial para ajustar el plan de manejo a la realidad del cuidado que efectivamente está recibiendo.',
  no:{
    1:'La visita domiciliaria sí aporta información valiosa sobre el manejo cotidiano real que recibe el paciente por parte de su familia.',
    2:'Se puede evaluar tanto la infraestructura física como el cuidado cotidiano real brindado por la familia, ambos aspectos complementarios.',
    3:'Esta información tiene una relevancia clínica real y directa, al permitir ajustar el plan de manejo a la realidad del cuidado recibido.'
  },
  trampa:'Limitar el valor de la visita domiciliaria solo a la observación física del hogar, sin reconocer su utilidad para evaluar el cuidado cotidiano brindado.',
  obj:'Explicar el valor de la visita domiciliaria para evaluar el manejo cotidiano de un paciente postrado por su familia.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 15.',
  tags:['cuidado cotidiano','evaluación del manejo familiar','paciente postrado']
},
{
  id:'U10-MF-Q29', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Visita domiciliaria', sub:'No toda situación justifica una visita domiciliaria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Es correcto afirmar que la visita domiciliaria debería reemplazar de forma general a la consulta convencional?',
  ops:[
    'No; en la mayoría de los casos no la reemplaza, pero en pacientes postrados o con condiciones de vida difíciles de evaluar a distancia, aporta un valor único',
    'Sí, la visita domiciliaria debería reemplazar por completo a la consulta convencional en todos los casos sin excepción', 'La visita domiciliaria nunca aporta ningún valor distinto al de una consulta convencional en el consultorio', 'Decidir cuándo hacer una visita domiciliaria no requiere ningún criterio clínico específico por parte del médico'],
  ok:0,
  clave:'No; en la mayoría de los casos no la reemplaza, pero en pacientes postrados o con condiciones de vida difíciles de evaluar a distancia, aporta un valor único.',
  exp:'La visita domiciliaria no reemplaza a la consulta convencional en la mayoría de los casos, pero en pacientes postrados o con condiciones de vida difíciles de evaluar a distancia, puede revelar información clínicamente decisiva que ninguna otra vía capturaría -decidir cuándo aporta ese valor único es parte del criterio del médico de familia.',
  no:{
    1:'No debería reemplazar de forma general a la consulta convencional; su valor es específico para ciertos casos, no universal.',
    2:'La visita domiciliaria sí aporta un valor distinto en casos específicos, como pacientes postrados o de difícil evaluación a distancia.',
    3:'Decidir cuándo una visita domiciliaria aporta valor real sí requiere criterio clínico específico del médico de familia.'
  },
  trampa:'Asumir que la visita domiciliaria debería aplicarse universalmente o que nunca aporta valor distinto a la consulta convencional.',
  obj:'Explicar en qué casos la visita domiciliaria aporta un valor clínico específico, sin reemplazar de forma general a la consulta convencional.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 15.',
  tags:['valor específico de la visita','no reemplazo general','criterio clínico']
},
{
  id:'U10-MF-Q30', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Promoción de la salud en el consultorio familiar', sub:'Propósito de la consejería breve',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué busca la consejería breve, diseñada para el tiempo limitado de una consulta habitual?',
  ops:[
    'Aprovechar unos pocos minutos para abordar un cambio de comportamiento relevante, sin pretender una intervención completa como la entrevista motivacional extensa',
    'La consejería breve busca reemplazar completamente a la entrevista motivacional extensa en todos los casos posibles', 'La consejería breve requiere sesiones de varias horas de duración para ser efectiva', 'La consejería breve no tiene ningún propósito real definido dentro de la consulta habitual'],
  ok:0,
  clave:'Aprovechar unos pocos minutos para abordar un cambio de comportamiento relevante, sin pretender una intervención completa como la entrevista motivacional extensa.',
  exp:'La consejería breve es una técnica de comunicación diseñada para aprovechar el tiempo limitado de una consulta habitual (unos pocos minutos) para abordar un cambio de comportamiento relevante, sin pretender en ese momento una intervención completa como la entrevista motivacional extensa ya vista en Relación Médico-Paciente.',
  no:{
    1:'No busca reemplazar a la entrevista motivacional extensa; son técnicas complementarias para contextos distintos (breve vs. extenso).',
    2:'Precisamente lo contrario: la consejería breve está diseñada para pocos minutos, no para sesiones extensas de varias horas.',
    3:'La consejería breve sí tiene un propósito claro: aprovechar el tiempo limitado de la consulta para un mensaje de cambio relevante.'
  },
  trampa:'Confundir la consejería breve con la entrevista motivacional extensa, asumiendo que buscan lo mismo o requieren el mismo tiempo.',
  obj:'Explicar el propósito de la consejería breve en el contexto de tiempo limitado de la consulta habitual.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 3.',
  tags:['consejería breve','tiempo limitado de consulta','cambio de comportamiento']
},
{
  id:'U10-MF-Q31', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Promoción de la salud en el consultorio familiar', sub:'Ventaja de la repetición espaciada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué repetir un mensaje breve de promoción de la salud en consultas sucesivas puede ser más efectivo que una única intervención extensa?',
  ops:[
    'Porque el cambio de comportamiento sostenido rara vez ocurre de una sola vez, sino a través de intentos repetidos, ajustados según la respuesta observada en cada encuentro',
    'Una única intervención extensa siempre es más efectiva que cualquier repetición breve a lo largo del tiempo, sin ninguna excepción', 'Repetir un mensaje breve en consultas sucesivas nunca tiene ninguna ventaja real sobre una intervención única', 'El cambio de comportamiento siempre ocurre de una sola vez, sin necesidad de ningún proceso repetido o ajustado'],
  ok:0,
  clave:'El cambio de comportamiento sostenido rara vez ocurre de una sola vez, sino a través de intentos repetidos, ajustados según la respuesta observada en cada encuentro.',
  exp:'Esta repetición espaciada -un mensaje breve pero constante a lo largo de varias consultas- puede ser más efectiva que una única intervención extensa, precisamente porque el cambio de comportamiento sostenido rara vez ocurre de una sola vez, sino a través de intentos repetidos, ajustados según la respuesta observada en cada encuentro.',
  no:{
    1:'Es precisamente lo contrario: la repetición espaciada puede ser MÁS efectiva que una única intervención extensa en ciertos contextos.',
    2:'La repetición espaciada sí puede tener una ventaja real, aprovechando la continuidad propia de la medicina familiar.',
    3:'El cambio de comportamiento sostenido con frecuencia requiere un proceso repetido y ajustado, no ocurre típicamente de una sola vez.'
  },
  trampa:'Asumir que una intervención única y extensa siempre es superior a la repetición espaciada de mensajes breves a lo largo del tiempo.',
  obj:'Explicar por qué la repetición espaciada de mensajes breves puede ser efectiva para el cambio de comportamiento sostenido.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 3.',
  tags:['repetición espaciada','cambio sostenido','continuidad de la consulta']
},
{
  id:'U10-MF-Q32', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Promoción de la salud en el consultorio familiar', sub:'Conectar el comportamiento con el motivo de consulta',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico de familia, durante una consulta por control de presión arterial, aprovecha para vincular explícitamente el sedentarismo del paciente con su dificultad para controlar la presión, en vez de mencionar el ejercicio como un tema aparte y desconectado.',
  enunciado:'¿Por qué esta forma de plantear el mensaje suele ser más efectiva que una recomendación genérica de "debería hacer más ejercicio"?',
  ops:[
    'Porque hace que el mensaje sea más relevante y memorable, aprovechando el momento clínico específico en el que el paciente está más receptivo a entender la relación entre su comportamiento y su salud',
    'Conectar el comportamiento con el motivo de consulta actual nunca tiene ninguna ventaja real sobre una recomendación genérica', 'Una recomendación genérica de "hacer más ejercicio" siempre es igual de efectiva que una conectada directamente al motivo de consulta', 'El momento clínico específico de la consulta nunca influye en la receptividad del paciente hacia un mensaje de cambio'],
  ok:0,
  clave:'Hace que el mensaje sea más relevante y memorable, aprovechando el momento clínico específico en el que el paciente está más receptivo.',
  exp:'Esta conexión directa con el motivo de consulta actual hace que el mensaje sea más relevante y memorable para el paciente que una recomendación genérica de "debería hacer más ejercicio", aprovechando el momento clínico específico en el que el paciente está más receptivo a entender la relación entre su comportamiento y su salud.',
  no:{
    1:'Conectar el mensaje con el motivo de consulta sí tiene una ventaja real, al hacerlo más relevante y memorable para el paciente.',
    2:'Es precisamente lo contrario: un mensaje CONECTADO al motivo de consulta suele ser más efectivo que uno genérico y desconectado.',
    3:'El momento clínico específico sí influye en la receptividad; el paciente está más abierto a entender la relación en ese contexto puntual.'
  },
  trampa:'Subestimar el valor de conectar el mensaje de cambio con el motivo de consulta específico, asumiendo que una recomendación genérica es igual de efectiva.',
  obj:'Explicar por qué conectar el mensaje de promoción con el motivo de consulta actual mejora su efectividad.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 3.',
  tags:['conexión con el motivo de consulta','mensaje relevante','momento clínico receptivo']
},
{
  id:'U10-MF-Q33', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Promoción de la salud en el consultorio familiar', sub:'Propósito de la consejería breve, no resolver en una sola vez',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué busca realmente la consejería breve, según su propósito real en el contexto de la medicina familiar?',
  ops:[
    'Sembrar y reforzar, de forma repetida a lo largo del tiempo, aprovechando la continuidad propia de la medicina familiar, no resolver el cambio de comportamiento en una sola consulta',
    'La consejería breve busca resolver por completo el cambio de comportamiento del paciente en una única consulta, sin necesidad de seguimiento', 'La consejería breve no tiene ningún propósito real relacionado con la continuidad del cuidado en medicina familiar', 'El objetivo de la consejería breve es exclusivamente informar, sin ninguna intención de lograr un cambio real de comportamiento'],
  ok:0,
  clave:'Sembrar y reforzar, de forma repetida a lo largo del tiempo, aprovechando la continuidad propia de la medicina familiar, no resolver en una sola consulta.',
  exp:'La consejería breve no busca resolver el cambio de comportamiento en una sola consulta; busca sembrar y reforzar, de forma repetida a lo largo del tiempo, aprovechando la continuidad propia de la medicina familiar.',
  no:{
    1:'Es precisamente lo contrario: no busca resolver todo en una sola consulta, sino sembrar y reforzar repetidamente a lo largo del tiempo.',
    2:'La consejería breve sí tiene un propósito relacionado directamente con la continuidad del cuidado, aprovechando las consultas sucesivas.',
    3:'El objetivo va más allá de solo informar; busca activamente promover un cambio de comportamiento real, aunque sea de forma gradual.'
  },
  trampa:'Asumir que la consejería breve pretende resolver el cambio de comportamiento en una sola consulta, en vez de reconocer su lógica de refuerzo repetido.',
  obj:'Explicar el propósito real de la consejería breve en el marco de la continuidad de la medicina familiar.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 3.',
  tags:['propósito de la consejería breve','refuerzo repetido','continuidad']
},
{
  id:'U10-MF-Q34', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Medicina familiar basada en evidencia', sub:'Brecha entre el paciente del estudio y el real',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la evidencia detrás de muchas guías de práctica clínica puede no ser directamente extrapolable a un paciente polipatológico real de medicina familiar?',
  ops:[
    'Porque muchos ensayos clínicos se realizan en poblaciones relativamente homogéneas, con criterios de inclusión estrictos que excluyen deliberadamente a pacientes con múltiples comorbilidades',
    'Los ensayos clínicos siempre incluyen deliberadamente a pacientes con múltiples comorbilidades, representando fielmente al paciente polipatológico', 'La evidencia científica de las guías clínicas siempre es directamente aplicable a cualquier paciente, sin ninguna excepción', 'No existe ninguna diferencia real entre la población incluida en los ensayos clínicos y el paciente típico de medicina familiar'],
  ok:0,
  clave:'Muchos ensayos clínicos se realizan en poblaciones relativamente homogéneas, con criterios de inclusión estrictos que excluyen deliberadamente a pacientes con múltiples comorbilidades.',
  exp:'Muchos ensayos clínicos que generan la evidencia detrás de las guías de práctica clínica se realizan en poblaciones relativamente homogéneas, con criterios de inclusión estrictos que excluyen deliberadamente a pacientes con múltiples comorbilidades -precisamente el tipo de paciente que con más frecuencia consulta a un médico de familia.',
  no:{
    1:'Es precisamente lo contrario: los ensayos clínicos suelen EXCLUIR, no incluir, deliberadamente a pacientes con múltiples comorbilidades.',
    2:'La evidencia no siempre es directamente extrapolable; existen limitaciones reales relacionadas con la población estudiada en los ensayos.',
    3:'Sí existe una diferencia real y relevante entre la población típica de los ensayos clínicos y el paciente polipatológico real de medicina familiar.'
  },
  trampa:'Asumir que los ensayos clínicos representan fielmente al paciente polipatológico real, sin reconocer sus criterios de inclusión típicamente estrictos.',
  obj:'Explicar por qué la evidencia de muchos ensayos clínicos puede no ser directamente extrapolable a un paciente polipatológico real.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 2.',
  tags:['brecha de evidencia','criterios de inclusión','paciente polipatológico']
},
{
  id:'U10-MF-Q35', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Medicina familiar basada en evidencia', sub:'Aplicar la evidencia con criterio, no de forma mecánica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué significa aplicar la medicina basada en evidencia "con criterio", según lo visto en este tema?',
  ops:[
    'Considerar explícitamente si el paciente que se tiene enfrente se parece razonablemente a la población en la que se generó esa evidencia, y ajustar la conducta cuando existan diferencias relevantes',
    'Aplicar la medicina basada en evidencia con criterio significa ignorar por completo cualquier guía de práctica clínica disponible', 'Significa seguir cualquier guía clínica exactamente al pie de la letra, sin ninguna consideración del paciente específico', 'La medicina familiar basada en evidencia no requiere ningún ejercicio de criterio clínico adicional por parte del médico'],
  ok:0,
  clave:'Considerar explícitamente si el paciente que se tiene enfrente se parece razonablemente a la población en la que se generó esa evidencia, y ajustar la conducta cuando existan diferencias relevantes.',
  exp:'La medicina familiar basada en evidencia no significa ignorar las guías de práctica clínica; significa aplicarlas con criterio clínico informado, considerando explícitamente si el paciente que se tiene enfrente se parece razonablemente a la población en la que se generó esa evidencia, y ajustando la conducta cuando existan diferencias relevantes.',
  no:{
    1:'No significa ignorar las guías; significa aplicarlas con criterio, considerando la similitud del paciente con la población estudiada.',
    2:'Es precisamente lo contrario: no se trata de seguir "al pie de la letra" sin considerar las diferencias del paciente específico.',
    3:'Sí requiere un ejercicio de criterio clínico activo, siendo precisamente el elemento distintivo de este enfoque en medicina familiar.'
  },
  trampa:'Confundir "aplicar con criterio" con "ignorar la evidencia" o con "seguir la guía sin ningún ajuste", cuando en realidad implica un balance juicioso.',
  obj:'Explicar qué significa aplicar la medicina basada en evidencia con criterio clínico en medicina familiar.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 2.',
  tags:['criterio clínico','aplicación de la evidencia','ajuste según el paciente']
},
{
  id:'U10-MF-Q36', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Medicina familiar basada en evidencia', sub:'Decisión ante ausencia de evidencia directa',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico de familia atiende a un paciente muy anciano con múltiples comorbilidades, un perfil raramente incluido en los ensayos clínicos disponibles para la condición que necesita tratar.',
  enunciado:'¿Qué combinación de recursos permite al médico tomar una decisión bien fundamentada en ausencia de evidencia directa aplicable?',
  ops:[
    'Extrapolación cuidadosa de la evidencia disponible en poblaciones más similares, combinada con el conocimiento acumulado de ese paciente específico gracias a la continuidad del cuidado',
    'En ausencia de evidencia directa, el médico no tiene absolutamente ninguna orientación posible para tomar una decisión', 'La única opción válida es esperar a que se publique un ensayo clínico específico para ese perfil exacto de paciente', 'El conocimiento longitudinal del paciente nunca puede compensar, en ningún grado, la falta de evidencia directa aplicable'],
  ok:0,
  clave:'Extrapolación cuidadosa de la evidencia disponible en poblaciones más similares, combinada con el conocimiento acumulado de ese paciente específico gracias a la continuidad del cuidado.',
  exp:'En situaciones donde no existe evidencia directa aplicable, el médico de familia no queda sin ninguna orientación: puede razonar por extrapolación cuidadosa de la evidencia disponible en poblaciones más similares, combinada con el conocimiento acumulado de ese paciente específico gracias a la continuidad del cuidado.',
  no:{
    1:'El médico sí tiene recursos disponibles: extrapolación cuidadosa y conocimiento longitudinal, aunque la evidencia directa no exista.',
    2:'Esperar un ensayo específico no es realista ni necesario; existen formas razonables de tomar decisiones fundamentadas mientras tanto.',
    3:'El conocimiento longitudinal sí puede compensar, en parte, la falta de evidencia directa, aportando contexto clínico valioso.'
  },
  trampa:'Asumir que la ausencia de evidencia directa deja al médico completamente sin orientación, sin reconocer las herramientas disponibles para decidir con fundamento.',
  obj:'Aplicar la combinación de extrapolación cuidadosa y continuidad del cuidado para decidir ante ausencia de evidencia directa.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 2.',
  tags:['ausencia de evidencia directa','extrapolación cuidadosa','decisión fundamentada']
},
{
  id:'U10-MF-Q37', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Medicina familiar basada en evidencia', sub:'Tensión entre población estudiada y persona individual',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué tensión de fondo explica por qué aplicar criterio clínico, y no solo seguir la guía mecánicamente, es necesario en medicina familiar?',
  ops:[
    'Que la evidencia científica responde preguntas sobre poblaciones, mientras que la decisión clínica se toma sobre una persona individual, con toda su complejidad particular',
    'No existe ninguna tensión real entre la evidencia poblacional y la decisión sobre un paciente individual', 'La evidencia científica siempre responde con precisión total sobre cada persona individual, sin ninguna generalización poblacional', 'Esta tensión es exclusiva del ámbito de la farmacoterapéutica, sin ninguna relación con la medicina familiar'],
  ok:0,
  clave:'La evidencia científica responde preguntas sobre poblaciones, mientras que la decisión clínica se toma sobre una persona individual, con toda su complejidad particular.',
  exp:'Este ejercicio de criterio no es un permiso para ignorar la evidencia arbitrariamente; es reconocer que la evidencia científica responde preguntas sobre poblaciones, mientras que la decisión clínica se toma sobre una persona individual, con toda su complejidad particular -la misma tensión ya vista al individualizar metas de tratamiento en Farmacoterapéutica.',
  no:{
    1:'Sí existe una tensión real y bien reconocida entre la evidencia poblacional generalizada y la decisión sobre un individuo específico.',
    2:'La evidencia científica responde, por su propia naturaleza metodológica, a preguntas sobre poblaciones, no sobre cada individuo con precisión total.',
    3:'Esta tensión no es exclusiva de la farmacoterapéutica; se aplica de forma general en toda la práctica clínica, incluida la medicina familiar.'
  },
  trampa:'No reconocer la tensión fundamental entre evidencia poblacional generalizada y decisión clínica individualizada como justificación del criterio clínico.',
  obj:'Explicar la tensión entre evidencia poblacional y decisión clínica individual que justifica el uso de criterio en medicina familiar.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 2.',
  tags:['tensión evidencia-individuo','decisión clínica individualizada','criterio clínico justificado']
},
{
  id:'U10-MF-Q38', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Coordinación con especialistas y referencia', sub:'Componentes de una buena referencia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué implica preparar bien una referencia a un especialista, más allá de simplemente enviar al paciente?',
  ops:[
    'Incluir información clínica suficiente (motivo claro, hallazgos relevantes, estudios ya realizados), para que el especialista no tenga que repetir desde cero una evaluación ya hecha',
    'Preparar una referencia bien hecha consiste únicamente en anotar el nombre del paciente y la especialidad a la que se refiere', 'Una buena referencia nunca requiere incluir ningún estudio o hallazgo clínico previo del paciente', 'La calidad de la preparación de una referencia no tiene ninguna relación real con la eficiencia de la atención posterior'],
  ok:0,
  clave:'Incluir información clínica suficiente (motivo claro, hallazgos relevantes, estudios ya realizados), para que el especialista no tenga que repetir desde cero una evaluación ya hecha.',
  exp:'El sistema de referencia y contrarreferencia exige del médico de familia algo más que simplemente enviar al paciente: implica preparar la referencia con información clínica suficiente (motivo claro, hallazgos relevantes, estudios ya realizados), para que el especialista no tenga que repetir desde cero una evaluación que ya se hizo.',
  no:{
    1:'Una referencia bien preparada va más allá de datos básicos; requiere información clínica suficiente para evitar repetir evaluaciones.',
    2:'Una buena referencia sí debe incluir estudios y hallazgos relevantes ya realizados, para evitar duplicación innecesaria.',
    3:'La calidad de la preparación tiene una relación directa con la eficiencia real de la atención especializada posterior del paciente.'
  },
  trampa:'Reducir la referencia a especialista a un trámite administrativo básico, sin reconocer la importancia de incluir información clínica completa.',
  obj:'Explicar qué implica preparar bien una referencia a un especialista, más allá del envío simple del paciente.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 10.',
  tags:['referencia bien preparada','información clínica suficiente','eficiencia especializada']
},
{
  id:'U10-MF-Q39', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Coordinación con especialistas y referencia', sub:'Rol de coordinación tras la referencia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué rol mantiene el médico de familia incluso después de referir a un paciente a un especialista?',
  ops:[
    'Asegurar que la información fluya de vuelta desde el especialista (contrarreferencia), integrar recomendaciones de distintos especialistas, y mantener la visión integral del paciente',
    'El médico de familia pierde por completo cualquier responsabilidad sobre el paciente una vez realizada la referencia', 'La coordinación del cuidado termina automáticamente en el momento exacto en que se envía la referencia al especialista', 'El médico de familia nunca necesita integrar recomendaciones de distintos especialistas que atiendan al mismo paciente'],
  ok:0,
  clave:'Asegurar que la información fluya de vuelta desde el especialista (contrarreferencia), integrar recomendaciones de distintos especialistas, y mantener la visión integral del paciente.',
  exp:'La coordinación del cuidado es el rol activo que mantiene el médico de familia incluso después de referir a un paciente: asegurar que la información fluya de vuelta desde el especialista (contrarreferencia), integrar las recomendaciones de distintos especialistas, y mantener la visión integral del paciente que ningún especialista individual necesariamente tiene.',
  no:{
    1:'El médico de familia mantiene una responsabilidad activa de coordinación, no pierde por completo su rol tras la referencia.',
    2:'La coordinación del cuidado continúa después del envío de la referencia, no termina en ese momento exacto.',
    3:'Integrar recomendaciones de distintos especialistas es precisamente parte del rol de coordinación del médico de familia.'
  },
  trampa:'Asumir que el rol del médico de familia termina al enviar la referencia, sin reconocer su responsabilidad continua de coordinación.',
  obj:'Explicar el rol de coordinación que mantiene el médico de familia después de referir a un paciente.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 10.',
  tags:['coordinación del cuidado','contrarreferencia','integración de recomendaciones']
},
{
  id:'U10-MF-Q40', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Coordinación con especialistas y referencia', sub:'Riesgo de recomendaciones contradictorias sin coordinación',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con multimorbilidad consulta a varios especialistas distintos, cada uno enfocado en su área específica, sin que nadie integre todas las recomendaciones recibidas.',
  enunciado:'¿Qué riesgo enfrenta este paciente sin un médico de familia que coordine el proceso?',
  ops:[
    'Queda con la carga de reconciliar indicaciones potencialmente contradictorias por su propia cuenta, sin el criterio clínico necesario para hacerlo con seguridad',
    'Este paciente nunca enfrenta ningún riesgo real por consultar a varios especialistas sin coordinación entre ellos', 'Los especialistas siempre coordinan automáticamente entre sí sus recomendaciones, sin necesidad de ningún médico coordinador', 'La integración de recomendaciones de varios especialistas nunca representa ningún desafío real para el paciente'],
  ok:0,
  clave:'Queda con la carga de reconciliar indicaciones potencialmente contradictorias por su propia cuenta, sin el criterio clínico necesario para hacerlo con seguridad.',
  exp:'Sin alguien que integre todas las recomendaciones (que pueden, en ocasiones, entrar en conflicto entre sí), el paciente queda con la carga de reconciliar indicaciones potencialmente contradictorias por su propia cuenta, sin el criterio clínico necesario para hacerlo con seguridad.',
  no:{
    1:'Este paciente sí enfrenta un riesgo real: la carga de reconciliar indicaciones potencialmente contradictorias sin apoyo coordinador.',
    2:'Los especialistas, cada uno enfocado en su área, no necesariamente coordinan automáticamente entre sí sin un rol integrador explícito.',
    3:'La integración de recomendaciones de varios especialistas sí representa un desafío real, especialmente sin un coordinador que lo facilite.'
  },
  trampa:'Subestimar el riesgo real que enfrenta un paciente polimedicado o con multimorbilidad al no tener quien coordine las recomendaciones de múltiples especialistas.',
  obj:'Explicar el riesgo de un paciente sin coordinación del cuidado ante recomendaciones de múltiples especialistas.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 10.',
  tags:['recomendaciones contradictorias','falta de coordinación','riesgo del paciente']
},
{
  id:'U10-MF-Q41', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Coordinación con especialistas y referencia', sub:'Balance entre referir de más y de menos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué consecuencias tienen, respectivamente, referir de más y referir de menos?',
  ops:[
    'Referir de más satura innecesariamente el sistema especializado con problemas que la atención primaria podría resolver; referir de menos retrasa el acceso a una evaluación especializada realmente necesaria',
    'Referir de más y referir de menos tienen exactamente las mismas consecuencias, sin ninguna diferencia real', 'Referir de más siempre es la conducta más segura, sin ninguna consecuencia negativa asociada', 'Referir de menos nunca tiene ninguna consecuencia negativa real para el paciente'],
  ok:0,
  clave:'Referir de más satura innecesariamente el sistema especializado; referir de menos retrasa el acceso a una evaluación especializada realmente necesaria.',
  exp:'Referir de más satura innecesariamente el sistema especializado con problemas que la atención primaria podría resolver; referir de menos retrasa el acceso a una evaluación especializada que el paciente realmente necesita -decidir correctamente entre ambos extremos es una habilidad clínica central.',
  no:{
    1:'Tienen consecuencias claramente distintas: saturación innecesaria en un caso, retraso de atención necesaria en el otro.',
    2:'Referir de más sí tiene una consecuencia negativa real: la saturación innecesaria de recursos especializados escasos.',
    3:'Referir de menos sí tiene una consecuencia negativa real: el retraso en el acceso a una evaluación especializada necesaria.'
  },
  trampa:'Asumir que uno de los dos extremos (referir de más o de menos) siempre es seguro o sin consecuencias, sin reconocer el costo real de ambos.',
  obj:'Explicar las consecuencias respectivas de referir de más y de referir de menos a un especialista.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 10.',
  tags:['referir de más','referir de menos','balance clínico']
},
{
  id:'U10-MF-Q42', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Cuidados paliativos en atención primaria', sub:'Control de síntomas, no abandono del tratamiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es un error interpretar los cuidados paliativos como un "abandono" del tratamiento médico activo?',
  ops:[
    'Porque su enfoque está centrado en el control de síntomas y el bienestar integral del paciente, no en dejar de atenderlo médicamente',
    'Los cuidados paliativos, de hecho, significan literalmente dejar de atender al paciente médicamente de cualquier forma', 'El control de síntomas nunca forma parte real de los cuidados paliativos', 'Los cuidados paliativos solo se aplican en las últimas horas de vida del paciente, nunca antes'],
  ok:0,
  clave:'Su enfoque está centrado en el control de síntomas y el bienestar integral del paciente, no en dejar de atenderlo médicamente.',
  exp:'Los cuidados paliativos buscan aliviar el sufrimiento y mejorar la calidad de vida de un paciente con una enfermedad avanzada, sin necesariamente buscar ya la curación -un enfoque centrado en el control de síntomas y en el bienestar integral del paciente, no un "abandono" del tratamiento médico activo, como a veces se malinterpreta.',
  no:{
    1:'Es precisamente lo contrario: los cuidados paliativos implican una atención médica activa centrada en el control de síntomas, no un abandono.',
    2:'El control de síntomas es precisamente el núcleo central del enfoque de los cuidados paliativos, no algo ausente de ellos.',
    3:'Los cuidados paliativos pueden integrarse gradualmente incluso antes de la fase más avanzada de la enfermedad, no solo en las últimas horas.'
  },
  trampa:'Confundir los cuidados paliativos con el abandono del tratamiento médico, en vez de reconocerlos como una forma activa de atención centrada en síntomas y bienestar.',
  obj:'Explicar por qué los cuidados paliativos no equivalen a un abandono del tratamiento médico activo.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 16.',
  tags:['cuidados paliativos','control de síntomas','no abandono del tratamiento']
},
{
  id:'U10-MF-Q43', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Cuidados paliativos en atención primaria', sub:'Ventaja del médico de familia en el fin de vida',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ventaja tiene el médico de familia, gracias a la relación longitudinal ya construida, para acompañar a un paciente terminal en su hogar?',
  ops:[
    'Puede ofrecer un acompañamiento que integra tanto el manejo clínico de síntomas como el apoyo emocional al paciente y a su familia',
    'El médico de familia no tiene ninguna ventaja particular sobre un profesional que recién conoce al paciente en esta etapa', 'La relación longitudinal ya construida no aporta ningún valor real al acompañamiento en el fin de vida', 'Solo un especialista en cuidados paliativos, nunca el médico de familia, puede acompañar adecuadamente a un paciente terminal'],
  ok:0,
  clave:'Puede ofrecer un acompañamiento que integra tanto el manejo clínico de síntomas como el apoyo emocional al paciente y a su familia.',
  exp:'El médico de familia, gracias a la relación longitudinal ya construida a lo largo de años, puede ofrecer un acompañamiento que integra tanto el manejo clínico de síntomas como el apoyo emocional al paciente y a su familia, en un paciente terminal que prefiere permanecer en su hogar.',
  no:{
    1:'El médico de familia sí tiene una ventaja particular, precisamente por el conocimiento acumulado de la relación longitudinal previa.',
    2:'La relación longitudinal sí aporta un valor real, permitiendo un acompañamiento más integral que el de alguien sin ese conocimiento previo.',
    3:'El médico de familia puede acompañar directamente, coordinando con un equipo especializado cuando el caso lo requiere, no siendo excluido de este rol.'
  },
  trampa:'Subestimar la ventaja real que aporta la relación longitudinal previa del médico de familia para el acompañamiento en el fin de vida.',
  obj:'Explicar la ventaja del médico de familia, gracias a la continuidad del cuidado, para acompañar a un paciente terminal.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 16.',
  tags:['relación longitudinal','acompañamiento en fin de vida','médico de familia']
},
{
  id:'U10-MF-Q44', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Cuidados paliativos en atención primaria', sub:'Comunicación honesta como parte del cuidado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las conversaciones honestas sobre pronóstico y preferencias son parte central de un buen cuidado paliativo, no un tema a evitar?',
  ops:[
    'Porque permiten ajustar el plan de manejo según cómo evolucionan tanto la condición clínica como las preferencias del paciente, que pueden cambiar conforme la enfermedad avanza',
    'Las conversaciones sobre pronóstico y preferencias nunca deberían tener lugar en el contexto de los cuidados paliativos', 'El pronóstico y las preferencias del paciente son temas irrelevantes para el manejo de un paciente en cuidados paliativos', 'Evitar estas conversaciones siempre es la conducta más adecuada para no generar angustia en el paciente'],
  ok:0,
  clave:'Permiten ajustar el plan de manejo según cómo evolucionan tanto la condición clínica como las preferencias del paciente, que pueden cambiar conforme la enfermedad avanza.',
  exp:'Estas conversaciones, sostenidas y repetidas a lo largo del tiempo gracias a la continuidad del cuidado, permiten ajustar el plan de manejo según cómo evolucionan tanto la condición clínica como las preferencias del paciente, que pueden cambiar conforme la enfermedad avanza.',
  no:{
    1:'Estas conversaciones sí deberían tener lugar, siendo parte central de un cuidado paliativo bien hecho, no un tema a evitar.',
    2:'El pronóstico y las preferencias del paciente son información central y relevante para ajustar el plan de manejo paliativo.',
    3:'Evitar estas conversaciones no es la conducta más adecuada; retrasarlas puede impedir un plan de manejo alineado con las preferencias reales del paciente.'
  },
  trampa:'Asumir que evitar hablar de pronóstico o preferencias protege al paciente, cuando en realidad estas conversaciones son centrales para un buen cuidado paliativo.',
  obj:'Explicar por qué las conversaciones honestas sobre pronóstico y preferencias son centrales en los cuidados paliativos.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 16.',
  tags:['comunicación honesta','pronóstico','preferencias del paciente']
},
{
  id:'U10-MF-Q45', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'Cuidados paliativos en atención primaria', sub:'Redefinir qué significa "hacer algo útil"',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué significa la idea de que los cuidados paliativos "redefinen qué significa hacer algo útil" por un paciente?',
  ops:[
    'Que aliviar el sufrimiento y acompañar al paciente en esa etapa específica de su enfermedad es tan valioso como cualquier intervención curativa previa',
    'Esta idea significa que, en cuidados paliativos, ya no hay absolutamente nada útil que un médico pueda hacer por el paciente', 'Redefinir qué es útil implica abandonar cualquier forma de atención médica activa hacia el paciente', 'Esta frase no tiene ninguna relación real con el enfoque de los cuidados paliativos'],
  ok:0,
  clave:'Aliviar el sufrimiento y acompañar al paciente en esa etapa específica de su enfermedad es tan valioso como cualquier intervención curativa previa.',
  exp:'Los cuidados paliativos no equivalen a "ya no hay nada que hacer"; equivalen a redefinir qué significa "hacer algo útil" por ese paciente en esa etapa específica de su enfermedad -aliviar el sufrimiento y acompañar tiene un valor tan real como cualquier intervención curativa previa.',
  no:{
    1:'Es precisamente lo contrario: sí hay mucho útil que hacer, redefinido como control de síntomas y acompañamiento, no ausencia de acción.',
    2:'Redefinir qué es útil no implica abandonar la atención activa; implica reorientar esa atención hacia el alivio y el acompañamiento.',
    3:'Esta frase tiene una relación directa y central con el enfoque de los cuidados paliativos, resumiendo su propósito real.'
  },
  trampa:'Confundir la redefinición de "hacer algo útil" en cuidados paliativos con la ausencia total de acción médica o abandono del paciente.',
  obj:'Explicar el significado de redefinir "hacer algo útil" en el contexto de los cuidados paliativos.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 16.',
  tags:['redefinir lo útil','cuidados paliativos','valor del acompañamiento']
},
{
  id:'U10-MF-Q46', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'El médico de familia y la comunidad', sub:'El consultorio como observatorio informal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se dice que el consultorio de un médico de familia funciona como una especie de "observatorio informal" de la salud comunitaria?',
  ops:[
    'Porque atender a la misma población durante años desarrolla un conocimiento privilegiado de los patrones de salud de esa comunidad, construido desde la experiencia clínica cotidiana',
    'El consultorio de un médico de familia nunca aporta ningún conocimiento real sobre los patrones de salud de la comunidad que atiende', 'Este conocimiento solo puede obtenerse mediante un estudio formal externo, nunca a través de la práctica clínica cotidiana', 'El médico de familia nunca puede notar patrones repetidos entre los pacientes que atiende a lo largo del tiempo'],
  ok:0,
  clave:'Atender a la misma población durante años desarrolla un conocimiento privilegiado de los patrones de salud de esa comunidad, construido desde la experiencia clínica cotidiana.',
  exp:'Un médico de familia que atiende a la misma población durante años desarrolla, casi sin proponérselo, un conocimiento privilegiado de los patrones de salud de esa comunidad, construido desde la experiencia acumulada de la práctica clínica cotidiana, no desde un estudio formal externo.',
  no:{
    1:'El consultorio sí aporta un conocimiento real y valioso sobre los patrones de salud de la comunidad atendida, acumulado con el tiempo.',
    2:'Este conocimiento se construye precisamente desde la práctica clínica cotidiana, sin necesitar un estudio formal externo para ser válido.',
    3:'El médico de familia sí puede, y con frecuencia lo hace, notar patrones repetidos entre sus pacientes a lo largo del tiempo.'
  },
  trampa:'Subestimar el valor del conocimiento acumulado por la práctica clínica cotidiana como fuente informal pero real de información comunitaria.',
  obj:'Explicar por qué el consultorio de medicina familiar funciona como un observatorio informal de la salud comunitaria.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 17.',
  tags:['observatorio informal','conocimiento acumulado','práctica clínica cotidiana']
},
{
  id:'U10-MF-Q47', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'El médico de familia y la comunidad', sub:'Abogacía por el paciente más allá de la consulta',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la abogacía por el paciente, en el contexto del rol comunitario del médico de familia?',
  ops:[
    'Representar activamente los intereses de sus pacientes más allá de la consulta individual, por ejemplo señalando una barrera de acceso que afecta sistemáticamente a su población de pacientes',
    'La abogacía por el paciente se limita exclusivamente a defender los intereses de un único paciente dentro de una sola consulta', 'Este concepto no tiene ninguna relación real con las barreras de acceso a servicios de salud de la comunidad', 'La abogacía por el paciente nunca implica dirigirse a instituciones o autoridades locales sobre problemas estructurales'],
  ok:0,
  clave:'Representar activamente los intereses de sus pacientes más allá de la consulta individual, por ejemplo señalando una barrera de acceso que afecta sistemáticamente a su población de pacientes.',
  exp:'La abogacía por el paciente es el rol del médico de familia de representar activamente los intereses de sus pacientes más allá de la consulta individual -por ejemplo, señalando ante instituciones o autoridades locales una barrera de acceso a servicios de salud que afecta sistemáticamente a su población de pacientes.',
  no:{
    1:'Va más allá de una única consulta individual; implica representar intereses compartidos de toda su población de pacientes.',
    2:'Esta abogacía tiene una relación directa con las barreras de acceso estructurales que afectan a la comunidad de pacientes atendida.',
    3:'La abogacía sí puede implicar dirigirse activamente a instituciones o autoridades locales sobre problemas estructurales identificados.'
  },
  trampa:'Limitar el concepto de abogacía por el paciente a la defensa individual dentro de una sola consulta, sin reconocer su alcance comunitario más amplio.',
  obj:'Explicar el concepto de abogacía por el paciente como rol comunitario del médico de familia.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 17.',
  tags:['abogacía por el paciente','barrera de acceso','rol comunitario']
},
{
  id:'U10-MF-Q48', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'El médico de familia y la comunidad', sub:'Diferencia entre diagnóstico comunitario formal y práctica cotidiana',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué se diferencia el conocimiento comunitario que surge de la práctica clínica cotidiana del médico de familia respecto a un diagnóstico comunitario formal?',
  ops:[
    'El diagnóstico comunitario formal busca sistemáticamente los problemas de una comunidad; la abogacía del médico de familia surge orgánicamente de notar patrones repetidos entre los pacientes que atiende',
    'Ambos procesos son exactamente idénticos, sin ninguna diferencia real en su metodología o alcance', 'El conocimiento que surge de la práctica clínica cotidiana nunca tiene ninguna relación real con el diagnóstico comunitario formal', 'El diagnóstico comunitario formal siempre es menos preciso que el conocimiento informal acumulado por un médico de familia'],
  ok:0,
  clave:'El diagnóstico comunitario formal busca sistemáticamente los problemas de una comunidad; la abogacía del médico de familia surge orgánicamente de notar patrones repetidos.',
  exp:'Este rol conecta directamente con la salud comunitaria ya vista en el pensum: mientras que un diagnóstico comunitario formal busca sistemáticamente los problemas de una comunidad, la abogacía del médico de familia surge orgánicamente de la práctica clínica cotidiana, al notar patrones repetidos entre los pacientes que atiende.',
  no:{
    1:'Son procesos distintos en su metodología: uno sistemático y deliberado, el otro orgánico y derivado de la práctica cotidiana.',
    2:'El conocimiento de la práctica cotidiana sí se conecta directamente con la lógica del diagnóstico comunitario, aunque surja de forma distinta.',
    3:'Ninguno de los dos procesos es categóricamente "más preciso" que el otro; son complementarios, con metodologías y alcances distintos.'
  },
  trampa:'Asumir que el diagnóstico comunitario formal y el conocimiento informal del médico de familia son idénticos o mutuamente excluyentes en precisión.',
  obj:'Distinguir el diagnóstico comunitario formal del conocimiento comunitario que surge de la práctica clínica cotidiana del médico de familia.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 17.',
  tags:['diagnóstico comunitario formal','conocimiento orgánico','práctica cotidiana']
},
{
  id:'U10-MF-Q49', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'El médico de familia y la comunidad', sub:'Ampliación progresiva del círculo de atención',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo describe este tema la ampliación progresiva del enfoque de la medicina familiar a lo largo de todo el bloque?',
  ops:[
    'Empezó con la atención centrada en la persona individual, se amplió hacia la familia como unidad de atención, y termina reconociendo a la comunidad más amplia en la que ambas existen',
    'El enfoque de la medicina familiar se mantiene exactamente igual y sin ninguna ampliación a lo largo de todo el bloque estudiado', 'La medicina familiar se enfoca exclusivamente en la persona individual, sin ninguna consideración real de la familia ni la comunidad', 'Este tema no tiene ninguna relación con el hilo conductor desarrollado en los demás temas del bloque de Medicina Familiar'],
  ok:0,
  clave:'Empezó con la atención centrada en la persona individual, se amplió hacia la familia como unidad de atención, y termina reconociendo a la comunidad más amplia.',
  exp:'Este tema cierra el bloque de Medicina Familiar retomando, en su punto más amplio, el hilo conductor que atravesó toda la materia: empezó con la atención centrada en la persona individual, se amplió hacia la familia como unidad de atención, y termina reconociendo que ni la persona ni la familia existen aisladas de la comunidad más amplia en la que viven.',
  no:{
    1:'El enfoque sí se amplía progresivamente a lo largo del bloque, desde el individuo hasta la comunidad, no permanece estático.',
    2:'La medicina familiar considera tanto a la familia como a la comunidad, no se limita exclusivamente al individuo aislado.',
    3:'Este tema tiene una relación directa y de cierre con el hilo conductor desarrollado a lo largo de todo el bloque completo.'
  },
  trampa:'No reconocer la ampliación progresiva del círculo de atención (persona, familia, comunidad) como el hilo conductor de todo el bloque de Medicina Familiar.',
  obj:'Explicar la ampliación progresiva del círculo de atención de la medicina familiar a lo largo del bloque completo.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 17.',
  tags:['ampliación progresiva','persona familia comunidad','hilo conductor del bloque']
},
{
  id:'U10-MF-Q50', programa:'unirm', cuatri:10,
  esp:'Medicina Familiar', tema:'El médico de familia y la comunidad', sub:'Conexión con determinantes sociales y salud comunitaria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué otras materias ya vistas en el pensum conecta directamente el enfoque comunitario del médico de familia?',
  ops:[
    'Con la salud comunitaria y los determinantes sociales, retomando conceptos ya vistos previamente en el pensum de UNIRMIA',
    'Este enfoque comunitario del médico de familia no tiene ninguna relación real con ninguna otra materia ya vista antes en el pensum', 'Solo se conecta con la farmacología, sin ninguna relación con la salud comunitaria o los determinantes sociales', 'El enfoque comunitario de la medicina familiar es un concepto completamente aislado y nuevo, sin ninguna base previa'],
  ok:0,
  clave:'Con la salud comunitaria y los determinantes sociales, retomando conceptos ya vistos previamente en el pensum de UNIRMIA.',
  exp:'Esta ampliación progresiva del círculo de atención -persona, familia, comunidad- no es un ejercicio teórico: es la lógica práctica que distingue a la medicina familiar de una atención puramente individual, y la conecta directamente con la salud comunitaria y los determinantes sociales que atraviesan todo el pensum de UNIRMIA.',
  no:{
    1:'Sí existe una conexión real y explícita con la salud comunitaria y los determinantes sociales ya estudiados previamente.',
    2:'La conexión con la farmacología no es la relación central de este tema; la relación principal es con la salud comunitaria y los determinantes sociales.',
    3:'Este enfoque comunitario no es un concepto aislado; se construye sobre bases conceptuales ya desarrolladas en materias previas del pensum.'
  },
  trampa:'No reconocer la conexión explícita entre el enfoque comunitario del médico de familia y los conceptos de salud comunitaria y determinantes sociales ya vistos antes.',
  obj:'Explicar la conexión entre el enfoque comunitario de la medicina familiar y la salud comunitaria/determinantes sociales ya vistos en el pensum.',
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 17.',
  tags:['conexión con el pensum','salud comunitaria','determinantes sociales']
}

]);
