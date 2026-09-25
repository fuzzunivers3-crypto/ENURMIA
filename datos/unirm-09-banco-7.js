/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE FISIOPATOLOGIA (2/2)
   Completa la ampliacion de Fisiopatologia a 50 preguntas junto
   con unirm-09-banco-6.js. Esta parte cubre insuficiencia
   hepatica, fisiopatologia endocrina basica, dolor cronico,
   anemia, diabetes mellitus y sindrome metabolico (temas 8-13).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== FISIOPATOLOGIA ===================== */
{
  id:'U9-FP-Q30', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la insuficiencia hepática', sub:'Encefalopatía hepática',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué mecanismo bioquímico explica la encefalopatía hepática en la insuficiencia hepática?',
  ops:[
    'La reducción de la producción de urea a partir del amoniaco permite que este se acumule en sangre y llegue al cerebro',
    'Un exceso de producción de bilis que se deposita directamente en el cerebro', 'La encefalopatía hepática no tiene ninguna relación con el metabolismo del amoniaco', 'Un aumento excesivo de la síntesis de proteínas plasmáticas por el hígado'],
  ok:0,
  clave:'La reducción de la producción de urea permite que el amoniaco se acumule en sangre y llegue al cerebro, causando encefalopatía.',
  exp:'En la insuficiencia hepática, la producción de urea a partir del amoniaco (ciclo de la urea) se reduce, dejando que el amoniaco se acumule en sangre y llegue al cerebro, produciendo la encefalopatía hepática: confusión, alteración del nivel de conciencia, y en casos severos coma.',
  no:{
    1:'La bilis no es el mecanismo directo de la encefalopatía hepática; el mecanismo central es la acumulación de amoniaco.',
    2:'La encefalopatía hepática tiene una relación directa y bien establecida con la acumulación de amoniaco por falla del ciclo de la urea.',
    3:'En la insuficiencia hepática, la síntesis de proteínas plasmáticas DISMINUYE (no aumenta), y ese no es el mecanismo de la encefalopatía específicamente.'
  },
  trampa:'Atribuir la encefalopatía hepática a un mecanismo incorrecto (bilis, síntesis proteica) en vez de la acumulación de amoniaco por falla del ciclo de la urea.',
  obj:'Explicar el mecanismo bioquímico de la encefalopatía hepática.',
  ref:'Porth, Fisiopatología, cap. 30.',
  tags:['encefalopatía hepática','ciclo de la urea','amoniaco']
},
{
  id:'U9-FP-Q31', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la insuficiencia hepática', sub:'Hipertensión portal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué mecanismo produce la hipertensión portal en la cirrosis hepática?',
  ops:[
    'El tejido cicatricial (fibrosis) reemplaza progresivamente al tejido hepático funcional y distorsiona la arquitectura vascular del hígado, aumentando la resistencia al flujo desde la vena porta',
    'Un aumento directo de la producción de bilis por el hígado cirrótico', 'La hipertensión portal no tiene ninguna relación con la fibrosis hepática', 'Una disminución de la resistencia vascular dentro del hígado cirrótico'],
  ok:0,
  clave:'La fibrosis distorsiona la arquitectura vascular del hígado, aumentando la resistencia al flujo portal.',
  exp:'Cuando el daño hepático es crónico (como en la cirrosis), el tejido cicatricial (fibrosis) reemplaza progresivamente al tejido hepático funcional y distorsiona la arquitectura vascular del hígado, aumentando la resistencia al flujo de sangre que llega desde el intestino por la vena porta: hipertensión portal.',
  no:{
    1:'La producción de bilis no es el mecanismo de la hipertensión portal; el mecanismo central es la distorsión vascular por fibrosis.',
    2:'La hipertensión portal tiene una relación directa y causal con la fibrosis hepática, que distorsiona la arquitectura vascular.',
    3:'Es al revés: la fibrosis AUMENTA la resistencia vascular dentro del hígado, no la disminuye, produciendo así la hipertensión portal.'
  },
  trampa:'Invertir el efecto de la fibrosis sobre la resistencia vascular hepática, o atribuir la hipertensión portal a un mecanismo no vascular.',
  obj:'Explicar el mecanismo de la hipertensión portal en la cirrosis hepática.',
  ref:'Porth, Fisiopatología, cap. 30.',
  tags:['hipertensión portal','cirrosis','fibrosis hepática']
},
{
  id:'U9-FP-Q32', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la insuficiencia hepática', sub:'Várices esofágicas',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las várices esofágicas, formadas como consecuencia de la hipertensión portal, tienen riesgo de romperse y sangrar de forma grave?',
  ops:[
    'Son rutas venosas alternativas que se abren para desviar la sangre evitando el hígado obstruido, pero al estar bajo presión anormalmente alta (por la hipertensión portal), son frágiles y propensas a romperse',
    'Las várices esofágicas nunca tienen ningún riesgo de sangrado', 'Se forman completamente al azar, sin relación con la presión portal', 'Las várices esofágicas son estructuras completamente normales del esófago sano'],
  ok:0,
  clave:'Las várices son rutas venosas alternativas bajo presión anormalmente alta por la hipertensión portal, lo que las hace frágiles y propensas a romperse.',
  exp:'La hipertensión portal abre rutas venosas alternativas (várices, como las esofágicas) para desviar la sangre, evitando el hígado obstruido -rutas que, al estar bajo presión anormalmente alta, tienen riesgo de romperse y sangrar de forma grave, precisamente porque no están diseñadas anatómicamente para soportar ese nivel de presión.',
  no:{
    1:'Las várices esofágicas sí tienen un riesgo real y clínicamente significativo de sangrado grave, precisamente por la presión anormal que soportan.',
    2:'Las várices se forman específicamente como consecuencia directa de la hipertensión portal, no al azar.',
    3:'Las várices esofágicas son una estructura vascular ANORMAL, formada como consecuencia de la hipertensión portal, no una estructura normal del esófago sano.'
  },
  trampa:'No conectar la formación de várices esofágicas con la hipertensión portal, o subestimar su riesgo de sangrado grave.',
  obj:'Explicar por qué las várices esofágicas tienen riesgo de romperse y sangrar en el contexto de hipertensión portal.',
  ref:'Porth, Fisiopatología, cap. 30.',
  tags:['várices esofágicas','hipertensión portal','riesgo de sangrado']
},
{
  id:'U9-FP-Q33', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología endocrina básica', sub:'Tres categorías de disfunción endocrina',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son las tres categorías generales en las que suele clasificarse una enfermedad endocrina?',
  ops:['Producción excesiva, producción insuficiente, o resistencia del tejido diana', 'Solo enfermedades congénitas o solo enfermedades adquiridas', 'Enfermedades del hipotálamo exclusivamente', 'No existe ninguna clasificación general posible para las enfermedades endocrinas'],
  ok:0,
  clave:'Las tres categorías son: producción excesiva, producción insuficiente, o resistencia del tejido diana.',
  exp:'Una enfermedad endocrina generalmente encaja en una de tres categorías: producción EXCESIVA de una hormona, producción INSUFICIENTE (por destrucción de la glándula o de la estructura que la controla), o RESISTENCIA del tejido diana a una hormona que sí está presente en cantidad normal o incluso elevada.',
  no:{
    1:'La clasificación no se basa en si la enfermedad es congénita o adquirida, sino en el tipo de disfunción hormonal (exceso, déficit, resistencia).',
    2:'La clasificación no se limita a enfermedades del hipotálamo; aplica de forma general a cualquier glándula endocrina.',
    3:'Sí existe una clasificación general útil y ampliamente usada: exceso, déficit, o resistencia hormonal.'
  },
  trampa:'No recordar las tres categorías específicas de clasificación de las enfermedades endocrinas.',
  obj:'Recordar las tres categorías generales de disfunción endocrina.',
  ref:'Porth, Fisiopatología, cap. 31.',
  tags:['exceso hormonal','déficit hormonal','resistencia hormonal']
},
{
  id:'U9-FP-Q34', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología endocrina básica', sub:'Hiperinsulinemia compensatoria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ocurre inicialmente en el páncreas cuando las células del cuerpo desarrollan resistencia a la insulina?',
  ops:[
    'El páncreas compensa produciendo más insulina (hiperinsulinemia compensatoria), manteniendo la glucemia relativamente normal al inicio',
    'El páncreas deja de producir insulina por completo de inmediato', 'La resistencia a la insulina no genera ninguna respuesta compensatoria del páncreas', 'La glucemia sube inmediatamente de forma descontrolada desde el primer momento de la resistencia'],
  ok:0,
  clave:'El páncreas compensa inicialmente produciendo más insulina (hiperinsulinemia compensatoria).',
  exp:'Ante la resistencia a la insulina, las células del cuerpo responden menos de lo normal a la insulina circulante, así que necesitan concentraciones más altas de insulina para lograr el mismo efecto. Inicialmente, el páncreas compensa produciendo más insulina (hiperinsulinemia compensatoria); con el tiempo, si esa compensación no basta, la glucemia empieza a subir.',
  no:{
    1:'El páncreas no deja de producir insulina de inmediato; al contrario, inicialmente AUMENTA su producción para compensar.',
    2:'El páncreas sí genera una respuesta compensatoria inicial bien caracterizada: la hiperinsulinemia compensatoria.',
    3:'La glucemia no sube inmediatamente; se mantiene relativamente normal mientras la compensación pancreática es suficiente, subiendo solo cuando esa compensación falla.'
  },
  trampa:'Asumir que la resistencia a la insulina eleva la glucemia de inmediato, sin reconocer la fase inicial de compensación pancreática mediante hiperinsulinemia.',
  obj:'Explicar la respuesta compensatoria inicial del páncreas ante la resistencia a la insulina.',
  ref:'Porth, Fisiopatología, cap. 31.',
  tags:['resistencia a la insulina','hiperinsulinemia compensatoria','páncreas']
},
{
  id:'U9-FP-Q35', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología endocrina básica', sub:'Marco de razonamiento endocrino',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué pregunta conviene hacerse primero ante un trastorno endocrino nuevo, antes de profundizar en la glándula específica involucrada?',
  ops:[
    'En cuál de las tres categorías generales encaja (exceso, déficit, o resistencia hormonal)',
    'Cuál es el color específico de la glándula afectada', 'Cuántos años tiene el paciente exactamente, sin considerar ningún otro dato', 'El marco de razonamiento de exceso/déficit/resistencia no tiene ninguna utilidad práctica'],
  ok:0,
  clave:'Conviene preguntarse primero en cuál de las tres categorías generales (exceso, déficit, resistencia) encaja el trastorno.',
  exp:'Ante cualquier trastorno endocrino nuevo, preguntarse primero en cuál de las tres categorías encaja (exceso, déficit, o resistencia) ayuda a organizar el razonamiento antes de profundizar en la glándula específica involucrada -un marco de razonamiento general aplicable a cualquier enfermedad endocrina.',
  no:{
    1:'El color de la glándula no es un dato relevante para el razonamiento clínico endocrino.',
    2:'La edad puede ser un dato relevante en algunos contextos, pero no es el primer paso del marco de razonamiento sobre exceso/déficit/resistencia.',
    3:'Este marco de razonamiento sí tiene una utilidad práctica clara: organizar el enfoque diagnóstico antes de profundizar en detalles específicos.'
  },
  trampa:'No aplicar el marco de razonamiento general (exceso/déficit/resistencia) como primer paso ante un trastorno endocrino nuevo.',
  obj:'Aplicar el marco de razonamiento de exceso/déficit/resistencia ante un trastorno endocrino nuevo.',
  ref:'Porth, Fisiopatología, cap. 31.',
  tags:['marco de razonamiento endocrino','exceso hormonal','resistencia hormonal']
},
{
  id:'U9-FP-Q36', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología endocrina básica', sub:'Retroalimentación hormonal',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué eje regulador es central para entender la retroalimentación hormonal normal, retomado de Fisiología II?',
  ops:['El eje hipotálamo-hipófisis', 'El eje exclusivamente renal, sin ninguna relación hormonal', 'El eje digestivo-hepático', 'No existe ningún eje regulador de la retroalimentación hormonal'],
  ok:0,
  clave:'El eje hipotálamo-hipófisis es central para la retroalimentación hormonal normal.',
  exp:'Retomando el eje hipotálamo-hipófisis y la retroalimentación hormonal ya vistos en Fisiología II, una enfermedad endocrina generalmente se entiende mejor considerando cómo se altera este eje regulador central, que coordina la producción de múltiples hormonas a través de mecanismos de retroalimentación.',
  no:{
    1:'El eje renal no es el eje central de retroalimentación hormonal endocrina general; ese papel corresponde al eje hipotálamo-hipófisis.',
    2:'El eje digestivo-hepático no es el eje central de retroalimentación hormonal general estudiado en este tema.',
    3:'Sí existe un eje regulador central bien caracterizado: el eje hipotálamo-hipófisis.'
  },
  trampa:'Confundir el eje regulador central de la retroalimentación hormonal con otros ejes fisiológicos no relacionados directamente.',
  obj:'Identificar el eje hipotálamo-hipófisis como central para la retroalimentación hormonal.',
  ref:'Porth, Fisiopatología, cap. 31.',
  tags:['eje hipotálamo-hipófisis','retroalimentación hormonal']
},
{
  id:'U9-FP-Q37', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología del dolor crónico', sub:'Sensibilización central',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el dolor crónico puede persistir, e incluso empeorar, después de que el daño tisular original ya haya sanado por completo?',
  ops:[
    'Por sensibilización central: las neuronas de la médula espinal y el cerebro que procesan el dolor se vuelven más excitables, amplificando la señal incluso sin daño tisular activo',
    'El dolor crónico siempre indica que el daño tisular original nunca sanó realmente', 'El dolor crónico no tiene ninguna explicación fisiopatológica conocida', 'La persistencia del dolor crónico siempre se debe a que el paciente exagera sus síntomas'],
  ok:0,
  clave:'La sensibilización central hace que las neuronas del dolor se vuelvan más excitables, amplificando la señal incluso sin daño tisular activo.',
  exp:'La sensibilización central es un cambio funcional (y a veces estructural) en las neuronas de la médula espinal y el cerebro que procesan el dolor, tras una exposición prolongada o intensa a señales dolorosas: esas neuronas se vuelven más excitables, amplificando la señal de dolor incluso ante estímulos que antes no dolían tanto. Este cambio explica por qué el dolor crónico puede persistir, e incluso empeorar, después de que el daño tisular original ya haya sanado por completo: el problema ya no está en el tejido, está en cómo el sistema nervioso está procesando la señal.',
  no:{
    1:'El dolor crónico puede persistir por sensibilización central AUNQUE el daño tisular original ya haya sanado por completo; no siempre indica daño tisular activo.',
    2:'El dolor crónico sí tiene una explicación fisiopatológica bien caracterizada: la sensibilización central, entre otros mecanismos.',
    3:'La persistencia del dolor crónico tiene un mecanismo fisiológico real y objetivable (sensibilización central), no se debe a que el paciente "exagere" sus síntomas.'
  },
  trampa:'Atribuir la persistencia del dolor crónico a que el daño tisular nunca sanó, o a una exageración del paciente, sin reconocer el mecanismo real de sensibilización central.',
  obj:'Explicar el mecanismo de sensibilización central en la persistencia del dolor crónico.',
  ref:'Porth, Fisiopatología, cap. 35.',
  tags:['sensibilización central','dolor crónico','neuronas del dolor']
},
{
  id:'U9-FP-Q38', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología del dolor crónico', sub:'Hiperalgesia vs. alodinia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre hiperalgesia y alodinia?',
  ops:[
    'La hiperalgesia es una respuesta de dolor exagerada frente a un estímulo que normalmente sí sería doloroso; la alodinia es sentir dolor ante un estímulo que normalmente NO debería doler en absoluto',
    'Ambos términos son exactamente sinónimos', 'La alodinia ocurre solo frente a estímulos que ya eran dolorosos previamente, igual que la hiperalgesia', 'Ninguno de los dos términos tiene relación con la sensibilización central'],
  ok:0,
  clave:'Hiperalgesia: dolor exagerado ante estímulo ya doloroso. Alodinia: dolor ante estímulo que normalmente no duele.',
  exp:'La hiperalgesia es una respuesta de dolor exagerada frente a un estímulo que normalmente sí sería doloroso, pero de intensidad menor a la que se percibe; la alodinia es sentir dolor ante un estímulo que normalmente NO debería doler en absoluto (como el simple roce de la ropa). Ambas son manifestaciones típicas de la sensibilización central.',
  no:{
    1:'Son conceptos relacionados pero distintos: uno amplifica un dolor ya esperado, el otro genera dolor donde normalmente no debería haber ninguno.',
    2:'Es precisamente la diferencia clave: la alodinia ocurre ante estímulos que NORMALMENTE NO son dolorosos, a diferencia de la hiperalgesia.',
    3:'Ambos términos están directamente relacionados con la sensibilización central, siendo sus manifestaciones típicas.'
  },
  trampa:'Confundir la hiperalgesia (amplificación de un dolor esperado) con la alodinia (dolor ante un estímulo normalmente no doloroso).',
  obj:'Distinguir la hiperalgesia de la alodinia como manifestaciones de sensibilización central.',
  ref:'Porth, Fisiopatología, cap. 35.',
  tags:['hiperalgesia','alodinia','sensibilización central']
},
{
  id:'U9-FP-Q39', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología del dolor crónico', sub:'Dolor neuropático',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre el dolor neuropático y el dolor nociceptivo habitual?',
  ops:[
    'El dolor neuropático se origina por daño o disfunción directa del propio sistema nervioso; el dolor nociceptivo se origina por la activación normal de nociceptores frente a un daño tisular real',
    'Ambos tipos de dolor tienen exactamente el mismo origen y responden igual a los analgésicos habituales', 'El dolor neuropático siempre se describe como sordo y difuso, nunca como quemante', 'El dolor nociceptivo se origina siempre por daño del sistema nervioso, nunca por daño tisular'],
  ok:0,
  clave:'El dolor neuropático se origina por daño del propio sistema nervioso; el nociceptivo por activación normal de nociceptores ante daño tisular real.',
  exp:'El dolor neuropático se origina por daño o disfunción directa del propio sistema nervioso (un nervio periférico dañado, una lesión de la médula espinal), a diferencia del dolor nociceptivo habitual, que se origina por la activación normal de nociceptores frente a un daño tisular real. El dolor neuropático suele describirse con calidades distintas (quemante, como choques eléctricos, hormigueo) y responde de forma diferente a los analgésicos habituales.',
  no:{
    1:'Tienen orígenes distintos (daño nervioso directo frente a activación normal de nociceptores) y responden de forma diferente a los analgésicos habituales.',
    2:'El dolor neuropático típicamente SÍ se describe como quemante, con choques eléctricos u hormigueo, no como sordo y difuso.',
    3:'Es al revés: el dolor NOCICEPTIVO se origina por daño tisular real (activando nociceptores normales), y el NEUROPÁTICO por daño del sistema nervioso mismo.'
  },
  trampa:'Invertir el origen del dolor neuropático (daño del sistema nervioso) y del nociceptivo (activación normal de nociceptores por daño tisular real).',
  obj:'Distinguir el dolor neuropático del dolor nociceptivo habitual según su origen.',
  ref:'Porth, Fisiopatología, cap. 35.',
  tags:['dolor neuropático','dolor nociceptivo','daño del sistema nervioso']
},
{
  id:'U9-FP-Q40', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la anemia', sub:'Tres mecanismos de anemia',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son los tres mecanismos generales por los cuales puede desarrollarse una anemia?',
  ops:[
    'Producción insuficiente en la médula ósea, destrucción acelerada de glóbulos rojos (hemólisis), o pérdida de sangre',
    'Exceso de producción de glóbulos rojos, exceso de oxígeno tisular, y exceso de eritropoyetina', 'La anemia solo puede deberse a un único mecanismo posible, sin ninguna variación', 'Aumento del gasto cardíaco exclusivamente, sin relación con la médula ósea ni el sangrado'],
  ok:0,
  clave:'Los tres mecanismos son producción insuficiente, destrucción acelerada (hemólisis), o pérdida de sangre.',
  exp:'La anemia puede deberse a producción insuficiente en la médula ósea (por falta de hierro, vitamina B12, o por enfermedad de la propia médula), destrucción acelerada de glóbulos rojos ya formados (hemólisis), o pérdida de sangre (hemorragia aguda o crónica). Sin importar el mecanismo, el resultado final compartido es hipoxia tisular.',
  no:{
    1:'Es precisamente lo contrario a la anemia: un exceso de glóbulos rojos, oxígeno o eritropoyetina no describe el mecanismo de la anemia (déficit), sino condiciones opuestas.',
    2:'La anemia sí tiene tres mecanismos generales bien identificados y diferenciables entre sí.',
    3:'El aumento del gasto cardíaco es un mecanismo COMPENSADOR de la anemia, no su causa; la causa está en la médula ósea, la hemólisis, o la pérdida de sangre.'
  },
  trampa:'Confundir los mecanismos causales de la anemia con los mecanismos compensadores que el cuerpo activa en respuesta a ella.',
  obj:'Recordar los tres mecanismos generales causantes de anemia.',
  ref:'Porth, Fisiopatología, cap. 15.',
  tags:['anemia','producción insuficiente','hemólisis','pérdida de sangre']
},
{
  id:'U9-FP-Q41', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la anemia', sub:'Anemia gradual vs. aguda',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Dos pacientes tienen el mismo grado de anemia (misma concentración de hemoglobina), pero uno la desarrolló gradualmente por deficiencia crónica de hierro, y el otro la desarrolló súbitamente por una hemorragia aguda.',
  enunciado:'¿Cuál de los dos pacientes probablemente tolera mejor clínicamente su anemia, y por qué?',
  ops:[
    'El paciente con anemia GRADUAL, porque el cuerpo tiene tiempo de activar sus mecanismos compensadores de forma progresiva',
    'El paciente con anemia AGUDA, porque el cuerpo responde mejor a los cambios súbitos', 'Ambos pacientes toleran exactamente igual su anemia, sin ninguna diferencia', 'La velocidad de instauración de la anemia no tiene ninguna relación con su tolerancia clínica'],
  ok:0,
  clave:'El paciente con anemia gradual tolera mejor, porque el cuerpo tiene tiempo de activar sus mecanismos compensadores progresivamente.',
  exp:'Una anemia de instauración GRADUAL (como la ferropénica crónica) suele tolerarse mejor, con menos síntomas, que una del mismo grado pero de instauración AGUDA (como una hemorragia súbita), porque el cuerpo tiene tiempo de activar sus mecanismos compensadores (cardiovascular y eritropoyético) de forma progresiva en el primer caso, no en el segundo.',
  no:{
    1:'Es precisamente lo contrario: el cuerpo responde mejor a cambios GRADUALES, que permiten activar compensación progresiva, no a cambios súbitos.',
    2:'La velocidad de instauración sí marca una diferencia clínica significativa en la tolerancia a la anemia, pese al mismo grado de hemoglobina.',
    3:'La velocidad de instauración tiene una relación directa y bien reconocida con la tolerancia clínica de la anemia.'
  },
  trampa:'Asumir que el grado de anemia (concentración de hemoglobina) por sí solo determina la tolerancia clínica, sin considerar la velocidad de instauración.',
  obj:'Explicar por qué una anemia de instauración gradual se tolera mejor que una aguda del mismo grado.',
  ref:'Porth, Fisiopatología, cap. 15.',
  tags:['anemia gradual','anemia aguda','tolerancia clínica']
},
{
  id:'U9-FP-Q42', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la anemia', sub:'Eritropoyetina',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué órgano detecta la hipoxia tisular en la anemia y aumenta la producción de eritropoyetina, y por qué esta respuesta no sirve como compensación inmediata?',
  ops:[
    'El riñón; esta respuesta tarda días a semanas en aumentar significativamente el conteo de glóbulos rojos',
    'El corazón; esta respuesta es prácticamente inmediata, en segundos', 'El hígado; esta respuesta nunca tiene relación con el conteo de glóbulos rojos', 'Los pulmones; esta respuesta ocurre exclusivamente durante el ejercicio físico'],
  ok:0,
  clave:'El riñón detecta la hipoxia y produce eritropoyetina; esta respuesta tarda días-semanas, no sirve como compensación inmediata.',
  exp:'Ante la hipoxia tisular, el riñón detecta la falta de oxígeno y aumenta la producción de eritropoyetina, la hormona que estimula a la médula ósea a producir más glóbulos rojos. Esta respuesta, sin embargo, tarda días a semanas en aumentar significativamente el conteo de glóbulos rojos, así que no sirve como compensación inmediata -por eso el cuerpo también activa, en paralelo, el mecanismo compensador cardiovascular, mucho más rápido.',
  no:{
    1:'El corazón no es el órgano que produce eritropoyetina; ese papel corresponde al riñón, y la respuesta no es inmediata sino que tarda días-semanas.',
    2:'El hígado no es el órgano principal productor de eritropoyetina en respuesta a la hipoxia; ese papel corresponde al riñón.',
    3:'La producción de eritropoyetina no ocurre exclusivamente durante el ejercicio; es una respuesta a la hipoxia tisular en general, incluida la causada por anemia.'
  },
  trampa:'Confundir el órgano productor de eritropoyetina (riñón) con otros órganos, o asumir que esta respuesta es rápida cuando en realidad tarda días-semanas.',
  obj:'Identificar al riñón como productor de eritropoyetina y explicar por qué esta respuesta no es inmediata.',
  ref:'Porth, Fisiopatología, cap. 15.',
  tags:['eritropoyetina','riñón','hipoxia tisular']
},
{
  id:'U9-FP-Q43', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la diabetes mellitus', sub:'Diabetes tipo 1 vs. tipo 2',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre el mecanismo de la diabetes mellitus tipo 1 y el de la tipo 2?',
  ops:[
    'La tipo 1 resulta de destrucción autoinmune de las células pancreáticas productoras de insulina (déficit ABSOLUTO); la tipo 2 resulta principalmente de resistencia a la insulina combinada con compensación pancreática insuficiente',
    'Ambos tipos de diabetes tienen exactamente el mismo mecanismo subyacente', 'La tipo 1 se debe a resistencia a la insulina, y la tipo 2 a destrucción autoinmune', 'Ninguno de los dos tipos de diabetes tiene relación con la insulina'],
  ok:0,
  clave:'Tipo 1: destrucción autoinmune, déficit absoluto de insulina. Tipo 2: resistencia a la insulina + compensación pancreática insuficiente.',
  exp:'La diabetes mellitus tipo 1 resulta de una destrucción autoinmune de las células del páncreas que producen insulina, resultando en un déficit ABSOLUTO de esta hormona. La diabetes tipo 2 resulta, principalmente, de resistencia a la insulina combinada con una capacidad pancreática insuficiente para compensar esa resistencia con más producción de insulina a largo plazo.',
  no:{
    1:'Tienen mecanismos claramente distintos: destrucción autoinmune (tipo 1) frente a resistencia con compensación insuficiente (tipo 2).',
    2:'Es al revés: la tipo 1 se debe a destrucción autoinmune, y la tipo 2 a resistencia a la insulina, no al contrario.',
    3:'Ambos tipos de diabetes tienen una relación central y directa con la insulina (su ausencia absoluta o la resistencia a su acción, respectivamente).'
  },
  trampa:'Invertir los mecanismos característicos de la diabetes tipo 1 (autoinmune, déficit absoluto) y tipo 2 (resistencia, compensación insuficiente).',
  obj:'Distinguir el mecanismo de la diabetes mellitus tipo 1 del de la tipo 2.',
  ref:'Porth, Fisiopatología, cap. 42.',
  tags:['diabetes tipo 1','diabetes tipo 2','resistencia a la insulina','autoinmunidad']
},
{
  id:'U9-FP-Q44', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la diabetes mellitus', sub:'Mecanismo de la cetoacidosis diabética',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la cetoacidosis diabética ocurre casi exclusivamente cuando falta insulina de forma casi absoluta?',
  ops:[
    'Porque las células, sin poder usar la glucosa disponible por falta de insulina, activan una cetogénesis descontrolada, produciendo una acidosis metabólica grave',
    'La cetoacidosis diabética no tiene ninguna relación con los niveles de insulina', 'La cetoacidosis diabética ocurre típicamente en la diabetes tipo 2 con buena reserva pancreática', 'La cetoacidosis diabética se debe exclusivamente a un exceso de insulina circulante'],
  ok:0,
  clave:'Sin insulina, las células no pueden usar la glucosa disponible y activan cetogénesis descontrolada, causando acidosis metabólica grave.',
  exp:'La cetoacidosis diabética ocurre casi exclusivamente cuando falta insulina de forma casi absoluta (típico de la diabetes tipo 1 no tratada): las células, sin poder usar la glucosa disponible, activan una cetogénesis descontrolada, produciendo una acidosis metabólica grave -ya visto en el tema de beta-oxidación y cuerpos cetónicos de Bioquímica II.',
  no:{
    1:'La cetoacidosis diabética tiene una relación directa y causal con el déficit casi absoluto de insulina.',
    2:'La cetoacidosis diabética es típica de la diabetes TIPO 1 (déficit absoluto de insulina), no de la tipo 2, que generalmente conserva algo de reserva pancreática.',
    3:'Es precisamente lo contrario: la cetoacidosis diabética se debe a un DÉFICIT de insulina, no a un exceso.'
  },
  trampa:'Confundir el mecanismo de la cetoacidosis diabética (déficit absoluto de insulina) con un exceso de insulina, o asociarla incorrectamente con la diabetes tipo 2.',
  obj:'Explicar el mecanismo de la cetoacidosis diabética en el contexto del déficit absoluto de insulina.',
  ref:'Porth, Fisiopatología, cap. 42.',
  tags:['cetoacidosis diabética','déficit de insulina','cetogénesis']
},
{
  id:'U9-FP-Q45', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la diabetes mellitus', sub:'Glucotoxicidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la glucotoxicidad, y por qué el control glucémico sostenido a largo plazo es el objetivo central del tratamiento de la diabetes?',
  ops:[
    'Es el daño acumulado que la hiperglucemia CRÓNICA (no la aguda) va causando en vasos pequeños, nervios periféricos y vasos grandes; por eso el control sostenido, no solo evitar crisis puntuales, es el objetivo central',
    'La glucotoxicidad se refiere exclusivamente al efecto agudo de una sola elevación puntual de la glucosa', 'La glucotoxicidad no tiene relación con ningún daño a largo plazo', 'El control glucémico a largo plazo no tiene ninguna relevancia en el tratamiento de la diabetes'],
  ok:0,
  clave:'La glucotoxicidad es el daño acumulado por hiperglucemia crónica sostenida; por eso el control glucémico a largo plazo es el objetivo central del tratamiento.',
  exp:'La glucotoxicidad describe el daño acumulado que la hiperglucemia crónica y sostenida (no la aguda) va causando en distintos tejidos con el tiempo: los vasos sanguíneos pequeños (retinopatía, nefropatía), los nervios periféricos (neuropatía), y los vasos grandes (acelerando la aterosclerosis). Este daño progresivo y silencioso es, en gran medida, la razón por la que el control glucémico sostenido a largo plazo -no solo evitar una crisis aguda puntual- es el objetivo central del tratamiento de la diabetes.',
  no:{
    1:'La glucotoxicidad se refiere específicamente al daño de la hiperglucemia CRÓNICA sostenida, no a un efecto agudo puntual.',
    2:'La glucotoxicidad tiene una relación directa y central con el daño a largo plazo en múltiples tejidos.',
    3:'El control glucémico a largo plazo es precisamente el objetivo central del tratamiento, dado el daño progresivo que causa la hiperglucemia crónica sostenida.'
  },
  trampa:'Confundir la glucotoxicidad (daño crónico acumulado) con un efecto agudo puntual de la hiperglucemia, subestimando la importancia del control sostenido a largo plazo.',
  obj:'Explicar el concepto de glucotoxicidad y su relación con el objetivo del control glucémico sostenido.',
  ref:'Porth, Fisiopatología, cap. 42.',
  tags:['glucotoxicidad','hiperglucemia crónica','control glucémico']
},
{
  id:'U9-FP-Q46', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la diabetes mellitus', sub:'Integración multidisciplinaria de la diabetes',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se considera que la diabetes mellitus es un buen ejemplo de cómo distintos bloques de estudio convergen en una sola enfermedad real?',
  ops:[
    'Porque conecta Bioquímica II (insulina, glucagón, cetogénesis), Genética Médica (predisposición y herencia multifactorial), Inmunología (autoinmunidad en tipo 1) y Fisiopatología (resistencia a la insulina, glucotoxicidad)',
    'La diabetes mellitus es una enfermedad completamente aislada, sin ninguna relación con otros bloques de estudio', 'Solo tiene relación con la Bioquímica, sin ninguna conexión con Genética o Inmunología', 'No existe ninguna enfermedad que integre conocimientos de múltiples bloques distintos'],
  ok:0,
  clave:'La diabetes conecta Bioquímica II, Genética Médica, Inmunología y Fisiopatología en una sola enfermedad integradora.',
  exp:'Este tema conecta de forma muy directa Bioquímica II (insulina, glucagón, cetogénesis), Genética Médica (predisposición y herencia multifactorial), Inmunología (autoinmunidad en tipo 1) y Fisiopatología (resistencia a la insulina, glucotoxicidad): es, quizás, el mejor ejemplo de todo el programa de cómo distintos bloques convergen en una sola enfermedad real.',
  no:{
    1:'La diabetes mellitus tiene conexiones directas y bien establecidas con múltiples bloques de estudio distintos, no está aislada.',
    2:'La diabetes se conecta con múltiples bloques (Genética, Inmunología, Fisiopatología), no exclusivamente con la Bioquímica.',
    3:'La diabetes mellitus es precisamente un ejemplo de una enfermedad que integra conocimientos de múltiples bloques de estudio distintos.'
  },
  trampa:'No reconocer la naturaleza integradora de la diabetes mellitus como ejemplo de convergencia de múltiples bloques de conocimiento médico.',
  obj:'Explicar por qué la diabetes mellitus integra conocimientos de múltiples bloques de estudio.',
  ref:'Porth, Fisiopatología, cap. 42.',
  tags:['integración multidisciplinaria','diabetes mellitus','convergencia de bloques']
},
{
  id:'U9-FP-Q47', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Síndrome metabólico', sub:'Componentes del síndrome metabólico',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué factores de riesgo cardiovascular se agrupan en la definición del síndrome metabólico?',
  ops:[
    'Obesidad central, presión arterial elevada, glucosa elevada en ayunas, y dislipidemia (triglicéridos elevados, HDL bajo)',
    'Exclusivamente el nivel de colesterol LDL, sin ningún otro factor', 'Solo la presencia de diabetes mellitus tipo 1 diagnosticada', 'El síndrome metabólico no tiene ninguna definición específica de sus componentes'],
  ok:0,
  clave:'El síndrome metabólico agrupa obesidad central, presión arterial elevada, glucosa elevada en ayunas, y dislipidemia característica.',
  exp:'El síndrome metabólico se define por la presencia conjunta de varios factores de riesgo cardiovascular en la misma persona: obesidad central (grasa acumulada preferentemente en el abdomen), presión arterial elevada, glucosa elevada en ayunas, y dislipidemia característica: triglicéridos elevados y colesterol HDL bajo.',
  no:{
    1:'El LDL no es el componente característico de la dislipidemia del síndrome metabólico; los componentes típicos son triglicéridos elevados y HDL bajo.',
    2:'El síndrome metabólico no se define por la presencia de diabetes tipo 1 diagnosticada; se define por un conjunto distinto de factores de riesgo.',
    3:'El síndrome metabólico sí tiene una definición específica y bien establecida de sus componentes.'
  },
  trampa:'Confundir los componentes específicos del síndrome metabólico con otros parámetros lipídicos o con el diagnóstico de diabetes tipo 1.',
  obj:'Recordar los componentes que definen el síndrome metabólico.',
  ref:'Porth, Fisiopatología, cap. 42.',
  tags:['síndrome metabólico','obesidad central','dislipidemia']
},
{
  id:'U9-FP-Q48', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Síndrome metabólico', sub:'Resistencia insulínica como hilo conductor',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se considera a la resistencia insulínica el "hilo conductor" que conecta los distintos componentes del síndrome metabólico?',
  ops:[
    'Porque la obesidad central (especialmente grasa visceral) contribuye directamente a la resistencia a la insulina, que a su vez favorece la elevación de glucosa, alteraciones lipídicas, y contribuye a la presión arterial elevada',
    'La resistencia insulínica no tiene ninguna relación con los demás componentes del síndrome metabólico', 'Cada componente del síndrome metabólico tiene un origen completamente independiente y sin conexión con los demás', 'La resistencia insulínica solo afecta el nivel de glucosa, sin ninguna relación con los lípidos o la presión arterial'],
  ok:0,
  clave:'La obesidad central contribuye a la resistencia insulínica, que a su vez favorece elevación de glucosa, alteraciones lipídicas y presión arterial elevada.',
  exp:'La resistencia insulínica es considerada el factor subyacente que conecta a la mayoría de los componentes del síndrome metabólico: la obesidad central (especialmente la grasa visceral) contribuye directamente a la resistencia a la insulina, que a su vez favorece tanto la elevación de la glucosa como alteraciones específicas en el metabolismo de los lípidos y, por mecanismos adicionales, contribuye también a la elevación de la presión arterial.',
  no:{
    1:'La resistencia insulínica tiene una relación directa y central con los demás componentes del síndrome metabólico, siendo precisamente su hilo conductor.',
    2:'Los componentes del síndrome metabólico NO son independientes entre sí; comparten un mecanismo subyacente común, la resistencia insulínica.',
    3:'La resistencia insulínica afecta múltiples sistemas simultáneamente: glucosa, lípidos, y por mecanismos adicionales, también la presión arterial.'
  },
  trampa:'Tratar los componentes del síndrome metabólico como fenómenos independientes, sin reconocer el mecanismo subyacente compartido de resistencia insulínica.',
  obj:'Explicar por qué la resistencia insulínica conecta los distintos componentes del síndrome metabólico.',
  ref:'Porth, Fisiopatología, cap. 42.',
  tags:['resistencia insulínica','síndrome metabólico','obesidad visceral']
},
{
  id:'U9-FP-Q49', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Síndrome metabólico', sub:'Un desequilibrio, múltiples manifestaciones',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se afirma que tener síndrome metabólico "no es tener varias enfermedades separadas por coincidencia"?',
  ops:[
    'Porque es un único desequilibrio metabólico central (la resistencia a la insulina, potenciada por la obesidad central) que se manifiesta simultáneamente en varios sistemas del cuerpo a la vez',
    'Porque en realidad cada componente del síndrome metabólico es completamente independiente y no comparte ningún mecanismo', 'El síndrome metabólico es, de hecho, una coincidencia estadística sin ningún mecanismo fisiopatológico compartido', 'Esta afirmación no tiene ningún fundamento fisiopatológico real'],
  ok:0,
  clave:'Es un único desequilibrio metabólico central (resistencia insulínica, potenciada por obesidad central) que se manifiesta simultáneamente en varios sistemas.',
  exp:'Tener síndrome metabólico no es tener varias enfermedades separadas por coincidencia: es tener un único desequilibrio metabólico central (la resistencia a la insulina, potenciada por la obesidad central) que se manifiesta simultáneamente en varios sistemas del cuerpo a la vez, y que aumenta de forma significativa el riesgo de desarrollar tanto diabetes tipo 2 franca como enfermedad cardiovascular.',
  no:{
    1:'Es precisamente lo contrario: los componentes del síndrome metabólico SÍ comparten un mecanismo fisiopatológico común, la resistencia insulínica.',
    2:'El síndrome metabólico no es una coincidencia estadística; tiene un mecanismo fisiopatológico compartido bien caracterizado.',
    3:'Esta afirmación sí tiene un fundamento fisiopatológico real y bien establecido: la resistencia insulínica como mecanismo unificador.'
  },
  trampa:'No reconocer el principio unificador (resistencia insulínica) que explica por qué los componentes del síndrome metabólico no son una simple coincidencia de enfermedades separadas.',
  obj:'Explicar por qué el síndrome metabólico representa un único desequilibrio, no varias enfermedades separadas por coincidencia.',
  ref:'Porth, Fisiopatología, cap. 42.',
  tags:['síndrome metabólico','desequilibrio metabólico único','riesgo cardiovascular']
},
{
  id:'U9-FP-Q50', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Síndrome metabólico', sub:'Mecanismos fisiopatológicos compartidos',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué principio integrador cierra el bloque completo de Fisiopatología, según lo mostrado por el síndrome metabólico?',
  ops:[
    'Muchas enfermedades que parecen distintas entre sí (hipertensión, diabetes, dislipidemia, insuficiencia cardíaca) comparten mecanismos fisiopatológicos comunes, y entender esos mecanismos compartidos es más útil que memorizar cada enfermedad como un compartimento aislado',
    'Cada enfermedad estudiada en Fisiopatología debe memorizarse de forma completamente aislada, sin buscar ninguna conexión entre ellas', 'No existe ningún principio integrador que conecte los distintos temas del bloque de Fisiopatología', 'Solo las enfermedades cardiovasculares comparten mecanismos entre sí; las demás son completamente independientes'],
  ok:0,
  clave:'Muchas enfermedades aparentemente distintas comparten mecanismos fisiopatológicos comunes; entender esos mecanismos compartidos es más útil que memorizar cada enfermedad aislada.',
  exp:'Este tema cierra el bloque completo de Fisiopatología con un mensaje central que atraviesa casi todos los temas anteriores: muchas enfermedades que parecen distintas entre sí (hipertensión, diabetes, dislipidemia, insuficiencia cardíaca) comparten mecanismos fisiopatológicos comunes, y entender esos mecanismos compartidos es más útil que memorizar cada enfermedad como un compartimento aislado.',
  no:{
    1:'Es precisamente lo contrario: el mensaje central es reconocer las CONEXIONES entre enfermedades, no memorizarlas de forma completamente aislada.',
    2:'Sí existe un principio integrador central que conecta los distintos temas del bloque, precisamente ejemplificado por el síndrome metabólico.',
    3:'El principio de mecanismos compartidos se extiende más allá de las enfermedades cardiovasculares, incluyendo trastornos endocrinos y metabólicos relacionados.'
  },
  trampa:'No reconocer el mensaje integrador central del bloque de Fisiopatología: la conexión de mecanismos compartidos entre enfermedades aparentemente distintas.',
  obj:'Sintetizar el principio integrador que cierra el bloque completo de Fisiopatología.',
  ref:'Porth, Fisiopatología, cap. 42.',
  tags:['principio integrador','mecanismos fisiopatológicos compartidos','síntesis del bloque']
}

]);
