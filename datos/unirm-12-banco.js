/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 12, TANDA DE OBSTETRICIA II (1/2)
   Primer banco de esta materia (0 preguntas previas). Prefijo
   U12-OB2-. Cubre los primeros 7 temas: parto distocico y sus
   causas, distocias de la presentacion fetal, cesarea, induccion
   y conduccion del trabajo de parto, ruptura prematura de
   membranas pretermino, embarazo multiple, y restriccion del
   crecimiento intrauterino (Q01-Q28).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== OBSTETRICIA II ===================== */
{
  id:'U12-OB2-Q01', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Parto distócico y sus causas', sub:'Las tres categorías clásicas de distocia',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿En qué tres categorías clásicas se clasifican las distocias del trabajo de parto?',
  ops:[
    'Distocias de la potencia, del pasajero, y del canal', 'Únicamente distocias de la potencia, sin ninguna otra categoría reconocida clínicamente', 'Distocias maternas y distocias fetales, siendo estas las únicas dos categorías existentes', 'Las distocias del trabajo de parto no tienen ninguna clasificación clásica reconocida'],
  ok:0,
  clave:'Distocias de la potencia, del pasajero, y del canal.',
  exp:'Una distocia se clasifica clásicamente en tres grandes categorías: distocias de la potencia (contracciones inadecuadas), distocias del pasajero (relacionadas con el feto), y distocias del canal (relacionadas con la pelvis materna o los tejidos blandos).',
  no:{
    1:'Existen tres categorías, no solo una; también incluyen distocias del pasajero y del canal.',
    2:'La clasificación clásica tiene tres categorías específicas, no una división binaria materna-fetal.',
    3:'Las distocias sí tienen una clasificación clásica bien reconocida en tres categorías específicas.'
  },
  trampa:'Reducir la clasificación de distocias a una sola categoría, o usar una división binaria distinta de la clasificación clásica en tres partes.',
  obj:'Identificar las tres categorías clásicas de clasificación de las distocias del trabajo de parto.',
  ref:'Williams, Obstetricia, cap. 23.',
  tags:['distocia del trabajo de parto','tres categorías clásicas']
},
{
  id:'U12-OB2-Q02', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Parto distócico y sus causas', sub:'Qué es la desproporción cefalopélvica',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la desproporción cefalopélvica?',
  ops:[
    'La incompatibilidad entre el tamaño de la cabeza fetal y las dimensiones de la pelvis materna, que impide el descenso adecuado del feto', 'Una distocia de la potencia causada exclusivamente por contracciones uterinas insuficientes', 'Una condición que siempre se resuelve aumentando la actividad uterina con oxitocina', 'La desproporción cefalopélvica no tiene ninguna relación real con el tamaño de la pelvis materna'],
  ok:0,
  clave:'La incompatibilidad entre el tamaño de la cabeza fetal y las dimensiones de la pelvis materna, que impide el descenso adecuado del feto.',
  exp:'La desproporción cefalopélvica es la incompatibilidad entre el tamaño de la cabeza fetal y las dimensiones de la pelvis materna, de forma que el feto no puede descender adecuadamente a través del canal del parto.',
  no:{
    1:'La desproporción cefalopélvica es una distocia del CANAL, no de la potencia relacionada con contracciones insuficientes.',
    2:'Es precisamente lo contrario: aumentar la actividad uterina resulta inútil e incluso riesgoso ante una verdadera desproporción.',
    3:'La desproporción cefalopélvica sí tiene una relación directa y central con las dimensiones de la pelvis materna.'
  },
  trampa:'Confundir la desproporción cefalopélvica (distocia del canal) con una distocia de la potencia relacionada con contracciones insuficientes.',
  obj:'Definir qué es la desproporción cefalopélvica.',
  ref:'Williams, Obstetricia, cap. 23.',
  tags:['desproporción cefalopélvica','distocia del canal']
},
{
  id:'U12-OB2-Q03', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Parto distócico y sus causas', sub:'Herramienta para reconocer falla en el progreso',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué herramienta ya vista en Obstetricia I permite identificar objetivamente una falla en el progreso del trabajo de parto?',
  ops:[
    'El partograma', 'La biometría fetal, siendo esta la herramienta principal para identificar la falla en el progreso del trabajo de parto', 'El Coombs indirecto, siendo esta la herramienta principal para identificar la falla en el progreso del parto', 'No existe ninguna herramienta objetiva ya vista para identificar la falla en el progreso del trabajo de parto'],
  ok:0,
  clave:'El partograma.',
  exp:'La falla en el progreso del parto se identifica precisamente mediante el partograma ya visto en Obstetricia I, cuya trayectoria esperada, cuando se desvía de forma significativa, es la señal objetiva de que algo no está progresando como debería.',
  no:{
    1:'La biometría fetal evalúa el crecimiento fetal, no el progreso del trabajo de parto en curso.',
    2:'El Coombs indirecto detecta anticuerpos maternos, sin ninguna relación con el progreso del trabajo de parto.',
    3:'Sí existe una herramienta objetiva ya vista para esta identificación: el partograma.'
  },
  trampa:'Confundir el partograma con otras herramientas ya vistas en el pensum que evalúan aspectos distintos del embarazo.',
  obj:'Identificar la herramienta que permite reconocer objetivamente una falla en el progreso del trabajo de parto.',
  ref:'Williams, Obstetricia, cap. 23.',
  tags:['falla en el progreso del parto','herramienta del partograma']
},
{
  id:'U12-OB2-Q04', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Parto distócico y sus causas', sub:'Por qué distinguir el tipo de distocia antes de intervenir',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Ante una falla en el progreso del parto confirmada por partograma, un médico decide aumentar la actividad uterina con oxitocina sin evaluar primero si existe una posible desproporción cefalopélvica.',
  enunciado:'¿Qué riesgo conlleva esta conducta, según lo visto en este tema?',
  ops:[
    'Aumentar la actividad uterina puede ser inútil e incluso riesgoso si la causa real es una desproporción cefalopélvica, no una distocia de la potencia', 'Esta conducta es siempre apropiada, ya que la oxitocina resuelve cualquier tipo de distocia del trabajo de parto', 'No existe ningún riesgo real en aumentar la actividad uterina sin distinguir primero el tipo de distocia presente', 'La desproporción cefalopélvica siempre mejora significativamente con el aumento de la actividad uterina mediante oxitocina'],
  ok:0,
  clave:'Aumentar la actividad uterina puede ser inútil e incluso riesgoso si la causa real es una desproporción cefalopélvica, no una distocia de la potencia.',
  exp:'Aumentar la actividad uterina puede ser apropiado ante una distocia de la potencia, pero resulta inútil, e incluso riesgoso, ante una verdadera desproporción cefalopélvica, donde el problema no es la fuerza de las contracciones sino el espacio físico disponible.',
  no:{
    1:'Es precisamente lo contrario: la oxitocina NO resuelve una desproporción cefalopélvica, un problema de espacio, no de fuerza.',
    2:'Esta conducta sí conlleva un riesgo real si no se distingue primero el tipo de distocia presente.',
    3:'Es precisamente lo contrario: la desproporción cefalopélvica NO mejora con el aumento de la actividad uterina.'
  },
  trampa:'Asumir que aumentar la actividad uterina con oxitocina es siempre apropiado ante cualquier falla en el progreso del parto, sin distinguir el tipo de distocia.',
  obj:'Aplicar la importancia de distinguir el tipo de distocia antes de decidir la intervención apropiada.',
  ref:'Williams, Obstetricia, cap. 23.',
  tags:['distocia del trabajo de parto','riesgo de intervención sin diagnóstico']
},
{
  id:'U12-OB2-Q05', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Distocias de la presentación fetal', sub:'Riesgo particular de la presentación podálica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué riesgo particular conlleva la presentación podálica durante un parto vaginal?',
  ops:[
    'El riesgo de que la cabeza fetal quede retenida después de que el cuerpo ya ha salido', 'La presentación podálica nunca conlleva ningún riesgo real distinto del de la presentación cefálica', 'El riesgo principal es que el cordón umbilical nunca puede comprometerse en esta presentación', 'La presentación podálica siempre es más segura que la presentación cefálica durante el parto vaginal'],
  ok:0,
  clave:'El riesgo de que la cabeza fetal quede retenida después de que el cuerpo ya ha salido.',
  exp:'La presentación podálica conlleva mayor riesgo durante el parto vaginal, particularmente el riesgo de que la cabeza fetal (la parte de mayor diámetro) quede retenida después de que el cuerpo ya ha salido.',
  no:{
    1:'La presentación podálica sí conlleva un riesgo particular distinto y mayor que la presentación cefálica.',
    2:'El cordón umbilical sí puede comprometerse en esta presentación; no es el riesgo principal descrito, pero tampoco está descartado.',
    3:'Es precisamente lo contrario: la presentación podálica conlleva MAYOR riesgo que la presentación cefálica.'
  },
  trampa:'Subestimar el riesgo particular de la presentación podálica, asumiendo que es equivalente o más segura que la presentación cefálica.',
  obj:'Explicar el riesgo particular de la presentación podálica durante el parto vaginal.',
  ref:'Williams, Obstetricia, cap. 24.',
  tags:['presentación podálica','riesgo de retención cefálica']
},
{
  id:'U12-OB2-Q06', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Distocias de la presentación fetal', sub:'Pronóstico de la presentación de cara según posición del mentón',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿De qué depende críticamente el pronóstico de un parto vaginal en presentación de cara?',
  ops:[
    'De la posición específica del mentón fetal, siendo la posición mento-anterior más favorable que la mento-posterior persistente', 'El pronóstico de la presentación de cara nunca depende de la posición específica del mentón fetal', 'Cualquier posición del mentón fetal permite igualmente un parto vaginal exitoso en esta presentación', 'La posición mento-posterior persistente siempre permite un parto vaginal más fácil que la mento-anterior'],
  ok:0,
  clave:'De la posición específica del mentón fetal, siendo la posición mento-anterior más favorable que la mento-posterior persistente.',
  exp:'El pronóstico depende críticamente de la posición específica del mentón fetal: una posición mento-anterior puede permitir un parto vaginal exitoso, mientras una posición mento-posterior persistente generalmente hace imposible el parto vaginal.',
  no:{
    1:'El pronóstico sí depende críticamente de la posición específica del mentón fetal en esta presentación.',
    2:'No cualquier posición permite igualmente un parto vaginal; la posición mento-posterior persistente lo hace generalmente imposible.',
    3:'Es precisamente lo contrario: la posición mento-ANTERIOR es la más favorable, no la mento-posterior persistente.'
  },
  trampa:'Invertir cuál posición del mentón fetal es más favorable para el parto vaginal en la presentación de cara.',
  obj:'Explicar de qué depende el pronóstico del parto vaginal en presentación de cara.',
  ref:'Williams, Obstetricia, cap. 24.',
  tags:['presentación de cara','pronóstico según posición del mentón']
},
{
  id:'U12-OB2-Q07', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Distocias de la presentación fetal', sub:'Qué es la situación transversa',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la situación transversa?',
  ops:[
    'Cuando el eje longitudinal del feto es perpendicular al eje longitudinal del útero materno', 'Una variante de la presentación cefálica donde la cara del feto se presenta primero', 'Una condición donde las nalgas o los pies del feto se presentan primero hacia el canal del parto', 'La situación transversa no tiene ninguna definición específica reconocida en obstetricia'],
  ok:0,
  clave:'Cuando el eje longitudinal del feto es perpendicular al eje longitudinal del útero materno.',
  exp:'La situación transversa ocurre cuando el eje longitudinal del feto es perpendicular al eje longitudinal del útero materno, de forma que ni la cabeza ni las nalgas se presentan hacia el canal del parto.',
  no:{
    1:'Esta descripción corresponde a la presentación de cara, no a la situación transversa.',
    2:'Esta descripción corresponde a la presentación podálica, no a la situación transversa.',
    3:'La situación transversa sí tiene una definición específica y bien reconocida en obstetricia.'
  },
  trampa:'Confundir la situación transversa con otras presentaciones anómalas ya vistas, como la podálica o la de cara.',
  obj:'Definir qué es la situación transversa fetal.',
  ref:'Williams, Obstetricia, cap. 24.',
  tags:['situación transversa','definición']
},
{
  id:'U12-OB2-Q08', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Distocias de la presentación fetal', sub:'Ventaja de reconocer una situación transversa antes del trabajo de parto',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una ecografía realizada durante el control prenatal, antes del inicio del trabajo de parto, revela una situación transversa persistente cerca del término.',
  enunciado:'¿Qué ventaja aporta reconocer esta situación con anticipación, según lo visto en este tema?',
  ops:[
    'Permite planificar la vía de nacimiento con anticipación, en vez de descubrir esta situación de forma inesperada durante un trabajo de parto ya avanzado', 'Esta información nunca aporta ninguna ventaja real, ya que la situación transversa siempre se resuelve espontáneamente antes del parto', 'Reconocer esta situación con anticipación nunca influye en la planificación de la vía de nacimiento apropiada', 'Descubrir esta situación durante el trabajo de parto ya avanzado siempre ofrece las mismas opciones de manejo que reconocerla antes'],
  ok:0,
  clave:'Permite planificar la vía de nacimiento con anticipación, en vez de descubrir esta situación de forma inesperada durante un trabajo de parto ya avanzado.',
  exp:'Reconocer una situación transversa antes del inicio del trabajo de parto permite planificar la vía de nacimiento con anticipación, en vez de descubrir esta situación de forma inesperada ya avanzado el trabajo de parto, cuando las opciones son más limitadas y el riesgo, mayor.',
  no:{
    1:'Es precisamente lo contrario: la situación transversa NO siempre se resuelve espontáneamente antes del parto.',
    2:'Reconocer esta situación con anticipación sí influye directamente en la planificación apropiada de la vía de nacimiento.',
    3:'Es precisamente lo contrario: descubrirla tardíamente ofrece opciones de manejo MÁS limitadas y de MAYOR riesgo.'
  },
  trampa:'Asumir que descubrir una situación transversa durante el trabajo de parto avanzado es equivalente a reconocerla con anticipación durante el control prenatal.',
  obj:'Aplicar la ventaja de reconocer una situación transversa con anticipación mediante el control prenatal.',
  ref:'Williams, Obstetricia, cap. 24.',
  tags:['situación transversa','ventaja del reconocimiento anticipado']
},
{
  id:'U12-OB2-Q09', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Cesárea: indicaciones y técnica', sub:'Base conceptual de las indicaciones de cesárea',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las indicaciones de cesárea se consideran la consecuencia lógica de identificar correctamente ciertas condiciones ya estudiadas, más que una decisión aislada?',
  ops:[
    'Porque integran directamente conceptos ya vistos como distocias del canal, distocias de la presentación, o condiciones como la placenta previa, donde el parto vaginal representaría mayor riesgo', 'Las indicaciones de cesárea nunca tienen ninguna relación real con conceptos ya vistos previamente en el pensum', 'La cesárea siempre es una decisión completamente aislada, sin ninguna conexión con el diagnóstico diferencial obstétrico', 'Dominar el diagnóstico diferencial obstétrico nunca es indispensable antes de decidir la vía de nacimiento apropiada'],
  ok:0,
  clave:'Porque integran directamente conceptos ya vistos como distocias del canal, distocias de la presentación, o condiciones como la placenta previa, donde el parto vaginal representaría mayor riesgo.',
  exp:'Las indicaciones de cesárea integran directamente varios conceptos ya vistos: distocias del canal, distocias de la presentación, así como condiciones como la placenta previa o el sufrimiento fetal agudo, donde el parto vaginal representaría un riesgo mayor que la cirugía.',
  no:{
    1:'Las indicaciones de cesárea sí tienen una relación directa con múltiples conceptos ya vistos en el pensum.',
    2:'Es precisamente lo contrario: la cesárea es la consecuencia lógica de identificar condiciones ya estudiadas, no una decisión aislada.',
    3:'Dominar el diagnóstico diferencial obstétrico sí es indispensable antes de decidir la vía de nacimiento apropiada.'
  },
  trampa:'Tratar la cesárea como una decisión aislada, sin reconocer que es la consecuencia lógica de identificar condiciones obstétricas ya estudiadas.',
  obj:'Explicar por qué las indicaciones de cesárea integran conceptos ya vistos en el diagnóstico diferencial obstétrico.',
  ref:'Williams, Obstetricia, cap. 30.',
  tags:['indicaciones de cesárea','integración del diagnóstico diferencial']
},
{
  id:'U12-OB2-Q10', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Cesárea: indicaciones y técnica', sub:'Qué determina la velocidad de respuesta ante una cesárea de emergencia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿De qué depende la velocidad de respuesta ante una cesárea de emergencia?',
  ops:[
    'De la coordinación previa del equipo y de la institución completa, no solo de la habilidad técnica individual del cirujano en el momento', 'La velocidad de respuesta ante una cesárea de emergencia nunca depende de la coordinación previa del equipo o la institución', 'Esta velocidad depende exclusivamente de la habilidad técnica individual del cirujano, sin ninguna relación con la coordinación institucional', 'Una institución que nunca ha planificado su respuesta ante esta emergencia logra los mismos tiempos que una que sí lo ha hecho'],
  ok:0,
  clave:'De la coordinación previa del equipo y de la institución completa, no solo de la habilidad técnica individual del cirujano en el momento.',
  exp:'La velocidad de respuesta ante una cesárea de emergencia depende de la coordinación previa del equipo y de la institución completa: una institución que ha planificado y practicado su respuesta logra tiempos considerablemente más cortos que una que improvisa cada vez.',
  no:{
    1:'Es precisamente lo contrario: la velocidad de respuesta SÍ depende de la coordinación previa del equipo e institución.',
    2:'La habilidad técnica individual es solo un factor; la coordinación institucional previa también es determinante.',
    3:'Es precisamente lo contrario: una institución con planificación previa logra tiempos MÁS cortos que una que improvisa.'
  },
  trampa:'Atribuir la velocidad de respuesta ante una cesárea de emergencia únicamente a la habilidad individual del cirujano, sin considerar la coordinación institucional previa.',
  obj:'Explicar de qué depende la velocidad de respuesta ante una cesárea de emergencia.',
  ref:'Williams, Obstetricia, cap. 30.',
  tags:['cesárea de emergencia','coordinación institucional previa']
},
{
  id:'U12-OB2-Q11', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Cesárea: indicaciones y técnica', sub:'Cuándo se programa una cesárea electiva',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuándo se programa una cesárea electiva?',
  ops:[
    'Con anticipación, antes del inicio del trabajo de parto, ante una indicación ya identificada durante el control prenatal', 'Únicamente durante el trabajo de parto ya avanzado, sin ninguna posibilidad real de planificación previa', 'La cesárea electiva nunca puede programarse con anticipación durante el control prenatal', 'Solo se programa quando la demora representa un riesgo inmediato para la madre o el feto'],
  ok:0,
  clave:'Con anticipación, antes del inicio del trabajo de parto, ante una indicación ya identificada durante el control prenatal.',
  exp:'La cesárea electiva es aquella planificada con anticipación, antes del inicio del trabajo de parto, ante una indicación ya identificada durante el control prenatal, permitiendo programar el procedimiento en condiciones óptimas.',
  no:{
    1:'Es precisamente lo contrario: la cesárea electiva SÍ se planifica con anticipación, no durante el trabajo de parto avanzado.',
    2:'Es precisamente lo contrario: la cesárea electiva SÍ puede y debe programarse con anticipación durante el control prenatal.',
    3:'Esta descripción corresponde a la cesárea de emergencia, no a la cesárea electiva.'
  },
  trampa:'Confundir la cesárea electiva (planificada con anticipación) con la cesárea de emergencia (decidida ante riesgo inmediato).',
  obj:'Explicar cuándo se programa una cesárea electiva.',
  ref:'Williams, Obstetricia, cap. 30.',
  tags:['cesárea electiva','planificación anticipada']
},
{
  id:'U12-OB2-Q12', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Inducción y conducción del trabajo de parto', sub:'Diferencia entre inducción y conducción',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre inducir y conducir el trabajo de parto?',
  ops:[
    'La inducción inicia artificialmente un trabajo de parto que no ha comenzado; la conducción acelera un trabajo de parto que ya comenzó espontáneamente pero progresa lentamente', 'Ambos términos son exactamente equivalentes, sin ninguna diferencia real que amerite distinguirlos', 'La conducción inicia un trabajo de parto que no ha comenzado, y la inducción acelera uno que ya está en curso', 'La inducción y la conducción nunca utilizan ninguna herramienta de manejo similar entre sí'],
  ok:0,
  clave:'La inducción inicia artificialmente un trabajo de parto que no ha comenzado; la conducción acelera un trabajo de parto que ya comenzó espontáneamente pero progresa lentamente.',
  exp:'La inducción es el conjunto de intervenciones para iniciar artificialmente el trabajo de parto antes de que comience espontáneamente; la conducción ocurre cuando el trabajo de parto ya comenzó pero progresa más lentamente de lo esperado.',
  no:{
    1:'Son conceptos claramente distintos, según si el trabajo de parto ya había comenzado o no antes de la intervención.',
    2:'Está invertido: la INDUCCIÓN inicia un trabajo de parto que no existía, y la CONDUCCIÓN acelera uno ya en curso, no al revés.',
    3:'Es precisamente lo contrario: ambas pueden utilizar una herramienta similar, como la oxitocina, aunque en escenarios distintos.'
  },
  trampa:'Confundir la inducción (iniciar algo que no existía) con la conducción (acelerar algo ya en curso), o invertir sus definiciones.',
  obj:'Distinguir la inducción de la conducción del trabajo de parto.',
  ref:'Williams, Obstetricia, cap. 26.',
  tags:['inducción del parto','diferencia con conducción']
},
{
  id:'U12-OB2-Q13', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Inducción y conducción del trabajo de parto', sub:'Por qué evaluar las condiciones cervicales antes de inducir',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué evaluar las condiciones cervicales antes de decidir el método de inducción es una parte indispensable del proceso?',
  ops:[
    'Porque un cuello uterino desfavorable, sin maduración previa, tiene una probabilidad de éxito considerablemente menor que uno ya parcialmente maduro', 'Las condiciones cervicales nunca tienen ninguna relación real con la probabilidad de éxito de una inducción del parto', 'Un cuello uterino completamente desfavorable siempre responde igual de bien a la inducción que uno ya maduro', 'Evaluar las condiciones cervicales antes de la inducción nunca ha sido una práctica relevante en obstetricia'],
  ok:0,
  clave:'Porque un cuello uterino desfavorable, sin maduración previa, tiene una probabilidad de éxito considerablemente menor que uno ya parcialmente maduro.',
  exp:'Un cuello uterino desfavorable (cerrado, largo, firme) tiene mucha menor probabilidad de responder exitosamente a la inducción que uno ya parcialmente maduro, por lo que se utilizan métodos específicos para favorecer esta maduración antes de la inducción.',
  no:{
    1:'Las condiciones cervicales sí tienen una relación directa con la probabilidad de éxito de una inducción del parto.',
    2:'Es precisamente lo contrario: un cuello desfavorable responde MENOS bien a la inducción que uno ya maduro.',
    3:'Evaluar las condiciones cervicales sí es una práctica relevante y central antes de decidir el método de inducción.'
  },
  trampa:'Iniciar directamente la inducción sin evaluar primero las condiciones cervicales, asumiendo que la respuesta será igual sin importar el estado del cuello.',
  obj:'Explicar por qué evaluar las condiciones cervicales antes de inducir es indispensable.',
  ref:'Williams, Obstetricia, cap. 26.',
  tags:['maduración cervical','importancia de evaluar antes de inducir']
},
{
  id:'U12-OB2-Q14', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Inducción y conducción del trabajo de parto', sub:'Aplicación de la oxitocina según el escenario',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una gestante presenta contracciones espontáneas desde hace varias horas, pero el progreso de la dilatación cervical es más lento de lo esperado según el partograma.',
  enunciado:'¿Qué término describe correctamente la intervención con oxitocina en este escenario específico?',
  ops:[
    'Conducción del trabajo de parto, ya que este ya había comenzado espontáneamente pero progresa lentamente', 'Inducción del trabajo de parto, ya que se trata de iniciar artificialmente un proceso que no había comenzado', 'Este escenario no corresponde a ninguno de los dos términos ya vistos en este tema', 'La oxitocina nunca se utiliza en un escenario donde el trabajo de parto ya comenzó espontáneamente'],
  ok:0,
  clave:'Conducción del trabajo de parto, ya que este ya había comenzado espontáneamente pero progresa lentamente.',
  exp:'Este escenario corresponde a la conducción del trabajo de parto: el trabajo de parto ya comenzó de forma espontánea (contracciones presentes desde hace horas) pero progresa más lentamente de lo esperado, situación distinta a la inducción.',
  no:{
    1:'Es precisamente lo contrario: este es un escenario de CONDUCCIÓN, no de inducción, ya que el trabajo de parto ya había comenzado.',
    2:'Este escenario sí corresponde a uno de los dos términos ya vistos: la conducción del trabajo de parto.',
    3:'Es precisamente lo contrario: la oxitocina SÍ se utiliza en este escenario, precisamente para la conducción del trabajo de parto.'
  },
  trampa:'Confundir un escenario de conducción (trabajo de parto ya iniciado, progreso lento) con uno de inducción (trabajo de parto no iniciado).',
  obj:'Aplicar la distinción entre inducción y conducción en un caso clínico específico.',
  ref:'Williams, Obstetricia, cap. 26.',
  tags:['oxitocina en el trabajo de parto','aplicación en conducción']
},
{
  id:'U12-OB2-Q15', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Ruptura prematura de membranas pretérmino', sub:'Los dos riesgos que compiten entre sí',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué dos riesgos compiten entre sí en el manejo de la ruptura prematura de membranas pretérmino?',
  ops:[
    'El riesgo de infección ascendente una vez rotas las membranas, y el riesgo asociado a la prematurez si el embarazo se finaliza de inmediato', 'Únicamente el riesgo de infección, sin ninguna relación con el riesgo asociado a la prematurez del recién nacido', 'Solo el riesgo de prematurez, sin ninguna relación con el riesgo de infección ascendente tras la ruptura', 'Esta condición no conlleva ningún riesgo real que competir entre sí en su manejo clínico'],
  ok:0,
  clave:'El riesgo de infección ascendente una vez rotas las membranas, y el riesgo asociado a la prematurez si el embarazo se finaliza de inmediato.',
  exp:'Esta condición combina dos riesgos que se contraponen: el riesgo de infección ascendente una vez rotas las membranas, y el riesgo asociado a la prematurez si el embarazo se finaliza de inmediato.',
  no:{
    1:'El riesgo de prematurez también compite con el de infección; no es solo uno de los dos riesgos relevantes.',
    2:'El riesgo de infección también compite con el de prematurez; no es solo uno de los dos riesgos relevantes.',
    3:'Esta condición sí conlleva dos riesgos reales que compiten entre sí, exigiendo un manejo cuidadoso balanceado.'
  },
  trampa:'Reducir el manejo de esta condición a un solo riesgo aislado, sin reconocer que ambos riesgos (infección y prematurez) compiten entre sí.',
  obj:'Identificar los dos riesgos que compiten entre sí en el manejo de la ruptura prematura de membranas pretérmino.',
  ref:'Williams, Obstetricia, cap. 42.',
  tags:['ruptura prematura de membranas','riesgos que compiten']
},
{
  id:'U12-OB2-Q16', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Ruptura prematura de membranas pretérmino', sub:'Naturaleza activa del manejo expectante',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el manejo expectante en RPM no debe entenderse simplemente como "esperar sin hacer nada"?',
  ops:[
    'Porque es una decisión activa de aceptar el riesgo de infección, cuidadosamente vigilado, a cambio del beneficio de mayor maduración fetal', 'El manejo expectante siempre significa literalmente no realizar ninguna vigilancia activa de la gestante ni del feto', 'Esta estrategia nunca implica ningún balance real entre el riesgo de infección y el beneficio de mayor maduración fetal', 'El manejo expectante en RPM nunca requiere ninguna reevaluación posterior del balance de riesgos inicial'],
  ok:0,
  clave:'Porque es una decisión activa de aceptar el riesgo de infección, cuidadosamente vigilado, a cambio del beneficio de mayor maduración fetal.',
  exp:'El manejo expectante no es simplemente "esperar sin hacer nada", sino una decisión activa de aceptar el riesgo de infección, cuidadosamente vigilado, a cambio del beneficio de mayor maduración fetal -un balance que se reevalúa constantemente.',
  no:{
    1:'Es precisamente lo contrario: el manejo expectante SÍ implica vigilancia activa constante de la gestante y del feto.',
    2:'Esta estrategia sí implica un balance real y activo entre el riesgo de infección y el beneficio de mayor maduración.',
    3:'Es precisamente lo contrario: el manejo expectante SÍ requiere reevaluación constante del balance de riesgos.'
  },
  trampa:'Interpretar el manejo expectante como una conducta pasiva sin vigilancia activa, en vez de reconocerlo como una decisión activa cuidadosamente monitoreada.',
  obj:'Explicar por qué el manejo expectante en RPM es una decisión activa, no una conducta pasiva.',
  ref:'Williams, Obstetricia, cap. 42.',
  tags:['manejo expectante en RPM','naturaleza activa de la decisión']
},
{
  id:'U12-OB2-Q17', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Ruptura prematura de membranas pretérmino', sub:'Presentación clínica de la corioamnionitis',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Con qué hallazgos se presenta característicamente la corioamnionitis?',
  ops:[
    'Fiebre materna, taquicardia materna o fetal, y sensibilidad uterina', 'Únicamente disminución del líquido amniótico, sin ninguna relación con fiebre o taquicardia', 'Solo dolor de cabeza intenso, sin ninguna relación con fiebre o sensibilidad uterina', 'La corioamnionitis no tiene ninguna presentación clínica característica reconocida'],
  ok:0,
  clave:'Fiebre materna, taquicardia materna o fetal, y sensibilidad uterina.',
  exp:'La corioamnionitis se manifiesta con fiebre materna, taquicardia materna o fetal, y sensibilidad uterina, entre otros hallazgos, señalando que el balance de riesgos ha cambiado.',
  no:{
    1:'La disminución del líquido amniótico no es el hallazgo característico principal; la fiebre y taquicardia sí lo son.',
    2:'El dolor de cabeza no es el hallazgo característico de la corioamnionitis; corresponde más a trastornos hipertensivos.',
    3:'La corioamnionitis sí tiene una presentación clínica característica bien reconocida en la práctica obstétrica.'
  },
  trampa:'Confundir la presentación de la corioamnionitis con la de otras condiciones ya vistas, como los trastornos hipertensivos del embarazo.',
  obj:'Identificar los hallazgos clínicos característicos de la corioamnionitis.',
  ref:'Williams, Obstetricia, cap. 42.',
  tags:['corioamnionitis','presentación clínica']
},
{
  id:'U12-OB2-Q18', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Ruptura prematura de membranas pretérmino', sub:'Cambio de conducta ante la aparición de corioamnionitis',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una gestante con ruptura prematura de membranas pretérmino, manejada de forma expectante, desarrolla fiebre, taquicardia y sensibilidad uterina.',
  enunciado:'¿Qué conducta corresponde ante este cambio clínico?',
  ops:[
    'Finalizar el embarazo sin más demora, independientemente de la edad gestacional', 'Continuar con el manejo expectante sin ningún cambio, ya que estos hallazgos no modifican la conducta previa', 'Aumentar únicamente la vigilancia sin considerar finalizar el embarazo, sin importar la edad gestacional', 'Esperar a que la edad gestacional alcance el término antes de considerar cualquier cambio en la conducta'],
  ok:0,
  clave:'Finalizar el embarazo sin más demora, independientemente de la edad gestacional.',
  exp:'Una vez presente la corioamnionitis, el manejo expectante ya no es apropiado, y el embarazo debe finalizarse sin más demora, independientemente de la edad gestacional -el riesgo de continuar supera cualquier beneficio adicional de prolongar la gestación.',
  no:{
    1:'Es precisamente lo contrario: estos hallazgos SÍ modifican la conducta, exigiendo finalizar el embarazo sin demora.',
    2:'Aumentar solo la vigilancia sin finalizar el embarazo no es suficiente ante una corioamnionitis ya establecida.',
    3:'Esperar hasta el término no es apropiado; la corioamnionitis exige finalización inmediata sin importar la edad gestacional.'
  },
  trampa:'Continuar con el manejo expectante a pesar de la aparición de signos de corioamnionitis, sin reconocer el cambio de conducta que exige.',
  obj:'Aplicar el cambio de conducta apropiado ante la aparición de corioamnionitis en RPM.',
  ref:'Williams, Obstetricia, cap. 42.',
  tags:['corioamnionitis','cambio de conducta hacia finalización']
},
{
  id:'U12-OB2-Q19', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Embarazo múltiple', sub:'Mayor riesgo general del embarazo gemelar',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el embarazo gemelar conlleva mayor riesgo de prácticamente todas las complicaciones ya vistas en Obstetricia I?',
  ops:[
    'Por la mayor demanda fisiológica que representa gestar más de un feto simultáneamente', 'El embarazo gemelar nunca tiene ningún riesgo mayor real comparado con un embarazo único de bajo riesgo', 'El embarazo gemelar siempre tiene exactamente el mismo riesgo que un embarazo único, sin ninguna diferencia real', 'La mayor demanda fisiológica del embarazo múltiple nunca tiene ninguna relación real con el riesgo de complicaciones'],
  ok:0,
  clave:'Por la mayor demanda fisiológica que representa gestar más de un feto simultáneamente.',
  exp:'El embarazo múltiple conlleva mayor riesgo de prácticamente todas las complicaciones ya vistas, simplemente por la mayor demanda fisiológica que representa gestar más de un feto simultáneamente.',
  no:{
    1:'Es precisamente lo contrario: el embarazo gemelar SÍ conlleva un riesgo real y mayor que un embarazo único.',
    2:'Es precisamente lo contrario: el embarazo gemelar tiene MAYOR riesgo que un embarazo único de bajo riesgo.',
    3:'La mayor demanda fisiológica sí tiene una relación directa con el aumento del riesgo de complicaciones.'
  },
  trampa:'Subestimar el mayor riesgo general del embarazo múltiple, asumiendo que es equivalente a un embarazo único de bajo riesgo.',
  obj:'Explicar por qué el embarazo gemelar conlleva mayor riesgo general de complicaciones.',
  ref:'Williams, Obstetricia, cap. 45.',
  tags:['embarazo gemelar','mayor riesgo general']
},
{
  id:'U12-OB2-Q20', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Embarazo múltiple', sub:'Implicación de la corionicidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué implicación clínica directa tiene distinguir entre gemelos monocoriónicos y bicoriónicos?',
  ops:[
    'Los gemelos monocoriónicos, al compartir circulación placentaria, tienen riesgo de complicaciones específicas que los bicoriónicos no tienen', 'Esta distinción nunca tiene ninguna implicación clínica real para el manejo del embarazo gemelar', 'Los gemelos bicoriónicos siempre tienen mayor riesgo de complicaciones que los gemelos monocoriónicos', 'La corionicidad nunca influye realmente en el tipo de complicaciones que puede presentar un embarazo gemelar'],
  ok:0,
  clave:'Los gemelos monocoriónicos, al compartir circulación placentaria, tienen riesgo de complicaciones específicas que los bicoriónicos no tienen.',
  exp:'Esta distinción tiene implicaciones clínicas directas: los gemelos monocoriónicos, al compartir circulación placentaria, tienen riesgo de complicaciones específicas de esa conexión vascular compartida que los bicoriónicos, con circulaciones separadas, no tienen.',
  no:{
    1:'Esta distinción sí tiene una implicación clínica directa y central para el manejo del embarazo gemelar.',
    2:'Es precisamente lo contrario: los gemelos MONOCORIÓNICOS tienen mayor riesgo de complicaciones específicas, no los bicoriónicos.',
    3:'La corionicidad sí influye directamente en el tipo de complicaciones específicas que puede presentar el embarazo gemelar.'
  },
  trampa:'Subestimar la relevancia clínica de distinguir la corionicidad, o invertir cuál tipo de gemelos tiene mayor riesgo de complicaciones específicas.',
  obj:'Explicar la implicación clínica de distinguir entre gemelos monocoriónicos y bicoriónicos.',
  ref:'Williams, Obstetricia, cap. 45.',
  tags:['gemelos monocoriónicos y bicoriónicos','implicación clínica']
},
{
  id:'U12-OB2-Q21', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Embarazo múltiple', sub:'Momento óptimo para determinar la corionicidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué momento del embarazo se recomienda determinar idealmente la corionicidad de un embarazo gemelar, y por qué?',
  ops:[
    'En el primer trimestre, mediante ecografía, porque esta distinción se vuelve más difícil de establecer con precisión conforme avanza el embarazo', 'La corionicidad puede determinarse con la misma precisión en cualquier momento del embarazo, sin ninguna ventaja del primer trimestre', 'Se recomienda determinarla únicamente en el tercer trimestre, cerca del término del embarazo gemelar', 'La determinación de la corionicidad nunca depende del momento específico del embarazo en que se realice'],
  ok:0,
  clave:'En el primer trimestre, mediante ecografía, porque esta distinción se vuelve más difícil de establecer con precisión conforme avanza el embarazo.',
  exp:'Determinar la corionicidad idealmente se realiza mediante ecografía en el primer trimestre, ya que esta distinción se vuelve más difícil de establecer con precisión conforme avanza el embarazo.',
  no:{
    1:'Es precisamente lo contrario: la precisión para determinar la corionicidad DISMINUYE conforme avanza el embarazo.',
    2:'Es precisamente lo contrario: el tercer trimestre es el momento MENOS favorable para determinar la corionicidad con precisión.',
    3:'La determinación de la corionicidad sí depende del momento del embarazo, siendo el primer trimestre el más favorable.'
  },
  trampa:'Asumir que la corionicidad puede determinarse con la misma precisión en cualquier momento del embarazo, sin priorizar el primer trimestre.',
  obj:'Explicar por qué el primer trimestre es el momento óptimo para determinar la corionicidad.',
  ref:'Williams, Obstetricia, cap. 45.',
  tags:['gemelos monocoriónicos y bicoriónicos','momento óptimo de determinación']
},
{
  id:'U12-OB2-Q22', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Embarazo múltiple', sub:'Mecanismo del síndrome de transfusión feto-fetal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el mecanismo del síndrome de transfusión feto-fetal?',
  ops:[
    'Conexiones vasculares anormales dentro de la placenta compartida generan un flujo sanguíneo desequilibrado entre ambos fetos', 'Este síndrome ocurre exclusivamente en gemelos bicoriónicos, con placentas completamente separadas entre sí', 'El síndrome de transfusión feto-fetal nunca involucra ninguna conexión vascular entre los fetos gemelares', 'Ambos fetos siempre reciben exactamente la misma cantidad de flujo sanguíneo en este síndrome específico'],
  ok:0,
  clave:'Conexiones vasculares anormales dentro de la placenta compartida generan un flujo sanguíneo desequilibrado entre ambos fetos.',
  exp:'Conexiones vasculares anormales dentro de la placenta compartida generan un flujo sanguíneo desequilibrado: uno recibe exceso de flujo, mientras el otro recibe flujo insuficiente, desarrollando restricción de crecimiento.',
  no:{
    1:'Es precisamente lo contrario: este síndrome es específico de gemelos MONOCORIÓNICOS, que comparten una sola placenta.',
    2:'Es precisamente lo contrario: este síndrome SÍ involucra conexiones vasculares anormales entre los fetos gemelares.',
    3:'Es precisamente lo contrario: el flujo sanguíneo está DESEQUILIBRADO, no es igual entre ambos fetos en este síndrome.'
  },
  trampa:'Confundir el síndrome de transfusión feto-fetal (exclusivo de monocoriónicos) con una condición que pudiera ocurrir en gemelos bicoriónicos.',
  obj:'Explicar el mecanismo del síndrome de transfusión feto-fetal.',
  ref:'Williams, Obstetricia, cap. 45.',
  tags:['síndrome de transfusión feto-fetal','mecanismo vascular']
},
{
  id:'U12-OB2-Q23', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Restricción del crecimiento intrauterino', sub:'Trayectoria vs. percentil aislado en biometría fetal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué distingue a un feto genéticamente pequeño pero saludable de uno con restricción real de crecimiento?',
  ops:[
    'El feto pequeño pero saludable crece de forma constante en su propio percentil, mientras el que tiene restricción real se desvía progresivamente de su trayectoria esperada', 'Ambos fetos son exactamente idénticos en su patrón de crecimiento, sin ninguna diferencia real observable', 'Un feto genéticamente pequeño siempre tiene restricción real de crecimiento, sin ninguna excepción posible', 'La trayectoria de crecimiento en el tiempo nunca ayuda a distinguir entre ambos escenarios clínicos'],
  ok:0,
  clave:'El feto pequeño pero saludable crece de forma constante en su propio percentil, mientras el que tiene restricción real se desvía progresivamente de su trayectoria esperada.',
  exp:'Distinguir un feto genéticamente pequeño pero saludable (que crece de forma constante en su propio percentil bajo) de uno con restricción real (que se desvía progresivamente) retoma el mismo principio de las curvas de crecimiento pediátrico.',
  no:{
    1:'Son escenarios claramente distintos, según si la trayectoria de crecimiento es constante o se desvía progresivamente.',
    2:'Es precisamente lo contrario: un feto genéticamente pequeño puede ser saludable si mantiene una trayectoria constante.',
    3:'Es precisamente lo contrario: la trayectoria en el tiempo es exactamente lo que permite distinguir ambos escenarios.'
  },
  trampa:'Asumir que cualquier feto pequeño tiene restricción real de crecimiento, sin considerar la trayectoria de crecimiento en el tiempo.',
  obj:'Distinguir un feto genéticamente pequeño saludable de uno con restricción real de crecimiento.',
  ref:'Williams, Obstetricia, cap. 44.',
  tags:['restricción del crecimiento fetal','trayectoria vs. percentil aislado']
},
{
  id:'U12-OB2-Q24', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Restricción del crecimiento intrauterino', sub:'Causa más frecuente de restricción de crecimiento fetal',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la causa más frecuente de restricción del crecimiento fetal?',
  ops:[
    'La insuficiencia placentaria', 'La isoinmunización Rh, siendo esta la causa más frecuente de restricción del crecimiento fetal', 'El embarazo múltiple, siendo esta siempre la causa principal de restricción del crecimiento fetal', 'No existe ninguna causa más frecuente identificada de restricción del crecimiento fetal'],
  ok:0,
  clave:'La insuficiencia placentaria.',
  exp:'La insuficiencia placentaria -el funcionamiento inadecuado de la placenta para transferir oxígeno y nutrientes- es la causa más frecuente de restricción del crecimiento fetal.',
  no:{
    1:'La isoinmunización Rh es una causa posible pero no la más frecuente; la insuficiencia placentaria lo es.',
    2:'El embarazo múltiple es un factor de riesgo pero no la causa más frecuente en general; la insuficiencia placentaria lo es.',
    3:'Sí existe una causa identificada como la más frecuente: la insuficiencia placentaria.'
  },
  trampa:'Confundir la causa más frecuente (insuficiencia placentaria) con otras causas posibles pero menos frecuentes de restricción de crecimiento.',
  obj:'Identificar la causa más frecuente de restricción del crecimiento fetal.',
  ref:'Williams, Obstetricia, cap. 44.',
  tags:['insuficiencia placentaria','causa más frecuente']
},
{
  id:'U12-OB2-Q25', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Restricción del crecimiento intrauterino', sub:'Qué evalúa el doppler obstétrico',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué evalúa el doppler obstétrico?',
  ops:[
    'El flujo sanguíneo en vasos específicos, particularmente en la arteria umbilical, para detectar alteraciones del flujo placentario', 'El doppler obstétrico evalúa exclusivamente el peso fetal estimado, sin ninguna relación con el flujo sanguíneo', 'Esta herramienta evalúa únicamente la posición fetal, sin ninguna relación con la función placentaria', 'El doppler obstétrico no tiene ninguna aplicación real reconocida en el contexto obstétrico actual'],
  ok:0,
  clave:'El flujo sanguíneo en vasos específicos, particularmente en la arteria umbilical, para detectar alteraciones del flujo placentario.',
  exp:'El doppler obstétrico evalúa el flujo sanguíneo en vasos específicos, particularmente en la arteria umbilical, permitiendo detectar alteraciones del flujo placentario incluso antes de un cambio evidente en el peso fetal.',
  no:{
    1:'El doppler evalúa flujo sanguíneo, no directamente el peso fetal estimado, que se obtiene mediante biometría.',
    2:'El doppler no evalúa la posición fetal; esa evaluación corresponde a otros componentes del examen obstétrico.',
    3:'El doppler obstétrico sí tiene una aplicación real y central, particularmente en la vigilancia del embarazo de alto riesgo.'
  },
  trampa:'Confundir la función del doppler obstétrico (evaluar flujo sanguíneo) con la de otras herramientas como la biometría fetal.',
  obj:'Definir qué evalúa el doppler obstétrico.',
  ref:'Williams, Obstetricia, cap. 44.',
  tags:['doppler obstétrico','función de evaluación']
},
{
  id:'U12-OB2-Q26', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Restricción del crecimiento intrauterino', sub:'Conexión fisiopatológica con trastornos hipertensivos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una gestante con preeclampsia requiere vigilancia adicional del crecimiento fetal?',
  ops:[
    'Porque el mismo proceso vascular anormal que genera la elevación de la presión arterial materna puede comprometer simultáneamente el funcionamiento placentario y el crecimiento fetal', 'La preeclampsia nunca tiene ninguna relación real con el funcionamiento placentario ni con el crecimiento fetal', 'El crecimiento fetal nunca se ve afectado por ningún proceso vascular relacionado con trastornos hipertensivos maternos', 'La vigilancia adicional del crecimiento fetal nunca es necesaria en una gestante con preeclampsia diagnosticada'],
  ok:0,
  clave:'Porque el mismo proceso vascular anormal que genera la elevación de la presión arterial materna puede comprometer simultáneamente el funcionamiento placentario y el crecimiento fetal.',
  exp:'El mismo proceso vascular anormal que genera la elevación de la presión arterial materna en la preeclampsia puede simultáneamente comprometer el funcionamiento placentario y, con ello, el crecimiento fetal.',
  no:{
    1:'La preeclampsia sí tiene una relación fisiopatológica directa con el funcionamiento placentario y el crecimiento fetal.',
    2:'El crecimiento fetal sí puede verse afectado por el mismo proceso vascular anormal de los trastornos hipertensivos.',
    3:'Es precisamente lo contrario: la vigilancia adicional del crecimiento fetal SÍ es necesaria en una gestante con preeclampsia.'
  },
  trampa:'No reconocer la conexión fisiopatológica compartida entre los trastornos hipertensivos del embarazo y la restricción del crecimiento fetal.',
  obj:'Explicar la conexión fisiopatológica entre la preeclampsia y la restricción del crecimiento fetal.',
  ref:'Williams, Obstetricia, cap. 44.',
  tags:['insuficiencia placentaria','conexión con trastornos hipertensivos']
},
{
  id:'U12-OB2-Q27', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Restricción del crecimiento intrauterino', sub:'Integración de herramientas de vigilancia fetal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se combina la vigilancia de un feto con sospecha de restricción de crecimiento?',
  ops:[
    'Integrando la biometría fetal seriada (para evaluar el tamaño), el doppler obstétrico (para evaluar la función placentaria), y otras pruebas de bienestar fetal', 'Esta vigilancia se limita exclusivamente a la biometría fetal, sin ninguna relación con el doppler obstétrico', 'Esta vigilancia se limita exclusivamente al doppler obstétrico, sin ninguna relación con la biometría fetal', 'La vigilancia de un feto con sospecha de restricción de crecimiento nunca combina distintas herramientas de imagen'],
  ok:0,
  clave:'Integrando la biometría fetal seriada (para evaluar el tamaño), el doppler obstétrico (para evaluar la función placentaria), y otras pruebas de bienestar fetal.',
  exp:'La vigilancia combina, de forma integrada, la biometría fetal seriada, el doppler obstétrico, y en casos avanzados, otras pruebas de bienestar fetal -distintas herramientas que se complementan para responder una pregunta clínica compleja.',
  no:{
    1:'La vigilancia va más allá de la biometría sola; también integra el doppler obstétrico y otras pruebas complementarias.',
    2:'La vigilancia va más allá del doppler solo; también integra la biometría fetal seriada y otras pruebas complementarias.',
    3:'Es precisamente lo contrario: esta vigilancia SÍ combina distintas herramientas de imagen de forma integrada.'
  },
  trampa:'Reducir la vigilancia de un feto con sospecha de restricción de crecimiento a una sola herramienta aislada, sin reconocer su combinación integrada.',
  obj:'Explicar cómo se integran distintas herramientas en la vigilancia de un feto con sospecha de restricción de crecimiento.',
  ref:'Williams, Obstetricia, cap. 44.',
  tags:['doppler obstétrico','integración de herramientas de vigilancia']
},
{
  id:'U12-OB2-Q28', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Cesárea: indicaciones y técnica', sub:'La cesárea como decisión que exige justificación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la cesárea, como cualquier intervención quirúrgica, exige una indicación clara que justifique sus riesgos frente a los de un parto vaginal?',
  ops:[
    'Porque toda intervención quirúrgica conlleva riesgos propios que deben justificarse frente a los riesgos de la alternativa disponible, en este caso el parto vaginal', 'La cesárea nunca conlleva ningún riesgo real que deba justificarse frente a los riesgos de un parto vaginal', 'El parto vaginal siempre conlleva más riesgos que la cesárea, sin importar las condiciones específicas de cada caso', 'Ninguna intervención quirúrgica en medicina requiere realmente una indicación clara que la justifique'],
  ok:0,
  clave:'Porque toda intervención quirúrgica conlleva riesgos propios que deben justificarse frente a los riesgos de la alternativa disponible, en este caso el parto vaginal.',
  exp:'La cesárea, como cualquier intervención quirúrgica, exige una indicación clara que justifique sus riesgos frente a los de un parto vaginal, entender esa lógica es más relevante que memorizar la técnica quirúrgica en sí misma.',
  no:{
    1:'Es precisamente lo contrario: la cesárea SÍ conlleva riesgos propios que deben justificarse frente a la alternativa.',
    2:'No siempre el parto vaginal conlleva más riesgo; depende de las condiciones específicas de cada caso evaluado.',
    3:'Es precisamente lo contrario: toda intervención quirúrgica SÍ requiere una indicación clara que la justifique.'
  },
  trampa:'Asumir que la cesárea nunca conlleva riesgos propios que deban justificarse, o que el parto vaginal siempre es más riesgoso sin importar el caso.',
  obj:'Explicar por qué la cesárea exige una indicación clara que justifique sus riesgos frente al parto vaginal.',
  ref:'Williams, Obstetricia, cap. 30.',
  tags:['indicaciones de cesárea','justificación de riesgos quirúrgicos']
}

]);
