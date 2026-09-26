/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 12 (lote 2)
   Cubre PEDIATRÍA II al estandar extenso (3 secciones, ~200-300
   palabras por seccion, min 12-14). Segunda materia del
   cuatrimestre 12 (4 creditos, 13 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== PEDIATRÍA II ==================== */
'cardiopatias-congenitas-nino': {
  tema:'Cardiopatías congénitas en el niño',
  bloque:'Pediatría II', programa:'unirm', cuatri:12, min:13,
  idea:'Las cardiopatías congénitas retoman directamente los principios de interpretación básica del corazón ya aplicados en adultos, pero adaptados a un contexto donde el defecto está presente desde el nacimiento, con una clasificación que orienta directamente la presentación clínica esperada.',
  claves:['cardiopatía congénita cianótica','cardiopatía congénita acianótica','soplo cardíaco en el niño'],
  sigue:'enfermedades-endocrinologicas-pediatricas',
  secciones:[
    {
      t:'La clasificación en cianóticas y acianóticas como primer paso',
      p:[
        'Las *cardiopatías congénitas* se clasifican clásicamente en dos grandes grupos según si generan o no cianosis (coloración azulada de piel y mucosas por saturación de oxígeno insuficiente): las *cardiopatías congénitas cianóticas* permiten que sangre pobre en oxígeno llegue a la circulación sistémica (típicamente por un cortocircuito de derecha a izquierda), mientras las *cardiopatías congénitas acianóticas* no generan esta mezcla significativa, aunque puedan generar otras consecuencias hemodinámicas importantes.',
        'Esta clasificación inicial orienta directamente la presentación clínica esperada: un recién nacido con una cardiopatía cianótica significativa con frecuencia se presenta con cianosis evidente desde las primeras horas o días de vida, mientras uno con una cardiopatía acianótica puede permanecer asintomático por más tiempo, siendo detectado más tardíamente por un soplo o por síntomas de sobrecarga cardíaca progresiva.'
      ]
    },
    {
      t:'El soplo cardíaco en el niño: no todo soplo es patológico',
      p:[
        'El *soplo cardíaco en el niño* es un hallazgo frecuente en la exploración pediátrica, y una proporción considerable de los soplos detectados en niños son "inocentes" o funcionales -sin ninguna anomalía estructural subyacente- particularmente cuando son de baja intensidad, no se acompañan de otros síntomas, y no varían con la posición del niño de una forma que sugiera organicidad.',
        'Distinguir un soplo inocente de uno que orienta hacia una cardiopatía congénita real retoma la misma lógica ya vista repetidamente en este pensum sobre reconocer características clínicas que orientan hacia patología: un soplo de mayor intensidad, asociado a síntomas (dificultad para alimentarse, fatiga con el esfuerzo, retraso del crecimiento) o a otros hallazgos anormales del examen cardiovascular, amerita una evaluación más profunda mediante ecocardiograma.'
      ]
    },
    {
      t:'Por qué la detección temprana de una cardiopatía congénita importa',
      p:[
        'Detectar tempranamente una cardiopatía congénita, idealmente durante la evaluación del recién nacido normal ya vista en Pediatría I, permite iniciar el manejo apropiado antes de que se desarrollen complicaciones -algunas cardiopatías congénitas dependen, incluso, de que ciertas estructuras fetales normales (como el conducto arterioso) permanezcan abiertas temporalmente mediante manejo farmacológico específico, mientras se organiza una intervención definitiva.',
        'Esta importancia de la detección temprana retoma directamente la lógica de niveles de prevención ya vista repetidamente en este pensum: cuanto antes se identifique una cardiopatía congénita significativa, mayor es la ventana de oportunidad para intervenir antes de que el niño desarrolle complicaciones hemodinámicas irreversibles o una descompensación aguda potencialmente fatal.'
      ],
      foco:[
        '*Consideración clínica*: un soplo cardíaco de baja intensidad, aislado, sin otros síntomas asociados, con frecuencia corresponde a un soplo inocente; uno acompañado de síntomas de sobrecarga cardíaca o cianosis amerita evaluación mediante ecocardiograma sin demora.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 45.'
},

'enfermedades-endocrinologicas-pediatricas': {
  tema:'Enfermedades endocrinológicas pediátricas',
  bloque:'Pediatría II', programa:'unirm', cuatri:12, min:13,
  idea:'Las enfermedades endocrinológicas en el niño no son simplemente una versión pediátrica de las mismas condiciones en el adulto: el sistema endocrino infantil está estrechamente ligado al crecimiento y desarrollo, por lo que una disfunción hormonal aquí compromete directamente ese proceso.',
  claves:['diabetes mellitus tipo 1 en el niño','hipotiroidismo congénito','talla baja en el niño'],
  sigue:'trastornos-hematologicos-pediatricos',
  secciones:[
    {
      t:'La diabetes mellitus tipo 1 como forma predominante en la infancia',
      p:[
        'La *diabetes mellitus tipo 1 en el niño* -a diferencia de la diabetes tipo 2, predominante en adultos- es la forma más frecuente de diabetes en la infancia, causada por una destrucción autoinmune de las células productoras de insulina, y con frecuencia se presenta de forma relativamente aguda con los síntomas clásicos de poliuria, polidipsia y pérdida de peso, a veces debutando directamente con cetoacidosis diabética si no se reconoce a tiempo.',
        'El manejo de esta condición en el niño exige una consideración adicional que no aplica de la misma forma en el adulto: el impacto en el crecimiento y desarrollo, y la necesidad de involucrar activamente a la familia (y progresivamente al propio niño, según su edad) en el manejo diario de la insulina, la alimentación, y el monitoreo glucémico, una responsabilidad que se transfiere gradualmente conforme el niño madura.'
      ]
    },
    {
      t:'El hipotiroidismo congénito y la urgencia de su detección',
      p:[
        'El *hipotiroidismo congénito* es una de las condiciones detectables mediante el tamizaje neonatal ya visto en Pediatría I, precisamente porque sin tratamiento oportuno en las primeras semanas de vida, la deficiencia de hormona tiroidea compromete de forma grave e irreversible el desarrollo neurológico del niño -un ejemplo claro de por qué el tamizaje neonatal sistemático, y no la espera de síntomas clínicos evidentes, es indispensable para esta condición específica.',
        'Los síntomas clínicos del hipotiroidismo congénito con frecuencia son sutiles o ausentes en las primeras semanas de vida, precisamente el periodo donde iniciar el tratamiento marca la mayor diferencia en el pronóstico neurológico -retomando directamente la lógica ya vista sobre ventanas críticas del desarrollo, donde una intervención oportuna dentro de esa ventana tiene un impacto mucho mayor que la misma intervención iniciada después.'
      ]
    },
    {
      t:'La talla baja en el niño: cuándo investigar más allá de la variante familiar',
      p:[
        'La *talla baja en el niño* tiene causas muy heterogéneas, desde variantes normales (talla baja familiar, retraso constitucional del crecimiento) hasta causas endocrinológicas específicas (deficiencia de hormona de crecimiento, hipotiroidismo) y otras condiciones sistémicas -distinguir entre estas causas retoma directamente la importancia ya vista sobre evaluar la trayectoria de crecimiento en el tiempo, más que un valor aislado, ya introducida en Pediatría I.',
        'Un niño que crece de forma constante en su propio percentil, aunque sea bajo, y cuyos padres también tienen talla baja, con frecuencia representa una variante normal familiar que no amerita investigación endocrinológica extensa; en cambio, un niño cuya velocidad de crecimiento se desacelera progresivamente, desviándose de su trayectoria previa, amerita una evaluación más profunda de causas endocrinológicas o sistémicas subyacentes.'
      ],
      foco:[
        '*Consideración clínica*: el hipotiroidismo congénito es una de las razones más claras del tamizaje neonatal sistemático, precisamente porque sus síntomas son sutiles en las primeras semanas, el mismo periodo donde el tratamiento oportuno marca la mayor diferencia en el pronóstico neurológico.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 38.'
},

'trastornos-hematologicos-pediatricos': {
  tema:'Trastornos hematológicos pediátricos',
  bloque:'Pediatría II', programa:'unirm', cuatri:12, min:13,
  idea:'Más allá de la anemia ferropénica ya vista en Pediatría I como la deficiencia nutricional más frecuente, existen trastornos hematológicos de otro origen -hemolítico, plaquetario, de la coagulación- que exigen un razonamiento distinto.',
  claves:['anemia hemolítica en el niño','púrpura trombocitopénica','trastornos de la coagulación en el niño'],
  sigue:'enfermedades-reumatologicas-pediatricas',
  secciones:[
    {
      t:'La anemia hemolítica en el niño: un mecanismo distinto de la anemia ferropénica',
      p:[
        'La *anemia hemolítica en el niño* se distingue fundamentalmente de la anemia ferropénica ya vista en Pediatría I por su mecanismo: mientras la anemia ferropénica refleja un déficit de producción de glóbulos rojos por falta del sustrato necesario (hierro), la anemia hemolítica refleja una destrucción acelerada de glóbulos rojos ya formados, ya sea por causas hereditarias (como ciertas alteraciones estructurales de la hemoglobina o de la membrana del glóbulo rojo) o adquiridas (como una respuesta inmune anormal).',
        'Reconocer este mecanismo distinto tiene implicaciones directas: mientras la anemia ferropénica se corrige con suplementación de hierro, la anemia hemolítica requiere identificar y tratar la causa específica de la destrucción acelerada, y con frecuencia se acompaña de hallazgos adicionales como ictericia (por el aumento de bilirrubina liberada de los glóbulos rojos destruidos) que no son característicos de la anemia ferropénica.'
      ]
    },
    {
      t:'La púrpura trombocitopénica como trastorno de las plaquetas',
      p:[
        'La *púrpura trombocitopénica* es la disminución del número de plaquetas circulantes, suficiente para generar un riesgo aumentado de sangrado, que se manifiesta clínicamente con petequias (pequeñas manchas rojas puntiformes por sangrado capilar), equimosis (moretones) con facilidad inusual, y en casos más severos, sangrado de mucosas -en el niño, la forma inmune aguda con frecuencia ocurre después de una infección viral reciente, sugiriendo una respuesta inmune que, además de combatir la infección, ataca por error a las propias plaquetas del niño.',
        'Distinguir esta condición de otras causas de sangrado o de hallazgos cutáneos similares retoma la importancia ya vista sobre reconocer patrones clínicos específicos: las petequias y equimosis de la púrpura trombocitopénica, en un niño por lo demás sano tras una infección viral reciente, siguen un patrón reconocible que orienta el diagnóstico incluso antes de confirmar el conteo de plaquetas mediante laboratorio.'
      ]
    },
    {
      t:'Los trastornos de la coagulación en el niño',
      p:[
        'Los *trastornos de la coagulación en el niño* -como la hemofilia, una condición hereditaria que afecta factores específicos de la coagulación- se presentan típicamente con sangrado excesivo ante traumatismos menores o procedimientos, o incluso sangrado espontáneo en articulaciones en las formas más graves, un patrón distinto del sangrado mucocutáneo más característico de los trastornos plaquetarios ya vistos en este tema.',
        'Esta distinción entre el patrón de sangrado de un trastorno plaquetario (mucocutáneo, petequial) y el de un trastorno de la coagulación (hemorragias más profundas, articulares, tras trauma) retoma un principio general de razonamiento clínico ya visto repetidamente en este pensum: el patrón específico de presentación de un síntoma, más que el síntoma aislado en sí mismo, orienta hacia el mecanismo fisiopatológico subyacente más probable.'
      ],
      foco:[
        '*Consideración clínica*: distinguir el patrón de sangrado (mucocutáneo y petequial en trastornos plaquetarios, versus profundo y articular en trastornos de la coagulación) orienta el diagnóstico diferencial incluso antes de contar con estudios de laboratorio confirmatorios.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 33.'
},

'enfermedades-reumatologicas-pediatricas': {
  tema:'Enfermedades reumatológicas pediátricas',
  bloque:'Pediatría II', programa:'unirm', cuatri:12, min:13,
  idea:'La reumatología pediátrica retoma conceptos de inflamación articular y sistémica ya conocidos en principio, pero con presentaciones y consideraciones específicas del niño que no siempre reflejan lo esperado en el paciente adulto.',
  claves:['artritis idiopática juvenil','fiebre reumática','enfermedad de Kawasaki'],
  sigue:'trastornos-neurologicos-pediatricos-no-convulsivos',
  secciones:[
    {
      t:'La artritis idiopática juvenil como entidad propia de la infancia',
      p:[
        'La *artritis idiopática juvenil* es la enfermedad reumatológica crónica más frecuente en la infancia, definida por inflamación articular persistente de causa no identificada, que inicia antes de los 16 años -a diferencia de la artritis reumatoide del adulto ya vista en otros contextos, la artritis idiopática juvenil incluye varios subtipos con presentaciones clínicas y pronósticos distintos entre sí, no una entidad única y uniforme.',
        'Reconocer la inflamación articular persistente en un niño, más allá del dolor articular transitorio asociado a otras causas comunes en la infancia (como un proceso viral o un trauma menor), retoma la importancia ya vista sobre distinguir un hallazgo que persiste y se desvía de lo esperado, ameritando investigación adicional, en vez de asumir automáticamente una causa benigna y transitoria.'
      ]
    },
    {
      t:'La fiebre reumática como complicación tardía de una infección ya vista',
      p:[
        'La *fiebre reumática* es una complicación inflamatoria sistémica que puede desarrollarse semanas después de una infección estreptocócica no tratada adecuadamente, ya vista en el contexto de infecciones bacterianas comunes (Patología Infecciosa, 11vo) como ejemplo de complicación postinfecciosa no supurativa -afectando articulaciones, corazón, piel y sistema nervioso central en distintas combinaciones según el caso.',
        'Esta conexión retoma directamente la importancia ya vista sobre vigilar posibles complicaciones postinfecciosas más allá de la resolución del episodio agudo: la fiebre reumática es precisamente el ejemplo concreto de esa complicación tardía, donde el daño no proviene de la infección directa sino de una respuesta inmune posterior mal dirigida contra tejidos propios que comparten similitudes estructurales con el agente infeccioso original.'
      ]
    },
    {
      t:'La enfermedad de Kawasaki: una vasculitis con riesgo cardíaco específico',
      p:[
        'La *enfermedad de Kawasaki* es una vasculitis sistémica de causa no completamente conocida, característica de la infancia temprana, que se presenta con fiebre prolongada acompañada de otros hallazgos específicos (conjuntivitis, cambios en la mucosa oral, exantema, edema de manos y pies, y adenopatía cervical) -su relevancia clínica particular radica en el riesgo de afectación de las arterias coronarias si no se trata oportunamente, una complicación potencialmente grave en un paciente pediátrico por lo demás sano.',
        'Este tema cierra el bloque de enfermedades reumatológicas retomando un principio general ya visto repetidamente en este pensum: reconocer un patrón clínico específico y multisistémico -en este caso, fiebre prolongada combinada con los hallazgos característicos ya mencionados- permite iniciar tratamiento oportuno antes de que se desarrolle la complicación más temida, precisamente el objetivo de todo reconocimiento clínico temprano.'
      ],
      foco:[
        '*Consideración clínica*: la enfermedad de Kawasaki debe reconocerse y tratarse oportunamente por el riesgo específico de afectación de las arterias coronarias, una complicación que el tratamiento temprano puede prevenir en un paciente pediátrico por lo demás sano.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 41.'
},

'trastornos-neurologicos-pediatricos-no-convulsivos': {
  tema:'Trastornos neurológicos pediátricos no convulsivos',
  bloque:'Pediatría II', programa:'unirm', cuatri:12, min:13,
  idea:'Más allá de las convulsiones febriles ya vistas en Pediatría I, existen trastornos neurológicos pediátricos de presentación distinta que exigen un enfoque diagnóstico propio, desde el síntoma más frecuente hasta condiciones del neurodesarrollo motor.',
  claves:['cefalea en el niño','parálisis cerebral infantil','hipotonía en el lactante'],
  sigue:'patologia-nefrourologica-pediatrica',
  secciones:[
    {
      t:'La cefalea en el niño: distinguir lo primario de lo secundario',
      p:[
        'La *cefalea en el niño* es un síntoma frecuente que, en la gran mayoría de los casos, corresponde a una cefalea primaria (como la migraña pediátrica o la cefalea tensional) sin una causa estructural subyacente identificable -sin embargo, ciertos signos de alarma (cefalea que despierta al niño por la noche, que empeora progresivamente, asociada a vómitos matutinos, cambios en el comportamiento, o hallazgos neurológicos anormales al examen) orientan hacia una causa secundaria potencialmente más grave, como una masa intracraneal.',
        'Esta distinción entre cefalea primaria y secundaria retoma directamente el mismo principio ya visto repetidamente en este pensum sobre distinguir una condición funcional de una orgánica: la mayoría de las cefaleas en el niño son benignas, pero la búsqueda activa de signos de alarma es lo que permite identificar la minoría que amerita investigación adicional urgente.'
      ]
    },
    {
      t:'La parálisis cerebral infantil como trastorno del movimiento de origen temprano',
      p:[
        'La *parálisis cerebral infantil* es un trastorno permanente del movimiento y la postura, atribuido a una alteración no progresiva que ocurrió en el cerebro en desarrollo (durante el embarazo, el parto, o los primeros años de vida), que retoma directamente la importancia ya vista sobre asfixia perinatal y otras complicaciones del recién nacido de alto riesgo, ya que estas condiciones se encuentran entre los factores de riesgo reconocidos para su desarrollo.',
        'Aunque la lesión cerebral subyacente no es progresiva, sus manifestaciones clínicas pueden cambiar con el tiempo conforme el niño crece y se desarrolla, exigiendo un manejo multidisciplinario continuo -retomando la lógica ya vista sobre el seguimiento a largo plazo de condiciones crónicas, en vez de considerar el diagnóstico como un punto final que no requiere reevaluación posterior.'
      ]
    },
    {
      t:'La hipotonía en el lactante como signo que exige investigación',
      p:[
        'La *hipotonía en el lactante* -la disminución del tono muscular normal, manifestada como un lactante que se siente "flácido" al ser sostenido- es un signo clínico que puede originarse en múltiples niveles del sistema nervioso (cerebral, medular, del nervio periférico, o del propio músculo), por lo que su evaluación exige un enfoque sistemático que localice el nivel probable del problema antes de considerar causas específicas.',
        'Este tema cierra retomando la importancia ya vista sobre trastornos del desarrollo psicomotor en Pediatría I: la hipotonía persistente, sin explicación evidente, es precisamente el tipo de hallazgo que amerita evaluación neurológica especializada, ya que puede ser la manifestación inicial de condiciones que van desde trastornos genéticos hasta enfermedades neuromusculares específicas.'
      ],
      foco:[
        '*Consideración clínica*: ante una cefalea en el niño, la búsqueda activa de signos de alarma (que despierta por la noche, empeora progresivamente, se asocia a vómitos matutinos o hallazgos neurológicos anormales) es lo que distingue una causa benigna de una que amerita investigación urgente.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 47.'
},

'patologia-nefrourologica-pediatrica': {
  tema:'Patología nefrourológica pediátrica',
  bloque:'Pediatría II', programa:'unirm', cuatri:12, min:13,
  idea:'El aparato genitourinario del niño presenta condiciones específicas de esta etapa de la vida, muchas de ellas relacionadas con el desarrollo embrionario incompleto de estas estructuras, distintas de la patología renal y urológica más frecuente en el adulto.',
  claves:['reflujo vesicoureteral','síndrome nefrótico en el niño','criptorquidia'],
  sigue:'patologia-gastrointestinal-pediatrica-cronica',
  secciones:[
    {
      t:'El reflujo vesicoureteral y su relación con la infección urinaria recurrente',
      p:[
        'El *reflujo vesicoureteral* es el flujo retrógrado anormal de orina desde la vejiga hacia el uréter y, en ocasiones, hacia el riñón, una condición particularmente relevante en el niño porque predispone a infecciones urinarias recurrentes que, sin el manejo apropiado, pueden generar daño renal progresivo a largo plazo -retomando la importancia ya vista sobre infecciones urinarias en pediatría, este reflujo es uno de los factores anatómicos que explica por qué algunos niños presentan infecciones urinarias de forma recurrente en vez de aislada.',
        'Investigar la posibilidad de reflujo vesicoureteral tras una infección urinaria febril en un niño pequeño, particularmente si es recurrente, retoma la misma lógica ya vista sobre investigar causas subyacentes ante un patrón que se repite, en vez de tratar cada episodio de forma aislada sin buscar un factor anatómico predisponente que explique la recurrencia.'
      ]
    },
    {
      t:'El síndrome nefrótico en el niño: la tríada característica',
      p:[
        'El *síndrome nefrótico en el niño* se caracteriza por una tríada de proteinuria significativa, hipoalbuminemia (disminución de la proteína albúmina en sangre, secundaria a su pérdida urinaria), y edema generalizado, con la forma más frecuente en la infancia (la enfermedad de cambios mínimos) teniendo, afortunadamente, una respuesta generalmente favorable al tratamiento con corticosteroides.',
        'Este síndrome retoma directamente la conexión con el síndrome nefrótico y nefrítico ya vistos en el contexto de medicina interna general, aplicando ahora esos mismos conceptos fisiopatológicos al contexto pediátrico específico, donde la causa subyacente más frecuente y el pronóstico general difieren considerablemente de lo que se observaría en un adulto con la misma presentación clínica.'
      ]
    },
    {
      t:'La criptorquidia y la importancia del descenso testicular oportuno',
      p:[
        'La *criptorquidia* es la ausencia de descenso completo de uno o ambos testículos hacia el escroto, una condición relativamente frecuente en el recién nacido, particularmente en los prematuros, que en muchos casos se resuelve espontáneamente durante los primeros meses de vida, pero que si persiste más allá de cierta edad amerita corrección quirúrgica, retomando la importancia ya vista sobre intervenir dentro de una ventana temporal específica.',
        'Este tema cierra reconociendo la relevancia de corregir la criptorquidia persistente dentro de una ventana de tiempo apropiada: un testículo que permanece fuera del escroto por un tiempo prolongado tiene mayor riesgo de alteraciones en su función futura y, en menor medida, de malignización a largo plazo, por lo que la vigilancia y la eventual corrección oportuna, retomando la lógica ya vista sobre ventanas críticas de intervención, son clínicamente relevantes.'
      ],
      foco:[
        '*Consideración clínica*: ante una infección urinaria febril recurrente en un niño pequeño, investigar activamente la posibilidad de reflujo vesicoureteral como factor anatómico predisponente, en vez de tratar cada episodio de forma aislada sin buscar una causa subyacente.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 32.'
},

'patologia-gastrointestinal-pediatrica-cronica': {
  tema:'Patología gastrointestinal pediátrica crónica',
  bloque:'Pediatría II', programa:'unirm', cuatri:12, min:13,
  idea:'Más allá de la diarrea aguda ya vista en Pediatría I, existen condiciones gastrointestinales de curso crónico en el niño que exigen reconocer un patrón sostenido en el tiempo, no un episodio agudo aislado, para orientar el diagnóstico correcto.',
  claves:['enfermedad celíaca en el niño','estreñimiento crónico infantil','reflujo gastroesofágico del lactante'],
  sigue:'trastornos-desarrollo-conducta',
  secciones:[
    {
      t:'La enfermedad celíaca en el niño',
      p:[
        'La *enfermedad celíaca en el niño* es una reacción inmune anormal al gluten que genera daño progresivo de la mucosa del intestino delgado, con manifestaciones que van desde síntomas digestivos clásicos (diarrea crónica, distensión abdominal) hasta manifestaciones menos evidentes como retraso del crecimiento o anemia sin causa aparente -retomando directamente la importancia ya vista sobre vigilar la trayectoria de crecimiento, un niño con desaceleración inexplicada del crecimiento debe hacer considerar esta condición dentro del diagnóstico diferencial.',
        'El diagnóstico definitivo de enfermedad celíaca requiere estudios específicos (serología y, con frecuencia, biopsia intestinal) mientras el niño continúa consumiendo gluten en su dieta habitual -suspender el gluten antes de completar el estudio diagnóstico, aunque sea una respuesta comprensible ante la sospecha, dificulta considerablemente la confirmación posterior del diagnóstico.'
      ]
    },
    {
      t:'El estreñimiento crónico infantil: predominantemente funcional',
      p:[
        'El *estreñimiento crónico infantil* -evacuaciones infrecuentes o dificultosas sostenidas en el tiempo- es, en la gran mayoría de los casos en niños por lo demás sanos, de origen funcional, con frecuencia relacionado con hábitos de retención voluntaria (por ejemplo, tras una experiencia dolorosa previa al evacuar) que genera un ciclo donde la retención empeora progresivamente la dificultad de evacuar posteriormente.',
        'Reconocer signos de alarma que orientarían hacia una causa orgánica menos frecuente (retraso en la eliminación del meconio al nacer, distensión abdominal significativa, o síntomas desde el nacimiento) retoma la misma lógica ya vista sobre distinguir lo funcional de lo orgánico: la mayoría de los casos de estreñimiento infantil son funcionales y responden a manejo conductual y dietético, sin necesitar estudios extensos.'
      ]
    },
    {
      t:'El reflujo gastroesofágico del lactante: fisiológico versus patológico',
      p:[
        'El *reflujo gastroesofágico del lactante* -el retorno del contenido gástrico hacia el esófago- es extremadamente frecuente en los primeros meses de vida y, en la mayoría de los casos, representa una variante fisiológica del desarrollo (por la inmadurez del esfínter esofágico inferior) que se resuelve espontáneamente conforme el lactante crece, sin requerir ninguna intervención específica más allá de medidas generales.',
        'Distinguir este reflujo fisiológico de uno patológico (que genera consecuencias como falla en la ganancia de peso, irritabilidad significativa asociada, o complicaciones respiratorias) retoma el mismo principio ya visto repetidamente en este pensum: el hallazgo aislado (regurgitación frecuente) no define por sí solo la necesidad de intervención, sino su impacto real sobre el crecimiento y el bienestar del lactante.'
      ],
      foco:[
        '*Consideración clínica*: ante un niño con desaceleración inexplicada de la trayectoria de crecimiento, la enfermedad celíaca debe considerarse dentro del diagnóstico diferencial, incluso en ausencia de síntomas digestivos evidentes.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 26.'
},

'trastornos-desarrollo-conducta': {
  tema:'Trastornos del desarrollo y la conducta',
  bloque:'Pediatría II', programa:'unirm', cuatri:12, min:13,
  idea:'Los trastornos del desarrollo y la conducta retoman directamente la vigilancia del desarrollo ya vista en Pediatría I, profundizando ahora en condiciones específicas que afectan la comunicación, la atención, o el ritmo general del desarrollo del niño.',
  claves:['trastorno del espectro autista','trastorno por déficit de atención','retraso global del desarrollo'],
  sigue:'medicina-adolescente',
  secciones:[
    {
      t:'El trastorno del espectro autista y la importancia de la detección temprana',
      p:[
        'El *trastorno del espectro autista* es una condición del neurodesarrollo caracterizada por dificultades persistentes en la comunicación e interacción social, junto con patrones de comportamiento restringidos o repetitivos, cuyas manifestaciones tempranas -que pueden incluir falta de contacto visual, ausencia de respuesta al nombre propio, o retraso en el desarrollo del lenguaje- retoman directamente la importancia ya vista sobre el tamizaje del desarrollo en Pediatría I.',
        'La detección temprana de este trastorno, mediante herramientas de tamizaje aplicadas sistemáticamente durante las consultas de niño sano, permite iniciar intervenciones tempranas que, retomando la lógica ya vista sobre ventanas críticas de plasticidad neurológica, tienden a generar mejores resultados que la misma intervención iniciada más tardíamente, una vez que el niño ya está en edad escolar.'
      ]
    },
    {
      t:'El trastorno por déficit de atención y su impacto funcional',
      p:[
        'El *trastorno por déficit de atención* (con o sin hiperactividad asociada) se caracteriza por un patrón persistente de inatención, impulsividad, o hiperactividad, que interfiere significativamente con el funcionamiento del niño en múltiples contextos (escolar, familiar, social) -esta exigencia de impacto funcional significativo, y no solo la presencia aislada de inquietud o distracción ocasional, es lo que distingue este trastorno de variaciones normales del comportamiento infantil.',
        'Este matiz retoma un principio general ya visto repetidamente en este pensum: un hallazgo clínico (en este caso, cierto grado de inquietud o dificultad de atención) solo se considera patológico cuando genera un impacto funcional significativo y persistente, no simplemente por su presencia aislada, que en grado leve puede formar parte del comportamiento normal esperado en distintas etapas del desarrollo infantil.'
      ]
    },
    {
      t:'El retraso global del desarrollo como categoría diagnóstica amplia',
      p:[
        'El *retraso global del desarrollo* se refiere a un retraso significativo en al menos dos de las áreas del desarrollo ya vistas en Pediatría I (motora, cognitiva, del lenguaje, social), una categoría diagnóstica amplia que exige una evaluación multidisciplinaria para identificar la causa subyacente probable, que puede incluir desde condiciones genéticas hasta factores ambientales como los ya vistos en el contexto de negligencia infantil.',
        'Este tema cierra retomando el hilo conductor ya establecido desde Pediatría I: la vigilancia sistemática del desarrollo en cada consulta de niño sano es lo que permite detectar tempranamente cualquiera de estas condiciones -sin esa vigilancia activa y sistemática, un retraso del desarrollo, un patrón autista, o un déficit de atención podrían pasar desapercibidos hasta una edad donde la intervención ya es menos efectiva.'
      ],
      foco:[
        '*Consideración clínica*: la detección temprana de trastornos del desarrollo y la conducta, mediante el tamizaje sistemático ya establecido en las consultas de niño sano, permite iniciar intervenciones tempranas con mejores resultados que las mismas intervenciones iniciadas tardíamente.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 2.'
},

'medicina-adolescente': {
  tema:'Medicina del adolescente',
  bloque:'Pediatría II', programa:'unirm', cuatri:12, min:13,
  idea:'La adolescencia introduce consideraciones que ni la pediatría de la primera infancia ni la medicina de adultos abordan de la misma forma: un paciente que atraviesa cambios físicos y psicológicos acelerados, con necesidades de comunicación y confidencialidad propias de esta etapa específica.',
  claves:['pubertad y desarrollo puberal','confidencialidad en la consulta del adolescente','conductas de riesgo en la adolescencia'],
  sigue:'oncologia-pediatrica-generalidades',
  secciones:[
    {
      t:'La pubertad y el desarrollo puberal como proceso a evaluar sistemáticamente',
      p:[
        'La *pubertad y el desarrollo puberal* siguen una secuencia de cambios físicos relativamente predecible, evaluada clínicamente mediante escalas estandarizadas que describen el grado de desarrollo de características sexuales secundarias -reconocer si este desarrollo sigue el ritmo esperado para la edad, o si se presenta de forma adelantada o retrasada de forma significativa, retoma directamente la lógica ya vista sobre comparar una trayectoria individual contra un patrón esperado, ahora aplicada al desarrollo puberal en vez del crecimiento físico general.',
        'Una pubertad significativamente adelantada o retrasada respecto al rango esperado amerita evaluación adicional, ya que puede reflejar una condición endocrinológica subyacente -retomando directamente la conexión con las enfermedades endocrinológicas pediátricas ya vistas en este mismo bloque- en vez de asumir automáticamente que se trata de una simple variación normal sin ninguna causa identificable.'
      ]
    },
    {
      t:'La confidencialidad en la consulta del adolescente',
      p:[
        'La *confidencialidad en la consulta del adolescente* es un principio ético y práctico particularmente relevante en esta etapa: un adolescente que confía en que ciertos aspectos de su consulta (relacionados con su salud sexual, uso de sustancias, o salud mental, por ejemplo) permanecerán confidenciales, dentro de los límites legales y éticos apropiados, tiene mayor probabilidad de compartir información honesta que resulte clínicamente relevante para su atención.',
        'Este principio retoma directamente la importancia ya vista sobre comunicación estructurada y confianza en la relación médico-paciente (9no cuatrimestre), aplicada ahora al contexto específico del adolescente: sin un espacio de confidencialidad apropiado, el profesional de salud puede perder la oportunidad de identificar y abordar conductas de riesgo que el propio adolescente, de otra forma, no revelaría abiertamente.'
      ]
    },
    {
      t:'Las conductas de riesgo en la adolescencia y su abordaje',
      p:[
        'Las *conductas de riesgo en la adolescencia* -uso de sustancias, actividad sexual sin protección adecuada, conducción imprudente, entre otras- son particularmente frecuentes en esta etapa del desarrollo, relacionadas en parte con cambios neurobiológicos propios de la adolescencia que favorecen la búsqueda de sensaciones y una percepción del riesgo distinta a la del adulto.',
        'Este tema cierra retomando la importancia de la consejería y la anticipación de riesgos ya vista en distintos contextos de este pensum: preguntar activamente, en un espacio de confianza y confidencialidad apropiada, sobre estas conductas de riesgo, y ofrecer orientación específica antes de que ocurra una consecuencia grave, es una aplicación directa de la medicina preventiva aplicada al contexto particular de la adolescencia.'
      ],
      foco:[
        '*Consideración clínica*: ofrecer un espacio de confidencialidad apropiado en la consulta del adolescente, dentro de los límites éticos y legales correspondientes, aumenta la probabilidad de que comparta información honesta sobre conductas de riesgo que de otra forma no revelaría.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 12.'
},

'oncologia-pediatrica-generalidades': {
  tema:'Oncología pediátrica: generalidades',
  bloque:'Pediatría II', programa:'unirm', cuatri:12, min:13,
  idea:'El cáncer en el niño difiere considerablemente del cáncer en el adulto tanto en los tipos de tumores más frecuentes como en el pronóstico general, y reconocer los signos de alarma tempranos es especialmente relevante dado que muchos cánceres pediátricos tienen tasas de curación considerablemente más altas cuando se detectan a tiempo.',
  claves:['leucemia aguda infantil','tumor de Wilms','signos de alarma de cáncer en el niño'],
  sigue:'patologia-ortopedica-pediatrica',
  secciones:[
    {
      t:'La leucemia aguda infantil como cáncer más frecuente en la niñez',
      p:[
        'La *leucemia aguda infantil* -particularmente la leucemia linfoblástica aguda- es el tipo de cáncer más frecuente en la infancia, originada en la médula ósea, con manifestaciones que retoman directamente conceptos ya vistos en trastornos hematológicos pediátricos de este mismo bloque: anemia (por sustitución de la producción normal de glóbulos rojos), trombocitopenia con sangrado fácil (por sustitución de la producción de plaquetas), e infecciones recurrentes (por una producción anormal de glóbulos blancos funcionales).',
        'A diferencia de muchos cánceres del adulto, la leucemia linfoblástica aguda infantil tiene, con el tratamiento apropiado, una de las tasas de curación más altas de toda la oncología, un ejemplo notable de cómo el pronóstico de un mismo tipo general de enfermedad (cáncer) puede variar dramáticamente según la edad del paciente y el tipo específico de tumor involucrado.'
      ]
    },
    {
      t:'El tumor de Wilms como ejemplo de tumor sólido pediátrico',
      p:[
        'El *tumor de Wilms* es el tumor renal maligno más frecuente en la infancia, que con frecuencia se presenta como una masa abdominal asintomática detectada incidentalmente por un familiar o durante un examen físico de rutina, en un niño por lo demás con buen estado general -un patrón de presentación distinto al de muchos cánceres del adulto, que con frecuencia generan síntomas sistémicos evidentes desde etapas más tempranas.',
        'Este patrón de presentación -una masa asintomática en un niño aparentemente sano- retoma la importancia ya vista sobre el examen físico completo y sistemático en cada consulta pediátrica: sin una palpación abdominal cuidadosa como parte rutinaria del examen físico, una masa de este tipo podría pasar desapercibida durante un tiempo considerable.'
      ]
    },
    {
      t:'Los signos de alarma de cáncer en el niño',
      p:[
        'Los *signos de alarma de cáncer en el niño* incluyen, entre otros: pérdida de peso inexplicada, fiebre prolongada sin causa infecciosa identificada, dolor óseo persistente (particularmente si despierta al niño por la noche), masas palpables nuevas, y cambios visuales inusuales (como un reflejo blanco en la pupila en fotografías, que puede orientar hacia un retinoblastoma) -reconocer estos signos, aunque cada uno individualmente tiene múltiples causas posibles no oncológicas, retoma la importancia ya vista de mantener una sospecha activa ante hallazgos que se apartan de lo esperado.',
        'Este tema cierra retomando el principio general de que, precisamente porque muchos cánceres pediátricos tienen mejor pronóstico cuando se detectan tempranamente, la sospecha activa ante estos signos de alarma -sin necesidad de que todos estén presentes simultáneamente- justifica una evaluación adicional oportuna, en vez de esperar a que el cuadro se vuelva más evidente y, con frecuencia, más avanzado.'
      ],
      foco:[
        '*Consideración clínica*: los signos de alarma de cáncer en el niño, aunque cada uno tiene múltiples causas posibles no oncológicas, justifican una evaluación adicional oportuna, dado que muchos cánceres pediátricos tienen mejor pronóstico cuanto más temprano se detectan.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 35.'
},

'patologia-ortopedica-pediatrica': {
  tema:'Patología ortopédica pediátrica',
  bloque:'Pediatría II', programa:'unirm', cuatri:12, min:12,
  idea:'El sistema musculoesquelético en desarrollo del niño presenta condiciones específicas de esta etapa, muchas de ellas relacionadas con alteraciones del desarrollo que, detectadas y corregidas oportunamente, tienen un pronóstico considerablemente mejor que si se diagnostican tardíamente.',
  claves:['displasia del desarrollo de la cadera','pie equinovaro','escoliosis idiopática del adolescente'],
  sigue:'urgencias-pediatricas-avanzadas',
  secciones:[
    {
      t:'La displasia del desarrollo de la cadera y su detección temprana',
      p:[
        'La *displasia del desarrollo de la cadera* es un espectro de anomalías en el desarrollo de la articulación de la cadera, desde una inestabilidad leve hasta una luxación franca, cuya detección temprana mediante el examen físico del recién nacido y del lactante (retomando directamente la evaluación del recién nacido normal ya vista en Pediatría I) permite un tratamiento considerablemente menos invasivo y más efectivo que si se detecta tardíamente, una vez que el niño ya ha comenzado a caminar.',
        'Esta ventana de oportunidad para un tratamiento más simple y efectivo retoma directamente la lógica ya vista repetidamente sobre ventanas críticas de intervención: cuanto antes se detecte y corrija esta condición, generalmente mediante medidas no invasivas en los primeros meses de vida, mejor es el pronóstico funcional a largo plazo de la cadera afectada.'
      ]
    },
    {
      t:'El pie equinovaro: una malformación congénita reconocible al nacer',
      p:[
        'El *pie equinovaro* (o pie zambo) es una malformación congénita del pie, reconocible desde el nacimiento, caracterizada por una posición anormal fija del pie que, sin tratamiento, compromete significativamente la capacidad futura de caminar de forma normal -el manejo moderno de esta condición, iniciado idealmente en las primeras semanas de vida mediante técnicas específicas de manipulación seriada y yesos, ha mejorado considerablemente el pronóstico funcional en comparación con enfoques quirúrgicos más invasivos utilizados en el pasado.',
        'Este cambio de enfoque terapéutico, de una intervención quirúrgica extensa hacia un manejo inicial menos invasivo con buenos resultados, retoma un principio general ya visto en otros contextos de este pensum: una práctica clínica puede y debe revisarse cuando la evidencia acumulada muestra que un enfoque menos invasivo logra resultados equivalentes o superiores.'
      ]
    },
    {
      t:'La escoliosis idiopática del adolescente',
      p:[
        'La *escoliosis idiopática del adolescente* es una curvatura lateral anormal de la columna vertebral que se desarrolla característicamente durante el estirón de crecimiento puberal, sin una causa identificable en la mayoría de los casos -su detección temprana mediante el examen físico sistemático durante la consulta del adolescente, ya vista en el tema anterior de este bloque, permite un manejo más conservador (observación periódica o el uso de un corsé ortopédico) cuando la curvatura es todavía leve o moderada.',
        'Este tema cierra el bloque de patología ortopédica retomando el mismo hilo conductor de todo el bloque: la detección temprana de una alteración musculoesquelética del desarrollo, ya sea en el recién nacido, el lactante, o el adolescente, generalmente ofrece opciones de manejo menos invasivas y con mejor pronóstico funcional que la detección tardía de la misma condición ya avanzada.'
      ],
      foco:[
        '*Consideración clínica*: la displasia del desarrollo de la cadera, detectada mediante el examen físico sistemático del recién nacido y del lactante, permite un tratamiento considerablemente menos invasivo que si se detecta después de que el niño ya ha comenzado a caminar.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 43.'
},

'urgencias-pediatricas-avanzadas': {
  tema:'Urgencias pediátricas avanzadas',
  bloque:'Pediatría II', programa:'unirm', cuatri:12, min:14,
  idea:'Este tema retoma y profundiza las urgencias pediátricas ya introducidas en Pediatría I, ahora abordando escenarios de mayor gravedad que exigen un reconocimiento y una respuesta más avanzados por parte del equipo de salud.',
  claves:['shock en el niño','reanimación cardiopulmonar pediátrica avanzada','estado epiléptico en el niño'],
  sigue:'genetica-clinica-pediatrica',
  secciones:[
    {
      t:'El shock en el niño: reconocimiento antes de la hipotensión',
      p:[
        'El *shock en el niño* -un estado de perfusión tisular inadecuada para satisfacer las demandas metabólicas del organismo- tiene una particularidad clínicamente relevante respecto al adulto: un niño puede mantener una presión arterial dentro de rangos aparentemente normales durante un tiempo considerablemente más prolongado que un adulto en la misma situación, gracias a mecanismos compensatorios más eficientes, lo que significa que la hipotensión es un signo tardío y ominoso, no el primer indicio de shock en pediatría.',
        'Reconocer signos más tempranos de shock en el niño -taquicardia, llenado capilar prolongado, alteración del estado mental, extremidades frías- sin esperar a que aparezca hipotensión, retoma directamente la importancia ya vista repetidamente en este pensum sobre reconocer signos de alarma tempranos, antes de que una condición progrese hacia su manifestación más tardía y grave.'
      ]
    },
    {
      t:'La reanimación cardiopulmonar pediátrica avanzada',
      p:[
        'La *reanimación cardiopulmonar pediátrica avanzada* retoma los principios generales ya vistos en Soporte Vital Básico y Avanzado (9no), pero con adaptaciones específicas propias de la fisiología pediátrica: el paro cardíaco en el niño, a diferencia del adulto, con mayor frecuencia es la consecuencia final de una insuficiencia respiratoria o un shock no reconocidos ni tratados oportunamente, más que un evento primario cardíaco súbito como ocurre con mayor frecuencia en el adulto.',
        'Esta diferencia fisiopatológica tiene una implicación práctica directa: en pediatría, reconocer y tratar oportunamente la insuficiencia respiratoria o el shock, antes de que progresen hacia un paro cardíaco, tiene un impacto potencialmente mayor sobre el pronóstico que centrarse exclusivamente en la reanimación una vez que el paro ya ha ocurrido -otro ejemplo más de por qué el reconocimiento temprano, ya visto repetidamente en este pensum, es tan o más valioso que el manejo de la complicación ya establecida.'
      ]
    },
    {
      t:'El estado epiléptico en el niño: cuándo una convulsión deja de ser expectante',
      p:[
        'El *estado epiléptico en el niño* es una convulsión que se prolonga más allá de un tiempo específico, o convulsiones repetidas sin recuperación completa de la conciencia entre ellas, retomando directamente la importancia ya vista en Pediatría I sobre cronometrar la duración de una convulsión: precisamente ese cronometraje es lo que permite reconocer cuándo una convulsión ha dejado de ser un evento que puede manejarse de forma expectante y se ha convertido en una urgencia que exige manejo farmacológico inmediato.',
        'Este tema cierra el bloque de Pediatría II retomando el hilo conductor que ha atravesado toda esta materia: cada condición pediátrica específica desarrollada -cardiopatías congénitas, endocrinología, hematología, reumatología, neurología, nefrourología, gastroenterología, desarrollo, adolescencia, oncología, ortopedia, y ahora estas urgencias avanzadas- retoma y profundiza principios ya establecidos en Pediatría I, aplicados ahora a escenarios clínicos más específicos y, en muchos casos, de mayor complejidad y gravedad.'
      ],
      foco:[
        '*Consideración clínica*: en el niño, la hipotensión es un signo tardío y ominoso de shock, no el primer indicio; reconocer signos más tempranos (taquicardia, llenado capilar prolongado, alteración del estado mental) permite intervenir antes de que la situación progrese.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 31.'
},

'genetica-clinica-pediatrica': {
  tema:'Genética clínica pediátrica',
  bloque:'Pediatría II', programa:'unirm', cuatri:12, min:13,
  idea:'Este último tema cierra el bloque de Pediatría II reconociendo que muchas de las condiciones ya desarrolladas a lo largo de este bloque y del pensum completo tienen, en última instancia, una base genética que merece un abordaje clínico específico.',
  claves:['síndrome de Down','tamizaje genético neonatal','asesoramiento genético en pediatría'],
  sigue:'cancer-ovario',
  secciones:[
    {
      t:'El síndrome de Down como ejemplo clásico de condición genética pediátrica',
      p:[
        'El *síndrome de Down* -causado por la presencia de una copia adicional del cromosoma 21- es la condición cromosómica más frecuente compatible con la vida, asociada a características físicas reconocibles, discapacidad intelectual de grado variable, y un riesgo aumentado de ciertas condiciones médicas específicas (algunas de ellas ya vistas en este pensum, como las cardiopatías congénitas al inicio de este mismo bloque), lo que exige un seguimiento médico sistemático orientado específicamente a estas comorbilidades reconocidas.',
        'Este seguimiento sistemático retoma directamente la lógica ya vista sobre anticipación de riesgos en la consulta de niño sano (Pediatría I): conocer las comorbilidades específicas asociadas a una condición genética determinada permite anticipar y vigilar activamente esos riesgos particulares, en vez de esperar a que se manifiesten clínicamente antes de considerarlos.'
      ]
    },
    {
      t:'El tamizaje genético neonatal como extensión del tamizaje ya visto',
      p:[
        'El *tamizaje genético neonatal* extiende directamente el concepto de tamizaje neonatal ya visto en Pediatría I -que incluía condiciones como el hipotiroidismo congénito y la fenilcetonuria- hacia un panel más amplio de condiciones genéticas y metabólicas detectables tempranamente, cuya identificación oportuna permite iniciar intervenciones que, en muchas de estas condiciones, cambian radicalmente el pronóstico si se aplican dentro de la ventana crítica de los primeros días o semanas de vida.',
        'Este tema retoma un principio ya establecido repetidamente en este pensum: muchas condiciones genéticas, aunque no puedan curarse en el sentido convencional, sí pueden manejarse de forma que se prevengan o minimicen sus consecuencias más graves, siempre que se detecten dentro de la ventana temprana apropiada mediante herramientas de tamizaje sistemático.'
      ]
    },
    {
      t:'El asesoramiento genético en pediatría',
      p:[
        'El *asesoramiento genético en pediatría* es el proceso mediante el cual se orienta a una familia sobre el diagnóstico, el pronóstico, y el riesgo de recurrencia de una condición genética identificada en su hijo, combinando información técnica precisa con una comunicación empática y comprensible -retomando directamente la importancia ya vista repetidamente en este pensum sobre adaptar la comunicación clínica al contexto emocional específico de cada situación, particularmente relevante ante un diagnóstico que puede generar preguntas sobre embarazos futuros.',
        'Este tema, y con él todo el bloque de Pediatría II, cierra reconociendo que la genética clínica atraviesa transversalmente muchas de las condiciones ya vistas a lo largo de este bloque -desde las cardiopatías congénitas hasta los trastornos del desarrollo- y que el asesoramiento genético apropiado es, en última instancia, otra aplicación más del principio general de comunicación clínica de calidad que ha atravesado todo este pensum: combinar el rigor técnico con la sensibilidad humana que cada situación específica exige.'
      ],
      foco:[
        '*Consideración clínica*: conocer las comorbilidades médicas específicas asociadas a una condición genética determinada, como el síndrome de Down, permite anticipar y vigilar activamente esos riesgos particulares, en vez de esperar a que se manifiesten clínicamente antes de considerarlos.'
      ]
    }
  ],
  ref:'Nelson, Tratado de Pediatría, cap. 6.'
}

});
