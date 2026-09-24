/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 19)
   AMPLIACIÓN de Bioquímica I, primera parte: agua, pH y
   amortiguadores, aminoácidos y péptidos, estructura y función de
   las proteínas, enzimas y cinética, y carbohidratos.
   Mismas claves de objeto que los apuntes originales (se
   sobrescriben con Object.assign); el campo `tema` no cambia.
   La cadena de `sigue` de la materia queda ordenada en los
   lotes 19 a 21, siguiendo el orden del Temario.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'agua-ph-amortiguadores': {
  tema:'Agua, pH y amortiguadores',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:13,
  idea:'Toda la bioquímica ocurre en agua, y casi toda reacción depende del pH. Entender por qué el agua es un solvente tan especial y cómo funcionan los amortiguadores explica por qué el pH de la sangre se mantiene entre 7,35 y 7,45 y qué ocurre cuando ese equilibrio se rompe.',
  claves:['pH','pKa','amortiguador','Henderson-Hasselbalch','bicarbonato'],
  sigue:'aminoacidos-peptidos',
  secciones:[
    {
      t:'El agua: una molécula pequeña con propiedades extraordinarias',
      p:[
        'La molécula de agua es polar: el oxígeno atrae los electrones con más fuerza que los hidrógenos y queda con una carga parcial negativa, mientras que los hidrógenos quedan con una carga parcial positiva. Esa polaridad permite que cada molécula forme hasta cuatro *puentes de hidrógeno* con sus vecinas, en una red dinámica que se rompe y se rehace en picosegundos. De esa red salen las propiedades del agua: un punto de ebullición alto para una molécula tan pequeña, un elevado calor específico (que amortigua los cambios de temperatura del cuerpo) y un elevado calor de vaporización (que hace eficaz la sudoración).',
        'Como solvente, el agua disuelve con facilidad las sustancias polares y cargadas: los iones se rodean de una capa de moléculas de agua orientadas (capa de hidratación) y quedan estabilizados. También disuelve las moléculas con grupos que forman puentes de hidrógeno, como los alcoholes y los azúcares. En cambio, no disuelve las moléculas apolares, como los hidrocarburos y las grasas: las expulsa y las obliga a agruparse. Ese es el *efecto hidrofóbico*, la fuerza que mantiene el plegamiento de las proteínas y la estructura de las membranas.',
        'Las moléculas *anfipáticas*, como los fosfolípidos y los ácidos grasos, tienen una parte polar y una apolar. En agua, se organizan de forma espontánea, con la parte polar hacia el agua y la apolar escondida: forman micelas o bicapas. No es una atracción entre las colas apolares, sino el resultado de que el agua libera las moléculas que estaban ordenadas alrededor de ellas, con lo que aumenta la entropía del sistema.'
      ],
      foco:[
        'Efecto hidrofóbico = el agua "expulsa" lo apolar, y así se agrupa. Es el motor de las membranas y del plegamiento proteico, y no es una fuerza de atracción entre las colas.'
      ]
    },
    {
      t:'Ionización del agua y escala de pH',
      p:[
        'El agua se ioniza muy poco: una molécula de cada 550 millones se disocia en un protón (H⁺, en realidad un ion hidronio) y un hidróxido (OH⁻). El producto de ambas concentraciones es constante a 25 °C: Kw = [H⁺][OH⁻] = 10⁻¹⁴. En agua pura, cada una vale 10⁻⁷ M. El *pH* es el logaritmo negativo de la concentración de protones, pH = −log[H⁺], de modo que el agua pura tiene un pH de 7. Los ácidos aumentan la concentración de H⁺ y bajan el pH; las bases la disminuyen y lo suben.',
        'Como la escala es logarítmica, una diferencia de una unidad significa un factor de diez en la concentración. Un pH de 7,4 equivale a unos 40 nmol/L de H⁺, y un pH de 7,1 a unos 80 nmol/L: una caída de solo 0,3 unidades duplica la concentración de protones. Eso explica por qué variaciones que parecen pequeñas del pH sanguíneo son clínicamente graves.',
        'Los ácidos fuertes se disocian por completo en agua (el HCl del estómago), mientras que los débiles solo lo hacen en parte (el ácido acético, el ácido carbónico, el ácido láctico). Para un ácido débil HA ⇌ H⁺ + A⁻, la constante de disociación es Ka = [H⁺][A⁻]/[HA], y se suele expresar como pKa = −log Ka. El *pKa* es el pH al cual la mitad del ácido está disociado, es decir, [HA] = [A⁻]: cuanto menor es el pKa, más fuerte es el ácido.'
      ],
      foco:[
        'Cada unidad de pH es un factor de 10. Una caída de 0,3 unidades duplica los protones: por eso pH 7,1 es una acidosis grave, aunque el número parezca cercano a 7,4.'
      ]
    },
    {
      t:'Amortiguadores: cómo se resiste un cambio de pH',
      p:[
        'Un *amortiguador* o tampón es una mezcla de un ácido débil y su base conjugada que resiste los cambios de pH cuando se añaden ácidos o bases: si entra un ácido, la base conjugada lo neutraliza; si entra una base, el ácido débil la neutraliza. Su comportamiento lo describe la *ecuación de Henderson-Hasselbalch*: pH = pKa + log([A⁻]/[HA]). Cuando el pH es igual al pKa, las dos formas están en igual cantidad y el amortiguador tiene su máxima capacidad. En la práctica, actúa bien en un intervalo de una unidad de pH a cada lado del pKa.',
        'El organismo utiliza varios amortiguadores. El más importante en el plasma es el sistema *bicarbonato*: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻, con un pKa aparente de 6,1. Aunque el pKa esté lejos del pH sanguíneo (7,4), funciona muy bien porque es un sistema abierto: el CO₂ se elimina por los pulmones y el bicarbonato se regula en el riñón. Con un bicarbonato de 24 mEq/L y una pCO₂ de 40 mmHg (que equivale a 1,2 mM de CO₂ disuelto), el pH es 6,1 + log(24/1,2) = 6,1 + log 20 = 7,4.',
        'Otros amortiguadores importantes son el *fosfato* (pKa de 6,8), que actúa dentro de las células y en la orina, y las *proteínas*, sobre todo la hemoglobina, cuyos residuos de histidina, con un pKa cercano a 6, son eficaces a pH fisiológico. Así, la sangre, los tejidos y los riñones comparten la tarea de mantener estable el pH.'
      ],
      foco:[
        'Máxima capacidad amortiguadora cuando pH = pKa. Y el bicarbonato es tan eficaz, aunque su pKa sea 6,1, porque el CO₂ puede eliminarse por los pulmones.'
      ]
    },
    {
      t:'Los trastornos ácido-base',
      p:[
        'La ecuación del bicarbonato permite razonar los trastornos ácido-base. El pH depende del cociente entre el bicarbonato (regulado por el riñón, componente metabólico) y la pCO₂ (regulada por el pulmón, componente respiratorio). La *acidosis metabólica* cursa con bicarbonato bajo, y aparece en la cetoacidosis diabética, la acidosis láctica, la insuficiencia renal y la diarrea. La *alcalosis metabólica* cursa con bicarbonato alto, por ejemplo tras vómitos intensos que pierden ácido gástrico. La *acidosis respiratoria* se debe a la retención de CO₂ (EPOC, depresión respiratoria) y la *alcalosis respiratoria*, a su eliminación excesiva (hiperventilación, ansiedad, altura).',
        'Cada trastorno provoca una compensación. En la acidosis metabólica, el pulmón compensa en minutos o pocas horas: aumenta la ventilación y elimina CO₂ (respiración de Kussmaul). En los trastornos respiratorios, la compensación renal es más lenta, y tarda días en completarse: el riñón retiene o elimina bicarbonato. Una compensación nunca corrige del todo el pH; solo lo acerca a lo normal, y la causa hay que tratarla.',
        '*Consideración clínica*: un paciente con cetoacidosis diabética llega con pH de 7,10, bicarbonato de 8 mEq/L y respiración profunda y rápida. Sus cetoácidos han consumido el bicarbonato, y la hiperventilación baja la pCO₂ (por ejemplo a 20 mmHg) para elevar el pH. El tratamiento —insulina, que detiene la producción de cetoácidos, líquidos y electrolitos— corrige la causa; corregir el pH solo con bicarbonato suele ser innecesario.'
      ],
      foco:[
        'Ante cualquier gasometría, mira primero el pH (¿ácido o alcalino?), después el bicarbonato (metabólico) y la pCO₂ (respiratorio). El que "explica" el pH es el primario; el otro, la compensación.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 2. Harper, Bioquímica Ilustrada, cap. 1 y 2.'
},

'aminoacidos-peptidos': {
  tema:'Aminoácidos y péptidos',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:13,
  idea:'Los aminoácidos son los ladrillos de las proteínas y, además, precursores de neurotransmisores, hormonas y otras moléculas. Conocer sus grupos, su comportamiento ácido-base y cómo se unen en péptidos es la base para entender la estructura y la función de todas las proteínas.',
  claves:['aminoácido','esencial','punto isoeléctrico','enlace peptídico'],
  sigue:'estructura-funcion-proteinas',
  secciones:[
    {
      t:'Estructura general y clasificación',
      p:[
        'Todos los aminoácidos de las proteínas comparten una misma estructura: un *carbono α* unido a un grupo amino (–NH₂), un grupo carboxilo (–COOH), un hidrógeno y una cadena lateral variable, el grupo R. Es la cadena lateral la que distingue a cada uno de los 20 aminoácidos estándar. Todos, excepto la glicina (cuyo R es un hidrógeno), tienen un carbono α asimétrico y existen en dos formas especulares; en las proteínas humanas solo se encuentran los L-aminoácidos.',
        'Los aminoácidos se clasifican según la naturaleza de su cadena lateral. Los *apolares* (glicina, alanina, valina, leucina, isoleucina, metionina y prolina) son hidrofóbicos y suelen ocupar el interior de las proteínas. Los *aromáticos* (fenilalanina, tirosina y triptófano) absorben la luz ultravioleta a 280 nm, lo que permite medir la concentración de una proteína. Los *polares sin carga* (serina, treonina, cisteína, asparagina y glutamina) forman puentes de hidrógeno, y la cisteína forma enlaces disulfuro. Los *ácidos* (aspartato y glutamato) tienen carga negativa a pH fisiológico, y los *básicos* (lisina, arginina e histidina), carga positiva.',
        'La *prolina* tiene una cadena lateral que forma un anillo con el grupo amino, y por eso su estructura es rígida: rompe las hélices α. La *glicina*, la más pequeña, da flexibilidad. La *cisteína* forma puentes disulfuro entre cadenas, que estabilizan a las proteínas extracelulares, como la insulina y los anticuerpos.'
      ],
      foco:[
        'Aromáticos = absorben a 280 nm. Cisteína = puentes disulfuro. Prolina = rígida, rompe la hélice. Glicina = la más pequeña y la única sin carbono asimétrico.'
      ]
    },
    {
      t:'Comportamiento ácido-base y punto isoeléctrico',
      p:[
        'En solución, un aminoácido tiene al menos dos grupos ionizables: el carboxilo (pKa cercano a 2) y el amino (pKa cercano a 9-10). A pH fisiológico, el carboxilo está desprotonado (–COO⁻) y el amino, protonado (–NH₃⁺): la molécula tiene ambas cargas y carga neta cero, y se llama *ion dipolar* o *zwitterión*. En medio muy ácido predomina la forma con carga neta positiva, y en medio muy alcalino, la de carga neta negativa.',
        'El *punto isoeléctrico* (pI) es el pH al cual la carga neta es cero. Para un aminoácido sin grupos ionizables en la cadena lateral, se calcula como el promedio de los dos pKa que enmarcan la forma neutra. Por debajo del pI, la molécula tiene carga neta positiva y, en un campo eléctrico, migra al cátodo; por encima, tiene carga neta negativa y migra al ánodo. Los aminoácidos ácidos tienen un pI bajo (unos 3) y los básicos, un pI alto (unos 10). En el pI, las proteínas son menos solubles y precipitan con mayor facilidad, un principio que se usa para purificarlas.',
        'La *histidina* tiene una cadena lateral con un pKa cercano a 6, lo que le permite actuar como amortiguador a pH fisiológico: por eso abunda en la hemoglobina y en los sitios activos de muchas enzimas, donde puede aceptar y ceder protones.'
      ],
      foco:[
        'pH > pI → carga negativa (migra al ánodo). pH < pI → carga positiva (migra al cátodo). Es la regla que se aplica en la electroforesis.'
      ]
    },
    {
      t:'El enlace peptídico y los péptidos',
      p:[
        'Los aminoácidos se unen entre sí por *enlaces peptídicos*: el grupo carboxilo de uno reacciona con el grupo amino del siguiente, con pérdida de una molécula de agua (una condensación). El resultado es una cadena con un extremo amino libre (N-terminal) y otro carboxilo libre (C-terminal); por convención, la secuencia se escribe del extremo N al C. Un enlace peptídico tiene carácter parcial de doble enlace por resonancia, por lo que es plano y rígido, y casi siempre trans: solo giran libremente los enlaces con el carbono α.',
        'Se habla de *péptido* cuando la cadena es corta (oligopéptido, hasta unos 20 aminoácidos) y de *polipéptido* o *proteína* cuando es larga. Entre los péptidos de importancia fisiológica están el *glutatión* (γ-glutamil-cisteinil-glicina), un antioxidante que protege los eritrocitos y el hígado; las hormonas *oxitocina* y *vasopresina* (ADH), de nueve aminoácidos; la *insulina*, de 51 aminoácidos en dos cadenas unidas por puentes disulfuro; y el edulcorante aspartamo, un dipéptido.'
      ],
      foco:[
        'Formación del enlace peptídico = condensación (sale agua). Se lee de N a C. Es plano por resonancia, y por eso la cadena tiene libertad limitada.'
      ]
    },
    {
      t:'Aminoácidos esenciales, derivados y aplicaciones clínicas',
      p:[
        'Nueve aminoácidos son *esenciales* porque el cuerpo no puede sintetizarlos y deben provenir de la dieta: fenilalanina, valina, triptófano, treonina, isoleucina, metionina, histidina, leucina y lisina (en inglés, "PVT TIM HALL"). Otros son condicionalmente esenciales: la tirosina (si falta la fenilalanina hidroxilasa) o la arginina (en niños). Una dieta deficiente en algún aminoácido esencial, como la que ocurre en el kwashiorkor, impide sintetizar las proteínas.',
        'Muchos aminoácidos son precursores de moléculas importantes. El *triptófano* da serotonina, melatonina y niacina. La *tirosina* da dopamina, noradrenalina, adrenalina, hormonas tiroideas y melanina. La *histidina* da histamina. El *glutamato* da GABA. La *glicina* interviene en la síntesis del hemo, la creatina y las purinas. La *arginina* es precursora del óxido nítrico, un potente vasodilatador.',
        '*Consideración clínica*: la fenilcetonuria es un defecto de la fenilalanina hidroxilasa: la fenilalanina se acumula y su desvío a fenilcetonas daña el cerebro en desarrollo, mientras que la tirosina no se sintetiza y se hace esencial. Se detecta en el cribado neonatal y se trata con una dieta baja en fenilalanina. La homocistinuria, por un déficit de cistationina β-sintasa, cursa con luxación del cristalino y trombosis. Y la alcaptonuria, por un déficit de la homogentisato oxidasa, produce orina que se oscurece al aire y artritis.',
        'Ejemplo trabajado: un niño con retraso del desarrollo, piel y pelo claros y olor a moho en la orina tiene la fenilalanina de 25 mg/dL (normal, menos de 2). Es fenilcetonuria. Como la tirosina también es precursora de la melanina, su falta explica la piel clara; y como no hay suficiente tirosina, la dieta debe aportarla.'
      ],
      foco:[
        'Regla para memorizar los esenciales: PVT TIM HALL (fenilalanina, valina, triptófano, treonina, isoleucina, metionina, histidina, arginina*, leucina, lisina). La arginina es semiesencial; los nueve estrictos no la incluyen.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 3 y 18. Harper, Bioquímica Ilustrada, cap. 3 y 29.'
},

'estructura-funcion-proteinas': {
  tema:'Estructura y función de las proteínas',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:14,
  idea:'La función de una proteína depende de su forma tridimensional, y esa forma la determina la secuencia de aminoácidos. Estudiar los cuatro niveles de estructura, y ver cómo un cambio mínimo altera la función, como ocurre con la hemoglobina, es la clave para entender muchas enfermedades genéticas.',
  claves:['estructura primaria','secundaria','terciaria','desnaturalización','hemoglobina','alfa hélice'],
  sigue:'enzimas-cinetica',
  secciones:[
    {
      t:'Los cuatro niveles de la estructura proteica',
      p:[
        'La *estructura primaria* es la secuencia de aminoácidos, unidos por enlaces peptídicos. Es lo que codifica el gen, y contiene toda la información necesaria para el plegamiento, como demostró Anfinsen al renaturalizar una ribonucleasa desplegada. Un solo cambio en la secuencia puede alterar la función, como en la anemia falciforme (Glu6 → Val en la cadena β de la hemoglobina).',
        'La *estructura secundaria* es el patrón local que adopta la cadena, estabilizado por puentes de hidrógeno entre los grupos del esqueleto peptídico. La *hélice α* es una espiral en la que cada carbonilo forma un puente de hidrógeno con el N–H situado cuatro residuos más adelante, con 3,6 aminoácidos por vuelta, y con las cadenas laterales hacia el exterior; la prolina la interrumpe. La *lámina β* está formada por segmentos extendidos que se alinean uno al lado de otro, unidos por puentes de hidrógeno entre cadenas; puede ser paralela o antiparalela. Los *giros* conectan los elementos anteriores y suelen contener prolina y glicina.',
        'La *estructura terciaria* es el plegamiento tridimensional completo de una cadena polipeptídica. Se estabiliza sobre todo por el efecto hidrofóbico (las cadenas apolares se agrupan en el interior), y también por puentes de hidrógeno, interacciones iónicas, fuerzas de van der Waals y, en proteínas extracelulares, puentes disulfuro. La *estructura cuaternaria* es la asociación de varias cadenas (subunidades) en una proteína funcional, como el tetrámero de la hemoglobina.'
      ],
      foco:[
        'Primaria = secuencia. Secundaria = hélice α y lámina β (puentes de hidrógeno del esqueleto). Terciaria = plegamiento de una cadena. Cuaternaria = varias cadenas juntas.'
      ]
    },
    {
      t:'Plegamiento, chaperonas y desnaturalización',
      p:[
        'Una proteína recién sintetizada se pliega hasta su conformación nativa, la más estable, y a menudo lo hace con ayuda de las *chaperonas* (como las proteínas de choque térmico, Hsp70), que evitan que las cadenas se agreguen de forma incorrecta. Las proteínas mal plegadas se marcan con ubiquitina y se degradan en el proteasoma.',
        'La *desnaturalización* es la pérdida de la estructura tridimensional, con la consiguiente pérdida de función, sin que se rompan los enlaces peptídicos. Se produce por calor, pH extremo, disolventes orgánicos, detergentes o urea. Se conserva la estructura primaria, y por eso, en ocasiones, la proteína puede renaturalizarse si se retira el agente. Un ejemplo cotidiano es la clara de huevo que se coagula al cocinarla. En la clínica, la fiebre extrema es peligrosa porque puede desnaturalizar proteínas.'
      ],
      foco:[
        'Al desnaturalizar se pierde la estructura secundaria, terciaria y cuaternaria, pero se conserva la primaria: los enlaces peptídicos no se rompen.'
      ]
    },
    {
      t:'Mioglobina y hemoglobina: estructura y función',
      p:[
        'La *mioglobina* es una proteína monomérica del músculo, que almacena oxígeno. Está formada por una cadena con ocho hélices α y un grupo *hemo*, con un átomo de hierro en estado ferroso (Fe²⁺), que une una molécula de oxígeno. Su curva de saturación frente a la presión de oxígeno es hiperbólica: tiene una afinidad muy alta y capta el oxígeno incluso cuando su presión es baja, y solo lo cede cuando el músculo está trabajando al límite.',
        'La *hemoglobina* es un tetrámero (α₂β₂) de cuatro cadenas, cada una con un grupo hemo, y transporta oxígeno en los eritrocitos. Su curva de saturación es *sigmoidea* por un fenómeno de *cooperatividad*: cuando una subunidad une oxígeno, cambia la conformación de todo el tetrámero, del estado T (tenso, de baja afinidad) al estado R (relajado, de alta afinidad), y las siguientes subunidades captan oxígeno con más facilidad. Eso permite que la hemoglobina se sature en los pulmones y libere gran parte de su carga en los tejidos, con un pequeño cambio de la presión de oxígeno.',
        'Varios factores estabilizan el estado T y desplazan la curva a la derecha (menos afinidad): el aumento de H⁺ (efecto Bohr), de CO₂, de temperatura y de 2,3-bisfosfoglicerato (2,3-BPG), un metabolito de los eritrocitos que aumenta en la altura y en la anemia crónica. La hemoglobina fetal (α₂γ₂) une mal el 2,3-BPG y tiene más afinidad por el oxígeno, lo que permite que capte oxígeno de la sangre materna.'
      ],
      foco:[
        'Mioglobina: hiperbólica, alta afinidad, almacena. Hemoglobina: sigmoidea, cooperativa, transporta. La forma de S es el signo de la cooperatividad.'
      ]
    },
    {
      t:'Cuando el plegamiento o la secuencia fallan',
      p:[
        '*Consideración clínica*: muchas enfermedades son proteinopatías. En la *anemia falciforme*, la sustitución de un glutamato polar por una valina apolar (Glu6 → Val) crea un parche hidrofóbico en la superficie de la cadena β que, con la hemoglobina desoxigenada, hace que las moléculas se agreguen en fibras y deformen el eritrocito, con crisis de dolor y anemia hemolítica. En la *fibrosis quística*, la mutación más frecuente (ΔF508) impide el plegamiento correcto del canal CFTR, que se degrada antes de llegar a la membrana.',
        'En las *enfermedades priónicas* (Creutzfeldt-Jakob), una proteína normal (rica en hélices α) adopta una conformación rica en láminas β, resistente a la degradación, que se propaga a otras moléculas: la infección es un plegamiento anómalo, sin ácido nucleico. En la enfermedad de Alzheimer se depositan placas del péptido β-amiloide, también rico en láminas β. En el *escorbuto*, la falta de vitamina C impide hidroxilar la prolina del colágeno, que no puede formar una triple hélice estable.',
        'Ejemplo trabajado: a un paciente con hemoglobina S se le hace una electroforesis a pH alcalino. Como la valina no tiene la carga negativa del glutamato, la HbS tiene menos carga negativa neta y migra hacia el ánodo con más lentitud que la HbA. Un simple cambio de aminoácido se convierte en una diferencia medible, y en un diagnóstico.'
      ],
      foco:[
        'Una mutación puntual puede alterar la función por tres vías: cambiar la carga (electroforesis), crear un parche hidrofóbico (agregación) o impedir el plegamiento (degradación de la proteína).'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 4 y 5. Harper, Bioquímica Ilustrada, cap. 5 y 6.'
},

'enzimas-cinetica': {
  tema:'Enzimas y cinética enzimática',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:14,
  idea:'Las enzimas son los catalizadores de la vida: sin ellas, las reacciones metabólicas serían demasiado lentas para sostener la vida. Entender cómo funcionan, qué significan la Km y la Vmax y cómo actúan los inhibidores es la base de la farmacología, porque una gran parte de los fármacos son inhibidores enzimáticos.',
  claves:['Michaelis','Km','Vmax','inhibidor competitivo','cofactor','alostérico'],
  sigue:'carbohidratos-estructura',
  secciones:[
    {
      t:'Qué hace una enzima y qué no',
      p:[
        'Las enzimas son, casi todas, proteínas que aceleran las reacciones químicas de las células, a veces hasta un millón de veces o más. Actúan *disminuyendo la energía de activación*: estabilizan el estado de transición de la reacción. Lo que no hacen es tan importante como lo que hacen: no modifican el ΔG de la reacción ni su equilibrio, y no convierten una reacción desfavorable en favorable. Solo aceleran la velocidad con la que se alcanza el equilibrio, y no se consumen en el proceso.',
        'La reacción ocurre en el *sitio activo*, una hendidura de la enzima donde se une el sustrato mediante interacciones específicas. Según el modelo del *ajuste inducido*, el sitio activo no es completamente rígido: cambia de forma al unirse el sustrato, y se adapta a él para estabilizar el estado de transición. Las enzimas son muy *específicas*: cada una reconoce un sustrato, o un grupo pequeño de ellos, y cataliza un solo tipo de reacción.',
        'Las enzimas se clasifican en seis grandes clases según la reacción que catalizan: *oxidorreductasas* (deshidrogenasas, oxidasas), *transferasas* (cinasas, transaminasas), *hidrolasas* (proteasas, lipasas, fosfatasas), *liasas* (rompen enlaces sin hidrólisis ni oxidación), *isomerasas* y *ligasas* (unen moléculas con gasto de ATP). Muchos nombres terminan en -asa.'
      ],
      foco:[
        'Una enzima baja la energía de activación, pero NO cambia el ΔG ni el equilibrio. Es la idea más preguntada, y la que más se olvida.'
      ]
    },
    {
      t:'Cofactores, coenzimas y vitaminas',
      p:[
        'Muchas enzimas necesitan ayuda para funcionar. Un *cofactor* es un componente no proteico: puede ser un ion metálico (Zn²⁺, Mg²⁺, Fe²⁺, Cu²⁺) o una molécula orgánica, la *coenzima*. La parte proteica sola se llama *apoenzima*, y la enzima completa y activa, *holoenzima*. Las coenzimas suelen derivar de vitaminas hidrosolubles, y por eso las carencias vitamínicas afectan a las enzimas.',
        'Algunas asociaciones que conviene conocer: la *niacina* forma NAD⁺ y NADP⁺ (deshidrogenasas); la *riboflavina* forma FAD y FMN (oxidaciones); el *ácido pantoténico* forma la coenzima A (transferencia de grupos acilo); la *tiamina* forma el pirofosfato de tiamina (descarboxilación oxidativa del piruvato); la *piridoxina* forma el fosfato de piridoxal (transaminaciones); la *biotina* (carboxilaciones); y el *ácido fólico* y la *vitamina B12* (transferencia de grupos monocarbonados). Una carencia de tiamina, típica del alcoholismo, provoca el síndrome de Wernicke-Korsakoff y el beriberi.'
      ],
      foco:[
        'Vitamina → coenzima → enzima. Niacina/NAD, riboflavina/FAD, pantoténico/CoA, tiamina/TPP, piridoxina/PLP. Cada déficit se explica por la enzima que se queda sin ayuda.'
      ]
    },
    {
      t:'Cinética de Michaelis-Menten',
      p:[
        'La velocidad de una reacción enzimática aumenta con la concentración de sustrato, pero tiende a un máximo. La ecuación de Michaelis-Menten la describe: v = Vmax · [S] / (Km + [S]). La *Vmax* es la velocidad máxima, cuando todas las enzimas están saturadas de sustrato, y depende de la cantidad de enzima presente. La *Km* es la concentración de sustrato a la cual la velocidad es la mitad de la máxima; es una medida inversa de la afinidad: una Km baja significa que la enzima necesita poco sustrato para trabajar eficazmente (alta afinidad).',
        'Las gráficas de velocidad frente a sustrato son hipérbolas. Para poder obtener con precisión la Vmax y la Km, se usa la representación de dobles recíprocos de *Lineweaver-Burk* (1/v frente a 1/[S]), una recta cuyo corte con el eje vertical es 1/Vmax y cuyo corte con el eje horizontal es −1/Km. El *número de recambio* (kcat) indica cuántas moléculas de sustrato transforma cada enzima por segundo.',
        'Ejemplo trabajado: una enzima con Km de 2 mM funciona a la mitad de su Vmax con 2 mM de sustrato. Con 20 mM (diez veces la Km), alcanza el 91 % de la Vmax; con 0,2 mM, solo el 9 %. En el hígado, la glucoquinasa tiene una Km alta (unos 10 mM) y solo trabaja cuando la glucosa es abundante tras una comida, mientras que la hexoquinasa de otros tejidos, con una Km baja (0,1 mM), capta glucosa incluso en ayunas.'
      ],
      foco:[
        'Km baja = alta afinidad. Km ≠ Vmax: la afinidad y la velocidad máxima son propiedades independientes. Con [S] = Km, v = ½ Vmax.'
      ]
    },
    {
      t:'Inhibidores enzimáticos y su uso en medicina',
      p:[
        'Los inhibidores reducen la actividad de una enzima, y se distinguen por su efecto en la Km y en la Vmax. El inhibidor *competitivo* se parece al sustrato y compite con él por el sitio activo: aumenta la Km (hace falta más sustrato) pero no modifica la Vmax, porque con mucho sustrato se supera. El inhibidor *no competitivo* se une a un sitio distinto, sea a la enzima libre o al complejo enzima-sustrato, y disminuye la Vmax sin modificar la Km, porque reduce la cantidad de enzima activa. El inhibidor *incompetitivo* solo se une al complejo enzima-sustrato y disminuye tanto la Vmax como la Km. Los inhibidores *irreversibles* se unen de forma covalente y permanentemente inactivan la enzima.',
        '*Consideración clínica*: la mayoría de los fármacos son inhibidores enzimáticos. Las estatinas son inhibidores competitivos de la HMG-CoA reductasa (síntesis de colesterol). El metotrexato inhibe de forma competitiva la dihidrofolato reductasa. La aspirina inhibe de forma irreversible la ciclooxigenasa, acetilando un residuo de serina. Los inhibidores de la enzima convertidora de angiotensina (captopril, enalapril) reducen la presión arterial. El alopurinol inhibe la xantina oxidasa en la gota. Y la penicilina inhibe de forma irreversible la transpeptidasa de la pared bacteriana.',
        'El tratamiento de la intoxicación por metanol o etilenglicol es un ejemplo elegante de inhibición competitiva. Estos alcoholes son oxidados por la alcohol deshidrogenasa a productos tóxicos (formaldehído y ácido fórmico, que causa ceguera; ácido oxálico, que daña el riñón). Se administra etanol o fomepizol, que compiten por el mismo sitio activo, y de ese modo la enzima se ocupa con el sustrato inocuo mientras el tóxico se elimina sin transformarse.'
      ],
      foco:[
        'Competitivo: Km sube, Vmax igual (se supera con más sustrato). No competitivo: Vmax baja, Km igual. Regla mnemotécnica: "el competitivo compite, y con más sustrato gana el sustrato".'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 6. Harper, Bioquímica Ilustrada, cap. 8 y 9.'
},

'carbohidratos-estructura': {
  tema:'Carbohidratos: estructura',
  bloque:'Bioquímica I', programa:'unirm', cuatri:7, min:13,
  idea:'Los carbohidratos son la principal fuente de energía de la dieta y también material estructural y de reconocimiento celular. Su estructura, es decir, qué azúcar es y cómo se une a otro, decide si se digiere, si se almacena o si sirve como fibra.',
  claves:['monosacárido','glucosa','glucógeno','enlace glucosídico','almidón'],
  sigue:'glucolisis-gluconeogenesis',
  secciones:[
    {
      t:'Monosacáridos: estructura, isomería y ciclación',
      p:[
        'Los carbohidratos son polihidroxialdehídos o polihidroxicetonas. Los más sencillos son los *monosacáridos*, que se clasifican por el número de carbonos (triosas, pentosas, hexosas) y por su grupo carbonilo: *aldosas* (aldehído, como la glucosa y la galactosa) y *cetosas* (cetona, como la fructosa). Todos, salvo la dihidroxiacetona, tienen carbonos asimétricos, y por eso existen numerosos estereoisómeros. Se designan D o L según la configuración del carbono asimétrico más alejado del carbonilo; en el ser humano casi todos son de la serie D.',
        'Los *epímeros* son azúcares que difieren en la configuración de un solo carbono asimétrico: la galactosa es epímero de la glucosa en el carbono 4, y la manosa lo es en el carbono 2. En solución, las hexosas se ciclan: el grupo carbonilo reacciona con un hidroxilo de la misma molécula y forma un anillo (hemiacetal en las aldosas). Se crea así un nuevo carbono asimétrico, el *carbono anomérico* (C1 de la glucosa), que puede tener el hidroxilo hacia abajo (*α*) o hacia arriba (*β*): son los *anómeros*, que se interconvierten en solución (mutarrotación).',
        'La *glucosa* es el monosacárido central del metabolismo. La *fructosa* es una cetohexosa, presente en la fruta y en la sacarosa, y la *galactosa* forma parte de la lactosa. La *ribosa* y la *desoxirribosa* son pentosas de los ácidos nucleicos. Los azúcares con un carbono anomérico libre, como la glucosa, pueden reducir otras sustancias y se llaman *reductores*; esta propiedad se usaba en las pruebas de glucosa en orina.'
      ],
      foco:[
        'Epímero = difiere en UN carbono asimétrico cualquiera (galactosa en C4). Anómero = difiere en el carbono anomérico al ciclarse (α/β). No los mezcles.'
      ]
    },
    {
      t:'Disacáridos y enlaces glucosídicos',
      p:[
        'Dos monosacáridos se unen mediante un *enlace glucosídico* entre el carbono anomérico de uno y un hidroxilo del otro, con pérdida de agua. El tipo de enlace (α o β y los carbonos que une) decide las propiedades del compuesto y si el ser humano puede digerirlo. Los tres disacáridos de la dieta son: la *maltosa* (glucosa α1→4 glucosa), producto de la digestión del almidón; la *lactosa* (galactosa β1→4 glucosa), el azúcar de la leche; y la *sacarosa* (glucosa α1→β2 fructosa), el azúcar de mesa, que no es reductor porque ambos carbonos anoméricos participan en el enlace.',
        'Los disacáridos se digieren en el borde en cepillo del intestino delgado por enzimas específicas: la maltasa, la lactasa (una β-galactosidasa) y la sacarasa. Los monosacáridos resultantes se absorben: la glucosa y la galactosa, por el cotransportador sodio-glucosa (SGLT1), y la fructosa, por difusión facilitada (GLUT5).',
        '*Consideración clínica*: en la *intolerancia a la lactosa*, la actividad de la lactasa disminuye, la lactosa llega al colon y las bacterias la fermentan, con gases, distensión y diarrea osmótica. Es muy frecuente en adultos y no es una alergia. En la *galactosemia*, un déficit de la galactosa-1-fosfato uridiltransferasa produce acumulación de galactosa-1-fosfato: el recién nacido presenta vómitos, ictericia, cataratas y daño hepático al tomar leche, y se trata excluyéndola.'
      ],
      foco:[
        'Maltosa α1→4, lactosa β1→4, sacarosa α1→β2. Los seres humanos digieren enlaces α (almidón), pero no los β1→4 de la celulosa.'
      ]
    },
    {
      t:'Polisacáridos: almidón, glucógeno y celulosa',
      p:[
        'Los *polisacáridos* son polímeros de monosacáridos. El *almidón*, la reserva de energía de las plantas, tiene dos componentes: la *amilosa*, una cadena lineal de glucosa unida por enlaces α1→4, y la *amilopectina*, con ramificaciones α1→6 cada 24-30 residuos. La amilasa salival y pancreática lo digieren hasta maltosa y dextrinas.',
        'El *glucógeno* es la reserva de glucosa de los animales: su estructura es parecida a la de la amilopectina, pero con ramificaciones mucho más frecuentes, cada 8-12 residuos. Eso genera muchos extremos no reductores desde los que puede liberar glucosa rápidamente. Se almacena en el *hígado* (hasta un 10 % del peso del órgano), donde sirve para mantener la glucemia entre comidas, y en el *músculo*, donde se usa como combustible del propio músculo, porque este carece de glucosa-6-fosfatasa y no puede exportar glucosa a la sangre.',
        'La *celulosa* es el polímero estructural de las plantas: cadenas lineales de glucosa unidas por enlaces β1→4, que forman fibras muy resistentes por sus numerosos puentes de hidrógeno. El ser humano carece de celulasa y no puede digerirla, por lo que actúa como fibra dietética, que aumenta el bolo fecal y favorece el tránsito intestinal. La *quitina*, polímero de N-acetilglucosamina, forma el exoesqueleto de los insectos y la pared de los hongos.'
      ],
      foco:[
        'Almidón y glucógeno: enlaces α, se digieren. Celulosa: enlaces β, no se digiere (fibra). Glucógeno = más ramificado que el almidón. Solo el glucógeno hepático mantiene la glucemia.'
      ]
    },
    {
      t:'Glucoconjugados y aplicaciones clínicas',
      p:[
        'Los carbohidratos se unen a proteínas y lípidos y forman *glucoconjugados*. Las *glucoproteínas* llevan cadenas cortas de azúcares que intervienen en el plegamiento, la estabilidad y el reconocimiento celular: las inmunoglobulinas y muchas hormonas son glucoproteínas. Los *proteoglucanos* son proteínas con largas cadenas de glucosaminoglucanos (ácido hialurónico, condroitín sulfato, heparán sulfato) y forman la sustancia fundamental del cartílago y de la matriz extracelular. Los *glucolípidos* se localizan en la superficie externa de las membranas; los antígenos de los grupos sanguíneos ABO son cadenas de azúcares unidas a lípidos y a proteínas.',
        '*Consideración clínica*: las *glucogenosis* son enfermedades hereditarias del metabolismo del glucógeno. En la enfermedad de von Gierke (tipo I), falta la glucosa-6-fosfatasa: hipoglucemia en ayunas y hepatomegalia. En la enfermedad de Pompe (tipo II), falta la α-glucosidasa lisosómica y el glucógeno se acumula en el músculo cardíaco. En la de McArdle (tipo V), falta la fosforilasa muscular: calambres con el ejercicio.',
        'La glucosilación también puede ser una reacción no enzimática. En la *diabetes*, la glucosa elevada se une a la hemoglobina y forma hemoglobina glucosilada (HbA1c). Como los eritrocitos viven unos 120 días, la HbA1c refleja el promedio de la glucemia de los últimos 2-3 meses: un valor superior al 6,5 % indica diabetes, y un valor del 7 % o menor es el objetivo habitual de control.',
        'Ejemplo trabajado: un niño con hepatomegalia e hipoglucemia en ayunas mejora si se le administra glucosa, pero no glucagón. El glucagón activa la degradación del glucógeno, pero si el hígado no puede convertir la glucosa-6-fosfato en glucosa (falta la glucosa-6-fosfatasa), no hay glucosa que exportar. Saber en qué paso de la estructura o de la degradación falla el glucógeno permite predecir la respuesta clínica.'
      ],
      foco:[
        'HbA1c = glucosilación no enzimática de la hemoglobina = promedio de 2-3 meses. Glucógeno hepático libera glucosa a la sangre; el muscular, no (sin glucosa-6-fosfatasa).'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica, cap. 7. Harper, Bioquímica Ilustrada, cap. 14 y 15.'
}

});
