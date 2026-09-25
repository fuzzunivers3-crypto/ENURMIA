/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 17)
   Reescribe SOPORTE VITAL BASICO Y AVANZADO al estandar extenso
   (3 secciones, ~200-300 palabras por seccion, min 13-14).
   Sustituye el contenido corto de los mismos 7 temas en
   unirm-09-apuntes.js y unirm-09-apuntes-8.js (mismas claves, no
   se agregan temas nuevos). Cierra el bloque hacia Relacion
   Medico-Paciente.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'cadena-supervivencia-rcp-basica': {
  tema:'Cadena de supervivencia y RCP básica',
  bloque:'Soporte Vital Básico y Avanzado', programa:'unirm', cuatri:9, min:13,
  idea:'En un paro cardíaco fuera del hospital, la sobrevida depende mucho más de qué tan rápido reacciona la primera persona presente que de qué tan sofisticado sea el hospital al que llegue el paciente después. Por eso la cadena de supervivencia empieza contigo, no con la ambulancia.',
  claves:['cadena de supervivencia','compresiones torácicas','RCP','desfibrilación'],
  sigue:'via-aerea-ventilacion',
  secciones:[
    {
      t:'Una cadena: si un eslabón falla, se rompe todo',
      p:[
        'La *cadena de supervivencia* describe la secuencia de acciones que, hechas en orden y sin demora, maximizan la probabilidad de sobrevivir a un paro cardíaco: reconocimiento inmediato y activación del sistema de emergencias, RCP temprana y de calidad, desfibrilación rápida (si el ritmo lo requiere), soporte vital avanzado efectivo, y cuidados posparo organizados. Se llama "cadena" a propósito: si cualquiera de esos eslabones falla o se retrasa, toda la secuencia pierde eficacia, sin importar qué tan bien se hagan los demás -una desfibrilación perfecta, aplicada tarde porque nadie hizo RCP mientras llegaba el desfibrilador, ya perdió gran parte de su valor.',
        'El dato que más pesa clínicamente es el tiempo: la probabilidad de sobrevivir a una fibrilación ventricular cae de forma pronunciada por cada minuto que pasa sin RCP ni desfibrilación. Es la razón por la que se entrena a la población general (no solo a personal de salud) en RCP básica: la mayoría de los paros cardíacos ocurren fuera del hospital, y quien está presente en ese primer minuto crítico casi nunca es un médico o un profesional de salud entrenado.'
      ]
    },
    {
      t:'Compresiones: la parte que más rinde y más se hace mal',
      p:[
        'Ante un adulto que no responde y no respira con normalidad, la prioridad es activar el sistema de emergencias e iniciar compresiones torácicas de inmediato, sin esperar a confirmar el pulso con certeza (eso puede hacer perder tiempo valioso, y hasta el personal entrenado tiene dificultad para palpar un pulso débil con rapidez). Las compresiones se dan en el centro del pecho, a una frecuencia de 100 a 120 por minuto, con una profundidad de al menos 5 centímetros en el adulto, permitiendo que el tórax vuelva a expandirse por completo entre una compresión y otra, y con la menor interrupción posible en toda la secuencia.',
        'Ejemplo trabajado: comprimir demasiado lento o demasiado superficial reduce mucho el flujo de sangre generado artificialmente hacia el cerebro y el corazón, aunque técnicamente "se esté haciendo RCP". La calidad de la compresión -frecuencia, profundidad, permitir la reexpansión completa, minimizar interrupciones- importa tanto como el hecho de estarla haciendo; una RCP técnicamente presente pero de mala calidad puede rendir muy poco flujo real, dando una falsa sensación de estar ayudando.'
      ]
    },
    {
      t:'Desfibrilación temprana y el papel del reanimador sin entrenamiento',
      p:[
        'La *desfibrilación* temprana, cuando el ritmo del paro lo permite, es el segundo eslabón más determinante de la cadena después de las compresiones: un desfibrilador automático externo (DAE), cada vez más presente en espacios públicos, puede ser usado por cualquier persona sin entrenamiento médico formal, porque el propio dispositivo analiza el ritmo cardíaco y solo indica la descarga cuando corresponde, guiando por voz cada paso del proceso.',
        'Para un reanimador sin entrenamiento formal, las guías actuales priorizan la RCP "solo con las manos" (compresiones continuas, sin ventilaciones de rescate): es más fácil de hacer bien bajo presión y evita las pausas para ventilar, que suelen ser largas e ineficientes cuando no se tiene práctica -una simplificación deliberada, pensada para que más personas se animen a actuar en vez de no hacer nada por miedo a hacerlo mal.'
      ],
      foco:[
        'Consideración clínica: en un paro presenciado fuera del hospital, la diferencia entre sobrevivir y no sobrevivir depende, mucho más que de la tecnología hospitalaria disponible después, de que alguien presente en ese primer minuto haga algo -aunque sea de forma imperfecta- en vez de esperar a que llegue ayuda especializada.'
      ]
    }
  ],
  ref:'American Heart Association, Guías de RCP y ACE.'
},

'via-aerea-ventilacion': {
  tema:'Vía aérea y ventilación',
  bloque:'Soporte Vital Básico y Avanzado', programa:'unirm', cuatri:9, min:13,
  idea:'Antes de poder ventilar a alguien, primero hay que asegurarse de que el aire tenga un camino libre para llegar a los pulmones: en una persona inconsciente, la propia lengua es, con diferencia, la causa más frecuente de obstrucción de la vía aérea.',
  claves:['vía aérea','maniobra frente-mentón','cánula orofaríngea','ventilación con bolsa mascarilla'],
  sigue:'ritmos-paro-desfibrilacion',
  secciones:[
    {
      t:'Por qué la vía aérea se obstruye en una persona inconsciente',
      p:[
        'En una persona con el nivel de conciencia deprimido, el tono muscular de la lengua y de los tejidos blandos de la garganta disminuye, y la lengua puede caer hacia atrás, obstruyendo parcial o totalmente el paso del aire -es, con diferencia, la causa más frecuente de obstrucción de la *vía aérea* en un paciente inconsciente, mucho antes de pensar en otras causas como un cuerpo extraño o una lesión traumática. La *maniobra frente-mentón* (inclinar la cabeza hacia atrás sujetando la frente, y elevar el mentón con los dedos de la otra mano) desplaza la lengua hacia adelante, despejando ese paso, y es el primer paso básico ante cualquier paciente inconsciente que no respira con normalidad.',
        'Esta maniobra es simple pero decisiva: en muchos casos, solo con reposicionar la vía aérea de esta forma la persona vuelve a respirar espontáneamente, sin necesitar ninguna intervención adicional -por eso es, junto con el reconocimiento del paro, de los primeros pasos que se enseñan en cualquier entrenamiento básico de reanimación.'
      ]
    },
    {
      t:'Dispositivos para mantener la vía aérea abierta',
      p:[
        'La *cánula orofaríngea* es un dispositivo curvo que se inserta en la boca, ayudando a mantener la lengua alejada de la parte posterior de la garganta, útil en un paciente sin reflejo nauseoso (muy inconsciente, en paro o con un nivel de conciencia muy deprimido); en alguien con ese reflejo todavía presente, insertarla puede provocar vómito y, con él, el riesgo de aspiración del contenido gástrico hacia la vía aérea, empeorando la situación en vez de mejorarla.',
        'La *ventilación con bolsa mascarilla* (bolsa-válvula-mascarilla, o ambú) permite entregar aire a presión positiva directamente hacia los pulmones de un paciente que no respira por sí solo, sellando la mascarilla firmemente sobre la nariz y la boca y comprimiendo la bolsa de forma rítmica; un sellado deficiente hace que buena parte del aire escape hacia el ambiente en vez de entrar a los pulmones, por lo que la técnica del sellado es tan importante como el propio ritmo de ventilación.'
      ]
    },
    {
      t:'La excepción del trauma cervical',
      p:[
        'Cuando existe sospecha de traumatismo de columna cervical, la maniobra frente-mentón estándar se modifica: en su lugar se usa la *tracción mandibular*, que desplaza la mandíbula hacia adelante sin inclinar el cuello hacia atrás, precisamente para no agravar una posible lesión de la médula espinal, ya vista en Neuroanatomía, que la inclinación cervical podría empeorar.',
        'Esta modificación ilustra un principio general del soporte vital: la técnica correcta no es siempre la misma en todos los pacientes, sino la que mejor equilibra el objetivo inmediato (abrir la vía aérea) con el riesgo específico de ese paciente en particular (una posible lesión cervical no confirmada todavía).'
      ],
      foco:[
        'Consideración práctica: ante cualquier duda razonable sobre un posible trauma cervical (caída, accidente, golpe en la cabeza), se asume la precaución de columna cervical por defecto y se usa la tracción mandibular, en vez de arriesgarse a la maniobra frente-mentón estándar.'
      ]
    }
  ],
  ref:'American Heart Association, Guías de RCP y ACE.'
},

'ritmos-paro-desfibrilacion': {
  tema:'Ritmos de paro y desfibrilación',
  bloque:'Soporte Vital Básico y Avanzado', programa:'unirm', cuatri:9, min:14,
  idea:'No todos los paros cardíacos se tratan igual: solo la mitad de los ritmos posibles de un paro responden a la descarga eléctrica de un desfibrilador, y reconocer cuál ritmo tiene el paciente decide, de entrada, si esa descarga tiene sentido o no.',
  claves:['fibrilación ventricular','taquicardia ventricular sin pulso','asistolia','actividad eléctrica sin pulso'],
  sigue:'soporte-vital-avanzado-farmacos-algoritmo',
  secciones:[
    {
      t:'Ritmos desfibrilables: cuando hay actividad eléctrica caótica',
      p:[
        'La *fibrilación ventricular* es una actividad eléctrica caótica y desorganizada del ventrículo (retomando la electrofisiología cardíaca ya vista en Fisiología II, aquí completamente descontrolada), incapaz de generar una contracción efectiva ni, por tanto, ningún gasto cardíaco real -el corazón "tiembla" eléctricamente en vez de contraerse de forma coordinada. La *taquicardia ventricular sin pulso* es una actividad eléctrica organizada pero extremadamente rápida, también incapaz de generar un latido efectivo pese a tener, en el monitor, una apariencia más ordenada que la fibrilación ventricular.',
        'Ambos son ritmos "desfibrilables": la descarga eléctrica del desfibrilador despolariza de golpe a todo el músculo cardíaco a la vez, "reiniciando" eléctricamente el corazón, y dando al nodo sinusal (ya visto en Fisiología II como el marcapasos natural del corazón) la oportunidad de retomar el control del ritmo desde cero, con la esperanza de que resurja un ritmo organizado y efectivo tras esa descarga.'
      ]
    },
    {
      t:'Ritmos no desfibrilables: cuando el problema no es "demasiada" actividad eléctrica',
      p:[
        'La *asistolia* es la ausencia completa de actividad eléctrica cardíaca -una línea plana en el monitor- y no hay nada que "reiniciar" con una descarga, así que desfibrilar en asistolia no tiene ningún sentido fisiológico y solo retrasaría las compresiones torácicas, que sí importan en este ritmo. La *actividad eléctrica sin pulso* es, paradójicamente, un ritmo eléctrico organizado y aparentemente normal en el monitor, pero que no logra generar un pulso palpable ni gasto cardíaco efectivo -por ejemplo, por una causa mecánica subyacente, como una pérdida masiva de volumen sanguíneo o una obstrucción del llenado cardíaco (un taponamiento cardíaco, por ejemplo).',
        'Ninguno de estos dos ritmos es desfibrilable: el tratamiento se enfoca en RCP de alta calidad y en buscar activamente y corregir la causa subyacente que está impidiendo un latido efectivo, no en la descarga eléctrica, que en estos ritmos no tiene ningún fundamento fisiológico.'
      ]
    },
    {
      t:'Reconocer el ritmo: el paso que decide toda la conducta siguiente',
      p:[
        'Distinguir entre estos cuatro ritmos posibles de un paro cardíaco es, en la práctica, el paso que decide toda la conducta siguiente del equipo de reanimación: aplicar una descarga a un ritmo no desfibrilable no solo es inútil, sino que retrasa las compresiones torácicas continuas, que en ese momento sí son la intervención con mayor beneficio real.',
        'Por eso el algoritmo de paro (desarrollado con más detalle en el tema siguiente) incluye reevaluaciones periódicas del ritmo, precisamente porque un paciente puede pasar de un ritmo desfibrilable a uno no desfibrilable (o viceversa) durante la reanimación, y la conducta debe ajustarse en consecuencia en cada reevaluación.'
      ],
      foco:[
        'Regla clave: fibrilación ventricular y taquicardia ventricular sin pulso → SÍ desfibrilar. Asistolia y actividad eléctrica sin pulso → NO desfibrilar, priorizar RCP de calidad y buscar activamente la causa reversible subyacente.'
      ]
    }
  ],
  ref:'American Heart Association, Guías de RCP y ACE.'
},

'soporte-vital-avanzado-farmacos-algoritmo': {
  tema:'Soporte vital avanzado: fármacos y algoritmo',
  bloque:'Soporte Vital Básico y Avanzado', programa:'unirm', cuatri:9, min:13,
  idea:'El soporte vital avanzado no reemplaza a la RCP básica ya vista: la complementa, añadiendo fármacos y una vía de acceso a la circulación, sin que eso justifique nunca interrumpir las compresiones torácicas de calidad por más de unos segundos.',
  claves:['epinefrina','amiodarona','algoritmo de paro','vía intravenosa'],
  sigue:'obstruccion-via-aerea-cuerpo-extrano',
  secciones:[
    {
      t:'Dos fármacos centrales, con propósitos distintos',
      p:[
        'La *epinefrina* (adrenalina, ya vista como neurotransmisor y hormona del sistema simpático en Fisiología I) es el fármaco central del soporte vital avanzado en cualquier ritmo de paro: su efecto vasoconstrictor (a través de receptores alfa-adrenérgicos, ya vistos en Farmacología) redirige la poca sangre que la RCP logra mover artificialmente hacia el corazón y el cerebro, los órganos más prioritarios de proteger en ese momento crítico, sacrificando la perfusión de otros territorios menos urgentes.',
        'La *amiodarona* se reserva específicamente para los ritmos desfibrilables (fibrilación ventricular o taquicardia ventricular sin pulso) que persisten pese a la desfibrilación repetida, actuando sobre la conducción eléctrica del corazón (retomando la electrofisiología cardíaca de Fisiología II) para intentar estabilizar un ritmo que la descarga eléctrica por sí sola no logró revertir.'
      ]
    },
    {
      t:'La vía de acceso a la circulación',
      p:[
        'Estos fármacos requieren una *vía intravenosa* (o, si no se logra rápido, una vía intraósea, administrada directamente al hueso, cuya médula ósea tiene una red vascular que permite llegar a la circulación general casi tan rápido como una vena) para poder administrarse y llegar a la circulación de forma confiable durante el paro, cuando el colapso circulatorio dificulta encontrar una vena periférica accesible.',
        'La elección entre vía intravenosa e intraósea depende, en la práctica, de qué tan rápido se puede lograr un acceso confiable: en un paciente en paro, cada segundo sin acceso a la circulación retrasa la administración de fármacos que podrían ser determinantes, así que no vale la pena insistir demasiado tiempo en una vía intravenosa difícil cuando la intraósea está disponible.'
      ]
    },
    {
      t:'El algoritmo: una secuencia, no una lista suelta',
      p:[
        'El *algoritmo de paro* organiza estas intervenciones en una secuencia temporal precisa (RCP continua, desfibrilación si el ritmo lo indica, fármacos administrados en momentos determinados, reevaluación periódica del ritmo), diseñada precisamente para minimizar las interrupciones de las compresiones torácicas -recordando que la calidad de las compresiones, ya vista en la cadena de supervivencia, sigue siendo la base de todo, y el resto de las intervenciones se insertan alrededor de ella, no en su lugar.',
        'Cada pausa en las compresiones -para desfibrilar, para intubar, para verificar el ritmo- se planifica para ser lo más breve posible, porque el flujo sanguíneo generado por las compresiones cae rápidamente apenas se interrumpen, y recuperar ese flujo eficiente lleva varias compresiones adicionales una vez que se reanudan.'
      ],
      foco:[
        'Consideración clínica: ningún fármaco ni ninguna descarga eléctrica sustituye a la RCP de calidad; el algoritmo de soporte vital avanzado está diseñado para añadirse a las compresiones continuas, no para pausarlas más de lo estrictamente necesario.'
      ]
    }
  ],
  ref:'American Heart Association, Guías de RCP y ACE.'
},

'obstruccion-via-aerea-cuerpo-extrano': {
  tema:'Obstrucción de vía aérea por cuerpo extraño',
  bloque:'Soporte Vital Básico y Avanzado', programa:'unirm', cuatri:9, min:13,
  idea:'Distinguir una obstrucción LEVE de una SEVERA de la vía aérea no es un detalle menor: determina si hay que animar a la persona a toser con fuerza (dejarla resolver el problema ella misma) o intervenir de inmediato con una maniobra física.',
  claves:['maniobra de Heimlich','atragantamiento','obstrucción de vía aérea'],
  sigue:'rcp-pediatrica',
  secciones:[
    {
      t:'Leve o severa: la tos como criterio central',
      p:[
        'Ante un *atragantamiento*, la primera pregunta clínica es si la persona puede toser con fuerza y hablar (obstrucción leve, el flujo de aire todavía pasa parcialmente alrededor del cuerpo extraño) o si no puede emitir sonido ni toser de forma efectiva, llevándose las manos al cuello -el signo universal de atragantamiento- (obstrucción severa, el flujo de aire está prácticamente bloqueado por completo).',
        'En la obstrucción leve, se anima a la persona a seguir tosiendo, que es el mecanismo natural más eficaz para expulsar el cuerpo extraño, generando una presión mucho mayor que cualquier maniobra externa; intervenir físicamente en ese momento -por ejemplo, golpeando la espalda sin necesidad- puede convertir una obstrucción parcial en una completa, empujando el objeto más profundamente en vez de expulsarlo.'
      ]
    },
    {
      t:'La maniobra de Heimlich',
      p:[
        'Ante una *obstrucción de vía aérea* severa en un adulto consciente, la *maniobra de Heimlich* (compresiones abdominales) genera un aumento súbito de la presión dentro del abdomen y el tórax, empujando el aire residual de los pulmones hacia arriba con fuerza suficiente para expulsar el cuerpo extraño, de forma similar a un golpe de tos artificial y forzado, aprovechando el aire que ya está dentro de los pulmones en vez de intentar introducir aire nuevo.',
        'Se coloca al reanimador detrás de la persona, con los puños entrelazados justo por encima del ombligo y por debajo del esternón, aplicando compresiones firmes y rápidas hacia adentro y hacia arriba, repitiendo la maniobra hasta que el objeto sea expulsado o la persona pierda el conocimiento.'
      ]
    },
    {
      t:'Cuando la persona pierde el conocimiento',
      p:[
        'Si la persona pierde el conocimiento durante una obstrucción severa, se pasa directamente a la secuencia de RCP básica ya vista, con una particularidad importante: revisar la boca antes de cada intento de ventilación, buscando el objeto que causó la obstrucción, si se hizo visible durante las compresiones -las compresiones torácicas de la RCP, de hecho, pueden generar suficiente presión para desplazar el cuerpo extraño hacia una posición más visible o incluso expulsarlo.',
        'Esta transición de la maniobra de Heimlich a la RCP básica es un buen ejemplo de cómo los distintos temas del bloque se conectan en la práctica real: no son protocolos aislados, sino una secuencia continua que se adapta según cómo evoluciona el estado del paciente frente al reanimador.'
      ],
      foco:[
        'Consideración clínica: no intentar la maniobra de Heimlich en una obstrucción LEVE (mientras la persona todavía tose con fuerza) es tan importante como saber aplicarla correctamente en una obstrucción SEVERA -la intervención incorrecta en el momento incorrecto puede empeorar la situación.'
      ]
    }
  ],
  ref:'American Heart Association, Guías de RCP y ACE.'
},

'rcp-pediatrica': {
  tema:'Reanimación cardiopulmonar pediátrica',
  bloque:'Soporte Vital Básico y Avanzado', programa:'unirm', cuatri:9, min:13,
  idea:'La reanimación en niños no es simplemente "la misma técnica del adulto, pero más suave": la causa más frecuente de paro es distinta, y esa diferencia cambia por completo qué se prioriza en los primeros minutos.',
  claves:['RCP pediátrica','relación compresión ventilación en niños','paro pediátrico'],
  sigue:'evaluacion-inicial-trauma-abcde',
  secciones:[
    {
      t:'Una causa distinta cambia la prioridad inicial',
      p:[
        'El *paro pediátrico* casi nunca se origina, como en el adulto, por un problema cardíaco primario (una arritmia por enfermedad coronaria, por ejemplo, poco frecuente en niños sanos): con mucha más frecuencia se origina por una falla RESPIRATORIA que progresa hasta el paro cardíaco -por asfixia, por una enfermedad respiratoria severa, retomando la insuficiencia respiratoria ya vista en Fisiopatología.',
        'Esto significa que, en un niño, el corazón suele fallar como consecuencia FINAL de la falta de oxígeno prolongada, no como el problema inicial del cuadro -una diferencia fundamental que cambia por completo la prioridad del manejo desde el primer momento de la reanimación pediátrica.'
      ]
    },
    {
      t:'Por qué la ventilación pesa más en la RCP pediátrica',
      p:[
        'Precisamente por ese origen respiratorio más frecuente, las guías de *RCP pediátrica* dan más peso relativo a la ventilación -a diferencia del adulto, donde las guías actuales priorizan las compresiones continuas incluso por encima de la ventilación, como ya se vio en la cadena de supervivencia-: la *relación compresión ventilación en niños* incluye ventilaciones de rescate de forma más prominente dentro de la secuencia, porque corregir la causa respiratoria de fondo es, en este grupo de edad, más determinante para la sobrevida que en el adulto.',
        'Esta diferencia también se refleja en la técnica de las compresiones: en lactantes y niños pequeños se ajusta tanto la profundidad como el punto de aplicación de las compresiones según el tamaño corporal, algo que en el adulto es mucho más estandarizado.'
      ]
    },
    {
      t:'Reconocer el deterioro antes de que llegue al paro',
      p:[
        'Otra diferencia relevante de la RCP pediátrica es la importancia de reconocer los signos de deterioro respiratorio ANTES de que progrese a un paro completo: en un niño, hay con frecuencia una ventana de tiempo donde la falla respiratoria ya es evidente (dificultad para respirar, coloración anormal de la piel, disminución del nivel de alerta) pero el corazón todavía no ha fallado -intervenir en esa ventana, antes del paro cardíaco, tiene un pronóstico considerablemente mejor que esperar a que el corazón ya haya fallado por completo.',
        'Esto justifica que buena parte del entrenamiento en reanimación pediátrica se enfoque tanto en reconocer el deterioro temprano como en la reanimación del paro ya establecido, a diferencia del entrenamiento en adultos, más centrado en el manejo del paro cardíaco ya ocurrido.'
      ],
      foco:[
        'Consideración clínica: reconocer que el paro pediátrico suele tener un origen respiratorio es lo que justifica todas las diferencias técnicas de la RCP pediátrica frente a la del adulto -no son diferencias arbitrarias de protocolo, sino consecuencia directa de una fisiopatología distinta.'
      ]
    }
  ],
  ref:'American Heart Association, Guías de RCP y ACE Pediátrico.'
},

'evaluacion-inicial-trauma-abcde': {
  tema:'Evaluación inicial del trauma (ABCDE)',
  bloque:'Soporte Vital Básico y Avanzado', programa:'unirm', cuatri:9, min:13,
  idea:'Este último tema del bloque cierra con un principio que resume, en el fondo, toda la lógica del soporte vital: evaluar y tratar en el orden de lo que mata más rápido primero, no en el orden de lo más visible o lo más aparatoso.',
  claves:['ABCDE','evaluación primaria del trauma','control de hemorragia externa'],
  sigue:'consentimiento-informado',
  secciones:[
    {
      t:'Una secuencia ordenada por lo que mata más rápido',
      p:[
        'El *ABCDE* organiza la *evaluación primaria del trauma* en un orden deliberado: A (vía Aérea, con control simultáneo de la columna cervical, retomando la vía aérea ya vista en este bloque), B (Buena ventilación/respiración, retomando la mecánica respiratoria ya vista en Fisiología II), C (Circulación, con *control de hemorragia externa* como prioridad inmediata dentro de este paso), D (Déficit neurológico, una evaluación rápida del nivel de conciencia y la función neurológica básica), y E (Exposición del paciente para buscar lesiones no evidentes a primera vista, con control simultáneo de la temperatura corporal para evitar la hipotermia).',
        'El orden no es alfabético por casualidad: refleja, de forma deliberada, la urgencia relativa de cada problema -una vía aérea obstruida mata en minutos; una hemorragia externa no controlada puede matar en minutos también, pero se aborda después de asegurar que el aire pueda entrar; un déficit neurológico, aunque grave, generalmente da algo más de margen de tiempo relativo que los tres primeros pasos.'
      ]
    },
    {
      t:'Por qué se completa un paso antes de pasar al siguiente',
      p:[
        'Un principio central de esta evaluación es no avanzar al siguiente paso hasta resolver (o al menos estabilizar) el problema identificado en el paso anterior: de nada sirve evaluar la circulación con detalle si la vía aérea sigue obstruida, porque el paciente puede morir por ese problema antes de que el segundo llegue siquiera a importar en la práctica.',
        'Esta disciplina de "resolver antes de avanzar" es lo que distingue una evaluación sistemática de trauma de una evaluación desordenada guiada por lo más visible: una herida sangrante y aparatosa puede captar toda la atención inicial, pero si la vía aérea del paciente está comprometida, esa herida -por dramática que parezca- no es la prioridad real en ese momento.'
      ]
    },
    {
      t:'El cierre del bloque completo de Soporte Vital',
      p:[
        'Este tema conecta directamente con el primer tema del bloque, la cadena de supervivencia: ambos comparten la misma lógica de fondo, que el orden y la rapidez de las acciones -no solo saber técnicamente qué hacer- es lo que determina si la persona sobrevive a una emergencia médica.',
        'A lo largo de todo el bloque, cada tema retomó esta misma idea desde un ángulo distinto: la secuencia de la cadena de supervivencia, la priorización de la vía aérea antes de la ventilación, el reconocimiento del ritmo antes de decidir si desfibrilar, la secuencia del algoritmo de paro, la distinción entre obstrucción leve y severa, y la prioridad respiratoria en la RCP pediátrica -todas son variaciones del mismo principio central de actuar en el orden correcto.'
      ],
      foco:[
        'Este tema cierra el bloque completo de Soporte Vital retomando su idea central, ya presente desde la cadena de supervivencia del primer tema: en una emergencia, el ORDEN de las acciones -no solo saber qué hacer- es lo que determina si la persona sobrevive.'
      ]
    }
  ],
  ref:'American College of Surgeons, Soporte Vital Avanzado en Trauma (ATLS).'
}

});
