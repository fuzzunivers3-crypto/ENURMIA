/* ============================================================
   UNIRMIA — BANCO 6, CUATRIMESTRE 7 — FISIOLOGÍA I (ampliación)
   Segundo lote de 20 preguntas (U7-F-Q31 a Q50). Completa las 50
   de Fisiología I: sangre, sistema nervioso autónomo, introducción
   cardiovascular, potenciales postsinápticos, reflejos, unidad
   motora, dolor, temperatura y líquido cefalorraquídeo.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ---------- Sangre: elementos formes y hemostasia ---------- */
{
  id:'U7-F-Q31', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Sangre: elementos formes y hemostasia', sub:'Eritropoyetina',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un hombre de 58 años con enfermedad renal crónica avanzada tiene hemoglobina de 9 g/dL y hematocrito bajo. El volumen corpuscular medio es normal, la ferritina y la vitamina B12 son normales y no hay sangrado.',
  enunciado:'¿Cuál es la causa más probable de su anemia?',
  ops:['Un exceso de eritropoyetina que agota la médula ósea','Un déficit de vitamina K que altera la formación de glóbulos rojos','La destrucción de plaquetas por el bazo','Una producción insuficiente de eritropoyetina por el riñón dañado'],
  ok:3,
  clave:'El riñón produce eritropoyetina en respuesta a la hipoxia. Sin masa renal → anemia normocítica normocrómica.',
  exp:'Las células intersticiales peritubulares del riñón detectan la hipoxia y liberan eritropoyetina, que estimula en la médula ósea la producción de glóbulos rojos. En la enfermedad renal crónica avanzada, esa capacidad se pierde, la médula no recibe la señal y aparece una anemia normocítica y normocrómica, sin déficit de hierro ni de vitaminas. El tratamiento consiste en administrar eritropoyetina recombinante, además de vigilar el hierro.',
  no:{
    0:'Con el riñón enfermo falta eritropoyetina, no sobra. El exceso aparecería, por ejemplo, en la policitemia.',
    1:'La vitamina K interviene en la coagulación, no en la eritropoyesis.',
    2:'Las plaquetas no determinan la hemoglobina; su destrucción provoca sangrado, no anemia normocítica.'
  },
  trampa:'Buscar una causa nutricional (hierro, B12) sin fijarse en los datos que la descartan: ferritina y B12 normales y volumen corpuscular normal.',
  obj:'Relacionar la eritropoyetina, el riñón y la producción de eritrocitos.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 33.',
  tags:['eritrocito','hematocrito','eritropoyetina','hemoglobina','anemia']
},
{
  id:'U7-F-Q32', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Sangre: elementos formes y hemostasia', sub:'Curva de disociación de la hemoglobina',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Durante el ejercicio intenso, el músculo produce más CO₂, más iones hidrógeno y más calor. ¿Cómo afectan esos cambios a la curva de disociación de la oxihemoglobina?',
  ops:['La desplazan a la derecha, disminuyendo la afinidad y liberando más oxígeno a los tejidos','La desplazan a la izquierda, aumentando la afinidad de la hemoglobina por el oxígeno','No la modifican, porque la hemoglobina siempre se satura de la misma manera','La desplazan a la izquierda para que la hemoglobina retenga más oxígeno'],
  ok:0,
  clave:'Desplazamiento a la derecha (efecto Bohr): ↑ CO₂, ↑ H⁺, ↑ temperatura, ↑ 2,3-BPG → la Hb suelta más O₂.',
  exp:'Cuando el tejido está muy activo, produce CO₂, H⁺ y calor. Esos factores, junto con el 2,3-bisfosfoglicerato, disminuyen la afinidad de la hemoglobina por el oxígeno y desplazan la curva a la derecha, de manera que la sangre cede más oxígeno justo donde más se necesita. En los pulmones, con pH alto y CO₂ bajo, ocurre lo contrario y la hemoglobina se carga con facilidad.',
  no:{
    1:'Un desplazamiento a la izquierda aumentaría la afinidad y liberaría menos oxígeno, que es lo contrario de lo que necesita el músculo en ejercicio.',
    2:'La afinidad de la hemoglobina por el oxígeno sí cambia con el pH, la temperatura, el CO₂ y el 2,3-BPG.',
    3:'La izquierda implica más afinidad, y por eso retendría el oxígeno en lugar de entregarlo al tejido.'
  },
  trampa:'Confundir "derecha" con "más oxígeno unido". Derecha = menor afinidad = el oxígeno se libera más fácilmente.',
  obj:'Explicar el efecto Bohr y los factores que desplazan la curva de la hemoglobina.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 41.',
  tags:['hemoglobina','curva de disociación','efecto Bohr','oxígeno','eritrocito']
},
{
  id:'U7-F-Q33', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Sangre: elementos formes y hemostasia', sub:'Cascada de coagulación',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño de 5 años presenta una rodilla hinchada y dolorosa tras una caída leve. Tiene antecedentes de hematomas grandes con golpes mínimos y un tío materno con problemas parecidos. Los análisis muestran plaquetas normales, TP normal y TTPa prolongado.',
  enunciado:'¿Qué deficiencia explica el cuadro?',
  ops:['El factor VIII de la coagulación (vía intrínseca)','El factor VII de la coagulación (vía extrínseca)','El fibrinógeno','La cantidad de plaquetas'],
  ok:0,
  clave:'Hemofilia A: déficit de factor VIII, herencia ligada al X, TTPa prolongado con TP y plaquetas normales, sangrado en articulaciones.',
  exp:'Un TTPa prolongado con TP normal apunta a un defecto en la vía intrínseca (factores VIII, IX, XI, XII). El varón que sangra en las articulaciones tras un golpe leve, con un pariente materno afectado, orienta a herencia ligada al cromosoma X y a hemofilia A, es decir, déficit de factor VIII. En cambio, los defectos de plaquetas dan sangrado en piel y mucosas (petequias, epistaxis) y no hemartrosis.',
  no:{
    1:'Un déficit de factor VII alargaría el TP (vía extrínseca), y aquí el TP es normal.',
    2:'La falta de fibrinógeno prolongaría tanto el TP como el TTPa.',
    3:'Las plaquetas son normales, y su déficit provocaría sangrado mucocutáneo, no hemartrosis.'
  },
  trampa:'Asociar cualquier sangrado con las plaquetas. Sangrado profundo (articulaciones, músculo) apunta a factores de coagulación; sangrado superficial, a plaquetas.',
  obj:'Interpretar TP, TTPa y recuento plaquetario para ubicar el defecto de la coagulación.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 36.',
  tags:['coagulación','hemofilia','TTPa','plaqueta','hemostasia']
},

/* ---------- Fisiología del sistema nervioso autónomo ---------- */
{
  id:'U7-F-Q34', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Fisiología del sistema nervioso autónomo', sub:'Receptores muscarínicos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un adolescente llega a urgencias tras ingerir semillas de una planta silvestre. Presenta boca seca, pupilas muy dilatadas, piel enrojecida y seca, taquicardia y dificultad para orinar. Se sospecha intoxicación por atropina.',
  enunciado:'¿Qué receptores bloquea este tóxico para producir el cuadro?',
  ops:['Los receptores nicotínicos de los ganglios','Los receptores beta-1 del corazón','Los receptores alfa-1 de los vasos','Los receptores muscarínicos de los órganos que inerva el parasimpático'],
  ok:3,
  clave:'Atropina = antagonista muscarínico. Bloqueo parasimpático: boca seca, midriasis, taquicardia, piel seca, retención urinaria.',
  exp:'La acetilcolina liberada por las fibras posganglionares parasimpáticas actúa sobre receptores muscarínicos. Al bloquearlos con atropina se pierde el tono parasimpático: no hay secreción salival ni sudor (boca y piel secas), el iris se dilata por dominio del simpático, el corazón se acelera y la vejiga no se contrae con eficacia. La regla que resume el cuadro es "seco como un hueso, rojo como un tomate, ciego como un murciélago, loco como una cabra".',
  no:{
    0:'El bloqueo ganglionar afectaría tanto al simpático como al parasimpático; el cuadro sería distinto, sin el patrón anticolinérgico típico.',
    1:'El bloqueo de beta-1 enlentecería el corazón, no lo aceleraría.',
    2:'El bloqueo de alfa-1 produce vasodilatación e hipotensión, pero no la sequedad ni la midriasis.'
  },
  trampa:'Pensar que taquicardia significa exceso de simpático. En este caso es la ausencia del freno vagal lo que acelera el corazón.',
  obj:'Relacionar el bloqueo de receptores muscarínicos con sus manifestaciones clínicas.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 61.',
  tags:['parasimpático','receptor','colinérgico','atropina','muscarínico']
},
{
  id:'U7-F-Q35', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Fisiología del sistema nervioso autónomo', sub:'Organización anatómica',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el origen anatómico de las neuronas preganglionares del sistema parasimpático?',
  ops:['Los segmentos torácicos y lumbares altos de la médula (T1-L2)','Los núcleos de los pares craneales III, VII, IX y X y los segmentos sacros S2-S4','Únicamente los pares craneales III, VII y IX','Los segmentos cervicales de la médula espinal'],
  ok:1,
  clave:'Parasimpático = craneosacro. Simpático = toracolumbar. Ganglios: cortas posganglionares en el parasimpático, largas en el simpático.',
  exp:'Las neuronas preganglionares parasimpáticas nacen en el tronco encefálico, y salen con los pares craneales III (oculomotor), VII (facial), IX (glosofaríngeo) y X (vago), y en los segmentos sacros S2-S4 de la médula. El vago es el nervio más importante, porque lleva la mayor parte de la inervación parasimpática al tórax y al abdomen. El simpático, en cambio, sale de la médula toracolumbar (T1-L2).',
  no:{
    0:'Ese es el origen del sistema simpático (toracolumbar), no del parasimpático.',
    2:'Falta el X (vago) y el componente sacro, que inerva la vejiga, el recto y los genitales.',
    3:'La médula cervical no da origen a fibras autónomas preganglionares del parasimpático.'
  },
  trampa:'Olvidar el nervio vago al enumerar los pares craneales parasimpáticos, siendo el más importante de todos.',
  obj:'Ubicar el origen de las neuronas preganglionares simpáticas y parasimpáticas.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 60.',
  tags:['simpático','parasimpático','craneosacro','toracolumbar','nervio vago']
},

/* ---------- Introducción a la fisiología cardiovascular ---------- */
{
  id:'U7-F-Q36', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Introducción a la fisiología cardiovascular', sub:'Gasto cardíaco',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En reposo, un adulto tiene una frecuencia cardíaca de 80 latidos por minuto, un volumen telediastólico de 120 mL y un volumen telesistólico de 50 mL.',
  enunciado:'¿Cuál es su gasto cardíaco aproximado?',
  ops:['9,6 litros por minuto','5,6 litros por minuto','70 mililitros por minuto','3,2 litros por minuto'],
  ok:1,
  clave:'Volumen sistólico = VTD − VTS = 70 mL. Gasto cardíaco = FC × VS = 80 × 70 = 5.600 mL/min.',
  exp:'El volumen sistólico es la cantidad que se expulsa en cada latido, es decir, el volumen telediastólico menos el telesistólico: 120 − 50 = 70 mL. Multiplicado por la frecuencia cardíaca, da el gasto cardíaco: 70 × 80 = 5.600 mL/min, unos 5,6 L/min, un valor normal en reposo (4-8 L/min). La presión arterial media es el producto del gasto cardíaco por la resistencia periférica, por lo que este dato es la base para entender la hemodinámica.',
  no:{
    0:'9,6 L/min resulta de multiplicar 80 por 120, o sea, de usar el volumen telediastólico en lugar del sistólico.',
    2:'70 mL es el volumen sistólico, no el gasto por minuto; falta multiplicar por la frecuencia.',
    3:'3,2 L/min no corresponde a ninguna combinación correcta de estos datos.'
  },
  trampa:'Multiplicar la frecuencia por el volumen telediastólico. Lo que se expulsa es la diferencia entre telediastólico y telesistólico.',
  obj:'Calcular el volumen sistólico y el gasto cardíaco a partir de los volúmenes ventriculares.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 9 y 20.',
  tags:['gasto cardíaco','volumen sistólico','presión arterial','resistencia periférica']
},
{
  id:'U7-F-Q37', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Introducción a la fisiología cardiovascular', sub:'Precarga y ley de Frank-Starling',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué enuncia la ley de Frank-Starling del corazón?',
  ops:['Que la frecuencia cardíaca es independiente del volumen de llenado','Que, dentro de límites fisiológicos, cuanto más se llena el ventrículo en diástole, mayor es la fuerza de contracción y el volumen que expulsa','Que el corazón late más rápido cuanto mayor es la presión arterial','Que el volumen sistólico disminuye cuanto mayor es el retorno venoso'],
  ok:1,
  clave:'Más precarga (volumen telediastólico) → más estiramiento → más fuerza → más volumen sistólico.',
  exp:'El corazón se adapta a la cantidad de sangre que le llega: cuando el retorno venoso aumenta, las fibras se estiran más y, por la relación longitud-tensión del sarcómero, se contraen con más fuerza. De ese modo el ventrículo expulsa todo el volumen que recibe, equilibrando el gasto de ambos lados del corazón. La precarga es, en esencia, el grado de estiramiento de las fibras antes de contraerse, y se relaciona con el volumen telediastólico.',
  no:{
    0:'La frecuencia cardíaca depende sobre todo del sistema nervioso autónomo; la ley trata del volumen sistólico, no de la frecuencia.',
    2:'La ley no habla de la relación entre frecuencia y presión arterial; esa es la función del reflejo barorreceptor.',
    3:'Es lo contrario: a más retorno venoso, mayor precarga y mayor volumen sistólico, hasta un límite.'
  },
  trampa:'Pensar que un corazón más lleno siempre es un corazón más débil. En condiciones fisiológicas ocurre lo contrario; solo en la insuficiencia, cuando se sobrepasa el límite, la fuerza cae.',
  obj:'Definir precarga y explicar la ley de Frank-Starling.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 9.',
  tags:['precarga','Frank-Starling','volumen telediastólico','gasto cardíaco']
},
{
  id:'U7-F-Q38', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Introducción a la fisiología cardiovascular', sub:'Poscarga',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un hombre de 70 años con estenosis aórtica grave siente disnea y presenta mareos con el esfuerzo. El ventrículo izquierdo debe generar mucha más presión para abrir la válvula aórtica estrecha.',
  enunciado:'¿Qué parámetro hemodinámico se encuentra aumentado en este paciente?',
  ops:['La precarga, por el aumento del retorno venoso','La frecuencia cardíaca de reposo, por hiperactividad parasimpática','La poscarga, porque el ventrículo debe vencer una mayor resistencia para expulsar la sangre','El volumen sistólico, por mejor eyección'],
  ok:2,
  clave:'Poscarga = resistencia que debe vencer el ventrículo para eyectar. ↑ poscarga → ↓ volumen sistólico y ↑ trabajo cardíaco.',
  exp:'La poscarga es la carga contra la que se contrae el ventrículo tras el llenado; se relaciona con la presión aórtica y la resistencia periférica y, en la estenosis aórtica, con la obstrucción valvular. Con una poscarga elevada, el ventrículo consume más oxígeno y, a igual precarga, eyecta menos sangre. A largo plazo se hipertrofia (hipertrofia concéntrica), lo que explica la disnea, la angina y el síncope por esfuerzo.',
  no:{
    0:'La precarga no es el problema primario aquí; la obstrucción está a la salida del ventrículo, no en el llenado.',
    1:'La hiperactividad parasimpática enlentece el corazón; no es el mecanismo de este cuadro.',
    3:'El volumen sistólico tiende a disminuir, no a aumentar, cuando la poscarga es muy alta.'
  },
  trampa:'Confundir precarga (cuánto se llena) con poscarga (contra qué se vacía).',
  obj:'Definir poscarga y reconocer situaciones que la elevan.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 9 y 14.',
  tags:['poscarga','presión arterial','resistencia periférica','gasto cardíaco']
},

/* ---------- Potenciales postsinápticos excitatorios e inhibitorios ---------- */
{
  id:'U7-F-Q39', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Potenciales postsinápticos excitatorios e inhibitorios', sub:'PPSI',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el mecanismo iónico principal de un potencial postsináptico inhibitorio (PPSI)?',
  ops:['Apertura de canales de cloruro (o de potasio), que hiperpolariza la membrana y aleja el potencial del umbral','Apertura de canales de sodio, que despolariza la neurona','Apertura de canales de calcio, que activa la exocitosis','Cierre de canales de potasio, que acerca la membrana al umbral'],
  ok:0,
  clave:'PPSE = entrada de Na⁺ (despolariza). PPSI = entrada de Cl⁻ o salida de K⁺ (hiperpolariza). GABA y glicina.',
  exp:'En un PPSI, el neurotransmisor (GABA en el encéfalo, glicina en la médula) abre canales de cloruro, y la entrada de este anión, o la salida de potasio, hiperpolariza la membrana y aleja el potencial del umbral. Así, se necesita más estimulación excitatoria para disparar un potencial de acción. Las benzodiazepinas ejercen su efecto sedante al potenciar precisamente el receptor GABA-A.',
  no:{
    1:'La apertura de canales de sodio produce un PPSE, es decir, una despolarización que acerca al umbral.',
    2:'La entrada de calcio en el terminal desencadena la liberación del transmisor; no es el mecanismo del PPSI.',
    3:'Cerrar canales de potasio despolariza la membrana, y por eso produce excitación, no inhibición.'
  },
  trampa:'Creer que una sinapsis inhibitoria "no hace nada". Hace mucho: cambia el potencial de la membrana postsináptica en sentido contrario al umbral.',
  obj:'Comparar los mecanismos iónicos de un PPSE y de un PPSI.',
  ref:'Kandel, Principios de Neurociencia, cap. 12.',
  tags:['PPSE','PPSI','GABA','hiperpolarización','inhibición presináptica']
},
{
  id:'U7-F-Q40', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Potenciales postsinápticos excitatorios e inhibitorios', sub:'Sumación',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un experimento, una neurona recibe estímulos débiles y repetidos a través de una sola sinapsis excitatoria. Cada estímulo por separado no alcanza el umbral, pero cuando se aplican en rápida sucesión la neurona dispara un potencial de acción.',
  enunciado:'¿Qué fenómeno explica este hallazgo?',
  ops:['Sumación espacial de potenciales postsinápticos excitatorios','Inhibición presináptica','Sumación temporal de potenciales postsinápticos excitatorios','Facilitación por hiperpolarización'],
  ok:2,
  clave:'Temporal = una sola sinapsis, estímulos seguidos. Espacial = varias sinapsis a la vez. Se suman en el cono axónico.',
  exp:'Cada PPSE dura pocos milisegundos y se disipa. Si el siguiente llega antes de que el primero desaparezca, los efectos se acumulan, y el potencial sube hasta alcanzar el umbral: eso es la sumación temporal. Como todo ocurre por la misma sinapsis, no es sumación espacial, que exige varias sinapsis activas simultáneamente. La suma se decide en el cono axónico o segmento inicial, donde la densidad de canales de sodio es la mayor y el umbral es el más bajo.',
  no:{
    0:'La sumación espacial implicaría varias sinapsis distintas activadas al mismo tiempo, y aquí es una sola.',
    1:'La inhibición presináptica reduciría la liberación del transmisor y disminuiría la respuesta, no la aumentaría.',
    3:'La hiperpolarización aleja del umbral; nunca facilita el disparo.'
  },
  trampa:'Confundir temporal y espacial. Regla: temporal = mismo lugar, distinto momento; espacial = distinto lugar, mismo momento.',
  obj:'Distinguir sumación temporal y espacial y dónde se decide el disparo.',
  ref:'Kandel, Principios de Neurociencia, cap. 12.',
  tags:['PPSE','sumación temporal','sumación espacial','cono axónico','umbral']
},

/* ---------- Reflejos espinales ---------- */
{
  id:'U7-F-Q41', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Reflejos espinales', sub:'Reflejo miotático',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Durante la exploración, el médico golpea con el martillo el tendón rotuliano y la pierna se extiende de forma brusca.',
  enunciado:'¿Cuál es el receptor y la vía de este reflejo?',
  ops:['Huso muscular, fibra aferente Ia y una sinapsis directa con la motoneurona alfa del mismo músculo','Órgano tendinoso de Golgi y una vía polisináptica con inhibición del cuádriceps','Nociceptores de la piel y una vía con varias interneuronas','Corpúsculos de Pacini y una vía que llega a la corteza'],
  ok:0,
  clave:'Reflejo miotático: huso muscular → aferente Ia → sinapsis monosináptica → motoneurona alfa → contracción del mismo músculo (L2-L4).',
  exp:'El golpe estira brevemente el tendón y el cuádriceps, y con ello los husos musculares, que detectan la variación de longitud. Las fibras Ia hacen sinapsis directa con las motoneuronas alfa del propio músculo, que se contrae y extiende la rodilla. Es el único reflejo monosináptico, y por eso es tan rápido. La respuesta depende de los segmentos medulares L2-L4 y del nervio femoral, así que una respuesta anormal orienta hacia una lesión de esa vía.',
  no:{
    1:'El órgano tendinoso de Golgi detecta tensión, no longitud, y da un reflejo que inhibe al músculo.',
    2:'Los nociceptores forman parte del reflejo de retirada, que es polisináptico y de otro tipo.',
    3:'Los corpúsculos de Pacini detectan vibración y presión; la vía a la corteza no participa en este reflejo espinal.'
  },
  trampa:'Creer que el reflejo pasa por el cerebro. Es un arco medular; por eso se conserva incluso si el paciente está inconsciente.',
  obj:'Describir el arco del reflejo miotático y sus componentes.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 55.',
  tags:['reflejo miotático','arco reflejo','huso muscular','reflejo de estiramiento']
},
{
  id:'U7-F-Q42', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Reflejos espinales', sub:'Órgano tendinoso de Golgi',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué detecta el órgano tendinoso de Golgi y cuál es el efecto de su activación sobre el músculo?',
  ops:['Detecta la longitud del músculo y provoca su contracción refleja','Detecta el dolor y provoca la retirada de la extremidad','Detecta la velocidad del estiramiento y provoca la contracción del músculo antagonista','Detecta la tensión del tendón y provoca la relajación del músculo (inhibición autógena)'],
  ok:3,
  clave:'Huso = longitud (contrae). Golgi = tensión (relaja). El Golgi protege al músculo de una tensión excesiva.',
  exp:'El órgano tendinoso de Golgi está en serie con las fibras musculares, en la unión con el tendón, y responde a la tensión. Cuando esta es excesiva, la fibra Ib excita una interneurona inhibitoria que relaja el músculo y protege al tendón y al músculo de una lesión. Por eso se le llama también reflejo miotático inverso o inhibición autógena.',
  no:{
    0:'Detectar longitud y contraer es la función del huso muscular, no del Golgi.',
    1:'El dolor y la retirada corresponden al reflejo flexor, con nociceptores y vías propias.',
    2:'La velocidad del estiramiento es parte de la respuesta dinámica del huso, y no implica la contracción del antagonista.'
  },
  trampa:'Confundir ambos receptores. Se recuerda como par: el huso vigila cuánto se estira; el Golgi, cuánto tira.',
  obj:'Comparar la función del huso neuromuscular y del órgano tendinoso de Golgi.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 55.',
  tags:['órgano tendinoso de Golgi','reflejo miotático','arco reflejo','huso muscular']
},

/* ---------- Unidad motora y reclutamiento ---------- */
{
  id:'U7-F-Q43', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Unidad motora y reclutamiento', sub:'Principio del tamaño',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Al aumentar gradualmente la fuerza de una contracción, ¿en qué orden se reclutan las unidades motoras?',
  ops:['Primero las grandes, de fibras rápidas, y después las pequeñas','En orden aleatorio, según la fatiga acumulada','Todas a la vez, y luego se van desactivando','Primero las pequeñas, de fibras lentas y resistentes a la fatiga, y después las grandes, de fibras rápidas'],
  ok:3,
  clave:'Principio del tamaño (Henneman): las unidades motoras pequeñas (tipo I) se reclutan primero; las grandes (tipo II), solo con esfuerzos intensos.',
  exp:'Las motoneuronas pequeñas tienen un umbral más bajo y se activan primero: inervan pocas fibras de tipo I, lentas y muy resistentes a la fatiga, ideales para el esfuerzo sostenido y para el control fino. A medida que se necesita más fuerza, se suman motoneuronas cada vez mayores, con más fibras de tipo II, potentes pero de fatiga más rápida. Así el músculo gradúa la fuerza de forma suave.',
  no:{
    0:'Sería lo contrario del orden real; el cuerpo usaría primero sus unidades más fatigables, y perdería el control fino.',
    1:'El reclutamiento sigue un orden fijo y predecible, no aleatorio.',
    2:'Si se activaran todas a la vez, no habría gradación de la fuerza; el músculo solo podría contraerse al máximo.'
  },
  trampa:'Pensar que el cuerpo recluta primero lo más potente. Recluta primero lo más económico y resistente.',
  obj:'Explicar el reclutamiento ordenado de unidades motoras.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 6.',
  tags:['unidad motora','reclutamiento','fibra tipo I','fibra tipo II']
},
{
  id:'U7-F-Q44', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Unidad motora y reclutamiento', sub:'Tipos de fibra y fatiga',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Se toma una biopsia del cuádriceps de una maratonista de élite y de un velocista de 100 metros.',
  enunciado:'¿Qué perfil de fibras cabe esperar en cada uno?',
  ops:['Maratonista con predominio de fibras tipo II glucolíticas; velocista con predominio de tipo I','Maratonista con predominio de fibras tipo I, ricas en mitocondrias y resistentes a la fatiga; velocista con predominio de fibras tipo II, rápidas y glucolíticas','Ambos con predominio de fibras tipo I','Ambos con predominio de fibras tipo II'],
  ok:1,
  clave:'Tipo I: lentas, oxidativas, mioglobina, resisten la fatiga. Tipo IIx: rápidas, glucolíticas, potentes, se fatigan rápido.',
  exp:'Las fibras tipo I son rojas por su alto contenido de mioglobina y mitocondrias, obtienen la energía por vía oxidativa y resisten mucho la fatiga: son las del fondista. Las fibras tipo IIx generan fuerza rápida y potente, pero dependen de la glucólisis y se fatigan pronto, y son las que predominan en el velocista. Aunque el entrenamiento modifica su capacidad oxidativa, la proporción de tipos viene marcada en gran parte por la genética.',
  no:{
    0:'Está invertido: el fondista usa fibras oxidativas de tipo I y el velocista, fibras rápidas.',
    2:'Ambos no pueden tener el mismo perfil; el entrenamiento y la genética separan claramente a fondistas y velocistas.',
    3:'La resistencia de un maratonista se apoya en fibras oxidativas, no en glucolíticas.'
  },
  trampa:'Asociar "rápida" con "mejor". Cada tipo de fibra sirve a una tarea: potencia breve o resistencia larga.',
  obj:'Relacionar los tipos de fibra muscular con la fatiga y el rendimiento.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 6 y 84.',
  tags:['fibra tipo I','fibra tipo II','fatiga muscular','unidad motora']
},

/* ---------- Fisiología del dolor y nocicepción ---------- */
{
  id:'U7-F-Q45', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Fisiología del dolor y nocicepción', sub:'Dolor rápido y dolor lento',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una persona pisa un clavo. Al instante siente un dolor agudo y bien localizado en la planta del pie y, uno o dos segundos después, un dolor sordo, difuso y persistente.',
  enunciado:'¿Qué explica las dos fases del dolor?',
  ops:['Ambas dependen de las mismas fibras, y la segunda fase es solo el eco cortical de la primera','La primera fase la conducen las fibras A delta, mielinizadas y rápidas, y la segunda las fibras C, amielínicas y lentas','Las fibras C, mielinizadas, transmiten el dolor rápido, y las A delta, el lento','Las fibras A beta son responsables del dolor rápido y de la fase lenta'],
  ok:1,
  clave:'Aδ (mielinizadas, ≈10-30 m/s) = dolor rápido, agudo, localizado. C (amielínicas, ≈1 m/s) = dolor lento, sordo, difuso.',
  exp:'Los nociceptores se conectan con dos tipos de fibras. Las fibras A delta, finas y mielinizadas, conducen a unos 10-30 m/s y transmiten el dolor rápido, punzante y bien localizado. Las fibras C, amielínicas y más lentas (cerca de 1 m/s), transmiten el dolor lento, quemante y difuso. Por la diferencia de velocidad, ante una lesión se percibe primero el pinchazo y después la molestia sorda.',
  no:{
    0:'Son fibras distintas, con velocidades de conducción distintas; no se trata de un eco cortical.',
    2:'Está invertido: las C son amielínicas, y las A delta, mielinizadas.',
    3:'Las fibras A beta transmiten tacto y presión suave, no dolor.'
  },
  trampa:'Confundir velocidad y mielina. Más mielina = más rápida: A delta rápida, C lenta.',
  obj:'Distinguir el dolor rápido y el lento según las fibras que lo conducen.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 49.',
  tags:['nociceptor','fibra A delta','fibra C','vía del dolor']
},
{
  id:'U7-F-Q46', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Fisiología del dolor y nocicepción', sub:'Teoría de la compuerta',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Al golpearse un dedo, muchas personas se lo frotan y el dolor disminuye. Según la teoría de la compuerta, ¿por qué ocurre?',
  ops:['El frotamiento destruye los nociceptores de la zona','La activación de fibras táctiles gruesas A beta inhibe en la sustancia gelatinosa la transmisión de las señales nociceptivas','El frotamiento libera opioides que bloquean la fibra del dolor en el nervio periférico','El cerebro deja de recibir información porque la médula se satura'],
  ok:1,
  clave:'Compuerta de Melzack y Wall: A beta (tacto) activan interneuronas inhibitorias de la sustancia gelatinosa y cierran la puerta al dolor de C y A delta.',
  exp:'En el asta dorsal de la médula, la sustancia gelatinosa contiene interneuronas que modulan el paso de la información nociceptiva. Las fibras táctiles A beta, gruesas y rápidas, activan esas interneuronas inhibitorias y reducen la transmisión de las fibras A delta y C hacia la neurona de proyección. Es la base del alivio que da el frotamiento y de técnicas como la estimulación eléctrica transcutánea (TENS).',
  no:{
    0:'El frotamiento no destruye receptores; el efecto es de modulación, no de daño.',
    2:'La liberación de opioides endógenos existe en otros mecanismos de analgesia, pero no es la explicación de esta teoría.',
    3:'La médula no se "satura"; lo que ocurre es una inhibición activa en la sustancia gelatinosa.'
  },
  trampa:'Explicar la teoría como "distracción". El fenómeno es medular y anatómicamente específico.',
  obj:'Explicar la modulación medular del dolor según la teoría de la compuerta.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 49.',
  tags:['sustancia gelatinosa','fibra A delta','fibra C','vía del dolor','compuerta']
},

/* ---------- Regulación de la temperatura corporal ---------- */
{
  id:'U7-F-Q47', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Regulación de la temperatura corporal', sub:'Fiebre',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con una infección tiene 38,5 °C y sufre escalofríos intensos, con piel pálida y fría, justo cuando su temperatura está subiendo.',
  enunciado:'¿Por qué tiene escalofríos si ya está por encima de 37 °C?',
  ops:['Porque el centro termorregulador se ha dañado y ya no detecta la temperatura','Porque los pirógenos elevan el punto de ajuste hipotalámico y el cuerpo actúa para llegar a la nueva temperatura','Porque tiene una temperatura ambiental muy baja','Porque los escalofríos son el resultado de la sudoración excesiva'],
  ok:1,
  clave:'Pirógenos → IL-1, IL-6, TNF → PGE₂ → ↑ punto de ajuste. Escalofrío + vasoconstricción = subir hasta ese nuevo nivel.',
  exp:'Las citocinas liberadas en la infección (IL-1, IL-6, TNF) estimulan la síntesis de prostaglandina E2 en el hipotálamo y elevan el punto de ajuste. Como la temperatura real es más baja que el nuevo punto de ajuste, el cuerpo reacciona como si tuviera frío: vasoconstricción cutánea (piel pálida y fría) y escalofríos para producir calor, hasta llegar a la nueva temperatura. Los antipiréticos, como el paracetamol y los AINE, inhiben la síntesis de prostaglandinas y bajan el punto de ajuste.',
  no:{
    0:'El centro no está dañado; funciona bien, pero con un punto de ajuste más alto.',
    2:'No es un efecto ambiental, sino una respuesta central mediada por citocinas y prostaglandinas.',
    3:'El escalofrío no es consecuencia de la sudoración; la sudoración aparece cuando el punto de ajuste vuelve a bajar.'
  },
  trampa:'Creer que la fiebre es una falla de la termorregulación. El sistema funciona; lo que cambió es el punto de referencia.',
  obj:'Explicar la fiebre como una elevación del punto de ajuste hipotalámico.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 74.',
  tags:['punto de ajuste','escalofrío','vasoconstricción cutánea','centro termorregulador','termorregulación']
},
{
  id:'U7-F-Q48', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Regulación de la temperatura corporal', sub:'Mecanismos de pérdida de calor',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Si la temperatura ambiental supera a la corporal (por ejemplo, 40 °C con mucha luz solar), ¿cuál es el único mecanismo físico que permite todavía perder calor?',
  ops:['La radiación','La conducción','La convección','La evaporación del sudor'],
  ok:3,
  clave:'Radiación, conducción y convección requieren gradiente a favor. La evaporación es la única que funciona con ambiente más caliente que el cuerpo.',
  exp:'La radiación, la conducción y la convección dependen de que el ambiente esté más frío que el cuerpo: si el entorno es más caliente, el cuerpo gana calor por esas vías. La evaporación, en cambio, gasta el calor del propio cuerpo para transformar el sudor en vapor (unas 0,58 kcal por cada gramo evaporado) y puede seguir enfriándolo aun con ambiente caliente. Por eso el golpe de calor es tan peligroso en ambientes húmedos, donde el sudor no se evapora.',
  no:{
    0:'La radiación se invierte con ambiente más caliente: el cuerpo absorbe calor del entorno.',
    1:'La conducción también depende del gradiente y, con un ambiente más caliente, el calor entra en el cuerpo.',
    2:'La convección transfiere calor hacia el aire solo si este es más frío; si es más caliente, lo trae.'
  },
  trampa:'Suponer que el sudor enfría siempre. Enfría al evaporarse; si el ambiente está saturado de humedad, no lo hace.',
  obj:'Identificar los mecanismos de pérdida de calor y sus limitaciones.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 74.',
  tags:['termorregulación','evaporación','radiación','centro termorregulador']
},

/* ---------- Fisiología del líquido cefalorraquídeo ---------- */
{
  id:'U7-F-Q49', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Fisiología del líquido cefalorraquídeo', sub:'Producción y circulación',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Dónde se produce el líquido cefalorraquídeo y por dónde se reabsorbe?',
  ops:['Se produce en los plexos coroideos de los ventrículos y se reabsorbe en las vellosidades aracnoideas hacia los senos venosos','Se produce en las meninges y se reabsorbe en las venas yugulares directamente','Se produce en el parénquima cerebral y se reabsorbe en los plexos coroideos','Se produce en las vellosidades aracnoideas y se reabsorbe en los plexos coroideos'],
  ok:0,
  clave:'Plexos coroideos (≈500 mL/día; volumen total ≈150 mL) → ventrículos → espacio subaracnoideo → vellosidades aracnoideas → senos venosos.',
  exp:'El líquido cefalorraquídeo lo secretan los plexos coroideos de los ventrículos. Recorre los ventrículos laterales, el agujero de Monro, el tercer ventrículo, el acueducto de Silvio y el cuarto ventrículo, y sale por los orificios de Luschka y Magendie al espacio subaracnoideo. Allí baña el encéfalo y la médula, y se reabsorbe en las vellosidades aracnoideas hacia los senos venosos. Si la circulación se obstruye o la reabsorción falla, aumenta el volumen y con él la presión intracraneal.',
  no:{
    1:'Las meninges no son el sitio de producción, y la reabsorción se hace en las vellosidades aracnoideas, no directamente en las yugulares.',
    2:'El parénquima aporta parte del líquido intersticial, pero los plexos coroideos son el lugar de producción, no de reabsorción.',
    3:'Está invertido: los plexos producen y las vellosidades reabsorben.'
  },
  trampa:'Confundir el sentido: los plexos coroideos secretan; las vellosidades aracnoideas drenan.',
  obj:'Describir la producción, circulación y reabsorción del líquido cefalorraquídeo.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 62.',
  tags:['líquido cefalorraquídeo','plexo coroideo','presión intracraneal','vellosidades aracnoideas']
},
{
  id:'U7-F-Q50', programa:'unirm', cuatri:7,
  esp:'Fisiología I', tema:'Fisiología del líquido cefalorraquídeo', sub:'Barrera hematoencefálica',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la base estructural principal de la barrera hematoencefálica?',
  ops:['Una capa gruesa de mielina que rodea los capilares cerebrales','Los poros amplios de un endotelio fenestrado','Las uniones estrechas entre las células endoteliales de los capilares cerebrales, apoyadas por los pies astrocíticos','La duramadre, que separa la sangre del tejido nervioso'],
  ok:2,
  clave:'Endotelio con uniones estrechas + membrana basal + pies astrocíticos. Cruzan gases y sustancias liposolubles; la glucosa, por GLUT1.',
  exp:'Los capilares del cerebro tienen un endotelio continuo, unido por uniones estrechas, sin fenestraciones y con pocas vesículas de transporte, rodeado por membrana basal y por los pies de los astrocitos. Esta estructura impide el paso de la mayoría de las sustancias hidrosolubles, mientras que los gases y los compuestos liposolubles la atraviesan con facilidad, y la glucosa entra mediante el transportador GLUT1. Explica por qué muchos fármacos, como ciertos antibióticos, llegan mal al sistema nervioso central, y por qué la inflamación de las meninges la vuelve más permeable.',
  no:{
    0:'La mielina recubre axones, no capilares; no forma parte de la barrera.',
    1:'Un endotelio fenestrado es lo contrario: es muy permeable, y se encuentra en zonas como el riñón, no en el cerebro.',
    3:'La duramadre es una meninge que protege el encéfalo; no limita el paso de sustancias desde los capilares.'
  },
  trampa:'Atribuir la barrera a las meninges. Se ubica en el endotelio de los capilares.',
  obj:'Describir la estructura y la función de la barrera hematoencefálica.',
  ref:'Guyton y Hall, Tratado de Fisiología Médica, cap. 62.',
  tags:['barrera hematoencefálica','líquido cefalorraquídeo','astrocito','uniones estrechas']
}

]);
