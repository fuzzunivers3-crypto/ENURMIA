/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 12)
   ANATOMIA PATOLOGICA I reescrita al estandar extenso. Mismas 13
   claves de objeto que ya existian, repartidas entre
   unirm-09-apuntes.js (1) y unirm-09-apuntes-3.js (12).
   Object.assign las sobrescribe sin romper "Leer el tema".

   A diferencia de otras materias de esta serie, la cadena `sigue`
   de los 13 temas YA estaba en el orden correcto de principio a
   fin -no habia ningun hueco ni clave rota-. Solo se cierra el
   cabo suelto final: 'patologia-ambiental' (ultimo tema, sigue:null)
   ahora encadena hacia 'fisiopatologia-equilibrio-acido-base',
   primer tema de Fisiopatologia, la materia siguiente de este
   cuatrimestre.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'lesion-celular-reversible-irreversible': {
  tema:'Lesión celular reversible e irreversible',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:13,
  idea:'Toda enfermedad, sin excepción, empieza en algún punto como una célula dañada. Entender dónde está la línea entre un daño que la célula puede reparar y uno del que ya no hay vuelta atrás es el concepto que sostiene toda la patología.',
  claves:['lesión celular','hipoxia','degeneración hidrópica','punto de no retorno'],
  sigue:'necrosis-tipos',
  secciones:[
    {
      t:'Qué le pasa a una célula cuando se le agota el oxígeno',
      p:[
        'La hipoxia (falta de oxígeno) es la causa más frecuente y mejor estudiada de lesión celular. Sin oxígeno suficiente, la célula no puede producir ATP de forma eficiente mediante la fosforilación oxidativa (retomando la cadena respiratoria mitocondrial ya vista en Bioquímica I), y recurre a la glucólisis anaerobia como alternativa -pero esta produce mucho menos ATP y genera ácido láctico, bajando el pH intracelular. Sin suficiente ATP, las bombas de membrana (como la bomba sodio-potasio) fallan, y la célula empieza a acumular agua y sodio dentro de sí misma.'
      ],
      foco:[
        'La hipoxia reduce la producción de ATP mitocondrial, forzando a la célula a depender de la glucólisis anaerobia (menos eficiente, genera ácido láctico) y comprometiendo el funcionamiento de las bombas de membrana dependientes de ATP.'
      ]
    },
    {
      t:'Degeneración hidrópica: el primer signo visible de daño reversible',
      p:[
        'La degeneración hidrópica (o tumefacción celular) es el hallazgo morfológico más temprano y característico de la lesión celular reversible: al fallar la bomba sodio-potasio por falta de ATP, el sodio se acumula dentro de la célula, arrastrando agua consigo por ósmosis, y la célula se hincha visiblemente. Este cambio es completamente reversible SI el oxígeno (u otro factor causante del daño) se restaura a tiempo -la célula puede recuperar su función normal sin secuelas.'
      ],
      foco:[
        'La degeneración hidrópica (tumefacción celular por acumulación de sodio y agua) es el signo morfológico más temprano de lesión celular reversible, causado por falla de la bomba sodio-potasio dependiente de ATP.'
      ]
    },
    {
      t:'El punto de no retorno: cuándo la lesión se vuelve irreversible',
      p:[
        'Si el daño persiste más allá de cierto umbral -el llamado punto de no retorno-, ocurren cambios estructurales que ya no pueden repararse: daño masivo e irreparable de las membranas celulares (incluyendo las membranas mitocondriales), entrada masiva de calcio hacia el citoplasma (que activa enzimas destructivas), y finalmente la muerte celular, típicamente por necrosis, el tema que sigue en este mismo bloque. Distinguir clínicamente si una lesión todavía es reversible o ya cruzó ese punto es, con frecuencia, la diferencia entre un tejido que puede salvarse con una intervención oportuna (como restaurar el flujo sanguíneo rápidamente en un infarto) y uno que ya está condenado a morir sin importar qué se haga después.'
      ],
      foco:[
        '*Consideración clínica*: el punto de no retorno marca el límite entre lesión reversible e irreversible -restaurar el flujo sanguíneo ANTES de ese punto (por ejemplo, en un infarto) puede salvar el tejido; después, ya no.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 1.'
},

'necrosis-tipos': {
  tema:'Necrosis: tipos',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:14,
  idea:'El PATRÓN exacto de necrosis que se ve al microscopio (o incluso a simple vista, en una autopsia) no es un detalle estético: cada patrón refleja un mecanismo de daño distinto, y reconocerlo permite deducir, con bastante seguridad, en qué órgano y por qué causa ocurrió.',
  claves:['necrosis coagulativa','necrosis licuefactiva','necrosis caseosa','necrosis grasa','necrosis fibrinoide'],
  sigue:'apoptosis',
  secciones:[
    {
      t:'Necrosis coagulativa: la arquitectura se preserva',
      p:[
        'La necrosis coagulativa preserva, durante días, la arquitectura básica del tejido muerto -las proteínas se desnaturalizan (retomando el concepto ya visto en Bioquímica I) pero las enzimas que digerirían la célula también quedan inactivadas por esa misma desnaturalización, así que el "esqueleto" del tejido se mantiene reconocible por un tiempo. Es el patrón típico de la muerte por isquemia en la mayoría de los órganos sólidos -el infarto de miocardio, por ejemplo, muestra necrosis coagulativa.'
      ],
      foco:[
        'Necrosis coagulativa: preserva la arquitectura tisular (proteínas desnaturalizadas inactivan también las enzimas digestivas). Patrón típico de isquemia en órganos sólidos, como el infarto de miocardio.'
      ]
    },
    {
      t:'Necrosis licuefactiva: el patrón opuesto',
      p:[
        'La necrosis licuefactiva es el patrón opuesto: las enzimas digestivas SÍ permanecen activas y digieren completamente el tejido muerto, dejándolo convertido en un material líquido y viscoso. Ocurre típicamente en el sistema nervioso central (que tiene poco tejido conectivo de soporte y mucha grasa, más susceptible a digestión enzimática) tras un infarto cerebral, y también en las infecciones bacterianas con formación de pus, donde las propias enzimas de los neutrófilos licúan el tejido.'
      ],
      foco:[
        'Necrosis licuefactiva: las enzimas digestivas permanecen activas y licúan el tejido. Típica del sistema nervioso central tras un infarto cerebral, y de infecciones bacterianas con pus.'
      ]
    },
    {
      t:'Tres patrones especializados: caseosa, grasa y fibrinoide',
      p:[
        'La necrosis caseosa (de "caseoso", con aspecto de queso blando) combina rasgos de las dos anteriores: no conserva la arquitectura tisular como la coagulativa, pero tampoco se licúa completamente como la licuefactiva, quedando un material granular, blanquecino y friable. Es el patrón clásico -y muy específico- de la tuberculosis, dentro de los granulomas que se verán en un tema posterior. La necrosis grasa ocurre cuando enzimas (típicamente las lipasas pancreáticas liberadas en una pancreatitis aguda) digieren directamente el tejido adiposo, liberando ácidos grasos que se combinan con calcio formando depósitos blanquecinos visibles. La necrosis fibrinoide se ve en la pared de los vasos sanguíneos, típica de ciertas enfermedades autoinmunes con daño vascular (vasculitis), donde el depósito de complejos inmunitarios y proteínas plasmáticas le da a la pared del vaso un aspecto homogéneo y rosado, parecido a la fibrina.'
      ],
      foco:[
        '*Consideración clínica*: ver necrosis caseosa en una biopsia es casi sinónimo de pensar en tuberculosis -es uno de los patrones histológicos más específicos de toda la patología.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 2.'
},

'apoptosis': {
  tema:'Apoptosis',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:13,
  idea:'A diferencia de la necrosis (un daño externo que mata a la célula de forma desordenada), la apoptosis es un suicidio celular limpio, programado y silencioso -tan silencioso que ni siquiera dispara una respuesta inflamatoria, algo que la necrosis sí hace casi siempre.',
  claves:['apoptosis','cuerpo apoptótico','caspasa','muerte celular programada'],
  sigue:'inflamacion-aguda',
  secciones:[
    {
      t:'Un programa de autodestrucción ordenado',
      p:[
        'La apoptosis (o muerte celular programada) es un proceso activo y regulado, muy distinto de la necrosis: la célula se encoge, su ADN se fragmenta de forma controlada, y finalmente se desintegra en pequeños fragmentos rodeados de membrana llamados cuerpos apoptóticos, que son rápidamente reconocidos y fagocitados por células vecinas o macrófagos, sin que su contenido se derrame hacia el espacio extracelular -por eso, a diferencia de la necrosis, la apoptosis NO dispara inflamación.'
      ],
      foco:[
        'La apoptosis produce cuerpos apoptóticos fagocitados limpiamente, sin derramar contenido celular al espacio extracelular -por eso no dispara inflamación, a diferencia de la necrosis.'
      ]
    },
    {
      t:'Las caspasas: la maquinaria ejecutora',
      p:[
        'Este proceso está ejecutado por las caspasas, una familia de enzimas que se activan en cascada (parecido, en su lógica de amplificación escalonada, a la cascada del complemento ya vista en Inmunología) y que cortan proteínas clave dentro de la célula, desmantelándola de forma ordenada desde adentro.'
      ],
      foco:[
        'Las caspasas se activan en cascada (lógica similar a la del complemento) y ejecutan el desmantelamiento ordenado de la célula desde adentro.'
      ]
    },
    {
      t:'Por qué el cuerpo necesita este mecanismo',
      p:[
        'La apoptosis no es un fallo ni una enfermedad: es un proceso NORMAL y necesario, activo constantemente en el cuerpo sano. Elimina células que ya cumplieron su función (como las células que separaban los dedos durante el desarrollo embrionario), células dañadas o con ADN irreparablemente alterado (evitando que se conviertan en células cancerosas, retomando el gen supresor tumoral ya visto en Genética Médica), y células del sistema inmunitario que ya no se necesitan tras resolver una infección. Muchos fármacos de quimioterapia buscan, precisamente, inducir apoptosis en las células cancerosas; y algunas enfermedades ocurren cuando la apoptosis falla donde debería actuar, o actúa donde no debería.'
      ],
      foco:[
        '*Consideración clínica*: la quimioterapia con frecuencia busca inducir apoptosis en células cancerosas. La apoptosis fallida (donde debería ocurrir) o excesiva (donde no debería) subyace a distintas enfermedades.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 2.'
},

'inflamacion-aguda': {
  tema:'Inflamación aguda',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:14,
  idea:'Los cuatro signos cardinales de la inflamación -calor, rubor, tumor, dolor, descritos hace casi dos mil años- siguen siendo, hoy, la mejor forma de recordar el mecanismo completo: cada uno tiene una explicación vascular o celular precisa detrás.',
  claves:['inflamación aguda','vasodilatación','quimiotaxis','neutrófilo','mediador inflamatorio'],
  sigue:'inflamacion-cronica-granulomas',
  secciones:[
    {
      t:'Los cambios vasculares: calor, rubor y tumor',
      p:[
        'La inflamación aguda es la respuesta inmediata del cuerpo ante una lesión, infección o irritante. Comienza con vasodilatación local (aumentando el flujo de sangre hacia la zona, lo que explica el calor y el rubor) y con aumento de la permeabilidad de los vasos pequeños, dejando salir líquido y proteínas plasmáticas hacia el tejido (lo que explica el tumor, la hinchazón). Estos cambios están orquestados por mediadores inflamatorios liberados en el sitio del daño: histamina, prostaglandinas, y muchos otros.'
      ],
      foco:[
        'Vasodilatación → calor y rubor. Aumento de permeabilidad vascular → tumor (hinchazón). Ambos orquestados por mediadores inflamatorios como histamina y prostaglandinas.'
      ]
    },
    {
      t:'Quimiotaxis y neutrófilos: los cambios celulares',
      p:[
        'Los mediadores inflamatorios también atraen activamente a las células de defensa hacia el sitio dañado, un proceso llamado quimiotaxis: las células siguen un gradiente químico de concentración creciente hacia el origen del estímulo. El neutrófilo es la primera célula en llegar en la inflamación aguda (llega en minutos u horas, mucho antes que otras células inmunitarias), y su trabajo principal es fagocitar y destruir microorganismos.'
      ],
      foco:[
        'Quimiotaxis: las células siguen un gradiente químico hacia el sitio dañado. El neutrófilo es la primera célula en llegar en la inflamación aguda, especializada en fagocitar microorganismos.'
      ]
    },
    {
      t:'Dolor y el mecanismo integrado de los cuatro signos cardinales',
      p:[
        'El dolor, el cuarto signo cardinal, se explica por la acción directa de varios mediadores inflamatorios sobre los nociceptores locales, y también por la presión mecánica del tejido hinchado sobre las propias terminaciones nerviosas. Los cuatro signos cardinales clásicos (calor, rubor, tumor, dolor) más un quinto añadido después (pérdida de función) se explican, todos, por los mismos dos procesos básicos: cambios vasculares y reclutamiento celular.'
      ],
      foco:[
        '*Consideración clínica*: memorizar los cinco signos cardinales por sus DOS mecanismos subyacentes (cambios vasculares y reclutamiento celular) es más útil que memorizarlos como una lista suelta sin conexión.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 3.'
},

'inflamacion-cronica-granulomas': {
  tema:'Inflamación crónica y granulomas',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:13,
  idea:'Cuando el cuerpo no logra eliminar el agente que provocó la inflamación aguda en unos días, cambia de estrategia por completo: convoca a un tipo distinto de célula y, en ciertos casos, construye una estructura especializada para "encerrar" lo que no puede destruir.',
  claves:['inflamación crónica','granuloma','célula gigante','macrófago','fibrosis'],
  sigue:'alteraciones-hemodinamicas-trombosis-embolia',
  secciones:[
    {
      t:'De neutrófilos a macrófagos: un cambio de protagonista',
      p:[
        'La inflamación crónica aparece cuando el estímulo lesivo persiste (una infección que el cuerpo no logra eliminar, un cuerpo extraño que no se puede fagocitar, una enfermedad autoinmune sostenida) más allá de lo que dura la respuesta aguda. El protagonista celular cambia: en vez de neutrófilos, predominan los macrófagos, junto con linfocitos, en un proceso mucho más prolongado, que además de intentar eliminar el agente lesivo empieza a reparar y reemplazar tejido dañado, con frecuencia dejando fibrosis (cicatriz de tejido conectivo) en vez de tejido normal.'
      ],
      foco:[
        'En la inflamación crónica, el protagonista celular cambia de neutrófilos (agudo) a macrófagos y linfocitos, con frecuencia dejando fibrosis en vez de tejido normal.'
      ]
    },
    {
      t:'El granuloma: cuando el cuerpo no puede destruir, encierra',
      p:[
        'Un granuloma es una forma especializada y organizada de inflamación crónica: un agregado compacto de macrófagos activados (que a veces se fusionan entre sí formando una célula gigante multinucleada), rodeado por linfocitos, que se forma cuando el cuerpo no logra eliminar completamente un agente persistente y en vez de eso lo "encierra" físicamente, aislándolo del resto del tejido sano.'
      ],
      foco:[
        'El granuloma: agregado compacto de macrófagos (a veces fusionados en células gigantes) rodeado de linfocitos, que "encierra" un agente persistente que el cuerpo no puede eliminar del todo.'
      ]
    },
    {
      t:'La tuberculosis como ejemplo integrador',
      p:[
        'La tuberculosis es el ejemplo clásico: el granuloma tuberculoso tiene típicamente necrosis caseosa en su centro, rodeada de macrófagos, células gigantes y linfocitos -un ejemplo perfecto de cómo varios temas de este bloque (necrosis, inflamación crónica) confluyen en una sola lesión característica. No toda inflamación crónica forma granulomas: solo ocurre ante ciertos estímulos específicos que el sistema inmunitario no puede eliminar por completo pero tampoco puede ignorar.'
      ],
      foco:[
        '*Consideración clínica*: el granuloma tuberculoso combina necrosis caseosa central con macrófagos, células gigantes y linfocitos periféricos -integra dos temas distintos de este bloque en una sola lesión.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 3.'
},

'alteraciones-hemodinamicas-trombosis-embolia': {
  tema:'Alteraciones hemodinámicas: trombosis y embolia',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:14,
  idea:'La tríada de Virchow, descrita hace más de 150 años, sigue siendo la forma más útil de predecir quién tiene riesgo de formar un trombo: no hace falta memorizar decenas de factores de riesgo sueltos si se entienden las tres categorías que los agrupan.',
  claves:['trombo','tríada de Virchow','embolia','infarto','trombosis venosa'],
  sigue:'edema-congestion-shock',
  secciones:[
    {
      t:'La tríada de Virchow: tres caminos hacia el mismo problema',
      p:[
        'Un trombo es un coágulo de sangre que se forma de manera anormal DENTRO de un vaso sanguíneo o del corazón, en vida. La tríada de Virchow agrupa los tres mecanismos que favorecen su formación: daño del endotelio vascular, estasis o flujo sanguíneo anormal (turbulento o enlentecido), e hipercoagulabilidad (un estado de la sangre con mayor tendencia a coagular, genético o adquirido). Cualquier factor de riesgo de trombosis conocido encaja, casi siempre, en una o más de estas tres categorías.'
      ],
      foco:[
        'Tríada de Virchow: daño endotelial, estasis/flujo anormal, hipercoagulabilidad -las tres categorías que agrupan cualquier factor de riesgo de trombosis conocido.'
      ]
    },
    {
      t:'Embolia: cuando el trombo (u otra cosa) viaja',
      p:[
        'Una embolia ocurre cuando un trombo (u otro material: grasa, aire, líquido amniótico) se desprende de su sitio de formación, viaja por el torrente sanguíneo, y se aloja en un vaso más estrecho en otro lugar del cuerpo, obstruyéndolo. Si ese vaso obstruido no tiene circulación colateral suficiente para compensar, el tejido que irrigaba sufre isquemia y, si se prolonga, infarto (muerte del tejido por falta de riego).'
      ],
      foco:[
        'La embolia obstruye un vaso más estrecho en otro sitio; sin circulación colateral suficiente, el tejido afectado sufre isquemia y, si se prolonga, infarto.'
      ]
    },
    {
      t:'Trombosis venosa profunda y su riesgo de embolia pulmonar',
      p:[
        'La trombosis venosa (típicamente en las venas profundas de la pierna) es clínicamente relevante en particular porque un fragmento de ese trombo puede desprenderse y viajar, a través del sistema venoso, hasta el corazón derecho y de ahí hacia la circulación pulmonar, donde puede alojarse como una embolia pulmonar, potencialmente grave. La inmovilidad prolongada (un vuelo largo, una cirugía extensa, el reposo hospitalario) aumenta el riesgo de trombosis venosa profunda precisamente por la estasis, uno de los tres elementos de la tríada de Virchow.'
      ],
      foco:[
        '*Consideración clínica*: la inmovilidad prolongada aumenta el riesgo de trombosis venosa profunda por estasis (tríada de Virchow), explicando por qué se recomienda movilización temprana y medidas preventivas en pacientes de riesgo.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.'
},

'edema-congestion-shock': {
  tema:'Edema, congestión y shock',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:13,
  idea:'Estos tres trastornos comparten un hilo conductor: todos reflejan un desequilibrio entre el volumen de sangre o líquido y el espacio (o la presión) que debería contenerlo, aunque a escalas muy distintas, desde local hasta todo el cuerpo.',
  claves:['edema','congestión pasiva','shock hipovolémico','shock séptico'],
  sigue:'adaptaciones-celulares',
  secciones:[
    {
      t:'Edema: causas múltiples de un mismo hallazgo',
      p:[
        'El edema es la acumulación anormal de líquido en el espacio intersticial de un tejido, con múltiples causas posibles: aumento de la presión hidrostática dentro de los vasos (como en la insuficiencia cardíaca), disminución de la presión oncótica del plasma (por ejemplo, por falta de proteínas), o aumento de la permeabilidad vascular (como en la inflamación aguda ya vista).'
      ],
      foco:[
        'El edema puede deberse a aumento de presión hidrostática, disminución de presión oncótica, o aumento de permeabilidad vascular -tres mecanismos distintos con la misma manifestación.'
      ]
    },
    {
      t:'Congestión pasiva: acumulación de sangre, no solo de líquido',
      p:[
        'La congestión pasiva es la acumulación de SANGRE (no solo líquido) dentro de un tejido, por dificultad en el retorno venoso -el hígado congestivo de una insuficiencia cardíaca derecha es un ejemplo clásico. A diferencia del edema (líquido extravasado), la congestión implica sangre retenida dentro del lecho vascular del órgano, por un obstáculo al drenaje venoso.'
      ],
      foco:[
        'La congestión pasiva es acumulación de SANGRE por dificultad en el retorno venoso (ej. hígado congestivo en insuficiencia cardíaca derecha) -distinta del edema, que es líquido extravasado.'
      ]
    },
    {
      t:'Shock: la circulación falla en todo el cuerpo',
      p:[
        'El shock es una falla circulatoria generalizada y grave, en la que el aporte de sangre y oxígeno a los tejidos deja de ser suficiente para sus necesidades metabólicas. El shock hipovolémico ocurre por pérdida real de volumen circulante (hemorragia severa, deshidratación extrema); el shock séptico ocurre en el contexto de una infección grave, donde mediadores inflamatorios liberados en exceso provocan una vasodilatación generalizada y descontrolada, con caída de la presión arterial pese a que el volumen de sangre puede estar relativamente conservado al inicio.'
      ],
      foco:[
        '*Consideración clínica*: shock hipovolémico = pérdida real de volumen. Shock séptico = vasodilatación descontrolada por mediadores inflamatorios, con volumen inicialmente conservado -mecanismos distintos, ambos con caída de la perfusión tisular.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.'
},

'adaptaciones-celulares': {
  tema:'Adaptaciones celulares',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:13,
  idea:'Antes de que una célula muera (por necrosis o apoptosis, ya vistas), suele pasar primero por una fase de adaptación: un cambio reversible en su tamaño, número o tipo, como una respuesta de ajuste frente a una demanda o un estrés sostenido, no todavía un daño irreversible.',
  claves:['hipertrofia','hiperplasia','atrofia','metaplasia','displasia'],
  sigue:'neoplasias-conceptos-generales',
  secciones:[
    {
      t:'Hipertrofia e hiperplasia: crecer en tamaño o en número',
      p:[
        'La hipertrofia es el aumento del TAMAÑO de las células individuales de un tejido (no del número), típico de células que no se dividen mucho, como el músculo cardíaco o el esquelético -el corazón que se agranda por una sobrecarga de presión sostenida (hipertensión no controlada) es un ejemplo de hipertrofia. La hiperplasia es el aumento del NÚMERO de células de un tejido, posible en tejidos cuyas células sí conservan capacidad de dividirse -el crecimiento de la glándula mamaria durante el embarazo es un ejemplo de hiperplasia fisiológica.'
      ],
      foco:[
        'Hipertrofia = aumento del TAMAÑO celular (tejidos que no se dividen, como músculo cardíaco). Hiperplasia = aumento del NÚMERO de células (tejidos con capacidad de dividirse).'
      ]
    },
    {
      t:'Atrofia: la reducción del tejido',
      p:[
        'La atrofia es la reducción del tamaño de un tejido u órgano, ya sea por disminución del tamaño de sus células, de su número, o ambos, típicamente en respuesta a menor uso (atrofia por desuso, como un músculo inmovilizado por tiempo prolongado), menor riego sanguíneo, o menor estímulo hormonal o nervioso.'
      ],
      foco:[
        'La atrofia (reducción del tejido) puede deberse a menor uso, menor riego sanguíneo, o menor estímulo hormonal/nervioso -por disminución del tamaño celular, del número, o ambos.'
      ]
    },
    {
      t:'Metaplasia y displasia: cambios de tipo celular, con distinto grado de preocupación',
      p:[
        'La metaplasia es el reemplazo de un tipo de célula ADULTA y diferenciada por otro tipo celular adulto distinto, generalmente en respuesta a un irritante crónico -el ejemplo clásico es el epitelio respiratorio de un fumador crónico. La metaplasia en sí es reversible si el irritante desaparece, pero si el estímulo persiste, el tejido metaplásico puede progresar hacia displasia: un crecimiento celular desordenado y con alteraciones en la forma y organización de las células, un paso más cercano hacia el desarrollo de cáncer.'
      ],
      foco:[
        '*Consideración clínica*: secuencia de progresión, de menor a mayor preocupación: metaplasia (reversible, cambio de tipo celular adulto) → displasia (desorden celular, ya preocupante) → neoplasia (crecimiento verdaderamente descontrolado).'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 1.'
},

'neoplasias-conceptos-generales': {
  tema:'Neoplasias: conceptos generales',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:14,
  idea:'La diferencia entre un tumor "benigno" y uno "maligno" no es solo una cuestión de qué tan grande o feo se ve: son dos comportamientos biológicos fundamentalmente distintos, y esa distinción es, literalmente, la diferencia entre una cirugía curativa y una enfermedad potencialmente mortal.',
  claves:['neoplasia benigna','neoplasia maligna','anaplasia','invasión','metástasis'],
  sigue:'carcinogenesis',
  secciones:[
    {
      t:'Benigno frente a maligno: crecimiento, invasión y metástasis',
      p:[
        'Una neoplasia benigna crece de forma relativamente lenta, permanece localizada (no invade tejidos vecinos ni se disemina a distancia), y sus células conservan un parecido considerable con el tejido normal de origen (bien diferenciadas). Una neoplasia maligna (cáncer) crece más rápido, tiene capacidad de invasión (penetrar activamente en los tejidos vecinos, destruyendo su arquitectura normal en vez de solo empujarla) y de metástasis (diseminarse a sitios distantes del cuerpo, típicamente por vía sanguínea o linfática).'
      ],
      foco:[
        'Neoplasia benigna: crecimiento lento, localizada, bien diferenciada. Neoplasia maligna: crecimiento rápido, con capacidad de invasión local y metástasis a distancia.'
      ]
    },
    {
      t:'Anaplasia: la pérdida de diferenciación',
      p:[
        'La anaplasia es la pérdida de diferenciación celular: las células cancerosas anaplásicas se parecen cada vez menos a las células normales del tejido de origen, con núcleos grandes e irregulares, y mayor actividad de división celular -cuanto más anaplásico es un tumor, generalmente más agresivo es su comportamiento clínico.'
      ],
      foco:[
        'La anaplasia (pérdida de diferenciación, núcleos grandes e irregulares, mayor división celular) se correlaciona generalmente con mayor agresividad clínica del tumor.'
      ]
    },
    {
      t:'Por qué la invasión y la metástasis son las que realmente importan',
      p:[
        'De las tres diferencias mencionadas, la capacidad de invadir y hacer metástasis es la que verdaderamente define el comportamiento maligno de forma más consistente: un tumor benigno, aunque crezca, generalmente se puede extirpar por completo con cirugía y el paciente queda curado. Un tumor maligno, en cambio, puede haber enviado ya células a otros órganos (metástasis microscópicas, no siempre detectables) incluso antes de que el tumor original se haya extirpado -por eso el estudio de los ganglios linfáticos cercanos a un tumor maligno es tan importante: es, con frecuencia, la primera parada de una metástasis en camino.'
      ],
      foco:[
        '*Consideración clínica*: la invasión y la metástasis definen el comportamiento maligno de forma más consistente que el crecimiento rápido o la anaplasia por sí solos -un tumor benigno puede curarse solo con cirugía, uno maligno puede haber diseminado ya antes de operarse.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 7.'
},

'carcinogenesis': {
  tema:'Carcinogénesis',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:14,
  idea:'Ninguna célula se vuelve cancerosa de un solo golpe: la carcinogénesis es, casi siempre, la acumulación de varias mutaciones sucesivas en genes muy específicos -los mismos oncogenes y genes supresores tumorales ya introducidos en Genética Médica- hasta que la célula pierde por completo el control normal de su propia división.',
  claves:['oncogén','gen supresor tumoral','carcinógeno','mutación somática'],
  sigue:'reparacion-tisular-regeneracion-fibrosis',
  secciones:[
    {
      t:'Oncogenes: el acelerador atascado',
      p:[
        'Un oncogén es una versión mutada y hiperactiva de un gen normal (llamado protooncogén en su forma sana), que normalmente promueve la división celular de forma regulada: cuando muta, empuja a la célula a dividirse de forma descontrolada, actuando como un "acelerador" atascado.'
      ],
      foco:[
        'Un oncogén es la versión mutada e hiperactiva de un protooncogén normal -actúa como un "acelerador" atascado de la división celular.'
      ]
    },
    {
      t:'Genes supresores tumorales y mutaciones somáticas',
      p:[
        'Un gen supresor tumoral, ya introducido en Genética Médica (con el ejemplo de BRCA1 y BRCA2), normalmente frena la división celular o repara el ADN dañado: cuando ambas copias se inactivan por mutación, ese freno desaparece. La mayoría de las mutaciones que causan cáncer son mutaciones somáticas: ocurren en una célula del cuerpo a lo largo de la vida, acumulándose con el tiempo por exposición a distintos factores -a diferencia de las mutaciones germinales heredadas, que dan a la persona una ventaja de partida hacia desarrollar cáncer.'
      ],
      foco:[
        'Gen supresor tumoral: normalmente "frena" la división o repara ADN; su inactivación (ambas copias) elimina ese freno. La mayoría de mutaciones causantes de cáncer son somáticas, no heredadas.'
      ]
    },
    {
      t:'Los carcinógenos y la acumulación de mutaciones',
      p:[
        'Un carcinógeno es cualquier agente capaz de inducir o promover estas mutaciones: puede ser químico (como ciertos componentes del humo del tabaco), físico (radiación ultravioleta o ionizante), o biológico (ciertos virus, como el VPH, capaces de interferir con genes supresores tumorales). La acumulación de varias mutaciones, en varios oncogenes y genes supresores tumorales distintos, a lo largo de años, es generalmente necesaria antes de que una célula se vuelva plenamente cancerosa -la razón biológica de por qué el cáncer tarda años o décadas en desarrollarse.'
      ],
      foco:[
        '*Consideración clínica*: la exposición prolongada a un carcinógeno (fumar durante décadas) aumenta el riesgo mucho más que una exposición breve, precisamente porque se necesita acumular varias mutaciones sucesivas.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 7.'
},

'reparacion-tisular-regeneracion-fibrosis': {
  tema:'Reparación tisular: regeneración y fibrosis',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:13,
  idea:'Después de un daño, el cuerpo tiene dos caminos posibles para reparar el tejido, y cuál toma depende, sobre todo, de si el tejido dañado conserva células capaces de dividirse y de si la arquitectura original del tejido quedó intacta o destruida.',
  claves:['regeneración tisular','cicatrización','tejido de granulación','fibrosis reparativa'],
  sigue:'amiloidosis',
  secciones:[
    {
      t:'Regeneración: reemplazar lo dañado por tejido igual',
      p:[
        'La regeneración tisular reemplaza el tejido dañado por células NUEVAS del mismo tipo, restaurando la estructura y función original, y solo es posible en tejidos cuyas células conservan capacidad de dividirse (como el epitelio de la piel o del intestino) y cuando la estructura de soporte del tejido permanece intacta como andamio. El hígado es un ejemplo notable de órgano con gran capacidad regenerativa.'
      ],
      foco:[
        'La regeneración tisular requiere células con capacidad de dividirse Y una estructura de soporte intacta como andamio -el hígado es un ejemplo notable de capacidad regenerativa.'
      ]
    },
    {
      t:'Fibrosis: cuando no se puede regenerar igual',
      p:[
        'Cuando el tejido dañado no puede regenerarse (porque sus células no se dividen, como las neuronas o el músculo cardíaco) o cuando la arquitectura de soporte quedó destruida, el cuerpo repara con cicatrización: primero se forma un tejido de granulación (un tejido temporal, muy vascularizado, con fibroblastos activos produciendo colágeno nuevo), que con el tiempo madura hacia una cicatriz definitiva de tejido conectivo denso, la fibrosis reparativa.'
      ],
      foco:[
        'Cicatrización: primero tejido de granulación (temporal, vascularizado, con fibroblastos activos), luego madura hacia fibrosis reparativa (cicatriz de tejido conectivo denso).'
      ]
    },
    {
      t:'La fibrosis restaura integridad, no función',
      p:[
        'La fibrosis restaura la INTEGRIDAD estructural del tejido (lo "tapa" y evita que se rompa), pero NO restaura su función original: una cicatriz en el corazón después de un infarto es tejido conectivo, no músculo cardíaco funcional, así que esa zona ya no se contrae ni conduce el impulso eléctrico como lo hacía el tejido original. Esta es la razón exacta por la que un infarto extenso deja una debilidad permanente en la función de bombeo del corazón, aun cuando el paciente sobreviva y el tejido "sane".'
      ],
      foco:[
        '*Consideración clínica*: la fibrosis restaura integridad estructural pero NO función -una cicatriz cardíaca post-infarto no se contrae ni conduce el impulso eléctrico, dejando debilidad permanente de bombeo.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 3.'
},

'amiloidosis': {
  tema:'Amiloidosis',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:12,
  idea:'La amiloidosis es un buen ejemplo de un principio que se repite en varias enfermedades: distintas proteínas de origen completamente distinto pueden, todas, plegarse mal de la misma forma característica y terminar produciendo el mismo tipo de daño tisular.',
  claves:['amiloide','depósito extracelular','rojo Congo','amiloidosis sistémica'],
  sigue:'patologia-ambiental',
  secciones:[
    {
      t:'Una estructura anormal compartida, orígenes distintos',
      p:[
        'El amiloide no es una sola proteína: es un nombre para cualquier proteína que se pliega de forma anormal, adoptando una configuración fibrilar característica, resistente a ser degradada por el cuerpo, y que se deposita de forma progresiva en el espacio extracelular de distintos tejidos. Distintas proteínas (más de treinta identificadas) pueden plegarse de esta forma anormal en distintas enfermedades, cada una dando origen a un tipo distinto de amiloidosis.'
      ],
      foco:[
        'El amiloide es cualquier proteína mal plegada en una configuración fibrilar resistente a degradación -más de treinta proteínas distintas pueden originar distintos tipos de amiloidosis.'
      ]
    },
    {
      t:'El rojo Congo: una tinción muy específica',
      p:[
        'El depósito extracelular de amiloide se identifica histológicamente con una tinción especial, el rojo Congo, que le da al amiloide una coloración rojiza característica bajo luz normal y, de forma distintiva, una birrefringencia verde manzana cuando se observa con luz polarizada -una de las pocas tinciones tan específicas en toda la patología.'
      ],
      foco:[
        'El rojo Congo tiñe el amiloide de rojizo y produce birrefringencia verde manzana con luz polarizada -una tinción muy específica para confirmar el diagnóstico de amiloidosis.'
      ]
    },
    {
      t:'Amiloidosis localizada frente a sistémica',
      p:[
        'Cuando el depósito se limita a un solo órgano, se llama amiloidosis localizada; cuando se deposita en múltiples órganos a la vez (riñón, corazón, hígado, nervios periféricos, entre otros), se llama amiloidosis sistémica, y el órgano afectado va perdiendo función progresivamente a medida que el depósito de amiloide reemplaza tejido normal y altera su arquitectura.'
      ],
      foco:[
        '*Consideración clínica*: la amiloidosis sistémica afecta múltiples órganos simultáneamente, con pérdida progresiva de función a medida que el amiloide reemplaza tejido normal.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.'
},

'patologia-ambiental': {
  tema:'Patología ambiental',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:12,
  idea:'Este tema cierra el bloque de Anatomía Patológica I mostrando que agentes físicos y químicos del ambiente causan lesión celular por los mismos mecanismos ya estudiados a lo largo de todo el bloque -solo cambia el desencadenante inicial, no el resultado final.',
  claves:['lesión por agentes físicos','lesión por agentes químicos','quemadura','radiación'],
  sigue:'fisiopatologia-equilibrio-acido-base',
  secciones:[
    {
      t:'Quemaduras: desnaturalización directa',
      p:[
        'Una quemadura por calor extremo desnaturaliza directamente las proteínas celulares y daña las membranas celulares, produciendo necrosis coagulativa en el tejido afectado; su profundidad y extensión determinan la gravedad, retomando directamente la anatomía de la piel ya vista en Histología.'
      ],
      foco:[
        'Una quemadura desnaturaliza proteínas y daña membranas celulares, produciendo típicamente necrosis coagulativa -su profundidad y extensión determinan la gravedad clínica.'
      ]
    },
    {
      t:'Radiación: daño directo al ADN',
      p:[
        'La radiación ionizante daña sobre todo el ADN, pudiendo causar muerte celular directa (si el daño es masivo) o mutaciones que, con el tiempo, pueden derivar en cáncer, dependiendo de la dosis recibida -conectando directamente con la carcinogénesis ya vista en este mismo bloque.'
      ],
      foco:[
        'La radiación ionizante daña el ADN: dosis altas causan muerte celular directa; dosis menores pueden generar mutaciones que derivan en cáncer con el tiempo.'
      ]
    },
    {
      t:'Agentes químicos y el cierre del bloque',
      p:[
        'La lesión por agentes químicos es muy variada en su mecanismo según la sustancia: algunas dañan directamente las membranas celulares, otras interfieren con enzimas específicas del metabolismo celular (como el cianuro, bloqueando la cadena respiratoria), y otras requieren ser metabolizadas primero por el cuerpo (frecuentemente por el hígado) para volverse tóxicas, un fenómeno llamado bioactivación. Sin importar cuál sea el agente lesivo inicial -isquemia, infección, calor, radiación, un químico- el cuerpo responde con el mismo repertorio limitado de mecanismos ya estudiado en este bloque: lesión celular reversible o irreversible, necrosis o apoptosis, inflamación aguda o crónica, y finalmente reparación por regeneración o por fibrosis.'
      ],
      foco:[
        '*Consideración clínica*: sin importar el agente lesivo inicial, el cuerpo responde con el mismo repertorio limitado de mecanismos estudiado en todo este bloque -lesión celular, necrosis/apoptosis, inflamación, reparación.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 8.'
}

});
