/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 7, TANDA DE EMBRIOLOGIA (2/2)
   Completa Embriologia a 50 preguntas junto con banco-11.js.
   Cubre malformaciones, cardiovascular, digestivo, genitourinario,
   miembros y gemelaridad (temas 8-13 del Temario de Embriologia).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== EMBRIOLOGIA ===================== */
{
  id:'U7-E-Q25', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Malformaciones congénitas frecuentes', sub:'Labio y paladar hendido',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué falla de fusión embriológica se produce el labio hendido unilateral?',
  ops:[
    'Fallo de fusión entre el proceso nasal medial y el proceso maxilar del mismo lado',
    'Fallo de fusión de los dos procesos palatinos laterales entre sí',
    'Persistencia del conducto tirogloso',
    'Fallo de cierre del neuroporo anterior'
  ],
  ok:0,
  clave:'El labio hendido resulta de un fallo entre el proceso nasal medial y el proceso maxilar.',
  exp:'El labio superior se forma por la fusión de los dos procesos nasales mediales entre sí (que dan el filtrum central) con los procesos maxilares a cada lado. Cuando esa fusión falla en un lado, aparece el labio hendido unilateral, un defecto que se completa hacia la sexta o séptima semana. El paladar hendido, en cambio, es un defecto distinto y algo más tardío (semanas 8-12): resulta del fallo de fusión de los procesos palatinos laterales entre sí y con el paladar primario; puede coexistir con el labio hendido o presentarse solo.',
  no:{
    1:'Ese mecanismo corresponde al paladar hendido, un defecto anatómica y cronológicamente distinto del labio hendido.',
    2:'La persistencia del conducto tirogloso da quistes cervicales de la línea media, sin relación con el labio o el paladar.',
    3:'El fallo del neuroporo anterior produce defectos craneales del tubo neural (anencefalia, encefalocele), no hendiduras faciales.'
  },
  trampa:'Tratar labio hendido y paladar hendido como el mismo defecto con el mismo mecanismo. Son dos fusiones distintas, en momentos distintos.',
  obj:'Diferenciar el mecanismo embriológico del labio hendido del paladar hendido.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['labio hendido','paladar hendido','malformación','proceso maxilar']
},
{
  id:'U7-E-Q26', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Malformaciones congénitas frecuentes', sub:'Onfalocele vs. gastrosquisis',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un recién nacido presenta asas intestinales exteriorizadas a través de un defecto de la pared abdominal, sin ningún saco membranoso que las cubra, situado a un lado del cordón umbilical, que se inserta normalmente.',
  enunciado:'¿Qué defecto de la pared abdominal corresponde a esta descripción?',
  ops:['Onfalocele', 'Gastrosquisis', 'Hernia umbilical fisiológica persistente', 'Extrofia vesical'],
  ok:1,
  clave:'Sin saco cubriendo las vísceras y con inserción normal del cordón: gastrosquisis.',
  exp:'La gastrosquisis es un defecto de la pared abdominal, casi siempre a la derecha del cordón umbilical (que se inserta con normalidad), a través del cual las asas intestinales se exteriorizan SIN ningún saco membranoso que las cubra, por lo que quedan expuestas directamente al líquido amniótico. El onfalocele, en cambio, es un defecto centrado en la base del cordón umbilical, en el que las vísceras herniadas SÍ quedan cubiertas por un saco formado por peritoneo y amnios, y se asocia con mucha mayor frecuencia a otras malformaciones y a anomalías cromosómicas, porque refleja un fallo del retorno del intestino a la cavidad abdominal tras la hernia umbilical fisiológica normal de la sexta a la décima semana.',
  no:{
    0:'El onfalocele SÍ tiene saco cubriendo las vísceras y se centra en la base del cordón; el caso describe justo lo contrario.',
    2:'La hernia umbilical fisiológica es un paso normal del desarrollo entre la semana 6 y la 10, que se resuelve solo; no deja vísceras expuestas al nacer.',
    3:'La extrofia vesical es un defecto de la pared abdominal inferior con exposición de la vejiga urinaria, no del intestino.'
  },
  trampa:'Usar "onfalocele" como término genérico para cualquier defecto de pared abdominal con vísceras expuestas. La presencia o ausencia del saco es justamente el dato que distingue los dos cuadros.',
  obj:'Diferenciar gastrosquisis de onfalocele por la presencia de saco y la posición respecto al cordón.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['gastrosquisis','onfalocele','pared abdominal','malformación']
},
{
  id:'U7-E-Q27', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Malformaciones congénitas frecuentes', sub:'Teratógenos conocidos',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué malformación característica se asocia con la exposición fetal a la talidomida durante el periodo embrionario?',
  ops:['Espina bífida', 'Focomelia (reducción de los miembros)', 'Labio hendido', 'Onfalocele'],
  ok:1,
  clave:'La talidomida es el teratógeno clásico asociado a focomelia.',
  exp:'La talidomida, usada en los años 50-60 como sedante y antiemético en el embarazo, se convirtió en el ejemplo histórico de teratógeno por su asociación con focomelia y otras reducciones graves de los miembros, además de anomalías auriculares y viscerales. La lección que dejó, y que sigue vigente, es la importancia del periodo crítico: la exposición durante la cuarta a la sexta semana, cuando se forman las yemas de los miembros, es la de mayor riesgo, mientras que fuera de esa ventana el efecto es mucho menor.',
  no:{
    0:'La espina bífida se asocia más bien con deficiencia de ácido fólico y con teratógenos como el ácido valproico, no con la talidomida.',
    2:'El labio hendido tiene causas multifactoriales; no es la malformación característica de la talidomida.',
    3:'El onfalocele no es la asociación clásica de la talidomida; se relaciona más con anomalías cromosómicas y del retorno intestinal.'
  },
  trampa:'Mezclar teratógenos clásicos entre sí (talidomida, ácido valproico, alcohol, isotretinoína) sin fijar cuál produce cuál malformación característica.',
  obj:'Asociar la talidomida con su malformación característica y con el concepto de periodo crítico.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['talidomida','teratógeno','focomelia','periodo crítico']
},
{
  id:'U7-E-Q28', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Malformaciones congénitas frecuentes', sub:'Síndrome alcohólico fetal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la característica del síndrome alcohólico fetal que lo distingue de la mayoría de los demás teratógenos, en cuanto al momento de exposición riesgosa?',
  ops:[
    'Solo es riesgoso si la exposición ocurre en el tercer trimestre',
    'El alcohol puede dañar al sistema nervioso central en desarrollo durante todo el embarazo, no solo en el periodo embrionario',
    'Únicamente produce alteraciones faciales, sin efecto sobre el crecimiento ni el sistema nervioso',
    'Solo afecta al feto si la madre bebe en cantidades muy altas de forma puntual'
  ],
  ok:1,
  clave:'El alcohol sigue siendo neurotóxico durante todo el embarazo, no solo durante la organogénesis.',
  exp:'A diferencia de muchos teratógenos, cuyo mayor riesgo de malformación estructural se concentra en el periodo embrionario (tercera a octava semana), el alcohol es neurotóxico para el sistema nervioso central en desarrollo durante TODO el embarazo, porque el cerebro sigue madurando y siendo vulnerable en el periodo fetal. El síndrome alcohólico fetal combina retraso del crecimiento, rasgos faciales característicos (fisuras palpebrales cortas, filtrum liso, labio superior fino) y alteraciones del neurodesarrollo, y no existe un umbral de consumo establecido como seguro durante el embarazo.',
  no:{
    0:'El riesgo no se limita al tercer trimestre: existe durante todo el embarazo, con distintos efectos según la etapa.',
    2:'El síndrome alcohólico fetal también compromete el crecimiento y, sobre todo, el neurodesarrollo, no solo la cara.',
    3:'No hay una dosis segura establecida; también se han descrito efectos con consumo repetido en cantidades moderadas.'
  },
  trampa:'Aplicar al alcohol la misma lógica de "solo peligroso en el periodo embrionario" que se usa para otros teratógenos. El sistema nervioso es una excepción vulnerable durante todo el embarazo.',
  obj:'Reconocer que el efecto teratógeno del alcohol se extiende a todo el embarazo, por su neurotoxicidad.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['síndrome alcohólico fetal','teratógeno','sistema nervioso','periodo crítico']
},
{
  id:'U7-E-Q29', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Malformaciones congénitas frecuentes', sub:'Ácido fólico y espina bífida',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer tuvo un embarazo previo complicado con un defecto del tubo neural y ahora planea un nuevo embarazo.',
  enunciado:'Frente a la población general, ¿cómo debe ajustarse su suplementación con ácido fólico preconcepcional?',
  ops:[
    'No requiere ajuste: la dosis estándar es igual de eficaz',
    'Requiere una dosis mucho más alta que la estándar, por su riesgo de recurrencia elevado',
    'El ácido fólico solo es útil si nunca ha tenido un embarazo afectado',
    'Debe suspenderse el ácido fólico en un embarazo posterior por riesgo de toxicidad'
  ],
  ok:1,
  clave:'Antecedente de defecto del tubo neural: dosis de ácido fólico mucho más alta que la poblacional.',
  exp:'La dosis estándar de ácido fólico preconcepcional para la población general es de 0.4 mg al día. Sin embargo, una mujer con antecedente de un embarazo previo afectado por un defecto del tubo neural tiene un riesgo de recurrencia considerablemente mayor que la población general, y las guías recomiendan una dosis mucho más alta (del orden de 4 mg al día) iniciada al menos un mes antes de la concepción y mantenida durante el primer trimestre, precisamente porque el cierre del tubo neural ocurre muy temprano, hacia los días 25-27.',
  no:{
    0:'Sí requiere ajuste: el riesgo de recurrencia es mayor que el poblacional y se maneja con dosis más altas.',
    2:'El beneficio del ácido fólico es mayor, no nulo, precisamente en quien ya tuvo un embarazo afectado.',
    3:'No hay indicación de suspenderlo; al contrario, se recomienda una dosis más alta que la habitual.'
  },
  trampa:'Aplicar la dosis poblacional estándar sin ajustar por el antecedente, que es precisamente el dato clínico que cambia la conducta.',
  obj:'Ajustar la dosis de ácido fólico preconcepcional según el riesgo individual.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['ácido fólico','espina bífida','prevención','tubo neural']
},
{
  id:'U7-E-Q30', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo del sistema cardiovascular', sub:'Tabicación auricular',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué estructura permite el paso de sangre de la aurícula derecha a la izquierda durante la vida fetal, derivando de un defecto de tabicación fisiológico y no patológico?',
  ops:['El conducto arterioso', 'El foramen oval', 'El conducto venoso', 'La vena umbilical'],
  ok:1,
  clave:'El foramen oval es un orificio fisiológico dentro del tabique interauricular, con un mecanismo de válvula.',
  exp:'Durante la tabicación auricular se forman el septum primum y el septum secundum, que dejan entre sí una comunicación, el foramen oval, cubierta por una especie de válvula (el remanente del septum primum). Este orificio permite que la sangre bien oxigenada que llega por la vena cava inferior pase directamente de la aurícula derecha a la izquierda, evitando en gran parte los pulmones fetales, que no funcionan todavía como órgano de intercambio gaseoso. Al nacer, el aumento de la presión en la aurícula izquierda cierra funcionalmente la válvula, y con el tiempo el cierre se hace anatómico.',
  no:{
    0:'El conducto arterioso comunica la arteria pulmonar con la aorta, no las dos aurículas entre sí.',
    2:'El conducto venoso deriva sangre de la vena umbilical hacia la vena cava inferior, evitando el hígado, sin relación con las aurículas.',
    3:'La vena umbilical trae sangre oxigenada desde la placenta, pero no es en sí misma la comunicación interauricular.'
  },
  trampa:'Confundir los tres cortocircuitos fetales (foramen oval, conducto arterioso, conducto venoso) entre sí: cada uno comunica estructuras distintas.',
  obj:'Ubicar el foramen oval dentro de la circulación fetal y su papel en la tabicación auricular.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['foramen oval','tabicación cardíaca','circulación fetal','septum primum']
},
{
  id:'U7-E-Q31', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo del sistema cardiovascular', sub:'Tabicación del tronco arterioso',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un recién nacido presenta cianosis desde el nacimiento. El ecocardiograma muestra que la aorta emerge del ventrículo derecho y la arteria pulmonar del ventrículo izquierdo, con los dos grandes vasos dispuestos de forma paralela en vez de entrecruzada.',
  enunciado:'¿Qué proceso embriológico está alterado en esta cardiopatía?',
  ops:[
    'La tabicación espiral del tronco arterioso por las crestas troncoconales',
    'El cierre del foramen oval',
    'La migración de las células de la cresta neural cardíaca hacia el tabique interventricular',
    'La formación del tabique interauricular'
  ],
  ok:0,
  clave:'La transposición de los grandes vasos resulta de un tabicamiento recto en vez de espiral del tronco arterioso.',
  exp:'El tronco arterioso, la porción más craneal del corazón primitivo, se divide normalmente en aorta y arteria pulmonar mediante un tabique que crece con un trayecto ESPIRAL, formado por las crestas troncoconales, cuya migración depende en gran parte de células de la cresta neural cardíaca. Ese recorrido espiral es lo que hace que, en el corazón normal, los dos grandes vasos queden entrecruzados. Cuando el tabique crece de forma recta en lugar de espiral, resulta la transposición de los grandes vasos: la aorta nace del ventrículo derecho y la arteria pulmonar del ventrículo izquierdo, ambas paralelas entre sí, una cardiopatía cianótica grave que requiere manejo quirúrgico temprano.',
  no:{
    1:'El foramen oval pertenece a la tabicación auricular, sin relación directa con la disposición de los grandes vasos.',
    2:'La migración de la cresta neural cardíaca participa en la tabicación troncoconal, pero el defecto descrito (disposición paralela) apunta específicamente a la falta de espiralización, no solo a un fallo de esa migración en general.',
    3:'El tabique interauricular es una estructura distinta, no relacionada con el origen de los grandes vasos.'
  },
  trampa:'Reconocer que hay un problema de tabicación troncoconal pero no precisar que lo específico de la transposición es la pérdida del trayecto ESPIRAL.',
  obj:'Relacionar la transposición de los grandes vasos con un fallo de la tabicación espiral del tronco arterioso.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['transposición de grandes vasos','tronco arterioso','crestas troncoconales','cardiopatía congénita']
},
{
  id:'U7-E-Q32', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo del sistema cardiovascular', sub:'Circulación fetal al nacer',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué cambio hemodinámico inicia el cierre funcional del conducto arterioso inmediatamente después del nacimiento?',
  ops:[
    'La caída de la resistencia vascular pulmonar y el aumento de la presión de oxígeno en sangre',
    'El clampaje del cordón umbilical, que eleva la resistencia vascular sistémica sin afectar al conducto directamente',
    'El cierre previo del foramen oval',
    'El inicio de la respiración no tiene relación con el cierre del conducto arterioso'
  ],
  ok:0,
  clave:'El aumento de la presión de oxígeno tras la primera respiración es el estímulo principal del cierre funcional.',
  exp:'Al nacer, con la primera respiración, los pulmones se expanden y la resistencia vascular pulmonar cae drásticamente, mientras la presión parcial de oxígeno en sangre aumenta de forma notable. Ese aumento de oxígeno es precisamente el estímulo que provoca la contracción de la capa muscular lisa del conducto arterioso, iniciando su cierre funcional en las primeras horas de vida; el cierre anatómico definitivo (con fibrosis y formación del ligamento arterioso) tarda semanas. Este mecanismo explica por qué, en cardiopatías donde el conducto arterioso debe mantenerse abierto para sostener la circulación, se usan fármacos que mantienen baja la oxigenación relativa o inhiben las prostaglandinas en sentido contrario según el objetivo clínico.',
  no:{
    1:'El clampaje umbilical eleva la resistencia sistémica, pero el estímulo que cierra específicamente el conducto arterioso es el aumento de oxígeno, no ese cambio de resistencia por sí solo.',
    2:'El foramen oval se cierra por el cambio de presiones entre las aurículas, un mecanismo distinto y no una condición previa para el cierre del conducto.',
    3:'La respiración sí es la que dispara la cascada completa: expansión pulmonar, caída de resistencia pulmonar y aumento de oxígeno.'
  },
  trampa:'Atribuir el cierre del conducto arterioso solo al clampaje del cordón, cuando el estímulo más directo es el aumento de la oxigenación tras la primera respiración.',
  obj:'Explicar el mecanismo fisiológico que dispara el cierre funcional del conducto arterioso al nacer.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['conducto arterioso','circulación fetal','transición neonatal','cierre funcional']
},
{
  id:'U7-E-Q33', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo del sistema cardiovascular', sub:'Arcos aórticos',
  dif:3, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿De cuál de los arcos aórticos faríngeos deriva la porción proximal de la arteria subclavia derecha?',
  ops:['Primer arco', 'Cuarto arco', 'Sexto arco', 'Segundo arco'],
  ok:1,
  clave:'La subclavia derecha proximal deriva del cuarto arco aórtico derecho.',
  exp:'Los seis pares de arcos aórticos faríngeos no persisten todos ni de forma simétrica: cada uno da estructuras vasculares específicas y distintas a la derecha y a la izquierda, lo que explica la asimetría del cayado aórtico definitivo. El cuarto arco derecho contribuye a la porción proximal de la arteria subclavia derecha, mientras que el cuarto arco izquierdo forma parte del cayado aórtico definitivo. El sexto arco da origen a las arterias pulmonares y, del lado izquierdo, al conducto arterioso; el tercer arco forma las carótidas. Este esquema es la base embriológica para entender variantes anatómicas como la arteria subclavia derecha aberrante.',
  no:{
    0:'El primer y segundo arcos regresan casi por completo y no dan contribución vascular significativa en el adulto; su tejido se destina sobre todo a estructuras del oído y la cara.',
    2:'El sexto arco forma las arterias pulmonares y el conducto arterioso, no la subclavia.',
    3:'El segundo arco no persiste como estructura vascular arterial mayor en el adulto.'
  },
  trampa:'Asumir simetría entre lado derecho e izquierdo en el destino de los arcos aórticos. La asimetría es precisamente la clave para entender el cayado definitivo y sus variantes.',
  obj:'Ubicar el origen del cuarto arco aórtico derecho y su relación con la subclavia derecha.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['arcos aórticos','subclavia derecha','arco faríngeo','sistema cardiovascular']
},
{
  id:'U7-E-Q34', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo del aparato digestivo', sub:'Regiones del intestino primitivo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'El intestino primitivo se divide en tres regiones según su irrigación. ¿Qué arteria irriga al intestino medio y hasta qué punto del colon llega su territorio?',
  ops:[
    'El tronco celíaco, hasta el ángulo esplénico',
    'La arteria mesentérica superior, hasta los dos tercios proximales del colon transverso',
    'La arteria mesentérica inferior, hasta el recto',
    'La arteria mesentérica superior, hasta el recto'
  ],
  ok:1,
  clave:'El intestino medio va de la segunda porción del duodeno hasta los dos tercios proximales del colon transverso, irrigado por la mesentérica superior.',
  exp:'El intestino primitivo se divide en tres regiones con irrigación e inervación propias: el intestino anterior (irrigado por el tronco celíaco, desde el esófago hasta la segunda porción del duodeno), el intestino medio (irrigado por la arteria mesentérica superior, desde la segunda porción del duodeno hasta los dos tercios proximales del colon transverso), y el intestino posterior (irrigado por la mesentérica inferior, desde el tercio distal del colon transverso hasta la porción superior del canal anal). Esta división explica por qué el intestino medio es la región que protruye fisiológicamente hacia el cordón umbilical entre la sexta y la décima semana y hace una rotación característica de 270 grados en sentido antihorario alrededor del eje de la arteria mesentérica superior.',
  no:{
    0:'El tronco celíaco irriga el intestino ANTERIOR, no el medio, y su límite no llega al ángulo esplénico.',
    2:'La mesentérica inferior irriga el intestino POSTERIOR, la región distal, no el intestino medio.',
    3:'La mesentérica superior irriga el intestino medio, pero su territorio termina en los dos tercios proximales del colon transverso, no en el recto.'
  },
  trampa:'Mezclar los límites de las tres regiones del intestino primitivo entre sí. El punto de cambio de arteria (ángulo esplénico aproximado para intestino medio-posterior) es un dato que se pregunta mucho.',
  obj:'Ubicar los límites y la irrigación del intestino medio dentro del esquema del intestino primitivo.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['intestino primitivo','intestino medio','arteria mesentérica superior','rotación intestinal']
},
{
  id:'U7-E-Q35', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo del aparato digestivo', sub:'Rotación intestinal',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un lactante presenta episodios recurrentes de vómito bilioso y en una serie radiológica el ciego se encuentra situado en el cuadrante superior derecho, con el duodeno cruzando la línea media de forma anómala.',
  enunciado:'¿Qué alteración del desarrollo intestinal explica mejor este hallazgo, y qué complicación grave debe descartarse?',
  ops:[
    'Atresia duodenal; riesgo de perforación',
    'Malrotación intestinal; riesgo de vólvulo del intestino medio',
    'Onfalocele; riesgo de eventración',
    'Divertículo de Meckel; riesgo de hemorragia digestiva'
  ],
  ok:1,
  clave:'Ciego alto y duodeno anómalo: malrotación, con riesgo de vólvulo por bandas de Ladd y mesenterio de base estrecha.',
  exp:'Normalmente, tras la hernia umbilical fisiológica, el intestino medio rota 270° en sentido antihorario alrededor del eje de la arteria mesentérica superior mientras regresa a la cavidad abdominal, quedando el ciego en la fosa ilíaca derecha con un mesenterio de base ancha. Cuando esa rotación es incompleta (malrotación), el ciego queda situado alto, cerca del cuadrante superior derecho, fijado por bandas fibrosas anómalas (bandas de Ladd) que pueden comprimir el duodeno, y el mesenterio queda con una base estrecha, mucho más susceptible de torcerse sobre sí mismo: el vólvulo del intestino medio, una urgencia quirúrgica porque compromete la irrigación de toda la arteria mesentérica superior.',
  no:{
    0:'La atresia duodenal da vómito bilioso desde el nacimiento con el signo de doble burbuja, pero no explica la posición anómala del ciego.',
    2:'El onfalocele es un defecto de la pared abdominal visible al nacer, no una alteración posicional interna del intestino ya reducido.',
    3:'El divertículo de Meckel es un remanente del conducto onfalomesentérico que suele presentarse con sangrado rectal indoloro, sin relación con la posición del ciego.'
  },
  trampa:'Centrarse solo en el síntoma (vómito bilioso) sin usar el dato posicional del ciego, que es lo que apunta específicamente a un problema de rotación y no de otra causa de obstrucción.',
  obj:'Reconocer la malrotación intestinal por la posición anómala del ciego y su riesgo de vólvulo.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['malrotación intestinal','vólvulo','rotación intestinal','bandas de Ladd']
},
{
  id:'U7-E-Q36', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo del aparato digestivo', sub:'Divertículo de Meckel',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué remanente embrionario da origen al divertículo de Meckel, y con qué regla mnemotécnica de "los dos" se recuerda habitualmente?',
  ops:[
    'Persistencia del conducto tirogloso; se localiza en el cuello',
    'Persistencia del conducto onfalomesentérico (vitelino); regla de los "2": a 2 pies de la válvula ileocecal, 2% de la población, con frecuencia 2 tipos de mucosa ectópica',
    'Persistencia del uraco; se localiza entre la vejiga y el ombligo',
    'Persistencia del proceso vaginal; se asocia a hernia inguinal'
  ],
  ok:1,
  clave:'El divertículo de Meckel es un remanente del conducto onfalomesentérico, con la clásica regla de los "2".',
  exp:'El conducto onfalomesentérico (o vitelino) comunica normalmente el intestino medio con el saco vitelino durante la vida embrionaria temprana, y se oblitera hacia la novena semana. Cuando persiste parcialmente el extremo proximal, se forma el divertículo de Meckel, la anomalía congénita más frecuente del tubo digestivo. Se recuerda por la regla de los "2": afecta aproximadamente al 2% de la población, se localiza a unos 2 pies (60 cm) de la válvula ileocecal, mide unos 2 pulgadas, suele manifestarse antes de los 2 años, y frecuentemente contiene 2 tipos de mucosa ectópica (gástrica y pancreática), cuya secreción ácida puede ulcerar el intestino adyacente y causar sangrado.',
  no:{
    0:'El conducto tirogloso da quistes o fístulas cervicales de la línea media, sin relación con el intestino.',
    2:'El uraco persistente da anomalías entre la vejiga y el ombligo (fístula, quiste o seno uracal), no el divertículo de Meckel.',
    3:'El proceso vaginal persistente se relaciona con la hernia inguinal indirecta o el hidrocele, no con un divertículo intestinal.'
  },
  trampa:'Confundir los distintos remanentes de conductos embrionarios entre sí (tirogloso, onfalomesentérico, uraco, proceso vaginal); cada uno da un cuadro clínico y una localización propios.',
  obj:'Identificar el origen del divertículo de Meckel y su regla mnemotécnica clásica.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['divertículo de Meckel','conducto onfalomesentérico','regla de los dos','intestino primitivo']
},
{
  id:'U7-E-Q37', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo del aparato digestivo', sub:'Atresia esofágica y fístula traqueoesofágica',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un recién nacido presenta sialorrea excesiva y episodios de tos y cianosis con las tomas. La sonda nasogástrica no logra progresar y se enrolla en un fondo de saco a nivel torácico alto.',
  enunciado:'¿Qué fallo del desarrollo embrionario explica mejor este cuadro?',
  ops:[
    'Fallo de la tabicación del intestino anterior en tráquea y esófago, con persistencia de una comunicación anómala',
    'Fallo de la rotación del intestino medio',
    'Persistencia del conducto onfalomesentérico',
    'Fallo de cierre del tubo neural'
  ],
  ok:0,
  clave:'El esófago y la tráquea se separan por tabicación de un intestino anterior común; su fallo da atresia esofágica con o sin fístula traqueoesofágica.',
  exp:'La tráquea y el esófago se originan de un tubo digestivo anterior común que se divide por un tabique traqueoesofágico. Cuando esa separación falla, el resultado más frecuente es la atresia esofágica: el esófago proximal termina en un fondo de saco ciego (por eso la sonda no progresa y hay sialorrea por acumulación de saliva), combinada en la mayoría de los casos con una fístula que comunica el esófago distal con la tráquea, lo que produce tos y cianosis con la alimentación por paso de contenido hacia la vía aérea. Este defecto se asocia con frecuencia a otras anomalías, agrupadas en la asociación VACTERL.',
  no:{
    1:'Un fallo de la rotación intestinal produce cuadros de obstrucción baja (vólvulo, malrotación), no sialorrea ni imposibilidad de pasar una sonda esofágica.',
    2:'El conducto onfalomesentálico da el divertículo de Meckel, en el íleon, sin relación con el esófago ni la tráquea.',
    3:'Un defecto del tubo neural produce anomalías del sistema nervioso central, no de la separación traqueoesofágica.'
  },
  trampa:'Atribuir la clínica respiratoria solo a un problema pulmonar primario, sin conectar los dos signos (sonda que no progresa + tos con las tomas) con el mecanismo único que los explica a ambos: la separación fallida del intestino anterior.',
  obj:'Explicar el mecanismo embriológico de la atresia esofágica con fístula traqueoesofágica.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['atresia esofágica','fístula traqueoesofágica','intestino anterior','tabique traqueoesofágico']
},
{
  id:'U7-E-Q38', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo del aparato digestivo', sub:'Páncreas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'El páncreas se forma a partir de dos esbozos endodérmicos que después se fusionan. ¿Qué anomalía puede resultar si la fusión es incompleta o anómala?',
  ops:[
    'Páncreas anular, que puede comprimir el duodeno',
    'Páncreas ectópico en el estómago exclusivamente',
    'Agenesia pancreática completa siempre',
    'Duplicación completa de la vesícula biliar'
  ],
  ok:0,
  clave:'El páncreas anular resulta de una fusión anómala de los esbozos pancreáticos dorsal y ventral alrededor del duodeno.',
  exp:'El páncreas se desarrolla a partir de dos yemas endodérmicas: una dorsal, más grande, y una ventral, más pequeña, que rota junto con el colédoco hasta situarse por debajo y detrás de la yema dorsal, fusionándose con ella para formar el páncreas definitivo. Si la yema ventral se divide en dos porciones que rotan en direcciones opuestas y terminan rodeando al duodeno antes de fusionarse, el resultado es un páncreas anular: un anillo de tejido pancreático que envuelve la segunda porción del duodeno y puede comprimirlo, produciendo obstrucción duodenal, que en el recién nacido puede manifestarse como vómito no bilioso o bilioso según el nivel de la obstrucción respecto a la ampolla de Vater.',
  no:{
    1:'El páncreas ectópico puede aparecer en distintos sitios del tubo digestivo (estómago, duodeno, divertículo de Meckel), no exclusivamente en el estómago, y no es lo que describe una fusión anómala de las dos yemas alrededor del duodeno.',
    2:'La fusión anómala no produce agenesia; produce, al contrario, un exceso de tejido rodeando al duodeno.',
    3:'La vesícula biliar tiene un origen embrionario distinto (divertículo hepático) y no está relacionada con la fusión de las yemas pancreáticas.'
  },
  trampa:'Pensar que cualquier anomalía de fusión de dos esbozos da como resultado ausencia de tejido. En el páncreas anular ocurre lo contrario: el tejido rodea una estructura vecina.',
  obj:'Explicar el origen embriológico del páncreas anular y su consecuencia clínica.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['páncreas anular','yema pancreática','duodeno','obstrucción']
},
{
  id:'U7-E-Q39', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo del aparato genitourinario', sub:'Tres sistemas renales sucesivos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Durante el desarrollo se forman sucesivamente tres sistemas renales. ¿Cuál de ellos persiste como el riñón definitivo?',
  ops:['El pronefros', 'El mesonefros', 'El metanefros', 'Los tres persisten de forma simultánea'],
  ok:2,
  clave:'El metanefros, el tercero y más caudal, es el que da el riñón definitivo.',
  exp:'El desarrollo renal pasa por tres estructuras sucesivas y superpuestas en el tiempo, cada vez más caudales: el pronefros, rudimentario y no funcional, que regresa por completo hacia la cuarta semana; el mesonefros, que sí funciona transitoriamente como riñón durante buena parte del primer trimestre y cuyos túbulos y conducto (conducto de Wolff) contribuyen después al aparato genital masculino; y el metanefros, que aparece hacia la quinta semana a partir de dos componentes -la yema ureteral (que da el uréter, la pelvis renal, los cálices y los túbulos colectores) y el blastema metanéfrico (que da las nefronas)- y que se convierte en el riñón definitivo, funcional desde el segundo trimestre.',
  no:{
    0:'El pronefros es transitorio y no funcional; regresa tempranamente sin dar el riñón definitivo.',
    1:'El mesonefros funciona de forma transitoria, pero regresa como riñón; sus estructuras se reaprovechan en el aparato genital, no en el riñón definitivo.',
    3:'Los tres sistemas se solapan en el tiempo pero no persisten de forma simultánea como riñones funcionales; se suceden uno a otro.'
  },
  trampa:'Asumir que, porque el mesonefros sí llega a funcionar transitoriamente, es el que persiste. Funciona, pero no es el definitivo: eso es justamente lo que se pregunta.',
  obj:'Ordenar los tres sistemas renales sucesivos e identificar cuál es el definitivo.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['metanefros','mesonefros','pronefros','desarrollo renal']
},
{
  id:'U7-E-Q40', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo del aparato genitourinario', sub:'Conductos de Wolff y Müller',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'En ausencia de la hormona antimülleriana y de testosterona, ¿qué destino tienen respectivamente el conducto de Müller y el conducto de Wolff?',
  ops:[
    'El de Müller regresa y el de Wolff persiste y forma el aparato genital femenino',
    'El de Müller persiste y forma el aparato genital femenino interno, y el de Wolff regresa',
    'Ambos persisten y coexisten en el adulto',
    'Ambos regresan y el aparato genital se forma de novo a partir del seno urogenital'
  ],
  ok:1,
  clave:'Sin hormona antimülleriana ni testosterona, el conducto de Müller persiste (da genitales femeninos) y el de Wolff regresa: es el patrón "por defecto".',
  exp:'El desarrollo del aparato genital interno sigue un patrón "por defecto" femenino: en ausencia de las hormonas testiculares, el conducto de Müller (paramesonéfrico) persiste y se diferencia en trompas uterinas, útero y porción superior de la vagina, mientras que el conducto de Wolff (mesonéfrico), sin el estímulo de la testosterona que necesita para mantenerse, regresa. En presencia de testículos funcionales, ocurre lo contrario: la hormona antimülleriana (producida por las células de Sertoli) hace regresar al conducto de Müller, y la testosterona (de las células de Leydig) estimula al conducto de Wolff para formar el epidídimo, el conducto deferente y las vesículas seminales.',
  no:{
    0:'Es al revés: sin las hormonas testiculares, el que persiste es el conducto de Müller (femenino), y el que regresa es el de Wolff.',
    2:'En el desarrollo típico, un conducto persiste y el otro regresa; no coexisten ambos aparatos completos en el adulto.',
    3:'El aparato genital interno no se forma de novo: proviene de la diferenciación selectiva de estos dos conductos ya presentes en el embrión indiferenciado.'
  },
  trampa:'Olvidar que el patrón "por defecto" del desarrollo genital interno es FEMENINO, y que hace falta la señal activa de las hormonas testiculares para desviarlo hacia el patrón masculino.',
  obj:'Explicar el destino de los conductos de Wolff y Müller según la presencia o ausencia de hormonas testiculares.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['conducto de Müller','conducto de Wolff','hormona antimülleriana','diferenciación sexual']
},
{
  id:'U7-E-Q41', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo del aparato genitourinario', sub:'Descenso testicular',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un lactante de 8 meses no presenta el testículo derecho palpable en el escroto, aunque sí se palpa a lo largo del trayecto inguinal.',
  enunciado:'¿Cuál es la conducta más adecuada respecto al momento de la corrección quirúrgica de esta criptorquidia?',
  ops:[
    'Esperar hasta la pubertad, porque el descenso espontáneo puede ocurrir en cualquier momento antes de esa edad',
    'Programar la orquidopexia idealmente antes de los 18 meses de edad, porque el descenso espontáneo después del año es poco probable y persiste el riesgo de daño testicular',
    'No requiere ninguna intervención porque la posición inguinal es anatómicamente normal',
    'Indicar orquiectomía inmediata por riesgo inminente de malignización'
  ],
  ok:1,
  clave:'La ventana útil de descenso espontáneo se cierra hacia el año de vida; después, corrección quirúrgica temprana.',
  exp:'El testículo desciende normalmente desde la región lumbar hasta el escroto guiado por el gubernáculo testicular, en un proceso que se completa, en la gran mayoría de los casos, hacia el momento del nacimiento o durante los primeros meses de vida. El descenso espontáneo después del año de edad es poco frecuente, así que, si un testículo sigue sin descender más allá de esa ventana, se recomienda la corrección quirúrgica (orquidopexia), idealmente antes de los 18 meses, porque mantener el testículo fuera del escroto, en un ambiente más cálido que el intraabdominal-inguinal normal para su función, se asocia con mayor riesgo de infertilidad y de malignización testicular a largo plazo si no se corrige a tiempo.',
  no:{
    0:'Esperar hasta la pubertad prolonga innecesariamente la exposición del testículo a temperaturas inadecuadas para su desarrollo; el descenso espontáneo tardío es poco probable.',
    2:'La posición inguinal, aunque a lo largo del trayecto normal de descenso, no es la posición final correcta y requiere corrección.',
    3:'La orquiectomía no es la conducta de primera línea ante una criptorquidia simple; el riesgo de malignización se reduce, no se elimina, con la orquidopexia temprana, que además preserva la función.'
  },
  trampa:'Pensar que "está en el trayecto normal, ya bajará" es suficiente sin considerar la ventana de tiempo en la que el descenso espontáneo es realmente probable.',
  obj:'Definir el momento adecuado de corrección quirúrgica de la criptorquidia y su justificación embriológica.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['criptorquidia','descenso testicular','gubernáculo','orquidopexia']
},
{
  id:'U7-E-Q42', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo del aparato genitourinario', sub:'Extrofia vesical',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué fallo del desarrollo de la pared corporal ventral explica la extrofia vesical?',
  ops:[
    'Un fallo del cierre normal de la pared abdominal infraumbilical, con desarrollo insuficiente del mesodermo de esa región',
    'Persistencia del alantoides como estructura permeable',
    'Fallo de la migración de la cresta neural craneal',
    'Fallo de la tabicación del seno urogenital'
  ],
  ok:0,
  clave:'La extrofia vesical resulta de un desarrollo insuficiente del mesodermo de la pared abdominal infraumbilical.',
  exp:'La pared abdominal ventral, en su porción infraumbilical, se forma normalmente por la migración e interposición de mesodermo entre el ectodermo superficial y el endodermo de la vejiga en desarrollo. Cuando ese mesodermo no se desarrolla o no migra de forma adecuada en esa región, la membrana cloacal (que en condiciones normales se reabsorbe y queda cubierta por tejido de sostén) queda expuesta y se rompe de forma prematura, dejando la pared posterior de la vejiga expuesta directamente en la superficie del abdomen: la extrofia vesical. Es un defecto que suele acompañarse de anomalías de los genitales externos y de la sínfisis del pubis, coherente con que la región afectada abarca toda la pared ventral infraumbilical, no solo la vejiga.',
  no:{
    1:'La persistencia del alantoides da anomalías del uraco (fístula, quiste o seno uracal), un cuadro distinto, sin la exposición vesical característica de la extrofia.',
    2:'La cresta neural craneal se relaciona con estructuras craneofaciales y cardíacas, no con la pared abdominal infraumbilical.',
    3:'Un fallo de la tabicación del seno urogenital produce anomalías de la separación entre recto y vías urogenitales (como fístulas), no la exposición vesical externa característica de la extrofia.'
  },
  trampa:'Buscar la causa dentro del propio aparato urinario (uraco, seno urogenital) en vez de en el desarrollo de la pared abdominal que lo rodea, que es donde está el fallo real.',
  obj:'Explicar el mecanismo del desarrollo de la pared abdominal que subyace a la extrofia vesical.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['extrofia vesical','pared abdominal','membrana cloacal','mesodermo']
},
{
  id:'U7-E-Q43', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo de los miembros', sub:'Cresta ectodérmica apical',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple la cresta ectodérmica apical en el desarrollo de la yema del miembro, y qué ocurre si se extirpa experimentalmente en una etapa temprana?',
  ops:[
    'Mantiene el crecimiento proximodistal del miembro; su extirpación temprana causa ausencia de las estructuras más distales',
    'Determina el eje dorsoventral del miembro; su extirpación no tiene efecto sobre la longitud',
    'Produce las células del miotomo que formarán los músculos del miembro',
    'Solo cumple una función estética, sin afectar el desarrollo esquelético'
  ],
  ok:0,
  clave:'La cresta ectodérmica apical dirige el crecimiento proximodistal; sin ella, faltan las estructuras distales.',
  exp:'La cresta ectodérmica apical es un engrosamiento del ectodermo en el borde distal de la yema del miembro que mantiene, mediante señales moleculares, la proliferación del mesénquima subyacente (la zona de progreso), permitiendo que el miembro crezca en dirección proximodistal: primero se forman las estructuras proximales (como el húmero o el fémur) y progresivamente las más distales (mano o pie). Experimentalmente, extirpar la cresta ectodérmica apical en una etapa temprana detiene el crecimiento en ese punto, dejando ausentes las estructuras que aún no se habían formado, es decir, las más distales -el mismo principio que ayuda a entender clínicamente por qué ciertos teratógenos que actúan en momentos distintos producen distintos grados de reducción del miembro.',
  no:{
    1:'El eje dorsoventral se determina por otras señales (como Wnt7a en el ectodermo dorsal), no por la cresta ectodérmica apical, que gobierna el eje proximodistal.',
    2:'Los mioblastos que forman la musculatura del miembro migran desde los somitas, no desde la cresta ectodérmica apical, que es de origen ectodérmico.',
    3:'Su función es determinante para el crecimiento esquelético longitudinal del miembro, no meramente estética.'
  },
  trampa:'Subestimar el papel de una estructura tan pequeña (un engrosamiento ectodérmico) pensando que no puede ser la responsable del patrón completo de crecimiento del miembro.',
  obj:'Explicar el papel de la cresta ectodérmica apical en el crecimiento proximodistal del miembro.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['cresta ectodérmica apical','yema del miembro','crecimiento proximodistal','focomelia']
},
{
  id:'U7-E-Q44', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo de los miembros', sub:'Muerte celular programada y dedos',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'La separación de los dedos de la mano y del pie depende normalmente de un mecanismo de desarrollo. ¿Cuál, y qué malformación resulta si falla?',
  ops:[
    'Apoptosis del mesénquima interdigital; si falla, resulta sindactilia',
    'Proliferación excesiva del mesénquima interdigital; si falla, resulta polidactilia',
    'Migración de la cresta neural; si falla, resulta amelia',
    'Fusión de somitas adyacentes; si falla, resulta ectrodactilia'
  ],
  ok:0,
  clave:'La apoptosis (muerte celular programada) del tejido interdigital separa los dedos; si no ocurre, quedan unidos: sindactilia.',
  exp:'Entre las yemas digitales que se forman en la placa de la mano o del pie, el mesénquima interpuesto está destinado normalmente a morir por apoptosis (muerte celular programada), un proceso regulado con precisión que esculpe los dedos como estructuras separadas. Cuando esa apoptosis interdigital no ocurre de forma completa, el tejido persiste uniendo a dos o más dedos entre sí, dando sindactilia (cutánea si solo es piel, ósea si compromete también el hueso). Es un ejemplo clásico, junto con la regresión del conducto de Müller o del tubo neural caudal, de que la muerte celular programada es tan necesaria para la morfogénesis normal como la proliferación celular.',
  no:{
    1:'La polidactilia (dedos supernumerarios) tiene otro mecanismo, relacionado con alteraciones de la señalización que define el número de dígitos, no con un exceso simple de proliferación interdigital ni es lo opuesto directo descrito aquí.',
    2:'La amelia (ausencia completa de un miembro) se relaciona con un fallo muy temprano de la formación de la yema del miembro, no con la migración de la cresta neural ni con la separación de los dedos.',
    3:'La ectrodactilia (ausencia de uno o más dedos centrales) no resulta de una fusión de somitas, que es un fenómeno del tronco, no del patrón digital.'
  },
  trampa:'Pensar que toda malformación de más (dedos unidos) viene de un exceso de crecimiento. Aquí es al revés: es la FALTA de un proceso de muerte celular la que deja el exceso de tejido.',
  obj:'Explicar el papel de la apoptosis interdigital en la separación normal de los dedos.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['apoptosis','sindactilia','mesénquima interdigital','desarrollo de los miembros']
},
{
  id:'U7-E-Q45', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Desarrollo de los miembros', sub:'Rotación de los miembros',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Los miembros superiores e inferiores rotan en direcciones opuestas durante el desarrollo. ¿Cómo rota cada uno, y qué consecuencia anatómica adulta explica?',
  ops:[
    'El superior rota 90° en sentido externo (lateral) y el inferior 90° en sentido interno (medial); por eso el codo apunta hacia atrás y la rodilla hacia adelante',
    'Ambos rotan en el mismo sentido, por eso el codo y la rodilla apuntan hacia el mismo lado',
    'Solo rota el miembro inferior; el superior no cambia de orientación',
    'La rotación no tiene relación con la orientación final de codo y rodilla, que depende solo de la osificación'
  ],
  ok:0,
  clave:'Rotación opuesta: miembro superior en sentido externo (codo hacia atrás), miembro inferior en sentido interno (rodilla hacia adelante).',
  exp:'Cuando las yemas de los miembros se alargan, inicialmente ambas apuntan en una orientación similar, con las superficies flexoras hacia ventral. Durante la séptima semana, el miembro superior rota 90° en sentido externo (lateral), lo que deja al codo apuntando hacia posterior (de ahí que el codo se flexione hacia atrás) y al pulgar en posición lateral. El miembro inferior, en cambio, rota 90° en sentido interno (medial), lo que deja a la rodilla apuntando hacia anterior (de ahí que la rodilla se flexione hacia adelante) y al dedo gordo en posición medial. Esta rotación opuesta entre ambos miembros es la razón embriológica de una asimetría anatómica que de otro modo parecería arbitraria.',
  no:{
    1:'Si rotaran en el mismo sentido, codo y rodilla se doblarían hacia el mismo lado, lo cual no ocurre: se doblan en sentidos opuestos.',
    2:'Los dos miembros rotan, cada uno en su sentido propio; no es que solo rote uno de los dos.',
    3:'La orientación de la flexión de codo y rodilla sí depende directamente de la dirección de esta rotación temprana, no solo de la osificación posterior.'
  },
  trampa:'Asumir que ambos miembros siguen el mismo patrón de desarrollo por simetría aparente. La rotación es opuesta, y es justo lo que explica por qué codo y rodilla se doblan en direcciones distintas.',
  obj:'Explicar la rotación opuesta de los miembros superiores e inferiores y su consecuencia anatómica.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['rotación de los miembros','codo','rodilla','desarrollo de los miembros']
},
{
  id:'U7-E-Q46', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Gemelaridad y placentación múltiple', sub:'Gemelos dicigóticos',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipo de placentación tienen siempre los gemelos dicigóticos (bivitelinos)?',
  ops:[
    'Siempre monocorial monoamniótica',
    'Siempre dicorial diamniótica, con dos placentas separadas o fusionadas',
    'Depende del momento de la división, igual que en los monocigóticos',
    'Siempre monocorial diamniótica'
  ],
  ok:1,
  clave:'Los gemelos dicigóticos, al provenir de dos cigotos distintos, tienen siempre dos corion y dos amnios (dicorial diamniótica).',
  exp:'Los gemelos dicigóticos se originan de la fecundación de dos óvulos distintos por dos espermatozoides distintos, de modo que son genéticamente tan diferentes entre sí como dos hermanos de partos distintos (pueden incluso ser de sexo diferente). Al tratarse de dos cigotos independientes, cada uno se implanta con su propio corion y su propio amnios: la placentación es siempre dicorial y diamniótica, aunque las dos placentas pueden fusionarse si la implantación ocurre cerca una de la otra, dando la falsa impresión de una sola placenta al examen macroscópico. Esto contrasta con los gemelos monocigóticos, cuya placentación sí varía según el momento en que se divide el cigoto único.',
  no:{
    0:'La placentación monocorial monoamniótica solo puede darse en gemelos monocigóticos, por definición, ya que implica un origen compartido de corion y amnios de UN solo cigoto.',
    2:'A diferencia de los monocigóticos, en los dicigóticos no existe "momento de división": son dos cigotos separados desde el inicio, así que la placentación es siempre la misma.',
    3:'La combinación monocorial diamniótica tampoco es posible en dicigóticos, por la misma razón: requiere un origen compartido de un solo corion.'
  },
  trampa:'Aplicar a los gemelos dicigóticos la lógica de "depende del momento de la división" que sí aplica a los monocigóticos. En los dicigóticos no hay división: son dos cigotos desde el inicio.',
  obj:'Establecer que la placentación de los gemelos dicigóticos es siempre dicorial diamniótica.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['gemelos dicigóticos','placenta dicorial','diamniótica','gemelaridad']
},
{
  id:'U7-E-Q47', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Gemelaridad y placentación múltiple', sub:'Gemelos monocigóticos según el momento de división',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En una ecografía de embarazo gemelar monocigótico se observa una sola placenta, un solo corion y una sola cavidad amniótica compartida por ambos fetos.',
  enunciado:'Según el momento en que ocurrió la división del cigoto, ¿a qué intervalo corresponde este hallazgo y qué riesgo obstétrico específico conlleva?',
  ops:[
    'División antes del día 3; riesgo de placentas separadas que compitan por espacio',
    'División entre los días 4 y 8; riesgo de complicaciones vasculares placentarias compartidas, pero con cavidades amnióticas separadas',
    'División entre los días 8 y 13; riesgo de entrelazamiento y compresión del cordón umbilical por compartir la misma cavidad amniótica',
    'División después del día 13; riesgo de gemelos unidos (siameses)'
  ],
  ok:2,
  clave:'Monocorial monoamniótica: división entre los días 8 y 13; alto riesgo de entrelazamiento de cordones.',
  exp:'El momento de la división del cigoto único determina el tipo de placentación en los gemelos monocigóticos: si la división ocurre antes del día 3 (aún en fase de mórula o blastocisto muy temprano), resulta dicorial diamniótica, como en los dicigóticos; entre los días 4 y 8 (ya diferenciado el trofoblasto pero antes de que se forme el amnios), resulta monocorial diamniótica, la más frecuente; entre los días 8 y 13 (ya formado el amnios), resulta monocorial MONOamniótica, con ambos fetos compartiendo la misma cavidad, lo que conlleva un riesgo alto de entrelazamiento y compresión de los cordones umbilicales entre sí, una causa importante de mortalidad fetal en este subtipo; y si la división ocurre después del día 13, cuando ya está establecido el disco embrionario, la separación es incompleta y resultan gemelos unidos (siameses).',
  no:{
    0:'Antes del día 3 resulta en placentación dicorial diamniótica, con dos cavidades y dos coriones separados, no una placenta y una cavidad única.',
    1:'Entre los días 4 y 8 resulta monocorial DIamniótica -cada feto con su propio amnios, aunque compartan corion y placenta-, no monoamniótica como describe el caso.',
    3:'La división después del día 13 da gemelos unidos, con estructuras corporales compartidas, un cuadro distinto de una simple cavidad amniótica compartida.'
  },
  trampa:'No distinguir monocorial diamniótica de monocorial monoamniótica: la diferencia de solo unos días en el momento de la división cambia por completo el riesgo obstétrico.',
  obj:'Relacionar el momento de división del cigoto con el tipo de placentación y su riesgo obstétrico.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['gemelos monocigóticos','monocorial monoamniótica','entrelazamiento de cordones','gemelaridad']
},
{
  id:'U7-E-Q48', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Gemelaridad y placentación múltiple', sub:'Síndrome de transfusión feto-fetal',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el síndrome de transfusión feto-fetal ocurre casi exclusivamente en embarazos gemelares monocoriales y no en los dicoriales?',
  ops:[
    'Porque solo en los monocoriales existen anastomosis vasculares que comunican las dos circulaciones fetales dentro de la placenta compartida',
    'Porque en los dicoriales los dos fetos comparten la misma cavidad amniótica',
    'Porque los dicoriales siempre tienen tamaños fetales idénticos',
    'Porque es un fenómeno exclusivamente genético sin relación con la placenta'
  ],
  ok:0,
  clave:'Las anastomosis vasculares dentro de una placenta monocorial compartida son el requisito estructural del síndrome.',
  exp:'En una placenta monocorial, ambos fetos comparten el mismo disco placentario, dentro del cual pueden existir anastomosis vasculares (arterioarteriales, venovenosas o, la más relevante clínicamente, arteriovenosas) que comunican las dos circulaciones fetales. Cuando el flujo a través de estas conexiones se desequilibra, uno de los gemelos (el donante) transfiere sangre de forma neta al otro (el receptor), lo que produce en el donante restricción del crecimiento, oligohidramnios y anemia, y en el receptor sobrecarga de volumen, polihidramnios y riesgo de insuficiencia cardíaca. En los embarazos dicoriales, cada feto tiene su propia placenta completamente separada, sin continuidad vascular entre ambas, así que este mecanismo simplemente no puede ocurrir.',
  no:{
    1:'Compartir cavidad amniótica (monoamnionicidad) no es lo que produce el síndrome: el requisito es compartir la circulación placentaria (monocorionicidad), que es una condición distinta.',
    2:'Es justamente lo contrario de lo esperable en los dicoriales, que suelen tener crecimientos más independientes entre sí; y en cualquier caso no es el argumento que explica la ausencia del síndrome.',
    3:'El mecanismo es vascular y anatómico, dependiente de la placenta compartida, no un fenómeno genético.'
  },
  trampa:'Confundir el requisito estructural del síndrome (compartir CORION/placenta, con sus anastomosis) con el de compartir AMNIOS, que es una variable distinta de la placentación.',
  obj:'Explicar por qué el síndrome de transfusión feto-fetal requiere placentación monocorial.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['transfusión feto-fetal','placenta monocorial','anastomosis vasculares','gemelaridad']
},
{
  id:'U7-E-Q49', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Gemelaridad y placentación múltiple', sub:'Gemelos monocigóticos vs. dicigóticos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una pareja tiene gemelos de distinto sexo, cada uno con su propia placenta claramente separada.',
  enunciado:'¿Qué puede concluirse con certeza sobre la cigosidad de estos gemelos a partir de estos datos?',
  ops:[
    'Son necesariamente monocigóticos, porque tienen placentas separadas',
    'Son necesariamente dicigóticos: el sexo distinto ya lo demuestra por sí solo, y la placentación separada es coherente con ello',
    'No puede determinarse la cigosidad sin un estudio genético, independientemente del sexo',
    'La placentación separada por sí sola siempre indica dicigosidad, sin importar el sexo'
  ],
  ok:1,
  clave:'El sexo distinto por sí solo ya excluye la monocigosidad: unos gemelos monocigóticos comparten el mismo genoma y, por tanto, el mismo sexo cromosómico.',
  exp:'Los gemelos monocigóticos provienen de un único cigoto que se divide, por lo que comparten exactamente el mismo genoma, incluidos los cromosomas sexuales: SIEMPRE son del mismo sexo (salvo rarísimas excepciones por eventos postcigóticos, prácticamente irrelevantes para razonar el caso). Por tanto, encontrar gemelos de sexo distinto basta para concluir con certeza que son dicigóticos, sin necesidad de estudio genético adicional. La placentación dicorial separada es coherente con ese diagnóstico, pero el dato realmente concluyente -y suficiente por sí solo- es el sexo distinto, no la placenta: una placentación separada, de hecho, puede darse también en monocigóticos si la división ocurrió muy temprano (antes del día 3), así que por sí sola no sería suficiente para distinguir cigosidad si el sexo fuera igual.',
  no:{
    0:'Es lo opuesto: la placentación separada por sí sola es compatible con ambos tipos de gemelos si dividieran muy temprano, pero el sexo distinto excluye por completo la monocigosidad.',
    2:'En este caso sí puede determinarse con certeza sin estudio genético, porque el sexo distinto es un dato suficiente y definitivo.',
    3:'La placentación separada no es exclusiva de los dicigóticos: los monocigóticos que se dividen antes del día 3 también la tienen.'
  },
  trampa:'Usar el dato de la placenta (que es ambiguo, porque monocigóticos tempranos también pueden tener placentas separadas) en vez del dato realmente concluyente, que es el sexo distinto.',
  obj:'Distinguir qué dato clínico permite determinar con certeza la cigosidad de un embarazo gemelar.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['cigosidad','gemelos dicigóticos','gemelos monocigóticos','placentación']
},
{
  id:'U7-E-Q50', programa:'unirm', cuatri:7,
  esp:'Embriología', tema:'Gemelaridad y placentación múltiple', sub:'Factores de riesgo de gemelaridad dicigótica',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de los siguientes factores aumenta específicamente la probabilidad de un embarazo gemelar DIcigótico, y no la de uno monocigótico?',
  ops:[
    'El uso de técnicas de reproducción asistida con estimulación ovárica, por liberación de más de un óvulo',
    'El momento exacto de la fecundación dentro del ciclo',
    'La edad paterna avanzada',
    'Ningún factor conocido influye en el tipo de gemelaridad'
  ],
  ok:0,
  clave:'La hiperestimulación ovárica aumenta la probabilidad de liberar más de un óvulo, lo que favorece la gemelaridad dicigótica, no la monocigótica.',
  exp:'La gemelaridad dicigótica depende de que se liberen y sean fecundados dos óvulos distintos en el mismo ciclo, así que cualquier factor que aumente la probabilidad de doble ovulación la favorece: la estimulación ovárica usada en técnicas de reproducción asistida, la edad materna avanzada (que se asocia a mayor secreción de gonadotropinas) y los antecedentes familiares maternos de gemelaridad dicigótica. La gemelaridad monocigótica, en cambio, resulta de la división espontánea de un único cigoto, un fenómeno que ocurre con una frecuencia bastante constante en la población (aproximadamente 1 de cada 250 embarazos) y que no se ha demostrado que dependa de estos mismos factores hormonales o reproductivos.',
  no:{
    1:'El momento de la fecundación dentro del ciclo no determina si habrá uno o dos óvulos liberados.',
    2:'La edad paterna se ha relacionado con mutaciones de novo en la descendencia, no con la probabilidad de doble ovulación materna.',
    3:'Sí existen factores conocidos, y precisamente distinguen la gemelaridad dicigótica (con causas identificables) de la monocigótica (en gran medida espontánea).'
  },
  trampa:'Aplicar los factores de riesgo de la gemelaridad dicigótica (ovulación múltiple) a la monocigótica, que tiene un mecanismo completamente distinto y en gran medida azaroso.',
  obj:'Identificar los factores que aumentan específicamente el riesgo de gemelaridad dicigótica.',
  ref:'Moore, Embriología Clínica. Langman, Embriología Médica.',
  tags:['gemelaridad dicigótica','reproducción asistida','hiperestimulación ovárica','factores de riesgo']
}

]);
