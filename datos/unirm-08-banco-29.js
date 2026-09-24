/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE EPIDEMIOLOGIA (1/2)
   Amplia Epidemiologia de 3 a 50 preguntas junto con banco-30.js.
   Esta parte cubre conceptos/usos, medidas de frecuencia,
   medidas de asociacion, medidas de impacto, estudios
   descriptivos/transversales, casos y controles y cohortes
   (temas 1-7).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== EPIDEMIOLOGIA ===================== */
{
  id:'U8-E-Q04', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Conceptos de epidemiología', sub:'Epidemia como exceso',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué define a una epidemia, más allá del número absoluto de casos observados?',
  ops:[
    'Un número fijo universal de casos, el mismo para cualquier enfermedad',
    'Un EXCESO en la frecuencia de la enfermedad respecto al nivel esperado para esa población y ese momento específico',
    'Que la enfermedad afecte a más de un millón de personas',
    'Que la enfermedad sea necesariamente mortal'
  ],
  ok:1,
  clave:'Una epidemia se define por el exceso respecto a lo esperado para esa población y momento, no por un umbral numérico fijo.',
  exp:'Una epidemia ocurre cuando la frecuencia de una enfermedad supera claramente el nivel esperado para esa población en ese momento, sin importar si el número absoluto de casos es alto o bajo en términos absolutos -lo relevante es el EXCESO respecto a lo esperado, no un umbral numérico fijo universal. Un aumento de pocos casos de una enfermedad que normalmente tiene cero casos puede constituir una epidemia en ese contexto específico.',
  no:{
    0:'No existe un número fijo universal; el criterio es relativo al patrón histórico esperado de cada enfermedad en cada población específica.',
    2:'No se requiere un número mínimo de personas afectadas como un millón; una epidemia puede involucrar un número mucho menor de casos, si ese número representa un exceso claro respecto a lo esperado.',
    3:'Una epidemia no requiere que la enfermedad sea mortal; el concepto se refiere al exceso de frecuencia, sin importar la gravedad o letalidad de la condición.'
  },
  trampa:'Buscar un umbral numérico fijo o universal para definir epidemia, en vez de entender el concepto como relativo al patrón esperado de cada enfermedad y población.',
  obj:'Definir epidemia como un exceso relativo, no como un umbral numérico absoluto.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['epidemia','exceso de frecuencia','endemia','brote']
},
{
  id:'U8-E-Q05', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Conceptos de epidemiología', sub:'Tríada epidemiológica',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son los tres ejes clásicos que describe sistemáticamente la epidemiología para caracterizar una enfermedad?',
  ops:['Persona, lugar y tiempo', 'Solo la edad de los pacientes', 'Únicamente el país donde ocurre', 'Solo la estación del año'],
  ok:0,
  clave:'Persona, lugar y tiempo son los tres ejes clásicos de la descripción epidemiológica.',
  exp:'La epidemiología estudia sistemáticamente la distribución de las enfermedades según tres ejes clásicos: persona (quién se enferma), lugar (dónde ocurre) y tiempo (cuándo ocurre). Describir sistemáticamente estos tres ejes para una enfermedad determinada revela patrones que orientan hacia hipótesis sobre sus determinantes.',
  no:{
    1:'La edad es solo un componente del eje "persona", no la tríada completa, que incluye también lugar y tiempo.',
    2:'El lugar es solo uno de los tres ejes; falta considerar también persona y tiempo para la descripción completa.',
    3:'La estación del año es solo un componente del eje "tiempo"; falta considerar también persona y lugar.'
  },
  trampa:'Reducir la tríada epidemiológica a solo uno de sus tres componentes.',
  obj:'Identificar los tres ejes clásicos de la tríada epidemiológica.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['tríada epidemiológica','persona','lugar','tiempo']
},
{
  id:'U8-E-Q06', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Vigilancia epidemiológica', sub:'Propósito',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el propósito central de un sistema de vigilancia epidemiológica?',
  ops:[
    'Solo llevar un registro estadístico pasivo, sin ninguna acción posterior',
    'Recolectar, analizar e interpretar CONTINUAMENTE datos de salud para guiar la acción de salud pública, incluyendo la detección oportuna de excesos que ameriten investigación',
    'Reemplazar por completo a los estudios epidemiológicos analíticos',
    'La vigilancia epidemiológica no tiene ningún propósito práctico'
  ],
  ok:1,
  clave:'La vigilancia epidemiológica recolecta datos continuamente para guiar la acción de salud pública, incluyendo detectar excesos que activen investigación.',
  exp:'La vigilancia epidemiológica es la recolección, análisis e interpretación CONTINUA y sistemática de datos de salud, con el propósito explícito de guiar la acción de salud pública -no es solo "llevar estadísticas", es un sistema diseñado para detectar cambios inusuales en la frecuencia de una enfermedad y activar una respuesta oportuna, como la investigación de un posible brote.',
  no:{
    0:'La vigilancia epidemiológica no es un registro pasivo; está diseñada específicamente para activar acciones concretas cuando detecta patrones inusuales.',
    2:'La vigilancia no reemplaza a los estudios analíticos; con frecuencia los complementa, activando investigaciones (que pueden incluir estudios analíticos como casos y controles) cuando detecta un exceso.',
    3:'La vigilancia epidemiológica tiene un propósito práctico central: guiar decisiones de salud pública basadas en datos continuos y actualizados.'
  },
  trampa:'Subestimar el propósito activo de la vigilancia epidemiológica, tratándola como un registro meramente descriptivo sin conexión a la acción de salud pública.',
  obj:'Explicar el propósito de un sistema de vigilancia epidemiológica.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['vigilancia epidemiológica','determinantes de salud','acción de salud pública']
},
{
  id:'U8-E-Q07', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Medidas de frecuencia', sub:'Prevalencia vs. incidencia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia fundamental hay entre prevalencia e incidencia?',
  ops:[
    'Son exactamente el mismo concepto con nombres distintos',
    'La prevalencia es una "fotografía" de cuántos ESTÁN enfermos en un momento dado; la incidencia es una "película" de cuántos casos NUEVOS aparecen durante un periodo',
    'La incidencia siempre es mayor que la prevalencia',
    'La prevalencia solo aplica a enfermedades infecciosas'
  ],
  ok:1,
  clave:'Prevalencia = fotografía de enfermos actuales. Incidencia = película de casos nuevos durante un periodo.',
  exp:'La prevalencia es la proporción de una población que TIENE una enfermedad en un momento determinado, sin distinguir casos nuevos de antiguos -una "fotografía". La incidencia mide la aparición de casos NUEVOS durante un periodo de tiempo -una "película". Son conceptos relacionados pero distintos: la prevalencia depende tanto de la incidencia como de la duración de la enfermedad.',
  no:{
    0:'Son conceptos claramente distintos, aunque relacionados matemáticamente (prevalencia ≈ incidencia × duración).',
    2:'No hay una relación fija de magnitud entre ambas; depende de la duración de la enfermedad -para enfermedades crónicas de larga duración, la prevalencia puede ser mucho mayor que la incidencia anual.',
    3:'La prevalencia puede aplicarse a cualquier condición de salud medible en un momento dado, no exclusivamente a enfermedades infecciosas.'
  },
  trampa:'Tratar prevalencia e incidencia como sinónimos intercambiables, sin reconocer la diferencia conceptual fundamental entre "estado actual" y "casos nuevos".',
  obj:'Distinguir conceptualmente la prevalencia de la incidencia.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['prevalencia','incidencia','medidas de frecuencia','fotografía vs. película']
},
{
  id:'U8-E-Q08', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Medidas de frecuencia', sub:'Denominador de la incidencia',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el denominador de la incidencia debe incluir SOLO a personas en riesgo, excluyendo a quienes ya tienen la enfermedad o son inmunes?',
  ops:[
    'No importa a quién se incluya en el denominador; el resultado es idéntico',
    'Porque las personas que ya tienen la enfermedad o son inmunes no pueden convertirse en "casos nuevos" durante el periodo estudiado, así que incluirlas distorsionaría la medida',
    'Porque la incidencia nunca requiere un denominador',
    'Porque solo los hombres deben incluirse en el denominador de cualquier medida de incidencia'
  ],
  ok:1,
  clave:'Las personas ya enfermas o inmunes no pueden generar un caso nuevo, así que deben excluirse del denominador para no distorsionar la medida.',
  exp:'La incidencia mide la aparición de casos NUEVOS en una población en riesgo. Las personas que ya tienen la enfermedad, o que son inmunes por otra razón (como ya haberla padecido con inmunidad permanente), deben excluirse del denominador, porque no pueden convertirse en "casos nuevos" durante el periodo estudiado -incluirlas en el denominador subestimaría artificialmente la incidencia real entre quienes verdaderamente están en riesgo.',
  no:{
    0:'Sí importa: incluir en el denominador a personas que no pueden desarrollar el desenlace distorsiona (generalmente subestima) la incidencia real entre los verdaderamente en riesgo.',
    2:'La incidencia sí requiere un denominador (la población en riesgo) para poder calcularse como una proporción o tasa.',
    3:'El denominador de la incidencia se define por el criterio de estar en riesgo de la enfermedad, no por el sexo de las personas, salvo que la enfermedad sea específica de un sexo.'
  },
  trampa:'No reconocer por qué es metodológicamente importante depurar el denominador de la incidencia, excluyendo a quienes no pueden convertirse en casos nuevos.',
  obj:'Explicar por qué el denominador de la incidencia debe limitarse a la población en riesgo.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['incidencia','población en riesgo','denominador','inmunidad']
},
{
  id:'U8-E-Q09', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Densidad de incidencia', sub:'Tiempo-persona',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un estudio de cohortes, los participantes fueron reclutados en distintos momentos y algunos se perdieron del seguimiento antes de tiempo, así que el tiempo de observación varió considerablemente entre ellos.',
  enunciado:'¿Qué medida de frecuencia es la más apropiada para este escenario, en vez de la incidencia acumulada simple?',
  ops:[
    'Prevalencia', 'Densidad de incidencia (tasa de incidencia), usando el tiempo-persona acumulado como denominador', 'Razón de momios', 'Ninguna medida de frecuencia puede calcularse con tiempos de seguimiento distintos'],
  ok:1,
  clave:'La densidad de incidencia, usando tiempo-persona como denominador, es apropiada cuando el tiempo de seguimiento varía entre participantes.',
  exp:'La densidad de incidencia (tasa de incidencia) usa como denominador el tiempo-persona acumulado en riesgo, en vez de simplemente el número de personas en riesgo al inicio del estudio -especialmente útil cuando distintas personas se siguen durante periodos de tiempo distintos, como en el escenario descrito. Al usar el tiempo-persona, da una medida más precisa cuando el tiempo de observación no es uniforme entre los participantes.',
  no:{
    0:'La prevalencia mide el estado en un momento dado, no la aparición de casos nuevos a lo largo de un seguimiento con tiempos variables.',
    2:'La razón de momios es una medida de asociación (comparación entre grupos), no una medida de frecuencia como la densidad de incidencia.',
    3:'Sí puede calcularse una medida apropiada (densidad de incidencia) precisamente diseñada para manejar tiempos de seguimiento no uniformes entre participantes.'
  },
  trampa:'Usar la incidencia acumulada simple sin ajustar por el tiempo de seguimiento variable, cuando la densidad de incidencia es la medida apropiada para ese escenario.',
  obj:'Elegir la densidad de incidencia como medida apropiada cuando el tiempo de seguimiento varía entre participantes.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['densidad de incidencia','tiempo-persona','seguimiento variable','tasa de incidencia']
},
{
  id:'U8-E-Q10', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Medidas de asociación', sub:'Cuándo calcular riesgo relativo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué tipo de diseño de estudio puede calcularse directamente un riesgo relativo verdadero?',
  ops:[
    'Solo en estudios de casos y controles',
    'En estudios de cohortes y ensayos clínicos, donde se conoce la incidencia real en los grupos comparados',
    'En cualquier tipo de estudio, sin excepción',
    'El riesgo relativo nunca puede calcularse directamente en ningún diseño'
  ],
  ok:1,
  clave:'El riesgo relativo requiere conocer la incidencia real, posible solo en cohortes y ensayos clínicos.',
  exp:'Calcular un riesgo relativo requiere conocer la incidencia REAL en ambos grupos comparados, lo cual solo es posible en estudios donde se sigue a una población a lo largo del tiempo desde la exposición hasta el desenlace -estudios de cohortes y ensayos clínicos, no estudios de casos y controles, donde el número de casos y controles se fija de antemano por el investigador.',
  no:{
    0:'Es precisamente lo contrario: en casos y controles NO puede calcularse un riesgo relativo directo; se usa la razón de momios como aproximación.',
    2:'No en cualquier diseño; específicamente no en casos y controles, donde el número de casos y controles se decide de antemano, alterando la proporción real de enfermos.',
    3:'Sí puede calcularse directamente en los diseños apropiados (cohortes, ensayos clínicos), donde se conoce la incidencia real de los grupos comparados.'
  },
  trampa:'No reconocer la limitación específica de los estudios de casos y controles para calcular directamente un riesgo relativo, a diferencia de cohortes y ensayos clínicos.',
  obj:'Identificar los diseños de estudio que permiten calcular directamente un riesgo relativo.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['riesgo relativo','estudios de cohortes','ensayo clínico','incidencia real']
},
{
  id:'U8-E-Q11', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Razón de momios', sub:'Aproximación al riesgo relativo',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué condición la razón de momios se aproxima razonablemente bien al riesgo relativo verdadero?',
  ops:[
    'Cuando la enfermedad estudiada es RARA en la población (convencionalmente, prevalencia menor al 10%)',
    'Cuando la enfermedad es muy frecuente en la población, sin importar qué tan frecuente',
    'La razón de momios nunca se aproxima al riesgo relativo, bajo ninguna condición',
    'Solo cuando el estudio es un ensayo clínico aleatorizado'
  ],
  ok:0,
  clave:'La razón de momios aproxima bien al riesgo relativo cuando la enfermedad es rara (convencionalmente, prevalencia menor al 10%).',
  exp:'Cuando la enfermedad estudiada es RARA en la población (una convención práctica habitual es una prevalencia menor al 10%), la razón de momios se aproxima razonablemente bien al riesgo relativo verdadero. Cuando la enfermedad es FRECUENTE, la razón de momios puede sobreestimar considerablemente al riesgo relativo verdadero, así que en ese caso ambas medidas ya no son intercambiables.',
  no:{
    1:'Es al revés: con enfermedades FRECUENTES, la razón de momios se aleja del riesgo relativo verdadero, sobreestimándolo; la buena aproximación ocurre con enfermedades raras.',
    2:'Sí existe una condición específica (enfermedad rara) bajo la cual la aproximación es razonable, aunque no sea una equivalencia matemática exacta.',
    3:'La aproximación entre razón de momios y riesgo relativo se relaciona con la frecuencia de la enfermedad estudiada, no con el tipo de diseño del estudio en sí.'
  },
  trampa:'Invertir la condición (rara vs. frecuente) bajo la cual la razón de momios aproxima razonablemente bien al riesgo relativo.',
  obj:'Identificar la condición de rareza de la enfermedad bajo la cual la razón de momios aproxima al riesgo relativo.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['razón de momios','riesgo relativo','enfermedad rara','aproximación estadística']
},
{
  id:'U8-E-Q12', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Medidas de asociación', sub:'Interpretación del riesgo relativo',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'Un estudio reporta un riesgo relativo de 0.4 para una exposición determinada. ¿Cómo debe interpretarse este resultado?',
  ops:[
    'La exposición aumenta el riesgo del desenlace', 'La exposición parece ser un factor PROTECTOR, asociado a menor riesgo del desenlace', 'No existe ninguna asociación entre la exposición y el desenlace', 'Un riesgo relativo menor a 1 siempre indica un error en el estudio'],
  ok:1,
  clave:'Un riesgo relativo menor a 1 sugiere que la exposición es un factor protector, asociado a menor riesgo.',
  exp:'Un riesgo relativo (RR) menor a 1 sugiere que la exposición está asociada a un MENOR riesgo del desenlace, comportándose como un factor protector -en este caso, un RR de 0.4 indica que los expuestos tienen el 40% del riesgo de los no expuestos (una reducción relativa del 60%). Un RR de 1 indicaría ausencia de asociación, y un RR mayor a 1 indicaría un factor de riesgo que aumenta la probabilidad del desenlace.',
  no:{
    0:'Un RR menor a 1 indica lo contrario: la exposición se asocia a MENOR riesgo, no a mayor riesgo del desenlace.',
    2:'Un RR de 0.4, claramente distinto de 1, sí sugiere una asociación (en este caso, protectora), no una ausencia de asociación.',
    3:'Un RR menor a 1 no indica un error del estudio; es un resultado válido que sugiere un efecto protector de la exposición estudiada.'
  },
  trampa:'Interpretar cualquier riesgo relativo distinto de 1 como indicativo de aumento de riesgo, sin distinguir entre valores mayores y menores a 1.',
  obj:'Interpretar correctamente un riesgo relativo menor a 1 como indicativo de un factor protector.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['riesgo relativo','factor protector','interpretación estadística','medidas de asociación']
},
{
  id:'U8-E-Q13', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Medidas de impacto', sub:'Riesgo atribuible',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre el riesgo relativo y el riesgo atribuible?',
  ops:[
    'El riesgo relativo es una diferencia absoluta; el riesgo atribuible es un cociente',
    'El riesgo relativo es un cociente (razón proporcional); el riesgo atribuible es una diferencia absoluta entre las incidencias',
    'Ambos términos son exactamente sinónimos',
    'El riesgo atribuible nunca puede calcularse en epidemiología'
  ],
  ok:1,
  clave:'El riesgo relativo es un cociente (razón); el riesgo atribuible es una diferencia absoluta (resta) entre incidencias.',
  exp:'El riesgo relativo es un COCIENTE (razón proporcional) entre la incidencia en expuestos y no expuestos, midiendo la fuerza proporcional de la asociación. El riesgo atribuible (o diferencia de riesgo) es una DIFERENCIA ABSOLUTA entre esas mismas incidencias, midiendo el impacto absoluto atribuible a la exposición, en las mismas unidades que la incidencia. Son dos preguntas distintas: fuerza proporcional contra impacto absoluto.',
  no:{
    0:'Está invertido: el riesgo relativo es el cociente, y el riesgo atribuible es la diferencia absoluta, no al revés.',
    2:'Son conceptos claramente distintos, que miden aspectos diferentes de la misma asociación (proporcional contra absoluto).',
    3:'El riesgo atribuible sí puede y se calcula habitualmente en epidemiología, precisamente para estimar el impacto absoluto de una exposición.'
  },
  trampa:'Invertir cuál medida (riesgo relativo o atribuible) corresponde a un cociente y cuál a una diferencia absoluta.',
  obj:'Distinguir el riesgo relativo (cociente) del riesgo atribuible (diferencia absoluta).',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['riesgo atribuible','riesgo relativo','diferencia absoluta','medidas de impacto']
},
{
  id:'U8-E-Q14', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Fracción atribuible poblacional', sub:'Priorización de intervenciones',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una exposición A tiene un riesgo relativo muy alto (RR=10) pero es poco frecuente en la población (5% expuestos). Una exposición B tiene un riesgo relativo más modesto (RR=2) pero es muy común (60% expuestos).',
  enunciado:'¿Qué factor determina cuál de las dos exposiciones podría tener mayor impacto poblacional total (fracción atribuible poblacional), más allá de comparar solo los riesgos relativos?',
  ops:[
    'Solo el riesgo relativo importa; la exposición A siempre tendrá mayor impacto poblacional por tener el RR más alto',
    'La fracción atribuible poblacional depende TANTO de la fuerza de la asociación (riesgo relativo) COMO de qué tan frecuente es la exposición en la población',
    'La frecuencia de la exposición nunca influye en el impacto poblacional',
    'Ambas exposiciones tienen automáticamente el mismo impacto poblacional'
  ],
  ok:1,
  clave:'La fracción atribuible poblacional depende tanto del riesgo relativo como de la frecuencia de la exposición en la población.',
  exp:'La fracción atribuible poblacional (la proporción de todos los casos en la población total que se deben a una exposición determinada) depende tanto de la fuerza de la asociación (el riesgo relativo) como de qué tan común es esa exposición en la población. Una exposición con RR alto pero rara puede tener un impacto poblacional total menor que una exposición con RR más modesto pero muy frecuente -en este caso, la exposición B (más frecuente) podría tener mayor impacto poblacional total pese a su RR menor, dependiendo de los números exactos.',
  no:{
    0:'No solo el riesgo relativo importa; la frecuencia de la exposición en la población es igualmente relevante para el impacto poblacional total.',
    2:'La frecuencia de la exposición sí influye directamente en el impacto poblacional; es uno de los dos factores clave junto con el riesgo relativo.',
    3:'Las dos exposiciones no tienen automáticamente el mismo impacto poblacional; depende de la combinación específica de riesgo relativo y frecuencia de cada una.'
  },
  trampa:'Asumir que el riesgo relativo por sí solo determina la prioridad de una intervención de salud pública, sin considerar la frecuencia de la exposición en la población.',
  obj:'Explicar por qué la fracción atribuible poblacional depende tanto del riesgo relativo como de la frecuencia de la exposición.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['fracción atribuible poblacional','impacto poblacional','priorización de intervenciones','riesgo relativo']
},
{
  id:'U8-E-Q15', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'NNT', sub:'Interpretación clínica',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un nuevo tratamiento reporta un riesgo relativo impresionante (reducción del 50% del riesgo), pero al calcular el número necesario a tratar (NNT), resulta ser 500.',
  enunciado:'¿Qué información adicional aporta el NNT de 500 sobre la relevancia clínica práctica de este tratamiento?',
  ops:[
    'Ninguna; el riesgo relativo del 50% ya es toda la información necesaria',
    'Revela que, pese al riesgo relativo impresionante, el beneficio absoluto es pequeño: hay que tratar a 500 pacientes para evitar un solo evento adverso adicional',
    'Un NNT de 500 siempre indica un tratamiento extremadamente eficiente',
    'El NNT no tiene ninguna relación con el riesgo relativo reportado'
  ],
  ok:1,
  clave:'Un NNT de 500 revela que, pese al RR impresionante, el beneficio absoluto es pequeño: se necesitan 500 pacientes tratados para evitar un evento.',
  exp:'El número necesario a tratar (NNT) es el inverso del riesgo atribuible, y responde a cuántos pacientes hay que tratar para evitar UN desenlace adicional. Un NNT de 500, pese a un riesgo relativo reportado como "impresionante" (50% de reducción), revela que el beneficio ABSOLUTO de este tratamiento es pequeño -la diferencia de riesgo absoluta entre tratados y no tratados es muy pequeña, aunque proporcionalmente parezca grande. El NNT es el complemento necesario al riesgo relativo para juzgar la relevancia clínica práctica.',
  no:{
    0:'El riesgo relativo solo no es suficiente información; el NNT revela el beneficio absoluto real, que puede ser muy distinto de lo que sugiere el riesgo relativo aislado.',
    2:'Un NNT de 500 indica, al contrario, una eficiencia BAJA (se necesitan muchos pacientes tratados para un solo beneficio), no una eficiencia alta.',
    3:'El NNT sí está matemáticamente relacionado con el riesgo relativo y la incidencia basal, a través del cálculo del riesgo atribuible.'
  },
  trampa:'Confiar únicamente en el riesgo relativo reportado sin calcular o considerar el NNT, que revela el beneficio absoluto real de una intervención.',
  obj:'Interpretar el NNT como complemento del riesgo relativo para juzgar relevancia clínica práctica.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['NNT','número necesario a tratar','beneficio absoluto','riesgo relativo']
},
{
  id:'U8-E-Q16', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Estudios descriptivos', sub:'Generar vs. probar hipótesis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la principal limitación de los estudios descriptivos (reporte de caso, serie de casos) para establecer relaciones causales?',
  ops:[
    'Carecen de un grupo de comparación formal, así que no pueden evaluar si lo observado es distinto de lo esperado sin la exposición sospechada',
    'Los estudios descriptivos siempre prueban causalidad de forma definitiva',
    'Los estudios descriptivos nunca son útiles en medicina',
    'Los estudios descriptivos requieren muestras extremadamente grandes'
  ],
  ok:0,
  clave:'Los estudios descriptivos carecen de grupo de comparación, así que no pueden evaluar causalidad, solo generar hipótesis.',
  exp:'Los estudios descriptivos documentan la ocurrencia de una enfermedad o hallazgo clínico sin un grupo de comparación formal ni un diseño analítico riguroso. Su valor principal es GENERAR hipótesis, no PROBAR relaciones causales, porque sin un grupo de comparación no puede evaluarse si lo observado es distinto de lo esperado en ausencia de la exposición sospechada. Muchos descubrimientos médicos importantes comenzaron como series de casos que después se confirmaron con estudios analíticos más rigurosos.',
  no:{
    1:'Es precisamente lo contrario: los estudios descriptivos NO prueban causalidad de forma definitiva, solo generan hipótesis para investigación posterior.',
    2:'Los estudios descriptivos sí son útiles, precisamente como generadores de hipótesis y alertas tempranas que orientan investigaciones más rigurosas después.',
    3:'Los estudios descriptivos (como reporte de caso o serie de casos) típicamente involucran muestras pequeñas, no grandes; esa no es su limitación principal.'
  },
  trampa:'No reconocer la ausencia de grupo de comparación como la limitación fundamental de los estudios descriptivos para establecer causalidad.',
  obj:'Explicar la limitación de los estudios descriptivos para establecer relaciones causales.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['estudios descriptivos','serie de casos','generación de hipótesis','grupo de comparación']
},
{
  id:'U8-E-Q17', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Estudio transversal', sub:'Limitación de secuencia temporal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la limitación fundamental e inevitable de un estudio transversal para inferir causalidad?',
  ops:[
    'No puede establecer con certeza la secuencia TEMPORAL entre exposición y desenlace, porque ambos se miden simultáneamente',
    'Los estudios transversales no pueden estimar prevalencia',
    'Los estudios transversales siempre requieren décadas de seguimiento',
    'No existe ninguna limitación real en los estudios transversales'
  ],
  ok:0,
  clave:'El estudio transversal mide exposición y desenlace simultáneamente, así que no puede establecer secuencia temporal entre ambos.',
  exp:'El estudio transversal mide la exposición y el desenlace en el MISMO momento. Su limitación fundamental e inevitable es que, al medir ambas variables simultáneamente, no puede establecer con certeza la secuencia TEMPORAL entre exposición y desenlace -no se puede saber si la exposición precedió al desenlace o si ocurrió causalidad inversa, un requisito esencial para inferir causalidad (el único criterio de Bradford Hill verdaderamente indispensable).',
  no:{
    1:'Los estudios transversales sí son el diseño apropiado para estimar prevalencia; esa es precisamente una de sus fortalezas, no una limitación.',
    2:'Los estudios transversales son, de hecho, rápidos de realizar, precisamente porque miden todo en un solo momento, sin requerir seguimiento prolongado.',
    3:'Sí existe una limitación real y fundamental: la imposibilidad de establecer secuencia temporal entre exposición y desenlace.'
  },
  trampa:'No reconocer la imposibilidad de establecer secuencia temporal como la limitación central e inevitable del diseño transversal.',
  obj:'Explicar la limitación de secuencia temporal de los estudios transversales.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['estudio transversal','secuencia temporal','causalidad inversa','prevalencia']
},
{
  id:'U8-E-Q18', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Falacia ecológica', sub:'Datos agregados vs. individuales',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudio ecológico encuentra que los países con mayor consumo promedio de sal tienen tasas más altas de hipertensión, y un investigador concluye que las personas que más sal consumen dentro de cada país son las que más hipertensión tienen.',
  enunciado:'¿Qué error de interpretación comete el investigador?',
  ops:[
    'Ninguno; una asociación a nivel poblacional siempre se cumple a nivel individual',
    'La falacia ecológica: una asociación observada a nivel poblacional (agregado) no necesariamente se cumple a nivel individual',
    'Los estudios ecológicos nunca pueden usarse para generar ninguna hipótesis',
    'El consumo de sal no tiene ninguna relación con la hipertensión en ningún nivel'
  ],
  ok:1,
  clave:'Asumir que una asociación poblacional se cumple a nivel individual es la falacia ecológica.',
  exp:'La falacia ecológica es el riesgo central de interpretar datos agregados (poblacionales) como si aplicaran directamente a nivel individual -una asociación entre poblaciones (mayor consumo promedio de sal, mayor tasa de hipertensión) no garantiza que las mismas personas que consumen más sal dentro de cada población sean las que tienen hipertensión; la asociación poblacional podría deberse a otro factor que varía junto con el consumo de sal entre esas poblaciones.',
  no:{
    0:'Es precisamente el error contrario: una asociación poblacional NO garantiza que se cumpla a nivel individual, ese es el núcleo de la falacia ecológica.',
    2:'Los estudios ecológicos sí pueden generar hipótesis útiles, aunque no pueden confirmar relaciones a nivel individual por sí solos.',
    3:'El consumo de sal sí puede tener relación con la hipertensión, pero el punto de la pregunta es que esa relación no puede confirmarse a nivel individual solo con datos ecológicos agregados.'
  },
  trampa:'Extrapolar directamente una asociación observada a nivel poblacional (agregado) hacia una conclusión sobre individuos, sin reconocer el riesgo de la falacia ecológica.',
  obj:'Identificar la falacia ecológica al interpretar datos de un estudio ecológico.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['falacia ecológica','estudio ecológico','datos agregados','nivel individual']
},
{
  id:'U8-E-Q19', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Casos y controles', sub:'Eficiencia para enfermedades raras',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el diseño de casos y controles es especialmente eficiente para estudiar enfermedades RARAS?',
  ops:[
    'Porque parte de casos ya existentes de la enfermedad, sin necesidad de seguir a una población enorme durante años esperando que aparezcan pocos casos nuevos',
    'Porque siempre requiere una muestra mayor que un estudio de cohortes',
    'Porque las enfermedades raras nunca pueden estudiarse con ningún diseño',
    'Porque calcula directamente la incidencia real de la enfermedad'
  ],
  ok:0,
  clave:'Casos y controles parte de casos ya existentes, sin necesidad de seguir a una población enorme esperando la aparición de casos nuevos raros.',
  exp:'El estudio de casos y controles identifica primero a personas que YA TIENEN la enfermedad (los casos), sin necesidad de seguir a una población enorme durante años esperando que aparezcan pocos casos nuevos, como requeriría un estudio de cohortes para una enfermedad rara. Esta lógica retrospectiva es lo que hace a este diseño muy eficiente y práctico para enfermedades poco frecuentes.',
  no:{
    1:'Un estudio de casos y controles típicamente requiere una muestra MENOR que un estudio de cohortes para lograr potencia similar en una enfermedad rara, precisamente por su eficiencia.',
    2:'Las enfermedades raras sí pueden estudiarse, y precisamente el diseño de casos y controles es el más eficiente para hacerlo.',
    3:'Los estudios de casos y controles NO calculan la incidencia real; usan la razón de momios como medida de asociación, precisamente porque no pueden calcular incidencia.'
  },
  trampa:'No reconocer la ventaja específica de eficiencia del diseño de casos y controles para enfermedades raras, comparado con la ineficiencia de un estudio de cohortes en ese mismo contexto.',
  obj:'Explicar por qué el diseño de casos y controles es eficiente para estudiar enfermedades raras.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['casos y controles','enfermedad rara','eficiencia del diseño','diseño retrospectivo']
},
{
  id:'U8-E-Q20', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Sesgo de memoria', sub:'Vulnerabilidad de casos y controles',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el sesgo de memoria es una vulnerabilidad especialmente relevante en los estudios de casos y controles?',
  ops:[
    'Las personas que YA tienen una enfermedad pueden recordar su exposición previa de forma distinta que las personas sanas, distorsionando la asociación observada',
    'El sesgo de memoria afecta por igual a todos los diseños de estudio, sin ninguna particularidad',
    'El sesgo de memoria no tiene ninguna relación con el diseño retrospectivo',
    'Los controles siempre recuerdan su exposición con mayor precisión que los casos'
  ],
  ok:0,
  clave:'Los casos (ya enfermos) pueden recordar su exposición de forma distinta que los controles sanos, distorsionando la asociación observada.',
  exp:'El sesgo de memoria (recall bias) es la vulnerabilidad más característica de los estudios de casos y controles: las personas que YA tienen una enfermedad (los casos) pueden recordar su exposición previa de forma distinta -con frecuencia más detallada o con sesgo hacia "buscar explicaciones"- que las personas sanas (los controles), simplemente por estar enfermas y haber reflexionado más sobre posibles causas de su condición.',
  no:{
    1:'El sesgo de memoria es especialmente relevante en diseños RETROSPECTIVOS que dependen del recuerdo de exposiciones pasadas, mucho menos en diseños prospectivos donde la exposición se registra antes del desenlace.',
    2:'El sesgo de memoria está directamente relacionado con el carácter retrospectivo del diseño de casos y controles, que depende del recuerdo de exposiciones pasadas.',
    3:'No hay ninguna razón para asumir que los controles recuerden con mayor precisión; de hecho, el sesgo típicamente favorece un recuerdo más elaborado en los casos, no en los controles.'
  },
  trampa:'No reconocer la relación directa entre el carácter retrospectivo del diseño de casos y controles y la vulnerabilidad específica al sesgo de memoria.',
  obj:'Explicar por qué el sesgo de memoria es una vulnerabilidad característica de los estudios de casos y controles.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['sesgo de memoria','recall bias','casos y controles','diseño retrospectivo']
},
{
  id:'U8-E-Q21', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Selección de controles', sub:'Importancia metodológica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la selección de los controles es uno de los pasos metodológicamente más delicados en un estudio de casos y controles?',
  ops:[
    'Porque los controles deben ser representativos de la población de la que provienen los casos y comparables en todo excepto en el desenlace, y una selección inadecuada puede introducir sesgo de selección difícil de corregir',
    'Porque los controles nunca influyen en los resultados del estudio',
    'Porque los controles siempre deben tener exactamente la misma edad que los casos, sin ninguna otra consideración',
    'La selección de controles no requiere ningún criterio metodológico específico'
  ],
  ok:0,
  clave:'Los controles deben ser representativos y comparables a los casos; una selección inadecuada introduce sesgo de selección difícil de corregir después.',
  exp:'Elegir bien a los controles -que sean representativos de la población de la que provienen los casos, y comparables en todo excepto en el desenlace de interés- es uno de los pasos metodológicamente más delicados de este diseño, porque una selección inadecuada de controles puede introducir un sesgo de selección que distorsione la asociación observada de forma difícil de corregir después del hecho.',
  no:{
    1:'Los controles sí influyen directamente en los resultados; una selección inadecuada puede distorsionar significativamente la asociación observada.',
    2:'La edad es solo uno de varios factores de comparabilidad a considerar; el criterio general es representatividad y comparabilidad en múltiples características relevantes, no solo la edad.',
    3:'La selección de controles sí requiere criterios metodológicos específicos y cuidadosos, precisamente para evitar sesgo de selección.'
  },
  trampa:'Subestimar la importancia metodológica de la selección de controles, tratándola como un paso trivial o sin consecuencias para la validez del estudio.',
  obj:'Explicar la importancia metodológica de la selección adecuada de controles en un estudio de casos y controles.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['selección de controles','sesgo de selección','representatividad','comparabilidad']
},
{
  id:'U8-E-Q22', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Estudios de cohortes', sub:'Ventaja de temporalidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el estudio de cohortes es metodológicamente más robusto que el de casos y controles para establecer el criterio de temporalidad de causalidad?',
  ops:[
    'Porque sigue la secuencia temporal natural: parte de la exposición (antes del desenlace) y observa hacia adelante quién desarrolla la enfermedad',
    'Porque los estudios de cohortes nunca requieren ningún seguimiento en el tiempo',
    'Porque el orden temporal no importa en ningún tipo de estudio epidemiológico',
    'Los estudios de casos y controles siempre establecen mejor la temporalidad que los de cohortes'
  ],
  ok:0,
  clave:'El estudio de cohortes parte de la exposición y observa hacia adelante, siguiendo la secuencia temporal natural de causa-efecto.',
  exp:'El estudio de cohortes identifica a un grupo de personas SIN la enfermedad, clasificadas según su exposición, y las sigue PROSPECTIVAMENTE para observar quiénes desarrollan la enfermedad. Esta lógica -partir de la exposición, mirar hacia adelante- sigue la secuencia temporal natural de causa y efecto, lo que la hace metodológicamente más robusta para establecer temporalidad que un estudio de casos y controles, que mira hacia atrás desde el desenlace ya ocurrido.',
  no:{
    1:'Los estudios de cohortes sí requieren seguimiento prolongado en el tiempo; esa es precisamente su característica definitoria (diseño prospectivo).',
    2:'El orden temporal es precisamente el único criterio de causalidad absolutamente indispensable (temporalidad, según Bradford Hill), así que sí importa mucho en cualquier estudio que busque establecer causalidad.',
    3:'Es al revés: el diseño de cohortes, al ser prospectivo, establece la temporalidad de forma más robusta que el diseño retrospectivo de casos y controles.'
  },
  trampa:'No reconocer la ventaja específica del diseño prospectivo de cohortes para establecer con claridad la secuencia temporal entre exposición y desenlace.',
  obj:'Explicar la ventaja del diseño de cohortes para establecer el criterio de temporalidad de causalidad.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['estudios de cohortes','temporalidad','diseño prospectivo','causalidad']
},
{
  id:'U8-E-Q23', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Pérdida de seguimiento', sub:'Pérdida diferencial',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un estudio de cohortes que evalúa un tratamiento nuevo, los pacientes que experimentan efectos adversos tienden a abandonar el estudio con mayor frecuencia que quienes no los experimentan.',
  enunciado:'¿Qué tipo de problema metodológico representa esta situación, y por qué es más grave que una pérdida de seguimiento aleatoria?',
  ops:[
    'Pérdida de seguimiento DIFERENCIAL, relacionada con el desenlace de interés, que introduce un sesgo sistemático difícil de corregir, a diferencia de una pérdida aleatoria que solo reduce precisión',
    'No representa ningún problema metodológico, ya que toda pérdida de seguimiento es igual de inofensiva',
    'Una pérdida de seguimiento diferencial siempre mejora la validez del estudio',
    'La pérdida de seguimiento nunca afecta a los estudios de cohortes'
  ],
  ok:0,
  clave:'La pérdida diferencial (relacionada con el desenlace) introduce sesgo sistemático, más grave que una pérdida aleatoria que solo reduce precisión.',
  exp:'Si la pérdida de seguimiento está relacionada de alguna forma con la exposición o con el desenlace de interés (pérdida de seguimiento diferencial, como en este caso, donde los efectos adversos -relacionados con el tratamiento- predicen el abandono), puede introducir un sesgo que distorsione los resultados de forma difícil de corregir. Esto es distinto de una pérdida aleatoria, que simplemente reduciría la precisión (tamaño de muestra efectivo) sin sesgar sistemáticamente la dirección del resultado.',
  no:{
    1:'Sí representa un problema metodológico real, específicamente por ser una pérdida DIFERENCIAL, relacionada con el desenlace de interés.',
    2:'La pérdida diferencial empeora, no mejora, la validez del estudio, al introducir un sesgo sistemático relacionado con el desenlace.',
    3:'La pérdida de seguimiento es un problema real y frecuente en los estudios de cohortes, precisamente por su naturaleza prospectiva de seguimiento prolongado.'
  },
  trampa:'No distinguir entre pérdida de seguimiento aleatoria (que reduce precisión) y diferencial (que introduce sesgo sistemático), tratando ambas como igualmente inofensivas.',
  obj:'Explicar por qué la pérdida de seguimiento diferencial es más grave que una pérdida aleatoria.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['pérdida de seguimiento','pérdida diferencial','sesgo sistemático','estudios de cohortes']
},
{
  id:'U8-E-Q24', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Cohortes vs. casos y controles', sub:'Ventaja para múltiples desenlaces',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ventaja tiene un estudio de cohortes sobre uno de casos y controles cuando se quiere estudiar el efecto de UNA exposición sobre MÚLTIPLES desenlaces distintos?',
  ops:[
    'Un estudio de cohortes permite estudiar simultáneamente múltiples desenlaces a partir de una única exposición seguida, algo que un estudio de casos y controles no puede hacer con la misma eficiencia',
    'Un estudio de casos y controles siempre es mejor para estudiar múltiples desenlaces',
    'Ningún diseño de estudio puede evaluar más de un desenlace a la vez',
    'La cantidad de desenlaces estudiados nunca depende del diseño elegido'
  ],
  ok:0,
  clave:'El estudio de cohortes permite estudiar múltiples desenlaces a partir de una sola exposición seguida, una ventaja sobre casos y controles.',
  exp:'El estudio de cohortes es especialmente eficiente para estudiar MÚLTIPLES desenlaces a partir de una única exposición (por ejemplo, seguir a fumadores y no fumadores permite estudiar simultáneamente el riesgo de cáncer de pulmón, enfermedad cardiovascular y EPOC, todo a partir de la misma cohorte). Un estudio de casos y controles, en cambio, se organiza típicamente alrededor de UN desenlace específico (los casos de esa enfermedad particular), lo que dificulta estudiar múltiples desenlaces con el mismo diseño.',
  no:{
    1:'Es al revés: el estudio de cohortes tiene esa ventaja específica, no el de casos y controles, que se organiza alrededor de un desenlace específico.',
    2:'El estudio de cohortes sí puede evaluar múltiples desenlaces a la vez, precisamente porque sigue a toda la cohorte y puede registrar cualquier desenlace que ocurra durante el seguimiento.',
    3:'La cantidad de desenlaces que puede estudiarse eficientemente sí depende del diseño elegido; el diseño de cohortes tiene una ventaja clara en este aspecto sobre casos y controles.'
  },
  trampa:'No reconocer la ventaja específica del diseño de cohortes para estudiar múltiples desenlaces simultáneamente, en contraste con la limitación de casos y controles en ese sentido.',
  obj:'Explicar la ventaja del estudio de cohortes para evaluar múltiples desenlaces a partir de una sola exposición.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['estudios de cohortes','múltiples desenlaces','casos y controles','eficiencia del diseño']
},
{
  id:'U8-E-Q25', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Medidas de asociación', sub:'Razón de prevalencias',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿En qué tipo de estudio es apropiado calcular una razón de prevalencias en vez de un riesgo relativo o una razón de momios?',
  ops:[
    'En un estudio transversal, donde se mide la prevalencia (no la incidencia) de un desenlace entre expuestos y no expuestos en un mismo momento',
    'Solo en ensayos clínicos aleatorizados',
    'La razón de prevalencias nunca puede calcularse en ningún tipo de estudio',
    'Solo en estudios de cohortes con seguimiento de décadas'
  ],
  ok:0,
  clave:'La razón de prevalencias es apropiada en un estudio transversal, donde se mide prevalencia (no incidencia) simultáneamente.',
  exp:'En un estudio transversal, donde se mide la exposición y el desenlace en el mismo momento (y por tanto se obtiene prevalencia, no incidencia, del desenlace), la medida de asociación apropiada es la razón de prevalencias -el cociente entre la prevalencia del desenlace en expuestos y en no expuestos-, análoga en su lógica al riesgo relativo pero calculada a partir de prevalencia en vez de incidencia, coherente con el tipo de dato que este diseño puede generar.',
  no:{
    1:'Los ensayos clínicos típicamente miden incidencia de un desenlace tras la aleatorización, permitiendo calcular riesgo relativo, no específicamente razón de prevalencias.',
    2:'La razón de prevalencias sí puede y se calcula específicamente en estudios transversales, donde es la medida de asociación apropiada dado el tipo de dato disponible.',
    3:'La razón de prevalencias es específica de estudios transversales (medición simultánea), no de estudios de cohortes con seguimiento prolongado, que permiten calcular incidencia y riesgo relativo.'
  },
  trampa:'No reconocer que el tipo de medida de asociación apropiada depende del tipo de dato (incidencia o prevalencia) que el diseño del estudio permite obtener.',
  obj:'Identificar el estudio transversal como el diseño apropiado para calcular una razón de prevalencias.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['razón de prevalencias','estudio transversal','medidas de asociación','prevalencia']
},
{
  id:'U8-E-Q26', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Medidas de impacto', sub:'Fracción atribuible en expuestos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué representa la fracción atribuible EN LOS EXPUESTOS (distinta de la fracción atribuible poblacional)?',
  ops:[
    'La proporción de casos en TODA la población que se debe a la exposición',
    'La proporción de casos ESPECÍFICAMENTE ENTRE LOS EXPUESTOS que se debe a esa exposición (y que, por tanto, se evitarían si eliminaran esa exposición en ese subgrupo)',
    'Ambos términos son exactamente lo mismo',
    'La fracción atribuible en expuestos nunca puede calcularse'
  ],
  ok:1,
  clave:'La fracción atribuible en expuestos es la proporción de casos, específicamente entre los expuestos, atribuible a esa exposición.',
  exp:'La fracción atribuible en los expuestos representa la proporción de casos ESPECÍFICAMENTE ENTRE LOS EXPUESTOS que se debe a la exposición estudiada (y que, por tanto, se evitarían si se eliminara esa exposición en ese subgrupo específico) -es distinta de la fracción atribuible poblacional, que considera a TODA la población (incluyendo a los no expuestos), y que depende también de qué tan frecuente es la exposición en el conjunto de la población.',
  no:{
    0:'Esa descripción corresponde a la fracción atribuible POBLACIONAL, no a la fracción atribuible en los expuestos, que se limita específicamente a ese subgrupo.',
    2:'Son medidas relacionadas pero distintas: una se limita a los expuestos, la otra considera a toda la población.',
    3:'La fracción atribuible en expuestos sí puede calcularse, a partir del riesgo relativo, y es una medida útil para estimar el impacto de eliminar la exposición específicamente en ese subgrupo.'
  },
  trampa:'Confundir la fracción atribuible en expuestos con la fracción atribuible poblacional, que son medidas relacionadas pero conceptualmente distintas.',
  obj:'Distinguir la fracción atribuible en expuestos de la fracción atribuible poblacional.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['fracción atribuible en expuestos','fracción atribuible poblacional','medidas de impacto','riesgo relativo']
}

]);
