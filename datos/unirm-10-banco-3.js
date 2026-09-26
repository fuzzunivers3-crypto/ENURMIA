/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 10, TANDA DE FARMACOTERAPEUTICA (1/2)
   Primer banco de esta materia (0 preguntas previas). Prefijo
   U10-FT-. Esta parte cubre principios de farmacoterapia
   racional, dolor, antimicrobianos, cardiovascular, diabetes y
   respiratoria (temas 1-6).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== FARMACOTERAPEUTICA ===================== */
{
  id:'U10-FT-Q01', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Principios de farmacoterapia racional', sub:'Diferencia entre farmacología y farmacoterapéutica',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la diferencia central entre saber qué hace un fármaco (farmacología) y decidir si es la mejor elección para un paciente concreto (farmacoterapéutica)?',
  ops:[
    'La farmacoterapéutica aplica el conocimiento farmacológico considerando las características individuales del paciente: edad, función renal y hepática, otras enfermedades y otros medicamentos',
    'No existe ninguna diferencia real entre farmacología y farmacoterapéutica, son exactamente el mismo campo de estudio', 'La farmacoterapéutica ignora por completo el mecanismo de acción de los fármacos, centrándose solo en el diagnóstico', 'La farmacología considera al paciente individual, mientras que la farmacoterapéutica solo estudia el fármaco de forma aislada'],
  ok:0,
  clave:'La farmacoterapéutica aplica el conocimiento farmacológico considerando las características individuales del paciente.',
  exp:'La farmacoterapia racional es el proceso de seleccionar, para un paciente específico, el fármaco correcto considerando sus características individuales -edad, función renal y hepática, otras enfermedades, otros medicamentos-, no solo el diagnóstico aislado. El mismo conocimiento farmacológico puede llevar a decisiones muy distintas según el contexto clínico específico.',
  no:{
    1:'Sí existe una diferencia real: la farmacología estudia el fármaco en general, la farmacoterapéutica lo aplica a un paciente concreto.',
    2:'La farmacoterapéutica sí se basa en el mecanismo de acción del fármaco, aplicándolo de forma individualizada al paciente.',
    3:'Es al revés: la FARMACOTERAPÉUTICA es la que considera al paciente individual, no la farmacología general.'
  },
  trampa:'Confundir farmacología (conocimiento general del fármaco) con farmacoterapéutica (aplicación individualizada a un paciente concreto).',
  obj:'Distinguir la farmacología de la farmacoterapéutica en su enfoque sobre el paciente individual.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 1 y 65.',
  tags:['farmacoterapia racional','diferencia con farmacología','paciente individual']
},
{
  id:'U10-FT-Q02', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Principios de farmacoterapia racional', sub:'La relación beneficio-riesgo no es estática',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la relación beneficio-riesgo de un mismo fármaco puede inclinarse de forma distinta en dos pacientes con el mismo diagnóstico?',
  ops:[
    'Porque la relación beneficio-riesgo cambia con la edad, otras enfermedades, la esperanza de vida y las preferencias del paciente sobre qué riesgos está dispuesto a asumir',
    'La relación beneficio-riesgo de un fármaco es siempre exactamente la misma para cualquier paciente con el mismo diagnóstico', 'El beneficio-riesgo de un fármaco depende únicamente de su mecanismo de acción, sin relación con el contexto del paciente', 'Las preferencias del paciente nunca deberían influir en el balance clínico de beneficio y riesgo'],
  ok:0,
  clave:'Porque la relación beneficio-riesgo cambia con la edad, otras enfermedades, la esperanza de vida y las preferencias del paciente.',
  exp:'La relación beneficio-riesgo no es estática: cambia con la edad del paciente, la presencia de otras enfermedades, la esperanza de vida, y las preferencias del propio paciente sobre qué riesgos está dispuesto a asumir -por eso la farmacoterapia racional no es aplicar una fórmula fija, sino un ejercicio de juicio clínico caso por caso.',
  no:{
    1:'Es precisamente lo contrario: la relación beneficio-riesgo VARÍA según el contexto individual del paciente, no es fija para el mismo diagnóstico.',
    2:'El contexto del paciente (edad, comorbilidades, preferencias) sí influye directamente en cómo se pondera el beneficio-riesgo de un fármaco.',
    3:'Las preferencias del paciente sí son un componente legítimo y relevante del balance de beneficio-riesgo en la práctica clínica real.'
  },
  trampa:'Asumir que la relación beneficio-riesgo de un fármaco es una fórmula fija aplicable de la misma forma a cualquier paciente con el mismo diagnóstico.',
  obj:'Explicar por qué la relación beneficio-riesgo varía según el contexto individual del paciente.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 1 y 65.',
  tags:['relación beneficio-riesgo','individualización','contexto del paciente']
},
{
  id:'U10-FT-Q03', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Principios de farmacoterapia racional', sub:'El fármaco más nuevo no siempre es la mejor elección',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es un error asumir que el fármaco "más potente" o "más nuevo" es automáticamente la mejor elección para un paciente?',
  ops:[
    'Porque la farmacoterapia racional exige preguntar si ese fármaco es realmente necesario, si existe una alternativa más segura con eficacia comparable, y si el paciente podrá tomarlo de forma sostenida',
    'El fármaco más nuevo y potente siempre es, sin excepción, la mejor elección posible para cualquier paciente', 'La farmacoterapia racional nunca considera la seguridad de un fármaco, solo su potencia farmacológica', 'La capacidad del paciente de sostener el tratamiento nunca es relevante para elegir el fármaco correcto'],
  ok:0,
  clave:'Porque la farmacoterapia racional exige preguntar si ese fármaco es realmente necesario, si existe una alternativa más segura, y si el paciente podrá tomarlo de forma sostenida.',
  exp:'La farmacoterapia racional exige preguntar también si un fármaco potente o nuevo es necesario en este caso, si existe una alternativa más segura con eficacia comparable, y si el paciente realmente podrá tomarlo de forma sostenida (costo, frecuencia de dosis, efectos secundarios tolerables) -no basta con que sea eficaz o potente.',
  no:{
    1:'No siempre es la mejor elección; depende de la necesidad real, la seguridad relativa y la capacidad del paciente de sostener el tratamiento.',
    2:'La seguridad es un componente central de la farmacoterapia racional, no algo ignorado en favor de la potencia del fármaco.',
    3:'La capacidad del paciente de sostener el tratamiento (costo, frecuencia, tolerabilidad) sí es un factor relevante para la elección correcta.'
  },
  trampa:'Asumir que "más potente" o "más nuevo" equivale automáticamente a "mejor elección", sin considerar necesidad real, seguridad y sostenibilidad del tratamiento.',
  obj:'Explicar por qué el fármaco más potente o nuevo no siempre es la mejor elección terapéutica.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 1 y 65.',
  tags:['elección del fármaco','sostenibilidad del tratamiento','farmacoterapia racional']
},
{
  id:'U10-FT-Q04', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Principios de farmacoterapia racional', sub:'Conexión con el uso racional de antimicrobianos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué principio, ya visto en el uso racional de antimicrobianos de Farmacología, se repite a lo largo de toda la farmacoterapéutica?',
  ops:[
    'Elegir el fármaco más específico y con menor impacto colateral posible, en vez de recurrir automáticamente a la opción de mayor espectro o potencia',
    'Este principio del uso racional de antimicrobianos no tiene ninguna aplicación fuera del contexto específico de las infecciones', 'La farmacoterapéutica recomienda usar siempre el fármaco de mayor espectro posible, sin importar el contexto clínico', 'No existe ninguna conexión conceptual entre el uso racional de antimicrobianos y el resto de la farmacoterapéutica'],
  ok:0,
  clave:'Elegir el fármaco más específico y con menor impacto colateral posible, en vez de recurrir automáticamente a la opción de mayor espectro o potencia.',
  exp:'Este principio conecta directamente con el uso racional de antimicrobianos ya visto en Farmacología: elegir el fármaco más específico y con menor impacto colateral posible, en vez de recurrir automáticamente a la opción de mayor espectro o mayor potencia, es una idea que se repite a lo largo de toda la farmacoterapéutica, no solo en el contexto antimicrobiano.',
  no:{
    1:'Este principio SÍ se extiende más allá del contexto antimicrobiano, aplicándose de forma general en toda la farmacoterapéutica.',
    2:'Es precisamente lo contrario: se recomienda evitar el mayor espectro innecesario, prefiriendo la opción más específica cuando sea posible.',
    3:'Sí existe una conexión conceptual directa: el mismo principio de especificidad y menor impacto colateral se repite en distintos contextos terapéuticos.'
  },
  trampa:'Asumir que el principio de especificidad del uso racional de antimicrobianos se limita exclusivamente al contexto de las infecciones.',
  obj:'Explicar cómo el principio del uso racional de antimicrobianos se generaliza a toda la farmacoterapéutica.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 1 y 65.',
  tags:['especificidad del fármaco','uso racional de antimicrobianos','principio generalizable']
},
{
  id:'U10-FT-Q05', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica del dolor y analgesia escalonada', sub:'Regla de la escalera analgésica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la regla central para decidir cuándo subir de escalón en la escalera analgésica?',
  ops:[
    'Subir de escalón solo cuando el nivel actual, bien utilizado, no logra un control adecuado del dolor',
    'Se debe empezar siempre directamente en el escalón más alto posible, "por si acaso" el dolor resulta severo', 'La escalera analgésica no tiene ninguna regla real que determine cuándo subir de escalón', 'Se debe subir de escalón automáticamente después de un tiempo fijo, sin importar el control real del dolor'],
  ok:0,
  clave:'Subir de escalón solo cuando el nivel actual, bien utilizado, no logra un control adecuado del dolor.',
  exp:'La regla es subir de escalón solo cuando el nivel actual, bien utilizado, no logra un control adecuado -no empezar directamente en un escalón alto "por si acaso". Este enfoque escalonado busca evitar el uso innecesario de opioides potentes, reservándolos para cuando el dolor realmente lo justifica.',
  no:{
    1:'Es precisamente lo contrario: no se debe empezar en el escalón más alto "por si acaso"; se sube solo cuando el nivel actual no controla el dolor.',
    2:'La escalera analgésica sí tiene una regla clara y bien definida: subir según la respuesta real al escalón actual, bien administrado.',
    3:'La decisión de subir de escalón se basa en la respuesta clínica real, no en un tiempo fijo predeterminado sin relación con el control del dolor.'
  },
  trampa:'Asumir que la escalera analgésica se sube por tiempo fijo o que conviene empezar en un escalón alto por precaución, en vez de basarse en la respuesta real.',
  obj:'Explicar la regla central para subir de escalón en la escalera analgésica.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 31.',
  tags:['escalera analgésica','regla de escalamiento','control del dolor']
},
{
  id:'U10-FT-Q06', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica del dolor y analgesia escalonada', sub:'Dolor agudo vs. crónico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué tratar el dolor crónico exactamente igual que el dolor agudo -escalando opioides sin límite- suele ser problemático?',
  ops:[
    'Porque el dolor crónico con frecuencia involucra cambios en el propio sistema nervioso que procesa el dolor, no solo la causa original, así que requiere un abordaje multimodal, no solo analgésicos escalados',
    'El dolor crónico y el dolor agudo son exactamente el mismo tipo de problema, con el mismo tratamiento apropiado', 'El dolor crónico siempre responde mejor a opioides escalados sin límite que el dolor agudo', 'Escalar opioides sin límite nunca representa ningún riesgo real en el manejo del dolor crónico'],
  ok:0,
  clave:'El dolor crónico con frecuencia involucra cambios en el propio sistema nervioso que procesa el dolor, no solo la causa original, así que requiere un abordaje multimodal.',
  exp:'El dolor crónico persiste más allá del tiempo normal de curación esperado, y con frecuencia involucra cambios en el propio sistema nervioso que procesa el dolor, no solo la causa original -razón por la cual requiere con frecuencia un abordaje multimodal. Tratarlo igual que el agudo, escalando opioides sin límite, ignora esta diferencia y expone al paciente a riesgos de dependencia sin necesariamente mejorar el control real.',
  no:{
    1:'Son problemas distintos: el dolor crónico involucra cambios en el procesamiento neural que el dolor agudo típicamente no tiene.',
    2:'Es precisamente lo contrario: el dolor crónico requiere un abordaje MULTIMODAL, no solo escalar opioides indefinidamente.',
    3:'Escalar opioides sin límite en dolor crónico sí representa un riesgo real de dependencia, sin necesariamente mejorar el control del dolor.'
  },
  trampa:'Asumir que el dolor crónico responde igual que el agudo a la escalada de opioides, sin reconocer su mecanismo distinto y el riesgo de dependencia.',
  obj:'Explicar por qué el dolor crónico requiere un abordaje distinto al del dolor agudo.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 31.',
  tags:['dolor crónico','abordaje multimodal','riesgo de dependencia']
},
{
  id:'U10-FT-Q07', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica del dolor y analgesia escalonada', sub:'Anticipar efectos adversos de opioides',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico prescribe un opioide potente a un paciente con dolor severo por cáncer, y de forma simultánea prescribe también un laxante, sin esperar a que aparezca estreñimiento.',
  enunciado:'¿Qué principio de la terapéutica del dolor ilustra esta conducta?',
  ops:[
    'Anticipar y tratar activamente los efectos adversos esperables de los opioides, en vez de esperar a que se conviertan en un problema',
    'Esta conducta es un error clínico, ya que nunca se deben prescribir dos fármacos de forma simultánea en el manejo del dolor', 'El estreñimiento por opioides es un efecto tan raro que nunca justifica la prescripción preventiva de un laxante', 'Prescribir un laxante junto con un opioide no tiene ninguna relación con la vigilancia de efectos adversos'],
  ok:0,
  clave:'Anticipar y tratar activamente los efectos adversos esperables de los opioides, en vez de esperar a que se conviertan en un problema.',
  exp:'En la práctica de la terapéutica del dolor, esto se traduce en usar la dosis mínima eficaz, reevaluar periódicamente la necesidad del opioide, y anticipar y tratar activamente los efectos adversos esperables -por ejemplo, prescribir un laxante junto con un opioide, en vez de esperar a que el estreñimiento se vuelva un problema.',
  no:{
    1:'Esta conducta es precisamente una buena práctica clínica: anticipar un efecto adverso conocido y frecuente, no un error de prescripción simultánea.',
    2:'El estreñimiento por opioides es, de hecho, un efecto adverso muy frecuente, lo que justifica precisamente esta prescripción preventiva.',
    3:'Esta prescripción tiene una relación directa con la vigilancia activa de efectos adversos, siendo precisamente un ejemplo de esa práctica.'
  },
  trampa:'No reconocer la prescripción preventiva de un laxante junto con un opioide como un ejemplo de buena práctica de anticipación de efectos adversos.',
  obj:'Explicar la práctica de anticipar y tratar activamente los efectos adversos esperables de los opioides.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 31.',
  tags:['opioides','anticipación de efectos adversos','estreñimiento']
},
{
  id:'U10-FT-Q08', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica del dolor y analgesia escalonada', sub:'Propósito de evitar opioides potentes innecesarios',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la escalera analgésica busca deliberadamente evitar el uso innecesario de opioides potentes?',
  ops:[
    'Por los riesgos que estos fármacos conllevan, como depresión respiratoria y dependencia, que justifican reservarlos para cuando el dolor realmente lo requiere',
    'Los opioides potentes no tienen ningún riesgo real asociado, así que la escalera analgésica no tiene una razón válida para evitarlos', 'La escalera analgésica busca evitar los opioides potentes únicamente por su costo económico, sin relación con riesgos clínicos', 'Los opioides potentes siempre deben usarse como primera línea, independientemente de la intensidad del dolor'],
  ok:0,
  clave:'Por los riesgos que estos fármacos conllevan, como depresión respiratoria y dependencia, que justifican reservarlos para cuando el dolor realmente lo requiere.',
  exp:'Este enfoque escalonado busca precisamente evitar el uso innecesario de opioides potentes, con sus riesgos ya vistos en Farmacología (depresión respiratoria, dependencia), reservándolos para cuando el dolor realmente lo justifica.',
  no:{
    1:'Los opioides potentes sí tienen riesgos reales bien documentados (depresión respiratoria, dependencia), precisamente la razón de reservarlos.',
    2:'La razón central es clínica (riesgos del fármaco), no exclusivamente económica, aunque el costo también pueda ser un factor.',
    3:'Es precisamente lo contrario: los opioides potentes se reservan para el dolor severo que no responde a escalones inferiores, no como primera línea general.'
  },
  trampa:'Subestimar los riesgos clínicos reales de los opioides potentes que justifican su uso escalonado y reservado.',
  obj:'Explicar por qué la escalera analgésica busca evitar el uso innecesario de opioides potentes.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 31.',
  tags:['opioides potentes','riesgos clínicos','uso reservado']
},
{
  id:'U10-FT-Q09', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica antimicrobiana dirigida', sub:'Función del antibiograma',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué permite el antibiograma en el manejo de una infección, una vez está disponible?',
  ops:[
    'Pasar de la terapia empírica, elegida antes de conocer el germen, a la terapia dirigida, ajustada al germen y su sensibilidad real',
    'El antibiograma no tiene ninguna influencia real sobre la elección del tratamiento antibiótico', 'El antibiograma solo sirve para confirmar la presencia de una infección, sin aportar información sobre sensibilidad', 'El antibiograma reemplaza por completo la necesidad de iniciar cualquier tratamiento antibiótico empírico'],
  ok:0,
  clave:'Permite pasar de la terapia empírica, elegida antes de conocer el germen, a la terapia dirigida, ajustada al germen y su sensibilidad real.',
  exp:'El antibiograma es el estudio que determina a qué antibióticos específicos es sensible el germen aislado; una vez disponible, permite pasar de la terapia empírica (elegida antes de conocer el germen) a la terapia dirigida (ajustada al germen y su sensibilidad real).',
  no:{
    1:'El antibiograma sí tiene una influencia central sobre la elección del tratamiento, permitiendo dirigirlo específicamente al germen causante.',
    2:'El antibiograma aporta información específica de sensibilidad antibiótica, no solo confirma la presencia de infección.',
    3:'El antibiograma no reemplaza la terapia empírica inicial; complementa el proceso permitiendo ajustarla después, dado el tiempo que toma obtenerlo.'
  },
  trampa:'Subestimar la función específica del antibiograma (determinar sensibilidad) o asumir que elimina la necesidad de terapia empírica inicial.',
  obj:'Explicar la función del antibiograma en la transición de terapia empírica a dirigida.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 51.',
  tags:['antibiograma','terapia empírica','terapia dirigida']
},
{
  id:'U10-FT-Q10', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica antimicrobiana dirigida', sub:'Desescalamiento pese a buena respuesta clínica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se recomienda el desescalamiento antibiótico incluso cuando la terapia empírica inicial de amplio espectro ya está dando buen resultado clínico?',
  ops:[
    'Porque el desescalamiento aplica directamente el uso racional de antimicrobianos, reduciendo la presión selectiva hacia la resistencia bacteriana tan pronto como la información lo permite',
    'El desescalamiento antibiótico es un signo de duda sobre la efectividad del tratamiento inicial, y debería evitarse si el paciente responde bien', 'Nunca se debe desescalar un tratamiento antibiótico que ya está funcionando clínicamente, sin importar la información del antibiograma', 'El desescalamiento antibiótico solo se justifica cuando el tratamiento inicial ha fracasado clínicamente'],
  ok:0,
  clave:'El desescalamiento aplica directamente el uso racional de antimicrobianos, reduciendo la presión selectiva hacia la resistencia bacteriana tan pronto como la información lo permite.',
  exp:'El desescalamiento antibiótico no es un signo de duda sobre el tratamiento inicial: es la aplicación directa del uso racional de antimicrobianos, reduciendo la presión selectiva hacia la resistencia bacteriana tan pronto como la información disponible lo permite, sin esperar a que el paciente empeore para "justificar" mantener un espectro amplio.',
  no:{
    1:'Es precisamente lo contrario: el desescalamiento es una buena práctica, no un signo de duda, incluso con buena respuesta clínica.',
    2:'El desescalamiento se recomienda precisamente CUANDO el tratamiento está funcionando bien y ya se conoce el germen, no solo ante fracaso.',
    3:'El desescalamiento se recomienda tan pronto se conoce el germen y su sensibilidad, no exclusivamente ante fracaso clínico del tratamiento inicial.'
  },
  trampa:'Asumir que reducir el espectro antibiótico ante una buena respuesta clínica es una decisión arriesgada o innecesaria, en vez de una práctica recomendada.',
  obj:'Explicar por qué se recomienda el desescalamiento antibiótico incluso con buena respuesta clínica al tratamiento empírico.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 51.',
  tags:['desescalamiento antibiótico','uso racional de antimicrobianos','resistencia bacteriana']
},
{
  id:'U10-FT-Q11', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica antimicrobiana dirigida', sub:'Justificación del amplio espectro en sepsis',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con sospecha de sepsis grave recibe de inmediato un antibiótico de amplio espectro, sin esperar el resultado de los cultivos.',
  enunciado:'¿Por qué esta conducta está justificada en este contexto específico, a diferencia de una infección leve y no urgente?',
  ops:[
    'Porque en ese momento crítico, el riesgo de no cubrir al germen real supera el riesgo poblacional de resistencia a largo plazo',
    'El amplio espectro nunca está justificado en ningún contexto clínico, sin importar la gravedad de la infección', 'En una sepsis grave siempre se debe esperar el resultado del antibiograma antes de iniciar cualquier tratamiento antibiótico', 'El balance de riesgo es exactamente el mismo entre una sepsis grave y una infección leve no urgente'],
  ok:0,
  clave:'Porque en ese momento crítico, el riesgo de no cubrir al germen real supera el riesgo poblacional de resistencia a largo plazo.',
  exp:'En un paciente con sospecha de infección grave y rápidamente progresiva (sepsis), la terapia empírica de amplio espectro, iniciada sin demora, está justificada precisamente porque el riesgo de no cubrir al germen real supera, en ese momento crítico, el riesgo poblacional de resistencia a largo plazo -un balance de riesgo distinto al de una infección leve y no urgente.',
  no:{
    1:'El amplio espectro SÍ está justificado en contextos de urgencia real como la sepsis, donde el riesgo de no cubrir supera el riesgo de resistencia.',
    2:'En sepsis grave NO se debe esperar el antibiograma; se inicia tratamiento empírico de inmediato por la urgencia del cuadro.',
    3:'El balance de riesgo es distinto: en sepsis el riesgo de no cubrir predomina, mientras que en infección leve conviene ser más conservador.'
  },
  trampa:'No reconocer que el balance de riesgo entre amplio espectro y espectro reducido cambia según la gravedad y urgencia del cuadro clínico.',
  obj:'Explicar por qué el uso de amplio espectro está justificado en sepsis, a diferencia de una infección leve no urgente.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 51.',
  tags:['sepsis','terapia empírica de amplio espectro','balance de riesgo']
},
{
  id:'U10-FT-Q12', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica antimicrobiana dirigida', sub:'Tiempo de obtención del antibiograma',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Aproximadamente cuánto tiempo toma obtener un antibiograma desde que se toma el cultivo, y qué implicación clínica tiene ese tiempo?',
  ops:[
    'Típicamente 48 a 72 horas, lo que explica por qué la terapia empírica inicial sigue siendo necesaria en la práctica clínica', 'El antibiograma está disponible de forma instantánea, en cuestión de segundos desde la toma del cultivo', 'El antibiograma toma varios meses en estar disponible, por lo que nunca se usa en la práctica clínica real', 'El tiempo de obtención del antibiograma no tiene ninguna implicación clínica relevante para el manejo del paciente'],
  ok:0,
  clave:'Típicamente 48 a 72 horas, lo que explica por qué la terapia empírica inicial sigue siendo necesaria en la práctica clínica.',
  exp:'El tiempo que toma obtener un antibiograma (típicamente 48 a 72 horas desde el cultivo) explica por qué la terapia empírica inicial sigue siendo necesaria en la práctica: no se puede esperar el resultado del laboratorio para empezar a tratar una infección potencialmente grave.',
  no:{
    1:'El antibiograma no está disponible instantáneamente; requiere el tiempo de cultivo e identificación bacteriana (48-72 horas típicamente).',
    2:'El antibiograma no toma meses en la práctica clínica habitual; su plazo típico es de días, no de meses.',
    3:'El tiempo de obtención sí tiene una implicación clínica directa: justifica la necesidad de iniciar terapia empírica mientras se espera el resultado.'
  },
  trampa:'Subestimar o sobrestimar el tiempo real que toma obtener un antibiograma, y su implicación práctica sobre la necesidad de terapia empírica.',
  obj:'Recordar el tiempo aproximado de obtención de un antibiograma y su implicación clínica.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 51.',
  tags:['antibiograma','tiempo de obtención','terapia empírica necesaria']
},
{
  id:'U10-FT-Q13', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica cardiovascular', sub:'Combinación de antihipertensivos vs. monoterapia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se prefiere combinar dos antihipertensivos a dosis moderadas en vez de escalar un solo fármaco hasta su dosis máxima?',
  ops:[
    'Porque esa combinación de mecanismos complementarios suele lograr mejor control con menos efectos adversos que la monoterapia a dosis alta',
    'La monoterapia a dosis máxima siempre logra mejor control de la presión arterial que cualquier combinación de fármacos', 'Combinar antihipertensivos nunca tiene ninguna ventaja real sobre la monoterapia a dosis máxima', 'La combinación de antihipertensivos se usa exclusivamente por razones de costo, sin ningún beneficio clínico adicional'],
  ok:0,
  clave:'Esa combinación de mecanismos complementarios suele lograr mejor control con menos efectos adversos que la monoterapia a dosis alta.',
  exp:'La práctica clínica actual favorece combinar dos o más antihipertensivos de mecanismos complementarios a dosis moderadas, en vez de escalar un solo fármaco hasta su dosis máxima, porque esa combinación suele lograr mejor control con menos efectos adversos que la monoterapia a dosis alta.',
  no:{
    1:'Es precisamente lo contrario: la COMBINACIÓN a dosis moderadas suele lograr mejor control con menos efectos adversos que la monoterapia a dosis alta.',
    2:'La combinación sí tiene una ventaja clínica real, documentada, sobre la monoterapia a dosis máxima en muchos pacientes.',
    3:'La ventaja de la combinación es clínica (mejor control, menos efectos adversos), no exclusivamente económica.'
  },
  trampa:'Asumir que escalar un solo fármaco hasta su dosis máxima es preferible a combinar dos fármacos a dosis moderadas.',
  obj:'Explicar por qué se prefiere la combinación de antihipertensivos a dosis moderadas sobre la monoterapia a dosis máxima.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 11-13.',
  tags:['combinación de antihipertensivos','monoterapia','control de presión arterial']
},
{
  id:'U10-FT-Q14', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica cardiovascular', sub:'IECA o ARA-II en paciente diabético hipertenso',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con diabetes tipo 2 e hipertensión arterial requiere iniciar tratamiento antihipertensivo.',
  enunciado:'¿Por qué un IECA o un ARA-II es una elección particularmente favorable en este paciente específico?',
  ops:[
    'Porque además de controlar la presión arterial, ofrece un efecto protector renal adicional relevante en un paciente diabético',
    'Los IECA y ARA-II no tienen ninguna ventaja particular en pacientes diabéticos, comparados con cualquier otro antihipertensivo', 'Los IECA y ARA-II están completamente contraindicados en cualquier paciente con diabetes mellitus', 'La elección del antihipertensivo nunca debería considerar la presencia de diabetes como comorbilidad'],
  ok:0,
  clave:'Además de controlar la presión arterial, ofrece un efecto protector renal adicional relevante en un paciente diabético.',
  exp:'La elección de qué antihipertensivos combinar depende del contexto del paciente: un diabético se beneficia especialmente de un IECA o ARA-II por su efecto protector renal adicional, ya visto en Farmacología, más allá del simple control de la presión arterial.',
  no:{
    1:'Sí tienen una ventaja particular documentada en pacientes diabéticos: el efecto protector renal adicional, relevante por el riesgo de nefropatía diabética.',
    2:'No están contraindicados en diabetes; de hecho, son frecuentemente la elección preferida por su beneficio renal adicional.',
    3:'La comorbilidad (diabetes, en este caso) sí debe considerarse activamente al elegir el antihipertensivo más adecuado para ese paciente.'
  },
  trampa:'No reconocer el beneficio renal adicional de los IECA/ARA-II en pacientes diabéticos, más allá de su efecto antihipertensivo general.',
  obj:'Explicar por qué un IECA o ARA-II es especialmente favorable en un paciente diabético hipertenso.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 11-13.',
  tags:['IECA','diabetes mellitus','protección renal']
},
{
  id:'U10-FT-Q15', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica cardiovascular', sub:'Uso sostenido de fármacos que modifican el pronóstico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué ciertos fármacos en insuficiencia cardíaca (IECA/ARA-II, betabloqueadores, antagonistas de la aldosterona) se mantienen de forma sostenida incluso en pacientes relativamente estables, a diferencia de un analgésico usado "según haga falta"?',
  ops:[
    'Porque su beneficio en la sobrevida del paciente depende del uso continuo, no del alivio momentáneo de un síntoma',
    'Estos fármacos se usan exactamente igual que un analgésico, solo "según haga falta" cuando aparecen síntomas activos', 'El uso sostenido de estos fármacos no tiene ninguna relación con la mortalidad del paciente en insuficiencia cardíaca', 'Estos fármacos solo se mantienen mientras el paciente tenga síntomas activos de insuficiencia cardíaca'],
  ok:0,
  clave:'Su beneficio en la sobrevida del paciente depende del uso continuo, no del alivio momentáneo de un síntoma.',
  exp:'A diferencia de un analgésico, que se usa "según haga falta", estos fármacos modificadores de la enfermedad se prescriben de forma sostenida precisamente porque su beneficio en sobrevida depende del uso continuo, no del alivio momentáneo de un síntoma.',
  no:{
    1:'Es precisamente lo contrario: estos fármacos se usan de forma CONTINUA, no "según haga falta" como un analgésico.',
    2:'Estos fármacos sí han demostrado reducir la mortalidad en insuficiencia cardíaca, precisamente el motivo de su uso sostenido.',
    3:'Se mantienen incluso en pacientes relativamente estables, no solo durante síntomas activos, precisamente por su beneficio en mortalidad.'
  },
  trampa:'Confundir el uso sostenido de fármacos modificadores de la enfermedad con el uso "según haga falta" propio de un analgésico sintomático.',
  obj:'Explicar por qué ciertos fármacos en insuficiencia cardíaca se usan de forma sostenida, no solo sintomática.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 11-13.',
  tags:['insuficiencia cardíaca','uso sostenido','modificación del pronóstico']
},
{
  id:'U10-FT-Q16', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica cardiovascular', sub:'Anticoagulación en fibrilación auricular',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se indica anticoagulación en un paciente con fibrilación auricular?',
  ops:[
    'Porque la contracción auricular ineficaz favorece la formación de trombos que pueden desprenderse y viajar hacia el cerebro, causando un ictus',
    'La fibrilación auricular no tiene ninguna relación real con el riesgo de formación de trombos', 'La anticoagulación en fibrilación auricular no tiene ningún riesgo asociado de sangrado', 'La fibrilación auricular siempre mejora la eficacia de la contracción auricular, reduciendo el riesgo de trombos'],
  ok:0,
  clave:'Porque la contracción auricular ineficaz favorece la formación de trombos que pueden desprenderse y viajar hacia el cerebro, causando un ictus.',
  exp:'La anticoagulación se usa en la fibrilación auricular para prevenir la formación de trombos que podrían causar un ictus u otro evento embólico -la contracción auricular ineficaz favorece la formación de trombos que pueden desprenderse y viajar hacia el cerebro.',
  no:{
    1:'La fibrilación auricular sí tiene una relación causal directa y bien documentada con el riesgo de formación de trombos.',
    2:'Todo anticoagulante conlleva un riesgo real de sangrado, que debe sopesarse contra el beneficio de reducir el riesgo embólico.',
    3:'Es precisamente lo contrario: la fibrilación auricular hace la contracción auricular INEFICAZ, favoreciendo la formación de trombos.'
  },
  trampa:'No reconocer la relación entre la contracción auricular ineficaz de la fibrilación auricular y el riesgo de formación de trombos embólicos.',
  obj:'Explicar el mecanismo por el cual la fibrilación auricular justifica la anticoagulación.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 11-13.',
  tags:['fibrilación auricular','anticoagulación','riesgo embólico']
},
{
  id:'U10-FT-Q17', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica cardiovascular', sub:'Decisión de anticoagular como balance individualizado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué balance debe sopesarse siempre antes de decidir anticoagular a un paciente?',
  ops:[
    'El beneficio de reducir el riesgo de evento embólico frente al riesgo de sangrado que todo anticoagulante conlleva',
    'La decisión de anticoagular nunca requiere sopesar ningún riesgo, siempre es beneficiosa sin excepción', 'Solo se debe considerar el riesgo de sangrado, sin ninguna relación con el beneficio de reducir eventos embólicos', 'El balance de riesgo en la anticoagulación es idéntico para cualquier paciente, sin necesidad de individualizarlo'],
  ok:0,
  clave:'El beneficio de reducir el riesgo de evento embólico frente al riesgo de sangrado que todo anticoagulante conlleva.',
  exp:'La decisión de anticoagular a un paciente siempre implica sopesar el beneficio (reducción del riesgo de evento embólico) contra el riesgo de sangrado que todo anticoagulante conlleva -un ejemplo más de la relación beneficio-riesgo individualizada que atraviesa toda la farmacoterapéutica.',
  no:{
    1:'La anticoagulación sí requiere sopesar un balance real entre beneficio embólico y riesgo de sangrado, no es una decisión automática.',
    2:'El beneficio de reducir el riesgo embólico también debe considerarse, no solo el riesgo de sangrado de forma aislada.',
    3:'El balance de riesgo se individualiza para cada paciente, usando herramientas específicas que estiman ambos riesgos para ese caso concreto.'
  },
  trampa:'Asumir que la anticoagulación siempre es beneficiosa sin riesgo, o que el balance es idéntico para cualquier paciente sin individualización.',
  obj:'Explicar el balance de beneficio-riesgo que debe sopesarse antes de anticoagular a un paciente.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 11-13.',
  tags:['decisión de anticoagular','balance individualizado','riesgo de sangrado']
},
{
  id:'U10-FT-Q18', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica de la diabetes mellitus', sub:'Metas glucémicas individualizadas',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente anciano, frágil, con múltiples comorbilidades y diabetes tipo 2, recibe una meta glucémica más relajada que la de un adulto joven sin complicaciones con el mismo diagnóstico.',
  enunciado:'¿Por qué esta diferencia de meta está clínicamente justificada?',
  ops:[
    'Porque en el paciente anciano frágil, el riesgo de hipoglucemia (peligrosa en ese contexto) puede superar al beneficio de un control muy estricto',
    'Las metas glucémicas deben ser exactamente iguales para cualquier paciente con el mismo diagnóstico de diabetes tipo 2', 'Un control estricto de la glucosa nunca representa ningún riesgo real en un paciente anciano frágil', 'La edad del paciente nunca debería influir en la meta glucémica establecida por el equipo médico'],
  ok:0,
  clave:'En el paciente anciano frágil, el riesgo de hipoglucemia (peligrosa en ese contexto) puede superar al beneficio de un control muy estricto.',
  exp:'Un paciente anciano, frágil, con múltiples comorbilidades, puede beneficiarse de una meta más relajada, porque el riesgo de hipoglucemia (peligrosa en ese contexto) puede superar al beneficio de un control muy estricto -mientras que un adulto joven sin complicaciones se beneficia de una meta estricta que reduce el riesgo de complicaciones a largo plazo.',
  no:{
    1:'Las metas glucémicas NO son iguales para cualquier paciente; se individualizan según edad, fragilidad y riesgo de hipoglucemia.',
    2:'El control estricto sí representa un riesgo real de hipoglucemia en un paciente anciano frágil, particularmente peligrosa en ese contexto.',
    3:'La edad y la fragilidad del paciente sí deben influir directamente en la meta glucémica establecida, siendo un factor central de la decisión.'
  },
  trampa:'Asumir que la meta glucémica debe ser idéntica para cualquier paciente con diabetes tipo 2, sin individualizarla según edad y fragilidad.',
  obj:'Explicar por qué la meta glucémica se individualiza según la edad y fragilidad del paciente.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 41.',
  tags:['meta glucémica individualizada','paciente anciano frágil','riesgo de hipoglucemia']
},
{
  id:'U10-FT-Q19', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica de la diabetes mellitus', sub:'Añadir, no reemplazar, la metformina',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué conducta se sigue cuando la metformina sola no logra la meta glucémica individualizada de un paciente?',
  ops:[
    'Se añade un segundo fármaco de otro grupo, con mecanismo complementario, manteniendo la metformina como base del tratamiento',
    'Se reemplaza automáticamente la metformina por otro fármaco de primera línea, sin mantenerla en el tratamiento', 'Se suspende todo tratamiento farmacológico hasta que el paciente logre control únicamente con cambios de estilo de vida', 'Se duplica indefinidamente la dosis de metformina, sin considerar nunca agregar un segundo fármaco'],
  ok:0,
  clave:'Se añade un segundo fármaco de otro grupo, con mecanismo complementario, manteniendo la metformina como base del tratamiento.',
  exp:'La metformina se mantiene como base del tratamiento en la mayoría de los pacientes; cuando no logra la meta glucémica individualizada por sí sola, se añade un segundo fármaco (de otro grupo, con mecanismo complementario) en vez de reemplazarla, buscando el efecto combinado de ambos mecanismos.',
  no:{
    1:'La metformina se MANTIENE como base, no se reemplaza automáticamente; se añade un segundo fármaco complementario.',
    2:'Suspender todo tratamiento farmacológico no es la conducta recomendada cuando la meta no se logra solo con metformina.',
    3:'No se recomienda duplicar indefinidamente la dosis sin límite; se prefiere añadir un segundo fármaco de mecanismo complementario.'
  },
  trampa:'Asumir que no lograr la meta con metformina implica reemplazarla, en vez de mantenerla y añadir un segundo fármaco complementario.',
  obj:'Explicar la conducta de añadir, no reemplazar, la metformina cuando no logra la meta glucémica por sí sola.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 41.',
  tags:['metformina','segundo fármaco complementario','escalamiento del tratamiento']
},
{
  id:'U10-FT-Q20', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica de la diabetes mellitus', sub:'Percepción errónea del inicio de insulina',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es incorrecto percibir el inicio de insulina como un "fracaso" del tratamiento previo con hipoglucemiantes orales?',
  ops:[
    'Porque en realidad es simplemente el siguiente escalón lógico cuando el control glucémico lo requiere, no una señal de fallo del tratamiento anterior',
    'El inicio de insulina siempre representa, efectivamente, un fracaso real y definitivo del tratamiento con hipoglucemiantes orales', 'La insulina nunca debería usarse en pacientes que ya tomaron hipoglucemiantes orales previamente', 'Percibir el inicio de insulina como un fracaso no tiene ninguna consecuencia práctica relevante para el paciente'],
  ok:0,
  clave:'Porque en realidad es simplemente el siguiente escalón lógico cuando el control glucémico lo requiere, no una señal de fallo del tratamiento anterior.',
  exp:'Muchos pacientes y profesionales de salud perciben el inicio de insulina como un "fracaso" del tratamiento previo, pero en realidad es simplemente el siguiente escalón lógico cuando el control glucémico lo requiere -una percepción errónea que puede retrasar innecesariamente un tratamiento que mejoraría el control real de la enfermedad.',
  no:{
    1:'Es precisamente lo contrario: no representa un fracaso, es la progresión lógica del tratamiento cuando el control lo requiere.',
    2:'La insulina se usa precisamente en pacientes que ya usaron hipoglucemiantes orales previamente, como escalón siguiente del tratamiento.',
    3:'Esta percepción errónea sí tiene una consecuencia práctica real: puede retrasar innecesariamente un tratamiento necesario.'
  },
  trampa:'Asumir que iniciar insulina indica fracaso del tratamiento previo, sin reconocer que puede ser simplemente el escalón terapéutico siguiente.',
  obj:'Explicar por qué el inicio de insulina no debe percibirse como un fracaso del tratamiento previo.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 41.',
  tags:['inicio de insulina','percepción errónea','escalón terapéutico']
},
{
  id:'U10-FT-Q21', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica de la diabetes mellitus', sub:'Elección del segundo fármaco según comorbilidad cardiovascular',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con diabetes tipo 2 y enfermedad cardiovascular establecida requiere agregar un segundo fármaco a la metformina.',
  enunciado:'¿Qué consideración adicional, más allá del simple control de la glucosa, debería guiar la elección de ese segundo fármaco en este paciente?',
  ops:[
    'Que ciertos grupos de hipoglucemiantes orales han demostrado beneficio cardiovascular adicional, más allá del simple control glucémico',
    'La elección del segundo fármaco debe basarse exclusivamente en el nivel de glucosa, sin considerar ninguna otra comorbilidad del paciente', 'Ningún hipoglucemiante oral tiene ningún efecto documentado más allá del control de la glucosa', 'La enfermedad cardiovascular establecida no debería influir en absoluto en la elección del segundo fármaco'],
  ok:0,
  clave:'Que ciertos grupos de hipoglucemiantes orales han demostrado beneficio cardiovascular adicional, más allá del simple control glucémico.',
  exp:'La elección del segundo fármaco no es arbitraria: en un paciente con enfermedad cardiovascular establecida, ciertos grupos de hipoglucemiantes orales han demostrado beneficio cardiovascular adicional, más allá del simple control de la glucosa -otro ejemplo de cómo las comorbilidades del paciente orientan la elección real del fármaco.',
  no:{
    1:'La elección debe considerar también las comorbilidades del paciente, no solo el nivel de glucosa de forma aislada.',
    2:'Sí existen hipoglucemiantes orales con beneficio cardiovascular adicional documentado, relevante en pacientes con enfermedad cardiovascular.',
    3:'La enfermedad cardiovascular establecida sí debería influir directamente en la elección del segundo fármaco, aprovechando su beneficio adicional.'
  },
  trampa:'Reducir la elección del segundo fármaco al control glucémico aislado, sin considerar el beneficio cardiovascular adicional relevante para la comorbilidad del paciente.',
  obj:'Explicar cómo la comorbilidad cardiovascular guía la elección del segundo fármaco hipoglucemiante.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 41.',
  tags:['enfermedad cardiovascular','beneficio cardiovascular adicional','elección del segundo fármaco']
},
{
  id:'U10-FT-Q22', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica respiratoria', sub:'Enfoque escalonado del asma según control',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Según qué criterio se ajusta el tratamiento escalonado del asma, más que según una clasificación de gravedad fija?',
  ops:[
    'Según el nivel de control real de los síntomas del paciente (frecuencia de síntomas, uso de medicación de rescate, limitación de actividad)',
    'El tratamiento del asma se ajusta exclusivamente según una clasificación de gravedad asignada una sola vez al inicio', 'El tratamiento del asma nunca puede reducirse una vez iniciado, sin importar el nivel de control alcanzado', 'El ajuste del tratamiento del asma no tiene ninguna relación con el control real de los síntomas del paciente'],
  ok:0,
  clave:'Según el nivel de control real de los síntomas del paciente (frecuencia de síntomas, uso de medicación de rescate, limitación de actividad).',
  exp:'El tratamiento del asma se ajusta según el nivel de control real de los síntomas del paciente, no según una clasificación de gravedad fija asignada una sola vez. Un paciente bien controlado puede, con el tiempo, reducir su tratamiento; uno mal controlado necesita intensificarlo.',
  no:{
    1:'El ajuste NO se basa en una clasificación fija asignada una sola vez; se basa en el control real y actual de los síntomas.',
    2:'El tratamiento del asma SÍ puede reducirse cuando el paciente está bien controlado, no es un escalamiento unidireccional.',
    3:'El ajuste del tratamiento sí tiene una relación directa y central con el nivel de control real de los síntomas del paciente.'
  },
  trampa:'Asumir que el tratamiento del asma se basa en una clasificación de gravedad fija, en vez del nivel de control real y actual.',
  obj:'Explicar el criterio de ajuste escalonado del tratamiento del asma basado en el control real de síntomas.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 20.',
  tags:['asma','tratamiento escalonado','nivel de control']
},
{
  id:'U10-FT-Q23', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica respiratoria', sub:'Corticoides inhalados vs. broncodilatadores de rescate',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los corticoides inhalados son la base del tratamiento de mantenimiento en el asma persistente, distintos en función de los broncodilatadores de rescate?',
  ops:[
    'Porque actúan sobre la inflamación crónica subyacente de la vía aérea, no solo sobre el broncoespasmo agudo como los broncodilatadores de rescate',
    'Los corticoides inhalados y los broncodilatadores de rescate tienen exactamente la misma función terapéutica en el asma', 'Los broncodilatadores de rescate tratan la inflamación crónica de fondo, mientras que los corticoides solo alivian el broncoespasmo agudo', 'Los corticoides inhalados nunca deben usarse como parte del tratamiento de mantenimiento del asma persistente'],
  ok:0,
  clave:'Actúan sobre la inflamación crónica subyacente de la vía aérea, no solo sobre el broncoespasmo agudo como los broncodilatadores de rescate.',
  exp:'Los corticoides inhalados son la base del tratamiento de mantenimiento en el asma persistente, porque actúan sobre la inflamación crónica subyacente de la vía aérea, no solo sobre el broncoespasmo agudo -una distinción importante frente a los broncodilatadores de rescate, que alivian el síntoma pero no tratan la inflamación de fondo.',
  no:{
    1:'Tienen funciones distintas y complementarias: uno trata la inflamación de fondo, el otro alivia el broncoespasmo agudo.',
    2:'Es al revés: los CORTICOIDES tratan la inflamación de fondo, y los BRONCODILATADORES de rescate alivian el broncoespasmo agudo.',
    3:'Los corticoides inhalados son precisamente la base recomendada del tratamiento de mantenimiento en el asma persistente.'
  },
  trampa:'Confundir la función de los corticoides inhalados (tratar inflamación de fondo) con la de los broncodilatadores de rescate (aliviar el broncoespasmo agudo).',
  obj:'Distinguir la función de los corticoides inhalados de la de los broncodilatadores de rescate en el asma.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 20.',
  tags:['corticoides inhalados','broncodilatadores de rescate','inflamación crónica']
},
{
  id:'U10-FT-Q24', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica respiratoria', sub:'Meta terapéutica distinta en EPOC',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la meta del tratamiento farmacológico en la EPOC no es "curar" o revertir completamente la obstrucción, a diferencia del enfoque en el asma?',
  ops:[
    'Porque la EPOC involucra un daño estructural del pulmón que no revierte con el tratamiento farmacológico, así que la meta es reducir síntomas y enlentecer el deterioro',
    'La EPOC y el asma tienen exactamente la misma meta terapéutica, sin ninguna diferencia real entre ambas', 'El tratamiento farmacológico de la EPOC siempre logra revertir por completo el daño pulmonar estructural', 'La EPOC no tiene ningún componente de daño estructural, siendo completamente reversible con tratamiento'],
  ok:0,
  clave:'Porque la EPOC involucra un daño estructural del pulmón que no revierte con el tratamiento farmacológico, así que la meta es reducir síntomas y enlentecer el deterioro.',
  exp:'A diferencia del asma, la EPOC involucra un daño estructural del pulmón que no revierte con el tratamiento farmacológico: la meta terapéutica no es "curar" ni revertir completamente la obstrucción, sino reducir síntomas, prevenir exacerbaciones y enlentecer el deterioro de la función pulmonar.',
  no:{
    1:'Tienen metas terapéuticas distintas: el asma busca control total (reversible), la EPOC maneja una condición progresiva no reversible.',
    2:'El tratamiento de la EPOC NO revierte por completo el daño estructural; su meta es manejo, no curación.',
    3:'La EPOC sí involucra un componente de daño estructural (retomando el enfisema visto en Anatomía Patológica II), que no es completamente reversible.'
  },
  trampa:'Asumir que la EPOC y el asma comparten la misma meta terapéutica de control total y reversión completa de la obstrucción.',
  obj:'Explicar por qué la meta del tratamiento en EPOC es manejo de una condición progresiva, no reversión completa como en el asma.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 20.',
  tags:['EPOC','daño estructural','meta terapéutica']
},
{
  id:'U10-FT-Q25', programa:'unirm', cuatri:10,
  esp:'Farmacoterapéutica', tema:'Terapéutica respiratoria', sub:'Uso frecuente del inhalador de rescate como señal clínica',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente asmático usa su inhalador de rescate varias veces por semana, y solicita que se le prescriba un inhalador de rescate más grande para no quedarse sin medicación.',
  enunciado:'¿Qué interpretación clínica correcta debería tener este patrón de uso frecuente del rescate?',
  ops:[
    'Es una señal de que el tratamiento de mantenimiento no está funcionando adecuadamente y necesita reevaluarse y ajustarse, no simplemente aumentar la disponibilidad del rescate',
    'El uso frecuente de medicación de rescate es completamente normal y no requiere ningún ajuste del tratamiento de mantenimiento', 'La solución correcta es exactamente la que solicita el paciente: aumentar la disponibilidad del inhalador de rescate', 'El uso frecuente del inhalador de rescate no aporta ninguna información clínica útil sobre el control del asma'],
  ok:0,
  clave:'Es una señal de que el tratamiento de mantenimiento no está funcionando adecuadamente y necesita reevaluarse y ajustarse, no simplemente aumentar la disponibilidad del rescate.',
  exp:'El uso frecuente de medicación de rescate (varias veces por semana) es, en sí mismo, una señal clínica de que el tratamiento de mantenimiento no está funcionando adecuadamente y necesita ajustarse, no una situación a normalizar simplemente aumentando la disponibilidad del inhalador de rescate.',
  no:{
    1:'Este patrón sí es una señal clínica relevante de mal control, no una situación normal que no requiere ajuste.',
    2:'Aumentar simplemente la disponibilidad del rescate, sin reevaluar el tratamiento de mantenimiento, no es la conducta clínica correcta.',
    3:'El uso frecuente del rescate sí aporta información clínica valiosa: indica que el tratamiento de mantenimiento necesita reevaluación.'
  },
  trampa:'Aceptar la solicitud del paciente de más medicación de rescate sin reconocer que ese patrón de uso señala la necesidad de reevaluar el tratamiento de mantenimiento.',
  obj:'Interpretar correctamente el uso frecuente del inhalador de rescate como señal de mal control que requiere ajuste del tratamiento de mantenimiento.',
  ref:'Katzung, Farmacología Básica y Clínica, cap. 20.',
  tags:['uso frecuente de rescate','señal de mal control','reevaluación del tratamiento']
}

]);
