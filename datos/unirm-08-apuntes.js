/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8
   Texto para leer de corrido, escrito alrededor de lo que hay
   que entender para que el tema deje de ser una lista.

   Las referencias son a los textos que se usan de forma estandar
   en estas asignaturas. Se citan para que el estudiante pueda ir
   al capitulo; la explicacion de aqui es propia.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================== ANATOMIA II ==================== */
'corazon-y-pericardio': {
  tema:'Corazón, pericardio y circulación coronaria',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:9,
  idea:'Una bomba doble montada en serie dentro de un saco. Casi todo lo que se pregunta sale de saber qué irriga cada coronaria y qué pasa cuando el saco se llena.',
  claves:['corazón','pericardio','válvula','aurícula','ventrículo','coronaria'],
  sigue:'pared-abdominal-inguinal',
  secciones:[
    {
      t:'El saco y por qué importa que no ceda',
      p:[
        'El pericardio tiene dos hojas. La **fibrosa**, externa, es resistente y poco distensible, y se fija al diafragma por abajo. La **serosa**, interna, se refleja sobre el propio corazón formando la hoja visceral o epicardio. Entre ambas hojas serosas queda una cavidad virtual con una pequeña cantidad de líquido que permite el deslizamiento.',
        'Que la hoja fibrosa no ceda es el dato con más consecuencias del tema. Si se acumula líquido de forma **rápida**, el saco no tiene tiempo de distenderse y la presión sube bruscamente, comprimiendo las cavidades derechas, que son las de pared fina: eso es el taponamiento cardíaco, y bastan a veces 150 o 200 mL. Si el líquido se acumula **despacio**, el pericardio se adapta y puede llegar a alojar un litro sin comprometer el llenado. La misma cantidad de líquido, por tanto, es inocua o mortal según la velocidad con que aparezca.'
      ],
      foco:[
        'En el taponamiento lo que manda es la velocidad de acumulación, no el volumen absoluto.'
      ]
    },
    {
      t:'Cuatro cavidades, cuatro válvulas',
      p:[
        'La sangre entra por las venas cavas a la **aurícula derecha**, pasa por la **válvula tricúspide** al **ventrículo derecho**, sale por la **válvula pulmonar** hacia los pulmones, vuelve por las venas pulmonares a la **aurícula izquierda**, pasa por la **válvula mitral** al **ventrículo izquierdo** y sale por la **válvula aórtica** a la circulación sistémica.',
        'La regla que evita confundirlas: las válvulas **auriculoventriculares** (tricúspide y mitral) impiden el reflujo hacia la aurícula durante la sístole y se cierran produciendo el primer ruido; las **semilunares** (pulmonar y aórtica) impiden el reflujo desde las grandes arterias durante la diástole y se cierran produciendo el segundo ruido. Las auriculoventriculares están ancladas por cuerdas tendinosas a los músculos papilares, que se contraen con el ventrículo para que las valvas no se everten; las semilunares no tienen cuerdas porque no las necesitan.',
        'El ventrículo izquierdo tiene una pared mucho más gruesa que el derecho, y no porque bombee más sangre —bombea exactamente la misma— sino porque lo hace contra una resistencia mucho mayor. Es una diferencia de presión, no de volumen.'
      ],
      foco:[
        'Los dos ventrículos expulsan el mismo volumen. Lo que cambia es contra cuánta presión.'
      ]
    },
    {
      t:'Las coronarias y qué se pierde con cada una',
      p:[
        'Las arterias coronarias nacen de la aorta, justo por encima de la válvula aórtica, en los senos aórticos. Ese origen tiene una consecuencia elegante: el ostium queda tapado por la valva abierta durante la sístole, de modo que el corazón se irriga sobre todo en **diástole**. Por eso una taquicardia muy rápida, que acorta la diástole, puede producir isquemia aunque las arterias estén sanas.',
        'La **coronaria izquierda** se divide pronto en dos ramas. La **descendente anterior** recorre el surco interventricular anterior e irriga la cara anterior, la punta y los dos tercios anteriores del tabique: es la que más músculo alimenta y por eso su oclusión es la más temida. La **circunfleja** rodea por el surco auriculoventricular izquierdo e irriga la cara lateral.',
        'La **coronaria derecha** recorre el surco auriculoventricular derecho e irriga el ventrículo derecho, la cara inferior en la mayoría de las personas, y —dato muy preguntado— el **nodo sinusal** y el **nodo auriculoventricular** en la mayoría de los casos. De ahí que los infartos inferiores se acompañen con frecuencia de bradicardia y bloqueos.'
      ],
      foco:[
        'El corazón se irriga en diástole. Acortar la diástole es acortar su propio riego.',
        'Coronaria derecha → nodos → infarto inferior con bradicardia y bloqueo.'
      ]
    },
    {
      t:'El sistema de conducción, en anatomía',
      p:[
        'El impulso nace en el **nodo sinusal**, situado en la aurícula derecha cerca de la desembocadura de la vena cava superior. Se propaga por la musculatura auricular hasta el **nodo auriculoventricular**, en el tabique interauricular cerca del seno coronario.',
        'El nodo auriculoventricular es el único paso eléctrico entre aurículas y ventrículos, porque el esqueleto fibroso del corazón aísla eléctricamente unas de otros. Ese detalle anatómico es el que permite el retraso fisiológico que da tiempo a las aurículas a vaciarse antes de que el ventrículo se contraiga. Desde ahí el impulso baja por el **haz de His**, que se divide en rama derecha e izquierda, y termina en la **red de Purkinje**.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica. Netter, Atlas de Anatomía Humana.'
},

'pared-abdominal-inguinal': {
  tema:'Pared abdominal y conducto inguinal',
  bloque:'Anatomía II', programa:'unirm', cuatri:8, min:7,
  idea:'La región donde la anatomía se vuelve puramente práctica: un punto débil de fábrica por el que se salen las vísceras, y dos formas distintas de salirse.',
  claves:['pared abdominal','conducto inguinal','hernia','recto del abdomen','peritoneo'],
  sigue:'corazon-y-pericardio',
  secciones:[
    {
      t:'Las capas, y el mismo plan de siempre',
      p:[
      'La pared anterolateral del abdomen tiene tres músculos planos superpuestos que se disponen en capas con fibras cruzadas, igual que en el tórax: **oblicuo externo**, **oblicuo interno** y **transverso del abdomen**. Sus aponeurosis se entrecruzan en la línea media formando la vaina del **recto del abdomen**, y se encuentran en la **línea alba**.',
      'El paquete vasculonervioso viaja entre el oblicuo interno y el transverso, exactamente el mismo plano que ocupa entre los intercostales interno e íntimo. Ese paralelismo no es casual: la pared abdominal y la torácica siguen el mismo esquema segmentario, solo que abajo las costillas no llegan.',
      'Por dentro de todo está el peritoneo parietal. Entre el transverso y el peritoneo hay una fascia y grasa, que es el plano por el que se accede en la cirugía extraperitoneal.'
      ]
    },
    {
      t:'El conducto inguinal: por qué existe',
      p:[
        'El conducto inguinal es un trayecto oblicuo de unos cuatro centímetros que atraviesa la pared abdominal por encima del ligamento inguinal. Existe porque durante el desarrollo el testículo desciende desde el retroperitoneo hasta el escroto y arrastra consigo capas de la pared: el conducto es la huella de ese viaje. En la mujer, por donde pasó el mismo trayecto, discurre el ligamento redondo del útero.',
        'Tiene dos anillos, un suelo y un techo. El **anillo profundo** es una evaginación de la fascia transversalis; el **anillo superficial** es un orificio en la aponeurosis del oblicuo externo. Contiene el cordón espermático en el varón. Que exista un trayecto que atraviesa la pared es justamente lo que la debilita ahí, y de ahí que sea la localización más frecuente de hernia de todo el cuerpo.'
      ]
    },
    {
      t:'Las dos hernias inguinales, y cómo se distinguen',
      p:[
        'La referencia que las separa son los **vasos epigástricos inferiores**. La hernia **indirecta** sale por el anillo inguinal profundo, es decir, **lateral** a esos vasos, y recorre el conducto; es la más frecuente, sobre todo en jóvenes, y su origen es congénito: persiste el conducto peritoneovaginal que debería haberse cerrado tras el descenso testicular. Puede llegar hasta el escroto.',
        'La hernia **directa** empuja directamente a través de la pared posterior del conducto, **medial** a los vasos epigástricos, por una zona de debilidad adquirida. Es más propia del adulto mayor y del esfuerzo repetido, y rara vez alcanza el escroto.',
        'Una manera de fijarlo: la indirecta sigue el camino que ya existía y por eso viaja lejos; la directa se abre paso donde no había camino y por eso se queda cerca. Y la frontera entre ambas es siempre la misma referencia vascular.'
      ],
      foco:[
        'Lateral a los vasos epigástricos = indirecta = congénita = puede llegar al escroto. Medial = directa = adquirida.'
      ]
    }
  ],
  ref:'Moore, Anatomía con orientación clínica. Rouvière, Anatomía Humana.'
},

/* ==================== FISIOLOGIA II ==================== */
'ciclo-cardiaco': {
  tema:'Ciclo cardíaco y gasto cardíaco',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:8,
  idea:'Dos ideas sostienen todo el tema: las válvulas se abren y cierran por diferencia de presión, y el corazón expulsa lo que le llega. Nada más.',
  claves:['ciclo cardíaco','gasto cardíaco','precarga','poscarga','Frank-Starling','volumen sistólico'],
  sigue:'filtracion-glomerular',
  secciones:[
    {
      t:'Las válvulas no deciden nada',
      p:[
        'Conviene empezar por aquí porque desmonta el error más común: las válvulas cardíacas no tienen músculo ni mando. Se abren y se cierran pasivamente, según de qué lado haya más presión. Todo el ciclo cardíaco es, en el fondo, la historia de cuatro presiones cambiando de orden.',
        'Durante la **diástole**, la presión ventricular es baja y las auriculoventriculares están abiertas: el ventrículo se llena, en su mayor parte de forma pasiva. La contracción auricular aporta solo el último tramo, en torno al 20%, y por eso alguien puede vivir con fibrilación auricular: pierde esa patada auricular, pero no el llenado.',
        'Al contraerse el ventrículo, su presión supera a la auricular y las auriculoventriculares se cierran: primer ruido. Durante un instante el ventrículo se contrae con todas las válvulas cerradas, sin cambiar de volumen: es la **contracción isovolumétrica**. Cuando la presión supera a la de la aorta, se abre la válvula aórtica y comienza la eyección. Al relajarse, la presión cae por debajo de la aórtica y la semilunar se cierra: segundo ruido. Sigue otra fase con todo cerrado, la **relajación isovolumétrica**, hasta que la presión cae por debajo de la auricular y vuelve a empezar.'
      ],
      foco:[
        'Las dos fases isovolumétricas son aquellas en que TODAS las válvulas están cerradas. Ahí el volumen no cambia aunque la presión sí.'
      ]
    },
    {
      t:'Gasto cardíaco y sus tres palancas',
      p:[
        'El **gasto cardíaco** es el volumen que el corazón expulsa por minuto, y es simplemente el volumen sistólico multiplicado por la frecuencia cardíaca. El **volumen sistólico** depende a su vez de tres cosas: precarga, poscarga y contractilidad.',
        'La **precarga** es cuánto se llena el ventrículo antes de contraerse, es decir, el volumen telediastólico. Depende del retorno venoso. La **poscarga** es contra cuánta presión tiene que expulsar, y en el ventrículo izquierdo equivale en la práctica a la presión arterial. La **contractilidad** es la fuerza intrínseca del músculo, independiente de las dos anteriores, y la modulan el simpático y los fármacos.',
        'Con eso se entiende cualquier maniobra: subir la precarga con volumen aumenta el gasto; bajar la poscarga con un vasodilatador facilita la eyección y también lo aumenta; y un inotrópico sube la contractilidad.'
      ]
    },
    {
      t:'Frank-Starling: el corazón expulsa lo que le llega',
      p:[
        'Esta es la ley que ordena el tema. Dentro de un rango fisiológico, **cuanto más se llena el ventrículo, con más fuerza se contrae**. La explicación está en el sarcómero: al estirarse, los filamentos de actina y miosina quedan en un grado de solapamiento más favorable y se pueden formar más puentes cruzados. Es exactamente la relación longitud-tensión que se estudió en Fisiología I, aplicada al corazón entero.',
        'Su consecuencia funcional es enorme: permite que los dos ventrículos, que trabajan en serie, ajusten automáticamente su rendimiento sin necesidad de ninguna señal nerviosa. Si el derecho manda un poco más de sangre, el izquierdo se llena un poco más y expulsa un poco más. Sin este mecanismo, el menor desajuste entre ambos acumularía sangre en un lado en cuestión de minutos.',
        'En el corazón insuficiente la curva se aplana y se desplaza hacia abajo: el mismo llenado produce menos volumen expulsado, y estirar más deja de ayudar. Ahí es donde el mecanismo que normalmente compensa se convierte en congestión.'
      ],
      foco:[
        'Frank-Starling es la relación longitud-tensión del sarcómero vista desde fuera. Es lo que sincroniza los dos ventrículos sin que nadie se lo ordene.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica.'
},

'filtracion-glomerular': {
  tema:'Filtración glomerular y aclaramiento',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:8,
  idea:'El riñón no decide qué elimina: filtra a lo bruto y luego recupera lo que le interesa. Entender ese orden invertido explica el resto de la asignatura.',
  claves:['filtración glomerular','aclaramiento','creatinina','nefrona','presión de filtración'],
  sigue:'equilibrio-acido-base',
  secciones:[
    {
      t:'La estrategia: filtrar mucho y recuperar casi todo',
      p:[
        'Los riñones filtran alrededor de 180 litros al día y producen uno o dos de orina. Dicho así parece un despilfarro absurdo, y conviene entender por qué el diseño es ese. Filtrar de forma indiscriminada permite eliminar cualquier sustancia extraña sin necesidad de un transportador específico para cada una; la selectividad se aplica después, en la reabsorción. Un sistema que decidiera de antemano qué sacar necesitaría reconocer previamente todo lo que puede aparecer en la sangre, y eso es imposible.',
        'La **nefrona** es la unidad funcional y hace tres cosas: **filtración** en el glomérulo, **reabsorción** desde el túbulo hacia la sangre, y **secreción** desde la sangre hacia el túbulo. Lo que aparece en la orina es lo filtrado, menos lo reabsorbido, más lo secretado.'
      ]
    },
    {
      t:'Qué empuja y qué frena la filtración',
      p:[
        'La filtración depende de un balance de presiones a través de la membrana glomerular. **A favor** está la presión hidrostática del capilar glomerular, que es la que empuja. **En contra** están la presión hidrostática de la cápsula de Bowman y, sobre todo, la presión oncótica de las proteínas del plasma, que retienen agua.',
        'La barrera tiene tres capas: el endotelio fenestrado, la membrana basal y los podocitos con sus pedicelos. Es permeable al agua y a los solutos pequeños, y **retiene las proteínas y las células**. Que aparezcan proteínas o hematíes en la orina significa que esa barrera está dañada, y por eso el sedimento urinario informa tanto.',
        'Un punto que se pregunta mucho: las dos arteriolas regulan la filtración en sentidos opuestos. Contraer la **aferente**, que trae la sangre, reduce la presión dentro del glomérulo y baja el filtrado. Contraer la **eferente**, que la saca, represa la sangre dentro del glomérulo y lo **sube**. La angiotensina II actúa preferentemente sobre la eferente, y de ahí que en situaciones de baja perfusión sostenga el filtrado, y que un fármaco que bloquee ese sistema pueda hacerlo caer en un paciente que dependía de él.'
      ],
      foco:[
        'Aferente se contrae → baja el filtrado. Eferente se contrae → sube. La angiotensina II trabaja sobre la eferente.'
      ]
    },
    {
      t:'Aclaramiento, y por qué se usa la creatinina',
      p:[
        'El **aclaramiento** de una sustancia es el volumen de plasma que queda completamente libre de ella por unidad de tiempo. Es un concepto virtual —ningún volumen concreto se limpia del todo— pero resulta utilísimo, porque si se elige bien la sustancia, su aclaramiento equivale al filtrado glomerular.',
        'La sustancia ideal sería la que se filtra libremente y no se reabsorbe ni se secreta en absoluto: eso es la **inulina**, el patrón de referencia, pero hay que infundirla y no sirve en la práctica diaria. La **creatinina** es el sustituto clínico: procede del músculo a ritmo bastante constante, se filtra libremente y apenas se reabsorbe. Su único defecto es que se secreta un poco en el túbulo, por lo que sobrestima ligeramente el filtrado.',
        'Hay un detalle que conviene tener claro desde el principio: la relación entre creatinina y filtrado **no es lineal**, es aproximadamente inversa. Una creatinina que pasa de 0,8 a 1,6 refleja una pérdida de alrededor de la mitad de la función renal, mientras que pasar de 4 a 8 refleja mucha menos función perdida en términos absolutos, porque ya quedaba poca. Por eso una creatinina "solo un poco alta" en alguien joven puede ser más preocupante de lo que parece.'
      ],
      foco:[
        'Creatinina y filtrado van en relación inversa, no lineal. Pequeñas subidas al principio significan mucha función perdida.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica.'
},

'equilibrio-acido-base': {
  tema:'Equilibrio ácido-base',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:8,
  idea:'Tres preguntas en orden fijo resuelven cualquier gasometría. Lo difícil no es el tema, es no saltarse el orden.',
  claves:['acidosis','alcalosis','bicarbonato','compensación','anión gap'],
  sigue:'filtracion-glomerular',
  secciones:[
    {
      t:'Los dos sistemas que lo controlan',
      p:[
        'El pH depende de la proporción entre bicarbonato y CO2, según el sistema amortiguador que ya se estudió en Bioquímica I. Lo nuevo aquí es quién maneja cada componente. El **pulmón** controla el CO2 y lo hace en **minutos**, cambiando la ventilación. El **riñón** controla el bicarbonato y lo hace en **horas o días**, reabsorbiéndolo o generándolo.',
        'De ahí sale la lógica de la compensación: cuando el problema es respiratorio, compensa el riñón, despacio; cuando el problema es metabólico, compensa el pulmón, deprisa. Y una regla que evita muchos errores: **la compensación nunca corrige del todo**. Si el pH ha vuelto exactamente a lo normal o se ha pasado al otro lado, no es compensación, son dos trastornos a la vez.'
      ],
      foco:[
        'Pulmón: minutos, maneja CO2. Riñón: días, maneja bicarbonato. La compensación acerca el pH, nunca lo normaliza del todo.'
      ]
    },
    {
      t:'Las tres preguntas, en este orden',
      p:[
        '**Primera: ¿el pH está bajo o alto?** Eso define si el trastorno primario es una acidosis o una alcalosis. Se mira el pH y nada más.',
        '**Segunda: ¿quién lo explica, el CO2 o el bicarbonato?** Si hay acidosis y el CO2 está alto, es respiratoria. Si hay acidosis y el bicarbonato está bajo, es metabólica. La clave está en que el responsable siempre se mueve en el **mismo sentido** que el pH sugiere; el que se mueve en el otro sentido es el que está compensando.',
        '**Tercera: ¿la compensación es la esperada?** Si se queda corta o se pasa, hay un segundo trastorno escondido. Existen fórmulas para cuantificarlo, pero el razonamiento importa más que la fórmula.',
        'Hacer estas tres preguntas siempre en el mismo orden convierte una gasometría en un ejercicio mecánico. Saltarse la primera y empezar mirando el bicarbonato es el error clásico.'
      ]
    },
    {
      t:'El anión gap: la cuarta pregunta, solo a veces',
      p:[
        'Cuando el trastorno es una **acidosis metabólica**, y solo entonces, hay una pregunta más que hacer: el **anión gap**, que es el sodio menos la suma de cloro y bicarbonato. Mide los aniones que no se miden de rutina.',
        'Si el anión gap está **elevado**, se ha añadido un ácido nuevo cuyo anión no forma parte de los habituales: cetoácidos, lactato, tóxicos, o los aniones retenidos en la insuficiencia renal. Si el anión gap es **normal**, no se añadió ácido: se perdió bicarbonato, y el cloro subió para ocupar su sitio y mantener la electroneutralidad; eso ocurre en las diarreas y en algunas acidosis tubulares renales.',
        'Conviene ver la lógica en vez de memorizar las listas: el anión gap responde a una sola pregunta, y es si el bicarbonato bajó porque algo lo consumió o porque se perdió por un desagüe.'
      ],
      foco:[
        'El anión gap solo se calcula en acidosis metabólica. Elevado = se añadió ácido. Normal = se perdió bicarbonato.'
      ]
    }
  ],
  ref:'Guyton y Hall, Tratado de Fisiología Médica.'
},

/* ==================== BIOQUIMICA II ==================== */
'glucogeno-y-ayuno': {
  tema:'Glucógeno, ayuno y regulación de la glucemia',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:8,
  idea:'El organismo tiene que mantener la glucemia pase lo que pase, porque el cerebro no negocia. Toda la asignatura se ordena alrededor de ese problema.',
  claves:['glucógeno','glucogenólisis','gluconeogénesis','glucagón','insulina','ayuno'],
  sigue:'ciclo-de-la-urea',
  secciones:[
    {
      t:'Dos depósitos de glucógeno con funciones distintas',
      p:[
        'El glucógeno se almacena sobre todo en hígado y músculo, pero no sirven para lo mismo, y esa diferencia se pregunta siempre. El **hígado** almacena glucógeno para **exportar glucosa a la sangre** y mantener la glucemia del resto del organismo. El **músculo** lo almacena para su propio consumo y **no puede liberar glucosa a la sangre**.',
        'La razón es concreta: el músculo carece de la enzima **glucosa-6-fosfatasa**, que es la que quita el fosfato y deja la glucosa libre para atravesar la membrana. Sin esa enzima, la glucosa-6-fosfato queda atrapada dentro de la célula muscular y solo puede seguir hacia la glucólisis. El hígado sí tiene esa enzima, y por eso es el único que puede dar glucosa a los demás.'
      ],
      foco:[
        'El músculo no tiene glucosa-6-fosfatasa, así que su glucógeno es solo para él. El hígado sí la tiene, y por eso alimenta al resto.'
      ]
    },
    {
      t:'La secuencia del ayuno, por horas',
      p:[
        'Lo que ocurre al dejar de comer sigue un orden que conviene tener claro porque explica muchas preguntas de golpe.',
        'Las **primeras horas** se resuelven con **glucogenólisis** hepática: se rompe el glucógeno almacenado. Ese depósito es limitado y se agota en menos de un día.',
        'A partir de ahí entra la **gluconeogénesis**: el hígado fabrica glucosa nueva a partir de lactato, glicerol y aminoácidos, sobre todo alanina procedente del músculo. Aquí hay un punto que se pregunta con frecuencia: los **ácidos grasos no pueden convertirse en glucosa**, porque el paso de piruvato a acetil-CoA es irreversible y no hay manera de volver atrás. Lo único aprovechable de una grasa para hacer glucosa es su glicerol.',
        'En el **ayuno prolongado** aparecen los **cuerpos cetónicos**, fabricados en el hígado a partir de acetil-CoA. Su función es estratégica: el cerebro no puede usar ácidos grasos porque no atraviesan bien la barrera hematoencefálica, pero sí puede usar cuerpos cetónicos. Al hacerlo, reduce su consumo de glucosa y el organismo deja de tener que degradar proteína muscular para fabricarla. Los cuerpos cetónicos no son un fallo del metabolismo: son lo que salva el músculo.'
      ],
      foco:[
        'De grasa no se hace glucosa (salvo el glicerol). Es la limitación que obliga a todo lo demás.',
        'Los cuerpos cetónicos existen para que el cerebro deje de gastar glucosa y no haya que consumir músculo.'
      ]
    },
    {
      t:'Insulina y glucagón: una sola pregunta',
      p:[
        'En vez de memorizar dos listas de efectos, conviene quedarse con la pregunta que responde cada hormona. La **insulina** responde a "sobra glucosa": manda guardar. Activa la síntesis de glucógeno, la de ácidos grasos y la entrada de glucosa al músculo y al tejido adiposo. La **glucagón** responde a "falta glucosa": manda movilizar. Activa la glucogenólisis y la gluconeogénesis hepáticas y la lipólisis.',
        'Son antagonistas y casi siempre actúan sobre las mismas enzimas en sentidos opuestos, mediante fosforilación. Una regla que funciona bien en el hígado: **fosforilar activa lo que degrada y desactiva lo que construye**. Por eso el glucagón, que eleva el AMP cíclico y activa la proteína quinasa A, enciende la glucogenólisis y apaga la glucogenogénesis con el mismo gesto.',
        'Un matiz importante: el **músculo no tiene receptores para glucagón**. La hormona que moviliza su glucógeno durante el ejercicio es la adrenalina. Tiene sentido, porque el glucagón existe para regular la glucemia general, y el músculo no participa en eso.'
      ],
      foco:[
        'En el hígado, fosforilar activa la degradación y frena la síntesis. Con esa regla se deducen casi todos los efectos.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.'
},

'ciclo-de-la-urea': {
  tema:'Metabolismo del nitrógeno y ciclo de la urea',
  bloque:'Bioquímica II', programa:'unirm', cuatri:8, min:7,
  idea:'El nitrógeno de los aminoácidos no se puede almacenar ni quemar: hay que sacarlo. Y el problema es que su forma libre, el amoniaco, es un veneno para el cerebro.',
  claves:['transaminación','desaminación','amoniaco','ciclo de la urea','glutamina'],
  sigue:'glucogeno-y-ayuno',
  secciones:[
    {
      t:'Por qué hace falta un ciclo entero',
      p:[
        'Los hidratos y las grasas se almacenan; las proteínas, no. Cuando se degradan aminoácidos, su esqueleto carbonado entra en las rutas energéticas, pero el grupo amino sobra y debe eliminarse. El problema es que el **amoniaco libre es muy tóxico**, sobre todo para el sistema nervioso central, de modo que no puede simplemente circular hasta el riñón.',
        'La solución tiene dos pasos. Primero, el nitrógeno se recoge y se transporta en formas seguras: la **glutamina** lo lleva desde los tejidos periféricos, y la **alanina** lo lleva desde el músculo al hígado en el llamado ciclo de la glucosa-alanina. Segundo, en el hígado se convierte en **urea**, que es atóxica y muy soluble, y se excreta por el riñón.'
      ]
    },
    {
      t:'Transaminación y desaminación',
      p:[
        'La **transaminación** traspasa el grupo amino de un aminoácido a un cetoácido, generalmente el alfa-cetoglutarato, que se convierte así en glutamato. La catalizan las transaminasas, que necesitan **piridoxal fosfato**, derivado de la vitamina B6, como coenzima. Dos de ellas son conocidas en clínica: la ALT y la AST, que se miden en sangre porque su elevación indica daño celular hepático.',
        'La **desaminación oxidativa** libera después ese grupo amino como amoniaco, sobre todo a partir del glutamato mediante la glutamato deshidrogenasa. Fíjate en el diseño: la transaminación concentra todo el nitrógeno en una sola molécula, el glutamato, y solo entonces se libera. Recoger primero y liberar después en un único punto es lo que permite controlar el proceso.'
      ],
      foco:[
        'Las transaminasas necesitan vitamina B6. El glutamato es el embudo por donde pasa todo el nitrógeno.'
      ]
    },
    {
      t:'El ciclo, sin memorizar los intermediarios',
      p:[
        'El ciclo ocurre en el hígado, repartido entre la **mitocondria** y el **citosol**, y produce una molécula de urea con dos nitrógenos: uno procede del amoniaco libre y el otro del aspartato. El carbono viene del CO2.',
        'Lo que merece la pena saberse no es la lista de intermediarios, sino tres cosas. Primera: la enzima reguladora es la **carbamoil fosfato sintetasa I**, mitocondrial, y su activador es el N-acetilglutamato, cuya concentración sube cuando hay muchos aminoácidos: el ciclo se acelera solo cuando hay nitrógeno que eliminar. Segunda: el ciclo **consume ATP**, así que eliminar nitrógeno cuesta energía. Tercera: comparte intermediarios con el ciclo de Krebs a través del fumarato, de modo que ambos están conectados y no son rutas independientes.'
      ]
    },
    {
      t:'Cuando falla: la hiperamoniemia',
      p:[
        'Si el ciclo no funciona, el amoniaco se acumula. Ocurre en los déficits enzimáticos congénitos, que se manifiestan en el recién nacido, y en la **insuficiencia hepática**, donde el hígado no da abasto.',
        'El cuadro es neurológico porque el amoniaco atraviesa la barrera hematoencefálica: confusión, alteración del nivel de conciencia y, en casos avanzados, coma. Hay además un mecanismo que conviene entender: para neutralizar el amoniaco, el cerebro lo une a glutamato formando glutamina, lo que consume alfa-cetoglutarato. Al retirar alfa-cetoglutarato se frena el ciclo de Krebs neuronal, de modo que el amoniaco no solo es tóxico en sí, sino que además deja a la neurona sin energía. De ahí que el tratamiento busque reducir la producción intestinal de amoniaco, y no solo eliminarlo una vez formado.'
      ],
      foco:[
        'El amoniaco daña dos veces: por toxicidad directa y porque secuestra alfa-cetoglutarato y frena el Krebs neuronal.'
      ]
    }
  ],
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.'
},

/* ==================== GENETICA MEDICA ==================== */
'herencia-mendeliana': {
  tema:'Patrones de herencia mendeliana',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:8,
  idea:'Un árbol genealógico bien leído da el patrón en menos de un minuto. Hay cuatro preguntas que hacerle, y siempre las mismas.',
  claves:['autosómico dominante','autosómico recesivo','ligado al X','árbol genealógico','portador'],
  sigue:'cromosomopatias',
  secciones:[
    {
      t:'Las cuatro preguntas al árbol',
      p:[
        '**¿Aparece en todas las generaciones o salta?** Si aparece en todas, sugiere dominante. Si salta generaciones, sugiere recesivo: hay portadores sanos que lo transmiten sin manifestarlo.',
        '**¿Afecta por igual a hombres y mujeres?** Si sí, es autosómico. Si hay un claro predominio de varones afectados, hay que pensar en ligado al X.',
        '**¿Hay transmisión de varón a varón?** Esta es la pregunta más decisiva de todas. Un padre transmite a su hijo varón el cromosoma Y, nunca el X. Por tanto, **si existe transmisión de padre a hijo varón, queda descartada la herencia ligada al X**. Un solo caso en el árbol basta.',
        '**¿Hay consanguinidad?** Aumenta mucho la probabilidad de que dos portadores del mismo alelo raro se encuentren, así que apoya el patrón autosómico recesivo.'
      ],
      foco:[
        'Varón a varón descarta ligado al X. Es el dato con más poder de todo el árbol.'
      ]
    },
    {
      t:'Los tres patrones y sus números',
      p:[
        '**Autosómico dominante**: basta un alelo. Aparece en todas las generaciones, afecta a ambos sexos, y un afectado heterocigoto tiene un **50%** de riesgo en cada embarazo. Suele deberse a proteínas estructurales o a mecanismos de ganancia de función.',
        '**Autosómico recesivo**: hacen falta dos alelos. Suele aparecer en una sola generación, con padres portadores sanos; el riesgo de dos portadores es del **25%** en cada embarazo, y de sus hijos sanos, dos de cada tres serán portadores. Predominan aquí las enfermedades enzimáticas, los errores congénitos del metabolismo.',
        '**Recesivo ligado al X**: el varón, que solo tiene un X, se afecta si recibe el alelo; la mujer necesita dos y suele ser portadora sana. Una madre portadora transmite a la mitad de sus hijos varones la enfermedad y a la mitad de sus hijas la condición de portadora. Un padre afectado no transmite la enfermedad a ningún hijo varón, pero **todas** sus hijas serán portadoras obligadas.'
      ]
    },
    {
      t:'Lo que rompe las reglas y hay que saber nombrar',
      p:[
        'Los patrones puros son la excepción, no la norma, y estos conceptos explican casi todas las desviaciones.',
        'La **penetrancia incompleta** significa que alguien tiene el genotipo y no manifiesta nada; es lo que hace que un dominante parezca saltarse una generación. La **expresividad variable** significa que todos los afectados lo manifiestan, pero con gravedad muy distinta.',
        'El **mosaicismo germinal** explica que unos padres sanos tengan dos hijos afectados de una enfermedad dominante: la mutación está presente solo en parte de las células germinales de uno de ellos. La **anticipación** es el adelanto y agravamiento del cuadro en generaciones sucesivas, típica de las enfermedades por expansión de repeticiones de tripletes.',
        'La **impronta genómica** significa que un gen se expresa solo si viene del padre o solo si viene de la madre, de modo que la misma deleción produce cuadros distintos según su origen parental. Y la **heterogeneidad** recuerda que un mismo cuadro clínico puede deberse a genes diferentes, lo que complica tanto el diagnóstico como el consejo.'
      ],
      foco:[
        'Si un dominante parece saltar una generación, piensa en penetrancia incompleta antes que en cambiar de patrón.'
      ]
    }
  ],
  ref:'Thompson y Thompson, Genética en Medicina. Jorde, Genética Médica.'
},

'cromosomopatias': {
  tema:'Alteraciones cromosómicas',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:7,
  idea:'Cuando lo que falla no es una letra sino un capítulo entero. Casi todas nacen del mismo accidente: una separación que no ocurrió.',
  claves:['trisomía','no disyunción','Down','Turner','Klinefelter','translocación'],
  sigue:'herencia-mendeliana',
  secciones:[
    {
      t:'El accidente de base',
      p:[
        'La mayoría de las alteraciones numéricas proceden de una **no disyunción**: dos cromosomas homólogos, o dos cromátidas hermanas, no se separan durante la meiosis y ambos van al mismo gameto. El resultado es un gameto con un cromosoma de más y otro con uno de menos, y tras la fecundación, una trisomía o una monosomía.',
        'El riesgo de no disyunción aumenta claramente con la **edad materna**, y la razón está en la biología del ovocito: los ovocitos quedan detenidos en profase de la primera meiosis desde la vida fetal y no la completan hasta la ovulación, décadas después. Ese tiempo de espera deteriora los mecanismos que mantienen unidos a los cromosomas. La espermatogénesis, en cambio, es un proceso continuo que empieza en la pubertad, de modo que la edad paterna se asocia más a mutaciones puntuales nuevas que a no disyunción.'
      ],
      foco:[
        'Edad materna → no disyunción → alteraciones numéricas. Edad paterna → mutaciones puntuales nuevas. No es lo mismo.'
      ]
    },
    {
      t:'Las tres que hay que conocer',
      p:[
        'La **trisomía 21** o síndrome de Down es la cromosomopatía más frecuente compatible con la vida. En torno al 95% de los casos son trisomías libres por no disyunción, y su riesgo sube con la edad materna. Pero hay un 4% aproximado debido a una **translocación robertsoniana**, y ese matiz es decisivo en el consejo genético: si uno de los progenitores es portador equilibrado de la translocación, el riesgo de recurrencia es alto y no depende de la edad, mientras que tras una trisomía libre el riesgo de repetición es bajo. Por eso ante un caso siempre se pide el cariotipo: no para confirmar lo evidente, sino para saber qué decirles sobre el siguiente embarazo.',
        'El **síndrome de Turner** es la monosomía 45,X: una sola X y ningún segundo cromosoma sexual. Es la única monosomía completa viable en el ser humano, lo que ya dice mucho sobre lo mal que se tolera perder material cromosómico. Cursa con talla baja y disgenesia gonadal.',
        'El **síndrome de Klinefelter** es 47,XXY: un cromosoma X de más en un varón. Cursa con talla alta, hipogonadismo e infertilidad, y con frecuencia se diagnostica tarde, precisamente al estudiar la infertilidad.'
      ]
    },
    {
      t:'Estructurales y mosaicismo',
      p:[
        'Cuando lo que cambia no es el número sino la forma, se habla de alteraciones **estructurales**: deleciones, duplicaciones, inversiones y translocaciones. Una translocación **equilibrada** no pierde material y su portador suele estar sano, pero produce gametos desequilibrados: de ahí los abortos de repetición y el riesgo de descendencia afectada. Esa es la razón de estudiar el cariotipo de la pareja ante abortos recurrentes.',
        'El **mosaicismo** aparece cuando el error ocurre después de la fecundación, durante las divisiones del embrión: el individuo tiene entonces dos o más líneas celulares distintas. Clínicamente esto suele significar un cuadro más leve y más variable, porque parte de las células son normales, y explica que dos personas con la misma alteración puedan estar muy diferentemente afectadas.'
      ],
      foco:[
        'Abortos de repetición → cariotipo de ambos miembros de la pareja, buscando una translocación equilibrada.'
      ]
    }
  ],
  ref:'Thompson y Thompson, Genética en Medicina. Jorde, Genética Médica.'
},

/* ==================== BIOESTADISTICA ==================== */
'valor-p-e-intervalos': {
  tema:'Contraste de hipótesis, valor p e intervalos de confianza',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:8,
  idea:'El valor p no dice lo que casi todo el mundo cree que dice. Entender qué mide exactamente es el objetivo entero de la asignatura.',
  claves:['hipótesis nula','valor p','intervalo de confianza','error tipo I','potencia'],
  sigue:'medidas-epidemiologicas',
  secciones:[
    {
      t:'La hipótesis nula, y por qué se razona al revés',
      p:[
        'La lógica del contraste de hipótesis es indirecta y conviene aceptarlo desde el principio. Se parte de la **hipótesis nula**, que afirma que no hay diferencia o no hay asociación, y se intenta reunir evidencia suficiente para rechazarla. No se demuestra lo que se quiere probar: se intenta descartar lo contrario.',
        'De ahí salen dos consecuencias que se preguntan mucho. La primera es que **no rechazar la hipótesis nula no es lo mismo que demostrar que es cierta**: puede que no haya diferencia, o puede que la haya y el estudio no tuviera potencia para detectarla. La segunda es que la conclusión siempre es probabilística, nunca una certeza.'
      ]
    },
    {
      t:'Qué es el valor p, literalmente',
      p:[
        'El valor p es **la probabilidad de obtener un resultado al menos tan extremo como el observado, suponiendo que la hipótesis nula fuera cierta**. Merece la pena releer esa frase, porque cada parte importa.',
        'Y merece la pena decir qué **no** es, porque son los tres errores clásicos. No es la probabilidad de que la hipótesis nula sea cierta. No es la probabilidad de que el resultado se deba al azar. Y no mide en absoluto el tamaño del efecto: un p muy pequeño no significa un efecto grande, significa que el efecto observado sería raro si no existiera efecto alguno.',
        'El umbral habitual de 0,05 es una **convención**, no una ley de la naturaleza. Nada cambia de forma sustancial entre un 0,049 y un 0,051, y tratar esa frontera como si separara lo verdadero de lo falso es una de las peores costumbres de la literatura médica.'
      ],
      foco:[
        'El valor p mide cuán raro sería el dato SI la nula fuera cierta. No mide la probabilidad de que la nula sea cierta, ni el tamaño del efecto.'
      ]
    },
    {
      t:'Los dos errores y la potencia',
      p:[
        'El **error tipo I** o alfa es rechazar una hipótesis nula que era cierta: concluir que hay diferencia donde no la hay. Es el que se controla con el umbral de significación, habitualmente 0,05.',
        'El **error tipo II** o beta es no rechazar una hipótesis nula que era falsa: no detectar una diferencia que sí existía. La **potencia** es el complemento de beta, es decir, la probabilidad de detectar un efecto que realmente existe, y suele buscarse al menos un 80%.',
        'La potencia depende del tamaño del efecto, de la variabilidad y, sobre todo, del **tamaño muestral**. Por eso un estudio pequeño que no encuentra diferencias es casi siempre poco informativo: no sabemos si es que no hay efecto o es que no podía verlo.'
      ]
    },
    {
      t:'Por qué el intervalo de confianza dice más',
      p:[
        'El **intervalo de confianza al 95%** es el rango de valores compatibles con los datos observados. Aporta dos cosas que el valor p no da: la **magnitud** del efecto y su **precisión**.',
        'Contiene además la información del contraste: si el intervalo de una diferencia de medias incluye el cero, o si el de un riesgo relativo u odds ratio incluye el uno, el resultado no es significativo. Pero además dice **cuánto** podría valer el efecto, y eso es lo que permite juzgar si importa clínicamente.',
        'Un ejemplo aclara la diferencia. Dos estudios pueden dar el mismo p no significativo, y uno tener un intervalo de 0,98 a 1,02 —que descarta prácticamente cualquier efecto relevante— y el otro de 0,45 a 2,30, que es compatible con un beneficio enorme y con un daño enorme a la vez. El valor p los presenta como equivalentes; el intervalo enseña que uno concluye y el otro no concluye nada.',
        'De ahí la distinción final del tema: **significación estadística no es relevancia clínica**. Con una muestra suficientemente grande, cualquier diferencia por minúscula que sea acaba siendo significativa. La pregunta que importa no es si la diferencia existe, sino si es lo bastante grande como para cambiar lo que se hace con un paciente.'
      ],
      foco:[
        'Ante un resultado no significativo, mira la amplitud del intervalo: distingue "no hay efecto" de "este estudio no puede saberlo".'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

/* ==================== EPIDEMIOLOGIA ==================== */
'medidas-epidemiologicas': {
  tema:'Medidas de frecuencia, asociación e impacto',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:8,
  idea:'Tres familias de medidas que responden a tres preguntas distintas: cuánta enfermedad hay, cuánto la aumenta una exposición, y cuánto se ganaría quitándola.',
  claves:['prevalencia','incidencia','riesgo relativo','odds ratio','riesgo atribuible','NNT'],
  sigue:'disenos-de-estudio',
  secciones:[
    {
      t:'Frecuencia: prevalencia frente a incidencia',
      p:[
        'La **prevalencia** son los casos existentes en un momento dado dividido por la población. Es una fotografía: cuenta a todos los que tienen la enfermedad, lleven con ella un día o veinte años.',
        'La **incidencia** son los casos **nuevos** aparecidos en un periodo, entre la población que estaba en riesgo al empezar. Es una película: mide con qué velocidad aparece la enfermedad.',
        'La relación entre ambas es la clave del tema: la prevalencia depende de la incidencia y de la **duración** de la enfermedad. De ahí un hecho que parece paradójico y se pregunta a menudo: un tratamiento que no cura pero prolonga la vida **aumenta** la prevalencia, porque los enfermos viven más tiempo siendo casos. Una prevalencia que sube no siempre es mala noticia.',
        'Para causas, sirve la incidencia; para planificar recursos —camas, medicamentos, personal—, sirve la prevalencia, porque lo que consume recursos es el total de enfermos vivos.'
      ],
      foco:[
        'Prevalencia ≈ incidencia × duración. Si la duración crece, la prevalencia crece sin que haya más casos nuevos.'
      ]
    },
    {
      t:'Asociación: riesgo relativo y odds ratio',
      p:[
        'El **riesgo relativo** es el riesgo en los expuestos dividido por el riesgo en los no expuestos. Solo puede calcularse cuando se conoce la incidencia, es decir, en estudios de **cohortes** y en ensayos clínicos, donde se parte de personas sanas y se observa quién enferma.',
        'En un estudio de **casos y controles** no puede calcularse, porque se parte de los enfermos ya elegidos: el investigador decide cuántos casos y cuántos controles incluye, así que la proporción de enfermos es artificial y no refleja ningún riesgo. Ahí se usa el **odds ratio**, que compara la razón de exposición entre casos y controles.',
        'El odds ratio es una buena aproximación al riesgo relativo cuando la enfermedad es **poco frecuente**; cuando es frecuente, lo exagera. Esa condición se olvida a menudo y es la trampa habitual del tema.',
        'La interpretación es la misma en ambos: un valor de 1 significa ausencia de asociación, mayor que 1 sugiere factor de riesgo y menor que 1 sugiere factor protector. Y siempre hay que mirar el intervalo de confianza: si incluye el 1, la asociación no es significativa.'
      ],
      foco:[
        'Cohortes y ensayos → riesgo relativo. Casos y controles → odds ratio, válido como aproximación solo si la enfermedad es rara.'
      ]
    },
    {
      t:'Impacto: cuánto se ganaría actuando',
      p:[
        'Las medidas de impacto responden a una pregunta distinta de las anteriores: no cuánto multiplica el riesgo una exposición, sino cuánta enfermedad desaparecería si se eliminara.',
        'El **riesgo atribuible** es la diferencia entre el riesgo de los expuestos y el de los no expuestos: los casos que se deben a la exposición. La **fracción atribuible poblacional** dice qué proporción de todos los casos de la población se evitaría eliminándola, y depende no solo de la fuerza de la asociación sino de **cuánta gente está expuesta**.',
        'Esa dependencia explica algo importante para la salud pública: un factor con un riesgo relativo modesto pero muy extendido puede causar mucha más enfermedad total que otro con un riesgo relativo enorme pero rarísimo. Por eso las medidas de asociación sirven para juzgar causalidad y las de impacto para decidir dónde invertir.',
        'En el terreno del tratamiento, el equivalente es el **número necesario a tratar**: cuántos pacientes hay que tratar para evitar un evento. Es el inverso de la reducción absoluta del riesgo, y resulta mucho más honesto que la reducción relativa, que suele sonar espectacular sin decir sobre qué riesgo de partida se aplica.'
      ],
      foco:[
        'Reducción relativa impresiona; el NNT informa. Siempre pregunta por el riesgo basal antes de creerte un porcentaje de reducción.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología. Hernández-Ávila, Epidemiología: diseño y análisis de estudios.'
},

'disenos-de-estudio': {
  tema:'Diseños de estudio epidemiológico',
  bloque:'Epidemiología', programa:'unirm', cuatri:8, min:8,
  idea:'Cada diseño responde bien a una pregunta y mal a las demás. Saber elegir —y saber qué se le puede reprochar a cada uno— es la competencia que deja esta asignatura.',
  claves:['cohorte','casos y controles','transversal','ensayo clínico','sesgo','confusión'],
  sigue:'medidas-epidemiologicas',
  secciones:[
    {
      t:'Observar o intervenir',
      p:[
        'La primera división es simple: en los estudios **observacionales** el investigador mira lo que ocurre; en los **experimentales** asigna él la exposición. Solo los segundos permiten hablar de causalidad con solidez, porque la asignación aleatoria reparte por igual, entre los grupos, tanto las variables conocidas como las que nadie ha medido.',
        'La segunda división es temporal: si el estudio sigue a la gente en el tiempo es **longitudinal**; si toma una fotografía es **transversal**.'
      ]
    },
    {
      t:'Los tres observacionales',
      p:[
        'El **transversal** mide exposición y enfermedad a la vez, en el mismo momento. Es rápido y barato y sirve para estimar **prevalencia**, pero tiene un defecto insalvable: como todo se mide simultáneamente, no se sabe qué vino antes. Sin temporalidad no hay causalidad, y por eso un transversal genera hipótesis pero no las confirma.',
        'El estudio de **casos y controles** parte de la enfermedad y mira hacia atrás la exposición. Es el diseño de elección para **enfermedades raras**, porque permite reunir casos suficientes sin seguir a miles de personas durante años, y es rápido y barato. Sus debilidades características son el **sesgo de memoria** —los enfermos recuerdan y buscan exposiciones con más intensidad que los sanos— y la dificultad de elegir controles verdaderamente comparables. Da odds ratio.',
        'El estudio de **cohortes** parte de la exposición y sigue a la gente hacia adelante para ver quién enferma. Es el mejor observacional porque establece **temporalidad** y permite calcular **incidencia** y riesgo relativo, además de estudiar varios desenlaces de una misma exposición. A cambio es caro, largo y poco eficiente para enfermedades raras, y sufre las pérdidas de seguimiento, que sesgan si quienes abandonan son distintos de quienes se quedan.'
      ],
      foco:[
        'Enfermedad rara → casos y controles. Exposición rara → cohortes. Es la regla que resuelve casi todas las preguntas de elección de diseño.'
      ]
    },
    {
      t:'El ensayo clínico y sus tres defensas',
      p:[
        'El **ensayo clínico aleatorizado** es el patrón de referencia, y lo es por tres mecanismos concretos que conviene saber nombrar por separado.',
        'La **aleatorización** reparte al azar a los participantes entre los grupos, de modo que las variables de confusión —incluidas las desconocidas— se distribuyen por igual. Es lo único que ningún diseño observacional puede replicar.',
        'El **cegamiento** impide que el conocimiento del tratamiento influya en el comportamiento o en la valoración del desenlace. Simple si lo desconoce el paciente, doble si también el investigador.',
        'El **análisis por intención de tratar** analiza a cada participante en el grupo al que fue asignado, aunque no completara el tratamiento. Parece contraintuitivo, pero es precisamente lo que preserva el beneficio de la aleatorización: si se excluyera a quienes abandonaron, se estaría comparando otra vez a grupos que se autoseleccionaron, y el abandono rara vez es aleatorio.',
        'Sus límites son igual de importantes: coste, duración, restricciones éticas —no se puede asignar una exposición dañina— y el hecho de que sus participantes suelen estar más seleccionados y mejor atendidos que los pacientes reales, lo que limita la extrapolación.'
      ],
      foco:[
        'Intención de tratar no es un tecnicismo: es lo que evita que el abandono vuelva a introducir selección.'
      ]
    },
    {
      t:'Sesgo, confusión e interacción: tres cosas distintas',
      p:[
        'El **sesgo** es un error sistemático del diseño o la ejecución. No se corrige con más muestra ni en el análisis: se previene diseñando bien.',
        'La **confusión** ocurre cuando una tercera variable se asocia a la vez con la exposición y con el desenlace, sin estar en el camino causal entre ambos: crea una asociación aparente que no es real. A diferencia del sesgo, **sí puede corregirse**, en el diseño mediante aleatorización, restricción o apareamiento, y en el análisis mediante estratificación o modelos multivariantes.',
        'La **interacción** o modificación del efecto es distinta de las dos anteriores y no es un error: significa que el efecto de la exposición **es realmente diferente** según el valor de otra variable. No hay que corregirla, hay que describirla, porque es un hallazgo en sí misma.',
        'Confundir confusión con interacción es el error conceptual más frecuente del tema. La primera es un artefacto que hay que eliminar; la segunda es información que hay que reportar.'
      ],
      foco:[
        'Sesgo: se previene. Confusión: se corrige. Interacción: se describe, porque es un resultado real.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología. Hernández-Ávila, Epidemiología: diseño y análisis de estudios.'
},

/* ==================== PARASITOLOGIA MEDICA ==================== */
'malaria-y-protozoos': {
  tema:'Malaria y protozoos de importancia médica',
  bloque:'Parasitología Médica', programa:'unirm', cuatri:8, min:8,
  idea:'En parasitología el ciclo de vida no es un adorno: de él salen el cuadro clínico, el diagnóstico, el tratamiento y la prevención.',
  claves:['Plasmodium','Anopheles','falciparum','gota gruesa','Entamoeba histolytica','Giardia'],
  sigue:'disenos-de-estudio',
  secciones:[
    {
      t:'Malaria: el ciclo explica la fiebre',
      p:[
        'La hembra del mosquito **Anopheles** inocula esporozoítos al picar. Estos llegan al hígado y se multiplican durante días sin dar síntomas: es la fase hepática, y explica el periodo de incubación. Después salen a la sangre e invaden los eritrocitos, donde se multiplican hasta romperlos y liberar nuevos parásitos que invaden más eritrocitos.',
        'Esa rotura sincronizada de los eritrocitos es lo que produce el acceso febril característico, con escalofrío, fiebre alta y sudoración. La periodicidad del ciclo eritrocitario determina el ritmo de la fiebre, de donde vienen los nombres clásicos de fiebre terciana y cuartana. Y la destrucción repetida de eritrocitos explica la anemia y la esplenomegalia.',
        'Un detalle con consecuencia terapéutica: **P. vivax y P. ovale dejan formas latentes en el hígado**, los hipnozoítos, que pueden reactivarse meses después. Por eso su tratamiento necesita un fármaco adicional dirigido a esa fase hepática; tratar solo la sangre deja la recaída esperando.'
      ],
      foco:[
        'Hipnozoítos = vivax y ovale = recaídas tardías = hace falta tratamiento hepático además del sanguíneo.'
      ]
    },
    {
      t:'Por qué falciparum es la peligrosa',
      p:[
        'De las especies que afectan al ser humano, **Plasmodium falciparum** es la que causa la enfermedad grave y la mortalidad, y hay dos razones concretas.',
        'La primera es que invade eritrocitos de **cualquier edad**, mientras que las otras especies prefieren poblaciones concretas. Eso permite parasitemias mucho más altas.',
        'La segunda es la **citoadherencia**: los eritrocitos parasitados expresan proteínas que los hacen adherirse al endotelio de los capilares, de modo que se secuestran en la microcirculación en vez de pasar por el bazo, donde serían eliminados. Esa obstrucción capilar es el mecanismo de la malaria cerebral y del fallo orgánico.',
        'El diagnóstico de referencia sigue siendo microscópico: la **gota gruesa** para detectar y cuantificar, más el frotis fino para identificar la especie. Existen pruebas rápidas de antígeno útiles donde no hay microscopía, pero la cuantificación de la parasitemia sigue siendo información clínica de primer orden.'
      ]
    },
    {
      t:'Dos protozoos intestinales que se confunden',
      p:[
        '**Entamoeba histolytica** y **Giardia lamblia** se transmiten igual, por vía fecal-oral a través de quistes, y en ambos el quiste es la forma infectante y resistente mientras que el trofozoíto es la forma activa y frágil. Pero lo que hacen es distinto.',
        '*Entamoeba histolytica* **invade**: destruye la mucosa del colon produciendo úlceras, y de ahí la disentería con sangre y moco. Además puede diseminarse por vía portal y producir **absceso hepático**, típicamente único y en el lóbulo derecho. Un punto de laboratorio que se pregunta: existe *Entamoeba dispar*, morfológicamente idéntica pero no patógena, de modo que ver la ameba al microscopio no basta para afirmar que es la que enferma.',
        '*Giardia lamblia* **no invade**: se adhiere a la mucosa del duodeno y el yeyuno y altera la absorción. Por eso no da disentería sino **diarrea sin sangre**, esteatorrea, distensión y pérdida de peso, con un curso que puede hacerse prolongado. Cuando el examen de heces resulta repetidamente negativo pese a la sospecha, el parásito puede buscarse en el aspirado duodenal.'
      ],
      foco:[
        'Sangre y moco con posible absceso hepático: Entamoeba. Diarrea sin sangre con malabsorción: Giardia. Invade una, no invade la otra.'
      ]
    }
  ],
  ref:'Botero y Restrepo, Parasitosis Humanas. Murray, Microbiología Médica.'
},

/* ==================== INMUNOLOGIA ==================== */
'innata-y-adaptativa': {
  tema:'Inmunidad innata y adaptativa',
  bloque:'Inmunología', programa:'unirm', cuatri:8, min:7,
  idea:'Dos sistemas con un reparto de trabajo claro: uno responde rápido y siempre igual, el otro tarda pero aprende. Y el segundo no arranca si el primero no lo llama.',
  claves:['inmunidad innata','adaptativa','memoria','linfocito','MHC','anticuerpo'],
  sigue:'cromosomopatias',
  secciones:[
    {
      t:'El reparto de trabajo',
      p:[
        'La inmunidad **innata** es la primera línea: barreras físicas y químicas, fagocitos, células NK, complemento e inflamación. Actúa en **minutos u horas**, no necesita exposición previa y **no deja memoria**: responde igual la primera vez que la centésima. Su reconocimiento es de patrones generales compartidos por familias enteras de microorganismos, no de individuos concretos.',
        'La inmunidad **adaptativa** la ejecutan los linfocitos. Tarda **días** en la primera exposición porque necesita seleccionar y expandir los clones adecuados, pero es **específica** y **deja memoria**, de modo que la segunda respuesta es más rápida, más intensa y de mejor calidad. Toda la vacunación se apoya en esa propiedad.',
        'Lo que no siempre se explica bien es que no son dos sistemas paralelos e independientes: la innata **instruye** a la adaptativa. Las células presentadoras de antígeno, sobre todo las dendríticas, capturan el antígeno en el tejido, migran al ganglio y se lo presentan a los linfocitos T junto con señales que informan del contexto. Sin esa presentación, la respuesta adaptativa no se pone en marcha.'
      ],
      foco:[
        'La innata decide si la adaptativa se activa y en qué dirección. No es solo una barrera previa: es quien da la orden.'
      ]
    },
    {
      t:'Las dos ramas de la adaptativa',
      p:[
        'La respuesta **humoral** la llevan los linfocitos **B**, que se diferencian a células plasmáticas y producen **anticuerpos**. Es la rama eficaz contra lo que está **fuera de la célula**: bacterias extracelulares y sus toxinas. Los anticuerpos neutralizan, opsonizan para facilitar la fagocitosis y activan el complemento.',
        'La respuesta **celular** la llevan los linfocitos **T**. Los **CD8** o citotóxicos destruyen células infectadas; los **CD4** o colaboradores no matan nada directamente, sino que coordinan: activan macrófagos, ayudan a los B a producir mejores anticuerpos y dirigen el tipo de respuesta mediante las citocinas que secretan. Esta rama es la que resuelve lo que está **dentro de la célula**: virus y microorganismos intracelulares.',
        'La regla que ordena la presentación del antígeno es corta y se pregunta siempre: **el MHC de clase I presenta antígenos del interior de la célula a los CD8**, y lo expresan todas las células nucleadas, porque cualquiera puede infectarse; **el MHC de clase II presenta antígenos capturados del exterior a los CD4**, y lo expresan solo las células presentadoras profesionales. Ocho es uno por ocho, y cuatro es dos por dos: es la regla mnemotécnica clásica y funciona.'
      ],
      foco:[
        'MHC I → CD8 → lo de dentro. MHC II → CD4 → lo de fuera. Con eso se deduce qué rama actúa ante cada microorganismo.'
      ]
    },
    {
      t:'Por qué importa el CD4 más de lo que parece',
      p:[
        'El linfocito CD4 no destruye nada, y aun así su pérdida es devastadora. La razón es que ocupa el centro de la red: ayuda a los B a cambiar de clase de anticuerpo y madurar su afinidad, activa a los macrófagos para que terminen de destruir lo que fagocitaron, y sostiene la respuesta citotóxica.',
        'Eso explica el perfil de infecciones del paciente con inmunidad celular deprimida, que no es el mismo que el de quien tiene un defecto de anticuerpos. Cuando falla la rama humoral predominan las infecciones por bacterias encapsuladas; cuando falla la celular aparecen virus, hongos y microorganismos intracelulares que un sistema íntegro controla sin dificultad.',
        'Es también la razón de que un solo tipo celular pueda ser la diana que desarticula todo un sistema: no por lo que hace por sí mismo, sino por lo que coordina.'
      ]
    }
  ],
  ref:'Abbas, Inmunología Celular y Molecular. Janeway, Inmunobiología.'
}

});
