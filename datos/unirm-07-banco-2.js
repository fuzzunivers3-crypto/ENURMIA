/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 7, SEGUNDA TANDA
   Cubre los temas de unirm-07-apuntes-2.js. Mismo criterio que
   la primera: se pregunta el mecanismo, y la explicacion tiene
   que servir para estudiar aunque se falle.

   El reparto sigue los creditos del pensum: Anatomia I y
   Fisiologia I pesan mas porque ocupan mas horas.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== ANATOMIA I ===================== */
{
  id:'U7-A-Q06', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Columna vertebral', sub:'Identificación regional',
  dif:1, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Se recibe una vértebra aislada que presenta agujeros en sus apófisis transversas. ¿A qué región pertenece y qué pasa por esos agujeros?',
  ops:[
    'Torácica; por ellos pasan los nervios intercostales',
    'Cervical; por ellos asciende la arteria vertebral',
    'Lumbar; por ellos pasan las raíces de la cola de caballo',
    'Sacra; por ellos salen los nervios sacros'
  ],
  ok:1,
  clave:'El agujero transverso es exclusivo de las vértebras cervicales.',
  exp:'El agujero transverso es el rasgo que identifica sin margen de duda a una vértebra cervical: ninguna otra región lo tiene. Por él asciende la arteria vertebral, que entra habitualmente por el agujero de C6 y sube hasta el agujero magno, donde se une con la del lado contrario para formar la arteria basilar. Esa relación explica por qué un traumatismo cervical o una manipulación brusca del cuello pueden comprometer la circulación posterior del encéfalo.',
  no:{
    0:'Las torácicas se identifican por sus carillas costales. Los nervios intercostales discurren bajo cada costilla, no por las apófisis transversas.',
    2:'Las lumbares son las más voluminosas y carecen tanto de agujero transverso como de carillas costales. Las raíces de la cola de caballo van dentro del conducto raquídeo.',
    3:'El sacro tiene agujeros sacros anteriores y posteriores, pero no agujeros transversos en apófisis.'
  },
  trampa:'Buscar el tamaño en vez del rasgo distintivo. El tamaño orienta, pero lo que identifica es la presencia o ausencia de agujero transverso y de carilla costal.',
  obj:'Identificar la región de una vértebra por su rasgo estructural exclusivo.',
  ref:'Moore, Anatomía con orientación clínica. Rouvière, Anatomía Humana.',
  tags:['agujero transverso','vértebra cervical','arteria vertebral']
},
{
  id:'U7-A-Q07', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Columna vertebral', sub:'Terminación medular',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Se va a realizar una punción lumbar a un paciente adulto para obtener líquido cefalorraquídeo.',
  enunciado:'¿Por qué se elige un espacio situado por debajo de L2?',
  ops:[
    'Porque por encima de ese nivel el conducto raquídeo es demasiado estrecho',
    'Porque la médula espinal termina hacia L1-L2 y por debajo solo hay raíces flotando en líquido',
    'Porque el ligamento amarillo solo puede atravesarse a ese nivel',
    'Porque por encima de L2 no hay líquido cefalorraquídeo'
  ],
  ok:1,
  clave:'La médula acaba antes que el conducto: debajo está la cola de caballo.',
  exp:'Durante el desarrollo, la columna vertebral crece más que la médula espinal, de modo que en el adulto la médula termina en el cono medular, a la altura aproximada de L1-L2, mientras que el conducto raquídeo continúa hasta el sacro. Por debajo de ese nivel el saco dural contiene únicamente las raíces de la cola de caballo, que flotan en líquido cefalorraquídeo y se apartan al contacto de la aguja en lugar de lesionarse. Por eso puncionar ahí permite obtener líquido con un riesgo muy bajo de daño medular. En el recién nacido la médula termina más abajo, hacia L3, y el punto de punción se elige en consecuencia.',
  no:{
    0:'El conducto raquídeo no es más estrecho por arriba; de hecho es más amplio en las regiones cervical y lumbar.',
    2:'El ligamento amarillo se atraviesa en cualquier espacio interlaminar, no solo por debajo de L2.',
    3:'Hay líquido cefalorraquídeo a lo largo de todo el espacio subaracnoideo. El problema de puncionar más arriba es la médula, no la ausencia de líquido.'
  },
  trampa:'Pensar que médula y columna acaban en el mismo sitio. La diferencia de crecimiento entre ambas es justamente lo que hace posible el procedimiento.',
  obj:'Fundamentar anatómicamente el nivel de la punción lumbar.',
  ref:'Moore, Anatomía con orientación clínica.',
  tags:['cono medular','cola de caballo','punción lumbar','L1-L2']
},
{
  id:'U7-A-Q08', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Columna vertebral', sub:'Disco intervertebral',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las hernias del disco intervertebral tienden a producirse en dirección posterolateral y no hacia atrás por la línea media?',
  ops:[
    'Porque el núcleo pulposo está desplazado hacia un lado desde el nacimiento',
    'Porque el ligamento longitudinal posterior refuerza la línea media y el anillo cede a los lados',
    'Porque la médula espinal ocupa la línea media e impide el paso del material herniado',
    'Porque las apófisis articulares bloquean la salida posterior directa'
  ],
  ok:1,
  clave:'La línea media está reforzada; el punto débil queda a los lados.',
  exp:'El ligamento longitudinal posterior recorre la cara posterior de los cuerpos vertebrales reforzando la parte central del anillo fibroso. Como consecuencia, cuando el anillo se debilita, el material del núcleo pulposo encuentra menos resistencia en la zona posterolateral, que es precisamente donde emergen las raíces nerviosas. De ahí que la hernia discal produzca típicamente un dolor irradiado siguiendo el territorio de la raíz comprimida en lugar de un dolor exclusivamente local: la anatomía del ligamento decide la dirección, y la dirección decide el síntoma.',
  no:{
    0:'El núcleo pulposo ocupa una posición central, algo posterior, pero no está lateralizado de forma congénita.',
    2:'A nivel lumbar, donde las hernias son más frecuentes, ya no hay médula sino raíces; y en cualquier caso la médula no actúa como barrera mecánica.',
    3:'Las apófisis articulares limitan el movimiento vertebral pero no están situadas de modo que bloqueen la salida del material discal.'
  },
  trampa:'Estudiar los ligamentos como una lista sin función. Aquí la posición de un ligamento explica directamente el cuadro clínico.',
  obj:'Relacionar la disposición ligamentosa con el patrón de herniación discal.',
  ref:'Moore, Anatomía con orientación clínica.',
  tags:['hernia discal','ligamento longitudinal posterior','núcleo pulposo']
},
{
  id:'U7-A-Q09', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Columna vertebral', sub:'Curvaturas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Las lordosis cervical y lumbar se consideran curvaturas secundarias porque:',
  ops:[
    'Aparecen después del nacimiento, con el desarrollo motor del lactante',
    'Son menos pronunciadas que las cifosis',
    'Solo existen en la posición de bipedestación y desaparecen al acostarse',
    'Se forman por la acción de los discos intervertebrales, no de los cuerpos'
  ],
  ok:0,
  clave:'Primaria = presente desde la vida fetal. Secundaria = adquirida con el desarrollo.',
  exp:'Las curvaturas primarias, torácica y sacra, son cifosis y están presentes desde la vida fetal: corresponden a la curvatura única en C con la que el embrión y el feto se pliegan. Las secundarias son las lordosis cervical y lumbar, y aparecen con el desarrollo motor: la cervical cuando el lactante empieza a sostener la cabeza, hacia los tres meses, y la lumbar cuando comienza a sentarse y a caminar, hacia el final del primer año. La alternancia de cuatro curvaturas convierte la columna en un resorte capaz de absorber cargas.',
  no:{
    1:'La magnitud de la curvatura no es el criterio de clasificación; lo es el momento de aparición.',
    2:'Las curvaturas son estructurales y se mantienen con independencia de la postura, aunque se acentúen o atenúen con ella.',
    3:'Tanto los cuerpos vertebrales como los discos contribuyen a la forma de las curvaturas.'
  },
  trampa:'Suponer que "secundaria" significa menos importante. Significa que se adquiere después.',
  obj:'Distinguir curvaturas primarias y secundarias por su origen.',
  ref:'Moore, Anatomía con orientación clínica.',
  tags:['lordosis','cifosis','curvatura secundaria','desarrollo motor']
},

/* ===================== FISIOLOGIA I ===================== */
{
  id:'U7-F-Q05', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Transporte de membrana', sub:'Saturación',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Al representar la velocidad de entrada de una sustancia frente a su concentración externa se obtiene una curva que se aplana a concentraciones altas. ¿Qué indica ese comportamiento?',
  ops:[
    'Que el transporte se produce por difusión simple a través de la bicapa',
    'Que el transporte está mediado por proteínas, cuyo número es limitado',
    'Que la sustancia es liposoluble',
    'Que el transporte consume necesariamente ATP'
  ],
  ok:1,
  clave:'Solo se satura lo que depende de un número finito de transportadores.',
  exp:'La difusión simple no se satura: como la molécula atraviesa directamente la bicapa lipídica, cuanto mayor sea el gradiente mayor será el flujo, y la relación es lineal sin techo. En cambio, cualquier transporte mediado por proteínas —difusión facilitada o transporte activo— depende de un número finito de moléculas transportadoras, de modo que al aumentar la concentración llega un punto en el que todas están ocupadas y la velocidad alcanza un máximo. La saturación, junto con la especificidad y la posibilidad de inhibición competitiva, son las tres señales de que hay proteína de por medio.',
  no:{
    0:'La difusión simple daría una recta sin techo, no una curva que se aplana.',
    2:'La liposolubilidad favorece precisamente la difusión simple, que no se satura.',
    3:'La saturación indica participación de proteína, pero no distingue entre difusión facilitada, que no gasta ATP, y transporte activo, que sí.'
  },
  trampa:'Saltar de "se satura" a "es activo". La saturación solo dice que hay proteína, no si se gasta energía.',
  obj:'Interpretar la curva de saturación como evidencia de transporte mediado.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['saturación','difusión facilitada','transporte mediado']
},
{
  id:'U7-F-Q06', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Transporte de membrana', sub:'Tonicidad',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Una solución de urea con la misma osmolaridad que el plasma se considera hipotónica. ¿Por qué?',
  ops:[
    'Porque la urea tiene menor peso molecular que el sodio',
    'Porque la urea atraviesa libremente la membrana celular y no genera un gradiente sostenido',
    'Porque la urea se metaboliza rápidamente en el interior de la célula',
    'Porque la osmolaridad medida sobrestima siempre la concentración real'
  ],
  ok:1,
  clave:'Solo el soluto que NO cruza puede retener agua.',
  exp:'La osmolaridad cuenta todas las partículas disueltas, crucen o no la membrana. La tonicidad cuenta solo las que no la atraviesan, porque son las únicas capaces de mantener un gradiente y, por tanto, de mover agua de forma sostenida. La urea atraviesa con facilidad la membrana celular: se equilibra a ambos lados y deja de ejercer efecto osmótico. El resultado es que una solución isosmótica de urea se comporta como agua libre, entra en la célula y la hincha hasta poder lisarla. De ahí que en la práctica clínica la decisión sobre si una solución hinchará o encogerá las células dependa de su tonicidad y no de su osmolaridad.',
  no:{
    0:'El efecto osmótico depende del número de partículas, no de su peso molecular.',
    2:'El metabolismo intracelular de la urea no es lo que explica su comportamiento osmótico; lo explica su permeabilidad.',
    3:'La osmolaridad se mide correctamente; el problema es que no informa sobre la permeabilidad del soluto.'
  },
  trampa:'Usar osmolaridad y tonicidad como sinónimos. La diferencia está exactamente en la permeabilidad del soluto.',
  obj:'Diferenciar osmolaridad de tonicidad y aplicar la distinción.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['tonicidad','osmolaridad','urea','ósmosis']
},
{
  id:'U7-F-Q07', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Unión neuromuscular', sub:'Liberación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la señal inmediata que desencadena la liberación de acetilcolina en el terminal presináptico?',
  ops:[
    'La salida de potasio durante la repolarización',
    'La entrada de calcio por canales dependientes de voltaje',
    'La unión de acetilcolina a receptores presinápticos',
    'La hidrólisis de ATP por la bomba de sodio y potasio'
  ],
  ok:1,
  clave:'Sin entrada de calcio no hay liberación, llegue el impulso que llegue.',
  exp:'La despolarización del terminal presináptico abre canales de calcio dependientes de voltaje. El calcio que entra actúa sobre las proteínas que median la fusión de las vesículas sinápticas con la membrana, y esa fusión es la que vierte la acetilcolina a la hendidura. El calcio es por tanto el traductor entre la señal eléctrica y la señal química: si se impide su entrada, el potencial de acción sigue llegando pero no se libera neurotransmisor. Esto explica por qué las alteraciones de estos canales, como ocurre en el síndrome de Eaton-Lambert, producen debilidad muscular.',
  no:{
    0:'La salida de potasio repolariza la membrana y contribuye a cerrar el proceso, no a iniciarlo.',
    2:'Existen receptores presinápticos moduladores, pero no son el mecanismo desencadenante de la liberación.',
    3:'La bomba mantiene los gradientes de base; no es el disparador de la exocitosis.'
  },
  trampa:'Asumir que basta con que llegue el potencial de acción. El paso obligatorio es la entrada de calcio.',
  obj:'Identificar el papel del calcio en el acoplamiento entre impulso y liberación.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['acetilcolina','calcio','exocitosis','terminal presináptico']
},
{
  id:'U7-F-Q08', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Unión neuromuscular', sub:'Farmacología básica',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un trabajador agrícola presenta miosis, sialorrea, broncorrea, fasciculaciones y debilidad tras manipular un insecticida sin protección.',
  enunciado:'¿En qué punto de la unión neuromuscular actúa el tóxico responsable?',
  ops:[
    'Impide la liberación de acetilcolina desde las vesículas',
    'Inhibe la acetilcolinesterasa, de modo que la acetilcolina no se degrada',
    'Bloquea de forma competitiva el receptor nicotínico',
    'Destruye los receptores nicotínicos mediante anticuerpos'
  ],
  ok:1,
  clave:'Exceso de acetilcolina en todas partes: el problema es que no se apaga.',
  exp:'Los organofosforados inhiben la acetilcolinesterasa, la enzima que hidroliza la acetilcolina en la hendidura sináptica. Al no degradarse, la acetilcolina se acumula y estimula de forma continua tanto los receptores muscarínicos como los nicotínicos. De ahí el cuadro: los efectos muscarínicos dan miosis, sialorrea, broncorrea, bradicardia y diarrea, y los nicotínicos dan fasciculaciones y, por estimulación mantenida, debilidad y parálisis. Reconocer que se trata de un exceso de estímulo y no de un déficit es lo que orienta el tratamiento con atropina, que bloquea los efectos muscarínicos.',
  no:{
    0:'Ese es el mecanismo de la toxina botulínica, que produce parálisis flácida sin signos de exceso colinérgico como la sialorrea o la miosis.',
    2:'Los bloqueantes competitivos del receptor, como el curare, producen parálisis sin estimulación previa ni efectos muscarínicos.',
    3:'La destrucción de receptores por anticuerpos es la miastenia gravis, que cursa con debilidad fluctuante y sin signos colinérgicos.'
  },
  trampa:'Ver debilidad y pensar de inmediato en bloqueo. Aquí la debilidad es consecuencia de un exceso de estimulación, no de un déficit.',
  obj:'Localizar el punto de acción de un tóxico en la unión neuromuscular a partir de la clínica.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['organofosforado','acetilcolinesterasa','crisis colinérgica']
},
{
  id:'U7-F-Q09', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Transporte de membrana', sub:'Transporte activo secundario',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'La absorción intestinal de glucosa mediante el cotransportador sodio-glucosa es un ejemplo de transporte activo secundario porque:',
  ops:[
    'La glucosa se mueve en contra de su gradiente aprovechando el gradiente de sodio creado por la bomba',
    'Consume ATP directamente en cada ciclo de transporte',
    'La glucosa y el sodio se mueven ambos a favor de sus respectivos gradientes',
    'Utiliza un canal iónico en lugar de un transportador'
  ],
  ok:0,
  clave:'La energía no viene del ATP en ese momento, sino del gradiente que otra bomba pagó antes.',
  exp:'El cotransportador sodio-glucosa mueve la glucosa hacia el interior del enterocito en contra de su gradiente de concentración, algo que exige energía. Esa energía no procede de la hidrólisis directa de ATP en el propio transportador, sino del gradiente de sodio: el sodio entra a favor de su gradiente y arrastra a la glucosa consigo. Ese gradiente lo mantiene la bomba de sodio y potasio de la membrana basolateral, que sí consume ATP. Por eso se llama secundario: la energía es de origen metabólico, pero se aplica de forma indirecta, almacenada en forma de gradiente iónico.',
  no:{
    1:'Si consumiera ATP directamente sería transporte activo primario, como la propia bomba de sodio y potasio.',
    2:'El sodio sí va a favor de su gradiente, pero la glucosa va en contra: esa es la razón de que haga falta energía.',
    3:'Se trata de un transportador que sufre cambios conformacionales, no de un canal de paso libre.'
  },
  trampa:'Buscar el ATP en el propio transportador. En el transporte secundario el ATP se gastó antes y en otro sitio.',
  obj:'Explicar el transporte activo secundario a partir del gradiente de sodio.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['cotransporte','sodio-glucosa','transporte activo secundario']
},

/* ===================== HISTOLOGIA ===================== */
{
  id:'U7-H-Q04', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido nervioso', sub:'Mielinización',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la diferencia fundamental entre el oligodendrocito y la célula de Schwann en cuanto a la formación de mielina?',
  ops:[
    'El oligodendrocito mieliniza segmentos de varios axones; la célula de Schwann, un solo segmento de un solo axón',
    'El oligodendrocito actúa en el sistema periférico y la célula de Schwann en el central',
    'Solo la célula de Schwann produce verdadera mielina',
    'El oligodendrocito no forma nódulos de Ranvier'
  ],
  ok:0,
  clave:'Uno para muchos en el central; una por segmento en el periférico.',
  exp:'El oligodendrocito, propio del sistema nervioso central, emite varias prolongaciones y mieliniza con ellas segmentos de axones distintos: una sola célula atiende a varios. La célula de Schwann, del sistema nervioso periférico, se enrolla alrededor de un único segmento de un único axón. Esa diferencia estructural tiene una consecuencia práctica de primer orden: tras una lesión, la célula de Schwann sobrevive, prolifera y forma un tubo que guía la regeneración del axón, mientras que el oligodendrocito no lo hace y la mielina central contiene además moléculas que inhiben el crecimiento axonal. Por eso el nervio periférico regenera y la médula espinal no.',
  no:{
    1:'Es exactamente al revés: el oligodendrocito es central y la célula de Schwann, periférica.',
    2:'Ambas producen mielina verdadera; lo que cambia es la relación numérica con los axones.',
    3:'Los nódulos de Ranvier existen en ambos sistemas: son los espacios entre segmentos mielinizados.'
  },
  trampa:'Quedarse en "los dos hacen mielina". La diferencia numérica es la que explica la regeneración.',
  obj:'Relacionar la organización de la mielinización con la capacidad de regeneración.',
  ref:'Ross, Histología. Texto y Atlas. Junqueira, Histología Básica.',
  tags:['oligodendrocito','célula de Schwann','mielina','regeneración']
},
{
  id:'U7-H-Q05', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido nervioso', sub:'Glía',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de las células gliales NO deriva del tubo neural?',
  ops:['El astrocito','El oligodendrocito','La microglía','El epéndimo'],
  ok:2,
  clave:'La microglía es un macrófago: viene del mesodermo, no del neuroectodermo.',
  exp:'Astrocitos, oligodendrocitos y células ependimarias derivan del neuroectodermo del tubo neural, igual que las neuronas. La microglía es la excepción: procede del mesodermo, del linaje de los monocitos y macrófagos, y coloniza el sistema nervioso durante el desarrollo. Funcionalmente es el macrófago residente del tejido nervioso, y ante un daño se activa, prolifera y fagocita restos celulares. Ese origen distinto no es un dato suelto: explica su comportamiento inmunitario, ajeno al del resto de la glía.',
  no:{
    0:'El astrocito es de origen neuroectodérmico y es la glía más abundante del sistema nervioso central.',
    1:'El oligodendrocito deriva también del tubo neural y produce mielina central.',
    3:'El epéndimo deriva del neuroepitelio que reviste la luz del tubo neural, de la que conserva la posición.'
  },
  trampa:'Agrupar toda la glía bajo un mismo origen. La microglía se estudia con las demás pero no comparte linaje con ellas.',
  obj:'Reconocer el origen embriológico diferencial de la microglía.',
  ref:'Ross, Histología. Texto y Atlas.',
  tags:['microglía','mesodermo','glía','origen embrionario']
},
{
  id:'U7-H-Q06', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido nervioso', sub:'Soma neuronal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'La sustancia de Nissl que se observa en el soma neuronal corresponde a:',
  ops:[
    'Acúmulos de retículo endoplásmico rugoso y ribosomas libres',
    'Depósitos de lipofuscina acumulados con la edad',
    'Agregados de neurofilamentos del citoesqueleto',
    'Vesículas de neurotransmisor en espera de transporte'
  ],
  ok:0,
  clave:'Es retículo rugoso agrupado: por eso se tiñe de basófilo.',
  exp:'La sustancia de Nissl corresponde a cúmulos de retículo endoplásmico rugoso junto con ribosomas libres. Su basofilia se debe al ARN ribosómico, que se tiñe intensamente con colorantes básicos, y su abundancia refleja la intensa síntesis proteica que mantiene la neurona. Un detalle útil: la sustancia de Nissl está en el soma y en las dendritas, pero no en el axón ni en el cono axónico, lo que permite identificar el origen del axón en una preparación. Tras una lesión axonal, el soma sufre cromatólisis, es decir, la dispersión de esta sustancia, que es un signo morfológico de daño neuronal.',
  no:{
    1:'La lipofuscina es un pigmento pardo de desgaste que se acumula con la edad y no es basófilo.',
    2:'Los neurofilamentos son proteínas del citoesqueleto y no se tiñen como la sustancia de Nissl.',
    3:'Las vesículas de neurotransmisor se concentran en los terminales sinápticos, no en el soma.'
  },
  trampa:'Memorizar el nombre sin saber qué es. Saber que es retículo rugoso explica de golpe su basofilia, su distribución y la cromatólisis.',
  obj:'Identificar la naturaleza y el significado de la sustancia de Nissl.',
  ref:'Ross, Histología. Texto y Atlas. Junqueira, Histología Básica.',
  tags:['sustancia de Nissl','retículo rugoso','basofilia','cromatólisis']
},

/* ===================== BIOQUIMICA I ===================== */
{
  id:'U7-B-Q04', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Ciclo de Krebs', sub:'Productos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la principal aportación energética del ciclo de Krebs?',
  ops:[
    'La síntesis directa de grandes cantidades de ATP',
    'La producción de NADH y FADH2, que alimentarán la cadena respiratoria',
    'La reducción directa del oxígeno molecular a agua',
    'La generación de un gradiente de protones en la membrana interna'
  ],
  ok:1,
  clave:'Krebs fabrica poder reductor, no ATP.',
  exp:'Por cada acetil-CoA, el ciclo produce 3 NADH, 1 FADH2, 1 GTP y 2 CO2. Su rendimiento en enlaces de alta energía directos es mínimo: un solo GTP. Lo verdaderamente valioso son los transportadores reducidos, que llevarán sus electrones a la cadena respiratoria, donde se generará el gradiente de protones que la ATP sintasa usará para fabricar la mayor parte del ATP celular. Entender esta división del trabajo evita el error de buscar en el ciclo un rendimiento energético que no tiene.',
  no:{
    0:'El ciclo produce un solo GTP por vuelta: la síntesis masiva de ATP ocurre después, en la fosforilación oxidativa.',
    2:'La reducción del oxígeno a agua ocurre en el complejo IV de la cadena respiratoria, no en el ciclo.',
    3:'El gradiente de protones lo generan los complejos de la cadena respiratoria al bombear protones, no las reacciones del ciclo.'
  },
  trampa:'Atribuir al ciclo el ATP que en realidad produce la cadena respiratoria. Son dos etapas distintas con funciones distintas.',
  obj:'Situar el papel del ciclo de Krebs dentro del metabolismo oxidativo.',
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.',
  tags:['ciclo de Krebs','NADH','poder reductor','acetil-CoA']
},
{
  id:'U7-B-Q05', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Cadena respiratoria', sub:'Desacoplantes',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Un agente desacoplante de la fosforilación oxidativa produce, en comparación con un inhibidor de la cadena respiratoria:',
  ops:[
    'Detención del consumo de oxígeno y ausencia de síntesis de ATP',
    'Mantenimiento o aumento del consumo de oxígeno, sin síntesis de ATP y con producción de calor',
    'Aumento de la síntesis de ATP sin consumo de oxígeno',
    'Detención del ciclo de Krebs sin afectar a la cadena respiratoria'
  ],
  ok:1,
  clave:'El desacoplante no para la cadena: le quita el freno y desperdicia la energía como calor.',
  exp:'Un inhibidor como el cianuro bloquea el transporte de electrones: la cadena se detiene, deja de consumirse oxígeno y no se sintetiza ATP. Un desacoplante como el dinitrofenol actúa de otra manera: permeabiliza la membrana interna a los protones, que vuelven a la matriz sin pasar por la ATP sintasa. El gradiente se disipa, así que no se fabrica ATP, pero la cadena sigue funcionando e incluso se acelera, porque ya no la frena el gradiente acumulado. La energía se libera como calor. Este mecanismo existe de forma fisiológica en el tejido adiposo pardo, donde la termogenina desacopla deliberadamente para producir calor en el recién nacido.',
  no:{
    0:'Esa es la descripción de un inhibidor, no de un desacoplante.',
    2:'No es posible sintetizar ATP por esta vía sin transporte de electrones, que es lo que consume oxígeno.',
    3:'El desacoplante actúa sobre la membrana interna; el ciclo de Krebs incluso puede acelerarse al reoxidarse rápidamente el NADH.'
  },
  trampa:'Meter inhibidores y desacoplantes en el mismo saco porque ambos impiden fabricar ATP. Se distinguen por el consumo de oxígeno.',
  obj:'Diferenciar inhibición y desacoplamiento por sus consecuencias medibles.',
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.',
  tags:['desacoplante','dinitrofenol','termogenina','fosforilación oxidativa']
},
{
  id:'U7-B-Q06', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Proteínas', sub:'Niveles de estructura',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Durante la desnaturalización de una proteína por calor, ¿qué nivel estructural se conserva y por qué?',
  ops:[
    'La estructura terciaria, porque los puentes disulfuro resisten el calor',
    'La estructura primaria, porque los enlaces peptídicos son covalentes y no se rompen',
    'La estructura cuaternaria, porque las subunidades se mantienen unidas',
    'Ninguno: la desnaturalización destruye todos los niveles'
  ],
  ok:1,
  clave:'La desnaturalización rompe interacciones débiles, no enlaces covalentes.',
  exp:'La desnaturalización desorganiza el plegamiento rompiendo las interacciones débiles que lo sostienen: puentes de hidrógeno, interacciones hidrofóbicas y puentes salinos. Se pierden por tanto las estructuras secundaria, terciaria y cuaternaria, y con ellas la función, porque la actividad de una proteína depende de su forma tridimensional. La estructura primaria se conserva intacta, ya que está sostenida por enlaces peptídicos covalentes que el calor moderado no rompe. Romperlos requeriría hidrólisis, que es un proceso distinto.',
  no:{
    0:'Los puentes disulfuro son covalentes y pueden resistir, pero la estructura terciaria en conjunto depende de muchas interacciones débiles que sí se pierden.',
    2:'La estructura cuaternaria es de las primeras en perderse, porque depende de interacciones no covalentes entre subunidades.',
    3:'La primaria se conserva: es precisamente lo que distingue la desnaturalización de la hidrólisis.'
  },
  trampa:'Confundir desnaturalizar con destruir. La cadena sigue entera; lo que se perdió es la forma.',
  obj:'Precisar qué niveles estructurales afecta la desnaturalización.',
  ref:'Lehninger, Principios de Bioquímica.',
  tags:['desnaturalización','estructura primaria','enlace peptídico']
},
{
  id:'U7-B-Q07', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Proteínas', sub:'Cooperatividad',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'La curva de disociación del oxígeno de la hemoglobina es sigmoidea mientras que la de la mioglobina es hiperbólica. ¿A qué se debe?',
  ops:[
    'A que la hemoglobina tiene mayor afinidad absoluta por el oxígeno',
    'A que la hemoglobina tiene estructura cuaternaria y sus subunidades cooperan entre sí',
    'A que la mioglobina contiene hierro en estado férrico',
    'A que la mioglobina se encuentra en el músculo y la hemoglobina en la sangre'
  ],
  ok:1,
  clave:'Sigmoidea = cooperatividad = más de una subunidad.',
  exp:'La hemoglobina está formada por cuatro subunidades, es decir, tiene estructura cuaternaria. La unión de oxígeno a una de ellas provoca un cambio conformacional que facilita la unión en las restantes: eso es la cooperatividad, y es lo que da a su curva la forma en S. La mioglobina es monomérica, no puede cooperar consigo misma, y su curva es una hipérbola simple. La diferencia tiene sentido funcional: la forma sigmoidea permite a la hemoglobina cargar oxígeno casi por completo en el pulmón y liberar una fracción importante en los tejidos con un cambio moderado de presión parcial, mientras que la mioglobina, cuya función es almacenar, conserva una afinidad alta y constante.',
  no:{
    0:'La mioglobina tiene de hecho mayor afinidad por el oxígeno que la hemoglobina; lo relevante aquí es la forma de la curva, no la afinidad.',
    2:'En ambas el hierro funcional está en estado ferroso; si pasara a férrico perdería la capacidad de unir oxígeno.',
    3:'La localización explica para qué sirve cada una, pero no por qué la curva tiene esa forma.'
  },
  trampa:'Explicar la forma de la curva por la afinidad. La forma la determina el número de sitios que cooperan, no cuánto se une.',
  obj:'Relacionar estructura cuaternaria, cooperatividad y forma de la curva.',
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.',
  tags:['hemoglobina','mioglobina','cooperatividad','curva sigmoidea']
},

/* ===================== EMBRIOLOGIA ===================== */
{
  id:'U7-E-Q04', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Segunda semana', sub:'Sincitiotrofoblasto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué estructura produce la gonadotropina coriónica humana que detectan las pruebas de embarazo?',
  ops:['El citotrofoblasto','El sincitiotrofoblasto','El hipoblasto','El cuerpo lúteo'],
  ok:1,
  clave:'La capa externa, multinucleada, que invade el endometrio.',
  exp:'En la segunda semana el trofoblasto se diferencia en dos capas: el citotrofoblasto, interno y formado por células individuales con límites definidos, y el sincitiotrofoblasto, externo, multinucleado y sin límites celulares, que es el que invade activamente el endometrio materno. El sincitiotrofoblasto produce la gonadotropina coriónica humana, cuya función es mantener el cuerpo lúteo para que siga secretando progesterona y no se produzca la menstruación. Esa hormona aparece en sangre y orina maternas poco después de la implantación, y es la base de las pruebas de embarazo.',
  no:{
    0:'El citotrofoblasto es la capa proliferativa que aporta células al sincitio, pero no es el productor hormonal principal.',
    2:'El hipoblasto participa en estructuras extraembrionarias, no en la producción de gonadotropina coriónica.',
    3:'El cuerpo lúteo es el receptor de la señal: responde a la gonadotropina produciendo progesterona, pero no la fabrica.'
  },
  trampa:'Confundir quién produce la hormona con quién responde a ella. El cuerpo lúteo es el destinatario, no el emisor.',
  obj:'Identificar el origen de la gonadotropina coriónica y su función.',
  ref:'Langman, Embriología Médica. Moore, Embriología Clínica.',
  tags:['sincitiotrofoblasto','hCG','implantación','cuerpo lúteo']
},
{
  id:'U7-E-Q05', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Periodos del desarrollo', sub:'Teratogenia',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿En qué periodo del desarrollo es máximo el riesgo de que un teratógeno produzca malformaciones estructurales graves?',
  ops:[
    'Durante las dos primeras semanas tras la fecundación',
    'Entre la tercera y la octava semana',
    'Entre la novena y la vigésima semana',
    'Durante el último trimestre'
  ],
  ok:1,
  clave:'El periodo de organogénesis es el de máxima vulnerabilidad estructural.',
  exp:'Entre la tercera y la octava semana se produce la organogénesis: es cuando se forman los esbozos de los órganos y cuando una agresión puede alterar de manera irreversible su arquitectura. Antes de ese periodo, durante las dos primeras semanas, rige la ley del todo o nada: las células son pluripotentes y pueden sustituirse entre sí, de modo que una agresión o bien mata al embrión o bien no deja secuelas estructurales. Después de la octava semana comienza el periodo fetal, dedicado sobre todo al crecimiento y a la maduración funcional, en el que los teratógenos producen más alteraciones funcionales y de crecimiento que malformaciones groseras. El sistema nervioso constituye la excepción, porque sigue siendo vulnerable durante todo el embarazo.',
  no:{
    0:'En ese periodo rige la ley del todo o nada: no es cuando aparecen las malformaciones estructurales.',
    2:'Es ya periodo fetal: predominan las alteraciones funcionales y del crecimiento.',
    3:'En el último trimestre el riesgo de malformación estructural es mínimo, aunque persista el de daño funcional.'
  },
  trampa:'Pensar que cuanto más temprano, peor. En las dos primeras semanas el efecto es todo o nada, no malformación.',
  obj:'Situar el periodo crítico de la teratogénesis en la línea del tiempo del desarrollo.',
  ref:'Langman, Embriología Médica. Moore, Embriología Clínica.',
  tags:['teratógeno','organogénesis','periodo crítico','todo o nada']
},
{
  id:'U7-E-Q06', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Primera semana', sub:'Blastocisto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'En el blastocisto, ¿qué destino tiene cada una de sus dos poblaciones celulares?',
  ops:[
    'El embrioblasto forma la placenta y el trofoblasto forma el embrión',
    'El embrioblasto forma el embrión y el trofoblasto forma la porción fetal de la placenta',
    'Ambos contribuyen por igual al embrión y a la placenta',
    'El trofoblasto se reabsorbe antes de la implantación'
  ],
  ok:1,
  clave:'Masa celular interna al embrión; capa externa a la placenta.',
  exp:'El blastocisto presenta la primera separación de destinos del desarrollo. El embrioblasto o masa celular interna, situado en un polo, dará lugar al embrión propiamente dicho, organizándose primero en epiblasto e hipoblasto. El trofoblasto, la capa periférica, dará lugar a la porción fetal de la placenta y a las membranas extraembrionarias, y es además el responsable de la implantación y de la producción de gonadotropina coriónica. Esta separación temprana es la base de que puedan estudiarse las vellosidades coriónicas para obtener información genética fetal sin tocar al embrión.',
  no:{
    0:'Es exactamente al revés: se invierten los papeles de ambas poblaciones.',
    2:'Los destinos están claramente separados desde este estadio; no hay contribución equivalente.',
    3:'El trofoblasto no se reabsorbe: es precisamente el que ejecuta la implantación e invade el endometrio.'
  },
  trampa:'Confundir los nombres. Ayuda el significado: "trofo" alude a nutrición, y la placenta es el órgano nutricio.',
  obj:'Distinguir los destinos del embrioblasto y del trofoblasto.',
  ref:'Langman, Embriología Médica. Moore, Embriología Clínica.',
  tags:['blastocisto','embrioblasto','trofoblasto','implantación']
},

/* ===================== MICROBIOLOGIA MEDICA ===================== */
{
  id:'U7-M-Q05', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Bacilos gramnegativos', sub:'Identificación',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Se aísla en un urocultivo un bacilo gramnegativo que produce colonias rosadas en agar de MacConkey y resulta oxidasa negativo.',
  enunciado:'¿Qué se puede afirmar del microorganismo?',
  ops:[
    'Es una enterobacteria fermentadora de lactosa; Escherichia coli es la posibilidad más frecuente',
    'Es Pseudomonas aeruginosa, por su capacidad de crecer en MacConkey',
    'Es una Salmonella, porque las colonias rosadas indican producción de ácido sulfhídrico',
    'No es una enterobacteria, porque estas son siempre oxidasa positivas'
  ],
  ok:0,
  clave:'Rosa en MacConkey = fermenta lactosa. Oxidasa negativa = enterobacteria.',
  exp:'El agar de MacConkey contiene lactosa y un indicador de pH: las bacterias que la fermentan producen ácido y sus colonias viran a rosa. Todas las enterobacterias son oxidasa negativas, de modo que ese resultado confirma el grupo. Entre las enterobacterias fermentadoras de lactosa están Escherichia coli, Klebsiella y Enterobacter, y en el contexto de una infección urinaria E. coli es con diferencia la más frecuente. Con dos pruebas sencillas se ha acotado el diagnóstico de forma muy considerable.',
  no:{
    1:'Pseudomonas es oxidasa positiva y no fermenta lactosa: sus colonias quedarían incoloras en MacConkey.',
    2:'Salmonella no fermenta lactosa, así que daría colonias incoloras. La producción de ácido sulfhídrico se detecta en otros medios.',
    3:'Es al revés: las enterobacterias son oxidasa negativas, y ese es justamente el dato que las agrupa.'
  },
  trampa:'Olvidar que la oxidasa es la prueba que separa enterobacterias del resto de bacilos gramnegativos.',
  obj:'Aplicar las pruebas de lactosa y oxidasa en la identificación de un bacilo gramnegativo.',
  ref:'Murray, Microbiología Médica. Jawetz, Microbiología Médica.',
  tags:['MacConkey','lactosa','oxidasa','Escherichia coli']
},
{
  id:'U7-M-Q06', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Bacilos gramnegativos', sub:'Pseudomonas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué caracteriza a Pseudomonas aeruginosa como patógeno?',
  ops:[
    'Es un patógeno primario que infecta preferentemente a personas sanas',
    'Es un oportunista que afecta a quemados, pacientes con fibrosis quística y neutropénicos, con resistencia intrínseca elevada',
    'Es una enterobacteria fermentadora de lactosa y oxidasa negativa',
    'Es un anaerobio estricto que solo crece en ausencia de oxígeno'
  ],
  ok:1,
  clave:'Ataca a quien tiene la barrera o la defensa rotas.',
  exp:'Pseudomonas aeruginosa es un bacilo gramnegativo aerobio estricto, oxidasa positivo y no fermentador de lactosa, que produce pigmentos responsables del característico color verde azulado de sus colonias. Su relevancia clínica procede de dos rasgos: es un oportunista que aprovecha barreras rotas o defensas disminuidas, y posee una resistencia intrínseca notable a numerosos antibióticos, debida a la baja permeabilidad de su membrana externa y a bombas de expulsión. Por eso aparece de forma característica en el gran quemado, en la colonización respiratoria crónica de la fibrosis quística, en el paciente neutropénico y en las infecciones asociadas a dispositivos.',
  no:{
    0:'No es un patógeno primario habitual en el huésped sano e inmunocompetente con barreras íntegras.',
    2:'No es enterobacteria: es oxidasa positiva y no fermenta lactosa.',
    3:'Es aerobio estricto, justo lo contrario de un anaerobio.'
  },
  trampa:'Estudiar Pseudomonas junto a las enterobacterias por ser bacilo gramnegativo. La oxidasa las separa desde el primer paso.',
  obj:'Caracterizar a Pseudomonas aeruginosa y su perfil de huésped.',
  ref:'Murray, Microbiología Médica. Jawetz, Microbiología Médica.',
  tags:['Pseudomonas','oportunista','oxidasa positiva','resistencia intrínseca']
},
{
  id:'U7-M-Q07', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Estructura bacteriana', sub:'Cápsula',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la principal función de la cápsula bacteriana como factor de virulencia?',
  ops:[
    'Permitir el movimiento de la bacteria hacia los nutrientes',
    'Dificultar la fagocitosis por parte de las células del huésped',
    'Sintetizar las toxinas que la bacteria secreta',
    'Conferir resistencia al calor y a la desecación extrema'
  ],
  ok:1,
  clave:'La cápsula no ataca: esconde.',
  exp:'La cápsula es una capa de polisacárido situada por fuera de la pared bacteriana. Su principal contribución a la virulencia consiste en dificultar la fagocitosis: impide que los receptores del fagocito reconozcan y se adhieran a la superficie bacteriana. Por eso los microorganismos capsulados, como el neumococo, Haemophilus influenzae tipo b, Neisseria meningitidis y Klebsiella pneumoniae, son especialmente peligrosos en personas sin bazo o con deficiencias de complemento. Y por eso mismo las vacunas frente a ellos se dirigen contra el polisacárido capsular: los anticuerpos lo opsonizan y devuelven al fagocito la capacidad de reconocerlo.',
  no:{
    0:'El movimiento depende de los flagelos, no de la cápsula.',
    2:'Las toxinas se sintetizan en el citoplasma bacteriano; la cápsula no tiene función sintética.',
    3:'La resistencia extrema al calor y a la desecación es propia de las endosporas, no de la cápsula.'
  },
  trampa:'Buscar en cada factor de virulencia un mecanismo agresivo. Algunos, como la cápsula, funcionan por evasión y no por ataque.',
  obj:'Explicar el papel de la cápsula en la virulencia y su relación con la vacunación.',
  ref:'Murray, Microbiología Médica. Jawetz, Microbiología Médica.',
  tags:['cápsula','fagocitosis','capsulados','vacuna polisacárida']
},

/* ===================== ESTADISTICA I ===================== */
{
  id:'U7-S-Q04', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Muestreo', sub:'Sesgo',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Un estudio detecta un sesgo de selección en su muestra. ¿Qué efecto tiene aumentar considerablemente el tamaño muestral?',
  ops:[
    'Corrige el sesgo, porque la muestra se aproxima a la población',
    'No corrige el sesgo: solo reduce el error aleatorio y estima con más precisión un valor equivocado',
    'Convierte el sesgo en error aleatorio',
    'Elimina la necesidad de calcular intervalos de confianza'
  ],
  ok:1,
  clave:'El sesgo es un error sistemático: no se diluye con más datos.',
  exp:'Conviene separar dos fuentes de error. El error aleatorio procede de la variabilidad del muestreo y disminuye al aumentar el tamaño de la muestra: es lo que reflejan los intervalos de confianza. El sesgo es un error sistemático que desplaza el resultado siempre en la misma dirección, y por tanto no se atenúa con más observaciones. Una muestra sesgada de diez mil personas está tan equivocada como una de cien; la diferencia es que la primera estima ese valor erróneo con más precisión, lo que puede resultar incluso más peligroso al transmitir una falsa sensación de solidez. El sesgo se combate en el diseño, no en el análisis.',
  no:{
    0:'Aumentar el tamaño no aproxima la muestra a la población si el mecanismo de selección excluye sistemáticamente a ciertos individuos.',
    2:'El sesgo no cambia de naturaleza al aumentar la muestra: sigue siendo sistemático.',
    3:'Los intervalos de confianza siguen siendo necesarios para cuantificar el error aleatorio, que existe siempre.'
  },
  trampa:'Confiar en el tamaño de la muestra como garantía de validez. Un número grande mejora la precisión, no la veracidad.',
  obj:'Distinguir error aleatorio de sesgo y sus respectivas soluciones.',
  ref:'Dawson y Trapp, Bioestadística Médica.',
  tags:['sesgo de selección','error aleatorio','tamaño muestral','validez']
},
{
  id:'U7-S-Q05', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Muestreo', sub:'Tipos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Se quiere estudiar la prevalencia de anemia en una universidad cuyos estudiantes se reparten de forma muy desigual entre carreras, y se desea garantizar que todas las carreras queden representadas en proporción a su tamaño.',
  enunciado:'¿Qué tipo de muestreo resulta más adecuado?',
  ops:['Aleatorio simple','Estratificado','Por conglomerados','Por conveniencia'],
  ok:1,
  clave:'Se quiere asegurar representación de subgrupos definidos de antemano.',
  exp:'El muestreo estratificado divide la población en estratos homogéneos respecto a una variable relevante —aquí, la carrera— y extrae después una muestra de cada uno, habitualmente en proporción a su tamaño. Es la técnica adecuada cuando se quiere garantizar que los subgrupos, incluidos los minoritarios, queden representados: el aleatorio simple podría, por puro azar, dejar fuera o infrarrepresentar a una carrera pequeña. Como ventaja añadida, el estratificado suele proporcionar estimaciones más precisas cuando la variable de estratificación se relaciona con lo que se mide.',
  no:{
    0:'El aleatorio simple es válido pero no garantiza la representación proporcional de cada carrera, que es justamente lo que se pide.',
    2:'El muestreo por conglomerados seleccionaría carreras enteras y estudiaría a todos sus miembros, dejando otras fuera por completo.',
    3:'El muestreo por conveniencia no es probabilístico y es una fuente clásica de sesgo de selección.'
  },
  trampa:'Elegir el aleatorio simple por ser el más riguroso en abstracto. El mejor muestreo es el que resuelve el problema concreto del estudio.',
  obj:'Seleccionar la técnica de muestreo adecuada al objetivo del estudio.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['muestreo estratificado','representatividad','estratos']
},
{
  id:'U7-S-Q06', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Probabilidad', sub:'Independencia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Para calcular la probabilidad de que ocurran dos sucesos A y B multiplicando sus probabilidades individuales, ¿qué condición debe cumplirse?',
  ops:[
    'Que sean mutuamente excluyentes',
    'Que sean independientes, es decir, que la ocurrencia de uno no modifique la probabilidad del otro',
    'Que ambos tengan la misma probabilidad',
    'Que la suma de sus probabilidades sea igual a 1'
  ],
  ok:1,
  clave:'Multiplicar directamente exige independencia.',
  exp:'La regla del producto en su forma simple, multiplicar las probabilidades individuales, solo es válida cuando los sucesos son independientes: cuando saber que ocurrió uno no cambia la probabilidad del otro. Si existe dependencia hay que emplear la probabilidad condicional. Es un requisito que se pasa por alto con frecuencia y que en medicina rara vez se cumple: los hallazgos de un mismo paciente suelen estar correlacionados entre sí, de modo que multiplicar sus probabilidades como si fueran independientes produce estimaciones equivocadas, normalmente demasiado bajas.',
  no:{
    0:'Mutuamente excluyentes significa que no pueden darse a la vez, lo que implica que la probabilidad conjunta es cero. Esa condición se aplica a la regla de la suma.',
    2:'Que compartan la misma probabilidad es irrelevante para poder multiplicarlas.',
    3:'Que sumen 1 describe sucesos complementarios, no independientes.'
  },
  trampa:'Confundir independiente con mutuamente excluyente. Son conceptos distintos y de hecho incompatibles entre sí cuando ambas probabilidades son mayores que cero.',
  obj:'Reconocer la condición de independencia necesaria para la regla del producto.',
  ref:'Dawson y Trapp, Bioestadística Médica.',
  tags:['independencia','regla del producto','probabilidad condicional']
}

]);
