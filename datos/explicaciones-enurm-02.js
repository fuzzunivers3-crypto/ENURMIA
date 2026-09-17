/* ============================================================
   EXPLICACIONES ENURM — lote 2  (25 preguntas)
   Segundo lote sobre el banco de examenes REALES del ENURM
   dominicano (2021 y 2022). Respuesta y bibliografia oficiales
   (resaltado amarillo del PDF de la UASD); lo que se anade aqui
   es el razonamiento.

   Seleccionado con herramientas_seleccionar_enurm.py, que reparte
   por especialidad dando prioridad a las que menos cobertura
   tienen y prefiere las preguntas con caso clinico sobre las
   directas dentro de cada una.

   Varias entradas de este lote llegaron con la clasificacion
   automatica equivocada (por ejemplo, preguntas de manejo
   quirurgico de derrame pleural etiquetadas como "Bioetica" solo
   porque la palabra clave que las agarro no encajaba en ningun
   patron mejor). Se corrige aqui `esp`, como en el resto del
   proyecto.
   ============================================================ */
window.EXPLICACIONES = Object.assign(window.EXPLICACIONES || {}, {

/* ==================== NEUMOLOGÍA / MEDICINA INTERNA ==================== */
'ENURM-2021-B074': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Enfermedad pulmonar intersticial',
  clave:'Disnea progresiva + tos seca + patrón RETICULAR bibasal: enfermedad pulmonar intersticial.',
  exp:'El patrón que describe el caso es el clásico de la *enfermedad pulmonar intersticial (EPI)*: un anciano con *disnea de esfuerzo progresiva* que se instala a lo largo de meses, *tos seca* (no productiva, a diferencia de los procesos infecciosos o supurativos), y una radiografía con *patrón reticular*, es decir, un entramado de líneas finas que refleja el engrosamiento del intersticio pulmonar por fibrosis o inflamación crónica. La distribución *bibasal* es típica de las neumonías intersticiales idiopáticas, sobre todo de la fibrosis pulmonar idiopática, que predomina en las bases y en la periferia subpleural. El diagnóstico definitivo requiere tomografía de alta resolución (que muestra el patrón en "panal de abejas" en los casos avanzados) y a veces biopsia, pero el cuadro clínico-radiológico descrito ya apunta con fuerza hacia esta familia de enfermedades.',
  no:{0:'La neumonía bacteriana es aguda, con fiebre y consolidación alveolar (opacidad homogénea), no un patrón reticular de instalación progresiva.',2:'La EPOC da hiperinsuflación y atrapamiento aéreo en la radiografía, con historia de tabaquismo y disnea que empeora con las exacerbaciones, no un patrón reticular bibasal.',3:'El asma bronquial cursa con broncoespasmo reversible y radiografía habitualmente normal entre las crisis; no produce cambios intersticiales fijos.'},
  trampa:'Confundir "patrón reticular" con cualquier opacidad pulmonar. El reticular es específicamente el signo radiológico del compromiso intersticial, distinto del alveolar (consolidación) o del obstructivo (hiperinsuflación).',
  dx:['Neumonía bacteriana atípica','EPOC','Insuficiencia cardíaca con edema intersticial'],
  obj:'Reconocer el patrón clínico-radiológico de la enfermedad pulmonar intersticial.',
  ref:'ENURM 2021-B, pregunta 74. Bibliografía oficial: Harrison, Principios de Medicina Interna, 19ª ed., cap. 315, pág. 1709.'
},

/* ==================== CIRUGÍA TORÁCICA (mal clasificada como Bioética) ==================== */
'ENURM-2022-A087': {
  esp:'Cirugía', tema:'Cirugía torácica', sub:'Derrame pleural maligno',
  clave:'Derrame pleural maligno sintomático recurrente: sonda de toracostomía + pleurodesis.',
  exp:'El *derrame pleural maligno* recidiva casi siempre si solo se drena una vez, porque la causa (la infiltración tumoral de la pleura) sigue produciendo líquido. Por eso, cuando el derrame es *sintomático* (con disnea que compromete la calidad de vida) y se espera que recidive, el manejo estándar no es solo evacuarlo sino *obliterar el espacio pleural*: se coloca una *sonda de toracostomía* para drenar por completo el líquido y lograr la reexpansión pulmonar, y a través de esa misma sonda se instila una *sustancia esclerosante* (talco es la más usada, aunque también bleomicina o doxiciclina) que produce una inflamación controlada de las dos hojas pleurales para que se adhieran entre sí: eso es la *pleurodesis*. El objetivo no es curativo sino *paliativo*: evitar que el líquido vuelva a acumularse y aliviar la disnea del paciente el tiempo que le quede de vida.',
  no:{0:'La toracotomía con pleurectomía es un procedimiento mayor, más invasivo, reservado para casos que fallan a la pleurodesis o en pacientes con buen pronóstico funcional; no es la primera línea.',1:'Los diuréticos pueden ayudar en derrames de causa cardíaca o por sobrecarga de volumen, pero no tienen ningún efecto sobre un derrame producido por infiltración tumoral directa de la pleura.',2:'La quimioterapia sistémica trata el tumor de fondo, pero no controla de forma fiable ni rápida la reacumulación local del líquido pleural; no sustituye al manejo local paliativo.'},
  trampa:'Pensar el derrame maligno como un derrame más y tratarlo solo con toracocentesis simple. Sin pleurodesis, la reacumulación es la regla, no la excepción.',
  dx:['Tratamiento del derrame pleural de causa cardíaca'],
  obj:'Indicar el manejo estándar del derrame pleural maligno sintomático y recurrente.',
  ref:'ENURM 2022-A, pregunta 87. Bibliografía oficial: Schwartz, Principios de Cirugía, 10ª ed., cap. 19, pág. 682.'
},

/* ==================== CIENCIAS BÁSICAS ==================== */
'ENURM-2021-C003': {
  esp:'Ciencias Básicas', tema:'Histología', sub:'Absorción intestinal',
  clave:'Las VELLOSIDADES son la principal estructura de absorción del intestino delgado.',
  exp:'El intestino delgado amplifica su superficie de absorción con tres niveles de plegamiento, y la pregunta pide identificar cuál de ellos es el *principal*. Los *pliegues circulares* (válvulas conniventes) son repliegues macroscópicos de la mucosa y submucosa, visibles a simple vista, que aumentan la superficie unas tres veces. Sobre esos pliegues se levantan las *vellosidades intestinales*, proyecciones digitiformes de la mucosa de aproximadamente 0.5 a 1 mm, que multiplican la superficie unas diez veces más: son la unidad funcional de absorción, cada una tapizada por enterocitos con su borde en cepillo. Y sobre la membrana apical de cada enterocito están las *microvellosidades*, que forman el borde en cepillo y aportan otro incremento de superficie de unas veinte veces. Aunque las microvellosidades dan el mayor incremento porcentual individual, la vellosidad es la estructura considerada *principal* porque es la unidad histológica completa que organiza el epitelio absortivo (enterocitos, células caliciformes, capilares y vaso quilífero central); las microvellosidades son un componente de la vellosidad, no una estructura independiente.',
  no:{0:'Las microvellosidades son el componente ultraestructural del borde en cepillo de cada enterocito, parte de la vellosidad, no la estructura principal considerada de forma aislada.',2:'Los pliegues circulares son el primer nivel de plegamiento, macroscópico, pero aportan menos amplificación de superficie que las vellosidades.',3:'Los cilios son estructuras móviles propias del epitelio respiratorio y de las trompas uterinas; el intestino delgado no los tiene.'},
  trampa:'Confundir vellosidad con microvellosidad por el parecido del nombre. Son estructuras a escalas distintas: la vellosidad se ve con lupa, la microvellosidad solo con microscopio electrónico.',
  dx:[],
  obj:'Jerarquizar los tres niveles de amplificación de la superficie absortiva del intestino delgado.',
  ref:'ENURM 2021-C, pregunta 3. Bibliografía oficial: Ross y Pawlina, Histología: Texto y Atlas, 7ª ed., Wolters Kluwer, cap. 17, pág. 618.'
},

'ENURM-2021-C069': {
  esp:'Ciencias Básicas', tema:'Microbiología', sub:'Tétanos',
  clave:'Espasmo muscular + disfunción autonómica, prevenible por completo con vacuna: tétanos.',
  exp:'El enunciado da tres pistas que apuntan juntas al *tétanos*: una *neurotoxina potente* producida por una bacteria concreta (*Clostridium tetani*), un cuadro de *espasmo del músculo estriado* y *disfunción del sistema nervioso autónomo*, y el dato de que es *prevenible por completo con vacunación*. La toxina responsable es la *tetanospasmina*, que viaja en retrógrado por los axones motores hasta la médula espinal y el tronco encefálico, donde bloquea la liberación de neurotransmisores inhibitorios (GABA y glicina) en las interneuronas espinales. Al perderse esa inhibición, las motoneuronas quedan en descarga continua: de ahí el espasmo muscular generalizado, que clásicamente empieza como trismo (rigidez de la mandíbula) y progresa a rigidez generalizada y espasmos dolorosos. La afectación autonómica (labilidad de la presión arterial, taquicardia, sudoración profusa) ocurre porque la toxina también desinhibe el sistema simpático. La vacuna toxoide tetánico es altamente eficaz y forma parte del esquema nacional de inmunización, lo que explica por qué hoy el tétanos es raro en poblaciones bien vacunadas.',
  no:{0:'El botulismo también es producido por una toxina de Clostridium (botulinum), pero produce parálisis FLÁCIDA descendente, no espasmo, por bloquear la liberación de acetilcolina en la placa motora.',2:'La meningitis es una infección del sistema nervioso central con fiebre, cefalea y rigidez de nuca, pero no es prevenible "por completo" con una sola vacuna ni actúa por una neurotoxina de Clostridium.',3:'La acromegalia es un trastorno endocrino por exceso de hormona de crecimiento, sin relación con toxinas bacterianas ni con espasmo muscular agudo.'},
  trampa:'Confundir tétanos con botulismo porque ambos son producidos por especies de Clostridium y ambos son neurotoxinas. La clave para diferenciarlos es el tipo de compromiso motor: espasmo (tétanos) frente a parálisis flácida (botulismo).',
  dx:['Botulismo'],
  obj:'Relacionar el mecanismo de la tetanospasmina con el cuadro clínico de espasmo muscular y disautonomía.',
  ref:'ENURM 2021-C, pregunta 69. Bibliografía oficial: Harrison, Principios de Medicina Interna, 19ª ed., cap. 177, pág. 984.'
},

'ENURM-2022-C018': {
  esp:'Ciencias Básicas', tema:'Fisiología', sub:'Factor intrínseco',
  clave:'Glucoproteína gástrica cuya secreción acompaña al ácido clorhídrico: factor intrínseco de Castle.',
  exp:'El *factor intrínseco de Castle* es una glucoproteína secretada por las mismas *células parietales* del fondo y cuerpo gástricos que producen el ácido clorhídrico, y su secreción está regulada de forma paralela a la de este: los mismos estímulos (acetilcolina, gastrina, histamina) que activan la bomba de protones también estimulan la liberación del factor intrínseco. Su función es indispensable y no tiene relación con el hierro: se une a la *vitamina B12* dietética en el intestino delgado, protegiéndola de la degradación digestiva, y ese complejo factor intrínseco-B12 es reconocido por receptores específicos (cubilina) en el íleon terminal para su absorción. Cuando las células parietales se destruyen, como en la *gastritis atrófica autoinmune*, se pierde tanto la secreción ácida como la del factor intrínseco, y el resultado es la incapacidad de absorber B12: la *anemia perniciosa*.',
  no:{1:'La hepcidina es una hormona hepática que regula la absorción y liberación de hierro; no tiene relación con la célula parietal ni con la vitamina B12.',2:'La ferritina es la proteína de depósito intracelular de hierro; se mide en sangre como marcador de las reservas de hierro, no la secretan las células parietales.',3:'La transferrina es la proteína plasmática que transporta el hierro; tampoco se relaciona con la secreción gástrica ni con la B12.'},
  trampa:'Las tres opciones incorrectas son proteínas del metabolismo del HIERRO, y es facil confundirlas con el factor intrínseco si no se recuerda que este es especifico para la vitamina B12.',
  dx:[],
  obj:'Relacionar la célula parietal con sus dos secreciones (ácido clorhídrico y factor intrínseco) y la función de este último.',
  ref:'ENURM 2022-C, pregunta 18. Bibliografía oficial: Harrison, Principios de Medicina Interna, 19ª ed., cap. 128, pág. 640.'
},

/* ==================== CIRUGÍA ==================== */
'ENURM-2021-A003': {
  esp:'Cirugía', tema:'Cirugía torácica', sub:'Nódulo pulmonar solitario',
  clave:'Lesión ≤3 cm, bien circunscrita, rodeada de pulmón aireado normal, sin atelectasia ni derrame: nódulo pulmonar solitario.',
  exp:'La definición de *nódulo pulmonar solitario* es precisamente la que describe el caso, y el enunciado la construye punto por punto: una lesión *única*, *esférica*, de *bordes bien definidos*, de *3 cm de diámetro o menos* (por encima de ese tamaño se llama masa pulmonar, no nódulo, y el manejo diagnóstico cambia), *completamente rodeada de tejido pulmonar aireado normal* (es decir, sin estar pegada a la pleura ni al mediastino), y *sin* signos asociados de enfermedad más extensa como atelectasia, crecimiento del hilio o derrame pleural. Esta definición importa clínicamente porque el nódulo pulmonar solitario tiene un espectro de causas amplio, desde granulomas benignos (la causa más frecuente) hasta un carcinoma en etapa temprana, y su manejo depende de estratificar el riesgo según el tamaño, los bordes, la tasa de crecimiento en controles seriados y los factores de riesgo del paciente (edad, tabaquismo).',
  no:{0:'El carcinoma microcítico (célula pequeña) tiende a presentarse como una masa central grande con adenopatías, no como un nódulo pequeño bien circunscrito y aislado.',1:'"Pseudotumor pulmonar" no es una entidad diagnóstica estándar; el término no corresponde a la definición formal que describe el caso.',2:'El timoma es un tumor del mediastino anterior, no del parénquima pulmonar rodeado de tejido aireado.'},
  trampa:'Confundir "nódulo" con "masa" pulmonar. El límite de 3 cm es el que separa ambas categorías y el que cambia el enfoque diagnóstico.',
  dx:[],
  obj:'Reconocer los criterios formales que definen un nódulo pulmonar solitario.',
  ref:'ENURM 2021-A, pregunta 3. Bibliografía oficial: Brunicardi, Schwartz, Principios de Cirugía, 10ª ed., McGraw-Hill.'
},

'ENURM-2021-A008': {
  esp:'Cirugía', tema:'Abdomen agudo', sub:'Signo de Rovsing',
  clave:'Dolor en fosa ilíaca derecha al palpar la izquierda: signo de Rovsing, apendicitis aguda.',
  exp:'El *signo de Rovsing* es positivo cuando la palpación de la *fosa ilíaca izquierda* provoca dolor referido en la *fosa ilíaca derecha*. El mecanismo es mecánico: al comprimir el colon descendente y sigmoides, el gas y el contenido intestinal se desplazan en sentido retrógrado a través del marco cólico hasta el ciego, y esa distensión súbita del ciego irrita el peritoneo parietal adyacente al apéndice inflamado, generando dolor a distancia. Es uno de los signos exploratorios clásicos de *apendicitis aguda*, junto con el signo de Blumberg (dolor a la descompresión), el signo del psoas (dolor al extender la cadera derecha en decúbito lateral izquierdo, que indica irritación retrocecal) y el signo del obturador (dolor a la rotación interna de la cadera flexionada, que indica un apéndice pélvico). Ninguno de estos signos es sensible ni específico por sí solo, pero su combinación con el cuadro clínico (dolor migratorio de epigastrio a fosa ilíaca derecha, anorexia, febrícula) sostiene el diagnóstico clínico de apendicitis.',
  no:{0:'El signo de Murphy se explora en el hipocondrio derecho, con la mano bajo el reborde costal mientras el paciente inspira: interrupción de la inspiración por dolor, típico de colecistitis, no de apendicitis.',1:'El signo del obturador explora la irritación de un apéndice de localización pélvica mediante la rotación interna de la cadera flexionada, un mecanismo distinto al descrito en el caso.',3:'El signo del Psoas explora la irritación de un apéndice retrocecal mediante la extensión de la cadera; tampoco corresponde al hallazgo de dolor contralateral que describe el caso.'},
  trampa:'Confundir los distintos signos exploratorios de la apendicitis entre sí porque todos buscan lo mismo (irritación peritoneal). Cada uno se distingue por la MANIOBRA exacta que lo provoca.',
  dx:[],
  obj:'Identificar el signo de Rovsing y su mecanismo fisiopatológico en la apendicitis aguda.',
  ref:'ENURM 2021-A, pregunta 8. Bibliografía oficial: Schwartz, Principios de Cirugía, 10ª ed., pág. 1244.'
},

'ENURM-2021-A020': {
  esp:'Cirugía', tema:'Cirugía hepatobiliar', sub:'Lesión de vías biliares',
  clave:'Transaminasas elevadas: el hallazgo más temprano de lesión de vía biliar tras colecistectomía.',
  exp:'La lesión de la vía biliar es la complicación más temida de la colecistectomía, y detectarla *temprano* cambia el pronóstico, porque cuanto antes se reconozca, más simple y efectiva es la reparación. De las opciones, las *transaminasas elevadas* son el hallazgo que aparece primero, porque reflejan la obstrucción o la fuga del flujo biliar casi de inmediato a nivel hepatocelular, incluso antes de que el paciente desarrolle manifestaciones clínicas evidentes. El *dolor abdominal* y la *fiebre* sí pueden aparecer, pero son más tardíos e inespecíficos (pueden deberse a cualquier complicación posquirúrgica, no solo a la biliar), y la *esteatorrea* es una manifestación crónica, resultado de la malabsorción de grasas por falta prolongada de bilis en el intestino, que tarda semanas en desarrollarse y no sirve para una detección temprana.',
  no:{0:'La esteatorrea refleja malabsorción crónica de grasas por ausencia prolongada de bilis intestinal: es un hallazgo tardío, no temprano.',2:'El dolor abdominal es inespecífico en el postoperatorio y puede deberse a múltiples causas, no exclusivamente a una lesión de vía biliar.',3:'La fiebre también es inespecífica y de aparición más tardía, cuando ya hay colección, colangitis o peritonitis biliar establecidas.'},
  trampa:'Buscar los signos clínicos "clásicos" de complicación quirúrgica (dolor, fiebre) en vez del marcador de laboratorio que se altera primero.',
  dx:[],
  obj:'Reconocer las transaminasas elevadas como el hallazgo más precoz de lesión de vía biliar tras colecistectomía.',
  ref:'ENURM 2021-A, pregunta 20. Bibliografía oficial: Schwartz, Principios de Cirugía, 10ª ed., pág. 1333.'
},

'ENURM-2021-A081': {
  esp:'Cirugía', tema:'Cirugía hepatobiliar', sub:'Coledocolitiasis',
  clave:'Colangitis aguda con cálculo en el colédoco distal: CPRE, drenaje endoscópico urgente.',
  exp:'La *colangitis aguda* es una infección de la vía biliar por obstrucción, generalmente por un cálculo enclavado en el colédoco, y es una urgencia porque la combinación de obstrucción más infección puede progresar rápidamente a sepsis y shock séptico. El tratamiento definitivo no es solo antibiótico: requiere *descomprimir la vía biliar* con la mayor brevedad posible, y el método de elección para lograrlo cuando el cálculo está en el colédoco distal es la *colangiopancreatografía retrógrada endoscópica (CPRE)*, que permite hacer una esfinterotomía endoscópica y extraer el cálculo (o dejar un stent si no se puede extraer de inmediato) en el mismo procedimiento diagnóstico y terapéutico, minimizando la morbilidad frente a una cirugía abierta en un paciente séptico.',
  no:{0:'La colecistectomía trata la vesícula, no descomprime la vía biliar obstruida; en un paciente con colangitis aguda, la prioridad es drenar el colédoco primero.',1:'La punción percutánea con catéter (drenaje transhepático) se reserva para cuando la CPRE no está disponible o falla, no como primera línea si el acceso endoscópico es factible.',2:'La esfinterotomía transduodenal es un procedimiento quirúrgico abierto, mucho más invasivo, que ha sido reemplazado por el abordaje endoscópico como primera línea.'},
  trampa:'Pensar en la colecistectomía como el tratamiento inmediato. En la colangitis aguda la prioridad es descomprimir la vía biliar; la colecistectomía puede diferirse.',
  dx:[],
  obj:'Indicar la CPRE como manejo de elección en la colangitis aguda por coledocolitiasis distal.',
  ref:'ENURM 2021-A, pregunta 81. Bibliografía oficial: Sabiston, Tratado de Cirugía, 19ª ed., Elsevier Saunders, cap. 55, pág. 1483.'
},

/* ==================== EMERGENCIAS ==================== */
'ENURM-2021-A004': {
  esp:'Emergencias', tema:'Trauma torácico', sub:'Taponamiento cardíaco',
  clave:'Herida penetrante en tórax izquierdo, hipotensión, disnea, MURMULLO VESICULAR CONSERVADO bilateral: taponamiento cardíaco.',
  exp:'El dato que decide esta pregunta es negativo, y por eso es fácil pasarlo por alto: el *murmullo vesicular está presente y bilateral*. Ante un trauma penetrante de tórax con inestabilidad hemodinámica, el primer reflejo es pensar en neumotórax o hemotórax, pero ambos producen *disminución o abolición* del murmullo vesicular del lado afectado, porque el pulmón colapsa (aire) o queda comprimido por sangre. Si el murmullo vesicular está conservado en ambos lados, eso aleja esos dos diagnósticos y dirige la atención hacia una causa de shock que no compromete directamente el parénquima pulmonar: el *taponamiento cardíaco*. La herida penetrante en el hemitórax izquierdo, en la zona precordial, es anatómicamente compatible con una lesión cardíaca que sangra hacia el saco pericárdico; como el pericardio es una membrana fibrosa poco distensible, un volumen relativamente pequeño de sangre basta para comprimir las cavidades cardíacas, reducir el llenado diastólico y producir hipotensión con gasto cardíaco bajo, exactamente el cuadro del caso.',
  no:{0:'El neumotórax a tensión daría disminución o ausencia del murmullo vesicular del lado afectado, además de desviación traqueal y distensión de venas del cuello; no es compatible con murmullo bilateral conservado.',1:'El quilotórax es una acumulación de linfa en el espacio pleural, de instalación gradual, no una causa de shock agudo tras trauma penetrante inmediato.',3:'El hemotórax masivo también reduciría el murmullo vesicular del lado afectado por la sangre ocupando el espacio pleural, lo que no encaja con el hallazgo descrito.'},
  trampa:'Anclarse en "trauma penetrante de tórax = neumotórax o hemotórax" sin verificar el examen físico completo. El murmullo vesicular conservado es la pista que descarta ambos y apunta al corazón.',
  dx:['Neumotórax a tensión','Hemotórax masivo'],
  obj:'Usar el examen físico pulmonar para diferenciar taponamiento cardíaco de neumotórax o hemotórax en el trauma torácico penetrante.',
  ref:'ENURM 2021-A, pregunta 4. Bibliografía oficial: Schwartz, Principios de Cirugía, 10ª ed., McGraw Hill, 2015, cap. 7, pág. 167.'
},

'ENURM-2021-A017': {
  esp:'Emergencias', tema:'Abdomen agudo', sub:'Diverticulitis aguda',
  clave:'Sospecha de diverticulitis: tomografía axial computarizada, el estudio de elección.',
  exp:'Cuando se sospecha *diverticulitis aguda*, la *tomografía axial computarizada (TAC) con contraste* es el estudio de elección para confirmar el diagnóstico y, sobre todo, para *estadificar la gravedad*, que es lo que realmente decide el manejo. La TAC permite ver el engrosamiento de la pared del colon, la inflamación de la grasa pericólica, y, de forma crucial, las complicaciones: absceso, perforación cubierta, fístula o peritonitis franca. Esa estadificación (clasificación de Hinchey) es la que distingue entre un manejo conservador con antibióticos y observación frente a la necesidad de drenaje percutáneo o cirugía urgente. Los estudios con medio de contraste por vía rectal (como el enema baritado) están *contraindicados* en la fase aguda, porque el aumento de presión intraluminal puede provocar la perforación de un divertículo ya inflamado.',
  no:{0:'Los estudios radiológicos con medios de contraste por vía rectal están contraindicados en la fase aguda por el riesgo de perforar un divertículo inflamado con el aumento de presión.',1:'La ecografía abdomino-pélvica puede orientar, pero es más operador-dependiente y menos precisa que la TAC para estadificar la extensión y las complicaciones.',3:'La gammagrafía no tiene un rol establecido en el diagnóstico agudo de diverticulitis; es un estudio funcional, no anatómico, y no permite ver las complicaciones locales.'},
  trampa:'Pensar que cualquier estudio de imagen "sirve" sin considerar que algunos, como el enema con contraste, están formalmente contraindicados en la fase aguda por el riesgo de perforación.',
  dx:[],
  obj:'Indicar la TAC como estudio de elección para diagnosticar y estadificar la diverticulitis aguda.',
  ref:'ENURM 2021-A, pregunta 17. Bibliografía oficial: Schwartz, Principios de Cirugía, 10ª ed., cap. 29, pág. 1201.'
},

/* ==================== EPIDEMIOLOGÍA ==================== */
'ENURM-2022-A069': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Bronquiectasias',
  clave:'Tos productiva crónica con esputo abundante, dedos hipocráticos, vías dilatadas en TAC: bronquiectasias.',
  exp:'El cuadro describe con precisión la *bronquiectasia*: una dilatación *permanente e irreversible* de los bronquios, causada por un ciclo de infección-inflamación-daño de la pared bronquial que destruye el músculo y el cartílago de sostén. Clínicamente se manifiesta con *tos productiva crónica*, con esputo *abundante, espeso y purulento*, sobre todo por las mañanas (por el acúmulo de secreciones durante la noche en decúbito), *estertores* y *sibilancias* a la auscultación por el moco retenido en las vías dilatadas, y con el tiempo, *dedos hipocráticos* (acropaquia) por la hipoxemia crónica de bajo grado y la inflamación sistémica sostenida. El hallazgo confirmatorio es la TAC de alta resolución, que muestra *vías respiratorias dilatadas*, con un diámetro mayor al de la arteria pulmonar adyacente (signo del anillo de sello) y *bronquios ensanchados* que no se afilan hacia la periferia como deberían.',
  no:{0:'La neumonía bacteriana es un proceso agudo con fiebre y consolidación, no un cuadro de tos productiva crónica con dilatación bronquial fija en la TAC.',2:'El pulmón del granjero es una neumonitis por hipersensibilidad a antígenos orgánicos inhalados (hongos del heno), que da un patrón intersticial, no vías dilatadas.',3:'El síndrome de Löffler es una eosinofilia pulmonar transitoria, generalmente por migración de parásitos, con infiltrados fugaces, no bronquiectasias fijas.'},
  trampa:'Confundir la tos productiva crónica de las bronquiectasias con la de la bronquitis crónica del EPOC. El dato que las separa es la imagen: dilatación bronquial permanente en la TAC.',
  dx:['Bronquitis crónica (EPOC)','Fibrosis quística'],
  obj:'Reconocer el cuadro clínico-radiológico de las bronquiectasias.',
  ref:'ENURM 2022-A, pregunta 69. Bibliografía oficial: Harrison, Principios de Medicina Interna, 19ª ed., cap. 312, pág. 1695.'
},

'ENURM-2022-A073': {
  esp:'Epidemiología', tema:'Infectología', sub:'Resfriado común por coronavirus',
  clave:'Los coronavirus estacionales causan entre el 15 y el 35% de los resfriados comunes.',
  exp:'Antes de que el término "coronavirus" se asociara casi exclusivamente al SARS-CoV-2, ya existían *coronavirus estacionales* (como el 229E, OC43, NL63 y HKU1) circulando de forma endémica en la población, y son responsables de una fracción importante de los *resfriados comunes*, junto con los rinovirus (la causa más frecuente) y otros virus respiratorios. Epidemiológicamente, estos coronavirus estacionales explican entre el *15 y el 35%* de los casos de resfriado común, con un patrón claramente *estacional*: predominan en los meses fríos (finales de otoño, invierno y principios de primavera), coincidiendo con el mayor hacinamiento en espacios cerrados y las condiciones ambientales que favorecen la transmisión respiratoria. Este dato epidemiológico cobra relevancia clínica porque recuerda que "coronavirus" no es sinónimo de COVID-19: es una familia viral amplia con miembros que circulan de forma habitual y generalmente benigna.',
  no:{0:'5 a 15% subestima la contribución real de los coronavirus estacionales al total de resfriados comunes.',1:'10 a 25% se acerca más pero todavía queda por debajo del rango que reporta la bibliografía oficial de referencia.',3:'20 a 45% sobreestima ligeramente el rango reportado, que llega hasta 35% como límite superior.'},
  trampa:'Subestimar el peso de los coronavirus "comunes" por asociar automáticamente el nombre solo al SARS-CoV-2. Son una causa establecida y frecuente del resfriado común desde mucho antes de la pandemia.',
  dx:[],
  obj:'Conocer el porcentaje de resfriados comunes atribuibles a coronavirus estacionales y su patrón epidemiológico.',
  ref:'ENURM 2022-A, pregunta 73. Bibliografía oficial: Harrison, Principios de Medicina Interna, 19ª ed., pág. 1204.'
},

/* ==================== FARMACOLOGÍA ==================== */
'ENURM-2021-B070': {
  esp:'Farmacología', tema:'Asma', sub:'Terapia controladora',
  clave:'Uso de rescate más de 2 veces por semana: indicación de iniciar un controlador (corticosteroide inhalado).',
  exp:'El manejo del asma se organiza en dos tipos de medicamentos con roles muy distintos: los de *rescate* (agonistas beta-2 de acción corta, como el salbutamol), que alivian el broncoespasmo agudo pero no tratan la inflamación de fondo, y los *controladores* (típicamente corticosteroides inhalados), que sí actúan sobre la inflamación crónica de la vía aérea y previenen las crisis. Una señal clara de que el asma no está controlada, y de que hace falta iniciar o intensificar la terapia controladora, es la *necesidad de usar el rescate más de dos veces por semana*: el caso describe a un paciente que lo usa *más de tres veces por semana*, un umbral que claramente indica mal control. La conducta correcta no es aumentar la dosis del rescate ni depender de él, sino *iniciar un corticosteroide inhalado diario*, que ataca la causa inflamatoria de fondo y reduce la frecuencia e intensidad de las crisis futuras.',
  no:{0:'Usar la bomba de salbutamol "a requerimiento" sin añadir un controlador es precisamente lo que ya está fallando: el uso frecuente de rescate es la señal de que hace falta más que eso.',2:'La hidrocortisona endovenosa en casa no es una opción de manejo ambulatorio de mantenimiento; los corticosteroides sistémicos se reservan para exacerbaciones agudas graves, no para el control crónico.',3:'"Un agente preventivo" es una opción demasiado vaga: la respuesta correcta especifica la clase (corticosteroide inhalado) y la frecuencia (dos veces al día), que es lo que la pregunta busca evaluar.'},
  trampa:'Pensar que aumentar la frecuencia del rescate resuelve el problema. El uso frecuente de rescate es justamente la señal de alarma de que falta terapia controladora, no una solución.',
  dx:[],
  obj:'Reconocer el umbral de uso de rescate que indica la necesidad de iniciar terapia controladora en el asma.',
  ref:'ENURM 2021-B, pregunta 70. Bibliografía oficial: Harrison, Principios de Medicina Interna, 19ª ed., cap. 309, pág. 1679.'
},

'ENURM-2021-B081': {
  esp:'Cirugía', tema:'Abdomen agudo', sub:'Isquemia mesentérica',
  clave:'Anciana con fibrilación auricular + dolor abdominal desproporcionado + acidosis metabólica: isquemia mesentérica.',
  exp:'La combinación de datos del caso apunta con fuerza a la *isquemia mesentérica aguda* de origen embólico. La *fibrilación auricular* es la fuente clásica de émbolos que viajan desde la aurícula izquierda hacia la circulación sistémica, y uno de los destinos más temidos es la *arteria mesentérica superior*, cuyo ángulo de salida de la aorta favorece que los émbolos se alojen ahí. El cuadro clínico característico es un *dolor abdominal desproporcionado al examen físico* (dolor intenso con un abdomen relativamente blando al inicio, porque el daño es isquémico antes de ser inflamatorio peritoneal franco), que evoluciona con *distensión*, *leucocitosis*, y, conforme el intestino se necrosa, *acidosis metabólica* por la liberación de lactato del tejido isquémico. La *hemoconcentración* (hematocrito elevado) refleja la fuga de líquido hacia el tercer espacio por el intestino dañado, y la insuficiencia renal es secundaria a la hipoperfusión y al estado séptico incipiente. La TAC con asas de intestino delgado edematizadas completa el cuadro.',
  no:{0:'La perforación de úlcera péptica da un cuadro de dolor súbito, en tabla, con aire libre subdiafragmático en la radiografía; no explica la fibrilación auricular como fuente embólica.',1:'El íleo biliar (obstrucción por un cálculo biliar grande que migra al intestino) es más insidioso y no se relaciona con fibrilación auricular ni con acidosis metabólica temprana tan marcada.',2:'Una neoplasia obstructiva de sigma con perforación daría un cuadro más gradual, con cambios en el hábito intestinal previos, no la instalación aguda descrita aquí.'},
  trampa:'No conectar la fibrilación auricular con el cuadro abdominal. Es precisamente la fuente embólica la que explica por qué la isquemia mesentérica es la primera sospecha en este contexto.',
  dx:['Perforación de úlcera péptica','Obstrucción intestinal'],
  obj:'Reconocer la fibrilación auricular como fuente embólica de la isquemia mesentérica aguda.',
  ref:'ENURM 2021-B, pregunta 81. Bibliografía oficial: Schwartz, Principios de Cirugía, 10ª ed., McGraw Hill, 2015, cap. 23, pág. 861.'
},

'ENURM-2021-C014': {
  esp:'Pediatría', tema:'Equilibrio ácido-base', sub:'Acidosis metabólica pediátrica',
  clave:'La DIARREA es la causa más frecuente de acidosis metabólica en el paciente pediátrico.',
  exp:'La *diarrea* es la causa más frecuente de acidosis metabólica en niños porque las secreciones intestinales, sobre todo las del intestino delgado y el colon, son ricas en *bicarbonato*. Cuando el volumen de heces aumenta de forma importante, como ocurre en una diarrea moderada a grave, se pierde una cantidad significativa de bicarbonato por esa vía, y el organismo no logra compensar esa pérdida con la producción renal habitual. El resultado es una *acidosis metabólica hiperclorémica*, con *anion gap normal*, porque lo que se pierde es bicarbonato (que se sustituye parcialmente por cloro para mantener la electroneutralidad), no ácidos orgánicos acumulados. Este mecanismo es clínicamente relevante porque la enfermedad diarreica es extremadamente prevalente en la población pediátrica, lo que la convierte, por pura frecuencia poblacional, en la causa más común de este trastorno.',
  no:{0:'La neumonía puede producir acidosis respiratoria (por retención de CO2 si hay falla ventilatoria) o contribuir con hipoxemia, pero no es la causa más frecuente de acidosis metabólica per se.',1:'El broncoespasmo también se relaciona más con trastornos respiratorios (alcalosis respiratoria inicial por hiperventilación, o acidosis respiratoria si hay fatiga), no con pérdida de bicarbonato.',3:'Los vómitos producen típicamente el efecto contrario: alcalosis metabólica, por la pérdida de ácido clorhídrico gástrico, no acidosis.'},
  trampa:'Confundir el efecto ácido-base de los vómitos con el de la diarrea. Son opuestos: los vómitos alcalinizan (pierden ácido gástrico) y la diarrea acidifica (pierde bicarbonato intestinal).',
  dx:[],
  obj:'Identificar la diarrea como causa más frecuente de acidosis metabólica hiperclorémica en pediatría.',
  ref:'ENURM 2021-C, pregunta 14. Bibliografía oficial: Nelson, Tratado de Pediatría, 20ª ed., cap. 55, pág. 392.'
},

/* ==================== GINECOLOGÍA Y OBSTETRICIA ==================== */
'ENURM-2021-A044': {
  esp:'Ginecología y Obstetricia', tema:'Infecciones en el embarazo', sub:'Tuberculosis en el embarazo',
  clave:'Fase de continuación del tratamiento antituberculoso en el embarazo: isoniazida + rifampicina.',
  exp:'El tratamiento de la tuberculosis activa sigue el mismo esquema de dos fases tanto en la población general como en la mujer embarazada, con la salvedad de que se evita la *estreptomicina* (ototóxica para el feto) y se añade *piridoxina* (vitamina B6) para prevenir la neuropatía periférica que puede producir la isoniazida, cuyo requerimiento aumenta durante la gestación. La *fase intensiva* inicial, de dos meses, usa cuatro fármacos: isoniazida, rifampicina, pirazinamida y etambutol. La *fase de continuación*, de cuatro meses, se reduce a los dos fármacos más potentes y mejor tolerados a largo plazo: *isoniazida y rifampicina*. Esta reducción es posible porque, tras la fase intensiva, la carga bacilar ya se redujo drásticamente y el objetivo pasa de la esterilización rápida a evitar la recaída con un esquema más simple y sostenible durante varios meses.',
  no:{0:'Etambutol y pirazinamida no son los fármacos de la fase de continuación: la pirazinamida se usa solo en la fase intensiva inicial de dos meses.',2:'Etambutol y rifampicina combina un fármaco de la fase intensiva con uno de continuación; no es el esquema estándar de ninguna de las dos fases.',3:'Pirazinamida e isoniazida tampoco es el par correcto: la pirazinamida se suspende al completar la fase intensiva.'},
  trampa:'Mezclar los fármacos de las dos fases del tratamiento. La regla es: cuatro fármacos los primeros dos meses, y de esos cuatro, solo isoniazida y rifampicina continúan los siguientes cuatro meses.',
  dx:[],
  obj:'Diferenciar los fármacos de la fase intensiva y de la fase de continuación en el tratamiento de la tuberculosis durante el embarazo.',
  ref:'ENURM 2021-A, pregunta 44. Bibliografía oficial: Williams, Obstetricia, 24ª ed., 2015, cap. 51, pág. 1021.'
},

'ENURM-2021-A046': {
  esp:'Ginecología y Obstetricia', tema:'Miomatosis uterina', sub:'Agonistas de GnRH',
  clave:'Tras suspender un agonista de GnRH, la menstruación regresa en 4 a 8 semanas.',
  exp:'Los *agonistas de la GnRH* (como el leuprolide) se usan en el tratamiento médico de los miomas uterinos para reducir su tamaño antes de una cirugía, y funcionan produciendo un estado de *hipoestrogenismo* deliberado: aunque inicialmente estimulan la hipófisis, con el uso continuo la desensibilizan (down-regulation de sus receptores), suprimiendo la secreción de FSH y LH y, por tanto, la producción ovárica de estrógenos. Sin estrógenos, los miomas (que son estrógeno-dependientes) reducen su tamaño y cesa la menstruación (amenorrea inducida). Este efecto es *reversible*: al suspender el fármaco, el eje hipotálamo-hipófisis-ovario se recupera de forma gradual, y la menstruación regresa típicamente entre las *4 y 8 semanas* posteriores a la suspensión, conforme se restablece la producción folicular normal.',
  no:{0:'1-3 semanas es un plazo demasiado corto para que el eje hipotálamo-hipófisis-ovario, previamente suprimido, se reactive y complete un ciclo ovulatorio.',2:'4-6 meses sobreestima el tiempo de recuperación; la supresión con agonistas de GnRH no deja una amenorrea tan prolongada tras suspenderlos.',3:'6-8 meses también excede largamente el plazo real de recuperación del eje reproductivo.'},
  trampa:'Confundir la duración del TRATAMIENTO (que sí puede prolongarse varios meses) con el tiempo de RECUPERACIÓN tras suspenderlo, que es mucho más corto.',
  dx:[],
  obj:'Conocer el tiempo de recuperación menstrual tras suspender un agonista de GnRH.',
  ref:'ENURM 2021-A, pregunta 46. Bibliografía oficial: Berek y Novak, Ginecología, cap. 15, pág. 44.'
},

'ENURM-2021-A056': {
  esp:'Ginecología y Obstetricia', tema:'Vigilancia fetal', sub:'Perfil biofísico',
  clave:'Perfil biofísico fetal de 10 puntos: feto normal, sin evidencia de asfixia.',
  exp:'El *perfil biofísico fetal* evalúa cinco parámetros, cada uno calificado con 0 o 2 puntos, para un máximo de 10: movimientos respiratorios fetales, movimientos corporales, tono fetal, volumen de líquido amniótico, y la prueba sin estrés (reactividad de la frecuencia cardíaca fetal). Una puntuación de *10 sobre 10* representa el mejor resultado posible: todos los parámetros normales, lo que traduce que el feto tiene una oxigenación adecuada y un sistema nervioso central funcionando con normalidad, ya que estos parámetros (sobre todo los movimientos y el tono) son extremadamente sensibles a la hipoxia y se pierden progresivamente cuando existe compromiso fetal. Con una puntuación de 10, la interpretación es *feto normal, sin asfixia*, con un riesgo de mortalidad perinatal en la semana siguiente extremadamente bajo, lo que en la práctica tranquiliza sobre la vigilancia inmediata del embarazo, aunque en este caso además exista la sospecha de un embarazo cronológicamente prolongado que amerite seguimiento.',
  no:{0:'"Probable asfixia fetal" correspondería a puntuaciones intermedias (4-6), no a la puntuación máxima descrita en el caso.',1:'"Asfixia fetal segura" se asocia a puntuaciones muy bajas (0-2), el extremo opuesto de lo que describe el caso.',2:'"Sospecha de asfixia fetal" tampoco corresponde a una puntuación perfecta de 10; sugeriría un resultado intermedio.'},
  trampa:'No memorizar la escala de interpretación del perfil biofísico y asumir que cualquier vigilancia adicional (como la del embarazo prolongado) implica sospecha de asfixia, cuando la puntuación misma ya responde la pregunta.',
  dx:[],
  obj:'Interpretar la puntuación máxima del perfil biofísico fetal como ausencia de asfixia.',
  ref:'ENURM 2021-A, pregunta 56. Bibliografía oficial: Williams, Obstetricia, 24ª ed., 2015, cap. 17, pág. 342.'
},

'ENURM-2021-A057': {
  esp:'Ginecología y Obstetricia', tema:'Líquido amniótico', sub:'Oligohidramnios',
  clave:'Índice de líquido amniótico MENOR de 5 cm: criterio diagnóstico de oligohidramnios.',
  exp:'El *oligohidramnios* se define por la reducción del volumen de líquido amniótico por debajo del rango normal para la edad gestacional, y el criterio más usado para establecerlo es el *índice de líquido amniótico (ILA)*, que suma la profundidad vertical máxima del líquido en los cuatro cuadrantes uterinos. Un ILA *menor de 5 cm* es el punto de corte diagnóstico de oligohidramnios. Este dato importa porque el volumen de líquido amniótico refleja indirectamente la función renal y placentaria fetal: el feto contribuye al líquido amniótico con su orina desde la segunda mitad del embarazo, así que un oligohidramnios puede señalar insuficiencia placentaria (con redistribución del flujo sanguíneo fetal que reduce la perfusión renal), anomalías renales fetales, o rotura prematura de membranas.',
  no:{0:'"Mayor de 5 cm" describe lo opuesto: un ILA por encima de ese valor está dentro de lo normal o incluso indica polihidramnios si es muy alto, no oligohidramnios.',1:'La medición de saco vertical máximo mayor de 3 cm no corresponde a oligohidramnios; ese método usa un punto de corte distinto (menor de 2 cm) para el diagnóstico.',3:'Saco vertical máximo mayor de 2 cm tampoco es diagnóstico de oligohidramnios: por ese método, el criterio es que sea MENOR, no mayor, de 2 cm.'},
  trampa:'Confundir los dos métodos de medición del líquido amniótico (índice de los cuatro cuadrantes frente a saco vertical máximo único) y sus puntos de corte distintos, o invertir la dirección del criterio (mayor/menor).',
  dx:[],
  obj:'Fijar el criterio diagnóstico del oligohidramnios por índice de líquido amniótico.',
  ref:'ENURM 2021-A, pregunta 57. Bibliografía oficial: Williams, Obstetricia, 24ª ed., 2015, cap. 17, pág. 343.'
},

'ENURM-2021-A058': {
  esp:'Ginecología y Obstetricia', tema:'Diabetes gestacional', sub:'Tratamiento farmacológico',
  clave:'Diabetes gestacional sin control con dieta y ejercicio: insulina es el tratamiento farmacológico de elección.',
  exp:'Cuando la *diabetes gestacional* no se controla adecuadamente con las medidas iniciales (dieta y ejercicio), como ocurre en el caso —con glicemia en ayuno persistentemente elevada y una prueba de tolerancia oral con resultado también alterado—, el siguiente paso es iniciar tratamiento farmacológico, y la *insulina* es la opción de elección. La razón es que la insulina *no atraviesa la barrera placentaria* en cantidades clínicamente significativas, por lo que controla la glicemia materna sin exponer directamente al feto al fármaco. Aunque existen antidiabéticos orales (metformina, gliburida) que se usan en algunos protocolos como alternativa, la insulina sigue siendo el estándar de referencia con el perfil de seguridad materno-fetal mejor establecido, y permite un ajuste de dosis más fino y predecible según los controles de glicemia.',
  no:{0:'La metformina sí atraviesa la placenta, y aunque se usa en algunos esquemas, no es la primera elección clásica cuando se busca la opción más establecida.',1:'La gliburida (glibenclamida) es una sulfonilurea que estimula la secreción de insulina materna; se ha usado como alternativa oral, pero no es la primera opción sobre la insulina.',3:'Las sulfonilureas como grupo comparten el mismo razonamiento que la gliburida: alternativa, no primera línea.'},
  trampa:'Pensar que un antidiabético oral es preferible por ser más cómodo de administrar. La preferencia por la insulina se basa en el perfil de seguridad placentaria, no en la comodidad.',
  dx:[],
  obj:'Indicar la insulina como tratamiento farmacológico de elección en la diabetes gestacional no controlada con medidas no farmacológicas.',
  ref:'ENURM 2021-A, pregunta 58. Bibliografía oficial: Williams, Obstetricia, 24ª ed., 2015, cap. 57, pág. 1141.'
},

/* ==================== MEDICINA INTERNA ==================== */
'ENURM-2021-A013': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Anemia ferropénica en el varón',
  clave:'Anemia ferropénica en un varón adulto sin causa aparente: sospechar hemorragia digestiva hasta demostrar lo contrario.',
  exp:'La *anemia ferropénica* en un varón adulto es una señal de alarma que exige investigación, porque a diferencia de la mujer en edad fértil (donde la pérdida menstrual es una causa fisiológica frecuente), el varón adulto no tiene una fuente habitual de pérdida de hierro. Por eso, ante una anemia ferropénica sin causa evidente en este grupo, la primera sospecha obligada es una *hemorragia del tubo digestivo*, generalmente crónica y oculta (no visible macroscópicamente), por lesiones como úlcera péptica, pólipos, o lo más importante en términos de gravedad, un *cáncer colorrectal*. Este principio clínico es una de las reglas de oro de la medicina interna: nunca se debe simplemente reponer el hierro sin buscar antes la fuente del sangrado, porque hacerlo retrasaría el diagnóstico de una neoplasia potencialmente curable en etapa temprana.',
  no:{1:'El síndrome de mala absorción puede causar deficiencia de hierro, pero suele acompañarse de otros signos de malabsorción (diarrea crónica, pérdida de peso, déficit de otros nutrientes), y es mucho menos frecuente que la hemorragia digestiva como causa de ferropenia aislada en el varón.',2:'La aclorhidria reduce la absorción de hierro (que requiere un medio ácido para su absorción óptima), pero es una causa menos común y generalmente se identifica en el contexto de gastritis atrófica ya conocida.',3:'La gastritis atrófica puede contribuir por aclorhidria, pero no es la primera sospecha obligada frente a la posibilidad de una lesión sangrante, potencialmente maligna, del tubo digestivo.'},
  trampa:'Atribuir la anemia ferropénica del varón a causas dietéticas o de absorción sin investigar primero la posibilidad de sangrado digestivo, que es la prioridad diagnóstica por su potencial gravedad.',
  dx:['Síndrome de malabsorción','Gastritis atrófica'],
  obj:'Establecer la hemorragia digestiva como primera sospecha ante anemia ferropénica inexplicada en el varón adulto.',
  ref:'ENURM 2021-A, pregunta 13. Bibliografía oficial: Harrison, Principios de Medicina Interna, 19ª ed., cap. 126, pág. 627.'
},

'ENURM-2021-A041': {
  esp:'Ginecología y Obstetricia', tema:'Infecciones ginecológicas', sub:'Cervicitis',
  clave:'Secreción endocervical purulenta amarillo-verdosa: cervicitis.',
  exp:'La *cervicitis* es la inflamación del cuello uterino, casi siempre de causa infecciosa (Chlamydia trachomatis y Neisseria gonorrhoeae son los patógenos más frecuentes), y su manifestación característica es precisamente la que describe el caso: una *secreción endocervical purulenta*, de color *amarillo-verdoso* ("mucopus"), que se origina específicamente del endocérvix (visible al examen con espéculo saliendo del orificio cervical), a diferencia de las vaginitis, cuya secreción proviene de las paredes vaginales. El diagnóstico se apoya en la inspección directa del cuello uterino, que puede mostrar friabilidad (sangrado fácil al contacto) además de la secreción purulenta.',
  no:{0:'La vaginitis por tricomona produce una secreción vaginal (no específicamente endocervical) característicamente espumosa, amarillo-verdosa y con mal olor, junto con eritema vaginal e irritación (el cuello "en fresa" es más específico de tricomoniasis, pero la fuente de la secreción es la pared vaginal).',2:'La vaginitis por Cándida da una secreción blanca, espesa, "en requesón", con prurito intenso, muy distinta a la purulenta amarillo-verdosa endocervical del caso.',3:'La enfermedad pélvica inflamatoria es una complicación posible de una cervicitis no tratada, con dolor pélvico y datos de infección ascendente (fiebre, dolor a la movilización cervical), que no se describen en este caso limitado a la secreción cervical.'},
  trampa:'Confundir cervicitis con vaginitis por el color similar de la secreción. La localización del origen de la secreción (endocervical frente a vaginal) es lo que distingue a ambas entidades.',
  dx:['Vaginitis por tricomona','Enfermedad pélvica inflamatoria'],
  obj:'Reconocer la cervicitis por su secreción endocervical purulenta característica.',
  ref:'ENURM 2021-A, pregunta 41. Bibliografía oficial: Ginecología de Novak, 14ª ed., infecciones vaginales, pág. 562.'
},

'ENURM-2021-B007': {
  esp:'Medicina Interna', tema:'Neurología vascular', sub:'Síndrome de Weber',
  clave:'Parálisis del III par + hemiplejia contralateral + alteración de la mirada vertical: territorio de la arteria cerebral posterior.',
  exp:'Esta combinación de signos corresponde al *síndrome de Weber*, un síndrome alterno del mesencéfalo: *parálisis del tercer par craneal ipsilateral* (por afectación del fascículo del nervio oculomotor cuando atraviesa el mesencéfalo) junto con *hemiplejia contralateral* (por afectación del haz corticoespinal en el pedúnculo cerebral, cuyas fibras aún no han decusado a ese nivel). Los datos adicionales —*parálisis de los movimientos verticales de los ojos*, *nistagmo* y *desorientación*— refuerzan la localización mesencefálica, ya que el centro de la mirada vertical (núcleo rostral intersticial del fascículo longitudinal medial) está precisamente en esa región. El territorio vascular responsable es el de la *arteria cerebral posterior*: aunque su tronco principal termina irrigando el lóbulo occipital, sus ramas perforantes proximales (que se originan cerca del segmento P1, antes de bifurcarse hacia la corteza occipital) irrigan el mesencéfalo, incluidos el fascículo corticoespinal y el núcleo del tercer par. Por eso, un infarto en el territorio proximal de la cerebral posterior puede dar este cuadro mesencefálico clásico.',
  no:{0:'La arteria cerebral media irriga la mayor parte de la convexidad hemisférica; un infarto en su territorio da hemiparesia faciobraquial y afasia (si es el hemisferio dominante), no parálisis aislada del III par.',1:'La arteria cerebral anterior irriga la corteza medial frontal y parietal; su oclusión da predominio de debilidad en el miembro inferior, no afectación de pares craneales del tronco.',2:'La arteria basilar irriga la protuberancia; su oclusión completa produce el síndrome de "enclaustramiento" (locked-in) o afectación de otros pares craneales bajos, un cuadro distinto al descrito.'},
  trampa:'No recordar que las ramas perforantes proximales de la cerebral posterior irrigan el mesencéfalo antes de que la arteria continúe hacia el territorio occipital que lleva su nombre.',
  dx:[],
  obj:'Relacionar el síndrome de Weber (mesencefálico) con el territorio vascular de la arteria cerebral posterior.',
  ref:'ENURM 2021-B, pregunta 7. Bibliografía oficial: Harrison Manual, 19ª ed., cap. 17, tabla 17-1, pág. 83.'
},

'ENURM-2021-B012': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Radiología del derrame pleural',
  clave:'El derrame pleural absorbe los rayos X y produce una imagen RADIOPACA.',
  exp:'En la radiografía convencional, la imagen resulta de cuánto absorben los rayos X las distintas estructuras que atraviesan: el aire absorbe muy poco (se ve negro, *radiolúcido*), mientras que los líquidos y tejidos blandos absorben más (se ven más blancos o grises, *radiopacos*). El *derrame pleural* es líquido acumulado en el espacio pleural, así que absorbe los rayos X de forma similar a otros líquidos y tejidos blandos del cuerpo, produciendo una imagen *radiopaca*: clásicamente se ve como una opacidad homogénea que borra el ángulo costofrénico y, en derrames grandes, forma la curva de Damoiseau. Esta distinción (radiopaco/radiolúcido) es la base de la radiología convencional, y hay que diferenciarla de los términos ecográficos (anecogénica/hiperecogénica), que describen otra propiedad física distinta: cómo se comporta el ultrasonido, no los rayos X.',
  no:{0:'Radiolúcida describe lo que deja pasar fácilmente los rayos X (como el aire); el líquido pleural hace lo contrario.',2:'Anecogénica es un término ECOGRÁFICO (ultrasonido), no radiográfico: describe una estructura sin ecos internos, no la absorción de rayos X.',3:'Hiperecogénica también es un término ecográfico, no aplicable a la interpretación de una radiografía convencional.'},
  trampa:'Mezclar terminología de dos modalidades de imagen distintas: radiopaco/radiolúcido pertenecen a la radiografía; anecogénico/hiperecogénico pertenecen a la ecografía.',
  dx:[],
  obj:'Aplicar correctamente el vocabulario radiográfico (radiopaco/radiolúcido) a la imagen del derrame pleural.',
  ref:'ENURM 2021-B, pregunta 12. Bibliografía oficial: Gutiérrez Cadavid, Restrepo González, Soto Jiménez, Fundamentos de Medicina: Radiología e Imágenes Diagnósticas, 2ª ed., pág. 11.'
}

});
