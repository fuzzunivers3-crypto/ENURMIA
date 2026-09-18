/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 9)
   AMPLIACION de Anatomía I: los 20 temas de la materia reescritos
   mucho más extensos. Mismas claves de objeto que los apuntes
   originales (window.APUNTES usa Object.assign, así que esto
   SOBRESCRIBE el contenido corto anterior con uno más largo, sin
   romper el enlace "Leer el tema" porque el campo `tema` no
   cambió). Se preservó el campo `sigue` de cada entrada tal cual
   estaba, para no tocar el orden de lectura ya establecido.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'terminos-anatomicos': {
  tema:'Generalidades y términos de posición',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:14,
  idea:'Antes de aprender un solo músculo hay que aprender el idioma con el que se describen todos. Sin este vocabulario, cualquier examen físico o cualquier reporte de imagen es incomprensible, aunque tú sepas perfectamente de qué están hablando.',
  claves:['plano sagital','plano frontal','proximal','distal','decúbito','posición anatómica'],
  sigue:'osteologia-general',
  secciones:[
    {
      t:'Un punto de partida fijo: la posición anatómica',
      p:[
        'Toda descripción anatómica parte de un mismo punto de referencia, la *posición anatómica*: de pie, mirando al frente, los brazos a los lados con las palmas hacia adelante, los pies juntos apuntando hacia adelante. No importa cómo esté realmente el paciente delante de ti —acostado, con el brazo rotado, boca abajo—: cuando describes algo como "medial" o "anterior", lo describes SIEMPRE como si estuviera en esa posición. Es la misma razón por la que un mapa siempre pone el norte arriba, aunque tú estés mirando hacia el sur: sin una referencia fija, "arriba" no significa nada.',
        'Esto no es un capricho académico. Imagina a dos médicos describiendo el mismo hematoma en un paciente que está acostado boca abajo con el brazo levantado sobre la cabeza: si cada uno usara "arriba" y "adelante" según cómo ve al paciente en ese momento, sus descripciones no coincidirían y el reporte sería inútil para un tercero que lea la historia clínica después. La posición anatómica es el acuerdo que hace que "cara anterior del antebrazo" signifique exactamente lo mismo en cualquier hospital del mundo, la describa quien la describa.'
      ],
      foco:[
        'Memoriza la posición anatómica describiéndola en voz alta cada vez que la uses las primeras semanas: "de pie, mirando al frente, palmas hacia adelante". Se vuelve automático rápido, pero al principio hay que forzarlo.'
      ]
    },
    {
      t:'Los tres planos que cortan el cuerpo',
      p:[
        'De la posición anatómica salen los tres planos de referencia. El *plano sagital* lo divide en una mitad derecha y una izquierda (el que pasa exactamente por el medio del cuerpo se llama sagital medio o mediano; cualquier otro corte paralelo a ese es simplemente "sagital" o "parasagital"). El *plano frontal* o coronal lo divide en una mitad anterior y una posterior. Y el *plano transversal* (u horizontal) lo divide en una mitad superior y una inferior, como una rodaja horizontal.',
        'Estos tres planos no son solo geometría: son literalmente cómo se organizan las imágenes médicas. Una tomografía "de corte axial" es, ni más ni menos, una serie de planos transversales apilados, cada uno mostrando una rodaja horizontal del cuerpo. Una resonancia "de corte sagital" de la columna muestra al paciente de perfil, como si lo hubieran partido de la cabeza a los pies en dos mitades laterales. Y un corte coronal de cráneo muestra la cabeza como si la hubieran partido de oreja a oreja. Cuando aprendas a leer imágenes en cuatrimestres posteriores, este vocabulario ya tiene que estar automatizado.'
      ],
      foco:[
        'Truco para no confundirte entre sagital y frontal: "sagital" viene de "sagita" (flecha en latín), como la flecha que dispararías de adelante hacia atrás, atravesando el cuerpo de frente a espalda —por eso separa derecha de izquierda—. "Frontal" tiene que ver con la frente, la cara: ese plano queda paralelo a tu cara, separando adelante de atrás.'
      ]
    },
    {
      t:'Los pares de términos que describen cualquier estructura',
      p:[
        'El resto del vocabulario son pares de opuestos, y conviene aprenderlos en pareja porque uno explica al otro. *Proximal* y *distal* miden la distancia respecto al tronco a lo largo de un miembro: el codo es proximal a la muñeca, la muñeca es distal al codo. *Medial* y *lateral* miden la distancia respecto al plano sagital medio: el dedo meñique es medial al pulgar en posición anatómica (porque el pulgar, con la palma hacia adelante, queda del lado de afuera). *Superior* e *inferior* (o craneal y caudal) miden altura respecto al eje vertical del cuerpo. *Anterior* (o ventral) y *posterior* (o dorsal) miden profundidad hacia adelante o hacia atrás. Y *superficial* y *profundo* miden distancia respecto a la piel, sin importar en qué dirección.',
        'Ejemplo trabajado: "una herida superficial en la cara medial del tercio distal de la pierna" describe, sin necesitar ninguna foto, una herida cerca de la piel, del lado interno de la pierna (el lado de la tibia, no del peroné), en el tercio más cercano al tobillo. Esa sola frase le dice a cualquier colega exactamente dónde mirar, sin ambigüedad, aunque nunca haya visto al paciente.'
      ],
      foco:[
        'Un error frecuente de quien empieza: usar "arriba" y "abajo" quitándole nada de precisión al lenguaje coloquial. En anatomía, "arriba" siempre significa superior/craneal, y "abajo" siempre inferior/caudal, tanto si el paciente está de pie como acostado. La posición del paciente en la camilla NUNCA cambia los términos.'
      ]
    },
    {
      t:'Las posiciones del paciente: decúbitos',
      p:[
        '*Decúbito supino* es acostado boca arriba, con la cara mirando al techo. *Decúbito prono* es boca abajo, con la cara mirando hacia la camilla. *Decúbito lateral* (derecho o izquierdo, según el lado sobre el que se apoya) es de costado. Estos términos aparecen en cada nota de ingreso, cada orden de examen de imagen y cada indicación de procedimiento: "colocar al paciente en decúbito lateral izquierdo" es una instrucción concreta y sin ambigüedad para el personal de enfermería.',
        '*Consideración clínica*: la posición del paciente no es solo cómoda o incómoda, cambia lo que se puede examinar y lo que se puede complicar. El decúbito supino prolongado en pacientes con movilidad reducida favorece la formación de úlceras por presión en el sacro y los talones; el decúbito lateral se usa para exploraciones rectales o para prevenir la broncoaspiración en pacientes con alteración de conciencia (posición de seguridad). Saber nombrar la posición con precisión es, desde el primer año, parte de comunicarse bien en un entorno clínico.'
      ],
      foco:[
        'Ante cualquier duda entre dos términos de posición, vuelve siempre a la posición anatómica como ancla: pregúntate "¿dónde estaría esa estructura si el paciente estuviera de pie, mirando al frente, con las palmas hacia adelante?" y el término correcto sale solo.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 1. Rouvière, Anatomía Humana Descriptiva, Topográfica y Funcional.'
},

'osteologia-general': {
  tema:'Osteología general',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:15,
  idea:'Todos los huesos largos comparten la misma arquitectura básica, y entenderla de una vez te ahorra tener que memorizarla por separado para cada hueso del cuerpo. Es, además, la base para entender por qué las fracturas se comportan distinto según en qué parte del hueso ocurren.',
  claves:['hueso largo','diáfisis','epífisis','metáfisis','periostio','osificación'],
  sigue:'columna-vertebral',
  secciones:[
    {
      t:'Las partes de un hueso largo',
      p:[
        'Un hueso largo típico —el fémur, el húmero, la tibia— se divide en tres regiones. La *diáfisis* es el cuerpo cilíndrico central, formado casi todo por hueso compacto (cortical) denso, organizado alrededor de un canal medular que contiene médula ósea. Las *epífisis* son los dos extremos, ensanchados, cubiertos por cartílago articular donde el hueso forma parte de una articulación, y formados por dentro sobre todo por hueso esponjoso (trabecular). Entre diáfisis y epífisis está la *metáfisis*, la zona de transición.',
        'Esta arquitectura no es decorativa: la diáfisis compacta soporta bien las fuerzas de flexión y torsión a lo largo del eje del hueso, mientras que las epífisis esponjosas, con su red de trabéculas orientadas según las líneas de fuerza, absorben y distribuyen mejor la carga que llega desde la articulación. Es el mismo principio de ingeniería que usar una viga sólida para el tramo largo de un puente y una estructura reticulada donde se concentra la carga en los apoyos.'
      ],
      foco:[
        'Regla rápida para un examen de imagen: si una lesión está centrada en la diáfisis, piensa primero en hueso compacto (fracturas por torsión, algunos tumores primarios como el sarcoma de Ewing); si está centrada en la epífisis o metáfisis, piensa en hueso esponjoso (osteomielitis en niños, muchos tumores óseos benignos).'
      ]
    },
    {
      t:'La metáfisis y la placa de crecimiento',
      p:[
        'La metáfisis merece atención aparte porque, mientras el esqueleto todavía está creciendo, contiene la *placa de crecimiento* o fisis: una capa de cartílago hialino en constante proliferación, responsable de que el hueso se alargue durante la infancia y la adolescencia. Las células de esta placa se multiplican del lado de la epífisis y se van osificando progresivamente del lado de la diáfisis, empujando el hueso a crecer en longitud sin perder su forma general.',
        'Cuando termina la pubertad, bajo la influencia de las hormonas sexuales, la fisis se osifica por completo y desaparece como estructura activa, dejando solo una línea epifisaria visible en radiografías de adultos jóvenes, que con los años se hace indistinguible del resto del hueso. Por eso la talla final de una persona queda fijada una vez que todas sus placas de crecimiento se han cerrado, y no antes.'
      ],
      foco:[
        '*Consideración clínica*: una fractura que atraviesa la placa de crecimiento en un niño (fractura fisaria) puede alterar el crecimiento posterior del hueso si daña las células germinales de la fisis, incluso si la fractura en sí consolida bien. Por eso estas fracturas se clasifican y vigilan de forma distinta a las del adulto (clasificación de Salter-Harris, que verás con más detalle en pediatría/traumatología).'
      ]
    },
    {
      t:'El periostio: la membrana que envuelve el hueso',
      p:[
        'El *periostio* es una membrana fibrosa densa que recubre toda la superficie externa del hueso, excepto donde hay cartílago articular. Tiene dos capas: una externa, fibrosa, resistente, que le da protección mecánica, y una interna, más celular, que contiene osteoblastos capaces de formar hueso nuevo. Es rico en terminaciones nerviosas —por eso un golpe directo sobre un hueso, donde el periostio queda expuesto o comprimido, duele mucho más que un golpe sobre tejido blando— y en vasos sanguíneos que penetran hacia el interior del hueso.',
        'El periostio permite el crecimiento en GROSOR (crecimiento apositivo) durante toda la vida, no solo en la infancia, a diferencia de la placa de crecimiento que solo permite crecimiento en LONGITUD y se cierra al final de la pubertad. Es también la capa que se activa primero cuando un hueso se fractura, formando el callo óseo inicial que empieza a puentear los fragmentos.'
      ],
      foco:[
        'Distingue con claridad: crecimiento en longitud = placa de crecimiento (metáfisis, se cierra en la pubertad). Crecimiento en grosor y reparación de fracturas = periostio (activo toda la vida).'
      ]
    },
    {
      t:'Osificación: cómo se forma el hueso',
      p:[
        'Existen dos mecanismos de osificación. La *osificación intramembranosa* forma hueso directamente a partir de tejido conectivo mesenquimal, sin pasar por un estadio de cartílago: así se forman los huesos planos del cráneo, la mandíbula y la clavícula. La *osificación endocondral* pasa primero por un molde de cartílago hialino que después es reemplazado progresivamente por hueso: así se forman prácticamente todos los huesos largos de las extremidades, y es este proceso el que continúa activo en la metáfisis mientras existe la placa de crecimiento.',
        'Saber cuál mecanismo formó cada hueso no es un dato aislado: explica, por ejemplo, por qué la clavícula (formada por osificación intramembranosa, con una porción intermedia por osificación endocondral) tiene un patrón de consolidación de fracturas distinto al de un hueso largo típico de la extremidad, y por qué ciertas enfermedades del desarrollo óseo afectan de forma distinta a huesos formados por uno u otro mecanismo.'
      ],
      foco:[
        'Mnemotecnia simple: "los huesos PLANOS se forman directo, sin pasar por cartílago" (intramembranosa); "los huesos LARGOS pasan primero por un molde de cartílago" (endocondral).'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. de introducción al sistema esquelético. Junqueira, Histología básica, cap. de tejido óseo.'
},

'columna-vertebral': {
  tema:'Columna vertebral',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:16,
  idea:'La columna vertebral no es una torre rígida de huesos apilados: es una estructura articulada y curva, diseñada precisamente para absorber carga sin romperse. Entender por qué tiene esas curvas, y qué pasa en cada disco intervertebral, es la base de casi toda la traumatología y la neurología de columna que viene después.',
  claves:['vértebra','cervical','lumbar','apófisis','disco intervertebral','curvatura'],
  sigue:'osteologia-miembro-superior',
  secciones:[
    {
      t:'Las regiones de la columna y el conteo de vértebras',
      p:[
        'La columna vertebral tiene, en el adulto, 33 vértebras repartidas en cinco regiones: 7 cervicales (C1-C7), 12 torácicas (T1-T12), 5 lumbares (L1-L5), 5 sacras (fusionadas en un solo hueso, el sacro) y 4 coccígeas (fusionadas, con frecuencia, en el cóccix). Una forma fácil de recordar el número de cada región: "desayuno a las 7, almuerzo a las 12, cena a las 5" (cervical-torácica-lumbar), aunque cualquier truco mnemotécnico sirve mientras el número quede fijo.',
        'Cada vértebra típica comparte una estructura común: un cuerpo vertebral anterior (que soporta peso, y por eso es más grande en las vértebras lumbares, que cargan más), un arco vertebral posterior que rodea el agujero vertebral (por donde pasa la médula espinal), y varias apófisis que se proyectan desde el arco: una apófisis espinosa hacia atrás (palpable en la línea media de la espalda), dos apófisis transversas hacia los lados, y apófisis articulares que conectan una vértebra con la siguiente.'
      ],
      foco:[
        'El conjunto de todos los agujeros vertebrales apilados forma el conducto vertebral, el túnel óseo que protege a la médula espinal a todo lo largo de la columna.'
      ]
    },
    {
      t:'Las curvaturas: primarias y secundarias',
      p:[
        'La columna no es recta al ver de perfil: tiene cuatro curvaturas alternadas. Las curvaturas torácica y sacra son *primarias*: están presentes desde la vida fetal, cuando el embrión completo tiene forma de "C", y mantienen la concavidad anterior (convexidad posterior, es decir, cifosis) que ya existía en el útero. Las curvaturas cervical y lumbar son *secundarias* o compensatorias: se desarrollan después del nacimiento —la cervical cuando el bebé empieza a sostener la cabeza erguida, la lumbar cuando empieza a pararse y caminar— y tienen convexidad anterior (lordosis).',
        'Estas curvaturas alternadas no son un defecto de diseño: son justamente lo que permite que la columna soporte cargas axiales (el peso del propio cuerpo, o una mochila, o levantar algo) de forma mucho más eficiente que si fuera perfectamente recta, funcionando de manera parecida a un resorte que se comprime y recupera con cada paso, absorbiendo impacto en vez de transmitirlo directo a la cabeza.'
      ],
      foco:[
        'Exageraciones patológicas de estas curvas tienen nombre propio: cifosis excesiva (torácica), lordosis excesiva (lumbar), y escoliosis, que no es una curvatura normal exagerada sino una curvatura LATERAL anómala que no existe en la columna sana.'
      ]
    },
    {
      t:'El disco intervertebral',
      p:[
        'Entre los cuerpos de dos vértebras adyacentes (excepto entre C1 y C2) hay un disco intervertebral, formado por un anillo fibroso externo (annulus fibrosus, de fibrocartílago resistente y dispuesto en capas concéntricas) y un núcleo pulposo interno, gelatinoso, rico en agua, que actúa como amortiguador hidráulico ante la carga axial. Los discos representan cerca de una cuarta parte de la altura total de la columna vertebral, y son la razón por la que una persona mide unos milímetros menos al final del día que al levantarse: la carga acumulada durante el día exprime algo de agua fuera del núcleo pulposo, que se recupera con el reposo nocturno.',
        '*Consideración clínica*: con la edad, o por sobrecarga repetida, el anillo fibroso puede debilitarse y el núcleo pulposo puede herniarse a través de él, comprimiendo estructuras vecinas como una raíz nerviosa que sale por el agujero intervertebral correspondiente. Esto es la hernia de disco, causa frecuente de dolor irradiado (ciática, si ocurre en la región lumbar baja, comprimiendo raíces que forman el nervio ciático). La región lumbar baja (L4-L5, L5-S1) es el sitio más frecuente por ser el que más carga soporta.'
      ],
      foco:[
        'El núcleo pulposo actúa como amortiguador hidráulico: al comprimirse, distribuye la presión en todas direcciones dentro del anillo fibroso, en vez de transmitirla directamente de una vértebra a la siguiente.'
      ]
    },
    {
      t:'Vértebras atípicas: atlas y axis',
      p:[
        'Las dos primeras vértebras cervicales rompen el patrón típico. El *atlas* (C1) no tiene cuerpo vertebral: es un anillo óseo formado por un arco anterior y uno posterior. Se articula por arriba con los cóndilos del hueso occipital (articulación atlantooccipital, que permite el movimiento de flexoextensión de la cabeza, como decir "sí"). El *axis* (C2) sí tiene cuerpo vertebral, del cual se proyecta hacia arriba un pivote óseo llamado apófisis odontoides (o diente del axis), que encaja dentro del anillo del atlas. La articulación entre atlas y axis (atlantoaxial) permite el movimiento de rotación de la cabeza, como decir "no".',
        'C7, por su parte, se llama la "vértebra prominente" porque su apófisis espinosa es notablemente más larga que la de las demás cervicales, lo que la hace fácilmente palpable como un relieve óseo en la base de la nuca, y se usa clínicamente como punto de partida para contar niveles vertebrales durante la exploración física.'
      ],
      foco:[
        'Atlas sostiene la cabeza (como el titán mitológico sosteniendo el mundo, de donde toma el nombre); axis provee el eje sobre el que la cabeza gira.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. de espalda.'
},

'torax-oseo': {
  tema:'Tórax óseo y pared torácica',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:14,
  idea:'La caja torácica tiene que resolver un problema aparentemente contradictorio: proteger el corazón y los pulmones con una estructura rígida, y a la vez moverse constantemente para permitir la respiración. Cómo logra las dos cosas a la vez es la clave de todo este tema.',
  claves:['costilla','esternón','manubrio','espacio intercostal','paquete intercostal'],
  sigue:'columna-vertebral',
  secciones:[
    {
      t:'El esternón: tres piezas',
      p:[
        'El esternón es un hueso plano, alargado, situado en la línea media de la cara anterior del tórax, formado por tres partes: el *manubrio* (la porción superior, más ancha, donde se articulan la clavícula y el primer par de costillas), el *cuerpo* (la porción media, más larga, donde se articulan la mayoría de las costillas restantes) y el *apéndice xifoides* (la punta inferior, cartilaginosa en el joven y progresivamente osificada en el adulto).',
        'La unión entre manubrio y cuerpo forma un ángulo palpable llamado ángulo esternal o ángulo de Louis, que es uno de los puntos de referencia más útiles de toda la exploración torácica: marca el nivel donde se articula la segunda costilla, lo que permite contar espacios intercostales con precisión, y también coincide aproximadamente con el nivel donde la tráquea se bifurca en los dos bronquios principales y donde el cayado aórtico comienza a descender.'
      ],
      foco:[
        'El ángulo esternal (de Louis) es EL punto de referencia para contar costillas y espacios intercostales en la exploración física: se palpa, se ubica la segunda costilla justo ahí, y a partir de esa se cuenta hacia abajo.'
      ]
    },
    {
      t:'Clasificación de las costillas',
      p:[
        'Las 12 costillas se clasifican según su relación con el esternón. Las *verdaderas* (1ª a 7ª) tienen su propio cartílago costal que se articula directamente con el esternón. Las *falsas* (8ª a 10ª) tienen cartílago costal, pero este se une al cartílago de la costilla inmediatamente superior en vez de llegar directo al esternón, formando en conjunto el margen costal (el borde palpable que delimita la parte inferior de la caja torácica). Las *flotantes* (11ª y 12ª) no tienen ninguna conexión anterior, ni directa ni indirecta: terminan libres, insertas solo en la musculatura de la pared abdominal posterolateral.',
        'Cada costilla típica tiene una cabeza (que se articula con el cuerpo vertebral), un cuello, un tubérculo (que se articula con la apófisis transversa de la vértebra correspondiente) y un cuerpo largo y curvo que se proyecta hacia adelante y ligeramente hacia abajo, terminando en su propio cartílago costal.'
      ],
      foco:[
        'Las costillas 11ª y 12ª son más cortas y no tienen tubérculo bien definido, otra pista para identificarlas si te dan un hueso suelto para reconocer.'
      ]
    },
    {
      t:'El espacio intercostal y su paquete vasculonervioso',
      p:[
        'Entre cada par de costillas adyacentes hay un espacio intercostal, ocupado por tres capas de músculos intercostales (externo, interno e íntimo) que participan en la respiración, y por el paquete vasculonervioso intercostal: una vena, una arteria y un nervio que, de arriba a abajo, se recuerda con el acrónimo "VAN" (Vena-Arteria-Nervio). Este paquete discurre protegido en el surco costal, en la cara interna del borde inferior de cada costilla.',
        '*Consideración clínica*: esta disposición anatómica es la base de la técnica correcta para procedimientos torácicos como la toracocentesis (punción para drenar líquido pleural) o la colocación de un tubo torácico: la aguja o el instrumento se introduce siempre justo por encima del borde superior de la costilla inferior del espacio elegido, precisamente para evitar el paquete vasculonervioso, que va pegado al borde inferior de la costilla de arriba.'
      ],
      foco:[
        '"VAN de arriba abajo, pegado al borde de abajo" es la forma más rápida de recordar dónde está el paquete vasculonervioso intercostal y por qué se pincha "por encima del borde de la costilla de abajo".'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. de tórax.'
},

'osteologia-miembro-superior': {
  tema:'Miembro superior: huesos',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:16,
  idea:'Cada hueso del miembro superior tiene "puntos débiles" muy concretos, casi siempre relacionados con un nervio o vaso que pasa pegado a él. Aprender el hueso junto con su punto débil es lo que después te permite predecir, ante una fractura, qué estructura nerviosa puede estar comprometida.',
  claves:['clavícula','escápula','húmero','radio','cúbito','carpo','cuello quirúrgico'],
  sigue:'plexo-braquial',
  secciones:[
    {
      t:'La cintura escapular: clavícula y escápula',
      p:[
        'La *clavícula* es el único puente óseo entre el miembro superior y el esqueleto axial: se articula medialmente con el manubrio del esternón y lateralmente con el acromion de la escápula. Tiene forma de "S" itálica, convexa hacia adelante en su tercio medial y cóncava hacia adelante en su tercio lateral. El tercio medio, donde cambia la curvatura, es además el punto más delgado del hueso, y por esa combinación de poco grosor y cambio de curvatura es el sitio más frecuente de fractura clavicular tras una caída sobre el hombro o la mano extendida.',
        'La *escápula* es un hueso plano y triangular que descansa sobre la parrilla costal posterior, sin articularse directamente con ella (queda suspendida por músculos). Tiene tres bordes (superior, medial y lateral) y tres ángulos, además de dos proyecciones óseas importantes: el acromion, que forma el techo de la articulación del hombro, y la apófisis coracoides, que sirve de inserción a varios músculos y ligamentos.'
      ],
      foco:[
        'La escápula "flota" sobre el tórax sostenida solo por músculos (trapecio, romboides, serrato anterior, entre otros): no tiene ninguna articulación con las costillas. Esa movilidad es lo que le da al hombro su enorme rango de movimiento.'
      ]
    },
    {
      t:'El húmero: diáfisis y sus dos cuellos',
      p:[
        'El húmero es el hueso del brazo. Su extremo proximal tiene una cabeza redondeada que se articula con la cavidad glenoidea de la escápula, dos tuberosidades (mayor y menor) que sirven de inserción a los músculos del manguito rotador, y, justo debajo de ellas, el *cuello quirúrgico*, llamado así porque es un punto frecuente de fractura clínica (a diferencia del cuello anatómico, que casi nunca se fractura). El nervio axilar y la arteria circunfleja humeral posterior rodean el húmero muy pegados a este cuello quirúrgico, por lo que una fractura ahí puede lesionarlos.',
        'La diáfisis humeral tiene en su cara posterior un surco en espiral, el canal (o surco) de torsión, por donde discurre el nervio radial casi en contacto directo con el hueso. Una fractura de la diáfisis humeral en su tercio medio puede lesionar este nervio, produciendo el cuadro clásico de "mano péndula": incapacidad para extender la muñeca y los dedos, con flexión de codo y sensibilidad palmar conservadas.'
      ],
      foco:[
        'Dos "puntos débiles" nerviosos del húmero para memorizar juntos: cuello quirúrgico → nervio axilar (arriba). Diáfisis/canal de torsión → nervio radial (medio).'
      ]
    },
    {
      t:'Radio y cúbito: el antebrazo',
      p:[
        'El antebrazo tiene dos huesos: el *radio*, lateral (del lado del pulgar) y el *cúbito* (o ulna), medial (del lado del meñique). Esta disposición en dos huesos paralelos, unidos por una membrana interósea, es precisamente lo que permite los movimientos de pronación y supinación: el radio gira alrededor del cúbito, que permanece relativamente fijo, cambiando la orientación de la palma de la mano sin necesidad de mover el codo.',
        'El cúbito tiene en su extremo proximal la apófisis olécranon, la prominencia ósea que se palpa como "la punta del codo", que se articula con la tróclea del húmero y forma la mayor parte de la articulación del codo. El radio, en cambio, tiene su porción más ancha en el extremo DISTAL (donde forma la mayor parte de la articulación de la muñeca), siendo su extremo proximal (la cabeza radial) relativamente pequeño y redondeado, lo que le permite rotar libremente durante la pronosupinación.'
      ],
      foco:[
        'Truco para no confundirlos: el cúbito es más ancho ARRIBA (codo, olécranon) y el radio es más ancho ABAJO (muñeca). Son "opuestos" en dónde tienen su porción más gruesa.'
      ]
    },
    {
      t:'El carpo: ocho huesos en dos filas',
      p:[
        'El carpo (muñeca) está formado por ocho huesos pequeños, dispuestos en dos filas de cuatro. La fila proximal, de lateral a medial, es: escafoides, semilunar, piramidal y pisiforme. La fila distal, también de lateral a medial: trapecio, trapezoide, grande (capitato) y ganchoso. Una mnemotecnia muy usada en español para memorizar el orden es: "Se Liga El Puño, Con Todos Golpes Gana" o variantes similares por facultad; lo importante no es el mnemónico exacto sino fijar el orden lateral-a-medial de cada fila.',
        'El escafoides es, con diferencia, el hueso del carpo que más se fractura, típicamente tras una caída con la mano extendida. Su irrigación es predominantemente retrógrada (entra por su porción distal), lo que lo hace propenso a necrosis avascular si una fractura, sobre todo en su tercio proximal, interrumpe ese riego —por eso, ante dolor persistente en la "tabaquera anatómica" tras una caída, se inmoviliza como fractura de escafoides aunque la radiografía inicial parezca normal.'
      ],
      foco:[
        '*Consideración clínica*: nunca descartes una fractura de escafoides solo porque la primera radiografía sale limpia. Muchas fracturas de escafoides no se ven hasta días después, cuando la reabsorción ósea en el foco de fractura hace visible la línea. Ante la sospecha clínica, se inmoviliza y se repite la imagen.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. del miembro superior.'
},

'musculos-miembro-superior': {
  tema:'Miembro superior: músculos y movimientos',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:15,
  idea:'No se trata de memorizar una lista de músculos sueltos, sino de entender los grupos funcionales: qué músculos trabajan juntos para un mismo movimiento, y cuál de ellos es el que de verdad importa cuando algo falla clínicamente.',
  claves:['deltoides','manguito rotador','bíceps','supinador','pronador'],
  sigue:'miembro-inferior-huesos',
  secciones:[
    {
      t:'El deltoides: el motor principal de la abducción',
      p:[
        'El deltoides cubre el hombro como una capa triangular, con tres porciones (anterior, media y posterior) que se originan en la clavícula, el acromion y la espina de la escápula respectivamente, y convergen en una inserción común en el húmero. Su acción principal es la abducción del hombro, es decir, separar el brazo del cuerpo hacia el lado, pero necesita ayuda para iniciar ese movimiento.',
        'Aquí está el punto clave que muchos estudiantes se saltan: el deltoides es poderoso para CONTINUAR la abducción una vez que el brazo ya está separado del cuerpo unos 15°, pero es el supraespinoso (uno de los músculos del manguito rotador) el que INICIA esos primeros grados. Es un trabajo en relevos: supraespinoso arranca, deltoides toma el control y lleva el movimiento hasta la horizontal.'
      ],
      foco:[
        'Si un paciente no puede iniciar la abducción del hombro pero sí puede continuarla una vez que alguien se la ayuda a empezar, sospecha lesión del supraespinoso, no del deltoides.'
      ]
    },
    {
      t:'El manguito rotador: estabilidad antes que fuerza',
      p:[
        'El manguito rotador está formado por cuatro músculos —supraespinoso, infraespinoso, redondo menor y subescapular (regla mnemotécnica en inglés: "SItS")— que se originan en la escápula y se insertan alrededor de la cabeza humeral, envolviéndola como un manguito. Su función principal no es generar grandes movimientos, sino mantener la cabeza humeral centrada y estable dentro de la cavidad glenoidea mientras otros músculos más grandes (como el deltoides) generan el movimiento.',
        'Esto explica por qué las lesiones del manguito rotador son tan frecuentes e incapacitantes en personas que hacen movimientos repetitivos por encima de la cabeza (nadadores, pintores, lanzadores): el manguito trabaja constantemente para estabilizar una articulación que, por diseño, prioriza el rango de movimiento sobre el encaje óseo. El supraespinoso, en particular, es el más vulnerable porque pasa por un espacio estrecho bajo el acromion (el espacio subacromial), donde puede pinzarse con el movimiento repetido (síndrome de pinzamiento subacromial).'
      ],
      foco:[
        'Los cuatro del manguito, de nuevo: SUPRAespinoso (inicia abducción), INFRAespinoso y redondo MENOR (rotación externa), SUBescapular (rotación interna).'
      ]
    },
    {
      t:'Bíceps braquial: flexor y supinador',
      p:[
        'El bíceps braquial tiene dos cabezas (larga y corta) que se originan en la escápula y convergen en un vientre muscular único que se inserta, vía su tendón distal, en la tuberosidad del radio. Es flexor del codo, pero su acción menos intuitiva —y muy preguntada en examen— es la de supinador potente del antebrazo: cuando el codo está flexionado a 90°, el ángulo de tracción del tendón sobre la tuberosidad radial es el más favorable, por eso la fuerza de supinación es mayor con el codo doblado que con el codo extendido (el motivo práctico de que apretar un tornillo con destornillador sea más fuerte con el codo flexionado).',
        'El tríceps braquial, en el compartimento posterior del brazo, es su antagonista funcional directo: extensor del codo. Entre bíceps (flexor/supinador) y tríceps (extensor) se resume buena parte de la mecánica básica del codo.'
      ],
      foco:[
        'El bíceps es supinador ANTES que flexor en importancia clínica de examen: si te preguntan "qué hace el bíceps además de flexionar el codo", la respuesta que buscan casi siempre es supinar el antebrazo.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. del miembro superior.'
},

'plexo-braquial': {
  tema:'Plexo braquial y nervios del brazo',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:18,
  idea:'El plexo braquial es, para muchos estudiantes, el tema que más miedo da de toda Anatomía I, porque parece un mapa de nombres sin lógica. En realidad tiene una organización jerárquica muy ordenada, y si entiendes esa jerarquía puedes deducir qué territorio afecta la lesión de cada nervio en vez de memorizarlo suelto.',
  claves:['plexo braquial','nervio radial','nervio mediano','nervio cubital','nervio axilar','mano péndula'],
  sigue:'osteologia-miembro-superior',
  secciones:[
    {
      t:'La organización jerárquica del plexo',
      p:[
        'El plexo braquial se forma con los ramos anteriores de C5 a T1, y se organiza en cinco niveles sucesivos, de proximal a distal: *raíces* (C5-T1), que se agrupan en tres *troncos* (superior, medio e inferior), cada tronco se divide en una división anterior y una posterior, las divisiones se reagrupan en tres *fascículos* (lateral, medial y posterior, nombrados según su posición respecto a la arteria axilar), y finalmente los fascículos dan origen a los nervios terminales que ya conoces por su nombre: el mediano, el cubital, el radial, el axilar y el musculocutáneo, entre otros.',
        'Esta organización no es un simple ejercicio de memoria: como cada raíz aporta fibras a varios nervios terminales, y cada nervio terminal recibe fibras de varias raíces, una lesión a distinto nivel del plexo produce patrones de déficit completamente distintos. Una lesión de una raíz aislada (por ejemplo, C5-C6, como en la parálisis de Erb) da un patrón distinto a la lesión de un nervio terminal aislado (como el radial en el canal de torsión), aunque ambos puedan afectar, en parte, movimientos parecidos.'
      ],
      foco:[
        'Orden de memoria del plexo, de proximal a distal: Raíces → Troncos → Divisiones → Fascículos → Nervios terminales. Un mnemónico común en inglés es "Randy Travis Drinks Cold Beer" (Roots-Trunks-Divisions-Cords-Branches).'
      ]
    },
    {
      t:'Nervio radial: el de la cara posterior',
      p:[
        'El nervio radial nace del fascículo posterior y desciende por la cara posterior del brazo, alojado en el canal de torsión del húmero, prácticamente en contacto con el hueso. Inerva toda la musculatura extensora del brazo y antebrazo (tríceps, y todo el compartimento extensor del antebrazo). Su lesión, típicamente por una fractura de la diáfisis humeral, deja los extensores de muñeca y dedos sin función: como los flexores siguen intactos y no tienen nada que los equilibre, la muñeca cae de forma pasiva, el signo llamado "mano péndula".',
        'Otro punto de compresión frecuente del radial es más distal, en el antebrazo, cerca de la cabeza del radio (síndrome del túnel radial o, si afecta solo la rama motora profunda, síndrome del nervio interóseo posterior), aunque este es menos frecuente que la lesión en el canal de torsión.'
      ],
      foco:[
        'Radial = extensión. Su lesión da mano péndula (caída de la muñeca por parálisis de extensores). Asócialo siempre con el canal de torsión del húmero.'
      ]
    },
    {
      t:'Nervio mediano: el del túnel del carpo',
      p:[
        'El nervio mediano nace de los fascículos lateral y medial, desciende por la cara anterior (flexora) del brazo y antebrazo, e inerva la mayor parte de los músculos flexores del antebrazo y de la mano (con excepción de un músculo y medio que quedan a cargo del cubital). Sensitivamente, cubre la piel de la palma correspondiente al pulgar, índice, medio y la mitad radial del anular.',
        'Su punto de compresión más famoso clínicamente es el túnel del carpo, en la muñeca, bajo el retináculo flexor: el síndrome del túnel carpiano, extremadamente frecuente, produce dolor y parestesias en el territorio sensitivo descrito y debilidad para la oposición del pulgar (por afectación de los músculos tenares), a menudo agravado por el uso repetitivo de la muñeca.'
      ],
      foco:[
        'Mediano = territorio "pulgar, índice, medio, mitad del anular" y oposición del pulgar. Su compresión clásica es en el túnel del carpo.'
      ]
    },
    {
      t:'Nervio cubital: el del "hueso de la risa"',
      p:[
        'El nervio cubital nace del fascículo medial, desciende por la cara medial del brazo y pasa por detrás del epicóndilo medial del húmero —el punto exacto donde, al golpearlo, sientes esa descarga eléctrica que llamamos coloquialmente "golpearse el hueso de la risa" (en realidad no es el hueso, es el nervio expuesto en ese punto)—. Inerva la mayoría de los músculos intrínsecos de la mano y la sensibilidad del meñique y la mitad cubital del anular.',
        'Su compresión en el epicóndilo medial (síndrome del túnel cubital) produce debilidad de los músculos interóseos (dificultad para separar y juntar los dedos) y, en casos avanzados, la llamada "mano en garra", por parálisis de los músculos lumbricales que normalmente flexionan las articulaciones metacarpofalángicas y extienden las interfalángicas.'
      ],
      foco:[
        'Cubital = meñique y mitad del anular, músculos intrínsecos de la mano. Su punto vulnerable clásico es el epicóndilo medial del húmero (el "hueso de la risa").'
      ]
    },
    {
      t:'Nervio axilar: el del cuello quirúrgico',
      p:[
        'El nervio axilar nace del fascículo posterior, junto al radial, pero se separa de él para rodear el húmero a nivel del cuello quirúrgico, acompañado de la arteria circunfleja humeral posterior. Inerva el músculo deltoides (y el redondo menor) y da sensibilidad a la piel que cubre la porción lateral del hombro (el "parche" del deltoides).',
        'Su lesión, típica en fracturas del cuello quirúrgico humeral o en luxaciones anteriores del hombro (donde la cabeza humeral desplazada puede estirarlo), produce debilidad para la abducción del hombro (recuerda que el deltoides es el motor principal de ese movimiento a partir de los primeros grados) y pérdida de sensibilidad en el "parche del deltoides", un hallazgo que se explora específicamente al evaluar toda luxación de hombro antes y después de reducirla.'
      ],
      foco:[
        'Axilar = deltoides + parche de piel sobre el hombro. Se lesiona en el cuello quirúrgico del húmero y en luxaciones de hombro. Siempre se explora antes Y después de reducir una luxación de hombro.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. del miembro superior.'
},

'miembro-inferior-huesos': {
  tema:'Miembro inferior: huesos',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:15,
  idea:'El miembro inferior está construido para cargar peso, y eso se nota en cada uno de sus huesos: son más gruesos, más robustos, con menos movilidad articular que sus equivalentes del miembro superior. Entender esa lógica de "diseñado para cargar" ayuda a predecir dónde se concentra el estrés mecánico y, por tanto, dónde se fractura más.',
  claves:['fémur','tibia','peroné','coxal','tarso','cuello femoral'],
  sigue:'miembro-inferior-musculos-nervios',
  secciones:[
    {
      t:'El coxal y el acetábulo',
      p:[
        'El hueso coxal (cadera) es el resultado de la fusión de tres huesos que en la infancia están separados: ilion, isquion y pubis, unidos en el adulto en un solo hueso irregular. Su punto más importante es el acetábulo, una cavidad profunda formada por la confluencia de los tres huesos originales, que aloja la cabeza del fémur y forma la articulación de la cadera.',
        'A diferencia de la cavidad glenoidea del hombro, el acetábulo cubre gran parte de la cabeza femoral, dándole a la cadera una congruencia ósea mucho mayor que la del hombro, y por tanto mucha más estabilidad intrínseca —a costa de tener menos rango de movimiento que el hombro—. Los dos coxales, junto con el sacro, forman la pelvis ósea.'
      ],
      foco:[
        'Recuerda la regla general de todo el capítulo: donde hay más congruencia ósea (cadera) hay más estabilidad y menos movimiento; donde hay menos congruencia ósea (hombro) hay más movimiento y menos estabilidad intrínseca.'
      ]
    },
    {
      t:'El fémur y su cuello vulnerable',
      p:[
        'El fémur es el hueso más largo y fuerte del cuerpo. Su extremo proximal tiene una cabeza redondeada que se articula con el acetábulo, unida al resto del hueso por el cuello femoral, que forma un ángulo (el ángulo cervicodiafisario, normalmente entre 125° y 135°) con la diáfisis. Este cuello es una zona de concentración de estrés mecánico y, especialmente en personas mayores con osteoporosis, un sitio frecuente de fractura tras caídas de baja energía.',
        'La irrigación de la cabeza femoral en el adulto depende sobre todo de arterias retinaculares que ascienden pegadas al cuello dentro de la cápsula articular (la contribución de la arteria del ligamento redondo, importante en el niño, es mínima en el adulto). Por eso una fractura del cuello femoral, sobre todo si el trazo es intracapsular, puede desgarrar esos vasos y dejar la cabeza femoral sin riego, llevando a necrosis avascular —una de las complicaciones más temidas de este tipo de fractura, y una de las razones por las que muchas fracturas de cuello femoral en el adulto mayor se tratan con reemplazo protésico en vez de intentar fijar el hueso original.'
      ],
      foco:[
        '*Consideración clínica*: toda caída de baja energía en un adulto mayor que termina con dolor de cadera e incapacidad para caminar, incluso sin deformidad evidente, obliga a descartar fractura de cuello femoral con imagen, precisamente por el riesgo de necrosis avascular si se retrasa el diagnóstico y el tratamiento.'
      ]
    },
    {
      t:'Tibia y peroné: reparto desigual de la carga',
      p:[
        'La pierna tiene dos huesos: la tibia, medial y gruesa, y el peroné (fíbula), lateral y delgado. A diferencia del antebrazo, donde radio y cúbito comparten funciones de forma más equilibrada, en la pierna el reparto es muy desigual: la tibia se articula con el fémur arriba y con el astrágalo abajo, transmitiendo la gran mayoría del peso corporal. El peroné no se articula con el fémur y aporta muy poca carga; su función principal es servir de inserción muscular y de estabilizador lateral del tobillo.',
        'Esta diferencia explica por qué una fractura aislada de peroné suele permitir seguir soportando algo de peso (aunque con dolor), mientras que una fractura de tibia casi siempre impide la carga completa del miembro.'
      ],
      foco:[
        'Tibia = hueso de carga. Peroné = hueso estabilizador/de inserción, casi sin carga de peso. No los trates como "iguales pero en paralelo": su función es muy distinta.'
      ]
    },
    {
      t:'El tarso: siete huesos del retropié y mediopié',
      p:[
        'El tarso está formado por siete huesos: astrágalo y calcáneo (el retropié), y navicular, cuboides y las tres cuñas (el mediopié). El astrágalo es el único hueso del tarso que se articula directamente con la tibia y el peroné, formando la articulación del tobillo (talocrural); no tiene ninguna inserción muscular directa, una peculiaridad entre los huesos largos. El calcáneo, por debajo del astrágalo, es el hueso más grande del tarso y el que recibe directamente el impacto del talón al caminar, además de servir de inserción al tendón de Aquiles.',
        'Estos dos huesos, junto con la disposición de los demás huesos del tarso y del metatarso, forman los arcos plantares (longitudinal medial, longitudinal lateral y transverso) que le dan al pie su capacidad de absorber impacto y actuar como un resorte durante la marcha.'
      ],
      foco:[
        'El astrágalo transmite el peso de la pierna al pie; el calcáneo lo transmite al suelo y recibe el tendón de Aquiles. Entre los dos sostienen prácticamente toda la carga que llega al pie.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. del miembro inferior.'
},

'miembro-inferior-musculos-nervios': {
  tema:'Miembro inferior: músculos y nervios',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:16,
  idea:'El miembro inferior se organiza en compartimentos musculares con funciones opuestas y muy definidas: el anterior extiende la rodilla, el posterior la flexiona. Saber en qué compartimento vive cada nervio te dice de inmediato qué movimiento se pierde si ese nervio se lesiona.',
  claves:['cuádriceps','isquiotibiales','nervio ciático','nervio femoral','pie caído'],
  sigue:'articulaciones-clasificacion-biomecanica',
  secciones:[
    {
      t:'El cuádriceps femoral: el extensor de rodilla',
      p:[
        'El cuádriceps femoral, en el compartimento anterior del muslo, está formado por cuatro músculos: el recto femoral (el único que también cruza la cadera, ayudando además a flexionarla) y los tres vastos —lateral, medial e intermedio—, que solo cruzan la rodilla. Los cuatro convergen en un tendón común que envuelve la rótula (patela, un hueso sesamoideo incluido dentro del propio tendón) y continúa como tendón o ligamento patelar hasta insertarse en la tuberosidad de la tibia.',
        'Toda esta cadena —cuádriceps, tendón cuadricipital, rótula, tendón patelar, tuberosidad tibial— forma el llamado "aparato extensor" de la rodilla, y una lesión en cualquier eslabón (rotura del tendón cuadricipital, fractura de rótula, rotura del tendón patelar) produce el mismo signo clínico: incapacidad para extender activamente la rodilla, aunque el mecanismo y el punto exacto de la lesión sean distintos.'
      ],
      foco:[
        'El reflejo patelar (el "reflejo de la rodilla" del examen neurológico) evalúa precisamente este arco: golpe en el tendón patelar → estiramiento súbito del cuádriceps → contracción refleja → extensión de la rodilla. Depende de las raíces L2-L4, del nervio femoral.'
      ]
    },
    {
      t:'Los isquiotibiales: el compartimento posterior',
      p:[
        'En el compartimento posterior del muslo están los isquiotibiales: bíceps femoral (lateral), semitendinoso y semimembranoso (mediales). Los tres se originan en la tuberosidad isquiática y cruzan tanto la cadera (donde ayudan a extenderla) como la rodilla (donde son los principales flexores). Son, en cierto sentido, los antagonistas funcionales del cuádriceps: mientras el cuádriceps extiende la rodilla, los isquiotibiales la flexionan.',
        'Este grupo es especialmente propenso a lesiones por distensión (el clásico "tirón" en deportistas) durante movimientos que combinan extensión forzada de cadera con extensión de rodilla, como el sprint, porque el músculo tiene que alargarse y contraerse con fuerza casi al mismo tiempo.'
      ],
      foco:[
        'Cuádriceps (anterior) extiende rodilla. Isquiotibiales (posterior) flexionan rodilla. Son antagonistas directos, y ambos cruzan también la cadera con acciones igualmente opuestas entre sí.'
      ]
    },
    {
      t:'Nervio femoral: el del compartimento anterior',
      p:[
        'El nervio femoral nace del plexo lumbar (L2-L4) y desciende por debajo del ligamento inguinal para inervar el compartimento anterior del muslo, incluido el cuádriceps. Su lesión produce debilidad marcada para extender la rodilla y pérdida del reflejo patelar, además de alteración sensitiva en la cara anterior del muslo y la cara medial de la pierna (a través de su rama terminal, el nervio safeno).',
        'Es relativamente protegido en su trayecto comparado con el ciático, pero puede lesionarse en procedimientos quirúrgicos pélvicos o abdominales bajos, o comprimirse por hematomas retroperitoneales, entre otras causas.'
      ],
      foco:[
        'Femoral = compartimento ANTERIOR = extensión de rodilla + reflejo patelar. Su lesión da debilidad para subir escaleras o levantarse de una silla (movimientos que dependen mucho del cuádriceps).'
      ]
    },
    {
      t:'Nervio ciático: el más grueso del cuerpo',
      p:[
        'El nervio ciático, formado por raíces de L4 a S3, es el nervio más grueso y largo del cuerpo humano. Sale de la pelvis por debajo del músculo piriforme, atraviesa el cuadrante inferointerno del glúteo (por eso las inyecciones intramusculares glúteas se aplican en el cuadrante superoexterno, para evitarlo) y desciende por el compartimento posterior del muslo, inervando a los isquiotibiales, antes de dividirse, generalmente a la altura del hueco poplíteo, en sus dos ramas terminales: el nervio tibial y el nervio peroneo (fibular) común.',
        'Una lesión completa del ciático produce debilidad de todos los isquiotibiales y de toda la musculatura por debajo de la rodilla (inervada por sus ramas), junto con el dolor irradiado característico de la ciática cuando la causa es una compresión radicular (como una hernia discal lumbar baja) más que una lesión del tronco nervioso en sí.'
      ],
      foco:[
        'Ciático = el nervio más grueso del cuerpo. Nace en la pelvis, pasa por el glúteo (cuadrante inferointerno, por eso se inyecta en el superoexterno) y se divide en tibial + peroneo común cerca de la rodilla.'
      ]
    },
    {
      t:'Nervio peroneo común: el del "pie caído"',
      p:[
        'El nervio peroneo (fibular) común, una de las dos ramas terminales del ciático, rodea el cuello del peroné de forma muy superficial y expuesta, justo debajo de la piel —a diferencia de la mayoría de los nervios importantes, que van protegidos en planos profundos—. Esa posición superficial lo hace vulnerable a compresión externa (por un yeso apretado, por permanecer mucho tiempo con las piernas cruzadas, o por compresión directa en pacientes postrados) y a lesión directa en fracturas del cuello del peroné.',
        'Inerva los músculos que dorsiflexionan el tobillo y extienden los dedos del pie. Su lesión produce "pie caído" (foot drop): el paciente no puede levantar la punta del pie durante la marcha, y para evitar que el pie arrastre el suelo compensa levantando exageradamente la rodilla al caminar, un patrón de marcha llamado "marcha en steppage", fácilmente reconocible en la exploración.'
      ],
      foco:[
        '*Consideración clínica*: el peroneo común es el nervio periférico que con más frecuencia se lesiona por compresión externa simple (cruzar las piernas mucho tiempo, un yeso mal acolchado), precisamente por su trayecto tan superficial alrededor del cuello del peroné.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. del miembro inferior.'
},

'articulaciones-clasificacion-biomecanica': {
  tema:'Articulaciones: clasificación y biomecánica',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:14,
  idea:'Toda articulación del cuerpo resuelve la misma tensión de fondo: cuánta movilidad sacrifica a cambio de cuánta estabilidad gana. Clasificarlas correctamente no es un ejercicio de vocabulario, es entender en qué punto de esa balanza está cada una.',
  claves:['sinovial','sínfisis','sinartrosis','cápsula articular','ligamento'],
  sigue:'vascularizacion-miembros',
  secciones:[
    {
      t:'Clasificación funcional: tres grandes grupos',
      p:[
        'Las articulaciones se clasifican, según cuánto movimiento permiten y qué tejido las une, en tres grandes grupos. Las *sinartrosis* son articulaciones fibrosas, prácticamente inmóviles, donde el tejido conectivo fibroso une directamente los huesos sin ningún espacio ni cartílago intermedio: el ejemplo clásico son las suturas del cráneo. Las *anfiartrosis* (donde entran las sínfisis) permiten un movimiento limitado, y los huesos están unidos por un disco de fibrocartílago sin cavidad articular: el ejemplo es la sínfisis del pubis, o el disco intervertebral. Las *diartrosis* (articulaciones sinoviales) son las más móviles: tienen una verdadera cavidad articular llena de líquido sinovial, rodeada por una cápsula, como la rodilla o el hombro.',
        'Esta clasificación funcional tiene una lógica de diseño evidente: donde el cuerpo necesita rigidez y protección (el cráneo protegiendo el encéfalo), usa sinartrosis; donde necesita algo de amortiguación con muy poco movimiento (la columna, la pelvis), usa anfiartrosis/sínfisis; y donde necesita rango de movimiento amplio (extremidades), usa diartrosis sinoviales.'
      ],
      foco:[
        'No memorices los tres grupos como cajas cerradas: piénsalos como un espectro de "nada de movimiento" (sinartrosis) a "mucho movimiento" (diartrosis sinoviales), con las anfiartrosis en el medio.'
      ]
    },
    {
      t:'Anatomía de una articulación sinovial',
      p:[
        'Toda articulación sinovial comparte los mismos componentes básicos: las superficies articulares de los huesos están cubiertas por cartílago articular (hialino, sin vasos ni nervios propios, nutrido por difusión desde el líquido sinovial), rodeadas por una cápsula articular fibrosa que las envuelve y delimita la cavidad articular. Por dentro, la cápsula está revestida por la membrana sinovial, que produce el líquido sinovial: un fluido viscoso que lubrica la articulación y nutre al cartílago.',
        'A esto se suman, según la articulación, estructuras de refuerzo: ligamentos (bandas de hueso a hueso que estabilizan y limitan el rango de movimiento), y en algunas articulaciones, fibrocartílagos intraarticulares como los meniscos de la rodilla, que mejoran la congruencia entre superficies que no encajan perfectamente entre sí.'
      ],
      foco:[
        'Distingue con claridad: ligamento = hueso con hueso, estabiliza y limita movimiento. Tendón = músculo con hueso, transmite la fuerza de la contracción. Son dos estructuras distintas que se confunden con frecuencia.'
      ]
    },
    {
      t:'La balanza entre movilidad y estabilidad',
      p:[
        'Dentro de las articulaciones sinoviales existe todavía otra escala: cuánta estabilidad viene del encaje óseo (congruencia) frente a cuánta viene de las partes blandas (cápsula, ligamentos, músculos). La articulación del hombro es el ejemplo extremo de "poca congruencia ósea, mucha dependencia de partes blandas": la cavidad glenoidea cubre solo una fracción pequeña de la cabeza humeral, así que la estabilidad depende casi por completo del rodete glenoideo, la cápsula, los ligamentos glenohumerales y sobre todo el manguito rotador. Por eso el hombro tiene el mayor rango de movimiento del cuerpo, pero también es la articulación que más se luxa.',
        'La cadera es el ejemplo opuesto: el acetábulo cubre gran parte de la cabeza femoral, dando buena congruencia ósea de entrada, reforzada además por una cápsula gruesa y ligamentos potentes como el iliofemoral. Resultado: mucha más estabilidad, a costa de menos rango de movimiento que el hombro. Entender este balance —y saber en qué extremo está cada articulación que estudies— te permite predecir, sin memorizar caso por caso, qué articulaciones son más propensas a luxarse y cuáles a otro tipo de lesiones (como desgaste degenerativo por la carga que sí soportan bien).'
      ],
      foco:[
        'Regla general para el resto del curso: más congruencia ósea = más estable, menos móvil (cadera). Menos congruencia ósea = más móvil, menos estable (hombro). Cuando estudies una articulación nueva, ubícala primero en esta balanza.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. de introducción a las articulaciones.'
},

'vascularizacion-miembros': {
  tema:'Vascularización de los miembros',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:14,
  idea:'Los puntos donde se palpa el pulso no están ahí por casualidad: son los sitios donde una arteria importante pasa relativamente superficial, cerca de un plano óseo que sirve de "yunque" para sentir el latido. Conocer esa cadena de puntos, de proximal a distal, es una de las herramientas más usadas de toda la exploración física.',
  claves:['arteria axilar','arteria braquial','arteria femoral','pulso','anastomosis'],
  sigue:'huesos-craneo-articulaciones-craneofaciales',
  secciones:[
    {
      t:'La cadena arterial del miembro superior',
      p:[
        'La sangre llega al miembro superior por la arteria subclavia, que al cruzar el borde lateral de la primera costilla cambia de nombre a arteria axilar, y al cruzar el borde inferior del músculo redondo mayor cambia de nombre otra vez a arteria braquial. Este patrón de "la misma arteria cambia de nombre según la región que atraviesa" es un principio general en anatomía vascular que conviene entender desde ahora, en vez de memorizar cada nombre como si fuera un vaso distinto.',
        'La arteria braquial desciende por la cara medial del brazo, acompañando al nervio mediano, hasta la fosa antecubital (el pliegue del codo), donde se palpa y ausculta clásicamente —es el punto donde se coloca el estetoscopio para tomar la presión arterial— y donde se divide en sus dos ramas terminales: la arteria radial (lateral, se palpa en la muñeca del lado del pulgar, el punto más común para tomar el pulso) y la arteria cubital (medial, se palpa en la muñeca del lado del meñique, con menor frecuencia).'
      ],
      foco:[
        'Cadena de nombres del miembro superior: subclavia → (cruza la 1ª costilla) → axilar → (cruza el redondo mayor) → braquial → (se bifurca en el codo) → radial + cubital.'
      ]
    },
    {
      t:'El arco palmar: dos arterias, dos arcos',
      p:[
        'En la mano, las arterias radial y cubital forman entre sí dos arcos anastomóticos que garantizan que, si una de las dos se ocluye, la mano siga recibiendo flujo por la otra. El arco palmar SUPERFICIAL lo forma principalmente la arteria cubital, completado por una rama de la radial. El arco palmar PROFUNDO lo forma principalmente la arteria radial, completado por una rama de la cubital: es exactamente la relación inversa a la del arco superficial.',
        'Esta doble irrigación con anastomosis es la razón por la que, antes de canalizar la arteria radial para monitoreo invasivo o para gasometrías arteriales repetidas, se realiza la prueba de Allen: se comprimen ambas arterias, se pide al paciente que abra y cierre el puño hasta que la mano palidezca, y luego se libera solo la cubital. Si la mano recupera color con rapidez, confirma que el arco cubital-radial es funcional y que puncionar la radial no comprometerá la irrigación de la mano.'
      ],
      foco:[
        '*Consideración clínica*: la prueba de Allen es una aplicación directa de este concepto anatómico —doble irrigación con anastomosis— antes de cualquier procedimiento que pueda comprometer una de las dos arterias del antebrazo.'
      ]
    },
    {
      t:'La cadena arterial del miembro inferior',
      p:[
        'De forma análoga al miembro superior, la arteria ilíaca externa se convierte en arteria femoral al pasar bajo el ligamento inguinal, exactamente en el punto medio inguinal (a mitad de camino entre la espina ilíaca anterosuperior y la sínfisis del pubis), donde se palpa clásicamente el pulso femoral. La arteria femoral desciende por el muslo y, al atravesar el hueco poplíteo detrás de la rodilla, cambia de nombre a arteria poplítea (pulso poplíteo, más difícil de palpar por estar más profundo).',
        'La poplítea se divide después en las arterias tibial anterior y tibial posterior. La tibial posterior se palpa clásicamente por detrás y debajo del maléolo medial (pulso tibial posterior); la tibial anterior continúa hacia el dorso del pie como la arteria dorsal del pie o pedia (pulso pedio), lateral al tendón del extensor largo del primer dedo. Esta cadena completa de pulsos —femoral, poplíteo, tibial posterior, pedio— es lo que se explora de forma sistemática ante la sospecha de enfermedad arterial periférica.'
      ],
      foco:[
        'Cadena de pulsos del miembro inferior, de proximal a distal: femoral (ingle) → poplíteo (hueco de la rodilla) → tibial posterior (detrás del maléolo medial) → pedio (dorso del pie). Explorarlos en ese orden ayuda a localizar dónde empieza una obstrucción arterial.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, caps. del miembro superior e inferior.'
},

'huesos-craneo-articulaciones-craneofaciales': {
  tema:'Huesos del cráneo y articulaciones craneofaciales',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:14,
  idea:'El cráneo no es un solo hueso: es un mosaico de piezas separadas, unidas por suturas casi inmóviles en el adulto, pero que en el recién nacido todavía tienen que dejar espacio para el crecimiento del cerebro. Esa diferencia entre "cráneo adulto" y "cráneo del recién nacido" es el eje de todo el tema.',
  claves:['cráneo','sutura','fontanela','hueso frontal','hueso temporal','mandíbula'],
  sigue:'cintura-escapular-hombro',
  secciones:[
    {
      t:'El neurocráneo y el esplacnocráneo',
      p:[
        'El cráneo se divide funcionalmente en dos porciones. El *neurocráneo* (o cráneo cerebral) es la bóveda que envuelve y protege el encéfalo, formado por huesos como el frontal, los dos parietales, el occipital y porciones del temporal y el esfenoides. El *esplacnocráneo* (o cráneo visceral/facial) forma el esqueleto de la cara, e incluye huesos como el maxilar, los huesos nasales, los cigomáticos y la mandíbula.',
        'Casi todos los huesos del cráneo están unidos entre sí por suturas (articulaciones fibrosas, sinartrosis), con la excepción notable de la mandíbula, que se articula con el hueso temporal mediante una verdadera articulación sinovial: la articulación temporomandibular (ATM), la única articulación móvil de "verdad" en todo el cráneo, y la que permite abrir y cerrar la boca, y los movimientos de lateralidad durante la masticación.'
      ],
      foco:[
        'De todo el cráneo, solo la ATM es una articulación sinovial móvil. Todas las demás uniones entre huesos craneales son suturas fibrosas, prácticamente fijas.'
      ]
    },
    {
      t:'Las principales suturas craneales',
      p:[
        'Las suturas más nombradas en clínica son la sutura coronal (entre el frontal y los dos parietales), la sutura sagital (entre los dos parietales, en la línea media) y la sutura lambdoidea (entre los dos parietales y el occipital, con forma de la letra griega lambda). Donde confluyen varias suturas en el recién nacido, quedan espacios membranosos sin osificar: las fontanelas.',
        'La fontanela anterior (o bregmática), en la unión de la sutura sagital y la coronal, es la más grande y la más conocida, con forma de rombo, y suele cerrarse alrededor de los 18-24 meses de vida. La fontanela posterior (o lambdoidea), más pequeña y triangular, en la unión de la sagital y la lambdoidea, se cierra mucho antes, hacia los 2-3 meses.'
      ],
      foco:[
        'Las fontanelas permiten dos cosas: el moldeamiento del cráneo durante el parto (los huesos se superponen ligeramente al pasar por el canal vaginal) y el espacio para el crecimiento acelerado del encéfalo durante el primer año de vida.'
      ]
    },
    {
      t:'El hueso temporal y su complejidad',
      p:[
        'El hueso temporal merece mención aparte por lo complejo de su anatomía y su relevancia clínica: aloja el oído medio e interno, contiene el conducto auditivo externo, forma parte de la ATM a través de su fosa mandibular, y tiene una porción llamada apófisis mastoides (la prominencia palpable detrás del pabellón auricular) que sirve de inserción a varios músculos del cuello, entre ellos el esternocleidomastoideo.',
        'La apófisis estiloides del temporal, más fina y alargada, sirve de inserción a varios músculos y ligamentos relacionados con la lengua y la faringe, y es un punto de referencia importante en la disección de la región cervical alta, por su cercanía a estructuras vasculares y nerviosas relevantes.'
      ],
      foco:[
        'La mastoides (detrás de la oreja) y la estiloides (más profunda, hacia la faringe) son dos proyecciones distintas del mismo hueso temporal: no las confundas entre sí.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. de cabeza y cuello.'
},

'cintura-escapular-hombro': {
  tema:'Cintura escapular y articulación del hombro',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:14,
  idea:'El hombro es la articulación que mejor ejemplifica la balanza entre movilidad y estabilidad que ya viste en el tema de articulaciones: aquí la elegiste sacrificar estabilidad a cambio de tener el mayor rango de movimiento de todo el cuerpo, y eso tiene consecuencias clínicas muy concretas.',
  claves:['articulación glenohumeral','luxación de hombro','rodete glenoideo','acromion'],
  sigue:'cintura-pelvica-cadera',
  secciones:[
    {
      t:'La articulación glenohumeral: poca congruencia, mucha movilidad',
      p:[
        'La articulación glenohumeral (el "hombro" propiamente dicho) une la cabeza del húmero con la cavidad glenoidea de la escápula. Esta cavidad es poco profunda y cubre solo una pequeña fracción de la superficie de la cabeza humeral —una imagen que suele usarse para explicarlo es la de una pelota de golf apoyada sobre un tee—, lo que le da al hombro el mayor rango de movimiento de cualquier articulación del cuerpo: puede moverse en prácticamente cualquier dirección.',
        'Ese diseño tiene un costo directo en estabilidad. Para compensar la falta de encaje óseo, el hombro depende casi por completo de estructuras blandas: el rodete (o labrum) glenoideo, un anillo de fibrocartílago que profundiza un poco la cavidad glenoidea; la cápsula articular y los ligamentos glenohumerales que la refuerzan; y, sobre todo, el manguito rotador, que mantiene la cabeza humeral centrada de forma activa durante el movimiento.'
      ],
      foco:[
        'El hombro sacrifica estabilidad por movilidad; la cadera hace lo opuesto. Es el mismo principio del tema de articulaciones aplicado a dos casos extremos y opuestos.'
      ]
    },
    {
      t:'La luxación de hombro: la más frecuente del cuerpo',
      p:[
        'Precisamente por esa dependencia de partes blandas, la articulación glenohumeral es la que más se luxa de todo el cuerpo. El mecanismo típico es un movimiento forzado de abducción con rotación externa (como al caer con el brazo extendido hacia atrás y hacia afuera), que supera la capacidad de contención del rodete, la cápsula y los ligamentos, y desplaza la cabeza humeral fuera de la cavidad glenoidea, casi siempre hacia adelante (luxación anterior, la más común con diferencia).',
        '*Consideración clínica*: toda luxación de hombro exige explorar el estado neurovascular antes y después de reducirla, porque el nervio axilar (que rodea el cuello quirúrgico del húmero muy de cerca) puede estirarse o lesionarse tanto por el desplazamiento inicial de la cabeza humeral como por la maniobra de reducción. Se evalúa comprobando la sensibilidad del "parche del deltoides" (la piel sobre la porción lateral del hombro) y la contracción del propio deltoides.'
      ],
      foco:[
        'Ante cualquier luxación de hombro: explora el nervio axilar ANTES de reducir (para saber si ya estaba lesionado) y DESPUÉS de reducir (para descartar que la maniobra lo haya lesionado).'
      ]
    },
    {
      t:'El acromion y el espacio subacromial',
      p:[
        'El acromion es la proyección de la escápula que forma el "techo" de la articulación del hombro, articulándose además con la clavícula (articulación acromioclavicular). Entre el acromion y la cabeza humeral queda un espacio estrecho, el espacio subacromial, por donde pasa el tendón del supraespinoso (uno de los músculos del manguito rotador) camino a su inserción.',
        'Este espacio puede estrecharse por cambios degenerativos, inflamación o la forma particular del acromion en cada persona, pinzando el tendón del supraespinoso con el movimiento repetido de elevación del brazo —el llamado síndrome de pinzamiento subacromial—, una causa muy frecuente de dolor de hombro, especialmente en personas que hacen trabajos o deportes con el brazo por encima de la cabeza de forma repetida.'
      ],
      foco:[
        'El espacio subacromial es estrecho por diseño; el supraespinoso pasa justo por ahí, y por eso es el músculo del manguito rotador que con más frecuencia se lesiona o se pinza.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. del miembro superior.'
},

'cintura-pelvica-cadera': {
  tema:'Cintura pélvica y articulación de la cadera',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:13,
  idea:'La cadera es el contraejemplo perfecto del hombro: aquí el cuerpo priorizó la estabilidad sobre el rango de movimiento, porque esta articulación tiene que soportar el peso de todo el cuerpo con cada paso, no solo mover un miembro en el aire.',
  claves:['acetábulo','ligamento redondo','necrosis de cabeza femoral','ángulo cervicodiafisario'],
  sigue:'rodilla-anatomia-articular-meniscos',
  secciones:[
    {
      t:'Una articulación diseñada para la carga',
      p:[
        'La articulación de la cadera une la cabeza del fémur con el acetábulo del coxal. A diferencia de la cavidad glenoidea del hombro, el acetábulo es profundo y cubre gran parte de la cabeza femoral, dando de entrada una congruencia ósea mucho mayor. Esta buena congruencia se refuerza además con una cápsula articular gruesa y varios ligamentos potentes —el iliofemoral, el pubofemoral y el isquiofemoral— que se tensan en distintas posiciones para limitar el exceso de movimiento en cada dirección.',
        'El ligamento iliofemoral, en particular, es uno de los ligamentos más fuertes de todo el cuerpo, y se tensa precisamente con la extensión de la cadera, lo que permite a una persona mantenerse de pie durante largos periodos con relativamente poco esfuerzo muscular activo, porque el ligamento "atrapa" la articulación en extensión.'
      ],
      foco:[
        'La postura erguida prolongada depende en parte de este ligamento: al estar de pie, la cadera queda extendida y el iliofemoral, tensado al máximo, hace buena parte del trabajo de sostenerla sin necesitar contracción muscular constante.'
      ]
    },
    {
      t:'El ligamento redondo y la irrigación de la cabeza femoral',
      p:[
        'Dentro de la propia articulación, un ligamento intraarticular —el ligamento de la cabeza femoral, o ligamento redondo— conecta el centro de la cabeza femoral con el fondo del acetábulo. Su función mecánica es limitada, pero contiene un pequeño vaso, la arteria del ligamento redondo, que en el niño aporta una parte relevante de la irrigación de la cabeza femoral.',
        'En el adulto, esta fuente vascular pierde importancia relativa, y la irrigación de la cabeza femoral pasa a depender sobre todo de las arterias retinaculares que ascienden pegadas al cuello femoral (el mismo dato que ya viste en el tema de huesos del miembro inferior, y que explica por qué las fracturas del cuello femoral en el adulto tienen tanto riesgo de necrosis avascular de la cabeza: los vasos retinaculares, no el ligamento redondo, son los que se comprometen).'
      ],
      foco:[
        'Ligamento redondo: importante en el NIÑO (irrigación). Arterias retinaculares: importantes en el ADULTO (irrigación). Este cambio de dependencia con la edad es un dato de examen muy frecuente.'
      ]
    },
    {
      t:'El ángulo cervicodiafisario',
      p:[
        'El cuello femoral forma con la diáfisis del fémur un ángulo, el ángulo cervicodiafisario, que en el adulto normal mide aproximadamente entre 125° y 135°. Este ángulo no es un dato decorativo: determina cómo se transmiten las fuerzas de carga desde la cadera hacia el resto del fémur, y sus desviaciones tienen nombre clínico propio. Un ángulo mayor de lo normal se llama coxa valga; uno menor, coxa vara.',
        'Estas alteraciones del ángulo, ya sea congénitas o adquiridas (por ejemplo, tras una fractura mal consolidada), cambian la distribución de la carga sobre el cuello y la cabeza femoral y sobre la articulación en general, y pueden acelerar el desgaste articular (artrosis de cadera) a largo plazo si el ángulo se aleja mucho del rango normal.'
      ],
      foco:[
        'Coxa VALGA = ángulo cervicodiafisario MAYOR de lo normal. Coxa VARA = ángulo MENOR. Un truco para no confundirlos: "vara" suena a "menos", como si el ángulo se hubiera "recortado".'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. del miembro inferior.'
},

'rodilla-anatomia-articular-meniscos': {
  tema:'Rodilla: anatomía articular y meniscos',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:15,
  idea:'La rodilla es la articulación sinovial más grande del cuerpo y, mecánicamente, una de las más comprometidas: tiene que soportar todo el peso corporal en carga, permitir flexoextensión amplia, y hacerlo con dos huesos (fémur y tibia) cuyas superficies no encajan de forma natural. Los meniscos y los ligamentos cruzados son la solución del cuerpo a ese problema de diseño.',
  claves:['menisco','ligamento cruzado anterior','ligamento colateral','articulación femorotibial'],
  sigue:'mano-huesos-articulaciones-arcos',
  secciones:[
    {
      t:'Una articulación con mala congruencia natural',
      p:[
        'La articulación femorotibial (la rodilla propiamente dicha) enfrenta un problema geométrico: los cóndilos femorales son convexos y redondeados, mientras que la meseta tibial es prácticamente plana. Ese desajuste entre una superficie curva y una plana haría que el contacto entre ambos huesos fuera muy puntual y concentrado, generando presiones enormes en áreas pequeñas si no hubiera nada que lo corrigiera.',
        'Los meniscos —medial y lateral, cuñas de fibrocartílago en forma de media luna, interpuestos entre los cóndilos femorales y la meseta tibial— resuelven este problema rellenando el espacio y aumentando la superficie de contacto real entre ambos huesos, distribuyendo mejor la carga y actuando además como amortiguadores frente al impacto.'
      ],
      foco:[
        'Menisco medial y menisco lateral no son simétricos ni funcionan exactamente igual: el menisco medial está más fijo a estructuras vecinas (incluido el ligamento colateral medial) y por eso se lesiona con más frecuencia que el lateral, que tiene más movilidad propia.'
      ]
    },
    {
      t:'Los ligamentos cruzados: control del deslizamiento anteroposterior',
      p:[
        'Dentro de la articulación, dos ligamentos se cruzan entre sí (de ahí su nombre) para controlar el deslizamiento de la tibia respecto al fémur en sentido anteroposterior. El ligamento cruzado anterior (LCA) va desde la parte anterior de la meseta tibial hacia la parte posterior del cóndilo femoral lateral, y evita que la tibia se deslice demasiado hacia ADELANTE respecto al fémur. El ligamento cruzado posterior (LCP), de trayecto opuesto, evita que la tibia se deslice demasiado hacia ATRÁS.',
        'El LCA se lesiona con mucha más frecuencia que el LCP, típicamente en deportes con cambios bruscos de dirección, pivoteo o aterrizajes de salto mal controlados, a menudo sin siquiera un contacto directo con otro jugador. El signo clínico clásico de su rotura es el "cajón anterior" positivo: con la rodilla flexionada, la tibia se puede desplazar hacia adelante de forma anormal al traccionarla.'
      ],
      foco:[
        'Cruzado ANTERIOR evita desplazamiento ANTERIOR de la tibia (cajón anterior positivo si se rompe). Cruzado POSTERIOR evita desplazamiento POSTERIOR (cajón posterior positivo si se rompe). El nombre del ligamento coincide con el movimiento que impide.'
      ]
    },
    {
      t:'Los ligamentos colaterales: control del estrés en varo y valgo',
      p:[
        'A los lados de la rodilla, los ligamentos colaterales medial y lateral controlan el movimiento en el plano lateral: el colateral medial resiste el estrés en valgo (una fuerza que empuja la rodilla hacia adentro, arqueándola hacia afuera), y el colateral lateral resiste el estrés en varo (una fuerza que empuja la rodilla hacia afuera, arqueándola hacia adentro). El colateral medial, además, está anatómicamente adherido al menisco medial, lo que explica por qué ambos pueden lesionarse juntos en el mismo mecanismo de trauma (junto con el LCA, esta combinación de tres lesiones simultáneas se conoce clásicamente como la "tríada infeliz" o "tríada de O\'Donoghue").',
        'Reconocer qué ligamento se lesionó a partir del mecanismo de la lesión (dirección de la fuerza, si hubo o no rotación, si hubo o no contacto directo) es exactamente el tipo de razonamiento clínico que se espera desarrollar a partir de este tema: no se trata de memorizar los ligamentos sueltos, sino de poder reconstruir, a partir de cómo ocurrió el trauma, cuál de ellos es el más probable que se haya dañado.'
      ],
      foco:[
        'La "tríada infeliz" combina LCA + menisco medial + colateral medial, precisamente porque el colateral medial y el menisco medial están anatómicamente pegados entre sí.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. del miembro inferior.'
},

'mano-huesos-articulaciones-arcos': {
  tema:'Mano: huesos, articulaciones y arcos',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:15,
  idea:'La mano es, de todo el cuerpo, la estructura ósea con más piezas móviles concentradas en poco espacio, y esa complejidad tiene un propósito muy concreto: permitir la precisión de la pinza entre el pulgar y los demás dedos, algo que ningún otro primate logra con la misma destreza.',
  claves:['carpo','falange','túnel carpiano','arco palmar','oponente del pulgar'],
  sigue:'pie-huesos-articulaciones-arcos-plantares',
  secciones:[
    {
      t:'La estructura ósea de la mano: tres regiones',
      p:[
        'La mano tiene 27 huesos organizados en tres regiones: los 8 huesos del carpo (muñeca), los 5 metacarpianos (uno por cada dedo, numerados del I al V empezando por el pulgar) y las 14 falanges de los dedos (cada dedo tiene falange proximal, media y distal, excepto el pulgar, que solo tiene proximal y distal, sin falange media).',
        'Esta distribución no es arbitraria: el carpo forma una base relativamente rígida que transmite fuerzas desde el antebrazo, los metacarpianos dan longitud y soporte a la palma, y las falanges, con sus múltiples articulaciones (metacarpofalángicas e interfalángicas), son las que permiten el rango fino de movimiento necesario para agarrar objetos de formas muy distintas.'
      ],
      foco:[
        'El pulgar tiene solo dos falanges (proximal y distal), no tres como los otros cuatro dedos. Es un detalle fácil de olvidar pero frecuente en examen.'
      ]
    },
    {
      t:'El túnel del carpo',
      p:[
        'En la cara palmar de la muñeca, los huesos del carpo forman un arco cóncavo que, junto con el retináculo flexor (un ligamento fibroso que se extiende de un lado a otro de ese arco), delimita un túnel: el túnel del carpo. Por dentro de este túnel pasan los tendones flexores de los dedos y, junto a ellos, el nervio mediano.',
        'El espacio dentro del túnel es fijo y poco distensible. Cualquier proceso que aumente el volumen de su contenido —inflamación de los tendones flexores, retención de líquidos (frecuente en el embarazo), o simplemente uso repetitivo de la muñeca— puede comprimir el nervio mediano contra el retináculo, produciendo el síndrome del túnel carpiano: dolor y parestesias en el territorio del mediano (pulgar, índice, medio y mitad del anular) y, en casos avanzados, debilidad para oponer el pulgar.'
      ],
      foco:[
        'El túnel del carpo es un espacio de paredes fijas: cualquier cosa que aumente lo que hay dentro (inflamación, líquido) sube la presión y comprime el nervio mediano, que es la estructura más sensible a esa presión dentro del túnel.'
      ]
    },
    {
      t:'Los músculos tenares y la oposición del pulgar',
      p:[
        'En la base del pulgar, un grupo de músculos cortos —los músculos tenares (oponente del pulgar, flexor corto del pulgar, abductor corto del pulgar)— permiten el movimiento de oposición: llevar la yema del pulgar a tocar la yema de cualquiera de los otros dedos, un movimiento que hace posible la pinza de precisión. La mayoría de estos músculos están inervados por el nervio mediano, precisamente el nervio que se comprime en el túnel del carpo.',
        'Por eso, en un síndrome del túnel carpiano avanzado, además del dolor y las parestesias, aparece debilidad y con el tiempo atrofia visible de la eminencia tenar (el relieve muscular en la base del pulgar), y el paciente pierde fuerza específicamente para el movimiento de oposición, notándose sobre todo en tareas que requieren pinza fina, como abrochar botones o sostener un lápiz.'
      ],
      foco:[
        '*Consideración clínica*: la atrofia tenar visible es un signo de síndrome del túnel carpiano avanzado, no inicial. No esperes a verla para sospechar el diagnóstico: el dolor nocturno y las parestesias en el territorio del mediano suelen aparecer mucho antes.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. del miembro superior.'
},

'pie-huesos-articulaciones-arcos-plantares': {
  tema:'Pie: huesos, articulaciones y arcos plantares',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:14,
  idea:'El pie no es una plataforma rígida: es una estructura elástica, diseñada para absorber el impacto de cada paso y devolver parte de esa energía para propulsar el siguiente. Los arcos plantares son la clave mecánica de ese comportamiento de "resorte".',
  claves:['astrágalo','calcáneo','arco longitudinal','tobillo','esguince'],
  sigue:'dermatomas-miotomas',
  secciones:[
    {
      t:'Los huesos del pie: 26 piezas en tres grupos',
      p:[
        'El pie tiene 26 huesos, organizados en tres grupos: el tarso (7 huesos, incluidos astrágalo y calcáneo), el metatarso (5 huesos largos, uno por cada dedo) y las falanges (14, con la misma distribución que en la mano: el primer dedo tiene solo dos, los demás tienen tres). El astrágalo es el único hueso del tarso que se articula directamente con la tibia y el peroné, formando la articulación del tobillo, y notablemente no recibe ninguna inserción muscular directa.',
        'El calcáneo, por debajo del astrágalo, es el hueso más grande y robusto del pie, diseñado para recibir el impacto del talón contra el suelo y para servir de palanca al tendón de Aquiles (tendón calcáneo) durante la propulsión al caminar o correr.'
      ],
      foco:[
        'El astrágalo transmite peso pero no tiene músculos que se inserten en él directamente; el calcáneo sí recibe la inserción del tendón de Aquiles, el más grueso del cuerpo.'
      ]
    },
    {
      t:'La articulación del tobillo y su ligamento débil',
      p:[
        'La articulación del tobillo (talocrural) une la tibia, el peroné y el astrágalo, formando una especie de "mortaja" ósea que da estabilidad lateral. Esta estabilidad se refuerza con dos complejos ligamentarios: el ligamento deltoideo, en la cara medial (grueso y resistente), y el complejo ligamentario lateral, formado por tres ligamentos más delgados: el peroneoastragalino anterior, el calcaneofibular y el peroneoastragalino posterior.',
        'El movimiento de inversión (el pie girando hacia adentro) es, con diferencia, el mecanismo más frecuente de esguince de tobillo, precisamente porque tensiona primero al ligamento peroneoastragalino anterior, el más débil de los tres del complejo lateral. Si la fuerza es mayor, la lesión puede extenderse al calcaneofibular. El movimiento de eversión, mucho menos frecuente, tensiona el ligamento deltoideo, que al ser más grueso y resistente, con más frecuencia arranca un fragmento de hueso (fractura por avulsión) en vez de desgarrarse él mismo.'
      ],
      foco:[
        'Inversión (mecanismo más frecuente) → lesiona ligamentos laterales (peroneoastragalino anterior primero). Eversión (menos frecuente) → lesiona el ligamento deltoideo medial (más fuerte, por eso a veces arranca hueso en vez de romperse).'
      ]
    },
    {
      t:'Los arcos plantares: el pie como resorte',
      p:[
        'El pie tiene tres arcos: el longitudinal medial (el más alto, desde el calcáneo hasta la cabeza del primer metatarsiano), el longitudinal lateral (más bajo, desde el calcáneo hasta el quinto metatarsiano) y el transverso (a nivel del mediopié). Estos arcos están sostenidos por la forma en cuña de varios huesos del tarso, reforzados por ligamentos (como el ligamento calcaneonavicular plantar o "spring ligament") y por la fascia plantar, una banda gruesa de tejido conectivo que corre por la planta del pie.',
        'Funcionalmente, estos arcos permiten que el pie se comporte como un resorte: se aplanan ligeramente al recibir el peso del cuerpo (fase de apoyo), absorbiendo el impacto, y se recuperan al despegar el pie del suelo (fase de propulsión), devolviendo parte de esa energía almacenada para ayudar a impulsar el siguiente paso. Un pie plano (arco longitudinal medial colapsado) o un pie cavo (arco excesivamente alto) alteran esta mecánica normal y pueden generar sobrecarga en otras estructuras del miembro inferior con el tiempo.'
      ],
      foco:[
        'Piensa en los arcos del pie como un resorte, no como una estructura rígida: su función depende de que se aplanen y recuperen con cada paso, no de que se mantengan fijos.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. del miembro inferior.'
},

'dermatomas-miotomas': {
  tema:'Dermatomas y miotomas',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:14,
  idea:'Los dermatomas y miotomas son, en esencia, un mapa del cuerpo dibujado según las raíces nerviosas espinales en vez de según los músculos o la piel. Ese mapa alternativo es lo que permite, en una exploración neurológica, ubicar con precisión el nivel exacto de una lesión medular o radicular.',
  claves:['dermatoma','miotoma','nivel radicular','distribución sensitiva'],
  sigue:'sistema-linfatico-miembros',
  secciones:[
    {
      t:'Qué es un dermatoma',
      p:[
        'Un dermatoma es el área de piel cuya sensibilidad depende de las fibras aferentes de una única raíz nerviosa espinal. Aunque en la práctica los dermatomas vecinos se superponen bastante (por eso la pérdida de sensibilidad de una sola raíz rara vez es absoluta), existe un mapa relativamente estándar y consistente, con algunos puntos de referencia muy usados en clínica: C6 cubre el pulgar, C8 el meñique, T4 la línea de los pezones, T10 el ombligo, L1 el pliegue inguinal, L4 la cara medial de la pierna y S1 el borde lateral del pie.',
        'Este mapa se usa constantemente en la práctica: para estimar hasta qué nivel llega el bloqueo sensitivo de una anestesia epidural o espinal (si el paciente ya no siente un pinchazo a la altura del ombligo, el bloqueo llegó al menos hasta T10), o para localizar aproximadamente el nivel de una lesión medular a partir de dónde el paciente deja de sentir sensibilidad normal.'
      ],
      foco:[
        'Tres puntos de referencia dermatómicos imprescindibles para memorizar ya: T4 = pezones, T10 = ombligo, L1 = pliegue inguinal. Son los tres que más se usan en la práctica clínica cotidiana.'
      ]
    },
    {
      t:'Qué es un miotoma',
      p:[
        'Un miotoma es el equivalente motor del dermatoma: el grupo de músculos inervado por las fibras eferentes de una única raíz nerviosa espinal. A diferencia de los dermatomas, que se representan como franjas de piel, los miotomas se evalúan clínicamente pidiendo al paciente que realice un movimiento específico y valorando la fuerza con que lo hace, según una escala estándar (0 a 5).',
        'Algunos ejemplos de correlación miotoma-movimiento muy usados en la exploración: C5 con la flexión del codo, C6 con la extensión de la muñeca, C7 con la extensión del codo, L4 con la dorsiflexión del tobillo, L5 con la extensión del primer dedo del pie, S1 con la flexión plantar del tobillo. Evaluar varios miotomas en orden, junto con los dermatomas y los reflejos correspondientes, es lo que permite construir un "nivel neurológico" preciso en la exploración de un paciente con sospecha de lesión medular o radicular.'
      ],
      foco:[
        'Ningún músculo depende de una sola raíz al 100%: cada músculo suele recibir fibras de dos o tres raíces vecinas, con una que domina. Por eso la exploración de miotomas evalúa "debilidad relativa" más que "parálisis completa" cuando la lesión es de una sola raíz.'
      ]
    },
    {
      t:'Aplicación clínica conjunta',
      p:[
        'En la práctica, dermatomas, miotomas y reflejos osteotendinosos se evalúan juntos porque cada uno aporta información distinta sobre el mismo nivel. Por ejemplo, ante la sospecha de una hernia discal L4-L5 que comprime la raíz L5: se espera debilidad para la extensión del primer dedo del pie (miotoma L5), alteración sensitiva en el dorso del pie (dermatoma L5) y, a diferencia de una compresión de S1, el reflejo aquíleo (que depende de S1-S2) suele conservarse, mientras que el reflejo rotuliano (que depende de L2-L4) también se conserva porque L4 no está comprometida.',
        'Esta triangulación —dermatoma + miotoma + reflejo— es la que permite, sin necesidad de una imagen, sospechar con bastante precisión qué raíz nerviosa específica está afectada, y es una habilidad clínica que se sigue puliendo durante toda la carrera, empezando por memorizar bien este mapa base.'
      ],
      foco:[
        'No memorices dermatomas y miotomas por separado: apréndelos en parejas por nivel (ej. "L5 = dorso del pie + extensión del primer dedo"), porque así es como realmente se usan en la exploración.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. de introducción al sistema nervioso periférico. Snell, Neuroanatomía clínica.'
},

'sistema-linfatico-miembros': {
  tema:'Sistema linfático de los miembros',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:13,
  idea:'El sistema linfático es, en cierto sentido, el "drenaje de emergencia" del cuerpo: recoge el líquido y las proteínas que se escapan de los capilares sanguíneos y no vuelven directamente a la circulación venosa, y lo devuelve al torrente sanguíneo después de filtrarlo por los ganglios. Cuando ese drenaje se interrumpe, el resultado es visible y a veces permanente.',
  claves:['ganglio linfático','vaso linfático','drenaje linfático','linfedema'],
  sigue:'anatomia-superficie-referencia-clinica',
  secciones:[
    {
      t:'Cómo funciona el drenaje linfático',
      p:[
        'Los capilares sanguíneos dejan escapar constantemente una pequeña cantidad de líquido y proteínas hacia el espacio intersticial (el espacio entre las células), como parte normal del intercambio de nutrientes. La mayor parte de ese líquido vuelve directamente a los capilares venosos, pero una fracción —junto con proteínas más grandes que no pueden reabsorberse tan fácilmente— queda en el espacio intersticial y necesita otra vía de regreso: los vasos linfáticos.',
        'Los vasos linfáticos, cada vez más gruesos a medida que confluyen, transportan esa linfa hacia grupos de ganglios linfáticos, estaciones de filtrado donde células inmunitarias examinan el contenido de la linfa (por eso los ganglios también son una primera línea de defensa contra infecciones y, clínicamente, un sitio donde buscar diseminación de células tumorales). Después de pasar por varios grupos ganglionares, la linfa finalmente se reincorpora a la circulación venosa, cerca del cuello, a través del conducto torácico (para la mayor parte del cuerpo) o el conducto linfático derecho (para el cuadrante superior derecho).'
      ],
      foco:[
        'El sistema linfático es unidireccional (de los tejidos hacia el corazón), a diferencia del sistema circulatorio sanguíneo, que es un circuito cerrado. No hay "bomba" central como el corazón; el flujo depende de la contracción de los propios vasos linfáticos y de la compresión por el movimiento muscular vecino.'
      ]
    },
    {
      t:'El drenaje del miembro superior y del miembro inferior',
      p:[
        'El miembro superior drena principalmente hacia los ganglios axilares, ubicados en la axila, siguiendo en general el trayecto de las venas superficiales y profundas del brazo. Por eso, ante una infección de la mano o el antebrazo, es frecuente encontrar ganglios axilares inflamados y dolorosos (linfadenopatía reactiva), y por eso la axila es una zona clave a explorar en la estadificación del cáncer de mama, que también drena parcialmente hacia ese grupo ganglionar.',
        'El miembro inferior, de manera análoga, drena principalmente hacia los ganglios inguinales, en el pliegue de la ingle. Una infección en el pie o la pierna con frecuencia produce linfadenopatía inguinal reactiva, del mismo modo que una infección de mano produce linfadenopatía axilar.'
      ],
      foco:[
        'Miembro superior → ganglios AXILARES. Miembro inferior → ganglios INGUINALES. Es la misma lógica del drenaje venoso superficial: cada miembro drena hacia el grupo ganglionar más cercano en su raíz.'
      ]
    },
    {
      t:'Linfedema: cuando el drenaje se interrumpe',
      p:[
        'Cuando el drenaje linfático de un miembro se interrumpe —por extirpación quirúrgica de ganglios (frecuente en cirugía oncológica, como la disección axilar en cáncer de mama), por radioterapia sobre una zona ganglionar, o por infección parasitaria de los vasos linfáticos (filariasis, causa frecuente de linfedema en regiones endémicas)— la linfa que ya no puede circular con normalidad se acumula progresivamente en los tejidos blandos del miembro.',
        'Esto produce linfedema: una hinchazón crónica, a menudo progresiva y difícil de revertir por completo, que se distingue de otros tipos de edema (por ejemplo, el edema cardíaco o el venoso) en que no mejora simplemente elevando el miembro, y con el tiempo puede engrosar la piel y los tejidos subcutáneos de forma permanente si no se trata con medidas específicas (drenaje linfático manual, compresión, ejercicio).'
      ],
      foco:[
        '*Consideración clínica*: si una paciente con antecedente de disección axilar (por cáncer de mama) desarrolla hinchazón crónica del brazo del mismo lado que no mejora al elevarlo, piensa primero en linfedema por interrupción del drenaje linfático, no en una causa venosa o cardíaca.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, caps. del miembro superior e inferior.'
},

'anatomia-superficie-referencia-clinica': {
  tema:'Anatomía de superficie y puntos de referencia clínicos',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:12,
  idea:'Este último tema no introduce estructuras nuevas: es la síntesis práctica de todo lo que ya estudiaste en Anatomía I, aplicado a la pregunta que de verdad importa en la clínica: "¿cómo encuentro esto en un paciente real, sin ninguna imagen, solo con mis manos y mis ojos?".',
  claves:['punto de referencia óseo','anatomía de superficie','palpación ósea'],
  sigue:'homeostasis-medio-interno',
  secciones:[
    {
      t:'Por qué importa la anatomía de superficie',
      p:[
        'La anatomía de superficie usa puntos óseos fácilmente palpables como mapa para localizar, sin necesidad de imágenes, estructuras que están debajo de la piel y no son palpables por sí mismas: articulaciones, trayectos nerviosos o vasculares, niveles vertebrales, o puntos seguros de punción. Cada uno de esos puntos de referencia que fuiste aprendiendo a lo largo de este bloque —el ángulo esternal, el punto medio inguinal, la vértebra prominente C7— cobra su verdadero sentido cuando se usa en conjunto para "leer" el cuerpo de un paciente.',
        'Este es, de hecho, el motivo por el que Anatomía I dedica tanto tiempo a huesos y puntos óseos específicos: no es un ejercicio de memoria pura, es la construcción progresiva del mapa que vas a usar constantemente en la exploración física, durante toda la carrera.'
      ],
      foco:[
        'Repasa mentalmente, de un tirón, los puntos de referencia que ya viste: ángulo esternal (2ª costilla), C7 (vértebra prominente), punto medio inguinal (arteria femoral), cuello quirúrgico del húmero (nervio axilar), epicóndilo medial (nervio cubital), maléolos (tobillo). Todos son ejemplos de anatomía de superficie aplicada.'
      ]
    },
    {
      t:'Puntos de referencia del tronco',
      p:[
        'En el tronco, además del ángulo esternal (que ubica la 2ª costilla y permite contar espacios intercostales) y de C7 (que ubica el inicio de la columna torácica), otro punto útil es la cresta ilíaca, cuya línea imaginaria entre ambos lados (línea intercrestal) pasa aproximadamente a la altura de L4, un dato usado con frecuencia para ubicar el nivel correcto antes de una punción lumbar, evitando estructuras más altas donde el riesgo de lesionar la médula espinal (que en el adulto termina alrededor de L1-L2) sería mayor.',
        'La punta del apéndice xifoides marca aproximadamente el nivel de T9; el ombligo, el nivel de L3-L4 por delante (coincidiendo aproximadamente, aunque no exactamente, con el dermatoma T10). Estos puntos, combinados, permiten a un examinador ubicarse con precisión en el tronco sin necesitar ninguna imagen.'
      ],
      foco:[
        'La línea intercrestal (entre ambas crestas ilíacas) es el punto de referencia clásico para elegir el nivel de una punción lumbar segura, por quedar por debajo de donde termina la médula espinal en el adulto.'
      ]
    },
    {
      t:'Puntos de referencia de los miembros',
      p:[
        'En el miembro superior, ya conoces el cuello quirúrgico del húmero (nervio axilar), el canal de torsión (nervio radial), el epicóndilo medial (nervio cubital, el "hueso de la risa") y la tabaquera anatómica en la muñeca (relacionada con el escafoides). En el miembro inferior, el punto medio inguinal (arteria femoral), el cuadrante superoexterno del glúteo (zona segura de inyección, lejos del nervio ciático) y los maléolos medial y lateral (referencias del tobillo, junto a los cuales se palpan los pulsos tibial posterior y se ubican los ligamentos lesionados en un esguince).',
        'Todos estos puntos, estudiados uno por uno a lo largo del cuatrimestre, forman en conjunto el mapa práctico que un futuro médico usa todos los días: para explorar, para justificar dónde puncionar o inyectar con seguridad, y para predecir, ante un traumatismo en un punto conocido, qué estructura nerviosa o vascular vecina podría estar en riesgo.'
      ],
      foco:[
        'Este tema es, literalmente, el resumen aplicado de todo el bloque de Anatomía I. Si puedes explicar en voz alta, sin mirar tus apuntes, por qué cada uno de estos puntos es clínicamente relevante, dominas la materia.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. de introducción y anatomía de superficie.'
}

});
