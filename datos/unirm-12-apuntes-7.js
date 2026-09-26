/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 12 (lote 7)
   Cubre NEONATOLOGÍA al estandar extenso (3 secciones, ~200-300
   palabras por seccion, min 12-14). Septima materia del
   cuatrimestre 12 (2 creditos, 7 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== NEONATOLOGÍA ==================== */
'prematurez-complicaciones': {
  tema:'Prematurez y sus complicaciones',
  bloque:'Neonatología', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema abre la materia de Neonatología retomando directamente la evaluación del recién nacido normal ya vista en Pediatría I, profundizando ahora en el recién nacido que no completó su desarrollo intrauterino esperado y las complicaciones que esto genera.',
  claves:['recién nacido prematuro','complicaciones de la prematurez','edad gestacional y prematurez'],
  sigue:'sindrome-dificultad-respiratoria-recien-nacido',
  secciones:[
    {
      t:'El recién nacido prematuro como recién nacido con desarrollo incompleto',
      p:[
        'El *recién nacido prematuro* es aquel que nace antes de completar la edad gestacional considerada de término, lo que significa que múltiples sistemas de órganos -particularmente el pulmonar, el digestivo, y el sistema nervioso central- pueden no haber alcanzado la madurez funcional necesaria para adaptarse apropiadamente a la vida fuera del útero, a diferencia del recién nacido de término ya evaluado como normal en Pediatría I.',
        'Reconocer que la prematurez no es una condición única y uniforme, sino un espectro donde el grado de inmadurez y el riesgo de complicaciones aumentan considerablemente cuanto menor es la edad gestacional al nacer, retoma la importancia ya vista repetidamente en este pensum sobre reconocer un espectro de severidad, no una categoría binaria simple de "prematuro" o "no prematuro".'
      ]
    },
    {
      t:'Las complicaciones de la prematurez como consecuencia directa de la inmadurez',
      p:[
        'Las *complicaciones de la prematurez* derivan directamente de la inmadurez funcional de los sistemas de órganos ya mencionada: dificultad respiratoria por inmadurez pulmonar, dificultad para regular la temperatura corporal, mayor susceptibilidad a infecciones por un sistema inmunológico inmaduro, y mayor riesgo de complicaciones digestivas y neurológicas específicas que se desarrollarán en los temas siguientes de este bloque.',
        'Comprender que estas complicaciones comparten un origen común -la inmadurez de un sistema de órganos que, de haber completado su desarrollo intrauterino normal, no presentaría esta vulnerabilidad- retoma un principio general ya visto repetidamente en este pensum sobre identificar una causa subyacente compartida detrás de múltiples manifestaciones clínicas aparentemente distintas.'
      ]
    },
    {
      t:'La edad gestacional como determinante directo del pronóstico',
      p:[
        'La *edad gestacional y prematurez* tienen una relación directamente proporcional en términos de pronóstico: cuanto menor la edad gestacional al momento del nacimiento, mayor el riesgo y la severidad esperada de las complicaciones asociadas, lo que hace de la determinación precisa de la edad gestacional un dato clínico fundamental para anticipar el curso clínico probable de cada recién nacido prematuro específico.',
        'Este tema cierra estableciendo la base sobre la que se construirán los 6 temas restantes de esta materia: cada complicación específica de la prematurez que se desarrollará después -dificultad respiratoria, sepsis, enterocolitis, y las consideraciones de cuidado del recién nacido de alto riesgo- se relaciona directamente con este principio fundamental de que la inmadurez asociada a una menor edad gestacional determina tanto el tipo como la severidad esperada de las complicaciones.'
      ],
      foco:[
        '*Consideración clínica*: la edad gestacional precisa es un dato clínico fundamental que determina directamente el pronóstico y el tipo de complicaciones esperadas en el recién nacido prematuro, no un dato meramente descriptivo.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 13.'
},

'sindrome-dificultad-respiratoria-recien-nacido': {
  tema:'Síndrome de dificultad respiratoria del recién nacido',
  bloque:'Neonatología', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema retoma directamente la inmadurez pulmonar ya mencionada como una de las complicaciones características de la prematurez, desarrollando en detalle el mecanismo fisiopatológico específico y su manejo.',
  claves:['enfermedad de membrana hialina','surfactante pulmonar neonatal','dificultad respiratoria neonatal'],
  sigue:'sepsis-neonatal',
  secciones:[
    {
      t:'La enfermedad de membrana hialina como causa característica en el prematuro',
      p:[
        'La *enfermedad de membrana hialina* es la causa más característica de dificultad respiratoria en el recién nacido prematuro, generada por una deficiencia del surfactante pulmonar que normalmente se produce en etapas avanzadas del desarrollo fetal -cuanto menor la edad gestacional al nacer, retomando directamente el principio ya establecido en el tema anterior, mayor la probabilidad de que esta deficiencia sea clínicamente significativa.',
        'Reconocer esta relación entre la edad gestacional y la probabilidad de deficiencia de surfactante retoma la importancia ya vista sobre cómo un principio general (a menor edad gestacional, mayor severidad de complicaciones) se aplica de forma específica y concreta a cada complicación particular de la prematurez que se desarrolla en este bloque.'
      ]
    },
    {
      t:'El surfactante pulmonar neonatal y su función fisiológica',
      p:[
        'El *surfactante pulmonar neonatal* es una sustancia que reduce la tensión superficial dentro de los alvéolos pulmonares, evitando que estos colapsen completamente al final de cada espiración -sin suficiente surfactante, los alvéolos tienden a colapsarse, generando un esfuerzo respiratorio considerablemente mayor para reexpandirlos con cada respiración, lo que explica el trabajo respiratorio aumentado característico de esta condición.',
        'Comprender esta función fisiológica específica del surfactante retoma la importancia ya vista repetidamente en este pensum sobre comprender el mecanismo fisiológico normal antes de entender su alteración patológica: entender exactamente qué hace el surfactante permite comprender por qué su deficiencia genera específicamente el patrón de dificultad respiratoria observado, en vez de memorizar la asociación sin comprender el mecanismo subyacente.'
      ]
    },
    {
      t:'La dificultad respiratoria neonatal y su reconocimiento clínico',
      p:[
        'La *dificultad respiratoria neonatal* se manifiesta clínicamente mediante signos como taquipnea (frecuencia respiratoria aumentada), retracciones (uso de músculos accesorios de la respiración visibles como hundimiento entre las costillas), quejido espiratorio, y cianosis en casos más severos -reconocer estos signos de forma temprana permite iniciar el manejo apropiado, que en casos de deficiencia de surfactante puede incluir su administración exógena directamente a los pulmones del recién nacido.',
        'Este tema cierra retomando la importancia ya vista repetidamente en este pensum sobre reconocer signos clínicos específicos que orientan hacia un mecanismo fisiopatológico concreto: el patrón específico de dificultad respiratoria, combinado con el antecedente de prematurez, orienta directamente hacia la enfermedad de membrana hialina como causa más probable, permitiendo un manejo dirigido y oportuno.'
      ],
      foco:[
        '*Consideración clínica*: el surfactante pulmonar exógeno, administrado directamente a los pulmones del recién nacido con deficiencia significativa, es un ejemplo de tratamiento dirigido específicamente al mecanismo fisiopatológico subyacente, no solo a los síntomas.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 14.'
},

'sepsis-neonatal': {
  tema:'Sepsis neonatal',
  bloque:'Neonatología', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema retoma directamente la mayor susceptibilidad a infecciones ya mencionada como complicación de la prematurez, aunque la sepsis neonatal también puede ocurrir en recién nacidos de término, exigiendo un reconocimiento particularmente cuidadoso dado lo sutil de su presentación inicial.',
  claves:['sepsis neonatal temprana','sepsis neonatal tardía','factores de riesgo de sepsis neonatal'],
  sigue:'enterocolitis-necrotizante',
  secciones:[
    {
      t:'La sepsis neonatal temprana y su relación con el parto',
      p:[
        'La *sepsis neonatal temprana* ocurre típicamente dentro de las primeras 72 horas de vida, adquirida generalmente por transmisión de microorganismos desde el canal del parto de la madre hacia el recién nacido durante el nacimiento -esta relación temporal con el parto retoma la importancia ya vista sobre factores de riesgo obstétricos (como la ruptura prematura de membranas, ya vista en Obstetricia II) que pueden favorecer esta transmisión.',
        'Reconocer esta ventana temporal específica de la sepsis temprana, y su relación directa con eventos del parto, retoma un principio general ya visto repetidamente en este pensum sobre investigar activamente el contexto y los antecedentes relevantes (en este caso, obstétricos) ante la sospecha de una condición neonatal específica, en vez de evaluar al recién nacido de forma aislada sin ese contexto.'
      ]
    },
    {
      t:'La sepsis neonatal tardía y sus fuentes de adquisición distintas',
      p:[
        'La *sepsis neonatal tardía* ocurre después de las primeras 72 horas de vida, con fuentes de adquisición distintas a las del parto -en el recién nacido hospitalizado, particularmente el prematuro que requiere cuidados intensivos prolongados, la adquisición nosocomial (dentro del ambiente hospitalario, retomando la importancia ya vista sobre infecciones intrahospitalarias en otras materias de este pensum) es una fuente relevante a considerar.',
        'Esta distinción entre sepsis temprana y tardía, con mecanismos de adquisición y momento de presentación distintos, retoma un principio general ya visto repetidamente en este pensum sobre reconocer que una misma entidad clínica (sepsis neonatal) puede tener subtipos con causas y contextos epidemiológicos suficientemente distintos como para requerir un abordaje diferenciado en cada caso.'
      ]
    },
    {
      t:'Los factores de riesgo de sepsis neonatal y la importancia del reconocimiento temprano',
      p:[
        'Los *factores de riesgo de sepsis neonatal* incluyen la prematurez ya vista en este bloque, la ruptura prematura de membranas prolongada, la fiebre materna durante el trabajo de parto, y la colonización materna por ciertos microorganismos específicos -identificar estos factores de riesgo permite mantener una vigilancia clínica más estrecha en los recién nacidos con mayor probabilidad de desarrollar sepsis.',
        'Este tema cierra retomando la importancia ya vista repetidamente en este pensum sobre reconocer signos sutiles de una condición grave: la presentación clínica de la sepsis neonatal con frecuencia es inespecífica (dificultad para alimentarse, letargia, inestabilidad de la temperatura) en vez de los signos más floridos esperados en un adulto, lo que exige mantener un alto índice de sospecha ante estos cambios sutiles, particularmente en un recién nacido con factores de riesgo identificados.'
      ],
      foco:[
        '*Consideración clínica*: la presentación clínica de la sepsis neonatal con frecuencia es inespecífica y sutil, lo que exige mantener un alto índice de sospecha ante cambios clínicos leves, particularmente en presencia de factores de riesgo identificados.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 12.'
},

'enterocolitis-necrotizante': {
  tema:'Enterocolitis necrotizante',
  bloque:'Neonatología', programa:'unirm', cuatri:12, min:13,
  idea:'La enterocolitis necrotizante retoma directamente la inmadurez digestiva ya mencionada como complicación de la prematurez, siendo esta condición gastrointestinal grave particularmente característica del recién nacido prematuro.',
  claves:['enterocolitis necrotizante','neumatosis intestinal','manejo de la enterocolitis del prematuro'],
  sigue:'asfixia-perinatal',
  secciones:[
    {
      t:'La enterocolitis necrotizante como condición gastrointestinal grave del prematuro',
      p:[
        'La *enterocolitis necrotizante* es una condición gastrointestinal grave, particularmente frecuente en el recién nacido prematuro, donde la pared intestinal, inmadura y vulnerable, sufre inflamación y necrosis (muerte del tejido) por una combinación de factores que incluyen la inmadurez de la barrera intestinal, una circulación sanguínea intestinal comprometida, y la colonización bacteriana del intestino inmaduro.',
        'Reconocer esta condición como una manifestación gastrointestinal más de la inmadurez general del prematuro, retoma directamente el hilo conductor ya establecido en este bloque sobre cómo la inmadurez de distintos sistemas de órganos genera complicaciones específicas características: de la misma forma que la inmadurez pulmonar genera la enfermedad de membrana hialina ya vista, la inmadurez del sistema digestivo genera esta condición gastrointestinal grave.'
      ]
    },
    {
      t:'La neumatosis intestinal como hallazgo radiológico característico',
      p:[
        'La *neumatosis intestinal* -la presencia de gas dentro de la pared intestinal misma, visible en una radiografía abdominal- es un hallazgo radiológico altamente característico de la enterocolitis necrotizante, que confirma el diagnóstico cuando está presente junto con los hallazgos clínicos sugestivos (distensión abdominal, intolerancia a la alimentación, sangre en las heces).',
        'Este hallazgo radiológico específico retoma la importancia ya vista repetidamente en este pensum sobre el valor de un hallazgo de imagen característico que confirma un diagnóstico clínico sospechado: de la misma forma que otros hallazgos radiológicos específicos ya vistos en distintos contextos de este pensum orientan directamente hacia un diagnóstico particular, la neumatosis intestinal es prácticamente diagnóstica de enterocolitis necrotizante en el contexto clínico apropiado.'
      ]
    },
    {
      t:'El manejo de la enterocolitis del prematuro según su severidad',
      p:[
        'El *manejo de la enterocolitis del prematuro* incluye, en los casos menos severos, suspender la alimentación enteral para dar reposo al intestino comprometido, junto con manejo antibiótico y de soporte, mientras los casos más severos, con perforación intestinal o deterioro clínico significativo, requieren intervención quirúrgica urgente para resecar el tejido intestinal necrótico.',
        'Este tema cierra retomando un principio general ya visto repetidamente en este pensum sobre escalonar el manejo según la severidad del caso: la mayoría de los casos de enterocolitis necrotizante pueden manejarse inicialmente de forma médica conservadora, reservando la cirugía urgente para los casos donde existe evidencia de perforación o deterioro que no responde al manejo médico, el mismo principio de escalonamiento terapéutico ya visto repetidamente en otras condiciones de este pensum.'
      ],
      foco:[
        '*Consideración clínica*: la neumatosis intestinal, visible en radiografía abdominal, es un hallazgo prácticamente diagnóstico de enterocolitis necrotizante cuando se combina con hallazgos clínicos sugestivos en un recién nacido prematuro.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 15.'
},

'asfixia-perinatal': {
  tema:'Asfixia perinatal',
  bloque:'Neonatología', programa:'unirm', cuatri:12, min:14,
  idea:'La asfixia perinatal retoma directamente la conexión ya establecida en Pediatría II entre esta condición y el desarrollo posterior de parálisis cerebral infantil, profundizando ahora en el mecanismo y manejo inmediato de esta urgencia neonatal.',
  claves:['asfixia perinatal','encefalopatía hipóxico-isquémica neonatal','puntaje de Apgar bajo persistente'],
  sigue:'malformaciones-congenitas-frecuentes',
  secciones:[
    {
      t:'La asfixia perinatal como interrupción del intercambio de oxígeno',
      p:[
        'La *asfixia perinatal* es la interrupción o compromiso significativo del intercambio de oxígeno y dióxido de carbono entre la madre y el feto durante el trabajo de parto o el parto mismo, generando un estado de hipoxia (oxigenación insuficiente) que, si es suficientemente severo y prolongado, puede causar daño a múltiples órganos, particularmente al cerebro, ya vista como factor de riesgo de parálisis cerebral infantil en Pediatría II.',
        'Reconocer que la asfixia perinatal es fundamentalmente un problema de intercambio de oxígeno, no una entidad vaga o mal definida, retoma la importancia ya vista repetidamente en este pensum sobre comprender el mecanismo fisiopatológico preciso antes de razonar sobre sus consecuencias: comprender que el daño se relaciona directamente con la severidad y duración de la hipoxia permite entender por qué el manejo inmediato busca minimizar exactamente esos dos factores.'
      ]
    },
    {
      t:'La encefalopatía hipóxico-isquémica neonatal como consecuencia cerebral',
      p:[
        'La *encefalopatía hipóxico-isquémica neonatal* es la manifestación cerebral de la asfixia perinatal, caracterizada por alteración del estado de conciencia, del tono muscular, y en casos severos, convulsiones neonatales, con una severidad que se clasifica en grados progresivos que orientan directamente hacia el pronóstico neurológico a largo plazo del recién nacido afectado.',
        'Esta clasificación en grados de severidad retoma un principio general ya visto repetidamente en este pensum sobre gradar la magnitud de una condición para orientar tanto el manejo inmediato como el pronóstico esperado, en vez de tratar la encefalopatía hipóxico-isquémica como una entidad binaria de presente o ausente: el grado específico de severidad tiene implicaciones pronósticas y terapéuticas directas, incluyendo la consideración de hipotermia terapéutica en casos apropiados.'
      ]
    },
    {
      t:'El puntaje de Apgar bajo persistente como signo de alarma',
      p:[
        'El *puntaje de Apgar bajo persistente* -una puntuación de Apgar significativamente baja que no mejora en las evaluaciones repetidas durante los primeros minutos de vida- es un signo de alarma que orienta hacia una asfixia perinatal significativa, a diferencia de un Apgar inicialmente bajo que mejora rápidamente con las medidas de reanimación, que tiene un significado pronóstico considerablemente más favorable.',
        'Este tema cierra retomando la importancia ya vista repetidamente en este pensum sobre distinguir un hallazgo transitorio de uno persistente como determinante del significado clínico real: no es el valor aislado del Apgar en un momento específico lo que más importa, sino su evolución en el tiempo -un Apgar bajo persistente, que no responde a la reanimación apropiada, tiene implicaciones pronósticas considerablemente más serias que uno bajo inicialmente pero que mejora con rapidez.'
      ],
      foco:[
        '*Consideración clínica*: un puntaje de Apgar bajo persistente, que no mejora con las medidas de reanimación apropiadas, tiene un significado pronóstico considerablemente más serio que un Apgar inicialmente bajo que mejora rápidamente.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 11.'
},

'malformaciones-congenitas-frecuentes': {
  tema:'Malformaciones congénitas frecuentes en el recién nacido',
  bloque:'Neonatología', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema retoma directamente la genética clínica pediátrica ya vista en Pediatría II, ahora enfocándose específicamente en malformaciones estructurales identificables durante el examen físico del recién nacido, algunas de las cuales requieren intervención inmediata.',
  claves:['malformación congénita mayor','defecto del tubo neural en el recién nacido','atresia esofágica'],
  sigue:'cuidados-recien-nacido-alto-riesgo',
  secciones:[
    {
      t:'La malformación congénita mayor y su impacto funcional significativo',
      p:[
        'Una *malformación congénita mayor* es una anomalía estructural presente desde el nacimiento que tiene un impacto funcional o estético significativo, distinguiéndose de variantes anatómicas menores sin relevancia clínica -reconocer esta distinción retoma directamente la importancia ya vista repetidamente en este pensum sobre gradar la relevancia clínica de un hallazgo, en vez de tratar cualquier variante anatómica como igualmente significativa.',
        'El examen físico sistemático del recién nacido, ya establecido como práctica fundamental en Pediatría I, es precisamente lo que permite detectar estas malformaciones mayores de forma oportuna, algunas de las cuales, como se verá en los siguientes apartados de este tema, requieren intervención inmediata para evitar complicaciones graves o incluso la muerte del recién nacido.'
      ]
    },
    {
      t:'El defecto del tubo neural en el recién nacido',
      p:[
        'El *defecto del tubo neural en el recién nacido* -una malformación resultante del cierre incompleto del tubo neural durante el desarrollo embrionario temprano, que puede manifestarse en formas de distinta severidad, desde relativamente leves hasta considerablemente graves con exposición de tejido neural- es una de las malformaciones congénitas mayores más reconocidas, con relevancia adicional porque su riesgo puede reducirse mediante suplementación de ácido fólico antes y durante el embarazo temprano.',
        'Esta posibilidad de prevención mediante una intervención relativamente simple retoma directamente la importancia ya vista repetidamente en este pensum sobre medidas preventivas costo-efectivas: a diferencia de muchas malformaciones congénitas sin una medida preventiva conocida, el defecto del tubo neural es un ejemplo notable donde una intervención nutricional simple y accesible reduce significativamente el riesgo, reforzando la importancia de la suplementación preconcepcional ya vista en contextos de nutrición y embarazo de otras materias de este pensum.'
      ]
    },
    {
      t:'La atresia esofágica como malformación que requiere intervención inmediata',
      p:[
        'La *atresia esofágica* es una malformación donde el esófago no se desarrolla como un conducto continuo, típicamente presentándose con dificultad para tragar la primera alimentación, salivación excesiva, y en muchos casos, asociada a una conexión anormal con la vía respiratoria (fístula traqueoesofágica), lo que genera riesgo de aspiración si no se reconoce oportunamente.',
        'Este tema cierra retomando la importancia ya vista repetidamente en este pensum sobre reconocer malformaciones que exigen intervención inmediata, no manejo expectante: la atresia esofágica, a diferencia de algunas variantes anatómicas menores que pueden observarse sin intervención, requiere corrección quirúrgica relativamente urgente, ilustrando por qué la detección temprana mediante el examen físico sistemático del recién nacido, y la sospecha activa ante los síntomas descritos, es clínicamente crítica en este caso específico.'
      ],
      foco:[
        '*Consideración clínica*: la suplementación de ácido fólico antes y durante el embarazo temprano reduce significativamente el riesgo de defectos del tubo neural, un ejemplo notable de prevención primaria efectiva y accesible contra una malformación congénita mayor.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 10.'
},

'cuidados-recien-nacido-alto-riesgo': {
  tema:'Cuidados del recién nacido de alto riesgo',
  bloque:'Neonatología', programa:'unirm', cuatri:12, min:13,
  idea:'Este último tema cierra el bloque de Neonatología integrando todas las condiciones ya desarrolladas -prematurez, dificultad respiratoria, sepsis, enterocolitis, asfixia, malformaciones- bajo el marco común del cuidado especializado que estos recién nacidos de alto riesgo requieren.',
  claves:['unidad de cuidados intensivos neonatales','recién nacido de bajo peso al nacer','seguimiento del neonato de alto riesgo'],
  sigue:'rol-estudiante-servicio-pediatria',
  secciones:[
    {
      t:'La unidad de cuidados intensivos neonatales como entorno especializado',
      p:[
        'La *unidad de cuidados intensivos neonatales* es el entorno especializado diseñado específicamente para el cuidado de recién nacidos que, por prematurez extrema, alguna de las complicaciones ya vistas en este bloque, o una combinación de factores, requieren monitoreo y soporte considerablemente más intensivo que el que puede ofrecerse en una sala de recién nacidos convencional.',
        'Este entorno especializado retoma directamente la importancia ya vista en otros contextos de cuidados intensivos de este pensum (reanimación pediátrica avanzada en Pediatría II) sobre la necesidad de recursos humanos y tecnológicos concentrados para el manejo de pacientes con mayor vulnerabilidad fisiológica, un principio aplicado aquí específicamente al recién nacido de alto riesgo con las particularidades fisiológicas propias de esta etapa de la vida.'
      ]
    },
    {
      t:'El recién nacido de bajo peso al nacer como marcador de riesgo',
      p:[
        'El *recién nacido de bajo peso al nacer* -ya sea por prematurez, por restricción del crecimiento intrauterino (ya vista en Obstetricia II), o por ambos factores combinados- constituye un marcador de riesgo relevante que orienta hacia la necesidad de vigilancia más estrecha, dado que el bajo peso se asocia con mayor probabilidad de presentar varias de las complicaciones ya desarrolladas a lo largo de este bloque.',
        'Reconocer que el bajo peso al nacer puede originarse por mecanismos distintos (prematurez propiamente dicha, o restricción del crecimiento en un feto que sí completó su edad gestacional esperada) retoma la importancia ya vista repetidamente en este pensum sobre distinguir mecanismos causales distintos detrás de un mismo hallazgo aparente, ya que las implicaciones y el manejo pueden diferir según cuál de estos mecanismos predomine en cada caso específico.'
      ]
    },
    {
      t:'El seguimiento del neonato de alto riesgo más allá del alta hospitalaria',
      p:[
        'El *seguimiento del neonato de alto riesgo* no termina con el alta de la unidad de cuidados intensivos neonatales, sino que debe continuar de forma estructurada durante los primeros años de vida, vigilando activamente el desarrollo psicomotor (retomando la importancia ya vista en Pediatría I) y otras posibles secuelas relacionadas con las complicaciones que el recién nacido haya presentado, particularmente relevante tras una encefalopatía hipóxico-isquémica o una prematurez extrema.',
        'Este tema, y con él todo el bloque de Neonatología, cierra retomando el hilo conductor que ha atravesado toda esta materia: el recién nacido de alto riesgo exige un cuidado que no termina con la resolución del problema agudo inicial, sino que se extiende hacia un seguimiento estructurado a largo plazo, reforzando un principio general ya visto repetidamente en este pensum sobre el seguimiento continuo de condiciones que pueden generar secuelas a largo plazo, en vez de considerar la resolución de la fase aguda como el punto final de la atención médica.'
      ],
      foco:[
        '*Consideración clínica*: el seguimiento del neonato de alto riesgo debe continuar de forma estructurada más allá del alta hospitalaria, vigilando activamente el desarrollo psicomotor y otras posibles secuelas relacionadas con las complicaciones neonatales presentadas.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 13.'
}

});
