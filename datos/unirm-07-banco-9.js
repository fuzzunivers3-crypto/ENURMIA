/* ============================================================
   UNIRMIA — BANCO 9, CUATRIMESTRE 7 — BIOQUÍMICA I (ampliación)
   Primer lote de 20 preguntas (U7-B-Q12 a Q31). Con el banco 10
   llevan la materia de 11 a 50 preguntas y cubren los 13 temas del
   temario. Mismo estándar que el resto: dato clave, explicación de
   por qué falla cada opción, trampa y bibliografía. El orden de las
   opciones lo reparte datos/unirm-orden-opciones.js.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ---------- Agua, pH y amortiguadores ---------- */
{
  id:'U7-B-Q12', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Agua, pH y amortiguadores', sub:'Ecuación de Henderson-Hasselbalch',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Una solución amortiguadora contiene acetato 0,1 M y ácido acético 0,01 M. Si el pKa del ácido acético es 4,76, ¿cuál es el pH aproximado de la solución?',
  ops:['5,76','3,76','4,76','6,76'],
  ok:0,
  clave:'pH = pKa + log([A⁻]/[HA]). Con una relación 10:1, el pH es una unidad mayor que el pKa.',
  exp:'La ecuación de Henderson-Hasselbalch relaciona el pH con el pKa y con el cociente entre la forma desprotonada (base conjugada, el acetato) y la protonada (el ácido acético). Aquí el cociente es 0,1/0,01 = 10, y el logaritmo de 10 es 1. Por tanto, pH = 4,76 + 1 = 5,76. Si predominara el ácido, el pH quedaría por debajo del pKa; si las dos formas estuvieran en igual cantidad, el pH sería igual al pKa.',
  no:{
    1:'3,76 resultaría de invertir el cociente (ácido/base) y restar una unidad, es decir, de suponer que el ácido predomina diez veces.',
    2:'4,76 sería el pH si las concentraciones de acetato y de ácido acético fueran iguales (cociente 1, logaritmo 0).',
    3:'6,76 exigiría un cociente de 100:1, es decir, dos unidades de logaritmo.'
  },
  trampa:'Poner el ácido en el numerador. En la ecuación, la base conjugada (A⁻) va arriba: más base, más pH.',
  obj:'Aplicar la ecuación de Henderson-Hasselbalch para calcular el pH de un amortiguador.',
  ref:'Lehninger, Principios de Bioquímica, cap. 2.',
  tags:['pH','pKa','amortiguador','Henderson-Hasselbalch']
},
{
  id:'U7-B-Q13', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Agua, pH y amortiguadores', sub:'Compensación respiratoria',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un joven con diabetes tipo 1 y cetoacidosis llega a urgencias con pH de 7,10, bicarbonato de 8 mEq/L y una respiración profunda y rápida (respiración de Kussmaul).',
  enunciado:'¿Cómo ayuda esa respiración al equilibrio ácido-base del paciente?',
  ops:['Elimina CO₂, lo que desplaza el equilibrio del sistema bicarbonato y eleva el pH','Aumenta la producción de bicarbonato en el riñón','Retiene CO₂ para fabricar más ácido carbónico','Elimina los cuerpos cetónicos por el aire espirado'],
  ok:0,
  clave:'CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. Al espirar más CO₂, el equilibrio se desplaza y baja el H⁺.',
  exp:'El sistema bicarbonato es abierto: el CO₂ disuelto puede eliminarse por los pulmones. Cuando se acumulan cetoácidos, el H⁺ combina con el bicarbonato y se forma H₂CO₃, que se descompone en CO₂ y agua. La hiperventilación elimina ese CO₂, con lo que el equilibrio se desplaza en el sentido de consumir H⁺ y el pH sube hacia lo normal. Es una compensación respiratoria de la acidosis metabólica; la corrección definitiva exige tratar la causa con insulina y líquidos.',
  no:{
    1:'La producción renal de bicarbonato es una compensación lenta, de horas o días, y no explica la respiración rápida.',
    2:'Retener CO₂ empeoraría la acidosis, porque aumentaría la cantidad de ácido carbónico.',
    3:'Se elimina algo de acetona por el aliento (olor afrutado), pero no es lo que corrige el pH.'
  },
  trampa:'Pensar que respirar rápido "aporta oxígeno" para corregir la acidosis. Lo que importa es la salida de CO₂.',
  obj:'Explicar el papel del sistema bicarbonato y de la ventilación en el equilibrio ácido-base.',
  ref:'Lehninger, Principios de Bioquímica, cap. 2.',
  tags:['pH','bicarbonato','amortiguador','acidosis']
},
{
  id:'U7-B-Q14', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Agua, pH y amortiguadores', sub:'Efecto hidrofóbico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Los fosfolípidos, moléculas con una cabeza polar y colas apolares, forman espontáneamente bicapas en agua. ¿Qué fenómeno físico-químico impulsa esa organización?',
  ops:['El efecto hidrofóbico: agrupar las colas apolares libera moléculas de agua ordenadas y aumenta la entropía del solvente','La formación de enlaces covalentes entre las colas apolares','La atracción entre las cargas de las cabezas polares de distintas moléculas','La evaporación del agua alrededor de las colas'],
  ok:0,
  clave:'El agua ordena una capa alrededor de las partes apolares. Al agrupar lo apolar, se libera agua y sube la entropía: es el efecto hidrofóbico.',
  exp:'Las moléculas de agua forman una red de puentes de hidrógeno. Alrededor de una cola apolar, el agua debe ordenarse en una "jaula", con un coste entrópico. Cuando las colas se agrupan y esconden de ella, esa agua se libera y la entropía total del sistema aumenta. Es una fuerza impulsada por el agua, y no por atracciones entre las colas. Además de las bicapas, explica la formación de micelas y el plegamiento de las proteínas con un núcleo hidrofóbico.',
  no:{
    1:'No se forman enlaces covalentes; la bicapa se mantiene por fuerzas no covalentes.',
    2:'Las cabezas polares interaccionan con el agua, y ese no es el motor de la organización.',
    3:'No hay evaporación; el proceso ocurre en solución, con el agua como parte del sistema.'
  },
  trampa:'Creer que las colas apolares "se atraen" con fuerza. En realidad son excluidas por el agua.',
  obj:'Explicar el efecto hidrofóbico y su papel en la formación de membranas.',
  ref:'Lehninger, Principios de Bioquímica, cap. 2.',
  tags:['pH','agua','anfipático','puentes de hidrógeno','fosfolípido']
},

/* ---------- Aminoácidos y péptidos ---------- */
{
  id:'U7-B-Q15', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Aminoácidos y péptidos', sub:'Aminoácidos esenciales',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de los siguientes aminoácidos es esencial en la dieta humana?',
  ops:['Triptófano','Alanina','Glutamato','Serina'],
  ok:0,
  clave:'Esenciales (9): fenilalanina, valina, triptófano, treonina, isoleucina, metionina, histidina, leucina, lisina.',
  exp:'Un aminoácido es esencial cuando el organismo no puede sintetizarlo, o no en cantidad suficiente, y hay que tomarlo con la dieta. Son nueve: fenilalanina, valina, triptófano, treonina, isoleucina, metionina, histidina, leucina y lisina. La alanina, el glutamato y la serina se sintetizan a partir de intermediarios del metabolismo, como el piruvato, el α-cetoglutarato y el 3-fosfoglicerato. El triptófano es además precursor de la serotonina y de la niacina.',
  no:{
    1:'La alanina se forma por transaminación del piruvato.',
    2:'El glutamato se forma por transaminación del α-cetoglutarato.',
    3:'La serina deriva del 3-fosfoglicerato de la glucólisis.'
  },
  trampa:'Asociar "esencial" con "importante". Todos los aminoácidos son importantes; esencial significa que no se sintetiza y debe venir de la dieta.',
  obj:'Reconocer los aminoácidos esenciales.',
  ref:'Lehninger, Principios de Bioquímica, cap. 3 y 18.',
  tags:['aminoácido','esencial','triptófano']
},
{
  id:'U7-B-Q16', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Aminoácidos y péptidos', sub:'Fenilcetonuria',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En el cribado neonatal, un recién nacido tiene la fenilalanina muy elevada. Sin tratamiento, desarrollaría retraso mental, piel y pelo claros y un olor a moho. Se diagnostica fenilcetonuria.',
  enunciado:'¿Qué defecto bioquímico explica la enfermedad y por qué la tirosina pasa a ser esencial en estos pacientes?',
  ops:['Déficit de fenilalanina hidroxilasa; sin ella la fenilalanina no se convierte en tirosina, que hay que aportar en la dieta','Déficit de tirosinasa; la tirosina no puede sintetizarse ni siquiera con la dieta','Exceso de tirosina, que inhibe la síntesis de fenilalanina','Un defecto del transporte intestinal de todos los aminoácidos'],
  ok:0,
  clave:'PKU: fenilalanina hidroxilasa (con BH4) ausente → Phe se acumula, Tyr falta. Tratamiento: dieta pobre en Phe.',
  exp:'La fenilalanina hidroxilasa convierte la fenilalanina en tirosina, con tetrahidrobiopterina como cofactor. Si falta, la fenilalanina se acumula y se desvía a fenilcetonas, que son tóxicas para el cerebro en desarrollo, y la tirosina deja de sintetizarse y se convierte en un aminoácido condicionalmente esencial. La tirosina es precursora de la melanina, y por eso estos niños tienen la piel y el pelo claros. El cribado neonatal y la dieta baja en fenilalanina desde los primeros días evitan el daño neurológico.',
  no:{
    1:'El déficit de tirosinasa causa albinismo, y no fenilcetonuria.',
    2:'Es al revés: falta tirosina y sobra fenilalanina.',
    3:'No hay un defecto de transporte generalizado; el problema es una enzima concreta.'
  },
  trampa:'Confundir la fenilalanina hidroxilasa (fenilcetonuria) con la tirosinasa (albinismo), aunque ambas afectan la vía de la tirosina.',
  obj:'Relacionar un defecto enzimático con el metabolismo de fenilalanina y tirosina.',
  ref:'Lehninger, Principios de Bioquímica, cap. 18.',
  tags:['aminoácido','esencial','fenilalanina','tirosina','fenilcetonuria']
},
{
  id:'U7-B-Q17', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Aminoácidos y péptidos', sub:'Punto isoeléctrico y electroforesis',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una proteína con punto isoeléctrico de 5,0 se coloca en una electroforesis con un tampón de pH 8,6.',
  enunciado:'¿Cómo se comportará la proteína?',
  ops:['Tendrá carga neta negativa y migrará hacia el ánodo (polo positivo)','Tendrá carga neta positiva y migrará hacia el cátodo (polo negativo)','No tendrá carga neta y no migrará','Se desnaturalizará y se precipitará'],
  ok:0,
  clave:'pH > pI → la proteína pierde protones y queda con carga neta negativa (migra al ánodo). pH < pI → carga positiva. pH = pI → sin carga neta.',
  exp:'El punto isoeléctrico es el pH al que la carga neta de una proteína es cero. Si el pH del medio está por encima (8,6 > 5,0), los grupos ionizables ceden protones y predominan las cargas negativas, de modo que la proteína migra hacia el polo positivo. Por debajo del pI ocurre lo contrario. Este principio explica la separación de proteínas en la electroforesis y su menor solubilidad cuando el pH coincide con el pI.',
  no:{
    1:'Con carga positiva migraría al cátodo, pero esto ocurriría solo si el pH estuviera por debajo del pI.',
    2:'La carga neta solo sería cero si el pH fuera igual al pI (5,0), y no es el caso.',
    3:'Un pH de 8,6 es suave, y no desnaturaliza una proteína en una electroforesis.'
  },
  trampa:'Recordar la regla al revés. Si el pH sube por encima del pI, hay más desprotonación y más carga negativa.',
  obj:'Predecir la carga neta y la migración de una proteína según el pH y el pI.',
  ref:'Lehninger, Principios de Bioquímica, cap. 3.',
  tags:['aminoácido','punto isoeléctrico','electroforesis','enlace peptídico']
},

/* ---------- Estructura y función de las proteínas ---------- */
{
  id:'U7-B-Q18', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Estructura y función de las proteínas', sub:'Enlace peptídico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el enlace peptídico es plano y no permite una rotación libre?',
  ops:['Porque por resonancia tiene un carácter parcial de doble enlace','Porque es un enlace iónico','Porque es un puente de hidrógeno','Porque está unido a un átomo de azufre'],
  ok:0,
  clave:'El enlace C–N del péptido tiene resonancia (carácter de doble enlace parcial): es plano, rígido y casi siempre trans.',
  exp:'El par de electrones del nitrógeno se deslocaliza hacia el carbonilo, con lo que el enlace C–N adquiere un carácter de doble enlace (aproximadamente 40 %). Esto impide su rotación y mantiene los seis átomos implicados en un mismo plano, generalmente en configuración trans. Como solo giran libremente los enlaces con el carbono α (los ángulos phi y psi), el número de conformaciones posibles de una cadena queda muy limitado, y eso condiciona el plegamiento.',
  no:{
    1:'Es un enlace covalente, no iónico; se forma por condensación entre el grupo carboxilo y el amino.',
    2:'Los puentes de hidrógeno son interacciones débiles entre grupos de la cadena, y no forman parte del enlace peptídico.',
    3:'El azufre participa en los puentes disulfuro entre cisteínas, y no en el enlace peptídico.'
  },
  trampa:'Confundir el enlace peptídico (rígido) con los enlaces del carbono α (que sí giran).',
  obj:'Explicar las características del enlace peptídico y su efecto en el plegamiento.',
  ref:'Lehninger, Principios de Bioquímica, cap. 4.',
  tags:['enlace peptídico','estructura primaria','terciaria','proteína']
},
{
  id:'U7-B-Q19', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Estructura y función de las proteínas', sub:'Hélice alfa',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué aminoácido suele romper una hélice alfa por la rigidez de su anillo, que impide adoptar la geometría necesaria y carece del hidrógeno para formar el puente de hidrógeno?',
  ops:['Prolina','Alanina','Leucina','Glutamato'],
  ok:0,
  clave:'Alfa hélice: puentes de hidrógeno entre el C=O del residuo i y el N–H del residuo i+4; 3,6 residuos por vuelta. La prolina la interrumpe.',
  exp:'En la hélice alfa, cada grupo carbonilo forma un puente de hidrógeno con el N–H situado cuatro residuos más adelante, y la cadena da una vuelta cada 3,6 aminoácidos. La prolina tiene el nitrógeno en un anillo, por lo que no tiene hidrógeno para donar y su rigidez impone un ángulo que no encaja en la hélice, así que suele aparecer en los giros. La alanina, la leucina y el glutamato son formadores de hélice frecuentes.',
  no:{
    1:'La alanina es uno de los aminoácidos que más favorece la formación de hélices alfa.',
    2:'La leucina también estabiliza la hélice, por su cadena lateral hidrofóbica y voluminosa.',
    3:'El glutamato se adapta bien a la hélice, y sus cadenas cargadas pueden formar puentes salinos.'
  },
  trampa:'Confundir la hélice alfa (puentes dentro de la misma cadena) con la lámina beta (puentes entre cadenas adyacentes).',
  obj:'Describir las características de la hélice alfa y los aminoácidos que la desestabilizan.',
  ref:'Lehninger, Principios de Bioquímica, cap. 4.',
  tags:['alfa hélice','estructura secundaria','prolina','proteína']
},
{
  id:'U7-B-Q20', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Estructura y función de las proteínas', sub:'Mutación de la hemoglobina',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño africano de 5 años sufre episodios de dolor intenso en huesos y articulaciones, con anemia y aumento del bazo. Su hemoglobina tiene una sustitución de un ácido glutámico polar por una valina apolar en la posición 6 de la cadena beta (HbS).',
  enunciado:'¿Por qué esa sola sustitución provoca la deformación de los glóbulos rojos?',
  ops:['La valina crea una zona hidrofóbica en la superficie que hace que las moléculas de hemoglobina desoxigenada se agreguen en fibras','La sustitución rompe el enlace peptídico de la cadena beta','La valina se une al hierro del grupo hemo y bloquea el oxígeno','Se pierde por completo la estructura terciaria de la globina'],
  ok:0,
  clave:'HbS: Glu6→Val6 en la cadena β. La HbS desoxigenada polimeriza y el eritrocito se falcifica.',
  exp:'La sustitución de un residuo cargado por uno hidrofóbico en la superficie de la cadena beta crea un "parche pegajoso" que, cuando la hemoglobina está desoxigenada, encaja en un hueco de otra molécula. Las moléculas se agregan en fibras largas que deforman el eritrocito y lo vuelven rígido, y que bloquean los capilares y se destruyen antes de tiempo. Es el ejemplo clásico de cómo un cambio en la estructura primaria altera la función de una proteína.',
  no:{
    1:'El enlace peptídico no se rompe; simplemente se incorpora otro aminoácido en la posición 6.',
    2:'El sitio de unión del oxígeno, el hierro del hemo, no se modifica; el defecto está en la superficie.',
    3:'La estructura terciaria general se conserva; la alteración es localizada y tiene consecuencias solo en el estado desoxigenado.'
  },
  trampa:'Creer que una mutación puntual siempre "rompe" la proteína. Aquí la proteína funciona, pero se agrega en condiciones de baja oxigenación.',
  obj:'Relacionar una mutación en la estructura primaria con la alteración de la función proteica.',
  ref:'Lehninger, Principios de Bioquímica, cap. 5.',
  tags:['hemoglobina','estructura primaria','terciaria','proteína','anemia falciforme']
},
{
  id:'U7-B-Q21', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Estructura y función de las proteínas', sub:'Plegamiento anómalo y priones',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente de 62 años desarrolla demencia rápidamente progresiva y sacudidas musculares (mioclonías). La biopsia cerebral muestra una proteína con un plegamiento anómalo, rica en láminas beta y resistente a las proteasas. Se diagnostica enfermedad de Creutzfeldt-Jakob.',
  enunciado:'¿Qué es lo característico de esta proteína (prión)?',
  ops:['Tiene la misma secuencia de aminoácidos que la proteína normal, pero un plegamiento distinto que puede propagarse a otras moléculas','Tiene una secuencia de aminoácidos distinta por una mutación de la estructura primaria','Es una proteína viral con ácido nucleico propio','Es una proteína desnaturalizada por el calor que se vuelve soluble'],
  ok:0,
  clave:'PrPᶜ (hélices alfa) → PrPˢᶜ (láminas beta): mismo primario, distinto plegamiento. Se propaga convirtiendo a otras moléculas.',
  exp:'La proteína priónica normal (PrPᶜ) es rica en hélices alfa. En la enfermedad, se convierte en una isoforma (PrPˢᶜ) con un plegamiento diferente, rico en láminas beta, que forma agregados insolubles, resiste a la degradación y favorece que otras moléculas normales adopten el mismo plegamiento. La secuencia primaria no cambia: el agente infeccioso es una conformación. Por eso los priones resisten la esterilización habitual, y las enfermedades que causan, como la de Creutzfeldt-Jakob, afectan al cerebro.',
  no:{
    1:'En los casos esporádicos e infecciosos, la secuencia es la normal; solo algunas formas hereditarias tienen mutaciones.',
    2:'Los priones no contienen ácido nucleico, y esa es una de sus particularidades.',
    3:'No es un efecto del calor; los priones resisten el calor habitual, y la esterilización exige condiciones extremas.'
  },
  trampa:'Pensar que toda información hereditaria o infecciosa requiere ácidos nucleicos. Los priones propagan un estado de plegamiento.',
  obj:'Explicar cómo el plegamiento anómalo de una proteína puede causar enfermedad.',
  ref:'Lehninger, Principios de Bioquímica, cap. 4.',
  tags:['estructura secundaria','terciaria','desnaturalización','proteína','prión']
},

/* ---------- Enzimas y cinética enzimática ---------- */
{
  id:'U7-B-Q22', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Enzimas y cinética enzimática', sub:'Constante de Michaelis',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Una enzima A tiene una Km de 0,5 mM para su sustrato, y otra enzima B, de 5 mM, para el mismo sustrato. ¿Qué se puede afirmar?',
  ops:['La enzima A tiene mayor afinidad por el sustrato que la B','La enzima B tiene mayor afinidad por el sustrato que la A','Tienen la misma afinidad, porque la Km no mide afinidad','La enzima A siempre tiene una Vmax mayor'],
  ok:0,
  clave:'Km = concentración de sustrato a la que v = ½ Vmax. Km baja = alta afinidad; Km alta = baja afinidad.',
  exp:'La Km es la concentración de sustrato a la cual la enzima trabaja a la mitad de su velocidad máxima. Una Km baja significa que basta poco sustrato para alcanzar esa velocidad, es decir, que la enzima "lo agarra" con avidez. Por tanto, la enzima A, con una Km diez veces menor, tiene mayor afinidad. La Vmax es una propiedad independiente: depende de la cantidad de enzima y de su velocidad catalítica, y no se puede deducir de la Km.',
  no:{
    1:'Es al revés: una Km mayor indica menor afinidad, porque hace falta más sustrato para llegar a la mitad de la Vmax.',
    2:'La Km sí es una medida inversa de la afinidad aparente de la enzima por el sustrato.',
    3:'La Vmax no depende de la Km; una enzima de alta afinidad puede tener una Vmax baja.'
  },
  trampa:'Interpretar una Km alta como "mejor enzima". Una Km alta significa que necesita más sustrato para funcionar.',
  obj:'Interpretar la Km y la Vmax en la cinética de Michaelis-Menten.',
  ref:'Lehninger, Principios de Bioquímica, cap. 6.',
  tags:['Michaelis','Km','Vmax','enzima']
},
{
  id:'U7-B-Q23', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Enzimas y cinética enzimática', sub:'Inhibición no competitiva',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Un inhibidor no competitivo se une a la enzima en un sitio distinto del sitio activo. ¿Cómo modifica los parámetros cinéticos?',
  ops:['Disminuye la Vmax y no modifica la Km','Aumenta la Km y no modifica la Vmax','Disminuye la Km y la Vmax','No modifica ninguno de los dos'],
  ok:0,
  clave:'Competitivo: Km ↑, Vmax igual (se supera con más sustrato). No competitivo: Vmax ↓, Km igual.',
  exp:'El inhibidor no competitivo se une a un sitio diferente del activo, tanto a la enzima libre como al complejo enzima-sustrato, y reduce la cantidad de enzima funcional. Como no compite con el sustrato, agregar más sustrato no lo supera: la Vmax disminuye. La afinidad de la enzima que queda por su sustrato no cambia, de modo que la Km se mantiene. En una gráfica de dobles recíprocos, las rectas se cortan en el eje de las abscisas.',
  no:{
    1:'Esa es la huella del inhibidor competitivo: compite por el sitio activo, sube la Km y la Vmax se recupera con mucho sustrato.',
    2:'Disminuir ambos es característico de la inhibición incompetitiva, en la que el inhibidor solo se une al complejo enzima-sustrato.',
    3:'Un inhibidor siempre altera algún parámetro; si no lo hiciera, no sería un inhibidor.'
  },
  trampa:'Confundir competitivo con no competitivo. Regla: el competitivo se "gana" añadiendo sustrato; el no competitivo, no.',
  obj:'Diferenciar los tipos de inhibición enzimática por su efecto en Km y Vmax.',
  ref:'Lehninger, Principios de Bioquímica, cap. 6.',
  tags:['inhibidor competitivo','Km','Vmax','enzima','Michaelis']
},
{
  id:'U7-B-Q24', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Enzimas y cinética enzimática', sub:'Cofactores y vitaminas',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un hombre alcohólico y desnutrido llega con confusión, movimientos anormales de los ojos (oftalmoplejía) y marcha inestable. Se sospecha encefalopatía de Wernicke.',
  enunciado:'¿Qué vitamina falta, y cuál es la coenzima que se ve afectada en enzimas como la piruvato deshidrogenasa?',
  ops:['Tiamina (B1); falta pirofosfato de tiamina (TPP)','Riboflavina (B2); falta FAD','Niacina (B3); falta NAD⁺','Piridoxina (B6); falta fosfato de piridoxal'],
  ok:0,
  clave:'Tiamina → TPP: piruvato DH, α-cetoglutarato DH, transcetolasa. Déficit → Wernicke y beriberi.',
  exp:'La tiamina se convierte en pirofosfato de tiamina (TPP), la coenzima de la piruvato deshidrogenasa, la α-cetoglutarato deshidrogenasa y la transcetolasa. Cuando falta, el cerebro, que depende mucho de la oxidación de la glucosa, no obtiene energía suficiente, y aparecen la encefalopatía de Wernicke (confusión, oftalmoplejía, ataxia) y, en su forma crónica, el síndrome de Korsakoff. El alcohol reduce la absorción de tiamina, por lo que es una carencia típica del alcoholismo. Se trata con tiamina antes de administrar glucosa.',
  no:{
    1:'El FAD, derivado de la riboflavina, participa en otras deshidrogenasas, como la succinato deshidrogenasa; su déficit da queilitis y glositis.',
    2:'El NAD⁺ deriva de la niacina, y su déficit causa pelagra (dermatitis, diarrea, demencia).',
    3:'El fosfato de piridoxal interviene en las transaminaciones y descarboxilaciones; su déficit da neuropatía y anemia.'
  },
  trampa:'Dar glucosa a un paciente alcohólico desnutrido antes de la tiamina: puede precipitar o agravar la encefalopatía de Wernicke.',
  obj:'Asociar vitaminas con sus coenzimas y con las enfermedades por déficit.',
  ref:'Lehninger, Principios de Bioquímica, cap. 6 y 14.',
  tags:['cofactor','coenzima','tiamina','enzima','piruvato deshidrogenasa']
},
{
  id:'U7-B-Q25', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Enzimas y cinética enzimática', sub:'pH y temperatura óptimos',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'La pepsina del estómago tiene su actividad máxima a pH 2 y prácticamente no funciona a pH 7, mientras que la tripsina del intestino delgado funciona mejor a pH 8. ¿Cómo se explica esta diferencia?',
  ops:['Cada enzima tiene un pH óptimo, en el que sus grupos ionizables tienen el estado de carga adecuado para el sitio activo y la estructura, y este se adapta al medio donde actúa','Porque la pepsina no es una proteína','Porque la tripsina requiere ácido para activarse','Porque el pH no afecta a la actividad enzimática'],
  ok:0,
  clave:'Cada enzima tiene un pH y una temperatura óptimos; fuera de ellos baja la actividad y, si es extremo, se desnaturaliza.',
  exp:'El pH modifica el estado de ionización de los aminoácidos del sitio activo y de la estructura de la enzima. Cada una funciona mejor en el pH del compartimento donde actúa: el estómago, muy ácido (pepsina), o el intestino delgado, ligeramente alcalino (tripsina y otras enzimas pancreáticas). Fuera de su pH óptimo, la actividad cae, y en pH extremos la proteína puede desnaturalizarse de forma irreversible. Con la temperatura ocurre algo parecido: la actividad crece hasta un óptimo y luego cae bruscamente.',
  no:{
    1:'La pepsina es una proteasa y, como todas las enzimas, una proteína.',
    2:'La tripsina se activa a partir del tripsinógeno por la enteropeptidasa, y no necesita ácido.',
    3:'El pH tiene un efecto muy importante en la actividad enzimática.'
  },
  trampa:'Pensar que el pH óptimo de todas las enzimas es 7. Depende del medio en el que trabaja cada una.',
  obj:'Explicar el efecto del pH y de la temperatura sobre la actividad enzimática.',
  ref:'Lehninger, Principios de Bioquímica, cap. 6.',
  tags:['enzima','cofactor','pH óptimo','pepsina','Michaelis']
},

/* ---------- Carbohidratos: estructura ---------- */
{
  id:'U7-B-Q26', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Carbohidratos: estructura', sub:'Isomería de los monosacáridos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'La galactosa y la glucosa son azúcares que difieren solo en la configuración de un carbono. ¿Cómo se denominan estas moléculas y en qué carbono difieren?',
  ops:['Epímeros, en el carbono 4','Anómeros, en el carbono 1','Enantiómeros, en todos los carbonos','Isómeros de posición, en el carbono 6'],
  ok:0,
  clave:'Epímeros = difieren en un solo carbono asimétrico: galactosa (C4), manosa (C2). Anómeros = difieren en el C1 al ciclarse (α y β).',
  exp:'Los epímeros son azúcares que difieren en la configuración de un único carbono asimétrico. La galactosa es el epímero de la glucosa en el carbono 4, y la manosa lo es en el carbono 2. Los anómeros (α y β) se diferencian en el carbono anomérico (C1 en la glucosa), que surge al ciclarse la molécula. Los enantiómeros son imágenes especulares, como la D-glucosa y la L-glucosa, y difieren en todos los carbonos asimétricos.',
  no:{
    1:'Los anómeros difieren en el carbono anomérico; la glucosa y la galactosa difieren en el C4.',
    2:'Los enantiómeros son imágenes especulares con todos los centros invertidos, y no es el caso de la glucosa y la galactosa.',
    3:'Difieren en la configuración de un carbono, y no en la posición de un grupo funcional.'
  },
  trampa:'Mezclar epímero y anómero. Epímero: cualquier carbono asimétrico distinto; anómero: solo el carbono del grupo carbonilo al ciclar.',
  obj:'Diferenciar epímeros, anómeros y enantiómeros.',
  ref:'Lehninger, Principios de Bioquímica, cap. 7.',
  tags:['monosacárido','glucosa','galactosa','epímero']
},
{
  id:'U7-B-Q27', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Carbohidratos: estructura', sub:'Enlaces glucosídicos y lactosa',
  dif:1, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un joven presenta distensión, gases y diarrea acuosa cada vez que toma leche. Los síntomas desaparecen si la evita. Se diagnostica intolerancia a la lactosa.',
  enunciado:'¿Qué enzima falta y por qué se produce diarrea?',
  ops:['Lactasa; la lactosa no se digiere, arrastra agua en el intestino y es fermentada por las bacterias del colon','Amilasa; el almidón no se digiere y se acumula','Sacarasa; la sacarosa no se hidroliza','Maltasa; la maltosa se acumula en el estómago'],
  ok:0,
  clave:'Lactosa = galactosa β(1→4) glucosa. La lactasa (β-galactosidasa) la hidroliza. Sin ella: diarrea osmótica y fermentación colónica.',
  exp:'La lactosa es un disacárido formado por galactosa y glucosa unidas por un enlace β(1→4). La lactasa del borde en cepillo del intestino delgado lo hidroliza. Si falta, la lactosa llega al colon, donde retiene agua por su efecto osmótico y las bacterias la fermentan, con producción de gases (hidrógeno, CO₂) y ácidos orgánicos: distensión, flatulencia y diarrea. Es muy frecuente en adultos, porque la actividad de la lactasa disminuye después de la infancia en gran parte de la población.',
  no:{
    1:'La amilasa digiere el almidón, y su déficit no produce síntomas ligados a la leche.',
    2:'La sacarasa hidroliza la sacarosa (glucosa y fructosa), presente en el azúcar de mesa.',
    3:'La maltasa digiere la maltosa, procedente de la degradación del almidón.'
  },
  trampa:'Confundir intolerancia (déficit enzimático, síntomas digestivos) con alergia a la proteína de la leche (reacción inmunitaria).',
  obj:'Relacionar la estructura de un disacárido con su digestión y la enfermedad por déficit.',
  ref:'Lehninger, Principios de Bioquímica, cap. 7.',
  tags:['enlace glucosídico','monosacárido','glucosa','lactosa']
},
{
  id:'U7-B-Q28', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Carbohidratos: estructura', sub:'Glucógeno',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un niño de 1 año presenta un abdomen prominente por hepatomegalia y hipoglucemias graves con el ayuno, junto con acidosis láctica y aumento de ácido úrico. Se sospecha enfermedad de von Gierke (glucogenosis tipo I).',
  enunciado:'¿Qué enzima está ausente y por qué hay hipoglucemia?',
  ops:['Glucosa-6-fosfatasa; el hígado no puede liberar glucosa libre desde el glucógeno ni desde la gluconeogénesis','Glucógeno fosforilasa muscular; el músculo no libera glucosa','Fosfofructoquinasa; la glucólisis se bloquea','Glucógeno sintasa; el glucógeno no se sintetiza'],
  ok:0,
  clave:'Glucógeno = polímero de glucosa α(1→4) con ramas α(1→6). Von Gierke: falta glucosa-6-fosfatasa hepática → hipoglucemia en ayuno.',
  exp:'El glucógeno hepático es la reserva de glucosa que sostiene la glucemia en ayunas. Al degradarse, la glucosa-1-fosfato pasa a glucosa-6-fosfato, y solo la glucosa-6-fosfatasa, presente en el hígado y en el riñón, puede convertirla en glucosa libre que sale a la sangre. Si falta, el glucógeno se acumula (hepatomegalia), la gluconeogénesis también se ve bloqueada en su paso final y la glucosa-6-fosfato se desvía hacia la glucólisis, lo que aumenta el lactato y el ácido úrico. El músculo carece de esta enzima por naturaleza, y por eso su glucógeno solo sirve para el propio músculo.',
  no:{
    1:'Ese defecto (enfermedad de McArdle) produce calambres con el ejercicio, pero no hipoglucemia en ayunas.',
    2:'El déficit de fosfofructoquinasa (enfermedad de Tarui) afecta al músculo y no cursa con hepatomegalia ni hipoglucemia.',
    3:'Un déficit de glucógeno sintasa produce hipoglucemia en ayunas, pero con un hígado pequeño, sin acumulación de glucógeno.'
  },
  trampa:'Creer que todo glucógeno puede liberar glucosa a la sangre. Solo el hepático, porque solo el hígado tiene glucosa-6-fosfatasa.',
  obj:'Explicar la estructura del glucógeno y las diferencias entre el hepático y el muscular.',
  ref:'Lehninger, Principios de Bioquímica, cap. 15.',
  tags:['glucógeno','enlace glucosídico','glucosa','glucosa-6-fosfatasa']
},

/* ---------- Glucólisis y gluconeogénesis ---------- */
{
  id:'U7-B-Q29', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Glucólisis y gluconeogénesis', sub:'Balance energético',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Los eritrocitos maduros carecen de núcleo y de mitocondrias. Una muestra de sangre en un tubo, a temperatura ambiente, sigue consumiendo glucosa y produciendo lactato.',
  enunciado:'¿Cuál es la fuente de ATP del eritrocito y cuál es su rendimiento neto por molécula de glucosa?',
  ops:['La glucólisis anaerobia, con un rendimiento neto de 2 ATP','La fosforilación oxidativa, con 30 ATP','El ciclo de Krebs, con 12 ATP','La oxidación de ácidos grasos, con 100 ATP'],
  ok:0,
  clave:'Glucólisis: 2 ATP consumidos, 4 producidos (neto 2), más 2 NADH y 2 piruvato. En el eritrocito el NADH reduce el piruvato a lactato.',
  exp:'Sin mitocondrias, el eritrocito no puede realizar el ciclo de Krebs ni la fosforilación oxidativa, y obtiene todo su ATP de la glucólisis. En ella se invierten 2 ATP en las reacciones de la fase preparatoria y se producen 4 en la de rendimiento, con un balance neto de 2 ATP por glucosa. El NADH generado se reoxida convirtiendo el piruvato en lactato, para que la glucólisis pueda continuar. Por eso una deficiencia de una enzima glucolítica, como la piruvato quinasa, produce anemia hemolítica.',
  no:{
    1:'La fosforilación oxidativa exige mitocondrias, que el eritrocito no tiene.',
    2:'El ciclo de Krebs ocurre en la matriz mitocondrial, ausente aquí.',
    3:'La oxidación de ácidos grasos también es mitocondrial, y además ningún proceso rinde 100 ATP por molécula de glucosa.'
  },
  trampa:'Decir que la glucólisis produce 4 ATP, olvidando los 2 que se consumen al principio. El neto es 2.',
  obj:'Calcular el balance energético de la glucólisis y explicar la dependencia del eritrocito.',
  ref:'Lehninger, Principios de Bioquímica, cap. 14.',
  tags:['glucólisis','piruvato','lactato','ATP','hexoquinasa']
},
{
  id:'U7-B-Q30', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Glucólisis y gluconeogénesis', sub:'Sustratos de la gluconeogénesis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de los siguientes compuestos NO puede convertirse en glucosa de forma neta en el hígado humano?',
  ops:['Los ácidos grasos de cadena par','El lactato','El glicerol','La alanina'],
  ok:0,
  clave:'Sustratos glucogénicos: lactato, glicerol, aminoácidos (alanina), intermediarios del Krebs. Los ácidos grasos pares dan acetil-CoA, que no da glucosa neta.',
  exp:'La gluconeogénesis parte del piruvato, del lactato (ciclo de Cori), del glicerol de los triglicéridos y de la mayoría de los aminoácidos, sobre todo la alanina. Los ácidos grasos de cadena par se degradan a acetil-CoA, y este no puede convertirse en oxaloacetato de forma neta: los dos carbonos que entran en el ciclo de Krebs salen como CO₂. Por eso, en el ayuno prolongado, el cuerpo mantiene la glucemia consumiendo proteína y glicerol, mientras que los ácidos grasos sirven de combustible y de fuente de cuerpos cetónicos.',
  no:{
    1:'El lactato llega al hígado desde el músculo y los eritrocitos, y se transforma en piruvato y glucosa (ciclo de Cori).',
    2:'El glicerol, liberado por la lipólisis, entra en la gluconeogénesis como dihidroxiacetona fosfato.',
    3:'La alanina, transportada desde el músculo, se convierte en piruvato y luego en glucosa (ciclo de la glucosa-alanina).'
  },
  trampa:'Suponer que la grasa puede convertirse en glucosa. Solo el glicerol lo hace; los ácidos grasos pares, no.',
  obj:'Identificar los sustratos de la gluconeogénesis.',
  ref:'Lehninger, Principios de Bioquímica, cap. 14.',
  tags:['gluconeogénesis','lactato','piruvato','glucólisis']
},
{
  id:'U7-B-Q31', programa:'unirm', cuatri:7,
  esp:'Bioquímica I', tema:'Glucólisis y gluconeogénesis', sub:'Regulación hormonal',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Durante el ayuno, el glucagón reduce la concentración hepática de fructosa-2,6-bisfosfato. ¿Qué consecuencia tiene?',
  ops:['Disminuye la actividad de la fosfofructoquinasa-1 y aumenta la de la fructosa-1,6-bisfosfatasa, favoreciendo la gluconeogénesis','Aumenta la glucólisis y disminuye la gluconeogénesis','Se bloquea el ciclo de Krebs','Se activa la síntesis de glucógeno'],
  ok:0,
  clave:'Fructosa-2,6-bisfosfato: activa la PFK-1 (glucólisis) e inhibe la FBPasa-1 (gluconeogénesis). Glucagón lo baja; insulina lo sube.',
  exp:'La fructosa-2,6-bisfosfato es el regulador alostérico más potente de la glucólisis hepática: activa la fosfofructoquinasa-1 e inhibe la fructosa-1,6-bisfosfatasa. El glucagón, mediante el AMP cíclico y la proteína cinasa A, fosforila la enzima bifuncional que la sintetiza y la degrada, y favorece su actividad fosfatasa, con lo cual baja su concentración. Sin ella, la fosfofructoquinasa-1 se apaga y la fructosa-1,6-bisfosfatasa se activa: el hígado deja de consumir glucosa y la produce. La insulina actúa en sentido contrario.',
  no:{
    1:'Con menos fructosa-2,6-bisfosfato la glucólisis disminuye, y no aumenta.',
    2:'El ciclo de Krebs no es una diana directa de este regulador.',
    3:'El glucagón inhibe la síntesis de glucógeno y activa su degradación.'
  },
  trampa:'Aprender que "la fructosa-2,6-bisfosfato activa la glucólisis" sin recordar que además inhibe la gluconeogénesis: regula las dos vías en sentidos opuestos.',
  obj:'Explicar cómo el glucagón regula el balance entre glucólisis y gluconeogénesis.',
  ref:'Lehninger, Principios de Bioquímica, cap. 15.',
  tags:['gluconeogénesis','fosfofructoquinasa','glucólisis','fructosa-2,6-bisfosfato']
}

]);
