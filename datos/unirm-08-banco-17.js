/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE ANATOMIA II (1/2)
   Amplia Anatomia II de 6 a 50 preguntas junto con banco-18.js.
   Esta parte cubre torax/mediastino, corazon, pulmones, grandes
   vasos toracicos, pared abdominal, tubo digestivo, higado/via
   biliar/pancreas/bazo, retroperitoneo y pelvis (temas 1-9).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== ANATOMIA II ===================== */
{
  id:'U8-A-Q07', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Mediastino', sub:'Compartimentos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En una tomografía de tórax se identifica una masa localizada en el mediastino anterior, entre el esternón y el pericardio.',
  enunciado:'¿Cuál de los siguientes diagnósticos debe considerarse PRIMERO según esta localización?',
  ops:['Tumor neurogénico', 'Timoma', 'Aneurisma de la aorta descendente', 'Divertículo esofágico'],
  ok:1,
  clave:'El mediastino anterior contiene al timo: una masa ahí sugiere primero timoma (u otras "T": teratoma, tiroides ectópica, terrible linfoma).',
  exp:'El mediastino anterior, entre el esternón y el pericardio, contiene principalmente al timo y tejido conectivo graso. Una masa localizada ahí sugiere primero un tumor tímico (timoma), aunque también deben considerarse teratoma, tiroides ectópica y linfoma (la mnemotecnia clásica de las "cuatro T"). Los tumores neurogénicos son característicos del mediastino posterior (donde está la cadena simpática), el esófago también se ubica en el mediastino posterior, y la aorta descendente atraviesa igualmente el mediastino posterior.',
  no:{
    0:'Los tumores neurogénicos se originan de la cadena simpática, ubicada en el mediastino POSTERIOR, no en el anterior.',
    2:'La aorta descendente y sus posibles aneurismas se localizan en el mediastino posterior, no en el anterior.',
    3:'El esófago, y por tanto sus divertículos, se ubica en el mediastino posterior, no en el anterior.'
  },
  trampa:'No usar la localización compartimental de la masa como primer criterio orientador del diagnóstico diferencial.',
  obj:'Relacionar la localización de una masa mediastínica con su diagnóstico diferencial más probable.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['mediastino anterior','timoma','compartimentos mediastínicos','masa mediastínica']
},
{
  id:'U8-A-Q08', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Pleura', sub:'Cavidad pleural',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es, en condiciones normales, la cavidad pleural?',
  ops:[
    'Un espacio real, lleno de aire',
    'Un espacio virtual, entre la pleura visceral y la parietal, con una fina película de líquido lubricante',
    'Una cavidad que contiene a los grandes vasos torácicos',
    'Una estructura exclusiva del pulmón izquierdo'
  ],
  ok:1,
  clave:'La cavidad pleural es un espacio virtual con una fina película de líquido, no un espacio real con contenido.',
  exp:'La cavidad pleural es el espacio entre la pleura visceral (adherida al pulmón) y la pleura parietal (adherida a la pared torácica, diafragma y mediastino). En condiciones normales es un espacio virtual, con solo una fina película de líquido que permite el deslizamiento entre ambas hojas durante la respiración. Cualquier acumulación de aire (neumotórax) o líquido (derrame pleural) en cantidad significativa es, por definición, un hallazgo anormal.',
  no:{
    0:'No es un espacio real lleno de aire en condiciones normales; la presencia de aire ahí (neumotórax) es patológica.',
    2:'Los grandes vasos torácicos están en el mediastino, no dentro de la cavidad pleural.',
    3:'Ambos pulmones tienen su propia cavidad pleural; no es una estructura exclusiva de un solo lado.'
  },
  trampa:'Pensar en la cavidad pleural como un espacio anatómico "real" con contenido normal, en vez de un espacio virtual.',
  obj:'Definir correctamente la cavidad pleural como espacio virtual en condiciones normales.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['cavidad pleural','pleura visceral','pleura parietal','neumotórax']
},
{
  id:'U8-A-Q09', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Pericardio', sub:'Taponamiento agudo vs. crónico',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con insuficiencia renal crónica desarrolla un derrame pericárdico de gran volumen, acumulado de forma lenta a lo largo de semanas, sin signos de taponamiento. Otro paciente sufre una herida cardíaca penetrante con sangrado hacia el pericardio y entra rápidamente en taponamiento con un volumen mucho menor.',
  enunciado:'¿Qué explica esta diferencia en la tolerancia al volumen de líquido pericárdico entre ambos casos?',
  ops:[
    'El paciente con insuficiencia renal tiene un pericardio más grueso y resistente',
    'La velocidad de acumulación importa más que el volumen total: una acumulación lenta permite que el pericardio fibroso se distienda gradualmente, mientras que una acumulación aguda no da tiempo a esa adaptación',
    'El taponamiento solo puede ocurrir por sangre, nunca por otros tipos de líquido',
    'No existe ninguna diferencia real entre ambos casos'
  ],
  ok:1,
  clave:'La velocidad de acumulación determina la tolerancia: lenta permite distensión gradual del pericardio fibroso; aguda no.',
  exp:'La capa fibrosa externa del pericardio es relativamente poco distensible. Cuando el líquido se acumula LENTAMENTE (como en la insuficiencia renal crónica), el pericardio tiene tiempo de distenderse gradualmente, tolerando volúmenes grandes sin comprimir al corazón. Cuando la acumulación es RÁPIDA (como en un sangrado agudo por herida penetrante), el pericardio no tiene tiempo de adaptarse, y volúmenes mucho menores ya elevan la presión intrapericárdica lo suficiente como para comprimir las cámaras cardíacas: el taponamiento cardíaco.',
  no:{
    0:'No es una diferencia de grosor del pericardio entre pacientes; es la velocidad de acumulación del líquido lo que determina la tolerancia.',
    2:'El taponamiento puede ocurrir por cualquier tipo de líquido (sangre, derrame seroso, pus) que se acumule con la velocidad y el volumen suficientes; no está limitado a la sangre.',
    3:'Sí existe una diferencia real y clínicamente crucial entre ambos casos, explicada precisamente por la velocidad de acumulación.'
  },
  trampa:'Atribuir la diferencia de tolerancia a características del paciente en vez de a la velocidad de acumulación del líquido, que es el factor determinante real.',
  obj:'Explicar por qué la velocidad de acumulación del líquido pericárdico determina el riesgo de taponamiento más que el volumen total.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['taponamiento cardíaco','pericardio fibroso','derrame pericárdico','velocidad de acumulación']
},
{
  id:'U8-A-Q10', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Válvulas cardíacas', sub:'AV vs. semilunares',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué válvula separa la aurícula izquierda del ventrículo izquierdo?',
  ops:['Válvula tricúspide', 'Válvula mitral', 'Válvula pulmonar', 'Válvula aórtica'],
  ok:1,
  clave:'La válvula mitral (bicúspide) separa la aurícula izquierda del ventrículo izquierdo.',
  exp:'La válvula mitral, también llamada bicúspide por tener dos valvas, es la válvula auriculoventricular izquierda: separa la aurícula izquierda del ventrículo izquierdo. La válvula tricúspide es su equivalente en el lado derecho (aurícula derecha-ventrículo derecho). Las válvulas pulmonar y aórtica son semilunares, situadas entre cada ventrículo y su arteria de salida (pulmonar y aorta respectivamente), no entre aurícula y ventrículo.',
  no:{
    0:'La tricúspide es la válvula auriculoventricular DERECHA, no la izquierda.',
    2:'La válvula pulmonar es semilunar, entre el ventrículo derecho y la arteria pulmonar, no entre aurícula y ventrículo izquierdos.',
    3:'La válvula aórtica es semilunar, entre el ventrículo izquierdo y la aorta, no entre la aurícula y el ventrículo izquierdos.'
  },
  trampa:'Confundir las válvulas auriculoventriculares (tricúspide, mitral) con las semilunares (pulmonar, aórtica), que cumplen funciones distintas en puntos distintos del corazón.',
  obj:'Identificar la válvula mitral como la válvula auriculoventricular izquierda.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['válvula mitral','válvula auriculoventricular','aurícula izquierda','ventrículo izquierdo']
},
{
  id:'U8-A-Q11', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Irrigación coronaria', sub:'Dominancia derecha',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta un infarto agudo de miocardio de la pared inferior, acompañado de bradicardia significativa y bloqueo auriculoventricular de segundo grado.',
  enunciado:'¿Qué arteria coronaria está más probablemente ocluida, considerando la dominancia coronaria más frecuente en la población?',
  ops:['Arteria descendente anterior', 'Arteria circunfleja', 'Arteria coronaria derecha', 'Arteria coronaria izquierda principal'],
  ok:2,
  clave:'En la dominancia derecha (la más frecuente), la coronaria derecha irriga la pared inferior y con frecuencia el sistema de conducción (nodo sinusal y AV).',
  exp:'En la mayoría de las personas (dominancia coronaria derecha, la más frecuente), la arteria coronaria derecha irriga la pared inferior del ventrículo izquierdo y, además, da origen a la arteria que irriga el nodo sinusal y el nodo auriculoventricular. Por eso, la oclusión de la coronaria derecha se asocia característicamente tanto a isquemia de la pared inferior como a bradiarritmias y bloqueos de conducción, precisamente el cuadro combinado descrito en el caso.',
  no:{
    0:'La descendente anterior irriga predominantemente la pared anterior y el tabique interventricular, no la pared inferior ni típicamente el sistema de conducción.',
    1:'La circunfleja irriga principalmente la pared lateral, sin la asociación característica con bradiarritmias que sí tiene la coronaria derecha en la dominancia derecha.',
    3:'La coronaria izquierda principal, antes de dividirse en descendente anterior y circunfleja, irrigaría un territorio mucho más extenso (anterior y lateral), no específicamente la pared inferior con el patrón de conducción descrito.'
  },
  trampa:'No conectar el hallazgo de bradiarritmia/bloqueo AV con la irrigación del sistema de conducción por la coronaria derecha en la dominancia derecha.',
  obj:'Relacionar el territorio de infarto y las arritmias asociadas con la arteria coronaria ocluida según la dominancia coronaria.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['coronaria derecha','dominancia derecha','infarto de pared inferior','bloqueo auriculoventricular']
},
{
  id:'U8-A-Q12', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Bronquio principal', sub:'Asimetría derecha-izquierda',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un cuerpo extraño aspirado tiene mayor probabilidad de alojarse en el pulmón derecho que en el izquierdo?',
  ops:[
    'Porque el pulmón derecho tiene menor capacidad',
    'Porque el bronquio principal derecho es más corto, más ancho y más vertical que el izquierdo',
    'Porque el pulmón izquierdo tiene un mecanismo de filtración adicional',
    'No existe ninguna diferencia real entre ambos bronquios principales'
  ],
  ok:1,
  clave:'El bronquio principal derecho, más corto, ancho y vertical, favorece que un cuerpo extraño caiga ahí preferentemente.',
  exp:'El bronquio principal derecho es más corto, más ancho y sigue un trayecto más vertical (más en línea con la tráquea) que el izquierdo, que es más largo, estrecho y horizontal. Esta disposición anatómica hace que un cuerpo extraño aspirado, siguiendo el trayecto de menor resistencia, tenga mayor probabilidad de descender hacia el bronquio derecho. La misma razón explica por qué un tubo endotraqueal insertado demasiado profundamente tiende a entrar selectivamente al bronquio derecho.',
  no:{
    0:'El pulmón derecho tiene, de hecho, mayor volumen (tres lóbulos frente a dos), no menor capacidad; y esa no es la razón anatómica del fenómeno descrito.',
    2:'No existe tal mecanismo de filtración adicional en el pulmón izquierdo; la diferencia es puramente de disposición anatómica del bronquio principal.',
    3:'Sí existe una diferencia anatómica real y bien documentada entre ambos bronquios principales, con consecuencias clínicas directas.'
  },
  trampa:'Buscar explicaciones fisiológicas complejas cuando la razón es puramente estructural: el trayecto y calibre del bronquio principal derecho.',
  obj:'Explicar la base anatómica de por qué la broncoaspiración favorece al pulmón derecho.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['bronquio principal derecho','broncoaspiración','intubación selectiva','asimetría bronquial']
},
{
  id:'U8-A-Q13', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Lóbulos pulmonares', sub:'Diferencias derecha-izquierda',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el pulmón izquierdo tiene solo dos lóbulos, mientras que el derecho tiene tres?',
  ops:[
    'Porque el pulmón izquierdo es más pequeño en todos los aspectos por razones evolutivas sin relación con estructuras vecinas',
    'Porque el corazón ocupa espacio predominantemente en el lado izquierdo del tórax, dejando menos espacio disponible para tejido pulmonar de ese lado',
    'Porque el pulmón izquierdo tiene una función distinta al derecho',
    'Porque el hígado ocupa espacio en el lado izquierdo del tórax'
  ],
  ok:1,
  clave:'El corazón, predominantemente izquierdo, deja menos espacio disponible para el pulmón de ese lado, que por eso tiene un lóbulo menos.',
  exp:'El corazón se sitúa predominantemente hacia el lado izquierdo del tórax (aunque ocupa espacio en ambos lados del mediastino, su masa se proyecta más hacia la izquierda), lo que deja menos espacio torácico disponible para tejido pulmonar en ese lado. Por eso el pulmón izquierdo tiene solo dos lóbulos (superior e inferior, separados por una única fisura oblicua), mientras que el derecho, con más espacio disponible, tiene tres (superior, medio e inferior, separados por dos fisuras).',
  no:{
    0:'La diferencia no es una cuestión evolutiva abstracta ni afecta "todos los aspectos" del pulmón izquierdo; tiene una causa anatómica concreta y específica: el espacio ocupado por el corazón.',
    2:'Ambos pulmones cumplen la misma función respiratoria básica; la diferencia de número de lóbulos no refleja una diferencia funcional.',
    3:'El hígado se sitúa predominantemente en el cuadrante superior derecho del abdomen, debajo del diafragma derecho, no ocupando espacio torácico izquierdo.'
  },
  trampa:'Atribuir la asimetría de lóbulos a una diferencia funcional o evolutiva en vez de a la causa anatómica concreta: el espacio ocupado por el corazón.',
  obj:'Explicar la razón anatómica de la asimetría en el número de lóbulos entre ambos pulmones.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['lóbulos pulmonares','língula','asimetría pulmonar','corazón']
},
{
  id:'U8-A-Q14', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Vía aérea', sub:'Bronquios vs. bronquiolos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica estructural distingue a los bronquios de los bronquiolos?',
  ops:[
    'Los bronquios no tienen cartílago en su pared; los bronquiolos sí',
    'Los bronquios tienen cartílago en su pared; los bronquiolos carecen de él',
    'No existe ninguna diferencia estructural entre ambos',
    'Los bronquiolos son de mayor calibre que los bronquios'
  ],
  ok:1,
  clave:'Los bronquios tienen cartílago en la pared, que les da rigidez estructural; los bronquiolos ya no lo tienen.',
  exp:'A medida que la vía aérea se ramifica progresivamente desde la tráquea, los bronquios (principales, lobares, segmentarios y subsegmentarios) conservan cartílago en su pared, lo que les da rigidez estructural y evita su colapso. Los bronquiolos, ramas más pequeñas y distales, ya carecen de cartílago, y su calibre se regula principalmente por el tono de músculo liso en su pared. Esta diferencia estructural es, en parte, la que define convencionalmente dónde termina la categoría "bronquio" y empieza la de "bronquiolo".',
  no:{
    0:'Es al revés: los bronquios SÍ tienen cartílago, y son los bronquiolos los que carecen de él.',
    2:'Sí existe una diferencia estructural real y relevante entre ambos, precisamente la presencia o ausencia de cartílago en la pared.',
    3:'Los bronquiolos son de MENOR calibre que los bronquios, al ser ramas más distales y pequeñas de la vía aérea de conducción.'
  },
  trampa:'Invertir cuál de las dos estructuras (bronquio o bronquiolo) conserva cartílago en su pared.',
  obj:'Distinguir bronquios de bronquiolos por la presencia o ausencia de cartílago.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['bronquios','bronquiolos','cartílago','vía aérea de conducción']
},
{
  id:'U8-A-Q15', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Nervio laríngeo recurrente', sub:'Trayecto alrededor del cayado aórtico',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta ronquera (disfonía) progresiva de varios meses de evolución, sin síntomas laríngeos evidentes, y en la tomografía de tórax se identifica un aneurisma del cayado aórtico.',
  enunciado:'¿Qué explicación anatómica conecta el aneurisma aórtico con la disfonía del paciente?',
  ops:[
    'El aneurisma comprime directamente las cuerdas vocales',
    'El nervio laríngeo recurrente izquierdo rodea el cayado aórtico por debajo del ligamento arterioso en su trayecto hacia la laringe, y puede ser comprimido por un aneurisma de esa región',
    'El aneurisma aórtico siempre afecta primero a la tráquea, causando disfonía secundaria',
    'No existe ninguna relación anatómica entre el cayado aórtico y la disfonía'
  ],
  ok:1,
  clave:'El nervio laríngeo recurrente izquierdo rodea el cayado aórtico; un aneurisma ahí puede comprimirlo y causar disfonía.',
  exp:'El nervio laríngeo recurrente izquierdo desciende desde el nervio vago, rodea el cayado aórtico por debajo (a nivel del ligamento arterioso) y vuelve a ascender hasta la laringe. Este trayecto tan largo alrededor de una estructura vascular lo hace vulnerable a compresión por un aneurisma del cayado aórtico, produciendo parálisis de la cuerda vocal correspondiente y, por tanto, disfonía. Es un ejemplo clásico de cómo la anatomía explica un hallazgo clínico aparentemente distante de su causa real.',
  no:{
    0:'Las cuerdas vocales están en la laringe, muy alejadas anatómicamente del cayado aórtico; no hay compresión directa de las cuerdas por el aneurisma.',
    2:'No es la tráquea la estructura relevante en esta relación; es específicamente el trayecto del nervio laríngeo recurrente izquierdo alrededor del cayado aórtico.',
    3:'Sí existe una relación anatómica bien establecida y clínicamente relevante entre el cayado aórtico y la disfonía, mediada por el nervio laríngeo recurrente.'
  },
  trampa:'No conocer el trayecto específico del nervio laríngeo recurrente izquierdo alrededor del cayado aórtico, que es la clave para explicar este hallazgo clínico aparentemente desconectado.',
  obj:'Explicar la relación anatómica entre un aneurisma del cayado aórtico y la disfonía por compresión del nervio laríngeo recurrente.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['nervio laríngeo recurrente','cayado aórtico','disfonía','ligamento arterioso']
},
{
  id:'U8-A-Q16', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Vena cava superior', sub:'Síndrome de obstrucción',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con un tumor mediastínico desarrolla edema y congestión venosa progresiva en cara, cuello y ambos miembros superiores, con dilatación de venas superficiales visibles en esa región, sin edema en los miembros inferiores.',
  enunciado:'¿Qué estructura vascular está siendo comprimida u obstruida por el tumor?',
  ops:['La vena cava inferior', 'La vena cava superior', 'La aorta torácica descendente', 'El conducto torácico'],
  ok:1,
  clave:'La obstrucción de la vena cava superior produce edema y congestión de cara, cuello y miembros superiores, respetando los inferiores.',
  exp:'La vena cava superior drena la sangre venosa de la cabeza, el cuello, los miembros superiores y la parte superior del tórax hacia la aurícula derecha. Su obstrucción (por ejemplo, por compresión de un tumor mediastínico) produce el síndrome de vena cava superior: edema y congestión venosa característicos de cara, cuello y miembros superiores, con dilatación de venas superficiales visibles, sin afectar a los miembros inferiores, porque ese territorio drena por la vena cava inferior, independiente de la superior.',
  no:{
    0:'La obstrucción de la vena cava inferior afectaría el territorio del abdomen y los miembros inferiores, no la cara, el cuello y los miembros superiores.',
    2:'La aorta torácica descendente es una arteria, no una vena; su obstrucción no produciría este cuadro de congestión venosa.',
    3:'La obstrucción del conducto torácico produciría acumulación de linfa (quilotórax), no el patrón de edema venoso descrito en el caso.'
  },
  trampa:'Confundir el territorio de drenaje de la vena cava superior con el de la inferior, o con otras estructuras vasculares del mediastino.',
  obj:'Reconocer el síndrome de vena cava superior por su patrón clínico característico.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['vena cava superior','síndrome de vena cava superior','tumor mediastínico','edema']
},
{
  id:'U8-A-Q17', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Conducto torácico', sub:'Territorio de drenaje',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué región del cuerpo NO drena a través del conducto torácico, sino por el conducto linfático derecho?',
  ops:[
    'El miembro inferior izquierdo',
    'El abdomen',
    'El cuadrante superior derecho del cuerpo (cabeza, cuello, miembro superior y tórax del lado derecho)',
    'El miembro inferior derecho'
  ],
  ok:2,
  clave:'El cuadrante superior derecho drena por el conducto linfático derecho, mucho más pequeño que el conducto torácico.',
  exp:'El conducto torácico recoge la linfa de todo el organismo EXCEPTO del cuadrante superior derecho (cabeza, cuello, miembro superior y tórax del lado derecho), que drena a través del conducto linfático derecho, mucho más pequeño. El conducto torácico desemboca en la unión de la vena subclavia izquierda con la vena yugular interna izquierda, mientras que el conducto linfático derecho desemboca en la unión venosa equivalente del lado derecho.',
  no:{
    0:'El miembro inferior izquierdo sí drena a través del conducto torácico, como la mayor parte del cuerpo.',
    1:'El abdomen sí drena a través del conducto torácico (vía la cisterna del quilo), como la mayoría del organismo.',
    3:'El miembro inferior derecho también drena a través del conducto torácico; la excepción se limita al cuadrante SUPERIOR derecho, no a todo el lado derecho del cuerpo.'
  },
  trampa:'Extender la excepción del conducto linfático derecho a todo el lado derecho del cuerpo, cuando en realidad se limita específicamente al cuadrante SUPERIOR derecho.',
  obj:'Identificar la única región del cuerpo que no drena por el conducto torácico.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['conducto torácico','conducto linfático derecho','drenaje linfático','cuadrante superior derecho']
},
{
  id:'U8-A-Q18', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Conducto inguinal', sub:'Contenido según sexo',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué estructura contiene el conducto inguinal en la mujer, a diferencia del cordón espermático en el hombre?',
  ops:['El conducto deferente', 'El ligamento redondo del útero', 'La trompa uterina', 'El ovario'],
  ok:1,
  clave:'En la mujer, el conducto inguinal contiene al ligamento redondo del útero.',
  exp:'El conducto inguinal existe en ambos sexos, como consecuencia del desarrollo embrionario compartido, pero su contenido difiere: en el hombre contiene al cordón espermático (con el conducto deferente, vasos testiculares y nervios), y en la mujer contiene al ligamento redondo del útero, que se dirige desde el útero hacia los labios mayores. Ni la trompa uterina ni el ovario atraviesan el conducto inguinal en condiciones normales.',
  no:{
    0:'El conducto deferente es un contenido del cordón espermático en el HOMBRE, no una estructura presente en el conducto inguinal femenino.',
    2:'La trompa uterina permanece dentro de la cavidad pélvica, sin atravesar el conducto inguinal.',
    3:'El ovario también permanece dentro de la cavidad pélvica; no desciende a través del conducto inguinal como sí lo hace el testículo en el hombre.'
  },
  trampa:'Asumir que el conducto inguinal solo existe o solo tiene relevancia anatómica en el hombre.',
  obj:'Identificar el contenido del conducto inguinal en la mujer.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['conducto inguinal','ligamento redondo del útero','cordón espermático','anatomía femenina']
},
{
  id:'U8-A-Q19', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Hernia inguinal', sub:'Directa vs. indirecta',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Durante una cirugía de reparación de hernia inguinal, el cirujano identifica que el saco herniario protruye MEDIAL a los vasos epigástricos inferiores, a través del triángulo de Hesselbach.',
  enunciado:'¿Qué tipo de hernia inguinal es esta, según el hallazgo intraoperatorio descrito?',
  ops:['Hernia inguinal indirecta', 'Hernia inguinal directa', 'Hernia femoral', 'Hernia umbilical'],
  ok:1,
  clave:'Medial a los vasos epigástricos inferiores, a través del triángulo de Hesselbach: hernia inguinal directa.',
  exp:'La hernia inguinal directa protruye a través del triángulo de Hesselbach, una zona de debilidad de la pared posterior del conducto inguinal, MEDIAL a los vasos epigástricos inferiores, sin seguir el trayecto completo del conducto inguinal ni pasar por el anillo inguinal profundo. Esto contrasta con la hernia indirecta, que protruye LATERAL a esos mismos vasos, a través del anillo inguinal profundo, siguiendo el trayecto completo del conducto (el mismo camino que siguió el testículo durante el desarrollo).',
  no:{
    0:'La hernia indirecta protruye LATERAL a los vasos epigástricos inferiores, no medial como se describe en este caso.',
    2:'La hernia femoral protruye por debajo del ligamento inguinal, a través del anillo femoral, una localización anatómica distinta a la descrita en el caso.',
    3:'La hernia umbilical protruye a través del ombligo, sin relación con el triángulo de Hesselbach ni con los vasos epigástricos inferiores.'
  },
  trampa:'Invertir la posición (medial/lateral) respecto a los vasos epigástricos inferiores que distingue a la hernia directa de la indirecta.',
  obj:'Clasificar una hernia inguinal como directa según su posición respecto a los vasos epigástricos inferiores.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['hernia inguinal directa','triángulo de Hesselbach','vasos epigástricos inferiores','hernia indirecta']
},
{
  id:'U8-A-Q20', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Esófago', sub:'Constricciones anatómicas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son los tres sitios de estrechamiento anatómico normal del esófago, clínicamente relevantes por ser los sitios típicos de impactación de un cuerpo extraño?',
  ops:[
    'El inicio (cricofaríngeo), donde lo cruzan el cayado aórtico y el bronquio izquierdo, y donde atraviesa el diafragma',
    'Solo existe un punto de estrechamiento, al inicio del esófago',
    'El esófago no tiene ningún estrechamiento anatómico normal',
    'Los tres estrechamientos están todos en el tercio distal del esófago'
  ],
  ok:0,
  clave:'Las tres constricciones esofágicas son: cricofaríngea, por el cruce del cayado aórtico/bronquio izquierdo, y diafragmática.',
  exp:'El esófago tiene tres sitios de estrechamiento anatómico normal: la constricción cricofaríngea (al inicio, por el músculo cricofaríngeo), la constricción a nivel del cayado aórtico y el bronquio principal izquierdo que lo cruzan (en el tercio medio), y la constricción diafragmática (donde atraviesa el hiato esofágico del diafragma). Estos tres puntos son los sitios donde con más frecuencia se impacta un cuerpo extraño deglutido, y donde una estenosis tiende a manifestarse primero con disfagia.',
  no:{
    1:'Existen tres puntos de estrechamiento anatómico normal, no solo uno.',
    2:'El esófago sí tiene tres sitios de estrechamiento anatómico normal, bien caracterizados y clínicamente relevantes.',
    3:'Los tres estrechamientos están distribuidos a lo largo del esófago (inicio, tercio medio y porción distal/diafragmática), no todos concentrados en el tercio distal.'
  },
  trampa:'No ubicar correctamente los tres sitios de estrechamiento a lo largo del trayecto completo del esófago, en vez de concentrarlos erróneamente en un solo punto o región.',
  obj:'Identificar los tres sitios de constricción anatómica normal del esófago.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['esófago','constricciones esofágicas','cuerpo extraño','disfagia']
},
{
  id:'U8-A-Q21', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Intestino delgado', sub:'Duodeno retroperitoneal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'A diferencia del yeyuno y el íleon, ¿cuál es la relación peritoneal característica del duodeno (en su mayor parte)?',
  ops:[
    'Es completamente intraperitoneal, suspendido por un mesenterio largo',
    'Es mayormente retroperitoneal, fijo a la pared posterior del abdomen',
    'No tiene ninguna relación con el peritoneo',
    'Está suspendido por el mismo mesenterio que el yeyuno'
  ],
  ok:1,
  clave:'El duodeno es mayormente retroperitoneal y fijo, a diferencia del yeyuno e íleon, que son intraperitoneales y móviles.',
  exp:'El duodeno es, en su mayor parte, retroperitoneal: está fijo a la pared posterior del abdomen, salvo su primera porción, que conserva cierta movilidad. Esto contrasta con el yeyuno y el íleon, que son intraperitoneales, suspendidos por el mesenterio, lo que les da movilidad dentro de la cavidad abdominal. Esta diferencia de fijación tiene relevancia quirúrgica: el duodeno retroperitoneal requiere maniobras específicas de movilización (como la maniobra de Kocher) para poder exponerlo quirúrgicamente, a diferencia del yeyuno e íleon, ya móviles por sí mismos.',
  no:{
    0:'Es al revés: el yeyuno y el íleon son los que son intraperitoneales y móviles, no el duodeno.',
    2:'El duodeno sí tiene una relación definida con el peritoneo (retroperitoneal en su mayor parte), no una ausencia de relación.',
    3:'El duodeno no comparte el mismo mesenterio que el yeyuno; de hecho, carece de mesenterio propio en la mayor parte de su trayecto, precisamente por ser retroperitoneal.'
  },
  trampa:'Asumir que todo el intestino delgado (duodeno, yeyuno, íleon) comparte la misma relación peritoneal, sin distinguir al duodeno como excepción retroperitoneal.',
  obj:'Explicar la relación peritoneal característica del duodeno frente al yeyuno y el íleon.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['duodeno','retroperitoneo','yeyuno','íleon']
},
{
  id:'U8-A-Q22', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Colon sigmoide', sub:'Vólvulo',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente adulto mayor presenta distensión abdominal progresiva y dolor cólico. Las imágenes sugieren obstrucción por torsión de un segmento del colon sobre el eje de su propio mesenterio.',
  enunciado:'¿Qué segmento del colon es el sitio más frecuente de este tipo de obstrucción (vólvulo) en el adulto, y por qué?',
  ops:[
    'El colon ascendente, por ser el más fijo',
    'El colon sigmoide, por ser intraperitoneal y tener un mesenterio relativamente largo y móvil',
    'El colon descendente, por su relación con el bazo',
    'El recto, por su fijación pélvica'
  ],
  ok:1,
  clave:'El colon sigmoide, intraperitoneal y con mesenterio largo y móvil, es el sitio más frecuente de vólvulo en el adulto.',
  exp:'El colon sigmoide es intraperitoneal, suspendido por su propio mesenterio (mesocolon sigmoide), lo que le da una movilidad considerable dentro de la cavidad abdominal. Esa misma movilidad es precisamente lo que permite que este segmento gire sobre el eje de su propio mesenterio, obstruyéndose: el vólvulo. El colon ascendente y descendente, al ser generalmente retroperitoneales y fijos, no tienen la movilidad necesaria para volvularse con la misma frecuencia, y el recto está fijado firmemente en la pelvis.',
  no:{
    0:'El colon ascendente es generalmente retroperitoneal y fijo, justamente lo contrario de lo que favorece un vólvulo.',
    2:'El colon descendente también es generalmente retroperitoneal y fijo; su relación con el bazo (ángulo esplénico) no lo predispone particularmente a vólvulo.',
    3:'El recto está firmemente fijado en la pelvis por sus relaciones anatómicas, sin la movilidad necesaria para volvularse.'
  },
  trampa:'No conectar la movilidad de un segmento intestinal (dependiente de ser intraperitoneal, con mesenterio propio) con su susceptibilidad específica al vólvulo.',
  obj:'Explicar por qué el colon sigmoide es el sitio más frecuente de vólvulo intestinal en el adulto.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['colon sigmoide','vólvulo','mesocolon sigmoide','intraperitoneal']
},
{
  id:'U8-A-Q23', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Ampolla de Vater', sub:'Litiasis biliar-pancreática',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta simultáneamente ictericia obstructiva y pancreatitis aguda, y en los estudios de imagen se identifica un cálculo impactado en la ampolla de Vater.',
  enunciado:'¿Qué relación anatómica explica que un único cálculo pueda causar ambos cuadros clínicos a la vez?',
  ops:[
    'El colédoco y el conducto pancreático principal desembocan generalmente juntos en la ampolla de Vater, así que un cálculo ahí puede obstruir ambos flujos a la vez',
    'La ictericia y la pancreatitis son siempre cuadros independientes, sin relación anatómica posible',
    'El cálculo se formó simultáneamente en dos órganos distintos por coincidencia',
    'El hígado y el páncreas comparten el mismo parénquima'
  ],
  ok:0,
  clave:'El colédoco y el conducto pancreático comparten una desembocadura común en la ampolla de Vater, por lo que un cálculo ahí obstruye ambos.',
  exp:'El colédoco (vía biliar) y el conducto pancreático principal desembocan generalmente juntos en la segunda porción del duodeno, a través de la ampolla de Vater (o ampolla hepatopancreática), regulada por el esfínter de Oddi. Un cálculo que se impacta precisamente en ese punto de unión anatómica puede obstruir simultáneamente el flujo de bilis (causando ictericia obstructiva) y el flujo de jugo pancreático (causando pancreatitis biliar), explicando por qué ambos cuadros aparecen juntos en el mismo paciente.',
  no:{
    1:'Sí existe una relación anatómica directa entre ambos cuadros, precisamente por la desembocadura común de ambos conductos en la ampolla de Vater.',
    2:'No se trata de dos cálculos formados por coincidencia; es un único cálculo impactado en el punto de unión anatómica de ambos conductos.',
    3:'El hígado y el páncreas son órganos anatómicamente distintos, con parénquimas separados; lo que comparten es únicamente el punto final de desembocadura de sus respectivos conductos.'
  },
  trampa:'No reconocer la unión anatómica común de la vía biliar y el conducto pancreático en la ampolla de Vater como la explicación de la coexistencia de ambos cuadros.',
  obj:'Explicar la base anatómica de la pancreatitis biliar concurrente con ictericia obstructiva.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['ampolla de Vater','colédoco','conducto pancreático','pancreatitis biliar']
},
{
  id:'U8-A-Q24', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Triángulo de Calot', sub:'Seguridad quirúrgica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es crítico identificar con claridad el triángulo de Calot durante una colecistectomía laparoscópica?',
  ops:[
    'Porque ahí se encuentra el bazo, que debe evitarse',
    'Porque permite localizar e identificar con certeza el conducto cístico y la arteria cística ANTES de seccionarlos, evitando lesionar por error el colédoco',
    'Porque el triángulo de Calot contiene al páncreas',
    'Porque es el sitio donde se encuentra el apéndice'
  ],
  ok:1,
  clave:'Identificar el triángulo de Calot permite distinguir con certeza el conducto cístico del colédoco antes de seccionarlo.',
  exp:'El triángulo de Calot, delimitado por el conducto cístico, el conducto hepático común y el borde inferior del hígado, contiene habitualmente a la arteria cística. Disecar y exponer completamente este triángulo antes de seccionar cualquier estructura ("visión crítica de seguridad") permite identificar con certeza el conducto cístico y distinguirlo del colédoco, evitando el error más temido de la colecistectomía: la lesión inadvertida del colédoco por confundirlo con el conducto cístico, con consecuencias graves (estenosis biliar, fuga de bilis).',
  no:{
    0:'El bazo no se encuentra en el triángulo de Calot, que está relacionado con la vesícula biliar y la vía biliar, no con el bazo.',
    2:'El páncreas no forma parte del contenido del triángulo de Calot, que se centra en las estructuras cistohepáticas.',
    3:'El apéndice se localiza en la fosa ilíaca derecha, en la unión del ciego con el colon ascendente, sin relación con el triángulo de Calot.'
  },
  trampa:'Confundir el contenido y la relevancia del triángulo de Calot con estructuras anatómicas no relacionadas con la vía biliar.',
  obj:'Explicar la importancia de la identificación del triángulo de Calot como medida de seguridad en la colecistectomía.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['triángulo de Calot','colecistectomía','conducto cístico','arteria cística']
},
{
  id:'U8-A-Q25', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Bazo', sub:'Trauma abdominal cerrado',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente sufre un traumatismo abdominal cerrado con fractura de las costillas novena y décima del lado izquierdo.',
  enunciado:'¿Qué órgano abdominal debe sospecharse lesionado con mayor prioridad, dada esta localización de las fracturas costales?',
  ops:['El hígado', 'El bazo', 'El páncreas', 'El riñón derecho'],
  ok:1,
  clave:'Las costillas inferiores izquierdas protegen (y, si se fracturan, pueden lesionar) al bazo, el órgano abdominal más frecuentemente dañado en trauma cerrado.',
  exp:'El bazo, situado en el cuadrante superior izquierdo, está protegido en parte por las costillas inferiores izquierdas. Una fractura de esas costillas en un traumatismo abdominal cerrado debe hacer sospechar lesión esplénica asociada, dado que el bazo es el órgano abdominal que con más frecuencia se lesiona en este tipo de trauma, por ser muy vascularizado y relativamente friable. El hígado, en cambio, se relaciona más bien con las costillas inferiores DERECHAS, y el riñón derecho está protegido por las costillas del lado derecho, no del izquierdo.',
  no:{
    0:'El hígado se relaciona anatómicamente con las costillas inferiores derechas, no con las izquierdas descritas en este caso.',
    2:'El páncreas es un órgano retroperitoneal profundo, sin una relación de protección costal tan directa y característica como la del bazo con las costillas inferiores izquierdas.',
    3:'El riñón derecho se relaciona con las costillas del lado derecho, no con las izquierdas mencionadas en el caso.'
  },
  trampa:'No relacionar la lateralidad de las fracturas costales con el órgano abdominal correspondiente a ese lado específico.',
  obj:'Relacionar la fractura de costillas inferiores izquierdas con la sospecha de lesión esplénica en trauma abdominal cerrado.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['bazo','trauma abdominal cerrado','costillas inferiores izquierdas','lesión esplénica']
},
{
  id:'U8-A-Q26', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Riñón', sub:'Asimetría de posición',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el riñón derecho suele estar ligeramente más bajo que el izquierdo?',
  ops:[
    'Por la presencia del lóbulo hepático derecho justo por encima de él, que ocupa espacio y lo desplaza caudalmente',
    'Porque el riñón derecho es de mayor tamaño que el izquierdo',
    'Porque el bazo empuja al riñón derecho hacia abajo',
    'No existe ninguna asimetría real entre ambos riñones'
  ],
  ok:0,
  clave:'El lóbulo hepático derecho, justo encima del riñón derecho, lo desplaza a una posición algo más baja que el izquierdo.',
  exp:'El riñón derecho suele estar ligeramente más bajo que el izquierdo debido a la presencia del lóbulo hepático derecho justo por encima de él, que ocupa espacio y lo desplaza caudalmente. El riñón izquierdo no tiene ese vecino voluminoso encima, así que mantiene una posición algo más craneal. Esta asimetría es un dato anatómico simple pero relevante, por ejemplo, al interpretar imágenes o al planear un acceso quirúrgico o percutáneo a cada riñón.',
  no:{
    1:'La diferencia de altura no se debe a una diferencia de tamaño entre ambos riñones, sino a la vecindad de una estructura distinta (el hígado).',
    2:'El bazo se relaciona con el riñón IZQUIERDO (en su polo superior/lateral), no con el derecho, y no es la causa de esta asimetría.',
    3:'Sí existe una asimetría real y bien documentada en la posición de ambos riñones, explicada por la vecindad hepática.'
  },
  trampa:'Atribuir la asimetría de posición renal a un tamaño distinto entre ambos riñones, en vez de a la vecindad de una estructura distinta (el hígado).',
  obj:'Explicar la asimetría de posición entre el riñón derecho e izquierdo.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['riñón derecho','asimetría renal','hígado','posición retroperitoneal']
},
{
  id:'U8-A-Q27', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Uréter', sub:'Sitios de estrechamiento',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de los tres sitios de estrechamiento fisiológico del uréter es el más estrecho, y por tanto el sitio más frecuente de impactación de un cálculo urinario?',
  ops:['La unión ureteropélvica', 'El punto donde el uréter cruza los vasos ilíacos', 'La unión ureterovesical', 'No existe diferencia de calibre entre los tres sitios'],
  ok:2,
  clave:'La unión ureterovesical es el punto más estrecho de los tres, y el sitio más frecuente de impactación de cálculos.',
  exp:'El uréter tiene tres sitios de estrechamiento fisiológico normal: la unión ureteropélvica, el cruce con los vasos ilíacos, y la unión ureterovesical (donde el uréter entra a la vejiga). De los tres, la unión ureterovesical es el punto más estrecho, y por eso es el sitio más frecuente de impactación de un cálculo urinario en su trayecto hacia la vejiga.',
  no:{
    0:'La unión ureteropélvica es uno de los tres sitios de estrechamiento, pero no es el más estrecho de los tres.',
    1:'El cruce con los vasos ilíacos es otro de los tres sitios de estrechamiento relevantes, pero tampoco es el más estrecho.',
    3:'Sí existe una diferencia de calibre entre los tres sitios; la unión ureterovesical es consistentemente el más estrecho de ellos.'
  },
  trampa:'Tratar los tres sitios de estrechamiento ureteral como equivalentes entre sí, sin identificar cuál es el más estrecho y, por tanto, el más relevante clínicamente para la impactación de cálculos.',
  obj:'Identificar la unión ureterovesical como el sitio más estrecho y más frecuente de impactación de cálculos ureterales.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['uréter','unión ureterovesical','cálculo urinario','estrechamiento ureteral']
},
{
  id:'U8-A-Q28', programa:'unirm', cuatri:8,
  esp:'Anatomía II', tema:'Suelo pélvico', sub:'Elevador del ano',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué consecuencia clínica tiene el debilitamiento del músculo elevador del ano, componente principal del suelo pélvico?',
  ops:[
    'No tiene ninguna consecuencia clínica relevante',
    'Puede producir prolapso de órganos pélvicos (uterino, vesical, rectal) e incontinencia urinaria de esfuerzo',
    'Produce exclusivamente estreñimiento crónico, sin otra consecuencia',
    'Afecta únicamente a la función respiratoria'
  ],
  ok:1,
  clave:'El debilitamiento del elevador del ano puede causar prolapso de órganos pélvicos e incontinencia urinaria de esfuerzo.',
  exp:'El músculo elevador del ano es el componente principal del diafragma pélvico, que sostiene a las vísceras pélvicas (vejiga, útero, recto) contra la gravedad y el aumento de la presión intraabdominal. Su debilitamiento -por partos vaginales múltiples, envejecimiento, o aumento crónico de la presión abdominal- puede hacer que esas vísceras desciendan más allá de su posición normal, produciendo prolapsos de órganos pélvicos (prolapso uterino, cistocele, rectocele), y con frecuencia también incontinencia urinaria de esfuerzo, por pérdida del soporte adecuado de la uretra.',
  no:{
    0:'Sí tiene consecuencias clínicas bien establecidas y frecuentes, relacionadas con el sostén de las vísceras pélvicas.',
    2:'Aunque el estreñimiento crónico puede ser tanto causa como consecuencia relacionada con la disfunción del suelo pélvico, no es la única ni la principal consecuencia de su debilitamiento; el prolapso y la incontinencia son las manifestaciones características.',
    3:'El elevador del ano no participa en la función respiratoria; su papel es el sostén de las vísceras pélvicas, sin relación con la mecánica ventilatoria.'
  },
  trampa:'Subestimar el papel funcional del suelo pélvico o atribuirle consecuencias no relacionadas con su función real de sostén visceral.',
  obj:'Explicar las consecuencias clínicas del debilitamiento del suelo pélvico.',
  ref:'Moore, Anatomía con Orientación Clínica. Netter, Atlas de Anatomía Humana.',
  tags:['elevador del ano','suelo pélvico','prolapso de órganos pélvicos','incontinencia urinaria de esfuerzo']
}

]);
