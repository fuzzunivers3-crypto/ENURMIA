/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 11, TANDA DE PATOLOGÍA
   INFECCIOSA (2/2)
   Continua el prefijo U11-PI- desde Q27. Cubre los ultimos 6
   temas: dengue/zika/chikungunya, enfermedades parasitarias,
   infecciones micoticas, sepsis, uso de antimicrobianos, y
   enfermedades de notificacion obligatoria en RD (Q27-Q50).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U11-PI-Q27', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Dengue, zika y chikungunya', sub:'Vector común de las tres arbovirosis',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué mosquito transmite principalmente el dengue, el zika y el chikungunya?',
  ops:[
    'Aedes aegypti', 'Anopheles, siendo este el vector principal de las tres arbovirosis descritas en este tema', 'Estas tres enfermedades no tienen ningún vector común identificado en la literatura infectológica', 'Culex, siendo este el mosquito responsable de la transmisión de dengue, zika y chikungunya'],
  ok:0,
  clave:'Aedes aegypti.',
  exp:'Las arbovirosis dengue, zika y chikungunya son transmitidas principalmente por el mismo mosquito vector, Aedes aegypti, lo que explica su distribución geográfica superpuesta en climas cálidos y tropicales.',
  no:{
    1:'Anopheles es el vector de la malaria, no de estas tres arbovirosis (dengue, zika, chikungunya).',
    2:'Estas tres enfermedades sí comparten un vector común identificado: Aedes aegypti.',
    3:'Culex no es el vector principal de estas tres arbovirosis; el vector es Aedes aegypti.'
  },
  trampa:'Confundir el vector de estas tres arbovirosis (Aedes aegypti) con el vector de la malaria (Anopheles), vista más adelante en este bloque.',
  obj:'Identificar el mosquito vector común del dengue, zika y chikungunya.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 156.',
  tags:['arbovirosis','vector común Aedes aegypti']
},
{
  id:'U11-PI-Q28', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Dengue, zika y chikungunya', sub:'Momento de mayor riesgo de progresión del dengue',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué momento del curso clínico del dengue típicamente aparecen los signos de alarma, y por qué es clínicamente relevante saberlo?',
  ops:[
    'Alrededor de la caída de la fiebre, un momento crítico que exige vigilancia particularmente cercana por el mayor riesgo de progresión hacia dengue grave', 'Los signos de alarma del dengue siempre aparecen exclusivamente durante el pico febril más alto de la enfermedad', 'Los signos de alarma del dengue nunca tienen ninguna relación real con ningún momento específico del curso clínico', 'Los signos de alarma aparecen siempre varias semanas después de la resolución completa del cuadro febril agudo'],
  ok:0,
  clave:'Alrededor de la caída de la fiebre, un momento crítico que exige vigilancia particularmente cercana por el mayor riesgo de progresión hacia dengue grave.',
  exp:'Los signos de alarma del dengue típicamente aparecen alrededor de la caída de la fiebre, un momento crítico que exige vigilancia particularmente cercana, ya que es precisamente cuando el riesgo de progresión hacia dengue grave es mayor.',
  no:{
    1:'Es precisamente lo contrario: los signos de alarma aparecen alrededor de la CAÍDA de la fiebre, no durante el pico febril.',
    2:'Los signos de alarma sí tienen una relación directa con un momento específico y clínicamente relevante del curso.',
    3:'Los signos de alarma aparecen en un momento cercano a la caída de la fiebre, no semanas después de resuelto el cuadro.'
  },
  trampa:'Asumir que el momento de mayor riesgo de progresión del dengue coincide con el pico febril, en vez de con la caída de la fiebre.',
  obj:'Explicar el momento clínico de mayor riesgo de progresión del dengue hacia una forma grave.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 156.',
  tags:['signos de alarma del dengue','momento de mayor riesgo']
},
{
  id:'U11-PI-Q29', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Dengue, zika y chikungunya', sub:'Relevancia particular del zika durante el embarazo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el zika tiene una relevancia particular durante el embarazo?',
  ops:[
    'Por su asociación documentada con microcefalia y otras alteraciones del desarrollo fetal cuando la infección ocurre en una gestante', 'El zika nunca tiene ninguna relación real con el embarazo ni con el desarrollo fetal de ningún tipo', 'El zika durante el embarazo siempre genera un cuadro clínico más grave en la madre que en una mujer no gestante', 'La relevancia del zika durante el embarazo es exactamente la misma que la del dengue o el chikungunya en ese contexto'],
  ok:0,
  clave:'Por su asociación documentada con microcefalia y otras alteraciones del desarrollo fetal cuando la infección ocurre en una gestante.',
  exp:'El zika tiene una relevancia particular durante el embarazo por su asociación documentada con microcefalia y otras alteraciones del desarrollo fetal cuando la infección ocurre en una gestante, retomando la conexión con infecciones en el embarazo ya vistas en Obstetricia I.',
  no:{
    1:'El zika sí tiene una relación documentada y relevante con el desarrollo fetal cuando ocurre durante el embarazo.',
    2:'La relevancia particular del zika en el embarazo se refiere al feto, no necesariamente a una mayor gravedad materna.',
    3:'El zika tiene una relevancia particular específica (microcefalia fetal) distinta de la del dengue o el chikungunya en el embarazo.'
  },
  trampa:'Subestimar la relevancia específica del zika durante el embarazo, o asumir que es equivalente a la del dengue o chikungunya en ese contexto.',
  obj:'Explicar la relevancia particular del zika durante el embarazo por su asociación con microcefalia fetal.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 156.',
  tags:['dengue','zika y relevancia en el embarazo']
},
{
  id:'U11-PI-Q30', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Dengue, zika y chikungunya', sub:'Característica distintiva del chikungunya',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica clínica distingue particularmente al chikungunya del dengue y el zika?',
  ops:[
    'Un dolor articular particularmente intenso y con frecuencia incapacitante, que puede persistir durante semanas o meses tras la fase aguda', 'El chikungunya nunca presenta ningún síntoma articular diferenciable del dengue o el zika en su presentación clínica', 'El chikungunya se caracteriza exclusivamente por síntomas oculares, sin ninguna relación con dolor articular', 'El dolor articular del chikungunya siempre se resuelve por completo en menos de 24 horas tras la fase aguda'],
  ok:0,
  clave:'Un dolor articular particularmente intenso y con frecuencia incapacitante, que puede persistir durante semanas o meses tras la fase aguda.',
  exp:'El chikungunya se distingue clínicamente por un dolor articular particularmente intenso y con frecuencia incapacitante, que en una proporción de los casos puede persistir durante semanas o meses después de la resolución del cuadro agudo febril.',
  no:{
    1:'El chikungunya sí tiene un síntoma articular particularmente distintivo, útil para diferenciarlo de dengue y zika.',
    2:'El chikungunya se caracteriza principalmente por dolor articular intenso, no por síntomas oculares exclusivos.',
    3:'Es precisamente lo contrario: el dolor articular del chikungunya puede persistir SEMANAS O MESES, no resolverse en 24 horas.'
  },
  trampa:'Subestimar la persistencia característica del dolor articular del chikungunya más allá de la fase aguda febril.',
  obj:'Identificar la característica clínica distintiva del chikungunya frente al dengue y el zika.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 156.',
  tags:['arbovirosis','característica distintiva del chikungunya']
},
{
  id:'U11-PI-Q31', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Enfermedades parasitarias', sub:'Relación entre parasitosis intestinal y saneamiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la prevalencia de parasitosis intestinal está estrechamente ligada al acceso a agua potable y saneamiento?',
  ops:[
    'Porque el ambiente (saneamiento deficiente) facilita significativamente la transmisión, independientemente de las características individuales del huésped, retomando la tríada epidemiológica', 'La parasitosis intestinal nunca tiene ninguna relación real con las condiciones de saneamiento o el acceso a agua potable', 'El acceso a agua potable y saneamiento adecuado siempre aumenta, en vez de reducir, el riesgo de parasitosis intestinal', 'La prevalencia de parasitosis intestinal depende exclusivamente de factores genéticos individuales, sin relación ambiental'],
  ok:0,
  clave:'Porque el ambiente (saneamiento deficiente) facilita significativamente la transmisión, independientemente de las características individuales del huésped, retomando la tríada epidemiológica.',
  exp:'La prevalencia de parasitosis intestinal está estrechamente ligada al acceso a agua potable y a condiciones de saneamiento, retomando la tríada epidemiológica: el ambiente (saneamiento deficiente) facilita significativamente la transmisión, independientemente del huésped.',
  no:{
    1:'Es precisamente lo contrario: la parasitosis intestinal SÍ tiene una relación estrecha con el saneamiento y el agua potable.',
    2:'Es precisamente lo contrario: un mejor acceso a agua potable y saneamiento REDUCE, no aumenta, el riesgo de parasitosis.',
    3:'La prevalencia depende principalmente de factores ambientales (saneamiento), no exclusivamente de factores genéticos individuales.'
  },
  trampa:'Atribuir la prevalencia de parasitosis intestinal a factores individuales, sin reconocer el rol central del ambiente (saneamiento).',
  obj:'Explicar la relación entre la prevalencia de parasitosis intestinal y las condiciones de saneamiento.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 283.',
  tags:['parasitosis intestinal','relación con saneamiento']
},
{
  id:'U11-PI-Q32', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Enfermedades parasitarias', sub:'Presentación característica de la malaria',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se presenta característicamente la malaria?',
  ops:[
    'Episodios de fiebre, con frecuencia siguiendo un patrón cíclico según la especie de Plasmodium, acompañados de escalofríos intensos y sudoración profusa', 'Dolor articular intenso y persistente, sin ningún componente febril asociado a esta presentación clínica', 'Exantema vesicular en distintas etapas de evolución simultáneas, sin ningún componente febril cíclico', 'La malaria no tiene ninguna presentación clínica característica reconocida en la práctica infectológica'],
  ok:0,
  clave:'Episodios de fiebre, con frecuencia siguiendo un patrón cíclico según la especie de Plasmodium, acompañados de escalofríos intensos y sudoración profusa.',
  exp:'La malaria se presenta característicamente con episodios de fiebre, con frecuencia siguiendo un patrón cíclico según la especie de Plasmodium involucrada, acompañados de escalofríos intensos y sudoración profusa.',
  no:{
    1:'Esta descripción corresponde más al chikungunya, no a la presentación característica de la malaria (que sí tiene fiebre).',
    2:'Esta descripción corresponde a la varicela, no a la presentación característica de la malaria.',
    3:'La malaria sí tiene una presentación clínica característica bien reconocida en la práctica infectológica.'
  },
  trampa:'Confundir la presentación característica de la malaria con la de otras enfermedades infecciosas ya vistas en este bloque.',
  obj:'Identificar la presentación clínica característica de la malaria.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 283.',
  tags:['malaria','presentación característica']
},
{
  id:'U11-PI-Q33', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Enfermedades parasitarias', sub:'Importancia de considerar el contexto de viaje',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente consulta por fiebre y refiere haber viajado recientemente a una zona endémica de malaria.',
  enunciado:'¿Qué principio de este tema debe guiar la evaluación de este paciente?',
  ops:[
    'Considerar activamente la malaria en el diagnóstico diferencial, retomando la importancia del contexto epidemiológico específico ya vista en fiebre de origen desconocido', 'El antecedente de viaje a una zona endémica nunca debería influir en el diagnóstico diferencial de un paciente con fiebre', 'La malaria solo debe considerarse si el paciente presenta exactamente el patrón cíclico clásico completo de fiebre desde el inicio', 'El contexto de viaje reciente a una zona endémica nunca tiene ninguna relevancia real para la evaluación clínica'],
  ok:0,
  clave:'Considerar activamente la malaria en el diagnóstico diferencial, retomando la importancia del contexto epidemiológico específico ya vista en fiebre de origen desconocido.',
  exp:'El reconocimiento de zonas de riesgo de malaria, y la consideración de esta enfermedad en el diagnóstico diferencial ante un paciente con fiebre y antecedente de viaje a un área endémica, retoma la importancia del contexto epidemiológico específico ya vista en fiebre de origen desconocido.',
  no:{
    1:'Es precisamente lo contrario: el antecedente de viaje SÍ debería influir activamente en el diagnóstico diferencial.',
    2:'La malaria debe considerarse ante la sospecha clínica y el antecedente epidemiológico, no solo con el patrón cíclico ya establecido.',
    3:'El contexto de viaje reciente sí tiene una relevancia real y directa para orientar la evaluación clínica de este paciente.'
  },
  trampa:'Ignorar el antecedente de viaje a una zona endémica de malaria al evaluar a un paciente con fiebre, o exigir el patrón cíclico completo antes de sospechar el diagnóstico.',
  obj:'Aplicar la importancia del contexto epidemiológico de viaje en la sospecha diagnóstica de malaria.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 283.',
  tags:['malaria','importancia del contexto de viaje']
},
{
  id:'U11-PI-Q34', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Enfermedades parasitarias', sub:'Por qué entender el ciclo de vida del parásito es clínicamente útil',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué entender el ciclo de vida específico de un parásito no es un ejercicio puramente académico?',
  ops:[
    'Porque es la base que permite tanto el diagnóstico clínico correcto como las medidas de prevención específicas más efectivas para interrumpir ese ciclo particular', 'Entender el ciclo de vida de un parásito nunca tiene ninguna utilidad práctica real más allá del interés académico teórico', 'El diagnóstico clínico de una helmintiasis nunca depende de comprender el ciclo de vida específico del parásito involucrado', 'Las medidas de prevención de una infección parasitaria nunca dependen de conocer el ciclo de vida específico del parásito'],
  ok:0,
  clave:'Porque es la base que permite tanto el diagnóstico clínico correcto como las medidas de prevención específicas más efectivas para interrumpir ese ciclo particular.',
  exp:'Entender el ciclo de vida específico de un parásito -dónde vive, cómo se transmite, qué órganos afecta- es la base que permite tanto el diagnóstico clínico correcto como las medidas de prevención específicas más efectivas para interrumpir ese ciclo.',
  no:{
    1:'Comprender el ciclo de vida sí tiene una utilidad práctica real, más allá del interés puramente académico.',
    2:'El diagnóstico clínico correcto sí depende, en gran medida, de comprender el ciclo de vida específico del parásito.',
    3:'Las medidas de prevención específicas sí dependen directamente de conocer el ciclo de vida particular del parásito.'
  },
  trampa:'Considerar el estudio del ciclo de vida de los parásitos como un ejercicio meramente académico, sin reconocer su utilidad clínica práctica.',
  obj:'Explicar la utilidad clínica práctica de comprender el ciclo de vida específico de un parásito.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 283.',
  tags:['helmintiasis','utilidad del ciclo de vida del parásito']
},
{
  id:'U11-PI-Q35', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Infecciones micóticas', sub:'Grupo de infecciones micóticas más frecuente',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el grupo de infecciones micóticas más frecuente en la práctica clínica general?',
  ops:[
    'La micosis superficial', 'La micosis sistémica, siendo este el grupo de infecciones micóticas más frecuente en la práctica clínica general', 'La candidiasis invasiva, siendo esta la forma más frecuente de infección micótica en la población general', 'Las infecciones micóticas nunca han sido clasificadas en ningún grupo específico según su frecuencia clínica'],
  ok:0,
  clave:'La micosis superficial.',
  exp:'La micosis superficial -infecciones fúngicas limitadas a la piel, el cabello, las uñas, o las mucosas superficiales- es el grupo de infecciones micóticas más frecuente en la práctica clínica general.',
  no:{
    1:'Es precisamente lo contrario: la micosis SUPERFICIAL, no la sistémica, es el grupo más frecuente en la práctica general.',
    2:'La candidiasis invasiva es una forma grave y menos frecuente, no la más común en la población general.',
    3:'Las infecciones micóticas sí se clasifican en grupos según su frecuencia y localización, bien reconocidos clínicamente.'
  },
  trampa:'Confundir la micosis sistémica o la candidiasis invasiva, ambas menos frecuentes y más graves, con el grupo más común de infecciones micóticas.',
  obj:'Identificar el grupo de infecciones micóticas más frecuente en la práctica clínica general.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 256.',
  tags:['micosis superficial','grupo más frecuente']
},
{
  id:'U11-PI-Q36', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Infecciones micóticas', sub:'Distinción entre micosis sistémica en inmunocompetentes e inmunocomprometidos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué distinción es relevante entre las micosis sistémicas que ocurren en personas inmunocompetentes y las que ocurren en personas inmunocomprometidas?',
  ops:[
    'Algunas micosis sistémicas ocurren en personas con sistema inmune normal en contextos epidemiológicos específicos, mientras otras ocurren casi exclusivamente en personas inmunocomprometidas', 'Todas las micosis sistémicas ocurren exclusivamente en personas con un sistema inmune completamente normal, sin ninguna excepción', 'Todas las micosis sistémicas ocurren exclusivamente en personas inmunocomprometidas, sin ninguna excepción posible', 'Esta distinción nunca tiene ninguna relevancia clínica real para orientar la sospecha diagnóstica de una micosis sistémica'],
  ok:0,
  clave:'Algunas micosis sistémicas ocurren en personas con sistema inmune normal en contextos epidemiológicos específicos, mientras otras ocurren casi exclusivamente en personas inmunocomprometidas.',
  exp:'Algunas micosis sistémicas ocurren en personas con sistema inmune normal en contextos epidemiológicos específicos, mientras otras ocurren casi exclusivamente en personas con compromiso significativo del sistema inmune, ayudando a orientar la sospecha diagnóstica según el contexto clínico.',
  no:{
    1:'No todas ocurren exclusivamente en personas inmunocompetentes; algunas requieren compromiso inmunológico significativo.',
    2:'No todas ocurren exclusivamente en personas inmunocomprometidas; algunas ocurren en personas inmunocompetentes en contextos específicos.',
    3:'Esta distinción sí tiene relevancia clínica real, ayudando a orientar la sospecha diagnóstica según el contexto del paciente.'
  },
  trampa:'Asumir que todas las micosis sistémicas ocurren exclusivamente en un solo tipo de huésped (inmunocompetente o inmunocomprometido).',
  obj:'Distinguir las micosis sistémicas que ocurren en personas inmunocompetentes de las que ocurren en inmunocomprometidas.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 256.',
  tags:['micosis sistémica','distinción según estado inmunológico']
},
{
  id:'U11-PI-Q37', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Infecciones micóticas', sub:'Factores de riesgo de candidiasis invasiva',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente hospitalizado, con un catéter venoso central de larga duración, en tratamiento con antibióticos de amplio espectro durante varias semanas, desarrolla fiebre persistente sin causa bacteriana identificada.',
  enunciado:'¿Qué diagnóstico debe considerarse activamente en este paciente, según lo visto en este tema?',
  ops:[
    'Candidiasis invasiva, dado que presenta varios factores de riesgo característicos: dispositivo invasivo prolongado y uso prolongado de antibióticos de amplio espectro', 'Micosis superficial, ya que los factores de riesgo descritos son característicos exclusivamente de esta forma leve de infección micótica', 'Ningún diagnóstico micótico debe considerarse en este caso, ya que la fiebre sin causa bacteriana nunca orienta hacia hongos', 'Los factores de riesgo descritos en este caso no tienen ninguna relación real con ningún tipo de infección micótica'],
  ok:0,
  clave:'Candidiasis invasiva, dado que presenta varios factores de riesgo característicos: dispositivo invasivo prolongado y uso prolongado de antibióticos de amplio espectro.',
  exp:'La candidiasis invasiva ocurre característicamente en pacientes hospitalizados con factores de riesgo específicos: dispositivos invasivos prolongados (como catéteres) y uso prolongado de antibióticos de amplio espectro -exactamente los factores presentes en este caso.',
  no:{
    1:'Los factores de riesgo descritos (catéter, antibióticos prolongados) son característicos de candidiasis invasiva, no de micosis superficial.',
    2:'Es precisamente lo contrario: ante estos factores de riesgo específicos, SÍ debe considerarse activamente una causa micótica.',
    3:'Estos factores de riesgo sí tienen una relación directa y bien documentada con el desarrollo de candidiasis invasiva.'
  },
  trampa:'No considerar una causa micótica sistémica ante fiebre persistente sin causa bacteriana en un paciente con factores de riesgo característicos.',
  obj:'Aplicar el reconocimiento de los factores de riesgo de candidiasis invasiva en un caso clínico.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 256.',
  tags:['candidiasis invasiva','factores de riesgo']
},
{
  id:'U11-PI-Q38', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Sepsis', sub:'Definición actual de sepsis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se define actualmente la sepsis?',
  ops:[
    'Una disfunción orgánica potencialmente mortal causada por una respuesta desregulada del huésped frente a una infección', 'Cualquier infección con signos de inflamación sistémica, sin ninguna consideración adicional sobre disfunción de órganos', 'La sepsis se define exclusivamente por la presencia de fiebre elevada, sin ninguna otra consideración clínica', 'La sepsis no tiene ninguna definición clínica específica reconocida actualmente en la práctica médica'],
  ok:0,
  clave:'Una disfunción orgánica potencialmente mortal causada por una respuesta desregulada del huésped frente a una infección.',
  exp:'La sepsis se define actualmente como una disfunción orgánica potencialmente mortal causada por una respuesta desregulada del huésped frente a una infección, un cambio conceptual respecto a definiciones anteriores centradas solo en inflamación sistémica.',
  no:{
    1:'Es precisamente lo contrario: la definición actual exige evidencia de DISFUNCIÓN ORGÁNICA, no solo signos de inflamación sistémica.',
    2:'La fiebre elevada por sí sola no define la sepsis; se requiere evidencia de disfunción orgánica asociada a la infección.',
    3:'La sepsis sí tiene una definición clínica actual específica y bien establecida en la práctica médica.'
  },
  trampa:'Confundir la definición actual de sepsis (centrada en disfunción orgánica) con criterios anteriores basados solo en inflamación sistémica o fiebre.',
  obj:'Definir la sepsis según el concepto actual centrado en disfunción orgánica.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 75.',
  tags:['sepsis','definición actual']
},
{
  id:'U11-PI-Q39', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Sepsis', sub:'Origen del daño en la sepsis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿De dónde proviene principalmente el daño en la sepsis, según el matiz conceptual visto en este tema?',
  ops:[
    'No proviene únicamente del agente infeccioso en sí mismo, sino de la propia respuesta del huésped frente a esa infección, que se vuelve desregulada y dañina', 'El daño en la sepsis proviene exclusivamente del agente infeccioso, sin ninguna participación real de la respuesta del huésped', 'La respuesta del huésped frente a una infección siempre es protectora, sin ningún riesgo real de volverse dañina', 'El daño en la sepsis nunca tiene ninguna relación real con la respuesta inmunológica del propio paciente afectado'],
  ok:0,
  clave:'No proviene únicamente del agente infeccioso en sí mismo, sino de la propia respuesta del huésped frente a esa infección, que se vuelve desregulada y dañina.',
  exp:'En la sepsis, el daño no proviene únicamente del agente infeccioso en sí mismo, sino de la propia respuesta del huésped frente a esa infección, que en vez de ser protectora se vuelve desregulada y dañina para los propios órganos del paciente.',
  no:{
    1:'Es precisamente lo contrario: el daño proviene, en gran medida, de la respuesta DESREGULADA del propio huésped.',
    2:'Es precisamente lo contrario: en la sepsis, la respuesta del huésped se vuelve DESREGULADA y dañina, no protectora.',
    3:'El daño en la sepsis sí tiene una relación directa con la respuesta inmunológica desregulada del propio paciente.'
  },
  trampa:'Atribuir el daño de la sepsis exclusivamente al agente infeccioso, sin reconocer el rol central de la respuesta desregulada del huésped.',
  obj:'Explicar el origen del daño orgánico en la sepsis según la respuesta desregulada del huésped.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 75.',
  tags:['sepsis','origen del daño en la respuesta del huésped']
},
{
  id:'U11-PI-Q40', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Sepsis', sub:'Qué define al choque séptico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué caracteriza clínicamente al choque séptico?',
  ops:[
    'La necesidad de soporte vasopresor para mantener una presión arterial adecuada, a pesar de una reposición de líquidos apropiada, junto con evidencia de hipoperfusión tisular', 'El choque séptico se caracteriza exclusivamente por la presencia de fiebre elevada, sin ninguna otra consideración hemodinámica', 'El choque séptico nunca requiere ningún tipo de soporte vasopresor para el manejo de la presión arterial del paciente', 'El choque séptico es un subgrupo de sepsis con menor riesgo de mortalidad que la sepsis sin choque asociado'],
  ok:0,
  clave:'La necesidad de soporte vasopresor para mantener una presión arterial adecuada, a pesar de una reposición de líquidos apropiada, junto con evidencia de hipoperfusión tisular.',
  exp:'El choque séptico se caracteriza clínicamente por la necesidad de soporte vasopresor para mantener una presión arterial adecuada, a pesar de una reposición de líquidos apropiada, junto con evidencia de hipoperfusión tisular (como niveles elevados de lactato).',
  no:{
    1:'La fiebre por sí sola no define el choque séptico; se requiere evidencia hemodinámica y de hipoperfusión específica.',
    2:'Es precisamente lo contrario: el choque séptico SÍ requiere soporte vasopresor cuando la reposición de líquidos no es suficiente.',
    3:'Es precisamente lo contrario: el choque séptico tiene un riesgo de mortalidad MAYOR, no menor, que la sepsis sin choque.'
  },
  trampa:'Reducir la definición de choque séptico a la sola presencia de fiebre, o subestimar su mayor riesgo de mortalidad frente a la sepsis sin choque.',
  obj:'Definir las características clínicas que distinguen al choque séptico.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 75.',
  tags:['choque séptico','características clínicas']
},
{
  id:'U11-PI-Q41', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Sepsis', sub:'Parámetros de los criterios de qSOFA',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué tres parámetros clínicos evalúan los criterios de qSOFA?',
  ops:[
    'Alteración del estado mental, frecuencia respiratoria elevada, y presión arterial sistólica baja', 'Únicamente la temperatura corporal, sin ningún otro parámetro adicional considerado en este criterio', 'Solo el conteo de leucocitos en sangre, sin ninguna relación con parámetros clínicos observables directamente', 'Los criterios de qSOFA no evalúan ningún parámetro clínico específico reconocido en la práctica médica'],
  ok:0,
  clave:'Alteración del estado mental, frecuencia respiratoria elevada, y presión arterial sistólica baja.',
  exp:'Los criterios de qSOFA evalúan tres parámetros clínicos sencillos: alteración del estado mental, frecuencia respiratoria elevada, y presión arterial sistólica baja, aplicables al lado del paciente sin necesidad de estudios de laboratorio.',
  no:{
    1:'La temperatura corporal no es uno de los tres parámetros del qSOFA; este evalúa estado mental, respiración y presión arterial.',
    2:'El qSOFA es precisamente una herramienta que NO requiere estudios de laboratorio como el conteo de leucocitos.',
    3:'Los criterios de qSOFA sí evalúan parámetros clínicos específicos bien reconocidos en la práctica médica actual.'
  },
  trampa:'Confundir los parámetros del qSOFA con criterios que requieren estudios de laboratorio, cuando su valor central es ser clínicos y rápidos.',
  obj:'Identificar los tres parámetros clínicos evaluados por los criterios de qSOFA.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 75.',
  tags:['criterios de qSOFA','parámetros evaluados']
},
{
  id:'U11-PI-Q42', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Uso apropiado de antimicrobianos en enfermedad infecciosa', sub:'Por qué actuar sin certeza absoluta en terapia empírica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué esperar la confirmación completa de un cultivo antes de iniciar cualquier tratamiento antimicrobiano puede ser una conducta inapropiada en una infección potencialmente grave?',
  ops:[
    'Porque puede significar una demora con consecuencias clínicas reales, como ya se vio en el tema de sepsis, donde el reconocimiento y manejo tempranos son críticos', 'Esperar la confirmación completa del cultivo siempre es la conducta más apropiada, sin importar la gravedad potencial de la infección', 'La terapia antimicrobiana empírica nunca debería iniciarse antes de contar con el resultado definitivo de un cultivo', 'El retraso en iniciar tratamiento antimicrobiano nunca tiene ninguna consecuencia clínica real en ningún escenario infeccioso'],
  ok:0,
  clave:'Porque puede significar una demora con consecuencias clínicas reales, como ya se vio en el tema de sepsis, donde el reconocimiento y manejo tempranos son críticos.',
  exp:'Esperar la confirmación completa antes de iniciar cualquier tratamiento, en una infección potencialmente grave, puede significar una demora con consecuencias clínicas reales, como ya se vio en el tema de sepsis de este mismo bloque.',
  no:{
    1:'Es precisamente lo contrario: esperar la confirmación completa PUEDE ser inapropiado ante una infección potencialmente grave.',
    2:'La terapia empírica SÍ debe iniciarse antes del resultado del cultivo en infecciones potencialmente graves, por necesidad clínica.',
    3:'El retraso en el tratamiento sí puede tener consecuencias clínicas reales, especialmente en cuadros como la sepsis.'
  },
  trampa:'Asumir que siempre es preferible esperar la confirmación completa de un cultivo antes de iniciar cualquier tratamiento antimicrobiano.',
  obj:'Explicar por qué la terapia antimicrobiana empírica se inicia sin esperar la confirmación completa del cultivo en infecciones graves.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 17.',
  tags:['terapia antimicrobiana empírica','riesgo de demora en infección grave']
},
{
  id:'U11-PI-Q43', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Uso apropiado de antimicrobianos en enfermedad infecciosa', sub:'Factores que favorecen la resistencia antimicrobiana',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué prácticas de uso inapropiado de antimicrobianos favorecen el desarrollo de resistencia antimicrobiana?',
  ops:[
    'Administrarlos ante infecciones virales que no los requieren, completar esquemas de forma incompleta, y usar antimicrobianos de amplio espectro cuando uno más específico sería igualmente efectivo', 'El uso de antimicrobianos, sin importar cómo se administren, nunca tiene ninguna relación real con el desarrollo de resistencia', 'Completar un esquema antimicrobiano de forma incompleta siempre previene, en vez de favorecer, el desarrollo de resistencia', 'Usar antimicrobianos de amplio espectro siempre es preferible a uno más específico, sin ningún riesgo asociado a esta práctica'],
  ok:0,
  clave:'Administrarlos ante infecciones virales que no los requieren, completar esquemas de forma incompleta, y usar antimicrobianos de amplio espectro cuando uno más específico sería igualmente efectivo.',
  exp:'La resistencia antimicrobiana es favorecida por el uso inapropiado: administrarlos ante infecciones virales, completar esquemas de forma incompleta (como en tuberculosis), o usar antimicrobianos de amplio espectro cuando uno más específico sería igualmente efectivo.',
  no:{
    1:'Es precisamente lo contrario: el uso inapropiado de antimicrobianos SÍ tiene una relación directa con el desarrollo de resistencia.',
    2:'Es precisamente lo contrario: completar un esquema de forma incompleta FAVORECE, no previene, el desarrollo de resistencia.',
    3:'Usar antimicrobianos de amplio espectro de forma innecesaria sí conlleva un riesgo real de favorecer resistencia bacteriana.'
  },
  trampa:'Subestimar las prácticas de uso inapropiado de antimicrobianos (para infecciones virales, esquemas incompletos, amplio espectro innecesario) como factores de resistencia.',
  obj:'Identificar las prácticas de uso inapropiado de antimicrobianos que favorecen la resistencia antimicrobiana.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 17.',
  tags:['resistencia antimicrobiana','prácticas de uso inapropiado']
},
{
  id:'U11-PI-Q44', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Uso apropiado de antimicrobianos en enfermedad infecciosa', sub:'Qué es el desescalamiento antibiótico',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente inicia tratamiento antimicrobiano empírico de amplio espectro. Días después, el cultivo confirma el agente causal específico y su perfil de sensibilidad, permitiendo ajustar el tratamiento hacia un antimicrobiano más específico y de espectro reducido.',
  enunciado:'¿Qué principio de este tema ilustra este ajuste del tratamiento?',
  ops:[
    'El desescalamiento antibiótico, una práctica clínicamente apropiada que no indica que el tratamiento inicial haya sido incorrecto', 'Este ajuste del tratamiento indica que el tratamiento empírico inicial fue incorrecto y debió evitarse desde el principio', 'El desescalamiento antibiótico nunca es una práctica clínicamente apropiada, independientemente de los resultados del cultivo', 'Ajustar un tratamiento antimicrobiano según los resultados de cultivo nunca ha sido una práctica clínica reconocida'],
  ok:0,
  clave:'El desescalamiento antibiótico, una práctica clínicamente apropiada que no indica que el tratamiento inicial haya sido incorrecto.',
  exp:'El desescalamiento antibiótico es el proceso de ajustar un tratamiento empírico de amplio espectro hacia uno más específico una vez que se cuenta con la identificación definitiva del agente causal -el tratamiento inicial no tiene que ser la decisión final, sino el punto de partida que se ajusta con nueva información.',
  no:{
    1:'Este ajuste no indica un error inicial; el tratamiento empírico fue apropiado dado el contexto de incertidumbre diagnóstica inicial.',
    2:'Es precisamente lo contrario: el desescalamiento SÍ es una práctica clínicamente apropiada y recomendada.',
    3:'Ajustar el tratamiento según resultados de cultivo sí es una práctica clínica reconocida y valorada: el desescalamiento antibiótico.'
  },
  trampa:'Interpretar el ajuste de un tratamiento empírico hacia uno más específico como una señal de que el tratamiento inicial fue un error.',
  obj:'Aplicar el reconocimiento del desescalamiento antibiótico como práctica clínicamente apropiada.',
  ref:'Mandell, Enfermedades Infecciosas, cap. 17.',
  tags:['desescalamiento antibiótico','ajuste apropiado del tratamiento']
},
{
  id:'U11-PI-Q45', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Enfermedades de notificación obligatoria en República Dominicana', sub:'Función de la vigilancia epidemiológica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple la vigilancia epidemiológica dentro del sistema de salud?',
  ops:[
    'El proceso sistemático y continuo de recolección, análisis e interpretación de datos de salud, orientado a detectar cambios en la ocurrencia de enfermedades que ameriten acción de salud pública', 'La vigilancia epidemiológica es un proceso puntual y aislado, sin ninguna continuidad real en el tiempo dentro del sistema de salud', 'La vigilancia epidemiológica no tiene ninguna relación real con la detección de brotes o cambios en la ocurrencia de enfermedades', 'La vigilancia epidemiológica depende exclusivamente de casos individuales reportados de forma aislada, sin ningún análisis agregado'],
  ok:0,
  clave:'El proceso sistemático y continuo de recolección, análisis e interpretación de datos de salud, orientado a detectar cambios en la ocurrencia de enfermedades que ameriten acción de salud pública.',
  exp:'La vigilancia epidemiológica es el proceso sistemático y continuo de recolección, análisis e interpretación de datos de salud, orientado a detectar cambios en la ocurrencia de enfermedades que ameriten una acción de salud pública.',
  no:{
    1:'Es precisamente lo contrario: la vigilancia epidemiológica es un proceso SISTEMÁTICO Y CONTINUO, no puntual y aislado.',
    2:'La vigilancia epidemiológica sí tiene una relación central con la detección de brotes y cambios en la ocurrencia de enfermedades.',
    3:'La vigilancia depende del análisis AGREGADO de muchos casos reportados, no solo de casos aislados sin conexión entre sí.'
  },
  trampa:'Reducir la vigilancia epidemiológica a un proceso puntual o a casos aislados, sin reconocer su naturaleza sistemática y de análisis agregado.',
  obj:'Definir la función de la vigilancia epidemiológica dentro del sistema de salud.',
  ref:'OPS, Manual de Vigilancia Epidemiológica.',
  tags:['vigilancia epidemiológica','función dentro del sistema de salud']
},
{
  id:'U11-PI-Q46', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Enfermedades de notificación obligatoria en República Dominicana', sub:'Conexión con la notificación de maltrato infantil',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué principio ya visto en Pediatría I se conecta la responsabilidad de notificar una enfermedad de notificación obligatoria?',
  ops:[
    'Que el profesional de salud cumple un rol activo dentro de un sistema más amplio, cuya efectividad depende de que cada profesional cumpla consistentemente con su parte del proceso', 'Esta responsabilidad de notificar no tiene ninguna relación real con ningún principio ya visto sobre notificación en Pediatría I', 'El signo de Blumberg ya visto en Semiología Quirúrgica, sin ninguna relación real con la notificación obligatoria', 'La escala de Glasgow ya vista en Neurología, sin ninguna relación real con la notificación obligatoria de enfermedades'],
  ok:0,
  clave:'Que el profesional de salud cumple un rol activo dentro de un sistema más amplio, cuya efectividad depende de que cada profesional cumpla consistentemente con su parte del proceso.',
  exp:'Esta responsabilidad de notificar retoma directamente la misma lógica ya vista sobre notificación obligatoria de maltrato infantil en Pediatría I: el profesional de salud cumple un rol activo dentro de un sistema más amplio, cuya efectividad depende de que cada profesional cumpla consistentemente con su parte.',
  no:{
    1:'Sí existe una conexión conceptual directa con la notificación obligatoria de maltrato infantil ya vista en Pediatría I.',
    2:'El signo de Blumberg es un hallazgo semiológico distinto, sin relación conceptual con la notificación obligatoria de enfermedades.',
    3:'La escala de Glasgow es una herramienta de evaluación neurológica distinta, sin relación conceptual con la notificación obligatoria.'
  },
  trampa:'No reconocer la conexión conceptual correcta entre la notificación de enfermedades y la notificación de maltrato infantil ya vista en Pediatría I.',
  obj:'Identificar la conexión entre la notificación de enfermedades y la notificación de maltrato infantil ya vista en Pediatría I.',
  ref:'OPS, Manual de Vigilancia Epidemiológica.',
  tags:['enfermedad de notificación obligatoria','conexión con notificación de maltrato']
},
{
  id:'U11-PI-Q47', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Enfermedades de notificación obligatoria en República Dominicana', sub:'Qué es un brote epidémico',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es un brote epidémico?',
  ops:[
    'La ocurrencia de casos de una enfermedad en un número mayor al esperado para un lugar y periodo de tiempo determinados', 'Un brote epidémico es un único caso aislado de una enfermedad, sin ninguna relación con un número mayor al esperado', 'Un brote epidémico ocurre siempre y exclusivamente cuando una enfermedad afecta a toda la población de un país completo', 'Un brote epidémico no tiene ninguna definición epidemiológica específica reconocida en la práctica de salud pública'],
  ok:0,
  clave:'La ocurrencia de casos de una enfermedad en un número mayor al esperado para un lugar y periodo de tiempo determinados.',
  exp:'Un brote epidémico es la ocurrencia de casos de una enfermedad en un número mayor al esperado para un lugar y periodo de tiempo determinados.',
  no:{
    1:'Un brote epidémico implica un número de casos MAYOR al esperado, no un único caso aislado.',
    2:'Un brote epidémico puede ocurrir en un área o comunidad específica, sin necesidad de afectar a todo un país completo.',
    3:'Un brote epidémico sí tiene una definición epidemiológica específica y bien reconocida en la práctica de salud pública.'
  },
  trampa:'Confundir un brote epidémico con un caso aislado, o exigir que afecte a toda una población nacional para considerarse como tal.',
  obj:'Definir qué es un brote epidémico.',
  ref:'OPS, Manual de Vigilancia Epidemiológica.',
  tags:['brote epidémico','definición']
},
{
  id:'U11-PI-Q48', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Enfermedades de notificación obligatoria en República Dominicana', sub:'Por qué la detección temprana de un brote limita su magnitud',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la detección temprana de un brote epidémico, posible gracias a la vigilancia epidemiológica sistemática, puede limitar significativamente su magnitud e impacto?',
  ops:[
    'Porque permite una respuesta de salud pública oportuna (identificación de la fuente, medidas de control específicas, comunicación a la población)', 'La detección temprana de un brote epidémico nunca tiene ninguna relación real con la magnitud final que alcanzará ese brote', 'Una respuesta de salud pública siempre es igual de efectiva, sin importar si se implementa temprana o tardíamente', 'La vigilancia epidemiológica sistemática nunca contribuye realmente a la detección temprana de un brote epidémico'],
  ok:0,
  clave:'Porque permite una respuesta de salud pública oportuna (identificación de la fuente, medidas de control específicas, comunicación a la población).',
  exp:'La detección temprana de un brote permite una respuesta de salud pública oportuna -identificación de la fuente, medidas de control específicas, comunicación a la población- que puede limitar significativamente su magnitud e impacto.',
  no:{
    1:'La detección temprana sí tiene una relación directa con la magnitud final que puede alcanzar un brote epidémico.',
    2:'Es precisamente lo contrario: una respuesta MÁS TEMPRANA suele ser más efectiva que una tardía para limitar un brote.',
    3:'La vigilancia epidemiológica sistemática sí contribuye directamente a la detección temprana de un brote epidémico.'
  },
  trampa:'Subestimar el valor de la detección temprana de un brote epidémico para limitar su magnitud e impacto final.',
  obj:'Explicar por qué la detección temprana de un brote epidémico limita su magnitud e impacto.',
  ref:'OPS, Manual de Vigilancia Epidemiológica.',
  tags:['brote epidémico','valor de la detección temprana']
},
{
  id:'U11-PI-Q49', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Enfermedades de notificación obligatoria en República Dominicana', sub:'Cierre integrador del bloque completo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué idea cierra el bloque completo de Patología Infecciosa, retomando el hilo conductor iniciado desde la tríada epidemiológica?',
  ops:[
    'Que cada infección individual, aunque se maneje clínicamente a nivel del paciente concreto, existe también dentro de un contexto poblacional más amplio, y la notificación oportuna permite que ese contexto sea visible y manejable', 'Este tema no tiene ninguna relación real con la tríada epidemiológica ni con ningún otro tema ya visto en el bloque completo', 'El bloque de Patología Infecciosa no tiene ningún hilo conductor identificable entre sus distintos temas', 'La notificación de enfermedades es un tema completamente aislado, sin ninguna conexión con el resto del bloque'],
  ok:0,
  clave:'Que cada infección individual, aunque se maneje clínicamente a nivel del paciente concreto, existe también dentro de un contexto poblacional más amplio, y la notificación oportuna permite que ese contexto sea visible y manejable.',
  exp:'Este tema cierra el bloque retomando el hilo conductor iniciado desde la tríada epidemiológica: cada infección individual existe también dentro de un contexto poblacional más amplio, y la notificación oportuna de cada caso es lo que permite que ese contexto sea visible y manejable.',
  no:{
    1:'Este tema sí retoma directamente el hilo conductor de la tríada epidemiológica y el resto de temas ya vistos en el bloque.',
    2:'El bloque de Patología Infecciosa sí tiene un hilo conductor identificable, desde la tríada epidemiológica hasta este cierre.',
    3:'La notificación de enfermedades es precisamente el cierre integrador conectado con todo el resto del bloque completo.'
  },
  trampa:'No reconocer el rol de cierre integrador que cumple este último tema respecto al hilo conductor completo del bloque de Patología Infecciosa.',
  obj:'Explicar el rol de cierre integrador que cumple el tema de notificación obligatoria dentro del bloque completo.',
  ref:'OPS, Manual de Vigilancia Epidemiológica.',
  tags:['enfermedad de notificación obligatoria','cierre integrador del bloque']
},
{
  id:'U11-PI-Q50', programa:'unirm', cuatri:11,
  esp:'Patología Infecciosa', tema:'Enfermedades de notificación obligatoria en República Dominicana', sub:'Enfermedades incluidas como ejemplo',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué enfermedades, ya vistas en este bloque, se incluyen como ejemplos de enfermedades de notificación obligatoria en República Dominicana?',
  ops:[
    'Tuberculosis, VIH, dengue, y otras condiciones infecciosas de relevancia específica en el contexto dominicano', 'Únicamente el resfriado común, sin ninguna otra enfermedad infecciosa incluida en esta lista de notificación obligatoria', 'Ninguna de las enfermedades ya vistas en este bloque se incluye en la lista de notificación obligatoria dominicana', 'Solo las micosis superficiales, sin ninguna otra enfermedad infecciosa relevante incluida en esta lista'],
  ok:0,
  clave:'Tuberculosis, VIH, dengue, y otras condiciones infecciosas de relevancia específica en el contexto dominicano.',
  exp:'Esta lista incluye, entre otras, varias de las enfermedades ya vistas a lo largo de este bloque: tuberculosis, VIH, dengue, y otras condiciones infecciosas de relevancia específica en el contexto dominicano.',
  no:{
    1:'El resfriado común, por su baja gravedad y alta frecuencia, no es una enfermedad típica de notificación obligatoria.',
    2:'Es precisamente lo contrario: varias enfermedades ya vistas en este bloque SÍ se incluyen en esta lista.',
    3:'Las micosis superficiales, por su baja gravedad, no son un ejemplo típico de enfermedad de notificación obligatoria.'
  },
  trampa:'Asumir que ninguna enfermedad ya vista en el bloque se incluye en la lista de notificación obligatoria, o elegir ejemplos de baja relevancia epidemiológica.',
  obj:'Identificar ejemplos de enfermedades ya vistas en el bloque que son de notificación obligatoria en República Dominicana.',
  ref:'OPS, Manual de Vigilancia Epidemiológica.',
  tags:['enfermedad de notificación obligatoria','ejemplos ya vistos en el bloque']
}

]);
