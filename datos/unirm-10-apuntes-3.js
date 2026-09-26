/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 10 (lote 3)
   Cubre MEDICINA FAMILIAR al estandar extenso (3 secciones,
   ~200-300 palabras por seccion, min 13-14). Tercera materia del
   cuatrimestre 10.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== MEDICINA FAMILIAR ==================== */
'principios-medicina-familiar': {
  tema:'Principios de la medicina familiar',
  bloque:'Medicina Familiar', programa:'unirm', cuatri:10, min:13,
  idea:'Casi todas las especialidades vistas hasta ahora se organizan alrededor de un órgano o una enfermedad. La medicina familiar se organiza alrededor de una persona a lo largo del tiempo -un cambio de eje que redefine qué significa "atender bien" a un paciente.',
  claves:['atención centrada en la persona','continuidad del cuidado','primer contacto'],
  sigue:'familia-como-unidad-atencion',
  secciones:[
    {
      t:'Atención centrada en la persona, no solo en la enfermedad',
      p:[
        'La *atención centrada en la persona* prioriza entender al paciente como un individuo completo -sus valores, su contexto de vida, sus prioridades- por encima de tratar únicamente el diagnóstico que trae en ese momento. Esto no significa ignorar la enfermedad; significa que la decisión clínica se toma considerando también quién es esa persona y qué es lo que realmente le importa a ella, no solo qué indica la guía clínica para ese diagnóstico en abstracto.',
        'Este enfoque contrasta con un modelo puramente centrado en la enfermedad, donde el objetivo principal es resolver el problema biomédico identificado, sin necesariamente integrar cómo ese problema se relaciona con el resto de la vida del paciente -una diferencia sutil pero que cambia decisiones reales, como cuánto insistir en un tratamiento que el paciente rechaza por razones personales válidas.'
      ]
    },
    {
      t:'El médico de familia como primer contacto',
      p:[
        'El médico de familia funciona, en la mayoría de los sistemas de salud bien organizados, como el *primer contacto* del paciente con el sistema: el punto de entrada natural para cualquier problema de salud, antes de decidir si se necesita un nivel más especializado -retomando directamente la lógica de niveles de atención ya vista en Salud y Comunidad I y en el sistema de salud dominicano.',
        'Ser el primer contacto no significa resolver todo por sí solo: significa ser quien recibe el problema inicial, lo evalúa con una visión integral, y decide -con criterio clínico y conociendo al paciente- si puede manejarlo directamente o si amerita referencia a un especialista, coordinando ese proceso en vez de simplemente derivarlo sin seguimiento.'
      ]
    },
    {
      t:'Continuidad del cuidado: el eje distintivo de la especialidad',
      p:[
        'La *continuidad del cuidado* es, quizás, el elemento que más distingue a la medicina familiar de otras especialidades: en vez de una relación puntual limitada a un episodio de enfermedad, el médico de familia acompaña al paciente a lo largo de años, a veces décadas, construyendo un conocimiento acumulado de su historia, su contexto y sus patrones de salud que ningún encuentro aislado podría igualar.',
        'Esta continuidad tiene un valor clínico real, no solo relacional: un médico que conoce la historia completa de un paciente detecta con más facilidad un cambio significativo respecto a su patrón habitual, y puede interpretar síntomas nuevos con el contexto de todo lo que ya sabe de esa persona -una ventaja que un encuentro aislado en urgencias o con un especialista nuevo simplemente no tiene disponible.'
      ],
      foco:[
        '*Consideración clínica*: la medicina familiar no es "medicina general" en el sentido de ser menos especializada; es una especialidad con un enfoque propio -la persona a lo largo del tiempo, no el órgano o la enfermedad- que requiere habilidades distintas, no menos rigurosas.'
      ]
    }
  ],
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 1.'
},

'familia-como-unidad-atencion': {
  tema:'La familia como unidad de atención',
  bloque:'Medicina Familiar', programa:'unirm', cuatri:10, min:13,
  idea:'Tratar a un paciente sin considerar a su familia es, con frecuencia, tratar solo una parte del problema real: la familia no es solo el contexto alrededor del paciente, es con frecuencia parte activa de la causa, del sostén, o de la solución de lo que le pasa.',
  claves:['familia como paciente','dinámica familiar','apoyo familiar'],
  sigue:'ciclo-vital-familiar',
  secciones:[
    {
      t:'Cuando la familia es, en sí misma, el objeto de atención',
      p:[
        'El concepto de *familia como paciente* propone que, en ciertas situaciones, la unidad clínicamente relevante no es solo el individuo sino el sistema familiar completo -por ejemplo, cuando una enfermedad crónica de un miembro afecta la dinámica de toda la familia, o cuando un conflicto familiar está manteniendo o empeorando un problema de salud individual que, tratado de forma aislada, seguiría reapareciendo.',
        'Esto no significa que cada consulta se convierta en una sesión familiar completa; significa reconocer que, en casos donde la familia está claramente involucrada en el problema o en su solución, ignorar esa dimensión y tratar solo al individuo de forma aislada puede limitar seriamente la efectividad de cualquier intervención.'
      ]
    },
    {
      t:'La dinámica familiar como factor de salud',
      p:[
        'La *dinámica familiar* -cómo se comunican, cómo resuelven conflictos, cómo se distribuyen roles y responsabilidades dentro de una familia- influye directamente en la salud de sus miembros: una dinámica familiar disfuncional puede ser un factor de riesgo tan relevante como cualquier factor biológico, mientras que una dinámica familiar saludable puede ser un recurso protector poderoso frente a la enfermedad.',
        'Reconocer patrones disfuncionales -por ejemplo, un rol de "paciente identificado" donde toda la atención familiar se concentra en el problema de salud de una sola persona, desviando la atención de otros conflictos familiares no resueltos- ayuda al médico de familia a entender por qué ciertos problemas de salud persisten pese a un tratamiento biomédico aparentemente correcto.'
      ]
    },
    {
      t:'El apoyo familiar como recurso terapéutico',
      p:[
        'El *apoyo familiar* -la disponibilidad real de la familia para acompañar, cuidar y sostener a un paciente durante una enfermedad- es uno de los recursos más determinantes para el pronóstico de muchas condiciones, especialmente las crónicas o las que requieren un cambio sostenido de comportamiento: un paciente con buen apoyo familiar tiene, en igualdad de condiciones clínicas, mejores resultados que uno sin ese apoyo.',
        'Evaluar el apoyo familiar disponible -no asumirlo automáticamente ni descartarlo sin preguntar- es parte del trabajo del médico de familia al diseñar un plan de manejo realista, retomando directamente la importancia de las condiciones de vida del paciente ya vista en los determinantes sociales de la salud.'
      ],
      foco:[
        '*Consideración clínica*: preguntar explícitamente quién apoya al paciente en su día a día, y cómo, no es un detalle secundario de la entrevista; es información clínica que cambia cómo se diseña un plan de tratamiento realista.'
      ]
    }
  ],
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 4.'
},

'ciclo-vital-familiar': {
  tema:'Ciclo vital familiar',
  bloque:'Medicina Familiar', programa:'unirm', cuatri:10, min:13,
  idea:'Las familias, igual que las personas, atraviesan etapas predecibles con sus propias tareas y crisis características -entender en qué etapa está una familia ayuda a anticipar qué tipo de tensiones es probable que esté enfrentando.',
  claves:['ciclo vital familiar','etapas de la familia','crisis normativas'],
  sigue:'genograma-evaluacion-familiar',
  secciones:[
    {
      t:'Etapas predecibles, con tareas específicas en cada una',
      p:[
        'El *ciclo vital familiar* describe una secuencia de *etapas de la familia* razonablemente predecibles -formación de la pareja, llegada de los primeros hijos, familia con hijos en edad escolar, familia con adolescentes, salida de los hijos del hogar (el "nido vacío"), y la etapa de la vejez de la pareja original- cada una con tareas de desarrollo específicas que la familia debe resolver para avanzar de forma saludable a la siguiente etapa.',
        'Por ejemplo, la llegada del primer hijo exige que la pareja reorganice roles, tiempo y prioridades; la salida de los hijos del hogar exige que la pareja redefina su relación sin el rol organizador que los hijos ocupaban en el día a día familiar -tareas distintas, en momentos distintos, cada una con su propio potencial de tensión.'
      ]
    },
    {
      t:'Crisis normativas: esperables, no patológicas',
      p:[
        'Las *crisis normativas* son las tensiones y ajustes esperables que ocurren al transitar de una etapa del ciclo vital a la siguiente -no son señal de que algo está mal en la familia, sino parte normal del proceso de adaptación a una nueva etapa. Reconocerlas como normativas, en vez de patológicas, cambia cómo el médico de familia las aborda: no como un problema a "curar", sino como un proceso de ajuste a acompañar.',
        'El problema clínico real no es que ocurra una crisis normativa -eso es esperable-, sino cuando una familia no logra resolverla adecuadamente y queda atascada en un patrón disfuncional sostenido, lo que sí puede tener consecuencias reales sobre la salud de sus miembros.'
      ]
    },
    {
      t:'Anticipar tensiones según la etapa del ciclo',
      p:[
        'Conocer en qué etapa del ciclo vital está una familia permite al médico de familia anticipar qué tipo de tensiones es probable que esté enfrentando, incluso antes de que el paciente las mencione explícitamente: una familia con un adolescente puede estar lidiando con conflictos de autonomía; una familia con un hijo recién nacido puede estar lidiando con privación de sueño y reorganización de roles.',
        'Esta anticipación no reemplaza preguntar directamente al paciente sobre su situación, pero sí orienta qué preguntas hacer y ayuda a interpretar con más contexto los síntomas -por ejemplo, síntomas de estrés o ansiedad en un padre reciente pueden entenderse mejor sabiendo que esa familia está en una etapa de ajuste particularmente exigente.'
      ],
      foco:[
        '*Consideración clínica*: una crisis normativa del ciclo vital familiar no es, por sí sola, un motivo de preocupación patológica; lo que sí amerita atención es cuando la familia queda atascada sin lograr resolverla.'
      ]
    }
  ],
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 5.'
},

'genograma-evaluacion-familiar': {
  tema:'Genograma y evaluación familiar',
  bloque:'Medicina Familiar', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma directamente el genograma ya introducido en Genética Médica (8vo), pero le añade una dimensión distinta: no solo mapear qué enfermedades hereditarias corren en la familia, sino también mapear cómo se relacionan entre sí sus miembros.',
  claves:['genograma','ecomapa','evaluación familiar estructurada'],
  sigue:'atencion-longitudinal-continuidad-cuidado',
  secciones:[
    {
      t:'El genograma: más que un árbol genealógico',
      p:[
        'El *genograma*, ya introducido en Genética Médica como herramienta para representar patrones de herencia, se usa en medicina familiar con un propósito adicional: además de registrar enfermedades y relaciones biológicas, puede representar la calidad de las relaciones entre los miembros de la familia (cercanas, conflictivas, distantes), aportando una visión estructural de la dinámica familiar de un vistazo.',
        'Un genograma bien construido permite identificar, en segundos, patrones que tomarían mucho más tiempo explorar solo con preguntas abiertas: quién está cerca de quién, dónde hay conflictos recurrentes, qué enfermedades se repiten en distintas generaciones -información valiosa tanto para el riesgo genético como para entender el contexto relacional del paciente.'
      ]
    },
    {
      t:'El ecomapa: la familia en su entorno más amplio',
      p:[
        'El *ecomapa* complementa al genograma extendiendo la mirada más allá de la familia nuclear hacia su entorno social más amplio: relaciones con el trabajo, la escuela, servicios de salud, grupos religiosos o comunitarios, amistades cercanas -representando gráficamente qué conexiones externas son fuentes de apoyo y cuáles son fuentes de tensión para la familia.',
        'Mientras el genograma se enfoca hacia adentro (relaciones dentro de la familia y su historia), el ecomapa se enfoca hacia afuera (relaciones de la familia con su entorno) -juntos, ofrecen una imagen bastante completa del contexto social real en el que vive un paciente, retomando directamente los determinantes sociales de la salud ya vistos en Salud y Comunidad I.'
      ]
    },
    {
      t:'Evaluación familiar estructurada: sistematizar lo que de otra forma sería disperso',
      p:[
        'Una *evaluación familiar estructurada* organiza la exploración de la dinámica familiar en categorías específicas (comunicación, roles, apoyo, manejo de conflictos, recursos disponibles), en vez de depender de una conversación libre y potencialmente incompleta, asegurando que ningún aspecto relevante se quede sin explorar por simple omisión.',
        'Esta estructura es particularmente útil en casos complejos, donde la dinámica familiar parece estar jugando un rol importante en el problema de salud del paciente, pero donde una conversación no estructurada corre el riesgo de quedarse solo en los aspectos más evidentes o más cómodos de discutir, dejando fuera dimensiones igualmente relevantes.'
      ],
      foco:[
        '*Consideración clínica*: el genograma y el ecomapa no son solo herramientas de registro documental; son instrumentos de razonamiento clínico que revelan, de un vistazo, patrones familiares y sociales que orientan directamente el plan de manejo.'
      ]
    }
  ],
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 6.'
},

'atencion-longitudinal-continuidad-cuidado': {
  tema:'Atención longitudinal y continuidad del cuidado',
  bloque:'Medicina Familiar', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma y profundiza la continuidad del cuidado ya introducida como principio general de la medicina familiar, mostrando su valor concreto en la práctica: qué gana realmente un paciente, en términos clínicos medibles, al tener el mismo médico a lo largo del tiempo.',
  claves:['atención longitudinal','historia clínica longitudinal','seguimiento a largo plazo'],
  sigue:'manejo-multimorbilidad',
  secciones:[
    {
      t:'La historia clínica longitudinal como memoria clínica acumulada',
      p:[
        'Una *historia clínica longitudinal* -el registro continuo y acumulado de la atención de un paciente a lo largo de años- permite al médico de familia detectar cambios significativos respecto al patrón habitual de ese paciente específico, algo que un encuentro aislado, sin ese contexto histórico, no puede lograr con la misma precisión.',
        'Por ejemplo, un valor de presión arterial que parecería "normal" en un paciente cualquiera puede ser una señal de alarma en un paciente cuya historia longitudinal muestra que siempre ha tenido valores considerablemente más bajos -el contexto histórico cambia por completo la interpretación clínica de un mismo dato aislado.'
      ]
    },
    {
      t:'Seguimiento a largo plazo: detectar lo que un solo encuentro no puede',
      p:[
        'El *seguimiento a largo plazo* permite observar tendencias que se desarrollan lentamente -el deterioro gradual de una función, la progresión lenta de una enfermedad crónica, un cambio sutil en el estado de ánimo o el comportamiento- que serían difíciles de detectar en una sola consulta aislada, pero que se vuelven evidentes al comparar con el patrón acumulado de encuentros previos.',
        'Este seguimiento también permite ajustar el plan de manejo de forma progresiva y adaptada, en vez de tomar decisiones definitivas basadas en un único punto de información: un médico que sigue al paciente a lo largo del tiempo puede probar un ajuste, observar la respuesta, y refinar la conducta en consultas sucesivas.'
      ]
    },
    {
      t:'La continuidad como ventaja frente a la atención fragmentada',
      p:[
        'La atención fragmentada -donde un paciente ve a un profesional distinto en cada consulta, sin ningún hilo conductor entre ellas- pierde precisamente esta ventaja de la continuidad: cada profesional debe reconstruir el contexto desde cero, con el riesgo real de omitir información relevante que un médico de continuidad ya conocería sin necesidad de preguntarla de nuevo.',
        'Esta fragmentación no es solo un inconveniente de comodidad para el paciente; tiene un costo clínico real, relacionado directamente con el mismo tipo de riesgo de pérdida de información ya visto en la comunicación interprofesional deficiente (Relación Médico-Paciente, 9no), aplicado aquí a la continuidad a lo largo del tiempo, no solo entre profesionales en un mismo momento.'
      ],
      foco:[
        '*Consideración clínica*: la continuidad del cuidado no es solo una preferencia de comodidad; tiene un valor clínico medible, al permitir detectar cambios sutiles respecto al patrón habitual de cada paciente específico.'
      ]
    }
  ],
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 1.'
},

'manejo-multimorbilidad': {
  tema:'Manejo de la multimorbilidad',
  bloque:'Medicina Familiar', programa:'unirm', cuatri:10, min:13,
  idea:'La mayoría de las guías clínicas se escriben para una sola enfermedad a la vez, pero el paciente real de un médico de familia con frecuencia tiene varias condiciones crónicas simultáneas -y tratarlas como si fueran independientes entre sí puede generar más daño que beneficio.',
  claves:['multimorbilidad','paciente polipatológico','carga de tratamiento'],
  sigue:'visita-domiciliaria',
  secciones:[
    {
      t:'El problema de aplicar guías de una sola enfermedad a un paciente con varias',
      p:[
        'La *multimorbilidad* -la presencia simultánea de dos o más enfermedades crónicas en un mismo paciente- es sumamente frecuente en la práctica de medicina familiar, especialmente en pacientes de edad avanzada, retomando directamente el concepto ya visto en Geriatría de un *paciente polipatológico*. El problema práctico es que la mayoría de las guías clínicas se desarrollan y validan pensando en una sola enfermedad, sin considerar cómo interactúan sus recomendaciones cuando se aplican todas a la vez en la misma persona.',
        'Aplicar mecánicamente cada guía por separado a un paciente polipatológico puede resultar en un plan de tratamiento contradictorio, redundante, o simplemente inmanejable en la práctica -por ejemplo, varias guías distintas recomendando cada una su propio fármaco, sin que ninguna considere las interacciones entre todos ellos combinados, retomando directamente el riesgo de polifarmacia ya visto en Farmacoterapéutica.'
      ]
    },
    {
      t:'Carga de tratamiento: el costo de seguir todas las indicaciones a la vez',
      p:[
        'La *carga de tratamiento* es el esfuerzo total que representa para un paciente seguir todas las indicaciones médicas acumuladas de sus distintas condiciones: número de medicamentos, frecuencia de tomas, citas de seguimiento, cambios de estilo de vida recomendados, estudios periódicos -una carga que, sumada entre varias enfermedades crónicas, puede volverse realmente insostenible para la vida cotidiana del paciente.',
        'Una carga de tratamiento excesiva no es solo una molestia; es un factor de riesgo real para la adherencia general: un paciente abrumado por demasiadas indicaciones simultáneas tiene más probabilidad de abandonar varias de ellas, incluso las más importantes, simplemente por sobrecarga práctica, no por falta de voluntad.'
      ]
    },
    {
      t:'Priorizar, no solo sumar indicaciones',
      p:[
        'El manejo racional de la multimorbilidad exige priorizar: identificar, junto con el paciente, qué condiciones y qué intervenciones son más relevantes para su calidad de vida y su pronóstico real, en vez de simplemente sumar mecánicamente todas las recomendaciones de todas las guías aplicables por separado.',
        'Esta priorización retoma directamente la farmacoterapia racional ya vista en Farmacoterapéutica, y la extiende más allá de los fármacos hacia el plan de manejo completo: preguntarse, para cada indicación, si realmente aporta un beneficio proporcional a la carga que representa para ese paciente específico, en ese momento de su vida.'
      ],
      foco:[
        '*Consideración clínica*: en un paciente polipatológico, la pregunta correcta no es "¿qué dice la guía de cada enfermedad por separado?", sino "¿cuál es el plan que, tomado en conjunto, este paciente concreto puede realmente sostener?".'
      ]
    }
  ],
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 14.'
},

'visita-domiciliaria': {
  tema:'Visita domiciliaria',
  bloque:'Medicina Familiar', programa:'unirm', cuatri:10, min:13,
  idea:'Ver a un paciente en su propio hogar, en vez de en el consultorio, revela información que ninguna pregunta directa lograría obtener con la misma claridad -el entorno real en el que esa persona vive su enfermedad todos los días.',
  claves:['visita domiciliaria','atención en el hogar','paciente postrado'],
  sigue:'promocion-salud-consultorio-familiar',
  secciones:[
    {
      t:'Qué revela el hogar que el consultorio no puede',
      p:[
        'Una *visita domiciliaria* permite observar directamente las condiciones reales de vida del paciente -seguridad del entorno físico, accesibilidad para alguien con movilidad limitada, presencia o ausencia de apoyo familiar cotidiano, condiciones de higiene, disponibilidad real de alimentos- información que ninguna pregunta directa en el consultorio logra capturar con la misma fidelidad, porque el paciente puede describir su situación de forma distinta a como realmente es, sin necesariamente ocultar información deliberadamente.',
        'Este tipo de observación directa conecta con el diagnóstico comunitario ya visto en Salud y Comunidad I: así como ese diagnóstico busca entender las condiciones reales de una comunidad, la visita domiciliaria busca entender las condiciones reales de un hogar específico, en vez de asumirlas a partir de lo que el paciente relata en la consulta.'
      ]
    },
    {
      t:'El paciente postrado: cuando la visita domiciliaria es indispensable',
      p:[
        'Un *paciente postrado* -que por su condición física no puede trasladarse al consultorio de forma segura o razonable- depende con frecuencia de la visita domiciliaria como su única vía real de acceso a la atención médica continua; sin ese servicio, este paciente quedaría efectivamente excluido de la atención médica regular, retomando el concepto de acceso a servicios de salud ya visto como determinante social.',
        'La atención de un paciente postrado en su domicilio también permite evaluar directamente cómo su familia o cuidadores manejan su cuidado cotidiano -administración de medicamentos, cambios de posición para evitar úlceras por presión, alimentación-, información esencial para ajustar el plan de manejo a la realidad del cuidado que efectivamente está recibiendo.'
      ]
    },
    {
      t:'La visita domiciliaria como herramienta, no como excepción menor',
      p:[
        'Lejos de ser una práctica marginal o anticuada, la visita domiciliaria sigue teniendo un valor clínico específico e insustituible en ciertos escenarios: pacientes con movilidad muy limitada, cuidados paliativos en el hogar (que se desarrollan con más detalle en el tema siguiente), evaluación de un entorno familiar de riesgo, o simplemente conocer de primera mano el contexto real de un paciente complejo.',
        'Decidir cuándo una visita domiciliaria aporta un valor clínico real, distinto del que aportaría una consulta convencional, es parte del criterio del médico de familia -no toda situación la justifica, pero descartarla sistemáticamente como "poco práctica" ignora su valor único en los casos donde realmente aplica.'
      ],
      foco:[
        '*Consideración clínica*: la visita domiciliaria no reemplaza a la consulta convencional en la mayoría de los casos, pero en pacientes postrados o con condiciones de vida difíciles de evaluar a distancia, puede revelar información clínicamente decisiva que ninguna otra vía capturaría.'
      ]
    }
  ],
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 15.'
},

'promocion-salud-consultorio-familiar': {
  tema:'Promoción de la salud en el consultorio familiar',
  bloque:'Medicina Familiar', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma la educación para la salud ya vista en Medicina Preventiva (9no), pero la sitúa en el escenario más frecuente y más repetido de toda la práctica clínica: la consulta breve y cotidiana, donde rara vez hay tiempo para una intervención extensa.',
  claves:['consejería breve','cambio de comportamiento en consulta'],
  sigue:'medicina-familiar-basada-evidencia',
  secciones:[
    {
      t:'Consejería breve: aprovechar minutos, no horas',
      p:[
        'La *consejería breve* es una técnica de comunicación diseñada para aprovechar el tiempo limitado de una consulta habitual (unos pocos minutos) para abordar un cambio de comportamiento relevante -dejar de fumar, mejorar la alimentación, aumentar la actividad física-, sin pretender lograr en ese momento una intervención completa como la entrevista motivacional extensa ya vista en Relación Médico-Paciente.',
        'Esta técnica se apoya en identificar el momento oportuno (por ejemplo, aprovechar una consulta relacionada con un problema de salud conectado al comportamiento a cambiar), plantear el tema de forma directa pero respetuosa, y ofrecer un paso concreto y pequeño, en vez de una recomendación general y abstracta que el paciente probablemente no sabrá cómo aplicar.'
      ]
    },
    {
      t:'El consultorio familiar como oportunidad repetida',
      p:[
        'A diferencia de una intervención única de promoción de la salud, el consultorio de medicina familiar ofrece una ventaja distinta: la oportunidad de repetir el mensaje de forma breve en consultas sucesivas a lo largo del tiempo, con el contexto acumulado de la relación longitudinal ya vista en la atención longitudinal, en vez de depender de una sola conversación extensa para lograr el cambio completo.',
        'Esta repetición espaciada -un mensaje breve pero constante a lo largo de varias consultas- puede ser más efectiva que una única intervención extensa, precisamente porque el cambio de comportamiento sostenido rara vez ocurre de una sola vez, sino a través de intentos repetidos, ajustados según la respuesta observada en cada encuentro.'
      ]
    },
    {
      t:'Cambio de comportamiento en consulta: aprovechar el momento clínico',
      p:[
        'El *cambio de comportamiento en consulta* se facilita cuando el médico de familia conecta explícitamente el comportamiento a modificar con el problema de salud concreto que trajo al paciente ese día -por ejemplo, vincular directamente el sedentarismo con el control de la presión arterial que se está revisando en esa misma consulta, en vez de abordarlo como un tema completamente aparte y desconectado.',
        'Esta conexión directa con el motivo de consulta actual hace que el mensaje sea más relevante y memorable para el paciente que una recomendación genérica de "debería hacer más ejercicio", aprovechando el momento clínico específico en el que el paciente está más receptivo a entender la relación entre su comportamiento y su salud.'
      ],
      foco:[
        '*Consideración clínica*: la consejería breve no busca resolver el cambio de comportamiento en una sola consulta; busca sembrar y reforzar, de forma repetida a lo largo del tiempo, aprovechando la continuidad propia de la medicina familiar.'
      ]
    }
  ],
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 3.'
},

'medicina-familiar-basada-evidencia': {
  tema:'Medicina familiar basada en evidencia',
  bloque:'Medicina Familiar', programa:'unirm', cuatri:10, min:13,
  idea:'La evidencia científica sobre una intervención rara vez se generó estudiando al paciente polipatológico real de un consultorio de medicina familiar; aplicarla con criterio, sabiendo qué limitaciones tiene para ese contexto, es tan importante como conocerla.',
  claves:['medicina basada en evidencia en atención primaria','guías de práctica clínica'],
  sigue:'coordinacion-especialistas-referencia',
  secciones:[
    {
      t:'La brecha entre el paciente del estudio y el paciente real',
      p:[
        'La *medicina basada en evidencia en atención primaria* enfrenta un reto particular: muchos ensayos clínicos que generan la evidencia detrás de las *guías de práctica clínica* se realizan en poblaciones relativamente homogéneas, con criterios de inclusión estrictos que excluyen deliberadamente a pacientes con múltiples comorbilidades -precisamente el tipo de paciente que con más frecuencia consulta a un médico de familia.',
        'Esto significa que aplicar una guía "al pie de la letra" a un paciente polipatológico real puede no ser directamente extrapolable, porque ese paciente específico no se parece necesariamente a los sujetos incluidos en los estudios que originaron la guía, retomando directamente el reto ya visto en el manejo de la multimorbilidad.'
      ]
    },
    {
      t:'Aplicar la evidencia con criterio, no de forma mecánica',
      p:[
        'La medicina familiar basada en evidencia no significa ignorar las guías de práctica clínica; significa aplicarlas con criterio clínico informado, considerando explícitamente si el paciente que se tiene enfrente se parece razonablemente a la población en la que se generó esa evidencia, y ajustando la conducta cuando existan diferencias relevantes (edad, comorbilidades, contexto social) que la guía no contempló.',
        'Este ejercicio de criterio no es un permiso para ignorar la evidencia arbitrariamente; es reconocer que la evidencia científica responde preguntas sobre poblaciones, mientras que la decisión clínica se toma sobre una persona individual, con toda su complejidad particular -la misma tensión, en el fondo, que ya se vio al hablar de individualizar metas de tratamiento en Farmacoterapéutica.'
      ]
    },
    {
      t:'Cuándo la ausencia de evidencia directa no significa ausencia de guía razonable',
      p:[
        'En situaciones donde no existe evidencia directa aplicable al paciente específico (por ejemplo, un paciente muy anciano con múltiples comorbilidades raramente incluido en ensayos clínicos), el médico de familia no queda sin ninguna orientación: puede razonar por extrapolación cuidadosa de la evidencia disponible en poblaciones más similares, combinada con el conocimiento acumulado de ese paciente específico gracias a la continuidad del cuidado.',
        'Esta combinación -evidencia disponible, aunque imperfecta, más conocimiento longitudinal del paciente concreto- es, en la práctica, la forma más realista de tomar decisiones bien fundamentadas quando la evidencia perfecta simplemente no existe para ese caso particular.'
      ],
      foco:[
        '*Consideración clínica*: una guía de práctica clínica es un punto de partida basado en poblaciones estudiadas, no una instrucción que deba aplicarse sin juicio clínico a cualquier paciente, especialmente al paciente polipatológico típico de la consulta familiar.'
      ]
    }
  ],
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 2.'
},

'coordinacion-especialistas-referencia': {
  tema:'Coordinación con especialistas y referencia',
  bloque:'Medicina Familiar', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma directamente el sistema de referencia y contrarreferencia ya visto en Farmacoterapéutica y en Salud y Comunidad I, pero desde el rol activo del médico de familia como coordinador de todo el proceso, no solo como quien envía al paciente y pierde el hilo.',
  claves:['referencia y contrarreferencia','coordinación del cuidado'],
  sigue:'cuidados-paliativos-atencion-primaria',
  secciones:[
    {
      t:'Referir bien: más que solo enviar al paciente a otro nivel',
      p:[
        'El sistema de *referencia y contrarreferencia*, ya introducido conceptualmente en Salud y Comunidad I, exige del médico de familia algo más que simplemente enviar al paciente al especialista correspondiente: implica preparar la referencia con información clínica suficiente (motivo claro, hallazgos relevantes, estudios ya realizados), para que el especialista no tenga que repetir desde cero una evaluación que ya se hizo, retomando el mismo principio de eficiencia ya visto en el sistema de niveles de atención.',
        'Una referencia mal preparada -sin información clara del motivo o sin estudios previos relevantes- no solo hace perder tiempo al especialista, sino que retrasa la atención real del paciente, porque con frecuencia obliga a repetir estudios o consultas antes de poder avanzar hacia una conducta definitiva.'
      ]
    },
    {
      t:'Coordinación del cuidado: el médico de familia como hilo conductor',
      p:[
        'La *coordinación del cuidado* es el rol activo que mantiene el médico de familia incluso después de referir a un paciente: asegurar que la información fluya de vuelta desde el especialista (contrarreferencia), integrar las recomendaciones de distintos especialistas si el paciente tiene varias referencias simultáneas, y mantener la visión integral del paciente que ningún especialista individual, enfocado en su área específica, necesariamente tiene.',
        'Esta coordinación es particularmente importante en un paciente con multimorbilidad que consulta a varios especialistas distintos: sin alguien que integre todas las recomendaciones (que pueden, en ocasiones, entrar en conflicto entre sí), el paciente queda con la carga de reconciliar indicaciones potencialmente contradictorias por su propia cuenta, sin el criterio clínico necesario para hacerlo con seguridad.'
      ]
    },
    {
      t:'Cuándo referir y cuándo manejar directamente',
      p:[
        'Decidir cuándo un problema puede manejarse directamente en el nivel de atención familiar y cuándo requiere referencia a un especialista es una habilidad clínica central: referir de más satura innecesariamente el sistema especializado con problemas que la atención primaria podría resolver; referir de menos retrasa el acceso a una evaluación especializada que el paciente realmente necesita.',
        'Este criterio de decisión conecta directamente con la lógica ya vista sobre los niveles de atención: el primer nivel, cuando funciona bien, resuelve la mayoría de los problemas comunes, y reserva la referencia para los casos que genuinamente requieren la evaluación o el manejo de un nivel más especializado.'
      ],
      foco:[
        '*Consideración clínica*: una referencia bien hecha no es solo enviar al paciente a otro nivel; incluye preparar la información necesaria y mantenerse como coordinador del proceso hasta que la contrarreferencia complete el círculo.'
      ]
    }
  ],
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 10.'
},

'cuidados-paliativos-atencion-primaria': {
  tema:'Cuidados paliativos en atención primaria',
  bloque:'Medicina Familiar', programa:'unirm', cuatri:10, min:13,
  idea:'Los cuidados paliativos no son exclusivos de las últimas semanas de vida ni de un servicio hospitalario especializado: el médico de familia, gracias precisamente a la continuidad del cuidado, está en una posición única para acompañar este proceso desde el propio consultorio o el hogar del paciente.',
  claves:['cuidados paliativos','control de síntomas','paciente terminal en el hogar'],
  sigue:'medico-familia-comunidad',
  secciones:[
    {
      t:'Cuidados paliativos: control de síntomas, no abandono del tratamiento',
      p:[
        'Los *cuidados paliativos* buscan aliviar el sufrimiento y mejorar la calidad de vida de un paciente con una enfermedad avanzada, sin necesariamente buscar ya la curación de esa enfermedad -un enfoque centrado en el *control de síntomas* (dolor, disnea, náuseas, ansiedad) y en el bienestar integral del paciente, no un "abandono" del tratamiento médico activo, como a veces se malinterpreta.',
        'Este cambio de enfoque -de curar a acompañar y aliviar- no ocurre de forma súbita en un único momento; con frecuencia se integra gradualmente junto con el tratamiento activo, incluso antes de que la enfermedad esté en su fase más avanzada, retomando la idea ya vista en prevención cuaternaria de que la buena práctica médica también exige saber cuándo un tratamiento agresivo adicional ya no aporta beneficio neto.'
      ]
    },
    {
      t:'El paciente terminal en el hogar: el rol de la continuidad',
      p:[
        'Un *paciente terminal en el hogar*, acompañado por su familia y su médico de continuidad, con frecuencia tiene una experiencia de fin de vida distinta -y con frecuencia preferida por el propio paciente- a la de un entorno hospitalario despersonalizado: el médico de familia, gracias a la relación longitudinal ya construida a lo largo de años, puede ofrecer un acompañamiento que integra tanto el manejo clínico de síntomas como el apoyo emocional al paciente y a su familia.',
        'Esta posibilidad depende directamente de las herramientas ya vistas en este bloque: la visita domiciliaria para el manejo directo en el hogar, la coordinación con especialistas (como un equipo especializado en cuidados paliativos, cuando el caso lo requiere) y el conocimiento acumulado de la familia como unidad de apoyo.'
      ]
    },
    {
      t:'Comunicación honesta como parte central del cuidado paliativo',
      p:[
        'Acompañar a un paciente y su familia durante el final de la vida exige retomar directamente la comunicación de malas noticias ya vista en Relación Médico-Paciente: conversaciones honestas sobre el pronóstico, las expectativas realistas, y las preferencias del propio paciente sobre cómo quiere vivir el tiempo que le queda, son parte central de un cuidado paliativo bien hecho, no un tema a evitar por incomodidad.',
        'Estas conversaciones, sostenidas y repetidas a lo largo del tiempo gracias a la continuidad del cuidado, permiten ajustar el plan de manejo según cómo evolucionan tanto la condición clínica como las preferencias del paciente, que pueden cambiar conforme la enfermedad avanza.'
      ],
      foco:[
        '*Consideración clínica*: los cuidados paliativos no equivalen a "ya no hay nada que hacer"; equivalen a redefinir qué significa "hacer algo útil" por ese paciente en esa etapa específica de su enfermedad.'
      ]
    }
  ],
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 16.'
},

'medico-familia-comunidad': {
  tema:'El médico de familia y la comunidad',
  bloque:'Medicina Familiar', programa:'unirm', cuatri:10, min:13,
  idea:'Cierra el bloque de Medicina Familiar ampliando el círculo una vez más: del individuo, a la familia, y ahora a la comunidad entera en la que ambos están inmersos -conectando directamente esta materia con la salud comunitaria ya vista en el pensum.',
  claves:['medicina familiar y comunidad','abogacía por el paciente'],
  sigue:'determinantes-sociales-salud-mental',
  secciones:[
    {
      t:'El consultorio como observatorio de la salud comunitaria',
      p:[
        'Un médico de familia que atiende a la misma población durante años desarrolla, casi sin proponérselo, un conocimiento privilegiado de los patrones de salud de esa comunidad -qué problemas de salud son frecuentes, qué determinantes sociales predominan, qué recursos comunitarios existen o faltan-, retomando directamente el diagnóstico comunitario ya visto en Salud y Comunidad I, pero construido desde la experiencia acumulada de la práctica clínica cotidiana, no desde un estudio formal externo.',
        'Este conocimiento acumulado convierte al consultorio de medicina familiar en una especie de observatorio informal de la salud de la comunidad: los patrones que un médico de familia empieza a notar repetidamente entre sus pacientes -un aumento de cierto problema, una barrera de acceso común- son, con frecuencia, una señal temprana de algo que afecta a la comunidad más amplia, no solo a casos individuales aislados.'
      ]
    },
    {
      t:'Abogacía por el paciente: ir más allá de la consulta individual',
      p:[
        'La *abogacía por el paciente* es el rol del médico de familia de representar activamente los intereses de sus pacientes más allá de la consulta individual -por ejemplo, señalando ante instituciones o autoridades locales una barrera de acceso a servicios de salud que afecta sistemáticamente a su población de pacientes, en vez de limitarse a manejar cada caso individual sin abordar la causa estructural compartida.',
        'Este rol conecta directamente con la salud comunitaria ya vista en el pensum: mientras que un diagnóstico comunitario formal busca sistemáticamente los problemas de una comunidad, la abogacía del médico de familia surge orgánicamente de la práctica clínica cotidiana, al notar patrones repetidos entre los pacientes que atiende.'
      ]
    },
    {
      t:'El cierre del bloque: de la persona a la comunidad',
      p:[
        'Este tema cierra el bloque de Medicina Familiar retomando, en su punto más amplio, el hilo conductor que atravesó toda la materia: empezó con la atención centrada en la persona individual, se amplió hacia la familia como unidad de atención, y termina reconociendo que ni la persona ni la familia existen aisladas de la comunidad más amplia en la que viven.',
        'Esta ampliación progresiva del círculo de atención -persona, familia, comunidad- no es un ejercicio teórico: es la lógica práctica que distingue a la medicina familiar de una atención puramente individual y descontextualizada, y la conecta directamente con la salud comunitaria y los determinantes sociales que atraviesan todo el pensum de UNIRMIA.'
      ],
      foco:[
        'Este tema cierra el bloque de Medicina Familiar mostrando que su enfoque -persona, familia, comunidad- no son círculos separados, sino niveles conectados de un mismo compromiso con la salud del paciente en su contexto real.'
      ]
    }
  ],
  ref:'McWhinney y Freeman, Textbook of Family Medicine, cap. 17.'
}

});
