/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 25)
   FISIOLOGIA II reescrita al estandar extenso. Mismas 17 claves
   de objeto que ya existian (en apuntes.js, -2.js y -4.js), asi
   que Object.assign las sobrescribe sin romper "Leer el tema".

   Se repara la cadena `sigue`, que estaba MUY rota: 'ciclo-
   cardiaco' saltaba directo a 'filtracion-glomerular' (temas 2 a
   6 sin enlazar), 'filtracion-glomerular' saltaba a 'equilibrio-
   acido-base' (saltandose 'manejo-tubular-concentracion-orina',
   que quedaba huerfano con sigue:null), 'equilibrio-acido-base'
   saltaba directo a Bioquimica II en vez de seguir con el resto
   de Fisiologia II, y 'fisiologia-digestiva' saltaba a
   'motilidad-gastrointestinal-esfinteres' saltandose CINCO temas
   (introduccion-endocrinologia, curva-funcion-ventricular,
   circulacion-coronaria-regional, volumenes-capacidades-
   pulmonares, fisiologia-ejercicio). Ahora la cadena sigue el
   orden exacto del Temario y termina en 'metabolismo-glucogeno',
   el primer tema de Bioquimica II (la materia siguiente).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'ciclo-cardiaco': {
  tema:'Ciclo cardíaco y gasto cardíaco',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:14,
  idea:'El corazón funciona como una bomba de dos tiempos -llenado y expulsión- y entender ese ciclo es lo que permite interpretar tanto los ruidos cardíacos normales como los factores que determinan cuánta sangre bombea el corazón en cada minuto.',
  claves:['ciclo cardíaco','gasto cardíaco','precarga','poscarga','Frank-Starling','volumen sistólico'],
  sigue:'electrofisiologia-cardiaca-ecg',
  secciones:[
    {
      t:'Las fases del ciclo cardíaco y el origen de los ruidos',
      p:[
        'El ciclo cardíaco se divide en dos grandes fases: la sístole (contracción y expulsión de sangre) y la diástole (relajación y llenado). Durante la diástole, con las válvulas AV abiertas y las semilunares cerradas, los ventrículos se llenan de sangre (primero de forma pasiva y rápida, luego más lenta, y finalmente con un aporte adicional por la contracción auricular). Al iniciar la sístole, la presión ventricular supera a la auricular, cerrando las válvulas AV (esto genera el primer ruido cardíaco, R1) y, mientras las válvulas semilunares siguen cerradas, ocurre una fase de contracción isovolumétrica (el ventrículo se contrae sin cambiar de volumen, porque todas las válvulas están cerradas) hasta que la presión ventricular supera a la de la arteria de salida, abriendo las semilunares y expulsando la sangre. Al final de la sístole, la presión ventricular cae por debajo de la arterial, cerrando las semilunares (segundo ruido cardíaco, R2), y el ciclo se repite.'
      ],
      foco:[
        'R1 (cierre de válvulas AV) marca el inicio de la sístole. R2 (cierre de válvulas semilunares) marca su final. Entre ambos ocurren las fases de contracción isovolumétrica, eyección, relajación isovolumétrica y llenado.'
      ]
    },
    {
      t:'Precarga y poscarga: las dos cargas que enfrenta el ventrículo',
      p:[
        'La precarga es el grado de estiramiento de la fibra miocárdica ventricular justo antes de la contracción, determinado principalmente por el volumen de sangre que llena al ventrículo al final de la diástole (volumen diastólico final); clínicamente, se aproxima con la presión de llenado ventricular. La poscarga es la resistencia contra la que el ventrículo debe contraerse para expulsar la sangre, determinada principalmente por la resistencia vascular periférica (para el ventrículo izquierdo) o la resistencia vascular pulmonar (para el derecho). Ambas cargas afectan al volumen sistólico, pero de forma opuesta: aumentar la precarga (dentro de límites fisiológicos) aumenta el volumen sistólico, mientras que aumentar la poscarga lo disminuye, porque el ventrículo debe vencer más resistencia para expulsar la misma cantidad de sangre.'
      ],
      foco:[
        'Precarga ↑ (más llenado) → volumen sistólico ↑. Poscarga ↑ (más resistencia a vencer) → volumen sistólico ↓. Son cargas con efectos opuestos sobre cuánta sangre se expulsa en cada latido.'
      ]
    },
    {
      t:'La ley de Frank-Starling y el cálculo del gasto cardíaco',
      p:[
        'La ley de Frank-Starling establece que, dentro de límites fisiológicos, a mayor estiramiento de la fibra miocárdica (mayor precarga), mayor es la fuerza de contracción y, por tanto, mayor el volumen sistólico expulsado -el corazón "bombea lo que recibe", un mecanismo intrínseco que no depende de la inervación autónoma y que permite adaptar el gasto cardíaco latido a latido según el retorno venoso. El gasto cardíaco, la cantidad total de sangre que el corazón bombea por minuto, se calcula como el volumen sistólico (la sangre expulsada en cada latido) multiplicado por la frecuencia cardíaca: Gasto cardíaco = Volumen sistólico × Frecuencia cardíaca. Esta fórmula simple es la base para entender que el gasto cardíaco puede aumentar tanto por incrementar el volumen expulsado en cada latido como por aumentar el número de latidos por minuto, y que una caída de cualquiera de los dos factores, sin compensación del otro, reduce el gasto cardíaco total.'
      ],
      foco:[
        '*Consideración clínica*: Gasto cardíaco = Volumen sistólico × Frecuencia cardíaca. La ley de Frank-Starling es un mecanismo intrínseco del propio músculo cardíaco (no depende de nervios), que ajusta la fuerza de contracción al volumen de llenado recibido.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'electrofisiologia-cardiaca-ecg': {
  tema:'Electrofisiología cardíaca y ECG',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:14,
  idea:'El electrocardiograma no mide directamente al corazón latiendo: mide la actividad eléctrica que precede y coordina cada latido, y entender esa relación es lo que permite leer cada onda del trazado como el reflejo de un evento eléctrico específico.',
  claves:['nodo sinusal','automatismo','ECG','onda P','QRS','conducción'],
  sigue:'hemodinamica-regulacion-presion',
  secciones:[
    {
      t:'El sistema de conducción y el automatismo cardíaco',
      p:[
        'El corazón tiene la propiedad única del automatismo: ciertas células cardíacas especializadas pueden generar impulsos eléctricos espontáneos, sin necesidad de un estímulo nervioso externo. El nodo sinusal, situado en la aurícula derecha, es el marcapasos natural del corazón, con la frecuencia de despolarización espontánea más rápida de todo el sistema de conducción (por eso "manda" sobre el resto). Desde ahí, el impulso se propaga por las aurículas, llega al nodo auriculoventricular (donde se produce un retraso fisiológico deliberado, que da tiempo a que las aurículas terminen de contraerse y llenar a los ventrículos antes de que estos se activen), y desciende por el haz de His y sus ramas hasta las fibras de Purkinje, que distribuyen el impulso rápidamente por todo el miocardio ventricular, asegurando una contracción coordinada y casi simultánea.'
      ],
      foco:[
        'Nodo sinusal (marcapasos natural, el más rápido) → nodo AV (retraso deliberado) → haz de His y ramas → fibras de Purkinje. El retraso en el nodo AV no es un defecto: es necesario para que las aurículas terminen de contraerse antes que los ventrículos.'
      ]
    },
    {
      t:'Qué representa cada onda del electrocardiograma',
      p:[
        'El electrocardiograma registra la actividad eléctrica del corazón, no su actividad mecánica directamente. La onda P representa la despolarización auricular (el impulso extendiéndose por las aurículas). El complejo QRS representa la despolarización ventricular (mucho más grande que la onda P, porque la masa muscular ventricular es mucho mayor que la auricular), y es durante este complejo que, de hecho, también ocurre la repolarización auricular, aunque queda "escondida" dentro del QRS por su menor amplitud. La onda T representa la repolarización ventricular. El segmento entre el final del QRS y el inicio de la onda T (segmento ST) corresponde a la fase de meseta del potencial de acción ventricular, un periodo de especial relevancia clínica porque su elevación o descenso son signos característicos de isquemia miocárdica.'
      ],
      foco:[
        'P = despolarización auricular. QRS = despolarización ventricular (y repolarización auricular, escondida dentro). T = repolarización ventricular. El segmento ST es el punto de referencia clave para detectar isquemia miocárdica.'
      ]
    },
    {
      t:'Por qué el nodo AV es el "cuello de botella" fisiológico normal',
      p:[
        'El retraso de la conducción en el nodo auriculoventricular no es solo un dato descriptivo: cumple una función fisiológica esencial, dar tiempo a que la contracción auricular termine de llenar a los ventrículos antes de que estos se despolaricen y contraigan. Este retraso corresponde al intervalo PR del electrocardiograma (desde el inicio de la onda P hasta el inicio del QRS). Cuando ese retraso se prolonga patológicamente, se produce un bloqueo auriculoventricular de primer grado; cuando algunos impulsos auriculares dejan de conducirse por completo hacia los ventrículos, se producen los bloqueos de segundo o tercer grado, con consecuencias hemodinámicas que dependen de cuántos impulsos se pierden y de si existe o no un marcapasos de escape ventricular que tome el relevo.'
      ],
      foco:[
        '*Consideración clínica*: el intervalo PR del ECG mide justamente el tiempo de conducción a través del nodo AV. Su prolongación (bloqueo AV de primer grado) o la pérdida de conducción de algunos impulsos (segundo o tercer grado) reflejan directamente una alteración de ese retraso fisiológico normal.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'hemodinamica-regulacion-presion': {
  tema:'Hemodinámica y regulación de la presión',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:14,
  idea:'La presión arterial no es un número fijo: es el resultado de un sistema de control con múltiples capas -desde reflejos de segundos hasta hormonas que tardan días- que se activan según la urgencia y la duración del desajuste que necesitan corregir.',
  claves:['presión arterial','resistencia periférica','barorreceptor','renina','angiotensina'],
  sigue:'ventilacion-mecanica-respiratoria',
  secciones:[
    {
      t:'La ecuación fundamental de la presión arterial',
      p:[
        'La presión arterial media depende de dos factores fundamentales, análogos a la ley de Ohm aplicada a la circulación: Presión arterial = Gasto cardíaco × Resistencia vascular periférica. Cualquier factor que aumente el gasto cardíaco (mayor frecuencia cardíaca, mayor volumen sistólico) o la resistencia periférica (vasoconstricción) tiende a elevar la presión arterial, y viceversa. Esta relación simple es la base conceptual para entender por qué los distintos grupos de antihipertensivos actúan sobre uno u otro de estos dos componentes: los diuréticos y betabloqueantes actúan más sobre el gasto cardíaco (reduciendo volumen o frecuencia), mientras que los vasodilatadores actúan directamente sobre la resistencia periférica.'
      ],
      foco:[
        'Presión arterial = Gasto cardíaco × Resistencia vascular periférica. Es la ecuación base para entender tanto la fisiología normal de la presión como el mecanismo de acción de cada clase de antihipertensivo.'
      ]
    },
    {
      t:'El reflejo barorreceptor: control rápido, de segundos',
      p:[
        'Los barorreceptores son receptores de estiramiento situados en el seno carotídeo y el cayado aórtico, que detectan cambios en la presión arterial de forma prácticamente instantánea. Ante una caída de presión, disminuye la actividad de estos receptores, lo que el centro cardiovascular del tronco encefálico interpreta como señal para aumentar la actividad simpática (aumentando frecuencia cardíaca, contractilidad y resistencia vascular periférica) y disminuir la actividad parasimpática, elevando la presión de vuelta hacia su valor de referencia en cuestión de segundos. Este es el mecanismo de control de presión MÁS RÁPIDO del organismo, pero también el que se adapta (se "reajusta" a un nuevo valor de referencia) si la presión permanece elevada de forma sostenida durante días, lo que explica por qué el reflejo barorreceptor no previene por sí solo la hipertensión arterial crónica.'
      ],
      foco:[
        '*Consideración clínica*: el reflejo barorreceptor es rápido (segundos) pero se REAJUSTA ante presiones sostenidas -por eso no evita la hipertensión crónica, un dato clave para entender por qué el control de la presión a largo plazo depende de otros mecanismos, como el sistema renina-angiotensina-aldosterona.'
      ]
    },
    {
      t:'El sistema renina-angiotensina-aldosterona: control lento y sostenido',
      p:[
        'Cuando la presión de perfusión renal cae (o disminuye el sodio detectado en el túbulo distal, o aumenta la actividad simpática renal), las células yuxtaglomerulares del riñón liberan renina, una enzima que convierte al angiotensinógeno (producido en el hígado) en angiotensina I; esta se convierte en angiotensina II mediante la enzima convertidora de angiotensina (ECA), producida principalmente en el endotelio pulmonar. La angiotensina II es un vasoconstrictor potente (elevando directamente la resistencia periférica) y además estimula la liberación de aldosterona desde la corteza suprarrenal, que promueve la reabsorción de sodio (y, con él, de agua) en el túbulo renal, aumentando el volumen circulante. Este sistema actúa de forma más lenta que el reflejo barorreceptor (minutos a horas para el efecto vasoconstrictor directo, y días para el efecto completo de la aldosterona sobre el volumen), pero es mucho más sostenido en el tiempo, y es precisamente el blanco farmacológico de los inhibidores de la ECA y los antagonistas del receptor de angiotensina, dos de las clases de antihipertensivos más usadas.'
      ],
      foco:[
        'Renina (riñón) → angiotensina I → angiotensina II (por la ECA, pulmonar) → vasoconstricción directa + liberación de aldosterona (retención de sodio y agua). Es el mecanismo de control de presión más sostenido en el tiempo, y el blanco de IECA y ARA-II.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'ventilacion-mecanica-respiratoria': {
  tema:'Ventilación y mecánica respiratoria',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:13,
  idea:'Que el pulmón se infle con cada respiración depende de una propiedad casi contraintuitiva: sus paredes tienden naturalmente al colapso, y solo se mantienen abiertas gracias a una sustancia que reduce la tensión superficial en su interior.',
  claves:['ventilación','distensibilidad','surfactante','espacio muerto','volumen corriente'],
  sigue:'intercambio-transporte-gases',
  secciones:[
    {
      t:'Distensibilidad pulmonar: qué tan fácil es inflar el pulmón',
      p:[
        'La distensibilidad (compliance) pulmonar mide qué tanto cambia el volumen pulmonar por cada unidad de cambio de presión: un pulmón muy distensible se infla con facilidad ante un pequeño cambio de presión, mientras que uno poco distensible (rígido) requiere mucha más presión para inflarse el mismo volumen. Enfermedades que producen fibrosis o rigidez del tejido pulmonar (como la fibrosis pulmonar) reducen la distensibilidad, aumentando el trabajo respiratorio necesario para cada respiración. En el extremo opuesto, el enfisema, al destruir el tejido elástico pulmonar, AUMENTA la distensibilidad (el pulmón se infla con más facilidad), pero paradójicamente esto también es problemático, porque el pulmón pierde su capacidad de retracción elástica normal, dificultando la espiración.'
      ],
      foco:[
        'Fibrosis pulmonar = distensibilidad DISMINUIDA (pulmón rígido, cuesta inflarlo). Enfisema = distensibilidad AUMENTADA (pulmón "flácido", pero con dificultad para vaciarse por pérdida de retracción elástica). Ambos son anormales, mecánicamente en direcciones opuestas.'
      ]
    },
    {
      t:'El surfactante pulmonar: por qué el alvéolo no colapsa',
      p:[
        'La tensión superficial del líquido que recubre el interior del alvéolo tiende, por sí sola, a colapsarlo (según la ley de Laplace, la presión de colapso es mayor en alvéolos más pequeños, lo cual sin corrección haría que los alvéolos pequeños se vaciaran hacia los grandes, un fenómeno inestable e indeseable). El surfactante pulmonar, producido por los neumocitos tipo II, es una mezcla de fosfolípidos (principalmente dipalmitoilfosfatidilcolina) que reduce la tensión superficial dentro del alvéolo, y lo hace de forma proporcionalmente MAYOR en los alvéolos más pequeños (porque ahí las moléculas de surfactante quedan más concentradas), estabilizando así alvéolos de distintos tamaños y evitando su colapso. La ausencia o insuficiencia de surfactante -como ocurre en el recién nacido prematuro, cuya producción de surfactante madura tardíamente en el embarazo- causa el síndrome de dificultad respiratoria del recién nacido, con colapso alveolar generalizado (atelectasia) y gran dificultad para ventilar.'
      ],
      foco:[
        '*Consideración clínica*: la inmadurez del surfactante en el prematuro es la base del síndrome de dificultad respiratoria neonatal -por eso se administra corticoide prenatal para acelerar su maduración cuando se anticipa un parto prematuro.'
      ]
    },
    {
      t:'Espacio muerto y volumen corriente: no todo el aire inspirado llega al intercambio',
      p:[
        'El volumen corriente es el volumen de aire que entra y sale en una respiración normal en reposo (aproximadamente 500 mL en un adulto). No todo ese volumen participa del intercambio gaseoso: el espacio muerto anatómico es el volumen de la vía aérea de conducción (tráquea, bronquios, bronquiolos) que no llega a los alvéolos y por tanto no participa del intercambio (aproximadamente 150 mL). El espacio muerto fisiológico incluye además a los alvéolos que sí reciben aire pero que, por algún motivo (por ejemplo, falta de perfusión sanguínea en esa zona), tampoco participan efectivamente del intercambio gaseoso -en un pulmón sano, el espacio muerto fisiológico es prácticamente igual al anatómico, pero en enfermedades que alteran la perfusión pulmonar (como el tromboembolismo pulmonar), el espacio muerto fisiológico puede aumentar considerablemente por encima del anatómico.'
      ],
      foco:[
        'Espacio muerto anatómico = vía de conducción, sin alvéolos. Espacio muerto fisiológico = anatómico + alvéolos ventilados pero mal perfundidos. La diferencia entre ambos aumenta en enfermedades que alteran la perfusión pulmonar, como el tromboembolismo.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'intercambio-transporte-gases': {
  tema:'Intercambio y transporte de gases',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:14,
  idea:'La hemoglobina no transporta oxígeno de forma pasiva: su curva de disociación cambia de forma según las condiciones del tejido, liberando más oxígeno precisamente donde y cuando más se necesita.',
  claves:['difusión alveolar','hemoglobina','curva de disociación','ventilación perfusión','2,3-DPG'],
  sigue:'control-respiracion',
  secciones:[
    {
      t:'La relación ventilación-perfusión y su importancia',
      p:[
        'El intercambio gaseoso eficiente requiere que la ventilación (el aire que llega a los alvéolos) y la perfusión (la sangre que llega a los capilares pulmonares) estén bien acopladas en cada región del pulmón -esta relación se expresa como el cociente V/Q. Un alvéolo bien ventilado pero mal perfundido (V/Q alto, tendiendo a infinito en el extremo, como en el espacio muerto) desperdicia ventilación, porque no hay suficiente sangre para intercambiar el oxígeno que llega. Un alvéolo bien perfundido pero mal ventilado (V/Q bajo, tendiendo a cero en el extremo, como en un shunt) desperdicia perfusión, porque la sangre pasa sin oxigenarse adecuadamente. El pulmón normal tiene una distribución regional de V/Q no del todo uniforme (mayor en los vértices, menor en las bases, por efecto de la gravedad sobre la perfusión), pero dentro de un rango que permite un intercambio gaseoso global eficiente.'
      ],
      foco:[
        'V/Q alto (ventilación sin perfusión) = como el espacio muerto. V/Q bajo (perfusión sin ventilación) = como un shunt. Ambos extremos desperdician la capacidad de intercambio gaseoso, cada uno por una razón distinta.'
      ]
    },
    {
      t:'La curva de disociación de la hemoglobina y su forma sigmoidea',
      p:[
        'La curva de disociación de la hemoglobina relaciona la saturación de oxígeno de la hemoglobina con la presión parcial de oxígeno en sangre, y tiene una forma sigmoidea (en "S"), no lineal, gracias a la cooperatividad entre las cuatro subunidades de la hemoglobina: cuando una subunidad se une al oxígeno, facilita que las siguientes también lo hagan. Esta forma sigmoidea es fisiológicamente ventajosa: en el rango de presiones de oxígeno del pulmón (alto), la curva es relativamente plana, así que la hemoglobina se satura eficientemente incluso con variaciones moderadas de oxígeno alveolar; en el rango de presiones de los tejidos periféricos (más bajo), la curva es empinada, de modo que pequeñas caídas de oxígeno tisular liberan grandes cantidades de oxígeno desde la hemoglobina, precisamente donde el tejido lo necesita.'
      ],
      foco:[
        'La forma sigmoidea de la curva de disociación hace que la hemoglobina se sature con facilidad en el pulmón (zona plana de la curva) y libere oxígeno con facilidad en los tejidos (zona empinada) -la forma de la curva no es casualidad, es funcionalmente óptima.'
      ]
    },
    {
      t:'Factores que desplazan la curva: liberar más oxígeno cuando el tejido lo necesita',
      p:[
        'Varios factores desplazan la curva de disociación hacia la derecha (menor afinidad de la hemoglobina por el oxígeno, facilitando su liberación a los tejidos): el aumento de temperatura, el aumento de CO2, el descenso del pH (acidosis, el efecto Bohr) y el aumento del 2,3-difosfoglicerato (2,3-DPG), un metabolito producido en el eritrocito que se acumula en condiciones de hipoxia crónica o altitud, como adaptación que facilita la entrega de oxígeno a los tejidos. Todos estos factores tienen algo en común: son precisamente las condiciones que caracterizan a un tejido metabólicamente muy activo (produciendo calor, CO2 y ácido por su metabolismo elevado) -el sistema está diseñado para liberar MÁS oxígeno exactamente donde el metabolismo lo está consumiendo más rápido, un ejemplo elegante de regulación fisiológica autoajustada.'
      ],
      foco:[
        '*Consideración clínica*: desplazamiento a la derecha (↓afinidad, ↑liberación de O2) por ↑temperatura, ↑CO2, ↓pH (efecto Bohr) y ↑2,3-DPG -todos ellos característicos de un tejido con alta actividad metabólica, que es precisamente donde más se necesita liberar oxígeno.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'control-respiracion': {
  tema:'Control de la respiración',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:12,
  idea:'El estímulo más importante para respirar, minuto a minuto, no es la falta de oxígeno sino el exceso de CO2 -una jerarquía de control que se invierte de forma peligrosa en la enfermedad pulmonar crónica avanzada.',
  claves:['centro respiratorio','quimiorreceptor','PaCO2','hipoxemia'],
  sigue:'filtracion-glomerular',
  secciones:[
    {
      t:'El CO2, no el oxígeno, es el estímulo respiratorio dominante en condiciones normales',
      p:[
        'Los quimiorreceptores centrales, localizados en el bulbo raquídeo, son extraordinariamente sensibles a los cambios de PaCO2 (indirectamente, a través del pH del líquido cefalorraquídeo, que cambia con el CO2 que difunde hacia él) y constituyen el estímulo dominante para regular la ventilación minuto a minuto en una persona sana: un pequeño aumento de PaCO2 produce un aumento marcado de la ventilación. Los quimiorreceptores periféricos (en los cuerpos carotídeos y aórticos) responden principalmente a caídas significativas de la PaO2 (hipoxemia), pero su sensibilidad es mucho menor: se necesita una caída considerable de oxígeno para que se active este estímulo de forma relevante, en comparación con lo sensible que es el sistema al CO2.'
      ],
      foco:[
        'En condiciones normales, el CO2 (vía quimiorreceptores centrales) es el estímulo respiratorio DOMINANTE. El oxígeno (vía quimiorreceptores periféricos) es un estímulo mucho menos sensible, que normalmente juega un papel secundario.'
      ]
    },
    {
      t:'Por qué esto se invierte en la enfermedad pulmonar crónica avanzada',
      p:[
        'En pacientes con retención crónica de CO2 (como en la enfermedad pulmonar obstructiva crónica avanzada), el centro respiratorio se "acostumbra" con el tiempo a niveles altos de CO2 de forma sostenida, perdiendo parte de su sensibilidad habitual a este estímulo. En estos pacientes, el estímulo respiratorio dominante puede desplazarse hacia la hipoxemia, detectada por los quimiorreceptores periféricos -un fenómeno conocido como "estímulo hipóxico". Esto tiene una consecuencia clínica práctica importante y bien conocida: administrar oxígeno suplementario en exceso a estos pacientes puede, en teoría, reducir su estímulo respiratorio remanente (el hipóxico) y empeorar la retención de CO2, razón por la que en estos pacientes se prefiere una oxigenoterapia titulada con cuidado, en vez de administrar oxígeno sin control.'
      ],
      foco:[
        '*Consideración clínica*: en la retención crónica de CO2 (EPOC avanzada), el estímulo respiratorio dominante puede desplazarse hacia la hipoxemia ("estímulo hipóxico") -de ahí la precaución clásica con el uso de oxígeno suplementario no titulado en estos pacientes.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'filtracion-glomerular': {
  tema:'Filtración glomerular y aclaramiento',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:13,
  idea:'La tasa de filtración glomerular es, en esencia, un balance de presiones a través de una membrana muy permeable, y el concepto de aclaramiento renal es el que permite estimarla de forma indirecta usando un análisis de sangre y orina, sin necesidad de medir directamente el riñón.',
  claves:['filtración glomerular','aclaramiento','creatinina','nefrona','presión de filtración'],
  sigue:'manejo-tubular-concentracion-orina',
  secciones:[
    {
      t:'Las presiones que determinan la filtración glomerular',
      p:[
        'La filtración glomerular resulta del balance neto de tres presiones a través de la membrana glomerular: la presión hidrostática dentro del capilar glomerular (que favorece la filtración, empujando líquido hacia afuera), la presión oncótica de las proteínas plasmáticas dentro del capilar (que se opone a la filtración, atrayendo líquido de vuelta) y la presión hidrostática dentro de la cápsula de Bowman (que también se opone a la filtración). La presión de filtración neta es, por tanto, la hidrostática capilar MENOS la suma de las dos presiones que se oponen. Cualquier factor que altere alguna de estas tres presiones cambia la tasa de filtración glomerular: por ejemplo, la constricción de la arteriola aferente (que lleva sangre al glomérulo) reduce la presión hidrostática capilar y, con ella, la filtración.'
      ],
      foco:[
        'Presión de filtración neta = presión hidrostática capilar (a favor) − presión oncótica capilar (en contra) − presión hidrostática de la cápsula de Bowman (en contra). Es un balance de tres presiones, no una sola.'
      ]
    },
    {
      t:'El concepto de aclaramiento: estimar la filtración sin medir el riñón directamente',
      p:[
        'El aclaramiento de una sustancia es el volumen de plasma que el riñón "limpia" por completo de esa sustancia por unidad de tiempo. Para estimar la tasa de filtración glomerular, se necesita una sustancia que se filtre libremente en el glomérulo y que NO se reabsorba ni se secrete en el túbulo -si esas condiciones se cumplen, todo lo que aparece en la orina proviene exclusivamente de la filtración, y su aclaramiento refleja directamente la tasa de filtración glomerular. La inulina cumple estas condiciones de forma casi perfecta y es el estándar de referencia en investigación, pero requiere infusión intravenosa, poco práctica clínicamente. La creatinina, un producto de desecho del metabolismo muscular que se filtra libremente y se secreta solo en una pequeña proporción adicional en el túbulo, se usa en la práctica clínica habitual como una aproximación razonable (aunque ligeramente sobreestimada, precisamente por esa secreción tubular adicional) de la tasa de filtración glomerular, calculada a partir de un simple análisis de sangre.'
      ],
      foco:[
        'Inulina = estándar de referencia (filtración pura, sin reabsorción ni secreción), poco práctica. Creatinina = aproximación clínica habitual, ligeramente sobreestimada por su pequeña secreción tubular adicional, pero suficiente para la práctica diaria.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'manejo-tubular-concentracion-orina': {
  tema:'Manejo tubular y concentración de orina',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:14,
  idea:'El riñón no solo filtra: reabsorbe activamente casi todo lo filtrado y, mediante un mecanismo de contracorriente ingenioso, puede producir una orina mucho más concentrada que el propio plasma cuando el cuerpo necesita conservar agua.',
  claves:['túbulo proximal','asa de Henle','contracorriente','ADH','aldosterona'],
  sigue:'equilibrio-acido-base',
  secciones:[
    {
      t:'El túbulo proximal: el sitio de la reabsorción masiva',
      p:[
        'El túbulo contorneado proximal reabsorbe la mayor parte de lo filtrado en el glomérulo: aproximadamente dos tercios del sodio, el agua y el cloro filtrados, y prácticamente el 100% de sustancias que el cuerpo no quiere perder en absoluto, como la glucosa y los aminoácidos (mediante transportadores específicos que, en condiciones normales, tienen capacidad de sobra para reabsorber toda la glucosa filtrada). Cuando la glucemia supera el umbral renal de reabsorción (como en la diabetes mal controlada), esos transportadores se saturan y aparece glucosa en la orina (glucosuria), un ejemplo claro de cómo un sistema de reabsorción con capacidad limitada puede "desbordarse" cuando la carga filtrada excede esa capacidad.'
      ],
      foco:[
        'El túbulo proximal reabsorbe ~2/3 del agua y sodio filtrados, y prácticamente TODA la glucosa filtrada en condiciones normales -la glucosuria aparece quiero cuando la glucemia supera el umbral de reabsorción, saturando los transportadores.'
      ]
    },
    {
      t:'El asa de Henle y el mecanismo de contracorriente',
      p:[
        'El asa de Henle, con su rama descendente (muy permeable al agua, poco a los solutos) y su rama ascendente gruesa (impermeable al agua, con reabsorción activa de sodio, potasio y cloro), genera un gradiente de concentración creciente hacia la médula renal profunda, mediante el llamado mecanismo de multiplicación por contracorriente. Este gradiente medular -cada vez más concentrado (hiperosmolar) a mayor profundidad- es el que hace posible, más adelante en el túbulo colector, concentrar la orina muy por encima de la osmolaridad del plasma, algo que no sería posible sin ese gradiente previamente establecido. Sin un asa de Henle funcional (como ocurre con ciertos diuréticos que actúan justamente ahí, los diuréticos de asa), el riñón pierde en gran parte su capacidad de concentrar la orina.'
      ],
      foco:[
        'El asa de Henle "construye" el gradiente osmótico medular (cada vez más concentrado hacia la profundidad) que después, en el túbulo colector, permite concentrar la orina -sin ese gradiente previo, no habría nada que aprovechar después.'
      ]
    },
    {
      t:'ADH y aldosterona: dos hormonas, dos tareas distintas en el túbulo distal y colector',
      p:[
        'La hormona antidiurética (ADH, vasopresina), liberada por la neurohipófisis en respuesta al aumento de la osmolaridad plasmática (detectado por osmorreceptores hipotalámicos) o a una caída significativa del volumen circulante, actúa sobre el túbulo colector insertando canales de agua (acuaporinas) que permiten que el agua se reabsorba siguiendo el gradiente osmótico medular ya construido por el asa de Henle -sin ADH, el túbulo colector es prácticamente impermeable al agua, y se produce una orina muy diluida (diabetes insípida cuando falta ADH o su receptor no responde). La aldosterona, liberada por la corteza suprarrenal en respuesta a la angiotensina II o a la hiperkalemia, actúa sobre el túbulo distal y colector promoviendo la reabsorción de sodio (con agua acompañando pasivamente) a cambio de la secreción de potasio e hidrogeniones. Son hormonas con tareas distintas y complementarias: la ADH regula principalmente cuánta AGUA se reabsorbe (concentración de la orina), mientras que la aldosterona regula principalmente cuánto SODIO se reabsorbe (y, con él, el volumen circulante y el potasio).'
      ],
      foco:[
        '*Consideración clínica*: ADH = regula la reabsorción de AGUA (vía acuaporinas), responde a la osmolaridad plasmática. Aldosterona = regula la reabsorción de SODIO (y secreción de potasio e hidrogeniones), responde al sistema renina-angiotensina y a la kalemia. Dos ejes hormonales distintos, con blancos distintos.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'equilibrio-acido-base': {
  tema:'Equilibrio ácido-base',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:14,
  idea:'El cuerpo defiende el pH sanguíneo con tres líneas de defensa de velocidad muy distinta -amortiguadores químicos instantáneos, compensación respiratoria en minutos, compensación renal en días-, y saber cuál está actuando en un gasometría es lo que permite diferenciar un trastorno agudo de uno crónico.',
  claves:['acidosis','alcalosis','bicarbonato','compensación','anión gap'],
  sigue:'fisiologia-digestiva',
  secciones:[
    {
      t:'El par bicarbonato/CO2: el amortiguador más importante de la sangre',
      p:[
        'El sistema bicarbonato/ácido carbónico (CO2 disuelto) es el amortiguador más importante de la sangre, descrito por la ecuación de Henderson-Hasselbalch, que relaciona el pH con la razón entre la concentración de bicarbonato y la presión de CO2. Su ventaja como sistema amortiguador es que ambos componentes pueden regularse de forma independiente por dos órganos distintos: el pulmón controla la PaCO2 (ajustando la ventilación en minutos), y el riñón controla la concentración de bicarbonato (ajustando su reabsorción y regeneración, en un proceso que toma días). Esta capacidad de regulación independiente por dos sistemas distintos es lo que hace tan eficaz a este amortiguador comparado con otros sistemas químicos del cuerpo.'
      ],
      foco:[
        'El pulmón regula el CO2 (rápido, minutos). El riñón regula el bicarbonato (lento, días). Son los dos "brazos" del mismo sistema amortiguador, cada uno actuando a una velocidad distinta.'
      ]
    },
    {
      t:'Compensación respiratoria contra compensación metabólica (renal)',
      p:[
        'Ante un trastorno ácido-base primario, el organismo intenta compensarlo usando el sistema NO afectado primariamente. Si el trastorno primario es metabólico (por ejemplo, una acidosis metabólica por acumulación de ácido láctico), la compensación es respiratoria y RÁPIDA: el centro respiratorio, estimulado por la acidosis, aumenta la ventilación para "soplar" más CO2 y así elevar el pH de vuelta (compensación en horas). Si el trastorno primario es respiratorio (por ejemplo, una acidosis respiratoria por hipoventilación crónica), la compensación es renal y LENTA: el riñón aumenta la reabsorción y regeneración de bicarbonato, un proceso que toma días en alcanzar su efecto completo. Esta diferencia de velocidad de compensación es clínicamente relevante: un trastorno respiratorio agudo (por ejemplo, una crisis asmática severa) no ha tenido tiempo de generar compensación renal todavía, mientras que uno crónico (EPOC de larga evolución) sí muestra compensación metabólica establecida en la gasometría.'
      ],
      foco:[
        'Trastorno metabólico → compensación respiratoria (rápida, horas). Trastorno respiratorio → compensación metabólica/renal (lenta, días). La velocidad de compensación observada en una gasometría ayuda a distinguir un cuadro agudo de uno crónico.'
      ]
    },
    {
      t:'El anión gap: distinguir tipos de acidosis metabólica',
      p:[
        'El anión gap se calcula como la diferencia entre los cationes medidos (principalmente sodio) y los aniones medidos (cloro y bicarbonato) en el plasma: Anión gap = Na+ − (Cl− + HCO3−). Representa, en la práctica, los aniones no medidos habitualmente (como proteínas, sulfatos, fosfatos, y en condiciones patológicas, lactato o cuerpos cetónicos). Una acidosis metabólica con anión gap elevado sugiere la acumulación de un ácido no medido (como en la cetoacidosis diabética, la acidosis láctica, o la intoxicación por ciertos tóxicos), donde el bicarbonato consumido para amortiguar ese ácido no se reemplaza proporcionalmente por cloro. Una acidosis metabólica con anión gap NORMAL sugiere, en cambio, una pérdida directa de bicarbonato (por ejemplo, diarrea severa) o una incapacidad renal para excretar ácido con retención de cloro compensatoria, donde el bicarbonato perdido SÍ se reemplaza proporcionalmente por cloro (acidosis hiperclorémica).'
      ],
      foco:[
        '*Consideración clínica*: anión gap ELEVADO en acidosis metabólica → sospechar acumulación de un ácido no medido (cetoacidosis, acidosis láctica, tóxicos). Anión gap NORMAL → sospechar pérdida directa de bicarbonato (diarrea) o causa renal, con acidosis hiperclorémica compensatoria.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'fisiologia-digestiva': {
  tema:'Fisiología digestiva',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:13,
  idea:'La digestión no es un proceso pasivo de "disolver la comida": es una secuencia coordinada de secreciones específicas, cada una activada en el momento justo por señales hormonales y nerviosas propias del tramo digestivo que las produce.',
  claves:['secreción gástrica','bilis','peristaltismo','absorción','enzimas pancreáticas'],
  sigue:'introduccion-endocrinologia',
  secciones:[
    {
      t:'Las tres fases de la secreción gástrica',
      p:[
        'La secreción de ácido gástrico se organiza clásicamente en tres fases. La fase cefálica ocurre incluso ANTES de que la comida llegue al estómago, activada por la vista, el olor o el pensamiento de la comida, mediada por el nervio vago -es la razón por la que "se hace agua la boca" y comienza la secreción gástrica anticipada. La fase gástrica se activa cuando el alimento distiende físicamente el estómago y sus proteínas estimulan la liberación de gastrina (de las células G del antro gástrico), que a su vez estimula a las células parietales a secretar ácido clorhídrico; es la fase que aporta la mayor proporción del ácido total secretado. La fase intestinal, cuando el quimo ácido entra al duodeno, tiene un efecto inicialmente estimulante leve y luego predominantemente INHIBITORIO sobre la secreción gástrica (mediado por hormonas como la secretina y el péptido inhibidor gástrico), un mecanismo de retroalimentación que evita que el duodeno reciba más ácido del que puede neutralizar.'
      ],
      foco:[
        'Fase cefálica (antes de comer, vía vago) → fase gástrica (distensión + gastrina, la mayor proporción de ácido) → fase intestinal (predominantemente inhibitoria, feedback negativo desde el duodeno).'
      ]
    },
    {
      t:'Bilis y enzimas pancreáticas: dos secreciones que confluyen en el duodeno',
      p:[
        'La bilis, producida en el hígado y concentrada en la vesícula biliar, no contiene enzimas digestivas: su función es emulsificar las grasas (romperlas en gotas pequeñas mediante las sales biliares, que tienen una porción hidrofílica y otra hidrofóbica), aumentando la superficie disponible para que las enzimas lipolíticas actúen eficientemente -sin bilis, la digestión de grasas es muy ineficiente, aunque las enzimas pancreáticas estén presentes en cantidad normal. El páncreas exocrino, en cambio, sí produce las enzimas digestivas propiamente dichas: amilasa (digiere carbohidratos), lipasa (digiere grasas, trabajando junto con la bilis) y varias proteasas (tripsina, quimotripsina, carboxipeptidasa, que digieren proteínas), secretadas inicialmente en forma inactiva (zimógenos) y activadas solo dentro de la luz duodenal, precisamente para evitar que el propio páncreas se autodigiera.'
      ],
      foco:[
        'Bilis = emulsifica grasas (NO tiene enzimas). Páncreas exocrino = produce las enzimas digestivas (amilasa, lipasa, proteasas), secretadas como zimógenos inactivos y activadas solo en la luz intestinal, para proteger al propio páncreas.'
      ]
    },
    {
      t:'La colecistoquinina: la hormona que coordina grasa, bilis y enzimas',
      p:[
        'La colecistoquinina (CCK), liberada por las células del duodeno en respuesta a la presencia de grasas y proteínas en la luz intestinal, coordina la respuesta digestiva a esa comida: estimula la contracción de la vesícula biliar (liberando bilis almacenada hacia el duodeno), estimula la secreción de enzimas pancreáticas, y relaja el esfínter de Oddi (facilitando el paso de bilis y jugo pancreático hacia el duodeno), además de enlentecer el vaciamiento gástrico (dando más tiempo al duodeno para procesar la carga de grasa recibida). Es un ejemplo claro de cómo una sola hormona coordina simultáneamente varios procesos digestivos distintos, todos orientados al mismo objetivo: procesar eficientemente la grasa que acaba de llegar.'
      ],
      foco:[
        '*Consideración clínica*: la CCK es la hormona clave que conecta "hay grasa en el duodeno" con la respuesta coordinada necesaria para digerirla -contracción vesicular, secreción pancreática, relajación del esfínter de Oddi, enlentecimiento gástrico, todo a la vez.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'introduccion-endocrinologia': {
  tema:'Introducción a la endocrinología',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:12,
  idea:'Casi todo el sistema endocrino se organiza sobre el mismo patrón lógico -un eje de control con retroalimentación negativa-, y entender ese patrón general permite predecir el comportamiento de ejes hormonales específicos sin memorizar cada uno como un caso aislado.',
  claves:['hormona','eje hipotálamo hipófisis','retroalimentación','receptor hormonal'],
  sigue:'curva-funcion-ventricular',
  secciones:[
    {
      t:'El eje hipotálamo-hipófisis como patrón general de control',
      p:[
        'Muchos sistemas hormonales siguen un patrón jerárquico de tres niveles: el hipotálamo secreta una hormona liberadora (u ocasionalmente inhibidora) que actúa sobre la hipófisis anterior, estimulándola (o inhibiéndola) a secretar una hormona trófica, que a su vez actúa sobre una glándula endocrina periférica, estimulándola a secretar la hormona final que actúa sobre los tejidos diana de todo el organismo. Ejemplos de este patrón de tres niveles incluyen el eje hipotálamo-hipófisis-tiroides (TRH → TSH → hormonas tiroideas), el eje hipotálamo-hipófisis-suprarrenal (CRH → ACTH → cortisol) y el eje hipotálamo-hipófisis-gonadal (GnRH → LH/FSH → hormonas sexuales). Reconocer este patrón común permite predecir el comportamiento general de cualquier eje nuevo que se estudie, en lugar de memorizar cada uno como un sistema aislado y distinto.'
      ],
      foco:[
        'Patrón de tres niveles: hipotálamo (hormona liberadora) → hipófisis anterior (hormona trófica) → glándula periférica (hormona final). Se repite en los ejes tiroideo, suprarrenal y gonadal -un mismo patrón lógico aplicado a distintos sistemas.'
      ]
    },
    {
      t:'Retroalimentación negativa: el mecanismo que mantiene los niveles hormonales estables',
      p:[
        'La mayoría de los ejes hormonales se autorregulan mediante retroalimentación negativa: la hormona final del eje (por ejemplo, la hormona tiroidea o el cortisol) actúa de vuelta sobre el hipotálamo y la hipófisis, INHIBIENDO la secreción de las hormonas liberadora y trófica correspondientes cuando sus niveles ya son suficientemente altos, evitando así una secreción excesiva sin límite. Este mecanismo es la base para interpretar los estudios hormonales: si una hormona final está baja y su hormona trófica está alta (por ejemplo, TSH alta con hormona tiroidea baja), el problema está en la propia glándula periférica, que no responde adecuadamente al estímulo trófico (hipotiroidismo primario); si tanto la hormona final como la trófica están bajas, el problema probablemente está en el hipotálamo o la hipófisis (hipotiroidismo central), que no están generando el estímulo necesario.'
      ],
      foco:[
        '*Consideración clínica*: hormona trófica ALTA + hormona final BAJA = falla de la glándula PERIFÉRICA (el eje intenta compensar sin éxito). Ambas BAJAS = falla del hipotálamo/hipófisis (el eje no está generando el estímulo). Este razonamiento aplica a cualquier eje de tres niveles.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'curva-funcion-ventricular': {
  tema:'Curva de función ventricular y contractilidad',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:12,
  idea:'La curva de función ventricular es, en esencia, la ley de Frank-Starling dibujada en un gráfico, y saber leer cómo se desplaza esa curva (hacia arriba, hacia abajo, o simplemente a lo largo de sí misma) es la clave para distinguir un cambio de precarga de un cambio real de contractilidad.',
  claves:['contractilidad','curva de Frank-Starling','inotropismo','ley del corazón'],
  sigue:'circulacion-coronaria-regional',
  secciones:[
    {
      t:'Moverse A LO LARGO de la curva contra desplazar la curva completa',
      p:[
        'La curva de función ventricular (o curva de Frank-Starling) grafica el volumen sistólico (o el trabajo cardíaco) en el eje vertical contra la precarga (representada por el volumen o la presión de llenado ventricular) en el eje horizontal. Un cambio en la PRECARGA mueve al corazón a lo largo de la MISMA curva (más precarga, más arriba en la misma curva, sin cambiar su forma). Un cambio en la CONTRACTILIDAD, en cambio, desplaza a toda la curva hacia arriba (mayor contractilidad, la misma precarga ahora produce más volumen sistólico) o hacia abajo (menor contractilidad, la misma precarga ahora produce menos volumen sistólico). Distinguir estos dos tipos de cambio -movimiento a lo largo de la curva contra desplazamiento de la curva completa- es la clave conceptual de todo el tema.'
      ],
      foco:[
        'Cambio de PRECARGA = movimiento a lo largo de la MISMA curva. Cambio de CONTRACTILIDAD = la curva ENTERA se desplaza hacia arriba o abajo. Confundir ambos es el error conceptual más frecuente de este tema.'
      ]
    },
    {
      t:'Inotropismo: qué aumenta y qué disminuye la contractilidad',
      p:[
        'La contractilidad (o inotropismo) es la capacidad intrínseca del músculo cardíaco de generar fuerza, independiente de la precarga. Aumenta (inotropismo positivo) con la estimulación simpática (catecolaminas, actuando sobre receptores beta-1), ciertos fármacos (digoxina, dobutamina) y el aumento moderado de la frecuencia cardíaca (efecto de escalera o Bowditch). Disminuye (inotropismo negativo) con la estimulación parasimpática (aunque su efecto directo sobre la contractilidad ventricular es menor que sobre la frecuencia), la hipoxia, la acidosis, y ciertos fármacos (betabloqueantes, bloqueadores de canales de calcio no dihidropiridínicos). En la insuficiencia cardíaca con función sistólica reducida, la curva de función ventricular está desplazada hacia ABAJO de forma crónica: para cualquier nivel de precarga, el corazón genera menos volumen sistólico que un corazón sano, lo que explica por qué estos pacientes con frecuencia tienen presiones de llenado elevadas (alta precarga, en un intento compensatorio de "empujar" la curva) sin lograr un gasto cardíaco adecuado.'
      ],
      foco:[
        '*Consideración clínica*: en la insuficiencia cardíaca sistólica, la curva está desplazada hacia ABAJO de forma crónica -por eso aumentar la precarga (más líquidos) no compensa proporcionalmente, y el tratamiento se enfoca en mejorar la contractilidad o reducir la poscarga, no solo en manejar el volumen.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'circulacion-coronaria-regional': {
  tema:'Circulación coronaria y regional',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:12,
  idea:'El corazón es su propio cliente más exigente: a diferencia de casi todo el resto del cuerpo, el músculo cardíaco recibe la mayor parte de su propia irrigación durante la DIÁSTOLE, no durante la sístole -un detalle que explica directamente por qué la taquicardia extrema puede producir isquemia incluso sin obstrucción coronaria.',
  claves:['circulación coronaria','autorregulación del flujo','reserva coronaria','flujo regional'],
  sigue:'volumenes-capacidades-pulmonares',
  secciones:[
    {
      t:'Por qué el flujo coronario ocurre principalmente en diástole',
      p:[
        'Durante la sístole, la contracción del músculo ventricular comprime mecánicamente a los vasos coronarios que lo atraviesan (especialmente los del ventrículo izquierdo, de pared más gruesa), reduciendo drásticamente el flujo sanguíneo a través de ellos en ese momento, pese a que es precisamente cuando la presión aórtica (la fuerza que empuja la sangre hacia las coronarias) es más alta. Por eso, a diferencia de la mayoría de los lechos vasculares del cuerpo, el flujo coronario del ventrículo izquierdo ocurre principalmente durante la DIÁSTOLE, cuando el músculo se relaja y deja de comprimir a los vasos que lo atraviesan. Esta dependencia del tiempo diastólico tiene una consecuencia clínica directa: la taquicardia extrema acorta desproporcionadamente el tiempo de diástole (mucho más que el de sístole), reduciendo el tiempo disponible para el flujo coronario y pudiendo producir isquemia miocárdica incluso en ausencia de obstrucción coronaria estructural, solo por el acortamiento del tiempo de llenado coronario.'
      ],
      foco:[
        '*Consideración clínica*: la taquicardia extrema acorta la diástole desproporcionadamente, reduciendo el tiempo de flujo coronario -una de las razones por las que una taquiarritmia sostenida puede producir angina o isquemia incluso sin ninguna obstrucción coronaria estructural.'
      ]
    },
    {
      t:'Autorregulación y reserva coronaria',
      p:[
        'La circulación coronaria tiene una capacidad notable de autorregulación: dentro de un amplio rango de presión de perfusión, el flujo coronario se mantiene relativamente constante mediante ajustes locales del tono vascular, adaptándose principalmente a la demanda metabólica del propio músculo cardíaco (el flujo coronario aumenta cuando aumenta el consumo miocárdico de oxígeno, como durante el ejercicio). La reserva coronaria es la capacidad del flujo coronario de aumentar por encima de su nivel basal ante una mayor demanda (por ejemplo, durante el ejercicio o el estrés). Una estenosis coronaria progresiva reduce primero esta reserva (el flujo basal en reposo puede seguir siendo normal, porque la vasodilatación compensatoria distal a la estenosis mantiene un flujo adecuado en reposo), y solo cuando la estenosis es muy severa el flujo basal mismo se ve comprometido -esto explica por qué la angina típicamente aparece primero con el esfuerzo (cuando se agota la reserva coronaria ya reducida) y solo en etapas más avanzadas aparece también en reposo.'
      ],
      foco:[
        'La estenosis coronaria progresiva consume primero la RESERVA coronaria (angina de esfuerzo) antes de comprometer el flujo BASAL en reposo (angina de reposo, enfermedad más avanzada) -la reserva es el "colchón" que se agota primero.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'volumenes-capacidades-pulmonares': {
  tema:'Volúmenes y capacidades pulmonares',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:12,
  idea:'Los volúmenes pulmonares son piezas que se combinan entre sí para formar las capacidades pulmonares, y la espirometría solo puede medir directamente algunas de esas piezas -saber cuáles requiere técnicas adicionales es la clave para interpretar correctamente un estudio funcional respiratorio.',
  claves:['volumen corriente','capacidad vital','volumen residual','espirometría'],
  sigue:'fisiologia-ejercicio',
  secciones:[
    {
      t:'Los cuatro volúmenes pulmonares básicos',
      p:[
        'Los cuatro volúmenes pulmonares básicos, que no se superponen entre sí, son: el volumen corriente (el aire que entra y sale en una respiración normal en reposo, ~500 mL), el volumen de reserva inspiratoria (el aire adicional que se puede inspirar forzadamente después de una inspiración normal), el volumen de reserva espiratoria (el aire adicional que se puede espirar forzadamente después de una espiración normal), y el volumen residual (el aire que queda en el pulmón incluso después de una espiración forzada máxima, que nunca puede expulsarse por completo -si se pudiera vaciar por completo, el pulmón colapsaría totalmente entre cada respiración, lo cual sería mecánicamente muy costoso).'
      ],
      foco:[
        'Los cuatro volúmenes básicos (corriente, reserva inspiratoria, reserva espiratoria, residual) NO se superponen: son piezas independientes que, sumadas de distintas formas, dan las capacidades pulmonares.'
      ]
    },
    {
      t:'Las capacidades pulmonares: combinaciones de dos o más volúmenes',
      p:[
        'Las capacidades pulmonares se obtienen sumando dos o más volúmenes básicos. La capacidad vital es la suma del volumen de reserva inspiratoria, el volumen corriente y el volumen de reserva espiratoria -es decir, todo el aire que se puede movilizar voluntariamente, desde una inspiración máxima hasta una espiración máxima, SIN incluir el volumen residual. La capacidad pulmonar total es la capacidad vital MÁS el volumen residual -es decir, absolutamente todo el aire que puede contener el pulmón, incluyendo lo que nunca puede expulsarse. La capacidad residual funcional es la suma del volumen de reserva espiratoria y el volumen residual -el aire que queda en el pulmón al final de una espiración NORMAL (no forzada), el punto de equilibrio entre la tendencia del pulmón a colapsarse y la tendencia de la caja torácica a expandirse.'
      ],
      foco:[
        'Capacidad vital = reserva inspiratoria + corriente + reserva espiratoria (SIN residual). Capacidad pulmonar total = capacidad vital + residual (TODO el aire posible). Capacidad residual funcional = reserva espiratoria + residual (lo que queda tras una espiración normal, no forzada).'
      ]
    },
    {
      t:'Por qué la espirometría NO puede medir el volumen residual directamente',
      p:[
        'La espirometría convencional mide volúmenes de aire que el paciente efectivamente MOVILIZA (inspira o espira) a través del espirómetro. Como el volumen residual es, por definición, el aire que NUNCA sale del pulmón (ni siquiera con la espiración forzada máxima), la espirometría simple no puede medirlo directamente -y, en consecuencia, tampoco puede medir directamente ninguna capacidad que INCLUYA al volumen residual: ni la capacidad residual funcional ni la capacidad pulmonar total. Para medir estos parámetros se necesitan técnicas adicionales, como la dilución de helio o la pletismografía corporal, que sí permiten estimar el volumen de aire que queda atrapado en el pulmón sin necesidad de que el paciente lo exhale.'
      ],
      foco:[
        '*Consideración clínica*: la espirometría simple NO mide el volumen residual ni ninguna capacidad que lo incluya (capacidad residual funcional, capacidad pulmonar total) -para eso se necesitan técnicas adicionales como pletismografía o dilución de helio, un dato clave para interpretar qué SÍ y qué NO reporta una espirometría de rutina.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'fisiologia-ejercicio': {
  tema:'Fisiología del ejercicio',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:12,
  idea:'El ejercicio pone a prueba, de forma coordinada, prácticamente todos los sistemas de regulación fisiológica estudiados por separado en otros temas -cardiovascular, respiratorio, endocrino-, y entender cómo se integran es más revelador que estudiar cada respuesta aislada.',
  claves:['adaptación cardiovascular al ejercicio','consumo de oxígeno máximo','umbral anaeróbico'],
  sigue:'motilidad-gastrointestinal-esfinteres',
  secciones:[
    {
      t:'Adaptaciones cardiovasculares agudas durante el ejercicio',
      p:[
        'Durante el ejercicio dinámico, el gasto cardíaco aumenta considerablemente, principalmente por el aumento de la frecuencia cardíaca (mediado por retirada del tono vagal y aumento del tono simpático) y, en menor proporción, por el aumento del volumen sistólico (favorecido por el aumento del retorno venoso, gracias a la bomba muscular esquelética y la venoconstricción, que aumentan la precarga según la ley de Frank-Starling, y por el aumento de la contractilidad por estimulación simpática). Simultáneamente, ocurre una redistribución regional del flujo sanguíneo: vasodilatación local en el músculo esquelético activo (por acumulación de metabolitos vasodilatadores como el CO2, el potasio y la adenosina) y vasoconstricción relativa en territorios menos prioritarios en ese momento, como el esplácnico y el renal, para priorizar el flujo hacia el músculo que está trabajando.'
      ],
      foco:[
        'Durante el ejercicio: ↑gasto cardíaco (principalmente por ↑frecuencia cardíaca), vasodilatación LOCAL en el músculo activo (por metabolitos), vasoconstricción relativa en territorios esplácnico y renal -una redistribución de flujo, no un aumento uniforme en todo el cuerpo.'
      ]
    },
    {
      t:'Consumo de oxígeno máximo (VO2 máx) como medida de capacidad aeróbica',
      p:[
        'El consumo de oxígeno máximo (VO2 máx) es la tasa máxima a la que el cuerpo puede consumir oxígeno durante un ejercicio progresivamente intenso, y es considerado el mejor indicador único de la capacidad cardiovascular y aeróbica de una persona. Depende del gasto cardíaco máximo alcanzable (que a su vez depende de la frecuencia cardíaca máxima y el volumen sistólico máximo) y de la capacidad de los tejidos periféricos de extraer y utilizar ese oxígeno. El entrenamiento aeróbico regular aumenta el VO2 máx principalmente al aumentar el volumen sistólico máximo (por hipertrofia cardíaca fisiológica y mayor volumen sanguíneo), más que al aumentar la frecuencia cardíaca máxima, que de hecho tiende a disminuir ligeramente con el entrenamiento (bradicardia del atleta, reflejo de un mayor tono vagal en reposo y durante el ejercicio submáximo).'
      ],
      foco:[
        'El entrenamiento aeróbico mejora el VO2 máx principalmente por ↑volumen sistólico (corazón más eficiente por latido), no por ↑frecuencia cardíaca máxima -de hecho, la frecuencia cardíaca de reposo y submáxima tiende a BAJAR con el entrenamiento (bradicardia del atleta).'
      ]
    },
    {
      t:'El umbral anaeróbico: cuando el metabolismo aeróbico ya no basta',
      p:[
        'El umbral anaeróbico es la intensidad de ejercicio a partir de la cual el metabolismo anaeróbico (glucólisis anaeróbica, con producción de ácido láctico) comienza a contribuir de forma creciente a la producción de energía, porque el aporte de oxígeno a través del metabolismo aeróbico ya no es suficiente para cubrir toda la demanda energética del músculo en ese nivel de intensidad. Por debajo del umbral, el ejercicio puede sostenerse durante periodos prolongados (el metabolismo aeróbico es sostenible); por encima de él, la acumulación progresiva de lactato y el descenso del pH muscular limitan la duración del esfuerzo, y el ejercicio solo puede mantenerse por periodos breves. El entrenamiento de resistencia desplaza el umbral anaeróbico hacia intensidades más altas, permitiendo sostener un ritmo de ejercicio más intenso antes de depender significativamente del metabolismo anaeróbico.'
      ],
      foco:[
        '*Consideración clínica*: el umbral anaeróbico marca el punto donde el ejercicio deja de ser sostenible a largo plazo, por la acumulación creciente de lactato. El entrenamiento de resistencia desplaza ese umbral hacia intensidades más altas, no elimina la existencia del umbral en sí.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'motilidad-gastrointestinal-esfinteres': {
  tema:'Motilidad gastrointestinal y esfínteres',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:12,
  idea:'El tubo digestivo tiene su propio "marcapasos" eléctrico independiente del sistema nervioso central, y los esfínteres que lo dividen en compartimentos funcionan como válvulas unidireccionales cuya disfunción explica síntomas tan distintos como el reflujo y el estreñimiento.',
  claves:['esfínter esofágico','esfínter pilórico','complejo motor migratorio','reflejo gastrocólico'],
  sigue:'miccion-funcion-vesical',
  secciones:[
    {
      t:'Los esfínteres gastrointestinales como válvulas de control regional',
      p:[
        'El tubo digestivo está dividido funcionalmente por varios esfínteres, cada uno regulando el paso de contenido entre dos compartimentos con funciones distintas. El esfínter esofágico inferior, situado entre el esófago y el estómago, se mantiene normalmente contraído (tónicamente cerrado) para prevenir el reflujo del contenido gástrico ácido hacia el esófago, relajándose transitoriamente para permitir el paso del bolo alimenticio durante la deglución; su incompetencia (por relajaciones inapropiadas o tono basal reducido) es la base fisiopatológica de la enfermedad por reflujo gastroesofágico. El esfínter pilórico, entre el estómago y el duodeno, regula el vaciamiento gástrico, permitiendo el paso de quimo hacia el duodeno en cantidades controladas que ese segmento pueda procesar adecuadamente, sin sobrecargarlo.'
      ],
      foco:[
        'El esfínter esofágico inferior normalmente está CERRADO (previniendo reflujo) y se abre solo transitoriamente para la deglución. Su incompetencia es la base fisiopatológica de la enfermedad por reflujo gastroesofágico.'
      ]
    },
    {
      t:'El complejo motor migratorio: la "limpieza" del intestino entre comidas',
      p:[
        'Entre comidas (en el periodo interdigestivo, cuando el tubo digestivo está relativamente vacío), aparece un patrón de motilidad característico llamado complejo motor migratorio: ondas de contracción intensa que se originan en el estómago y se propagan progresivamente a lo largo del intestino delgado, cada 90 a 120 minutos aproximadamente, con la función de "barrer" los restos de alimento no digerido, secreciones y bacterias hacia el colon, manteniendo relativamente estéril y limpio al intestino delgado entre comidas. Este patrón se interrumpe y desaparece en cuanto se ingiere alimento, reemplazado por el patrón de motilidad postprandial (contracciones de segmentación, que mezclan el contenido sin propagarlo demasiado, favoreciendo la digestión y absorción). Una motilidad interdigestiva alterada (por ejemplo, en ciertas neuropatías o tras cirugías abdominales) se ha relacionado con el sobrecrecimiento bacteriano del intestino delgado, precisamente porque se pierde ese mecanismo periódico de "barrido".'
      ],
      foco:[
        '*Consideración clínica*: el complejo motor migratorio (interdigestivo, cada 90-120 min) mantiene limpio al intestino delgado entre comidas. Su alteración se asocia a sobrecrecimiento bacteriano del intestino delgado, por pérdida de ese mecanismo de "barrido" periódico.'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
},

'miccion-funcion-vesical': {
  tema:'Micción y función vesical',
  bloque:'Fisiología II', programa:'unirm', cuatri:8, min:12,
  idea:'La micción es uno de los pocos actos fisiológicos que combina un reflejo autónomo involuntario con un control voluntario aprendido -y entender cómo se coordinan ambos es la clave para distinguir los distintos tipos de disfunción vesical.',
  claves:['reflejo miccional','vejiga','esfínter uretral','control voluntario de la micción'],
  sigue:'metabolismo-glucogeno',
  secciones:[
    {
      t:'El reflejo miccional: un arco reflejo autónomo con control voluntario superpuesto',
      p:[
        'A medida que la vejiga se llena, los receptores de estiramiento de su pared detectan la distensión progresiva y envían señales aferentes hacia la médula espinal sacra (S2-S4), que activan el reflejo miccional: contracción del músculo detrusor (la capa muscular de la pared vesical, inervada por el parasimpático) y relajación coordinada del esfínter uretral interno (músculo liso, bajo control autónomo). Este reflejo autónomo básico, por sí solo, produciría una micción automática cada vez que la vejiga se llena lo suficiente -como ocurre normalmente en el lactante, que todavía no tiene control voluntario aprendido. El control voluntario, aprendido durante la infancia, se ejerce sobre el esfínter uretral EXTERNO (músculo estriado, bajo control somático voluntario), que puede contraerse voluntariamente para posponer la micción incluso cuando el reflejo autónomo ya se activó, y relajarse voluntariamente para permitir la micción en el momento socialmente apropiado.'
      ],
      foco:[
        'Esfínter uretral INTERNO = músculo liso, autónomo, involuntario. Esfínter uretral EXTERNO = músculo estriado, control voluntario aprendido. El control consciente de la micción se ejerce sobre el externo, no sobre el interno.'
      ]
    },
    {
      t:'Vejiga neurogénica: cómo el nivel de la lesión predice el tipo de disfunción',
      p:[
        'Una lesión medular por encima del centro sacro de la micción (S2-S4) -por ejemplo, una lesión medular torácica alta- interrumpe el control voluntario descendente sobre el reflejo, pero el arco reflejo sacro básico permanece intacto: el resultado es una vejiga espástica o hiperrefléxica, que se vacía de forma refleja e involuntaria en cuanto se llena lo suficiente, sin ningún control voluntario posible, porque la señal de "puedo posponer esto" nunca llega desde el cerebro. Una lesión que afecta directamente al centro sacro de la micción o a los nervios periféricos que lo conectan con la vejiga (por ejemplo, en ciertas neuropatías periféricas o lesiones de cola de caballo), en cambio, interrumpe el propio arco reflejo: el resultado es una vejiga flácida o arrefléxica, que se sobredistiende progresivamente sin contraerse de forma eficaz, con retención urinaria e incontinencia por rebosamiento.'
      ],
      foco:[
        '*Consideración clínica*: lesión medular ALTA (por encima de S2-S4) → vejiga espástica/hiperrefléxica (el reflejo sacro está intacto pero sin control voluntario). Lesión que afecta directamente el arco sacro (S2-S4 o nervios periféricos) → vejiga flácida/arrefléxica (retención, incontinencia por rebosamiento).'
      ]
    }
  ],
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.'
}

});
