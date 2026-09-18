/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 6)
   Termina de cubrir FISIOLOGIA I por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'membrana-transporte': {
  tema:'Membrana celular y transporte',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:7,
  idea:'Todo lo que una célula necesita —glucosa, oxígeno, sodio— tiene que cruzar su membrana para entrar, y todo lo que le sobra tiene que cruzarla para salir. Cómo cruza cada sustancia (sin gasto de energía o con gasto de energía) explica casi toda la fisiología celular que viene después.',
  claves:['difusión','osmosis','transporte activo','bomba sodio potasio','gradiente'],
  sigue:'potencial-de-accion',
  secciones:[
    {
      t:'A favor del gradiente: difusión y ósmosis, sin gastar energía',
      p:[
        'La *difusión* es el movimiento neto de una sustancia desde donde hay más concentración hacia donde hay menos, hasta igualarse; no requiere energía porque va a favor del gradiente de concentración, como cuando una gota de tinta se dispersa sola en un vaso de agua. Sustancias pequeñas y liposolubles (como el oxígeno y el CO2) difunden directamente a través de la membrana; sustancias polares o con carga (como la glucosa o los iones) necesitan proteínas de canal o transportador para cruzar, aunque sigan yendo a favor de su gradiente —esto se llama difusión facilitada.',
        'La *ósmosis* es un caso especial: es el movimiento del AGUA a través de una membrana semipermeable, desde donde hay menos solutos (más agua "libre") hacia donde hay más solutos, buscando igualar la concentración. Ejemplo trabajado: si a una célula la rodeas de una solución con mucha más sal que su interior (hipertónica), el agua sale de la célula por ósmosis y la célula se encoge; si la rodeas de una solución con menos sal (hipotónica), el agua entra y la célula se hincha.'
      ]
    },
    {
      t:'En contra del gradiente: transporte activo, con gasto de energía',
      p:[
        'Cuando una célula necesita mover una sustancia EN CONTRA de su gradiente de concentración —de donde hay menos hacia donde hay más—, necesita gastar energía (ATP) para lograrlo: esto es *transporte activo*. El ejemplo más importante de todo el cuerpo es la *bomba sodio-potasio* (Na+/K+ ATPasa), presente en la membrana de prácticamente todas las células: por cada molécula de ATP que gasta, saca 3 iones de sodio de la célula y mete 2 iones de potasio, ambos en contra de su gradiente.',
        'Esta bomba no es un detalle menor: mantiene el sodio bajo y el potasio alto dentro de la célula, un desequilibrio iónico que la célula usa constantemente para todo, desde generar el potencial de membrana en reposo hasta impulsar el transporte secundario de otras sustancias (como la glucosa, que en el intestino entra "aprovechando" el gradiente de sodio que la bomba mantiene).'
      ],
      foco:[
        'Consideración clínica: la bomba sodio-potasio consume una fracción enorme del gasto energético basal del cuerpo (hasta un tercio, según el tejido). Es la razón por la que un tejido sin suficiente oxígeno para producir ATP (isquemia) pierde rápido su gradiente iónico normal, se hincha por ósmosis, y eso es precisamente la degeneración hidrópica que se ve en la lesión celular reversible.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 4.'
},

'sinapsis-transmision-neuromuscular': {
  tema:'Sinapsis y transmisión neuromuscular',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:7,
  idea:'Entre una neurona y la siguiente célula (otra neurona, o un músculo) casi siempre hay un espacio físico, no un cable continuo. Cómo la señal eléctrica cruza ese espacio —convirtiéndose brevemente en una señal química— es el mecanismo que hace posible cualquier movimiento voluntario.',
  claves:['sinapsis','acetilcolina','placa motora','neurotransmisor','vesícula'],
  sigue:'contraccion-muscular',
  secciones:[
    {
      t:'De eléctrico a químico y de vuelta a eléctrico',
      p:[
        'Una *sinapsis* es el punto de comunicación entre una neurona y otra célula. En la mayoría de las sinapsis del cuerpo (las sinapsis químicas), la neurona presináptica no toca directamente a la célula siguiente: hay un pequeño espacio, la hendidura sináptica. Cuando el impulso eléctrico llega al final del axón, abre canales de calcio, y ese calcio hace que las *vesículas* cargadas de *neurotransmisor* se fusionen con la membrana y liberen su contenido hacia la hendidura.',
        'El neurotransmisor cruza ese espacio por difusión simple (es una distancia microscópica) y se une a receptores específicos en la célula siguiente, generando ahí una nueva señal eléctrica. Es, literalmente, una conversión de señal eléctrica a química y de vuelta a eléctrica, y esa conversión es lo que permite que la señal se pueda amplificar, modular o bloquear con fármacos, cosa que una señal puramente eléctrica no permitiría con tanta facilidad.'
      ]
    },
    {
      t:'La unión neuromuscular: una sinapsis especializada',
      p:[
        'La *placa motora* (unión neuromuscular) es la sinapsis especializada entre una neurona motora y una fibra de músculo esquelético, y usa siempre el mismo neurotransmisor: la *acetilcolina*. Cuando el impulso nervioso llega, se libera acetilcolina, que se une a receptores en la membrana muscular (la placa motora propiamente dicha), abriendo canales que despolarizan la fibra muscular e inician su contracción.',
        'Ejemplo trabajado: esta es la unión que bloquean los relajantes musculares usados en cirugía (compitiendo con la acetilcolina por el receptor) y la que ataca la toxina botulínica (impidiendo la liberación de acetilcolina, lo que produce parálisis flácida). Entender este único punto de la fisiología explica el mecanismo de acción de fármacos y toxinas que, de otra forma, parecerían no tener relación entre sí.'
      ],
      foco:[
        'La acetilcolina se degrada rápidamente en la hendidura por la enzima acetilcolinesterasa: eso permite que la señal sea breve y controlada, en vez de mantenerse activada indefinidamente.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 7.'
},

'musculo-liso-cardiaco': {
  tema:'Músculo liso y cardíaco',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:6,
  idea:'No todo músculo obedece una orden consciente. El músculo liso y el cardíaco se contraen sin que tú lo decidas, y ambos comparten un truco que el músculo esquelético no tiene: pueden pasarse la señal eléctrica de una célula a la siguiente directamente, sin esperar una orden nerviosa individual para cada una.',
  claves:['músculo liso','músculo cardíaco','automatismo','unión en hendidura'],
  sigue:'sangre-elementos-formes-hemostasia',
  secciones:[
    {
      t:'Lo que comparten: involuntario y con uniones en hendidura',
      p:[
        'A diferencia del músculo esquelético (voluntario, cada fibra necesita su propia señal nerviosa), el músculo liso (en las paredes de vísceras y vasos) y el músculo cardíaco son *involuntarios*: se activan por el sistema nervioso autónomo, por hormonas, o incluso de forma espontánea, sin depender de una orden consciente.',
        'Los dos tienen, además, *uniones en hendidura* (gap junctions) entre células vecinas: canales directos que permiten que la corriente eléctrica pase de una célula a la siguiente sin necesidad de una sinapsis química. Esto hace que grupos enteros de células se contraigan casi al mismo tiempo, como una sola unidad funcional, en vez de necesitar que cada célula reciba su propia señal individual.'
      ]
    },
    {
      t:'Automatismo: generar el propio impulso',
      p:[
        'Tanto el músculo cardíaco (en el nodo sinusal) como cierto músculo liso (en el intestino, por ejemplo) tienen *automatismo*: la capacidad de generar su propio impulso eléctrico rítmico, sin necesitar un estímulo nervioso externo para empezar a contraerse. El sistema nervioso autónomo no INICIA esa actividad, sino que la modula: la acelera, la frena o ajusta su fuerza.',
        'Ejemplo trabajado: un corazón trasplantado, sin ninguna conexión nerviosa al cuerpo del receptor, sigue latiendo por sí solo gracias a ese automatismo intrínseco del nodo sinusal; lo que pierde es la capacidad de ajustar el ritmo tan rápido ante el ejercicio o el estrés, porque le falta la modulación nerviosa (aunque las hormonas circulantes, como la adrenalina, sí pueden seguir influyendo sobre él).'
      ],
      foco:[
        'El músculo esquelético NO tiene automatismo ni uniones en hendidura funcionales entre fibras: cada fibra depende de su propia neurona motora. Esa es la diferencia funcional más importante entre los tres tipos de músculo.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 8-9.'
},

'sangre-elementos-formes-hemostasia': {
  tema:'Sangre: elementos formes y hemostasia',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:7,
  idea:'La sangre no es solo un líquido que transporta oxígeno: es un tejido, con células suspendidas en un plasma, y uno de sus trabajos más críticos es saber taponarse a sí misma cuando un vaso se rompe, sin coagularse dentro del vaso cuando no hace falta.',
  claves:['eritrocito','hematocrito','plaqueta','coagulación','hemoglobina'],
  sigue:'sna-fisiologia-i',
  secciones:[
    {
      t:'Las tres líneas celulares de la sangre',
      p:[
        'La sangre tiene tres tipos de elementos formes. Los *eritrocitos* (glóbulos rojos) transportan oxígeno gracias a la *hemoglobina*, una proteína que se une reversiblemente al oxígeno en el pulmón y lo libera en los tejidos. El *hematocrito* es el porcentaje del volumen sanguíneo total que ocupan los eritrocitos (normalmente 40-50% en el hombre, algo menos en la mujer); un hematocrito bajo sugiere anemia, uno alto sugiere policitemia o deshidratación.',
        'Los glóbulos blancos (leucocitos) forman parte de la defensa inmunitaria. Las *plaquetas* (fragmentos celulares sin núcleo, derivados de los megacariocitos de la médula ósea) son las responsables centrales de la *hemostasia*: el proceso que detiene el sangrado cuando un vaso se lesiona.'
      ]
    },
    {
      t:'Hemostasia: tapón plaquetario y coagulación',
      p:[
        'Cuando un vaso se rompe, ocurre primero la vasoconstricción local (el vaso se estrecha para reducir el flujo), después las plaquetas se adhieren al sitio de la lesión y entre ellas, formando el *tapón plaquetario* (hemostasia primaria), y finalmente se activa la cascada de *coagulación* (hemostasia secundaria), una serie de proteínas plasmáticas (factores de coagulación) que terminan formando una red de fibrina que refuerza ese tapón, transformándolo en un coágulo estable.',
        'Ejemplo trabajado: un paciente con muy pocas plaquetas (trombocitopenia) tiende a sangrar en superficies —petequias, sangrado de encías— porque falla la hemostasia primaria, el tapón inicial. Un paciente con un factor de coagulación deficiente (como en la hemofilia) puede formar el tapón plaquetario inicial sin problema, pero sangra tarde y de forma más profunda —en articulaciones, en músculos— porque falla la fase de estabilización con fibrina.'
      ],
      foco:[
        'Que un paciente sangre "en la piel" (petequias, equimosis fáciles) orienta hacia un problema plaquetario; que sangre "profundo" (hemartrosis, hematomas musculares) orienta hacia un problema de los factores de coagulación. Es una distinción clínica útil que nace directamente de estas dos fases de la hemostasia.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 32 y 36.'
},

'sna-fisiologia-i': {
  tema:'Fisiología del sistema nervioso autónomo',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:8,
  idea:'El sistema nervioso autónomo controla, sin que lo pienses, tu frecuencia cardíaca, tu digestión y el calibre de tus vasos sanguíneos. Tiene dos ramas que generalmente actúan como el acelerador y el freno de un mismo sistema, no como interruptores independientes.',
  claves:['simpático','parasimpático','adrenérgico','colinérgico','receptor'],
  sigue:'potenciales-postsinapticos',
  secciones:[
    {
      t:'Simpático y parasimpático: dos ramas, efectos generalmente opuestos',
      p:[
        'El sistema nervioso *simpático* se activa en situaciones de alerta, esfuerzo o estrés (la clásica respuesta de "lucha o huida"): acelera la frecuencia cardíaca, dilata las pupilas, redirige la sangre hacia los músculos y el corazón (a costa del tracto digestivo), y en general prepara al cuerpo para la acción. El sistema *parasimpático* domina en situaciones de reposo ("descansar y digerir"): reduce la frecuencia cardíaca, estimula la digestión, contrae las pupilas.',
        'Casi todos los órganos con inervación autónoma reciben fibras de ambos sistemas, con efectos generalmente opuestos, funcionando como un acelerador y un freno sobre el mismo control: no es que "uno se apaga y el otro se prende", sino que el balance entre ambos determina el estado del órgano en cada momento.'
      ]
    },
    {
      t:'Los neurotransmisores y sus receptores',
      p:[
        'El sistema parasimpático usa acetilcolina como neurotransmisor en su última sinapsis (con el órgano efector), actuando sobre receptores *colinérgicos* (muscarínicos, en este caso). El sistema simpático usa principalmente noradrenalina en su última sinapsis, actuando sobre receptores *adrenérgicos* (alfa y beta, con subtipos y efectos distintos según el órgano y el subtipo de receptor presente).',
        'Ejemplo trabajado: en el corazón predominan los receptores beta-1 adrenérgicos, cuya activación aumenta la frecuencia y la fuerza de contracción; por eso un fármaco "betabloqueante" (que bloquea esos receptores) reduce la frecuencia cardíaca, imitando en parte el efecto del sistema parasimpático al quitarle el "empuje" simpático constante.'
      ],
      foco:[
        'Toda la médula suprarrenal es, en esencia, una neurona simpática modificada que en vez de liberar su neurotransmisor en una sinapsis, lo libera directamente a la sangre (como hormona: adrenalina y algo de noradrenalina), amplificando el efecto simpático a todo el cuerpo a la vez.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 60.'
},

'potenciales-postsinapticos': {
  tema:'Potenciales postsinápticos excitatorios e inhibitorios',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:7,
  idea:'Cada neurona en el cerebro recibe, al mismo tiempo, miles de señales que la empujan a dispararse y miles que la empujan a quedarse callada. Que finalmente dispare o no depende de una suma constante de esos empujones en direcciones opuestas, no de una sola señal decisiva.',
  claves:['PPSE','PPSI','sumación espacial','sumación temporal','inhibición presináptica'],
  sigue:null,
  secciones:[
    {
      t:'Dos tipos de respuesta postsináptica',
      p:[
        'Cuando un neurotransmisor se une a un receptor en la neurona siguiente (postsináptica), puede producir dos tipos de efecto. Un *potencial postsináptico excitatorio* (PPSE) despolariza ligeramente la membrana, acercándola al umbral: hace más probable que la neurona dispare un potencial de acción. Un *potencial postsináptico inhibitorio* (PPSI) hiperpolariza la membrana, alejándola del umbral: hace menos probable que dispare.',
        'A diferencia del potencial de acción (que es todo o nada), estos potenciales postsinápticos son graduados: su tamaño depende de cuánto neurotransmisor se liberó y de cuántos receptores se activaron. Y, a diferencia del potencial de acción, no viajan lejos: se van debilitando con la distancia, así que necesitan sumarse cerca del cuerpo neuronal para tener efecto.'
      ]
    },
    {
      t:'Cómo se suman: la neurona como un integrador',
      p:[
        'Una neurona típica recibe, al mismo tiempo, señales excitatorias e inhibitorias desde miles de sinapsis distintas. La *sumación espacial* es cuando varias señales que llegan de sitios distintos de la neurona, al mismo tiempo, se suman entre sí. La *sumación temporal* es cuando señales que llegan del mismo sitio, pero en sucesión rápida, se suman porque la primera no ha terminado de disiparse cuando llega la segunda.',
        'Ejemplo trabajado: si en un instante dado la suma total de PPSE menos PPSI en el cuerpo neuronal alcanza el umbral, la neurona dispara un potencial de acción; si no lo alcanza, no dispara, sin importar que haya recibido muchísima actividad sináptica. La neurona funciona, en ese sentido, como un integrador constante de "votos a favor y en contra" de disparar.'
      ],
      foco:[
        'La *inhibición presináptica* es un mecanismo distinto: una tercera neurona hace sinapsis sobre el propio botón terminal de la neurona presináptica, reduciendo cuánto neurotransmisor libera hacia la neurona siguiente, sin cambiar directamente el potencial de esa neurona siguiente.'
      ]
    }
  ],
  ref:'Kandel, Principios de Neurociencia, cap. 12.'
},

'reflejos-espinales': {
  tema:'Reflejos espinales',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:6,
  idea:'Cuando el médico te golpea el tendón rotuliano con un martillo y la pierna se extiende sola, ese movimiento no pasó por el cerebro: se decidió por completo en la médula espinal, en el tiempo que le toma a una sola sinapsis procesar la señal.',
  claves:['arco reflejo','reflejo miotático','reflejo de estiramiento','huso muscular','órgano tendinoso de Golgi'],
  sigue:'reflejos-espinales-2',
  secciones:[
    {
      t:'El arco reflejo: la ruta más corta posible',
      p:[
        'Un *arco reflejo* es el circuito nervioso más simple posible: un receptor sensitivo detecta un estímulo, una neurona sensitiva lleva esa información a la médula espinal, ahí hace sinapsis (directamente, o a través de una interneurona) con una neurona motora, que dispara una respuesta muscular, sin necesitar que la señal suba hasta el cerebro y regrese. Esa ruta corta es lo que hace que un reflejo sea tan rápido: menos sinapsis, menos distancia, menos tiempo.',
        'El *reflejo miotático* (o reflejo de estiramiento), el ejemplo clásico, es el reflejo rotuliano: al golpear el tendón, el músculo se estira bruscamente, el *huso muscular* (un receptor sensitivo dentro del propio músculo que detecta el estiramiento) manda esa señal directamente a la médula, y ahí hace sinapsis directa (monosináptica, sin interneurona) con la neurona motora del MISMO músculo, que se contrae en respuesta al estiramiento.'
      ]
    },
    {
      t:'Por qué existe: proteger al músculo de un estiramiento excesivo',
      p:[
        'El propósito de este reflejo es proteger al músculo de un estiramiento demasiado rápido o demasiado grande, contrayéndolo automáticamente para resistir ese estiramiento, sin esperar la lentitud de una decisión consciente. Es el mismo mecanismo que te ayuda a no caerte cuando alguien te empuja levemente: los músculos que se estiran de golpe se contraen solos para restaurar la postura.'
      ],
      foco:[
        'El *órgano tendinoso de Golgi*, en el tendón (no en el músculo), hace el trabajo contrario al huso muscular: detecta TENSIÓN excesiva (no estiramiento) y, cuando es muy alta, dispara un reflejo que RELAJA el músculo, protegiéndolo de una contracción tan fuerte que podría dañar el propio tendón.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 55.'
},

'reflejos-espinales-2': {
  tema:'Unidad motora y reclutamiento',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:6,
  idea:'Cuando levantas un lápiz no usas la misma cantidad de "músculo" que cuando levantas una maleta pesada, aunque sea el mismo bíceps. El cuerpo regula la fuerza de una contracción activando más o menos unidades motoras, no haciendo que cada una jale más fuerte.',
  claves:['unidad motora','reclutamiento','fibra tipo I','fibra tipo II','fatiga muscular'],
  sigue:null,
  secciones:[
    {
      t:'Qué es una unidad motora',
      p:[
        'Una *unidad motora* es una neurona motora junto con TODAS las fibras musculares que inerva: cuando esa neurona dispara, todas sus fibras se contraen a la vez, como una sola unidad funcional. El tamaño de una unidad motora varía mucho según la precisión que necesite ese músculo: los músculos que mueven los ojos tienen unidades motoras muy pequeñas (pocas fibras por neurona, para un control fino), mientras que un músculo grande como el cuádriceps tiene unidades motoras enormes (cientos de fibras por neurona, priorizando fuerza sobre precisión).'
      ]
    },
    {
      t:'Reclutamiento: cómo se gradúa la fuerza',
      p:[
        'Para producir más fuerza, el cuerpo no hace que cada fibra se contraiga "más fuerte" (una fibra individual se contrae al máximo o no se contrae, siguiendo la misma lógica de todo o nada del potencial de acción); en cambio, activa MÁS unidades motoras a la vez, un proceso llamado *reclutamiento*. Las unidades motoras pequeñas (con fibras tipo I, de contracción lenta y resistentes a la fatiga) se reclutan primero, para movimientos finos o de baja fuerza; las unidades motoras grandes (con fibras tipo II, de contracción rápida pero que se fatigan antes) se reclutan solo cuando se necesita más fuerza.',
        'Ejemplo trabajado: al levantar un lápiz, solo se reclutan unas pocas unidades motoras pequeñas; al levantar una maleta pesada, se reclutan progresivamente más y más unidades, incluidas las grandes, hasta lograr la fuerza necesaria. Esto también explica por qué un ejercicio de mucha fuerza (pocas repeticiones, mucho peso) fatiga distinto que uno de resistencia (muchas repeticiones, poco peso): reclutan proporciones distintas de fibras tipo I y tipo II.'
      ],
      foco:[
        'Las fibras tipo I ("de contracción lenta") tienen más mitocondrias y mioglobina, y dependen del metabolismo aeróbico: por eso resisten mucho tiempo sin fatigarse, pero no son las más potentes. Las fibras tipo II dependen más del metabolismo anaeróbico: son más potentes y rápidas, pero se fatigan antes.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 6.'
},

'dolor-nocicepcion': {
  tema:'Fisiología del dolor y nocicepción',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:7,
  idea:'El dolor no es simplemente "lo que pasa cuando algo daña al cuerpo": es una señal construida por el sistema nervioso a partir de receptores específicos, vías específicas y, al final, una interpretación que el propio cerebro puede modular hacia arriba o hacia abajo.',
  claves:['nociceptor','fibra A delta','fibra C','sustancia gelatinosa','vía del dolor'],
  sigue:null,
  secciones:[
    {
      t:'Los receptores del dolor y sus dos tipos de fibra',
      p:[
        'Los *nociceptores* son terminaciones nerviosas libres, especializadas en detectar estímulos potencialmente dañinos: mecánicos intensos, temperaturas extremas, o sustancias químicas liberadas por el propio tejido dañado (como la bradicinina o las prostaglandinas). A diferencia de otros receptores sensitivos, casi no se adaptan: siguen señalizando mientras el estímulo dañino persista, lo cual tiene sentido biológico —un dolor que "se acostumbra" y desaparece dejaría de cumplir su función de advertencia.',
        'La señal de dolor viaja por dos tipos de fibra, con velocidades distintas, y eso explica una experiencia común: al golpearte un dedo, primero sientes un dolor agudo, bien localizado (por las fibras *A delta*, mielinizadas, rápidas), y unos instantes después un dolor sordo, difuso y más prolongado (por las fibras *C*, no mielinizadas, mucho más lentas). Es literalmente el mismo estímulo llegando al cerebro en dos oleadas distintas.'
      ]
    },
    {
      t:'El cerebro puede regular su propio volumen de dolor',
      p:[
        'La información de dolor entra a la médula espinal y hace sinapsis en una zona llamada *sustancia gelatinosa*, donde ya empieza a modularse: no toda la información nociceptiva llega al cerebro con la misma intensidad con la que entró. El propio sistema nervioso central tiene vías descendentes (que bajan desde el tronco encefálico) capaces de inhibir esa transmisión en la médula, reduciendo la percepción del dolor —el mecanismo detrás de por qué, en situaciones de estrés extremo o lesión grave (un accidente, una batalla), algunas personas no sienten el dolor de inmediato, aunque la lesión sea real y severa.'
      ],
      foco:[
        'Consideración clínica: esta modulación descendente es, en parte, el mecanismo por el cual actúan los opioides: no bloquean los nociceptores periféricos, sino que potencian las vías inhibitorias descendentes y reducen la transmisión del dolor a nivel espinal y central.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 49.'
},

'regulacion-temperatura-corporal': {
  tema:'Regulación de la temperatura corporal',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:6,
  idea:'La fiebre no es un fallo del termostato del cuerpo: es el termostato funcionando perfectamente, solo que reprogramado temporalmente a un punto más alto. Esa distinción, aunque parezca sutil, cambia por completo cómo se interpreta un paciente febril.',
  claves:['termorregulación','centro termorregulador','vasoconstricción cutánea','escalofrío','punto de ajuste'],
  sigue:null,
  secciones:[
    {
      t:'El termostato hipotalámico',
      p:[
        'La temperatura corporal se mantiene alrededor de 37°C gracias a un *centro termorregulador* en el hipotálamo, que compara la temperatura real de la sangre (detectada por receptores en el propio hipotálamo y en la piel) contra un *punto de ajuste* interno, y activa mecanismos para corregir cualquier diferencia: es el mismo principio de retroalimentación negativa visto en el tema de homeostasis, aplicado específicamente a la temperatura.',
        'Si la temperatura sube por encima del punto de ajuste, el cuerpo activa la sudoración y la vasodilatación cutánea (más sangre cerca de la piel, para perder calor por radiación). Si baja por debajo del punto de ajuste, activa la *vasoconstricción cutánea* (para conservar calor, retirando sangre de la piel) y el *escalofrío* (contracciones musculares rápidas e involuntarias que generan calor como subproducto de la actividad muscular).'
      ]
    },
    {
      t:'Fiebre: el punto de ajuste, no el termómetro, es lo que cambia',
      p:[
        'Ciertas sustancias (pirógenos, liberadas durante una infección o inflamación) actúan sobre el hipotálamo y SUBEN el punto de ajuste, por ejemplo de 37°C a 39°C. En ese momento, aunque la temperatura corporal siga en 37°C, el hipotálamo la "siente" como si estuviera baja respecto al nuevo punto de ajuste, y activa vasoconstricción y escalofrío —por eso un paciente que está empezando a hacer fiebre siente FRÍO y tiembla, aunque su temperatura ya esté subiendo o incluso ya esté alta: su cuerpo todavía está tratando de alcanzar el nuevo punto de ajuste, más alto.',
        'Una vez que la temperatura alcanza ese nuevo punto de ajuste más alto, el paciente deja de tener escalofríos y puede incluso sentir calor. Y cuando el proceso que causó la fiebre cede y el punto de ajuste vuelve a bajar a 37°C, el cuerpo hace lo contrario: suda profusamente para perder el exceso de calor que ya no necesita, hasta volver a la temperatura normal.'
      ],
      foco:[
        'Consideración clínica: esto explica por qué cubrir con muchas mantas a alguien que tiembla de frío al empezar una fiebre no está mal —su cuerpo está tratando de subir la temperatura hacia el nuevo punto de ajuste—, mientras que lo mismo durante la fase de sudoración (cuando el cuerpo ya está bajando la temperatura) sería contraproducente.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 74.'
},

'liquido-cefalorraquideo': {
  tema:'Fisiología del líquido cefalorraquídeo',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:6,
  idea:'El cerebro flota, literalmente, dentro de un líquido que lo protege de golpes y que además le sirve de sistema de limpieza, sin tener vasos linfáticos propios como el resto del cuerpo.',
  claves:['líquido cefalorraquídeo','plexo coroideo','presión intracraneal','barrera hematoencefálica'],
  sigue:null,
  secciones:[
    {
      t:'Dónde se produce y qué función cumple',
      p:[
        'El *líquido cefalorraquídeo* (LCR) se produce principalmente en el *plexo coroideo*, una estructura vascular dentro de los ventrículos cerebrales, por filtración y secreción activa desde la sangre. Circula por el sistema ventricular, sale hacia el espacio subaracnoideo (entre las meninges), baña la superficie del cerebro y la médula espinal, y finalmente se reabsorbe de vuelta a la sangre.',
        'Cumple tres funciones principales: amortiguar mecánicamente al cerebro (el cerebro literalmente "flota" en el LCR, lo que reduce enormemente el peso efectivo que ejerce sobre su propia base, y absorbe parte del impacto de un golpe en la cabeza), servir de vía de eliminación de productos de desecho del metabolismo cerebral, y mantener un ambiente químico estable alrededor de las neuronas, un poco distinto al del resto del plasma sanguíneo.'
      ]
    },
    {
      t:'Presión intracraneal: un espacio que no se puede expandir',
      p:[
        'El cráneo es una caja rígida de volumen fijo, ocupada por tres componentes: tejido cerebral, sangre y LCR. Si el volumen de cualquiera de los tres aumenta (por ejemplo, LCR acumulado en una hidrocefalia, o sangre en una hemorragia), y los otros dos no pueden reducirse lo suficiente para compensar, la *presión intracraneal* sube, porque no hay hacia dónde expandirse dentro de una caja rígida.',
        'Ejemplo trabajado: esto explica por qué una hemorragia intracraneal, aunque el volumen de sangre acumulado parezca pequeño comparado con el tamaño total del cráneo, puede ser rápidamente peligrosa: comprime al cerebro contra las paredes óseas y puede llegar a herniar tejido cerebral hacia zonas donde no debería estar, comprometiendo funciones vitales.'
      ],
      foco:[
        'La *barrera hematoencefálica* (uniones muy estrechas entre las células que forman los capilares cerebrales) protege al cerebro impidiendo el paso libre de muchas sustancias de la sangre, incluidos algunos fármacos: es una de las razones por las que ciertos medicamentos no llegan al sistema nervioso central aunque sí circulen bien por el resto del cuerpo.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 62.'
},

'fisiologia-cardiovascular-intro': {
  tema:'Introducción a la fisiología cardiovascular',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:7,
  idea:'Todo el sistema cardiovascular puede resumirse en una idea de plomería: el corazón es una bomba, los vasos son las tuberías, y la presión arterial es, ni más ni menos, el resultado de cuánto líquido bombea la bomba y cuánta resistencia oponen las tuberías. Ese marco simple, bien entendido, resuelve gran parte de la fisiología cardiovascular de 8vo.',
  claves:['gasto cardíaco','precarga','poscarga','presión arterial','resistencia periférica'],
  sigue:null,
  secciones:[
    {
      t:'Gasto cardíaco: cuánto bombea el corazón por minuto',
      p:[
        'El *gasto cardíaco* es el volumen de sangre que el corazón bombea por minuto, y se calcula como la frecuencia cardíaca multiplicada por el volumen sistólico (la cantidad de sangre que sale del corazón en cada latido). Si el corazón late más rápido, o si expulsa más sangre en cada latido, el gasto cardíaco sube.',
        'El volumen sistólico depende, a su vez, de tres factores: la *precarga* (cuánto se estira el músculo cardíaco antes de contraerse, determinada por cuánta sangre llega al corazón para llenarlo), la contractilidad (qué tan fuerte se contrae el músculo cardíaco, independiente del estiramiento), y la *poscarga* (la resistencia que el corazón tiene que vencer para expulsar la sangre, determinada principalmente por la presión en las arterias contra las que tiene que bombear).'
      ]
    },
    {
      t:'Presión arterial: el producto de dos factores',
      p:[
        'La *presión arterial* depende, de forma simplificada, de dos factores: el gasto cardíaco (cuánta sangre se bombea por minuto) y la *resistencia periférica* (qué tan estrechos están los vasos sanguíneos, sobre todo las arteriolas pequeñas, que oponen la mayor parte de la resistencia al flujo). Presión arterial es, aproximadamente, gasto cardíaco multiplicado por resistencia periférica.',
        'Ejemplo trabajado: esta relación explica por qué la presión arterial puede subir por dos caminos completamente distintos, con implicaciones de tratamiento distintas. Puede subir porque el corazón bombea más (gasto cardíaco alto, por ejemplo por retención de líquido y volumen circulante aumentado) o porque los vasos están más contraídos (resistencia periférica alta, por ejemplo por vasoconstricción excesiva). Los fármacos antihipertensivos, en general, actúan sobre uno u otro de estos dos factores —diuréticos reduciendo el volumen (y con él, el gasto), vasodilatadores reduciendo la resistencia.'
      ],
      foco:[
        'Este marco (gasto cardíaco × resistencia periférica) es la base sobre la que se construye TODA la fisiología cardiovascular más detallada de Fisiología II en 8vo: conviene dejarlo bien afianzado antes de avanzar.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 14.'
}

});
