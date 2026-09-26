/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 11 (lote 2)
   Cubre OBSTETRICIA I al estandar extenso (3 secciones, ~200-300
   palabras por seccion, min 12-14). Segunda materia del
   cuatrimestre 11 (5 creditos, 15 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== OBSTETRICIA I ==================== */
'fisiologia-embarazo-normal': {
  tema:'Fisiología del embarazo normal',
  bloque:'Obstetricia I', programa:'unirm', cuatri:11, min:13,
  idea:'El embarazo no es una enfermedad, pero sí un estado fisiológico que transforma de forma profunda y predecible prácticamente todos los sistemas del cuerpo de la mujer -entender esa transformación normal es la base para reconocer después cuándo algo se desvía de lo esperado.',
  claves:['cambios fisiológicos del embarazo','duración del embarazo','edad gestacional'],
  sigue:'control-prenatal-de-la-gestante',
  secciones:[
    {
      t:'La duración del embarazo y cómo se calcula',
      p:[
        'Un embarazo normal a término dura aproximadamente 40 semanas (280 días) contadas desde el primer día de la última menstruación, no desde el momento real de la concepción -esta convención, aunque puede parecer contraintuitiva al inicio, se usa porque la fecha de la última menstruación es un dato conocido y verificable con mayor facilidad que la fecha exacta de la concepción, que la mayoría de las mujeres no puede precisar.',
        'La *edad gestacional* se expresa en semanas y días completos (por ejemplo, "32 semanas y 3 días"), y es el parámetro de referencia central para casi toda decisión obstétrica -desde interpretar una ecografía hasta decidir si un parto pretérmino requiere intervención específica, prácticamente todo en obstetricia se organiza alrededor de esta edad gestacional, no de la edad cronológica del embarazo contada de otra forma.'
      ]
    },
    {
      t:'Los tres trimestres y su lógica clínica',
      p:[
        'El embarazo se divide convencionalmente en tres *trimestres*, cada uno con su propia lógica clínica predominante: el primer trimestre (hasta la semana 13) es el periodo de mayor riesgo de aborto espontáneo y de malformaciones si existe exposición a teratógenos, ya que es cuando ocurre la organogénesis (formación de los órganos); el segundo trimestre (semanas 14 a 27) es generalmente el periodo de mayor estabilidad; y el tercer trimestre (semana 28 en adelante) es donde se concentran las complicaciones hipertensivas y el riesgo de parto pretérmino.',
        'Esta división por trimestres no es arbitraria: organiza tanto el tipo de vigilancia prenatal esperada en cada etapa como el diagnóstico diferencial de un síntoma dado -un sangrado en el primer trimestre sugiere causas distintas a un sangrado en el tercer trimestre, una distinción que se retoma con detalle en los temas de hemorragia obstétrica más adelante en este bloque.'
      ]
    },
    {
      t:'Por qué entender la fisiología normal es la base de todo lo demás',
      p:[
        'Cada uno de los cambios que ocurren durante un embarazo normal -cardiovasculares, respiratorios, renales, metabólicos- tiene un propósito adaptativo: preparar el cuerpo de la mujer para sostener el crecimiento fetal, tolerar la demanda metabólica incrementada, y eventualmente afrontar el parto, un evento de alta exigencia fisiológica.',
        'Sin un dominio claro de qué es "normal" en cada uno de estos sistemas durante el embarazo, resulta imposible reconocer con precisión cuándo un hallazgo representa una adaptación fisiológica esperada y cuándo, en cambio, señala una complicación real -esta distinción se desarrolla con detalle específico en el siguiente tema de este bloque, sobre los cambios anatómicos y fisiológicos del embarazo.'
      ],
      foco:[
        '*Consideración clínica*: la edad gestacional, no la edad cronológica del embarazo contada de otra forma, es el parámetro de referencia central para prácticamente toda decisión obstétrica -verificarla correctamente desde el inicio del control prenatal es indispensable.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 4.'
},

'control-prenatal-de-la-gestante': {
  tema:'Control prenatal de la gestante',
  bloque:'Obstetricia I', programa:'unirm', cuatri:11, min:13,
  idea:'El control prenatal es, para el embarazo, el equivalente directo de la consulta de niño sano ya vista en Pediatría I: una estructura de vigilancia periódica y sistemática diseñada para detectar tempranamente cualquier desviación de lo esperado.',
  claves:['control prenatal','consulta prenatal de bajo riesgo','calendario de controles'],
  sigue:'diagnostico-embarazo',
  secciones:[
    {
      t:'Qué es y para qué sirve el control prenatal',
      p:[
        'El *control prenatal* es el conjunto de consultas periódicas y programadas durante el embarazo, orientadas a vigilar el bienestar materno y fetal, identificar factores de riesgo, y detectar tempranamente complicaciones -retoma directamente la misma lógica ya vista en el control de niño sano de Pediatría I: una estructura de vigilancia periódica que aplica de forma sistemática, en vez de esperar a que un problema se vuelva clínicamente evidente por sí solo.',
        'La evidencia acumulada muestra de forma consistente que un control prenatal adecuado -iniciado tempranamente y completado con la frecuencia recomendada- se asocia con mejores resultados maternos y perinatales, precisamente porque permite detectar y manejar oportunamente condiciones que, sin vigilancia, podrían progresar sin ser reconocidas hasta un punto más avanzado y de mayor riesgo.'
      ]
    },
    {
      t:'La consulta prenatal de bajo riesgo y sus componentes',
      p:[
        'La *consulta prenatal de bajo riesgo* -la de una gestante sin factores de riesgo identificados- incluye típicamente: la evaluación de la edad gestacional, el registro del peso y la presión arterial, la medición de la altura uterina, la auscultación de la frecuencia cardíaca fetal a partir de cierta edad gestacional, la revisión de estudios de laboratorio programados, y la evaluación de signos o síntomas de alarma que la gestante pueda reportar.',
        'Cada uno de estos elementos tiene un propósito específico dentro de la vigilancia integral del embarazo: la presión arterial vigila el desarrollo de trastornos hipertensivos (tema que se profundiza más adelante en este bloque), la altura uterina orienta sobre el crecimiento fetal, y la revisión sistemática de signos de alarma retoma la misma lógica de "banderas rojas" ya vista repetidamente en otros bloques clínicos de este pensum.'
      ]
    },
    {
      t:'El calendario de controles y su lógica de frecuencia creciente',
      p:[
        'El *calendario de controles* prenatales recomendado sigue una frecuencia creciente conforme avanza el embarazo: controles más espaciados durante el primer y segundo trimestre, y progresivamente más frecuentes durante el tercer trimestre, cuando el riesgo de complicaciones (trastornos hipertensivos, parto pretérmino, alteraciones del crecimiento fetal) aumenta y una vigilancia más cercana permite una detección e intervención más oportuna.',
        'Esta lógica de frecuencia creciente hacia el final del embarazo retoma un principio ya visto en la gestión de calidad y seguridad del paciente (Gerencia en Salud, 10mo): concentrar la vigilancia donde el riesgo real es mayor es más eficiente y efectivo que distribuir los recursos de forma uniforme a lo largo de todo el proceso, sin importar la variación del riesgo en cada etapa.'
      ],
      foco:[
        '*Consideración clínica*: un control prenatal iniciado tarde o con controles espaciados de forma irregular compromete la capacidad de detectar tempranamente complicaciones que, identificadas a tiempo, tienen un manejo mucho más favorable.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 9.'
},

'diagnostico-embarazo': {
  tema:'Diagnóstico de embarazo',
  bloque:'Obstetricia I', programa:'unirm', cuatri:11, min:12,
  idea:'Confirmar un embarazo con certeza, y estimar correctamente su edad gestacional desde el inicio, es el primer paso indispensable antes de que cualquier otra decisión obstétrica pueda tomarse con seguridad.',
  claves:['prueba de embarazo','beta-hCG','signos de presunción y probabilidad'],
  sigue:'cambios-anatomicos-fisiologicos-embarazo',
  secciones:[
    {
      t:'La beta-hCG como marcador bioquímico del embarazo',
      p:[
        'La *beta-hCG* (fracción beta de la gonadotropina coriónica humana) es la hormona producida por el tejido trofoblástico desde las primeras etapas del embarazo, y su detección -ya sea cualitativa en una prueba de embarazo casera o cuantitativa en un análisis de sangre- es la base del diagnóstico bioquímico de embarazo, detectable incluso antes de que la mujer note la ausencia de su menstruación esperada.',
        'La determinación cuantitativa de la beta-hCG en sangre, además de confirmar el embarazo, tiene valor clínico adicional: su patrón de elevación esperado en las primeras semanas ayuda a distinguir un embarazo con evolución normal de situaciones que ameritan mayor vigilancia, como un embarazo ectópico o un aborto en curso, temas que se profundizan en el tema de hemorragia obstétrica del primer trimestre, más adelante en este bloque.'
      ]
    },
    {
      t:'Los signos de presunción y probabilidad de embarazo',
      p:[
        'Los *signos de presunción* son los síntomas subjetivos referidos por la mujer que sugieren embarazo pero no lo confirman por sí solos (náuseas, aumento de la sensibilidad mamaria, fatiga, ausencia de menstruación), mientras los *signos de probabilidad* son hallazgos objetivos detectados por el examinador que aumentan considerablemente la sospecha, aunque tampoco confirman el diagnóstico de forma definitiva (crecimiento uterino, cambios de coloración del cuello uterino, prueba de embarazo positiva).',
        'La confirmación definitiva del embarazo requiere, además de estos signos de presunción y probabilidad, un hallazgo de certeza -típicamente la visualización ecográfica del saco gestacional o del embrión, o la auscultación de la frecuencia cardíaca fetal más adelante en el embarazo- retomando la conexión con la ecografía obstétrica básica, tema que se desarrolla más adelante en este bloque.'
      ]
    },
    {
      t:'Por qué confirmar el embarazo con precisión es el primer paso indispensable',
      p:[
        'Confirmar el embarazo, y estimar correctamente su edad gestacional desde el inicio mediante la fecha de la última menstruación confiable o mediante ecografía temprana, es el paso indispensable antes de que cualquier otra decisión clínica del embarazo pueda tomarse con seguridad -retomando la importancia ya vista de la edad gestacional como parámetro de referencia central en fisiología del embarazo normal.',
        'Un error en la estimación inicial de la edad gestacional puede generar consecuencias en cascada durante todo el resto del control prenatal: interpretaciones erróneas del crecimiento fetal, decisiones equivocadas sobre el momento óptimo de una intervención, o una clasificación incorrecta de un parto como pretérmino o a término -de ahí la importancia de establecer esta fecha con la mayor precisión posible desde la primera consulta.'
      ],
      foco:[
        '*Consideración clínica*: la ecografía temprana, realizada en el primer trimestre, es generalmente el método más preciso para estimar la edad gestacional cuando existe duda o incertidumbre sobre la fecha de la última menstruación reportada por la gestante.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 3.'
},

'cambios-anatomicos-fisiologicos-embarazo': {
  tema:'Cambios anatómicos y fisiológicos del embarazo',
  bloque:'Obstetricia I', programa:'unirm', cuatri:11, min:13,
  idea:'Reconocer qué cambio en un sistema orgánico dado es esperado en el embarazo normal, y cuál en cambio señala una posible complicación, es una habilidad clínica que atraviesa todo el resto de este bloque.',
  claves:['cambios cardiovasculares del embarazo','cambios respiratorios del embarazo','cambios renales del embarazo'],
  sigue:'nutricion-en-el-embarazo',
  secciones:[
    {
      t:'Cambios cardiovasculares: el corazón trabajando para dos',
      p:[
        'Los *cambios cardiovasculares del embarazo* incluyen un aumento progresivo del volumen sanguíneo circulante (hasta un 40-50% por encima del valor previo al embarazo), un incremento del gasto cardíaco, y una discreta disminución de la resistencia vascular periférica, que en conjunto explican por qué la presión arterial tiende a disminuir ligeramente durante el segundo trimestre, antes de tender a normalizarse hacia el final del embarazo.',
        'Comprender esta tendencia esperada de la presión arterial es clínicamente relevante: una presión arterial que se eleva de forma significativa, en vez de seguir el patrón esperado de discreto descenso en el segundo trimestre, es precisamente el tipo de desviación que orienta hacia los trastornos hipertensivos del embarazo, tema que se desarrolla con detalle más adelante en este bloque.'
      ]
    },
    {
      t:'Cambios respiratorios: la disnea fisiológica del embarazo',
      p:[
        'Los *cambios respiratorios del embarazo* incluyen un aumento del volumen corriente y de la ventilación por minuto (favorecido en parte por el efecto de la progesterona sobre el centro respiratorio), lo que genera una sensación de disnea leve percibida por muchas gestantes como normal, especialmente en etapas avanzadas del embarazo cuando el útero grávido también eleva el diafragma.',
        'Distinguir esta *disnea fisiológica del embarazo* -de inicio gradual, leve, sin otros signos de alarma asociados- de una disnea que señala una complicación real (de inicio súbito, progresiva, acompañada de dolor torácico o de signos de compromiso respiratorio significativo) es una aplicación directa del mismo principio de "banderas rojas" ya visto en otros bloques clínicos, adaptado ahora al contexto específico del embarazo.'
      ]
    },
    {
      t:'Cambios renales: por qué el riñón filtra más durante el embarazo',
      p:[
        'Los *cambios renales del embarazo* incluyen un aumento significativo del flujo sanguíneo renal y de la tasa de filtración glomerular, lo que explica por qué valores de creatinina sérica que se considerarían normales fuera del embarazo pueden, en realidad, representar una función renal ya comprometida durante la gestación -un valor de creatinina "normal para la población general" puede ser anormalmente alto para una gestante, precisamente porque el riñón debería estar filtrando más de lo habitual en este estado fisiológico.',
        'Este cambio renal también explica la mayor frecuencia urinaria reportada por muchas gestantes, y tiene relevancia adicional en la interpretación de estudios de laboratorio durante el embarazo: los valores de referencia utilizados para interpretar una función renal o urinaria deben ajustarse al contexto fisiológico particular del embarazo, no aplicarse directamente desde los valores de referencia habituales de la población general no gestante.'
      ],
      foco:[
        '*Consideración clínica*: interpretar cualquier hallazgo (presión arterial, disnea, función renal) durante el embarazo exige comparar contra lo esperado específicamente para ese trimestre y ese sistema orgánico, no contra los valores de referencia habituales fuera del embarazo.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 4.'
},

'nutricion-en-el-embarazo': {
  tema:'Nutrición en el embarazo',
  bloque:'Obstetricia I', programa:'unirm', cuatri:11, min:13,
  idea:'La demanda nutricional del embarazo no es simplemente "comer por dos" en cantidad, sino un aumento específico en ciertos nutrientes clave cuyo déficit tiene consecuencias documentadas y, en algunos casos, prevenibles con una intervención tan simple como la suplementación oportuna.',
  claves:['ganancia de peso en el embarazo','ácido fólico','suplementación en el embarazo'],
  sigue:'ecografia-obstetrica-basica',
  secciones:[
    {
      t:'La ganancia de peso en el embarazo y su rango esperado',
      p:[
        'La *ganancia de peso en el embarazo* recomendada varía según el índice de masa corporal previo al embarazo de la mujer: una gestante con peso previo normal tiene un rango de ganancia recomendado distinto al de una gestante con sobrepeso u obesidad previa, o al de una con bajo peso previo -esta individualización retoma la lógica ya vista en Nutrición general sobre la evaluación del estado nutricional como punto de partida antes de cualquier recomendación.',
        'Tanto una ganancia de peso insuficiente como una excesiva se asocian con riesgos documentados: la insuficiente con mayor riesgo de restricción del crecimiento fetal y parto pretérmino, y la excesiva con mayor riesgo de diabetes gestacional, trastornos hipertensivos, y complicaciones durante el parto -la vigilancia de esta ganancia, ya vista como parte del control prenatal, no es un dato meramente estético sino un indicador clínico real.'
      ]
    },
    {
      t:'El ácido fólico y la prevención de defectos del tubo neural',
      p:[
        'El *ácido fólico* es una vitamina cuya suplementación, idealmente iniciada antes de la concepción y continuada durante al menos el primer trimestre, ha demostrado reducir de forma significativa el riesgo de defectos del tubo neural (como la espina bífida) en el feto, precisamente porque el tubo neural se forma en las primeras semanas del embarazo, con frecuencia antes de que la mujer siquiera confirme que está embarazada.',
        'Esta ventana temprana es la razón por la que la suplementación con ácido fólico se recomienda idealmente de forma preconcepcional, no solo a partir de la primera consulta prenatal -para cuando esa primera consulta ocurre, el periodo más crítico de formación del tubo neural con frecuencia ya ha pasado, retomando la misma lógica de "ventana crítica" ya vista repetidamente en Pediatría I respecto a los primeros mil días de vida.'
      ]
    },
    {
      t:'Otros micronutrientes clave y la suplementación integral',
      p:[
        'Más allá del ácido fólico, la *suplementación en el embarazo* incluye típicamente hierro (por el aumento del volumen sanguíneo y las demandas del feto en desarrollo, retomando la lógica ya vista sobre anemia ferropénica en Pediatría I, ahora aplicada a la propia gestante), calcio, y en algunos contextos yodo y vitamina D, según las deficiencias más prevalentes en la población específica.',
        'Un principio importante es que la suplementación en el embarazo complementa, no sustituye, una alimentación variada y de buena calidad nutricional -retomando la conexión directa con el bloque de Nutrición de este mismo cuatrimestre: la suplementación cubre necesidades específicas difíciles de alcanzar solo con la dieta, pero no reemplaza el valor de una alimentación general adecuada durante todo el embarazo.'
      ],
      foco:[
        '*Consideración clínica*: la suplementación con ácido fólico idealmente debe iniciarse antes de la concepción, no esperar hasta la primera consulta prenatal, precisamente porque el tubo neural se forma en una ventana muy temprana del embarazo.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 8.'
},

'ecografia-obstetrica-basica': {
  tema:'Ecografía obstétrica básica',
  bloque:'Obstetricia I', programa:'unirm', cuatri:11, min:13,
  idea:'La ecografía obstétrica se ha convertido en una herramienta central del control prenatal moderno, y entender qué información aporta cada tipo de estudio -según el trimestre en que se realiza- evita tanto su subutilización como su uso indiscriminado sin un propósito clínico claro.',
  claves:['ecografía del primer trimestre','biometría fetal','ecografía obstétrica de rutina'],
  sigue:'trabajo-de-parto-normal',
  secciones:[
    {
      t:'La ecografía del primer trimestre',
      p:[
        'La *ecografía del primer trimestre* cumple funciones específicas de esta etapa temprana: confirmar la localización intrauterina del embarazo (descartando un embarazo ectópico, tema que se retoma en hemorragia obstétrica del primer trimestre más adelante en este bloque), estimar la edad gestacional con la mayor precisión posible mediante la medición de la longitud céfalo-caudal del embrión, determinar el número de fetos en caso de un embarazo múltiple, y evaluar marcadores tempranos de riesgo de ciertas condiciones cromosómicas según el protocolo local.',
        'La precisión de la estimación de edad gestacional mediante ecografía es mayor cuanto más temprano se realice el estudio -esta es la razón principal por la que, ante una discrepancia entre la fecha de última menstruación reportada y los hallazgos ecográficos, la estimación por ecografía del primer trimestre generalmente prevalece como referencia más confiable, retomando la importancia ya vista de establecer la edad gestacional con precisión desde el inicio.'
      ]
    },
    {
      t:'La biometría fetal como seguimiento del crecimiento',
      p:[
        'La *biometría fetal* consiste en la medición sistemática de distintas estructuras fetales (diámetro biparietal, circunferencia cefálica, circunferencia abdominal, longitud del fémur) mediante ecografía, generalmente realizada en el segundo y tercer trimestre, para estimar el peso fetal y evaluar si el crecimiento sigue una trayectoria esperada para la edad gestacional.',
        'Al igual que la trayectoria de crecimiento ya vista en Pediatría I, lo que más importa en la biometría fetal seriada no es una sola medición aislada, sino la trayectoria de crecimiento a lo largo del embarazo: un feto que muestra una desaceleración progresiva en su crecimiento esperado, incluso sin haber caído todavía por debajo de un umbral absoluto, es una señal que amerita vigilancia adicional.'
      ]
    },
    {
      t:'La ecografía obstétrica de rutina y sus límites',
      p:[
        'La *ecografía obstétrica de rutina* -realizada en momentos específicos del embarazo según el protocolo de control prenatal, no de forma indiscriminada en cada consulta- complementa pero no reemplaza la evaluación clínica sistemática ya vista en control prenatal (peso, presión arterial, altura uterina, frecuencia cardíaca fetal); repetir ecografías sin una indicación clínica clara no mejora los resultados del embarazo y consume recursos que podrían dirigirse a otras prioridades del sistema de salud.',
        'Esta consideración retoma directamente la lógica ya vista sobre indicadores de gestión hospitalaria (Gerencia en Salud, 10mo): usar un recurso diagnóstico con un propósito clínico específico y bien definido es más efectivo que aplicarlo de forma rutinaria sin ninguna pregunta clínica concreta que responder en cada ocasión.'
      ],
      foco:[
        '*Consideración clínica*: ante una discrepancia entre la fecha de última menstruación y los hallazgos ecográficos, la ecografía realizada en el primer trimestre generalmente ofrece la estimación de edad gestacional más confiable disponible.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 10.'
},

'trabajo-de-parto-normal': {
  tema:'Trabajo de parto normal',
  bloque:'Obstetricia I', programa:'unirm', cuatri:11, min:13,
  idea:'Distinguir el trabajo de parto verdadero de contracciones que no representan un trabajo de parto real es una de las primeras y más frecuentes decisiones clínicas en la atención de una gestante que consulta por dolor o contracciones.',
  claves:['fases del trabajo de parto','contracciones uterinas efectivas','partograma'],
  sigue:'mecanismo-del-parto',
  secciones:[
    {
      t:'Las fases del trabajo de parto',
      p:[
        'Las *fases del trabajo de parto* se organizan clásicamente en tres periodos: el primer periodo (dilatación), que a su vez se divide en una fase latente (dilatación más lenta, hasta aproximadamente 5-6 cm) y una fase activa (dilatación más rápida y progresiva); el segundo periodo (expulsivo), desde la dilatación completa hasta el nacimiento; y el tercer periodo (alumbramiento), desde el nacimiento hasta la expulsión de la placenta.',
        'Reconocer en qué fase específica se encuentra una gestante determina directamente la conducta apropiada: una gestante en fase latente, con contracciones aún irregulares y dilatación mínima, generalmente puede manejarse de forma expectante, mientras una gestante en fase activa, con dilatación progresiva y contracciones regulares, requiere una vigilancia mucho más cercana del progreso del trabajo de parto.'
      ]
    },
    {
      t:'Contracciones uterinas efectivas vs. contracciones que no representan trabajo de parto real',
      p:[
        'Las *contracciones uterinas efectivas* son aquellas que, además de ser dolorosas y regulares, se acompañan de cambios cervicales progresivos (dilatación y borramiento) -distintas de las contracciones de Braxton Hicks, frecuentes especialmente en el tercer trimestre, que son irregulares, generalmente no dolorosas o solo levemente molestas, y que no producen ningún cambio cervical progresivo, por lo que no representan trabajo de parto real.',
        'Esta distinción, aunque puede parecer sutil desde la perspectiva de la gestante que las experimenta, es clínicamente central: confirmar un trabajo de parto real requiere verificar contracciones regulares junto con cambios cervicales documentados en el tiempo, no basarse únicamente en el reporte subjetivo de dolor o de contracciones percibidas.'
      ]
    },
    {
      t:'El partograma como herramienta de vigilancia del progreso',
      p:[
        'El *partograma* es una herramienta gráfica que registra de forma sistemática el progreso del trabajo de parto en el tiempo -principalmente la dilatación cervical y el descenso de la presentación fetal- permitiendo comparar visualmente el progreso real de una gestante contra el patrón esperado, y detectar tempranamente una desviación (como un trabajo de parto que se detiene o progresa de forma anormalmente lenta).',
        'El partograma retoma directamente la misma lógica ya vista sobre las curvas de crecimiento en Pediatría I: comparar una trayectoria individual contra un patrón de referencia esperado a lo largo del tiempo, no depender de una sola medición aislada -un principio general de vigilancia clínica que se repite en distintos contextos a lo largo de este pensum.'
      ],
      foco:[
        '*Consideración clínica*: confirmar trabajo de parto real requiere verificar contracciones regulares junto con cambios cervicales progresivos documentados, no basarse solo en el reporte subjetivo de contracciones o dolor de la gestante.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 21.'
},

'mecanismo-del-parto': {
  tema:'Mecanismo del parto',
  bloque:'Obstetricia I', programa:'unirm', cuatri:11, min:12,
  idea:'El feto, durante el trabajo de parto, no atraviesa la pelvis materna de forma pasiva: realiza una secuencia coordinada de movimientos que le permiten adaptarse a la forma cambiante del canal del parto.',
  claves:['mecanismo del parto','presentación cefálica','encajamiento fetal'],
  sigue:'atencion-parto-eutocico',
  secciones:[
    {
      t:'La presentación cefálica como la más favorable',
      p:[
        'La *presentación cefálica* -la cabeza fetal como la parte que se presenta primero hacia el canal del parto- es la presentación más frecuente y, en general, la más favorable para un parto vaginal, precisamente porque la cabeza fetal, aunque es la parte más grande y menos compresible del feto, tiene la capacidad de moldearse ligeramente y de orientarse de la forma más favorable posible a través de la pelvis materna durante el mecanismo del parto.',
        'Otras presentaciones (podálica, de hombro) conllevan un mecanismo de parto distinto y, en general, mayor riesgo de complicaciones durante un parto vaginal, lo que con frecuencia orienta hacia consideraciones específicas de manejo que van más allá del alcance de este primer tema introductorio del mecanismo del parto normal.'
      ]
    },
    {
      t:'El encajamiento fetal como primer paso del mecanismo',
      p:[
        'El *encajamiento fetal* es el momento en que el diámetro más ancho de la presentación fetal (en la presentación cefálica, el diámetro biparietal) atraviesa el estrecho superior de la pelvis materna -en primigestas (mujeres en su primer embarazo), el encajamiento con frecuencia ocurre semanas antes del inicio del trabajo de parto, mientras en mujeres con partos previos puede ocurrir ya iniciado el trabajo de parto mismo.',
        'Verificar si la presentación fetal está encajada o no es un dato clínico relevante durante la evaluación de una gestante en trabajo de parto avanzado, ya que orienta sobre cuánto camino le queda a la presentación fetal por recorrer a través del canal del parto antes del nacimiento.'
      ]
    },
    {
      t:'La secuencia coordinada de movimientos del mecanismo del parto',
      p:[
        'El *mecanismo del parto* en la presentación cefálica sigue una secuencia coordinada de movimientos: encajamiento, descenso, flexión (la cabeza fetal se flexiona para presentar su diámetro más pequeño posible), rotación interna (la cabeza gira para alinearse con el eje más ancho de la pelvis), extensión (durante la salida de la cabeza), rotación externa (la cabeza retoma su alineación natural con los hombros), y finalmente la expulsión del resto del cuerpo.',
        'Entender esta secuencia normal es la base para reconocer, en la práctica clínica real, cuándo el progreso del parto se está desviando de lo esperado -un concepto que conecta directamente con la vigilancia mediante el partograma ya visto en el tema anterior, y que se aplica de forma práctica en la atención del parto eutócico, tema que se desarrolla a continuación.'
      ],
      foco:[
        '*Consideración clínica*: verificar si la presentación fetal está encajada o no aporta información clínica relevante sobre el progreso esperado del trabajo de parto, especialmente en una gestante primigesta.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 22.'
},

'atencion-parto-eutocico': {
  tema:'Atención del parto eutócico',
  bloque:'Obstetricia I', programa:'unirm', cuatri:11, min:13,
  idea:'La atención del parto eutócico (parto vaginal normal, sin complicaciones) combina la vigilancia activa del progreso ya vista en temas anteriores con un conjunto de decisiones prácticas en el momento del nacimiento mismo.',
  claves:['atención del parto vaginal','episiotomía','alumbramiento'],
  sigue:'puerperio-normal',
  secciones:[
    {
      t:'Principios generales de la atención del parto vaginal',
      p:[
        'La *atención del parto vaginal* eutócico combina la vigilancia continua ya descrita en temas anteriores (progreso mediante partograma, frecuencia cardíaca fetal) con el acompañamiento activo de la gestante durante el segundo periodo (expulsivo), incluyendo orientación sobre el pujo efectivo coordinado con las contracciones, y la protección del periné durante la salida de la cabeza fetal para reducir el riesgo de desgarros significativos.',
        'Un principio general de la obstetricia moderna es intervenir lo menos posible mientras el progreso siga un curso normal, reservando intervenciones más activas para cuando existe una indicación clínica específica -este principio retoma la misma lógica ya vista sobre escalonar intervenciones según la necesidad real, aplicada aquí al contexto específico de la atención del parto.'
      ]
    },
    {
      t:'La episiotomía: de práctica rutinaria a decisión selectiva',
      p:[
        'La *episiotomía* es una incisión quirúrgica del periné realizada durante el segundo periodo del parto, cuya práctica ha evolucionado significativamente: de realizarse de forma rutinaria en el pasado, a reservarse actualmente para indicaciones específicas (como la necesidad de acelerar el nacimiento ante compromiso fetal, o cuando existe riesgo elevado de un desgarro más extenso sin la incisión), ya que la evidencia acumulada no demuestra un beneficio consistente de su uso rutinario frente a permitir un desgarro espontáneo cuando ocurre.',
        'Este cambio de práctica, de rutinaria a selectiva, ilustra un principio general aplicable a toda la medicina: una intervención que alguna vez se consideró estándar puede y debe revisarse cuando la evidencia acumulada muestra que no aporta el beneficio que originalmente se asumía, retomando la lógica de medicina basada en evidencia ya vista en otros bloques de este pensum.'
      ]
    },
    {
      t:'El alumbramiento: el tercer periodo del parto',
      p:[
        'El *alumbramiento* es el tercer periodo del parto, desde el nacimiento hasta la expulsión completa de la placenta, un momento clínicamente relevante porque es cuando ocurre el mayor riesgo de hemorragia postparto si la placenta no se desprende y expulsa de forma completa, o si el útero no logra contraerse adecuadamente después de la expulsión placentaria.',
        'El manejo activo del alumbramiento (que incluye la administración de un fármaco uterotónico inmediatamente después del nacimiento, entre otras medidas) ha demostrado reducir significativamente el riesgo de hemorragia postparto en comparación con un manejo puramente expectante, retomando la conexión con la prevención activa de complicaciones ya vista repetidamente a lo largo de este pensum, en vez de esperar a que una complicación ya establecida requiera manejo curativo.'
      ],
      foco:[
        '*Consideración clínica*: el manejo activo del alumbramiento reduce de forma significativa el riesgo de hemorragia postparto, un ejemplo concreto de cómo una intervención preventiva bien establecida mejora un resultado clínico medible.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 27.'
},

'puerperio-normal': {
  tema:'Puerperio normal',
  bloque:'Obstetricia I', programa:'unirm', cuatri:11, min:12,
  idea:'El puerperio -el periodo posterior al parto durante el cual el cuerpo de la mujer regresa progresivamente a su estado previo al embarazo- merece la misma atención clínica sistemática que el embarazo mismo, aunque con frecuencia recibe menos vigilancia de la que amerita.',
  claves:['puerperio inmediato','involución uterina','loquios'],
  sigue:'hemorragia-obstetrica-primer-trimestre',
  secciones:[
    {
      t:'El puerperio inmediato: las primeras horas de mayor vigilancia',
      p:[
        'El *puerperio inmediato* -las primeras horas después del parto- es el periodo de mayor riesgo de complicaciones hemorrágicas, retomando directamente la vigilancia ya iniciada durante el alumbramiento: verificar que el útero se mantenga adecuadamente contraído (un útero bien contraído se percibe firme a la palpación abdominal, un signo clínico simple pero de alto valor) y que el sangrado vaginal se mantenga dentro de lo esperado son parte central de esta vigilancia temprana.',
        'Esta vigilancia cercana durante las primeras horas retoma la misma lógica ya vista sobre concentrar la vigilancia donde el riesgo real es mayor, ya introducida en el calendario de controles prenatales: el riesgo de hemorragia postparto es más alto precisamente en estas primeras horas, por lo que la vigilancia debe ser más frecuente y activa en ese momento específico, no distribuida de forma uniforme durante todo el puerperio.'
      ]
    },
    {
      t:'La involución uterina',
      p:[
        'La *involución uterina* es el proceso mediante el cual el útero, que durante el embarazo alcanza un tamaño considerablemente mayor al habitual, regresa progresivamente a su tamaño previo al embarazo durante las semanas siguientes al parto -este proceso sigue un patrón esperado y predecible, verificable mediante la palpación del fondo uterino en cada evaluación puerperal.',
        'Una involución uterina que no progresa según lo esperado -un útero que permanece anormalmente grande o blando más allá del tiempo esperado- puede señalar una complicación (retención de restos placentarios, infección puerperal) que amerita evaluación adicional, retomando el mismo principio ya visto repetidamente en este pensum: comparar una trayectoria esperada contra la evolución real observada es clínicamente más informativo que una evaluación aislada en un único momento.'
      ]
    },
    {
      t:'Los loquios y su evolución esperada',
      p:[
        'Los *loquios* son la secreción vaginal normal del puerperio, compuesta por sangre, tejido de la decidua uterina y moco, que sigue una evolución esperada y predecible en su color y cantidad a lo largo de las semanas del puerperio: inicialmente de color rojo intenso (similar a un sangrado menstrual abundante), progresando gradualmente hacia un color más claro y una cantidad decreciente conforme avanza la involución uterina.',
        'Reconocer esta evolución esperada de los loquios permite distinguir un puerperio que progresa normalmente de uno que se está desviando -un loquio que se mantiene con sangrado rojo intenso más allá del tiempo esperado, que aumenta en vez de disminuir, o que se acompaña de mal olor o fiebre, son señales que ameritan evaluación adicional por una posible complicación puerperal.'
      ],
      foco:[
        '*Consideración clínica*: la vigilancia del puerperio, especialmente en las primeras horas tras el parto, merece la misma atención sistemática que el embarazo mismo -un útero bien contraído y un sangrado dentro de lo esperado son los primeros datos clínicos a verificar.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 36.'
},

'hemorragia-obstetrica-primer-trimestre': {
  tema:'Hemorragia obstétrica del primer trimestre',
  bloque:'Obstetricia I', programa:'unirm', cuatri:11, min:14,
  idea:'El sangrado vaginal durante el primer trimestre del embarazo es un motivo de consulta frecuente y clínicamente heterogéneo, desde causas benignas y autolimitadas hasta emergencias obstétricas verdaderas que ponen en riesgo la vida de la mujer.',
  claves:['aborto espontáneo','embarazo ectópico','enfermedad trofoblástica gestacional'],
  sigue:'hemorragia-obstetrica-tercer-trimestre',
  secciones:[
    {
      t:'Aborto espontáneo: la causa más frecuente',
      p:[
        'El *aborto espontáneo* -la pérdida del embarazo antes de una edad gestacional determinada, generalmente antes de las 20-22 semanas según la definición local- es la causa más frecuente de sangrado en el primer trimestre, y presenta distintas formas clínicas (amenaza de aborto, aborto en curso, aborto incompleto, aborto completo, aborto retenido), cada una con hallazgos clínicos y ecográficos característicos que determinan el manejo apropiado.',
        'Distinguir entre estas formas -por ejemplo, entre una amenaza de aborto, donde el embrión sigue viable y el cuello uterino permanece cerrado, y un aborto en curso, donde el cuello ya se encuentra dilatado y el proceso es generalmente irreversible- combina la evaluación clínica (características del sangrado, dolor, hallazgos del examen) con la ecografía obstétrica ya vista anteriormente en este bloque.'
      ]
    },
    {
      t:'Embarazo ectópico: la emergencia que no se puede pasar por alto',
      p:[
        'El *embarazo ectópico* es la implantación del embarazo fuera de la cavidad uterina (más frecuentemente en la trompa de Falopio), una condición potencialmente mortal si el sitio de implantación se rompe y genera una hemorragia interna significativa -su sospecha debe mantenerse activa ante cualquier mujer en edad reproductiva con dolor abdominal o pélvico y sangrado vaginal, con una prueba de embarazo positiva, especialmente si la ecografía no logra confirmar un embarazo intrauterino a pesar de un nivel de beta-hCG que, según el patrón esperado, debería ya mostrar un embarazo visible dentro del útero.',
        'Esta correlación entre el nivel de beta-hCG y los hallazgos ecográficos esperados -ya introducida en el tema de diagnóstico de embarazo- es precisamente la herramienta clínica que permite sospechar un embarazo ectópico incluso antes de que ocurra una ruptura, cuando la intervención puede ser mucho menos invasiva y de mucho menor riesgo para la mujer.'
      ]
    },
    {
      t:'Enfermedad trofoblástica gestacional: la causa menos frecuente pero distintiva',
      p:[
        'La *enfermedad trofoblástica gestacional* (mola hidatiforme en su forma más común) es una proliferación anormal del tejido trofoblástico, con una presentación clínica que puede incluir sangrado vaginal, un útero de tamaño mayor al esperado para la edad gestacional, y niveles de beta-hCG marcadamente más elevados de lo esperado -un hallazgo ecográfico característico, distinto del de un embarazo normal, generalmente confirma el diagnóstico.',
        'Aunque es la causa menos frecuente de las tres presentadas en este tema, su reconocimiento es clínicamente relevante porque su manejo y seguimiento difieren sustancialmente de los de un embarazo normal o de un aborto espontáneo, incluyendo un seguimiento posterior prolongado de los niveles de beta-hCG para descartar la persistencia de tejido trofoblástico anormal.'
      ],
      foco:[
        '*Consideración clínica*: ante una mujer en edad reproductiva con dolor abdominal, sangrado vaginal y prueba de embarazo positiva, mantener activa la sospecha de embarazo ectópico hasta confirmar por ecografía la localización intrauterina del embarazo es una conducta prudente que puede salvar vidas.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 18.'
},

'hemorragia-obstetrica-tercer-trimestre': {
  tema:'Hemorragia obstétrica del tercer trimestre',
  bloque:'Obstetricia I', programa:'unirm', cuatri:11, min:14,
  idea:'El sangrado vaginal en el tercer trimestre del embarazo tiene un diagnóstico diferencial completamente distinto al del primer trimestre, con causas que representan verdaderas emergencias obstétricas para la madre y el feto.',
  claves:['placenta previa','desprendimiento prematuro de placenta','rotura uterina'],
  sigue:'trastornos-hipertensivos-embarazo',
  secciones:[
    {
      t:'Placenta previa: el sangrado indoloro que orienta el diagnóstico',
      p:[
        'La *placenta previa* es la implantación de la placenta cubriendo total o parcialmente el orificio cervical interno, una condición que típicamente se presenta con sangrado vaginal indoloro, de inicio súbito, con frecuencia recurrente en episodios a lo largo del tercer trimestre -este carácter indoloro es un dato clínico central que ayuda a distinguirla de otras causas de sangrado en esta etapa del embarazo.',
        'Un principio de manejo particularmente importante en la placenta previa es evitar el tacto vaginal digital hasta descartar esta condición mediante ecografía, ya que la manipulación del cuello uterino en presencia de una placenta previa puede desencadenar una hemorragia significativa -una excepción relevante a la evaluación ginecológica habitual, que retoma la importancia de adaptar el examen clínico según el contexto de riesgo específico.'
      ]
    },
    {
      t:'Desprendimiento prematuro de placenta: el sangrado doloroso',
      p:[
        'El *desprendimiento prematuro de placenta* (abruptio placentae) es la separación de la placenta de la pared uterina antes del nacimiento, una condición que, a diferencia de la placenta previa, típicamente se presenta con dolor abdominal significativo, un útero que puede palparse hipertónico (con tono aumentado y doloroso a la palpación), y sangrado vaginal que puede ser variable en cantidad -en ocasiones el sangrado externo es escaso, aunque exista una hemorragia interna significativa acumulándose detrás de la placenta.',
        'Esta distinción entre sangrado indoloro (que orienta hacia placenta previa) y sangrado doloroso con útero hipertónico (que orienta hacia desprendimiento de placenta) es una de las herramientas de diagnóstico diferencial más útiles en la evaluación inicial de una hemorragia del tercer trimestre, aunque la confirmación definitiva con frecuencia requiere estudios adicionales.'
      ]
    },
    {
      t:'Rotura uterina: la complicación catastrófica y menos frecuente',
      p:[
        'La *rotura uterina* es la separación completa de la pared uterina, una complicación poco frecuente pero catastrófica, con mayor riesgo en mujeres con una cicatriz uterina previa (como una cesárea anterior) que intentan un trabajo de parto vaginal -se presenta clásicamente con dolor abdominal súbito e intenso, cese repentino de las contracciones uterinas previamente presentes, y signos de compromiso fetal agudo.',
        'Este tema cierra el recorrido de las tres causas principales de hemorragia del tercer trimestre retomando un principio general ya visto repetidamente en este pensum: reconocer el patrón clínico característico de cada condición (dolor, tono uterino, patrón del sangrado) permite orientar la sospecha diagnóstica inicial con rapidez, incluso antes de contar con estudios confirmatorios, en un contexto donde cada minuto de demora puede tener consecuencias graves para la madre y el feto.'
      ],
      foco:[
        '*Consideración clínica*: ante un sangrado del tercer trimestre, nunca realizar un tacto vaginal digital hasta haber descartado placenta previa mediante ecografía, ya que la manipulación cervical en presencia de esta condición puede desencadenar una hemorragia significativa.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 41.'
},

'trastornos-hipertensivos-embarazo': {
  tema:'Trastornos hipertensivos del embarazo',
  bloque:'Obstetricia I', programa:'unirm', cuatri:11, min:14,
  idea:'Los trastornos hipertensivos del embarazo son una de las principales causas de morbimortalidad materna y perinatal a nivel mundial, y su reconocimiento oportuno mediante el control prenatal sistemático ya visto en este bloque es una de las intervenciones de mayor impacto en la obstetricia moderna.',
  claves:['preeclampsia','eclampsia','hipertensión gestacional'],
  sigue:'diabetes-gestacional-en-obstetricia',
  secciones:[
    {
      t:'Hipertensión gestacional: la elevación de la presión sin otros hallazgos',
      p:[
        'La *hipertensión gestacional* es la elevación de la presión arterial que se desarrolla después de la semana 20 del embarazo, en una mujer previamente sin hipertensión, sin la presencia de proteinuria u otros signos de compromiso multiorgánico que caracterizan a la preeclampsia -esta distinción retoma directamente la importancia ya vista sobre reconocer la tendencia esperada de la presión arterial durante el embarazo: una elevación fuera de ese patrón esperado es precisamente la señal de alarma que activa esta vigilancia.',
        'Aunque la hipertensión gestacional aislada tiene, en general, un pronóstico más favorable que la preeclampsia, requiere vigilancia continua, porque una proporción de estos casos puede evolucionar hacia una preeclampsia si aparecen los hallazgos adicionales característicos de esa condición más avanzada -de ahí que el control prenatal frecuente en el tercer trimestre, ya visto en el calendario de controles, sea particularmente relevante para esta vigilancia.'
      ]
    },
    {
      t:'Preeclampsia: cuando la hipertensión se acompaña de compromiso multiorgánico',
      p:[
        'La *preeclampsia* es un trastorno hipertensivo del embarazo caracterizado por la elevación de la presión arterial después de la semana 20, acompañada de proteinuria significativa u otros signos de compromiso de órganos maternos (función hepática o renal alterada, alteraciones hematológicas, síntomas neurológicos como cefalea intensa o alteraciones visuales) -su fisiopatología involucra una placentación anormal que genera disfunción del endotelio vascular materno, con consecuencias que afectan a múltiples sistemas orgánicos simultáneamente.',
        'La severidad de la preeclampsia varía considerablemente, desde formas más leves hasta formas graves con compromiso significativo de órganos maternos, y esta clasificación de severidad determina directamente la conducta de manejo -desde vigilancia ambulatoria estrecha en las formas más leves, hasta la consideración de finalizar el embarazo en las formas graves, dependiendo del balance entre el riesgo materno y el beneficio de continuar la gestación.'
      ]
    },
    {
      t:'Eclampsia: la complicación convulsiva',
      p:[
        'La *eclampsia* es la aparición de convulsiones en una mujer con preeclampsia, sin otra causa neurológica que las explique, representando la forma más grave del espectro de los trastornos hipertensivos del embarazo -una verdadera emergencia obstétrica que requiere manejo inmediato tanto para controlar las convulsiones como para estabilizar a la madre antes de considerar la finalización del embarazo.',
        'Ciertos síntomas -cefalea intensa persistente, alteraciones visuales, dolor en el cuadrante superior derecho del abdomen- en una gestante con preeclampsia ya conocida se consideran signos de alarma premonitorios de una posible eclampsia inminente, retomando el mismo principio de "banderas rojas" ya visto repetidamente en otros bloques: reconocer estos síntomas de alarma a tiempo permite intervenir antes de que ocurra la convulsión, en vez de solo reaccionar después de que ya sucedió.'
      ],
      foco:[
        '*Consideración clínica*: una gestante con preeclampsia conocida que reporta cefalea intensa persistente, alteraciones visuales o dolor en el cuadrante superior derecho debe evaluarse con urgencia, por el riesgo de progresión hacia eclampsia.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 40.'
},

'diabetes-gestacional-en-obstetricia': {
  tema:'Diabetes gestacional en el embarazo',
  bloque:'Obstetricia I', programa:'unirm', cuatri:11, min:13,
  idea:'La diabetes gestacional es una condición que aparece específicamente durante el embarazo, con consecuencias tanto para la madre como para el feto, y cuyo tamizaje sistemático durante el control prenatal permite detectarla antes de que se manifieste con complicaciones evidentes.',
  claves:['tamizaje de diabetes gestacional','prueba de tolerancia a la glucosa','control glucémico en el embarazo'],
  sigue:'infecciones-en-el-embarazo',
  secciones:[
    {
      t:'Qué es la diabetes gestacional y por qué se desarrolla',
      p:[
        'La *diabetes gestacional* es la intolerancia a la glucosa que se identifica por primera vez durante el embarazo, generalmente relacionada con los cambios hormonales propios de la gestación (particularmente en el segundo y tercer trimestre) que generan un estado de mayor resistencia a la insulina, necesario fisiológicamente para asegurar un suministro adecuado de glucosa al feto en desarrollo, pero que en algunas mujeres excede la capacidad de su páncreas de compensar con una mayor producción de insulina.',
        'Ciertos factores aumentan el riesgo de desarrollar diabetes gestacional -antecedente de diabetes gestacional en un embarazo previo, sobrepeso u obesidad previa al embarazo, antecedentes familiares de diabetes, edad materna avanzada, entre otros- información relevante para identificar a las gestantes que ameritan una vigilancia particularmente atenta.'
      ]
    },
    {
      t:'El tamizaje mediante la prueba de tolerancia a la glucosa',
      p:[
        'El *tamizaje de diabetes gestacional* se realiza de forma sistemática durante el control prenatal, generalmente entre las semanas 24 y 28 del embarazo, mediante una *prueba de tolerancia a la glucosa*, que mide la respuesta glucémica de la gestante tras la ingesta de una carga estandarizada de glucosa -este tamizaje sistemático retoma directamente la misma lógica de detección proactiva ya vista en niveles de prevención (Medicina Preventiva, 9no): detectar la condición antes de que genere complicaciones evidentes, en vez de esperar a que estas aparezcan.',
        'Este tamizaje se realiza de forma universal a toda gestante durante ese periodo del embarazo, no solo a quienes presentan factores de riesgo evidentes, precisamente porque una proporción significativa de los casos de diabetes gestacional ocurre en mujeres sin factores de riesgo claramente identificables antes del tamizaje.'
      ]
    },
    {
      t:'Por qué el control glucémico durante el embarazo importa tanto',
      p:[
        'El *control glucémico en el embarazo* es relevante porque una diabetes gestacional no controlada adecuadamente se asocia con consecuencias documentadas tanto para la madre (mayor riesgo de trastornos hipertensivos del embarazo, ya vistos en el tema anterior) como para el feto (macrosomía fetal, con mayor riesgo de complicaciones durante el parto, y alteraciones metabólicas del recién nacido en el periodo inmediato posterior al nacimiento).',
        'El manejo de la diabetes gestacional sigue un enfoque escalonado similar al ya visto en otras condiciones de este pensum: iniciar con modificaciones en la alimentación y actividad física, y avanzar hacia tratamiento farmacológico (insulina en la mayoría de los casos que lo requieren) solo si las medidas iniciales no logran el control glucémico esperado -otra aplicación del principio ya visto de escalonar la intervención según la respuesta clínica real observada.'
      ],
      foco:[
        '*Consideración clínica*: el tamizaje universal de diabetes gestacional entre las semanas 24 y 28, aplicado a toda gestante sin importar si presenta factores de riesgo evidentes, retomando la lógica preventiva ya vista en otros bloques de este pensum, es indispensable porque muchos casos ocurren sin factores de riesgo claros.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 57.'
},

'infecciones-en-el-embarazo': {
  tema:'Infecciones en el embarazo',
  bloque:'Obstetricia I', programa:'unirm', cuatri:11, min:13,
  idea:'Este tema cierra el bloque de Obstetricia I recordando que el embarazo no protege a la mujer de las infecciones comunes, y que ciertas infecciones, además de afectar a la madre, pueden transmitirse al feto con consecuencias potencialmente graves si no se detectan y tratan oportunamente.',
  claves:['infección urinaria en el embarazo','sífilis gestacional','toxoplasmosis congénita'],
  sigue:'anatomia-fisiologia-aparato-reproductor-femenino',
  secciones:[
    {
      t:'Infección urinaria en el embarazo: por qué se trata incluso sin síntomas',
      p:[
        'La *infección urinaria en el embarazo* -incluyendo la bacteriuria asintomática, es decir, la presencia de bacterias significativas en la orina sin síntomas urinarios evidentes- se trata activamente durante la gestación, a diferencia de lo que podría considerarse en una mujer no embarazada con el mismo hallazgo, precisamente porque los cambios anatómicos y fisiológicos del embarazo ya vistos en este bloque (dilatación de las vías urinarias, entre otros) aumentan el riesgo de que una infección urinaria asintomática progrese hacia una pielonefritis, con riesgo asociado de parto pretérmino.',
        'Este es un ejemplo claro de cómo el embarazo cambia el umbral de intervención clínica frente a un mismo hallazgo: una bacteriuria asintomática que podría observarse sin tratamiento en una mujer no gestante se trata activamente durante el embarazo, retomando la lógica ya vista sobre interpretar cualquier hallazgo clínico dentro del contexto fisiológico específico del embarazo.'
      ]
    },
    {
      t:'Sífilis gestacional: el tamizaje que previene la sífilis congénita',
      p:[
        'La *sífilis gestacional* -la infección por sífilis en una mujer embarazada- tiene relevancia particular porque, sin tratamiento, puede transmitirse al feto (sífilis congénita) con consecuencias graves, incluyendo pérdida fetal, parto pretérmino, o manifestaciones clínicas significativas en el recién nacido; por esta razón, el tamizaje sistemático de sífilis es parte estándar del control prenatal, generalmente repetido en distintos momentos del embarazo según el nivel de riesgo de la gestante.',
        'El tratamiento oportuno de la sífilis durante el embarazo, con el esquema y el tiempo de anticipación adecuados antes del parto, previene de forma efectiva la transmisión al feto en la gran mayoría de los casos -otro ejemplo de cómo la detección sistemática mediante tamizaje, ya vista repetidamente en este pensum, permite una intervención que cambia significativamente el pronóstico.'
      ]
    },
    {
      t:'Toxoplasmosis congénita: el riesgo depende del momento de la infección',
      p:[
        'La *toxoplasmosis congénita* ocurre cuando una mujer se infecta por primera vez con el parásito Toxoplasma gondii durante el embarazo (la infección previa al embarazo generalmente confiere inmunidad protectora) y lo transmite al feto -de forma particular, el riesgo de transmisión al feto y la gravedad de las consecuencias varían según el trimestre en que ocurre la infección materna: la transmisión es menos frecuente en el primer trimestre pero, cuando ocurre en esa etapa temprana, tiende a generar consecuencias más graves en el feto, mientras en el tercer trimestre la transmisión es más frecuente pero las consecuencias tienden a ser menos graves.',
        'Este tema cierra el bloque completo de Obstetricia I retomando el hilo conductor de todo el bloque: desde la fisiología normal del embarazo hasta estas infecciones específicas, cada aspecto de la atención obstétrica exige entender tanto lo que es normal como los desvíos que ameritan una intervención oportuna, con el objetivo compartido de proteger tanto a la madre como al feto en desarrollo.'
      ],
      foco:[
        '*Consideración clínica*: el tratamiento activo de infecciones que en otro contexto podrían observarse sin intervención (como la bacteriuria asintomática) es una decisión clínica que cambia específicamente durante el embarazo, por el riesgo particular de complicaciones tanto maternas como fetales.'
      ]
    }
  ],
  ref:'Williams, Obstetricia, cap. 64.'
}

});
