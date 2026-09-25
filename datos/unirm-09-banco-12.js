/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE MEDICINA PREVENTIVA (1/2)
   Amplia Medicina Preventiva de 2 a 50 preguntas junto con
   unirm-09-banco-13.js. Esta parte cubre niveles de prevencion,
   inmunizaciones, tamizaje y prevencion de enfermedades cronicas
   no transmisibles (temas 1-4).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== MEDICINA PREVENTIVA ===================== */
{
  id:'U9-MP-Q03', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Niveles de prevención', sub:'Prevención primaria vs. secundaria',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico ofrece la vacuna contra la influenza a toda la población adulta sana de su consultorio, antes de que empiece la temporada de gripe.',
  enunciado:'¿A qué nivel de prevención corresponde esta intervención?',
  ops:['Prevención primaria', 'Prevención secundaria', 'Prevención terciaria', 'Prevención cuaternaria'],
  ok:0,
  clave:'Es prevención primaria: se aplica a personas sanas, antes de que la enfermedad exista, para reducir la incidencia de casos nuevos.',
  exp:'La vacunación aplicada a personas sanas, antes de que la enfermedad exista, es el ejemplo clásico de prevención primaria: busca evitar que la enfermedad aparezca en primer lugar, reduciendo la incidencia de casos nuevos en la población vacunada.',
  no:{
    1:'La prevención secundaria detecta una enfermedad ya presente pero asintomática (como un tamizaje), no evita que aparezca desde el inicio.',
    2:'La prevención terciaria actúa sobre una enfermedad ya clínicamente evidente, limitando sus complicaciones, no antes de que exista.',
    3:'La prevención cuaternaria busca evitar el exceso de intervención médica, un concepto distinto de vacunar a población sana.'
  },
  trampa:'Confundir la prevención primaria con la secundaria si no se distingue claramente si la persona ya tiene la enfermedad (aunque sea asintomática) o no la tiene en absoluto.',
  obj:'Clasificar correctamente la vacunación en población sana como prevención primaria.',
  ref:'Organización Mundial de la Salud, Niveles de prevención.',
  tags:['prevención primaria','vacunación','incidencia']
},
{
  id:'U9-MP-Q04', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Niveles de prevención', sub:'Prevención secundaria',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer asintomática de 45 años se realiza una mamografía de rutina, sin ningún síntoma ni hallazgo previo sugestivo de cáncer de mama.',
  enunciado:'¿A qué nivel de prevención corresponde esta mamografía?',
  ops:['Prevención secundaria', 'Prevención primaria', 'Prevención terciaria', 'Promoción de la salud, exclusivamente'],
  ok:0,
  clave:'Es prevención secundaria: busca detectar una enfermedad que ya podría existir biológicamente pero aún no da síntomas.',
  exp:'La mamografía de tamizaje en una mujer asintomática es el ejemplo clásico de prevención secundaria: no evita que el cáncer aparezca (eso sería primaria), sino que busca detectarlo en fase preclínica, antes de que dé síntomas, para tratarlo tempranamente y cambiar su curso.',
  no:{
    1:'La prevención primaria actúa antes de que la enfermedad exista biológicamente; la mamografía busca detectar algo que, de existir, ya está presente.',
    2:'La prevención terciaria actúa sobre una enfermedad ya evidente clínicamente, con síntomas; aquí la paciente está asintomática.',
    3:'La promoción de la salud es un concepto más amplio y no dirigido a una enfermedad específica; la mamografía es una intervención dirigida y específica.'
  },
  trampa:'Confundir el tamizaje (prevención secundaria) con una intervención de prevención primaria, sin notar que busca DETECTAR algo que ya podría existir, no evitar que aparezca.',
  obj:'Clasificar correctamente un tamizaje en paciente asintomática como prevención secundaria.',
  ref:'Organización Mundial de la Salud, Niveles de prevención.',
  tags:['prevención secundaria','mamografía','tamizaje']
},
{
  id:'U9-MP-Q05', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Niveles de prevención', sub:'Prevención terciaria',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente ya diagnosticado con diabetes tipo 2 recibe control estricto de su glucosa y exámenes oftalmológicos regulares para prevenir la progresión a retinopatía diabética.',
  enunciado:'¿A qué nivel de prevención corresponde esta intervención?',
  ops:['Prevención terciaria', 'Prevención primaria', 'Prevención secundaria', 'Prevención cuaternaria'],
  ok:0,
  clave:'Es prevención terciaria: actúa sobre una enfermedad ya diagnosticada clínicamente, buscando limitar sus complicaciones.',
  exp:'En un paciente ya diagnosticado con diabetes (enfermedad clínicamente evidente), el control estricto de la glucosa para evitar complicaciones como la retinopatía es el ejemplo clásico de prevención terciaria: no evita que la enfermedad exista (ya existe) ni la detecta tempranamente (ya está diagnosticada), sino que limita el daño y las complicaciones de una enfermedad ya presente.',
  no:{
    1:'La prevención primaria actúa antes de que la enfermedad exista; este paciente ya tiene diabetes diagnosticada.',
    2:'La prevención secundaria detecta la enfermedad en fase asintomática; este paciente ya tiene diagnóstico clínico confirmado, no está en fase de detección.',
    3:'La prevención cuaternaria busca evitar el exceso de intervención médica; el control adecuado de un diabético diagnosticado es la intervención apropiada, no un exceso.'
  },
  trampa:'No distinguir la prevención terciaria (enfermedad ya evidente, limitar complicaciones) de la secundaria (detectar algo aún asintomático).',
  obj:'Clasificar correctamente el manejo de complicaciones en un paciente ya diagnosticado como prevención terciaria.',
  ref:'Organización Mundial de la Salud, Niveles de prevención.',
  tags:['prevención terciaria','diabetes tipo 2','retinopatía diabética']
},
{
  id:'U9-MP-Q06', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Niveles de prevención', sub:'Promoción de la salud vs. prevención primaria',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué se diferencia la promoción de la salud de la prevención primaria dirigida a una enfermedad específica?',
  ops:[
    'La promoción de la salud no se dirige a una enfermedad concreta, sino a mejorar las condiciones generales que determinan la salud de toda la población',
    'Ambos términos son exactamente sinónimos, sin ninguna diferencia real', 'La promoción de la salud solo puede aplicarse a personas que ya tienen una enfermedad diagnosticada', 'La prevención primaria es siempre más amplia que la promoción de la salud'],
  ok:0,
  clave:'La promoción de la salud es más amplia: no se dirige a una enfermedad concreta, sino a mejorar las condiciones generales de toda la población.',
  exp:'La promoción de la salud (educación, políticas públicas saludables, entornos que favorecen la salud) es más amplia que la prevención primaria: no se dirige a una enfermedad concreta específica, como sí lo hace por ejemplo una vacuna contra el sarampión, sino a mejorar las condiciones generales -sociales, ambientales, económicas- que determinan la salud de toda la población de forma simultánea.',
  no:{
    1:'Son conceptos relacionados pero distintos: uno (promoción) es más amplio y general que el otro (prevención primaria dirigida).',
    2:'La promoción de la salud se dirige principalmente a población sana, para mejorar las condiciones generales de salud, no exclusivamente a quien ya tiene una enfermedad diagnosticada.',
    3:'Es al revés: la promoción de la salud es MÁS amplia que la prevención primaria dirigida a una enfermedad específica, no menos.'
  },
  trampa:'Confundir la promoción de la salud (concepto amplio, sin enfermedad específica) con la prevención primaria dirigida (enfermedad específica).',
  obj:'Distinguir la promoción de la salud de la prevención primaria dirigida a una enfermedad concreta.',
  ref:'Restrepo y Málaga, Promoción de la Salud.',
  tags:['promoción de la salud','prevención primaria','determinantes sociales']
},
{
  id:'U9-MP-Q07', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Niveles de prevención', sub:'Error frecuente de clasificación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el error más frecuente al clasificar un ejemplo de prevención en un examen?',
  ops:[
    'Llamar "primaria" a cualquier intervención que suene preventiva en general, sin fijarse en si la persona ya tiene la enfermedad (aunque sea asintomática) o no',
    'Los estudiantes nunca cometen ningún error al clasificar niveles de prevención', 'Confundir la prevención terciaria con la promoción de la salud es el único error posible', 'No existe ningún error frecuente documentado en la clasificación de niveles de prevención'],
  ok:0,
  clave:'El error más frecuente es llamar "primaria" a cualquier intervención que suene preventiva, sin distinguir si la persona ya tiene la enfermedad (aunque asintomática) o no.',
  exp:'El error más frecuente al clasificar niveles de prevención es llamar "primaria" a cualquier intervención que suene genéricamente preventiva, sin fijarse cuidadosamente en el criterio real que distingue los niveles: si la persona ya tiene la enfermedad biológicamente (aunque sea asintomática, lo que sería secundaria) o si realmente todavía no la tiene en absoluto (lo que sería primaria).',
  no:{
    1:'Este error sí es real y bien documentado como el más frecuente en la clasificación de niveles de prevención.',
    2:'Existen otros errores de clasificación posibles (como confundir secundaria con terciaria), no es el único error documentado.',
    3:'Sí existe un error frecuente bien identificado y documentado: confundir primaria con secundaria por no aplicar el criterio correcto.'
  },
  trampa:'No aplicar el criterio correcto (presencia o ausencia real de la enfermedad, aunque sea asintomática) al clasificar un ejemplo de prevención.',
  obj:'Identificar el error más frecuente al clasificar ejemplos entre los niveles de prevención.',
  ref:'Organización Mundial de la Salud, Niveles de prevención.',
  tags:['clasificación de niveles','error frecuente','prevención primaria vs. secundaria']
},
{
  id:'U9-MP-Q08', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Niveles de prevención', sub:'Prevención primaria sobre factores de riesgo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué caracteriza a una intervención de prevención primaria, más allá de si "parece médica" o no?',
  ops:[
    'Actúa sobre un factor de riesgo antes de que la enfermedad exista, sin importar qué tan sofisticada o médica parezca la intervención',
    'Una intervención de prevención primaria siempre debe ser realizada exclusivamente por un médico especialista', 'Solo las vacunas pueden considerarse ejemplos de prevención primaria', 'La prevención primaria únicamente aplica a enfermedades infecciosas, nunca a otro tipo de condición'],
  ok:0,
  clave:'Lo que caracteriza a la prevención primaria es actuar sobre un factor de riesgo antes de que la enfermedad exista, sin importar qué tan "médica" parezca la intervención.',
  exp:'Cualquier intervención que actúe sobre un factor de riesgo antes de que la enfermedad exista entra en la categoría de prevención primaria, sin importar qué tan "médica" o sofisticada parezca: usar cinturón de seguridad, dejar de fumar antes de desarrollar cáncer de pulmón, o vacunarse son todos ejemplos válidos de prevención primaria, aunque solo uno de ellos involucre directamente a un profesional de salud administrando algo.',
  no:{
    1:'La prevención primaria no requiere exclusivamente la intervención de un médico; ejemplos como usar cinturón de seguridad no involucran a un profesional de salud directamente.',
    2:'Existen muchos ejemplos de prevención primaria más allá de las vacunas, como dejar de fumar o usar cinturón de seguridad.',
    3:'La prevención primaria aplica tanto a enfermedades infecciosas como a enfermedades no transmisibles (como dejar de fumar para prevenir cáncer de pulmón).'
  },
  trampa:'Asumir que la prevención primaria se limita a intervenciones médicas formales o a enfermedades infecciosas, ignorando ejemplos no médicos o de enfermedades crónicas.',
  obj:'Explicar qué caracteriza fundamentalmente a una intervención de prevención primaria.',
  ref:'Organización Mundial de la Salud, Niveles de prevención.',
  tags:['prevención primaria','factor de riesgo','ejemplos no médicos']
},
{
  id:'U9-MP-Q09', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Niveles de prevención', sub:'Las tres intervenciones sobre la misma enfermedad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué pueden coexistir simultáneamente intervenciones de prevención primaria, secundaria y terciaria dirigidas a la misma enfermedad, como la diabetes tipo 2?',
  ops:[
    'Porque actúan sobre grupos de personas distintos según el momento de la historia natural de la enfermedad en que se encuentran: sanas, asintomáticas con la enfermedad, o ya diagnosticadas',
    'Es imposible que coexistan las tres intervenciones para la misma enfermedad al mismo tiempo', 'Solo puede existir un nivel de prevención por enfermedad en un sistema de salud', 'Las tres intervenciones siempre se aplican exactamente a la misma persona y en el mismo momento'],
  ok:0,
  clave:'Coexisten porque actúan sobre grupos de personas distintos, según el momento de la historia natural de la enfermedad: sanas, asintomáticas, o ya diagnosticadas.',
  exp:'Las tres intervenciones pueden coexistir simultáneamente dirigidas a la misma enfermedad porque actúan sobre grupos de personas distintos, según el momento de la historia natural de la enfermedad en que se encuentran: la prevención primaria se dirige a personas sanas sin la enfermedad, la secundaria a personas que ya la tienen pero están asintomáticas, y la terciaria a quienes ya están diagnosticados clínicamente -en la diabetes tipo 2, un sistema de salud puede promover ejercicio en la población general (primaria), tamizar a adultos con factores de riesgo (secundaria) y controlar estrictamente a los ya diagnosticados (terciaria), todo al mismo tiempo, en personas distintas.',
  no:{
    1:'Sí es posible, y de hecho es lo habitual en la práctica de salud pública: coexisten porque se dirigen a subgrupos poblacionales distintos.',
    2:'Pueden coexistir múltiples niveles de prevención simultáneamente para una misma enfermedad, dirigidos a distintos subgrupos poblacionales.',
    3:'Cada intervención se dirige típicamente a un grupo de personas distinto, según su situación respecto a la enfermedad, no a la misma persona en el mismo momento.'
  },
  trampa:'Asumir erróneamente que solo puede existir un nivel de prevención activo para una enfermedad determinada, sin reconocer que se dirigen a subgrupos poblacionales distintos.',
  obj:'Explicar por qué los tres niveles de prevención pueden coexistir simultáneamente dirigidos a la misma enfermedad.',
  ref:'Organización Mundial de la Salud, Niveles de prevención.',
  tags:['coexistencia de niveles','diabetes tipo 2','historia natural de la enfermedad']
},
{
  id:'U9-MP-Q10', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Inmunizaciones y esquema de vacunación', sub:'Vacuna viva atenuada en inmunocomprometidos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño con una inmunodeficiencia primaria grave está programado para recibir una vacuna viva atenuada según el esquema estándar de vacunación.',
  enunciado:'¿Por qué esta vacuna requiere especial precaución en este paciente?',
  ops:[
    'Porque contiene un microorganismo debilitado pero vivo, que podría replicarse sin control en un paciente inmunocomprometido y causar la enfermedad que se intentaba prevenir',
    'Las vacunas vivas atenuadas nunca representan ningún riesgo especial, sin importar el estado inmunitario del paciente', 'Este riesgo solo aplicaría a vacunas inactivadas, nunca a las vivas atenuadas', 'Un paciente con inmunodeficiencia primaria siempre debe recibir MÁS dosis de vacunas vivas atenuadas, no menos'],
  ok:0,
  clave:'Contiene un microorganismo vivo debilitado que podría replicarse sin control en un inmunocomprometido, causando la enfermedad que se intentaba prevenir.',
  exp:'Las vacunas vivas atenuadas contienen un microorganismo debilitado, pero todavía vivo y capaz de replicarse limitadamente; en un paciente con una inmunodeficiencia primaria grave, el sistema inmunitario puede no ser capaz de controlar esa replicación limitada, permitiendo que el microorganismo atenuado se replique sin control y cause la enfermedad que la vacuna buscaba prevenir -por eso estas vacunas están contraindicadas o requieren evaluación especializada en pacientes inmunocomprometidos.',
  no:{
    1:'Las vacunas vivas atenuadas sí representan un riesgo especial bien documentado en pacientes inmunocomprometidos, precisamente por contener un organismo vivo.',
    2:'El riesgo descrito es específico de las vacunas VIVAS (que contienen organismo vivo), no de las inactivadas (que no pueden replicarse).',
    3:'Es precisamente lo contrario: un paciente inmunocomprometido requiere MAYOR precaución (evitar o evaluar cuidadosamente), no más dosis, de vacunas vivas atenuadas.'
  },
  trampa:'No reconocer que el riesgo de una vacuna viva atenuada en un inmunocomprometido es que el organismo vivo se replique sin control, causando la enfermedad.',
  obj:'Explicar el riesgo de administrar una vacuna viva atenuada a un paciente inmunocomprometido.',
  ref:'OMS, Manual de Vacunación.',
  tags:['vacuna viva atenuada','inmunodeficiencia primaria','contraindicación']
},
{
  id:'U9-MP-Q11', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Inmunizaciones y esquema de vacunación', sub:'Falla en la cadena de frío',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un lote de vacunas se expuso brevemente a una temperatura fuera del rango recomendado durante el transporte, pero se administró de todas formas a los pacientes sin detectarse el problema.',
  enunciado:'¿Qué consecuencia clínica puede tener esta falla en la cadena de frío, aunque la administración se haya hecho correctamente?',
  ops:[
    'Las vacunas afectadas pueden haber perdido su eficacia parcial o total, dejando a los pacientes con menor protección de la esperada, sin que esto sea visible a simple vista',
    'La cadena de frío no tiene ninguna relación con la eficacia real de una vacuna', 'Una falla en la cadena de frío siempre hace que la vacuna sea más peligrosa, nunca menos eficaz', 'Los pacientes vacunados con ese lote quedarán automáticamente sobreprotegidos por la exposición a temperatura incorrecta'],
  ok:0,
  clave:'Las vacunas afectadas pueden perder eficacia parcial o total, dejando a los pacientes con menor protección de la esperada, sin ser visible a simple vista.',
  exp:'Muchas vacunas pierden su eficacia parcial o totalmente si se exponen a temperaturas fuera del rango recomendado en cualquier punto de la cadena de frío, sin que este daño sea visible a simple vista -el vial puede lucir completamente normal. Una vacuna administrada tras una falla en la cadena de frío puede no generar la protección esperada, dejando al paciente con una falsa sensación de estar protegido cuando en realidad no lo está, o lo está de forma incompleta.',
  no:{
    1:'La cadena de frío tiene una relación directa y crítica con la eficacia real de muchas vacunas, siendo precisamente el concepto que explica este riesgo.',
    2:'Una falla en la cadena de frío típicamente REDUCE (no aumenta el peligro de) la eficacia de la vacuna, dejando al paciente con menor protección, no con mayor riesgo directo del biológico en sí.',
    3:'No existe el concepto de "sobreprotección" por exposición a temperatura incorrecta; el riesgo real es la pérdida de eficacia, no un exceso de protección.'
  },
  trampa:'Asumir que una falla en la cadena de frío es visible o que necesariamente hace más peligrosa a la vacuna, en vez de reconocer que reduce silenciosamente su eficacia.',
  obj:'Explicar la consecuencia clínica de una falla en la cadena de frío sobre la eficacia de una vacuna.',
  ref:'OMS, Manual de Vacunación.',
  tags:['cadena de frío','pérdida de eficacia','logística de vacunación']
},
{
  id:'U9-MP-Q12', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Inmunizaciones y esquema de vacunación', sub:'Inmunidad de rebaño y umbral de cobertura',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el umbral de cobertura de vacunación necesario para lograr inmunidad de rebaño varía según la enfermedad?',
  ops:[
    'Porque depende de qué tan contagiosa sea esa enfermedad específica: las más contagiosas requieren una cobertura poblacional más alta para dificultar su circulación',
    'El umbral de cobertura necesario es exactamente el mismo para todas las enfermedades, sin importar su transmisibilidad', 'La inmunidad de rebaño no depende de ningún umbral de cobertura poblacional específico', 'Cuanto menos contagiosa es una enfermedad, MAYOR cobertura de vacunación se necesita para lograr inmunidad de rebaño'],
  ok:0,
  clave:'Depende de qué tan contagiosa sea la enfermedad: las más contagiosas requieren mayor cobertura poblacional para dificultar su circulación.',
  exp:'El umbral de cobertura de vacunación necesario para lograr inmunidad de rebaño varía según qué tan contagiosa sea la enfermedad específica: enfermedades muy contagiosas (como el sarampión, que se transmite con mucha facilidad de persona a persona) requieren una cobertura poblacional considerablemente más alta que enfermedades menos transmisibles para alcanzar ese efecto protector colectivo sobre quienes no pueden vacunarse.',
  no:{
    1:'El umbral varía significativamente según la transmisibilidad de cada enfermedad específica, no es un valor único para todas.',
    2:'La inmunidad de rebaño sí depende de un umbral de cobertura poblacional específico, que varía según la enfermedad.',
    3:'Es al revés: cuanto MÁS contagiosa es una enfermedad, MAYOR cobertura se necesita, no menos.'
  },
  trampa:'Asumir que el umbral de cobertura para inmunidad de rebaño es un número fijo universal, ignorando que depende de la transmisibilidad específica de cada enfermedad.',
  obj:'Explicar por qué el umbral de cobertura necesario para inmunidad de rebaño varía según la enfermedad.',
  ref:'OMS, Manual de Vacunación.',
  tags:['inmunidad de rebaño','umbral de cobertura','transmisibilidad']
},
{
  id:'U9-MP-Q13', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Inmunizaciones y esquema de vacunación', sub:'Intervalo mínimo entre dosis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el esquema de vacunación respeta un intervalo mínimo entre dosis de una misma vacuna, en vez de aplicarlas seguidas lo antes posible?',
  ops:[
    'Porque la memoria inmunitaria necesita tiempo para establecerse correctamente antes de que sea útil exponerla a una nueva dosis del mismo antígeno',
    'El intervalo entre dosis es completamente arbitrario, sin ninguna base inmunológica real', 'Aplicar las dosis lo antes posible siempre genera una protección más fuerte que respetar el intervalo recomendado', 'El intervalo entre dosis solo importa para vacunas inactivadas, nunca para las vivas atenuadas'],
  ok:0,
  clave:'La memoria inmunitaria necesita tiempo para establecerse correctamente antes de que sea útil exponerla a una nueva dosis del mismo antígeno.',
  exp:'El intervalo mínimo entre dosis de una misma vacuna respeta el tiempo que necesita el sistema inmunitario para establecer una memoria inmunitaria adecuada (linfocitos B y T de memoria, ya vistos en Inmunología) tras la primera exposición al antígeno; aplicar la siguiente dosis demasiado pronto, antes de que esa memoria se consolide, no potencia la respuesta de la misma manera y puede incluso ser menos eficaz que respetar el intervalo recomendado.',
  no:{
    1:'El intervalo entre dosis tiene una base inmunológica bien establecida, relacionada con el tiempo de consolidación de la memoria inmunitaria.',
    2:'Es al revés: aplicar las dosis demasiado pronto, sin respetar el intervalo mínimo, puede ser MENOS eficaz, no más fuerte.',
    3:'El concepto de intervalo mínimo entre dosis aplica tanto a vacunas inactivadas como a vivas atenuadas, ambas requieren tiempo para consolidar la memoria inmunitaria.'
  },
  trampa:'Asumir que aplicar dosis más seguidas siempre es mejor o más protector, ignorando el tiempo real que necesita la memoria inmunitaria para consolidarse.',
  obj:'Explicar la base inmunológica del intervalo mínimo entre dosis de una misma vacuna.',
  ref:'OMS, Manual de Vacunación.',
  tags:['esquema de vacunación','memoria inmunitaria','intervalo entre dosis']
},
{
  id:'U9-MP-Q14', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Inmunizaciones y esquema de vacunación', sub:'Vacunas vivas atenuadas vs. inactivadas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ventaja tienen las vacunas vivas atenuadas sobre las inactivadas, en pacientes sin contraindicación para recibirlas?',
  ops:[
    'Generan una respuesta inmunitaria más robusta y duradera, con frecuencia con menos dosis necesarias para lograr protección duradera',
    'Las vacunas vivas atenuadas nunca generan ninguna respuesta inmunitaria medible', 'Las vacunas inactivadas siempre generan una respuesta inmunitaria más robusta que las vivas atenuadas', 'No existe ninguna diferencia relevante entre vacunas vivas atenuadas e inactivadas'],
  ok:0,
  clave:'Las vacunas vivas atenuadas generan una respuesta inmunitaria más robusta y duradera, con frecuencia con menos dosis necesarias.',
  exp:'Las vacunas vivas atenuadas, al contener un microorganismo debilitado pero vivo que imita más de cerca una infección natural, generan una respuesta inmunitaria más robusta y duradera que las vacunas inactivadas, con frecuencia requiriendo menos dosis para lograr una protección duradera -una ventaja real en pacientes sin contraindicación para recibirlas, aunque no puedan usarse en inmunocomprometidos.',
  no:{
    1:'Las vacunas vivas atenuadas sí generan una respuesta inmunitaria medible y, de hecho, típicamente más robusta que las inactivadas.',
    2:'Es al revés: las vacunas VIVAS atenuadas suelen generar una respuesta MÁS robusta que las inactivadas, no menos.',
    3:'Sí existe una diferencia relevante y bien documentada entre ambos tipos, tanto en robustez de la respuesta como en el riesgo en inmunocomprometidos.'
  },
  trampa:'Invertir la comparación entre vacunas vivas atenuadas e inactivadas respecto a la robustez de la respuesta inmunitaria generada.',
  obj:'Explicar la ventaja de las vacunas vivas atenuadas sobre las inactivadas en pacientes sin contraindicación.',
  ref:'OMS, Manual de Vacunación.',
  tags:['vacuna viva atenuada','vacuna inactivada','respuesta inmunitaria']
},
{
  id:'U9-MP-Q15', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Inmunizaciones y esquema de vacunación', sub:'Protección indirecta por inmunidad de rebaño',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un recién nacido, demasiado pequeño aún para recibir ciertas vacunas de su esquema, vive en una comunidad con una cobertura de vacunación muy alta entre los adultos y niños mayores.',
  enunciado:'¿Por qué este recién nacido puede estar parcialmente protegido, aunque él mismo no haya sido vacunado todavía?',
  ops:[
    'Por inmunidad de rebaño: la alta cobertura de vacunación en su comunidad dificulta la circulación del agente infeccioso, reduciendo su exposición indirecta',
    'Un recién nacido nunca puede beneficiarse de ninguna forma de protección indirecta contra enfermedades infecciosas', 'La inmunidad de rebaño solo protege a personas ya vacunadas, nunca a quienes todavía no lo están', 'Este recién nacido está protegido porque nació con inmunidad permanente contra todas las enfermedades prevenibles por vacunación'],
  ok:0,
  clave:'Por inmunidad de rebaño: la alta cobertura de vacunación en su comunidad dificulta la circulación del agente infeccioso, protegiéndolo indirectamente.',
  exp:'La inmunidad de rebaño ocurre cuando una proporción suficientemente alta de una población está vacunada, dificultando tanto la circulación del agente infeccioso que incluso las personas NO vacunadas -como este recién nacido, demasiado pequeño para su esquema completo- quedan indirectamente protegidas, porque el agente infeccioso ya no encuentra suficientes huéspedes susceptibles cerca para propagarse con facilidad.',
  no:{
    1:'Un recién nacido sí puede beneficiarse de la protección indirecta que ofrece la inmunidad de rebaño de su comunidad, precisamente el mecanismo descrito en este caso.',
    2:'La inmunidad de rebaño beneficia también a quienes NO están vacunados todavía, como este recién nacido, no solo a los ya vacunados.',
    3:'Ningún recién nacido tiene inmunidad permanente innata contra todas las enfermedades prevenibles por vacunación; la protección descrita es indirecta y poblacional, no innata individual.'
  },
  trampa:'No reconocer que la inmunidad de rebaño protege específicamente a quienes NO pueden vacunarse todavía, como un recién nacido demasiado pequeño para su esquema.',
  obj:'Explicar cómo un recién nacido puede beneficiarse indirectamente de la inmunidad de rebaño de su comunidad.',
  ref:'OMS, Manual de Vacunación.',
  tags:['inmunidad de rebaño','protección indirecta','recién nacido']
},
{
  id:'U9-MP-Q16', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Inmunizaciones y esquema de vacunación', sub:'Edad mínima para cada vacuna',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el esquema de vacunación respeta una edad mínima específica para cada vacuna en particular?',
  ops:[
    'Porque el sistema inmunitario del niño necesita cierto grado de madurez para responder de forma adecuada a cada vacuna específica',
    'La edad mínima de cada vacuna es un dato completamente arbitrario, sin ninguna base inmunológica', 'Todas las vacunas del esquema tienen exactamente la misma edad mínima recomendada', 'Aplicar una vacuna antes de la edad mínima recomendada siempre genera una respuesta inmunitaria más fuerte'],
  ok:0,
  clave:'El sistema inmunitario del niño necesita cierto grado de madurez para responder de forma adecuada a cada vacuna específica.',
  exp:'El esquema de vacunación respeta una edad mínima específica para cada vacuna en particular porque el sistema inmunitario del niño necesita alcanzar cierto grado de madurez para generar una respuesta protectora adecuada a esa vacuna concreta; algunas vacunas requieren un sistema inmunitario más maduro que otras para ser efectivas, lo que explica por qué no todas se aplican a la misma edad dentro del esquema.',
  no:{
    1:'La edad mínima de cada vacuna tiene una base inmunológica real, relacionada con la madurez del sistema inmunitario del niño.',
    2:'Distintas vacunas del esquema tienen distintas edades mínimas recomendadas, según qué tan madura necesite estar la respuesta inmunitaria para esa vacuna en particular.',
    3:'Es al revés: aplicar una vacuna ANTES de la edad mínima recomendada puede generar una respuesta MENOS adecuada, no más fuerte.'
  },
  trampa:'Asumir que la edad mínima de vacunación es arbitraria o uniforme para todas las vacunas, ignorando la base inmunológica real detrás de cada recomendación específica.',
  obj:'Explicar la base inmunológica de la edad mínima recomendada para cada vacuna del esquema.',
  ref:'OMS, Manual de Vacunación.',
  tags:['esquema de vacunación','edad mínima','madurez inmunitaria']
},
{
  id:'U9-MP-Q17', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Tamizaje y detección temprana', sub:'Condiciones para un buen tamizaje',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué condición debe cumplirse, más allá de la frecuencia de la enfermedad, para que un programa de tamizaje tenga sentido clínico?',
  ops:[
    'Debe existir un tratamiento eficaz disponible si la enfermedad se detecta temprano; detectar algo que no cambiaría el manejo clínico no aporta beneficio real',
    'Un programa de tamizaje siempre tiene sentido clínico, sin importar si existe o no un tratamiento eficaz disponible', 'La existencia de tratamiento eficaz es irrelevante para diseñar un programa de tamizaje', 'Basta con que la enfermedad sea frecuente para justificar cualquier programa de tamizaje, sin ninguna otra condición'],
  ok:0,
  clave:'Debe existir un tratamiento eficaz disponible si se detecta temprano; detectar algo que no cambiaría el manejo no aporta beneficio real.',
  exp:'Para que un programa de tamizaje tenga sentido clínico y de salud pública, además de que la enfermedad sea suficientemente frecuente y grave, debe existir un tratamiento eficaz disponible si se detecta temprano: detectar una condición que de todas formas no cambiaría el manejo clínico del paciente no aporta ningún beneficio real, y solo genera la carga psicológica y los costos de la detección sin ningún beneficio compensatorio.',
  no:{
    1:'Un programa de tamizaje sin tratamiento eficaz disponible no tiene el mismo sentido clínico; la existencia de tratamiento es una condición central.',
    2:'La existencia de un tratamiento eficaz es precisamente una de las condiciones centrales para que un tamizaje tenga sentido clínico real.',
    3:'La frecuencia de la enfermedad es solo una de varias condiciones necesarias, no la única suficiente para justificar un programa de tamizaje.'
  },
  trampa:'Reducir las condiciones de un buen tamizaje solo a la frecuencia de la enfermedad, sin considerar si existe un tratamiento eficaz disponible.',
  obj:'Explicar por qué la existencia de tratamiento eficaz es una condición necesaria para un programa de tamizaje con sentido clínico.',
  ref:'Gordis, Epidemiología, cap. 17.',
  tags:['tamizaje','tratamiento eficaz','condiciones del cribado']
},
{
  id:'U9-MP-Q18', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Tamizaje y detección temprana', sub:'Prevalencia y valor predictivo positivo',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Se aplica la misma prueba de tamizaje, con la misma sensibilidad y especificidad, a dos poblaciones: una con alta prevalencia de la enfermedad y otra con muy baja prevalencia.',
  enunciado:'¿Qué diferencia habrá en el valor predictivo positivo de la prueba entre ambas poblaciones?',
  ops:[
    'El valor predictivo positivo será menor en la población de baja prevalencia, generando proporcionalmente más falsos positivos',
    'El valor predictivo positivo será exactamente el mismo en ambas poblaciones, sin importar la prevalencia', 'El valor predictivo positivo será mayor en la población de baja prevalencia', 'La prevalencia de la enfermedad no tiene ninguna relación con el valor predictivo positivo de una prueba'],
  ok:0,
  clave:'El valor predictivo positivo será menor en la población de baja prevalencia, generando proporcionalmente más falsos positivos.',
  exp:'Aplicar un tamizaje a una población de muy baja prevalencia para esa enfermedad genera muchos falsos positivos en términos relativos (bajo valor predictivo positivo), incluso con la misma sensibilidad y especificidad de la prueba, porque el valor predictivo positivo depende directamente de la prevalencia de la enfermedad en la población estudiada, no solo de las propiedades intrínsecas de la prueba -a menor prevalencia, menor proporción de los resultados positivos que corresponden a casos reales.',
  no:{
    1:'El valor predictivo positivo SÍ varía según la prevalencia, aunque la sensibilidad y especificidad de la prueba sean idénticas en ambas poblaciones.',
    2:'Es al revés: el valor predictivo positivo será MENOR (no mayor) en la población de baja prevalencia.',
    3:'La prevalencia tiene una relación directa y bien establecida con el valor predictivo positivo de cualquier prueba diagnóstica.'
  },
  trampa:'Asumir que el valor predictivo positivo depende únicamente de la sensibilidad y especificidad de la prueba, ignorando el efecto central de la prevalencia poblacional.',
  obj:'Explicar cómo la prevalencia poblacional afecta el valor predictivo positivo de una prueba de tamizaje.',
  ref:'Gordis, Epidemiología, cap. 17.',
  tags:['valor predictivo positivo','prevalencia','falsos positivos']
},
{
  id:'U9-MP-Q19', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Tamizaje y detección temprana', sub:'Periodo preclínico detectable',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una enfermedad que progresa muy rápido de asintomática a sintomática es mala candidata para un programa de tamizaje?',
  ops:[
    'Porque el tamizaje no tiene tiempo real de "adelantarse" al diagnóstico clínico habitual, reduciendo su valor práctico',
    'La velocidad de progresión de una enfermedad no tiene ninguna relación con la utilidad de un programa de tamizaje', 'Cuanto más rápido progresa una enfermedad, mejor candidata es para el tamizaje', 'Un periodo preclínico corto siempre facilita, en vez de dificultar, la detección temprana efectiva'],
  ok:0,
  clave:'El tamizaje no tiene tiempo real de "adelantarse" al diagnóstico clínico habitual si el periodo preclínico detectable es demasiado corto.',
  exp:'Si una enfermedad progresa de asintomática a sintomática demasiado rápido -es decir, tiene un periodo preclínico detectable muy corto-, el tamizaje no tiene tiempo real de "adelantarse" al diagnóstico clínico habitual: para cuando se detecta por tamizaje, es probable que de todas formas ya estuviera a punto de dar síntomas por sí sola, reduciendo considerablemente el valor práctico de la detección temprana en ese caso específico.',
  no:{
    1:'La velocidad de progresión sí tiene una relación directa con la utilidad práctica de un programa de tamizaje.',
    2:'Es al revés: cuanto MÁS RÁPIDO progresa una enfermedad (periodo preclínico corto), PEOR candidata es para el tamizaje, no mejor.',
    3:'Un periodo preclínico CORTO dificulta (no facilita) la detección temprana efectiva, al dejar poco margen de tiempo para adelantarse al diagnóstico clínico.'
  },
  trampa:'Invertir la relación entre velocidad de progresión de la enfermedad y utilidad del tamizaje: un periodo preclínico corto dificulta, no facilita, la detección útil.',
  obj:'Explicar por qué un periodo preclínico detectable corto reduce el valor práctico de un programa de tamizaje.',
  ref:'Gordis, Epidemiología, cap. 17.',
  tags:['periodo preclínico','velocidad de progresión','utilidad del tamizaje']
},
{
  id:'U9-MP-Q20', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Tamizaje y detección temprana', sub:'Criterio de edad para la mamografía',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la mamografía de tamizaje se recomienda a partir de cierta edad y no antes, en mujeres sin factores de riesgo adicionales?',
  ops:[
    'Porque la prevalencia de cáncer de mama en mujeres más jóvenes es considerablemente más baja, empeorando el balance entre beneficio real y falsos positivos si se aplicara antes',
    'La edad de la paciente no tiene ninguna relación con la utilidad de la mamografía de tamizaje', 'La mamografía es igualmente útil a cualquier edad, sin ninguna diferencia en su balance de beneficio y riesgo', 'Se recomienda a partir de cierta edad únicamente por razones de costo, sin relación con la prevalencia de la enfermedad'],
  ok:0,
  clave:'La prevalencia de cáncer de mama en mujeres más jóvenes es considerablemente más baja, empeorando el balance entre beneficio real y falsos positivos si se aplicara antes.',
  exp:'La mamografía de tamizaje se recomienda a partir de cierta edad, y no antes en mujeres sin factores de riesgo adicionales, precisamente porque la prevalencia de cáncer de mama en mujeres más jóvenes es considerablemente más baja: aplicarla de forma universal a edades más tempranas empeoraría el balance entre el beneficio real (pocos casos reales detectados) y los falsos positivos generados (proporcionalmente muchos, por la baja prevalencia), exponiendo a más mujeres sanas a estudios adicionales innecesarios.',
  no:{
    1:'La edad de la paciente tiene una relación directa con la prevalencia esperada de la enfermedad, y por tanto con la utilidad real del tamizaje a esa edad.',
    2:'La mamografía no tiene el mismo balance de beneficio y riesgo a cualquier edad; varía según la prevalencia esperada de cáncer de mama en cada grupo de edad.',
    3:'La recomendación de edad se basa principalmente en la prevalencia esperada de la enfermedad (relacionada con el balance beneficio-riesgo), no únicamente en el costo.'
  },
  trampa:'No reconocer que el criterio de edad para la mamografía de tamizaje se basa en la prevalencia esperada de la enfermedad en ese grupo etario, no en un límite arbitrario.',
  obj:'Explicar por qué el criterio de edad para la mamografía de tamizaje se basa en la prevalencia esperada de cáncer de mama.',
  ref:'Gordis, Epidemiología, cap. 17.',
  tags:['mamografía','criterio de edad','prevalencia por edad']
},
{
  id:'U9-MP-Q21', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Tamizaje y detección temprana', sub:'Riesgo del sobretamizaje',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué riesgo tiene un programa de tamizaje mal diseñado, aplicado a poblaciones de baja prevalencia o con frecuencia mayor a la necesaria?',
  ops:[
    'Puede generar más daño que beneficio neto, por los estudios de confirmación (algunos invasivos) que dispara cada falso positivo, sin un beneficio real proporcional',
    'Un programa de tamizaje mal diseñado nunca puede generar ningún daño real a los pacientes', 'Aplicar un tamizaje con mayor frecuencia siempre mejora el balance de beneficio y riesgo, sin ninguna excepción', 'El sobretamizaje solo afecta el presupuesto del sistema de salud, sin ningún efecto clínico sobre los pacientes'],
  ok:0,
  clave:'Puede generar más daño que beneficio neto, por los estudios de confirmación que dispara cada falso positivo, sin beneficio real proporcional.',
  exp:'Un tamizaje mal diseñado -aplicado a poblaciones de baja prevalencia, con pruebas de especificidad insuficiente, o repetido con mayor frecuencia de la necesaria- puede generar más daño que beneficio neto: cada resultado falso positivo dispara estudios de confirmación, algunos invasivos, con sus propios riesgos y costos, sin que exista un beneficio real proporcional para la salud de esa persona en particular -esta idea se retoma más adelante como el núcleo del concepto de prevención cuaternaria.',
  no:{
    1:'Un programa de tamizaje mal diseñado sí puede generar daño clínico real, precisamente a través de los estudios de confirmación innecesarios que dispara.',
    2:'Es al revés: una frecuencia MAYOR a la necesaria puede EMPEORAR (no mejorar) el balance de beneficio y riesgo, al generar más falsos positivos acumulados.',
    3:'El sobretamizaje tiene un efecto clínico real sobre los pacientes (estudios adicionales, ansiedad, riesgos de procedimientos), no solo un efecto presupuestario.'
  },
  trampa:'Subestimar el daño clínico real que puede causar un tamizaje mal diseñado, reduciéndolo erróneamente a un problema exclusivamente de costos.',
  obj:'Explicar el riesgo clínico de un programa de tamizaje mal diseñado o sobreaplicado.',
  ref:'Gordis, Epidemiología, cap. 17.',
  tags:['sobretamizaje','falsos positivos','daño por tamizaje']
},
{
  id:'U9-MP-Q22', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Tamizaje y detección temprana', sub:'Sensibilidad alta en un programa de tamizaje',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se prefiere una prueba con sensibilidad razonablemente alta para un programa de tamizaje poblacional?',
  ops:[
    'Para no dejar pasar muchos casos reales de la enfermedad, un objetivo central del tamizaje, que busca detectar a la mayor proporción posible de personas realmente enfermas',
    'La sensibilidad de la prueba no tiene ninguna relación con los objetivos de un programa de tamizaje', 'Una sensibilidad baja siempre es preferible a una alta en cualquier programa de tamizaje', 'Solo importa la especificidad de la prueba, nunca su sensibilidad, al diseñar un programa de tamizaje'],
  ok:0,
  clave:'Una sensibilidad alta evita dejar pasar muchos casos reales de la enfermedad, el objetivo central de un programa de tamizaje.',
  exp:'Se prefiere una prueba con sensibilidad razonablemente alta para un programa de tamizaje poblacional porque el objetivo central del tamizaje es detectar la mayor proporción posible de personas que realmente tienen la enfermedad, en fase preclínica; una sensibilidad baja dejaría pasar muchos casos reales sin detectar (falsos negativos), derrotando el propósito mismo del programa de detección temprana.',
  no:{
    1:'La sensibilidad tiene una relación directa y central con el objetivo principal de un programa de tamizaje: no dejar pasar casos reales.',
    2:'Es al revés: una sensibilidad ALTA (no baja) es preferible en un programa de tamizaje, precisamente para no dejar pasar casos reales.',
    3:'Tanto la sensibilidad como la especificidad importan en el diseño de un tamizaje, con la sensibilidad siendo particularmente central para no dejar pasar casos.'
  },
  trampa:'Confundir la importancia relativa de la sensibilidad frente a la especificidad en el contexto específico de un programa de tamizaje poblacional.',
  obj:'Explicar por qué se prefiere una sensibilidad razonablemente alta en una prueba de tamizaje poblacional.',
  ref:'Gordis, Epidemiología, cap. 17.',
  tags:['sensibilidad','tamizaje poblacional','falsos negativos']
},
{
  id:'U9-MP-Q23', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Prevención de enfermedades crónicas no transmisibles', sub:'Factores de riesgo compartidos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el mismo estilo de vida poco saludable puede elevar simultáneamente el riesgo de varias enfermedades crónicas distintas?',
  ops:[
    'Porque factores de riesgo modificables como el tabaquismo, el sedentarismo o la dieta poco saludable rara vez se asocian con una sola enfermedad de forma aislada',
    'Cada factor de riesgo modificable está asociado exclusivamente con una única enfermedad crónica específica', 'El estilo de vida no tiene ninguna relación real con el riesgo de desarrollar enfermedades crónicas no transmisibles', 'Solo el tabaquismo, entre todos los factores de riesgo posibles, puede asociarse con más de una enfermedad'],
  ok:0,
  clave:'Factores de riesgo modificables como el tabaquismo, el sedentarismo o la dieta poco saludable rara vez se asocian con una sola enfermedad de forma aislada.',
  exp:'Un factor de riesgo modificable (tabaquismo, sedentarismo, dieta poco saludable) rara vez se asocia con una sola enfermedad de forma aislada: el mismo estilo de vida poco saludable eleva simultáneamente el riesgo de hipertensión arterial, diabetes tipo 2, ciertos tipos de cáncer y enfermedad cardiovascular, retomando directamente el concepto de síndrome metabólico ya visto en Fisiopatología, donde varios de estos factores convergen en un mismo paciente.',
  no:{
    1:'Es precisamente lo contrario: cada factor de riesgo suele asociarse con MÚLTIPLES enfermedades crónicas distintas, no con una sola de forma exclusiva.',
    2:'El estilo de vida sí tiene una relación bien documentada y central con el riesgo de desarrollar múltiples enfermedades crónicas no transmisibles.',
    3:'Múltiples factores de riesgo (no solo el tabaquismo) se asocian con más de una enfermedad crónica simultáneamente, como el sedentarismo o la dieta poco saludable.'
  },
  trampa:'Asumir que cada factor de riesgo se asocia con una única enfermedad específica, ignorando la superposición real entre factores de riesgo y múltiples enfermedades crónicas.',
  obj:'Explicar por qué los factores de riesgo modificables suelen asociarse con múltiples enfermedades crónicas simultáneamente.',
  ref:'OMS, Informe sobre enfermedades no transmisibles.',
  tags:['factor de riesgo','enfermedad crónica no transmisible','síndrome metabólico']
},
{
  id:'U9-MP-Q24', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Prevención de enfermedades crónicas no transmisibles', sub:'Intervención individual vs. poblacional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las políticas públicas poblacionales suelen tener mayor impacto agregado que las intervenciones individuales para prevenir enfermedades crónicas no transmisibles?',
  ops:[
    'Porque no dependen de que cada persona, individualmente y por su propia voluntad, decida cambiar su comportamiento',
    'Las políticas públicas poblacionales nunca tienen ningún impacto real sobre la prevención de enfermedades crónicas', 'Las intervenciones individuales siempre tienen mayor impacto agregado que cualquier política poblacional', 'El impacto de una política pública depende exclusivamente de cuánto cueste implementarla, sin relación con su alcance poblacional'],
  ok:0,
  clave:'Las políticas poblacionales no dependen de que cada persona, individualmente, decida cambiar su comportamiento.',
  exp:'Una política pública poblacional (impuestos a productos poco saludables, regulación de publicidad, espacios urbanos que faciliten la actividad física) suele tener un mayor impacto agregado sobre la salud de toda la comunidad porque no depende de que cada persona, individualmente y por su propia voluntad, decida cambiar su comportamiento: un impuesto al tabaco, por ejemplo, reduce el consumo en toda la población simultáneamente, sin necesidad de una intervención individual caso por caso.',
  no:{
    1:'Las políticas públicas poblacionales sí tienen un impacto real y bien documentado sobre la prevención de enfermedades crónicas no transmisibles.',
    2:'Es al revés: las políticas POBLACIONALES suelen tener MAYOR impacto agregado que las intervenciones puramente individuales, no menor.',
    3:'El impacto de una política pública se relaciona principalmente con su alcance poblacional (no depender de decisiones individuales), no exclusivamente con su costo de implementación.'
  },
  trampa:'Subestimar el impacto agregado de las políticas poblacionales frente a las intervenciones individuales, o invertir la comparación entre ambos niveles.',
  obj:'Explicar por qué las políticas públicas poblacionales suelen tener mayor impacto agregado que las intervenciones individuales.',
  ref:'OMS, Informe sobre enfermedades no transmisibles.',
  tags:['política pública','nivel poblacional','impacto agregado']
},
{
  id:'U9-MP-Q25', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Prevención de enfermedades crónicas no transmisibles', sub:'Enfoque combinado individual y poblacional',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué combinar el enfoque individual y el poblacional produce mejores resultados que usar cualquiera de los dos por separado?',
  ops:[
    'Porque la evidencia acumulada en salud pública muestra que ni el enfoque puramente individual ni el puramente poblacional, usados de forma aislada, logran el máximo impacto posible',
    'Combinar ambos enfoques siempre resulta en un desperdicio de recursos, sin ningún beneficio adicional real', 'El enfoque individual, usado solo, siempre es suficiente para lograr el máximo impacto posible en la prevención', 'El enfoque poblacional, usado solo, siempre elimina por completo la necesidad de cualquier atención individualizada'],
  ok:0,
  clave:'La evidencia muestra que ni el enfoque puramente individual ni el puramente poblacional, usados de forma aislada, logran el máximo impacto posible.',
  exp:'La evidencia acumulada en salud pública muestra que combinar ambos niveles -atención individualizada para quienes ya tienen factores de riesgo identificados, junto con políticas poblacionales que modifiquen el entorno para toda la comunidad- produce resultados considerablemente mejores que cualquiera de los dos usados por separado: el enfoque individual sin cambios en el entorno lucha contra un ambiente que dificulta la opción saludable, y el enfoque puramente poblacional sin atención individualizada no atiende a quienes ya tienen un riesgo elevado específico.',
  no:{
    1:'Combinar ambos enfoques sí produce un beneficio real documentado, no un desperdicio de recursos.',
    2:'El enfoque individual usado solo NO logra el máximo impacto posible; necesita complementarse con el nivel poblacional para maximizar el resultado.',
    3:'El enfoque poblacional usado solo tampoco elimina la necesidad de atención individualizada para quienes ya tienen factores de riesgo específicos identificados.'
  },
  trampa:'Asumir que uno de los dos enfoques, usado en solitario, es suficiente por sí solo para lograr el máximo impacto preventivo posible.',
  obj:'Explicar por qué combinar el enfoque individual y el poblacional produce mejores resultados que cualquiera de los dos por separado.',
  ref:'OMS, Informe sobre enfermedades no transmisibles.',
  tags:['enfoque combinado','nivel individual','nivel poblacional']
},
{
  id:'U9-MP-Q26', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Prevención de enfermedades crónicas no transmisibles', sub:'Diferencia con la prevención de enfermedades infecciosas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué se diferencia fundamentalmente prevenir una enfermedad crónica no transmisible de prevenir una enfermedad infecciosa?',
  ops:[
    'Una enfermedad infecciosa se puede prevenir bloqueando un solo eslabón de su cadena de transmisión; una enfermedad crónica no transmisible casi siempre tiene múltiples factores de riesgo actuando a la vez',
    'No existe ninguna diferencia real entre prevenir una enfermedad infecciosa y una enfermedad crónica no transmisible', 'Una enfermedad crónica no transmisible siempre tiene una única causa identificable, igual que una enfermedad infecciosa', 'Las enfermedades infecciosas nunca pueden prevenirse bloqueando un solo eslabón de su cadena de transmisión'],
  ok:0,
  clave:'Una infecciosa se previene bloqueando un solo eslabón de transmisión; una crónica no transmisible tiene múltiples factores de riesgo actuando a la vez.',
  exp:'A diferencia de una enfermedad infecciosa, que se puede prevenir bloqueando un solo eslabón de su cadena de transmisión (por ejemplo, con una vacuna contra un único agente causal), una enfermedad crónica no transmisible casi siempre tiene múltiples factores de riesgo modificables actuando simultáneamente (tabaquismo, sedentarismo, dieta), y atacar solo uno de ellos rara vez basta para lograr un impacto preventivo significativo sobre esa enfermedad.',
  no:{
    1:'Sí existe una diferencia fundamental y bien documentada en el enfoque preventivo requerido para cada tipo de enfermedad.',
    2:'Es precisamente lo contrario: una enfermedad crónica no transmisible NO suele tener una causa única identificable, a diferencia de muchas infecciosas.',
    3:'Muchas enfermedades infecciosas sí pueden prevenirse eficazmente bloqueando un único eslabón de su cadena de transmisión, como con la vacunación.'
  },
  trampa:'No reconocer la diferencia central entre la causa única de muchas enfermedades infecciosas y los múltiples factores de riesgo simultáneos de una enfermedad crónica no transmisible.',
  obj:'Explicar la diferencia fundamental entre prevenir una enfermedad infecciosa y una enfermedad crónica no transmisible.',
  ref:'OMS, Informe sobre enfermedades no transmisibles.',
  tags:['enfermedad crónica no transmisible','enfermedad infecciosa','múltiples factores de riesgo']
},
{
  id:'U9-MP-Q27', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Prevención de enfermedades crónicas no transmisibles', sub:'Una intervención, múltiples enfermedades',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un programa de salud pública promueve la actividad física regular en toda la comunidad.',
  enunciado:'¿Qué ventaja tiene esta intervención frente a una vacuna, en términos del número de enfermedades sobre las que puede tener impacto?',
  ops:[
    'Puede reducir simultáneamente el riesgo de varias enfermedades crónicas distintas a la vez, mientras que una vacuna protege de forma específica contra un único agente infeccioso',
    'La actividad física regular solo puede prevenir un único tipo de enfermedad, igual que una vacuna', 'Una vacuna siempre protege contra más enfermedades simultáneamente que cualquier programa de actividad física', 'No existe ninguna diferencia en el alcance preventivo entre promover actividad física y aplicar una vacuna'],
  ok:0,
  clave:'Puede reducir simultáneamente el riesgo de varias enfermedades crónicas a la vez, mientras que una vacuna protege contra un único agente infeccioso específico.',
  exp:'Una intervención bien elegida como promover actividad física regular de forma sostenida puede reducir simultáneamente el riesgo de varias enfermedades crónicas distintas a la vez (hipertensión, diabetes tipo 2, ciertos cánceres, enfermedad cardiovascular), a diferencia de una vacuna, que protege de forma específica contra un único agente infeccioso en particular -una ventaja real de las intervenciones sobre estilo de vida frente a las intervenciones dirigidas a un solo agente causal.',
  no:{
    1:'La actividad física regular puede reducir el riesgo de MÚLTIPLES enfermedades crónicas simultáneamente, no solo un único tipo.',
    2:'Es al revés: una vacuna típicamente protege contra un ÚNICO agente infeccioso específico, no contra múltiples enfermedades simultáneamente.',
    3:'Sí existe una diferencia real en el alcance preventivo: la actividad física tiene un efecto más amplio sobre múltiples enfermedades que una vacuna dirigida a un agente específico.'
  },
  trampa:'No reconocer la ventaja de amplitud de las intervenciones sobre estilo de vida (múltiples enfermedades) frente a las intervenciones dirigidas a un agente único (una vacuna).',
  obj:'Explicar la ventaja de una intervención sobre estilo de vida frente a una vacuna en términos de amplitud preventiva.',
  ref:'OMS, Informe sobre enfermedades no transmisibles.',
  tags:['actividad física','amplitud preventiva','vacuna vs. estilo de vida']
},
{
  id:'U9-MP-Q28', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Prevención de enfermedades crónicas no transmisibles', sub:'Consejería individual y educación para la salud',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué otro tema de este mismo bloque se conecta directamente la consejería médica individual sobre hábitos, dentro de la prevención de enfermedades crónicas no transmisibles?',
  ops:[
    'Con la educación para la salud, que desarrolla con más detalle cómo lograr un cambio de comportamiento efectivo más allá de solo informar',
    'La consejería médica individual sobre hábitos no tiene ninguna relación con ningún otro tema de este bloque', 'Se conecta exclusivamente con el tema de inmunizaciones y esquema de vacunación', 'Se conecta exclusivamente con el tema de tamizaje y detección temprana'],
  ok:0,
  clave:'Se conecta con la educación para la salud, que desarrolla con más detalle cómo lograr un cambio de comportamiento efectivo.',
  exp:'La prevención de enfermedades crónicas no transmisibles opera en el nivel individual, en parte, a través de la consejería médica sobre hábitos personales -un tema que se retoma y desarrolla con más profundidad en el tema siguiente de educación para la salud, que explica por qué solo dar información rara vez basta para lograr un cambio de comportamiento real y sostenido, y qué elementos adicionales se necesitan.',
  no:{
    1:'La consejería médica sobre hábitos sí tiene una conexión temática directa y explícita con la educación para la salud dentro de este mismo bloque.',
    2:'La conexión temática más directa es con la educación para la salud, no con el esquema de vacunación, un tema distinto del bloque.',
    3:'La conexión temática más directa es con la educación para la salud, no con el tamizaje, aunque ambos son temas relacionados del mismo bloque.'
  },
  trampa:'No reconocer la conexión temática explícita entre la consejería individual sobre hábitos y el tema de educación para la salud dentro del mismo bloque.',
  obj:'Identificar la conexión temática entre la prevención de enfermedades crónicas y el tema de educación para la salud.',
  ref:'OMS, Informe sobre enfermedades no transmisibles.',
  tags:['consejería médica','educación para la salud','cambio de comportamiento']
},
{
  id:'U9-MP-Q29', programa:'unirm', cuatri:9,
  esp:'Medicina Preventiva', tema:'Prevención de enfermedades crónicas no transmisibles', sub:'Ejemplo de política pública poblacional',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de las siguientes es un ejemplo de intervención POBLACIONAL, más que individual, para prevenir enfermedades crónicas no transmisibles?',
  ops:[
    'Un impuesto nacional a productos ultraprocesados con alto contenido de azúcar', 'Una consulta médica donde se aconseja a un paciente específico dejar de fumar', 'Una receta médica individual para el control de la hipertensión de un paciente', 'Un plan de ejercicio personalizado diseñado para un solo paciente'],
  ok:0,
  clave:'Un impuesto nacional a productos ultraprocesados es un ejemplo de intervención poblacional, que afecta a toda la comunidad simultáneamente, no a un individuo.',
  exp:'Un impuesto nacional a productos ultraprocesados con alto contenido de azúcar es un ejemplo clásico de política pública poblacional: afecta a toda la comunidad simultáneamente, sin depender de que cada persona individualmente decida cambiar su comportamiento, a diferencia de una consulta médica, una receta o un plan de ejercicio, que son intervenciones dirigidas a un paciente específico de forma individual.',
  no:{
    1:'Aconsejar a un paciente específico es un ejemplo de intervención INDIVIDUAL, no poblacional; se dirige a una sola persona en un momento específico.',
    2:'Una receta médica individual es, por definición, una intervención dirigida a un paciente específico, no una política poblacional.',
    3:'Un plan de ejercicio personalizado para un solo paciente es, por definición, una intervención individual, no una intervención poblacional.'
  },
  trampa:'Confundir una intervención individual (dirigida a un paciente específico) con una intervención poblacional (que afecta a toda una comunidad simultáneamente).',
  obj:'Distinguir un ejemplo de intervención poblacional de ejemplos de intervención individual.',
  ref:'OMS, Informe sobre enfermedades no transmisibles.',
  tags:['política pública poblacional','intervención individual','ejemplo de política']
}

]);
