/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 12 (lote 5)
   Cubre DERMATOLOGÍA al estandar extenso (3 secciones, ~200-300
   palabras por seccion, min 12-14). Quinta materia del
   cuatrimestre 12 (2 creditos, 7 temas).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== DERMATOLOGÍA ==================== */
'lesiones-elementales-piel': {
  tema:'Lesiones elementales de la piel',
  bloque:'Dermatología', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema abre la materia de Dermatología estableciendo el vocabulario descriptivo básico que permite comunicar con precisión cualquier hallazgo cutáneo, retomando la importancia ya vista repetidamente en este pensum sobre describir un hallazgo con precisión antes de interpretarlo.',
  claves:['mácula y pápula','vesícula y ampolla','lesiones elementales dermatológicas'],
  sigue:'dermatitis-infecciones-cutaneas-comunes',
  secciones:[
    {
      t:'La mácula y la pápula: la distinción básica de relieve',
      p:[
        'La *mácula y pápula* representan la distinción más básica en la descripción de lesiones cutáneas: una mácula es un cambio de coloración de la piel sin relieve palpable (plana al tacto), mientras una pápula es una lesión sólida y elevada, palpable, generalmente de menos de un centímetro -esta distinción de relieve, aparentemente simple, es la primera pregunta que debe responderse ante cualquier lesión cutánea nueva.',
        'Esta distinción retoma directamente un principio general ya visto repetidamente en este pensum sobre construir un vocabulario descriptivo preciso antes de razonar sobre el diagnóstico: nombrar correctamente una lesión como mácula o pápula no es un ejercicio semántico, sino el primer paso que permite comunicar el hallazgo de forma reproducible entre distintos profesionales de salud y iniciar un diagnóstico diferencial apropiado.'
      ]
    },
    {
      t:'La vesícula y la ampolla: la distinción por contenido y tamaño',
      p:[
        'La *vesícula y ampolla* son lesiones elevadas que contienen líquido en su interior, distinguidas principalmente por su tamaño: una vesícula es pequeña (generalmente menor de medio centímetro), mientras una ampolla es de mayor tamaño -esta distinción de tamaño tiene relevancia clínica directa, ya que ciertas enfermedades cutáneas se caracterizan específicamente por generar uno u otro tipo de lesión de forma predominante.',
        'Reconocer si una lesión con contenido líquido es una vesícula o una ampolla orienta directamente el diagnóstico diferencial hacia grupos de enfermedades distintos -esta lógica retoma la importancia ya vista repetidamente en este pensum sobre cómo una característica descriptiva aparentemente simple (en este caso, el tamaño de una lesión con contenido líquido) puede tener un valor diagnóstico diferencial considerable cuando se aplica de forma sistemática.'
      ]
    },
    {
      t:'Las lesiones elementales dermatológicas como lenguaje común',
      p:[
        'Las *lesiones elementales dermatológicas* incluyen, además de las ya mencionadas, otras categorías como la placa (una pápula de mayor tamaño), la pústula (una lesión elevada con contenido purulento), la costra, la erosión, y la úlcera, entre otras -dominar esta terminología completa es indispensable porque la descripción precisa del tipo de lesión, su distribución, y su evolución en el tiempo constituye la base de todo razonamiento diagnóstico dermatológico posterior.',
        'Este tema cierra estableciendo la base descriptiva sobre la que se construirán los 6 temas restantes de esta materia: cada condición dermatológica específica que se desarrollará después -dermatitis, infecciones, micosis, cáncer de piel, enfermedades ampollosas, acné, urgencias- se describirá en términos de estas lesiones elementales, retomando la lógica ya vista en otras materias de este pensum sobre construir el razonamiento clínico sobre una base descriptiva y fisiológica sólida antes de abordar las condiciones específicas.'
      ],
      foco:[
        '*Consideración clínica*: describir con precisión el tipo de lesión elemental (mácula, pápula, vesícula, ampolla, entre otras), su distribución y su evolución en el tiempo es la base indispensable de todo razonamiento diagnóstico dermatológico posterior.'
      ]
    }
  ],
  ref:'Fitzpatrick, Dermatología Clínica, cap. 1.'
},

'dermatitis-infecciones-cutaneas-comunes': {
  tema:'Dermatitis e infecciones cutáneas comunes',
  bloque:'Dermatología', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema retoma directamente las lesiones elementales ya vistas para describir dos de las condiciones dermatológicas más frecuentes en la práctica clínica general, distinguiendo un mecanismo inflamatorio de uno infeccioso.',
  claves:['dermatitis atópica','dermatitis de contacto','impétigo'],
  sigue:'micosis-cutaneas',
  secciones:[
    {
      t:'La dermatitis atópica como condición inflamatoria crónica',
      p:[
        'La *dermatitis atópica* es una condición inflamatoria crónica de la piel, con frecuencia de inicio en la infancia, caracterizada por piel seca, prurito intenso, y lesiones eccematosas que típicamente afectan pliegues como los codos y las rodillas -su asociación frecuente con otras condiciones atópicas (asma, ya visto en Pediatría I, y rinitis alérgica) retoma la importancia ya vista sobre reconocer que ciertas condiciones tienden a coexistir en el mismo paciente por compartir mecanismos inmunológicos subyacentes similares.',
        'El prurito intenso de la dermatitis atópica genera un ciclo característico donde el rascado repetido perpetúa y empeora la inflamación cutánea, un patrón que retoma la importancia ya vista repetidamente en este pensum sobre reconocer ciclos que se autoperpetúan clínicamente: romper este ciclo mediante el control apropiado del prurito es tan importante en el manejo como tratar la inflamación subyacente en sí misma.'
      ]
    },
    {
      t:'La dermatitis de contacto: una reacción a un agente externo identificable',
      p:[
        'La *dermatitis de contacto* es una reacción inflamatoria de la piel causada por el contacto directo con una sustancia externa específica, ya sea por irritación directa o por una reacción alérgica -a diferencia de la dermatitis atópica, de causa constitucional e interna, la dermatitis de contacto tiene con frecuencia un agente causal externo identificable, cuya eliminación es el paso más importante del manejo.',
        'Esta distinción entre una causa constitucional (dermatitis atópica) y una causa externa identificable (dermatitis de contacto) retoma un principio general ya visto repetidamente en este pensum sobre reconocer mecanismos causales distintos detrás de presentaciones clínicas superficialmente similares: la historia clínica dirigida hacia posibles exposiciones recientes es indispensable para identificar el agente causal en la dermatitis de contacto, un paso que no aplica de la misma forma en la dermatitis atópica.'
      ]
    },
    {
      t:'El impétigo como infección bacteriana superficial',
      p:[
        'El *impétigo* es una infección bacteriana superficial de la piel, particularmente frecuente en niños, que se presenta característicamente con lesiones costrosas de aspecto melicérico (color miel), altamente contagiosa por contacto directo -a diferencia de las dos condiciones inflamatorias ya vistas en este tema, el impétigo es de origen infeccioso, lo que retoma directamente la importancia ya vista sobre distinguir un mecanismo inflamatorio de uno infeccioso ante una lesión cutánea.',
        'Este tema cierra retomando un principio general ya visto repetidamente en este pensum sobre reconocer el mecanismo subyacente (inflamatorio versus infeccioso) como determinante directo del manejo apropiado: mientras la dermatitis atópica y de contacto se manejan con medidas antiinflamatorias y evitación de desencadenantes, el impétigo, al ser infeccioso, requiere manejo antibiótico específico dirigido contra el microorganismo causal.'
      ],
      foco:[
        '*Consideración clínica*: distinguir si una lesión cutánea tiene un mecanismo inflamatorio (dermatitis) o infeccioso (impétigo) determina directamente el manejo apropiado -antiinflamatorio y evitación de desencadenantes en el primer caso, antibiótico en el segundo.'
      ]
    }
  ],
  ref:'Fitzpatrick, Dermatología Clínica, cap. 3.'
},

'micosis-cutaneas': {
  tema:'Micosis cutáneas',
  bloque:'Dermatología', programa:'unirm', cuatri:12, min:12,
  idea:'Las micosis cutáneas retoman directamente la importancia ya vista sobre infecciones micóticas en otro contexto de este pensum, aplicando ahora ese conocimiento específicamente a las infecciones fúngicas que afectan la piel, el cabello y las uñas.',
  claves:['tiña corporal','pitiriasis versicolor','onicomicosis'],
  sigue:'cancer-piel',
  secciones:[
    {
      t:'La tiña corporal como infección fúngica de patrón característico',
      p:[
        'La *tiña corporal* es una infección fúngica de la piel que se presenta característicamente con una lesión anular (en forma de anillo), con un borde activo elevado y descamativo y un centro relativamente más claro, un patrón visual reconocible que retoma la importancia ya vista repetidamente en este pensum sobre reconocer patrones morfológicos característicos que orientan directamente hacia el diagnóstico correcto.',
        'Este patrón anular específico, aunque característico, no debe confundirse automáticamente con cualquier lesión de forma circular -el diagnóstico diferencial de lesiones cutáneas circulares incluye otras condiciones, por lo que la confirmación mediante examen directo del hongo, cuando es necesaria, retoma la importancia ya vista sobre no basar un diagnóstico exclusivamente en un patrón visual, por característico que parezca, sin considerar la confirmación apropiada cuando el caso lo amerita.'
      ]
    },
    {
      t:'La pitiriasis versicolor y su relación con la flora cutánea normal',
      p:[
        'La *pitiriasis versicolor* es causada por un hongo que forma parte de la flora cutánea normal en su forma habitual, pero que en ciertas condiciones (calor, humedad, sudoración excesiva) prolifera de forma excesiva y genera manchas de coloración variable (más claras o más oscuras que la piel circundante), típicamente en el tronco -esta relación con un microorganismo normalmente presente, que se vuelve patológico solo bajo ciertas condiciones, retoma un principio general ya visto en otros contextos de este pensum.',
        'Reconocer que el microorganismo causal no es un patógeno extraño adquirido, sino un componente normal de la flora cutánea que prolifera excesivamente, retoma la importancia ya vista sobre distinguir infecciones por microorganismos oportunistas de aquellas por patógenos externos verdaderos: el manejo de la pitiriasis versicolor se dirige a controlar esa proliferación excesiva, no a erradicar un microorganismo que normalmente no debería estar presente en absoluto.'
      ]
    },
    {
      t:'La onicomicosis como infección fúngica de las uñas',
      p:[
        'La *onicomicosis* es la infección fúngica de las uñas, que genera cambios característicos como engrosamiento, decoloración (amarillenta o blanquecina), y fragilidad de la lámina ungueal, con un curso típicamente crónico y una respuesta al tratamiento considerablemente más lenta que las micosis cutáneas ya vistas en este tema, dado que el crecimiento de una uña nueva y sana requiere meses.',
        'Este tema cierra retomando un principio general ya visto repetidamente en este pensum sobre establecer expectativas realistas de tiempo de respuesta al tratamiento según la biología específica del tejido afectado: mientras una tiña corporal puede resolverse en pocas semanas de tratamiento apropiado, la onicomicosis exige un manejo considerablemente más prolongado, y comunicar esta diferencia de expectativas al paciente es parte de un manejo clínico apropiado.'
      ],
      foco:[
        '*Consideración clínica*: la respuesta al tratamiento de la onicomicosis es considerablemente más lenta que la de las micosis cutáneas, dado que requiere el crecimiento completo de una uña nueva y sana, una expectativa que debe comunicarse claramente al paciente.'
      ]
    }
  ],
  ref:'Fitzpatrick, Dermatología Clínica, cap. 7.'
},

'cancer-piel': {
  tema:'Cáncer de piel',
  bloque:'Dermatología', programa:'unirm', cuatri:12, min:13,
  idea:'El cáncer de piel retoma directamente las lesiones elementales ya vistas al inicio de este bloque para distinguir entre los tres tipos principales de cáncer cutáneo, cada uno con un comportamiento biológico y pronóstico considerablemente distinto.',
  claves:['carcinoma basocelular','carcinoma espinocelular','melanoma cutáneo'],
  sigue:'enfermedades-ampollosas-autoinmunes-piel',
  secciones:[
    {
      t:'El carcinoma basocelular como el cáncer de piel más frecuente y de mejor pronóstico',
      p:[
        'El *carcinoma basocelular* es el tipo más frecuente de cáncer de piel, relacionado directamente con la exposición solar acumulada a lo largo de la vida, que se presenta característicamente como una lesión perlada, con bordes bien definidos y vasos sanguíneos visibles en su superficie -a pesar de ser una neoplasia maligna, su comportamiento biológico es de crecimiento lento y con una capacidad de generar metástasis a distancia extremadamente baja.',
        'Reconocer este comportamiento biológico relativamente indolente, a pesar de tratarse técnicamente de un cáncer, retoma un principio general ya visto en otros contextos oncológicos de este pensum sobre no asumir automáticamente que todo diagnóstico de cáncer implica el mismo nivel de urgencia o gravedad pronóstica: el carcinoma basocelular, aunque requiere tratamiento, tiene un pronóstico considerablemente más favorable que otras neoplasias cutáneas que se verán en este mismo tema.'
      ]
    },
    {
      t:'El carcinoma espinocelular y su mayor potencial de diseminación',
      p:[
        'El *carcinoma espinocelular* también se relaciona con la exposición solar acumulada, pero a diferencia del carcinoma basocelular, tiene un potencial mayor, aunque todavía relativamente bajo, de generar metástasis, particularmente cuando ocurre en ciertas localizaciones de mayor riesgo o alcanza un tamaño considerable sin tratamiento -este comportamiento biológico intermedio, entre el basocelular indolente y el melanoma más agresivo, retoma la importancia ya vista sobre reconocer un espectro de gravedad, no solo categorías binarias de benigno o maligno.',
        'Reconocer esta diferencia de comportamiento biológico entre los dos carcinomas de piel no melanoma, ambos relacionados con exposición solar pero con pronósticos distintos, refuerza la importancia ya vista repetidamente en este pensum sobre no tratar todas las neoplasias del mismo órgano como si fueran equivalentes: el tipo histológico específico determina directamente tanto el pronóstico como la urgencia del tratamiento.'
      ]
    },
    {
      t:'El melanoma cutáneo como la neoplasia cutánea de mayor gravedad potencial',
      p:[
        'El *melanoma cutáneo*, originado en los melanocitos (las células productoras de pigmento de la piel), es la neoplasia cutánea con mayor potencial de diseminación y mortalidad, reconocible mediante los criterios clásicos de asimetría, bordes irregulares, coloración variable, diámetro mayor de cierto tamaño, y evolución o cambio de una lesión pigmentada preexistente -estos criterios retoman directamente la importancia ya vista repetidamente en este pensum sobre reconocer patrones específicos de alarma que orientan hacia una causa más grave.',
        'Este tema cierra retomando el hilo conductor de todo este bloque sobre el cáncer de piel: a diferencia de los dos carcinomas ya vistos, cuyo pronóstico depende principalmente del tamaño y la localización al momento del diagnóstico, el pronóstico del melanoma depende críticamente de la profundidad de invasión al momento de la detección, lo que refuerza la importancia de la detección temprana mediante el reconocimiento activo de los criterios de alarma ya mencionados, antes de que la lesión progrese en profundidad.'
      ],
      foco:[
        '*Consideración clínica*: los criterios de asimetría, bordes irregulares, coloración variable, diámetro aumentado y evolución de una lesión pigmentada orientan hacia melanoma y justifican una evaluación dermatológica sin demora, dado que su pronóstico depende críticamente de la profundidad de invasión al momento de la detección.'
      ]
    }
  ],
  ref:'Fitzpatrick, Dermatología Clínica, cap. 12.'
},

'enfermedades-ampollosas-autoinmunes-piel': {
  tema:'Enfermedades ampollosas y autoinmunes de la piel',
  bloque:'Dermatología', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema retoma directamente la distinción entre vesícula y ampolla ya vista al inicio de este bloque, ahora en el contexto de enfermedades donde el sistema inmunológico ataca por error estructuras propias de la piel, generando ampollas por un mecanismo completamente distinto del traumático o infeccioso.',
  claves:['pénfigo','psoriasis','vitíligo'],
  sigue:'acne-trastornos-anexos-cutaneos',
  secciones:[
    {
      t:'El pénfigo como enfermedad ampollosa autoinmune',
      p:[
        'El *pénfigo* es una enfermedad autoinmune donde el sistema inmunológico genera anticuerpos que atacan por error las proteínas que mantienen unidas a las células de la piel entre sí, generando ampollas frágiles que se rompen con facilidad -este mecanismo autoinmune retoma directamente la importancia ya vista en otros contextos de este pensum sobre reconocer cuando el sistema inmunológico, en vez de proteger al organismo, ataca por error sus propias estructuras.',
        'La fragilidad característica de las ampollas del pénfigo, que se rompen con facilidad dejando erosiones dolorosas, contrasta con otras enfermedades ampollosas autoinmunes donde las ampollas son considerablemente más resistentes -esta distinción retoma la importancia ya vista repetidamente en este pensum sobre reconocer que, dentro de un mismo grupo general de enfermedades (en este caso, ampollosas autoinmunes), existen diferencias clínicas específicas relevantes para el diagnóstico diferencial.'
      ]
    },
    {
      t:'La psoriasis como enfermedad inflamatoria crónica de base inmunológica',
      p:[
        'La *psoriasis* es una enfermedad inflamatoria crónica de la piel, de base inmunológica, caracterizada por placas eritematosas bien delimitadas cubiertas de escamas plateadas, con localización característica en codos, rodillas y cuero cabelludo -a diferencia del pénfigo, que genera ampollas por ataque directo a las uniones celulares, la psoriasis refleja una proliferación acelerada y anormal de las células de la piel, mediada por una respuesta inmunológica desregulada.',
        'Reconocer que la psoriasis, además de su manifestación cutánea, puede asociarse a artritis psoriásica y a un riesgo cardiovascular aumentado retoma la importancia ya vista repetidamente en este pensum sobre reconocer que ciertas condiciones aparentemente limitadas a un órgano (en este caso, la piel) pueden tener manifestaciones sistémicas asociadas que ameritan vigilancia más allá del órgano inicialmente afectado.'
      ]
    },
    {
      t:'El vitíligo como pérdida autoinmune de la pigmentación',
      p:[
        'El *vitíligo* es una condición autoinmune donde el sistema inmunológico destruye los melanocitos (las mismas células que, cuando se malignizan, dan origen al melanoma ya visto en el tema anterior), generando manchas de despigmentación completa de la piel, bien delimitadas, sin otros síntomas asociados como dolor o prurito significativo.',
        'Este tema cierra retomando el hilo conductor de todo este bloque de enfermedades autoinmunes de la piel: pénfigo, psoriasis y vitíligo, aunque afectan estructuras y generan manifestaciones clínicas completamente distintas (ampollas, placas escamosas, y despigmentación respectivamente), comparten el mismo mecanismo general de fondo -una respuesta inmunológica dirigida por error contra estructuras propias de la piel- ilustrando cómo un mismo mecanismo fisiopatológico general puede manifestarse de formas clínicas muy diversas según la estructura cutánea específica atacada.'
      ],
      foco:[
        '*Consideración clínica*: la psoriasis puede asociarse a artritis psoriásica y a un riesgo cardiovascular aumentado, por lo que su manejo apropiado incluye vigilancia más allá de la manifestación cutánea inicial.'
      ]
    }
  ],
  ref:'Fitzpatrick, Dermatología Clínica, cap. 9.'
},

'acne-trastornos-anexos-cutaneos': {
  tema:'Acné y trastornos de anexos cutáneos',
  bloque:'Dermatología', programa:'unirm', cuatri:12, min:13,
  idea:'Este tema aborda condiciones que afectan específicamente los anexos cutáneos -folículos pilosos y glándulas asociadas- estructuras distintas de la piel misma ya vista en los temas anteriores de este bloque.',
  claves:['acné vulgar','alopecia','hidradenitis supurativa'],
  sigue:'urgencias-dermatologicas',
  secciones:[
    {
      t:'El acné vulgar como condición del folículo pilosebáceo',
      p:[
        'El *acné vulgar* es una condición extremadamente frecuente, particularmente en la adolescencia (retomando directamente la importancia ya vista sobre la pubertad y el desarrollo puberal de Ginecología II, dado que los cambios hormonales de esta etapa favorecen su aparición), que se origina en el folículo pilosebáceo por una combinación de producción aumentada de sebo, obstrucción folicular, y proliferación bacteriana local.',
        'Reconocer esta fisiopatología multifactorial retoma un principio general ya visto repetidamente en este pensum sobre condiciones con múltiples factores contribuyentes: el manejo apropiado del acné con frecuencia combina distintos enfoques terapéuticos dirigidos a cada uno de estos mecanismos (regulación de la producción de sebo, desobstrucción folicular, y control bacteriano), en vez de depender de una sola intervención dirigida a un único mecanismo.'
      ]
    },
    {
      t:'La alopecia y sus distintos patrones de pérdida de cabello',
      p:[
        'La *alopecia* -la pérdida de cabello, ya sea parcial o completa- tiene múltiples causas y patrones de presentación distintos, desde la alopecia androgénica (relacionada con predisposición genética y hormonal, de patrón progresivo y característico) hasta la alopecia areata (de origen autoinmune, presentándose típicamente como parches redondeados de pérdida completa de cabello de aparición más súbita).',
        'Distinguir el patrón específico de pérdida de cabello -progresivo y de distribución característica en la alopecia androgénica, versus parches redondeados de aparición súbita en la alopecia areata- retoma directamente la importancia ya vista repetidamente en este pensum sobre reconocer patrones de presentación específicos que orientan hacia mecanismos causales distintos, en vez de tratar toda pérdida de cabello como una entidad única con manejo uniforme.'
      ]
    },
    {
      t:'La hidradenitis supurativa como condición crónica de glándulas específicas',
      p:[
        'La *hidradenitis supurativa* es una condición inflamatoria crónica que afecta las glándulas apocrinas (un tipo específico de glándula sudorípara), típicamente en axilas, ingles y otras áreas con pliegues cutáneos, generando nódulos dolorosos recurrentes que pueden progresar a abscesos y, en casos crónicos avanzados, a trayectos fistulosos -una condición con frecuencia subdiagnosticada por su localización en áreas que generan pudor en el paciente.',
        'Este tema cierra retomando la importancia ya vista repetidamente en este pensum sobre no subestimar el impacto de condiciones dermatológicas crónicas en áreas sensibles: la hidradenitis supurativa, al igual que otras condiciones ya vistas en distintos contextos de este pensum relacionadas con el pudor del paciente, requiere una comunicación clínica abierta y sin juicio que facilite tanto el diagnóstico oportuno como la adherencia al manejo a largo plazo que esta condición crónica exige.'
      ],
      foco:[
        '*Consideración clínica*: distinguir el patrón específico de una alopecia (progresivo y característico en la androgénica, parches súbitos en la areata) orienta directamente hacia el mecanismo causal y el manejo apropiado.'
      ]
    }
  ],
  ref:'Fitzpatrick, Dermatología Clínica, cap. 15.'
},

'urgencias-dermatologicas': {
  tema:'Urgencias dermatológicas',
  bloque:'Dermatología', programa:'unirm', cuatri:12, min:14,
  idea:'Este último tema cierra el bloque de Dermatología retomando la importancia ya vista repetidamente en este pensum sobre reconocer, dentro de un órgano con múltiples condiciones predominantemente crónicas y no urgentes, aquellas presentaciones que sí constituyen una verdadera urgencia médica.',
  claves:['síndrome de Stevens-Johnson','necrólisis epidérmica tóxica','celulitis y fascitis necrotizante'],
  sigue:'principios-medicina-legal',
  secciones:[
    {
      t:'El síndrome de Stevens-Johnson como reacción cutánea grave',
      p:[
        'El *síndrome de Stevens-Johnson* es una reacción cutánea grave, con frecuencia desencadenada por ciertos medicamentos, que genera desprendimiento de la piel y las mucosas en una proporción limitada de la superficie corporal, acompañada de síntomas sistémicos significativos -reconocer esta condición como una verdadera urgencia médica, y no como una simple reacción alérgica cutánea leve, retoma la importancia ya vista repetidamente en este pensum sobre identificar reacciones medicamentosas graves que exigen manejo inmediato.',
        'La relación con un medicamento desencadenante específico retoma directamente la importancia ya vista sobre investigar sistemáticamente los medicamentos recientes ante una reacción cutánea grave de aparición súbita: identificar y suspender inmediatamente el medicamento causal es un paso indispensable del manejo, además de las medidas de soporte que esta condición grave requiere.'
      ]
    },
    {
      t:'La necrólisis epidérmica tóxica como forma más extensa y grave',
      p:[
        'La *necrólisis epidérmica tóxica* comparte el mismo mecanismo y los mismos desencadenantes que el síndrome de Stevens-Johnson, pero se distingue por comprometer una proporción considerablemente mayor de la superficie corporal, lo que retoma directamente el concepto ya visto en otros contextos de este pensum sobre un espectro de gravedad de una misma entidad, más que dos enfermedades completamente independientes.',
        'Esta relación de espectro entre ambas condiciones, distinguidas principalmente por la extensión de superficie corporal afectada, tiene implicaciones pronósticas directas: cuanto mayor la extensión del desprendimiento cutáneo, mayor el riesgo de complicaciones sistémicas graves (infección, alteraciones de líquidos y electrolitos), similar en concepto al manejo de un paciente con quemaduras extensas, retomando la importancia ya vista sobre la piel como barrera protectora cuya pérdida extensa compromete múltiples funciones fisiológicas.'
      ]
    },
    {
      t:'La celulitis y la fascitis necrotizante: un espectro de infección de tejidos blandos',
      p:[
        'La *celulitis y fascitis necrotizante* representan un espectro de infección bacteriana de tejidos blandos: la celulitis es una infección más superficial, limitada a la piel y el tejido subcutáneo, manejable típicamente con antibióticos, mientras la fascitis necrotizante es una infección considerablemente más grave y de progresión rápida que compromete planos más profundos, constituyendo una verdadera emergencia quirúrgica además de médica.',
        'Este tema cierra el bloque de Dermatología retomando el hilo conductor de todo este bloque sobre urgencias: reconocer signos de alarma que distinguen una celulitis simple de una fascitis necrotizante -dolor desproporcionado a los hallazgos visibles en la piel, progresión rápida, y compromiso del estado general- es indispensable, ya que la fascitis necrotizante exige desbridamiento quirúrgico urgente además de manejo antibiótico, y el retraso en su reconocimiento tiene consecuencias potencialmente fatales, cerrando así el pensum de Dermatología con el mismo principio de reconocimiento temprano de urgencias que ha atravesado transversalmente todo este pensum.'
      ],
      foco:[
        '*Consideración clínica*: el dolor desproporcionado a los hallazgos visibles en la piel, junto con progresión rápida y compromiso del estado general, son signos de alarma que distinguen una fascitis necrotizante de una celulitis simple, y exigen manejo quirúrgico urgente.'
      ]
    }
  ],
  ref:'Fitzpatrick, Dermatología Clínica, cap. 23.'
}

});
