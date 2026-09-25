/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE NEUROANATOMIA (2/2)
   Completa la ampliacion de Neuroanatomia a 50 preguntas junto
   con unirm-09-banco-8.js. Esta parte cubre corteza cerebral,
   irrigacion cerebral, vias sensitivas y motoras, sistema
   limbico, LCR/sistema ventricular y meninges (temas 7-12).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== NEUROANATOMIA ===================== */
{
  id:'U9-NA-Q27', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Corteza cerebral: áreas funcionales', sub:'Homúnculo motor',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la representación de la mano y la cara en la corteza motora es desproporcionadamente grande respecto al resto del cuerpo?',
  ops:[
    'Porque la corteza motora está organizada como un mapa del cuerpo (homúnculo motor), con mayor representación para las partes capaces de movimientos finos',
    'La representación cortical es exactamente proporcional al tamaño físico de cada parte del cuerpo', 'La mano y la cara no tienen ninguna representación específica en la corteza motora', 'Todas las partes del cuerpo tienen exactamente la misma representación cortical'],
  ok:0,
  clave:'La corteza motora está organizada como homúnculo, con mayor representación para partes capaces de movimientos finos (mano, cara).',
  exp:'La corteza motora está organizada como un mapa del cuerpo (homúnculo motor): distintas regiones de esta corteza controlan distintas partes del cuerpo, con una representación desproporcionadamente grande para las partes capaces de movimientos finos (la mano, la cara), reflejando la complejidad y precisión de control motor que esas zonas requieren.',
  no:{
    1:'La representación cortical NO es proporcional al tamaño físico; es proporcional a la complejidad y precisión del control motor requerido, por eso mano y cara tienen representación desproporcionada.',
    2:'La mano y la cara sí tienen una representación específica y particularmente grande dentro del homúnculo motor.',
    3:'La representación cortical varía considerablemente entre partes del cuerpo, no es uniforme.'
  },
  trampa:'Asumir que la representación cortical es proporcional al tamaño físico de cada parte del cuerpo, en vez de a la complejidad del control motor requerido.',
  obj:'Explicar por qué la mano y la cara tienen representación desproporcionadamente grande en el homúnculo motor.',
  ref:'Snell, Neuroanatomía Clínica, cap. 9.',
  tags:['homúnculo motor','corteza motora','representación cortical']
},
{
  id:'U9-NA-Q28', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Corteza cerebral: áreas funcionales', sub:'Afasia de Broca',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente entiende perfectamente lo que se le dice, pero habla con mucho esfuerzo, de forma entrecortada y gramaticalmente simplificada.',
  enunciado:'¿Qué área cortical está probablemente lesionada, y cómo se llama este tipo de afasia?',
  ops:[
    'Área de Broca, produciendo una afasia NO fluente (comprensión conservada, producción del lenguaje afectada)', 'Área de Wernicke, produciendo una afasia fluente', 'La corteza motora primaria, sin relación con el lenguaje', 'El cerebelo, produciendo un trastorno del habla por descoordinación'],
  ok:0,
  clave:'El área de Broca lesionada produce afasia no fluente: comprensión conservada, producción del lenguaje afectada (habla entrecortada, con esfuerzo).',
  exp:'El área de Broca es responsable de la PRODUCCIÓN del lenguaje: su lesión produce una afasia donde la persona entiende bien lo que se le dice, pero habla con mucho esfuerzo, de forma entrecortada y gramaticalmente simplificada (afasia no fluente) -exactamente el cuadro descrito en este caso.',
  no:{
    1:'La lesión del área de Wernicke produce el patrón OPUESTO: habla fluida pero sin sentido, y comprensión afectada, no el patrón descrito en este caso.',
    2:'La corteza motora primaria controla el movimiento voluntario del cuerpo, no específicamente la producción del lenguaje de esta forma característica.',
    3:'Una lesión cerebelosa produciría descoordinación del habla (disartria), un trastorno mecánico del habla, no una afasia con las características lingüísticas específicas descritas.'
  },
  trampa:'Confundir la afasia de Broca (no fluente, comprensión conservada) con la de Wernicke (fluente, comprensión afectada), o con otros trastornos del habla no afásicos.',
  obj:'Identificar la afasia de Broca a partir de un cuadro clínico característico.',
  ref:'Snell, Neuroanatomía Clínica, cap. 9.',
  tags:['área de Broca','afasia no fluente','producción del lenguaje']
},
{
  id:'U9-NA-Q29', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Corteza cerebral: áreas funcionales', sub:'Afasia de Wernicke',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente habla con fluidez normal e incluso rapidez, pero el contenido de lo que dice no tiene sentido, y además no logra comprender bien lo que se le dice.',
  enunciado:'¿Qué área cortical está probablemente lesionada, y cómo se llama este tipo de afasia?',
  ops:[
    'Área de Wernicke, produciendo una afasia fluente (producción conservada en fluidez, pero sin sentido, y comprensión afectada)', 'Área de Broca, produciendo una afasia no fluente', 'La corteza somatosensorial, sin relación con el lenguaje', 'El tálamo, sin ninguna relación con el procesamiento del lenguaje'],
  ok:0,
  clave:'El área de Wernicke lesionada produce afasia fluente: habla con fluidez pero sin sentido, y comprensión afectada.',
  exp:'El área de Wernicke es responsable de la COMPRENSIÓN del lenguaje: su lesión produce una afasia donde la persona habla con fluidez normal e incluso rapidez, pero el contenido no tiene sentido, y además no logra comprender bien lo que se le dice (afasia fluente) -exactamente el cuadro descrito en este caso.',
  no:{
    1:'La lesión del área de Broca produce el patrón OPUESTO: habla entrecortada y con esfuerzo, pero comprensión conservada, no el patrón descrito en este caso.',
    2:'La corteza somatosensorial procesa información sensitiva del cuerpo, no específicamente la comprensión del lenguaje de esta forma característica.',
    3:'El tálamo participa en el relevo de información sensitiva en general, pero el área de Wernicke (en el lóbulo temporal) es la estructura específicamente responsable de la comprensión del lenguaje en este cuadro.'
  },
  trampa:'Confundir la afasia de Wernicke (fluente, comprensión afectada) con la de Broca (no fluente, comprensión conservada).',
  obj:'Identificar la afasia de Wernicke a partir de un cuadro clínico característico.',
  ref:'Snell, Neuroanatomía Clínica, cap. 9.',
  tags:['área de Wernicke','afasia fluente','comprensión del lenguaje']
},
{
  id:'U9-NA-Q30', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Corteza cerebral: áreas funcionales', sub:'Corteza somatosensorial',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Dónde se ubica la corteza somatosensorial, y qué tipo de información recibe?',
  ops:['En el lóbulo parietal, recibe la información sensitiva que llegó primero al tálamo', 'En el lóbulo occipital, recibe exclusivamente información visual', 'En el lóbulo frontal, es responsable del movimiento voluntario', 'La corteza somatosensorial no tiene una ubicación anatómica específica'],
  ok:0,
  clave:'La corteza somatosensorial se ubica en el lóbulo parietal y recibe la información sensitiva que ya pasó por el tálamo.',
  exp:'La corteza somatosensorial (en el lóbulo parietal, justo detrás de la corteza motora) recibe la información sensitiva que llegó primero al tálamo, también organizada como un mapa del cuerpo, con desproporción a favor de las zonas con mayor densidad de receptores sensitivos.',
  no:{
    1:'La información visual se procesa principalmente en el lóbulo occipital (corteza visual), no en la corteza somatosensorial.',
    2:'El movimiento voluntario corresponde a la corteza MOTORA (lóbulo frontal), no a la somatosensorial (lóbulo parietal).',
    3:'La corteza somatosensorial sí tiene una ubicación anatómica específica y bien definida: el lóbulo parietal.'
  },
  trampa:'Confundir la ubicación y función de la corteza somatosensorial con la de otras áreas corticales (visual, motora).',
  obj:'Identificar la ubicación y función de la corteza somatosensorial.',
  ref:'Snell, Neuroanatomía Clínica, cap. 9.',
  tags:['corteza somatosensorial','lóbulo parietal','tálamo']
},
{
  id:'U9-NA-Q31', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Corteza cerebral: áreas funcionales', sub:'Especialización cortical',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué demuestra históricamente el hallazgo de dos pacientes con lesiones en dos áreas del lenguaje distintas, con problemas de lenguaje completamente distintos entre sí?',
  ops:[
    'Que la corteza cerebral tiene áreas especializadas y bien localizadas, no funciona como una masa uniforme donde "todo se procesa en todas partes"', 'Que la corteza cerebral procesa toda la información de forma idéntica en cualquier zona', 'Este hallazgo no aporta ninguna evidencia sobre la organización funcional de la corteza', 'Que el lenguaje se procesa exclusivamente en un solo punto anatómico, sin ninguna diferenciación interna'],
  ok:0,
  clave:'Demuestra que la corteza tiene áreas especializadas y bien localizadas, no una función uniforme en toda su extensión.',
  exp:'El caso clásico de dos pacientes con lesiones en dos áreas del lenguaje distintas (Broca y Wernicke), con problemas de lenguaje completamente distintos entre sí (no fluente frente a fluente), es la mejor prueba histórica de que la corteza cerebral tiene áreas especializadas y bien localizadas, no funciona como una masa uniforme donde "todo se procesa en todas partes".',
  no:{
    1:'Es precisamente lo contrario: este hallazgo demuestra que la corteza NO procesa la información de forma idéntica en cualquier zona, sino de forma especializada.',
    2:'Este hallazgo sí aporta evidencia histórica central sobre la organización funcional especializada de la corteza cerebral.',
    3:'El lenguaje se procesa en AL MENOS dos áreas distintas con funciones diferenciadas (producción y comprensión), no en un solo punto uniforme.'
  },
  trampa:'No reconocer la evidencia histórica que aporta el contraste Broca-Wernicke sobre la especialización funcional de la corteza cerebral.',
  obj:'Explicar qué demuestra el contraste Broca-Wernicke sobre la especialización funcional de la corteza cerebral.',
  ref:'Snell, Neuroanatomía Clínica, cap. 9.',
  tags:['especialización cortical','área de Broca','área de Wernicke']
},
{
  id:'U9-NA-Q32', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Irrigación cerebral', sub:'Función del polígono de Willis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple el polígono de Willis?',
  ops:[
    'Ofrece rutas alternativas de circulación si una de las arterias principales que irrigan el cerebro se obstruye', 'Es la única arteria que irriga todo el cerebro, sin ninguna alternativa', 'El polígono de Willis no tiene ninguna función circulatoria real', 'Solo funciona durante el desarrollo embrionario, sin relevancia en el adulto'],
  ok:0,
  clave:'El polígono de Willis ofrece rutas alternativas de circulación si una arteria principal se obstruye.',
  exp:'Las carótidas internas y las vertebrales se conectan entre sí en la base del cerebro formando el polígono de Willis: una red de anastomosis que ofrece rutas alternativas de circulación si una de las arterias principales se obstruye, similar en su lógica protectora a las anastomosis periarticulares de los miembros.',
  no:{
    1:'El polígono de Willis es una RED de conexiones entre múltiples arterias, no una arteria única sin alternativas.',
    2:'El polígono de Willis tiene una función circulatoria protectora real y bien establecida.',
    3:'El polígono de Willis es una estructura funcional relevante durante toda la vida del adulto, no exclusivamente durante el desarrollo embrionario.'
  },
  trampa:'Subestimar la función protectora del polígono de Willis como red de anastomosis que ofrece rutas alternativas ante una obstrucción.',
  obj:'Explicar la función del polígono de Willis como red de seguridad circulatoria.',
  ref:'Snell, Neuroanatomía Clínica, cap. 12.',
  tags:['polígono de Willis','anastomosis','circulación cerebral']
},
{
  id:'U9-NA-Q33', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Irrigación cerebral', sub:'Territorio de la arteria cerebral media',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta un ictus con debilidad y pérdida de sensibilidad predominantemente de la cara y el brazo (más que de la pierna) del lado izquierdo del cuerpo, junto con afasia.',
  enunciado:'¿Qué arteria probablemente se obstruyó, del lado derecho del cerebro?',
  ops:[
    'La arteria cerebral media, que irriga la mayor parte de la superficie lateral del cerebro, incluida la representación de cara y brazo, y las áreas del lenguaje en el hemisferio dominante',
    'La arteria cerebral anterior, que irriga predominantemente la representación de la pierna', 'Ninguna arteria específica puede asociarse con este patrón de síntomas', 'La arteria vertebral, que irriga el cerebelo y el tronco encefálico'],
  ok:0,
  clave:'La arteria cerebral media irriga cara/brazo y, en el hemisferio dominante, las áreas del lenguaje -el patrón descrito es consistente con su obstrucción.',
  exp:'La arteria cerebral media, la rama más grande de la carótida interna, irriga la mayor parte de la superficie lateral del cerebro, incluida buena parte de la corteza motora y somatosensorial (la representación de la cara y el brazo, sobre todo) y, en el hemisferio dominante, las áreas de Broca y Wernicke -es, con diferencia, la arteria más frecuentemente involucrada en un ictus isquémico, y el patrón descrito (cara/brazo más que pierna, afasia) es consistente con su territorio.',
  no:{
    1:'La arteria cerebral anterior irriga predominantemente la representación de la PIERNA, un patrón distinto al descrito en este caso (predominio de cara/brazo).',
    2:'Este patrón de síntomas sí puede asociarse con una arteria específica, precisamente la cerebral media, según su territorio vascular conocido.',
    3:'La arteria vertebral irriga el cerebelo y el tronco encefálico, estructuras distintas de la corteza cerebral lateral afectada en este caso.'
  },
  trampa:'Confundir el territorio de la arteria cerebral media (cara/brazo, lenguaje) con el de la arteria cerebral anterior (pierna) u otras arterias.',
  obj:'Identificar la arteria cerebral media como responsable de un patrón clínico específico de ictus.',
  ref:'Snell, Neuroanatomía Clínica, cap. 12.',
  tags:['arteria cerebral media','territorio vascular','ictus']
},
{
  id:'U9-NA-Q34', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Irrigación cerebral', sub:'Predicción clínica del territorio afectado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué reconocer el patrón de síntomas de un ictus permite estimar qué territorio vascular está comprometido, incluso antes de un estudio de imagen?',
  ops:[
    'Porque cada territorio vascular del cerebro se asocia con un patrón de déficit predecible según qué estructuras irriga esa arteria específica',
    'Los síntomas de un ictus nunca tienen relación con el territorio vascular afectado', 'Todas las arterias cerebrales irrigan exactamente las mismas estructuras, sin ninguna diferencia territorial', 'Solo un estudio de imagen puede aportar información sobre qué territorio vascular está comprometido'],
  ok:0,
  clave:'Cada territorio vascular se asocia con un patrón de déficit predecible, según las estructuras que irriga esa arteria.',
  exp:'Cada territorio vascular del cerebro (el área irrigada por una arteria específica) se asocia con un patrón de déficit predecible si esa arteria se obstruye. Reconocer el patrón de síntomas de un ictus (qué parte del cuerpo está afectada, si hay afasia) permite, en minutos, estimar qué territorio vascular está comprometido, información valiosa incluso antes de que una tomografía confirme el diagnóstico.',
  no:{
    1:'Los síntomas de un ictus SÍ tienen una relación directa y predecible con el territorio vascular afectado, precisamente lo que permite esta estimación clínica.',
    2:'Las distintas arterias cerebrales irrigan territorios específicos y diferenciados, no idénticos entre sí.',
    3:'El patrón clínico de síntomas SÍ puede aportar información valiosa sobre el territorio comprometido, incluso antes de contar con un estudio de imagen.'
  },
  trampa:'Subestimar el valor predictivo del patrón clínico de síntomas para estimar el territorio vascular afectado, antes de contar con estudios de imagen.',
  obj:'Explicar por qué el patrón de síntomas de un ictus permite estimar el territorio vascular comprometido.',
  ref:'Snell, Neuroanatomía Clínica, cap. 12.',
  tags:['territorio vascular','patrón de déficit','ictus']
},
{
  id:'U9-NA-Q35', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Vías sensitivas y motoras', sub:'Vía piramidal vs. lemniscal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre la vía piramidal y la vía lemniscal?',
  ops:[
    'La vía piramidal (incluye el haz corticoespinal) es el sistema motor voluntario principal; la vía lemniscal (cordones posteriores) transporta tacto fino, vibración y propiocepción',
    'Ambas vías transportan exactamente el mismo tipo de información en la misma dirección', 'La vía piramidal es sensitiva, y la vía lemniscal es motora', 'Ninguna de las dos vías cruza de lado en ningún punto de su trayecto'],
  ok:0,
  clave:'La vía piramidal es el sistema motor voluntario principal; la vía lemniscal transporta tacto fino, vibración y propiocepción.',
  exp:'La vía piramidal (que incluye al haz corticoespinal) es el sistema motor voluntario principal, desde la corteza motora hasta el músculo. La vía lemniscal (que corresponde a los cordones posteriores) transporta tacto fino, vibración y propiocepción hasta la corteza somatosensorial, ambas cruzando de lado en puntos distintos.',
  no:{
    1:'Transportan tipos de información distintos (motora frente a sensitiva específica) en direcciones distintas.',
    2:'Está invertido: la vía piramidal es MOTORA, y la vía lemniscal es SENSITIVA, no al revés.',
    3:'Ambas vías sí cruzan de lado en algún punto de su trayecto, aunque en puntos anatómicos distintos (ya descritos en el tema de médula espinal).'
  },
  trampa:'Invertir cuál vía (piramidal o lemniscal) es motora y cuál es sensitiva.',
  obj:'Distinguir la vía piramidal de la vía lemniscal según su función.',
  ref:'Snell, Neuroanatomía Clínica, cap. 5 y 9.',
  tags:['vía piramidal','vía lemniscal','sistema motor']
},
{
  id:'U9-NA-Q36', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Vías sensitivas y motoras', sub:'Neurona motora superior',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta debilidad muscular, reflejos osteotendinosos EXALTADOS, y signo de Babinski positivo.',
  enunciado:'¿Qué tipo de lesión sugiere este patrón?',
  ops:[
    'Lesión de neurona motora SUPERIOR, por pérdida de la inhibición descendente normal sobre los reflejos', 'Lesión de neurona motora INFERIOR, con atrofia muscular marcada', 'Una lesión exclusivamente cerebelosa, sin relación con la vía motora', 'Este patrón no corresponde a ningún tipo de lesión neurológica conocida'],
  ok:0,
  clave:'Debilidad + reflejos exaltados + Babinski positivo sugiere lesión de neurona motora superior.',
  exp:'Una lesión de neurona motora SUPERIOR produce debilidad con reflejos EXALTADOS (por pérdida de la inhibición descendente normal) y el signo de Babinski positivo -exactamente el patrón descrito en este caso, a diferencia de una lesión de neurona motora inferior, que produciría reflejos DISMINUIDOS y atrofia.',
  no:{
    1:'Una lesión de neurona motora INFERIOR produciría el patrón OPUESTO: reflejos disminuidos y atrofia, no exaltados con Babinski positivo.',
    2:'Una lesión cerebelosa produciría ataxia y dismetría SIN debilidad, un patrón distinto al descrito (que incluye debilidad y reflejos exaltados).',
    3:'Este patrón sí corresponde a un tipo de lesión neurológica bien caracterizado: la lesión de neurona motora superior.'
  },
  trampa:'Confundir el patrón de neurona motora superior (reflejos exaltados, Babinski positivo) con el de neurona motora inferior (reflejos disminuidos, atrofia).',
  obj:'Identificar el patrón de lesión de neurona motora superior a partir de un caso clínico.',
  ref:'Snell, Neuroanatomía Clínica, cap. 5 y 9.',
  tags:['neurona motora superior','reflejos exaltados','signo de Babinski']
},
{
  id:'U9-NA-Q37', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Vías sensitivas y motoras', sub:'Neurona motora inferior',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una lesión de neurona motora inferior produce, con el tiempo, atrofia muscular visible?',
  ops:[
    'Porque el músculo pierde también su estímulo trófico habitual, no solo la orden de movimiento, que normalmente le llega a través de esa misma neurona motora inferior',
    'La atrofia muscular nunca ocurre en lesiones de neurona motora inferior', 'La atrofia es exclusiva de las lesiones de neurona motora superior', 'El músculo no tiene ninguna relación trófica con la neurona motora inferior que lo inerva'],
  ok:0,
  clave:'El músculo pierde su estímulo trófico habitual (no solo la orden de movimiento), que le llega a través de la neurona motora inferior.',
  exp:'Una lesión de neurona motora INFERIOR produce debilidad con reflejos disminuidos o ausentes, y con el tiempo, atrofia muscular visible, porque el músculo pierde también su estímulo trófico habitual (necesario para mantener su trofismo normal), no solo la orden de movimiento -una consecuencia que no ocurre de la misma forma en las lesiones de neurona motora superior.',
  no:{
    1:'La atrofia muscular sí ocurre característicamente en las lesiones de neurona motora inferior, con el tiempo.',
    2:'Es al revés: la atrofia es más característica de la lesión de neurona motora INFERIOR, no de la superior.',
    3:'El músculo sí tiene una relación trófica directa con la neurona motora inferior que lo inerva; perderla explica la atrofia progresiva.'
  },
  trampa:'No reconocer la relación trófica (no solo motora) entre la neurona motora inferior y el músculo, que explica la atrofia con el tiempo.',
  obj:'Explicar por qué una lesión de neurona motora inferior produce atrofia muscular con el tiempo.',
  ref:'Snell, Neuroanatomía Clínica, cap. 5 y 9.',
  tags:['neurona motora inferior','atrofia muscular','estímulo trófico']
},
{
  id:'U9-NA-Q38', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Vías sensitivas y motoras', sub:'Importancia diagnóstica de la distinción superior/inferior',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué distinguir entre lesión de neurona motora superior e inferior es tan importante como la propia debilidad muscular para el examen neurológico?',
  ops:[
    'Porque cada una tiene un patrón distinto de reflejos y trofismo muscular que ayuda a decidir dónde buscar la lesión: en el cerebro o la médula, o en el nervio periférico y el propio músculo',
    'La distinción entre neurona motora superior e inferior no tiene ninguna utilidad práctica real', 'Ambos tipos de lesión producen exactamente el mismo patrón de reflejos y trofismo', 'Solo la debilidad muscular importa; los reflejos y el trofismo no aportan ninguna información adicional'],
  ok:0,
  clave:'Cada tipo de lesión tiene un patrón distinto de reflejos y trofismo, ayudando a localizar la lesión (SNC frente a SNP/músculo).',
  exp:'Esta distinción (motora superior con reflejos exaltados, motora inferior con reflejos disminuidos y atrofia) es, en la práctica clínica, tan importante como la propia debilidad muscular para decidir dónde buscar la lesión: en el cerebro o la médula (motora superior), o en el nervio periférico y el propio músculo (motora inferior).',
  no:{
    1:'Esta distinción tiene una utilidad práctica central y bien establecida en el examen neurológico.',
    2:'Producen patrones OPUESTOS de reflejos (exaltados frente a disminuidos) y trofismo (conservado frente a atrofia), no el mismo patrón.',
    3:'Los reflejos y el trofismo aportan información diagnóstica adicional y complementaria a la debilidad muscular, ayudando a localizar la lesión.'
  },
  trampa:'Subestimar la utilidad diagnóstica de examinar reflejos y trofismo muscular, además de la fuerza, para localizar una lesión motora.',
  obj:'Explicar la importancia de distinguir entre lesión de neurona motora superior e inferior en el examen neurológico.',
  ref:'Snell, Neuroanatomía Clínica, cap. 5 y 9.',
  tags:['neurona motora superior','neurona motora inferior','localización de lesión']
},
{
  id:'U9-NA-Q39', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Sistema límbico', sub:'Hipocampo y memoria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ocurre con una persona que sufre una lesión bilateral del hipocampo?',
  ops:[
    'Puede quedar incapaz de formar nuevos recuerdos, aunque conserve perfectamente los recuerdos antiguos formados antes de la lesión',
    'Pierde por completo todos sus recuerdos, tanto antiguos como nuevos', 'No tiene ninguna consecuencia sobre la memoria, solo afecta las emociones', 'Gana una capacidad de memoria superior a la normal'],
  ok:0,
  clave:'Una lesión bilateral del hipocampo puede dejar incapaz de formar nuevos recuerdos, conservando los antiguos.',
  exp:'El hipocampo es fundamental para la formación de nuevos recuerdos a largo plazo (memoria declarativa): una lesión bilateral del hipocampo puede dejar a una persona incapaz de formar nuevos recuerdos, aunque conserve perfectamente los recuerdos antiguos, formados antes de la lesión -un patrón muy específico que distingue la memoria de consolidación de la memoria ya establecida.',
  no:{
    1:'La lesión bilateral del hipocampo específicamente compromete la formación de NUEVOS recuerdos, sin borrar los recuerdos antiguos ya consolidados.',
    2:'El hipocampo tiene una relación directa y central con la memoria, no exclusivamente con las emociones (esa es más bien función de la amígdala).',
    3:'Una lesión del hipocampo compromete (no mejora) la capacidad de formar nuevos recuerdos.'
  },
  trampa:'Asumir que una lesión del hipocampo borra todos los recuerdos (antiguos y nuevos), en vez de comprometer específicamente la formación de recuerdos nuevos.',
  obj:'Explicar la consecuencia de una lesión bilateral del hipocampo sobre la formación de nuevos recuerdos.',
  ref:'Kandel, Principios de Neurociencia, cap. 45.',
  tags:['hipocampo','memoria declarativa','lesión bilateral']
},
{
  id:'U9-NA-Q40', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Sistema límbico', sub:'Amígdala y emoción',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple la amígdala cerebral dentro del sistema límbico?',
  ops:['Procesa el componente emocional de las experiencias, en particular el miedo y otras respuestas emocionales intensas', 'Es responsable exclusivamente de la formación de nuevos recuerdos', 'La amígdala no tiene ninguna función conocida dentro del sistema límbico', 'Regula la temperatura corporal y el hambre'],
  ok:0,
  clave:'La amígdala procesa el componente emocional de las experiencias, en particular el miedo.',
  exp:'La amígdala cerebral, vecina inmediata del hipocampo, procesa el componente emocional de las experiencias, en particular el miedo y otras respuestas emocionales intensas -una función complementaria a la del hipocampo, que procesa la formación de recuerdos.',
  no:{
    1:'La formación de nuevos recuerdos es función principal del HIPOCAMPO, no de la amígdala, que procesa el componente emocional.',
    2:'La amígdala sí tiene una función bien caracterizada dentro del sistema límbico: el procesamiento emocional.',
    3:'Regular temperatura y hambre es función del hipotálamo, no de la amígdala.'
  },
  trampa:'Confundir la función de la amígdala (procesamiento emocional) con la del hipocampo (memoria) o el hipotálamo (homeostasis).',
  obj:'Identificar la función de la amígdala cerebral en el procesamiento emocional.',
  ref:'Kandel, Principios de Neurociencia, cap. 45.',
  tags:['amígdala cerebral','procesamiento emocional','miedo']
},
{
  id:'U9-NA-Q41', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Sistema límbico', sub:'Circuito de Papez',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la estrecha interconexión anatómica entre memoria y emoción dentro del circuito de Papez explica que los eventos con fuerte carga emocional se recuerden con más vividez?',
  ops:[
    'Porque el circuito de Papez conecta al hipocampo (memoria) con el hipotálamo, el tálamo y otras estructuras límbicas relacionadas con la emoción, en una misma red anatómica interconectada',
    'El circuito de Papez no tiene ninguna relación con la memoria ni con la emoción', 'La memoria y la emoción son procesadas en estructuras cerebrales completamente separadas, sin ninguna conexión', 'Los eventos emocionales siempre se olvidan más rápido que los eventos neutros'],
  ok:0,
  clave:'El circuito de Papez conecta al hipocampo (memoria) con estructuras límbicas de la emoción, explicando la mayor vividez del recuerdo emocional.',
  exp:'El circuito de Papez es una red de conexiones entre el hipocampo, el hipotálamo, el tálamo y otras estructuras del sistema límbico, que originalmente se propuso como el circuito responsable de la emoción, y que hoy se entiende también como parte central de la formación de la memoria -la estrecha interconexión anatómica entre las estructuras de memoria y emoción dentro de este mismo sistema es la base biológica de por qué los eventos con fuerte carga emocional tienden a recordarse con más vividez.',
  no:{
    1:'El circuito de Papez tiene una relación central y bien establecida tanto con la memoria como con la emoción.',
    2:'Precisamente lo contrario: la memoria y la emoción están anatómicamente INTERCONECTADAS dentro del sistema límbico, no en estructuras completamente separadas.',
    3:'Es al revés: los eventos con fuerte carga emocional tienden a recordarse MEJOR (con más vividez), no a olvidarse más rápido.'
  },
  trampa:'No reconocer la interconexión anatómica del circuito de Papez como base biológica de la relación entre carga emocional y vividez del recuerdo.',
  obj:'Explicar cómo el circuito de Papez conecta memoria y emoción, explicando la vividez de los recuerdos emocionales.',
  ref:'Kandel, Principios de Neurociencia, cap. 45.',
  tags:['circuito de Papez','memoria y emoción','sistema límbico']
},
{
  id:'U9-NA-Q42', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Sistema límbico', sub:'Epilepsia del lóbulo temporal',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué ciertas epilepsias del lóbulo temporal pueden producir alteraciones tanto de la memoria como del procesamiento emocional a la vez?',
  ops:[
    'Porque el lóbulo temporal alberga tanto al hipocampo (memoria) como a la amígdala (emoción), estructuras del sistema límbico estrechamente interconectadas entre sí',
    'La epilepsia del lóbulo temporal nunca afecta ni la memoria ni la emoción de ningún paciente', 'El hipocampo y la amígdala están ubicados en lóbulos cerebrales completamente distintos y separados', 'Solo puede alterarse la memoria o la emoción, nunca ambas simultáneamente en un mismo paciente'],
  ok:0,
  clave:'El lóbulo temporal alberga tanto al hipocampo como a la amígdala, estructuras interconectadas del sistema límbico, explicando la afectación simultánea.',
  exp:'Este vínculo estrecho entre memoria y emoción explica por qué ciertos trastornos que afectan al sistema límbico (como algunas epilepsias del lóbulo temporal, que alberga tanto al hipocampo como a la amígdala, vecinos inmediatos e interconectados) pueden producir alteraciones tanto de la memoria como del procesamiento emocional a la vez, no una sola de las dos por separado.',
  no:{
    1:'La epilepsia del lóbulo temporal sí puede afectar tanto memoria como emoción, precisamente por la ubicación conjunta del hipocampo y la amígdala en esa región.',
    2:'El hipocampo y la amígdala son vecinos anatómicos inmediatos dentro del lóbulo temporal, no estructuras en lóbulos separados.',
    3:'Sí es posible que ambas funciones (memoria y emoción) se alteren simultáneamente en un mismo paciente, precisamente por la interconexión anatómica de las estructuras involucradas.'
  },
  trampa:'No reconocer la ubicación conjunta del hipocampo y la amígdala en el lóbulo temporal como explicación de la afectación simultánea de memoria y emoción en ciertas epilepsias.',
  obj:'Explicar por qué la epilepsia del lóbulo temporal puede afectar simultáneamente memoria y emoción.',
  ref:'Kandel, Principios de Neurociencia, cap. 45.',
  tags:['epilepsia del lóbulo temporal','hipocampo','amígdala']
},
{
  id:'U9-NA-Q43', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Líquido cefalorraquídeo y sistema ventricular', sub:'Recorrido del LCR',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el recorrido del líquido cefalorraquídeo a través del sistema ventricular, desde su producción hasta el cuarto ventrículo?',
  ops:[
    'Ventrículos laterales → tercer ventrículo → acueducto de Silvio → cuarto ventrículo', 'Cuarto ventrículo → acueducto de Silvio → tercer ventrículo → ventrículos laterales', 'El líquido cefalorraquídeo no sigue ningún recorrido específico a través del sistema ventricular', 'Ventrículos laterales → cuarto ventrículo directamente, sin pasar por el tercer ventrículo ni el acueducto'],
  ok:0,
  clave:'El recorrido es: ventrículos laterales → tercer ventrículo → acueducto de Silvio → cuarto ventrículo.',
  exp:'Los dos ventrículos laterales (uno en cada hemisferio cerebral) son los más grandes, y drenan hacia un tercer ventrículo central, que a su vez se conecta con un cuarto ventrículo (a la altura del tronco encefálico) a través de un canal estrecho, el acueducto de Silvio.',
  no:{
    1:'Este orden está invertido; el recorrido correcto va desde los ventrículos laterales hacia el cuarto ventrículo, no al revés.',
    2:'El líquido cefalorraquídeo sí sigue un recorrido específico y bien establecido a través del sistema ventricular.',
    3:'Los ventrículos laterales NO drenan directamente al cuarto ventrículo; deben pasar primero por el tercer ventrículo y el acueducto de Silvio.'
  },
  trampa:'Invertir el orden del recorrido del LCR o saltarse pasos intermedios del sistema ventricular (tercer ventrículo, acueducto de Silvio).',
  obj:'Recordar el recorrido correcto del líquido cefalorraquídeo a través del sistema ventricular.',
  ref:'Snell, Neuroanatomía Clínica, cap. 4.',
  tags:['sistema ventricular','ventrículos laterales','acueducto de Silvio']
},
{
  id:'U9-NA-Q44', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Líquido cefalorraquídeo y sistema ventricular', sub:'Plexo coroideo',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué estructura produce el líquido cefalorraquídeo?',
  ops:['El plexo coroideo', 'Las meninges', 'El acueducto de Silvio', 'La sustancia negra'],
  ok:0,
  clave:'El plexo coroideo produce el líquido cefalorraquídeo.',
  exp:'El sistema ventricular es una serie de cavidades interconectadas dentro del cerebro por donde circula el líquido cefalorraquídeo, producido por el plexo coroideo.',
  no:{
    1:'Las meninges son membranas protectoras, no la estructura productora del líquido cefalorraquídeo.',
    2:'El acueducto de Silvio es un canal de paso del líquido, no la estructura que lo produce.',
    3:'La sustancia negra es una estructura de los ganglios basales relacionada con la dopamina, sin relación con la producción de LCR.'
  },
  trampa:'Confundir el plexo coroideo (productor del LCR) con otras estructuras que participan en su circulación o protección, pero no en su producción.',
  obj:'Identificar al plexo coroideo como productor del líquido cefalorraquídeo.',
  ref:'Snell, Neuroanatomía Clínica, cap. 4.',
  tags:['plexo coroideo','producción de LCR']
},
{
  id:'U9-NA-Q45', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Líquido cefalorraquídeo y sistema ventricular', sub:'Hidrocefalia por obstrucción',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta acumulación anormal de líquido cefalorraquídeo en los ventrículos laterales y el tercer ventrículo, con el cuarto ventrículo de tamaño normal.',
  enunciado:'¿Qué punto de obstrucción es más probable, dado este patrón?',
  ops:['El acueducto de Silvio, por su estrechez, un sitio frecuente de obstrucción entre el tercer y el cuarto ventrículo', 'Los ventrículos laterales, que estarían completamente colapsados', 'Este patrón no tiene relación con ningún punto de obstrucción específico', 'El espacio subaracnoideo, sin relación con el sistema ventricular'],
  ok:0,
  clave:'El acueducto de Silvio, por su estrechez, es un sitio frecuente de obstrucción entre el tercer y el cuarto ventrículo.',
  exp:'El acueducto de Silvio es un canal estrecho que conecta el tercer con el cuarto ventrículo -un punto de paso obligatorio y, precisamente por ser tan estrecho, un sitio frecuente de obstrucción. Una obstrucción ahí explicaría la dilatación de los ventrículos laterales y el tercer ventrículo (proximal a la obstrucción), con el cuarto ventrículo de tamaño normal (distal a la obstrucción, sin recibir el exceso de presión).',
  no:{
    1:'Los ventrículos laterales en este caso están DILATADOS (acumulando líquido), no colapsados, consistente con una obstrucción más distal en su drenaje.',
    2:'Este patrón sí tiene relación directa con un punto de obstrucción específico y anatómicamente predecible: el acueducto de Silvio.',
    3:'El espacio subaracnoideo es un espacio meníngeo distinto del sistema ventricular; el patrón descrito corresponde específicamente a una obstrucción dentro del sistema ventricular.'
  },
  trampa:'No usar el patrón de dilatación ventricular (proximal dilatado, distal normal) para inferir el punto anatómico específico de la obstrucción.',
  obj:'Inferir el punto de obstrucción del sistema ventricular a partir del patrón de dilatación observado.',
  ref:'Snell, Neuroanatomía Clínica, cap. 4.',
  tags:['hidrocefalia','acueducto de Silvio','obstrucción ventricular']
},
{
  id:'U9-NA-Q46', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Líquido cefalorraquídeo y sistema ventricular', sub:'Presión intracraneal en hidrocefalia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la hidrocefalia aumenta la presión intracraneal?',
  ops:[
    'Porque el cráneo es una caja rígida de volumen fijo, así que la acumulación de líquido cefalorraquídeo dentro de un espacio que no puede expandirse eleva la presión',
    'El cráneo puede expandirse libremente para acomodar cualquier acumulación de líquido, sin ningún aumento de presión', 'La hidrocefalia nunca produce ningún aumento de la presión intracraneal', 'La presión intracraneal no tiene ninguna relación con el volumen de líquido cefalorraquídeo'],
  ok:0,
  clave:'El cráneo es una caja rígida de volumen fijo; la acumulación de LCR dentro de ese espacio fijo eleva la presión intracraneal.',
  exp:'Como el cráneo es una caja rígida de volumen fijo, la acumulación anormal de líquido cefalorraquídeo (hidrocefalia) dentro del sistema ventricular aumenta la presión intracraneal, porque ese volumen adicional no tiene hacia dónde expandirse dentro de un espacio de capacidad fija.',
  no:{
    1:'El cráneo del adulto es precisamente una estructura RÍGIDA, de volumen fijo, que no puede expandirse para acomodar líquido adicional.',
    2:'La hidrocefalia sí produce característicamente un aumento de la presión intracraneal, precisamente por la rigidez del cráneo.',
    3:'La presión intracraneal tiene una relación directa con el volumen de líquido cefalorraquídeo dentro del espacio craneal fijo.'
  },
  trampa:'No conectar la rigidez del cráneo (volumen fijo) con el mecanismo por el cual la hidrocefalia eleva la presión intracraneal.',
  obj:'Explicar por qué la hidrocefalia aumenta la presión intracraneal, dado el volumen fijo del cráneo.',
  ref:'Snell, Neuroanatomía Clínica, cap. 4.',
  tags:['hidrocefalia','presión intracraneal','cráneo rígido']
},
{
  id:'U9-NA-Q47', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Meninges y espacios meníngeos', sub:'Las tres capas meníngeas',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son las tres membranas meníngeas, de afuera hacia adentro?',
  ops:['Duramadre, aracnoides, piamadre', 'Piamadre, aracnoides, duramadre', 'Aracnoides, duramadre, piamadre', 'Las meninges están formadas por una sola capa, no por tres'],
  ok:0,
  clave:'De afuera hacia adentro: duramadre, aracnoides, piamadre.',
  exp:'Las meninges son tres membranas que envuelven al encéfalo y la médula espinal. La duramadre, la más externa, es gruesa y resistente, adherida por dentro al cráneo. La aracnoides, la capa media, tiene un aspecto de telaraña. La piamadre, la más interna, está firmemente adherida a la superficie del propio cerebro y la médula.',
  no:{
    1:'Este orden está invertido; de afuera hacia adentro es duramadre, aracnoides, piamadre, no al contrario.',
    2:'Este orden no es correcto; la secuencia correcta de afuera hacia adentro es duramadre, aracnoides, piamadre.',
    3:'Las meninges están formadas específicamente por tres capas distintas, no por una sola.'
  },
  trampa:'Invertir o alterar el orden correcto de las tres capas meníngeas (duramadre, aracnoides, piamadre) de afuera hacia adentro.',
  obj:'Recordar el orden de las tres capas meníngeas de afuera hacia adentro.',
  ref:'Snell, Neuroanatomía Clínica, cap. 4.',
  tags:['duramadre','aracnoides','piamadre']
},
{
  id:'U9-NA-Q48', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Meninges y espacios meníngeos', sub:'Hemorragia subaracnoidea',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una hemorragia subaracnoidea se mezcla directamente con el líquido cefalorraquídeo?',
  ops:[
    'Porque el espacio subaracnoideo, donde ocurre típicamente este tipo de hemorragia, es precisamente el mismo espacio donde circula el líquido cefalorraquídeo alrededor del encéfalo y la médula',
    'El líquido cefalorraquídeo y la sangre nunca pueden mezclarse bajo ninguna circunstancia', 'La hemorragia subaracnoidea ocurre en un espacio completamente separado del líquido cefalorraquídeo', 'El espacio subaracnoideo no contiene ningún vaso sanguíneo relevante'],
  ok:0,
  clave:'El espacio subaracnoideo, donde ocurre esta hemorragia, es el mismo espacio donde circula el LCR, por eso se mezclan directamente.',
  exp:'El espacio subaracnoideo, entre la aracnoides y la piamadre, es donde circula el líquido cefalorraquídeo alrededor de todo el encéfalo y la médula, y donde corren los principales vasos sanguíneos que irrigan la superficie del cerebro -una hemorragia ahí (hemorragia subaracnoidea, típicamente por la ruptura de un aneurisma) se mezcla directamente con el líquido cefalorraquídeo, precisamente porque ocurre en ese mismo espacio.',
  no:{
    1:'Sí pueden mezclarse, precisamente cuando la hemorragia ocurre en el mismo espacio anatómico por donde circula el LCR, como en la hemorragia subaracnoidea.',
    2:'La hemorragia subaracnoidea ocurre exactamente en el MISMO espacio donde circula el líquido cefalorraquídeo, no en un espacio separado.',
    3:'El espacio subaracnoideo sí contiene vasos sanguíneos relevantes, siendo precisamente donde corren los principales vasos que irrigan la superficie cerebral.'
  },
  trampa:'No reconocer que la hemorragia subaracnoidea ocurre en el mismo espacio anatómico donde circula el LCR, explicando su mezcla directa.',
  obj:'Explicar por qué la hemorragia subaracnoidea se mezcla directamente con el líquido cefalorraquídeo.',
  ref:'Snell, Neuroanatomía Clínica, cap. 4.',
  tags:['espacio subaracnoideo','hemorragia subaracnoidea','aneurisma']
},
{
  id:'U9-NA-Q49', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Meninges y espacios meníngeos', sub:'Hematoma epidural e intervalo lúcido',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente sufre un traumatismo craneal y parece encontrarse bien inicialmente, conversando con normalidad. Horas después, se deteriora rápidamente hasta perder la conciencia.',
  enunciado:'¿Qué diagnóstico sugiere este patrón clínico, conocido como "intervalo lúcido", y cuál es su mecanismo típico?',
  ops:[
    'Hematoma epidural, típicamente por ruptura de una arteria (con frecuencia la arteria meníngea media) tras un traumatismo craneal con fractura ósea cercana, acumulándose rápido por su origen arterial',
    'Hemorragia subaracnoidea, sin relación con ningún traumatismo previo', 'Este patrón clínico no tiene ninguna explicación anatómica conocida', 'Una lesión cerebelosa aislada, sin relación con ningún sangrado intracraneal'],
  ok:0,
  clave:'El hematoma epidural, de origen arterial (con frecuencia arteria meníngea media), se acumula rápido tras un traumatismo con fractura, explicando el "intervalo lúcido" seguido de deterioro rápido.',
  exp:'El hematoma epidural se acumula en el espacio potencial entre el cráneo y la duramadre, típicamente por la ruptura de una arteria (con frecuencia la arteria meníngea media) tras un traumatismo craneal con fractura ósea cercana: al ser de origen arterial, se acumula rápido y con alta presión, siendo una urgencia neuroquirúrgica clásica, a menudo descrita con un "intervalo lúcido" (el paciente parece estar bien inicialmente, antes de deteriorarse rápido a medida que el hematoma crece) -exactamente el cuadro descrito en este caso.',
  no:{
    1:'La hemorragia subaracnoidea típicamente se asocia a la ruptura de un aneurisma, no necesariamente a un traumatismo previo, y no es la explicación característica del "intervalo lúcido".',
    2:'Este patrón clínico sí tiene una explicación anatómica bien establecida y característica: el hematoma epidural de origen arterial.',
    3:'Una lesión cerebelosa aislada no explicaría este patrón de deterioro progresivo tras un traumatismo con intervalo lúcido, característico de un sangrado intracraneal expansivo.'
  },
  trampa:'No reconocer el "intervalo lúcido" como signo característico del hematoma epidural de origen arterial, confundiéndolo con otros tipos de hemorragia intracraneal.',
  obj:'Identificar el hematoma epidural y su presentación clásica con "intervalo lúcido" tras un traumatismo craneal.',
  ref:'Snell, Neuroanatomía Clínica, cap. 4.',
  tags:['hematoma epidural','intervalo lúcido','arteria meníngea media']
},
{
  id:'U9-NA-Q50', programa:'unirm', cuatri:9,
  esp:'Neuroanatomía', tema:'Meninges y espacios meníngeos', sub:'Capas de protección del sistema nervioso central',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué estructuras, en conjunto, forman el sistema de protección en varias capas del sistema nervioso central, según lo mostrado a lo largo de todo el bloque de Neuroanatomía?',
  ops:[
    'El cráneo, el líquido cefalorraquídeo, y las meninges (duramadre, aracnoides, piamadre), cada una con su propia forma característica de fallar clínicamente',
    'Únicamente el cráneo, sin ninguna otra estructura protectora adicional', 'El sistema nervioso central no cuenta con ningún sistema de protección estructural específico', 'Solo las meninges protegen al sistema nervioso central, sin participación del cráneo ni el líquido cefalorraquídeo'],
  ok:0,
  clave:'El cráneo, el líquido cefalorraquídeo y las meninges forman, juntos, un sistema de protección en varias capas.',
  exp:'Este tema cierra el bloque completo de Neuroanatomía con una capa más de protección del sistema nervioso central, sumada a las ya vistas: el cráneo, el líquido cefalorraquídeo y ahora las meninges forman, juntos, un sistema de protección en varias capas, cada una con su propia forma característica de fallar clínicamente (fracturas óseas, hidrocefalia, hemorragias meníngeas específicas de cada espacio).',
  no:{
    1:'El cráneo es solo UNA de varias capas de protección; el sistema completo incluye también el líquido cefalorraquídeo y las meninges.',
    2:'El sistema nervioso central sí cuenta con un sistema de protección estructural bien caracterizado, en múltiples capas.',
    3:'El cráneo y el líquido cefalorraquídeo también participan activamente en la protección del sistema nervioso central, junto con las meninges.'
  },
  trampa:'Reducir el sistema de protección del sistema nervioso central a una sola estructura, sin reconocer la integración de cráneo, líquido cefalorraquídeo y meninges.',
  obj:'Sintetizar las estructuras que forman el sistema de protección en varias capas del sistema nervioso central.',
  ref:'Snell, Neuroanatomía Clínica, cap. 4.',
  tags:['protección del sistema nervioso central','meninges','síntesis del bloque']
}

]);
