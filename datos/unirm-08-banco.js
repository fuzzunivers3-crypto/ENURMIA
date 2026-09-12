/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8
   Ciclo de Ciencias Basicas, pensum MED-R1-2014.

   Mismo formato que el cuatrimestre 7: se pregunta el mecanismo,
   y la explicacion tiene que servir para estudiar aunque se
   falle. El reparto sigue los creditos del pensum.

   `esp` es la ASIGNATURA, no una especialidad medica.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== ANATOMIA II ===================== */
{
  id:'U8-A-Q01', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Pericardio', sub:'Taponamiento',
  dif:3, hab:'Comprensión', tipo:'caso', verificado:true,
  caso:'Dos pacientes tienen líquido en el saco pericárdico. El primero acumuló 200 mL en una hora tras un traumatismo; el segundo acumuló 800 mL a lo largo de varias semanas por un derrame crónico. El primero está en shock; el segundo está estable.',
  enunciado:'¿Qué explica esta diferencia?',
  ops:[
    'El líquido traumático es más denso y comprime más',
    'El pericardio fibroso es poco distensible: si el líquido se acumula rápido, no tiene tiempo de adaptarse y la presión sube bruscamente',
    'El derrame crónico se localiza fuera del saco pericárdico',
    'La sangre no ejerce presión hidrostática sobre las cavidades cardíacas'
  ],
  ok:1,
  clave:'Lo que manda es la velocidad de acumulación, no el volumen absoluto.',
  exp:'La hoja fibrosa del pericardio es resistente y poco distensible. Si el líquido se acumula lentamente, el saco va adaptándose y puede llegar a alojar un litro sin comprometer el llenado ventricular. Si la acumulación es rápida, no hay tiempo para esa adaptación: la presión intrapericárdica sube de golpe y comprime primero las cavidades derechas, que son las de pared más fina, impidiendo el llenado diastólico y precipitando el shock obstructivo. Por eso bastan a veces 150 o 200 mL en un contexto agudo mientras que volúmenes mucho mayores son tolerados cuando llegan despacio.',
  no:{
    0:'La densidad del líquido no es el factor determinante; lo es la velocidad con que se acumula frente a la distensibilidad del saco.',
    2:'Un derrame pericárdico crónico está dentro del saco por definición; lo que ocurre es que el saco se ha adaptado.',
    3:'El líquido sí ejerce presión sobre las cavidades: ese es precisamente el mecanismo del taponamiento.'
  },
  trampa:'Pensar en el volumen absoluto. La misma cantidad puede ser inocua o mortal según con qué rapidez aparezca.',
  obj:'Relacionar la distensibilidad del pericardio con la fisiopatología del taponamiento.',
  ref:'Moore, Anatomía con orientación clínica. Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['pericardio','taponamiento','distensibilidad']
},
{
  id:'U8-A-Q02', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Coronarias', sub:'Perfusión diastólica',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una taquicardia sostenida muy rápida puede producir isquemia miocárdica incluso con arterias coronarias sanas?',
  ops:[
    'Porque el aumento de frecuencia reduce la presión aórtica por debajo del umbral de perfusión',
    'Porque el miocardio se perfunde en diástole, y la taquicardia acorta sobre todo la diástole',
    'Porque las coronarias se contraen activamente durante la taquicardia',
    'Porque en taquicardia la sangre pasa directamente de la aorta al ventrículo'
  ],
  ok:1,
  clave:'La diástole es a la vez el llenado del ventrículo y el riego del propio músculo.',
  exp:'Las coronarias nacen de los senos aórticos, justo por encima de la válvula aórtica. Durante la sístole, las valvas abiertas quedan aplicadas contra la pared y los ostium quedan prácticamente cubiertos; además la contracción del propio miocardio comprime los vasos intramurales. El resultado es que el corazón se irriga fundamentalmente durante la diástole. Cuando la frecuencia aumenta mucho, el tiempo que se acorta proporcionalmente más es el diastólico, de modo que se reduce la ventana de perfusión justo cuando la demanda de oxígeno es mayor. De ahí que la taquicardia pueda desencadenar isquemia sin que haya obstrucción coronaria.',
  no:{
    0:'La presión aórtica puede incluso mantenerse; el problema es el tiempo disponible para perfundir, no la presión.',
    2:'Las coronarias no se contraen activamente en respuesta a la taquicardia; de hecho la isquemia tiende a dilatarlas.',
    3:'No existe ese paso directo: la válvula aórtica lo impide durante la diástole.'
  },
  trampa:'Buscar una explicación en la presión. La variable clave aquí es el tiempo.',
  obj:'Explicar la perfusión coronaria diastólica y su repercusión clínica.',
  ref:'Moore, Anatomía con orientación clínica. Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['coronaria','diástole','isquemia','taquicardia']
},
{
  id:'U8-A-Q03', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Coronarias', sub:'Territorio',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente sufre un infarto de cara inferior. Durante el ingreso presenta bradicardia marcada y un bloqueo auriculoventricular.',
  enunciado:'¿Qué explica anatómicamente esa asociación?',
  ops:[
    'La descendente anterior irriga el sistema de conducción',
    'La coronaria derecha irriga, en la mayoría de las personas, el nodo sinusal y el nodo auriculoventricular',
    'La circunfleja irriga el haz de His en todos los casos',
    'El bloqueo se debe siempre al tratamiento, no a la localización del infarto'
  ],
  ok:1,
  clave:'Los nodos dependen habitualmente de la coronaria derecha, que también da la cara inferior.',
  exp:'En la mayoría de las personas la coronaria derecha irriga la cara inferior del corazón y emite además las ramas que nutren el nodo sinusal y el nodo auriculoventricular. Por eso el infarto inferior, que es territorio de la coronaria derecha, se acompaña con frecuencia de bradicardia sinusal y de bloqueos auriculoventriculares, que suelen ser transitorios y de buen pronóstico relativo. Conocer esta correspondencia permite anticipar la complicación en lugar de encontrarla por sorpresa.',
  no:{
    0:'La descendente anterior irriga la cara anterior y el tabique anterior; su oclusión afecta a otro territorio.',
    2:'La circunfleja irriga la cara lateral y, en una minoría de personas con dominancia izquierda, la cara inferior.',
    3:'Los fármacos pueden contribuir, pero la asociación entre infarto inferior y trastornos de conducción tiene base anatómica.'
  },
  trampa:'Estudiar las coronarias sin su correspondencia con las caras del corazón. La utilidad del tema está justo en esa correspondencia.',
  obj:'Asociar el territorio coronario con las complicaciones esperables.',
  ref:'Moore, Anatomía con orientación clínica. Netter, Atlas de Anatomía Humana.',
  tags:['coronaria derecha','infarto inferior','nodo AV','bradicardia']
},
{
  id:'U8-A-Q04', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Hernias', sub:'Inguinal',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la referencia anatómica que distingue una hernia inguinal directa de una indirecta?',
  ops:[
    'El ligamento inguinal: por encima es directa y por debajo indirecta',
    'Los vasos epigástricos inferiores: lateral a ellos es indirecta y medial es directa',
    'El músculo recto del abdomen: medial a él es indirecta',
    'El anillo inguinal superficial: si lo atraviesa es siempre directa'
  ],
  ok:1,
  clave:'La frontera es siempre vascular: los vasos epigástricos inferiores.',
  exp:'La hernia indirecta sale por el anillo inguinal profundo, que se sitúa lateral a los vasos epigástricos inferiores, y recorre después el conducto inguinal siguiendo el trayecto que dejó el descenso testicular. Su origen es congénito, es la más frecuente, y como sigue un camino ya existente puede llegar hasta el escroto. La hernia directa empuja a través de la pared posterior del conducto, medial a esos mismos vasos, por una debilidad adquirida; es más propia del adulto mayor y rara vez alcanza el escroto. La relación con los vasos epigástricos inferiores es el criterio anatómico que las separa, y es el que se aplica en el quirófano.',
  no:{
    0:'Por debajo del ligamento inguinal se sitúa la hernia crural o femoral, que es una entidad distinta de ambas.',
    2:'El recto del abdomen delimita otras hernias de la pared, no la distinción entre directa e indirecta.',
    3:'Ambas pueden alcanzar el anillo superficial; atravesarlo no las diferencia.'
  },
  trampa:'Intentar distinguirlas por el tamaño o por la clínica. El criterio es la posición respecto a un vaso concreto.',
  obj:'Aplicar la referencia vascular que clasifica las hernias inguinales.',
  ref:'Moore, Anatomía con orientación clínica.',
  tags:['hernia inguinal','epigástricos inferiores','directa','indirecta']
},
{
  id:'U8-A-Q05', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Conducción', sub:'Esqueleto fibroso',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el nodo auriculoventricular constituye el único paso eléctrico entre aurículas y ventrículos?',
  ops:[
    'Porque es la estructura con mayor velocidad de conducción del corazón',
    'Porque el esqueleto fibroso aísla eléctricamente la musculatura auricular de la ventricular',
    'Porque las aurículas carecen de tejido excitable en su porción inferior',
    'Porque el pericardio separa físicamente ambas cavidades'
  ],
  ok:1,
  clave:'El aislamiento lo produce el esqueleto fibroso, no una propiedad del nodo.',
  exp:'El esqueleto fibroso del corazón es un armazón de tejido conjuntivo denso que rodea los orificios valvulares y da inserción a la musculatura auricular y ventricular. Al no ser conductor, impide que el impulso pase directamente de unas cavidades a otras, de modo que el único trayecto disponible es el nodo auriculoventricular y el haz de His. Esa obligatoriedad tiene sentido funcional: el nodo conduce con lentitud, y ese retraso fisiológico da tiempo a que las aurículas terminen de vaciarse antes de que los ventrículos se contraigan. La anatomía impone así una secuencia que de otro modo habría que regular de alguna otra manera.',
  no:{
    0:'El nodo auriculoventricular es, al contrario, la estructura de conducción más lenta; esa lentitud es su función.',
    2:'La musculatura auricular es excitable en toda su extensión; lo que falta es continuidad con la ventricular.',
    3:'El pericardio envuelve el corazón por fuera y no separa aurículas de ventrículos.'
  },
  trampa:'Atribuir el fenómeno a una propiedad del nodo. El nodo es la consecuencia, no la causa: la causa es un aislante.',
  obj:'Explicar el papel del esqueleto fibroso en la secuencia de activación cardíaca.',
  ref:'Moore, Anatomía con orientación clínica. Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['esqueleto fibroso','nodo AV','haz de His','conducción']
},
{
  id:'U8-A-Q06', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Corazón', sub:'Pared ventricular',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'El ventrículo izquierdo tiene una pared mucho más gruesa que el derecho porque:',
  ops:[
    'Bombea un volumen de sangre considerablemente mayor',
    'Debe expulsar contra una resistencia y una presión mucho más altas',
    'Contiene más tejido de conducción especializado',
    'Recibe sangre de las dos aurículas'
  ],
  ok:1,
  clave:'Los dos ventrículos expulsan el mismo volumen; cambia la presión.',
  exp:'Ambos ventrículos están dispuestos en serie dentro del mismo circuito, de manera que a largo plazo tienen que expulsar exactamente el mismo volumen por minuto: si no lo hicieran, la sangre se acumularía progresivamente en uno de los dos lados. Lo que los diferencia es la resistencia contra la que trabajan. El ventrículo derecho envía sangre a la circulación pulmonar, de baja presión y baja resistencia; el izquierdo la envía a la circulación sistémica, con presiones mucho mayores. La hipertrofia de su pared es la adaptación a esa carga de presión, no a un volumen distinto.',
  no:{
    0:'El volumen es el mismo: están en serie, no en paralelo.',
    2:'La red de Purkinje se distribuye por ambos ventrículos y no explica la diferencia de grosor.',
    3:'Cada ventrículo recibe de su propia aurícula.'
  },
  trampa:'Suponer que más pared significa más sangre. Significa más presión.',
  obj:'Distinguir carga de presión de carga de volumen en el corazón.',
  ref:'Moore, Anatomía con orientación clínica. Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['ventrículo izquierdo','poscarga','circulación en serie']
},

/* ===================== FISIOLOGIA II ===================== */
{
  id:'U8-F-Q01', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Ciclo cardíaco', sub:'Fases isovolumétricas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Durante la contracción isovolumétrica del ventrículo izquierdo:',
  ops:[
    'La válvula mitral está abierta y la aórtica cerrada',
    'Ambas válvulas están cerradas: la presión aumenta pero el volumen no cambia',
    'La válvula aórtica está abierta y comienza la eyección',
    'El ventrículo se está llenando desde la aurícula'
  ],
  ok:1,
  clave:'Isovolumétrico significa, literalmente, que el volumen no cambia porque no hay salida.',
  exp:'La contracción isovolumétrica ocurre entre el cierre de la válvula mitral y la apertura de la aórtica. La mitral se ha cerrado porque la presión ventricular ya superó a la auricular, pero la aórtica todavía no se abre porque la presión ventricular aún no ha alcanzado a la aórtica. Con las dos válvulas cerradas, el ventrículo se contrae sobre un volumen de sangre que no tiene por dónde salir: la presión sube rápidamente mientras el volumen permanece constante. Existe una fase equivalente al final de la sístole, la relajación isovolumétrica, entre el cierre de la aórtica y la apertura de la mitral.',
  no:{
    0:'Si la mitral estuviera abierta, la sangre refluiría hacia la aurícula y el volumen cambiaría.',
    2:'La apertura de la aórtica marca precisamente el final de la fase isovolumétrica.',
    3:'El llenado ocurre en diástole, con la mitral abierta.'
  },
  trampa:'No usar el propio nombre de la fase. Isovolumétrico ya dice que el volumen no cambia, y de ahí se deduce que no hay válvula abierta.',
  obj:'Situar las fases isovolumétricas dentro del ciclo cardíaco.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['isovolumétrico','ciclo cardíaco','válvulas']
},
{
  id:'U8-F-Q02', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Frank-Starling', sub:'Mecanismo',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la base celular de la ley de Frank-Starling?',
  ops:[
    'Un aumento de la frecuencia de descarga del nodo sinusal al estirarse la aurícula',
    'Una mejora del solapamiento entre actina y miosina al estirarse el sarcómero, que permite más puentes cruzados',
    'Un aumento de la permeabilidad de la membrana al sodio',
    'Una liberación adicional de noradrenalina por las terminaciones simpáticas cardíacas'
  ],
  ok:1,
  clave:'Es la relación longitud-tensión del sarcómero, vista desde el corazón entero.',
  exp:'Al aumentar el llenado ventricular, las fibras miocárdicas se estiran y los sarcómeros alcanzan una longitud en la que el solapamiento entre los filamentos de actina y miosina es más favorable, de modo que pueden formarse más puentes cruzados y la contracción resulta más fuerte. Es exactamente la relación longitud-tensión estudiada en el músculo esquelético, aplicada aquí al corazón. Su valor funcional es que permite a los dos ventrículos, dispuestos en serie, igualar automáticamente su volumen expulsado sin necesidad de ninguna señal nerviosa ni hormonal: un mecanismo intrínseco de ajuste latido a latido.',
  no:{
    0:'El estiramiento auricular puede aumentar algo la frecuencia, pero eso no es el mecanismo de Frank-Starling, que se refiere a la fuerza de contracción.',
    2:'La permeabilidad al sodio no es el factor implicado en esta relación.',
    3:'El mecanismo es intrínseco al músculo y se mantiene en un corazón denervado o trasplantado.'
  },
  trampa:'Explicarlo por el sistema nervioso. Es intrínseco: funciona en un corazón aislado.',
  obj:'Fundamentar la ley de Frank-Starling en la mecánica del sarcómero.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['Frank-Starling','sarcómero','precarga','puentes cruzados']
},
{
  id:'U8-F-Q03', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Filtración glomerular', sub:'Arteriolas',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'La contracción de la arteriola eferente, manteniendo todo lo demás constante, produce:',
  ops:[
    'Un descenso del filtrado glomerular, por menor llegada de sangre',
    'Un aumento del filtrado glomerular, por aumento de la presión hidrostática dentro del glomérulo',
    'Ningún cambio, porque el glomérulo autorregula por completo',
    'Un aumento del filtrado únicamente si se contrae también la aferente'
  ],
  ok:1,
  clave:'La eferente es la salida: cerrarla represa la sangre dentro del glomérulo.',
  exp:'Las dos arteriolas del glomérulo actúan en sentidos opuestos sobre el filtrado. La aferente es la entrada: contraerla reduce el flujo que llega y baja la presión intraglomerular, disminuyendo el filtrado. La eferente es la salida: contraerla dificulta el vaciado y aumenta la presión hidrostática dentro del capilar glomerular, lo que incrementa la filtración pese a que el flujo renal total disminuya. La angiotensina II actúa preferentemente sobre la eferente, y ese es el mecanismo por el que sostiene el filtrado en situaciones de baja perfusión renal. También explica por qué un fármaco que bloquee ese sistema puede reducir bruscamente el filtrado en un paciente que dependía de esa vasoconstricción.',
  no:{
    0:'Ese sería el efecto de contraer la arteriola aferente, no la eferente.',
    2:'La autorregulación amortigua los cambios de presión sistémica, pero no anula el efecto de la vasoconstricción selectiva de cada arteriola.',
    3:'El efecto de la eferente sobre la presión intraglomerular no depende de lo que haga la aferente.'
  },
  trampa:'Razonar solo con el flujo que llega. Lo que filtra es la presión dentro del ovillo, y esa depende también de la salida.',
  obj:'Explicar el control del filtrado glomerular por ambas arteriolas.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['arteriola eferente','filtrado glomerular','angiotensina II']
},
{
  id:'U8-F-Q04', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Función renal', sub:'Creatinina',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente joven presenta una creatinina sérica que ha pasado de 0,8 a 1,6 mg/dL en un año. Otro paciente, con enfermedad renal conocida, ha pasado de 4,0 a 4,8 mg/dL en el mismo periodo.',
  enunciado:'¿Cómo debe interpretarse la comparación entre ambos?',
  ops:[
    'El segundo ha perdido más función, porque su creatinina es más alta',
    'El primero ha perdido aproximadamente la mitad de su filtrado; la relación entre creatinina y filtrado es inversa, no lineal',
    'Ambos han perdido la misma función, porque el incremento porcentual es similar',
    'No puede compararse: la creatinina no informa del filtrado glomerular'
  ],
  ok:1,
  clave:'Duplicar la creatinina desde un valor normal significa perder alrededor de la mitad del filtrado.',
  exp:'La creatinina y el filtrado glomerular guardan una relación aproximadamente inversa, de modo que la curva es muy empinada al principio y muy plana después. Duplicar la creatinina desde un valor normal, de 0,8 a 1,6, corresponde aproximadamente a perder la mitad del filtrado, aunque ambas cifras puedan parecer pequeñas. En cambio, cuando la creatinina ya está en 4, un incremento adicional refleja una pérdida de función mucho menor en términos absolutos, porque queda poca función que perder. Por eso una creatinina "solo un poco alta" en una persona joven puede ser más preocupante de lo que sugiere el número, y por eso se emplean fórmulas de estimación del filtrado en lugar de leer la creatinina aislada.',
  no:{
    0:'La cifra absoluta no indica cuánta función se ha perdido en el periodo observado.',
    2:'El incremento porcentual no se traduce linealmente en pérdida de filtrado, precisamente por la forma de la relación.',
    3:'La creatinina sí informa del filtrado; lo que hay que conocer es la forma no lineal de esa relación.'
  },
  trampa:'Leer la creatinina como si subiera en proporción al daño. Sube poco al principio, cuando más se pierde.',
  obj:'Interpretar la creatinina sérica en función de su relación no lineal con el filtrado.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['creatinina','filtrado glomerular','relación inversa']
},
{
  id:'U8-F-Q05', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Equilibrio ácido-base', sub:'Anión gap',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'En una acidosis metabólica con anión gap normal, ¿qué ha ocurrido?',
  ops:[
    'Se ha añadido un ácido cuyo anión no se mide de rutina',
    'Se ha perdido bicarbonato, y el cloro ha aumentado para mantener la electroneutralidad',
    'Se ha retenido CO2 por hipoventilación',
    'El riñón ha aumentado la excreción de cloro'
  ],
  ok:1,
  clave:'Anión gap normal significa que no entró ningún anión nuevo: el bicarbonato se fue por un desagüe.',
  exp:'El anión gap estima los aniones no medidos de rutina. Cuando se añade un ácido nuevo —cetoácidos, lactato, ciertos tóxicos o los aniones retenidos en la insuficiencia renal—, su anión acompañante engrosa esa fracción no medida y el anión gap se eleva. Cuando la acidosis se debe a una pérdida directa de bicarbonato, como ocurre en las diarreas o en algunas acidosis tubulares renales, no entra ningún anión nuevo: el cloro sube para ocupar el lugar del bicarbonato perdido y mantener la electroneutralidad, de modo que el anión gap permanece normal. Por eso a este patrón se le llama también acidosis hiperclorémica. Toda la utilidad del anión gap consiste en distinguir esas dos situaciones.',
  no:{
    0:'Añadir un ácido con anión no medido es precisamente lo que eleva el anión gap.',
    2:'La retención de CO2 produce acidosis respiratoria, no metabólica, y el anión gap no interviene en su análisis.',
    3:'El aumento del cloro es una consecuencia compensadora, no la causa del trastorno.'
  },
  trampa:'Calcular el anión gap en cualquier gasometría. Solo aporta información en la acidosis metabólica.',
  obj:'Interpretar el anión gap en la acidosis metabólica.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['anión gap','acidosis metabólica','hiperclorémica']
},

/* ===================== BIOQUIMICA II ===================== */
{
  id:'U8-B-Q01', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Glucógeno', sub:'Hígado y músculo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el glucógeno muscular no contribuye a mantener la glucemia?',
  ops:[
    'Porque el músculo almacena cantidades despreciables de glucógeno',
    'Porque el músculo carece de glucosa-6-fosfatasa y no puede liberar glucosa libre a la sangre',
    'Porque el músculo no expresa glucógeno fosforilasa',
    'Porque el glucógeno muscular tiene una estructura química distinta'
  ],
  ok:1,
  clave:'Sin glucosa-6-fosfatasa, la glucosa queda fosforilada y atrapada dentro de la célula.',
  exp:'La degradación del glucógeno libera glucosa-1-fosfato, que se convierte en glucosa-6-fosfato. Para que esa molécula pueda salir de la célula hacia la sangre hay que retirarle el fosfato, y de eso se encarga la glucosa-6-fosfatasa, presente en el hígado y ausente en el músculo. Sin esa enzima, la glucosa-6-fosfato queda retenida en el miocito, donde solo puede continuar hacia la glucólisis para consumo propio. De ahí la división del trabajo: el hígado almacena glucógeno para exportar glucosa y sostener la glucemia del resto del organismo, mientras que el músculo lo almacena exclusivamente como combustible para sí mismo. El músculo, de hecho, guarda en términos absolutos más glucógeno que el hígado, precisamente porque su masa es mucho mayor.',
  no:{
    0:'El músculo almacena en conjunto más glucógeno que el hígado; el problema no es la cantidad sino el destino.',
    2:'El músculo sí posee glucógeno fosforilasa: puede degradar su glucógeno, pero no exportar el producto.',
    3:'El glucógeno es químicamente el mismo polímero en ambos tejidos.'
  },
  trampa:'Suponer que el músculo tiene poco glucógeno. Tiene mucho, pero no puede compartirlo.',
  obj:'Explicar la compartimentación del metabolismo del glucógeno.',
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.',
  tags:['glucógeno','glucosa-6-fosfatasa','hígado','músculo']
},
{
  id:'U8-B-Q02', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Ayuno', sub:'Gluconeogénesis',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los ácidos grasos no pueden convertirse en glucosa?',
  ops:[
    'Porque no pueden entrar en la mitocondria',
    'Porque el paso de piruvato a acetil-CoA es irreversible y no existe vía de retorno desde acetil-CoA hasta piruvato',
    'Porque su degradación no produce energía suficiente',
    'Porque el hígado carece de las enzimas necesarias para oxidarlos'
  ],
  ok:1,
  clave:'Todo lo que entra como acetil-CoA ya no puede volver a ser glucosa.',
  exp:'La beta-oxidación de los ácidos grasos produce acetil-CoA, y la reacción que convierte piruvato en acetil-CoA, catalizada por la piruvato deshidrogenasa, es irreversible. Como no existe ninguna vía que permita regresar de acetil-CoA a piruvato, el carbono que entra en esa forma no puede utilizarse para sintetizar glucosa. La única porción de un triglicérido aprovechable para la gluconeogénesis es el glicerol, que se incorpora a la vía por encima de ese punto. Esta limitación es la que explica toda la estrategia del ayuno: como la grasa no puede convertirse en glucosa, el organismo tendría que degradar proteína muscular para fabricarla, y los cuerpos cetónicos existen precisamente para reducir esa necesidad.',
  no:{
    0:'Los ácidos grasos sí entran en la mitocondria, mediante la lanzadera de carnitina.',
    2:'Su oxidación produce abundante energía; el problema no es energético sino de dirección de la ruta.',
    3:'El hígado es de hecho el principal órgano oxidador de ácidos grasos y productor de cuerpos cetónicos.'
  },
  trampa:'Pensar que si sobra energía se puede fabricar cualquier cosa. La irreversibilidad de un solo paso lo impide.',
  obj:'Explicar la imposibilidad de la gluconeogénesis a partir de ácidos grasos.',
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.',
  tags:['gluconeogénesis','acetil-CoA','irreversible','glicerol']
},
{
  id:'U8-B-Q03', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Cuerpos cetónicos', sub:'Función',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la ventaja adaptativa de producir cuerpos cetónicos durante el ayuno prolongado?',
  ops:[
    'Permiten al cerebro utilizar un combustible alternativo a la glucosa y así reducir la degradación de proteína muscular',
    'Aportan al organismo una fuente de glucosa adicional',
    'Neutralizan el exceso de ácidos grasos circulantes',
    'Impiden que el hígado agote su glucógeno'
  ],
  ok:0,
  clave:'El cerebro no puede usar ácidos grasos, pero sí cuerpos cetónicos.',
  exp:'El sistema nervioso central consume una cantidad considerable de glucosa y no puede utilizar ácidos grasos como combustible, porque estos no atraviesan adecuadamente la barrera hematoencefálica. Durante un ayuno prolongado, mantener esa demanda exigiría fabricar glucosa continuamente a partir de aminoácidos procedentes del músculo, lo que llevaría a una pérdida rápida e insostenible de masa muscular. Los cuerpos cetónicos, sintetizados en el hígado a partir de acetil-CoA, sí atraviesan la barrera y permiten al cerebro cubrir una parte importante de sus necesidades. Al hacerlo, disminuye la demanda de gluconeogénesis y se preserva la proteína corporal. No son un producto de desecho ni un fallo metabólico: son lo que hace posible sobrevivir a un ayuno largo.',
  no:{
    1:'Los cuerpos cetónicos no se convierten en glucosa: derivan de acetil-CoA, que no puede seguir esa vía.',
    2:'No tienen función neutralizadora; de hecho su acumulación excesiva produce acidosis.',
    3:'El glucógeno hepático se agota en menos de un día, mucho antes de que la cetogénesis sea relevante.'
  },
  trampa:'Verlos solo como el problema de la cetoacidosis. En el ayuno normal son la solución, no el problema.',
  obj:'Justificar la función fisiológica de la cetogénesis.',
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.',
  tags:['cuerpos cetónicos','ayuno','cerebro','proteólisis']
},
{
  id:'U8-B-Q04', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Ciclo de la urea', sub:'Hiperamoniemia',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Además de su toxicidad directa, ¿por qué el amoniaco compromete el metabolismo energético de la neurona?',
  ops:[
    'Porque inhibe directamente la ATP sintasa mitocondrial',
    'Porque su neutralización a glutamina consume alfa-cetoglutarato y frena el ciclo de Krebs',
    'Porque impide la entrada de glucosa al tejido nervioso',
    'Porque desacopla la fosforilación oxidativa'
  ],
  ok:1,
  clave:'Neutralizar amoniaco cuesta alfa-cetoglutarato, que es un intermediario del Krebs.',
  exp:'El tejido nervioso carece de ciclo de la urea, de modo que su manera de neutralizar el amoniaco consiste en unirlo al glutamato para formar glutamina. El glutamato procede a su vez del alfa-cetoglutarato, que es un intermediario del ciclo de Krebs. Cuando la concentración de amoniaco es alta, esa reacción consume alfa-cetoglutarato de forma sostenida y lo retira del ciclo, frenando la producción de poder reductor y, con ella, la de ATP. La neurona sufre así un doble ataque: la toxicidad directa del amoniaco sobre la neurotransmisión y un déficit energético derivado del propio mecanismo defensivo. Esta es la razón de que el tratamiento se dirija a reducir la producción intestinal de amoniaco en lugar de limitarse a esperar su eliminación.',
  no:{
    0:'El amoniaco no actúa como inhibidor directo de la ATP sintasa.',
    2:'La entrada de glucosa al tejido nervioso no está bloqueada por el amoniaco.',
    3:'El desacoplamiento es el mecanismo de otros tóxicos, como el dinitrofenol, no del amoniaco.'
  },
  trampa:'Quedarse en "el amoniaco es tóxico". La pregunta interesante es por qué, y la respuesta conecta con el ciclo de Krebs.',
  obj:'Relacionar la hiperamoniemia con el metabolismo energético neuronal.',
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.',
  tags:['amoniaco','glutamina','alfa-cetoglutarato','encefalopatía']
},

/* ===================== GENETICA MEDICA ===================== */
{
  id:'U8-G-Q01', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Árbol genealógico', sub:'Patrón de herencia',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un árbol genealógico, un varón afectado tiene un hijo varón también afectado. La enfermedad aparece en las tres generaciones estudiadas y afecta a ambos sexos por igual.',
  enunciado:'¿Qué patrón de herencia queda descartado y cuál es el más probable?',
  ops:[
    'Se descarta el autosómico dominante; lo más probable es recesivo ligado al X',
    'Se descarta la herencia ligada al X; lo más probable es autosómico dominante',
    'Se descarta el autosómico recesivo; lo más probable es herencia mitocondrial',
    'No puede descartarse ningún patrón con esa información'
  ],
  ok:1,
  clave:'La transmisión de varón a varón descarta el ligamiento al X.',
  exp:'Un padre transmite a su hijo varón el cromosoma Y, y a sus hijas el X. Por tanto, la existencia de transmisión de varón a varón descarta cualquier herencia ligada al cromosoma X, y basta un solo caso en el árbol para hacerlo. El resto de los datos apunta a un patrón autosómico dominante: aparición en todas las generaciones sin saltos y afectación equilibrada de ambos sexos. La herencia mitocondrial también quedaría excluida, puesto que en ella la transmisión es exclusivamente materna y un varón afectado no transmite la enfermedad a ninguno de sus hijos.',
  no:{
    0:'La presencia en todas las generaciones y la afectación de ambos sexos apoyan el dominante, no lo descartan.',
    2:'La herencia mitocondrial es de transmisión materna exclusiva, incompatible con un padre que transmite a su hijo.',
    3:'La transmisión de varón a varón es un dato con gran poder discriminativo por sí solo.'
  },
  trampa:'Buscar el patrón contando afectados. Lo que decide es una sola transmisión concreta.',
  obj:'Aplicar el criterio de transmisión varón a varón en la lectura de un pedigrí.',
  ref:'Thompson y Thompson, Genética en Medicina. Jorde, Genética Médica.',
  tags:['pedigrí','varón a varón','ligado al X','autosómico dominante']
},
{
  id:'U8-G-Q02', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Consejo genético', sub:'Síndrome de Down',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Nace un niño con rasgos clínicos inequívocos de síndrome de Down. El pediatra solicita un cariotipo.',
  enunciado:'¿Cuál es la principal razón para pedirlo si el diagnóstico clínico ya es evidente?',
  ops:[
    'Para confirmar el diagnóstico, que no puede establecerse clínicamente',
    'Para distinguir una trisomía libre de una translocación robertsoniana, porque el riesgo de recurrencia es muy distinto',
    'Para determinar el pronóstico intelectual del niño',
    'Para decidir el tratamiento específico según el tipo de trisomía'
  ],
  ok:1,
  clave:'El cariotipo no cambia el diagnóstico: cambia lo que se les dice sobre el siguiente embarazo.',
  exp:'La mayoría de los casos de síndrome de Down corresponden a trisomías libres por no disyunción, cuyo riesgo de recurrencia en embarazos posteriores es bajo y se relaciona sobre todo con la edad materna. Una minoría se debe a una translocación robertsoniana, y en esos casos uno de los progenitores puede ser portador equilibrado: está sano, pero produce gametos desequilibrados, de modo que el riesgo de recurrencia es sustancialmente mayor y no depende de la edad. Distinguir ambas situaciones es lo que permite ofrecer un consejo genético correcto a la pareja, e indica además si procede estudiar el cariotipo de los padres. El cariotipo, por tanto, no se pide para confirmar lo evidente sino para poder responder a la pregunta que la familia hará a continuación.',
  no:{
    0:'El diagnóstico clínico puede ser muy sólido; el cariotipo aporta información distinta de la confirmación.',
    2:'El cariotipo no permite predecir el grado de afectación intelectual, que es muy variable.',
    3:'No existe un tratamiento distinto según el mecanismo citogenético.'
  },
  trampa:'Pedir la prueba por rutina sin saber qué decisión cambia. Aquí cambia el consejo reproductivo, no el diagnóstico.',
  obj:'Justificar el estudio citogenético por su valor en el consejo genético.',
  ref:'Thompson y Thompson, Genética en Medicina. Jorde, Genética Médica.',
  tags:['trisomía 21','translocación robertsoniana','recurrencia','consejo genético']
},
{
  id:'U8-G-Q03', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Excepciones', sub:'Mosaicismo germinal',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una pareja sana, sin antecedentes familiares, tiene dos hijos afectados por la misma enfermedad de herencia autosómica dominante. El estudio molecular de ambos progenitores en sangre periférica no detecta la mutación.',
  enunciado:'¿Cuál es la explicación más probable?',
  ops:[
    'Penetrancia incompleta en uno de los progenitores',
    'Mosaicismo germinal en uno de los progenitores',
    'La enfermedad es en realidad autosómica recesiva',
    'Se trata de dos mutaciones nuevas independientes'
  ],
  ok:1,
  clave:'Dos hijos afectados y padres sin la mutación en sangre: la mutación está en la línea germinal.',
  exp:'El mosaicismo germinal se produce cuando una mutación aparece durante el desarrollo de las células germinales de uno de los progenitores. Ese progenitor no presenta la mutación en el resto de sus tejidos, de modo que un estudio en sangre periférica resulta negativo y él permanece sano, pero una proporción de sus gametos la porta. Eso explica que puedan tener más de un hijo afectado sin antecedentes familiares y sin que la mutación se detecte en ellos. Tiene una consecuencia práctica importante para el consejo genético: el riesgo de recurrencia no es despreciable, aunque no pueda cuantificarse con la precisión de una herencia mendeliana clásica.',
  no:{
    0:'En la penetrancia incompleta el progenitor porta la mutación, de modo que el estudio molecular la detectaría.',
    2:'Un patrón autosómico recesivo es posible en abstracto, pero el enunciado especifica que la enfermedad es dominante y se han identificado las mutaciones en los hijos.',
    3:'Dos mutaciones nuevas idénticas e independientes en la misma pareja es un suceso extraordinariamente improbable.'
  },
  trampa:'Recurrir a la penetrancia incompleta por costumbre. Aquí el dato decisivo es que la mutación no está en la sangre de los padres.',
  obj:'Reconocer el mosaicismo germinal como explicación de una recurrencia inesperada.',
  ref:'Thompson y Thompson, Genética en Medicina.',
  tags:['mosaicismo germinal','recurrencia','autosómico dominante']
},
{
  id:'U8-G-Q04', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Herencia ligada al X', sub:'Transmisión',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Un varón afectado por una enfermedad recesiva ligada al cromosoma X tiene descendencia con una mujer no portadora. ¿Qué cabe esperar?',
  ops:[
    'Todos los hijos varones estarán afectados y todas las hijas serán sanas no portadoras',
    'Ningún hijo varón estará afectado y todas las hijas serán portadoras',
    'La mitad de los hijos y la mitad de las hijas estarán afectados',
    'Todos los descendientes estarán afectados'
  ],
  ok:1,
  clave:'El padre da su único X a todas las hijas y el Y a todos los hijos.',
  exp:'Un varón posee un solo cromosoma X, que transmite obligatoriamente a todas sus hijas, y un cromosoma Y, que transmite a todos sus hijos varones. En consecuencia, ninguno de sus hijos varones recibe el alelo mutado y ninguno estará afectado por esa vía. Todas sus hijas, en cambio, reciben el X portador de la mutación; como la madre no es portadora, recibirán de ella un X normal y serán portadoras sanas. Esta distribución característica —hijos sanos, hijas todas portadoras— es uno de los rasgos que identifican la herencia ligada al X en un árbol genealógico.',
  no:{
    0:'Los hijos varones reciben el Y del padre, de modo que no pueden heredar por esta vía.',
    2:'La distribución no es del 50% en ambos sexos: es determinista según el sexo del descendiente.',
    3:'Las hijas son portadoras sanas al recibir un X normal de la madre.'
  },
  trampa:'Aplicar proporciones mendelianas del 50% sin considerar que el sexo determina qué cromosoma se recibe.',
  obj:'Predecir la descendencia en herencia recesiva ligada al X.',
  ref:'Thompson y Thompson, Genética en Medicina.',
  tags:['ligado al X','portadora','transmisión']
},

/* ===================== BIOESTADISTICA ===================== */
{
  id:'U8-S-Q01', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Valor p', sub:'Interpretación',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Un ensayo obtiene p = 0,03. ¿Cuál es la interpretación correcta?',
  ops:[
    'Hay un 3% de probabilidad de que la hipótesis nula sea cierta',
    'Si la hipótesis nula fuera cierta, la probabilidad de obtener un resultado al menos tan extremo como el observado sería del 3%',
    'El tratamiento produce un efecto del 3%',
    'Hay un 97% de probabilidad de que el resultado sea real'
  ],
  ok:1,
  clave:'El valor p se calcula SUPONIENDO cierta la hipótesis nula.',
  exp:'El valor p es una probabilidad condicionada: se calcula asumiendo que la hipótesis nula es cierta, y expresa cuán improbable sería observar un resultado como el obtenido bajo ese supuesto. No es la probabilidad de que la hipótesis nula sea cierta, que sería la condicional inversa y requeriría información previa que el valor p no incorpora. Tampoco informa del tamaño del efecto: un valor p muy pequeño puede corresponder a un efecto minúsculo si la muestra es muy grande. Y no expresa la probabilidad de que el resultado sea verdadero o se deba al azar. Estas tres confusiones son los errores más extendidos en la interpretación de la literatura médica.',
  no:{
    0:'Esa es la probabilidad condicional inversa, que el valor p no proporciona.',
    2:'El valor p no cuantifica en absoluto la magnitud del efecto; para eso está el intervalo de confianza.',
    3:'La significación estadística no establece la probabilidad de que un hallazgo sea real.'
  },
  trampa:'Leer el p como si midiera la verdad de la hipótesis. Mide la rareza del dato bajo un supuesto.',
  obj:'Interpretar correctamente el valor p.',
  ref:'Dawson y Trapp, Bioestadística Médica.',
  tags:['valor p','hipótesis nula','interpretación']
},
{
  id:'U8-S-Q02', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Intervalos de confianza', sub:'Precisión',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Dos ensayos evalúan el mismo tratamiento y ninguno alcanza significación estadística. El primero da un riesgo relativo de 1,00 con intervalo de confianza del 95% de 0,98 a 1,02. El segundo da un riesgo relativo de 1,02 con intervalo de 0,45 a 2,30.',
  enunciado:'¿Qué se puede concluir de cada uno?',
  ops:[
    'Ambos demuestran que el tratamiento no tiene efecto',
    'El primero descarta un efecto clínicamente relevante; el segundo es tan impreciso que no permite concluir nada',
    'El segundo es más fiable porque su intervalo abarca más valores',
    'Ninguno aporta información, porque ambos son no significativos'
  ],
  ok:1,
  clave:'El mismo "no significativo" puede significar "no hay efecto" o "no lo sabemos".',
  exp:'Un resultado no significativo indica únicamente que el intervalo de confianza incluye el valor nulo, pero la información relevante está en su amplitud. En el primer ensayo el intervalo es estrechísimo y todos los valores compatibles con los datos están muy próximos a 1, de modo que puede descartarse con razonable seguridad cualquier efecto de magnitud clínicamente relevante: es un resultado negativo informativo. En el segundo, el intervalo abarca desde una reducción a la mitad del riesgo hasta más que duplicarlo, es decir, es compatible tanto con un beneficio importante como con un daño importante: el estudio no permite concluir nada y probablemente careció de potencia. El valor p presenta ambos como equivalentes; el intervalo de confianza revela que no lo son en absoluto.',
  no:{
    0:'Solo el primero permite afirmar razonablemente la ausencia de efecto relevante.',
    2:'Un intervalo más ancho indica menos precisión, no más fiabilidad.',
    3:'Un resultado no significativo con intervalo estrecho es muy informativo: descarta efectos relevantes.'
  },
  trampa:'Tratar todos los resultados negativos por igual. La amplitud del intervalo separa los concluyentes de los inútiles.',
  obj:'Usar la amplitud del intervalo de confianza para interpretar resultados no significativos.',
  ref:'Dawson y Trapp, Bioestadística Médica.',
  tags:['intervalo de confianza','precisión','resultado negativo','potencia']
},
{
  id:'U8-S-Q03', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Errores', sub:'Tipo II y potencia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Un estudio con muestra pequeña no encuentra diferencias significativas entre dos tratamientos. ¿Cuál es la conclusión más prudente?',
  ops:[
    'Los tratamientos son equivalentes',
    'El estudio puede carecer de potencia: no detectar una diferencia no demuestra que no exista',
    'El estudio demuestra que el tratamiento nuevo es inferior',
    'Debe repetirse el análisis con un umbral de significación mayor'
  ],
  ok:1,
  clave:'Ausencia de evidencia no es evidencia de ausencia.',
  exp:'No rechazar la hipótesis nula significa únicamente que no se reunió evidencia suficiente para hacerlo, y eso puede deberse a que realmente no exista diferencia o a que el estudio no tuviera capacidad para detectarla. Esa capacidad es la potencia, que depende del tamaño del efecto, de la variabilidad y sobre todo del tamaño muestral. Un estudio pequeño tiene potencia baja y, por tanto, un riesgo elevado de error tipo II. Para afirmar equivalencia no basta con no encontrar diferencias: hacen falta diseños específicos de equivalencia o no inferioridad, con márgenes definidos de antemano. Elevar el umbral de significación tras ver los resultados sería además una manipulación inaceptable del análisis.',
  no:{
    0:'Afirmar equivalencia exige un diseño específico, no la simple ausencia de significación.',
    2:'No encontrar diferencias no permite afirmar inferioridad en ninguna dirección.',
    3:'Modificar el umbral después de conocer los resultados invalida el contraste.'
  },
  trampa:'Leer un resultado negativo como prueba de igualdad. Son cosas distintas y exigen diseños distintos.',
  obj:'Distinguir ausencia de evidencia de evidencia de ausencia.',
  ref:'Dawson y Trapp, Bioestadística Médica.',
  tags:['error tipo II','potencia','equivalencia','tamaño muestral']
},

/* ===================== EPIDEMIOLOGIA ===================== */
{
  id:'U8-E-Q01', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Medidas de frecuencia', sub:'Prevalencia',
  dif:3, hab:'Comprensión', tipo:'caso', verificado:true,
  caso:'Tras introducirse un tratamiento que no cura una enfermedad crónica pero prolonga notablemente la supervivencia, se observa que su prevalencia en la población ha aumentado.',
  enunciado:'¿Cómo debe interpretarse ese aumento?',
  ops:[
    'Ha aumentado el número de casos nuevos, de modo que la prevención está fallando',
    'Los enfermos viven más tiempo, y al aumentar la duración de la enfermedad aumenta la prevalencia sin que haya más casos nuevos',
    'El tratamiento está favoreciendo la transmisión de la enfermedad',
    'Se trata necesariamente de un error de registro'
  ],
  ok:1,
  clave:'Prevalencia depende de incidencia y de duración.',
  exp:'La prevalencia cuenta todos los casos existentes en un momento dado, y por tanto depende de dos factores: con qué frecuencia aparecen casos nuevos, que es la incidencia, y cuánto tiempo permanece cada persona siendo un caso, que es la duración. Un tratamiento que prolonga la supervivencia sin curar aumenta la duración, de modo que los enfermos se acumulan en la población y la prevalencia sube aunque la incidencia se mantenga o incluso disminuya. Es un ejemplo clásico de por qué una prevalencia creciente no es necesariamente una mala noticia, y de por qué para evaluar la prevención hay que mirar la incidencia y no la prevalencia.',
  no:{
    0:'La incidencia mide los casos nuevos y no puede deducirse de un cambio en la prevalencia.',
    2:'Prolongar la supervivencia puede alterar la transmisión en enfermedades infecciosas, pero el mecanismo directo aquí es el aumento de la duración.',
    3:'El fenómeno es esperable y bien descrito, no un artefacto.'
  },
  trampa:'Usar prevalencia para evaluar prevención. Para eso sirve la incidencia.',
  obj:'Relacionar prevalencia, incidencia y duración de la enfermedad.',
  ref:'Gordis, Epidemiología.',
  tags:['prevalencia','incidencia','duración','supervivencia']
},
{
  id:'U8-E-Q02', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Medidas de asociación', sub:'Odds ratio',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué en un estudio de casos y controles no puede calcularse el riesgo relativo?',
  ops:[
    'Porque la muestra suele ser demasiado pequeña',
    'Porque el investigador fija el número de casos y controles, de modo que la proporción de enfermos es artificial y no permite estimar incidencia',
    'Porque la exposición se mide de forma retrospectiva',
    'Porque siempre existe sesgo de memoria'
  ],
  ok:1,
  clave:'Sin incidencia real no hay riesgo que comparar.',
  exp:'El riesgo relativo compara el riesgo de enfermar entre expuestos y no expuestos, y calcular un riesgo exige conocer cuántas personas de un grupo definido desarrollan la enfermedad, es decir, la incidencia. En un estudio de casos y controles se parte de personas ya enfermas y se selecciona un número arbitrario de controles, de forma que la proporción de enfermos en la muestra la decide el investigador y no refleja la de la población. Por eso se recurre al odds ratio, que compara la razón de exposición entre casos y controles y sí puede calcularse con ese diseño. El odds ratio aproxima bien al riesgo relativo cuando la enfermedad es poco frecuente; si es frecuente, lo sobrestima.',
  no:{
    0:'El tamaño muestral no es el impedimento: el problema es estructural del diseño.',
    2:'La medición retrospectiva plantea otros problemas, pero no es la razón de que no pueda calcularse la incidencia.',
    3:'El sesgo de memoria es una limitación frecuente de este diseño, pero no es lo que impide calcular el riesgo relativo.'
  },
  trampa:'Confundir una limitación de validez con una imposibilidad de cálculo. Aquí lo segundo es lo que se pregunta.',
  obj:'Justificar el uso del odds ratio en estudios de casos y controles.',
  ref:'Gordis, Epidemiología. Hernández-Ávila, Epidemiología: diseño y análisis de estudios.',
  tags:['odds ratio','casos y controles','riesgo relativo','incidencia']
},
{
  id:'U8-E-Q03', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Ensayo clínico', sub:'Intención de tratar',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el análisis por intención de tratar incluye a los participantes que abandonaron o no cumplieron el tratamiento asignado?',
  ops:[
    'Para aumentar artificialmente el tamaño muestral',
    'Porque excluirlos reintroduciría selección: el abandono rara vez es aleatorio y se perdería el beneficio de la aleatorización',
    'Porque los abandonos suelen tener mejores resultados',
    'Porque así se detectan más efectos adversos'
  ],
  ok:1,
  clave:'Quien abandona no es una muestra al azar de los asignados.',
  exp:'La aleatorización garantiza que los grupos sean comparables al inicio, incluso en variables que nadie ha medido. Si después se excluyera del análisis a quienes abandonaron o no cumplieron, los grupos resultantes ya no serían los aleatorizados sino subgrupos autoseleccionados, y las razones del abandono —efectos adversos, falta de eficacia percibida, gravedad basal— suelen estar relacionadas con el pronóstico. El análisis por intención de tratar mantiene a cada participante en el grupo al que fue asignado y preserva así la comparabilidad conseguida por el azar. Tiende además a ser conservador y a reflejar mejor lo que ocurriría en la práctica real, donde el incumplimiento existe.',
  no:{
    0:'No se trata de un truco de tamaño muestral, sino de preservar la validez de la comparación.',
    2:'Los abandonos suelen tener peor pronóstico, y precisamente por eso excluirlos sesgaría el resultado.',
    3:'La detección de efectos adversos es un objetivo distinto y se analiza habitualmente sobre los expuestos reales.'
  },
  trampa:'Verlo como un tecnicismo estadístico. Es lo único que evita que el abandono deshaga la aleatorización.',
  obj:'Fundamentar el análisis por intención de tratar.',
  ref:'Gordis, Epidemiología.',
  tags:['intención de tratar','aleatorización','ensayo clínico','abandono']
},

/* ===================== PARASITOLOGIA MEDICA ===================== */
{
  id:'U8-P-Q01', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Malaria', sub:'Hipnozoítos',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente tratado por malaria hace cuatro meses, con buena respuesta inicial y sin nuevas exposiciones, presenta de nuevo fiebre y parasitemia.',
  enunciado:'¿Qué especies deben sospecharse y por qué?',
  ops:[
    'Plasmodium falciparum, por su elevada resistencia a los antipalúdicos',
    'Plasmodium vivax u ovale, porque dejan hipnozoítos latentes en el hígado que pueden reactivarse',
    'Cualquier especie, ya que todas producen recaídas tardías',
    'Ninguna: necesariamente ha habido una nueva picadura'
  ],
  ok:1,
  clave:'Recaída tardía sin reexposición significa reservorio hepático.',
  exp:'Plasmodium vivax y Plasmodium ovale pueden dejar en el hígado formas latentes denominadas hipnozoítos, capaces de permanecer inactivas durante semanas o meses y reactivarse después produciendo una recaída sin necesidad de una nueva picadura. Los tratamientos que actúan solo sobre las formas sanguíneas resuelven el episodio agudo pero no eliminan ese reservorio, de modo que la cura radical requiere añadir un fármaco activo frente a la fase hepática. Plasmodium falciparum y Plasmodium malariae no producen hipnozoítos; en su caso una reaparición se debe a recrudescencia por tratamiento insuficiente o a una nueva infección.',
  no:{
    0:'La resistencia de P. falciparum es un problema real, pero produce fallo terapéutico precoz, no recaídas tardías por latencia hepática.',
    2:'Solo vivax y ovale forman hipnozoítos.',
    3:'La recaída por hipnozoítos ocurre precisamente sin nueva exposición.'
  },
  trampa:'Asumir que tratar la parasitemia cura la malaria. En vivax y ovale queda el reservorio hepático.',
  obj:'Relacionar la biología del parásito con el esquema terapéutico.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Murray, Microbiología Médica.',
  tags:['hipnozoíto','vivax','ovale','recaída']
},
{
  id:'U8-P-Q02', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Malaria', sub:'Falciparum',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué mecanismo explica principalmente la gravedad de la infección por Plasmodium falciparum?',
  ops:[
    'La producción de una exotoxina específica',
    'La citoadherencia de los eritrocitos parasitados al endotelio, que los secuestra en la microcirculación',
    'La invasión directa del tejido nervioso por el parásito',
    'La destrucción selectiva de los leucocitos'
  ],
  ok:1,
  clave:'Los eritrocitos parasitados se pegan al endotelio y obstruyen capilares.',
  exp:'Los eritrocitos infectados por Plasmodium falciparum expresan en su superficie proteínas del parásito que median su adherencia al endotelio de los capilares. Esa citoadherencia tiene dos consecuencias: por un lado, los eritrocitos parasitados evitan el paso por el bazo, donde serían reconocidos y eliminados, lo que favorece parasitemias muy elevadas; por otro, su acumulación obstruye la microcirculación de órganos como el cerebro, el riñón o la placenta, y de ahí derivan la malaria cerebral y el fallo multiorgánico. A ello se suma que esta especie invade eritrocitos de cualquier edad, a diferencia de otras que prefieren poblaciones concretas, lo que permite parasitemias mucho mayores.',
  no:{
    0:'Plasmodium no produce una exotoxina en el sentido bacteriano del término.',
    2:'El parásito no invade las neuronas: el daño cerebral se debe a la obstrucción de la microcirculación.',
    3:'La afectación hematológica principal es sobre la serie roja, no una destrucción selectiva de leucocitos.'
  },
  trampa:'Buscar una toxina. El daño aquí es mecánico y vascular.',
  obj:'Explicar la fisiopatología de la malaria grave.',
  ref:'Botero y Restrepo, Parasitosis Humanas. Murray, Microbiología Médica.',
  tags:['falciparum','citoadherencia','malaria cerebral','secuestro']
},
{
  id:'U8-P-Q03', programa:'unirm', cuatri:8,
  esp:'Parasitología Médica', tema:'Protozoos intestinales', sub:'Amebiasis y giardiasis',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Dos pacientes acuden por diarrea. El primero presenta deposiciones con sangre y moco, dolor abdominal bajo y fiebre. El segundo refiere diarrea abundante sin sangre, distensión, heces grasas y pérdida de peso desde hace semanas.',
  enunciado:'¿Qué parásito se sospecha en cada caso y qué los diferencia biológicamente?',
  ops:[
    'Ambos por Giardia; la diferencia depende solo de la carga parasitaria',
    'El primero por Entamoeba histolytica, que invade la mucosa; el segundo por Giardia lamblia, que no invade y altera la absorción',
    'El primero por Giardia y el segundo por Entamoeba',
    'Ambos por Entamoeba; el segundo es una forma crónica'
  ],
  ok:1,
  clave:'Una invade y sangra; la otra se adhiere y produce malabsorción.',
  exp:'Entamoeba histolytica invade la mucosa del colon y produce úlceras, de donde derivan la disentería con sangre y moco, el dolor y la fiebre; además puede diseminarse por vía portal y originar un absceso hepático, habitualmente único y en el lóbulo derecho. Giardia lamblia, en cambio, no invade: se adhiere a la mucosa del duodeno y el yeyuno e interfiere con la absorción, de modo que produce diarrea sin sangre, esteatorrea, distensión y pérdida de peso, con un curso que puede prolongarse. Ambos se transmiten por vía fecal-oral mediante quistes, que son la forma infectante y resistente, mientras que el trofozoíto es la forma activa y frágil. Un matiz de laboratorio relevante es que Entamoeba dispar es morfológicamente idéntica a E. histolytica pero no es patógena.',
  no:{
    0:'Los cuadros difieren por el mecanismo de daño, no por la cantidad de parásitos.',
    2:'Están invertidos: la disentería corresponde a la especie invasora.',
    3:'La malabsorción sin sangre no es el patrón de la amebiasis.'
  },
  trampa:'Memorizar los cuadros por separado. Invade o no invade explica ambos de golpe.',
  obj:'Diferenciar amebiasis y giardiasis por su mecanismo de daño.',
  ref:'Botero y Restrepo, Parasitosis Humanas.',
  tags:['Entamoeba histolytica','Giardia','disentería','malabsorción']
},

/* ===================== INMUNOLOGIA ===================== */
{
  id:'U8-I-Q01', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Presentación antigénica', sub:'MHC',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia fundamental existe entre el MHC de clase I y el de clase II?',
  ops:[
    'El de clase I presenta antígenos del interior celular a los linfocitos CD8 y lo expresan todas las células nucleadas; el de clase II presenta antígenos captados del exterior a los CD4 y lo expresan las células presentadoras profesionales',
    'El de clase I presenta a los CD4 y el de clase II a los CD8',
    'Solo el de clase II está presente en el ser humano',
    'El de clase I se expresa exclusivamente en linfocitos B'
  ],
  ok:0,
  clave:'Clase I para lo de dentro y CD8; clase II para lo de fuera y CD4.',
  exp:'El MHC de clase I presenta péptidos procedentes de proteínas sintetizadas dentro de la propia célula, incluidas las de origen viral, y lo hace a los linfocitos T CD8 citotóxicos. Como cualquier célula nucleada puede infectarse, todas lo expresan: es el mecanismo que permite que una célula infectada avise de su estado. El MHC de clase II presenta péptidos procedentes de material captado del medio extracelular por endocitosis o fagocitosis, y lo hace a los linfocitos T CD4 colaboradores; solo lo expresan las células presentadoras profesionales, es decir, dendríticas, macrófagos y linfocitos B. Esta división explica qué rama de la respuesta se activa frente a cada tipo de microorganismo.',
  no:{
    1:'Los subtipos están invertidos: clase I con CD8 y clase II con CD4.',
    2:'Ambas clases existen en el ser humano y corresponden al sistema HLA.',
    3:'El MHC de clase I se expresa en todas las células nucleadas, no solo en linfocitos B.'
  },
  trampa:'Invertir los emparejamientos. La regla de multiplicar —uno por ocho y dos por cuatro— evita el error.',
  obj:'Distinguir las dos vías de presentación antigénica y sus consecuencias.',
  ref:'Abbas, Inmunología Celular y Molecular. Janeway, Inmunobiología.',
  tags:['MHC','CD8','CD4','presentación antigénica']
},
{
  id:'U8-I-Q02', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Inmunodeficiencias', sub:'Perfil de infecciones',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta infecciones de repetición por virus, hongos y microorganismos intracelulares que un sistema inmunitario íntegro controla sin dificultad.',
  enunciado:'¿Qué rama de la respuesta inmunitaria está comprometida?',
  ops:[
    'La respuesta humoral, mediada por linfocitos B y anticuerpos',
    'La respuesta celular, mediada por linfocitos T',
    'Exclusivamente el sistema del complemento',
    'Las barreras físicas de la inmunidad innata'
  ],
  ok:1,
  clave:'Lo intracelular lo resuelve la rama celular.',
  exp:'Los anticuerpos actúan sobre lo que se encuentra en el medio extracelular: neutralizan toxinas, opsonizan bacterias y activan el complemento. Por eso un defecto humoral se manifiesta característicamente como infecciones de repetición por bacterias encapsuladas. Los microorganismos que viven dentro de las células —virus, micobacterias, hongos, parásitos intracelulares— quedan fuera del alcance de los anticuerpos y deben ser controlados por la respuesta celular: los linfocitos T CD8 destruyen las células infectadas y los CD4 activan a los macrófagos para que completen la destrucción de lo que han fagocitado. El perfil de infecciones descrito señala por tanto un defecto de la inmunidad celular. Este razonamiento invertido, del tipo de infección a la rama que falla, es una de las herramientas más útiles que deja la asignatura.',
  no:{
    0:'Un defecto humoral orienta hacia bacterias encapsuladas, no hacia virus y hongos.',
    2:'Los déficits de complemento se asocian sobre todo a infecciones por Neisseria y a fenómenos autoinmunitarios.',
    3:'Un fallo de barreras produciría infecciones localizadas en el punto de entrada, sin este patrón sistémico.'
  },
  trampa:'Pensar solo en anticuerpos al hablar de inmunidad. Lo que está dentro de la célula no lo alcanza ningún anticuerpo.',
  obj:'Deducir la rama inmunitaria comprometida a partir del perfil de infecciones.',
  ref:'Abbas, Inmunología Celular y Molecular. Janeway, Inmunobiología.',
  tags:['inmunidad celular','linfocito T','inmunodeficiencia','intracelular']
}

]);
