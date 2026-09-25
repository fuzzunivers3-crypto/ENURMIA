/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE SEMIOLOGIA CLINICA (1/2)
   Amplia Semiologia Clinica de 6 a 50 preguntas junto con
   unirm-09-banco-3.js. Esta parte cubre historia clinica/anamnesis,
   examen fisico general, semiologia del dolor, respiratoria,
   cardiovascular, abdominal, neurologica basica y osteoarticular
   (temas 1-8).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== SEMIOLOGIA CLINICA ===================== */
{
  id:'U9-SC-Q07', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Historia clínica: anamnesis', sub:'Estructura de la anamnesis',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el orden estructural correcto de la anamnesis, tal como se enseña de forma clásica?',
  ops:[
    'Motivo de consulta → enfermedad actual → antecedentes (personales patológicos, no patológicos y familiares)',
    'Antecedentes → motivo de consulta → enfermedad actual', 'Enfermedad actual → antecedentes → motivo de consulta', 'No existe un orden estructural fijo para la anamnesis'],
  ok:0,
  clave:'El orden clásico es motivo de consulta, luego enfermedad actual, luego antecedentes.',
  exp:'La anamnesis sigue una estructura fija: primero el motivo de consulta (la razón por la que el paciente vino, en sus propias palabras), después la enfermedad actual (el desarrollo cronológico detallado de ese motivo), y finalmente los antecedentes (personales patológicos, personales no patológicos y familiares). Este orden no es arbitrario: cada bloque responde una pregunta distinta y saltarse uno deja un hueco real en la información.',
  no:{
    1:'Los antecedentes van al final, no al inicio; empezar por ahí deja sin contexto la razón real de la consulta.',
    2:'El motivo de consulta debe preceder a la enfermedad actual, ya que esta última desarrolla cronológicamente ese motivo.',
    3:'Sí existe un orden estructural fijo, precisamente para no dejar huecos de información al entrevistar.'
  },
  trampa:'Invertir el orden de los componentes de la anamnesis, empezando por los antecedentes en vez del motivo de consulta.',
  obj:'Reconocer el orden estructural correcto de la anamnesis.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 1.',
  tags:['anamnesis','motivo de consulta','antecedentes','estructura']
},
{
  id:'U9-SC-Q08', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Historia clínica: anamnesis', sub:'Palabras textuales del paciente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se recomienda registrar el motivo de consulta entre comillas, con las palabras textuales del paciente?',
  ops:[
    'Porque preserva la información original sin la interpretación diagnóstica prematura de quien entrevista, evitando sesgar el interrogatorio dirigido posterior',
    'Es solo una formalidad sin ninguna utilidad clínica real',
    'Porque las palabras del paciente son siempre más precisas médicamente que una interpretación clínica',
    'Porque la ley exige textualmente las palabras del paciente en todos los países'
  ],
  ok:0,
  clave:'Preserva la información sin interpretación prematura, evitando sesgar el interrogatorio dirigido que sigue.',
  exp:'Escribir el motivo de consulta entre comillas, en las palabras exactas del paciente, preserva la información original sin la interpretación prematura de quien entrevista. Si se escribe directamente una conclusión diagnóstica ("dolor de características anginosas" en vez de "me aprieta el pecho"), esa interpretación puede sesgar todas las preguntas siguientes del interrogatorio dirigido, llevando a buscar solo lo que confirma la primera impresión.',
  no:{
    1:'Sí tiene una utilidad clínica real y bien fundamentada: evitar el sesgo de una interpretación diagnóstica prematura.',
    2:'Las palabras del paciente no son necesariamente más "precisas médicamente"; el punto es evitar imponer una conclusión antes de completar el interrogatorio, no la precisión técnica del lenguaje.',
    3:'No es un requisito legal universal; es una buena práctica clínica fundamentada en evitar el sesgo diagnóstico prematuro.'
  },
  trampa:'No reconocer el riesgo de sesgo diagnóstico que implica registrar una interpretación clínica en vez de las palabras textuales del paciente.',
  obj:'Explicar por qué se registran las palabras textuales del paciente en el motivo de consulta.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 1.',
  tags:['anamnesis','motivo de consulta','sesgo diagnóstico','interrogatorio dirigido']
},
{
  id:'U9-SC-Q09', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Historia clínica: anamnesis', sub:'Interrogatorio dirigido de un dolor',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente dice únicamente "me duele el pecho" y no aporta más información espontáneamente.',
  enunciado:'¿Qué características debe completar el interrogatorio dirigido, según la semiología clásica del dolor?',
  ops:[
    'Localización, irradiación, carácter, intensidad, inicio y evolución, factores que alivian o agravan, y síntomas acompañantes',
    'Solo la intensidad del dolor en una escala de 0 a 10, sin ninguna otra característica',
    'Únicamente si el dolor es agudo o crónico, sin profundizar en ninguna otra característica',
    'El interrogatorio dirigido no aporta ninguna información adicional relevante'
  ],
  ok:0,
  clave:'El interrogatorio dirigido completa localización, irradiación, carácter, intensidad, inicio/evolución, factores agravantes/atenuantes y síntomas acompañantes.',
  exp:'El interrogatorio dirigido completa las características que el paciente, por sí solo, casi nunca menciona todas: dónde exactamente (localización), hacia dónde se corre (irradiación), cómo se siente (carácter), qué tan fuerte (intensidad), desde cuándo y cómo empezó (inicio y evolución), qué lo alivia y qué lo agrava, y qué otros síntomas lo acompañan. Es esta información completa, no el síntoma aislado, la que orienta el diagnóstico diferencial.',
  no:{
    1:'La intensidad es solo una de varias características necesarias; el interrogatorio dirigido debe completar todas las demás también.',
    2:'El carácter agudo o crónico es solo una característica parcial; faltarían localización, irradiación, carácter del dolor, factores agravantes/atenuantes y síntomas acompañantes.',
    3:'El interrogatorio dirigido sí aporta información clínicamente decisiva, que con frecuencia determina el diagnóstico diferencial.'
  },
  trampa:'Conformarse con una sola característica del dolor (como la intensidad) en vez de completar sistemáticamente todas las que exige el interrogatorio dirigido.',
  obj:'Aplicar el interrogatorio dirigido completo ante un síntoma de dolor reportado de forma incompleta.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 1.',
  tags:['interrogatorio dirigido','dolor','localización','irradiación']
},
{
  id:'U9-SC-Q10', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Examen físico general', sub:'Orden de las cuatro técnicas',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el orden habitual de las cuatro técnicas básicas del examen físico?',
  ops:['Inspección, palpación, percusión y auscultación', 'Palpación, inspección, auscultación y percusión', 'Auscultación, inspección, palpación y percusión', 'Percusión, auscultación, inspección y palpación'],
  ok:0,
  clave:'El orden habitual es inspección, palpación, percusión y auscultación.',
  exp:'El examen físico se construye sobre cuatro técnicas básicas aplicadas en este orden habitual: inspección (observar, antes de tocar nada), palpación (usar las manos para sentir), percusión (golpear suavemente para generar un sonido revelador) y auscultación (escuchar con estetoscopio). Este orden busca que ninguna técnica contamine lo que la siguiente va a medir.',
  no:{
    1:'Este orden altera la secuencia correcta; la inspección debe preceder a la palpación, no al revés.',
    2:'La auscultación no va primero en el orden habitual (salvo la excepción específica del abdomen).',
    3:'Este orden invierte por completo la secuencia habitual del examen físico.'
  },
  trampa:'No recordar el orden exacto de las cuatro técnicas básicas del examen físico.',
  obj:'Recordar el orden habitual de las cuatro técnicas del examen físico.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 2.',
  tags:['inspección','palpación','percusión','auscultación']
},
{
  id:'U9-SC-Q11', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Examen físico general', sub:'Excepción del abdomen',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué en el examen del abdomen la auscultación se realiza ANTES que la palpación y la percusión, a diferencia del orden habitual?',
  ops:[
    'Porque tocar el abdomen puede alterar artificialmente los ruidos hidroaéreos que se quieren escuchar, contaminando el hallazgo',
    'No existe ninguna razón real; es solo una costumbre sin fundamento clínico',
    'Porque la percusión del abdomen siempre es dolorosa y debe evitarse por completo',
    'Porque la auscultación abdominal reemplaza por completo a la palpación'
  ],
  ok:0,
  clave:'Tocar el abdomen puede alterar artificialmente los ruidos hidroaéreos, así que se ausculta antes de palpar o percutir.',
  exp:'La excepción del abdomen (auscultar antes de palpar o percutir) tiene un fundamento claro: manipular el abdomen puede alterar artificialmente los ruidos hidroaéreos (el peristaltismo puede acelerarse o inhibirse transitoriamente por la manipulación), contaminando lo que la auscultación busca medir. Esta excepción ilustra la regla general que ordena todo el examen físico: no contaminar lo que la siguiente técnica va a medir.',
  no:{
    1:'Sí existe un fundamento clínico claro: evitar que la manipulación previa altere los ruidos hidroaéreos que se quieren escuchar.',
    2:'La percusión abdominal no siempre es dolorosa; esa no es la razón de la excepción de orden.',
    3:'La auscultación no reemplaza a la palpación; ambas técnicas aportan información complementaria y distinta.'
  },
  trampa:'No reconocer el fundamento fisiológico específico (alteración de los ruidos hidroaéreos por manipulación) detrás de la excepción de orden en el abdomen.',
  obj:'Explicar el fundamento de la excepción de orden en el examen físico del abdomen.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 2.',
  tags:['auscultación','abdomen','ruidos hidroaéreos','orden del examen']
},
{
  id:'U9-SC-Q12', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Examen físico general', sub:'Signos vitales como primer dato',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los signos vitales son, casi siempre, el primer dato objetivo que se recoge en cualquier evaluación clínica?',
  ops:[
    'Porque dan una idea rápida de qué tan estable está el paciente antes de continuar con un examen más detallado',
    'Porque los signos vitales sustituyen por completo al resto del examen físico',
    'Porque solo se necesitan una vez por hospitalización, sin repetirlos nunca más',
    'No hay ninguna razón clínica; es solo una tradición sin fundamento'
  ],
  ok:0,
  clave:'Los signos vitales dan una idea rápida de la estabilidad del paciente antes de continuar con un examen más detallado.',
  exp:'Los signos vitales (frecuencia cardíaca, frecuencia respiratoria, presión arterial, temperatura, saturación de oxígeno) son casi siempre el primer dato objetivo recogido, porque dan una idea rápida de qué tan estable está el paciente antes de continuar con un examen más detallado. Un examen físico "completo" se ajusta en profundidad según el motivo de consulta, pero los signos vitales casi nunca se omiten, porque orientan de inmediato sobre la urgencia del caso.',
  no:{
    1:'Los signos vitales no sustituyen al resto del examen físico; son el primer paso, no el único.',
    2:'Los signos vitales se repiten con frecuencia durante una hospitalización, precisamente para vigilar cambios en la estabilidad del paciente.',
    3:'Sí existe una razón clínica clara: orientar rápidamente sobre la estabilidad y urgencia del paciente.'
  },
  trampa:'Subestimar el propósito clínico de los signos vitales como primer indicador rápido de estabilidad, tratándolos como un paso meramente protocolario.',
  obj:'Explicar por qué los signos vitales se recogen como primer dato objetivo del examen físico.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 2.',
  tags:['signos vitales','estabilidad del paciente','examen físico general']
},
{
  id:'U9-SC-Q13', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología del dolor', sub:'Dolor somático vs. visceral',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre el dolor somático y el dolor visceral?',
  ops:[
    'El somático es bien localizado y agudo/punzante; el visceral es difuso, sordo y a menudo se acompaña de síntomas autonómicos',
    'Ambos tipos de dolor son indistinguibles clínicamente',
    'El visceral es siempre bien localizado y el somático es siempre difuso',
    'El dolor somático nunca puede ser agudo'
  ],
  ok:0,
  clave:'El dolor somático es bien localizado y agudo/punzante; el visceral es difuso, sordo, con frecuencia acompañado de síntomas autonómicos.',
  exp:'El dolor somático proviene de estructuras densamente inervadas (piel, músculos, articulaciones): suele ser bien localizado, agudo o punzante, y el paciente puede señalar con precisión dónde le duele. El dolor visceral proviene de órganos internos con inervación sensitiva menos densa y precisa: suele ser difuso, sordo, difícil de localizar, y a menudo se acompaña de síntomas autonómicos como náuseas o sudoración.',
  no:{
    1:'Son clínicamente distinguibles precisamente por su localización, calidad y síntomas acompañantes.',
    2:'Está invertido: el somático es el bien localizado, y el visceral es el difuso, no al revés.',
    3:'El dolor somático sí puede ser agudo o punzante; esa es precisamente una de sus características típicas.'
  },
  trampa:'Invertir las características del dolor somático y del visceral, confundiendo cuál es el bien localizado y cuál el difuso.',
  obj:'Distinguir el dolor somático del visceral según su localización, calidad y síntomas acompañantes.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 3.',
  tags:['dolor somático','dolor visceral','inervación','síntomas autonómicos']
},
{
  id:'U9-SC-Q14', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología del dolor', sub:'Dolor referido en el infarto',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con un infarto agudo del miocardio refiere dolor no solo en el pecho, sino también en el brazo izquierdo y la mandíbula.',
  enunciado:'¿Qué mecanismo explica que el dolor se sienta en zonas alejadas del corazón, como el brazo o la mandíbula?',
  ops:[
    'Dolor referido: las fibras sensitivas del corazón convergen en el mismo segmento medular que las fibras sensitivas de esas zonas de piel, y el cerebro no distingue con precisión el origen real',
    'El dolor viaja físicamente a través de los vasos sanguíneos desde el corazón hasta el brazo',
    'Es simplemente ansiedad del paciente, sin ningún mecanismo fisiológico real',
    'El corazón está anatómicamente conectado por nervios directos al brazo y la mandíbula'
  ],
  ok:0,
  clave:'Dolor referido: convergencia de fibras sensitivas del corazón y de esas zonas de piel en el mismo segmento medular.',
  exp:'Este es un ejemplo clásico de dolor referido: el dolor se SIENTE en una zona alejada del órgano realmente afectado porque las fibras sensitivas de ese órgano y las de la piel de esa zona convergen en el mismo segmento de la médula espinal, y el cerebro no logra distinguir con precisión de cuál de las dos viene la señal. No hay conexión nerviosa directa entre el corazón y el brazo; es una convergencia de vías sensitivas en la médula.',
  no:{
    1:'El dolor no viaja físicamente por los vasos sanguíneos; es un fenómeno de convergencia neural en la médula espinal, no un fenómeno vascular.',
    2:'Este es un fenómeno fisiológico real y bien descrito (dolor referido), no simplemente ansiedad del paciente.',
    3:'No existe una conexión nerviosa directa entre el corazón y esas zonas; el mecanismo es la convergencia de fibras sensitivas en el mismo segmento medular.'
  },
  trampa:'Buscar una explicación anatómica directa (conexión nerviosa física) en vez de reconocer el mecanismo de convergencia de fibras sensitivas en el segmento medular.',
  obj:'Explicar el mecanismo del dolor referido en el contexto de un infarto agudo del miocardio.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 3.',
  tags:['dolor referido','infarto','convergencia medular','segmento espinal']
},
{
  id:'U9-SC-Q15', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología del dolor', sub:'Irradiación vs. dolor referido',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre la irradiación de un dolor y el dolor referido?',
  ops:[
    'La irradiación sigue el trayecto anatómico directo de un nervio comprimido o irritado; el dolor referido se explica por convergencia de fibras sensitivas en la médula, sin relación con un trayecto nervioso físico',
    'Son exactamente el mismo fenómeno, con nombres distintos',
    'La irradiación se explica por convergencia medular y el dolor referido por el trayecto de un nervio',
    'Ninguno de los dos fenómenos tiene una explicación fisiológica conocida'
  ],
  ok:0,
  clave:'La irradiación sigue el trayecto de un nervio comprimido; el dolor referido se explica por convergencia de fibras en la médula, sin relación con un trayecto físico.',
  exp:'La irradiación es cuando el dolor se extiende desde su origen hacia otra zona siguiendo el trayecto anatómico directo de un nervio irritado o comprimido (como el dolor de una hernia discal que se irradia por la pierna). El dolor referido, en cambio, se explica por convergencia de fibras sensitivas de un órgano y de una zona de piel en el mismo segmento medular, sin que exista un trayecto nervioso físico compartido entre el origen real y la zona donde se siente el dolor.',
  no:{
    1:'Son fenómenos distintos, con mecanismos fisiológicos diferentes (trayecto nervioso directo frente a convergencia medular).',
    2:'Está invertido: la irradiación sigue el trayecto nervioso, y el dolor referido se explica por convergencia medular, no al revés.',
    3:'Ambos fenómenos sí tienen una explicación fisiológica conocida y bien establecida.'
  },
  trampa:'Confundir la irradiación (trayecto nervioso directo) con el dolor referido (convergencia medular sin trayecto físico compartido), o invertir sus mecanismos.',
  obj:'Distinguir la irradiación del dolor referido según su mecanismo fisiológico.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 3.',
  tags:['irradiación','dolor referido','trayecto nervioso','convergencia medular']
},
{
  id:'U9-SC-Q16', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología respiratoria', sub:'Estertores vs. sibilancias',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre los estertores y las sibilancias, tanto en su sonido como en su mecanismo?',
  ops:[
    'Estertores: sonidos discontinuos por apertura de alvéolos colapsados o con líquido. Sibilancias: sonidos continuos y musicales por vía aérea estrechada',
    'Ambos son exactamente el mismo tipo de sonido pulmonar',
    'Los estertores son continuos y musicales, y las sibilancias son discontinuas',
    'Ninguno de los dos tiene relación con ningún mecanismo físico identificable'
  ],
  ok:0,
  clave:'Estertores: discontinuos, por apertura de alvéolos colapsados o con líquido. Sibilancias: continuas, musicales, por vía aérea estrechada.',
  exp:'Los estertores (crepitantes) son sonidos discontinuos, como el crujido de un celofán, producidos cuando el aire abre bruscamente pequeñas vías aéreas o alvéolos colapsados o llenos de líquido -típicos de neumonía o edema pulmonar. Las sibilancias son sonidos continuos, musicales, de tono agudo, producidos cuando el aire pasa forzado a través de una vía aérea estrechada -típicas del asma o de broncoespasmo.',
  no:{
    1:'Son sonidos claramente distintos, tanto en su cualidad acústica como en su mecanismo físico de producción.',
    2:'Está invertido: los estertores son discontinuos, y las sibilancias son continuas y musicales, no al revés.',
    3:'Ambos sonidos sí tienen un mecanismo físico identificable y bien descrito.'
  },
  trampa:'Invertir cuál sonido pulmonar es discontinuo (estertores) y cuál es continuo y musical (sibilancias).',
  obj:'Distinguir los estertores de las sibilancias según su sonido y mecanismo de producción.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 15.',
  tags:['estertores','sibilancias','sonidos pulmonares','auscultación respiratoria']
},
{
  id:'U9-SC-Q17', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología respiratoria', sub:'Disnea como síntoma inespecífico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la disnea, por sí sola, no localiza necesariamente el problema en el sistema respiratorio?',
  ops:[
    'Porque puede tener origen respiratorio, cardíaco o de otro sistema; es su forma de aparecer (reposo, esfuerzo, al acostarse) la que orienta más hacia una causa específica',
    'La disnea siempre indica exclusivamente un problema pulmonar',
    'La disnea es un signo objetivo, no un síntoma, así que no requiere interpretación',
    'La disnea nunca tiene relación con el sistema cardiovascular'
  ],
  ok:0,
  clave:'La disnea puede tener origen respiratorio, cardíaco u otro; su forma de aparecer orienta más hacia la causa específica.',
  exp:'La disnea es la sensación subjetiva de falta de aire, y puede tener origen respiratorio, cardíaco o de otro sistema, así que por sí sola no localiza el problema. Su forma de aparecer (en reposo, con el esfuerzo, al acostarse -ortopnea) sí orienta más hacia una causa específica: por ejemplo, la disnea que empeora al acostarse sugiere más un origen cardíaco que uno puramente pulmonar.',
  no:{
    1:'La disnea no indica exclusivamente un problema pulmonar; puede tener origen cardíaco u otro sistema, como se explica en la respuesta correcta.',
    2:'La disnea es un síntoma (sensación subjetiva del paciente), no un signo objetivo medible directamente por el examinador.',
    3:'La disnea sí puede tener relación directa con el sistema cardiovascular, siendo un síntoma clásico de insuficiencia cardíaca.'
  },
  trampa:'Asumir que la disnea siempre indica un problema respiratorio, sin reconocer que también puede tener origen cardíaco o de otro sistema.',
  obj:'Explicar por qué la disnea es un síntoma inespecífico que requiere caracterizar su forma de aparición.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 15.',
  tags:['disnea','síntoma inespecífico','ortopnea','origen cardíaco']
},
{
  id:'U9-SC-Q18', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología respiratoria', sub:'Matidez y derrame pleural',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Al percutir el tórax de un paciente, se encuentra un sonido apagado (mate) en la base del pulmón derecho, en vez del sonido resonante normal.',
  enunciado:'¿Qué sugiere este hallazgo de matidez a la percusión?',
  ops:[
    'Que hay algo sólido o líquido en el lugar donde debería haber aire, como líquido en el espacio pleural (derrame pleural) o una consolidación pulmonar',
    'La matidez siempre indica una obstrucción de la vía aérea alta, sin relación con el parénquima pulmonar',
    'Es un hallazgo normal sin ninguna relevancia clínica',
    'La matidez indica exclusivamente asma bronquial'
  ],
  ok:0,
  clave:'La matidez sugiere algo sólido o líquido reemplazando al aire, como derrame pleural o consolidación pulmonar.',
  exp:'La matidez a la percusión (sonido apagado, en vez del sonido resonante normal del pulmón con aire) sugiere que hay algo sólido o líquido en el lugar donde debería haber aire -como líquido acumulado en el espacio pleural (derrame pleural) o una consolidación pulmonar por neumonía. Es un hallazgo físico que orienta directamente hacia estas dos posibilidades antes de cualquier estudio de imagen.',
  no:{
    1:'La matidez no indica obstrucción de vía aérea alta; ese cuadro tendría otros hallazgos (como estridor), no matidez a la percusión.',
    2:'La matidez es un hallazgo anormal, no normal, y sí tiene relevancia clínica significativa.',
    3:'El asma bronquial típicamente se asocia a sibilancias, no a matidez a la percusión; la matidez sugiere líquido o consolidación, no obstrucción bronquial.'
  },
  trampa:'No reconocer la matidez como signo de que algo sólido o líquido reemplazó al aire, confundiéndola con signos de obstrucción de la vía aérea.',
  obj:'Interpretar el hallazgo de matidez a la percusión en un caso clínico.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 15.',
  tags:['matidez','percusión','derrame pleural','consolidación pulmonar']
},
{
  id:'U9-SC-Q19', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología cardiovascular', sub:'Soplo inocente vs. patológico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Puede un soplo cardíaco no indicar necesariamente una enfermedad estructural grave?',
  ops:[
    'Sí: un soplo puede ser "inocente" o funcional, sin anormalidad estructural, frecuente en niños y en estados de flujo aumentado como el embarazo o la fiebre',
    'No, todo soplo cardíaco indica siempre una válvula dañada gravemente',
    'Los soplos solo ocurren en adultos mayores, nunca en niños',
    'Un soplo cardíaco nunca puede ser normal bajo ninguna circunstancia'
  ],
  ok:0,
  clave:'Un soplo puede ser inocente/funcional, sin daño estructural, frecuente en niños y en estados de flujo aumentado.',
  exp:'Un soplo cardíaco es un sonido causado por flujo turbulento de sangre, que puede deberse a una válvula estrecha o insuficiente, pero también puede ser un soplo "inocente" o funcional, sin ninguna anormalidad estructural, frecuente sobre todo en niños y en estados de flujo aumentado como el embarazo o la fiebre. No todo soplo indica enfermedad valvular grave.',
  no:{
    1:'No es cierto que todo soplo indique daño valvular grave; existen soplos inocentes sin ninguna anormalidad estructural.',
    2:'Los soplos inocentes son, de hecho, particularmente frecuentes en niños, no exclusivos de adultos mayores.',
    3:'Un soplo cardíaco sí puede ser una variante normal (inocente/funcional), sin representar patología.'
  },
  trampa:'Asumir automáticamente que todo soplo cardíaco indica enfermedad valvular grave, sin considerar la posibilidad de un soplo inocente o funcional.',
  obj:'Reconocer que un soplo cardíaco puede ser inocente, sin anormalidad estructural.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 13.',
  tags:['soplo cardíaco','soplo inocente','flujo turbulento','válvula cardíaca']
},
{
  id:'U9-SC-Q20', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología cardiovascular', sub:'Signos periféricos de insuficiencia cardíaca',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta ingurgitación yugular, edema en ambas piernas y estertores pulmonares en la auscultación.',
  enunciado:'¿Qué sugiere esta combinación de hallazgos, en el contexto cardiovascular?',
  ops:[
    'Insuficiencia cardíaca: el corazón no está bombeando con eficacia suficiente para mantener el equilibrio de presión y volumen circulante',
    'Es un hallazgo normal en cualquier persona sana',
    'Indica exclusivamente una infección respiratoria, sin ninguna relación cardiovascular',
    'Cada uno de estos signos, tomado aisladamente, es igual de específico que la combinación de los tres'
  ],
  ok:0,
  clave:'Ingurgitación yugular, edema y estertores combinados sugieren insuficiencia cardíaca.',
  exp:'La ingurgitación yugular (presión venosa central elevada), el edema en piernas (el corazón no mantiene el equilibrio de presión/volumen) y los estertores pulmonares (congestión pulmonar) son tres signos periféricos que, combinados, forman la base del examen físico que orienta hacia insuficiencia cardíaca, incluso antes de cualquier estudio de imagen o laboratorio -un mecanismo fisiológico único (falla de bomba cardíaca) explica los tres hallazgos a la vez.',
  no:{
    1:'Esta combinación de hallazgos no es normal; representa signos clínicos significativos de un problema cardiovascular.',
    2:'Aunque los estertores pueden verse en infecciones respiratorias, la combinación específica con ingurgitación yugular y edema apunta hacia insuficiencia cardíaca, no una infección aislada.',
    3:'La combinación de los tres signos es más específica y da una historia más coherente que cualquiera de ellos por separado.'
  },
  trampa:'Interpretar cada signo por separado sin reconocer que la combinación de los tres, explicada por un mecanismo único, es más específica que cualquiera aislado.',
  obj:'Interpretar la combinación de signos periféricos que orienta hacia insuficiencia cardíaca.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 13.',
  tags:['ingurgitación yugular','edema','estertores','insuficiencia cardíaca']
},
{
  id:'U9-SC-Q21', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología cardiovascular', sub:'Qué informa el pulso periférico',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué información aporta la palpación del pulso periférico?',
  ops:['Frecuencia, ritmo y amplitud del latido cardíaco transmitido a la periferia', 'Únicamente la temperatura corporal', 'Solo el nivel de oxígeno en sangre', 'El pulso no aporta ninguna información clínica relevante'],
  ok:0,
  clave:'El pulso informa sobre frecuencia, ritmo y amplitud del latido cardíaco transmitido a la periferia.',
  exp:'El pulso, palpado en arterias como la radial o la femoral, informa sobre la frecuencia, el ritmo y la amplitud del latido cardíaco transmitido a la periferia. Un pulso irregular puede sugerir una arritmia; una amplitud disminuida puede sugerir bajo gasto cardíaco o una obstrucción en el trayecto de esa arteria específica.',
  no:{
    1:'La temperatura corporal se evalúa por separado, no mediante la palpación del pulso.',
    2:'El nivel de oxígeno en sangre se mide típicamente por saturación de oxígeno (oximetría), no por la palpación del pulso.',
    3:'El pulso sí aporta información clínica relevante sobre frecuencia, ritmo y amplitud cardíacas.'
  },
  trampa:'Confundir la información aportada por el pulso con otros parámetros distintos, como temperatura o saturación de oxígeno.',
  obj:'Identificar qué información clínica aporta la palpación del pulso periférico.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 13.',
  tags:['pulso periférico','frecuencia','ritmo','amplitud']
},
{
  id:'U9-SC-Q22', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología abdominal', sub:'Interpretación de ruidos hidroaéreos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué sugieren, respectivamente, la ausencia y el aumento marcado de los ruidos hidroaéreos intestinales?',
  ops:[
    'Ausencia: el intestino dejó de moverse (íleo). Aumento marcado: puede sugerir obstrucción intestinal, con el intestino tratando de vencerla',
    'Ambos hallazgos significan exactamente lo mismo clínicamente',
    'La ausencia sugiere obstrucción y el aumento sugiere íleo',
    'Los ruidos hidroaéreos no tienen ninguna relevancia diagnóstica'
  ],
  ok:0,
  clave:'Ausencia = íleo (el intestino dejó de moverse). Aumento marcado = puede sugerir obstrucción intestinal.',
  exp:'La ausencia de ruidos hidroaéreos sugiere que el intestino dejó de moverse (íleo); su aumento marcado puede sugerir una obstrucción intestinal con el intestino tratando de vencerla mediante contracciones más intensas y frecuentes. Ambos extremos (ausencia y exceso) son hallazgos anormales, pero con significados clínicos distintos.',
  no:{
    1:'Ausencia y aumento de ruidos hidroaéreos tienen significados clínicos claramente distintos, no equivalentes.',
    2:'Está invertido: la ausencia sugiere íleo, y el aumento sugiere obstrucción intentando vencerse, no al revés.',
    3:'Los ruidos hidroaéreos sí tienen relevancia diagnóstica significativa en la evaluación del abdomen.'
  },
  trampa:'Invertir el significado de la ausencia (íleo) y el aumento marcado (obstrucción) de los ruidos hidroaéreos.',
  obj:'Interpretar la ausencia y el aumento de los ruidos hidroaéreos intestinales.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 17.',
  tags:['ruidos hidroaéreos','íleo','obstrucción intestinal','auscultación abdominal']
},
{
  id:'U9-SC-Q23', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología abdominal', sub:'Signo de rebote positivo',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Al examinar el abdomen de un paciente, el dolor es claramente MÁS intenso al soltar bruscamente la presión que al presionar lentamente.',
  enunciado:'¿Qué sugiere este hallazgo, y por qué es clínicamente relevante?',
  ops:[
    'Signo de rebote (Blumberg) positivo, que sugiere irritación peritoneal y puede orientar urgentemente hacia la necesidad de evaluación quirúrgica',
    'Es un hallazgo normal en cualquier examen abdominal, sin ninguna relevancia',
    'Sugiere exclusivamente una infección urinaria, sin relación con el peritoneo',
    'El dolor al soltar siempre es menos relevante que el dolor al presionar'
  ],
  ok:0,
  clave:'El signo de rebote (Blumberg) positivo sugiere irritación peritoneal y puede orientar urgentemente hacia evaluación quirúrgica.',
  exp:'Este es el signo de rebote (o de Blumberg): cuando el dolor es MÁS intenso al soltar que al presionar, sugiere irritación peritoneal (peritonitis) -el peritoneo, al moverse bruscamente con la descompresión súbita, duele más que con la presión sostenida. Junto con defensa abdominal marcada y dolor intenso, es uno de los hallazgos que más urgentemente orienta hacia evaluación quirúrgica, porque muchas causas de peritonitis (como una apendicitis perforada) no admiten demora.',
  no:{
    1:'No es un hallazgo normal; el signo de rebote positivo es un hallazgo patológico con implicaciones clínicas urgentes.',
    2:'El signo de rebote se relaciona con irritación peritoneal, no con infección urinaria específicamente.',
    3:'Es precisamente lo contrario: el dolor MÁS intenso al soltar (no al presionar) es el hallazgo clínicamente relevante en este signo.'
  },
  trampa:'No reconocer la urgencia clínica que implica un signo de rebote positivo, o confundir cuál momento (presionar o soltar) es el relevante.',
  obj:'Interpretar el signo de rebote positivo y su relevancia clínica urgente.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 17.',
  tags:['signo de rebote','Blumberg','irritación peritoneal','abdomen agudo']
},
{
  id:'U9-SC-Q24', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología abdominal', sub:'Ascitis',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la ascitis, y cómo se puede sospechar en el examen físico?',
  ops:[
    'Acumulación anormal de líquido dentro de la cavidad peritoneal; se sospecha por distensión abdominal generalizada y se confirma con matidez desplazable',
    'Es un aumento del tamaño del hígado, no relacionado con líquido libre',
    'Es exclusivamente un hallazgo de laboratorio, no detectable por examen físico',
    'La ascitis nunca produce distensión abdominal'
  ],
  ok:0,
  clave:'La ascitis es acumulación de líquido en la cavidad peritoneal; se sospecha por distensión abdominal y se confirma con matidez desplazable.',
  exp:'La ascitis es la acumulación anormal de líquido dentro de la cavidad peritoneal, que se puede sospechar por la distensión abdominal generalizada y confirmar con maniobras específicas de percusión (matidez desplazable con los cambios de posición del paciente) -el líquido se mueve con la gravedad al cambiar de posición, a diferencia del gas o una masa sólida.',
  no:{
    1:'El aumento de tamaño del hígado es hepatomegalia, un hallazgo distinto de la ascitis.',
    2:'La ascitis sí puede sospecharse por examen físico (distensión, matidez desplazable), aunque también puede confirmarse por estudios de imagen o laboratorio.',
    3:'La ascitis típicamente sí produce distensión abdominal generalizada, precisamente uno de sus signos característicos.'
  },
  trampa:'Confundir la ascitis con la hepatomegalia, o asumir que solo puede detectarse por estudios de laboratorio, no por examen físico.',
  obj:'Definir la ascitis y explicar cómo se sospecha en el examen físico.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 17.',
  tags:['ascitis','distensión abdominal','matidez desplazable','líquido peritoneal']
},
{
  id:'U9-SC-Q25', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología neurológica básica', sub:'Reflejo ausente vs. exaltado',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay, en cuanto al nivel de la lesión, entre un reflejo osteotendinoso AUSENTE y uno EXALTADO?',
  ops:[
    'Reflejo ausente: problema en el arco reflejo mismo (nervio periférico, raíz o médula en ese nivel). Reflejo exaltado: pérdida de la inhibición descendente del cerebro, típico de lesión de neurona motora superior',
    'Ambos hallazgos indican siempre exactamente el mismo tipo de lesión',
    'Un reflejo exaltado siempre indica un problema del nervio periférico',
    'Un reflejo ausente siempre indica una lesión de neurona motora superior'
  ],
  ok:0,
  clave:'Reflejo ausente: problema en el arco reflejo mismo. Reflejo exaltado: pérdida de inhibición descendente, típico de neurona motora superior.',
  exp:'Un reflejo AUSENTE o disminuido sugiere un problema en alguna parte del arco reflejo (el nervio periférico, la raíz, o la médula en ese nivel). Un reflejo EXALTADO sugiere, paradójicamente, un problema distinto: la pérdida de la inhibición normal que ejercen las vías descendentes del cerebro sobre ese reflejo, típico de una lesión de la neurona motora superior -no un daño en el arco reflejo mismo, sino la pérdida del control que normalmente lo modera.',
  no:{
    1:'Indican tipos de lesión distintos y casi opuestos (arco reflejo dañado frente a pérdida de inhibición descendente).',
    2:'Un reflejo exaltado sugiere lesión de neurona motora SUPERIOR (pérdida de inhibición), no un problema del nervio periférico.',
    3:'Es al revés: el reflejo ausente sugiere problema del arco reflejo (que puede incluir nervio periférico), y el exaltado sugiere lesión de motora superior.'
  },
  trampa:'Invertir qué tipo de lesión (arco reflejo dañado o pérdida de inhibición descendente) corresponde a un reflejo ausente y cuál a uno exaltado.',
  obj:'Distinguir el significado clínico de un reflejo ausente frente a uno exaltado.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 20.',
  tags:['reflejos osteotendinosos','neurona motora superior','arco reflejo']
},
{
  id:'U9-SC-Q26', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología neurológica básica', sub:'Signo de Babinski en el lactante',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Al explorar el signo de Babinski en un lactante de 3 meses, el dedo gordo se extiende hacia arriba con los demás dedos en abanico.',
  enunciado:'¿Cómo debe interpretarse este hallazgo en un lactante de esta edad?',
  ops:[
    'Es normal en el lactante, porque su vía piramidal todavía no ha terminado de mielinizarse por completo',
    'Es siempre patológico, sin importar la edad del paciente',
    'Indica obligatoriamente una lesión medular grave que requiere cirugía inmediata',
    'El signo de Babinski no puede evaluarse en lactantes'
  ],
  ok:0,
  clave:'El signo de Babinski positivo es normal en el lactante, por mielinización incompleta de la vía piramidal.',
  exp:'El signo de Babinski (extensión del dedo gordo con apertura en abanico de los demás dedos al estimular el borde externo de la planta) es normal en el lactante, cuya vía piramidal (vía corticoespinal) todavía no ha terminado de mielinizarse por completo. En un adulto, en cambio, este mismo hallazgo sugiere una lesión de la vía piramidal -la interpretación del mismo signo cambia radicalmente según la edad del paciente.',
  no:{
    1:'No es siempre patológico; en el lactante es un hallazgo normal y esperado por la mielinización incompleta.',
    2:'En un lactante, este hallazgo no indica una lesión grave que requiera cirugía; es una variante normal del desarrollo.',
    3:'El signo de Babinski sí puede y se evalúa en lactantes, precisamente porque su interpretación es distinta a la del adulto.'
  },
  trampa:'Aplicar la interpretación del adulto (patológico) al mismo hallazgo en un lactante, sin considerar la mielinización incompleta de la vía piramidal en esa edad.',
  obj:'Interpretar correctamente el signo de Babinski positivo según la edad del paciente.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 20.',
  tags:['signo de Babinski','lactante','mielinización','vía piramidal']
},
{
  id:'U9-SC-Q27', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología neurológica básica', sub:'Evaluación de la marcha',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se considera que la evaluación de la marcha es una parte especialmente reveladora del examen neurológico?',
  ops:[
    'Porque distintos patrones de marcha anormal apuntan hacia problemas en sistemas neurológicos muy distintos entre sí, desde el cerebelo hasta la médula espinal o los nervios periféricos',
    'La marcha nunca aporta información diagnóstica relevante',
    'Todos los patrones de marcha anormal indican exactamente el mismo tipo de lesión',
    'La marcha solo se evalúa en pacientes con enfermedades cardiovasculares'
  ],
  ok:0,
  clave:'Distintos patrones de marcha anormal apuntan hacia problemas en sistemas neurológicos muy distintos (cerebelo, médula, nervios periféricos).',
  exp:'La evaluación de la marcha es, con frecuencia, la parte más subestimada y a la vez más reveladora del examen neurológico: distintos patrones de marcha anormal (arrastrando el pie, con pasos cortos y rígidos, tambaleante) apuntan hacia problemas en sistemas neurológicos muy distintos entre sí -desde el cerebelo hasta la médula espinal o los propios nervios periféricos, cada patrón con su propio significado localizador.',
  no:{
    1:'La marcha sí aporta información diagnóstica relevante, siendo una parte reveladora del examen neurológico.',
    2:'Distintos patrones de marcha anormal apuntan hacia sistemas neurológicos distintos, no hacia el mismo tipo de lesión en todos los casos.',
    3:'La evaluación de la marcha es parte del examen neurológico, no una evaluación específica de enfermedades cardiovasculares.'
  },
  trampa:'Subestimar el valor localizador de los distintos patrones de marcha anormal, tratándolos como un hallazgo genérico sin significado específico.',
  obj:'Explicar por qué la evaluación de la marcha es una parte reveladora del examen neurológico.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 20.',
  tags:['marcha','examen neurológico','cerebelo','nervios periféricos']
},
{
  id:'U9-SC-Q28', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología osteoarticular', sub:'Comparación con el lado sano',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se recomienda comparar el rango de movimiento de una articulación con el lado contralateral sano del mismo paciente, en vez de usar un rango "normal" genérico?',
  ops:[
    'Porque la movilidad basal varía considerablemente de una persona a otra según edad, condición física y hábitos, así que el lado sano del propio paciente es una referencia más confiable',
    'Un rango "normal" genérico siempre es más preciso que comparar con el lado sano',
    'El lado contralateral nunca puede usarse como referencia',
    'La comparación con el lado sano no aporta ninguna ventaja real'
  ],
  ok:0,
  clave:'La movilidad basal varía entre personas, así que el lado sano del propio paciente es una referencia más confiable que un rango genérico.',
  exp:'El rango de movimiento de una articulación se evalúa comparando siempre con el lado contralateral sano del mismo paciente, que sirve de referencia individual más confiable que un rango "normal" genérico de libro, porque la movilidad basal varía considerablemente de una persona a otra según edad, condición física y hábitos.',
  no:{
    1:'Es al revés: comparar con el lado sano del propio paciente es más confiable que un rango genérico, precisamente por la variabilidad individual.',
    2:'El lado contralateral sí puede y debe usarse como referencia individual, siempre que esté disponible y sano.',
    3:'La comparación con el lado sano sí aporta una ventaja real: una referencia individualizada más precisa que un estándar genérico.'
  },
  trampa:'Preferir un rango "normal" genérico sobre la comparación individualizada con el lado sano del propio paciente.',
  obj:'Explicar por qué se prefiere comparar con el lado sano contralateral al evaluar el rango de movimiento articular.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 21.',
  tags:['rango de movimiento','lado contralateral','variabilidad individual']
},
{
  id:'U9-SC-Q29', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología osteoarticular', sub:'Signo de Tinel',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Al percutir suavemente sobre la muñeca de un paciente, en el trayecto del nervio mediano, el paciente refiere hormigueo hacia los primeros tres dedos de la mano.',
  enunciado:'¿Qué maniobra se está realizando, y qué sugiere este resultado positivo?',
  ops:[
    'Signo de Tinel positivo, que sugiere compresión del nervio mediano en el túnel carpiano',
    'Signo de rebote positivo, sugiriendo irritación peritoneal', 'Signo de Babinski positivo, sugiriendo lesión de la vía piramidal', 'Puñopercusión renal positiva, sugiriendo pielonefritis'],
  ok:0,
  clave:'Signo de Tinel positivo: percusión sobre el trayecto de un nervio que reproduce hormigueo, sugiere compresión en ese punto (aquí, del nervio mediano en el túnel carpiano).',
  exp:'Esta es la descripción clásica del signo de Tinel: se percute suavemente sobre el trayecto de un nervio en un punto de posible compresión (el ejemplo clásico es el nervio mediano en la muñeca, en el túnel carpiano), y si eso reproduce una sensación de hormigueo hacia la zona que ese nervio inerva, el signo es positivo, sugiriendo compresión de ese nervio en ese punto específico.',
  no:{
    1:'El signo de rebote se explora en el abdomen, no en la muñeca, y evalúa irritación peritoneal, no compresión nerviosa.',
    2:'El signo de Babinski se explora en el pie, estimulando la planta, no en la muñeca.',
    3:'La puñopercusión renal se realiza en la zona lumbar, no en la muñeca, y evalúa un proceso renal, no una compresión nerviosa periférica.'
  },
  trampa:'Confundir el signo de Tinel con otras maniobras semiológicas que también se describen como "positivas" pero exploran estructuras y regiones distintas.',
  obj:'Identificar el signo de Tinel y su significado clínico en un caso descrito.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 21.',
  tags:['signo de Tinel','nervio mediano','túnel carpiano','compresión nerviosa']
},
{
  id:'U9-SC-Q30', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología osteoarticular', sub:'Crepitación articular',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la crepitación articular, y con qué se asocia típicamente?',
  ops:[
    'Una sensación o sonido de roce, como arena entre dos superficies, al mover la articulación, típica del desgaste del cartílago articular',
    'Es sinónimo exacto de derrame articular', 'Es un signo exclusivo de fractura ósea aguda', 'La crepitación nunca se relaciona con ninguna estructura articular'],
  ok:0,
  clave:'La crepitación es una sensación/sonido de roce al mover la articulación, típica del desgaste del cartílago articular.',
  exp:'La crepitación es una sensación o sonido de roce, como arena entre dos superficies, al mover la articulación, típica del desgaste del cartílago articular (ya visto en Histología). Es un hallazgo distinto del derrame articular (líquido acumulado en la cápsula) y no es exclusiva de fracturas agudas, sino más bien asociada a procesos degenerativos crónicos del cartílago.',
  no:{
    1:'La crepitación y el derrame articular son hallazgos distintos: uno es un sonido/sensación de roce, el otro es acumulación de líquido.',
    2:'La crepitación no es exclusiva de fracturas agudas; se asocia más típicamente al desgaste crónico del cartílago articular.',
    3:'La crepitación sí se relaciona directamente con el estado del cartílago articular y su desgaste.'
  },
  trampa:'Confundir la crepitación con el derrame articular, o asumir que es exclusiva de fracturas agudas en vez de asociarla al desgaste crónico del cartílago.',
  obj:'Definir la crepitación articular y su asociación típica con el desgaste del cartílago.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 21.',
  tags:['crepitación','cartílago articular','desgaste articular']
}

]);
