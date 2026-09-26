/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 10 (lote 6)
   Cubre GERENCIA EN SALUD al estandar extenso (3 secciones,
   ~200-300 palabras por seccion, min 13-14). Sexta materia del
   cuatrimestre 10 (2 creditos, 7 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== GERENCIA EN SALUD ==================== */
'principios-administracion-salud': {
  tema:'Principios de administración en salud',
  bloque:'Gerencia en Salud', programa:'unirm', cuatri:10, min:13,
  idea:'Este bloque cambia por completo la pregunta que ha guiado todo el pensum hasta ahora: no "cómo trato a este paciente", sino "cómo organizo un sistema para que miles de pacientes reciban buena atención de forma sostenida".',
  claves:['administración en salud','funciones gerenciales','organización hospitalaria'],
  sigue:'planificacion-estrategica-instituciones-salud',
  secciones:[
    {
      t:'Por qué un médico necesita entender administración',
      p:[
        'La *administración en salud* es la disciplina que organiza los recursos -humanos, financieros, materiales- necesarios para que un sistema o una institución de salud funcione de forma efectiva y sostenida; un médico que nunca ocupará un cargo gerencial formal igual se beneficia de entender esta lógica, porque cada decisión clínica ocurre dentro de un sistema con recursos limitados que alguien tuvo que organizar y distribuir.',
        'Entender los principios básicos de administración ayuda a un médico a comprender por qué ciertas decisiones institucionales (turnos, protocolos, restricciones presupuestarias) que a veces parecen arbitrarias o burocráticas desde la práctica clínica diaria, en realidad responden a una lógica de organización de recursos limitados a nivel de todo el sistema, no solo de un paciente individual.'
      ]
    },
    {
      t:'Las funciones gerenciales clásicas',
      p:[
        'Las *funciones gerenciales* clásicas -planificar, organizar, dirigir y controlar- describen el ciclo básico de cualquier proceso administrativo, sin importar el tipo de institución: planificar define hacia dónde se dirige la organización, organizar estructura los recursos disponibles para lograrlo, dirigir coordina a las personas hacia ese objetivo, y controlar verifica si los resultados obtenidos coinciden con lo planificado, ajustando el rumbo cuando sea necesario.',
        'Este ciclo se repite continuamente, no es un proceso lineal que termina una vez completado: los resultados del control retroalimentan directamente una nueva planificación, ajustada con la información aprendida del ciclo anterior -una lógica que, de hecho, comparte similitudes con el proceso de evaluación y ajuste ya visto en el seguimiento longitudinal de un paciente en Medicina Familiar.'
      ]
    },
    {
      t:'La organización hospitalaria como sistema complejo',
      p:[
        'La *organización hospitalaria* es un ejemplo particularmente complejo de administración, porque combina múltiples funciones muy distintas entre sí (atención clínica directa, servicios de apoyo diagnóstico, administración, mantenimiento, servicios generales) que deben coordinarse de forma simultánea y continua, las 24 horas del día, sin interrupciones posibles como las que sí tendría, por ejemplo, una empresa con horario de oficina.',
        'Esta complejidad explica por qué la gestión hospitalaria requiere estructuras organizativas específicas -jerarquías claras de decisión, protocolos estandarizados, sistemas de comunicación entre departamentos- que en organizaciones más simples podrían ser menos formales, sin que eso comprometa su funcionamiento.'
      ],
      foco:[
        '*Consideración clínica*: entender la lógica administrativa detrás de decisiones institucionales que parecen arbitrarias desde la práctica clínica diaria ayuda a un médico a navegar el sistema de forma más efectiva, e incluso a proponer cambios con mejores argumentos.'
      ]
    }
  ],
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 1.'
},

'planificacion-estrategica-instituciones-salud': {
  tema:'Planificación estratégica en instituciones de salud',
  bloque:'Gerencia en Salud', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma la primera de las cuatro funciones gerenciales ya vistas, profundizando en cómo una institución de salud decide, de forma deliberada, hacia dónde dirigir sus recursos limitados en los próximos años.',
  claves:['planificación estratégica','misión y visión institucional'],
  sigue:'gestion-calidad-seguridad-paciente',
  secciones:[
    {
      t:'Por qué planificar más allá del día a día',
      p:[
        'La *planificación estratégica* es el proceso mediante el cual una institución de salud define objetivos de mediano y largo plazo, y las estrategias generales para alcanzarlos, en vez de operar exclusivamente reaccionando a las necesidades inmediatas del día a día -una distinción importante, porque una institución que solo reacciona a lo urgente rara vez logra avances estructurales significativos en la calidad o el alcance de su atención.',
        'Este proceso exige un ejercicio de anticipación: identificar tendencias relevantes (cambios demográficos, nuevas tecnologías, patrones epidemiológicos cambiantes, ya vistos en Salud y Comunidad I) que probablemente afectarán a la institución en los próximos años, y decidir con anticipación cómo prepararse para ellas, en vez de simplemente reaccionar cuando ya sea demasiado tarde para adaptarse con eficacia.'
      ]
    },
    {
      t:'Misión y visión: el propósito y el destino de la institución',
      p:[
        'La *misión institucional* describe el propósito fundamental de la institución -por qué existe, a quién sirve, qué tipo de atención busca ofrecer-, mientras que la visión describe hacia dónde aspira a llegar en el futuro -una imagen concreta de lo que la institución busca ser en un horizonte de tiempo determinado, generalmente varios años hacia adelante.',
        'Estos dos elementos no son solo enunciados formales que se cuelgan en una pared: funcionan como criterio de decisión práctico cuando la institución enfrenta opciones difíciles con recursos limitados -una decisión que se alinea con la misión y la visión declaradas tiene más coherencia estratégica que una decisión puntual y aislada, aunque parezca atractiva en el corto plazo.'
      ]
    },
    {
      t:'De la estrategia general a la acción concreta',
      p:[
        'Una planificación estratégica bien hecha no se queda en declaraciones generales de intención; se traduce en objetivos específicos, medibles y con plazos concretos, que permiten evaluar más adelante si la institución realmente avanzó hacia la dirección planificada o si el plan quedó solo en el papel sin implementación real.',
        'Esta traducción de lo estratégico a lo concreto conecta directamente con el ciclo de las funciones gerenciales ya visto: la planificación estratégica define el "hacia dónde", pero requiere de las otras funciones (organizar, dirigir, controlar) para convertirse en resultados reales y verificables, no solo en una intención bien redactada.'
      ],
      foco:[
        '*Consideración clínica*: una institución sin planificación estratégica clara tiende a distribuir sus recursos limitados de forma reactiva y fragmentada, en vez de dirigirlos deliberadamente hacia las prioridades que más impactarían la calidad de la atención a largo plazo.'
      ]
    }
  ],
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 3.'
},

'gestion-calidad-seguridad-paciente': {
  tema:'Gestión de calidad y seguridad del paciente',
  bloque:'Gerencia en Salud', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma directamente la comunicación interprofesional deficiente ya vista en Relación Médico-Paciente y en Medicina Familiar, pero desde el nivel institucional: qué sistemas se construyen deliberadamente para que un error evitable no dependa solo de la buena voluntad individual.',
  claves:['gestión de calidad','seguridad del paciente','evento adverso prevenible'],
  sigue:'gestion-recursos-humanos-salud',
  secciones:[
    {
      t:'De la buena intención individual a los sistemas de seguridad',
      p:[
        'La *gestión de calidad* en salud busca construir sistemas y procesos que reduzcan la dependencia de la buena voluntad o la atención individual de cada profesional, precisamente porque incluso el profesional más competente y bien intencionado puede cometer un error bajo presión, fatiga, o simple distracción humana -algo que ninguna cantidad de buena voluntad individual puede eliminar por completo sin apoyo sistémico.',
        'Esta lógica retoma directamente el mismo principio ya visto sobre la comunicación interprofesional en Medicina Familiar y en Relación Médico-Paciente: los errores evitables con frecuencia no ocurren por falta de competencia individual, sino por fallas en el sistema que no logró capturar y corregir un error humano antes de que llegara al paciente.'
      ]
    },
    {
      t:'La seguridad del paciente como objetivo institucional explícito',
      p:[
        'La *seguridad del paciente* como objetivo institucional explícito exige sistemas específicos: protocolos estandarizados para procedimientos de alto riesgo (retomando las herramientas de comunicación estructurada ya vistas en Relación Médico-Paciente), listas de verificación antes de procedimientos quirúrgicos, sistemas de doble verificación para medicamentos de alto riesgo, y una cultura institucional que anime a reportar errores sin miedo a represalias, precisamente para poder aprender de ellos y prevenirlos en el futuro.',
        'Esta última condición -una cultura de reporte sin miedo a represalias- es particularmente relevante: un sistema donde reportar un error conlleva castigo genera el incentivo exactamente opuesto al deseado, ocultando información valiosa que podría prevenir errores similares en otros pacientes.'
      ]
    },
    {
      t:'Evento adverso prevenible: distinguir lo evitable de lo inevitable',
      p:[
        'Un *evento adverso prevenible* es un daño causado por la atención médica que razonablemente podría haberse evitado con un sistema mejor diseñado o un proceso mejor seguido, retomando directamente el concepto de daño iatrogénico evitable ya visto en prevención cuaternaria (Medicina Preventiva, 9no) -distinto de una complicación inevitable, que puede ocurrir pese a una atención completamente adecuada, sin ninguna falla real del sistema o del profesional.',
        'Distinguir entre ambos tipos de evento adverso es clínicamente y administrativamente relevante: un evento adverso prevenible exige una investigación institucional para identificar y corregir la falla sistémica subyacente, mientras que una complicación inevitable, aunque igualmente lamentable, no señala necesariamente un fallo del sistema que deba corregirse.'
      ],
      foco:[
        '*Consideración clínica*: una cultura institucional que castiga cualquier error, sin distinguir entre negligencia real y una falla sistémica que cualquier profesional podría haber cometido, desincentiva el reporte honesto y termina perjudicando la seguridad del paciente a largo plazo.'
      ]
    }
  ],
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 8.'
},

'gestion-recursos-humanos-salud': {
  tema:'Gestión de recursos humanos en salud',
  bloque:'Gerencia en Salud', programa:'unirm', cuatri:10, min:13,
  idea:'El recurso más determinante de cualquier institución de salud no es su equipamiento ni su infraestructura, sino las personas que la hacen funcionar día a día -y cuidar de ese recurso humano no es un beneficio opcional, es una necesidad institucional directa.',
  claves:['recursos humanos en salud','clima laboral','burnout del personal de salud'],
  sigue:'indicadores-gestion-hospitalaria',
  secciones:[
    {
      t:'Por qué los recursos humanos son el recurso más crítico',
      p:[
        'La gestión de *recursos humanos en salud* incluye reclutamiento, capacitación continua, distribución de turnos, y evaluación del desempeño del personal, pero su relevancia va más allá de la administración de personal en abstracto: en una institución de salud, la calidad de la atención depende directamente de la calidad, la formación y el estado del personal que la brinda, mucho más que en la mayoría de otras industrias.',
        'Esta dependencia directa explica por qué la gestión de recursos humanos en salud no puede tratarse como un departamento puramente administrativo separado de la calidad clínica: decisiones aparentemente administrativas (número de personal por turno, tiempo entre turnos consecutivos, carga de pacientes por profesional) tienen un impacto clínico directo y medible sobre los resultados de los pacientes.'
      ]
    },
    {
      t:'Clima laboral: el ambiente que sostiene o desgasta al equipo',
      p:[
        'El *clima laboral* -cómo se percibe el ambiente de trabajo por parte del personal: comunicación, reconocimiento, apoyo mutuo, condiciones físicas del entorno- influye directamente en la retención del personal, en su desempeño, y en la calidad de la atención que brinda, retomando directamente el concepto de trabajo en equipo de salud ya visto en Relación Médico-Paciente.',
        'Un clima laboral deteriorado, con comunicación deficiente entre niveles jerárquicos y poco reconocimiento del trabajo realizado, tiende a generar mayor rotación de personal (personal que renuncia y debe reemplazarse, con el costo y la pérdida de experiencia acumulada que eso implica), un ciclo que puede volverse difícil de revertir sin una intervención institucional deliberada.'
      ]
    },
    {
      t:'Burnout del personal de salud: un riesgo real, no una debilidad individual',
      p:[
        'El *burnout del personal de salud* -agotamiento emocional, despersonalización en el trato con los pacientes, y sensación de baja realización personal en el trabajo- es un riesgo ocupacional real y bien documentado en profesiones de alta demanda emocional y física sostenida, no una debilidad individual de quien lo experimenta, retomando directamente la dimensión social de la salud mental ya vista en Salud Mental y Sociedad.',
        'Reconocer el burnout como un riesgo institucional, no solo un problema individual, cambia la conducta apropiada: en vez de esperar que cada profesional maneje su propio agotamiento sin apoyo, la institución tiene un rol activo en diseñar cargas de trabajo razonables, apoyo psicológico disponible, y una cultura que reconozca este riesgo abiertamente, en vez de estigmatizarlo como una falla personal.'
      ],
      foco:[
        '*Consideración clínica*: el burnout del personal de salud no es solo un problema de bienestar individual; tiene un impacto directo y documentado sobre la seguridad del paciente, retomando la conexión ya vista entre el estado del recurso humano y la calidad de la atención.'
      ]
    }
  ],
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 6.'
},

'indicadores-gestion-hospitalaria': {
  tema:'Indicadores de gestión hospitalaria',
  bloque:'Gerencia en Salud', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma directamente la lógica de los indicadores de salud comunitaria ya vista en Salud y Comunidad I, pero aplicada ahora al funcionamiento interno de un hospital: números concretos que permiten saber, de forma objetiva, si la institución está funcionando bien.',
  claves:['indicador de gestión hospitalaria','ocupación de camas','estancia media'],
  sigue:'gestion-financiera-basica-salud',
  secciones:[
    {
      t:'Por qué medir, y no solo asumir que las cosas van bien',
      p:[
        'Un *indicador de gestión hospitalaria* es una medida objetiva y periódica que refleja algún aspecto del funcionamiento de la institución, permitiendo evaluar si está operando de forma eficiente, identificar problemas antes de que se vuelvan crisis mayores, y comparar el desempeño a lo largo del tiempo o contra otras instituciones similares -retomando directamente el mismo principio ya visto sobre los indicadores de salud comunitaria en Salud y Comunidad I.',
        'Sin indicadores medidos de forma sistemática, la gestión hospitalaria dependería de impresiones subjetivas sobre si las cosas "van bien" o "van mal", un criterio mucho menos confiable y mucho más difícil de comparar objetivamente en el tiempo que un número concreto medido de forma consistente.'
      ]
    },
    {
      t:'Ocupación de camas: eficiencia y saturación',
      p:[
        'La *ocupación de camas* mide qué proporción de las camas hospitalarias disponibles están efectivamente ocupadas en un momento dado, un indicador que refleja tanto la eficiencia (una ocupación muy baja sugiere recursos infrautilizados) como el riesgo de saturación (una ocupación excesivamente alta y sostenida sugiere que el hospital está operando cerca de su capacidad máxima, con poco margen ante un aumento súbito de demanda).',
        'Este indicador no tiene un valor "ideal" universal aplicable a cualquier hospital; el nivel óptimo de ocupación varía según el tipo de institución y su función dentro del sistema de salud, pero monitorearlo de forma continua permite anticipar problemas de capacidad antes de que se vuelvan críticos.'
      ]
    },
    {
      t:'Estancia media: eficiencia del proceso de atención',
      p:[
        'La *estancia media* mide el promedio de días que un paciente permanece hospitalizado antes de ser dado de alta, un indicador que refleja indirectamente la eficiencia de los procesos de atención: una estancia media más corta, sin comprometer la calidad ni la seguridad del paciente, generalmente indica procesos más eficientes de diagnóstico, tratamiento y coordinación del alta.',
        'Es importante interpretar este indicador con cuidado: una estancia media artificialmente corta, lograda dando de alta a pacientes antes de que estén realmente listos, no es una mejora real sino un riesgo de reingreso hospitalario poco después -el objetivo no es simplemente reducir el número, sino optimizar el proceso sin comprometer la calidad de la atención.'
      ],
      foco:[
        '*Consideración clínica*: los indicadores de gestión hospitalaria deben interpretarse siempre en conjunto y con criterio clínico, no de forma aislada; optimizar un solo número sin considerar su impacto en la calidad real de la atención puede generar mejoras aparentes que en realidad empeoran los resultados para el paciente.'
      ]
    }
  ],
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 10.'
},

'gestion-financiera-basica-salud': {
  tema:'Gestión financiera básica en salud',
  bloque:'Gerencia en Salud', programa:'unirm', cuatri:10, min:13,
  idea:'Retoma directamente el sistema de financiamiento ya visto en el sistema de salud dominicano (Salud y Comunidad I), pero desde la perspectiva de una institución individual: cómo se organizan y distribuyen los recursos financieros limitados dentro de un hospital o centro de salud.',
  claves:['presupuesto en salud','costo por proceso hospitalario'],
  sigue:'liderazgo-trabajo-equipo-directivo',
  secciones:[
    {
      t:'El presupuesto como herramienta de planificación, no solo de control',
      p:[
        'El *presupuesto en salud* de una institución no es solo un documento de control financiero retrospectivo; es una herramienta de planificación que traduce en términos financieros concretos las prioridades estratégicas ya definidas en la planificación estratégica -asignar más presupuesto a un área específica es, en la práctica, una declaración concreta de que esa área es una prioridad institucional real, más allá de lo que digan los documentos de misión y visión.',
        'Esta conexión entre presupuesto y estrategia explica por qué la elaboración presupuestaria es, en el fondo, un ejercicio de decisiones difíciles: los recursos financieros de cualquier institución de salud son limitados, así que destinar más a un área implica, casi inevitablemente, destinar menos a otra, exigiendo priorizar con criterio explícito.'
      ]
    },
    {
      t:'El costo por proceso hospitalario: entender qué cuesta realmente atender',
      p:[
        'El *costo por proceso hospitalario* estima cuánto cuesta realmente, en recursos financieros, brindar un servicio específico de atención -desde una consulta ambulatoria simple hasta una cirugía compleja con hospitalización prolongada-, considerando no solo los insumos directos usados, sino también el costo del personal, la infraestructura, y los servicios de apoyo involucrados.',
        'Conocer este costo real permite tomar decisiones informadas sobre cómo asignar recursos limitados: sin esta información, una institución podría, sin saberlo, estar subsidiando de forma insostenible ciertos servicios con los ingresos generados por otros, una situación que eventualmente compromete la sostenibilidad financiera de toda la institución si no se identifica y corrige a tiempo.'
      ]
    },
    {
      t:'Por qué esta información importa incluso para quien no gestiona presupuestos',
      p:[
        'Un médico clínico, sin responsabilidad directa sobre el presupuesto institucional, igual se beneficia de entender esta lógica financiera básica: decisiones clínicas rutinarias -qué estudios solicitar, qué insumos usar, cuánto tiempo de hospitalización es realmente necesario- tienen un impacto financiero real sobre la institución, que a su vez determina qué recursos estarán disponibles en el futuro para atender a otros pacientes.',
        'Esta conciencia financiera básica no debe confundirse con priorizar el costo sobre la calidad de la atención individual de un paciente concreto; se trata más bien de reconocer que los recursos institucionales son un bien compartido y limitado, cuyo uso responsable en cada caso individual sostiene la capacidad de atender bien a todos los demás pacientes también.'
      ],
      foco:[
        '*Consideración clínica*: entender el costo real de los procesos hospitalarios no debería llevar a racionar innecesariamente la atención de un paciente individual, sino a usar los recursos de forma responsable, reconociendo que son un bien institucional compartido y limitado.'
      ]
    }
  ],
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 12.'
},

'liderazgo-trabajo-equipo-directivo': {
  tema:'Liderazgo y trabajo en equipo directivo',
  bloque:'Gerencia en Salud', programa:'unirm', cuatri:10, min:14,
  idea:'Cierra el bloque de Gerencia en Salud con la pregunta más humana de todas: cómo se logra que un grupo de profesionales, cada uno con su propia formación y perspectiva, trabaje coordinadamente hacia un objetivo institucional común.',
  claves:['liderazgo en salud','toma de decisiones gerenciales'],
  sigue:'programas-salud-comunitaria-avanzados',
  secciones:[
    {
      t:'Liderazgo en salud: más allá de la autoridad jerárquica formal',
      p:[
        'El *liderazgo en salud* no se reduce a ocupar un cargo jerárquico formal de dirección; un liderazgo efectivo en el contexto sanitario implica la capacidad de inspirar y coordinar a un equipo diverso -médicos, enfermería, personal administrativo, cada uno con su propia perspectiva profesional y sus propias prioridades- hacia objetivos institucionales compartidos, retomando directamente la lógica del trabajo en equipo de salud ya vista en Relación Médico-Paciente, pero ahora a nivel directivo.',
        'Un líder con autoridad jerárquica formal pero sin la capacidad real de generar confianza y coordinación efectiva entre su equipo logra, con frecuencia, un cumplimiento superficial de sus indicaciones, sin el compromiso genuino que sí logra un liderazgo que combina autoridad formal con habilidades reales de comunicación y coordinación.'
      ]
    },
    {
      t:'Toma de decisiones gerenciales: bajo incertidumbre y con recursos limitados',
      p:[
        'La *toma de decisiones gerenciales* en salud con frecuencia ocurre bajo condiciones de incertidumbre real (información incompleta sobre el futuro, recursos limitados, múltiples prioridades legítimas compitiendo entre sí), exigiendo un balance similar al ya visto en la farmacoterapia racional: sopesar beneficios y riesgos de cada opción disponible, sin la certeza absoluta de cuál es la decisión "correcta" en abstracto.',
        'Una decisión gerencial bien tomada no es necesariamente la que resulta perfecta en retrospectiva -algo imposible de garantizar de antemano-, sino la que se basó en la mejor información disponible en ese momento, consideró de forma explícita las alternativas razonables, e involucró a las personas relevantes en el proceso, en vez de tomarse de forma aislada y sin consulta.'
      ]
    },
    {
      t:'El cierre del bloque: la administración como parte de la práctica médica',
      p:[
        'Este tema cierra el bloque completo de Gerencia en Salud retomando su idea inicial: la administración en salud no es un campo ajeno a la práctica clínica, reservado exclusivamente para quienes ocupan cargos directivos formales, sino una dimensión que atraviesa toda la atención médica, desde la distribución de recursos hasta la coordinación del equipo que hace posible que esa atención llegue efectivamente al paciente.',
        'Un médico que entiende esta dimensión administrativa -aunque nunca ocupe un cargo gerencial formal- está mejor preparado para navegar el sistema de salud en el que ejercerá, para colaborar efectivamente con el equipo directivo de su institución, y para participar, cuando corresponda, en decisiones que van más allá del caso clínico individual pero que afectan directamente la calidad de la atención que él mismo puede ofrecer.'
      ],
      foco:[
        'Este tema cierra el bloque de Gerencia en Salud retomando su idea inicial: la administración en salud atraviesa toda la práctica médica, no es un campo ajeno reservado solo para cargos directivos formales.'
      ]
    }
  ],
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 15.'
}

});
