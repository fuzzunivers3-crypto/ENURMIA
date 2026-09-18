/* ============================================================
   UNIRMIA — BANCO 4, CUATRIMESTRE 7 — ANATOMÍA I (ampliación)
   Segundo lote de Anatomía I: cubre los temas del temario que
   todavía no tenían preguntas propias. Mismo estándar que el
   resto: dato clave, explicación de por qué falla cada opción,
   trampa y bibliografía.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ---------- Generalidades y términos de posición ---------- */
{
  id:'U7-A-Q14', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Generalidades', sub:'Planos anatómicos',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué plano anatómico divide el cuerpo en una mitad anterior y una posterior?',
  ops:['El plano sagital','El plano frontal (coronal)','El plano transversal','El plano oblicuo'],
  ok:1,
  clave:'Frontal = anterior/posterior. Sagital = derecha/izquierda. Transversal = superior/inferior.',
  exp:'El plano frontal, también llamado coronal, corre de lado a lado y separa el cuerpo en una porción anterior (ventral) y otra posterior (dorsal). Es el plano que se usa, por ejemplo, para describir una radiografía de tórax PA. Memorizar los tres planos por el par de regiones que separan evita confundirlos en el examen.',
  no:{
    0:'El sagital corre de adelante hacia atrás y divide el cuerpo en derecha e izquierda; el sagital medio da las dos mitades simétricas.',
    2:'El transversal (u horizontal) corre paralelo al suelo y separa una porción superior de una inferior, como en un corte de TC.',
    3:'No es un plano de referencia estándar en la nomenclatura anatómica internacional.'
  },
  trampa:'Confundir "frontal" con "de frente" y asumir que separa arriba de abajo.',
  obj:'Diferenciar los tres planos anatómicos de referencia y qué separan.',
  ref:'Moore, Anatomía con orientación clínica, capítulo de introducción.',
  tags:['plano frontal','plano sagital','plano transversal','términos de posición']
},
{
  id:'U7-A-Q15', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Generalidades', sub:'Proximal y distal',
  dif:1, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'En el miembro superior, ¿qué término describe correctamente la posición del codo respecto a la muñeca?',
  ops:['El codo es distal a la muñeca','El codo es proximal a la muñeca','El codo es medial a la muñeca','El codo es superficial a la muñeca'],
  ok:1,
  clave:'Proximal = más cerca del tronco; distal = más lejos del tronco, a lo largo del eje del miembro.',
  exp:'Proximal y distal se usan solo para describir posiciones a lo largo del eje de un miembro, siempre en relación con el punto de inserción en el tronco. El codo está más cerca del hombro (y por tanto del tronco) que la muñeca, así que el codo es proximal respecto a la muñeca, y la muñeca es distal respecto al codo.',
  no:{
    0:'Distal sería si el codo estuviera más lejos del tronco que la muñeca, que es justo lo contrario de la realidad.',
    2:'Medial y lateral se usan respecto a la línea media del cuerpo, no a lo largo del eje de un miembro.',
    3:'Superficial y profundo describen cercanía a la piel, no posición a lo largo del miembro.'
  },
  trampa:'Usar medial/lateral o superior/inferior cuando el eje relevante es el del propio miembro, no el del tronco.',
  obj:'Aplicar proximal/distal correctamente a lo largo del eje de un miembro.',
  ref:'Moore, Anatomía con orientación clínica, capítulo de introducción.',
  tags:['proximal','distal','términos de posición']
},

/* ---------- Osteología general ---------- */
{
  id:'U7-A-Q16', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Osteología general', sub:'Partes del hueso largo',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se llama la zona de un hueso largo donde persiste el cartílago de crecimiento durante la infancia y adolescencia?',
  ops:['La diáfisis','La epífisis','La metáfisis','El periostio'],
  ok:2,
  clave:'La metáfisis contiene la placa de crecimiento (fisis) mientras el hueso está en formación.',
  exp:'La metáfisis es la zona de transición entre la diáfisis (el cuerpo del hueso) y la epífisis (el extremo). Ahí se ubica la placa epifisaria o fisis, el cartílago de crecimiento responsable de que el hueso se alargue durante la infancia y la adolescencia. Cuando el crecimiento termina, la fisis se osifica por completo y queda como una línea epifisaria visible en radiografías de adultos.',
  no:{
    0:'La diáfisis es el cuerpo cilíndrico central del hueso, ya osificado desde etapas tempranas, sin cartílago de crecimiento.',
    1:'La epífisis es el extremo del hueso, cubierto por cartílago articular, pero el cartílago de crecimiento está en la metáfisis, no en la epífisis misma.',
    3:'El periostio es la membrana fibrosa que recubre la superficie externa del hueso; permite el crecimiento en grosor, no en longitud.'
  },
  trampa:'Confundir epífisis con metáfisis porque ambas están cerca del extremo del hueso.',
  obj:'Ubicar la placa de crecimiento y diferenciarla de las demás partes del hueso largo.',
  ref:'Moore, Anatomía con orientación clínica, capítulo de introducción al sistema esquelético.',
  tags:['metáfisis','placa de crecimiento','hueso largo','fisis']
},
{
  id:'U7-A-Q17', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Osteología general', sub:'Osificación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia principal hay entre la osificación intramembranosa y la endocondral?',
  ops:[
    'La intramembranosa forma hueso directamente desde tejido conectivo mesenquimal; la endocondral pasa primero por un molde de cartílago',
    'La intramembranosa solo ocurre en el adulto; la endocondral solo en el feto',
    'La endocondral forma los huesos planos del cráneo; la intramembranosa forma los huesos largos',
    'No hay diferencia real, son dos nombres para el mismo proceso'
  ],
  ok:0,
  clave:'Intramembranosa: mesénquima → hueso directo (huesos planos). Endocondral: mesénquima → cartílago → hueso (huesos largos).',
  exp:'En la osificación intramembranosa, células mesenquimales se diferencian directamente en osteoblastos y forman hueso sin pasar por un estadio de cartílago; así se forman los huesos planos del cráneo y la clavícula. En la osificación endocondral, primero se forma un molde de cartílago hialino que luego es reemplazado progresivamente por hueso; así se forman los huesos largos de las extremidades, y es este proceso el que da origen a la placa de crecimiento en la metáfisis.',
  no:{
    1:'Ambos procesos ocurren durante el desarrollo fetal y continúan (la endocondral) durante la infancia y adolescencia para el crecimiento longitudinal.',
    2:'Es al revés: los huesos planos del cráneo se forman por osificación intramembranosa; los huesos largos, por endocondral.',
    3:'Son mecanismos celulares distintos con vías y localizaciones diferentes, aunque el hueso final sea histológicamente similar.'
  },
  trampa:'Invertir qué proceso corresponde a huesos planos y cuál a huesos largos.',
  obj:'Distinguir los dos mecanismos de osificación y qué huesos genera cada uno.',
  ref:'Moore, Anatomía con orientación clínica; Junqueira, Histología básica, capítulo de tejido óseo.',
  tags:['osificación intramembranosa','osificación endocondral','desarrollo óseo']
},

/* ---------- Columna vertebral (ya cubierto, se refuerza) ---------- */
{
  id:'U7-A-Q18', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Columna vertebral', sub:'Curvaturas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles curvaturas de la columna vertebral son de convexidad posterior (cifóticas) en el adulto?',
  ops:['Cervical y lumbar','Torácica y sacra','Cervical y torácica','Lumbar y sacra'],
  ok:1,
  clave:'Curvaturas primarias (cifóticas, cóncavas hacia adelante): torácica y sacra. Curvaturas secundarias (lordóticas): cervical y lumbar.',
  exp:'Las curvaturas torácica y sacra son primarias: están presentes desde la vida fetal y mantienen la concavidad anterior (convexidad posterior) que tenía la columna en el útero. Las curvaturas cervical y lumbar son secundarias o compensatorias: se desarrollan después del nacimiento, la cervical cuando el bebé sostiene la cabeza y la lumbar cuando empieza a pararse y caminar, y son de convexidad anterior (lordosis).',
  no:{
    0:'La cervical y la lumbar son justamente las lordóticas, de convexidad anterior, lo opuesto a lo que pregunta el enunciado.',
    2:'La torácica sí es cifótica, pero la cervical es lordótica, no cifótica.',
    3:'La sacra sí es cifótica, pero la lumbar es lordótica, no cifótica.'
  },
  trampa:'Asumir que todas las curvaturas van en la misma dirección sin distinguir primarias de secundarias.',
  obj:'Relacionar cada curvatura vertebral con su tipo (primaria/cifótica o secundaria/lordótica).',
  ref:'Moore, Anatomía con orientación clínica, capítulo de espalda.',
  tags:['curvatura vertebral','cifosis','lordosis','columna']
},
{
  id:'U7-A-Q19', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Columna vertebral', sub:'Vértebras cervicales especiales',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En una clase de anatomía, el profesor pide identificar la vértebra que no tiene cuerpo vertebral y que se articula directamente con los cóndilos occipitales del cráneo.',
  enunciado:'¿A qué vértebra se refiere?',
  ops:['El axis (C2)','El atlas (C1)','La vértebra prominente (C7)','La séptima cervical típica'],
  ok:1,
  clave:'El atlas (C1) no tiene cuerpo vertebral; forma un anillo óseo y se articula con los cóndilos occipitales (articulación atlantooccipital).',
  exp:'El atlas es la primera vértebra cervical y es atípica: en vez de cuerpo vertebral tiene un arco anterior y uno posterior que forman un anillo. Se articula por arriba con los cóndilos occipitales del cráneo (permite el movimiento de "sí" con la cabeza) y por abajo con el axis, a través de la apófisis odontoides de este último, lo que permite el movimiento de rotación ("no" con la cabeza).',
  no:{
    0:'El axis (C2) sí tiene cuerpo vertebral, del cual se proyecta hacia arriba la apófisis odontoides que encaja en el anillo del atlas.',
    2:'La vértebra prominente es C7, reconocible por su apófisis espinosa larga y palpable en la base del cuello; no es la que se articula con el cráneo.',
    3:'Una cervical típica (C3-C6) sí tiene cuerpo vertebral y no se articula con el occipital.'
  },
  trampa:'Confundir atlas con axis porque ambas son cervicales "especiales" cercanas al cráneo.',
  obj:'Reconocer las características atípicas de atlas y axis y su función articular.',
  ref:'Moore, Anatomía con orientación clínica, capítulo de espalda.',
  tags:['atlas','axis','vértebras cervicales','articulación atlantooccipital']
},

/* ---------- Tórax óseo y pared torácica ---------- */
{
  id:'U7-A-Q20', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Tórax óseo', sub:'Clasificación de las costillas',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se clasifican las costillas 8ª, 9ª y 10ª según su relación con el esternón?',
  ops:['Costillas verdaderas','Costillas falsas','Costillas flotantes','Costillas atípicas'],
  ok:1,
  clave:'Verdaderas (1-7): cartílago propio hasta el esternón. Falsas (8-10): cartílago que se une al de la costilla superior. Flotantes (11-12): sin unión anterior.',
  exp:'Las costillas se dividen en tres grupos según cómo llegan (o no) al esternón. Las verdaderas (1ª a 7ª) tienen su propio cartílago costal que se articula directamente con el esternón. Las falsas (8ª a 10ª) tienen cartílago, pero este se une al cartílago de la costilla inmediatamente superior en vez de llegar directo al esternón, formando el margen costal. Las flotantes (11ª y 12ª) no tienen ninguna conexión anterior, ni directa ni indirecta: terminan libres en la musculatura de la pared abdominal.',
  no:{
    0:'Las verdaderas son la 1ª a la 7ª, que sí llegan directo al esternón con su propio cartílago.',
    2:'Las flotantes son la 11ª y la 12ª, sin ninguna conexión cartilaginosa anterior.',
    3:'No es una categoría estándar de clasificación costal.'
  },
  trampa:'Meter la 8ª-10ª en el grupo de verdaderas solo porque tienen cartílago, sin fijarse en que no llega directo al esternón.',
  obj:'Clasificar las 12 costillas en verdaderas, falsas y flotantes.',
  ref:'Moore, Anatomía con orientación clínica, capítulo de tórax.',
  tags:['costillas verdaderas','costillas falsas','costillas flotantes','pared torácica']
},
{
  id:'U7-A-Q21', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Pared torácica', sub:'Espacio intercostal',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Antes de colocar una aguja para toracocentesis (punción del espacio pleural), el médico se asegura de introducirla justo por encima del borde superior de la costilla inferior del espacio intercostal elegido, no por debajo del borde de la costilla superior.',
  enunciado:'¿Por qué se prefiere ese punto de entrada?',
  ops:[
    'Porque el paquete vasculonervioso intercostal discurre protegido en el surco costal, bajo el borde inferior de cada costilla',
    'Porque el pulmón está más alejado de la piel en ese punto',
    'Porque ahí el espacio intercostal es más ancho y hay más líquido pleural',
    'Porque el nervio frénico pasa exactamente por ese punto'
  ],
  ok:0,
  clave:'La vena, arteria y nervio intercostales viajan en ese orden (VAN, de arriba abajo) protegidos en el surco costal, bajo el borde inferior de cada costilla.',
  exp:'El paquete vasculonervioso intercostal (vena, arteria y nervio, de arriba abajo, orden que se recuerda como "VAN") discurre en el surco costal, en la cara interna del borde inferior de cada costilla. Al puncionar justo por encima del borde superior de la costilla de abajo, la aguja pasa por la zona donde ese paquete no está presente, minimizando el riesgo de lesionarlo. Puncionar pegado al borde inferior de la costilla de arriba es lo que hay que evitar, porque ahí sí viaja el paquete.',
  no:{
    1:'La distancia del pulmón a la piel no depende de qué borde costal se use como referencia; depende de la localización general de la punción.',
    2:'El ancho del espacio intercostal no varía por elegir un borde u otro de la misma costilla, y no es el motivo de esta técnica.',
    3:'El nervio frénico inerva el diafragma y desciende por el mediastino, no tiene relación con el surco costal de cada espacio intercostal.'
  },
  trampa:'Pensar que "más cerca del borde de arriba" y "más cerca del borde de abajo" son igual de seguros, cuando la diferencia es justamente dónde va el paquete vasculonervioso.',
  obj:'Justificar la técnica de punción intercostal a partir de la anatomía del surco costal.',
  ref:'Moore, Anatomía con orientación clínica, capítulo de tórax.',
  tags:['espacio intercostal','paquete vasculonervioso intercostal','toracocentesis','surco costal']
},

/* ---------- Miembro superior: huesos ---------- */
{
  id:'U7-A-Q22', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Miembro superior: huesos', sub:'Clavícula',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un ciclista cae sobre el hombro y sufre una fractura de clavícula en su tercio medio, que es la localización más frecuente de este tipo de fractura.',
  enunciado:'¿Por qué el tercio medio de la clavícula es el punto más frecuente de fractura?',
  ops:[
    'Es la zona más delgada y el punto de transición entre sus dos curvaturas, donde se concentra el estrés mecánico',
    'Es la zona con más inserciones musculares y por eso recibe más fuerza directa',
    'Es la única porción de la clavícula que no tiene cortical, solo hueso esponjoso',
    'Es la zona más alejada de la articulación esternoclavicular, y por eso la más expuesta'
  ],
  ok:0,
  clave:'El tercio medio de la clavícula es la zona más delgada y el punto de cambio de curvatura (de convexa anterior a cóncava anterior), lo que concentra el esfuerzo mecánico.',
  exp:'La clavícula tiene forma de "S" itálica: convexa hacia adelante en su tercio medial y cóncava hacia adelante en su tercio lateral. El tercio medio, donde cambia la curvatura, es además el punto más delgado del hueso y el que menos soporte muscular y ligamentario tiene comparado con los extremos. Esa combinación de menor grosor y concentración de estrés mecánico en el punto de transición lo convierte en el sitio más frecuente de fractura ante una caída sobre el hombro o la mano extendida.',
  no:{
    1:'Es al revés: el tercio medio tiene relativamente pocas inserciones musculares comparado con los extremos, que están anclados a la escápula y al esternón.',
    2:'Toda la clavícula tiene cortical, como cualquier hueso largo; no hay una porción sin ella.',
    3:'La distancia a la articulación esternoclavicular no es el factor determinante; lo es la combinación de grosor y cambio de curvatura.'
  },
  trampa:'Buscar una explicación basada en la fuerza del golpe en vez de en la propia arquitectura del hueso.',
  obj:'Relacionar la forma de la clavícula con su patrón típico de fractura.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro superior.',
  tags:['clavícula','fractura clavicular','tercio medio']
},
{
  id:'U7-A-Q23', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Miembro superior: huesos', sub:'Húmero: cuello quirúrgico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el cuello quirúrgico del húmero recibe ese nombre y qué estructura nerviosa importante corre pegada a él?',
  ops:[
    'Es un punto frecuente de fractura quirúrgica (es decir, clínicamente relevante) y el nervio axilar pasa muy cerca',
    'Es donde se hace la cirugía de reemplazo de hombro y no tiene relación con ningún nervio',
    'Es el punto donde se une el húmero con la escápula y el nervio radial pasa por ahí',
    'Es una zona de crecimiento óseo activo durante toda la vida adulta'
  ],
  ok:0,
  clave:'El cuello quirúrgico del húmero (debajo de las tuberosidades) es zona frecuente de fractura, y el nervio axilar lo rodea muy de cerca.',
  exp:'El cuello quirúrgico se llama así porque es, en la práctica clínica, un punto frecuente de fractura -a diferencia del cuello anatómico, que rara vez se fractura-. Está ubicado justo por debajo de las tuberosidades mayor y menor. El nervio axilar rodea el húmero muy pegado a esta zona, junto con la arteria circunfleja humeral posterior, por lo que una fractura ahí puede lesionar el nervio axilar y producir debilidad para la abducción del hombro y pérdida de sensibilidad en la piel sobre el deltoides.',
  no:{
    1:'El cuello quirúrgico no es un sitio de cirugía protésica en sí mismo, y sí tiene una relación nerviosa clínicamente relevante.',
    2:'La unión con la escápula ocurre en la cabeza humeral, no en el cuello quirúrgico; y el nervio relacionado con el cuello quirúrgico es el axilar, no el radial.',
    3:'El cuello quirúrgico no es una zona de crecimiento activo; la placa de crecimiento está en la metáfisis proximal, cerca pero no es lo mismo.'
  },
  trampa:'Confundir el nervio axilar (cuello quirúrgico) con el nervio radial (canal de torsión, en la diáfisis).',
  obj:'Relacionar el cuello quirúrgico del húmero con el nervio axilar y su relevancia clínica.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro superior.',
  tags:['cuello quirúrgico','húmero','nervio axilar']
},

/* ---------- Miembro superior: músculos y movimientos ---------- */
{
  id:'U7-A-Q24', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Miembro superior: músculos', sub:'Manguito rotador',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué cuatro músculos forman el manguito de los rotadores del hombro?',
  ops:[
    'Supraespinoso, infraespinoso, redondo menor y subescapular',
    'Deltoides, bíceps, tríceps y coracobraquial',
    'Supraespinoso, deltoides, redondo mayor y subescapular',
    'Infraespinoso, redondo menor, redondo mayor y tríceps'
  ],
  ok:0,
  clave:'Manguito rotador (regla nemotécnica SItS): Supraespinoso, Infraespinoso, redondo (teres) menor, Subescapular.',
  exp:'Los cuatro músculos del manguito rotador estabilizan dinámicamente la articulación glenohumeral, manteniendo la cabeza humeral centrada en la cavidad glenoidea durante el movimiento. Son el supraespinoso (inicia la abducción), el infraespinoso y el redondo menor (rotación externa) y el subescapular (rotación interna). Una regla mnemotécnica común es "SItS": Supraspinatus, Infraspinatus, teres minor, Subscapularis.',
  no:{
    1:'El deltoides, bíceps, tríceps y coracobraquial son músculos importantes del hombro y brazo, pero ninguno forma parte del manguito rotador propiamente dicho.',
    2:'El deltoides y el redondo mayor no pertenecen al manguito rotador; el redondo mayor rota internamente pero no forma parte de este grupo funcional.',
    3:'Falta el subescapular (rotador interno) y sobra el redondo mayor y el tríceps, que no son parte del manguito.'
  },
  trampa:'Confundir redondo menor (sí es del manguito) con redondo mayor (no lo es).',
  obj:'Nombrar los cuatro músculos del manguito rotador y su función.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro superior.',
  tags:['manguito rotador','supraespinoso','infraespinoso','subescapular','redondo menor']
},
{
  id:'U7-A-Q25', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Miembro superior: músculos', sub:'Supinación y pronación',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué movimiento realiza el antebrazo cuando el músculo bíceps braquial actúa como supinador, y por qué es más eficaz con el codo flexionado?',
  ops:[
    'Gira el radio para que la palma quede hacia arriba; es más eficaz flexionado porque así el tendón del bíceps se inserta con mejor ángulo de tracción sobre el radio',
    'Gira el radio para que la palma quede hacia abajo, sin que la posición del codo influya',
    'Flexiona la muñeca; el codo no influye en este movimiento',
    'Extiende el codo, y por eso es más eficaz con el codo ya flexionado'
  ],
  ok:0,
  clave:'El bíceps braquial es supinador potente del antebrazo, y su eficacia mejora con el codo flexionado por el ángulo de inserción de su tendón en la tuberosidad radial.',
  exp:'La supinación gira el radio sobre el cúbito para que la palma de la mano quede hacia arriba (o hacia adelante en posición anatómica). El bíceps braquial se inserta en la tuberosidad del radio, y cuando el codo está flexionado a 90°, el tendón tira del radio en un ángulo más favorable para generar el giro de supinación, por eso el movimiento es más potente en esa posición (es el motivo clínico por el que, por ejemplo, apretar un tornillo con destornillador es más fuerte con el codo doblado).',
  no:{
    1:'Ese movimiento -palma hacia abajo- es la pronación, lo contrario de lo que hace el bíceps; y la posición del codo sí influye en la fuerza de supinación.',
    2:'La flexión de la muñeca es un movimiento distinto, en la articulación radiocarpiana, no relacionado con la acción supinadora del bíceps sobre el radio.',
    3:'El bíceps sí flexiona el codo, pero la pregunta se refiere a su acción supinadora sobre el antebrazo, un movimiento distinto de la flexión del codo.'
  },
  trampa:'Confundir supinación con pronación, o mezclar la acción flexora del bíceps sobre el codo con su acción supinadora sobre el antebrazo.',
  obj:'Explicar la acción supinadora del bíceps braquial y su dependencia de la posición del codo.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro superior.',
  tags:['supinación','pronación','bíceps braquial','tuberosidad radial']
},

/* ---------- Plexo braquial y nervios del brazo (refuerzo) ---------- */
{
  id:'U7-A-Q26', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Plexo braquial', sub:'Nervio mediano',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con síndrome del túnel carpiano refiere adormecimiento y hormigueo en el pulgar, índice, medio y la mitad radial del anular, con debilidad para oponer el pulgar.',
  enunciado:'¿Qué nervio está comprimido y en qué estructura anatómica ocurre la compresión?',
  ops:[
    'El nervio mediano, comprimido en el túnel del carpo bajo el retináculo flexor',
    'El nervio cubital, comprimido en el canal de Guyon',
    'El nervio radial, comprimido en el canal de torsión del húmero',
    'El nervio axilar, comprimido en el cuadrilátero humerotricipital'
  ],
  ok:0,
  clave:'El síndrome del túnel carpiano es la compresión del nervio mediano bajo el retináculo flexor, en la muñeca.',
  exp:'El nervio mediano inerva sensitivamente el pulgar, índice, medio y la mitad radial del anular en la cara palmar, y motoramente los músculos tenares que permiten la oposición del pulgar (entre otros). Cuando pasa por el túnel del carpo -un espacio estrecho delimitado por los huesos del carpo y el retináculo flexor (ligamento transverso del carpo)- puede comprimirse si el túnel se estrecha o el contenido se inflama, dando el cuadro clásico de dolor, parestesias y debilidad tenar del síndrome del túnel carpiano.',
  no:{
    1:'El cubital en el canal de Guyon afecta el meñique y la mitad cubital del anular, y produce debilidad de los músculos interóseos, un patrón distinto al descrito.',
    2:'El radial se comprime en la diáfisis humeral y produce mano péndula por parálisis de extensores, no el patrón sensitivo descrito aquí.',
    3:'El axilar se comprime en el cuadrilátero humerotricipital y afecta el deltoides, sin relación con la mano.'
  },
  trampa:'Confundir el territorio del mediano (pulgar-índice-medio) con el del cubital (meñique-anular).',
  obj:'Reconocer el territorio del nervio mediano y su relación con el túnel del carpo.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro superior.',
  tags:['nervio mediano','túnel carpiano','retináculo flexor']
},

/* ---------- Miembro inferior: huesos (refuerzo) ---------- */
{
  id:'U7-A-Q27', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Miembro inferior', sub:'Fémur: cuello femoral',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer de 78 años cae y sufre fractura del cuello femoral. Días después presenta necrosis avascular de la cabeza femoral.',
  enunciado:'¿Por qué el cuello femoral es especialmente vulnerable a la necrosis avascular tras una fractura, a diferencia de otras zonas del fémur?',
  ops:[
    'Porque la mayoría del riego de la cabeza femoral en el adulto llega por vasos que recorren el cuello y pueden desgarrarse con la fractura',
    'Porque el cuello femoral no tiene periostio',
    'Porque la cabeza femoral se nutre solo por difusión desde el líquido sinovial, y eso nunca cambia con la edad',
    'Porque el cuello femoral no tiene hueso esponjoso, solo cortical'
  ],
  ok:0,
  clave:'El riego principal de la cabeza femoral adulta viene de las arterias retinaculares que ascienden por el cuello; una fractura del cuello las puede romper.',
  exp:'En el adulto, la cabeza femoral recibe su irrigación principalmente de las arterias retinaculares (ramas de las arterias circunflejas femorales medial y lateral) que ascienden pegadas al cuello femoral dentro de la cápsula articular. La arteria del ligamento redondo, que en el niño es una fuente de riego relevante, aporta muy poco en el adulto. Cuando el cuello se fractura, especialmente si el trazo es intracapsular, estos vasos retinaculares se pueden desgarrar o comprimir, dejando la cabeza femoral sin riego suficiente y llevando a necrosis avascular, una complicación temida de este tipo de fractura, sobre todo en personas mayores.',
  no:{
    1:'El periostio existe en todo el fémur, incluido el cuello; su ausencia no es el mecanismo de la necrosis avascular.',
    2:'La dependencia del ligamento redondo sí cambia con la edad: es relevante en el niño pero mínima en el adulto, justo lo contrario de lo que dice esta opción.',
    3:'El cuello femoral sí contiene hueso esponjoso (trabecular) recubierto por una fina cortical, como el resto del hueso.'
  },
  trampa:'Pensar que la irrigación de la cabeza femoral es igual en el niño que en el adulto, cuando el peso relativo de cada fuente vascular cambia con la edad.',
  obj:'Explicar por qué las fracturas del cuello femoral se asocian a necrosis avascular de la cabeza.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro inferior.',
  tags:['cuello femoral','necrosis avascular','arterias retinaculares','fractura de cadera']
},
{
  id:'U7-A-Q28', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Miembro inferior', sub:'Tibia y peroné',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'De la tibia y el peroné, ¿cuál es el hueso que soporta la mayor parte del peso corporal en la pierna?',
  ops:['El peroné (fíbula)','La tibia','Ambos por igual','Ninguno; el peso lo soporta el astrágalo directamente'],
  ok:1,
  clave:'La tibia es el hueso de carga de la pierna; el peroné es sobre todo un punto de inserción muscular y estabilizador del tobillo.',
  exp:'La tibia es el hueso medial y de mayor grosor de la pierna, y es la que se articula directamente con el fémur en la rodilla y con el astrágalo en el tobillo, transmitiendo la mayor parte del peso corporal. El peroné es más delgado, no se articula con el fémur, y su función principal es servir de inserción muscular y de estabilizador lateral de la articulación del tobillo, aportando muy poca carga de peso.',
  no:{
    0:'El peroné no soporta peso de forma significativa; su rol es de estabilización e inserción muscular.',
    2:'La distribución de carga es muy desigual entre ambos, con la tibia llevando la gran mayoría del peso.',
    3:'El astrágalo recibe el peso, pero se lo transmite desde la tibia; no es una vía "directa" independiente de esta.'
  },
  trampa:'Asumir que, por estar "en paralelo", tibia y peroné se reparten el peso por igual.',
  obj:'Diferenciar la función de carga de la tibia frente al rol estabilizador del peroné.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro inferior.',
  tags:['tibia','peroné','carga de peso','pierna']
},

/* ---------- Miembro inferior: músculos y nervios ---------- */
{
  id:'U7-A-Q29', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Miembro inferior: músculos', sub:'Nervio ciático',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Tras una inyección intramuscular mal aplicada en el cuadrante inferointerno del glúteo (en vez del cuadrante superoexterno), un paciente desarrolla dolor que baja por la parte posterior del muslo y debilidad para flexionar la rodilla y mover el pie.',
  enunciado:'¿Qué estructura se lesionó, y por qué el cuadrante superoexterno es la zona segura para inyectar?',
  ops:[
    'El nervio ciático, que discurre por el cuadrante inferointerno del glúteo, lejos del cuadrante superoexterno',
    'El nervio femoral, que pasa por debajo del ligamento inguinal, sin relación con el glúteo',
    'El nervio obturador, que sale por el agujero obturador, alejado de ambos cuadrantes',
    'El nervio pudendo, que inerva el periné, sin relación con la flexión de rodilla'
  ],
  ok:0,
  clave:'El nervio ciático baja por el cuadrante inferointerno del glúteo; las inyecciones intramusculares glúteas se dan en el cuadrante superoexterno precisamente para evitarlo.',
  exp:'El nervio ciático es el nervio más grueso del cuerpo y desciende desde el plexo sacro, saliendo de la pelvis por debajo del músculo piriforme, para descender por la región glútea hacia el muslo posterior. Discurre por el cuadrante inferointerno del glúteo. Por eso las inyecciones intramusculares en el glúteo se aplican en el cuadrante superoexterno, la zona más alejada del trayecto del nervio. Su lesión produce debilidad de los isquiotibiales (flexores de rodilla) y de toda la musculatura por debajo de la rodilla, además de dolor irradiado característico (ciática).',
  no:{
    1:'El nervio femoral inerva el cuádriceps (extensor de rodilla) y la cara anterior del muslo; no tiene relación con la región glútea ni con este cuadro.',
    2:'El obturador inerva los aductores del muslo; su lesión no explica debilidad para flexionar la rodilla ni mover el pie.',
    3:'El pudendo inerva estructuras perineales y no tiene relación con la musculatura del muslo o la pierna.'
  },
  trampa:'Olvidar el motivo anatómico exacto (dónde pasa el nervio) y quedarse solo con "hay que evitar el glúteo inferior" sin poder explicar por qué.',
  obj:'Justificar la técnica de inyección glútea segura a partir del trayecto del nervio ciático.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro inferior.',
  tags:['nervio ciático','inyección intramuscular glútea','cuadrante superoexterno']
},
{
  id:'U7-A-Q30', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Miembro inferior: músculos', sub:'Cuádriceps',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son los cuatro músculos que forman el cuádriceps femoral?',
  ops:[
    'Recto femoral, vasto lateral, vasto medial y vasto intermedio',
    'Sartorio, grácil, semitendinoso y semimembranoso',
    'Bíceps femoral, semitendinoso, semimembranoso y grácil',
    'Recto femoral, sartorio, vasto lateral y bíceps femoral'
  ],
  ok:0,
  clave:'El cuádriceps femoral = recto femoral + vasto lateral + vasto medial + vasto intermedio. Todos se unen en el tendón patelar.',
  exp:'El cuádriceps femoral es el principal extensor de la rodilla y está formado por cuatro músculos: el recto femoral (el único que también cruza la cadera, ayudando a flexionarla), y los tres vastos -lateral, medial e intermedio-, que solo cruzan la rodilla. Los cuatro convergen en un tendón común que envuelve la rótula (patela) y continúa como el ligamento o tendón patelar hasta insertarse en la tuberosidad tibial.',
  no:{
    1:'Sartorio, grácil, semitendinoso y semimembranoso son flexores de rodilla (los últimos dos son isquiotibiales), no parte del cuádriceps extensor.',
    2:'Bíceps femoral, semitendinoso y semimembranoso son los isquiotibiales, flexores de rodilla; el grácil es aductor. Ninguno es parte del cuádriceps.',
    3:'Mezcla un músculo del cuádriceps (recto femoral, vasto lateral) con músculos que no lo son (sartorio, bíceps femoral).'
  },
  trampa:'Mezclar músculos del compartimento anterior (cuádriceps, extensores) con los del posterior (isquiotibiales, flexores).',
  obj:'Nombrar los cuatro componentes del cuádriceps femoral.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro inferior.',
  tags:['cuádriceps femoral','vasto lateral','vasto medial','recto femoral']
},

/* ---------- Articulaciones: clasificación y biomecánica ---------- */
{
  id:'U7-A-Q31', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Articulaciones', sub:'Clasificación funcional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la característica que define a una articulación sinovial y la distingue de una sínfisis o una sinartrosis?',
  ops:[
    'Tiene una cavidad articular llena de líquido sinovial, rodeada por una cápsula',
    'Está formada exclusivamente por tejido óseo continuo, sin ningún tejido interpuesto',
    'Solo permite movimientos de deslizamiento, nunca de rotación',
    'Se encuentra únicamente en el cráneo'
  ],
  ok:0,
  clave:'Sinovial = cavidad articular con líquido sinovial y cápsula (la más móvil). Sínfisis = cartílago fibroso, sin cavidad. Sinartrosis = fibrosa, inmóvil (suturas).',
  exp:'Las articulaciones sinoviales, como la rodilla o el hombro, se caracterizan por tener una verdadera cavidad articular llena de líquido sinovial, delimitada por una cápsula fibrosa revestida internamente por membrana sinovial, lo que les permite el mayor rango de movimiento. Se diferencian de la sínfisis (como la sínfisis del pubis), donde las superficies óseas están unidas por un disco de fibrocartílago sin cavidad, y de la sinartrosis fibrosa (como las suturas craneales), donde el tejido conectivo fibroso une directamente los huesos sin ningún espacio ni cartílago.',
  no:{
    1:'Eso describiría más bien una sinostosis (fusión ósea completa), no una articulación sinovial, que sí tiene tejidos blandos y cavidad.',
    2:'Las sinoviales permiten distintos tipos de movimiento según su forma (bisagra, esferoidea, etc.), no solo deslizamiento.',
    3:'Las articulaciones sinoviales están en todo el cuerpo -rodilla, hombro, cadera, codo-, no solo en el cráneo (donde predominan las sinartrosis/suturas).'
  },
  trampa:'Confundir sínfisis (cartílago, sin cavidad) con sinovial (líquido, con cavidad) porque ambas empiezan con "sin-".',
  obj:'Diferenciar articulación sinovial, sínfisis y sinartrosis por su estructura.',
  ref:'Moore, Anatomía con orientación clínica, capítulo de introducción a las articulaciones.',
  tags:['articulación sinovial','sínfisis','sinartrosis','cápsula articular']
},
{
  id:'U7-A-Q32', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Articulaciones', sub:'Estabilidad ligamentaria',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la función principal de un ligamento en una articulación sinovial?',
  ops:[
    'Unir hueso con hueso y limitar el rango de movimiento para dar estabilidad',
    'Unir músculo con hueso para transmitir la fuerza de la contracción',
    'Producir el líquido sinovial que lubrica la articulación',
    'Amortiguar el impacto entre dos superficies óseas, como lo hace un menisco'
  ],
  ok:0,
  clave:'Ligamento: hueso-hueso, estabiliza y limita movimiento. Tendón: músculo-hueso, transmite fuerza.',
  exp:'Los ligamentos son bandas de tejido conectivo denso que conectan un hueso con otro, generalmente reforzando la cápsula articular. Su función es estabilizar la articulación, guiando el movimiento dentro de un rango fisiológico y evitando desplazamientos excesivos que podrían lesionar las estructuras articulares. Esto es distinto de la función del tendón, que conecta músculo con hueso para transmitir la fuerza de la contracción muscular.',
  no:{
    1:'Esa es la función del tendón, no del ligamento; es un error frecuente confundir ambos términos.',
    2:'El líquido sinovial lo produce la membrana sinovial que reviste la cápsula, no los ligamentos.',
    3:'Esa es la función de estructuras como el menisco (fibrocartílago), no de los ligamentos, que son bandas fibrosas, no cojines de amortiguación.'
  },
  trampa:'Usar "ligamento" y "tendón" como sinónimos.',
  obj:'Diferenciar la función del ligamento de la del tendón y de la del cartílago articular.',
  ref:'Moore, Anatomía con orientación clínica, capítulo de introducción a las articulaciones.',
  tags:['ligamento','tendón','cápsula articular','estabilidad articular']
},

/* ---------- Vascularización de los miembros ---------- */
{
  id:'U7-A-Q33', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Vascularización', sub:'Pulsos periféricos del miembro superior',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Para tomar la presión arterial con esfigmomanómetro y estetoscopio, el examinador coloca el diafragma del estetoscopio en la fosa antecubital, justo medial al tendón del bíceps.',
  enunciado:'¿Qué arteria se está auscultando en ese punto?',
  ops:['La arteria braquial','La arteria axilar','La arteria radial','La arteria cubital'],
  ok:0,
  clave:'La arteria braquial se palpa/ausculta en la fosa antecubital, medial al tendón del bíceps; ahí se toma la presión arterial clásicamente.',
  exp:'La arteria braquial continúa a la arteria axilar y desciende por la cara medial del brazo, acompañando al nervio mediano. En la fosa antecubital (el pliegue del codo), justo medial al tendón del bíceps braquial, es el punto clásico donde se coloca el estetoscopio para auscultar los ruidos de Korotkoff al medir la presión arterial. Ahí mismo se divide en las arterias radial y cubital.',
  no:{
    1:'La axilar es más proximal, en la axila; no es el punto que se usa para tomar la presión en el codo.',
    2:'La radial se palpa en la muñeca, en el lado del pulgar; se usa para tomar el pulso, no para auscultar la presión en el codo.',
    3:'La cubital se palpa en la muñeca, en el lado del meñique; tampoco es el punto de auscultación en el codo.'
  },
  trampa:'Confundir el punto de auscultación (braquial, en el codo) con los puntos de palpación del pulso distal (radial o cubital, en la muñeca).',
  obj:'Ubicar la arteria braquial y su relevancia en la toma de presión arterial.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro superior.',
  tags:['arteria braquial','fosa antecubital','presión arterial','pulso']
},
{
  id:'U7-A-Q34', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Vascularización', sub:'Pulso femoral',
  dif:1, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Dónde se palpa clásicamente el pulso de la arteria femoral?',
  ops:[
    'En el punto medio del ligamento inguinal, entre la espina ilíaca anterosuperior y la sínfisis del pubis',
    'En el hueco poplíteo, detrás de la rodilla',
    'Por delante del maléolo medial del tobillo',
    'En el dorso del pie, lateral al tendón del extensor largo del primer dedo'
  ],
  ok:0,
  clave:'El pulso femoral se palpa en el punto medio inguinal, bajo el ligamento inguinal, entre la EIAS y la sínfisis del pubis.',
  exp:'La arteria femoral es continuación de la arteria ilíaca externa al pasar bajo el ligamento inguinal, y en ese punto -llamado punto medio inguinal, situado a mitad de camino entre la espina ilíaca anterosuperior y la sínfisis del pubis- es relativamente superficial y fácil de palpar. Es un punto de referencia clínico usado tanto para tomar el pulso como para accesos vasculares.',
  no:{
    1:'El hueco poplíteo es donde se palpa el pulso poplíteo, más distal, no el femoral.',
    2:'Por delante del maléolo medial se palpa el pulso tibial posterior (junto con el maléolo), no el femoral.',
    3:'El dorso del pie es donde se palpa el pulso pedio (dorsal del pie), el más distal de la cadena arterial del miembro inferior.'
  },
  trampa:'Confundir los distintos puntos de pulso del miembro inferior (femoral, poplíteo, tibial posterior, pedio), que forman una cadena de proximal a distal.',
  obj:'Ubicar el punto de palpación del pulso femoral.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro inferior.',
  tags:['arteria femoral','punto medio inguinal','pulso femoral']
},

/* ---------- Huesos del cráneo ---------- */
{
  id:'U7-A-Q35', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Cráneo', sub:'Fontanelas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la función de las fontanelas en el cráneo del recién nacido?',
  ops:[
    'Permitir el moldeamiento del cráneo durante el parto y el crecimiento cerebral rápido postnatal',
    'Servir de inserción para los músculos de la masticación',
    'Ser el punto donde se osifica primero todo el cráneo',
    'Formar las órbitas oculares'
  ],
  ok:0,
  clave:'Las fontanelas son áreas de tejido conectivo sin osificar entre los huesos craneales, que permiten moldeamiento en el parto y expansión con el crecimiento cerebral.',
  exp:'Las fontanelas (la anterior o "bregmática" y la posterior o "lambdoidea", entre otras) son zonas membranosas, sin hueso, ubicadas donde confluyen varias suturas craneales en el recién nacido. Permiten que los huesos del cráneo se superpongan ligeramente durante el paso por el canal del parto (moldeamiento) y, después del nacimiento, dan margen para el rápido crecimiento del encéfalo durante el primer año de vida, antes de osificarse por completo.',
  no:{
    1:'Los músculos de la masticación se insertan en zonas óseas específicas (como el arco cigomático o la mandíbula), no en las fontanelas, que son áreas sin hueso.',
    2:'Es justo lo contrario: las fontanelas son las últimas zonas del cráneo en osificarse, no las primeras.',
    3:'Las órbitas están formadas por varios huesos craneofaciales ya osificados (frontal, cigomático, maxilar, etc.), no por las fontanelas.'
  },
  trampa:'Pensar que las fontanelas son un defecto o algo anormal, en vez de una característica funcional normal del desarrollo.',
  obj:'Explicar la función de las fontanelas durante el parto y el desarrollo postnatal.',
  ref:'Moore, Anatomía con orientación clínica, capítulo de cabeza y cuello.',
  tags:['fontanela','cráneo del recién nacido','suturas craneales']
},
{
  id:'U7-A-Q36', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Cráneo', sub:'Suturas craneales',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipo de articulación forman las suturas craneales entre los huesos del cráneo del adulto?',
  ops:['Sinartrosis fibrosa','Articulación sinovial','Sínfisis cartilaginosa','Diartrosis móvil'],
  ok:0,
  clave:'Las suturas craneales son sinartrosis fibrosas: uniones fijas de tejido conectivo fibroso, sin cavidad ni cartílago.',
  exp:'Las suturas son articulaciones fibrosas (sinartrosis) donde los bordes de los huesos craneales, como el frontal y los parietales en la sutura coronal, están unidos por una delgada capa de tejido conectivo fibroso denso. Permiten prácticamente ningún movimiento en el adulto, lo cual es justo lo que se necesita para proteger el encéfalo, y tienden a osificarse progresivamente con la edad (sinostosis).',
  no:{
    1:'Las sinoviales, como la rodilla, tienen cavidad articular con líquido sinovial; las suturas no tienen ninguna cavidad.',
    2:'La sínfisis usa fibrocartílago, como la sínfisis del pubis; las suturas usan tejido fibroso, no cartílago.',
    3:'Diartrosis es sinónimo de articulación móvil (sinovial); las suturas son justamente lo opuesto: inmóviles.'
  },
  trampa:'Asumir que "articulación" siempre implica movimiento, cuando las sinartrosis son articulaciones inmóviles por diseño.',
  obj:'Clasificar las suturas craneales dentro de los tipos de articulación.',
  ref:'Moore, Anatomía con orientación clínica, capítulo de cabeza y cuello.',
  tags:['sutura craneal','sinartrosis','cráneo']
},

/* ---------- Cintura escapular y articulación del hombro ---------- */
{
  id:'U7-A-Q37', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Cintura escapular', sub:'Luxación de hombro',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un jugador de baloncesto sufre una caída con el brazo en abducción y rotación externa forzadas. Queda con el hombro deformado, sin poder moverlo, y refiere el brazo "encajado" en una posición anómala. Es diagnosticado con luxación glenohumeral anterior, la más frecuente de todas las luxaciones articulares.',
  enunciado:'¿Por qué la articulación glenohumeral es la más propensa a luxarse de todo el cuerpo?',
  ops:[
    'Porque prioriza el rango de movimiento sobre la estabilidad: la cavidad glenoidea es poco profunda comparada con el tamaño de la cabeza humeral',
    'Porque no tiene ningún músculo ni ligamento que la estabilice',
    'Porque la cabeza humeral es más pequeña que la cavidad glenoidea',
    'Porque es una articulación fibrosa sin cápsula articular'
  ],
  ok:0,
  clave:'La glenohumeral sacrifica estabilidad ósea por movilidad: cavidad glenoidea pequeña y poco profunda frente a una cabeza humeral grande, dependiente de partes blandas (manguito rotador, rodete glenoideo, ligamentos) para estabilizarse.',
  exp:'La articulación glenohumeral tiene el mayor rango de movimiento de cualquier articulación del cuerpo, y eso tiene un costo: la cavidad glenoidea de la escápula cubre solo una pequeña fracción de la superficie de la cabeza humeral (se compara a veces con una pelota de golf sobre un tee). Esa poca congruencia ósea hace que la estabilidad dependa casi por completo de estructuras blandas -el rodete o labrum glenoideo, la cápsula articular, los ligamentos glenohumerales y, sobre todo, el manguito rotador-. Cuando estas estructuras no logran contener un movimiento forzado, como la abducción con rotación externa, la cabeza humeral se desplaza fuera de la cavidad, típicamente hacia adelante.',
  no:{
    1:'Sí tiene estabilizadores, y precisamente muy importantes (manguito rotador, rodete, ligamentos); lo que ocurre es que dependen de partes blandas en vez de congruencia ósea.',
    2:'Es al revés: la cabeza humeral es considerablemente más grande que la cavidad glenoidea, no más pequeña.',
    3:'Es una articulación sinovial típica, con cápsula articular bien definida, no una articulación fibrosa.'
  },
  trampa:'Buscar la causa en "un mal movimiento" sin conectar con la arquitectura ósea que hace al hombro inherentemente menos estable que otras articulaciones.',
  obj:'Explicar por qué la articulación del hombro combina gran movilidad con alta propensión a luxarse.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro superior.',
  tags:['articulación glenohumeral','luxación de hombro','rodete glenoideo','manguito rotador']
},

/* ---------- Cintura pélvica y articulación de la cadera ---------- */
{
  id:'U7-A-Q38', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Cintura pélvica', sub:'Estabilidad de la cadera',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'A diferencia del hombro, ¿por qué la articulación de la cadera es mucho más estable, aunque menos móvil?',
  ops:[
    'El acetábulo cubre gran parte de la cabeza femoral, dando congruencia ósea, además de un ligamento capsular potente',
    'Porque no tiene ningún ligamento y depende solo de los músculos',
    'Porque la cabeza femoral es más pequeña que el acetábulo, dejando espacio de sobra',
    'Porque es una articulación fibrosa, no sinovial'
  ],
  ok:0,
  clave:'El acetábulo cubre buena parte de la cabeza femoral (alta congruencia ósea), reforzado por una cápsula y ligamentos gruesos (como el iliofemoral) — por eso la cadera es estable pero menos móvil que el hombro.',
  exp:'A diferencia de la cavidad glenoidea del hombro, el acetábulo de la cadera es profundo y cubre una porción considerable de la cabeza femoral, dando de entrada una buena congruencia ósea. A eso se suma una cápsula articular gruesa reforzada por ligamentos potentes, como el iliofemoral (uno de los ligamentos más fuertes del cuerpo). Esta combinación de encaje óseo más refuerzo ligamentario hace que la cadera sea una articulación mucho más estable que el hombro, a costa de tener menos rango de movimiento.',
  no:{
    1:'La cadera sí tiene ligamentos capsulares potentes (iliofemoral, pubofemoral, isquiofemoral) que contribuyen de forma importante a su estabilidad.',
    2:'Es al revés: el buen encaje entre acetábulo y cabeza femoral (poco espacio libre) es justamente lo que aporta estabilidad ósea.',
    3:'La cadera es una articulación sinovial típica (esferoidea), con cápsula y líquido sinovial, no fibrosa.'
  },
  trampa:'Suponer que toda articulación sinovial tiene el mismo balance entre movilidad y estabilidad que el hombro.',
  obj:'Comparar la estabilidad de la cadera con la del hombro y explicar la base anatómica de la diferencia.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro inferior.',
  tags:['articulación de la cadera','acetábulo','ligamento iliofemoral']
},

/* ---------- Rodilla: anatomía articular y meniscos ---------- */
{
  id:'U7-A-Q39', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Rodilla', sub:'Meniscos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la función principal de los meniscos medial y lateral de la rodilla?',
  ops:[
    'Amortiguar y distribuir mejor la carga entre el fémur y la tibia, y mejorar la congruencia articular',
    'Producir el líquido sinovial que lubrica la articulación',
    'Limitar la extensión de la rodilla, como si fueran un ligamento',
    'Formar la cápsula articular de la rodilla'
  ],
  ok:0,
  clave:'Los meniscos son cuñas de fibrocartílago que amortiguan la carga, mejoran la congruencia entre los cóndilos femorales (convexos) y la meseta tibial (relativamente plana), y ayudan a estabilizar la articulación.',
  exp:'Los meniscos son estructuras de fibrocartílago en forma de media luna, interpuestos entre los cóndilos femorales (que son convexos) y la meseta tibial (relativamente plana). Al rellenar ese espacio, aumentan la superficie de contacto y la congruencia entre ambos huesos, distribuyen mejor las fuerzas de carga y actúan como amortiguadores, además de contribuir a la estabilidad de la articulación durante los movimientos de rotación y flexoextensión.',
  no:{
    1:'El líquido sinovial lo produce la membrana sinovial que reviste la cápsula, no los meniscos, que son fibrocartílago.',
    2:'Los meniscos no son estructuras que limiten el rango de movimiento como los ligamentos; su rol es de amortiguación y congruencia.',
    3:'La cápsula articular es una estructura fibrosa aparte que envuelve toda la articulación; los meniscos están dentro de ella, no la forman.'
  },
  trampa:'Confundir la función del menisco (amortiguación/congruencia) con la de un ligamento (limitar movimiento) o con la membrana sinovial (producir líquido).',
  obj:'Explicar la función mecánica de los meniscos en la rodilla.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro inferior.',
  tags:['menisco','articulación femorotibial','rodilla']
},
{
  id:'U7-A-Q40', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Rodilla', sub:'Ligamento cruzado anterior',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una futbolista cambia de dirección bruscamente y siente un "chasquido" en la rodilla, seguido de dolor e inflamación inmediata. En la exploración, la tibia se desplaza hacia adelante respecto al fémur más de lo normal (signo del cajón anterior positivo).',
  enunciado:'¿Qué ligamento se lesionó?',
  ops:['El ligamento cruzado anterior','El ligamento cruzado posterior','El ligamento colateral medial','El ligamento colateral lateral'],
  ok:0,
  clave:'El ligamento cruzado anterior evita el desplazamiento anterior excesivo de la tibia respecto al fémur; su lesión da el signo del cajón anterior positivo.',
  exp:'El ligamento cruzado anterior (LCA) va desde la parte anterior de la meseta tibial hacia la parte posterior del cóndilo femoral lateral, y su función principal es evitar que la tibia se deslice demasiado hacia adelante respecto al fémur. Es un ligamento que se lesiona con frecuencia en deportes con cambios bruscos de dirección o pivoteo, precisamente el mecanismo típico narrado en el caso. El signo del cajón anterior (desplazamiento anterior excesivo de la tibia al traccionarla con la rodilla flexionada) es la prueba clínica clásica para valorar su integridad.',
  no:{
    1:'El cruzado posterior evita el desplazamiento posterior de la tibia; su lesión daría un cajón posterior positivo, no anterior.',
    2:'El colateral medial estabiliza contra el estrés en valgo (hacia adentro); su lesión no produce el signo del cajón, sino inestabilidad lateral.',
    3:'El colateral lateral estabiliza contra el estrés en varo (hacia afuera); tampoco se asocia al signo del cajón anterior.'
  },
  trampa:'Confundir cruzado anterior con posterior por no fijarse en la dirección exacta del desplazamiento (cajón anterior vs. posterior).',
  obj:'Relacionar el mecanismo de lesión y el signo del cajón anterior con el ligamento cruzado anterior.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro inferior.',
  tags:['ligamento cruzado anterior','signo del cajón anterior','rodilla']
},

/* ---------- Mano: huesos, articulaciones y arcos ---------- */
{
  id:'U7-A-Q41', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Mano', sub:'Huesos del carpo',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'De los ocho huesos del carpo, ¿cuál es el que se fractura con mayor frecuencia tras una caída sobre la mano extendida, y por qué es clínicamente importante reconocerlo?',
  ops:[
    'El escafoides, porque su fractura puede pasar desapercibida en la radiografía inicial y complicarse con necrosis avascular',
    'El pisiforme, porque es el hueso más grande del carpo',
    'El ganchoso, porque es el único que se articula con el radio',
    'El semilunar, porque nunca se fractura y por eso no representa un riesgo'
  ],
  ok:0,
  clave:'El escafoides es el hueso del carpo que más se fractura; su riego retrógrado lo hace propenso a necrosis avascular si la fractura no se detecta y trata a tiempo.',
  exp:'El escafoides (o navicular carpiano) es el hueso del carpo que se fractura con mayor frecuencia, típicamente tras una caída con la mano extendida (mecanismo FOOSH). Es clínicamente relevante porque su irrigación es predominantemente retrógrada -entra por su porción distal y nutre el resto del hueso-, así que una fractura, sobre todo en el tercio proximal, puede interrumpir ese riego y llevar a necrosis avascular si no se inmoviliza correctamente. Además, muchas fracturas de escafoides no se ven en la radiografía inicial y solo se hacen evidentes días después, por lo que ante dolor persistente en la tabaquera anatómica se inmoviliza como fractura aunque la radiografía sea normal.',
  no:{
    1:'El pisiforme es, de hecho, de los huesos más pequeños del carpo, no el más grande.',
    2:'Ningún hueso del carpo se articula directamente con el radio salvo el escafoides y el semilunar, en la articulación radiocarpiana; el ganchoso no cumple esa descripción.',
    3:'El semilunar sí puede fracturarse o luxarse (aunque con menor frecuencia que el escafoides), y de hecho su luxación es una urgencia por el riesgo de comprimir el nervio mediano.'
  },
  trampa:'Subestimar una fractura de escafoides porque la radiografía inicial parece normal.',
  obj:'Reconocer al escafoides como el hueso del carpo más fracturado y su riesgo de necrosis avascular.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro superior.',
  tags:['escafoides','fractura de escafoides','necrosis avascular','carpo']
},
{
  id:'U7-A-Q42', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Mano', sub:'Arco palmar',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué arterias forman el arco palmar superficial de la mano?',
  ops:[
    'Principalmente la arteria cubital, completado por una rama de la arteria radial',
    'Exclusivamente la arteria radial',
    'La arteria braquial directamente, sin dividirse antes',
    'La arteria axilar, que llega intacta hasta la palma'
  ],
  ok:0,
  clave:'El arco palmar superficial lo forma principalmente la arteria cubital, completado por la rama palmar superficial de la radial.',
  exp:'La arteria braquial se divide en el codo en las arterias radial y cubital. En la mano, la arteria cubital continúa como el componente principal del arco palmar superficial, que se completa (se "cierra") con una pequeña rama palmar superficial de la arteria radial. Este arco irriga los dedos a través de las arterias digitales comunes. Existe también un arco palmar profundo, formado principalmente por la arteria radial, con una contribución menor de la cubital: es la relación inversa a la del arco superficial.',
  no:{
    1:'La radial contribuye poco al arco superficial (es la dominante en el arco profundo); no lo forma exclusivamente.',
    2:'La braquial ya se dividió en radial y cubital antes de llegar a la mano; no llega intacta a la palma.',
    3:'La axilar es mucho más proximal y ya dio origen a la braquial mucho antes de llegar a la muñeca o la mano.'
  },
  trampa:'Invertir cuál arteria domina el arco superficial (cubital) y cuál el profundo (radial).',
  obj:'Identificar las arterias que forman el arco palmar superficial de la mano.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro superior.',
  tags:['arco palmar superficial','arteria cubital','arteria radial','mano']
},

/* ---------- Pie: huesos, articulaciones y arcos plantares ---------- */
{
  id:'U7-A-Q43', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Pie', sub:'Esguince de tobillo',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un corredor gira el pie hacia adentro (inversión forzada) al pisar mal en una superficie irregular y siente dolor agudo e hinchazón inmediata en la cara lateral del tobillo.',
  enunciado:'¿Qué ligamento es el que se lesiona con mayor frecuencia en este mecanismo, y por qué?',
  ops:[
    'El ligamento peroneoastragalino anterior, porque es el más débil de los estabilizadores laterales del tobillo y el primero en tensarse con la inversión',
    'El ligamento deltoideo, porque es el más débil de todo el tobillo',
    'El ligamento cruzado anterior, porque conecta el astrágalo con la tibia',
    'El ligamento calcaneofibular, porque es el único que existe en la cara lateral del tobillo'
  ],
  ok:0,
  clave:'El esguince de tobillo por inversión lesiona con mayor frecuencia el ligamento peroneoastragalino anterior, el más débil del complejo ligamentario lateral.',
  exp:'El tobillo tiene un complejo ligamentario lateral formado por tres ligamentos: el peroneoastragalino anterior, el calcaneofibular y el peroneoastragalino posterior. Ante un movimiento de inversión forzada (el pie girando hacia adentro), el peroneoastragalino anterior es el primero en tensarse y, al ser el más débil de los tres, es el que se lesiona con mayor frecuencia, siendo la causa más común de esguince de tobillo. Si la fuerza es mayor, puede lesionarse también el calcaneofibular.',
  no:{
    1:'El ligamento deltoideo está en la cara medial del tobillo y es, de hecho, más fuerte y grueso que los ligamentos laterales; se lesiona con la eversión, no con la inversión.',
    2:'El ligamento cruzado anterior está en la rodilla, no en el tobillo; no tiene relación con este mecanismo.',
    3:'El calcaneofibular existe, pero no es el único ligamento lateral del tobillo, y no es el que se lesiona primero en este mecanismo.'
  },
  trampa:'Confundir inversión (mecanismo más común, lesiona ligamentos laterales) con eversión (menos común, lesiona el deltoideo medial).',
  obj:'Relacionar el mecanismo de inversión del tobillo con la lesión del ligamento peroneoastragalino anterior.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro inferior.',
  tags:['esguince de tobillo','ligamento peroneoastragalino anterior','inversión del pie']
},
{
  id:'U7-A-Q44', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Pie', sub:'Arcos plantares',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la función principal de los arcos longitudinales del pie?',
  ops:[
    'Distribuir el peso corporal y absorber el impacto durante la marcha, actuando como un resorte',
    'Servir de inserción única para el tendón de Aquiles',
    'Formar la articulación del tobillo entre tibia y astrágalo',
    'Evitar por completo cualquier movimiento del pie durante la marcha'
  ],
  ok:0,
  clave:'Los arcos longitudinales (medial y lateral) distribuyen el peso y absorben impacto, funcionando como un resorte durante la marcha.',
  exp:'El pie tiene arcos longitudinales (medial y lateral) y un arco transverso, sostenidos por la disposición de los huesos del tarso y metatarso junto con ligamentos y músculos (como la fascia plantar). Estos arcos permiten que el pie se comporte como un resorte flexible: se aplanan ligeramente al recibir el peso, absorbiendo impacto, y recuperan su forma al despegar, ayudando a propulsar el paso. Es un diseño biomecánico para la marcha y la carga de peso, no una estructura rígida.',
  no:{
    1:'El tendón de Aquiles se inserta en el calcáneo, no específicamente en los arcos; y los arcos tienen múltiples inserciones musculares y ligamentarias, no una sola.',
    2:'La articulación del tobillo (talocrural) la forman tibia, peroné y astrágalo; es una articulación distinta de los arcos plantares.',
    3:'Es lo contrario: los arcos permiten cierta flexibilidad y absorción de impacto, no una rigidez total.'
  },
  trampa:'Pensar en los arcos como estructuras puramente estáticas en vez de dinámicas (que se aplanan y recuperan con cada paso).',
  obj:'Explicar la función biomecánica de los arcos longitudinales del pie.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro inferior.',
  tags:['arco longitudinal','fascia plantar','biomecánica del pie']
},

/* ---------- Dermatomas y miotomas ---------- */
{
  id:'U7-A-Q45', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Dermatomas', sub:'Definición de dermatoma',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es un dermatoma?',
  ops:[
    'El área de piel inervada sensitivamente por las fibras de una sola raíz nerviosa espinal',
    'El grupo de músculos inervados por una sola raíz nerviosa espinal',
    'Una capa específica de la epidermis',
    'El territorio de piel irrigado por una sola arteria cutánea'
  ],
  ok:0,
  clave:'Dermatoma = territorio cutáneo sensitivo de UNA raíz espinal. Miotoma = grupo muscular inervado por UNA raíz espinal.',
  exp:'Un dermatoma es la franja de piel cuya sensibilidad depende de las fibras aferentes de una única raíz nerviosa espinal (por ejemplo, C6 cubre el pulgar, T4 la línea de los pezones, L4 la cara medial de la pierna). Los dermatomas se usan clínicamente para localizar el nivel de una lesión medular o radicular: si un paciente pierde sensibilidad en una franja concreta, esa franja apunta a la raíz afectada. Es un concepto distinto pero complementario del miotoma, que es el grupo muscular inervado por esa misma raíz.',
  no:{
    1:'Esa es la definición de miotoma, el equivalente motor del dermatoma, no del dermatoma en sí.',
    2:'Las capas de la epidermis (córneo, granuloso, espinoso, basal) son un concepto histológico, sin relación con la inervación por raíces.',
    3:'La irrigación arterial de la piel no sigue el mismo patrón segmentario que la inervación por raíces nerviosas; son dos mapas distintos del cuerpo.'
  },
  trampa:'Confundir dermatoma (sensitivo, piel) con miotoma (motor, músculo).',
  obj:'Definir dermatoma y diferenciarlo de miotoma.',
  ref:'Moore, Anatomía con orientación clínica, capítulo de introducción al sistema nervioso periférico.',
  tags:['dermatoma','miotoma','raíz espinal','nivel radicular']
},
{
  id:'U7-A-Q46', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Dermatomas', sub:'Aplicación clínica',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente refiere pérdida de sensibilidad en una franja de piel que rodea el tronco a la altura del ombligo.',
  enunciado:'¿A qué nivel radicular corresponde ese dermatoma y qué utilidad clínica tiene reconocerlo?',
  ops:[
    'T10; permite estimar el nivel de una lesión medular o el nivel sensitivo alcanzado por anestesia epidural',
    'L1; indica siempre una hernia discal lumbar',
    'C4; sugiere compromiso del nervio frénico',
    'T4; indica siempre patología cardiaca'
  ],
  ok:0,
  clave:'El dermatoma T10 corresponde al nivel del ombligo; sirve como referencia clínica rápida para localizar niveles medulares o de bloqueo anestésico.',
  exp:'El dermatoma T10 corresponde a la franja de piel a la altura del ombligo, y es uno de los puntos de referencia (landmarks) dermatómicos más usados en clínica: T4 se ubica en la línea de los pezones, T10 en el ombligo, y L1 en el pliegue inguinal. Reconocer estos niveles permite, por ejemplo, estimar hasta dónde llega el bloqueo sensitivo de una anestesia epidural o localizar aproximadamente el nivel de una lesión medular a partir de dónde empieza la pérdida de sensibilidad.',
  no:{
    1:'El nivel L1 no "indica siempre" una hernia discal; una alteración en ese dermatoma sugiere afectación radicular en ese nivel, pero puede tener muchas causas distintas.',
    2:'C4 corresponde a la zona sobre el hombro/clavícula, no al ombligo; y aunque el nervio frénico nace de C3-C5, no es lo que describe este caso.',
    3:'T4 está en la línea de los pezones, no en el ombligo, y una alteración sensitiva ahí no "indica siempre" patología cardiaca (el dolor cardiaco irradiado es un fenómeno distinto, de dolor referido visceral, no de pérdida de sensibilidad cutánea).'
  },
  trampa:'Mezclar dermatomas de referencia (T4 pezones, T10 ombligo, L1 ingle) o sacar conclusiones diagnósticas excesivas de un solo hallazgo dermatómico.',
  obj:'Ubicar el dermatoma T10 y su utilidad como referencia clínica.',
  ref:'Moore, Anatomía con orientación clínica, capítulo de introducción al sistema nervioso periférico.',
  tags:['dermatoma T10','nivel sensitivo','anestesia epidural']
},

/* ---------- Sistema linfático de los miembros ---------- */
{
  id:'U7-A-Q47', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Sistema linfático', sub:'Drenaje del miembro superior',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Hacia qué grupo ganglionar drena principalmente la linfa del miembro superior?',
  ops:['Los ganglios axilares','Los ganglios inguinales','Los ganglios cervicales profundos','Los ganglios mesentéricos'],
  ok:0,
  clave:'La linfa del miembro superior drena principalmente hacia los ganglios axilares.',
  exp:'Los vasos linfáticos del miembro superior siguen en general el trayecto de las venas superficiales y profundas, y confluyen hacia los ganglios linfáticos axilares, ubicados en la axila. De ahí la importancia clínica de explorar la axila ante infecciones o lesiones sospechosas en la mano, el brazo o el antebrazo, y la relevancia de los ganglios axilares centinela en la estadificación del cáncer de mama, que también drena parcialmente hacia ese grupo ganglionar.',
  no:{
    1:'Los ganglios inguinales reciben el drenaje linfático del miembro inferior y de parte de la región perineal, no del miembro superior.',
    2:'Los ganglios cervicales profundos drenan cabeza y cuello, sin relación directa con el miembro superior.',
    3:'Los ganglios mesentéricos drenan las vísceras abdominales, sin relación con los miembros.'
  },
  trampa:'Confundir el drenaje del miembro superior (axilar) con el del miembro inferior (inguinal).',
  obj:'Identificar el grupo ganglionar principal de drenaje del miembro superior.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro superior.',
  tags:['ganglios axilares','drenaje linfático','miembro superior']
},
{
  id:'U7-A-Q48', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Sistema linfático', sub:'Linfedema',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Tras una mastectomía con disección de ganglios axilares por cáncer de mama, una paciente desarrolla hinchazón crónica y progresiva del brazo del mismo lado, que no mejora al elevar la extremidad.',
  enunciado:'¿Cómo se explica esta hinchazón desde el punto de vista anatómico?',
  ops:[
    'La extirpación de los ganglios axilares interrumpe el drenaje linfático normal del brazo, causando acumulación de linfa (linfedema)',
    'Se debe a una trombosis de la arteria axilar por la cirugía',
    'Se debe a una lesión del nervio radial durante la cirugía',
    'Es un efecto esperado de la anestesia general, no relacionado con la cirugía axilar en sí'
  ],
  ok:0,
  clave:'El linfedema del brazo tras disección axilar se debe a la interrupción del drenaje linfático normal del miembro superior, que confluye en los ganglios axilares extirpados.',
  exp:'Como la linfa del miembro superior drena principalmente hacia los ganglios axilares, extirpar ese grupo ganglionar (frecuente en cirugía oncológica de mama para estadificar o tratar el cáncer) interrumpe las vías normales de drenaje linfático del brazo. La linfa que ya no puede circular con normalidad hacia el torrente venoso se va acumulando progresivamente en los tejidos blandos, produciendo el linfedema: una hinchazón crónica, a menudo difícil de tratar, que no mejora simplemente elevando el brazo (a diferencia de un edema por otras causas).',
  no:{
    1:'Una trombosis arterial daría signos de isquemia (palidez, dolor, ausencia de pulso), no una hinchazón crónica progresiva; el mecanismo descrito es linfático, no arterial.',
    2:'Una lesión del nervio radial daría déficit motor (mano péndula) y sensitivo, no hinchazón por acumulación de líquido.',
    3:'La anestesia general no produce linfedema; el mecanismo es específicamente quirúrgico, por la interrupción del drenaje linfático axilar.'
  },
  trampa:'Atribuir la hinchazón a la cirugía "en general" sin identificar el mecanismo linfático específico.',
  obj:'Explicar el linfedema postquirúrgico como consecuencia de la interrupción del drenaje linfático axilar.',
  ref:'Moore, Anatomía con orientación clínica, capítulo del miembro superior.',
  tags:['linfedema','ganglios axilares','drenaje linfático','disección axilar']
},

/* ---------- Anatomía de superficie y puntos de referencia clínicos ---------- */
{
  id:'U7-A-Q49', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Anatomía de superficie', sub:'Puntos de referencia óseos',
  dif:1, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué utilidad tiene identificar puntos de referencia óseos palpables, como el acromion o la espina ilíaca anterosuperior, en la exploración física?',
  ops:[
    'Sirven de guía para localizar otras estructuras (articulaciones, nervios, vasos) que no se pueden ver ni palpar directamente',
    'Son los únicos puntos del cuerpo donde se puede medir la presión arterial',
    'Solo tienen valor estético, sin utilidad clínica',
    'Sirven exclusivamente para calcular la talla de una persona'
  ],
  ok:0,
  clave:'Los puntos de referencia óseos palpables sirven como mapa de superficie para ubicar estructuras profundas que no se ven ni se palpan directamente.',
  exp:'La anatomía de superficie usa puntos óseos fácilmente palpables -como el acromion, la espina ilíaca anterosuperior, el maléolo medial o la apófisis espinosa de C7- como referencias para localizar, sin necesidad de imágenes, estructuras que están debajo de la piel y no son palpables por sí mismas: articulaciones, trayectos nerviosos, niveles vertebrales o puntos de punción segura. Por ejemplo, el punto medio inguinal (entre la espina ilíaca anterosuperior y la sínfisis del pubis) ubica la arteria femoral, aunque la arteria en sí no se vea.',
  no:{
    1:'La presión arterial se toma en la arteria braquial por convención práctica, no porque sea el único punto óseo relevante; de hecho ese punto ni siquiera es óseo.',
    2:'Tienen un valor clínico central -localización de estructuras, guía de procedimientos-, no solo estético.',
    3:'Calcular la talla usa mediciones distintas (como la longitud de huesos largos en antropometría), pero no es la utilidad principal de estos puntos en la exploración física habitual.'
  },
  trampa:'Ver la anatomía de superficie como un tema "decorativo" y no como la base práctica de la exploración física.',
  obj:'Explicar la utilidad clínica de los puntos de referencia óseos en la exploración física.',
  ref:'Moore, Anatomía con orientación clínica, capítulo de introducción.',
  tags:['anatomía de superficie','puntos de referencia óseos','exploración física']
},
{
  id:'U7-A-Q50', programa:'unirm', cuatri:7,
  esp:'Anatomía I', tema:'Anatomía de superficie', sub:'Vértebra prominente',
  dif:1, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Al palpar la nuca de un paciente para contar los niveles vertebrales, ¿qué vértebra se usa como punto de partida por ser la más fácil de identificar por palpación?',
  ops:['C7 (vértebra prominente)','C1 (atlas)','T1','C4'],
  ok:0,
  clave:'C7 se llama "vértebra prominente" porque tiene la apófisis espinosa más larga y palpable de la región cervical, y sirve de punto de partida para contar niveles vertebrales.',
  exp:'C7 se conoce como la vértebra prominente porque su apófisis espinosa es notablemente más larga que la de las demás vértebras cervicales, lo que la hace fácilmente visible y palpable como un relieve óseo en la base del cuello, incluso en personas con poco panículo adiposo. Por eso se usa como punto de partida confiable para contar niveles vertebrales hacia arriba o hacia abajo durante la exploración física o antes de procedimientos como punciones lumbares o epidurales.',
  no:{
    1:'El atlas (C1) no tiene apófisis espinosa prominente -de hecho, ni siquiera tiene cuerpo vertebral- y no es palpable como relieve en la nuca.',
    2:'T1 sí tiene una apófisis espinosa larga, similar a la de C7, pero es C7 la que convencionalmente se usa como referencia inicial por ubicarse justo en la transición cervicotorácica.',
    3:'C4 es una vértebra cervical típica, sin ninguna característica que la haga especialmente palpable o prominente.'
  },
  trampa:'Confundir C7 con T1, ya que ambas pueden tener apófisis espinosas prominentes; la convención clínica usa C7 como referencia estándar.',
  obj:'Identificar C7 como referencia palpable para contar niveles vertebrales.',
  ref:'Moore, Anatomía con orientación clínica, capítulo de espalda.',
  tags:['vértebra prominente','C7','anatomía de superficie']
}

]);
