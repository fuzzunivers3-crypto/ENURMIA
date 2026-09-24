/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 7, TANDA DE MICROBIOLOGIA (1/2)
   Amplia Microbiologia Medica de 10 a 50 preguntas junto con
   banco-14.js. Esta parte cubre estructura/Gram, crecimiento y
   medios, cocos grampositivos, bacilos gramnegativos,
   patogenicidad, antibioticos y virologia (temas 1-7).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== MICROBIOLOGIA MEDICA ===================== */
{
  id:'U7-M-Q11', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Tinción de Gram', sub:'Fundamento estructural',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia estructural de la pared celular explica que las bacterias gramnegativas se decoloren con alcohol durante la tinción de Gram?',
  ops:[
    'Tienen una pared de peptidoglicano mucho más gruesa que las grampositivas',
    'Poseen una membrana externa rica en lípidos que el alcohol disuelve, dejando escapar el complejo colorante',
    'Carecen por completo de pared celular',
    'Producen una enzima que degrada el cristal violeta'
  ],
  ok:1,
  clave:'La membrana externa lipídica, ausente en las grampositivas, es lo que el alcohol disuelve.',
  exp:'Las bacterias gramnegativas tienen una capa de peptidoglicano delgada (una sola capa) y, por fuera de ella, una membrana externa rica en lípidos. El decolorante (alcohol-acetona) disuelve esa membrana externa, y al perder esa barrera el complejo cristal violeta-lugol se escapa con facilidad de la célula, que queda incolora y se tiñe después con la safranina (rosa). Las grampositivas, con una pared gruesa de múltiples capas de peptidoglicano y sin membrana externa, retienen el complejo violeta pese al alcohol.',
  no:{
    0:'Es al revés: la pared gruesa de peptidoglicano es característica de las GRAMPOSITIVAS, y es justamente lo que les permite retener el colorante.',
    2:'Las gramnegativas sí tienen pared celular (peptidoglicano), aunque delgada; carecer de pared por completo es una característica de Mycoplasma, no de las gramnegativas en general.',
    3:'No hay una enzima que degrade el colorante; el mecanismo es físico-estructural, por la solubilidad de la membrana externa en el decolorante.'
  },
  trampa:'Pensar que el grosor de la pared es lo único relevante, sin considerar la membrana externa, que es el elemento distintivo real de las gramnegativas.',
  obj:'Explicar el fundamento estructural de la decoloración de las bacterias gramnegativas.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['gram','membrana externa','peptidoglicano','decoloración']
},
{
  id:'U7-M-Q12', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Endospora', sub:'Géneros esporulados',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué dos géneros bacterianos, ambos grampositivos, son clínicamente relevantes por su capacidad de formar endosporas?',
  ops:['Staphylococcus y Streptococcus', 'Bacillus y Clostridium', 'Escherichia y Salmonella', 'Neisseria y Haemophilus'],
  ok:1,
  clave:'Bacillus (ántrax) y Clostridium (tétanos, botulismo, gangrena gaseosa) son los géneros esporulados relevantes.',
  exp:'Solo algunos géneros grampositivos forman endosporas, una forma de resistencia extrema capaz de sobrevivir calor, desecación y desinfectantes comunes durante años. Clínicamente, los dos géneros relevantes son Clostridium (tétanos, botulismo, gangrena gaseosa, colitis por C. difficile) y Bacillus (ántrax). Esta capacidad explica por qué la esterilización de material médico requiere autoclave con temperatura y presión sostenidas, no basta con hervir.',
  no:{
    0:'Staphylococcus y Streptococcus son cocos grampositivos, pero ninguno de los dos forma endosporas.',
    2:'Escherichia y Salmonella son bacilos gramnegativos; la formación de endosporas es una característica de ciertos géneros grampositivos.',
    3:'Neisseria y Haemophilus son gramnegativos y no forman endosporas.'
  },
  trampa:'Asumir que la capacidad de esporular es común a muchas bacterias grampositivas. En realidad está limitada, en la práctica clínica, a estos dos géneros.',
  obj:'Identificar los géneros bacterianos clínicamente relevantes capaces de formar endosporas.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['endospora','Clostridium','Bacillus','esterilización']
},
{
  id:'U7-M-Q13', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Estructura bacteriana', sub:'Bacterias sin pared',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué Mycoplasma es intrínsecamente resistente a los antibióticos betalactámicos?',
  ops:[
    'Porque produce una betalactamasa muy potente',
    'Porque carece de pared celular, el blanco de acción de los betalactámicos',
    'Porque su membrana externa impide el paso del antibiótico',
    'Porque tiene una pared con ácidos micólicos que el antibiótico no atraviesa'
  ],
  ok:1,
  clave:'Sin pared celular, no hay blanco para un antibiótico que actúa inhibiendo su síntesis.',
  exp:'Mycoplasma es un género bacteriano atípico que carece por completo de pared celular, una característica única entre las bacterias de relevancia clínica. Como los antibióticos betalactámicos actúan inhibiendo las proteínas de unión a penicilina que sintetizan la pared de peptidoglicano, simplemente no tienen ningún blanco sobre el cual actuar en una bacteria que no tiene esa estructura: la resistencia es intrínseca y estructural, no adquirida. Por la misma razón, Mycoplasma tampoco se tiñe con la técnica de Gram.',
  no:{
    0:'No se trata de una enzima que inactive al antibiótico (como la betalactamasa), sino de la ausencia total del blanco de acción.',
    2:'Mycoplasma no tiene la membrana externa característica de las gramnegativas: su singularidad es la ausencia completa de pared celular.',
    3:'Los ácidos micólicos son característicos de las micobacterias, no de Mycoplasma, que son géneros distintos con mecanismos de resistencia distintos.'
  },
  trampa:'Confundir la resistencia estructural de Mycoplasma (sin pared) con un mecanismo de resistencia adquirido (betalactamasa o membrana externa), que es lo que ocurre en otras bacterias.',
  obj:'Explicar la base estructural de la resistencia intrínseca de Mycoplasma a los betalactámicos.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['Mycoplasma','pared celular','betalactámicos','resistencia intrínseca']
},
{
  id:'U7-M-Q14', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Curva de crecimiento', sub:'Fase logarítmica',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los antibióticos betalactámicos son más eficaces contra bacterias en fase logarítmica de crecimiento que contra bacterias en fase estacionaria?',
  ops:[
    'Porque en fase estacionaria las bacterias son resistentes por mutación',
    'Porque los betalactámicos actúan inhibiendo la síntesis de pared, un proceso activo principalmente durante la división celular rápida',
    'Porque en fase estacionaria las bacterias mueren de todas formas por falta de nutrientes',
    'Porque en fase logarítmica las bacterias no tienen pared celular'
  ],
  ok:1,
  clave:'Los betalactámicos necesitan síntesis activa de pared, que es máxima durante la división rápida de la fase logarítmica.',
  exp:'En la fase logarítmica, las bacterias se dividen activamente y de forma constante, lo que implica una síntesis intensa de nueva pared celular para cada célula hija. Como los betalactámicos actúan inhibiendo las enzimas (PBP) responsables de esa síntesis, su efecto es máximo cuando ese proceso está más activo. En la fase estacionaria, con la división celular enlentecida y la síntesis de pared reducida, el efecto de estos antibióticos disminuye considerablemente, sin que esto implique una resistencia adquirida por mutación: es un efecto dependiente del estado metabólico, no genético.',
  no:{
    0:'No es un fenómeno de resistencia por mutación: es una menor eficacia relacionada con el estado metabólico de la bacteria en esa fase.',
    2:'Aunque en fase estacionaria y de declive hay mayor mortalidad bacteriana por agotamiento de nutrientes, esa no es la razón de la menor eficacia específica de los betalactámicos.',
    3:'Las bacterias sí tienen pared celular en fase logarítmica: de hecho, es cuando más activamente la están sintetizando.'
  },
  trampa:'Confundir menor eficacia dependiente del estado metabólico con resistencia adquirida por mutación, que es un fenómeno genético distinto.',
  obj:'Relacionar la fase de crecimiento bacteriano con la eficacia de los antibióticos que inhiben la síntesis de pared.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['fase logarítmica','betalactámicos','curva de crecimiento','síntesis de pared']
},
{
  id:'U7-M-Q15', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Agar MacConkey', sub:'Selectivo y diferencial',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'El agar MacConkey se describe como un medio "selectivo y diferencial". ¿Qué significa cada uno de esos dos términos en este medio?',
  ops:[
    'Selectivo porque solo crecen anaerobios; diferencial porque distingue por hemólisis',
    'Selectivo porque inhibe a las bacterias grampositivas (sales biliares, cristal violeta); diferencial porque distingue fermentadoras de lactosa (rosadas) de no fermentadoras (incoloras)',
    'Selectivo porque solo crece Escherichia coli; diferencial porque distingue especies por su forma',
    'Selectivo porque requiere temperatura elevada; diferencial porque separa hongos de bacterias'
  ],
  ok:1,
  clave:'Selectivo (sales biliares y cristal violeta inhiben grampositivas) y diferencial (lactosa + indicador distinguen fermentadoras de no fermentadoras).',
  exp:'El agar MacConkey es selectivo porque contiene sales biliares y cristal violeta, sustancias que inhiben el crecimiento de bacterias grampositivas, dejando crecer solo a las gramnegativas. Es además diferencial porque incluye lactosa y un indicador de pH: las bacterias gramnegativas que fermentan lactosa (como Escherichia coli) acidifican el medio alrededor de la colonia y producen un color rosado/rojo, mientras que las que no fermentan lactosa (como Salmonella o Shigella) producen colonias incoloras. Ambas propiedades del medio -selectiva y diferencial- funcionan de forma independiente y simultánea.',
  no:{
    0:'El MacConkey no distingue por requerimiento de oxígeno ni por hemólisis; esas características se evalúan con otros medios y pruebas.',
    2:'No es selectivo para una sola especie: deja crecer a todas las bacterias gramnegativas, no exclusivamente E. coli.',
    3:'El MacConkey no está diseñado para diferenciar hongos de bacterias ni depende de temperatura elevada para su selectividad.'
  },
  trampa:'Explicar solo una de las dos propiedades (selectivo o diferencial) sin distinguir claramente el mecanismo de cada una.',
  obj:'Explicar por qué el agar MacConkey es a la vez selectivo y diferencial.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['MacConkey','selectivo','diferencial','lactosa']
},
{
  id:'U7-M-Q16', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Requerimientos de oxígeno', sub:'Anaerobios estrictos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente tiene un absceso abdominal con secreción de olor fétido muy característico. El cultivo convencional enviado al laboratorio resulta negativo.',
  enunciado:'¿Cuál es la explicación más probable del cultivo negativo pese a la clara sospecha de infección?',
  ops:[
    'El absceso no está realmente infectado',
    'El cultivo se procesó en condiciones aerobias y el patógeno probable es un anaerobio estricto, que muere al exponerse al oxígeno',
    'El paciente ya recibió tratamiento antibiótico eficaz antes de la toma de muestra',
    'La muestra se contaminó con flora de la piel'
  ],
  ok:1,
  clave:'El mal olor y la localización abdominal sugieren anaerobios, que requieren condiciones de transporte y cultivo especiales sin oxígeno.',
  exp:'El olor fétido y la localización cerca de mucosas (intestino, cavidad oral) son datos clásicos que orientan hacia una infección por anaerobios estrictos (como Bacteroides, Clostridium o Fusobacterium). Estos organismos carecen de las enzimas necesarias para neutralizar los derivados tóxicos del oxígeno (catalasa, superóxido dismutasa), así que mueren si se exponen a él. Si la muestra no se transporta y procesa en condiciones que excluyan el oxígeno desde el momento de la toma, el cultivo puede resultar falsamente negativo aunque la infección sea real, precisamente porque el organismo causal no sobrevive el procesamiento convencional.',
  no:{
    0:'La clínica (absceso con olor fétido) es altamente sugestiva de infección real; descartarla solo por un cultivo negativo, sin considerar el tipo de organismo esperado, sería un error.',
    2:'Aunque el tratamiento previo puede reducir el rendimiento del cultivo, el dato más específico del caso (olor fétido, localización abdominal) apunta directamente a un problema técnico de manejo de anaerobios.',
    3:'La contaminación con flora de la piel produciría más bien un resultado con múltiples organismos mixtos o un falso positivo, no un cultivo negativo.'
  },
  trampa:'Interpretar un cultivo negativo como ausencia de infección sin considerar que ciertos organismos requieren condiciones especiales de transporte y cultivo para poder crecer.',
  obj:'Reconocer cuándo sospechar infección por anaerobios y su implicación en el procesamiento de la muestra.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['anaerobios estrictos','medio de transporte','absceso','cultivo negativo']
},
{
  id:'U7-M-Q17', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Cocos grampositivos', sub:'Catalasa y coagulasa',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué combinación de resultados de catalasa y coagulasa corresponde a Staphylococcus aureus?',
  ops:['Catalasa negativa, coagulasa negativa', 'Catalasa positiva, coagulasa positiva', 'Catalasa positiva, coagulasa negativa', 'Catalasa negativa, coagulasa positiva'],
  ok:1,
  clave:'S. aureus es catalasa positivo (por ser Staphylococcus) y coagulasa positivo (el rasgo que lo distingue como el más virulento del género).',
  exp:'La catalasa separa Staphylococcus (positivo) de Streptococcus/Enterococcus (negativo). Dentro de Staphylococcus, la coagulasa separa a S. aureus (positivo, el más virulento, causante de infecciones graves de piel, hueso, endocarditis, shock tóxico) de los estafilococos coagulasa negativos como S. epidermidis (relevantes por infecciones asociadas a dispositivos médicos y biofilm). S. aureus es, por tanto, catalasa positivo Y coagulasa positivo: es la combinación que lo identifica de forma más específica en el laboratorio.',
  no:{
    0:'Catalasa negativa correspondería a Streptococcus/Enterococcus, no a Staphylococcus.',
    2:'Catalasa positiva coincide con el género Staphylococcus, pero coagulasa negativa correspondería a S. epidermidis, no a S. aureus.',
    3:'Catalasa negativa no es compatible con el género Staphylococcus en absoluto.'
  },
  trampa:'Mezclar las dos pruebas o invertir cuál corresponde al género y cuál a la especie más virulenta dentro de él.',
  obj:'Identificar la combinación de catalasa y coagulasa característica de Staphylococcus aureus.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['catalasa','coagulasa','Staphylococcus aureus','identificación']
},
{
  id:'U7-M-Q18', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'SARM', sub:'Mecanismo de resistencia',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el nombre "resistente a meticilina" (SARM) es engañoso respecto al espectro real de resistencia de esta bacteria?',
  ops:[
    'Porque SARM solo es resistente a meticilina, pero sensible a todas las demás penicilinas',
    'Porque el gen mecA codifica una proteína de unión a penicilina con baja afinidad por TODOS los betalactámicos, no solo por meticilina',
    'Porque el nombre es correcto: SARM es resistente exclusivamente a meticilina',
    'Porque SARM produce una betalactamasa que solo inactiva a la meticilina'
  ],
  ok:1,
  clave:'El gen mecA altera la PBP dándole baja afinidad por TODA la familia de betalactámicos, no solo por meticilina.',
  exp:'Staphylococcus aureus resistente a meticilina adquiere el gen mecA, que codifica una proteína de unión a penicilina (PBP2a) con baja afinidad por prácticamente toda la clase de antibióticos betalactámicos -penicilinas, cefalosporinas, carbapenémicos-, no solo por la meticilina que da nombre a la sigla. El nombre "SARM" es en realidad un remanente histórico (meticilina fue el fármaco usado para definir la resistencia en el laboratorio), pero clínicamente implica que hay que evitar toda la familia de betalactámicos y usar alternativas como vancomicina o linezolid.',
  no:{
    0:'Es justo lo contrario de lo que ocurre: la resistencia por PBP alterada abarca a toda la familia de betalactámicos, no solo a la meticilina.',
    2:'El nombre es engañoso precisamente porque sugiere una resistencia limitada que no refleja el espectro real de resistencia.',
    3:'El mecanismo de SARM no es una betalactamasa que inactiva al antibiótico, sino una PBP alterada que ya no se une bien a ningún betalactámico.'
  },
  trampa:'Interpretar literalmente el nombre "resistente a meticilina" como si la resistencia se limitara a ese único fármaco.',
  obj:'Explicar por qué la resistencia de SARM abarca a toda la clase de betalactámicos.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['SARM','mecA','PBP','resistencia a betalactámicos']
},
{
  id:'U7-M-Q19', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Fiebre reumática', sub:'Secuela no supurativa',
  dif:3, hab:'Comprensión', tipo:'caso', verificado:true,
  caso:'Un niño con antecedente de faringitis no tratada hace tres semanas desarrolla ahora poliartritis migratoria y un soplo cardíaco nuevo.',
  enunciado:'¿Cómo debe entenderse el mecanismo de este cuadro respecto a la infección faríngea original?',
  ops:[
    'Es una infección activa persistente por Streptococcus pyogenes en las articulaciones y el corazón',
    'Es una reacción inmunológica tardía (fiebre reumática), no infección activa; el tratamiento antibiótico adicional no revierte el cuadro',
    'Es una reinfección nueva, no relacionada con la faringitis previa',
    'Es un efecto tóxico directo de una exotoxina estreptocócica circulante en ese momento'
  ],
  ok:1,
  clave:'La fiebre reumática es una secuela inmunológica tardía, no infección activa por la bacteria.',
  exp:'La fiebre reumática es una complicación no supurativa de la faringitis por Streptococcus pyogenes (grupo A) no tratada, que aparece semanas después de la infección faríngea original. No representa infección activa por la bacteria en las articulaciones ni en el corazón, sino una reacción inmunológica cruzada: anticuerpos generados contra antígenos estreptocócicos reaccionan también contra tejidos propios (articulaciones, válvulas cardíacas) por similitud molecular. Por eso, en esta etapa, dar más antibiótico no revierte el daño ya iniciado por la respuesta inmune -el papel del antibiótico es preventivo, dado a tiempo durante la faringitis original, no terapéutico una vez instalada la fiebre reumática.',
  no:{
    0:'No hay bacteria activa en las articulaciones ni el corazón en este momento: es una reacción inmunológica, no una infección directa persistente.',
    2:'El cuadro está relacionado directamente con la faringitis previa por el mecanismo inmunológico descrito, no es una infección nueva independiente.',
    3:'No es un efecto tóxico directo de una exotoxina circulante, sino una reacción de anticuerpos con reactividad cruzada contra tejido propio.'
  },
  trampa:'Tratar la fiebre reumática como si fuera una infección activa que responde a más antibiótico, en vez de reconocerla como una secuela inmunológica ya establecida.',
  obj:'Explicar el mecanismo inmunológico de la fiebre reumática como secuela de la faringitis estreptocócica.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['fiebre reumática','Streptococcus pyogenes','secuela no supurativa','reacción cruzada']
},
{
  id:'U7-M-Q20', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Streptococcus agalactiae', sub:'Tamizaje prenatal',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se realiza tamizaje vaginal-rectal para Streptococcus agalactiae (grupo B) en el tercer trimestre del embarazo?',
  ops:[
    'Porque causa aborto espontáneo si se detecta antes del tercer trimestre',
    'Porque es la causa más importante de sepsis y meningitis neonatal, transmitida al recién nacido durante el parto',
    'Porque causa malformaciones congénitas si la madre está colonizada',
    'Porque es una infección de transmisión sexual que debe tratarse antes del parto por esa vía'
  ],
  ok:1,
  clave:'S. agalactiae colonizante se transmite durante el parto y es causa importante de sepsis/meningitis neonatal.',
  exp:'Streptococcus agalactiae (grupo B de Lancefield) puede colonizar de forma asintomática el tracto genital y digestivo bajo de la mujer embarazada. El riesgo no es para el embarazo en sí, sino para el recién nacido: durante el paso por el canal del parto, el neonato puede exponerse a la bacteria y desarrollar sepsis o meningitis neonatal grave, una de las causas más importantes de estos cuadros en el periodo neonatal. Por eso el tamizaje se hace cerca del término (34-37 semanas, cerca del momento del parto) y, si es positivo, se administra profilaxis antibiótica intraparto para reducir la transmisión al recién nacido.',
  no:{
    0:'La colonización por S. agalactiae no se asocia característicamente con aborto espontáneo; el riesgo relevante es la transmisión intraparto al neonato.',
    2:'No es un teratógeno conocido que cause malformaciones congénitas; su riesgo es infeccioso, no teratogénico.',
    3:'No se clasifica como infección de transmisión sexual en el sentido clásico; es parte de la flora que puede colonizar de forma asintomática, y el tamizaje se hace por el riesgo neonatal, no por tratamiento de pareja.'
  },
  trampa:'Confundir el riesgo de S. agalactiae (transmisión intraparto al neonato) con mecanismos propios de otras infecciones (teratogenia, aborto, transmisión sexual clásica).',
  obj:'Explicar la razón clínica del tamizaje prenatal para Streptococcus agalactiae.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['Streptococcus agalactiae','sepsis neonatal','tamizaje prenatal','grupo B']
},
{
  id:'U7-M-Q21', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Bacilos gramnegativos', sub:'Fermentación de lactosa',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Un aislado de un cultivo de heces produce colonias INCOLORAS en agar MacConkey. ¿Cuál de las siguientes enterobacterias es más consistente con este hallazgo?',
  ops:['Escherichia coli', 'Klebsiella pneumoniae', 'Salmonella typhi', 'Ninguna enterobacteria produce colonias incoloras'],
  ok:2,
  clave:'Salmonella no fermenta lactosa, por lo que produce colonias incoloras en MacConkey.',
  exp:'Salmonella (junto con Shigella) no fermenta lactosa, así que en agar MacConkey produce colonias incoloras, sin el viraje a rosado/rojo que produce la acidificación por fermentación. Esto la distingue de Escherichia coli y Klebsiella pneumoniae, ambas fermentadoras de lactosa, que producen colonias rosadas en este medio. Esta simple observación macroscópica es un primer paso orientador muy útil antes de continuar con pruebas bioquímicas más específicas para confirmar el género y la especie.',
  no:{
    0:'Escherichia coli fermenta lactosa y produce colonias rosadas, no incoloras.',
    1:'Klebsiella pneumoniae también fermenta lactosa y produce colonias rosadas, como E. coli.',
    3:'Sí existen enterobacterias que no fermentan lactosa, como Salmonella y Shigella, que por eso producen colonias incoloras.'
  },
  trampa:'Asumir que todas las enterobacterias se comportan igual frente a la lactosa. La fermentación de lactosa es justamente el criterio que las separa en dos grupos.',
  obj:'Relacionar el resultado de fermentación de lactosa en MacConkey con la identificación presuntiva de una enterobacteria.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['Salmonella','MacConkey','fermentación de lactosa','enterobacterias']
},
{
  id:'U7-M-Q22', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Shigella', sub:'Dosis infecciosa',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica particular de Shigella explica su altísima capacidad de transmisión persona a persona, incluso en brotes con hacinamiento?',
  ops:[
    'Produce una toxina extremadamente potente que se propaga por el aire',
    'Requiere un inóculo bacteriano muy bajo para causar enfermedad, a diferencia de la mayoría de las bacterias causantes de diarrea',
    'Sobrevive indefinidamente fuera del cuerpo humano en cualquier superficie',
    'Se transmite exclusivamente por agua no potable, nunca de persona a persona'
  ],
  ok:1,
  clave:'Shigella causa enfermedad con un inóculo muy bajo, lo que facilita su transmisión directa persona a persona.',
  exp:'A diferencia de la mayoría de las causas bacterianas de diarrea, que requieren la ingestión de un número relativamente grande de organismos para causar enfermedad, Shigella puede causar disentería con un inóculo bacteriano muy pequeño. Esta baja dosis infecciosa explica por qué se transmite con tanta facilidad de persona a persona por vía fecal-oral, incluso sin un vehículo como agua o alimentos contaminados de por medio, y por qué los brotes en contextos de hacinamiento (guarderías, campamentos, situaciones de crisis humanitaria) son particularmente frecuentes con este organismo.',
  no:{
    0:'Shigella no se transmite por vía aérea; su vía es fecal-oral, y aunque produce toxina Shiga, esa no es la explicación de su altísima transmisibilidad.',
    2:'La supervivencia ambiental no es el mecanismo principal que explica su transmisibilidad tan alta; el factor clave es la baja dosis infecciosa necesaria.',
    3:'Shigella sí se transmite de persona a persona directamente, y de hecho esa es la explicación central de la pregunta, no una vía excluida.'
  },
  trampa:'Buscar la explicación en la vía de transmisión o en la supervivencia ambiental en vez del dato central: cuántos organismos bastan para enfermar.',
  obj:'Explicar por qué la baja dosis infecciosa de Shigella facilita su transmisión directa persona a persona.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['Shigella','dosis infecciosa','transmisión fecal-oral','disentería']
},
{
  id:'U7-M-Q23', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Pseudomonas aeruginosa', sub:'Huésped comprometido',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con fibrosis quística presenta secreción respiratoria verdosa con olor dulzón y deterioro respiratorio progresivo, sin haber respondido a un curso estándar de amoxicilina.',
  enunciado:'¿Qué patógeno debe sospecharse con más fuerza en este contexto, y por qué es razonable que no haya respondido al tratamiento inicial?',
  ops:[
    'Streptococcus pneumoniae, que suele responder a betalactámicos de primera línea',
    'Pseudomonas aeruginosa, con resistencia intrínseca a numerosos antibióticos incluyendo muchos betalactámicos comunes',
    'Mycoplasma pneumoniae, que carece de pared celular',
    'Haemophilus influenzae tipo b, prevenible por vacunación'
  ],
  ok:1,
  clave:'La secreción verdosa con olor dulzón y el contexto de fibrosis quística apuntan a Pseudomonas, con resistencia intrínseca amplia.',
  exp:'Pseudomonas aeruginosa es un patógeno oportunista clásico en pacientes con fibrosis quística, donde coloniza crónicamente la vía aérea. Su pigmento verdoso característico (piocianina) y el olor dulzón orientan clínicamente hacia este organismo. Tiene resistencia intrínseca a numerosos antibióticos -incluida la amoxicilina y muchos otros betalactámicos comunes-, por baja permeabilidad de su membrana externa y bombas de expulsión activa, lo que explica la falta de respuesta al tratamiento estándar inicial y la necesidad de antibióticos antipseudomónicos específicos.',
  no:{
    0:'S. pneumoniae suele ser sensible a betalactámicos de primera línea, así que no explicaría la falta de respuesta observada en este caso.',
    2:'Mycoplasma sí es intrínsecamente resistente a betalactámicos, pero el contexto clínico (fibrosis quística, secreción verdosa con olor dulzón) es mucho más específico de Pseudomonas.',
    3:'Haemophilus influenzae tipo b no es el patógeno típico de la colonización crónica en fibrosis quística ni produce ese aspecto característico de la secreción.'
  },
  trampa:'No conectar el dato clínico distintivo (secreción verdosa, olor dulzón, fibrosis quística) con el patógeno específico que ese cuadro describe.',
  obj:'Reconocer el contexto clínico típico de infección por Pseudomonas aeruginosa y su resistencia intrínseca.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['Pseudomonas aeruginosa','fibrosis quística','resistencia intrínseca','oxidasa positiva']
},
{
  id:'U7-M-Q24', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Neisseria', sub:'Morfología y especies',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué morfología microscópica característica tienen las especies del género Neisseria?',
  ops:[
    'Bacilos gramnegativos largos y delgados',
    'Diplococos gramnegativos, con aspecto de "granos de café" enfrentados',
    'Cocos grampositivos en racimos',
    'Bacilos ácido-alcohol resistentes'
  ],
  ok:1,
  clave:'Neisseria son diplococos gramnegativos con la característica disposición en "granos de café".',
  exp:'El género Neisseria comprende diplococos gramnegativos, es decir, cocos que se agrupan en pares, con una morfología característica descrita como "granos de café" enfrentados por su cara plana. Las dos especies de mayor relevancia clínica son Neisseria meningitidis (meningococo), causa de meningitis epidémica y meningococcemia, y Neisseria gonorrhoeae (gonococo), causa de la infección de transmisión sexual gonorrea y de conjuntivitis neonatal por transmisión durante el parto.',
  no:{
    0:'Los bacilos largos y delgados describen más bien a algunas enterobacterias u otros bacilos gramnegativos, no a la morfología cocoide y pareada de Neisseria.',
    2:'Los cocos grampositivos en racimos describen a Staphylococcus, que además es grampositivo, no gramnegativo como Neisseria.',
    3:'Los bacilos ácido-alcohol resistentes son característicos de las micobacterias, un grupo morfológica y tintorialmente distinto.'
  },
  trampa:'Confundir la morfología de Neisseria con la de otros grupos bacterianos de nombre parecido o de relevancia clínica similar.',
  obj:'Reconocer la morfología característica del género Neisseria.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['Neisseria','diplococos gramnegativos','meningococo','gonococo']
},
{
  id:'U7-M-Q25', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Exotoxina vs. endotoxina', sub:'Diferencias clave',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de las siguientes es una diferencia correcta entre exotoxina y endotoxina?',
  ops:[
    'La exotoxina es una proteína específica y antigénica; la endotoxina es el LPS de la pared, inespecífico',
    'La endotoxina es secretada activamente; la exotoxina se libera solo al morir la bacteria',
    'Ambas son igualmente antigénicas y sirven de base para vacunas toxoides',
    'La exotoxina es exclusiva de bacterias gramnegativas; la endotoxina, de grampositivas'
  ],
  ok:0,
  clave:'Exotoxina = proteína secretada, específica, antigénica. Endotoxina = LPS estructural, inespecífico, liberado al morir la bacteria.',
  exp:'Las exotoxinas son proteínas secretadas activamente por la bacteria (grampositiva o gramnegativa), con un mecanismo específico sobre una molécula diana, y son antigénicas -lo que permite generar vacunas toxoides contra ellas, como la antitetánica-. La endotoxina, en cambio, es el lipopolisacárido (LPS) que forma parte de la membrana externa de TODAS las bacterias gramnegativas, se libera cuando la bacteria muere y se lisa, y es inespecífica: cualquier LPS produce un cuadro clínico similar, porque el componente tóxico (lípido A) es estructuralmente parecido entre especies.',
  no:{
    1:'Es al revés: la exotoxina es la que se secreta activamente; la endotoxina se libera al morir y lisarse la bacteria, no por secreción activa.',
    2:'La endotoxina no tiene la especificidad antigénica de las exotoxinas, por lo que no existe un "toxoide" equivalente para ella.',
    3:'La exotoxina puede producirse tanto por grampositivas como por gramnegativas; la endotoxina, en cambio, sí es exclusiva de las gramnegativas.'
  },
  trampa:'Invertir cuál de las dos se secreta activamente y cuál se libera pasivamente al morir la bacteria.',
  obj:'Distinguir correctamente exotoxina de endotoxina en sus características fundamentales.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['exotoxina','endotoxina','lipopolisacárido','toxoide']
},
{
  id:'U7-M-Q26', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Adhesinas', sub:'Fimbrias y pili',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la función principal de las fimbrias (pili) bacterianas, y en qué se diferencia de la del flagelo?',
  ops:[
    'Las fimbrias dan motilidad; el flagelo da adhesión',
    'Las fimbrias dan adhesión a receptores específicos del huésped; el flagelo da motilidad',
    'Ambas estructuras cumplen exactamente la misma función de motilidad',
    'Las fimbrias son exclusivas de bacterias grampositivas'
  ],
  ok:1,
  clave:'Fimbrias/pili = adhesión a receptores específicos. Flagelo = motilidad. Son funciones distintas, frecuentemente confundidas.',
  exp:'Las fimbrias o pili son estructuras filamentosas proteicas responsables de la adhesión bacteriana a receptores específicos de la célula huésped -el primer paso obligatorio de toda infección, sin el cual la bacteria sería arrastrada por el flujo de moco, orina o el peristaltismo. El flagelo, en cambio, es la estructura responsable de la motilidad bacteriana. Son estructuras distintas con funciones distintas, aunque su apariencia filamentosa pueda generar confusión: las fimbrias P de E. coli, por ejemplo, explican por qué ciertas cepas son uropatógenas, por su capacidad de adherirse al epitelio urinario.',
  no:{
    0:'Es exactamente al revés: las fimbrias dan adhesión, y es el flagelo el que da motilidad.',
    2:'No cumplen la misma función; son estructuras distintas con roles complementarios pero diferentes en la biología bacteriana.',
    3:'Las fimbrias no son exclusivas de grampositivas; de hecho, el ejemplo más estudiado (fimbrias P de E. coli) es de una bacteria gramnegativa.'
  },
  trampa:'Confundir fimbrias con flagelo por su apariencia filamentosa similar, cuando cumplen funciones biológicas completamente distintas.',
  obj:'Distinguir la función de las fimbrias (adhesión) de la del flagelo (motilidad).',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['fimbrias','adhesinas','flagelo','motilidad']
},
{
  id:'U7-M-Q27', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Evasión inmunitaria', sub:'Variación antigénica',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la infección repetida por Neisseria gonorrhoeae no genera inmunidad protectora duradera contra reinfecciones futuras?',
  ops:[
    'Porque el gonococo no genera ninguna respuesta inmune detectable',
    'Porque el gonococo cambia la estructura de sus proteínas de superficie (variación antigénica), evadiendo a los anticuerpos generados contra la versión previa',
    'Porque los anticuerpos generados contra el gonococo son destruidos por una enzima bacteriana específica',
    'Porque el gonococo se vuelve resistente a los antibióticos tras cada infección'
  ],
  ok:1,
  clave:'La variación antigénica permite al gonococo evadir anticuerpos previos, impidiendo inmunidad protectora duradera.',
  exp:'Neisseria gonorrhoeae tiene la capacidad de cambiar la estructura de sus proteínas de superficie entre una infección y otra (variación antigénica), lo que hace que los anticuerpos generados contra una infección previa no reconozcan eficazmente a la bacteria en una exposición posterior, con proteínas de superficie ya distintas. Este mecanismo de evasión inmunitaria es lo que explica por qué la gonorrea no confiere inmunidad protectora duradera, a diferencia de otras infecciones donde una exposición previa sí protege contra reinfecciones.',
  no:{
    0:'El gonococo sí genera respuesta inmune detectable; el problema no es la ausencia de respuesta, sino que esa respuesta deja de ser eficaz por el cambio antigénico.',
    2:'No se trata de una enzima que destruya anticuerpos ya formados, sino de un cambio en las proteínas blanco que hace que esos anticuerpos ya no reconozcan a la bacteria.',
    3:'La resistencia a antibióticos es un fenómeno distinto (y sí relevante clínicamente en gonococo), pero no es la explicación de la falta de inmunidad protectora tras la infección.'
  },
  trampa:'Buscar la explicación en la ausencia de respuesta inmune o en resistencia a antibióticos, en vez del mecanismo real: el cambio de las moléculas blanco de esa respuesta.',
  obj:'Explicar el mecanismo de variación antigénica de Neisseria gonorrhoeae y su efecto sobre la inmunidad.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['variación antigénica','Neisseria gonorrhoeae','evasión inmunitaria','reinfección']
},
{
  id:'U7-M-Q28', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Betalactámicos', sub:'Selectividad del blanco',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los antibióticos betalactámicos tienen, en general, un perfil de seguridad favorable en el ser humano?',
  ops:[
    'Porque actúan sobre la síntesis de la pared celular bacteriana, una estructura que las células humanas no poseen',
    'Porque se eliminan completamente antes de alcanzar concentraciones tóxicas',
    'Porque actúan sobre el ADN bacteriano exclusivamente',
    'Porque no se absorben en el tracto digestivo humano'
  ],
  ok:0,
  clave:'La pared celular es una estructura ausente en las células humanas: no hay blanco que dañar en el huésped.',
  exp:'Los betalactámicos inhiben las proteínas de unión a penicilina (PBP), enzimas necesarias para la síntesis de la pared celular bacteriana. Como las células humanas carecen por completo de pared celular, este mecanismo de acción no tiene ningún blanco equivalente en el organismo del huésped, lo que da a esta clase de antibióticos una selectividad y un perfil de seguridad favorables en comparación con fármacos que actúan sobre procesos compartidos entre bacteria y célula humana.',
  no:{
    1:'La eliminación farmacocinética no es la razón de la selectividad; el fundamento es la ausencia del blanco de acción en las células humanas.',
    2:'Los betalactámicos no actúan sobre el ADN bacteriano; ese es el mecanismo de las fluoroquinolonas, una clase distinta.',
    3:'Muchos betalactámicos sí se absorben por vía oral; la seguridad no depende de la falta de absorción, sino de la selectividad del blanco de acción.'
  },
  trampa:'Buscar la explicación de la seguridad en propiedades farmacocinéticas en vez de en la selectividad del mecanismo de acción respecto a una estructura ausente en el huésped.',
  obj:'Explicar el fundamento de la selectividad y seguridad de los antibióticos betalactámicos.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['betalactámicos','PBP','selectividad','pared celular']
},
{
  id:'U7-M-Q29', programa:'unirm', cuatri:7,
  esp:'Microbiología Médica', tema:'Aminoglucósidos', sub:'Blanco ribosomal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia estructural entre el ribosoma bacteriano y el humano permite que los aminoglucósidos actúen con relativa selectividad?',
  ops:[
    'El ribosoma bacteriano es 70S (subunidades 30S/50S) y el humano es 80S; los aminoglucósidos actúan sobre la subunidad 30S bacteriana',
    'El ribosoma bacteriano tiene pared celular y el humano no',
    'Ambos ribosomas son idénticos; la selectividad depende solo de la dosis',
    'El ribosoma humano está ausente en las células con núcleo'
  ],
  ok:0,
  clave:'El ribosoma bacteriano (70S) es estructuralmente distinto al humano (80S); los aminoglucósidos aprovechan esa diferencia.',
  exp:'El ribosoma bacteriano es 70S, formado por subunidades 30S y 50S, mientras que el ribosoma humano es 80S, con una composición y estructura distinta. Los aminoglucósidos (como la gentamicina) se unen específicamente a la subunidad 30S bacteriana, interfiriendo con la síntesis de proteínas de la bacteria sin afectar de forma significativa, a concentraciones terapéuticas, la síntesis proteica en el ribosoma humano. Esta diferencia estructural entre ambos tipos de ribosoma es la base de la selectividad de varias familias de antibióticos, no solo de los aminoglucósidos.',
  no:{
    1:'Los ribosomas no tienen pared celular; esa es una estructura de la célula bacteriana en su conjunto, no del ribosoma en sí, y no es el fundamento de la acción de los aminoglucósidos.',
    2:'Los ribosomas no son idénticos: la diferencia estructural (70S vs 80S) es justamente lo que permite la selectividad, más allá de la dosis usada.',
    3:'El ribosoma humano sí existe en las células con núcleo; de hecho, todas las células humanas con capacidad de sintetizar proteínas lo tienen.'
  },
  trampa:'Buscar la selectividad en la dosis o en estructuras no ribosomales, cuando el fundamento real es la diferencia estructural entre los dos tipos de ribosoma.',
  obj:'Explicar la base estructural de la selectividad de los aminoglucósidos sobre el ribosoma bacteriano.',
  ref:'Murray, Microbiología Médica. Levinson, Microbiología e Inmunología Médica.',
  tags:['aminoglucósidos','ribosoma bacteriano','subunidad 30S','selectividad']
}

]);
