/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7, TERCERA TANDA
   Cierra los huecos que quedaban del temario: miembro inferior,
   torax, sistema nervioso autonomo, sangre, hueso y cartilago,
   pH, lipidos, placenta, virologia y presentacion de datos.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== ANATOMIA I ==================== */
'miembro-inferior': {
  tema:'Huesos y nervios del miembro inferior',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:8,
  idea:'El miembro inferior está construido para cargar peso, no para manipular. Todas sus diferencias con el superior salen de esa sola frase.',
  claves:['fémur','tibia','peroné','coxal','nervio ciático','nervio femoral','pie caído','cuello femoral'],
  sigue:'osteologia-miembro-superior',
  secciones:[
    {
      t:'Estabilidad contra movilidad',
      p:[
        'Conviene empezar comparando. El hombro sacrifica estabilidad para ganar recorrido: su cavidad glenoidea es poco profunda y por eso se luxa con facilidad. La cadera hace lo contrario: el acetábulo es profundo, abraza la cabeza femoral y está reforzado por ligamentos potentes, de modo que luxarla exige un traumatismo de alta energía, típicamente el choque de la rodilla contra el salpicadero en un accidente de coche.',
        'Esa misma lógica se repite abajo. La pelvis transmite el peso del tronco a los dos fémures a través de las articulaciones sacroilíacas, que apenas se mueven precisamente porque su misión es transmitir carga sin ceder.'
      ]
    },
    {
      t:'Fémur: el cuello y su irrigación',
      p:[
        'El fémur es el hueso más largo y resistente del cuerpo. Su cabeza se dirige hacia arriba y adentro, unida a la diáfisis por un **cuello** que forma con ella un ángulo de unos 125 grados. Ese ángulo convierte el cuello en un brazo de palanca sometido a fuerzas de cizallamiento, y por eso es el punto donde se rompe.',
        'Lo importante es la irrigación, porque repite el patrón que ya vimos en el escafoides. La cabeza femoral se nutre sobre todo por las arterias circunflejas femorales, cuyas ramas ascienden **a lo largo del cuello** hacia la cabeza. Una fractura del cuello puede romper esos vasos y dejar la cabeza sin riego, lo que lleva a necrosis avascular. Por eso las fracturas de cuello femoral desplazadas en el anciano suelen resolverse sustituyendo la cabeza en lugar de fijarla: no se confía en que vaya a sobrevivir.',
        'El cuadro clínico se reconoce de lejos: anciano que cae, dolor en la cadera, y la pierna aparece **acortada y en rotación externa** por la tracción de los músculos que se insertan en el trocánter mayor.'
      ],
      foco:[
        'Escafoides y cuello femoral comparten el mismo problema: la arteria entra por un extremo y recorre el hueso, así que la fractura desconecta el fragmento.'
      ]
    },
    {
      t:'Los dos nervios que hay que saber, y sus dos gestos',
      p:[
        'El **nervio femoral** procede del plexo lumbar (L2-L4), entra al muslo por debajo del ligamento inguinal e inerva el cuádriceps. Su lesión impide **extender la rodilla**: el paciente no puede subir escaleras ni mantener la rodilla bloqueada de pie, y pierde el reflejo rotuliano.',
        'El **nervio ciático** es el nervio más grueso del cuerpo, procede del plexo sacro (L4-S3), sale de la pelvis por la escotadura ciática mayor y desciende por la cara posterior del muslo inervando los isquiotibiales. En la fosa poplítea, o antes, se divide en sus dos ramas terminales: el tibial y el peroneo común.'
      ]
    },
    {
      t:'El pie caído y por qué ocurre tan fácilmente',
      p:[
        'El **nervio peroneo común** rodea el cuello del peroné, y ahí discurre prácticamente bajo la piel, apoyado sobre el hueso. Es el nervio más vulnerable del miembro inferior: una escayola apretada, una postura mantenida con las piernas cruzadas, un reposo prolongado en cama o un traumatismo directo pueden comprimirlo.',
        'Su lesión produce el **pie caído** o pie equino: el paciente no puede hacer la dorsiflexión del tobillo ni la eversión del pie, de modo que la punta arrastra al caminar y tiene que levantar mucho la rodilla para no tropezar, en lo que se llama marcha en estepaje. También pierde sensibilidad en el dorso del pie.',
        'Merece la pena ver el paralelismo: el nervio radial rodea la diáfisis del húmero y su lesión da mano péndula; el peroneo común rodea el cuello del peroné y su lesión da pie caído. En ambos casos el nervio va pegado al hueso, en ambos casos falla la extensión o dorsiflexión, y en ambos el segmento distal cuelga.'
      ],
      foco:[
        'Cuello del peroné → peroneo común → pie caído. Es el equivalente exacto del radial y la mano péndula.',
        'Femoral: no extiende la rodilla. Ciático: afecta a todo lo que está por debajo de la rodilla y a los isquiotibiales.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica. Rouvière, Anatomía Humana.'
},

'torax-oseo': {
  tema:'Tórax óseo y pared torácica',
  bloque:'Anatomía I', programa:'unirm', cuatri:7, min:6,
  idea:'Una jaula que tiene que ser rígida para proteger y móvil para respirar. Casi todo lo que se pregunta sale de resolver esa contradicción.',
  claves:['costilla','esternón','manubrio','espacio intercostal','paquete intercostal'],
  sigue:'columna-vertebral',
  secciones:[
    {
      t:'Cómo está montada la jaula',
      p:[
        'Hay doce pares de costillas. Las siete primeras se llaman **verdaderas** porque se articulan con el esternón mediante su propio cartílago costal. De la octava a la décima son **falsas**: su cartílago se une al de la costilla superior, no directamente al esternón. La undécima y la duodécima son **flotantes**, y no alcanzan el esternón por delante.',
        'El esternón tiene tres partes: manubrio, cuerpo y apéndice xifoides. La unión entre manubrio y cuerpo forma un relieve palpable, el **ángulo esternal**, que es el punto de referencia más útil de toda la exploración torácica: marca el nivel de la segunda costilla, y a partir de ahí se cuentan los espacios intercostales. Internamente corresponde además al disco entre T4 y T5, al final del cayado aórtico y a la bifurcación de la tráquea.'
      ],
      foco:[
        'Ángulo esternal = segunda costilla = bifurcación traqueal = nivel T4-T5. Es el punto desde el que se cuenta todo.'
      ]
    },
    {
      t:'El paquete intercostal y dónde pinchar',
      p:[
        'Por el borde **inferior** de cada costilla discurre un surco que aloja, de arriba abajo, la vena, la arteria y el nervio intercostales. Se recuerda con el orden VAN: vena, arteria, nervio.',
        'Ese detalle anatómico tiene una consecuencia directa: cuando hay que atravesar la pared torácica —para drenar un derrame pleural o un neumotórax— la aguja se introduce por el **borde superior de la costilla inferior** del espacio, es decir, lo más lejos posible del paquete que corre bajo la costilla de arriba. Hacerlo al revés significa pinchar la arteria intercostal.',
        'Los músculos de la pared se disponen en tres capas, igual que en la pared abdominal: intercostales externos, internos e íntimos. El paquete vasculonervioso viaja entre las dos capas profundas, que es exactamente el mismo plano donde viajan los vasos en el abdomen. Ese patrón repetido no es casualidad: ambas paredes derivan del mismo esquema segmentario.'
      ],
      foco:[
        'VAN de arriba abajo, bajo la costilla. Se punciona por el borde SUPERIOR de la costilla de abajo.'
      ]
    },
    {
      t:'Mecánica de la respiración',
      p:[
        'La inspiración tranquila la hace casi enteramente el **diafragma**, que al contraerse desciende y aumenta el diámetro vertical del tórax. Está inervado por el **nervio frénico**, que procede de C3, C4 y C5; de ahí la regla clásica de que esas tres raíces mantienen el diafragma vivo, y de ahí que una lesión medular por encima de C3 comprometa la respiración de inmediato.',
        'Los intercostales externos elevan las costillas y aumentan los diámetros anteroposterior y transverso. En la inspiración forzada se suman músculos accesorios como el esternocleidomastoideo y los escalenos, cuyo uso visible en un paciente es un signo de dificultad respiratoria.',
        'La espiración tranquila, en cambio, es **pasiva**: no la hace ningún músculo, la hace el retroceso elástico del pulmón y de la pared. Solo la espiración forzada emplea la musculatura abdominal y los intercostales internos. Que la espiración normal no cueste trabajo muscular es un punto que se pregunta y que suele responderse mal.'
      ],
      foco:[
        'C3, C4 y C5 inervan el diafragma. La espiración tranquila es pasiva: no hay músculo que la haga.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica. Rouvière, Anatomía Humana.'
},

/* ==================== FISIOLOGIA I ==================== */
'sistema-nervioso-autonomo': {
  tema:'Sistema nervioso autónomo',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:8,
  idea:'Dos divisiones con lógicas opuestas: una prepara para pelear o huir, la otra para digerir y descansar. Si tienes clara esa escena, los efectos se deducen casi todos.',
  claves:['simpático','parasimpático','adrenérgico','colinérgico','receptor'],
  sigue:'sinapsis-placa-motora',
  secciones:[
    {
      t:'Anatomía: de dónde sale cada uno',
      p:[
        'El **simpático** es toracolumbar: sus neuronas preganglionares salen de la médula entre T1 y L2. Sus ganglios están cerca de la columna, en la cadena simpática paravertebral, lo que significa fibras preganglionares cortas y posganglionares largas. Esa disposición permite que la señal se distribuya ampliamente y por eso el simpático tiende a actuar en bloque, como una respuesta general.',
        'El **parasimpático** es craneosacro: sale por los pares craneales III, VII, IX y X y por los segmentos sacros S2 a S4. El nervio vago, el X, aporta por sí solo la mayor parte de la inervación parasimpática torácica y abdominal. Sus ganglios están cerca del órgano o dentro de él, lo que significa fibras preganglionares largas y posganglionares cortas, y de ahí que su acción sea más localizada y precisa.'
      ],
      foco:[
        'Simpático: toracolumbar, ganglio cerca de la columna, acción difusa. Parasimpático: craneosacro, ganglio cerca del órgano, acción puntual.'
      ]
    },
    {
      t:'Neurotransmisores: la regla y sus excepciones',
      p:[
        'La regla general es sencilla. **Todas las fibras preganglionares, de las dos divisiones, liberan acetilcolina** y actúan sobre receptores nicotínicos del ganglio. Las posganglionares **parasimpáticas** liberan también acetilcolina, pero sobre receptores **muscarínicos**. Las posganglionares **simpáticas** liberan **noradrenalina** sobre receptores adrenérgicos.',
        'Hay dos excepciones que se preguntan siempre. La primera: las fibras simpáticas que inervan las **glándulas sudoríparas** liberan acetilcolina, no noradrenalina. La segunda: la **médula suprarrenal** es en realidad un ganglio simpático modificado, de modo que recibe fibras preganglionares directamente y, en lugar de tener neuronas posganglionares, vierte adrenalina a la sangre. Eso explica por qué la respuesta simpática tiene un componente hormonal además del nervioso.'
      ]
    },
    {
      t:'Los receptores y qué hace cada uno',
      p:[
        'Los adrenérgicos son cuatro que merece la pena separar. **Alfa-1**: vasoconstricción, midriasis, contracción de esfínteres. **Alfa-2**: presináptico sobre todo, frena la liberación de noradrenalina, es decir, funciona como freno del propio sistema. **Beta-1**: está en el corazón y aumenta frecuencia y contractilidad; la regla mnemotécnica clásica es que se tiene un corazón, de ahí el uno. **Beta-2**: relaja músculo liso bronquial y vascular; se tienen dos pulmones, de ahí el dos.',
        'Los colinérgicos son dos. **Nicotínicos**: en todos los ganglios autónomos y en la placa motora; son canales iónicos. **Muscarínicos**: en los órganos diana del parasimpático; son receptores acoplados a proteína G y por eso su respuesta es más lenta y sostenida.',
        'Con esa tabla se deducen los fármacos sin memorizarlos. Un betabloqueante baja la frecuencia porque bloquea beta-1. Un agonista beta-2 como el salbutamol abre el bronquio. La atropina, que bloquea los muscarínicos, produce sequedad de boca, taquicardia, midriasis y retención urinaria: exactamente lo contrario de lo que hace el parasimpático.'
      ],
      foco:[
        'Beta-1 un corazón, beta-2 dos pulmones. Es la regla más rentable de la farmacología autónoma.'
      ]
    },
    {
      t:'La escena que ordena los efectos',
      p:[
        'En vez de memorizar una tabla de órganos, conviene imaginar la situación. El simpático prepara para correr: las pupilas se dilatan para ver mejor, el corazón acelera, los bronquios se abren para meter más aire, la sangre se redirige al músculo, el hígado libera glucosa, y todo lo que no urge —digestión, micción— se frena, con los esfínteres cerrados.',
        'El parasimpático prepara para digerir y recuperarse: la pupila se contrae, el corazón frena, el bronquio se estrecha, aumenta la secreción y el peristaltismo, y los esfínteres se relajan para vaciar.',
        'Con esa escena en mente, casi cualquier pregunta de efectos autónomos se contesta razonando en vez de recordando. Y donde la escena no basta, lo que hay son excepciones concretas, que son pocas y merecen memorizarse aparte.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica.'
},

'sangre-y-hemostasia': {
  tema:'Sangre y hemostasia',
  bloque:'Fisiología I', programa:'unirm', cuatri:7, min:7,
  idea:'Un tejido líquido con dos trabajos opuestos: circular sin coagularse y coagularse al instante cuando hace falta. El equilibrio entre ambos es todo el tema.',
  claves:['eritrocito','hematocrito','plaqueta','coagulación','hemoglobina'],
  sigue:'proteinas-estructura',
  secciones:[
    {
      t:'Qué hay dentro',
      p:[
        'La sangre es un 55% de plasma y un 45% de elementos formes, proporción que se mide como **hematocrito**. El plasma es agua con proteínas —albúmina, globulinas y fibrinógeno—, electrolitos y nutrientes. Si se deja coagular la sangre y se retira el coágulo, lo que queda es suero: plasma **sin fibrinógeno**, porque se consumió en el coágulo. Esa diferencia entre plasma y suero se pregunta con frecuencia.',
        'El **eritrocito** es una célula sin núcleo ni mitocondrias, con forma de disco bicóncavo. Esa forma le da más superficie para el intercambio y le permite deformarse para pasar por capilares más estrechos que él. Al no tener mitocondrias vive exclusivamente de la glucólisis, lo que tiene sentido: una célula cuyo trabajo es transportar oxígeno no debería consumirlo. Vive unos 120 días.',
        'Los **leucocitos** se dividen en granulocitos —neutrófilos, eosinófilos, basófilos— y agranulocitos —linfocitos y monocitos—. En el adulto sano, el más abundante es el neutrófilo. Las **plaquetas** no son células completas: son fragmentos citoplasmáticos desprendidos de los megacariocitos de la médula ósea.'
      ],
      foco:[
        'Suero = plasma sin fibrinógeno. Si una pregunta mide fibrinógeno, tiene que ser en plasma.'
      ]
    },
    {
      t:'Hemostasia primaria: el tapón de plaquetas',
      p:[
        'Al romperse un vaso ocurren tres cosas en orden. Primero, **vasoconstricción** refleja, que reduce el flujo de inmediato. Segundo, las plaquetas se **adhieren** al colágeno subendotelial expuesto, para lo cual necesitan el factor de von Willebrand como puente. Tercero, se **activan**, cambian de forma, liberan el contenido de sus gránulos y se **agregan** entre sí formando un tapón.',
        'Ese tapón plaquetario es rápido pero frágil. Detiene el sangrado de vasos pequeños, y por eso los defectos de la hemostasia primaria se manifiestan como sangrado de piel y mucosas: petequias, equimosis, epistaxis, sangrado gingival.'
      ]
    },
    {
      t:'Hemostasia secundaria: la malla de fibrina',
      p:[
        'La cascada de la coagulación transforma el fibrinógeno soluble en **fibrina** insoluble, que forma una red que atrapa células y consolida el tapón. Tradicionalmente se describen dos vías que confluyen en una común, y aunque el modelo actual es más integrado, sigue siendo útil porque es lo que miden las pruebas de laboratorio.',
        'La **vía intrínseca** se explora con el tiempo de tromboplastina parcial activada (TTPa) y es la que se alarga en las hemofilias y con la heparina. La **vía extrínseca**, que arranca con el factor tisular, se explora con el tiempo de protrombina (TP o INR) y es la que se alarga con los anticoagulantes orales clásicos y en el déficit de vitamina K. La **vía común** es donde ambas se encuentran, a partir del factor X.',
        'Un dato con mucho rendimiento: la **vitamina K** es necesaria para la síntesis hepática de los factores II, VII, IX y X. El factor VII tiene la vida media más corta de todos, y por eso el primer parámetro que se altera cuando falta vitamina K es el tiempo de protrombina.',
        'A diferencia de la primaria, los defectos de la hemostasia secundaria dan sangrados profundos: hemartrosis, hematomas musculares, sangrado retardado tras una herida que al principio parecía controlada.'
      ],
      foco:[
        'Piel y mucosas → problema de plaquetas. Articulaciones y músculos → problema de factores.',
        'Vitamina K: factores II, VII, IX y X. El VII se agota primero, así que el TP se altera antes que el TTPa.'
      ]
    },
    {
      t:'Y el freno, que importa igual',
      p:[
        'Coagular está bien donde hay una herida y muy mal en cualquier otro sitio, así que el sistema necesita frenos. El endotelio sano es antitrombótico por sí mismo. La **antitrombina III** inactiva la trombina y otros factores, y es sobre ella sobre la que actúa la heparina, potenciándola. Las **proteínas C y S** degradan factores activados.',
        'Por último, una vez reparado el vaso, el coágulo debe retirarse: eso lo hace la **plasmina**, que digiere la fibrina. Sus productos de degradación incluyen el dímero D, que se eleva siempre que hay un proceso de coagulación y lisis activo; por eso es útil para descartar una trombosis, pero no para confirmarla.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica.'
},

/* ==================== HISTOLOGIA ==================== */
'hueso-y-cartilago': {
  tema:'Cartílago y tejido óseo',
  bloque:'Histología', programa:'unirm', cuatri:7, min:7,
  idea:'Dos tejidos conectivos especializados en soportar carga. La gran diferencia entre ellos —que uno tiene vasos y el otro no— explica casi todo lo demás.',
  claves:['condrocito','osteocito','osteoblasto','osteoclasto','laguna','pericondrio'],
  sigue:'tejido-conectivo',
  secciones:[
    {
      t:'Cartílago: sin vasos, y esa es la clave',
      p:[
        'El cartílago tiene condrocitos alojados en cavidades de la matriz llamadas lagunas, y una matriz rica en colágeno y proteoglicanos que retienen agua. **Carece de vasos, de nervios y de linfáticos**: se nutre por difusión desde el pericondrio que lo rodea.',
        'De esa avascularidad salen dos consecuencias que se preguntan. La primera es que el cartílago **se repara muy mal**: sin vasos no llegan células inflamatorias ni precursores, y por eso una lesión del cartílago articular tiende a no curar. La segunda es que su nutrición por difusión impone un límite de grosor.',
        'Hay tres tipos. El **hialino** es el más abundante: está en las superficies articulares, los anillos traqueales, el cartílago costal y los discos de crecimiento. El **elástico**, con fibras elásticas añadidas, está donde hace falta flexibilidad con memoria de forma: pabellón auricular, epiglotis. El **fibroso** o fibrocartílago tiene mucho colágeno tipo I, resiste compresión y tracción, y está en los discos intervertebrales, los meniscos y la sínfisis del pubis. Un detalle: el fibrocartílago **no tiene pericondrio**.'
      ],
      foco:[
        'Cartílago articular: hialino y sin pericondrio en su superficie libre. Por eso las lesiones articulares del cartílago no cicatrizan bien.'
      ]
    },
    {
      t:'Hueso: las tres células y quién manda',
      p:[
        'El **osteoblasto** fabrica la matriz orgánica, llamada osteoide, y dirige su mineralización. Cuando queda rodeado por la matriz que él mismo produjo, pasa a llamarse **osteocito** y se aloja en una laguna, comunicándose con sus vecinos por prolongaciones que recorren canalículos. El osteocito no fabrica hueso nuevo: vigila, detecta las cargas mecánicas y envía señales.',
        'El **osteoclasto** reabsorbe hueso. Es una célula grande y multinucleada, y su origen es distinto del de las otras dos: procede del linaje de los monocitos y macrófagos, no del mesenquimatoso. Reabsorbe acidificando el medio en un compartimento sellado bajo su borde en cepillo y liberando enzimas.',
        'Hay un detalle de regulación que resulta contraintuitivo y se pregunta mucho: el osteoclasto **no tiene receptores para la hormona paratiroidea**. La hormona actúa sobre el osteoblasto, y es el osteoblasto el que ordena al osteoclasto que reabsorba, mediante señales de superficie. Es decir, quien construye es quien da la orden de demoler.'
      ],
      foco:[
        'La PTH actúa sobre el OSTEOBLASTO, que a su vez activa al osteoclasto. El osteoclasto no la escucha directamente.'
      ]
    },
    {
      t:'Cómo se forma el hueso: las dos vías',
      p:[
        'La **osificación intramembranosa** forma hueso directamente a partir de mesénquima, sin molde previo de cartílago. Así se forman los huesos planos del cráneo, la mayor parte de la clavícula y la mandíbula.',
        'La **osificación endocondral** parte de un molde de cartílago hialino que se va sustituyendo por hueso. Así se forman los huesos largos y la mayoría del resto del esqueleto. En ella aparece el **disco epifisario o cartílago de crecimiento**, que permite el crecimiento en longitud mientras permanezca abierto y cuyo cierre, inducido por las hormonas sexuales en la pubertad, determina la talla final.',
        'Conviene separar dos crecimientos que se confunden: el hueso crece **en longitud** por el disco epifisario, y **en grosor** por aposición desde el periostio. Son mecanismos distintos, y el segundo no se detiene con el cierre del disco.'
      ],
      foco:[
        'Longitud: disco epifisario. Grosor: periostio. El cierre del disco para el crecimiento en altura, no el engrosamiento.'
      ]
    }
  ],
  ref:'Ross, Histología. Texto y Atlas. Junqueira, Histología Básica.'
},

/* ==================== BIOQUIMICA I ==================== */
'ph-y-amortiguadores': {
  tema:'pH y sistemas amortiguadores',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:6,
  idea:'El organismo mantiene su pH en un margen estrechísimo porque las proteínas dejan de funcionar fuera de él. Todo el sistema existe para proteger la forma de las proteínas.',
  claves:['pH','pKa','amortiguador','Henderson-Hasselbalch','bicarbonato'],
  sigue:'proteinas-estructura',
  secciones:[
    {
      t:'Por qué importa tanto',
      p:[
        'El pH de la sangre arterial se mantiene entre 7,35 y 7,45, un margen sorprendentemente estrecho. La razón es que la carga de los grupos ionizables de los aminoácidos depende del pH, y de esa carga dependen los puentes salinos que sostienen la estructura terciaria de las proteínas. Un cambio de pH cambia las cargas, altera el plegamiento y las enzimas dejan de funcionar. Mantener el pH no es un capricho homeostático: es proteger la maquinaria entera.',
        'Un **amortiguador** es una mezcla de un ácido débil y su base conjugada, capaz de absorber la adición de ácido o de base con un cambio mínimo de pH. Su eficacia es máxima cuando el pH está cerca de su **pKa**, porque ahí hay cantidades comparables de ambas formas y puede amortiguar en las dos direcciones.'
      ]
    },
    {
      t:'La ecuación y cómo leerla',
      p:[
        'La ecuación de Henderson-Hasselbalch dice que el pH es igual al pKa más el logaritmo del cociente entre la base conjugada y el ácido. Dicho en palabras: **el pH depende de la proporción entre las dos formas, no de sus cantidades absolutas**.',
        'De ahí sale la lectura útil. Si base y ácido están en la misma cantidad, el logaritmo de uno es cero y el pH iguala al pKa. Si sobra base, el pH sube por encima del pKa; si sobra ácido, baja. Aplicado al bicarbonato: el pH sanguíneo depende de la proporción entre bicarbonato y ácido carbónico, y ese es el marco que después ordena la lectura de una gasometría.'
      ],
      foco:[
        'pH = pKa cuando hay tanto ácido como base conjugada. Ese es el punto de máxima capacidad amortiguadora.'
      ]
    },
    {
      t:'Los tres amortiguadores del organismo',
      p:[
        'El **bicarbonato/ácido carbónico** es el principal del líquido extracelular. Tiene una peculiaridad que lo hace excepcionalmente potente pese a que su pKa, de 6,1, está lejos del pH fisiológico: es un sistema **abierto**. El ácido carbónico se convierte en CO2, que se elimina por el pulmón, y el bicarbonato lo regula el riñón. Al poder ajustar ambos componentes de forma independiente, el organismo lo controla activamente en lugar de limitarse a sufrirlo.',
        'El **fosfato** actúa sobre todo dentro de la célula y en el túbulo renal, donde contribuye a la excreción de ácido. Su pKa está más cerca del pH fisiológico, pero su concentración extracelular es baja.',
        'Las **proteínas**, sobre todo la **hemoglobina** dentro del eritrocito, son cuantitativamente muy importantes. Lo hacen gracias a los grupos imidazol de sus residuos de histidina, cuyo pKa está próximo al pH sanguíneo. La hemoglobina desoxigenada amortigua mejor que la oxigenada, lo que encaja perfectamente con su función: en los tejidos, donde suelta el oxígeno, es donde se produce CO2 y hace falta amortiguar.'
      ],
      foco:[
        'El bicarbonato es el mejor amortiguador del cuerpo no por su pKa, sino por ser un sistema abierto que pulmón y riñón regulan.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.'
},

'lipidos-y-membranas': {
  tema:'Lípidos y membranas biológicas',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:6,
  idea:'Una sola propiedad ordena el tema: los lípidos huyen del agua. La bicapa, las lipoproteínas y hasta el transporte de grasas en sangre son formas distintas de resolver ese problema.',
  claves:['ácido graso','triglicérido','fosfolípido','colesterol','saturado'],
  sigue:'ph-y-amortiguadores',
  secciones:[
    {
      t:'Ácidos grasos: saturado, insaturado y por qué importa',
      p:[
        'Un ácido graso es una cadena hidrocarbonada con un grupo carboxilo. Si no tiene dobles enlaces es **saturado** y la cadena es recta, de modo que las moléculas se empaquetan bien y el conjunto es sólido a temperatura ambiente: es el caso de las grasas animales. Si tiene dobles enlaces es **insaturado**, y cada doble enlace en configuración *cis* introduce un codo que impide el empaquetamiento, lo que mantiene el conjunto líquido: es el caso de los aceites vegetales.',
        'Esa misma geometría explica la fluidez de las membranas. Cuantos más ácidos grasos insaturados, más fluida es la membrana, porque sus colas no pueden ordenarse apretadamente.',
        'Son **esenciales** los que el organismo no puede sintetizar y debe obtener de la dieta: el linoleico y el alfa-linolénico, precursores de las series omega-6 y omega-3.'
      ]
    },
    {
      t:'La bicapa y quién la vuelve fluida',
      p:[
        'El **fosfolípido** tiene una cabeza polar y dos colas apolares, es decir, es anfipático. Puesto en agua se ordena solo, escondiendo las colas y exponiendo las cabezas: así se forma espontáneamente la bicapa. No hace falta gastar energía en construirla; la construye el efecto hidrofóbico.',
        'El **colesterol** se intercala entre los fosfolípidos y su efecto es doble y a menudo mal explicado. A temperatura fisiológica **reduce** la fluidez, porque su anillo rígido restringe el movimiento de las colas. Pero a temperaturas bajas la **aumenta**, porque impide que las colas se empaqueten y cristalicen. Por eso se dice que el colesterol es un amortiguador de la fluidez, no simplemente algo que la sube o la baja.',
        'El modelo aceptado es el de **mosaico fluido**: una bicapa en la que las proteínas flotan y se desplazan lateralmente. Los lípidos se difunden con facilidad de lado, pero pasar de una monocapa a la otra —el movimiento llamado *flip-flop*— es muy raro y requiere enzimas específicas, porque obligaría a arrastrar la cabeza polar a través del interior hidrofóbico.'
      ],
      foco:[
        'El colesterol amortigua: baja la fluidez con calor y la sube con frío. No hace una sola cosa.'
      ]
    },
    {
      t:'Cómo viajan las grasas por la sangre',
      p:[
        'Como las grasas no se disuelven en agua, la sangre las transporta empaquetadas en **lipoproteínas**: una envoltura de fosfolípidos, colesterol libre y apoproteínas, con el núcleo hidrofóbico lleno de triglicéridos y ésteres de colesterol.',
        'Cuanta más grasa y menos proteína, menor densidad. Los **quilomicrones** son los más grandes y menos densos, y transportan los triglicéridos de la dieta desde el intestino. Las **VLDL** llevan triglicéridos de origen hepático. Las **LDL** transportan colesterol hacia los tejidos, y su exceso se asocia a aterosclerosis, de donde viene lo de llamarlo coloquialmente colesterol malo. Las **HDL** hacen el transporte inverso, retirando colesterol de los tejidos hacia el hígado, y de ahí lo de colesterol bueno.',
        'Esos apodos son útiles como atajo pero convienen matizarse: lo que cambia no es la molécula de colesterol, que es idéntica en todas, sino la dirección en la que la partícula lo lleva.'
      ],
      foco:[
        'El colesterol de la LDL y el de la HDL son la misma molécula. Lo que distingue a las partículas es hacia dónde lo transportan.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.'
},

/* ==================== EMBRIOLOGIA ==================== */
'placenta-y-anexos': {
  tema:'Placenta y anexos embrionarios',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:6,
  idea:'Un órgano que existe unos meses y hace de pulmón, riñón, intestino y glándula endocrina a la vez. Y que consigue todo eso sin que las dos sangres lleguen a mezclarse.',
  claves:['placenta','amnios','cordón umbilical','saco vitelino','corion'],
  sigue:'primeras-semanas',
  secciones:[
    {
      t:'De qué está hecha',
      p:[
        'La placenta tiene dos componentes de origen distinto. La porción fetal procede del **corion frondoso**, derivado del trofoblasto, y forma las vellosidades coriónicas. La porción materna es la **decidua basal**, que es el endometrio transformado por el embarazo.',
        'Las vellosidades se bañan en la sangre materna que llena los espacios intervellosos, pero **las dos circulaciones no se mezclan**: entre la sangre fetal que circula dentro de la vellosidad y la sangre materna que la rodea se interpone la barrera placentaria. Todo el intercambio ocurre a través de ella, por difusión y por transporte mediado.',
        'Esa separación es lo que hace posible el embarazo desde el punto de vista inmunológico y lo que explica que la incompatibilidad Rh dependa de que se produzcan pequeños pasos de sangre fetal a la madre, sobre todo en el parto, y no de un contacto continuo.'
      ],
      foco:[
        'La sangre materna y la fetal nunca se mezclan. El intercambio es a través de la barrera placentaria.'
      ]
    },
    {
      t:'Todo lo que hace',
      p:[
        'Actúa como **pulmón**, intercambiando oxígeno y CO2 por difusión. Como **riñón e intestino**, aportando nutrientes y retirando desechos. Y como **glándula endocrina**, produciendo gonadotropina coriónica, que mantiene el cuerpo lúteo en las primeras semanas; progesterona, que a partir de aproximadamente la décima semana pasa a producir ella misma en lugar del cuerpo lúteo; estrógenos; y lactógeno placentario.',
        'También transfiere **inmunoglobulinas G** maternas al feto, que le proporcionan inmunidad pasiva durante los primeros meses de vida. Es la única clase de inmunoglobulina que atraviesa la placenta, dato que se pregunta con frecuencia.',
        'La misma permeabilidad que permite todo eso explica su lado malo: alcohol, nicotina, muchos fármacos y algunos agentes infecciosos la atraviesan. La placenta filtra, pero no es una barrera absoluta, y conviene no describirla como tal.'
      ],
      foco:[
        'Solo la IgG atraviesa la placenta. La IgA llega al recién nacido por la leche, no por la placenta.'
      ]
    },
    {
      t:'El cordón y las membranas',
      p:[
        'El cordón umbilical contiene normalmente **dos arterias y una vena**. Es importante fijarse en que van al revés de lo habitual: las **arterias umbilicales llevan sangre desoxigenada** del feto a la placenta, y la **vena umbilical lleva sangre oxigenada** de la placenta al feto. La regla de que las arterias llevan sangre oxigenada no se cumple aquí, igual que no se cumple en la arteria pulmonar. La presencia de una sola arteria umbilical se asocia a mayor frecuencia de malformaciones y obliga a estudiar al recién nacido.',
        'El **amnios** forma la cavidad llena de líquido amniótico, que amortigua golpes, permite el movimiento fetal y contribuye al desarrollo pulmonar. El líquido procede en buena parte de la orina fetal a partir del segundo trimestre, y el feto lo deglute: por eso una atresia esofágica, que impide la deglución, produce polihidramnios, y una agenesia renal, que impide producirlo, produce oligohidramnios.',
        'El **saco vitelino** no cumple en el ser humano la función nutritiva que tiene en otras especies, pero es importante por dos motivos: es el lugar donde se forman las primeras células sanguíneas y de donde proceden las células germinales primordiales, que después migran a las gónadas.'
      ],
      foco:[
        'Dos arterias y una vena. Las arterias llevan la sangre sucia y la vena la limpia: al revés de lo habitual.'
      ]
    }
  ],
  ref:'Langman, Embriología Médica. Moore, Embriología Clínica.'
},

/* ==================== MICROBIOLOGIA MEDICA ==================== */
'virologia-basica': {
  tema:'Introducción a la virología',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:6,
  idea:'Un virus no es una célula pequeña: es material genético con instrucciones para que otra célula lo copie. De ahí sale por qué los antibióticos no le hacen nada.',
  claves:['virus','cápside','envoltura','replicación viral','retrovirus'],
  sigue:'gram-y-pared',
  secciones:[
    {
      t:'Qué es y qué no es',
      p:[
        'Un virus consta de un genoma, de ADN o de ARN pero nunca de los dos, y una cubierta proteica llamada **cápside**. Algunos añaden por fuera una **envoltura** de membrana lipídica robada a la célula que infectaron. No tiene ribosomas, ni metabolismo propio, ni capacidad de dividirse: es un parásito intracelular obligado que necesita la maquinaria de síntesis de la célula huésped.',
        'De esa definición se deduce de inmediato por qué los antibióticos son inútiles frente a un virus: actúan sobre estructuras y procesos bacterianos —pared, ribosoma bacteriano, girasa— que el virus simplemente no tiene. Los antivirales, en cambio, atacan pasos específicos del ciclo viral, y por eso suelen ser de espectro muy estrecho.'
      ],
      foco:[
        'Un virus tiene ADN o ARN, nunca los dos. Es la diferencia más básica con cualquier célula.'
      ]
    },
    {
      t:'Envuelto o desnudo, y por qué cambia el contagio',
      p:[
        'La presencia de envoltura tiene consecuencias muy prácticas. Los virus **envueltos** son frágiles fuera del huésped: la envoltura es lipídica y la destruyen la desecación, los detergentes, el alcohol y el jabón. Por eso se transmiten sobre todo por contacto directo, gotas o vía sanguínea, y por eso el lavado de manos y los desinfectantes alcohólicos funcionan tan bien contra ellos.',
        'Los virus **desnudos**, sin envoltura, son mucho más resistentes en el ambiente, toleran el ácido gástrico y los detergentes suaves, y se transmiten típicamente por vía fecal-oral. Ahí están los que producen gastroenteritis y hepatitis de transmisión entérica.',
        'El razonamiento funciona en las dos direcciones: si un virus se transmite por vía fecal-oral, casi con seguridad es desnudo, porque uno envuelto no sobreviviría al estómago.'
      ],
      foco:[
        'Envuelto = frágil = contacto directo. Desnudo = resistente = fecal-oral. Sirve para deducir la transmisión.'
      ]
    },
    {
      t:'El ciclo, y dónde atacan los antivirales',
      p:[
        'El ciclo tiene siempre los mismos pasos: **adsorción** a un receptor específico de la célula, **penetración**, **descapsidación** liberando el genoma, **replicación** del genoma y síntesis de proteínas, **ensamblaje** de nuevas partículas y **liberación**, por lisis en los desnudos o por gemación en los envueltos.',
        'La especificidad del receptor explica el tropismo: un virus solo infecta a las células que exponen su receptor. Es la razón de que el VIH afecte a los linfocitos T CD4, que llevan precisamente esa molécula.',
        'Los **retrovirus** merecen mención aparte porque invierten el flujo habitual de la información. Llevan ARN y una enzima, la **transcriptasa inversa**, que fabrica ADN a partir de ese ARN; ese ADN se integra después en el genoma de la célula. Esa integración es la razón de que la infección por VIH sea de por vida: el genoma viral pasa a formar parte del de la célula, y el tratamiento controla la replicación pero no elimina el reservorio.'
      ],
      foco:[
        'Retrovirus: ARN → ADN por transcriptasa inversa → integración. La integración es lo que hace la infección permanente.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Jawetz, Microbiología Médica.'
},

/* ==================== ESTADISTICA I ==================== */
'presentacion-de-datos': {
  tema:'Presentación de datos: tablas y gráficos',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:5,
  idea:'Elegir mal el gráfico no es un problema estético: es una forma de decir algo falso sin mentir en ningún número.',
  claves:['histograma','frecuencia','gráfico de barras','diagrama de caja'],
  sigue:'tipos-de-variables',
  secciones:[
    {
      t:'Tablas de frecuencias',
      p:[
        'Una tabla de frecuencias resume cuántas veces aparece cada valor o cada intervalo. Conviene distinguir cuatro columnas: la **frecuencia absoluta**, que es el recuento; la **relativa**, que es la proporción sobre el total y permite comparar grupos de distinto tamaño; y las dos **acumuladas**, que suman todo lo que hay hasta ese punto y sirven para responder preguntas del tipo cuántos están por debajo de tal valor.',
        'Cuando la variable es continua se agrupa en intervalos de clase. La regla práctica es usar entre cinco y quince intervalos: con menos se pierde detalle y con más el resumen deja de resumir.'
      ]
    },
    {
      t:'Cada variable con su gráfico',
      p:[
        'Para variables **cualitativas** se usan el gráfico de barras, con las barras **separadas** porque las categorías son discontinuas, y el de sectores, que solo tiene sentido cuando las partes suman un todo y las categorías son pocas.',
        'Para variables **cuantitativas continuas** se usa el **histograma**, con las barras **pegadas** precisamente porque representan intervalos contiguos de un continuo. Esa separación o falta de ella es la diferencia visible entre ambos gráficos y se pregunta con frecuencia. El polígono de frecuencias une los puntos medios de las barras del histograma y facilita ver la forma de la distribución.',
        'El **diagrama de caja** resume una variable cuantitativa mediante la mediana, el primer y el tercer cuartil y los valores extremos, marcando aparte los atípicos. Es el mejor gráfico para comparar varios grupos de un vistazo, porque muestra a la vez el centro, la dispersión y la asimetría.'
      ],
      foco:[
        'Barras separadas = cualitativa. Barras pegadas = histograma = cuantitativa continua.'
      ]
    },
    {
      t:'Cómo un gráfico honesto puede engañar',
      p:[
        'Merece la pena terminar con esto, porque es lo que de verdad queda para toda la carrera. Hay maneras de representar datos correctos que llevan a conclusiones equivocadas.',
        'Truncar el eje vertical, empezándolo en un valor distinto de cero, exagera visualmente diferencias pequeñas: una diferencia del 2% puede parecer enorme. Cambiar la escala del eje horizontal o usar intervalos de clase de amplitud desigual sin ajustar las alturas deforma el histograma. Usar gráficos tridimensionales para datos de dos dimensiones distorsiona la percepción de las áreas. Y presentar cifras absolutas cuando lo relevante es la proporción, o al revés, es una de las formas más comunes de sesgar la lectura.',
        'Ante cualquier gráfico conviene mirar primero dos cosas: dónde empieza el eje y qué es exactamente lo que se está midiendo. Eso desactiva la mayoría de las lecturas engañosas.'
      ],
      foco:[
        'Lo primero que hay que mirar en un gráfico es si el eje vertical empieza en cero.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica.'
}

});
