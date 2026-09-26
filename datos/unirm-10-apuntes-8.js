/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 10 (lote 8)
   Cubre SERVICIO HOSPITALARIO PRE CLINICO al estandar extenso (3
   secciones, ~200-300 palabras por seccion, min 12-13). Octava y
   ultima materia del cuatrimestre 10 (1 credito, 4 temas). La
   orientacion practica antes de entrar de lleno a las rotaciones
   clinicas: como funciona un hospital por dentro y que se espera
   del estudiante ahi.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== SERVICIO HOSPITALARIO PRE CLINICO ==================== */
'estructura-funcionamiento-hospital': {
  tema:'Estructura y funcionamiento del hospital',
  bloque:'Servicio Hospitalario Pre Clínico', programa:'unirm', cuatri:10, min:12,
  idea:'Antes de rotar por un servicio clínico específico, es necesario entender el hospital como un todo: cómo se organiza, cómo fluye un paciente a través de él, y qué servicios lo hacen funcionar detrás de la escena clínica visible.',
  claves:['estructura hospitalaria','servicios hospitalarios','flujo del paciente hospitalizado'],
  sigue:'rol-estudiante-servicio-hospitalario',
  secciones:[
    {
      t:'Los grandes servicios de un hospital',
      p:[
        'Un hospital se organiza en grandes áreas funcionales: los *servicios clínicos* (medicina interna, cirugía, pediatría, gineco-obstetricia, y sus subespecialidades), los *servicios de apoyo diagnóstico* (laboratorio clínico, imagenología, patología), los *servicios de apoyo terapéutico* (farmacia, rehabilitación, nutrición), y los *servicios administrativos y generales* (admisión, mantenimiento, servicios de alimentación, limpieza) -esta estructura retoma directamente la complejidad organizativa ya vista en Gerencia en Salud, donde múltiples funciones distintas deben coordinarse de forma simultánea.',
        'Cada uno de estos servicios opera con su propia lógica interna, pero todos existen en función del mismo objetivo compartido: que el paciente reciba la atención que necesita de forma oportuna y segura -un estudiante que entiende esta estructura general comprende mejor por qué, por ejemplo, un resultado de laboratorio puede tardar cierto tiempo, o por qué ciertos trámites administrativos son necesarios antes de un procedimiento.'
      ]
    },
    {
      t:'El flujo del paciente a través del hospital',
      p:[
        'El *flujo del paciente hospitalizado* sigue típicamente una secuencia: ingreso (por emergencia o de forma programada), evaluación inicial y decisión de hospitalización, estancia en el servicio correspondiente con las evaluaciones y tratamientos necesarios, y finalmente el egreso (alta médica, traslado a otro nivel de atención, o en algunos casos, fallecimiento) -entender esta secuencia ayuda al estudiante a ubicar en qué punto del proceso se encuentra cada paciente que observa durante su rotación.',
        'Este flujo no siempre es lineal: un paciente puede requerir traslados entre servicios (de emergencia a cirugía, de cirugía a cuidados intensivos, de cuidados intensivos de vuelta a un servicio general), cada uno de estos traslados exige una comunicación clara entre los equipos involucrados, retomando la importancia ya vista de las herramientas de comunicación estructurada para evitar que información crítica se pierda en la transición.'
      ]
    },
    {
      t:'Los servicios de apoyo, invisibles pero indispensables',
      p:[
        'Los servicios de apoyo diagnóstico y terapéutico -laboratorio, imagenología, farmacia, banco de sangre, entre otros- con frecuencia son invisibles para el estudiante que se enfoca solo en la interacción directa con el paciente, pero sin ellos ningún diagnóstico ni tratamiento sería posible; retrasos o errores en estos servicios tienen un impacto directo sobre la calidad y la oportunidad de la atención clínica.',
        'Entender que estos servicios de apoyo también tienen sus propios procesos, capacidades y limitaciones -por ejemplo, el tiempo que toma procesar cierto examen, o la disponibilidad de determinado insumo- ayuda al estudiante a formular órdenes médicas más realistas y a comunicarse de forma más efectiva con el personal de estos servicios cuando sea necesario.'
      ],
      foco:[
        '*Consideración clínica*: un estudiante que entiende la estructura completa del hospital -no solo el servicio donde rota- comprende mejor las razones detrás de tiempos de espera, trámites y coordinaciones que, vistos de forma aislada, podrían parecer solo burocracia.'
      ]
    }
  ],
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 2.'
},

'rol-estudiante-servicio-hospitalario': {
  tema:'Rol del estudiante en el servicio hospitalario',
  bloque:'Servicio Hospitalario Pre Clínico', programa:'unirm', cuatri:10, min:13,
  idea:'El rol del estudiante en el hospital tiene límites claros y responsabilidades específicas; entenderlos desde el inicio evita tanto la inseguridad paralizante como la extralimitación de funciones que no le corresponden todavía.',
  claves:['rol del estudiante de medicina','presentación de caso clínico en ronda'],
  sigue:'bioseguridad-prevencion-infecciones-intrahospitalarias',
  secciones:[
    {
      t:'Qué se espera y qué no se espera de un estudiante',
      p:[
        'El *rol del estudiante* en el servicio hospitalario incluye observar, participar activamente en la recolección de información clínica (historia y examen físico) bajo supervisión, presentar casos de forma organizada, y contribuir al cuidado del paciente dentro de los límites claramente establecidos por el equipo supervisor -nunca incluye tomar decisiones clínicas de forma independiente ni realizar procedimientos sin la supervisión y autorización correspondiente.',
        'Esta distinción no es una limitación arbitraria: retoma la misma lógica ya vista sobre seguridad del paciente en Gerencia en Salud -los sistemas y protocolos existen precisamente para reducir el margen de error humano, y un estudiante en formación, sin importar cuánto haya estudiado, todavía no tiene la experiencia clínica acumulada que respalda una decisión independiente segura.'
      ]
    },
    {
      t:'La presentación de caso clínico en ronda',
      p:[
        'La *presentación de caso en ronda* es una habilidad de comunicación estructurada específica: seguir un orden estandarizado (motivo de consulta, historia de la enfermedad actual, antecedentes relevantes, hallazgos del examen físico, resultados de estudios, impresión diagnóstica y plan) permite que el equipo completo entienda rápidamente el caso, sin importar cuántos pacientes deba revisar en la ronda -retoma directamente las herramientas de comunicación estructurada ya vistas en Relación Médico-Paciente y en gestión de calidad.',
        'Una presentación desorganizada, aunque contenga toda la información correcta, dificulta que el equipo capte lo esencial y puede llevar a que se pase por alto un dato relevante; practicar esta estructura desde el bloque pre clínico prepara al estudiante para las rotaciones clínicas donde esta habilidad se vuelve central y cotidiana.'
      ]
    },
    {
      t:'Preguntar quiere decir que se está aprendiendo',
      p:[
        'Un estudiante que pregunta cuando tiene una duda, en vez de simular seguridad que no tiene, contribuye activamente a la seguridad del paciente -retomando la cultura de reporte y comunicación abierta ya vista en gestión de calidad: el sistema funciona mejor cuando cada miembro del equipo, sin importar su nivel de formación, se siente con la confianza de señalar lo que no entiende o lo que le preocupa.',
        'El equipo supervisor, a su vez, tiene la responsabilidad de crear un ambiente donde esas preguntas sean bienvenidas, no penalizadas -un estudiante que aprende en un ambiente de miedo a preguntar tiende a desarrollar hábitos de ocultamiento de dudas que, en la práctica clínica independiente futura, pueden convertirse en un riesgo real para sus pacientes.'
      ],
      foco:[
        '*Consideración clínica*: el rol del estudiante en el hospital combina participación activa dentro de límites claros con la disposición constante de preguntar; ninguna de las dos cosas por separado -ni la pasividad total ni la extralimitación- prepara adecuadamente para la práctica clínica independiente futura.'
      ]
    }
  ],
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 4.'
},

'bioseguridad-prevencion-infecciones-intrahospitalarias': {
  tema:'Bioseguridad y prevención de infecciones intrahospitalarias',
  bloque:'Servicio Hospitalario Pre Clínico', programa:'unirm', cuatri:10, min:13,
  idea:'Un hospital, precisamente por concentrar pacientes con enfermedades infecciosas y procedimientos invasivos, es un entorno con riesgo real de transmisión de infecciones si no se siguen las precauciones adecuadas -para el paciente, para el personal, y para el propio estudiante.',
  claves:['bioseguridad hospitalaria','infección asociada a la atención de salud','precauciones estándar'],
  sigue:'documentacion-clinica-hospitalaria',
  secciones:[
    {
      t:'Qué es una infección asociada a la atención de salud',
      p:[
        'Una *infección asociada a la atención de salud* (antes llamada infección nosocomial o intrahospitalaria) es una infección que un paciente adquiere durante su atención en un centro de salud, sin que estuviera presente ni en periodo de incubación al momento del ingreso -retoma directamente el concepto de evento adverso prevenible ya visto en gestión de calidad: una proporción importante de estas infecciones son evitables con las precauciones adecuadas.',
        'Estas infecciones tienen consecuencias reales tanto para el paciente (mayor estancia hospitalaria, mayor riesgo de complicaciones, en ocasiones mortalidad) como para la institución (mayor costo, retomando la conexión ya vista entre calidad y gestión financiera) -por eso la prevención de infecciones es simultáneamente un objetivo clínico y un objetivo de gestión institucional.'
      ]
    },
    {
      t:'Las precauciones estándar',
      p:[
        'Las *precauciones estándar* son el conjunto de prácticas mínimas que deben aplicarse con todo paciente, sin importar si tiene o no una infección conocida, precisamente porque no siempre es posible saber con certeza quién porta un microorganismo transmisible: incluyen la higiene de manos en los momentos clave, el uso apropiado de equipo de protección personal (guantes, mascarilla, bata según el procedimiento), el manejo seguro de objetos cortopunzantes, y la limpieza adecuada del entorno del paciente.',
        'La *higiene de manos* es, de todas estas medidas, la más simple y a la vez la más efectiva para reducir la transmisión de infecciones dentro del hospital; su aplicación consistente en los momentos clave (antes y después del contacto con el paciente, antes de un procedimiento limpio, después de exposición a fluidos corporales) depende, en última instancia, de un hábito disciplinado que debe formarse desde el inicio de la formación clínica, no improvisarse después.'
      ]
    },
    {
      t:'La bioseguridad como responsabilidad compartida, incluida la del estudiante',
      p:[
        'Un estudiante en su primera rotación pre clínica es, desde su primer contacto con el entorno hospitalario, un vector potencial de transmisión igual que cualquier otro miembro del equipo -aplicar las precauciones estándar de forma consistente no es una formalidad reservada para el personal con más experiencia, sino una responsabilidad que corresponde a cualquier persona que entra en contacto con pacientes o con el entorno hospitalario, desde el primer día.',
        'Esta responsabilidad compartida retoma la lógica ya vista sobre sistemas de seguridad del paciente: un sistema de bioseguridad funciona quando cada persona involucrada, sin excepción, sigue las precauciones correspondientes -un solo eslabón débil en esta cadena (un estudiante que no se lava las manos, por ejemplo) puede comprometer la seguridad de un paciente vulnerable.'
      ],
      foco:[
        '*Consideración clínica*: la bioseguridad no es una serie de reglas abstractas que aprender para un examen, sino un hábito práctico que un estudiante debe empezar a construir desde su primera rotación pre clínica, porque su aplicación consistente protege tanto a los pacientes como al propio estudiante.'
      ]
    }
  ],
  ref:'OMS, Guía de Aplicación de la Estrategia Multimodal para la Mejora de la Higiene de Manos.'
},

'documentacion-clinica-hospitalaria': {
  tema:'Documentación clínica hospitalaria',
  bloque:'Servicio Hospitalario Pre Clínico', programa:'unirm', cuatri:10, min:13,
  idea:'Un hallazgo clínico no documentado, para efectos prácticos del equipo de salud y del propio sistema, es como si no hubiera ocurrido; la documentación clínica es el medio por el cual la información generada en la atención se vuelve accesible, verificable y útil para el resto del equipo.',
  claves:['nota de evolución','expediente clínico hospitalario','orden médica'],
  sigue:'crecimiento-desarrollo-normal',
  secciones:[
    {
      t:'El expediente clínico como memoria institucional del paciente',
      p:[
        'El *expediente clínico hospitalario* es el registro completo y cronológico de la atención de un paciente durante su hospitalización: incluye la historia clínica de ingreso, las notas de evolución diarias, los resultados de estudios, las órdenes médicas, y cualquier otro documento relevante -funciona como la memoria institucional del caso, permitiendo que cualquier miembro del equipo, incluso uno que nunca antes atendió a ese paciente, entienda su situación clínica con solo revisar el expediente.',
        'Este expediente retoma directamente la importancia de la comunicación estructurada ya vista en distintos bloques previos: en un hospital donde el personal rota por turnos, un expediente claro y completo es, con frecuencia, el único puente de información confiable entre el equipo que atendió al paciente en un momento y el que lo atiende en otro.'
      ]
    },
    {
      t:'La nota de evolución diaria',
      p:[
        'La *nota de evolución* es el registro diario del estado del paciente hospitalizado, siguiendo típicamente una estructura organizada (formato SOAP: subjetivo, objetivo, análisis o evaluación, y plan) que permite documentar de forma consistente cómo evoluciona el paciente día a día, qué decisiones se tomaron, y por qué -esta estructura retoma la misma lógica de comunicación organizada ya vista en la presentación de caso en ronda.',
        'Una nota de evolución completa y clara no solo documenta lo obvio: incluye el razonamiento clínico detrás de las decisiones tomadas, de forma que, si en el futuro surge una pregunta sobre por qué se tomó determinada decisión en determinado momento, el expediente pueda responderla sin depender de la memoria de quien la escribió.'
      ]
    },
    {
      t:'La orden médica y su carácter vinculante',
      p:[
        'La *orden médica* es la instrucción formal escrita en el expediente que indica una acción específica a realizar (administrar un medicamento, solicitar un estudio, realizar un procedimiento) -a diferencia de una indicación verbal, una orden médica escrita queda registrada de forma verificable, reduciendo el riesgo de malentendidos o de acciones no documentadas, retomando directamente los sistemas de doble verificación ya vistos en gestión de calidad.',
        'Una orden médica clara, específica y completa (qué, cuánto, cuándo, por qué vía) reduce el margen de error en su ejecución por parte del resto del equipo; una orden ambigua o incompleta traslada al personal que la ejecuta la carga de interpretar la intención real, un riesgo evitable con una redacción cuidadosa desde el inicio -este último tema cierra el bloque completo del Servicio Hospitalario Pre Clínico, integrando la estructura del hospital, el rol del estudiante, la bioseguridad, y ahora la documentación, como las cuatro dimensiones básicas de la orientación práctica antes de entrar de lleno a las rotaciones clínicas.'
      ],
      foco:[
        '*Consideración clínica*: un estudiante que aprende a documentar con claridad desde su primera rotación pre clínica -notas de evolución completas, órdenes médicas específicas- desarrolla un hábito que después, en la práctica clínica independiente, protege tanto al paciente como al propio profesional.'
      ]
    }
  ],
  ref:'Malagón-Londoño, Administración Hospitalaria, cap. 9.'
}

});
