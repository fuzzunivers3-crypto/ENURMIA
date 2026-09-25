/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE MEDICINA PREVENTIVA (2/2)
   Continua unirm-09-banco-12.js. Amplia Medicina Preventiva de 2
   a 50 preguntas. Esta parte cubre programas nacionales de salud
   preventiva, educacion para la salud y prevencion cuaternaria
   (temas 5-7).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U9-MP-Q30', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Programas nacionales de salud preventiva', sub:'Control prenatal y ácido fólico',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué componente del control prenatal retoma directamente un concepto ya visto en Embriología sobre la prevención de defectos congénitos?',
  ops:[
    'La suplementación con ácido fólico preconcepcional, para prevenir defectos del tubo neural',
    'El control prenatal no tiene ninguna relación con conceptos ya vistos en Embriología', 'El tamizaje neonatal, no el control prenatal, es el único componente relacionado con Embriología', 'La vacunación materna es el único componente del control prenatal relacionado con conceptos de Embriología'],
  ok:0,
  clave:'La suplementación con ácido fólico preconcepcional retoma directamente la prevención de defectos del tubo neural, ya vista en Embriología.',
  exp:'El *control prenatal*, como parte de los programas nacionales de salud preventiva, incluye la suplementación con ácido fólico preconcepcional, que retoma directamente la importancia de este nutriente ya vista en Embriología para prevenir defectos del tubo neural durante las primeras semanas del desarrollo embrionario, cuando muchas mujeres todavía no saben que están embarazadas -por eso se recomienda comenzar la suplementación antes de la concepción, no solo después de confirmar el embarazo.',
  no:{
    1:'El control prenatal sí retoma directamente un concepto específico ya visto en Embriología: la prevención de defectos del tubo neural con ácido fólico.',
    2:'El ácido fólico preconcepcional es parte del control prenatal en sí, no exclusivamente del tamizaje neonatal, que es un componente distinto del programa.',
    3:'La vacunación materna no es el único componente relacionado con Embriología; el ácido fólico preconcepcional es la conexión más directa y específica.'
  },
  trampa:'No reconocer la conexión directa entre el ácido fólico preconcepcional del control prenatal y la prevención de defectos del tubo neural ya vista en Embriología.',
  obj:'Explicar la conexión entre el control prenatal y la prevención de defectos del tubo neural con ácido fólico.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['control prenatal','ácido fólico','defectos del tubo neural']
},
{
  id:'U9-MP-Q31', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Programas nacionales de salud preventiva', sub:'Propósito del tamizaje neonatal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el propósito central del tamizaje neonatal, realizado de forma rutinaria a todo recién nacido?',
  ops:[
    'Buscar enfermedades metabólicas o genéticas tratables si se detectan a tiempo, antes incluso de que den cualquier síntoma clínico visible',
    'El tamizaje neonatal no tiene ningún propósito clínico real definido', 'Detectar únicamente enfermedades infecciosas adquiridas después del nacimiento', 'El tamizaje neonatal se realiza únicamente en recién nacidos con síntomas evidentes de enfermedad'],
  ok:0,
  clave:'Buscar enfermedades metabólicas o genéticas tratables si se detectan a tiempo, antes de que den cualquier síntoma clínico visible.',
  exp:'El *tamizaje neonatal* consiste en pruebas de laboratorio realizadas de forma rutinaria a todo recién nacido, buscando enfermedades metabólicas o genéticas tratables si se detectan a tiempo, antes incluso de que den cualquier síntoma clínico visible -un ejemplo clásico de prevención secundaria aplicado sistemáticamente a toda una población de recién nacidos, sin esperar a que aparezcan signos de enfermedad.',
  no:{
    1:'El tamizaje neonatal sí tiene un propósito clínico bien definido: la detección temprana de enfermedades metabólicas o genéticas tratables.',
    2:'El tamizaje neonatal se enfoca en enfermedades metabólicas o genéticas, no específicamente en enfermedades infecciosas adquiridas tras el nacimiento.',
    3:'El tamizaje neonatal se aplica de forma rutinaria a TODO recién nacido, precisamente porque busca detectar enfermedades ANTES de que den síntomas, no solo en quienes ya los presentan.'
  },
  trampa:'Confundir el propósito del tamizaje neonatal (detección preclínica sistemática) con una evaluación dirigida solo a recién nacidos ya sintomáticos.',
  obj:'Explicar el propósito central del tamizaje neonatal como programa de detección preclínica sistemática.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['tamizaje neonatal','enfermedades metabólicas','detección preclínica']
},
{
  id:'U9-MP-Q32', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Programas nacionales de salud preventiva', sub:'Atención primaria como nivel más eficiente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la atención primaria es, generalmente, el nivel más eficiente del sistema de salud para implementar programas preventivos a gran escala?',
  ops:[
    'Porque es el primer punto de contacto de la población con el sistema de salud, y el nivel geográficamente más cercano y accesible',
    'La atención primaria no tiene ninguna ventaja particular sobre los niveles hospitalarios más especializados para implementar programas preventivos', 'Los programas preventivos a gran escala solo pueden implementarse eficazmente en hospitales de tercer nivel', 'La accesibilidad geográfica no tiene ninguna relación con la eficiencia de un programa preventivo poblacional'],
  ok:0,
  clave:'Es el primer punto de contacto de la población con el sistema de salud, y el nivel geográficamente más cercano y accesible.',
  exp:'La *atención primaria* de salud es, generalmente, el nivel del sistema de salud donde se implementa la mayoría de los programas preventivos porque es el primer punto de contacto de la población con el sistema de salud, y el nivel geográficamente más cercano y accesible, lo que la convierte en el punto más eficiente para ofrecer vacunación, control prenatal y tamizaje de rutina a gran escala, sin necesitar que cada persona busque activamente un especialista o un centro de mayor complejidad.',
  no:{
    1:'La atención primaria sí tiene ventajas claras sobre los niveles más especializados para implementar programas preventivos poblacionales, precisamente por su accesibilidad.',
    2:'Los programas preventivos a gran escala suelen ser más eficientes cuando se implementan en atención primaria, no exclusivamente en hospitales de tercer nivel.',
    3:'La accesibilidad geográfica tiene una relación directa y central con la eficiencia de un programa preventivo poblacional a gran escala.'
  },
  trampa:'Subestimar el rol central de la atención primaria en la implementación eficiente de programas preventivos poblacionales, frente a los niveles más especializados.',
  obj:'Explicar por qué la atención primaria es el nivel más eficiente para implementar programas preventivos a gran escala.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['atención primaria','eficiencia poblacional','accesibilidad']
},
{
  id:'U9-MP-Q33', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Programas nacionales de salud preventiva', sub:'Carácter sistemático de un programa nacional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué distingue a un programa nacional de salud preventiva de una intervención preventiva aislada, ofrecida caso por caso?',
  ops:[
    'Está integrado como una prestación estándar y esperada dentro del sistema de salud, con metas de cobertura poblacional definidas y seguimiento de indicadores a nivel nacional',
    'No existe ninguna diferencia real entre un programa nacional y una intervención preventiva aislada ofrecida caso por caso', 'Un programa nacional depende exclusivamente de que un médico individual decida ofrecerlo en cada consulta', 'Los programas nacionales de salud preventiva nunca tienen metas de cobertura poblacional definidas'],
  ok:0,
  clave:'Está integrado como prestación estándar y esperada, con metas de cobertura poblacional definidas y seguimiento de indicadores a nivel nacional.',
  exp:'Lo que distingue a un programa nacional de una intervención aislada es precisamente su carácter sistemático: no depende de que un médico individual decida ofrecerlo caso por caso según su propio criterio, sino que está integrado como una prestación estándar y esperada dentro del sistema de salud, con metas de cobertura poblacional definidas y con seguimiento de indicadores a nivel nacional, permitiendo evaluar si realmente está alcanzando a la población objetivo.',
  no:{
    1:'Sí existe una diferencia clara y central: el carácter sistemático, con metas y seguimiento, frente a una decisión aislada caso por caso.',
    2:'Es precisamente lo contrario: un programa nacional NO depende de la decisión individual de cada médico, a diferencia de una intervención aislada.',
    3:'Los programas nacionales bien diseñados sí suelen tener metas de cobertura poblacional definidas, como parte central de su carácter sistemático.'
  },
  trampa:'No reconocer el carácter sistemático (metas, seguimiento, integración estándar) como lo que distingue a un programa nacional de una intervención aislada caso por caso.',
  obj:'Explicar qué distingue a un programa nacional de salud preventiva de una intervención aislada.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['programa nacional','carácter sistemático','metas de cobertura']
},
{
  id:'U9-MP-Q34', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Programas nacionales de salud preventiva', sub:'Cobertura teórica vs. cobertura efectiva',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un programa nacional de tamizaje neonatal está formalmente disponible en todo el país, pero en zonas rurales alejadas muchos recién nacidos no acceden realmente a la prueba, por barreras geográficas y económicas.',
  enunciado:'¿Qué concepto explica por qué este programa no está logrando el impacto poblacional que promete sobre el papel?',
  ops:[
    'La diferencia entre cobertura teórica (disponible formalmente) y cobertura efectiva (a la que la población realmente accede)',
    'Este escenario no tiene ninguna explicación conceptual relevante en salud pública', 'La existencia formal de un programa siempre garantiza automáticamente su impacto poblacional real', 'Las barreras geográficas y económicas nunca afectan la cobertura real de un programa de salud'],
  ok:0,
  clave:'La diferencia entre cobertura teórica (disponible formalmente) y cobertura efectiva (a la que la población realmente accede).',
  exp:'Un programa preventivo que existe solo en el diseño oficial, pero al que la población no accede realmente por barreras geográficas, económicas o culturales, no logra el impacto poblacional que promete sobre el papel -la cobertura efectiva (a la que la población realmente accede) importa tanto como el diseño del programa en sí (la cobertura teórica, formalmente disponible); un programa "nacional" solo en el papel, sin cobertura efectiva real, no cumple su función preventiva.',
  no:{
    1:'Este escenario sí tiene una explicación conceptual clara y relevante: la brecha entre cobertura teórica y cobertura efectiva.',
    2:'La existencia formal de un programa NO garantiza automáticamente su impacto poblacional real; depende de la cobertura efectiva alcanzada.',
    3:'Las barreras geográficas y económicas sí afectan de forma real y documentada la cobertura efectiva de un programa de salud, como se describe en este caso.'
  },
  trampa:'Asumir que la existencia formal de un programa nacional garantiza automáticamente su impacto poblacional, sin distinguir cobertura teórica de cobertura efectiva.',
  obj:'Explicar la diferencia entre cobertura teórica y cobertura efectiva de un programa nacional de salud preventiva.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['cobertura efectiva','cobertura teórica','barreras de acceso']
},
{
  id:'U9-MP-Q35', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Programas nacionales de salud preventiva', sub:'Fortalecer atención primaria vs. hospitalaria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué fortalecer el nivel de atención primaria suele tener un impacto proporcionalmente mayor sobre los indicadores preventivos poblacionales que fortalecer exclusivamente los niveles hospitalarios especializados?',
  ops:[
    'Porque los niveles hospitalarios especializados atienden a la enfermedad ya establecida, mientras que la atención primaria es donde se concentran la mayoría de los programas preventivos',
    'Fortalecer los niveles hospitalarios especializados siempre tiene mayor impacto sobre los indicadores preventivos poblacionales', 'No existe ninguna diferencia de impacto entre fortalecer atención primaria o fortalecer niveles hospitalarios especializados', 'Los indicadores preventivos poblacionales no tienen ninguna relación con qué nivel del sistema de salud se fortalezca'],
  ok:0,
  clave:'Los niveles hospitalarios especializados atienden la enfermedad ya establecida; la atención primaria es donde se concentran la mayoría de los programas preventivos.',
  exp:'Fortalecer la atención primaria -en infraestructura, personal y recursos- suele tener un impacto proporcionalmente mayor sobre los indicadores preventivos de toda una población que fortalecer exclusivamente los niveles hospitalarios más especializados, porque estos últimos atienden principalmente a la enfermedad ya establecida (diagnóstico y tratamiento de casos ya presentes), mientras que la atención primaria es precisamente el nivel donde se concentran la vacunación, el control prenatal y el tamizaje de rutina que previenen la enfermedad antes de que llegue a ese punto.',
  no:{
    1:'Es al revés: fortalecer la atención primaria suele tener MAYOR impacto sobre indicadores preventivos que fortalecer exclusivamente los niveles hospitalarios especializados.',
    2:'Sí existe una diferencia real y documentada de impacto según qué nivel del sistema de salud se fortalezca, relacionada con la función preventiva de cada nivel.',
    3:'Los indicadores preventivos poblacionales sí tienen una relación directa con qué nivel del sistema de salud se prioriza y fortalece.'
  },
  trampa:'Asumir que fortalecer los niveles hospitalarios especializados tiene el mismo o mayor impacto preventivo poblacional que fortalecer la atención primaria.',
  obj:'Explicar por qué fortalecer la atención primaria tiene mayor impacto proporcional sobre indicadores preventivos que fortalecer niveles hospitalarios especializados.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['atención primaria','nivel hospitalario','indicadores preventivos']
},
{
  id:'U9-MP-Q36', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Programas nacionales de salud preventiva', sub:'Integración de conceptos del bloque',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo conecta el tema de programas nacionales de salud preventiva con los temas anteriores del mismo bloque (niveles de prevención, vacunación, tamizaje)?',
  ops:[
    'Muestra cómo esos conceptos individuales se organizan, en la práctica real de un sistema de salud, como programas sistemáticos y sostenidos, no como decisiones aisladas caso por caso',
    'El tema de programas nacionales no tiene ninguna conexión real con los temas anteriores del mismo bloque', 'Los programas nacionales reemplazan por completo la necesidad de entender los niveles de prevención o el tamizaje individualmente', 'Cada programa nacional se basa en un único concepto del bloque, sin combinar varios a la vez'],
  ok:0,
  clave:'Muestra cómo esos conceptos individuales se organizan, en la práctica real, como programas sistemáticos y sostenidos, no como decisiones aisladas.',
  exp:'El tema de programas nacionales de salud preventiva conecta directamente todos los conceptos individuales ya vistos en el bloque -niveles de prevención, esquema de vacunación, tamizaje bien diseñado- mostrando cómo se organizan, en la práctica real de un sistema de salud, como programas sistemáticos y sostenidos en el tiempo, no como decisiones médicas aisladas tomadas caso por caso según el criterio de cada profesional individual.',
  no:{
    1:'Sí existe una conexión explícita y central: este tema integra en la práctica los conceptos individuales ya vistos antes en el bloque.',
    2:'Los programas nacionales no reemplazan la necesidad de entender los conceptos individuales; los aplican de forma sistemática y organizada.',
    3:'Un programa nacional bien diseñado típicamente combina VARIOS conceptos del bloque a la vez (vacunación, tamizaje, control prenatal), no un único concepto aislado.'
  },
  trampa:'No reconocer que el tema de programas nacionales es precisamente la integración práctica de los conceptos individuales ya vistos antes en el bloque.',
  obj:'Explicar cómo el tema de programas nacionales integra los conceptos individuales previos del bloque de Medicina Preventiva.',
  ref:'OPS, Renovación de la Atención Primaria de Salud.',
  tags:['integración de conceptos','programas nacionales','sistematización']
},
{
  id:'U9-MP-Q37', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Educación para la salud', sub:'Por qué la información sola no basta',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué dar información correcta rara vez basta, por sí sola, para lograr un cambio de comportamiento saludable sostenido?',
  ops:[
    'Porque además del conocimiento hacen falta habilidades prácticas concretas y un entorno que facilite -en vez de dificultar- la opción saludable',
    'La información correcta siempre es suficiente por sí sola para lograr cualquier cambio de comportamiento saludable', 'Las personas nunca conocen los riesgos de sus propios comportamientos poco saludables', 'El entorno de una persona no tiene ninguna relación con su capacidad de cambiar un comportamiento'],
  ok:0,
  clave:'Hacen falta, además del conocimiento, habilidades prácticas concretas y un entorno que facilite la opción saludable.',
  exp:'La evidencia acumulada en salud pública muestra consistentemente que solo dar información (por ejemplo, que fumar es dañino, algo que la gran mayoría de fumadores ya sabe perfectamente) rara vez basta por sí solo para lograr un cambio de comportamiento real: hace falta trabajar también las habilidades prácticas concretas (cómo negarse a una presión social específica, cómo planificar con recursos limitados) y el entorno que rodea a la persona (si facilita o dificulta activamente la opción saludable).',
  no:{
    1:'Es precisamente lo contrario: la información sola RARA VEZ es suficiente para lograr un cambio de comportamiento sostenido, según la evidencia acumulada.',
    2:'Muchas personas ya conocen los riesgos de sus comportamientos poco saludables (como el tabaquismo), y aun así no logran cambiar solo con esa información.',
    3:'El entorno de una persona tiene una relación directa y bien documentada con su capacidad real de cambiar un comportamiento hacia opciones más saludables.'
  },
  trampa:'Asumir que dar información correcta es suficiente por sí sola para lograr un cambio de comportamiento, ignorando el rol de las habilidades prácticas y el entorno.',
  obj:'Explicar por qué la información sola rara vez basta para lograr un cambio de comportamiento saludable sostenido.',
  ref:'Restrepo y Málaga, Promoción de la Salud, cap. 3.',
  tags:['educación para la salud','cambio de comportamiento','habilidades prácticas']
},
{
  id:'U9-MP-Q38', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Educación para la salud', sub:'Promoción comunitaria e influencia de pares',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la promoción comunitaria, que aprovecha la influencia social entre pares, puede ser a veces más efectiva que la instrucción directa de un profesional de salud?',
  ops:[
    'Porque busca cambios sostenidos en las normas sociales compartidas de un grupo, no solo en el conocimiento individual y aislado de cada persona',
    'La influencia social entre pares nunca tiene ningún efecto real sobre el comportamiento relacionado con la salud', 'Un profesional de salud siempre logra un cambio de comportamiento más efectivo que cualquier influencia social entre pares', 'La promoción comunitaria se dirige exclusivamente a un individuo a la vez, igual que la consulta médica'],
  ok:0,
  clave:'Busca cambios sostenidos en las normas sociales compartidas de un grupo, no solo en el conocimiento individual y aislado de cada persona.',
  exp:'La *promoción comunitaria* extiende la educación para la salud más allá de la consulta médica individual, trabajando con grupos, escuelas o comunidades enteras, aprovechando la influencia social entre pares -que a veces resulta más efectiva para lograr un cambio sostenido que la instrucción directa de un profesional de salud- y buscando cambios duraderos en las normas sociales compartidas de ese grupo, no solo en el conocimiento individual y aislado de cada persona.',
  no:{
    1:'La influencia social entre pares sí tiene un efecto real y documentado sobre el comportamiento relacionado con la salud, a veces más efectivo que la instrucción individual.',
    2:'No siempre es así: la promoción comunitaria, aprovechando la influencia entre pares, puede lograr en ciertos contextos un cambio más sostenido que la instrucción de un profesional.',
    3:'Es precisamente lo contrario: la promoción comunitaria se dirige a GRUPOS o comunidades enteras, no a un individuo a la vez como la consulta médica.'
  },
  trampa:'Subestimar el efecto de la influencia social entre pares en la promoción comunitaria, o confundirla con una intervención dirigida a un individuo a la vez.',
  obj:'Explicar por qué la promoción comunitaria puede ser más efectiva que la instrucción individual para lograr un cambio de comportamiento sostenido.',
  ref:'Restrepo y Málaga, Promoción de la Salud, cap. 3.',
  tags:['promoción comunitaria','influencia entre pares','normas sociales']
},
{
  id:'U9-MP-Q39', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Educación para la salud', sub:'Programa escolar vs. charla puntual',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una escuela implementa un programa que involucra a estudiantes, maestros y familias en conjunto para promover alimentación saludable, en vez de dar una única charla informativa dirigida solo a los estudiantes.',
  enunciado:'¿Por qué este programa tiende a lograr cambios más duraderos que una charla puntual dirigida únicamente a los estudiantes?',
  ops:[
    'Porque modifica el entorno social completo en el que esos hábitos se forman y se refuerzan día a día, no solo el conocimiento individual de los estudiantes',
    'Una charla puntual dirigida a los estudiantes siempre logra cambios más duraderos que cualquier programa que involucre a toda la comunidad escolar', 'Involucrar a maestros y familias nunca tiene ningún efecto adicional sobre el cambio de comportamiento de los estudiantes', 'No existe ninguna diferencia real en la duración del cambio de comportamiento entre ambos enfoques'],
  ok:0,
  clave:'Modifica el entorno social completo en el que esos hábitos se forman y se refuerzan día a día, no solo el conocimiento individual de los estudiantes.',
  exp:'Un programa escolar que involucra a estudiantes, maestros y familias en conjunto para promover alimentación saludable tiende a lograr cambios más duraderos que una charla puntual dirigida únicamente a los estudiantes, porque modifica el entorno social completo en el que esos hábitos se forman y se refuerzan día a día -la comida disponible en casa, las normas del comedor escolar, el ejemplo de los adultos de referencia- en vez de depender solo del conocimiento individual y aislado que los estudiantes recibieron en una única charla.',
  no:{
    1:'Es precisamente lo contrario: una charla puntual dirigida solo a estudiantes suele tener un efecto MENOS duradero que un programa que involucra al entorno social completo.',
    2:'Involucrar a maestros y familias sí añade un efecto real, al modificar el entorno social completo donde se forman y refuerzan los hábitos de los estudiantes.',
    3:'Sí existe una diferencia documentada: los programas que modifican el entorno social completo suelen lograr cambios más duraderos que una intervención puntual aislada.'
  },
  trampa:'Subestimar el valor de modificar el entorno social completo (familias, maestros, normas escolares) frente a una intervención educativa puntual dirigida solo al individuo.',
  obj:'Explicar por qué un programa que involucra al entorno social completo logra cambios más duraderos que una charla puntual individual.',
  ref:'Restrepo y Málaga, Promoción de la Salud, cap. 3.',
  tags:['programa escolar','entorno social','cambio duradero']
},
{
  id:'U9-MP-Q40', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Educación para la salud', sub:'Barreras prácticas ignoradas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué muchas campañas educativas bien intencionadas, pero mal diseñadas, fracasan en producir un cambio de comportamiento medible y sostenido?',
  ops:[
    'Porque se limitan a "informar mejor" -repetir el mismo mensaje con más énfasis- sin identificar ni abordar las barreras prácticas específicas que enfrenta cada persona o comunidad',
    'Las campañas educativas bien diseñadas nunca pueden fracasar, sin importar cómo estén planteadas', 'El fracaso de una campaña educativa nunca tiene relación con si aborda o no las barreras prácticas reales', 'Todas las barreras para el cambio de comportamiento son exactamente iguales para cualquier persona o comunidad'],
  ok:0,
  clave:'Se limitan a "informar mejor" sin identificar ni abordar las barreras prácticas específicas que enfrenta cada persona o comunidad.',
  exp:'Ignorar las barreras prácticas específicas -falta de tiempo real, falta de recursos económicos, falta de apoyo social, o barreras culturales- y limitarse a "informar mejor" (repetir el mismo mensaje con más énfasis o más detalle técnico) explica por qué muchas campañas educativas bien intencionadas, pero mal diseñadas, fracasan en producir un cambio de comportamiento medible y sostenido en el tiempo, a pesar de la buena intención detrás de ellas.',
  no:{
    1:'Las campañas educativas sí pueden fracasar, especialmente cuando ignoran las barreras prácticas reales de la población a la que se dirigen.',
    2:'El fracaso de una campaña educativa sí tiene una relación directa y bien documentada con si identifica y aborda o no las barreras prácticas reales.',
    3:'Las barreras prácticas varían considerablemente según cada persona o comunidad (recursos económicos, apoyo social, contexto cultural), no son iguales para todos.'
  },
  trampa:'Asumir que repetir o intensificar el mismo mensaje informativo es suficiente, sin identificar las barreras prácticas reales que impiden el cambio de comportamiento.',
  obj:'Explicar por qué ignorar las barreras prácticas específicas lleva al fracaso de muchas campañas educativas.',
  ref:'Restrepo y Málaga, Promoción de la Salud, cap. 3.',
  tags:['barreras prácticas','campaña educativa','fracaso del cambio de comportamiento']
},
{
  id:'U9-MP-Q41', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Educación para la salud', sub:'Folleto informativo vs. plan de pasos concretos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico le entrega a un paciente con sobrepeso un folleto informativo sobre alimentación saludable, sin conversar sobre sus barreras prácticas específicas ni ayudarlo a planificar pasos concretos.',
  enunciado:'¿Por qué esta consulta probablemente tendrá un impacto limitado sobre el comportamiento real del paciente?',
  ops:[
    'Porque no aborda las barreras prácticas reales del paciente para cambiar su comportamiento, ni lo ayuda a planificar pasos concretos y realistas',
    'Entregar un folleto informativo siempre garantiza un cambio de comportamiento efectivo en cualquier paciente', 'Las barreras prácticas de un paciente nunca afectan su capacidad real de seguir una recomendación de alimentación saludable', 'Un folleto informativo tiene exactamente el mismo impacto que una consulta que planifica pasos concretos con el paciente'],
  ok:0,
  clave:'No aborda las barreras prácticas reales del paciente para cambiar su comportamiento, ni lo ayuda a planificar pasos concretos y realistas.',
  exp:'Una consulta médica que solo entrega un folleto informativo, sin abordar las barreras prácticas reales del paciente para cambiar su comportamiento, tiene un impacto mucho menor que una consulta que ayuda a planificar pasos concretos, realistas y adaptados a esa persona en particular -el folleto aporta conocimiento, pero no resuelve las dificultades prácticas específicas que impiden que ese conocimiento se traduzca en un cambio de comportamiento real.',
  no:{
    1:'Entregar un folleto informativo, por sí solo, NO garantiza un cambio de comportamiento efectivo, precisamente porque no aborda las barreras prácticas reales.',
    2:'Las barreras prácticas de un paciente sí afectan de forma directa su capacidad real de seguir una recomendación de alimentación saludable.',
    3:'Existe una diferencia real de impacto: una consulta que planifica pasos concretos con el paciente suele tener un efecto mayor que solo entregar un folleto informativo.'
  },
  trampa:'Asumir que entregar información escrita (un folleto) es equivalente, en impacto, a una consulta que aborda activamente las barreras prácticas del paciente.',
  obj:'Explicar por qué una consulta que solo entrega información tiene menor impacto que una que aborda barreras prácticas y planifica pasos concretos.',
  ref:'Restrepo y Málaga, Promoción de la Salud, cap. 3.',
  tags:['consulta médica','folleto informativo','pasos concretos']
},
{
  id:'U9-MP-Q42', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Educación para la salud', sub:'Tres componentes del cambio de comportamiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son los tres componentes que, trabajados en conjunto, hacen más probable un cambio de comportamiento saludable sostenido?',
  ops:[
    'El conocimiento (información correcta), las habilidades prácticas concretas y el entorno que facilita la opción saludable',
    'El cambio de comportamiento saludable depende exclusivamente de un único componente: la fuerza de voluntad individual', 'Solo el conocimiento es necesario; las habilidades prácticas y el entorno no influyen en el resultado', 'El entorno es el único componente relevante; el conocimiento y las habilidades prácticas no importan'],
  ok:0,
  clave:'El conocimiento, las habilidades prácticas concretas y el entorno que facilita la opción saludable, trabajados en conjunto.',
  exp:'La educación para la salud efectiva trabaja tres componentes en conjunto para lograr un cambio de comportamiento sostenido: el conocimiento (información correcta sobre por qué un comportamiento es dañino o beneficioso), las habilidades prácticas concretas (cómo lograr ese cambio en la vida real, con los recursos disponibles) y el entorno (si el ambiente físico y social facilita o dificulta activamente la opción saludable) -ninguno de los tres, por sí solo, suele ser suficiente.',
  no:{
    1:'El cambio de comportamiento saludable no depende de un único componente aislado como la fuerza de voluntad; involucra conocimiento, habilidades y entorno en conjunto.',
    2:'Las habilidades prácticas y el entorno sí influyen de forma documentada en el resultado, además del conocimiento por sí solo.',
    3:'El conocimiento y las habilidades prácticas también son componentes relevantes, además del entorno; los tres trabajan en conjunto.'
  },
  trampa:'Reducir el cambio de comportamiento saludable a un único factor aislado (solo información, solo fuerza de voluntad, o solo entorno), en vez de reconocer los tres componentes combinados.',
  obj:'Identificar los tres componentes que, trabajados en conjunto, favorecen un cambio de comportamiento saludable sostenido.',
  ref:'Restrepo y Málaga, Promoción de la Salud, cap. 3.',
  tags:['conocimiento','habilidades prácticas','entorno']
},
{
  id:'U9-MP-Q43', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Educación para la salud', sub:'Diferencia con la promoción de la salud',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se relaciona la educación para la salud, vista en este tema, con la promoción de la salud vista al inicio del bloque en niveles de prevención?',
  ops:[
    'La educación para la salud es una de las herramientas concretas que puede usar la promoción de la salud, un concepto más amplio orientado a mejorar las condiciones generales de salud de la población',
    'Son exactamente el mismo concepto, sin ninguna diferencia real entre ambos', 'La educación para la salud siempre es más amplia que la promoción de la salud', 'No existe ninguna relación conceptual entre la educación para la salud y la promoción de la salud'],
  ok:0,
  clave:'La educación para la salud es una de las herramientas concretas de la promoción de la salud, un concepto más amplio.',
  exp:'La educación para la salud, con su enfoque en conocimiento, habilidades prácticas y entorno para lograr un cambio de comportamiento, es una de las herramientas concretas que puede usar la promoción de la salud -el concepto más amplio ya visto al inicio del bloque en niveles de prevención, orientado a mejorar las condiciones generales -sociales, ambientales, económicas- que determinan la salud de toda una población, no solo el comportamiento individual de una persona.',
  no:{
    1:'Son conceptos relacionados pero distintos: uno (educación para la salud) es una herramienta más específica dentro del concepto más amplio del otro (promoción de la salud).',
    2:'Es al revés: la PROMOCIÓN de la salud es el concepto más amplio, y la educación para la salud es una de sus herramientas más específicas, no al contrario.',
    3:'Sí existe una relación conceptual clara: la educación para la salud es una herramienta dentro del marco más amplio de la promoción de la salud.'
  },
  trampa:'Confundir la educación para la salud (herramienta específica) con la promoción de la salud (concepto más amplio), o invertir cuál de los dos es más general.',
  obj:'Explicar la relación conceptual entre la educación para la salud y la promoción de la salud.',
  ref:'Restrepo y Málaga, Promoción de la Salud, cap. 3.',
  tags:['educación para la salud','promoción de la salud','relación conceptual']
},
{
  id:'U9-MP-Q44', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Prevención cuaternaria', sub:'Definición del concepto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué busca identificar y proteger la prevención cuaternaria, a diferencia de los tres niveles clásicos de prevención?',
  ops:[
    'A pacientes en riesgo de recibir intervenciones médicas excesivas o innecesarias, protegiéndolos de un daño médico evitable causado por el exceso de atención',
    'La prevención cuaternaria busca exactamente lo mismo que la prevención primaria, sin ninguna diferencia real', 'La prevención cuaternaria busca aumentar, no reducir, la cantidad de estudios y tratamientos administrados a cada paciente', 'La prevención cuaternaria no tiene ninguna relación con el concepto de daño causado por la propia atención médica'],
  ok:0,
  clave:'Identifica y protege a pacientes en riesgo de recibir intervenciones médicas excesivas o innecesarias, protegiéndolos de un daño evitable causado por el exceso de atención.',
  exp:'La *prevención cuaternaria* es un concepto más reciente que los tres niveles clásicos ya vistos (primaria, secundaria, terciaria): busca identificar a pacientes en riesgo de recibir intervenciones médicas EXCESIVAS o innecesarias, y protegerlos de un daño médico evitable causado precisamente por ese exceso de atención -no por la enfermedad en sí misma, sino por el exceso de intervención médica sobre ella.',
  no:{
    1:'La prevención cuaternaria busca algo distinto de los tres niveles clásicos: protege del exceso de intervención médica, no de la enfermedad en sí.',
    2:'Es precisamente lo contrario: la prevención cuaternaria busca REDUCIR (no aumentar) la cantidad de estudios y tratamientos innecesarios.',
    3:'La prevención cuaternaria tiene una relación central y definitoria con el concepto de daño causado por la propia atención médica excesiva.'
  },
  trampa:'Confundir la prevención cuaternaria con los tres niveles clásicos de prevención, sin reconocer que protege del exceso de intervención médica, no de la enfermedad misma.',
  obj:'Definir el concepto de prevención cuaternaria y distinguirlo de los tres niveles clásicos de prevención.',
  ref:'Jamoulle, Prevención cuaternaria.',
  tags:['prevención cuaternaria','exceso de intervención médica','daño evitable']
},
{
  id:'U9-MP-Q45', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Prevención cuaternaria', sub:'Sobrediagnóstico',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un tamizaje demasiado sensible detecta en un paciente asintomático una condición que, de no haberse buscado activamente, nunca habría causado síntomas ni afectado su vida.',
  enunciado:'¿Qué término describe esta situación, y qué consecuencia práctica suele tener?',
  ops:[
    'Sobrediagnóstico; una vez detectada la condición, dispara estudios y tratamientos adicionales, cada uno con sus propios riesgos',
    'Se llama "prevención terciaria exitosa", y no tiene ninguna consecuencia práctica negativa', 'Este escenario se llama "falso negativo", y no requiere ningún estudio adicional', 'Se llama "sobretratamiento", nunca "sobrediagnóstico", cuando la condición detectada nunca habría causado síntomas'],
  ok:0,
  clave:'Es sobrediagnóstico; una vez detectada, dispara estudios y tratamientos adicionales, cada uno con sus propios riesgos.',
  exp:'El *sobrediagnóstico* ocurre cuando se detecta -por ejemplo, gracias a un tamizaje demasiado sensible o aplicado sin el criterio adecuado- una condición que nunca habría causado síntomas ni afectado la vida de esa persona si nunca se hubiera buscado activamente, pero que, una vez detectada formalmente, dispara estudios y tratamientos adicionales, cada uno con sus propios riesgos inherentes -un concepto central de la prevención cuaternaria.',
  no:{
    1:'Este escenario no es un ejemplo de "prevención terciaria exitosa"; es sobrediagnóstico, y sí tiene consecuencias prácticas negativas (estudios y tratamientos innecesarios).',
    2:'Un falso negativo es cuando la prueba NO detecta una enfermedad que sí está presente; aquí ocurre lo contrario, se detecta algo que nunca habría causado problema.',
    3:'El sobrediagnóstico es precisamente el término correcto para la detección de una condición que nunca habría causado síntomas; el sobretratamiento es un concepto relacionado pero distinto (tratar innecesariamente lo detectado).'
  },
  trampa:'Confundir el sobrediagnóstico con un falso negativo, o con el sobretratamiento, dos conceptos relacionados pero distintos dentro de la prevención cuaternaria.',
  obj:'Identificar el sobrediagnóstico y explicar su consecuencia práctica de disparar estudios y tratamientos innecesarios.',
  ref:'Jamoulle, Prevención cuaternaria.',
  tags:['sobrediagnóstico','tamizaje excesivo','prevención cuaternaria']
},
{
  id:'U9-MP-Q46', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Prevención cuaternaria', sub:'Sobretratamiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es el sobretratamiento, y en qué se diferencia del sobrediagnóstico?',
  ops:[
    'Es tratar una condición real y confirmada que, aunque existe, no habría necesitado tratamiento en la práctica -por ser leve o resolverse sola-, exponiendo al paciente a riesgos sin beneficio proporcional',
    'El sobretratamiento y el sobrediagnóstico son exactamente el mismo concepto, sin ninguna diferencia real', 'El sobretratamiento ocurre cuando NO se detecta una condición que sí requería tratamiento urgente', 'El sobretratamiento nunca expone al paciente a ningún riesgo real, solo genera un gasto económico adicional'],
  ok:0,
  clave:'Es tratar una condición real y confirmada que no habría necesitado tratamiento en la práctica, exponiendo al paciente a riesgos sin beneficio proporcional.',
  exp:'El *sobretratamiento* es tratar una condición que, aunque real y confirmada, no habría necesitado tratamiento en la práctica -por ser demasiado leve, o por tener una alta probabilidad de resolverse por sí sola sin intervención-, exponiendo al paciente a los riesgos del tratamiento (efectos adversos, complicaciones del procedimiento, costos económicos) sin un beneficio real proporcional que los compense; se diferencia del sobrediagnóstico en que este último es la detección en sí, mientras que el sobretratamiento es la intervención innecesaria que le sigue.',
  no:{
    1:'Son conceptos relacionados pero distintos: el sobrediagnóstico es la detección innecesaria, el sobretratamiento es la intervención innecesaria que puede seguirle.',
    2:'El sobretratamiento se refiere a tratar EN EXCESO algo ya detectado, no a dejar de detectar una condición que sí requería tratamiento urgente.',
    3:'El sobretratamiento sí expone al paciente a riesgos clínicos reales (efectos adversos, complicaciones), no solo a un costo económico.'
  },
  trampa:'Confundir el sobretratamiento con el sobrediagnóstico, o asumir que solo tiene consecuencias económicas y no riesgos clínicos reales para el paciente.',
  obj:'Definir el sobretratamiento y distinguirlo del sobrediagnóstico dentro del concepto de prevención cuaternaria.',
  ref:'Jamoulle, Prevención cuaternaria.',
  tags:['sobretratamiento','sobrediagnóstico','riesgos del tratamiento innecesario']
},
{
  id:'U9-MP-Q47', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Prevención cuaternaria', sub:'Daño iatrogénico evitable',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es el daño iatrogénico evitable, y cómo se relaciona con el objetivo central de la prevención cuaternaria?',
  ops:[
    'Es cualquier daño causado por la propia atención médica que razonablemente se podría haber prevenido; reducirlo, de forma activa y deliberada, es precisamente el objetivo central de la prevención cuaternaria',
    'El daño iatrogénico evitable no tiene ninguna relación con el objetivo de la prevención cuaternaria', 'El daño iatrogénico evitable se refiere exclusivamente a errores de medicación, sin relación con el exceso de estudios o tratamientos', 'La prevención cuaternaria busca aumentar, no reducir, el daño iatrogénico evitable'],
  ok:0,
  clave:'Es cualquier daño causado por la propia atención médica que razonablemente se podría haber prevenido; reducirlo es el objetivo central de la prevención cuaternaria.',
  exp:'El *daño iatrogénico evitable* es cualquier daño causado por la propia atención médica que razonablemente se podría haber prevenido con un criterio clínico más cuidadoso, y es, precisamente, lo que la prevención cuaternaria busca reducir de forma activa y deliberada, no como un efecto secundario accidental sino como un objetivo explícito de la buena práctica médica -incluye tanto el daño del sobrediagnóstico como el del sobretratamiento.',
  no:{
    1:'El daño iatrogénico evitable tiene una relación central y definitoria con el objetivo de la prevención cuaternaria: reducirlo es precisamente su propósito.',
    2:'El daño iatrogénico evitable es un concepto más amplio que incluye tanto errores de medicación como el daño del sobrediagnóstico y el sobretratamiento en general.',
    3:'Es precisamente lo contrario: la prevención cuaternaria busca REDUCIR (no aumentar) el daño iatrogénico evitable de forma activa y deliberada.'
  },
  trampa:'Reducir el daño iatrogénico evitable exclusivamente a errores de medicación, sin reconocer su relación más amplia con el sobrediagnóstico y el sobretratamiento.',
  obj:'Definir el daño iatrogénico evitable y su relación central con el objetivo de la prevención cuaternaria.',
  ref:'Jamoulle, Prevención cuaternaria.',
  tags:['daño iatrogénico evitable','prevención cuaternaria','buena práctica médica']
},
{
  id:'U9-MP-Q48', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Prevención cuaternaria', sub:'Criterio clínico para no intervenir',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico decide, con base en criterio clínico cuidadoso, NO pedir un estudio adicional a un paciente porque concluye que ese estudio no cambiaría su manejo clínico.',
  enunciado:'¿Qué principio de la prevención cuaternaria ilustra esta decisión?',
  ops:[
    'Que aplicar prevención cuaternaria en la práctica significa, muchas veces, tener la disciplina clínica de NO pedir un estudio que no cambiará el manejo del paciente',
    'Esta decisión representa una negligencia médica, sin ninguna relación con la prevención cuaternaria', 'Un médico nunca debería decidir, con criterio clínico, no pedir un estudio adicional a un paciente', 'La prevención cuaternaria exige pedir siempre todos los estudios posibles, sin ninguna excepción'],
  ok:0,
  clave:'Ilustra que aplicar prevención cuaternaria significa, muchas veces, tener la disciplina clínica de NO pedir un estudio que no cambiará el manejo del paciente.',
  exp:'Aplicar prevención cuaternaria en la práctica significa, muchas veces, tener la disciplina clínica de NO pedir un estudio adicional que no cambiará el manejo del paciente, o de NO tratar un hallazgo incidental de bajo riesgo solo porque se detectó -una decisión que, contraintuitivamente, requiere tanto criterio clínico como decidir sí intervenir en un caso que claramente lo amerita; no pedir un estudio innecesario, bien justificado clínicamente, no es negligencia, sino buena práctica.',
  no:{
    1:'Esta decisión, bien justificada con criterio clínico, no representa negligencia; es precisamente un ejemplo de buena práctica según la prevención cuaternaria.',
    2:'Un médico SÍ puede y debe, con criterio clínico adecuado, decidir no pedir un estudio que no aportará beneficio real al manejo del paciente.',
    3:'Es precisamente lo contrario: la prevención cuaternaria promueve evitar estudios innecesarios que no cambien el manejo clínico, no pedir siempre todos los posibles.'
  },
  trampa:'Confundir la decisión clínica bien justificada de no pedir un estudio innecesario con negligencia médica, en vez de reconocerla como aplicación de prevención cuaternaria.',
  obj:'Explicar cómo la decisión de no pedir un estudio innecesario, bien justificada clínicamente, ilustra la prevención cuaternaria.',
  ref:'Jamoulle, Prevención cuaternaria.',
  tags:['criterio clínico','decisión de no intervenir','disciplina clínica']
},
{
  id:'U9-MP-Q49', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Prevención cuaternaria', sub:'Mensaje de cierre del bloque',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué mensaje central cierra el bloque completo de Medicina Preventiva, según el tema de prevención cuaternaria?',
  ops:[
    'Que prevenir, tamizar y tratar son herramientas clínicas valiosas y necesarias, pero no están exentas de riesgo propio, y la buena práctica médica también exige saber cuándo NO intervenir',
    'Que ninguna de las herramientas preventivas vistas en el bloque (niveles de prevención, vacunación, tamizaje) tiene ningún valor clínico real', 'Que siempre es mejor intervenir médicamente más, nunca menos, sin importar el contexto clínico específico', 'Que la prevención cuaternaria contradice y anula por completo todo lo aprendido en los temas anteriores del bloque'],
  ok:0,
  clave:'Prevenir, tamizar y tratar son herramientas valiosas y necesarias, pero no están exentas de riesgo, y la buena práctica exige saber cuándo NO intervenir.',
  exp:'Este tema cierra el bloque completo de Medicina Preventiva con un mensaje que equilibra a todos los anteriores: prevenir, tamizar y tratar son herramientas clínicas valiosas y necesarias, como se vio en cada tema anterior del bloque, pero no están exentas de riesgo propio, y la buena práctica médica también exige saber, con criterio clínico, cuándo NO intervenir -un cierre que no contradice lo anterior, sino que lo complementa con una perspectiva de equilibrio.',
  no:{
    1:'Las herramientas preventivas vistas en el bloque sí tienen un valor clínico real y bien documentado; el mensaje de cierre las complementa, no las anula.',
    2:'El mensaje de cierre precisamente advierte que intervenir MÁS no siempre es mejor; a veces la mejor decisión clínica es no intervenir.',
    3:'La prevención cuaternaria complementa y equilibra los temas anteriores del bloque, no los contradice ni los anula por completo.'
  },
  trampa:'Interpretar la prevención cuaternaria como una negación de los otros niveles de prevención vistos en el bloque, en vez de como un equilibrio complementario.',
  obj:'Explicar el mensaje central que cierra el bloque de Medicina Preventiva a través del tema de prevención cuaternaria.',
  ref:'Jamoulle, Prevención cuaternaria.',
  tags:['mensaje de cierre','equilibrio clínico','buena práctica médica']
},
{
  id:'U9-MP-Q50', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Prevención cuaternaria', sub:'Riesgo inherente de cada estudio o tratamiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la prevención cuaternaria insiste en que cada estudio adicional y cada tratamiento adicional tiene sus propios riesgos inherentes?',
  ops:[
    'Porque ese riesgo debe sopesarse siempre contra el beneficio real esperado, no asumirse automáticamente como algo positivo por el solo hecho de "hacer más" por el paciente',
    'Ningún estudio ni tratamiento médico tiene jamás ningún riesgo real asociado a su realización', 'Cuantos más estudios y tratamientos reciba un paciente, mejor será siempre su pronóstico clínico, sin ninguna excepción', 'El concepto de riesgo inherente solo aplica a procedimientos quirúrgicos invasivos, nunca a estudios de laboratorio simples'],
  ok:0,
  clave:'Ese riesgo debe sopesarse siempre contra el beneficio real esperado, no asumirse automáticamente como positivo por el solo hecho de "hacer más".',
  exp:'La medicina, aplicada con buenas intenciones pero sin suficiente criterio, también puede causar daño: cada estudio adicional, cada tratamiento adicional, tiene sus propios riesgos inherentes (desde una complicación de un procedimiento invasivo hasta la ansiedad generada por un resultado incierto), y esos riesgos deben sopesarse siempre contra el beneficio real esperado, no asumirse automáticamente como algo positivo por el solo hecho de "hacer más" por el paciente -el núcleo del razonamiento detrás de la prevención cuaternaria.',
  no:{
    1:'Prácticamente todo estudio o tratamiento médico conlleva algún riesgo inherente, aunque sea mínimo, que debe considerarse en la decisión clínica.',
    2:'Es precisamente lo contrario: más estudios y tratamientos no siempre significan mejor pronóstico; pueden generar daño neto si no aportan beneficio real proporcional.',
    3:'El concepto de riesgo inherente aplica también a estudios aparentemente simples, no solo a procedimientos quirúrgicos invasivos -incluye ansiedad, falsos positivos y sus consecuencias.'
  },
  trampa:'Asumir que "hacer más" (más estudios, más tratamientos) siempre es clínicamente mejor, sin sopesar el riesgo inherente de cada intervención adicional contra su beneficio real.',
  obj:'Explicar por qué cada estudio o tratamiento adicional debe sopesarse frente a su riesgo inherente, no asumirse automáticamente como beneficioso.',
  ref:'Jamoulle, Prevención cuaternaria.',
  tags:['riesgo inherente','balance beneficio-riesgo','prevención cuaternaria']
}

]);
