/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE FISIOLOGIA II (1/2)
   Amplia Fisiologia II de 5 a 50 preguntas junto con banco-20.js.
   Esta parte cubre electrofisiologia cardiaca, hemodinamica,
   ventilacion, intercambio de gases, control respiratorio,
   filtracion glomerular, manejo tubular y equilibrio acido-base
   (temas 2-9).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== FISIOLOGIA II ===================== */
{
  id:'U8-F-Q06', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Sistema de conducción', sub:'Nodo sinusal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el nodo sinusal, y no otra parte del sistema de conducción, actúa normalmente como el marcapasos del corazón?',
  ops:[
    'Porque es la única parte del corazón con automatismo',
    'Porque tiene la frecuencia de despolarización espontánea más rápida de todo el sistema de conducción',
    'Porque está conectado directamente al sistema nervioso central',
    'Porque es la parte más grande del sistema de conducción'
  ],
  ok:1,
  clave:'El nodo sinusal "manda" porque se despolariza espontáneamente más rápido que cualquier otra célula automática del corazón.',
  exp:'Varias regiones del sistema de conducción cardíaco tienen la propiedad de automatismo (despolarización espontánea), incluyendo el nodo sinusal, el nodo auriculoventricular y las fibras de Purkinje. Sin embargo, el nodo sinusal tiene la frecuencia de despolarización espontánea más rápida de todas ellas, así que "impone" su ritmo al resto del corazón antes de que cualquier otra región alcance su propio umbral de despolarización espontánea -por eso es el marcapasos normal. Si el nodo sinusal fallara, otra región con automatismo más lento (como el nodo AV) podría tomar el relevo como marcapasos de escape, a una frecuencia más baja.',
  no:{
    0:'No es la única con automatismo; el nodo AV y las fibras de Purkinje también tienen esta propiedad, aunque con frecuencias espontáneas más lentas.',
    2:'El automatismo del nodo sinusal es una propiedad intrínseca de sus propias células, no depende de una conexión directa con el sistema nervioso central (aunque el sistema nervioso autónomo sí puede modular su frecuencia).',
    3:'El tamaño del nodo sinusal no es la razón de su papel como marcapasos; es específicamente su velocidad de despolarización espontánea.'
  },
  trampa:'Atribuir el papel de marcapasos del nodo sinusal a su tamaño o a una conexión nerviosa directa, en vez de a su velocidad de despolarización espontánea comparada con otras regiones automáticas.',
  obj:'Explicar por qué el nodo sinusal es el marcapasos normal del corazón.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['nodo sinusal','automatismo','marcapasos cardíaco','sistema de conducción']
},
{
  id:'U8-F-Q07', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'ECG', sub:'Significado de las ondas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué representa el complejo QRS del electrocardiograma?',
  ops:['La despolarización auricular', 'La repolarización ventricular', 'La despolarización ventricular', 'La contracción mecánica de las aurículas'],
  ok:2,
  clave:'El complejo QRS representa la despolarización ventricular.',
  exp:'El complejo QRS representa la despolarización ventricular, un evento eléctrico mucho más grande en amplitud que la onda P (despolarización auricular), porque la masa muscular ventricular es considerablemente mayor que la auricular. La repolarización ventricular corresponde a la onda T, que aparece después del QRS. Es importante recordar que el ECG registra actividad ELÉCTRICA, no la contracción mecánica directamente, aunque ambos eventos estén acoplados temporalmente en el corazón sano.',
  no:{
    0:'La despolarización auricular corresponde a la onda P, que precede al complejo QRS, no al QRS mismo.',
    1:'La repolarización ventricular corresponde a la onda T, que aparece después del complejo QRS, no es lo que representa el QRS.',
    3:'El ECG registra actividad eléctrica, no contracción mecánica directamente; y de cualquier forma, el QRS corresponde a los ventrículos, no a las aurículas.'
  },
  trampa:'Confundir las distintas ondas del ECG entre sí, o confundir actividad eléctrica con actividad mecánica.',
  obj:'Identificar el complejo QRS como el reflejo de la despolarización ventricular.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['electrocardiograma','complejo QRS','despolarización ventricular','onda P']
},
{
  id:'U8-F-Q08', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Nodo AV', sub:'Retraso fisiológico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple el retraso fisiológico normal de la conducción en el nodo auriculoventricular?',
  ops:[
    'Ninguna, es simplemente un defecto anatómico sin propósito',
    'Da tiempo a que la contracción auricular termine de llenar a los ventrículos antes de que estos se despolaricen y contraigan',
    'Acelera la conducción hacia los ventrículos',
    'Evita por completo la conducción del impulso hacia los ventrículos'
  ],
  ok:1,
  clave:'El retraso en el nodo AV asegura que la contracción auricular termine de llenar los ventrículos antes de que se contraigan.',
  exp:'El retraso de la conducción en el nodo auriculoventricular cumple una función fisiológica esencial: da tiempo a que la contracción auricular (el "empujón" final de sangre hacia los ventrículos) se complete antes de que los ventrículos se despolaricen y comiencen su propia contracción. Sin este retraso, las aurículas y los ventrículos se contraerían casi simultáneamente, perdiendo la contribución auricular al llenado ventricular. Este retraso corresponde al intervalo PR del electrocardiograma.',
  no:{
    0:'Es un retraso fisiológico intencional, con una función clara, no un defecto anatómico sin propósito.',
    2:'El retraso en el nodo AV enlentece la conducción, no la acelera; es precisamente ese enlentecimiento el que cumple su función.',
    3:'El nodo AV sí conduce el impulso hacia los ventrículos, solo que con un retraso; no lo bloquea por completo en condiciones normales.'
  },
  trampa:'Interpretar el retraso del nodo AV como un defecto o una simple curiosidad anatómica, en vez de reconocer su función fisiológica de coordinación entre la contracción auricular y ventricular.',
  obj:'Explicar la función fisiológica del retraso de conducción en el nodo auriculoventricular.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['nodo auriculoventricular','intervalo PR','retraso de conducción','llenado ventricular']
},
{
  id:'U8-F-Q09', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Presión arterial', sub:'Determinantes fundamentales',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son los dos determinantes fundamentales de la presión arterial media, según la ecuación básica de la hemodinámica?',
  ops:['Frecuencia cardíaca y volumen sanguíneo total', 'Gasto cardíaco y resistencia vascular periférica', 'Precarga y poscarga exclusivamente', 'Solo la resistencia vascular periférica'],
  ok:1,
  clave:'Presión arterial = Gasto cardíaco × Resistencia vascular periférica.',
  exp:'La presión arterial media depende de dos factores fundamentales: Presión arterial = Gasto cardíaco × Resistencia vascular periférica. Cualquier factor que aumente el gasto cardíaco (mayor frecuencia cardíaca, mayor volumen sistólico) o la resistencia periférica (vasoconstricción) tiende a elevar la presión arterial, y viceversa. Esta ecuación es la base conceptual para entender el mecanismo de acción de las distintas clases de antihipertensivos.',
  no:{
    0:'La frecuencia cardíaca y el volumen sanguíneo son componentes que influyen en el gasto cardíaco y la resistencia, pero la ecuación fundamental se expresa en términos de gasto cardíaco y resistencia periférica, no de estos dos factores directamente.',
    2:'La precarga y la poscarga son determinantes del volumen sistólico (y por tanto, indirectamente, del gasto cardíaco), pero no son, por sí mismas, la ecuación fundamental de la presión arterial.',
    3:'La resistencia periférica es solo uno de los dos determinantes; el gasto cardíaco es el otro factor igualmente necesario en la ecuación.'
  },
  trampa:'Confundir los determinantes fundamentales de la presión arterial con factores que influyen indirectamente sobre ellos.',
  obj:'Identificar la ecuación fundamental que determina la presión arterial media.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['presión arterial','gasto cardíaco','resistencia vascular periférica','hemodinámica']
},
{
  id:'U8-F-Q10', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Barorreceptores', sub:'Reajuste ante hipertensión sostenida',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el reflejo barorreceptor, pese a ser el mecanismo de control de presión más rápido del organismo, no previene por sí solo el desarrollo de hipertensión arterial crónica?',
  ops:[
    'Porque los barorreceptores dejan de funcionar completamente después de unos días',
    'Porque el reflejo barorreceptor se "reajusta" a un nuevo valor de referencia si la presión permanece elevada de forma sostenida durante días',
    'Porque el reflejo barorreceptor solo responde a caídas de presión, nunca a elevaciones',
    'Porque el reflejo barorreceptor actúa sobre el riñón, no sobre el corazón ni los vasos'
  ],
  ok:1,
  clave:'El reflejo barorreceptor se reajusta a un nuevo punto de referencia ante presión sostenida, perdiendo su capacidad de oponerse a la hipertensión crónica.',
  exp:'El reflejo barorreceptor es extremadamente rápido para corregir cambios de presión de corto plazo (segundos), pero tiene la particularidad de "reajustarse" (resetearse) a un nuevo valor de referencia si la presión arterial permanece elevada de forma sostenida durante días. Esto significa que, ante hipertensión crónica, los barorreceptores dejan de "reconocer" esa presión elevada como anormal y ya no generan la respuesta correctora que sí generarían ante un cambio agudo -por eso el control de la presión a largo plazo depende de otros mecanismos, como el sistema renina-angiotensina-aldosterona y el balance renal de sodio y agua.',
  no:{
    0:'Los barorreceptores no dejan de funcionar completamente; siguen respondiendo a cambios agudos, pero se reajustan a un nuevo punto de referencia con la presión sostenida.',
    2:'Los barorreceptores responden tanto a caídas como a elevaciones de presión, ajustando la actividad simpática y parasimpática en ambos sentidos.',
    3:'El reflejo barorreceptor actúa principalmente sobre el corazón y los vasos (vía el sistema nervioso autónomo), no directamente sobre el riñón; es el sistema renina-angiotensina el que tiene ese componente renal.'
  },
  trampa:'Asumir que el reflejo barorreceptor simplemente "deja de funcionar" ante hipertensión sostenida, en vez de entender el fenómeno más preciso del reajuste a un nuevo punto de referencia.',
  obj:'Explicar el fenómeno de reajuste del reflejo barorreceptor ante presión arterial sostenidamente elevada.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['barorreceptores','reajuste del reflejo','hipertensión crónica','control rápido de la presión']
},
{
  id:'U8-F-Q11', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Sistema renina-angiotensina', sub:'Mecanismo de control lento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué dos efectos produce la angiotensina II sobre la presión arterial?',
  ops:[
    'Solo vasodilatación directa',
    'Vasoconstricción directa y estimulación de la liberación de aldosterona (que retiene sodio y agua)',
    'Inhibe la liberación de aldosterona',
    'Actúa exclusivamente sobre el corazón, sin efecto vascular ni renal'
  ],
  ok:1,
  clave:'La angiotensina II es vasoconstrictora directa y estimula la liberación de aldosterona, que retiene sodio y agua.',
  exp:'La angiotensina II tiene dos efectos principales sobre la presión arterial: es un vasoconstrictor potente por sí misma (elevando directamente la resistencia periférica), y además estimula la liberación de aldosterona desde la corteza suprarrenal, que promueve la reabsorción de sodio (y, con él, de agua) en el túbulo renal, aumentando el volumen circulante. Ambos efectos -vasoconstricción inmediata y retención de volumen más sostenida- contribuyen a elevar la presión arterial, cada uno con una velocidad de acción distinta.',
  no:{
    0:'La angiotensina II es vasoCONSTRICTORA, no vasodilatadora; produce el efecto opuesto al descrito en esta opción.',
    2:'La angiotensina II ESTIMULA la liberación de aldosterona, no la inhibe; es uno de sus dos efectos principales.',
    3:'La angiotensina II sí tiene efectos vasculares directos (vasoconstricción) y renales/suprarrenales (vía la aldosterona), no se limita al corazón.'
  },
  trampa:'Invertir los efectos de la angiotensina II, describiéndola como vasodilatadora o como inhibidora de la aldosterona, cuando ocurre exactamente lo contrario.',
  obj:'Describir los dos efectos principales de la angiotensina II sobre la presión arterial.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['angiotensina II','aldosterona','vasoconstricción','sistema renina-angiotensina-aldosterona']
},
{
  id:'U8-F-Q12', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Distensibilidad pulmonar', sub:'Fibrosis vs. enfisema',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente tiene fibrosis pulmonar, con un tejido pulmonar rígido que requiere mucha más presión de lo normal para inflarse el mismo volumen. Otro paciente tiene enfisema, con destrucción del tejido elástico pulmonar.',
  enunciado:'¿Cómo se compara la distensibilidad pulmonar entre ambos pacientes?',
  ops:[
    'Ambos tienen distensibilidad disminuida',
    'La fibrosis pulmonar tiene distensibilidad DISMINUIDA (pulmón rígido); el enfisema tiene distensibilidad AUMENTADA (pulmón más fácil de inflar, pero con dificultad para vaciarse)',
    'Ambos tienen distensibilidad aumentada',
    'La distensibilidad no cambia en ninguna de las dos enfermedades'
  ],
  ok:1,
  clave:'Fibrosis = distensibilidad disminuida (rígido). Enfisema = distensibilidad aumentada (pero con pérdida de retracción elástica, dificultando la espiración).',
  exp:'La distensibilidad (compliance) pulmonar mide qué tan fácil es inflar el pulmón: la fibrosis pulmonar, al producir rigidez del tejido, DISMINUYE la distensibilidad (cuesta más inflarlo). El enfisema, al destruir el tejido elástico pulmonar, paradójicamente AUMENTA la distensibilidad (el pulmón se infla con más facilidad), pero esto también es problemático porque el pulmón pierde su capacidad de retracción elástica normal, dificultando la espiración -ambas enfermedades son anormales, mecánicamente en direcciones opuestas.',
  no:{
    0:'Solo la fibrosis pulmonar tiene distensibilidad disminuida; el enfisema, al contrario, tiene distensibilidad aumentada.',
    2:'Solo el enfisema tiene distensibilidad aumentada; la fibrosis pulmonar tiene distensibilidad disminuida, no aumentada.',
    3:'Ambas enfermedades alteran significativamente la distensibilidad pulmonar, cada una en una dirección distinta.'
  },
  trampa:'Asumir que toda enfermedad pulmonar altera la distensibilidad en la misma dirección, sin distinguir entre fibrosis (rigidez, distensibilidad disminuida) y enfisema (pérdida de elasticidad, distensibilidad aumentada).',
  obj:'Comparar la distensibilidad pulmonar en la fibrosis pulmonar y el enfisema.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['distensibilidad pulmonar','fibrosis pulmonar','enfisema','compliance']
},
{
  id:'U8-F-Q13', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Surfactante pulmonar', sub:'Síndrome de dificultad respiratoria neonatal',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un recién nacido prematuro desarrolla dificultad respiratoria progresiva poco después del nacimiento, con colapso alveolar generalizado en las imágenes.',
  enunciado:'¿Qué deficiencia explica este cuadro, y por qué es más frecuente en el prematuro?',
  ops:[
    'Deficiencia de hemoglobina fetal, sin relación con la prematuridad',
    'Deficiencia de surfactante pulmonar, cuya producción por los neumocitos tipo II madura tardíamente en el embarazo',
    'Exceso de surfactante pulmonar',
    'Deficiencia de aire ambiental, sin relación con ninguna sustancia pulmonar'
  ],
  ok:1,
  clave:'La deficiencia de surfactante, cuya producción madura tardíamente en el embarazo, explica el síndrome de dificultad respiratoria del prematuro.',
  exp:'El surfactante pulmonar, producido por los neumocitos tipo II, reduce la tensión superficial dentro del alvéolo y estabiliza alvéolos de distintos tamaños, evitando su colapso. Su producción madura tardíamente en el embarazo, así que el recién nacido prematuro tiene con frecuencia una producción insuficiente, lo que causa el síndrome de dificultad respiratoria del recién nacido, con colapso alveolar generalizado (atelectasia) y gran dificultad para ventilar. Por eso se administra corticoide prenatal para acelerar la maduración del surfactante cuando se anticipa un parto prematuro.',
  no:{
    0:'La hemoglobina fetal no es la causa de este cuadro respiratorio específico; el mecanismo central es la deficiencia de surfactante.',
    2:'Es deficiencia, no exceso, de surfactante lo que causa el colapso alveolar en el síndrome de dificultad respiratoria neonatal.',
    3:'No se trata de una deficiencia de aire ambiental; es un problema de la propia mecánica pulmonar del recién nacido, por falta de surfactante.'
  },
  trampa:'Buscar la causa del síndrome de dificultad respiratoria neonatal en factores externos o hematológicos, en vez de en la maduración tardía del propio surfactante pulmonar.',
  obj:'Explicar la causa del síndrome de dificultad respiratoria del recién nacido prematuro.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['surfactante pulmonar','síndrome de dificultad respiratoria neonatal','neumocitos tipo II','prematuridad']
},
{
  id:'U8-F-Q14', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Espacio muerto', sub:'Anatómico vs. fisiológico',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el espacio muerto fisiológico puede aumentar considerablemente por encima del espacio muerto anatómico en el tromboembolismo pulmonar?',
  ops:[
    'Porque el tromboembolismo destruye la vía aérea de conducción',
    'Porque en el tromboembolismo hay alvéolos que siguen recibiendo aire (ventilados) pero cuya perfusión está bloqueada, así que tampoco participan efectivamente del intercambio gaseoso',
    'Porque el tromboembolismo reduce el volumen corriente a cero',
    'El espacio muerto fisiológico nunca puede diferir del anatómico'
  ],
  ok:1,
  clave:'El tromboembolismo bloquea la perfusión de alvéolos ventilados, sumándolos al espacio muerto fisiológico por encima del anatómico.',
  exp:'El espacio muerto anatómico es fijo, correspondiente a la vía aérea de conducción sin alvéolos. El espacio muerto fisiológico incluye además a los alvéolos que sí reciben aire (están ventilados) pero que, por algún motivo, no participan efectivamente del intercambio gaseoso. En el tromboembolismo pulmonar, un coágulo bloquea la perfusión sanguínea hacia ciertas regiones del pulmón que siguen siendo ventiladas con normalidad -esos alvéolos ventilados pero no perfundidos se suman al espacio muerto fisiológico, que entonces supera considerablemente al espacio muerto anatómico fijo.',
  no:{
    0:'El tromboembolismo pulmonar es un evento vascular (obstrucción de la perfusión), no destruye la vía aérea de conducción.',
    2:'El tromboembolismo no reduce necesariamente el volumen corriente a cero; el problema es la falta de perfusión en zonas ventiladas, no la ausencia de ventilación.',
    3:'El espacio muerto fisiológico sí puede diferir (aumentar) respecto al anatómico, precisamente en situaciones como el tromboembolismo pulmonar.'
  },
  trampa:'Confundir un problema de perfusión (tromboembolismo) con un problema de ventilación, cuando el mecanismo real del aumento del espacio muerto fisiológico es la falta de perfusión en zonas que sí se ventilan.',
  obj:'Explicar por qué el tromboembolismo pulmonar aumenta el espacio muerto fisiológico por encima del anatómico.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['espacio muerto fisiológico','tromboembolismo pulmonar','ventilación-perfusión','espacio muerto anatómico']
},
{
  id:'U8-F-Q15', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Curva de disociación de hemoglobina', sub:'Forma sigmoidea',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la forma sigmoidea (en "S") de la curva de disociación de la hemoglobina es fisiológicamente ventajosa?',
  ops:[
    'Porque hace que la hemoglobina nunca se sature completamente',
    'Porque la hemoglobina se satura eficientemente en el rango de presión de oxígeno del pulmón (zona plana), y libera oxígeno con facilidad en el rango de presión de los tejidos periféricos (zona empinada)',
    'Porque es una curva completamente lineal, sin ninguna particularidad',
    'Porque impide que la hemoglobina libere oxígeno en cualquier condición'
  ],
  ok:1,
  clave:'La forma sigmoidea permite saturación eficiente en el pulmón (zona plana) y liberación eficiente en los tejidos (zona empinada).',
  exp:'La curva de disociación de la hemoglobina tiene una forma sigmoidea, no lineal, gracias a la cooperatividad entre sus cuatro subunidades. En el rango de presiones de oxígeno del pulmón (alto), la curva es relativamente plana, así que la hemoglobina se satura eficientemente incluso con variaciones moderadas de oxígeno alveolar. En el rango de presiones de los tejidos periféricos (más bajo), la curva es empinada, de modo que pequeñas caídas de oxígeno tisular liberan grandes cantidades de oxígeno desde la hemoglobina, precisamente donde el tejido lo necesita. Esta forma no es casualidad: es funcionalmente óptima para ambos procesos.',
  no:{
    0:'La hemoglobina sí puede saturarse casi completamente en el pulmón, en el rango de presión de oxígeno alveolar normal.',
    2:'La curva NO es lineal; su forma sigmoidea es precisamente lo que le da su ventaja fisiológica particular.',
    3:'La hemoglobina sí libera oxígeno, especialmente en el rango de presiones tisulares bajas, donde la curva es empinada.'
  },
  trampa:'No conectar la forma geométrica específica de la curva (sigmoidea, con una zona plana y otra empinada) con su ventaja funcional en dos contextos fisiológicos distintos (pulmón y tejidos).',
  obj:'Explicar la ventaja fisiológica de la forma sigmoidea de la curva de disociación de la hemoglobina.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['curva de disociación de hemoglobina','forma sigmoidea','saturación de oxígeno','cooperatividad']
},
{
  id:'U8-F-Q16', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Efecto Bohr', sub:'Desplazamiento de la curva',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un músculo en ejercicio intenso genera calor, produce grandes cantidades de CO2 y ácido láctico (reduciendo el pH local).',
  enunciado:'¿Cómo afectan estas condiciones a la afinidad de la hemoglobina por el oxígeno en ese tejido, y qué consecuencia tiene?',
  ops:[
    'Aumentan la afinidad de la hemoglobina por el oxígeno, dificultando su liberación',
    'Disminuyen la afinidad de la hemoglobina por el oxígeno (desplazamiento de la curva a la derecha), facilitando que libere más oxígeno precisamente en ese tejido que lo necesita',
    'No tienen ningún efecto sobre la afinidad de la hemoglobina',
    'Solo el CO2 tiene efecto, la temperatura y el pH no influyen'
  ],
  ok:1,
  clave:'El aumento de temperatura, CO2 y acidez desplaza la curva a la derecha, disminuyendo la afinidad y facilitando la liberación de oxígeno donde se necesita.',
  exp:'El aumento de temperatura, el aumento de CO2 y el descenso del pH (acidosis, el efecto Bohr) desplazan la curva de disociación de la hemoglobina hacia la derecha, disminuyendo su afinidad por el oxígeno y facilitando su liberación hacia los tejidos. Todas estas condiciones son precisamente las que caracterizan a un tejido metabólicamente muy activo, como el músculo en ejercicio intenso -el sistema está diseñado para liberar MÁS oxígeno exactamente donde el metabolismo lo está consumiendo más rápido.',
  no:{
    0:'Es al revés: estas condiciones DISMINUYEN la afinidad de la hemoglobina por el oxígeno, facilitando (no dificultando) su liberación.',
    2:'Sí tienen un efecto significativo y bien documentado sobre la afinidad de la hemoglobina, desplazando la curva de disociación.',
    3:'Los tres factores (temperatura, CO2 y pH) influyen de forma conjunta en el desplazamiento de la curva, no solo el CO2 de forma aislada.'
  },
  trampa:'Invertir la dirección del efecto de estas condiciones sobre la afinidad de la hemoglobina, o atribuir el efecto a un solo factor cuando en realidad actúan varios de forma conjunta.',
  obj:'Aplicar el efecto Bohr y los factores que desplazan la curva de disociación hacia la derecha en un contexto de ejercicio muscular.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['efecto Bohr','curva de disociación','desplazamiento a la derecha','ejercicio muscular']
},
{
  id:'U8-F-Q17', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Quimiorreceptores', sub:'CO2 vs. oxígeno',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'En una persona sana, ¿cuál es el estímulo respiratorio dominante para regular la ventilación minuto a minuto?',
  ops:[
    'La caída de la PaO2, detectada por quimiorreceptores centrales',
    'El aumento de la PaCO2, detectado principalmente por quimiorreceptores centrales en el bulbo raquídeo',
    'Ambos estímulos tienen exactamente la misma sensibilidad',
    'Ninguno de los dos gases influye en la ventilación'
  ],
  ok:1,
  clave:'El CO2, detectado por quimiorreceptores centrales, es el estímulo respiratorio dominante en condiciones normales.',
  exp:'Los quimiorreceptores centrales, localizados en el bulbo raquídeo, son extraordinariamente sensibles a los cambios de PaCO2 (indirectamente, a través del pH del líquido cefalorraquídeo) y constituyen el estímulo dominante para regular la ventilación minuto a minuto en una persona sana. Los quimiorreceptores periféricos responden principalmente a caídas significativas de la PaO2 (hipoxemia), pero su sensibilidad es mucho menor que la del sistema al CO2, así que en condiciones normales juegan un papel secundario.',
  no:{
    0:'La PaO2 es detectada principalmente por los quimiorreceptores PERIFÉRICOS, no los centrales, y su sensibilidad es mucho menor que la del CO2 en condiciones normales.',
    2:'La sensibilidad de ambos sistemas es marcadamente distinta: el sistema del CO2 es mucho más sensible que el del oxígeno en condiciones normales.',
    3:'Ambos gases sí influyen en la ventilación, aunque con distinta sensibilidad e importancia relativa según las condiciones.'
  },
  trampa:'Asumir que el oxígeno es el estímulo respiratorio principal en condiciones normales, cuando en realidad ese papel corresponde al CO2.',
  obj:'Identificar el CO2 como el estímulo respiratorio dominante en condiciones normales.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['quimiorreceptores centrales','PaCO2','control de la respiración','estímulo respiratorio']
},
{
  id:'U8-F-Q18', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Estímulo hipóxico', sub:'EPOC avanzada',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con EPOC avanzada y retención crónica de CO2 recibe oxígeno suplementario a un flujo alto y sin control, y poco después desarrolla mayor somnolencia y empeoramiento de la acidosis respiratoria.',
  enunciado:'¿Qué mecanismo fisiológico explica este empeoramiento tras administrar oxígeno en exceso?',
  ops:[
    'El oxígeno es tóxico para todos los pacientes en cualquier dosis',
    'En estos pacientes, el estímulo respiratorio dominante puede haberse desplazado hacia la hipoxemia ("estímulo hipóxico"); administrar oxígeno en exceso puede reducir ese estímulo remanente y empeorar la retención de CO2',
    'El oxígeno siempre mejora la ventilación en cualquier paciente con EPOC, sin excepción',
    'No existe ninguna relación entre el oxígeno suplementario y la ventilación'
  ],
  ok:1,
  clave:'En la retención crónica de CO2, el centro respiratorio puede depender del estímulo hipóxico; el exceso de oxígeno puede reducirlo y empeorar la hipoventilación.',
  exp:'En pacientes con retención crónica de CO2, el centro respiratorio puede perder parte de su sensibilidad habitual al CO2 (acostumbrado a niveles altos sostenidos), desplazando el estímulo respiratorio dominante hacia la hipoxemia, detectada por los quimiorreceptores periféricos ("estímulo hipóxico"). Administrar oxígeno suplementario en exceso y sin control puede reducir ese estímulo remanente, disminuyendo el impulso ventilatorio y empeorando la retención de CO2 y la acidosis respiratoria -por eso en estos pacientes se prefiere una oxigenoterapia titulada cuidadosamente, no administrada sin control.',
  no:{
    0:'No es una toxicidad general del oxígeno en cualquier dosis; es un mecanismo específico relacionado con el desplazamiento del estímulo respiratorio en la retención crónica de CO2.',
    2:'El oxígeno no siempre mejora la ventilación de forma segura en todo paciente con EPOC; en los que dependen del estímulo hipóxico, puede empeorar la hipoventilación si se administra sin control.',
    3:'Sí existe una relación bien documentada entre el oxígeno suplementario excesivo y la reducción del impulso ventilatorio en estos pacientes específicos.'
  },
  trampa:'Generalizar el efecto del oxígeno suplementario a todos los pacientes por igual, sin considerar el contexto específico de la retención crónica de CO2 y el estímulo hipóxico.',
  obj:'Explicar el riesgo de administrar oxígeno suplementario sin control en pacientes con retención crónica de CO2.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['estímulo hipóxico','EPOC','retención crónica de CO2','oxigenoterapia']
},
{
  id:'U8-F-Q19', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Filtración glomerular', sub:'Presiones determinantes',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ocurre con la presión de filtración glomerular si se produce constricción de la arteriola aferente (la que lleva sangre al glomérulo)?',
  ops:[
    'Aumenta la presión de filtración',
    'Disminuye la presión de filtración, porque baja la presión hidrostática dentro del capilar glomerular',
    'No cambia en absoluto',
    'La arteriola aferente no influye en la filtración glomerular'
  ],
  ok:1,
  clave:'La constricción de la arteriola aferente reduce la presión hidrostática capilar glomerular, disminuyendo la filtración.',
  exp:'La filtración glomerular depende del balance de presiones a través de la membrana glomerular, siendo la presión hidrostática dentro del capilar glomerular el factor que favorece la filtración. La constricción de la arteriola aferente reduce el flujo de sangre que llega al glomérulo, disminuyendo la presión hidrostática capilar y, en consecuencia, la presión de filtración neta y la tasa de filtración glomerular. Este es un mecanismo relevante, por ejemplo, en la autorregulación renal y en el efecto de ciertos fármacos sobre la arteriola aferente.',
  no:{
    0:'Es al revés: la constricción de la arteriola aferente reduce, no aumenta, la presión de filtración.',
    2:'La constricción de la arteriola aferente sí tiene un efecto significativo sobre la presión de filtración, reduciéndola.',
    3:'La arteriola aferente es uno de los principales determinantes de la presión hidrostática capilar glomerular y, por tanto, de la filtración.'
  },
  trampa:'No conectar el cambio en el flujo de entrada al glomérulo (arteriola aferente) con su efecto directo sobre la presión hidrostática capilar y, por tanto, sobre la filtración.',
  obj:'Explicar el efecto de la constricción de la arteriola aferente sobre la filtración glomerular.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['arteriola aferente','presión de filtración','filtración glomerular','presión hidrostática capilar']
},
{
  id:'U8-F-Q20', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Túbulo proximal', sub:'Reabsorción de glucosa',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con diabetes mal controlada tiene glucosuria (glucosa detectable en la orina), pese a que en condiciones normales toda la glucosa filtrada se reabsorbe en el túbulo proximal.',
  enunciado:'¿Qué mecanismo explica la aparición de glucosa en la orina en este caso?',
  ops:[
    'El riñón deja de filtrar glucosa por completo en la diabetes',
    'La glucemia elevada satura los transportadores de reabsorción de glucosa del túbulo proximal, superando su capacidad máxima (el umbral renal)',
    'La glucosa nunca se reabsorbe en el túbulo proximal, ni siquiera en personas sanas',
    'La glucosuria no tiene ninguna relación con los niveles de glucemia'
  ],
  ok:1,
  clave:'La hiperglucemia satura los transportadores del túbulo proximal, superando el umbral de reabsorción y produciendo glucosuria.',
  exp:'En condiciones normales, el túbulo proximal reabsorbe prácticamente el 100% de la glucosa filtrada mediante transportadores específicos con capacidad de sobra para la carga filtrada habitual. Cuando la glucemia (y por tanto la carga de glucosa filtrada) supera el umbral renal de reabsorción, como ocurre en la diabetes mal controlada, esos transportadores se saturan y no pueden reabsorber toda la glucosa filtrada, apareciendo el exceso en la orina (glucosuria) -un ejemplo de cómo un sistema de reabsorción con capacidad limitada puede "desbordarse" cuando la carga filtrada excede esa capacidad.',
  no:{
    0:'El riñón sigue filtrando glucosa en la diabetes; el problema es que la reabsorción tubular no da abasto con la carga filtrada aumentada.',
    2:'En condiciones normales, la glucosa SÍ se reabsorbe casi por completo en el túbulo proximal; la glucosuria aparece justamente cuando ese mecanismo se satura.',
    3:'La glucosuria está directamente relacionada con el nivel de glucemia: aparece cuando la glucemia supera el umbral renal de reabsorción.'
  },
  trampa:'No conectar el concepto de "capacidad limitada de reabsorción" con la aparición de glucosuria cuando la carga filtrada supera esa capacidad.',
  obj:'Explicar el mecanismo de la glucosuria por saturación de los transportadores de reabsorción del túbulo proximal.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['túbulo proximal','glucosuria','umbral renal','reabsorción de glucosa']
},
{
  id:'U8-F-Q21', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Asa de Henle', sub:'Mecanismo de contracorriente',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple el gradiente osmótico medular generado por el asa de Henle mediante el mecanismo de multiplicación por contracorriente?',
  ops:[
    'No tiene ninguna función relevante para la concentración de la orina',
    'Es el gradiente que, aprovechado después por el túbulo colector, hace posible concentrar la orina muy por encima de la osmolaridad del plasma',
    'Su función es exclusivamente diluir la orina',
    'Solo afecta a la reabsorción de glucosa'
  ],
  ok:1,
  clave:'El gradiente osmótico medular generado por el asa de Henle es el que permite, después, concentrar la orina en el túbulo colector.',
  exp:'El asa de Henle, mediante el mecanismo de multiplicación por contracorriente, genera un gradiente de concentración creciente hacia la médula renal profunda (cada vez más hiperosmolar a mayor profundidad). Este gradiente medular es el que hace posible, más adelante en el túbulo colector (bajo la acción de la ADH), concentrar la orina muy por encima de la osmolaridad del plasma -sin ese gradiente previamente establecido por el asa de Henle, el túbulo colector no tendría nada que aprovechar para concentrar la orina, sin importar cuánta ADH esté presente.',
  no:{
    0:'El gradiente medular generado por el asa de Henle es precisamente el requisito previo indispensable para poder concentrar la orina después.',
    2:'Su función no es diluir la orina; es generar el gradiente que, aprovechado después, permite CONCENTRARLA.',
    3:'El asa de Henle está relacionada con la reabsorción de sodio, potasio y cloro y con el gradiente osmótico medular, no específicamente con la glucosa (que se reabsorbe principalmente en el túbulo proximal).'
  },
  trampa:'No conectar la función del asa de Henle (generar un gradiente medular) con su papel preparatorio indispensable para la concentración de orina que ocurre después, en el túbulo colector.',
  obj:'Explicar la función del gradiente osmótico medular generado por el asa de Henle.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['asa de Henle','contracorriente','gradiente medular','concentración de orina']
},
{
  id:'U8-F-Q22', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'ADH', sub:'Mecanismo de acción',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con diabetes insípida central (deficiencia de ADH) presenta poliuria marcada, con orina muy diluida a pesar de una osmolaridad plasmática elevada.',
  enunciado:'¿Qué mecanismo explica la incapacidad de concentrar la orina en ausencia de ADH?',
  ops:[
    'Sin ADH, el túbulo colector es prácticamente impermeable al agua, así que el agua no puede reabsorberse siguiendo el gradiente osmótico medular ya establecido',
    'La ADH es necesaria para filtrar la sangre en el glomérulo',
    'La ausencia de ADH aumenta la reabsorción de agua en el túbulo colector',
    'La ADH no tiene relación con el manejo del agua en el riñón'
  ],
  ok:0,
  clave:'Sin ADH, el túbulo colector es impermeable al agua, impidiendo su reabsorción pese al gradiente osmótico medular disponible.',
  exp:'La ADH actúa sobre el túbulo colector insertando canales de agua (acuaporinas) que permiten que el agua se reabsorba siguiendo el gradiente osmótico medular ya construido por el asa de Henle. Sin ADH (como en la diabetes insípida central), el túbulo colector es prácticamente impermeable al agua: aunque el gradiente osmótico medular esté disponible, el agua no puede aprovecharlo para reabsorberse, y se produce una orina muy diluida (poliuria), independientemente de que la osmolaridad plasmática esté elevada (lo cual, en una persona sana, sería precisamente el estímulo para liberar MÁS ADH).',
  no:{
    1:'La ADH no participa en la filtración glomerular; su acción es específicamente sobre el túbulo colector, regulando la reabsorción de agua.',
    2:'Es al revés: la ausencia de ADH DISMINUYE (no aumenta) la reabsorción de agua en el túbulo colector, produciendo orina diluida.',
    3:'La ADH tiene una relación directa y central con el manejo del agua en el riñón, específicamente con la reabsorción de agua en el túbulo colector.'
  },
  trampa:'No reconocer que el problema en la deficiencia de ADH es la permeabilidad al agua del túbulo colector, no la disponibilidad del gradiente osmótico medular, que sigue intacto.',
  obj:'Explicar el mecanismo de la poliuria en la diabetes insípida por deficiencia de ADH.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['ADH','diabetes insípida','acuaporinas','túbulo colector']
},
{
  id:'U8-F-Q23', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Aldosterona', sub:'Mecanismo de acción',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué efecto tiene la aldosterona sobre el túbulo distal y colector?',
  ops:[
    'Promueve la reabsorción de sodio a cambio de la secreción de potasio e hidrogeniones',
    'Promueve la excreción de sodio y la retención de potasio',
    'Actúa principalmente sobre la reabsorción de agua, no de sodio',
    'No tiene ningún efecto sobre el manejo de electrolitos'
  ],
  ok:0,
  clave:'La aldosterona promueve la reabsorción de sodio a cambio de secretar potasio e hidrogeniones.',
  exp:'La aldosterona, liberada por la corteza suprarrenal en respuesta a la angiotensina II o a la hiperkalemia, actúa sobre el túbulo distal y colector promoviendo la reabsorción de sodio (con agua acompañando pasivamente) a cambio de la secreción de potasio e hidrogeniones. Su papel principal es regular cuánto sodio se reabsorbe (y, con él, el volumen circulante), distinto del papel de la ADH, que regula principalmente la reabsorción de agua de forma independiente del sodio.',
  no:{
    1:'Es al revés: la aldosterona promueve la reabsorción (no excreción) de sodio, y la secreción (no retención) de potasio.',
    2:'La acción principal de la aldosterona es sobre el sodio (y, secundariamente, sobre el potasio y los hidrogeniones); la reabsorción de agua propiamente dicha depende más de la ADH.',
    3:'La aldosterona sí tiene un efecto directo y central sobre el manejo de electrolitos, específicamente sodio, potasio e hidrogeniones.'
  },
  trampa:'Invertir los efectos de la aldosterona sobre sodio y potasio, o confundir su papel con el de la ADH.',
  obj:'Describir el mecanismo de acción de la aldosterona sobre el manejo tubular de electrolitos.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['aldosterona','reabsorción de sodio','secreción de potasio','túbulo distal']
},
{
  id:'U8-F-Q24', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Compensación ácido-base', sub:'Velocidad respiratoria vs. renal',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente desarrolla una acidosis metabólica aguda por acumulación de ácido láctico tras un episodio de shock. Horas después, la gasometría muestra una PaCO2 baja, compatible con hiperventilación compensatoria.',
  enunciado:'¿Por qué la compensación observada en este caso es respiratoria y no renal?',
  ops:[
    'Porque la compensación renal habría sido igual de rápida, pero simplemente no ocurrió',
    'Porque ante un trastorno metabólico primario, la compensación respiratoria es rápida (horas), mientras que la compensación renal (regeneración de bicarbonato) toma días',
    'Porque el riñón nunca compensa trastornos ácido-base',
    'Porque la compensación respiratoria y la renal ocurren siempre exactamente al mismo tiempo'
  ],
  ok:1,
  clave:'La compensación respiratoria de un trastorno metabólico es rápida (horas); la compensación renal es mucho más lenta (días).',
  exp:'Ante un trastorno ácido-base primario METABÓLICO (como la acidosis láctica de este caso), la compensación es respiratoria y RÁPIDA: el centro respiratorio, estimulado por la acidosis, aumenta la ventilación para "soplar" más CO2 y elevar el pH de vuelta, un proceso que se establece en horas. La compensación renal (ajuste de la reabsorción y regeneración de bicarbonato) es mucho más lenta, tomando días en alcanzar su efecto completo -por eso, en un cuadro tan agudo como el descrito (horas de evolución), la compensación observada es respiratoria, no renal, que todavía no ha tenido tiempo de desarrollarse.',
  no:{
    0:'La compensación renal no habría sido igual de rápida; es intrínsecamente más lenta (días) que la respiratoria (horas), independientemente de si ocurrió o no en este momento.',
    2:'El riñón sí compensa trastornos ácido-base, pero de forma más lenta, ajustando la reabsorción y regeneración de bicarbonato a lo largo de días.',
    3:'Ambas compensaciones tienen velocidades muy distintas entre sí; no ocurren al mismo tiempo, precisamente por esa diferencia de velocidad.'
  },
  trampa:'No distinguir la velocidad característica de cada tipo de compensación (respiratoria rápida, renal lenta), lo cual es clave para interpretar si un cuadro es agudo o ya tiene tiempo de evolución.',
  obj:'Explicar la diferencia de velocidad entre la compensación respiratoria y la renal ante un trastorno ácido-base metabólico.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['compensación respiratoria','compensación renal','acidosis metabólica','velocidad de compensación']
},
{
  id:'U8-F-Q25', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Anión gap', sub:'Acidosis con gap elevado',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con cetoacidosis diabética presenta acidosis metabólica con un anión gap marcadamente elevado.',
  enunciado:'¿Qué explica el anión gap elevado en este cuadro?',
  ops:[
    'La pérdida directa de bicarbonato, sin acumulación de ningún ácido adicional',
    'La acumulación de cuerpos cetónicos (un ácido no medido habitualmente), cuyo consumo de bicarbonato no se reemplaza proporcionalmente por cloro',
    'Un aumento simple del sodio plasmático, sin relación con ningún ácido',
    'El anión gap nunca cambia en la cetoacidosis diabética'
  ],
  ok:1,
  clave:'Los cuerpos cetónicos, un ácido no medido, elevan el anión gap al consumir bicarbonato sin reemplazo proporcional por cloro.',
  exp:'Una acidosis metabólica con anión gap elevado sugiere la acumulación de un ácido no medido habitualmente en el panel de electrolitos, como los cuerpos cetónicos en la cetoacidosis diabética. El bicarbonato consumido para amortiguar ese ácido no se reemplaza proporcionalmente por cloro (a diferencia de lo que ocurre en una acidosis con anión gap normal), así que la diferencia entre sodio y la suma de cloro más bicarbonato (el anión gap) aumenta, reflejando la presencia de ese anión no medido (los propios cuerpos cetónicos) en el plasma.',
  no:{
    0:'La pérdida directa de bicarbonato sin acumulación de un ácido adicional produce típicamente una acidosis con anión gap NORMAL (hiperclorémica), no elevado, como en la diarrea.',
    2:'El anión gap elevado en la cetoacidosis se explica por la acumulación de cuerpos cetónicos, no por un cambio simple en el sodio plasmático.',
    3:'El anión gap sí cambia característicamente (se eleva) en la cetoacidosis diabética, siendo un hallazgo típico y esperado de este cuadro.'
  },
  trampa:'No conectar la acumulación de un ácido específico (cuerpos cetónicos) con el mecanismo que eleva el anión gap, o confundirlo con el mecanismo de una acidosis con anión gap normal.',
  obj:'Explicar el mecanismo del anión gap elevado en la cetoacidosis diabética.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['anión gap','cetoacidosis diabética','cuerpos cetónicos','acidosis metabólica']
},
{
  id:'U8-F-Q26', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Anión gap', sub:'Acidosis normal (hiperclorémica)',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con diarrea severa desarrolla acidosis metabólica con anión gap NORMAL.',
  enunciado:'¿Qué mecanismo explica que el anión gap se mantenga normal en este caso, a diferencia de la cetoacidosis?',
  ops:[
    'Porque en la diarrea se pierde bicarbonato directamente por vía intestinal, y esa pérdida se compensa proporcionalmente con retención de cloro, sin acumulación de ningún ácido no medido',
    'Porque la diarrea nunca causa acidosis metabólica',
    'Porque en la diarrea se acumulan grandes cantidades de cuerpos cetónicos, igual que en la cetoacidosis',
    'El anión gap siempre se eleva en cualquier tipo de acidosis metabólica, sin excepción'
  ],
  ok:0,
  clave:'La diarrea pierde bicarbonato directamente, compensado proporcionalmente por retención de cloro: anión gap normal (hiperclorémica).',
  exp:'En la diarrea severa, se pierde bicarbonato directamente por vía intestinal (en las secreciones digestivas), sin que se acumule ningún ácido adicional no medido. Ese bicarbonato perdido se reemplaza proporcionalmente por retención de cloro (para mantener la electroneutralidad plasmática), produciendo una acidosis metabólica con anión gap NORMAL, también llamada acidosis hiperclorémica -un patrón distinto al de la cetoacidosis diabética, donde el bicarbonato se consume amortiguando un ácido no medido (cuerpos cetónicos) sin ese reemplazo proporcional por cloro.',
  no:{
    1:'La diarrea sí puede causar acidosis metabólica, precisamente por la pérdida directa de bicarbonato en las secreciones intestinales.',
    2:'La diarrea no se asocia a acumulación de cuerpos cetónicos; ese es el mecanismo específico de la cetoacidosis diabética, un cuadro distinto.',
    3:'No siempre se eleva: la acidosis por pérdida directa de bicarbonato (como en la diarrea) característicamente cursa con anión gap NORMAL, no elevado.'
  },
  trampa:'Asumir que toda acidosis metabólica cursa con anión gap elevado, sin reconocer la categoría de acidosis con anión gap normal (hiperclorémica), de mecanismo distinto.',
  obj:'Explicar el mecanismo de la acidosis metabólica con anión gap normal (hiperclorémica) por pérdida digestiva de bicarbonato.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['anión gap normal','acidosis hiperclorémica','diarrea','pérdida de bicarbonato']
},
{
  id:'U8-F-Q27', programa:'unirm', cuatri:8,
  esp:'Fisiología II', tema:'Filtración glomerular', sub:'Aclaramiento de creatinina',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el aclaramiento de creatinina, usado en la práctica clínica habitual, tiende a SOBREESTIMAR ligeramente la verdadera tasa de filtración glomerular?',
  ops:[
    'Porque la creatinina no se filtra en absoluto en el glomérulo',
    'Porque, además de filtrarse libremente, la creatinina se secreta en una pequeña proporción adicional en el túbulo, añadiendo más creatinina a la orina de la que corresponde solo a la filtración',
    'Porque la creatinina se reabsorbe completamente en el túbulo proximal',
    'Porque el aclaramiento de creatinina siempre subestima, nunca sobreestima, la filtración glomerular'
  ],
  ok:1,
  clave:'La secreción tubular adicional de creatinina añade más creatinina a la orina de la que corresponde solo a la filtración, sobreestimando la TFG.',
  exp:'Para que el aclaramiento de una sustancia refleje exactamente la tasa de filtración glomerular, esa sustancia debe filtrarse libremente y NO reabsorberse ni secretarse en el túbulo. La creatinina se filtra libremente, pero además se secreta en una pequeña proporción adicional en el túbulo, lo que añade más creatinina a la orina de la que correspondería solo a la filtración glomerular. Esto hace que el aclaramiento de creatinina calculado sobreestime ligeramente la verdadera tasa de filtración glomerular -una limitación conocida, pero suficientemente pequeña como para que la creatinina siga siendo una aproximación clínica razonable y práctica.',
  no:{
    0:'La creatinina sí se filtra libremente en el glomérulo; ese es precisamente el fundamento de usarla para estimar la filtración.',
    2:'La creatinina no se reabsorbe en el túbulo; el problema para la precisión de la estimación es más bien su pequeña secreción tubular adicional.',
    3:'El aclaramiento de creatinina tiende a SOBREESTIMAR (no subestimar) la filtración glomerular, precisamente por esa secreción tubular adicional.'
  },
  trampa:'No identificar la secreción tubular adicional de creatinina como la razón específica de la sobreestimación de la tasa de filtración glomerular.',
  obj:'Explicar por qué el aclaramiento de creatinina sobreestima ligeramente la tasa de filtración glomerular real.',
  ref:'Guyton y Hall, Fisiología Médica. Boron y Boulpaep, Fisiología Médica.',
  tags:['aclaramiento de creatinina','secreción tubular','tasa de filtración glomerular','inulina']
}

]);
