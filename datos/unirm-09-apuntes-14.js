/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 9 (lote 14)
   NEUROANATOMIA reescrita al estandar extenso. Mismas 12 claves
   de objeto que ya existian, repartidas entre unirm-09-apuntes.js
   (1) y unirm-09-apuntes-5.js (11). Object.assign las sobrescribe
   sin romper "Leer el tema".

   Igual que en Anatomia Patologica I y Fisiopatologia, la cadena
   `sigue` de los 12 temas YA estaba en el orden correcto de
   principio a fin -ningun hueco ni clave rota-. Solo se cierra el
   cabo suelto final: 'meninges-espacios-meningeos' (ultimo tema,
   sigue:null) ahora encadena hacia
   'farmacocinetica-absorcion-distribucion', primer tema de
   Farmacologia, la materia siguiente de este cuatrimestre.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'organizacion-general-sistema-nervioso': {
  tema:'Organización general del sistema nervioso',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:13,
  idea:'Antes de estudiar cada estructura del sistema nervioso por separado, conviene fijar el mapa general: qué es sustancia gris y qué es blanca, y qué diferencia al sistema nervioso central del periférico. Sin este mapa, cada tema nuevo se siente aislado; con él, cada estructura nueva encaja en un lugar previsible.',
  claves:['sustancia gris','sustancia blanca','sistema nervioso central','sistema nervioso periférico'],
  sigue:'medula-espinal-vias-largas',
  secciones:[
    {
      t:'Sustancia gris y sustancia blanca: cuerpos neuronales frente a axones',
      p:[
        'La sustancia gris está formada principalmente por cuerpos neuronales (somas), dendritas y sinapsis -es donde ocurre el procesamiento de la información-. La sustancia blanca está formada principalmente por axones mielinizados, que conectan una región con otra -es el "cableado" que transmite la información ya procesada de un punto a otro-. Esta distinción básica se repite en todas las estructuras del sistema nervioso que se estudiarán en este bloque: cada una tiene su propia distribución característica de sustancia gris y blanca.'
      ],
      foco:[
        'Sustancia gris = cuerpos neuronales, donde se procesa la información. Sustancia blanca = axones mielinizados, el "cableado" que conecta regiones distintas.'
      ]
    },
    {
      t:'Sistema nervioso central: el centro de procesamiento e integración',
      p:[
        'El sistema nervioso central (SNC) comprende el encéfalo y la médula espinal, protegidos por estructuras óseas (cráneo, columna vertebral), las meninges y el líquido cefalorraquídeo, que se estudiarán con detalle en temas posteriores de este bloque. Es el centro de procesamiento e integración de la información, donde se toman las decisiones motoras y se interpreta la información sensitiva.'
      ],
      foco:[
        'El sistema nervioso central (encéfalo + médula espinal) es el centro de procesamiento e integración, protegido por estructuras óseas, meninges y líquido cefalorraquídeo.'
      ]
    },
    {
      t:'Sistema nervioso periférico: la conexión con el resto del cuerpo',
      p:[
        'El sistema nervioso periférico (SNP) comprende los nervios y ganglios fuera del cráneo y la columna vertebral, que conectan al sistema nervioso central con el resto del cuerpo: los nervios sensitivos llevan información desde los receptores periféricos hacia el SNC, y los nervios motores llevan las órdenes desde el SNC hacia los músculos y glándulas. Esta distinción central-periférico organizará todos los temas siguientes: cada estructura que se estudie pertenece claramente a uno de los dos sistemas.'
      ],
      foco:[
        '*Consideración clínica*: distinguir si una lesión afecta al sistema nervioso central o al periférico es, con frecuencia, el primer paso del razonamiento neurológico -cada uno tiene patrones de déficit y causas características distintas.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 1.'
},

'medula-espinal-vias-largas': {
  tema:'Médula espinal: organización y vías largas',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:14,
  idea:'La médula espinal es, literalmente, un cable de comunicación entre el cerebro y el resto del cuerpo, y las vías que la atraviesan tienen una propiedad clave para localizar una lesión: cada una cruza de lado en un punto distinto, y en un lado distinto del cuerpo.',
  claves:['haz corticoespinal','haz espinotalámico','cordones posteriores','decusación'],
  sigue:'tronco-encefalico-pares-craneales',
  secciones:[
    {
      t:'Sustancia gris en el centro, vías largas alrededor',
      p:[
        'La médula espinal tiene la sustancia gris en el centro (con forma de mariposa, donde ocurren los reflejos espinales) rodeada de sustancia blanca, organizada en cordones que contienen las vías largas ascendentes (sensitivas, hacia el cerebro) y descendentes (motoras, desde el cerebro). El haz corticoespinal es la vía motora principal: lleva la orden de movimiento voluntario desde la corteza cerebral hasta las neuronas motoras de la médula, que a su vez activan al músculo.'
      ],
      foco:[
        'La médula espinal tiene sustancia gris central (reflejos espinales) rodeada de sustancia blanca (vías largas). El haz corticoespinal es la vía motora voluntaria principal.'
      ]
    },
    {
      t:'Dos vías sensitivas, con puntos de cruce distintos',
      p:[
        'El haz espinotalámico transporta la sensación de dolor y temperatura; sus fibras CRUZAN al lado opuesto casi de inmediato, apenas uno o dos niveles después de entrar a la médula. Los cordones posteriores transportan la sensación de tacto fino, vibración y propiocepción; estas fibras NO cruzan en la médula: suben por el mismo lado hasta llegar al bulbo raquídeo, donde recién ahí cruzan.'
      ],
      foco:[
        'Haz espinotalámico (dolor/temperatura): cruza casi de inmediato en la médula. Cordones posteriores (tacto fino/propiocepción): cruzan mucho más arriba, en el bulbo raquídeo.'
      ]
    },
    {
      t:'La decusación y el síndrome de hemisección medular',
      p:[
        'Esta decusación (cruce de lado) en puntos distintos para cada vía tiene una consecuencia clínica muy usada para localizar lesiones: una lesión medular que daña un solo lado de la médula (síndrome de hemisección medular) produce pérdida de dolor y temperatura del lado CONTRARIO a la lesión (porque esas fibras ya habían cruzado antes de llegar a ese punto), pero pérdida de tacto fino y propiocepción del MISMO lado que la lesión (porque esas fibras todavía no habían cruzado).'
      ],
      foco:[
        '*Consideración clínica*: este patrón de déficit sensitivo "cruzado" (dolor/temperatura del lado contrario, tacto fino/propiocepción del mismo lado) es una de las formas más elegantes de localizar con precisión una lesión medular lateral, sin necesitar estudio de imagen.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 5.'
},

'tronco-encefalico-pares-craneales': {
  tema:'Tronco encefálico y pares craneales',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:13,
  idea:'El tronco encefálico es un cuello de botella anatómico: casi todo lo que sube o baja entre el cerebro y el cuerpo pasa por ahí, y además alberga los núcleos de la mayoría de los pares craneales -por eso una lesión pequeña en este punto puede tener consecuencias desproporcionadamente graves.',
  claves:['bulbo raquídeo','protuberancia','mesencéfalo','núcleo de par craneal'],
  sigue:'cerebelo',
  secciones:[
    {
      t:'Tres segmentos, de abajo hacia arriba',
      p:[
        'El tronco encefálico se divide en tres partes. El bulbo raquídeo, el más bajo, contiene centros vitales como el centro respiratorio y el centro cardiovascular, además de ser el punto donde cruzan las fibras del haz corticoespinal. La protuberancia (puente), en el medio, conecta con el cerebelo y contiene núcleos de varios pares craneales. El mesencéfalo, el más alto, conecta el tronco con el resto del cerebro y contiene centros relacionados con el control motor y los reflejos visuales.'
      ],
      foco:[
        'Bulbo raquídeo = centros vitales (respiratorio, cardiovascular) + decusación corticoespinal. Protuberancia = conexión con cerebelo. Mesencéfalo = control motor y reflejos visuales.'
      ]
    },
    {
      t:'Por qué aquí viven la mayoría de los pares craneales',
      p:[
        'La mayoría de los núcleos de par craneal se ubican dentro del tronco encefálico, distribuidos entre sus tres segmentos según cuál par craneal corresponda -por ejemplo, los núcleos relacionados con el movimiento ocular están más arriba, en el mesencéfalo, mientras que los relacionados con la deglución y la función cardiorrespiratoria están más abajo, en el bulbo.'
      ],
      foco:[
        'Los núcleos de pares craneales se distribuyen según su función a lo largo de los tres segmentos: movimiento ocular (arriba, mesencéfalo), deglución/función cardiorrespiratoria (abajo, bulbo).'
      ]
    },
    {
      t:'El síndrome alterno o cruzado',
      p:[
        'La concentración de funciones vitales y de pares craneales en un espacio anatómico relativamente pequeño explica por qué una lesión en el tronco encefálico puede producir una combinación característica de síntomas: déficit de uno o varios pares craneales del lado de la lesión, junto con déficit motor o sensitivo del lado CONTRARIO del cuerpo (porque las vías largas atraviesan este mismo nivel) -un patrón llamado síndrome alterno o cruzado, muy útil para localizar una lesión de tronco con precisión.'
      ],
      foco:[
        '*Consideración clínica*: por la concentración de centros vitales en el bulbo raquídeo, una lesión ahí, aunque sea pequeña, tiene un potencial de gravedad desproporcionado comparado con una lesión del mismo tamaño en otras partes del cerebro.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 7.'
},

'cerebelo': {
  tema:'Cerebelo',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:13,
  idea:'El cerebelo no inicia el movimiento: lo ajusta. Por eso sus lesiones no producen parálisis, sino movimientos torpes, mal coordinados y mal calibrados, como si la orden de moverse llegara sin su corrector de puntería habitual.',
  claves:['cerebelo','ataxia','dismetría','coordinación motora'],
  sigue:'ganglios-basales-control-motor',
  secciones:[
    {
      t:'Un coordinador, no un iniciador del movimiento',
      p:[
        'El cerebelo, ubicado por detrás del tronco encefálico y conectado a él, recibe información constante sobre la posición del cuerpo (propiocepción) y sobre las órdenes motoras que la corteza cerebral está enviando, comparando ambas para ajustar el movimiento en tiempo real: corrige la fuerza, la dirección y el momento exacto de la contracción muscular. No inicia el movimiento por sí mismo: eso lo hace la corteza motora.'
      ],
      foco:[
        'El cerebelo compara la propiocepción con las órdenes motoras de la corteza, ajustando en tiempo real fuerza, dirección y momento de la contracción -no inicia el movimiento, lo coordina.'
      ]
    },
    {
      t:'Ataxia y dismetría: las consecuencias de una lesión cerebelosa',
      p:[
        'Una lesión del cerebelo no produce debilidad: produce ataxia, una falta de coordinación del movimiento voluntario, con marcha inestable y tambaleante, como si la persona estuviera intoxicada. La dismetría es un signo específico de esta falta de coordinación: al intentar tocar un objetivo (por ejemplo, llevar el dedo hasta la nariz), el movimiento se pasa de largo o se queda corto, porque falta el ajuste fino que normalmente aporta el cerebelo.'
      ],
      foco:[
        'Ataxia: falta de coordinación, marcha inestable. Dismetría: el movimiento dirigido a un objetivo se pasa de largo o se queda corto -ambas sin debilidad muscular asociada.'
      ]
    },
    {
      t:'Distinción clave: descoordinación sin debilidad',
      p:[
        'Una lesión de la vía motora (corticoespinal) produce debilidad; una lesión cerebelosa produce descoordinación SIN debilidad -dos cuadros clínicos muy distintos que comparten la palabra "movimiento anormal" pero que apuntan a estructuras completamente diferentes.'
      ],
      foco:[
        '*Consideración clínica*: distinguir "debilidad" (lesión de vía motora) de "descoordinación sin debilidad" (lesión cerebelosa) es una de las primeras preguntas que organiza el examen neurológico del movimiento.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 8.'
},

'ganglios-basales-control-motor': {
  tema:'Ganglios basales y control motor',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:13,
  idea:'Los ganglios basales tienen, en esencia, la función opuesta y complementaria a la del cerebelo: no ajustan la precisión del movimiento en marcha, sino que regulan si un movimiento debe iniciarse o suprimirse, actuando como un filtro que decide qué órdenes motoras se dejan pasar.',
  claves:['ganglios basales','sustancia negra','vía dopaminérgica','movimiento involuntario'],
  sigue:'talamo-hipotalamo',
  secciones:[
    {
      t:'Un circuito que facilita o inhibe el movimiento',
      p:[
        'Los ganglios basales son un grupo de núcleos profundos del cerebro que forman un circuito con la corteza motora, participando en iniciar movimientos deseados y suprimir movimientos no deseados. Uno de sus componentes, la sustancia negra (ubicada en el mesencéfalo), produce dopamina y la envía a otras estructuras del circuito a través de la vía dopaminérgica, una señal necesaria para que el circuito funcione de forma equilibrada.'
      ],
      foco:[
        'Los ganglios basales forman un circuito que inicia movimientos deseados y suprime los no deseados; la sustancia negra provee la dopamina necesaria para el equilibrio del circuito.'
      ]
    },
    {
      t:'Parkinson: cuando el circuito se desequilibra hacia la inhibición',
      p:[
        'Cuando la sustancia negra pierde progresivamente sus neuronas dopaminérgicas, el circuito de los ganglios basales pierde su equilibrio hacia el lado de la INHIBICIÓN del movimiento, produciendo el cuadro clásico de la enfermedad de Parkinson: lentitud de movimiento, rigidez muscular y temblor característico en reposo -el circuito, sin suficiente dopamina, frena más de lo debido el inicio y la ejecución del movimiento voluntario.'
      ],
      foco:[
        'Parkinson: pérdida de neuronas dopaminérgicas de la sustancia negra → desequilibrio hacia inhibición del movimiento → lentitud, rigidez, temblor en reposo.'
      ]
    },
    {
      t:'Huntington: el efecto contrario',
      p:[
        'Otras enfermedades de los ganglios basales producen el efecto contrario: movimiento involuntario excesivo (como en la enfermedad de Huntington, ya mencionada en Genética Médica por su mecanismo de expansión de repeticiones), cuando el circuito pierde su capacidad de SUPRIMIR movimientos no deseados.'
      ],
      foco:[
        '*Consideración clínica*: este tema conecta directamente con Genética Médica (Huntington) y con Farmacología (los fármacos dopaminérgicos del Parkinson reponen la señal que la sustancia negra dejó de producir).'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 11.'
},

'talamo-hipotalamo': {
  tema:'Tálamo e hipotálamo',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:13,
  idea:'Estas dos estructuras, vecinas entre sí y con nombres muy parecidos, tienen funciones casi opuestas: una es la estación de relevo de casi toda la información sensitiva que sube hacia la conciencia; la otra es el centro de control que mantiene, sin que lo pienses, el equilibrio interno del cuerpo.',
  claves:['tálamo','hipotálamo','relevo sensitivo','homeostasis'],
  sigue:'corteza-cerebral-areas-funcionales',
  secciones:[
    {
      t:'El tálamo: la puerta de entrada hacia la corteza',
      p:[
        'El tálamo es la principal estación de relevo sensitivo del cerebro: prácticamente toda la información sensitiva que sube hacia la corteza cerebral (con la notable excepción del olfato) hace sinapsis en el tálamo antes de continuar hacia su destino cortical final. No es una simple parada de tránsito pasiva: el tálamo también filtra y modula qué información sensitiva se enfatiza o se atenúa antes de llegar a la conciencia, participando activamente en procesos como la atención.'
      ],
      foco:[
        'El tálamo es la estación de relevo de casi toda la información sensitiva (excepto olfato) antes de llegar a la corteza -no es solo tránsito pasivo, también filtra y modula.'
      ]
    },
    {
      t:'El hipotálamo: el centro de control homeostático',
      p:[
        'El hipotálamo, justo debajo del tálamo, es el centro regulador de la homeostasis: controla la temperatura corporal, el hambre y la saciedad, la sed, los ritmos circadianos de sueño y vigilia, y -a través del eje hipotálamo-hipófisis- buena parte del sistema endocrino completo. También es el punto de integración entre el sistema nervioso y el sistema nervioso autónomo.'
      ],
      foco:[
        'El hipotálamo regula homeostasis: temperatura, hambre/saciedad, sed, ritmos circadianos, y a través del eje hipotálamo-hipófisis, el sistema endocrino.'
      ]
    },
    {
      t:'Consciente frente a inconsciente: no confundirlos por el nombre',
      p:[
        'Aunque son vecinos anatómicos y su nombre se parece, el tálamo procesa información CONSCIENTE que va hacia la corteza; el hipotálamo regula funciones en gran parte INCONSCIENTES y automáticas del cuerpo. Confundirlos por el nombre parecido es un error frecuente al empezar a estudiar el tema.'
      ],
      foco:[
        '*Consideración clínica*: tálamo = procesamiento consciente hacia la corteza. Hipotálamo = regulación inconsciente y automática de la homeostasis -funciones casi opuestas, pese al nombre parecido.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 10.'
},

'corteza-cerebral-areas-funcionales': {
  tema:'Corteza cerebral: áreas funcionales',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:14,
  idea:'La corteza cerebral no funciona como una masa uniforme donde "todo se procesa en todas partes": tiene áreas especializadas y bien localizadas, y el caso clásico de dos pacientes con lesiones en dos áreas del lenguaje distintas, con problemas de lenguaje completamente distintos entre sí, es la mejor prueba histórica de esa especialización.',
  claves:['área de Broca','área de Wernicke','corteza motora','corteza somatosensorial'],
  sigue:'irrigacion-cerebral',
  secciones:[
    {
      t:'Corteza motora y somatosensorial: mapas del cuerpo',
      p:[
        'La corteza motora (en el lóbulo frontal) es el origen del haz corticoespinal, y está organizada como un mapa del cuerpo (homúnculo motor): distintas regiones controlan distintas partes del cuerpo, con representación desproporcionadamente grande para las partes capaces de movimientos finos (mano, cara). La corteza somatosensorial (en el lóbulo parietal) recibe la información que llegó primero al tálamo, también organizada como mapa del cuerpo, con la misma desproporción.'
      ],
      foco:[
        'Corteza motora (frontal) y somatosensorial (parietal) están organizadas como mapas del cuerpo (homúnculos), con representación desproporcionada para mano y cara.'
      ]
    },
    {
      t:'Área de Broca: la producción del lenguaje',
      p:[
        'El área de Broca, en el lóbulo frontal (generalmente del hemisferio izquierdo), es responsable de la PRODUCCIÓN del lenguaje: su lesión produce una afasia donde la persona entiende bien lo que se le dice, pero habla con mucho esfuerzo, de forma entrecortada y gramaticalmente simplificada (afasia no fluente).'
      ],
      foco:[
        'Lesión de Broca → afasia NO fluente: habla poca y con esfuerzo, pero comprende bien.'
      ]
    },
    {
      t:'Área de Wernicke: la comprensión del lenguaje',
      p:[
        'El área de Wernicke, en el lóbulo temporal, es responsable de la COMPRENSIÓN del lenguaje: su lesión produce una afasia donde la persona habla con fluidez normal e incluso rapidez, pero el contenido no tiene sentido, y además no logra comprender bien lo que se le dice (afasia fluente).'
      ],
      foco:[
        '*Consideración clínica*: lesión de Broca → habla poca y con esfuerzo, entiende bien. Lesión de Wernicke → habla mucho y con fluidez, sin sentido, no entiende bien -uno de los pares de localización más citados en neuroanatomía clínica.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 9.'
},

'irrigacion-cerebral': {
  tema:'Irrigación cerebral',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:13,
  idea:'Saber qué arteria irriga qué parte del cerebro no es un dato de memoria aislado: es lo que permite predecir, con solo ver los síntomas de un paciente, cuál arteria probablemente se obstruyó en un ictus, incluso antes de cualquier estudio de imagen.',
  claves:['arteria cerebral media','polígono de Willis','territorio vascular','accidente cerebrovascular'],
  sigue:'vias-sensitivas-motoras',
  secciones:[
    {
      t:'El polígono de Willis: una red de seguridad anastomótica',
      p:[
        'El cerebro recibe su riego sanguíneo de dos pares de arterias principales (las carótidas internas y las vertebrales), que se conectan entre sí en la base del cerebro formando el polígono de Willis: una red de anastomosis que ofrece rutas alternativas de circulación si una de las arterias principales se obstruye.'
      ],
      foco:[
        'El polígono de Willis conecta las carótidas internas y vertebrales, ofreciendo rutas alternativas de circulación si una arteria principal se obstruye.'
      ]
    },
    {
      t:'La arteria cerebral media y sus territorios',
      p:[
        'La arteria cerebral media, la rama más grande de la carótida interna, irriga la mayor parte de la superficie lateral del cerebro, incluida buena parte de la corteza motora y somatosensorial (cara y brazo, sobre todo) y, en el hemisferio dominante, las áreas de Broca y Wernicke -es, con diferencia, la arteria más frecuentemente involucrada en un accidente cerebrovascular isquémico.'
      ],
      foco:[
        'La arteria cerebral media es la más frecuentemente involucrada en ictus isquémico; irriga cara/brazo de la corteza motora-somatosensorial y, en el hemisferio dominante, las áreas del lenguaje.'
      ]
    },
    {
      t:'Predecir la arteria comprometida por el patrón de síntomas',
      p:[
        'Cada territorio vascular se asocia con un patrón de déficit predecible si esa arteria se obstruye: un ictus de la arteria cerebral media típicamente produce debilidad y pérdida de sensibilidad de la cara y el brazo (más que de la pierna, que depende más de la arteria cerebral anterior) del lado contrario del cuerpo, y afasia si compromete el hemisferio dominante.'
      ],
      foco:[
        '*Consideración clínica*: reconocer el patrón de síntomas de un ictus (qué parte del cuerpo, si hay afasia) permite, en minutos, estimar qué territorio vascular está comprometido, antes de que una tomografía confirme el diagnóstico.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 12.'
},

'vias-sensitivas-motoras': {
  tema:'Vías sensitivas y motoras',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:14,
  idea:'Este tema reúne y sistematiza, en un solo lugar, todas las vías largas ya vistas por separado a lo largo del bloque, organizándolas según una distinción central: dónde está la neurona motora "superior" y dónde la "inferior", porque una lesión de cada una produce un cuadro clínico distinto.',
  claves:['vía piramidal','vía lemniscal','neurona motora superior','neurona motora inferior'],
  sigue:'sistema-limbico',
  secciones:[
    {
      t:'Vía piramidal y vía lemniscal: los dos grandes sistemas',
      p:[
        'La vía piramidal (que incluye al haz corticoespinal) es el sistema motor voluntario principal, desde la corteza motora hasta el músculo. La vía lemniscal (que corresponde a los cordones posteriores) transporta tacto fino, vibración y propiocepción hasta la corteza somatosensorial, ambas cruzando de lado en puntos ya descritos anteriormente en este bloque.'
      ],
      foco:[
        'Vía piramidal = sistema motor voluntario (corteza motora → músculo). Vía lemniscal = tacto fino/vibración/propiocepción (cordones posteriores → corteza somatosensorial).'
      ]
    },
    {
      t:'Neurona motora superior: debilidad con reflejos exaltados',
      p:[
        'La neurona motora superior es la que va desde la corteza motora hasta la médula espinal (o el tronco, para los pares craneales). Distinguir cuál de las dos (superior o inferior) está lesionada es una de las decisiones diagnósticas más importantes de todo el examen neurológico: una lesión de neurona motora SUPERIOR produce debilidad con reflejos EXALTADOS (por pérdida de la inhibición descendente normal) y el signo de Babinski positivo.'
      ],
      foco:[
        'Lesión de neurona motora superior: debilidad + reflejos EXALTADOS + Babinski positivo (por pérdida de inhibición descendente).'
      ]
    },
    {
      t:'Neurona motora inferior: debilidad con reflejos disminuidos',
      p:[
        'La neurona motora inferior es la que va desde la médula (o el núcleo del par craneal) directamente hasta el músculo. Una lesión de neurona motora INFERIOR produce debilidad con reflejos DISMINUIDOS o ausentes, y con el tiempo, atrofia muscular visible (porque el músculo pierde también su estímulo trófico habitual, no solo la orden de movimiento).'
      ],
      foco:[
        '*Consideración clínica*: esta distinción (motora superior con reflejos exaltados, motora inferior con reflejos disminuidos y atrofia) es tan importante como la propia debilidad muscular para decidir dónde buscar la lesión.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 5 y 9.'
},

'sistema-limbico': {
  tema:'Sistema límbico',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:13,
  idea:'El sistema límbico conecta, en un mismo circuito anatómico, dos funciones que a primera vista parecen no tener relación entre sí: la memoria y la emoción -y esa conexión explica por qué los recuerdos más vívidos casi siempre son los que tienen una carga emocional fuerte.',
  claves:['hipocampo','amígdala cerebral','circuito de Papez','memoria y emoción'],
  sigue:'liquido-cefalorraquideo-sistema-ventricular',
  secciones:[
    {
      t:'Hipocampo: la formación de nuevos recuerdos',
      p:[
        'El hipocampo, una estructura en forma de caballito de mar en el lóbulo temporal, es fundamental para la formación de nuevos recuerdos a largo plazo (memoria declarativa): una lesión bilateral del hipocampo puede dejar a una persona incapaz de formar nuevos recuerdos, aunque conserve perfectamente los recuerdos antiguos, formados antes de la lesión.'
      ],
      foco:[
        'El hipocampo es fundamental para formar nuevos recuerdos a largo plazo -su lesión bilateral impide nuevos recuerdos, sin afectar los antiguos ya formados.'
      ]
    },
    {
      t:'Amígdala: el procesamiento emocional',
      p:[
        'La amígdala cerebral, vecina inmediata del hipocampo, procesa el componente emocional de las experiencias, en particular el miedo y otras respuestas emocionales intensas.'
      ],
      foco:[
        'La amígdala cerebral procesa el componente emocional de las experiencias, especialmente el miedo.'
      ]
    },
    {
      t:'El circuito de Papez: cómo se conectan memoria y emoción',
      p:[
        'El circuito de Papez es una red de conexiones entre el hipocampo, el hipotálamo, el tálamo y otras estructuras del sistema límbico, que originalmente se propuso como el circuito responsable de la emoción, y que hoy se entiende también como parte central de la formación de la memoria -la estrecha interconexión anatómica entre memoria y emoción dentro de este mismo sistema es la base biológica de por qué los eventos con fuerte carga emocional tienden a recordarse con más vividez.'
      ],
      foco:[
        '*Consideración clínica*: el vínculo estrecho entre memoria y emoción explica por qué ciertos trastornos del sistema límbico (como algunas epilepsias del lóbulo temporal) afectan a la vez memoria y procesamiento emocional, no uno solo de los dos.'
      ]
    }
  ],
  ref:'Kandel, Principios de Neurociencia, cap. 45.'
},

'liquido-cefalorraquideo-sistema-ventricular': {
  tema:'Líquido cefalorraquídeo y sistema ventricular',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:12,
  idea:'Este tema retoma, desde la anatomía, lo ya visto en Fisiología I sobre el líquido cefalorraquídeo: aquí se ve el sistema de cavidades interconectadas por donde ese líquido circula, y qué pasa cuando esa circulación se bloquea en algún punto.',
  claves:['ventrículo lateral','acueducto de Silvio','hidrocefalia','plexo coroideo'],
  sigue:'meninges-espacios-meningeos',
  secciones:[
    {
      t:'El recorrido del líquido, cavidad por cavidad',
      p:[
        'El sistema ventricular es una serie de cavidades interconectadas dentro del cerebro por donde circula el líquido cefalorraquídeo, producido por el plexo coroideo. Los dos ventrículos laterales (uno en cada hemisferio cerebral) son los más grandes, y drenan hacia un tercer ventrículo central, que a su vez se conecta con un cuarto ventrículo (a la altura del tronco encefálico) a través de un canal estrecho, el acueducto de Silvio -un punto de paso obligatorio y, precisamente por ser tan estrecho, un sitio frecuente de obstrucción.'
      ],
      foco:[
        'Recorrido: ventrículos laterales → tercer ventrículo → acueducto de Silvio (canal estrecho, sitio frecuente de obstrucción) → cuarto ventrículo.'
      ]
    },
    {
      t:'Hidrocefalia: cuando la circulación se bloquea',
      p:[
        'La hidrocefalia es la acumulación anormal de líquido cefalorraquídeo dentro del sistema ventricular, casi siempre porque algo obstruye su circulación normal en algún punto de este recorrido (el acueducto de Silvio, por su estrechez, es un sitio clásico) o porque su reabsorción hacia la sangre está comprometida. Como el cráneo es una caja rígida de volumen fijo, esa acumulación aumenta la presión intracraneal.'
      ],
      foco:[
        'La hidrocefalia (acumulación de LCR) ocurre por obstrucción de su circulación (frecuentemente en el acueducto de Silvio) o por reabsorción comprometida -aumenta la presión intracraneal por el volumen fijo del cráneo.'
      ]
    },
    {
      t:'Conexión con la fisiología ya estudiada',
      p:[
        'Este tema conecta directamente con la fisiología del líquido cefalorraquídeo ya vista en 7mo cuatrimestre: la producción y la función del líquido se estudiaron ahí; aquí se completa con el mapa anatómico exacto de por dónde circula y dónde se puede atascar.'
      ],
      foco:[
        '*Consideración clínica*: entender el mapa anatómico del sistema ventricular (dónde puede obstruirse la circulación del LCR) es lo que permite anticipar dónde buscar la causa de una hidrocefalia.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 4.'
},

'meninges-espacios-meningeos': {
  tema:'Meninges y espacios meníngeos',
  bloque:'Neuroanatomía', programa:'unirm', cuatri:9, min:13,
  idea:'Este último tema del bloque de Neuroanatomía completa el cuadro protector del sistema nervioso central: no solo hay hueso (cráneo, columna) y líquido cefalorraquídeo amortiguando; hay además tres capas de membranas específicas, y el espacio entre ellas es, clínicamente, donde ocurren algunas de las hemorragias intracraneales más importantes de reconocer.',
  claves:['duramadre','aracnoides','piamadre','espacio subaracnoideo','hematoma epidural'],
  sigue:'farmacocinetica-absorcion-distribucion',
  secciones:[
    {
      t:'Tres capas, de afuera hacia adentro',
      p:[
        'Las meninges son tres membranas que envuelven al encéfalo y la médula espinal. La duramadre, la más externa, es gruesa y resistente, adherida por dentro al cráneo. La aracnoides, la capa media, tiene un aspecto de telaraña y está separada de la capa más interna por un espacio real. La piamadre, la más interna, está firmemente adherida a la superficie del propio cerebro y la médula, siguiendo todos sus surcos y pliegues.'
      ],
      foco:[
        'Tres meninges, de afuera hacia adentro: duramadre (gruesa, adherida al cráneo), aracnoides (aspecto de telaraña), piamadre (adherida a la superficie cerebral, sigue surcos y pliegues).'
      ]
    },
    {
      t:'El espacio subaracnoideo y la hemorragia subaracnoidea',
      p:[
        'El espacio subaracnoideo, entre la aracnoides y la piamadre, es donde circula el líquido cefalorraquídeo alrededor de todo el encéfalo y la médula, y donde corren los principales vasos sanguíneos que irrigan la superficie del cerebro -una hemorragia ahí (hemorragia subaracnoidea, típicamente por la ruptura de un aneurisma) se mezcla directamente con el líquido cefalorraquídeo.'
      ],
      foco:[
        'El espacio subaracnoideo contiene LCR y los principales vasos de la superficie cerebral -una hemorragia ahí (típicamente por aneurisma roto) se mezcla directamente con el LCR.'
      ]
    },
    {
      t:'El hematoma epidural: una urgencia neuroquirúrgica clásica',
      p:[
        'El espacio potencial entre el cráneo y la duramadre es donde se acumula un hematoma epidural, típicamente por la ruptura de una arteria (con frecuencia la arteria meníngea media) tras un traumatismo craneal con fractura ósea cercana: al ser de origen arterial, se acumula rápido y con alta presión, siendo una urgencia neuroquirúrgica clásica, a menudo descrita con un "intervalo lúcido" (el paciente parece estar bien inicialmente, antes de deteriorarse rápido a medida que el hematoma crece).'
      ],
      foco:[
        '*Consideración clínica*: el hematoma epidural (origen arterial, intervalo lúcido, deterioro rápido posterior) es una urgencia neuroquirúrgica clásica -este tema cierra el bloque sumando las meninges a las demás capas de protección del sistema nervioso central ya vistas.'
      ]
    }
  ],
  ref:'Snell, Neuroanatomía Clínica, cap. 4.'
}

});
