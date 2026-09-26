/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 11, TANDA DE PATOLOGÍA
   INFECCIOSA (1/2)
   Primer banco de esta materia (0 preguntas previas). Prefijo
   U11-PI-. Cubre los primeros 6 temas: principios de
   enfermedades infecciosas, sindrome febril de origen
   desconocido, infecciones bacterianas comunes, infecciones
   virales comunes, tuberculosis en la practica clinica, y
   VIH/SIDA (Q01-Q26).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== PATOLOGÍA INFECCIOSA ===================== */
{
  id:'U11-PI-Q01', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Principios de enfermedades infecciosas', sub:'Los tres elementos de la tríada epidemiológica',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué tres elementos componen la tríada epidemiológica clásica?',
  ops:[
    'Huésped, agente y ambiente', 'Únicamente el agente causal, sin ninguna otra consideración adicional dentro de este modelo', 'Solo el huésped y el ambiente, sin ninguna relación con el agente causal específico', 'Reservorio, vector y puerta de entrada, siendo estos los tres únicos elementos del modelo'],
  ok:0,
  clave:'Huésped, agente y ambiente.',
  exp:'La tríada epidemiológica es el modelo clásico que explica la ocurrencia de una enfermedad infecciosa como el resultado de la interacción entre el huésped, el agente causal, y el ambiente.',
  no:{
    1:'El agente causal es solo uno de los tres elementos; también se requiere considerar el huésped y el ambiente.',
    2:'El agente causal también forma parte de este modelo; no puede omitirse del análisis de la tríada.',
    3:'Estos elementos corresponden a la cadena de transmisión, un concepto relacionado pero distinto de la tríada epidemiológica.'
  },
  trampa:'Reducir la tríada epidemiológica a solo uno o dos de sus tres elementos, o confundirla con los eslabones de la cadena de transmisión.',
  obj:'Identificar los tres elementos que componen la tríada epidemiológica.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 1.',
  tags:['tríada epidemiológica','tres elementos']
},
{
  id:'U11-PI-Q02', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Principios de enfermedades infecciosas', sub:'Eslabones de la cadena de transmisión',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué eslabones componen la cadena de transmisión de infecciones?',
  ops:[
    'Agente infeccioso, reservorio, puerta de salida, modo de transmisión, puerta de entrada, y huésped susceptible', 'Únicamente el agente infeccioso y el huésped susceptible, sin ningún eslabón intermedio adicional', 'Solo el modo de transmisión, sin ninguna relación con el reservorio ni las puertas de entrada o salida', 'La cadena de transmisión de infecciones no tiene ningún eslabón específico reconocido clínicamente'],
  ok:0,
  clave:'Agente infeccioso, reservorio, puerta de salida, modo de transmisión, puerta de entrada, y huésped susceptible.',
  exp:'La cadena de transmisión describe la secuencia de eslabones necesarios para que una infección se propague: agente infeccioso, reservorio, puerta de salida, modo de transmisión, puerta de entrada, y finalmente un huésped susceptible.',
  no:{
    1:'La cadena incluye varios eslabones intermedios (reservorio, puertas de salida y entrada, modo de transmisión), no solo dos.',
    2:'El modo de transmisión es solo uno de varios eslabones; la cadena completa incluye reservorio y puertas de entrada/salida.',
    3:'La cadena de transmisión sí tiene eslabones específicos bien reconocidos y descritos en este tema.'
  },
  trampa:'Reducir la cadena de transmisión a solo uno o dos de sus eslabones, sin reconocer la secuencia completa.',
  obj:'Identificar los eslabones que componen la cadena de transmisión de infecciones.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 1.',
  tags:['cadena de transmisión de infecciones','eslabones']
},
{
  id:'U11-PI-Q03', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Principios de enfermedades infecciosas', sub:'Utilidad práctica de entender la cadena de transmisión',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué utilidad práctica tiene comprender la cadena de transmisión de una infección?',
  ops:[
    'Cada intervención de control de infecciones actúa interrumpiendo uno o más eslabones específicos de esta cadena, y reconocer en cuál interviene ayuda a entender su efectividad', 'Comprender la cadena de transmisión nunca tiene ninguna utilidad práctica real para el control de infecciones', 'Las medidas de control de infecciones nunca actúan interrumpiendo ningún eslabón específico de esta cadena', 'La efectividad de una medida de control de infecciones nunca depende de en qué eslabón de la cadena actúa'],
  ok:0,
  clave:'Cada intervención de control de infecciones actúa interrumpiendo uno o más eslabones específicos de esta cadena, y reconocer en cuál interviene ayuda a entender su efectividad.',
  exp:'Cada intervención de control de infecciones actúa interrumpiendo uno o más eslabones específicos de la cadena de transmisión, y reconocer en cuál eslabón interviene una medida determinada ayuda a entender por qué es efectiva o por qué, en ciertos contextos, no lo es.',
  no:{
    1:'Comprender esta cadena sí tiene una utilidad práctica real y directa para entender el control de infecciones.',
    2:'Es precisamente lo contrario: las medidas de control SÍ actúan interrumpiendo eslabones específicos de esta cadena.',
    3:'La efectividad de una medida sí depende de en qué eslabón específico de la cadena actúa dicha intervención.'
  },
  trampa:'Subestimar la utilidad práctica de comprender la cadena de transmisión para analizar la efectividad de las medidas de control de infecciones.',
  obj:'Explicar la utilidad práctica de comprender la cadena de transmisión para el control de infecciones.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 1.',
  tags:['huésped agente y ambiente','utilidad práctica de la cadena de transmisión']
},
{
  id:'U11-PI-Q04', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Síndrome febril de origen desconocido', sub:'Categorías de causas de fiebre de origen desconocido',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿En qué categorías amplias se agrupan clásicamente las causas de fiebre de origen desconocido?',
  ops:[
    'Infecciosas, neoplásicas, autoinmunes o inflamatorias, y misceláneas', 'Únicamente causas infecciosas, sin ninguna otra categoría reconocida clínicamente en este síndrome', 'Solo causas neoplásicas, sin ninguna relación con causas infecciosas o autoinmunes', 'La fiebre de origen desconocido nunca se agrupa en ninguna categoría específica de causas'],
  ok:0,
  clave:'Infecciosas, neoplásicas, autoinmunes o inflamatorias, y misceláneas.',
  exp:'Las causas de la fiebre de origen desconocido se agrupan clásicamente en varias categorías amplias: infecciosas (la más frecuente en muchos contextos), neoplásicas, autoinmunes o inflamatorias, y misceláneas.',
  no:{
    1:'Las causas infecciosas son solo una de varias categorías; también existen causas neoplásicas, autoinmunes y misceláneas.',
    2:'Las causas neoplásicas son solo una de varias categorías; también existen causas infecciosas y autoinmunes.',
    3:'La fiebre de origen desconocido sí se agrupa en categorías amplias bien reconocidas clínicamente.'
  },
  trampa:'Reducir las causas de fiebre de origen desconocido a una sola categoría, sin reconocer la amplitud completa de categorías posibles.',
  obj:'Identificar las categorías amplias de causas de la fiebre de origen desconocido.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 52.',
  tags:['causas de fiebre prolongada','categorías amplias']
},
{
  id:'U11-PI-Q05', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Síndrome febril de origen desconocido', sub:'Por qué repetir la historia clínica y el examen físico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué repetir la historia clínica y el examen físico en distintos momentos es más productivo, ante una fiebre de origen desconocido, que una batería indiscriminada de estudios?',
  ops:[
    'Porque un hallazgo que no era evidente en la primera evaluación puede volverse aparente en una evaluación posterior', 'Repetir la historia clínica y el examen físico nunca aporta ninguna información adicional relevante en este contexto', 'Una batería indiscriminada de estudios siempre es más efectiva que repetir la evaluación clínica en distintos momentos', 'El abordaje del síndrome febril de origen desconocido nunca requiere ninguna reevaluación clínica repetida en el tiempo'],
  ok:0,
  clave:'Porque un hallazgo que no era evidente en la primera evaluación puede volverse aparente en una evaluación posterior.',
  exp:'El abordaje prioriza una historia clínica y un examen físico exhaustivos y repetidos en el tiempo, porque un hallazgo que no era evidente en la primera evaluación puede volverse aparente en una evaluación posterior.',
  no:{
    1:'Repetir la evaluación sí aporta información adicional relevante, pudiendo revelar hallazgos no evidentes inicialmente.',
    2:'Es precisamente lo contrario: una búsqueda no dirigida puede generar hallazgos incidentales que complican en vez de aclarar el cuadro.',
    3:'El abordaje sí requiere reevaluación clínica repetida, siendo más productiva que estudios indiscriminados desde el inicio.'
  },
  trampa:'Priorizar estudios de laboratorio extensos desde el inicio, en vez de reevaluar clínicamente al paciente en distintos momentos.',
  obj:'Explicar por qué repetir la evaluación clínica es más productivo que una batería indiscriminada de estudios.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 52.',
  tags:['abordaje del síndrome febril','reevaluación clínica repetida']
},
{
  id:'U11-PI-Q06', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Síndrome febril de origen desconocido', sub:'Individualización según contexto epidemiológico',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico evalúa a un paciente con fiebre prolongada, sin considerar el contexto epidemiológico local ni los antecedentes individuales del paciente, aplicando una lista genérica y fija de causas probables.',
  enunciado:'¿Qué principio de este tema cuestiona este enfoque del médico?',
  ops:[
    'Que no existe una lista universal fija de causas más probables; el contexto epidemiológico y los antecedentes individuales orientan considerablemente el diagnóstico diferencial', 'Este enfoque es completamente apropiado, ya que una lista genérica fija siempre es igualmente útil para cualquier paciente evaluado', 'El contexto epidemiológico local nunca tiene ninguna relación real con las causas probables de fiebre prolongada', 'Los antecedentes individuales del paciente nunca deberían considerarse al evaluar un síndrome febril prolongado'],
  ok:0,
  clave:'Que no existe una lista universal fija de causas más probables; el contexto epidemiológico y los antecedentes individuales orientan considerablemente el diagnóstico diferencial.',
  exp:'No existe una lista universal fija de causas más probables aplicable de igual forma a cualquier paciente; el contexto epidemiológico y los antecedentes individuales orientan considerablemente el diagnóstico diferencial más probable en cada caso.',
  no:{
    1:'Este enfoque genérico es cuestionable: el contexto epidemiológico y los antecedentes individuales sí deben orientar la evaluación.',
    2:'El contexto epidemiológico local sí tiene una relación directa con las causas más probables de fiebre prolongada.',
    3:'Los antecedentes individuales sí deben considerarse activamente al evaluar un síndrome febril prolongado.'
  },
  trampa:'Aplicar una lista genérica y fija de causas probables sin individualizar según el contexto epidemiológico y los antecedentes del paciente.',
  obj:'Aplicar el principio de individualizar la evaluación del síndrome febril según el contexto epidemiológico específico.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 52.',
  tags:['fiebre de origen desconocido','individualización según contexto']
},
{
  id:'U11-PI-Q07', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Infecciones bacterianas comunes', sub:'Relevancia clínica de las complicaciones postinfecciosas estreptocócicas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es clínicamente relevante vigilar posibles complicaciones postinfecciosas de ciertas infecciones estreptocócicas, más allá de la resolución del episodio agudo?',
  ops:[
    'Porque estas complicaciones no ocurren por la infección directa, sino por una respuesta inmune posterior mal dirigida, que puede manifestarse semanas después', 'Las infecciones estreptocócicas nunca generan ninguna complicación postinfecciosa real más allá del episodio agudo', 'Cualquier complicación de una infección estreptocócica siempre ocurre de forma simultánea con el episodio agudo inicial', 'Vigilar complicaciones postinfecciosas de infecciones estreptocócicas nunca aporta ninguna utilidad clínica real'],
  ok:0,
  clave:'Porque estas complicaciones no ocurren por la infección directa, sino por una respuesta inmune posterior mal dirigida, que puede manifestarse semanas después.',
  exp:'Ciertas infecciones estreptocócicas tienen potencial de generar complicaciones postinfecciosas no supurativas, que no ocurren por la infección directa sino por una respuesta inmune posterior mal dirigida, lo que exige vigilar posibles secuelas que pueden manifestarse semanas después.',
  no:{
    1:'Las infecciones estreptocócicas sí pueden generar complicaciones postinfecciosas reales, semanas después del episodio agudo.',
    2:'Es precisamente lo contrario: estas complicaciones ocurren DESPUÉS, no de forma simultánea con el episodio agudo.',
    3:'Vigilar estas complicaciones sí aporta una utilidad clínica real, al permitir su detección temprana.'
  },
  trampa:'Asumir que el manejo de una infección estreptocócica termina completamente al resolverse el episodio agudo, sin considerar posibles complicaciones postinfecciosas.',
  obj:'Explicar la relevancia de vigilar complicaciones postinfecciosas de ciertas infecciones estreptocócicas.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 195.',
  tags:['infección estreptocócica','complicaciones postinfecciosas']
},
{
  id:'U11-PI-Q08', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Infecciones bacterianas comunes', sub:'Influencia del patrón local de resistencia en el tratamiento empírico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo influye la creciente relevancia de cepas resistentes de Staphylococcus aureus en la elección del tratamiento antimicrobiano empírico?',
  ops:[
    'El patrón local de resistencia bacteriana influye directamente en la elección empírica del tratamiento, antes incluso de contar con el resultado de un cultivo confirmatorio', 'El patrón de resistencia bacteriana nunca tiene ninguna relación real con la elección del tratamiento antimicrobiano empírico', 'El tratamiento empírico siempre debe ser exactamente el mismo, sin importar el patrón local de resistencia bacteriana', 'El resultado del cultivo confirmatorio siempre debe obtenerse antes de iniciar cualquier tratamiento empírico'],
  ok:0,
  clave:'El patrón local de resistencia bacteriana influye directamente en la elección empírica del tratamiento, antes incluso de contar con el resultado de un cultivo confirmatorio.',
  exp:'La creciente relevancia de cepas de Staphylococcus aureus resistentes a meticilina retoma la importancia del uso racional de antimicrobianos: el patrón local de resistencia influye directamente en la elección empírica del tratamiento, antes de contar con el cultivo confirmatorio.',
  no:{
    1:'El patrón de resistencia sí tiene una relación directa y relevante con la elección del tratamiento antimicrobiano empírico.',
    2:'Es precisamente lo contrario: el tratamiento empírico SÍ debe ajustarse según el patrón local de resistencia bacteriana.',
    3:'Es precisamente lo contrario: el tratamiento empírico se inicia ANTES del resultado del cultivo, por necesidad clínica.'
  },
  trampa:'Asumir que el tratamiento antimicrobiano empírico debe esperar siempre el resultado de un cultivo confirmatorio antes de iniciarse.',
  obj:'Explicar cómo el patrón local de resistencia bacteriana influye en la elección del tratamiento antimicrobiano empírico.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 195.',
  tags:['infección estafilocócica','patrón local de resistencia']
},
{
  id:'U11-PI-Q09', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Infecciones bacterianas comunes', sub:'Signos de progresión o severidad en la celulitis',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con celulitis bacteriana presenta extensión rápida del área afectada, fiebre alta, y no responde al tratamiento antimicrobiano inicial administrado.',
  enunciado:'¿Qué significan estos hallazgos, según lo visto en este tema?',
  ops:[
    'Orientan hacia la necesidad de reevaluar el diagnóstico, descartando complicaciones más graves como una infección necrotizante de tejidos blandos, o escalar el manejo', 'Estos hallazgos nunca tienen ninguna relevancia clínica real en el curso de una celulitis bacteriana no complicada', 'La falta de respuesta al tratamiento inicial siempre indica que el diagnóstico original de celulitis era incorrecto desde el inicio', 'La extensión rápida y la fiebre alta son hallazgos esperados y sin importancia en cualquier caso de celulitis bacteriana'],
  ok:0,
  clave:'Orientan hacia la necesidad de reevaluar el diagnóstico, descartando complicaciones más graves como una infección necrotizante de tejidos blandos, o escalar el manejo.',
  exp:'Reconocer signos de progresión o severidad en una celulitis -extensión rápida, fiebre alta, falta de respuesta al tratamiento inicial- orienta hacia la necesidad de reevaluar el diagnóstico, descartando complicaciones más graves, o de escalar el manejo hacia un tratamiento más intensivo.',
  no:{
    1:'Estos hallazgos sí tienen relevancia clínica real, señalando la posible progresión hacia una complicación más grave.',
    2:'La falta de respuesta no siempre indica un diagnóstico incorrecto; puede indicar progresión o resistencia al tratamiento elegido.',
    3:'Estos hallazgos NO son esperados en una celulitis no complicada; son señales de alarma que ameritan reevaluación.'
  },
  trampa:'Subestimar signos de progresión o falta de respuesta al tratamiento en una celulitis, sin considerar la necesidad de reevaluar o escalar el manejo.',
  obj:'Aplicar el reconocimiento de signos de progresión o severidad en un caso de celulitis bacteriana.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 195.',
  tags:['celulitis bacteriana','signos de progresión o severidad']
},
{
  id:'U11-PI-Q10', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Infecciones virales comunes', sub:'Por qué el manejo de las infecciones respiratorias virales es de soporte',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué administrar antibióticos ante una infección viral respiratoria no aporta beneficio real y, además, contribuye a un problema mayor?',
  ops:[
    'Porque el manejo de estas infecciones es sintomático y de soporte, sin necesidad de tratamiento antimicrobiano dirigido, y los antibióticos contribuyen al problema de resistencia antimicrobiana', 'Los antibióticos siempre son efectivos y necesarios contra cualquier infección viral respiratoria, sin ninguna excepción real', 'Las infecciones virales respiratorias nunca tienen ninguna relación real con el problema de resistencia antimicrobiana', 'El manejo de las infecciones virales respiratorias siempre requiere tratamiento antimicrobiano dirigido específico'],
  ok:0,
  clave:'Porque el manejo de estas infecciones es sintomático y de soporte, sin necesidad de tratamiento antimicrobiano dirigido, y los antibióticos contribuyen al problema de resistencia antimicrobiana.',
  exp:'En la gran mayoría de los casos, el manejo de las infecciones virales respiratorias es sintomático y de soporte; administrar antibióticos no solo no aporta beneficio real, sino que contribuye al problema de resistencia antimicrobiana.',
  no:{
    1:'Es precisamente lo contrario: los antibióticos NO son efectivos contra infecciones virales, ya que actúan sobre bacterias.',
    2:'Las infecciones virales respiratorias sí tienen una relación real con el problema de resistencia, cuando se tratan innecesariamente con antibióticos.',
    3:'Es precisamente lo contrario: estas infecciones NO requieren tratamiento antimicrobiano dirigido; el manejo es de soporte.'
  },
  trampa:'Asumir que cualquier infección respiratoria, viral o bacteriana, requiere tratamiento antibiótico para su resolución.',
  obj:'Explicar por qué el manejo de las infecciones virales respiratorias es sintomático, no antimicrobiano.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 135.',
  tags:['infección viral respiratoria','manejo sintomático']
},
{
  id:'U11-PI-Q11', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Infecciones virales comunes', sub:'Tríada clásica de la mononucleosis infecciosa',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué tríada clásica caracteriza a la mononucleosis infecciosa?',
  ops:[
    'Fiebre, faringitis (con frecuencia exudativa) y linfadenopatía generalizada', 'Tos perruna, disfonía y estridor inspiratorio, siendo esta la tríada característica de la mononucleosis', 'Exantema vesicular, prurito intenso y lesiones en distintas etapas simultáneas de evolución', 'La mononucleosis infecciosa no tiene ninguna tríada clínica característica reconocida clínicamente'],
  ok:0,
  clave:'Fiebre, faringitis (con frecuencia exudativa) y linfadenopatía generalizada.',
  exp:'La mononucleosis infecciosa se presenta clásicamente con la tríada de fiebre, faringitis (con frecuencia exudativa) y linfadenopatía generalizada, siendo particularmente frecuente en adolescentes y adultos jóvenes.',
  no:{
    1:'Esta tríada corresponde al crup laríngeo, no a la mononucleosis infecciosa.',
    2:'Esta descripción corresponde a la varicela, no a la mononucleosis infecciosa.',
    3:'La mononucleosis infecciosa sí tiene una tríada clínica clásica bien reconocida en la práctica clínica.'
  },
  trampa:'Confundir la tríada clásica de la mononucleosis infecciosa con la presentación de otras enfermedades ya vistas en otros bloques.',
  obj:'Identificar la tríada clásica de presentación de la mononucleosis infecciosa.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 135.',
  tags:['mononucleosis infecciosa','tríada clásica']
},
{
  id:'U11-PI-Q12', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Infecciones virales comunes', sub:'Capacidad de latencia de los herpesvirus',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica biológica distintiva comparten las infecciones por herpesvirus?',
  ops:[
    'La capacidad de establecer latencia en el organismo tras la infección inicial, con posibilidad de reactivación posterior', 'Los herpesvirus siempre se eliminan completamente del organismo tras la resolución del episodio agudo inicial', 'La capacidad de latencia de los herpesvirus nunca tiene ninguna relación real con el estado inmunológico del huésped', 'Los herpesvirus nunca pueden reactivarse una vez resuelto el episodio agudo inicial de la infección'],
  ok:0,
  clave:'La capacidad de establecer latencia en el organismo tras la infección inicial, con posibilidad de reactivación posterior.',
  exp:'Las infecciones por herpesvirus comparten la capacidad de establecer latencia en el organismo tras la infección inicial, con posibilidad de reactivación posterior en momentos de menor control inmunológico, en vez de eliminarse completamente del cuerpo.',
  no:{
    1:'Es precisamente lo contrario: los herpesvirus NO se eliminan completamente; establecen latencia con posibilidad de reactivación.',
    2:'La capacidad de reactivación sí tiene una relación directa con el estado inmunológico del huésped en ese momento.',
    3:'Es precisamente lo contrario: los herpesvirus SÍ pueden reactivarse, particularmente en contextos de inmunosupresión.'
  },
  trampa:'Asumir que una infección por herpesvirus se resuelve por completo tras el episodio agudo, sin posibilidad de reactivación posterior.',
  obj:'Explicar la capacidad de latencia y reactivación característica de las infecciones por herpesvirus.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 135.',
  tags:['infección por herpesvirus','latencia y reactivación']
},
{
  id:'U11-PI-Q13', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Tuberculosis en la práctica clínica', sub:'Presentación clásica de la tuberculosis pulmonar',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se presenta clásicamente la tuberculosis pulmonar?',
  ops:[
    'Tos persistente de más de dos a tres semanas de duración, con frecuencia acompañada de expectoración, pérdida de peso, sudoración nocturna, y fiebre de bajo grado', 'Fiebre alta de inicio súbito, sin ningún síntoma respiratorio asociado durante todo el curso de la enfermedad', 'Tos de inicio agudo, de menos de una semana de duración, sin ningún síntoma constitucional asociado', 'La tuberculosis pulmonar no tiene ninguna presentación clínica clásica reconocida en la práctica clínica'],
  ok:0,
  clave:'Tos persistente de más de dos a tres semanas de duración, con frecuencia acompañada de expectoración, pérdida de peso, sudoración nocturna, y fiebre de bajo grado.',
  exp:'La tuberculosis pulmonar se caracteriza clásicamente por tos persistente de más de dos a tres semanas, con frecuencia acompañada de expectoración, pérdida de peso, sudoración nocturna, y fiebre de bajo grado.',
  no:{
    1:'La tuberculosis pulmonar sí presenta síntomas respiratorios significativos, principalmente tos persistente.',
    2:'La tuberculosis se caracteriza por tos PERSISTENTE de varias semanas, no un cuadro agudo de menos de una semana.',
    3:'La tuberculosis pulmonar sí tiene una presentación clínica clásica bien reconocida en la práctica clínica.'
  },
  trampa:'Confundir la presentación prolongada y constitucional de la tuberculosis con un cuadro respiratorio agudo de corta duración.',
  obj:'Identificar la presentación clínica clásica de la tuberculosis pulmonar.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 249.',
  tags:['tuberculosis pulmonar','presentación clásica']
},
{
  id:'U11-PI-Q14', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Tuberculosis en la práctica clínica', sub:'Doble función de la baciloscopia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple la baciloscopia además de ser la herramienta diagnóstica de primera línea?',
  ops:[
    'Cumple una función de seguimiento del tratamiento, permitiendo verificar la respuesta terapéutica y confirmar la conversión de positivo a negativo', 'La baciloscopia únicamente tiene utilidad diagnóstica inicial, sin ninguna aplicación posterior durante el seguimiento del tratamiento', 'La baciloscopia nunca puede repetirse durante el curso del tratamiento antituberculoso de un paciente', 'La baciloscopia es exclusivamente una herramienta de investigación, sin ninguna aplicación clínica práctica real'],
  ok:0,
  clave:'Cumple una función de seguimiento del tratamiento, permitiendo verificar la respuesta terapéutica y confirmar la conversión de positivo a negativo.',
  exp:'La baciloscopia también cumple una función de seguimiento del tratamiento: repetir el estudio durante el curso del tratamiento permite verificar la respuesta terapéutica y confirmar la conversión de un resultado inicialmente positivo hacia uno negativo.',
  no:{
    1:'Es precisamente lo contrario: la baciloscopia SÍ tiene una aplicación posterior de seguimiento durante el tratamiento.',
    2:'Es precisamente lo contrario: la baciloscopia SÍ puede y debe repetirse durante el curso del tratamiento antituberculoso.',
    3:'La baciloscopia sí tiene una aplicación clínica práctica directa, tanto diagnóstica como de seguimiento.'
  },
  trampa:'Limitar la utilidad de la baciloscopia a su función diagnóstica inicial, sin reconocer su valor adicional en el seguimiento del tratamiento.',
  obj:'Explicar la doble función de la baciloscopia: diagnóstica y de seguimiento del tratamiento.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 249.',
  tags:['baciloscopia','seguimiento del tratamiento']
},
{
  id:'U11-PI-Q15', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Tuberculosis en la práctica clínica', sub:'Por qué el esquema combina varios fármacos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el esquema de tratamiento antituberculoso combina varios fármacos en vez de usar uno solo?',
  ops:[
    'Para prevenir el desarrollo de resistencia bacteriana, que ocurriría con mayor facilidad si se usara un único fármaco de forma aislada', 'La combinación de varios fármacos nunca tiene ninguna relación real con la prevención de resistencia bacteriana', 'Un único fármaco administrado de forma aislada siempre previene el desarrollo de resistencia bacteriana de igual forma', 'El esquema de tratamiento antituberculoso utiliza siempre un único fármaco, sin ninguna combinación de medicamentos'],
  ok:0,
  clave:'Para prevenir el desarrollo de resistencia bacteriana, que ocurriría con mayor facilidad si se usara un único fármaco de forma aislada.',
  exp:'El esquema combina varios fármacos, diseñado específicamente para prevenir el desarrollo de resistencia bacteriana, que ocurriría con mayor facilidad si se usara un único fármaco de forma aislada.',
  no:{
    1:'La combinación de fármacos sí tiene una relación directa y central con la prevención de resistencia bacteriana.',
    2:'Es precisamente lo contrario: un único fármaco aislado FAVORECE, no previene, el desarrollo de resistencia bacteriana.',
    3:'Es precisamente lo contrario: el esquema combina VARIOS fármacos, no utiliza uno solo de forma aislada.'
  },
  trampa:'Asumir que un único fármaco antituberculoso sería igual de efectivo para prevenir resistencia que un esquema combinado.',
  obj:'Explicar por qué el esquema de tratamiento antituberculoso combina varios fármacos.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 249.',
  tags:['esquema de tratamiento antituberculoso','prevención de resistencia']
},
{
  id:'U11-PI-Q16', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Tuberculosis en la práctica clínica', sub:'Riesgo de la interrupción prematura del tratamiento',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente en tratamiento antituberculoso se siente clínicamente mejor a las pocas semanas de iniciar el esquema y decide suspender el tratamiento por su cuenta, sin completar el esquema completo indicado.',
  enunciado:'¿Qué riesgo conlleva esta interrupción prematura, según lo visto en este tema?',
  ops:[
    'Favorece tanto la recaída de la enfermedad como el desarrollo de cepas resistentes a los fármacos de primera línea', 'Esta interrupción no conlleva ningún riesgo real, ya que sentirse clínicamente mejor confirma la curación completa de la enfermedad', 'La interrupción prematura del tratamiento antituberculoso nunca favorece el desarrollo de resistencia bacteriana', 'Sentirse clínicamente mejor a las pocas semanas siempre indica que el tratamiento completo ya no es necesario'],
  ok:0,
  clave:'Favorece tanto la recaída de la enfermedad como el desarrollo de cepas resistentes a los fármacos de primera línea.',
  exp:'La interrupción prematura del tratamiento -incluso cuando el paciente se siente clínicamente mejor mucho antes de completar el esquema- favorece tanto la recaída de la enfermedad como el desarrollo de cepas resistentes a los fármacos de primera línea.',
  no:{
    1:'Esta interrupción sí conlleva un riesgo real: sentirse mejor no equivale a curación completa de la tuberculosis.',
    2:'Es precisamente lo contrario: la interrupción prematura SÍ favorece el desarrollo de resistencia bacteriana.',
    3:'Sentirse clínicamente mejor no indica que el tratamiento completo ya no sea necesario; debe completarse el esquema indicado.'
  },
  trampa:'Asumir que la mejoría clínica temprana durante el tratamiento antituberculoso indica que ya no es necesario completar el esquema completo.',
  obj:'Aplicar el riesgo de la interrupción prematura del tratamiento antituberculoso.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 249.',
  tags:['esquema de tratamiento antituberculoso','riesgo de interrupción prematura']
},
{
  id:'U11-PI-Q17', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'VIH/SIDA', sub:'Curso natural de la infección por VIH sin tratamiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el curso natural de la infección por VIH sin tratamiento?',
  ops:[
    'Desde una infección aguda inicial (con frecuencia asintomática), pasando por una fase crónica de duración variable, hasta eventualmente el síndrome de inmunodeficiencia adquirida en su fase más avanzada', 'La infección por VIH sin tratamiento siempre progresa de forma inmediata hacia el SIDA, sin ninguna fase intermedia identificable', 'La infección aguda por VIH siempre genera síntomas evidentes y fácilmente reconocibles en toda persona infectada', 'El curso natural de la infección por VIH sin tratamiento no sigue ningún patrón identificable ni progresivo'],
  ok:0,
  clave:'Desde una infección aguda inicial (con frecuencia asintomática), pasando por una fase crónica de duración variable, hasta eventualmente el síndrome de inmunodeficiencia adquirida en su fase más avanzada.',
  exp:'Sin tratamiento, el curso natural progresa desde una infección aguda inicial (con frecuencia asintomática o con síntomas inespecíficos poco reconocidos), pasando por una fase crónica de duración variable, hasta eventualmente el SIDA en su fase más avanzada.',
  no:{
    1:'Es precisamente lo contrario: existe una fase crónica intermedia antes de progresar hacia el SIDA, no una progresión inmediata.',
    2:'Es precisamente lo contrario: la infección aguda con frecuencia es ASINTOMÁTICA o con síntomas poco reconocidos.',
    3:'El curso natural sí sigue un patrón identificable y progresivo bien descrito en la literatura infectológica.'
  },
  trampa:'Asumir que la infección aguda por VIH siempre es sintomática y evidente, o que progresa de inmediato hacia el SIDA sin fases intermedias.',
  obj:'Explicar el curso natural de la infección por VIH sin tratamiento.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 118.',
  tags:['infección por VIH','curso natural sin tratamiento']
},
{
  id:'U11-PI-Q18', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'VIH/SIDA', sub:'Por qué el tamizaje activo de VIH es particularmente relevante',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el tamizaje activo de VIH es particularmente relevante, más allá de la evaluación reactiva ante síntomas?',
  ops:[
    'Porque la infección aguda con frecuencia pasa desapercibida clínicamente, y una persona no diagnosticada puede transmitir el virus sin saberlo, además de perder la oportunidad de tratamiento oportuno', 'El tamizaje activo de VIH nunca tiene ninguna relevancia real más allá de la evaluación reactiva ante síntomas evidentes', 'La infección aguda por VIH siempre es fácilmente reconocible clínicamente, sin ninguna posibilidad real de pasar desapercibida', 'Una persona con infección por VIH no diagnosticada nunca puede transmitir el virus a otras personas'],
  ok:0,
  clave:'Porque la infección aguda con frecuencia pasa desapercibida clínicamente, y una persona no diagnosticada puede transmitir el virus sin saberlo, además de perder la oportunidad de tratamiento oportuno.',
  exp:'El tamizaje activo es particularmente relevante porque la infección aguda con frecuencia pasa desapercibida clínicamente, y una persona no diagnosticada puede transmitir el virus a otras personas sin saberlo, además de perder la oportunidad de un tratamiento oportuno.',
  no:{
    1:'El tamizaje activo sí tiene una relevancia real y central, precisamente por la naturaleza con frecuencia asintomática de la infección aguda.',
    2:'Es precisamente lo contrario: la infección aguda por VIH con frecuencia PASA DESAPERCIBIDA clínicamente.',
    3:'Una persona no diagnosticada sí puede transmitir el virus durante todo el periodo sin saberlo que está infectada.'
  },
  trampa:'Asumir que la infección aguda por VIH siempre es sintomática y evidente, sin necesidad de tamizaje activo en poblaciones de riesgo.',
  obj:'Explicar la relevancia del tamizaje activo de VIH más allá de la evaluación reactiva ante síntomas.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 118.',
  tags:['infección por VIH','relevancia del tamizaje activo']
},
{
  id:'U11-PI-Q19', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'VIH/SIDA', sub:'Qué mide el conteo de CD4',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué mide el conteo de CD4 en una persona con infección por VIH?',
  ops:[
    'La cantidad de linfocitos T CD4 circulantes, un marcador central del grado de compromiso inmunológico', 'El nivel de carga viral de VIH presente en la sangre del paciente, sin ninguna relación con los linfocitos T CD4', 'La cantidad de anticuerpos específicos contra el VIH presentes en el organismo del paciente', 'El conteo de CD4 no tiene ninguna relación real con el grado de compromiso inmunológico del paciente'],
  ok:0,
  clave:'La cantidad de linfocitos T CD4 circulantes, un marcador central del grado de compromiso inmunológico.',
  exp:'El conteo de CD4 es la medición de linfocitos T CD4 circulantes, un marcador central para evaluar el grado de compromiso inmunológico de una persona con infección por VIH.',
  no:{
    1:'Esta descripción corresponde a la carga viral, un marcador distinto al conteo de CD4.',
    2:'Esta descripción corresponde a un estudio serológico distinto, no al conteo de CD4 propiamente dicho.',
    3:'El conteo de CD4 sí tiene una relación directa y central con el grado de compromiso inmunológico del paciente.'
  },
  trampa:'Confundir el conteo de CD4 con otros marcadores como la carga viral o los anticuerpos específicos contra el VIH.',
  obj:'Definir qué mide el conteo de CD4 en una persona con infección por VIH.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 118.',
  tags:['conteo de CD4','marcador de compromiso inmunológico']
},
{
  id:'U11-PI-Q20', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'VIH/SIDA', sub:'Cambio de paradigma en el momento de iniciar terapia antirretroviral',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué cambio de paradigma representa la recomendación actual de iniciar terapia antirretroviral tan pronto como se confirma el diagnóstico de VIH?',
  ops:[
    'Un cambio respecto a enfoques anteriores que esperaban un mayor deterioro inmunológico antes de iniciar tratamiento, retomando el valor de la intervención temprana', 'La terapia antirretroviral siempre se ha recomendado iniciar solo después de un deterioro inmunológico significativo, sin ningún cambio histórico', 'Este enfoque actual nunca ha representado ningún cambio real respecto a las recomendaciones de tratamiento anteriores', 'Iniciar la terapia antirretroviral tempranamente nunca ha demostrado ninguna ventaja real frente a esperar más deterioro'],
  ok:0,
  clave:'Un cambio respecto a enfoques anteriores que esperaban un mayor deterioro inmunológico antes de iniciar tratamiento, retomando el valor de la intervención temprana.',
  exp:'Se recomienda iniciar terapia antirretroviral tan pronto como se confirma el diagnóstico, sin importar el conteo de CD4 -un cambio de paradigma respecto a enfoques anteriores que esperaban mayor deterioro inmunológico, retomando el valor de la intervención temprana.',
  no:{
    1:'Es precisamente lo contrario: el enfoque ACTUAL recomienda iniciar temprano, a diferencia de enfoques anteriores que esperaban.',
    2:'Sí ha existido un cambio histórico real en el momento recomendado para iniciar la terapia antirretroviral.',
    3:'El inicio temprano sí ha demostrado una ventaja real, siendo la base del cambio de paradigma actual en el manejo del VIH.'
  },
  trampa:'Asumir que la recomendación de iniciar terapia antirretroviral siempre ha sido la misma, sin reconocer el cambio de paradigma hacia el inicio temprano.',
  obj:'Explicar el cambio de paradigma hacia el inicio temprano de la terapia antirretroviral.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 118.',
  tags:['terapia antirretroviral','cambio de paradigma hacia inicio temprano']
},
{
  id:'U11-PI-Q21', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'VIH/SIDA', sub:'Trayectoria del conteo de CD4 más que un valor aislado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el seguimiento seriado del conteo de CD4, más que un valor aislado, es más informativo para evaluar la evolución de un paciente con VIH?',
  ops:[
    'Porque permite evaluar si la infección está progresando, si el tratamiento está siendo efectivo, o si existe una falla terapéutica que amerita ajuste del esquema', 'Un valor aislado del conteo de CD4 siempre aporta exactamente la misma información clínica que el seguimiento seriado en el tiempo', 'El seguimiento seriado del conteo de CD4 nunca aporta ninguna información adicional relevante sobre la respuesta al tratamiento', 'La trayectoria del conteo de CD4 en el tiempo nunca tiene ninguna relación real con la efectividad de la terapia antirretroviral'],
  ok:0,
  clave:'Porque permite evaluar si la infección está progresando, si el tratamiento está siendo efectivo, o si existe una falla terapéutica que amerita ajuste del esquema.',
  exp:'El seguimiento seriado del conteo de CD4 permite evaluar si la infección está progresando, si el tratamiento está siendo efectivo (con recuperación progresiva esperada), o si existe una falla terapéutica que amerita ajuste del esquema.',
  no:{
    1:'Es precisamente lo contrario: el seguimiento en el tiempo aporta más información que un valor aislado.',
    2:'El seguimiento seriado sí aporta información adicional relevante sobre la respuesta al tratamiento antirretroviral.',
    3:'La trayectoria del conteo de CD4 sí tiene una relación directa con la evaluación de la efectividad del tratamiento.'
  },
  trampa:'Confiar únicamente en un valor aislado del conteo de CD4, sin considerar su trayectoria en el tiempo como indicador más informativo.',
  obj:'Explicar por qué el seguimiento seriado del conteo de CD4 es más informativo que un valor aislado.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 118.',
  tags:['conteo de CD4','trayectoria en el tiempo']
},
{
  id:'U11-PI-Q22', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Infecciones bacterianas comunes', sub:'Diferencia entre celulitis y erisipela',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia clínica distingue a la celulitis de la erisipela?',
  ops:[
    'La celulitis tiene bordes generalmente mal definidos, mientras la erisipela, más superficial, tiene bordes más nítidamente delimitados', 'Ambas condiciones son exactamente idénticas en su presentación clínica, sin ninguna diferencia real que amerite distinguirlas', 'La celulitis siempre tiene bordes nítidamente delimitados, y la erisipela siempre tiene bordes mal definidos', 'La erisipela es una infección más profunda que la celulitis, afectando siempre estructuras musculares subyacentes'],
  ok:0,
  clave:'La celulitis tiene bordes generalmente mal definidos, mientras la erisipela, más superficial, tiene bordes más nítidamente delimitados.',
  exp:'La celulitis se presenta con bordes generalmente mal definidos, a diferencia de la erisipela, una infección relacionada pero más superficial, con bordes más nítidamente delimitados.',
  no:{
    1:'Son condiciones con presentaciones clínicas distintas, según la profundidad de la infección y la definición de sus bordes.',
    2:'Está invertido: la CELULITIS tiene bordes mal definidos, y la ERISIPELA bordes nítidos, no al revés.',
    3:'Es precisamente lo contrario: la erisipela es MÁS SUPERFICIAL que la celulitis, no más profunda.'
  },
  trampa:'Invertir las características distintivas de la celulitis (bordes mal definidos) y la erisipela (bordes nítidos, más superficial).',
  obj:'Distinguir la celulitis de la erisipela según sus características clínicas.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 195.',
  tags:['celulitis bacteriana','diferencia con erisipela']
},
{
  id:'U11-PI-Q23', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Infecciones virales comunes', sub:'Riesgo del uso de aminopenicilinas en mononucleosis mal diagnosticada',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con faringitis, en realidad causada por mononucleosis infecciosa, es diagnosticado erróneamente como una faringitis bacteriana y recibe tratamiento con una aminopenicilina.',
  enunciado:'¿Qué consecuencia clínica puede generar este error de diagnóstico, según lo visto en este tema?',
  ops:[
    'Puede desencadenar una erupción cutánea característica asociada al uso de aminopenicilinas en el contexto de mononucleosis mal diagnosticada', 'Este error de diagnóstico nunca genera ninguna consecuencia clínica real diferenciable en el paciente afectado', 'Las aminopenicilinas siempre son efectivas para tratar la mononucleosis infecciosa, sin ningún riesgo asociado a su uso', 'La mononucleosis infecciosa nunca puede confundirse clínicamente con una faringitis de origen bacteriano'],
  ok:0,
  clave:'Puede desencadenar una erupción cutánea característica asociada al uso de aminopenicilinas en el contexto de mononucleosis mal diagnosticada.',
  exp:'Un error clínico documentado es la administración de ciertos antibióticos (particularmente aminopenicilinas) ante una faringitis que en realidad corresponde a mononucleosis mal diagnosticada como bacteriana, lo que puede desencadenar una erupción cutánea característica.',
  no:{
    1:'Este error sí genera una consecuencia clínica real y documentada: la erupción cutánea característica asociada.',
    2:'Es precisamente lo contrario: las aminopenicilinas NO son efectivas contra la mononucleosis (causa viral) y conllevan riesgo.',
    3:'La mononucleosis SÍ puede confundirse clínicamente con una faringitis bacteriana, siendo este el error descrito en este tema.'
  },
  trampa:'Asumir que cualquier faringitis debe tratarse con antibióticos sin distinguir correctamente entre causa bacteriana y viral.',
  obj:'Aplicar el riesgo de administrar aminopenicilinas ante una mononucleosis infecciosa mal diagnosticada como bacteriana.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 135.',
  tags:['mononucleosis infecciosa','riesgo de aminopenicilinas']
},
{
  id:'U11-PI-Q24', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Tuberculosis en la práctica clínica', sub:'Vía de transmisión de la tuberculosis pulmonar',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la vía principal de transmisión de la tuberculosis pulmonar?',
  ops:[
    'Vía aérea, a través de gotas respiratorias expulsadas por una persona con enfermedad activa', 'Vía fecal-oral, mediante contaminación de agua o alimentos por materia fecal contaminada', 'Transmisión exclusivamente por vectores como mosquitos, sin ninguna relación con la vía respiratoria', 'La tuberculosis pulmonar no tiene ninguna vía de transmisión específica identificada clínicamente'],
  ok:0,
  clave:'Vía aérea, a través de gotas respiratorias expulsadas por una persona con enfermedad activa.',
  exp:'La transmisión de la tuberculosis pulmonar ocurre principalmente por vía aérea, a través de gotas respiratorias expulsadas por una persona con enfermedad activa.',
  no:{
    1:'La vía fecal-oral corresponde a otras infecciones ya vistas, como la parasitosis intestinal, no a la tuberculosis pulmonar.',
    2:'La transmisión por vectores corresponde a otras enfermedades como la malaria o el dengue, no a la tuberculosis pulmonar.',
    3:'La tuberculosis pulmonar sí tiene una vía de transmisión específica y bien identificada: la vía aérea.'
  },
  trampa:'Confundir la vía de transmisión aérea de la tuberculosis con otras vías (fecal-oral, por vector) propias de otras infecciones.',
  obj:'Identificar la vía principal de transmisión de la tuberculosis pulmonar.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 249.',
  tags:['tuberculosis pulmonar','vía de transmisión aérea']
},
{
  id:'U11-PI-Q25', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'VIH/SIDA', sub:'Consecuencia de la disminución progresiva de CD4 sin tratamiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué consecuencia tiene la disminución progresiva de linfocitos T CD4 sin tratamiento en una persona con infección por VIH?',
  ops:[
    'Compromete progresivamente la capacidad del cuerpo de defenderse frente a infecciones oportunistas y ciertas neoplasias', 'La disminución de linfocitos T CD4 nunca tiene ninguna consecuencia real sobre la capacidad de defensa del organismo', 'Un conteo bajo de CD4 siempre protege mejor al organismo frente a infecciones oportunistas y neoplasias', 'La disminución de CD4 solo afecta la capacidad de defensa frente a infecciones virales, nunca frente a otras causas'],
  ok:0,
  clave:'Compromete progresivamente la capacidad del cuerpo de defenderse frente a infecciones oportunistas y ciertas neoplasias.',
  exp:'La infección por VIH ataca progresivamente a los linfocitos T CD4, cuya disminución progresiva sin tratamiento va comprometiendo la capacidad del cuerpo de defenderse frente a infecciones oportunistas y ciertas neoplasias.',
  no:{
    1:'La disminución de CD4 sí tiene una consecuencia real y grave sobre la capacidad de defensa inmunológica del organismo.',
    2:'Es precisamente lo contrario: un conteo bajo de CD4 AUMENTA, no protege, el riesgo de infecciones oportunistas y neoplasias.',
    3:'La disminución de CD4 afecta la defensa frente a un amplio espectro de amenazas, no solo infecciones virales.'
  },
  trampa:'Subestimar la consecuencia real de la disminución progresiva de CD4 sobre la capacidad de defensa inmunológica del organismo.',
  obj:'Explicar la consecuencia de la disminución progresiva de CD4 sin tratamiento en la infección por VIH.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 118.',
  tags:['infección por VIH','consecuencia de disminución de CD4']
},
{
  id:'U11-PI-Q26', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Principios de enfermedades infecciosas', sub:'Conexión con determinantes sociales de la salud',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué concepto ya visto en Salud y Comunidad I se conecta directamente la tríada epidemiológica?',
  ops:[
    'Los determinantes sociales de la salud, ya que una enfermedad infecciosa rara vez se explica solo por la presencia de un microorganismo, sino por la combinación de un huésped susceptible en un ambiente que facilita la exposición', 'La tríada epidemiológica no tiene ninguna relación real con ningún concepto ya visto en Salud y Comunidad I', 'El consentimiento informado ya visto en Relación Médico-Paciente, sin ninguna relación real con la tríada epidemiológica', 'La escala de Glasgow ya vista en Neurología, sin ninguna relación real con la tríada epidemiológica'],
  ok:0,
  clave:'Los determinantes sociales de la salud, ya que una enfermedad infecciosa rara vez se explica solo por la presencia de un microorganismo, sino por la combinación de un huésped susceptible en un ambiente que facilita la exposición.',
  exp:'Este modelo retoma directamente la lógica ya vista sobre determinantes sociales de la salud: una enfermedad infecciosa rara vez se explica solo por la presencia de un microorganismo, sino por la combinación específica de un huésped susceptible en un ambiente que facilita la exposición.',
  no:{
    1:'Sí existe una conexión conceptual directa con los determinantes sociales de la salud ya vistos en Salud y Comunidad I.',
    2:'El consentimiento informado es un concepto distinto de relación médico-paciente, sin relación conceptual con la tríada epidemiológica.',
    3:'La escala de Glasgow es una herramienta de evaluación neurológica distinta, sin relación conceptual con la tríada epidemiológica.'
  },
  trampa:'No reconocer la conexión conceptual correcta entre la tríada epidemiológica y los determinantes sociales de la salud ya vistos.',
  obj:'Identificar la conexión entre la tríada epidemiológica y los determinantes sociales de la salud ya vistos.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 1.',
  tags:['tríada epidemiológica','conexión con determinantes sociales']
}

]);
