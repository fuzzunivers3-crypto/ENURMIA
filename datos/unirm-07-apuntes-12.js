/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 12)
   EMBRIOLOGIA COMPLETA, escrita de nuevo. Los 13 temas de la
   materia, con claves nuevas que no colisionan con las 5 viejas
   (gametogenesis, primeras-semanas, placenta-y-anexos,
   gastrulacion, tubo-neural). De esas 5, 4 tenian un `tema` que ya
   no coincidia con el titulo actual del Temario -se dejaron tal
   cual, huerfanas del boton "Leer el tema" igual que antes-, pero
   'gametogenesis' SI coincidia exacto con el titulo actual
   ('Gametogénesis'), lo que habria tapado la version nueva y mas
   extensa: Apuntes.claveDeTema() hace `find()` y devuelve la
   PRIMERA coincidencia por orden de insercion, y ese archivo viejo
   carga antes que este. Se borra esa clave vieja mas abajo para
   que la nueva sea la unica alcanzable por ese titulo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'embrio-gametogenesis': {
  tema:'Gametogénesis',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:13,
  idea:'Antes de que exista un embrión, tienen que existir dos células muy especiales: el óvulo y el espermatozoide. Entender cómo se forman, y sobre todo por qué tienen la mitad de cromosomas de cualquier otra célula del cuerpo, es la base de todo lo que viene después en el desarrollo.',
  claves:['espermatogénesis','ovogénesis','meiosis','haploide','folículo'],
  sigue:'embrio-fecundacion-primera-semana',
  secciones:[
    {
      t:'Por qué hace falta la meiosis',
      p:[
        'Todas las células del cuerpo, salvo los gametos, son diploides: tienen 46 cromosomas, 23 pares (uno heredado de cada progenitor). Si el óvulo y el espermatozoide también fueran diploides, la fusión de ambos en la fecundación daría un cigoto con 92 cromosomas, y esa cifra se duplicaría en cada generación siguiente, algo que ningún organismo podría sostener. La meiosis resuelve este problema: es una división celular especializada que reduce el número de cromosomas a la mitad, produciendo células *haploides*, con 23 cromosomas cada una.',
        'A diferencia de la mitosis (una sola división, que produce dos células genéticamente idénticas a la original), la meiosis consiste en DOS divisiones sucesivas (meiosis I y meiosis II) a partir de una sola replicación del ADN, produciendo hasta cuatro células haploides genéticamente distintas entre sí -por el fenómeno de recombinación genética que ocurre durante la meiosis I-, lo cual es además la base biológica de la variabilidad genética entre hermanos.'
      ],
      foco:[
        'Mitosis: 1 división, 2 células idénticas, diploides. Meiosis: 2 divisiones, hasta 4 células distintas entre sí, haploides. No los confundas: son procesos con propósitos completamente distintos.'
      ]
    },
    {
      t:'Espermatogénesis: producción continua',
      p:[
        'La espermatogénesis ocurre en los túbulos seminíferos del testículo, y es un proceso que comienza en la pubertad y continúa, con distinta intensidad, durante prácticamente toda la vida adulta del hombre. Las espermatogonias (células madre diploides) se dividen por mitosis para mantenerse a sí mismas y para producir espermatocitos primarios, que entran en meiosis: la meiosis I produce dos espermatocitos secundarios haploides, y la meiosis II produce, de cada uno, dos espermátidas, que finalmente maduran (espermiogénesis) hasta convertirse en espermatozoides maduros, con su cabeza, pieza intermedia rica en mitocondrias, y flagelo.',
        'Todo el proceso, desde espermatogonia hasta espermatozoide maduro, toma aproximadamente 64 a 72 días en el ser humano, y produce, de cada espermatocito primario, cuatro espermatozoides funcionales -a diferencia de la ovogénesis, como verás enseguida, que produce solo uno.'
      ],
      foco:[
        'Espermatogénesis = producción CONTINUA, empieza en la pubertad y sigue durante toda la vida adulta, y da 4 espermatozoides por cada célula que entra en meiosis.'
      ]
    },
    {
      t:'Ovogénesis: producción limitada y detenida en el tiempo',
      p:[
        'La ovogénesis tiene una historia mucho más peculiar. Comienza en la VIDA FETAL: las ovogonias del feto femenino se multiplican por mitosis y entran en meiosis I ya antes del nacimiento, pero esa meiosis I se DETIENE en una fase específica (diplotene de la profase I) y queda suspendida así, dentro de folículos primordiales, durante años -en algunos casos, décadas-, hasta que ese folículo en particular sea reclutado en un ciclo menstrual futuro.',
        'Solo entonces, justo antes de la ovulación, ese ovocito primario retenido completa la meiosis I, produciendo un ovocito secundario (que recibe casi todo el citoplasma) y un primer cuerpo polar (pequeño, casi sin citoplasma, que degenera). El ovocito secundario queda a su vez detenido en la meiosis II, y solo la COMPLETA si es fecundado por un espermatozoide; si no hay fecundación, el ovocito se pierde con la menstruación sin haber terminado la meiosis.'
      ],
      foco:[
        'Ovogénesis = empieza antes del nacimiento, queda detenida DÉCADAS en meiosis I, y solo termina la meiosis II si hay fecundación. Produce, de cada ovogonia, un solo óvulo funcional (el resto se pierde como cuerpos polares).'
      ]
    },
    {
      t:'Por qué esta diferencia importa clínicamente',
      p:[
        'Que los ovocitos queden detenidos en profase I durante tanto tiempo -a veces más de 40 años, si se considera la edad materna avanzada- es precisamente uno de los factores que explica por qué el riesgo de no disyunción cromosómica (errores en el reparto de cromosomas durante la meiosis, causa de trisomías como el síndrome de Down) aumenta con la edad materna: cuanto más tiempo pasa un ovocito detenido, más tiempo tienen sus estructuras de división para deteriorarse.',
        'En cambio, como la espermatogénesis es un proceso continuo y relativamente rápido (64-72 días) que se renueva constantemente, el efecto de la edad paterna sobre el riesgo de aneuploidías es mucho menor, aunque la edad paterna avanzada sí se asocia con otro tipo de riesgo: mutaciones puntuales nuevas (de novo) acumuladas por las muchas rondas de replicación del ADN a lo largo de los años.'
      ],
      foco:[
        '*Consideración clínica*: el riesgo de trisomías (como el síndrome de Down) aumenta marcadamente con la edad MATERNA, precisamente por el tiempo que los ovocitos permanecen detenidos en meiosis I. Es una de las razones por las que se ofrece cribado genético prenatal con mayor énfasis a partir de los 35 años.'
      ]
    }
  ],
  ref:'Moore, Embriología clínica, cap. 1-2. Langman, Embriología médica.'
},

'embrio-fecundacion-primera-semana': {
  tema:'Fecundación y primera semana',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:14,
  idea:'La fecundación no es solo "un espermatozoide llega a un óvulo": es una secuencia de eventos moleculares muy precisos que aseguran que solo UN espermatozoide entre, y que ese momento dispare todo el programa de desarrollo. La primera semana que sigue es puro viaje y multiplicación celular, sin que el embrión todavía se implante en ningún sitio.',
  claves:['fecundación','cigoto','mórula','blastocisto','zona pelúcida'],
  sigue:'embrio-segunda-semana-implantacion',
  secciones:[
    {
      t:'Dónde y cómo ocurre la fecundación',
      p:[
        'La fecundación ocurre normalmente en la ampolla de la trompa uterina (trompa de Falopio), la porción más ancha del tercio lateral de la trompa, dentro de las 24 horas siguientes a la ovulación (el óvulo, una vez liberado, solo es fecundable durante ese margen relativamente corto). El espermatozoide, para poder fecundar, primero tiene que pasar por la capacitación (cambios bioquímicos en su membrana que ocurren dentro del tracto reproductor femenino) y luego atravesar la corona radiada y la *zona pelúcida*, la envoltura glicoproteica que rodea al óvulo.',
        'Al atravesar la zona pelúcida mediante la reacción acrosómica (liberación de enzimas desde el acrosoma de la cabeza del espermatozoide), el primer espermatozoide que logra entrar dispara la reacción cortical: cambios en la zona pelúcida que la vuelven impenetrable para cualquier otro espermatozoide. Este mecanismo de bloqueo es crucial, porque evita la POLIESPERMIA -la entrada de más de un espermatozoide-, que si ocurriera daría un cigoto con un número anormal de cromosomas, incompatible con un desarrollo normal.'
      ],
      foco:[
        'La reacción cortical es el mecanismo que garantiza monospermia (un solo espermatozoide entra). Sin ella, la poliespermia produciría un cigoto no viable.'
      ]
    },
    {
      t:'El cigoto y las primeras divisiones',
      p:[
        'Una vez que el espermatozoide entra, sus núcleos (pronúcleo masculino) y el del óvulo (pronúcleo femenino) se fusionan, restaurando el número diploide de 46 cromosomas: esta célula única resultante es el *cigoto*, genéticamente distinto de ambos progenitores y, en principio, capaz de dar origen a un individuo completo.',
        'El cigoto empieza a dividirse por mitosis mientras es transportado por la trompa hacia el útero, en un proceso llamado segmentación: cada división produce células cada vez más pequeñas (blastómeros), sin que el tamaño total del embrión aumente todavía, porque la zona pelúcida que lo envuelve limita su crecimiento. Hacia el tercer día, el embrión tiene entre 12 y 16 células y adopta el nombre de *mórula* (por su parecido a una mora), aún dentro de la zona pelúcida.'
      ],
      foco:[
        'Segmentación = las células se dividen pero el embrión NO crece de tamaño total, porque va contenido dentro de la misma zona pelúcida original.'
      ]
    },
    {
      t:'De mórula a blastocisto',
      p:[
        'Alrededor del cuarto o quinto día, mientras la mórula llega al útero, empieza a formarse una cavidad llena de líquido en su interior (la cavidad blastocística), y el embrión se reorganiza en dos poblaciones celulares distintas: el *trofoblasto*, una capa externa de células que rodeará la cavidad y que dará origen a la placenta y las membranas fetales, y el *embrioblasto* (o masa celular interna), un grupo de células agrupado hacia un polo, que dará origen al embrión propiamente dicho. A esta estructura se le llama *blastocisto*.',
        'Poco después, el blastocisto "eclosiona" (hatching): rompe y se libera de la zona pelúcida, quedando listo para implantarse en el endometrio. Esta distinción trofoblasto/embrioblasto, establecida ya en esta primera semana, es la primera gran diferenciación celular del desarrollo humano, y todo lo que sigue -desde la placenta hasta cada órgano del cuerpo- se origina de una de estas dos líneas.'
      ],
      foco:[
        'Trofoblasto = va a formar la PLACENTA y anexos. Embrioblasto (masa celular interna) = va a formar el EMBRIÓN. Esta separación ocurre ya en la primera semana, antes de que exista implantación alguna.'
      ]
    },
    {
      t:'Por qué la primera semana importa clínicamente',
      p:[
        'Durante toda esta primera semana el embrión viaja libremente por la trompa y luego por la cavidad uterina, sin ningún contacto de implantación con el endometrio materno. Esto tiene una consecuencia clínica importante: si el embrión se implanta fuera del útero -más frecuentemente en la propia trompa, por un tránsito anormalmente lento o por obstrucción tubárica- se produce un embarazo ectópico, una urgencia obstétrica potencialmente grave, porque la trompa no tiene la capacidad de expandirse ni la vascularización adecuada para sostener un embarazo en crecimiento y puede romperse.',
        'Entender el trayecto normal (ampolla tubárica → trompa → cavidad uterina, todo en unos 5-6 días) es lo que permite comprender por qué cualquier factor que retrase ese tránsito (cicatrices tubáricas por infección previa, por ejemplo) aumenta el riesgo de que la implantación ocurra en un sitio anormal.'
      ],
      foco:[
        '*Consideración clínica*: el embarazo ectópico tubárico es la complicación más frecuente y grave relacionada con un tránsito anormal del embrión durante esta primera semana; el antecedente de infección pélvica o cirugía tubárica previa es un factor de riesgo clásico.'
      ]
    }
  ],
  ref:'Moore, Embriología clínica, cap. 3. Langman, Embriología médica.'
},

'embrio-segunda-semana-implantacion': {
  tema:'Segunda semana: implantación',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:13,
  idea:'La segunda semana se recuerda con la regla nemotécnica "de los dos": el disco embrionario tiene dos capas, el trofoblasto se divide en dos, y aparecen dos cavidades nuevas. Memorizar esa estructura de "todo por parejas" ayuda mucho a no perderse en el detalle.',
  claves:['implantación','sincitiotrofoblasto','citotrofoblasto','disco bilaminar','hCG'],
  sigue:'embrio-gastrulacion',
  secciones:[
    {
      t:'El proceso de implantación',
      p:[
        'La implantación es el proceso por el cual el blastocisto se ancla y penetra en el endometrio materno, y ocurre aproximadamente entre el sexto y el décimo día tras la fecundación, con el embrioblasto orientado hacia el endometrio (polo de implantación). El endometrio, en esta fase del ciclo, está en fase secretora, preparado hormonalmente (por acción de la progesterona) para recibir al blastocisto.',
        'El trofoblasto, en contacto con el endometrio, se diferencia en dos capas: el *citotrofoblasto*, una capa interna de células individuales bien definidas, con capacidad mitótica activa, y el *sincitiotrofoblasto*, una capa externa formada por la fusión de células (de ahí "sincitio": sin límites celulares individuales claros), altamente invasiva, que erosiona el tejido endometrial y los vasos sanguíneos maternos para permitir que el embrión se ancle firmemente.'
      ],
      foco:[
        'Citotrofoblasto = células individuales, se dividen (la "fábrica"). Sincitiotrofoblasto = células fusionadas, invaden (el "taladro" que perfora el endometrio).'
      ]
    },
    {
      t:'La hormona que confirma el embarazo: hCG',
      p:[
        'El sincitiotrofoblasto, además de su función invasiva, comienza a producir gonadotropina coriónica humana (hCG), una hormona con estructura similar a la LH que mantiene activo el cuerpo lúteo del ovario -evitando que este degenere, como ocurriría normalmente si no hubiera embarazo, y asegurando así que el cuerpo lúteo siga produciendo progesterona, indispensable para mantener el endometrio receptivo-.',
        'La hCG es, precisamente, la hormona que detectan las pruebas de embarazo (en orina o en sangre), y su producción comienza justo en este momento de la implantación, lo que explica por qué una prueba de embarazo da resultados fiables solo a partir de que la implantación ya ocurrió (alrededor de la fecha esperada de la siguiente menstruación), y no antes.'
      ],
      foco:[
        'Sin hCG, no hay señal para mantener el cuerpo lúteo, cae la progesterona, y el endometrio se desprendería (menstruación) llevándose consigo al embrión implantado. La hCG es literalmente la señal hormonal que "avisa" al cuerpo materno de que hay un embarazo en curso.'
      ]
    },
    {
      t:'El disco embrionario bilaminar',
      p:[
        'Mientras el trofoblasto se ocupa de la implantación, el embrioblasto también se reorganiza, formando un disco embrionario BILAMINAR: dos capas de células adosadas entre sí, el epiblasto (una capa de células cilíndricas altas, hacia el lado amniótico) y el hipoblasto (una capa de células cúbicas más pequeñas, hacia el lado de la futura cavidad del saco vitelino).',
        'Casi al mismo tiempo aparecen dos cavidades: la cavidad amniótica, que se forma justo por encima del epiblasto (y que con el tiempo envolverá por completo al embrión en desarrollo, llena de líquido amniótico), y el saco vitelino primitivo, que se forma por debajo del hipoblasto. El disco bilaminar, situado entre estas dos cavidades, es la estructura de la cual, en la semana siguiente, surgirán las tres capas germinales definitivas.'
      ],
      foco:[
        'Disco BIlaminar (dos capas: epiblasto + hipoblasto) es el estado de la semana 2. En la semana 3 (gastrulación) se convertirá en disco TRIlaminar. Nunca confundas en qué semana estás cuando te pregunten sobre el número de capas.'
      ]
    }
  ],
  ref:'Moore, Embriología clínica, cap. 4. Langman, Embriología médica.'
},

'embrio-gastrulacion': {
  tema:'Tercera semana: gastrulación',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:15,
  idea:'La gastrulación es, según se suele decir en embriología, "el evento más importante de toda la vida": es el momento en que el embrión deja de ser un disco de dos capas simples y se convierte en una estructura de tres capas, cada una de las cuales dará origen a órganos y tejidos completamente distintos. Todo lo que aprenderás después en histología y anatomía se puede rastrear hasta una de estas tres capas.',
  claves:['gastrulación','línea primitiva','ectodermo','mesodermo','endodermo','notocorda'],
  sigue:'embrio-organogenesis',
  secciones:[
    {
      t:'La línea primitiva: el organizador del proceso',
      p:[
        'La gastrulación comienza con la aparición de la línea primitiva, un engrosamiento lineal que se forma en la superficie del epiblasto, en la línea media, hacia la porción caudal del disco embrionario. En el extremo craneal de la línea primitiva hay un engrosamiento especial, el nódulo primitivo (o nódulo de Hensen), que actúa como centro organizador de todo el proceso.',
        'Las células del epiblasto migran hacia la línea primitiva, se invaginan a través de ella (un movimiento celular llamado ingresión), y se deslizan entre el epiblasto y el hipoblasto, desplazando progresivamente a este último. Este movimiento coordinado de migración celular es, literalmente, lo que define a la gastrulación: la formación de nuevas capas germinales mediante el desplazamiento organizado de células desde una capa preexistente.'
      ],
      foco:[
        'La línea primitiva establece además el primer eje de simetría del embrión: define claramente qué extremo es craneal y cuál caudal, y cuál lado es derecho y cuál izquierdo, algo que antes de la gastrulación no estaba fijado.'
      ]
    },
    {
      t:'Las tres capas germinales',
      p:[
        'De la migración celular a través de la línea primitiva surgen las tres capas germinales definitivas, que sustituyen por completo al antiguo hipoblasto y epiblasto. El *ectodermo* queda como la capa más externa (las células del epiblasto que NO migraron a través de la línea primitiva). El *endodermo* se forma por las primeras células que migran, desplazando al hipoblasto original y quedando como la capa más interna. El *mesodermo* se forma por las células que migran después, quedando como capa intermedia, entre ectodermo y endodermo.',
        'Cada una de estas tres capas tiene un destino específico que se mantiene constante durante el resto del desarrollo: del ectodermo se origina el sistema nervioso completo, la epidermis y sus anexos (pelo, uñas, glándulas). Del mesodermo se originan el sistema musculoesquelético, el sistema cardiovascular, la sangre, los riñones y el sistema reproductor, entre otros. Del endodermo se originan el revestimiento epitelial del tubo digestivo y respiratorio, y glándulas asociadas como el hígado y el páncreas.'
      ],
      foco:[
        'Ectodermo → piel y sistema nervioso ("lo de afuera y lo que piensa"). Mesodermo → músculo, hueso, corazón, sangre, riñón ("lo de en medio, lo que se mueve y bombea"). Endodermo → revestimiento del tubo digestivo/respiratorio y sus glándulas ("lo de adentro, el tubo").'
      ]
    },
    {
      t:'La notocorda: el eje que organiza todo lo demás',
      p:[
        'Del nódulo primitivo, un grupo de células migra hacia adelante (en dirección craneal) formando una varilla celular a lo largo de la línea media, entre el ectodermo y el endodermo: la *notocorda*. Aunque la notocorda en sí misma no persiste como estructura funcional en el adulto (queda reducida a los núcleos pulposos de los discos intervertebrales, el mismo núcleo pulposo que estudiaste en anatomía de columna), su función durante el desarrollo es crucial: actúa como centro señalizador, induciendo al ectodermo que tiene justo encima a diferenciarse en tubo neural (el precursor de todo el sistema nervioso central).',
        'La notocorda define además el eje longitudinal del cuerpo y sirve de referencia para la posterior formación de las vértebras, que se desarrollan a ambos lados de ella. Es un ejemplo clásico, y muy usado para explicar el concepto en clase, de cómo una estructura transitoria puede organizar el desarrollo de estructuras permanentes sin persistir ella misma.'
      ],
      foco:[
        '*Consideración clínica*: el núcleo pulposo del disco intervertebral (el que ya estudiaste en columna vertebral, en Anatomía I) es, embriológicamente, el remanente de la notocorda. Es una de las conexiones más citadas entre embriología y anatomía del adulto.'
      ]
    },
    {
      t:'Por qué esta semana es tan vulnerable',
      p:[
        'La gastrulación establece, de una sola vez, los tres linajes celulares fundamentales y el eje corporal completo. Precisamente por eso, cualquier alteración grave durante esta semana tiende a ser incompatible con un desarrollo posterior normal, y muchos embarazos que fallan muy tempranamente (antes de que la mujer siquiera sepa que está embarazada) lo hacen por errores durante la gastrulación.',
        'Al mismo tiempo, esta es también la semana en la que, si algo sale mal pero el embrión sobrevive, suelen originarse las alteraciones más graves de eje y patrón corporal (como la disrafia caudal o alteraciones de la lateralidad izquierda-derecha), porque es precisamente en esta ventana cuando esos patrones se establecen por primera vez.'
      ],
      foco:[
        'Regla general de todo el bloque de organogénesis que sigue: cuanto más temprano y más "fundacional" es el evento del desarrollo, más grave (o más letal) tiende a ser su alteración.'
      ]
    }
  ],
  ref:'Moore, Embriología clínica, cap. 5. Langman, Embriología médica.'
},

'embrio-organogenesis': {
  tema:'Cuarta a octava semana: organogénesis',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:15,
  idea:'Este es el periodo más denso e importante de todo el desarrollo prenatal desde el punto de vista clínico: en apenas cinco semanas, el disco plano de tres capas se pliega, se curva, y forma los esbozos reconocibles de prácticamente todos los órganos del cuerpo. Es también, por eso mismo, el periodo de mayor riesgo ante cualquier agresión externa.',
  claves:['organogénesis','somita','plegamiento','periodo crítico','teratógeno'],
  sigue:'embrio-sistema-nervioso',
  secciones:[
    {
      t:'El plegamiento del embrión',
      p:[
        'Hasta la tercera semana, el embrión es básicamente un disco plano. Durante la cuarta semana, ocurre el plegamiento embrionario: el disco se curva sobre sí mismo tanto en sentido longitudinal (formando un pliegue cefálico y uno caudal) como en sentido transversal (formando pliegues laterales que se acercan entre sí en la línea media ventral), convirtiendo al embrión de una lámina plana en una estructura tridimensional, cilíndrica, similar ya en forma general a un feto en miniatura.',
        'Este plegamiento tiene una consecuencia práctica muy concreta: incorpora dentro del propio cuerpo del embrión una porción del saco vitelino, que se convierte así en el intestino primitivo (dividido en intestino anterior, medio y posterior), y deja al resto del saco vitelino conectado al embrión solo a través de un tallo estrecho, precursor de una parte del cordón umbilical.'
      ],
      foco:[
        'Antes del plegamiento: disco plano. Después del plegamiento (fin de la 4ª semana): forma cilíndrica reconocible, con el intestino primitivo ya "adentro" del cuerpo.'
      ]
    },
    {
      t:'Los somitas: los bloques de construcción segmentados',
      p:[
        'A ambos lados de la notocorda y del tubo neural en formación, el mesodermo se organiza en bloques segmentados y pares llamados *somitas*, que aparecen de forma progresiva en dirección céfalo-caudal a lo largo de la cuarta y quinta semana, hasta llegar a un total de 42-44 pares. Cada somita se diferencia después en tres componentes: el esclerotomo (que dará origen a las vértebras y costillas), el miotomo (que dará origen a la musculatura esquelética) y el dermatomo (que dará origen a la dermis de la piel del tronco).',
        'El número de somitas presentes en un momento dado es, de hecho, uno de los criterios que se usan para estimar con precisión la edad embrionaria en las primeras semanas, de forma parecida a como los anillos de un árbol indican su edad, precisamente porque aparecen de forma predecible y secuencial.'
      ],
      foco:[
        'El "miotomo" del somita embrionario es la raíz de la palabra "miotoma" que ya estudiaste en Anatomía I (el territorio muscular de una raíz nerviosa): ambos conceptos están relacionados porque los nervios espinales se distribuyen siguiendo la segmentación original de los somitas.'
      ]
    },
    {
      t:'El concepto de periodo crítico',
      p:[
        'La organogénesis, entre la cuarta y la octava semana, es el llamado "periodo crítico" u "organogenético" del desarrollo: es cuando cada órgano forma su esbozo inicial y su patrón básico, y es también el periodo de MÁXIMA vulnerabilidad a los *teratógenos* (agentes externos -fármacos, infecciones, radiación, tóxicos- capaces de causar malformaciones). Antes de este periodo (durante las primeras tres semanas), el principio biológico dominante es "todo o nada": un daño grave tiende a causar la pérdida del embarazo, más que una malformación específica, porque todavía no hay órganos diferenciados que dañar de forma selectiva.',
        'Después de la octava semana (periodo fetal), los órganos ya están formados en su patrón básico y lo que ocurre principalmente es crecimiento y maduración funcional; los teratógenos en esta etapa tardía tienden a causar problemas de crecimiento o alteraciones funcionales más que malformaciones estructurales mayores. Por eso el intervalo de la cuarta a la octava semana concentra el riesgo más alto de malformaciones estructurales mayores.'
      ],
      foco:[
        '*Consideración clínica*: el periodo de mayor riesgo teratogénico (semanas 4 a 8) coincide, en la práctica, con las semanas en que muchas mujeres todavía no saben con certeza que están embarazadas -otra razón por la que se recomienda evitar sustancias teratogénicas conocidas (alcohol, ciertos fármacos, tabaco) desde que se busca el embarazo, no solo después de confirmarlo.'
      ]
    },
    {
      t:'Cada órgano tiene su propia ventana de riesgo',
      p:[
        'Dentro del periodo organogenético general, cada sistema de órganos tiene su propia ventana temporal específica de mayor sensibilidad, que corresponde al momento exacto en que ESE órgano en particular está formando su patrón básico. El corazón, por ejemplo, es especialmente vulnerable entre la 3ª y la 6ª semana (cuando se tabica); el sistema nervioso central mantiene una ventana de vulnerabilidad más prolongada, que se extiende más allá de la organogénesis; los miembros son especialmente sensibles entre la 4ª y la 6ª semana (el caso histórico de la talidomida, que causaba focomelia, ilustra justo esta ventana).',
        'Esto significa que el mismo teratógeno, administrado en momentos distintos del embarazo, puede producir malformaciones completamente distintas -o ninguna-, dependiendo de qué órgano esté formando su patrón básico justo en ese momento. Es un concepto que se retomará con mucho más detalle en el estudio de cada sistema por separado, en los temas que siguen.'
      ],
      foco:[
        'No existe "el momento de riesgo" único para todo el embarazo: cada órgano tiene su propia ventana, y por eso la misma exposición puede dañar a un órgano y no a otro, según la semana exacta.'
      ]
    }
  ],
  ref:'Moore, Embriología clínica, cap. 6. Langman, Embriología médica.'
},

'embrio-sistema-nervioso': {
  tema:'Desarrollo del sistema nervioso',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:15,
  idea:'El sistema nervioso es el primer sistema de órganos que empieza a formarse, ya desde la tercera semana, y su desarrollo temprano es también el que da origen a los defectos congénitos más frecuentes y más graves de todo el desarrollo prenatal: los defectos del tubo neural.',
  claves:['tubo neural','cresta neural','neuroporo','espina bífida','anencefalia'],
  sigue:'embrio-placenta-anexos',
  secciones:[
    {
      t:'La neurulación: del disco plano al tubo',
      p:[
        'Como ya viste en el tema de gastrulación, la notocorda induce a la porción de ectodermo que tiene justo encima a engrosarse y diferenciarse en la placa neural. Durante la neurulación (que comienza hacia el final de la tercera semana), los bordes laterales de la placa neural se elevan formando los pliegues neurales, que se van acercando entre sí en la línea media hasta fusionarse, convirtiendo la placa plana en un tubo hueco: el *tubo neural*, precursor de todo el sistema nervioso central (encéfalo y médula espinal).',
        'Esta fusión no ocurre de una sola vez en toda su longitud: comienza en la región media del embrión y avanza tanto en dirección craneal como caudal, dejando temporalmente dos aberturas en los extremos, los neuroporos craneal y caudal, que se cierran normalmente hacia el día 25 y el día 27-28 respectivamente.'
      ],
      foco:[
        'El cierre del tubo neural NO es simultáneo en toda su extensión: empieza en el medio y avanza hacia ambos extremos, como el cierre de una cremallera desde el centro hacia afuera.'
      ]
    },
    {
      t:'La cresta neural: una población celular migratoria excepcional',
      p:[
        'Justo en el borde entre el tubo neural que se está cerrando y el ectodermo superficial que queda por fuera, se desprende una población celular especial: la *cresta neural*. Estas células, a diferencia de la mayoría de las células embrionarias que permanecen relativamente fijas en su lugar de origen, migran extensamente por todo el embrión y dan origen a una lista sorprendentemente diversa de estructuras: los ganglios sensitivos y autónomos del sistema nervioso periférico, las células de Schwann, las células cromafines de la médula suprarrenal, los melanocitos de la piel, y buena parte del esqueleto y tejido conectivo de la cara.',
        'Por esta enorme diversidad de destinos, a la cresta neural a veces se le llama informalmente "la cuarta capa germinal", aunque técnicamente deriva del ectodermo. Su carácter migratorio la hace también vulnerable a alteraciones que afecten específicamente la migración celular, dando origen a un grupo de enfermedades conocidas como "neurocristopatías".'
      ],
      foco:[
        'La cresta neural forma estructuras aparentemente muy distintas entre sí (nervios periféricos, melanocitos de la piel, médula suprarrenal, huesos de la cara): la conexión entre todas ellas es que todas derivan de esta misma población celular migratoria.'
      ]
    },
    {
      t:'Defectos del cierre del tubo neural',
      p:[
        'Cuando el neuroporo caudal no logra cerrarse correctamente, el resultado es un defecto del tubo neural en la región espinal: la *espina bífida*, que puede variar desde formas leves y asintomáticas (espina bífida oculta, donde solo hay un defecto óseo vertebral sin protrusión de tejido nervioso) hasta formas graves con protrusión de las meninges (meningocele) o de las meninges junto con la médula espinal (mielomeningocele), que suelen asociarse a déficits neurológicos importantes de por vida.',
        'Cuando es el neuroporo craneal el que no logra cerrarse, el resultado es mucho más grave: la *anencefalia*, la ausencia de la bóveda craneal y de gran parte del encéfalo, una condición incompatible con la vida más allá de un periodo muy corto tras el nacimiento (cuando el embarazo llega a término).'
      ],
      foco:[
        'Neuroporo CAUDAL sin cerrar → espina bífida (región espinal, variable en gravedad). Neuroporo CRANEAL sin cerrar → anencefalia (mucho más grave, incompatible con la vida).'
      ]
    },
    {
      t:'Prevención: el ácido fólico',
      p:[
        'La evidencia epidemiológica y experimental es contundente: la suplementación con ácido fólico (vitamina B9) antes de la concepción y durante las primeras semanas del embarazo reduce de forma muy significativa el riesgo de defectos del tubo neural. Esto se debe a que el folato es un cofactor esencial en la síntesis de ADN y en reacciones de metilación necesarias para la proliferación celular rápida que ocurre durante el cierre del tubo neural.',
        'Por esta razón, se recomienda que toda mujer en edad fértil que esté planeando un embarazo (o que no use un método anticonceptivo eficaz) tome ácido fólico de forma rutinaria, IDEALMENTE desde antes de la concepción, precisamente porque el cierre del tubo neural ocurre en la 3ª-4ª semana, un momento en que muchas mujeres todavía no saben que están embarazadas -el mismo argumento que ya viste en el tema de organogénesis, aplicado aquí a un caso muy concreto y con una intervención preventiva comprobada.'
      ],
      foco:[
        '*Consideración clínica*: el ácido fólico periconcepcional es una de las intervenciones preventivas más costo-efectivas de toda la medicina prenatal. Se recomienda EMPEZAR antes del embarazo, no al confirmarlo, porque para entonces el tubo neural ya se está cerrando o ya se cerró.'
      ]
    }
  ],
  ref:'Moore, Embriología clínica, cap. 17 (sistema nervioso). Langman, Embriología médica.'
},

'embrio-placenta-anexos': {
  tema:'Anexos embrionarios y placenta',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:14,
  idea:'El embrión no se desarrolla solo: necesita un soporte extraembrionario completo -membranas, líquido, y sobre todo una interfase con la circulación materna- para nutrirse, respirar y protegerse durante los nueve meses. Todas estas estructuras se descartan al nacer (de ahí "anexos"), pero sin ellas no hay desarrollo posible.',
  claves:['placenta','amnios','cordón umbilical','saco vitelino','corion'],
  sigue:'embrio-malformaciones-frecuentes',
  secciones:[
    {
      t:'El amnios y el líquido amniótico',
      p:[
        'El amnios es una membrana delgada que rodea por completo la cavidad amniótica, llena de líquido amniótico, dentro de la cual flota el embrión (y después el feto) durante todo el embarazo. El líquido amniótico cumple varias funciones: amortigua al feto frente a traumatismos externos, le permite moverse libremente (necesario para el desarrollo normal de músculos y articulaciones), mantiene una temperatura estable, y evita que estructuras en desarrollo (como los miembros) se adhieran entre sí o a las paredes amnióticas.',
        'A medida que el embrión crece y el plegamiento embrionario avanza, el amnios se expande hasta rodear también el tallo de conexión, que junto con la porción incorporada del saco vitelino, forma el cordón umbilical.'
      ],
      foco:[
        '*Consideración clínica*: alteraciones en la cantidad de líquido amniótico (oligohidramnios, muy poco líquido, u polihidramnios, demasiado) suelen ser un signo indirecto de problemas subyacentes: el oligohidramnios se asocia con frecuencia a problemas renales fetales (porque buena parte del líquido amniótico en etapas avanzadas del embarazo es orina fetal), y el polihidramnios con problemas que impiden que el feto trague el líquido con normalidad, como ciertas obstrucciones digestivas altas.'
      ]
    },
    {
      t:'El saco vitelino: pequeño pero clave',
      p:[
        'El saco vitelino, aunque en el ser humano no cumple la función nutritiva que tiene en otras especies (como las aves, donde la yema del huevo es literalmente el saco vitelino cargado de nutrientes), conserva funciones biológicas cruciales en las primeras semanas: es el sitio donde aparecen las primeras células sanguíneas y los primeros vasos sanguíneos del embrión (hematopoyesis primitiva), y es también el lugar de origen de las células germinales primordiales, que después migrarán hacia las gónadas en desarrollo para convertirse, con el tiempo, en las futuras espermatogonias u ovogonias.',
        'Con el avance del desarrollo, el saco vitelino se reduce progresivamente de tamaño y queda como una estructura vestigial, sin función relevante en el feto a término.'
      ],
      foco:[
        'El saco vitelino, pese a su nombre poco protagónico, es el origen embrionario tanto de las primeras células sanguíneas COMO de las células que después formarán los óvulos o espermatozoides del futuro individuo -una doble función que sorprende a muchos estudiantes.'
      ]
    },
    {
      t:'El corion y la formación de la placenta',
      p:[
        'El corion es la membrana más externa, formada por el trofoblasto (citotrofoblasto + sincitiotrofoblasto) junto con el mesodermo extraembrionario que lo tapiza por dentro. De su superficie surgen las vellosidades coriónicas, proyecciones digitiformes que se introducen en el endometrio materno y que constituyen la unidad estructural y funcional básica de la *placenta*: el órgano de intercambio entre la circulación materna y la fetal.',
        'La placenta cumple múltiples funciones esenciales: intercambio de gases (oxígeno y dióxido de carbono, por difusión simple), transferencia de nutrientes desde la madre y eliminación de productos de desecho del feto, producción de hormonas (como la ya conocida hCG, y más adelante en el embarazo, progesterona y estrógenos en cantidades crecientes), y una barrera inmunológica parcial que protege al feto -que es, en términos inmunológicos, un injerto semi-alogénico, con la mitad de sus antígenos provenientes del padre- de ser rechazado por el sistema inmune materno.'
      ],
      foco:[
        'La sangre materna y la sangre fetal NUNCA se mezclan directamente en una placenta normal: el intercambio ocurre a través de las membranas de las vellosidades coriónicas, que actúan como una barrera selectiva. Es un concepto que conviene fijar bien porque se malinterpreta con frecuencia.'
      ]
    }
  ],
  ref:'Moore, Embriología clínica, cap. 7. Langman, Embriología médica.'
},

'embrio-malformaciones-frecuentes': {
  tema:'Malformaciones congénitas frecuentes',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:14,
  idea:'Las malformaciones congénitas más frecuentes no son un catálogo aislado de "cosas que salen mal": cada una se puede explicar directamente a partir de qué evento normal del desarrollo, en qué semana exacta, falló. Aprenderlas así -conectadas a la embriología normal- es mucho más fácil que memorizarlas como una lista suelta.',
  claves:['malformación','ácido fólico','labio hendido','onfalocele','gastrosquisis'],
  sigue:'embrio-sistema-cardiovascular',
  secciones:[
    {
      t:'Labio y paladar hendido',
      p:[
        'La formación de la cara implica la fusión de varios procesos (prominencias) faciales durante la cuarta a octava semana: el labio superior se forma por la fusión de las prominencias nasales mediales con las prominencias maxilares a cada lado; el paladar se forma por la fusión del paladar primario (derivado de las prominencias nasales mediales) con el paladar secundario (dos crecimientos horizontales que parten de las prominencias maxilares y se fusionan en la línea media).',
        'Cuando estas fusiones no ocurren completamente, resulta en labio hendido (fisura labial, uni o bilateral, si falla la fusión de la prominencia maxilar con la nasal medial de ese lado) o en paladar hendido (si falla la fusión de los dos paladares secundarios, o de estos con el paladar primario), que pueden presentarse juntos o por separado. Es una de las malformaciones congénitas más frecuentes en general, con una combinación de factores genéticos y ambientales (incluido el tabaquismo materno) en su origen.'
      ],
      foco:[
        'Labio hendido y paladar hendido pueden ocurrir juntos o por separado, porque derivan de procesos de fusión relacionados pero distintos: no asumas que siempre van de la mano.'
      ]
    },
    {
      t:'Defectos de la pared abdominal: onfalocele y gastrosquisis',
      p:[
        'Durante el desarrollo normal, el intestino primitivo medio crece tan rápido entre la sexta y la décima semana que no cabe dentro de la cavidad abdominal todavía pequeña del embrión, así que se hernia fisiológicamente hacia el cordón umbilical (hernia umbilical fisiológica), para después regresar y rotar dentro del abdomen hacia la décima semana. Cuando este retorno normal no ocurre, el resultado es un *onfalocele*: las vísceras permanecen fuera del abdomen, en la base del cordón umbilical, cubiertas por una membrana (peritoneo y amnios).',
        'La *gastrosquisis* es distinta en su origen: es un defecto de la pared abdominal, generalmente a la derecha del ombligo (no en el propio cordón umbilical), por el que las vísceras protruyen directamente hacia afuera, SIN ninguna membrana que las cubra, expuestas directamente al líquido amniótico. Esta diferencia -presencia o ausencia de membrana cubriente, y la localización respecto al cordón- es clave para distinguirlas clínicamente y también refleja mecanismos embriológicos distintos.'
      ],
      foco:[
        'Onfalocele: EN el cordón umbilical, CON membrana cubriente (fallo del retorno del intestino medio). Gastrosquisis: AL LADO del ombligo, SIN membrana (defecto directo de la pared abdominal).'
      ]
    },
    {
      t:'El papel protector del ácido fólico, más allá del tubo neural',
      p:[
        'Aunque el ácido fólico se asocia sobre todo a la prevención de defectos del tubo neural (como viste en el tema anterior), la evidencia también sugiere un papel protector, aunque menos marcado, frente a otras malformaciones que comparten el mismo periodo crítico de proliferación celular rápida, incluidos algunos defectos cardíacos congénitos y, en menor medida, el labio y paladar hendido.',
        'Esto refuerza la idea general de que la suplementación periconcepcional con ácido fólico no es una medida "solo para el sistema nervioso", sino una intervención preventiva de espectro más amplio durante el periodo organogenético más vulnerable del desarrollo.'
      ],
      foco:[
        '*Consideración clínica*: aunque el ácido fólico es más conocido por prevenir defectos del tubo neural, su beneficio preventivo se extiende, con menor magnitud de evidencia, a otras malformaciones del mismo periodo crítico.'
      ]
    }
  ],
  ref:'Moore, Embriología clínica, cap. 9 y 16. Langman, Embriología médica.'
},

'embrio-sistema-cardiovascular': {
  tema:'Desarrollo del sistema cardiovascular',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:15,
  idea:'El corazón es el primer órgano funcional del embrión: empieza a latir hacia el día 22, mucho antes de que la mayoría de los demás órganos siquiera hayan comenzado a formarse, porque el embrión en rápido crecimiento necesita muy pronto un sistema de transporte que le lleve nutrientes y oxígeno más allá de lo que la simple difusión puede alcanzar.',
  claves:['tubo cardíaco','tabicación cardíaca','foramen oval','conducto arterioso'],
  sigue:'embrio-aparato-digestivo',
  secciones:[
    {
      t:'Del tubo cardíaco al corazón tabicado',
      p:[
        'El corazón se origina de una estructura muy simple: dos tubos endocárdicos que se fusionan en la línea media, formando un único tubo cardíaco primitivo que empieza a contraerse de forma peristáltica y rítmica hacia el día 22. Este tubo se pliega y se curva sobre sí mismo (asa cardíaca) durante la cuarta semana, adoptando ya una disposición espacial que anticipa la forma del corazón definitivo.',
        'A partir de este tubo curvado, mediante un proceso complejo de tabicación (formación de tabiques que dividen las cavidades), se forman las cuatro cámaras del corazón definitivo -dos aurículas y dos ventrículos- junto con las válvulas que las separan y los grandes vasos que emergen de él. Todo este proceso de tabicación ocurre principalmente entre la 4ª y la 6ª semana, la ventana de máximo riesgo para las cardiopatías congénitas.'
      ],
      foco:[
        'El corazón es el PRIMER órgano funcional del embrión, latiendo desde el día 22, mucho antes de que estén formados la mayoría de los demás sistemas.'
      ]
    },
    {
      t:'La circulación fetal: tres cortocircuitos clave',
      p:[
        'Como los pulmones del feto no funcionan (no hay intercambio de aire, están llenos de líquido), la circulación fetal necesita evitar, en gran medida, que la sangre pase por la circulación pulmonar, y lo logra mediante tres estructuras de cortocircuito (shunt) que desvían el flujo. El *foramen oval* es una abertura entre las dos aurículas que permite que buena parte de la sangre oxigenada que llega de la placenta pase directamente de la aurícula derecha a la izquierda, evitando el ventrículo derecho y los pulmones.',
        'El *conducto arterioso* conecta la arteria pulmonar directamente con la aorta, desviando hacia la circulación sistémica la sangre que sí llega al ventrículo derecho, sin que tenga que pasar por los pulmones aún no funcionales. Y el conducto venoso, un tercer cortocircuito, permite que la sangre oxigenada que llega por la vena umbilical evite en buena parte el paso obligado por el hígado, llegando más directamente a la vena cava inferior.'
      ],
      foco:[
        'Tres cortocircuitos de la circulación fetal: foramen oval (entre aurículas), conducto arterioso (arteria pulmonar-aorta) y conducto venoso (vena umbilical-cava inferior). Los tres existen por la misma razón: los pulmones fetales no funcionan todavía.'
      ]
    },
    {
      t:'El cambio al nacer: de circulación fetal a circulación adulta',
      p:[
        'Al nacer, con la primera respiración, los pulmones se expanden y la resistencia vascular pulmonar cae de forma abrupta, mientras que al cortar el cordón umbilical desaparece la circulación placentaria de baja resistencia. Estos dos cambios de presión, casi simultáneos, invierten el gradiente de presión entre las aurículas, lo que empuja mecánicamente al foramen oval a cerrarse (funcionalmente en minutos u horas, anatómicamente en semanas o meses, quedando como una cicatriz llamada fosa oval).',
        'El conducto arterioso se cierra también, primero de forma funcional (por contracción de su músculo liso, sensible al aumento de oxígeno sanguíneo tras la primera respiración) y después anatómica, quedando como el ligamento arterioso. Si estos cierres normales no ocurren -persistencia del conducto arterioso, o comunicación interauricular por un foramen oval que no cierra bien- resultan en dos de las cardiopatías congénitas más frecuentes, ambas potencialmente corregibles según su magnitud.'
      ],
      foco:[
        '*Consideración clínica*: el cierre de estas estructuras fetales depende directamente del cambio de presiones al nacer (primera respiración + corte del cordón). En un recién nacido prematuro o con hipoxia, estos cierres pueden retrasarse o fallar, con consecuencias clínicas relevantes.'
      ]
    }
  ],
  ref:'Moore, Embriología clínica, cap. 13 (sistema cardiovascular). Langman, Embriología médica.'
},

'embrio-aparato-digestivo': {
  tema:'Desarrollo del aparato digestivo',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:14,
  idea:'Todo el tubo digestivo -de la boca al ano, junto con el hígado y el páncreas- deriva de una sola estructura tubular simple, el intestino primitivo, que se forma cuando el plegamiento embrionario incorpora una porción del saco vitelino dentro del cuerpo. Entenderlo como un solo tubo que se subdivide y rota es mucho más fácil que memorizar cada órgano por separado.',
  claves:['intestino primitivo','rotación intestinal','hernia umbilical fisiológica','páncreas embrionario'],
  sigue:'embrio-aparato-genitourinario',
  secciones:[
    {
      t:'Las tres porciones del intestino primitivo',
      p:[
        'Cuando el plegamiento embrionario incorpora parte del saco vitelino, se forma un tubo continuo, el intestino primitivo, dividido en tres porciones según su origen vascular e inervación (un dato muy usado en clínica y en examen): el intestino anterior (irrigado por el tronco celíaco) da origen al esófago, estómago, duodeno proximal, hígado y páncreas; el intestino medio (irrigado por la arteria mesentérica superior) da origen desde el duodeno distal hasta los dos tercios proximales del colon transverso; y el intestino posterior (irrigado por la arteria mesentérica inferior) da origen desde el tercio distal del colon transverso hasta la parte superior del canal anal.',
        'Esta correspondencia entre porción embrionaria e irrigación arterial definitiva no es casual: es precisamente la razón por la que, en el adulto, esas mismas tres arterias (tronco celíaco, mesentérica superior, mesentérica inferior) irrigan justo esos mismos territorios, un dato que conecta directamente este tema con lo que estudiarás en anatomía del abdomen más adelante.'
      ],
      foco:[
        'Intestino ANTERIOR → tronco celíaco. Intestino MEDIO → mesentérica superior. Intestino POSTERIOR → mesentérica inferior. Esta correspondencia se mantiene igual en el adulto y es un dato de examen muy frecuente.'
      ]
    },
    {
      t:'La hernia umbilical fisiológica y la rotación intestinal',
      p:[
        'Durante la sexta semana, el intestino medio crece tan rápidamente que no cabe dentro de la cavidad abdominal, todavía pequeña y ocupada en gran parte por el hígado en rápido desarrollo. Por eso se hernia hacia afuera, dentro del cordón umbilical: la hernia umbilical fisiológica, un evento completamente normal (no confundir con el onfalocele patológico, donde ese retorno no ocurre).',
        'Mientras está herniado, el intestino medio gira 90° en sentido antihorario alrededor del eje de la arteria mesentérica superior. Hacia la décima semana, cuando la cavidad abdominal ya ha crecido lo suficiente (y el hígado relativamente ha reducido su proporción del volumen abdominal), el intestino regresa a la cavidad abdominal, completando durante ese retorno un giro adicional de 180° (270° en total desde el inicio), lo que explica la posición final, aparentemente compleja, del colon en el adulto: por ejemplo, por qué el colon transverso cruza por delante del duodeno, o por qué el apéndice cecal puede terminar en posiciones variables.'
      ],
      foco:[
        'Rotación total del intestino medio: 270° en sentido antihorario (90° mientras está herniado + 180° adicionales al regresar a la cavidad abdominal). Si este proceso falla parcialmente, resultan anomalías de rotación intestinal, algunas con relevancia quirúrgica.'
      ]
    },
    {
      t:'Hígado y páncreas: brotes del intestino anterior',
      p:[
        'Tanto el hígado como el páncreas se originan como evaginaciones (brotes) del endodermo del intestino anterior, cerca de la unión con el intestino medio, en la región que dará origen al duodeno. El hígado se desarrolla a partir del brote hepático, que crece hacia el mesenterio ventral y se convierte en el órgano metabólico más grande del cuerpo, conectado al intestino a través de la vía biliar.',
        'El páncreas, de forma particular, se forma a partir de DOS brotes independientes -un brote pancreático dorsal y uno ventral-, que durante la rotación del duodeno terminan fusionándose en un solo órgano. Esta doble formación explica por qué, ocasionalmente, ambos brotes no se fusionan del todo, dando origen a un páncreas anular (una variante anatómica en la que tejido pancreático rodea completamente al duodeno, pudiendo obstruirlo).'
      ],
      foco:[
        'El páncreas es el único de estos dos órganos que se forma de DOS brotes distintos (dorsal + ventral) que después se fusionan; el hígado se forma de un solo brote. Esa diferencia explica por qué solo el páncreas tiene esta variante anatómica de origen doble.'
      ]
    }
  ],
  ref:'Moore, Embriología clínica, cap. 11 (aparato digestivo). Langman, Embriología médica.'
},

'embrio-aparato-genitourinario': {
  tema:'Desarrollo del aparato genitourinario',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:15,
  idea:'El aparato urinario y el aparato genital comparten un origen embriológico común y se desarrollan de forma entrelazada durante buena parte del embarazo, lo que explica por qué muchas malformaciones congénitas afectan a ambos sistemas a la vez, y por qué su estudio conjunto, aunque parezca confuso al principio, tiene una lógica de fondo muy clara.',
  claves:['pronefros','mesonefros','metanefros','conducto de Wolff','conducto de Müller'],
  sigue:'embrio-miembros',
  secciones:[
    {
      t:'Tres riñones sucesivos: pronefros, mesonefros, metanefros',
      p:[
        'El riñón definitivo no se forma de una sola vez: pasa por tres etapas sucesivas, cada una más avanzada que la anterior, en dirección craneocaudal. El *pronefros* es la primera y más rudimentaria, aparece en la región cervical durante la cuarta semana, y regresiona rápidamente sin llegar a ser funcional en el ser humano -es un vestigio evolutivo, funcional en peces y anfibios, pero no en mamíferos-.',
        'El *mesonefros*, en la región torácica y lumbar alta, sí llega a ser transitoriamente funcional, produciendo orina en cantidades pequeñas durante la primera mitad del embarazo, antes de que el riñón definitivo tome el relevo, y regresiona después casi por completo -excepto por su conducto excretor, el conducto mesonéfrico (o conducto de Wolff), que persiste con un destino muy distinto en el varón, como verás enseguida-. El *metanefros*, que aparece en la región sacra hacia la quinta semana, es el que da origen al riñón definitivo, y asciende progresivamente durante el desarrollo hasta alcanzar su posición final en el abdomen superior (un "ascenso" que, si se altera, puede dejar un riñón en posición pélvica baja, el riñón pélvico).'
      ],
      foco:[
        'Pro-meso-metanefros, en ese orden, de craneal a caudal y de más rudimentario a más avanzado. Solo el metanefros da origen al riñón definitivo; los dos anteriores son transitorios (o directamente no funcionales, en el caso del pronefros).'
      ]
    },
    {
      t:'Los dos conductos genitales primitivos',
      p:[
        'Independientemente del riñón, el embrión (de ambos sexos) desarrolla inicialmente DOS pares de conductos genitales: el conducto mesonéfrico (de Wolff), el mismo que ya mencionaste asociado al mesonefros, y el conducto paramesonéfrico (de Müller), que se forma un poco después, paralelo al anterior. En esta etapa temprana, el embrión es sexualmente indiferenciado: tiene ambos sistemas de conductos, con el potencial de desarrollarse en cualquiera de las dos direcciones.',
        'La diferenciación sexual, que ocurre a partir de la 7ª semana aproximadamente, depende de la presencia o ausencia del cromosoma Y (concretamente del gen SRY) y de las hormonas testiculares que este desencadena: en presencia de testosterona y de la hormona antimülleriana (producida por el testículo fetal), el conducto de Wolff se desarrolla (formando el epidídimo, el conducto deferente y las vesículas seminales) y el conducto de Müller regresiona. En ausencia de estas hormonas (patrón por defecto, independientemente del sexo cromosómico), el conducto de Müller se desarrolla (formando las trompas uterinas, el útero y la porción superior de la vagina) y el conducto de Wolff regresiona.'
      ],
      foco:[
        'De Wolff (mesonéfrico) → varón: epidídimo, conducto deferente, vesículas seminales. De Müller (paramesonéfrico) → mujer: trompas, útero, porción superior de vagina. El desarrollo femenino es, en cierto sentido, el "patrón por defecto" del organismo: ocurre en ausencia de las señales hormonales testiculares, no requiere una señal activa propia tan determinante como la del SRY masculino.'
      ]
    },
    {
      t:'Por qué las malformaciones suelen ser combinadas',
      p:[
        'Como el conducto mesonéfrico participa tanto en el desarrollo del sistema urinario (siendo, en parte, el origen embriológico del uréter, que surge como una yema de este conducto) como en el desarrollo del sistema genital masculino, una alteración en su desarrollo puede afectar simultáneamente a ambos sistemas. Es exactamente esa relación embriológica compartida la que explica por qué, en la práctica clínica, la detección de una malformación en un sistema (por ejemplo, la ausencia de un riñón) motiva de forma rutinaria la evaluación del otro sistema relacionado.'
      ],
      foco:[
        '*Consideración clínica*: por el origen embriológico compartido entre los sistemas urinario y genital, ante una malformación renal congénita detectada (por ejemplo, agenesia renal unilateral) es práctica clínica habitual evaluar también el aparato genital, por el riesgo aumentado de anomalías asociadas.'
      ]
    }
  ],
  ref:'Moore, Embriología clínica, cap. 12 (aparato urogenital). Langman, Embriología médica.'
},

'embrio-miembros': {
  tema:'Desarrollo de los miembros',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:13,
  idea:'Los miembros aparecen relativamente tarde en el desarrollo (a partir de la cuarta semana) pero se forman con una precisión y velocidad notables, guiados por una estructura muy pequeña -la cresta ectodérmica apical- cuya alteración, incluso breve, puede detener por completo el crecimiento del miembro en ese punto exacto.',
  claves:['yema del miembro','cresta ectodérmica apical','ectrodactilia','focomelia'],
  sigue:'embrio-gemelaridad',
  secciones:[
    {
      t:'La yema del miembro y su motor de crecimiento',
      p:[
        'Los miembros se originan como pequeñas evaginaciones de la pared corporal del embrión, llamadas yemas de los miembros, que aparecen primero en el miembro superior (hacia el día 26-27) y poco después en el miembro inferior. Cada yema está formada por un núcleo de mesodermo (que dará origen a huesos, músculos y tejido conectivo del miembro) cubierto por una capa de ectodermo.',
        'En el borde distal de cada yema, el ectodermo se engrosa formando la cresta ectodérmica apical (CEA), una estructura crucial que actúa como centro señalizador, manteniendo al mesodermo subyacente en un estado de proliferación activa y dirigiendo el crecimiento del miembro en sentido próximo-distal: primero se forman las estructuras más proximales (hombro/cadera), y progresivamente, a medida que la yema se alarga, las más distales (mano/pie).'
      ],
      foco:[
        'El orden de formación de un miembro sigue siempre la misma dirección: proximal primero, distal después (hombro antes que la mano; cadera antes que el pie), dirigido por la cresta ectodérmica apical en el extremo de la yema.'
      ]
    },
    {
      t:'La talidomida: el caso que cambió la historia de la teratología',
      p:[
        'Si la cresta ectodérmica apical se daña o se pierde durante la ventana crítica del desarrollo del miembro (aproximadamente entre la 4ª y la 6ª semana), el crecimiento del miembro se detiene en ese punto exacto del proceso próximo-distal, dando origen a distintos grados de reducción de la extremidad. El ejemplo histórico más citado es el de la talidomida, un fármaco usado en los años 50 y 60 como sedante y para las náuseas del embarazo, que resultó ser un potente teratógeno para los miembros: causaba *focomelia* (ausencia o acortamiento severo de los segmentos proximales del miembro, quedando las manos o pies unidos casi directamente al tronco) cuando se tomaba durante esa ventana crítica exacta.',
        'Este episodio, ocurrido antes de que existieran los sistemas modernos de regulación y vigilancia farmacológica, es una de las razones históricas por las que hoy en día todo fármaco nuevo debe pasar por rigurosas pruebas de teratogenicidad antes de aprobarse para su uso, especialmente en mujeres en edad fértil.'
      ],
      foco:[
        '*Consideración clínica*: el caso de la talidomida es el ejemplo histórico obligado de teratogenicidad en toda la medicina, y la razón directa por la que existen hoy las categorías de riesgo en el embarazo (A, B, C, D, X) para clasificar fármacos según su seguridad durante la gestación.'
      ]
    },
    {
      t:'Ectrodactilia y otras malformaciones de los dedos',
      p:[
        'Además de las reducciones proximales como la focomelia, existen malformaciones más distales y localizadas de los miembros. La *ectrodactilia* es la ausencia congénita de uno o más dedos (o de la porción central de la mano o pie), dando a veces la apariencia característica de "mano hendida" o "pie hendido" (en forma de pinza de cangrejo). Otras alteraciones frecuentes incluyen la sindactilia (dedos fusionados, por falta de la muerte celular programada -apoptosis- que normalmente separa los dedos individuales durante el desarrollo) y la polidactilia (dedos supernumerarios).',
        'Estas malformaciones digitales, en general, tienen un pronóstico funcional mucho mejor que las reducciones proximales graves como la focomelia, y muchas son corregibles quirúrgicamente, precisamente porque afectan estructuras más distales y localizadas, sin comprometer la arquitectura general del miembro.'
      ],
      foco:[
        'La sindactilia (dedos pegados) ocurre por fallo de la apoptosis normal que separa los dedos; recuerda que la muerte celular programada NO es siempre patológica: en el desarrollo normal, es un mecanismo activo y necesario para esculpir la forma final de estructuras como la mano.'
      ]
    }
  ],
  ref:'Moore, Embriología clínica, cap. 15 (sistema esquelético/miembros). Langman, Embriología médica.'
},

'embrio-gemelaridad': {
  tema:'Gemelaridad y placentación múltiple',
  bloque:'Embriología', programa:'unirm', cuatri:7, min:13,
  idea:'No todos los embarazos gemelares son iguales por dentro: el momento exacto en que un embrión único se divide en dos determina cuántas placentas y cuántos sacos amnióticos tendrán los gemelos, y ese dato tiene consecuencias médicas muy concretas durante todo el embarazo.',
  claves:['gemelos monocigóticos','gemelos dicigóticos','placenta monocorial','placenta bicorial'],
  sigue:'estructura-bacteriana-tincion-gram',
  secciones:[
    {
      t:'Dos orígenes completamente distintos',
      p:[
        'Los gemelos *dicigóticos* (fraternos o "no idénticos") se originan de dos óvulos distintos, fecundados por dos espermatozoides distintos, en el mismo ciclo. Genéticamente, son tan parecidos entre sí como cualquier par de hermanos nacidos en momentos distintos -comparten en promedio el 50% de su material genético-, y siempre tienen placentas y sacos amnióticos completamente separados, porque desde el inicio fueron dos embriones independientes.',
        'Los gemelos *monocigóticos* (idénticos) se originan de un solo óvulo fecundado por un solo espermatozoide (un solo cigoto), que en algún momento del desarrollo temprano se divide en dos embriones genéticamente idénticos. A diferencia de los dicigóticos, la estructura placentaria de los monocigóticos depende por completo de EN QUÉ MOMENTO ocurrió esa división -es la parte que más se pregunta en examen, y la más útil clínicamente.'
      ],
      foco:[
        'Dicigóticos: siempre dos placentas y dos sacos separados (bicoriales, biamnióticos), sin excepción. Monocigóticos: la estructura placentaria VARÍA según el momento de la división del cigoto original.'
      ]
    },
    {
      t:'El momento de la división lo determina todo',
      p:[
        'Si la división del cigoto ocurre muy temprano, antes del día 4 (antes de que el trofoblasto se haya diferenciado), cada embrión formará su propio corion y su propio amnios: resultará en gemelos monocigóticos con placentas separadas (o placentas fusionadas pero con dos coriones distintos), bicoriales y biamnióticos -en la práctica, muy parecidos estructuralmente a los dicigóticos, aunque genéticamente idénticos-.',
        'Si la división ocurre entre los días 4 y 8 (después de que el trofoblasto ya se diferenció pero antes de que se forme el amnios), ambos embriones compartirán un mismo corion (una sola placenta) pero cada uno tendrá su propio amnios: monocoriales, biamnióticos -el patrón más frecuente entre los gemelos monocigóticos-. Si la división ocurre entre los días 8 y 12 (después de que también se formó el amnios), ambos embriones compartirán tanto el corion como el amnios: monocoriales, monoamnióticos, un patrón poco frecuente pero de alto riesgo. Y si la división ocurre después del día 12 -ya muy tarde, cuando el disco embrionario está prácticamente formado- la separación suele ser incompleta, dando origen a gemelos unidos (siameses).'
      ],
      foco:[
        'Cuanto MÁS TARDE ocurre la división del cigoto, MENOS estructuras separadas tendrán los gemelos (comparten más placenta y más amnios), y MAYOR es el riesgo de complicaciones -hasta llegar, en el extremo más tardío, a los gemelos unidos.'
      ]
    },
    {
      t:'Por qué esto importa en el seguimiento del embarazo',
      p:[
        'Determinar por ecografía, idealmente en el primer trimestre, si un embarazo gemelar es monocorial o bicorial es una de las decisiones más importantes de todo el seguimiento obstétrico de un embarazo múltiple, porque el riesgo de complicaciones es marcadamente distinto entre ambos tipos. En los embarazos monocoriales, al compartir una sola placenta, existe el riesgo del síndrome de transfusión feto-fetal: conexiones vasculares anómalas dentro de la placenta compartida pueden hacer que un gemelo (el "donante") transfiera sangre de forma desproporcionada al otro (el "receptor"), llevando a complicaciones graves para ambos si no se detecta y trata a tiempo -una complicación que, por definición, NO puede ocurrir en un embarazo bicorial, donde cada gemelo tiene su propia circulación placentaria completamente independiente.',
        'Por esta razón, un embarazo gemelar monocorial requiere un seguimiento ecográfico mucho más frecuente y estrecho que uno bicorial, precisamente por este riesgo vascular compartido que solo existe cuando hay una sola placenta para dos fetos.'
      ],
      foco:[
        '*Consideración clínica*: el síndrome de transfusión feto-fetal es una complicación EXCLUSIVA de embarazos monocoriales (placenta compartida). Es la razón principal por la que determinar la corionicidad temprano en un embarazo gemelar cambia por completo el plan de seguimiento.'
      ]
    }
  ],
  ref:'Moore, Embriología clínica, cap. 7 (gemelaridad). Langman, Embriología médica.'
}

});

/* Ver el comentario del encabezado: esta clave vieja compartia el mismo
   `tema` exacto ('Gametogénesis') que 'embrio-gametogenesis' de arriba, y
   por cargar antes en app.html habria ganado el enlace "Leer el tema" con
   su version corta. Se borra para que solo quede la nueva. */
delete window.APUNTES['gametogenesis'];
