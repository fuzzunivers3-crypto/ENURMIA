/* ============================================================
   APUNTES 08 — Cirugía
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

/* ==================================================== */
'cuadrantes-del-abdomen': {
  tema:'Cuadrantes del abdomen',
  bloque:'Cirugía',
  min:4,
  idea:'Saber qué hay debajo de la mano convierte un dolor abdominal en una lista corta de diagnósticos.',
  claves:['cuadrantes','hipocondrio','fosa ilíaca','epigastrio','dolor referido'],
  sigue:'organos-intraperitoneales-y-retroperitoneales',
  secciones:[
    {
      t:'Las nueve regiones',
      p:[
        'El abdomen se divide en nueve regiones que orientan el diagnóstico topográfico. En el *hipocondrio derecho* se proyectan el hígado y la vesícula; en el *epigastrio*, el estómago, el duodeno y el páncreas; en el *hipocondrio izquierdo*, el bazo, la cola del páncreas, el ángulo esplénico del colon y el fundus gástrico.',
        'En los *flancos*, los riñones y el colon ascendente y descendente. En la *fosa ilíaca derecha*, el apéndice, el ciego y el anexo derecho; en la *izquierda*, el sigmoides y el anexo izquierdo; y en el *hipogastrio*, la vejiga y el útero.',
        'Con eso, un dolor en fosa ilíaca izquierda con fiebre en un adulto mayor sugiere diverticulitis, y uno en hipocondrio derecho con Murphy positivo, colecistitis.'
      ]
    },
    {
      t:'El dolor que engaña',
      p:[
        'Hay tres fenómenos que hacen que el dolor no coincida con el órgano. El *dolor referido*: la irritación diafragmática duele en el *hombro* —útil en el hemoperitoneo y en la rotura esplénica—, y la patología biliar irradia a la escápula derecha.',
        'La *migración*: en la apendicitis el dolor empieza vago y periumbilical, porque la distensión estimula fibras viscerales que entran en la médula a la altura de T10, y solo cuando la inflamación alcanza el peritoneo parietal se localiza en la fosa ilíaca derecha. Esa migración es uno de los datos clínicos de mayor valor.',
        'Y la *posición del órgano*: un apéndice retrocecal duele en el flanco y da signo del psoas; uno pélvico da síntomas urinarios o rectales y signo del obturador. Por eso la ausencia de dolor en McBurney no descarta una apendicitis.'
      ],
      foco:[
        'Dolor en cinturón que irradia a la espalda y mejora al inclinarse hacia adelante: páncreas, que es retroperitoneal.'
      ]
    }
  ],
  recordar:[
    'Hipocondrio derecho hígado y vesícula · izquierdo bazo y cola de páncreas.',
    'Fosa ilíaca derecha apéndice · izquierda sigmoides.',
    'Irritación diafragmática → dolor en el *hombro*.',
    'Apendicitis: dolor periumbilical que *migra*.'
  ],
  ref:'Netter, Atlas de Anatomía Humana; Schwartz, Principios de Cirugía, 11.ª ed.'
},

/* ==================================================== */
'organos-intraperitoneales-y-retroperitoneales': {
  tema:'Órganos intraperitoneales y retroperitoneales',
  bloque:'Cirugía',
  min:3,
  idea:'La posición respecto al peritoneo explica cómo duelen, cómo sangran y cómo se abordan.',
  claves:['retroperitoneo','intraperitoneal','SAD PUCKER','peritoneo'],
  sigue:'abdomen-agudo',
  secciones:[
    {
      t:'Quién está detrás',
      p:[
        'Son *retroperitoneales* los riñones y las glándulas suprarrenales, los uréteres, la aorta y la vena cava inferior, el páncreas salvo la cola, el duodeno excepto su primera porción, y el colon ascendente y descendente. La regla mnemotécnica SAD PUCKER ayuda a recordarlos.',
        'Son *intraperitoneales* el estómago, el bazo, el hígado, el yeyuno, el íleon, el colon transverso y el sigmoides.',
        'Un detalle que se pregunta a menudo: del duodeno, solo la *primera porción* es intraperitoneal, y por eso sus úlceras pueden perforar a la cavidad libre y dar neumoperitoneo, mientras que las de las porciones distales tienden a perforar al retroperitoneo.'
      ],
      foco:[
        'El sangrado retroperitoneal puede ser masivo y *silencioso*: no da irritación peritoneal y el abdomen puede estar blando.',
        'El dolor pancreático irradia a la espalda porque el páncreas es retroperitoneal.'
      ]
    }
  ],
  recordar:[
    'Retroperitoneales: riñones, suprarrenales, uréteres, aorta, cava, páncreas (salvo cola), duodeno (salvo 1.ª porción), colon ascendente y descendente.',
    'Solo la *primera porción* del duodeno es intraperitoneal.',
    'Hemorragia retroperitoneal: masiva y sin signos peritoneales.'
  ],
  ref:'Netter; Moore, Anatomía con Orientación Clínica.'
},

/* ==================================================== */
'abdomen-agudo': {
  tema:'Abdomen agudo',
  bloque:'Cirugía',
  min:6,
  idea:'La pregunta no es qué tiene, sino si necesita quirófano. Y hay pacientes que llegan con una catástrofe y el abdomen blando.',
  claves:['abdomen agudo','peritonitis','neumoperitoneo','defensa','irritación peritoneal'],
  sigue:'apendicitis',
  secciones:[
    {
      t:'Decidir si hay que operar',
      p:[
        'Ante un dolor abdominal agudo, lo primero es identificar los cuadros que exigen cirugía sin demora: la *perforación de víscera hueca*, la *isquemia mesentérica*, la *obstrucción complicada*, la rotura de un aneurisma y la hemorragia intraabdominal.',
        'Los signos de *irritación peritoneal* —defensa, contractura, dolor a la descompresión— orientan a peritonitis. En la perforación, la exploración clásica es el abdomen en tabla con ausencia de ruidos, y la prueba que confirma es la radiografía de tórax en bipedestación buscando *neumoperitoneo* bajo el diafragma; si es negativa y la sospecha persiste, tomografía. Ante sospecha de perforación, la endoscopia está contraindicada porque insufla aire y agrava la fuga.',
        'La *isquemia mesentérica* tiene un rasgo propio que hay que memorizar: un dolor intensísimo con una exploración abdominal llamativamente pobre, en un paciente con fibrilación auricular no anticoagulada o arteriopatía. Cuando aparecen los signos peritoneales, el intestino ya está necrótico.'
      ],
      foco:[
        'Dolor desproporcionado a una exploración anodina + lactato alto = isquemia mesentérica.',
        'Toda mujer en edad fértil con dolor abdominal: prueba de embarazo.'
      ]
    },
    {
      t:'Los pacientes que engañan',
      p:[
        'En el *anciano* la respuesta inflamatoria está atenuada, la musculatura es más laxa y la percepción del dolor puede estar alterada: la peritonitis puede cursar sin fiebre, sin leucocitosis y sin defensa. A veces la única manifestación es la confusión, el deterioro funcional o la taquicardia. El umbral para pedir imagen debe ser mucho más bajo, y la mortalidad del abdomen agudo en el anciano es alta en buena parte por el retraso diagnóstico.',
        'Lo mismo ocurre en el *inmunodeprimido*, en el diabético con neuropatía y en el paciente con corticoides, que enmascaran la inflamación.',
        'Y una idea que conviene desmontar: la *analgesia no enmascara* el abdomen agudo. Múltiples ensayos han demostrado que aliviar el dolor no aumenta los errores diagnósticos ni retrasa la cirugía, y de hecho facilita la exploración porque el paciente colabora. Negar el analgésico prolonga un sufrimiento innecesario.'
      ],
      alarma:[
        'Abdomen blando en un anciano con deterioro: no descarta catástrofe.',
        'No negar analgesia mientras llega el cirujano.'
      ]
    }
  ],
  recordar:[
    'Busca primero lo quirúrgico: *perforación, isquemia, obstrucción complicada, hemorragia*.',
    'Perforación: abdomen en tabla + *neumoperitoneo*. Endoscopia contraindicada.',
    'Isquemia mesentérica: dolor *desproporcionado* con abdomen anodino.',
    'El anciano y el inmunodeprimido *no* montan el cuadro clásico.',
    'La analgesia *no* enmascara.'
  ],
  ref:'Schwartz, 11.ª ed.; guías de la World Society of Emergency Surgery; revisiones Cochrane sobre analgesia en dolor abdominal.'
},

/* ==================================================== */
'apendicitis': {
  tema:'Apendicitis',
  bloque:'Cirugía',
  min:5,
  idea:'En el cuadro clásico el diagnóstico es clínico y la imagen retrasa. En el cuadro dudoso, y sobre todo en la mujer joven, la imagen evita cirugías en blanco.',
  claves:['apendicitis','McBurney','Rovsing','psoas','apendicectomía'],
  sigue:'pancreatitis',
  secciones:[
    {
      t:'La historia natural y los signos',
      p:[
        'Todo empieza con la obstrucción de la luz apendicular, habitualmente por un fecalito o por hiperplasia linfoide. La distensión produce un dolor visceral *vago y periumbilical*, con anorexia y náuseas; cuando la inflamación alcanza el peritoneo parietal, el dolor se localiza en la fosa ilíaca derecha, en el punto de McBurney. Esa *migración* es el dato clínico de mayor valor.',
        'Los signos complementan: *Rovsing* es el dolor referido a la fosa ilíaca derecha al presionar la izquierda; el signo del *psoas*, dolor al extender la cadera, sugiere apéndice retrocecal; el del *obturador*, dolor con la rotación interna del muslo flexionado, sugiere apéndice pélvico. Conocer estas variantes explica las presentaciones atípicas.'
      ]
    },
    {
      t:'Cuándo pedir imagen y cuándo no operar todavía',
      p:[
        'En la presentación clásica del varón joven, el diagnóstico es clínico y la cirugía no debe retrasarse. En la *mujer en edad fértil* con cuadro dudoso, en cambio, el diferencial incluye enfermedad inflamatoria pélvica, quiste ovárico complicado, torsión anexial y embarazo ectópico, de modo que la imagen sí aporta y reduce las apendicectomías en blanco: se empieza por ecografía y se pasa a tomografía si no es concluyente. También se apoya en imagen al anciano y al niño pequeño.',
        'Hay una situación en la que la respuesta no es operar de inmediato: el *plastrón apendicular*, cuando el cuadro lleva varios días y el epiplón y las asas han formado una masa que contiene la inflamación. Operar entonces es técnicamente difícil y aumenta el riesgo de lesión intestinal y fístula. El manejo es antibiótico y vigilancia, drenando percutáneamente si hay un absceso accesible, y valorando después la apendicectomía diferida. En el adulto mayor conviene además estudiar el colon, porque una neoplasia de ciego puede simular el cuadro.'
      ],
      alarma:[
        'La ausencia de dolor en McBurney no descarta: depende de la posición del apéndice.',
        'Plastrón bien delimitado sin sepsis: antibiótico, no quirófano inmediato.'
      ]
    }
  ],
  recordar:[
    'Dolor periumbilical que *migra* a fosa ilíaca derecha.',
    'Rovsing, *psoas* (retrocecal), *obturador* (pélvico).',
    'Mujer joven con cuadro dudoso: *imagen* antes de operar.',
    'Plastrón: antibiótico y cirugía *diferida*.'
  ],
  ref:'Guías de la World Society of Emergency Surgery sobre apendicitis aguda; Schwartz, 11.ª ed.'
},

/* ==================================================== */
'pancreatitis': {
  tema:'Pancreatitis',
  bloque:'Cirugía',
  min:6,
  idea:'La gravedad la define la duración del fallo orgánico, no la cifra de amilasa. Y el ayuno prolongado quedó atrás.',
  claves:['pancreatitis','amilasa','lipasa','Atlanta','necrosis pancreática'],
  sigue:'colelitiasis',
  secciones:[
    {
      t:'Diagnóstico y causas',
      p:[
        'El diagnóstico requiere *dos de tres* criterios: dolor abdominal característico —epigástrico, irradiado en cinturón a la espalda, que mejora al inclinarse hacia adelante—, elevación de amilasa o lipasa al menos tres veces por encima del límite normal, e imagen compatible.',
        'Las dos causas principales son la *litiasis biliar* y el *alcohol*; le siguen la hipertrigliceridemia, la hipercalcemia, los fármacos, la post-CPRE y las autoinmunes. Identificar la causa importa porque cambia el manejo posterior.',
        'La gravedad se clasifica según la *duración del fallo orgánico*: leve si no hay fallo ni complicaciones locales; moderadamente grave si el fallo es transitorio, de menos de 48 horas, o hay complicaciones locales; y grave si el fallo orgánico *persiste más de 48 horas*. La mortalidad se concentra en esta última. La cifra de amilasa o lipasa no guarda relación con la gravedad ni con el pronóstico.'
      ],
      foco:[
        'La amilasa diagnostica; *no* estadifica. Una amilasa muy alta puede corresponder a una pancreatitis leve.'
      ]
    },
    {
      t:'Tratamiento: lo que cambió',
      p:[
        'La base sigue siendo la reposición hidroelectrolítica adecuada, la analgesia y el tratamiento de la causa. Pero dos prácticas clásicas se han revisado.',
        'La primera es el ayuno: el reposo pancreático prolongado ha sido sustituido por la *alimentación precoz*, oral en la pancreatitis leve en cuanto disminuye el dolor y hay tolerancia, o enteral por sonda en la grave. Mantener el intestino en uso preserva la barrera mucosa, reduce la traslocación bacteriana y las complicaciones infecciosas, y acorta la estancia. La nutrición parenteral se reserva para cuando la vía enteral no es posible.',
        'La segunda es el antibiótico: no está indicado de forma profiláctica en la pancreatitis sin infección demostrada.',
        'Y una decisión que evita reingresos: en la pancreatitis *biliar leve*, la colecistectomía debe realizarse durante el *mismo ingreso*, porque el riesgo de recurrencia en las semanas siguientes es alto y cada recurrencia puede ser más grave. En la grave con colecciones, se difiere.'
      ],
      alarma:[
        'Fallo orgánico que persiste más de 48 horas: pancreatitis grave, la mortalidad está aquí.',
        'Alta con la vesícula puesta tras una pancreatitis biliar: reingreso probable.'
      ]
    }
  ],
  recordar:[
    'Diagnóstico: *2 de 3* (dolor, enzimas ×3, imagen).',
    'Gravedad = *duración del fallo orgánico*, no la amilasa.',
    'Alimentación *precoz*; sin antibiótico profiláctico.',
    'Biliar leve: *colecistectomía en el mismo ingreso*.'
  ],
  ref:'Clasificación de Atlanta revisada; guías de la American College of Gastroenterology y de la IAP/APA.'
},

/* ==================================================== */
'colelitiasis': {
  tema:'Colelitiasis',
  bloque:'Cirugía',
  min:4,
  idea:'La mayoría de los cálculos nunca darán síntomas. Lo que indica cirugía son los síntomas, no el hallazgo ecográfico.',
  claves:['colelitiasis','cólico biliar','vesícula','colecistectomía'],
  sigue:'colecistitis',
  secciones:[
    {
      t:'Asintomática y sintomática',
      p:[
        'La colelitiasis asintomática es un hallazgo frecuente y en su mayoría permanece así: solo un 1 a 2% al año desarrolla síntomas, y las complicaciones graves suelen ir precedidas de episodios de cólico. Por eso la conducta habitual es la *observación*.',
        'Se plantea cirugía en situaciones concretas: vesícula en porcelana o cálculos mayores de 3 centímetros, por el riesgo de cáncer; pólipos asociados; anemias hemolíticas; y algunos casos de trasplante o cirugía bariátrica.',
        'El *cólico biliar* es dolor en hipocondrio derecho o epigastrio, de intensidad creciente, que suele seguir a una comida grasa, dura menos de seis horas y cede. No hay fiebre ni leucocitosis: si aparecen, y el dolor se hace continuo, ya no es un cólico sino una colecistitis. En el paciente con cólicos repetidos, la colecistectomía laparoscópica programada es el tratamiento.'
      ],
      foco:[
        'Cólico = menos de 6 horas, sin fiebre. Más de 6 horas con fiebre y leucocitosis = colecistitis.'
      ]
    }
  ],
  recordar:[
    'Asintomática: *observación*, salvo riesgo especial.',
    'Vesícula en porcelana o cálculo > 3 cm: se opera.',
    'Cólico biliar: *< 6 h*, sin fiebre ni leucocitosis.',
    'Cólicos repetidos: colecistectomía programada.'
  ],
  ref:'Guías de Tokio; Schwartz, 11.ª ed.'
},

/* ==================================================== */
'colecistitis': {
  tema:'Colecistitis',
  bloque:'Cirugía',
  min:4,
  idea:'Dolor continuo con fiebre y Murphy positivo. Y hoy se opera pronto, no se espera a enfriar el cuadro.',
  claves:['colecistitis','Murphy','ecografía','colecistectomía precoz'],
  sigue:'coledocolitiasis',
  secciones:[
    {
      t:'Diagnóstico',
      p:[
        'La colecistitis aguda es la inflamación de la vesícula, casi siempre por obstrucción del conducto cístico por un cálculo. Se manifiesta con dolor continuo en hipocondrio derecho de más de seis horas, fiebre y leucocitosis.',
        'El *signo de Murphy* es su exploración característica: al presionar bajo el reborde costal derecho durante la inspiración profunda, la vesícula inflamada desciende, choca con la mano y el paciente interrumpe bruscamente la respiración por dolor.',
        'La ecografía confirma: pared engrosada de más de 3 mm, líquido perivesicular, cálculo enclavado y Murphy ecográfico.'
      ]
    },
    {
      t:'Cuándo operar',
      p:[
        'La evidencia actual favorece la *colecistectomía laparoscópica precoz*, dentro de las primeras 72 horas desde el inicio de los síntomas o del ingreso: se asocia a menor estancia, menos reingresos y menos complicaciones que la cirugía diferida, sin aumentar la conversión ni las lesiones de la vía biliar en manos experimentadas.',
        'Enfriar siempre el cuadro y operar meses después es un esquema superado para la mayoría de los pacientes. La cirugía diferida se reserva para quien tiene un riesgo quirúrgico prohibitivo, y en ellos puede plantearse una colecistostomía percutánea como puente.'
      ],
      alarma:[
        'Colecistitis con deterioro, gas en la pared o paciente diabético: sospecha formas gangrenosa o enfisematosa.',
        'Ictericia marcada: piensa que además hay un cálculo en el colédoco.'
      ]
    }
  ],
  recordar:[
    'Dolor *continuo > 6 h* + fiebre + leucocitosis + *Murphy*.',
    'Ecografía: pared > 3 mm y líquido perivesicular.',
    'Colecistectomía *precoz*, dentro de las primeras 72 horas.'
  ],
  ref:'Guías de Tokio 2018; guías de la World Society of Emergency Surgery.'
},

/* ==================================================== */
'coledocolitiasis': {
  tema:'Coledocolitiasis',
  bloque:'Cirugía',
  min:4,
  idea:'La CPRE es tratamiento, no cribado. Antes de usarla hay que estimar la probabilidad, porque su complicación no es menor.',
  claves:['coledocolitiasis','CPRE','colangiorresonancia','colestasis','colédoco dilatado'],
  sigue:'colangitis',
  secciones:[
    {
      t:'Estratificar antes de intervenir',
      p:[
        'La ecografía detecta bien los cálculos vesiculares pero mal los del colédoco, porque el gas intestinal interfiere. Por eso, ante colestasis, hay que estimar la probabilidad antes de decidir.',
        'Son predictores de riesgo *alto*: la visualización del cálculo en el colédoco por ecografía, la colangitis clínica, y una bilirrubina total mayor de 4 mg/dL junto con dilatación de la vía biliar. Con ellos se procede directamente a *CPRE terapéutica*.',
        'En riesgo *intermedio* se recurre antes a pruebas no invasivas de alta sensibilidad: colangiorresonancia o ecoendoscopia. Y en riesgo *bajo* se realiza la colecistectomía sin más estudio de la vía biliar.',
        'La razón de este orden es que la CPRE es invasiva y su complicación característica, la pancreatitis post-CPRE, no es despreciable. Usarla como prueba diagnóstica en todos los casos expone a un daño evitable.'
      ],
      alarma:[
        'Operar la vesícula dejando el cálculo en el colédoco: aboca a colangitis o pancreatitis.',
        'CPRE "para ver": es tratamiento, no diagnóstico de cribado.'
      ]
    }
  ],
  recordar:[
    'Riesgo alto: cálculo visible, colangitis o *bilirrubina > 4* con colédoco dilatado → CPRE.',
    'Riesgo intermedio: *colangiorresonancia o ecoendoscopia*.',
    'La CPRE es *terapéutica*; su complicación es la pancreatitis.'
  ],
  ref:'Guías ASGE y ESGE sobre coledocolitiasis.'
},

/* ==================================================== */
'colangitis': {
  tema:'Colangitis',
  bloque:'Cirugía',
  min:4,
  idea:'El antibiótico solo no basta: mientras la vía biliar siga obstruida, las bacterias siguen pasando a la sangre. Hay que drenar.',
  claves:['colangitis','Charcot','Reynolds','drenaje biliar','sepsis biliar'],
  sigue:'hemorragias-digestivas',
  secciones:[
    {
      t:'Charcot y Reynolds',
      p:[
        'La *tríada de Charcot* —fiebre, ictericia y dolor en hipocondrio derecho— define clínicamente la colangitis aguda. Cuando se añaden *hipotensión y alteración del estado mental*, se completa la *péntada de Reynolds*, que identifica la colangitis grave con shock séptico y mortalidad elevada.',
        'Solo una minoría presenta la péntada completa, y muchos pacientes graves, sobre todo ancianos, no tienen ni siquiera la tríada íntegra: hay que sospecharla con datos incompletos.'
      ]
    },
    {
      t:'Por qué el drenaje es lo decisivo',
      p:[
        'En la vía biliar obstruida la presión intraductal aumenta y, superado cierto umbral, se establece un *reflujo colangiovenoso*: las bacterias pasan directamente a la circulación. Eso explica la rapidez con que la colangitis produce bacteriemia, sepsis y shock.',
        'Y explica también por qué el antibiótico por sí solo no resuelve: mientras la presión no se descomprima, la fuente de bacteriemia sigue activa. El tratamiento decisivo es el *drenaje biliar urgente*, habitualmente por CPRE, junto con antibiótico y soporte. La colecistectomía se realiza después.'
      ],
      alarma:[
        'Colangitis que no mejora con antibiótico: no está drenada.',
        'Hipotensión y confusión en un paciente ictérico: péntada de Reynolds, urgencia.'
      ]
    }
  ],
  recordar:[
    '*Charcot*: fiebre + ictericia + dolor. *Reynolds*: añade hipotensión y confusión.',
    'La presión biliar empuja bacterias a la sangre: *reflujo colangiovenoso*.',
    'Lo decisivo es el *drenaje urgente*, no solo el antibiótico.'
  ],
  ref:'Guías de Tokio 2018 sobre colangitis aguda.'
},

/* ==================================================== */
'hemorragias-digestivas': {
  tema:'Hemorragias digestivas',
  bloque:'Cirugía',
  min:6,
  idea:'Primero se estabiliza, después se localiza. Y el hematocrito inicial no mide lo que se ha perdido.',
  claves:['hemorragia digestiva','melena','hematemesis','rectorragia','endoscopia','várices'],
  sigue:'gastritis',
  secciones:[
    {
      t:'Alta o baja',
      p:[
        'La *melena* —heces negras, pegajosas y muy malolientes— indica que la sangre ha permanecido horas en el tubo digestivo, lo que orienta a origen alto, por encima del ángulo de Treitz. La *hematemesis* lo confirma. Un dato analítico que ayuda: la urea elevada con creatinina normal refleja la digestión y absorción de las proteínas de la sangre en el intestino delgado, no un fallo renal.',
        'La *rectorragia* sugiere origen bajo, aunque conviene tener presente que una hemorragia alta muy abundante puede presentarse como sangre roja por el recto: ante inestabilidad, hay que descartar también el origen alto.',
        'En el anciano, la causa más frecuente de hemorragia baja masiva es la *diverticular*, indolora y que suele ceder sola; le siguen la angiodisplasia, la colitis isquémica y la neoplasia. Atribuir toda rectorragia a hemorroides es el error que retrasa el diagnóstico de un cáncer.'
      ],
      foco:[
        'Urea alta con creatinina normal = origen *alto*.',
        'El *hematocrito inicial* no mide la pérdida: en la hemorragia aguda se pierde sangre completa y solo cae con la hemodilución.'
      ]
    },
    {
      t:'La secuencia del manejo',
      p:[
        'Primero *estabilizar*: dos vías periféricas de grueso calibre, reposición con cristaloides, transfusión con estrategia *restrictiva* —objetivo de hemoglobina en torno a 7-8 g/dL, salvo cardiopatía isquémica—, y protección de la vía aérea si hay hematemesis masiva o bajo nivel de conciencia.',
        'Después *tratar y localizar*: inhibidor de la bomba de protones intravenoso, endoscopia alta en las primeras 24 horas o antes si el sangrado es activo. Y si se sospecha origen *variceal* en un cirrótico, se añaden desde el inicio un vasoactivo esplácnico y un antibiótico profiláctico, que reduce infecciones, resangrado y mortalidad, con endoscopia y ligadura en las primeras 12 horas.',
        'La transfusión generosa buscando cifras altas empeora el pronóstico, especialmente en el cirrótico, porque eleva la presión portal y favorece el resangrado.'
      ],
      alarma:[
        'Transfundir de más en el cirrótico: más presión portal, más resangrado.',
        'Endoscopia en un paciente inestable: primero se estabiliza.'
      ]
    }
  ],
  recordar:[
    'Melena y *urea alta con creatinina normal* = origen alto.',
    'El hematocrito inicial *engaña*.',
    'Estabilizar → inhibidor de bomba → endoscopia en 24 h.',
    'Variceal: *vasoactivo + antibiótico* + ligadura en 12 h.',
    'Transfusión *restrictiva*.'
  ],
  ref:'Guías ESGE sobre hemorragia digestiva alta variceal y no variceal; consenso de Baveno VII.'
},

/* ==================================================== */
'gastritis': {
  tema:'Gastritis',
  bloque:'Cirugía',
  min:4,
  idea:'Dos causas dominan: Helicobacter y los antiinflamatorios. Y cada una se maneja de forma distinta.',
  claves:['gastritis','Helicobacter pylori','AINE','úlcera péptica','erradicación'],
  sigue:'reflujo-gastroesofagico',
  secciones:[
    {
      t:'Helicobacter pylori',
      p:[
        'La erradicación requiere un inhibidor de la bomba de protones junto con *dos o más antibióticos* durante 10 a 14 días, en pautas que dependen de la resistencia local a claritromicina. Está indicada siempre que se demuestre la infección en un paciente con úlcera, y también en el linfoma MALT, tras resección de cáncer gástrico precoz y en otras situaciones seleccionadas.',
        'La comprobación de la erradicación se realiza al menos cuatro semanas después de terminar el antibiótico y dos semanas después de suspender el inhibidor, con *test del aliento con urea marcada o antígeno en heces*. La serología no sirve para comprobar erradicación, porque los anticuerpos persisten años: es el error más repetido.'
      ]
    },
    {
      t:'Gastropatía por antiinflamatorios y úlcera de estrés',
      p:[
        'Los antiinflamatorios no esteroideos inhiben la COX-1 y reducen las prostaglandinas que mantienen la barrera mucosa: baja el moco, el bicarbonato y el flujo sanguíneo de la mucosa. El daño se produce por vía *sistémica*, de modo que cambiar a la vía parenteral o rectal no lo evita, que es una creencia frecuente.',
        'En pacientes con factores de riesgo —edad avanzada, antecedente de úlcera, corticoides o anticoagulantes concomitantes— se asocia un inhibidor de la bomba de protones o se elige un inhibidor selectivo de la COX-2.',
        'Caso aparte es la *úlcera de estrés* del paciente crítico, por hipoperfusión de la mucosa. La profilaxis está indicada ante factores de riesgo bien establecidos —ventilación mecánica de más de 48 horas y coagulopatía, sobre todo—, pero no de rutina en todo ingresado: no es inocua y se asocia a neumonía e infección por Clostridioides difficile. Y hay que retirarla cuando desaparecen los factores, no arrastrarla durante años.'
      ],
      alarma:[
        'Comprobar erradicación con serología: no sirve.',
        'Prescribir inhibidor de bomba de por vida sin indicación revisada.'
      ]
    }
  ],
  recordar:[
    'Erradicación: inhibidor de bomba + *dos o más antibióticos*, 10-14 días.',
    'Comprobación: *aliento o antígeno en heces*, nunca serología.',
    'AINE: el daño es *sistémico*; cambiar de vía no protege.',
    'Profilaxis de úlcera de estrés: solo con factores de riesgo.'
  ],
  ref:'Consenso de Maastricht; guías de la American College of Gastroenterology.'
},

/* ==================================================== */
'reflujo-gastroesofagico': {
  tema:'Reflujo gastroesofágico',
  bloque:'Cirugía',
  min:4,
  idea:'La mayoría se trata sin endoscopia. Lo que obliga a mirar dentro son los síntomas de alarma.',
  claves:['reflujo','pirosis','Barrett','inhibidor de bomba','endoscopia'],
  sigue:'acalasia',
  secciones:[
    {
      t:'Cuándo basta con tratar y cuándo hay que explorar',
      p:[
        'En el paciente con pirosis y regurgitación típicas, sin datos de alarma, se puede iniciar tratamiento empírico con medidas de estilo de vida —perder peso, elevar el cabecero, evitar comidas copiosas y tardías— e inhibidores de la bomba de protones, sin endoscopia inicial.',
        'Los *síntomas de alarma* cambian esa conducta y obligan a endoscopia: disfagia, odinofagia, pérdida de peso, anemia, hemorragia digestiva, vómitos persistentes o inicio de los síntomas en edad avanzada. También se explora ante síntomas de larga evolución, falta de respuesta al tratamiento o factores de riesgo de esófago de Barrett.'
      ]
    },
    {
      t:'Esófago de Barrett',
      p:[
        'El reflujo crónico puede sustituir el epitelio escamoso del esófago distal por epitelio columnar con *metaplasia intestinal*: eso es el esófago de Barrett, una lesión premaligna que aumenta el riesgo de adenocarcinoma esofágico.',
        'Requiere tratamiento con inhibidores de la bomba y *vigilancia endoscópica periódica con biopsias*, cuyo intervalo depende del grado de displasia; la displasia de alto grado se trata con terapia endoscópica. Tratar la pirosis durante años sin haber hecho nunca una endoscopia, en un paciente con evolución larga, es lo que permite que el Barrett pase desapercibido.'
      ],
      alarma:[
        'Disfagia progresiva con pérdida de peso: descarta neoplasia.',
        'Años de inhibidor de bomba sin revisión de la indicación.'
      ]
    }
  ],
  recordar:[
    'Sin alarma: tratamiento empírico, *sin endoscopia*.',
    'Alarma: *disfagia, pérdida de peso, anemia, sangrado, vómitos, edad avanzada*.',
    'Barrett = metaplasia intestinal → *vigilancia endoscópica*.'
  ],
  ref:'Guías de la American College of Gastroenterology sobre reflujo y sobre esófago de Barrett.'
},

/* ==================================================== */
'acalasia': {
  tema:'Acalasia',
  bloque:'Cirugía',
  min:3,
  idea:'Disfagia para sólidos y líquidos desde el principio: eso es motor, no obstructivo. Ese matiz resuelve el caso.',
  claves:['acalasia','disfagia','manometría','pico de pájaro','esfínter esofágico inferior'],
  sigue:'volvulo',
  secciones:[
    {
      t:'Reconocerla',
      p:[
        'La acalasia se debe a la pérdida de las neuronas inhibidoras del plexo mientérico: el esfínter esofágico inferior no se relaja y el cuerpo del esófago pierde el peristaltismo.',
        'Por eso la disfagia afecta *desde el inicio* tanto a sólidos como a líquidos, al contrario de la obstrucción mecánica, donde primero fallan los sólidos y después los líquidos. Se acompaña de regurgitación de comida no digerida, pérdida de peso y, a veces, dolor torácico.',
        'El esofagograma muestra dilatación esofágica con estrechamiento distal afilado, la imagen en *pico de pájaro*. La confirmación es la *manometría esofágica de alta resolución*. Y siempre hay que hacer endoscopia para descartar una pseudoacalasia tumoral, sobre todo en pacientes mayores con evolución corta y pérdida de peso marcada.'
      ],
      foco:[
        'Sólidos y líquidos a la vez desde el inicio = trastorno *motor*. Solo sólidos al principio = obstrucción *mecánica*.'
      ]
    }
  ],
  recordar:[
    'Disfagia a sólidos *y* líquidos desde el principio.',
    'Esofagograma en *pico de pájaro*; confirma la *manometría*.',
    'Endoscopia obligada para descartar *pseudoacalasia*.'
  ],
  ref:'Guías de la American College of Gastroenterology sobre acalasia; clasificación de Chicago.'
},

/* ==================================================== */
'volvulo': {
  tema:'Vólvulo',
  bloque:'Cirugía',
  min:4,
  idea:'El de sigmoides se destuerce por endoscopia; el de ciego se opera. Y ambos van a quirófano si hay peritonitis.',
  claves:['vólvulo','sigmoides','grano de café','descompresión endoscópica','ciego'],
  sigue:'fecaloma',
  secciones:[
    {
      t:'Dos vólvulos distintos',
      p:[
        'El *vólvulo de sigmoides* es el más frecuente. Afecta a ancianos institucionalizados con estreñimiento crónico y colon redundante, y se presenta con distensión marcada, dolor y ausencia de deposiciones y gases. La radiografía muestra la imagen clásica en *grano de café*.',
        'Si no hay peritonitis ni signos de sufrimiento intestinal, el tratamiento inicial es la *descompresión endoscópica* con rectosigmoidoscopia y sonda rectal, que resuelve el cuadro agudo. Pero la recidiva sin resección es alta, de modo que se programa la cirugía electiva en el mismo ingreso: descomprimir y dar el alta sin plan quirúrgico es lo que hace que el siguiente episodio llegue ya con necrosis.',
        'El *vólvulo cecal* aparece en pacientes más jóvenes con un ciego móvil por defecto de fijación. No es accesible a la descompresión endoscópica y habitualmente requiere cirugía, con resección o cecopexia.'
      ],
      alarma:[
        'Peritonitis, fiebre o deterioro: quirófano, no endoscopia.',
        'Descomprimir y dar el alta sin programar cirugía: recidiva.'
      ]
    }
  ],
  recordar:[
    'Sigmoides: anciano, *grano de café*, *descompresión endoscópica* y cirugía programada.',
    'Cecal: más joven, *cirugía*.',
    'Con peritonitis o necrosis: cirugía urgente en ambos.'
  ],
  ref:'Guías de la American Society of Colon and Rectal Surgeons; Schwartz, 11.ª ed.'
},

/* ==================================================== */
'fecaloma': {
  tema:'Fecaloma',
  bloque:'Cirugía',
  min:3,
  idea:'La diarrea puede ser el síntoma de un intestino obstruido por heces. El tacto rectal resuelve el diagnóstico en segundos.',
  claves:['fecaloma','impactación fecal','diarrea por rebosamiento','tacto rectal'],
  sigue:'hernias',
  secciones:[
    {
      t:'La diarrea paradójica',
      p:[
        'El fecaloma es una masa de heces endurecidas que obstruye la ampolla rectal, típicamente en el anciano encamado o con estreñimiento crónico. Por encima y alrededor se acumula contenido líquido que se filtra y sale como diarrea continua: es la *diarrea por rebosamiento* o paradójica.',
        'El error clásico es tratarla con antidiarreicos o dieta astringente, lo que agrava la impactación y puede llevar a la obstrucción o a la perforación. El *tacto rectal* es la exploración que resuelve el diagnóstico en segundos y es justamente lo que más se omite.',
        'El tratamiento es la desimpactación manual, enemas, y después un plan de prevención con fibra, hidratación, movilización y laxantes osmóticos, revisando los fármacos que estriñen —opioides, anticolinérgicos, hierro—.'
      ],
      alarma:[
        'Diarrea en un anciano estreñido: haz tacto rectal antes de dar nada.'
      ]
    }
  ],
  recordar:[
    'Diarrea continua en un estreñido = *rebosamiento*.',
    'El *tacto rectal* diagnostica.',
    'Antidiarreicos: contraindicados aquí.',
    'Después de desimpactar, prevenir.'
  ],
  ref:'Guías sobre estreñimiento crónico en el adulto mayor; Schwartz, 11.ª ed.'
},

/* ==================================================== */
'hernias': {
  tema:'Hernias',
  bloque:'Cirugía',
  min:5,
  idea:'Lo que decide la urgencia no es el tamaño sino si hay compromiso vascular. Y la femoral se opera aunque no dé síntomas.',
  claves:['hernia','inguinal','femoral','incarcerada','estrangulada','Hesselbach'],
  sigue:'trauma-de-abdomen',
  secciones:[
    {
      t:'Tipos y anatomía',
      p:[
        'La hernia inguinal *indirecta* sale por el orificio inguinal profundo, *lateral* a los vasos epigástricos inferiores, sigue el conducto inguinal y puede alcanzar el escroto; se relaciona con la persistencia del conducto peritoneovaginal y es la más frecuente a cualquier edad. La *directa* protruye *medial* a esos vasos, por el triángulo de Hesselbach, por debilidad de la pared posterior, es adquirida y propia del adulto mayor.',
        'La *femoral o crural* se sitúa por *debajo* del ligamento inguinal y medial a la vena femoral. Es más frecuente en mujeres mayores y multíparas, y su anillo es estrecho y rígido: por eso tiene una tasa alta de incarceración y estrangulación, con frecuencia como primera manifestación. Se recomienda repararla incluso cuando es asintomática, a diferencia de otras hernias.',
        'En el lactante, la *hernia umbilical* se cierra sola en la gran mayoría antes de los 4 o 5 años, y la conducta es la observación. Los vendajes, fajas y el clásico truco de la moneda no aceleran el cierre y lesionan la piel.'
      ]
    },
    {
      t:'Incarceración y estrangulación',
      p:[
        'Una hernia *incarcerada* es la que no se reduce. Se convierte en *estrangulada* cuando se compromete la irrigación del contenido, y entonces aparecen dolor desproporcionado, signos inflamatorios locales, fiebre y datos de obstrucción o de peritonitis.',
        'La estrangulación es una urgencia quirúrgica, y aquí hay un gesto que hay que evitar: *intentar reducirla manualmente*. Si se reduce un asa ya necrótica hacia el abdomen, la perforación queda dentro y el problema se hace invisible.'
      ],
      alarma:[
        'Signos inflamatorios sobre una hernia irreducible: no reducir, operar.',
        'Hernia femoral: reparar aunque sea asintomática.'
      ]
    }
  ],
  recordar:[
    'Indirecta *lateral* a los vasos epigástricos; directa *medial* (Hesselbach).',
    'Femoral: *debajo* del ligamento inguinal, alta tasa de estrangulación → operar siempre.',
    'Estrangulada: *no reducir*, quirófano.',
    'Umbilical del lactante: se cierra sola.'
  ],
  ref:'Guías de la European Hernia Society; Schwartz, 11.ª ed.'
},

/* ==================================================== */
'trauma-de-abdomen': {
  tema:'Trauma de abdomen',
  bloque:'Cirugía',
  min:5,
  idea:'La estabilidad hemodinámica decide entre el escáner y el quirófano. En el inestable con FAST positivo, la información no sirve de nada si el paciente se desangra en el traslado.',
  claves:['trauma abdominal','FAST','laparotomía','bazo','hígado'],
  sigue:'trauma-de-torax',
  secciones:[
    {
      t:'La decisión clave',
      p:[
        'Ante un traumatismo abdominal cerrado, la regla es sencilla: el paciente *estable* se estudia con tomografía con contraste, que define la lesión y permite el manejo no operatorio; el paciente *inestable* con líquido libre en el FAST va directamente a *laparotomía*.',
        'Llevar al inestable al escáner "porque da más información" es un error clásico: esa información no compensa el tiempo de traslado mientras sangra.',
        'En el trauma cerrado, los órganos más lesionados son el *bazo* y el *hígado*, por su tamaño, vascularización y fijación relativa. La lesión esplénica se asocia a fracturas costales izquierdas bajas y puede producir dolor referido al hombro izquierdo por irritación diafragmática, el signo de Kehr. En el trauma penetrante predominan las lesiones de intestino delgado e hígado.'
      ],
      foco:[
        'Estable + lesión de órgano sólido: hoy el *manejo no operatorio* con vigilancia, y embolización si hay sangrado arterial, es la estrategia habitual.',
        'Dolor en el hombro izquierdo tras un traumatismo: piensa en bazo.'
      ],
      alarma:[
        'Fractura de pelvis con inestabilidad: sangrado retroperitoneal masivo, requiere fijación y valorar embolización.',
        'La lesión de víscera hueca puede no verse al principio: la reevaluación seriada importa.'
      ]
    }
  ],
  recordar:[
    'Estable → *tomografía*. Inestable + FAST positivo → *laparotomía*.',
    'Cerrado: *bazo e hígado* son los más lesionados.',
    'Signo de *Kehr*: dolor en hombro izquierdo por sangre subdiafragmática.',
    'Órgano sólido en estable: manejo *no operatorio*.'
  ],
  ref:'ATLS, 10.ª ed.; guías de la WSES sobre trauma abdominal.'
},

/* ==================================================== */
'trauma-de-torax': {
  tema:'Trauma de tórax',
  bloque:'Cirugía',
  min:5,
  idea:'Un puñado de lesiones matan en minutos y se tratan con las manos, no con el escáner: hay que reconocerlas de memoria.',
  claves:['trauma torácico','tórax inestable','contusión pulmonar','taponamiento','Beck'],
  sigue:'neumotorax-y-hemotorax',
  secciones:[
    {
      t:'Las lesiones que matan rápido',
      p:[
        'En la evaluación primaria hay que buscar y resolver de inmediato un grupo corto de lesiones: el *neumotórax a tensión*, el *neumotórax abierto*, el *hemotórax masivo*, el *tórax inestable con contusión pulmonar* y el *taponamiento cardíaco*. Todas se diagnostican clínicamente y varias se tratan sin esperar imagen.',
        'El *taponamiento* se reconoce por la *tríada de Beck*: hipotensión, ingurgitación yugular y ruidos cardíacos apagados. Se confirma con ecografía a pie de cama y se trata con pericardiocentesis como medida temporal y, sobre todo, con toracotomía o ventana pericárdica. Su gran diferencial es el neumotórax a tensión, que comparte la hipotensión y la ingurgitación pero añade timpanismo, ausencia de murmullo vesicular y desviación traqueal: la percusión y la auscultación los separan.',
        'El *neumotórax abierto*, o herida soplante, se trata cubriendo la herida con un apósito fijado por *tres de sus cuatro lados*, que actúa como válvula unidireccional, y colocando después un tubo de tórax en otro sitio. Sellar los cuatro lados convierte el cuadro en un neumotórax a tensión.'
      ]
    },
    {
      t:'Tórax inestable y contusión pulmonar',
      p:[
        'El *tórax inestable* se produce por la fractura de tres o más costillas consecutivas en dos puntos, lo que deja un segmento sin continuidad y con movimiento paradójico: se hunde en la inspiración y protruye en la espiración.',
        'Lo llamativo es ese movimiento, pero lo que realmente determina la insuficiencia respiratoria es la *contusión pulmonar* subyacente, que altera el intercambio gaseoso y empeora en las primeras 24 a 48 horas. Por eso el tratamiento se centra en analgesia eficaz —a menudo epidural o mediante bloqueos—, fisioterapia respiratoria, oxígeno y soporte ventilatorio si es necesario, evitando la sobrecarga de líquidos.'
      ],
      alarma:[
        'Tríada de Beck: taponamiento, no esperes imagen.',
        'Apósito de tres lados en la herida soplante; nunca los cuatro.'
      ]
    }
  ],
  recordar:[
    'Letales inmediatas: *tensión, abierto, hemotórax masivo, tórax inestable, taponamiento*.',
    '*Tríada de Beck* = taponamiento; con timpanismo y tráquea desviada = tensión.',
    'Herida soplante: apósito de *tres lados*.',
    'En el tórax inestable, lo grave es la *contusión pulmonar*.'
  ],
  ref:'ATLS, 10.ª ed.'
},

/* ==================================================== */
'neumotorax-y-hemotorax': {
  tema:'Neumotórax y hemotórax',
  bloque:'Cirugía',
  min:5,
  idea:'El neumotórax a tensión se trata antes de radiografiar. Y en el hemotórax, lo que decide la toracotomía es cuánto y cuán rápido drena.',
  claves:['neumotórax','hemotórax','tubo de tórax','tensión','toracotomía'],
  sigue:'atls',
  secciones:[
    {
      t:'Neumotórax a tensión: diagnóstico clínico',
      p:[
        'El aire entra en la cavidad pleural y no puede salir: colapsa el pulmón, desplaza el mediastino y comprime las venas cavas, con lo que cae el retorno venoso y aparece un shock obstructivo. La clínica es disnea grave, hipotensión, ingurgitación yugular, ausencia de murmullo vesicular, timpanismo y desviación traqueal contralateral.',
        'Es uno de los pocos diagnósticos en los que *radiografiar antes de tratar es un error*: se descomprime de inmediato con aguja —segundo espacio intercostal en la línea medioclavicular, o quinto espacio en la línea axilar media— y a continuación se coloca un tubo de tórax. Ventilar con presión positiva sin descomprimir primero agrava la tensión de forma dramática.',
        'El neumotórax *espontáneo* es otra historia: en el primario, de varón joven y delgado, los pequeños y asintomáticos pueden manejarse de forma conservadora, y los grandes o sintomáticos requieren aspiración o drenaje.'
      ]
    },
    {
      t:'Hemotórax: los números que deciden',
      p:[
        'El hemotórax se trata inicialmente con un tubo de tórax, que es a la vez diagnóstico y terapéutico: evacúa la sangre, permite reexpandir el pulmón y, sobre todo, *cuantifica* el sangrado.',
        'Los criterios clásicos de toracotomía son un drenaje inicial superior a *1.500 mL*, o un débito mantenido de más de *200 mL por hora* durante dos a cuatro horas, o la necesidad persistente de transfusión para mantener la estabilidad. Seguir transfundiendo sin controlar el origen del sangrado solo compra tiempo.',
        'Y hay una razón para no dejar sangre en la cavidad: el hemotórax retenido evoluciona a empiema y a fibrotórax.'
      ],
      alarma:[
        'Sospecha de tensión: descomprime, no radiografíes.',
        'Débito mantenido: toracotomía, no más transfusión.'
      ]
    }
  ],
  recordar:[
    'Tensión: diagnóstico *clínico*, descompresión inmediata.',
    'No ventilar con presión positiva antes de descomprimir.',
    'Hemotórax: *>1.500 mL* iniciales o *>200 mL/h* → toracotomía.',
    'Hemotórax retenido → empiema y fibrotórax.'
  ],
  ref:'ATLS, 10.ª ed.; guías de trauma torácico.'
},

/* ==================================================== */
'atls': {
  tema:'ATLS',
  bloque:'Cirugía',
  min:5,
  idea:'Un orden fijo para no fallar bajo presión: lo que mata primero se trata primero, aunque la lesión llamativa esté en otro sitio.',
  claves:['ATLS','ABCDE','evaluación primaria','trauma','tríada letal'],
  sigue:'quemaduras',
  secciones:[
    {
      t:'La evaluación primaria',
      p:[
        'La secuencia ABCDE ordena la atención por prioridad de amenaza vital. *A*, vía aérea con protección de la columna cervical: en el traumatizado con posible lesión cervical, la apertura se hace con tracción mandibular, sin extender el cuello. *B*, ventilación: buscar y tratar el neumotórax a tensión, el abierto y el hemotórax masivo. *C*, circulación con control de hemorragias: compresión directa, torniquete si es exanguinante, dos vías de grueso calibre y reposición. *D*, déficit neurológico, con la escala de Glasgow y las pupilas. *E*, exposición completa con prevención de la hipotermia.',
        'Lo importante del orden es que cada paso se resuelve antes de avanzar. El error clásico es saltar a la lesión más aparatosa —una fractura abierta que impresiona— antes de asegurar la vía aérea.',
        'En los protocolos actuales, la hemorragia externa catastrófica se controla incluso antes de la vía aérea, porque un paciente exanguinado no se recupera aunque respire.'
      ]
    },
    {
      t:'La tríada letal y el control de daños',
      p:[
        'La *tríada letal* —hipotermia, acidosis y coagulopatía— describe un círculo vicioso: el frío altera la función de las enzimas de la coagulación y de las plaquetas; la coagulopatía perpetúa la hemorragia; y la hemorragia mantiene la hipoperfusión, que genera acidosis láctica, la cual deteriora aún más la coagulación y la contractilidad.',
        'De ahí la estrategia de *control de daños*: una cirugía abreviada que solo detiene la hemorragia y la contaminación, reanimación con hemoderivados en proporciones equilibradas, calentamiento activo, y cirugía definitiva diferida cuando el paciente se ha estabilizado. Prolongar la cirugía inicial buscando la reparación perfecta en un paciente en tríada letal es lo que lo mata.',
        'Conviene recordar además cómo se comporta el *shock hemorrágico*: la hipotensión es tardía, y lo precoz es la taquicardia con estrechamiento de la presión de pulso, sobre todo en el joven, que compensa muy bien hasta que se desploma de golpe.'
      ],
      alarma:[
        'No confiar en una presión arterial normal en un joven traumatizado.',
        'Cirugía prolongada en un paciente hipotérmico y coagulopático: control de daños.'
      ]
    }
  ],
  recordar:[
    '*A* vía aérea con cervical · *B* ventilación · *C* circulación · *D* déficit · *E* exposición.',
    'Hemorragia catastrófica: se controla antes que todo.',
    'Tríada letal: *hipotermia, acidosis, coagulopatía* → cirugía de control de daños.',
    'La hipotensión es signo *tardío* del shock hemorrágico.'
  ],
  ref:'ATLS, Soporte Vital Avanzado en Trauma, 10.ª ed.'
},

/* ==================================================== */
'quemaduras': {
  tema:'Quemaduras',
  bloque:'Cirugía',
  min:5,
  idea:'Primero la vía aérea, después el cálculo de superficie y los líquidos. Y la fórmula solo da el punto de partida: quien manda es la diuresis.',
  claves:['quemadura','Parkland','regla de los nueve','lesión inhalatoria','superficie corporal quemada'],
  sigue:'hipertension-arterial',
  secciones:[
    {
      t:'La vía aérea va primero',
      p:[
        'Antes de calcular nada, hay que valorar la *lesión por inhalación*: quemaduras faciales, vibrisas nasales chamuscadas, esputo carbonáceo, disfonía o estridor, sobre todo si el incendio fue en espacio cerrado. El edema de la vía aérea progresa durante las primeras horas y se agrava con la reanimación con líquidos, de modo que puede hacer la intubación imposible si se espera.',
        'Por eso la indicación es *intubar de forma precoz y electiva*, no cuando aparece el compromiso. Y un detalle que engaña: la saturación medida por pulsioximetría no es fiable ante intoxicación por monóxido de carbono, porque la carboxihemoglobina la sobrestima; hay que medirla directamente y administrar oxígeno al 100%.'
      ]
    },
    {
      t:'Superficie y líquidos',
      p:[
        'La *regla de los nueve* en el adulto asigna 9% a la cabeza y el cuello, 9% a cada miembro superior, 18% a cada miembro inferior, 18% al tronco anterior, 18% al posterior y 1% al periné. En el niño las proporciones cambian —la cabeza pesa más y los miembros inferiores menos—, por lo que se usan tablas de Lund y Browder. Otra referencia práctica: la palma de la mano del paciente con los dedos equivale a un 1%.',
        'Solo se contabilizan las quemaduras de *segundo grado o más profundas*: incluir las de primer grado lleva a sobrehidratar.',
        'La *fórmula de Parkland* calcula 4 mL de Ringer lactato por kilogramo y por porcentaje de superficie quemada en las primeras 24 horas, administrando la mitad en las primeras 8 horas *contadas desde el momento de la quemadura*, no desde la llegada al hospital, y el resto en las 16 siguientes. Es solo un punto de partida: el ajuste real se guía por la *diuresis*, que debe mantenerse entre 0,5 y 1 mL/kg/hora en el adulto.'
      ],
      alarma:[
        'Quemadura circunferencial en tórax o extremidad: puede requerir escarotomía urgente.',
        'La saturación normal no descarta intoxicación por monóxido de carbono.'
      ]
    }
  ],
  recordar:[
    'Signos de inhalación → *intubación precoz*.',
    'Regla de los nueve; palma del paciente = *1%*; solo desde *segundo grado*.',
    'Parkland: *4 mL × kg × %*, mitad en 8 h *desde la quemadura*.',
    'El ajuste lo manda la *diuresis*.'
  ],
  ref:'American Burn Association, guías de reanimación del quemado; ATLS, 10.ª ed.'
}

});
