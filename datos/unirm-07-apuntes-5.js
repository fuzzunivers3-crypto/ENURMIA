/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 5)
   Termina de cubrir ANATOMIA I por completo (los temas que le
   faltaban despues del lote 4). Se sigue por orden, materia por
   materia, antes de repartir entre las demas.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'osteologia-general': {
  tema:'Osteología general',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:6,
  idea:'Un hueso no es un palo rígido: es un órgano vivo, con riego sanguíneo propio, que crece, se remodela y se repara toda la vida. Entender sus partes es lo que después explica por dónde se rompe cada hueso y por qué.',
  claves:['hueso largo','diáfisis','epífisis','metáfisis','periostio','osificación'],
  sigue:'columna-vertebral',
  secciones:[
    {
      t:'Las partes de un hueso largo',
      p:[
        'Un hueso largo (como el húmero o el fémur) tiene tres regiones. La *diáfisis* es el cuerpo central, un tubo de hueso compacto denso que le da resistencia. Las *epífisis* son los dos extremos, más anchos, hechos sobre todo de hueso esponjoso cubierto por cartílago articular donde se une con otro hueso. Entre ambas está la *metáfisis*, la zona de transición, que en el niño en crecimiento contiene el cartílago de crecimiento (fisis o placa epifisaria).',
        'Por fuera, el hueso está envuelto por el *periostio*, una membrana con capacidad de generar hueso nuevo y por donde entran vasos sanguíneos y nervios; por dentro, la cavidad medular contiene la médula ósea. Esto explica por qué una fractura duele tanto y sangra: el periostio está lleno de terminaciones nerviosas y vasos, no el hueso compacto en sí.'
      ],
      foco:[
        'En un niño, una fractura que atraviesa la metáfisis puede dañar la placa de crecimiento y alterar el crecimiento futuro de ese hueso: es una de las razones por las que las fracturas pediátricas se vigilan distinto a las del adulto.'
      ]
    },
    {
      t:'Cómo se forma el hueso: dos caminos',
      p:[
        'La *osificación intramembranosa* forma hueso directamente a partir de tejido conectivo, sin pasar por cartílago: así se forman los huesos planos del cráneo. La *osificación endocondral* forma primero un molde de cartílago que después se va sustituyendo por hueso: así se forman los huesos largos, y es el mecanismo responsable del crecimiento en longitud durante la infancia y la adolescencia, precisamente en la placa de crecimiento de la metáfisis.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 1.'
},

'musculos-miembro-superior': {
  tema:'Miembro superior: músculos y movimientos',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:7,
  idea:'Memorizar cuarenta músculos sueltos es agotador y se olvida rápido. Agruparlos por el MOVIMIENTO que producen es mucho más eficiente, y es exactamente como se razona en un examen físico: primero se ve qué movimiento falla, después se piensa en qué músculo o nervio pudo fallar.',
  claves:['deltoides','manguito rotador','bíceps','supinador','pronador'],
  sigue:'miembro-inferior-huesos',
  secciones:[
    {
      t:'El hombro: el deltoides y el manguito rotador',
      p:[
        'El *deltoides* es el principal abductor del hombro (lo que separa el brazo del cuerpo), inervado por el nervio axilar. El *manguito rotador* es un grupo de cuatro músculos —supraespinoso, infraespinoso, redondo menor y subescapular— que no mueven mucho el hombro por sí solos, pero cumplen una función distinta y crítica: mantienen la cabeza del húmero encajada dentro de la cavidad glenoidea mientras el deltoides y otros músculos más grandes hacen el movimiento. Sin el manguito, el hombro se luxaría con cada movimiento fuerte.',
        'El *supraespinoso* inicia los primeros grados de abducción, antes de que el deltoides tome el relevo: por eso una lesión del supraespinoso (la más frecuente del manguito) dificulta específicamente iniciar la abducción, aunque el resto del movimiento, ya iniciado, pueda completarse.'
      ]
    },
    {
      t:'El codo y el antebrazo: flexores, extensores y rotadores',
      p:[
        'El *bíceps braquial* flexiona el codo y, además, es el supinador más potente del antebrazo (gira la palma hacia arriba): por eso destapar un frasco con la mano derecha se siente más fuerte girando en sentido antihorario, el sentido de la supinación. El tríceps braquial es el extensor principal del codo.',
        'La *pronación* (girar la palma hacia abajo) y la *supinación* son movimientos exclusivos del antebrazo, no de la muñeca: ocurren porque el radio gira sobre el cúbito, que se mantiene fijo. El pronador redondo y el pronador cuadrado pronan; el bíceps y el supinador (músculo) supinan.'
      ],
      foco:[
        'Regla útil: en la mayoría de los movimientos de "girar la mano" que parecen venir de la muñeca, en realidad el movimiento ocurre en el antebrazo, no en la articulación de la muñeca, que solo flexiona, extiende y hace desviaciones laterales.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 3.'
},

'miembro-inferior-huesos': {
  tema:'Miembro inferior: huesos',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:6,
  idea:'El miembro inferior está construido para soportar peso, no para la movilidad fina que tiene la mano, y esa diferencia de propósito explica por qué sus huesos son más grandes y sus fracturas, en general, más incapacitantes.',
  claves:['fémur','tibia','peroné','coxal','tarso','cuello femoral'],
  sigue:'miembro-inferior-musculos-nervios',
  secciones:[
    {
      t:'El fémur: el hueso más grande y su punto débil',
      p:[
        'El *fémur* es el hueso más largo y más fuerte del cuerpo, y se articula arriba con el coxal (formando la cadera) y abajo con la tibia (formando la rodilla). Tiene una cabeza esférica que encaja en el acetábulo del coxal, unida al resto del hueso por el *cuello femoral*, una zona estrecha que es, precisamente por su forma, el punto más frecuente de fractura en personas mayores con osteoporosis —lo que comúnmente se llama "fractura de cadera".',
        'Esa fractura es especialmente delicada porque el riego sanguíneo de la cabeza femoral depende en buena parte de vasos que suben por el cuello: una fractura del cuello puede interrumpir ese riego y dejar a la cabeza femoral sin sangre, provocando su necrosis (muerte del tejido óseo por falta de riego).'
      ]
    },
    {
      t:'La pierna: tibia y peroné, con roles distintos',
      p:[
        'Por debajo de la rodilla hay dos huesos: la *tibia*, gruesa y medial, que soporta casi todo el peso corporal; y el *peroné* (fíbula), delgado y lateral, que apenas soporta peso pero sirve de punto de inserción muscular y forma, junto con la tibia, la mortaja del tobillo. El *coxal* (hueso de la cadera) se forma por la fusión de tres huesos que en el niño están separados: ilion, isquion y pubis; los tres confluyen en el acetábulo. El *tarso* es el conjunto de siete huesos del pie (incluidos el astrágalo y el calcáneo) equivalente al carpo de la mano, pero adaptado para soportar peso, no para la manipulación fina.'
      ],
      foco:[
        'Que la tibia soporte el peso y el peroné casi no lo haga explica por qué una fractura aislada de peroné, sin afectar la tibia, muchas veces permite seguir caminando (con dolor), mientras que una fractura tibial casi siempre lo impide.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 5.'
},

'miembro-inferior-musculos-nervios': {
  tema:'Miembro inferior: músculos y nervios',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:7,
  idea:'El nervio ciático es el nervio más grueso del cuerpo, y su recorrido —desde la pelvis hasta el pie— explica por qué una hernia discal lumbar puede producir dolor y debilidad hasta en los dedos del pie, a un metro de distancia de donde está el problema real.',
  claves:['cuádriceps','isquiotibiales','nervio ciático','nervio femoral','pie caído'],
  sigue:'articulaciones-clasificacion-biomecanica',
  secciones:[
    {
      t:'Dos grupos musculares que se oponen: cuádriceps e isquiotibiales',
      p:[
        'El *cuádriceps femoral*, en la cara anterior del muslo, es el gran extensor de la rodilla (el músculo que usas al patear un balón o al ponerte de pie desde estar sentado), inervado por el nervio femoral. Los *isquiotibiales*, en la cara posterior del muslo, son los flexores de la rodilla y extensores de la cadera, inervados por el nervio ciático. Esta oposición funcional —uno extiende lo que el otro flexiona— es la lógica detrás de casi todo el examen de fuerza muscular del miembro inferior.'
      ]
    },
    {
      t:'El nervio ciático y sus dos ramas terminales',
      p:[
        'El *nervio ciático*, formado por raíces de L4 a S3, es el nervio más grande y más largo del cuerpo. Baja por la parte posterior del muslo y, cerca de la rodilla, se divide en dos ramas: el nervio tibial (que sigue por la parte posterior de la pierna) y el nervio peroneo común (que rodea la cabeza del peroné y pasa a la parte anterior y lateral).',
        'El nervio peroneo común es especialmente vulnerable porque, al rodear la cabeza del peroné, queda muy superficial y pegado al hueso: una compresión ahí (por ejemplo, por estar mucho tiempo con las piernas cruzadas, o por una escayola apretada) produce el llamado *pie caído*: el paciente no puede levantar la punta del pie (dorsiflexión) y arrastra los dedos al caminar, un cuadro muy parecido en apariencia a la lesión del nervio radial en el brazo, pero en el miembro inferior.'
      ],
      foco:[
        'El *nervio femoral* inerva el cuádriceps y da sensibilidad a la cara anterior del muslo; su lesión debilita específicamente la extensión de la rodilla, no la cadera.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 5.'
},

'articulaciones-clasificacion-biomecanica': {
  tema:'Articulaciones: clasificación y biomecánica',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:6,
  idea:'No todas las articulaciones están hechas para moverse: algunas existen precisamente para NO moverse, y confundir ese propósito es un error común al empezar a estudiar el tema.',
  claves:['sinovial','sínfisis','sinartrosis','cápsula articular','ligamento'],
  sigue:'vascularizacion-miembros',
  secciones:[
    {
      t:'Tres tipos, según cuánto se mueven',
      p:[
        'Las articulaciones se clasifican, funcionalmente, según su grado de movimiento. Las *sinartrosis* son prácticamente inmóviles, unidas por tejido fibroso denso: las suturas del cráneo son el ejemplo clásico, y esa rigidez es precisamente lo que protege al cerebro. Las *anfiartrosis* (como la sínfisis del pubis o los discos intervertebrales) permiten un movimiento limitado, unidas por cartílago. Las *diartrosis* (o articulaciones sinoviales) son las de movimiento libre y amplio: el hombro, la cadera, la rodilla, el codo.'
      ]
    },
    {
      t:'Anatomía de una articulación sinovial',
      p:[
        'Una articulación *sinovial* típica tiene: cartílago articular (que cubre las superficies óseas y reduce la fricción), una cápsula articular fibrosa que envuelve toda la articulación, una membrana sinovial por dentro de esa cápsula que produce líquido sinovial (lubricante y nutriente del cartílago, que no tiene vasos sanguíneos propios), y *ligamentos* que refuerzan la cápsula y limitan el movimiento excesivo, evitando que la articulación se salga de su rango normal.',
        'Ejemplo trabajado: un esguince es, precisamente, el estiramiento o rotura de un ligamento cuando la articulación se fuerza más allá de su rango normal; una luxación es cuando las superficies articulares pierden por completo el contacto entre sí. Son dos grados distintos de la misma idea: la cápsula y los ligamentos no pudieron contener el movimiento.'
      ],
      foco:[
        'El cartílago articular no tiene vasos sanguíneos ni nervios propios: se nutre por difusión desde el líquido sinovial. Por eso cicatriza mal y lento cuando se lesiona, a diferencia del hueso.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 1.'
},

'vascularizacion-miembros': {
  tema:'Vascularización de los miembros',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:6,
  idea:'Los puntos donde se palpa el pulso no están ahí por conveniencia: son, literalmente, los sitios donde una arteria grande pasa cerca de la superficie, sobre un plano óseo firme que permite comprimirla contra el hueso para sentirla.',
  claves:['arteria axilar','arteria braquial','arteria femoral','pulso','anastomosis'],
  sigue:'huesos-craneo-articulaciones-craneofaciales',
  secciones:[
    {
      t:'El recorrido arterial principal de cada miembro',
      p:[
        'En el miembro superior, la arteria subclavia se continúa como *arteria axilar* al pasar la clavícula, y esta se continúa como *arteria braquial* al entrar en el brazo, que se palpa en la cara medial del brazo y se divide, a la altura del codo, en las arterias radial y cubital del antebrazo. En el miembro inferior, la arteria ilíaca externa se continúa como *arteria femoral* al pasar bajo el ligamento inguinal, palpable en el triángulo femoral, y sigue su camino hasta convertirse en arteria poplítea detrás de la rodilla y después en las arterias de la pierna.',
        'Estos puntos de pulso (braquial, radial, femoral, poplíteo, pedio) no son arbitrarios: son sitios donde la arteria pasa relativamente superficial y sobre una superficie ósea que permite comprimirla lo suficiente para sentir el latido, y son exactamente los mismos puntos que se usan para tomar la presión arterial, para controlar una hemorragia por compresión, o para detectar una obstrucción arterial (un pulso ausente distal a cierto punto orienta hacia dónde está la obstrucción).'
      ]
    },
    {
      t:'Anastomosis: rutas alternativas alrededor de las articulaciones',
      p:[
        'Alrededor de articulaciones como el codo, la rodilla y el hombro existen redes de *anastomosis* (conexiones entre ramas arteriales) que ofrecen una ruta alternativa de circulación si la arteria principal se bloquea u obstruye en ese punto. No son perfectas ni sustituyen del todo a la arteria principal en un flujo alto, pero explican por qué una obstrucción parcial cerca de una articulación no siempre produce isquemia completa del segmento distal.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 3 y 5.'
},

'huesos-craneo-articulaciones-craneofaciales': {
  tema:'Huesos del cráneo y articulaciones craneofaciales',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:6,
  idea:'El cráneo de un recién nacido tiene zonas blandas a propósito: sin ellas, la cabeza del bebé no podría deformarse lo suficiente para pasar por el canal de parto, ni el cerebro tendría espacio para crecer rápido en el primer año.',
  claves:['cráneo','sutura','fontanela','hueso frontal','hueso temporal','mandíbula'],
  sigue:'cintura-escapular-hombro',
  secciones:[
    {
      t:'Neurocráneo y viscerocráneo',
      p:[
        'El cráneo se divide, por función, en dos partes. El *neurocráneo* es la bóveda que protege al encéfalo, formado por los huesos frontal, dos parietales, occipital, dos temporales y el esfenoides y etmoides en la base. El *viscerocráneo* (esqueleto facial) forma la cara: maxilar, mandíbula, huesos nasales, cigomáticos, entre otros. La *mandíbula* es el único hueso del cráneo que se mueve libremente, gracias a la articulación temporomandibular.',
        'Los huesos del neurocráneo se unen entre sí por *suturas*, un tipo de sinartrosis (articulación fija, fibrosa) que en el adulto termina osificándose casi por completo.'
      ]
    },
    {
      t:'Las fontanelas del recién nacido',
      p:[
        'En el recién nacido, esas suturas todavía no se han cerrado, y en los puntos donde varias suturas confluyen quedan áreas membranosas, blandas, llamadas *fontanelas*. La más grande y clínicamente más relevante es la fontanela anterior (en forma de rombo, donde confluyen los huesos frontal y los dos parietales), que se cierra hacia los 12 a 18 meses de edad.',
        'Ejemplo trabajado: esas fontanelas no son solo curiosidades anatómicas, son una ventana clínica. Una fontanela hundida sugiere deshidratación; una fontanela abombada y tensa sugiere aumento de la presión intracraneal (por ejemplo, en una meningitis). Palpar la fontanela anterior es, literalmente, una forma no invasiva de estimar la presión dentro del cráneo de un lactante, algo que no se puede hacer una vez que las suturas se cierran.'
      ],
      foco:[
        'El cierre tardío de las fontanelas y las suturas no es solo un mecanismo para el parto: también le da al cerebro espacio físico para crecer con rapidez durante el primer año de vida, cuando el volumen cerebral casi se duplica.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 7.'
},

'cintura-escapular-hombro': {
  tema:'Cintura escapular y articulación del hombro',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:6,
  idea:'El hombro paga un precio por ser la articulación más móvil del cuerpo: es también la que más se luxa. Entender por qué revela una regla general de la anatomía articular: a más movilidad, menos estabilidad ósea, y más dependencia de partes blandas.',
  claves:['articulación glenohumeral','luxación de hombro','rodete glenoideo','acromion'],
  sigue:'cintura-pelvica-cadera',
  secciones:[
    {
      t:'Por qué el hombro es tan móvil',
      p:[
        'La *articulación glenohumeral* une la cabeza del húmero (grande y esférica) con la cavidad glenoidea de la escápula, que es pequeña y poco profunda —a menudo se compara con una pelota de golf apoyada sobre un plato, no encajada en un hueco profundo. Esa falta de encaje óseo es precisamente lo que le permite al hombro un rango de movimiento mayor que cualquier otra articulación del cuerpo: puede rotar, abducir, flexionar y extender en un arco enorme.',
        'El *rodete glenoideo* (labrum) es un anillo de fibrocartílago que rodea el borde de la cavidad glenoidea y la hace un poco más profunda, ayudando a la estabilidad sin sacrificar movilidad. Aun así, la estabilidad real del hombro depende mucho más de partes blandas —el manguito rotador y la cápsula articular— que del encaje óseo, que es mínimo.'
      ]
    },
    {
      t:'La consecuencia clínica de esa movilidad',
      p:[
        'Precisamente por esa poca estabilidad ósea, el hombro es la articulación grande que más se luxa en el cuerpo, casi siempre hacia adelante y abajo (luxación anterior), típicamente al caer con el brazo en abducción y rotación externa forzada, como al intentar detener una caída con la mano extendida.',
        'El *acromion*, una prolongación de la escápula que forma el "techo" del hombro, junto con el ligamento coracoacromial, protege la articulación por arriba pero puede, si tiene ciertas formas, rozar contra el tendón del supraespinoso al elevar el brazo repetidamente, un mecanismo relacionado con el síndrome de pinzamiento subacromial.'
      ],
      foco:[
        'La combinación abducción + rotación externa es la posición de mayor riesgo de luxación anterior de hombro: es la posición que se evita al examinar o movilizar un hombro recién reducido.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 3.'
},

'cintura-pelvica-cadera': {
  tema:'Cintura pélvica y articulación de la cadera',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:6,
  idea:'La cadera es, en casi todo, la opuesta del hombro: donde el hombro sacrifica encaje óseo por movilidad, la cadera sacrifica movilidad por estabilidad, porque su trabajo principal es soportar el peso de todo el cuerpo al caminar, no moverse en todas direcciones.',
  claves:['acetábulo','ligamento redondo','necrosis de cabeza femoral','ángulo cervicodiafisario'],
  sigue:'rodilla-anatomia-articular-meniscos',
  secciones:[
    {
      t:'Un encaje profundo, hecho para soportar peso',
      p:[
        'La articulación de la cadera une la cabeza del fémur con el *acetábulo* del coxal, una cavidad profunda que rodea gran parte de la cabeza femoral —muy distinto al encaje superficial del hombro. Ese encaje profundo, reforzado además por una cápsula articular gruesa y ligamentos potentes, le da a la cadera mucha más estabilidad intrínseca que al hombro, al costo de un rango de movimiento menor.',
        'El *ángulo cervicodiafisario* (el ángulo entre el cuello femoral y el eje del fémur, normalmente de unos 125 grados) determina cómo se transmite el peso del cuerpo hacia el fémur; alteraciones de ese ángulo (coxa valga o coxa vara) cambian la biomecánica de la marcha.'
      ]
    },
    {
      t:'El riego sanguíneo de la cabeza femoral, otra vez',
      p:[
        'Dentro del acetábulo hay un pequeño ligamento, el *ligamento redondo* (ligamento de la cabeza del fémur), que lleva un vaso sanguíneo hacia la cabeza femoral. En el adulto, ese vaso aporta una parte relativamente pequeña del riego total de la cabeza (la mayoría viene de arterias que suben por el cuello femoral, como se vio en el tema de los huesos del miembro inferior), pero en el niño pequeño puede ser más relevante.',
        'Esto retoma un punto ya visto: una fractura del cuello femoral, o una luxación de cadera que dañe esos vasos que suben por el cuello, puede dejar a la cabeza femoral sin suficiente riego y llevar a su *necrosis* (muerte del tejido óseo), una complicación grave que puede aparecer meses después de la lesión inicial, no de inmediato.'
      ],
      foco:[
        'Consideración clínica: por esta dependencia del riego a través del cuello, una fractura de cadera en una persona mayor casi siempre se opera pronto (reemplazo o fijación), no se deja "consolidar sola": cuanto más tiempo pase, más riesgo de que la cabeza femoral pierda su riego de forma irreversible.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 5.'
},

'rodilla-anatomia-articular-meniscos': {
  tema:'Rodilla: anatomía articular y meniscos',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:7,
  idea:'La rodilla es la articulación más grande del cuerpo y, en el fondo, la más vulnerable: depende casi por completo de ligamentos y meniscos para mantenerse estable, porque el encaje óseo entre fémur y tibia es prácticamente plano.',
  claves:['menisco','ligamento cruzado anterior','ligamento colateral','articulación femorotibial'],
  sigue:'mano-huesos-articulaciones-arcos',
  secciones:[
    {
      t:'Meniscos: los amortiguadores que faltan en el encaje óseo',
      p:[
        'A diferencia de la cadera, donde el acetábulo encaja profundamente con la cabeza femoral, la *articulación femorotibial* (la rodilla propiamente dicha) une dos superficies casi planas: los cóndilos del fémur sobre la meseta tibial. Ese encaje tan pobre se compensa con dos estructuras de fibrocartílago en forma de media luna, los *meniscos* (medial y lateral), que se interponen entre fémur y tibia, distribuyen el peso, absorben impacto y mejoran (aunque no perfeccionan) la congruencia entre las dos superficies.'
      ]
    },
    {
      t:'Los cuatro ligamentos principales',
      p:[
        'La estabilidad de la rodilla depende de cuatro ligamentos principales. Los *ligamentos colaterales* (medial y lateral), a los lados, resisten las fuerzas que empujan la rodilla hacia adentro o hacia afuera. Los *ligamentos cruzados* (anterior y posterior), dentro de la articulación, se cruzan entre sí y controlan el desplazamiento hacia adelante y atrás de la tibia respecto al fémur: el *ligamento cruzado anterior* (LCA) evita que la tibia se deslice hacia adelante, y es el ligamento de la rodilla que más se lesiona en deportes con cambios bruscos de dirección.',
        'Ejemplo trabajado: la llamada "tríada infeliz" (o tríada de O\'Donoghue) es la lesión combinada del ligamento colateral medial, el ligamento cruzado anterior y el menisco medial, típica de un golpe lateral en la rodilla con el pie fijo en el suelo —el mecanismo clásico de una entrada fuerte en fútbol. Se lesionan juntos porque el menisco medial está anatómicamente adherido al ligamento colateral medial, así que una fuerza que rompe uno arrastra al otro.'
      ],
      foco:[
        'El menisco, como el cartílago articular, tiene muy poco riego sanguíneo (sobre todo en su porción central): por eso cicatriza mal por sí solo y muchas lesiones meniscales requieren manejo quirúrgico en vez de esperar a que sane espontáneamente.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 5.'
},

'mano-huesos-articulaciones-arcos': {
  tema:'Mano: huesos, articulaciones y arcos',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:7,
  idea:'La mano humana debe buena parte de su capacidad —desde sostener un lápiz hasta suturar una herida— a un solo rasgo anatómico: el pulgar puede oponerse a los demás dedos, algo que muy pocos otros animales tienen desarrollado de esta forma.',
  claves:['carpo','falange','túnel carpiano','arco palmar','oponente del pulgar'],
  sigue:'pie-huesos-articulaciones-arcos-plantares',
  secciones:[
    {
      t:'Los huesos: carpo, metacarpo y falanges',
      p:[
        'La mano tiene tres grupos de huesos. El *carpo* son ocho huesos pequeños dispuestos en dos filas que forman la muñeca (entre ellos el escafoides, el más frecuentemente fracturado del carpo, típicamente al caer sobre la mano extendida). El metacarpo son cinco huesos largos, uno por cada dedo, que forman la palma. Las *falanges* son los huesos de los dedos: cada dedo tiene tres (proximal, media y distal), excepto el pulgar, que solo tiene dos.',
        'Los huesos del carpo, dispuestos en arco, forman un túnel por su cara palmar —el *túnel carpiano*—, cerrado por delante por un ligamento fibroso (el retináculo flexor). Por ese túnel pasan los tendones flexores de los dedos y el nervio mediano, que es el que se comprime en el síndrome del túnel carpiano, produciendo hormigueo y dolor en los primeros tres dedos y medio de la mano.'
      ]
    },
    {
      t:'La oposición del pulgar y los arcos de la mano',
      p:[
        'El pulgar tiene un músculo específico, el *oponente del pulgar*, que le permite rotar y tocar la punta de cada uno de los otros dedos: esa capacidad de oposición es lo que permite la pinza fina (sostener una aguja, escribir) y la prensión de fuerza (agarrar un martillo), dos formas de agarre completamente distintas que dependen de la misma articulación.',
        'La palma de la mano no es plana: tiene *arcos* (transversales y longitudinales) que le dan a la mano su capacidad de moldearse alrededor de objetos de formas distintas, como una cuchara flexible en vez de una tabla rígida.'
      ],
      foco:[
        'Una lesión del nervio mediano por encima de la muñeca afecta la oposición del pulgar (entre otras cosas): sin oponente del pulgar funcional, la pinza fina —y con ella buena parte de la destreza manual— se pierde, aunque el resto de los dedos se muevan con normalidad.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 3.'
},

'pie-huesos-articulaciones-arcos-plantares': {
  tema:'Pie: huesos, articulaciones y arcos plantares',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:6,
  idea:'El pie hace, en cada paso, dos trabajos que parecen contradictorios: absorber el impacto (necesita ser flexible) y empujar el cuerpo hacia adelante (necesita ser rígido). Sus arcos son la solución anatómica a ese conflicto.',
  claves:['astrágalo','calcáneo','arco longitudinal','tobillo','esguince'],
  sigue:'dermatomas-miotomas',
  secciones:[
    {
      t:'El tarso: astrágalo y calcáneo como piezas clave',
      p:[
        'El pie, como la mano, tiene tarso (siete huesos), metatarso (cinco huesos largos) y falanges (dedos). Pero a diferencia del carpo de la mano, el tarso está adaptado para soportar peso, no para la manipulación fina, y sus dos huesos más grandes reflejan eso. El *astrágalo* es el hueso que se articula directamente con la tibia y el peroné, formando la articulación del tobillo; transmite todo el peso del cuerpo hacia el pie. El *calcáneo*, por debajo del astrágalo, es el hueso más grande del pie y forma el talón, recibiendo el impacto directo contra el suelo al caminar.'
      ]
    },
    {
      t:'Los arcos del pie y el mecanismo del esguince de tobillo',
      p:[
        'Los huesos del pie se disponen formando *arcos* (longitudinal medial, longitudinal lateral y transversal), sostenidos por ligamentos y tendones, que le dan al pie su capacidad de absorber el impacto al aterrizar y de volverse relativamente rígido al despegar del suelo para propulsar el paso —el mismo pie cambia de "amortiguador flexible" a "palanca rígida" en fracciones de segundo, en cada paso.',
        'El *tobillo* se lesiona con mucha frecuencia por un mecanismo de inversión (el pie gira hacia adentro, con la planta mirando hacia el otro pie), que estira o rompe los ligamentos del lado lateral, sobre todo el ligamento peroneoastragalino anterior: es el mecanismo del *esguince* de tobillo más común, típico al pisar mal un escalón o una superficie irregular.'
      ],
      foco:[
        'Un pie plano (arco longitudinal medial colapsado) no es solo un rasgo estético: puede alterar la distribución del peso al caminar y, en algunos casos, predisponer a dolor o lesiones por sobrecarga en otras partes de la pierna.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 5.'
},

'dermatomas-miotomas': {
  tema:'Dermatomas y miotomas',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:6,
  idea:'Cuando a un paciente se le adormece exactamente el dedo gordo del pie y nada más, eso no es información vaga: es un mapa que señala, con bastante precisión, cuál raíz nerviosa de la columna está comprometida.',
  claves:['dermatoma','miotoma','nivel radicular','distribución sensitiva'],
  sigue:'sistema-linfatico-miembros',
  secciones:[
    {
      t:'Qué es un dermatoma',
      p:[
        'Un *dermatoma* es el área de piel inervada por las fibras sensitivas de una sola raíz nerviosa espinal. Aunque hay superposición entre dermatomas vecinos (por eso dañar una sola raíz rara vez deja un área totalmente sin sensibilidad), cada raíz tiene una zona donde su territorio predomina, y esa zona es reconocible y bastante constante entre personas.',
        'Algunos puntos de referencia son muy usados en el examen neurológico: el pulgar corresponde aproximadamente a C6, el dedo medio a C7, el pezón a T4, el ombligo a T10, la ingle a L1, la cara anterior de la rodilla a L3-L4, el dedo gordo del pie a L5, y el borde lateral del pie al meñique del pie a S1.'
      ]
    },
    {
      t:'Miotomas: el equivalente motor',
      p:[
        'Un *miotoma* es el grupo de músculos inervados, principalmente, por una sola raíz nerviosa. Al igual que los dermatomas, cada raíz tiene un "gesto" motor que la representa: por ejemplo, la dorsiflexión del tobillo depende sobre todo de L4-L5, y la flexión plantar depende sobre todo de S1-S2.',
        'Ejemplo trabajado, aplicando los dos juntos: un paciente con una hernia discal que comprime la raíz L5 típicamente presenta dolor y adormecimiento en el dermatoma L5 (cara lateral de la pierna y dorso del pie hasta el dedo gordo) junto con debilidad para la dorsiflexión del tobillo y del dedo gordo (miotoma L5). Esa combinación de un dermatoma y un miotoma afectados en el mismo lado es lo que permite, en el examen físico, LOCALIZAR el nivel de la lesión sin necesitar todavía una resonancia.'
      ],
      foco:[
        'Los dermatomas y miotomas son la razón anatómica por la que el examen neurológico de un paciente con dolor lumbar sigue un patrón sistemático: no se examina "la pierna" en general, se examina raíz por raíz.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 4.'
},

'sistema-linfatico-miembros': {
  tema:'Sistema linfático de los miembros',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:5,
  idea:'El sistema linfático de los miembros hace un trabajo silencioso y poco apreciado: recoge el líquido y las proteínas que se escapan de los capilares sanguíneos y los devuelve a la circulación. Cuando ese sistema falla, el resultado es visible e incómodo: el miembro se hincha y no baja con el reposo.',
  claves:['ganglio linfático','vaso linfático','drenaje linfático','linfedema'],
  sigue:'anatomia-superficie-referencia-clinica',
  secciones:[
    {
      t:'Un sistema de drenaje paralelo al venoso',
      p:[
        'Los capilares sanguíneos dejan escapar, de forma normal, una pequeña cantidad de líquido y proteínas hacia el espacio entre las células. La mayor parte de ese líquido vuelve a los capilares venosos, pero una fracción no lo hace, y es recogida por los *vasos linfáticos*, una red paralela al sistema venoso que transporta esa linfa de vuelta hacia la circulación general, pasando antes por los *ganglios linfáticos*, que filtran la linfa y son también sitios donde se monta la respuesta inmunitaria contra microorganismos o células anormales presentes en ella.',
        'En el miembro superior, la linfa drena principalmente hacia los ganglios axilares; en el miembro inferior, principalmente hacia los ganglios inguinales. Este dato tiene una aplicación clínica directa: una infección o un cáncer en un miembro puede hacer que los ganglios de esa cadena de drenaje se agranden y se vuelvan palpables, incluso antes de que la enfermedad se manifieste de otra forma.'
      ]
    },
    {
      t:'Cuando el drenaje falla: linfedema',
      p:[
        'El *linfedema* es la acumulación de líquido en un miembro por un drenaje linfático insuficiente, ya sea porque los vasos o ganglios son congénitamente insuficientes, o —con más frecuencia en la práctica clínica— porque fueron dañados o retirados (por ejemplo, tras la extirpación quirúrgica de ganglios axilares en el tratamiento de un cáncer de mama, o por radioterapia sobre esa zona).',
        'A diferencia del edema por otras causas (como la insuficiencia cardíaca), el linfedema tiende a ser más duro, no deja fóvea (el hundimiento al presionar) con tanta facilidad en fases avanzadas, y mejora poco con el reposo o con elevar el miembro, porque el problema no es exceso de producción de líquido sino un sistema de recolección que ya no da abasto.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 1.'
},

'anatomia-superficie-referencia-clinica': {
  tema:'Anatomía de superficie y puntos de referencia clínicos',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:5,
  idea:'La anatomía de superficie es, en el fondo, la habilidad de "ver" a través de la piel usando solo los huesos y relieves que se pueden palpar: es la diferencia entre localizar algo por instinto y localizarlo por conocimiento.',
  claves:['punto de referencia óseo','anatomía de superficie','palpación ósea'],
  sigue:'homeostasis-medio-interno',
  secciones:[
    {
      t:'Por qué esto cierra el bloque de Anatomía I',
      p:[
        'Cada uno de los temas anteriores de este bloque —huesos, músculos, nervios, vasos, articulaciones— tiene una aplicación práctica que depende de poder ENCONTRARLOS sin abrir al paciente: por palpación, guiándose por puntos de referencia óseos que son constantes y reconocibles en casi cualquier persona. Esa es la utilidad final de toda la anatomía de superficie del miembro superior e inferior.',
        'Ejemplo trabajado, uno de los más usados en la práctica: el sitio seguro para una inyección intramuscular en el glúteo se localiza dividiendo mentalmente el glúteo en cuadrantes y usando el cuadrante superolateral, guiándose por dos puntos de referencia óseos —la espina ilíaca posterosuperior y el trocánter mayor del fémur—, precisamente para evitar el trayecto del nervio ciático, que pasa por la zona más central e inferior.'
      ]
    },
    {
      t:'Otros puntos de referencia frecuentes',
      p:[
        'Algunos puntos que se repiten constantemente en la práctica clínica: el epicóndilo medial del húmero (donde se golpea "el hueso de la risa" y se siente el nervio cubital rodar bajo la piel), la apófisis estiloides del radio y del cúbito (referencia para localizar fracturas de muñeca), el maléolo medial y lateral del tobillo (formados por tibia y peroné respectivamente), y la espina ilíaca anterosuperior (punto de referencia para el triángulo femoral y para localizar el apéndice, en el punto de McBurney).'
      ],
      foco:[
        'Todo el bloque de Anatomía I, visto en conjunto, responde a una sola pregunta práctica: dado un punto de la superficie del cuerpo, ¿qué hueso, músculo, nervio o vaso hay justo debajo? Esa es la habilidad que un examen físico bien hecho pone en práctica constantemente.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica, cap. 1, 3 y 5.'
}

});
