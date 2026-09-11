/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7
   Texto para leer de corrido, escrito alrededor de una pregunta:
   ¿que tengo que entender para que esto deje de ser una lista?

   Las referencias son a los textos que se usan de forma
   estandar en estas asignaturas. Se citan para que el estudiante
   pueda ir al capitulo; el texto de aqui es explicacion propia.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== ANATOMIA I ==================== */
'plexo-braquial': {
  tema:'Plexo braquial y nervios del miembro superior',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:9,
  idea:'El tema donde más gente se pierde intentando memorizar un diagrama. Se entiende mucho mejor al revés: cada nervio tiene un recorrido, y del recorrido salen la lesión típica y el gesto que no se puede hacer.',
  claves:['plexo braquial','nervio radial','nervio mediano','nervio cubital','nervio axilar','mano péndula'],
  sigue:'osteologia-miembro-superior',
  secciones:[
    {
      t:'La arquitectura, en cinco palabras',
      p:[
        'El plexo braquial nace de las ramas anteriores de los nervios espinales C5, C6, C7, C8 y T1. Esas cinco raíces se van agrupando en troncos, los troncos se parten en divisiones, las divisiones se reagrupan en fascículos y de los fascículos salen los nervios terminales. Raíces, troncos, divisiones, fascículos, ramas terminales: ese es todo el esqueleto del tema y conviene sabérselo antes de mirar ningún dibujo, porque el dibujo sin esa secuencia es solo un enredo de líneas.',
        'Los tres troncos se forman así: C5 y C6 se juntan en el tronco superior, C7 sigue sola como tronco medio, y C8 con T1 forman el tronco inferior. Cada tronco se divide después en una porción anterior y una posterior. Y aquí está la regla que ordena todo lo demás: **todas las divisiones posteriores se unen en el fascículo posterior**, y de ese fascículo salen los nervios que inervan la musculatura extensora. Las divisiones anteriores dan los fascículos lateral y medial, que se ocupan de la musculatura flexora.'
      ],
      foco:[
        'Posterior = extensión. Anterior = flexión. Esa sola equivalencia explica por qué el radial, que viene del fascículo posterior, deja la mano caída cuando se lesiona.',
        'Los fascículos se llaman lateral, medial y posterior por su posición respecto a la arteria axilar, no por otra cosa.'
      ]
    },
    {
      t:'Los cinco nervios terminales y su gesto',
      p:[
        'De los fascículos salen cinco nervios que hay que conocer por su función, no por su trayecto memorizado. El **nervio axilar** (C5-C6) rodea el cuello quirúrgico del húmero e inerva el deltoides: su lesión impide separar el brazo del cuerpo y deja una zona de piel dormida en la cara lateral del hombro. El **nervio musculocutáneo** (C5-C7) atraviesa el coracobraquial e inerva los flexores del brazo, entre ellos el bíceps: su lesión debilita la flexión del codo.',
        'El **nervio radial** (C5-T1) desciende por el canal de torsión del húmero, pegado al hueso, e inerva toda la musculatura extensora del brazo y el antebrazo. El **nervio mediano** (C6-T1) baja por la cara anterior y se ocupa de la mayoría de los flexores del antebrazo y de los músculos de la eminencia tenar. El **nervio cubital** (C8-T1) pasa por detrás del epicóndilo medial —el sitio donde uno se golpea el codo y le recorre un calambre hasta los dedos— e inerva casi toda la musculatura intrínseca de la mano.'
      ]
    },
    {
      t:'Cada lesión tiene una mano característica',
      p:[
        'Aquí es donde la anatomía deja de ser una lista. La lesión del radial en el canal de torsión —típica de la fractura de diáfisis humeral, porque el nervio va pegado al hueso— produce la **mano péndula**: el paciente no puede extender la muñeca ni los dedos, y la mano cuelga. Fíjate en que la culpa no es de los flexores, que están intactos; es que sin extensores nada equilibra su tracción.',
        'La lesión del cubital da la **mano en garra**, con el cuarto y el quinto dedo en flexión, porque faltan los lumbricales que extienden las falanges distales. La del mediano da la **mano del predicador** al intentar cerrar el puño: los dedos índice y medio se quedan estirados porque sus flexores no responden. Y la del axilar, sin tocar la mano, impide la abducción del hombro.',
        'Estas tres manos son el motivo real por el que se estudia el plexo. Cuando un paciente llegue con una de ellas, el diagnóstico topográfico se hace de memoria si el recorrido está claro.'
      ],
      foco:[
        'Fractura de diáfisis del húmero → sospecha nervio radial → busca la extensión de la muñeca.',
        'Luxación de hombro o fractura del cuello quirúrgico → sospecha nervio axilar → busca la abducción y la sensibilidad del hombro.'
      ]
    },
    {
      t:'Las dos parálisis de raíz que hay que distinguir',
      p:[
        'Cuando el daño está arriba, en las raíces, el cuadro cambia. La **parálisis de Erb-Duchenne** afecta al tronco superior (C5-C6) y se produce al forzar la separación entre el hombro y el cuello: en el recién nacido por una distocia de hombros, en el adulto por una caída sobre el hombro. El brazo queda pegado al cuerpo, en rotación interna y con el antebrazo en pronación, en lo que se describe como posición de propina de camarero.',
        'La **parálisis de Klumpke** afecta al tronco inferior (C8-T1) y aparece al traccionar el brazo hacia arriba, por ejemplo al agarrarse de algo durante una caída. Afecta a la musculatura intrínseca de la mano y da mano en garra. Como T1 lleva fibras simpáticas hacia la cabeza, puede acompañarse de síndrome de Horner: ptosis, miosis y anhidrosis del mismo lado.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica. Rouvière, Anatomía Humana Descriptiva, Topográfica y Funcional.'
},

'osteologia-miembro-superior': {
  tema:'Huesos del miembro superior',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:7,
  idea:'Los huesos se memorizan rápido y se olvidan igual de rápido. Lo que se queda es lo que tiene consecuencia: qué se rompe, por dónde, y qué nervio o arteria va pegado a ese sitio.',
  claves:['clavícula','escápula','húmero','radio','cúbito','carpo','cuello quirúrgico'],
  sigue:'plexo-braquial',
  secciones:[
    {
      t:'Clavícula: el primero en osificar y el que más se rompe',
      p:[
        'La clavícula une el miembro superior al esqueleto axial: medialmente se articula con el manubrio del esternón y lateralmente con el acromion de la escápula. Es el único enganche óseo entre el brazo y el tronco, y eso explica su fragilidad: toda la fuerza de una caída sobre el hombro o sobre la mano extendida termina pasando por ella.',
        'Dos datos que se preguntan siempre. Es el primer hueso del cuerpo en comenzar su osificación, hacia la quinta semana de vida intrauterina. Y su fractura más frecuente ocurre en la unión del tercio medio con el tercio lateral, que es su punto más delgado y donde cambia la curvatura.'
      ]
    },
    {
      t:'Húmero: tres sitios de fractura, tres nervios',
      p:[
        'Del húmero hay que saber tres zonas y qué acompaña a cada una, porque es exactamente lo que se pregunta. El **cuello quirúrgico**, justo por debajo de las tuberosidades, se fractura con frecuencia en el anciano tras una caída, y por ahí pasa el nervio axilar junto a la arteria circunfleja humeral posterior. El **canal de torsión** o surco radial recorre en diagonal la cara posterior de la diáfisis, y por él discurre el nervio radial pegado al hueso: la fractura de diáfisis lo lesiona. El **epicóndilo medial**, en el extremo distal, tiene por detrás el surco donde pasa el nervio cubital.',
        'Se llama cuello quirúrgico por oposición al cuello anatómico, que es el surco estrecho inmediatamente por debajo de la cabeza articular y que casi nunca se rompe. El nombre delata la utilidad: uno es el relevante para el cirujano, el otro para el anatomista.'
      ],
      foco:[
        'Cuello quirúrgico → nervio axilar. Diáfisis → nervio radial. Epicóndilo medial → nervio cubital. Tres pisos, tres nervios.'
      ]
    },
    {
      t:'Antebrazo y mano',
      p:[
        'El antebrazo tiene dos huesos: el radio, lateral y del lado del pulgar, y el cúbito, medial. El radio es el que gira sobre el cúbito en la pronosupinación, y por eso su extremo distal, mucho más voluminoso, es el que soporta la carga cuando uno cae con la mano extendida: de ahí que la fractura de la extremidad distal del radio sea una de las más frecuentes de todo el cuerpo.',
        'El carpo son ocho huesos en dos filas de cuatro. La fila proximal, de lateral a medial: escafoides, semilunar, piramidal y pisiforme. La distal: trapecio, trapezoide, grande y ganchoso. De los ocho, el que hay que vigilar es el **escafoides**: se fractura al caer sobre la mano, duele en la tabaquera anatómica, y su vascularización entra por el extremo distal, de modo que una fractura proximal puede dejar ese fragmento sin riego y terminar en necrosis avascular. Es también la fractura que con más frecuencia no se ve en la primera radiografía.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica. Netter, Atlas de Anatomía Humana.'
},

/* ==================== FISIOLOGIA I ==================== */
'potencial-de-accion': {
  tema:'Potencial de membrana y potencial de acción',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:9,
  idea:'Todo lo que hace el sistema nervioso se apoya en una sola cosa: que hay más potasio dentro y más sodio fuera, y que la membrana puede decidir a cuál deja pasar. Si eso queda claro, el resto es consecuencia.',
  claves:['potencial de reposo','despolarización','repolarización','periodo refractario','umbral'],
  sigue:'contraccion-muscular',
  secciones:[
    {
      t:'Por qué hay un voltaje en reposo',
      p:[
        'La célula mantiene, gastando energía, una distribución desigual de iones: mucho potasio dentro y mucho sodio fuera. Quien la mantiene es la bomba de sodio y potasio, que en cada ciclo saca tres sodios y mete dos potasios consumiendo un ATP. Fíjate en que saca más cargas positivas de las que mete, así que ella sola ya deja el interior ligeramente negativo; pero su aportación directa al voltaje es pequeña.',
        'Lo que de verdad fija el potencial de reposo, alrededor de −70 mV en la neurona, es que la membrana en reposo es mucho más permeable al potasio que al sodio. El potasio tiende a salir siguiendo su gradiente de concentración, y al salir se lleva carga positiva, dejando el interior negativo. Esa negatividad creciente frena la salida, y el sistema se equilibra cerca del potencial de equilibrio del potasio. Por eso el potencial de reposo se parece tanto al del potasio y tan poco al del sodio: la membrana en reposo casi solo escucha al potasio.'
      ],
      foco:[
        'Una hiperpotasemia sube el potasio extracelular, reduce el gradiente de salida y despolariza la célula. Esa es la razón fisiológica de que la hiperpotasemia sea peligrosa para el corazón.'
      ]
    },
    {
      t:'El disparo: todo o nada',
      p:[
        'Si un estímulo despolariza la membrana hasta el **umbral** —en torno a −55 mV— se abren los canales de sodio dependientes de voltaje. El sodio entra en avalancha siguiendo su gradiente, y como es carga positiva, despolariza más la membrana, lo que abre más canales de sodio. Es una retroalimentación positiva, y es la única del organismo que se estudia en primer año: por eso el potencial de acción es un fenómeno de todo o nada. O no se llega al umbral y no pasa nada, o se llega y el disparo es siempre del mismo tamaño.',
        'Un detalle que se pregunta: la intensidad del estímulo no se codifica en la altura del potencial de acción, que es constante, sino en la **frecuencia** de disparos. Un pinchazo fuerte no genera potenciales más grandes, genera más potenciales por segundo.'
      ]
    },
    {
      t:'Volver al reposo, y por qué hay que esperar',
      p:[
        'Los canales de sodio tienen dos compuertas y ese detalle explica casi todo lo que sigue. La compuerta de activación se abre rápido con la despolarización; la de inactivación se cierra poco después, más lenta. Resultado: el canal se cierra solo aunque la membrana siga despolarizada, y queda **inactivado**, que no es lo mismo que cerrado. Un canal inactivado no puede volver a abrirse hasta que la membrana se repolarice.',
        'Mientras tanto se abren los canales de potasio dependientes de voltaje, el potasio sale, y la membrana se repolariza. Suele pasarse de frenada y quedar unos milisegundos más negativa que el reposo: es la hiperpolarización tardía.',
        'De ahí salen los dos periodos refractarios. Durante el **periodo refractario absoluto**, con los canales de sodio inactivados, no hay estímulo capaz de generar otro potencial de acción, por intenso que sea. Durante el **relativo**, ya recuperados algunos canales pero con la membrana hiperpolarizada, hace falta un estímulo mayor de lo normal. El refractario absoluto es lo que impide que el impulso vuelva hacia atrás y lo que pone un techo a la frecuencia de disparo.'
      ],
      foco:[
        'Inactivado ≠ cerrado. Un canal cerrado puede abrirse; uno inactivado tiene que repolarizarse primero. Ese matiz es el periodo refractario absoluto entero.'
      ]
    },
    {
      t:'Cómo viaja y por qué la mielina lo acelera',
      p:[
        'En una fibra sin mielina, cada zona despolarizada despolariza a la de al lado, y el impulso avanza de vecino en vecino. Es fiable pero lento. La mielina aísla eléctricamente el axón salvo en los nódulos de Ranvier, donde se concentran los canales de sodio; el impulso entonces salta de nódulo en nódulo, y a eso se le llama **conducción saltatoria**. Va mucho más rápido y gasta menos, porque solo hay que rehacer el gradiente en los nódulos.',
        'La velocidad también sube con el diámetro de la fibra: a más grueso, menos resistencia interna. Esos dos factores, mielinización y diámetro, ordenan toda la clasificación de fibras nerviosas.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica.'
},

'contraccion-muscular': {
  tema:'Contracción del músculo esquelético',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:8,
  idea:'El músculo no se acorta porque los filamentos se encojan, sino porque se deslizan unos sobre otros. Casi todos los errores de este tema salen de no tener eso claro.',
  claves:['actina','miosina','puente cruzado','retículo sarcoplásmico','troponina','calcio'],
  sigue:'potencial-de-accion',
  secciones:[
    {
      t:'La unidad: el sarcómero',
      p:[
        'El sarcómero es el tramo comprendido entre dos líneas Z y es la unidad contráctil. Dentro hay dos tipos de filamento: los finos, de **actina**, anclados a la línea Z, y los gruesos, de **miosina**, en el centro. La banda A corresponde a la longitud del filamento grueso y **no cambia durante la contracción**; la banda I, que solo contiene filamento fino, y la zona H, que solo contiene grueso, sí se acortan.',
        'Ese es el dato que distingue a quien entendió el modelo de quien lo memorizó: si al contraerse el músculo la banda A no cambia, es que los filamentos no se están encogiendo, se están solapando más. A eso se le llama teoría del deslizamiento de los filamentos.'
      ],
      foco:[
        'Se acortan la banda I y la zona H. La banda A se queda igual. Si en una pregunta dice que la banda A se acorta, es falsa.'
      ]
    },
    {
      t:'Del nervio al calcio',
      p:[
        'La motoneurona libera acetilcolina en la placa motora. La acetilcolina abre canales que despolarizan la membrana muscular y generan un potencial de acción que se propaga por el sarcolema y se mete hacia dentro por los **túbulos T**. Ahí, el cambio de voltaje se transmite al **retículo sarcoplásmico**, que libera el calcio que tenía almacenado.',
        'Ese paso tiene nombre: acoplamiento excitación-contracción. Y el calcio es su moneda. Sin calcio no hay contracción, por mucho ATP y muchos filamentos que haya.'
      ]
    },
    {
      t:'Qué hace el calcio exactamente',
      p:[
        'En reposo, la **tropomiosina** tapa los sitios de unión de la actina, de modo que la miosina no puede engancharse. El calcio se une a la **troponina C**, la troponina cambia de forma y arrastra a la tropomiosina, que se desplaza y destapa esos sitios. Solo entonces la cabeza de miosina puede unirse a la actina.',
        'Es importante decirlo así de explícito porque es un error frecuente pensar que el calcio actúa sobre la miosina. No: el calcio actúa sobre el filamento fino, quitando un freno. La miosina siempre estuvo dispuesta; lo que faltaba era que le dejaran sitio.'
      ]
    },
    {
      t:'El ciclo del puente cruzado y el papel doble del ATP',
      p:[
        'Con los sitios libres, la cabeza de miosina se une a la actina y ejecuta el golpe de fuerza, que arrastra el filamento fino hacia el centro del sarcómero. Para **soltarse**, la cabeza necesita que se una una molécula de ATP. Y para volver a armarse en posición de disparo, necesita hidrolizar ese ATP.',
        'De ahí que el ATP tenga dos funciones distintas en el mismo ciclo: su unión despega la cabeza y su hidrólisis la recarga. Y de ahí sale la explicación del **rigor mortis**: al morir se agota el ATP, las cabezas de miosina se quedan unidas a la actina sin poder soltarse, y el músculo queda rígido. No es que le sobre contracción, es que le falta el ATP que permite terminarla.',
        'La relajación exige además retirar el calcio, y eso lo hace una bomba del retículo sarcoplásmico que también consume ATP. Relajarse cuesta energía, igual que contraerse.'
      ],
      foco:[
        'El ATP se necesita para SOLTAR, no para unir. Es lo contrario de lo que la intuición dice, y es justo lo que se pregunta.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica.'
},

/* ==================== HISTOLOGIA ==================== */
'epitelios': {
  tema:'Epitelios de revestimiento',
  bloque:'Histología', programa:'unirm', cuatri:7, min:7,
  idea:'Se clasifican con dos preguntas y en ese orden: cuántas capas tiene y qué forma tienen las células de la capa superficial. Con eso se nombra cualquier epitelio.',
  claves:['epitelio simple','estratificado','cilíndrico','cúbico','plano','transición'],
  sigue:'tejido-conectivo',
  secciones:[
    {
      t:'Las dos preguntas que lo nombran todo',
      p:[
        'Primera pregunta: ¿cuántas capas de células hay entre la membrana basal y la superficie? Si es una sola, es **simple**. Si hay varias, es **estratificado**. Hay dos casos intermedios que conviene conocer: el **seudoestratificado**, donde todas las células tocan la membrana basal pero no todas llegan a la superficie, y por eso los núcleos quedan a distintas alturas y aparenta tener varias capas; y el **de transición** o urotelio, que cambia de aspecto según esté distendido o relajado.',
        'Segunda pregunta: ¿qué forma tienen las células de la capa más superficial? Aplanadas es **plano**; tan altas como anchas es **cúbico**; más altas que anchas es **cilíndrico** o prismático. Combinando las dos respuestas sale el nombre completo: epitelio simple plano, epitelio estratificado plano, epitelio simple cilíndrico, y así.'
      ],
      foco:[
        'En el estratificado se nombra por la capa SUPERFICIAL, no por la basal. La basal casi siempre es cúbica o cilíndrica en todos ellos.'
      ]
    },
    {
      t:'Dónde está cada uno y por qué ahí',
      p:[
        'La forma sigue a la función, y eso permite deducir la localización en vez de aprendérsela. El **simple plano** es una sola capa aplanadísima: mínimo obstáculo al paso de sustancias. Está justo donde hace falta intercambiar o deslizar: el endotelio de los vasos, el alvéolo pulmonar, el mesotelio de las serosas.',
        'El **simple cúbico** aparece en conductos y en superficies con secreción y absorción moderadas: túbulos renales, conductos de glándulas, superficie del ovario. El **simple cilíndrico** está donde hay absorción o secreción intensas: el tubo digestivo desde el estómago hasta el recto, a menudo con microvellosidades o con células caliciformes intercaladas.',
        'El **estratificado plano** es la respuesta del cuerpo al roce. Si además hay que soportar sequedad, se queratiniza: eso es la epidermis. Si el sitio se mantiene húmedo, no se queratiniza: boca, esófago, vagina. El **seudoestratificado cilíndrico ciliado** con células caliciformes reviste la vía aérea de conducción, donde hay que atrapar partículas y empujarlas hacia arriba. Y el **de transición** está solo en la vía urinaria, de los cálices a la uretra proximal, porque es el único sitio que necesita cambiar de tamaño de forma drástica y repetida.'
      ]
    },
    {
      t:'Lo que hay debajo y por qué importa',
      p:[
        'Todo epitelio se apoya sobre una **membrana basal** y **carece de vasos**: se nutre por difusión desde el tejido conectivo subyacente. Esa avascularidad no es un detalle menor; explica por qué los epitelios son delgados o, cuando son gruesos, tienen sus capas superficiales en proceso de muerte programada.',
        'Y explica también por qué el concepto de membrana basal es tan importante en patología: mientras un tumor epitelial no la atraviesa se llama carcinoma in situ, y en cuanto la atraviesa y alcanza el tejido conectivo con sus vasos, pasa a ser invasor y puede dar metástasis. Esa línea, que se ve al microscopio, es una de las más importantes de toda la medicina.'
      ],
      foco:[
        'Epitelio = sin vasos, sobre membrana basal, con alta capacidad de renovación. Las tres características van juntas.'
      ]
    }
  ],
  ref:'Ross, Histología. Texto y Atlas. Junqueira, Histología Básica.'
},

'tejido-conectivo': {
  tema:'Tejido conectivo',
  bloque:'Histología', programa:'unirm', cuatri:7, min:6,
  idea:'Al revés que el epitelio, aquí lo importante no son las células sino lo que hay entre ellas. Quien estudia el conectivo mirando células no entiende de qué va.',
  claves:['fibroblasto','colágeno','elastina','matriz extracelular','sustancia fundamental'],
  sigue:'epitelios',
  secciones:[
    {
      t:'Tres componentes, y el protagonista no es la célula',
      p:[
        'El tejido conectivo tiene células, fibras y sustancia fundamental. Las dos últimas forman la **matriz extracelular**, y es ahí donde reside la función: sostener, unir y permitir el paso de sustancias. Un epitelio se define por sus células; un conectivo, por su matriz.',
        'La célula residente principal es el **fibroblasto**, que es quien fabrica las fibras y la sustancia fundamental. Junto a él viven células que llegan desde la sangre y participan en la defensa: macrófagos, mastocitos, células plasmáticas, linfocitos. Y en muchos conectivos hay adipocitos.'
      ]
    },
    {
      t:'Las fibras, una por función',
      p:[
        'Hay tres tipos y cada uno resuelve un problema mecánico distinto. El **colágeno** da resistencia a la tracción: es el más abundante del organismo y forma haces gruesos, poco elásticos, que se tiñen de rosa con eosina. Las fibras **elásticas**, de elastina, permiten estirarse y recuperar la forma: abundan donde hace falta ceder y volver, como la aorta, los ligamentos amarillos de la columna y la dermis. Las fibras **reticulares** son colágeno de tipo III en forma de red fina y sostienen órganos blandos: hígado, bazo, ganglios, médula ósea.',
        'Un apunte de técnica que se pregunta: las fibras reticulares no se ven bien con hematoxilina-eosina y se demuestran con impregnación argéntica, por eso se llaman también argirófilas.'
      ],
      foco:[
        'Colágeno = aguanta. Elastina = cede y vuelve. Reticular = sostiene por dentro. Tres palabras, tres fibras.'
      ]
    },
    {
      t:'Tipos de conectivo, y la lógica de la clasificación',
      p:[
        'El conectivo **laxo** tiene poca fibra y mucha sustancia fundamental: es blando, permite el paso de células de defensa y ocupa los espacios entre órganos y bajo los epitelios. Es el tejido donde ocurre la inflamación.',
        'El **denso** tiene mucha fibra y poca sustancia. Si las fibras van todas en la misma dirección es **denso regular**, y eso son los tendones y ligamentos, que trabajan en un solo eje. Si van en todas direcciones es **denso irregular**, y eso es la dermis profunda o las cápsulas de los órganos, que reciben tracción desde cualquier lado.',
        'La lógica es limpia: la disposición de las fibras copia la dirección de las fuerzas que ese tejido tiene que soportar.'
      ]
    }
  ],
  ref:'Ross, Histología. Texto y Atlas. Junqueira, Histología Básica.'
},

/* ==================== BIOQUIMICA I ==================== */
'enzimas-cinetica': {
  tema:'Enzimas y cinética enzimática',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:8,
  idea:'Km y Vmax no son dos fórmulas que memorizar: son dos preguntas distintas sobre la enzima. Una es cuánta afinidad tiene; la otra, cuánto puede llegar a trabajar.',
  claves:['Michaelis','Km','Vmax','inhibidor competitivo','cofactor','alostérico'],
  sigue:'glucolisis',
  secciones:[
    {
      t:'Qué hace realmente una enzima',
      p:[
        'Una enzima acelera una reacción bajando su **energía de activación**. Conviene subrayar lo que eso no significa: no cambia el equilibrio de la reacción, no la hace más favorable termodinámicamente y no se consume en el proceso. Solo hace que se llegue antes al mismo sitio, en los dos sentidos.',
        'Su especificidad viene de la forma del sitio activo. El modelo clásico de llave y cerradura se ha sustituido por el de **ajuste inducido**: el sustrato al entrar deforma ligeramente el sitio activo hasta que encaja. Eso explica mejor por qué una enzima puede aceptar sustratos parecidos con distinta eficiencia.'
      ]
    },
    {
      t:'Km y Vmax, en palabras',
      p:[
        'Si se representa la velocidad de la reacción frente a la concentración de sustrato sale una hipérbola: al principio la velocidad sube casi en proporción, y luego se aplana. Se aplana porque llega un punto en que todas las enzimas están ocupadas; esa velocidad máxima es la **Vmax**, y depende de cuánta enzima haya.',
        'La **Km** es la concentración de sustrato a la que se alcanza la mitad de la Vmax. Y aquí está la interpretación que hay que llevar clara: si a la enzima le basta muy poco sustrato para ir a media potencia, es que se une muy bien a él. Por tanto **Km baja significa afinidad alta**, y Km alta, afinidad baja. Es una relación inversa y es contraintuitiva la primera vez.',
        'A diferencia de la Vmax, la Km no depende de cuánta enzima haya: es una propiedad de la pareja enzima-sustrato.'
      ],
      foco:[
        'Km baja = afinidad alta. Se olvida constantemente porque el número pequeño suena a "poco".'
      ]
    },
    {
      t:'Los dos inhibidores clásicos',
      p:[
        'El **inhibidor competitivo** se parece al sustrato y se sienta en el sitio activo. Compite. Si se echa mucho sustrato, el sustrato gana y se llega igual a la velocidad máxima: por eso la **Vmax no cambia**. Pero como hace falta más sustrato para llegar a media potencia, la **Km aumenta**.',
        'El **inhibidor no competitivo** se une en otro sitio y deforma la enzima. Da igual cuánto sustrato se eche, porque no compite con él: parte de la enzima simplemente ya no sirve. Es como si hubiera menos enzima. Por eso la **Vmax baja** y la **Km no cambia**.',
        'Si esas dos frases están claras, todas las preguntas de inhibición se contestan sin dibujar nada. El truco es preguntarse siempre: ¿puedo vencerlo echando más sustrato? Si sí, es competitivo.'
      ]
    },
    {
      t:'Regulación: alosterismo y el resto',
      p:[
        'Las enzimas que regulan una ruta rara vez siguen la hipérbola de Michaelis-Menten: siguen una curva **sigmoidea**, propia de las enzimas **alostéricas**, que tienen varias subunidades y sitios de regulación aparte del activo. Esa forma en S las hace mucho más sensibles a cambios pequeños de concentración, que es justo lo que se necesita en un punto de control.',
        'Aparte del alosterismo, la célula regula sus enzimas modificándolas covalentemente —la fosforilación es la más habitual—, fabricando más o menos cantidad, y activando precursores inactivos llamados zimógenos, que es como se manejan las enzimas peligrosas como las digestivas y las de la coagulación.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.'
},

'glucolisis': {
  tema:'Glucólisis y sus puntos de control',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:7,
  idea:'No hace falta recitar los diez intermediarios. Hace falta saber dónde se gasta ATP, dónde se gana, y cuáles son los tres pasos que no dan marcha atrás.',
  claves:['glucólisis','hexoquinasa','fosfofructoquinasa','piruvato','gluconeogénesis','lactato'],
  sigue:'enzimas-cinetica',
  secciones:[
    {
      t:'La contabilidad, que es lo que se pregunta',
      p:[
        'La glucólisis ocurre en el **citosol**, no necesita oxígeno y convierte una glucosa de seis carbonos en dos piruvatos de tres. Tiene dos mitades. En la primera, de preparación, se **gastan dos ATP** para fosforilar la molécula; en la segunda, de beneficio, se **producen cuatro ATP** y **dos NADH**.',
        'El balance neto es por tanto de **2 ATP y 2 NADH por glucosa**. Que la primera mitad gaste energía sorprende siempre: la lógica es que fosforilar la glucosa la deja cargada negativamente y ya no puede salir de la célula, y además la prepara para partirse en dos mitades simétricas.'
      ]
    },
    {
      t:'Los tres pasos irreversibles',
      p:[
        'De las diez reacciones, siete son reversibles y tres no. Las tres irreversibles son las catalizadas por la **hexoquinasa** (o glucoquinasa en el hígado), la **fosfofructoquinasa-1** y la **piruvato quinasa**. Merece la pena saberse esas tres por dos motivos.',
        'El primero es que los pasos irreversibles son los puntos de regulación de cualquier ruta: es donde tiene sentido poner un control, porque ahí la célula decide de verdad. El segundo es que, precisamente por ser irreversibles, la gluconeogénesis no puede limitarse a recorrer la glucólisis hacia atrás: tiene que rodear esos tres pasos con enzimas propias. Entender eso ahorra estudiar la gluconeogénesis como si fuera una ruta nueva.',
        'De las tres, la **fosfofructoquinasa-1 es el principal punto de control** de toda la vía. La inhiben el ATP y el citrato —señales de que sobra energía— y la activan el AMP y la fructosa-2,6-bisfosfato.'
      ],
      foco:[
        'Los pasos irreversibles de una ruta son siempre sus puntos de regulación. Esa regla sirve para toda la bioquímica, no solo para la glucólisis.'
      ]
    },
    {
      t:'Qué pasa con el piruvato después',
      p:[
        'El destino del piruvato depende del oxígeno. **Con oxígeno**, entra en la mitocondria, se convierte en acetil-CoA por la piruvato deshidrogenasa y sigue al ciclo de Krebs. **Sin oxígeno**, se reduce a **lactato** por la lactato deshidrogenasa.',
        'Aquí hay un punto que suele explicarse mal. La célula no fabrica lactato porque le sirva de algo el lactato; lo fabrica porque necesita **regenerar NAD+**. Sin NAD+ libre, la glucólisis se para en su sexto paso, y la célula se queda sin su única fuente de ATP en anaerobiosis. Producir lactato es el precio de seguir haciendo glucólisis.',
        'Eso explica de paso por qué el eritrocito, que no tiene mitocondrias, vive permanentemente de la glucólisis y produce lactato de forma continua incluso con todo el oxígeno del mundo alrededor.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.'
},

/* ==================== EMBRIOLOGIA ==================== */
'gastrulacion': {
  tema:'Gastrulación y derivados de las hojas embrionarias',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:7,
  idea:'La semana en que el embrión deja de ser un disco de dos capas y pasa a tener las tres de las que saldrá todo. Si sabes qué sale de cada hoja, media asignatura se deduce.',
  claves:['gastrulación','línea primitiva','ectodermo','mesodermo','endodermo','notocorda'],
  sigue:'tubo-neural',
  secciones:[
    {
      t:'Qué ocurre en la tercera semana',
      p:[
        'Al empezar la tercera semana el embrión es un disco bilaminar, con epiblasto e hipoblasto. La gastrulación lo convierte en trilaminar. Empieza con la aparición de la **línea primitiva** en la superficie del epiblasto, que marca por primera vez el eje cefalocaudal y la simetría bilateral del embrión: antes de eso no había ni cabeza ni cola ni derecha ni izquierda.',
        'Las células del epiblasto migran hacia la línea primitiva y se hunden por ella. Las primeras desplazan al hipoblasto y forman el **endodermo**; las siguientes se colocan entre medias y forman el **mesodermo**; y las que se quedan arriba pasan a llamarse **ectodermo**. Fíjate en que las tres hojas salen del epiblasto: el hipoblasto no aporta tejido al embrión propiamente dicho.',
        'En el extremo cefálico de la línea primitiva está el nódulo primitivo, desde el cual se forma la **notocorda**, que da el eje del embrión e induce a la placa neural.'
      ],
      foco:[
        'Las tres hojas derivan del EPIBLASTO. Es una pregunta clásica y la respuesta intuitiva —una de cada— es falsa.'
      ]
    },
    {
      t:'Qué sale de cada hoja',
      p:[
        'El **ectodermo** da todo lo que nos conecta con el exterior y lo que lo procesa: epidermis con sus anexos (pelo, uñas, glándulas), el sistema nervioso central y periférico, la retina, el epitelio de la boca y del ano, y el esmalte dentario. Es útil pensarlo como "la superficie y lo que la siente".',
        'El **mesodermo** da todo lo que sostiene y transporta: huesos, cartílago, músculo de los tres tipos, corazón y vasos, sangre, riñón y gónadas, bazo, dermis y las serosas. Es la hoja más productiva con diferencia.',
        'El **endodermo** da los revestimientos internos: el epitelio del tubo digestivo y del aparato respiratorio, y el parénquima de hígado, páncreas, tiroides, paratiroides, timo, y la vejiga con la uretra. Ojo con un matiz que se pregunta: del endodermo sale el **epitelio** del tubo digestivo, mientras que su músculo y su tejido conectivo son mesodérmicos.'
      ]
    },
    {
      t:'La cresta neural, que merece capítulo aparte',
      p:[
        'Cuando el tubo neural se cierra, un grupo de células del borde de los pliegues no se queda en el tubo: se desprende y migra por todo el embrión. Es la **cresta neural**, de origen ectodérmico, y produce una variedad de estructuras tan grande que a veces se la llama la cuarta hoja embrionaria.',
        'De ella salen los ganglios sensitivos y autónomos, las células de Schwann, la médula suprarrenal, los melanocitos, gran parte del esqueleto de la cara y los tabiques que separan la aorta de la arteria pulmonar. Esa lista explica por qué enfermedades muy distintas entre sí —algunas cardiopatías conotruncales, ciertos trastornos de la pigmentación, malformaciones craneofaciales— pueden compartir un origen común en un fallo de migración de la cresta neural.'
      ],
      foco:[
        'Cresta neural = ectodermo, pero termina formando huesos de la cara, tabique aorticopulmonar y médula suprarrenal. Es la excepción que más se pregunta.'
      ]
    }
  ],
  ref:'Langman, Embriología Médica. Moore, Embriología Clínica.'
},

'tubo-neural': {
  tema:'Desarrollo del tubo neural y sus defectos',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:6,
  idea:'Un tubo que se cierra como una cremallera, desde el centro hacia los dos extremos. Todos los defectos clásicos son el mismo fallo en sitios distintos.',
  claves:['tubo neural','cresta neural','neuroporo','espina bífida','anencefalia'],
  sigue:'gastrulacion',
  secciones:[
    {
      t:'Cómo se cierra',
      p:[
        'La notocorda induce al ectodermo que tiene encima a engrosarse y formar la **placa neural**. La placa se hunde por el centro formando el surco neural, sus bordes se elevan como pliegues, y esos pliegues se acercan y se fusionan. El cierre empieza por la región cervical y avanza en las dos direcciones a la vez, hacia la cabeza y hacia la cola, como una cremallera abierta por el medio.',
        'Quedan por tanto dos aberturas temporales en los extremos: el **neuroporo anterior**, que se cierra alrededor del día 25, y el **posterior**, que lo hace alrededor del día 27. Esas dos fechas son la clave de todo el tema, porque marcan el final del periodo en que el defecto puede producirse.'
      ]
    },
    {
      t:'Los defectos, por el extremo que falló',
      p:[
        'Si no se cierra el **neuroporo anterior**, el encéfalo no se desarrolla y queda expuesto: es la **anencefalia**, incompatible con la vida. Si no se cierra el **posterior**, aparece la **espina bífida** en sus distintos grados: oculta, cuando solo falta el cierre del arco vertebral y la piel está íntegra; meningocele, cuando protruyen las meninges; y mielomeningocele, cuando protruyen meninges y médula, que es la forma con déficit neurológico.',
        'Dos hechos prácticos que se preguntan siempre. El primero: el **ácido fólico** periconcepcional reduce claramente el riesgo, y hay que empezarlo antes del embarazo, porque para cuando la mujer sabe que está embarazada el tubo ya se cerró. El segundo: los defectos abiertos elevan la **alfafetoproteína** en suero materno y en líquido amniótico, lo que permite sospecharlos antes del parto.'
      ],
      foco:[
        'El tubo neural se cierra entre los días 25 y 27. Todo lo que se haga para prevenir estos defectos tiene que estar hecho ANTES de esa fecha.'
      ]
    }
  ],
  ref:'Langman, Embriología Médica. Moore, Embriología Clínica.'
},

/* ==================== MICROBIOLOGIA MEDICA ==================== */
'gram-y-pared': {
  tema:'Pared bacteriana y tinción de Gram',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:7,
  idea:'La tinción de Gram no es un ritual de laboratorio: es una lectura directa de cómo está construida la pared. Y de esa construcción salen la toxicidad y la respuesta a los antibióticos.',
  claves:['gram','peptidoglicano','cápsula','flagelo','pared celular','endospora'],
  sigue:'cocos-grampositivos',
  secciones:[
    {
      t:'Dos arquitecturas distintas',
      p:[
        'La bacteria **grampositiva** tiene una pared de **peptidoglicano gruesa**, de muchas capas, por fuera de su única membrana. Lleva además ácidos teicoicos anclados en ella. La **gramnegativa** tiene una capa de peptidoglicano **fina**, pero por fuera de ella una **segunda membrana externa**, y en esa membrana externa está el **lipopolisacárido**. Entre las dos membranas queda el espacio periplásmico.',
        'Todo lo demás del tema sale de esas dos descripciones. No conviene memorizar las consecuencias por separado: conviene deducirlas.'
      ]
    },
    {
      t:'Por qué la tinción sale de un color o de otro',
      p:[
        'El procedimiento tiene cuatro pasos: cristal violeta, lugol, alcohol-acetona y safranina. El cristal violeta entra en todas las bacterias y el lugol lo fija formando un complejo grande dentro de la célula. El paso decisivo es el tercero: el **alcohol deshidrata y cierra la malla gruesa de peptidoglicano** del grampositivo, que retiene el complejo y queda **violeta**; en el gramnegativo, en cambio, el alcohol disuelve la membrana externa rica en lípidos y el complejo se escapa por la capa fina. Al quedar incoloro, la safranina lo tiñe de **rosa**.',
        'Dicho de otra forma: el color no depende de lo que la bacteria capta, sino de lo que consigue retener cuando se la lava. Por eso una decoloración excesiva convierte falsamente grampositivos en gramnegativos, que es el error técnico más frecuente.'
      ],
      foco:[
        'Grampositivo = violeta = pared gruesa que retiene. Gramnegativo = rosa = pierde el colorante y se contratiñe.'
      ]
    },
    {
      t:'Consecuencias clínicas de la arquitectura',
      p:[
        'La primera: el **lipopolisacárido** de la membrana externa gramnegativa es la **endotoxina**. No se secreta; se libera cuando la bacteria se lisa, y su porción lípido A desencadena la cascada inflamatoria que puede terminar en shock séptico. Como es un componente estructural, todas las gramnegativas lo tienen y su efecto es siempre el mismo, a diferencia de las exotoxinas, que son proteínas secretadas, específicas de cada especie y con efectos muy variados.',
        'La segunda: los **betalactámicos** actúan impidiendo la síntesis del peptidoglicano. Para llegar a su diana en una gramnegativa tienen que atravesar primero la membrana externa, cosa que hacen por unas porinas; eso explica por qué las gramnegativas son intrínsecamente menos sensibles a varios de ellos y por qué un cambio en las porinas basta para generar resistencia.',
        'La tercera: hay bacterias que no se dejan clasificar por Gram. Las micobacterias tienen una pared cargada de ácidos micólicos y requieren tinción de Ziehl-Neelsen; los micoplasmas carecen directamente de pared, lo que explica de un plumazo que no se vean con Gram y que los betalactámicos no les hagan nada.'
      ],
      foco:[
        'Endotoxina = LPS = estructural = solo gramnegativas. Exotoxina = proteína = secretada = sobre todo grampositivas, aunque no solo.',
        'Sin pared no hay diana para el betalactámico: por eso el micoplasma se trata con macrólidos o tetraciclinas.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Jawetz, Microbiología Médica.'
},

'cocos-grampositivos': {
  tema:'Cocos grampositivos: cómo se separan en el laboratorio',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:6,
  idea:'Se identifican con un árbol de tres preguntas. Aprenderse el árbol vale más que aprenderse las especies sueltas.',
  claves:['Staphylococcus','Streptococcus','catalasa','coagulasa','hemólisis','aureus'],
  sigue:'gram-y-pared',
  secciones:[
    {
      t:'Primera pregunta: catalasa',
      p:[
        'Ante un coco grampositivo, la primera prueba separa los dos géneros grandes. La **catalasa** descompone el peróxido de hidrógeno y produce burbujas visibles. **Staphylococcus es catalasa positivo; Streptococcus y Enterococcus son catalasa negativos.**',
        'Al microscopio ayuda también la disposición: los estafilococos se agrupan en racimos, los estreptococos en cadenas. Pero la catalasa es la prueba que decide.'
      ]
    },
    {
      t:'Segunda pregunta, rama estafilococo: coagulasa',
      p:[
        'Dentro de los estafilococos, la **coagulasa** separa al patógeno principal del resto. **Staphylococcus aureus es coagulasa positivo**; los demás son coagulasa negativos, y de ellos los dos que hay que conocer son *S. epidermidis*, típico de infecciones sobre material protésico y catéteres, y *S. saprophyticus*, causa de infección urinaria en mujeres jóvenes.',
        '*S. aureus* es responsable de infecciones de piel y partes blandas, osteomielitis, endocarditis, neumonía e intoxicación alimentaria por toxina preformada. Su resistencia a la meticilina, que define al SARM, se debe a la adquisición del gen *mecA*, que codifica una proteína fijadora de penicilina alterada a la que los betalactámicos no se unen bien.'
      ]
    },
    {
      t:'Segunda pregunta, rama estreptococo: hemólisis',
      p:[
        'Los estreptococos se separan por su comportamiento en agar sangre. La **hemólisis alfa** es parcial y deja un halo verdoso: ahí están *S. pneumoniae* y los del grupo viridans. La **hemólisis beta** es completa y deja un halo transparente: ahí están *S. pyogenes* (grupo A) y *S. agalactiae* (grupo B). La **gamma** es ausencia de hemólisis, propia de enterococos.',
        'Dentro de los alfa se distinguen con dos pruebas que conviene no confundir: *S. pneumoniae* es sensible a la optoquina y soluble en bilis; los viridans, no. Dentro de los beta, *S. pyogenes* es sensible a la bacitracina y *S. agalactiae* es resistente y CAMP positivo.'
      ],
      foco:[
        'Catalasa → coagulasa → hemólisis. Ese orden resuelve casi cualquier pregunta de identificación de cocos grampositivos.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Jawetz, Microbiología Médica.'
},

/* ==================== ESTADISTICA I ==================== */
'tendencia-y-dispersion': {
  tema:'Tendencia central, dispersión y distribución normal',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:7,
  idea:'La media sola no describe nada. Toda descripción honesta de unos datos necesita un valor central y una medida de cuánto se apartan de él.',
  claves:['media','mediana','moda','desviación estándar','distribución normal','puntuación z'],
  sigue:'tipos-de-variables',
  secciones:[
    {
      t:'Cuándo la media miente',
      p:[
        'La **media** usa todos los valores y por eso la arrastra cualquier valor extremo. La **mediana** es el valor que deja la mitad de los datos a cada lado y no se inmuta ante los extremos. La **moda** es el valor que más se repite y es la única que sirve para variables cualitativas.',
        'De ahí sale la regla práctica más útil de la asignatura: **si la distribución es simétrica, usa la media; si está sesgada o hay valores extremos, usa la mediana**. Por eso los salarios, las estancias hospitalarias o los tiempos de espera se describen casi siempre con mediana: basta un caso muy largo para inflar la media y dar una idea falsa de lo habitual.',
        'En una distribución simétrica, media, mediana y moda coinciden. En una asimétrica a la derecha, la media es la mayor de las tres; en una asimétrica a la izquierda, la menor. La media siempre se va hacia la cola.'
      ],
      foco:[
        'La media se va hacia la cola. Si te dan media y mediana y la media es mucho mayor, hay valores extremos altos.'
      ]
    },
    {
      t:'Dispersión: la mitad que se olvida',
      p:[
        'El **rango** es la diferencia entre el máximo y el mínimo: fácil de calcular e inútil en cuanto hay un valor raro. La **varianza** es el promedio de las desviaciones al cuadrado respecto a la media; se eleva al cuadrado para que las desviaciones negativas no cancelen a las positivas, pero eso deja el resultado en unidades al cuadrado, que no significan nada.',
        'Por eso se usa la **desviación estándar**, que es la raíz cuadrada de la varianza y vuelve a estar en las unidades originales. Es la medida de dispersión que acompaña a la media.',
        'El **coeficiente de variación** es la desviación estándar dividida entre la media, en porcentaje. Sirve para lo que las otras no pueden: comparar la dispersión de dos variables medidas en unidades distintas, o de dos grupos con medias muy diferentes.'
      ]
    },
    {
      t:'La distribución normal y la regla que hay que saberse',
      p:[
        'La distribución normal es simétrica, con forma de campana, y queda completamente definida por dos parámetros: su media, que marca el centro, y su desviación estándar, que marca lo ancha que es. Media, mediana y moda coinciden en el centro.',
        'La regla empírica que se pregunta siempre: aproximadamente el **68%** de las observaciones cae dentro de una desviación estándar a cada lado de la media, el **95%** dentro de dos, y el **99,7%** dentro de tres. Con esos tres números se contestan la mayoría de los ejercicios sin tabla.',
        'La **puntuación z** convierte cualquier valor en el número de desviaciones estándar a las que está de la media, restando la media y dividiendo por la desviación estándar. Sirve para comparar valores de distribuciones distintas: un z de 2 es igual de excepcional venga de donde venga.'
      ],
      foco:[
        '68 – 95 – 99,7. Una, dos y tres desviaciones estándar. Es el dato más rentable de toda la asignatura.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'tipos-de-variables': {
  tema:'Tipos de variables y escalas de medición',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:5,
  idea:'Clasificar bien la variable es el primer paso de cualquier análisis, porque de ahí depende qué se puede calcular y qué gráfico tiene sentido.',
  claves:['cualitativa','cuantitativa','nominal','ordinal','discreta','continua'],
  sigue:'tendencia-y-dispersion',
  secciones:[
    {
      t:'Las cuatro escalas',
      p:[
        'Una variable **cualitativa nominal** son categorías sin orden: grupo sanguíneo, sexo, nacionalidad. Solo se pueden contar y calcular proporciones; hablar de la "media del grupo sanguíneo" no significa nada.',
        'Una **cualitativa ordinal** son categorías con orden pero sin distancia definida entre ellas: leve, moderado, grave; los estadios de un tumor; una escala de dolor del 1 al 10. Se puede decir que una es mayor que otra, pero no que la diferencia entre leve y moderado sea igual que entre moderado y grave. Admite mediana, no media.',
        'Una **cuantitativa discreta** toma valores aislados, normalmente por conteo: número de hijos, número de ingresos. Una **cuantitativa continua** puede tomar cualquier valor dentro de un intervalo: peso, talla, presión arterial, concentración de glucosa. Entre dos valores siempre cabe otro.'
      ],
      foco:[
        'Si al preguntarte "¿tiene sentido su media?" la respuesta es no, la variable es cualitativa por mucho que se codifique con números.'
      ]
    },
    {
      t:'Qué gráfico corresponde a qué',
      p:[
        'Para variables cualitativas se usan el gráfico de barras, con las barras separadas, y el de sectores. Para cuantitativas continuas se usa el **histograma**, con las barras pegadas precisamente porque representan intervalos contiguos de un continuo. Esa separación entre barras es la diferencia visible entre un gráfico de barras y un histograma, y se pregunta.',
        'El diagrama de caja resume una variable cuantitativa mediante la mediana, los cuartiles y los valores extremos, y es el mejor gráfico para comparar la dispersión de varios grupos de un vistazo.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica.'
}

});
