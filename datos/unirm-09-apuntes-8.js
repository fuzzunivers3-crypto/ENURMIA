/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 8)
   Termina de cubrir SOPORTE VITAL BASICO Y AVANZADO por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'via-aerea-ventilacion': {
  tema:'Vía aérea y ventilación',
  bloque:'Soporte Vital Básico y Avanzado', programa:'unirm', cuatri:9, min:7,
  idea:'Antes de poder ventilar a alguien, primero hay que asegurarse de que el aire tenga un camino libre para llegar a los pulmones: en una persona inconsciente, la propia lengua es, con diferencia, la causa más frecuente de obstrucción de la vía aérea.',
  claves:['vía aérea','maniobra frente-mentón','cánula orofaríngea','ventilación con bolsa mascarilla'],
  sigue:'ritmos-paro-desfibrilacion',
  secciones:[
    {
      t:'Por qué la vía aérea se obstruye en una persona inconsciente',
      p:[
        'En una persona con el nivel de conciencia deprimido, el tono muscular de la lengua y de los tejidos blandos de la garganta disminuye, y la lengua puede caer hacia atrás, obstruyendo parcial o totalmente el paso del aire —es, con diferencia, la causa más frecuente de obstrucción de la *vía aérea* en un paciente inconsciente, mucho antes de pensar en otras causas. La *maniobra frente-mentón* (inclinar la cabeza hacia atrás sujetando la frente, y elevar el mentón con los dedos de la otra mano) desplaza la lengua hacia adelante, despejando ese paso, y es el primer paso básico ante cualquier paciente inconsciente que no respira con normalidad.'
      ]
    },
    {
      t:'Dispositivos para mantener la vía aérea abierta',
      p:[
        'La *cánula orofaríngea* es un dispositivo curvo que se inserta en la boca, ayudando a mantener la lengua alejada de la parte posterior de la garganta, útil en un paciente sin reflejo nauseoso (muy inconsciente); en alguien con ese reflejo todavía presente, insertarla puede provocar vómito. La *ventilación con bolsa mascarilla* (bolsa-válvula-mascarilla, ambú) permite entregar aire a presión positiva directamente hacia los pulmones de un paciente que no respira por sí solo, sellando la mascarilla firmemente sobre la nariz y la boca y comprimiendo la bolsa de forma rítmica.'
      ],
      foco:[
        'Consideración práctica: la maniobra frente-mentón se modifica en sospecha de traumatismo de columna cervical (se usa en su lugar la tracción mandibular, que no inclina el cuello), precisamente para no agravar una posible lesión de la médula espinal ya vista en Neuroanatomía.'
      ]
    }
  ],
  ref:'American Heart Association, Guías de RCP y ACE.'
},

'ritmos-paro-desfibrilacion': {
  tema:'Ritmos de paro y desfibrilación',
  bloque:'Soporte Vital Básico y Avanzado', programa:'unirm', cuatri:9, min:8,
  idea:'No todos los paros cardíacos se tratan igual: solo la mitad de los ritmos posibles de un paro responden a la descarga eléctrica de un desfibrilador, y reconocer cuál ritmo tiene el paciente decide, de entrada, si esa descarga tiene sentido o no.',
  claves:['fibrilación ventricular','taquicardia ventricular sin pulso','asistolia','actividad eléctrica sin pulso'],
  sigue:'soporte-vital-avanzado-farmacos-algoritmo',
  secciones:[
    {
      t:'Ritmos desfibrilables: cuando hay actividad eléctrica caótica',
      p:[
        'La *fibrilación ventricular* es una actividad eléctrica caótica y desorganizada del ventrículo (retomando la electrofisiología cardíaca ya vista en Fisiología II, aquí completamente descontrolada), incapaz de generar una contracción efectiva ni, por tanto, ningún gasto cardíaco. La *taquicardia ventricular sin pulso* es una actividad eléctrica organizada pero extremadamente rápida, también incapaz de generar un latido efectivo. Ambos son ritmos "desfibrilables": la descarga eléctrica del desfibrilador despolariza de golpe a todo el músculo cardíaco a la vez, dando al nodo sinusal (ya visto en Fisiología II) la oportunidad de retomar el control del ritmo desde cero, con la esperanza de que resurja un ritmo organizado y efectivo.'
      ]
    },
    {
      t:'Ritmos no desfibrilables: cuando el problema no es "demasiada" actividad eléctrica',
      p:[
        'La *asistolia* es la ausencia completa de actividad eléctrica cardíaca —no hay nada que "reiniciar" con una descarga, así que desfibrilar en asistolia no tiene ningún sentido fisiológico. La *actividad eléctrica sin pulso* es, paradójicamente, un ritmo eléctrico organizado y aparentemente normal en el monitor, pero que no logra generar un pulso palpable ni gasto cardíaco efectivo (por ejemplo, por una causa mecánica subyacente, como una pérdida masiva de volumen o una obstrucción del llenado cardíaco). Ninguno de estos dos ritmos es desfibrilable: el tratamiento se enfoca en RCP de alta calidad y en buscar y corregir la causa subyacente, no en la descarga eléctrica.'
      ],
      foco:[
        'Regla clave: fibrilación ventricular y taquicardia ventricular sin pulso → SÍ desfibrilar. Asistolia y actividad eléctrica sin pulso → NO desfibrilar, priorizar RCP de calidad y buscar la causa reversible.'
      ]
    }
  ],
  ref:'American Heart Association, Guías de RCP y ACE.'
},

'soporte-vital-avanzado-farmacos-algoritmo': {
  tema:'Soporte vital avanzado: fármacos y algoritmo',
  bloque:'Soporte Vital Básico y Avanzado', programa:'unirm', cuatri:9, min:7,
  idea:'El soporte vital avanzado no reemplaza a la RCP básica ya vista: la complementa, añadiendo fármacos y una vía de acceso a la circulación, sin que eso justifique nunca interrumpir las compresiones torácicas de calidad por más de unos segundos.',
  claves:['epinefrina','amiodarona','algoritmo de paro','vía intravenosa'],
  sigue:'obstruccion-via-aerea-cuerpo-extrano',
  secciones:[
    {
      t:'Dos fármacos centrales, con propósitos distintos',
      p:[
        'La *epinefrina* (adrenalina, ya vista como neurotransmisor y hormona del sistema simpático en Fisiología I) es el fármaco central del soporte vital avanzado en cualquier ritmo de paro: su efecto vasoconstrictor (a través de receptores alfa-adrenérgicos, ya vistos en Farmacología) redirige la poca sangre que la RCP logra mover hacia el corazón y el cerebro, los órganos más prioritarios en ese momento. La *amiodarona* se reserva específicamente para los ritmos desfibrilables (fibrilación ventricular o taquicardia ventricular sin pulso) que persisten pese a la desfibrilación, actuando sobre la conducción eléctrica del corazón para intentar estabilizar el ritmo.',
        'Estos fármacos requieren una *vía intravenosa* (o, si no se logra rápido, una vía intraósea, directamente al hueso) para poder administrarse y llegar a la circulación de forma confiable durante el paro.'
      ]
    },
    {
      t:'El algoritmo: una secuencia, no una lista suelta',
      p:[
        'El *algoritmo de paro* organiza estas intervenciones en una secuencia temporal precisa (RCP continua, desfibrilación si el ritmo lo indica, fármacos en momentos determinados, reevaluación periódica del ritmo), diseñada precisamente para minimizar las interrupciones de las compresiones torácicas —recordando que la calidad de las compresiones, ya vista en la cadena de supervivencia, sigue siendo la base de todo, y el resto de las intervenciones se insertan alrededor de ella, no en su lugar.'
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
  bloque:'Soporte Vital Básico y Avanzado', programa:'unirm', cuatri:9, min:6,
  idea:'Distinguir una obstrucción LEVE de una SEVERA de la vía aérea no es un detalle menor: determina si hay que animar a la persona a toser con fuerza (dejarla resolver el problema ella misma) o intervenir de inmediato con una maniobra física.',
  claves:['maniobra de Heimlich','atragantamiento','obstrucción de vía aérea'],
  sigue:'rcp-pediatrica',
  secciones:[
    {
      t:'Leve o severa: la tos como criterio central',
      p:[
        'Ante un *atragantamiento*, la primera pregunta clínica es si la persona puede toser con fuerza y hablar (obstrucción leve, el flujo de aire todavía pasa parcialmente) o si no puede emitir sonido ni toser de forma efectiva, llevándose las manos al cuello (obstrucción severa, el flujo de aire está prácticamente bloqueado). En la obstrucción leve, se anima a la persona a seguir tosiendo, que es el mecanismo natural más eficaz para expulsar el cuerpo extraño; intervenir físicamente en ese momento puede convertir una obstrucción parcial en una completa.'
      ]
    },
    {
      t:'La maniobra de Heimlich',
      p:[
        'Ante una *obstrucción de vía aérea* severa en un adulto consciente, la *maniobra de Heimlich* (compresiones abdominales) genera un aumento súbito de la presión dentro del abdomen y el tórax, empujando el aire residual de los pulmones hacia arriba con fuerza suficiente para expulsar el cuerpo extraño, de forma similar a un golpe de tos artificial y forzado. Se coloca al reanimador detrás de la persona, con los puños entrelazados justo por encima del ombligo, aplicando compresiones firmes y rápidas hacia adentro y hacia arriba.'
      ],
      foco:[
        'Si la persona pierde el conocimiento durante una obstrucción severa, se pasa directamente a la secuencia de RCP básica ya vista (con la particularidad de revisar la boca antes de cada intento de ventilación, buscando el objeto que causó la obstrucción, si se hizo visible).'
      ]
    }
  ],
  ref:'American Heart Association, Guías de RCP y ACE.'
},

'rcp-pediatrica': {
  tema:'Reanimación cardiopulmonar pediátrica',
  bloque:'Soporte Vital Básico y Avanzado', programa:'unirm', cuatri:9, min:7,
  idea:'La reanimación en niños no es simplemente "la misma técnica del adulto, pero más suave": la causa más frecuente de paro es distinta, y esa diferencia cambia por completo qué se prioriza en los primeros minutos.',
  claves:['RCP pediátrica','relación compresión ventilación en niños','paro pediátrico'],
  sigue:'evaluacion-inicial-trauma-abcde',
  secciones:[
    {
      t:'Una causa distinta cambia la prioridad inicial',
      p:[
        'El *paro pediátrico* casi nunca se origina, como en el adulto, por un problema cardíaco primario (una arritmia por enfermedad coronaria, por ejemplo): con mucha más frecuencia se origina por una falla RESPIRATORIA que progresa hasta el paro cardíaco (por asfixia, por una enfermedad respiratoria severa, retomando la insuficiencia respiratoria ya vista en Fisiopatología). Esto significa que, en un niño, el corazón suele fallar como consecuencia FINAL de la falta de oxígeno, no como el problema inicial —una diferencia que cambia la prioridad del manejo.'
      ]
    },
    {
      t:'Por qué la ventilación pesa más en la RCP pediátrica',
      p:[
        'Precisamente por ese origen respiratorio más frecuente, las guías de *RCP pediátrica* dan más peso relativo a la ventilación (a diferencia del adulto, donde las guías actuales priorizan las compresiones continuas incluso por encima de la ventilación, como ya se vio en la cadena de supervivencia): la *relación compresión ventilación en niños* incluye ventilaciones de rescate de forma más prominente dentro de la secuencia, porque corregir la causa respiratoria de fondo es, en este grupo de edad, más determinante para la sobrevida.'
      ],
      foco:[
        'Consideración clínica: reconocer que el paro pediátrico suele tener un origen respiratorio es lo que justifica todas las diferencias técnicas de la RCP pediátrica frente a la del adulto, no son diferencias arbitrarias de protocolo.'
      ]
    }
  ],
  ref:'American Heart Association, Guías de RCP y ACE Pediátrico.'
},

'evaluacion-inicial-trauma-abcde': {
  tema:'Evaluación inicial del trauma (ABCDE)',
  bloque:'Soporte Vital Básico y Avanzado', programa:'unirm', cuatri:9, min:7,
  idea:'Este último tema del bloque cierra con un principio que resume, en el fondo, toda la lógica del soporte vital: evaluar y tratar en el orden de lo que mata más rápido primero, no en el orden de lo más visible o lo más aparatoso.',
  claves:['ABCDE','evaluación primaria del trauma','control de hemorragia externa'],
  sigue:null,
  secciones:[
    {
      t:'Una secuencia ordenada por lo que mata más rápido',
      p:[
        'El *ABCDE* organiza la *evaluación primaria del trauma* en un orden deliberado: A (vía Aérea, con control de la columna cervical, retomando la vía aérea ya vista en este bloque), B (Buena ventilación/respiración, retomando la mecánica respiratoria ya vista en Fisiología II), C (Circulación, con *control de hemorragia externa* como prioridad inmediata dentro de este paso), D (Déficit neurológico, una evaluación rápida del nivel de conciencia y la función neurológica básica), y E (Exposición del paciente para buscar lesiones no evidentes a primera vista, con control simultáneo de la temperatura corporal).',
        'El orden no es alfabético por casualidad: refleja, de forma deliberada, la urgencia relativa de cada problema —una vía aérea obstruida mata en minutos; una hemorragia externa no controlada puede matar en minutos también, pero después de asegurar que el aire pueda entrar; un déficit neurológico, aunque grave, generalmente da algo más de margen de tiempo relativo que los tres primeros pasos.'
      ]
    },
    {
      t:'Por qué se completa un paso antes de pasar al siguiente',
      p:[
        'Un principio central de esta evaluación es no avanzar al siguiente paso hasta resolver (o al menos estabilizar) el problema identificado en el paso anterior: de nada sirve evaluar la circulación con detalle si la vía aérea sigue obstruida, porque el paciente puede morir por ese problema antes de que el segundo importe.'
      ],
      foco:[
        'Este tema cierra el bloque completo de Soporte Vital retomando su idea central, ya presente desde la cadena de supervivencia del primer tema: en una emergencia, el ORDEN de las acciones —no solo saber qué hacer— es lo que determina si la persona sobrevive.'
      ]
    }
  ],
  ref:'American College of Surgeons, Soporte Vital Avanzado en Trauma (ATLS).'
}

});
