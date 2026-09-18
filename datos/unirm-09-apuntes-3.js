/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 3)
   Termina de cubrir ANATOMIA PATOLOGICA I por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'necrosis-tipos': {
  tema:'Necrosis: tipos',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:8,
  idea:'El PATRÓN exacto de necrosis que se ve al microscopio (o incluso a simple vista, en una autopsia) no es un detalle estético: cada patrón refleja un mecanismo de daño distinto, y reconocerlo permite deducir, con bastante seguridad, en qué órgano y por qué causa ocurrió.',
  claves:['necrosis coagulativa','necrosis licuefactiva','necrosis caseosa','necrosis grasa','necrosis fibrinoide'],
  sigue:'apoptosis',
  secciones:[
    {
      t:'Coagulativa y licuefactiva: dos destinos opuestos del tejido muerto',
      p:[
        'La *necrosis coagulativa* preserva, durante días, la arquitectura básica del tejido muerto —las proteínas se desnaturalizan (retomando el concepto ya visto en Bioquímica I) pero las enzimas que digerirían la célula también quedan inactivadas por esa misma desnaturalización, así que el "esqueleto" del tejido se mantiene reconocible por un tiempo. Es el patrón típico de la muerte por isquemia en la mayoría de los órganos sólidos —el infarto de miocardio, por ejemplo, muestra necrosis coagulativa.',
        'La *necrosis licuefactiva* es el patrón opuesto: las enzimas digestivas SÍ permanecen activas y digieren completamente el tejido muerto, dejándolo convertido en un material líquido y viscoso. Ocurre típicamente en el sistema nervioso central (que tiene poco tejido conectivo de soporte y mucha grasa, más susceptible a digestión enzimática) tras un infarto cerebral, y también en las infecciones bacterianas con formación de pus, donde las propias enzimas de los neutrófilos licúan el tejido.'
      ]
    },
    {
      t:'Tres patrones especializados',
      p:[
        'La *necrosis caseosa* (de "caseoso", con aspecto de queso blando) combina rasgos de ambas anteriores: no conserva la arquitectura tisular como la coagulativa, pero tampoco se licúa completamente como la licuefactiva, quedando un material granular, blanquecino y friable. Es el patrón clásico —y muy específico— de la tuberculosis (retomando Mycobacterium tuberculosis, ya visto en Microbiología), dentro de los granulomas que se verán en el siguiente tema.',
        'La *necrosis grasa* ocurre cuando enzimas (típicamente las lipasas pancreáticas liberadas en una pancreatitis aguda) digieren directamente el tejido adiposo, liberando ácidos grasos que se combinan con calcio formando depósitos blanquecinos visibles. La *necrosis fibrinoide*, un patrón especializado que se ve en la pared de los vasos sanguíneos, típica de ciertas enfermedades autoinmunes con daño vascular (vasculitis), donde el depósito de complejos inmunitarios y proteínas plasmáticas le da a la pared del vaso un aspecto homogéneo y rosado, parecido a la fibrina, al microscopio.'
      ],
      foco:[
        'Ver necrosis caseosa en una biopsia es casi sinónimo de pensar en tuberculosis (u otras infecciones granulomatosas relacionadas): es uno de los patrones histológicos más específicos de toda la patología.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 2.'
},

'apoptosis': {
  tema:'Apoptosis',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:7,
  idea:'A diferencia de la necrosis (un daño externo que mata a la célula de forma desordenada), la apoptosis es un suicidio celular limpio, programado y silencioso — tan silencioso que ni siquiera dispara una respuesta inflamatoria, algo que la necrosis sí hace casi siempre.',
  claves:['apoptosis','cuerpo apoptótico','caspasa','muerte celular programada'],
  sigue:'inflamacion-aguda',
  secciones:[
    {
      t:'Un programa de autodestrucción ordenado',
      p:[
        'La *apoptosis* (o *muerte celular programada*) es un proceso activo y regulado, muy distinto de la necrosis: la célula se encoge, su ADN se fragmenta de forma controlada, y finalmente se desintegra en pequeños fragmentos rodeados de membrana llamados *cuerpos apoptóticos*, que son rápidamente reconocidos y fagocitados por células vecinas o macrófagos, sin que su contenido se derrame hacia el espacio extracelular —por eso, a diferencia de la necrosis, la apoptosis NO dispara inflamación: el contenido celular, potencialmente irritante, nunca llega a escapar de forma descontrolada.',
        'Este proceso está ejecutado por las *caspasas*, una familia de enzimas que se activan en cascada (parecido, en su lógica de amplificación escalonada, a la cascada del complemento ya vista en Inmunología) y que cortan proteínas clave dentro de la célula, desmantelándola de forma ordenada desde adentro.'
      ]
    },
    {
      t:'Por qué el cuerpo necesita este mecanismo',
      p:[
        'La apoptosis no es un fallo ni una enfermedad: es un proceso NORMAL y necesario, activo constantemente en el cuerpo sano. Elimina células que ya cumplieron su función (como las células que separaban los dedos durante el desarrollo embrionario, que apoptosis después de haber cumplido su rol), células dañadas o con ADN irreparablemente alterado (evitando que se conviertan en células cancerosas, retomando el gen supresor tumoral ya visto en Genética Médica), y células del sistema inmunitario que ya no se necesitan tras resolver una infección.'
      ],
      foco:[
        'Consideración clínica: muchos fármacos de quimioterapia buscan, precisamente, inducir apoptosis en las células cancerosas; y algunas enfermedades ocurren cuando la apoptosis falla donde debería actuar (permitiendo que sobrevivan células que deberían haber muerto) o actúa donde no debería (destruyendo células sanas necesarias).'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 2.'
},

'inflamacion-aguda': {
  tema:'Inflamación aguda',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:8,
  idea:'Los cuatro signos cardinales de la inflamación —calor, rubor, tumor, dolor, descritos hace casi dos mil años— siguen siendo, hoy, la mejor forma de recordar el mecanismo completo: cada uno tiene una explicación vascular o celular precisa detrás.',
  claves:['inflamación aguda','vasodilatación','quimiotaxis','neutrófilo','mediador inflamatorio'],
  sigue:'inflamacion-cronica-granulomas',
  secciones:[
    {
      t:'Los cambios vasculares: calor, rubor y tumor',
      p:[
        'La *inflamación aguda* es la respuesta inmediata del cuerpo ante una lesión, infección o irritante. Comienza con *vasodilatación* local (aumentando el flujo de sangre hacia la zona, lo que explica el calor y el rubor o enrojecimiento) y con aumento de la permeabilidad de los vasos pequeños, dejando salir líquido y proteínas plasmáticas hacia el tejido (lo que explica el tumor, la hinchazón). Estos cambios están orquestados por *mediadores inflamatorios* liberados en el sitio del daño: histamina, prostaglandinas, y muchos otros, cada uno con un rol específico en el proceso.'
      ]
    },
    {
      t:'Los cambios celulares: quimiotaxis y neutrófilos',
      p:[
        'Los mediadores inflamatorios también atraen activamente a las células de defensa hacia el sitio dañado, un proceso llamado *quimiotaxis*: las células siguen un gradiente químico de concentración creciente hacia el origen del estímulo. El *neutrófilo* es la primera célula en llegar en la inflamación aguda (llega en minutos u horas, mucho antes que otras células inmunitarias), y su trabajo principal es fagocitar y destruir microorganismos, retomando directamente lo ya visto en Histología (sangre y hematopoyesis) y en Inmunología (complemento, opsonización).',
        'El dolor, el cuarto signo cardinal, se explica por la acción directa de varios mediadores inflamatorios sobre los nociceptores locales (ya vistos en Fisiología I), y también por la presión mecánica del tejido hinchado sobre las propias terminaciones nerviosas.'
      ],
      foco:[
        'Los cuatro signos cardinales clásicos (calor, rubor, tumor, dolor) más un quinto añadido después (pérdida de función) se explican, todos, por los mismos dos procesos básicos: cambios vasculares y reclutamiento celular. Memorizarlos así, por mecanismo, es más útil que memorizarlos como una lista suelta.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 3.'
},

'inflamacion-cronica-granulomas': {
  tema:'Inflamación crónica y granulomas',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:7,
  idea:'Cuando el cuerpo no logra eliminar el agente que provocó la inflamación aguda en unos días, cambia de estrategia por completo: convoca a un tipo distinto de célula y, en ciertos casos, construye una estructura especializada para "encerrar" lo que no puede destruir.',
  claves:['inflamación crónica','granuloma','célula gigante','macrófago','fibrosis'],
  sigue:'alteraciones-hemodinamicas-trombosis-embolia',
  secciones:[
    {
      t:'De neutrófilos a macrófagos: un cambio de protagonista',
      p:[
        'La *inflamación crónica* aparece cuando el estímulo lesivo persiste (una infección que el cuerpo no logra eliminar, un cuerpo extraño que no se puede fagocitar, una enfermedad autoinmune sostenida) más allá de lo que dura la respuesta aguda. El protagonista celular cambia: en vez de neutrófilos, predominan los *macrófagos* (ya vistos en Histología e Inmunología), junto con linfocitos, en un proceso mucho más prolongado, que además de intentar eliminar el agente lesivo empieza a reparar y reemplazar tejido dañado, con frecuencia dejando *fibrosis* (cicatriz de tejido conectivo, ya vista en Histología) en vez de tejido normal.'
      ]
    },
    {
      t:'El granuloma: cuando el cuerpo no puede destruir, encierra',
      p:[
        'Un *granuloma* es una forma especializada y organizada de inflamación crónica: un agregado compacto de macrófagos activados (que a veces se fusionan entre sí formando una *célula gigante* multinucleada), rodeado por linfocitos, que se forma cuando el cuerpo no logra eliminar completamente un agente persistente y en vez de eso lo "encierra" físicamente, aislándolo del resto del tejido sano.',
        'La tuberculosis (ya vista en Microbiología, y en el tema de necrosis caseosa de este mismo bloque) es el ejemplo clásico: el granuloma tuberculoso tiene típicamente necrosis caseosa en su centro, rodeada de macrófagos, células gigantes y linfocitos —un ejemplo perfecto de cómo varios temas de este bloque (necrosis, inflamación crónica) confluyen en una sola lesión característica.'
      ],
      foco:[
        'No toda inflamación crónica forma granulomas: solo ocurre ante ciertos estímulos específicos (algunas infecciones, algunos cuerpos extraños, ciertas enfermedades autoinmunes) que el sistema inmunitario no puede eliminar por completo pero tampoco puede ignorar.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 3.'
},

'alteraciones-hemodinamicas-trombosis-embolia': {
  tema:'Alteraciones hemodinámicas: trombosis y embolia',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:8,
  idea:'La tríada de Virchow, descrita hace más de 150 años, sigue siendo la forma más útil de predecir quién tiene riesgo de formar un trombo: no hace falta memorizar decenas de factores de riesgo sueltos si se entienden las tres categorías que los agrupan.',
  claves:['trombo','tríada de Virchow','embolia','infarto','trombosis venosa'],
  sigue:'edema-congestion-shock',
  secciones:[
    {
      t:'La tríada de Virchow: tres caminos hacia el mismo problema',
      p:[
        'Un *trombo* es un coágulo de sangre que se forma de manera anormal DENTRO de un vaso sanguíneo o del corazón, en vida (a diferencia de un coágulo post-mortem). La *tríada de Virchow* agrupa los tres mecanismos que favorecen su formación: daño del endotelio vascular (ya visto en Histología, la capa que normalmente previene la coagulación en condiciones sanas), estasis o flujo sanguíneo anormal (turbulento o enlentecido, que permite que los factores de coagulación se concentren en vez de diluirse y arrastrarse), e hipercoagulabilidad (un estado de la sangre con mayor tendencia a coagular, ya sea genético o adquirido).',
        'Cualquier factor de riesgo de trombosis que se conozca —desde la inmovilidad prolongada hasta ciertas enfermedades genéticas de la coagulación— encaja, casi siempre, en una o más de estas tres categorías, lo que hace de la tríada una herramienta de razonamiento mucho más útil que memorizar una lista extensa y desconectada.'
      ]
    },
    {
      t:'Embolia: cuando el trombo (u otra cosa) viaja',
      p:[
        'Una *embolia* ocurre cuando un trombo (u otro material: grasa, aire, líquido amniótico) se desprende de su sitio de formación, viaja por el torrente sanguíneo, y se aloja en un vaso más estrecho en otro lugar del cuerpo, obstruyéndolo. Si ese vaso obstruido no tiene circulación colateral suficiente para compensar, el tejido que irrigaba sufre isquemia y, si se prolonga, *infarto* (muerte del tejido por falta de riego, retomando directamente el concepto de lesión celular irreversible ya visto en el primer tema de este bloque).',
        'La *trombosis venosa* (típicamente en las venas profundas de la pierna) es clínicamente relevante en particular porque un fragmento de ese trombo puede desprenderse y viajar, a través del sistema venoso, hasta el corazón derecho y de ahí hacia la circulación pulmonar, donde puede alojarse como una embolia pulmonar, potencialmente grave.'
      ],
      foco:[
        'Consideración clínica: la inmovilidad prolongada (un vuelo largo, una cirugía extensa, el reposo hospitalario) aumenta el riesgo de trombosis venosa profunda precisamente por la estasis (uno de los tres elementos de la tríada de Virchow), lo que explica por qué se recomienda movilización temprana y, en pacientes de riesgo, medidas preventivas específicas.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.'
},

'edema-congestion-shock': {
  tema:'Edema, congestión y shock',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:7,
  idea:'Estos tres trastornos comparten un hilo conductor: todos reflejan un desequilibrio entre el volumen de sangre o líquido y el espacio (o la presión) que debería contenerlo, aunque a escalas muy distintas, desde local hasta todo el cuerpo.',
  claves:['edema','congestión pasiva','shock hipovolémico','shock séptico'],
  sigue:'adaptaciones-celulares',
  secciones:[
    {
      t:'Edema y congestión: acumulación local de líquido o sangre',
      p:[
        'El *edema* (ya mencionado en semiología cardiovascular) es la acumulación anormal de líquido en el espacio intersticial de un tejido, con múltiples causas posibles: aumento de la presión hidrostática dentro de los vasos (como en la insuficiencia cardíaca), disminución de la presión oncótica del plasma (por ejemplo, por falta de proteínas), o aumento de la permeabilidad vascular (como en la inflamación aguda ya vista). La *congestión pasiva* es la acumulación de SANGRE (no solo líquido) dentro de un tejido, por dificultad en el retorno venoso —el hígado congestivo de una insuficiencia cardíaca derecha es un ejemplo clásico, retomando el mecanismo ya visto en Fisiopatología.'
      ]
    },
    {
      t:'Shock: cuando la circulación falla en todo el cuerpo',
      p:[
        'El *shock* es una falla circulatoria generalizada y grave, en la que el aporte de sangre (y con ella, de oxígeno) a los tejidos deja de ser suficiente para sus necesidades metabólicas, con riesgo de lesión celular extendida en múltiples órganos si no se corrige a tiempo. El shock *hipovolémico* ocurre por pérdida real de volumen circulante (una hemorragia severa, deshidratación extrema); el shock *séptico* ocurre en el contexto de una infección grave, donde mediadores inflamatorios liberados en exceso (retomando la endotoxina de bacterias gramnegativas ya vista en Microbiología) provocan una vasodilatación generalizada y descontrolada, con caída de la presión arterial pese a que, a diferencia del hipovolémico, el volumen de sangre en sí puede estar relativamente conservado al inicio.'
      ],
      foco:[
        'Estos tres trastornos conectan directamente con la fisiología cardiovascular ya vista (gasto cardíaco, resistencia periférica, presión arterial): el shock, en esencia, es esa ecuación fallando de forma generalizada, ya sea por falta de volumen, falta de bombeo, o pérdida del tono vascular.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.'
},

'adaptaciones-celulares': {
  tema:'Adaptaciones celulares',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:7,
  idea:'Antes de que una célula muera (por necrosis o apoptosis, ya vistas), suele pasar primero por una fase de adaptación: un cambio reversible en su tamaño, número o tipo, como una respuesta de ajuste frente a una demanda o un estrés sostenido, no todavía un daño irreversible.',
  claves:['hipertrofia','hiperplasia','atrofia','metaplasia','displasia'],
  sigue:'neoplasias-conceptos-generales',
  secciones:[
    {
      t:'Cuatro adaptaciones fisiológicas reversibles',
      p:[
        'La *hipertrofia* es el aumento del TAMAÑO de las células individuales de un tejido (no del número), típico de células que no se dividen mucho, como el músculo cardíaco o el esquelético —el corazón que se agranda por una sobrecarga de presión sostenida (como en la hipertensión no controlada, ya vista en Fisiología II) es un ejemplo de hipertrofia. La *hiperplasia* es el aumento del NÚMERO de células de un tejido, posible en tejidos cuyas células sí conservan capacidad de dividirse —el crecimiento de la glándula mamaria durante el embarazo, por estímulo hormonal, es un ejemplo de hiperplasia fisiológica.',
        'La *atrofia* es la reducción del tamaño de un tejido u órgano, ya sea por disminución del tamaño de sus células, de su número, o ambos, típicamente en respuesta a menor uso (atrofia por desuso, como un músculo inmovilizado por tiempo prolongado), menor riego sanguíneo, o menor estímulo hormonal o nervioso.'
      ]
    },
    {
      t:'Dos cambios de tipo celular: metaplasia y displasia',
      p:[
        'La *metaplasia* es el reemplazo de un tipo de célula ADULTA y diferenciada por otro tipo celular adulto distinto, generalmente en respuesta a un irritante crónico —el ejemplo clásico es el epitelio respiratorio (ya visto en Histología) de un fumador crónico, que cambia de su forma normal hacia un epitelio más resistente pero con menos función protectora ciliar. La metaplasia en sí es reversible si el irritante desaparece, pero es clínicamente relevante porque, si el estímulo persiste, el tejido metaplásico puede progresar hacia *displasia*: un crecimiento celular desordenado y con alteraciones en la forma y organización de las células, que ya representa un paso más cercano hacia el desarrollo de cáncer, el tema con el que continúa este bloque.'
      ],
      foco:[
        'Secuencia de progresión, de menor a mayor preocupación clínica: metaplasia (reversible, cambio de tipo celular adulto) → displasia (desorden celular, ya preocupante) → neoplasia (crecimiento celular verdaderamente descontrolado, tema siguiente).'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 1.'
},

'neoplasias-conceptos-generales': {
  tema:'Neoplasias: conceptos generales',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:8,
  idea:'La diferencia entre un tumor "benigno" y uno "maligno" no es solo una cuestión de qué tan grande o feo se ve: son dos comportamientos biológicos fundamentalmente distintos, y esa distinción es, literalmente, la diferencia entre una cirugía curativa y una enfermedad potencialmente mortal.',
  claves:['neoplasia benigna','neoplasia maligna','anaplasia','invasión','metástasis'],
  sigue:'carcinogenesis',
  secciones:[
    {
      t:'Benigno frente a maligno: tres diferencias clave',
      p:[
        'Una *neoplasia benigna* crece de forma relativamente lenta, permanece localizada (no invade tejidos vecinos ni se disemina a distancia), y sus células conservan un parecido considerable con el tejido normal de origen (bien diferenciadas). Una *neoplasia maligna* (cáncer) crece más rápido, tiene capacidad de *invasión* (penetrar activamente en los tejidos vecinos, destruyendo su arquitectura normal en vez de solo empujarla) y de *metástasis* (diseminarse a sitios distantes del cuerpo, típicamente por vía sanguínea o linfática, retomando el drenaje linfático ya visto en Anatomía I y II).',
        'La *anaplasia* es la pérdida de diferenciación celular: las células cancerosas anaplásicas se parecen cada vez menos a las células normales del tejido de origen, con núcleos grandes e irregulares, y mayor actividad de división celular —cuanto más anaplásico es un tumor, generalmente más agresivo es su comportamiento clínico.'
      ]
    },
    {
      t:'Por qué la invasión y la metástasis son las que realmente importan',
      p:[
        'De las tres diferencias mencionadas, la capacidad de invadir y hacer metástasis es la que verdaderamente define el comportamiento maligno de forma más consistente: un tumor benigno, aunque crezca, generalmente se puede extirpar por completo con cirugía y el paciente queda curado, porque permanece contenido en un solo lugar. Un tumor maligno, en cambio, puede haber enviado ya células a otros órganos (metástasis microscópicas, no siempre detectables) incluso antes de que el tumor original se haya extirpado, lo cual explica por qué el cáncer puede reaparecer en otro sitio del cuerpo tiempo después de una cirugía aparentemente exitosa sobre el tumor original.'
      ],
      foco:[
        'Consideración clínica: por eso el estudio de los ganglios linfáticos cercanos a un tumor maligno (como el ganglio centinela ya visto en Anatomía II, para el cáncer de mama) es tan importante: es, con frecuencia, la primera parada de una metástasis en camino, y su estado ayuda a estimar qué tan avanzada está la enfermedad.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 7.'
},

'carcinogenesis': {
  tema:'Carcinogénesis',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:8,
  idea:'Ninguna célula se vuelve cancerosa de un solo golpe: la carcinogénesis es, casi siempre, la acumulación de varias mutaciones sucesivas en genes muy específicos —los mismos oncogenes y genes supresores tumorales ya introducidos en Genética Médica— hasta que la célula pierde por completo el control normal de su propia división.',
  claves:['oncogén','gen supresor tumoral','carcinógeno','mutación somática'],
  sigue:'reparacion-tisular-regeneracion-fibrosis',
  secciones:[
    {
      t:'Dos categorías de genes, dos formas de romper el control',
      p:[
        'Un *oncogén* es una versión mutada y hiperactiva de un gen normal (llamado protooncogén en su forma sana), que normalmente promueve la división celular de forma regulada: cuando muta, empuja a la célula a dividirse de forma descontrolada, actuando como un "acelerador" atascado. Un *gen supresor tumoral*, ya introducido en Genética Médica (con el ejemplo de BRCA1 y BRCA2), normalmente frena la división celular o repara el ADN dañado: cuando ambas copias se inactivan por mutación, ese freno desaparece.',
        'La mayoría de las mutaciones que causan cáncer son *mutaciones somáticas*: ocurren en una célula del cuerpo a lo largo de la vida (no se heredan de los padres ni se transmiten a la descendencia), acumulándose con el tiempo por exposición a distintos factores —a diferencia de las mutaciones germinales heredadas, ya vistas en el tema de genética del cáncer hereditario, que dan a la persona una ventaja de partida (todas sus células ya nacen con una copia mutada) hacia desarrollar cáncer.'
      ]
    },
    {
      t:'Los carcinógenos: lo que induce esas mutaciones',
      p:[
        'Un *carcinógeno* es cualquier agente capaz de inducir o promover estas mutaciones: puede ser químico (como ciertos componentes del humo del tabaco), físico (radiación ultravioleta o ionizante, que daña directamente el ADN), o biológico (ciertos virus, como el virus del papiloma humano, capaces de interferir directamente con genes supresores tumorales de la célula que infectan).',
        'La acumulación de varias mutaciones (en varios oncogenes y genes supresores tumorales distintos, a lo largo de años) es, generalmente, necesaria antes de que una célula se vuelva plenamente cancerosa —es la razón biológica de por qué el cáncer es, en la mayoría de los casos, una enfermedad que tarda años o décadas en desarrollarse, y por qué la exposición prolongada a un carcinógeno (fumar durante décadas, por ejemplo) aumenta el riesgo de forma mucho más marcada que una exposición breve.'
      ],
      foco:[
        'Este tema conecta directamente el ciclo celular ya visto en Histología, los genes supresores tumorales de Genética Médica, y las neoplasias del tema anterior: el cáncer es, en el fondo, una falla acumulada en el sistema de control del ciclo celular, no un evento único y aislado.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 7.'
},

'reparacion-tisular-regeneracion-fibrosis': {
  tema:'Reparación tisular: regeneración y fibrosis',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:7,
  idea:'Después de un daño, el cuerpo tiene dos caminos posibles para reparar el tejido, y cuál toma depende, sobre todo, de si el tejido dañado conserva células capaces de dividirse y de si la arquitectura original del tejido quedó intacta o destruida.',
  claves:['regeneración tisular','cicatrización','tejido de granulación','fibrosis reparativa'],
  sigue:'amiloidosis',
  secciones:[
    {
      t:'Regeneración: reemplazar lo dañado por tejido igual',
      p:[
        'La *regeneración tisular* reemplaza el tejido dañado por células NUEVAS del mismo tipo, restaurando la estructura y función original, y solo es posible en tejidos cuyas células conservan capacidad de dividirse (como el epitelio de la piel o del intestino, ya vistos en Histología) y cuando la estructura de soporte del tejido (la membrana basal, la matriz extracelular) permanece intacta como andamio sobre el cual reconstruir. El hígado es un ejemplo notable de órgano con gran capacidad regenerativa, pudiendo recuperar buena parte de su masa tras una pérdida parcial, siempre que la lesión no sea repetitiva o crónica.'
      ]
    },
    {
      t:'Fibrosis: cuando no se puede regenerar igual',
      p:[
        'Cuando el tejido dañado no puede regenerarse (porque sus células no se dividen, como las neuronas o el músculo cardíaco, ya vistas como células post-mitóticas) o cuando la arquitectura de soporte quedó destruida, el cuerpo repara con *cicatrización*: primero se forma un *tejido de granulación* (un tejido temporal, muy vascularizado, con fibroblastos activos —retomando el fibroblasto ya visto en Histología— produciendo colágeno nuevo), que con el tiempo madura hacia una cicatriz definitiva de tejido conectivo denso, la *fibrosis reparativa*.',
        'La fibrosis restaura la INTEGRIDAD estructural del tejido (lo "tapa" y evita que se rompa), pero NO restaura su función original: una cicatriz en el corazón después de un infarto (ya visto en el tema de necrosis coagulativa) es tejido conectivo, no músculo cardíaco funcional, así que esa zona ya no se contrae ni conduce el impulso eléctrico como lo hacía el tejido original.'
      ],
      foco:[
        'Consideración clínica: esta es la razón exacta por la que un infarto extenso deja una debilidad permanente en la función de bombeo del corazón, aun cuando el paciente sobreviva y el tejido "sane": la cicatriz es resistente, pero inerte desde el punto de vista funcional.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 3.'
},

'amiloidosis': {
  tema:'Amiloidosis',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:6,
  idea:'La amiloidosis es un buen ejemplo de un principio que se repite en varias enfermedades: distintas proteínas de origen completamente distinto pueden, todas, plegarse mal de la misma forma característica y terminar produciendo el mismo tipo de daño tisular.',
  claves:['amiloide','depósito extracelular','rojo Congo','amiloidosis sistémica'],
  sigue:'patologia-ambiental',
  secciones:[
    {
      t:'Una estructura anormal compartida, orígenes distintos',
      p:[
        'El *amiloide* no es una sola proteína: es un nombre para cualquier proteína que se pliega de forma anormal (retomando el concepto de estructura y función de las proteínas ya visto en Bioquímica I, y cómo el mal plegamiento puede hacer que una proteína, aun siendo química y compuesta correctamente, se vuelva disfuncional) adoptando una configuración fibrilar característica, resistente a ser degradada por el cuerpo, y que se deposita de forma progresiva en el espacio extracelular de distintos tejidos.',
        'Distintas proteínas (más de treinta identificadas) pueden plegarse de esta forma anormal en distintas enfermedades: desde una proteína producida en exceso por ciertas células tumorales, hasta una proteína inflamatoria crónicamente elevada en enfermedades autoinmunes de larga duración, cada una dando origen a un tipo distinto de amiloidosis.'
      ]
    },
    {
      t:'Cómo se detecta y qué causa',
      p:[
        'El *depósito extracelular* de amiloide se identifica histológicamente con una tinción especial, el *rojo Congo*, que le da al amiloide una coloración rojiza característica bajo luz normal y, de forma distintiva, una birrefringencia verde manzana cuando se observa con luz polarizada —una de las pocas tinciones tan específicas en toda la patología.',
        'Cuando el depósito se limita a un solo órgano, se llama amiloidosis localizada; cuando se deposita en múltiples órganos a la vez (riñón, corazón, hígado, nervios periféricos, entre otros), se llama *amiloidosis sistémica*, y el órgano afectado va perdiendo función progresivamente a medida que el depósito de amiloide reemplaza tejido normal y altera su arquitectura.'
      ],
      foco:[
        'Este tema es un buen ejemplo, dentro de Anatomía Patológica, de cómo un mismo mecanismo estructural (proteína mal plegada) puede tener orígenes causales completamente distintos, retomando directamente el concepto de plegamiento y desnaturalización de proteínas ya visto en Bioquímica I.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.'
},

'patologia-ambiental': {
  tema:'Patología ambiental',
  bloque:'Anatomía Patológica I', programa:'unirm', cuatri:9, min:6,
  idea:'Este tema cierra el bloque de Anatomía Patológica I mostrando que agentes físicos y químicos del ambiente causan lesión celular por los mismos mecanismos ya estudiados a lo largo de todo el bloque —solo cambia el desencadenante inicial, no el resultado final.',
  claves:['lesión por agentes físicos','lesión por agentes químicos','quemadura','radiación'],
  sigue:null,
  secciones:[
    {
      t:'Agentes físicos: calor, frío y radiación',
      p:[
        'Una *quemadura* por calor extremo desnaturaliza directamente las proteínas celulares (retomando la desnaturalización ya vista en Bioquímica I) y daña las membranas celulares, produciendo necrosis coagulativa en el tejido afectado (ya vista en el tema de necrosis de este mismo bloque); su profundidad y extensión determinan la gravedad, retomando directamente la anatomía de la piel ya vista en Histología. La *radiación* ionizante daña sobre todo el ADN, pudiendo causar muerte celular directa (si el daño es masivo) o mutaciones que, con el tiempo, pueden derivar en cáncer (retomando la carcinogénesis ya vista), dependiendo de la dosis recibida.'
      ]
    },
    {
      t:'Agentes químicos: mecanismos variados',
      p:[
        'La *lesión por agentes químicos* es muy variada en su mecanismo según la sustancia: algunas dañan directamente las membranas celulares, otras interfieren con enzimas específicas del metabolismo celular (como el cianuro, ya mencionado en Bioquímica I, bloqueando la cadena respiratoria), y otras requieren ser metabolizadas primero por el cuerpo (frecuentemente por el hígado, retomando el metabolismo del etanol ya visto en Bioquímica II como ejemplo) para volverse tóxicas, un fenómeno llamado bioactivación.'
      ],
      foco:[
        'Este tema cierra el bloque completo de Anatomía Patológica I mostrando que, sin importar cuál sea el agente lesivo inicial —isquemia, infección, calor, radiación, un químico— el cuerpo responde con el mismo repertorio limitado de mecanismos ya estudiado en este bloque: lesión celular reversible o irreversible, necrosis o apoptosis, inflamación aguda o crónica, y finalmente reparación por regeneración o por fibrosis.'
      ]
    }
  ],
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 8.'
}

});
