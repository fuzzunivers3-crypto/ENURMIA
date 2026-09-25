/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE NEUROANATOMIA (1/2)
   Amplia Neuroanatomia de 4 a 50 preguntas junto con
   unirm-09-banco-9.js. Esta parte cubre organizacion general,
   medula espinal, tronco encefalico, cerebelo, ganglios basales
   y talamo/hipotalamo (temas 1-6).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== NEUROANATOMIA ===================== */
{
  id:'U9-NA-Q05', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Organización general del sistema nervioso', sub:'Sustancia gris vs. blanca',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre la sustancia gris y la sustancia blanca del sistema nervioso?',
  ops:[
    'La sustancia gris está formada por cuerpos neuronales (procesamiento); la sustancia blanca está formada por axones mielinizados (conexión entre regiones)',
    'Ambas están formadas exactamente por los mismos componentes', 'La sustancia blanca contiene los cuerpos neuronales, y la gris los axones', 'Ninguna de las dos tiene relación con la transmisión de información nerviosa'],
  ok:0,
  clave:'La sustancia gris = cuerpos neuronales (procesamiento). La sustancia blanca = axones mielinizados (conexión).',
  exp:'La sustancia gris está formada principalmente por cuerpos neuronales (somas), dendritas y sinapsis -es donde ocurre el procesamiento de la información-. La sustancia blanca está formada principalmente por axones mielinizados, que conectan una región con otra -es el "cableado" que transmite la información ya procesada.',
  no:{
    1:'Tienen composiciones claramente distintas: cuerpos neuronales frente a axones mielinizados.',
    2:'Está invertido: la sustancia GRIS contiene los cuerpos neuronales, y la BLANCA los axones, no al revés.',
    3:'Ambas tienen una relación directa con la transmisión de información, aunque con funciones distintas (procesamiento frente a conexión).'
  },
  trampa:'Invertir cuál sustancia (gris o blanca) corresponde a los cuerpos neuronales y cuál a los axones.',
  obj:'Distinguir la sustancia gris de la sustancia blanca según su composición y función.',
  ref:'Snell, Neuroanatomía Clínica, cap. 1.',
  tags:['sustancia gris','sustancia blanca','cuerpos neuronales','axones mielinizados']
},
{
  id:'U9-NA-Q06', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Organización general del sistema nervioso', sub:'SNC vs. SNP',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre el sistema nervioso central (SNC) y el sistema nervioso periférico (SNP)?',
  ops:[
    'El SNC comprende el encéfalo y la médula espinal, protegidos por hueso, meninges y LCR; el SNP comprende los nervios y ganglios fuera del cráneo y la columna, conectando al SNC con el resto del cuerpo',
    'Ambos sistemas son exactamente el mismo, solo con nombres distintos', 'El SNP incluye al encéfalo, y el SNC incluye solo a los nervios periféricos', 'El SNC no tiene ninguna protección estructural específica'],
  ok:0,
  clave:'El SNC (encéfalo + médula, protegidos por hueso/meninges/LCR) procesa e integra; el SNP (nervios y ganglios fuera del cráneo/columna) conecta al SNC con el cuerpo.',
  exp:'El sistema nervioso central (SNC) comprende el encéfalo y la médula espinal, protegidos por estructuras óseas, las meninges y el líquido cefalorraquídeo. El sistema nervioso periférico (SNP) comprende los nervios y ganglios fuera del cráneo y la columna vertebral, que conectan al SNC con el resto del cuerpo.',
  no:{
    1:'Son sistemas claramente distintos, con componentes y funciones diferenciadas, no sinónimos con nombres distintos.',
    2:'Está invertido: el SNC incluye al encéfalo (y la médula espinal), y el SNP incluye a los nervios periféricos, no al revés.',
    3:'El SNC sí tiene una protección estructural específica y bien caracterizada: hueso, meninges y líquido cefalorraquídeo.'
  },
  trampa:'Invertir qué componentes (encéfalo/médula frente a nervios periféricos) pertenecen al SNC y cuáles al SNP.',
  obj:'Distinguir el sistema nervioso central del periférico según sus componentes y protección estructural.',
  ref:'Snell, Neuroanatomía Clínica, cap. 1.',
  tags:['sistema nervioso central','sistema nervioso periférico','protección estructural']
},
{
  id:'U9-NA-Q07', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Organización general del sistema nervioso', sub:'Función del SNC',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la función central del sistema nervioso central, distinguiéndolo del periférico?',
  ops:[
    'Es el centro de procesamiento e integración de la información, donde se toman las decisiones motoras y se interpreta la información sensitiva',
    'El SNC solo transmite información, sin procesarla ni integrarla de ninguna forma', 'El SNC se limita exclusivamente a funciones motoras, sin ninguna función sensitiva', 'El SNC no tiene ninguna función específica distinta del SNP'],
  ok:0,
  clave:'El SNC es el centro de procesamiento e integración, donde se toman decisiones motoras y se interpreta la información sensitiva.',
  exp:'El sistema nervioso central es el centro de procesamiento e integración de la información, donde se toman las decisiones motoras y se interpreta la información sensitiva -a diferencia del sistema nervioso periférico, que principalmente transmite información sensitiva hacia el SNC y órdenes motoras desde él, sin el mismo nivel de procesamiento integrador.',
  no:{
    1:'El SNC sí procesa e integra información, no solo la transmite; esa es precisamente su función distintiva.',
    2:'El SNC tiene tanto función motora como sensitiva (interpretación de información sensitiva y toma de decisiones motoras), no exclusivamente motora.',
    3:'El SNC sí tiene una función específica y central que lo distingue del SNP: el procesamiento e integración de la información.'
  },
  trampa:'Subestimar la función de procesamiento e integración del SNC, confundiéndolo con una simple vía de transmisión como el SNP.',
  obj:'Explicar la función de procesamiento e integración del sistema nervioso central.',
  ref:'Snell, Neuroanatomía Clínica, cap. 1.',
  tags:['sistema nervioso central','procesamiento','integración']
},
{
  id:'U9-NA-Q08', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Organización general del sistema nervioso', sub:'Nervios sensitivos y motores del SNP',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumplen, respectivamente, los nervios sensitivos y los nervios motores del sistema nervioso periférico?',
  ops:[
    'Los sensitivos llevan información desde los receptores periféricos hacia el SNC; los motores llevan las órdenes desde el SNC hacia los músculos y glándulas',
    'Ambos tipos de nervios transportan exactamente el mismo tipo de información en la misma dirección', 'Los nervios motores llevan información sensitiva, y los sensitivos llevan órdenes motoras', 'Los nervios periféricos no tienen ninguna dirección específica de transmisión'],
  ok:0,
  clave:'Los nervios sensitivos llevan información hacia el SNC; los motores llevan órdenes desde el SNC hacia músculos y glándulas.',
  exp:'Los nervios sensitivos llevan información desde los receptores periféricos hacia el sistema nervioso central, y los nervios motores llevan las órdenes desde el sistema nervioso central hacia los músculos y glándulas -direcciones de transmisión opuestas y complementarias.',
  no:{
    1:'Transportan tipos de información distintos (sensitiva frente a motora) en direcciones opuestas (hacia el SNC frente a desde el SNC).',
    2:'Está invertido: los sensitivos llevan información HACIA el SNC, y los motores llevan órdenes DESDE el SNC, no al revés.',
    3:'Los nervios periféricos sí tienen una dirección específica de transmisión, según sean sensitivos o motores.'
  },
  trampa:'Invertir la dirección de transmisión de los nervios sensitivos (hacia el SNC) y motores (desde el SNC).',
  obj:'Distinguir la función y dirección de transmisión de los nervios sensitivos y motores.',
  ref:'Snell, Neuroanatomía Clínica, cap. 1.',
  tags:['nervios sensitivos','nervios motores','sistema nervioso periférico']
},
{
  id:'U9-NA-Q09', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Organización general del sistema nervioso', sub:'Utilidad clínica de la distinción central-periférico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué distinguir si una lesión afecta al sistema nervioso central o al periférico es, con frecuencia, el primer paso del razonamiento neurológico?',
  ops:[
    'Porque cada sistema tiene patrones de déficit y causas características distintas, lo que orienta el resto de la evaluación diagnóstica',
    'Esta distinción no tiene ninguna utilidad clínica real', 'Las lesiones del SNC y del SNP producen exactamente los mismos síntomas, sin ninguna diferencia', 'Solo las lesiones del SNP tienen relevancia clínica; las del SNC no se pueden diagnosticar'],
  ok:0,
  clave:'Cada sistema (SNC/SNP) tiene patrones de déficit y causas características distintas, orientando el resto de la evaluación diagnóstica.',
  exp:'Distinguir si una lesión afecta al sistema nervioso central o al periférico es, con frecuencia, el primer paso del razonamiento neurológico, porque cada uno tiene patrones de déficit y causas características distintas -por ejemplo, los patrones de debilidad con reflejos exaltados (motora superior, SNC) frente a reflejos disminuidos con atrofia (motora inferior, SNP), un contraste que se desarrolla en detalle más adelante en este bloque.',
  no:{
    1:'Esta distinción sí tiene una utilidad clínica central, siendo con frecuencia el primer paso del razonamiento neurológico.',
    2:'Las lesiones del SNC y del SNP producen patrones de déficit distintos y diferenciables, no síntomas idénticos.',
    3:'Ambos sistemas tienen relevancia clínica y pueden diagnosticarse mediante patrones de déficit característicos.'
  },
  trampa:'Subestimar la utilidad práctica de distinguir entre lesión central y periférica como primer paso del razonamiento neurológico.',
  obj:'Explicar la utilidad clínica de distinguir entre lesión del sistema nervioso central y periférico.',
  ref:'Snell, Neuroanatomía Clínica, cap. 1.',
  tags:['razonamiento neurológico','lesión central','lesión periférica']
},
{
  id:'U9-NA-Q10', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Médula espinal: organización y vías largas', sub:'Haz corticoespinal',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple el haz corticoespinal?',
  ops:['Lleva la orden de movimiento voluntario desde la corteza cerebral hasta las neuronas motoras de la médula', 'Transporta la sensación de dolor y temperatura hacia el cerebro', 'Transporta tacto fino y propiocepción hacia el cerebro', 'No tiene ninguna función relacionada con el movimiento'],
  ok:0,
  clave:'El haz corticoespinal lleva la orden de movimiento voluntario desde la corteza hasta las neuronas motoras de la médula.',
  exp:'El haz corticoespinal es la vía motora principal: lleva la orden de movimiento voluntario desde la corteza cerebral hasta las neuronas motoras de la médula, que a su vez activan al músculo.',
  no:{
    1:'El transporte de dolor y temperatura corresponde al haz espinotalámico, no al corticoespinal.',
    2:'El transporte de tacto fino y propiocepción corresponde a los cordones posteriores, no al haz corticoespinal.',
    3:'El haz corticoespinal tiene precisamente una función central relacionada con el movimiento voluntario.'
  },
  trampa:'Confundir el haz corticoespinal (vía motora) con las vías sensitivas (espinotalámico, cordones posteriores).',
  obj:'Identificar la función motora del haz corticoespinal.',
  ref:'Snell, Neuroanatomía Clínica, cap. 5.',
  tags:['haz corticoespinal','vía motora','movimiento voluntario']
},
{
  id:'U9-NA-Q11', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Médula espinal: organización y vías largas', sub:'Puntos de decusación distintos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué se diferencian los puntos de decusación (cruce) del haz espinotalámico y de los cordones posteriores?',
  ops:[
    'El haz espinotalámico cruza casi de inmediato, uno o dos niveles después de entrar a la médula; los cordones posteriores cruzan mucho más arriba, en el bulbo raquídeo',
    'Ambas vías cruzan exactamente en el mismo punto de la médula espinal', 'Los cordones posteriores cruzan de inmediato en la médula, y el haz espinotalámico cruza en el bulbo', 'Ninguna de las dos vías cruza de lado en ningún punto de su trayecto'],
  ok:0,
  clave:'El haz espinotalámico cruza casi de inmediato en la médula; los cordones posteriores cruzan mucho más arriba, en el bulbo raquídeo.',
  exp:'El haz espinotalámico transporta dolor y temperatura, y sus fibras CRUZAN al lado opuesto casi de inmediato, apenas uno o dos niveles después de entrar a la médula. Los cordones posteriores transportan tacto fino, vibración y propiocepción; estas fibras NO cruzan en la médula: suben por el mismo lado hasta llegar al bulbo raquídeo, donde recién ahí cruzan.',
  no:{
    1:'Cruzan en puntos claramente distintos: uno casi de inmediato en la médula, el otro mucho más arriba en el bulbo.',
    2:'Está invertido: el espinotalámico cruza de inmediato en la médula, y los cordones posteriores cruzan en el bulbo, no al revés.',
    3:'Ambas vías sí cruzan de lado en algún punto de su trayecto, solo que en puntos anatómicos distintos.'
  },
  trampa:'Invertir cuál vía (espinotalámico o cordones posteriores) cruza de inmediato en la médula y cuál cruza mucho más arriba, en el bulbo.',
  obj:'Distinguir los puntos de decusación del haz espinotalámico y los cordones posteriores.',
  ref:'Snell, Neuroanatomía Clínica, cap. 5.',
  tags:['decusación','haz espinotalámico','cordones posteriores']
},
{
  id:'U9-NA-Q12', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Médula espinal: organización y vías largas', sub:'Síndrome de hemisección medular',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con una lesión que daña un solo lado de la médula espinal (hemisección medular) presenta pérdida de dolor y temperatura del lado derecho del cuerpo, y pérdida de tacto fino y propiocepción del lado izquierdo.',
  enunciado:'Si la lesión medular está en el lado izquierdo, ¿este patrón de déficit es consistente con el síndrome de hemisección medular?',
  ops:[
    'Sí: pérdida de dolor/temperatura del lado CONTRARIO a la lesión (porque esas fibras ya habían cruzado) y pérdida de tacto fino/propiocepción del MISMO lado de la lesión (porque esas fibras todavía no habían cruzado)',
    'No, este patrón no es consistente con ninguna lesión medular conocida', 'El patrón esperado sería exactamente el opuesto al descrito', 'Una lesión medular lateral nunca produce un patrón de déficit sensitivo diferenciado'],
  ok:0,
  clave:'Sí es consistente: dolor/temperatura contralateral (ya cruzado), tacto fino/propiocepción ipsilateral (aún sin cruzar), con lesión izquierda.',
  exp:'Con una lesión en el lado IZQUIERDO de la médula: la pérdida de dolor y temperatura ocurre del lado CONTRARIO (derecho), porque esas fibras del haz espinotalámico ya habían cruzado antes de llegar a ese nivel; la pérdida de tacto fino y propiocepción ocurre del MISMO lado (izquierdo), porque esas fibras de los cordones posteriores todavía no habían cruzado -exactamente el patrón descrito en el caso, consistente con el síndrome de hemisección medular.',
  no:{
    1:'Este patrón sí es consistente y característico del síndrome de hemisección medular, una de las formas clásicas de localización de lesión medular lateral.',
    2:'El patrón descrito es precisamente el esperado, no el opuesto, dado el conocimiento de los puntos de decusación de cada vía.',
    3:'Una lesión medular lateral sí produce un patrón de déficit sensitivo diferenciado y predecible, precisamente por los distintos puntos de cruce de cada vía.'
  },
  trampa:'No aplicar correctamente los puntos de decusación de cada vía para predecir el lado del déficit en una lesión medular lateral específica.',
  obj:'Aplicar el conocimiento de los puntos de decusación para interpretar el patrón de déficit en el síndrome de hemisección medular.',
  ref:'Snell, Neuroanatomía Clínica, cap. 5.',
  tags:['síndrome de hemisección medular','decusación','localización de lesión']
},
{
  id:'U9-NA-Q13', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Tronco encefálico y pares craneales', sub:'Centros vitales del bulbo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una lesión pequeña en el bulbo raquídeo puede tener consecuencias desproporcionadamente graves?',
  ops:[
    'Porque el bulbo contiene centros vitales como el centro respiratorio y el centro cardiovascular, además de ser el punto donde cruzan las fibras del haz corticoespinal',
    'El bulbo raquídeo no tiene ninguna función vital importante', 'El bulbo raquídeo es la estructura más grande y menos vulnerable del sistema nervioso central', 'Cualquier lesión en cualquier parte del cerebro tiene exactamente la misma gravedad potencial'],
  ok:0,
  clave:'El bulbo contiene centros vitales (respiratorio, cardiovascular) y es el punto de decusación del haz corticoespinal.',
  exp:'El bulbo raquídeo contiene centros vitales como el centro respiratorio y el centro cardiovascular, además de ser el punto donde cruzan (decusan) las fibras del haz corticoespinal. Por esta concentración de funciones vitales en un espacio anatómico relativamente pequeño, una lesión ahí, aunque sea pequeña, tiene un potencial de gravedad desproporcionado comparado con una lesión del mismo tamaño en otras partes del cerebro.',
  no:{
    1:'El bulbo raquídeo sí tiene funciones vitales centrales bien caracterizadas, como los centros respiratorio y cardiovascular.',
    2:'El bulbo raquídeo no es particularmente grande; es precisamente su tamaño relativamente pequeño combinado con la concentración de funciones vitales lo que explica su vulnerabilidad.',
    3:'Distintas partes del cerebro tienen distinta gravedad potencial ante una lesión del mismo tamaño, dependiendo de la concentración de funciones vitales en esa zona.'
  },
  trampa:'No reconocer la concentración específica de centros vitales en el bulbo raquídeo como la razón de su vulnerabilidad desproporcionada.',
  obj:'Explicar por qué una lesión pequeña en el bulbo raquídeo puede tener consecuencias desproporcionadamente graves.',
  ref:'Snell, Neuroanatomía Clínica, cap. 7.',
  tags:['bulbo raquídeo','centros vitales','vulnerabilidad anatómica']
},
{
  id:'U9-NA-Q14', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Tronco encefálico y pares craneales', sub:'Síndrome alterno o cruzado',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta déficit de un par craneal específico del lado derecho de la cara, junto con debilidad motora del lado izquierdo del cuerpo.',
  enunciado:'¿Qué tipo de lesión sugiere este patrón de síntomas, y por qué ocurre esta combinación específica?',
  ops:[
    'Una lesión del tronco encefálico (síndrome alterno o cruzado): el par craneal se afecta del lado de la lesión, mientras que las vías largas ya cruzadas afectan el lado contrario del cuerpo',
    'Una lesión exclusivamente del sistema nervioso periférico, sin relación con el tronco encefálico', 'Este patrón de síntomas no tiene ninguna explicación anatómica conocida', 'Una lesión de la corteza cerebral, sin relación con el tronco encefálico'],
  ok:0,
  clave:'Un síndrome alterno o cruzado sugiere lesión del tronco encefálico: par craneal afectado del lado de la lesión, cuerpo afectado del lado contrario (vías largas ya cruzadas).',
  exp:'Este patrón (déficit de par craneal de un lado, déficit motor/sensitivo del lado contrario del cuerpo) es el síndrome alterno o cruzado, característico de una lesión del tronco encefálico: el núcleo del par craneal se afecta del lado de la lesión (antes de que sus fibras crucen, si es que cruzan), mientras que las vías largas (que ya cruzaron en un nivel distinto) producen déficit del lado contrario del cuerpo -muy útil para localizar con precisión una lesión de tronco.',
  no:{
    1:'Este patrón específico (par craneal de un lado, cuerpo del lado contrario) es característico de una lesión de TRONCO ENCEFÁLICO, no del sistema nervioso periférico, que no produciría esta combinación específica.',
    2:'Este patrón sí tiene una explicación anatómica bien conocida: el síndrome alterno o cruzado por lesión del tronco encefálico.',
    3:'Una lesión de la corteza cerebral no produciría típicamente un déficit aislado de un par craneal específico combinado con déficit motor contralateral de esta forma característica del tronco.'
  },
  trampa:'No reconocer el patrón específico del síndrome alterno o cruzado como indicador de una lesión de tronco encefálico.',
  obj:'Identificar el síndrome alterno o cruzado como indicador de lesión del tronco encefálico.',
  ref:'Snell, Neuroanatomía Clínica, cap. 7.',
  tags:['síndrome alterno','tronco encefálico','pares craneales','localización de lesión']
},
{
  id:'U9-NA-Q15', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Tronco encefálico y pares craneales', sub:'Distribución de núcleos de pares craneales',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se distribuyen los núcleos de los pares craneales relacionados con el movimiento ocular frente a los relacionados con la deglución y la función cardiorrespiratoria?',
  ops:[
    'Los relacionados con el movimiento ocular están más arriba, en el mesencéfalo; los relacionados con la deglución y la función cardiorrespiratoria están más abajo, en el bulbo',
    'Todos los núcleos de pares craneales se ubican exactamente en el mismo segmento del tronco encefálico', 'Los relacionados con la deglución están en el mesencéfalo, y los del movimiento ocular en el bulbo', 'Los núcleos de pares craneales no tienen ninguna distribución específica dentro del tronco encefálico'],
  ok:0,
  clave:'Los núcleos relacionados con movimiento ocular están en el mesencéfalo (arriba); los de deglución/función cardiorrespiratoria están en el bulbo (abajo).',
  exp:'Los núcleos de par craneal se ubican dentro del tronco encefálico, distribuidos entre sus tres segmentos según cuál par craneal corresponda: los núcleos relacionados con el movimiento ocular están más arriba, en el mesencéfalo, mientras que los relacionados con la deglución y la función cardiorrespiratoria están más abajo, en el bulbo.',
  no:{
    1:'Los núcleos de pares craneales se distribuyen en los TRES segmentos del tronco (bulbo, protuberancia, mesencéfalo), no en un único segmento.',
    2:'Está invertido: el movimiento ocular corresponde al mesencéfalo (arriba), y la deglución al bulbo (abajo), no al contrario.',
    3:'Los núcleos de pares craneales sí tienen una distribución específica y predecible según el segmento del tronco encefálico.'
  },
  trampa:'Invertir la distribución de los núcleos (movimiento ocular arriba en mesencéfalo, deglución/cardiorrespiratorio abajo en bulbo).',
  obj:'Explicar la distribución de los núcleos de pares craneales según el segmento del tronco encefálico.',
  ref:'Snell, Neuroanatomía Clínica, cap. 7.',
  tags:['núcleos de pares craneales','mesencéfalo','bulbo raquídeo']
},
{
  id:'U9-NA-Q16', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Cerebelo', sub:'Función coordinadora, no iniciadora',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se dice que el cerebelo "no inicia el movimiento, lo ajusta"?',
  ops:[
    'Porque compara la propiocepción con las órdenes motoras de la corteza cerebral, corrigiendo fuerza, dirección y momento de la contracción muscular en tiempo real, sin ser el origen de la orden de movimiento',
    'El cerebelo es, de hecho, el origen principal de todas las órdenes de movimiento voluntario', 'El cerebelo no tiene ninguna relación con el movimiento del cuerpo', 'El cerebelo solo actúa después de que el movimiento ya terminó por completo'],
  ok:0,
  clave:'El cerebelo compara propiocepción con órdenes motoras corticales, ajustando en tiempo real la ejecución, sin originar la orden de movimiento.',
  exp:'El cerebelo recibe información constante sobre la posición del cuerpo (propiocepción) y sobre las órdenes motoras que la corteza cerebral está enviando, comparando ambas para ajustar el movimiento en tiempo real: corrige la fuerza, la dirección y el momento exacto de la contracción muscular. No inicia el movimiento por sí mismo: eso lo hace la corteza motora.',
  no:{
    1:'El origen de la orden de movimiento voluntario es la corteza motora, no el cerebelo, que actúa ajustando la ejecución.',
    2:'El cerebelo tiene una relación central y directa con el movimiento, específicamente con su coordinación y ajuste fino.',
    3:'El cerebelo actúa EN TIEMPO REAL, ajustando el movimiento mientras ocurre, no exclusivamente después de que ya terminó.'
  },
  trampa:'Confundir el papel del cerebelo (coordinador en tiempo real) con el de la corteza motora (iniciadora del movimiento).',
  obj:'Explicar el papel coordinador del cerebelo, distinto del papel iniciador de la corteza motora.',
  ref:'Snell, Neuroanatomía Clínica, cap. 8.',
  tags:['cerebelo','coordinación motora','propiocepción']
},
{
  id:'U9-NA-Q17', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Cerebelo', sub:'Dismetría',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Al pedirle a un paciente que se toque la punta de la nariz con el dedo índice, el movimiento se pasa de largo repetidamente, sin llegar a la posición exacta.',
  enunciado:'¿Qué signo describe este hallazgo, y a qué estructura apunta?',
  ops:[
    'Dismetría, un signo específico de disfunción cerebelosa por falta del ajuste fino del movimiento', 'Signo de Babinski, indicando lesión de la vía piramidal', 'Signo de Tinel, indicando compresión de un nervio periférico', 'Signo de rebote, indicando irritación peritoneal'],
  ok:0,
  clave:'La dismetría (el movimiento se pasa de largo o se queda corto) es un signo específico de disfunción cerebelosa.',
  exp:'La dismetría es un signo específico de falta de coordinación cerebelosa: al intentar tocar un objetivo (por ejemplo, llevar el dedo hasta la nariz), el movimiento se pasa de largo o se queda corto, porque falta el ajuste fino que normalmente aporta el cerebelo -exactamente el hallazgo descrito en este caso.',
  no:{
    1:'El signo de Babinski se explora estimulando la planta del pie, sin relación con la maniobra dedo-nariz descrita aquí.',
    2:'El signo de Tinel se explora percutiendo sobre el trayecto de un nervio periférico, sin relación con la coordinación cerebelosa.',
    3:'El signo de rebote se explora en el abdomen, evaluando irritación peritoneal, sin ninguna relación con la coordinación motora cerebelosa.'
  },
  trampa:'Confundir la dismetría con otros signos semiológicos que se exploran de forma distinta y evalúan estructuras diferentes.',
  obj:'Identificar la dismetría como signo de disfunción cerebelosa a partir de la maniobra dedo-nariz.',
  ref:'Snell, Neuroanatomía Clínica, cap. 8.',
  tags:['dismetría','cerebelo','coordinación']
},
{
  id:'U9-NA-Q18', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Cerebelo', sub:'Ataxia sin debilidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es clínicamente importante distinguir la ataxia cerebelosa (descoordinación sin debilidad) de una debilidad por lesión de la vía motora?',
  ops:[
    'Porque apuntan a estructuras completamente diferentes (cerebelo frente a vía corticoespinal), y confundirlas llevaría a buscar la lesión en el lugar equivocado',
    'La ataxia y la debilidad muscular son exactamente el mismo hallazgo clínico', 'No existe ninguna diferencia clínica relevante entre ambos cuadros', 'La ataxia cerebelosa siempre se acompaña de debilidad muscular marcada'],
  ok:0,
  clave:'Apuntan a estructuras diferentes (cerebelo vs. vía corticoespinal); confundirlas lleva a buscar la lesión en el lugar equivocado.',
  exp:'Una lesión de la vía motora (corticoespinal) produce debilidad; una lesión cerebelosa produce descoordinación SIN debilidad -dos cuadros clínicos muy distintos que comparten la palabra "movimiento anormal" pero que apuntan a estructuras completamente diferentes. Distinguirlos correctamente es esencial para localizar la lesión en el lugar anatómico correcto.',
  no:{
    1:'Son hallazgos clínicos claramente distintos: descoordinación sin pérdida de fuerza, frente a debilidad muscular real.',
    2:'Sí existe una diferencia clínica relevante y bien establecida entre ambos cuadros, precisamente por apuntar a estructuras distintas.',
    3:'La ataxia cerebelosa característicamente NO se acompaña de debilidad muscular; el músculo conserva su fuerza, solo pierde coordinación.'
  },
  trampa:'Confundir la ataxia cerebelosa (sin debilidad) con la debilidad por lesión de vía motora, llevando a una localización incorrecta de la lesión.',
  obj:'Explicar la importancia de distinguir la ataxia cerebelosa de la debilidad por lesión de vía motora.',
  ref:'Snell, Neuroanatomía Clínica, cap. 8.',
  tags:['ataxia','debilidad muscular','localización de lesión']
},
{
  id:'U9-NA-Q19', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Ganglios basales y control motor', sub:'Función de los ganglios basales',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la función general de los ganglios basales en el control motor?',
  ops:[
    'Forman un circuito con la corteza motora que participa en iniciar movimientos deseados y suprimir movimientos no deseados',
    'Ajustan la precisión del movimiento en tiempo real, igual que el cerebelo', 'Los ganglios basales no tienen ninguna relación con el control motor', 'Los ganglios basales son la vía motora principal, reemplazando al haz corticoespinal'],
  ok:0,
  clave:'Los ganglios basales forman un circuito que inicia movimientos deseados y suprime los no deseados.',
  exp:'Los ganglios basales son un grupo de núcleos profundos del cerebro que forman un circuito con la corteza motora, participando en iniciar movimientos deseados y suprimir movimientos no deseados -una función distinta y complementaria a la del cerebelo, que ajusta la precisión del movimiento ya en marcha.',
  no:{
    1:'Ajustar la precisión del movimiento en tiempo real es función del CEREBELO, no de los ganglios basales, que tienen una función distinta (iniciar/suprimir).',
    2:'Los ganglios basales tienen una relación central y bien caracterizada con el control motor.',
    3:'Los ganglios basales no son la vía motora principal (esa es el haz corticoespinal); son un circuito regulador que actúa sobre esa vía.'
  },
  trampa:'Confundir la función de los ganglios basales (iniciar/suprimir movimiento) con la del cerebelo (ajustar la precisión en tiempo real).',
  obj:'Explicar la función general de los ganglios basales en el control motor.',
  ref:'Snell, Neuroanatomía Clínica, cap. 11.',
  tags:['ganglios basales','control motor','corteza motora']
},
{
  id:'U9-NA-Q20', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Ganglios basales y control motor', sub:'Enfermedad de Parkinson',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta lentitud de movimiento, rigidez muscular y temblor característico en reposo.',
  enunciado:'¿Qué mecanismo neuroanatómico explica este cuadro clínico?',
  ops:[
    'Pérdida progresiva de neuronas dopaminérgicas de la sustancia negra, que desequilibra el circuito de los ganglios basales hacia la INHIBICIÓN del movimiento',
    'Un exceso de neuronas dopaminérgicas en la sustancia negra', 'Una lesión aislada del cerebelo, sin relación con los ganglios basales', 'Este cuadro clínico no tiene ninguna explicación neuroanatómica conocida'],
  ok:0,
  clave:'La pérdida de neuronas dopaminérgicas de la sustancia negra desequilibra el circuito de ganglios basales hacia la inhibición del movimiento (Parkinson).',
  exp:'Cuando la sustancia negra pierde progresivamente sus neuronas dopaminérgicas, el circuito de los ganglios basales pierde su equilibrio hacia el lado de la INHIBICIÓN del movimiento, produciendo el cuadro clásico de la enfermedad de Parkinson: lentitud de movimiento, rigidez muscular y temblor característico en reposo -el circuito, sin suficiente dopamina, frena más de lo debido el inicio y la ejecución del movimiento voluntario.',
  no:{
    1:'Es precisamente lo contrario: el Parkinson se debe a una PÉRDIDA (no exceso) de neuronas dopaminérgicas de la sustancia negra.',
    2:'Este cuadro se explica por una disfunción de los ganglios basales (sustancia negra), no del cerebelo, cuyas lesiones producen ataxia y dismetría, no este patrón.',
    3:'Este cuadro clínico sí tiene una explicación neuroanatómica bien establecida: la pérdida de neuronas dopaminérgicas de la sustancia negra.'
  },
  trampa:'Invertir el mecanismo (pérdida frente a exceso de dopamina) o confundir la estructura afectada (ganglios basales frente a cerebelo) en el Parkinson.',
  obj:'Explicar el mecanismo neuroanatómico de la enfermedad de Parkinson.',
  ref:'Snell, Neuroanatomía Clínica, cap. 11.',
  tags:['enfermedad de Parkinson','sustancia negra','dopamina']
},
{
  id:'U9-NA-Q21', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Ganglios basales y control motor', sub:'Movimiento involuntario excesivo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ocurre en el circuito de los ganglios basales cuando se produce movimiento involuntario excesivo, como en la enfermedad de Huntington?',
  ops:[
    'El circuito pierde su capacidad de SUPRIMIR movimientos no deseados', 'El circuito gana una capacidad excesiva de suprimir todos los movimientos', 'Este cuadro no tiene ninguna relación con los ganglios basales', 'Ocurre exactamente el mismo mecanismo que en la enfermedad de Parkinson'],
  ok:0,
  clave:'En el movimiento involuntario excesivo, el circuito de ganglios basales pierde su capacidad de suprimir movimientos no deseados.',
  exp:'Otras enfermedades de los ganglios basales, como la enfermedad de Huntington, producen el efecto contrario al Parkinson: movimiento involuntario excesivo, cuando el circuito pierde su capacidad de SUPRIMIR movimientos no deseados -un desequilibrio opuesto al que ocurre en el Parkinson, donde el circuito inhibe en exceso el movimiento.',
  no:{
    1:'Es precisamente lo contrario: el circuito PIERDE (no gana) su capacidad de suprimir movimientos, resultando en exceso de movimiento involuntario.',
    2:'El movimiento involuntario excesivo (como en Huntington) sí tiene una relación directa con una disfunción del circuito de los ganglios basales.',
    3:'El mecanismo es OPUESTO al del Parkinson: mientras el Parkinson inhibe en exceso el movimiento, el Huntington produce exceso de movimiento por pérdida de la capacidad de suprimir.'
  },
  trampa:'Confundir el mecanismo del movimiento involuntario excesivo (pérdida de supresión) con el del Parkinson (exceso de inhibición), o invertir la dirección del desequilibrio.',
  obj:'Explicar el mecanismo del movimiento involuntario excesivo por disfunción de los ganglios basales.',
  ref:'Snell, Neuroanatomía Clínica, cap. 11.',
  tags:['movimiento involuntario','enfermedad de Huntington','ganglios basales']
},
{
  id:'U9-NA-Q22', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Ganglios basales y control motor', sub:'Fármacos dopaminérgicos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el fundamento neuroanatómico de usar fármacos dopaminérgicos en el tratamiento del Parkinson?',
  ops:[
    'Reponen la señal de dopamina que la sustancia negra dejó de producir, ayudando a reequilibrar el circuito de los ganglios basales hacia una menor inhibición del movimiento',
    'Los fármacos dopaminérgicos no tienen ninguna relación con el mecanismo del Parkinson', 'Buscan aumentar aún más la inhibición del movimiento ya presente en el Parkinson', 'Actúan directamente sobre el cerebelo, sin ninguna relación con los ganglios basales'],
  ok:0,
  clave:'Los fármacos dopaminérgicos reponen la dopamina que la sustancia negra dejó de producir, reequilibrando el circuito hacia menor inhibición.',
  exp:'Los fármacos dopaminérgicos usados en el Parkinson actúan, precisamente, reponiendo la señal de dopamina que la sustancia negra dejó de producir, ayudando a reequilibrar el circuito de los ganglios basales -que, sin suficiente dopamina, se había desviado hacia la inhibición excesiva del movimiento.',
  no:{
    1:'Los fármacos dopaminérgicos tienen un fundamento directo y bien establecido, relacionado precisamente con el mecanismo del Parkinson.',
    2:'Buscan REDUCIR (no aumentar) la inhibición excesiva del movimiento, reponiendo la dopamina faltante.',
    3:'Actúan sobre el circuito de los ganglios basales (reponiendo dopamina de la sustancia negra), no sobre el cerebelo.'
  },
  trampa:'No conectar el fundamento farmacológico del tratamiento dopaminérgico con el mecanismo fisiopatológico específico del Parkinson (déficit de dopamina de la sustancia negra).',
  obj:'Explicar el fundamento neuroanatómico del uso de fármacos dopaminérgicos en el Parkinson.',
  ref:'Snell, Neuroanatomía Clínica, cap. 11.',
  tags:['fármacos dopaminérgicos','sustancia negra','Parkinson']
},
{
  id:'U9-NA-Q23', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Tálamo e hipotálamo', sub:'Función del tálamo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se describe al tálamo como "la puerta de entrada hacia la corteza"?',
  ops:[
    'Porque prácticamente toda la información sensitiva que sube hacia la corteza cerebral (con la excepción del olfato) hace sinapsis en el tálamo antes de continuar hacia su destino cortical final',
    'El tálamo no tiene ninguna relación con la información sensitiva', 'El tálamo es la estructura que regula la temperatura corporal y el hambre', 'Toda la información sensitiva, incluido el olfato, pasa obligatoriamente por el tálamo'],
  ok:0,
  clave:'Casi toda la información sensitiva (excepto olfato) hace sinapsis en el tálamo antes de llegar a la corteza.',
  exp:'El tálamo es la principal estación de relevo sensitivo del cerebro: prácticamente toda la información sensitiva que sube hacia la corteza cerebral (con la notable excepción del olfato) hace sinapsis en el tálamo antes de continuar hacia su destino cortical final.',
  no:{
    1:'El tálamo tiene una relación central y directa con la información sensitiva, siendo su principal estación de relevo.',
    2:'Regular la temperatura corporal y el hambre es función del HIPOTÁLAMO, no del tálamo.',
    3:'El olfato es precisamente la excepción notable que NO pasa por el tálamo antes de llegar a la corteza, a diferencia de las demás modalidades sensitivas.'
  },
  trampa:'No recordar la excepción del olfato en el papel del tálamo como estación de relevo sensitivo, o confundir sus funciones con las del hipotálamo.',
  obj:'Explicar el papel del tálamo como estación de relevo sensitivo, incluyendo la excepción del olfato.',
  ref:'Snell, Neuroanatomía Clínica, cap. 10.',
  tags:['tálamo','relevo sensitivo','olfato']
},
{
  id:'U9-NA-Q24', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Tálamo e hipotálamo', sub:'Funciones del hipotálamo',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué funciones regula el hipotálamo como centro de control homeostático?',
  ops:[
    'Temperatura corporal, hambre y saciedad, sed, ritmos circadianos, y a través del eje hipotálamo-hipófisis, buena parte del sistema endocrino',
    'Exclusivamente el procesamiento consciente de la información sensitiva', 'Únicamente el movimiento voluntario, sin ninguna otra función', 'El hipotálamo no tiene ninguna función reguladora conocida'],
  ok:0,
  clave:'El hipotálamo regula temperatura, hambre/saciedad, sed, ritmos circadianos, y a través del eje hipotálamo-hipófisis, el sistema endocrino.',
  exp:'El hipotálamo es el centro regulador de la homeostasis: controla la temperatura corporal, el hambre y la saciedad, la sed, los ritmos circadianos de sueño y vigilia, y -a través del eje hipotálamo-hipófisis- buena parte del sistema endocrino completo. También integra el sistema nervioso con el sistema nervioso autónomo.',
  no:{
    1:'El procesamiento consciente de información sensitiva es función del TÁLAMO, no del hipotálamo, que regula funciones inconscientes.',
    2:'El movimiento voluntario no es función del hipotálamo; corresponde a la vía piramidal y estructuras relacionadas con el control motor.',
    3:'El hipotálamo sí tiene múltiples funciones reguladoras bien caracterizadas, centrales para la homeostasis del cuerpo.'
  },
  trampa:'Confundir las funciones del hipotálamo (homeostasis inconsciente) con las del tálamo (procesamiento consciente) o con el control motor.',
  obj:'Recordar las principales funciones homeostáticas del hipotálamo.',
  ref:'Snell, Neuroanatomía Clínica, cap. 10.',
  tags:['hipotálamo','homeostasis','eje hipotálamo-hipófisis']
},
{
  id:'U9-NA-Q25', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Tálamo e hipotálamo', sub:'Consciente vs. inconsciente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es un error frecuente confundir al tálamo con el hipotálamo, más allá de su nombre parecido?',
  ops:[
    'Porque, pese a ser vecinos anatómicos, tienen funciones casi opuestas: el tálamo procesa información CONSCIENTE hacia la corteza, y el hipotálamo regula funciones en gran parte INCONSCIENTES y automáticas',
    'El tálamo y el hipotálamo tienen exactamente la misma función, así que la confusión no representa ningún error real', 'Ambas estructuras están ubicadas en polos opuestos del cerebro, sin ninguna relación anatómica', 'El hipotálamo procesa información consciente, y el tálamo regula funciones inconscientes'],
  ok:0,
  clave:'Pese a ser vecinos anatómicos, tienen funciones casi opuestas: tálamo (consciente, hacia la corteza) e hipotálamo (inconsciente, automático).',
  exp:'Aunque son vecinos anatómicos y su nombre se parece, el tálamo procesa información CONSCIENTE que va hacia la corteza; el hipotálamo regula funciones en gran parte INCONSCIENTES y automáticas del cuerpo. Confundirlos por el nombre parecido es un error frecuente al empezar a estudiar el tema, precisamente porque sus funciones son casi opuestas pese a su cercanía anatómica.',
  no:{
    1:'Tienen funciones claramente distintas (y casi opuestas), no la misma función; confundirlos sí representa un error conceptual real.',
    2:'Son vecinos anatómicos cercanos (el hipotálamo está justo debajo del tálamo), no estructuras en polos opuestos del cerebro.',
    3:'Está invertido: el TÁLAMO procesa información consciente, y el HIPOTÁLAMO regula funciones inconscientes, no al revés.'
  },
  trampa:'Invertir las funciones del tálamo (consciente) y el hipotálamo (inconsciente), o subestimar el riesgo real de confundirlos por su nombre parecido y cercanía anatómica.',
  obj:'Explicar por qué el tálamo y el hipotálamo, pese a su cercanía anatómica, tienen funciones casi opuestas.',
  ref:'Snell, Neuroanatomía Clínica, cap. 10.',
  tags:['tálamo','hipotálamo','procesamiento consciente']
},
{
  id:'U9-NA-Q26', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Tálamo e hipotálamo', sub:'Integración sistema nervioso-autónomo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué papel cumple el hipotálamo en relación con el sistema nervioso autónomo?',
  ops:[
    'Es el punto de integración entre el sistema nervioso y el sistema nervioso autónomo, coordinando respuestas simpáticas y parasimpáticas según las necesidades del cuerpo',
    'El hipotálamo no tiene ninguna relación con el sistema nervioso autónomo', 'El hipotálamo es parte del sistema nervioso periférico, no del sistema nervioso central', 'El hipotálamo solo puede activar el sistema simpático, nunca el parasimpático'],
  ok:0,
  clave:'El hipotálamo integra el sistema nervioso con el autónomo, coordinando respuestas simpáticas y parasimpáticas.',
  exp:'El hipotálamo es el punto de integración entre el sistema nervioso y el sistema nervioso autónomo, coordinando respuestas simpáticas y parasimpáticas según las necesidades del cuerpo en cada momento -una función central que conecta su papel homeostático con la regulación autonómica del cuerpo.',
  no:{
    1:'El hipotálamo tiene una relación central y directa con el sistema nervioso autónomo, siendo su punto de integración principal.',
    2:'El hipotálamo es parte del sistema nervioso CENTRAL (dentro del encéfalo), no del periférico.',
    3:'El hipotálamo puede coordinar tanto respuestas simpáticas como parasimpáticas, según las necesidades del cuerpo en cada momento.'
  },
  trampa:'Subestimar el papel integrador del hipotálamo entre el sistema nervioso central y el autónomo, o limitar incorrectamente su función a solo una rama autonómica.',
  obj:'Explicar el papel del hipotálamo como punto de integración con el sistema nervioso autónomo.',
  ref:'Snell, Neuroanatomía Clínica, cap. 10.',
  tags:['hipotálamo','sistema nervioso autónomo','simpático y parasimpático']
}

]);
