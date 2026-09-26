/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 11 (lote 4)
   Cubre PATOLOGÍA INFECCIOSA al estandar extenso (3 secciones,
   ~200-300 palabras por seccion, min 12-14). Cuarta materia del
   cuatrimestre 11 (3 creditos, 12 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== PATOLOGÍA INFECCIOSA ==================== */
'principios-enfermedades-infecciosas': {
  tema:'Principios de enfermedades infecciosas',
  bloque:'Patología Infecciosa', programa:'unirm', cuatri:11, min:13,
  idea:'Antes de estudiar cada enfermedad infecciosa específica, este tema establece el marco conceptual común que permite razonar sobre cualquier infección: quién la causa, cómo se transmite, y por qué se manifiesta clínicamente de la forma en que lo hace.',
  claves:['tríada epidemiológica','cadena de transmisión de infecciones','huésped agente y ambiente'],
  sigue:'sindrome-febril-origen-desconocido',
  secciones:[
    {
      t:'La tríada epidemiológica como modelo básico',
      p:[
        'La *tríada epidemiológica* es el modelo clásico que explica la ocurrencia de una enfermedad infecciosa como el resultado de la interacción entre tres elementos: el *huésped* (la persona susceptible, con sus características individuales de inmunidad, edad, comorbilidades), el *agente* (el microorganismo causal, con sus propias características de virulencia y capacidad de transmisión), y el *ambiente* (las condiciones externas que facilitan o dificultan el contacto entre huésped y agente, incluyendo factores sociales, climáticos y sanitarios).',
        'Este modelo retoma directamente la lógica ya vista sobre determinantes sociales de la salud (Salud y Comunidad I, 9no): una enfermedad infecciosa rara vez se explica solo por la presencia de un microorganismo, sino por la combinación específica de un huésped susceptible en un ambiente que facilita la exposición -entender esta interacción es lo que permite intervenir en cualquiera de los tres elementos para prevenir o controlar una infección.'
      ]
    },
    {
      t:'La cadena de transmisión de infecciones',
      p:[
        'La *cadena de transmisión de infecciones* describe la secuencia de eslabones necesarios para que una infección se propague: el agente infeccioso, el reservorio (donde el agente vive y se multiplica), la puerta de salida del reservorio, el modo de transmisión (contacto directo, gotas respiratorias, vía fecal-oral, vectores, entre otros), la puerta de entrada al nuevo huésped, y finalmente un huésped susceptible.',
        'Comprender esta cadena tiene una utilidad práctica directa: cada intervención de control de infecciones -desde el aislamiento de un paciente hasta el uso de precauciones estándar ya vistas en Servicio Hospitalario Pre Clínico (10mo)- actúa interrumpiendo uno o más eslabones específicos de esta cadena, y reconocer en cuál eslabón interviene una medida determinada ayuda a entender por qué es efectiva o por qué, en ciertos contextos, no lo es.'
      ]
    },
    {
      t:'Por qué este marco conceptual es la base de todo el bloque',
      p:[
        'Cada enfermedad infecciosa específica que se aborda en el resto de este bloque -desde la tuberculosis hasta el dengue- puede analizarse a través de este mismo marco: identificar el agente causal, el reservorio, el modo de transmisión predominante, y las características del huésped que aumentan la susceptibilidad, permite anticipar tanto el cuadro clínico esperado como las medidas de control más efectivas.',
        'Este tema cumple la misma función que los temas introductorios ya vistos al inicio de otros bloques de este pensum (como fisiología del embarazo normal en Obstetricia I): establecer el marco conceptual común sobre el cual se construye el resto del contenido específico del bloque.'
      ],
      foco:[
        '*Consideración clínica*: ante cualquier enfermedad infecciosa nueva, preguntarse explícitamente por el reservorio y el modo de transmisión predominante ayuda a anticipar tanto el riesgo de propagación como las medidas de control más efectivas para interrumpir la cadena.'
      ]
    }
  ],
  ref:'Mandell, Enfermedades Infecciosas, cap. 1.'
},

'sindrome-febril-origen-desconocido': {
  tema:'Síndrome febril de origen desconocido',
  bloque:'Patología Infecciosa', programa:'unirm', cuatri:11, min:13,
  idea:'La fiebre de origen desconocido es uno de los retos diagnósticos clásicos de la medicina interna, donde un abordaje sistemático es mucho más productivo que una batería indiscriminada de estudios sin una hipótesis clínica clara que los oriente.',
  claves:['fiebre de origen desconocido','abordaje del síndrome febril','causas de fiebre prolongada'],
  sigue:'infecciones-bacterianas-comunes',
  secciones:[
    {
      t:'Qué define a la fiebre de origen desconocido',
      p:[
        'La *fiebre de origen desconocido* se define clásicamente como fiebre documentada de cierta duración prolongada (con criterios específicos de tiempo, tradicionalmente varias semanas), sin que una evaluación clínica inicial razonable logre identificar la causa, a pesar de estudios diagnósticos básicos ya realizados -esta definición excluye deliberadamente la fiebre aguda de corta duración, que tiene un enfoque diagnóstico distinto centrado en las infecciones comunes más probables.',
        'Las causas de la fiebre de origen desconocido son heterogéneas y se agrupan clásicamente en varias categorías amplias: infecciosas (la categoría más frecuente en muchos contextos), neoplásicas, autoinmunes o inflamatorias, y misceláneas -reconocer esta amplitud de categorías es lo que justifica un abordaje sistemático, en vez de asumir prematuramente una causa infecciosa sin considerar las demás.'
      ]
    },
    {
      t:'El abordaje sistemático del síndrome febril prolongado',
      p:[
        'El *abordaje del síndrome febril* de origen desconocido prioriza una historia clínica y un examen físico exhaustivos y repetidos en el tiempo (un hallazgo que no era evidente en la primera evaluación puede volverse aparente en una evaluación posterior), seguidos de estudios diagnósticos escalonados que se ajustan según los hallazgos encontrados, en vez de solicitar de forma indiscriminada todos los estudios posibles desde el inicio.',
        'Este enfoque escalonado retoma directamente el mismo principio ya visto repetidamente en este pensum: dirigir el estudio diagnóstico según una hipótesis clínica que se va refinando progresivamente, en vez de una búsqueda no dirigida que, además de ser costosa, puede generar hallazgos incidentales sin relación real con la causa de la fiebre, complicando en vez de aclarar el cuadro.'
      ]
    },
    {
      t:'Causas de fiebre prolongada según el contexto clínico',
      p:[
        'Las *causas de fiebre prolongada* varían considerablemente según el contexto epidemiológico y las características del paciente: en poblaciones con alta prevalencia de ciertas infecciones endémicas, estas deben considerarse activamente dentro del diagnóstico diferencial, mientras en pacientes con factores de riesgo específicos (inmunosupresión, viajes recientes, exposiciones ocupacionales) el abordaje debe ajustarse a esas particularidades individuales.',
        'Este principio retoma la importancia ya vista sobre individualizar la evaluación clínica según el contexto específico de cada paciente: no existe una lista universal fija de causas más probables aplicable de igual forma a cualquier paciente con fiebre prolongada, sino que el contexto epidemiológico y los antecedentes individuales orientan considerablemente el diagnóstico diferencial más probable en cada caso.'
      ],
      foco:[
        '*Consideración clínica*: ante un síndrome febril de origen desconocido, repetir la historia clínica y el examen físico en distintos momentos con frecuencia revela hallazgos que no eran evidentes inicialmente, siendo más productivo que una batería indiscriminada de estudios de laboratorio.'
      ]
    }
  ],
  ref:'Mandell, Enfermedades Infecciosas, cap. 52.'
},

'infecciones-bacterianas-comunes': {
  tema:'Infecciones bacterianas comunes',
  bloque:'Patología Infecciosa', programa:'unirm', cuatri:11, min:13,
  idea:'Las infecciones bacterianas más frecuentes en la práctica clínica comparten un patrón de razonamiento común: identificar el sitio de infección probable, el agente bacteriano más probable según ese sitio, y decidir el tratamiento antimicrobiano dirigido en consecuencia.',
  claves:['infección estreptocócica','infección estafilocócica','celulitis bacteriana'],
  sigue:'infecciones-virales-comunes',
  secciones:[
    {
      t:'Infecciones estreptocócicas: un género bacteriano con presentaciones diversas',
      p:[
        'Las *infecciones estreptocócicas* (causadas por bacterias del género Streptococcus) tienen presentaciones clínicas diversas según la especie y el sitio de infección: desde la faringitis estreptocócica (ya vista en el contexto de infecciones respiratorias en Pediatría I) hasta infecciones cutáneas y de tejidos blandos más profundas, con distintos grados de severidad según la especie específica involucrada.',
        'Un aspecto clínicamente relevante de ciertas infecciones estreptocócicas es su potencial de generar complicaciones postinfecciosas no supurativas (que no ocurren por la infección directa, sino por una respuesta inmune posterior mal dirigida), un concepto que retoma la importancia de vigilar no solo la resolución del episodio agudo, sino también posibles secuelas que pueden manifestarse semanas después.'
      ]
    },
    {
      t:'Infecciones estafilocócicas: desde la piel hasta infecciones sistémicas',
      p:[
        'Las *infecciones estafilocócicas* (causadas por bacterias del género Staphylococcus, particularmente Staphylococcus aureus) abarcan un espectro amplio, desde infecciones cutáneas superficiales relativamente benignas hasta infecciones invasivas graves (bacteriemia, endocarditis, osteomielitis) cuando el microorganismo logra acceder al torrente sanguíneo o a tejidos profundos.',
        'La creciente relevancia de cepas de Staphylococcus aureus resistentes a meticilina en muchos contextos clínicos retoma directamente la importancia ya vista sobre uso racional de antimicrobianos (Farmacoterapéutica, 10mo): el patrón local de resistencia bacteriana influye directamente en la elección empírica del tratamiento antimicrobiano, antes incluso de contar con el resultado de un cultivo confirmatorio.'
      ]
    },
    {
      t:'Celulitis bacteriana: el reconocimiento clínico de una infección de tejidos blandos',
      p:[
        'La *celulitis bacteriana* es una infección de la piel y el tejido celular subcutáneo, típicamente causada por estreptococos o estafilococos, que se presenta clínicamente con eritema, calor, edema y dolor localizado, con bordes generalmente mal definidos (a diferencia de la erisipela, una infección relacionada pero más superficial, con bordes más nítidamente delimitados).',
        'Reconocer signos de progresión o de severidad en una celulitis -extensión rápida, fiebre alta asociada, signos sistémicos de compromiso, o falta de respuesta al tratamiento antimicrobiano inicial- es clínicamente relevante porque orienta hacia la necesidad de reevaluar el diagnóstico (descartando complicaciones más graves como una infección necrotizante de tejidos blandos) o de escalar el manejo hacia un tratamiento más intensivo.'
      ],
      foco:[
        '*Consideración clínica*: el patrón local de resistencia bacteriana, particularmente relevante en infecciones estafilocócicas, debe considerarse al elegir el tratamiento antimicrobiano empírico inicial, antes de contar con el resultado de un cultivo confirmatorio.'
      ]
    }
  ],
  ref:'Mandell, Enfermedades Infecciosas, cap. 195.'
},

'infecciones-virales-comunes': {
  tema:'Infecciones virales comunes',
  bloque:'Patología Infecciosa', programa:'unirm', cuatri:11, min:13,
  idea:'Las infecciones virales comunes comparten un principio de manejo distinto al de las infecciones bacterianas: en la mayoría de los casos, el tratamiento es de soporte, no antimicrobiano dirigido contra el agente causal específico.',
  claves:['infección viral respiratoria','mononucleosis infecciosa','infección por herpesvirus'],
  sigue:'tuberculosis-practica-clinica',
  secciones:[
    {
      t:'Infecciones virales respiratorias: el grupo más frecuente en la práctica clínica',
      p:[
        'Las *infecciones virales respiratorias* -causadas por múltiples virus distintos (rinovirus, virus de la influenza, entre otros)- son, en conjunto, el grupo de enfermedades infecciosas más frecuente en la práctica clínica general, con manifestaciones que van desde el resfriado común hasta cuadros más significativos como la influenza, ya vistos en parte en el contexto pediátrico (Pediatría I, este mismo cuatrimestre).',
        'Un principio clínico central en este grupo de infecciones es que, en la gran mayoría de los casos, el manejo es sintomático y de soporte, sin necesidad de tratamiento antimicrobiano dirigido -administrar antibióticos ante una infección viral respiratoria no solo no aporta beneficio real, sino que contribuye al problema de resistencia antimicrobiana ya visto en el tema de infecciones bacterianas comunes de este mismo bloque.'
      ]
    },
    {
      t:'Mononucleosis infecciosa: el cuadro clásico del virus de Epstein-Barr',
      p:[
        'La *mononucleosis infecciosa*, causada característicamente por el virus de Epstein-Barr, se presenta clásicamente con la tríada de fiebre, faringitis (con frecuencia exudativa) y linfadenopatía generalizada, siendo particularmente frecuente en adolescentes y adultos jóvenes -un hallazgo clínico adicional relevante es la esplenomegalia, que tiene implicaciones prácticas concretas sobre las recomendaciones de actividad física durante la fase aguda de la enfermedad, por el riesgo de ruptura esplénica ante un trauma abdominal.',
        'Un error clínico documentado y relevante es la administración de ciertos antibióticos (particularmente aminopenicilinas) ante una faringitis que en realidad corresponde a mononucleosis mal diagnosticada como bacteriana, lo que puede desencadenar una erupción cutánea característica -otro ejemplo concreto de por qué distinguir correctamente el agente causal antes de iniciar tratamiento antimicrobiano tiene consecuencias clínicas reales.'
      ]
    },
    {
      t:'Infecciones por herpesvirus: un grupo con capacidad de latencia',
      p:[
        'Las *infecciones por herpesvirus* (que incluyen al virus del herpes simple, el virus varicela-zóster ya visto en Pediatría I, y el propio virus de Epstein-Barr) comparten una característica biológica distintiva: la capacidad de establecer latencia en el organismo tras la infección inicial, con posibilidad de reactivación posterior en momentos de menor control inmunológico, en vez de eliminarse completamente del cuerpo tras la resolución del episodio agudo.',
        'Esta capacidad de latencia y reactivación tiene relevancia clínica práctica: un paciente con antecedente de infección por un herpesvirus puede presentar un episodio de reactivación años después, particularmente en contextos de inmunosupresión, lo que retoma la importancia de considerar el estado inmunológico del huésped -ya vista en la tríada epidemiológica al inicio de este bloque- al evaluar la presentación clínica de estas infecciones.'
      ],
      foco:[
        '*Consideración clínica*: administrar antibióticos ante una faringitis que corresponde a mononucleosis infecciosa, en vez de una causa bacteriana, no solo es ineficaz sino que puede desencadenar una erupción cutánea característica -un ejemplo concreto de por qué el diagnóstico correcto precede al tratamiento apropiado.'
      ]
    }
  ],
  ref:'Mandell, Enfermedades Infecciosas, cap. 135.'
},

'tuberculosis-practica-clinica': {
  tema:'Tuberculosis en la práctica clínica',
  bloque:'Patología Infecciosa', programa:'unirm', cuatri:11, min:14,
  idea:'La tuberculosis sigue siendo una de las enfermedades infecciosas de mayor relevancia en salud pública en contextos como el dominicano, y su manejo exige entender tanto el diagnóstico clínico como la importancia crítica de completar el tratamiento hasta el final.',
  claves:['tuberculosis pulmonar','baciloscopia','esquema de tratamiento antituberculoso'],
  sigue:'vih-sida',
  secciones:[
    {
      t:'Tuberculosis pulmonar: la presentación más frecuente',
      p:[
        'La *tuberculosis pulmonar*, causada por Mycobacterium tuberculosis, es la forma más frecuente de presentación de esta enfermedad, caracterizada clásicamente por tos persistente de más de dos a tres semanas de duración, con frecuencia acompañada de expectoración (en ocasiones hemoptoica), pérdida de peso, sudoración nocturna, y fiebre de bajo grado -este patrón de síntomas constitucionales prolongados retoma la importancia de mantener una sospecha activa ante un cuadro respiratorio que no se resuelve en el tiempo esperado para una infección respiratoria común.',
        'La transmisión de la tuberculosis pulmonar ocurre principalmente por vía aérea, a través de gotas respiratorias expulsadas por una persona con enfermedad activa -retomando directamente la cadena de transmisión ya vista al inicio de este bloque, esta vía aérea explica por qué el aislamiento respiratorio es una medida central mientras se confirma o descarta el diagnóstico en un paciente con sospecha clínica.'
      ]
    },
    {
      t:'La baciloscopia como herramienta diagnóstica de primera línea',
      p:[
        'La *baciloscopia* es el examen microscópico directo de una muestra de esputo, teñida con una técnica específica para identificar bacilos ácido-alcohol resistentes, y constituye la herramienta diagnóstica de primera línea para la tuberculosis pulmonar en la mayoría de los contextos, por su bajo costo, rapidez relativa, y capacidad de identificar a los pacientes más contagiosos (aquellos con mayor carga bacilar).',
        'Un principio de salud pública relevante es que la baciloscopia también cumple una función de seguimiento del tratamiento: repetir el estudio durante el curso del tratamiento antituberculoso permite verificar la respuesta terapéutica y confirmar la conversión de un resultado inicialmente positivo hacia uno negativo, un dato clínicamente relevante que retoma la lógica ya vista sobre vigilar la trayectoria de un tratamiento, no solo su inicio.'
      ]
    },
    {
      t:'El esquema de tratamiento antituberculoso y la importancia de completarlo',
      p:[
        'El *esquema de tratamiento antituberculoso* estándar combina varios fármacos administrados durante un periodo prolongado (organizado típicamente en una fase inicial intensiva con varios medicamentos combinados, seguida de una fase de continuación con menos fármacos mantenida por más tiempo), un esquema diseñado específicamente para prevenir el desarrollo de resistencia bacteriana, que ocurriría con mayor facilidad si se usara un único fármaco de forma aislada.',
        'La interrupción prematura del tratamiento -incluso cuando el paciente se siente clínicamente mejor mucho antes de completar el esquema completo- es uno de los problemas más relevantes en el control de la tuberculosis a nivel de salud pública, ya que favorece tanto la recaída de la enfermedad como el desarrollo de cepas resistentes a los fármacos de primera línea, retomando directamente la importancia ya vista sobre uso racional de antimicrobianos y la relevancia de completar cualquier esquema de tratamiento antimicrobiano tal como fue indicado.'
      ],
      foco:[
        '*Consideración clínica*: la interrupción prematura del tratamiento antituberculoso, aunque el paciente se sienta clínicamente mejor, es uno de los principales factores que favorecen la recaída y el desarrollo de resistencia bacteriana -la educación del paciente sobre completar el esquema completo es una parte central del manejo.'
      ]
    }
  ],
  ref:'Mandell, Enfermedades Infecciosas, cap. 249.'
},

'vih-sida': {
  tema:'VIH/SIDA',
  bloque:'Patología Infecciosa', programa:'unirm', cuatri:11, min:14,
  idea:'La infección por VIH ha transformado su pronóstico dramáticamente en las últimas décadas: de una enfermedad con una progresión inevitable hacia el SIDA y la muerte, a una condición crónica manejable cuando se diagnostica y se trata oportunamente.',
  claves:['infección por VIH','conteo de CD4','terapia antirretroviral'],
  sigue:'dengue-zika-chikungunya',
  secciones:[
    {
      t:'La infección por VIH y su curso natural',
      p:[
        'La *infección por VIH* (virus de la inmunodeficiencia humana) ataca progresivamente al sistema inmune, específicamente a los linfocitos T CD4, cuya disminución progresiva sin tratamiento va comprometiendo la capacidad del cuerpo de defenderse frente a infecciones oportunistas y ciertas neoplasias -sin tratamiento, este curso natural progresa desde una infección aguda inicial (con frecuencia asintomática o con síntomas inespecíficos poco reconocidos), pasando por una fase crónica de duración variable, hasta eventualmente el síndrome de inmunodeficiencia adquirida (SIDA) en su fase más avanzada.',
        'El tamizaje activo de VIH, retomando la lógica ya vista repetidamente sobre detección proactiva en este pensum, es particularmente relevante porque la infección aguda con frecuencia pasa desapercibida clínicamente, y una persona no diagnosticada puede transmitir el virus a otras personas durante todo ese periodo sin saberlo, además de perder la oportunidad de un tratamiento oportuno que cambia radicalmente su propio pronóstico individual.'
      ]
    },
    {
      t:'El conteo de CD4 como marcador del estado inmunológico',
      p:[
        'El *conteo de CD4* es la medición de linfocitos T CD4 circulantes, un marcador central para evaluar el grado de compromiso inmunológico de una persona con infección por VIH -valores progresivamente más bajos indican un mayor deterioro del sistema inmune y, por debajo de ciertos umbrales específicos, un riesgo significativamente mayor de infecciones oportunistas características que rara vez ocurren en personas con un sistema inmune competente.',
        'Este marcador retoma la misma lógica ya vista sobre trayectoria en el tiempo, más que un valor aislado: el seguimiento seriado del conteo de CD4 permite evaluar si la infección está progresando, si el tratamiento está siendo efectivo (con una recuperación progresiva esperada del conteo tras iniciar terapia antirretroviral), o si existe una falla terapéutica que amerita ajuste del esquema de tratamiento.'
      ]
    },
    {
      t:'La terapia antirretroviral como transformación del pronóstico',
      p:[
        'La *terapia antirretroviral* es la combinación de fármacos que suprime la replicación del VIH, permitiendo que el sistema inmune se recupere progresivamente y previniendo la progresión hacia el SIDA -su desarrollo y disponibilidad amplia ha transformado el pronóstico de la infección por VIH de una enfermedad con progresión inevitablemente fatal a una condición crónica manejable, comparable en su enfoque de manejo a largo plazo con otras enfermedades crónicas ya vistas en este pensum.',
        'Un principio central de la terapia antirretroviral moderna es que se recomienda iniciarla tan pronto como se confirma el diagnóstico, sin importar el conteo de CD4 en ese momento -un cambio de paradigma respecto a enfoques anteriores que esperaban un mayor deterioro inmunológico antes de iniciar tratamiento, retomando la lógica ya vista repetidamente sobre el valor de la intervención temprana frente a esperar a que una condición progrese más.'
      ],
      foco:[
        '*Consideración clínica*: el tamizaje activo de VIH es particularmente valioso porque la infección aguda con frecuencia pasa desapercibida, y el diagnóstico e inicio oportuno de terapia antirretroviral transforma radicalmente el pronóstico individual de la persona.'
      ]
    }
  ],
  ref:'Mandell, Enfermedades Infecciosas, cap. 118.'
},

'dengue-zika-chikungunya': {
  tema:'Dengue, zika y chikungunya',
  bloque:'Patología Infecciosa', programa:'unirm', cuatri:11, min:13,
  idea:'Estas tres arbovirosis, transmitidas por el mismo mosquito vector y con distribución geográfica superpuesta en contextos como el dominicano, comparten un origen común pero presentan diferencias clínicas relevantes que orientan el diagnóstico diferencial entre ellas.',
  claves:['dengue','signos de alarma del dengue','arbovirosis'],
  sigue:'enfermedades-parasitarias',
  secciones:[
    {
      t:'Un origen común: el mismo mosquito vector',
      p:[
        'Las *arbovirosis* dengue, zika y chikungunya son transmitidas principalmente por el mismo mosquito vector (Aedes aegypti), lo que explica su distribución geográfica superpuesta en climas cálidos y tropicales como el dominicano, y por qué las medidas de control epidemiológico de estas tres enfermedades comparten un enfoque común: el control del vector (eliminación de criaderos, medidas de protección personal contra picaduras) más que una intervención dirigida contra el virus específico en sí mismo.',
        'Esta similitud de vector y distribución geográfica hace que, ante un paciente con un cuadro clínico compatible en una zona endémica, las tres condiciones deban considerarse dentro del mismo diagnóstico diferencial inicial, aun cuando sus presentaciones clínicas específicas -desarrolladas a continuación- permiten con frecuencia orientar hacia una de ellas en particular.'
      ]
    },
    {
      t:'Dengue: la enfermedad con mayor riesgo de progresión grave',
      p:[
        'El *dengue* se presenta clásicamente con fiebre alta de inicio súbito, cefalea intensa (con frecuencia retroocular), dolores musculares y articulares significativos, y en ocasiones un exantema -de las tres arbovirosis de este tema, el dengue es la que tiene mayor potencial de progresar hacia una forma grave, con extravasación de plasma, sangrado significativo, y compromiso de órganos, lo que hace indispensable reconocer los signos de alarma tempranamente.',
        'Los *signos de alarma del dengue* -dolor abdominal intenso y sostenido, vómitos persistentes, sangrado de mucosas, letargia o irritabilidad marcada, acumulación de líquido clínicamente detectable, y aumento progresivo del hematocrito con disminución rápida de plaquetas- típicamente aparecen alrededor de la caída de la fiebre, un momento crítico que exige vigilancia particularmente cercana, ya que es precisamente quando el riesgo de progresión hacia dengue grave es mayor.'
      ]
    },
    {
      t:'Zika y chikungunya: presentaciones distintivas dentro del mismo grupo',
      p:[
        'El *zika* se caracteriza con frecuencia por síntomas más leves que el dengue -fiebre baja o ausente, exantema, conjuntivitis no purulenta- pero tiene una relevancia particular durante el embarazo, por su asociación documentada con microcefalia y otras alteraciones del desarrollo fetal cuando la infección ocurre en una gestante, retomando la conexión directa con las infecciones en el embarazo ya vistas en Obstetricia I.',
        'El *chikungunya* se distingue clínicamente por un dolor articular particularmente intenso y con frecuencia incapacitante, que en una proporción de los casos puede persistir durante semanas o meses después de la resolución del cuadro agudo febril -esta persistencia del dolor articular más allá de la fase aguda es una característica distintiva que ayuda a diferenciarlo del dengue y del zika en la evaluación retrospectiva de un cuadro ya resuelto.'
      ],
      foco:[
        '*Consideración clínica*: los signos de alarma del dengue típicamente aparecen alrededor de la caída de la fiebre, no durante el pico febril inicial -este es precisamente el momento de mayor riesgo de progresión hacia una forma grave, y exige la vigilancia más cercana.'
      ]
    }
  ],
  ref:'Mandell, Enfermedades Infecciosas, cap. 156.'
},

'enfermedades-parasitarias': {
  tema:'Enfermedades parasitarias',
  bloque:'Patología Infecciosa', programa:'unirm', cuatri:11, min:13,
  idea:'Las enfermedades parasitarias representan un grupo heterogéneo de infecciones cuya prevalencia está estrechamente ligada a las condiciones sanitarias y socioeconómicas de una población, retomando directamente la conexión entre determinantes sociales y carga de enfermedad infecciosa.',
  claves:['parasitosis intestinal','malaria','helmintiasis'],
  sigue:'infecciones-micoticas',
  secciones:[
    {
      t:'Parasitosis intestinal: la carga de enfermedad ligada al saneamiento',
      p:[
        'La *parasitosis intestinal* -infecciones por diversos parásitos que colonizan el tracto digestivo, transmitidos con frecuencia por contaminación fecal de agua o alimentos- tiene una prevalencia estrechamente ligada al acceso a agua potable y a condiciones adecuadas de saneamiento, retomando directamente la tríada epidemiológica ya vista al inicio de este bloque: el ambiente (saneamiento deficiente) facilita significativamente la transmisión, independientemente de las características individuales del huésped.',
        'La presentación clínica varía considerablemente según el parásito específico involucrado, desde infecciones completamente asintomáticas detectadas solo por estudio de heces, hasta cuadros con diarrea, dolor abdominal, y en infecciones más prolongadas o intensas, consecuencias nutricionales significativas -retomando la conexión con desnutrición infantil ya vista en Pediatría I, particularmente relevante en poblaciones pediátricas de zonas con alta carga parasitaria.'
      ]
    },
    {
      t:'Malaria: la enfermedad transmitida por otro vector',
      p:[
        'La *malaria*, causada por parásitos del género Plasmodium y transmitida por la picadura de mosquitos del género Anopheles (un vector distinto del Aedes aegypti ya visto en el tema de arbovirosis), se presenta característicamente con episodios de fiebre, con frecuencia siguiendo un patrón cíclico según la especie de Plasmodium involucrada, acompañados de escalofríos intensos y sudoración profusa.',
        'El reconocimiento de zonas de riesgo de malaria -y la consideración de esta enfermedad en el diagnóstico diferencial de un paciente con fiebre y antecedente de viaje o residencia en un área endémica- retoma la importancia ya vista sobre el contexto epidemiológico específico al evaluar cualquier síndrome febril, un principio ya introducido en el tema de fiebre de origen desconocido de este mismo bloque.'
      ]
    },
    {
      t:'Helmintiasis: los parásitos de mayor tamaño con ciclos de vida diversos',
      p:[
        'La *helmintiasis* engloba las infecciones por helmintos (gusanos parásitos), un grupo diverso que incluye nematodos, cestodos y trematodos, cada uno con ciclos de vida y modos de transmisión particulares -algunos se transmiten por vía fecal-oral directa, otros requieren un huésped intermediario, y otros penetran directamente a través de la piel en contacto con suelo o agua contaminada.',
        'Este tema cierra reconociendo un principio general aplicable a toda la parasitología clínica: entender el ciclo de vida específico de un parásito -dónde vive, cómo se transmite, qué órganos afecta durante su ciclo- no es un ejercicio puramente académico, sino la base que permite tanto el diagnóstico clínico correcto como las medidas de prevención específicas más efectivas para interrumpir ese ciclo particular.'
      ],
      foco:[
        '*Consideración clínica*: ante un paciente con fiebre y antecedente de viaje o residencia en una zona endémica de malaria, esta enfermedad debe considerarse activamente en el diagnóstico diferencial, retomando la importancia del contexto epidemiológico específico en la evaluación de cualquier síndrome febril.'
      ]
    }
  ],
  ref:'Mandell, Enfermedades Infecciosas, cap. 283.'
},

'infecciones-micoticas': {
  tema:'Infecciones micóticas',
  bloque:'Patología Infecciosa', programa:'unirm', cuatri:11, min:13,
  idea:'Las infecciones micóticas abarcan un espectro que va desde condiciones superficiales muy frecuentes y de manejo sencillo, hasta infecciones sistémicas graves que ocurren casi exclusivamente en el contexto de un sistema inmune comprometido.',
  claves:['micosis superficial','micosis sistémica','candidiasis invasiva'],
  sigue:'sepsis',
  secciones:[
    {
      t:'Micosis superficial: la infección fúngica más frecuente en la práctica clínica',
      p:[
        'La *micosis superficial* -infecciones fúngicas limitadas a la piel, el cabello, las uñas, o las mucosas superficiales, como las dermatofitosis o la candidiasis vulvovaginal ya vista en Ginecología I- es el grupo de infecciones micóticas más frecuente en la práctica clínica general, generalmente de manejo sencillo con tratamiento antifúngico tópico o, en casos más extensos, oral.',
        'Estas infecciones ocurren tanto en personas con sistema inmune completamente normal (retomando la conexión con los factores predisponentes locales, como la humedad o la fricción, más que un compromiso inmunológico sistémico) como, con mayor frecuencia y severidad, en personas con ciertos factores de riesgo específicos ya vistos en el contexto de la candidiasis vulvovaginal.'
      ]
    },
    {
      t:'Micosis sistémica: cuando el hongo compromete órganos internos',
      p:[
        'La *micosis sistémica* es la infección fúngica que compromete órganos internos, más allá de la piel o las mucosas superficiales -algunas ocurren en personas con sistema inmune normal en contextos epidemiológicos específicos (exposición a ciertos hongos ambientales particulares en determinadas regiones geográficas), mientras otras, como se desarrolla en el tema siguiente, ocurren casi exclusivamente en personas con compromiso significativo del sistema inmune.',
        'Reconocer esta distinción entre micosis sistémicas de personas inmunocompetentes y aquellas que ocurren casi exclusivamente en personas inmunocomprometidas ayuda a orientar la sospecha diagnóstica según el contexto clínico específico del paciente evaluado, retomando la importancia ya vista repetidamente de considerar el estado del huésped como parte central del razonamiento clínico infectológico.'
      ]
    },
    {
      t:'Candidiasis invasiva: el ejemplo característico de infección oportunista',
      p:[
        'La *candidiasis invasiva* -infección sistémica por el hongo Candida, que compromete el torrente sanguíneo o tejidos profundos, a diferencia de la candidiasis superficial ya vista en Ginecología I- ocurre característicamente en pacientes hospitalizados con factores de riesgo específicos: inmunosupresión significativa, dispositivos invasivos prolongados (como catéteres), uso prolongado de antibióticos de amplio espectro, o cirugías mayores recientes.',
        'Este tema cierra ilustrando un principio general aplicable a toda la infectología: la misma especie de microorganismo (en este caso, Candida) puede causar desde una infección superficial menor y de fácil manejo hasta una infección sistémica potencialmente grave, y lo que determina esa diferencia con frecuencia no es tanto el microorganismo en sí, sino el estado del huésped y la vía de acceso al organismo -retomando directamente la tríada epidemiológica que abrió este bloque completo.'
      ],
      foco:[
        '*Consideración clínica*: en un paciente hospitalizado con factores de riesgo específicos (dispositivos invasivos, inmunosupresión, antibióticos de amplio espectro prolongados) que desarrolla fiebre sin causa bacteriana clara, la candidiasis invasiva debe considerarse dentro del diagnóstico diferencial.'
      ]
    }
  ],
  ref:'Mandell, Enfermedades Infecciosas, cap. 256.'
},

'sepsis': {
  tema:'Sepsis',
  bloque:'Patología Infecciosa', programa:'unirm', cuatri:11, min:14,
  idea:'La sepsis representa el punto donde una infección deja de ser un problema localizado para convertirse en una respuesta sistémica potencialmente mortal, y su reconocimiento temprano es una de las intervenciones con mayor impacto documentado sobre la supervivencia del paciente.',
  claves:['sepsis','choque séptico','criterios de qSOFA'],
  sigue:'uso-antimicrobianos-enfermedad-infecciosa',
  secciones:[
    {
      t:'Qué es la sepsis y por qué representa un cambio conceptual',
      p:[
        'La *sepsis* se define actualmente como una disfunción orgánica potencialmente mortal causada por una respuesta desregulada del huésped frente a una infección -esta definición representa un cambio conceptual relevante respecto a definiciones anteriores centradas exclusivamente en criterios de inflamación sistémica: lo que define a la sepsis no es solo la presencia de una infección con signos inflamatorios, sino específicamente la evidencia de que esa respuesta está generando disfunción de órganos.',
        'Esta distinción retoma directamente la tríada epidemiológica ya vista al inicio de este bloque, pero con un matiz importante: en la sepsis, el daño no proviene únicamente del agente infeccioso en sí mismo, sino de la propia respuesta del huésped frente a esa infección, que en vez de ser protectora se vuelve desregulada y dañina para los propios órganos del paciente.'
      ]
    },
    {
      t:'Choque séptico: la forma más grave del espectro',
      p:[
        'El *choque séptico* es un subgrupo de la sepsis en el que las alteraciones circulatorias, celulares y metabólicas subyacentes son suficientemente profundas como para aumentar sustancialmente el riesgo de mortalidad, caracterizado clínicamente por la necesidad de soporte vasopresor para mantener una presión arterial adecuada, a pesar de una reposición de líquidos apropiada, junto con evidencia de hipoperfusión tisular (reflejada, entre otros marcadores, por niveles elevados de lactato).',
        'Reconocer esta progresión desde una infección localizada, hacia sepsis, hasta potencialmente choque séptico, retoma la misma lógica de gravedad escalonada ya vista repetidamente en este pensum: cada etapa exige un nivel de vigilancia e intervención distinto, y el retraso en reconocer el paso de una etapa a la siguiente compromete directamente el pronóstico del paciente.'
      ]
    },
    {
      t:'Los criterios de qSOFA como herramienta de identificación rápida',
      p:[
        'Los *criterios de qSOFA* (quick SOFA) son una herramienta simplificada de identificación rápida, diseñada para ser aplicada al lado del paciente sin necesidad de estudios de laboratorio, que evalúa tres parámetros clínicos sencillos (alteración del estado mental, frecuencia respiratoria elevada, presión arterial sistólica baja) para identificar pacientes con infección que tienen mayor riesgo de un resultado desfavorable y que ameritan una evaluación más profunda de disfunción orgánica.',
        'Esta herramienta retoma directamente la misma lógica ya vista sobre signos de alarma en distintos contextos clínicos de este pensum: una evaluación rápida y simple, aplicable en cualquier entorno sin necesidad de estudios complejos inmediatos, que permite identificar tempranamente a los pacientes de mayor riesgo para escalar la vigilancia y el manejo de forma oportuna, en vez de esperar a una confirmación diagnóstica completa antes de actuar.'
      ],
      foco:[
        '*Consideración clínica*: ante cualquier paciente con sospecha de infección que presenta alteración del estado mental, frecuencia respiratoria elevada o presión arterial baja, la sospecha activa de sepsis y una evaluación más profunda de disfunción orgánica no deben retrasarse.'
      ]
    }
  ],
  ref:'Mandell, Enfermedades Infecciosas, cap. 75.'
},

'uso-antimicrobianos-enfermedad-infecciosa': {
  tema:'Uso apropiado de antimicrobianos en enfermedad infecciosa',
  bloque:'Patología Infecciosa', programa:'unirm', cuatri:11, min:13,
  idea:'Este tema retoma y profundiza, ahora desde la perspectiva específica de la enfermedad infecciosa, los principios de terapéutica antimicrobiana dirigida ya introducidos en Farmacoterapéutica, integrándolos con todo el contenido de agentes específicos visto a lo largo de este bloque.',
  claves:['terapia antimicrobiana empírica','resistencia antimicrobiana','desescalamiento antibiótico'],
  sigue:'enfermedades-notificacion-obligatoria-rd',
  secciones:[
    {
      t:'La terapia antimicrobiana empírica: decidir sin certeza absoluta',
      p:[
        'La *terapia antimicrobiana empírica* es el tratamiento antimicrobiano iniciado antes de contar con la identificación definitiva del agente causal y su perfil de sensibilidad, basado en la probabilidad más alta según el sitio de infección, el contexto epidemiológico, y los patrones locales de resistencia -una decisión que, como se ha visto repetidamente a lo largo de este bloque (en infecciones estafilocócicas, en candidiasis invasiva), exige integrar múltiples elementos de juicio clínico sin esperar una certeza absoluta antes de actuar.',
        'Este enfoque empírico retoma la misma lógica ya vista sobre actuar con la mejor información disponible en el momento, sin la certeza absoluta que solo llegaría después con los resultados de cultivo -esperar esa confirmación completa antes de iniciar cualquier tratamiento, en una infección potencialmente grave, puede significar una demora con consecuencias clínicas reales, como ya se vio en el tema de sepsis de este mismo bloque.'
      ]
    },
    {
      t:'La resistencia antimicrobiana como problema de salud pública',
      p:[
        'La *resistencia antimicrobiana* -la capacidad de un microorganismo de sobrevivir a la acción de un antimicrobiano que anteriormente era efectivo contra él- es un problema creciente de salud pública, favorecido por el uso inapropiado de antimicrobianos: administrarlos ante infecciones virales que no los requieren (ya visto en infecciones virales comunes de este bloque), completar esquemas de forma incompleta (ya visto específicamente en tuberculosis), o usar antimicrobianos de amplio espectro cuando uno más específico sería igualmente efectivo.',
        'Este problema retoma directamente la conexión ya vista con la tríada epidemiológica: la resistencia antimicrobiana modifica las características del propio agente infeccioso a nivel poblacional, haciendo que estrategias de tratamiento previamente efectivas dejen de serlo, lo que exige una vigilancia epidemiológica continua de los patrones locales de resistencia para orientar decisiones terapéuticas futuras.'
      ]
    },
    {
      t:'El desescalamiento antibiótico: ajustar según nueva información',
      p:[
        'El *desescalamiento antibiótico* es el proceso de ajustar un tratamiento antimicrobiano empírico de amplio espectro, iniciado inicialmente por necesidad ante la incertidumbre diagnóstica, hacia un antimicrobiano más específico y de espectro más reducido una vez que se cuenta con la identificación definitiva del agente causal y su perfil de sensibilidad -un ejemplo concreto de cómo el tratamiento inicial no tiene que ser la decisión final, sino el punto de partida que se ajusta con nueva información.',
        'Este tema cierra retomando el hilo conductor de todo el bloque de Patología Infecciosa: desde los principios generales de la tríada epidemiológica, pasando por cada agente causal específico, hasta este cierre sobre el uso apropiado de antimicrobianos -cada decisión terapéutica en enfermedad infecciosa combina el conocimiento del agente probable, el contexto del huésped y el ambiente, y la disposición a ajustar el tratamiento conforme se obtiene nueva información, en vez de mantenerlo rígidamente sin revisión.'
      ],
      foco:[
        '*Consideración clínica*: el desescalamiento antibiótico -ajustar de un tratamiento empírico amplio hacia uno específico según los resultados de cultivo- es una práctica clínicamente apropiada, no una señal de que el tratamiento inicial fue incorrecto.'
      ]
    }
  ],
  ref:'Mandell, Enfermedades Infecciosas, cap. 17.'
},

'enfermedades-notificacion-obligatoria-rd': {
  tema:'Enfermedades de notificación obligatoria en República Dominicana',
  bloque:'Patología Infecciosa', programa:'unirm', cuatri:11, min:13,
  idea:'Este último tema cierra el bloque completo de Patología Infecciosa retomando la dimensión de salud pública que ha atravesado todo el contenido: cada infección individual diagnosticada también aporta información valiosa para la vigilancia epidemiológica de toda la población.',
  claves:['vigilancia epidemiológica','enfermedad de notificación obligatoria','brote epidémico'],
  sigue:'principios-radiologia',
  secciones:[
    {
      t:'La vigilancia epidemiológica como sistema de información continua',
      p:[
        'La *vigilancia epidemiológica* es el proceso sistemático y continuo de recolección, análisis e interpretación de datos de salud, orientado a detectar cambios en la ocurrencia de enfermedades que ameriten una acción de salud pública -retomando directamente la lógica ya vista sobre indicadores de gestión hospitalaria (Gerencia en Salud, 10mo), este sistema depende de que cada caso individual detectado se reporte de forma consistente, para que el patrón agregado a nivel poblacional sea visible y accionable.',
        'Sin esta vigilancia sistemática, un aumento real en la incidencia de una enfermedad -por ejemplo, un brote localizado de dengue en una comunidad específica- podría pasar desapercibido durante un tiempo considerable, precisamente porque cada caso individual, visto de forma aislada, no revela el patrón poblacional que solo se hace evidente al agregar la información de muchos casos reportados.'
      ]
    },
    {
      t:'Las enfermedades de notificación obligatoria',
      p:[
        'Una *enfermedad de notificación obligatoria* es aquella que, por su relevancia epidemiológica, su potencial de generar brotes, o su importancia en salud pública, debe reportarse formalmente a las autoridades sanitarias correspondientes cada vez que se diagnostica un caso -esta lista incluye, entre otras, varias de las enfermedades ya vistas a lo largo de este bloque: tuberculosis, VIH, dengue, y otras condiciones infecciosas de relevancia específica en el contexto dominicano.',
        'Esta responsabilidad de notificar retoma directamente la misma lógica ya vista sobre notificación obligatoria de maltrato infantil en Pediatría I: el profesional de salud cumple un rol activo dentro de un sistema más amplio, cuya efectividad depende de que cada profesional individual cumpla consistentemente con su parte del proceso, sin importar si percibe ese caso individual como aparentemente aislado o sin mayor relevancia epidemiológica evidente.'
      ]
    },
    {
      t:'El brote epidémico y la detección temprana',
      p:[
        'Un *brote epidémico* es la ocurrencia de casos de una enfermedad en un número mayor al esperado para un lugar y periodo de tiempo determinados, y la detección temprana de un brote -posible únicamente gracias a la vigilancia epidemiológica sistemática ya vista en este tema- permite una respuesta de salud pública oportuna (identificación de la fuente, medidas de control específicas, comunicación a la población) que puede limitar significativamente su magnitud e impacto.',
        'Este tema cierra el bloque completo de Patología Infecciosa retomando el hilo conductor iniciado desde la tríada epidemiológica: cada infección individual, aunque se maneje clínicamente a nivel del paciente concreto, existe también dentro de un contexto poblacional más amplio, y la notificación oportuna de cada caso es lo que permite que ese contexto poblacional sea visible y manejable para el sistema de salud en su conjunto.'
      ],
      foco:[
        '*Consideración clínica*: notificar un caso de enfermedad de notificación obligatoria no es un trámite administrativo secundario, sino una responsabilidad clínica que alimenta directamente el sistema de vigilancia epidemiológica capaz de detectar brotes tempranamente.'
      ]
    }
  ],
  ref:'OPS, Manual de Vigilancia Epidemiológica.'
}

});
