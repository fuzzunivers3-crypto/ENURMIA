/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 24)
   ANATOMIA II reescrita al estandar extenso (como todas las
   materias de 7mo). Mismas 18 claves de objeto que ya existian
   (en apuntes-2.js, -3.js y -9.js), asi que Object.assign las
   sobrescribe sin romper el enlace "Leer el tema".

   De paso se repara la cadena `sigue`, que tenia DOS problemas
   reales: (1) 'pared-abdominal-inguinal' apuntaba a
   'corazon-y-pericardio' (la clave VIEJA huerfana de
   apuntes.js, con tema desajustado "Corazón, pericardio y
   circulación coronaria"), en vez de seguir hacia el tema 6
   ('esofago-estomago-intestino') - un bucle real que saltaba
   siete temas. (2) los 7 apuntes de apuntes-9.js (temas 12-18,
   desde "Sistema nervioso autónomo" hasta "Drenaje linfático
   visceral") tenian TODOS sigue:null, sin encadenarse entre si
   en absoluto. Ahora la cadena completa sigue el orden exacto
   del Temario y termina en 'ciclo-cardiaco', el primer tema de
   Fisiologia II (la materia siguiente del cuatrimestre).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'generalidades-torax-mediastino': {
  tema:'Generalidades del tórax y mediastino',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:14,
  idea:'El mediastino es el espacio central del tórax que queda entre los dos pulmones, y organizarlo en compartimentos es lo que permite predecir qué estructura se ve comprometida según dónde asiente una masa o una lesión.',
  claves:['mediastino','cavidad torácica','pleura','hilio pulmonar'],
  sigue:'corazon-pericardio',
  secciones:[
    {
      t:'La cavidad torácica y sus tres compartimentos principales',
      p:[
        'La cavidad torácica está dividida por el mediastino (la región central) en dos cavidades pleurales laterales, cada una ocupada por un pulmón y revestida por la pleura, una membrana serosa de doble hoja: la pleura visceral, adherida directamente a la superficie del pulmón, y la pleura parietal, adherida a la pared torácica, el diafragma y el mediastino. Entre ambas hojas queda un espacio virtual, la cavidad pleural, con una fina película de líquido que permite el deslizamiento de una hoja sobre la otra durante la respiración, sin fricción. La acumulación patológica de aire (neumotórax) o líquido (derrame pleural) en este espacio virtual es lo que comprime al pulmón subyacente y compromete la ventilación.'
      ],
      foco:[
        'La cavidad pleural es un espacio VIRTUAL en condiciones normales, no un espacio real con contenido -por eso cualquier aire o líquido que se acumule ahí es, por definición, anormal.'
      ]
    },
    {
      t:'El mediastino y su división en compartimentos',
      p:[
        'El mediastino se divide convencionalmente en mediastino superior (por encima del plano que pasa por el ángulo esternal) e inferior, y este último a su vez en anterior, medio y posterior. El mediastino anterior (entre el esternón y el pericardio) contiene principalmente al timo y tejido conectivo graso; el mediastino medio contiene al corazón, el pericardio y los grandes vasos que entran y salen de él; y el mediastino posterior (entre el pericardio y la columna vertebral) contiene al esófago, la aorta descendente, el conducto torácico y la cadena simpática. Esta división compartimental es clínicamente útil porque orienta el diagnóstico diferencial de una masa mediastínica según su localización: una masa en el mediastino anterior sugiere primero un tumor tímico, linfoma o teratoma ("las cuatro T": timoma, teratoma, tiroides ectópica, terrible linfoma, según la mnemotecnia clásica), mientras que una masa posterior sugiere primero un tumor neurogénico originado en la cadena simpática.'
      ],
      foco:[
        '*Consideración clínica*: la localización de una masa mediastínica en la radiografía o TC (anterior, medio o posterior) orienta directamente el diagnóstico diferencial, porque cada compartimento aloja estructuras y, por tanto, patologías características distintas.'
      ]
    },
    {
      t:'El hilio pulmonar: la puerta de entrada y salida de cada pulmón',
      p:[
        'El hilio pulmonar es la región donde el bronquio principal, la arteria pulmonar, las venas pulmonares, los vasos linfáticos y los nervios entran o salen del pulmón, conectándolo con el mediastino. Su disposición es asimétrica y relativamente constante entre ambos pulmones: en el hilio derecho, de superior a inferior, se dispone típicamente el bronquio principal, luego la arteria pulmonar y luego las venas pulmonares (nemotecnia "BAV" de arriba a abajo), mientras que en el izquierdo la arteria pulmonar suele quedar más superior que el bronquio. Reconocer esta disposición es relevante en cirugía torácica, donde las estructuras del hilio deben identificarse y ligarse individualmente durante una resección pulmonar.'
      ],
      foco:[
        'El hilio pulmonar es el punto de referencia obligado en cualquier resección pulmonar: ahí conviven el bronquio, la arteria y las venas pulmonares, cada una con su propia disposición relativamente predecible.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'corazon-pericardio': {
  tema:'Corazón y pericardio',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:15,
  idea:'El corazón no flota libre en el tórax: está envuelto por el pericardio, una estructura de dos capas que, cuando se llena de líquido de forma aguda, puede comprimirlo hasta detener la circulación -el taponamiento cardíaco es, en el fondo, un problema puramente anatómico de espacio.',
  claves:['corazón','pericardio','válvula','aurícula','ventrículo','coronaria'],
  sigue:'pulmones-arbol-bronquial',
  secciones:[
    {
      t:'Las capas del pericardio y el espacio entre ellas',
      p:[
        'El pericardio tiene una capa fibrosa externa, resistente y relativamente poco distensible, que ancla al corazón a estructuras vecinas (esternón, diafragma, grandes vasos), y una capa serosa interna, que a su vez se divide en una hoja parietal (adherida a la cara interna de la capa fibrosa) y una hoja visceral o epicardio (adherida directamente a la superficie del corazón). Entre ambas hojas serosas queda la cavidad pericárdica, con una pequeña cantidad de líquido lubricante en condiciones normales. Como la capa fibrosa externa es poco distensible, una acumulación RÁPIDA de líquido en la cavidad pericárdica (por ejemplo, sangre tras un traumatismo o una rotura miocárdica) puede elevar la presión intrapericárdica lo suficiente como para comprimir las cámaras cardíacas e impedir su llenado -el taponamiento cardíaco-, incluso con volúmenes de líquido relativamente pequeños si la acumulación es súbita.'
      ],
      foco:[
        '*Consideración clínica*: la velocidad de acumulación de líquido pericárdico importa más que el volumen total. Una acumulación lenta y crónica (por ejemplo, en insuficiencia renal) puede tolerar volúmenes grandes sin taponamiento, porque el pericardio fibroso tiene tiempo de distenderse gradualmente; una acumulación aguda de un volumen mucho menor puede taponar, porque el pericardio no tiene tiempo de adaptarse.'
      ]
    },
    {
      t:'Las cuatro cámaras y su disposición',
      p:[
        'El corazón tiene dos aurículas (que reciben sangre) y dos ventrículos (que la expulsan). La aurícula derecha recibe sangre venosa sistémica de las venas cavas superior e inferior y del seno coronario; la envía al ventrículo derecho a través de la válvula tricúspide, que la expulsa hacia la arteria pulmonar a través de la válvula pulmonar, hacia los pulmones. La aurícula izquierda recibe sangre ya oxigenada de las cuatro venas pulmonares; la envía al ventrículo izquierdo a través de la válvula mitral (bicúspide), que la expulsa hacia la aorta a través de la válvula aórtica, hacia la circulación sistémica. El ventrículo izquierdo tiene una pared muscular considerablemente más gruesa que el derecho, porque debe generar la presión necesaria para vencer la resistencia de toda la circulación sistémica, mucho mayor que la resistencia pulmonar que enfrenta el ventrículo derecho.'
      ],
      foco:[
        'Las válvulas AV (tricúspide a la derecha, mitral a la izquierda) separan aurícula de ventrículo; las válvulas semilunares (pulmonar y aórtica) separan ventrículo de la arteria de salida. El ventrículo izquierdo es más grueso porque trabaja contra mayor resistencia (sistémica, no pulmonar).'
      ]
    },
    {
      t:'Irrigación coronaria: dos arterias, territorios distintos',
      p:[
        'El corazón se irriga por las arterias coronarias derecha e izquierda, que nacen de los senos aórticos justo por encima de la válvula aórtica. La coronaria izquierda se divide pronto en la descendente anterior (que irriga la mayor parte del tabique interventricular y la pared anterior del ventrículo izquierdo) y la circunfleja (que irriga la pared lateral). La coronaria derecha irriga típicamente la pared inferior del ventrículo izquierdo, el ventrículo derecho, y en la mayoría de las personas (dominancia derecha, la más frecuente) también da origen a la arteria que irriga el nodo sinusal y el nodo auriculoventricular -lo que explica por qué la oclusión de la coronaria derecha se asocia con frecuencia a bradiarritmias y bloqueos de conducción, además de a isquemia de la pared inferior.'
      ],
      foco:[
        '*Consideración clínica*: un infarto de la pared inferior con bradicardia o bloqueo AV sugiere oclusión de la coronaria derecha (que en la dominancia derecha irriga también el sistema de conducción), mientras que un infarto anterior extenso sugiere oclusión de la descendente anterior, generalmente de peor pronóstico por el territorio miocárdico comprometido.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'pulmones-arbol-bronquial': {
  tema:'Pulmones y árbol bronquial',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:13,
  idea:'La división del pulmón en lóbulos y segmentos broncopulmonares no es un capricho descriptivo: cada segmento tiene su propio bronquio y su propia irrigación, lo que permite resecar quirúrgicamente uno solo sin tener que sacrificar el resto del pulmón.',
  claves:['pulmón','bronquio','lóbulo','segmento broncopulmonar','tráquea'],
  sigue:'grandes-vasos-circulacion',
  secciones:[
    {
      t:'Diferencias entre el pulmón derecho y el izquierdo',
      p:[
        'El pulmón derecho tiene tres lóbulos (superior, medio e inferior), separados por dos fisuras (oblicua y horizontal), mientras que el pulmón izquierdo tiene solo dos lóbulos (superior e inferior), separados por una única fisura oblicua, porque el corazón ocupa espacio predominantemente en el lado izquierdo del tórax, dejando menos espacio disponible para tejido pulmonar de ese lado. El equivalente izquierdo del lóbulo medio derecho es la língula, una porción del lóbulo superior izquierdo, no un lóbulo independiente. El bronquio principal derecho es más corto, más ancho y más vertical que el izquierdo, lo que explica por qué un cuerpo extraño aspirado tiene más probabilidad de alojarse en el pulmón derecho que en el izquierdo, y por qué un tubo endotraqueal insertado demasiado profundamente tiende a entrar selectivamente al bronquio derecho.'
      ],
      foco:[
        '*Consideración clínica*: la broncoaspiración de un cuerpo extraño, o la intubación selectiva accidental, favorece al pulmón derecho por la disposición más vertical y ancha de su bronquio principal.'
      ]
    },
    {
      t:'Segmentos broncopulmonares: la unidad quirúrgica del pulmón',
      p:[
        'Cada lóbulo pulmonar se subdivide en segmentos broncopulmonares, unidades anatómicas y funcionales independientes, cada una irrigada por su propio bronquio segmentario y su propia rama de la arteria pulmonar, con límites definidos por tejido conectivo. Esta organización segmentaria es lo que permite realizar una segmentectomía (resección quirúrgica de un solo segmento) sin necesidad de sacrificar el lóbulo completo, preservando así más tejido pulmonar funcional que con una lobectomía -relevante especialmente en pacientes con reserva pulmonar limitada o con lesiones pequeñas y bien delimitadas a un solo segmento.'
      ],
      foco:[
        'La independencia bronquial y vascular de cada segmento broncopulmonar es lo que hace posible la cirugía de resección limitada (segmentectomía) en lugar de tener que resecar el lóbulo entero.'
      ]
    },
    {
      t:'De la tráquea a los bronquiolos: la vía aérea de conducción',
      p:[
        'La tráquea se bifurca en los dos bronquios principales a la altura aproximada de la cuarta vértebra torácica (la carina, un punto de referencia anatómico y endoscópico importante). Cada bronquio principal se ramifica en bronquios lobares (tres a la derecha, dos a la izquierda), estos en bronquios segmentarios, y estos, a su vez, en ramas cada vez más pequeñas -bronquios subsegmentarios y finalmente bronquiolos, que ya carecen de cartílago en su pared (a diferencia de los bronquios, que sí lo tienen, lo cual les da mayor rigidez estructural). Los bronquiolos terminales dan paso a los bronquiolos respiratorios y finalmente a los alvéolos, donde ocurre el intercambio gaseoso real. Toda la vía aérea previa a los alvéolos (tráquea, bronquios, bronquiolos terminales) constituye el espacio muerto anatómico: conduce aire pero no participa directamente del intercambio gaseoso.'
      ],
      foco:[
        'Bronquios = tienen cartílago en la pared. Bronquiolos = no tienen cartílago. Esa diferencia estructural es la que define, en parte, dónde termina la "vía de conducción" y empieza la zona de verdadero intercambio gaseoso.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'grandes-vasos-circulacion': {
  tema:'Grandes vasos y circulación',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:13,
  idea:'Los grandes vasos torácicos son la vía obligada de toda la sangre que entra o sale del corazón, y su disposición explica hallazgos clínicos tan variados como la ronquera por compresión de un nervio o la asimetría de pulsos en ciertas patologías aórticas.',
  claves:['aorta','vena cava','arteria pulmonar','cayado','conducto torácico'],
  sigue:'pared-abdominal-inguinal',
  secciones:[
    {
      t:'El cayado aórtico y sus tres ramas',
      p:[
        'La aorta asciende desde el ventrículo izquierdo (aorta ascendente), forma un arco (cayado aórtico) del que emergen, de derecha a izquierda, tres ramas principales: el tronco braquiocefálico (que pronto se divide en la carótida común derecha y la subclavia derecha), la carótida común izquierda y la subclavia izquierda, y después continúa descendiendo como aorta torácica descendente. El nervio laríngeo recurrente izquierdo tiene un trayecto anatómico particular: desciende desde el nervio vago, rodea el cayado aórtico por debajo (específicamente por debajo del ligamento arterioso, el remanente fibroso del conducto arterioso fetal) y vuelve a ascender hasta la laringe. Este trayecto tan largo alrededor de una estructura vascular lo hace vulnerable a ser comprimido o lesionado por un aneurisma del cayado aórtico o por ciertas masas mediastínicas, produciendo ronquera (disfonía) como signo de alarma.'
      ],
      foco:[
        '*Consideración clínica*: ronquera de aparición progresiva, sin causa laríngea evidente, obliga a descartar patología del mediastino o del cayado aórtico que comprima el nervio laríngeo recurrente izquierdo en su largo trayecto alrededor del cayado.'
      ]
    },
    {
      t:'Vena cava superior e inferior: el retorno venoso sistémico',
      p:[
        'La vena cava superior se forma por la unión de las dos venas braquiocefálicas (derecha e izquierda) y drena la sangre venosa de la cabeza, el cuello, los miembros superiores y la parte superior del tórax hacia la aurícula derecha. La vena cava inferior, formada por la unión de las dos venas ilíacas comunes, drena la sangre venosa del abdomen, la pelvis y los miembros inferiores. La obstrucción de la vena cava superior (por ejemplo, por un tumor mediastínico que la comprime) produce el síndrome de vena cava superior: edema y congestión venosa característicos de cara, cuello y miembros superiores, con dilatación de venas superficiales visibles en esa región, sin afectar a los miembros inferiores, precisamente porque el territorio de drenaje de ambas venas cavas es independiente.'
      ],
      foco:[
        'El síndrome de vena cava superior afecta específicamente cara, cuello y miembros SUPERIORES (nunca los inferiores), porque cada vena cava drena un territorio anatómico distinto e independiente del otro.'
      ]
    },
    {
      t:'La arteria pulmonar y el conducto torácico',
      p:[
        'El tronco de la arteria pulmonar nace del ventrículo derecho y pronto se divide en las arterias pulmonares derecha e izquierda, que llevan sangre pobre en oxígeno hacia cada pulmón -es la única arteria del cuerpo, junto con sus ramas, que transporta sangre desoxigenada, una excepción a la regla general que conviene no olvidar. El conducto torácico es el vaso linfático principal del cuerpo: recoge la linfa de todo el organismo, excepto del cuadrante superior derecho (cabeza, cuello, miembro superior y tórax del lado derecho, que drenan por el conducto linfático derecho, mucho más pequeño), y la vierte en la unión de la vena subclavia izquierda con la vena yugular interna izquierda. Su lesión, por ejemplo durante una cirugía torácica, puede producir un quilotórax: acumulación de linfa (de aspecto lechoso, por su contenido en grasas absorbidas del intestino) en la cavidad pleural.'
      ],
      foco:[
        'La arteria pulmonar lleva sangre DESOXIGENADA (excepción a la regla de que las arterias llevan sangre oxigenada). El conducto torácico drena TODO el cuerpo salvo el cuadrante superior derecho, y desemboca en la unión yugulo-subclavia izquierda.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'pared-abdominal-inguinal': {
  tema:'Pared abdominal y conducto inguinal',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:14,
  idea:'El conducto inguinal es, en esencia, un punto débil natural de la pared abdominal -necesario para que el testículo descienda durante el desarrollo- y entender sus capas es lo que permite distinguir una hernia inguinal directa de una indirecta con solo un dato de trayecto.',
  claves:['pared abdominal','conducto inguinal','hernia','recto del abdomen','peritoneo'],
  sigue:'esofago-estomago-intestino',
  secciones:[
    {
      t:'Las capas musculares de la pared abdominal anterolateral',
      p:[
        'La pared abdominal anterolateral está formada, de superficial a profundo, por tres capas musculares planas -el oblicuo externo, el oblicuo interno y el transverso del abdomen-, cuyas fibras se orientan en direcciones distintas entre sí (una disposición que le da a la pared resistencia en múltiples direcciones, similar a una madera contrachapada), y por el músculo recto del abdomen, un par de músculos verticales situados a cada lado de la línea media, envueltos por la vaina del recto (formada por las aponeurosis de los tres músculos planos). La línea alba es la línea media fibrosa donde se entrecruzan las aponeurosis de ambos lados; su debilidad relativa la hace el sitio de la hernia epigástrica y de la diástasis de rectos (separación de los músculos rectos, frecuente tras el embarazo).'
      ],
      foco:[
        'Tres músculos planos (oblicuo externo, oblicuo interno, transverso) con fibras en direcciones distintas dan resistencia multidireccional. El recto del abdomen es el par vertical central, envuelto por la vaina del recto.'
      ]
    },
    {
      t:'El conducto inguinal: por qué existe y qué contiene',
      p:[
        'El conducto inguinal es un trayecto oblicuo a través de la pared abdominal inferior, que existe como consecuencia del descenso testicular durante el desarrollo embrionario: el testículo, junto con el proceso vaginal (una evaginación de peritoneo), atraviesa la pared abdominal para llegar al escroto, dejando tras de sí este trayecto. En el hombre, contiene al cordón espermático (con el conducto deferente, vasos testiculares y nervios); en la mujer, contiene al ligamento redondo del útero. Tiene dos aberturas: el anillo inguinal profundo (en la fascia transversal, lateral a los vasos epigástricos inferiores) y el anillo inguinal superficial (en la aponeurosis del oblicuo externo, medial a esos mismos vasos) -la posición de los vasos epigástricos inferiores respecto a estos anillos es precisamente la clave para distinguir los dos tipos principales de hernia inguinal.'
      ],
      foco:[
        'El conducto inguinal es un "punto débil" natural de la pared abdominal, consecuencia directa del descenso testicular embrionario -no una debilidad accidental o adquirida por sí sola.'
      ]
    },
    {
      t:'Hernia inguinal directa contra indirecta: el dato que las separa',
      p:[
        'La hernia inguinal indirecta protruye a través del anillo inguinal profundo, LATERAL a los vasos epigástricos inferiores, siguiendo el trayecto completo del conducto inguinal (el mismo camino que siguió el testículo durante el desarrollo) -es la más frecuente, y en el hombre puede llegar a descender hasta el escroto. La hernia inguinal directa protruye directamente a través de una zona de debilidad de la pared posterior del conducto (el triángulo de Hesselbach), MEDIAL a los vasos epigástricos inferiores, sin seguir el trayecto completo del conducto ni pasar por el anillo profundo -es más frecuente en personas mayores, por debilidad adquirida de la pared, más que por un defecto congénito. Memorizar la posición respecto a los vasos epigástricos inferiores (lateral = indirecta, medial = directa) es más útil clínicamente que memorizar las dos definiciones por separado, porque es el dato que un cirujano usa intraoperatoriamente para clasificar la hernia con certeza.'
      ],
      foco:[
        '*Consideración clínica*: LATERAL a los vasos epigástricos inferiores = hernia INDIRECTA (congénita, sigue el trayecto completo del conducto). MEDIAL a esos vasos = hernia DIRECTA (adquirida, a través del triángulo de Hesselbach). Es el criterio decisivo, no la edad del paciente ni el tamaño de la hernia.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'esofago-estomago-intestino': {
  tema:'Esófago, estómago e intestino',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:14,
  idea:'El tubo digestivo cambia de nombre, de forma y de relaciones peritoneales a cada tramo, y esas diferencias anatómicas -no solo la fisiología- son las que explican por qué ciertas patologías se localizan de forma tan predecible en un segmento y no en otro.',
  claves:['esófago','estómago','duodeno','yeyuno','íleon','colon','mesenterio'],
  sigue:'higado-via-biliar-pancreas-bazo',
  secciones:[
    {
      t:'El esófago y sus tres constricciones anatómicas',
      p:[
        'El esófago tiene tres puntos de estrechamiento anatómico normal, clínicamente relevantes porque son los sitios donde con más frecuencia se impacta un cuerpo extraño deglutido o donde una estenosis (benigna o maligna) tiende a manifestarse primero con disfagia: la constricción cricofaríngea (al inicio, por el músculo cricofaríngeo), la constricción a nivel del cayado aórtico y el bronquio principal izquierdo que lo cruzan (en el tercio medio), y la constricción diafragmática, donde el esófago atraviesa el hiato esofágico del diafragma. El esófago carece de serosa peritoneal en la mayor parte de su trayecto (a diferencia del resto del tubo digestivo), lo cual tiene una consecuencia quirúrgica importante: las anastomosis esofágicas tienen mayor riesgo de dehiscencia que las de otros segmentos del tubo digestivo que sí cuentan con esa capa serosa de refuerzo.'
      ],
      foco:[
        'Las tres constricciones esofágicas (cricofaríngea, por el cayado aórtico/bronquio izquierdo, diafragmática) son los sitios típicos de impactación de cuerpo extraño y de manifestación temprana de estenosis.'
      ]
    },
    {
      t:'Duodeno, yeyuno e íleon: tres tramos con relaciones peritoneales distintas',
      p:[
        'El intestino delgado se divide en duodeno, yeyuno e íleon. El duodeno es en gran parte retroperitoneal (fijo, no móvil, adherido a la pared posterior del abdomen), salvo su primera porción; recibe la desembocadura del colédoco y el conducto pancreático a través de la ampolla de Vater, en su segunda porción. El yeyuno y el íleon, en cambio, son intraperitoneales, suspendidos por el mesenterio, lo que les da movilidad dentro de la cavidad abdominal. El yeyuno tiene una pared más gruesa, con pliegues circulares (válvulas conniventes) más prominentes y numerosos, y una vascularización con menos arcadas arteriales pero vasos rectos más largos; el íleon tiene pared más delgada, pliegues menos prominentes, y más arcadas vasculares con vasos rectos más cortos -diferencias que un cirujano usa para orientarse intraoperatoriamente sobre qué segmento tiene delante, sin necesidad de medir distancias desde el ligamento de Treitz.'
      ],
      foco:[
        'Duodeno = mayormente retroperitoneal, fijo. Yeyuno e íleon = intraperitoneales, móviles, suspendidos por el mesenterio. El yeyuno tiene pared más gruesa y pliegues más prominentes que el íleon, que se va adelgazando progresivamente.'
      ]
    },
    {
      t:'El colon y sus relaciones peritoneales variables',
      p:[
        'El colon se divide en ascendente, transverso, descendente y sigmoide, terminando en el recto. A diferencia del intestino delgado, las relaciones peritoneales del colon son variables por segmento: el colon ascendente y el descendente son generalmente retroperitoneales (fijos a la pared posterior), mientras que el colon transverso y el sigmoide son intraperitoneales, suspendidos por su propio mesenterio (mesocolon transverso y mesocolon sigmoide respectivamente), lo que les da mayor movilidad -y es precisamente esa movilidad la que permite que el colon sigmoide, con su mesenterio relativamente largo, sea el sitio más frecuente de vólvulo intestinal en el adulto, un segmento del tubo digestivo que gira sobre el eje de su propio mesenterio y se obstruye.'
      ],
      foco:[
        '*Consideración clínica*: el colon sigmoide es el sitio más frecuente de vólvulo en el adulto, precisamente por ser intraperitoneal y tener un mesenterio relativamente largo y móvil -las porciones retroperitoneales fijas del colon (ascendente, descendente) no pueden hacer lo mismo.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'higado-via-biliar-pancreas-bazo': {
  tema:'Hígado, vía biliar, páncreas y bazo',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:14,
  idea:'El hígado, la vía biliar y el páncreas comparten una vecindad anatómica tan estrecha que una lesión o una piedra en cualquiera de ellos casi nunca se queda aislada: entender sus relaciones es lo que permite anticipar por dónde se va a propagar el problema.',
  claves:['hígado','vesícula biliar','colédoco','páncreas','bazo','triángulo de Calot'],
  sigue:'retroperitoneo-rinon-suprarrenal',
  secciones:[
    {
      t:'La vía biliar: de los conductos hepáticos al duodeno',
      p:[
        'La bilis producida en el hígado sale a través de los conductos hepáticos derecho e izquierdo, que se unen para formar el conducto hepático común. Este se une con el conducto cístico (que viene de la vesícula biliar, el reservorio donde la bilis se concentra entre comidas) para formar el colédoco, que desciende y desemboca en la segunda porción del duodeno, generalmente junto con el conducto pancreático principal, a través de la ampolla de Vater (o ampolla hepatopancreática), regulada por el esfínter de Oddi. Esta unión anatómica entre la vía biliar y el conducto pancreático en un punto común tiene una consecuencia clínica directa: un cálculo que se impacta en la ampolla de Vater puede obstruir simultáneamente el flujo de bilis (causando ictericia obstructiva) Y el flujo de jugo pancreático (causando pancreatitis biliar), dos cuadros que aparecen juntos precisamente por esa vecindad anatómica compartida.'
      ],
      foco:[
        '*Consideración clínica*: un cálculo impactado en la ampolla de Vater explica por qué la pancreatitis biliar y la ictericia obstructiva pueden coexistir en el mismo paciente -ambos conductos (biliar y pancreático) comparten esa salida común.'
      ]
    },
    {
      t:'El triángulo de Calot: el mapa de seguridad en la colecistectomía',
      p:[
        'El triángulo de Calot (o triángulo cistohepático) es un espacio anatómico delimitado por el conducto cístico, el conducto hepático común y el borde inferior del hígado, dentro del cual transcurre habitualmente la arteria cística (que irriga a la vesícula biliar). Identificar con claridad este triángulo durante una colecistectomía laparoscópica es el paso crítico de seguridad de la cirugía: permite localizar e identificar con certeza el conducto cístico y la arteria cística ANTES de seccionarlos, evitando el error más temido de esta cirugía -la lesión inadvertida del colédoco, que puede ocurrir si se confunde con el conducto cístico, con consecuencias graves para el paciente (estenosis biliar, fuga de bilis, reintervenciones).'
      ],
      foco:[
        'La técnica de "visión crítica de seguridad" en la colecistectomía se basa en disecar y exponer completamente el triángulo de Calot antes de cortar cualquier estructura, precisamente para no confundir el conducto cístico con el colédoco.'
      ]
    },
    {
      t:'Páncreas y bazo: vecinos retroperitoneal e intraperitoneal',
      p:[
        'El páncreas es un órgano mayormente retroperitoneal (salvo la cola, que puede ser parcialmente intraperitoneal), dividido en cabeza (rodeada por el marco duodenal), cuello, cuerpo y cola (que se extiende hacia el hilio esplénico). Su localización retroperitoneal profunda explica por qué el dolor de una pancreatitis suele describirse como "en cinturón" o irradiado hacia la espalda, y por qué las lesiones pancreáticas a menudo se detectan tardíamente, ya que no hay signos peritoneales tempranos claros. El bazo, en cambio, es un órgano intraperitoneal, situado en el cuadrante superior izquierdo, protegido en parte por las costillas inferiores izquierdas -razón por la que una fractura de esas costillas debe hacer sospechar lesión esplénica asociada en un traumatismo abdominal cerrado, dado que el bazo es el órgano abdominal que con más frecuencia se lesiona en este tipo de trauma, por ser muy vascularizado y relativamente friable.'
      ],
      foco:[
        '*Consideración clínica*: fractura de costillas inferiores izquierdas en un traumatismo cerrado → sospechar lesión esplénica asociada. El páncreas retroperitoneal explica el dolor "en cinturón" y la ausencia de signos peritoneales tempranos en la pancreatitis.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'retroperitoneo-rinon-suprarrenal': {
  tema:'Retroperitoneo: riñón y suprarrenal',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:13,
  idea:'Los riñones ocupan el retroperitoneo protegidos, en parte, por la caja torácica inferior -un dato anatómico simple que explica directamente por qué un traumatismo en el flanco puede lesionarlos, y por qué su asimetría de posición entre lado derecho e izquierdo no es casualidad.',
  claves:['riñón','uréter','suprarrenal','retroperitoneo','pelvis renal'],
  sigue:'pelvis-perine',
  secciones:[
    {
      t:'Posición del riñón y su relación con el hígado',
      p:[
        'Ambos riñones son órganos retroperitoneales, situados a cada lado de la columna vertebral, aproximadamente entre la duodécima vértebra torácica y la tercera lumbar. El riñón derecho suele estar ligeramente más bajo que el izquierdo, una asimetría explicada por la presencia del lóbulo hepático derecho justo por encima de él, que ocupa espacio y lo desplaza caudalmente -el riñón izquierdo no tiene ese vecino voluminoso encima, así que mantiene una posición algo más craneal. Cada riñón está rodeado por la fascia renal (de Gerota), que lo envuelve junto con la grasa perirrenal, formando un compartimento relativamente cerrado que, entre otras cosas, contiene el sangrado en caso de traumatismo renal y limita (aunque no impide del todo) la extensión de infecciones perinéfricas.'
      ],
      foco:[
        'El riñón derecho es más bajo que el izquierdo por la presencia del hígado justo encima de él -una asimetría anatómica simple y frecuentemente preguntada.'
      ]
    },
    {
      t:'El uréter y sus tres sitios de estrechamiento fisiológico',
      p:[
        'El uréter conecta la pelvis renal con la vejiga urinaria, y tiene tres sitios de estrechamiento fisiológico normal, que son precisamente los lugares donde con más frecuencia se impacta un cálculo urinario en su trayecto hacia la vejiga, y donde el dolor cólico renal característicamente cambia de irradiación según el nivel: la unión ureteropélvica (donde la pelvis renal se estrecha para formar el uréter propiamente dicho), el punto donde el uréter cruza los vasos ilíacos (al entrar a la pelvis, un punto de referencia quirúrgico importante porque ahí el uréter puede lesionarse durante cirugía pélvica o vascular), y la unión ureterovesical (donde el uréter entra a la vejiga, el punto más estrecho de los tres y, por eso, el sitio más frecuente de impactación de un cálculo).'
      ],
      foco:[
        '*Consideración clínica*: los tres estrechamientos ureterales (unión ureteropélvica, cruce con vasos ilíacos, unión ureterovesical) son los sitios típicos de impactación de cálculos, y la unión ureterovesical, por ser la más estrecha de los tres, es la más frecuente.'
      ]
    },
    {
      t:'Las glándulas suprarrenales: vecinas del riñón, pero independientes',
      p:[
        'Las glándulas suprarrenales se sitúan en el polo superior de cada riñón, envueltas en la misma fascia renal, pero son anatómica y funcionalmente independientes del riñón -de hecho, su irrigación proviene de fuentes distintas (ramas directas de la aorta, de la arteria renal y de la arteria frénica inferior), y su drenaje venoso también es asimétrico entre ambos lados: la vena suprarrenal derecha drena directamente y de forma corta a la vena cava inferior, mientras que la vena suprarrenal izquierda drena primero a la vena renal izquierda, un trayecto más largo. Esta asimetría venosa es relevante en procedimientos de cateterismo selectivo de venas suprarrenales (usados para localizar el origen de un exceso hormonal, como en el hiperaldosteronismo primario), donde canalizar la vena suprarrenal derecha es técnicamente más difícil precisamente por su trayecto corto y directo a la cava.'
      ],
      foco:[
        'La vena suprarrenal derecha drena directo a la cava inferior (trayecto corto, técnicamente difícil de cateterizar); la izquierda drena primero a la vena renal izquierda (trayecto más largo). Es una asimetría con consecuencia práctica en procedimientos diagnósticos.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'pelvis-perine': {
  tema:'Pelvis y periné',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:13,
  idea:'La pelvis es un espacio compartido por los aparatos urinario, digestivo y reproductor, sostenidos todos por un mismo suelo muscular -entender ese suelo pélvico es la base para entender tanto el parto como el prolapso de órganos pélvicos.',
  claves:['pelvis','periné','vejiga','recto','útero','próstata','suelo pélvico'],
  sigue:'cabeza-cuello-triangulos-glandulas',
  secciones:[
    {
      t:'El suelo pélvico: el sostén muscular de las vísceras pélvicas',
      p:[
        'El suelo pélvico está formado principalmente por el músculo elevador del ano (con sus distintas porciones) y el músculo coccígeo, que en conjunto forman el diafragma pélvico: una estructura muscular en forma de embudo que cierra la parte inferior de la cavidad pélvica y sostiene a las vísceras pélvicas (vejiga, útero en la mujer, recto) contra la fuerza de la gravedad y el aumento de la presión intraabdominal. Cuando el suelo pélvico se debilita -por partos vaginales múltiples, envejecimiento, o aumento crónico de la presión abdominal (obesidad, tos crónica, estreñimiento con esfuerzo)-, las vísceras que sostiene pueden descender más allá de su posición normal, produciendo prolapsos de órganos pélvicos (prolapso uterino, cistocele por descenso de la vejiga, rectocele por descenso del recto), y con frecuencia también incontinencia urinaria de esfuerzo, por pérdida del soporte adecuado de la uretra.'
      ],
      foco:[
        'El elevador del ano es el componente principal del suelo pélvico. Su debilitamiento (parto, envejecimiento, presión abdominal crónica) es la causa anatómica común de los distintos tipos de prolapso de órganos pélvicos y de la incontinencia urinaria de esfuerzo.'
      ]
    },
    {
      t:'Relaciones de la próstata y su importancia en el examen clínico',
      p:[
        'La próstata rodea la uretra prostática justo por debajo del cuello de la vejiga, con el recto situado inmediatamente por detrás de ella, separados solo por una delgada fascia (fascia rectovesical, o de Denonvilliers). Esta estrecha relación anatómica es la base del tacto rectal como método de exploración de la próstata: al introducir el dedo en el recto, la pared anterior del recto permite palpar directamente la cara posterior de la próstata, evaluando su tamaño, consistencia y la presencia de nódulos sugestivos de patología. La cercanía anatómica también explica por qué el crecimiento prostático benigno o maligno puede comprimir la uretra prostática (causando síntomas urinarios obstructivos) y por qué la cirugía prostática conlleva riesgo de lesión rectal si no se respeta cuidadosamente ese plano fascial de separación.'
      ],
      foco:[
        '*Consideración clínica*: el tacto rectal permite palpar la próstata precisamente porque el recto está inmediatamente detrás de ella, separados solo por una fascia delgada -la base anatómica de un examen clínico habitual.'
      ]
    },
    {
      t:'El periné: la región superficial dividida en dos triángulos',
      p:[
        'El periné es la región de tejidos blandos situada por debajo del suelo pélvico, entre los muslos, delimitada por el mismo rombo óseo que delimita la salida pélvica (sínfisis del pubis por delante, tuberosidades isquiáticas a los lados, cóccix por detrás). Se divide convencionalmente, mediante una línea imaginaria entre ambas tuberosidades isquiáticas, en dos triángulos: el triángulo urogenital (anterior), que contiene los genitales externos y, en la mujer, el orificio vaginal, y el triángulo anal (posterior), que contiene el conducto anal y el esfínter anal externo. Esta división es relevante clínicamente para describir y localizar con precisión desgarros perineales durante el parto (que se clasifican por grado según cuánto tejido y qué estructuras comprometen, desde la piel hasta el esfínter anal) y para el manejo de abscesos o fístulas perianales.'
      ],
      foco:[
        'Triángulo urogenital (anterior) = genitales externos. Triángulo anal (posterior) = conducto anal y esfínter. La línea entre las tuberosidades isquiáticas es el límite convencional entre ambos.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'cabeza-cuello-triangulos-glandulas': {
  tema:'Cabeza y cuello: triángulos y glándulas',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:13,
  idea:'Dividir el cuello en triángulos no es solo un ejercicio descriptivo: cada triángulo tiene contenidos característicos, y esa organización es lo que permite predecir qué estructura está en riesgo según dónde se localice una masa, una herida o una incisión quirúrgica.',
  claves:['triángulo cervical','tiroides','parótida','carótida','yugular'],
  sigue:'pares-craneales',
  secciones:[
    {
      t:'La división del cuello en triángulos anterior y posterior',
      p:[
        'El músculo esternocleidomastoideo es el punto de referencia central que divide a cada mitad del cuello en un triángulo anterior (medial al músculo, entre él y la línea media) y un triángulo posterior (posterior al músculo, entre él y el borde anterior del trapecio). El triángulo anterior contiene estructuras viscerales y vasculares importantes: la glándula tiroides, la laringe, la faringe, y el paquete vascular formado por la arteria carótida (común, que se bifurca en interna y externa) y la vena yugular interna, junto con el nervio vago. El triángulo posterior contiene principalmente al nervio accesorio espinal (par craneal XI, en su trayecto superficial y vulnerable dentro de este triángulo, cerca de la fascia), ganglios linfáticos cervicales, y el plexo braquial en su porción más proximal.'
      ],
      foco:[
        'El esternocleidomastoideo divide cada lado del cuello en triángulo anterior (vísceras, carótida, yugular interna) y posterior (nervio accesorio espinal, ganglios linfáticos, plexo braquial proximal).'
      ]
    },
    {
      t:'La glándula tiroides y su vecindad con los nervios laríngeos',
      p:[
        'La glándula tiroides se sitúa en la parte anteroinferior del cuello, con sus dos lóbulos laterales conectados por el istmo, y está en estrecha relación con los nervios laríngeos recurrentes, que ascienden por el surco entre la tráquea y el esófago hasta entrar a la laringe, con frecuencia pasando muy cerca de la cápsula tiroidea o de la arteria tiroidea inferior. Esta vecindad anatómica tan estrecha es la razón por la que la lesión del nervio laríngeo recurrente (con la consecuente parálisis de cuerda vocal y disfonía) es una de las complicaciones más temidas de la cirugía tiroidea (tiroidectomía), y por lo que la identificación intraoperatoria cuidadosa de este nervio es un paso estándar de seguridad en esa cirugía, similar en espíritu a la identificación del triángulo de Calot en la colecistectomía.'
      ],
      foco:[
        '*Consideración clínica*: disfonía tras una cirugía tiroidea sugiere lesión del nervio laríngeo recurrente, por su trayecto tan cercano a la glándula -complicación conocida y buscada activamente durante la disección quirúrgica.'
      ]
    },
    {
      t:'La glándula parótida y el nervio facial en su interior',
      p:[
        'La glándula parótida, la mayor de las glándulas salivales, se sitúa por delante y por debajo del oído, y tiene la particularidad de ser atravesada de lado a lado por el nervio facial (par craneal VII), que se divide dentro de la propia glándula en sus ramas terminales (temporal, cigomática, bucal, mandibular y cervical) antes de emerger hacia los músculos de la expresión facial que inerva. Esta relación anatómica -un nervio motor tan importante atravesando literalmente el tejido de la glándula- es la razón por la que la cirugía de la parótida (parotidectomía, por ejemplo ante un tumor) conlleva un riesgo real de lesionar alguna rama del nervio facial, con la consecuente debilidad o parálisis de la región de la cara correspondiente a esa rama específica.'
      ],
      foco:[
        'El nervio facial atraviesa y se ramifica DENTRO de la glándula parótida -no simplemente pasa cerca de ella-, lo que hace de la cirugía parotídea un procedimiento de riesgo específico para la función facial motora.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'pares-craneales': {
  tema:'Pares craneales',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:15,
  idea:'Los doce pares craneales no son una lista para memorizar en orden: son doce vías específicas de entrada y salida de información entre el cerebro y la cabeza, el cuello y (en el caso del vago) buena parte del tronco, y su exploración sistemática en el examen neurológico localiza lesiones con notable precisión.',
  claves:['par craneal','trigémino','facial','vago','oculomotor','hipogloso'],
  sigue:'sistema-nervioso-autonomo-visceral',
  secciones:[
    {
      t:'Función motora, sensitiva o mixta: la primera clasificación útil',
      p:[
        'Los doce pares craneales se clasifican, en un primer nivel útil, según si son puramente sensitivos (olfatorio I, óptico II, vestibulococlear VIII), puramente motores (oculomotor III, troclear IV, abducens VI, accesorio espinal XI, hipogloso XII) o mixtos, con componentes tanto sensitivos como motores (trigémino V, facial VII, glosofaríngeo IX, vago X). Esta clasificación orienta de inmediato qué tipo de déficit esperar ante una lesión de cada uno: la lesión de un par puramente motor produce debilidad sin alteración sensitiva asociada (por ejemplo, el hipogloso, cuya lesión produce debilidad de la lengua sin pérdida de sensibilidad en ella), mientras que la lesión de un par mixto puede producir ambos tipos de déficit combinados.'
      ],
      foco:[
        'Puramente sensitivos: I, II, VIII. Puramente motores: III, IV, VI, XI, XII. Mixtos: V, VII, IX, X. Conocer esta clasificación permite predecir el tipo de déficit esperado ante la lesión de cada par.'
      ]
    },
    {
      t:'El nervio trigémino: sensibilidad facial y masticación',
      p:[
        'El trigémino (V par) es el nervio sensitivo principal de la cara, dividido en tres ramas: oftálmica (V1, sensibilidad de la frente, córnea y parte superior de la nariz), maxilar (V2, sensibilidad de la mejilla, labio superior y parte media de la cara) y mandibular (V3, sensibilidad del labio inferior y mentón, y además la única rama con componente motor, que inerva a los músculos de la masticación). El reflejo corneal (parpadeo al tocar suavemente la córnea) depende de la vía aferente sensitiva del trigémino (rama oftálmica) y de la vía eferente motora del facial (que cierra el párpado): su ausencia, con la sensibilidad conservada en el otro lado, ayuda a localizar en qué punto de ese arco reflejo está el problema.',
        'Clínicamente, la afección más característica del trigémino es la neuralgia del trigémino: episodios de dolor facial intensísimo, breve y recurrente, desencadenado por estímulos habitualmente inocuos (tocarse la cara, masticar, el viento frío), en el territorio de una o más de sus ramas -típicamente V2 o V3.'
      ],
      foco:[
        '*Consideración clínica*: el reflejo corneal evalúa la integridad de DOS pares craneales a la vez -el trigémino como vía sensitiva aferente y el facial como vía motora eferente-, así que su ausencia obliga a distinguir cuál de los dos está comprometido.'
      ]
    },
    {
      t:'El nervio vago: el par craneal que sale más allá de la cabeza y el cuello',
      p:[
        'El vago (X par) es, junto con el accesorio espinal, uno de los pares craneales con el trayecto más largo, extendiéndose mucho más allá de la cabeza y el cuello: desciende por el cuello (dando origen, en su trayecto, al nervio laríngeo recurrente ya mencionado en el tema de cuello), atraviesa el tórax (contribuyendo a la inervación parasimpática del corazón y los pulmones), y llega hasta el abdomen, donde inerva por vía parasimpática buena parte del tubo digestivo, desde el esófago hasta aproximadamente los dos tercios proximales del colon transverso (el mismo límite anatómico que marca el "intestino medio" del desarrollo embrionario). Esta distribución tan amplia explica por qué el vago participa en reflejos tan diversos como el reflejo nauseoso (rama faríngea), la ronquera si se lesiona el laríngeo recurrente, la bradicardia por estimulación vagal (maniobra de Valsalva, masaje del seno carotídeo), y la motilidad gastrointestinal.'
      ],
      foco:[
        'El vago es el único par craneal cuyo territorio de inervación se extiende hasta el abdomen -su componente parasimpático llega hasta el intestino medio (dos tercios proximales del colon transverso), el mismo límite del desarrollo embrionario del intestino medio.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'sistema-nervioso-autonomo-visceral': {
  tema:'Sistema nervioso autónomo: anatomía visceral',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:13,
  idea:'El sistema nervioso autónomo se organiza como dos cadenas de dos neuronas cada una -simpático y parasimpático-, con orígenes anatómicos distintos y opuestos, que explican por qué ciertos síntomas se agrupan de forma tan predecible según cuál rama está activada o dañada.',
  claves:['cadena simpática','ganglio paravertebral','nervio vago','plexo celíaco'],
  sigue:'anatomia-mama',
  secciones:[
    {
      t:'Simpático toracolumbar contra parasimpático craneosacro',
      p:[
        'El sistema nervioso simpático se origina en la médula espinal a nivel toracolumbar (de T1 a L2 aproximadamente), desde donde las fibras preganglionares salen y hacen sinapsis en los ganglios de la cadena simpática paravertebral (una cadena de ganglios a cada lado de la columna vertebral, desde el cuello hasta el sacro) o en ganglios prevertebrales más distales (como el ganglio celíaco), antes de que las fibras posganglionares, ya más largas, lleguen al órgano diana. El sistema parasimpático, en cambio, se origina en dos regiones distintas y separadas: craneal (a través de los pares craneales III, VII, IX y, sobre todo, X -el vago, responsable de la mayor parte de la inervación parasimpática visceral torácica y abdominal-) y sacra (S2-S4, que inerva las vísceras pélvicas). Esta organización anatómica opuesta (toracolumbar contra craneosacra) es la base de la clásica descripción de que ambos sistemas "se turnan" el territorio del cuerpo.'
      ],
      foco:[
        'Simpático = origen toracolumbar (T1-L2). Parasimpático = origen craneosacro (pares III, VII, IX, X + S2-S4). Es una organización anatómica literalmente opuesta en su punto de salida de la médula/tronco encefálico.'
      ]
    },
    {
      t:'La cadena simpática paravertebral y el ganglio estrellado',
      p:[
        'La cadena simpática paravertebral cervical incluye, entre otros, al ganglio cervical superior, medio e inferior; este último con frecuencia se fusiona con el primer ganglio torácico para formar el ganglio estrellado (cervicotorácico). La lesión de la cadena simpática cervical -por ejemplo, por un tumor del vértice pulmonar (tumor de Pancoast) que la invade localmente- produce el síndrome de Horner: la tríada clásica de ptosis (caída parcial del párpado, por pérdida de la inervación simpática del músculo tarsal), miosis (pupila contraída, por pérdida de la inervación simpática del músculo dilatador de la pupila) y anhidrosis facial (falta de sudoración) del mismo lado de la lesión, un ejemplo muy citado de cómo una lesión anatómica precisa produce una tríada clínica predecible.'
      ],
      foco:[
        '*Consideración clínica*: la tríada de Horner (ptosis, miosis, anhidrosis) del mismo lado sugiere lesión de la cadena simpática cervical, y su causa clásica a buscar es un tumor del vértice pulmonar (Pancoast) que la invade por vecindad.'
      ]
    },
    {
      t:'El plexo celíaco: la estación de relevo del abdomen superior',
      p:[
        'El plexo celíaco es el plexo autónomo más grande del abdomen, situado alrededor del origen del tronco celíaco en la aorta abdominal, y recibe tanto fibras simpáticas (a través de los nervios esplácnicos, que llevan fibras preganglionares desde la médula torácica hasta hacer sinapsis ahí mismo, en los ganglios celíacos) como fibras parasimpáticas (del nervio vago, que simplemente lo atraviesa sin hacer sinapsis en él, camino hacia sus propios ganglios terminales cerca o dentro de los órganos que inerva). Este plexo distribuye inervación autónoma a la mayoría de las vísceras abdominales superiores -estómago, hígado, páncreas, bazo, intestino delgado y buena parte del colon-, y es, por su tamaño y su rol central, el sitio de bloqueo anestésico (bloqueo del plexo celíaco) usado para el control del dolor visceral abdominal severo, por ejemplo en el cáncer de páncreas avanzado.'
      ],
      foco:[
        'El plexo celíaco combina fibras simpáticas (que SÍ hacen sinapsis ahí, en los ganglios celíacos) y fibras parasimpáticas del vago (que solo lo ATRAVIESAN, sin sinapsis, hacia ganglios más distales) -es un punto de paso mixto, no simétrico entre ambos sistemas.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'anatomia-mama': {
  tema:'Anatomía de la mama',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:12,
  idea:'La mama no es un órgano aislado: su drenaje linfático es la razón anatómica exacta por la que el cáncer de mama se disemina primero hacia la axila, y conocer ese patrón es lo que orienta la exploración clínica y quirúrgica del ganglio centinela.',
  claves:['glándula mamaria','ligamento de Cooper','drenaje linfático de la mama','cuadrante mamario'],
  sigue:'genitales-femeninos-anatomia-interna',
  secciones:[
    {
      t:'Estructura de la glándula y los ligamentos suspensorios',
      p:[
        'La mama está formada por tejido glandular (organizado en 15 a 20 lóbulos, cada uno con su propio conducto que converge hacia el pezón), tejido adiposo (que determina en gran parte el tamaño de la mama, más que la cantidad de tejido glandular en sí) y tejido conectivo de sostén. Los ligamentos suspensorios de Cooper son bandas fibrosas que atraviesan el tejido mamario, desde la fascia profunda hasta la dermis de la piel suprayacente, dándole soporte estructural a la mama contra la gravedad. Su relevancia clínica es directa: cuando un tumor mamario infiltra y acorta estos ligamentos, produce una retracción visible de la piel suprayacente (el signo clásico de "piel de naranja" o una hendidura/hoyuelo cutáneo), un hallazgo del examen físico que, aunque no es exclusivo del cáncer, siempre obliga a descartarlo activamente.'
      ],
      foco:[
        '*Consideración clínica*: la retracción cutánea sobre una masa mamaria (por acortamiento de los ligamentos de Cooper infiltrados por el tumor) es un signo clínico de alarma que debe buscarse activamente en la exploración de cualquier nódulo mamario palpable.'
      ]
    },
    {
      t:'El drenaje linfático: la razón anatómica de la diseminación axilar',
      p:[
        'Aproximadamente el 75% del drenaje linfático de la mama va hacia los ganglios axilares (organizados convencionalmente en tres niveles según su posición respecto al músculo pectoral menor), y el resto drena principalmente hacia los ganglios paraesternales (a lo largo de la arteria torácica interna, dentro del tórax) y, en menor proporción, hacia ganglios del lado contralateral o hacia la región infraclavicular/supraclavicular. Este patrón de drenaje predominantemente axilar es la razón anatómica directa de por qué el cáncer de mama, al diseminarse por vía linfática, afecta con mayor frecuencia a los ganglios axilares antes que a otras cadenas ganglionares, y es la base de la técnica del ganglio centinela: identificar y biopsiar primero el ganglio (o los pocos ganglios) que reciben el drenaje linfático inicial y directo del tumor, para predecir sin necesidad de vaciar toda la axila si la enfermedad ya se disemina por esa vía.'
      ],
      foco:[
        'El 75% del drenaje linfático mamario va hacia la axila: esa mayoría tan marcada es la base anatómica de por qué la axila es el sitio prioritario de estudio (ganglio centinela) ante un cáncer de mama.'
      ]
    },
    {
      t:'Los cuadrantes mamarios y su relevancia descriptiva',
      p:[
        'Para describir con precisión la localización de un hallazgo (un nódulo, una zona de dolor, una lesión visible en imagen), la mama se divide convencionalmente en cuatro cuadrantes -superoexterno, superointerno, inferoexterno e inferointerno- usando el pezón como punto de referencia central, además de una región central periareolar. El cuadrante superoexterno es, con diferencia, el que concentra mayor cantidad de tejido glandular (por su continuidad con la llamada "cola axilar" de tejido mamario que se extiende hacia la axila), y es también, de forma consistente con esa mayor cantidad de tejido, el cuadrante donde se origina la mayoría de los cánceres de mama -un dato anatómico simple que, sin embargo, no debe hacer bajar la guardia frente a hallazgos en los otros cuadrantes.'
      ],
      foco:[
        'El cuadrante superoexterno concentra la mayor cantidad de tejido glandular (por la cola axilar) y, en consecuencia, la mayoría de los cánceres de mama se originan ahí -un patrón anatómico, no una regla sin excepciones.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'genitales-femeninos-anatomia-interna': {
  tema:'Genitales femeninos: anatomía interna',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:13,
  idea:'El aparato genital femenino interno está sostenido por un sistema de ligamentos cuya función real casi nunca es la que sugiere su nombre -entender qué sostiene realmente cada estructura es la base para entender el prolapso genital y ciertas cirugías ginecológicas.',
  claves:['útero','trompa uterina','ovario','ligamento ancho','vagina'],
  sigue:'genitales-masculinos-anatomia-interna',
  secciones:[
    {
      t:'El útero, sus porciones y su posición habitual',
      p:[
        'El útero se divide en fondo (la porción superior, por encima de la entrada de las trompas), cuerpo (la porción principal) y cuello o cérvix (la porción inferior, que se proyecta hacia la vagina). En su posición más frecuente, el útero está en anteversoflexión: el cuerpo uterino se inclina hacia adelante sobre el eje de la vagina (anteversión), y además el cuerpo se flexiona hacia adelante sobre el cuello (anteflexión) -aunque una posición en retroversión (inclinado hacia atrás) es una variante anatómica normal frecuente en una proporción importante de mujeres sanas, sin que eso implique patología por sí sola. El cérvix se proyecta hacia la porción superior de la vagina, creando un receso circular a su alrededor llamado fórnix vaginal (con porciones anterior, posterior y laterales), siendo el fórnix posterior el más profundo, lo cual tiene relevancia para procedimientos como la culdocentesis (punción a través del fórnix posterior para evaluar líquido en el fondo de saco de Douglas).'
      ],
      foco:[
        'Anteversoflexión (útero inclinado hacia adelante) es la posición más frecuente, pero la retroversión uterina es una variante normal común, no necesariamente patológica.'
      ]
    },
    {
      t:'El ligamento ancho: un pliegue peritoneal, no un verdadero ligamento de sostén',
      p:[
        'El ligamento ancho es, en realidad, un amplio pliegue de peritoneo que se extiende desde los lados del útero hasta la pared lateral de la pelvis, envolviendo dentro de sus dos hojas a las trompas uterinas (en su porción superior, llamada mesosálpinx), a los ligamentos propios del ovario y redondo del útero, y a vasos y nervios en su trayecto hacia estas estructuras. Pese a su nombre, el ligamento ancho aporta relativamente poco sostén mecánico real al útero -es más una envoltura peritoneal que contiene y organiza estructuras, que un verdadero elemento de suspensión-. El verdadero sostén del útero proviene principalmente de los ligamentos cardinales (transversos del cuello, de la cara lateral del cérvix a la pared pélvica) y los ligamentos uterosacros (del cérvix al sacro), junto con el propio suelo pélvico muscular ya descrito. Confundir el ligamento ancho con una estructura de soporte mecánico real es un error conceptual frecuente.'
      ],
      foco:[
        'El ligamento ancho es un pliegue PERITONEAL que envuelve estructuras (trompas, ligamento propio del ovario, ligamento redondo, vasos), no el principal soporte mecánico del útero -ese papel corresponde a los ligamentos cardinales y uterosacros.'
      ]
    },
    {
      t:'La trompa uterina y el ovario: relación cercana, pero sin continuidad directa',
      p:[
        'La trompa uterina se divide en cuatro porciones: la porción intramural (dentro de la pared uterina), el istmo, la ampolla (el sitio habitual de la fecundación, el segmento más ancho) y el infundíbulo, terminado en fimbrias que se aproximan al ovario sin estar directamente unidas a él -hay una discontinuidad anatómica real entre el extremo distal de la trompa y el ovario, y el ovocito liberado en la ovulación debe ser "captado" activamente por las fimbrias hacia el interior de la trompa, un proceso que puede fallar, lo cual es parte de la explicación de ciertos casos de infertilidad de causa tuboovárica. El ovario, a diferencia de la mayoría de las estructuras pélvicas, no está cubierto por peritoneo visceral típico, sino por un epitelio germinal especializado, y está suspendido por el ligamento propio del ovario (que lo une al útero) y el ligamento suspensorio del ovario (que contiene a los vasos ováricos y lo une a la pared pélvica lateral).'
      ],
      foco:[
        '*Consideración clínica*: la discontinuidad anatómica entre la fimbria y el ovario (el ovocito debe ser "captado" activamente, no pasa por un conducto cerrado) es relevante para entender tanto el embarazo ectópico como ciertas causas de infertilidad tuboovárica.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'genitales-masculinos-anatomia-interna': {
  tema:'Genitales masculinos: anatomía interna',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:13,
  idea:'El trayecto del espermatozoide, desde el testículo hasta la eyaculación, atraviesa una cadena de estructuras con nombres y funciones muy específicas, y saber en qué punto de esa cadena está un problema (obstrucción, infección, dolor) cambia por completo el enfoque diagnóstico.',
  claves:['testículo','conducto deferente','vesícula seminal','próstata','epidídimo'],
  sigue:'diafragma-orificios',
  secciones:[
    {
      t:'Del testículo al epidídimo: maduración, no solo transporte',
      p:[
        'Los espermatozoides se producen en los túbulos seminíferos del testículo, pero salen de ahí todavía inmóviles y funcionalmente inmaduros -no es sino hasta que atraviesan el epidídimo (una estructura alargada y muy replegada sobre sí misma, adosada a la cara posterior del testículo, dividida en cabeza, cuerpo y cola) que adquieren motilidad y capacidad fecundante completa, en un proceso de maduración que toma aproximadamente dos semanas. Esto explica por qué el epidídimo no es un simple conducto de paso, sino un órgano con función biológica activa propia, y por qué su inflamación (epididimitis, frecuentemente de causa infecciosa) produce dolor testicular y escrotal característico, distinto del dolor de una torsión testicular, aunque ambos cuadros pueden ser clínicamente difíciles de distinguir sin estudios de imagen.'
      ],
      foco:[
        'El epidídimo no es solo un conducto de transporte: ahí los espermatozoides adquieren motilidad y capacidad fecundante completa, un proceso de maduración biológica activa, no pasiva.'
      ]
    },
    {
      t:'El conducto deferente y su trayecto hasta la vesícula seminal',
      p:[
        'El conducto deferente continúa desde la cola del epidídimo, asciende como parte del cordón espermático a través del conducto inguinal (ya descrito en el tema de pared abdominal), entra a la pelvis, y se dirige hacia la base de la vejiga, donde se une con el conducto de la vesícula seminal correspondiente para formar el conducto eyaculador, que atraviesa la próstata y desemboca en la uretra prostática. Las vesículas seminales no almacenan espermatozoides (un error conceptual frecuente sugerido por su nombre) sino que producen la mayor parte del volumen del líquido seminal, rico en fructosa (la principal fuente de energía para los espermatozoides eyaculados) y prostaglandinas. La vasectomía, el método de anticoncepción quirúrgica masculina, consiste precisamente en seccionar el conducto deferente en su trayecto accesible dentro del cordón espermático (a nivel escrotal alto), interrumpiendo el paso de espermatozoides sin afectar la producción de líquido seminal por las vesículas ni por la próstata -por lo que el volumen de la eyaculación tras la vasectomía cambia muy poco, aunque ya no contenga espermatozoides.'
      ],
      foco:[
        '*Consideración clínica*: las vesículas seminales NO almacenan espermatozoides -producen la mayor parte del líquido seminal (fructosa, prostaglandinas). Por eso la vasectomía apenas cambia el volumen eyaculado: solo elimina los espermatozoides, no la mayor parte del líquido.'
      ]
    },
    {
      t:'Zonas de la próstata y su relevancia diagnóstica diferencial',
      p:[
        'La próstata se organiza en zonas glandulares con relevancia clínica distinta: la zona periférica (la porción más grande, palpable en el tacto rectal, y el sitio de origen de la gran mayoría de los cánceres de próstata) y la zona de transición (que rodea a la uretra prostática, y es el sitio donde característicamente se desarrolla la hiperplasia prostática benigna). Esta distinción anatómica explica un patrón clínico aparentemente contraintuitivo: la hiperplasia prostática benigna, al crecer en la zona de transición que rodea directamente a la uretra, produce síntomas urinarios obstructivos con relativa facilidad incluso siendo una condición benigna, mientras que el cáncer de próstata, al originarse típicamente en la zona periférica (más alejada de la uretra), puede crecer de forma silente durante mucho tiempo sin producir síntomas urinarios tempranos, siendo a veces palpable en el tacto rectal antes de dar cualquier síntoma.'
      ],
      foco:[
        'Zona de transición (rodea la uretra) = sitio típico de la hiperplasia prostática benigna, síntomas obstructivos tempranos. Zona periférica (palpable al tacto rectal) = sitio típico del cáncer de próstata, con frecuencia asintomático hasta etapas avanzadas.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'diafragma-orificios': {
  tema:'Diafragma y sus orificios',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:12,
  idea:'El diafragma no es una simple lámina muscular plana: tiene tres orificios principales, cada uno a una altura distinta y con un comportamiento distinto durante la respiración, un detalle que explica por qué ciertas estructuras se comprimen o se hernian de forma tan predecible.',
  claves:['diafragma','hiato esofágico','orificio de la vena cava','hiato aórtico'],
  sigue:'grandes-vasos-retroperitoneales',
  secciones:[
    {
      t:'Los tres orificios principales y su altura vertebral característica',
      p:[
        'El diafragma tiene tres grandes orificios, situados a alturas vertebrales distintas, un dato que conviene fijar porque se pregunta con frecuencia: el orificio de la vena cava inferior, el más alto de los tres (a nivel de T8), el hiato esofágico (a nivel de T10, junto con los troncos vagales), y el hiato aórtico, el más bajo (a nivel de T12, junto con el conducto torácico y la vena ácigos). Una forma sencilla de recordar el orden y la altura es la mnemotecnia numérica "I-8-10-Eso-12-Aortic" (vena cava en T8, esófago en T10, aorta en T12) o simplemente notar que las estructuras están ordenadas de "más anterior y alta" a "más posterior y baja": la cava, luego el esófago, luego la aorta.'
      ],
      foco:[
        'De arriba (más anterior) a abajo (más posterior): vena cava inferior en T8, esófago (con los vagos) en T10, aorta (con el conducto torácico) en T12. El orden vertical sigue también un orden de anterior a posterior.'
      ]
    },
    {
      t:'Por qué el hiato aórtico no se mueve con la respiración y los otros sí',
      p:[
        'El hiato aórtico está formado por los pilares musculares del diafragma (fibras musculares propias del diafragma que rodean a la aorta), pero técnicamente se sitúa POR DETRÁS del cuerpo muscular contráctil del diafragma, casi a nivel de la columna vertebral -por eso, a diferencia de los otros dos orificios, el hiato aórtico NO se comprime ni se moviliza significativamente con la contracción diafragmática durante la respiración, lo cual tiene sentido fisiológico: sería indeseable que la aorta, un vaso de alto flujo y alta presión, se comprimiera rítmicamente con cada respiración. El hiato esofágico, en cambio, sí está formado por fibras musculares verdaderamente contráctiles del diafragma (principalmente del pilar derecho), que se contraen durante la inspiración y contribuyen, junto con el esfínter esofágico inferior, a prevenir el reflujo gastroesofágico -una función que se pierde parcialmente cuando existe una hernia hiatal, en la que parte del estómago asciende a través de un hiato esofágico anormalmente laxo o ensanchado.'
      ],
      foco:[
        '*Consideración clínica*: el hiato esofágico SÍ es funcionalmente contráctil y contribuye a prevenir el reflujo; el hiato aórtico NO se comprime con la respiración, porque está formado por tejido fibromuscular que no participa activamente en el movimiento respiratorio del diafragma.'
      ]
    },
    {
      t:'Las hernias diafragmáticas congénitas: un defecto de fusión del desarrollo',
      p:[
        'Más allá de la hernia hiatal (adquirida, ya mencionada), existen hernias diafragmáticas congénitas por fallo de fusión completa del diafragma durante el desarrollo embrionario, siendo la más frecuente la hernia de Bochdalek (un defecto posterolateral, con mayor frecuencia del lado izquierdo), a través del cual vísceras abdominales pueden herniarse hacia la cavidad torácica durante la vida fetal, comprimiendo el desarrollo pulmonar de ese lado y produciendo hipoplasia pulmonar, una condición que puede ser incompatible con la vida si es grave y se diagnostica solo al nacer, por dificultad respiratoria severa del recién nacido.'
      ],
      foco:[
        'La hernia diafragmática congénita más frecuente es la de Bochdalek (posterolateral, predominio izquierdo), con riesgo de hipoplasia pulmonar por compresión del desarrollo del pulmón durante la vida fetal.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'grandes-vasos-retroperitoneales': {
  tema:'Grandes vasos retroperitoneales',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:12,
  idea:'La aorta abdominal y la vena cava inferior corren muy cerca una de la otra en el retroperitoneo, y sus ramas viscerales siguen un patrón de origen tan predecible que sirve, en la práctica, como mapa para ubicar cualquier otra estructura retroperitoneal vecina.',
  claves:['aorta abdominal','vena cava inferior','arteria mesentérica','tronco celíaco'],
  sigue:'drenaje-linfatico-visceral',
  secciones:[
    {
      t:'Las tres grandes ramas viscerales anteriores de la aorta abdominal',
      p:[
        'La aorta abdominal, tras atravesar el hiato aórtico, da origen a tres grandes ramas viscerales impares (sin pareja, dirigidas hacia la línea media) que irrigan al tubo digestivo, en un orden vertical que corresponde exactamente a las tres divisiones embrionarias del intestino primitivo ya vistas en Embriología: el tronco celíaco (el más alto, irriga el intestino anterior: esófago abdominal, estómago, duodeno proximal, hígado, bazo, páncreas), la arteria mesentérica superior (irriga el intestino medio: desde el duodeno distal hasta los dos tercios proximales del colon transverso) y la arteria mesentérica inferior (la más baja, irriga el intestino posterior: desde el tercio distal del colon transverso hasta el recto superior). Este orden vertical, que reproduce fielmente la lógica embriológica de la irrigación del intestino primitivo, es una de las formas más eficientes de recordar tanto la anatomía vascular como los territorios de cada arteria.'
      ],
      foco:[
        'Tronco celíaco → mesentérica superior → mesentérica inferior, de arriba a abajo, replicando exactamente el orden de intestino anterior → medio → posterior del desarrollo embrionario -la anatomía adulta y la lógica embriológica coinciden.'
      ]
    },
    {
      t:'Ramas pares laterales: riñones, suprarrenales y gónadas',
      p:[
        'Además de las tres ramas viscerales impares, la aorta abdominal da origen a ramas pares laterales: las arterias renales (a nivel aproximado de L1-L2, irrigando cada riñón), las arterias suprarrenales medias (irrigando cada glándula suprarrenal, junto con ramas de la arteria frénica inferior y de la propia arteria renal, como ya se vio en el tema de retroperitoneo) y las arterias gonadales (testiculares u ováricas, que nacen mucho más arriba de lo que su destino final sugeriría, por su origen embrionario retroperitoneal alto, y descienden un largo trayecto hasta el testículo escrotal o el ovario pélvico). Finalmente, la aorta abdominal termina bifurcándose en las dos arterias ilíacas comunes, aproximadamente a nivel de la cuarta vértebra lumbar, un punto de referencia anatómico usado, entre otras cosas, para localizar el sitio de punción en ciertos procedimientos.'
      ],
      foco:[
        'Las arterias gonadales nacen muy arriba en la aorta (reflejo de su origen embrionario retroperitoneal alto) y descienden un trayecto largo hasta su destino final -un dato que explica por qué su anatomía "no parece corresponder" a la posición final del órgano que irrigan.'
      ]
    },
    {
      t:'La vena cava inferior y su asimetría respecto a la aorta',
      p:[
        'La vena cava inferior corre a la derecha de la aorta abdominal, recibiendo el drenaje venoso de estructuras retroperitoneales y de los miembros inferiores, pero su patrón de tributarias no es simétrico respecto al de las arterias correspondientes: mientras que ambas arterias renales nacen directamente de la aorta a una altura similar, la vena renal izquierda es más larga que la derecha (porque tiene que cruzar por delante de la aorta para alcanzar la vena cava, situada a la derecha), y de forma similar, la vena gonadal derecha drena directamente en la vena cava inferior, mientras que la vena gonadal izquierda drena primero en la vena renal izquierda -la misma asimetría venosa que ya se mencionó para las venas suprarrenales. Esta asimetría izquierda-derecha tan consistente entre distintos sistemas venosos retroperitoneales (suprarrenal, gonadal) tiene una causa anatómica común: la posición de la vena cava a la derecha de la línea media obliga a que las estructuras venosas del lado izquierdo recorran un trayecto más largo para alcanzarla.'
      ],
      foco:[
        '*Consideración clínica*: la vena gonadal (testicular u ovárica) izquierda drena en la vena renal izquierda, con un trayecto más largo y de mayor presión relativa que el lado derecho -una de las explicaciones anatómicas de por qué el varicocele es mucho más frecuente en el lado izquierdo que en el derecho.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
},

'drenaje-linfatico-visceral': {
  tema:'Drenaje linfático visceral',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:12,
  idea:'El sistema linfático visceral abdominal converge, casi todo, hacia un mismo punto de recolección central antes de subir al tórax -entender ese embudo es la clave para predecir por dónde se disemina un cáncer abdominal por vía linfática.',
  claves:['ganglio linfático visceral','cisterna del quilo','conducto torácico','drenaje linfático abdominal'],
  sigue:'ciclo-cardiaco',
  secciones:[
    {
      t:'Los ganglios linfáticos siguen a las arterias, no a las venas',
      p:[
        'Como regla general útil, el drenaje linfático de las vísceras abdominales sigue el trayecto de las arterias que las irrigan, no el de las venas que las drenan: los ganglios linfáticos se agrupan alrededor del origen de cada arteria visceral principal (celíacos alrededor del tronco celíaco, mesentéricos superiores alrededor de esa arteria, mesentéricos inferiores alrededor de la suya), de modo que el drenaje linfático de un órgano determinado termina convergiendo hacia el grupo ganglionar asociado a la arteria que lo irriga, con independencia de la vena por la que drene su sangre. Esta regla explica, entre otras cosas, por qué el estudio de extensión de un cáncer digestivo se organiza clínicamente por "estaciones ganglionares" nombradas según la arteria vecina (ganglios celíacos, mesentéricos), no según venas.'
      ],
      foco:[
        'Regla práctica: el drenaje linfático visceral abdominal sigue a las ARTERIAS, no a las venas. Los grupos ganglionares llevan el nombre de la arteria vecina (celíacos, mesentéricos superiores, mesentéricos inferiores).'
      ]
    },
    {
      t:'La cisterna del quilo: el punto de convergencia antes de subir al tórax',
      p:[
        'Toda la linfa del abdomen y de los miembros inferiores converge, antes de entrar al tórax, en un reservorio dilatado situado por delante de las primeras vértebras lumbares, llamado cisterna del quilo (o cisterna de Pecquet). Recibe los troncos linfáticos lumbares (de los miembros inferiores y la pelvis) y el tronco intestinal (de las vísceras abdominales, cargado de linfa rica en grasas absorbidas del intestino delgado -de ahí el nombre "quilo", de aspecto lechoso). Desde la cisterna del quilo nace el conducto torácico, que atraviesa el hiato aórtico junto con la aorta (como se vio en el tema del diafragma) para ascender por el tórax y, finalmente, desembocar en la unión yugulo-subclavia izquierda, ya descrita en el tema de grandes vasos torácicos.'
      ],
      foco:[
        'La cisterna del quilo es el punto de convergencia de TODA la linfa del abdomen y los miembros inferiores, justo antes de que el conducto torácico la lleve, atravesando el hiato aórtico, hacia el tórax y finalmente hacia la circulación venosa.'
      ]
    },
    {
      t:'Relevancia clínica: por qué la vía linfática predice la diseminación tumoral',
      p:[
        'Conocer el patrón de drenaje linfático de cada víscera abdominal permite predecir, con bastante precisión, hacia dónde se disemina primero un cáncer originado en ella por vía linfática -un dato que orienta tanto la estadificación (determinar cuán avanzada está la enfermedad) como la planeación quirúrgica (qué grupos ganglionares deben resecarse junto con el tumor primario, la llamada linfadenectomía). Por ejemplo, un cáncer gástrico disemina característicamente primero hacia los ganglios celíacos (siguiendo el tronco celíaco, que irriga al estómago), mientras que un cáncer de colon derecho disemina primero hacia los ganglios mesentéricos superiores. Esta correspondencia entre irrigación arterial y drenaje linfático es, en la práctica oncológica, tan predecible que rara vez se necesita adivinar: basta con conocer qué arteria irriga al órgano de origen del tumor.'
      ],
      foco:[
        '*Consideración clínica*: para predecir hacia dónde se disemina un tumor abdominal por vía linfática, basta con identificar qué arteria irriga al órgano de origen -el drenaje linfático la sigue de forma consistente.'
      ]
    }
  ],
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.'
}

});
