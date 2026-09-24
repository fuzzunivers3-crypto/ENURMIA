/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 17)
   AMPLIACIÓN de Histología, segunda parte: tejido muscular,
   tejido nervioso, sangre y hematopoyesis, membrana basal y
   uniones celulares, ciclo celular y división celular.
   Mismas claves de objeto que los apuntes originales (se
   sobrescriben con Object.assign); el campo `tema` no cambia.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'tejido-muscular': {
  tema:'Tejido muscular',
  bloque:'Histología', programa:'unirm', cuatri:7, min:13,
  idea:'Hay tres tipos de tejido muscular y se distinguen al microscopio con dos datos: si tienen estriaciones y dónde están los núcleos. Conocer la organización del sarcómero y las diferencias entre esquelético, cardíaco y liso explica cómo se contraen y por qué se reparan de manera tan distinta.',
  claves:['sarcómero','banda A','banda I','disco intercalar','estriado'],
  sigue:'tejido-nervioso',
  secciones:[
    {
      t:'Los tres tipos de músculo',
      p:[
        'El *músculo esquelético* está formado por fibras largas y cilíndricas, multinucleadas (porque cada fibra resulta de la fusión de muchos mioblastos), con los núcleos situados en la periferia, justo bajo el sarcolema. Presenta estriaciones transversales, se contrae de forma voluntaria y está inervado por el sistema nervioso somático. El *músculo cardíaco* está formado por células más cortas, ramificadas, con uno o dos núcleos centrales y estriaciones, unidas por los *discos intercalares*; se contrae de forma involuntaria y rítmica. El *músculo liso* está formado por células fusiformes con un solo núcleo central y sin estriaciones; se contrae de forma involuntaria y lenta, y se encuentra en las paredes de los vasos y de los órganos huecos.',
        'La regla de identificación es sencilla. Si hay estrías y los núcleos están en la periferia, es esquelético. Si hay estrías, el núcleo es central y aparecen líneas oscuras transversales entre células, es cardíaco. Si no hay estrías, es liso. Los tres se rodean de tejido conectivo: en el esquelético, el *endomisio* rodea cada fibra, el *perimisio* cada fascículo y el *epimisio* todo el músculo, y esas capas continúan con los tendones.'
      ],
      foco:[
        'Núcleos periféricos + estrías = esquelético. Núcleo central + estrías + discos intercalares = cardíaco. Núcleo central sin estrías = liso.'
      ]
    },
    {
      t:'El sarcómero y sus bandas',
      p:[
        'Al microscopio, la fibra esquelética muestra una alternancia de bandas claras y oscuras que se repiten. Esas bandas se deben a la disposición de los miofilamentos dentro de las miofibrillas. La unidad repetitiva es el *sarcómero*, el segmento entre dos *líneas Z*. En su interior, la *banda A* (oscura, anisótropa) corresponde a la longitud de los filamentos gruesos de miosina, e incluye la zona de solapamiento con los delgados. La *banda I* (clara, isótropa) contiene solo filamentos delgados de actina, y la línea Z la atraviesa por su mitad. La *zona H*, en el centro de la banda A, tiene solo filamentos gruesos, y la *línea M* los ancla en el centro.',
        'Al contraerse el músculo, la banda A no cambia de longitud, mientras que la banda I y la zona H se acortan y las líneas Z se aproximan: los filamentos se deslizan unos sobre otros, sin acortarse. Es una imagen clásica de examen. Además de actina y miosina, el sarcómero contiene la tropomiosina y el complejo de la troponina, que regulan la contracción por el calcio, y proteínas de anclaje como la titina, que centra los filamentos gruesos y aporta elasticidad, y la distrofina, que une el citoesqueleto a la membrana.',
        'En el esquelético, los *túbulos T* penetran desde el sarcolema a la altura de la unión entre las bandas A e I, y se acompañan a cada lado de una cisterna terminal del retículo sarcoplásmico: esta unión de tres elementos es la *tríada*. Así, el potencial de acción llega al interior de la fibra y libera calcio al mismo tiempo en todos los sarcómeros.'
      ],
      foco:[
        'En la contracción: la banda A NO cambia; la banda I y la zona H se acortan. Tríada del esquelético en la unión A-I; diada del cardíaco a nivel de la línea Z.'
      ]
    },
    {
      t:'Músculo cardíaco y músculo liso',
      p:[
        'El músculo cardíaco comparte con el esquelético la organización en sarcómeros, pero tiene rasgos propios. Sus células se unen por los *discos intercalares*, donde se combinan uniones de adhesión y desmosomas (que transmiten la fuerza de una célula a otra) y uniones en hendidura (que permiten el paso de la corriente y hacen del miocardio un sincitio funcional). Tiene abundantes mitocondrias, que ocupan un tercio del volumen celular, y sus túbulos T son más anchos y se sitúan a nivel de las líneas Z, formando diadas. Entre las fibras hay una red densa de capilares.',
        'El músculo liso no tiene sarcómeros: los filamentos de actina se anclan en *cuerpos densos*, análogos a las líneas Z, y los de miosina se intercalan entre ellos, orientados en diagonal, de modo que al contraerse la célula se acorta y se "retuerce". Tiene *cavéolas* en la membrana en lugar de túbulos T, y sus células se comunican por uniones en hendidura en el tipo unitario. Están rodeadas de una lámina externa y de fibras reticulares que las unen.',
        'Otra diferencia importante es el crecimiento. El músculo liso puede *proliferar* y aumentar su tamaño: el útero durante el embarazo crece por hipertrofia y por hiperplasia de sus células. El músculo cardíaco solo aumenta de tamaño (hipertrofia), y el esquelético se adapta por hipertrofia de sus fibras.'
      ],
      foco:[
        'Disco intercalar = desmosomas + uniones de adhesión + uniones en hendidura. Cuerpo denso del liso = equivalente a la línea Z del estriado.'
      ]
    },
    {
      t:'Regeneración y clínica',
      p:[
        'Los tres tipos de músculo se reparan de forma distinta. En el *esquelético*, las lesiones pequeñas se reparan gracias a las *células satélite*, células madre que se sitúan entre el sarcolema y la lámina basal, y que proliferan y se fusionan para formar fibras nuevas. Cuando la lesión es extensa, se forma una cicatriz. En el *cardíaco*, los miocitos adultos casi no se dividen y no hay células satélite eficaces, por lo que tras un infarto el tejido muerto se sustituye por una cicatriz de tejido conectivo, que no se contrae. En el *liso*, las células conservan la capacidad de dividirse y pueden reparar las lesiones.',
        '*Consideración clínica*: en la distrofia muscular de Duchenne falta la distrofina, que ancla el citoesqueleto al sarcolema; las fibras se rompen con cada contracción, se degeneran y se sustituyen por grasa y tejido conectivo, con debilidad progresiva. En la miastenia gravis, los anticuerpos atacan los receptores de acetilcolina de la unión neuromuscular. En el infarto de miocardio, la elevación en sangre de la troponina cardíaca, proteína propia del sarcómero, permite el diagnóstico. Los tumores del músculo son los rabdomiomas y rabdomiosarcomas (estriado) y los leiomiomas y leiomiosarcomas (liso); los miomas uterinos son leiomiomas muy frecuentes.',
        'Ejemplo trabajado: en una biopsia se ven células fusiformes con núcleo central y sin estriaciones, dispuestas en haces que se cruzan. Es músculo liso. Si el paciente es una mujer con hemorragia uterina abundante, el diagnóstico más probable es un leiomioma, el tumor benigno más frecuente del útero.'
      ],
      foco:[
        'Regeneración: liso sí, esquelético limitada (células satélite), cardíaco no (cicatriz). Es la pregunta de comparación más frecuente.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 10. Ross, Histología. Texto y Atlas, cap. 11.'
},

'tejido-nervioso': {
  tema:'Tejido nervioso',
  bloque:'Histología', programa:'unirm', cuatri:7, min:14,
  idea:'El tejido nervioso está formado por neuronas, que transmiten señales, y por células gliales, que las sostienen, aíslan y protegen. Reconocer las partes de una neurona y las funciones de cada tipo de glía es la base para entender la conducción, la mielinización y muchas enfermedades neurológicas.',
  claves:['neurona','astrocito','oligodendrocito','microglía','célula de Schwann','mielina'],
  sigue:'sangre-hematopoyesis',
  secciones:[
    {
      t:'La neurona: soma, dendritas y axón',
      p:[
        'La neurona es la unidad funcional del sistema nervioso. Se compone de un *soma* o cuerpo celular, con el núcleo y los orgánulos; de las *dendritas*, prolongaciones ramificadas que reciben información; y de un *axón*, prolongación única y larga que la conduce a otras células. El soma tiene un núcleo grande y claro, con un nucléolo evidente, y un citoplasma con *sustancia de Nissl*: acúmulos de retículo endoplasmático rugoso y ribosomas, que se ven basófilos con H&E y reflejan la intensa síntesis de proteínas. La sustancia de Nissl se encuentra en el soma y en las dendritas, pero no en el axón ni en el cono axónico.',
        'El axón nace en el *cono axónico*, sin sustancia de Nissl, que es el sitio donde se inicia el potencial de acción. Puede medir más de un metro. Se ramifica en su extremo en *terminales sinápticos*, con vesículas que contienen neurotransmisores. Al no tener ribosomas, el axón depende del soma para sus proteínas: el *transporte axonal* las lleva en dirección anterógrada (con la cinesina) y devuelve los desechos en dirección retrógrada (con la dineína). Algunos virus y toxinas, como el virus de la rabia, el del herpes y la toxina del tétanos, viajan por transporte retrógrado hasta el sistema nervioso central.',
        'Según el número de prolongaciones, las neuronas se clasifican en *multipolares* (la mayoría; muchas dendritas y un axón, como las motoneuronas), *bipolares* (una dendrita y un axón; retina y epitelio olfatorio) y *seudounipolares* (un solo tallo que se divide en una rama periférica y otra central; ganglios de la raíz dorsal).'
      ],
      foco:[
        'Sustancia de Nissl = retículo rugoso; está en soma y dendritas, no en el axón. Cono axónico = origen del potencial de acción.'
      ]
    },
    {
      t:'La glía del sistema nervioso central',
      p:[
        'Las células gliales son más numerosas que las neuronas y cumplen funciones de soporte. En el sistema nervioso central hay cuatro tipos. Los *astrocitos*, de forma estrellada, son los más abundantes: sostienen a las neuronas, regulan el medio iónico (captan el exceso de potasio y de glutamato), aportan nutrientes desde los capilares y forman con sus pies vasculares parte de la barrera hematoencefálica. Tras una lesión forman la cicatriz glial. Los *oligodendrocitos* forman la mielina del sistema nervioso central: cada uno emite varias prolongaciones que envuelven segmentos de varios axones a la vez.',
        'La *microglía* está formada por células pequeñas, de núcleo alargado y oscuro, que actúan como los macrófagos del sistema nervioso: fagocitan restos y patógenos y presentan antígenos. A diferencia de las demás células gliales, que derivan del tubo neural, la microglía procede de precursores del saco vitelino y de la línea de los monocitos. Las *células ependimarias* forman el epitelio que tapiza los ventrículos y el conducto central de la médula, con cilios que ayudan a mover el líquido cefalorraquídeo.',
        'Por la disposición de sus prolongaciones, los astrocitos se dividen en *protoplasmáticos*, de la sustancia gris, con prolongaciones cortas y gruesas, y *fibrosos*, de la sustancia blanca, con prolongaciones largas y finas.'
      ],
      foco:[
        'Oligodendrocito = mielina en el SNC (varios axones). Astrocito = soporte + barrera. Microglía = macrófago del SNC y de origen distinto. Ependimario = tapiza los ventrículos.'
      ]
    },
    {
      t:'El sistema nervioso periférico y la mielinización',
      p:[
        'En el sistema nervioso periférico, las *células de Schwann* envuelven a los axones. Cuando el axón es de gran calibre, la célula de Schwann forma alrededor de él una vaina de *mielina*, por enrollamiento repetido de su membrana: cada célula de Schwann mieliniza un solo segmento (internodo) de un único axón. Los espacios entre segmentos se denominan *nódulos de Ranvier*, y ahí se concentran los canales de sodio que permiten la conducción saltatoria. En los axones amielínicos, una sola célula de Schwann envuelve varios axones sin formar mielina. Los *ganglios* contienen los somas de las neuronas periféricas, rodeados de *células satélite*.',
        'La mielina tiene una gran importancia funcional: la conducción saltatoria multiplica la velocidad de conducción y ahorra energía. Por eso las enfermedades que la destruyen provocan déficits graves. En la *esclerosis múltiple*, el sistema inmunitario ataca la mielina de los oligodendrocitos en el sistema nervioso central; en el *síndrome de Guillain-Barré*, ataca la de las células de Schwann en el sistema nervioso periférico y produce una debilidad ascendente.',
        'Un nervio periférico está formado por axones rodeados de tejido conectivo, en tres capas: el *endoneuro* rodea cada axón mielinizado, el *perineuro* cada fascículo (y forma una barrera de protección) y el *epineuro* todo el nervio.'
      ],
      foco:[
        'Comparación clave: oligodendrocito (SNC) mieliniza varios axones; célula de Schwann (SNP) mieliniza un segmento de un solo axón. Es la pregunta de examen más repetida del tema.'
      ]
    },
    {
      t:'Sinapsis, regeneración y clínica',
      p:[
        'La *sinapsis* es la unión funcional entre una neurona y otra célula. En las sinapsis químicas, un terminal presináptico con vesículas libera el neurotransmisor a una hendidura de 20-30 nm, y la membrana postsináptica, con receptores y una densidad postsináptica, responde a él. Las sinapsis pueden ser axodendríticas, axosomáticas o axoaxónicas. En las sinapsis eléctricas, las uniones en hendidura permiten que pase la corriente directamente.',
        'La capacidad de regeneración difiere entre el sistema nervioso periférico y el central. Tras la sección de un nervio periférico, el segmento distal degenera (degeneración walleriana), las células de Schwann forman columnas (bandas de Büngner) que guían el crecimiento del axón proximal, y el axón regenera a razón de 1-3 mm al día. En el sistema nervioso central, la cicatriz glial de los astrocitos y las moléculas inhibidoras de la mielina impiden la regeneración, y por eso las lesiones de médula espinal son permanentes.',
        '*Consideración clínica*: los tumores del tejido nervioso se nombran según la célula de origen: el astrocitoma y el glioblastoma (astrocitos), el oligodendroglioma, el meningioma (meninges) y el schwannoma (células de Schwann; por ejemplo, el neurinoma del acústico). Las neuronas casi no se dividen en el adulto, por lo que los tumores primarios cerebrales derivan casi siempre de las células gliales, que sí conservan la capacidad de dividirse.'
      ],
      foco:[
        'Los tumores cerebrales primarios son en su mayoría gliomas, porque las neuronas maduras no se dividen y la glía sí.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 9. Ross, Histología. Texto y Atlas, cap. 12.'
},

'sangre-hematopoyesis': {
  tema:'Sangre y hematopoyesis',
  bloque:'Histología', programa:'unirm', cuatri:7, min:14,
  idea:'La sangre es un tejido conectivo líquido cuyas células se fabrican de forma continua en la médula ósea. Reconocer cada célula en un frotis —eritrocito, leucocitos y plaquetas— y entender cómo se forman es la base del hemograma y del diagnóstico de las anemias, las infecciones y las leucemias.',
  claves:['frotis','neutrófilo','linfocito','eosinófilo','médula ósea','serie mieloide'],
  sigue:'membrana-basal-uniones-celulares',
  secciones:[
    {
      t:'Los elementos formes de la sangre en un frotis',
      p:[
        'En un frotis de sangre teñido con Giemsa o Wright, el elemento más numeroso es el *eritrocito*: un disco bicóncavo, sin núcleo, de unos 7 micrómetros, de color rosa con una zona central pálida. Su tamaño sirve de regla para medir las demás células. Las *plaquetas* son fragmentos citoplasmáticos sin núcleo, de 2 a 4 micrómetros, con gránulos violeta, que suelen verse en pequeños grupos. Los *leucocitos* son mucho menos numerosos y se dividen en granulocitos (con gránulos específicos) y agranulocitos.',
        'Los *neutrófilos* (50-70 % de los leucocitos) tienen un núcleo con tres a cinco lóbulos y un citoplasma pálido con gránulos muy finos. Los *eosinófilos* (1-4 %) tienen un núcleo bilobulado y grandes gránulos rojo anaranjados. Los *basófilos* (menos de 1 %) tienen gránulos grandes, azul oscuro, que tapan el núcleo. Los *linfocitos* (20-40 %) son células redondas con un núcleo grande, esférico y oscuro, y un fino borde de citoplasma azul. Los *monocitos* (2-8 %) son las células más grandes, con un núcleo indentado o en forma de riñón y un citoplasma gris azulado.',
        'Con la regla nemotécnica "Nunca Lo Mires Ese Bicho" recuerdas el orden de frecuencia: Neutrófilos, Linfocitos, Monocitos, Eosinófilos, Basófilos. Los cambios en estas proporciones orientan el diagnóstico: un aumento de neutrófilos indica infección bacteriana; de linfocitos, infección vírica; de eosinófilos, parasitosis o alergia.'
      ],
      foco:[
        'Neutrófilo = 3-5 lóbulos. Eosinófilo = 2 lóbulos y gránulos rojos. Basófilo = gránulos azul oscuro. Linfocito = núcleo redondo grande. Monocito = núcleo en riñón. Aprende a verlos por el núcleo.'
      ]
    },
    {
      t:'Funciones de los leucocitos y de las plaquetas',
      p:[
        'Los *neutrófilos* son la primera línea de defensa contra las bacterias: salen de los vasos hacia el foco de infección, fagocitan y destruyen los microorganismos con sus gránulos, y mueren formando pus. En las infecciones agudas, la médula libera neutrófilos inmaduros con el núcleo en banda, y se habla de "desviación a la izquierda". Los *eosinófilos* combaten a los parásitos y modulan las reacciones alérgicas. Los *basófilos* liberan histamina y participan en las reacciones de hipersensibilidad, y son el equivalente en la sangre de los mastocitos del tejido.',
        'Los *linfocitos* son las células de la inmunidad específica: los linfocitos B se transforman en células plasmáticas que producen anticuerpos, y los T participan en la inmunidad celular. No se distinguen entre sí en el frotis. Los *monocitos* pasan de la sangre a los tejidos y se convierten en macrófagos, y allí reciben nombres propios: células de Kupffer en el hígado, osteoclastos en el hueso, microglía en el sistema nervioso central. Las *plaquetas* participan en la hemostasia: forman el tapón que sella una lesión de un vaso y liberan factores que inician la coagulación.'
      ],
      foco:[
        'Monocito = precursor del macrófago. Los macrófagos especializados de cada tejido (Kupffer, microglía, osteoclasto, células de Langerhans) derivan de la misma línea.'
      ]
    },
    {
      t:'La hematopoyesis: de la célula madre a la célula madura',
      p:[
        'Las células sanguíneas tienen una vida corta y se renuevan de forma continua. La *hematopoyesis* es el proceso de formación de las células sanguíneas. En el feto ocurre en el saco vitelino, después en el hígado y el bazo, y desde el final de la gestación, en la *médula ósea roja*. En el adulto, la médula roja se conserva en los huesos planos (esternón, costillas, pelvis, cráneo) y en las vértebras y los extremos de los huesos largos; el resto de la médula se sustituye por grasa (médula amarilla).',
        'Todas las células de la sangre derivan de una *célula madre hematopoyética* pluripotente, capaz de autorrenovarse. De ella surgen dos progenitores. El *progenitor mieloide* da lugar a los eritrocitos (serie eritroide), a las plaquetas (serie megacariocítica: el megacariocito, célula gigante, libera plaquetas por fragmentación de su citoplasma), a los granulocitos (neutrófilos, eosinófilos y basófilos) y a los monocitos. El *progenitor linfoide* da lugar a los linfocitos B, T y NK.',
        'La producción se regula con factores de crecimiento: la *eritropoyetina* (riñón) estimula la serie roja en respuesta a la hipoxia; la *trombopoyetina* (hígado) estimula a los megacariocitos; los factores estimulantes de colonias (G-CSF, GM-CSF) y las interleucinas regulan la serie blanca. Durante la maduración del eritrocito, la célula reduce su tamaño, sintetiza hemoglobina y expulsa el núcleo; el último estadio antes del glóbulo rojo maduro es el *reticulocito*, que conserva restos de ARN y se ve azulado en el frotis (policromatofilia).'
      ],
      foco:[
        'Progenitor mieloide: eritrocitos, plaquetas, granulocitos y monocitos. Progenitor linfoide: linfocitos B, T y NK. El megacariocito es el origen de las plaquetas.'
      ]
    },
    {
      t:'Alteraciones y su interpretación',
      p:[
        '*Consideración clínica*: el frotis permite reconocer muchas alteraciones. En la anemia ferropénica, los eritrocitos son pequeños y pálidos (microcitosis e hipocromía); en la deficiencia de vitamina B12 o de ácido fólico, son grandes (macrocitosis) y hay neutrófilos hipersegmentados. Una reticulocitosis indica que la médula responde a una pérdida (hemorragia) o a una destrucción (hemólisis); una reticulocitopenia con anemia sugiere un fallo de producción. En las leucemias aparecen blastos, células inmaduras de núcleo grande y nucléolos evidentes, que invaden la sangre y sustituyen a las células normales de la médula.',
        'La eosinofilia orienta a parasitosis por helmintos y alergias; la linfocitosis, a infecciones víricas como la mononucleosis, en la que se ven linfocitos "atípicos" grandes; la neutrofilia con desviación a la izquierda, a infección bacteriana aguda. La trombocitopenia, con menos plaquetas en el frotis, explica petequias y sangrados de mucosas.',
        'Ejemplo trabajado: un niño con fiebre y dolor abdominal en fosa ilíaca derecha tiene 18.000 leucocitos, con muchos neutrófilos en banda. El cuadro sugiere una apendicitis aguda: la infección bacteriana estimula la médula, que libera neutrófilos inmaduros. La histología de la sangre aporta datos que la exploración sola no daría.'
      ],
      foco:[
        'Interpretación rápida: neutrófilos altos = bacteria; linfocitos altos = virus; eosinófilos altos = parásito o alergia; blastos = leucemia; reticulocitos altos = médula que responde.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 12 y 13. Ross, Histología. Texto y Atlas, cap. 10.'
},

'membrana-basal-uniones-celulares': {
  tema:'Membrana basal y uniones celulares',
  bloque:'Histología', programa:'unirm', cuatri:7, min:12,
  idea:'Los epitelios funcionan como láminas continuas gracias a las uniones entre sus células y a la membrana basal que las sostiene. Cada tipo de unión tiene una función distinta —sellar, adherir, anclar o comunicar— y cada una falla en enfermedades concretas, desde las ampollas de la piel hasta las arritmias.',
  claves:['membrana basal','desmosoma','unión estrecha','unión en hendidura','hemidesmosoma'],
  sigue:'ciclo-celular-division',
  secciones:[
    {
      t:'La membrana basal: la base de todo epitelio',
      p:[
        'La *membrana basal* es una capa delgada de matriz extracelular que separa el epitelio del tejido conectivo subyacente, y que rodea también a las células musculares, adiposas y de Schwann. Con el microscopio electrónico se distinguen dos capas: la *lámina basal*, producida por las propias células epiteliales, y la *lámina reticular*, formada por fibras reticulares y colágeno del tejido conectivo. Con PAS se tiñe de magenta, porque es rica en glucoproteínas.',
        'La lámina basal está formada por *colágeno tipo IV*, que forma una malla, por la glucoproteína *laminina*, que une las células a la malla mediante receptores llamados integrinas, y por proteoglucanos como el perlecano y la proteína de adhesión entactina. Sus funciones son múltiples: sostiene el epitelio, lo fija al conectivo, actúa como filtro selectivo (como en el glomérulo renal), guía la migración celular y la regeneración, y sirve de barrera que impide el paso de células y, en principio, de las células tumorales.',
        '*Consideración clínica*: la integridad de la membrana basal marca la diferencia entre un tumor *in situ* y uno *invasor*. Un carcinoma que se mantiene por encima de la membrana basal no da metástasis; cuando la rompe y alcanza el conectivo, tiene acceso a los vasos y a los linfáticos. En el síndrome de Goodpasture, los autoanticuerpos atacan el colágeno tipo IV de las membranas basales del glomérulo y de los alvéolos, con insuficiencia renal y hemorragia pulmonar.'
      ],
      foco:[
        'Lámina basal = colágeno IV + laminina + proteoglucanos. Se tiñe con PAS. Romperla es lo que convierte un carcinoma in situ en invasor.'
      ]
    },
    {
      t:'Las uniones que sellan y adhieren',
      p:[
        'Las *uniones estrechas* (zonulae occludentes) forman un cinturón alrededor del ápice de las células epiteliales, en el que las proteínas ocludina y claudinas de células vecinas se fusionan y sellan el espacio intercelular. Tienen dos funciones: impedir el paso libre de sustancias por entre las células (barrera paracelular), lo que obliga a que el transporte se haga a través de ellas, y mantener la polaridad, evitando que las proteínas de la membrana apical y de la basolateral se mezclen. Son especialmente importantes en el intestino, en el túbulo renal y en la barrera hematoencefálica.',
        'Debajo de la unión estrecha se encuentra la *unión adherente* (zonula adherens), otro cinturón en el que las cadherinas de células vecinas se unen entre sí y se anclan por dentro a los filamentos de actina. Une mecánicamente a las células y participa en la forma del epitelio. Le sigue el *desmosoma* (macula adherens), una unión puntual, como un remache, formada por cadherinas desmosómicas (desmogleína y desmocolina) que se anclan por dentro en una placa a los filamentos intermedios de queratina. Aportan gran resistencia mecánica y abundan en los tejidos sometidos a tracción, como la epidermis y el miocardio.'
      ],
      foco:[
        'Orden de arriba abajo en un epitelio: unión estrecha, unión adherente, desmosoma. Sellar, unir con actina, remachar con queratina.'
      ]
    },
    {
      t:'Las uniones que anclan y comunican',
      p:[
        'Los *hemidesmosomas* anclan la célula epitelial a la lámina basal. Se parecen a la mitad de un desmosoma, pero su proteína de adhesión no es una cadherina sino una *integrina* (α6β4), que se une a la laminina de la lámina basal, y por dentro se conectan con filamentos intermedios de queratina. Aportan estabilidad a la unión entre la epidermis y la dermis.',
        'Las *uniones en hendidura* (nexos, gap junctions) son canales formados por seis proteínas de *conexina*, que constituyen un conexón; dos conexones de células vecinas se alinean y forman un poro que atraviesa ambas membranas. Permiten el paso directo de iones y de moléculas pequeñas (de menos de 1,5 kDa aproximadamente), como el AMP cíclico y el calcio. Así se logra un acoplamiento eléctrico y metabólico: son indispensables en el miocardio, donde permiten la propagación del potencial de acción, en el músculo liso visceral y en ciertas sinapsis eléctricas.'
      ],
      foco:[
        'Cuatro palabras: sellar (estrecha), adherir (adherente y desmosoma), anclar a la lámina basal (hemidesmosoma), comunicar (hendidura). Cada verbo es una unión.'
      ]
    },
    {
      t:'Enfermedades de las uniones celulares',
      p:[
        '*Consideración clínica*: cuando falla una unión, se afecta el tejido que depende de ella. En el *pénfigo vulgar*, los autoanticuerpos se dirigen contra la desmogleína de los desmosomas: los queratinocitos pierden su adhesión (acantólisis) y se forman ampollas flácidas dentro de la epidermis, que se rompen con facilidad y dejan erosiones dolorosas en la piel y la boca. En el *penfigoide ampolloso*, los anticuerpos atacan proteínas de los hemidesmosomas y la ampolla se forma por debajo de la epidermis, por lo que es tensa y más resistente.',
        'En la enfermedad celíaca y otras enfermedades inflamatorias del intestino, las uniones estrechas se alteran y aumenta la permeabilidad de la barrera intestinal. Las mutaciones de las conexinas causan algunas formas de sordera hereditaria y de neuropatía. En la *epidermólisis ampollosa*, mutaciones en proteínas de anclaje entre la epidermis y la dermis producen ampollas ante el roce mínimo.',
        'Ejemplo trabajado: se biopsia una ampolla y se observa una separación *dentro* de la epidermis, con células redondeadas sueltas (acantolíticas). El sitio de la separación indica qué unión falla: intraepidérmica → desmosomas (pénfigo); subepidérmica → hemidesmosomas y membrana basal (penfigoide). La histología explica el mecanismo y guía el diagnóstico.'
      ],
      foco:[
        'Pénfigo = desmosoma = ampolla dentro de la epidermis (flácida). Penfigoide = hemidesmosoma = ampolla bajo la epidermis (tensa).'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 4 y 5. Ross, Histología. Texto y Atlas, cap. 5.'
},

'ciclo-celular-division': {
  tema:'Ciclo celular y división celular',
  bloque:'Histología', programa:'unirm', cuatri:7, min:13,
  idea:'Las células se dividen siguiendo un programa ordenado, el ciclo celular, con puntos de control que evitan transmitir un ADN dañado. Comprenderlo es fundamental para entender el crecimiento, la reparación de los tejidos y, sobre todo, el cáncer, que es una enfermedad del ciclo celular.',
  claves:['ciclo celular','mitosis','interfase','huso mitótico','cromátida'],
  sigue:'piel-anexos-cutaneos',
  secciones:[
    {
      t:'Las fases del ciclo celular',
      p:[
        'El *ciclo celular* es la secuencia de eventos por la que una célula crece, duplica su ADN y se divide. Se divide en *interfase* y *mitosis*. La interfase, que ocupa la mayor parte del ciclo (unas 23 de las 24 horas en una célula de división rápida), comprende tres fases: *G1*, de crecimiento y de síntesis de proteínas, en la que la célula decide si continúa; *S*, de síntesis, en la que se duplica el ADN, de modo que cada cromosoma pasa a tener dos cromátidas hermanas; y *G2*, en la que la célula se prepara para dividirse. La *fase M* incluye la mitosis, que reparte el material genético, y la citocinesis, que divide el citoplasma.',
        'El contenido de ADN acompaña al ciclo. Una célula diploide en G1 tiene un contenido "2C" de ADN; durante la fase S se duplica hasta "4C", que se mantiene en G2 y en la mitosis hasta que las cromátidas hermanas se separan; las células hijas vuelven a tener 2C. Ojo con el número de cromosomas: una célula en G2 tiene 46 cromosomas, pero cada uno con dos cromátidas.',
        'Muchas células diferenciadas salen del ciclo y entran en *G0*, un estado de reposo del que pueden volver (como los hepatocitos, tras una hepatectomía parcial) o no (como las neuronas y los miocitos cardíacos, que permanecen en G0 de forma permanente). Otras células, como las de la capa basal de la epidermis o del epitelio intestinal, se dividen de forma continua a lo largo de toda la vida.'
      ],
      foco:[
        'G1 = 2C, crece. S = duplica el ADN (2C→4C). G2 = 4C, se prepara. M = se divide. G0 = reposo. Es la secuencia que aparece en todos los esquemas.'
      ]
    },
    {
      t:'La mitosis, fase por fase',
      p:[
        'La mitosis reparte de forma equitativa el ADN duplicado entre dos células hijas. En la *profase*, los cromosomas se condensan y se hacen visibles como estructuras de dos cromátidas unidas por el centrómero, el nucléolo desaparece y los centrosomas se separan hacia polos opuestos y organizan el *huso mitótico*, formado por microtúbulos. En la *prometafase*, la envoltura nuclear se desintegra y los microtúbulos se unen a los cinetocoros, complejos proteicos situados en el centrómero de cada cromosoma.',
        'En la *metafase*, los cromosomas se alinean en el plano ecuatorial de la célula (placa metafásica); es la fase en la que los cromosomas son más visibles y se estudia el cariotipo. En la *anafase*, la enzima separasa rompe las cohesinas que unían las cromátidas hermanas, y cada una, ya un cromosoma independiente, es arrastrada hacia un polo por el acortamiento de los microtúbulos. En la *telofase*, los cromosomas llegan a los polos y se descondensan, se reconstruye la envoltura nuclear y reaparece el nucléolo. La *citocinesis*, con un anillo contráctil de actina y miosina que estrangula la célula, divide el citoplasma y completa la división.',
        'Los venenos del huso interfieren con la mitosis y se usan en quimioterapia: la colchicina y los alcaloides de la vinca (vincristina, vinblastina) impiden el ensamblaje de los microtúbulos, y los taxanos (paclitaxel) los estabilizan en exceso, con lo que en ambos casos se detiene la célula en metafase.'
      ],
      foco:[
        'Profase = condensa. Metafase = alinea (cariotipo). Anafase = separa cromátidas. Telofase = reconstruye. Después, citocinesis. Y los fármacos del huso detienen la célula en metafase.'
      ]
    },
    {
      t:'El control del ciclo: ciclinas, cinasas y puntos de control',
      p:[
        'El ciclo lo dirigen proteínas llamadas *ciclinas*, cuya concentración sube y baja de forma cíclica, y *cinasas dependientes de ciclina* (CDK), que solo son activas cuando se unen a su ciclina. Cada transición está controlada por un complejo distinto: por ejemplo, la ciclina D con CDK4/6 y la ciclina E con CDK2 impulsan el paso de G1 a S, y la ciclina B con CDK1 impulsa el paso a la mitosis.',
        'El ciclo se vigila en *puntos de control* que detienen la célula si algo va mal. El punto de control de G1/S comprueba que el ADN esté intacto y que haya condiciones favorables para dividirse; el de G2/M, que el ADN se haya replicado bien; y el del huso (en la metafase), que todos los cromosomas estén unidos al huso antes de separarse. La proteína *p53*, el "guardián del genoma", detecta el daño en el ADN y activa a p21, que inhibe las CDK y detiene el ciclo para reparar el daño o, si es irreparable, induce la apoptosis. La proteína *Rb* actúa como freno en G1/S y se libera cuando la ciclina D la fosforila.',
        'Los genes que codifican estas proteínas se clasifican en dos grupos. Los *protooncogenes* (como los de las ciclinas y de los receptores de factores de crecimiento) promueven la división, y cuando se mutan a oncogenes la estimulan sin control. Los *genes supresores de tumores* (como p53 y RB) frenan la división, y cuando se pierden falla el freno. El cáncer surge de la acumulación de mutaciones en ambos tipos de genes.'
      ],
      foco:[
        'p53 y Rb = frenos (supresores tumorales). Ciclinas y CDK = aceleradores. Mutaciones de p53 se encuentran en más de la mitad de los cánceres humanos.'
      ]
    },
    {
      t:'Apoptosis, meiosis y aplicación clínica',
      p:[
        'La *apoptosis* es la muerte celular programada: la célula se contrae, su cromatina se condensa y se fragmenta, y forma cuerpos apoptóticos que los macrófagos fagocitan sin provocar inflamación. Es esencial en el desarrollo (por ejemplo, la separación de los dedos), en la renovación de los tejidos y en la eliminación de las células dañadas. Se activa por dos vías, la intrínseca (mitocondrial) y la extrínseca (receptores de muerte), y ambas culminan en las *caspasas*. Se distingue de la necrosis, que es una muerte accidental con hinchazón y ruptura de la célula y con inflamación.',
        'La *meiosis* es una forma especial de división que ocurre solo en las células germinales, y reduce el número de cromosomas a la mitad para formar los gametos. Consta de dos divisiones sucesivas sin duplicar el ADN entre ellas. En la primera, se separan los cromosomas homólogos, después de que se intercambien fragmentos entre ellos (sobrecruzamiento, que genera variabilidad genética). En la segunda, se separan las cromátidas hermanas. Los errores en la separación (no disyunción) producen aneuploidías, como la trisomía 21 del síndrome de Down.',
        '*Consideración clínica*: casi toda la quimioterapia actúa sobre las células que se dividen: los antimetabolitos (metotrexato, 5-fluorouracilo) actúan en la fase S, y los venenos del huso en la M. Por eso sus efectos secundarios recaen en tejidos de renovación rápida: la médula ósea (anemia, infecciones), el epitelio intestinal (diarrea, mucositis) y los folículos pilosos (alopecia). El índice de proliferación, medido con el marcador Ki-67, permite valorar la agresividad de un tumor.'
      ],
      foco:[
        'Apoptosis = muerte ordenada, sin inflamación, con caspasas. Necrosis = muerte accidental con inflamación. Los quimioterápicos dañan más a los tejidos que más se dividen.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 3. Alberts, Biología Molecular de la Célula, cap. 17 y 18.'
}

});
