/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 10, TANDA DE GERENCIA EN SALUD (1/2)
   Primer banco de esta materia (0 preguntas previas). Prefijo
   U10-GS-. Esta parte cubre principios de administracion,
   planificacion estrategica, gestion de calidad/seguridad y
   gestion de recursos humanos (temas 1-4).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== GERENCIA EN SALUD ===================== */
{
  id:'U10-GS-Q01', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Principios de administración en salud', sub:'Por qué un médico se beneficia de entender administración',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un médico que nunca ocupará un cargo gerencial formal igual se beneficia de entender los principios básicos de administración en salud?',
  ops:[
    'Porque cada decisión clínica ocurre dentro de un sistema con recursos limitados que alguien tuvo que organizar y distribuir',
    'Un médico clínico nunca se beneficia realmente de entender ningún principio de administración en salud', 'Los principios de administración en salud solo son relevantes para quienes ocupan cargos gerenciales formales', 'Las decisiones clínicas individuales nunca ocurren dentro de ningún sistema organizado de recursos'],
  ok:0,
  clave:'Porque cada decisión clínica ocurre dentro de un sistema con recursos limitados que alguien tuvo que organizar y distribuir.',
  exp:'Un médico que nunca ocupará un cargo gerencial formal igual se beneficia de entender esta lógica, porque cada decisión clínica ocurre dentro de un sistema con recursos limitados que alguien tuvo que organizar y distribuir.',
  no:{
    1:'Un médico clínico sí se beneficia de entender esta lógica, incluso sin ocupar nunca un cargo gerencial formal.',
    2:'Estos principios son relevantes para cualquier médico, no exclusivamente para quienes ocupan cargos gerenciales formales.',
    3:'Toda decisión clínica ocurre dentro de un sistema organizado de recursos limitados, aunque el médico no participe directamente en su gestión.'
  },
  trampa:'Asumir que la administración en salud solo es relevante para quienes ocupan cargos gerenciales formales, sin reconocer su relevancia general para cualquier médico.',
  obj:'Explicar por qué entender administración en salud beneficia a cualquier médico, no solo a quienes gestionan formalmente.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 1.',
  tags:['administración en salud','beneficio para el médico clínico','sistema de recursos limitados']
},
{
  id:'U10-GS-Q02', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Principios de administración en salud', sub:'Las cuatro funciones gerenciales clásicas',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son las cuatro funciones gerenciales clásicas que describen el ciclo básico de cualquier proceso administrativo?',
  ops:['Planificar, organizar, dirigir y controlar', 'Diagnosticar, tratar, referir y dar de alta', 'Contratar, capacitar, evaluar y despedir', 'Presupuestar, facturar, cobrar y auditar'],
  ok:0,
  clave:'Planificar, organizar, dirigir y controlar.',
  exp:'Las funciones gerenciales clásicas -planificar, organizar, dirigir y controlar- describen el ciclo básico de cualquier proceso administrativo, sin importar el tipo de institución.',
  no:{
    1:'Esta secuencia corresponde a un proceso clínico, no a las funciones gerenciales clásicas de administración.',
    2:'Esta secuencia corresponde a procesos de recursos humanos específicos, no a las cuatro funciones gerenciales clásicas generales.',
    3:'Esta secuencia corresponde a procesos financieros específicos, no a las cuatro funciones gerenciales clásicas generales.'
  },
  trampa:'Confundir las funciones gerenciales clásicas con procesos específicos de un área particular (clínica, recursos humanos, finanzas).',
  obj:'Recordar las cuatro funciones gerenciales clásicas del proceso administrativo.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 1.',
  tags:['funciones gerenciales','planificar organizar dirigir controlar','ciclo administrativo']
},
{
  id:'U10-GS-Q03', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Principios de administración en salud', sub:'Retroalimentación del ciclo gerencial',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el ciclo de las funciones gerenciales no es un proceso lineal que termina una vez completado?',
  ops:[
    'Los resultados del control retroalimentan directamente una nueva planificación, ajustada con la información aprendida del ciclo anterior',
    'El ciclo gerencial siempre termina definitivamente después de completar la función de control por primera vez', 'Los resultados del control nunca tienen ninguna relación real con la planificación futura de la institución', 'Cada función gerencial (planificar, organizar, dirigir, controlar) ocurre de forma completamente aislada, sin conexión entre ellas'],
  ok:0,
  clave:'Los resultados del control retroalimentan directamente una nueva planificación, ajustada con la información aprendida del ciclo anterior.',
  exp:'Este ciclo se repite continuamente, no es un proceso lineal que termina una vez completado: los resultados del control retroalimentan directamente una nueva planificación, ajustada con la información aprendida del ciclo anterior.',
  no:{
    1:'El ciclo NO termina tras el control; se repite continuamente, retroalimentando una nueva planificación ajustada.',
    2:'Los resultados del control sí tienen una relación directa y central con cómo se ajusta la planificación futura de la institución.',
    3:'Las cuatro funciones están conectadas en un ciclo continuo, no ocurren de forma aislada sin ninguna relación entre ellas.'
  },
  trampa:'Asumir que el ciclo gerencial es lineal y termina definitivamente tras el control, sin reconocer su naturaleza continua y retroalimentada.',
  obj:'Explicar por qué el ciclo de las funciones gerenciales es continuo y retroalimentado, no lineal.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 1.',
  tags:['ciclo gerencial continuo','retroalimentación','ajuste de planificación']
},
{
  id:'U10-GS-Q04', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Principios de administración en salud', sub:'Complejidad de la organización hospitalaria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la organización hospitalaria se considera un ejemplo particularmente complejo de administración?',
  ops:[
    'Combina múltiples funciones muy distintas entre sí que deben coordinarse de forma simultánea y continua, las 24 horas del día, sin interrupciones posibles',
    'La organización hospitalaria es, de hecho, más simple de administrar que cualquier otro tipo de organización o empresa', 'Un hospital opera con un horario de oficina similar al de cualquier empresa convencional, sin necesidad de coordinación continua', 'La complejidad de la organización hospitalaria no tiene ninguna relación real con la necesidad de estructuras organizativas específicas'],
  ok:0,
  clave:'Combina múltiples funciones muy distintas entre sí que deben coordinarse de forma simultánea y continua, las 24 horas del día, sin interrupciones posibles.',
  exp:'La organización hospitalaria es un ejemplo particularmente complejo de administración, porque combina múltiples funciones muy distintas entre sí que deben coordinarse de forma simultánea y continua, las 24 horas del día, sin interrupciones posibles como las que sí tendría una empresa con horario de oficina.',
  no:{
    1:'Es precisamente lo contrario: la organización hospitalaria es MÁS compleja de administrar que muchas otras organizaciones.',
    2:'Un hospital opera de forma continua las 24 horas, a diferencia de una empresa con horario de oficina convencional.',
    3:'Esta complejidad tiene una relación directa con la necesidad de estructuras organizativas específicas (jerarquías, protocolos).'
  },
  trampa:'Subestimar la complejidad particular de la organización hospitalaria, comparándola erróneamente con organizaciones de menor complejidad operativa.',
  obj:'Explicar por qué la organización hospitalaria representa un ejemplo particularmente complejo de administración.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 1.',
  tags:['organización hospitalaria','complejidad operativa','coordinación continua']
},
{
  id:'U10-GS-Q05', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Principios de administración en salud', sub:'Lógica detrás de decisiones institucionales aparentemente arbitrarias',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico joven, recién incorporado a un hospital, se frustra con ciertos protocolos y restricciones presupuestarias que le parecen burocráticos y arbitrarios desde su práctica clínica diaria.',
  enunciado:'¿Qué comprensión adicional podría cambiar su perspectiva sobre estas decisiones institucionales?',
  ops:[
    'Que estas decisiones responden a una lógica de organización de recursos limitados a nivel de todo el sistema, no solo de un paciente individual',
    'Estas decisiones institucionales siempre son, de hecho, completamente arbitrarias y sin ninguna lógica real detrás de ellas', 'Los protocolos y restricciones presupuestarias nunca tienen ninguna relación real con la organización de recursos del sistema', 'Un médico nunca debería intentar comprender la lógica detrás de las decisiones institucionales de su hospital'],
  ok:0,
  clave:'Que estas decisiones responden a una lógica de organización de recursos limitados a nivel de todo el sistema, no solo de un paciente individual.',
  exp:'Entender los principios básicos de administración ayuda a un médico a comprender por qué ciertas decisiones institucionales que a veces parecen arbitrarias o burocráticas desde la práctica clínica diaria, en realidad responden a una lógica de organización de recursos limitados a nivel de todo el sistema.',
  no:{
    1:'Estas decisiones institucionales típicamente sí responden a una lógica real de organización de recursos, aunque no siempre sea evidente.',
    2:'Los protocolos y restricciones presupuestarias sí tienen una relación real con la organización de recursos a nivel sistémico.',
    3:'Comprender esta lógica institucional puede ayudar al médico a navegar el sistema de forma más efectiva, siendo valioso hacerlo.'
  },
  trampa:'Asumir que las decisiones institucionales que parecen burocráticas desde la práctica clínica diaria carecen de una lógica administrativa real subyacente.',
  obj:'Aplicar la comprensión de la lógica administrativa institucional para entender decisiones que parecen arbitrarias desde la práctica clínica.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 1.',
  tags:['lógica institucional','decisiones aparentemente arbitrarias','organización de recursos']
},
{
  id:'U10-GS-Q06', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Principios de administración en salud', sub:'Función de "organizar" dentro del ciclo gerencial',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple "organizar" dentro del ciclo de las cuatro funciones gerenciales clásicas?',
  ops:[
    'Estructura los recursos disponibles para lograr lo definido en la planificación', 'Define hacia dónde se dirige la organización en el mediano y largo plazo', 'Coordina a las personas hacia el objetivo ya planificado', 'Verifica si los resultados obtenidos coinciden con lo planificado'],
  ok:0,
  clave:'Estructura los recursos disponibles para lograr lo definido en la planificación.',
  exp:'Planificar define hacia dónde se dirige la organización, organizar estructura los recursos disponibles para lograrlo, dirigir coordina a las personas hacia ese objetivo, y controlar verifica si los resultados obtenidos coinciden con lo planificado.',
  no:{
    1:'Esta descripción corresponde a la función de PLANIFICAR, no a la de organizar.',
    2:'Esta descripción corresponde a la función de DIRIGIR, no a la de organizar.',
    3:'Esta descripción corresponde a la función de CONTROLAR, no a la de organizar.'
  },
  trampa:'Confundir la función de "organizar" (estructurar recursos) con alguna de las otras tres funciones gerenciales del ciclo.',
  obj:'Identificar la función específica de "organizar" dentro del ciclo de las cuatro funciones gerenciales.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 1.',
  tags:['función de organizar','estructuración de recursos','funciones gerenciales']
},
{
  id:'U10-GS-Q07', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Principios de administración en salud', sub:'Recursos organizados: humanos, financieros y materiales',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipos de recursos organiza la administración en salud, según la definición vista en este tema?',
  ops:['Humanos, financieros y materiales', 'Únicamente recursos financieros, sin ningún otro tipo de recurso relevante', 'Solo recursos humanos, sin ninguna consideración de recursos financieros o materiales', 'Exclusivamente recursos materiales, sin ninguna relación con el personal o el presupuesto'],
  ok:0,
  clave:'Humanos, financieros y materiales.',
  exp:'La administración en salud es la disciplina que organiza los recursos -humanos, financieros, materiales- necesarios para que un sistema o una institución de salud funcione de forma efectiva y sostenida.',
  no:{
    1:'La administración en salud organiza múltiples tipos de recursos, no exclusivamente los financieros.',
    2:'La administración en salud también organiza recursos financieros y materiales, no solo los recursos humanos.',
    3:'La administración en salud también organiza recursos humanos y financieros, no exclusivamente los materiales.'
  },
  trampa:'Reducir el alcance de la administración en salud a un solo tipo de recurso, sin reconocer que abarca humanos, financieros y materiales a la vez.',
  obj:'Identificar los tipos de recursos que organiza la administración en salud.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 1.',
  tags:['tipos de recursos','recursos humanos financieros materiales','definición']
},
{
  id:'U10-GS-Q08', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Principios de administración en salud', sub:'Cambio de eje respecto al resto del pensum',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué cambio de pregunta central introduce el bloque de Gerencia en Salud respecto al resto del pensum estudiado hasta ahora?',
  ops:[
    'Cambia de "cómo trato a este paciente" a "cómo organizo un sistema para que miles de pacientes reciban buena atención de forma sostenida"',
    'Este bloque no introduce ningún cambio real de perspectiva respecto a los demás bloques ya estudiados en el pensum', 'El bloque de Gerencia en Salud mantiene exactamente el mismo enfoque en el paciente individual que todos los bloques anteriores', 'Este bloque se enfoca exclusivamente en el diagnóstico y tratamiento de enfermedades específicas, igual que los bloques clínicos'],
  ok:0,
  clave:'Cambia de "cómo trato a este paciente" a "cómo organizo un sistema para que miles de pacientes reciban buena atención de forma sostenida".',
  exp:'Este bloque cambia por completo la pregunta que ha guiado todo el pensum hasta ahora: no "cómo trato a este paciente", sino "cómo organizo un sistema para que miles de pacientes reciban buena atención de forma sostenida".',
  no:{
    1:'Este bloque sí introduce un cambio real de perspectiva, del nivel individual al nivel sistémico institucional.',
    2:'Es precisamente lo contrario: este bloque cambia el enfoque del paciente individual al sistema institucional completo.',
    3:'Este bloque se centra en la organización del sistema, no en el diagnóstico y tratamiento clínico de enfermedades específicas.'
  },
  trampa:'No reconocer el cambio de perspectiva central que introduce este bloque, del enfoque individual al enfoque sistémico institucional.',
  obj:'Explicar el cambio de perspectiva central que introduce el bloque de Gerencia en Salud.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 1.',
  tags:['cambio de perspectiva','enfoque sistémico','nivel institucional']
},
{
  id:'U10-GS-Q09', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Planificación estratégica en instituciones de salud', sub:'Diferencia entre reaccionar y planificar',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una institución que solo reacciona a las necesidades inmediatas del día a día rara vez logra avances estructurales significativos?',
  ops:[
    'Porque la planificación estratégica exige un ejercicio de anticipación, definiendo objetivos de mediano y largo plazo, en vez de operar exclusivamente reaccionando a lo urgente',
    'Reaccionar exclusivamente a las necesidades inmediatas siempre es la estrategia más efectiva para lograr avances estructurales significativos', 'No existe ninguna diferencia real entre operar reactivamente y operar con planificación estratégica de mediano y largo plazo', 'Los avances estructurales significativos ocurren siempre de forma espontánea, sin necesidad de ninguna planificación deliberada'],
  ok:0,
  clave:'Porque la planificación estratégica exige un ejercicio de anticipación, definiendo objetivos de mediano y largo plazo, en vez de operar exclusivamente reaccionando a lo urgente.',
  exp:'La planificación estratégica es el proceso mediante el cual una institución define objetivos de mediano y largo plazo, en vez de operar exclusivamente reaccionando a las necesidades inmediatas del día a día -una institución que solo reacciona a lo urgente rara vez logra avances estructurales significativos.',
  no:{
    1:'Es precisamente lo contrario: operar solo reactivamente rara vez logra avances estructurales significativos.',
    2:'Sí existe una diferencia real y relevante entre operar reactivamente y con planificación estratégica deliberada de largo plazo.',
    3:'Los avances estructurales significativos típicamente requieren planificación deliberada, no ocurren simplemente de forma espontánea.'
  },
  trampa:'Asumir que operar exclusivamente de forma reactiva es igual de efectivo que planificar estratégicamente para lograr avances estructurales.',
  obj:'Explicar por qué operar solo reactivamente limita los avances estructurales de una institución de salud.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 3.',
  tags:['planificación estratégica','reactivo vs. proactivo','avances estructurales']
},
{
  id:'U10-GS-Q10', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Planificación estratégica en instituciones de salud', sub:'El ejercicio de anticipación en la planificación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipo de tendencias debe identificar una institución de salud al ejercer la anticipación propia de la planificación estratégica?',
  ops:[
    'Cambios demográficos, nuevas tecnologías, y patrones epidemiológicos cambiantes que probablemente afectarán a la institución en los próximos años',
    'La planificación estratégica nunca requiere identificar ninguna tendencia futura relevante para la institución', 'Solo las tendencias financieras inmediatas son relevantes para la planificación estratégica, sin ninguna otra consideración', 'Las tendencias demográficas y epidemiológicas nunca tienen ninguna relación real con la planificación estratégica institucional'],
  ok:0,
  clave:'Cambios demográficos, nuevas tecnologías, y patrones epidemiológicos cambiantes que probablemente afectarán a la institución en los próximos años.',
  exp:'Este proceso exige un ejercicio de anticipación: identificar tendencias relevantes (cambios demográficos, nuevas tecnologías, patrones epidemiológicos cambiantes, ya vistos en Salud y Comunidad I) que probablemente afectarán a la institución en los próximos años.',
  no:{
    1:'La planificación estratégica sí requiere identificar activamente tendencias futuras relevantes de distinto tipo.',
    2:'Las tendencias relevantes van más allá de lo financiero inmediato; incluyen demográficas, tecnológicas y epidemiológicas.',
    3:'Las tendencias demográficas y epidemiológicas sí tienen una relación directa y relevante con la planificación estratégica institucional.'
  },
  trampa:'Reducir las tendencias relevantes para la planificación estratégica a solo lo financiero inmediato, ignorando factores demográficos y epidemiológicos.',
  obj:'Identificar los tipos de tendencias que debe anticipar una institución de salud en su planificación estratégica.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 3.',
  tags:['anticipación estratégica','tendencias demográficas','patrones epidemiológicos']
},
{
  id:'U10-GS-Q11', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Planificación estratégica en instituciones de salud', sub:'Diferencia entre misión y visión institucional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre la misión y la visión de una institución de salud?',
  ops:[
    'La misión describe el propósito fundamental (por qué existe, a quién sirve); la visión describe hacia dónde aspira a llegar en el futuro',
    'Ambos conceptos son exactamente idénticos, sin ninguna diferencia real entre ellos', 'La misión describe el futuro aspiracional, y la visión describe el propósito actual de la institución', 'Ni la misión ni la visión tienen ninguna relación real con las decisiones prácticas de la institución'],
  ok:0,
  clave:'La misión describe el propósito fundamental (por qué existe, a quién sirve); la visión describe hacia dónde aspira a llegar en el futuro.',
  exp:'La misión institucional describe el propósito fundamental de la institución -por qué existe, a quién sirve-, mientras que la visión describe hacia dónde aspira a llegar en el futuro -una imagen concreta de lo que la institución busca ser en un horizonte de tiempo determinado.',
  no:{
    1:'Son conceptos claramente distintos: la misión es el propósito actual, la visión es la aspiración futura.',
    2:'Está invertido: la MISIÓN describe el propósito actual, y la VISIÓN describe la aspiración futura, no al revés.',
    3:'Ambos conceptos sí tienen una relación real con las decisiones prácticas, funcionando como criterio de decisión institucional.'
  },
  trampa:'Invertir las definiciones de misión (propósito actual) y visión (aspiración futura), un error frecuente de terminología institucional.',
  obj:'Distinguir la misión de la visión institucional en una institución de salud.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 3.',
  tags:['misión institucional','visión institucional','diferencia conceptual']
},
{
  id:'U10-GS-Q12', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Planificación estratégica en instituciones de salud', sub:'Misión y visión como criterio de decisión práctico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la misión y la visión funcionan como criterio de decisión práctico, más allá de ser enunciados formales?',
  ops:[
    'Una decisión que se alinea con la misión y la visión declaradas tiene más coherencia estratégica que una decisión puntual y aislada',
    'La misión y la visión son únicamente enunciados formales sin ninguna aplicación práctica real en la toma de decisiones', 'Cualquier decisión institucional, sin importar si se alinea con la misión y visión, siempre tiene la misma coherencia estratégica', 'La misión y la visión nunca influyen realmente en las decisiones difíciles que enfrenta una institución con recursos limitados'],
  ok:0,
  clave:'Una decisión que se alinea con la misión y la visión declaradas tiene más coherencia estratégica que una decisión puntual y aislada.',
  exp:'Estos dos elementos no son solo enunciados formales que se cuelgan en una pared: funcionan como criterio de decisión práctico cuando la institución enfrenta opciones difíciles con recursos limitados -una decisión que se alinea con la misión y la visión declaradas tiene más coherencia estratégica.',
  no:{
    1:'La misión y la visión sí tienen una aplicación práctica real, funcionando como criterio de decisión ante opciones difíciles.',
    2:'Es precisamente lo contrario: alinearse con la misión y visión SÍ aporta mayor coherencia estratégica que una decisión aislada.',
    3:'La misión y la visión sí pueden influir en decisiones difíciles, especialmente cuando los recursos institucionales son limitados.'
  },
  trampa:'Reducir la misión y visión institucional a enunciados formales sin aplicación práctica real en la toma de decisiones difíciles.',
  obj:'Explicar cómo la misión y la visión funcionan como criterio de decisión práctico en situaciones difíciles.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 3.',
  tags:['criterio de decisión práctico','coherencia estratégica','misión y visión aplicadas']
},
{
  id:'U10-GS-Q13', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Planificación estratégica en instituciones de salud', sub:'Traducción de estrategia a objetivos concretos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué distingue a una planificación estratégica bien hecha de una que se queda solo en el papel?',
  ops:[
    'Se traduce en objetivos específicos, medibles y con plazos concretos, que permiten evaluar si la institución realmente avanzó hacia la dirección planificada',
    'Una planificación estratégica bien hecha se limita exclusivamente a declaraciones generales de intención, sin ningún objetivo específico', 'No existe ninguna forma real de evaluar si una institución avanzó hacia la dirección planificada estratégicamente', 'Los objetivos medibles y con plazos concretos nunca son necesarios en una planificación estratégica efectiva'],
  ok:0,
  clave:'Se traduce en objetivos específicos, medibles y con plazos concretos, que permiten evaluar si la institución realmente avanzó hacia la dirección planificada.',
  exp:'Una planificación estratégica bien hecha no se queda en declaraciones generales de intención; se traduce en objetivos específicos, medibles y con plazos concretos, que permiten evaluar más adelante si la institución realmente avanzó hacia la dirección planificada.',
  no:{
    1:'Es precisamente lo contrario: una planificación bien hecha VA MÁS ALLÁ de declaraciones generales, hacia objetivos específicos medibles.',
    2:'Sí existe una forma real de evaluar el avance: mediante objetivos específicos, medibles y con plazos concretos.',
    3:'Los objetivos medibles y con plazos son precisamente necesarios para que la planificación se traduzca en resultados reales verificables.'
  },
  trampa:'Asumir que una planificación estratégica es suficiente con declaraciones generales de intención, sin necesitar objetivos específicos y medibles.',
  obj:'Explicar qué distingue a una planificación estratégica bien hecha, traducida en objetivos concretos y medibles.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 3.',
  tags:['objetivos medibles','planes concretos','evaluación del avance estratégico']
},
{
  id:'U10-GS-Q14', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Planificación estratégica en instituciones de salud', sub:'Consecuencia de la falta de planificación estratégica clara',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué tiende a ocurrir con los recursos limitados de una institución sin planificación estratégica clara?',
  ops:[
    'Tiende a distribuirlos de forma reactiva y fragmentada, en vez de dirigirlos deliberadamente hacia las prioridades que más impactarían la calidad de la atención',
    'Una institución sin planificación estratégica clara siempre distribuye sus recursos de forma óptima y perfectamente dirigida', 'La falta de planificación estratégica nunca tiene ninguna consecuencia real sobre cómo se distribuyen los recursos institucionales', 'Los recursos limitados se distribuyen de la misma forma óptima, exista o no una planificación estratégica clara'],
  ok:0,
  clave:'Tiende a distribuirlos de forma reactiva y fragmentada, en vez de dirigirlos deliberadamente hacia las prioridades que más impactarían la calidad de la atención.',
  exp:'Una institución sin planificación estratégica clara tiende a distribuir sus recursos limitados de forma reactiva y fragmentada, en vez de dirigirlos deliberadamente hacia las prioridades que más impactarían la calidad de la atención a largo plazo.',
  no:{
    1:'Es precisamente lo contrario: sin planificación clara, la distribución tiende a ser reactiva y fragmentada, no óptima.',
    2:'La falta de planificación estratégica sí tiene una consecuencia real sobre cómo se distribuyen los recursos institucionales.',
    3:'La distribución de recursos sí difiere significativamente según exista o no una planificación estratégica clara y deliberada.'
  },
  trampa:'Asumir que la distribución de recursos es igualmente efectiva con o sin planificación estratégica clara previa.',
  obj:'Explicar la consecuencia de la falta de planificación estratégica clara sobre la distribución de recursos institucionales.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 3.',
  tags:['distribución reactiva','falta de planificación','prioridades institucionales']
},
{
  id:'U10-GS-Q15', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Planificación estratégica en instituciones de salud', sub:'Conexión entre planificación y las demás funciones gerenciales',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la planificación estratégica requiere de las otras funciones gerenciales (organizar, dirigir, controlar) para convertirse en resultados reales?',
  ops:[
    'Porque la planificación estratégica define el "hacia dónde", pero necesita de las otras funciones para traducirse en resultados verificables, no solo en una intención bien redactada',
    'La planificación estratégica nunca necesita de ninguna otra función gerencial para producir resultados reales por sí sola', 'Organizar, dirigir y controlar son funciones completamente independientes de la planificación estratégica, sin ninguna conexión', 'Una vez definida la planificación estratégica, no es necesario ningún esfuerzo adicional para que se implemente correctamente'],
  ok:0,
  clave:'Porque la planificación estratégica define el "hacia dónde", pero necesita de las otras funciones para traducirse en resultados verificables, no solo en una intención bien redactada.',
  exp:'Esta traducción de lo estratégico a lo concreto conecta directamente con el ciclo de las funciones gerenciales ya visto: la planificación estratégica define el "hacia dónde", pero requiere de las otras funciones para convertirse en resultados reales y verificables.',
  no:{
    1:'La planificación estratégica, por sí sola, no basta; requiere de las otras funciones gerenciales para materializarse en resultados.',
    2:'Estas funciones están conectadas en el mismo ciclo gerencial, no son independientes ni desconectadas entre sí.',
    3:'Sí es necesario un esfuerzo adicional (organizar, dirigir, controlar) para que la planificación se implemente correctamente en la práctica.'
  },
  trampa:'Asumir que la planificación estratégica, una vez definida, se implementa automáticamente sin necesitar las demás funciones gerenciales.',
  obj:'Explicar la conexión entre la planificación estratégica y las demás funciones gerenciales para lograr resultados reales.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 3.',
  tags:['conexión entre funciones gerenciales','de lo estratégico a lo concreto','implementación real']
},
{
  id:'U10-GS-Q16', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión de calidad y seguridad del paciente', sub:'De la buena intención individual a los sistemas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la gestión de calidad busca reducir la dependencia de la buena voluntad individual de cada profesional?',
  ops:[
    'Porque incluso el profesional más competente y bien intencionado puede cometer un error bajo presión, fatiga, o simple distracción humana',
    'La buena voluntad individual de cada profesional siempre es suficiente por sí sola para garantizar la seguridad del paciente', 'La gestión de calidad nunca busca reducir la dependencia de la buena voluntad individual de los profesionales', 'Un profesional competente nunca puede cometer ningún error, sin importar la presión o fatiga que experimente'],
  ok:0,
  clave:'Porque incluso el profesional más competente y bien intencionado puede cometer un error bajo presión, fatiga, o simple distracción humana.',
  exp:'La gestión de calidad busca construir sistemas y procesos que reduzcan la dependencia de la buena voluntad o la atención individual de cada profesional, precisamente porque incluso el profesional más competente y bien intencionado puede cometer un error bajo presión, fatiga, o simple distracción humana.',
  no:{
    1:'La buena voluntad individual, por sí sola, NO es suficiente; incluso profesionales competentes pueden cometer errores bajo ciertas condiciones.',
    2:'Es precisamente lo contrario: la gestión de calidad SÍ busca reducir esta dependencia mediante sistemas y procesos institucionales.',
    3:'Cualquier profesional, sin importar su competencia, puede cometer errores bajo condiciones de presión, fatiga o distracción.'
  },
  trampa:'Sobrestimar la capacidad de la buena voluntad individual para garantizar la seguridad del paciente, sin reconocer la necesidad de sistemas de apoyo.',
  obj:'Explicar por qué la gestión de calidad busca reducir la dependencia exclusiva de la buena voluntad individual.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 8.',
  tags:['gestión de calidad','buena voluntad individual insuficiente','sistemas de apoyo']
},
{
  id:'U10-GS-Q17', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión de calidad y seguridad del paciente', sub:'Causa sistémica vs. falta de competencia individual',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué retoma directamente la lógica de la gestión de calidad de lo ya visto sobre comunicación interprofesional en otros bloques?',
  ops:[
    'Que los errores evitables con frecuencia no ocurren por falta de competencia individual, sino por fallas en el sistema que no logró capturar y corregir un error humano',
    'Esta lógica no tiene ninguna relación real con lo ya visto sobre comunicación interprofesional en Medicina Familiar o Relación Médico-Paciente', 'Los errores evitables siempre ocurren exclusivamente por falta de competencia individual del profesional involucrado', 'La comunicación interprofesional nunca tiene ninguna relación real con la seguridad del paciente a nivel institucional'],
  ok:0,
  clave:'Que los errores evitables con frecuencia no ocurren por falta de competencia individual, sino por fallas en el sistema que no logró capturar y corregir un error humano.',
  exp:'Esta lógica retoma directamente el mismo principio ya visto sobre la comunicación interprofesional en Medicina Familiar y en Relación Médico-Paciente: los errores evitables con frecuencia no ocurren por falta de competencia individual, sino por fallas en el sistema.',
  no:{
    1:'Sí existe una conexión conceptual directa con lo ya visto sobre comunicación interprofesional en esos bloques previos.',
    2:'Es precisamente lo contrario: los errores evitables con frecuencia ocurren por fallas SISTÉMICAS, no por falta de competencia individual.',
    3:'La comunicación interprofesional tiene una relación directa y bien documentada con la seguridad del paciente a nivel institucional.'
  },
  trampa:'Atribuir los errores evitables exclusivamente a la falta de competencia individual, sin reconocer el rol central de las fallas sistémicas.',
  obj:'Explicar la conexión entre la gestión de calidad y lo ya visto sobre comunicación interprofesional y errores sistémicos.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 8.',
  tags:['falla sistémica','conexión con comunicación interprofesional','error evitable']
},
{
  id:'U10-GS-Q18', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión de calidad y seguridad del paciente', sub:'Cultura de reporte sin miedo a represalias',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una cultura institucional que castiga cualquier error reportado genera el incentivo opuesto al deseado para la seguridad del paciente?',
  ops:[
    'Oculta información valiosa que podría prevenir errores similares en otros pacientes, en vez de fomentar el aprendizaje institucional',
    'Castigar cualquier error reportado siempre mejora, sin ninguna excepción, la seguridad del paciente a nivel institucional', 'El miedo a represalias nunca influye realmente en la decisión de un profesional de reportar o no un error', 'Una cultura de castigo por errores reportados no tiene ninguna relación real con la cantidad de información disponible sobre errores'],
  ok:0,
  clave:'Oculta información valiosa que podría prevenir errores similares en otros pacientes, en vez de fomentar el aprendizaje institucional.',
  exp:'Un sistema donde reportar un error conlleva castigo genera el incentivo exactamente opuesto al deseado, ocultando información valiosa que podría prevenir errores similares en otros pacientes.',
  no:{
    1:'Es precisamente lo contrario: castigar el reporte de errores TIENDE A EMPEORAR, no mejorar, la seguridad del paciente a largo plazo.',
    2:'El miedo a represalias sí influye de forma real y documentada en la decisión de reportar o no un error.',
    3:'Una cultura de castigo sí tiene una relación directa con la cantidad de información disponible: reduce el reporte y oculta información.'
  },
  trampa:'Asumir que castigar cualquier error reportado mejora la seguridad del paciente, sin reconocer el efecto de ocultamiento que genera.',
  obj:'Explicar por qué una cultura institucional punitiva ante errores reportados perjudica la seguridad del paciente.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 8.',
  tags:['cultura de reporte','miedo a represalias','ocultamiento de información']
},
{
  id:'U10-GS-Q19', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión de calidad y seguridad del paciente', sub:'Sistemas específicos de seguridad del paciente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué sistemas específicos exige la seguridad del paciente como objetivo institucional explícito?',
  ops:[
    'Protocolos estandarizados, listas de verificación antes de procedimientos, sistemas de doble verificación para medicamentos de alto riesgo, y una cultura de reporte sin miedo',
    'La seguridad del paciente como objetivo institucional no requiere ningún sistema específico adicional más allá de la buena intención individual', 'Solo se requiere un único sistema genérico, sin ninguna necesidad de protocolos o listas de verificación específicas', 'Los sistemas de doble verificación para medicamentos nunca tienen ninguna relación real con la seguridad del paciente'],
  ok:0,
  clave:'Protocolos estandarizados, listas de verificación antes de procedimientos, sistemas de doble verificación para medicamentos de alto riesgo, y una cultura de reporte sin miedo.',
  exp:'La seguridad del paciente como objetivo institucional explícito exige sistemas específicos: protocolos estandarizados para procedimientos de alto riesgo, listas de verificación antes de procedimientos quirúrgicos, sistemas de doble verificación para medicamentos de alto riesgo, y una cultura institucional que anime a reportar errores sin miedo a represalias.',
  no:{
    1:'Sí requiere sistemas específicos múltiples, más allá de la buena intención individual ya discutida como insuficiente por sí sola.',
    2:'Se requieren múltiples sistemas específicos combinados, no un único sistema genérico aislado.',
    3:'Los sistemas de doble verificación para medicamentos de alto riesgo sí tienen una relación directa con la seguridad del paciente.'
  },
  trampa:'Subestimar la necesidad de sistemas específicos múltiples para la seguridad del paciente, asumiendo que un enfoque genérico o la buena voluntad son suficientes.',
  obj:'Identificar los sistemas específicos que exige la seguridad del paciente como objetivo institucional explícito.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 8.',
  tags:['sistemas de seguridad','listas de verificación','doble verificación de medicamentos']
},
{
  id:'U10-GS-Q20', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión de calidad y seguridad del paciente', sub:'Evento adverso prevenible vs. complicación inevitable',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre un evento adverso prevenible y una complicación inevitable?',
  ops:[
    'El prevenible podría haberse evitado con un sistema mejor diseñado o un proceso mejor seguido; la inevitable puede ocurrir pese a una atención completamente adecuada',
    'Ambos conceptos son exactamente idénticos, sin ninguna diferencia real que amerite distinguirlos', 'Una complicación inevitable siempre indica una falla real del sistema que debe corregirse institucionalmente', 'Un evento adverso prevenible nunca amerita ninguna investigación institucional para identificar su causa'],
  ok:0,
  clave:'El prevenible podría haberse evitado con un sistema mejor diseñado o un proceso mejor seguido; la inevitable puede ocurrir pese a una atención completamente adecuada.',
  exp:'Un evento adverso prevenible es un daño causado por la atención médica que razonablemente podría haberse evitado con un sistema mejor diseñado -distinto de una complicación inevitable, que puede ocurrir pese a una atención completamente adecuada, sin ninguna falla real del sistema.',
  no:{
    1:'Son conceptos claramente distintos, con implicaciones institucionales diferentes según si el daño era evitable o no.',
    2:'Es precisamente lo contrario: una complicación INEVITABLE no necesariamente señala una falla real del sistema que deba corregirse.',
    3:'Un evento adverso prevenible SÍ amerita una investigación institucional para identificar y corregir la falla sistémica subyacente.'
  },
  trampa:'Confundir un evento adverso prevenible (falla sistémica) con una complicación inevitable (sin falla real), o invertir sus implicaciones institucionales.',
  obj:'Distinguir un evento adverso prevenible de una complicación inevitable.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 8.',
  tags:['evento adverso prevenible','complicación inevitable','daño iatrogénico evitable']
},
{
  id:'U10-GS-Q21', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión de calidad y seguridad del paciente', sub:'Conexión con prevención cuaternaria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué concepto ya visto en Medicina Preventiva se conecta directamente el evento adverso prevenible de este tema?',
  ops:[
    'El daño iatrogénico evitable ya visto en prevención cuaternaria', 'La consejería breve ya vista en promoción de la salud del consultorio familiar', 'El determinante social de la salud ya visto en Salud y Comunidad I', 'La cadena de supervivencia ya vista en Soporte Vital Básico y Avanzado'],
  ok:0,
  clave:'El daño iatrogénico evitable ya visto en prevención cuaternaria.',
  exp:'Un evento adverso prevenible retoma directamente el concepto de daño iatrogénico evitable ya visto en prevención cuaternaria (Medicina Preventiva, 9no), aplicado ahora al nivel institucional de la gestión de calidad hospitalaria.',
  no:{
    1:'La consejería breve es un concepto distinto, relacionado con cambio de comportamiento, no con eventos adversos institucionales.',
    2:'Los determinantes sociales son un concepto distinto, relacionado con condiciones de vida, no con eventos adversos institucionales.',
    3:'La cadena de supervivencia es un concepto distinto, relacionado con reanimación cardiopulmonar, no con eventos adversos institucionales.'
  },
  trampa:'Confundir la conexión conceptual correcta (daño iatrogénico evitable de prevención cuaternaria) con otros conceptos ya vistos en el pensum sin relación directa.',
  obj:'Identificar la conexión conceptual entre el evento adverso prevenible y el daño iatrogénico evitable ya visto en prevención cuaternaria.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 8.',
  tags:['conexión con prevención cuaternaria','daño iatrogénico evitable','concepto compartido']
},
{
  id:'U10-GS-Q22', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión de calidad y seguridad del paciente', sub:'Investigación institucional tras un evento prevenible',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un hospital identifica un evento adverso clasificado como prevenible, ocurrido por una falla en la comunicación entre turnos.',
  enunciado:'¿Qué conducta institucional es apropiada ante este hallazgo?',
  ops:[
    'Investigar para identificar y corregir la falla sistémica subyacente que permitió el evento, sin castigar automáticamente al profesional involucrado',
    'Sancionar de inmediato al profesional del turno donde ocurrió el evento, sin ninguna investigación adicional de la falla sistémica', 'Ignorar completamente el evento, ya que los eventos adversos prevenibles nunca ameritan ninguna acción institucional', 'Investigar el evento únicamente si genera consecuencias legales para la institución, sin ningún otro criterio'],
  ok:0,
  clave:'Investigar para identificar y corregir la falla sistémica subyacente que permitió el evento, sin castigar automáticamente al profesional involucrado.',
  exp:'Un evento adverso prevenible exige una investigación institucional para identificar y corregir la falla sistémica subyacente, retomando la importancia de una cultura de reporte sin miedo a represalias ya vista, en vez de castigar automáticamente al profesional involucrado.',
  no:{
    1:'Sancionar automáticamente sin investigar la falla sistémica contradice la cultura de reporte necesaria para prevenir futuros eventos.',
    2:'Los eventos adversos prevenibles sí ameritan acción institucional activa, precisamente la investigación de la falla sistémica.',
    3:'La investigación debe realizarse por su valor preventivo institucional, no exclusivamente ante riesgo de consecuencias legales.'
  },
  trampa:'Sancionar automáticamente al profesional individual sin investigar la falla sistémica subyacente, contradiciendo la cultura de reporte necesaria.',
  obj:'Aplicar la conducta institucional apropiada ante un evento adverso prevenible por falla de comunicación.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 8.',
  tags:['investigación institucional','falla de comunicación entre turnos','corrección sistémica']
},
{
  id:'U10-GS-Q23', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión de calidad y seguridad del paciente', sub:'Protocolos estandarizados retomados de otros bloques',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué herramientas ya vistas en Relación Médico-Paciente se conectan los protocolos estandarizados de gestión de calidad?',
  ops:[
    'Las herramientas de comunicación estructurada ya vistas para la transferencia de información entre turnos o profesionales', 'La escalera analgésica ya vista en Farmacoterapéutica, sin ninguna relación real con protocolos de calidad institucional', 'El genograma ya visto en Medicina Familiar, sin ninguna conexión real con los protocolos de seguridad del paciente', 'El signo de rebote ya visto en Semiología Quirúrgica, sin ninguna relación con los protocolos de gestión de calidad'],
  ok:0,
  clave:'Las herramientas de comunicación estructurada ya vistas para la transferencia de información entre turnos o profesionales.',
  exp:'La seguridad del paciente exige protocolos estandarizados para procedimientos de alto riesgo, retomando las herramientas de comunicación estructurada ya vistas en Relación Médico-Paciente, diseñadas para asegurar que la información crítica no se pierda en la transición de un profesional a otro.',
  no:{
    1:'La escalera analgésica es un concepto farmacológico distinto, sin relación directa con los protocolos de comunicación estructurada.',
    2:'El genograma es una herramienta de evaluación familiar distinta, sin relación directa con los protocolos de seguridad del paciente.',
    3:'El signo de rebote es un hallazgo semiológico distinto, sin relación directa con los protocolos de gestión de calidad institucional.'
  },
  trampa:'Confundir la conexión correcta con las herramientas de comunicación estructurada con otros conceptos ya vistos en el pensum sin relación directa.',
  obj:'Identificar la conexión entre los protocolos estandarizados de gestión de calidad y las herramientas de comunicación estructurada ya vistas.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 8.',
  tags:['protocolos estandarizados','comunicación estructurada','conexión con otros bloques']
},
{
  id:'U10-GS-Q24', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión de recursos humanos en salud', sub:'Por qué los recursos humanos son el recurso más crítico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la calidad de la atención en salud depende directamente de la calidad del personal, más que en la mayoría de otras industrias?',
  ops:[
    'Porque en una institución de salud, la calidad de la atención depende directamente de la calidad, la formación y el estado del personal que la brinda',
    'La calidad de la atención en salud nunca depende realmente de las características del personal que la brinda', 'Esta dependencia entre calidad de atención y calidad del personal es idéntica en todas las industrias, sin ninguna particularidad en salud', 'El personal de salud es un recurso completamente intercambiable, sin ninguna relevancia especial sobre la calidad de la atención'],
  ok:0,
  clave:'Porque en una institución de salud, la calidad de la atención depende directamente de la calidad, la formación y el estado del personal que la brinda.',
  exp:'Su relevancia va más allá de la administración de personal en abstracto: en una institución de salud, la calidad de la atención depende directamente de la calidad, la formación y el estado del personal que la brinda, mucho más que en la mayoría de otras industrias.',
  no:{
    1:'La calidad de la atención sí depende de forma directa y crítica de las características del personal que la brinda.',
    2:'Esta dependencia es particularmente fuerte en salud, no idéntica a la de cualquier otra industria en general.',
    3:'El personal de salud no es un recurso simplemente intercambiable; su calidad y formación son particularmente determinantes.'
  },
  trampa:'Subestimar la particularidad de la dependencia entre calidad de atención y calidad del personal en el sector salud, comparándola con cualquier otra industria.',
  obj:'Explicar por qué la calidad del personal es particularmente determinante para la calidad de la atención en salud.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 6.',
  tags:['recursos humanos en salud','calidad del personal','dependencia directa']
},
{
  id:'U10-GS-Q25', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión de recursos humanos en salud', sub:'Decisiones administrativas con impacto clínico directo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la gestión de recursos humanos en salud no puede tratarse como un departamento puramente administrativo separado de la calidad clínica?',
  ops:[
    'Porque decisiones aparentemente administrativas (personal por turno, tiempo entre turnos, carga de pacientes por profesional) tienen un impacto clínico directo y medible sobre los resultados de los pacientes',
    'Las decisiones sobre personal, turnos y carga de trabajo nunca tienen ningún impacto real sobre los resultados clínicos de los pacientes', 'La gestión de recursos humanos siempre debe tratarse como un departamento completamente separado de la calidad clínica', 'No existe ninguna relación real entre las decisiones administrativas de personal y los resultados clínicos obtenidos'],
  ok:0,
  clave:'Porque decisiones aparentemente administrativas (personal por turno, tiempo entre turnos, carga de pacientes por profesional) tienen un impacto clínico directo y medible sobre los resultados de los pacientes.',
  exp:'Esta dependencia directa explica por qué la gestión de recursos humanos en salud no puede tratarse como un departamento puramente administrativo separado de la calidad clínica: decisiones aparentemente administrativas tienen un impacto clínico directo y medible sobre los resultados de los pacientes.',
  no:{
    1:'Estas decisiones sí tienen un impacto clínico real y documentado sobre los resultados de los pacientes.',
    2:'Es precisamente lo contrario: NO debe tratarse como un departamento separado, dado su impacto directo sobre la calidad clínica.',
    3:'Sí existe una relación real y bien documentada entre las decisiones administrativas de personal y los resultados clínicos.'
  },
  trampa:'Tratar la gestión de recursos humanos como un asunto puramente administrativo sin relación con la calidad clínica de la atención.',
  obj:'Explicar por qué la gestión de recursos humanos tiene un impacto clínico directo, no solo administrativo.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 6.',
  tags:['impacto clínico de decisiones administrativas','carga de pacientes','personal por turno']
},
{
  id:'U10-GS-Q26', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión de recursos humanos en salud', sub:'Efecto del clima laboral deteriorado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué efecto tiende a generar un clima laboral deteriorado, con comunicación deficiente y poco reconocimiento del trabajo realizado?',
  ops:[
    'Mayor rotación de personal, con el costo y la pérdida de experiencia acumulada que eso implica',
    'Un clima laboral deteriorado nunca tiene ningún efecto real sobre la rotación o retención del personal de una institución', 'El clima laboral siempre mejora automáticamente la retención del personal, sin importar su calidad real', 'La comunicación deficiente entre niveles jerárquicos nunca tiene ninguna relación real con el clima laboral de una institución'],
  ok:0,
  clave:'Mayor rotación de personal, con el costo y la pérdida de experiencia acumulada que eso implica.',
  exp:'Un clima laboral deteriorado, con comunicación deficiente entre niveles jerárquicos y poco reconocimiento del trabajo realizado, tiende a generar mayor rotación de personal, un ciclo que puede volverse difícil de revertir sin una intervención institucional deliberada.',
  no:{
    1:'Un clima laboral deteriorado sí tiene un efecto real y documentado sobre el aumento de la rotación de personal.',
    2:'Es precisamente lo contrario: un clima laboral DETERIORADO tiende a AUMENTAR la rotación, no a mejorar la retención.',
    3:'La comunicación deficiente entre niveles jerárquicos sí tiene una relación directa con el deterioro del clima laboral general.'
  },
  trampa:'Subestimar el efecto real de un clima laboral deteriorado sobre la rotación de personal y sus costos institucionales asociados.',
  obj:'Explicar el efecto de un clima laboral deteriorado sobre la rotación de personal en una institución de salud.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 6.',
  tags:['clima laboral deteriorado','rotación de personal','pérdida de experiencia']
},
{
  id:'U10-GS-Q27', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión de recursos humanos en salud', sub:'Burnout como riesgo institucional, no debilidad individual',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el burnout del personal de salud se considera un riesgo institucional, no una debilidad individual?',
  ops:[
    'Es un riesgo ocupacional real y bien documentado en profesiones de alta demanda emocional y física sostenida, que exige un rol institucional activo, no solo esfuerzo individual',
    'El burnout siempre refleja exclusivamente una debilidad personal del profesional que lo experimenta, sin ninguna causa institucional', 'El burnout del personal de salud no tiene ninguna relación real con la carga de trabajo o las condiciones institucionales', 'La institución nunca tiene ningún rol real en prevenir o manejar el burnout de su personal de salud'],
  ok:0,
  clave:'Es un riesgo ocupacional real y bien documentado en profesiones de alta demanda emocional y física sostenida, que exige un rol institucional activo, no solo esfuerzo individual.',
  exp:'El burnout del personal de salud es un riesgo ocupacional real y bien documentado en profesiones de alta demanda emocional y física sostenida, no una debilidad individual de quien lo experimenta -reconocerlo como riesgo institucional cambia la conducta apropiada hacia un rol activo institucional.',
  no:{
    1:'Es precisamente lo contrario: el burnout no es una debilidad personal exclusiva; tiene causas institucionales reales identificables.',
    2:'El burnout sí tiene una relación directa con la carga de trabajo y las condiciones institucionales, no es independiente de ellas.',
    3:'La institución sí tiene un rol activo real en prevenir y manejar el burnout, diseñando cargas de trabajo razonables y apoyo disponible.'
  },
  trampa:'Estigmatizar el burnout como una falla personal del profesional, sin reconocer su naturaleza de riesgo ocupacional institucional real.',
  obj:'Explicar por qué el burnout del personal de salud se considera un riesgo institucional, no una debilidad individual.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 6.',
  tags:['burnout del personal de salud','riesgo institucional','rol activo institucional']
},
{
  id:'U10-GS-Q28', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión de recursos humanos en salud', sub:'Impacto del burnout sobre la seguridad del paciente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué relación tiene el burnout del personal de salud con la seguridad del paciente?',
  ops:[
    'Tiene un impacto directo y documentado sobre la seguridad del paciente, retomando la conexión entre el estado del recurso humano y la calidad de la atención',
    'El burnout del personal de salud nunca tiene ninguna relación real con la seguridad de los pacientes que atiende', 'El burnout es exclusivamente un problema de bienestar individual, sin ninguna relación con resultados clínicos de terceros', 'La seguridad del paciente depende únicamente de protocolos institucionales, sin ninguna relación con el estado del personal'],
  ok:0,
  clave:'Tiene un impacto directo y documentado sobre la seguridad del paciente, retomando la conexión entre el estado del recurso humano y la calidad de la atención.',
  exp:'El burnout del personal de salud no es solo un problema de bienestar individual; tiene un impacto directo y documentado sobre la seguridad del paciente, retomando la conexión ya vista entre el estado del recurso humano y la calidad de la atención.',
  no:{
    1:'El burnout sí tiene una relación real y documentada con la seguridad del paciente, no es un problema aislado del personal.',
    2:'El burnout va más allá del bienestar individual; tiene consecuencias reales sobre los resultados clínicos de los pacientes atendidos.',
    3:'La seguridad del paciente también depende del estado del personal, no exclusivamente de protocolos institucionales aislados.'
  },
  trampa:'Reducir el burnout a un problema exclusivamente de bienestar individual, sin reconocer su impacto real sobre la seguridad del paciente.',
  obj:'Explicar la relación entre el burnout del personal de salud y la seguridad del paciente.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 6.',
  tags:['burnout','seguridad del paciente','impacto sobre resultados clínicos']
},
{
  id:'U10-GS-Q29', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión de recursos humanos en salud', sub:'Conexión con la dimensión social de la salud mental',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué concepto ya visto en Salud Mental y Sociedad se conecta directamente el burnout del personal de salud?',
  ops:[
    'La dimensión social de la salud mental, retomando que las condiciones sociales y laborales influyen directamente en el riesgo de desarrollar problemas de salud mental',
    'El burnout no tiene ninguna relación real con ningún concepto visto previamente en Salud Mental y Sociedad', 'El signo de Blumberg ya visto en Semiología Quirúrgica, sin ninguna relación real con el burnout laboral', 'La escalera analgésica ya vista en Farmacoterapéutica, sin ninguna relación real con el burnout del personal de salud'],
  ok:0,
  clave:'La dimensión social de la salud mental, retomando que las condiciones sociales y laborales influyen directamente en el riesgo de desarrollar problemas de salud mental.',
  exp:'El burnout del personal de salud retoma directamente la dimensión social de la salud mental ya vista en Salud Mental y Sociedad: las condiciones laborales, como determinante social específico, influyen directamente en el riesgo de desarrollar este tipo de agotamiento.',
  no:{
    1:'Sí existe una conexión conceptual directa con la dimensión social de la salud mental ya desarrollada en ese bloque.',
    2:'El signo de Blumberg es un hallazgo semiológico distinto, sin relación conceptual directa con el burnout laboral.',
    3:'La escalera analgésica es un concepto farmacológico distinto, sin relación conceptual directa con el burnout del personal de salud.'
  },
  trampa:'No reconocer la conexión conceptual correcta entre el burnout y la dimensión social de la salud mental ya vista en el bloque correspondiente.',
  obj:'Identificar la conexión entre el burnout del personal de salud y la dimensión social de la salud mental ya vista.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 6.',
  tags:['conexión con salud mental y sociedad','determinante social laboral','dimensión social del burnout']
},
{
  id:'U10-GS-Q30', programa:'unirm', cuatri:10,
  esp:'Gerencia en Salud', tema:'Gestión de recursos humanos en salud', sub:'Componentes de la gestión de recursos humanos',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué incluye la gestión de recursos humanos en salud, según lo visto en este tema?',
  ops:[
    'Reclutamiento, capacitación continua, distribución de turnos, y evaluación del desempeño del personal', 'Únicamente la contratación inicial del personal, sin ninguna otra actividad de gestión posterior', 'Solo la evaluación del desempeño, sin ninguna relación con reclutamiento o capacitación del personal', 'Exclusivamente la distribución de turnos, sin ninguna otra función de gestión de recursos humanos relevante'],
  ok:0,
  clave:'Reclutamiento, capacitación continua, distribución de turnos, y evaluación del desempeño del personal.',
  exp:'La gestión de recursos humanos en salud incluye reclutamiento, capacitación continua, distribución de turnos, y evaluación del desempeño del personal, pero su relevancia va más allá de la administración de personal en abstracto.',
  no:{
    1:'Va más allá de la contratación inicial; incluye capacitación continua, distribución de turnos y evaluación de desempeño.',
    2:'La evaluación del desempeño es solo una de varias actividades incluidas, junto con reclutamiento, capacitación y distribución de turnos.',
    3:'La distribución de turnos es solo una de varias actividades incluidas, junto con reclutamiento, capacitación y evaluación de desempeño.'
  },
  trampa:'Reducir la gestión de recursos humanos en salud a una sola actividad aislada, sin reconocer el conjunto completo de funciones que incluye.',
  obj:'Identificar los componentes que incluye la gestión de recursos humanos en salud.',
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 6.',
  tags:['componentes de gestión de recursos humanos','reclutamiento','capacitación continua']
}

]);
