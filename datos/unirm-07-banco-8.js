/* ============================================================
   UNIRMIA — BANCO 8, CUATRIMESTRE 7 — HISTOLOGÍA (ampliación)
   Segundo lote de 21 preguntas (U7-H-Q30 a Q50). Completa las 50
   de Histología: tejido nervioso, sangre, uniones celulares, ciclo
   celular, piel, sistema cardiovascular y tejido linfoide.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ---------- Tejido nervioso ---------- */
{
  id:'U7-H-Q30', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido nervioso', sub:'Tipos de neurona',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Las neuronas sensitivas de los ganglios de la raíz dorsal, con un solo proceso que se divide en una rama periférica y otra central, se clasifican como:',
  ops:['Seudounipolares','Multipolares','Bipolares','Anaxónicas'],
  ok:0,
  clave:'Multipolar = la mayoría (motoneuronas). Bipolar = retina, olfato. Seudounipolar = ganglios sensitivos.',
  exp:'En las neuronas seudounipolares, los dos procesos embrionarios se fusionan y salen del soma como un solo tallo, que enseguida se divide en una rama periférica, que capta el estímulo, y otra central, que lo lleva a la médula. Se encuentran en los ganglios de la raíz dorsal y en los ganglios sensitivos de los pares craneales. Las multipolares, con muchas dendritas y un axón, son las más frecuentes; las bipolares, con un axón y una dendrita, se ubican en la retina y en el epitelio olfatorio.',
  no:{
    1:'Las multipolares tienen varias dendritas y un axón que salen de puntos distintos del soma, como las motoneuronas.',
    2:'Las bipolares tienen dos procesos que salen de polos opuestos del soma, como en la retina.',
    3:'Las anaxónicas carecen de axón verdadero y son poco comunes; no son las neuronas de los ganglios sensitivos.'
  },
  trampa:'Llamarlas unipolares. Las verdaderas unipolares apenas existen en el ser humano; estas son seudounipolares porque en el embrión eran bipolares.',
  obj:'Clasificar las neuronas según su morfología y localizar cada tipo.',
  ref:'Junqueira, Histología Básica, cap. 9.',
  tags:['neurona','seudounipolar','ganglio','tejido nervioso']
},
{
  id:'U7-H-Q31', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido nervioso', sub:'Regeneración nerviosa',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Tras un corte limpio del nervio mediano en el antebrazo, un paciente recibe una sutura microquirúrgica. En los meses siguientes recupera poco a poco la sensibilidad, con una progresión de aproximadamente un milímetro al día. En cambio, un paciente con sección de la médula espinal no recupera función.',
  enunciado:'¿Qué diferencia celular explica la regeneración del nervio periférico y no del sistema nervioso central?',
  ops:['Las células de Schwann forman bandas que guían el crecimiento de los axones; en el SNC, los oligodendrocitos y la cicatriz glial lo impiden','Las neuronas periféricas se dividen y las centrales no','El nervio periférico no tiene mielina','El SNC no tiene neuronas motoras'],
  ok:0,
  clave:'Schwann: degeneración walleriana y bandas de Büngner que guían la regeneración. SNC: inhibidores de la mielina y cicatriz glial.',
  exp:'Tras un corte, el segmento distal del axón degenera (degeneración walleriana), y las células de Schwann proliferan y forman columnas, las bandas de Büngner, que guían al axón regenerante desde el muñón proximal hasta su destino, a un ritmo de 1-3 mm por día. En el sistema nervioso central, los oligodendrocitos y los astrocitos producen moléculas que inhiben el crecimiento axonal y forman una cicatriz glial, y por eso la regeneración es casi nula.',
  no:{
    1:'Las neuronas, tanto periféricas como centrales, no se dividen; lo que se regenera es el axón, no la célula.',
    2:'Los nervios periféricos sí están mielinizados, por las células de Schwann.',
    3:'El SNC contiene motoneuronas; el problema es el entorno, no el tipo de neurona.'
  },
  trampa:'Creer que el nervio periférico regenera porque sus neuronas se multiplican. Lo que se regenera es el axón, y la guía la aportan las células de Schwann.',
  obj:'Explicar la regeneración del nervio periférico y sus limitaciones en el sistema nervioso central.',
  ref:'Junqueira, Histología Básica, cap. 9.',
  tags:['célula de Schwann','neurona','mielina','oligodendrocito','astrocito']
},

/* ---------- Sangre y hematopoyesis ---------- */
{
  id:'U7-H-Q32', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Sangre y hematopoyesis', sub:'Eosinófilos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño con dolor abdominal, prurito anal y eosinofilia. En su frotis de sangre hay un leucocito con núcleo de dos lóbulos y citoplasma lleno de grandes gránulos de color rojo anaranjado brillante.',
  enunciado:'¿Qué célula es y en qué situaciones aumenta?',
  ops:['Un eosinófilo; aumenta en parasitosis y en reacciones alérgicas','Un neutrófilo; aumenta en las infecciones bacterianas','Un basófilo; aumenta en las infecciones virales','Un monocito; aumenta en las anemias'],
  ok:0,
  clave:'Eosinófilo: núcleo bilobulado, gránulos rojo-anaranjados. Parásitos (helmintos) y alergia.',
  exp:'El eosinófilo tiene un núcleo característico de dos lóbulos y gránulos específicos grandes y acidófilos, que captan la eosina y se ven rojo anaranjados. Estos gránulos contienen proteínas tóxicas para los helmintos y modulan la inflamación alérgica. Por eso el recuento de eosinófilos aumenta en las parasitosis intestinales, el asma y otras enfermedades alérgicas.',
  no:{
    1:'El neutrófilo tiene el núcleo con tres a cinco lóbulos y gránulos finos, poco visibles.',
    2:'El basófilo tiene gránulos grandes, azul oscuro, que tapan el núcleo, y es el leucocito menos frecuente.',
    3:'El monocito es el leucocito más grande, con núcleo en forma de riñón, sin gránulos rojos.'
  },
  trampa:'Confundir el color de los gránulos. Eosinófilo = rojo (acidófilo); basófilo = azul oscuro; neutrófilo = casi invisibles.',
  obj:'Identificar leucocitos granulocitos en un frotis y relacionarlos con su función.',
  ref:'Junqueira, Histología Básica, cap. 12.',
  tags:['eosinófilo','frotis','serie mieloide','neutrófilo']
},
{
  id:'U7-H-Q33', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Sangre y hematopoyesis', sub:'Reticulocitos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con hemorragia digestiva reciente presenta, en el frotis de sangre periférica, muchos glóbulos rojos algo más grandes, de color gris-azulado (policromatófilos), con una red de ARN visible con tinciones supravitales.',
  enunciado:'¿Qué indica la presencia aumentada de estas células (reticulocitos)?',
  ops:['Que la médula ósea responde produciendo eritrocitos nuevos para compensar la pérdida','Que hay una infección bacteriana','Que la médula ósea está destruida','Que el paciente tiene leucemia'],
  ok:0,
  clave:'Reticulocito = eritrocito joven con restos de ARN. Reticulocitosis = médula que responde (hemorragia, hemólisis).',
  exp:'El reticulocito es un eritrocito recién salido de la médula, que ha perdido el núcleo pero conserva restos de ribosomas y ARN, y por eso adopta un tono azulado con hematoxilina-eosina (policromatofilia). En la sangre normal, apenas el 1-2 % de los eritrocitos son reticulocitos; su aumento indica que la médula está produciendo más glóbulos rojos para compensar una pérdida, como en la hemorragia o en la anemia hemolítica. Una anemia con reticulocitos bajos sugiere, en cambio, un fallo de la producción.',
  no:{
    1:'Una infección bacteriana eleva los neutrófilos, no los reticulocitos.',
    2:'Una médula destruida produciría reticulocitopenia, no reticulocitosis.',
    3:'En la leucemia se ven blastos y leucocitos anormales; los reticulocitos no son su marcador.'
  },
  trampa:'Interpretar los reticulocitos como células inmaduras patológicas. Son normales y su aumento es una respuesta sana de la médula.',
  obj:'Interpretar la reticulocitosis como indicador de la respuesta medular.',
  ref:'Junqueira, Histología Básica, cap. 12 y 13.',
  tags:['frotis','médula ósea','reticulocito','eritrocito','serie mieloide']
},
{
  id:'U7-H-Q34', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Sangre y hematopoyesis', sub:'Origen de las plaquetas',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿De qué célula de la médula ósea derivan las plaquetas?',
  ops:['Del megacariocito, una célula gigante poliploide','Del eritroblasto','Del monocito','Del linfocito B'],
  ok:0,
  clave:'Megacariocito (estimulado por trombopoyetina) → plaquetas: fragmentos de citoplasma sin núcleo.',
  exp:'Los megacariocitos son células gigantes, con un núcleo multilobulado y poliploide, que se ubican en la médula ósea cerca de los sinusoides. Sus prolongaciones (proplaquetas) atraviesan la pared del sinusoide y se fragmentan en la sangre, y de cada megacariocito se desprenden miles de plaquetas. La trombopoyetina, producida en el hígado y el riñón, regula el proceso. Las plaquetas son, por tanto, fragmentos celulares sin núcleo, y no células completas.',
  no:{
    1:'El eritroblasto es el precursor del glóbulo rojo, en la serie eritroide.',
    2:'El monocito es un leucocito agranular que origina macrófagos.',
    3:'El linfocito B es una célula de la serie linfoide que produce anticuerpos.'
  },
  trampa:'Pensar que las plaquetas son células completas. Son fragmentos citoplasmáticos, sin núcleo.',
  obj:'Reconocer el origen de las plaquetas y el papel de la trombopoyetina.',
  ref:'Junqueira, Histología Básica, cap. 13.',
  tags:['médula ósea','serie mieloide','megacariocito','plaqueta','frotis']
},
{
  id:'U7-H-Q35', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Sangre y hematopoyesis', sub:'Neutrófilos en banda',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con apendicitis aguda tiene leucocitosis. En el frotis, muchos neutrófilos presentan un núcleo curvo, en forma de herradura o de banda, sin segmentar en lóbulos.',
  enunciado:'¿Qué significan estos neutrófilos en banda?',
  ops:['Son neutrófilos jóvenes que la médula libera antes de tiempo ante una infección aguda ("desviación a la izquierda")','Son neutrófilos envejecidos que se destruirán en el bazo','Son eosinófilos anormales','Son células tumorales'],
  ok:0,
  clave:'Neutrófilo maduro: 3-5 lóbulos. En banda = inmaduro. Aumento de bandas = desviación a la izquierda (infección bacteriana aguda).',
  exp:'El neutrófilo maduro tiene un núcleo con tres a cinco lóbulos unidos por filamentos finos. Antes de llegar a esa forma, pasa por una etapa en banda, con el núcleo curvo sin segmentar. Cuando la demanda de neutrófilos aumenta, como en las infecciones bacterianas agudas, la médula libera formas inmaduras antes de que terminen su maduración: es la llamada desviación a la izquierda, un signo indirecto de infección bacteriana.',
  no:{
    1:'Los neutrófilos envejecidos tienen más lóbulos (hipersegmentación), no menos.',
    2:'Los eosinófilos tienen dos lóbulos y gránulos rojos; no se ven como bandas.',
    3:'La morfología en banda es una etapa normal de la maduración, y no un signo de malignidad.'
  },
  trampa:'Creer que más lóbulos significa célula más joven. Al contrario: la segmentación aumenta con la madurez.',
  obj:'Reconocer los neutrófilos en banda y su significado clínico.',
  ref:'Junqueira, Histología Básica, cap. 12.',
  tags:['neutrófilo','frotis','serie mieloide','médula ósea']
},

/* ---------- Membrana basal y uniones celulares ---------- */
{
  id:'U7-H-Q36', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Membrana basal y uniones celulares', sub:'Desmosomas',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer de 45 años presenta ampollas flácidas en la piel y en la boca que se rompen con facilidad. La biopsia muestra separación entre los queratinocitos de la epidermis (acantólisis), y la inmunofluorescencia revela autoanticuerpos contra la desmogleína.',
  enunciado:'¿Qué estructura de unión celular está dañada?',
  ops:['Los desmosomas, que unen las células entre sí y las anclan a los filamentos intermedios de queratina','Los hemidesmosomas, que unen la célula a la membrana basal','Las uniones estrechas, que sellan el espacio intercelular','Las uniones en hendidura, que comunican los citoplasmas'],
  ok:0,
  clave:'Desmosoma = adhesión célula-célula (desmogleína, filamentos intermedios). Pénfigo = ataque contra desmogleína.',
  exp:'Los desmosomas son uniones de adhesión fuerte entre células vecinas, formadas por cadherinas desmosómicas (desmogleína y desmocolina) que se anclan por dentro a filamentos intermedios de queratina. Son especialmente numerosos en los tejidos sometidos a tracción, como la epidermis. En el pénfigo vulgar, los autoanticuerpos atacan la desmogleína y los queratinocitos pierden la unión entre sí, lo que causa acantólisis y ampollas dentro de la epidermis.',
  no:{
    1:'Los hemidesmosomas son el blanco del penfigoide ampolloso, en el cual la ampolla se forma por debajo de la epidermis.',
    2:'Las uniones estrechas sellan el epitelio y no son la diana de esta enfermedad.',
    3:'Las uniones en hendidura comunican las células, pero su daño no produce ampollas.'
  },
  trampa:'Confundir desmosoma (célula-célula) con hemidesmosoma (célula-membrana basal). Pénfigo: dentro de la epidermis; penfigoide: bajo la epidermis.',
  obj:'Relacionar los tipos de unión celular con su función y con enfermedades.',
  ref:'Junqueira, Histología Básica, cap. 4.',
  tags:['desmosoma','hemidesmosoma','unión estrecha','unión en hendidura','membrana basal']
},
{
  id:'U7-H-Q37', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Membrana basal y uniones celulares', sub:'Uniones estrechas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la función principal de las uniones estrechas (zonulae occludentes) de los epitelios?',
  ops:['Sellar el espacio entre las células, evitando el paso libre de sustancias, y mantener la polaridad de la membrana','Permitir el paso de iones entre células vecinas','Anclar las células a la membrana basal','Transmitir la contracción de una célula a otra'],
  ok:0,
  clave:'Unión estrecha (ocludina, claudinas) = barrera paracelular y polaridad apical-basal. Hendidura = comunicación. Desmosoma = adhesión.',
  exp:'Las uniones estrechas rodean el ápice de las células epiteliales como un cinturón y sellan el espacio intercelular: obligan a que las sustancias pasen a través de las células, bajo control, y no entre ellas. Además, impiden que las proteínas de la membrana apical y de la basolateral se mezclen, lo que mantiene la polaridad celular. Son esenciales en la barrera hematoencefálica y en el epitelio intestinal.',
  no:{
    1:'El paso de iones entre células vecinas es función de las uniones en hendidura.',
    2:'El anclaje a la membrana basal corresponde a los hemidesmosomas.',
    3:'La transmisión de la fuerza de contracción se produce por las uniones de adhesión y los desmosomas del disco intercalar.'
  },
  trampa:'Mezclar los cuatro tipos de unión. Se recuerdan por su función: sellar (estrecha), adherir (adherente y desmosoma), anclar (hemidesmosoma), comunicar (hendidura).',
  obj:'Asociar cada unión celular con su función principal.',
  ref:'Junqueira, Histología Básica, cap. 4.',
  tags:['unión estrecha','desmosoma','unión en hendidura','hemidesmosoma','membrana basal']
},
{
  id:'U7-H-Q38', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Membrana basal y uniones celulares', sub:'Uniones en hendidura',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Las uniones en hendidura (nexos) están formadas por canales de conexinas. ¿Qué permiten?',
  ops:['El paso directo de iones y de moléculas pequeñas de una célula a otra, con acoplamiento eléctrico y metabólico','La separación de las células durante la mitosis','La adhesión mecánica fuerte entre células','El anclaje de la célula a la lámina basal'],
  ok:0,
  clave:'Unión en hendidura: 6 conexinas = conexón; comunican citoplasmas (miocardio, músculo liso visceral, neuronas con sinapsis eléctricas).',
  exp:'Seis conexinas forman un conexón, y dos conexones de células vecinas se alinean para constituir un canal que atraviesa ambas membranas. Por él pasan iones y moléculas de menos de 1,5 kDa aproximadamente, como el AMP cíclico y el calcio. Permiten que las células de un tejido se comporten como una unidad eléctrica y metabólica, y son esenciales en el miocardio, en el músculo liso visceral y en las sinapsis eléctricas.',
  no:{
    1:'Los nexos no participan en la separación celular; en la mitosis se desmontan de forma transitoria.',
    2:'La adhesión mecánica fuerte es función de los desmosomas.',
    3:'El anclaje a la lámina basal lo hacen los hemidesmosomas, que unen filamentos intermedios con la matriz.'
  },
  trampa:'Confundir "unir células" con "comunicar células". La unión en hendidura comunica, pero no aporta resistencia mecánica.',
  obj:'Describir la estructura y la función de las uniones en hendidura.',
  ref:'Junqueira, Histología Básica, cap. 4.',
  tags:['unión en hendidura','conexina','membrana basal','desmosoma','unión estrecha']
},

/* ---------- Ciclo celular y división celular ---------- */
{
  id:'U7-H-Q39', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Ciclo celular y división celular', sub:'Fases del ciclo',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un estudio de citometría de flujo, una célula presenta el doble de ADN que una célula diploide en G1, y sus cromosomas todavía no se han separado.',
  enunciado:'¿En qué fase del ciclo celular puede encontrarse esta célula?',
  ops:['En G2 o en las primeras fases de la mitosis','En G1','En G0','En la fase S, apenas iniciada'],
  ok:0,
  clave:'G1 = 2C. S = síntesis (2C→4C). G2 y M (hasta la anafase) = 4C. Tras la citocinesis, 2C otra vez.',
  exp:'Una célula en G1 tiene contenido de ADN 2C. Durante la fase S duplica su ADN y llega a 4C, que mantiene en G2 y durante la mitosis hasta que las cromátidas hermanas se separan en la anafase, y las células hijas quedan con 2C. Una célula con el doble del ADN y sin cromosomas separados está, por tanto, en G2 o en profase, prometafase o metafase.',
  no:{
    1:'En G1 el ADN todavía no se ha duplicado, por lo que la célula tiene 2C.',
    2:'G0 es un estado de reposo con el mismo contenido de ADN que G1.',
    3:'En una fase S apenas iniciada, la cantidad de ADN sería solo ligeramente superior a 2C.'
  },
  trampa:'Confundir el número de cromosomas con la cantidad de ADN. En G2 hay 46 cromosomas, pero cada uno con dos cromátidas: 4C.',
  obj:'Relacionar cada fase del ciclo celular con el contenido de ADN.',
  ref:'Junqueira, Histología Básica, cap. 3.',
  tags:['ciclo celular','interfase','mitosis','cromátida']
},
{
  id:'U7-H-Q40', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Ciclo celular y división celular', sub:'Fases de la mitosis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ocurre durante la anafase de la mitosis?',
  ops:['Las cromátidas hermanas se separan y son arrastradas hacia polos opuestos por los microtúbulos del huso mitótico','Los cromosomas se alinean en el plano ecuatorial','La envoltura nuclear se reconstituye','Los cromosomas se condensan y la envoltura nuclear se disgrega'],
  ok:0,
  clave:'Profase: condensación. Metafase: alineación. Anafase: separación de cromátidas. Telofase: reconstrucción nuclear. Citocinesis: división del citoplasma.',
  exp:'En la anafase, la enzima separasa rompe las cohesinas que mantenían unidas las cromátidas hermanas en el centrómero, y cada cromátida (ahora un cromosoma independiente) es arrastrada hacia un polo por el acortamiento de los microtúbulos del huso. Al terminar, cada polo tiene una dotación completa de cromosomas. Después viene la telofase, en la que se reforma la envoltura nuclear, y la citocinesis, que divide el citoplasma.',
  no:{
    1:'La alineación en el plano ecuatorial (placa metafásica) es propia de la metafase.',
    2:'La reconstitución de la envoltura nuclear ocurre en la telofase.',
    3:'La condensación y la disgregación de la envoltura son eventos de la profase y la prometafase.'
  },
  trampa:'Confundir metafase (cromosomas alineados) con anafase (cromátidas separándose). El nombre indica el orden: meta = en medio, ana = hacia arriba, hacia los polos.',
  obj:'Ordenar las fases de la mitosis y describir sus eventos.',
  ref:'Junqueira, Histología Básica, cap. 3.',
  tags:['mitosis','huso mitótico','cromátida','ciclo celular']
},
{
  id:'U7-H-Q41', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Ciclo celular y división celular', sub:'Puntos de control',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una célula sufre daño en su ADN por radiación ultravioleta. Normalmente, esto activa una proteína que detiene el ciclo antes de la síntesis para reparar el daño o, si es irreparable, dirige a la célula hacia la apoptosis. En más de la mitad de los cánceres humanos, el gen de esta proteína está mutado.',
  enunciado:'¿Qué proteína es?',
  ops:['p53, el guardián del genoma, que bloquea el ciclo en el punto de control de G1/S','Ciclina B, que impulsa la entrada en mitosis','La telomerasa, que alarga los telómeros','La actina, que forma el anillo contráctil'],
  ok:0,
  clave:'p53 = supresor tumoral; ante daño de ADN frena G1/S (vía p21) o induce apoptosis. Rb = otro freno de G1/S.',
  exp:'La proteína p53 se activa cuando detecta daño en el ADN, y aumenta la producción de p21, que inhibe a las cinasas dependientes de ciclina y detiene el ciclo en G1/S. Si el daño se repara, el ciclo continúa; si no, p53 desencadena la apoptosis. Cuando p53 está mutada, las células con ADN dañado siguen dividiéndose y acumulan mutaciones, una de las claves del desarrollo del cáncer.',
  no:{
    1:'La ciclina B, con su cinasa, promueve la transición G2/M; no detiene el ciclo ante el daño.',
    2:'La telomerasa mantiene los telómeros y está activa en muchas células tumorales, pero no frena el ciclo.',
    3:'La actina forma parte del citoesqueleto y del anillo contráctil de la citocinesis, sin papel en este punto de control.'
  },
  trampa:'Creer que p53 promueve la división. Es un supresor tumoral: su función es frenar el ciclo o eliminar a la célula dañada.',
  obj:'Explicar el papel de p53 en los puntos de control del ciclo celular.',
  ref:'Junqueira, Histología Básica, cap. 3.',
  tags:['ciclo celular','interfase','p53','mitosis']
},

/* ---------- Piel y anexos cutáneos ---------- */
{
  id:'U7-H-Q42', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Piel y anexos cutáneos', sub:'Capas de la epidermis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué capa de la epidermis se encuentran las células madre que renuevan continuamente el epitelio?',
  ops:['En el estrato basal (germinativo)','En el estrato granuloso','En el estrato córneo','En el estrato espinoso'],
  ok:0,
  clave:'De profundo a superficial: basal, espinoso, granuloso, lúcido (piel gruesa), córneo. La mitosis ocurre en el basal.',
  exp:'El estrato basal es la capa más profunda de la epidermis, una fila de células cúbicas o cilíndricas apoyadas en la membrana basal, que contiene las células madre y las células que se dividen activamente. Las células hijas ascienden por los estratos espinoso y granuloso, se queratinizan y mueren, y se descaman desde el estrato córneo; el recambio completo tarda unas cuatro semanas. En la psoriasis, este proceso se acelera y forma placas escamosas.',
  no:{
    1:'El granuloso contiene los gránulos de queratohialina, y sus células ya están en proceso de diferenciación.',
    2:'El córneo está formado por células muertas, aplanadas y llenas de queratina; no se dividen.',
    3:'El espinoso se caracteriza por sus desmosomas, y aunque puede haber alguna división, no es el sitio de las células madre.'
  },
  trampa:'Ubicar las células madre en la superficie. La epidermis se renueva desde abajo, y las células ascienden a medida que maduran.',
  obj:'Ordenar los estratos de la epidermis y localizar la capa germinativa.',
  ref:'Junqueira, Histología Básica, cap. 18.',
  tags:['epidermis','estrato basal','melanocito','piel']
},
{
  id:'U7-H-Q43', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Piel y anexos cutáneos', sub:'Melanocitos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño nace con piel, pelo y ojos muy claros, y sufre quemaduras solares con facilidad. Su biopsia muestra melanocitos en el estrato basal, en número normal, pero sin pigmento, por una mutación en la tirosinasa. Se diagnostica albinismo.',
  enunciado:'¿Qué explica la falta de pigmentación en este caso?',
  ops:['Los melanocitos están presentes pero no pueden sintetizar melanina por falta de tirosinasa','El niño carece de melanocitos','Los queratinocitos no fagocitan los melanosomas','Los melanocitos están en la dermis y no en la epidermis'],
  ok:0,
  clave:'Melanocitos: derivan de la cresta neural, en el estrato basal; producen melanina en melanosomas y la ceden a los queratinocitos. Albinismo = melanocitos sin tirosinasa.',
  exp:'La tirosinasa es la enzima que inicia la síntesis de melanina a partir de la tirosina. Sin ella, los melanocitos existen y están en su lugar, pero no producen pigmento. El número de melanocitos es similar en todas las personas; lo que cambia es la cantidad y el tamaño de los melanosomas que fabrican. La melanina absorbe la radiación ultravioleta y protege el ADN de los queratinocitos, y por eso los albinos tienen más riesgo de quemaduras y de cáncer de piel.',
  no:{
    1:'En el albinismo oculocutáneo, el número de melanocitos es normal; lo que falla es la síntesis de melanina.',
    2:'La transferencia a los queratinocitos depende de que existan melanosomas con pigmento, que aquí faltan.',
    3:'Los melanocitos se ubican entre los queratinocitos del estrato basal, en la epidermis.'
  },
  trampa:'Pensar que las diferencias de color de piel se deben al número de melanocitos. Se deben a la cantidad y al tipo de melanina que producen.',
  obj:'Describir el origen y la función de los melanocitos y el fundamento del albinismo.',
  ref:'Junqueira, Histología Básica, cap. 18.',
  tags:['melanocito','epidermis','estrato basal','piel']
},
{
  id:'U7-H-Q44', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Piel y anexos cutáneos', sub:'Receptores y glándulas de la piel',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué receptor sensitivo de la dermis profunda y la hipodermis detecta la presión intensa y la vibración, y tiene una cápsula en capas concéntricas, como una cebolla?',
  ops:['El corpúsculo de Pacini','El corpúsculo de Meissner','El disco de Merkel','La terminación nerviosa libre'],
  ok:0,
  clave:'Pacini = presión y vibración (profundo, laminar). Meissner = tacto fino (papilas dérmicas). Merkel = tacto sostenido. Libres = dolor y temperatura.',
  exp:'El corpúsculo de Pacini es grande, de forma ovalada, con una cápsula formada por láminas concéntricas de células aplanadas alrededor de una terminación nerviosa central. Está en la dermis profunda y la hipodermis, y detecta cambios rápidos de presión y la vibración. Los corpúsculos de Meissner, más pequeños, se sitúan en las papilas dérmicas y detectan el tacto fino, sobre todo en las yemas de los dedos.',
  no:{
    1:'El corpúsculo de Meissner es pequeño, está en las papilas dérmicas y detecta el tacto fino.',
    2:'Los discos de Merkel están en la epidermis y detectan el tacto sostenido y la textura.',
    3:'Las terminaciones libres carecen de cápsula y detectan dolor y temperatura.'
  },
  trampa:'Confundir Meissner y Pacini. Meissner = pequeño, superficial, tacto fino. Pacini = grande, profundo, vibración y presión.',
  obj:'Asociar cada receptor cutáneo con su localización y su estímulo.',
  ref:'Junqueira, Histología Básica, cap. 18.',
  tags:['dermis','glándula sudorípara','epidermis','piel','corpúsculo de Pacini']
},

/* ---------- Histología del sistema cardiovascular ---------- */
{
  id:'U7-H-Q45', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Histología del sistema cardiovascular', sub:'Arterias y venas',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un corte se observan dos vasos de calibre parecido, uno junto al otro. Uno tiene la luz redonda y pequeña, con una pared muy gruesa formada sobre todo por capas de músculo liso; el otro tiene la luz amplia y aplanada, con una pared delgada y la túnica adventicia como capa más gruesa.',
  enunciado:'¿Cuál es la arteria y cuál es la vena?',
  ops:['El de pared gruesa y luz pequeña es la arteria; el de pared delgada y luz amplia, la vena','El de pared gruesa es la vena; el de pared delgada, la arteria','Son dos arterias de distinto calibre','No se pueden diferenciar por su histología'],
  ok:0,
  clave:'Arteria: media gruesa (músculo liso), luz redonda y estrecha. Vena: media delgada, adventicia gruesa, luz amplia y aplanada, con válvulas.',
  exp:'Las arterias soportan la presión alta del sistema y tienen una túnica media gruesa, con abundante músculo liso; su luz se mantiene abierta y redonda. Las venas soportan presiones bajas: su media es delgada y pobre en músculo, su adventicia es la capa más gruesa, la luz es amplia y suele verse colapsada, y las de los miembros tienen válvulas que evitan el reflujo de sangre.',
  no:{
    1:'Está invertido: la pared gruesa y muscular es propia de la arteria.',
    2:'Las diferencias de pared y de luz permiten distinguir arteria y vena aunque se vean juntas.',
    3:'Sí se pueden diferenciar; es una de las identificaciones más frecuentes en histología.'
  },
  trampa:'Deducir por el grosor total de la pared cuál es cuál sin mirar la capa que predomina. En la arteria manda la media; en la vena, la adventicia.',
  obj:'Diferenciar arterias y venas por su estructura microscópica.',
  ref:'Junqueira, Histología Básica, cap. 11.',
  tags:['túnica media','túnica adventicia','túnica íntima','capilar','endotelio']
},
{
  id:'U7-H-Q46', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Histología del sistema cardiovascular', sub:'Tipos de capilares',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipo de capilar se encuentra en el hígado, el bazo y la médula ósea, con un endotelio discontinuo, una luz amplia y una membrana basal incompleta?',
  ops:['Sinusoide (capilar discontinuo)','Capilar continuo','Capilar fenestrado con diafragma','Arteriola terminal'],
  ok:0,
  clave:'Continuo: músculo, pulmón, SNC. Fenestrado: riñón, intestino, glándulas endocrinas. Sinusoide: hígado, bazo, médula ósea.',
  exp:'Los sinusoides son capilares de luz ancha y de trayecto irregular, con un endotelio con grandes aberturas y una membrana basal incompleta o ausente. Esa permeabilidad facilita el intercambio de macromoléculas y hasta el paso de células, como ocurre cuando los megacariocitos y las células sanguíneas atraviesan la pared de los sinusoides de la médula ósea. Los capilares continuos, de pared cerrada, son los más frecuentes y los que forman la barrera hematoencefálica; los fenestrados, con poros, filtran o absorben con rapidez.',
  no:{
    1:'El capilar continuo tiene un endotelio sin aberturas y una membrana basal completa; se encuentra en el músculo y en el sistema nervioso.',
    2:'El capilar fenestrado tiene poros, pero el endotelio es continuo y la membrana basal, completa (riñón, intestino).',
    3:'La arteriola terminal es un vaso de resistencia con músculo liso, distinto del capilar.'
  },
  trampa:'Asociar "más permeable" con fenestrado. El más permeable de todos es el sinusoide, que tiene el endotelio discontinuo.',
  obj:'Clasificar los capilares según su endotelio y su localización.',
  ref:'Junqueira, Histología Básica, cap. 11.',
  tags:['capilar','endotelio','sinusoide','túnica íntima']
},
{
  id:'U7-H-Q47', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Histología del sistema cardiovascular', sub:'Endotelio',
  dif:3, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿En qué estructuras almacenan las células endoteliales el factor de von Willebrand y la P-selectina, para liberarlos cuando el vaso se lesiona?',
  ops:['En los cuerpos de Weibel-Palade','En los lisosomas','En los cuerpos densos de las plaquetas','En los gránulos de queratohialina'],
  ok:0,
  clave:'Cuerpos de Weibel-Palade = gránulos endoteliales con vWF y P-selectina. Su liberación inicia la hemostasia y el reclutamiento de leucocitos.',
  exp:'Los cuerpos de Weibel-Palade son gránulos en forma de bastón, exclusivos del endotelio, que almacenan el factor de von Willebrand y la P-selectina. Ante una lesión o un estímulo inflamatorio, se liberan a la luz: el factor de von Willebrand permite que las plaquetas se adhieran al colágeno expuesto, y la P-selectina captura a los leucocitos circulantes. La disfunción del factor de von Willebrand causa la enfermedad de von Willebrand, el trastorno hemorrágico hereditario más frecuente.',
  no:{
    1:'Los lisosomas contienen enzimas digestivas, sin relación con la hemostasia.',
    2:'Los cuerpos densos de las plaquetas almacenan ADP y serotonina, y pertenecen a las plaquetas, no al endotelio.',
    3:'Los gránulos de queratohialina son propios del estrato granuloso de la epidermis.'
  },
  trampa:'Atribuir el factor de von Willebrand solo a las plaquetas. También lo producen y almacenan las células endoteliales.',
  obj:'Reconocer las funciones secretoras del endotelio.',
  ref:'Junqueira, Histología Básica, cap. 11.',
  tags:['endotelio','túnica íntima','capilar','Weibel-Palade']
},

/* ---------- Tejido linfoide ---------- */
{
  id:'U7-H-Q48', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido linfoide', sub:'Timo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué estructura es característica de la médula del timo y lo distingue de otros órganos linfoides?',
  ops:['Los corpúsculos de Hassall','Los folículos linfoides con centros germinales','Los senos subcapsulares','Los sinusoides con macrófagos de la pulpa roja'],
  ok:0,
  clave:'Timo: corteza densa de timocitos y médula con corpúsculos de Hassall; sin folículos; involuciona con la edad.',
  exp:'El timo tiene una corteza muy rica en linfocitos T inmaduros (timocitos), que maduran allí, y una médula más clara, con menos linfocitos y células epiteliales reticulares agrupadas en los corpúsculos de Hassall, estructuras concéntricas de células epiteliales queratinizadas. A diferencia del ganglio y del bazo, el timo no tiene folículos linfoides, ya que su función no es la respuesta a antígenos sino la maduración de los linfocitos T. Con la edad, involuciona y se sustituye en gran parte por tejido adiposo.',
  no:{
    1:'Los folículos con centros germinales son propios de los ganglios, el bazo y el tejido linfoide de las mucosas.',
    2:'Los senos subcapsulares son estructuras de los ganglios linfáticos.',
    3:'La pulpa roja con sinusoides y macrófagos es característica del bazo.'
  },
  trampa:'Creer que el timo participa en la respuesta inmunitaria como un ganglio. Es un órgano de maduración de linfocitos T.',
  obj:'Describir la estructura del timo y su función.',
  ref:'Junqueira, Histología Básica, cap. 14.',
  tags:['timo','tejido linfoide','corpúsculo de Hassall','folículo linfoide']
},
{
  id:'U7-H-Q49', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido linfoide', sub:'Centros germinales',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño con faringitis presenta ganglios linfáticos cervicales aumentados de tamaño y dolorosos. La biopsia muestra folículos linfoides con centros germinales grandes, de color claro, rodeados por un anillo más oscuro de pequeños linfocitos.',
  enunciado:'¿Qué representan los centros germinales?',
  ops:['Zonas donde los linfocitos B activados proliferan y se diferencian en respuesta a un antígeno','Zonas donde maduran los linfocitos T','Zonas de necrosis por la infección','Zonas de producción de eritrocitos'],
  ok:0,
  clave:'Folículo primario = B en reposo. Secundario = con centro germinal (B activados, células dendríticas foliculares) y manto. Hiperplasia folicular reactiva.',
  exp:'Cuando los linfocitos B reconocen un antígeno, migran a un folículo y se multiplican en su centro, que se ve más claro por el tamaño de las células activadas y por los macrófagos que fagocitan restos; allí se produce la maduración de la afinidad y la diferenciación a células plasmáticas y de memoria. El anillo oscuro que lo rodea, el manto, está formado por linfocitos B pequeños en reposo. La presencia de centros germinales prominentes en un ganglio es un signo de respuesta inmunitaria activa, la hiperplasia folicular reactiva.',
  no:{
    1:'Los linfocitos T maduran en el timo y ocupan la zona paracortical del ganglio, no los centros germinales.',
    2:'No hay necrosis: se trata de un tejido en plena proliferación celular.',
    3:'Los eritrocitos se forman en la médula ósea, y el ganglio linfático no tiene esa función.'
  },
  trampa:'Interpretar el centro claro como un "hueco" o una lesión. La claridad se debe a células grandes y de citoplasma pálido en plena actividad.',
  obj:'Interpretar la estructura del folículo linfoide y del centro germinal.',
  ref:'Junqueira, Histología Básica, cap. 14.',
  tags:['folículo linfoide','centro germinal','tejido linfoide','amígdala']
},
{
  id:'U7-H-Q50', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido linfoide', sub:'Tejido linfoide asociado a mucosas',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'En las placas de Peyer del íleon, ¿qué células del epitelio captan antígenos de la luz intestinal y los transportan hasta los linfocitos?',
  ops:['Las células M','Las células caliciformes','Las células de Paneth','Los enterocitos absortivos'],
  ok:0,
  clave:'Células M (microfold): epitelio de las placas de Peyer; transcitosis de antígenos hacia macrófagos y linfocitos (MALT).',
  exp:'El tejido linfoide asociado a mucosas (MALT) forma folículos linfoides en la pared del tubo digestivo, de las vías respiratorias y urinarias; en el íleon se agrupan como placas de Peyer. Sobre ellos, el epitelio contiene células M, aplanadas y con pliegues en su superficie, que captan antígenos y microorganismos de la luz por endocitosis y los transportan por transcitosis hacia los linfocitos y macrófagos situados en una bolsa bajo ellas. Así se inicia la respuesta inmunitaria de las mucosas, que produce sobre todo IgA.',
  no:{
    1:'Las células caliciformes secretan moco protector; no captan antígenos.',
    2:'Las células de Paneth, en el fondo de las criptas, secretan lisozima y defensinas.',
    3:'Los enterocitos absortivos captan nutrientes, y no están especializados en transportar antígenos.'
  },
  trampa:'Confundir células M con macrófagos. Las M son células epiteliales, cuya función es transportar antígenos sin degradarlos.',
  obj:'Describir el tejido linfoide asociado a mucosas y el papel de las células M.',
  ref:'Junqueira, Histología Básica, cap. 14.',
  tags:['tejido linfoide asociado a mucosas','folículo linfoide','placa de Peyer','célula M']
}

]);
