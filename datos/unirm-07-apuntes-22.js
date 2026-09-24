/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 22)
   MICROBIOLOGIA MEDICA reescrita al estandar extenso (como
   Anatomia I, Fisiologia I, Histologia, Bioquimica I). Mismas
   13 claves de objeto que ya existian (en apuntes-2.js, -3.js,
   -4.js y -10.js), asi que Object.assign las sobrescribe sin
   romper el enlace "Leer el tema" -el `tema` no cambia-. De paso
   se arregla la cadena `sigue`, que estaba rota en dos puntos
   (bacilos-gramnegativos y virologia-basica quedaban huerfanos,
   fuera de la cadena real) y termina apuntando a Estadistica I
   ('tipos-de-variables'), la materia siguiente del cuatrimestre.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'estructura-bacteriana-tincion-gram': {
  tema:'Estructura bacteriana y tinción de Gram',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:14,
  idea:'La tinción de Gram no es un capricho de laboratorio: separa a las bacterias en dos grandes familias según la estructura de su pared celular, y esa sola división ya orienta buena parte del tratamiento antibiótico antes incluso de identificar la especie exacta.',
  claves:['gram','peptidoglicano','cápsula','flagelo','pared celular','endospora'],
  sigue:'crecimiento-bacteriano-medios-cultivo',
  secciones:[
    {
      t:'Por qué unas bacterias se tiñen violeta y otras rosa',
      p:[
        'La tinción de Gram es un procedimiento de cuatro pasos: cristal violeta, lugol (que fija el colorante como un complejo grande), un decolorante (alcohol-acetona) y safranina como contracolorante. El paso crítico es el decolorante. Las bacterias grampositivas tienen una pared celular gruesa, formada por muchas capas de peptidoglicano entrecruzado, que atrapa el complejo cristal violeta-lugol y no deja que el alcohol lo saque: quedan violetas. Las bacterias gramnegativas tienen una capa de peptidoglicano mucho más delgada, una sola capa, y además poseen una segunda membrana externa por fuera de esa pared, rica en lípidos, que el alcohol disuelve; al perder esa barrera, el complejo violeta se escapa con facilidad y la célula queda incolora, así que el contracolorante rosa (safranina) es lo que finalmente se ve.',
        'La diferencia no es cosmética: la pared gruesa de las grampositivas explica por qué toleran mejor ciertos estreses osmóticos, y la membrana externa de las gramnegativas es la que porta el lipopolisacárido (LPS), la molécula responsable de buena parte de la toxicidad de estas bacterias cuando invaden al huésped, un tema que se retoma en mecanismos de patogenicidad.'
      ],
      foco:[
        'Grampositiva = pared gruesa de peptidoglicano, retiene el violeta. Gramnegativa = pared delgada + membrana externa con LPS, se decolora y queda rosa (safranina). La membrana externa es la clave de la diferencia, no solo el grosor de la pared.'
      ]
    },
    {
      t:'Estructuras accesorias: cápsula, flagelo y endospora',
      p:[
        'Por fuera de la pared, algunas bacterias tienen una cápsula, una capa de polisacárido (rara vez proteína, como en Bacillus anthracis) que no se tiñe con el Gram convencional pero que es visible como un halo claro alrededor de la célula con tinciones especiales. La cápsula es un factor de virulencia antifagocítico: dificulta que los neutrófilos y macrófagos reconozcan y engullan a la bacteria, y es la base de vacunas polisacáridas como la antineumocócica o la anti-Haemophilus influenzae tipo b.',
        'El flagelo es un apéndice proteico (flagelina) responsable de la motilidad bacteriana; su número y disposición (uno solo, en un extremo, o varios repartidos por toda la superficie) ayuda a clasificar especies. La endospora, en cambio, es una forma de resistencia extrema que forman solo algunos géneros grampositivos (los más relevantes clínicamente: Bacillus y Clostridium), capaz de sobrevivir calor, desecación y desinfectantes comunes durante años; es la razón por la que la esterilización en autoclave necesita temperatura Y presión sostenidas, y no basta con hervir el material.'
      ],
      foco:[
        '*Consideración clínica*: solo Bacillus y Clostridium forman endosporas. Es un dato que aparece en el diagnóstico de tétanos (Clostridium tetani), botulismo (Clostridium botulinum), gangrena gaseosa (Clostridium perfringens) y ántrax (Bacillus anthracis) -todas comparten esa capacidad de sobrevivir en el ambiente durante años como esporas.'
      ]
    },
    {
      t:'Excepciones que confirman la regla: bacterias que el Gram no clasifica bien',
      p:[
        'No todas las bacterias clínicamente importantes se tiñen bien con el Gram convencional. Mycobacterium tuberculosis tiene una pared con un altísimo contenido de ácidos micólicos (ceras), que la hace prácticamente impermeable al colorante: para verla se usa la tinción de Ziehl-Neelsen (ácido-alcohol resistencia), no el Gram. Treponema pallidum (sífilis) es demasiado delgado para verse bien con Gram y se visualiza mejor con microscopía de campo oscuro. Mycoplasma directamente carece de pared celular, así que no se tiñe con Gram en absoluto -y por la misma razón, es intrínsecamente resistente a los antibióticos betalactámicos, que actúan precisamente sobre la síntesis de esa pared que Mycoplasma no tiene.',
        'Reconocer estas excepciones evita el error de intentar clasificar todo como "grampositivo o gramnegativo": hay un tercer grupo, el de las bacterias que necesitan una tinción o técnica distinta, y ese grupo suele concentrar patógenos importantes precisamente por lo atípico de su pared.'
      ],
      foco:[
        'Micobacterias → Ziehl-Neelsen (ácido-alcohol resistentes). Treponema → campo oscuro. Mycoplasma → sin pared, no se tiñe y es resistente a betalactámicos por diseño, no por mutación.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.'
},

'crecimiento-bacteriano-medios-cultivo': {
  tema:'Crecimiento bacteriano y medios de cultivo',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:13,
  idea:'Cultivar una bacteria es, en el fondo, adivinar qué necesita para crecer y ofrecérselo en una placa: temperatura, nutrientes, oxígeno o su ausencia. Cada medio de cultivo está diseñado para responder una pregunta diagnóstica concreta.',
  claves:['agar sangre','MacConkey','aerobio','anaerobio','fase logarítmica'],
  sigue:'cocos-grampositivos-catalasa-coagulasa',
  secciones:[
    {
      t:'La curva de crecimiento bacteriano',
      p:[
        'Cuando se inocula una bacteria en un medio líquido fresco, su población sigue una curva con cuatro fases características. La fase de latencia (lag) es un periodo inicial sin aumento apreciable del número de células, en el que la bacteria se adapta metabólicamente al nuevo medio, sintetizando las enzimas que va a necesitar. La fase logarítmica (o exponencial) es el periodo de división más rápida y constante, donde el número de bacterias se duplica a intervalos regulares (el tiempo de generación): es la fase de mayor actividad metabólica y, por eso, la de mayor susceptibilidad a los antibióticos que actúan sobre la síntesis de pared o de proteínas. La fase estacionaria ocurre cuando los nutrientes empiezan a agotarse y se acumulan productos de desecho: la tasa de división se iguala a la de muerte celular y la población se estabiliza. Finalmente, la fase de muerte o declive es cuando la mortalidad supera a la división, por agotamiento extremo de nutrientes o acumulación tóxica de desechos.'
      ],
      foco:[
        'La fase logarítmica es la de mayor susceptibilidad a antibióticos que inhiben la síntesis de pared (como los betalactámicos): necesitan que la bacteria esté dividiéndose activamente para hacer efecto.'
      ]
    },
    {
      t:'Medios de cultivo según su función',
      p:[
        'El agar sangre es un medio enriquecido, de uso general, que permite crecer a la mayoría de las bacterias de importancia clínica y además revela el tipo de hemólisis que produce cada especie: la hemólisis beta es una destrucción completa de los eritrocitos (zona clara alrededor de la colonia, típica de Streptococcus pyogenes), la hemólisis alfa es una destrucción parcial con un halo verdoso (típica de Streptococcus pneumoniae y del grupo viridans), y la ausencia de hemólisis se llama hemólisis gamma. El agar MacConkey es un medio selectivo y diferencial: selectivo porque las sales biliares y el cristal violeta que contiene inhiben a las bacterias grampositivas, dejando crecer solo gramnegativas; diferencial porque incluye lactosa e indicador de pH, de modo que las bacterias que fermentan lactosa (como Escherichia coli) producen colonias rosadas/rojas por la acidificación, mientras que las que no la fermentan (como Salmonella o Shigella) producen colonias incoloras.',
        'Existen además medios de enriquecimiento (como el caldo de tioglicolato, que favorece tanto aerobios como anaerobios) y medios muy selectivos para patógenos específicos, como el agar Thayer-Martin para Neisseria gonorrhoeae, que contiene antibióticos que inhiben la flora normal de las mucosas para dejar crecer solo al gonococo.'
      ],
      foco:[
        'MacConkey: selectivo (solo gramnegativos) y diferencial (rosado = fermenta lactosa, como E. coli; incoloro = no fermenta, como Salmonella/Shigella). Agar sangre: revela el TIPO de hemólisis (beta, alfa o gamma), un dato clave para orientar el género de cocos grampositivos.'
      ]
    },
    {
      t:'Requerimientos de oxígeno',
      p:[
        'Según su relación con el oxígeno, las bacterias se clasifican en aerobias estrictas (necesitan oxígeno, no pueden fermentar), anaerobias estrictas (el oxígeno les es tóxico, porque carecen de las enzimas para neutralizar sus derivados reactivos, como la catalasa y la superóxido dismutasa), anaerobias facultativas (pueden vivir con o sin oxígeno, cambiando su metabolismo según el ambiente -la mayoría de las enterobacterias son de este tipo), y microaerófilas (necesitan oxígeno pero en concentraciones bajas, como Helicobacter pylori y Campylobacter). Esta clasificación no es un dato memorístico aislado: determina directamente cómo se procesa una muestra en el laboratorio -un cultivo para anaerobios estrictos requiere condiciones especiales de transporte y siembra que excluyan el oxígeno desde el momento de la toma de la muestra, o el resultado será falsamente negativo.'
      ],
      foco:[
        '*Consideración clínica*: sospechar infección por anaerobios (Bacteroides, Clostridium, Fusobacterium) ante abscesos con mal olor, infecciones cerca de mucosas (boca, intestino) o gas en los tejidos -y avisar al laboratorio para que use medio de transporte anaerobio, porque un cultivo convencional dará falso negativo.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.'
},

'cocos-grampositivos-catalasa-coagulasa': {
  tema:'Cocos grampositivos',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:15,
  idea:'Dos pruebas bioquímicas sencillas -catalasa y coagulasa- bastan para separar a los tres géneros de cocos grampositivos más relevantes en la clínica: Staphylococcus, Streptococcus y Enterococcus.',
  claves:['Staphylococcus','Streptococcus','catalasa','coagulasa','hemólisis','aureus'],
  sigue:'bacilos-gramnegativos',
  secciones:[
    {
      t:'La prueba de catalasa separa Staphylococcus de Streptococcus',
      p:[
        'La catalasa es una enzima que descompone el peróxido de hidrógeno (agua oxigenada) en agua y oxígeno gaseoso, lo que se observa como burbujeo al poner una gota de peróxido sobre la colonia. Staphylococcus es catalasa POSITIVO; Streptococcus y Enterococcus son catalasa NEGATIVOS. Esta única prueba, rápida y barata, ya divide de inmediato a los cocos grampositivos en dos grandes ramas antes de seguir investigando, y es de las primeras pruebas que se corren en el laboratorio de microbiología clínica frente a un coco grampositivo en racimos (Staphylococcus) o en cadenas/pares (Streptococcus, según su morfología característica al microscopio).'
      ],
      foco:[
        'Catalasa POSITIVA → Staphylococcus. Catalasa NEGATIVA → Streptococcus/Enterococcus. Es la primera bifurcación del árbol diagnóstico de cocos grampositivos.'
      ]
    },
    {
      t:'Dentro de Staphylococcus: la coagulasa separa al patógeno más agresivo',
      p:[
        'Una vez identificado como Staphylococcus (catalasa positivo), la siguiente prueba es la coagulasa, una enzima que coagula el plasma. Staphylococcus aureus es coagulasa POSITIVO, y es el más virulento del género: causa infecciones de piel y tejidos blandos (forúnculos, abscesos), neumonía necrotizante, endocarditis aguda, osteomielitis, síndrome de shock tóxico (por una exotoxina superantígeno, TSST-1) e intoxicación alimentaria (por una enterotoxina termoestable que actúa incluso si la bacteria ya murió por la cocción). Los estafilococos coagulasa NEGATIVOS (el más relevante es Staphylococcus epidermidis) son menos virulentos por sí mismos, pero son la causa más frecuente de infecciones asociadas a dispositivos médicos (catéteres, prótesis, válvulas artificiales), porque producen un biofilm (una capa de polisacárido extracelular) que se adhiere a superficies plásticas o metálicas y protege a la bacteria de antibióticos y del sistema inmune.',
        'Un dato de resistencia relevante: Staphylococcus aureus resistente a meticilina (SARM/MRSA) ha adquirido un gen (mecA) que codifica una proteína de unión a penicilina alterada, con baja afinidad por TODOS los betalactámicos, no solo por meticilina -así que el nombre es un poco engañoso: SARM es resistente a la clase entera de betalactámicos, y requiere antibióticos alternativos como vancomicina o linezolid.'
      ],
      foco:[
        'Coagulasa POSITIVA (S. aureus) = el más virulento, causa desde forúnculos hasta shock tóxico. Coagulasa NEGATIVA (S. epidermidis) = menos virulento pero forma biofilm en catéteres y prótesis. SARM es resistente a TODA la familia de betalactámicos, no solo a meticilina.'
      ]
    },
    {
      t:'Streptococcus: clasificación por hemólisis y por el grupo de Lancefield',
      p:[
        'Los estreptococos se clasifican en primera instancia por el tipo de hemólisis que producen en agar sangre (visto en el tema anterior): Streptococcus pyogenes (grupo A de Lancefield) es beta-hemolítico y causa faringitis, escarlatina, impétigo, y sus complicaciones no supurativas -fiebre reumática y glomerulonefritis postestreptocócica- que son reacciones inmunológicas tardías, no infección directa. Streptococcus agalactiae (grupo B) también es beta-hemolítico y es la causa más importante de sepsis y meningitis neonatal, transmitida de la madre colonizada al recién nacido durante el parto, razón por la que se hace tamizaje vaginal-rectal en el tercer trimestre del embarazo. Streptococcus pneumoniae es alfa-hemolítico, se distingue de otros alfa-hemolíticos (como el grupo viridans) por ser sensible a optoquina y por solubilizarse en bilis, y es la causa bacteriana más frecuente de neumonía adquirida en la comunidad, otitis media y meningitis en niños y adultos mayores.',
        'Enterococcus (antes clasificado dentro de Streptococcus del grupo D) es catalasa negativo, no beta-hemolítico típicamente, y se distingue por su capacidad de crecer en condiciones que matarían a otros estreptococos (alta concentración de sal, bilis); es relevante clínicamente por su resistencia intrínseca a muchos antibióticos y por causar infecciones urinarias y endocarditis, sobre todo en pacientes hospitalizados.'
      ],
      foco:[
        '*Consideración clínica*: la fiebre reumática y la glomerulonefritis postestreptocócica NO son infección activa por S. pyogenes -son secuelas inmunológicas semanas después de una faringitis no tratada. Por eso tratar la faringitis estreptocócica a tiempo previene la fiebre reumática, pero ya instalada esta última no se trata con más antibiótico.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.'
},

'bacilos-gramnegativos': {
  tema:'Bacilos gramnegativos',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:14,
  idea:'Un grupo enorme y variado que en el laboratorio se ordena con pocas preguntas: si fermenta lactosa, si produce oxidasa, y de qué sitio del cuerpo viene la muestra.',
  claves:['Escherichia coli','Salmonella','Pseudomonas','lactosa','enterobacteria'],
  sigue:'mecanismos-patogenicidad',
  secciones:[
    {
      t:'Enterobacterias: el árbol de la fermentación de lactosa',
      p:[
        'La familia Enterobacteriaceae agrupa bacilos gramnegativos que habitan normalmente el tracto intestinal (de ahí su nombre) y que se diferencian, en un primer paso práctico, por si fermentan o no la lactosa en agar MacConkey. Escherichia coli, la enterobacteria más abundante de la flora intestinal normal, fermenta lactosa (colonias rosadas) y es la causa más frecuente de infección urinaria no complicada, además de tener cepas patógenas específicas causantes de diarrea (como E. coli enterohemorrágica O157:H7, productora de toxina Shiga, asociada al síndrome hemolítico-urémico). Klebsiella pneumoniae también fermenta lactosa y es una causa relevante de neumonía en pacientes con comorbilidades (alcoholismo, diabetes), típicamente con esputo espeso y sanguinolento.',
        'Salmonella y Shigella, en cambio, NO fermentan lactosa (colonias incoloras en MacConkey), lo que ya las distingue del grupo anterior. Salmonella typhi causa la fiebre tifoidea, una infección sistémica con bacteriemia sostenida; otras especies de Salmonella producen gastroenteritis. Shigella causa disentería bacilar (diarrea con sangre y moco), es extremadamente infecciosa -bastan pocas bacterias para causar enfermedad, a diferencia de la mayoría de las causas bacterianas de diarrea que requieren un inóculo mucho mayor- y se transmite de persona a persona con facilidad, por lo que brotes en guarderías y hacinamiento son típicos.'
      ],
      foco:[
        'MacConkey rosado (fermenta lactosa) → E. coli, Klebsiella. MacConkey incoloro (no fermenta) → Salmonella, Shigella. Shigella necesita un inóculo bacteriano muy bajo para causar enfermedad: eso explica su altísima transmisibilidad persona a persona.'
      ]
    },
    {
      t:'No fermentadores: Pseudomonas, el oportunista por excelencia',
      p:[
        'Pseudomonas aeruginosa no pertenece a la familia Enterobacteriaceae: es un bacilo gramnegativo no fermentador, oxidasa positivo (a diferencia de las enterobacterias, que son oxidasa negativas), que se identifica también por su pigmento verdoso (piocianina) y su olor característico a uvas. Es un patógeno oportunista: rara vez enferma a personas sanas, pero es devastador en huéspedes comprometidos -pacientes con fibrosis quística (donde coloniza crónicamente la vía aérea), quemados extensos, neutropénicos, pacientes con ventilación mecánica prolongada, o con catéteres urinarios permanentes. Tiene resistencia intrínseca a numerosos antibióticos (por baja permeabilidad de su membrana externa y bombas de expulsión activa) y una notable capacidad de desarrollar resistencia adicional durante el tratamiento, lo que obliga a menudo a combinaciones de antibióticos antipseudomónicos específicos, no a cualquier betalactámico.'
      ],
      foco:[
        '*Consideración clínica*: sospechar Pseudomonas ante infección en un huésped comprometido (quemado, neutropénico, fibrosis quística, ventilación prolongada) con secreción verdosa y olor dulzón. No responde a los antibióticos de primera línea habituales: necesita cobertura antipseudomónica específica.'
      ]
    },
    {
      t:'Otros bacilos gramnegativos relevantes por su nicho clínico',
      p:[
        'Haemophilus influenzae es un cocobacilo gramnegativo que, en su forma capsulada tipo b, fue históricamente la causa más frecuente de meningitis bacteriana infantil antes de la vacunación sistemática (vacuna Hib), y sigue causando otitis media, sinusitis y epiglotitis. Neisseria meningitidis (meningococo) y Neisseria gonorrhoeae (gonococo) son diplococos gramnegativos (no bacilos alargados, sino con forma de "granos de café" enfrentados): el meningococo causa meningitis epidémica y meningococcemia con la característica erupción petequial/purpúrica; el gonococo causa la infección de transmisión sexual gonorrea y, en el recién nacido, conjuntivitis por paso a través del canal del parto (de ahí la profilaxis ocular universal al nacer). Campylobacter jejuni y Helicobacter pylori son bacilos gramnegativos curvos, microaerófilos: el primero es de las causas bacterianas más comunes de gastroenteritis en el mundo (y se asocia al síndrome de Guillain-Barré postinfeccioso), y el segundo es la causa principal de gastritis crónica y úlcera péptica, y un factor de riesgo establecido de cáncer gástrico.'
      ],
      foco:[
        'Diplococos gramnegativos = Neisseria (meningococo o gonococo). Curvos y microaerófilos = Campylobacter (diarrea, Guillain-Barré) o Helicobacter (úlcera péptica, cáncer gástrico). Cocobacilo capsulado = Haemophilus influenzae tipo b (meningitis infantil, prevenible por vacuna).'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.'
},

'mecanismos-patogenicidad': {
  tema:'Mecanismos de patogenicidad',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:13,
  idea:'Que una bacteria cause enfermedad no es automático: necesita adherirse, evadir las defensas del huésped y, muchas veces, producir toxinas. Entender estos mecanismos es lo que permite predecir la clínica de una infección incluso sin memorizar cada especie.',
  claves:['exotoxina','endotoxina','lipopolisacárido','adhesina','virulencia'],
  sigue:'antibioticos-mecanismos-resistencia',
  secciones:[
    {
      t:'Exotoxina contra endotoxina: la distinción más preguntada de todo el tema',
      p:[
        'Las exotoxinas son proteínas secretadas activamente por la bacteria (grampositiva o gramnegativa), con un mecanismo de acción específico sobre una molécula diana del huésped, lo que las hace altamente potentes incluso en cantidades mínimas, y además ANTIGÉNICAS: el sistema inmune puede generar anticuerpos neutralizantes contra ellas, lo que es la base de vacunas toxoides (como la antitetánica y la antidiftérica, que no vacunan contra la bacteria sino contra su toxina). Su gen suele estar codificado en plásmidos o bacteriófagos, lo que explica por qué cepas de una misma especie pueden o no producir la toxina según si portan ese elemento genético móvil.',
        'La endotoxina, en cambio, no es secretada: es el lipopolisacárido (LPS) que forma parte estructural de la membrana externa de TODAS las bacterias gramnegativas, y se libera cuando la bacteria muere y se lisa (por ejemplo, por acción del sistema inmune o de un antibiótico). No es una proteína sino un complejo lípido-polisacárido, es termoestable (resiste el calor, a diferencia de la mayoría de las exotoxinas), tiene una potencia mucho menor por molécula, y NO es específica: cualquier LPS de cualquier bacteria gramnegativa produce el mismo cuadro clínico general -fiebre, hipotensión, coagulación intravascular diseminada en casos graves- porque el componente tóxico (el lípido A) es estructuralmente similar entre especies. Por eso no existe una "vacuna contra la endotoxina" análoga a los toxoides: no tiene la especificidad antigénica necesaria.'
      ],
      foco:[
        'Exotoxina = proteína secretada, específica, muy potente, antigénica (vacunable con toxoide), de grampositivas o gramnegativas. Endotoxina = LPS de la pared, liberado al morir la bacteria, inespecífica, termoestable, solo de gramnegativas, no vacunable de la misma forma.'
      ]
    },
    {
      t:'Adhesión: el primer paso obligatorio de toda infección',
      p:[
        'Antes de poder invadir o producir toxinas, una bacteria tiene que adherirse a la superficie del huésped -de lo contrario, el flujo de moco, orina o el peristaltismo intestinal la arrastraría fuera. Las adhesinas son las moléculas bacterianas responsables de esta unión específica a receptores de la célula huésped; los pili o fimbrias (estructuras filamentosas proteicas, distintas del flagelo, que no sirve para motilidad sino para adhesión) son el ejemplo más estudiado -las fimbrias P de E. coli, por ejemplo, se unen a receptores específicos del epitelio urinario y son las que explican por qué ciertas cepas de E. coli son uropatógenas y otras no, aunque ambas sean la "misma especie".',
        'Esta especificidad de receptor explica en parte el tropismo tisular de muchas infecciones -por qué una bacteria causa infección urinaria y no meningitis, o por qué otra prefiere la vía respiratoria- y es también un blanco de investigación de vacunas y terapias que buscan bloquear la adhesión en lugar de matar directamente a la bacteria.'
      ],
      foco:[
        'Las fimbrias/pili no dan motilidad -eso es función del flagelo-, dan ADHESIÓN a receptores específicos del huésped. Es un error frecuente confundir ambas estructuras.'
      ]
    },
    {
      t:'Estrategias de evasión inmunitaria',
      p:[
        'Más allá de las toxinas, las bacterias despliegan varias estrategias para sobrevivir al sistema inmune del huésped. La cápsula, ya mencionada en estructura bacteriana, es antifagocítica: dificulta que los fagocitos reconozcan a la bacteria como extraña. Algunas bacterias, como Neisseria gonorrhoeae, cambian la estructura de sus proteínas de superficie (variación antigénica) para "despistar" a los anticuerpos que el huésped ya generó contra la versión anterior, lo que también explica por qué la infección repetida por gonorrea no genera inmunidad protectora duradera. Otras, como Mycobacterium tuberculosis, sobreviven DENTRO de los propios macrófagos que deberían destruirlas, inhibiendo la fusión del fagosoma con el lisosoma -un ejemplo de que "ser fagocitado" no siempre significa "ser destruido".'
      ],
      foco:[
        '*Consideración clínica*: la variación antigénica (Neisseria) explica por qué no hay inmunidad protectora tras la gonorrea. La supervivencia intracelular (M. tuberculosis) explica por qué la tuberculosis puede permanecer latente dentro de macrófagos durante años antes de reactivarse.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.'
},

'antibioticos-mecanismos-resistencia': {
  tema:'Antibióticos: mecanismos y resistencia',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:15,
  idea:'Cada clase de antibiótico ataca una estructura o proceso que la célula humana no tiene o usa de forma distinta -eso es lo que le da selectividad-, y cada mecanismo de resistencia es, casi siempre, una forma de esquivar exactamente ese blanco.',
  claves:['betalactámico','betalactamasa','resistencia','antibiograma','concentración mínima inhibitoria'],
  sigue:'virologia-basica',
  secciones:[
    {
      t:'Betalactámicos: el blanco es la pared, ausente en las células humanas',
      p:[
        'Los antibióticos betalactámicos (penicilinas, cefalosporinas, carbapenémicos, monobactámicos) comparten un anillo betalactámico en su estructura y actúan inhibiendo las proteínas de unión a penicilina (PBP), enzimas que la bacteria necesita para entrecruzar las cadenas de peptidoglicano durante la síntesis de su pared celular. Sin una pared funcional, la bacteria no resiste la presión osmótica y se lisa. Esta es la razón de su selectividad: las células humanas no tienen pared celular, así que este mecanismo no las afecta -de ahí que los betalactámicos, en general, tengan un perfil de seguridad favorable comparado con antibióticos que interfieren con procesos compartidos entre bacteria y huésped.',
        'El mecanismo de resistencia más importante contra los betalactámicos es la producción de betalactamasas, enzimas bacterianas que rompen el anillo betalactámico antes de que el antibiótico alcance su blanco, inactivándolo. Frente a esto, se combinan algunos betalactámicos con inhibidores de betalactamasa (como el ácido clavulánico junto con amoxicilina), que bloquean la enzima y protegen al antibiótico. Un segundo mecanismo, distinto y más difícil de vencer con inhibidores, es la alteración de la propia PBP para que tenga baja afinidad por el antibiótico -el mecanismo del SARM, ya visto en cocos grampositivos, que por eso no responde ni siquiera a combinaciones con inhibidores de betalactamasa.'
      ],
      foco:[
        'Betalactámicos = inhiben la síntesis de pared (PBP), selectivos porque las células humanas no tienen pared. Resistencia principal = betalactamasa (destruye el antibiótico) o PBP alterada (el antibiótico ya no se une, como en SARM) -dos mecanismos distintos, con soluciones distintas.'
      ]
    },
    {
      t:'Otros blancos: ribosoma, ADN y membrana',
      p:[
        'Varias familias de antibióticos actúan sobre el ribosoma bacteriano, que es estructuralmente distinto al ribosoma humano (bacteriano 70S, formado por subunidades 30S y 50S; humano 80S): los aminoglucósidos (como gentamicina) y las tetraciclinas se unen a la subunidad 30S, mientras que los macrólidos (como azitromicina), el cloranfenicol y la clindamicina se unen a la subunidad 50S. Esta diferencia estructural entre ribosomas es, de nuevo, la base de la selectividad: a las concentraciones terapéuticas normales, estos fármacos no interfieren significativamente con la síntesis proteica humana.',
        'Las fluoroquinolonas (como ciprofloxacino) inhiben enzimas bacterianas esenciales para el superenrollamiento del ADN (ADN girasa y topoisomerasa IV), deteniendo la replicación. Las sulfonamidas y el trimetoprim inhiben pasos sucesivos de la vía de síntesis del ácido fólico bacteriano -una vía que las bacterias deben sintetizar de novo porque, a diferencia de las células humanas, no pueden incorporar folato preformado de la dieta, lo que de nuevo da selectividad. La vancomicina, reservada para infecciones graves por grampositivos resistentes (como SARM), actúa por un mecanismo distinto a los betalactámicos: se une directamente a un precursor de la pared (D-Ala-D-Ala) impidiendo su incorporación, sin depender de las PBP, razón por la que sigue siendo eficaz cuando las PBP ya están alteradas.'
      ],
      foco:[
        'Ribosoma bacteriano (70S) ≠ ribosoma humano (80S): esa diferencia es lo que permite usar aminoglucósidos, tetraciclinas y macrólidos sin toxicidad significativa sobre la síntesis proteica humana. Sulfas/trimetoprim aprovechan que las bacterias SINTETIZAN su propio folato, algo que las células humanas no hacen.'
      ]
    },
    {
      t:'Cómo se decide qué antibiótico usar: el antibiograma',
      p:[
        'El antibiograma es la prueba de laboratorio que determina la sensibilidad de una bacteria aislada frente a distintos antibióticos, y su resultado clave es la concentración mínima inhibitoria (CMI): la menor concentración de antibiótico capaz de inhibir visiblemente el crecimiento bacteriano en condiciones estandarizadas. Esa CMI se compara con los niveles de antibiótico alcanzables de forma segura en el cuerpo humano (según la dosis y la vía) para clasificar a la bacteria como sensible, intermedia o resistente a ese fármaco en particular -no es una propiedad fija del antibiótico ni de la especie en abstracto, sino del aislado específico de ese paciente frente a ese fármaco. Esto es lo que permite pasar de un tratamiento empírico inicial (elegido por la clínica y la epidemiología local, antes de tener el cultivo) a un tratamiento dirigido una vez llega el resultado del antibiograma, idealmente con el antibiótico de espectro más estrecho posible que cubra al patógeno identificado.'
      ],
      foco:[
        '*Consideración clínica*: "empírico" = elegido antes del cultivo, según la clínica y la epidemiología. "Dirigido" = ajustado según el antibiograma, siempre que sea posible reduciendo el espectro -tratar con el antibiótico más amplio posible todo el tiempo favorece la resistencia sin necesidad clínica real.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.'
},

'virologia-basica': {
  tema:'Introducción a la virología',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:13,
  idea:'Un virus no es una célula pequeña: es material genético con instrucciones para secuestrar la maquinaria de otra célula y hacer copias de sí mismo. De esa definición sale casi todo lo demás, incluido por qué los antibióticos no le hacen nada.',
  claves:['virus','cápside','envoltura','replicación viral','retrovirus'],
  sigue:'introduccion-micologia',
  secciones:[
    {
      t:'Por qué un virus no es una bacteria pequeña',
      p:[
        'Un virus carece de las estructuras que definen a una célula: no tiene ribosomas propios, no tiene metabolismo propio, no puede reproducirse por sí mismo. Es, en esencia, ácido nucleico (ADN o ARN, nunca ambos a la vez, a diferencia de las células) empaquetado dentro de una cubierta proteica llamada cápside, formada por subunidades repetidas (capsómeros). Algunos virus tienen además una envoltura lipídica externa, derivada de la membrana de la célula huésped que infectaron previamente, en la que insertan proteínas propias (glicoproteínas de superficie). Esta distinción entre virus desnudos (sin envoltura) y virus envueltos tiene consecuencias prácticas directas: los virus envueltos son más frágiles en el ambiente -la envoltura lipídica se destruye con jabón, detergentes, calor y desecación-, mientras que los virus desnudos son mucho más resistentes y se transmiten con facilidad por vía fecal-oral o por superficies contaminadas.',
        'Como no tiene metabolismo propio, un virus depende POR COMPLETO de la maquinaria de la célula que infecta para replicarse: usa los ribosomas, las enzimas y los nucleótidos de la célula huésped. Esta dependencia absoluta es la razón fundamental de por qué los antibióticos, que actúan sobre estructuras o procesos bacterianos (pared celular, ribosoma 70S, síntesis de folato bacteriano), son completamente inútiles contra un virus: no hay pared que romper, no hay ribosoma bacteriano que bloquear.'
      ],
      foco:[
        'Virus envuelto (con capa lipídica externa) = frágil en el ambiente, se destruye con jabón y calor (ejemplo: VIH, influenza, coronavirus). Virus desnudo (sin envoltura) = resistente, se transmite por vía fecal-oral (ejemplo: rotavirus, poliovirus, norovirus).'
      ]
    },
    {
      t:'El ciclo de replicación viral, paso a paso',
      p:[
        'El ciclo de replicación viral sigue una secuencia general: adsorción (unión de una proteína viral de superficie a un receptor específico de la célula huésped -esta especificidad de receptor es lo que determina el tropismo del virus, por ejemplo por qué el VIH infecta linfocitos CD4 y no cualquier célula), penetración (entrada del virus a la célula, por fusión de membranas si es envuelto o por endocitosis), decapsidación (liberación del ácido nucleico viral dentro de la célula), síntesis (replicación del genoma viral y producción de proteínas virales usando la maquinaria de la célula huésped), ensamblaje (las nuevas partículas virales se arman a partir de las piezas producidas) y liberación (los nuevos virus salen de la célula, por lisis si son desnudos, o por gemación a través de la membrana celular si son envueltos, en cuyo caso adquieren su envoltura precisamente en ese paso final).',
        'Los antivirales, a diferencia de los antibióticos, tienen que ser diseñados para atacar pasos específicos de ESTE ciclo sin dañar a la célula huésped, lo cual es más difícil porque el virus usa la maquinaria de la propia célula -de ahí que existan muchos menos antivirales eficaces que antibióticos, y que casi todos apunten a enzimas exclusivamente virales, como la transcriptasa inversa del VIH o la ADN polimerasa viral del herpes.'
      ],
      foco:[
        'Adsorción → penetración → decapsidación → síntesis → ensamblaje → liberación. El receptor de adsorción determina el tropismo (qué célula puede infectar el virus). La liberación por gemación es exclusiva de los virus envueltos.'
      ]
    },
    {
      t:'Retrovirus: el flujo de información al revés',
      p:[
        'Los retrovirus (el ejemplo clínicamente más importante es el VIH) son virus ARN con una particularidad: portan una enzima propia, la transcriptasa inversa, que transcribe su ARN genómico en ADN complementario dentro de la célula huésped -invirtiendo el flujo habitual de información genética (que va de ADN a ARN). Ese ADN viral recién formado se integra después al genoma de la célula huésped mediante otra enzima viral, la integrasa, y queda ahí como provirus, pudiendo permanecer latente durante años antes de reactivarse y producir nuevos viriones. Esta integración al genoma del huésped es la razón por la que las infecciones retrovirales, a diferencia de la mayoría de las infecciones virales agudas, tienden a la cronicidad: el material genético viral queda literalmente incorporado en el ADN de las células infectadas, de modo que no basta con eliminar los virus circulantes -las células ya infectadas conservan el provirus indefinidamente.'
      ],
      foco:[
        '*Consideración clínica*: la transcriptasa inversa y la integrasa son blancos terapéuticos específicos del VIH (inhibidores de transcriptasa inversa, inhibidores de integrasa) precisamente porque las células humanas no tienen estas enzimas en su ciclo normal -de nuevo, el principio de selectividad.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.'
},

'introduccion-micologia': {
  tema:'Introducción a la micología',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:12,
  idea:'Los hongos son eucariotas, como las células humanas -eso los hace, paradójicamente, más difíciles de atacar selectivamente con fármacos que las bacterias, y explica por qué hay muchos menos antifúngicos que antibióticos.',
  claves:['hongo','levadura','hifa','Candida','dimórfico'],
  sigue:'genetica-bacteriana',
  secciones:[
    {
      t:'Por qué los hongos son un blanco farmacológico más difícil',
      p:[
        'A diferencia de las bacterias, que son procariotas con estructuras muy distintas a las células humanas (pared de peptidoglicano, ribosoma 70S), los hongos son organismos EUCARIOTAS: tienen núcleo verdadero, ribosomas 80S como las células humanas, y una membrana celular con muchos procesos similares. Esta cercanía evolutiva entre hongo y humano es la razón fundamental de por qué desarrollar antifúngicos selectivos es más difícil que desarrollar antibióticos, y por qué los antifúngicos disponibles tienden a tener más efectos adversos relacionados con su mecanismo de acción. El blanco farmacológico más aprovechado es el ergosterol, un lípido de la membrana celular fúngica que es el equivalente funcional del colesterol en la membrana humana pero químicamente distinto: los antifúngicos azólicos (como fluconazol) inhiben su síntesis, y la anfotericina B se une directamente al ergosterol formando poros en la membrana -con el problema de que también tiene cierta afinidad por el colesterol humano, lo que explica su toxicidad renal característica.'
      ],
      foco:[
        'Hongo = eucariota, ribosoma 80S como el humano → antifúngicos más difíciles de hacer selectivos que los antibióticos. Blanco principal: el ergosterol de la membrana fúngica (equivalente al colesterol humano, pero distinto).'
      ]
    },
    {
      t:'Levaduras, mohos y hongos dimórficos',
      p:[
        'Morfológicamente, los hongos se dividen en levaduras (organismos unicelulares, redondeados, que se reproducen por gemación -el ejemplo clínico más frecuente es Candida albicans, que forma parte de la flora normal de piel, boca, tracto digestivo y vagina, pero que puede causar infección oportunista, sobre todo tras el uso de antibióticos de amplio espectro que eliminan la flora bacteriana competidora, en inmunosuprimidos, o en diabéticos mal controlados) y mohos (organismos multicelulares filamentosos, formados por hifas que se entrelazan formando un micelio -el ejemplo clínico más relevante es Aspergillus, causa de infección pulmonar invasiva grave en pacientes neutropénicos o con inmunosupresión profunda).',
        'Un tercer grupo, los hongos dimórficos, cambian de forma según la temperatura: crecen como moho a temperatura ambiente (en el suelo o material orgánico, su forma ambiental) y como levadura a la temperatura corporal (37°C, su forma dentro del huésped infectado). Histoplasma capsulatum, Blastomyces dermatitidis y Coccidioides son ejemplos de hongos dimórficos que causan infecciones respiratorias adquiridas por inhalación de esporas desde el ambiente (suelo contaminado con excremento de aves o murciélagos, en el caso de Histoplasma), que pueden ir desde formas asintomáticas hasta enfermedad pulmonar grave o diseminada en inmunosuprimidos.'
      ],
      foco:[
        'Levadura = unicelular, gemación (Candida). Moho = multicelular, hifas/micelio (Aspergillus). Dimórfico = moho a temperatura ambiente, levadura a 37°C dentro del cuerpo (Histoplasma, Blastomyces, Coccidioides) -el cambio de forma con la temperatura es la clave del concepto.'
      ]
    },
    {
      t:'Cuándo sospechar infección fúngica oportunista',
      p:[
        'La mayoría de las infecciones fúngicas graves ocurren en un contexto de huésped comprometido: neutropenia (por quimioterapia o enfermedad hematológica), uso prolongado de corticoides o inmunosupresores, VIH avanzado, diabetes mal controlada, o uso reciente de antibióticos de amplio espectro (que eliminan la flora bacteriana competidora y permiten el sobrecrecimiento de Candida, un fenómeno de disbiosis). Candida puede causar desde infecciones superficiales molestas pero no graves (candidiasis oral -"algodoncillo"-, vaginal, cutánea en pliegues) hasta candidemia (Candida en el torrente sanguíneo), una infección grave y potencialmente mortal en el paciente hospitalizado con catéteres centrales o nutrición parenteral prolongada. Reconocer el contexto del huésped es, muchas veces, más orientador para sospechar una micosis invasiva que los síntomas mismos, que suelen ser inespecíficos (fiebre persistente que no responde a antibióticos).'
      ],
      foco:[
        '*Consideración clínica*: fiebre persistente en un paciente neutropénico que NO responde a antibióticos de amplio espectro obliga a pensar en infección fúngica invasiva y a considerar tratamiento antifúngico empírico, no solo escalar más antibióticos.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.'
},

'genetica-bacteriana': {
  tema:'Genética bacteriana',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:13,
  idea:'Las bacterias no solo heredan genes de su "madre" al dividirse: pueden intercambiar material genético entre sí, incluso entre especies distintas, y eso es exactamente el mecanismo detrás de la propagación acelerada de la resistencia a antibióticos.',
  claves:['plásmido','transferencia horizontal','conjugación','transducción','transformación bacteriana'],
  sigue:'espiroquetas',
  secciones:[
    {
      t:'Plásmidos: ADN extra, independiente y transferible',
      p:[
        'Además de su cromosoma principal (circular, en la mayoría de las bacterias), muchas bacterias portan plásmidos: moléculas de ADN circular pequeñas, extracromosómicas, capaces de replicarse de forma independiente del cromosoma bacteriano. Los plásmidos no suelen contener genes esenciales para la supervivencia básica, pero sí genes que dan ventajas en condiciones específicas: resistencia a antibióticos (plásmidos R, los más relevantes clínicamente), producción de toxinas, factores de virulencia, o capacidad de degradar ciertos compuestos. Su importancia clínica es enorme porque un solo plásmido puede portar genes de resistencia a VARIOS antibióticos distintos a la vez, y porque los plásmidos se pueden transferir entre bacterias, incluso entre especies diferentes, propagando la resistencia mucho más rápido de lo que lo haría la sola mutación y selección dentro de una especie.'
      ],
      foco:[
        'Un plásmido puede portar resistencia a VARIOS antibióticos a la vez y transferirse entre especies distintas: es la explicación molecular de cómo la resistencia se propaga tan rápido entre bacterias que ni siquiera están emparentadas.'
      ]
    },
    {
      t:'Las tres formas de transferencia horizontal de genes',
      p:[
        'La transferencia horizontal de genes (de una bacteria a otra ya formada, distinta de la herencia vertical de padre a hija en la división celular) ocurre por tres mecanismos. La conjugación requiere contacto físico directo entre dos bacterias, mediado por un pelo sexual (pilus F) que forma un puente a través del cual pasa el plásmido de la bacteria donadora a la receptora; es el mecanismo más eficiente para transferir plásmidos completos, incluyendo los de resistencia múltiple, y puede ocurrir entre especies distintas. La transformación consiste en que una bacteria capta directamente ADN libre del ambiente (liberado por otra bacteria que murió y se lisó) y lo incorpora a su propio genoma; no todas las bacterias son naturalmente "competentes" para hacer esto, pero algunas, como Streptococcus pneumoniae y Neisseria, sí lo son de forma natural. La transducción es mediada por un bacteriófago (un virus que infecta bacterias): durante el ensamblaje de nuevas partículas virales dentro de una bacteria infectada, por error se empaqueta ADN bacteriano en lugar de (o además de) ADN viral, y cuando ese fago infecta a una nueva bacteria, transfiere ese fragmento de ADN bacteriano de la bacteria anterior.'
      ],
      foco:[
        'Conjugación = contacto directo vía pilus, transfiere plásmidos completos (la vía más eficiente para resistencia múltiple). Transformación = capta ADN libre del ambiente. Transducción = un bacteriófago transporta el ADN por error entre bacterias.'
      ]
    },
    {
      t:'Por qué esto importa para entender la resistencia antibiótica',
      p:[
        'Comprender la transferencia horizontal de genes cambia la forma de pensar la resistencia a antibióticos: no es necesario que cada bacteria individual mute de forma independiente para volverse resistente -basta con que UNA bacteria adquiera (por mutación o por transferencia desde otra especie) un gen de resistencia en un plásmido transferible, y ese gen puede propagarse con rapidez incluso entre bacterias de especies distintas que comparten el mismo ambiente, como el intestino de un paciente hospitalizado expuesto a múltiples antibióticos. Esta es la base biológica de por qué el uso indiscriminado de antibióticos (en medicina y también en la producción agropecuaria) acelera la aparición y propagación de resistencia a nivel poblacional, no solo dentro de un paciente individual: cada exposición innecesaria a antibióticos es una presión selectiva que favorece a las bacterias que ya tienen, o que puedan adquirir por transferencia horizontal, los genes de resistencia correspondientes.'
      ],
      foco:[
        '*Consideración clínica*: es la base biológica del uso racional de antibióticos -restringir su uso a cuando está indicado no es solo por el paciente individual, sino porque cada exposición innecesaria favorece la selección y propagación (por transferencia horizontal) de resistencia a nivel poblacional.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.'
},

'espiroquetas': {
  tema:'Espiroquetas',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:12,
  idea:'Las espiroquetas comparten una forma helicoidal característica que les da su nombre, pero causan tres enfermedades con presentaciones clínicas y epidemiología muy distintas entre sí: sífilis, enfermedad de Lyme y leptospirosis.',
  claves:['Treponema pallidum','Leptospira','Borrelia','sífilis','enfermedad de Lyme'],
  sigue:'micobacterias',
  secciones:[
    {
      t:'Treponema pallidum y las etapas de la sífilis',
      p:[
        'Treponema pallidum causa la sífilis, una infección de transmisión sexual (también transmisible verticalmente de madre a feto, causando sífilis congénita) que progresa por etapas bien definidas si no se trata. La sífilis primaria se manifiesta como un chancro: una úlcera única, indolora, de bordes indurados, en el sitio de inoculación (genital, oral o anal), que cura espontáneamente en semanas incluso sin tratamiento -lo cual no significa curación de la infección, solo resolución de esa lesión. La sífilis secundaria aparece semanas a meses después, con diseminación hematógena: erupción cutánea característicamente palmoplantar (que afecta palmas y plantas, un dato muy distintivo), condilomas planos (lesiones húmedas muy infecciosas en zonas genitales/perianales) y linfadenopatía generalizada. Si tampoco se trata en esta etapa, la infección entra en una fase latente asintomática que puede durar años, y finalmente, en una minoría de pacientes no tratados, aparece la sífilis terciaria, con afectación cardiovascular (aneurisma de aorta ascendente) y neurológica (neurosífilis, incluida la tabes dorsal).',
        'El diagnóstico combina pruebas no treponémicas (como VDRL o RPR, que detectan anticuerpos inespecíficos y sirven para tamizaje y para seguir la respuesta al tratamiento, porque sus títulos bajan tras el tratamiento eficaz) con pruebas treponémicas específicas (como FTA-ABS, que confirman el diagnóstico pero permanecen positivas de por vida, incluso tras tratamiento exitoso, así que no sirven para monitorear la respuesta).'
      ],
      foco:[
        'Sífilis primaria = chancro indoloro. Secundaria = erupción PALMOPLANTAR + condilomas planos. Latente = asintomática. Terciaria = cardiovascular y neurológica. Las pruebas no treponémicas (VDRL/RPR) sirven para seguimiento; las treponémicas (FTA-ABS) quedan positivas de por vida y solo confirman, no monitorean.'
      ]
    },
    {
      t:'Borrelia burgdorferi y la enfermedad de Lyme',
      p:[
        'La enfermedad de Lyme, causada por Borrelia burgdorferi, se transmite por la picadura de garrapatas del género Ixodes, típicamente en zonas boscosas de clima templado. Su manifestación inicial característica es el eritema migratorio: una lesión cutánea que se expande gradualmente desde el sitio de la picadura, con frecuencia adoptando un aspecto de "diana" o "ojo de buey" (claro en el centro, con un anillo rojo periférico), que aparece días a semanas después de la picadura. Sin tratamiento, la infección puede diseminarse en etapas posteriores hacia el sistema nervioso (parálisis facial, meningitis) y el corazón (bloqueos de la conducción), y en etapas tardías hacia las articulaciones, causando artritis, característicamente de grandes articulaciones como la rodilla.'
      ],
      foco:[
        'Eritema migratorio en "diana" o "ojo de buey" + antecedente de picadura de garrapata en zona boscosa = enfermedad de Lyme hasta que se demuestre lo contrario.'
      ]
    },
    {
      t:'Leptospira y la exposición a agua contaminada',
      p:[
        'Leptospira se transmite por contacto de piel o mucosas (incluso piel intacta, a diferencia de muchas otras infecciones) con agua o suelo contaminados por orina de animales infectados (roedores, ganado, perros), lo que la hace relevante en contextos de inundaciones, trabajo agrícola, actividades recreativas en agua dulce estancada, o exposición ocupacional en alcantarillado. La mayoría de las infecciones son leves o subclínicas, con un cuadro febril inespecífico, pero una minoría desarrolla la forma grave -la enfermedad de Weil-, caracterizada por la tríada de ictericia, insuficiencia renal aguda y hemorragias (incluyendo hemorragia pulmonar, la causa más frecuente de muerte en esta forma grave).'
      ],
      foco:[
        '*Consideración clínica*: preguntar por exposición a agua estancada, inundaciones o contacto con roedores ante un cuadro febril inespecífico en zona endémica. La tríada de la enfermedad de Weil (ictericia + falla renal + hemorragia) marca la forma grave.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.'
},

'micobacterias': {
  tema:'Micobacterias',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:14,
  idea:'La pared rica en ácidos micólicos de las micobacterias las hace resistentes a la tinción de Gram, de crecimiento lentísimo en cultivo, y capaces de sobrevivir años en estado latente dentro del propio sistema inmune del huésped.',
  claves:['Mycobacterium tuberculosis','bacilo ácido alcohol resistente','Ziehl-Neelsen','tuberculosis'],
  sigue:'diagnostico-microbiologico',
  secciones:[
    {
      t:'Por qué las micobacterias necesitan una tinción distinta',
      p:[
        'Mycobacterium tuberculosis tiene una pared celular con un contenido excepcionalmente alto de ácidos micólicos, unos lípidos de cadena larga que la hacen impermeable a la mayoría de los colorantes acuosos comunes, incluido el cristal violeta del Gram. Por eso se identifica con la tinción de Ziehl-Neelsen: se aplica fucsina fenicada con calor (que sí logra penetrar la pared cerosa), y luego se intenta decolorar con una mezcla de ácido y alcohol; la mayoría de las bacterias pierden el colorante con este tratamiento agresivo, pero las micobacterias lo retienen por su pared lipídica -de ahí el nombre "bacilos ácido-alcohol resistentes" (BAAR), que es sinónimo funcional de micobacteria en el contexto clínico. Esta misma pared cerosa explica por qué M. tuberculosis crece tan lentamente en cultivo (semanas, en vez de horas como la mayoría de las bacterias) y por qué es relativamente resistente a la desecación y a muchos desinfectantes comunes.'
      ],
      foco:[
        'BAAR (bacilo ácido-alcohol resistente) = sinónimo clínico de micobacteria. Se debe a la pared rica en ácidos micólicos, que también explica su crecimiento lentísimo en cultivo (semanas) y su resistencia a la tinción de Gram.'
      ]
    },
    {
      t:'Infección primaria contra reactivación: dos escenarios clínicos distintos',
      p:[
        'La tuberculosis se adquiere por inhalación de gotas respiratorias de una persona con enfermedad activa pulmonar. En la infección primaria, el bacilo llega a los alvéolos y es fagocitado por macrófagos alveolares, dentro de los cuales sobrevive (como se mencionó en mecanismos de patogenicidad, inhibiendo la fusión fagosoma-lisosoma). El sistema inmune del huésped, en la mayoría de los casos, logra contener la infección formando un granuloma (el complejo de Ghon, con su ganglio linfático asociado), pero sin erradicar por completo a la bacteria: esta queda viva, en estado latente, dentro del granuloma, potencialmente durante toda la vida de la persona, sin causar síntomas ni ser transmisible en ese estado.',
        'La reactivación ocurre cuando, años o décadas después, el sistema inmune del huésped se debilita lo suficiente (por VIH, inmunosupresión, edad avanzada, desnutrición, diabetes) como para perder el control sobre los bacilos latentes, que retoman su replicación activa -típicamente en los lóbulos superiores del pulmón, por razones de mayor tensión de oxígeno en esa región- y producen la enfermedad activa, ahora sí sintomática (tos crónica, fiebre, sudoración nocturna, pérdida de peso) y transmisible a otras personas por vía respiratoria.'
      ],
      foco:[
        'Infección primaria = contenida por el granuloma (complejo de Ghon), la bacteria queda LATENTE, no transmisible. Reactivación = años después, con inmunosupresión, la bacteria se reactiva en los lóbulos superiores y SÍ es transmisible. La tuberculosis latente no se transmite; solo la enfermedad activa.'
      ]
    },
    {
      t:'Otras micobacterias de relevancia clínica',
      p:[
        'Mycobacterium leprae causa la lepra (enfermedad de Hansen), una infección crónica que afecta preferentemente piel y nervios periféricos, con un espectro clínico que va desde la forma tuberculoide (respuesta inmune fuerte, pocas lesiones bien delimitadas, baja carga bacilar) hasta la forma lepromatosa (respuesta inmune débil, lesiones difusas, alta carga bacilar, más contagiosa). No puede cultivarse en medios artificiales de laboratorio -es una de las pocas bacterias clínicamente relevantes que no crece en cultivo convencional, lo que ha dificultado históricamente su estudio. El complejo Mycobacterium avium (MAC) es un grupo de micobacterias no tuberculosas, ambientales, que rara vez enferman a personas inmunocompetentes pero que causan infección diseminada en pacientes con VIH avanzado y con inmunosupresión celular profunda -un patrón general de las micobacterias no tuberculosas: son mucho más relevantes en el huésped comprometido que en el sano.'
      ],
      foco:[
        '*Consideración clínica*: M. leprae no se cultiva en laboratorio convencional. El complejo M. avium es prácticamente irrelevante en el paciente inmunocompetente, pero es una causa importante de infección diseminada en VIH avanzado -pensarlo ante ese contexto específico, no de forma general.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.'
},

'diagnostico-microbiologico': {
  tema:'Diagnóstico microbiológico',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:12,
  idea:'Cada técnica diagnóstica en microbiología responde una pregunta distinta -qué bacteria es, cuánta hay, si está viva, si tiene un gen específico- y elegir la técnica equivocada para la pregunta clínica lleva a resultados que, aunque "correctos" en el laboratorio, no sirven para decidir el tratamiento.',
  claves:['cultivo','tinción','prueba rápida','hemocultivo','antibiograma'],
  sigue:'flora-normal-microbiota',
  secciones:[
    {
      t:'El cultivo sigue siendo el estándar para identificar y probar sensibilidad',
      p:[
        'El cultivo microbiológico consiste en sembrar una muestra clínica (sangre, orina, esputo, líquido cefalorraquídeo, etc.) en un medio apropiado y dejar que las bacterias presentes crezcan hasta formar colonias visibles, que luego se identifican por características morfológicas, bioquímicas o moleculares, y sobre las que se puede correr directamente un antibiograma (visto en el tema de antibióticos) para determinar sensibilidad específica. Su gran ventaja es que da información completa -identificación de especie Y sensibilidad a múltiples antibióticos a la vez-, pero su gran desventaja es el tiempo: la mayoría de los cultivos bacterianos toman 24 a 48 horas como mínimo, y algunos organismos de crecimiento lento (como Mycobacterium tuberculosis) pueden tardar semanas, lo que obliga a menudo a iniciar tratamiento empírico mientras se espera el resultado.',
        'El hemocultivo merece mención aparte: es el cultivo de sangre, indicado ante sospecha de bacteriemia o sepsis, y su rendimiento depende críticamente de la técnica -se recomiendan al menos dos sitios de punción distintos antes de iniciar antibióticos, precisamente para distinguir una bacteriemia verdadera de una contaminación de la piel durante la toma de la muestra (un solo hemocultivo positivo con un organismo típico de la piel, como Staphylococcus epidermidis, es más sugerente de contaminación que de infección real).'
      ],
      foco:[
        'El cultivo da identificación Y sensibilidad a la vez, pero tarda 24-48h (o semanas para micobacterias): siempre hay una ventana de tratamiento empírico mientras se espera. Hemocultivo: al menos 2 sitios distintos, ANTES de antibióticos, para distinguir bacteriemia real de contaminación.'
      ]
    },
    {
      t:'Pruebas rápidas: sacrificar información completa por velocidad',
      p:[
        'Las pruebas rápidas (antígenos, PCR de punto de atención) dan resultado en minutos a pocas horas, a costa de no ofrecer un antibiograma completo -detectan la presencia del patógeno o de un componente suyo, pero no necesariamente su sensibilidad a antibióticos específicos. Las pruebas de detección de antígeno (como la prueba rápida de estreptococo del grupo A en faringitis, o de influenza) detectan proteínas específicas del patógeno directamente en la muestra, sin necesidad de que el organismo esté vivo ni de esperar su crecimiento; su principal limitación es la sensibilidad, generalmente menor que la del cultivo, así que un resultado negativo no siempre descarta la infección con la misma confianza que un cultivo negativo. Las técnicas moleculares, como la PCR, amplifican y detectan secuencias específicas de ácido nucleico del patógeno, y tienen la ventaja de detectar organismos de crecimiento muy lento o difícil de cultivar (como M. tuberculosis o ciertos virus) con alta sensibilidad y en mucho menos tiempo que el cultivo tradicional.'
      ],
      foco:[
        'Prueba rápida de antígeno = resultado en minutos, sensibilidad menor que el cultivo (un negativo no siempre descarta). PCR = detecta el material genético directamente, muy sensible, útil para organismos de crecimiento lento -pero ninguna de las dos reemplaza al antibiograma del cultivo cuando se necesita elegir tratamiento dirigido.'
      ]
    },
    {
      t:'Serología: detectar la respuesta del huésped, no al patógeno directamente',
      p:[
        'La serología detecta anticuerpos que el propio sistema inmune del huésped generó contra un patógeno, en lugar de detectar al patógeno mismo. Es útil cuando el organismo es difícil o imposible de cultivar (como Treponema pallidum, visto en espiroquetas) o cuando ya pasó la fase aguda de la infección y el patógeno ya no está presente pero la respuesta inmune persiste. Su limitación principal es la llamada "ventana serológica": el tiempo que tarda el sistema inmune en generar anticuerpos detectables tras la exposición (típicamente días a semanas), durante el cual una prueba serológica puede ser falsamente negativa aunque la infección ya esté presente. Además, la serología no siempre distingue entre infección actual y pasada, porque ciertos anticuerpos (como la IgG) pueden persistir por años después de resuelta la infección.'
      ],
      foco:[
        '*Consideración clínica*: una serología negativa muy poco tiempo después de una exposición sospechada NO descarta infección -puede estar dentro de la ventana serológica. Repetir la prueba semanas después si la sospecha clínica es alta y el primer resultado fue negativo.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.'
},

'flora-normal-microbiota': {
  tema:'Flora normal y microbiota',
  bloque:'Microbiología Médica', programa:'unirm', cuatri:7, min:12,
  idea:'El cuerpo humano convive con billones de microorganismos que, la mayor parte del tiempo, no solo no hacen daño sino que son necesarios para la salud -entender esto es lo que permite distinguir una infección real de un simple hallazgo de flora normal en un cultivo.',
  claves:['microbiota','flora normal','disbiosis','colonización'],
  sigue:'tipos-de-variables',
  secciones:[
    {
      t:'Qué es la microbiota y por qué su distribución no es uniforme',
      p:[
        'La microbiota (o flora normal) es el conjunto de microorganismos que habitan de forma habitual distintas superficies del cuerpo humano -piel, boca, tracto respiratorio superior, intestino, vagina- sin causar enfermedad en condiciones normales, y que en muchos casos cumplen funciones beneficiosas: compiten por espacio y nutrientes con potenciales patógenos (excluyéndolos por simple competencia), sintetizan vitaminas (la flora intestinal produce vitamina K y algunas del complejo B), y estimulan el desarrollo y la maduración normal del sistema inmune. Su distribución no es uniforme: es más abundante y diversa en el colon (donde alcanza las concentraciones más altas de todo el cuerpo), moderada en boca, piel y vagina, y prácticamente estéril en sitios normalmente protegidos -sangre, líquido cefalorraquídeo, articulaciones, vejiga urinaria (en ausencia de infección)-, donde la presencia de CUALQUIER bacteria es, por definición, anormal.',
        'Esta distinción entre sitios que normalmente tienen flora y sitios que normalmente son estériles es la clave para interpretar un cultivo: encontrar Staphylococcus epidermidis en un cultivo de piel es normal; encontrar la misma bacteria en un hemocultivo o en líquido cefalorraquídeo obliga a decidir si representa una infección real o una contaminación de la muestra durante la toma (ya mencionado en hemocultivo), una decisión que depende del contexto clínico, no solo del resultado del cultivo en sí.'
      ],
      foco:[
        'Sitios con flora normal abundante: colon (el más alto), boca, piel, vagina. Sitios normalmente ESTÉRILES: sangre, LCR, vejiga, articulaciones -ahí, cualquier bacteria encontrada es anormal y obliga a decidir entre infección real y contaminación de la muestra.'
      ]
    },
    {
      t:'Colonización, infección y patógeno oportunista',
      p:[
        'Colonización es la presencia de un microorganismo en o sobre el cuerpo sin invasión de tejidos ni respuesta inflamatoria del huésped -convivencia sin daño. Infección implica que el microorganismo invade tejido, se multiplica y provoca una respuesta del huésped (inflamación, síntomas). La misma especie bacteriana puede estar en cualquiera de los dos estados según el contexto: Staphylococcus aureus coloniza las fosas nasales de una fracción importante de la población sana sin causar ningún problema, pero ese mismo organismo puede causar una infección grave si accede a un sitio estéril (torrente sanguíneo, hueso) por una puerta de entrada (herida, catéter). Un patógeno oportunista es, precisamente, un microorganismo que forma parte de la flora normal (o que es de baja virulencia intrínseca) y que solo causa enfermedad cuando las defensas del huésped están comprometidas o cuando accede a un sitio que normalmente no habita -Candida albicans (flora normal de mucosas) y Staphylococcus epidermidis (flora normal de piel) son los ejemplos clásicos ya vistos en micología y en cocos grampositivos.'
      ],
      foco:[
        'Colonización = presencia sin invasión ni respuesta inflamatoria. Infección = invasión + respuesta del huésped. Patógeno oportunista = organismo de la propia flora normal que enferma solo cuando cambia el contexto (huésped comprometido, o acceso a un sitio normalmente estéril).'
      ]
    },
    {
      t:'Disbiosis: cuando se altera el equilibrio de la microbiota',
      p:[
        'La disbiosis es un desequilibrio de la composición normal de la microbiota, casi siempre provocado por un factor externo, con dos consecuencias clínicas típicas. La primera es el sobrecrecimiento de un microorganismo que normalmente está controlado por competencia con el resto de la flora: el ejemplo clásico es la colitis por Clostridioides difficile, que ocurre después de un tratamiento con antibióticos de amplio espectro que eliminan buena parte de la flora intestinal normal, dejando espacio para que C. difficile (naturalmente resistente a muchos de esos antibióticos) prolifere sin competencia y produzca sus toxinas, causando diarrea, a veces grave. La segunda es la pérdida de las funciones beneficiosas que la flora normal aportaba -menor producción de vitaminas, menor estimulación inmune, mayor susceptibilidad a colonización por patógenos externos.'
      ],
      foco:[
        '*Consideración clínica*: diarrea que aparece DURANTE o poco después de un curso de antibióticos de amplio espectro obliga a pensar en colitis por Clostridioides difficile por disbiosis, no automáticamente en un efecto adverso gastrointestinal simple del antibiótico.'
      ]
    }
  ],
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.'
}

});
