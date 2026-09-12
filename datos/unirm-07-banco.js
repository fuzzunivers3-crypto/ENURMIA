/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 7
   Ciclo de Ciencias Basicas, pensum MED-R1-2014.

   Cambio de formato respecto a ENURMIA, y es deliberado: aqui
   casi no hay pacientes. En anatomia, histologia y bioquimica lo
   que se pregunta son estructuras, mecanismos y rutas, porque es
   lo que el estudiante tiene delante en su examen. El caso
   clinico aparece solo cuando de verdad aporta algo: para
   ensenar para que sirve lo que se acaba de estudiar.

   Lo que NO cambia es la explicacion: dato clave, por que falla
   cada opcion, la trampa, y de que libro sale. Eso es lo que
   convierte una pregunta en material de estudio.

   `esp` es la ASIGNATURA, no una especialidad medica: de ahi
   salen el reparto por creditos y los filtros del cuatrimestre.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== ANATOMIA I ===================== */
{
  id:'U7-A-Q01', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Plexo braquial', sub:'Nervio radial',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente sufre una fractura en el tercio medio de la diáfisis del húmero. Al explorarlo no puede extender la muñeca ni los dedos, y la mano queda colgando. La flexión del codo y la sensibilidad de la palma están conservadas.',
  enunciado:'¿Qué nervio se lesionó y por qué precisamente en esa localización?',
  ops:[
    'El nervio mediano, porque acompaña a la arteria braquial en la cara anterior',
    'El nervio radial, porque discurre pegado al hueso en el canal de torsión',
    'El nervio cubital, porque pasa por detrás del epicóndilo medial',
    'El nervio axilar, porque rodea el cuello quirúrgico del húmero'
  ],
  ok:1,
  clave:'Mano péndula tras fractura de diáfisis humeral.',
  exp:'El nervio radial desciende en diagonal por la cara posterior de la diáfisis humeral, alojado en el canal de torsión o surco radial, donde va prácticamente en contacto con el hueso. Esa relación tan íntima es la que lo hace vulnerable cuando la diáfisis se fractura. Como el radial inerva toda la musculatura extensora del antebrazo, su lesión deja los extensores sin función mientras los flexores siguen intactos: sin nada que equilibre su tracción, la mano cae. A eso se le llama mano péndula.',
  no:{
    0:'El mediano va por la cara anterior y no está en contacto con la diáfisis; su lesión daría dificultad para flexionar los dedos índice y medio, no para extender la muñeca.',
    2:'El cubital es vulnerable en el epicóndilo medial, en el extremo distal del húmero, no en la diáfisis. Su lesión da mano en garra.',
    3:'El axilar se lesiona en el cuello quirúrgico, en el extremo proximal. Su lesión impediría la abducción del hombro, no la extensión de la muñeca.'
  },
  trampa:'Se busca el nervio por la función perdida sin pensar en el nivel de la fractura. Las dos cosas tienen que coincidir: la altura de la lesión y el territorio afectado.',
  obj:'Relacionar cada segmento del húmero con el nervio que lo acompaña.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro superior.',
  tags:['nervio radial','mano péndula','canal de torsión','húmero']
},
{
  id:'U7-A-Q02', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Plexo braquial', sub:'Organización del plexo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'En la organización del plexo braquial, ¿qué tienen en común todos los nervios que salen del fascículo posterior?',
  ops:[
    'Inervan musculatura extensora',
    'Proceden exclusivamente de las raíces C8 y T1',
    'Inervan la musculatura intrínseca de la mano',
    'Son exclusivamente sensitivos'
  ],
  ok:0,
  clave:'El fascículo posterior se forma con todas las divisiones posteriores y se ocupa de la extensión.',
  exp:'Las cinco raíces del plexo forman tres troncos, y cada tronco se divide en una porción anterior y otra posterior. Todas las divisiones posteriores, vengan del tronco que vengan, confluyen en un único fascículo posterior. De él salen los nervios axilar y radial, además de los nervios subescapular y toracodorsal. El denominador común de todos ellos es que inervan musculatura extensora. Las divisiones anteriores, en cambio, forman los fascículos lateral y medial, de los que salen los nervios de la musculatura flexora: musculocutáneo, mediano y cubital.',
  no:{
    1:'C8 y T1 forman el tronco inferior, que aporta divisiones a los tres fascículos. El posterior recibe divisiones de los tres troncos.',
    2:'La musculatura intrínseca de la mano depende sobre todo del nervio cubital, que sale del fascículo medial.',
    3:'Los nervios del fascículo posterior son mixtos: el radial y el axilar tienen componente motor y sensitivo.'
  },
  trampa:'Memorizar el diagrama del plexo como un dibujo en vez de como una regla. La regla anterior-flexor y posterior-extensor ordena el tema entero.',
  obj:'Entender la lógica funcional que ordena el plexo braquial.',
  ref:'Moore, Anatomía con orientación clínica. Rouvière, Anatomía Humana.',
  tags:['plexo braquial','fascículo posterior','extensores']
},
{
  id:'U7-A-Q03', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Carpo', sub:'Escafoides',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un joven cae apoyando la mano extendida. Refiere dolor a la palpación en la tabaquera anatómica. La radiografía inicial no muestra trazo de fractura, pero el dolor persiste.',
  enunciado:'¿Cuál es la complicación que hay que temer si se trata de una fractura del polo proximal de ese hueso?',
  ops:[
    'Síndrome compartimental del antebrazo',
    'Necrosis avascular del fragmento proximal',
    'Lesión del nervio cubital en el canal de Guyon',
    'Consolidación en rotación con pérdida de la pronosupinación'
  ],
  ok:1,
  clave:'La arteria del escafoides entra por su extremo distal y lo irriga en sentido retrógrado.',
  exp:'El escafoides recibe su irrigación principal por ramas que penetran en su porción distal y recorren el hueso en sentido retrógrado hacia el polo proximal. Cuando la fractura ocurre en la mitad proximal, ese fragmento queda desconectado de su aporte sanguíneo y puede necrosarse. Por ese motivo la fractura de escafoides se inmoviliza incluso cuando la radiografía inicial es normal, y se repite el estudio a los diez o catorce días: es la fractura que con más frecuencia pasa desapercibida en la primera imagen, y el precio de no verla es alto.',
  no:{
    0:'El síndrome compartimental es una complicación de fracturas diafisarias con gran edema, no de una fractura aislada del carpo.',
    2:'El canal de Guyon está en el borde cubital de la muñeca; el escafoides es del lado radial y la tabaquera anatómica también.',
    3:'La pérdida de pronosupinación se relaciona con lesiones del radio y el cúbito o de la membrana interósea, no del escafoides.'
  },
  trampa:'Dar por buena una radiografía normal. En el escafoides, la clínica manda sobre la primera imagen.',
  obj:'Relacionar el patrón de vascularización de un hueso con su complicación característica.',
  ref:'Moore, Anatomía con orientación clínica, región de la muñeca y la mano.',
  tags:['escafoides','necrosis avascular','tabaquera anatómica']
},
{
  id:'U7-A-Q04', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Plexo braquial', sub:'Parálisis de raíz',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Tras un parto laborioso con distocia de hombros, el recién nacido mantiene el brazo derecho pegado al cuerpo, en rotación interna y con el antebrazo en pronación. Los movimientos de los dedos están conservados.',
  enunciado:'¿Qué estructura se lesionó?',
  ops:[
    'El tronco inferior del plexo braquial (C8-T1)',
    'El tronco superior del plexo braquial (C5-C6)',
    'El nervio radial en el canal de torsión',
    'El nervio cubital en el epicóndilo medial'
  ],
  ok:1,
  clave:'Brazo en aducción y rotación interna con la mano indemne, tras tracción que separa hombro y cuello.',
  exp:'La distocia de hombros fuerza la separación entre la cabeza y el hombro, y esa tracción recae sobre las raíces más altas del plexo. La lesión del tronco superior (C5-C6) es la parálisis de Erb-Duchenne. Se afectan deltoides, supraespinoso, infraespinoso, bíceps y supinador, de modo que el brazo queda en aducción, rotación interna y pronación, en la postura que se describe clásicamente como de propina de camarero. El detalle que confirma el nivel es que los movimientos de los dedos se conservan: la musculatura intrínseca de la mano depende de C8-T1, que están intactas.',
  no:{
    0:'La lesión del tronco inferior es la parálisis de Klumpke, y afecta precisamente a la mano, que aquí está indemne. Suele producirse por tracción del brazo hacia arriba.',
    2:'Una lesión del radial daría mano péndula, y la mano en este caso funciona.',
    3:'Una lesión del cubital daría mano en garra, con afectación del cuarto y quinto dedo.'
  },
  trampa:'Confundir Erb con Klumpke. El truco fiable es mirar la mano: si la mano funciona, la lesión está arriba.',
  obj:'Diferenciar las parálisis del tronco superior e inferior por el territorio afectado.',
  ref:'Moore, Anatomía con orientación clínica. Rouvière, Anatomía Humana.',
  tags:['Erb-Duchenne','Klumpke','tronco superior','distocia']
},
{
  id:'U7-A-Q05', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Clavícula', sub:'Osificación',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el primer hueso del cuerpo humano en iniciar su osificación?',
  ops:['El fémur','La mandíbula','La clavícula','El occipital'],
  ok:2,
  clave:'La clavícula empieza a osificar hacia la quinta semana de vida intrauterina.',
  exp:'La clavícula comienza a osificar antes que ningún otro hueso, hacia la quinta semana de vida intrauterina, y lo hace además de una forma peculiar: su porción media por osificación intramembranosa y sus extremos por osificación endocondral. Paradójicamente, también es de los últimos en completar la fusión de su extremo medial, que puede no cerrarse hasta pasados los veinte años, dato que se utiliza en estimación de edad ósea.',
  no:{
    0:'El fémur osifica más tarde y lo hace enteramente por vía endocondral.',
    1:'La mandíbula osifica de forma precoz y también por vía intramembranosa, pero comienza después que la clavícula.',
    3:'Los huesos del cráneo osifican después y su cierre completo es posnatal.'
  },
  trampa:'Confundir "primero en empezar" con "primero en terminar". En la clavícula son extremos opuestos.',
  obj:'Recordar el dato de osificación más preguntado del miembro superior.',
  ref:'Moore, Anatomía con orientación clínica. Langman, Embriología Médica.',
  tags:['clavícula','osificación','intramembranosa']
},

/* ===================== FISIOLOGIA I ===================== */
{
  id:'U7-F-Q01', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Potencial de acción', sub:'Periodo refractario',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la base molecular del periodo refractario absoluto?',
  ops:[
    'El agotamiento del ATP que necesita la bomba de sodio y potasio',
    'La inactivación de los canales de sodio dependientes de voltaje',
    'El cierre completo de los canales de potasio dependientes de voltaje',
    'La desaparición temporal del gradiente de sodio a ambos lados de la membrana'
  ],
  ok:1,
  clave:'Un canal inactivado no puede reabrirse hasta que la membrana se repolarice.',
  exp:'Los canales de sodio dependientes de voltaje tienen dos compuertas. La de activación se abre rápidamente con la despolarización; la de inactivación se cierra poco después, más lentamente. El resultado es que el canal queda inactivado, un estado distinto de estar simplemente cerrado: un canal cerrado puede volver a abrirse ante un nuevo estímulo, mientras que uno inactivado necesita primero que la membrana se repolarice para recuperar su disponibilidad. Mientras la mayoría de los canales están inactivados no hay estímulo, por intenso que sea, capaz de generar otro potencial de acción. Eso es el periodo refractario absoluto, y es lo que impide que el impulso retroceda y lo que pone un límite a la frecuencia máxima de disparo.',
  no:{
    0:'El potencial de acción mueve una cantidad ínfima de iones y no agota el ATP. La bomba repone el gradiente en segundo plano, sin relación temporal con el periodo refractario.',
    2:'Los canales de potasio se abren durante la repolarización; su cierre tardío explica la hiperpolarización, que corresponde al periodo refractario relativo, no al absoluto.',
    3:'El gradiente de sodio apenas se modifica: por cada potencial de acción cruza la membrana una fracción minúscula de los iones disponibles.'
  },
  trampa:'Tratar "inactivado" y "cerrado" como sinónimos. Toda la explicación del periodo refractario está en esa diferencia.',
  obj:'Explicar el periodo refractario desde el comportamiento de las compuertas del canal de sodio.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, capítulo de potenciales de membrana.',
  tags:['periodo refractario','canal de sodio','inactivación']
},
{
  id:'U7-F-Q02', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Contracción muscular', sub:'Sarcómero',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Durante la contracción del músculo esquelético, ¿qué ocurre con las bandas del sarcómero?',
  ops:[
    'Se acortan la banda A y la banda I, y la zona H no cambia',
    'Se acortan la banda I y la zona H, y la banda A no cambia',
    'Se acortan las tres por igual',
    'Solo se acorta la banda A'
  ],
  ok:1,
  clave:'La banda A mide lo que mide el filamento grueso, que no cambia de longitud.',
  exp:'La banda A corresponde a la longitud del filamento grueso de miosina, y ese filamento no se acorta: por eso la banda A permanece constante durante toda la contracción. Lo que sí cambia es el grado de solapamiento. La banda I, que contiene solo filamento fino, se reduce porque los filamentos finos se deslizan hacia el centro. La zona H, que contiene solo filamento grueso sin solapar, se reduce por el mismo motivo. Esta observación es precisamente la que sostiene la teoría del deslizamiento de los filamentos: el músculo se acorta porque los filamentos se superponen más, no porque se contraigan.',
  no:{
    0:'Si la banda A se acortara, el filamento grueso tendría que encogerse, que es justo lo que el modelo del deslizamiento niega.',
    2:'Las tres no pueden comportarse igual: dos dependen del solapamiento y una de la longitud del filamento grueso.',
    3:'Es lo contrario de lo que ocurre: la banda A es la única que no cambia.'
  },
  trampa:'Suponer que si el músculo se acorta, todo dentro de él se acorta. El sarcómero se acorta sin que sus filamentos lo hagan.',
  obj:'Justificar la teoría del deslizamiento con la observación del sarcómero.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, capítulo de contracción del músculo esquelético.',
  tags:['sarcómero','banda A','deslizamiento','miosina']
},
{
  id:'U7-F-Q03', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Contracción muscular', sub:'Papel del ATP',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'El rigor mortis se explica porque, al agotarse el ATP tras la muerte:',
  ops:[
    'El calcio no puede salir del retículo sarcoplásmico y no se inicia la contracción',
    'Las cabezas de miosina no pueden desprenderse de la actina y quedan unidas',
    'La tropomiosina se fija de forma permanente sobre los sitios activos de la actina',
    'La bomba de sodio y potasio deja de mantener el potencial de reposo'
  ],
  ok:1,
  clave:'El ATP se necesita para SOLTAR la cabeza de miosina, no para unirla.',
  exp:'En el ciclo del puente cruzado, la cabeza de miosina se une a la actina y ejecuta el golpe de fuerza sin necesidad de ATP en ese instante. Lo que requiere ATP es el paso siguiente: la unión de una molécula de ATP a la cabeza es lo que provoca que se desprenda de la actina, y su posterior hidrólisis es lo que la recarga en posición de disparo. Cuando el ATP se agota, las cabezas quedan atrapadas en el estado de unión y el músculo se vuelve rígido. A esto se suma que la bomba del retículo sarcoplásmico, también dependiente de ATP, no puede retirar el calcio, con lo que los sitios de la actina permanecen accesibles.',
  no:{
    0:'Es al revés: el calcio sale y no puede volver a recaptarse, porque la bomba que lo recoge también consume ATP.',
    2:'La tropomiosina se desplaza y deja los sitios libres mientras haya calcio en el citosol, que es exactamente lo que ocurre en el rigor.',
    3:'La bomba de sodio y potasio mantiene el potencial de reposo, pero su fallo no explica la rigidez mecánica de la unión actina-miosina.'
  },
  trampa:'Pensar que el ATP hace falta para contraerse y que sin ATP el músculo quedaría flácido. Es justo al contrario.',
  obj:'Identificar las dos funciones del ATP en el ciclo del puente cruzado.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['rigor mortis','ATP','puente cruzado','miosina']
},
{
  id:'U7-F-Q04', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Potencial de membrana', sub:'Potencial de reposo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el potencial de reposo de la neurona se aproxima al potencial de equilibrio del potasio y no al del sodio?',
  ops:[
    'Porque hay más potasio que sodio en el líquido extracelular',
    'Porque la membrana en reposo es mucho más permeable al potasio que al sodio',
    'Porque la bomba de sodio y potasio saca dos sodios por cada tres potasios que mete',
    'Porque el potasio tiene mayor carga eléctrica que el sodio'
  ],
  ok:1,
  clave:'El potencial de membrana se acerca al ion al que la membrana deja pasar mejor.',
  exp:'El potencial de reposo refleja el equilibrio entre los gradientes de los distintos iones ponderados por la permeabilidad de la membrana a cada uno. En reposo, los canales de fuga de potasio están abiertos y los de sodio prácticamente cerrados, de manera que la permeabilidad al potasio es muy superior. El potasio sale siguiendo su gradiente y deja el interior negativo, hasta que esa negatividad frena su salida. Por eso el valor final queda cerca del potencial de equilibrio del potasio, alrededor de −90 mV, y no del sodio, que está en torno a +60 mV. La bomba contribuye, pero su aporte directo al voltaje es pequeño.',
  no:{
    0:'Es al revés: el potasio abunda en el interior de la célula y el sodio en el exterior.',
    2:'La estequiometría es la contraria: la bomba saca tres sodios y mete dos potasios. Y aunque es electrogénica, su contribución directa al potencial es modesta.',
    3:'Ambos son cationes monovalentes: llevan exactamente la misma carga.'
  },
  trampa:'Atribuir el potencial de reposo a la bomba. La bomba construye el gradiente; la permeabilidad selectiva es la que lo convierte en voltaje.',
  obj:'Distinguir el papel del gradiente del papel de la permeabilidad.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica.',
  tags:['potencial de reposo','permeabilidad','potasio']
},

/* ===================== HISTOLOGIA ===================== */
{
  id:'U7-H-Q01', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Epitelios', sub:'Clasificación',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'En una preparación se observa un epitelio en el que todas las células contactan con la membrana basal, pero solo algunas alcanzan la superficie libre, quedando los núcleos a distintas alturas. ¿De qué epitelio se trata?',
  ops:[
    'Estratificado cilíndrico',
    'Seudoestratificado',
    'De transición',
    'Simple cúbico'
  ],
  ok:1,
  clave:'Todas las células tocan la basal: es simple, aunque lo parezca estratificado.',
  exp:'El epitelio seudoestratificado es en realidad un epitelio simple: todas sus células se apoyan en la membrana basal. Lo que ocurre es que tienen alturas distintas y solo algunas llegan hasta la superficie, de modo que sus núcleos se disponen a diferentes niveles y dan la apariencia de varias capas. De ahí el prefijo. Su variedad más conocida es el seudoestratificado cilíndrico ciliado con células caliciformes, que reviste la vía aérea de conducción.',
  no:{
    0:'En un epitelio estratificado verdadero, solo la capa basal contacta con la membrana basal; las superiores se apoyan unas sobre otras.',
    2:'El epitelio de transición sí es estratificado y su rasgo distintivo es que cambia de aspecto según el grado de distensión del órgano.',
    3:'El simple cúbico tiene una única capa de células de altura uniforme, con los núcleos alineados a la misma altura.'
  },
  trampa:'Dejarse llevar por la apariencia de varias capas. El criterio no es dónde están los núcleos, sino qué células tocan la membrana basal.',
  obj:'Aplicar el criterio de clasificación de los epitelios a una descripción microscópica.',
  ref:'Ross, Histología. Texto y Atlas. Junqueira, Histología Básica.',
  tags:['seudoestratificado','epitelio','membrana basal']
},
{
  id:'U7-H-Q02', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Epitelios', sub:'Membrana basal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la integridad de la membrana basal tiene tanta importancia en el diagnóstico de los tumores epiteliales?',
  ops:[
    'Porque mientras no se atraviesa, el tumor no tiene acceso a los vasos del tejido conectivo y no puede dar metástasis',
    'Porque su rotura permite que el epitelio se nutra por difusión',
    'Porque la membrana basal contiene los vasos que irrigan el epitelio',
    'Porque su rotura activa la queratinización del epitelio'
  ],
  ok:0,
  clave:'El epitelio es avascular; los vasos están en el conectivo, al otro lado de la basal.',
  exp:'El epitelio carece de vasos: se nutre por difusión desde el tejido conectivo subyacente, del que lo separa la membrana basal. Un tumor epitelial que todavía no ha atravesado esa lámina se denomina carcinoma in situ y, al no tener acceso a vasos sanguíneos ni linfáticos, no puede diseminarse. En cuanto la atraviesa e invade el conectivo, alcanza esos vasos y pasa a ser un carcinoma invasor con capacidad de metastatizar. Por eso esa línea, visible al microscopio, marca un cambio radical de pronóstico y de tratamiento.',
  no:{
    1:'El epitelio se nutre por difusión a través de la membrana basal intacta; su rotura no es necesaria para ello.',
    2:'La membrana basal no contiene vasos: es una lámina de matriz extracelular. Los vasos están en el conectivo.',
    3:'La queratinización depende del programa de diferenciación del epitelio y de su exposición al ambiente, no de la membrana basal.'
  },
  trampa:'Estudiar la membrana basal como un dato descriptivo más. Es el concepto histológico con mayor repercusión clínica de todo el tema.',
  obj:'Conectar la avascularidad del epitelio con el concepto de invasión tumoral.',
  ref:'Ross, Histología. Texto y Atlas.',
  tags:['membrana basal','carcinoma in situ','invasión','avascular']
},
{
  id:'U7-H-Q03', programa:'unirm', cuatri:7,
  esp:'Histología', tema:'Tejido conectivo', sub:'Fibras',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipo de fibra predomina en la pared de la aorta y por qué?',
  ops:[
    'Colágena, porque debe resistir tracción longitudinal',
    'Elástica, porque debe distenderse con cada sístole y recuperar la forma',
    'Reticular, porque debe sostener el endotelio',
    'De fibrina, porque participa en la hemostasia de la pared'
  ],
  ok:1,
  clave:'La aorta necesita ceder y volver en cada latido.',
  exp:'La aorta recibe en cada sístole un volumen de sangre a presión elevada. Su pared contiene abundantes láminas elásticas que le permiten distenderse para acomodar ese volumen y después retraerse durante la diástole, empujando la sangre hacia adelante. Ese retroceso elástico es lo que mantiene el flujo durante la diástole y convierte el bombeo intermitente del corazón en un flujo continuo en la periferia. Por eso la aorta se clasifica como arteria elástica, a diferencia de las arterias musculares más distales.',
  no:{
    0:'El colágeno aporta resistencia a la tracción pero apenas cede, y la aorta necesita precisamente ceder y recuperarse.',
    2:'Las fibras reticulares sostienen el estroma de órganos blandos como el hígado, el bazo o los ganglios, no la pared arterial.',
    3:'La fibrina no es una fibra estructural del tejido conectivo: se forma en el coágulo a partir del fibrinógeno plasmático.'
  },
  trampa:'Asociar automáticamente "resistencia" con colágeno. La pregunta no es cuánto aguanta, sino si tiene que volver a su forma.',
  obj:'Deducir la composición de un tejido a partir de la función mecánica que cumple.',
  ref:'Ross, Histología. Texto y Atlas. Junqueira, Histología Básica.',
  tags:['fibra elástica','aorta','arteria elástica','elastina']
},

/* ===================== BIOQUIMICA I ===================== */
{
  id:'U7-B-Q01', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Enzimas', sub:'Inhibición',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Al añadir un inhibidor a una reacción enzimática se observa que la Vmax no varía pero la Km aumenta. ¿De qué tipo de inhibición se trata y por qué se comporta así?',
  ops:[
    'No competitiva: el inhibidor se une fuera del sitio activo y reduce la enzima funcional',
    'Competitiva: el inhibidor ocupa el sitio activo y puede desplazarse aumentando el sustrato',
    'Acompetitiva: el inhibidor solo se une al complejo enzima-sustrato',
    'Irreversible: el inhibidor forma un enlace covalente con la enzima'
  ],
  ok:1,
  clave:'Si se puede vencer echando más sustrato, es competitiva.',
  exp:'El inhibidor competitivo se parece estructuralmente al sustrato y ocupa el sitio activo, de modo que ambos compiten por el mismo lugar. Al aumentar la concentración de sustrato, el sustrato gana la competencia por probabilidad y la enzima acaba alcanzando la misma velocidad máxima: por eso la Vmax no cambia. Lo que sí cambia es cuánto sustrato hace falta para llegar a la mitad de esa velocidad, que ahora es más: por eso la Km aumenta, lo que equivale a decir que la afinidad aparente disminuye.',
  no:{
    0:'En la inhibición no competitiva ocurre lo contrario: la Vmax baja porque parte de la enzima queda inutilizada, y la Km no cambia.',
    2:'En la inhibición acompetitiva bajan tanto la Vmax como la Km, porque el inhibidor retira complejo enzima-sustrato del equilibrio.',
    3:'Una inhibición irreversible elimina enzima de forma permanente y se comporta funcionalmente como una reducción de Vmax.'
  },
  trampa:'Memorizar las cuatro combinaciones sin entenderlas. La pregunta útil es siempre la misma: ¿puedo vencer al inhibidor echando más sustrato?',
  obj:'Interpretar los parámetros cinéticos para identificar el tipo de inhibición.',
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.',
  tags:['inhibición competitiva','Km','Vmax','cinética']
},
{
  id:'U7-B-Q02', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Glucólisis', sub:'Regulación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el principal punto de regulación de la glucólisis y qué lógica sigue su control?',
  ops:[
    'La hexoquinasa, inhibida por el exceso de glucosa libre',
    'La fosfofructoquinasa-1, inhibida por ATP y citrato y activada por AMP',
    'La piruvato quinasa, activada por el ATP acumulado',
    'La lactato deshidrogenasa, regulada por la disponibilidad de oxígeno'
  ],
  ok:1,
  clave:'El ATP y el citrato son señales de que a la célula le sobra energía.',
  exp:'La fosfofructoquinasa-1 cataliza uno de los tres pasos irreversibles de la glucólisis y es su principal punto de control. Su regulación sigue una lógica sencilla: la inhiben el ATP y el citrato, que son señales de que la célula ya tiene energía de sobra y no necesita seguir degradando glucosa; y la activan el AMP, que indica que la carga energética está baja, y la fructosa-2,6-bisfosfato, que es el mensajero que traduce la señal hormonal. Este es un ejemplo del principio general de que las rutas se regulan en sus pasos irreversibles, porque son los únicos en los que el control es efectivo.',
  no:{
    0:'La hexoquinasa se inhibe por su producto, la glucosa-6-fosfato, no por la glucosa libre. Además no es el punto de control principal.',
    2:'La piruvato quinasa es un punto de control, pero el ATP la inhibe, no la activa: acumular ATP nunca acelera una ruta catabólica.',
    3:'La lactato deshidrogenasa actúa después de la glucólisis y no regula su velocidad.'
  },
  trampa:'Suponer que el ATP activa las rutas porque "da energía". En una ruta que produce ATP, el ATP es la señal de frenar.',
  obj:'Aplicar la lógica de la regulación metabólica a la glucólisis.',
  ref:'Lehninger, Principios de Bioquímica. Harper, Bioquímica Ilustrada.',
  tags:['fosfofructoquinasa','regulación','glucólisis','ATP']
},
{
  id:'U7-B-Q03', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Glucólisis', sub:'Fermentación láctica',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la verdadera finalidad metabólica de convertir piruvato en lactato en condiciones anaerobias?',
  ops:[
    'Obtener ATP adicional a partir del piruvato',
    'Regenerar el NAD+ necesario para que la glucólisis continúe',
    'Eliminar el exceso de protones del citosol',
    'Producir un sustrato que la mitocondria pueda oxidar más deprisa'
  ],
  ok:1,
  clave:'Sin NAD+ libre, la glucólisis se detiene en su sexto paso.',
  exp:'La glucólisis necesita NAD+ en el paso catalizado por la gliceraldehído-3-fosfato deshidrogenasa. En condiciones aerobias, el NADH producido cede sus electrones a la cadena respiratoria y el NAD+ se regenera. Sin oxígeno esa vía queda bloqueada y el NAD+ se agotaría, deteniendo la glucólisis y dejando a la célula sin su única fuente de ATP. La reducción de piruvato a lactato por la lactato deshidrogenasa oxida NADH a NAD+ y resuelve el problema. El lactato en sí no aporta energía a la célula: es el residuo que hay que pagar para poder seguir haciendo glucólisis.',
  no:{
    0:'La conversión a lactato no produce ATP. Todo el ATP anaerobio procede de la propia glucólisis.',
    2:'La fermentación láctica no elimina protones; de hecho la acumulación de lactato se asocia a acidosis.',
    3:'El lactato no es un sustrato mitocondrial preferente; en condiciones aerobias el piruvato pasa directamente a acetil-CoA.'
  },
  trampa:'Ver el lactato como un producto útil. Es un residuo: lo valioso de la reacción es el NAD+ que se recupera.',
  obj:'Explicar la fermentación láctica desde la necesidad de regenerar cofactores.',
  ref:'Lehninger, Principios de Bioquímica.',
  tags:['lactato','NAD+','anaerobiosis','glucólisis']
},

/* ===================== EMBRIOLOGIA ===================== */
{
  id:'U7-E-Q01', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Gastrulación', sub:'Origen de las hojas',
  dif:3, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'Durante la gastrulación, ¿de qué estructura derivan las tres hojas embrionarias?',
  ops:[
    'El endodermo procede del hipoblasto y las otras dos del epiblasto',
    'Las tres proceden del epiblasto',
    'Cada hoja procede de una capa distinta del blastocisto',
    'Las tres proceden del trofoblasto'
  ],
  ok:1,
  clave:'El hipoblasto es desplazado, no incorporado.',
  exp:'Las células que migran a través de la línea primitiva proceden todas del epiblasto. Las primeras en invadir desplazan al hipoblasto y pasan a constituir el endodermo definitivo; las siguientes se sitúan entre ambas capas y forman el mesodermo; y las que permanecen en la capa superior constituyen el ectodermo. El hipoblasto, por tanto, no aporta tejido al embrión propiamente dicho: contribuye a estructuras extraembrionarias. Es un punto que se pregunta con frecuencia porque la respuesta intuitiva —una hoja por capa— es falsa.',
  no:{
    0:'Es el error clásico. El endodermo definitivo procede del epiblasto y desplaza al hipoblasto, que no se incorpora al embrión.',
    2:'El blastocisto no tiene tres capas: tiene trofoblasto y masa celular interna, y es esta última la que se organiza en epiblasto e hipoblasto.',
    3:'El trofoblasto da lugar a la porción fetal de la placenta, no a las hojas embrionarias.'
  },
  trampa:'La simetría aparente de "tres capas, tres orígenes". No la hay: las tres salen del epiblasto.',
  obj:'Precisar el origen de las hojas embrionarias durante la gastrulación.',
  ref:'Langman, Embriología Médica. Moore, Embriología Clínica.',
  tags:['gastrulación','epiblasto','hipoblasto','línea primitiva']
},
{
  id:'U7-E-Q02', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Cresta neural', sub:'Derivados',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'La médula suprarrenal, los melanocitos y el tabique aorticopulmonar comparten un mismo origen embrionario. ¿Cuál?',
  ops:[
    'Mesodermo intermedio',
    'Cresta neural',
    'Endodermo faríngeo',
    'Mesodermo lateral'
  ],
  ok:1,
  clave:'Tres estructuras muy distintas entre sí que migran desde el mismo sitio.',
  exp:'La cresta neural está formada por células que se desprenden de los bordes de los pliegues neurales cuando el tubo neural se cierra, y que después migran por todo el embrión. Aunque su origen es ectodérmico, sus derivados son extraordinariamente diversos: ganglios sensitivos y autónomos, células de Schwann, melanocitos, médula suprarrenal, gran parte del esqueleto craneofacial y el tabique que separa la aorta de la arteria pulmonar. Esa diversidad explica por qué un fallo en su migración puede producir a la vez cardiopatías conotruncales, anomalías craneofaciales y trastornos de la pigmentación.',
  no:{
    0:'El mesodermo intermedio da el aparato urinario y las gónadas, y la corteza suprarrenal, pero no su médula.',
    2:'Del endodermo faríngeo derivan timo, paratiroides y parte del tiroides, no estas tres estructuras.',
    3:'El mesodermo lateral forma las serosas y la pared corporal, y contribuye al corazón, pero el tabique aorticopulmonar procede de la cresta neural.'
  },
  trampa:'La corteza y la médula suprarrenal tienen orígenes distintos: mesodermo intermedio la corteza, cresta neural la médula. Se pregunta mucho.',
  obj:'Reconocer los derivados de la cresta neural y su relevancia clínica.',
  ref:'Langman, Embriología Médica. Moore, Embriología Clínica.',
  tags:['cresta neural','médula suprarrenal','tabique aorticopulmonar','melanocito']
},
{
  id:'U7-E-Q03', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Tubo neural', sub:'Prevención',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer acude a consulta preconcepcional porque planea quedar embarazada en los próximos meses.',
  enunciado:'¿Por qué la suplementación con ácido fólico debe iniciarse antes de la concepción y no al confirmarse el embarazo?',
  ops:[
    'Porque el ácido fólico tarda varios meses en alcanzar concentraciones útiles en el feto',
    'Porque el tubo neural se cierra hacia los días 25 a 27, cuando muchas mujeres aún no saben que están embarazadas',
    'Porque durante el primer trimestre el fólico no atraviesa la placenta',
    'Porque su efecto protector se ejerce sobre el óvulo antes de la fecundación'
  ],
  ok:1,
  clave:'El neuroporo anterior cierra hacia el día 25 y el posterior hacia el 27.',
  exp:'El tubo neural se cierra al final de la cuarta semana del desarrollo: el neuroporo anterior alrededor del día 25 y el posterior alrededor del día 27. Contados desde la última menstruación, eso corresponde aproximadamente a la sexta semana de amenorrea, un momento en el que muchas mujeres todavía no saben que están embarazadas o acaban de enterarse. Cualquier medida preventiva que pretenda influir en el cierre tiene que estar actuando antes de esa fecha, y por eso la suplementación se recomienda desde al menos un mes antes de la concepción.',
  no:{
    0:'El problema no es farmacocinético: es que el periodo crítico del cierre ya habría pasado.',
    2:'El ácido fólico atraviesa la placenta con normalidad.',
    3:'El efecto protector se ejerce durante el desarrollo embrionario temprano, no sobre el óvulo previo a la fecundación.'
  },
  trampa:'Pensar en semanas de gestación y no en días de desarrollo. La diferencia entre ambas cuentas es de unas dos semanas y aquí es decisiva.',
  obj:'Relacionar el cronograma del cierre del tubo neural con la prevención primaria.',
  ref:'Langman, Embriología Médica. Moore, Embriología Clínica.',
  tags:['tubo neural','ácido fólico','neuroporo','prevención']
},

/* ===================== MICROBIOLOGIA MEDICA ===================== */
{
  id:'U7-M-Q01', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Tinción de Gram', sub:'Fundamento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el paso decisivo de la tinción de Gram y qué determina el color final?',
  ops:[
    'La aplicación del cristal violeta, que solo penetra en los grampositivos',
    'La decoloración con alcohol, que el peptidoglicano grueso resiste reteniendo el colorante',
    'La adición de lugol, que solo forma complejos en los gramnegativos',
    'La contratinción con safranina, que tiñe selectivamente la membrana externa'
  ],
  ok:1,
  clave:'El color no depende de lo que la bacteria capta, sino de lo que retiene al lavarla.',
  exp:'El cristal violeta penetra en todas las bacterias y el lugol lo fija formando un complejo voluminoso en el citoplasma. El paso que decide el resultado es el tercero: el alcohol deshidrata la gruesa malla de peptidoglicano del grampositivo, que se cierra y atrapa el complejo, de modo que la bacteria conserva el color violeta. En el gramnegativo, en cambio, el alcohol disuelve la membrana externa rica en lípidos y el complejo escapa a través de la delgada capa de peptidoglicano; al quedar incolora, la safranina la tiñe de rosa. Por eso una decoloración excesiva es el error técnico más frecuente y convierte falsamente grampositivos en gramnegativos.',
  no:{
    0:'El cristal violeta penetra en ambos tipos de bacteria por igual.',
    2:'El lugol actúa igual en ambos: forma el complejo con el cristal violeta en las dos.',
    3:'La safranina tiñe cualquier bacteria que haya quedado incolora; no tiene afinidad selectiva por la membrana externa.'
  },
  trampa:'Estudiar la tinción como una secuencia de pasos que memorizar. Solo uno decide el resultado, y hace falta saber cuál.',
  obj:'Explicar el fundamento estructural de la tinción de Gram.',
  ref:'Murray, Microbiología Médica. Jawetz, Microbiología Médica.',
  tags:['Gram','peptidoglicano','decoloración','alcohol']
},
{
  id:'U7-M-Q02', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Factores de virulencia', sub:'Endotoxina',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de las siguientes afirmaciones sobre la endotoxina es correcta?',
  ops:[
    'Es una proteína secretada activamente por bacterias grampositivas',
    'Es el lipopolisacárido de la membrana externa de las gramnegativas y se libera al lisarse la bacteria',
    'Se neutraliza fácilmente mediante toxoides empleados en vacunación',
    'Su efecto biológico varía mucho según la especie bacteriana que la produce'
  ],
  ok:1,
  clave:'Endotoxina = LPS = componente estructural de la membrana externa gramnegativa.',
  exp:'La endotoxina es el lipopolisacárido de la membrana externa de las bacterias gramnegativas. No se secreta: forma parte de la estructura de la bacteria y se libera cuando esta se lisa, lo que explica que el cuadro clínico pueda empeorar al iniciar el tratamiento antibiótico. Su fracción activa es el lípido A, que desencadena la liberación masiva de citocinas y puede conducir a fiebre, hipotensión, coagulación intravascular diseminada y shock séptico. Al ser un componente estructural común, su efecto es estereotipado y muy parecido con independencia de la especie.',
  no:{
    0:'Las proteínas secretadas son las exotoxinas, características sobre todo de las grampositivas. La endotoxina no es una proteína ni se secreta.',
    2:'Los toxoides se obtienen inactivando exotoxinas proteicas, como las del tétanos y la difteria. El lipopolisacárido no se convierte en toxoide.',
    3:'Es justo al contrario: el efecto de la endotoxina es muy uniforme, mientras que el de las exotoxinas es específico de cada una.'
  },
  trampa:'Cruzar las características de endotoxina y exotoxina. Conviene fijar una y deducir la otra por oposición.',
  obj:'Diferenciar endotoxina y exotoxina por su naturaleza, origen y efecto.',
  ref:'Murray, Microbiología Médica. Jawetz, Microbiología Médica.',
  tags:['endotoxina','lipopolisacárido','lípido A','shock séptico']
},
{
  id:'U7-M-Q03', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Identificación', sub:'Cocos grampositivos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En el laboratorio se aísla un coco grampositivo dispuesto en racimos. La prueba de la catalasa produce burbujas y la de la coagulasa resulta positiva.',
  enunciado:'¿De qué microorganismo se trata?',
  ops:[
    'Streptococcus pyogenes',
    'Staphylococcus aureus',
    'Staphylococcus epidermidis',
    'Enterococcus faecalis'
  ],
  ok:1,
  clave:'Catalasa positiva lo hace estafilococo; coagulasa positiva lo hace aureus.',
  exp:'El árbol de identificación de los cocos grampositivos avanza con dos pruebas. La catalasa separa los géneros: Staphylococcus es catalasa positivo, mientras que Streptococcus y Enterococcus son negativos. Dentro de los estafilococos, la coagulasa distingue a Staphylococcus aureus, que es el único coagulasa positivo de importancia clínica habitual, del resto, agrupados como estafilococos coagulasa negativos. La disposición en racimos apoya el género, pero es la catalasa la que lo decide.',
  no:{
    0:'S. pyogenes es catalasa negativo y se dispone en cadenas, no en racimos.',
    2:'S. epidermidis es catalasa positivo pero coagulasa negativo. Se asocia sobre todo a infecciones sobre catéteres y material protésico.',
    3:'Enterococcus es catalasa negativo y no produce hemólisis en agar sangre.'
  },
  trampa:'Decidir por la disposición microscópica. Racimos y cadenas orientan, pero las pruebas bioquímicas son las que identifican.',
  obj:'Aplicar el algoritmo catalasa-coagulasa a la identificación de un aislado.',
  ref:'Murray, Microbiología Médica. Jawetz, Microbiología Médica.',
  tags:['catalasa','coagulasa','Staphylococcus aureus','identificación']
},
{
  id:'U7-M-Q04', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Antibióticos', sub:'Diana de los betalactámicos',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los betalactámicos carecen por completo de actividad frente a Mycoplasma pneumoniae?',
  ops:[
    'Porque el micoplasma produce betalactamasas de espectro extendido',
    'Porque el micoplasma carece de pared celular y, por tanto, de la diana del fármaco',
    'Porque el micoplasma es intracelular estricto y el fármaco no penetra',
    'Porque el micoplasma tiene una membrana externa impermeable a los betalactámicos'
  ],
  ok:1,
  clave:'Sin peptidoglicano no hay nada que inhibir.',
  exp:'Los betalactámicos actúan inhibiendo las proteínas fijadoras de penicilina, que catalizan el entrecruzamiento del peptidoglicano de la pared bacteriana. Los micoplasmas son las bacterias más pequeñas capaces de vida libre y carecen por completo de pared celular: están limitados únicamente por su membrana plasmática, reforzada con esteroles. Al no existir peptidoglicano, no hay diana sobre la que actuar, y la resistencia es intrínseca, no adquirida. Esa misma ausencia de pared explica que no se tiñan con Gram. El tratamiento se basa en macrólidos, tetraciclinas o fluoroquinolonas, que actúan sobre la síntesis proteica o el ADN.',
  no:{
    0:'La resistencia del micoplasma no depende de enzimas: es estructural. Producir betalactamasas sería innecesario.',
    2:'El micoplasma no es un patógeno intracelular estricto; se adhiere al epitelio respiratorio y permanece extracelular.',
    3:'Carece de membrana externa: esa es una característica de las bacterias gramnegativas.'
  },
  trampa:'Atribuir toda resistencia a una betalactamasa. Aquí no hay enzima ni mutación: simplemente falta la diana.',
  obj:'Relacionar la estructura bacteriana con la elección del antibiótico.',
  ref:'Murray, Microbiología Médica. Jawetz, Microbiología Médica.',
  tags:['micoplasma','betalactámico','pared celular','resistencia intrínseca']
},

/* ===================== ESTADISTICA I ===================== */
{
  id:'U7-S-Q01', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Tendencia central', sub:'Elección de la medida',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Se estudia la estancia hospitalaria de 200 pacientes. La mayoría permanece ingresada entre dos y cuatro días, pero un pequeño grupo con complicaciones permanece más de sesenta. La media resulta de 8,4 días y la mediana de 3 días.',
  enunciado:'¿Qué medida describe mejor la estancia habitual y por qué?',
  ops:[
    'La media, porque utiliza la información de todos los pacientes',
    'La mediana, porque no se ve arrastrada por los valores extremos',
    'La moda, porque es la única válida con datos asimétricos',
    'Ambas describen igual de bien: la diferencia es irrelevante'
  ],
  ok:1,
  clave:'Media muy superior a la mediana indica asimetría a la derecha.',
  exp:'La media incorpora todos los valores y por eso cualquier observación extrema tira de ella. La mediana, que es el valor que deja la mitad de los datos a cada lado, es robusta frente a esos extremos. En este caso, que la media casi triplique a la mediana es la señal de que unos pocos ingresos muy prolongados están inflando el promedio: decir que la estancia media es de 8,4 días daría una idea equivocada de lo que le ocurre a un paciente típico, que está ingresado tres días. Por eso las estancias hospitalarias, los tiempos de espera y los costes sanitarios se comunican habitualmente con la mediana.',
  no:{
    0:'Usar toda la información no es una ventaja cuando parte de esa información son valores atípicos que distorsionan el resultado.',
    2:'La moda es válida aquí pero informa solo del valor más repetido; no resume la distribución ni es la única opción posible.',
    3:'La diferencia es precisamente el hallazgo: media y mediana muy distintas son el indicador de asimetría.'
  },
  trampa:'Usar la media por costumbre. La pregunta previa siempre es si la distribución es simétrica.',
  obj:'Elegir la medida de tendencia central adecuada según la forma de la distribución.',
  ref:'Dawson y Trapp, Bioestadística Médica.',
  tags:['media','mediana','asimetría','estancia hospitalaria']
},
{
  id:'U7-S-Q02', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Distribución normal', sub:'Regla empírica',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'En una población, la concentración de hemoglobina sigue una distribución normal con media de 14 g/dL y desviación estándar de 1 g/dL. ¿Aproximadamente qué porcentaje de individuos tiene valores entre 12 y 16 g/dL?',
  ops:['68%','95%','99,7%','50%'],
  ok:1,
  clave:'12 y 16 están a dos desviaciones estándar de la media.',
  exp:'Con una media de 14 y una desviación estándar de 1, el intervalo de 12 a 16 abarca exactamente dos desviaciones estándar a cada lado de la media. La regla empírica de la distribución normal establece que alrededor del 68% de las observaciones cae dentro de una desviación estándar, el 95% dentro de dos y el 99,7% dentro de tres. La respuesta es por tanto el 95%. Conviene tener presente que esta regla solo es aplicable si la distribución es efectivamente normal; en distribuciones asimétricas no se cumple.',
  no:{
    0:'El 68% corresponde a una sola desviación estándar, es decir, al intervalo de 13 a 15 g/dL.',
    2:'El 99,7% corresponde a tres desviaciones estándar, esto es, de 11 a 17 g/dL.',
    3:'El 50% corresponde a lo que queda por encima o por debajo de la media, no a un intervalo centrado de esta amplitud.'
  },
  trampa:'No contar bien cuántas desviaciones estándar abarca el intervalo. Es el paso donde se pierde la pregunta.',
  obj:'Aplicar la regla empírica de la distribución normal a un dato clínico.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['distribución normal','regla empírica','desviación estándar']
},
{
  id:'U7-S-Q03', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Variables', sub:'Escalas de medición',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'El estadio de un tumor, clasificado como I, II, III y IV, ¿a qué tipo de variable corresponde?',
  ops:[
    'Cuantitativa discreta, porque se expresa con números',
    'Cualitativa ordinal, porque hay orden pero no distancia definida entre categorías',
    'Cualitativa nominal, porque son categorías diagnósticas',
    'Cuantitativa continua, porque la progresión tumoral es gradual'
  ],
  ok:1,
  clave:'Hay orden, pero la distancia entre estadios no es comparable ni constante.',
  exp:'Los estadios tumorales tienen un orden claro: el IV es más avanzado que el III, y este que el II. Pero la diferencia entre el estadio I y el II no representa la misma magnitud que la que hay entre el III y el IV, y esa distancia no está definida en ninguna unidad. Eso es exactamente la definición de una variable cualitativa ordinal. En consecuencia admite mediana y percentiles, pero no media aritmética: hablar del estadio medio de una serie de pacientes no significa nada, por mucho que los números romanos inviten a promediarlos.',
  no:{
    0:'Que se represente con números no la convierte en cuantitativa. La prueba es preguntarse si su media tiene sentido.',
    2:'Sería nominal si no hubiera orden entre las categorías, y aquí lo hay de forma explícita.',
    3:'La variable registrada no es continua: solo puede tomar cuatro valores discretos y ordenados.'
  },
  trampa:'Confundir la codificación con la naturaleza de la variable. Los números pueden ser solo etiquetas ordenadas.',
  obj:'Clasificar correctamente una variable según su escala de medición.',
  ref:'Dawson y Trapp, Bioestadística Médica.',
  tags:['ordinal','escala de medición','estadio tumoral']
}

]);
