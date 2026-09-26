/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 10, TANDA DE SERVICIO
   HOSPITALARIO PRE CLINICO
   50 preguntas, prefijo U10-SHP-, distribuidas en 4 temas
   (13/13/12/12). Octava y ultima materia del cuatrimestre 10.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ============= SERVICIO HOSPITALARIO PRE CLÍNICO ============= */
{
  id:'U10-SHP-Q01', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Estructura y funcionamiento del hospital', sub:'Grandes áreas funcionales del hospital',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿En qué grandes áreas funcionales se organiza un hospital, según lo visto en este tema?',
  ops:[
    'Servicios clínicos, servicios de apoyo diagnóstico, servicios de apoyo terapéutico, y servicios administrativos y generales', 'Únicamente en servicios clínicos, sin ninguna otra área funcional relevante dentro de la estructura hospitalaria', 'Solo en servicios administrativos, sin ninguna relación real con los servicios clínicos o de apoyo diagnóstico', 'Exclusivamente en servicios de apoyo diagnóstico, sin ninguna otra área funcional dentro del hospital'],
  ok:0,
  clave:'Servicios clínicos, servicios de apoyo diagnóstico, servicios de apoyo terapéutico, y servicios administrativos y generales.',
  exp:'Un hospital se organiza en grandes áreas funcionales: los servicios clínicos, los servicios de apoyo diagnóstico, los servicios de apoyo terapéutico, y los servicios administrativos y generales -todos coordinados hacia el mismo objetivo compartido.',
  no:{
    1:'La estructura hospitalaria incluye múltiples áreas funcionales, no exclusivamente los servicios clínicos.',
    2:'Los servicios administrativos son solo una de varias áreas; también existen los servicios clínicos y de apoyo diagnóstico.',
    3:'Los servicios de apoyo diagnóstico son solo una de varias áreas funcionales del hospital, no la única existente.'
  },
  trampa:'Reducir la estructura hospitalaria a una sola área funcional, sin reconocer el conjunto completo de áreas que la componen.',
  obj:'Identificar las grandes áreas funcionales en las que se organiza un hospital.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 2.',
  tags:['estructura hospitalaria','áreas funcionales del hospital']
},
{
  id:'U10-SHP-Q02', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Estructura y funcionamiento del hospital', sub:'Objetivo compartido entre los distintos servicios',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué objetivo compartido tienen todos los servicios de un hospital, a pesar de operar con su propia lógica interna?',
  ops:[
    'Que el paciente reciba la atención que necesita de forma oportuna y segura', 'Cada servicio del hospital opera con un objetivo completamente distinto y desconectado de los demás servicios', 'El único objetivo compartido entre los servicios hospitalarios es reducir al mínimo posible los costos operativos', 'Los servicios administrativos y los servicios clínicos nunca comparten ningún objetivo institucional en común'],
  ok:0,
  clave:'Que el paciente reciba la atención que necesita de forma oportuna y segura.',
  exp:'Cada servicio opera con su propia lógica interna, pero todos existen en función del mismo objetivo compartido: que el paciente reciba la atención que necesita de forma oportuna y segura.',
  no:{
    1:'Es precisamente lo contrario: todos los servicios comparten el mismo objetivo final centrado en la atención al paciente.',
    2:'Reducir costos no es el único objetivo compartido; la atención oportuna y segura del paciente es el objetivo central.',
    3:'Los servicios administrativos sí comparten, en última instancia, el mismo objetivo institucional que los servicios clínicos.'
  },
  trampa:'Asumir que los distintos servicios de un hospital operan de forma completamente desconectada, sin un objetivo institucional compartido.',
  obj:'Explicar el objetivo compartido entre los distintos servicios de un hospital.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 2.',
  tags:['objetivo compartido','coordinación de servicios hospitalarios']
},
{
  id:'U10-SHP-Q03', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Estructura y funcionamiento del hospital', sub:'Secuencia del flujo del paciente hospitalizado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué secuencia sigue típicamente el flujo de un paciente hospitalizado?',
  ops:[
    'Ingreso, evaluación inicial y decisión de hospitalización, estancia con evaluaciones y tratamientos, y finalmente egreso', 'El flujo del paciente hospitalizado siempre comienza directamente con el egreso, sin ninguna etapa previa relevante', 'La estancia con evaluaciones y tratamientos siempre ocurre después del egreso del paciente, nunca antes de este', 'El flujo del paciente hospitalizado no sigue ninguna secuencia identificable ni reconocible en la práctica hospitalaria'],
  ok:0,
  clave:'Ingreso, evaluación inicial y decisión de hospitalización, estancia con evaluaciones y tratamientos, y finalmente egreso.',
  exp:'El flujo del paciente hospitalizado sigue típicamente una secuencia: ingreso, evaluación inicial y decisión de hospitalización, estancia en el servicio correspondiente, y finalmente el egreso.',
  no:{
    1:'El flujo del paciente comienza con el ingreso, no con el egreso, siguiendo una secuencia lógica identificable.',
    2:'La estancia con evaluaciones y tratamientos ocurre ANTES del egreso, no después de este, en la secuencia típica.',
    3:'El flujo del paciente hospitalizado sí sigue una secuencia identificable y reconocible en la práctica hospitalaria habitual.'
  },
  trampa:'Invertir el orden de las etapas del flujo del paciente hospitalizado, o asumir que no existe una secuencia identificable.',
  obj:'Identificar la secuencia típica del flujo de un paciente hospitalizado.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 2.',
  tags:['flujo del paciente hospitalizado','secuencia de ingreso a egreso']
},
{
  id:'U10-SHP-Q04', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Estructura y funcionamiento del hospital', sub:'Traslados entre servicios y comunicación',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente ingresado por emergencia requiere ser trasladado al servicio de cirugía, y posteriormente a la unidad de cuidados intensivos tras el procedimiento.',
  enunciado:'¿Qué es indispensable en cada uno de estos traslados, según lo visto en este tema?',
  ops:[
    'Una comunicación clara entre los equipos involucrados, para evitar que información crítica se pierda en la transición', 'Ningún tipo de comunicación específica es realmente necesaria entre los equipos durante estos traslados del paciente', 'Cada traslado del paciente entre servicios siempre ocurre de forma completamente automática, sin ninguna coordinación necesaria', 'La comunicación entre equipos solo es relevante en el traslado inicial, no en los traslados posteriores del paciente'],
  ok:0,
  clave:'Una comunicación clara entre los equipos involucrados, para evitar que información crítica se pierda en la transición.',
  exp:'Cada uno de estos traslados exige una comunicación clara entre los equipos involucrados, retomando la importancia ya vista de las herramientas de comunicación estructurada para evitar que información crítica se pierda en la transición.',
  no:{
    1:'Es precisamente lo contrario: la comunicación clara es indispensable en cada traslado para evitar pérdida de información crítica.',
    2:'Los traslados entre servicios sí requieren coordinación activa entre los equipos, no ocurren de forma automática sin ella.',
    3:'La comunicación clara es igualmente relevante en cada traslado, no solo en el inicial, para preservar la información crítica.'
  },
  trampa:'Asumir que los traslados entre servicios ocurren sin necesidad de comunicación activa entre los equipos involucrados.',
  obj:'Aplicar la importancia de la comunicación clara en cada traslado del paciente entre servicios hospitalarios.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 2.',
  tags:['traslado entre servicios','comunicación en transición de cuidado']
},
{
  id:'U10-SHP-Q05', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Estructura y funcionamiento del hospital', sub:'Los servicios de apoyo, invisibles pero indispensables',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los servicios de apoyo diagnóstico y terapéutico, aunque con frecuencia invisibles para el estudiante, son indispensables?',
  ops:[
    'Porque sin ellos ningún diagnóstico ni tratamiento sería posible, y sus retrasos o errores impactan directamente la calidad de la atención clínica', 'Los servicios de apoyo diagnóstico y terapéutico nunca tienen ninguna relación real con la calidad de la atención clínica brindada', 'Un diagnóstico o tratamiento siempre puede realizarse de forma completa sin ninguna dependencia de los servicios de apoyo', 'Los retrasos o errores en los servicios de apoyo nunca tienen ningún impacto real sobre la atención clínica del paciente'],
  ok:0,
  clave:'Porque sin ellos ningún diagnóstico ni tratamiento sería posible, y sus retrasos o errores impactan directamente la calidad de la atención clínica.',
  exp:'Los servicios de apoyo con frecuencia son invisibles para el estudiante enfocado en la interacción directa con el paciente, pero sin ellos ningún diagnóstico ni tratamiento sería posible; retrasos o errores en estos servicios tienen un impacto directo sobre la calidad y la oportunidad de la atención clínica.',
  no:{
    1:'Los servicios de apoyo sí tienen una relación directa y crítica con la calidad de la atención clínica brindada al paciente.',
    2:'Es precisamente lo contrario: el diagnóstico y el tratamiento dependen directamente de estos servicios de apoyo indispensables.',
    3:'Los retrasos o errores en los servicios de apoyo sí tienen un impacto real y directo sobre la atención clínica del paciente.'
  },
  trampa:'Subestimar la relevancia de los servicios de apoyo diagnóstico y terapéutico por ser menos visibles que la interacción clínica directa.',
  obj:'Explicar por qué los servicios de apoyo diagnóstico y terapéutico son indispensables para la atención clínica.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 2.',
  tags:['servicios hospitalarios de apoyo','impacto sobre la calidad clínica']
},
{
  id:'U10-SHP-Q06', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Estructura y funcionamiento del hospital', sub:'Entender las limitaciones de los servicios de apoyo',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudiante, al no entender los tiempos de procesamiento reales del laboratorio, formula una orden médica esperando un resultado de forma inmediata para un examen que típicamente toma varias horas en procesarse.',
  enunciado:'¿Qué comprensión adicional, propia de este tema, le habría ayudado a formular una orden más realista?',
  ops:[
    'Entender que los servicios de apoyo tienen sus propios procesos, capacidades y limitaciones de tiempo que deben considerarse', 'No existe ninguna forma real de anticipar los tiempos de procesamiento de los servicios de apoyo diagnóstico', 'Los servicios de apoyo diagnóstico siempre procesan cualquier examen de forma inmediata, sin ningún tiempo de espera', 'El tiempo de procesamiento de un examen nunca tiene ninguna relación real con la formulación de una orden médica'],
  ok:0,
  clave:'Entender que los servicios de apoyo tienen sus propios procesos, capacidades y limitaciones de tiempo que deben considerarse.',
  exp:'Entender que los servicios de apoyo también tienen sus propios procesos, capacidades y limitaciones -por ejemplo, el tiempo que toma procesar cierto examen- ayuda al estudiante a formular órdenes médicas más realistas y a comunicarse de forma más efectiva con estos servicios.',
  no:{
    1:'Sí existe una forma real de anticipar estos tiempos, entendiendo los procesos y limitaciones propios de cada servicio de apoyo.',
    2:'Es precisamente lo contrario: los servicios de apoyo diagnóstico típicamente requieren un tiempo real de procesamiento, no inmediato.',
    3:'El tiempo de procesamiento sí tiene una relación directa con la formulación realista de una orden médica apropiada.'
  },
  trampa:'Asumir que los servicios de apoyo diagnóstico procesan cualquier examen de forma inmediata, sin considerar sus tiempos reales de procesamiento.',
  obj:'Aplicar la comprensión de las limitaciones de los servicios de apoyo para formular órdenes médicas más realistas.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 2.',
  tags:['limitaciones de servicios de apoyo','orden médica realista']
},
{
  id:'U10-SHP-Q07', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Estructura y funcionamiento del hospital', sub:'Conexión con la complejidad organizativa ya vista',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué idea ya vista en Gerencia en Salud se conecta la estructura organizativa de un hospital descrita en este tema?',
  ops:[
    'La complejidad organizativa hospitalaria, donde múltiples funciones distintas deben coordinarse de forma simultánea', 'La estructura organizativa de un hospital no tiene ninguna relación real con ninguna idea ya vista en Gerencia en Salud', 'El signo de rebote ya visto en Semiología Quirúrgica, sin ninguna relación real con la estructura organizativa hospitalaria', 'La escalera analgésica ya vista en Farmacoterapéutica, sin ninguna relación real con la estructura hospitalaria'],
  ok:0,
  clave:'La complejidad organizativa hospitalaria, donde múltiples funciones distintas deben coordinarse de forma simultánea.',
  exp:'Esta estructura retoma directamente la complejidad organizativa ya vista en Gerencia en Salud, donde múltiples funciones distintas deben coordinarse de forma simultánea y continua, sin interrupciones posibles.',
  no:{
    1:'Sí existe una conexión conceptual directa con la complejidad organizativa hospitalaria ya vista en Gerencia en Salud.',
    2:'El signo de rebote es un hallazgo semiológico distinto, sin relación conceptual con la estructura organizativa hospitalaria.',
    3:'La escalera analgésica es un concepto farmacológico distinto, sin relación conceptual con la estructura organizativa hospitalaria.'
  },
  trampa:'No reconocer la conexión conceptual correcta entre la estructura hospitalaria de este tema y la complejidad organizativa ya vista en Gerencia en Salud.',
  obj:'Identificar la conexión entre la estructura hospitalaria y la complejidad organizativa ya vista en Gerencia en Salud.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 2.',
  tags:['conexión con gerencia en salud','complejidad organizativa hospitalaria']
},
{
  id:'U10-SHP-Q08', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Estructura y funcionamiento del hospital', sub:'Ejemplos de servicios de apoyo diagnóstico',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué servicios se consideran de apoyo diagnóstico dentro de la estructura hospitalaria?',
  ops:[
    'Laboratorio clínico, imagenología y patología', 'Únicamente el servicio de admisión, sin ningún otro servicio de apoyo diagnóstico relevante', 'Solo el servicio de mantenimiento, sin ninguna relación real con el apoyo diagnóstico hospitalario', 'Exclusivamente el servicio de alimentación, sin ninguna función real de apoyo diagnóstico'],
  ok:0,
  clave:'Laboratorio clínico, imagenología y patología.',
  exp:'Los servicios de apoyo diagnóstico incluyen el laboratorio clínico, la imagenología y la patología, distintos de los servicios administrativos y generales como admisión, mantenimiento o alimentación.',
  no:{
    1:'El servicio de admisión es un servicio administrativo, no de apoyo diagnóstico dentro de la estructura hospitalaria.',
    2:'El servicio de mantenimiento es un servicio general, no de apoyo diagnóstico dentro de la estructura hospitalaria.',
    3:'El servicio de alimentación es un servicio general, no de apoyo diagnóstico dentro de la estructura hospitalaria.'
  },
  trampa:'Confundir servicios administrativos o generales (admisión, mantenimiento, alimentación) con los servicios de apoyo diagnóstico propiamente dichos.',
  obj:'Identificar los servicios que se consideran de apoyo diagnóstico dentro de la estructura hospitalaria.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 2.',
  tags:['servicios de apoyo diagnóstico','laboratorio imagenología patología']
},
{
  id:'U10-SHP-Q09', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Estructura y funcionamiento del hospital', sub:'Egreso como parte del flujo del paciente',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué opciones puede incluir el egreso de un paciente hospitalizado, como etapa final del flujo del paciente?',
  ops:[
    'Alta médica, traslado a otro nivel de atención, o en algunos casos, fallecimiento', 'El egreso de un paciente hospitalizado únicamente puede ocurrir mediante el alta médica, sin ninguna otra opción posible', 'El egreso de un paciente nunca puede incluir un traslado a otro nivel de atención distinto del hospital actual', 'El egreso hospitalario es una etapa que nunca forma parte real del flujo completo del paciente hospitalizado'],
  ok:0,
  clave:'Alta médica, traslado a otro nivel de atención, o en algunos casos, fallecimiento.',
  exp:'El egreso, como etapa final del flujo del paciente, puede incluir el alta médica, el traslado a otro nivel de atención, o en algunos casos, el fallecimiento del paciente.',
  no:{
    1:'El alta médica es solo una de varias opciones posibles de egreso, no la única existente dentro del flujo del paciente.',
    2:'El traslado a otro nivel de atención sí es una opción válida de egreso dentro del flujo completo del paciente hospitalizado.',
    3:'El egreso sí forma parte integral del flujo completo del paciente hospitalizado, como su etapa final.'
  },
  trampa:'Reducir el egreso hospitalario únicamente al alta médica, sin reconocer las demás opciones posibles dentro de esta etapa.',
  obj:'Identificar las distintas opciones que puede incluir el egreso de un paciente hospitalizado.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 2.',
  tags:['egreso del paciente','opciones de egreso hospitalario']
},
{
  id:'U10-SHP-Q10', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Estructura y funcionamiento del hospital', sub:'No linealidad del flujo del paciente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el flujo del paciente hospitalizado no siempre es estrictamente lineal?',
  ops:[
    'Porque un paciente puede requerir traslados entre distintos servicios, según cómo evolucione su condición clínica durante la hospitalización', 'El flujo del paciente hospitalizado siempre es estrictamente lineal, sin ninguna posibilidad real de traslados entre servicios', 'Los traslados entre servicios durante una hospitalización nunca ocurren en la práctica hospitalaria real', 'La evolución clínica de un paciente nunca tiene ninguna relación real con los traslados entre servicios hospitalarios'],
  ok:0,
  clave:'Porque un paciente puede requerir traslados entre distintos servicios, según cómo evolucione su condición clínica durante la hospitalización.',
  exp:'Este flujo no siempre es lineal: un paciente puede requerir traslados entre servicios (de emergencia a cirugía, de cirugía a cuidados intensivos, y de vuelta a un servicio general), según cómo evolucione su condición clínica.',
  no:{
    1:'Es precisamente lo contrario: el flujo del paciente puede incluir traslados entre servicios, no siempre es estrictamente lineal.',
    2:'Los traslados entre servicios sí ocurren con frecuencia en la práctica hospitalaria real, según la evolución del paciente.',
    3:'La evolución clínica del paciente sí tiene una relación directa con la necesidad de traslados entre distintos servicios.'
  },
  trampa:'Asumir que el flujo del paciente hospitalizado siempre sigue una secuencia estrictamente lineal, sin posibilidad de traslados entre servicios.',
  obj:'Explicar por qué el flujo del paciente hospitalizado no siempre es estrictamente lineal.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 2.',
  tags:['no linealidad del flujo','traslados según evolución clínica']
},
{
  id:'U10-SHP-Q11', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Estructura y funcionamiento del hospital', sub:'Utilidad práctica de entender la estructura completa',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudiante se frustra porque un trámite administrativo previo a un procedimiento le parece una demora innecesaria, sin entender su propósito real dentro del funcionamiento hospitalario.',
  enunciado:'¿Qué comprensión, propia de este tema, podría cambiar su perspectiva sobre este trámite?',
  ops:[
    'Que este trámite probablemente responde a la coordinación necesaria entre los distintos servicios que hacen posible la atención de forma segura y organizada', 'Este tipo de trámites administrativos siempre son completamente innecesarios y nunca cumplen ningún propósito real', 'Los trámites administrativos en un hospital nunca tienen ninguna relación real con la coordinación entre servicios', 'Un estudiante nunca debería intentar comprender el propósito de los trámites administrativos de su hospital'],
  ok:0,
  clave:'Que este trámite probablemente responde a la coordinación necesaria entre los distintos servicios que hacen posible la atención de forma segura y organizada.',
  exp:'Un estudiante que entiende la estructura general del hospital comprende mejor por qué ciertos trámites administrativos son necesarios antes de un procedimiento, en vez de percibirlos solo como burocracia sin propósito.',
  no:{
    1:'Estos trámites, aunque a veces parezcan innecesarios, con frecuencia responden a una coordinación real necesaria entre servicios.',
    2:'Los trámites administrativos sí tienen una relación real con la coordinación entre los distintos servicios hospitalarios.',
    3:'Comprender el propósito de estos trámites ayuda al estudiante a navegar el sistema hospitalario de forma más efectiva.'
  },
  trampa:'Percibir cualquier trámite administrativo hospitalario como burocracia innecesaria, sin considerar su función real de coordinación entre servicios.',
  obj:'Aplicar la comprensión de la estructura hospitalaria para entender el propósito de trámites administrativos aparentemente burocráticos.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 2.',
  tags:['comprensión de trámites administrativos','coordinación entre servicios']
},
{
  id:'U10-SHP-Q12', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Estructura y funcionamiento del hospital', sub:'Servicios clínicos como una de las áreas funcionales',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué incluye el área de servicios clínicos dentro de la estructura de un hospital?',
  ops:[
    'Medicina interna, cirugía, pediatría, gineco-obstetricia, y sus subespecialidades', 'Únicamente el servicio de laboratorio clínico, sin ninguna otra especialidad médica incluida', 'Solo el servicio de farmacia, sin ninguna relación real con las especialidades médicas clínicas', 'Exclusivamente el servicio de admisión, sin ninguna relación real con las especialidades médicas del hospital'],
  ok:0,
  clave:'Medicina interna, cirugía, pediatría, gineco-obstetricia, y sus subespecialidades.',
  exp:'Los servicios clínicos incluyen medicina interna, cirugía, pediatría, gineco-obstetricia, y sus subespecialidades, distintos de los servicios de apoyo diagnóstico, terapéutico o administrativos.',
  no:{
    1:'El laboratorio clínico es un servicio de apoyo diagnóstico, no parte del área de servicios clínicos propiamente dicha.',
    2:'La farmacia es un servicio de apoyo terapéutico, no parte del área de servicios clínicos propiamente dicha.',
    3:'El servicio de admisión es un servicio administrativo, no parte del área de servicios clínicos propiamente dicha.'
  },
  trampa:'Confundir servicios de apoyo diagnóstico, terapéutico o administrativos con las especialidades médicas propias del área de servicios clínicos.',
  obj:'Identificar qué incluye el área de servicios clínicos dentro de la estructura hospitalaria.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 2.',
  tags:['servicios clínicos','especialidades médicas hospitalarias']
},
{
  id:'U10-SHP-Q13', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Estructura y funcionamiento del hospital', sub:'Consideración clínica sobre la estructura completa',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ventaja tiene, para un estudiante en su primera rotación, entender la estructura completa del hospital y no solo el servicio donde rota?',
  ops:[
    'Comprende mejor las razones detrás de tiempos de espera, trámites y coordinaciones que, vistos de forma aislada, podrían parecer solo burocracia', 'No existe ninguna ventaja real en entender la estructura completa del hospital más allá del servicio específico donde rota', 'Entender la estructura completa del hospital nunca tiene ninguna relación real con los tiempos de espera observados', 'Un estudiante debería enfocarse exclusivamente en el servicio donde rota, sin ninguna necesidad de entender el resto del hospital'],
  ok:0,
  clave:'Comprende mejor las razones detrás de tiempos de espera, trámites y coordinaciones que, vistos de forma aislada, podrían parecer solo burocracia.',
  exp:'Un estudiante que entiende la estructura completa del hospital -no solo el servicio donde rota- comprende mejor las razones detrás de tiempos de espera, trámites y coordinaciones que, vistos de forma aislada, podrían parecer solo burocracia.',
  no:{
    1:'Sí existe una ventaja real: comprender la estructura completa ayuda a interpretar mejor tiempos de espera y coordinaciones.',
    2:'Entender la estructura completa del hospital sí tiene una relación directa con la comprensión de los tiempos de espera observados.',
    3:'Enfocarse solo en el servicio propio, sin entender el resto del hospital, limita la comprensión de coordinaciones necesarias.'
  },
  trampa:'Asumir que un estudiante solo necesita entender el servicio específico donde rota, sin ninguna ventaja real en comprender la estructura hospitalaria completa.',
  obj:'Explicar la ventaja de entender la estructura completa del hospital para un estudiante en su primera rotación.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 2.',
  tags:['consideración clínica','comprensión de la estructura completa']
},
{
  id:'U10-SHP-Q14', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Rol del estudiante en el servicio hospitalario', sub:'Qué incluye el rol del estudiante',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué incluye el rol del estudiante en el servicio hospitalario, según lo visto en este tema?',
  ops:[
    'Observar, participar activamente en la recolección de información clínica bajo supervisión, presentar casos de forma organizada, y contribuir al cuidado dentro de límites claros', 'El rol del estudiante incluye tomar decisiones clínicas de forma completamente independiente, sin ninguna supervisión necesaria', 'El rol del estudiante se limita exclusivamente a observar, sin ninguna participación activa permitida en el cuidado del paciente', 'El rol del estudiante incluye realizar procedimientos sin supervisión, siempre que se sienta suficientemente preparado para ello'],
  ok:0,
  clave:'Observar, participar activamente en la recolección de información clínica bajo supervisión, presentar casos de forma organizada, y contribuir al cuidado dentro de límites claros.',
  exp:'El rol del estudiante incluye observar, participar activamente en la recolección de información clínica bajo supervisión, presentar casos de forma organizada, y contribuir al cuidado del paciente dentro de límites claramente establecidos -nunca incluye decisiones independientes ni procedimientos sin supervisión.',
  no:{
    1:'Es precisamente lo contrario: el rol del estudiante nunca incluye tomar decisiones clínicas de forma completamente independiente.',
    2:'El rol del estudiante va más allá de solo observar; incluye participación activa bajo supervisión en la recolección de información.',
    3:'Realizar procedimientos sin supervisión nunca corresponde al rol del estudiante, sin importar su nivel de preparación percibido.'
  },
  trampa:'Extralimitar el rol del estudiante hacia decisiones independientes o procedimientos sin supervisión, sin reconocer los límites claros establecidos.',
  obj:'Definir qué incluye y qué no incluye el rol del estudiante en el servicio hospitalario.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 4.',
  tags:['rol del estudiante de medicina','límites de participación']
},
{
  id:'U10-SHP-Q15', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Rol del estudiante en el servicio hospitalario', sub:'Por qué existen límites al rol del estudiante',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los límites al rol del estudiante no son una limitación arbitraria, sino que retoman la lógica de seguridad del paciente?',
  ops:[
    'Porque los sistemas y protocolos existen para reducir el margen de error humano, y un estudiante todavía no tiene la experiencia clínica acumulada para una decisión independiente segura', 'Los límites al rol del estudiante siempre son completamente arbitrarios, sin ninguna relación real con la seguridad del paciente', 'Un estudiante en formación siempre tiene la misma experiencia clínica acumulada que un profesional con años de práctica', 'La seguridad del paciente nunca tiene ninguna relación real con los límites establecidos al rol del estudiante'],
  ok:0,
  clave:'Porque los sistemas y protocolos existen para reducir el margen de error humano, y un estudiante todavía no tiene la experiencia clínica acumulada para una decisión independiente segura.',
  exp:'Esta distinción retoma la misma lógica ya vista sobre seguridad del paciente: los sistemas y protocolos existen precisamente para reducir el margen de error humano, y un estudiante en formación todavía no tiene la experiencia clínica acumulada que respalda una decisión independiente segura.',
  no:{
    1:'Es precisamente lo contrario: estos límites tienen una base real en la lógica de seguridad del paciente, no son arbitrarios.',
    2:'Un estudiante en formación, por definición, todavía no tiene la misma experiencia clínica acumulada que un profesional experimentado.',
    3:'La seguridad del paciente sí tiene una relación directa y central con los límites establecidos al rol del estudiante.'
  },
  trampa:'Percibir los límites al rol del estudiante como una restricción arbitraria, sin reconocer su base real en la lógica de seguridad del paciente.',
  obj:'Explicar por qué los límites al rol del estudiante se fundamentan en la lógica de seguridad del paciente ya vista.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 4.',
  tags:['límites del rol del estudiante','conexión con seguridad del paciente']
},
{
  id:'U10-SHP-Q16', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Rol del estudiante en el servicio hospitalario', sub:'Estructura de la presentación de caso en ronda',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué orden estandarizado sigue típicamente la presentación de un caso clínico en ronda?',
  ops:[
    'Motivo de consulta, historia de la enfermedad actual, antecedentes relevantes, hallazgos del examen físico, resultados de estudios, impresión diagnóstica y plan', 'La presentación de caso en ronda no sigue ningún orden estandarizado identificable en la práctica hospitalaria', 'Únicamente se presenta la impresión diagnóstica final, sin ninguna otra información adicional relevante', 'Solo se presentan los resultados de estudios, sin ninguna mención de la historia clínica ni del examen físico'],
  ok:0,
  clave:'Motivo de consulta, historia de la enfermedad actual, antecedentes relevantes, hallazgos del examen físico, resultados de estudios, impresión diagnóstica y plan.',
  exp:'La presentación de caso en ronda sigue típicamente un orden estandarizado: motivo de consulta, historia de la enfermedad actual, antecedentes relevantes, hallazgos del examen físico, resultados de estudios, impresión diagnóstica y plan.',
  no:{
    1:'La presentación de caso en ronda sí sigue un orden estandarizado identificable, precisamente para facilitar la comunicación del equipo.',
    2:'La presentación completa incluye mucho más que solo la impresión diagnóstica final, siguiendo el orden estandarizado descrito.',
    3:'La presentación incluye tanto la historia clínica como el examen físico, no solo los resultados de estudios aislados.'
  },
  trampa:'Reducir la presentación de caso en ronda a un solo componente aislado, sin reconocer el orden estandarizado completo que la estructura.',
  obj:'Identificar el orden estandarizado que sigue típicamente la presentación de un caso clínico en ronda.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 4.',
  tags:['presentación de caso clínico en ronda','orden estandarizado']
},
{
  id:'U10-SHP-Q17', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Rol del estudiante en el servicio hospitalario', sub:'Por qué el orden estandarizado facilita la comprensión del equipo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué seguir un orden estandarizado en la presentación de caso permite que el equipo entienda rápidamente el caso, sin importar cuántos pacientes deba revisar en la ronda?',
  ops:[
    'Porque el equipo sabe exactamente dónde encontrar cada tipo de información, sin necesidad de reconstruir el orden de la exposición cada vez', 'El orden estandarizado en la presentación de caso nunca tiene ninguna relación real con la rapidez de comprensión del equipo', 'Un equipo tarda exactamente el mismo tiempo en entender un caso, sin importar si la presentación sigue un orden estandarizado o no', 'Seguir un orden estandarizado en la presentación de caso siempre dificulta, en vez de facilitar, la comprensión rápida del equipo'],
  ok:0,
  clave:'Porque el equipo sabe exactamente dónde encontrar cada tipo de información, sin necesidad de reconstruir el orden de la exposición cada vez.',
  exp:'Seguir un orden estandarizado permite que el equipo completo entienda rápidamente el caso, sin importar cuántos pacientes deba revisar en la ronda, porque el equipo sabe exactamente dónde encontrar cada tipo de información dentro de la exposición.',
  no:{
    1:'Es precisamente lo contrario: el orden estandarizado sí tiene una relación directa con la rapidez de comprensión del equipo.',
    2:'Un orden estandarizado sí reduce el tiempo de comprensión del equipo, en comparación con una presentación desorganizada.',
    3:'Seguir un orden estandarizado facilita, no dificulta, la comprensión rápida del caso por parte del equipo completo.'
  },
  trampa:'Asumir que el orden de la presentación de caso no influye realmente en la rapidez con la que el equipo comprende la información.',
  obj:'Explicar por qué el orden estandarizado en la presentación de caso facilita la comprensión rápida del equipo.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 4.',
  tags:['orden estandarizado','comprensión rápida del equipo']
},
{
  id:'U10-SHP-Q18', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Rol del estudiante en el servicio hospitalario', sub:'Riesgo de una presentación desorganizada',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudiante presenta un caso clínico en ronda con toda la información correcta, pero sin seguir ningún orden claro, mezclando antecedentes con hallazgos del examen físico de forma desordenada.',
  enunciado:'¿Qué riesgo conlleva esta forma de presentación, aunque la información en sí sea correcta?',
  ops:[
    'Que el equipo tenga dificultad para captar lo esencial y pueda pasar por alto un dato relevante', 'Esta forma de presentación nunca conlleva ningún riesgo real, ya que la información presentada es correcta en su totalidad', 'Una presentación desorganizada siempre facilita, de la misma forma, la comprensión del equipo que una organizada', 'El orden de la presentación de caso nunca tiene ninguna relación real con la posibilidad de pasar por alto un dato relevante'],
  ok:0,
  clave:'Que el equipo tenga dificultad para captar lo esencial y pueda pasar por alto un dato relevante.',
  exp:'Una presentación desorganizada, aunque contenga toda la información correcta, dificulta que el equipo capte lo esencial y puede llevar a que se pase por alto un dato relevante.',
  no:{
    1:'Esta forma de presentación sí conlleva un riesgo real, aunque la información sea correcta, precisamente por su desorganización.',
    2:'Es precisamente lo contrario: una presentación desorganizada dificulta la comprensión, en comparación con una organizada.',
    3:'El orden de la presentación sí tiene una relación directa con el riesgo de pasar por alto un dato relevante durante la ronda.'
  },
  trampa:'Asumir que la corrección de la información presentada es suficiente, sin considerar el riesgo adicional de una presentación desorganizada.',
  obj:'Aplicar el riesgo de una presentación de caso desorganizada, aunque la información en sí sea correcta.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 4.',
  tags:['riesgo de presentación desorganizada','dato relevante pasado por alto']
},
{
  id:'U10-SHP-Q19', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Rol del estudiante en el servicio hospitalario', sub:'Preguntar como parte de la seguridad del paciente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un estudiante que pregunta cuando tiene una duda, en vez de simular seguridad que no tiene, contribuye a la seguridad del paciente?',
  ops:[
    'Porque el sistema funciona mejor cuando cada miembro del equipo se siente con la confianza de señalar lo que no entiende o lo que le preocupa', 'Preguntar cuando se tiene una duda nunca tiene ninguna relación real con la seguridad del paciente dentro del equipo', 'Un estudiante que simula seguridad que no tiene siempre contribuye de la misma forma a la seguridad del paciente', 'La confianza para señalar dudas dentro del equipo nunca tiene ninguna relación real con el funcionamiento del sistema de salud'],
  ok:0,
  clave:'Porque el sistema funciona mejor cuando cada miembro del equipo se siente con la confianza de señalar lo que no entiende o lo que le preocupa.',
  exp:'Preguntar contribuye activamente a la seguridad del paciente, retomando la cultura de reporte y comunicación abierta ya vista en gestión de calidad: el sistema funciona mejor cuando cada miembro del equipo se siente con la confianza de señalar lo que no entiende.',
  no:{
    1:'Preguntar cuando se tiene una duda sí tiene una relación directa y positiva con la seguridad del paciente dentro del equipo.',
    2:'Es precisamente lo contrario: simular seguridad que no se tiene compromete, en vez de contribuir, a la seguridad del paciente.',
    3:'La confianza para señalar dudas sí tiene una relación directa con el buen funcionamiento del sistema de seguridad del paciente.'
  },
  trampa:'Asumir que simular seguridad clínica, en vez de preguntar ante una duda real, es una conducta neutral o incluso preferible para el estudiante.',
  obj:'Explicar por qué preguntar ante una duda contribuye a la seguridad del paciente, retomando la cultura de reporte ya vista.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 4.',
  tags:['cultura de preguntar','conexión con cultura de reporte']
},
{
  id:'U10-SHP-Q20', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Rol del estudiante en el servicio hospitalario', sub:'Responsabilidad del equipo supervisor',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué responsabilidad tiene el equipo supervisor frente a las preguntas de un estudiante?',
  ops:[
    'Crear un ambiente donde esas preguntas sean bienvenidas, no penalizadas', 'El equipo supervisor nunca tiene ninguna responsabilidad real relacionada con las preguntas que un estudiante pueda hacer', 'El equipo supervisor debe penalizar activamente cualquier pregunta que un estudiante formule durante su rotación', 'Las preguntas de un estudiante nunca deberían generar ninguna respuesta activa por parte del equipo supervisor'],
  ok:0,
  clave:'Crear un ambiente donde esas preguntas sean bienvenidas, no penalizadas.',
  exp:'El equipo supervisor tiene la responsabilidad de crear un ambiente donde las preguntas del estudiante sean bienvenidas, no penalizadas -un estudiante que aprende en un ambiente de miedo a preguntar tiende a desarrollar hábitos de ocultamiento de dudas riesgosos a futuro.',
  no:{
    1:'El equipo supervisor sí tiene una responsabilidad real y activa frente a cómo recibe las preguntas del estudiante.',
    2:'Es precisamente lo contrario: penalizar las preguntas del estudiante genera hábitos de ocultamiento riesgosos a futuro.',
    3:'Las preguntas del estudiante sí deberían generar una respuesta activa y receptiva por parte del equipo supervisor.'
  },
  trampa:'Asumir que el equipo supervisor no tiene ninguna responsabilidad real en cómo recibe y responde a las preguntas de un estudiante.',
  obj:'Explicar la responsabilidad del equipo supervisor de crear un ambiente receptivo a las preguntas del estudiante.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 4.',
  tags:['responsabilidad del equipo supervisor','ambiente receptivo a preguntas']
},
{
  id:'U10-SHP-Q21', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Rol del estudiante en el servicio hospitalario', sub:'Riesgo de un ambiente de miedo a preguntar',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudiante que rota en un servicio donde las preguntas son frecuentemente ridiculizadas por el equipo supervisor comienza a evitar señalar sus dudas, incluso cuando son relevantes para el cuidado del paciente.',
  enunciado:'¿Qué riesgo a futuro se describe en este tema como consecuencia de este tipo de ambiente?',
  ops:[
    'Que el estudiante desarrolle hábitos de ocultamiento de dudas que, en la práctica clínica independiente futura, pueden convertirse en un riesgo real para sus pacientes', 'Este tipo de ambiente nunca tiene ninguna consecuencia real a futuro sobre los hábitos del estudiante en formación', 'Un estudiante que oculta sus dudas durante la formación siempre desarrolla, de todas formas, hábitos clínicos igualmente seguros', 'El ambiente de aprendizaje durante la formación nunca tiene ninguna relación real con los hábitos clínicos futuros del estudiante'],
  ok:0,
  clave:'Que el estudiante desarrolle hábitos de ocultamiento de dudas que, en la práctica clínica independiente futura, pueden convertirse en un riesgo real para sus pacientes.',
  exp:'Un estudiante que aprende en un ambiente de miedo a preguntar tiende a desarrollar hábitos de ocultamiento de dudas que, en la práctica clínica independiente futura, pueden convertirse en un riesgo real para sus pacientes.',
  no:{
    1:'Este tipo de ambiente sí tiene una consecuencia real y documentada sobre los hábitos futuros del estudiante en formación.',
    2:'Es precisamente lo contrario: ocultar dudas durante la formación puede comprometer la seguridad clínica futura del estudiante.',
    3:'El ambiente de aprendizaje sí tiene una relación directa con los hábitos clínicos que el estudiante desarrollará a futuro.'
  },
  trampa:'Subestimar el impacto a largo plazo de un ambiente de formación que penaliza las preguntas, sin considerar el riesgo futuro que genera.',
  obj:'Aplicar el riesgo a futuro de un ambiente de formación que penaliza las preguntas del estudiante.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 4.',
  tags:['riesgo de ambiente de miedo a preguntar','hábito de ocultamiento']
},
{
  id:'U10-SHP-Q22', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Rol del estudiante en el servicio hospitalario', sub:'Balance entre pasividad y extralimitación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué ni la pasividad total ni la extralimitación de funciones preparan adecuadamente al estudiante para la práctica clínica independiente futura?',
  ops:[
    'Porque el rol del estudiante combina participación activa dentro de límites claros con la disposición constante de preguntar, y ninguno de esos extremos por separado logra ese balance', 'La pasividad total siempre prepara mejor al estudiante para la práctica clínica independiente que la participación activa dentro de límites', 'La extralimitación de funciones siempre prepara mejor al estudiante para la práctica clínica independiente que respetar límites claros', 'El balance entre participación activa y límites claros nunca tiene ninguna relación real con la preparación para la práctica futura'],
  ok:0,
  clave:'Porque el rol del estudiante combina participación activa dentro de límites claros con la disposición constante de preguntar, y ninguno de esos extremos por separado logra ese balance.',
  exp:'El rol del estudiante combina participación activa dentro de límites claros con la disposición constante de preguntar; ni la pasividad total ni la extralimitación de funciones que no le corresponden todavía preparan adecuadamente para la práctica clínica independiente futura.',
  no:{
    1:'Es precisamente lo contrario: la pasividad total no prepara mejor que la participación activa dentro de límites claros.',
    2:'La extralimitación de funciones no prepara mejor al estudiante; de hecho, contradice la lógica de seguridad ya vista.',
    3:'Este balance sí tiene una relación directa y central con la preparación adecuada para la práctica clínica futura del estudiante.'
  },
  trampa:'Asumir que uno de los extremos (pasividad total o extralimitación) es preferible al balance entre participación activa y límites claros.',
  obj:'Explicar por qué el balance entre participación activa y límites claros prepara mejor al estudiante que cualquiera de los extremos.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 4.',
  tags:['balance pasividad-extralimitación','preparación para práctica futura']
},
{
  id:'U10-SHP-Q23', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Rol del estudiante en el servicio hospitalario', sub:'Conexión con herramientas de comunicación estructurada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué idea ya vista en Relación Médico-Paciente y en gestión de calidad se conecta directamente la presentación de caso en ronda?',
  ops:[
    'Las herramientas de comunicación estructurada, que permiten que la información crítica no se pierda entre distintos profesionales del equipo', 'La presentación de caso en ronda no tiene ninguna relación real con ninguna idea ya vista sobre comunicación estructurada', 'El consentimiento informado ya visto en Relación Médico-Paciente, sin ninguna relación real con la presentación de caso en ronda', 'La escala de Glasgow ya vista en Neurología, sin ninguna relación real con la presentación de caso en ronda'],
  ok:0,
  clave:'Las herramientas de comunicación estructurada, que permiten que la información crítica no se pierda entre distintos profesionales del equipo.',
  exp:'La presentación de caso en ronda retoma directamente las herramientas de comunicación estructurada ya vistas en Relación Médico-Paciente y en gestión de calidad, diseñadas para asegurar que la información crítica no se pierda entre distintos miembros del equipo.',
  no:{
    1:'Sí existe una conexión conceptual directa con las herramientas de comunicación estructurada ya vistas previamente.',
    2:'El consentimiento informado es un concepto distinto de relación médico-paciente, sin relación conceptual con la presentación de caso.',
    3:'La escala de Glasgow es una herramienta de evaluación neurológica distinta, sin relación conceptual con la presentación de caso.'
  },
  trampa:'No reconocer la conexión conceptual correcta entre la presentación de caso en ronda y las herramientas de comunicación estructurada ya vistas.',
  obj:'Identificar la conexión entre la presentación de caso en ronda y las herramientas de comunicación estructurada ya vistas.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 4.',
  tags:['conexión con comunicación estructurada','presentación de caso en ronda']
},
{
  id:'U10-SHP-Q24', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Rol del estudiante en el servicio hospitalario', sub:'Consideración clínica sobre el rol del estudiante',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudiante en su primera rotación pre clínica se siente inseguro y decide limitarse exclusivamente a observar, sin participar en ninguna actividad de recolección de información bajo supervisión.',
  enunciado:'¿Qué le corresponde entender a este estudiante sobre el rol que debería asumir?',
  ops:[
    'Que el rol del estudiante incluye participar activamente bajo supervisión, no limitarse solo a la observación pasiva', 'Este estudiante está actuando de forma completamente correcta, ya que la pasividad total siempre es la conducta más apropiada', 'El rol del estudiante siempre debe limitarse exclusivamente a la observación pasiva, sin ninguna participación activa permitida', 'La inseguridad inicial de un estudiante siempre justifica limitarse por completo a la observación, sin ninguna excepción'],
  ok:0,
  clave:'Que el rol del estudiante incluye participar activamente bajo supervisión, no limitarse solo a la observación pasiva.',
  exp:'El rol del estudiante incluye observar, pero también participar activamente en la recolección de información clínica bajo supervisión; limitarse exclusivamente a la observación pasiva no corresponde al rol descrito en este tema, aunque la inseguridad inicial sea comprensible.',
  no:{
    1:'Limitarse exclusivamente a la observación pasiva no corresponde completamente al rol activo del estudiante bajo supervisión.',
    2:'El rol del estudiante va más allá de la observación pasiva; incluye participación activa bajo la supervisión correspondiente.',
    3:'La inseguridad inicial es comprensible, pero no justifica limitarse por completo a la observación sin ninguna participación activa.'
  },
  trampa:'Confundir la prudencia apropiada de un estudiante inseguro con la pasividad total, sin reconocer que el rol incluye participación activa supervisada.',
  obj:'Aplicar la comprensión correcta del rol activo del estudiante frente a la inseguridad inicial de su primera rotación.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 4.',
  tags:['consideración clínica','participación activa bajo supervisión']
},
{
  id:'U10-SHP-Q25', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Rol del estudiante en el servicio hospitalario', sub:'Recolección de información clínica bajo supervisión',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la recolección de información clínica por parte del estudiante debe realizarse bajo supervisión, y no de forma completamente independiente?',
  ops:[
    'Porque, aunque el estudiante contribuye activamente, la supervisión permite verificar y complementar la información recolectada, reduciendo el margen de error', 'La supervisión de la recolección de información clínica nunca tiene ninguna relación real con la reducción del margen de error', 'Un estudiante en formación siempre recolecta información clínica con el mismo nivel de precisión que un profesional experimentado', 'La recolección de información clínica del estudiante nunca requiere ningún tipo de supervisión adicional por parte del equipo'],
  ok:0,
  clave:'Porque, aunque el estudiante contribuye activamente, la supervisión permite verificar y complementar la información recolectada, reduciendo el margen de error.',
  exp:'La recolección de información clínica bajo supervisión retoma la lógica ya vista sobre seguridad del paciente: la supervisión permite verificar y complementar la información recolectada por el estudiante, reduciendo el margen de error propio de la formación clínica temprana.',
  no:{
    1:'La supervisión sí tiene una relación directa con la reducción del margen de error en la información recolectada por el estudiante.',
    2:'Un estudiante en formación, por definición, todavía no tiene la misma precisión clínica que un profesional experimentado.',
    3:'La recolección de información clínica del estudiante sí requiere supervisión, precisamente para reducir el margen de error.'
  },
  trampa:'Asumir que un estudiante en formación recolecta información clínica con el mismo nivel de precisión que un profesional experimentado, sin necesitar supervisión.',
  obj:'Explicar por qué la recolección de información clínica del estudiante debe realizarse bajo supervisión.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 4.',
  tags:['supervisión de recolección clínica','reducción del margen de error']
},
{
  id:'U10-SHP-Q26', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Bioseguridad y prevención de infecciones intrahospitalarias', sub:'Definición de infección asociada a la atención de salud',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es una infección asociada a la atención de salud, según lo visto en este tema?',
  ops:[
    'Una infección que un paciente adquiere durante su atención en un centro de salud, sin que estuviera presente ni en periodo de incubación al momento del ingreso', 'Cualquier infección que un paciente presente al momento de su ingreso hospitalario, sin importar cuándo la adquirió realmente', 'Una infección asociada a la atención de salud nunca puede considerarse prevenible bajo ninguna circunstancia clínica', 'Únicamente las infecciones adquiridas fuera del ámbito hospitalario se consideran asociadas a la atención de salud'],
  ok:0,
  clave:'Una infección que un paciente adquiere durante su atención en un centro de salud, sin que estuviera presente ni en periodo de incubación al momento del ingreso.',
  exp:'Una infección asociada a la atención de salud (antes llamada infección nosocomial) es una infección que un paciente adquiere durante su atención en un centro de salud, sin que estuviera presente ni en periodo de incubación al momento del ingreso.',
  no:{
    1:'Es precisamente lo contrario: una infección presente al ingreso NO se considera asociada a la atención de salud, por definición.',
    2:'Una proporción importante de estas infecciones sí se considera prevenible, retomando el concepto de evento adverso prevenible.',
    3:'Es precisamente lo contrario: estas infecciones se adquieren DENTRO del ámbito de atención de salud, no fuera de este.'
  },
  trampa:'Confundir una infección presente al momento del ingreso con una infección asociada a la atención de salud, que se adquiere durante la atención misma.',
  obj:'Definir qué es una infección asociada a la atención de salud.',
  ref:'OMS, Guía de Aplicación de la Estrategia Multimodal para la Mejora de la Higiene de Manos.',
  tags:['infección asociada a la atención de salud','definición']
},
{
  id:'U10-SHP-Q27', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Bioseguridad y prevención de infecciones intrahospitalarias', sub:'Conexión con evento adverso prevenible',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué concepto ya visto en gestión de calidad se conecta directamente la infección asociada a la atención de salud?',
  ops:[
    'El evento adverso prevenible, ya que una proporción importante de estas infecciones son evitables con las precauciones adecuadas', 'La infección asociada a la atención de salud no tiene ninguna relación real con el concepto de evento adverso prevenible', 'El signo de rebote ya visto en Semiología Quirúrgica, sin ninguna relación real con las infecciones intrahospitalarias', 'La escalera analgésica ya vista en Farmacoterapéutica, sin ninguna relación real con las infecciones intrahospitalarias'],
  ok:0,
  clave:'El evento adverso prevenible, ya que una proporción importante de estas infecciones son evitables con las precauciones adecuadas.',
  exp:'Este concepto retoma directamente el concepto de evento adverso prevenible ya visto en gestión de calidad: una proporción importante de las infecciones asociadas a la atención de salud son evitables con las precauciones adecuadas.',
  no:{
    1:'Sí existe una conexión conceptual directa con el evento adverso prevenible ya visto en gestión de calidad.',
    2:'El signo de rebote es un hallazgo semiológico distinto, sin relación conceptual con las infecciones intrahospitalarias.',
    3:'La escalera analgésica es un concepto farmacológico distinto, sin relación conceptual con las infecciones intrahospitalarias.'
  },
  trampa:'No reconocer la conexión conceptual correcta entre la infección asociada a la atención de salud y el evento adverso prevenible ya visto.',
  obj:'Identificar la conexión entre la infección asociada a la atención de salud y el evento adverso prevenible ya visto.',
  ref:'OMS, Guía de Aplicación de la Estrategia Multimodal para la Mejora de la Higiene de Manos.',
  tags:['conexión con evento adverso prevenible','infección evitable']
},
{
  id:'U10-SHP-Q28', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Bioseguridad y prevención de infecciones intrahospitalarias', sub:'Consecuencias de la infección asociada a la atención de salud',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué consecuencias tiene una infección asociada a la atención de salud, tanto para el paciente como para la institución?',
  ops:[
    'Para el paciente: mayor estancia hospitalaria, mayor riesgo de complicaciones, en ocasiones mortalidad; para la institución: mayor costo', 'Una infección asociada a la atención de salud nunca tiene ninguna consecuencia real ni para el paciente ni para la institución', 'Las consecuencias de esta infección son exclusivamente institucionales, sin ningún impacto real sobre el paciente afectado', 'Las consecuencias de esta infección son exclusivamente clínicas para el paciente, sin ningún impacto real para la institución'],
  ok:0,
  clave:'Para el paciente: mayor estancia hospitalaria, mayor riesgo de complicaciones, en ocasiones mortalidad; para la institución: mayor costo.',
  exp:'Estas infecciones tienen consecuencias reales tanto para el paciente (mayor estancia hospitalaria, mayor riesgo de complicaciones, en ocasiones mortalidad) como para la institución (mayor costo, retomando la conexión entre calidad y gestión financiera).',
  no:{
    1:'Estas infecciones sí tienen consecuencias reales documentadas tanto para el paciente como para la institución.',
    2:'Las consecuencias no son exclusivamente institucionales; el paciente también enfrenta consecuencias clínicas reales significativas.',
    3:'Las consecuencias no son exclusivamente clínicas para el paciente; la institución también enfrenta un mayor costo asociado.'
  },
  trampa:'Reducir las consecuencias de una infección asociada a la atención de salud a un solo ámbito (solo paciente o solo institución), sin reconocer ambas dimensiones.',
  obj:'Identificar las consecuencias de una infección asociada a la atención de salud tanto para el paciente como para la institución.',
  ref:'OMS, Guía de Aplicación de la Estrategia Multimodal para la Mejora de la Higiene de Manos.',
  tags:['consecuencias de infección hospitalaria','impacto en paciente e institución']
},
{
  id:'U10-SHP-Q29', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Bioseguridad y prevención de infecciones intrahospitalarias', sub:'Qué son las precauciones estándar',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué son las precauciones estándar, y con qué pacientes deben aplicarse?',
  ops:[
    'El conjunto de prácticas mínimas que deben aplicarse con todo paciente, sin importar si tiene o no una infección conocida', 'Las precauciones estándar únicamente deben aplicarse con pacientes que tienen una infección confirmada y conocida', 'Las precauciones estándar nunca deben aplicarse con pacientes que no presentan ningún síntoma de infección evidente', 'Las precauciones estándar son un conjunto de prácticas opcionales, sin ninguna aplicación mínima obligatoria establecida'],
  ok:0,
  clave:'El conjunto de prácticas mínimas que deben aplicarse con todo paciente, sin importar si tiene o no una infección conocida.',
  exp:'Las precauciones estándar son el conjunto de prácticas mínimas que deben aplicarse con todo paciente, sin importar si tiene o no una infección conocida, precisamente porque no siempre es posible saber con certeza quién porta un microorganismo transmisible.',
  no:{
    1:'Es precisamente lo contrario: las precauciones estándar se aplican con TODO paciente, no solo con quienes tienen infección confirmada.',
    2:'Las precauciones estándar sí deben aplicarse incluso con pacientes sin síntomas evidentes de infección, por su naturaleza universal.',
    3:'Las precauciones estándar constituyen prácticas mínimas obligatorias, no un conjunto de prácticas meramente opcionales.'
  },
  trampa:'Asumir que las precauciones estándar solo deben aplicarse con pacientes que tienen una infección confirmada, en vez de con todo paciente sin excepción.',
  obj:'Definir qué son las precauciones estándar y con qué pacientes deben aplicarse.',
  ref:'OMS, Guía de Aplicación de la Estrategia Multimodal para la Mejora de la Higiene de Manos.',
  tags:['precauciones estándar','aplicación universal']
},
{
  id:'U10-SHP-Q30', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Bioseguridad y prevención de infecciones intrahospitalarias', sub:'Componentes de las precauciones estándar',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué incluyen las precauciones estándar, según lo visto en este tema?',
  ops:[
    'Higiene de manos en momentos clave, uso apropiado de equipo de protección personal, manejo seguro de objetos cortopunzantes, y limpieza adecuada del entorno', 'Las precauciones estándar incluyen únicamente el uso de mascarilla, sin ninguna otra práctica adicional relevante', 'Las precauciones estándar se limitan exclusivamente a la limpieza del entorno del paciente, sin ninguna otra práctica incluida', 'Las precauciones estándar incluyen solo el manejo de objetos cortopunzantes, sin ninguna relación con la higiene de manos'],
  ok:0,
  clave:'Higiene de manos en momentos clave, uso apropiado de equipo de protección personal, manejo seguro de objetos cortopunzantes, y limpieza adecuada del entorno.',
  exp:'Las precauciones estándar incluyen la higiene de manos en los momentos clave, el uso apropiado de equipo de protección personal, el manejo seguro de objetos cortopunzantes, y la limpieza adecuada del entorno del paciente.',
  no:{
    1:'El uso de mascarilla es solo un componente del equipo de protección personal, no la totalidad de las precauciones estándar.',
    2:'La limpieza del entorno es solo uno de varios componentes; también incluyen higiene de manos y manejo de cortopunzantes.',
    3:'El manejo de objetos cortopunzantes es solo un componente; la higiene de manos también forma parte central de las precauciones.'
  },
  trampa:'Reducir las precauciones estándar a un solo componente aislado, sin reconocer el conjunto completo de prácticas que las conforman.',
  obj:'Identificar los componentes que incluyen las precauciones estándar.',
  ref:'OMS, Guía de Aplicación de la Estrategia Multimodal para la Mejora de la Higiene de Manos.',
  tags:['componentes de precauciones estándar','equipo de protección personal']
},
{
  id:'U10-SHP-Q31', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Bioseguridad y prevención de infecciones intrahospitalarias', sub:'La higiene de manos como medida más efectiva',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la higiene de manos se considera la medida más simple y a la vez más efectiva para reducir la transmisión de infecciones dentro del hospital?',
  ops:[
    'Porque su aplicación consistente en los momentos clave reduce de forma significativa la transmisión de microorganismos, dependiendo de un hábito disciplinado', 'La higiene de manos nunca ha demostrado ninguna efectividad real para reducir la transmisión de infecciones dentro del hospital', 'La higiene de manos es una medida compleja y costosa, comparada con otras precauciones estándar disponibles en el hospital', 'La efectividad de la higiene de manos depende exclusivamente de la disponibilidad de insumos costosos y especializados'],
  ok:0,
  clave:'Porque su aplicación consistente en los momentos clave reduce de forma significativa la transmisión de microorganismos, dependiendo de un hábito disciplinado.',
  exp:'La higiene de manos es, de todas las medidas de precaución estándar, la más simple y a la vez la más efectiva para reducir la transmisión de infecciones; su aplicación consistente depende, en última instancia, de un hábito disciplinado que debe formarse desde el inicio de la formación clínica.',
  no:{
    1:'Es precisamente lo contrario: la higiene de manos sí ha demostrado una efectividad real y bien documentada en este contexto.',
    2:'La higiene de manos es, de hecho, una medida simple y de bajo costo, no compleja ni costosa en comparación con otras precauciones.',
    3:'La efectividad de la higiene de manos depende principalmente del hábito disciplinado de aplicarla, no de insumos costosos especiales.'
  },
  trampa:'Subestimar la efectividad de la higiene de manos por su simplicidad aparente, sin reconocer su impacto real y bien documentado.',
  obj:'Explicar por qué la higiene de manos se considera la medida más simple y efectiva para reducir la transmisión de infecciones.',
  ref:'OMS, Guía de Aplicación de la Estrategia Multimodal para la Mejora de la Higiene de Manos.',
  tags:['higiene de manos','medida más efectiva']
},
{
  id:'U10-SHP-Q32', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Bioseguridad y prevención de infecciones intrahospitalarias', sub:'Momentos clave de la higiene de manos',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿En qué momentos clave debe aplicarse la higiene de manos, según lo visto en este tema?',
  ops:[
    'Antes y después del contacto con el paciente, antes de un procedimiento limpio, y después de exposición a fluidos corporales', 'La higiene de manos únicamente debe aplicarse al inicio del turno laboral, sin ninguna otra ocasión relevante durante la jornada', 'La higiene de manos debe aplicarse solo después de un procedimiento invasivo, sin ninguna aplicación previa al contacto con el paciente', 'No existen momentos clave específicos identificables para la aplicación de la higiene de manos durante la atención hospitalaria'],
  ok:0,
  clave:'Antes y después del contacto con el paciente, antes de un procedimiento limpio, y después de exposición a fluidos corporales.',
  exp:'La higiene de manos debe aplicarse en los momentos clave: antes y después del contacto con el paciente, antes de un procedimiento limpio, y después de exposición a fluidos corporales.',
  no:{
    1:'La higiene de manos debe aplicarse en múltiples momentos durante la jornada, no únicamente al inicio del turno laboral.',
    2:'La higiene de manos debe aplicarse también ANTES del contacto con el paciente, no solo después de un procedimiento invasivo.',
    3:'Sí existen momentos clave específicos identificables para la aplicación de la higiene de manos durante la atención hospitalaria.'
  },
  trampa:'Reducir la higiene de manos a un solo momento aislado durante la jornada, sin reconocer los distintos momentos clave identificados.',
  obj:'Identificar los momentos clave en los que debe aplicarse la higiene de manos.',
  ref:'OMS, Guía de Aplicación de la Estrategia Multimodal para la Mejora de la Higiene de Manos.',
  tags:['momentos clave de higiene de manos','aplicación consistente']
},
{
  id:'U10-SHP-Q33', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Bioseguridad y prevención de infecciones intrahospitalarias', sub:'El estudiante como vector potencial desde el primer día',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un estudiante en su primera rotación pre clínica es, desde su primer contacto con el entorno hospitalario, un vector potencial de transmisión igual que cualquier otro miembro del equipo?',
  ops:[
    'Porque aplicar las precauciones estándar de forma consistente es una responsabilidad de cualquier persona en contacto con el entorno hospitalario, sin importar su nivel de experiencia', 'Un estudiante en su primera rotación nunca puede considerarse realmente un vector potencial de transmisión de infecciones', 'Las precauciones estándar solo son responsabilidad del personal con más experiencia, no de un estudiante en formación temprana', 'Ser un vector potencial de transmisión depende exclusivamente del nivel de experiencia clínica acumulada de la persona'],
  ok:0,
  clave:'Porque aplicar las precauciones estándar de forma consistente es una responsabilidad de cualquier persona en contacto con el entorno hospitalario, sin importar su nivel de experiencia.',
  exp:'Aplicar las precauciones estándar de forma consistente no es una formalidad reservada para el personal con más experiencia, sino una responsabilidad que corresponde a cualquier persona que entra en contacto con pacientes o con el entorno hospitalario, desde el primer día.',
  no:{
    1:'Es precisamente lo contrario: un estudiante desde su primer día sí puede ser un vector potencial de transmisión, igual que cualquiera.',
    2:'Las precauciones estándar son responsabilidad de CUALQUIER persona en el entorno hospitalario, no exclusivamente del personal experimentado.',
    3:'Ser un vector potencial de transmisión no depende de la experiencia clínica, sino del contacto con el entorno hospitalario mismo.'
  },
  trampa:'Asumir que solo el personal con más experiencia tiene la responsabilidad real de aplicar las precauciones estándar de forma consistente.',
  obj:'Explicar por qué un estudiante, desde su primer día, tiene la misma responsabilidad de bioseguridad que cualquier otro miembro del equipo.',
  ref:'OMS, Guía de Aplicación de la Estrategia Multimodal para la Mejora de la Higiene de Manos.',
  tags:['responsabilidad desde el primer día','vector potencial de transmisión']
},
{
  id:'U10-SHP-Q34', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Bioseguridad y prevención de infecciones intrahospitalarias', sub:'Bioseguridad como responsabilidad compartida',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un servicio hospitalario, todos los profesionales aplican consistentemente las precauciones estándar, excepto un estudiante que, por descuido, omite la higiene de manos antes de examinar a un paciente inmunocomprometido.',
  enunciado:'¿Qué principio de este tema ilustra mejor el riesgo de esta situación?',
  ops:[
    'Que un sistema de bioseguridad funciona cuando cada persona involucrada, sin excepción, sigue las precauciones correspondientes; un solo eslabón débil puede comprometer la seguridad del paciente', 'Este tipo de descuido individual nunca tiene ninguna relación real con la seguridad general del sistema de bioseguridad del servicio', 'La bioseguridad de un servicio hospitalario depende exclusivamente de las acciones del personal con mayor jerarquía formal', 'Un solo descuido aislado de un estudiante nunca puede comprometer realmente la seguridad de ningún paciente hospitalizado'],
  ok:0,
  clave:'Que un sistema de bioseguridad funciona cuando cada persona involucrada, sin excepción, sigue las precauciones correspondientes; un solo eslabón débil puede comprometer la seguridad del paciente.',
  exp:'Un sistema de bioseguridad funciona cuando cada persona involucrada, sin excepción, sigue las precauciones correspondientes -un solo eslabón débil en esta cadena, como un estudiante que no se lava las manos, puede comprometer la seguridad de un paciente vulnerable, como el inmunocomprometido de este caso.',
  no:{
    1:'Este descuido individual sí tiene una relación directa con la seguridad general del sistema de bioseguridad del servicio.',
    2:'La bioseguridad depende de TODOS los miembros del equipo, sin importar su jerarquía formal, no exclusivamente de quienes tienen más rango.',
    3:'Un solo descuido aislado sí puede comprometer realmente la seguridad de un paciente, especialmente uno vulnerable como este caso.'
  },
  trampa:'Subestimar el impacto de un descuido individual en bioseguridad, asumiendo que la responsabilidad recae solo en el personal de mayor jerarquía.',
  obj:'Aplicar el principio de responsabilidad compartida en bioseguridad ante un descuido individual con riesgo real para un paciente vulnerable.',
  ref:'OMS, Guía de Aplicación de la Estrategia Multimodal para la Mejora de la Higiene de Manos.',
  tags:['responsabilidad compartida en bioseguridad','eslabón débil de la cadena']
},
{
  id:'U10-SHP-Q35', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Bioseguridad y prevención de infecciones intrahospitalarias', sub:'Bioseguridad como hábito práctico, no solo teoría',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la bioseguridad se describe en este tema como un hábito práctico, y no solo como una serie de reglas abstractas para un examen?',
  ops:[
    'Porque su aplicación consistente en la práctica diaria, no solo su conocimiento teórico, es lo que protege realmente a los pacientes y al propio estudiante', 'La bioseguridad se limita exclusivamente a un conjunto de reglas teóricas que memorizar, sin ninguna aplicación práctica real', 'Conocer las reglas teóricas de bioseguridad siempre garantiza automáticamente su aplicación práctica consistente y efectiva', 'La aplicación práctica de la bioseguridad nunca tiene ninguna relación real con la protección efectiva de los pacientes'],
  ok:0,
  clave:'Porque su aplicación consistente en la práctica diaria, no solo su conocimiento teórico, es lo que protege realmente a los pacientes y al propio estudiante.',
  exp:'La bioseguridad no es una serie de reglas abstractas que aprender para un examen, sino un hábito práctico que un estudiante debe empezar a construir desde su primera rotación, porque su aplicación consistente protege tanto a los pacientes como al propio estudiante.',
  no:{
    1:'Es precisamente lo contrario: la bioseguridad va más allá de las reglas teóricas, siendo un hábito práctico que debe construirse activamente.',
    2:'Conocer las reglas teóricas no garantiza automáticamente su aplicación práctica consistente; ambas cosas son distintas.',
    3:'La aplicación práctica de la bioseguridad sí tiene una relación directa y central con la protección real de los pacientes.'
  },
  trampa:'Reducir la bioseguridad a un conjunto de reglas teóricas para memorizar, sin reconocer su naturaleza de hábito práctico que debe construirse activamente.',
  obj:'Explicar por qué la bioseguridad se describe como un hábito práctico que debe construirse desde la formación temprana.',
  ref:'OMS, Guía de Aplicación de la Estrategia Multimodal para la Mejora de la Higiene de Manos.',
  tags:['bioseguridad como hábito práctico','construcción desde formación temprana']
},
{
  id:'U10-SHP-Q36', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Bioseguridad y prevención de infecciones intrahospitalarias', sub:'Bioseguridad como objetivo clínico e institucional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la prevención de infecciones se describe en este tema como simultáneamente un objetivo clínico y un objetivo de gestión institucional?',
  ops:[
    'Porque tiene consecuencias reales tanto para el paciente (clínicas) como para la institución (costo), retomando la conexión ya vista entre calidad y gestión financiera', 'La prevención de infecciones es exclusivamente un objetivo clínico, sin ninguna relación real con la gestión institucional del hospital', 'La prevención de infecciones es exclusivamente un objetivo de gestión institucional, sin ninguna relación real con la dimensión clínica', 'No existe ninguna conexión real entre el objetivo clínico y el objetivo institucional de la prevención de infecciones'],
  ok:0,
  clave:'Porque tiene consecuencias reales tanto para el paciente (clínicas) como para la institución (costo), retomando la conexión ya vista entre calidad y gestión financiera.',
  exp:'La prevención de infecciones es simultáneamente un objetivo clínico y un objetivo de gestión institucional, porque tiene consecuencias reales tanto para el paciente como para la institución, retomando la conexión ya vista entre calidad y gestión financiera en Gerencia en Salud.',
  no:{
    1:'La prevención de infecciones sí tiene una relación directa y real con la gestión institucional, no es exclusivamente un objetivo clínico.',
    2:'La prevención de infecciones sí tiene una relación directa y real con la dimensión clínica, no es exclusivamente institucional.',
    3:'Sí existe una conexión real entre ambos objetivos, retomando la relación ya vista entre calidad clínica y gestión financiera.'
  },
  trampa:'Separar el objetivo clínico del objetivo institucional en la prevención de infecciones, sin reconocer su conexión directa ya vista en Gerencia en Salud.',
  obj:'Explicar por qué la prevención de infecciones es simultáneamente un objetivo clínico e institucional.',
  ref:'OMS, Guía de Aplicación de la Estrategia Multimodal para la Mejora de la Higiene de Manos.',
  tags:['conexión con gestión financiera','objetivo clínico e institucional']
},
{
  id:'U10-SHP-Q37', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Bioseguridad y prevención de infecciones intrahospitalarias', sub:'Por qué las precauciones se aplican con todo paciente',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudiante decide aplicar la higiene de manos y el equipo de protección personal solo con los pacientes que tienen una infección diagnosticada y conocida, omitiéndolo con el resto.',
  enunciado:'¿Por qué esta conducta contradice el principio de las precauciones estándar visto en este tema?',
  ops:[
    'Porque no siempre es posible saber con certeza quién porta un microorganismo transmisible, por lo que las precauciones deben aplicarse con todo paciente', 'Esta conducta es completamente correcta, ya que las precauciones estándar solo deben aplicarse con pacientes con infección diagnosticada', 'Es imposible que un paciente sin diagnóstico de infección conocida porte algún microorganismo transmisible en ningún caso', 'Las precauciones estándar nunca han tenido como propósito aplicarse de forma universal con todo paciente atendido'],
  ok:0,
  clave:'Porque no siempre es posible saber con certeza quién porta un microorganismo transmisible, por lo que las precauciones deben aplicarse con todo paciente.',
  exp:'Las precauciones estándar deben aplicarse con todo paciente, sin importar si tiene o no una infección conocida, precisamente porque no siempre es posible saber con certeza quién porta un microorganismo transmisible -limitarlas solo a pacientes con diagnóstico conocido contradice este principio.',
  no:{
    1:'Esta conducta contradice el principio de aplicación universal de las precauciones estándar, no es correcta.',
    2:'Un paciente sin diagnóstico conocido de infección sí puede portar un microorganismo transmisible no detectado aún.',
    3:'Es precisamente lo contrario: las precauciones estándar sí tienen como propósito aplicarse de forma universal con todo paciente.'
  },
  trampa:'Asumir que las precauciones estándar solo son necesarias con pacientes que tienen un diagnóstico de infección conocido y confirmado.',
  obj:'Aplicar el principio de universalidad de las precauciones estándar ante una conducta que las limita solo a pacientes con diagnóstico conocido.',
  ref:'OMS, Guía de Aplicación de la Estrategia Multimodal para la Mejora de la Higiene de Manos.',
  tags:['universalidad de precauciones estándar','riesgo de infección no diagnosticada']
},
{
  id:'U10-SHP-Q38', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Documentación clínica hospitalaria', sub:'Qué es el expediente clínico hospitalario',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es el expediente clínico hospitalario, y qué función cumple?',
  ops:[
    'El registro completo y cronológico de la atención de un paciente durante su hospitalización, que funciona como la memoria institucional del caso', 'El expediente clínico hospitalario únicamente incluye los resultados de laboratorio del paciente, sin ninguna otra información relevante', 'El expediente clínico hospitalario nunca tiene ninguna relación real con la comunicación entre distintos miembros del equipo', 'El expediente clínico hospitalario es un documento opcional, sin ninguna función real obligatoria dentro de la atención'],
  ok:0,
  clave:'El registro completo y cronológico de la atención de un paciente durante su hospitalización, que funciona como la memoria institucional del caso.',
  exp:'El expediente clínico hospitalario es el registro completo y cronológico de la atención de un paciente durante su hospitalización, funcionando como la memoria institucional del caso, permitiendo que cualquier miembro del equipo entienda la situación clínica con solo revisarlo.',
  no:{
    1:'El expediente clínico incluye mucho más que resultados de laboratorio: historia clínica, notas de evolución, órdenes médicas, entre otros.',
    2:'El expediente clínico sí tiene una relación directa y central con la comunicación entre distintos miembros del equipo de salud.',
    3:'El expediente clínico hospitalario cumple una función real y central, no es un documento meramente opcional dentro de la atención.'
  },
  trampa:'Reducir el expediente clínico hospitalario a un solo componente aislado (como los resultados de laboratorio), sin reconocer su función completa.',
  obj:'Definir qué es el expediente clínico hospitalario y qué función cumple dentro de la atención del paciente.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 9.',
  tags:['expediente clínico hospitalario','memoria institucional del caso']
},
{
  id:'U10-SHP-Q39', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Documentación clínica hospitalaria', sub:'El expediente como puente entre turnos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el expediente clínico funciona con frecuencia como el único puente de información confiable entre distintos turnos de trabajo?',
  ops:[
    'Porque en un hospital donde el personal rota por turnos, un expediente claro y completo permite que el equipo que llega entienda la situación del paciente sin depender de la memoria del equipo saliente', 'El expediente clínico nunca tiene ninguna relación real con la transición de información entre distintos turnos de trabajo', 'La rotación de personal por turnos nunca genera ninguna necesidad real de un puente de información confiable entre equipos', 'La memoria del equipo saliente siempre es una fuente de información igual de confiable que el expediente clínico escrito'],
  ok:0,
  clave:'Porque en un hospital donde el personal rota por turnos, un expediente claro y completo permite que el equipo que llega entienda la situación del paciente sin depender de la memoria del equipo saliente.',
  exp:'En un hospital donde el personal rota por turnos, un expediente claro y completo es, con frecuencia, el único puente de información confiable entre el equipo que atendió al paciente en un momento y el que lo atiende en otro.',
  no:{
    1:'El expediente clínico sí tiene una relación directa y crítica con la transición confiable de información entre distintos turnos.',
    2:'La rotación de personal por turnos sí genera una necesidad real de un puente de información confiable, cumplida por el expediente.',
    3:'La memoria del equipo saliente es menos confiable que un expediente escrito, precisamente por el riesgo de pérdida u olvido de detalles.'
  },
  trampa:'Asumir que la memoria verbal del equipo saliente es tan confiable como un expediente clínico escrito para la transición de información entre turnos.',
  obj:'Explicar por qué el expediente clínico funciona como puente confiable de información entre distintos turnos de trabajo.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 9.',
  tags:['expediente como puente entre turnos','transición de información confiable']
},
{
  id:'U10-SHP-Q40', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Documentación clínica hospitalaria', sub:'Estructura de la nota de evolución (formato SOAP)',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué componentes incluye típicamente el formato SOAP de una nota de evolución?',
  ops:[
    'Subjetivo, objetivo, análisis o evaluación, y plan', 'El formato SOAP incluye únicamente el análisis diagnóstico, sin ninguna otra sección adicional relevante', 'El formato SOAP se limita exclusivamente al plan de tratamiento, sin ninguna otra información incluida', 'El formato SOAP no sigue ninguna estructura identificable ni reconocible en la documentación clínica hospitalaria'],
  ok:0,
  clave:'Subjetivo, objetivo, análisis o evaluación, y plan.',
  exp:'La nota de evolución sigue típicamente el formato SOAP: subjetivo, objetivo, análisis o evaluación, y plan, permitiendo documentar de forma consistente cómo evoluciona el paciente día a día.',
  no:{
    1:'El análisis diagnóstico es solo uno de los cuatro componentes del formato SOAP, no la totalidad de su estructura.',
    2:'El plan de tratamiento es solo uno de los cuatro componentes del formato SOAP, no la totalidad de su estructura.',
    3:'El formato SOAP sí sigue una estructura identificable y reconocible, ampliamente utilizada en la documentación clínica hospitalaria.'
  },
  trampa:'Reducir el formato SOAP a un solo componente aislado, sin reconocer la estructura completa de cuatro partes que lo conforma.',
  obj:'Identificar los componentes que incluye típicamente el formato SOAP de una nota de evolución.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 9.',
  tags:['nota de evolución','formato SOAP']
},
{
  id:'U10-SHP-Q41', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Documentación clínica hospitalaria', sub:'Documentar el razonamiento clínico, no solo lo obvio',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una nota de evolución completa debe incluir el razonamiento clínico detrás de las decisiones tomadas, y no solo los datos obvios?',
  ops:[
    'Porque permite que, si en el futuro surge una pregunta sobre por qué se tomó determinada decisión, el expediente pueda responderla sin depender de la memoria de quien la escribió', 'Documentar el razonamiento clínico detrás de las decisiones nunca aporta ninguna utilidad real adicional a la nota de evolución', 'Una nota de evolución que solo documenta datos obvios siempre es igual de completa que una que incluye el razonamiento clínico', 'El razonamiento clínico detrás de una decisión nunca necesita quedar documentado en el expediente del paciente'],
  ok:0,
  clave:'Porque permite que, si en el futuro surge una pregunta sobre por qué se tomó determinada decisión, el expediente pueda responderla sin depender de la memoria de quien la escribió.',
  exp:'Una nota de evolución completa y clara incluye el razonamiento clínico detrás de las decisiones tomadas, de forma que, si en el futuro surge una pregunta sobre por qué se tomó determinada decisión, el expediente pueda responderla sin depender de la memoria de quien la escribió.',
  no:{
    1:'Documentar el razonamiento clínico sí aporta una utilidad real: permite responder preguntas futuras sin depender de la memoria.',
    2:'Es precisamente lo contrario: una nota que solo documenta lo obvio es MENOS completa que una que incluye el razonamiento clínico.',
    3:'El razonamiento clínico sí debería quedar documentado, precisamente para que el expediente pueda responder preguntas futuras.'
  },
  trampa:'Asumir que documentar solo los datos obvios (diagnóstico, plan) es suficiente, sin incluir el razonamiento clínico que sustenta esas decisiones.',
  obj:'Explicar por qué una nota de evolución completa debe incluir el razonamiento clínico detrás de las decisiones tomadas.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 9.',
  tags:['razonamiento clínico documentado','nota de evolución completa']
},
{
  id:'U10-SHP-Q42', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Documentación clínica hospitalaria', sub:'Qué es una orden médica',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es una orden médica, según lo visto en este tema?',
  ops:[
    'La instrucción formal escrita en el expediente que indica una acción específica a realizar', 'Una orden médica es siempre exclusivamente una indicación verbal, sin ningún registro escrito necesario', 'Una orden médica nunca tiene ninguna relación real con la reducción del riesgo de malentendidos en el equipo', 'Una orden médica es un documento opcional dentro del expediente, sin ninguna función vinculante real'],
  ok:0,
  clave:'La instrucción formal escrita en el expediente que indica una acción específica a realizar.',
  exp:'La orden médica es la instrucción formal escrita en el expediente que indica una acción específica a realizar -a diferencia de una indicación verbal, queda registrada de forma verificable, reduciendo el riesgo de malentendidos.',
  no:{
    1:'Es precisamente lo contrario: la orden médica es una instrucción ESCRITA, a diferencia de una indicación verbal no registrada.',
    2:'La orden médica escrita sí tiene una relación directa con la reducción del riesgo de malentendidos en la ejecución por el equipo.',
    3:'La orden médica tiene un carácter vinculante real dentro del expediente, no es un documento meramente opcional.'
  },
  trampa:'Confundir una orden médica escrita y vinculante con una simple indicación verbal, sin registro formal en el expediente.',
  obj:'Definir qué es una orden médica y su carácter formal dentro del expediente clínico.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 9.',
  tags:['orden médica','carácter formal escrito']
},
{
  id:'U10-SHP-Q43', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Documentación clínica hospitalaria', sub:'Conexión con sistemas de doble verificación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué concepto ya visto en gestión de calidad se conecta el carácter escrito y verificable de la orden médica?',
  ops:[
    'Los sistemas de doble verificación, ya que una orden escrita queda registrada de forma verificable, reduciendo el riesgo de malentendidos o acciones no documentadas', 'El carácter escrito de la orden médica no tiene ninguna relación real con ningún sistema ya visto en gestión de calidad', 'El signo de Blumberg ya visto en Semiología Quirúrgica, sin ninguna relación real con la orden médica escrita', 'La escala de Glasgow ya vista en Neurología, sin ninguna relación real con la orden médica escrita'],
  ok:0,
  clave:'Los sistemas de doble verificación, ya que una orden escrita queda registrada de forma verificable, reduciendo el riesgo de malentendidos o acciones no documentadas.',
  exp:'Una orden médica escrita, a diferencia de una indicación verbal, queda registrada de forma verificable, reduciendo el riesgo de malentendidos o de acciones no documentadas, retomando directamente los sistemas de doble verificación ya vistos en gestión de calidad.',
  no:{
    1:'Sí existe una conexión conceptual directa con los sistemas de doble verificación ya vistos en gestión de calidad.',
    2:'El signo de Blumberg es un hallazgo semiológico distinto, sin relación conceptual con la orden médica escrita.',
    3:'La escala de Glasgow es una herramienta de evaluación neurológica distinta, sin relación conceptual con la orden médica escrita.'
  },
  trampa:'No reconocer la conexión conceptual correcta entre el carácter verificable de la orden médica y los sistemas de doble verificación ya vistos.',
  obj:'Identificar la conexión entre el carácter verificable de la orden médica y los sistemas de doble verificación ya vistos.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 9.',
  tags:['conexión con doble verificación','orden médica verificable']
},
{
  id:'U10-SHP-Q44', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Documentación clínica hospitalaria', sub:'Componentes de una orden médica clara',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudiante redacta una orden médica indicando únicamente "administrar analgésico", sin especificar cuál medicamento, la dosis, la frecuencia, ni la vía de administración.',
  enunciado:'¿Qué riesgo genera esta orden médica incompleta, según lo visto en este tema?',
  ops:[
    'Traslada al personal que la ejecuta la carga de interpretar la intención real, un riesgo evitable con una redacción cuidadosa y específica', 'Esta orden médica incompleta no genera ningún riesgo real adicional, ya que el personal siempre interpreta correctamente cualquier orden', 'Una orden médica ambigua siempre reduce, de la misma forma, el margen de error en su ejecución por parte del equipo', 'La especificidad de una orden médica nunca tiene ninguna relación real con el margen de error en su ejecución posterior'],
  ok:0,
  clave:'Traslada al personal que la ejecuta la carga de interpretar la intención real, un riesgo evitable con una redacción cuidadosa y específica.',
  exp:'Una orden médica ambigua o incompleta traslada al personal que la ejecuta la carga de interpretar la intención real, un riesgo evitable con una redacción cuidadosa desde el inicio -una orden clara, específica y completa (qué, cuánto, cuándo, por qué vía) reduce ese margen de error.',
  no:{
    1:'Esta orden incompleta sí genera un riesgo real, trasladando al personal la carga de interpretar la intención no especificada.',
    2:'Es precisamente lo contrario: una orden ambigua AUMENTA, no reduce, el margen de error en su ejecución por parte del equipo.',
    3:'La especificidad de una orden médica sí tiene una relación directa con la reducción del margen de error en su ejecución.'
  },
  trampa:'Subestimar el riesgo de una orden médica ambigua o incompleta, asumiendo que el personal siempre interpretará correctamente la intención real.',
  obj:'Aplicar el riesgo de una orden médica incompleta y la importancia de una redacción clara, específica y completa.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 9.',
  tags:['orden médica incompleta','redacción clara y específica']
},
{
  id:'U10-SHP-Q45', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Documentación clínica hospitalaria', sub:'Cierre del bloque completo de Servicio Hospitalario Pre Clínico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué cuatro dimensiones básicas integra este último tema como cierre del bloque completo de Servicio Hospitalario Pre Clínico?',
  ops:[
    'La estructura del hospital, el rol del estudiante, la bioseguridad, y la documentación clínica', 'Este tema no tiene ninguna relación real con los demás temas ya vistos previamente en el bloque completo', 'El bloque de Servicio Hospitalario Pre Clínico no integra ninguna dimensión coherente entre sus distintos temas', 'La documentación clínica es un tema completamente aislado, sin ninguna conexión con los demás temas del bloque'],
  ok:0,
  clave:'La estructura del hospital, el rol del estudiante, la bioseguridad, y la documentación clínica.',
  exp:'Este último tema cierra el bloque completo del Servicio Hospitalario Pre Clínico, integrando la estructura del hospital, el rol del estudiante, la bioseguridad, y ahora la documentación, como las cuatro dimensiones básicas de la orientación práctica antes de entrar de lleno a las rotaciones clínicas.',
  no:{
    1:'Este tema sí tiene una relación conceptual directa de cierre con todos los demás temas ya vistos en el bloque completo.',
    2:'El bloque sí integra una dimensión coherente entre sus cuatro temas, como orientación práctica completa antes de las rotaciones.',
    3:'Este tema es precisamente el cierre conceptual del bloque, conectado con la estructura, el rol y la bioseguridad ya vistos.'
  },
  trampa:'No reconocer el rol de cierre conceptual que cumple este último tema respecto al recorrido completo del bloque de Servicio Hospitalario Pre Clínico.',
  obj:'Explicar el rol de cierre conceptual que cumple el tema de documentación clínica dentro del bloque completo.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 9.',
  tags:['cierre del bloque','cuatro dimensiones de orientación práctica']
},
{
  id:'U10-SHP-Q46', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Documentación clínica hospitalaria', sub:'Consideración clínica sobre el hábito de documentar',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudiante en su primera rotación pre clínica se pregunta por qué debería esforzarse en redactar notas de evolución completas y órdenes médicas específicas si, por ahora, solo participa bajo supervisión directa.',
  enunciado:'¿Qué debería considerar este estudiante, según lo visto al cierre de este tema?',
  ops:[
    'Que aprender a documentar con claridad desde la formación temprana desarrolla un hábito que después, en la práctica clínica independiente, protege tanto al paciente como al propio profesional', 'No existe ninguna razón real para que un estudiante bajo supervisión se esfuerce en documentar con claridad durante su formación temprana', 'La calidad de la documentación solo se vuelve relevante una vez que el profesional ejerce de forma completamente independiente', 'El hábito de documentar con claridad nunca tiene ninguna relación real con la protección del paciente ni del profesional'],
  ok:0,
  clave:'Que aprender a documentar con claridad desde la formación temprana desarrolla un hábito que después, en la práctica clínica independiente, protege tanto al paciente como al propio profesional.',
  exp:'Un estudiante que aprende a documentar con claridad desde su primera rotación pre clínica desarrolla un hábito que después, en la práctica clínica independiente, protege tanto al paciente como al propio profesional.',
  no:{
    1:'Sí existe una razón real: el hábito se construye desde la formación temprana, no aparece automáticamente en la práctica independiente.',
    2:'Es precisamente lo contrario: la calidad de la documentación debe empezar a practicarse desde la formación temprana, no después.',
    3:'El hábito de documentar con claridad sí tiene una relación directa con la protección tanto del paciente como del profesional.'
  },
  trampa:'Posponer la importancia de desarrollar un buen hábito de documentación hasta la práctica independiente futura, sin reconocer que debe construirse desde la formación temprana.',
  obj:'Aplicar la importancia de desarrollar el hábito de documentación clara desde la formación pre clínica temprana.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 9.',
  tags:['consideración clínica','hábito de documentación desde formación temprana']
},
{
  id:'U10-SHP-Q47', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Documentación clínica hospitalaria', sub:'Riesgo de una nota de evolución copiada sin actualizar',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudiante redacta la nota de evolución diaria de un paciente copiando casi textualmente la nota del día anterior, sin reflejar los cambios reales en su estado clínico durante las últimas 24 horas.',
  enunciado:'¿Qué riesgo conlleva esta práctica para la utilidad del expediente como memoria institucional del caso?',
  ops:[
    'Que el expediente deje de reflejar con precisión la evolución real del paciente, comprometiendo su utilidad para el resto del equipo que lo consulte', 'Esta práctica no conlleva ningún riesgo real, ya que copiar la nota anterior siempre es igual de útil que documentar la evolución real', 'El expediente clínico mantiene su utilidad como memoria institucional del caso, sin importar si refleja o no la evolución real', 'Copiar la nota del día anterior siempre es la práctica más eficiente y recomendada para documentar la evolución de un paciente'],
  ok:0,
  clave:'Que el expediente deje de reflejar con precisión la evolución real del paciente, comprometiendo su utilidad para el resto del equipo que lo consulte.',
  exp:'Una nota de evolución copiada sin actualizar compromete la función del expediente como memoria institucional del caso: el equipo que consulte el expediente después no tendrá una imagen precisa de cómo evolucionó realmente el paciente, un riesgo directo para la continuidad segura del cuidado.',
  no:{
    1:'Esta práctica sí conlleva un riesgo real: copiar la nota anterior no refleja los cambios reales en el estado del paciente.',
    2:'Es precisamente lo contrario: el expediente PIERDE utilidad como memoria institucional si no refleja la evolución real del paciente.',
    3:'Copiar la nota del día anterior no es una práctica recomendada; compromete la precisión y utilidad del expediente clínico.'
  },
  trampa:'Considerar que copiar la nota de evolución del día anterior es una práctica eficiente y sin riesgo real para la calidad del expediente.',
  obj:'Aplicar el riesgo de una nota de evolución copiada sin actualizar sobre la utilidad del expediente como memoria institucional.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 9.',
  tags:['nota de evolución copiada','riesgo para la memoria institucional']
},
{
  id:'U10-SHP-Q48', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Documentación clínica hospitalaria', sub:'Documentación como parte de la seguridad del paciente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se conecta la documentación clínica hospitalaria con la lógica de seguridad del paciente ya vista en Gerencia en Salud?',
  ops:[
    'Una documentación clara y completa reduce el margen de error que surge cuando la información crítica depende únicamente de la memoria o de la comunicación verbal entre miembros del equipo', 'La documentación clínica hospitalaria no tiene ninguna relación real con la lógica de seguridad del paciente ya vista previamente', 'La seguridad del paciente depende exclusivamente de los protocolos clínicos directos, sin ninguna relación con la documentación', 'Una documentación incompleta o poco clara nunca representa ningún riesgo real para la seguridad del paciente hospitalizado'],
  ok:0,
  clave:'Una documentación clara y completa reduce el margen de error que surge cuando la información crítica depende únicamente de la memoria o de la comunicación verbal entre miembros del equipo.',
  exp:'La documentación clínica retoma directamente la lógica de seguridad del paciente ya vista en Gerencia en Salud: una documentación clara y completa reduce el margen de error que surge cuando la información crítica depende únicamente de la memoria o de la comunicación verbal, un riesgo evitable con sistemas bien diseñados.',
  no:{
    1:'Sí existe una conexión conceptual directa entre la documentación clínica y la lógica de seguridad del paciente ya vista.',
    2:'La seguridad del paciente sí depende también de la calidad de la documentación, no exclusivamente de los protocolos clínicos directos.',
    3:'Una documentación incompleta o poco clara sí representa un riesgo real para la seguridad del paciente hospitalizado.'
  },
  trampa:'Separar la documentación clínica de la lógica de seguridad del paciente, sin reconocer su conexión directa ya vista en Gerencia en Salud.',
  obj:'Explicar la conexión entre la documentación clínica hospitalaria y la lógica de seguridad del paciente ya vista.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 9.',
  tags:['conexión con seguridad del paciente','documentación como reductor de error']
},
{
  id:'U10-SHP-Q49', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Documentación clínica hospitalaria', sub:'Diferencia entre orden médica e indicación verbal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia práctica existe entre una orden médica escrita y una indicación verbal no registrada, en términos de verificación posterior?',
  ops:[
    'La orden escrita queda registrada de forma verificable en el expediente; una indicación verbal no registrada depende únicamente de la memoria de quienes la escucharon', 'Ambas formas de indicación son exactamente equivalentes en términos de verificación posterior, sin ninguna diferencia práctica real', 'Una indicación verbal no registrada siempre es más fácil de verificar posteriormente que una orden médica escrita en el expediente', 'La verificación posterior de una indicación nunca depende de si esta fue registrada por escrito o transmitida solo verbalmente'],
  ok:0,
  clave:'La orden escrita queda registrada de forma verificable en el expediente; una indicación verbal no registrada depende únicamente de la memoria de quienes la escucharon.',
  exp:'A diferencia de una indicación verbal, una orden médica escrita queda registrada de forma verificable, reduciendo el riesgo de malentendidos; una indicación verbal no registrada depende únicamente de la memoria de quienes la escucharon, un método mucho menos confiable para su verificación posterior.',
  no:{
    1:'Existe una diferencia práctica real: la verificabilidad de una orden escrita frente a la dependencia de la memoria en lo verbal.',
    2:'Es precisamente lo contrario: una indicación verbal no registrada es MÁS difícil de verificar posteriormente que una orden escrita.',
    3:'La verificación posterior sí depende directamente de si la indicación fue registrada por escrito o transmitida solo verbalmente.'
  },
  trampa:'Asumir que una indicación verbal no registrada es igual de verificable posteriormente que una orden médica escrita en el expediente.',
  obj:'Distinguir la verificabilidad de una orden médica escrita frente a una indicación verbal no registrada.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 9.',
  tags:['orden escrita vs. indicación verbal','verificabilidad posterior']
},
{
  id:'U10-SHP-Q50', programa:'unirm', cuatri:10,
  esp:'Servicio Hospitalario Pre Clínico', tema:'Documentación clínica hospitalaria', sub:'Síntesis final del bloque y del cuatrimestre',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué relación tiene el hábito de documentar con claridad, desarrollado desde la formación pre clínica, con el resto de los temas ya vistos en este bloque?',
  ops:[
    'Se apoya en la comprensión de la estructura hospitalaria, en los límites claros del rol del estudiante, y en la misma disciplina que exige la bioseguridad, integrando así las cuatro dimensiones del bloque', 'El hábito de documentar con claridad no tiene ninguna relación real con los demás temas ya vistos en este bloque completo', 'La documentación clínica es una habilidad completamente aislada, sin ninguna conexión con la estructura o el rol del estudiante', 'La disciplina exigida por la bioseguridad nunca tiene ninguna relación real con la disciplina exigida por la documentación clínica'],
  ok:0,
  clave:'Se apoya en la comprensión de la estructura hospitalaria, en los límites claros del rol del estudiante, y en la misma disciplina que exige la bioseguridad, integrando así las cuatro dimensiones del bloque.',
  exp:'El hábito de documentar con claridad se apoya en la comprensión de la estructura hospitalaria (dónde y cómo fluye la información), en los límites claros del rol del estudiante (qué le corresponde registrar bajo supervisión), y en la misma disciplina práctica que exige la bioseguridad, integrando las cuatro dimensiones del bloque como preparación completa antes de las rotaciones clínicas.',
  no:{
    1:'Sí existe una relación real y directa entre el hábito de documentar y los demás temas ya vistos en este bloque completo.',
    2:'La documentación clínica no es una habilidad aislada; se conecta con la estructura hospitalaria y el rol del estudiante ya vistos.',
    3:'La disciplina exigida por la bioseguridad sí comparte una lógica similar con la disciplina exigida por la documentación clínica.'
  },
  trampa:'Tratar la documentación clínica como una habilidad aislada del resto del bloque, sin reconocer su integración con la estructura, el rol y la bioseguridad ya vistos.',
  obj:'Explicar cómo el hábito de documentar con claridad integra las demás dimensiones del bloque de Servicio Hospitalario Pre Clínico.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 9.',
  tags:['síntesis final del bloque','integración de las cuatro dimensiones']
}

]);
