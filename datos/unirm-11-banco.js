/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 11, TANDA DE PEDIATRÍA I (1/2)
   Primer banco de esta materia (0 preguntas previas). Prefijo
   U11-PED1-. Cubre los primeros 9 temas: crecimiento y
   desarrollo, recien nacido, lactancia, vacunacion, control de
   nino sano, fiebre, infecciones respiratorias, diarrea aguda y
   desnutricion infantil (3 preguntas por tema, Q01-Q27).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== PEDIATRÍA I ===================== */
{
  id:'U11-PED1-Q01', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Crecimiento y desarrollo normal', sub:'Lo que más importa: la trayectoria, no el percentil aislado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la trayectoria de crecimiento de un niño a lo largo del tiempo importa clínicamente más que un único percentil aislado?',
  ops:[
    'Porque un niño que cruza percentiles hacia abajo es una señal de alarma incluso si el percentil final todavía parece "normal" en términos absolutos',
    'Un único percentil aislado siempre aporta más información clínica que cualquier trayectoria observada a lo largo del tiempo', 'La trayectoria de crecimiento de un niño nunca tiene ninguna relación real con su estado de salud actual', 'Un niño que se mantiene siempre en el mismo percentil bajo debe considerarse automáticamente en riesgo, sin ninguna otra consideración'],
  ok:0,
  clave:'Porque un niño que cruza percentiles hacia abajo es una señal de alarma incluso si el percentil final todavía parece "normal" en términos absolutos.',
  exp:'Lo que más importa clínicamente no es tanto el percentil aislado de una sola medición, sino la trayectoria del niño a lo largo del tiempo: un niño que cruza percentiles hacia abajo es una señal de alarma que amerita investigación, incluso si el percentil final todavía parece "normal".',
  no:{
    1:'Es precisamente lo contrario: la trayectoria en el tiempo aporta más información clínica que un único percentil aislado.',
    2:'La trayectoria de crecimiento sí tiene una relación directa y relevante con el estado de salud del niño.',
    3:'Un niño que se mantiene CONSISTENTE en su propio percentil, aunque sea bajo, está creciendo de forma normal para su patrón.'
  },
  trampa:'Interpretar un percentil bajo aislado como alarmante sin considerar si representa un patrón consistente, o interpretar un percentil "normal" como tranquilizador sin ver la trayectoria.',
  obj:'Explicar por qué la trayectoria de crecimiento en el tiempo es más informativa que un percentil aislado.',
  ref:'Nelson, Tratado de Pediatría, cap. 1.',
  tags:['curva de crecimiento','trayectoria de crecimiento']
},
{
  id:'U11-PED1-Q02', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Crecimiento y desarrollo normal', sub:'Diferencia entre crecimiento y desarrollo',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre crecimiento y desarrollo en pediatría?',
  ops:[
    'El crecimiento es el aumento medible en tamaño corporal; el desarrollo es la adquisición progresiva de habilidades motoras, cognitivas, del lenguaje y sociales', 'Crecimiento y desarrollo son exactamente el mismo concepto, sin ninguna diferencia real que amerite distinguirlos', 'El desarrollo se refiere únicamente al tamaño corporal, y el crecimiento a las habilidades motoras y cognitivas', 'El crecimiento y el desarrollo nunca se evalúan de forma conjunta en ninguna consulta pediátrica'],
  ok:0,
  clave:'El crecimiento es el aumento medible en tamaño corporal; el desarrollo es la adquisición progresiva de habilidades motoras, cognitivas, del lenguaje y sociales.',
  exp:'El crecimiento es el aumento medible en tamaño corporal (peso, talla, perímetro cefálico); el desarrollo es distinto: se refiere a la adquisición progresiva de habilidades motoras, cognitivas, del lenguaje y sociales, organizadas en hitos con una edad esperada aproximada.',
  no:{
    1:'Son conceptos claramente distintos, aunque ambos se evalúan de forma conjunta en cada consulta pediátrica.',
    2:'Está invertido: el CRECIMIENTO es el tamaño corporal, y el DESARROLLO son las habilidades, no al revés.',
    3:'Ambos se evalúan de forma conjunta y sistemática en cada consulta, especialmente en el control de niño sano.'
  },
  trampa:'Confundir crecimiento (tamaño corporal) con desarrollo (habilidades adquiridas), o usarlos como sinónimos intercambiables.',
  obj:'Distinguir el concepto de crecimiento del de desarrollo en pediatría.',
  ref:'Nelson, Tratado de Pediatría, cap. 1.',
  tags:['hitos del desarrollo','diferencia crecimiento-desarrollo']
},
{
  id:'U11-PED1-Q03', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Crecimiento y desarrollo normal', sub:'Vigilancia en cada consulta, sin importar el motivo',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño de 18 meses consulta por un resfriado común. El médico, además de atender el motivo de consulta, registra su peso y talla y los compara con la curva de crecimiento correspondiente.',
  enunciado:'¿Qué principio de este tema ilustra mejor esta conducta del médico?',
  ops:[
    'Que cada consulta pediátrica, sin importar el motivo original, es una oportunidad para verificar que el crecimiento siga su curso esperado', 'Esta conducta es innecesaria, ya que el crecimiento solo debería evaluarse en consultas de control específicamente programadas para ello', 'Registrar peso y talla en una consulta por resfriado común nunca aporta ninguna información clínica útil adicional', 'El crecimiento de un niño solo debe evaluarse cuando existe una sospecha previa específica de un problema de crecimiento'],
  ok:0,
  clave:'Que cada consulta pediátrica, sin importar el motivo original, es una oportunidad para verificar que el crecimiento siga su curso esperado.',
  exp:'A diferencia de la medicina de adultos, en pediatría cada consulta, sin importar el motivo original, es una oportunidad para verificar que el crecimiento y el desarrollo del niño sigan su curso esperado -un hábito que retoma la lógica de detección temprana ya vista en niveles de prevención.',
  no:{
    1:'Es precisamente lo contrario: esta vigilancia debe ocurrir en CADA consulta, no solo en las de control específicamente programadas.',
    2:'Registrar peso y talla en cualquier consulta sí aporta información clínica útil, permitiendo detectar desviaciones tempranamente.',
    3:'El crecimiento debe vigilarse de forma sistemática en cada consulta, no solo ante una sospecha previa específica ya existente.'
  },
  trampa:'Asumir que la vigilancia del crecimiento solo es necesaria en consultas específicamente dedicadas a ese fin, no en cualquier consulta pediátrica.',
  obj:'Aplicar el principio de vigilancia del crecimiento en cada consulta pediátrica, sin importar el motivo de consulta.',
  ref:'Nelson, Tratado de Pediatría, cap. 1.',
  tags:['percentil de peso y talla','vigilancia en cada consulta']
},
{
  id:'U11-PED1-Q04', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Evaluación del recién nacido normal', sub:'Qué evalúa el test de Apgar',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué cinco parámetros evalúa el test de Apgar en el recién nacido?',
  ops:[
    'Frecuencia cardíaca, esfuerzo respiratorio, tono muscular, irritabilidad refleja y color', 'Peso, talla, perímetro cefálico, reflejos primitivos y fontanelas del recién nacido', 'Únicamente la frecuencia cardíaca, sin ningún otro parámetro adicional evaluado en este test', 'Solo el color de la piel del recién nacido, sin ninguna otra consideración clínica adicional'],
  ok:0,
  clave:'Frecuencia cardíaca, esfuerzo respiratorio, tono muscular, irritabilidad refleja y color.',
  exp:'El test de Apgar evalúa cinco parámetros (frecuencia cardíaca, esfuerzo respiratorio, tono muscular, irritabilidad refleja, color) al minuto y a los cinco minutos de vida, cada uno puntuado de 0 a 2, para un máximo de 10 puntos.',
  no:{
    1:'Estos parámetros corresponden al examen físico general y a la curva de crecimiento, no al test de Apgar específicamente.',
    2:'El Apgar evalúa cinco parámetros distintos, no exclusivamente la frecuencia cardíaca.',
    3:'El color es solo uno de los cinco parámetros evaluados, no el único considerado en el test de Apgar.'
  },
  trampa:'Confundir los parámetros del test de Apgar con otros elementos del examen físico del recién nacido, o reducirlos a un solo parámetro aislado.',
  obj:'Identificar los cinco parámetros evaluados por el test de Apgar.',
  ref:'Nelson, Tratado de Pediatría, cap. 8.',
  tags:['test de Apgar','parámetros evaluados']
},
{
  id:'U11-PED1-Q05', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Evaluación del recién nacido normal', sub:'El Apgar como evaluación del momento, no predictor definitivo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un Apgar bajo al minuto que mejora significativamente a los cinco minutos tiene un pronóstico más favorable que uno persistentemente bajo?',
  ops:[
    'Porque el Apgar es una herramienta de evaluación estructurada en el momento, y la mejora tras una reanimación efectiva indica una buena respuesta a la intervención', 'El Apgar al minuto y a los cinco minutos siempre tienen exactamente el mismo valor pronóstico, sin ninguna diferencia real entre ambos', 'Un Apgar bajo persistente en los cinco minutos siempre tiene el mismo pronóstico que uno que mejora significativamente', 'El test de Apgar es un predictor definitivo y absoluto del pronóstico neurológico a largo plazo del recién nacido'],
  ok:0,
  clave:'Porque el Apgar es una herramienta de evaluación estructurada en el momento, y la mejora tras una reanimación efectiva indica una buena respuesta a la intervención.',
  exp:'El Apgar es una herramienta de evaluación estructurada en el momento, no un predictor definitivo del pronóstico neurológico a largo plazo -un Apgar bajo al minuto que mejora a los cinco minutos, tras reanimación efectiva, tiene un pronóstico más favorable que uno que se mantiene bajo de forma persistente.',
  no:{
    1:'Es precisamente lo contrario: el valor al minuto y a los cinco minutos tienen un significado pronóstico distinto según su evolución.',
    2:'Un Apgar persistentemente bajo tiene un pronóstico distinto (menos favorable) que uno que mejora significativamente a los cinco minutos.',
    3:'El Apgar es una evaluación del momento, no un predictor definitivo y absoluto del pronóstico neurológico a largo plazo.'
  },
  trampa:'Interpretar el Apgar como un predictor absoluto y definitivo del pronóstico, sin considerar la importancia de su evolución entre el minuto y los cinco minutos.',
  obj:'Explicar por qué la evolución del Apgar entre el minuto y los cinco minutos tiene valor pronóstico distinto de un valor aislado.',
  ref:'Nelson, Tratado de Pediatría, cap. 8.',
  tags:['test de Apgar','evolución del Apgar']
},
{
  id:'U11-PED1-Q06', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Evaluación del recién nacido normal', sub:'Significado de la persistencia o asimetría de reflejos primitivos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué significa clínicamente que un reflejo primitivo persista más allá de la edad esperada de desaparición, o sea marcadamente asimétrico?',
  ops:[
    'Es un hallazgo que amerita evaluación neurológica adicional, no una simple curiosidad exploratoria', 'La persistencia o asimetría de un reflejo primitivo nunca tiene ninguna relevancia clínica real en el recién nacido', 'Todos los reflejos primitivos deben persistir de forma indefinida durante toda la infancia, sin ninguna edad de desaparición esperada', 'La asimetría de un reflejo primitivo siempre es una variante normal, sin ninguna relación con la integridad neurológica'],
  ok:0,
  clave:'Es un hallazgo que amerita evaluación neurológica adicional, no una simple curiosidad exploratoria.',
  exp:'Los reflejos primitivos tienen una edad esperada de desaparición conforme el sistema nervioso madura; su persistencia más allá de esa edad, su ausencia desde el inicio, o una marcada asimetría, son hallazgos que ameritan evaluación neurológica adicional.',
  no:{
    1:'Este hallazgo sí tiene relevancia clínica real, siendo un indicador indirecto de la integridad del sistema nervioso central.',
    2:'Los reflejos primitivos tienen una edad esperada de desaparición conforme el sistema nervioso madura, no persisten indefinidamente.',
    3:'La asimetría marcada de un reflejo primitivo sí tiene relación con la integridad neurológica, no es una simple variante normal.'
  },
  trampa:'Asumir que cualquier hallazgo relacionado con reflejos primitivos es una variante normal sin importancia clínica, sin considerar la persistencia o asimetría como señales de alarma.',
  obj:'Explicar el significado clínico de la persistencia o asimetría de un reflejo primitivo en el recién nacido.',
  ref:'Nelson, Tratado de Pediatría, cap. 8.',
  tags:['reflejos primitivos','persistencia y asimetría']
},
{
  id:'U11-PED1-Q07', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Lactancia materna y alimentación complementaria', sub:'Duración recomendada de la lactancia materna exclusiva',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Durante cuántos meses se recomienda la lactancia materna exclusiva?',
  ops:[
    'Los primeros seis meses de vida', 'Únicamente el primer mes de vida, sin ninguna recomendación adicional más allá de ese periodo', 'Durante los primeros doce meses de vida completos, sin introducir ningún otro alimento antes de esa edad', 'La lactancia materna exclusiva no tiene ninguna duración recomendada específica establecida'],
  ok:0,
  clave:'Los primeros seis meses de vida.',
  exp:'La lactancia materna exclusiva -alimentar al lactante únicamente con leche materna, sin agua, fórmula ni otros alimentos- se recomienda durante los primeros seis meses de vida, por múltiples beneficios bien documentados.',
  no:{
    1:'La recomendación se extiende hasta los seis meses, no se limita únicamente al primer mes de vida.',
    2:'La recomendación es hasta los seis meses; a partir de esa edad se introduce la alimentación complementaria, manteniendo la lactancia.',
    3:'Sí existe una duración recomendada específica y bien establecida para la lactancia materna exclusiva.'
  },
  trampa:'Confundir la duración recomendada de la lactancia materna exclusiva con la duración total de la lactancia materna combinada con otros alimentos.',
  obj:'Identificar la duración recomendada de la lactancia materna exclusiva.',
  ref:'Nelson, Tratado de Pediatría, cap. 5.',
  tags:['lactancia materna exclusiva','duración recomendada']
},
{
  id:'U11-PED1-Q08', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Lactancia materna y alimentación complementaria', sub:'Por qué la ablactación no se recomienda antes de los seis meses',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la ablactación (introducción de la alimentación complementaria) no se recomienda antes de los seis meses de edad?',
  ops:[
    'Porque el sistema digestivo del lactante y su desarrollo motor generalmente no están suficientemente maduros para procesar otros alimentos de forma segura antes de esa edad', 'No existe ninguna razón clínica real para retrasar la ablactación hasta los seis meses de edad del lactante', 'El sistema digestivo del lactante siempre está completamente maduro desde el nacimiento para procesar cualquier alimento', 'La ablactación temprana, antes de los seis meses, siempre reduce el riesgo de alergias alimentarias en el lactante'],
  ok:0,
  clave:'Porque el sistema digestivo del lactante y su desarrollo motor generalmente no están suficientemente maduros para procesar otros alimentos de forma segura antes de esa edad.',
  exp:'Antes de los seis meses, el sistema digestivo del lactante y su desarrollo motor (control de la cabeza, capacidad de tragar alimentos semisólidos) generalmente no están suficientemente maduros para procesar otros alimentos de forma segura.',
  no:{
    1:'Sí existe una razón clínica real, relacionada con la madurez digestiva y motora del lactante antes de esa edad.',
    2:'El sistema digestivo del lactante madura progresivamente, no está completamente maduro desde el nacimiento para cualquier alimento.',
    3:'Es precisamente lo contrario: introducir alimentos demasiado temprano se asocia con MAYOR riesgo de alergias alimentarias.'
  },
  trampa:'Asumir que introducir alimentos complementarios antes de los seis meses no conlleva ningún riesgo real para el lactante.',
  obj:'Explicar por qué la ablactación no se recomienda antes de los seis meses de edad.',
  ref:'Nelson, Tratado de Pediatría, cap. 5.',
  tags:['ablactación','madurez digestiva y motora']
},
{
  id:'U11-PED1-Q09', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Lactancia materna y alimentación complementaria', sub:'Error frecuente en la alimentación complementaria temprana',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una madre introduce jugos azucarados y alimentos ultraprocesados como parte de la alimentación complementaria de su hijo de siete meses, en vez de alimentos con buen valor nutricional.',
  enunciado:'¿Qué riesgo conlleva esta práctica, según lo visto en este tema?',
  ops:[
    'Establecer preferencias alimentarias poco saludables desde una edad temprana, con impacto que se extiende más allá de la infancia', 'Esta práctica no conlleva ningún riesgo real, ya que cualquier alimento introducido después de los seis meses es igualmente apropiado', 'Los jugos azucarados y alimentos ultraprocesados siempre tienen el mismo valor nutricional que los alimentos recomendados para esta etapa', 'La calidad nutricional de los primeros alimentos complementarios nunca tiene ninguna relación real con hábitos alimentarios futuros'],
  ok:0,
  clave:'Establecer preferencias alimentarias poco saludables desde una edad temprana, con impacto que se extiende más allá de la infancia.',
  exp:'Un error frecuente es introducir alimentos con bajo valor nutricional como parte de la alimentación complementaria temprana, estableciendo preferencias alimentarias poco saludables desde una edad temprana -un impacto que se extiende más allá de la infancia.',
  no:{
    1:'Esta práctica sí conlleva un riesgo real, no todos los alimentos introducidos después de los seis meses son igualmente apropiados.',
    2:'Los jugos azucarados y alimentos ultraprocesados tienen un valor nutricional inferior al de los alimentos recomendados para esta etapa.',
    3:'La calidad nutricional de los primeros alimentos sí tiene una relación real con los hábitos alimentarios futuros del niño.'
  },
  trampa:'Asumir que cualquier alimento introducido después de los seis meses es igualmente apropiado, sin considerar su calidad nutricional.',
  obj:'Aplicar el riesgo de introducir alimentos de bajo valor nutricional en la alimentación complementaria temprana.',
  ref:'Nelson, Tratado de Pediatría, cap. 5.',
  tags:['alimentación complementaria','calidad nutricional temprana']
},
{
  id:'U11-PED1-Q10', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Esquema de vacunación infantil', sub:'Por qué seguir el esquema en las edades recomendadas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es clínicamente relevante seguir el esquema de vacunación en las edades recomendadas, y no solo eventualmente completarlo?',
  ops:[
    'Porque muchas de estas enfermedades representan mayor riesgo precisamente en los primeros meses y años de vida, dejando al niño vulnerable durante la ventana de mayor riesgo si se retrasa', 'Seguir el esquema en las edades recomendadas nunca tiene ninguna relevancia clínica real más allá de eventualmente completarlo', 'El riesgo de las enfermedades prevenibles por vacunación es exactamente el mismo en cualquier edad de la infancia', 'Retrasar la vacunación, siempre que eventualmente se complete el esquema, no genera ningún riesgo adicional real'],
  ok:0,
  clave:'Porque muchas de estas enfermedades representan mayor riesgo precisamente en los primeros meses y años de vida, dejando al niño vulnerable durante la ventana de mayor riesgo si se retrasa.',
  exp:'Seguir el esquema en las edades recomendadas, no solo eventualmente completarlo, es clínicamente relevante: muchas de estas enfermedades representan mayor riesgo precisamente en los primeros meses y años de vida, por lo que un retraso significativo deja al niño vulnerable durante la ventana de mayor riesgo.',
  no:{
    1:'Es precisamente lo contrario: seguir el esquema a tiempo tiene una relevancia clínica real más allá de solo completarlo eventualmente.',
    2:'El riesgo de estas enfermedades varía según la edad, siendo mayor precisamente en los primeros meses y años de vida.',
    3:'Retrasar la vacunación sí genera un riesgo adicional real, dejando al niño vulnerable durante la ventana de mayor riesgo.'
  },
  trampa:'Asumir que completar eventualmente el esquema de vacunación es equivalente a seguirlo en las edades recomendadas, sin considerar la ventana de mayor riesgo.',
  obj:'Explicar por qué seguir el esquema de vacunación en las edades recomendadas es clínicamente relevante.',
  ref:'Nelson, Tratado de Pediatría, cap. 12.',
  tags:['esquema nacional de vacunación','edades recomendadas']
},
{
  id:'U11-PED1-Q11', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Esquema de vacunación infantil', sub:'Qué enfermedades cubre la vacuna pentavalente',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué cinco enfermedades cubre la vacuna pentavalente en una sola inyección?',
  ops:[
    'Difteria, tétanos, tos ferina, hepatitis B y Haemophilus influenzae tipo b', 'Sarampión, rubéola, parotiditis, varicela y hepatitis A, todas en una sola inyección combinada', 'Únicamente la poliomielitis, sin ninguna otra enfermedad cubierta en esta vacuna combinada', 'Tuberculosis, rotavirus, neumococo, influenza estacional y fiebre amarilla combinadas'],
  ok:0,
  clave:'Difteria, tétanos, tos ferina, hepatitis B y Haemophilus influenzae tipo b.',
  exp:'La vacuna pentavalente combina en una sola inyección la protección contra cinco enfermedades: difteria, tétanos, tos ferina, hepatitis B y Haemophilus influenzae tipo b.',
  no:{
    1:'Estas enfermedades corresponden a otras vacunas del esquema (triple viral, varicela, hepatitis A), no a la vacuna pentavalente.',
    2:'La pentavalente cubre cinco enfermedades específicas distintas, no exclusivamente la poliomielitis.',
    3:'Estas enfermedades corresponden a otras vacunas del esquema, no a la combinación específica de la vacuna pentavalente.'
  },
  trampa:'Confundir las cinco enfermedades específicas cubiertas por la pentavalente con otras vacunas combinadas del esquema nacional.',
  obj:'Identificar las cinco enfermedades cubiertas por la vacuna pentavalente.',
  ref:'Nelson, Tratado de Pediatría, cap. 12.',
  tags:['vacuna pentavalente','enfermedades cubiertas']
},
{
  id:'U11-PED1-Q12', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Esquema de vacunación infantil', sub:'La cadena de frío y la invalidación de la vacuna',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un centro de salud sufre un corte de electricidad prolongado que afecta la refrigeración de sus vacunas, sin que se confirme si la temperatura se mantuvo dentro del rango adecuado durante ese tiempo.',
  enunciado:'¿Cuál es la conducta prudente ante esta situación, según lo visto en este tema?',
  ops:[
    'No confiar en la dosis administrada tras el corte y consultar el protocolo institucional correspondiente, en vez de asumir que la vacuna sigue siendo efectiva', 'Asumir que todas las vacunas siguen siendo completamente efectivas, ya que la cadena de frío nunca afecta la eficacia real de una vacuna', 'Continuar aplicando las vacunas de ese lote sin ninguna consulta adicional, confiando en que el corte fue de corta duración', 'La ruptura de la cadena de frío nunca tiene ninguna relación real con la eficacia inmunogénica de una vacuna administrada'],
  ok:0,
  clave:'No confiar en la dosis administrada tras el corte y consultar el protocolo institucional correspondiente, en vez de asumir que la vacuna sigue siendo efectiva.',
  exp:'Ante la duda de si una vacuna fue almacenada correctamente, la conducta prudente es no confiar en la dosis administrada y consultar el protocolo institucional correspondiente, en vez de asumir que la vacuna sigue siendo efectiva.',
  no:{
    1:'Es precisamente lo contrario: la ruptura de la cadena de frío SÍ puede inactivar el componente inmunogénico de la vacuna.',
    2:'Continuar aplicando sin consultar el protocolo contradice la conducta prudente ante la duda sobre la integridad de la cadena de frío.',
    3:'La ruptura de la cadena de frío sí tiene una relación directa con la eficacia inmunogénica de la vacuna administrada.'
  },
  trampa:'Asumir que una vacuna sigue siendo efectiva sin verificar si la cadena de frío se mantuvo intacta durante un evento como un corte de electricidad prolongado.',
  obj:'Aplicar la conducta prudente ante una posible ruptura de la cadena de frío de las vacunas.',
  ref:'Nelson, Tratado de Pediatría, cap. 12.',
  tags:['cadena de frío','conducta ante ruptura de cadena']
},
{
  id:'U11-PED1-Q13', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Control de niño sano', sub:'Qué incluye la consulta de niño sano',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué elementos integra la consulta de control de niño sano?',
  ops:[
    'Evaluación sistemática del crecimiento, evaluación del desarrollo, revisión y aplicación del esquema de vacunación, evaluación de la alimentación, y examen físico completo', 'Únicamente la aplicación de las vacunas correspondientes según el esquema, sin ninguna otra evaluación adicional', 'Solo el registro del peso del niño, sin ninguna otra evaluación relacionada con desarrollo o alimentación', 'Exclusivamente el examen físico general, sin ninguna evaluación específica de crecimiento o desarrollo'],
  ok:0,
  clave:'Evaluación sistemática del crecimiento, evaluación del desarrollo, revisión y aplicación del esquema de vacunación, evaluación de la alimentación, y examen físico completo.',
  exp:'La consulta de niño sano incluye la evaluación sistemática del crecimiento, la evaluación del desarrollo según la edad, la revisión y aplicación del esquema de vacunación, la evaluación de la alimentación, y un examen físico completo.',
  no:{
    1:'La vacunación es solo uno de varios componentes; también incluye evaluación de crecimiento, desarrollo y alimentación.',
    2:'El registro del peso es solo un componente parcial; la consulta integra mucho más que solo esa medición aislada.',
    3:'El examen físico es solo un componente; la consulta también integra evaluación específica de crecimiento y desarrollo.'
  },
  trampa:'Reducir la consulta de niño sano a un solo componente aislado, sin reconocer el conjunto integrado de evaluaciones que la conforman.',
  obj:'Identificar los elementos que integra la consulta de control de niño sano.',
  ref:'Nelson, Tratado de Pediatría, cap. 3.',
  tags:['consulta de niño sano','elementos integrados']
},
{
  id:'U11-PED1-Q14', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Control de niño sano', sub:'Por qué el tamizaje neonatal es indispensable',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el tamizaje neonatal es indispensable para detectar condiciones como el hipotiroidismo congénito o la fenilcetonuria?',
  ops:[
    'Porque estas enfermedades, en su fase inicial asintomática, no serían detectadas por un examen físico convencional, y sin tamizaje sistemático se perdería la oportunidad de intervención temprana', 'El examen físico convencional del recién nacido siempre detecta estas condiciones sin necesidad de ningún tamizaje adicional específico', 'Estas enfermedades nunca causan ningún daño real si no se detectan tempranamente mediante el tamizaje neonatal', 'El tamizaje neonatal es una práctica opcional, sin ninguna relevancia clínica real comprobada para el pronóstico del niño'],
  ok:0,
  clave:'Porque estas enfermedades, en su fase inicial asintomática, no serían detectadas por un examen físico convencional, y sin tamizaje sistemático se perdería la oportunidad de intervención temprana.',
  exp:'Estas enfermedades, en su fase inicial asintomática, no serían detectadas por un examen físico convencional; sin un tamizaje sistemático, la oportunidad de intervención temprana se perdería, con consecuencias graves e irreversibles en el desarrollo si el diagnóstico se retrasa.',
  no:{
    1:'Es precisamente lo contrario: el examen físico convencional NO detecta estas condiciones en su fase inicial asintomática.',
    2:'Estas enfermedades sí causan daño irreversible si no se detectan y tratan tempranamente mediante el tamizaje.',
    3:'El tamizaje neonatal tiene una relevancia clínica real y comprobada, permitiendo un tratamiento oportuno que evita daño irreversible.'
  },
  trampa:'Asumir que el examen físico convencional del recién nacido es suficiente para detectar condiciones metabólicas o endocrinas asintomáticas.',
  obj:'Explicar por qué el tamizaje neonatal es indispensable para detectar enfermedades asintomáticas tratables.',
  ref:'Nelson, Tratado de Pediatría, cap. 3.',
  tags:['tamizaje neonatal','detección temprana']
},
{
  id:'U11-PED1-Q15', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Control de niño sano', sub:'La anticipación de riesgos como función activa',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico, durante la consulta de un niño de siete meses, advierte a los padres sobre la prevención de caídas y de ingestión de objetos pequeños, justo antes de la edad en que el niño comenzará a gatear y a explorar con la boca.',
  enunciado:'¿Qué función de la consulta de niño sano ilustra esta conducta del médico?',
  ops:[
    'La anticipación de riesgos, orientando a los padres sobre los riesgos esperables en la siguiente etapa del desarrollo antes de que ocurran', 'Esta conducta no corresponde a ninguna función reconocida de la consulta de niño sano vista en este tema', 'La anticipación de riesgos solo debería aplicarse después de que un problema específico ya haya ocurrido en el niño', 'Advertir sobre riesgos futuros nunca es una función apropiada dentro de la consulta de control de niño sano'],
  ok:0,
  clave:'La anticipación de riesgos, orientando a los padres sobre los riesgos esperables en la siguiente etapa del desarrollo antes de que ocurran.',
  exp:'La anticipación de riesgos es la función de la consulta de niño sano que consiste en orientar a los padres sobre los riesgos esperables en la siguiente etapa del desarrollo del niño, antes de que ocurran -convirtiendo la consulta en una herramienta preventiva activa, no solo reactiva.',
  no:{
    1:'Esta conducta sí corresponde a una función reconocida y central de la consulta de niño sano: la anticipación de riesgos.',
    2:'Es precisamente lo contrario: la anticipación de riesgos ocurre ANTES de que el problema suceda, no después.',
    3:'Advertir sobre riesgos futuros es precisamente una función apropiada y valorada de la consulta de niño sano.'
  },
  trampa:'Confundir la anticipación de riesgos (preventiva, antes del evento) con una respuesta reactiva a un problema ya ocurrido.',
  obj:'Aplicar el reconocimiento de la anticipación de riesgos como función preventiva activa de la consulta de niño sano.',
  ref:'Nelson, Tratado de Pediatría, cap. 3.',
  tags:['anticipación de riesgos','función preventiva activa']
},
{
  id:'U11-PED1-Q16', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Fiebre en el niño', sub:'Fiebre sin foco en el lactante menor de tres meses',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un lactante menor de tres meses con fiebre sin foco se considera de alto riesgo, a diferencia de un niño mayor con el mismo cuadro?',
  ops:[
    'Porque el sistema inmune de un lactante muy pequeño es menos capaz de contener una infección bacteriana localizada, con mayor riesgo de progresión rápida a sepsis', 'Un lactante menor de tres meses con fiebre sin foco tiene exactamente el mismo riesgo que un niño mayor con el mismo cuadro clínico', 'El sistema inmune de un lactante muy pequeño siempre es más capaz de contener infecciones que el de un niño mayor', 'La edad del niño nunca tiene ninguna relación real con el riesgo asociado a la fiebre sin foco identificable'],
  ok:0,
  clave:'Porque el sistema inmune de un lactante muy pequeño es menos capaz de contener una infección bacteriana localizada, con mayor riesgo de progresión rápida a sepsis.',
  exp:'Un lactante menor de tres meses con fiebre sin foco se considera de alto riesgo de infección bacteriana grave, porque su sistema inmune es menos capaz de contener una infección bacteriana localizada, con mayor riesgo de progresión rápida a sepsis, a diferencia de un niño mayor con un sistema inmune más maduro.',
  no:{
    1:'Es precisamente lo contrario: el lactante menor de tres meses tiene MAYOR riesgo que un niño mayor con el mismo cuadro.',
    2:'Es precisamente lo contrario: el sistema inmune de un lactante muy pequeño es MENOS capaz de contener infecciones que el de un niño mayor.',
    3:'La edad del niño sí tiene una relación directa con el riesgo asociado a la fiebre sin foco, por la madurez del sistema inmune.'
  },
  trampa:'Asumir que el riesgo asociado a la fiebre sin foco es igual en cualquier edad, sin considerar la madurez inmunológica del lactante.',
  obj:'Explicar por qué un lactante menor de tres meses con fiebre sin foco se considera de alto riesgo.',
  ref:'Nelson, Tratado de Pediatría, cap. 20.',
  tags:['fiebre sin foco','riesgo según edad']
},
{
  id:'U11-PED1-Q17', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Fiebre en el niño', sub:'Apariencia general vs. valor exacto de la temperatura',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un padre está muy preocupado porque el termómetro marca 39.5°C en su hijo, aunque el niño está alerta, interactivo y bebe líquidos con normalidad. Otro niño tiene fiebre de 38°C pero está decaído y con mala perfusión.',
  enunciado:'¿Cuál de los dos niños representa, según lo visto en este tema, la situación clínicamente más preocupante?',
  ops:[
    'El segundo niño, decaído y con mala perfusión, a pesar de tener una temperatura menor que el primero', 'El primer niño, con la temperatura más alta registrada, sin importar su apariencia general alerta e interactiva', 'Ambos niños representan exactamente el mismo nivel de preocupación clínica, basándose únicamente en el valor de la temperatura', 'Ninguno de los dos niños amerita ninguna preocupación clínica real, independientemente de su apariencia general'],
  ok:0,
  clave:'El segundo niño, decaído y con mala perfusión, a pesar de tener una temperatura menor que el primero.',
  exp:'La evidencia clínica más útil está en la apariencia general del niño: un niño con fiebre alta pero alerta e interactivo es clínicamente distinto de uno con fiebre moderada pero decaído y con mala perfusión -el segundo es la situación más preocupante, a pesar de la temperatura menor.',
  no:{
    1:'Es precisamente lo contrario: la temperatura más alta con buena apariencia general es MENOS preocupante que la apariencia decaída.',
    2:'Ambos niños NO representan el mismo nivel de preocupación; la apariencia general marca una diferencia clínica real importante.',
    3:'El segundo niño, con mala perfusión y decaimiento, sí amerita una preocupación clínica real, independientemente de la temperatura exacta.'
  },
  trampa:'Enfocarse exclusivamente en el valor numérico de la temperatura, sin considerar la apariencia general del niño como el dato clínico más útil.',
  obj:'Aplicar el criterio de apariencia general por encima del valor exacto de temperatura para evaluar la urgencia de un niño febril.',
  ref:'Nelson, Tratado de Pediatría, cap. 20.',
  tags:['manejo de la fiebre pediátrica','apariencia general']
},
{
  id:'U11-PED1-Q18', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Fiebre en el niño', sub:'Signos de alarma que cambian la conducta',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué signos de alarma ante un niño con fiebre cambian la conducta de manejo ambulatorio a evaluación urgente?',
  ops:[
    'Apariencia tóxica, dificultad respiratoria, mala perfusión periférica, petequias o púrpura, rigidez de nuca, letargia marcada, o rechazo completo de líquidos', 'Únicamente el valor exacto de la temperatura registrada, sin ninguna otra consideración clínica adicional relevante', 'Solo la duración de la fiebre en días, sin ninguna relación con la apariencia general o el estado del niño', 'Ningún signo específico cambia la conducta de manejo; todo niño con fiebre debe recibir siempre el mismo manejo'],
  ok:0,
  clave:'Apariencia tóxica, dificultad respiratoria, mala perfusión periférica, petequias o púrpura, rigidez de nuca, letargia marcada, o rechazo completo de líquidos.',
  exp:'Los signos de alarma ante un niño con fiebre incluyen apariencia tóxica, dificultad respiratoria, mala perfusión periférica, petequias o púrpura, rigidez de nuca, llanto inconsolable, letargia marcada, o rechazo completo de líquidos -su presencia cambia la conducta a evaluación urgente.',
  no:{
    1:'El valor exacto de la temperatura no es, por sí solo, el criterio central; la apariencia general y los signos de alarma son más relevantes.',
    2:'La duración de la fiebre en días no es, por sí sola, el criterio determinante; los signos de alarma específicos sí lo son.',
    3:'Sí existen signos específicos que cambian la conducta de manejo, orientando hacia una evaluación urgente cuando están presentes.'
  },
  trampa:'Basar la decisión de urgencia únicamente en el valor de la temperatura o la duración de la fiebre, sin considerar los signos de alarma específicos.',
  obj:'Identificar los signos de alarma que cambian la conducta de manejo ante un niño con fiebre.',
  ref:'Nelson, Tratado de Pediatría, cap. 20.',
  tags:['signos de alarma en fiebre','cambio de conducta']
},
{
  id:'U11-PED1-Q19', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Infecciones respiratorias agudas en pediatría', sub:'Bronquiolitis: edad y agente causal característicos',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿En qué grupo de edad es característica la bronquiolitis, y cuál es su agente causal más común?',
  ops:[
    'Lactantes menores de dos años, con mayor frecuencia en menores de seis meses, causada más comúnmente por el virus sincitial respiratorio', 'Niños en edad escolar, entre seis y doce años, causada principalmente por bacterias del tipo neumococo', 'Adolescentes, causada principalmente por el virus del sarampión en su forma respiratoria', 'La bronquiolitis no tiene ningún grupo de edad ni agente causal característico identificable'],
  ok:0,
  clave:'Lactantes menores de dos años, con mayor frecuencia en menores de seis meses, causada más comúnmente por el virus sincitial respiratorio.',
  exp:'La bronquiolitis es una infección viral de la vía aérea inferior, característica de lactantes menores de dos años (con mayor frecuencia en menores de seis meses), causada más comúnmente por el virus sincitial respiratorio.',
  no:{
    1:'La bronquiolitis es característica de lactantes, no de niños en edad escolar, y es de causa viral, no bacteriana.',
    2:'La bronquiolitis es característica de lactantes pequeños, no de adolescentes, y no está causada por el virus del sarampión.',
    3:'La bronquiolitis sí tiene un grupo de edad y un agente causal característico bien identificados en la literatura pediátrica.'
  },
  trampa:'Confundir el grupo de edad y el agente causal característico de la bronquiolitis con los de otras infecciones respiratorias pediátricas.',
  obj:'Identificar el grupo de edad característico y el agente causal más común de la bronquiolitis.',
  ref:'Nelson, Tratado de Pediatría, cap. 24.',
  tags:['bronquiolitis','edad y agente causal']
},
{
  id:'U11-PED1-Q20', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Infecciones respiratorias agudas en pediatría', sub:'La taquipnea como signo sensible de neumonía',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la taquipnea se considera uno de los signos clínicos más sensibles para sospechar neumonía en un niño con fiebre y tos?',
  ops:[
    'Porque permite orientar la sospecha diagnóstica incluso antes de contar con una radiografía de tórax', 'La taquipnea nunca ha demostrado ninguna utilidad clínica real para sospechar neumonía en el niño con fiebre y tos', 'La taquipnea solo es relevante después de confirmar el diagnóstico de neumonía mediante radiografía de tórax', 'La frecuencia respiratoria de un niño nunca varía de forma significativa en presencia de una neumonía real'],
  ok:0,
  clave:'Porque permite orientar la sospecha diagnóstica incluso antes de contar con una radiografía de tórax.',
  exp:'La taquipnea (frecuencia respiratoria elevada para la edad) es uno de los signos clínicos más sensibles para sospechar neumonía en un niño con fiebre y tos, incluso antes de contar con una radiografía de tórax.',
  no:{
    1:'La taquipnea sí ha demostrado utilidad clínica real y bien documentada para sospechar neumonía en este contexto.',
    2:'Es precisamente lo contrario: la taquipnea es útil ANTES de la radiografía, para orientar la sospecha diagnóstica inicial.',
    3:'La frecuencia respiratoria sí suele aumentar de forma significativa en presencia de una neumonía real en el niño.'
  },
  trampa:'Subestimar el valor clínico de la taquipnea como signo temprano de neumonía, esperando confirmación radiológica antes de sospechar el diagnóstico.',
  obj:'Explicar por qué la taquipnea es un signo clínico sensible para sospechar neumonía en el niño.',
  ref:'Nelson, Tratado de Pediatría, cap. 24.',
  tags:['neumonía en el niño','taquipnea como signo sensible']
},
{
  id:'U11-PED1-Q21', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Infecciones respiratorias agudas en pediatría', sub:'Distinción entre estridor y sibilancias',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño de tres años presenta tos "perruna", disfonía y un sonido áspero y agudo al inhalar, más notorio con el llanto.',
  enunciado:'¿Qué diagnóstico es más probable según el hallazgo respiratorio descrito, y por qué se distingue de la bronquiolitis o el asma?',
  ops:[
    'Crup laríngeo, por el estridor inspiratorio característico, distinto de las sibilancias espiratorias propias de la bronquiolitis o el asma', 'Bronquiolitis, ya que el sonido descrito corresponde exactamente a las sibilancias espiratorias características de esta condición', 'Asma, ya que el sonido inspiratorio agudo descrito es idéntico al de las sibilancias típicas de una crisis asmática', 'No es posible distinguir entre estas tres condiciones respiratorias basándose únicamente en el tipo de sonido respiratorio'],
  ok:0,
  clave:'Crup laríngeo, por el estridor inspiratorio característico, distinto de las sibilancias espiratorias propias de la bronquiolitis o el asma.',
  exp:'El crup laríngeo se presenta con tos "perruna", estridor inspiratorio (un sonido áspero y agudo al inhalar) y disfonía -un hallazgo distinto de las sibilancias espiratorias características de la bronquiolitis o el asma, lo que permite orientar el diagnóstico diferencial.',
  no:{
    1:'El sonido descrito es un estridor INSPIRATORIO, distinto de las sibilancias ESPIRATORIAS características de la bronquiolitis.',
    2:'El sonido descrito es un estridor inspiratorio, distinto de las sibilancias espiratorias típicas de una crisis asmática.',
    3:'Sí es posible distinguir entre estas condiciones basándose en el tipo de sonido respiratorio: estridor inspiratorio vs. sibilancias espiratorias.'
  },
  trampa:'Confundir el estridor inspiratorio del crup laríngeo con las sibilancias espiratorias características de la bronquiolitis o el asma.',
  obj:'Aplicar la distinción entre estridor inspiratorio y sibilancias espiratorias para orientar el diagnóstico diferencial respiratorio.',
  ref:'Nelson, Tratado de Pediatría, cap. 24.',
  tags:['crup laríngeo','estridor inspiratorio']
},
{
  id:'U11-PED1-Q22', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Enfermedad diarreica aguda en pediatría', sub:'Causa más frecuente de diarrea aguda infantil',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la causa más frecuente de diarrea aguda infantil?',
  ops:[
    'Viral, principalmente rotavirus en lactantes no vacunados', 'Bacteriana, siendo esta la causa predominante en la gran mayoría de los casos de diarrea aguda infantil', 'Parasitaria, siendo esta la causa más frecuente en cualquier grupo de edad pediátrica', 'La diarrea aguda infantil nunca tiene una causa infecciosa identificable en la práctica clínica habitual'],
  ok:0,
  clave:'Viral, principalmente rotavirus en lactantes no vacunados.',
  exp:'La causa más frecuente de diarrea aguda infantil es viral (principalmente rotavirus en lactantes no vacunados), seguida de causas bacterianas y parasitarias.',
  no:{
    1:'La causa bacteriana es menos frecuente que la viral como causa predominante de diarrea aguda infantil en general.',
    2:'La causa parasitaria es menos frecuente que la viral como causa predominante de diarrea aguda infantil en general.',
    3:'La diarrea aguda infantil sí tiene, en la gran mayoría de los casos, una causa infecciosa identificable, predominantemente viral.'
  },
  trampa:'Asumir que la causa bacteriana o parasitaria es la más frecuente de diarrea aguda infantil, cuando la causa viral predomina.',
  obj:'Identificar la causa más frecuente de diarrea aguda infantil.',
  ref:'Nelson, Tratado de Pediatría, cap. 27.',
  tags:['diarrea aguda infantil','causa más frecuente']
},
{
  id:'U11-PED1-Q23', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Enfermedad diarreica aguda en pediatría', sub:'La deshidratación como verdadero riesgo clínico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la deshidratación se considera el principal riesgo clínico asociado a la diarrea aguda, más que la diarrea en sí misma?',
  ops:[
    'Porque la pérdida de líquidos y electrolitos puede llevar rápidamente a un niño, especialmente un lactante pequeño, a un estado de deshidratación clínicamente significativo si no se repone adecuadamente', 'La diarrea aguda en sí misma es siempre el principal riesgo clínico, sin ninguna relación real con el estado de hidratación del niño', 'Un lactante pequeño tiene la misma reserva fisiológica que un niño mayor frente a la pérdida de líquidos por diarrea', 'La deshidratación asociada a diarrea nunca representa un riesgo clínico real que amerite manejo específico'],
  ok:0,
  clave:'Porque la pérdida de líquidos y electrolitos puede llevar rápidamente a un niño, especialmente un lactante pequeño, a un estado de deshidratación clínicamente significativo si no se repone adecuadamente.',
  exp:'La deshidratación es la principal causa de morbimortalidad asociada a la diarrea, no la diarrea en sí misma: la pérdida de líquidos y electrolitos puede llevar rápidamente a un niño, especialmente un lactante con menor reserva fisiológica, a un estado de deshidratación clínicamente significativo.',
  no:{
    1:'Es precisamente lo contrario: la DESHIDRATACIÓN, no la diarrea en sí misma, es el principal riesgo clínico asociado a este cuadro.',
    2:'Un lactante pequeño tiene MENOR reserva fisiológica que un niño mayor frente a la pérdida de líquidos, no la misma reserva.',
    3:'La deshidratación asociada a diarrea sí representa un riesgo clínico real que amerita manejo específico y oportuno.'
  },
  trampa:'Enfocarse en la diarrea como el problema central, sin reconocer que la deshidratación resultante es el verdadero riesgo clínico a vigilar.',
  obj:'Explicar por qué la deshidratación es el principal riesgo clínico de la diarrea aguda, más que la diarrea en sí misma.',
  ref:'Nelson, Tratado de Pediatría, cap. 27.',
  tags:['deshidratación por diarrea','riesgo clínico principal']
},
{
  id:'U11-PED1-Q24', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Enfermedad diarreica aguda en pediatría', sub:'Los planes A, B y C según el grado de deshidratación',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño con diarrea aguda es evaluado clínicamente y se determina que presenta deshidratación grave, con compromiso circulatorio evidente.',
  enunciado:'¿Qué plan de manejo corresponde a este niño según el esquema de planes A, B y C de hidratación?',
  ops:[
    'Plan C, que requiere rehidratación intravenosa urgente', 'Plan A, con manejo domiciliario mediante sales de rehidratación oral y continuación de la alimentación habitual', 'Plan B, con rehidratación oral supervisada en el centro de salud, sin necesidad de vía intravenosa', 'Ningún plan específico aplica a este caso, ya que el esquema de planes solo considera la deshidratación leve'],
  ok:0,
  clave:'Plan C, que requiere rehidratación intravenosa urgente.',
  exp:'El Plan C es para deshidratación grave, que requiere rehidratación intravenosa urgente -corresponde a este caso, donde el niño presenta compromiso circulatorio evidente, un signo de deshidratación grave.',
  no:{
    1:'El Plan A corresponde a un niño SIN deshidratación clínica, no a uno con deshidratación grave y compromiso circulatorio.',
    2:'El Plan B corresponde a deshidratación leve a moderada, no a la deshidratación grave con compromiso circulatorio de este caso.',
    3:'El esquema de planes sí considera los distintos grados de deshidratación, incluyendo la deshidratación grave (Plan C).'
  },
  trampa:'Aplicar un plan de manejo (A o B) diseñado para deshidratación leve o moderada a un caso de deshidratación grave con compromiso circulatorio.',
  obj:'Aplicar el plan de hidratación correcto según el grado de deshidratación evaluado en un caso clínico.',
  ref:'Nelson, Tratado de Pediatría, cap. 27.',
  tags:['plan A B C de hidratación','deshidratación grave']
},
{
  id:'U11-PED1-Q25', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Desnutrición infantil', sub:'Diferencia entre desnutrición aguda y crónica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre desnutrición aguda y desnutrición crónica en el niño?',
  ops:[
    'La aguda refleja un déficit reciente de peso para la talla, mientras la crónica refleja un déficit nutricional sostenido en el tiempo, con talla baja para la edad', 'Ambos tipos de desnutrición son exactamente idénticos, sin ninguna diferencia real que amerite distinguirlos clínicamente', 'La desnutrición crónica siempre se revierte más rápido que la desnutrición aguda con una intervención nutricional oportuna', 'La desnutrición aguda refleja un déficit sostenido durante años, mientras la crónica refleja un déficit reciente de peso'],
  ok:0,
  clave:'La aguda refleja un déficit reciente de peso para la talla, mientras la crónica refleja un déficit nutricional sostenido en el tiempo, con talla baja para la edad.',
  exp:'La desnutrición aguda refleja un déficit reciente de peso en relación con la talla del niño, generalmente asociado a un evento reciente; la desnutrición crónica refleja un déficit nutricional sostenido en el tiempo, con consecuencias que incluyen la talla baja definitiva.',
  no:{
    1:'Son conceptos claramente distintos, con implicaciones de tiempo y pronóstico diferentes entre ambos tipos de desnutrición.',
    2:'Está invertido: la desnutrición AGUDA se revierte más rápido que la CRÓNICA, no al revés.',
    3:'Está invertido: la AGUDA refleja un déficit RECIENTE, y la CRÓNICA un déficit SOSTENIDO, no al revés.'
  },
  trampa:'Confundir la desnutrición aguda (déficit reciente, peso para talla) con la crónica (déficit sostenido, talla para edad), o invertir sus características.',
  obj:'Distinguir la desnutrición aguda de la desnutrición crónica en el niño.',
  ref:'Nelson, Tratado de Pediatría, cap. 6.',
  tags:['desnutrición aguda','desnutrición crónica']
},
{
  id:'U11-PED1-Q26', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Desnutrición infantil', sub:'Diferencia entre marasmo y kwashiorkor',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia clínica principal distingue al marasmo del kwashiorkor?',
  ops:[
    'El marasmo es por déficit calórico global sin edema; el kwashiorkor es por déficit predominantemente proteico, con edema característico', 'Ambas condiciones son exactamente idénticas en su presentación clínica, sin ninguna diferencia real entre ellas', 'El marasmo se caracteriza por edema notable, mientras el kwashiorkor se caracteriza por ausencia completa de edema', 'Ninguna de las dos condiciones representa una forma grave de desnutrición que requiera manejo hospitalario especializado'],
  ok:0,
  clave:'El marasmo es por déficit calórico global sin edema; el kwashiorkor es por déficit predominantemente proteico, con edema característico.',
  exp:'El marasmo es la forma de desnutrición grave por déficit calórico global, sin edema asociado; el kwashiorkor es la forma por déficit predominantemente proteico, caracterizada por edema, particularmente notable en la cara y las extremidades.',
  no:{
    1:'Son condiciones con presentaciones clínicas distintas y bien diferenciadas, según lo visto en este tema.',
    2:'Está invertido: el KWASHIORKOR se caracteriza por edema notable, y el MARASMO por ausencia de edema, no al revés.',
    3:'Ambas condiciones sí representan formas graves de desnutrición que requieren manejo hospitalario especializado.'
  },
  trampa:'Invertir las características distintivas del marasmo (sin edema) y el kwashiorkor (con edema), un error frecuente de terminología.',
  obj:'Distinguir el marasmo del kwashiorkor según sus características clínicas.',
  ref:'Nelson, Tratado de Pediatría, cap. 6.',
  tags:['marasmo y kwashiorkor','diferencia clínica']
},
{
  id:'U11-PED1-Q27', programa:'unirm', cuatri:11,
  esp:'Pediatría I', tema:'Desnutrición infantil', sub:'Los primeros mil días como ventana crítica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la desnutrición crónica durante los primeros mil días de vida es mucho más difícil de revertir que la misma condición detectada después de esa ventana?',
  ops:[
    'Porque los primeros mil días son un periodo crítico del desarrollo con consecuencias documentadas sobre el desarrollo cognitivo que, una vez establecidas, son difíciles de revertir', 'La ventana de los primeros mil días de vida no tiene ninguna relevancia clínica real distinta de cualquier otro periodo de la infancia', 'La desnutrición crónica detectada después de los primeros mil días siempre es igual de difícil de revertir que durante esa ventana', 'El desarrollo cognitivo del niño nunca se ve afectado por la desnutrición crónica ocurrida durante los primeros mil días de vida'],
  ok:0,
  clave:'Porque los primeros mil días son un periodo crítico del desarrollo con consecuencias documentadas sobre el desarrollo cognitivo que, una vez establecidas, son difíciles de revertir.',
  exp:'La desnutrición crónica durante los primeros mil días de vida tiene consecuencias que incluyen un impacto documentado sobre el desarrollo cognitivo, mucho más difícil de revertir una vez establecido que si la intervención nutricional ocurre dentro de esa ventana crítica.',
  no:{
    1:'Los primeros mil días sí tienen una relevancia clínica particular, siendo una ventana crítica del desarrollo cerebral y físico.',
    2:'Es precisamente lo contrario: intervenir DENTRO de la ventana de los primeros mil días tiene mayor impacto que hacerlo después.',
    3:'El desarrollo cognitivo sí se ve afectado de forma documentada por la desnutrición crónica en los primeros mil días de vida.'
  },
  trampa:'Subestimar la relevancia particular de la ventana de los primeros mil días, tratándola como equivalente a cualquier otro momento de la infancia.',
  obj:'Explicar por qué los primeros mil días de vida son una ventana crítica para la intervención nutricional.',
  ref:'Nelson, Tratado de Pediatría, cap. 6.',
  tags:['desnutrición crónica','ventana de los primeros mil días']
}

]);
