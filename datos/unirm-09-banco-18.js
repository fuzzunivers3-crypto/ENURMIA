/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE SALUD Y COMUNIDAD I (1/2)
   Amplia Salud y Comunidad I de 1 a 50 preguntas junto con
   unirm-09-banco-19.js. Prefijo U9-SYC- (no U9-SC-, ya usado por
   Semiologia Clinica). Esta parte cubre determinantes sociales de
   la salud y salud comunitaria/atencion primaria (temas 1-2).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== SALUD Y COMUNIDAD I ===================== */
{
  id:'U9-SYC-Q02', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Determinantes sociales de la salud', sub:'Qué son los determinantes sociales',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué son los determinantes sociales de la salud?',
  ops:[
    'Las condiciones en las que las personas nacen, crecen, viven, trabajan y envejecen, que influyen directamente en su estado de salud',
    'Exclusivamente los factores genéticos heredados que determinan la salud de una persona', 'Únicamente los medicamentos disponibles en el sistema de salud de un país', 'Los determinantes sociales no tienen ninguna influencia real y medible sobre el estado de salud de una población'],
  ok:0,
  clave:'Las condiciones en las que las personas nacen, crecen, viven, trabajan y envejecen, que influyen directamente en su estado de salud.',
  exp:'Los determinantes sociales de la salud son las condiciones en las que las personas nacen, crecen, viven, trabajan y envejecen, y que influyen directamente en su estado de salud: el ingreso económico, la educación, la vivienda, el acceso a agua potable y saneamiento, las condiciones de trabajo, el entorno social y el acceso a los propios servicios de salud.',
  no:{
    1:'Los determinantes sociales son distintos de los factores genéticos; se refieren a condiciones sociales y ambientales, no a la herencia biológica.',
    2:'Los determinantes sociales abarcan mucho más que los medicamentos disponibles; incluyen ingreso, educación, vivienda y otros factores sociales.',
    3:'Los determinantes sociales sí tienen una influencia real y bien documentada, explicando una proporción mayor de la salud poblacional que la atención médica sola.'
  },
  trampa:'Confundir los determinantes sociales con factores puramente biológicos o médicos, sin reconocer su alcance social y ambiental amplio.',
  obj:'Definir los determinantes sociales de la salud.',
  ref:'OMS, Comisión sobre Determinantes Sociales de la Salud, informe final.',
  tags:['determinante social','condiciones de vida','definición']
},
{
  id:'U9-SYC-Q03', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Determinantes sociales de la salud', sub:'Impacto mayor que la atención médica sola',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué muestra la evidencia acumulada en salud pública sobre el peso relativo de los determinantes sociales frente a la atención médica en la salud de una población?',
  ops:[
    'Que los determinantes sociales explican una proporción mayor de la salud de una población que la atención médica por sí sola',
    'Que la atención médica por sí sola explica siempre una proporción mayor de la salud poblacional que cualquier determinante social', 'Que los determinantes sociales y la atención médica tienen exactamente el mismo peso relativo en todos los casos', 'Que la evidencia científica no ha logrado establecer ninguna comparación real entre estos dos factores'],
  ok:0,
  clave:'Que los determinantes sociales explican una proporción mayor de la salud de una población que la atención médica por sí sola.',
  exp:'La evidencia acumulada en salud pública muestra, de forma consistente, que los determinantes sociales de la salud explican una proporción mayor de la salud de una población que la atención médica por sí sola -un hallazgo con implicaciones importantes para cómo se diseñan las políticas de salud pública, que no pueden centrarse exclusivamente en mejorar el sistema médico.',
  no:{
    1:'Es precisamente lo contrario: los DETERMINANTES SOCIALES explican una proporción mayor de la salud poblacional que la atención médica sola.',
    2:'La evidencia muestra un peso relativo distinto entre ambos factores, no una equivalencia exacta en todos los casos.',
    3:'Sí existe evidencia consistente y bien documentada sobre esta comparación, ampliamente estudiada en salud pública.'
  },
  trampa:'Invertir el peso relativo entre determinantes sociales y atención médica, o subestimar la evidencia acumulada sobre este hallazgo.',
  obj:'Explicar el hallazgo de que los determinantes sociales explican más la salud poblacional que la atención médica sola.',
  ref:'OMS, Comisión sobre Determinantes Sociales de la Salud, informe final.',
  tags:['peso relativo','determinantes sociales','atención médica']
},
{
  id:'U9-SYC-Q04', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Determinantes sociales de la salud', sub:'Desierto alimentario y complicaciones de diabetes',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Dos pacientes tienen el mismo diagnóstico de diabetes y reciben la misma indicación médica. Uno vive en una zona sin acceso regular a alimentos frescos, sin dinero estable para su insulina y sin transporte confiable a sus citas; el otro tiene ingresos estables, buen acceso a alimentos y transporte propio.',
  enunciado:'¿Por qué el primer paciente tiene un riesgo mucho mayor de complicaciones, pese a compartir el mismo diagnóstico e indicación médica?',
  ops:[
    'Porque los determinantes sociales de su entorno (acceso a alimentos, estabilidad económica, transporte) afectan directamente su capacidad real de seguir el tratamiento indicado',
    'No existe ninguna diferencia real de riesgo entre ambos pacientes si comparten el mismo diagnóstico e indicación médica', 'La diferencia de riesgo se debe exclusivamente a factores genéticos distintos entre ambos pacientes', 'El riesgo depende únicamente de la gravedad inicial del diagnóstico, sin relación con las condiciones de vida'],
  ok:0,
  clave:'Los determinantes sociales de su entorno afectan directamente su capacidad real de seguir el tratamiento indicado.',
  exp:'Una persona con diabetes que vive en un "desierto alimentario", sin dinero estable para comprar su insulina todos los meses, y sin transporte confiable para llegar a sus citas de control, tiene un riesgo mucho mayor de complicaciones que otra persona con el MISMO diagnóstico pero con ingresos estables, buen acceso a alimentos y transporte propio, incluso si ambas reciben, en teoría, la misma indicación médica -los determinantes sociales explican esta diferencia real de desenlace.',
  no:{
    1:'Sí existe una diferencia real de riesgo entre ambos pacientes, explicada precisamente por sus determinantes sociales distintos.',
    2:'La diferencia descrita en el caso se explica por determinantes sociales (acceso, ingreso, transporte), no por una diferencia genética entre los pacientes.',
    3:'El riesgo también depende de las condiciones de vida que afectan la capacidad real de seguir el tratamiento, no solo de la gravedad inicial del diagnóstico.'
  },
  trampa:'Asumir que dos pacientes con el mismo diagnóstico y misma indicación médica tendrán el mismo desenlace, sin considerar el impacto de sus determinantes sociales distintos.',
  obj:'Aplicar el concepto de determinantes sociales para explicar diferencias de desenlace entre pacientes con el mismo diagnóstico.',
  ref:'OMS, Comisión sobre Determinantes Sociales de la Salud, informe final.',
  tags:['desierto alimentario','diabetes','determinantes sociales aplicados']
},
{
  id:'U9-SYC-Q05', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Determinantes sociales de la salud', sub:'Inequidad vs. diferencia biológica aleatoria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué distingue a una "inequidad en salud" de una simple diferencia en salud entre dos personas?',
  ops:[
    'La inequidad es una diferencia que además es evitable, injusta y sistemática, repitiéndose de forma predecible según el grupo social al que pertenece una persona',
    'No existe ninguna diferencia conceptual real entre una inequidad en salud y cualquier otra diferencia de salud', 'Una inequidad en salud es simplemente cualquier diferencia de salud causada por el azar biológico entre individuos', 'Toda diferencia de salud entre dos personas, sin excepción, se considera automáticamente una inequidad'],
  ok:0,
  clave:'La inequidad es una diferencia que además es evitable, injusta y sistemática, repitiéndose de forma predecible según el grupo social.',
  exp:'No toda diferencia en salud es una inequidad. Una inequidad en salud es una diferencia que además es evitable, injusta y sistemática: se repite de forma predecible según el grupo social al que pertenece una persona (su ingreso, su zona de residencia, su nivel educativo), y no responde solo al azar biológico.',
  no:{
    1:'Sí existe una diferencia conceptual central: la inequidad requiere ser evitable, injusta y sistemática, no cualquier diferencia cualifica como tal.',
    2:'Es precisamente lo contrario: una diferencia causada por el AZAR biológico no se considera una inequidad, que requiere ser sistemática y social.',
    3:'No toda diferencia de salud es automáticamente una inequidad; se requieren los criterios específicos de evitabilidad, injusticia y sistematicidad.'
  },
  trampa:'Confundir cualquier diferencia de salud (incluida la variabilidad biológica natural) con una inequidad en salud, que requiere criterios específicos adicionales.',
  obj:'Distinguir una inequidad en salud de una simple diferencia biológica entre personas.',
  ref:'OMS, Comisión sobre Determinantes Sociales de la Salud, informe final.',
  tags:['inequidad en salud','diferencia sistemática','criterios de inequidad']
},
{
  id:'U9-SYC-Q06', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Determinantes sociales de la salud', sub:'Preguntar por las condiciones del paciente',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico indica un medicamento costoso de uso diario a un paciente, sin preguntar si tiene forma sostenida de pagarlo mes a mes.',
  enunciado:'¿Qué riesgo real tiene esta conducta para la efectividad del plan de tratamiento?',
  ops:[
    'De poco sirve indicar un medicamento costoso a diario si la persona no tiene forma sostenida de pagarlo, comprometiendo la adherencia real al tratamiento',
    'La capacidad económica del paciente nunca tiene relación real con la efectividad de un plan de tratamiento indicado', 'Preguntar sobre la capacidad de pago del paciente está fuera del rol clínico apropiado del médico tratante', 'Todo paciente, sin importar su situación económica, siempre encuentra la forma de costear cualquier medicamento indicado'],
  ok:0,
  clave:'De poco sirve indicar un medicamento costoso a diario si la persona no tiene forma sostenida de pagarlo, comprometiendo la adherencia real.',
  exp:'Reconocer un determinante social relevante en un paciente concreto cambia, en la práctica, cómo se plantea un plan de tratamiento: de poco sirve indicar un medicamento costoso a diario si la persona no tiene forma sostenida de pagarlo, y un buen clínico tiene que preguntar por esas condiciones, no darlas por sentadas -preguntar de rutina sobre esto no es salirse del rol médico, es parte de un plan de tratamiento realista.',
  no:{
    1:'La capacidad económica del paciente sí tiene una relación directa con la adherencia real al tratamiento, un factor clínicamente relevante.',
    2:'Preguntar sobre la capacidad de pago SÍ es parte del rol clínico apropiado, precisamente para diseñar un plan de tratamiento realista.',
    3:'No todos los pacientes pueden costear cualquier medicamento indicado; asumir esto sin preguntar puede comprometer seriamente la adherencia real.'
  },
  trampa:'Asumir que la capacidad de pago del paciente no es responsabilidad clínica del médico, o que todos los pacientes siempre logran costear el tratamiento indicado.',
  obj:'Explicar por qué preguntar sobre las condiciones de vida del paciente es parte de un plan de tratamiento realista.',
  ref:'OMS, Comisión sobre Determinantes Sociales de la Salud, informe final.',
  tags:['adherencia al tratamiento','capacidad de pago','pregunta clínica de rutina']
},
{
  id:'U9-SYC-Q07', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Determinantes sociales de la salud', sub:'Ejemplos concretos de determinantes sociales',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de las siguientes opciones es un ejemplo de determinante social de la salud?',
  ops:['El acceso a agua potable y saneamiento', 'El grupo sanguíneo heredado de un individuo', 'La estructura molecular específica de un medicamento', 'El resultado de un examen de laboratorio en particular'],
  ok:0,
  clave:'El acceso a agua potable y saneamiento es un determinante social de la salud.',
  exp:'Los determinantes sociales de la salud incluyen el ingreso económico, la educación, la vivienda, el acceso a agua potable y saneamiento, las condiciones de trabajo, el entorno social y el acceso a los servicios de salud -condiciones sociales y ambientales que influyen en la salud, distintas de factores puramente biológicos o técnicos.',
  no:{
    1:'El grupo sanguíneo es un factor biológico heredado, no un determinante social de la salud.',
    2:'La estructura molecular de un medicamento es un factor farmacológico técnico, no un determinante social.',
    3:'Un resultado de laboratorio específico es un dato clínico individual, no un determinante social de la salud.'
  },
  trampa:'Confundir factores biológicos o técnicos individuales con determinantes sociales, que son condiciones ambientales y sociales más amplias.',
  obj:'Identificar un ejemplo válido de determinante social de la salud.',
  ref:'OMS, Comisión sobre Determinantes Sociales de la Salud, informe final.',
  tags:['determinante social','ejemplo concreto','agua potable']
},
{
  id:'U9-SYC-Q08', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Determinantes sociales de la salud', sub:'Implicación práctica de una inequidad sistemática',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué distinguir una diferencia biológica aleatoria de una inequidad sistemática tiene una implicación práctica importante para las políticas de salud?',
  ops:[
    'Porque una diferencia biológica aleatoria no exige, por sí sola, una intervención de política pública, mientras que una inequidad sistemática sí, al sugerir una causa estructural corregible',
    'Esta distinción no tiene ninguna implicación práctica real para el diseño de políticas de salud pública', 'Ambos tipos de diferencia siempre requieren exactamente la misma intervención de política pública', 'Una diferencia biológica aleatoria siempre requiere una intervención de política pública más urgente que una inequidad sistemática'],
  ok:0,
  clave:'Una diferencia biológica aleatoria no exige, por sí sola, una intervención de política pública, mientras que una inequidad sistemática sí, al sugerir una causa estructural corregible.',
  exp:'Distinguir una diferencia de una inequidad tiene una implicación práctica importante: una diferencia biológica aleatoria no exige, por sí sola, una intervención de política pública, mientras que una inequidad sistemática sí -porque su patrón predecible según el grupo social sugiere una causa estructural corregible, no solo variabilidad natural entre individuos.',
  no:{
    1:'Esta distinción sí tiene una implicación práctica central, precisamente para decidir cuándo una diferencia amerita intervención de política pública.',
    2:'Ambos tipos de diferencia no requieren la misma respuesta; la inequidad sistemática justifica intervención estructural, la aleatoria no necesariamente.',
    3:'Es al revés: la inequidad SISTEMÁTICA es la que sugiere una causa estructural corregible que amerita intervención, no la diferencia biológica aleatoria.'
  },
  trampa:'No reconocer la implicación práctica de distinguir entre variabilidad biológica natural e inequidad sistemática para el diseño de políticas de salud.',
  obj:'Explicar la implicación práctica de distinguir una diferencia biológica aleatoria de una inequidad sistemática.',
  ref:'OMS, Comisión sobre Determinantes Sociales de la Salud, informe final.',
  tags:['implicación de política pública','causa estructural','inequidad sistemática']
},
{
  id:'U9-SYC-Q09', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Determinantes sociales de la salud', sub:'La pregunta activa como parte del plan de tratamiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se considera que preguntar activamente por las condiciones de vida del paciente no es un desvío de la práctica clínica?',
  ops:[
    'Porque es parte integral de diseñar un plan de tratamiento realista, que tenga alguna posibilidad real de cumplirse en la vida cotidiana concreta de esa persona',
    'Preguntar por las condiciones de vida del paciente siempre es un desvío innecesario que no aporta ningún valor clínico real', 'Esta pregunta solo debería hacerla un trabajador social, nunca un médico durante la consulta clínica', 'Las condiciones de vida del paciente no tienen ninguna relación con si el plan de tratamiento se cumplirá o no'],
  ok:0,
  clave:'Es parte integral de diseñar un plan de tratamiento realista, que tenga alguna posibilidad real de cumplirse en la vida cotidiana concreta de esa persona.',
  exp:'Esta pregunta activa por las condiciones de vida del paciente no es un desvío de la práctica clínica; es parte integral de diseñar un plan de tratamiento realista, que tenga alguna posibilidad real de cumplirse fuera del consultorio, en la vida cotidiana concreta de esa persona.',
  no:{
    1:'Preguntar por las condiciones de vida sí aporta valor clínico real, al permitir diseñar un plan de tratamiento realmente aplicable.',
    2:'Aunque un trabajador social también puede abordar esto, el médico tiene un rol directo en preguntar sobre condiciones que afectan la adherencia clínica.',
    3:'Las condiciones de vida del paciente sí tienen una relación directa con si el plan de tratamiento indicado se podrá cumplir en la práctica.'
  },
  trampa:'Asumir que preguntar por las condiciones de vida del paciente está fuera del rol clínico, o que no tiene relación con el cumplimiento real del tratamiento.',
  obj:'Explicar por qué preguntar por las condiciones de vida del paciente es parte integral de la práctica clínica.',
  ref:'OMS, Comisión sobre Determinantes Sociales de la Salud, informe final.',
  tags:['plan de tratamiento realista','rol clínico','pregunta activa']
},
{
  id:'U9-SYC-Q10', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Determinantes sociales de la salud', sub:'Determinantes sociales en un contexto individual',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con hipertensión no ha logrado controlar su presión arterial pese a recibir el tratamiento farmacológico adecuado, y el médico decide investigar su situación laboral y de vivienda.',
  enunciado:'¿Qué justifica esta decisión del médico de investigar factores aparentemente ajenos al tratamiento farmacológico directo?',
  ops:[
    'Que factores como el estrés laboral crónico o condiciones de vivienda inadecuadas son determinantes sociales que pueden explicar por qué el tratamiento no está funcionando como se esperaba',
    'Esta decisión del médico no tiene ninguna justificación clínica real ni relación con el control de la presión arterial', 'El control de la presión arterial depende exclusivamente del tratamiento farmacológico, sin ninguna influencia de factores externos', 'Investigar la situación laboral y de vivienda del paciente es responsabilidad exclusiva de otro tipo de profesional, nunca del médico'],
  ok:0,
  clave:'Factores como el estrés laboral crónico o condiciones de vivienda inadecuadas son determinantes sociales que pueden explicar por qué el tratamiento no está funcionando.',
  exp:'Reconocer un determinante social relevante en un paciente concreto cambia, en la práctica, cómo se plantea un plan de tratamiento: factores como el estrés laboral crónico o condiciones de vivienda inadecuadas son determinantes sociales que pueden explicar por qué un tratamiento farmacológico adecuado no logra el control esperado, justificando que el médico investigue más allá del fármaco en sí.',
  no:{
    1:'Esta decisión sí tiene una justificación clínica real, relacionada con el impacto de los determinantes sociales sobre la efectividad del tratamiento.',
    2:'El control de la presión arterial puede verse afectado por factores externos como el estrés laboral, no depende exclusivamente del fármaco.',
    3:'Investigar estos factores es parte razonable del rol clínico del médico, no una responsabilidad exclusiva de otro tipo de profesional.'
  },
  trampa:'Asumir que el control de una condición crónica depende exclusivamente del tratamiento farmacológico, sin considerar la influencia de determinantes sociales.',
  obj:'Aplicar el concepto de determinantes sociales para explicar la falta de control de una condición crónica pese a tratamiento adecuado.',
  ref:'OMS, Comisión sobre Determinantes Sociales de la Salud, informe final.',
  tags:['hipertensión no controlada','estrés laboral','determinantes sociales en la práctica']
},
{
  id:'U9-SYC-Q11', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Determinantes sociales de la salud', sub:'Nivel educativo como determinante social',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el nivel educativo se considera un determinante social de la salud?',
  ops:[
    'Porque influye en las condiciones de vida, el acceso a información sobre salud y las oportunidades laborales, todos factores que afectan el estado de salud a lo largo de la vida',
    'El nivel educativo no tiene ninguna relación real con el estado de salud de una persona a lo largo de su vida', 'El nivel educativo solo afecta la salud de forma indirecta a través de exámenes médicos específicos, sin ninguna otra vía', 'El nivel educativo es exclusivamente un factor económico, sin ninguna relación con las condiciones sociales de vida'],
  ok:0,
  clave:'Influye en las condiciones de vida, el acceso a información sobre salud y las oportunidades laborales, todos factores que afectan el estado de salud.',
  exp:'El nivel educativo es uno de los determinantes sociales de la salud reconocidos, porque influye en las condiciones de vida, el acceso a información sobre salud, la comprensión de indicaciones médicas y las oportunidades laborales -todos factores que, acumulados a lo largo de la vida, afectan de forma significativa el estado de salud de una persona.',
  no:{
    1:'El nivel educativo sí tiene una relación bien documentada con el estado de salud, a través de múltiples vías (información, oportunidades laborales, condiciones de vida).',
    2:'La relación entre educación y salud va más allá de exámenes médicos específicos; incluye acceso a información, comprensión de indicaciones y oportunidades laborales.',
    3:'El nivel educativo es un factor social más amplio, no exclusivamente económico, que influye en múltiples aspectos de las condiciones de vida.'
  },
  trampa:'Subestimar la relación entre nivel educativo y salud, o reducirla a un único mecanismo simple sin reconocer sus múltiples vías de influencia.',
  obj:'Explicar por qué el nivel educativo se considera un determinante social de la salud.',
  ref:'OMS, Comisión sobre Determinantes Sociales de la Salud, informe final.',
  tags:['nivel educativo','determinante social','acceso a información']
},
{
  id:'U9-SYC-Q12', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Determinantes sociales de la salud', sub:'Condiciones de trabajo como determinante social',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las condiciones de trabajo de una persona se consideran un determinante social de su salud?',
  ops:[
    'Porque exposiciones laborales, el nivel de estrés y la estabilidad del empleo influyen directamente en el riesgo de desarrollar ciertas enfermedades y en la capacidad de costear la atención de salud',
    'Las condiciones de trabajo nunca tienen ninguna influencia real sobre el estado de salud de una persona', 'Solo los trabajos manuales de alto riesgo físico se consideran relevantes como determinante social; los trabajos de oficina no cuentan', 'Las condiciones de trabajo son exclusivamente relevantes para enfermedades ocupacionales específicas, sin ninguna relación con la salud general'],
  ok:0,
  clave:'Exposiciones laborales, el nivel de estrés y la estabilidad del empleo influyen directamente en el riesgo de enfermedad y en la capacidad de costear la atención de salud.',
  exp:'Las condiciones de trabajo se consideran un determinante social de la salud porque exposiciones laborales específicas, el nivel de estrés crónico y la estabilidad del empleo (que determina el ingreso y, en muchos sistemas, el acceso a seguro de salud) influyen directamente tanto en el riesgo de desarrollar ciertas enfermedades como en la capacidad de costear la atención de salud necesaria.',
  no:{
    1:'Las condiciones de trabajo sí tienen una influencia real y bien documentada sobre el estado de salud, a través de múltiples mecanismos.',
    2:'Los trabajos de oficina también pueden tener condiciones relevantes (estrés crónico, sedentarismo, estabilidad laboral) como determinante social.',
    3:'Las condiciones de trabajo influyen más allá de enfermedades ocupacionales específicas, afectando también el ingreso y el acceso general a la salud.'
  },
  trampa:'Limitar la relevancia de las condiciones de trabajo como determinante social solo a trabajos de alto riesgo físico o a enfermedades ocupacionales específicas.',
  obj:'Explicar por qué las condiciones de trabajo se consideran un determinante social de la salud.',
  ref:'OMS, Comisión sobre Determinantes Sociales de la Salud, informe final.',
  tags:['condiciones de trabajo','determinante social','estabilidad laboral']
},
{
  id:'U9-SYC-Q13', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Determinantes sociales de la salud', sub:'Los determinantes sociales no son solo teoría abstracta',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el estudio de los determinantes sociales de la salud tiene relevancia práctica directa para la formación médica, más allá de ser un marco teórico?',
  ops:[
    'Porque cambia cómo se diseñan los planes de tratamiento en la práctica real, reconociendo condiciones de vida que afectan directamente si el paciente puede cumplirlos',
    'El estudio de los determinantes sociales es exclusivamente teórico, sin ninguna aplicación práctica en la formación médica', 'Los determinantes sociales solo son relevantes para especialistas en salud pública, nunca para la práctica clínica individual', 'La formación médica no debería incluir el estudio de los determinantes sociales, al no tener relación con el diagnóstico y tratamiento'],
  ok:0,
  clave:'Cambia cómo se diseñan los planes de tratamiento en la práctica real, reconociendo condiciones de vida que afectan si el paciente puede cumplirlos.',
  exp:'El estudio de los determinantes sociales tiene relevancia práctica directa porque cambia cómo se diseñan los planes de tratamiento en la práctica clínica real: reconocer las condiciones de vida del paciente permite plantear indicaciones que tengan una posibilidad real de cumplirse, en vez de indicaciones teóricamente correctas pero prácticamente inviables para esa persona en particular.',
  no:{
    1:'El estudio de los determinantes sociales tiene una aplicación práctica directa y central en el diseño de planes de tratamiento reales.',
    2:'Los determinantes sociales son relevantes también para la práctica clínica individual, no exclusivamente para especialistas en salud pública.',
    3:'Los determinantes sociales sí tienen relación directa con el diagnóstico y el tratamiento, al afectar la adherencia y el desenlace real del paciente.'
  },
  trampa:'Reducir el estudio de los determinantes sociales a un marco puramente teórico o exclusivo de la salud pública, sin reconocer su aplicación clínica directa.',
  obj:'Explicar la relevancia práctica del estudio de los determinantes sociales para la formación médica clínica.',
  ref:'OMS, Comisión sobre Determinantes Sociales de la Salud, informe final.',
  tags:['relevancia práctica','formación médica','aplicación clínica']
},
{
  id:'U9-SYC-Q14', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Salud comunitaria y atención primaria', sub:'La atención primaria como estrategia amplia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué sentido la atención primaria de salud es más que solo un nivel del sistema de salud?',
  ops:[
    'Es también una estrategia más amplia que busca resolver la mayoría de los problemas de salud de una comunidad en el nivel más cercano y accesible posible',
    'La atención primaria es exclusivamente un nivel físico del sistema de salud, sin ninguna dimensión estratégica adicional', 'La atención primaria solo se ocupa de tratamiento básico, sin ninguna relación con prevención o promoción de la salud', 'No existe ninguna diferencia real entre la atención primaria como nivel y como estrategia general'],
  ok:0,
  clave:'Es también una estrategia más amplia que busca resolver la mayoría de los problemas de salud de una comunidad en el nivel más cercano y accesible posible.',
  exp:'La atención primaria de salud es también una estrategia más amplia: busca resolver la mayoría de los problemas de salud de una comunidad en el nivel más cercano y accesible posible, integrando prevención, promoción y tratamiento básico, antes de necesitar niveles de atención más especializados y costosos -esta doble naturaleza (nivel y estrategia) explica por qué aparece repetidamente a lo largo del pensum.',
  no:{
    1:'La atención primaria tiene una dimensión estratégica más amplia, no se limita a ser solo un nivel físico del sistema de salud.',
    2:'La atención primaria integra prevención, promoción y tratamiento básico, no se limita exclusivamente al tratamiento.',
    3:'Sí existe una diferencia real: como nivel es un lugar físico de atención, como estrategia es una forma completa de organizar la atención.'
  },
  trampa:'Reducir la atención primaria a solo un nivel físico del sistema, sin reconocer su dimensión estratégica más amplia.',
  obj:'Explicar la doble naturaleza de la atención primaria como nivel del sistema y como estrategia amplia.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['atención primaria de salud','estrategia amplia','nivel del sistema']
},
{
  id:'U9-SYC-Q15', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Salud comunitaria y atención primaria', sub:'Ventaja central del promotor comunitario',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la ventaja central del promotor comunitario de salud, más allá de su entrenamiento técnico?',
  ops:[
    'La confianza y el conocimiento local que ya tiene, algo que un profesional externo a la comunidad tarda mucho más en construir',
    'El promotor comunitario nunca tiene ninguna ventaja real sobre un profesional de salud externo a la comunidad', 'La única ventaja del promotor comunitario es tener un nivel de formación técnica superior al de un médico', 'El promotor comunitario reemplaza por completo la necesidad de profesionales de salud formalmente entrenados'],
  ok:0,
  clave:'La confianza y el conocimiento local que ya tiene, algo que un profesional externo a la comunidad tarda mucho más en construir.',
  exp:'El promotor comunitario de salud es, con frecuencia, un miembro de la propia comunidad, entrenado para realizar actividades básicas de promoción y detección temprana, y para servir de puente entre la comunidad y el sistema de salud formal -su ventaja central es la confianza y el conocimiento local que ya tiene, algo que un profesional externo a la comunidad tarda mucho más en construir.',
  no:{
    1:'El promotor comunitario sí tiene una ventaja real y documentada: su confianza y conocimiento local preexistente.',
    2:'La ventaja central no es un nivel de formación técnica superior; es la confianza y conocimiento local que ya posee por ser parte de la comunidad.',
    3:'El promotor comunitario complementa, no reemplaza, a los profesionales de salud formalmente entrenados; sirve de puente entre ambos.'
  },
  trampa:'Confundir la ventaja del promotor comunitario (confianza y conocimiento local) con una superioridad técnica o con un reemplazo completo de los profesionales de salud.',
  obj:'Explicar la ventaja central del promotor comunitario de salud sobre un profesional externo a la comunidad.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['promotor comunitario','confianza local','puente con el sistema de salud']
},
{
  id:'U9-SYC-Q16', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Salud comunitaria y atención primaria', sub:'Diagnóstico comunitario como anamnesis poblacional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se relaciona el diagnóstico comunitario con la historia clínica individual ya vista en Semiología Clínica?',
  ops:[
    'Aplica la misma lógica de la historia clínica individual, pero a una comunidad entera como "paciente", identificando sus problemas de salud, recursos y determinantes sociales',
    'El diagnóstico comunitario no tiene ninguna relación conceptual real con la historia clínica individual ya vista en Semiología Clínica', 'El diagnóstico comunitario reemplaza por completo la necesidad de realizar historias clínicas individuales a cada paciente', 'La historia clínica individual y el diagnóstico comunitario son exactamente el mismo procedimiento, sin ninguna diferencia de escala'],
  ok:0,
  clave:'Aplica la misma lógica de la historia clínica individual, pero a una comunidad entera como "paciente", identificando problemas, recursos y determinantes sociales.',
  exp:'El diagnóstico comunitario aplica la misma lógica de la historia clínica individual, ya vista en Semiología Clínica, pero a una comunidad entera como "paciente": identifica sus principales problemas de salud, sus recursos disponibles y sus determinantes sociales, como paso previo a diseñar cualquier intervención de salud comunitaria bien dirigida.',
  no:{
    1:'Sí existe una relación conceptual directa y explícita entre ambos, aplicando la misma lógica a distinta escala (individuo vs. comunidad).',
    2:'El diagnóstico comunitario complementa, no reemplaza, la necesidad de la historia clínica individual de cada paciente dentro de esa comunidad.',
    3:'Aunque comparten la misma lógica, difieren en escala: uno se aplica a un individuo, el otro a una comunidad entera, con métodos ajustados a esa escala.'
  },
  trampa:'No reconocer la conexión conceptual explícita entre el diagnóstico comunitario y la historia clínica individual, aplicados a escalas distintas.',
  obj:'Explicar la relación conceptual entre el diagnóstico comunitario y la historia clínica individual.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['diagnóstico comunitario','historia clínica individual','escala comunitaria']
},
{
  id:'U9-SYC-Q17', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Salud comunitaria y atención primaria', sub:'Riesgo de un diagnóstico comunitario mal hecho',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un equipo de salud diseña un programa comunitario basado en suposiciones externas sobre las necesidades de la comunidad, sin involucrar directamente a sus miembros en el diagnóstico previo.',
  enunciado:'¿Qué consecuencia frecuente tiene este tipo de diagnóstico comunitario mal hecho?',
  ops:[
    'Lleva con frecuencia a programas de salud que no responden a las necesidades reales percibidas por esa comunidad, resultando en baja participación y bajo impacto',
    'Un diagnóstico comunitario basado en suposiciones externas siempre resulta igual de efectivo que uno que involucra a la comunidad', 'Este tipo de diagnóstico mal hecho nunca tiene ninguna consecuencia negativa real sobre el impacto del programa diseñado', 'La participación de la comunidad en el diagnóstico previo nunca afecta el impacto real de un programa de salud'],
  ok:0,
  clave:'Lleva con frecuencia a programas de salud que no responden a las necesidades reales percibidas por esa comunidad, con baja participación y bajo impacto.',
  exp:'Un diagnóstico comunitario mal hecho -basado en suposiciones externas, sin involucrar a la propia comunidad- lleva con frecuencia a programas de salud que no responden a las necesidades reales percibidas por esa comunidad, y que por eso tienen baja participación y bajo impacto, sin importar qué tan bien intencionados o técnicamente sólidos parezcan en el diseño.',
  no:{
    1:'Un diagnóstico basado en suposiciones externas tiende a ser MENOS efectivo que uno que involucra activamente a la comunidad en el proceso.',
    2:'Este tipo de diagnóstico mal hecho sí tiene una consecuencia negativa real y documentada: baja participación y bajo impacto del programa resultante.',
    3:'La participación de la comunidad sí afecta directamente el impacto real de un programa, siendo un factor central de su éxito o fracaso.'
  },
  trampa:'Subestimar el impacto negativo real de un diagnóstico comunitario basado en suposiciones externas sin involucrar a la propia comunidad.',
  obj:'Explicar la consecuencia de un diagnóstico comunitario mal hecho, basado en suposiciones externas.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['diagnóstico comunitario mal hecho','baja participación','necesidades reales']
},
{
  id:'U9-SYC-Q18', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Salud comunitaria y atención primaria', sub:'Salud comunitaria: invertir la lógica de la consulta',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo invierte la salud comunitaria la lógica habitual de la consulta médica tradicional?',
  ops:[
    'En vez de esperar a que la persona enferma llegue al consultorio, sale a buscar a la comunidad entera, sana y enferma por igual, en el lugar donde vive',
    'La salud comunitaria sigue exactamente la misma lógica que la consulta médica tradicional, sin ninguna diferencia real de enfoque', 'La salud comunitaria se enfoca exclusivamente en las personas ya enfermas, igual que la consulta médica tradicional', 'La salud comunitaria nunca sale del consultorio; solo cambia el tipo de pacientes que recibe dentro de él'],
  ok:0,
  clave:'En vez de esperar a que la persona enferma llegue al consultorio, sale a buscar a la comunidad entera, sana y enferma por igual, en el lugar donde vive.',
  exp:'La salud comunitaria invierte la lógica habitual de la consulta médica: en vez de esperar a que la persona enferma llegue al consultorio, sale a buscar a la comunidad entera, sana y enferma por igual, en el lugar donde vive -un cambio de enfoque que permite alcanzar a personas que, de otra forma, quizás nunca buscarían atención por su cuenta.',
  no:{
    1:'Existe una diferencia real y central de enfoque: la consulta tradicional espera al paciente, la salud comunitaria sale activamente a buscarlo.',
    2:'La salud comunitaria se enfoca en la comunidad entera, sana y enferma por igual, no exclusivamente en las personas ya enfermas.',
    3:'La salud comunitaria precisamente sale del consultorio hacia el lugar donde vive la comunidad, un cambio central de enfoque, no solo de tipo de paciente.'
  },
  trampa:'No reconocer el cambio real de enfoque que representa la salud comunitaria frente a la lógica reactiva de la consulta médica tradicional.',
  obj:'Explicar cómo la salud comunitaria invierte la lógica habitual de la consulta médica tradicional.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['salud comunitaria','lógica invertida','alcance a la comunidad']
},
{
  id:'U9-SYC-Q19', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Salud comunitaria y atención primaria', sub:'Integración de prevención, promoción y tratamiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué tres funciones integra la atención primaria de salud como estrategia, antes de necesitar niveles más especializados?',
  ops:[
    'Prevención, promoción y tratamiento básico', 'Únicamente tratamiento farmacológico especializado, sin ninguna función preventiva', 'Exclusivamente cirugía de baja complejidad, sin ninguna otra función relacionada', 'Solo diagnóstico por imágenes, sin ninguna función de tratamiento o prevención'],
  ok:0,
  clave:'Prevención, promoción y tratamiento básico.',
  exp:'La atención primaria de salud, como estrategia, busca resolver la mayoría de los problemas de salud de una comunidad en el nivel más cercano y accesible posible, integrando prevención, promoción y tratamiento básico, antes de necesitar niveles de atención más especializados y costosos.',
  no:{
    1:'La atención primaria integra prevención y promoción, además del tratamiento; no se limita exclusivamente al tratamiento farmacológico especializado.',
    2:'La cirugía de baja complejidad no es la función central de la atención primaria; su enfoque integra prevención, promoción y tratamiento básico.',
    3:'El diagnóstico por imágenes no es la función central de la atención primaria como estrategia; integra prevención, promoción y tratamiento básico.'
  },
  trampa:'Reducir la atención primaria a una sola función (tratamiento, diagnóstico, o cirugía), sin reconocer su integración de las tres funciones centrales.',
  obj:'Identificar las tres funciones que integra la atención primaria de salud como estrategia.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['prevención','promoción','tratamiento básico']
},
{
  id:'U9-SYC-Q20', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Salud comunitaria y atención primaria', sub:'El promotor como puente formal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple el promotor comunitario como "puente" entre la comunidad y el sistema de salud formal?',
  ops:[
    'Realiza actividades básicas de promoción y detección temprana, y facilita la conexión entre la comunidad y los servicios formales de salud',
    'El promotor comunitario reemplaza completamente al sistema de salud formal, eliminando la necesidad de servicios médicos profesionales', 'El promotor comunitario no tiene ninguna función real de conexión entre la comunidad y el sistema de salud formal', 'El promotor comunitario solo realiza tareas administrativas, sin ninguna función clínica de promoción o detección'],
  ok:0,
  clave:'Realiza actividades básicas de promoción y detección temprana, y facilita la conexión entre la comunidad y los servicios formales de salud.',
  exp:'El promotor comunitario de salud es, con frecuencia, un miembro de la propia comunidad, entrenado para realizar actividades básicas de promoción y detección temprana, y para servir de puente entre la comunidad y el sistema de salud formal, facilitando esa conexión gracias a la confianza que ya tiene con sus vecinos.',
  no:{
    1:'El promotor comunitario complementa, no reemplaza, al sistema de salud formal; sirve de puente, no de sustituto completo.',
    2:'El promotor comunitario sí cumple una función real de conexión, precisamente su rol central como "puente" entre comunidad y sistema formal.',
    3:'El promotor comunitario realiza actividades básicas de promoción y detección temprana, no solo tareas administrativas.'
  },
  trampa:'Asumir que el promotor comunitario reemplaza al sistema de salud formal, o que solo cumple funciones administrativas sin ninguna función clínica básica.',
  obj:'Explicar la función de puente del promotor comunitario entre la comunidad y el sistema de salud formal.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['promotor comunitario','función de puente','detección temprana']
},
{
  id:'U9-SYC-Q21', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Salud comunitaria y atención primaria', sub:'Costo evitado al resolver en el primer nivel',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ventaja tiene resolver la mayoría de los problemas de salud de una comunidad en el nivel más cercano y accesible, antes de recurrir a niveles especializados?',
  ops:[
    'Evita el costo y la complejidad innecesaria de recurrir a niveles de atención más especializados y costosos para problemas que el primer nivel puede resolver',
    'Resolver problemas en el primer nivel siempre es más costoso que recurrir directamente a un nivel especializado', 'No existe ninguna diferencia de costo o complejidad entre resolver un problema en el primer nivel o en uno especializado', 'La atención primaria nunca puede resolver ningún problema de salud, por lo que siempre se requiere un nivel especializado'],
  ok:0,
  clave:'Evita el costo y la complejidad innecesaria de recurrir a niveles de atención más especializados y costosos para problemas que el primer nivel puede resolver.',
  exp:'La atención primaria busca resolver la mayoría de los problemas de salud de una comunidad en el nivel más cercano y accesible posible, integrando prevención, promoción y tratamiento básico, antes de necesitar niveles de atención más especializados y costosos -una ventaja tanto para el paciente (acceso más rápido y cercano) como para el sistema de salud en su conjunto (uso más eficiente de recursos escasos).',
  no:{
    1:'Es precisamente lo contrario: resolver en el primer nivel es generalmente MENOS costoso que recurrir directamente a un nivel especializado.',
    2:'Sí existe una diferencia real de costo y complejidad entre ambos niveles, siendo el primer nivel generalmente más eficiente para problemas comunes.',
    3:'La atención primaria sí puede resolver la mayoría de los problemas de salud comunes de una comunidad, no requiere siempre un nivel especializado.'
  },
  trampa:'Subestimar la ventaja de eficiencia y costo de resolver problemas de salud comunes en el primer nivel, antes de recurrir a niveles especializados.',
  obj:'Explicar la ventaja de resolver la mayoría de los problemas de salud en el nivel de atención primaria.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['eficiencia del sistema','primer nivel','costo evitado']
},
{
  id:'U9-SYC-Q22', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Salud comunitaria y atención primaria', sub:'El promotor y la detección temprana en el terreno',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un promotor comunitario, durante una visita rutinaria a las familias de su zona, detecta signos tempranos de desnutrición en varios niños antes de que sus familias hubieran considerado buscar atención médica formal.',
  enunciado:'¿Qué característica del rol del promotor comunitario explica que haya podido detectar esto antes que el sistema formal?',
  ops:[
    'Su cercanía y conocimiento del terreno le permite identificar problemas de salud directamente en el entorno donde ocurren, antes de que la familia busque atención por su cuenta',
    'Los promotores comunitarios nunca tienen contacto directo con las familias de su zona de trabajo asignada', 'Esta detección temprana solo puede lograrla un médico especialista, nunca un promotor comunitario sin formación médica completa', 'La detección de desnutrición infantil no tiene ninguna relación con el trabajo habitual de un promotor comunitario de salud'],
  ok:0,
  clave:'Su cercanía y conocimiento del terreno le permite identificar problemas de salud directamente en el entorno donde ocurren, antes de que la familia busque atención por su cuenta.',
  exp:'La ventaja central del promotor comunitario es la confianza y el conocimiento local que ya tiene, lo que le permite, en visitas rutinarias dentro de la comunidad, detectar problemas de salud -como signos tempranos de desnutrición- directamente en el entorno donde ocurren, antes de que la familia, por su cuenta, hubiera buscado atención médica formal.',
  no:{
    1:'Los promotores comunitarios sí tienen contacto directo y habitual con las familias de su zona, precisamente la base de su trabajo comunitario.',
    2:'La detección temprana de signos básicos, como los de desnutrición, es parte de las actividades de promoción y detección que sí realiza un promotor comunitario entrenado.',
    3:'La detección de problemas básicos de nutrición sí forma parte del trabajo habitual y esperado de un promotor comunitario de salud.'
  },
  trampa:'Subestimar la capacidad del promotor comunitario, sin formación médica completa, para detectar problemas de salud básicos gracias a su cercanía con la comunidad.',
  obj:'Aplicar el concepto de cercanía y conocimiento del terreno del promotor comunitario a un caso de detección temprana.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['detección temprana','desnutrición infantil','cercanía comunitaria']
},
{
  id:'U9-SYC-Q23', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Salud comunitaria y atención primaria', sub:'Recursos disponibles en el diagnóstico comunitario',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el diagnóstico comunitario identifica no solo los problemas de salud, sino también los recursos disponibles en esa comunidad?',
  ops:[
    'Porque diseñar una intervención bien dirigida requiere conocer tanto los problemas a resolver como los recursos reales con los que la comunidad ya cuenta para abordarlos',
    'Los recursos disponibles en una comunidad nunca son relevantes para diseñar una intervención de salud comunitaria bien dirigida', 'El diagnóstico comunitario se limita exclusivamente a contar el número de enfermedades presentes, sin considerar ningún recurso', 'Identificar los recursos disponibles es responsabilidad exclusiva de un economista, nunca parte de un diagnóstico comunitario de salud'],
  ok:0,
  clave:'Diseñar una intervención bien dirigida requiere conocer tanto los problemas a resolver como los recursos reales con los que la comunidad ya cuenta.',
  exp:'El diagnóstico comunitario identifica sus principales problemas de salud, sus recursos disponibles y sus determinantes sociales, como paso previo a diseñar cualquier intervención de salud comunitaria bien dirigida -conocer los recursos ya existentes (organizaciones locales, infraestructura, liderazgo comunitario) permite diseñar intervenciones realistas que aprovechen esas fortalezas, en vez de partir de cero.',
  no:{
    1:'Los recursos disponibles sí son relevantes; permiten diseñar intervenciones que aprovechen las fortalezas ya existentes en esa comunidad.',
    2:'El diagnóstico comunitario incluye más que un conteo de enfermedades; también evalúa recursos disponibles y determinantes sociales.',
    3:'Identificar los recursos disponibles es parte del diagnóstico comunitario de salud, no una tarea exclusiva de otro tipo de profesional.'
  },
  trampa:'Reducir el diagnóstico comunitario a un simple conteo de problemas de salud, sin reconocer la importancia de identificar también los recursos disponibles.',
  obj:'Explicar por qué el diagnóstico comunitario incluye la identificación de recursos disponibles, no solo problemas de salud.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['recursos comunitarios','diagnóstico comunitario','intervención bien dirigida']
},
{
  id:'U9-SYC-Q24', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Salud comunitaria y atención primaria', sub:'Conexión con Medicina Preventiva',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo retoma este tema el concepto de atención primaria ya introducido en Medicina Preventiva?',
  ops:[
    'Amplía el concepto, presentándolo no solo como el nivel del sistema donde se implementan programas preventivos, sino como una estrategia más amplia de organización de la salud comunitaria',
    'Este tema no tiene ninguna relación real con el concepto de atención primaria ya visto en Medicina Preventiva', 'Este tema contradice directamente lo visto sobre atención primaria en el bloque de Medicina Preventiva', 'El concepto de atención primaria en este tema es completamente distinto e independiente del ya visto en Medicina Preventiva'],
  ok:0,
  clave:'Amplía el concepto, presentándolo no solo como el nivel del sistema donde se implementan programas preventivos, sino como una estrategia más amplia.',
  exp:'La atención primaria de salud, ya introducida en Medicina Preventiva como el nivel del sistema donde se implementan los programas preventivos, es también una estrategia más amplia en este tema: busca resolver la mayoría de los problemas de salud de una comunidad en el nivel más cercano y accesible posible, ampliando el concepto ya visto hacia su dimensión estratégica y comunitaria.',
  no:{
    1:'Sí existe una relación conceptual directa y explícita entre este tema y el concepto de atención primaria ya visto en Medicina Preventiva.',
    2:'Este tema amplía, no contradice, lo visto previamente sobre atención primaria en el bloque de Medicina Preventiva.',
    3:'El concepto retomado aquí es el MISMO que el de Medicina Preventiva, solo que ampliado hacia su dimensión estratégica más amplia, no uno independiente.'
  },
  trampa:'No reconocer la conexión explícita y la ampliación del concepto de atención primaria entre el bloque de Medicina Preventiva y este tema.',
  obj:'Explicar cómo este tema amplía el concepto de atención primaria ya introducido en Medicina Preventiva.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['conexión con Medicina Preventiva','ampliación del concepto','atención primaria']
},
{
  id:'U9-SYC-Q25', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Salud comunitaria y atención primaria', sub:'Miembro de la propia comunidad como ventaja',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica es típica del promotor comunitario de salud, en cuanto a su procedencia?',
  ops:[
    'Es, con frecuencia, un miembro de la propia comunidad que atiende', 'Siempre es un médico especialista con años de formación clínica avanzada', 'Nunca tiene ningún vínculo previo con la comunidad donde trabaja', 'Es exclusivamente un funcionario del gobierno central sin vínculo con la comunidad local'],
  ok:0,
  clave:'Es, con frecuencia, un miembro de la propia comunidad que atiende.',
  exp:'El promotor comunitario de salud es, con frecuencia, un miembro de la propia comunidad, entrenado para realizar actividades básicas de promoción y detección temprana -esta procedencia local es precisamente la base de la confianza y el conocimiento del terreno que le dan su ventaja característica frente a un profesional externo.',
  no:{
    1:'El promotor comunitario no requiere ser un médico especialista; es entrenado para actividades básicas, típicamente siendo miembro de la propia comunidad.',
    2:'Precisamente lo contrario: el promotor comunitario típicamente SÍ tiene un vínculo previo con la comunidad, siendo con frecuencia miembro de ella.',
    3:'El promotor comunitario suele ser un miembro local de la comunidad, no un funcionario externo del gobierno central sin vínculo local.'
  },
  trampa:'Confundir al promotor comunitario con un profesional externo altamente especializado o un funcionario sin vínculo local, en vez de reconocer su procedencia comunitaria típica.',
  obj:'Identificar la procedencia típica del promotor comunitario de salud como miembro de la propia comunidad.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['promotor comunitario','procedencia local','miembro de la comunidad']
},
{
  id:'U9-SYC-Q26', programa:'unirm', cuatri:9,
  esp:'Salud y Comunidad I', tema:'Salud comunitaria y atención primaria', sub:'El diagnóstico comunitario como paso previo obligado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el diagnóstico comunitario se considera un paso previo necesario antes de diseñar cualquier intervención de salud comunitaria?',
  ops:[
    'Porque sin conocer los problemas de salud, recursos y determinantes sociales reales de esa comunidad, la intervención diseñada corre el riesgo de no responder a sus necesidades reales',
    'El diagnóstico comunitario es un paso opcional que puede omitirse sin ningún riesgo real para el éxito de la intervención diseñada', 'Cualquier intervención de salud comunitaria puede diseñarse igual de bien sin necesidad de un diagnóstico comunitario previo', 'El diagnóstico comunitario solo es necesario en comunidades grandes, nunca en comunidades pequeñas o rurales'],
  ok:0,
  clave:'Sin conocer los problemas de salud, recursos y determinantes sociales reales de esa comunidad, la intervención diseñada corre el riesgo de no responder a sus necesidades reales.',
  exp:'El diagnóstico comunitario identifica los principales problemas de salud, recursos disponibles y determinantes sociales de una comunidad, como paso previo a diseñar cualquier intervención de salud comunitaria bien dirigida; omitir este paso -diseñando una intervención basada en suposiciones externas- lleva con frecuencia a programas que no responden a las necesidades reales, con baja participación y bajo impacto.',
  no:{
    1:'Omitir el diagnóstico comunitario sí representa un riesgo real y documentado de diseñar una intervención mal dirigida y con bajo impacto.',
    2:'Un diagnóstico previo mejora significativamente la probabilidad de que la intervención responda a las necesidades reales de esa comunidad específica.',
    3:'La necesidad de un diagnóstico comunitario previo no depende del tamaño de la comunidad; aplica igualmente a comunidades grandes y pequeñas.'
  },
  trampa:'Asumir que el diagnóstico comunitario es un paso opcional o prescindible, sin reconocer el riesgo real de diseñar intervenciones mal dirigidas sin él.',
  obj:'Explicar por qué el diagnóstico comunitario es un paso previo necesario antes de diseñar una intervención de salud comunitaria.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['paso previo necesario','diagnóstico comunitario','riesgo de omisión']
}

]);
