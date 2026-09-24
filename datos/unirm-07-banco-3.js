/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 7, TERCERA TANDA
   Cubre los temas de unirm-07-apuntes-3.js: miembro inferior,
   torax, sistema nervioso autonomo, sangre, hueso y cartilago,
   pH, lipidos, placenta, virologia y presentacion de datos.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== ANATOMIA I ===================== */
{
  id:'U7-A-Q10', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Miembro inferior', sub:'Nervio peroneo común',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente estuvo varias horas con las piernas cruzadas durante un viaje largo. Al levantarse no puede elevar la punta del pie derecho, que arrastra al caminar, y refiere hormigueo en el dorso del pie.',
  enunciado:'¿Qué nervio se comprimió y en qué punto?',
  ops:[
    'El nervio tibial, en la fosa poplítea',
    'El nervio peroneo común, en el cuello del peroné',
    'El nervio femoral, bajo el ligamento inguinal',
    'El nervio ciático, en la escotadura ciática mayor'
  ],
  ok:1,
  clave:'Pie caído tras compresión externa en la cara lateral de la rodilla.',
  exp:'El nervio peroneo común rodea el cuello del peroné, donde discurre casi bajo la piel apoyado sobre el hueso. Esa posición lo convierte en el nervio más vulnerable del miembro inferior a la compresión externa: una escayola apretada, una postura mantenida con las piernas cruzadas o un reposo prolongado bastan. Su lesión impide la dorsiflexión y la eversión del pie, de modo que la punta cae y arrastra al caminar, obligando a levantar mucho la rodilla en la llamada marcha en estepaje. También se pierde sensibilidad en el dorso del pie. Es el equivalente exacto del nervio radial en el brazo: nervio pegado al hueso, fallo de la extensión, segmento distal que cuelga.',
  no:{
    0:'La lesión del tibial afectaría a la flexión plantar y a la musculatura intrínseca del pie, no a la dorsiflexión.',
    2:'El femoral inerva el cuádriceps: su lesión impediría extender la rodilla, no elevar la punta del pie.',
    3:'Una lesión del ciático a la salida de la pelvis produciría un déficit mucho más extenso, afectando también a los isquiotibiales.'
  },
  trampa:'Pensar en el ciático por ser el nervio grande de la pierna. El dato que localiza la lesión es la compresión externa en la cara lateral de la rodilla.',
  obj:'Relacionar el trayecto superficial del peroneo común con el pie caído.',
  ref:'Moore, Anatomía con orientación clínica. Rouvière, Anatomía Humana.',
  tags:['peroneo común','pie caído','cuello del peroné','estepaje']
},
{
  id:'U7-A-Q11', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Miembro inferior', sub:'Cuello femoral',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la fractura desplazada del cuello femoral en el anciano suele tratarse sustituyendo la cabeza en lugar de fijando el hueso?',
  ops:[
    'Porque el hueso del anciano no consolida nunca',
    'Porque las arterias que nutren la cabeza ascienden a lo largo del cuello y la fractura puede dejarla sin riego',
    'Porque el cuello femoral carece de periostio',
    'Porque la cabeza femoral no soporta carga y puede retirarse sin consecuencias'
  ],
  ok:1,
  clave:'La irrigación de la cabeza femoral viaja por el cuello, así que la fractura la interrumpe.',
  exp:'La cabeza femoral se nutre principalmente de ramas de las arterias circunflejas femorales que ascienden por la superficie del cuello hasta alcanzarla. Una fractura desplazada del cuello puede romper esos vasos y dejar la cabeza sin aporte sanguíneo, lo que conduce a necrosis avascular y al colapso de la superficie articular meses después. Como el riesgo es alto y el resultado de una fijación fallida es malo, en el anciano con fractura desplazada suele optarse por sustituir directamente la cabeza. Es el mismo patrón que hace peligrosa la fractura proximal del escafoides: la arteria recorre el hueso y la fractura desconecta el fragmento.',
  no:{
    0:'El hueso del anciano consolida más lentamente, pero consolida. El problema aquí es vascular, no de capacidad de consolidación.',
    2:'El cuello femoral es intracapsular y tiene poco periostio, lo que contribuye, pero la razón determinante es la interrupción del aporte arterial.',
    3:'La cabeza femoral es precisamente la superficie que soporta y transmite la carga a la pelvis.'
  },
  trampa:'Atribuirlo a la edad en abstracto. La razón es anatómica y concreta: por dónde entra la sangre.',
  obj:'Explicar la necrosis avascular a partir del patrón de irrigación.',
  ref:'Moore, Anatomía con orientación clínica.',
  tags:['cuello femoral','necrosis avascular','circunflejas femorales']
},
{
  id:'U7-A-Q12', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Pared torácica', sub:'Paquete intercostal',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Al realizar una toracocentesis, ¿por qué se introduce la aguja por el borde superior de la costilla inferior del espacio elegido?',
  ops:[
    'Porque el borde superior de la costilla es más delgado y se atraviesa con menos resistencia',
    'Porque el paquete vasculonervioso intercostal discurre por el borde inferior de cada costilla',
    'Porque el pulmón se aleja de esa zona durante la espiración',
    'Porque la pleura parietal solo se abre por el borde superior'
  ],
  ok:1,
  clave:'Vena, arteria y nervio van bajo la costilla de arriba.',
  exp:'El paquete vasculonervioso intercostal —vena, arteria y nervio, de arriba abajo— discurre alojado en el surco del borde inferior de cada costilla. Al puncionar, por tanto, hay que mantenerse lo más lejos posible de ese borde, y eso se consigue entrando por el borde superior de la costilla que limita el espacio por debajo. Hacerlo al revés, rozando el borde inferior de la costilla superior, significa dirigir la aguja justo hacia la arteria intercostal. Es un ejemplo de dato anatómico que se traduce directamente en una maniobra segura.',
  no:{
    0:'El grosor del hueso no es el criterio: lo es la posición del paquete vasculonervioso.',
    2:'El pulmón se desplaza con la respiración, pero eso no determina el borde elegido dentro del espacio.',
    3:'La pleura parietal reviste toda la superficie interna de la pared torácica, no solo una zona del espacio.'
  },
  trampa:'Recordar el orden VAN pero no en qué borde está. El orden importa menos que saber que el paquete va por debajo.',
  obj:'Aplicar la disposición del paquete intercostal a un procedimiento.',
  ref:'Moore, Anatomía con orientación clínica.',
  tags:['toracocentesis','paquete intercostal','VAN','borde superior']
},
{
  id:'U7-A-Q13', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Pared torácica', sub:'Mecánica respiratoria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué caracteriza a la espiración en reposo?',
  ops:[
    'La realizan los músculos intercostales internos y la musculatura abdominal',
    'Es pasiva: se debe al retroceso elástico del pulmón y de la pared torácica',
    'La realiza el diafragma mediante contracción sostenida',
    'Depende de la contracción de los músculos escalenos'
  ],
  ok:1,
  clave:'En reposo, espirar no cuesta trabajo muscular.',
  exp:'Durante la respiración tranquila, la inspiración es activa y la realiza fundamentalmente el diafragma, con ayuda de los intercostales externos. La espiración, en cambio, es pasiva: basta con que el diafragma se relaje para que el retroceso elástico del pulmón y de la caja torácica devuelva el volumen a su posición de reposo, sin que intervenga ningún músculo. Solo la espiración forzada recluta musculatura, principalmente abdominal e intercostales internos. Este punto se pregunta con frecuencia porque la intuición sugiere que si inspirar cuesta trabajo, espirar también debería costarlo.',
  no:{
    0:'Esos músculos participan en la espiración forzada, no en la tranquila.',
    2:'El diafragma se relaja durante la espiración; su contracción es lo que produce la inspiración.',
    3:'Los escalenos son músculos accesorios de la inspiración forzada, no de la espiración.'
  },
  trampa:'Suponer simetría entre inspirar y espirar. En reposo solo una de las dos fases consume trabajo muscular.',
  obj:'Distinguir los componentes activos y pasivos del ciclo respiratorio.',
  ref:'Moore, Anatomía con orientación clínica. Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['espiración pasiva','retroceso elástico','diafragma']
},

/* ===================== FISIOLOGIA I ===================== */
{
  id:'U7-F-Q10', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Sistema nervioso autónomo', sub:'Neurotransmisores',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de las siguientes constituye una excepción a la regla general de los neurotransmisores del sistema nervioso autónomo?',
  ops:[
    'Las fibras preganglionares parasimpáticas liberan acetilcolina',
    'Las fibras simpáticas que inervan las glándulas sudoríparas liberan acetilcolina',
    'Las fibras posganglionares parasimpáticas liberan acetilcolina',
    'Las fibras preganglionares simpáticas liberan acetilcolina'
  ],
  ok:1,
  clave:'Fibra simpática que libera acetilcolina en lugar de noradrenalina.',
  exp:'La regla general es que todas las fibras preganglionares, simpáticas y parasimpáticas, liberan acetilcolina sobre receptores nicotínicos; que las posganglionares parasimpáticas liberan acetilcolina sobre receptores muscarínicos; y que las posganglionares simpáticas liberan noradrenalina. La inervación simpática de las glándulas sudoríparas rompe ese esquema: es simpática pero colinérgica, y actúa sobre receptores muscarínicos. La otra excepción clásica es la médula suprarrenal, que funciona como un ganglio simpático modificado: recibe fibra preganglionar directamente y, en lugar de tener neuronas posganglionares, vierte adrenalina a la sangre.',
  no:{
    0:'Es la regla general para todas las preganglionares, no una excepción.',
    2:'Es exactamente lo que dice la regla para el parasimpático posganglionar.',
    3:'También es la regla general: todas las preganglionares son colinérgicas.'
  },
  trampa:'Buscar la excepción entre las preganglionares. Todas ellas son colinérgicas sin excepción; las excepciones están en el lado simpático posganglionar.',
  obj:'Identificar las excepciones al esquema de neurotransmisión autónoma.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['sudoríparas','colinérgico','simpático','médula suprarrenal']
},
{
  id:'U7-F-Q11', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Sistema nervioso autónomo', sub:'Receptores',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Un fármaco agonista selectivo de los receptores beta-2 se emplea como broncodilatador. ¿Qué efecto cabe esperar de la estimulación de esos receptores?',
  ops:[
    'Aumento de la frecuencia y la contractilidad cardíacas',
    'Relajación del músculo liso bronquial y vascular',
    'Vasoconstricción periférica y midriasis',
    'Disminución de la liberación de noradrenalina en el terminal presináptico'
  ],
  ok:1,
  clave:'Beta-2 relaja músculo liso; beta-1 estimula el corazón.',
  exp:'Los receptores beta-2 median la relajación del músculo liso, especialmente el bronquial y el vascular del músculo esquelético. Por eso un agonista selectivo beta-2 como el salbutamol produce broncodilatación, y por eso mismo la selectividad importa: si el fármaco estimulara también los beta-1 cardíacos aparecerían taquicardia y palpitaciones, que de hecho son sus efectos adversos más habituales cuando la selectividad se pierde a dosis altas. La regla mnemotécnica clásica ayuda: se tiene un corazón, de ahí beta-1; se tienen dos pulmones, de ahí beta-2.',
  no:{
    0:'Ese es el efecto de los receptores beta-1, situados fundamentalmente en el corazón.',
    2:'La vasoconstricción y la midriasis son efectos de los receptores alfa-1.',
    3:'Esa es la función de los receptores alfa-2, que actúan como freno presináptico de la liberación de noradrenalina.'
  },
  trampa:'Confundir beta-1 con beta-2. Un corazón y dos pulmones es la regla que evita el error.',
  obj:'Asociar cada subtipo de receptor adrenérgico con su efecto característico.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['beta-2','broncodilatación','receptores adrenérgicos','salbutamol']
},
{
  id:'U7-F-Q12', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Hemostasia', sub:'Vitamina K',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'En un déficit de vitamina K, ¿qué prueba de coagulación se altera antes y por qué?',
  ops:[
    'El tiempo de tromboplastina parcial activada, porque la vía intrínseca tiene más factores dependientes de vitamina K',
    'El tiempo de protrombina, porque el factor VII tiene la vida media más corta de los factores dependientes de vitamina K',
    'El tiempo de sangría, porque la vitamina K es necesaria para la función plaquetaria',
    'El recuento de plaquetas, porque la vitamina K regula la megacariopoyesis'
  ],
  ok:1,
  clave:'El factor VII se agota primero, y el VII se mide con el tiempo de protrombina.',
  exp:'La vitamina K es necesaria para la carboxilación hepática de los factores II, VII, IX y X. Cuando falta, esos factores dejan de producirse en forma funcional, pero no desaparecen todos a la vez: cada uno se va agotando según su vida media. El factor VII tiene la vida media más corta, de unas pocas horas, de modo que es el primero en caer. Como el factor VII pertenece a la vía extrínseca, la prueba que la explora, el tiempo de protrombina, es la primera en alargarse. Si el déficit persiste, terminan afectándose también los demás factores y se alarga además el tiempo de tromboplastina parcial activada.',
  no:{
    0:'La vía intrínseca incluye el factor IX, dependiente de vitamina K, pero se altera más tarde porque su vida media es más larga.',
    2:'La vitamina K no participa en la función plaquetaria: actúa sobre la síntesis de factores de coagulación.',
    3:'El número de plaquetas no depende de la vitamina K.'
  },
  trampa:'Saberse los cuatro factores pero no el orden en que se agotan. El dato que resuelve la pregunta es la vida media del VII.',
  obj:'Relacionar el déficit de vitamina K con la alteración de las pruebas de coagulación.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['vitamina K','factor VII','tiempo de protrombina','coagulación']
},
{
  id:'U7-F-Q13', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Hemostasia', sub:'Patrón de sangrado',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente consulta por petequias en las piernas, equimosis que aparecen con mínimos golpes, epistaxis frecuentes y sangrado gingival al cepillarse.',
  enunciado:'¿Qué tipo de alteración hemostática sugiere este patrón?',
  ops:[
    'Un defecto de la hemostasia secundaria, por déficit de factores de coagulación',
    'Un defecto de la hemostasia primaria, plaquetario o vascular',
    'Un exceso de actividad fibrinolítica exclusivamente',
    'Una alteración de la antitrombina III'
  ],
  ok:1,
  clave:'Sangrado de piel y mucosas apunta a plaquetas; sangrado profundo apunta a factores.',
  exp:'La hemostasia primaria forma el tapón plaquetario que detiene el sangrado de los vasos pequeños de la piel y las mucosas. Cuando falla, por trombocitopenia, por disfunción plaquetaria o por alteración del factor de von Willebrand, el sangrado es inmediato y superficial: petequias, equimosis fáciles, epistaxis, sangrado gingival y menorragia. Los defectos de la hemostasia secundaria, en cambio, permiten formar el tapón inicial pero no consolidarlo con fibrina, de modo que producen sangrados profundos y a menudo retardados: hemartrosis, hematomas musculares y resangrado horas después de una herida que parecía controlada. Distinguir ambos patrones orienta el estudio antes de cualquier prueba.',
  no:{
    0:'Un defecto de factores daría hemartrosis y hematomas profundos, no petequias.',
    2:'La hiperfibrinólisis aislada es poco frecuente y no produce este patrón característico de piel y mucosas.',
    3:'El déficit de antitrombina III predispone a trombosis, no a sangrado.'
  },
  trampa:'Saltar directamente a pedir pruebas. El tipo de sangrado ya orienta hacia qué mitad de la hemostasia mirar.',
  obj:'Diferenciar los patrones clínicos de los defectos de hemostasia primaria y secundaria.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['petequias','hemostasia primaria','plaquetas','patrón de sangrado']
},
{
  id:'U7-F-Q14', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Sangre', sub:'Plasma y suero',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la diferencia entre plasma y suero?',
  ops:[
    'El suero contiene células y el plasma no',
    'El suero es plasma sin fibrinógeno, porque se consumió al formarse el coágulo',
    'El plasma carece de proteínas y el suero las conserva',
    'El plasma se obtiene tras la coagulación y el suero antes de ella'
  ],
  ok:1,
  clave:'Suero = lo que queda del plasma después de coagular.',
  exp:'El plasma es la fracción líquida de la sangre obtenida cuando se impide la coagulación mediante un anticoagulante, y conserva todas las proteínas plasmáticas, incluido el fibrinógeno. El suero es lo que queda cuando se deja coagular la sangre y se retira el coágulo: el fibrinógeno se ha consumido al transformarse en la fibrina que forma ese coágulo, junto con otros factores de la coagulación. Por eso, si se quiere medir fibrinógeno o estudiar la coagulación, la muestra tiene que ser plasma y no suero. Ninguno de los dos contiene células.',
  no:{
    0:'Ni el plasma ni el suero contienen células: ambas son fracciones acelulares.',
    2:'El plasma conserva todas las proteínas plasmáticas; es el suero el que ha perdido algunas.',
    3:'Es exactamente al revés: el suero se obtiene tras la coagulación.'
  },
  trampa:'Usar plasma y suero como sinónimos. La diferencia decide qué muestra hay que pedir en el laboratorio.',
  obj:'Precisar la diferencia entre plasma y suero y su repercusión práctica.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['plasma','suero','fibrinógeno','coagulación']
},

/* ===================== HISTOLOGIA ===================== */
{
  id:'U7-H-Q07', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido óseo', sub:'Regulación',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'La hormona paratiroidea aumenta la resorción ósea, pero el osteoclasto carece de receptores para ella. ¿Cómo se explica su efecto?',
  ops:[
    'La hormona actúa sobre el osteocito, que reabsorbe directamente la matriz',
    'La hormona actúa sobre el osteoblasto, que a su vez emite señales que activan al osteoclasto',
    'La hormona actúa sobre los precursores sanguíneos, aumentando el número de osteoclastos circulantes',
    'La hormona disuelve químicamente la matriz mineralizada sin intervención celular'
  ],
  ok:1,
  clave:'Quien construye es quien da la orden de demoler.',
  exp:'El osteoclasto no expresa receptores para la hormona paratiroidea. Quien los tiene es el osteoblasto, la célula formadora. Al estimularlo, la hormona hace que el osteoblasto modifique las señales de superficie que dirige hacia los precursores y los osteoclastos maduros, promoviendo su diferenciación y su activación. El resultado neto es resorción, pero la orden pasa necesariamente por la célula constructora. Este acoplamiento entre formación y resorción es un principio general del remodelado óseo y explica por qué ambas actividades están siempre coordinadas y no son independientes.',
  no:{
    0:'El osteocito detecta cargas mecánicas y emite señales, pero no es la célula resortiva principal ni la diana de la hormona en este mecanismo.',
    2:'El efecto no consiste simplemente en aumentar el número de precursores circulantes: la señal se ejerce localmente en el hueso.',
    3:'La resorción ósea es un proceso celular activo, mediado por acidificación y enzimas del osteoclasto.'
  },
  trampa:'Suponer que la hormona actúa directamente sobre la célula que ejecuta el efecto. Aquí hay un intermediario obligatorio.',
  obj:'Explicar el acoplamiento entre osteoblasto y osteoclasto en el remodelado óseo.',
  ref:'Ross, Histología. Texto y Atlas. Junqueira, Histología Básica.',
  tags:['osteoclasto','osteoblasto','paratohormona','remodelado']
},
{
  id:'U7-H-Q08', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Cartílago', sub:'Avascularidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la consecuencia principal de que el cartílago carezca de vasos sanguíneos?',
  ops:[
    'Que no puede mineralizarse en ninguna circunstancia',
    'Que se repara con dificultad, porque no llegan células inflamatorias ni precursores',
    'Que sus células mueren y son sustituidas continuamente',
    'Que no puede soportar cargas mecánicas'
  ],
  ok:1,
  clave:'Sin vasos no llega la maquinaria de reparación.',
  exp:'El cartílago se nutre por difusión desde el pericondrio y, en el caso del cartílago articular, desde el líquido sinovial. Al carecer de vasos, una lesión no desencadena la respuesta habitual de los tejidos vascularizados: no llegan células inflamatorias, ni factores de crecimiento transportados por la sangre, ni precursores capaces de repoblar la zona. Por eso las lesiones del cartílago articular tienden a no curar y, cuando lo hacen, se reparan con fibrocartílago de peor calidad mecánica. Esa misma avascularidad impone además un límite al grosor que el tejido puede alcanzar sin que sus células centrales queden demasiado lejos de la fuente de nutrientes.',
  no:{
    0:'El cartílago sí puede calcificarse, y de hecho la calcificación del molde cartilaginoso es un paso normal de la osificación endocondral.',
    2:'Los condrocitos son células de vida prolongada y baja renovación, no de recambio continuo.',
    3:'El cartílago está precisamente especializado en soportar compresión; su matriz rica en proteoglicanos retiene agua y resiste la carga.'
  },
  trampa:'Quedarse en el dato de que es avascular sin extraer su consecuencia. Lo que se pregunta es siempre la consecuencia.',
  obj:'Derivar las propiedades reparativas del cartílago de su avascularidad.',
  ref:'Ross, Histología. Texto y Atlas. Junqueira, Histología Básica.',
  tags:['cartílago','avascular','reparación','pericondrio','condrocito','laguna']
},
{
  id:'U7-H-Q09', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido óseo', sub:'Crecimiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué estructura permite el crecimiento en longitud de un hueso largo y qué ocurre cuando se cierra?',
  ops:[
    'El periostio; al cerrarse cesa el crecimiento en longitud',
    'El disco epifisario; al cerrarse cesa el crecimiento en longitud pero continúa el crecimiento en grosor',
    'El endostio; al cerrarse cesa todo tipo de crecimiento',
    'La cavidad medular; al cerrarse el hueso deja de remodelarse'
  ],
  ok:1,
  clave:'Longitud por el disco epifisario, grosor por el periostio. Son mecanismos distintos.',
  exp:'El disco epifisario o cartílago de crecimiento es una lámina de cartílago hialino situada entre la epífisis y la metáfisis, en la que los condrocitos proliferan, se hipertrofian y son sustituidos progresivamente por hueso. Mientras permanece abierto, el hueso crece en longitud. Su cierre, inducido en la pubertad por las hormonas sexuales, determina la talla final. El crecimiento en grosor es un mecanismo independiente: se produce por aposición de hueso nuevo desde la capa interna del periostio, y no se detiene con el cierre del disco, lo que permite que el hueso siga engrosándose y remodelándose durante toda la vida en respuesta a las cargas.',
  no:{
    0:'El periostio es responsable del crecimiento en grosor, no en longitud.',
    2:'El endostio reviste las superficies internas y participa en el remodelado, no en el crecimiento longitudinal.',
    3:'La cavidad medular no es una estructura de crecimiento, y el remodelado óseo continúa durante toda la vida.'
  },
  trampa:'Meter ambos crecimientos en el mismo saco. Que se cierre el disco no significa que el hueso deje de cambiar.',
  obj:'Distinguir los mecanismos de crecimiento en longitud y en grosor.',
  ref:'Ross, Histología. Texto y Atlas.',
  tags:['disco epifisario','crecimiento','periostio','osificación endocondral','osteoblasto','osteoclasto']
},

/* ===================== BIOQUIMICA I ===================== */
{
  id:'U7-B-Q08', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'pH y amortiguadores', sub:'Capacidad amortiguadora',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuándo alcanza un sistema amortiguador su máxima capacidad?',
  ops:[
    'Cuando el pH del medio es igual al pKa del sistema',
    'Cuando toda la sustancia se encuentra en su forma ácida',
    'Cuando el pH del medio es máximo',
    'Cuando la concentración del ácido supera diez veces a la de la base conjugada'
  ],
  ok:0,
  clave:'A pH igual al pKa hay tanta base conjugada como ácido.',
  exp:'Según la ecuación de Henderson-Hasselbalch, el pH iguala al pKa cuando las concentraciones de ácido y de base conjugada son iguales, porque el logaritmo de uno es cero. En ese punto el sistema dispone de cantidades comparables de ambas formas y puede por tanto absorber tanto la adición de ácido como la de base con el mínimo cambio de pH. Esa es la definición de máxima capacidad amortiguadora. De ahí sale la regla práctica de que un amortiguador es útil aproximadamente en el intervalo de una unidad de pH por encima y por debajo de su pKa.',
  no:{
    1:'Si toda la sustancia está en forma ácida no queda base conjugada para neutralizar un ácido añadido: la capacidad es mínima en esa dirección.',
    2:'Un pH extremo aleja al sistema de su pKa y reduce su capacidad amortiguadora.',
    3:'Una proporción tan desequilibrada sitúa el pH una unidad por debajo del pKa y reduce la capacidad.'
  },
  trampa:'Buscar la respuesta en la cantidad total de amortiguador. Lo que determina la capacidad es la proporción entre las dos formas.',
  obj:'Relacionar pKa, proporción de formas y capacidad amortiguadora.',
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.',
  tags:['pKa','amortiguador','Henderson-Hasselbalch']
},
{
  id:'U7-B-Q09', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'pH y amortiguadores', sub:'Bicarbonato',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'El sistema bicarbonato/ácido carbónico tiene un pKa de 6,1, alejado del pH sanguíneo de 7,4. ¿Por qué es aun así el principal amortiguador extracelular?',
  ops:[
    'Porque su concentración es mayor que la de cualquier otro sistema del organismo',
    'Porque es un sistema abierto: el pulmón regula el CO2 y el riñón el bicarbonato de forma independiente',
    'Porque el ácido carbónico es un ácido fuerte',
    'Porque su pKa real cambia con la temperatura corporal hasta acercarse a 7,4'
  ],
  ok:1,
  clave:'Es el único amortiguador cuyos dos componentes el organismo puede ajustar activamente.',
  exp:'Un amortiguador cerrado solo puede repartir una cantidad fija de ácido y base conjugada. El sistema bicarbonato es abierto: su componente ácido se convierte en CO2, que el pulmón elimina en cuestión de minutos modificando la ventilación, y su componente básico, el bicarbonato, lo retiene o excreta el riñón en horas o días. Al poder regular ambos extremos de forma independiente, el organismo no se limita a amortiguar pasivamente, sino que controla activamente la relación entre ellos. Esa propiedad compensa con creces la desventaja teórica de tener un pKa alejado del pH fisiológico, y es la base de la interpretación de las gasometrías.',
  no:{
    0:'La concentración de bicarbonato es apreciable, pero por sí sola no explicaría su eficacia con ese pKa; de hecho la hemoglobina aporta también una capacidad amortiguadora enorme.',
    2:'El ácido carbónico es un ácido débil, como corresponde a cualquier componente de un par amortiguador.',
    3:'El pKa varía muy poco con la temperatura y no se desplaza hasta el pH fisiológico.'
  },
  trampa:'Aplicar mecánicamente la regla de que el amortiguador debe tener el pKa cerca del pH. Es cierta para sistemas cerrados, y este no lo es.',
  obj:'Explicar la eficacia del sistema bicarbonato por su carácter abierto.',
  ref:'Lehninger, Principios de Bioquímica. Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['bicarbonato','sistema abierto','pulmón','riñón']
},
{
  id:'U7-B-Q10', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Lípidos', sub:'Colesterol y fluidez',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo afecta el colesterol a la fluidez de la membrana plasmática?',
  ops:[
    'La aumenta siempre, porque separa los fosfolípidos entre sí',
    'La disminuye siempre, porque su anillo rígido inmoviliza las colas',
    'Actúa como amortiguador: la reduce a temperatura fisiológica y la aumenta a temperaturas bajas',
    'No la modifica: solo participa en la síntesis de hormonas'
  ],
  ok:2,
  clave:'El colesterol estabiliza la fluidez en los dos sentidos.',
  exp:'El colesterol se intercala entre los fosfolípidos con su anillo rígido orientado hacia la región de las colas. A temperatura fisiológica restringe el movimiento de esas colas y, por tanto, reduce la fluidez y aumenta la resistencia mecánica de la membrana. A temperaturas bajas, en cambio, su presencia impide que las colas se alineen y se empaqueten de forma ordenada, evitando que la membrana cristalice, y en ese contexto la mantiene más fluida de lo que estaría sin él. Por eso se describe como amortiguador o estabilizador de la fluidez, y no simplemente como un agente que la aumenta o la disminuye.',
  no:{
    0:'A temperatura fisiológica el efecto predominante es el contrario: reduce la fluidez.',
    1:'A temperaturas bajas impide el empaquetamiento y mantiene la membrana más fluida.',
    3:'El colesterol es precursor de hormonas esteroideas, pero además es un componente estructural fundamental de la membrana.'
  },
  trampa:'Buscar una respuesta única. La gracia del colesterol es precisamente que hace dos cosas opuestas según las condiciones.',
  obj:'Describir el papel dual del colesterol en la fluidez de membrana.',
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.',
  tags:['colesterol','fluidez','membrana','mosaico fluido']
},
{
  id:'U7-B-Q11', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Lípidos', sub:'Lipoproteínas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia funcional existe entre las LDL y las HDL?',
  ops:[
    'Las LDL contienen un tipo de colesterol químicamente distinto del de las HDL',
    'Las LDL transportan colesterol hacia los tejidos y las HDL lo retiran de ellos hacia el hígado',
    'Las LDL transportan triglicéridos de la dieta y las HDL de origen hepático',
    'Las HDL carecen de apoproteínas y las LDL las poseen'
  ],
  ok:1,
  clave:'Lo que cambia es la dirección del transporte, no la molécula transportada.',
  exp:'El colesterol es químicamente idéntico en todas las lipoproteínas: lo que distingue a las partículas es su composición, su densidad y, sobre todo, la dirección en que llevan su carga. Las LDL distribuyen colesterol desde el hígado hacia los tejidos periféricos, y su exceso favorece el depósito en la pared arterial y la aterosclerosis. Las HDL realizan el transporte inverso, captando colesterol de los tejidos y devolviéndolo al hígado para su eliminación. De ahí los apodos de colesterol malo y bueno, que son un atajo útil pero engañoso si lleva a pensar que se trata de moléculas distintas.',
  no:{
    0:'La molécula de colesterol es la misma en ambas: no existe un colesterol bueno y otro malo desde el punto de vista químico.',
    2:'El transporte de triglicéridos de la dieta corresponde a los quilomicrones y el de origen hepático a las VLDL.',
    3:'Todas las lipoproteínas poseen apoproteínas, que determinan su destino metabólico.'
  },
  trampa:'Tomarse literalmente lo de colesterol bueno y malo. La diferencia está en el sentido del viaje.',
  obj:'Distinguir LDL y HDL por la dirección del transporte de colesterol.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['LDL','HDL','transporte inverso','lipoproteínas','colesterol','triglicérido']
},

/* ===================== EMBRIOLOGIA ===================== */
{
  id:'U7-E-Q07', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Cordón umbilical', sub:'Vasos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué vasos contiene el cordón umbilical normal y qué tipo de sangre transporta cada uno?',
  ops:[
    'Dos venas con sangre oxigenada y una arteria con sangre desoxigenada',
    'Dos arterias con sangre desoxigenada hacia la placenta y una vena con sangre oxigenada hacia el feto',
    'Dos arterias con sangre oxigenada y una vena con sangre desoxigenada',
    'Una arteria y una vena, ambas con sangre mixta'
  ],
  ok:1,
  clave:'Dos arterias y una vena, y van al revés de lo habitual.',
  exp:'El cordón umbilical normal contiene dos arterias y una vena. Las arterias umbilicales llevan sangre pobre en oxígeno y cargada de desechos desde el feto hacia la placenta, mientras que la vena umbilical devuelve al feto sangre oxigenada y rica en nutrientes. Es una de las dos situaciones del organismo en las que las arterias no transportan sangre oxigenada, junto con la arteria pulmonar: la definición de arteria depende de la dirección del flujo respecto al corazón, no del contenido de oxígeno. La presencia de una sola arteria umbilical se asocia a mayor frecuencia de malformaciones y obliga a estudiar al recién nacido.',
  no:{
    0:'El número está invertido: son dos arterias y una vena, no al revés.',
    2:'El contenido está invertido: las arterias umbilicales llevan la sangre desoxigenada.',
    3:'El cordón normal tiene tres vasos, no dos, y la sangre no es mixta en ellos.'
  },
  trampa:'Aplicar la regla de que las arterias llevan sangre oxigenada. En la circulación fetal y en la pulmonar no se cumple.',
  obj:'Describir la composición del cordón umbilical y el sentido de sus flujos.',
  ref:'Langman, Embriología Médica. Moore, Embriología Clínica.',
  tags:['cordón umbilical','arterias umbilicales','vena umbilical','circulación fetal']
},
{
  id:'U7-E-Q08', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Líquido amniótico', sub:'Origen',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En una ecografía del tercer trimestre se detecta una cantidad de líquido amniótico muy inferior a la esperada.',
  enunciado:'¿Qué alteración fetal debe considerarse en primer lugar?',
  ops:[
    'Una atresia esofágica que impida la deglución',
    'Una alteración del aparato urinario que reduzca la producción de orina fetal',
    'Un defecto del tubo neural',
    'Una cardiopatía congénita cianosante'
  ],
  ok:1,
  clave:'A partir del segundo trimestre, el líquido amniótico es en gran parte orina fetal.',
  exp:'Desde el segundo trimestre, la mayor parte del líquido amniótico procede de la orina que produce el feto, que lo deglute y lo recicla continuamente. El volumen resulta por tanto del equilibrio entre producción y deglución. Si el feto produce poca orina, por agenesia renal, displasia renal o una uropatía obstructiva, el volumen disminuye y aparece oligohidramnios. Si por el contrario no puede deglutir, como ocurre en la atresia esofágica o en algunas alteraciones neurológicas, el líquido se acumula y aparece polihidramnios. Razonar el volumen como un balance entre esas dos vías permite orientar el diagnóstico sin memorizar listas.',
  no:{
    0:'La atresia esofágica impide la deglución y produce lo contrario: polihidramnios.',
    2:'Los defectos del tubo neural se asocian más bien a polihidramnios cuando alteran la deglución, y su hallazgo característico es la elevación de la alfafetoproteína.',
    3:'Las cardiopatías congénitas no alteran de forma característica y directa el volumen de líquido amniótico por este mecanismo.'
  },
  trampa:'Memorizar las asociaciones sin el mecanismo. Pensar en producción menos deglución resuelve las dos situaciones a la vez.',
  obj:'Razonar las alteraciones del volumen de líquido amniótico a partir de su origen.',
  ref:'Langman, Embriología Médica. Moore, Embriología Clínica.',
  tags:['oligohidramnios','polihidramnios','orina fetal','líquido amniótico']
},
{
  id:'U7-E-Q09', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Placenta', sub:'Función inmunitaria',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué clase de inmunoglobulina atraviesa la placenta y confiere inmunidad pasiva al feto?',
  ops:['IgM','IgG','IgA','IgE'],
  ok:1,
  clave:'Solo la IgG cruza la placenta.',
  exp:'La IgG es la única clase de inmunoglobulina capaz de atravesar la placenta, mediante un transporte activo a través de receptores específicos del sincitiotrofoblasto. Ese paso proporciona al recién nacido una inmunidad pasiva que lo protege durante los primeros meses de vida, mientras su propio sistema inmunitario madura. Tiene además una consecuencia diagnóstica: detectar IgG específica en un recién nacido puede reflejar simplemente anticuerpos maternos, mientras que encontrar IgM, que no atraviesa la placenta, indica que el propio feto la produjo y por tanto sugiere infección congénita.',
  no:{
    0:'La IgM no atraviesa la placenta por su gran tamaño; su presencia en el recién nacido apunta a producción propia.',
    2:'La IgA llega al lactante a través de la leche materna, sobre todo del calostro, no por vía placentaria.',
    3:'La IgE no atraviesa la placenta y se relaciona con reacciones alérgicas y parasitosis.'
  },
  trampa:'Confundir la vía placentaria con la de la lactancia. La IgG va por la placenta; la IgA, por la leche.',
  obj:'Identificar la inmunoglobulina que atraviesa la placenta y su relevancia diagnóstica.',
  ref:'Langman, Embriología Médica. Moore, Embriología Clínica.',
  tags:['IgG','inmunidad pasiva','placenta','IgM']
},

/* ===================== MICROBIOLOGIA MEDICA ===================== */
{
  id:'U7-M-Q08', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Virología', sub:'Envoltura',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Un virus se transmite característicamente por vía fecal-oral y resiste bien en el ambiente. ¿Qué se puede deducir de su estructura?',
  ops:[
    'Que posee envoltura lipídica, que lo protege del ácido gástrico',
    'Que carece de envoltura, lo que le permite resistir el ácido gástrico y los detergentes',
    'Que su genoma es necesariamente de ADN',
    'Que se replica exclusivamente en el citoplasma'
  ],
  ok:1,
  clave:'Sin envoltura se sobrevive al estómago; con envoltura, no.',
  exp:'Los virus envueltos llevan una membrana lipídica que se destruye con facilidad por desecación, detergentes, alcohol y jabón, y también por el ácido gástrico. Por eso dependen del contacto directo, las gotas respiratorias o la vía sanguínea. Los virus desnudos, al carecer de esa envoltura, resisten mucho mejor en el ambiente y atraviesan el estómago sin inactivarse, lo que hace viable la transmisión fecal-oral. El razonamiento funciona en ambas direcciones: si un virus se transmite por vía fecal-oral, casi con seguridad es desnudo, y si lo elimina el jabón con facilidad, casi con seguridad es envuelto.',
  no:{
    0:'La envoltura es precisamente lo que hace al virus frágil ante el ácido y los detergentes.',
    2:'La presencia o ausencia de envoltura es independiente de que el genoma sea de ADN o de ARN.',
    3:'El lugar de replicación varía entre familias y no se deduce de la vía de transmisión.'
  },
  trampa:'Asociar envoltura con protección. La envoltura es lipídica, y lo lipídico se destruye con facilidad fuera del huésped.',
  obj:'Deducir la estructura viral a partir de su mecanismo de transmisión.',
  ref:'Murray, Microbiología Médica. Jawetz, Microbiología Médica.',
  tags:['virus desnudo','fecal-oral','envoltura','resistencia ambiental']
},
{
  id:'U7-M-Q09', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Virología', sub:'Retrovirus',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué particularidad de los retrovirus explica que la infección por VIH persista de por vida pese al tratamiento?',
  ops:[
    'Que su cápside resiste la acción de los antivirales',
    'Que su transcriptasa inversa genera ADN que se integra en el genoma de la célula huésped',
    'Que se replican exclusivamente en células que no se dividen',
    'Que poseen simultáneamente ADN y ARN en su partícula'
  ],
  ok:1,
  clave:'El genoma viral pasa a formar parte del genoma de la célula.',
  exp:'Los retrovirus llevan un genoma de ARN y una enzima propia, la transcriptasa inversa, que sintetiza ADN a partir de ese ARN invirtiendo el flujo habitual de la información genética. Ese ADN se integra después en el genoma de la célula infectada mediante una integrasa. A partir de ese momento, la información viral se replica junto con el ADN celular y se transmite a las células hijas. Los antivirales pueden bloquear la replicación activa y reducir la carga viral a niveles indetectables, pero no eliminan el material integrado en los reservorios celulares, razón por la cual el tratamiento controla la infección sin curarla.',
  no:{
    0:'La resistencia de la cápside no es el problema: los antivirales actúan sobre enzimas virales y son eficaces en la replicación activa.',
    2:'El VIH infecta linfocitos T CD4 y otras células, e incluso puede permanecer latente en células que no se dividen activamente, pero eso no es lo que define a los retrovirus.',
    3:'Ningún virus contiene ambos tipos de ácido nucleico en su partícula.'
  },
  trampa:'Atribuir la persistencia a la resistencia farmacológica. La causa es la integración en el genoma, no la resistencia.',
  obj:'Relacionar la integración retroviral con la persistencia de la infección.',
  ref:'Murray, Microbiología Médica. Jawetz, Microbiología Médica.',
  tags:['retrovirus','transcriptasa inversa','integración','VIH']
},
{
  id:'U7-M-Q10', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Virología', sub:'Antibióticos',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los antibióticos son ineficaces frente a las infecciones virales?',
  ops:[
    'Porque los virus mutan demasiado rápido para que el fármaco los alcance',
    'Porque los virus carecen de las estructuras y procesos bacterianos sobre los que actúan los antibióticos',
    'Porque los virus se encuentran siempre dentro de las células y el fármaco no penetra',
    'Porque los antibióticos se inactivan en presencia de partículas virales'
  ],
  ok:1,
  clave:'No hay diana: el virus no tiene pared, ni ribosoma bacteriano, ni girasa.',
  exp:'Los antibióticos actúan sobre estructuras y procesos propios de las bacterias: la síntesis del peptidoglicano de la pared, el ribosoma bacteriano, la ADN girasa o determinadas rutas metabólicas. Un virus no posee ninguna de esas cosas: carece de pared, de ribosomas y de metabolismo propio, y utiliza la maquinaria de la célula que infecta. Sencillamente no hay diana sobre la que actuar. Los antivirales, en cambio, se dirigen a pasos concretos del ciclo viral —entrada, transcripción inversa, replicación del genoma, ensamblaje o liberación—, y por eso suelen ser de espectro muy estrecho, específicos de una familia viral.',
  no:{
    0:'La velocidad de mutación explica la aparición de resistencias a los antivirales, no la ineficacia intrínseca de los antibióticos.',
    2:'Muchos antibióticos alcanzan concentraciones intracelulares adecuadas; el problema no es la penetración sino la ausencia de diana.',
    3:'No existe tal inactivación: los antibióticos conservan su actividad, simplemente no tienen sobre qué actuar.'
  },
  trampa:'Explicarlo por la localización intracelular. El argumento correcto es la ausencia de la estructura que el fármaco ataca.',
  obj:'Fundamentar la inutilidad de los antibióticos frente a los virus.',
  ref:'Murray, Microbiología Médica. Jawetz, Microbiología Médica.',
  tags:['antibiótico','antiviral','diana terapéutica','virus']
},

/* ===================== ESTADISTICA I ===================== */
{
  id:'U7-S-Q07', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Gráficos', sub:'Histograma',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la diferencia visible entre un histograma y un gráfico de barras, y a qué se debe?',
  ops:[
    'El histograma usa colores y el de barras no; es una convención estética',
    'En el histograma las barras van pegadas porque representan intervalos contiguos de una variable continua; en el de barras van separadas porque las categorías son discontinuas',
    'El histograma se emplea para variables cualitativas y el de barras para cuantitativas',
    'El histograma siempre representa frecuencias acumuladas'
  ],
  ok:1,
  clave:'Barras pegadas = continuo. Barras separadas = categorías.',
  exp:'En un histograma cada barra representa un intervalo de clase de una variable cuantitativa continua, y como esos intervalos son contiguos —el final de uno es el comienzo del siguiente— las barras se dibujan pegadas. En un gráfico de barras cada barra representa una categoría de una variable cualitativa, y entre categorías no hay continuidad alguna, de modo que las barras se separan para reflejarlo. La separación no es un detalle decorativo: informa de la naturaleza de la variable representada, y por eso se pregunta.',
  no:{
    0:'El color es una elección de presentación y no distingue ambos gráficos.',
    2:'Es exactamente al revés: el histograma es para cuantitativas continuas y el de barras para cualitativas.',
    3:'El histograma representa habitualmente frecuencias simples; las acumuladas se representan en la ojiva.'
  },
  trampa:'Tratarlo como una cuestión de estilo. La forma del gráfico codifica el tipo de variable.',
  obj:'Asociar el tipo de gráfico con la naturaleza de la variable.',
  ref:'Dawson y Trapp, Bioestadística Médica.',
  tags:['histograma','gráfico de barras','variable continua']
},
{
  id:'U7-S-Q08', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Gráficos', sub:'Lectura crítica',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un gráfico compara dos tratamientos. Las barras muestran una diferencia aparentemente enorme, pero el eje vertical comienza en 82% y termina en 86%.',
  enunciado:'¿Cómo debe interpretarse ese gráfico?',
  ops:[
    'La diferencia es real y de gran magnitud, puesto que las barras son claramente distintas',
    'La diferencia real es de pocos puntos porcentuales; truncar el eje la exagera visualmente',
    'El gráfico es inválido y sus datos no pueden utilizarse',
    'El eje truncado indica que los datos fueron transformados logarítmicamente'
  ],
  ok:1,
  clave:'Un eje que no empieza en cero amplifica ópticamente diferencias pequeñas.',
  exp:'Truncar el eje vertical es una de las maneras más comunes de representar datos correctos de forma engañosa. Si el eje abarca solo de 82 a 86, una diferencia de dos puntos porcentuales ocupa toda la altura del gráfico y parece enorme, cuando en términos absolutos es pequeña. Los números no mienten, pero la impresión visual sí. La conducta adecuada no es descartar el gráfico, sino leer la escala antes que las barras y valorar la magnitud real de la diferencia, además de si es clínicamente relevante y estadísticamente significativa.',
  no:{
    0:'La altura relativa de las barras depende por completo de la escala elegida; no puede leerse como magnitud.',
    2:'El gráfico es mejorable pero los datos siguen siendo utilizables: lo que hay que corregir es la lectura.',
    3:'Truncar el eje no implica transformación logarítmica, que se indicaría expresamente.'
  },
  trampa:'Mirar primero las barras. Lo primero que hay que mirar en cualquier gráfico es dónde empieza el eje.',
  obj:'Detectar la exageración visual producida por un eje truncado.',
  ref:'Dawson y Trapp, Bioestadística Médica.',
  tags:['eje truncado','lectura crítica','gráficos engañosos']
},
{
  id:'U7-S-Q09', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Tablas de frecuencias', sub:'Frecuencia relativa',
  dif:1, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Para qué resulta imprescindible la frecuencia relativa frente a la absoluta?',
  ops:[
    'Para calcular la mediana de la distribución',
    'Para comparar grupos de distinto tamaño',
    'Para representar variables cualitativas nominales',
    'Para determinar el número de intervalos de clase'
  ],
  ok:1,
  clave:'Sin denominador no hay comparación posible.',
  exp:'La frecuencia absoluta es un recuento y depende del tamaño del grupo: veinte casos significan cosas muy distintas si el grupo tiene cien miembros o diez mil. La frecuencia relativa expresa ese recuento como proporción del total, lo que permite comparar directamente grupos de tamaño diferente. Es la razón por la que en medicina se trabaja con tasas y proporciones más que con números absolutos: el número de casos sin su denominador no informa del riesgo. Para calcular la mediana se emplean las frecuencias acumuladas, que responden a otra pregunta.',
  no:{
    0:'La mediana se localiza con las frecuencias acumuladas, no con las relativas simples.',
    2:'Ambos tipos de frecuencia sirven para variables cualitativas; la relativa no es exclusiva de ellas.',
    3:'El número de intervalos se decide según el tamaño de la muestra y el detalle deseado, con independencia del tipo de frecuencia.'
  },
  trampa:'Impresionarse con cifras absolutas. La pregunta relevante es siempre sobre cuántos.',
  obj:'Justificar el uso de frecuencias relativas en la comparación de grupos.',
  ref:'Dawson y Trapp, Bioestadística Médica.',
  tags:['frecuencia relativa','proporción','comparación','denominador']
}

]);
