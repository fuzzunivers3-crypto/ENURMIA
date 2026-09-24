/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE BIOQUIMICA II (1/2)
   Amplia Bioquimica II de 4 a 50 preguntas junto con banco-22.js.
   Esta parte cubre glucogeno, gluconeogenesis, pentosas fosfato,
   cuerpos cetonicos, sintesis de acidos grasos/colesterol y
   ciclo de la urea (temas 1-6).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== BIOQUIMICA II ===================== */
{
  id:'U8-B-Q05', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Glucógeno', sub:'Glucosa-6-fosfatasa hepática',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué solo el hígado, y no el músculo, puede liberar glucosa libre hacia la sangre a partir de su glucógeno almacenado?',
  ops:[
    'Porque solo el hígado tiene glucógeno almacenado',
    'Porque solo el hígado expresa la enzima glucosa-6-fosfatasa, que convierte la glucosa-6-fosfato en glucosa libre capaz de salir de la célula',
    'Porque el músculo no tiene glucógeno fosforilasa',
    'Porque el hígado tiene mayor cantidad de glucógeno almacenado que el músculo'
  ],
  ok:1,
  clave:'Solo el hígado tiene glucosa-6-fosfatasa, la enzima que permite liberar glucosa libre a la sangre.',
  exp:'Tanto el hígado como el músculo almacenan glucógeno y tienen glucógeno fosforilasa para degradarlo, pero solo el hígado expresa la enzima glucosa-6-fosfatasa, que convierte la glucosa-6-fosfato (producida por la glucogenólisis) en glucosa libre, capaz de salir de la célula hacia la circulación. El músculo carece de esta enzima, así que su glucógeno solo puede usarse localmente, dentro de la propia fibra muscular, sin poder exportar glucosa libre para elevar la glucemia sistémica.',
  no:{
    0:'Ambos tejidos almacenan glucógeno; la diferencia no es la presencia de glucógeno, sino la capacidad de liberarlo como glucosa libre.',
    2:'El músculo sí tiene glucógeno fosforilasa, y de hecho la usa activamente para degradar su propio glucógeno durante el ejercicio; lo que le falta es la glucosa-6-fosfatasa.',
    3:'La cantidad relativa de glucógeno almacenado no es la razón de esta diferencia funcional; el factor determinante es la presencia o ausencia de una enzima específica.'
  },
  trampa:'Buscar la explicación en la cantidad de glucógeno almacenado en vez de en la presencia específica de la enzima glucosa-6-fosfatasa.',
  obj:'Explicar por qué solo el hígado puede liberar glucosa libre a partir de su glucógeno.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['glucosa-6-fosfatasa','glucógeno hepático','glucógeno muscular','glucogenólisis']
},
{
  id:'U8-B-Q06', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Glucogenosis', sub:'Enfermedad de McArdle',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta calambres musculares y fatiga precoz con el ejercicio, sin hipoglucemia en ayuno, y se le diagnostica deficiencia de glucógeno fosforilasa muscular.',
  enunciado:'¿Qué explica que este paciente NO tenga hipoglucemia en ayuno, a diferencia de un paciente con deficiencia de la fosforilasa hepática?',
  ops:[
    'La fosforilasa muscular y la hepática son exactamente la misma enzima',
    'El glucógeno muscular no contribuye a la glucemia sistémica en condiciones normales (por la ausencia de glucosa-6-fosfatasa en el músculo); su deficiencia solo afecta la disponibilidad de energía LOCAL para el propio músculo',
    'El hígado no tiene su propia glucógeno fosforilasa',
    'La deficiencia de fosforilasa muscular siempre causa hipoglucemia severa'
  ],
  ok:1,
  clave:'El glucógeno muscular nunca contribuye a la glucemia sistémica; su deficiencia solo limita la energía disponible para el propio músculo.',
  exp:'El glucógeno muscular, como ya se estableció, nunca contribuye a la glucemia sistémica en condiciones normales, porque el músculo carece de glucosa-6-fosfatasa. Por eso, la deficiencia de glucógeno fosforilasa MUSCULAR (enfermedad de McArdle) no produce hipoglucemia: el problema se limita a la incapacidad del músculo de movilizar su propio glucógeno para obtener energía durante el ejercicio, produciendo intolerancia al esfuerzo, calambres y fatiga precoz, sin ningún efecto sobre la glucemia sistémica, que sigue dependiendo normalmente del glucógeno hepático (con su propia fosforilasa, no afectada en este paciente).',
  no:{
    0:'Son isoenzimas distintas, codificadas por genes diferentes, aunque catalicen la misma reacción química; por eso pueden faltar de forma independiente en el hígado o en el músculo.',
    2:'El hígado sí tiene su propia glucógeno fosforilasa, no afectada en este paciente, que sigue permitiendo la glucogenólisis hepática normal.',
    3:'Precisamente lo contrario: la deficiencia de fosforilasa MUSCULAR no causa hipoglucemia, a diferencia de la deficiencia de glucosa-6-fosfatasa HEPÁTICA (enfermedad de Von Gierke), que sí la causa.'
  },
  trampa:'Asumir que cualquier defecto del metabolismo del glucógeno debe producir hipoglucemia, sin distinguir el tejido específico afectado y su relación (o falta de ella) con la glucemia sistémica.',
  obj:'Explicar por qué la deficiencia de glucógeno fosforilasa muscular no produce hipoglucemia sistémica.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['enfermedad de McArdle','glucógeno muscular','glucogenosis','intolerancia al ejercicio']
},
{
  id:'U8-B-Q07', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Gluconeogénesis', sub:'Precursores',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de las siguientes moléculas NO puede usarse como precursor de la gluconeogénesis en el ser humano?',
  ops:['Lactato', 'Glicerol', 'Aminoácidos glucogénicos', 'Ácidos grasos'],
  ok:3,
  clave:'Los ácidos grasos NO pueden convertirse en glucosa en el ser humano; no son precursores gluconeogénicos.',
  exp:'Los tres precursores principales de la gluconeogénesis son el lactato (vía el ciclo de Cori), el glicerol (liberado de la degradación de triglicéridos) y los aminoácidos glucogénicos (de la proteólisis muscular en el ayuno). Los ácidos grasos, en cambio, no pueden convertirse en glucosa en el ser humano: su degradación (beta-oxidación) produce acetil-CoA, y la conversión de acetil-CoA a piruvato (el paso que sería necesario para "revertir" hacia glucosa) es irreversible en la dirección requerida, así que los carbonos de los ácidos grasos no pueden usarse para fabricar glucosa nueva.',
  no:{
    0:'El lactato sí es un precursor gluconeogénico bien establecido, a través del ciclo de Cori.',
    1:'El glicerol, liberado de los triglicéridos, sí puede convertirse en un intermediario de la gluconeogénesis.',
    2:'Los aminoácidos glucogénicos sí son precursores gluconeogénicos, especialmente relevantes durante el ayuno prolongado.'
  },
  trampa:'Asumir que, como los ácidos grasos son una fuente de energía importante, también pueden convertirse en glucosa, ignorando la irreversibilidad bioquímica específica que lo impide.',
  obj:'Identificar los precursores válidos de la gluconeogénesis y reconocer que los ácidos grasos no lo son.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['gluconeogénesis','precursores gluconeogénicos','ácidos grasos','ciclo de Cori']
},
{
  id:'U8-B-Q08', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Gluconeogénesis', sub:'Pasos irreversibles de la glucólisis',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la gluconeogénesis no puede considerarse simplemente "la glucólisis funcionando al revés"?',
  ops:[
    'Porque comparte absolutamente todos los pasos con la glucólisis, sin ninguna diferencia',
    'Porque tres pasos irreversibles de la glucólisis requieren enzimas propias y distintas para "rodearlos" en la dirección contraria durante la gluconeogénesis',
    'Porque la gluconeogénesis y la glucólisis ocurren en órganos completamente distintos',
    'Porque la glucólisis no tiene ningún paso irreversible'
  ],
  ok:1,
  clave:'Tres pasos irreversibles de la glucólisis necesitan enzimas propias distintas para ser "rodeados" en la gluconeogénesis.',
  exp:'Aunque la gluconeogénesis comparte varios pasos con la glucólisis funcionando en sentido inverso, tres pasos de la glucólisis son irreversibles (piruvato quinasa, fosfofructoquinasa-1, hexoquinasa/glucoquinasa) y requieren enzimas propias, distintas, para rodearlos en la dirección contraria: piruvato carboxilasa y fosfoenolpiruvato carboxiquinasa, fructosa-1,6-bisfosfatasa, y glucosa-6-fosfatasa. Estos "rodeos" enzimáticos son los puntos de regulación independiente entre ambas vías, permitiendo activar una y reprimir la otra sin un ciclo fútil.',
  no:{
    0:'No comparten absolutamente todos los pasos; precisamente los tres pasos irreversibles requieren enzimas alternativas propias en la gluconeogénesis.',
    2:'Ambas vías ocurren predominantemente en el mismo órgano (el hígado, principalmente), aunque en compartimentos celulares parcialmente distintos para algunos pasos.',
    3:'La glucólisis sí tiene pasos irreversibles, y es precisamente esa irreversibilidad la que obliga a la gluconeogénesis a usar enzimas alternativas en esos puntos.'
  },
  trampa:'Simplificar la relación entre ambas vías como un simple "ir y venir" sin reconocer los puntos específicos de irreversibilidad que requieren maquinaria enzimática distinta.',
  obj:'Explicar por qué la gluconeogénesis requiere enzimas propias distintas de las de la glucólisis en tres pasos específicos.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['gluconeogénesis','glucólisis','pasos irreversibles','piruvato carboxilasa']
},
{
  id:'U8-B-Q09', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Regulación hormonal', sub:'Glucagón vs. insulina',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué efecto tiene el glucagón sobre la gluconeogénesis y la glucogenólisis hepáticas?',
  ops:[
    'Inhibe ambas', 'Estimula ambas, elevando la glucosa liberada a la sangre', 'Estimula la gluconeogénesis pero inhibe la glucogenólisis', 'No tiene efecto sobre ninguna de las dos'],
  ok:1,
  clave:'El glucagón estimula tanto la glucogenólisis como la gluconeogénesis hepáticas, elevando la glucemia.',
  exp:'El glucagón, liberado cuando la glucemia cae (ayuno), estimula tanto la glucogenólisis (liberación rápida de glucosa del glucógeno almacenado) como la gluconeogénesis (síntesis de glucosa nueva a partir de precursores no glucídicos) en el hígado, elevando la cantidad de glucosa liberada a la sangre. Es la hormona antagónica de la insulina, que tiene el efecto contrario sobre estas mismas vías.',
  no:{
    0:'Es al revés: el glucagón ESTIMULA (no inhibe) ambas vías, como parte de su función de elevar la glucemia en el ayuno.',
    2:'El glucagón estimula AMBAS vías simultáneamente, no solo una de ellas.',
    3:'El glucagón sí tiene un efecto significativo y bien establecido sobre ambas vías, estimulándolas.'
  },
  trampa:'Invertir el efecto del glucagón sobre estas vías, o asumir que solo afecta a una de ellas.',
  obj:'Describir el efecto del glucagón sobre la glucogenólisis y la gluconeogénesis hepáticas.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['glucagón','gluconeogénesis','glucogenólisis','regulación hormonal']
},
{
  id:'U8-B-Q10', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Vía de las pentosas fosfato', sub:'Dos productos distintos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué dos productos principales genera la vía de las pentosas fosfato, y para qué se usa cada uno?',
  ops:[
    'ATP (energía) y CO2 (desecho)',
    'NADPH (biosíntesis reductora y defensa antioxidante) y ribosa-5-fosfato (síntesis de nucleótidos)',
    'Glucosa y piruvato, igual que la glucólisis',
    'Solo produce lactato'
  ],
  ok:1,
  clave:'La vía de las pentosas fosfato produce NADPH (fase oxidativa) y ribosa-5-fosfato (fase no oxidativa), con funciones distintas.',
  exp:'La vía de las pentosas fosfato tiene una fase oxidativa que produce NADPH (un cofactor reductor usado en biosíntesis, como la síntesis de ácidos grasos y colesterol, y en la defensa antioxidante, regenerando glutatión reducido) y una fase no oxidativa que produce ribosa-5-fosfato (el azúcar de cinco carbonos necesario para sintetizar nucleótidos, y por tanto ADN y ARN). A diferencia de la glucólisis, esta vía no tiene como objetivo principal producir ATP.',
  no:{
    0:'La vía de las pentosas fosfato no tiene como función principal generar ATP; sus productos característicos son NADPH y ribosa-5-fosfato.',
    2:'No produce glucosa ni piruvato como productos característicos; su fase no oxidativa puede reintegrar intermediarios a la glucólisis, pero sus productos distintivos son otros.',
    3:'No produce lactato; ese es un producto de la glucólisis anaeróbica, una vía distinta.'
  },
  trampa:'Confundir los productos de la vía de las pentosas fosfato con los de la glucólisis, cuando en realidad tienen propósitos y productos completamente distintos.',
  obj:'Identificar los dos productos principales de la vía de las pentosas fosfato y su función.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['vía de las pentosas fosfato','NADPH','ribosa-5-fosfato','fase oxidativa']
},
{
  id:'U8-B-Q11', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Deficiencia de G6PD', sub:'Hemólisis inducida por oxidantes',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con deficiencia de glucosa-6-fosfato deshidrogenasa desarrolla hemólisis aguda pocos días después de iniciar tratamiento con primaquina.',
  enunciado:'¿Qué mecanismo bioquímico explica esta hemólisis inducida por el fármaco?',
  ops:[
    'La primaquina destruye directamente la membrana del eritrocito sin relación con el metabolismo celular',
    'Sin suficiente NADPH (por la deficiencia enzimática), el eritrocito no puede regenerar glutatión reducido para defenderse del estrés oxidativo inducido por la primaquina, sufriendo daño oxidativo de membrana y hemoglobina',
    'La primaquina aumenta la actividad de la glucosa-6-fosfato deshidrogenasa',
    'La deficiencia de G6PD no tiene ninguna relación con el estrés oxidativo'
  ],
  ok:1,
  clave:'Sin NADPH suficiente, el eritrocito no regenera glutatión reducido y no puede defenderse del estrés oxidativo del fármaco.',
  exp:'La glucosa-6-fosfato deshidrogenasa es la enzima limitante de la fase oxidativa de la vía de las pentosas fosfato, la que genera NADPH. El eritrocito depende casi exclusivamente de esta vía para su NADPH (al carecer de mitocondrias). Su deficiencia reduce la capacidad de regenerar glutatión reducido, el principal sistema antioxidante celular. Ante la exposición a fármacos oxidantes como la primaquina, el eritrocito no puede defenderse adecuadamente del estrés oxidativo inducido, sufriendo daño de membrana y de hemoglobina, y produciéndose hemólisis aguda.',
  no:{
    0:'El mecanismo no es una destrucción directa de la membrana por el fármaco; depende específicamente de la incapacidad metabólica del eritrocito deficiente en G6PD para defenderse del estrés oxidativo.',
    2:'La primaquina no aumenta la actividad de la G6PD; al contrario, genera un estrés oxidativo que un eritrocito con G6PD deficiente no puede neutralizar adecuadamente.',
    3:'Existe una relación directa y bien establecida entre la deficiencia de G6PD y la vulnerabilidad al estrés oxidativo, precisamente por el papel de esta enzima en la generación de NADPH.'
  },
  trampa:'Atribuir la hemólisis a un efecto tóxico directo del fármaco sobre la membrana, sin conectar el mecanismo con la incapacidad metabólica específica del eritrocito deficiente en G6PD.',
  obj:'Explicar el mecanismo de hemólisis inducida por oxidantes en la deficiencia de glucosa-6-fosfato deshidrogenasa.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['deficiencia de G6PD','hemólisis','primaquina','glutatión reducido']
},
{
  id:'U8-B-Q12', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Vía de las pentosas fosfato', sub:'Ribosa y síntesis de nucleótidos',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Una célula que se divide rápidamente (por ejemplo, una célula tumoral) necesita sintetizar grandes cantidades de ADN nuevo. ¿Qué producto de la vía de las pentosas fosfato es indispensable para esto?',
  ops:['NADH', 'Ribosa-5-fosfato', 'Lactato', 'Piruvato'],
  ok:1,
  clave:'La ribosa-5-fosfato, producto de la fase no oxidativa, es el azúcar necesario para sintetizar los nucleótidos del ADN nuevo.',
  exp:'La ribosa-5-fosfato, producida en la fase no oxidativa de la vía de las pentosas fosfato, es el azúcar de cinco carbonos necesario para sintetizar nucleótidos, y por tanto para fabricar ADN y ARN nuevos. Una célula que se divide rápidamente, como una célula tumoral, tiene una demanda elevada de síntesis de ácidos nucleicos, y por eso con frecuencia muestra actividad aumentada de esta vía para satisfacer esa necesidad de ribosa.',
  no:{
    0:'El NADH es un producto de la glucólisis y el ciclo de Krebs, orientado principalmente a la producción de ATP, no un producto de la vía de las pentosas fosfato.',
    2:'El lactato es un producto de la glucólisis anaeróbica, sin relación directa con la síntesis de nucleótidos.',
    3:'El piruvato es el producto final de la glucólisis, no un producto de la vía de las pentosas fosfato ni el precursor directo de los nucleótidos.'
  },
  trampa:'Confundir los productos de distintas vías metabólicas de la glucosa, sin identificar específicamente cuál aporta el azúcar necesario para la síntesis de nucleótidos.',
  obj:'Relacionar la necesidad de síntesis de ADN de una célula en división rápida con la producción de ribosa-5-fosfato.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['ribosa-5-fosfato','síntesis de nucleótidos','vía de las pentosas fosfato','división celular']
},
{
  id:'U8-B-Q13', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Beta-oxidación', sub:'Lanzadera de carnitina',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es necesaria la lanzadera de carnitina para que los ácidos grasos de cadena larga se degraden por beta-oxidación?',
  ops:[
    'Porque los ácidos grasos de cadena larga no pueden atravesar directamente la membrana mitocondrial interna, y necesitan unirse a la carnitina para cruzarla',
    'Porque la carnitina proporciona la energía necesaria para la beta-oxidación',
    'Porque la beta-oxidación ocurre en el citosol, no en la mitocondria',
    'La lanzadera de carnitina no tiene ninguna función real'
  ],
  ok:0,
  clave:'Los ácidos grasos de cadena larga necesitan unirse a la carnitina para cruzar la membrana mitocondrial interna hacia el sitio de la beta-oxidación.',
  exp:'La beta-oxidación ocurre dentro de la mitocondria, pero los ácidos grasos de cadena larga no pueden atravesar la membrana mitocondrial interna directamente. La carnitina palmitoiltransferasa I transfiere el grupo acilo graso a la carnitina, formando acilcarnitina, que sí puede cruzar hacia la matriz mitocondrial; una vez dentro, la carnitina palmitoiltransferasa II libera de nuevo al ácido graso para que comience la beta-oxidación. Sin esta lanzadera, los ácidos grasos de cadena larga no podrían acceder al sitio donde ocurre su degradación.',
  no:{
    1:'La carnitina no aporta energía directamente a la reacción; su función es de transporte, permitiendo que el ácido graso cruce la membrana mitocondrial interna.',
    2:'La beta-oxidación ocurre dentro de la MITOCONDRIA, no en el citosol; precisamente por eso se necesita un mecanismo de transporte para que el ácido graso llegue hasta ahí.',
    3:'La lanzadera de carnitina cumple una función de transporte esencial, sin la cual los ácidos grasos de cadena larga no podrían degradarse por beta-oxidación.'
  },
  trampa:'No reconocer la función específica de transporte de la carnitina, confundiéndola con una función energética o negando su relevancia.',
  obj:'Explicar la función de la lanzadera de carnitina en el transporte de ácidos grasos hacia la mitocondria.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['lanzadera de carnitina','beta-oxidación','carnitina palmitoiltransferasa','mitocondria']
},
{
  id:'U8-B-Q14', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Cuerpos cetónicos', sub:'Cruce de la barrera hematoencefálica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la ventaja crucial de los cuerpos cetónicos, a diferencia de los ácidos grasos libres, como combustible alternativo durante el ayuno prolongado?',
  ops:[
    'Los cuerpos cetónicos producen mucha menos energía que la glucosa',
    'Los cuerpos cetónicos pueden atravesar la barrera hematoencefálica, permitiendo que el cerebro los use como combustible alternativo cuando escasea la glucosa',
    'Los ácidos grasos libres cruzan la barrera hematoencefálica con más facilidad que los cuerpos cetónicos',
    'Los cuerpos cetónicos solo pueden ser usados por el hígado, nunca por otros tejidos'
  ],
  ok:1,
  clave:'Los cuerpos cetónicos, a diferencia de los ácidos grasos libres, sí pueden cruzar la barrera hematoencefálica y alimentar al cerebro.',
  exp:'A diferencia de los ácidos grasos libres, que no cruzan eficientemente la barrera hematoencefálica, los cuerpos cetónicos (acetoacetato y beta-hidroxibutirato) SÍ pueden atravesarla, así que el cerebro -que normalmente depende casi exclusivamente de glucosa- puede adaptarse a usarlos como combustible alternativo durante el ayuno prolongado. Esto reduce la demanda cerebral de glucosa y, con ella, la necesidad de degradar proteína muscular para la gluconeogénesis, una adaptación metabólica que ahorra masa muscular durante el ayuno prolongado.',
  no:{
    0:'Los cuerpos cetónicos sí aportan energía significativa; su ventaja no es la cantidad de energía, sino la capacidad de cruzar la barrera hematoencefálica.',
    2:'Es al revés: los cuerpos cetónicos cruzan la barrera hematoencefálica con más facilidad que los ácidos grasos libres, que prácticamente no la atraviesan.',
    3:'Los cuerpos cetónicos pueden ser usados por múltiples tejidos periféricos, incluido específicamente el cerebro, no solo por el hígado (que de hecho los produce pero no los usa como combustible propio en cantidad significativa).'
  },
  trampa:'No identificar la capacidad específica de cruzar la barrera hematoencefálica como la ventaja clave de los cuerpos cetónicos frente a los ácidos grasos libres.',
  obj:'Explicar por qué los cuerpos cetónicos, a diferencia de los ácidos grasos, pueden servir de combustible cerebral durante el ayuno.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['cuerpos cetónicos','barrera hematoencefálica','cetogénesis','ayuno prolongado']
},
{
  id:'U8-B-Q15', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Cuerpos cetónicos', sub:'Regulación por malonil-CoA',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se coordina la inhibición de la beta-oxidación (y por tanto de la cetogénesis) cuando la célula está sintetizando activamente ácidos grasos?',
  ops:[
    'El malonil-CoA, el primer intermediario de la síntesis de ácidos grasos, inhibe a la carnitina palmitoiltransferasa I (CPT-I), bloqueando la entrada de ácidos grasos a la mitocondria para su beta-oxidación',
    'No existe ningún mecanismo de coordinación entre síntesis y degradación de ácidos grasos',
    'La insulina inhibe directamente a la beta-oxidación sin ningún intermediario metabólico',
    'La síntesis y la degradación de ácidos grasos ocurren siempre simultáneamente sin ningún control'
  ],
  ok:0,
  clave:'El malonil-CoA, producto inicial de la síntesis de ácidos grasos, inhibe a la CPT-I, bloqueando la beta-oxidación mientras la síntesis está activa.',
  exp:'El malonil-CoA, el primer intermediario comprometido de la síntesis de ácidos grasos (producido por la acetil-CoA carboxilasa), inhibe a la carnitina palmitoiltransferasa I (CPT-I), la enzima que permite la entrada de ácidos grasos a la mitocondria para su beta-oxidación. Este mecanismo asegura que, mientras la célula está sintetizando activamente ácidos grasos (con malonil-CoA alto), la beta-oxidación (y por tanto la cetogénesis derivada de ella) esté simultáneamente inhibida, evitando un ciclo fútil de síntesis y degradación simultánea de grasa.',
  no:{
    1:'Sí existe un mecanismo de coordinación bien definido: el malonil-CoA como inhibidor cruzado entre ambas vías.',
    2:'La insulina actúa de forma indirecta, favoreciendo la producción de malonil-CoA (al activar la acetil-CoA carboxilasa), que es el que inhibe directamente a la CPT-I, no actuando ella misma de forma directa sobre la beta-oxidación.',
    3:'Precisamente el mecanismo del malonil-CoA existe para EVITAR que ambos procesos ocurran simultáneamente sin control, no para permitirlo.'
  },
  trampa:'No reconocer al malonil-CoA como el intermediario específico que conecta la regulación de la síntesis con la de la degradación de ácidos grasos.',
  obj:'Explicar el mecanismo de inhibición cruzada entre la síntesis y la degradación de ácidos grasos mediado por malonil-CoA.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['malonil-CoA','CPT-I','beta-oxidación','acetil-CoA carboxilasa']
},
{
  id:'U8-B-Q16', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Síntesis de colesterol', sub:'Mecanismo de las estatinas',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el mecanismo completo por el que las estatinas reducen el colesterol LDL circulante?',
  ops:[
    'Destruyen directamente las partículas de LDL en la sangre',
    'Inhiben la HMG-CoA reductasa, reduciendo la síntesis hepática de colesterol; el hígado compensa aumentando receptores de LDL en su superficie para captar más colesterol de la sangre, lo que reduce el LDL circulante',
    'Aumentan directamente la producción de HDL',
    'Bloquean la absorción intestinal de todas las grasas de la dieta'
  ],
  ok:1,
  clave:'Las estatinas inhiben la HMG-CoA reductasa; el hígado compensa con más receptores de LDL, captando más LDL circulante.',
  exp:'Las estatinas inhiben competitivamente a la HMG-CoA reductasa, el paso limitante de la síntesis de colesterol, reduciendo la producción endógena hepática de colesterol. Como consecuencia, el hígado aumenta la expresión de receptores de LDL en su superficie, para captar más colesterol de la sangre y compensar la menor síntesis interna -este aumento de captación es lo que reduce el colesterol LDL circulante, no una destrucción directa de las partículas de LDL en la sangre.',
  no:{
    0:'Las estatinas no actúan destruyendo directamente las partículas de LDL circulantes; su mecanismo es inhibir la síntesis hepática de colesterol.',
    2:'El mecanismo principal de las estatinas no es aumentar directamente la HDL; es reducir la síntesis de colesterol y, secundariamente, aumentar la captación hepática de LDL.',
    3:'Las estatinas no actúan sobre la absorción intestinal de grasas; su blanco es una enzima de la síntesis endógena de colesterol dentro de la célula hepática.'
  },
  trampa:'Simplificar el mecanismo de las estatinas a "bloquean la producción de colesterol" sin explicar el paso adicional -el aumento compensatorio de receptores de LDL- que es el que realmente reduce el LDL circulante.',
  obj:'Explicar el mecanismo completo por el que las estatinas reducen el colesterol LDL circulante.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['estatinas','HMG-CoA reductasa','receptores de LDL','síntesis de colesterol']
},
{
  id:'U8-B-Q17', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Síntesis de ácidos grasos', sub:'Acetil-CoA carboxilasa',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué reacción cataliza la acetil-CoA carboxilasa, el paso limitante de la síntesis de ácidos grasos?',
  ops:[
    'La conversión de ácidos grasos en acetil-CoA (beta-oxidación)',
    'La conversión de acetil-CoA en malonil-CoA',
    'La conversión de glucosa en piruvato',
    'La conversión de colesterol en ácidos biliares'
  ],
  ok:1,
  clave:'La acetil-CoA carboxilasa convierte acetil-CoA en malonil-CoA, el paso limitante de la síntesis de ácidos grasos.',
  exp:'La acetil-CoA carboxilasa cataliza la conversión de acetil-CoA a malonil-CoA, el paso limitante y regulador de la síntesis de ácidos grasos (lipogénesis). Esta enzima es activada por la insulina y la acumulación de citrato, e inhibida por el glucagón y por los propios ácidos grasos de cadena larga. El malonil-CoA generado no solo es el precursor de la síntesis de ácidos grasos, sino que también inhibe a la CPT-I, coordinando la represión simultánea de la beta-oxidación.',
  no:{
    0:'Esa es la reacción inversa, propia de la beta-oxidación (degradación de ácidos grasos), no de la síntesis catalizada por la acetil-CoA carboxilasa.',
    2:'Esa conversión corresponde a la piruvato deshidrogenasa (o a pasos de la glucólisis), no a la acetil-CoA carboxilasa.',
    3:'La conversión de colesterol en ácidos biliares es un proceso hepático distinto, sin relación con la acetil-CoA carboxilasa ni con la síntesis de ácidos grasos.'
  },
  trampa:'Confundir la reacción específica catalizada por la acetil-CoA carboxilasa con reacciones de otras vías metabólicas relacionadas con lípidos.',
  obj:'Identificar la reacción catalizada por la acetil-CoA carboxilasa en la síntesis de ácidos grasos.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['acetil-CoA carboxilasa','malonil-CoA','síntesis de ácidos grasos','lipogénesis']
},
{
  id:'U8-B-Q18', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Ciclo de la urea', sub:'Dos átomos de nitrógeno',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿De dónde provienen los dos átomos de nitrógeno que se incorporan a cada molécula de urea formada por el ciclo de la urea?',
  ops:[
    'Ambos provienen directamente del amoniaco libre',
    'Uno proviene del amoniaco (vía carbamoil fosfato) y el otro proviene del aspartato, un segundo punto de entrada de nitrógeno al ciclo',
    'Ambos provienen del aspartato',
    'Ninguno proviene de fuentes relacionadas con aminoácidos'
  ],
  ok:1,
  clave:'Un nitrógeno viene del amoniaco (vía carbamoil fosfato) y el otro del aspartato, dos puntos de entrada distintos.',
  exp:'El ciclo de la urea incorpora dos átomos de nitrógeno por cada molécula de urea formada: uno proveniente directamente del amoniaco (a través del carbamoil fosfato, el primer intermediario del ciclo), y otro proveniente del aspartato, que se incorpora en un paso posterior del ciclo como un segundo punto de entrada de nitrógeno. Esta doble entrada de nitrógeno es un aspecto frecuentemente subestimado del ciclo, que no es simplemente "procesar amoniaco directamente" en su totalidad.',
  no:{
    0:'No ambos provienen directamente del amoniaco libre; uno de los dos nitrógenos entra al ciclo a través del aspartato, un mecanismo distinto.',
    2:'No ambos provienen del aspartato; uno de los dos nitrógenos sí proviene directamente del amoniaco, vía el carbamoil fosfato.',
    3:'El aspartato es en sí mismo un aminoácido, así que uno de los dos nitrógenos sí proviene, indirectamente, de una fuente relacionada con aminoácidos.'
  },
  trampa:'Asumir que el ciclo de la urea procesa únicamente el amoniaco libre, sin reconocer al aspartato como una segunda vía de entrada de nitrógeno al ciclo.',
  obj:'Identificar las dos fuentes de nitrógeno que se incorporan a la urea durante el ciclo.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['ciclo de la urea','aspartato','carbamoil fosfato','nitrógeno']
},
{
  id:'U8-B-Q19', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Transaminación', sub:'Punto de convergencia del glutamato',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el glutamato se considera el "punto de convergencia" del metabolismo del nitrógeno de los aminoácidos?',
  ops:[
    'Porque la mayoría de las transaminaciones transfieren el grupo amino hacia el alfa-cetoglutarato, formando glutamato, que luego es desaminado para liberar amoniaco libre en un solo punto',
    'Porque el glutamato es el único aminoácido que existe en el cuerpo',
    'Porque el glutamato nunca participa en reacciones de transaminación',
    'Porque el glutamato se sintetiza exclusivamente en el ciclo de la urea'
  ],
  ok:0,
  clave:'La mayoría de las transaminaciones convergen en la formación de glutamato, que luego se desamina en un solo punto para liberar amoniaco.',
  exp:'La transaminación transfiere el grupo amino de la mayoría de los aminoácidos hacia el alfa-cetoglutarato, formando glutamato en el proceso. Este paso canaliza el nitrógeno de MUCHOS aminoácidos distintos hacia una sola molécula común (glutamato), que luego, mediante la desaminación oxidativa (catalizada por la glutamato deshidrogenasa), libera el amoniaco libre en un único punto de convergencia metabólica -en vez de que cada aminoácido liberara su nitrógeno por una vía independiente, todas convergen en el glutamato primero.',
  no:{
    1:'El glutamato es solo uno de los veinte aminoácidos proteinogénicos; su papel especial es el de convergencia metabólica del nitrógeno, no ser el único aminoácido existente.',
    2:'El glutamato participa activamente en reacciones de transaminación, tanto recibiendo el grupo amino de otros aminoácidos como, en la reacción inversa, donándolo.',
    3:'El glutamato se sintetiza principalmente por transaminación a partir de alfa-cetoglutarato, no exclusivamente dentro del ciclo de la urea, que es un proceso distinto y posterior.'
  },
  trampa:'No reconocer el papel específico del glutamato como punto de convergencia metabólica del nitrógeno de múltiples aminoácidos antes de su liberación como amoniaco.',
  obj:'Explicar por qué el glutamato funciona como punto de convergencia en el metabolismo del nitrógeno.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['transaminación','glutamato','alfa-cetoglutarato','desaminación oxidativa']
},
{
  id:'U8-B-Q20', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Ciclo de la urea', sub:'Deficiencia de ornitina transcarbamilasa',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un recién nacido presenta letargia progresiva, rechazo de la alimentación y convulsiones en los primeros días de vida, sin fiebre ni datos claros de infección. Los estudios muestran amoniaco sérico marcadamente elevado.',
  enunciado:'¿Qué tipo de defecto metabólico debe sospecharse con más fuerza ante este cuadro?',
  ops:[
    'Un defecto en alguna enzima del ciclo de la urea, como la deficiencia de ornitina transcarbamilasa, la más frecuente de este grupo',
    'Una deficiencia de vitamina C',
    'Un exceso de glucosa en sangre, sin relación con el metabolismo del nitrógeno',
    'Una infección viral típica, sin necesidad de medir amoniaco'
  ],
  ok:0,
  clave:'La hiperamonemia neonatal con letargia y convulsiones sugiere fuertemente un defecto del ciclo de la urea, siendo la deficiencia de OTC la más frecuente.',
  exp:'Un defecto genético en cualquiera de las enzimas del ciclo de la urea impide la conversión eficiente de amoniaco en urea, produciendo hiperamonemia con toxicidad principalmente neurológica: letargia, vómitos, rechazo de la alimentación y convulsiones en el recién nacido, sin fiebre ni datos claros de infección que expliquen el cuadro. La deficiencia de ornitina transcarbamilasa, con herencia ligada al X, es la más frecuente de este grupo de enfermedades. El hallazgo de amoniaco sérico marcadamente elevado, en este contexto clínico, es la clave diagnóstica.',
  no:{
    1:'La deficiencia de vitamina C no produce hiperamonemia ni el cuadro neurológico descrito; se asocia más bien a escorbuto, con manifestaciones muy distintas.',
    2:'El caso no describe un problema de glucosa, sino de amoniaco elevado, un marcador específico de un trastorno del metabolismo del nitrógeno, no de la glucemia.',
    3:'Precisamente la ausencia de fiebre y de datos claros de infección, junto con la hiperamonemia, es lo que debe alertar hacia un trastorno metabólico en vez de asumir automáticamente una causa infecciosa.'
  },
  trampa:'Atribuir un cuadro neurológico neonatal sin fiebre a una infección por defecto, sin considerar activamente un trastorno metabólico como la hiperamonemia por defecto del ciclo de la urea.',
  obj:'Reconocer el cuadro clínico sugestivo de un defecto del ciclo de la urea en el recién nacido.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['ciclo de la urea','ornitina transcarbamilasa','hiperamonemia neonatal','urgencia metabólica']
},
{
  id:'U8-B-Q21', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Transaminasas', sub:'Marcadores de daño hepático',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipo de reacción catalizan las enzimas ALT y AST, ampliamente usadas como marcadores de daño hepático?',
  ops:['Desaminación oxidativa', 'Transaminación', 'Descarboxilación', 'Hidroxilación'],
  ok:1,
  clave:'ALT y AST son transaminasas, que transfieren el grupo amino entre un aminoácido y un cetoácido.',
  exp:'ALT (alanina aminotransferasa) y AST (aspartato aminotransferasa) son transaminasas: catalizan la transferencia del grupo amino de un aminoácido a un cetoácido (típicamente alfa-cetoglutarato), sin liberar amoniaco libre directamente en ese paso. Se usan ampliamente como marcadores de daño hepatocelular porque son intracelulares en el hepatocito y se liberan a la sangre cuando la célula hepática se daña, elevando sus niveles séricos de forma proporcional (en general) al grado de daño celular.',
  no:{
    0:'La desaminación oxidativa es catalizada principalmente por la glutamato deshidrogenasa, una reacción distinta que sí libera amoniaco libre, no la reacción que catalizan ALT y AST.',
    2:'La descarboxilación es un tipo de reacción distinto, que elimina un grupo carboxilo, no relacionado con la función principal de ALT y AST.',
    3:'La hidroxilación no es la reacción característica de estas enzimas, que son específicamente transaminasas.'
  },
  trampa:'Confundir el tipo de reacción catalizada por ALT y AST con otras reacciones del metabolismo de aminoácidos, como la desaminación.',
  obj:'Identificar la transaminación como la reacción catalizada por ALT y AST.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['ALT','AST','transaminasas','daño hepático']
},
{
  id:'U8-B-Q22', programa:'unirm', cuatri:8,
  esp:'Bioquímica II', tema:'Metabolismo de nucleótidos', sub:'Vía de salvamento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ventaja metabólica tiene la vía de salvamento de nucleótidos frente a la vía de novo?',
  ops:[
    'La vía de salvamento es mucho más costosa en energía que la vía de novo',
    'La vía de salvamento reutiliza bases y nucleósidos libres ya existentes, siendo mucho más económica energéticamente que construir las bases desde cero (vía de novo)',
    'Ambas vías consumen exactamente la misma cantidad de energía',
    'La vía de salvamento no existe en el ser humano'
  ],
  ok:1,
  clave:'La vía de salvamento reutiliza bases ya existentes, siendo mucho más económica en energía que la síntesis de novo.',
  exp:'La vía de salvamento (o recuperación) reutiliza bases y nucleósidos libres ya existentes, provenientes del recambio normal de ácidos nucleicos celulares, un proceso mucho más económico energéticamente que la vía de novo, que construye las bases purínicas y pirimidínicas desde cero a partir de precursores simples (aminoácidos, CO2, derivados del folato), un proceso metabólicamente costoso. Cuando la vía de salvamento falla (como en la deficiencia completa de HGPRT del síndrome de Lesch-Nyhan), la célula se ve obligada a depender excesivamente de la vía de novo, mucho más costosa.',
  no:{
    0:'Es al revés: la vía de salvamento es mucho MENOS costosa energéticamente que la vía de novo, no más.',
    2:'Ambas vías tienen costos energéticos muy distintos; la de novo es considerablemente más costosa que la de salvamento.',
    3:'La vía de salvamento sí existe en el ser humano y es fisiológicamente muy relevante, con la HGPRT como su enzima clave para las purinas.'
  },
  trampa:'Invertir cuál de las dos vías (de novo o de salvamento) es más costosa energéticamente.',
  obj:'Explicar la ventaja energética de la vía de salvamento frente a la vía de novo en la síntesis de nucleótidos.',
  ref:'Harper, Bioquímica Ilustrada. Lehninger, Principios de Bioquímica.',
  tags:['vía de salvamento','vía de novo','HGPRT','síntesis de nucleótidos']
}

]);
