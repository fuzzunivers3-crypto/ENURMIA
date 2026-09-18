/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 9)
   Termina de cubrir RELACION MEDICO-PACIENTE por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'comunicacion-malas-noticias': {
  tema:'Comunicación de malas noticias',
  bloque:'Relación Médico-Paciente', programa:'unirm', cuatri:9, min:7,
  idea:'Dar una mala noticia bien no es un talento innato que algunos médicos tienen y otros no: es una habilidad con una estructura enseñable, y seguir esa estructura reduce mucho el daño adicional que una mala comunicación puede sumarle a una noticia que, de por sí, ya es dolorosa.',
  claves:['malas noticias','protocolo SPIKES','empatía clínica'],
  sigue:'confidencialidad-secreto-profesional',
  secciones:[
    {
      t:'El protocolo SPIKES: una estructura, no un guion rígido',
      p:[
        'El *protocolo SPIKES* organiza la comunicación de *malas noticias* en seis pasos: preparar el entorno adecuado (Setting), explorar qué sabe ya el paciente sobre su situación (Perception), preguntar qué tanto quiere saber en ese momento (Invitation, respetando que no todos quieren la misma cantidad de detalle de una vez), dar la información en sí (Knowledge), responder a las emociones que surjan con *empatía clínica* (Emotions), y finalmente resumir y planificar los próximos pasos (Strategy/Summary).',
        'No es un guion que se recita palabra por palabra: es una secuencia lógica que evita dos errores comunes y opuestos —dar la noticia de forma tan brusca que el paciente no tiene tiempo de prepararse mentalmente, o rodearla tanto que el paciente termina más confundido que informado sobre lo que realmente está pasando.'
      ]
    },
    {
      t:'Por qué el orden de los pasos importa',
      p:[
        'Explorar primero qué sabe el paciente (Perception) evita repetir información que ya tiene, o —más importante— revela si el paciente tiene una idea equivocada que hay que corregir antes de construir sobre ella. Preguntar cuánto quiere saber (Invitation) respeta la autonomía del paciente, retomando directamente el principio ya visto en consentimiento informado: no todos, en el mismo momento, quieren el mismo nivel de detalle, y forzar información no deseada puede ser tan dañino como ocultarla.'
      ],
      foco:[
        'La *empatía clínica* en este contexto no es solo "ser amable": es reconocer explícitamente la emoción que el paciente muestra (silencio, llanto, enojo) antes de continuar con más información, dándole espacio a esa reacción en vez de avanzar como si no hubiera ocurrido.'
      ]
    }
  ],
  ref:'Baile et al., SPIKES: A Six-Step Protocol.'
},

'confidencialidad-secreto-profesional': {
  tema:'Confidencialidad y secreto profesional',
  bloque:'Relación Médico-Paciente', programa:'unirm', cuatri:9, min:6,
  idea:'La confidencialidad médica no es un principio absoluto sin excepciones: es la regla general, con un número pequeño y bien definido de situaciones donde romperla está justificado, precisamente porque no romperla causaría un daño mayor.',
  claves:['confidencialidad','secreto profesional','ruptura justificada'],
  sigue:'principios-bioetica-medica',
  secciones:[
    {
      t:'Por qué existe el secreto profesional',
      p:[
        'La *confidencialidad* (o *secreto profesional*) protege la información que un paciente comparte con su médico, y su justificación no es solo un formalismo legal: sin la confianza de que esa información se mantendrá privada, muchos pacientes ocultarían datos relevantes para su propio diagnóstico y tratamiento (uso de sustancias, comportamiento sexual, enfermedades estigmatizadas), comprometiendo la calidad de la atención que reciben. Es, en ese sentido, un principio que protege tanto al paciente individual como la eficacia general del sistema de salud.'
      ]
    },
    {
      t:'Cuándo romperla está justificado',
      p:[
        'Una *ruptura justificada* de la confidencialidad ocurre en situaciones específicas y bien delimitadas: cuando existe un riesgo real e inminente para la vida del propio paciente o de terceros identificables (por ejemplo, una amenaza creíble y concreta hacia otra persona), cuando la ley exige explícitamente reportar cierta información (como algunas enfermedades de notificación obligatoria, ya vistas en Epidemiología, o el maltrato infantil), o cuando el propio paciente da su consentimiento explícito para compartir su información con alguien más.',
        'Fuera de estas excepciones bien definidas, la confidencialidad se mantiene incluso frente a familiares cercanos del paciente adulto y competente, que no tienen, por sí mismos, derecho automático a acceder a su información médica sin el consentimiento del paciente.'
      ],
      foco:[
        'Consideración práctica: ante la duda de si una situación justifica romper la confidencialidad, la pregunta central es si el riesgo de NO compartir la información es mayor y más concreto que el daño de romper la confianza del paciente —no una decisión que se toma a la ligera.'
      ]
    }
  ],
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 6.'
},

'principios-bioetica-medica': {
  tema:'Principios de bioética médica',
  bloque:'Relación Médico-Paciente', programa:'unirm', cuatri:9, min:8,
  idea:'Estos cuatro principios no forman una jerarquía fija donde uno siempre gana sobre los demás: la bioética clínica real consiste, con frecuencia, en sopesarlos entre sí caso por caso, porque en la práctica a veces entran en tensión unos con otros.',
  claves:['autonomía','beneficencia','no maleficencia','justicia'],
  sigue:'entrevista-clinica-centrada-paciente',
  secciones:[
    {
      t:'Los cuatro principios clásicos',
      p:[
        'La *autonomía*, ya vista con detalle en consentimiento informado, es el derecho del paciente a tomar sus propias decisiones informadas sobre su cuerpo y su atención. La *beneficencia* es la obligación de actuar buscando activamente el bienestar del paciente. La *no maleficencia* (el principio clásico "primero no hacer daño") es la obligación de no causar daño innecesario, incluso al intentar ayudar —distinta de la beneficencia porque exige, además de buscar el bien, evitar activamente el mal. La *justicia* es la obligación de distribuir los recursos de salud, y de tratar a los pacientes, de forma equitativa, sin discriminación injustificada.'
      ]
    },
    {
      t:'Cuando los principios entran en tensión',
      p:[
        'Ejemplo trabajado: un paciente competente rechaza un tratamiento que el equipo médico considera claramente beneficioso (tensión entre autonomía y beneficencia). La bioética moderna, en general, da un peso considerable a la autonomía del paciente competente: el derecho a decidir sobre el propio cuerpo, incluso rechazando un tratamiento recomendado, prevalece sobre el juicio del médico sobre lo que sería mejor para él, siempre que el paciente esté adecuadamente informado y tenga capacidad para decidir (retomando el concepto ya visto en consentimiento informado).',
        'Otro ejemplo: decidir cómo distribuir un recurso escaso (como camas de cuidados intensivos en una situación de sobrecarga) pone directamente en juego el principio de justicia, exigiendo criterios explícitos y equitativos, no decisiones arbitrarias caso por caso.'
      ],
      foco:[
        'Este tema es, en cierto sentido, el marco teórico que sostiene a todos los demás temas de este bloque: el consentimiento informado es la autonomía en la práctica; la confidencialidad protege la confianza necesaria para la beneficencia; la comunicación de malas noticias intenta minimizar el daño (no maleficencia) al dar información necesaria.'
      ]
    }
  ],
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 3-7.'
},

'entrevista-clinica-centrada-paciente': {
  tema:'Entrevista clínica centrada en el paciente',
  bloque:'Relación Médico-Paciente', programa:'unirm', cuatri:9, min:7,
  idea:'Este tema retoma, desde la comunicación, la misma anamnesis ya vista en Semiología Clínica: la diferencia entre una entrevista centrada en la enfermedad y una centrada en el paciente no está en QUÉ preguntas se hacen, sino en CÓMO se hacen y qué espacio se le da a la respuesta.',
  claves:['entrevista clínica','escucha activa','pregunta abierta'],
  sigue:'manejo-paciente-dificil',
  secciones:[
    {
      t:'Preguntas abiertas antes que cerradas',
      p:[
        'Una *pregunta abierta* ("cuénteme qué le está pasando") invita al paciente a describir su experiencia con sus propias palabras, sin limitar de antemano qué información puede compartir —retomando directamente el principio ya visto en la anamnesis de Semiología Clínica, de dejar hablar primero al paciente antes de dirigir con preguntas cerradas específicas. Empezar la *entrevista clínica* con preguntas abiertas, y reservar las preguntas cerradas ("¿el dolor es punzante o sordo?") para completar detalles específicos después, suele revelar información que una entrevista completamente dirigida desde el inicio pasaría por alto.'
      ]
    },
    {
      t:'Escucha activa: más que simplemente oír',
      p:[
        'La *escucha activa* implica prestar atención completa a lo que el paciente dice (y a lo que no dice, o dice con dudas), reflejar de vuelta lo entendido para confirmar que se comprendió correctamente, y permitir silencios y pausas sin apresurarse a llenarlos —el paciente, con frecuencia, necesita ese espacio para organizar y terminar de expresar algo importante que le cuesta poner en palabras.'
      ],
      foco:[
        'Consideración práctica: interrumpir al paciente demasiado pronto en la entrevista (los estudios sobre esto muestran que ocurre, en promedio, en segundos, no en minutos) es uno de los errores más comunes y más fáciles de corregir en la práctica clínica cotidiana.'
      ]
    }
  ],
  ref:'Argente y Álvarez, Semiología Médica, cap. 1.'
},

'manejo-paciente-dificil': {
  tema:'Manejo del paciente difícil',
  bloque:'Relación Médico-Paciente', programa:'unirm', cuatri:9, min:7,
  idea:'Un paciente "difícil" casi nunca lo es por capricho: con frecuencia, la dificultad en la interacción es la manifestación visible de miedo, dolor no controlado, una mala experiencia previa con el sistema de salud, o una barrera de comunicación que el propio profesional puede ayudar a resolver.',
  claves:['paciente conflictivo','desescalada verbal','entrevista motivacional'],
  sigue:'trabajo-equipo-salud',
  secciones:[
    {
      t:'Entender antes de reaccionar',
      p:[
        'Un *paciente conflictivo* (hostil, exigente, poco colaborador) genera, de forma natural, una respuesta defensiva en el profesional de salud, pero reaccionar solo a la conducta visible sin buscar su causa suele empeorar la interacción. Con frecuencia, detrás de la conducta difícil hay miedo (a un diagnóstico grave, a perder el control de la situación), dolor mal controlado, o desconfianza acumulada por experiencias previas negativas con el sistema de salud —identificar esa causa subyacente cambia por completo cómo abordar la situación.'
      ]
    },
    {
      t:'Dos herramientas prácticas',
      p:[
        'La *desescalada verbal* es un conjunto de técnicas de comunicación (tono de voz calmado, validar la emoción del paciente antes de intentar corregir su conducta, ofrecer opciones dentro de lo posible) diseñadas para reducir la tensión de una interacción difícil, sin recurrir a la confrontación ni a la sumisión pasiva. La *entrevista motivacional* es una técnica más específica, útil sobre todo cuando el paciente muestra resistencia a un cambio de comportamiento necesario (dejar de fumar, adherirse a un tratamiento): en vez de imponer directamente la recomendación, explora la propia ambivalencia del paciente y le ayuda a encontrar SUS propias razones para el cambio, retomando el concepto ya visto de que solo informar rara vez basta para cambiar un comportamiento.'
      ],
      foco:[
        'Consideración práctica: un paciente que parece "no cooperar" con su tratamiento, antes de etiquetarlo como difícil, merece que se investigue si entendió bien las indicaciones, si tiene los recursos para seguirlas (retomando los determinantes sociales de la salud ya vistos), o si hay una razón de fondo no explorada todavía.'
      ]
    }
  ],
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 8.'
},

'trabajo-equipo-salud': {
  tema:'Trabajo en equipo de salud',
  bloque:'Relación Médico-Paciente', programa:'unirm', cuatri:9, min:7,
  idea:'Este último tema del bloque cierra recordando que la relación médico-paciente, aunque central, no ocurre en aislamiento: la atención real de un paciente casi siempre involucra a un equipo completo, y la comunicación DENTRO de ese equipo puede ser tan determinante para la seguridad del paciente como la comunicación con él.',
  claves:['equipo multidisciplinario','comunicación interprofesional','seguridad del paciente'],
  sigue:null,
  secciones:[
    {
      t:'Un equipo, no un solo profesional',
      p:[
        'La atención de un paciente, especialmente en un caso complejo o en un entorno hospitalario, involucra típicamente a un *equipo multidisciplinario*: médicos de distintas especialidades, enfermería, personal de laboratorio y otros profesionales de salud, cada uno aportando una perspectiva y una función distinta, pero coordinada hacia un mismo objetivo de atención para ese paciente.'
      ]
    },
    {
      t:'Por qué la comunicación entre profesionales afecta la seguridad',
      p:[
        'La *comunicación interprofesional* deficiente —una indicación mal transmitida entre un turno y otro, una nota clínica ambigua (retomando la importancia del registro claro ya visto en Semiología Clínica), una duda no aclarada por jerarquía o por falta de tiempo— es una causa reconocida y evitable de errores médicos, afectando directamente la *seguridad del paciente*. Herramientas estructuradas de comunicación (como formatos estandarizados para transferir información entre turnos o entre profesionales) buscan reducir precisamente este tipo de error, asegurando que la información crítica no se pierda en la transición de un profesional a otro.'
      ],
      foco:[
        'Este tema cierra el bloque completo de Relación Médico-Paciente ampliando su enfoque: todo lo visto —consentimiento informado, confidencialidad, bioética, comunicación de malas noticias, manejo de un paciente difícil— ocurre dentro de un sistema de atención en equipo, y la calidad de ese trabajo en equipo es, en sí misma, parte de la ética del cuidado.'
      ]
    }
  ],
  ref:'OMS, Marco de competencias para la práctica interprofesional.'
}

});
