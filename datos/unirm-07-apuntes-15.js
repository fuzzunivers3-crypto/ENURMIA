/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 15)
   AMPLIACIÓN de Fisiología I, tercera parte: reflejos espinales,
   unidad motora, dolor, temperatura y líquido cefalorraquídeo.
   Cierra la materia: la cadena de `sigue` termina en el líquido
   cefalorraquídeo. Mismas claves de objeto que los apuntes
   originales; el campo `tema` no cambia.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'reflejos-espinales': {
  tema:'Reflejos espinales',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:13,
  idea:'Un reflejo es una respuesta automática, rápida y estereotipada a un estímulo, y se resuelve en la médula espinal sin pasar por el cerebro. Los reflejos protegen el cuerpo, mantienen el tono muscular y, en la exploración neurológica, permiten localizar una lesión con solo un martillo.',
  claves:['arco reflejo','reflejo miotático','reflejo de estiramiento','huso muscular','órgano tendinoso de Golgi'],
  sigue:'reflejos-espinales-2',
  secciones:[
    {
      t:'El arco reflejo: cinco piezas',
      p:[
        'Todo reflejo espinal recorre un mismo camino, el *arco reflejo*, formado por cinco elementos. Un *receptor* detecta el estímulo. Una *vía aferente* lleva la señal por el nervio sensitivo hasta la médula, entrando por la raíz dorsal. Un *centro integrador* en la médula procesa la información, mediante una o varias sinapsis. Una *vía eferente* sale por la raíz ventral, a través de una motoneurona. Y un *efector*, casi siempre un músculo, produce la respuesta.',
        'Lo que distingue a un reflejo de una acción voluntaria es que el arco se completa en la médula: la respuesta ocurre antes de que la información llegue a la corteza. Por eso ocurren de forma involuntaria, en milisegundos, y son tan estables que se pueden explorar incluso en un paciente inconsciente. El cerebro, sin embargo, no queda al margen: envía vías descendentes que modulan, con mayor o menor intensidad, la excitabilidad de estos arcos.'
      ],
      foco:[
        'Cuando tengas que describir un reflejo, sigue el arco en orden: receptor, aferente, integración, eferente, efector. Si ubicas en cuál pieza falla, ubicas la lesión.'
      ]
    },
    {
      t:'El reflejo miotático: el huso neuromuscular',
      p:[
        'El reflejo miotático, o de estiramiento, es el más simple y el más explorado. Su receptor es el *huso neuromuscular*, una cápsula de fibras musculares especializadas (fibras intrafusales) situada en paralelo con las fibras normales del músculo, y que detecta cuánto se estira. Cuando el músculo se alarga, el huso se estira y las fibras aferentes *Ia* aumentan su descarga. Estas fibras llegan a la médula y hacen sinapsis directa, sin interneuronas, con las *motoneuronas alfa* del mismo músculo, que lo contraen y se oponen al estiramiento.',
        'Es el único reflejo *monosináptico* del cuerpo, y por eso es tan rápido. Además, las fibras Ia activan por una vía adicional interneuronas inhibitorias que relajan el músculo antagonista: es la *inhibición recíproca*, que permite que el antagonista no oponga resistencia. Esto explica, por ejemplo, que al extenderse la rodilla por el reflejo rotuliano se relajen los isquiotibiales.',
        'Los husos tienen su propia inervación motora, las *motoneuronas gamma*, que contraen los extremos de las fibras intrafusales y mantienen el huso tenso y sensible incluso cuando el músculo se acorta. Durante una contracción voluntaria se activan alfa y gamma a la vez (coactivación alfa-gamma), y así el huso sigue informando. Este circuito es el que mantiene el *tono muscular* y ayuda a conservar la postura sin esfuerzo consciente.'
      ],
      foco:[
        'Huso neuromuscular = mide la LONGITUD del músculo y desencadena su contracción. Es el receptor del reflejo miotático (monosináptico, fibras Ia, motoneurona alfa).'
      ]
    },
    {
      t:'El órgano tendinoso de Golgi y los reflejos de defensa',
      p:[
        'El *órgano tendinoso de Golgi* está en la unión del músculo con el tendón, en serie con las fibras musculares, y detecta la *tensión*. Cuando el músculo se contrae con mucha fuerza y la tensión se vuelve excesiva, las fibras *Ib* activan interneuronas inhibitorias que relajan ese mismo músculo: es el *reflejo miotático inverso* o inhibición autógena. Protege al músculo y al tendón de la rotura, y explica por qué, en un pulso, el brazo puede "ceder" de repente cuando se supera cierto umbral de fuerza.',
        'El *reflejo flexor*, o de retirada, se dispara ante un estímulo doloroso (por ejemplo, pisar un clavo). Es *polisináptico*: la señal de los nociceptores llega a interneuronas que activan los flexores de esa extremidad y relajan los extensores, y el miembro se aparta. Suele acompañarse del *reflejo extensor cruzado*: los extensores del miembro contrario se contraen para sostener el peso del cuerpo. Combina protección y equilibrio en una sola respuesta.'
      ],
      foco:[
        'Huso = longitud, contrae. Golgi = tensión, relaja. Flexor = dolor, retira. Con los tres receptores y respuestas puedes resolver casi cualquier pregunta de reflejos.'
      ]
    },
    {
      t:'Los reflejos en la exploración clínica',
      p:[
        '*Consideración clínica*: los reflejos tendinosos se exploran con el martillo, comparando ambos lados. El *rotuliano* depende de los segmentos L2-L4 (nervio femoral); el *aquíleo*, de S1; el *bicipital*, de C5-C6; y el *tricipital*, de C7. Se gradúan de ausente a exaltado. Cada uno explora un segmento medular concreto y su nervio periférico, y por eso permiten ubicar una lesión.',
        'Si el arco está dañado en cualquier pieza (nervio, raíz o motoneurona), el reflejo disminuye o desaparece: es la *hiporreflexia* o arreflexia que se ve en la neuropatía periférica y en las lesiones de la motoneurona inferior, acompañada de flacidez y atrofia. Si se interrumpe la influencia inhibitoria que baja desde el cerebro sobre la médula, los reflejos se exaltan: *hiperreflexia*, espasticidad, clono y signo de Babinski, típicos de las lesiones de la motoneurona superior (por ejemplo, tras un ictus).',
        'Ejemplo trabajado: un hombre de 68 años llega con debilidad del brazo y la pierna derechos, reflejos exaltados, tono aumentado y signo de Babinski. Es un síndrome de motoneurona superior, y sugiere una lesión central (un accidente cerebrovascular). En otro paciente, con debilidad, atrofia y ausencia de reflejos en una pierna, el problema está en el nervio o en la raíz. Entender el arco reflejo transforma un martillazo en información diagnóstica.',
        'Un detalle importante: tras una lesión medular aguda, por debajo de la lesión, hay un periodo de *shock espinal* con flacidez y arreflexia que dura días o semanas; después reaparecen los reflejos, y lo hacen exaltados, porque desaparece el control descendente.'
      ],
      foco:[
        'Motoneurona inferior = flacidez, atrofia, arreflexia. Motoneurona superior = espasticidad, hiperreflexia, Babinski. Es la tabla más útil de la neurología básica.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 55.'
},

'reflejos-espinales-2': {
  tema:'Unidad motora y reclutamiento',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:12,
  idea:'La unidad motora es la unidad mínima de control del movimiento: una motoneurona y todas las fibras que inerva. El cuerpo gradúa la fuerza sumando unidades motoras en un orden fijo, de las más pequeñas y resistentes a las más grandes y potentes, y esa lógica explica desde la precisión de un gesto hasta la fatiga.',
  claves:['unidad motora','reclutamiento','fibra tipo I','fibra tipo II','fatiga muscular'],
  sigue:'dolor-nocicepcion',
  secciones:[
    {
      t:'Qué es una unidad motora',
      p:[
        'Una *unidad motora* está formada por una motoneurona alfa del asta ventral de la médula, su axón y todas las fibras musculares que inerva. Cuando la motoneurona dispara, todas sus fibras se contraen a la vez. Es, por tanto, la unidad funcional más pequeña que se puede activar de forma independiente.',
        'El tamaño de una unidad motora, es decir, cuántas fibras controla cada neurona, varía enormemente según la función del músculo. Los músculos que necesitan movimientos precisos, como los extraoculares, tienen unidades de tres a diez fibras por neurona; los músculos que necesitan fuerza más que precisión, como el gastrocnemio, tienen unidades de mil o dos mil fibras. Por eso es posible mover el ojo con enorme finura, pero no se puede modular con esa exactitud la fuerza de la pantorrilla.',
        'Todas las fibras de una misma unidad son del mismo tipo, y ese tipo lo determina la motoneurona que las inerva. Si se cambia la inervación, la fibra cambia de tipo: la neurona "imprime" sus propiedades sobre el músculo.'
      ],
      foco:[
        'Unidad pequeña = control fino (ojo, mano). Unidad grande = fuerza gruesa (glúteo, pantorrilla). Es una pregunta de comprensión que se resuelve con el sentido común.'
      ]
    },
    {
      t:'Los tipos de fibra muscular',
      p:[
        'Las fibras de *tipo I*, u oxidativas lentas, contienen mucha mioglobina, abundantes mitocondrias y capilares, y su miosina hidroliza el ATP despacio. Generan poca fuerza, pero se contraen durante mucho tiempo sin fatigarse. Son las fibras de la postura y del ejercicio de resistencia; se ven rojas por su alto contenido de mioglobina. Las fibras de *tipo IIx*, glucolíticas rápidas, tienen pocas mitocondrias y mucho glucógeno, y su miosina es muy rápida: producen gran fuerza en poco tiempo pero se fatigan enseguida; son claras. Las fibras de *tipo IIa*, oxidativas-glucolíticas rápidas, tienen propiedades intermedias.',
        'Las unidades motoras se clasifican según lo que hacen: las *lentas* (tipo I) son pequeñas y resistentes; las *rápidas resistentes a la fatiga* (tipo IIa) son intermedias; las *rápidas fatigables* (tipo IIx) son grandes y potentes. Cada músculo contiene una mezcla, cuyas proporciones dependen de su función y, en parte, de la genética: un fondista de élite suele tener mayoría de fibras tipo I; un velocista, mayoría de tipo II. El entrenamiento puede modificar la capacidad oxidativa, pero no cambia por completo el reparto de tipos.'
      ],
      foco:[
        'Tipo I: lentas, rojas, oxidativas, resistentes. Tipo II: rápidas, claras, glucolíticas, potentes, fatigables. Si asocias cada tipo con su deporte, las propiedades salen solas.'
      ]
    },
    {
      t:'El reclutamiento: cómo se gradúa la fuerza',
      p:[
        'El sistema nervioso tiene dos herramientas para graduar la fuerza. La primera es el *reclutamiento*, que consiste en activar más unidades motoras. La segunda es la *sumación de frecuencia*, aumentar la frecuencia con que dispara cada motoneurona, lo que fusiona las sacudidas en una contracción sostenida y más fuerte. Ambas se combinan en cada movimiento.',
        'El reclutamiento sigue un orden fijo, el *principio del tamaño de Henneman*: las motoneuronas pequeñas, con menor umbral, se activan primero; a medida que se necesita más fuerza, se suman motoneuronas cada vez mayores. Por tanto, las unidades de tipo I se reclutan primero, y las de tipo IIx, solo en los esfuerzos intensos. El orden es económico: para tareas suaves se usan las unidades que gastan poco y no se cansan; las potentes y fatigables se reservan para lo que de verdad lo exige.',
        'Este orden tiene ventajas prácticas. Permite que un aumento pequeño de la señal nerviosa produzca aumentos suaves y graduales de fuerza, sin saltos bruscos, y garantiza que las unidades que más se usan sean las más resistentes. Un ejemplo es la marcha, que usa casi solo fibras tipo I y por eso se puede sostener horas.'
      ],
      foco:[
        'Reclutamiento: primero las pequeñas y lentas, después las grandes y rápidas. Nunca al revés. Si te preguntan "en qué orden", responde "de menor a mayor tamaño".'
      ]
    },
    {
      t:'Fatiga y enfermedades de la unidad motora',
      p:[
        'La *fatiga muscular* es la disminución de la capacidad de generar fuerza tras una actividad prolongada. Tiene componentes periféricos (agotamiento de la fosfocreatina y del glucógeno, acumulación de fosfato inorgánico y de protones, alteración de la liberación de calcio) y centrales (disminución del impulso desde el sistema nervioso). Las fibras de tipo IIx se fatigan en segundos a minutos; las de tipo I, en horas.',
        '*Consideración clínica*: la lesión de una unidad motora en cualquiera de sus partes produce cuadros característicos. Si se daña la motoneurona o su axón, las fibras quedan *denervadas*: se paralizan, se atrofian y presentan fasciculaciones (contracciones espontáneas visibles). En la esclerosis lateral amiotrófica degeneran las motoneuronas superiores e inferiores y el paciente pierde fuerza de forma progresiva. En una neuropatía periférica, el nervio no conduce bien; en las miopatías, en cambio, el problema está en la fibra muscular y los reflejos suelen conservarse hasta fases tardías.',
        'Cuando una motoneurona muere, las neuronas vecinas pueden emitir ramas nuevas y reinervar las fibras huérfanas, con lo que las unidades motoras que sobreviven se hacen más grandes. Ese mecanismo compensa la pérdida durante un tiempo y explica que los síntomas de enfermedades como la poliomielitis o la ELA aparezcan solo cuando se ha perdido gran parte de las neuronas. La electromiografía muestra estas unidades gigantes y permite distinguir un problema neurogénico de uno miopático.'
      ],
      foco:[
        'Denervación = parálisis + atrofia + fasciculaciones. Es el sello de la lesión de la motoneurona inferior, y de la unidad motora en general.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 6 y 54.'
},

'dolor-nocicepcion': {
  tema:'Fisiología del dolor y nocicepción',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:14,
  idea:'El dolor es una experiencia que avisa de que algo daña el cuerpo, y por eso su fisiología está diseñada para ser difícil de ignorar. Conocer las fibras, las vías y los mecanismos que lo modulan es la base de la analgesia y del diagnóstico de muchos cuadros.',
  claves:['nociceptor','fibra A delta','fibra C','sustancia gelatinosa','vía del dolor'],
  sigue:'regulacion-temperatura-corporal',
  secciones:[
    {
      t:'Los nociceptores y sus fibras',
      p:[
        'La *nocicepción* es la detección de estímulos que dañan o pueden dañar los tejidos, y se realiza mediante *nociceptores*, terminaciones nerviosas libres que se distribuyen por la piel, los músculos, las articulaciones y las vísceras. Los hay mecánicos (estímulos intensos), térmicos (calor superior a unos 43 °C, o frío extremo) y polimodales, que responden a varios tipos de estímulo, incluidas sustancias químicas. Casi no se adaptan: mientras dure el daño, siguen disparando, y eso tiene sentido, porque un dolor que "se acostumbra" no serviría de advertencia.',
        'Sus axones son de dos tipos. Las fibras *A delta* son finas y mielinizadas, y conducen a unos 5-30 m/s: transmiten el *dolor rápido*, agudo, punzante y bien localizado. Las fibras *C* son más finas y amielínicas, y conducen a menos de 2 m/s: transmiten el *dolor lento*, sordo, quemante y difuso. Por la diferencia de velocidad, ante una lesión se siente primero el pinchazo y, segundos después, la molestia persistente.',
        'El tejido dañado libera un "cóctel" de mediadores, como bradicinina, prostaglandinas, histamina, potasio, protones y sustancia P, que activan y *sensibilizan* a los nociceptores: bajan su umbral y los hacen responder más. Es la *hiperalgesia* que se nota alrededor de una quemadura. Los receptores TRPV1 detectan el calor y también la capsaicina, la sustancia picante del chile, y por eso el chile "quema".'
      ],
      foco:[
        'A delta = mielinizadas, rápidas, dolor agudo y localizado. C = amielínicas, lentas, dolor sordo y difuso. Las prostaglandinas sensibilizan al nociceptor, y por eso los AINE alivian el dolor.'
      ]
    },
    {
      t:'La vía del dolor: de la piel a la corteza',
      p:[
        'Los cuerpos celulares de las neuronas nociceptivas están en los ganglios de la raíz dorsal. Su axón entra a la médula y hace sinapsis en el asta dorsal, en las láminas superficiales (la lámina I y la *sustancia gelatinosa*, o lámina II) y en la lámina V, con la segunda neurona. Allí se libera glutamato y sustancia P. La segunda neurona *cruza la línea media* en la comisura anterior de la médula y asciende por el lado opuesto en el *tracto espinotalámico* hasta el tálamo.',
        'Del tálamo, la tercera neurona lleva la información a la corteza somatosensitiva, que permite ubicar el dolor y medir su intensidad, y a regiones como la ínsula y el cíngulo, relacionadas con el componente emocional y afectivo (lo desagradable que resulta). Por eso el mismo estímulo puede doler más o menos según el estado emocional, la atención o las expectativas.',
        'Como las fibras cruzan a nivel de la médula, una lesión medular unilateral produce pérdida de dolor y temperatura en el lado *opuesto* del cuerpo, unos niveles por debajo de la lesión. En la siringomielia, la cavidad que se forma alrededor del canal central interrumpe justo esas fibras que cruzan, y el paciente pierde dolor y temperatura en los brazos, con tacto conservado: una "pérdida disociada de la sensibilidad" que es un clásico de los exámenes.'
      ],
      foco:[
        'Vía del dolor: nociceptor → asta dorsal → CRUZA en la médula → tracto espinotalámico → tálamo → corteza. La segunda neurona cruza a nivel de la médula, no en el bulbo.'
      ]
    },
    {
      t:'La modulación del dolor',
      p:[
        'El sistema nervioso no se limita a transmitir el dolor: también lo modula. La *teoría de la compuerta* de Melzack y Wall propone que las fibras táctiles gruesas (A beta) activan interneuronas inhibitorias en la sustancia gelatinosa, y estas reducen el paso de la información de las fibras A delta y C. Explica por qué frotarse un golpe alivia, y es el fundamento de la estimulación eléctrica transcutánea (TENS).',
        'Además existe un sistema *descendente* de analgesia. Desde la sustancia gris periacueductal del mesencéfalo, las señales bajan por los núcleos del rafe (serotonina) y el locus coeruleus (noradrenalina) hacia el asta dorsal, donde inhiben la transmisión del dolor. Este sistema funciona con opioides endógenos: las *endorfinas*, las *encefalinas* y las *dinorfinas*, que actúan sobre receptores opioides (el más importante es el mu). Explica que una persona herida en una emergencia o en el deporte pueda no sentir dolor hasta más tarde.',
        'La morfina y los demás opioides imitan a los opioides endógenos: se unen a los receptores mu de la sustancia gelatinosa y del tronco encefálico, y silencian la transmisión del dolor. Sus efectos secundarios (sedación, depresión respiratoria, estreñimiento) provienen de esos mismos receptores en otras zonas. Los antidepresivos que aumentan la serotonina y la noradrenalina, como la duloxetina, tienen efecto analgésico por potenciar esa vía descendente.'
      ],
      foco:[
        'Compuerta = A beta (tacto) inhibe el dolor en el asta dorsal. Vía descendente = sustancia gris periacueductal → rafe/locus coeruleus → asta dorsal, con endorfinas. Dos mecanismos, dos aplicaciones terapéuticas.'
      ]
    },
    {
      t:'Dolor referido, dolor neuropático y analgésicos',
      p:[
        '*Consideración clínica*: el dolor de las vísceras suele ser difuso y a veces se percibe en un lugar distinto al del órgano enfermo: es el *dolor referido*. Ocurre porque las fibras viscerales y las de una zona de la piel convergen sobre las mismas neuronas del asta dorsal, y el cerebro, acostumbrado a que la señal venga de la piel, la proyecta allí. Así, el infarto de miocardio puede doler en el brazo izquierdo y la mandíbula; la colecistitis, en el hombro derecho; la apendicitis inicial, alrededor del ombligo.',
        'El *dolor neuropático* surge de una lesión del propio sistema nervioso (neuropatía diabética, herpes zóster, lesión de un nervio) y se percibe como ardor o descargas eléctricas. Se acompaña de *alodinia* (dolor ante un estímulo normal, como el roce de la sábana) e *hiperalgesia*. Responde mal a los analgésicos comunes y mejor a anticonvulsivantes (gabapentina) y antidepresivos. El *miembro fantasma*, dolor percibido en una extremidad amputada, demuestra que el dolor es una construcción del sistema nervioso y no solo un reflejo del tejido.',
        'Los analgésicos actúan en distintos puntos de la vía. Los antiinflamatorios no esteroideos (AINE) inhiben la ciclooxigenasa y reducen las prostaglandinas que sensibilizan a los nociceptores. El paracetamol actúa sobre todo en el sistema nervioso central. Los opioides activan la modulación descendente. Y los anestésicos locales bloquean los canales de sodio y detienen la conducción en el nervio. Ejemplo: un paciente con cólico renal recibe un AINE, que reduce la síntesis de prostaglandinas en la vía urinaria, y un opioide si el dolor es intenso; cada fármaco corta el circuito en un punto diferente.'
      ],
      foco:[
        'Pregunta clave ante cualquier analgésico: ¿en qué punto de la vía actúa? Periferia (AINE, anestésicos locales), médula (opioides, compuerta) o centro (opioides, paracetamol, antidepresivos).'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 48 y 49.'
},

'regulacion-temperatura-corporal': {
  tema:'Regulación de la temperatura corporal',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:14,
  idea:'El ser humano es homeotermo: mantiene su temperatura central alrededor de los 37 °C aunque el ambiente cambie muchísimo. Lo logra equilibrando la producción y la pérdida de calor bajo el mando del hipotálamo, y entender ese equilibrio permite distinguir la fiebre de la hipertermia.',
  claves:['termorregulación','centro termorregulador','vasoconstricción cutánea','escalofrío','punto de ajuste'],
  sigue:'liquido-cefalorraquideo',
  secciones:[
    {
      t:'El balance de calor: producir y perder',
      p:[
        'La *temperatura central* (la de los órganos profundos) se mantiene en unos 37 °C, con variaciones de menos de un grado a lo largo del día: es más baja de madrugada y más alta por la tarde. La temperatura de la piel y de las extremidades, en cambio, cambia mucho con el ambiente. El cuerpo funciona como un "núcleo" caliente rodeado por una "cubierta" más fría.',
        'El calor se produce continuamente por el metabolismo: en reposo, sobre todo en el hígado, el corazón, el cerebro y el músculo en tono; y muchísimo más con el ejercicio, que puede multiplicar la producción por diez o más. Otros factores que aumentan la producción son las hormonas tiroideas, la adrenalina y la temperatura misma (cada grado de aumento eleva alrededor de un 10-13 % el metabolismo).',
        'Para mantener el equilibrio, el calor sobrante debe eliminarse. La sangre lo transporta desde el núcleo hasta la piel, y desde ahí se pierde al ambiente por cuatro vías: *radiación* (emisión de rayos infrarrojos, la vía más importante en reposo, con cerca del 60 %), *conducción* (contacto directo con superficies), *convección* (movimiento del aire que renueva la capa junto a la piel) y *evaporación* (el agua que pasa de líquido a vapor arrastra unas 0,58 kcal por gramo).'
      ],
      foco:[
        'Radiación, conducción y convección solo funcionan si el ambiente está más frío que el cuerpo. Cuando el ambiente es más caliente, la única vía que queda es la evaporación.'
      ]
    },
    {
      t:'El control hipotalámico',
      p:[
        'El termostato del cuerpo es el *hipotálamo*, sobre todo su área preóptica. Allí hay neuronas que detectan la temperatura de la sangre que las baña y reciben además la información de los termorreceptores de la piel y de otros órganos. Comparan la temperatura real con un valor de referencia, el *punto de ajuste* (unos 37 °C), y activan las respuestas necesarias para corregir la diferencia.',
        'Si la temperatura sube, se activan los mecanismos de pérdida de calor: *vasodilatación cutánea*, que lleva más sangre a la piel y aumenta la radiación, y *sudoración*, que las glándulas sudoríparas producen por estímulo simpático colinérgico. También aparecen respuestas de conducta, como buscar sombra o quitarse la ropa. Si la temperatura baja, se activan los de conservación y producción de calor: *vasoconstricción cutánea*, que reduce el flujo hacia la piel; *piloerección*, poco eficaz en el humano; *escalofrío*, contracciones rítmicas involuntarias del músculo que generan calor; y *termogénesis sin escalofrío*, por acción de la adrenalina, las hormonas tiroideas y la grasa parda, muy importante en el recién nacido.',
        'El control es de ganancia muy alta y es un ejemplo perfecto de retroalimentación negativa, con una precisión de décimas de grado. Sus límites aparecen en los extremos: con temperaturas ambientales muy altas y humedad elevada, la evaporación falla, y con exposición prolongada al frío, la producción de calor no basta.'
      ],
      foco:[
        'Calor: vasodilatación + sudor. Frío: vasoconstricción + escalofrío + termogénesis. El sudor es un mecanismo simpático que utiliza acetilcolina, una excepción muy preguntada.'
      ]
    },
    {
      t:'Fiebre e hipertermia: dos cosas distintas',
      p:[
        'La *fiebre* no es un fallo del termostato, sino un cambio de su punto de ajuste. Ante una infección, los pirógenos exógenos (como las endotoxinas bacterianas) estimulan a los macrófagos, que liberan pirógenos endógenos: interleucina-1, interleucina-6 y factor de necrosis tumoral. Estas citocinas inducen en el hipotálamo la síntesis de *prostaglandina E2*, que sube el punto de ajuste, por ejemplo a 39 °C.',
        'Desde ese momento, el cuerpo se comporta como si tuviera frío, porque su temperatura real (37 °C) está por debajo del nuevo punto de ajuste: aparecen *vasoconstricción cutánea* (piel pálida y fría) y *escalofríos*, hasta que se alcanza la nueva temperatura. Es la fase de ascenso. Después viene una meseta, con la temperatura estable en el valor nuevo. Cuando la causa cede, o se toma un antipirético, el punto de ajuste baja de nuevo, y el cuerpo, que ahora está "demasiado caliente", suda y se vasodilata: es la defervescencia. Los antipiréticos (paracetamol, AINE) bloquean la ciclooxigenasa e impiden la síntesis de prostaglandina E2.',
        'La *hipertermia*, en cambio, es un aumento de la temperatura con el punto de ajuste normal: el cuerpo produce o absorbe más calor del que puede eliminar. El *golpe de calor* (ambiente caliente y húmedo, ejercicio intenso) es el ejemplo típico, y la piel suele estar caliente y seca cuando el sudor se agota. La *hipertermia maligna* y el síndrome neuroléptico maligno son formas farmacológicas graves. Como el punto de ajuste no ha cambiado, los antipiréticos no sirven: se trata enfriando activamente al paciente.'
      ],
      foco:[
        'Fiebre = punto de ajuste elevado, responde a antipiréticos. Hipertermia = punto de ajuste normal, no responde a antipiréticos, se trata con enfriamiento físico. Es la distinción clínica más importante del tema.'
      ]
    },
    {
      t:'Aplicaciones clínicas',
      p:[
        '*Consideración clínica*: la hipotermia (temperatura central por debajo de 35 °C) ocurre por exposición prolongada al frío, y se agrava con el alcohol, que produce vasodilatación y pérdida de calor. Provoca primero escalofríos, después confusión, bradicardia y, por debajo de unos 30 °C, arritmias graves. Los recién nacidos y los ancianos son especialmente vulnerables: los primeros tienen mucha superficie en relación con su masa y dependen de la grasa parda; los segundos, una respuesta termorreguladora más débil.',
        'La fiebre, dentro de ciertos límites, es una respuesta útil: mejora la función de los leucocitos y frena a muchos microorganismos. No siempre hay que bajarla: se trata cuando produce malestar importante, en pacientes con enfermedad cardíaca o pulmonar, en niños con antecedentes de convulsión febril o cuando alcanza valores muy altos.',
        'Ejemplo trabajado: un corredor colapsa en una maratón con 41,5 °C, piel caliente y confusión. No tiene infección; el ejercicio produjo más calor del que podía disipar en un ambiente húmedo. Es un golpe de calor por esfuerzo, y una urgencia: se le baja la temperatura de inmediato con agua fría, hielo y líquidos. Dar paracetamol no sirve, porque el punto de ajuste no se ha movido.'
      ],
      foco:[
        'Ante una temperatura alta, pregúntate primero qué la causa: ¿se movió el punto de ajuste (fiebre) o se desbordó la capacidad de perder calor (hipertermia)? De esa respuesta depende el tratamiento.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 74.'
},

'liquido-cefalorraquideo': {
  tema:'Fisiología del líquido cefalorraquídeo',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:13,
  idea:'El encéfalo flota en un líquido que lo protege, lo nutre y lo limpia, dentro de un cráneo rígido en el que no sobra ni un milímetro. Entender cómo se produce, cómo circula y cómo se controla la presión intracraneal es la base para comprender la hidrocefalia, la meningitis y la hipertensión intracraneal.',
  claves:['líquido cefalorraquídeo','plexo coroideo','presión intracraneal','barrera hematoencefálica'],
  sigue:null,
  secciones:[
    {
      t:'Producción y circulación del líquido',
      p:[
        'El *líquido cefalorraquídeo* (LCR) llena los ventrículos, el conducto central de la médula y el espacio subaracnoideo que rodea al encéfalo y a la médula. Su volumen total es de unos 150 mL, de los cuales cerca de 25-35 mL están en los ventrículos. Se produce sobre todo en los *plexos coroideos* de los ventrículos laterales, tercero y cuarto, a un ritmo de unos 500 mL al día (0,3-0,4 mL por minuto), de manera que el volumen total se renueva unas tres veces cada 24 horas.',
        'Los plexos coroideos son redes de capilares cubiertas por un epitelio especializado que secreta el líquido de manera activa: transporta sodio con ayuda de la bomba sodio-potasio y arrastra agua por ósmosis; la enzima anhidrasa carbónica interviene en el proceso, y por eso la acetazolamida, que la inhibe, disminuye la producción. El LCR no es un simple filtrado de plasma: tiene mucha menos proteína (15-45 mg/dL), menos potasio y menos glucosa (unos dos tercios de la glucemia).',
        'La circulación sigue un recorrido ordenado: de los ventrículos laterales pasa por los agujeros de Monro al tercer ventrículo, después por el acueducto de Silvio al cuarto ventrículo, y desde allí sale, a través de los orificios de Luschka y de Magendie, al espacio subaracnoideo. Baña la superficie del encéfalo y de la médula, y se reabsorbe en las *vellosidades aracnoideas*, que lo llevan a los senos venosos, sobre todo al seno sagital superior. La reabsorción es pasiva y depende de la presión: cuanta más presión, más líquido pasa a la sangre.'
      ],
      foco:[
        'Recorrido: plexos coroideos → ventrículos laterales → Monro → III ventrículo → acueducto de Silvio → IV ventrículo → Luschka y Magendie → espacio subaracnoideo → vellosidades aracnoideas → senos venosos. Se pregunta en cada examen.'
      ]
    },
    {
      t:'Funciones del LCR',
      p:[
        'Su función más evidente es *mecánica*. El encéfalo pesa unos 1.400 g, pero al estar sumergido en LCR su peso efectivo es de unos 50 g: la flotación evita que se aplaste contra la base del cráneo y que los nervios y vasos se estiren. El líquido también amortigua los golpes, porque reparte la fuerza del impacto sobre toda la superficie.',
        'También cumple funciones *químicas*. Mantiene un medio extremadamente estable alrededor de las neuronas, con concentraciones de potasio, calcio y protones controladas con más precisión que en el plasma, lo que es esencial, porque la excitabilidad neuronal depende de esos iones. Y sirve de vía de *eliminación*: el encéfalo carece de vasos linfáticos, y el flujo del LCR a través del tejido (el llamado sistema glinfático) ayuda a retirar los desechos del metabolismo, sobre todo durante el sueño.'
      ],
      foco:[
        'Cuatro funciones: flotación, amortiguación, medio químico estable y limpieza. Fíjate en la primera: sin LCR el propio peso del cerebro lo dañaría.'
      ]
    },
    {
      t:'Las barreras: hematoencefálica y sangre-LCR',
      p:[
        'La *barrera hematoencefálica* aísla el tejido nervioso de la sangre. Su base está en los capilares cerebrales: un endotelio continuo, con *uniones estrechas* entre las células, sin fenestraciones y con pocas vesículas de transporte, apoyado en una membrana basal y rodeado por los pies de los astrocitos. Los gases (oxígeno, dióxido de carbono) y las sustancias liposolubles (alcohol, anestésicos, nicotina) la atraviesan con facilidad. La glucosa entra por el transportador GLUT1, y los aminoácidos, por transportadores específicos. Las moléculas hidrosolubles grandes y las cargadas casi no pasan.',
        'La *barrera sangre-LCR* es otra estructura, situada en el epitelio de los plexos coroideos, cuyas células están unidas por uniones estrechas y controlan el paso entre la sangre y el LCR. Hay pequeñas zonas cerebrales sin barrera, los órganos circunventriculares (como el área postrema, sensible a toxinas y responsable del vómito), que permiten al cerebro detectar sustancias de la sangre.',
        'Estas barreras protegen al cerebro de toxinas y de fluctuaciones de la composición plasmática, pero también dificultan el tratamiento: muchos fármacos, como ciertos antibióticos, no llegan bien al sistema nervioso central. La inflamación de las meninges hace las barreras más permeables, y eso explica por qué en la meningitis algunos antibióticos alcanzan niveles eficaces en el LCR.'
      ],
      foco:[
        'La barrera hematoencefálica está en el ENDOTELIO de los capilares (uniones estrechas + pies astrocíticos), no en las meninges. Pasan gases y liposolubles; la glucosa, por GLUT1.'
      ]
    },
    {
      t:'La presión intracraneal y la clínica',
      p:[
        'El cráneo del adulto es una caja rígida que contiene tres componentes casi incompresibles: el tejido cerebral (cerca del 80 %), la sangre (cerca del 10 %) y el LCR (cerca del 10 %). Según la *doctrina de Monro-Kellie*, si uno de ellos aumenta, los otros deben disminuir para que la presión no suba. Al principio el LCR y la sangre venosa se desplazan hacia fuera y compensan; pero cuando esa capacidad de compensación se agota, un pequeño aumento adicional de volumen produce una elevación brusca de la *presión intracraneal* (normal: 5-15 mmHg en decúbito).',
        '*Consideración clínica*: en la *hidrocefalia*, el LCR se acumula y dilata los ventrículos. Si la obstrucción está en el sistema ventricular (por ejemplo, una estenosis del acueducto de Silvio) es una hidrocefalia *no comunicante* u obstructiva; si el problema es la reabsorción en las vellosidades aracnoideas (tras una meningitis o una hemorragia subaracnoidea) es *comunicante*. La presión intracraneal alta produce cefalea, vómitos, edema de papila y disminución del nivel de conciencia; en fases avanzadas, la tríada de Cushing (hipertensión, bradicardia y respiración irregular) indica riesgo de herniación cerebral.',
        'El análisis del LCR obtenido por punción lumbar (entre L3-L4 o L4-L5, por debajo del final de la médula) ayuda al diagnóstico. En la meningitis bacteriana el líquido es turbio, con muchos neutrófilos, proteínas elevadas y glucosa baja; en la vírica hay linfocitos, proteínas ligeramente altas y glucosa normal. En la hemorragia subaracnoidea el líquido tiene sangre o un color amarillento (xantocromía).',
        'Ejemplo trabajado: un niño de 2 años presenta el perímetro cefálico aumentado, vómitos y una mirada desviada hacia abajo ("ojos en puesta de sol"). La ecografía muestra los ventrículos laterales y el tercero muy dilatados, y el cuarto ventrículo normal. La obstrucción está en el acueducto de Silvio, entre ambos: una hidrocefalia no comunicante que se resuelve con una derivación que saque el exceso de líquido.'
      ],
      foco:[
        'Monro-Kellie: cráneo rígido = tejido + sangre + LCR. Si crece uno, los otros deben ceder. Cuando se agota la compensación, la presión sube de golpe. Es el concepto que explica todos los cuadros de hipertensión intracraneal.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 62.'
}

});
