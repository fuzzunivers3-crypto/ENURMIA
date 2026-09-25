/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 18)
   Reescribe RELACION MEDICO-PACIENTE al estandar extenso (3
   secciones, ~200-300 palabras por seccion, min 13-14). Sustituye
   el contenido corto de los mismos 7 temas en unirm-09-apuntes.js
   y unirm-09-apuntes-9.js (mismas claves, no se agregan temas
   nuevos). Cierra el bloque hacia Salud y Comunidad I.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'consentimiento-informado': {
  tema:'Consentimiento informado',
  bloque:'Relación Médico-Paciente', programa:'unirm', cuatri:9, min:13,
  idea:'El consentimiento informado no es el papel que se firma antes de una cirugía: es un PROCESO de conversación, y el papel firmado es solo la evidencia de que ese proceso ocurrió. Confundir el papel con el proceso es el error más frecuente en este tema.',
  claves:['consentimiento informado','autonomía del paciente','capacidad para decidir'],
  sigue:'comunicacion-malas-noticias',
  secciones:[
    {
      t:'Qué elementos tiene que tener, de verdad',
      p:[
        'El consentimiento informado descansa sobre el principio de *autonomía*: el paciente tiene derecho a decidir qué se hace con su propio cuerpo, y para decidir de verdad necesita información suficiente. Para que un consentimiento sea válido, tienen que cumplirse varios elementos a la vez: que el paciente reciba información comprensible sobre el procedimiento, sus beneficios esperados, sus riesgos y las alternativas disponibles (incluida la alternativa de no hacer nada); que el paciente tenga *capacidad para decidir* (entender la información, valorarla y comunicar una decisión); que la decisión sea voluntaria, sin coacción; y que quede expresada de forma clara.',
        'Ejemplo trabajado: pedirle a un paciente que firme un formulario en el pasillo, treinta segundos antes de entrar a cirugía, sin haber explicado antes los riesgos ni las alternativas, no es consentimiento informado válido, aunque exista una firma. El documento firmado registra que la conversación ocurrió; no la reemplaza -si la conversación nunca ocurrió, el documento es, en el fondo, una formalidad vacía sin el respaldo ético que se supone que representa.'
      ]
    },
    {
      t:'Cuándo NO se necesita, y por qué esas excepciones tienen sentido',
      p:[
        'Hay situaciones donde el proceso completo no es exigible, y todas comparten una misma lógica: proteger al paciente cuando pedir el consentimiento de la forma habitual sería imposible o le haría más daño que bien. La más clara es la *emergencia* que pone en riesgo inmediato la vida, cuando el paciente no puede expresar su voluntad (está inconsciente, por ejemplo) y no hay un representante disponible: se actúa bajo el principio de que una persona razonable, en esa situación, habría querido ser tratada.',
        'Otras excepciones reconocidas son el rechazo válido del propio paciente informado (que también es parte de su autonomía: tiene derecho a decir que no, incluso si esa decisión parece equivocada desde la perspectiva médica) y, en menor de edad o adulto sin capacidad para decidir, el consentimiento lo otorga un representante legal -salvo, de nuevo, la emergencia vital inmediata, donde actuar no puede esperar a localizar a ese representante.'
      ]
    },
    {
      t:'La capacidad para decidir: específica, no global',
      p:[
        'La capacidad para decidir no es todo o nada ni depende solo del diagnóstico: un paciente con una enfermedad psiquiátrica puede tener plena capacidad para decidir sobre un procedimiento concreto, y un paciente sin ningún diagnóstico psiquiátrico puede, en cambio, no comprender la información que se le está dando en un momento específico -por ejemplo, por el efecto de un sedante o el impacto emocional agudo de una noticia reciente.',
        'Se evalúa la capacidad para ESA decisión concreta, en ESE momento, no la persona en abstracto: un mismo paciente puede tener capacidad para decidir sobre un tratamiento sencillo y, simultáneamente, carecer de la capacidad necesaria para comprender las implicaciones de una decisión mucho más compleja, sin que esto sea contradictorio.'
      ],
      foco:[
        '*Consideración clínica*: evaluar la capacidad para decidir exige preguntarse específicamente si el paciente entiende, valora y puede comunicar una decisión sobre ESTA situación concreta -no asumir capacidad o incapacidad de forma genérica basada en el diagnóstico o la edad del paciente.'
      ]
    }
  ],
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 4.'
},

'comunicacion-malas-noticias': {
  tema:'Comunicación de malas noticias',
  bloque:'Relación Médico-Paciente', programa:'unirm', cuatri:9, min:13,
  idea:'Dar una mala noticia bien no es un talento innato que algunos médicos tienen y otros no: es una habilidad con una estructura enseñable, y seguir esa estructura reduce mucho el daño adicional que una mala comunicación puede sumarle a una noticia que, de por sí, ya es dolorosa.',
  claves:['malas noticias','protocolo SPIKES','empatía clínica'],
  sigue:'confidencialidad-secreto-profesional',
  secciones:[
    {
      t:'El protocolo SPIKES: una estructura, no un guion rígido',
      p:[
        'El protocolo SPIKES organiza la comunicación de *malas noticias* en seis pasos: preparar el entorno adecuado (Setting, buscando privacidad y tiempo suficiente, sin interrupciones), explorar qué sabe ya el paciente sobre su situación (Perception), preguntar qué tanto quiere saber en ese momento (Invitation, respetando que no todos quieren la misma cantidad de detalle de una vez), dar la información en sí (Knowledge, con lenguaje claro y sin tecnicismos innecesarios), responder a las emociones que surjan con *empatía clínica* (Emotions), y finalmente resumir y planificar los próximos pasos (Strategy/Summary).',
        'No es un guion que se recita palabra por palabra: es una secuencia lógica que evita dos errores comunes y opuestos -dar la noticia de forma tan brusca que el paciente no tiene tiempo de prepararse mentalmente, o rodearla tanto de rodeos y eufemismos que el paciente termina más confundido que informado sobre lo que realmente está pasando con su salud.'
      ]
    },
    {
      t:'Por qué el orden de los pasos importa',
      p:[
        'Explorar primero qué sabe el paciente (Perception) evita repetir información que ya tiene, o -más importante- revela si el paciente tiene una idea equivocada que hay que corregir antes de construir sobre ella; dar información nueva sobre una base incorrecta puede generar más confusión que claridad. Preguntar cuánto quiere saber (Invitation) respeta la autonomía del paciente, retomando directamente el principio ya visto en consentimiento informado: no todos, en el mismo momento, quieren el mismo nivel de detalle, y forzar información no deseada puede ser tan dañino como ocultarla.',
        'Dar la información (Knowledge) recién en este punto, después de haber explorado la percepción previa y la disposición del paciente a recibirla, asegura que el mensaje llegue a un terreno preparado, en vez de caer de forma abrupta sobre un paciente que no sabía qué esperar de la conversación.'
      ]
    },
    {
      t:'La empatía como paso activo, no pasivo',
      p:[
        'La empatía clínica en este contexto no es solo "ser amable": es reconocer explícitamente la emoción que el paciente muestra (silencio, llanto, enojo) antes de continuar con más información, dándole espacio a esa reacción en vez de avanzar como si no hubiera ocurrido -nombrar la emoción ("veo que esto es muy difícil de escuchar") valida la experiencia del paciente y suele facilitar, no retrasar, el resto de la conversación.',
        'Saltarse este paso -pasar directamente de dar la información al plan de tratamiento, sin pausa para la reacción emocional- es uno de los errores más frecuentes en la comunicación de malas noticias, incluso entre profesionales con buenas intenciones, porque la incomodidad de sentarse con la emoción del paciente empuja a "resolver" rápido en vez de acompañar.'
      ],
      foco:[
        '*Consideración clínica*: la empatía clínica en el protocolo SPIKES no es un paso opcional de "buenos modales"; es un paso funcional que determina si el resto de la información dada será procesada y retenida por el paciente, o se perderá en medio del impacto emocional no reconocido.'
      ]
    }
  ],
  ref:'Baile et al., SPIKES: A Six-Step Protocol.'
},

'confidencialidad-secreto-profesional': {
  tema:'Confidencialidad y secreto profesional',
  bloque:'Relación Médico-Paciente', programa:'unirm', cuatri:9, min:13,
  idea:'La confidencialidad médica no es un principio absoluto sin excepciones: es la regla general, con un número pequeño y bien definido de situaciones donde romperla está justificado, precisamente porque no romperla causaría un daño mayor.',
  claves:['confidencialidad','secreto profesional','ruptura justificada'],
  sigue:'principios-bioetica-medica',
  secciones:[
    {
      t:'Por qué existe el secreto profesional',
      p:[
        'La confidencialidad (o secreto profesional) protege la información que un paciente comparte con su médico, y su justificación no es solo un formalismo legal: sin la confianza de que esa información se mantendrá privada, muchos pacientes ocultarían datos relevantes para su propio diagnóstico y tratamiento (uso de sustancias, comportamiento sexual, enfermedades estigmatizadas), comprometiendo la calidad de la atención que reciben.',
        'Es, en ese sentido, un principio que protege tanto al paciente individual como la eficacia general del sistema de salud: si la confidencialidad fuera poco confiable, el efecto no se limitaría al paciente concreto que oculta información en ese momento, sino que erosionaría la confianza general de la población hacia el sistema de salud como institución.'
      ]
    },
    {
      t:'Cuándo romperla está justificado',
      p:[
        'Una ruptura justificada de la confidencialidad ocurre en situaciones específicas y bien delimitadas: cuando existe un riesgo real e inminente para la vida del propio paciente o de terceros identificables (por ejemplo, una amenaza creíble y concreta hacia otra persona), cuando la ley exige explícitamente reportar cierta información (como algunas enfermedades de notificación obligatoria, ya vistas en Epidemiología, o el maltrato infantil), o cuando el propio paciente da su consentimiento explícito para compartir su información con alguien más.',
        'Fuera de estas excepciones bien definidas, la confidencialidad se mantiene incluso frente a familiares cercanos del paciente adulto y competente, que no tienen, por sí mismos, derecho automático a acceder a su información médica sin el consentimiento del paciente -un punto que sorprende a muchos estudiantes, que asumen erróneamente que un familiar cercano siempre tiene ese derecho.'
      ]
    },
    {
      t:'El criterio para decidir en la duda',
      p:[
        'Ante la duda de si una situación específica justifica romper la confidencialidad, la pregunta central es si el riesgo de NO compartir la información es mayor y más concreto que el daño de romper la confianza del paciente -no una decisión que se toma a la ligera, ni una que se evita sistemáticamente por incomodidad de tomarla.',
        'Este criterio explica por qué las excepciones reconocidas son deliberadamente estrechas: ampliarlas más allá de lo necesario erosionaría la confianza general en la confidencialidad médica, mientras que no aplicarlas cuando realmente corresponde puede tener consecuencias graves y evitables para terceros identificables.'
      ],
      foco:[
        '*Consideración clínica*: ante la duda de si una situación justifica romper la confidencialidad, la pregunta central es si el riesgo de NO compartir la información es mayor y más concreto que el daño de romper la confianza del paciente.'
      ]
    }
  ],
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 6.'
},

'principios-bioetica-medica': {
  tema:'Principios de bioética médica',
  bloque:'Relación Médico-Paciente', programa:'unirm', cuatri:9, min:14,
  idea:'Estos cuatro principios no forman una jerarquía fija donde uno siempre gana sobre los demás: la bioética clínica real consiste, con frecuencia, en sopesarlos entre sí caso por caso, porque en la práctica a veces entran en tensión unos con otros.',
  claves:['autonomía','beneficencia','no maleficencia','justicia'],
  sigue:'entrevista-clinica-centrada-paciente',
  secciones:[
    {
      t:'Los cuatro principios clásicos',
      p:[
        'La *autonomía*, ya vista con detalle en consentimiento informado, es el derecho del paciente a tomar sus propias decisiones informadas sobre su cuerpo y su atención. La *beneficencia* es la obligación de actuar buscando activamente el bienestar del paciente, más allá de simplemente no perjudicarlo. La *no maleficencia* (el principio clásico "primero no hacer daño") es la obligación de no causar daño innecesario, incluso al intentar ayudar -distinta de la beneficencia porque exige, además de buscar el bien, evitar activamente el mal, incluso cuando la intención original era ayudar.',
        'La *justicia* es la obligación de distribuir los recursos de salud, y de tratar a los pacientes, de forma equitativa, sin discriminación injustificada por ninguna característica que no sea clínicamente relevante para la decisión que se está tomando.'
      ]
    },
    {
      t:'Cuando los principios entran en tensión',
      p:[
        'Ejemplo trabajado: un paciente competente rechaza un tratamiento que el equipo médico considera claramente beneficioso (tensión entre autonomía y beneficencia). La bioética moderna, en general, da un peso considerable a la autonomía del paciente competente: el derecho a decidir sobre el propio cuerpo, incluso rechazando un tratamiento recomendado, prevalece sobre el juicio del médico sobre lo que sería mejor para él, siempre que el paciente esté adecuadamente informado y tenga capacidad para decidir (retomando el concepto ya visto en consentimiento informado).',
        'Otro ejemplo: decidir cómo distribuir un recurso escaso (como camas de cuidados intensivos en una situación de sobrecarga) pone directamente en juego el principio de justicia, exigiendo criterios explícitos y equitativos, no decisiones arbitrarias caso por caso basadas en preferencias personales del equipo médico.'
      ]
    },
    {
      t:'El marco teórico detrás de todo el bloque',
      p:[
        'Este tema es, en cierto sentido, el marco teórico que sostiene a todos los demás temas de este bloque: el consentimiento informado es la autonomía en la práctica; la confidencialidad protege la confianza necesaria para la beneficencia; la comunicación de malas noticias intenta minimizar el daño (no maleficencia) al dar información necesaria de la forma menos dañina posible.',
        'Reconocer esta conexión ayuda a entender por qué los temas de este bloque no son una lista de reglas sueltas de "buenos modales" médicos, sino aplicaciones concretas de un mismo marco ético coherente, aplicado a distintas situaciones de la práctica clínica cotidiana.'
      ],
      foco:[
        '*Consideración clínica*: ante una tensión real entre principios, el ejercicio bioético correcto no es aplicar automáticamente una jerarquía fija, sino sopesar explícitamente qué principio pesa más en ese caso concreto, considerando el contexto específico del paciente.'
      ]
    }
  ],
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 3-7.'
},

'entrevista-clinica-centrada-paciente': {
  tema:'Entrevista clínica centrada en el paciente',
  bloque:'Relación Médico-Paciente', programa:'unirm', cuatri:9, min:13,
  idea:'Este tema retoma, desde la comunicación, la misma anamnesis ya vista en Semiología Clínica: la diferencia entre una entrevista centrada en la enfermedad y una centrada en el paciente no está en QUÉ preguntas se hacen, sino en CÓMO se hacen y qué espacio se le da a la respuesta.',
  claves:['entrevista clínica','escucha activa','pregunta abierta'],
  sigue:'manejo-paciente-dificil',
  secciones:[
    {
      t:'Preguntas abiertas antes que cerradas',
      p:[
        'Una pregunta abierta ("cuénteme qué le está pasando") invita al paciente a describir su experiencia con sus propias palabras, sin limitar de antemano qué información puede compartir -retomando directamente el principio ya visto en la anamnesis de Semiología Clínica, de dejar hablar primero al paciente antes de dirigir con preguntas cerradas específicas.',
        'Empezar la entrevista clínica con preguntas abiertas, y reservar las preguntas cerradas ("¿el dolor es punzante o sordo?") para completar detalles específicos después, suele revelar información que una entrevista completamente dirigida desde el inicio pasaría por alto -el paciente, dejado hablar libremente, a veces menciona un dato que el médico ni siquiera había pensado en preguntar directamente.'
      ]
    },
    {
      t:'Escucha activa: más que simplemente oír',
      p:[
        'La escucha activa implica prestar atención completa a lo que el paciente dice (y a lo que no dice, o dice con dudas), reflejar de vuelta lo entendido para confirmar que se comprendió correctamente, y permitir silencios y pausas sin apresurarse a llenarlos -el paciente, con frecuencia, necesita ese espacio para organizar y terminar de expresar algo importante que le cuesta poner en palabras.',
        'Reflejar lo entendido ("entonces, si le comprendo bien, el dolor empezó hace tres días y ha ido empeorando") no es solo una técnica de comunicación: también sirve como verificación activa, permitiendo que el paciente corrija cualquier malentendido antes de que la entrevista avance sobre una base incorrecta.'
      ]
    },
    {
      t:'El error más común: interrumpir demasiado pronto',
      p:[
        'Interrumpir al paciente demasiado pronto en la entrevista -los estudios sobre esto muestran que ocurre, en promedio, en segundos, no en minutos, desde que el paciente empieza a hablar- es uno de los errores más comunes y más fáciles de corregir en la práctica clínica cotidiana, aunque con frecuencia el profesional ni siquiera es consciente de estarlo haciendo.',
        'Esta interrupción temprana no solo frustra al paciente; también tiene un costo clínico real, porque corta la narrativa espontánea justo quando podría estar por revelar información relevante que una pregunta dirigida no habría capturado de la misma forma.'
      ],
      foco:[
        '*Consideración clínica*: interrumpir al paciente demasiado pronto en la entrevista es uno de los errores más comunes y más fáciles de corregir en la práctica clínica cotidiana, con un costo real sobre la calidad de la información obtenida.'
      ]
    }
  ],
  ref:'Argente y Álvarez, Semiología Médica, cap. 1.'
},

'manejo-paciente-dificil': {
  tema:'Manejo del paciente difícil',
  bloque:'Relación Médico-Paciente', programa:'unirm', cuatri:9, min:13,
  idea:'Un paciente "difícil" casi nunca lo es por capricho: con frecuencia, la dificultad en la interacción es la manifestación visible de miedo, dolor no controlado, una mala experiencia previa con el sistema de salud, o una barrera de comunicación que el propio profesional puede ayudar a resolver.',
  claves:['paciente conflictivo','desescalada verbal','entrevista motivacional'],
  sigue:'trabajo-equipo-salud',
  secciones:[
    {
      t:'Entender antes de reaccionar',
      p:[
        'Un paciente conflictivo (hostil, exigente, poco colaborador) genera, de forma natural, una respuesta defensiva en el profesional de salud, pero reaccionar solo a la conducta visible sin buscar su causa suele empeorar la interacción, convirtiendo un problema resoluble en una confrontación que no beneficia a nadie.',
        'Con frecuencia, detrás de la conducta difícil hay miedo (a un diagnóstico grave, a perder el control de la situación), dolor mal controlado, o desconfianza acumulada por experiencias previas negativas con el sistema de salud -identificar esa causa subyacente cambia por completo cómo abordar la situación, pasando de una postura defensiva a una exploratoria.'
      ]
    },
    {
      t:'Desescalada verbal',
      p:[
        'La desescalada verbal es un conjunto de técnicas de comunicación (tono de voz calmado, validar la emoción del paciente antes de intentar corregir su conducta, ofrecer opciones dentro de lo posible) diseñadas para reducir la tensión de una interacción difícil, sin recurrir a la confrontación ni a la sumisión pasiva.',
        'Validar la emoción antes de abordar la conducta -"entiendo que esta espera lo tiene muy frustrado" antes de explicar por qué la espera es necesaria- suele reducir la tensión mucho más eficazmente que ignorar la emoción y saltar directamente a la justificación o la corrección de la conducta.'
      ]
    },
    {
      t:'Entrevista motivacional para el cambio de comportamiento',
      p:[
        'La entrevista motivacional es una técnica más específica, útil sobre todo cuando el paciente muestra resistencia a un cambio de comportamiento necesario (dejar de fumar, adherirse a un tratamiento): en vez de imponer directamente la recomendación, explora la propia ambivalencia del paciente y le ayuda a encontrar SUS propias razones para el cambio, retomando el concepto ya visto de que solo informar rara vez basta para cambiar un comportamiento.',
        'Un paciente que parece "no cooperar" con su tratamiento, antes de etiquetarlo como difícil, merece que se investigue si entendió bien las indicaciones, si tiene los recursos para seguirlas (retomando los determinantes sociales de la salud que se desarrollan en el siguiente bloque), o si hay una razón de fondo no explorada todavía.'
      ],
      foco:[
        '*Consideración clínica*: un paciente que parece "no cooperar" con su tratamiento, antes de etiquetarlo como difícil, merece que se investigue la causa subyacente real, en vez de asumir simplemente falta de voluntad o mala disposición.'
      ]
    }
  ],
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 8.'
},

'trabajo-equipo-salud': {
  tema:'Trabajo en equipo de salud',
  bloque:'Relación Médico-Paciente', programa:'unirm', cuatri:9, min:13,
  idea:'Este último tema del bloque cierra recordando que la relación médico-paciente, aunque central, no ocurre en aislamiento: la atención real de un paciente casi siempre involucra a un equipo completo, y la comunicación DENTRO de ese equipo puede ser tan determinante para la seguridad del paciente como la comunicación con él.',
  claves:['equipo multidisciplinario','comunicación interprofesional','seguridad del paciente'],
  sigue:'determinantes-sociales-salud',
  secciones:[
    {
      t:'Un equipo, no un solo profesional',
      p:[
        'La atención de un paciente, especialmente en un caso complejo o en un entorno hospitalario, involucra típicamente a un equipo multidisciplinario: médicos de distintas especialidades, enfermería, personal de laboratorio y otros profesionales de salud, cada uno aportando una perspectiva y una función distinta, pero coordinada hacia un mismo objetivo de atención para ese paciente.',
        'Esta coordinación no ocurre de forma automática: requiere estructuras explícitas (rondas conjuntas, formatos compartidos de registro, canales claros de comunicación) que permitan que la información relevante fluya entre los distintos miembros del equipo sin depender de la buena voluntad individual de cada uno.'
      ]
    },
    {
      t:'Por qué la comunicación entre profesionales afecta la seguridad',
      p:[
        'La comunicación interprofesional deficiente -una indicación mal transmitida entre un turno y otro, una nota clínica ambigua (retomando la importancia del registro claro ya visto en Semiología Clínica), una duda no aclarada por jerarquía o por falta de tiempo- es una causa reconocida y evitable de errores médicos, afectando directamente la seguridad del paciente.',
        'Herramientas estructuradas de comunicación (como formatos estandarizados para transferir información entre turnos o entre profesionales) buscan reducir precisamente este tipo de error, asegurando que la información crítica no se pierda en la transición de un profesional a otro -un problema tan frecuente que ha generado protocolos específicos diseñados solo para prevenirlo.'
      ]
    },
    {
      t:'El cierre del bloque: la ética del cuidado en equipo',
      p:[
        'Este tema cierra el bloque completo de Relación Médico-Paciente ampliando su enfoque: todo lo visto -consentimiento informado, confidencialidad, bioética, comunicación de malas noticias, manejo de un paciente difícil- ocurre dentro de un sistema de atención en equipo, y la calidad de ese trabajo en equipo es, en sí misma, parte de la ética del cuidado, no un aspecto meramente logístico separado de la ética clínica.',
        'Reconocer esto tiene una implicación práctica: un profesional puede ser excelente individualmente en su relación con cada paciente, y aun así comprometer la seguridad de esos mismos pacientes si su comunicación con el resto del equipo es deficiente -la ética del cuidado no se agota en la díada médico-paciente.'
      ],
      foco:[
        'Este tema cierra el bloque completo de Relación Médico-Paciente ampliando su enfoque: todo lo visto ocurre dentro de un sistema de atención en equipo, y la calidad de ese trabajo en equipo es, en sí misma, parte de la ética del cuidado.'
      ]
    }
  ],
  ref:'OMS, Marco de competencias para la práctica interprofesional.'
}

});
