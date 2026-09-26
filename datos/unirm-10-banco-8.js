/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 10, TANDA DE SALUD MENTAL Y SOCIEDAD (2/2)
   Continua unirm-10-banco-7.js. Prefijo U10-SMS-. Esta parte
   cubre salud mental comunitaria, evaluacion del riesgo suicida,
   violencia y salud mental, salud mental infantil/adolescente,
   psicofarmacologia aplicada y modelos de atencion (temas 7-12).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U10-SMS-Q26', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Salud mental comunitaria', sub:'Qué implica realmente la desinstitucionalización',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué significa realmente la desinstitucionalización en salud mental, más allá de "eliminar la hospitalización psiquiátrica"?',
  ops:[
    'La hospitalización deja de ser el eje central y por defecto del sistema, convirtiéndose en un recurso reservado para momentos específicos de crisis, dentro de un sistema centrado en la atención comunitaria continua',
    'La desinstitucionalización significa eliminar por completo cualquier posibilidad de hospitalización psiquiátrica, sin ninguna excepción', 'Este proceso no tiene ninguna relación real con el desarrollo de tratamientos farmacológicos que permiten manejo ambulatorio', 'La desinstitucionalización implica que ningún paciente con trastorno mental debería recibir atención especializada nunca'],
  ok:0,
  clave:'La hospitalización deja de ser el eje central por defecto, convirtiéndose en un recurso reservado para crisis, dentro de un sistema centrado en la atención comunitaria continua.',
  exp:'Este proceso no significa eliminar por completo la hospitalización psiquiátrica cuando es clínicamente necesaria; significa que la hospitalización deja de ser el eje central y por defecto del sistema, convirtiéndose en un recurso reservado para momentos específicos de crisis, dentro de un sistema centrado principalmente en la atención comunitaria continua.',
  no:{
    1:'La hospitalización sigue existiendo como recurso para crisis específicas; no se elimina por completo, solo deja de ser el eje central.',
    2:'El desarrollo de tratamientos farmacológicos sí tuvo una relación directa con el impulso hacia un manejo ambulatorio más viable.',
    3:'La desinstitucionalización no excluye la atención especializada; la reorienta hacia un modelo comunitario, no la elimina.'
  },
  trampa:'Confundir la desinstitucionalización con la eliminación total de la hospitalización psiquiátrica, en vez de reconocerla como un cambio de eje central del sistema.',
  obj:'Explicar qué implica realmente el proceso de desinstitucionalización en salud mental.',
  ref:'OMS, Informe mundial sobre salud mental.',
  tags:['desinstitucionalización','hospitalización como recurso de crisis','modelo comunitario']
},
{
  id:'U10-SMS-Q27', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Salud mental comunitaria', sub:'Integración con niveles de atención',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se conecta el modelo comunitario de salud mental con la lógica de niveles de atención ya vista en el pensum?',
  ops:[
    'Buena parte del manejo de salud mental puede y debe ocurrir en el nivel más cercano y accesible, con referencia a niveles más especializados solo cuando el caso lo requiere',
    'El modelo comunitario de salud mental no tiene ninguna relación real con la lógica de niveles de atención ya vista antes', 'Cualquier problema de salud mental, sin excepción, siempre requiere automáticamente atención de un especialista o institución psiquiátrica', 'La referencia a niveles más especializados nunca es necesaria dentro del modelo comunitario de salud mental'],
  ok:0,
  clave:'Buena parte del manejo de salud mental puede y debe ocurrir en el nivel más cercano y accesible, con referencia a niveles más especializados solo cuando el caso lo requiere.',
  exp:'El modelo comunitario de salud mental integra la atención dentro de la atención primaria y los servicios comunitarios, retomando directamente la lógica de niveles de atención: en vez de que cualquier problema requiera automáticamente un especialista, buena parte del manejo puede y debe ocurrir en el nivel más cercano y accesible.',
  no:{
    1:'Sí existe una conexión directa: el modelo comunitario aplica la misma lógica de niveles de atención ya vista en el pensum.',
    2:'No cualquier problema de salud mental requiere automáticamente un especialista; muchos casos se manejan en el nivel más accesible.',
    3:'La referencia a niveles especializados sí sigue siendo necesaria en casos específicos, dentro del modelo comunitario integrado.'
  },
  trampa:'Asumir que el modelo comunitario de salud mental implica que ningún caso requiere referencia especializada, o desconocer su conexión con la lógica de niveles.',
  obj:'Explicar la conexión entre el modelo comunitario de salud mental y la lógica de niveles de atención.',
  ref:'OMS, Informe mundial sobre salud mental.',
  tags:['niveles de atención','modelo comunitario','referencia especializada']
},
{
  id:'U10-SMS-Q28', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Salud mental comunitaria', sub:'Riesgo de desinstitucionalización sin infraestructura suficiente',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un país reduce significativamente el número de camas psiquiátricas hospitalarias, pero no invierte proporcionalmente en servicios comunitarios de salud mental (equipos accesibles, vivienda con apoyo, rehabilitación psicosocial).',
  enunciado:'¿Qué riesgo real enfrenta este país con esta decisión?',
  ops:[
    'Muchas personas pueden quedar sin ningún nivel de cuidado adecuado, ni institucional ni comunitario, un riesgo real documentado en varios países',
    'Esta decisión siempre mejora automáticamente la atención de salud mental, sin ningún riesgo real asociado', 'Reducir camas psiquiátricas nunca tiene ninguna consecuencia negativa, sin importar la inversión comunitaria paralela', 'Este escenario no tiene ninguna relación real con casos documentados en otros países'],
  ok:0,
  clave:'Muchas personas pueden quedar sin ningún nivel de cuidado adecuado, ni institucional ni comunitario, un riesgo real documentado en varios países.',
  exp:'La desinstitucionalización, cuando no se acompaña de una inversión suficiente en servicios comunitarios reales, puede dejar a muchas personas sin ningún nivel de cuidado adecuado, ni institucional ni comunitario, un riesgo real documentado en varios países que redujeron camas psiquiátricas sin invertir proporcionalmente en la infraestructura comunitaria.',
  no:{
    1:'Esta decisión sin inversión paralela representa un riesgo real documentado, no una mejora automática garantizada.',
    2:'Reducir camas sin construir la alternativa comunitaria sí tiene consecuencias negativas reales y documentadas.',
    3:'Este escenario sí tiene relación con casos reales documentados en varios países que enfrentaron este mismo problema.'
  },
  trampa:'Asumir que reducir camas psiquiátricas siempre es una mejora, sin considerar el riesgo real de dejar un vacío de atención sin infraestructura comunitaria suficiente.',
  obj:'Explicar el riesgo real de una desinstitucionalización sin inversión proporcional en infraestructura comunitaria.',
  ref:'OMS, Informe mundial sobre salud mental.',
  tags:['riesgo de desinstitucionalización','infraestructura comunitaria insuficiente','vacío de atención']
},
{
  id:'U10-SMS-Q29', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Salud mental comunitaria', sub:'Incorporación activa de familia y comunidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo incorpora el modelo comunitario de salud mental a la familia y la comunidad en el proceso de recuperación?',
  ops:[
    'Como parte activa del proceso de recuperación, en vez de aislar a la persona con un trastorno mental del entorno donde normalmente vive',
    'El modelo comunitario de salud mental siempre busca aislar completamente al paciente de su familia y comunidad durante el tratamiento', 'La familia y la comunidad nunca deberían tener ningún rol real en el proceso de recuperación de un paciente', 'Este modelo no tiene ninguna relación real con el apoyo familiar ya visto como recurso pronóstico en Medicina Familiar'],
  ok:0,
  clave:'Como parte activa del proceso de recuperación, en vez de aislar a la persona con un trastorno mental del entorno donde normalmente vive.',
  exp:'Este modelo incorpora activamente a la comunidad y a la familia como parte del proceso de recuperación, en vez de aislar a la persona con un trastorno mental del entorno donde normalmente vive, retomando directamente el apoyo familiar y comunitario ya visto como recurso pronóstico en Medicina Familiar.',
  no:{
    1:'Es precisamente lo contrario: el modelo busca INTEGRAR, no aislar, a la persona de su familia y comunidad durante la recuperación.',
    2:'La familia y la comunidad sí tienen un rol activo y valioso reconocido en el proceso de recuperación dentro de este modelo.',
    3:'Este modelo sí tiene una relación directa con el apoyo familiar ya visto como recurso pronóstico relevante en Medicina Familiar.'
  },
  trampa:'Asumir que el modelo comunitario de salud mental busca aislar al paciente de su entorno familiar, en vez de integrarlo activamente en la recuperación.',
  obj:'Explicar cómo el modelo comunitario de salud mental incorpora a la familia y la comunidad en la recuperación.',
  ref:'OMS, Informe mundial sobre salud mental.',
  tags:['incorporación familiar','proceso de recuperación','modelo comunitario']
},
{
  id:'U10-SMS-Q30', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Evaluación del riesgo suicida', sub:'Preguntar directamente no aumenta el riesgo',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué muestra la evidencia disponible sobre preguntar directamente a un paciente sobre ideación suicida?',
  ops:[
    'Preguntar directamente no aumenta el riesgo, y con frecuencia es un alivio para el paciente poder hablar abiertamente de algo que ya estaba pensando en silencio',
    'Preguntar directamente sobre ideación suicida siempre "planta la idea" en la mente del paciente y aumenta su riesgo real', 'La evidencia disponible es completamente inconclusa sobre el efecto de preguntar directamente sobre ideación suicida', 'Evitar la pregunta por incomodidad del profesional nunca tiene ningún costo real para la detección del riesgo'],
  ok:0,
  clave:'Preguntar directamente no aumenta el riesgo, y con frecuencia es un alivio para el paciente poder hablar abiertamente de algo que ya estaba pensando en silencio.',
  exp:'La evidencia disponible contradice de forma consistente el mito de que preguntar directamente "plantaría la idea": preguntar directamente no aumenta el riesgo, y con frecuencia es un alivio para el paciente poder hablar abiertamente de algo que ya estaba pensando en silencio.',
  no:{
    1:'Es precisamente lo contrario: la evidencia contradice consistentemente esta creencia mítica sobre "plantar la idea".',
    2:'La evidencia disponible es consistente, no inconclusa, mostrando que preguntar directamente no aumenta el riesgo.',
    3:'Evitar la pregunta sí tiene un costo real: una ideación no explorada no se detecta, perdiendo una oportunidad de intervención.'
  },
  trampa:'Creer el mito de que preguntar directamente sobre ideación suicida "planta la idea" y aumenta el riesgo, contradiciendo la evidencia disponible.',
  obj:'Explicar lo que muestra la evidencia sobre preguntar directamente por ideación suicida.',
  ref:'OMS, Prevención del suicidio: un imperativo global.',
  tags:['ideación suicida','mito de preguntar directamente','evidencia disponible']
},
{
  id:'U10-SMS-Q31', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Evaluación del riesgo suicida', sub:'Elementos de una evaluación estructurada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué elementos, más allá de confirmar si existe ideación, explora una evaluación del riesgo suicida bien estructurada?',
  ops:[
    'La especificidad del plan, el acceso real al método, la intención de llevarlo a cabo, y los factores de riesgo y protección presentes',
    'Una evaluación del riesgo suicida se limita exclusivamente a confirmar con un sí o no si existe ideación suicida', 'Los factores de riesgo y protección nunca deberían considerarse al evaluar el riesgo suicida de un paciente', 'El acceso real a un método específico nunca tiene ninguna relación con el nivel real de riesgo suicida'],
  ok:0,
  clave:'La especificidad del plan, el acceso real al método, la intención de llevarlo a cabo, y los factores de riesgo y protección presentes.',
  exp:'La evaluación del riesgo suicida explora la especificidad del plan (si tiene un método concreto en mente), el acceso real a ese método, la intención (qué tan decidido está), y los factores de riesgo y protección presentes -una evaluación estructurada, no una simple pregunta de sí o no.',
  no:{
    1:'Va mucho más allá de un simple sí o no; incluye múltiples dimensiones específicas que determinan el nivel real de riesgo.',
    2:'Los factores de riesgo y protección sí deben considerarse activamente, siendo parte central de una evaluación estructurada completa.',
    3:'El acceso real a un método específico sí tiene una relación directa con el nivel de riesgo, siendo un elemento central a evaluar.'
  },
  trampa:'Reducir la evaluación del riesgo suicida a una simple confirmación de sí o no, sin explorar las dimensiones específicas que determinan su gravedad real.',
  obj:'Identificar los elementos clave de una evaluación estructurada del riesgo suicida.',
  ref:'OMS, Prevención del suicidio: un imperativo global.',
  tags:['evaluación estructurada','especificidad del plan','factores de riesgo y protección']
},
{
  id:'U10-SMS-Q32', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Evaluación del riesgo suicida', sub:'Distinguir niveles de riesgo',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Dos pacientes reportan pensamientos relacionados con la muerte: uno describe una ideación pasiva y vaga ("a veces pienso que sería más fácil no despertar"), y el otro describe un plan específico con acceso inmediato a un método letal.',
  enunciado:'¿Por qué sería un error clínico tratar a ambos pacientes con el mismo nivel de urgencia?',
  ops:[
    'Porque tienen una urgencia clínica claramente distinta según la especificidad del plan y el acceso al método, y tratarlos igual no refleja el riesgo real de cada uno',
    'Ambos pacientes tienen exactamente el mismo nivel de riesgo y urgencia clínica, sin ninguna diferencia real entre ellos', 'La especificidad del plan y el acceso al método nunca deberían influir en el nivel de urgencia asignado a cada caso', 'Solo el primer paciente, con ideación pasiva, representa un riesgo clínico real que merece atención'],
  ok:0,
  clave:'Tienen una urgencia clínica claramente distinta según la especificidad del plan y el acceso al método, y tratarlos igual no refleja el riesgo real de cada uno.',
  exp:'Esta evaluación más completa permite distinguir niveles de riesgo muy distintos entre sí: una ideación pasiva y vaga tiene una urgencia clínica distinta a un plan específico con acceso inmediato a un método letal -tratarlas con el mismo nivel de urgencia, en cualquiera de los dos extremos, sería un error clínico.',
  no:{
    1:'Tienen niveles de riesgo claramente distintos, determinados precisamente por la especificidad del plan y el acceso al método.',
    2:'La especificidad del plan y el acceso al método sí son factores centrales que determinan el nivel de urgencia clínica apropiado.',
    3:'Ambos pacientes representan un riesgo real que merece atención, aunque con niveles de urgencia clínica distintos entre sí.'
  },
  trampa:'Tratar toda ideación relacionada con la muerte con el mismo nivel de urgencia, sin distinguir la especificidad del plan y el acceso real al método.',
  obj:'Aplicar el criterio de distinguir niveles de riesgo suicida según la especificidad del plan y el acceso al método.',
  ref:'OMS, Prevención del suicidio: un imperativo global.',
  tags:['niveles de riesgo','ideación pasiva vs. plan específico','urgencia clínica diferenciada']
},
{
  id:'U10-SMS-Q33', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Evaluación del riesgo suicida', sub:'Valor del plan de seguridad frente a "prometer no hacerse daño"',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un plan de seguridad tiene más valor clínico que simplemente pedirle al paciente que "prometa no hacerse daño"?',
  ops:[
    'Es una herramienta concreta y colaborativa que identifica señales de alarma, estrategias de afrontamiento, contactos de apoyo, y pasos concretos a seguir, a diferencia de una promesa con poco valor clínico real',
    'Un plan de seguridad y pedir una promesa de no hacerse daño tienen exactamente el mismo valor clínico, sin ninguna diferencia real', 'Pedir una promesa de no hacerse daño siempre es más efectivo que desarrollar un plan de seguridad estructurado', 'Un plan de seguridad nunca incluye ninguna consideración sobre restringir el acceso a medios letales específicos'],
  ok:0,
  clave:'Es una herramienta concreta y colaborativa que identifica señales de alarma, estrategias de afrontamiento, contactos de apoyo, y pasos concretos a seguir, a diferencia de una promesa con poco valor clínico real.',
  exp:'Un plan de seguridad es una herramienta concreta y colaborativa que identifica señales de alarma personales, estrategias de afrontamiento, contactos de apoyo disponibles, y pasos concretos a seguir -a diferencia de simplemente pedirle al paciente que "prometa no hacerse daño", que tiene poco valor clínico real por sí solo.',
  no:{
    1:'Tienen un valor clínico claramente distinto: el plan de seguridad es estructurado y accionable, la promesa tiene poco valor real.',
    2:'Es precisamente lo contrario: el plan de seguridad estructurado es más efectivo que simplemente pedir una promesa verbal.',
    3:'Un plan de seguridad sí incluye, cuando es relevante, restringir el acceso a medios letales específicos como parte de la intervención.'
  },
  trampa:'Asumir que pedir una promesa verbal de no hacerse daño tiene el mismo valor clínico que un plan de seguridad estructurado y accionable.',
  obj:'Explicar el valor clínico superior de un plan de seguridad frente a simplemente pedir una promesa de no hacerse daño.',
  ref:'OMS, Prevención del suicidio: un imperativo global.',
  tags:['plan de seguridad','promesa verbal','herramienta estructurada']
},
{
  id:'U10-SMS-Q34', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Evaluación del riesgo suicida', sub:'Restricción de acceso a medios letales',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué evidencia respalda la restricción temporal de acceso a medios letales específicos como parte de un plan de seguridad?',
  ops:[
    'Existe evidencia real de que reduce el riesgo, al introducir una barrera práctica en el momento de mayor vulnerabilidad del paciente',
    'No existe ninguna evidencia real que respalde la restricción de acceso a medios letales como intervención de prevención', 'Restringir el acceso a medios letales nunca tiene ningún efecto real sobre el riesgo suicida de una persona', 'Esta intervención es completamente inútil, ya que la persona siempre encontrará otro método si realmente lo desea'],
  ok:0,
  clave:'Existe evidencia real de que reduce el riesgo, al introducir una barrera práctica en el momento de mayor vulnerabilidad del paciente.',
  exp:'Este plan también incluye, cuando es relevante, restringir el acceso a medios letales específicos (por ejemplo, retirar temporalmente armas de fuego o medicamentos en cantidad peligrosa) -una intervención simple pero con evidencia real de reducir el riesgo, al introducir una barrera práctica en el momento de mayor vulnerabilidad.',
  no:{
    1:'Sí existe evidencia real que respalda esta intervención como efectiva para reducir el riesgo suicida en el momento crítico.',
    2:'Esta intervención sí tiene un efecto real documentado sobre el riesgo suicida, al menos en el momento de mayor vulnerabilidad.',
    3:'La evidencia contradice esta suposición: la barrera práctica temporal sí reduce el riesgo real, aunque no elimine toda posibilidad.'
  },
  trampa:'Asumir que restringir el acceso a medios letales es inútil porque la persona "siempre encontrará otra forma", ignorando la evidencia real sobre esta intervención.',
  obj:'Explicar la evidencia que respalda la restricción de acceso a medios letales como intervención de prevención del suicidio.',
  ref:'OMS, Prevención del suicidio: un imperativo global.',
  tags:['restricción de medios letales','barrera práctica','momento de vulnerabilidad']
},
{
  id:'U10-SMS-Q35', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Violencia y salud mental', sub:'Violencia como causa de trastorno mental',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué preguntar por posible exposición a violencia exige sensibilidad y un entorno de confidencialidad, según lo visto en este tema?',
  ops:[
    'Porque muchas víctimas no revelan espontáneamente esta información por miedo, vergüenza, o normalización de la situación que viven',
    'Preguntar por violencia nunca requiere ninguna consideración especial de sensibilidad o confidencialidad por parte del profesional', 'Las víctimas de violencia siempre revelan espontáneamente su situación sin necesitar que se les pregunte directamente', 'La confidencialidad médica no tiene ninguna relación real con la exploración de posible violencia en la consulta'],
  ok:0,
  clave:'Muchas víctimas no revelan espontáneamente esta información por miedo, vergüenza, o normalización de la situación que viven.',
  exp:'Reconocer la violencia como posible causa subyacente exige preguntar de forma directa y con sensibilidad, en un entorno de confidencialidad y seguridad, porque muchas víctimas no revelan espontáneamente esta información por miedo, vergüenza, o normalización de la situación que viven.',
  no:{
    1:'Sí requiere consideración especial, dada la naturaleza sensible de este tipo de exposición y las barreras que enfrentan las víctimas.',
    2:'Es precisamente lo contrario: muchas víctimas NO revelan espontáneamente, requiriendo que el profesional pregunte de forma directa.',
    3:'La confidencialidad médica sí tiene una relación directa y relevante con la exploración de posible violencia en la consulta.'
  },
  trampa:'Asumir que las víctimas de violencia revelan espontáneamente su situación, sin reconocer las barreras reales que dificultan esa revelación.',
  obj:'Explicar por qué explorar posible exposición a violencia exige sensibilidad y confidencialidad clínica.',
  ref:'OMS, Informe mundial sobre la violencia y la salud.',
  tags:['exploración de violencia','sensibilidad clínica','confidencialidad','violencia intrafamiliar','violencia de género','trauma psicológico']
},
{
  id:'U10-SMS-Q36', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Violencia y salud mental', sub:'Error de asociar enfermedad mental con peligrosidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué muestra la evidencia sobre la relación entre trastornos mentales y violencia hacia terceros?',
  ops:[
    'La inmensa mayoría de las personas con trastornos mentales nunca cometen actos de violencia hacia otros, y son, de hecho, más frecuentemente víctimas de violencia que perpetradores',
    'La mayoría de las personas con trastornos mentales son, de hecho, peligrosas y violentas hacia terceros de forma frecuente', 'No existe ninguna evidencia real disponible sobre la relación entre trastornos mentales y violencia hacia otros', 'Las personas con trastornos mentales nunca son víctimas de violencia, solo pueden ser perpetradoras'],
  ok:0,
  clave:'La inmensa mayoría de las personas con trastornos mentales nunca cometen actos de violencia hacia otros, y son, de hecho, más frecuentemente víctimas de violencia que perpetradores.',
  exp:'La evidencia muestra consistentemente que la inmensa mayoría de las personas con trastornos mentales nunca cometen actos de violencia hacia terceros, y que son, de hecho, más frecuentemente víctimas de violencia que perpetradores de ella.',
  no:{
    1:'Es precisamente lo contrario: la evidencia muestra que la INMENSA MAYORÍA nunca comete actos de violencia hacia otros.',
    2:'Sí existe evidencia consistente y bien documentada sobre esta relación, contradiciendo el estereotipo de peligrosidad generalizada.',
    3:'Es precisamente lo contrario: las personas con trastornos mentales son, con más frecuencia, VÍCTIMAS de violencia, no solo perpetradoras.'
  },
  trampa:'Aceptar el estereotipo social de que las personas con trastornos mentales son inherentemente peligrosas, contradiciendo la evidencia real disponible.',
  obj:'Explicar lo que muestra la evidencia sobre la relación entre trastornos mentales y violencia hacia terceros.',
  ref:'OMS, Informe mundial sobre la violencia y la salud.',
  tags:['estereotipo de peligrosidad','víctimas de violencia','evidencia real','violencia intrafamiliar']
},
{
  id:'U10-SMS-Q37', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Violencia y salud mental', sub:'Impacto del estereotipo de peligrosidad sobre el estigma',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se relaciona el error de asociar enfermedad mental con peligrosidad con el estigma ya visto en el tema anterior?',
  ops:[
    'Reforzar la idea errónea de peligrosidad generalizada aumenta el miedo social hacia las personas con trastornos mentales, profundizando su exclusión',
    'El estereotipo de peligrosidad no tiene ninguna relación real con el estigma hacia las personas con trastornos mentales', 'Reforzar el estereotipo de peligrosidad siempre reduce, en vez de aumentar, el estigma hacia las personas con trastornos mentales', 'El estigma y el estereotipo de peligrosidad son fenómenos completamente independientes, sin ninguna conexión'],
  ok:0,
  clave:'Reforzar la idea errónea de peligrosidad generalizada aumenta el miedo social hacia las personas con trastornos mentales, profundizando su exclusión.',
  exp:'Este error de asociación tiene una consecuencia directa sobre el estigma ya visto: reforzar la idea errónea de peligrosidad generalizada aumenta el miedo social hacia las personas con trastornos mentales, profundizando su exclusión y dificultando aún más que busquen ayuda por temor a ser vistas con sospecha.',
  no:{
    1:'Sí existe una relación directa: el estereotipo de peligrosidad alimenta activamente el estigma social hacia estas personas.',
    2:'Es precisamente lo contrario: reforzar este estereotipo AUMENTA, no reduce, el estigma hacia las personas con trastornos mentales.',
    3:'Son fenómenos conectados: el estereotipo de peligrosidad es uno de los mecanismos que refuerza directamente el estigma social.'
  },
  trampa:'No reconocer la conexión directa entre el estereotipo de peligrosidad y el refuerzo del estigma social hacia las personas con trastornos mentales.',
  obj:'Explicar la relación entre el estereotipo de peligrosidad y el refuerzo del estigma en salud mental.',
  ref:'OMS, Informe mundial sobre la violencia y la salud.',
  tags:['estereotipo de peligrosidad','refuerzo del estigma','exclusión social','violencia de género']
},
{
  id:'U10-SMS-Q38', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Violencia y salud mental', sub:'Excepción real de riesgo hacia terceros',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente expresa una amenaza creíble y concreta, con un plan específico, de causar daño a una persona identificable.',
  enunciado:'¿Cómo debe evaluarse este caso específico, sin caer en el prejuicio general sobre peligrosidad de las personas con trastornos mentales?',
  ops:[
    'Con criterio clínico específico para ese caso, retomando el criterio de riesgo real e inminente ya visto como excepción justificada a la confidencialidad',
    'Este caso debe evaluarse asumiendo automáticamente que cualquier persona con un trastorno mental representa el mismo nivel de riesgo', 'No existe ninguna excepción real donde un paciente con trastorno mental represente un riesgo concreto hacia terceros', 'La evaluación de este caso no tiene ninguna relación con lo ya visto sobre excepciones a la confidencialidad médica'],
  ok:0,
  clave:'Con criterio clínico específico para ese caso, retomando el criterio de riesgo real e inminente ya visto como excepción justificada a la confidencialidad.',
  exp:'Existen situaciones específicas -no la mayoría de los casos- donde un paciente sí representa un riesgo real y concreto, retomando directamente el criterio de riesgo real e inminente ya visto como excepción justificada a la confidencialidad en Relación Médico-Paciente. Evaluar ese riesgo con criterio clínico -no con el prejuicio general- permite distinguir la excepción real de la generalización errónea.',
  no:{
    1:'Este caso no debe generalizarse a todos los pacientes con trastorno mental; se evalúa como una excepción específica y concreta.',
    2:'Sí existen excepciones reales bien delimitadas donde un paciente representa un riesgo concreto, evaluadas caso por caso con criterio.',
    3:'Este caso sí tiene una relación directa con el criterio ya visto de riesgo real e inminente como excepción justificada a la confidencialidad.'
  },
  trampa:'Generalizar un caso específico de riesgo real hacia terceros al prejuicio de que cualquier persona con trastorno mental es peligrosa.',
  obj:'Aplicar el criterio clínico específico para evaluar un riesgo real hacia terceros, sin generalizar al prejuicio de peligrosidad.',
  ref:'OMS, Informe mundial sobre la violencia y la salud.',
  tags:['riesgo real hacia terceros','criterio clínico específico','excepción justificada','trauma psicológico']
},
{
  id:'U10-SMS-Q39', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Salud mental infantil y adolescente', sub:'Presentación distinta según etapa de desarrollo',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño con depresión se presenta con irritabilidad y quejas físicas repetidas, en vez de la tristeza verbalizada típica de un adulto deprimido.',
  enunciado:'¿Qué principio general de la salud mental infantil ilustra esta presentación clínica distinta?',
  ops:[
    'Que los trastornos de salud mental en la infancia con frecuencia se manifiestan de forma distinta a como lo harían en un adulto, exigiendo ajustar la evaluación según la etapa de desarrollo',
    'Este caso demuestra que los niños nunca pueden desarrollar depresión, siendo un trastorno exclusivo de la adultez', 'La presentación clínica de la depresión es exactamente idéntica en niños y adultos, sin ninguna diferencia real', 'La irritabilidad y las quejas físicas nunca tienen ninguna relación real con un trastorno de salud mental subyacente'],
  ok:0,
  clave:'Los trastornos de salud mental en la infancia con frecuencia se manifiestan de forma distinta a como lo harían en un adulto, exigiendo ajustar la evaluación según la etapa de desarrollo.',
  exp:'Un trastorno del desarrollo con frecuencia se manifiesta de forma distinta a como lo haría en un adulto: un niño deprimido puede presentarse con irritabilidad y quejas físicas repetidas en vez de la tristeza verbalizada típica del adulto -esto exige que el profesional ajuste su evaluación clínica según la etapa de desarrollo del paciente.',
  no:{
    1:'Este caso demuestra precisamente que los niños sí pueden desarrollar depresión, aunque con una presentación clínica distinta.',
    2:'La presentación clínica SÍ difiere entre niños y adultos, precisamente el punto central ilustrado por este caso.',
    3:'La irritabilidad y las quejas físicas sí pueden tener una relación real con un trastorno de salud mental subyacente en un niño.'
  },
  trampa:'Asumir que la presentación clínica de un trastorno de salud mental es idéntica entre niños y adultos, sin ajustar la evaluación según la etapa de desarrollo.',
  obj:'Aplicar el principio de que los trastornos de salud mental infantil se presentan de forma distinta a los del adulto.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 32.',
  tags:['presentación clínica infantil','irritabilidad y quejas físicas','ajuste según desarrollo','trastorno del desarrollo']
},
{
  id:'U10-SMS-Q40', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Salud mental infantil y adolescente', sub:'Adolescencia como etapa de primera aparición',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la adolescencia merece atención especial en salud mental, más allá de las tensiones normativas del ciclo vital familiar?',
  ops:[
    'Porque muchos trastornos mentales de por vida (depresión, ansiedad, trastornos psicóticos, alimentarios) tienen su primera aparición en esta etapa de la vida',
    'La adolescencia no tiene ninguna relevancia particular en salud mental, más allá de las tensiones familiares normativas ya vistas', 'Ningún trastorno mental relevante aparece por primera vez durante la etapa de la adolescencia', 'Los trastornos mentales que aparecen en la adolescencia siempre desaparecen por completo al llegar a la adultez'],
  ok:0,
  clave:'Muchos trastornos mentales de por vida (depresión, ansiedad, trastornos psicóticos, alimentarios) tienen su primera aparición en esta etapa de la vida.',
  exp:'La salud mental en la adolescencia merece atención especial porque esta etapa combina cambios biológicos, psicológicos y sociales intensos, y precisamente porque muchos trastornos mentales de por vida tienen su primera aparición en esta etapa de la vida.',
  no:{
    1:'La adolescencia sí tiene una relevancia particular real, más allá de las tensiones familiares ya vistas en el ciclo vital.',
    2:'Numerosos trastornos mentales relevantes sí tienen su primera aparición documentada precisamente durante la adolescencia.',
    3:'Los trastornos que aparecen en la adolescencia no siempre desaparecen; muchos persisten o requieren manejo continuado en la adultez.'
  },
  trampa:'Subestimar la relevancia particular de la adolescencia como etapa de primera aparición de muchos trastornos mentales significativos.',
  obj:'Explicar por qué la adolescencia es una etapa de particular relevancia por la primera aparición de muchos trastornos mentales.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 32.',
  tags:['adolescencia','primera aparición de trastornos','vulnerabilidad particular','salud mental en la adolescencia']
},
{
  id:'U10-SMS-Q41', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Salud mental infantil y adolescente', sub:'Impacto del estigma en la búsqueda de ayuda adolescente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el estigma puede tener un impacto particularmente dañino en un adolescente con un problema de salud mental?',
  ops:[
    'Un adolescente que teme ser etiquetado o juzgado por sus pares tiene aún más reticencia a buscar o aceptar ayuda que un adulto',
    'El estigma nunca tiene ningún impacto real diferenciado entre un adolescente y un adulto con un problema de salud mental', 'Los adolescentes nunca sienten ninguna preocupación real sobre cómo sus pares perciben sus problemas de salud mental', 'El impacto del estigma es exactamente idéntico en adolescentes y adultos, sin ninguna diferencia relevante'],
  ok:0,
  clave:'Un adolescente que teme ser etiquetado o juzgado por sus pares tiene aún más reticencia a buscar o aceptar ayuda que un adulto.',
  exp:'La adolescencia es una etapa donde el estigma puede tener un impacto particularmente dañino: un adolescente que teme ser etiquetado o juzgado por sus pares tiene aún más reticencia a buscar o aceptar ayuda que un adulto, lo que retrasa el reconocimiento y tratamiento de problemas que, detectados a tiempo, tendrían un pronóstico considerablemente mejor.',
  no:{
    1:'El estigma sí tiene un impacto diferenciado y particularmente relevante en la etapa de la adolescencia, por la presión de pares.',
    2:'Los adolescentes sí suelen tener una preocupación real y significativa sobre cómo sus pares perciben sus problemas de salud mental.',
    3:'El impacto del estigma puede ser particularmente más intenso en la adolescencia, dada la relevancia de la aceptación de pares en esta etapa.'
  },
  trampa:'Subestimar el impacto particular del estigma en la adolescencia, asumiendo que afecta de la misma forma que en la adultez.',
  obj:'Explicar por qué el estigma tiene un impacto particularmente dañino sobre la búsqueda de ayuda en un adolescente.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 32.',
  tags:['estigma en adolescentes','presión de pares','reticencia a buscar ayuda','salud mental en la adolescencia']
},
{
  id:'U10-SMS-Q42', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Salud mental infantil y adolescente', sub:'Impacto de la detección temprana en el desarrollo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué detectar y tratar oportunamente un trastorno de salud mental en la infancia o adolescencia tiene un impacto particularmente determinante?',
  ops:[
    'Porque esta etapa es formativa para el desarrollo académico, social y emocional a largo plazo, y un trastorno no tratado puede tener consecuencias acumulativas que se extienden más allá de la etapa donde apareció',
    'La detección temprana en la infancia o adolescencia nunca tiene ningún impacto diferenciado sobre el desarrollo posterior de la persona', 'Un trastorno de salud mental no tratado en la infancia siempre desaparece espontáneamente sin ninguna consecuencia a largo plazo', 'El impacto de detectar tempranamente un trastorno es exactamente el mismo, sin importar en qué etapa de la vida ocurra'],
  ok:0,
  clave:'Esta etapa es formativa para el desarrollo académico, social y emocional a largo plazo, y un trastorno no tratado puede tener consecuencias acumulativas más allá de la etapa donde apareció.',
  exp:'Detectar y tratar oportunamente un trastorno de salud mental en la infancia o adolescencia tiene un impacto particularmente determinante sobre el desarrollo posterior, precisamente porque esta etapa es formativa para el desarrollo académico, social y emocional a largo plazo -un trastorno no tratado puede tener consecuencias acumulativas que se extienden mucho más allá de la etapa en la que apareció.',
  no:{
    1:'La detección temprana sí tiene un impacto particularmente relevante, dado el carácter formativo de esta etapa del desarrollo.',
    2:'Un trastorno no tratado en la infancia puede tener consecuencias reales y acumulativas, no desaparece espontáneamente sin efecto.',
    3:'El impacto de la detección temprana es particularmente relevante en esta etapa formativa, no equivalente al de cualquier otra etapa.'
  },
  trampa:'Subestimar el impacto particular de detectar tempranamente un trastorno de salud mental durante la infancia o adolescencia, etapas formativas del desarrollo.',
  obj:'Explicar por qué la detección temprana en la infancia o adolescencia tiene un impacto particularmente determinante sobre el desarrollo.',
  ref:'Sadock, Sadock y Ruiz, Kaplan y Sadock, Sinopsis de Psiquiatría, cap. 32.',
  tags:['detección temprana','etapa formativa','consecuencias acumulativas','trastorno del desarrollo']
},
{
  id:'U10-SMS-Q43', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Psicofarmacología básica aplicada', sub:'Elección basada en evidencia, no en costumbre',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué debe basarse la elección de un psicofármaco de primera línea para un trastorno mental específico?',
  ops:[
    'En la evidencia disponible de eficacia y seguridad para ese trastorno concreto, no en la costumbre de un profesional específico o la disponibilidad inmediata',
    'La elección de un psicofármaco de primera línea siempre debe basarse exclusivamente en la costumbre personal del profesional que prescribe', 'La disponibilidad inmediata del fármaco en la farmacia es siempre el criterio más importante para elegir un psicofármaco', 'No existe ningún criterio basado en evidencia real para elegir un psicofármaco de primera línea en la práctica'],
  ok:0,
  clave:'En la evidencia disponible de eficacia y seguridad para ese trastorno concreto, no en la costumbre de un profesional específico o la disponibilidad inmediata.',
  exp:'La elección de un psicofármaco de primera línea se basa en la evidencia disponible de eficacia y seguridad para ese trastorno concreto, no en la costumbre de un profesional específico o en cuál fármaco está más disponible en ese momento.',
  no:{
    1:'La costumbre personal del profesional no es el criterio apropiado; la elección debe basarse en evidencia de eficacia y seguridad.',
    2:'La disponibilidad inmediata no es el criterio principal; la evidencia de eficacia y seguridad para el trastorno específico lo es.',
    3:'Sí existe un criterio basado en evidencia real y bien establecido para la elección de psicofármacos de primera línea.'
  },
  trampa:'Basar la elección de un psicofármaco en la costumbre personal o la disponibilidad inmediata, en vez de en la evidencia de eficacia y seguridad.',
  obj:'Explicar el criterio basado en evidencia para elegir un psicofármaco de primera línea.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 29-30.',
  tags:['psicofármaco de primera línea','evidencia de eficacia','criterio de elección']
},
{
  id:'U10-SMS-Q44', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Psicofarmacología básica aplicada', sub:'Dimensión social de un efecto adverso visible',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente en tratamiento con un antipsicótico presenta movimientos anormales visibles como efecto adverso, un efecto relativamente leve en términos clínicos objetivos.',
  enunciado:'¿Por qué este efecto adverso, aunque leve clínicamente, puede tener un impacto importante sobre la calidad de vida del paciente?',
  ops:[
    'Porque, al ser visible, puede hacer que otros lo identifiquen como "diferente", reforzando el estigma social ya visto en este bloque',
    'Un efecto adverso visible nunca tiene ningún impacto real sobre la calidad de vida del paciente, más allá de su gravedad clínica objetiva', 'La visibilidad de un efecto adverso no tiene ninguna relación real con el estigma social hacia el paciente', 'Solo la gravedad clínica objetiva de un efecto adverso determina su impacto real sobre el paciente, sin ninguna dimensión social'],
  ok:0,
  clave:'Al ser visible, puede hacer que otros lo identifiquen como "diferente", reforzando el estigma social ya visto en este bloque.',
  exp:'Los efectos adversos visibles (sedación, aumento de peso, movimientos anormales) pueden, en sí mismos, reforzar el estigma social ya visto, al hacer visible externamente que la persona recibe tratamiento psiquiátrico -un efecto adverso relativamente leve en términos clínicos puede tener un impacto social importante si es visible.',
  no:{
    1:'Un efecto adverso visible sí puede tener un impacto real sobre la calidad de vida, más allá de su gravedad clínica objetiva.',
    2:'La visibilidad de un efecto adverso sí tiene una relación directa con el estigma social, al hacer evidente el tratamiento psiquiátrico.',
    3:'La dimensión social del efecto adverso también importa, no solo su gravedad clínica objetiva aislada.'
  },
  trampa:'Evaluar un efecto adverso psicofarmacológico solo por su gravedad clínica objetiva, sin considerar su dimensión social por ser visible.',
  obj:'Explicar la dimensión social de un efecto adverso psicofarmacológico visible, más allá de su gravedad clínica objetiva.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 29-30.',
  tags:['efecto adverso visible','dimensión social','estigma reforzado']
},
{
  id:'U10-SMS-Q45', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Psicofarmacología básica aplicada', sub:'Contexto social como parte de la decisión farmacológica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un fármaco "correcto" en términos puramente farmacológicos puede no ser la mejor elección real para un paciente específico?',
  ops:[
    'Si el paciente no puede sostenerlo por razones económicas o sociales (acceso económico, apoyo familiar, estigma), no es realmente la mejor elección para ese paciente concreto',
    'Un fármaco farmacológicamente correcto siempre es automáticamente la mejor elección real, sin importar el contexto social del paciente', 'El acceso económico y el apoyo familiar nunca deberían considerarse al elegir un tratamiento psicofarmacológico', 'El estigma que enfrenta el paciente nunca tiene ninguna relación real con el éxito de un tratamiento psicofarmacológico'],
  ok:0,
  clave:'Si el paciente no puede sostenerlo por razones económicas o sociales (acceso económico, apoyo familiar, estigma), no es realmente la mejor elección para ese paciente concreto.',
  exp:'El acceso económico al fármaco, el apoyo familiar para sostener el tratamiento a largo plazo, y el estigma que el paciente enfrenta al tomarlo, son factores que, sumados a la elección clínica correcta, determinan si el tratamiento realmente tendrá éxito -un fármaco "correcto" farmacológicamente pero insostenible no es la mejor elección real.',
  no:{
    1:'Es precisamente lo contrario: el contexto social del paciente sí determina si el fármaco correcto es realmente sostenible en la práctica.',
    2:'El acceso económico y el apoyo familiar sí deben considerarse, siendo factores relevantes para el éxito real del tratamiento.',
    3:'El estigma sí tiene una relación real con el éxito del tratamiento, pudiendo influir en la adherencia y sostenibilidad del mismo.'
  },
  trampa:'Evaluar la corrección de un fármaco solo desde el criterio farmacológico puro, sin considerar si el paciente puede sostenerlo en su contexto social real.',
  obj:'Explicar por qué el contexto social del paciente es parte de la decisión sobre la mejor elección farmacológica real.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 29-30.',
  tags:['contexto social del paciente','sostenibilidad del tratamiento','elección farmacológica real']
},
{
  id:'U10-SMS-Q46', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Psicofarmacología básica aplicada', sub:'Individualización pese a evidencia general',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el fármaco "de primera línea" en general puede no ser el más apropiado para un paciente psiquiátrico específico?',
  ops:[
    'Según sus comorbilidades, su respuesta previa a otros tratamientos, o su contexto social particular, el fármaco general puede necesitar ajustarse a ese paciente concreto',
    'El fármaco de primera línea siempre es exactamente igual de apropiado para cualquier paciente, sin ninguna necesidad de individualización', 'Las comorbilidades del paciente nunca deberían influir en la elección de un psicofármaco específico', 'La respuesta previa del paciente a otros tratamientos nunca tiene ninguna relevancia para la elección farmacológica actual'],
  ok:0,
  clave:'Según sus comorbilidades, su respuesta previa a otros tratamientos, o su contexto social particular, el fármaco general puede necesitar ajustarse a ese paciente concreto.',
  exp:'Esta elección basada en evidencia debe combinarse con el criterio individualizado ya visto en Farmacoterapéutica: el fármaco "de primera línea" en general puede no ser el más apropiado para un paciente específico, según sus comorbilidades, su respuesta previa a otros tratamientos, o su contexto social particular.',
  no:{
    1:'Es precisamente lo contrario: la individualización según comorbilidades y contexto sí es necesaria, no todos los pacientes responden igual.',
    2:'Las comorbilidades sí deben influir en la elección específica del psicofármaco para cada paciente concreto.',
    3:'La respuesta previa a otros tratamientos sí es relevante para orientar la elección farmacológica actual de ese paciente.'
  },
  trampa:'Asumir que el fármaco de primera línea general es automáticamente el correcto para cualquier paciente, sin considerar la individualización necesaria.',
  obj:'Explicar por qué el fármaco de primera línea general puede necesitar ajustarse a las características individuales del paciente.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 29-30.',
  tags:['individualización farmacológica','comorbilidades','respuesta previa al tratamiento']
},
{
  id:'U10-SMS-Q47', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Modelos de atención en salud mental', sub:'Las tres dimensiones del modelo biopsicosocial',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son las tres dimensiones que el modelo biopsicosocial propone considerar simultáneamente en cualquier trastorno de salud mental?',
  ops:[
    'Biológica (neuroquímica, genética, farmacología), psicológica (pensamientos, emociones, experiencias personales) y social (determinantes sociales, familia, comunidad, estigma)',
    'El modelo biopsicosocial considera únicamente la dimensión biológica del trastorno, sin ninguna otra dimensión adicional', 'Las tres dimensiones del modelo biopsicosocial son exactamente idénticas entre sí, sin ninguna diferencia real', 'Este modelo propone reducir cualquier trastorno mental a una única dimensión aislada, ignorando las demás'],
  ok:0,
  clave:'Biológica (neuroquímica, genética, farmacología), psicológica (pensamientos, emociones, experiencias personales) y social (determinantes sociales, familia, comunidad, estigma).',
  exp:'El modelo biopsicosocial propone que cualquier trastorno de salud mental debe entenderse considerando simultáneamente sus tres dimensiones -biológica, psicológica y social-, en vez de reducir el trastorno a una sola de estas dimensiones de forma aislada.',
  no:{
    1:'El modelo considera las tres dimensiones simultáneamente, no se limita únicamente a la dimensión biológica.',
    2:'Las tres dimensiones son claramente distintas entre sí (biológica, psicológica, social), no idénticas.',
    3:'Es precisamente lo contrario: el modelo propone considerar las TRES dimensiones simultáneamente, no reducir a una sola.'
  },
  trampa:'Reducir el modelo biopsicosocial a una sola dimensión (típicamente la biológica), sin reconocer la integración de las tres dimensiones simultáneas.',
  obj:'Identificar las tres dimensiones que integra el modelo biopsicosocial en salud mental.',
  ref:'Engel, El modelo biopsicosocial.',
  tags:['modelo biopsicosocial','tres dimensiones','integración']
},
{
  id:'U10-SMS-Q48', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Modelos de atención en salud mental', sub:'Implicación práctica del modelo biopsicosocial',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué implicación práctica tiene el modelo biopsicosocial para el diseño de un plan de tratamiento completo?',
  ops:[
    'Un plan de tratamiento completo casi siempre necesita intervenir en más de una de las tres dimensiones a la vez, no solo en una de ellas de forma aislada',
    'El modelo biopsicosocial no tiene ninguna implicación práctica real para el diseño de un plan de tratamiento', 'Un plan de tratamiento completo debe intervenir exclusivamente en la dimensión biológica, ignorando las demás', 'Las tres dimensiones del modelo nunca deberían combinarse dentro de un mismo plan de tratamiento'],
  ok:0,
  clave:'Un plan de tratamiento completo casi siempre necesita intervenir en más de una de las tres dimensiones a la vez, no solo en una de ellas de forma aislada.',
  exp:'Este modelo no es solo un marco teórico abstracto; tiene una implicación práctica directa: un plan de tratamiento completo casi siempre necesita intervenir en más de una de estas tres dimensiones a la vez -por ejemplo, combinando tratamiento farmacológico con apoyo psicosocial y atención a las condiciones sociales del paciente.',
  no:{
    1:'El modelo sí tiene una implicación práctica clara y directa para el diseño de un plan de tratamiento completo.',
    2:'Un plan completo, según este modelo, no se limita exclusivamente a la dimensión biológica; integra también lo psicológico y social.',
    3:'Es precisamente lo contrario: el modelo propone COMBINAR las tres dimensiones dentro de un mismo plan de tratamiento integral.'
  },
  trampa:'Tratar el modelo biopsicosocial como un marco puramente teórico sin implicación práctica, o reducir el plan de tratamiento a una sola dimensión.',
  obj:'Explicar la implicación práctica del modelo biopsicosocial para el diseño de un plan de tratamiento completo.',
  ref:'Engel, El modelo biopsicosocial.',
  tags:['implicación práctica','plan de tratamiento integral','intervención multidimensional']
},
{
  id:'U10-SMS-Q49', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Modelos de atención en salud mental', sub:'Ventaja de integrar salud mental en atención primaria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ventaja práctica tiene integrar el manejo básico de trastornos mentales frecuentes en la atención primaria, en vez de depender exclusivamente de un especialista?',
  ops:[
    'Reduce la barrera de acceso que representa buscar específicamente un especialista en salud mental, con toda la carga de estigma asociada',
    'Integrar la salud mental en atención primaria nunca aporta ninguna ventaja real sobre depender exclusivamente de un especialista', 'Esta integración siempre empeora el acceso a la atención de salud mental para la población general', 'Depender exclusivamente de un especialista en psiquiatría siempre es preferible a integrar el manejo en atención primaria'],
  ok:0,
  clave:'Reduce la barrera de acceso que representa buscar específicamente un especialista en salud mental, con toda la carga de estigma asociada.',
  exp:'Esta integración tiene una ventaja práctica considerable: reduce la barrera de acceso que representa, para muchos pacientes, tener que buscar específicamente un especialista en salud mental -con toda la carga de estigma asociada-, permitiendo que el primer abordaje ocurra en un entorno de atención general, menos marcado socialmente.',
  no:{
    1:'Sí aporta una ventaja real y documentada, al reducir la barrera de acceso asociada al estigma de buscar un especialista.',
    2:'Esta integración típicamente MEJORA, no empeora, el acceso a la atención de salud mental para la población general.',
    3:'Es precisamente lo contrario: la integración en atención primaria reduce barreras que la dependencia exclusiva de un especialista mantiene.'
  },
  trampa:'Asumir que depender exclusivamente de un especialista en psiquiatría siempre es preferible a integrar el manejo básico en atención primaria.',
  obj:'Explicar la ventaja práctica de integrar el manejo básico de salud mental en la atención primaria.',
  ref:'Engel, El modelo biopsicosocial.',
  tags:['integración en atención primaria','reducción de barrera de acceso','estigma del especialista']
},
{
  id:'U10-SMS-Q50', programa:'unirm', cuatri:10,
  esp:'Salud Mental y Sociedad', tema:'Modelos de atención en salud mental', sub:'Cierre del bloque: salud mental como asunto social',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo cierra este tema la idea central que atraviesa todo el bloque de Salud Mental y Sociedad?',
  ops:[
    'Retomando que la salud mental no puede entenderse ni atenderse adecuadamente considerando solo el cerebro o la mente de forma aislada, sin considerar también el contexto social en el que esa persona vive',
    'Este tema no tiene ninguna relación real con la idea central desarrollada en los demás temas del bloque completo', 'La salud mental debe entenderse exclusivamente desde una perspectiva biológica aislada, sin ninguna consideración social', 'Este tema contradice por completo el enfoque desarrollado a lo largo de todo el bloque de Salud Mental y Sociedad'],
  ok:0,
  clave:'Retomando que la salud mental no puede entenderse ni atenderse adecuadamente considerando solo el cerebro o la mente de forma aislada, sin considerar el contexto social.',
  exp:'Este tema cierra el bloque completo retomando su idea central desde el primer tema: la salud mental no puede entenderse ni atenderse adecuadamente considerando solo el cerebro o la mente de forma aislada, sin considerar también el contexto social -determinantes sociales, estigma, violencia, apoyo comunitario y familiar- en el que esa persona vive su trastorno día a día.',
  no:{
    1:'Este tema tiene una relación directa y de cierre con la idea central desarrollada consistentemente a lo largo de todo el bloque.',
    2:'Es precisamente lo contrario: el bloque enfatiza que la perspectiva biológica aislada es insuficiente, sin la consideración social.',
    3:'Este tema no contradice el enfoque del bloque; lo confirma y lo cierra, integrando todo lo visto en un marco coherente final.'
  },
  trampa:'No reconocer que este tema final confirma y cierra, en vez de contradecir, la idea central biopsicosocial desarrollada a lo largo de todo el bloque.',
  obj:'Explicar cómo el tema de modelos de atención cierra la idea central del bloque de Salud Mental y Sociedad.',
  ref:'Engel, El modelo biopsicosocial. OMS, Informe mundial sobre salud mental.',
  tags:['cierre del bloque','salud mental como asunto social','integración biopsicosocial']
}

]);
