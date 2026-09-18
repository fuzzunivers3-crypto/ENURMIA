/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 11)
   Termina de cubrir EPIDEMIOLOGIA por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'medidas-frecuencia-epi': {
  tema:'Medidas de frecuencia',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:7,
  idea:'"Prevalencia" e "incidencia" se usan a veces como sinónimos en el habla cotidiana, y esa confusión es un error real de examen: miden cosas distintas, y confundirlas lleva a interpretar mal un estudio.',
  claves:['prevalencia','incidencia','tasa','riesgo','densidad de incidencia'],
  sigue:'medidas-asociacion',
  secciones:[
    {
      t:'Prevalencia: una fotografía; incidencia: una película',
      p:[
        'La *prevalencia* es la proporción de personas que TIENEN una enfermedad en un momento (o periodo) determinado, sin importar cuándo empezó: es como una fotografía fija de la población, que cuenta todos los casos existentes en ese instante, nuevos y viejos por igual. La *incidencia* es la proporción de personas SIN la enfermedad que la DESARROLLAN (casos nuevos) durante un periodo de seguimiento: es como una película, que sigue a la población en el tiempo y cuenta solo lo que ocurre de nuevo.',
        'Esta diferencia importa mucho en la práctica: una enfermedad de curso muy breve (que se cura rápido o mata rápido) puede tener una incidencia alta pero una prevalencia baja (los casos no se acumulan, entran y salen rápido de la población de enfermos); una enfermedad crónica (que dura años, como la diabetes) puede tener una incidencia relativamente baja pero una prevalencia alta, porque los casos se van acumulando con el tiempo.'
      ]
    },
    {
      t:'Riesgo y densidad de incidencia: dos formas de medir lo nuevo',
      p:[
        'El *riesgo* (o incidencia acumulada) es la proporción de personas que desarrollan la enfermedad de entre todas las que estaban en riesgo al inicio del periodo de seguimiento, asumiendo que todas fueron seguidas durante el mismo tiempo. La *densidad de incidencia* (o tasa de incidencia) ajusta por el TIEMPO real que cada persona estuvo en riesgo y bajo observación (persona-tiempo), lo cual es más preciso cuando distintas personas entran o salen del estudio en momentos distintos, o cuando el seguimiento no dura exactamente lo mismo para todos.',
        'Una *tasa*, en el sentido estadístico estricto, siempre incluye una dimensión de tiempo en su denominador (por ejemplo, casos por 1.000 personas-año); usar el término de forma imprecisa (llamar "tasa" a una simple proporción sin tiempo) es un error común que conviene evitar en un reporte técnico.'
      ],
      foco:[
        'Ejemplo trabajado: si 100 personas se siguen durante un año y 10 desarrollan la enfermedad, el riesgo es 10/100 = 10%. Pero si algunas de esas 100 personas solo fueron seguidas 6 meses (por salir del estudio antes), la densidad de incidencia (que ajusta por ese tiempo real de seguimiento) da una estimación distinta y más precisa que el riesgo simple.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 4.'
},

'medidas-asociacion': {
  tema:'Medidas de asociación',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:7,
  idea:'Estas medidas responden a la pregunta central de la epidemiología analítica: ¿la exposición está relacionada con la enfermedad, y qué tan fuerte es esa relación? Y la respuesta se calcula distinto según el tipo de estudio del que provenga el dato.',
  claves:['riesgo relativo','odds ratio','razón de prevalencias','asociación'],
  sigue:'medidas-impacto',
  secciones:[
    {
      t:'El riesgo relativo: cuántas veces más riesgo',
      p:[
        'El *riesgo relativo* compara directamente el riesgo (incidencia) de enfermedad entre el grupo expuesto y el grupo no expuesto, dividiendo uno entre el otro: un riesgo relativo de 3 significa que el grupo expuesto tiene tres veces el riesgo del grupo no expuesto. Un riesgo relativo de 1 significa que no hay diferencia (misma probabilidad en ambos grupos); mayor de 1 sugiere que la exposición aumenta el riesgo; menor de 1 sugiere que lo reduce (un factor protector). Esta medida solo se puede calcular directamente en estudios que siguen a la población en el tiempo (cohortes, ensayos clínicos), donde se conoce la incidencia real en cada grupo.'
      ]
    },
    {
      t:'El odds ratio: la alternativa para estudios de casos y controles',
      p:[
        'El *odds ratio* (razón de momios) compara las probabilidades relativas ("momios", no lo mismo que el riesgo directo) de haber estado expuesto entre los casos y los controles, ya introducido en Bioestadística. Se usa en particular en los estudios de casos y controles (que se verán en el siguiente tema), donde NO se puede calcular directamente el riesgo relativo, porque el estudio no sigue a una población desde el inicio: empieza ya con los casos identificados.',
        'Cuando la enfermedad estudiada es poco frecuente en la población general, el odds ratio se aproxima razonablemente bien al riesgo relativo, y por eso se usa a menudo como una buena estimación sustituta en esos casos; con enfermedades frecuentes, esa aproximación deja de ser tan precisa.'
      ],
      foco:[
        'La *razón de prevalencias* es análoga al riesgo relativo, pero calculada a partir de datos de prevalencia (típicos de un estudio transversal) en vez de incidencia: compara qué tan prevalente es la enfermedad entre expuestos frente a no expuestos, en un mismo momento del tiempo.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 6-7.'
},

'medidas-impacto': {
  tema:'Medidas de impacto',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:6,
  idea:'Saber que un factor de riesgo TRIPLICA el riesgo relativo de una enfermedad no dice, por sí solo, cuántos casos reales se evitarían eliminando ese factor: para eso hacen falta las medidas de impacto, que traducen la asociación en números poblacionales concretos.',
  claves:['riesgo atribuible','fracción atribuible','NNT','impacto poblacional'],
  sigue:'estudios-descriptivos-transversales',
  secciones:[
    {
      t:'Riesgo atribuible: la diferencia absoluta, no la relativa',
      p:[
        'El *riesgo atribuible* es la diferencia (no el cociente, como el riesgo relativo) entre la incidencia en el grupo expuesto y la incidencia en el grupo no expuesto: representa la cantidad de casos que, en términos absolutos, se le puede atribuir directamente a la exposición, y que en teoría se evitarían si se eliminara esa exposición. La *fracción atribuible* expresa esa misma idea como un porcentaje: qué proporción de los casos en el grupo expuesto se debe específicamente a la exposición.',
        'Ejemplo trabajado: un factor de riesgo puede tener un riesgo relativo muy alto (por ejemplo, 5) para una enfermedad muy rara, y aun así el riesgo atribuible (el número absoluto de casos extra) puede ser pequeño, porque la enfermedad de base ya era poco frecuente. Esta distinción es exactamente la misma idea ya vista en Bioestadística sobre significación estadística frente a relevancia clínica, aplicada ahora a nivel poblacional.'
      ]
    },
    {
      t:'NNT: traducir el efecto a la práctica clínica directa',
      p:[
        'El *NNT* (número necesario a tratar) es una medida derivada, muy usada en la evaluación de tratamientos: indica a cuántos pacientes hay que tratar, en promedio, para prevenir UN evento adicional (comparado con no tratarlos). Un NNT bajo (por ejemplo, 5) indica un tratamiento muy eficaz en términos prácticos; un NNT alto (por ejemplo, 500) indica que hace falta tratar a muchísimas personas para prevenir un solo evento, lo cual pesa en la decisión de si vale la pena ese tratamiento, considerando también sus costos y riesgos.',
        'El *impacto poblacional* combina la fuerza de la asociación con qué tan común es la exposición en la población: una exposición con un riesgo relativo modesto pero MUY común (como la inactividad física) puede tener un impacto poblacional mayor que una exposición con un riesgo relativo enorme pero rara, precisamente porque afecta a mucha más gente.'
      ],
      foco:[
        'Este tema conecta directamente con la toma de decisiones de salud pública: no basta con saber qué tan fuerte es una asociación (riesgo relativo), hay que saber también cuántos casos reales representa esa asociación en la población, para decidir dónde invertir los recursos de prevención.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 8.'
},

'estudios-descriptivos-transversales': {
  tema:'Estudios descriptivos y transversales',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:6,
  idea:'Antes de poder preguntar POR QUÉ ocurre algo, primero hay que describir bien QUÉ está ocurriendo: estos son los diseños de estudio más básicos, y a menudo el primer paso de cualquier investigación epidemiológica.',
  claves:['descriptivo','transversal','serie de casos','prevalencia'],
  sigue:'estudios-casos-controles',
  secciones:[
    {
      t:'Estudios descriptivos: documentar sin comparar',
      p:[
        'Un estudio *descriptivo* documenta la distribución de una enfermedad (por persona, lugar y tiempo, ya visto en el tema de conceptos de epidemiología), sin necesariamente comparar grupos ni poner a prueba una hipótesis causal específica. Una *serie de casos* es el ejemplo más básico: describe las características de un grupo de pacientes con una enfermedad o condición en particular, útil para generar hipótesis iniciales sobre una enfermedad nueva o poco conocida, pero sin la capacidad de demostrar causalidad —solo describe, no compara contra un grupo de referencia.'
      ]
    },
    {
      t:'El estudio transversal: una fotografía de la población',
      p:[
        'Un estudio *transversal* (de corte) mide la exposición y la enfermedad al MISMO tiempo, en un solo momento, en una muestra de la población —es literalmente una fotografía, y es el diseño natural para medir *prevalencia* (ya vista). Su limitación principal es que, al medir todo a la vez, generalmente no se puede establecer con certeza la secuencia temporal (qué vino primero, la exposición o la enfermedad), lo cual es un requisito importante para argumentar causalidad, como se verá más adelante en el tema correspondiente.',
        'Ejemplo trabajado: un estudio transversal podría encontrar que las personas con cierta enfermedad tienen niveles más bajos de una vitamina en sangre, pero no puede decir, solo con ese diseño, si la falta de vitamina causó la enfermedad o si la enfermedad misma causó que bajara la vitamina —ambas explicaciones son compatibles con el mismo hallazgo transversal.'
      ],
      foco:[
        'Los estudios transversales son rápidos y relativamente baratos de hacer, comparados con los diseños que siguen a la población en el tiempo (cohortes), pero pagan ese precio con una capacidad mucho más limitada para establecer causalidad.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 5.'
},

'estudios-casos-controles': {
  tema:'Estudios de casos y controles',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:7,
  idea:'Este diseño empieza al revés de lo que parecería intuitivo: en vez de partir de la exposición y esperar a ver quién enferma, parte de la enfermedad ya presente y mira HACIA ATRÁS para buscar la exposición — una estrategia particularmente eficiente para estudiar enfermedades raras.',
  claves:['casos y controles','retrospectivo','odds ratio','sesgo de memoria'],
  sigue:'estudios-cohortes',
  secciones:[
    {
      t:'Partir de la enfermedad, mirar hacia atrás',
      p:[
        'Un estudio de *casos y controles* selecciona a un grupo de personas que YA TIENEN la enfermedad de interés (los casos) y a un grupo comparable de personas que NO la tienen (los controles), y después compara, mirando hacia atrás en el tiempo (*retrospectivo*), qué tan frecuente fue la exposición sospechada en cada grupo. Si la exposición fue mucho más frecuente entre los casos que entre los controles, eso sugiere una asociación entre esa exposición y la enfermedad.',
        'Este diseño es particularmente eficiente para estudiar enfermedades RARAS: reclutar directamente a un número suficiente de casos raros es mucho más rápido y barato que seguir a una población enorme durante años esperando a que aparezcan casos nuevos (como requeriría un estudio de cohortes). Como ya se vio en Bioestadística y en el tema de medidas de asociación, la medida de asociación propia de este diseño es el *odds ratio*, no el riesgo relativo directo.'
      ]
    },
    {
      t:'Su principal debilidad: el sesgo de memoria',
      p:[
        'Al preguntar retrospectivamente sobre exposiciones pasadas, este diseño es especialmente vulnerable al *sesgo de memoria* (recall bias): las personas con la enfermedad (los casos) tienden a recordar y reportar exposiciones pasadas con más detalle y precisión que los controles sanos, simplemente porque han estado buscando activamente una explicación para su enfermedad, no porque la exposición haya sido realmente más frecuente en ellos. Este sesgo puede inflar artificialmente la asociación observada.'
      ],
      foco:[
        'Consideración práctica: elegir bien a los controles (que sean comparables a los casos en todo excepto en tener la enfermedad) es, junto con controlar el sesgo de memoria, el mayor desafío metodológico de este tipo de estudio.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 9.'
},

'estudios-cohortes': {
  tema:'Estudios de cohortes',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:7,
  idea:'A diferencia del estudio de casos y controles, este diseño sí respeta el orden natural del tiempo: parte de personas sanas, con y sin la exposición, y las sigue hacia adelante para ver quién enferma — más lento y más caro, pero metodológicamente más fuerte.',
  claves:['cohorte','prospectivo','incidencia','pérdida de seguimiento'],
  sigue:'ensayo-clinico-aleatorizado',
  secciones:[
    {
      t:'Partir de la exposición, seguir hacia adelante',
      p:[
        'Un estudio de *cohorte* identifica a un grupo de personas SIN la enfermedad de interés, clasificadas según si tienen o no la exposición sospechada, y las sigue en el tiempo (*prospectivo*, hacia adelante) para observar quién desarrolla la enfermedad. Porque sigue a la población en el tiempo desde antes de que aparezca la enfermedad, puede calcular directamente la *incidencia* en cada grupo, y con ella, el riesgo relativo directo (ya visto), sin necesitar la aproximación del odds ratio.',
        'Al respetar la secuencia temporal natural (la exposición se mide antes de que aparezca la enfermedad), un estudio de cohorte tiene menos riesgo de sesgo de memoria que uno de casos y controles, y en general se considera un diseño observacional más robusto para argumentar causalidad —aunque sigue siendo observacional, no experimental como el ensayo clínico que se verá a continuación.'
      ]
    },
    {
      t:'Su principal debilidad: la pérdida de seguimiento',
      p:[
        'Seguir a una población durante años (a veces décadas) es costoso y lento, y a lo largo de ese seguimiento es inevitable que algunos participantes se pierdan del estudio antes de terminar (*pérdida de seguimiento*): se mudan, dejan de responder, o simplemente abandonan la participación. Si esa pérdida no es aleatoria —por ejemplo, si las personas expuestas y enfermas tienden a abandonar el estudio más que las demás—, puede introducir un sesgo que distorsione los resultados finales, similar en su lógica al problema de la censura ya visto en el análisis de supervivencia de Bioestadística.'
      ],
      foco:[
        'Regla práctica de jerarquía (provisional, hasta ver el ensayo clínico): entre los diseños observacionales, la cohorte suele considerarse metodológicamente más fuerte que el de casos y controles, precisamente por respetar la secuencia temporal natural, aunque a cambio de mucho más tiempo y costo.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 10.'
},

'ensayo-clinico-aleatorizado': {
  tema:'Ensayo clínico aleatorizado',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:8,
  idea:'Este es el único diseño de los vistos hasta ahora donde el investigador ASIGNA activamente la exposición (el tratamiento), en vez de solo observarla: esa capacidad de asignar al azar es lo que lo coloca en la cima de la jerarquía de evidencia para demostrar causalidad.',
  claves:['ensayo clínico','aleatorización','cegamiento','intención de tratar','placebo'],
  sigue:'sesgos-confusion-interaccion',
  secciones:[
    {
      t:'La aleatorización: repartir lo desconocido por igual',
      p:[
        'En un *ensayo clínico* controlado, el investigador asigna a los participantes a recibir el tratamiento en estudio o un comparador (otro tratamiento, o un *placebo*, una sustancia inactiva) mediante *aleatorización*: cada participante tiene una probabilidad determinada de azar de caer en un grupo u otro, sin que nadie elija. Esto es fundamentalmente distinto a los diseños observacionales ya vistos (cohorte, casos y controles), donde la exposición ya ocurrió por decisión propia de cada persona o por circunstancias de su vida, no por asignación del investigador.',
        'La gran ventaja de la aleatorización es que, si la muestra es lo bastante grande, reparte por igual entre los dos grupos tanto las variables CONOCIDAS como las DESCONOCIDAS que podrían influir en el resultado —algo que ningún ajuste estadístico posterior (como el "ajuste" ya visto en regresión logística) puede garantizar, porque ese ajuste solo controla las variables que el investigador pensó en medir.'
      ]
    },
    {
      t:'Cegamiento e intención de tratar',
      p:[
        'El *cegamiento* (que el participante, o también el investigador que evalúa los resultados, no sepa a qué grupo fue asignado) reduce el riesgo de que las expectativas de cualquiera de las dos partes influyan, consciente o inconscientemente, en los resultados reportados o en su evaluación. El análisis por *intención de tratar* analiza a cada participante según el grupo al que fue asignado ORIGINALMENTE, sin importar si terminó cumpliendo el tratamiento completo o no, preservando así el beneficio completo de la aleatorización original —cambiar de grupo de análisis según lo que realmente hizo cada participante (en vez de a qué fue asignado) reintroduce el mismo tipo de sesgo que la aleatorización buscaba evitar.'
      ],
      foco:[
        'Consideración ética: no todas las preguntas de investigación se pueden estudiar con un ensayo clínico —sería inaceptable asignar aleatoriamente a alguien a "fumar" para estudiar el cáncer de pulmón—, y para esas preguntas, los diseños observacionales (cohorte, casos y controles) siguen siendo la única opción posible, con todas sus limitaciones ya vistas.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 11.'
},

'sesgos-confusion-interaccion': {
  tema:'Sesgos, confusión e interacción',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:7,
  idea:'Tres formas distintas en que un estudio puede llevar a una conclusión equivocada (o incompleta), y cada una necesita una estrategia de corrección diferente: no son el mismo problema con distintos nombres.',
  claves:['sesgo','confusión','interacción','apareamiento','estratificación'],
  sigue:'validez-prueba-diagnostica',
  secciones:[
    {
      t:'Sesgo: un error sistemático en el diseño o la medición',
      p:[
        'Un *sesgo* es un error sistemático (no aleatorio) introducido por cómo se diseñó, condujo o analizó el estudio, que distorsiona el resultado en una dirección determinada —ya se vieron dos ejemplos concretos: el sesgo de selección (en el tema de muestreo de Estadística I) y el sesgo de memoria (en casos y controles). A diferencia del error aleatorio (que un tamaño de muestra mayor puede reducir), un sesgo no se corrige aumentando la muestra: hay que prevenirlo desde el diseño del estudio.'
      ]
    },
    {
      t:'Confusión: cuando una tercera variable distorsiona la relación',
      p:[
        'La *confusión* ocurre cuando una tercera variable está asociada TANTO con la exposición COMO con la enfermedad, sin ser parte de la cadena causal entre ambas, distorsionando la asociación observada —es, precisamente, el problema detrás del ejemplo ya visto de los helados y los ahogamientos en Bioestadística (el calor del verano es la variable de confusión). Se controla, entre otras formas, por *estratificación* (analizar la asociación por separado dentro de cada nivel de la variable de confusión) o por *apareamiento* (emparejar a cada caso con un control similar en esa variable, desde el diseño mismo del estudio, como se practicó también en las pruebas t apareadas de Bioestadística).',
        'La *interacción* (o modificación de efecto) es distinta de la confusión: ocurre cuando el efecto de una exposición sobre la enfermedad varía de verdad según el nivel de una tercera variable —no es un error a corregir, es un hallazgo real que hay que reportar y entender, no esconder con un ajuste estadístico.'
      ],
      foco:[
        'Diferencia clave: la confusión es un problema que hay que CONTROLAR porque distorsiona la asociación real; la interacción es un hallazgo real que hay que DESCRIBIR, porque el efecto verdaderamente es distinto según el subgrupo.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 12-15.'
},

'validez-prueba-diagnostica': {
  tema:'Validez de una prueba diagnóstica',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:8,
  idea:'Ninguna prueba diagnóstica es perfecta, y entender exactamente en qué falla —a quién deja pasar por alto, a quién le da un susto innecesario— es lo que permite usarla con criterio en vez de creerle ciegamente.',
  claves:['sensibilidad','especificidad','valor predictivo','curva ROC','cribado'],
  sigue:'causalidad',
  secciones:[
    {
      t:'Sensibilidad y especificidad: propiedades de la prueba misma',
      p:[
        'La *sensibilidad* es la proporción de personas VERDADERAMENTE enfermas que la prueba detecta correctamente como positivas: una prueba muy sensible casi no deja pasar por alto a ningún enfermo (pocos falsos negativos), lo cual la hace útil para *cribado* (descartar una enfermedad en personas de bajo riesgo, ya visto en Medicina Preventiva). La *especificidad* es la proporción de personas VERDADERAMENTE sanas que la prueba identifica correctamente como negativas: una prueba muy específica casi no da falsos positivos, lo cual la hace útil para confirmar un diagnóstico ya sospechado.',
        'Estas dos propiedades son intrínsecas de la prueba (no dependen de en qué población se use), y suele haber una relación de compromiso entre ambas: ajustar el punto de corte de una prueba para ganar sensibilidad casi siempre cuesta algo de especificidad, y viceversa. La *curva ROC* representa gráficamente ese compromiso a lo largo de todos los puntos de corte posibles, ayudando a elegir el punto que mejor equilibra ambos objetivos según el propósito clínico.'
      ]
    },
    {
      t:'Valores predictivos: lo que sí depende de la población',
      p:[
        'El *valor predictivo* positivo (la probabilidad de que alguien con un resultado positivo esté REALMENTE enfermo) y el valor predictivo negativo (la probabilidad de que alguien con resultado negativo esté REALMENTE sano) sí dependen, además de la sensibilidad y especificidad, de la PREVALENCIA de la enfermedad en la población donde se usa la prueba.',
        'Ejemplo trabajado: la misma prueba, con la misma sensibilidad y especificidad, tiene un valor predictivo positivo mucho más bajo cuando se usa en una población de baja prevalencia (la mayoría de los positivos terminan siendo falsos positivos, simplemente porque hay pocos enfermos de verdad para empezar) que cuando se usa en una población de alta prevalencia (donde un resultado positivo es mucho más probable que sea un verdadero positivo).'
      ],
      foco:[
        'Consideración práctica: por esto, aplicar una prueba de cribado a una población de muy bajo riesgo (baja prevalencia) puede generar muchos falsos positivos, con la ansiedad y los estudios adicionales innecesarios que eso conlleva —es una de las razones por las que el cribado se dirige a grupos con factores de riesgo, no a toda la población indiscriminadamente.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 4 y 17.'
},

'causalidad': {
  tema:'Causalidad',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:7,
  idea:'Este tema cierra el círculo abierto en Bioestadística ("correlación no implica causalidad"): aquí se ven los criterios prácticos que sí ayudan a decidir, con buen juicio y evidencia acumulada, cuándo una asociación observada probablemente refleja una relación causal real.',
  claves:['causalidad','Bradford Hill','temporalidad','plausibilidad','gradiente'],
  sigue:'vigilancia-epidemiologica-notificacion',
  secciones:[
    {
      t:'Los criterios de Bradford Hill: no una fórmula, una guía de juicio',
      p:[
        'Los criterios de *Bradford Hill* son un conjunto de consideraciones (no una lista de requisitos obligatorios ni una fórmula matemática) que ayudan a evaluar qué tan probable es que una asociación observada sea causal. La *temporalidad* es el único criterio verdaderamente indispensable: la causa tiene que preceder al efecto en el tiempo (por eso un estudio de cohorte, que respeta la secuencia temporal, aporta evidencia más fuerte que uno transversal, que no puede establecerla con certeza).',
        'La fuerza de la asociación (un riesgo relativo grande es más difícil de explicar solo por confusión residual que uno pequeño), la consistencia (encontrar la misma asociación en estudios distintos, con poblaciones y métodos distintos), y el *gradiente* biológico (dosis-respuesta: a más exposición, más riesgo, de forma proporcional) son otros criterios que, cuando están presentes, refuerzan la hipótesis causal.'
      ]
    },
    {
      t:'Plausibilidad biológica y el conjunto completo',
      p:[
        'La *plausibilidad* biológica pregunta si existe un mecanismo conocido, razonable desde la fisiología o la bioquímica ya estudiadas, que explique cómo la exposición podría causar el efecto observado —aunque este criterio tiene un límite importante: una asociación real puede preceder al descubrimiento del mecanismo que la explica, así que la falta de plausibilidad actual no descarta automáticamente la causalidad.',
        'Ningún criterio individual demuestra causalidad por sí solo, y no hace falta cumplirlos todos: la evaluación es un juicio integrado, sopesando cuántos criterios se cumplen y con qué fuerza, en el contexto de toda la evidencia disponible sobre esa pregunta específica.'
      ],
      foco:[
        'Este tema conecta directamente con el meta-análisis ya visto en Bioestadística: la consistencia entre múltiples estudios independientes (que un meta-análisis puede cuantificar formalmente) es uno de los criterios de Bradford Hill más citados en la práctica.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 14.'
},

'vigilancia-epidemiologica-notificacion': {
  tema:'Vigilancia epidemiológica y notificación',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:6,
  idea:'La vigilancia epidemiológica es la infraestructura constante y silenciosa que hace posible detectar un brote a tiempo: sin datos recogidos de forma continua y sistemática, un aumento real de casos podría pasar desapercibido hasta que ya sea demasiado tarde para contenerlo.',
  claves:['sistema de vigilancia','enfermedad de notificación obligatoria','investigación de brote'],
  sigue:'epidemiologia-transmisibles-no-transmisibles',
  secciones:[
    {
      t:'Un sistema de recolección continua, no puntual',
      p:[
        'Un *sistema de vigilancia* epidemiológica recoge, analiza e interpreta datos de salud de forma continua y sistemática, con el propósito específico de detectar cambios en la frecuencia o distribución de una enfermedad lo antes posible, y de orientar la respuesta de salud pública. A diferencia de un estudio de investigación puntual (que responde una pregunta específica y termina), la vigilancia es un proceso permanente, retomando directamente las fuentes de datos ya vistas en Estadística I (registros vitales, sistemas de información en salud).',
        'Ciertas enfermedades se consideran de *notificación obligatoria*: cualquier caso detectado debe reportarse, por ley, a las autoridades de salud, precisamente porque su detección temprana y su respuesta rápida (aislamiento, tratamiento, búsqueda de contactos) tiene un valor de salud pública que va más allá del interés del caso individual.'
      ]
    },
    {
      t:'De la señal de alarma a la investigación de campo',
      p:[
        'Cuando el sistema de vigilancia detecta un aumento de casos por encima de lo esperado (un brote, ya definido en el tema de conceptos de epidemiología), se activa una *investigación de brote*: confirmar que realmente es un brote y no un artefacto de los datos, caracterizarlo por persona, lugar y tiempo (retomando la epidemiología descriptiva), formular una hipótesis sobre la fuente o la causa, ponerla a prueba con un estudio analítico rápido (a menudo un estudio de casos y controles, por su rapidez), e implementar medidas de control mientras la investigación continúa —no se espera a tener la certeza absoluta para actuar, cuando la salud pública está en juego.'
      ],
      foco:[
        'Este tema aterriza en la práctica todo el bloque de Epidemiología: la vigilancia usa las medidas de frecuencia para detectar la anomalía, la investigación de brote usa los diseños de estudio (sobre todo casos y controles) para encontrar la causa, y los criterios de causalidad para decidir cuándo actuar con la evidencia disponible.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 16.'
},

'epidemiologia-transmisibles-no-transmisibles': {
  tema:'Epidemiología de enfermedades transmisibles y no transmisibles',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:6,
  idea:'Este último tema del bloque muestra que la misma caja de herramientas epidemiológicas (medidas de frecuencia, estudios, causalidad) se aplica a dos mundos de enfermedad con una diferencia fundamental: unas se contagian de persona a persona, las otras no.',
  claves:['cadena de transmisión','reservorio','transición epidemiológica'],
  sigue:null,
  secciones:[
    {
      t:'La cadena de transmisión: exclusiva de las enfermedades infecciosas',
      p:[
        'Las enfermedades transmisibles (infecciosas) tienen una *cadena de transmisión*: un agente infeccioso, un *reservorio* (donde el agente vive y se multiplica, humano o animal, como ya se vio con las zoonosis en Parasitología), una puerta de salida del reservorio, un modo de transmisión, una puerta de entrada al nuevo huésped, y un huésped susceptible. Esta cadena es, precisamente, lo que permite que la enfermedad se propague de persona a persona (o de animal a persona), y cada eslabón es un punto potencial donde intervenir para cortar la transmisión —exactamente la lógica ya vista en el tema de control y prevención de parasitosis.',
        'Las enfermedades no transmisibles (crónicas, como la diabetes, la hipertensión o el cáncer) no tienen esta cadena: no se contagian de persona a persona, y su origen es multifactorial (herencia, ambiente, estilo de vida), retomando directamente la herencia multifactorial ya vista en Genética Médica.'
      ]
    },
    {
      t:'La transición epidemiológica',
      p:[
        'La *transición epidemiológica* describe un patrón observado históricamente en muchos países: a medida que mejora el control de las enfermedades infecciosas (mejor saneamiento, vacunas, antibióticos) y aumenta la esperanza de vida, el peso relativo de la carga de enfermedad de una población se va desplazando desde las enfermedades transmisibles hacia las enfermedades crónicas no transmisibles, que se vuelven la causa principal de muerte y discapacidad.',
        'Este concepto cierra el bloque completo de Epidemiología conectándolo con Medicina Preventiva (que se verá en 9no): entender en qué punto de esa transición está una población determinada ayuda a decidir dónde enfocar los recursos de salud pública —control de infecciones, o prevención de enfermedades crónicas— de forma más eficiente.'
      ],
      foco:[
        'Muchos países, incluidos varios de la región, atraviesan hoy una "doble carga": siguen enfrentando enfermedades infecciosas importantes a la vez que ya cargan con un peso creciente de enfermedades crónicas no transmisibles, sin haber completado del todo la transición clásica.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 1 y 18.'
}

});
