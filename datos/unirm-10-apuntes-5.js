/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 10 (lote 5)
   Cubre SEMIOLOGIA QUIRURGICA al estandar extenso (3 secciones,
   ~200-300 palabras por seccion, min 13-14). Quinta materia del
   cuatrimestre 10, ultima de las de 3 creditos.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== SEMIOLOGIA QUIRURGICA ==================== */
'historia-clinica-quirurgica': {
  tema:'Historia clínica quirúrgica',
  bloque:'Semiología Quirúrgica', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma la historia clínica ya vista en Semiología Clínica (9no), pero con preguntas adicionales específicas que solo importan cuando existe la posibilidad real de una intervención quirúrgica.',
  claves:['historia clínica quirúrgica','antecedentes quirúrgicos','riesgo anestésico'],
  sigue:'semiologia-abdomen-agudo',
  secciones:[
    {
      t:'Lo que se añade a la historia clínica general',
      p:[
        'La *historia clínica quirúrgica* conserva toda la estructura ya vista en Semiología Clínica -motivo de consulta, enfermedad actual, antecedentes-, pero añade preguntas específicas que orientan directamente la decisión de operar o no: cirugías previas (dónde, cuándo, por qué, si hubo complicaciones), reacciones anestésicas previas propias o en familiares, trastornos de la coagulación conocidos, y uso de anticoagulantes o antiagregantes, información que en una historia clínica puramente médica podría quedar en un segundo plano.',
        'Esta ampliación no es un capricho académico: cada uno de estos datos cambia directamente el manejo perioperatorio. Un paciente con antecedente de complicación anestésica previa, por ejemplo, exige una evaluación anestésica más cuidadosa antes de cualquier procedimiento nuevo.'
      ]
    },
    {
      t:'Antecedentes quirúrgicos: más que una lista de cirugías',
      p:[
        'Los *antecedentes quirúrgicos* no se registran solo como una lista de procedimientos previos; cada cirugía anterior puede tener implicaciones directas sobre una intervención nueva -adherencias internas de una cirugía abdominal previa que dificultan un abordaje posterior, o una cicatriz previa que condiciona dónde y cómo se planea el nuevo acceso quirúrgico.',
        'Preguntar específicamente por complicaciones de cirugías previas (infección de la herida, dehiscencia, reintervenciones) aporta información predictiva real sobre el riesgo de complicaciones similares en una nueva cirugía, no solo un dato histórico sin relevancia práctica actual.'
      ]
    },
    {
      t:'El riesgo anestésico como parte integral de la evaluación',
      p:[
        'El *riesgo anestésico* de un paciente depende de factores que van más allá del problema quirúrgico puntual: enfermedades cardiovasculares o respiratorias de base, edad avanzada, obesidad, y la propia complejidad del procedimiento planeado, todos factores que deben explorarse activamente en la historia clínica quirúrgica antes de cualquier decisión final sobre operar o no.',
        'Este riesgo anestésico se retoma con más profundidad en el tema de evaluación preoperatoria, pero comienza a construirse desde el primer contacto con el paciente: una historia clínica quirúrgica completa es el punto de partida que permite anticipar, en vez de descubrir a último momento, los factores que podrían complicar tanto la cirugía como la anestesia.'
      ],
      foco:[
        '*Consideración clínica*: preguntar específicamente por reacciones anestésicas previas, propias o familiares, es un paso que con frecuencia se omite en una historia clínica apresurada, pero que puede anticipar una complicación anestésica grave y evitable.'
      ]
    }
  ],
  ref:'Sabiston, Tratado de Cirugía, cap. 1.'
},

'semiologia-abdomen-agudo': {
  tema:'Semiología del abdomen agudo',
  bloque:'Semiología Quirúrgica', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma la semiología abdominal ya vista en Semiología Clínica, pero con una pregunta añadida y urgente: ¿este dolor abdominal requiere cirugía ahora, o puede esperar?',
  claves:['abdomen agudo','dolor abdominal quirúrgico','signo de rebote'],
  sigue:'semiologia-masas-tumores',
  secciones:[
    {
      t:'Qué define a un abdomen agudo',
      p:[
        'El *abdomen agudo* describe un cuadro de dolor abdominal de inicio relativamente reciente y severo, que puede requerir intervención quirúrgica urgente -no es un diagnóstico específico en sí mismo, sino una categoría clínica que agrupa múltiples causas posibles (apendicitis, colecistitis, obstrucción intestinal, perforación de víscera hueca, entre otras) unidas por la urgencia de la evaluación que requieren.',
        'La evaluación de un abdomen agudo prioriza responder una pregunta binaria antes que llegar a un diagnóstico específico definitivo: ¿este paciente necesita cirugía ahora, o puede esperar mientras se completa el estudio? -una pregunta que con frecuencia debe responderse con la información disponible en ese momento, sin el lujo de esperar todos los estudios complementarios posibles.'
      ]
    },
    {
      t:'El signo de rebote y otros signos de irritación',
      p:[
        'El *signo de rebote* (dolor que aumenta al retirar bruscamente la mano tras palpar el abdomen, más que durante la palpación misma) sugiere irritación del peritoneo, la membrana que recubre la cavidad abdominal -un hallazgo que se desarrolla con más detalle en el tema siguiente, pero que ya desde este punto orienta fuertemente hacia una causa que probablemente requiere manejo quirúrgico, no solo médico.',
        'Localizar dónde predomina el dolor, cómo se irradia, y qué maniobras lo modifican (movimiento, tos, respiración profunda) aporta información diagnóstica valiosa: un dolor que empeora con el movimiento o la tos sugiere irritación peritoneal, mientras que un dolor cólico que fluctúa en oleadas sugiere un mecanismo obstructivo distinto.'
      ]
    },
    {
      t:'Dolor abdominal quirúrgico: reconocer las banderas rojas',
      p:[
        'El *dolor abdominal quirúrgico* se distingue del dolor abdominal médico (que puede manejarse sin cirugía) por ciertas características de alarma: dolor que empeora progresivamente en vez de mejorar, signos de irritación peritoneal generalizada, inestabilidad de los signos vitales, o evidencia de una complicación mecánica (obstrucción, perforación) en los estudios de imagen disponibles.',
        'Reconocer estas banderas rojas a tiempo es clínicamente determinante: retrasar una cirugía necesaria mientras se completan estudios adicionales no urgentes puede permitir que una condición inicialmente manejable progrese hacia una complicación grave, como una perforación o una peritonitis generalizada.'
      ],
      foco:[
        '*Consideración clínica*: ante un abdomen agudo, la pregunta inicial más urgente no es "¿cuál es el diagnóstico exacto?", sino "¿este paciente necesita cirugía ahora?" -el diagnóstico específico puede refinarse después, pero la decisión quirúrgica urgente no puede esperar indefinidamente.'
      ]
    }
  ],
  ref:'Sabiston, Tratado de Cirugía, cap. 46.'
},

'semiologia-masas-tumores': {
  tema:'Semiología de masas y tumores',
  bloque:'Semiología Quirúrgica', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma directamente el mismo razonamiento semiológico ya aplicado en Anatomía Patológica II a masas mamarias y ganglionares, pero generalizado a cualquier masa palpable, en cualquier ubicación del cuerpo.',
  claves:['masa palpable','características semiológicas de un tumor'],
  sigue:'semiologia-heridas-cicatrizacion',
  secciones:[
    {
      t:'El examen sistemático de una masa palpable',
      p:[
        'Ante cualquier *masa palpable*, el examen semiológico sigue un patrón consistente que retoma directamente las características ya vistas en Anatomía Patológica II para masas mamarias y ganglionares: tamaño, consistencia (blanda, firme, dura, pétrea), movilidad (libre o fija a planos profundos), bordes (definidos o irregulares), presencia o ausencia de dolor, y si la piel o el tejido suprayacente muestra cambios (retracción, enrojecimiento, ulceración).',
        'Este patrón de examen no es exclusivo de una localización anatómica específica; se aplica de la misma forma sistemática a una masa en el cuello, en una extremidad, en la pared abdominal, o en cualquier otro sitio -la lógica semiológica es transferible, aunque el diagnóstico diferencial cambie según la ubicación.'
      ]
    },
    {
      t:'Características semiológicas de un tumor: el mismo patrón, distintas ubicaciones',
      p:[
        'Las *características semiológicas de un tumor* que sugieren malignidad son consistentes independientemente de dónde se localice la masa: dureza pétrea, fijación a planos profundos, bordes irregulares, crecimiento progresivo documentado, y ausencia de dolor (una masa maligna con frecuencia no duele hasta etapas avanzadas, a diferencia de muchos procesos inflamatorios o infecciosos).',
        'Reconocer este patrón consistente -ya trabajado específicamente para mama y ganglios en Anatomía Patológica II- permite al estudiante transferir el mismo razonamiento semiológico a cualquier masa nueva que encuentre en la práctica clínica, sin necesitar aprender un patrón completamente distinto para cada ubicación anatómica.'
      ]
    },
    {
      t:'De la semiología a la decisión: cuándo biopsiar',
      p:[
        'El examen semiológico de una masa, aunque orienta con fuerza hacia benignidad o malignidad, nunca reemplaza la confirmación histológica mediante biopsia -retomando directamente el mismo principio ya visto en la patología de mama: ni la palpación ni la imagen, por sí solas, permiten distinguir con certeza absoluta entre una masa benigna y una maligna.',
        'La decisión de biopsiar una masa se basa en la combinación de sus características semiológicas, la edad y el contexto clínico del paciente, y la evolución en el tiempo: una masa con características tranquilizadoras en un paciente joven y sin factores de riesgo puede vigilarse con seguimiento clínico, mientras que cualquier característica de alarma amerita estudio histológico sin demora.'
      ],
      foco:[
        '*Consideración clínica*: el mismo patrón semiológico -dureza, fijación, bordes irregulares, crecimiento, ausencia de dolor- que orienta hacia malignidad en una masa mamaria se aplica igual a una masa en cualquier otra ubicación del cuerpo.'
      ]
    }
  ],
  ref:'Sabiston, Tratado de Cirugía, cap. 2.'
},

'semiologia-heridas-cicatrizacion': {
  tema:'Semiología de heridas y cicatrización',
  bloque:'Semiología Quirúrgica', programa:'unirm', cuatri:10, min:13,
  idea:'Toda herida cicatriza siguiendo el mismo proceso biológico de fondo, pero el CONTEXTO en el que ese proceso ocurre -limpia o contaminada, cerrada de inmediato o dejada abierta- determina si cicatriza rápido y bien, o lento y con complicaciones.',
  claves:['cicatrización por primera y segunda intención','herida quirúrgica'],
  sigue:'evaluacion-preoperatoria',
  secciones:[
    {
      t:'Cicatrización por primera intención: el escenario ideal',
      p:[
        'La *cicatrización por primera y segunda intención* describe dos caminos distintos que puede seguir una herida hacia su cierre: la cicatrización por primera intención ocurre cuando los bordes de una *herida quirúrgica* limpia se aproximan y cierran de inmediato (con sutura, por ejemplo), permitiendo que el proceso de cicatrización avance de forma rápida y con una cicatriz final mínima -el escenario ideal, típico de una incisión quirúrgica electiva bien planificada.',
        'Este proceso requiere condiciones específicas para ocurrir sin complicaciones: ausencia de infección activa, buen aporte sanguíneo a los bordes de la herida, y ausencia de tensión excesiva sobre el cierre -condiciones que el cirujano busca activamente garantizar antes de decidir cerrar una herida de esta forma.'
      ]
    },
    {
      t:'Cicatrización por segunda intención: cuando cerrar de inmediato no es seguro',
      p:[
        'La cicatrización por segunda intención ocurre cuando una herida se deja abierta deliberadamente, permitiendo que cicatrice desde el fondo hacia la superficie mediante la formación de tejido de granulación, un proceso considerablemente más lento y que deja una cicatriz más extensa -se elige esta vía cuando cerrar de inmediato no es seguro, típicamente por contaminación significativa, pérdida de tejido, o infección activa en la herida.',
        'Forzar el cierre inmediato de una herida contaminada, solo por preferir el resultado estético de la primera intención, aumenta significativamente el riesgo de infección de la herida cerrada -una decisión que prioriza mal el orden de prioridades clínicas: primero controlar el riesgo de infección, y solo después optimizar el resultado estético.'
      ]
    },
    {
      t:'Factores que retrasan o comprometen la cicatrización',
      p:[
        'Múltiples factores del paciente pueden retrasar o comprometer la cicatrización de cualquier herida, sin importar la técnica quirúrgica usada: diabetes mal controlada (por el daño microvascular ya visto en Anatomía Patológica II), desnutrición (que limita los recursos disponibles para la reparación tisular), tabaquismo (que reduce el aporte sanguíneo periférico), y el uso de ciertos medicamentos como corticoides sistémicos, que suprimen la respuesta inflamatoria necesaria para iniciar el proceso de cicatrización.',
        'Identificar estos factores de riesgo antes de una cirugía electiva permite, en muchos casos, optimizarlos con anticipación -por ejemplo, mejorando el control glucémico de un paciente diabético antes de una cirugía programada- reduciendo así el riesgo de complicaciones de la herida que, de otra forma, podrían haberse anticipado y mitigado.'
      ],
      foco:[
        '*Consideración clínica*: la elección entre cerrar una herida de inmediato o dejarla abierta para cicatrización por segunda intención depende principalmente del riesgo de infección, no de la preferencia estética; forzar un cierre inmediato inseguro puede empeorar el resultado final.'
      ]
    }
  ],
  ref:'Sabiston, Tratado de Cirugía, cap. 6.'
},

'evaluacion-preoperatoria': {
  tema:'Evaluación preoperatoria',
  bloque:'Semiología Quirúrgica', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma directamente la evaluación preoperatoria ya introducida conceptualmente en la historia clínica quirúrgica, pero la desarrolla como un proceso sistemático completo, con una clasificación estandarizada del riesgo.',
  claves:['evaluación preoperatoria','riesgo quirúrgico','clasificación ASA'],
  sigue:'semiologia-ictericia-quirurgica',
  secciones:[
    {
      t:'La evaluación preoperatoria como proceso sistemático',
      p:[
        'La *evaluación preoperatoria* integra toda la información recogida en la historia clínica quirúrgica (antecedentes, comorbilidades, medicamentos actuales) con un examen físico dirigido y estudios complementarios seleccionados según el perfil del paciente y la complejidad del procedimiento planeado, con el objetivo de identificar y, en lo posible, corregir factores que podrían aumentar el riesgo de complicaciones perioperatorias.',
        'Esta evaluación no es un trámite administrativo previo a la cirugía; es el momento donde se decide si el paciente está en las mejores condiciones posibles para el procedimiento planeado, o si conviene optimizar alguna condición médica antes de proceder -retomando el mismo principio de optimización preoperatoria ya visto conceptualmente en el tema de cicatrización.'
      ]
    },
    {
      t:'La clasificación ASA: un lenguaje común de riesgo',
      p:[
        'La *clasificación ASA* (de la Sociedad Americana de Anestesiólogos) categoriza a un paciente según su estado de salud general antes de la cirugía, desde ASA I (paciente sano) hasta ASA V (paciente moribundo que no sobreviviría sin la cirugía), proporcionando un lenguaje común y estandarizado que permite comunicar rápidamente el riesgo basal de un paciente entre distintos profesionales del equipo quirúrgico.',
        'Esta clasificación no predice por sí sola el resultado de una cirugía específica, pero sí se correlaciona de forma consistente con el riesgo general de complicaciones perioperatorias: un paciente ASA IV tiene, en términos generales, un riesgo considerablemente mayor que uno ASA I, información que influye directamente en decisiones como el nivel de vigilancia postoperatoria necesario.'
      ]
    },
    {
      t:'El riesgo quirúrgico como decisión compartida',
      p:[
        'El *riesgo quirúrgico* de un paciente específico combina su estado de salud basal (reflejado en la clasificación ASA) con la complejidad y urgencia del procedimiento planeado: una cirugía menor en un paciente ASA I tiene un riesgo muy distinto a una cirugía mayor en un paciente ASA IV, y esta combinación debe comunicarse con claridad al paciente como parte del proceso de consentimiento informado ya visto en Relación Médico-Paciente.',
        'Comunicar el riesgo quirúrgico real, sin minimizarlo ni exagerarlo, es parte esencial de que el paciente pueda tomar una decisión verdaderamente informada sobre proceder o no con una cirugía electiva, especialmente cuando existen alternativas de manejo no quirúrgico razonables para su condición.'
      ],
      foco:[
        '*Consideración clínica*: la evaluación preoperatoria es la última oportunidad de identificar y corregir un factor de riesgo modificable antes de la cirugía; una vez en el quirófano, ya no hay margen para optimizar condiciones que pudieron haberse anticipado.'
      ]
    }
  ],
  ref:'Sabiston, Tratado de Cirugía, cap. 12.'
},

'semiologia-ictericia-quirurgica': {
  tema:'Semiología de la ictericia quirúrgica',
  bloque:'Semiología Quirúrgica', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma la patología hepática y biliar ya vista en Anatomía Patológica II, pero desde la pregunta quirúrgica central: ¿esta ictericia se debe a una obstrucción mecánica que un cirujano puede resolver, o a una falla hepatocelular que no se opera?',
  claves:['ictericia obstructiva','coledocolitiasis','signo de Courvoisier'],
  sigue:'semiologia-vascular-periferica',
  secciones:[
    {
      t:'Ictericia obstructiva: cuando el problema es mecánico',
      p:[
        'La *ictericia obstructiva* ocurre cuando el flujo normal de bilis desde el hígado hacia el intestino se bloquea mecánicamente en algún punto de su trayecto, con frecuencia por *coledocolitiasis* (un cálculo biliar que migra hacia el colédoco y lo obstruye, ya introducido conceptualmente en Anatomía Patológica II) -a diferencia de la ictericia por falla hepatocelular (cuando el propio hígado, dañado, no puede procesar la bilirrubina correctamente), que no tiene una solución quirúrgica directa.',
        'Distinguir entre ictericia obstructiva y hepatocelular es la primera pregunta clínica ante cualquier paciente ictérico, porque determina por completo si existe un rol para la cirugía o un procedimiento endoscópico en el manejo, o si el problema requiere un abordaje médico dirigido a la función hepática en sí.'
      ]
    },
    {
      t:'El signo de Courvoisier: una pista clínica clásica',
      p:[
        'El *signo de Courvoisier* describe la palpación de una vesícula biliar aumentada de tamaño, indolora, en un paciente con ictericia obstructiva -un hallazgo clásicamente asociado con una obstrucción del colédoco por una causa distinta a los cálculos biliares (con frecuencia un tumor que comprime la vía biliar desde afuera), porque una vesícula previamente enferma por cálculos suele estar fibrosada y no se distiende de la misma forma ante la obstrucción.',
        'Este signo ilustra un principio semiológico más general: un hallazgo físico específico, interpretado en el contexto correcto, puede orientar hacia una causa concreta entre varias posibles, cambiando la urgencia y el tipo de estudio complementario que se solicita a continuación.'
      ]
    },
    {
      t:'De la semiología al estudio dirigido',
      p:[
        'Ante una ictericia con sospecha de causa obstructiva, la semiología orienta directamente qué estudio de imagen solicitar primero: una ecografía abdominal, capaz de detectar dilatación de la vía biliar y, con frecuencia, la presencia de cálculos, suele ser el primer paso razonable antes de estudios más invasivos o costosos.',
        'Este enfoque escalonado -empezar con el estudio menos invasivo que responda la pregunta clínica central, antes de avanzar hacia estudios más complejos- retoma el mismo principio de uso racional de recursos diagnósticos ya visto de forma más general en la farmacoterapia racional, aplicado aquí al estudio de imagen en vez de al fármaco.'
      ],
      foco:[
        '*Consideración clínica*: ante cualquier paciente con ictericia, la primera pregunta clínica es si el mecanismo es obstructivo (con posible solución quirúrgica o endoscópica) o hepatocelular (sin esa solución directa) -esta distinción orienta todo el estudio posterior.'
      ]
    }
  ],
  ref:'Sabiston, Tratado de Cirugía, cap. 54.'
},

'semiologia-vascular-periferica': {
  tema:'Semiología vascular periférica',
  bloque:'Semiología Quirúrgica', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma la aterosclerosis ya vista como proceso sistémico en Anatomía Patológica II, aplicada ahora a las extremidades: cuando el flujo sanguíneo a una pierna o un brazo se compromete, hay una ventana de tiempo limitada para actuar antes de que el daño sea irreversible.',
  claves:['pulsos periféricos','insuficiencia venosa','isquemia de miembro'],
  sigue:'semiologia-hernia',
  secciones:[
    {
      t:'Evaluación de pulsos periféricos: la base del examen vascular',
      p:[
        'La evaluación sistemática de los *pulsos periféricos* -en las principales arterias accesibles de las extremidades- es el punto de partida de cualquier examen vascular: un pulso disminuido o ausente, comparado con el lado contralateral, sugiere una obstrucción arterial significativa en algún punto entre el corazón y ese sitio de palpación, retomando directamente la aterosclerosis como proceso sistémico ya visto en patología cardiovascular.',
        'Esta comparación entre ambos lados del cuerpo es clínicamente central: un pulso débil en una sola extremidad, comparado con un pulso normal en la contralateral, es mucho más sugestivo de patología localizada que un pulso débil bilateral y simétrico, que podría reflejar más bien un problema sistémico como bajo gasto cardíaco.'
      ]
    },
    {
      t:'Isquemia de miembro: una emergencia con ventana de tiempo limitada',
      p:[
        'La *isquemia de miembro* aguda -la interrupción súbita del flujo sanguíneo arterial a una extremidad, con frecuencia por un émbolo o un trombo- se manifiesta clásicamente con los signos descritos como las "cinco P": dolor (pain), palidez, ausencia de pulso (pulselessness), parestesias, y parálisis, en un cuadro que progresa rápidamente si no se restablece el flujo a tiempo.',
        'Esta condición comparte una lógica clínica directa con la isquemia cerebral ya vista en Anatomía Patológica II: el tejido privado de oxígeno tiene una ventana de tiempo limitada antes de que el daño se vuelva irreversible, lo que convierte a la isquemia aguda de miembro en una verdadera emergencia quirúrgica, no un hallazgo que pueda esperar una evaluación electiva.'
      ]
    },
    {
      t:'Insuficiencia venosa: un problema crónico, distinto en su urgencia',
      p:[
        'La *insuficiencia venosa* crónica, a diferencia de la isquemia arterial aguda, es un problema de progresión lenta causado por el mal funcionamiento de las válvulas venosas que normalmente impiden el reflujo de sangre hacia abajo por gravedad, produciendo edema, cambios de coloración de la piel, y en casos avanzados, úlceras venosas -un cuadro clínico distinto en su presentación y en su urgencia, sin la amenaza inmediata de pérdida de la extremidad que sí tiene la isquemia arterial aguda.',
        'Distinguir clínicamente entre un problema arterial (pulsos disminuidos, extremidad fría y pálida) y uno venoso (pulsos conservados, extremidad con edema y cambios de coloración por estasis) es fundamental, porque su manejo, su urgencia y su pronóstico son completamente distintos entre sí.'
      ],
      foco:[
        '*Consideración clínica*: ante una extremidad con dolor, palidez y ausencia de pulso, el tiempo es el factor más determinante para el pronóstico -esta presentación exige evaluación y manejo quirúrgico urgente, no una evaluación electiva programada.'
      ]
    }
  ],
  ref:'Sabiston, Tratado de Cirugía, cap. 23.'
},

'semiologia-hernia': {
  tema:'Semiología de la hernia',
  bloque:'Semiología Quirúrgica', programa:'unirm', cuatri:10, min:13,
  idea:'Una hernia parece un problema simple -algo que sobresale donde no debería-, pero la pregunta clínica central no es si existe, sino si puede volver a su lugar con facilidad o si está atrapada, porque esa diferencia decide entre observar y operar de urgencia.',
  claves:['hernia inguinal','hernia reducible e irreducible','hernia estrangulada'],
  sigue:'signos-irritacion-peritoneal',
  secciones:[
    {
      t:'La hernia inguinal como el ejemplo más frecuente',
      p:[
        'La *hernia inguinal* es la hernia de la pared abdominal más frecuente, ocurriendo cuando contenido abdominal (con frecuencia intestino o tejido graso) protruye a través de un punto de debilidad natural en la región inguinal -un área anatómicamente predispuesta a este tipo de defecto por su estructura, presente tanto en hombres como en mujeres, aunque considerablemente más frecuente en hombres.',
        'El examen semiológico de una hernia inguinal incluye observar y palpar la región con el paciente de pie y durante maniobras que aumentan la presión intraabdominal (toser, pujar), que pueden hacer más evidente una hernia pequeña que no se aprecia con el paciente en reposo o acostado.'
      ]
    },
    {
      t:'Reducible o irreducible: la primera pregunta clínica',
      p:[
        'La distinción entre *hernia reducible e irreducible* es el primer paso clínico esencial: una hernia reducible es aquella cuyo contenido puede regresar manualmente a la cavidad abdominal con una presión suave, mientras que una hernia irreducible (también llamada incarcerada) es aquella cuyo contenido queda atrapado fuera de la cavidad, sin poder regresar espontáneamente ni con maniobra manual.',
        'Una hernia irreducible no siempre representa una emergencia inmediata, pero sí requiere evaluación pronta, porque el contenido atrapado corre el riesgo de progresar hacia la complicación más grave de todas: que se comprometa su aporte sanguíneo.'
      ]
    },
    {
      t:'Hernia estrangulada: cuando el tiempo se vuelve crítico',
      p:[
        'Una *hernia estrangulada* ocurre cuando el contenido atrapado de una hernia irreducible pierde su aporte sanguíneo, retomando directamente el mecanismo de isquemia ya visto en el tema anterior: el tejido comprometido (con frecuencia un segmento de intestino) comienza a sufrir daño isquémico progresivo, que sin intervención quirúrgica urgente avanza hacia necrosis tisular real.',
        'Los signos de alarma que sugieren estrangulamiento -dolor intenso y progresivo sobre la hernia, cambios de coloración de la piel suprayacente, fiebre, y signos sistémicos de toxicidad- convierten a esta condición en una emergencia quirúrgica verdadera, que no admite el mismo margen de observación que una hernia simplemente irreducible sin estos signos de alarma.'
      ],
      foco:[
        '*Consideración clínica*: ante cualquier hernia, la pregunta clínica que determina la urgencia real no es "¿qué tan grande es?", sino "¿es reducible, y si no lo es, hay signos de compromiso del aporte sanguíneo del contenido atrapado?".'
      ]
    }
  ],
  ref:'Sabiston, Tratado de Cirugía, cap. 44.'
},

'signos-irritacion-peritoneal': {
  tema:'Signos de irritación peritoneal',
  bloque:'Semiología Quirúrgica', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma y profundiza el signo de rebote ya introducido en la semiología del abdomen agudo, mostrando el conjunto completo de hallazgos que, juntos, señalan que el peritoneo -no solo un órgano específico- está inflamado.',
  claves:['irritación peritoneal','defensa abdominal','signo de Blumberg'],
  sigue:'semiologia-trauma',
  secciones:[
    {
      t:'Por qué importa reconocer la irritación peritoneal como patrón',
      p:[
        'La *irritación peritoneal* ocurre cuando el peritoneo, la membrana que recubre la cavidad abdominal y los órganos dentro de ella, se inflama -con frecuencia por la salida de contenido irritante hacia la cavidad abdominal (pus, contenido intestinal, sangre, bilis), un mecanismo que puede originarse por múltiples causas distintas pero que produce un patrón clínico reconocible independientemente de la causa específica.',
        'Reconocer este patrón general de irritación peritoneal, sin necesitar todavía identificar la causa exacta, es clínicamente valioso porque orienta de inmediato hacia la necesidad de evaluación quirúrgica urgente, retomando directamente el mismo principio ya visto en el abdomen agudo: la decisión de operar puede y debe tomarse antes de tener un diagnóstico específico completo.'
      ]
    },
    {
      t:'Defensa abdominal: la respuesta muscular protectora',
      p:[
        'La *defensa abdominal* es la contracción involuntaria de los músculos de la pared abdominal en respuesta al dolor causado por la irritación peritoneal subyacente -una respuesta protectora refleja del cuerpo que busca inmovilizar la zona inflamada, y que el examinador percibe como una rigidez muscular involuntaria al intentar palpar el abdomen.',
        'Esta defensa puede ser voluntaria (el paciente contrae conscientemente los músculos por miedo al dolor, lo que puede confundir el examen) o involuntaria (un reflejo verdadero que persiste incluso si se distrae al paciente); distinguir entre ambas requiere técnica y experiencia, porque solo la defensa involuntaria verdadera es un signo confiable de irritación peritoneal real.'
      ]
    },
    {
      t:'El signo de Blumberg: el rebote formalizado',
      p:[
        'El *signo de Blumberg* es el nombre técnico del signo de rebote ya introducido en el abdomen agudo: dolor que se intensifica al retirar bruscamente la mano tras una palpación profunda, más que durante la palpación misma -el mecanismo detrás de este signo es que el movimiento súbito del peritoneo inflamado, al soltar la presión, genera un estímulo doloroso mayor que la compresión sostenida.',
        'Este signo, junto con la defensa abdominal involuntaria y el patrón general de dolor que empeora con el movimiento, forma un conjunto semiológico reconocible que, tomado en su totalidad, tiene un valor predictivo considerable para identificar la necesidad de una evaluación quirúrgica urgente, más allá de lo que cualquiera de estos signos aportaría de forma aislada.'
      ],
      foco:[
        '*Consideración clínica*: distinguir la defensa abdominal voluntaria (por miedo al dolor) de la involuntaria (un reflejo real) exige técnica cuidadosa de examen, porque solo la segunda tiene el valor semiológico real de sugerir irritación peritoneal verdadera.'
      ]
    }
  ],
  ref:'Sabiston, Tratado de Cirugía, cap. 46.'
},

'semiologia-trauma': {
  tema:'Semiología del trauma',
  bloque:'Semiología Quirúrgica', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma directamente la evaluación del trauma ya vista en Soporte Vital Básico y Avanzado (9no), pero desde la perspectiva quirúrgica: qué información del mecanismo de lesión predice, incluso antes de examinar al paciente, qué tipo de daño interno buscar activamente.',
  claves:['evaluación del trauma','mecanismo de lesión','trauma penetrante'],
  sigue:'drenajes-sondas-quirurgicas',
  secciones:[
    {
      t:'El mecanismo de lesión como información predictiva',
      p:[
        'El *mecanismo de lesión* -cómo ocurrió exactamente el trauma: velocidad del impacto, dirección de la fuerza, tipo de objeto involucrado- aporta información predictiva real sobre qué tipo de lesiones internas es más probable encontrar, incluso antes de completar el examen físico: un impacto de alta energía (colisión vehicular a alta velocidad) sugiere la posibilidad de lesiones internas graves aunque la superficie externa del paciente luzca relativamente intacta.',
        'Esta información, obtenida idealmente del propio paciente, de testigos, o del personal de emergencias que trasladó al paciente, complementa directamente la *evaluación del trauma* sistemática ya vista en el ABCDE de Soporte Vital, orientando qué estructuras específicas examinar con mayor atención según el mecanismo descrito.'
      ]
    },
    {
      t:'Trauma penetrante: la trayectoria importa tanto como el punto de entrada',
      p:[
        'El *trauma penetrante* -causado por un objeto que atraviesa la piel y potencialmente estructuras más profundas, como un arma blanca o un proyectil- exige razonar no solo sobre el punto de entrada visible, sino sobre la trayectoria probable que siguió el objeto dentro del cuerpo, porque estructuras vitales pueden estar comprometidas aunque el punto de entrada externo parezca pequeño y poco alarmante.',
        'Esta diferencia entre trauma penetrante y trauma contuso (por impacto sin penetración de la piel) cambia considerablemente el enfoque de la evaluación: en el trauma penetrante, la localización anatómica precisa del punto de entrada y la trayectoria estimada orientan directamente qué órganos podrían estar lesionados, mientras que en el trauma contuso el daño interno puede ser más difuso y menos predecible a partir de la inspección externa.'
      ]
    },
    {
      t:'Cuando la superficie externa no refleja el daño interno',
      p:[
        'Un principio central de la semiología del trauma es que la apariencia externa de una lesión, por sí sola, con frecuencia no refleja de forma confiable la gravedad del daño interno: un paciente con un mecanismo de alta energía puede lucir estable inicialmente y tener una lesión interna grave en evolución, mientras que una herida externa aparatosa puede, en ocasiones, no comprometer ninguna estructura vital.',
        'Esta discordancia posible entre apariencia externa y daño interno real es la razón por la cual el mecanismo de lesión se considera información clínica valiosa por derecho propio, no solo un dato anecdótico: guía activamente qué buscar en la evaluación, incluso cuando el examen físico inicial no muestra hallazgos alarmantes evidentes.'
      ],
      foco:[
        '*Consideración clínica*: un mecanismo de alta energía (colisión a alta velocidad, caída de gran altura) debe hacer sospechar lesiones internas significativas incluso si el paciente inicialmente luce estable y sin hallazgos externos alarmantes.'
      ]
    }
  ],
  ref:'Sabiston, Tratado de Cirugía, cap. 7.'
},

'drenajes-sondas-quirurgicas': {
  tema:'Drenajes y sondas quirúrgicas',
  bloque:'Semiología Quirúrgica', programa:'unirm', cuatri:10, min:13,
  idea:'Un drenaje o una sonda no son solo dispositivos técnicos que se colocan y se olvidan: cada uno tiene un propósito clínico específico, y vigilar su producción o su funcionamiento aporta información diagnóstica activa sobre lo que está pasando dentro del paciente.',
  claves:['drenaje quirúrgico','sonda nasogástrica','sonda vesical'],
  sigue:'complicaciones-postoperatorias-tempranas',
  secciones:[
    {
      t:'El drenaje quirúrgico como ventana hacia el interior',
      p:[
        'Un *drenaje quirúrgico* se coloca deliberadamente durante o después de una cirugía para evacuar de forma controlada líquido (sangre, pus, otros fluidos) que de otra forma se acumularía en un espacio interno, con el riesgo de infección o de compresión de estructuras adyacentes que esa acumulación representaría.',
        'Más allá de su función evacuadora, un drenaje también funciona como una ventana de vigilancia clínica: la cantidad, el color y la consistencia de lo que produce a lo largo del tiempo aportan información diagnóstica activa sobre la evolución del paciente -un drenaje que de pronto produce sangre franca en cantidad significativa, por ejemplo, alerta sobre un posible sangrado postoperatorio activo antes de que otros signos clínicos se hagan evidentes.'
      ]
    },
    {
      t:'La sonda nasogástrica: descompresión y vigilancia',
      p:[
        'Una *sonda nasogástrica*, colocada desde la nariz hasta el estómago, cumple funciones distintas según el contexto: puede usarse para descomprimir el estómago en un paciente con obstrucción intestinal (retomando directamente la fisiopatología de la obstrucción ya vista en el abdomen agudo), para administrar alimentación en un paciente que no puede recibir nutrición por vía oral, o para vigilar el contenido gástrico en busca de sangrado activo.',
        'El volumen y las características de lo que drena por una sonda nasogástrica orientan directamente sobre la evolución clínica: un débito que disminuye progresivamente en un paciente con obstrucción intestinal sugiere resolución del cuadro, mientras que un débito persistente o en aumento sugiere que la obstrucción sigue activa.'
      ]
    },
    {
      t:'La sonda vesical: más que un simple manejo urinario',
      p:[
        'Una *sonda vesical*, colocada en la vejiga a través de la uretra, permite tanto vaciar la vejiga en un paciente que no puede orinar espontáneamente como medir con precisión el volumen de orina producido -un dato clínico especialmente valioso en el postoperatorio inmediato, donde la producción horaria de orina refleja indirectamente el estado de perfusión renal y, por extensión, del estado circulatorio general del paciente.',
        'Una disminución significativa en la producción de orina medida por sonda vesical puede ser, en el contexto postoperatorio, una de las primeras señales de alarma de un problema circulatorio en desarrollo (como una hemorragia interna no reconocida todavía), precediendo con frecuencia a cambios más evidentes en los signos vitales convencionales.'
      ],
      foco:[
        '*Consideración clínica*: la producción y las características de lo que drena por cualquier sonda o drenaje no son solo un dato de mantenimiento rutinario; son información clínica activa que puede alertar tempranamente sobre una complicación en desarrollo.'
      ]
    }
  ],
  ref:'Sabiston, Tratado de Cirugía, cap. 13.'
},

'complicaciones-postoperatorias-tempranas': {
  tema:'Complicaciones postoperatorias tempranas',
  bloque:'Semiología Quirúrgica', programa:'unirm', cuatri:10, min:14,
  idea:'Cierra el bloque de Semiología Quirúrgica con el momento donde toda la evaluación preoperatoria y la técnica quirúrgica se ponen a prueba: reconocer a tiempo cuándo algo va mal después de la cirugía es tan importante como haberla realizado bien.',
  claves:['dehiscencia de herida','infección de sitio quirúrgico','íleo postoperatorio'],
  sigue:'principios-administracion-salud',
  secciones:[
    {
      t:'Infección de sitio quirúrgico: la complicación más frecuente',
      p:[
        'La *infección de sitio quirúrgico* es una de las complicaciones postoperatorias más frecuentes, y su riesgo se relaciona directamente con factores ya identificados en la evaluación preoperatoria (diabetes mal controlada, desnutrición, tabaquismo, tiempo quirúrgico prolongado) y con el grado de contaminación de la herida al momento de la cirugía, retomando directamente los factores de riesgo ya vistos en el tema de cicatrización.',
        'Los signos de infección de sitio quirúrgico -eritema progresivo alrededor de la herida, calor local, dolor que aumenta en vez de disminuir con el tiempo, secreción purulenta, y fiebre- típicamente aparecen entre el tercer y el séptimo día postoperatorio, un patrón temporal que ayuda a distinguirla de otras complicaciones tempranas con un curso temporal distinto.'
      ]
    },
    {
      t:'Dehiscencia de herida: cuando el cierre falla',
      p:[
        'La *dehiscencia de herida* es la separación parcial o completa de los bordes de una herida quirúrgica previamente cerrada, generalmente por una combinación de factores locales (infección, tensión excesiva sobre el cierre) y factores sistémicos del paciente (desnutrición, uso de corticoides, edad avanzada) que comprometen la resistencia del tejido en reparación, retomando directamente los mismos factores de riesgo ya vistos para la cicatrización comprometida.',
        'Una dehiscencia completa, especialmente en una herida abdominal donde puede exponerse el contenido intestinal, es una emergencia quirúrgica real que requiere manejo inmediato, mientras que una dehiscencia parcial y superficial puede, en ocasiones, manejarse de forma más conservadora -distinguir entre ambos escenarios es clínicamente determinante para la conducta a seguir.'
      ]
    },
    {
      t:'Íleo postoperatorio: cuando el intestino tarda en "despertar"',
      p:[
        'El *íleo postoperatorio* es la disminución transitoria y esperable de la motilidad intestinal normal tras cualquier cirugía, especialmente abdominal, causada por una combinación de la propia manipulación quirúrgica del intestino, los efectos de la anestesia, y el uso de opioides para el control del dolor postoperatorio (retomando directamente el efecto de los opioides sobre la motilidad gastrointestinal ya visto en Farmacoterapéutica).',
        'Distinguir un íleo postoperatorio normal y esperado (que se resuelve progresivamente en los días siguientes a la cirugía) de una obstrucción intestinal mecánica real (que no se resuelve espontáneamente y puede requerir reintervención) es un reto clínico frecuente en el postoperatorio, que exige vigilar la evolución en el tiempo, no solo el hallazgo aislado en un momento dado.'
      ],
      foco:[
        'Este tema cierra el bloque completo de Semiología Quirúrgica retomando su idea central: reconocer a tiempo un patrón clínico anormal -ya sea en el abdomen agudo inicial o en una complicación postoperatoria- es tan determinante para el pronóstico del paciente como la técnica quirúrgica en sí misma.'
      ]
    }
  ],
  ref:'Sabiston, Tratado de Cirugía, cap. 13.'
}

});
