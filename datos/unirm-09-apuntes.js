/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 1)
   Primer archivo de apuntes para 9no: hasta ahora esta materia
   solo tenia Temario y banco de preguntas, ningun texto de
   lectura. Este lote cubre el primer tema de cada una de las
   nueve materias, para que ninguna se quede sin punto de
   entrada. El resto sigue pendiente, por lotes.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== SEMIOLOGIA CLINICA ==================== */
'historia-clinica-anamnesis': {
  tema:'Historia clínica: anamnesis',
  bloque:'Semiología Clínica', programa:'unirm', cuatri:9, min:8,
  idea:'La anamnesis bien hecha resuelve, sola, entre el 70 y el 80% de los diagnósticos, antes de tocar al paciente y antes de pedir un solo estudio. Es la herramienta más rentable de toda la medicina y la que menos cuesta usar.',
  claves:['anamnesis','motivo de consulta','enfermedad actual','antecedentes','interrogatorio dirigido'],
  sigue:'examen-fisico-general',
  secciones:[
    {
      t:'La estructura que ordena cualquier entrevista',
      p:[
        'La *anamnesis* es la parte de la historia clínica que se construye a partir de lo que el paciente cuenta. Tiene una estructura fija que conviene interiorizar hasta que salga sola: primero el *motivo de consulta*, la razón por la que el paciente vino, idealmente en sus propias palabras ("me duele el pecho", no "posible síndrome coronario agudo" —eso ya es una interpretación tuya, no lo que él dijo). Después la *enfermedad actual* (o historia de la enfermedad actual), que es el desarrollo cronológico y detallado de ese motivo de consulta: cuándo empezó, cómo, qué lo alivia, qué lo empeora, qué otros síntomas lo acompañan.',
        'Después vienen los *antecedentes*: personales patológicos (enfermedades previas, cirugías, alergias, medicamentos), personales no patológicos (hábitos, alimentación, ejercicio) y familiares (enfermedades en la familia, relevantes sobre todo si hay un componente hereditario). Este orden no es un formalismo burocrático: cada bloque responde a una pregunta distinta, y saltarse uno es dejar un hueco real en la información.'
      ]
    },
    {
      t:'El interrogatorio dirigido: no dejar que el paciente adivine qué preguntarle',
      p:[
        'Una vez que el paciente cuenta su síntoma principal con sus propias palabras (siempre hay que dejarlo hablar sin interrumpir al inicio), el entrevistador tiene que completar la información con un *interrogatorio dirigido*: preguntas concretas que buscan las características que el paciente, por sí solo, casi nunca menciona todas.',
        'Ejemplo trabajado, para un dolor: dónde exactamente (localización), hacia dónde se corre (irradiación), cómo se siente (carácter: opresivo, punzante, urente), qué tan fuerte (intensidad, en una escala de 0 a 10), desde cuándo y cómo empezó (inicio y evolución), qué lo alivia y qué lo agrava, y qué otros síntomas lo acompañan. Si el entrevistador se conforma con "me duele el pecho" y no pregunta el resto, se pierde la información que en realidad decide el diagnóstico diferencial.'
      ],
      foco:[
        'Escribir el motivo de consulta en las palabras textuales del paciente, entre comillas, es una buena práctica: preserva la información original sin la interpretación prematura de quien entrevista.'
      ]
    }
  ],
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 1. Argente y Álvarez, Semiología Médica, cap. 1.'
},

/* ==================== ANATOMIA PATOLOGICA I ==================== */
'lesion-celular-reversible-irreversible': {
  tema:'Lesión celular reversible e irreversible',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:7,
  idea:'Toda enfermedad, sin excepción, empieza en algún punto como una célula dañada. Entender dónde está la línea entre un daño que la célula puede reparar y uno del que ya no hay vuelta atrás es el concepto que sostiene toda la patología.',
  claves:['lesión celular','hipoxia','degeneración hidrópica','punto de no retorno'],
  sigue:'necrosis-tipos',
  secciones:[
    {
      t:'Qué le pasa a una célula cuando se le agota el oxígeno',
      p:[
        'La causa más frecuente de lesión celular es la *hipoxia* (falta de oxígeno), casi siempre por isquemia (falta de riego sanguíneo). Sin oxígeno, la célula no puede producir ATP por fosforilación oxidativa, y ese fallo energético dispara una cascada de eventos: la bomba de sodio-potasio, que depende de ATP, deja de funcionar, y el sodio empieza a acumularse dentro de la célula. El agua sigue al sodio por ósmosis, y la célula se hincha: esto se ve al microscopio como *degeneración hidrópica* (o tumefacción celular), la forma más temprana y más leve de lesión celular.',
        'En esta fase, si el oxígeno se restaura a tiempo, la célula se recupera por completo: es *lesión celular reversible*. El daño existe, pero la maquinaria esencial de la célula —sobre todo la membrana plasmática y las mitocondrias— sigue siendo funcional.'
      ]
    },
    {
      t:'El punto de no retorno',
      p:[
        'Si la falta de oxígeno continúa, el daño avanza hacia una fase de *lesión celular irreversible*, marcada por dos eventos que definen el punto de no retorno: el daño estructural grave de la membrana plasmática (que deja de poder mantener el gradiente iónico y empieza a dejar salir contenido celular) y el daño mitocondrial grave (que impide que la célula recupere su producción de energía aunque el oxígeno vuelva). Pasado ese punto, la muerte celular ya es inevitable, incluso si se restaura la circulación.',
        'Ejemplo trabajado, clínicamente relevante: esta es la razón biológica detrás del concepto de "tiempo es músculo" en un infarto, o "tiempo es cerebro" en un ictus. Cuanto más tiempo pasa un tejido en isquemia, más células cruzan ese punto de no retorno y mueren de forma irreversible, y ninguna intervención posterior —por buena que sea— puede revivir una célula que ya lo cruzó. Todo el esfuerzo de la medicina de emergencia en estos cuadros es, literalmente, una carrera contra ese punto de no retorno celular.'
      ],
      foco:[
        'La lesión celular reversible y la irreversible NO son dos enfermedades distintas: son dos puntos en el mismo continuo. Lo que las separa es tiempo y severidad del insulto, no un mecanismo diferente.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 2.'
},

/* ==================== FISIOPATOLOGIA ==================== */
'fisiopatologia-equilibrio-acido-base': {
  tema:'Fisiopatología del equilibrio ácido-base',
  bloque:'Fisiopatología', programa:'unirm', cuatri:9, min:8,
  idea:'Leer un gas arterial da miedo la primera vez, pero en el fondo son solo cuatro escenarios posibles, y una vez que entiendes el mecanismo de cada uno, identificarlos deja de ser memorizar y pasa a ser deducir.',
  claves:['acidosis metabólica','alcalosis respiratoria','anion gap','compensación'],
  sigue:'fisiopatologia-liquidos-electrolitos',
  secciones:[
    {
      t:'Cuatro trastornos posibles, según el órgano y la dirección',
      p:[
        'El equilibrio ácido-base depende de dos sistemas: el respiratorio, que regula el CO2 (ácido volátil) en minutos, y el renal-metabólico, que regula el bicarbonato en horas o días. De ahí salen exactamente cuatro trastornos primarios posibles: *acidosis metabólica* (baja el bicarbonato, el pH tiende a bajar), *alcalosis metabólica* (sube el bicarbonato, el pH tiende a subir), *acidosis respiratoria* (sube el CO2 por hipoventilación, el pH tiende a bajar) y *alcalosis respiratoria* (baja el CO2 por hiperventilación, el pH tiende a subir).',
        'Cada uno tiene mecanismos concretos y reconocibles. Ejemplo trabajado de acidosis metabólica: en una cetoacidosis diabética, el cuerpo produce cuerpos cetónicos (ácidos) en exceso, que consumen bicarbonato para ser amortiguados; el bicarbonato cae, y con él el pH. Ejemplo de alcalosis respiratoria: un paciente con ansiedad severa hiperventila, elimina CO2 en exceso, y ese CO2 bajo hace subir el pH.'
      ]
    },
    {
      t:'La compensación: el cuerpo intenta corregir el pH, no la causa',
      p:[
        'Cuando aparece un trastorno primario, el sistema que NO está fallando intenta compensarlo para devolver el pH hacia lo normal, aunque no pueda corregirlo del todo. Ante una acidosis metabólica, el sistema respiratorio compensa hiperventilando (para bajar el CO2 y así subir el pH de vuelta). Ante una acidosis respiratoria, el riñón compensa reteniendo más bicarbonato, pero ese proceso tarda días, así que la compensación respiratoria es rápida y la renal es lenta.',
        'Un dato práctico: la compensación NUNCA sobrecorrige el pH hasta dejarlo normal del todo ni lo pasa hacia el lado contrario. Si al leer un gas arterial el pH está claramente normal pero el bicarbonato y el CO2 están los dos alterados, eso sugiere un trastorno MIXTO (dos trastornos primarios a la vez que se cancelan), no una compensación perfecta.'
      ],
      foco:[
        'El *anion gap* (calculado como Na+ menos la suma de Cl- y HCO3-) ayuda a distinguir el mecanismo de una acidosis metabólica: un anion gap elevado sugiere acumulación de un ácido no medido (cetoácidos, lactato, tóxicos); un anion gap normal sugiere pérdida directa de bicarbonato (diarrea severa, por ejemplo).'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 31. Porth, Fisiopatología.'
},

/* ==================== NEUROANATOMIA ==================== */
'organizacion-general-sistema-nervioso': {
  tema:'Organización general del sistema nervioso',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:7,
  idea:'Antes de memorizar una sola vía, hay que fijar dos distinciones de vocabulario que se repiten en cada tema de neuroanatomía: sustancia gris contra blanca, y sistema nervioso central contra periférico. Sin eso, cada término nuevo (núcleo, ganglio, tracto, nervio) suena intercambiable, y no lo es.',
  claves:['sustancia gris','sustancia blanca','sistema nervioso central','sistema nervioso periférico'],
  sigue:'medula-espinal-vias-largas',
  secciones:[
    {
      t:'Gris y blanca: cuerpos celulares contra cables',
      p:[
        'La *sustancia gris* está formada principalmente por cuerpos celulares de neuronas, dendritas y sinapsis: es donde el sistema nervioso PROCESA información. La *sustancia blanca* está formada por axones mielinizados: es donde el sistema nervioso TRANSMITE información de un punto a otro, como el cableado entre distintas estaciones de procesamiento. La mielina (una envoltura grasa que recubre los axones) es lo que le da a la sustancia blanca su color característico y también lo que acelera muchísimo la velocidad de conducción del impulso nervioso.',
        'En el cerebro y el cerebelo, la sustancia gris está por fuera (la corteza) y la blanca por dentro. En la médula espinal, es al revés: la sustancia gris está por dentro (con forma de mariposa o de H en un corte transversal) y la blanca por fuera, formando los cordones. Esta inversión no es un capricho: refleja que en el cerebro el procesamiento ocurre en la superficie externa, y en la médula, el procesamiento (los reflejos, por ejemplo) ocurre en el centro, rodeado por las vías largas que solo pasan de tránsito.'
      ]
    },
    {
      t:'Central y periférico: dónde está protegido, dónde no',
      p:[
        'El *sistema nervioso central* (SNC) comprende el encéfalo y la médula espinal, protegidos por hueso (cráneo y columna) y por las meninges. El *sistema nervioso periférico* (SNP) comprende todo lo que sale de ahí: los nervios craneales, los nervios espinales, y los ganglios periféricos, sin esa protección ósea.',
        'El vocabulario cambia según dónde estés parado: un grupo de cuerpos neuronales dentro del SNC se llama *núcleo*; el mismo tipo de agrupación, pero en el SNP, se llama *ganglio*. Un haz de axones dentro del SNC se llama *tracto* (o fascículo, o lemnisco, según el caso); el mismo tipo de haz, pero en el SNP, se llama *nervio*. Son la misma idea estructural, con nombre distinto solo por la ubicación.'
      ],
      foco:[
        'Esta distinción tiene una consecuencia clínica real: las células que forman la mielina son distintas en cada sistema (oligodendrocitos en el SNC, células de Schwann en el SNP), y por eso hay enfermedades que dañan la mielina de un sistema sin afectar al otro —la esclerosis múltiple ataca la mielina del SNC; el síndrome de Guillain-Barré ataca la del SNP.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 1. Kandel, Principios de Neurociencia, cap. 1.'
},

/* ==================== FARMACOLOGIA ==================== */
'farmacocinetica-absorcion-distribucion': {
  tema:'Farmacocinética: absorción y distribución',
  bloque:'Farmacología', programa:'unirm', cuatri:9, min:8,
  idea:'La farmacocinética responde a una pregunta muy concreta: qué le hace el CUERPO al fármaco (a diferencia de la farmacodinamia, que estudia qué le hace el fármaco al cuerpo). Entender absorción y distribución explica, por ejemplo, por qué un medicamento se da en dosis mucho más alta por vía oral que por vía intravenosa para lograr el mismo efecto.',
  claves:['biodisponibilidad','unión a proteínas plasmáticas','volumen de distribución','primer paso hepático'],
  sigue:'farmacocinetica-metabolismo-excrecion',
  secciones:[
    {
      t:'Biodisponibilidad y el efecto de primer paso',
      p:[
        'La *biodisponibilidad* es la fracción de una dosis administrada que llega intacta a la circulación sistémica, capaz de ejercer su efecto. Un fármaco dado por vía intravenosa tiene, por definición, 100% de biodisponibilidad: entra directo a la sangre. Un fármaco dado por vía oral casi nunca llega al 100%, porque tiene que sobrevivir el paso por el intestino y, sobre todo, por el hígado antes de llegar a la circulación general.',
        'Ese paso obligado por el hígado se llama *efecto de primer paso*: la sangre que sale del intestino delgado va directo al hígado por la vena porta antes de unirse a la circulación general, y el hígado puede metabolizar (inactivar) una parte importante del fármaco antes de que este llegue a donde tiene que actuar. Ejemplo trabajado: algunos fármacos tienen un efecto de primer paso tan grande que su dosis oral necesaria es varias veces mayor que su dosis intravenosa equivalente, precisamente para compensar lo que el hígado va a destruir en el camino.'
      ]
    },
    {
      t:'Volumen de distribución: dónde termina realmente el fármaco',
      p:[
        'Una vez en la sangre, el fármaco se reparte por el cuerpo, y el *volumen de distribución* (Vd) es un número que describe, de forma indirecta, cuánto se aleja el fármaco del compartimento sanguíneo hacia los tejidos. No es un volumen anatómico real: es un volumen calculado (dosis administrada dividida entre la concentración plasmática resultante).',
        'Un fármaco con Vd bajo (cercano al volumen plasmático real, unos 3 litros) se queda mayormente en la sangre, muchas veces porque se une fuertemente a proteínas plasmáticas como la albúmina. Un fármaco con Vd muy alto (que puede superar, en el número calculado, el peso corporal total) se ha ido en gran parte hacia los tejidos —grasa, músculo— dejando muy poco en la sangre. Esto tiene consecuencia clínica directa: un fármaco con Vd muy alto es difícil de eliminar rápido con diálisis, porque la mayor parte no está en la sangre para que la máquina la filtre.'
      ],
      foco:[
        'La *unión a proteínas plasmáticas* (sobre todo a la albúmina) mantiene al fármaco "guardado" e inactivo dentro del vaso: solo la fracción LIBRE (no unida) puede salir del vaso y ejercer efecto. En un paciente con albúmina muy baja (desnutrición severa, cirrosis), la fracción libre de ciertos fármacos puede subir peligrosamente, aumentando el riesgo de toxicidad con la misma dosis de siempre.'
      ]
    }
  ],
  ref:'Katzung, Farmacología Básica y Clínica, cap. 3.'
},

/* ==================== MEDICINA PREVENTIVA ==================== */
'niveles-prevencion': {
  tema:'Niveles de prevención',
  bloque:'Medicina Preventiva', programa:'unirm', cuatri:9, min:6,
  idea:'"Prevención" no es un solo concepto: es un conjunto de tres estrategias distintas, aplicadas en momentos distintos de la historia natural de una enfermedad, y confundirlas lleva a ejemplos mal clasificados en cualquier examen.',
  claves:['prevención primaria','prevención secundaria','prevención terciaria','promoción de la salud'],
  sigue:'inmunizaciones-esquema-vacunacion',
  secciones:[
    {
      t:'Los tres niveles, ordenados en el tiempo de la enfermedad',
      p:[
        'La *prevención primaria* actúa ANTES de que la enfermedad aparezca, evitando que se desarrolle: vacunación, uso de cinturón de seguridad, dejar de fumar antes de desarrollar cáncer de pulmón. Va dirigida a personas sanas, y su objetivo es reducir la incidencia (los casos nuevos).',
        'La *prevención secundaria* actúa cuando la enfermedad YA empezó pero todavía no da síntomas (fase preclínica), buscándola activamente para tratarla temprano y cambiar su curso: la mamografía de tamizaje, la citología cervical, la toma rutinaria de presión arterial en personas sin síntomas. Su objetivo es la detección temprana, no evitar que la enfermedad exista.',
        'La *prevención terciaria* actúa cuando la enfermedad YA es evidente clínicamente, y busca limitar sus complicaciones, evitar el deterioro y restaurar la función: la rehabilitación después de un ictus, el control estricto de la glucosa en un diabético ya diagnosticado para evitar la retinopatía o la nefropatía, un programa de rehabilitación cardíaca después de un infarto.'
      ]
    },
    {
      t:'Ejemplo trabajado, la misma enfermedad en sus tres niveles',
      p:[
        'Tomemos la diabetes tipo 2. Prevención primaria: promover ejercicio y alimentación saludable en la población general para evitar que la enfermedad aparezca. Prevención secundaria: hacer un examen de glucosa en ayunas a un adulto asintomático con factores de riesgo, para detectar una diabetes que todavía no da síntomas. Prevención terciaria: en un paciente YA diagnosticado con diabetes, controlar estrictamente su glucosa y hacerle exámenes oftalmológicos regulares para prevenir que llegue a la ceguera por retinopatía diabética.',
        'Fíjate en que las tres intervenciones son legítimas y necesarias, pero actúan en momentos distintos de la misma historia natural. Un error común de examen es llamar "primaria" a cualquier intervención que suene preventiva, sin fijarse en si la persona ya tiene la enfermedad o no.'
      ],
      foco:[
        'La *promoción de la salud* (educación, políticas públicas saludables, entornos que favorecen la salud) es más amplia que la prevención primaria: no se dirige a una enfermedad concreta, sino a mejorar las condiciones generales que determinan la salud de toda la población.'
      ]
    }
  ],
  ref:'Organización Mundial de la Salud, Niveles de prevención. Restrepo y Málaga, Promoción de la Salud.'
},

/* ==================== SOPORTE VITAL BASICO Y AVANZADO ==================== */
'cadena-supervivencia-rcp-basica': {
  tema:'Cadena de supervivencia y RCP básica',
  bloque:'Soporte Vital Básico y Avanzado', programa:'unirm', cuatri:9, min:7,
  idea:'En un paro cardíaco fuera del hospital, la sobrevida depende mucho más de qué tan rápido reacciona la primera persona presente que de qué tan sofisticado sea el hospital al que llegue el paciente después. Por eso la cadena de supervivencia empieza contigo, no con la ambulancia.',
  claves:['cadena de supervivencia','compresiones torácicas','RCP','desfibrilación'],
  sigue:'via-aerea-ventilacion',
  secciones:[
    {
      t:'Una cadena: si un eslabón falla, se rompe todo',
      p:[
        'La *cadena de supervivencia* describe la secuencia de acciones que, hechas en orden y sin demora, maximizan la probabilidad de sobrevivir a un paro cardíaco: reconocimiento inmediato y activación del sistema de emergencias, RCP temprana y de calidad, desfibrilación rápida (si el ritmo lo requiere), soporte vital avanzado efectivo, y cuidados posparo organizados. Se llama "cadena" a propósito: si cualquiera de esos eslabones falla o se retrasa, toda la secuencia pierde eficacia, sin importar qué tan bien se hagan los demás.',
        'El dato que más pesa clínicamente es el tiempo: la probabilidad de sobrevivir a una fibrilación ventricular cae de forma pronunciada por cada minuto que pasa sin RCP ni desfibrilación. Es la razón por la que se entrena a la población general (no solo a personal de salud) en RCP básica: la mayoría de los paros ocurren fuera del hospital, y quien está presente en ese primer minuto casi nunca es un médico.'
      ]
    },
    {
      t:'Compresiones: la parte que más rinde y más se hace mal',
      p:[
        'Ante un adulto que no responde y no respira con normalidad, la prioridad es activar el sistema de emergencias e iniciar compresiones torácicas de inmediato, sin esperar a confirmar el pulso con certeza (eso puede hacer perder tiempo valioso). Las compresiones se dan en el centro del pecho, a una frecuencia de 100 a 120 por minuto, con una profundidad de al menos 5 centímetros en el adulto, permitiendo que el tórax vuelva a expandirse por completo entre una compresión y otra, y con la menor interrupción posible.',
        'Ejemplo trabajado: comprimir demasiado lento o demasiado superficial reduce mucho el flujo de sangre generado artificialmente hacia el cerebro y el corazón, aunque técnicamente "se esté haciendo RCP". La calidad de la compresión —frecuencia, profundidad, permitir la reexpansión completa, minimizar interrupciones— importa tanto como el hecho de estarla haciendo.'
      ],
      foco:[
        'Para un reanimador sin entrenamiento formal, las guías actuales priorizan la RCP "solo con las manos" (compresiones continuas, sin ventilaciones de rescate): es más fácil de hacer bien bajo presión y evita las pausas para ventilar, que suelen ser largas e ineficientes cuando no se tiene práctica.'
      ]
    }
  ],
  ref:'American Heart Association, Guías de RCP y ACE.'
},

/* ==================== RELACION MEDICO-PACIENTE ==================== */
'consentimiento-informado': {
  tema:'Consentimiento informado',
  bloque:'Relación Médico-Paciente', programa:'unirm', cuatri:9, min:6,
  idea:'El consentimiento informado no es el papel que se firma antes de una cirugía: es un PROCESO de conversación, y el papel firmado es solo la evidencia de que ese proceso ocurrió. Confundir el papel con el proceso es el error más frecuente en este tema.',
  claves:['consentimiento informado','autonomía del paciente','capacidad para decidir'],
  sigue:'comunicacion-malas-noticias',
  secciones:[
    {
      t:'Qué elementos tiene que tener, de verdad',
      p:[
        'El consentimiento informado descansa sobre el principio de *autonomía*: el paciente tiene derecho a decidir qué se hace con su propio cuerpo, y para decidir de verdad necesita información suficiente. Para que un consentimiento sea válido, tienen que cumplirse varios elementos a la vez: que el paciente reciba información comprensible sobre el procedimiento, sus beneficios esperados, sus riesgos y las alternativas disponibles (incluida la alternativa de no hacer nada); que el paciente tenga *capacidad para decidir* (entender la información, valorarla y comunicar una decisión); que la decisión sea voluntaria, sin coacción; y que quede expresada de forma clara.',
        'Ejemplo trabajado: pedirle a un paciente que firme un formulario en el pasillo, treinta segundos antes de entrar a cirugía, sin haber explicado antes los riesgos ni las alternativas, no es consentimiento informado válido, aunque exista una firma. El documento firmado registra que la conversación ocurrió; no la reemplaza.'
      ]
    },
    {
      t:'Cuándo NO se necesita, y por qué esas excepciones tienen sentido',
      p:[
        'Hay situaciones donde el proceso completo no es exigible, y todas comparten una misma lógica: proteger al paciente cuando pedir el consentimiento de la forma habitual sería imposible o le haría más daño que bien. La más clara es la *emergencia* que pone en riesgo inmediato la vida y el paciente no puede expresar su voluntad (está inconsciente, por ejemplo) y no hay un representante disponible: se actúa bajo el principio de que una persona razonable, en esa situación, habría querido ser tratada.',
        'Otras excepciones reconocidas son el rechazo válido del propio paciente informado (que también es parte de su autonomía: tiene derecho a decir que no) y, en menor de edad o adulto sin capacidad para decidir, el consentimiento lo otorga un representante legal —salvo, de nuevo, la emergencia vital inmediata.'
      ],
      foco:[
        'La *capacidad para decidir* no es todo o nada ni depende solo del diagnóstico: un paciente con una enfermedad psiquiátrica puede tener capacidad para decidir sobre un procedimiento concreto, y un paciente sin ningún diagnóstico psiquiátrico puede, en cambio, no comprender la información que se le está dando. Se evalúa la capacidad para ESA decisión concreta, no la persona en abstracto.'
      ]
    }
  ],
  ref:'Beauchamp y Childress, Principios de Ética Biomédica, cap. 4.'
},

/* ==================== SALUD Y COMUNIDAD I ==================== */
'determinantes-sociales-salud': {
  tema:'Determinantes sociales de la salud',
  bloque:'Salud y Comunidad I', programa:'unirm', cuatri:9, min:6,
  idea:'Dos personas con el mismo diagnóstico y el mismo tratamiento pueden tener desenlaces muy distintos si una tiene agua potable, transporte para llegar a sus citas y dinero para comprar el medicamento, y la otra no. Eso —lo que rodea a la enfermedad, no la enfermedad en sí— es lo que estudian los determinantes sociales.',
  claves:['determinante social','inequidad en salud','acceso a servicios de salud'],
  sigue:'salud-comunitaria-atencion-primaria',
  secciones:[
    {
      t:'Más allá del sistema de salud',
      p:[
        'Los *determinantes sociales de la salud* son las condiciones en las que las personas nacen, crecen, viven, trabajan y envejecen, y que influyen directamente en su estado de salud: el ingreso económico, la educación, la vivienda, el acceso a agua potable y saneamiento, las condiciones de trabajo, el entorno social y el acceso a los propios servicios de salud. La evidencia acumulada en salud pública muestra, de forma consistente, que estos factores explican una proporción mayor de la salud de una población que la atención médica por sí sola.',
        'Ejemplo trabajado: una persona con diabetes que vive en una zona sin acceso regular a alimentos frescos (lo que se llama, en la literatura, un "desierto alimentario"), sin dinero estable para comprar su insulina todos los meses, y sin transporte confiable para llegar a sus citas de control, tiene un riesgo mucho mayor de complicaciones que otra persona con el MISMO diagnóstico pero con ingresos estables, buen acceso a alimentos y transporte propio, incluso si ambas reciben, en teoría, la misma indicación médica.'
      ]
    },
    {
      t:'Inequidad, no solo diferencia',
      p:[
        'No toda diferencia en salud es una *inequidad*. Una inequidad en salud es una diferencia que además es evitable, injusta y sistemática: se repite de forma predecible según el grupo social al que pertenece una persona (su ingreso, su zona de residencia, su nivel educativo), y no responde solo al azar biológico.',
        'Reconocer un determinante social relevante en un paciente concreto cambia, en la práctica, cómo se plantea un plan de tratamiento: de poco sirve indicar un medicamento costoso a diario si la persona no tiene forma sostenida de pagarlo, y un buen clínico —tanto como uno que trabaja en salud comunitaria— tiene que preguntar por esas condiciones, no darlas por sentadas.'
      ],
      foco:[
        'Consideración clínica: preguntar de rutina "¿tienes forma de conseguir este medicamento todos los meses?" o "¿tienes cómo llegar a tu próxima cita?" no es salirse del rol médico: es parte de un plan de tratamiento realista.'
      ]
    }
  ],
  ref:'OMS, Comisión sobre Determinantes Sociales de la Salud, informe final.'
}

});
