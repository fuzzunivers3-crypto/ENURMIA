/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 11 (lote 6)
   Cubre NUTRICIÓN al estandar extenso (3 secciones, ~200-300
   palabras por seccion, min 12-13). Sexta materia del
   cuatrimestre 11 (2 creditos, 7 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== NUTRICIÓN ==================== */
'evaluacion-estado-nutricional': {
  tema:'Evaluación del estado nutricional',
  bloque:'Nutrición', programa:'unirm', cuatri:11, min:13,
  idea:'La evaluación nutricional no es un procedimiento reservado para especialistas en nutrición: es una parte de cualquier consulta médica que aporta información clínica relevante, y su ausencia sistemática deja pasar por alto un factor con impacto directo sobre casi cualquier condición de salud.',
  claves:['índice de masa corporal','evaluación antropométrica','historia dietética'],
  sigue:'macronutrientes-micronutrientes',
  secciones:[
    {
      t:'El índice de masa corporal como punto de partida',
      p:[
        'El *índice de masa corporal* (peso en kilogramos dividido entre la talla en metros al cuadrado) es la herramienta más ampliamente utilizada para clasificar el estado nutricional de un adulto en categorías generales (bajo peso, peso normal, sobrepeso, obesidad), por su simplicidad de cálculo y su correlación razonable con el riesgo de salud a nivel poblacional.',
        'Este indicador, aunque útil como punto de partida, tiene limitaciones reconocidas: no distingue entre masa muscular y masa grasa (por lo que puede clasificar erróneamente a una persona muy musculosa como con sobrepeso), y no aporta información sobre la distribución de la grasa corporal, un factor que, como se ve en el tema de obesidad más adelante en este bloque, tiene relevancia clínica propia más allá del valor numérico global.'
      ]
    },
    {
      t:'La evaluación antropométrica más allá del índice de masa corporal',
      p:[
        'La *evaluación antropométrica* incluye, además del peso y la talla usados para calcular el índice de masa corporal, otras mediciones complementarias como la circunferencia de cintura (relevante para evaluar la distribución de grasa abdominal) y, en contextos específicos, pliegues cutáneos que estiman de forma indirecta la proporción de grasa corporal -esta evaluación más completa retoma la misma lógica ya vista sobre las curvas de crecimiento en Pediatría I: una sola medición aislada aporta menos información que un conjunto de mediciones complementarias interpretadas en conjunto.',
        'En el paciente pediátrico, la evaluación antropométrica se interpreta contra curvas de crecimiento específicas por edad y sexo, ya vistas en Pediatría I, en vez de contra los mismos puntos de corte fijos utilizados en adultos -otro ejemplo de por qué el niño no es un adulto pequeño, un principio que atraviesa todo el pensum pediátrico y que también aplica a la evaluación nutricional.'
      ]
    },
    {
      t:'La historia dietética como complemento indispensable',
      p:[
        'La *historia dietética* es la recolección estructurada de información sobre los patrones habituales de alimentación de una persona -qué come, con qué frecuencia, en qué cantidades aproximadas- y complementa la evaluación antropométrica aportando el contexto necesario para entender por qué un paciente presenta el estado nutricional identificado, no solo cuál es ese estado.',
        'Sin esta información dietética, una evaluación nutricional se queda en el "qué" (el estado nutricional actual) sin llegar al "por qué" (los hábitos y patrones que lo generaron), una limitación relevante porque cualquier intervención nutricional posterior -retomada en los temas de soporte y educación nutricional más adelante en este bloque- depende de entender estos patrones específicos para poder orientarse de forma realista y efectiva.'
      ],
      foco:[
        '*Consideración clínica*: la evaluación nutricional -antropométrica y dietética combinada- debe integrarse como parte habitual de la consulta médica general, no reservarse exclusivamente para consultas específicas de nutrición.'
      ]
    }
  ],
  ref:'Krause, Dietoterapia, cap. 7.'
},

'macronutrientes-micronutrientes': {
  tema:'Macronutrientes y micronutrientes',
  bloque:'Nutrición', programa:'unirm', cuatri:11, min:13,
  idea:'Entender la diferencia entre los nutrientes que el cuerpo requiere en grandes cantidades y los que requiere en cantidades mínimas, pero igualmente indispensables, es la base conceptual para interpretar cualquier deficiencia o exceso nutricional específico.',
  claves:['requerimiento calórico','macronutrientes','micronutrientes esenciales'],
  sigue:'desnutricion-malnutricion',
  secciones:[
    {
      t:'Los macronutrientes: la base energética de la alimentación',
      p:[
        'Los *macronutrientes* -carbohidratos, proteínas, y grasas- son los nutrientes que el cuerpo requiere en cantidades relativamente grandes, ya que aportan la energía necesaria para las funciones corporales (con la excepción de las proteínas, cuya función principal es estructural, aunque también pueden usarse como fuente de energía en ciertas circunstancias) y sirven además como materia prima para la construcción y reparación de tejidos.',
        'La proporción recomendada entre estos tres macronutrientes dentro de una alimentación equilibrada varía según distintos factores individuales (edad, nivel de actividad física, condiciones de salud específicas), pero en términos generales una alimentación balanceada distribuye la energía total entre los tres, sin depender excesivamente de uno solo en detrimento de los demás.'
      ]
    },
    {
      t:'El requerimiento calórico y su individualización',
      p:[
        'El *requerimiento calórico* de una persona es la cantidad total de energía que necesita consumir diariamente para mantener sus funciones vitales, su actividad física, y en el caso de niños y gestantes, el crecimiento o las demandas adicionales del embarazo ya vistas en Obstetricia I -este requerimiento varía considerablemente según la edad, el sexo, el nivel de actividad física, y condiciones fisiológicas específicas, por lo que no existe un valor único aplicable a cualquier persona.',
        'Esta individualización retoma directamente el mismo principio ya visto repetidamente en este pensum: una recomendación nutricional genérica, sin ajustarse a las características específicas de la persona evaluada, corre el riesgo de ser inapropiada -ya sea insuficiente o excesiva- para las necesidades reales de ese individuo particular.'
      ]
    },
    {
      t:'Los micronutrientes esenciales: pequeñas cantidades, gran impacto',
      p:[
        'Los *micronutrientes esenciales* -vitaminas y minerales- se requieren en cantidades mucho menores que los macronutrientes, pero son igualmente indispensables para múltiples funciones corporales, y su deficiencia, aunque involucre cantidades pequeñas, puede tener consecuencias clínicas significativas -el ejemplo ya visto del hierro y su relación con la anemia ferropénica infantil (Pediatría I) y el ácido fólico y su relación con los defectos del tubo neural (Obstetricia I) ilustran cómo un déficit de un micronutriente específico puede generar consecuencias clínicas concretas y bien documentadas.',
        'A diferencia de los macronutrientes, cuya deficiencia o exceso con frecuencia se refleja en el peso corporal (más fácil de detectar mediante la evaluación antropométrica ya vista en el tema anterior), la deficiencia de un micronutriente específico puede pasar desapercibida en una persona con peso corporal aparentemente normal, lo que retoma la importancia de una historia dietética detallada, más allá de solo la antropometría, para identificar posibles deficiencias específicas.'
      ],
      foco:[
        '*Consideración clínica*: una persona con peso corporal normal no está necesariamente libre de deficiencias nutricionales específicas -la deficiencia de un micronutriente particular puede coexistir con un estado antropométrico aparentemente normal.'
      ]
    }
  ],
  ref:'Krause, Dietoterapia, cap. 1.'
},

'desnutricion-malnutricion': {
  tema:'Desnutrición y malnutrición',
  bloque:'Nutrición', programa:'unirm', cuatri:11, min:13,
  idea:'La desnutrición no es un problema exclusivo de la infancia ni de contextos de escasez extrema: puede presentarse en adultos, en contextos de enfermedad crónica, y con frecuencia coexiste, sin proponérselo, con formas de exceso nutricional en la misma población.',
  claves:['desnutrición proteico-calórica','malnutrición en el adulto','déficit de micronutrientes'],
  sigue:'obesidad',
  secciones:[
    {
      t:'La desnutrición proteico-calórica más allá de la infancia',
      p:[
        'La *desnutrición proteico-calórica*, ya vista en su forma pediátrica en el tema de desnutrición infantil (Pediatría I), no es exclusiva de la infancia: puede presentarse en cualquier etapa de la vida cuando el aporte de energía y proteínas es insuficiente de forma sostenida para cubrir las necesidades del organismo, con consecuencias que incluyen pérdida de masa muscular, deterioro de la función inmune, y una capacidad reducida de recuperación ante cualquier otra enfermedad concurrente.',
        'Reconocer que los mismos principios fisiopatológicos aplicables a la desnutrición infantil -déficit calórico global versus déficit predominantemente proteico, ya vistos con el marasmo y el kwashiorkor- se extienden, con las adaptaciones correspondientes, a otras etapas de la vida, ayuda a no limitar la sospecha clínica de desnutrición únicamente al contexto pediátrico.'
      ]
    },
    {
      t:'La malnutrición en el adulto: un problema con frecuencia subestimado',
      p:[
        'La *malnutrición en el adulto* con frecuencia se subestima clínicamente, particularmente en contextos de enfermedad crónica o de hospitalización prolongada, donde el paciente puede perder peso y masa muscular de forma progresiva sin que este deterioro se reconozca activamente como un problema nutricional que amerita intervención, sino que se atribuye exclusivamente a la enfermedad de base sin considerar el componente nutricional específico.',
        'Este subregistro tiene consecuencias clínicas reales: un paciente hospitalizado con malnutrición no reconocida y no tratada tiene mayor riesgo de complicaciones, estancias hospitalarias más prolongadas, y peor recuperación general -retomando la conexión con la vigilancia sistemática ya vista repetidamente en este pensum: sin una evaluación nutricional activa, este deterioro puede pasar desapercibido hasta un punto avanzado.'
      ]
    },
    {
      t:'El déficit de micronutrientes como componente frecuentemente oculto',
      p:[
        'El *déficit de micronutrientes* puede acompañar tanto a la desnutrición proteico-calórica como, de forma menos intuitiva, a estados de exceso calórico -una persona con sobrepeso u obesidad puede, al mismo tiempo, presentar deficiencias específicas de ciertas vitaminas o minerales si su alimentación, aunque excesiva en calorías totales, es pobre en la variedad y calidad de nutrientes que aporta.',
        'Este fenómeno, conocido como malnutrición en su sentido más amplio (que engloba tanto el déficit como el exceso, y su posible coexistencia), retoma la importancia ya vista de la historia dietética detallada: el peso corporal por sí solo, sin evaluar la calidad y variedad de la alimentación, no permite descartar la presencia de deficiencias nutricionales específicas ocultas.'
      ],
      foco:[
        '*Consideración clínica*: la malnutrición en el adulto, particularmente en contextos de enfermedad crónica u hospitalización, con frecuencia se subestima clínicamente al atribuirse exclusivamente a la enfermedad de base, sin reconocer el componente nutricional específico que también amerita intervención.'
      ]
    }
  ],
  ref:'Krause, Dietoterapia, cap. 19.'
},

'obesidad': {
  tema:'Obesidad',
  bloque:'Nutrición', programa:'unirm', cuatri:11, min:13,
  idea:'La obesidad, lejos de ser simplemente un exceso de peso, es una condición crónica con múltiples factores contribuyentes y consecuencias de salud bien documentadas, que exige un manejo tan cuidadoso y respetuoso como cualquier otra enfermedad crónica de este pensum.',
  claves:['obesidad','síndrome metabólico y obesidad','manejo del sobrepeso'],
  sigue:'nutricion-situaciones-especiales',
  secciones:[
    {
      t:'La obesidad como condición crónica multifactorial',
      p:[
        'La *obesidad* es la acumulación excesiva de grasa corporal con impacto en la salud, resultado de un desequilibrio sostenido entre la energía consumida y la energía gastada, pero cuyas causas van más allá de una simple explicación de "comer demasiado": factores genéticos, hormonales, ambientales (acceso y disponibilidad de alimentos), psicosociales, y de determinantes sociales ya vistos en Salud y Comunidad I contribuyen de forma variable e interconectada al desarrollo de esta condición en cada persona.',
        'Reconocer esta multifactorialidad es clínicamente relevante porque evita reducir el manejo de la obesidad a una simple recomendación de "comer menos y moverse más" sin considerar los factores individuales específicos que contribuyen a la condición de cada paciente -un enfoque que, además de ser clínicamente incompleto, con frecuencia resulta poco efectivo y puede generar estigmatización innecesaria.'
      ]
    },
    {
      t:'El síndrome metabólico y su relación con la obesidad',
      p:[
        'El *síndrome metabólico* es un conjunto de factores de riesgo cardiovascular que con frecuencia coexisten (obesidad abdominal, hipertensión arterial ya vista en varios bloques de este pensum, alteración del metabolismo de la glucosa, y alteraciones específicas del perfil lipídico), cuya presencia combinada aumenta el riesgo de enfermedad cardiovascular y de diabetes mellitus más allá de lo que cada factor aislado explicaría por separado.',
        'La distribución de la grasa corporal, no solo su cantidad total, es particularmente relevante en este contexto: la grasa acumulada predominantemente en la región abdominal (retomando la circunferencia de cintura ya vista en evaluación antropométrica) se asocia con mayor riesgo metabólico que la misma cantidad de grasa distribuida de forma más periférica, un matiz que el índice de masa corporal por sí solo no logra capturar.'
      ]
    },
    {
      t:'El manejo del sobrepeso y la obesidad: un enfoque escalonado y respetuoso',
      p:[
        'El *manejo del sobrepeso* y la obesidad sigue, al igual que otras condiciones crónicas ya vistas en este pensum, un enfoque escalonado: modificaciones en la alimentación y la actividad física como base del manejo, con opciones farmacológicas o quirúrgicas reservadas para casos específicos según criterios bien definidos, cuando las modificaciones de estilo de vida por sí solas no logran el objetivo terapéutico buscado.',
        'Este manejo debe combinarse con una comunicación respetuosa y libre de estigmatización, retomando la importancia ya vista repetidamente sobre comunicación estructurada y empática en este pensum -un abordaje que culpabiliza o avergüenza al paciente por su condición tiende a ser contraproducente, generando evitación de la atención médica en vez de facilitar un manejo efectivo y sostenido en el tiempo.'
      ],
      foco:[
        '*Consideración clínica*: el manejo de la obesidad debe evitar un enfoque simplista de "comer menos y moverse más" sin considerar los factores individuales multifactoriales que contribuyen a la condición, y debe comunicarse siempre de forma respetuosa y libre de estigmatización.'
      ]
    }
  ],
  ref:'Krause, Dietoterapia, cap. 21.'
},

'nutricion-situaciones-especiales': {
  tema:'Nutrición en situaciones especiales',
  bloque:'Nutrición', programa:'unirm', cuatri:11, min:13,
  idea:'Ciertas etapas de la vida y condiciones fisiológicas particulares tienen requerimientos nutricionales distintos a los de un adulto sano en condiciones habituales, y aplicar recomendaciones genéricas sin ajustarlas a estas situaciones específicas compromete la efectividad de la intervención nutricional.',
  claves:['nutrición en el embarazo','nutrición en el adulto mayor','nutrición en la enfermedad crónica'],
  sigue:'soporte-nutricional',
  secciones:[
    {
      t:'Nutrición en el embarazo: retomando lo ya visto en Obstetricia I',
      p:[
        'La *nutrición en el embarazo* ya fue desarrollada con detalle en Obstetricia I de este mismo cuatrimestre (ganancia de peso individualizada, ácido fólico, suplementación con hierro y otros micronutrientes), y este tema la retoma como el primer ejemplo concreto de una situación especial donde los requerimientos nutricionales difieren considerablemente de los de una mujer no gestante, tanto en cantidad como en la relevancia particular de ciertos micronutrientes específicos.',
        'Esta conexión directa con Obstetricia I ilustra un principio general de este tema: las situaciones especiales no representan excepciones aisladas al conocimiento nutricional general, sino aplicaciones específicas de los mismos principios básicos (macronutrientes, micronutrientes, requerimiento calórico individualizado) ya vistos en los primeros temas de este bloque, ajustados a una condición fisiológica particular.'
      ]
    },
    {
      t:'Nutrición en el adulto mayor',
      p:[
        'La *nutrición en el adulto mayor* enfrenta consideraciones específicas: cambios fisiológicos propios del envejecimiento (disminución de la masa muscular, cambios en la percepción del gusto y el olfato que pueden reducir el apetito, alteraciones en la absorción de ciertos nutrientes), junto con factores sociales y funcionales (dificultad para preparar alimentos, aislamiento social, limitaciones económicas) que en conjunto aumentan el riesgo de malnutrición en esta etapa de la vida.',
        'Esta vulnerabilidad nutricional del adulto mayor retoma directamente la importancia ya vista de la evaluación nutricional activa y sistemática: un adulto mayor con pérdida de peso progresiva, incluso gradual y aparentemente poco llamativa, amerita una evaluación nutricional específica, ya que esta pérdida con frecuencia se atribuye erróneamente al proceso normal de envejecimiento, en vez de reconocerse como un signo de alarma que podría ser reversible con la intervención apropiada.'
      ]
    },
    {
      t:'Nutrición en la enfermedad crónica',
      p:[
        'La *nutrición en la enfermedad crónica* -diabetes mellitus, enfermedad renal crónica, insuficiencia cardíaca, entre otras condiciones ya vistas en distintos bloques de este pensum- requiere ajustes específicos según la condición particular del paciente: desde el control de carbohidratos en la diabetes, hasta la restricción de ciertos electrolitos en la enfermedad renal avanzada, cada condición crónica exige un abordaje nutricional individualizado según su fisiopatología específica.',
        'Este tema cierra reconociendo que la nutrición no es un componente aislado del manejo de una enfermedad crónica, sino una parte integral del tratamiento, con el mismo nivel de importancia que el manejo farmacológico específico de cada condición -un principio que retoma la integración ya vista repetidamente en este pensum entre distintas dimensiones del cuidado de un paciente con una condición crónica.'
      ],
      foco:[
        '*Consideración clínica*: la pérdida de peso progresiva en un adulto mayor no debe atribuirse automáticamente al envejecimiento normal, sino evaluarse activamente como un posible signo de malnutrición reversible con la intervención apropiada.'
      ]
    }
  ],
  ref:'Krause, Dietoterapia, cap. 20.'
},

'soporte-nutricional': {
  tema:'Soporte nutricional',
  bloque:'Nutrición', programa:'unirm', cuatri:11, min:12,
  idea:'Cuando un paciente no puede cubrir sus requerimientos nutricionales mediante la alimentación oral habitual, el soporte nutricional se convierte en una intervención terapéutica activa, con sus propias indicaciones y consideraciones de seguridad específicas.',
  claves:['nutrición enteral','nutrición parenteral','indicaciones de soporte nutricional'],
  sigue:'educacion-nutricional',
  secciones:[
    {
      t:'Cuándo indicar soporte nutricional',
      p:[
        'Las *indicaciones de soporte nutricional* surgen cuando un paciente no puede o no debe cubrir sus requerimientos nutricionales mediante la alimentación oral habitual, ya sea por una condición que impide la ingesta adecuada (alteración del nivel de conciencia, obstrucción del tracto digestivo, entre otras) o por un estado catabólico significativo donde las demandas nutricionales superan considerablemente lo que la alimentación oral convencional podría cubrir en ese contexto específico.',
        'La decisión de iniciar soporte nutricional retoma el mismo principio ya visto repetidamente sobre escalonar la intervención según la necesidad real: no toda dificultad transitoria para alimentarse justifica un soporte nutricional formal, pero una situación de riesgo nutricional significativo y sostenido sí lo amerita, evaluando cuidadosamente el balance entre el riesgo de la desnutrición no tratada y el riesgo asociado a la intervención de soporte misma.'
      ]
    },
    {
      t:'La nutrición enteral como primera opción preferida',
      p:[
        'La *nutrición enteral* es la administración de nutrientes directamente al tracto digestivo (mediante una sonda, cuando la vía oral no es posible o segura), y se prefiere sobre la vía parenteral siempre que el tracto digestivo del paciente esté funcional, retomando un principio general válido en toda la medicina: usar la vía más fisiológica disponible, siempre que sea segura y efectiva, en vez de recurrir de forma innecesaria a una vía más invasiva.',
        'Esta preferencia por la vía enteral no es solo una cuestión de simplicidad técnica: mantener el tracto digestivo en funcionamiento activo tiene beneficios documentados sobre la integridad de la mucosa intestinal y sobre el riesgo de ciertas complicaciones infecciosas, en comparación con mantener el intestino completamente en reposo mediante nutrición exclusivamente parenteral.'
      ]
    },
    {
      t:'La nutrición parenteral cuando la vía enteral no es posible',
      p:[
        'La *nutrición parenteral* es la administración de nutrientes directamente al torrente sanguíneo por vía intravenosa, reservada para cuando el tracto digestivo no está funcional o no puede utilizarse de forma segura -a diferencia de la vía enteral, conlleva mayor riesgo de complicaciones específicas (relacionadas con el acceso vascular necesario, y con el propio metabolismo de los nutrientes administrados directamente al torrente sanguíneo sin el procesamiento digestivo habitual).',
        'Esta jerarquía entre nutrición enteral y parenteral -preferir la primera siempre que sea posible, reservando la segunda para cuando la vía enteral no es viable- retoma directamente la misma lógica ya vista sobre preferir la vía menos invasiva cuando es igualmente efectiva, un principio ya introducido en el contexto de la rehidratación oral frente a la intravenosa en Pediatría I.'
      ],
      foco:[
        '*Consideración clínica*: la nutrición enteral se prefiere sobre la parenteral siempre que el tracto digestivo del paciente esté funcional, tanto por su menor invasividad como por sus beneficios documentados sobre la integridad intestinal.'
      ]
    }
  ],
  ref:'Krause, Dietoterapia, cap. 18.'
},

'educacion-nutricional': {
  tema:'Educación nutricional',
  bloque:'Nutrición', programa:'unirm', cuatri:11, min:13,
  idea:'Este último tema cierra el bloque completo de Nutrición reconociendo que toda la evaluación y el conocimiento nutricional desarrollados en los temas anteriores tienen, en última instancia, un propósito práctico: ayudar a una persona a cambiar hábitos alimentarios sostenibles en su vida diaria.',
  claves:['consejería nutricional','plato saludable','cambio de hábito alimentario'],
  sigue:'rol-estudiante-servicio-gineco-obstetricia',
  secciones:[
    {
      t:'La consejería nutricional como habilidad de comunicación',
      p:[
        'La *consejería nutricional* es el proceso mediante el cual un profesional de salud orienta a un paciente sobre cómo mejorar su alimentación, y retoma directamente las herramientas de comunicación estructurada ya vistas repetidamente en este pensum: escuchar primero los hábitos, las preferencias, y las limitaciones reales de la persona (retomando la historia dietética ya vista al inicio de este bloque), antes de ofrecer recomendaciones genéricas que podrían no ser aplicables ni sostenibles en su contexto de vida particular.',
        'Una consejería nutricional efectiva evita el error frecuente de entregar una lista extensa y rígida de alimentos permitidos y prohibidos, sin considerar la viabilidad real de esas recomendaciones para la persona específica -retomando la misma lógica ya vista sobre individualizar cualquier intervención clínica según las circunstancias reales del paciente, en vez de aplicar una plantilla genérica sin ajuste.'
      ]
    },
    {
      t:'El plato saludable como herramienta práctica de comunicación',
      p:[
        'El *plato saludable* es una herramienta visual simplificada que representa, de forma intuitiva y fácil de recordar, las proporciones recomendadas de los distintos grupos de alimentos dentro de una comida (una porción significativa de vegetales y frutas, una porción de proteínas, una porción de carbohidratos, preferentemente integrales) -su valor principal es traducir conceptos nutricionales técnicos (macronutrientes, requerimiento calórico) en una imagen práctica y accesible para cualquier persona, sin necesidad de cálculos numéricos complejos.',
        'Esta simplificación deliberada retoma un principio general de comunicación clínica efectiva ya visto en otros contextos de este pensum: una herramienta educativa útil no es necesariamente la más técnicamente completa, sino la que logra comunicarse de forma efectiva y ser recordada y aplicada realmente por la persona a quien está dirigida.'
      ]
    },
    {
      t:'El cambio de hábito alimentario como proceso gradual',
      p:[
        'El *cambio de hábito alimentario* es, en la gran mayoría de los casos, un proceso gradual y no un evento único e inmediato -retomando la misma lógica ya vista sobre el cambio de comportamiento en otros contextos de este pensum (como la consejería breve ya vista en Medicina Familiar, 10mo), proponer cambios pequeños, específicos y alcanzables, en vez de una transformación completa e inmediata de todos los hábitos a la vez, tiende a generar resultados más sostenibles en el tiempo.',
        'Este tema cierra el bloque completo de Nutrición retomando el hilo conductor iniciado desde la evaluación del estado nutricional: evaluar correctamente (primer tema), entender los principios de macro y micronutrientes (segundo tema), reconocer desviaciones como la desnutrición o la obesidad (temas intermedios), ajustar a situaciones especiales y ofrecer soporte cuando sea necesario, y finalmente, comunicar todo ese conocimiento de forma efectiva y sostenible mediante la educación nutricional -el paso final que convierte el conocimiento técnico en un cambio real en la vida del paciente.'
      ],
      foco:[
        '*Consideración clínica*: proponer cambios de hábito alimentario pequeños, específicos y alcanzables, en vez de una transformación completa e inmediata, tiende a generar resultados más sostenibles en el tiempo que exigir un cambio total desde el primer momento.'
      ]
    }
  ],
  ref:'Krause, Dietoterapia, cap. 12.'
}

});
