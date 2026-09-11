/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7, SEGUNDA TANDA
   Cubre los temas que la primera dejo fuera. Mismo criterio:
   texto para leer de corrido, escrito alrededor de lo que hay
   que entender para que el tema deje de ser una lista.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== ANATOMIA I ==================== */
'columna-vertebral': {
  tema:'Columna vertebral',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:7,
  idea:'Treinta y tres vértebras que parecen todas iguales hasta que se entiende que cada región resuelve un problema distinto. La forma de cada vértebra delata para qué sirve.',
  claves:['vértebra','cervical','lumbar','apófisis','disco intervertebral','curvatura'],
  sigue:'osteologia-miembro-superior',
  secciones:[
    {
      t:'El plan general y las excepciones',
      p:[
        'Una vértebra tipo tiene un cuerpo por delante, que soporta el peso, y un arco por detrás, que protege la médula. Entre ambos queda el agujero vertebral, y la suma de todos ellos forma el conducto raquídeo. Del arco salen siete apófisis: una espinosa hacia atrás, dos transversas a los lados y cuatro articulares, dos hacia arriba y dos hacia abajo, que articulan cada vértebra con la de encima y la de debajo.',
        'Hay siete cervicales, doce torácicas, cinco lumbares, cinco sacras fusionadas y cuatro coccígeas. El número de vértebras cervicales es siete en casi todos los mamíferos, desde el ratón hasta la jirafa: lo que cambia es el tamaño de cada una, no cuántas hay.'
      ]
    },
    {
      t:'Cada región, un problema distinto',
      p:[
        'Las **cervicales** son pequeñas porque cargan poco peso, y tienen un rasgo exclusivo que permite identificarlas de inmediato: el **agujero transverso**, por el que asciende la arteria vertebral. Ninguna otra vértebra lo tiene. Las dos primeras son atípicas: el **atlas** no tiene cuerpo y sostiene el cráneo permitiendo el gesto de decir que sí, y el **axis** tiene la apófisis odontoides, el pivote sobre el que el atlas gira para decir que no.',
        'Las **torácicas** se reconocen por sus carillas costales, que articulan con las costillas, y por sus apófisis espinosas largas y muy inclinadas hacia abajo, que se superponen como tejas. Las **lumbares** son las más voluminosas porque soportan todo el peso del tronco, no tienen ni agujero transverso ni carillas costales, y sus apófisis espinosas son cortas, rectangulares y horizontales.'
      ],
      foco:[
        'Agujero transverso = cervical. Carilla costal = torácica. Cuerpo grande y nada de lo anterior = lumbar. Con eso se identifica cualquier vértebra suelta.'
      ]
    },
    {
      t:'Curvaturas y disco: por qué duele la espalda',
      p:[
        'La columna del adulto tiene cuatro curvaturas alternas: lordosis cervical, cifosis torácica, lordosis lumbar y cifosis sacra. Las cifosis son primarias, están presentes desde la vida fetal; las lordosis son secundarias y aparecen con el desarrollo motor, la cervical cuando el lactante levanta la cabeza y la lumbar cuando empieza a caminar. Esa alternancia convierte la columna en un resorte y reparte las cargas.',
        'Entre los cuerpos vertebrales está el **disco intervertebral**, con un anillo fibroso periférico y un núcleo pulposo central gelatinoso. Cuando el anillo se debilita, el núcleo puede desplazarse hacia atrás; como el ligamento longitudinal posterior refuerza la línea media, la hernia tiende a salir hacia atrás y a un lado, que es justo donde está la raíz nerviosa. Ahí está la explicación anatómica de por qué una hernia lumbar da dolor irradiado por la pierna en vez de solo dolor local.',
        'Un detalle que evita errores: la médula espinal termina hacia L1-L2 en el adulto, mientras que el conducto sigue hasta el sacro. Por eso la punción lumbar se hace por debajo de ese nivel, donde solo hay raíces flotando en líquido y no médula que pinchar.'
      ],
      foco:[
        'La médula acaba en L1-L2. Debajo está la cola de caballo, y por eso ahí se puede puncionar sin riesgo medular.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica. Rouvière, Anatomía Humana.'
},

/* ==================== FISIOLOGIA I ==================== */
'transporte-membrana': {
  tema:'Transporte a través de la membrana',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:7,
  idea:'Solo hay dos preguntas que hacerle a cualquier transporte: ¿va a favor o en contra del gradiente, y necesita una proteína? Las cuatro respuestas posibles son los cuatro tipos.',
  claves:['difusión','osmosis','transporte activo','bomba sodio potasio','gradiente'],
  sigue:'potencial-de-accion',
  secciones:[
    {
      t:'Las dos preguntas que clasifican todo',
      p:[
        'La primera pregunta es si la sustancia se mueve a favor de su gradiente, en cuyo caso el proceso es espontáneo y no cuesta energía, o en contra, en cuyo caso hay que pagarla. La segunda es si necesita una proteína transportadora.',
        'Cruzando ambas salen los tipos. La **difusión simple** va a favor del gradiente y sin proteína: así cruzan los gases y las moléculas liposolubles, que atraviesan directamente la bicapa. La **difusión facilitada** va a favor pero necesita proteína, porque la molécula es polar o demasiado grande: así entra la glucosa a la mayoría de las células. El **transporte activo primario** va en contra del gradiente y gasta ATP directamente. El **transporte activo secundario** también va en contra, pero no gasta ATP él mismo: aprovecha el gradiente que otra bomba creó antes.'
      ],
      foco:[
        'A favor del gradiente nunca cuesta energía, con proteína o sin ella. La proteína resuelve un problema de permeabilidad, no de energía.'
      ]
    },
    {
      t:'Saturación: cómo distinguirlas en una gráfica',
      p:[
        'Hay una manera experimental de separar la difusión simple de cualquier transporte con proteína. Si se representa la velocidad de entrada frente a la concentración externa, la difusión simple da una **recta**: cuanta más concentración, más entrada, sin límite. Todo transporte mediado por proteína da una **curva que se satura**, porque el número de transportadores es finito y llega un punto en que están todos ocupados.',
        'Por eso los transportes mediados por proteína comparten tres propiedades que la difusión simple no tiene: se saturan, son específicos para su sustrato, y pueden ser inhibidos competitivamente por moléculas parecidas. Es la misma lógica de la cinética enzimática, y no es casualidad: en ambos casos hay un número limitado de sitios de unión.'
      ]
    },
    {
      t:'Ósmosis y tonicidad, que no son lo mismo',
      p:[
        'La **ósmosis** es el paso de agua a través de una membrana semipermeable desde donde hay menos soluto hacia donde hay más. El agua persigue al soluto. La **presión osmótica** es la presión que habría que aplicar para impedir ese paso, y depende del número de partículas disueltas, no de su tamaño ni de su naturaleza.',
        'Conviene separar dos términos que se confunden. La **osmolaridad** cuenta todas las partículas disueltas. La **tonicidad** cuenta solo las que no pueden atravesar la membrana, que son las únicas capaces de mover agua de forma sostenida. Por eso una solución de urea puede tener la misma osmolaridad que el plasma y ser sin embargo hipotónica: la urea entra libremente en la célula, deja de generar gradiente, y el agua la sigue hacia dentro hasta hacerla estallar.',
        'De ahí sale la conducta práctica: en clínica lo que importa para decidir si una solución hincha o encoge las células es su tonicidad, no su osmolaridad medida.'
      ],
      foco:[
        'Osmolaridad cuenta todo; tonicidad solo lo que no cruza. Una solución isosmótica puede ser hipotónica.'
      ]
    },
    {
      t:'La bomba de sodio y potasio, y lo que paga',
      p:[
        'La bomba de sodio y potasio es el transporte activo primario más importante del organismo: saca tres sodios y mete dos potasios por cada ATP hidrolizado. Consume una fracción enorme del gasto energético basal, y merece la pena entender qué compra con él.',
        'Compra tres cosas a la vez. Mantiene el gradiente que hace posible el potencial de membrana y, por tanto, toda la señalización eléctrica. Mantiene el volumen celular, porque al expulsar sodio expulsa indirectamente agua y contrarresta la tendencia de la célula a hincharse por sus proteínas internas. Y crea el gradiente de sodio que después aprovechan los transportes activos secundarios: la absorción intestinal de glucosa por el cotransportador sodio-glucosa, o el intercambiador sodio-calcio del miocardio, funcionan con la energía que esta bomba almacenó en forma de gradiente.',
        'Esa tercera función explica un fenómeno que suele parecer misterioso: por qué inhibir la bomba con digoxina termina aumentando el calcio intracelular del miocardio. Al frenar la bomba sube el sodio dentro, el intercambiador sodio-calcio pierde su gradiente, saca menos calcio, y el calcio acumulado aumenta la fuerza de contracción.'
      ],
      foco:[
        'La bomba no solo hace voltaje: guarda energía en forma de gradiente de sodio, que después gastan otros transportes.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica.'
},

'sinapsis-placa-motora': {
  tema:'Sinapsis y unión neuromuscular',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:7,
  idea:'La unión neuromuscular es la sinapsis mejor estudiada del cuerpo y la más rentable de aprender: casi todos los fármacos y venenos clásicos actúan en uno de sus pasos.',
  claves:['sinapsis','acetilcolina','placa motora','neurotransmisor','vesícula'],
  sigue:'contraccion-muscular',
  secciones:[
    {
      t:'La secuencia, paso a paso',
      p:[
        'El potencial de acción llega al terminal presináptico y despolariza su membrana. Esa despolarización abre **canales de calcio dependientes de voltaje**, y el calcio entra. El calcio es la señal que ordena a las vesículas cargadas de acetilcolina fusionarse con la membrana y verter su contenido a la hendidura sináptica.',
        'La acetilcolina difunde por la hendidura y se une a **receptores nicotínicos** de la membrana muscular. Estos receptores son canales iónicos que se abren al unirse el ligando: entra sodio, la membrana se despolariza y se genera el potencial de placa motora. Si alcanza el umbral, dispara un potencial de acción muscular que se propaga y desencadena la contracción.',
        'El paso final es tan importante como los demás: la **acetilcolinesterasa** de la hendidura hidroliza la acetilcolina en cuestión de milisegundos. Sin ese apagado, el músculo quedaría estimulado de forma continua.'
      ],
      foco:[
        'El calcio presináptico es el interruptor de la liberación. Sin entrada de calcio no se libera neurotransmisor, por mucho potencial de acción que llegue.'
      ]
    },
    {
      t:'Cada paso tiene su tóxico y su fármaco',
      p:[
        'Aquí es donde el tema se vuelve rentable, porque los venenos clásicos se ordenan solos según en qué paso actúan. La **toxina botulínica** impide la fusión de las vesículas y bloquea la liberación de acetilcolina: produce parálisis flácida. El **veneno de la viuda negra** hace lo contrario, provoca una liberación masiva que agota los depósitos.',
        'Sobre el receptor actúan los relajantes musculares. El **curare** y los bloqueantes no despolarizantes ocupan el receptor sin activarlo, compitiendo con la acetilcolina. La **succinilcolina** lo activa pero no se hidroliza rápido, de modo que lo mantiene despolarizado y acaba bloqueándolo: por eso produce primero fasciculaciones y después parálisis.',
        'Sobre la acetilcolinesterasa actúan los **inhibidores**: la neostigmina y la piridostigmina, que se usan para tratar la miastenia gravis aumentando la acetilcolina disponible, y los **organofosforados** de los insecticidas, que la inhiben de forma irreversible y provocan una crisis colinérgica.',
        'Y sobre el propio receptor actúa la **miastenia gravis**, en la que anticuerpos destruyen los receptores nicotínicos: el paciente tiene debilidad que empeora con el uso repetido y mejora con el reposo, exactamente lo que cabe esperar si hay menos receptores de los necesarios.'
      ],
      foco:[
        'Botulínica: no se libera. Curare: no se une. Organofosforado: no se apaga. Miastenia: no hay receptores. Cuatro pasos, cuatro cuadros.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica.'
},

/* ==================== HISTOLOGIA ==================== */
'tejido-nervioso': {
  tema:'Tejido nervioso',
  bloque:'Histología', programa:'unirm', cuatri:7, min:6,
  idea:'Dos poblaciones: las neuronas, que son las que señalizan, y la glía, que es todo lo demás y que supera a las neuronas en número. Casi todos los tumores del sistema nervioso salen de la glía, no de las neuronas.',
  claves:['neurona','astrocito','oligodendrocito','microglía','célula de Schwann','mielina'],
  sigue:'tejido-conectivo',
  secciones:[
    {
      t:'La neurona y su polaridad',
      p:[
        'La neurona tiene un soma con el núcleo, varias dendritas que reciben información y un único axón que la transmite. Esa asimetría no es casual: define el sentido en que viaja la señal. En el soma destaca la **sustancia de Nissl**, que es retículo endoplásmico rugoso agrupado y se tiñe intensamente de basófilo; su abundancia refleja que la neurona sintetiza proteína de forma continua.',
        'El axón carece de sustancia de Nissl, lo que tiene una consecuencia importante: no puede fabricarse sus propias proteínas y depende del transporte axonal desde el soma. El transporte anterógrado lleva material del soma al terminal y el retrógrado en sentido inverso; este último es la vía que aprovechan algunos virus, como el de la rabia y el herpes, para alcanzar el sistema nervioso central.'
      ]
    },
    {
      t:'Las cuatro células gliales y su trabajo',
      p:[
        'El **astrocito** es el más abundante. Sostiene, regula el medio iónico retirando el potasio que se acumula, y sus pies perivasculares forman parte de la barrera hematoencefálica. Cuando hay daño, prolifera y forma la cicatriz glial, que es el equivalente nervioso del tejido cicatricial.',
        'El **oligodendrocito** produce mielina en el sistema nervioso central, y un solo oligodendrocito mieliniza segmentos de varios axones a la vez. La **célula de Schwann** hace lo mismo en el sistema nervioso periférico, pero con una diferencia decisiva: cada célula de Schwann envuelve un único segmento de un único axón.',
        'La **microglía** es el macrófago residente del sistema nervioso y, a diferencia de las otras tres, no procede del tubo neural sino del mesodermo, del linaje monocítico. El **epéndimo** reviste los ventrículos y el conducto central, y participa en la producción de líquido cefalorraquídeo.'
      ],
      foco:[
        'Oligodendrocito: uno para varios axones, en el central. Schwann: una por segmento de un axón, en el periférico. De esa diferencia depende la capacidad de regeneración.'
      ]
    },
    {
      t:'Por qué el nervio periférico se regenera y la médula no',
      p:[
        'Es la pregunta con más sentido clínico del tema. Tras una sección, el axón periférico puede regenerar porque la célula de Schwann sobrevive, prolifera y forma un tubo que guía al axón en crecimiento hacia su destino, además de liberar factores que lo favorecen.',
        'En el sistema nervioso central no ocurre. El oligodendrocito no forma ese tubo, la mielina central contiene moléculas que inhiben activamente el crecimiento axonal, y los astrocitos forman una cicatriz glial que actúa como barrera física y química. Por eso una lesión medular completa no se recupera mientras que un nervio periférico seccionado y reparado sí puede hacerlo, aunque lentamente.'
      ]
    }
  ],
  ref:'Ross, Histología. Texto y Atlas. Junqueira, Histología Básica.'
},

/* ==================== BIOQUIMICA I ==================== */
'krebs-y-cadena': {
  tema:'Ciclo de Krebs y cadena respiratoria',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:8,
  idea:'El ciclo de Krebs no produce casi ATP: produce transportadores de electrones. Entender eso reordena el tema entero, porque el ATP se fabrica después, en la cadena.',
  claves:['ciclo de Krebs','acetil-CoA','NADH','cadena respiratoria','ATP sintasa','quimiosmótica'],
  sigue:'glucolisis',
  secciones:[
    {
      t:'Qué produce realmente el ciclo',
      p:[
        'Por cada acetil-CoA que entra, el ciclo de Krebs produce 3 NADH, 1 FADH2, 1 GTP (equivalente a un ATP) y 2 CO2. Fíjate en la desproporción: un solo enlace de alta energía frente a cuatro transportadores reducidos. El ciclo no es una fábrica de ATP, es una fábrica de **poder reductor**. El ATP vendrá después, cuando esos transportadores entreguen sus electrones a la cadena respiratoria.',
        'Ocurre en la **matriz mitocondrial**, y esa localización tiene consecuencias: necesita que el piruvato entre en la mitocondria y sea descarboxilado a acetil-CoA por la piruvato deshidrogenasa, un paso irreversible que marca el punto de no retorno del carbono de la glucosa.',
        'Un punto que se pregunta con frecuencia: el ciclo en sí no consume oxígeno en ninguna de sus reacciones. Depende del oxígeno de forma indirecta, porque sin él la cadena respiratoria se detiene, el NADH no se reoxida y el ciclo se para por falta de NAD+.'
      ],
      foco:[
        'Krebs no usa oxígeno directamente, pero se detiene sin él. La dependencia es indirecta, a través del NAD+.'
      ]
    },
    {
      t:'El ciclo también es una encrucijada',
      p:[
        'Se suele estudiar como una vía de degradación, pero varios de sus intermediarios salen del ciclo para construir otras moléculas: el citrato sale al citosol para sintetizar ácidos grasos, el alfa-cetoglutarato y el oxalacetato se transaminan a glutamato y aspartato, y el succinil-CoA participa en la síntesis del grupo hemo.',
        'Por eso se dice que es una vía **anfibólica**: catabólica y anabólica a la vez. Y de ahí sale una consecuencia práctica: si los intermediarios se retiran, el ciclo se queda sin oxalacetato para aceptar el siguiente acetil-CoA, y hay que reponerlos. A esas reacciones de reposición se les llama anapleróticas, y la principal es la carboxilación de piruvato a oxalacetato.'
      ]
    },
    {
      t:'La cadena respiratoria y la teoría quimiosmótica',
      p:[
        'El NADH y el FADH2 entregan sus electrones a una serie de complejos de la **membrana mitocondrial interna**. Los electrones van pasando de un complejo a otro, cada uno con mayor afinidad por ellos, hasta llegar al oxígeno, que es el aceptor final y se reduce a agua. Ese descenso libera energía, y los complejos la usan para bombear protones desde la matriz al espacio intermembrana.',
        'El resultado es un **gradiente de protones**: más concentración fuera que dentro, y por tanto energía almacenada. Los protones vuelven a entrar por el único sitio que se lo permite, la **ATP sintasa**, y ese flujo hace girar su rotor y fabrica ATP. Esto es la teoría quimiosmótica de Mitchell, y es la idea central de toda la bioenergética: la energía de los electrones se convierte primero en un gradiente y solo después en ATP.',
        'El NADH entrega sus electrones en el complejo I y el FADH2 en el complejo II, más adelante en la cadena. Como el FADH2 se salta un punto de bombeo, rinde menos ATP que el NADH. Esa es toda la explicación de la diferencia de rendimiento entre ambos.'
      ],
      foco:[
        'La energía no pasa directamente de los electrones al ATP: pasa por un gradiente de protones. Ese paso intermedio es lo que hay que entender.'
      ]
    },
    {
      t:'Venenos: cada uno rompe una pieza',
      p:[
        'Los tóxicos clásicos se ordenan según dónde actúan y la lógica se deduce. El **cianuro** y el **monóxido de carbono** bloquean el complejo IV, impidiendo que los electrones lleguen al oxígeno: la cadena se detiene por completo. La **rotenona** bloquea el complejo I y la **antimicina A** el complejo III.',
        'Caso aparte son los **desacoplantes**, como el dinitrofenol. No bloquean el transporte de electrones: perforan la membrana y dejan que los protones vuelvan a entrar sin pasar por la ATP sintasa. El resultado es que los electrones siguen fluyendo, se sigue consumiendo oxígeno, pero no se fabrica ATP y toda esa energía se disipa como **calor**. Es exactamente lo que hace de forma fisiológica la termogenina del tejido adiposo pardo del recién nacido para producir calor sin tiritar.'
      ],
      foco:[
        'Inhibidor: se para todo. Desacoplante: sigue el consumo de oxígeno pero sale calor en vez de ATP. La diferencia se pregunta.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.'
},

'proteinas-estructura': {
  tema:'Estructura de las proteínas',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:6,
  idea:'Cuatro niveles, y uno determina a los demás: la secuencia de aminoácidos ya contiene, en principio, toda la información necesaria para el plegamiento.',
  claves:['estructura primaria','secundaria','terciaria','desnaturalización','hemoglobina','alfa hélice'],
  sigue:'enzimas-cinetica',
  secciones:[
    {
      t:'Los cuatro niveles y qué los sostiene',
      p:[
        'La **estructura primaria** es la secuencia de aminoácidos unidos por enlaces peptídicos, que son enlaces covalentes. Es el único nivel cuya ruptura exige romper enlaces covalentes, y por eso es el único que la desnaturalización no afecta.',
        'La **secundaria** es el plegamiento local del esqueleto peptídico en alfa hélice u hoja beta plegada, y se mantiene por **puentes de hidrógeno** entre los grupos amino y carbonilo del propio esqueleto, no entre las cadenas laterales.',
        'La **terciaria** es la forma tridimensional completa de una cadena, y aquí sí participan las cadenas laterales: interacciones hidrofóbicas, puentes de hidrógeno, puentes salinos y puentes disulfuro. La principal fuerza impulsora es el **efecto hidrofóbico**: los residuos apolares se esconden del agua hacia el interior y los polares quedan en la superficie.',
        'La **cuaternaria** solo existe en proteínas de más de una cadena, y describe cómo se asocian entre sí. La hemoglobina, con sus cuatro subunidades, la tiene; la mioglobina, con una sola, no.'
      ],
      foco:[
        'La secundaria depende de puentes de hidrógeno del ESQUELETO. La terciaria depende de las CADENAS LATERALES. Se confunde constantemente.'
      ]
    },
    {
      t:'Desnaturalización: qué se pierde y qué no',
      p:[
        'Calor, pH extremo, urea o detergentes rompen las interacciones débiles y la proteína pierde su forma. Se pierden las estructuras secundaria, terciaria y cuaternaria, y con ellas la función, porque la función depende de la forma. La **primaria se conserva**: los enlaces peptídicos siguen intactos.',
        'Un ejemplo cotidiano lo deja claro: al cocinar un huevo, la clara se vuelve opaca y sólida porque sus proteínas se desplegaron y se agregaron entre sí. No se rompió ningún enlace peptídico; simplemente se perdió el plegamiento. Y no se puede volver atrás.'
      ]
    },
    {
      t:'Por qué la hemoglobina explica el tema',
      p:[
        'La hemoglobina es el ejemplo que reúne todo. Tiene cuatro subunidades, es decir, estructura cuaternaria, y esa es precisamente la razón de su comportamiento: la unión de oxígeno a una subunidad facilita la unión en las siguientes, fenómeno llamado **cooperatividad**, que da su curva de disociación **sigmoidea**. La mioglobina, monomérica, tiene una curva hiperbólica y no coopera.',
        'Esa diferencia tiene sentido funcional: una curva sigmoidea permite cargar mucho oxígeno en el pulmón y soltar mucho en los tejidos con un cambio pequeño de presión parcial. La mioglobina, cuya misión es almacenar y no transportar, no lo necesita.',
        'La anemia falciforme demuestra hasta qué punto la primaria manda: el cambio de un único aminoácido, un glutamato por una valina en la posición 6 de la cadena beta, coloca un residuo hidrofóbico en la superficie. Esa pequeña zona grasienta hace que las moléculas se peguen entre sí cuando están desoxigenadas y polimericen, deformando el eritrocito. Un aminoácido de 146, y toda una enfermedad.'
      ],
      foco:[
        'Sigmoidea = cooperatividad = varias subunidades. Hiperbólica = una sola. Sirve igual para enzimas alostéricas.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.'
},

/* ==================== EMBRIOLOGIA ==================== */
'primeras-semanas': {
  tema:'De la fecundación a la implantación',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:7,
  idea:'Dos semanas contadas día a día. La regla que ordena la primera es la de los dobles: dos células, dos capas, dos cavidades.',
  claves:['fecundación','cigoto','mórula','blastocisto','implantación','hCG'],
  sigue:'gastrulacion',
  secciones:[
    {
      t:'Primera semana: de una célula a un blastocisto',
      p:[
        'La **fecundación** ocurre normalmente en la ampolla de la trompa uterina. El espermatozoide debe haber sufrido antes la capacitación en el aparato genital femenino, y al contactar con la zona pelúcida desencadena la reacción acrosómica, que le permite atravesarla. En cuanto uno entra, la reacción cortical del ovocito modifica la zona pelúcida e impide la entrada de otros: es el bloqueo de la polispermia.',
        'El cigoto empieza a dividirse mientras avanza por la trompa. Hacia el tercer día es una **mórula**, una masa compacta de células. Entre el cuarto y el quinto entra líquido y se forma el **blastocisto**, que ya tiene dos poblaciones distintas: el **embrioblasto** o masa celular interna, que dará el embrión, y el **trofoblasto** periférico, que dará la porción fetal de la placenta. Esa es la primera decisión de destino del desarrollo.'
      ]
    },
    {
      t:'Segunda semana: la de los dobles',
      p:[
        'La implantación en el endometrio empieza hacia el sexto día. El trofoblasto se divide en dos capas: el **citotrofoblasto**, interno y con células individuales, y el **sincitiotrofoblasto**, externo, multinucleado y sin límites celulares, que es el que invade activamente el endometrio y el que produce la **gonadotropina coriónica humana**, la hormona que detectan las pruebas de embarazo y que mantiene el cuerpo lúteo.',
        'A la vez, el embrioblasto se organiza en un **disco bilaminar** con epiblasto e hipoblasto, y aparecen dos cavidades: la amniótica sobre el epiblasto y el saco vitelino bajo el hipoblasto. De ahí el nombre: dos capas de trofoblasto, dos capas del disco, dos cavidades.',
        'Un dato con consecuencias: la implantación normal es en el cuerpo o el fondo uterinos. Si ocurre en la trompa se produce un **embarazo ectópico**, que es la localización más frecuente de esta complicación, y si ocurre cerca del orificio cervical interno puede dar lugar a una placenta previa.'
      ],
      foco:[
        'Sincitiotrofoblasto = invade + produce hCG. Es la estructura que hace que el embarazo se detecte y se mantenga.'
      ]
    },
    {
      t:'La línea del tiempo que hay que tener clara',
      p:[
        'Las tres primeras semanas se rigen por la **ley del todo o nada**: una agresión en ese periodo o mata al embrión o no deja secuelas, porque las células son todavía pluripotentes y pueden reemplazarse entre sí.',
        'De la **cuarta a la octava semana** está el periodo de organogénesis, que es el de **máxima sensibilidad a los teratógenos**: es cuando se forman los órganos y cuando una agresión produce malformaciones estructurales. A partir de la novena empieza el periodo fetal, dedicado sobre todo al crecimiento y a la maduración funcional; ahí los teratógenos ya no suelen producir malformaciones groseras, pero sí alteraciones funcionales, y el sistema nervioso sigue siendo vulnerable durante todo el embarazo.'
      ],
      foco:[
        'Semanas 3 a 8: periodo crítico. Es la ventana en la que un teratógeno produce malformación estructural.'
      ]
    }
  ],
  ref:'Langman, Embriología Médica. Moore, Embriología Clínica.'
},

/* ==================== MICROBIOLOGIA MEDICA ==================== */
'bacilos-gramnegativos': {
  tema:'Bacilos gramnegativos',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:6,
  idea:'Un grupo enorme que se ordena en el laboratorio con dos o tres preguntas: si fermenta lactosa, si produce oxidasa y de dónde viene el paciente.',
  claves:['Escherichia coli','Salmonella','Pseudomonas','lactosa','enterobacteria'],
  sigue:'cocos-grampositivos',
  secciones:[
    {
      t:'La primera división: lactosa',
      p:[
        'Las enterobacterias se siembran en agar de MacConkey, un medio que contiene lactosa y un indicador de pH. Las que **fermentan lactosa** producen ácido y sus colonias viran a rosa; las que no, quedan incoloras. Es una separación tosca pero extraordinariamente útil.',
        'Fermentadoras de lactosa: *Escherichia coli*, *Klebsiella* y *Enterobacter*. No fermentadoras: *Salmonella*, *Shigella*, *Proteus* y *Yersinia*. Como muchos de los patógenos entéricos invasivos están en el segundo grupo, una colonia incolora en MacConkey en un coprocultivo orienta de inmediato.'
      ],
      foco:[
        'Rosa en MacConkey = fermenta lactosa. E. coli, Klebsiella, Enterobacter. Las demás, incoloras.'
      ]
    },
    {
      t:'La segunda: oxidasa',
      p:[
        'Todas las enterobacterias son **oxidasa negativas**. Por eso un bacilo gramnegativo **oxidasa positivo** no es una enterobacteria, y eso reduce muchísimo las posibilidades: los nombres a recordar son *Pseudomonas aeruginosa*, *Vibrio cholerae*, *Campylobacter* y *Helicobacter pylori*.',
        '*Pseudomonas aeruginosa* merece atención aparte. Es aerobia estricta, no fermenta lactosa, produce pigmentos que dan a sus colonias un color verde azulado y un olor característico, y es intrínsecamente resistente a muchos antibióticos. Es un patógeno oportunista clásico: infecta al quemado, al paciente con fibrosis quística, al neutropénico y al portador de dispositivos, es decir, a quien tiene la barrera o la defensa rotas.'
      ]
    },
    {
      t:'Tres nombres que hay que saber situar',
      p:[
        '*Escherichia coli* es la causa más frecuente de infección urinaria y una causa habitual de diarrea, además de meningitis neonatal. Sus distintos patotipos producen cuadros muy distintos; el enterohemorrágico, del que el serotipo O157:H7 es el más conocido, produce una toxina similar a la de Shigella y puede desencadenar síndrome hemolítico urémico.',
        '*Salmonella* se transmite por alimentos, sobre todo huevo y aves. Las especies no tifoideas causan gastroenteritis autolimitada; *Salmonella typhi* causa la fiebre tifoidea, un cuadro sistémico con fiebre alta sostenida y bacteriemia, no una simple diarrea.',
        '*Klebsiella pneumoniae* tiene una cápsula prominente que le da aspecto mucoso en el cultivo y es un factor de virulencia importante. Produce neumonía, sobre todo en pacientes con alcoholismo o enfermedades crónicas, y es una causa frecuente de infección asociada a la atención sanitaria con perfiles de resistencia preocupantes.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Jawetz, Microbiología Médica.'
},

/* ==================== ESTADISTICA I ==================== */
'probabilidad-y-muestreo': {
  tema:'Probabilidad y muestreo',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:6,
  idea:'Una muestra sirve para hablar de la población solo si se eligió bien. Todo el resto de la estadística asume eso, y si falla, no hay cálculo que lo arregle.',
  claves:['probabilidad','independencia','muestra','aleatorio simple','estratificado','sesgo de selección'],
  sigue:'tendencia-y-dispersion',
  secciones:[
    {
      t:'Las dos reglas de la probabilidad',
      p:[
        'La probabilidad de un suceso va de 0 a 1 y es el cociente entre los casos favorables y los posibles. A partir de ahí, casi todo se resuelve con dos reglas y sabiendo cuándo aplicar cada una.',
        'La **regla de la suma** se usa para "o": la probabilidad de que ocurra A o B. Si son mutuamente excluyentes, basta sumarlas; si pueden darse a la vez, hay que restar la intersección para no contarla dos veces. La **regla del producto** se usa para "y": la probabilidad de que ocurran A y B. Si son independientes, se multiplican directamente.',
        'Dos sucesos son **independientes** cuando la ocurrencia de uno no modifica la probabilidad del otro. Es una condición que se asume con demasiada alegría: los eventos clínicos de un mismo paciente rara vez son independientes entre sí, y eso hace que multiplicar probabilidades sin pensar dé resultados falsos.'
      ],
      foco:[
        '"O" suma, "y" multiplica. Pero multiplicar exige independencia, y hay que comprobarla antes.'
      ]
    },
    {
      t:'Tipos de muestreo probabilístico',
      p:[
        'El **aleatorio simple** da a cada individuo de la población la misma probabilidad de ser elegido. Es el patrón de referencia, pero exige tener un listado completo de la población, cosa que rara vez se tiene.',
        'El **sistemático** elige uno de cada k a partir de un arranque aleatorio. Es cómodo, pero falla si la lista tiene alguna periodicidad que coincida con k.',
        'El **estratificado** divide antes la población en grupos homogéneos —por edad, por sexo, por curso— y muestrea dentro de cada uno. Sirve para asegurar que los grupos minoritarios queden representados, cosa que el aleatorio simple no garantiza.',
        'El **por conglomerados** selecciona grupos enteros ya formados, como escuelas o barrios, y estudia a todos sus miembros. Es el más barato cuando la población está dispersa, a cambio de menos precisión.'
      ]
    },
    {
      t:'El sesgo, que ningún cálculo arregla',
      p:[
        'Conviene separar dos problemas que se confunden. El **error aleatorio** es la variabilidad propia del azar al muestrear: se reduce aumentando el tamaño de la muestra, y es el que miden los intervalos de confianza. El **sesgo** es un error sistemático que desvía el resultado siempre en la misma dirección: aumentar la muestra no lo corrige, solo lo mide con más precisión.',
        'Esa frase merece subrayarse porque es contraintuitiva: una muestra sesgada de diez mil personas no es mejor que una sesgada de cien. Sigue estando mal, solo que con más decimales.',
        'El **sesgo de selección** aparece cuando los incluidos difieren sistemáticamente de la población a la que se quiere extrapolar. El caso clásico es el muestreo por voluntarios: quien se ofrece a participar en un estudio suele estar más preocupado por su salud que quien no, y eso no se arregla reclutando más voluntarios.'
      ],
      foco:[
        'Más muestra reduce el error aleatorio. NO reduce el sesgo. Es la distinción más importante del tema.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
}

});
