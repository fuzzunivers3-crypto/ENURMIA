/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 16)
   AMPLIACIÓN de Histología, primera parte: técnica histológica,
   epitelios de revestimiento, epitelios glandulares, tejido
   conectivo y tejido adiposo, cartílago y hueso.
   Mismas claves de objeto que los apuntes originales (se
   sobrescriben con Object.assign); el campo `tema` no cambia.
   La cadena de `sigue` de la materia queda ordenada en los
   lotes 16 a 18, siguiendo el orden del Temario.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'tecnica-histologica-tinciones': {
  tema:'Técnica histológica y tinciones',
  bloque:'Histología', programa:'unirm', cuatri:7, min:13,
  idea:'Antes de reconocer un tejido en el microscopio hay que entender cómo llegó hasta ahí: un fragmento de tejido vivo no muestra color ni detalle hasta que se procesa y se tiñe, y el color que toma cada estructura depende de su química. Entender la técnica es lo que permite interpretar una lámina y distinguir un artefacto de una lesión.',
  claves:['hematoxilina','eosina','fijación','inclusión','PAS','basófilo','acidófilo'],
  sigue:'epitelios',
  secciones:[
    {
      t:'De la biopsia a la lámina: los pasos del procesamiento',
      p:[
        'Un fragmento de tejido recién extraído empieza a degradarse en minutos, por sus propias enzimas (autolisis) y por las bacterias. El primer paso, la *fijación*, detiene ese proceso: casi siempre se sumerge el tejido en formalina, que entrecruza las proteínas, inactiva las enzimas y conserva las células en la forma y la posición que tenían en vida. Un tejido mal fijado da imágenes deformadas que ninguna tinción posterior puede corregir.',
        'Después, el tejido se *deshidrata* con una serie de alcoholes de concentración creciente, se aclara con un disolvente como el xilol y se *incluye* en parafina, que penetra en todos los espacios y le da la consistencia necesaria para cortarlo. Con el *micrótomo* se obtienen cortes de 4 a 6 micrómetros de espesor, tan finos que la luz los atraviesa, que se montan en un portaobjetos. Antes de teñir hay que retirar la parafina y rehidratar el corte, porque los colorantes son solubles en agua.',
        'La *tinción* es el último paso, y sin ella el corte es casi transparente: las estructuras celulares tienen índices de refracción parecidos y apenas se distinguen. Al final se coloca un cubreobjetos con un medio de montaje, y la preparación puede conservarse durante años. Cada paso puede dejar huellas, los *artefactos*: pliegues, retracciones, precipitados de colorante, espacios vacíos donde había lípidos que los disolventes eliminaron. Reconocerlos evita interpretarlos como enfermedad.'
      ],
      foco:[
        'Orden que no debe fallar: fijar, deshidratar, aclarar, incluir, cortar, desparafinar, teñir y montar. Cada paso prepara el siguiente, y cambiar el orden lo arruina.'
      ]
    },
    {
      t:'Hematoxilina y eosina: la tinción de rutina',
      p:[
        'La combinación de *hematoxilina y eosina* (H&E) es la tinción básica de todos los laboratorios de patología. La hematoxilina se comporta como un colorante básico: se une a las estructuras con carga negativa, como el ADN del núcleo y el ARN de los ribosomas, y las tiñe de azul-violeta. Esas estructuras se llaman *basófilas*, porque tienen afinidad por los colorantes básicos. La eosina, un colorante ácido, se une a las estructuras con carga positiva, sobre todo a las proteínas del citoplasma y a las fibras de colágeno, y las tiñe de rosa. Esas estructuras son *acidófilas* o eosinófilas.',
        'Interpretar el color permite deducir la química de la célula. Un núcleo azul oscuro indica cromatina condensada; un citoplasma azulado, abundante ARN y ribosomas, como en las células que fabrican proteínas para exportar (células plasmáticas, del páncreas exocrino) o en las neuronas (sustancia de Nissl); un citoplasma muy rosado, abundantes proteínas y mitocondrias, como en las células musculares o en los eosinófilos. Una regla útil: el azul cuenta el ácido nucleico y el rosa cuenta las proteínas.',
        'La H&E tiene límites: no muestra bien los lípidos (se disuelven en el procesamiento y dejan espacios vacíos), el glucógeno, las fibras elásticas ni las reticulares, ni los hongos. Por eso existen las tinciones especiales.'
      ],
      foco:[
        'Basófilo no significa "que contiene bases": significa que atrae al colorante básico, o sea que es ácido (ADN, ARN). Es la confusión de vocabulario más frecuente en los exámenes.'
      ]
    },
    {
      t:'Tinciones especiales e histoquímica',
      p:[
        'Cuando la H&E no basta, se recurre a técnicas que resaltan un componente concreto. La reacción del *ácido peryódico de Schiff (PAS)* colorea de magenta los hidratos de carbono: glucógeno, mucinas, glucoproteínas, borde en cepillo y membranas basales. La *tinción de plata* (impregnación argéntica) tiñe de negro las fibras reticulares, de colágeno tipo III. La *orceína* y la resorcina-fucsina resaltan las fibras elásticas. El *tricrómico de Masson* distingue el colágeno (azul o verde) del músculo (rojo), y es muy útil para ver la fibrosis. El *Sudán* y el *rojo oleoso* tiñen lípidos, pero exigen cortes por congelación, sin disolventes. La técnica de *Giemsa* se usa en frotis de sangre, y la de *Ziehl-Neelsen* para las micobacterias.',
        'La *inmunohistoquímica* da un paso más: usa anticuerpos marcados que reconocen una proteína específica, y permite identificar el origen de un tumor, detectar receptores hormonales en el cáncer de mama o localizar un microorganismo. Y la *hibridación in situ* localiza secuencias de ácidos nucleicos concretas dentro del tejido.'
      ],
      foco:[
        'Una tabla para memorizar: PAS = hidratos de carbono; plata = reticulares; orceína = elásticas; Masson = colágeno; Sudán = lípidos; Ziehl-Neelsen = micobacterias. Con seis asociaciones resuelves la mayoría de las preguntas.'
      ]
    },
    {
      t:'Los microscopios: qué se ve con cada uno',
      p:[
        'El *microscopio óptico* utiliza luz visible y lentes de vidrio, y llega a unos 1.000 aumentos y a una resolución de aproximadamente 0,2 micrómetros, suficiente para ver células, núcleos y tejidos, pero no las estructuras internas más finas. El *microscopio de contraste de fases* permite observar células vivas sin teñir, y el de *fluorescencia* detecta moléculas marcadas con fluorocromos, base de la inmunofluorescencia.',
        'El *microscopio electrónico* utiliza un haz de electrones y alcanza resoluciones de nanómetros. El *de transmisión* (MET) atraviesa cortes ultrafinos y muestra el interior de las células: mitocondrias, retículo, ribosomas, uniones celulares. El *de barrido* (MEB) recorre la superficie de la muestra y da imágenes tridimensionales de superficies, como los cilios o las microvellosidades. Las imágenes electrónicas son siempre en blanco y negro; los colores que se ven en las fotografías se añaden después.',
        '*Consideración clínica*: la histología es la base del diagnóstico anatomopatológico. Ante un nódulo, la biopsia procesada como se ha descrito permite al patólogo decidir si es benigno o maligno. Una biopsia intraoperatoria puede estudiarse en unos 15 minutos con cortes por congelación, lo que ayuda al cirujano a decidir cuánto tejido debe extirpar.'
      ],
      foco:[
        'Óptico = células y tejidos. Electrónico de transmisión = interior de la célula. Electrónico de barrido = superficies. Si te preguntan qué usar para ver una unión celular, la respuesta es el electrónico de transmisión.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 1. Ross, Histología. Texto y Atlas, cap. 1.'
},

'epitelios': {
  tema:'Epitelios de revestimiento',
  bloque:'Histología', programa:'unirm', cuatri:7, min:14,
  idea:'Los epitelios cubren todas las superficies del cuerpo y tapizan sus cavidades. Se clasifican con solo dos preguntas —cuántas capas tienen y qué forma tienen las células de la superficie—, y cada tipo se relaciona con una función: proteger, absorber, secretar o permitir el intercambio.',
  claves:['epitelio simple','estratificado','cilíndrico','cúbico','plano','transición'],
  sigue:'epitelios-glandulares',
  secciones:[
    {
      t:'Qué es un epitelio y cómo se clasifica',
      p:[
        'Un epitelio es un tejido formado por células muy juntas, con poca matriz extracelular entre ellas, unidas por complejos de unión y apoyadas sobre una *membrana basal*. No tiene vasos sanguíneos propios: se nutre por difusión desde el tejido conectivo que hay debajo. Las células tienen *polaridad*: un polo apical, que mira a la luz o a la superficie, y un polo basal, que se apoya en la membrana basal.',
        'La clasificación de los epitelios de revestimiento parte de dos criterios. Por el *número de capas*: *simple* si tiene una sola, *estratificado* si tiene varias, y *seudoestratificado* si parece tener varias pero todas las células tocan la membrana basal. Por la *forma de las células de la capa superficial*: *plano* (escamoso), *cúbico* o *cilíndrico*. Se nombra combinando ambos: epitelio simple plano, estratificado cúbico, etcétera. En los estratificados manda la forma de la capa más superficial, aunque las profundas sean distintas.',
        'Además, algunos epitelios están *queratinizados* (con una capa superficial de células muertas llenas de queratina, como la epidermis) y otros no (como el del esófago). Y hay un epitelio con nombre propio, el de *transición* o urotelio, en las vías urinarias.'
      ],
      foco:[
        'Al ver una lámina, hazte siempre las dos preguntas en orden: ¿cuántas capas de núcleos hay? y ¿qué forma tienen las células de arriba? Con ellas nombras el epitelio.'
      ]
    },
    {
      t:'Los epitelios simples y sus funciones',
      p:[
        'El *epitelio simple plano* es una sola capa de células aplanadas, y facilita el intercambio rápido por difusión. Es el endotelio de los vasos sanguíneos, el mesotelio que tapiza las cavidades (pleura, pericardio, peritoneo), el de los alvéolos pulmonares y el de la cápsula de Bowman del riñón. El *epitelio simple cúbico*, con células tan altas como anchas, se ve en los túbulos renales, en los conductos de muchas glándulas y en la superficie del ovario, y participa en la secreción y la absorción.',
        'El *epitelio simple cilíndrico* tiene células más altas que anchas, con el núcleo en el tercio inferior. Reviste el tubo digestivo desde el estómago hasta el ano y la vesícula biliar. En el intestino delgado, presenta *microvellosidades* (borde en cepillo) que multiplican la superficie de absorción, y células caliciformes que secretan moco. En las trompas de Falopio se ven *cilios* que desplazan el óvulo.',
        'El *epitelio seudoestratificado cilíndrico ciliado* reviste la tráquea y los bronquios, y también se ve en las vías del epidídimo con estereocilios. Todas las células apoyan sobre la membrana basal, pero solo algunas llegan a la superficie, por lo que los núcleos se ven a distintas alturas. En la vía respiratoria contiene células ciliadas y células caliciformes: el moco atrapa las partículas y los cilios lo arrastran hacia la faringe, en la llamada escalera mucociliar.'
      ],
      foco:[
        'Función según forma: plano = intercambio; cúbico = secreción y absorción; cilíndrico = absorción y secreción con especializaciones. Seudoestratificado ciliado = vía respiratoria.'
      ]
    },
    {
      t:'Los epitelios estratificados y el epitelio de transición',
      p:[
        'Los epitelios estratificados protegen. El *estratificado plano queratinizado* forma la epidermis: las células se renuevan desde la capa basal, ascienden, se llenan de queratina, mueren y se descaman, dejando una barrera impermeable y resistente. El *estratificado plano no queratinizado* reviste las mucosas húmedas sometidas a fricción: la boca, el esófago, la vagina y el ano; sus células superficiales conservan el núcleo. Los estratificados cúbicos y cilíndricos son raros y se ubican en conductos glandulares grandes, como los de las glándulas sudoríparas y salivales.',
        'El *epitelio de transición* (urotelio) reviste la pelvis renal, los uréteres, la vejiga y parte de la uretra. Sus células superficiales, grandes y abovedadas (en paraguas), tienen placas rígidas en la membrana que forman una barrera casi impermeable a la orina, y se aplanan cuando el órgano se distiende: por eso el epitelio parece cambiar de espesor y de aspecto según el grado de llenado de la vejiga.'
      ],
      foco:[
        'Estratificado plano: queratinizado en la piel (seco), no queratinizado en mucosas húmedas. Transición: solo en las vías urinarias.'
      ]
    },
    {
      t:'Especializaciones de la superficie y aplicación clínica',
      p:[
        'La superficie apical puede tener estructuras especializadas. Las *microvellosidades* son proyecciones cortas y densas, sostenidas por filamentos de actina, que aumentan la superficie de absorción: el borde en cepillo del intestino y de los túbulos renales proximales. Los *estereocilios* son microvellosidades largas, ramificadas, que se ven en el epidídimo y en el oído interno. Los *cilios* son proyecciones móviles, con un axonema de nueve pares de microtúbulos periféricos y dos centrales, que se mueven gracias a la dineína.',
        '*Consideración clínica*: en el síndrome de Kartagener (discinesia ciliar primaria), un defecto de la dineína inmoviliza los cilios: aparecen infecciones respiratorias de repetición y bronquiectasias, porque el moco no se elimina, infertilidad masculina por espermatozoides inmóviles y, en la mitad de los casos, *situs inversus*. El tabaco, por su parte, daña el epitelio respiratorio: el seudoestratificado ciliado se sustituye por un estratificado plano (metaplasia escamosa), más resistente pero sin cilios, y eso favorece las infecciones y, con el tiempo, el cáncer de pulmón.',
        'Los epitelios también dan origen a las neoplasias más frecuentes: los *carcinomas* derivan de epitelios de revestimiento o glandulares. Un carcinoma escamoso proviene de un epitelio plano estratificado; un adenocarcinoma, de uno glandular. Saber qué epitelio hay en cada órgano ayuda a anticipar el tipo de tumor que puede originarse allí.'
      ],
      foco:[
        'Metaplasia = un epitelio se transforma en otro más resistente al estrés. El ejemplo clásico es el tabaco: el epitelio ciliado del bronquio pasa a escamoso.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 4. Ross, Histología. Texto y Atlas, cap. 5.'
},

'epitelios-glandulares': {
  tema:'Epitelios glandulares',
  bloque:'Histología', programa:'unirm', cuatri:7, min:12,
  idea:'Las glándulas son epitelios especializados en secretar. Se clasifican por el destino de su secreción (exocrinas o endocrinas), por su estructura (acinos, túbulos) y por el mecanismo con que liberan su producto (merocrino, apocrino, holocrino), y esa clasificación permite reconocerlas y entender su función.',
  claves:['glándula exocrina','endocrina','acino','merocrina','holocrina'],
  sigue:'tejido-conectivo',
  secciones:[
    {
      t:'Cómo se forman las glándulas: exocrinas y endocrinas',
      p:[
        'Las glándulas derivan de epitelios de revestimiento. Durante el desarrollo, las células epiteliales proliferan e invaginan en el tejido conectivo subyacente y forman cordones que se diferencian en unidades secretoras. Si la conexión con la superficie se mantiene, en forma de un *conducto*, la glándula es *exocrina* y vierte su secreción a una superficie o a una luz: sudor, saliva, moco, jugo gástrico, leche. Si el conducto se pierde, la glándula es *endocrina*: sus células quedan rodeadas de capilares y liberan sus productos, las hormonas, a la sangre.',
        'Algunas glándulas combinan ambos tipos. El páncreas tiene una porción exocrina, con acinos que producen enzimas digestivas, y una endocrina, los islotes de Langerhans, que secretan insulina y glucagón. También existen glándulas *unicelulares*, como las células caliciformes del intestino y del aparato respiratorio, que secretan moco, y glándulas *pluricelulares*, formadas por muchas células.'
      ],
      foco:[
        'El criterio para distinguir exocrina de endocrina es el destino de la secreción: superficie (con conducto) o sangre (sin conducto). No depende de qué sustancia se produce.'
      ]
    },
    {
      t:'Clasificación estructural de las glándulas exocrinas',
      p:[
        'Las glándulas exocrinas pluricelulares se clasifican por la forma de su conducto y de su porción secretora. El conducto puede ser *simple* (sin ramificar) o *compuesto* (ramificado). La porción secretora puede ser *tubular* (forma de tubo), *acinar* o *alveolar* (forma de saco redondeado) o *tubuloacinar* (mezcla de ambas). Así se habla de glándulas tubulares simples (glándulas intestinales), acinares compuestas (páncreas y glándulas salivales) o tubuloacinares compuestas (parótida).',
        'Según su producto, las células secretoras pueden ser *serosas* o *mucosas*. Las células serosas producen una secreción acuosa, rica en proteínas y enzimas: son piramidales, con un núcleo redondo y basal, un citoplasma basófilo en la base (retículo endoplasmático rugoso) y gránulos de cimógeno en el ápice. Las células mucosas producen moco, una secreción viscosa rica en glucoproteínas: tienen un citoplasma pálido y espumoso y un núcleo aplanado empujado hacia la base. Existen también acinos *mixtos*, con células mucosas y una media luna de células serosas (semiluna serosa) en el extremo.',
        'Alrededor de muchos acinos hay *células mioepiteliales*, células contráctiles que se apoyan en la membrana basal y que, al contraerse, exprimen el acino y empujan la secreción hacia el conducto. Son especialmente importantes en la glándula mamaria, donde la oxitocina las contrae para la salida de la leche, y en las glándulas salivales y sudoríparas.'
      ],
      foco:[
        'Seroso = citoplasma basófilo, núcleo redondo, enzimas (parótida, páncreas). Mucoso = citoplasma pálido, núcleo aplanado basal, moco (sublingual, células caliciformes).'
      ]
    },
    {
      t:'Cómo liberan su producto: merocrina, apocrina y holocrina',
      p:[
        'El mecanismo de liberación es otra forma de clasificar las glándulas exocrinas. En la secreción *merocrina*, la más frecuente, el producto sale de la célula por exocitosis, sin dañarla: es el caso de las glándulas salivales, el páncreas y las glándulas sudoríparas ecrinas. En la secreción *apocrina*, se pierde junto con el producto una parte del citoplasma apical; se atribuía a las glándulas mamarias (para los lípidos de la leche) y a las sudoríparas apocrinas de la axila y la región anogenital. En la secreción *holocrina*, la célula entera se llena de producto, muere y se desintegra, convirtiéndose en la propia secreción: el ejemplo típico es la glándula sebácea.',
        'La secreción holocrina obliga a una renovación constante de las células desde la capa basal de la glándula. En el acné, el sebo y las células muertas obstruyen el folículo piloso, y la glándula sebácea se inflama.'
      ],
      foco:[
        'Merocrina = exocitosis, la célula queda intacta. Apocrina = se pierde un poco de citoplasma. Holocrina = muere la célula entera. El ejemplo holocrino que hay que recordar es el sebo.'
      ]
    },
    {
      t:'Glándulas endocrinas y aplicación clínica',
      p:[
        'Las glándulas endocrinas se organizan de dos maneras. En algunas, las células se agrupan en *cordones* o en *nidos* rodeados de una densa red de capilares, como en la adenohipófisis, las paratiroides y la corteza suprarrenal. En otras, las células forman *folículos* que almacenan la hormona en su interior, como en la tiroides, cuyo coloide contiene tiroglobulina. La abundancia de capilares fenestrados permite que las hormonas pasen rápidamente a la sangre.',
        '*Consideración clínica*: la fibrosis quística ilustra cómo un defecto en las glándulas exocrinas altera todo el organismo. La mutación del canal de cloruro CFTR hace que las secreciones sean espesas y deshidratadas: obstruyen los conductos del páncreas (insuficiencia pancreática, malabsorción), de las vías respiratorias (infecciones de repetición) y de las glándulas sudoríparas (sudor salado, que sirve para el diagnóstico). Los tumores de glándulas se llaman adenomas si son benignos y adenocarcinomas si son malignos.',
        'Ejemplo trabajado: en una lámina de glándula salival se ven acinos con células de citoplasma pálido y núcleo aplanado en la base, y otros con células de citoplasma oscuro y núcleo redondo. La glándula tiene, por tanto, acinos mucosos y serosos: es una glándula mixta, como la submandibular. Con dos criterios morfológicos se puede inferir tanto la función como el tipo de secreción.'
      ],
      foco:[
        'Cuando veas una glándula, pregunta primero si tiene conducto (exocrina o endocrina), y luego qué tipo de células tiene (serosas o mucosas). Con esas dos respuestas identificas casi cualquier glándula.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 4. Ross, Histología. Texto y Atlas, cap. 5.'
},

'tejido-conectivo': {
  tema:'Tejido conectivo',
  bloque:'Histología', programa:'unirm', cuatri:7, min:14,
  idea:'El tejido conectivo sostiene, une y conecta a todos los demás tejidos. A diferencia de los epitelios, tiene pocas células y mucha matriz extracelular, y de las propiedades de esa matriz depende que un tejido sea blando, resistente o elástico.',
  claves:['fibroblasto','colágeno','elastina','matriz extracelular','sustancia fundamental'],
  sigue:'tejido-adiposo-cartilago-hueso',
  secciones:[
    {
      t:'Los componentes: células, fibras y sustancia fundamental',
      p:[
        'Todo tejido conectivo tiene tres componentes: células, fibras y sustancia fundamental. Las fibras y la sustancia fundamental forman la *matriz extracelular*, y la mayoría de las propiedades del tejido dependen de ella. Todo el tejido conectivo se origina en el mesénquima embrionario, un tejido de células estrelladas que derivan del mesodermo.',
        'La *sustancia fundamental* es un gel hidratado, transparente y sin forma, formado por glucosaminoglucanos (como el ácido hialurónico), proteoglucanos y glucoproteínas de adhesión (como la fibronectina). Retiene agua, lo que le da resistencia a la compresión, sirve de medio de difusión entre los vasos y las células y actúa como barrera frente a los microorganismos, aunque algunos (como los estreptococos) producen hialuronidasa para atravesarla.',
        'Las *fibras* son de tres tipos. Las de *colágeno* dan resistencia a la tracción. Las *reticulares* forman una fina red de sostén. Las *elásticas* permiten que el tejido se estire y recupere su forma.'
      ],
      foco:[
        'La matriz define al tejido. Mucha fibra de colágeno = tejido resistente (tendón). Mucha elastina = tejido elástico (aorta). Mucho líquido y poca fibra = tejido laxo (debajo de la piel).'
      ]
    },
    {
      t:'Las fibras: colágeno, elastina y reticulares',
      p:[
        'El *colágeno* es la proteína más abundante del cuerpo humano, y se conocen más de veinte tipos. Los cuatro principales son: el *tipo I*, que forma fibras gruesas y resistentes en la dermis, los tendones, los ligamentos y el hueso; el *tipo II*, que forma fibrillas finas en el cartílago hialino; el *tipo III*, que forma las fibras reticulares del estroma de órganos como el hígado, el bazo y los ganglios; y el *tipo IV*, que no forma fibras sino una malla laminar en las láminas basales.',
        'Su síntesis es un proceso complejo. El fibroblasto sintetiza cadenas de procolágeno en el retículo endoplasmático rugoso; allí las enzimas prolil y lisil hidroxilasa modifican la prolina y la lisina, y para ello necesitan vitamina C. Tres cadenas se enrollan en una triple hélice, el procolágeno se secreta, unas enzimas extracelulares cortan sus extremos y las moléculas resultantes se ensamblan en fibrillas y en fibras, que se entrecruzan gracias a la lisil oxidasa. Los defectos en cualquier paso dan lugar a enfermedades: el *escorbuto* (falta de vitamina C), el síndrome de Ehlers-Danlos (piel hiperextensible y articulaciones laxas) y la osteogénesis imperfecta (huesos frágiles).',
        'Las *fibras elásticas* están formadas por un núcleo de *elastina* rodeado de microfibrillas de fibrilina. Se estiran hasta un 150 % de su longitud y recuperan su forma, y abundan en las arterias grandes, los pulmones y la piel. Una mutación de la fibrilina causa el síndrome de Marfan, con aneurisma de aorta y luxación del cristalino. Las fibras elásticas no se ven con H&E; se tiñen con orceína.'
      ],
      foco:[
        'Colágeno: I = piel, tendón, hueso; II = cartílago; III = reticular; IV = lámina basal. Es la lista más preguntada de este tema, y se aprende en cinco minutos.'
      ]
    },
    {
      t:'Las células del tejido conectivo',
      p:[
        'Las células se dividen en residentes y transitorias. Entre las *residentes* está el *fibroblasto*, la célula principal, que sintetiza las fibras y la sustancia fundamental; cuando está en reposo se llama fibrocito. Los *macrófagos* fagocitan restos y microorganismos y presentan antígenos. Los *mastocitos* contienen gránulos con histamina y heparina, y desempeñan un papel central en la alergia: se recubren de IgE y, al contactar con el alérgeno, liberan su contenido. Las *células adiposas* almacenan lípidos, y las *células mesenquimales indiferenciadas* pueden diferenciarse en otros tipos celulares.',
        'Las células *transitorias* llegan desde la sangre y se activan ante una infección o una lesión: los *linfocitos*, las *células plasmáticas* (que producen anticuerpos y tienen el núcleo con la cromatina en "rueda de carro" y un citoplasma muy basófilo), los *neutrófilos*, los *eosinófilos* y los *monocitos*, que se transforman en macrófagos. Por eso el tejido conectivo es el escenario de la inflamación y de la reparación de las heridas.'
      ],
      foco:[
        'Mastocito = histamina + IgE = alergia y anafilaxia. Célula plasmática = anticuerpos = citoplasma muy basófilo. Fibroblasto = fabrica la matriz.'
      ]
    },
    {
      t:'Los tipos de tejido conectivo y su importancia clínica',
      p:[
        'El tejido conectivo propiamente dicho se clasifica según la proporción de fibras. El *laxo* tiene pocas fibras, muchas células y abundante sustancia fundamental; rellena espacios, rodea los vasos y sostiene los epitelios (lámina propia de las mucosas, dermis papilar). El *denso irregular* tiene haces de colágeno en todas direcciones, y resiste tensiones variables: dermis reticular, cápsulas de órganos. El *denso regular* tiene haces de colágeno paralelos, con fibroblastos alineados entre ellos, y resiste una tracción en un solo sentido: tendones y ligamentos.',
        'Existen además tejidos conectivos especializados: adiposo, cartílago, hueso y sangre, que se estudian por separado.',
        '*Consideración clínica*: la cicatrización de una herida es un proceso del tejido conectivo. Tras la lesión, los fibroblastos proliferan, sintetizan colágeno tipo III y después tipo I, y forman una cicatriz. Los fibroblastos se transforman en miofibroblastos, que se contraen y acercan los bordes. Un exceso de colágeno produce un queloide. Los tendones tienen poca vascularización y cicatrizan lentamente, y por eso una tendinitis o una rotura tardan meses en recuperarse.'
      ],
      foco:[
        'Laxo = rellena y sostiene. Denso irregular = resiste en todas direcciones. Denso regular = resiste en una dirección (tendón). La disposición de las fibras se corresponde con la función mecánica.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 5. Ross, Histología. Texto y Atlas, cap. 6.'
},

'tejido-adiposo-cartilago-hueso': {
  tema:'Tejido adiposo, cartílago y hueso',
  bloque:'Histología', programa:'unirm', cuatri:7, min:15,
  idea:'Son tejidos conectivos especializados: el adiposo almacena energía y produce calor, el cartílago soporta y amortigua sin vasos sanguíneos, y el hueso da rigidez y actúa como reserva de calcio. Su estructura microscópica explica sus propiedades y sus limitaciones para repararse.',
  claves:['adipocito','condrocito','osteocito','osteoblasto','osteoclasto','laguna'],
  sigue:'tejido-muscular',
  secciones:[
    {
      t:'Tejido adiposo: blanco y pardo',
      p:[
        'El tejido adiposo es un conectivo especializado en almacenar energía en forma de triglicéridos. El *tejido adiposo blanco*, el más abundante en el adulto, está formado por adipocitos *uniloculares*: cada célula tiene una sola gran gota de lípido que empuja el núcleo y el citoplasma hacia la periferia, y le da aspecto de anillo de sello. En los cortes de rutina, el lípido se disuelve y los adipocitos aparecen como espacios vacíos rodeados de una fina línea de citoplasma. Además de almacén de energía, el tejido blanco es un aislante térmico, un amortiguador mecánico y un órgano endocrino: secreta leptina, que informa al cerebro de las reservas de grasa, y adiponectina.',
        'El *tejido adiposo pardo* está formado por adipocitos *multiloculares*, con muchas gotas pequeñas de lípido y abundantes mitocondrias ricas en citocromos (que le dan el color pardo). Sus mitocondrias contienen *termogenina* (UCP1), que desacopla la respiración de la síntesis de ATP y disipa la energía en forma de calor. Es abundante en el recién nacido, que lo utiliza para conservar la temperatura, y disminuye en el adulto, aunque persiste en pequeñas cantidades.',
        '*Consideración clínica*: los tumores del tejido adiposo son los lipomas (benignos) y los liposarcomas (malignos). La obesidad se asocia a un aumento del tamaño (hipertrofia) y del número (hiperplasia) de adipocitos, y a inflamación crónica del tejido, con consecuencias metabólicas como la resistencia a la insulina.'
      ],
      foco:[
        'Blanco = unilocular, almacén, anillo de sello. Pardo = multilocular, mitocondrias con UCP1, calor, recién nacido.'
      ]
    },
    {
      t:'Cartílago: tres tipos, ningún vaso',
      p:[
        'El cartílago es un conectivo de consistencia firme y flexible, formado por *condrocitos* alojados en cavidades (*lagunas*) dentro de una matriz rica en colágeno y proteoglucanos, con mucha agua. Es *avascular*: los nutrientes llegan por difusión desde el pericondrio, la capa de conectivo que lo rodea, o desde el líquido sinovial en las articulaciones. Esta falta de vasos explica que crezca despacio y que se repare muy mal cuando se lesiona.',
        'Existen tres tipos. El *cartílago hialino*, el más abundante, tiene una matriz con fibrillas de colágeno tipo II que se ven poco en H&E, y forma el esqueleto fetal, el cartílago articular, la tráquea, los bronquios, la nariz y los cartílagos costales. El *cartílago elástico* contiene, además, redes de fibras elásticas: se encuentra en el pabellón auricular, en la epiglotis y en el conducto auditivo externo. El *fibrocartílago* mezcla cartílago con gruesos haces de colágeno tipo I, y forma los discos intervertebrales, los meniscos y la sínfisis del pubis; no tiene pericondrio.',
        'El cartílago crece de dos formas: por *aposición*, en la que las células del pericondrio añaden nuevas capas desde fuera, y por *crecimiento intersticial*, donde los condrocitos se dividen dentro de la matriz y forman grupos isógenos. En la vejez, el cartílago hialino se calcifica y pierde elasticidad; en la artrosis, el cartílago articular se desgasta y no se regenera.'
      ],
      foco:[
        'Hialino = colágeno II (articulaciones, tráquea). Elástico = elastina (oreja, epiglotis). Fibrocartílago = colágeno I (disco, menisco). Todos son avasculares.'
      ]
    },
    {
      t:'Hueso: células, matriz y organización',
      p:[
        'El hueso es un conectivo mineralizado. Su *matriz* tiene una parte orgánica (colágeno tipo I en un 90 %) y una inorgánica (cristales de hidroxiapatita de calcio y fosfato): el colágeno aporta flexibilidad y la hidroxiapatita, dureza. Cuatro tipos de células lo forman. Las *células osteoprogenitoras* se originan del mesénquima y dan lugar a los osteoblastos. Los *osteoblastos* sintetizan la matriz orgánica (osteoide) y participan en su mineralización. Los *osteocitos*, osteoblastos atrapados en la matriz, ocupan lagunas y se comunican entre sí por canalículos, y mantienen el hueso. Los *osteoclastos*, grandes y multinucleados, derivan de precursores de monocitos y reabsorben el hueso mediante un borde rugoso que crea las lagunas de Howship.',
        'El hueso se organiza en dos formas. El *hueso compacto* está formado por osteones o sistemas de Havers: laminillas concéntricas de matriz alrededor de un conducto central con vasos y nervios, con osteocitos en las lagunas entre laminillas. Los conductos de Volkmann, transversales, comunican los conductos de Havers entre sí. El *hueso esponjoso* está formado por trabéculas que delimitan espacios ocupados por médula ósea, y no tiene osteones. Las capas superficiales del hueso se cubren de *periostio*, y las cavidades internas, de *endostio*.',
        'La formación del hueso, u *osificación*, ocurre de dos maneras. En la *osificación intramembranosa*, el hueso se forma directamente dentro de una membrana de mesénquima, y así se generan los huesos planos del cráneo y la clavícula. En la *osificación endocondral*, se forma primero un molde de cartílago hialino que después se sustituye por hueso: es el mecanismo de los huesos largos, que crecen en longitud gracias al cartílago de crecimiento (disco epifisario).'
      ],
      foco:[
        'Osteoblasto = forma. Osteocito = mantiene. Osteoclasto = destruye (viene de monocitos). Osteón = conducto de Havers + laminillas. Volkmann = conecta Havers entre sí.'
      ]
    },
    {
      t:'Remodelado óseo y clínica',
      p:[
        'El hueso es un tejido dinámico: se remodela de forma continua durante toda la vida, por la acción coordinada de osteoclastos, que reabsorben, y osteoblastos, que forman hueso nuevo. Ese equilibrio depende de hormonas y señales locales: la hormona paratiroidea, que actúa sobre el osteoblasto y este activa al osteoclasto mediante RANKL, aumenta la resorción y eleva el calcio en sangre; la calcitonina la inhibe; la vitamina D favorece la absorción de calcio y la mineralización.',
        '*Consideración clínica*: en la osteoporosis, la resorción supera a la formación, y el hueso pierde masa y se vuelve frágil, sobre todo tras la menopausia por la caída de los estrógenos. En el raquitismo (niños) y la osteomalacia (adultos), falta vitamina D y la matriz no se mineraliza. En el tratamiento, los bifosfonatos inhiben a los osteoclastos. Cuando se rompe un hueso, la reparación pasa por la formación de un hematoma, de un callo blando de cartílago y de un callo duro de hueso, que se remodela poco a poco: un proceso que dura semanas o meses.',
        'Ejemplo trabajado: un niño de 12 años con una fractura de fémur se recupera en pocas semanas, mientras que un adulto con una lesión del menisco necesita cirugía. La diferencia es el aporte de sangre: el hueso está muy vascularizado y se repara, mientras que el fibrocartílago del menisco, que es avascular, se cura muy mal.'
      ],
      foco:[
        'Pregunta clásica: la hormona paratiroidea no actúa directamente sobre el osteoclasto, porque este carece de receptores; actúa sobre el osteoblasto, que activa al osteoclasto.'
      ]
    }
  ],
  ref:'Junqueira, Histología Básica, cap. 6, 7 y 8.'
}

});
