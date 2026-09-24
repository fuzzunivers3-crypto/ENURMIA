/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 30)
   EPIDEMIOLOGIA reescrita al estandar extenso. Mismas 13 claves
   de objeto que ya existian (en apuntes-2.js y -11.js, incluida
   'medidas-frecuencia-epi' con su sufijo historico ya establecido,
   que se conserva tal cual), asi que Object.assign las sobrescribe
   sin romper "Leer el tema".

   Se repara un bug real de la cadena `sigue`, del mismo tipo que
   el de Parasitologia: el tema 1 ('conceptos-usos-epidemiologia')
   apuntaba a 'medidas-frecuencia' (SIN el sufijo "-epi"), una
   clave que no existe -deberia apuntar a 'medidas-frecuencia-epi',
   la clave real del tema 2. El resto de la cadena (temas 2 a 13)
   ya estaba en el orden correcto. Se cierra ademas el cabo suelto
   final: 'epidemiologia-transmisibles-no-transmisibles' (ultimo
   tema, sigue:null) ahora encadena hacia 'innata-y-adaptativa',
   primer tema de Inmunologia (la materia siguiente y ultima del
   cuatrimestre 8).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'conceptos-usos-epidemiologia': {
  tema:'Conceptos y usos de la epidemiología',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:13,
  idea:'La epidemiología no es "estadística aplicada a enfermedades": es la disciplina que estudia CÓMO y POR QUÉ se distribuyen las enfermedades en una población, y ese conocimiento es lo que permite anticiparse a un brote en vez de solo reaccionar a él.',
  claves:['epidemiología','determinante','vigilancia','endemia','epidemia','brote'],
  sigue:'medidas-frecuencia-epi',
  secciones:[
    {
      t:'La tríada epidemiológica clásica: persona, lugar y tiempo',
      p:[
        'La epidemiología estudia sistemáticamente la distribución de las enfermedades según tres ejes clásicos: persona (quién se enferma -edad, sexo, ocupación, factores de riesgo individuales), lugar (dónde ocurre -distribución geográfica, urbana/rural, por región) y tiempo (cuándo ocurre -estacionalidad, tendencias a lo largo de los años, patrones cíclicos). Describir sistemáticamente estos tres ejes para una enfermedad determinada es, con frecuencia, el primer paso de cualquier investigación epidemiológica, porque revela patrones (agrupaciones por edad, por región, por temporada) que orientan hacia hipótesis sobre los determinantes -los factores que influyen en la probabilidad de que ocurra la enfermedad- responsables de esa distribución.'
      ],
      foco:[
        'Persona, lugar y tiempo: los tres ejes clásicos de la descripción epidemiológica. Describir estos tres ejes sistemáticamente para una enfermedad suele ser el primer paso, antes de plantear hipótesis causales específicas sobre sus determinantes.'
      ]
    },
    {
      t:'Endemia, epidemia, brote y pandemia: la misma pregunta, distinta escala',
      p:[
        'Una enfermedad es endémica cuando su frecuencia se mantiene relativamente constante y esperada en una población o región determinada a lo largo del tiempo -no significa "enfermedad leve" ni "poco importante", solo que su nivel actual es el habitual para ese lugar. Una epidemia (o brote, término usado a veces indistintamente, aunque "brote" con frecuencia se reserva para un aumento localizado y más limitado) ocurre cuando la frecuencia de una enfermedad supera claramente el nivel esperado para esa población en ese momento, sin importar si el número absoluto de casos es alto o bajo en términos absolutos -lo relevante es el EXCESO respecto a lo esperado, no un umbral numérico fijo universal. Una pandemia es una epidemia que se extiende a través de múltiples países o continentes, afectando a un número muy grande de personas.'
      ],
      foco:[
        'Epidemia = EXCESO respecto a lo esperado para esa población y momento, no un número absoluto fijo. Un aumento de 3 casos de una enfermedad que normalmente tiene 0 puede ser una epidemia; 1000 casos de una enfermedad habitualmente endémica con 1000 casos puede no serlo.'
      ]
    },
    {
      t:'Vigilancia epidemiológica: de la descripción a la acción',
      p:[
        'La vigilancia epidemiológica es la recolección, análisis e interpretación CONTINUA y sistemática de datos de salud, con el propósito explícito de guiar la acción de salud pública -no es solo "llevar estadísticas", es un sistema diseñado para detectar cambios inusuales en la frecuencia de una enfermedad (comparando lo observado contra el patrón histórico esperado) y activar una respuesta oportuna, como la investigación de un posible brote. Los determinantes de salud (factores biológicos, ambientales, sociales, económicos y de comportamiento que influyen en la salud de una población) son el objeto último de estudio de la epidemiología: identificar y cuantificar el papel de estos determinantes es lo que permite diseñar intervenciones de salud pública dirigidas a los factores que realmente están impulsando la frecuencia de una enfermedad, en vez de intervenciones genéricas sin base en la evidencia.'
      ],
      foco:[
        '*Consideración clínica*: la vigilancia epidemiológica no es pasiva -es un sistema diseñado para la ACCIÓN, comparando lo observado en tiempo real contra el patrón esperado, y activando una investigación cuando se detecta un exceso, precisamente la lógica que conecta este tema con la vigilancia y notificación de enfermedades más adelante.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.'
},

'medidas-frecuencia-epi': {
  tema:'Medidas de frecuencia',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:14,
  idea:'Prevalencia e incidencia responden preguntas epidemiológicas distintas -una es una fotografía, la otra es una película-, y confundirlas es uno de los errores conceptuales más frecuentes y con más consecuencias prácticas de toda la epidemiología.',
  claves:['prevalencia','incidencia','tasa','riesgo','densidad de incidencia'],
  sigue:'medidas-asociacion',
  secciones:[
    {
      t:'Prevalencia: una fotografía de cuántos están enfermos en un momento dado',
      p:[
        'La prevalencia es la proporción de una población que TIENE una enfermedad en un momento (o periodo) determinado, sin distinguir entre casos nuevos y antiguos -es una "fotografía" del estado de la población en ese instante. La prevalencia depende de dos factores: cuántos casos nuevos aparecen (incidencia) y cuánto DURA la enfermedad en cada persona afectada (desde el diagnóstico hasta la curación o la muerte). Una enfermedad puede tener alta prevalencia por tener alta incidencia (muchos casos nuevos), por tener una duración muy larga (los casos se acumulan, como en enfermedades crónicas), o por ambas razones a la vez -y puede tener BAJA prevalencia pese a alta incidencia si la duración es muy corta (cura rápida) o si la letalidad es muy alta (los casos mueren rápido y "salen" del conjunto de prevalentes).'
      ],
      foco:[
        'Prevalencia = Incidencia × Duración (aproximadamente, en condiciones estables). Una enfermedad de alta incidencia pero muy corta duración (cura rápida o muerte rápida) puede tener prevalencia sorprendentemente baja.'
      ]
    },
    {
      t:'Incidencia: una película de cuántos casos NUEVOS aparecen',
      p:[
        'La incidencia mide la aparición de casos NUEVOS de una enfermedad en una población en riesgo, durante un periodo de tiempo determinado -es una "película", no una fotografía, porque captura el movimiento (nuevos casos) a lo largo del tiempo, no el estado en un instante. Es fundamental que el denominador de la incidencia incluya solo a personas EN RIESGO de desarrollar la enfermedad (personas que aún no la tienen y son susceptibles de desarrollarla) -las personas que ya tienen la enfermedad, o que son inmunes por otra razón (como ya haberla padecido con inmunidad permanente), deben excluirse del denominador, porque no pueden convertirse en "casos nuevos" durante el periodo estudiado.'
      ],
      foco:[
        'El denominador de la incidencia debe incluir SOLO a personas en riesgo (susceptibles de desarrollar la enfermedad), excluyendo a quienes ya la tienen o son inmunes -un error frecuente es usar la población total sin esta depuración.'
      ]
    },
    {
      t:'Densidad de incidencia: cuando el tiempo de seguimiento varía entre personas',
      p:[
        'La densidad de incidencia (o tasa de incidencia) es una variante de la incidencia que usa como denominador el tiempo-persona acumulado en riesgo, en vez de simplemente el número de personas en riesgo al inicio del estudio -esto es especialmente útil cuando distintas personas se siguen durante periodos de tiempo distintos dentro del mismo estudio (por ejemplo, por pérdidas de seguimiento, entradas tardías al estudio, o porque el desenlace ocurrió en momentos distintos para cada persona, ya visto en el análisis de supervivencia de Bioestadística). Al usar el tiempo-persona en vez de solo el número de personas, la densidad de incidencia da una medida más precisa cuando el tiempo de observación no es uniforme entre los participantes del estudio.'
      ],
      foco:[
        '*Consideración clínica*: la densidad de incidencia (tiempo-persona) es la medida apropiada cuando el seguimiento no es uniforme entre participantes -el mismo principio conceptual que sostiene el análisis de supervivencia y su manejo de la censura, ya visto en Bioestadística.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.'
},

'medidas-asociacion': {
  tema:'Medidas de asociación',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:13,
  idea:'El riesgo relativo y la razón de momios se parecen mucho en su interpretación pero se calculan de forma distinta -y esa diferencia no es un detalle técnico menor: es la razón exacta de por qué un estudio de casos y controles NUNCA puede calcular directamente un riesgo relativo verdadero.',
  claves:['riesgo relativo','odds ratio','razón de prevalencias','asociación'],
  sigue:'medidas-impacto',
  secciones:[
    {
      t:'Riesgo relativo: comparar incidencias directamente',
      p:[
        'El riesgo relativo (RR) es el cociente entre la incidencia de una enfermedad en el grupo EXPUESTO y la incidencia en el grupo NO expuesto: RR = incidencia en expuestos / incidencia en no expuestos. Un RR de 3 significa que los expuestos tienen tres veces el riesgo de los no expuestos; un RR de 1 significa ausencia de asociación; un RR menor a 1 sugiere un factor protector. Calcular un riesgo relativo requiere conocer la incidencia REAL en ambos grupos, lo cual solo es posible en estudios donde se sigue a una población a lo largo del tiempo desde la exposición hasta el desenlace -estudios de cohortes y ensayos clínicos, no estudios de casos y controles.'
      ],
      foco:[
        'RR = incidencia en expuestos / incidencia en no expuestos. Solo puede calcularse directamente en diseños que permiten conocer la incidencia real: cohortes y ensayos clínicos, NO casos y controles.'
      ]
    },
    {
      t:'Razón de momios: la alternativa cuando no se puede calcular incidencia',
      p:[
        'La razón de momios (odds ratio) compara la razón de momios (probabilidad de exposición dividida entre la probabilidad de no exposición) entre los casos y los controles, en vez de comparar incidencias directamente. Esta es la medida de asociación que SÍ puede calcularse en un estudio de casos y controles, porque este diseño parte de personas ya clasificadas según si tienen o no la enfermedad (casos contra controles), y mira hacia atrás para ver su exposición previa -no puede calcular una incidencia real, porque los investigadores decidieron de antemano cuántos casos y cuántos controles incluir, alterando artificialmente la proporción de enfermos en la muestra respecto a la población real.'
      ],
      foco:[
        'La razón de momios es la medida de asociación apropiada para un estudio de casos y controles, precisamente porque este diseño no permite calcular una incidencia real (los investigadores fijan de antemano el número de casos y controles).'
      ]
    },
    {
      t:'Cuándo la razón de momios aproxima bien al riesgo relativo',
      p:[
        'Cuando la enfermedad estudiada es RARA en la población (una convención práctica habitual es una prevalencia menor al 10%), la razón de momios se aproxima razonablemente bien al riesgo relativo verdadero, así que en la práctica se usan de forma casi intercambiable para enfermedades poco frecuentes. Pero cuando la enfermedad es FRECUENTE en la población, la razón de momios puede sobreestimar considerablemente al riesgo relativo verdadero (alejándose más de 1 de lo que el riesgo relativo real indicaría), así que en ese caso ambas medidas ya no son intercambiables, y reportar una razón de momios como si fuera directamente un riesgo relativo sería engañoso para enfermedades frecuentes.'
      ],
      foco:[
        '*Consideración clínica*: la aproximación razón de momios ≈ riesgo relativo solo es razonable cuando la enfermedad es RARA (convencionalmente, prevalencia menor al 10%). Con enfermedades frecuentes, la razón de momios sobreestima al riesgo relativo real, y no deben tratarse como intercambiables.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.'
},

'medidas-impacto': {
  tema:'Medidas de impacto',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:12,
  idea:'El riesgo relativo dice qué tan fuerte es una asociación proporcionalmente; el riesgo atribuible dice cuántos casos reales se evitarían eliminando la exposición -y para decidir prioridades de salud pública, la segunda pregunta con frecuencia importa más que la primera.',
  claves:['riesgo atribuible','fracción atribuible','NNT','impacto poblacional'],
  sigue:'estudios-descriptivos-transversales',
  secciones:[
    {
      t:'Riesgo atribuible: la diferencia absoluta que explica la exposición',
      p:[
        'El riesgo atribuible (o diferencia de riesgo) es la diferencia ABSOLUTA entre la incidencia en el grupo expuesto y la incidencia en el grupo no expuesto -a diferencia del riesgo relativo, que es un cociente (una razón proporcional), el riesgo atribuible es una resta, y se mide en las mismas unidades que la incidencia (por ejemplo, casos por 1000 personas-año). Esta diferencia estima cuánto del riesgo observado en el grupo expuesto es atribuible específicamente a la exposición estudiada, asumiendo una relación causal -es la medida más directamente relevante para estimar cuánta enfermedad se evitaría si se eliminara esa exposición específica en ese grupo.'
      ],
      foco:[
        'Riesgo relativo = razón (cociente, mide fuerza proporcional). Riesgo atribuible = diferencia (resta, mide impacto absoluto). Dos preguntas distintas: "¿qué tan fuerte es la asociación?" contra "¿cuánta enfermedad real explica esta exposición?".'
      ]
    },
    {
      t:'Por qué una asociación fuerte no siempre tiene el mayor impacto poblacional',
      p:[
        'Una exposición con un riesgo relativo muy alto pero muy poco frecuente en la población puede tener un impacto poblacional total menor que una exposición con un riesgo relativo más modesto pero mucho más frecuente -la fracción atribuible poblacional (la proporción de todos los casos en la población total que se deben a una exposición determinada) depende tanto de la fuerza de la asociación (el riesgo relativo) como de qué tan común es esa exposición en la población. Este es un principio central en la priorización de intervenciones de salud pública: a veces conviene más intervenir sobre una exposición muy común con un efecto modesto que sobre una exposición rara con un efecto muy fuerte, porque el impacto poblacional total puede ser mayor en el primer caso.'
      ],
      foco:[
        '*Consideración clínica*: para priorizar intervenciones de salud pública, la fracción atribuible poblacional (que combina fuerza de asociación Y frecuencia de la exposición) es más relevante que el riesgo relativo aislado -una exposición común con efecto modesto puede tener mayor impacto poblacional que una rara con efecto fuerte.'
      ]
    },
    {
      t:'NNT: traducir el riesgo atribuible a una decisión clínica concreta',
      p:[
        'El número necesario a tratar (NNT) es el inverso del riesgo atribuible (1 dividido entre la diferencia de riesgo absoluta) entre un grupo tratado y uno no tratado, y responde una pregunta clínicamente muy directa: ¿a cuántos pacientes hay que tratar con una intervención determinada para evitar UN desenlace adverso adicional? Un NNT bajo (por ejemplo, 5) indica una intervención muy eficiente (se necesitan pocos pacientes tratados para evitar un evento); un NNT alto (por ejemplo, 500) indica una intervención con beneficio absoluto pequeño, aunque el riesgo relativo reportado sea impresionante -el NNT es, en ese sentido, un complemento necesario al riesgo relativo para juzgar la relevancia clínica práctica de una intervención, en el mismo espíritu que el tamaño del efecto visto en Bioestadística.'
      ],
      foco:[
        'NNT = 1 / riesgo atribuible. Un NNT bajo = intervención eficiente. Un NNT alto, incluso con un riesgo relativo "impresionante" reportado, revela un beneficio absoluto pequeño -el NNT traduce la estadística a una decisión clínica concreta y práctica.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.'
},

'estudios-descriptivos-transversales': {
  tema:'Estudios descriptivos y transversales',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:12,
  idea:'Un estudio transversal captura exposición y desenlace en el MISMO momento, lo que lo hace rápido y barato, pero también le impone una limitación fundamental e inevitable: nunca puede establecer con certeza cuál de las dos variables ocurrió primero.',
  claves:['descriptivo','transversal','serie de casos','prevalencia'],
  sigue:'estudios-casos-controles',
  secciones:[
    {
      t:'Estudios descriptivos: generar hipótesis, no probarlas',
      p:[
        'Los estudios descriptivos (reporte de caso, serie de casos, estudios ecológicos que comparan poblaciones enteras en vez de individuos) documentan la ocurrencia de una enfermedad o un hallazgo clínico sin un grupo de comparación formal ni un diseño analítico riguroso. Su valor principal es GENERAR hipótesis -llamar la atención sobre un patrón inusual que merece investigación más rigurosa después-, no PROBAR relaciones causales, porque sin un grupo de comparación no puede evaluarse si lo observado es distinto de lo esperado en ausencia de la exposición sospechada. Muchos descubrimientos importantes en medicina comenzaron como una serie de casos que llamó la atención sobre un patrón que después se confirmó (o se descartó) con estudios analíticos más rigurosos.'
      ],
      foco:[
        'Los estudios descriptivos GENERAN hipótesis (útiles como primer paso de alerta), no las PRUEBAN -carecen de grupo de comparación formal, así que no pueden establecer asociaciones causales por sí solos.'
      ]
    },
    {
      t:'Estudio transversal: la fotografía simultánea de exposición y desenlace',
      p:[
        'El estudio transversal mide la exposición y el desenlace en el MISMO momento, en una muestra de la población de interés -es rápido y relativamente barato de realizar, y es el diseño apropiado para estimar la PREVALENCIA de una condición en una población. Su limitación fundamental e inevitable es que, al medir ambas variables simultáneamente, no puede establecer con certeza la secuencia TEMPORAL entre exposición y desenlace -no se puede saber, solo con este diseño, si la exposición precedió al desenlace o si ocurrió lo contrario (causalidad inversa), lo cual es un requisito esencial para inferir causalidad (como ya se vio en el criterio de secuencia temporal de Bioestadística).'
      ],
      foco:[
        'El estudio transversal mide exposición y desenlace simultáneamente: es ideal para estimar PREVALENCIA, pero no puede establecer secuencia temporal entre las variables, la limitación fundamental que lo hace inapropiado para inferir causalidad por sí solo.'
      ]
    },
    {
      t:'El estudio ecológico y la falacia ecológica',
      p:[
        'El estudio ecológico compara la frecuencia de una exposición y de un desenlace entre distintas POBLACIONES o grupos (no entre individuos), usando datos agregados -por ejemplo, comparar el consumo promedio de sal y la tasa de hipertensión entre distintos países. Su limitación específica y bien conocida es la falacia ecológica: una asociación observada a nivel poblacional (agregado) no necesariamente se cumple a nivel individual -es posible que, dentro de una población con alto consumo promedio de sal y alta tasa de hipertensión, las personas que específicamente consumen más sal no sean las mismas que tienen hipertensión, y la asociación poblacional podría deberse a otro factor que varía junto con el consumo de sal entre esas poblaciones. Por eso, un hallazgo ecológico es solo generador de hipótesis, nunca una prueba directa de asociación a nivel individual.'
      ],
      foco:[
        '*Consideración clínica*: la falacia ecológica es el riesgo central de interpretar datos agregados (poblacionales) como si aplicaran directamente a nivel individual -una asociación entre poblaciones no garantiza que la misma asociación exista entre las personas dentro de cada población.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.'
},

'estudios-casos-controles': {
  tema:'Estudios de casos y controles',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:13,
  idea:'Un estudio de casos y controles parte al revés que la lógica intuitiva de causa-efecto: empieza por el desenlace (quién ya está enfermo) y mira hacia atrás en busca de la exposición -una inversión metodológica que lo hace muy eficiente para enfermedades raras, pero también vulnerable a un sesgo muy específico.',
  claves:['casos y controles','retrospectivo','odds ratio','sesgo de memoria'],
  sigue:'estudios-cohortes',
  secciones:[
    {
      t:'La lógica retrospectiva: partir del desenlace, mirar hacia la exposición',
      p:[
        'El estudio de casos y controles identifica primero a un grupo de personas que YA TIENEN la enfermedad de interés (los casos) y a un grupo de personas comparables que NO la tienen (los controles), y luego indaga RETROSPECTIVAMENTE sobre la exposición previa de ambos grupos, comparando qué proporción de casos y de controles estuvo expuesta al factor de interés en el pasado. Esta lógica "al revés" (empezar por el desenlace, mirar hacia la exposición) es precisamente lo que hace a este diseño muy eficiente para estudiar enfermedades RARAS: no hace falta seguir a una población enorme durante años esperando que aparezcan pocos casos nuevos (como requeriría un estudio de cohortes); basta con identificar a los casos ya existentes, que pueden reclutarse relativamente rápido incluso para una enfermedad poco frecuente.'
      ],
      foco:[
        'Casos y controles = eficiente para enfermedades RARAS, porque parte de casos ya existentes en vez de esperar a que aparezcan durante el seguimiento de una cohorte -no requiere seguir a una población enorme durante años.'
      ]
    },
    {
      t:'Sesgo de memoria: la vulnerabilidad específica de este diseño',
      p:[
        'El sesgo de memoria (recall bias) es la vulnerabilidad más característica de los estudios de casos y controles: las personas que YA tienen una enfermedad (los casos) pueden recordar su exposición previa de forma distinta -con frecuencia más detallada o con un sesgo hacia "buscar explicaciones"- que las personas sanas (los controles), simplemente por el hecho de estar enfermas y haber reflexionado más sobre posibles causas de su condición. Este sesgo puede distorsionar la asociación observada en cualquier dirección, sobreestimando o subestimando la razón de momios real, y es difícil de eliminar por completo, aunque se puede reducir usando fuentes de información objetivas (registros médicos, en vez de solo el recuerdo del paciente) siempre que sea posible.'
      ],
      foco:[
        '*Consideración clínica*: el sesgo de memoria es una vulnerabilidad ESPECÍFICA de los estudios de casos y controles (por su diseño retrospectivo basado en recordar exposiciones pasadas), mucho menos relevante en estudios prospectivos, donde la exposición se registra antes de conocer el desenlace.'
      ]
    },
    {
      t:'La razón de momios, y no el riesgo relativo, como medida de asociación',
      p:[
        'Como ya se vio en el tema de medidas de asociación, un estudio de casos y controles no puede calcular la incidencia real de la enfermedad en la población (porque el número de casos y de controles fue decidido de antemano por el investigador, no refleja la proporción real de enfermos en la población de origen), así que la medida de asociación apropiada es la razón de momios, no el riesgo relativo. Elegir bien a los controles -que sean representativos de la población de la que provienen los casos, y comparables en todo excepto en el desenlace de interés- es uno de los pasos metodológicamente más delicados de este diseño, porque una selección inadecuada de controles puede introducir un sesgo de selección que distorsione la asociación observada de forma difícil de corregir después.'
      ],
      foco:[
        'La razón de momios es la medida de asociación correcta en casos y controles, no el riesgo relativo. La selección de los controles (representatividad y comparabilidad) es uno de los pasos metodológicos más delicados y susceptibles a sesgo de selección.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.'
},

'estudios-cohortes': {
  tema:'Estudios de cohortes',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:13,
  idea:'A diferencia de casos y controles, un estudio de cohortes sigue la lógica intuitiva de causa-efecto: parte de la exposición y observa hacia adelante quién desarrolla la enfermedad -lo que permite calcular incidencia real, pero exige pagar un costo en tiempo y recursos que casos y controles no requiere.',
  claves:['cohorte','prospectivo','incidencia','pérdida de seguimiento'],
  sigue:'ensayo-clinico-aleatorizado',
  secciones:[
    {
      t:'La lógica prospectiva: partir de la exposición, observar hacia adelante',
      p:[
        'El estudio de cohortes identifica a un grupo de personas SIN la enfermedad de interés, clasificadas según su exposición (o no exposición) a un factor determinado, y las sigue PROSPECTIVAMENTE en el tiempo para observar quiénes desarrollan la enfermedad. Esta lógica -partir de la exposición, mirar hacia adelante- sigue la secuencia temporal natural de causa y efecto, lo que la hace metodológicamente más robusta para establecer temporalidad (un criterio de causalidad ya visto) que un estudio de casos y controles. Como se sigue a la población completa a lo largo del tiempo, un estudio de cohortes SÍ permite calcular la incidencia real de la enfermedad en cada grupo (expuesto y no expuesto), y por tanto calcular directamente un riesgo relativo verdadero, no solo una razón de momios aproximada.'
      ],
      foco:[
        'Cohortes = parte de la exposición, sigue hacia adelante, permite calcular incidencia real y por tanto un RIESGO RELATIVO directo (no aproximado por razón de momios, como en casos y controles).'
      ]
    },
    {
      t:'El costo del diseño prospectivo: tiempo, recursos y pérdida de seguimiento',
      p:[
        'Seguir a una población durante meses, años o incluso décadas (según la enfermedad estudiada) requiere una inversión considerable de tiempo y recursos, y expone al estudio a un problema metodológico específico: la pérdida de seguimiento (personas que abandonan el estudio antes de que termine, por mudanza, pérdida de interés, u otras razones ajenas al desenlace). Si la pérdida de seguimiento es alta, y sobre todo si está relacionada de alguna forma con la exposición o con el desenlace de interés (pérdida de seguimiento diferencial), puede introducir un sesgo que distorsione los resultados de forma difícil de corregir -por eso los estudios de cohortes bien diseñados hacen esfuerzos considerables para minimizar y documentar la pérdida de seguimiento, y para comparar las características de quienes se pierden contra quienes completan el estudio.'
      ],
      foco:[
        '*Consideración clínica*: la pérdida de seguimiento es especialmente problemática cuando es DIFERENCIAL -relacionada con la exposición o el desenlace-, porque introduce un sesgo sistemático, distinto de una pérdida aleatoria que simplemente reduciría la precisión sin sesgar la dirección del resultado.'
      ]
    },
    {
      t:'Cohortes eficiente para enfermedades comunes, ineficiente para las raras',
      p:[
        'El estudio de cohortes es especialmente eficiente para estudiar enfermedades RELATIVAMENTE COMUNES (donde un número razonable de personas en la cohorte desarrollará el desenlace durante el periodo de seguimiento) y para estudiar MÚLTIPLES desenlaces a partir de una única exposición (por ejemplo, seguir a fumadores y no fumadores permite estudiar simultáneamente el riesgo de cáncer de pulmón, enfermedad cardiovascular y EPOC, todo a partir de la misma cohorte). Es, en cambio, muy ineficiente para estudiar enfermedades RARAS, porque requeriría una cohorte enormemente grande (o un seguimiento extremadamente largo) para acumular un número suficiente de casos nuevos -precisamente la situación donde un estudio de casos y controles resulta mucho más práctico y eficiente.'
      ],
      foco:[
        'Cohortes = eficiente para enfermedades comunes y para estudiar MÚLTIPLES desenlaces de una sola exposición. Casos y controles = eficiente para enfermedades RARAS. Ambos diseños son complementarios según la pregunta y la frecuencia de la enfermedad, no intercambiables en cualquier contexto.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.'
},

'ensayo-clinico-aleatorizado': {
  tema:'Ensayo clínico aleatorizado',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:14,
  idea:'El ensayo clínico aleatorizado es el único diseño de estudio capaz de controlar, en promedio, TANTO los factores de confusión conocidos COMO los desconocidos -un privilegio metodológico que ningún estudio observacional, por bien diseñado que esté, puede igualar.',
  claves:['ensayo clínico','aleatorización','cegamiento','intención de tratar','placebo'],
  sigue:'sesgos-confusion-interaccion',
  secciones:[
    {
      t:'Aleatorización: por qué es la herramienta más poderosa contra la confusión',
      p:[
        'La aleatorización asigna a los participantes al azar entre los distintos grupos de tratamiento (o tratamiento contra placebo/control), sin que el investigador ni el participante decidan a qué grupo pertenece cada persona. Su gran ventaja -que ningún estudio observacional puede replicar- es que, si la muestra es suficientemente grande, la aleatorización tiende a distribuir de forma equilibrada entre los grupos TANTO los factores de confusión conocidos (que un investigador podría intentar controlar por otros medios, como el apareamiento o el ajuste estadístico) COMO los factores de confusión desconocidos o no medidos (que ningún método observacional puede controlar, precisamente porque no se sabe que existen o no se midieron). Esta es la razón fundamental por la que el ensayo clínico aleatorizado se considera el estándar de referencia (gold standard) para establecer causalidad.'
      ],
      foco:[
        'La aleatorización es el ÚNICO método que controla, en promedio, factores de confusión DESCONOCIDOS además de los conocidos -ningún ajuste estadístico en un estudio observacional puede lograr esto, porque solo se puede ajustar por lo que se mide.'
      ]
    },
    {
      t:'Cegamiento: proteger contra el sesgo después de la aleatorización',
      p:[
        'El cegamiento (u ocultamiento) evita que los participantes (cegamiento simple), o los participantes Y quienes evalúan los desenlaces (doble ciego), sepan a qué grupo de tratamiento fue asignado cada persona. Esto protege contra dos fuentes de sesgo distintas de la confusión: el efecto placebo y otros sesgos de expectativa del participante (que podría reportar síntomas de forma distinta según crea que recibió el tratamiento activo o no), y el sesgo de evaluación del investigador o del evaluador de desenlaces (que, sin cegamiento, podría interpretar o registrar un resultado de forma distinta según sepa qué tratamiento recibió el paciente, incluso sin intención consciente de sesgar). El cegamiento no sustituye a la aleatorización ni cumple su misma función (controlar confusión); protege contra un problema distinto, que ocurre DESPUÉS de la asignación aleatoria.'
      ],
      foco:[
        'Aleatorización controla la CONFUSIÓN (antes de que empiece el tratamiento). Cegamiento controla el SESGO de expectativa y de evaluación (durante y después del tratamiento). Son dos herramientas metodológicas distintas, que se complementan pero no son intercambiables.'
      ]
    },
    {
      t:'Análisis por intención de tratar: preservar la ventaja de la aleatorización',
      p:[
        'El análisis por intención de tratar analiza a cada participante según el grupo al que fue ORIGINALMENTE asignado por la aleatorización, sin importar si finalmente recibió, siguió o abandonó el tratamiento correspondiente -en contraste con un análisis "por protocolo", que solo incluiría a quienes efectivamente completaron el tratamiento asignado según lo planeado. El análisis por intención de tratar es el estándar preferido precisamente porque preserva la ventaja de la aleatorización: si se excluyera a quienes abandonaron el tratamiento (que con frecuencia lo abandonan por razones relacionadas con el propio tratamiento, como efectos adversos o falta de eficacia percibida), se reintroduciría el mismo tipo de sesgo de selección que la aleatorización estaba diseñada para eliminar, comparando ya no a grupos aleatoriamente equivalentes, sino a subgrupos autoseleccionados de "quienes toleraron bien" cada tratamiento.'
      ],
      foco:[
        '*Consideración clínica*: el análisis por intención de tratar mantiene a los participantes en su grupo ORIGINAL de aleatorización, aunque hayan abandonado el tratamiento -excluirlos (análisis "por protocolo") reintroduciría sesgo de selección, precisamente lo que la aleatorización buscaba evitar.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.'
},

'sesgos-confusion-interaccion': {
  tema:'Sesgos, confusión e interacción',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:14,
  idea:'Sesgo, confusión e interacción son tres formas distintas en que una asociación observada puede no reflejar fielmente la relación causal real entre exposición y desenlace -y cada una requiere una estrategia distinta para reconocerla y, cuando es posible, corregirla.',
  claves:['sesgo','confusión','interacción','apareamiento','estratificación'],
  sigue:'validez-prueba-diagnostica',
  secciones:[
    {
      t:'Sesgo: un error sistemático introducido por el diseño o la ejecución del estudio',
      p:[
        'El sesgo es un error SISTEMÁTICO (no aleatorio) en el diseño, la conducción o el análisis de un estudio, que distorsiona la asociación observada de forma consistente en una dirección determinada -a diferencia del error aleatorio (visto en Bioestadística), que se reduce aumentando el tamaño de la muestra, el sesgo NO se corrige con una muestra más grande; una muestra grande con sesgo sistemático simplemente da un resultado sesgado con más "confianza" estadística aparente. Ya se vieron dos tipos específicos de sesgo: el sesgo de selección (ya visto en Estadística I y Bioestadística, relacionado con cómo se elige la muestra o los controles) y el sesgo de memoria (específico de estudios de casos y controles, ya visto en ese tema).'
      ],
      foco:[
        'El sesgo es un error SISTEMÁTICO, que NO se corrige aumentando el tamaño de la muestra -a diferencia del error aleatorio. Un estudio grande con sesgo sigue siendo un estudio sesgado, solo que con apariencia de mayor precisión.'
      ]
    },
    {
      t:'Confusión: cuando una tercera variable distorsiona la asociación observada',
      p:[
        'La confusión ocurre cuando una tercera variable (el factor de confusión) está asociada TANTO con la exposición como con el desenlace, de forma independiente, distorsionando la asociación aparente entre exposición y desenlace -ya se vio el ejemplo clásico del consumo de helado y los ahogamientos, confundido por la temporada/temperatura (Bioestadística). Para que una variable sea un verdadero factor de confusión, debe cumplir tres condiciones: estar asociada con la exposición, estar asociada con el desenlace de forma independiente de la exposición, y NO ser un paso intermedio en la vía causal entre la exposición y el desenlace (si lo fuera, sería un mediador, no un confusor, y "ajustar" por él eliminaría parte del efecto real que se busca medir, no un sesgo). Las estrategias para controlar la confusión incluyen el apareamiento (emparejar casos y controles, o los grupos comparados, según el factor de confusión conocido, para que ambos grupos tengan una distribución similar de ese factor) y la estratificación o el ajuste estadístico (analizar la asociación dentro de subgrupos definidos por el nivel del factor de confusión, o ajustar mediante regresión multivariable, como se vio con la razón de momios ajustada en Bioestadística).'
      ],
      foco:[
        'Un factor de confusión debe: asociarse con la exposición, asociarse con el desenlace de forma independiente, y NO ser un paso intermedio en la vía causal (si lo fuera, sería un mediador, no un confusor). Apareamiento y ajuste/estratificación son las estrategias de control.'
      ]
    },
    {
      t:'Interacción: cuando el efecto de una exposición depende de otra variable',
      p:[
        'La interacción (o modificación del efecto) ocurre cuando el efecto de una exposición sobre el desenlace es DISTINTO según el nivel de una tercera variable -a diferencia de la confusión (que es un problema metodológico a corregir, porque distorsiona una relación que se busca medir sin distorsión), la interacción es un HALLAZGO real y biológicamente interesante en sí mismo, que no se "corrige" ni se "ajusta" de la misma forma, sino que se describe y se reporta explícitamente (por ejemplo, reportando el efecto de la exposición por separado para cada nivel de la variable modificadora). El ejemplo clásico es la interacción entre el tabaquismo y la exposición ocupacional al asbesto sobre el riesgo de cáncer de pulmón: el riesgo combinado de ambas exposiciones juntas es mucho mayor que la simple suma de los riesgos individuales de cada exposición por separado, revelando una interacción sinérgica real entre ambos factores.'
      ],
      foco:[
        '*Consideración clínica*: confusión = distorsión METODOLÓGICA a corregir (ajustar, apareamiento). Interacción = hallazgo BIOLÓGICO real a describir (el efecto de una exposición varía genuinamente según otra variable, como tabaco + asbesto sobre el riesgo de cáncer de pulmón) -no se "corrigen" de la misma forma, porque no son el mismo tipo de fenómeno.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.'
},

'validez-prueba-diagnostica': {
  tema:'Validez de una prueba diagnóstica',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:14,
  idea:'Sensibilidad y especificidad son propiedades FIJAS de una prueba diagnóstica, pero los valores predictivos -lo que realmente importa para interpretar el resultado en un paciente concreto- dependen de la prevalencia de la enfermedad en esa población específica, un punto que cambia radicalmente cómo debe leerse el mismo resultado en contextos distintos.',
  claves:['sensibilidad','especificidad','valor predictivo','curva ROC','cribado'],
  sigue:'causalidad',
  secciones:[
    {
      t:'Sensibilidad y especificidad: propiedades intrínsecas de la prueba',
      p:[
        'La sensibilidad es la capacidad de una prueba de detectar correctamente a quienes SÍ tienen la enfermedad (verdaderos positivos entre todos los que realmente están enfermos) -una prueba muy sensible tiene pocos falsos negativos, así que es útil para DESCARTAR una enfermedad cuando el resultado es negativo (un resultado negativo en una prueba muy sensible hace poco probable que la enfermedad esté presente). La especificidad es la capacidad de identificar correctamente a quienes NO tienen la enfermedad (verdaderos negativos entre todos los que realmente están sanos) -una prueba muy específica tiene pocos falsos positivos, así que es útil para CONFIRMAR una enfermedad cuando el resultado es positivo. Ambas son propiedades intrínsecas de la prueba en sí misma, que NO cambian según en qué población se use (a diferencia de los valores predictivos, vistos a continuación).'
      ],
      foco:[
        'Sensibilidad alta → buena para DESCARTAR (negativo confiable). Especificidad alta → buena para CONFIRMAR (positivo confiable). Ambas son propiedades fijas de la prueba, independientes de la población donde se aplique.'
      ]
    },
    {
      t:'Valor predictivo: lo que realmente se necesita para interpretar un resultado en un paciente',
      p:[
        'El valor predictivo positivo es la probabilidad de que una persona con resultado POSITIVO realmente TENGA la enfermedad; el valor predictivo negativo es la probabilidad de que una persona con resultado NEGATIVO realmente NO tenga la enfermedad -a diferencia de sensibilidad y especificidad, los valores predictivos SÍ dependen fuertemente de la PREVALENCIA de la enfermedad en la población donde se aplica la prueba: con la misma prueba (misma sensibilidad y especificidad fijas), el valor predictivo positivo es mucho más alto en una población de alta prevalencia (donde la mayoría de los positivos realmente tienen la enfermedad) que en una población de baja prevalencia (donde, incluso con una prueba muy específica, la mayoría de los resultados positivos pueden ser falsos positivos, simplemente porque hay muchas más personas sanas que podrían dar ese falso positivo).'
      ],
      foco:[
        '*Consideración clínica*: en una población de BAJA prevalencia, incluso una prueba con buena especificidad puede tener un valor predictivo positivo sorprendentemente bajo (muchos falsos positivos en términos absolutos) -por eso el cribado poblacional en enfermedades raras siempre debe confirmarse con una segunda prueba antes de actuar sobre un resultado positivo.'
      ]
    },
    {
      t:'Curva ROC: elegir el punto de corte según la consecuencia clínica de cada error',
      p:[
        'La curva ROC (característica operativa del receptor) grafica la sensibilidad contra 1 menos la especificidad, para distintos posibles puntos de corte de una prueba con resultado continuo (como un valor de laboratorio), permitiendo visualizar el compromiso entre sensibilidad y especificidad en cada punto de corte posible -moverse hacia un punto de corte más sensible generalmente implica sacrificar especificidad, y viceversa; no existe un punto de corte que maximice ambas simultáneamente. El área bajo la curva ROC es una medida global de qué tan bien discrimina la prueba entre enfermos y sanos (un área de 1.0 sería discriminación perfecta; un área de 0.5 equivaldría a no discriminar mejor que el azar). Elegir el punto de corte óptimo depende del contexto clínico: si un falso negativo es mucho más grave que un falso positivo (por ejemplo, cribar una enfermedad muy peligrosa y tratable), conviene elegir un punto de corte más sensible, aceptando más falsos positivos a cambio de perder menos verdaderos casos.'
      ],
      foco:[
        'La curva ROC visualiza el compromiso inevitable entre sensibilidad y especificidad según el punto de corte elegido. El punto de corte óptimo depende de las CONSECUENCIAS CLÍNICAS relativas de un falso negativo frente a un falso positivo, no de un criterio estadístico único y universal.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.'
},

'causalidad': {
  tema:'Causalidad',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:13,
  idea:'Los criterios de Bradford Hill no son una lista de requisitos que TODOS deban cumplirse para aceptar causalidad -ni siquiera su propio autor los planteó así-, sino un conjunto de consideraciones que, juntas, ayudan a evaluar qué tan plausible es una relación causal frente a una simple asociación.',
  claves:['causalidad','Bradford Hill','temporalidad','plausibilidad','gradiente'],
  sigue:'vigilancia-epidemiologica-notificacion',
  secciones:[
    {
      t:'Temporalidad: el único criterio verdaderamente indispensable',
      p:[
        'De todos los criterios de Bradford Hill, la temporalidad (que la exposición debe preceder cronológicamente al desenlace) es el único considerado absolutamente indispensable para inferir causalidad -sin secuencia temporal correcta, no puede haber relación causal en absoluto, por definición lógica (un efecto no puede preceder a su causa). Los demás criterios (fuerza de la asociación, consistencia entre estudios, especificidad, gradiente biológico, plausibilidad, coherencia, evidencia experimental, analogía) son considerados criterios de APOYO, que fortalecen (o debilitan) la plausibilidad de una relación causal, pero cuya ausencia individual no descarta automáticamente la causalidad -de hecho, muchas relaciones causales aceptadas no cumplen todos los criterios de apoyo simultáneamente.'
      ],
      foco:[
        'Temporalidad = el ÚNICO criterio absolutamente indispensable (la causa debe preceder al efecto, por definición lógica). Los demás criterios de Bradford Hill son de APOYO, no obligatorios individualmente.'
      ]
    },
    {
      t:'Gradiente biológico (relación dosis-respuesta): un criterio de apoyo particularmente convincente',
      p:[
        'El gradiente biológico (o relación dosis-respuesta) se refiere a que, si existe una relación causal real, cabría esperar que a MAYOR exposición (mayor dosis, mayor duración, mayor intensidad) corresponda un MAYOR riesgo del desenlace -encontrar este patrón gradual (por ejemplo, el riesgo de cáncer de pulmón aumenta progresivamente con el número de cigarrillos fumados por día) es uno de los criterios de apoyo más convincentes, porque es difícil de explicar completamente por una variable de confusión simple (que tendría que replicar exactamente el mismo patrón gradual para producir una asociación espuria de este tipo). Su ausencia no descarta causalidad (algunas relaciones causales son de "todo o nada", sin gradiente claro), pero su presencia es un argumento particularmente fuerte a favor.'
      ],
      foco:[
        'El gradiente biológico (dosis-respuesta) es uno de los criterios de apoyo más convincentes cuando está presente, porque una variable de confusión simple rara vez replica un patrón gradual tan específico -pero su AUSENCIA no descarta causalidad.'
      ]
    },
    {
      t:'Plausibilidad biológica: útil, pero limitada por el conocimiento científico del momento',
      p:[
        'La plausibilidad biológica pregunta si existe un mecanismo biológico conocido y razonable que explique cómo la exposición podría causar el desenlace. Es un criterio de apoyo útil, pero con una limitación importante: la plausibilidad se evalúa según el CONOCIMIENTO CIENTÍFICO disponible en el momento, que puede ser incompleto -históricamente, varias relaciones causales verdaderas fueron inicialmente descartadas o cuestionadas por "falta de plausibilidad biológica", hasta que la ciencia básica avanzó lo suficiente como para descubrir el mecanismo real que las explicaba. Por eso la ausencia de un mecanismo biológico conocido no debe usarse como argumento definitivo contra una asociación estadística sólida y consistente, solo como un elemento más a considerar dentro del conjunto completo de criterios.'
      ],
      foco:[
        '*Consideración clínica*: la "falta de plausibilidad biológica" no es un argumento definitivo contra una asociación estadística sólida -refleja los límites del conocimiento científico ACTUAL, que puede completarse después con el descubrimiento del mecanismo real.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.'
},

'vigilancia-epidemiologica-notificacion': {
  tema:'Vigilancia epidemiológica y notificación',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:12,
  idea:'Un sistema de vigilancia epidemiológica solo cumple su propósito si detecta un exceso de casos y desencadena una investigación de brote oportuna -la vigilancia sin capacidad de respuesta es, en la práctica, solo un registro pasivo de lo ya ocurrido.',
  claves:['sistema de vigilancia','enfermedad de notificación obligatoria','investigación de brote'],
  sigue:'epidemiologia-transmisibles-no-transmisibles',
  secciones:[
    {
      t:'Enfermedades de notificación obligatoria: la base de datos de la vigilancia',
      p:[
        'Las enfermedades de notificación obligatoria son un conjunto de enfermedades (definido por la autoridad de salud de cada país o región) que los profesionales de salud están legalmente obligados a reportar a las autoridades sanitarias cuando las diagnostican, típicamente enfermedades transmisibles de importancia para la salud pública (por su potencial epidémico, gravedad, o porque son prevenibles con intervenciones oportunas). Este sistema de notificación es la base de datos primaria que alimenta la vigilancia epidemiológica de rutina, permitiendo monitorear tendencias a lo largo del tiempo y detectar aumentos inusuales que podrían indicar un brote en curso.'
      ],
      foco:[
        'La notificación obligatoria es la fuente de datos primaria de la vigilancia de rutina -sin este flujo constante y legalmente exigido de información, no habría datos oportunos contra los cuales comparar para detectar un exceso.'
      ]
    },
    {
      t:'De la señal de alerta a la investigación de brote',
      p:[
        'Cuando el sistema de vigilancia detecta un número de casos que supera claramente lo esperado para una enfermedad, un lugar y un periodo determinados (recordando el concepto de "exceso respecto a lo esperado" ya visto), se activa una investigación de brote: un proceso sistemático que incluye confirmar que efectivamente existe un brote (y no solo un artefacto de mejor detección o reporte), caracterizar los casos según persona, lugar y tiempo (la tríada epidemiológica clásica), generar hipótesis sobre la fuente y el mecanismo de transmisión, y con frecuencia realizar un estudio epidemiológico analítico (casos y controles, con frecuencia, por la urgencia y la posible rareza relativa del brote) para confirmar o descartar esas hipótesis, todo con el objetivo final de implementar medidas de control lo más pronto posible, sin necesariamente esperar a tener toda la evidencia causal completa antes de actuar.'
      ],
      foco:[
        '*Consideración clínica*: una investigación de brote con frecuencia debe actuar con evidencia INCOMPLETA -implementar medidas de control razonables tan pronto como la evidencia disponible lo sugiera, sin esperar a la certeza causal completa, porque el costo de la demora en una situación de brote activo suele ser mayor que el costo de una intervención basada en evidencia preliminar sólida.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.'
},

'epidemiologia-transmisibles-no-transmisibles': {
  tema:'Epidemiología de enfermedades transmisibles y no transmisibles',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:13,
  idea:'La transición epidemiológica describe cómo, a medida que una sociedad se desarrolla, la carga de enfermedad se desplaza de las enfermedades transmisibles hacia las crónicas no transmisibles -un cambio que exige repensar por completo las prioridades y las herramientas de la salud pública.',
  claves:['cadena de transmisión','reservorio','transición epidemiológica'],
  sigue:'innata-y-adaptativa',
  secciones:[
    {
      t:'La cadena de transmisión: el marco común de las enfermedades transmisibles',
      p:[
        'La cadena de transmisión de una enfermedad infecciosa tiene eslabones bien definidos: el agente causal (el microorganismo), el reservorio (donde el agente vive y se multiplica normalmente -puede ser un humano, un animal, o el ambiente), la puerta de salida (cómo el agente sale del reservorio), el modo de transmisión (cómo llega hasta un nuevo hospedero -contacto directo, vía respiratoria, vectorial, ya vistos varios ejemplos en Parasitología y Microbiología), la puerta de entrada al nuevo hospedero, y la susceptibilidad de ese hospedero. Interrumpir la cadena en CUALQUIERA de estos eslabones detiene la transmisión -esto explica por qué las intervenciones de salud pública contra enfermedades transmisibles son tan variadas: vacunación (actúa sobre la susceptibilidad del hospedero), saneamiento (actúa sobre la puerta de salida/entrada), control de vectores (actúa sobre el modo de transmisión), cada una interrumpiendo un eslabón distinto de la misma cadena.'
      ],
      foco:[
        'Interrumpir CUALQUIER eslabón de la cadena de transmisión (agente, reservorio, puerta de salida, modo de transmisión, puerta de entrada, susceptibilidad del hospedero) detiene la enfermedad -distintas intervenciones de salud pública actúan sobre eslabones distintos de la misma cadena.'
      ]
    },
    {
      t:'La transición epidemiológica: de lo transmisible a lo crónico',
      p:[
        'La transición epidemiológica describe el patrón histórico observado en muchas sociedades a medida que se desarrollan económica y socialmente: la mortalidad y morbilidad por enfermedades transmisibles (infecciosas) disminuye progresivamente (por mejoras en saneamiento, nutrición, vacunación y atención médica), mientras que la carga relativa de enfermedades crónicas no transmisibles (cardiovasculares, cáncer, diabetes) aumenta, en parte porque la población vive más años (y las enfermedades crónicas se acumulan con la edad) y en parte por cambios en los estilos de vida asociados al desarrollo (dieta, sedentarismo, tabaquismo). Esta transición no es uniforme ni completa en todas las regiones del mundo: muchos países atraviesan una "doble carga", enfrentando simultáneamente una carga significativa de enfermedades transmisibles todavía no resueltas Y una carga creciente de enfermedades crónicas no transmisibles emergentes.'
      ],
      foco:[
        '*Consideración clínica*: la "doble carga" de enfermedad (transmisibles no resueltas + no transmisibles crecientes) es la realidad epidemiológica de muchos países en transición, exigiendo que los sistemas de salud manejen simultáneamente ambos tipos de prioridades, no una sustitución limpia de una agenda por otra.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.'
}

});
