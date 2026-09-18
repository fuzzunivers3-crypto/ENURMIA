/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 5)
   Termina de cubrir NEUROANATOMIA por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'medula-espinal-vias-largas': {
  tema:'Médula espinal: organización y vías largas',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:8,
  idea:'La médula espinal es, literalmente, un cable de comunicación entre el cerebro y el resto del cuerpo, y las vías que la atraviesan tienen una propiedad clave para localizar una lesión: cada una cruza de lado en un punto distinto, y en un lado distinto del cuerpo.',
  claves:['haz corticoespinal','haz espinotalámico','cordones posteriores','decusación'],
  sigue:'tronco-encefalico-pares-craneales',
  secciones:[
    {
      t:'Sustancia gris en el centro, vías largas alrededor',
      p:[
        'Como ya se vio en el tema de organización general, la médula espinal tiene la sustancia gris en el centro (con forma de mariposa, donde ocurren los reflejos espinales ya vistos en Fisiología I) rodeada de sustancia blanca, organizada en cordones que contienen las vías largas ascendentes (sensitivas, hacia el cerebro) y descendentes (motoras, desde el cerebro).',
        'El *haz corticoespinal* es la vía motora principal: lleva la orden de movimiento voluntario desde la corteza cerebral hasta las neuronas motoras de la médula, que a su vez activan al músculo (retomando la unidad motora ya vista en Fisiología I).'
      ]
    },
    {
      t:'Dos vías sensitivas, con puntos de cruce distintos',
      p:[
        'El *haz espinotalámico* transporta la sensación de dolor y temperatura; sus fibras CRUZAN al lado opuesto casi de inmediato, apenas uno o dos niveles después de entrar a la médula. Los *cordones posteriores* transportan la sensación de tacto fino, vibración y propiocepción (la posición del cuerpo en el espacio); estas fibras NO cruzan en la médula: suben por el mismo lado hasta llegar al bulbo raquídeo, donde recién ahí cruzan.',
        'Esta *decusación* (cruce de lado) en puntos distintos para cada vía tiene una consecuencia clínica muy usada para localizar lesiones: una lesión medular que daña un solo lado de la médula (síndrome de hemisección medular) produce pérdida de dolor y temperatura del lado CONTRARIO a la lesión (porque esas fibras ya habían cruzado antes de llegar a ese punto), pero pérdida de tacto fino y propiocepción del MISMO lado que la lesión (porque esas fibras todavía no habían cruzado).'
      ],
      foco:[
        'Este patrón de déficit sensitivo "cruzado" (un tipo de sensación perdida de un lado, otro tipo perdida del lado contrario) es, en la práctica, una de las formas más elegantes de localizar con precisión una lesión medular lateral, sin necesitar todavía ningún estudio de imagen.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 5.'
},

'tronco-encefalico-pares-craneales': {
  tema:'Tronco encefálico y pares craneales',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:7,
  idea:'El tronco encefálico es un cuello de botella anatómico: casi todo lo que sube o baja entre el cerebro y el cuerpo pasa por ahí, y además alberga los núcleos de la mayoría de los pares craneales — por eso una lesión pequeña en este punto puede tener consecuencias desproporcionadamente graves.',
  claves:['bulbo raquídeo','protuberancia','mesencéfalo','núcleo de par craneal'],
  sigue:'cerebelo',
  secciones:[
    {
      t:'Tres segmentos, de abajo hacia arriba',
      p:[
        'El tronco encefálico se divide en tres partes, en continuidad directa con la médula espinal por abajo y con el resto del cerebro por arriba. El *bulbo raquídeo*, el más bajo, contiene centros vitales como el centro respiratorio (ya visto en Fisiología II) y el centro cardiovascular, además de ser el punto donde cruzan (decusan) las fibras del haz corticoespinal ya visto. La *protuberancia* (puente), en el medio, conecta con el cerebelo y contiene núcleos de varios pares craneales. El *mesencéfalo*, el más alto, conecta el tronco con el resto del cerebro y contiene centros relacionados con el control motor y los reflejos visuales.'
      ]
    },
    {
      t:'Por qué aquí viven la mayoría de los pares craneales',
      p:[
        'La mayoría de los *núcleos de par craneal* (los grupos de cuerpos neuronales de origen o de destino de cada par craneal, ya vistos en Anatomía II) se ubican dentro del tronco encefálico, distribuidos entre sus tres segmentos según cuál par craneal corresponda —por ejemplo, los núcleos relacionados con el movimiento ocular están más arriba, en el mesencéfalo, mientras que los relacionados con la deglución y la función cardiorrespiratoria están más abajo, en el bulbo.',
        'Esta concentración de funciones vitales y de pares craneales en un espacio anatómico relativamente pequeño explica por qué una lesión en el tronco encefálico (un ictus, un tumor) puede producir una combinación característica de síntomas: déficit de uno o varios pares craneales del lado de la lesión, junto con déficit motor o sensitivo del lado CONTRARIO del cuerpo (porque las vías largas ya vistas atraviesan este mismo nivel) —un patrón llamado síndrome alterno o cruzado, muy útil para localizar una lesión de tronco con precisión.'
      ],
      foco:[
        'Consideración clínica: por la concentración de centros vitales (respiratorio, cardiovascular) en el bulbo raquídeo, una lesión ahí, aunque sea pequeña, tiene un potencial de gravedad desproporcionado comparado con una lesión del mismo tamaño en otras partes del cerebro.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 7.'
},

'cerebelo': {
  tema:'Cerebelo',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:6,
  idea:'El cerebelo no inicia el movimiento: lo ajusta. Por eso sus lesiones no producen parálisis, sino movimientos torpes, mal coordinados y mal calibrados, como si la orden de moverse llegara sin su corrector de puntería habitual.',
  claves:['cerebelo','ataxia','dismetría','coordinación motora'],
  sigue:'ganglios-basales-control-motor',
  secciones:[
    {
      t:'Un coordinador, no un iniciador del movimiento',
      p:[
        'El *cerebelo*, ubicado por detrás del tronco encefálico y conectado a él, recibe información constante sobre la posición del cuerpo (propiocepción, ya vista en los cordones posteriores) y sobre las órdenes motoras que la corteza cerebral está enviando (a través de conexiones con el haz corticoespinal), comparando ambas para ajustar el movimiento en tiempo real: corrige la fuerza, la dirección y el momento exacto de la contracción muscular, asegurando que el movimiento sea suave, preciso y bien calibrado. No inicia el movimiento por sí mismo: eso lo hace la corteza motora, ya vista en el sistema corticoespinal.'
      ]
    },
    {
      t:'Las consecuencias de una lesión cerebelosa',
      p:[
        'Una lesión del cerebelo no produce debilidad (el músculo sigue recibiendo su orden de contraerse con normalidad): produce *ataxia*, una falta de coordinación del movimiento voluntario, con marcha inestable y tambaleante, como si la persona estuviera intoxicada. La *dismetría* es un signo específico de esta falta de coordinación: al intentar tocar un objetivo (por ejemplo, llevar el dedo hasta la nariz), el movimiento se pasa de largo o se queda corto, porque falta el ajuste fino que normalmente aporta el cerebelo.'
      ],
      foco:[
        'Distinción clave: una lesión de la vía motora (corticoespinal) produce debilidad; una lesión cerebelosa produce descoordinación SIN debilidad —dos cuadros clínicos muy distintos que comparten la palabra "movimiento anormal" pero que apuntan a estructuras completamente diferentes.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 8.'
},

'ganglios-basales-control-motor': {
  tema:'Ganglios basales y control motor',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:7,
  idea:'Los ganglios basales tienen, en esencia, la función opuesta y complementaria a la del cerebelo: no ajustan la precisión del movimiento en marcha, sino que regulan si un movimiento debe iniciarse o suprimirse, actuando como un filtro que decide qué órdenes motoras se dejan pasar.',
  claves:['ganglios basales','sustancia negra','vía dopaminérgica','movimiento involuntario'],
  sigue:'talamo-hipotalamo',
  secciones:[
    {
      t:'Un circuito que facilita o inhibe el movimiento',
      p:[
        'Los *ganglios basales* son un grupo de núcleos profundos del cerebro (no del tronco encefálico) que forman un circuito con la corteza motora, participando en iniciar movimientos deseados y suprimir movimientos no deseados. Uno de sus componentes, la *sustancia negra* (ubicada en el mesencéfalo, ya vista en el tronco encefálico), produce dopamina y la envía a otras estructuras del circuito a través de la *vía dopaminérgica*, una señal necesaria para que el circuito funcione de forma equilibrada.'
      ]
    },
    {
      t:'Cuando el circuito se desequilibra',
      p:[
        'Cuando la sustancia negra pierde progresivamente sus neuronas dopaminérgicas, el circuito de los ganglios basales pierde su equilibrio hacia el lado de la INHIBICIÓN del movimiento, produciendo el cuadro clásico de la enfermedad de Parkinson: lentitud de movimiento, rigidez muscular y temblor característico en reposo —el circuito, sin suficiente dopamina, frena más de lo debido el inicio y la ejecución del movimiento voluntario.',
        'Otras enfermedades de los ganglios basales producen el efecto contrario: *movimiento involuntario* excesivo (como en la enfermedad de Huntington, ya mencionada en Genética Médica por su mecanismo de expansión de repeticiones), cuando el circuito pierde su capacidad de SUPRIMIR movimientos no deseados.'
      ],
      foco:[
        'Este tema conecta directamente con Genética Médica (Huntington) y con Farmacología (los fármacos dopaminérgicos usados en el Parkinson actúan, precisamente, reponiendo la señal que la sustancia negra dejó de producir).'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 11.'
},

'talamo-hipotalamo': {
  tema:'Tálamo e hipotálamo',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:7,
  idea:'Estas dos estructuras, vecinas entre sí y con nombres muy parecidos, tienen funciones casi opuestas: una es la estación de relevo de casi toda la información sensitiva que sube hacia la conciencia; la otra es el centro de control que mantiene, sin que lo pienses, el equilibrio interno del cuerpo.',
  claves:['tálamo','hipotálamo','relevo sensitivo','homeostasis'],
  sigue:'corteza-cerebral-areas-funcionales',
  secciones:[
    {
      t:'El tálamo: la puerta de entrada hacia la corteza',
      p:[
        'El *tálamo* es la principal estación de *relevo sensitivo* del cerebro: prácticamente toda la información sensitiva que sube hacia la corteza cerebral (con la notable excepción del olfato) hace sinapsis en el tálamo antes de continuar hacia su destino cortical final. No es una simple parada de tránsito pasiva: el tálamo también filtra y modula qué información sensitiva se enfatiza o se atenúa antes de llegar a la conciencia, participando activamente en procesos como la atención.'
      ]
    },
    {
      t:'El hipotálamo: el centro de control homeostático',
      p:[
        'El *hipotálamo*, justo debajo del tálamo, es el centro regulador de la *homeostasis* (ya vista de forma general en Fisiología I): controla la temperatura corporal (ya visto en detalle en Fisiología I), el hambre y la saciedad, la sed, los ritmos circadianos de sueño y vigilia, y —a través del eje hipotálamo-hipófisis ya visto en Fisiología II— buena parte del sistema endocrino completo. También es el punto de integración entre el sistema nervioso y el sistema nervioso autónomo, coordinando respuestas simpáticas y parasimpáticas (ya vistas) según las necesidades del cuerpo en cada momento.'
      ],
      foco:[
        'Aunque son vecinos anatómicos y su nombre se parece, el tálamo procesa información CONSCIENTE que va hacia la corteza; el hipotálamo regula funciones en gran parte INCONSCIENTES y automáticas del cuerpo. Confundirlos por el nombre parecido es un error frecuente al empezar a estudiar el tema.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 10.'
},

'corteza-cerebral-areas-funcionales': {
  tema:'Corteza cerebral: áreas funcionales',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:8,
  idea:'La corteza cerebral no funciona como una masa uniforme donde "todo se procesa en todas partes": tiene áreas especializadas y bien localizadas, y el caso clásico de dos pacientes con lesiones en dos áreas del lenguaje distintas, con problemas de lenguaje completamente distintos entre sí, es la mejor prueba histórica de esa especialización.',
  claves:['área de Broca','área de Wernicke','corteza motora','corteza somatosensorial'],
  sigue:'irrigacion-cerebral',
  secciones:[
    {
      t:'Corteza motora y somatosensorial: mapas del cuerpo',
      p:[
        'La *corteza motora* (en el lóbulo frontal) es el origen del haz corticoespinal ya visto, y está organizada como un mapa del cuerpo (homúnculo motor): distintas regiones de esta corteza controlan distintas partes del cuerpo, con una representación desproporcionadamente grande para las partes capaces de movimientos finos (la mano, la cara). La *corteza somatosensorial* (en el lóbulo parietal, justo detrás de la motora) recibe la información sensitiva que llegó primero al tálamo, también organizada como un mapa del cuerpo, con la misma desproporción a favor de las zonas con mayor densidad de receptores sensitivos.'
      ]
    },
    {
      t:'Las dos áreas clásicas del lenguaje',
      p:[
        'El *área de Broca*, en el lóbulo frontal (generalmente del hemisferio izquierdo en la mayoría de las personas), es responsable de la PRODUCCIÓN del lenguaje: su lesión produce una afasia donde la persona entiende bien lo que se le dice, pero habla con mucho esfuerzo, de forma entrecortada y gramaticalmente simplificada (afasia no fluente). El *área de Wernicke*, en el lóbulo temporal, es responsable de la COMPRENSIÓN del lenguaje: su lesión produce una afasia donde la persona habla con fluidez normal e incluso rapidez, pero el contenido no tiene sentido, y además no logra comprender bien lo que se le dice (afasia fluente).'
      ],
      foco:[
        'Contraste clásico de examen: lesión de Broca → habla poca y con esfuerzo, pero entiende bien (afasia no fluente). Lesión de Wernicke → habla mucho y con fluidez, pero sin sentido, y no entiende bien (afasia fluente). Es uno de los pares de localización más citados en toda la neuroanatomía clínica.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 9.'
},

'irrigacion-cerebral': {
  tema:'Irrigación cerebral',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:7,
  idea:'Saber qué arteria irriga qué parte del cerebro no es un dato de memoria aislado: es lo que permite predecir, con solo ver los síntomas de un paciente, cuál arteria probablemente se obstruyó en un ictus, incluso antes de cualquier estudio de imagen.',
  claves:['arteria cerebral media','polígono de Willis','territorio vascular','accidente cerebrovascular'],
  sigue:'vias-sensitivas-motoras',
  secciones:[
    {
      t:'El polígono de Willis: una red de seguridad anastomótica',
      p:[
        'El cerebro recibe su riego sanguíneo de dos pares de arterias principales (las carótidas internas y las vertebrales, ya mencionadas en Anatomía II), que se conectan entre sí en la base del cerebro formando el *polígono de Willis*: una red de anastomosis (retomando el concepto ya visto en Anatomía I) que ofrece rutas alternativas de circulación si una de las arterias principales se obstruye, similar en su lógica protectora a las anastomosis periarticulares ya vistas en los miembros.'
      ]
    },
    {
      t:'La arteria cerebral media y sus territorios',
      p:[
        'La *arteria cerebral media*, la rama más grande de la carótida interna, irriga la mayor parte de la superficie lateral del cerebro, incluida buena parte de la corteza motora y somatosensorial (la representación de la cara y el brazo, sobre todo) y, en el hemisferio dominante, las áreas de Broca y Wernicke ya vistas —es, con diferencia, la arteria más frecuentemente involucrada en un *accidente cerebrovascular* isquémico.',
        'Cada *territorio vascular* del cerebro (el área irrigada por una arteria específica) se asocia con un patrón de déficit predecible si esa arteria se obstruye: un ictus de la arteria cerebral media, por ejemplo, típicamente produce debilidad y pérdida de sensibilidad de la cara y el brazo (más que de la pierna, que depende más de la arteria cerebral anterior) del lado contrario del cuerpo, y afasia si compromete el hemisferio dominante.'
      ],
      foco:[
        'Consideración clínica: reconocer el patrón de síntomas de un ictus (qué parte del cuerpo está afectada, si hay afasia) permite, en minutos, estimar qué territorio vascular está comprometido, información valiosa incluso antes de que una tomografía confirme el diagnóstico.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 12.'
},

'vias-sensitivas-motoras': {
  tema:'Vías sensitivas y motoras',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:7,
  idea:'Este tema reúne y sistematiza, en un solo lugar, todas las vías largas ya vistas por separado a lo largo del bloque, organizándolas según una distinción central: dónde está la neurona motora "superior" y dónde la "inferior", porque una lesión de cada una produce un cuadro clínico distinto.',
  claves:['vía piramidal','vía lemniscal','neurona motora superior','neurona motora inferior'],
  sigue:'sistema-limbico',
  secciones:[
    {
      t:'Vía piramidal y vía lemniscal: los dos grandes sistemas',
      p:[
        'La *vía piramidal* (que incluye al haz corticoespinal ya visto) es el sistema motor voluntario principal, desde la corteza motora hasta el músculo. La *vía lemniscal* (que corresponde a los cordones posteriores ya vistos) transporta tacto fino, vibración y propiocepción hasta la corteza somatosensorial, ambas cruzando de lado en puntos ya descritos anteriormente en este bloque.'
      ]
    },
    {
      t:'Neurona motora superior frente a inferior',
      p:[
        'La *neurona motora superior* es la que va desde la corteza motora hasta la médula espinal (o el tronco, para los pares craneales); la *neurona motora inferior* es la que va desde la médula (o el núcleo del par craneal) directamente hasta el músculo. Distinguir cuál de las dos está lesionada es una de las decisiones diagnósticas más importantes de todo el examen neurológico, porque producen cuadros clínicos casi opuestos: una lesión de neurona motora SUPERIOR produce debilidad con reflejos EXALTADOS (por pérdida de la inhibición descendente normal, ya mencionado en semiología neurológica) y el signo de Babinski positivo ya visto. Una lesión de neurona motora INFERIOR produce debilidad con reflejos DISMINUIDOS o ausentes, y con el tiempo, atrofia muscular visible (porque el músculo pierde también su estímulo trófico habitual, no solo la orden de movimiento).'
      ],
      foco:[
        'Esta distinción (motora superior con reflejos exaltados, motora inferior con reflejos disminuidos) es, en la práctica clínica, tan importante como la propia debilidad muscular para decidir dónde buscar la lesión: en el cerebro o la médula, o en el nervio periférico y el propio músculo.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 5 y 9.'
},

'sistema-limbico': {
  tema:'Sistema límbico',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:6,
  idea:'El sistema límbico conecta, en un mismo circuito anatómico, dos funciones que a primera vista parecen no tener relación entre sí: la memoria y la emoción — y esa conexión explica por qué los recuerdos más vívidos casi siempre son los que tienen una carga emocional fuerte.',
  claves:['hipocampo','amígdala cerebral','circuito de Papez','memoria y emoción'],
  sigue:'liquido-cefalorraquideo-sistema-ventricular',
  secciones:[
    {
      t:'Hipocampo y amígdala: memoria y emoción, en estructuras vecinas',
      p:[
        'El *hipocampo*, una estructura en forma de caballito de mar en el lóbulo temporal, es fundamental para la formación de nuevos recuerdos a largo plazo (memoria declarativa): una lesión bilateral del hipocampo puede dejar a una persona incapaz de formar nuevos recuerdos, aunque conserve perfectamente los recuerdos antiguos, formados antes de la lesión. La *amígdala cerebral*, vecina inmediata del hipocampo, procesa el componente emocional de las experiencias, en particular el miedo y otras respuestas emocionales intensas.'
      ]
    },
    {
      t:'El circuito de Papez: cómo se conectan entre sí',
      p:[
        'El *circuito de Papez* es una red de conexiones entre el hipocampo, el hipotálamo, el tálamo y otras estructuras del sistema límbico, que originalmente se propuso como el circuito responsable de la emoción, y que hoy se entiende también como parte central de la formación de la memoria —la estrecha interconexión anatómica entre las estructuras de *memoria y emoción* dentro de este mismo sistema es, precisamente, la base biológica de por qué los eventos con fuerte carga emocional tienden a recordarse con más vividez y durante más tiempo que los eventos neutros.'
      ],
      foco:[
        'Consideración clínica: este vínculo estrecho entre memoria y emoción también explica por qué ciertos trastornos que afectan al sistema límbico (como algunas epilepsias del lóbulo temporal) pueden producir alteraciones tanto de la memoria como del procesamiento emocional a la vez, no una sola de las dos por separado.'
      ]
    }
  ],
  ref:'Kandel, Principios de Neurociencia, cap. 45.'
},

'liquido-cefalorraquideo-sistema-ventricular': {
  tema:'Líquido cefalorraquídeo y sistema ventricular',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:6,
  idea:'Este tema retoma, desde la anatomía, lo ya visto en Fisiología I sobre el líquido cefalorraquídeo: aquí se ve el sistema de cavidades interconectadas por donde ese líquido circula, y qué pasa cuando esa circulación se bloquea en algún punto.',
  claves:['ventrículo lateral','acueducto de Silvio','hidrocefalia','plexo coroideo'],
  sigue:'meninges-espacios-meningeos',
  secciones:[
    {
      t:'El recorrido del líquido, cavidad por cavidad',
      p:[
        'El sistema ventricular es una serie de cavidades interconectadas dentro del cerebro por donde circula el líquido cefalorraquídeo, producido —como ya se vio en Fisiología I— por el *plexo coroideo*. Los dos *ventrículos laterales* (uno en cada hemisferio cerebral) son los más grandes, y drenan hacia un tercer ventrículo central, que a su vez se conecta con un cuarto ventrículo (a la altura del tronco encefálico) a través de un canal estrecho, el *acueducto de Silvio* —un punto de paso obligatorio y, precisamente por ser tan estrecho, un sitio frecuente de obstrucción.'
      ]
    },
    {
      t:'Hidrocefalia: cuando la circulación se bloquea',
      p:[
        'La *hidrocefalia* es la acumulación anormal de líquido cefalorraquídeo dentro del sistema ventricular, casi siempre porque algo obstruye su circulación normal en algún punto de este recorrido (el acueducto de Silvio, por su estrechez, es un sitio clásico) o porque su reabsorción hacia la sangre está comprometida. Como el cráneo es una caja rígida de volumen fijo (ya visto en Fisiología I), esa acumulación aumenta la presión intracraneal, con las consecuencias ya descritas en ese tema.'
      ],
      foco:[
        'Este tema conecta directamente con la fisiología del líquido cefalorraquídeo ya vista en 7mo: la producción y la función del líquido se estudiaron ahí; aquí se completa con el mapa anatómico exacto de por dónde circula y dónde se puede atascar.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 4.'
},

'meninges-espacios-meningeos': {
  tema:'Meninges y espacios meníngeos',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:7,
  idea:'Este último tema del bloque de Neuroanatomía completa el cuadro protector del sistema nervioso central: no solo hay hueso (cráneo, columna) y líquido cefalorraquídeo amortiguando; hay además tres capas de membranas específicas, y el espacio entre ellas es, clínicamente, donde ocurren algunas de las hemorragias intracraneales más importantes de reconocer.',
  claves:['duramadre','aracnoides','piamadre','espacio subaracnoideo','hematoma epidural'],
  sigue:null,
  secciones:[
    {
      t:'Tres capas, de afuera hacia adentro',
      p:[
        'Las *meninges* son tres membranas que envuelven al encéfalo y la médula espinal. La *duramadre*, la más externa, es gruesa y resistente, adherida por dentro al cráneo. La *aracnoides*, la capa media, tiene un aspecto de telaraña (de ahí su nombre) y está separada de la capa más interna por un espacio real. La *piamadre*, la más interna, está firmemente adherida a la superficie del propio cerebro y la médula, siguiendo todos sus surcos y pliegues.'
      ]
    },
    {
      t:'Los espacios entre las capas, y por qué importan clínicamente',
      p:[
        'El *espacio subaracnoideo*, entre la aracnoides y la piamadre, es donde circula el líquido cefalorraquídeo alrededor de todo el encéfalo y la médula (ya visto en el tema anterior), y donde corren los principales vasos sanguíneos que irrigan la superficie del cerebro —una hemorragia ahí (hemorragia subaracnoidea, típicamente por la ruptura de un aneurisma) se mezcla directamente con el líquido cefalorraquídeo.',
        'El espacio potencial entre el cráneo y la duramadre es donde se acumula un *hematoma epidural*, típicamente por la ruptura de una arteria (con frecuencia la arteria meníngea media) tras un traumatismo craneal con fractura ósea cercana: al ser de origen arterial, se acumula rápido y con alta presión, siendo una urgencia neuroquirúrgica clásica, a menudo descrita con un "intervalo lúcido" (el paciente parece estar bien inicialmente, antes de deteriorarse rápido a medida que el hematoma crece).'
      ],
      foco:[
        'Este tema cierra el bloque completo de Neuroanatomía con una capa más de protección del sistema nervioso central, sumada a las ya vistas (hueso, líquido cefalorraquídeo): la barrera hematoencefálica, el cráneo, el líquido cefalorraquídeo y ahora las meninges forman, juntas, un sistema de protección en varias capas, cada una con su propia forma característica de fallar clínicamente.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 4.'
}

});
