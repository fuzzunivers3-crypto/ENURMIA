/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 11, TANDA DE NUTRICIÓN (1/2)
   Primer banco de esta materia (0 preguntas previas). Prefijo
   U11-NUT-. Cubre los primeros 4 temas: evaluacion del estado
   nutricional, macronutrientes y micronutrientes, desnutricion
   y malnutricion, y obesidad (Q01-Q29).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== NUTRICIÓN ===================== */
{
  id:'U11-NUT-Q01', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Evaluación del estado nutricional', sub:'Cálculo y utilidad del índice de masa corporal',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se calcula el índice de masa corporal, y para qué se utiliza?',
  ops:[
    'Peso en kilogramos dividido entre la talla en metros al cuadrado, utilizado para clasificar el estado nutricional de un adulto en categorías generales', 'Peso en kilogramos multiplicado por la talla en metros, utilizado exclusivamente para evaluar la masa muscular de una persona', 'El índice de masa corporal se calcula únicamente con la circunferencia de cintura, sin ninguna relación con el peso o la talla', 'El índice de masa corporal no tiene ninguna utilidad clínica real para clasificar el estado nutricional de un adulto'],
  ok:0,
  clave:'Peso en kilogramos dividido entre la talla en metros al cuadrado, utilizado para clasificar el estado nutricional de un adulto en categorías generales.',
  exp:'El índice de masa corporal (peso en kilogramos dividido entre la talla en metros al cuadrado) es la herramienta más ampliamente utilizada para clasificar el estado nutricional de un adulto en categorías generales.',
  no:{
    1:'La fórmula correcta es peso dividido entre talla al cuadrado, no peso multiplicado por talla; tampoco evalúa masa muscular directamente.',
    2:'El índice de masa corporal se calcula con peso y talla, no con la circunferencia de cintura, que es una medición complementaria distinta.',
    3:'El índice de masa corporal sí tiene una utilidad clínica real como punto de partida para clasificar el estado nutricional.'
  },
  trampa:'Confundir la fórmula del índice de masa corporal, o confundirlo con otras mediciones antropométricas como la circunferencia de cintura.',
  obj:'Explicar cómo se calcula el índice de masa corporal y su utilidad clínica.',
  ref:'Krause, Dietoterapia, cap. 7.',
  tags:['índice de masa corporal','cálculo y utilidad']
},
{
  id:'U11-NUT-Q02', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Evaluación del estado nutricional', sub:'Limitaciones del índice de masa corporal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué limitación reconocida tiene el índice de masa corporal como herramienta de evaluación nutricional?',
  ops:[
    'No distingue entre masa muscular y masa grasa, por lo que puede clasificar erróneamente a una persona muy musculosa como con sobrepeso', 'El índice de masa corporal nunca tiene ninguna limitación real reconocida en la práctica clínica actual', 'El índice de masa corporal siempre distingue con total precisión entre masa muscular y masa grasa corporal', 'La única limitación del índice de masa corporal es que no puede calcularse en personas mayores de 65 años'],
  ok:0,
  clave:'No distingue entre masa muscular y masa grasa, por lo que puede clasificar erróneamente a una persona muy musculosa como con sobrepeso.',
  exp:'Este indicador tiene limitaciones reconocidas: no distingue entre masa muscular y masa grasa, por lo que puede clasificar erróneamente a una persona muy musculosa como con sobrepeso, y no aporta información sobre la distribución de la grasa corporal.',
  no:{
    1:'El índice de masa corporal sí tiene limitaciones reales y bien reconocidas en la práctica clínica.',
    2:'Es precisamente lo contrario: el índice de masa corporal NO distingue entre masa muscular y masa grasa.',
    3:'La limitación principal no está relacionada con la edad; se relaciona con no distinguir composición corporal ni distribución de grasa.'
  },
  trampa:'Asumir que el índice de masa corporal es una medida perfecta sin limitaciones, sin reconocer que no distingue composición corporal.',
  obj:'Explicar la limitación del índice de masa corporal respecto a la composición corporal.',
  ref:'Krause, Dietoterapia, cap. 7.',
  tags:['índice de masa corporal','limitación de composición corporal']
},
{
  id:'U11-NUT-Q03', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Evaluación del estado nutricional', sub:'Componentes adicionales de la evaluación antropométrica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué mediciones complementarias incluye la evaluación antropométrica, además del peso y la talla?',
  ops:[
    'La circunferencia de cintura y, en contextos específicos, pliegues cutáneos que estiman de forma indirecta la proporción de grasa corporal', 'La evaluación antropométrica se limita exclusivamente al peso y la talla, sin ninguna medición complementaria adicional', 'Únicamente estudios de laboratorio, sin ninguna medición física directa como parte de la evaluación antropométrica', 'La evaluación antropométrica nunca incluye ninguna medición relacionada con la distribución de grasa corporal'],
  ok:0,
  clave:'La circunferencia de cintura y, en contextos específicos, pliegues cutáneos que estiman de forma indirecta la proporción de grasa corporal.',
  exp:'La evaluación antropométrica incluye, además del peso y la talla, otras mediciones complementarias como la circunferencia de cintura y, en contextos específicos, pliegues cutáneos que estiman de forma indirecta la proporción de grasa corporal.',
  no:{
    1:'La evaluación antropométrica va más allá del peso y la talla; incluye mediciones complementarias adicionales.',
    2:'La evaluación antropométrica se basa en mediciones físicas directas, no en estudios de laboratorio.',
    3:'La evaluación antropométrica sí incluye mediciones relacionadas con la distribución de grasa corporal, como la circunferencia de cintura.'
  },
  trampa:'Reducir la evaluación antropométrica a solo peso y talla, sin reconocer las mediciones complementarias adicionales.',
  obj:'Identificar las mediciones complementarias que incluye la evaluación antropométrica.',
  ref:'Krause, Dietoterapia, cap. 7.',
  tags:['evaluación antropométrica','mediciones complementarias']
},
{
  id:'U11-NUT-Q04', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Evaluación del estado nutricional', sub:'Interpretación de la antropometría pediátrica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la evaluación antropométrica en el paciente pediátrico se interpreta contra curvas de crecimiento específicas, en vez de contra los mismos puntos de corte fijos usados en adultos?',
  ops:[
    'Porque el niño no es un adulto pequeño, retomando el principio ya visto en Pediatría I; se compara contra curvas específicas por edad y sexo', 'La antropometría pediátrica siempre se interpreta con exactamente los mismos puntos de corte fijos utilizados en adultos', 'No existe ninguna diferencia real entre interpretar la antropometría de un niño y la de un adulto en la práctica clínica', 'Las curvas de crecimiento específicas por edad nunca tienen ninguna relación real con la evaluación antropométrica pediátrica'],
  ok:0,
  clave:'Porque el niño no es un adulto pequeño, retomando el principio ya visto en Pediatría I; se compara contra curvas específicas por edad y sexo.',
  exp:'En el paciente pediátrico, la evaluación antropométrica se interpreta contra curvas de crecimiento específicas por edad y sexo, ya vistas en Pediatría I, en vez de contra los mismos puntos de corte fijos utilizados en adultos -otro ejemplo de que el niño no es un adulto pequeño.',
  no:{
    1:'Es precisamente lo contrario: la antropometría pediátrica NO usa los mismos puntos de corte fijos que en adultos.',
    2:'Sí existe una diferencia real: la interpretación pediátrica requiere curvas específicas por edad y sexo, distinta de la adulta.',
    3:'Las curvas de crecimiento específicas sí tienen una relación directa y central con la evaluación antropométrica pediátrica.'
  },
  trampa:'Aplicar los mismos puntos de corte fijos usados en adultos a la interpretación antropométrica de un paciente pediátrico.',
  obj:'Explicar por qué la antropometría pediátrica se interpreta contra curvas específicas, retomando el principio ya visto en Pediatría I.',
  ref:'Krause, Dietoterapia, cap. 7.',
  tags:['evaluación antropométrica','interpretación pediátrica']
},
{
  id:'U11-NUT-Q05', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Evaluación del estado nutricional', sub:'Qué aporta la historia dietética',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué aporta la historia dietética que la evaluación antropométrica por sí sola no logra proporcionar?',
  ops:[
    'El contexto necesario para entender por qué un paciente presenta el estado nutricional identificado, no solo cuál es ese estado', 'La historia dietética nunca aporta ninguna información adicional relevante más allá de la evaluación antropométrica', 'La evaluación antropométrica siempre explica por sí sola las causas del estado nutricional de cualquier paciente', 'La historia dietética es exactamente equivalente a la evaluación antropométrica, sin ninguna diferencia real de propósito'],
  ok:0,
  clave:'El contexto necesario para entender por qué un paciente presenta el estado nutricional identificado, no solo cuál es ese estado.',
  exp:'La historia dietética complementa la evaluación antropométrica aportando el contexto necesario para entender por qué un paciente presenta el estado nutricional identificado, no solo cuál es ese estado -el "por qué", no solo el "qué".',
  no:{
    1:'La historia dietética sí aporta información adicional relevante, complementando la evaluación antropométrica.',
    2:'La evaluación antropométrica describe el estado nutricional, pero no explica por sí sola sus causas subyacentes.',
    3:'Son componentes distintos y complementarios: uno describe el estado ("qué"), el otro explica el contexto ("por qué").'
  },
  trampa:'Asumir que la evaluación antropométrica por sí sola es suficiente, sin reconocer el valor complementario de la historia dietética.',
  obj:'Explicar el valor complementario de la historia dietética frente a la evaluación antropométrica.',
  ref:'Krause, Dietoterapia, cap. 7.',
  tags:['historia dietética','complemento a la antropometría']
},
{
  id:'U11-NUT-Q06', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Evaluación del estado nutricional', sub:'Por qué integrar la evaluación nutricional en la consulta general',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico general considera que la evaluación nutricional (antropométrica y dietética) debería reservarse exclusivamente para consultas específicas de nutrición, no integrarse a su consulta general habitual.',
  enunciado:'¿Qué principio de este tema cuestiona esta postura del médico?',
  ops:[
    'Que la evaluación nutricional debe integrarse como parte habitual de la consulta médica general, no reservarse exclusivamente para consultas específicas de nutrición', 'Esta postura es completamente apropiada, ya que la evaluación nutricional siempre debe reservarse exclusivamente para especialistas en nutrición', 'La evaluación nutricional nunca aporta información clínica relevante fuera de una consulta específica de nutrición', 'Integrar la evaluación nutricional en la consulta general nunca ha sido una recomendación reconocida en la práctica clínica'],
  ok:0,
  clave:'Que la evaluación nutricional debe integrarse como parte habitual de la consulta médica general, no reservarse exclusivamente para consultas específicas de nutrición.',
  exp:'La evaluación nutricional -antropométrica y dietética combinada- debe integrarse como parte habitual de la consulta médica general, no reservarse exclusivamente para consultas específicas de nutrición.',
  no:{
    1:'Esta postura es cuestionable: la evaluación nutricional debe integrarse en la consulta general, no reservarse solo a especialistas.',
    2:'Es precisamente lo contrario: la evaluación nutricional SÍ aporta información clínica relevante en cualquier consulta general.',
    3:'Integrar la evaluación nutricional en la consulta general sí es una recomendación reconocida y valorada en la práctica clínica.'
  },
  trampa:'Asumir que la evaluación nutricional es un procedimiento exclusivo de especialistas, sin reconocer su valor como parte de cualquier consulta médica.',
  obj:'Aplicar el principio de integrar la evaluación nutricional como parte habitual de la consulta médica general.',
  ref:'Krause, Dietoterapia, cap. 7.',
  tags:['evaluación del estado nutricional','integración en consulta general']
},
{
  id:'U11-NUT-Q07', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Evaluación del estado nutricional', sub:'Conexión con las curvas de crecimiento ya vistas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué principio ya visto en Pediatría I se conecta la lógica de combinar varias mediciones antropométricas en vez de una sola aislada?',
  ops:[
    'El mismo principio ya visto sobre las curvas de crecimiento: una sola medición aislada aporta menos información que un conjunto de mediciones complementarias interpretadas en conjunto', 'Esta lógica no tiene ninguna relación real con ningún concepto ya visto sobre curvas de crecimiento en Pediatría I', 'El signo de Blumberg ya visto en Semiología Quirúrgica, sin ninguna relación real con esta lógica de mediciones combinadas', 'La escala de Glasgow ya vista en Neurología, sin ninguna relación real con la evaluación antropométrica combinada'],
  ok:0,
  clave:'El mismo principio ya visto sobre las curvas de crecimiento: una sola medición aislada aporta menos información que un conjunto de mediciones complementarias interpretadas en conjunto.',
  exp:'Esta evaluación más completa retoma la misma lógica ya vista sobre las curvas de crecimiento en Pediatría I: una sola medición aislada aporta menos información que un conjunto de mediciones complementarias interpretadas en conjunto.',
  no:{
    1:'Sí existe una conexión conceptual directa con la lógica de las curvas de crecimiento ya vista en Pediatría I.',
    2:'El signo de Blumberg es un hallazgo semiológico distinto, sin relación conceptual con esta lógica de mediciones combinadas.',
    3:'La escala de Glasgow es una herramienta de evaluación neurológica distinta, sin relación conceptual con esta lógica.'
  },
  trampa:'No reconocer la conexión conceptual correcta entre combinar mediciones antropométricas y la lógica de trayectoria ya vista en curvas de crecimiento.',
  obj:'Identificar la conexión entre combinar mediciones antropométricas y la lógica de las curvas de crecimiento ya vista en Pediatría I.',
  ref:'Krause, Dietoterapia, cap. 7.',
  tags:['evaluación antropométrica','conexión con curvas de crecimiento']
},
{
  id:'U11-NUT-Q08', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Evaluación del estado nutricional', sub:'Consecuencia de omitir la historia dietética',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué consecuencia tiene una evaluación nutricional que se queda solo en el "qué" (estado nutricional actual) sin llegar al "por qué" (hábitos y patrones)?',
  ops:[
    'Compromete la efectividad de cualquier intervención nutricional posterior, que depende de entender estos patrones específicos para orientarse de forma realista y efectiva', 'Esta limitación nunca tiene ninguna consecuencia real sobre la efectividad de una intervención nutricional posterior', 'Una intervención nutricional siempre es igual de efectiva, sin importar si se conocen o no los patrones dietéticos del paciente', 'Conocer el "por qué" del estado nutricional actual nunca influye realmente en el diseño de una intervención posterior'],
  ok:0,
  clave:'Compromete la efectividad de cualquier intervención nutricional posterior, que depende de entender estos patrones específicos para orientarse de forma realista y efectiva.',
  exp:'Sin la información dietética, cualquier intervención nutricional posterior depende de entender estos patrones específicos para poder orientarse de forma realista y efectiva -una limitación relevante que compromete esa efectividad futura.',
  no:{
    1:'Es precisamente lo contrario: quedarse solo en el "qué" SÍ compromete la efectividad de cualquier intervención posterior.',
    2:'Es precisamente lo contrario: una intervención sin conocer los patrones dietéticos tiende a ser menos efectiva.',
    3:'Conocer el "por qué" sí influye directamente en el diseño de una intervención nutricional posterior más efectiva.'
  },
  trampa:'Asumir que una evaluación nutricional limitada al estado actual, sin conocer sus causas dietéticas, es suficiente para diseñar una intervención efectiva.',
  obj:'Explicar la consecuencia de omitir el "por qué" (historia dietética) en una evaluación nutricional.',
  ref:'Krause, Dietoterapia, cap. 7.',
  tags:['historia dietética','consecuencia de omisión']
},
{
  id:'U11-NUT-Q09', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Macronutrientes y micronutrientes', sub:'Cuáles son los tres macronutrientes',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son los tres macronutrientes?',
  ops:[
    'Carbohidratos, proteínas, y grasas', 'Únicamente vitaminas y minerales, sin ninguna relación con carbohidratos, proteínas o grasas', 'Solo el hierro y el ácido fólico, siendo estos los únicos macronutrientes reconocidos clínicamente', 'Los macronutrientes no tienen ninguna clasificación específica reconocida en la nutrición clínica'],
  ok:0,
  clave:'Carbohidratos, proteínas, y grasas.',
  exp:'Los macronutrientes -carbohidratos, proteínas, y grasas- son los nutrientes que el cuerpo requiere en cantidades relativamente grandes, aportando energía y sirviendo como materia prima para tejidos.',
  no:{
    1:'Vitaminas y minerales corresponden a los micronutrientes, no a los macronutrientes descritos en este tema.',
    2:'El hierro y el ácido fólico son ejemplos de micronutrientes específicos, no de macronutrientes.',
    3:'Los macronutrientes sí tienen una clasificación específica y bien reconocida en la nutrición clínica.'
  },
  trampa:'Confundir los macronutrientes (carbohidratos, proteínas, grasas) con los micronutrientes (vitaminas, minerales).',
  obj:'Identificar los tres macronutrientes.',
  ref:'Krause, Dietoterapia, cap. 1.',
  tags:['macronutrientes','identificación']
},
{
  id:'U11-NUT-Q10', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Macronutrientes y micronutrientes', sub:'Por qué no existe un requerimiento calórico único',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué no existe un requerimiento calórico único aplicable a cualquier persona?',
  ops:[
    'Porque varía considerablemente según la edad, el sexo, el nivel de actividad física, y condiciones fisiológicas específicas de cada individuo', 'El requerimiento calórico es exactamente el mismo para cualquier persona, sin importar su edad, sexo o nivel de actividad física', 'La variación del requerimiento calórico nunca tiene ninguna relación real con condiciones fisiológicas específicas como el embarazo', 'El requerimiento calórico solo varía según el sexo de la persona, sin ninguna relación con la edad o la actividad física'],
  ok:0,
  clave:'Porque varía considerablemente según la edad, el sexo, el nivel de actividad física, y condiciones fisiológicas específicas de cada individuo.',
  exp:'El requerimiento calórico varía considerablemente según la edad, el sexo, el nivel de actividad física, y condiciones fisiológicas específicas, por lo que no existe un valor único aplicable a cualquier persona.',
  no:{
    1:'Es precisamente lo contrario: el requerimiento calórico VARÍA considerablemente según múltiples factores individuales.',
    2:'Condiciones fisiológicas como el embarazo sí influyen directamente en el requerimiento calórico de una persona.',
    3:'El requerimiento calórico varía según múltiples factores (edad, sexo, actividad, condiciones fisiológicas), no solo el sexo.'
  },
  trampa:'Asumir que el requerimiento calórico es un valor fijo aplicable de igual forma a cualquier persona, sin individualizar según sus características.',
  obj:'Explicar por qué el requerimiento calórico varía según las características individuales de cada persona.',
  ref:'Krause, Dietoterapia, cap. 1.',
  tags:['requerimiento calórico','individualización']
},
{
  id:'U11-NUT-Q11', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Macronutrientes y micronutrientes', sub:'Ejemplos de micronutrientes y sus consecuencias clínicas documentadas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ejemplos ya vistos en otros bloques ilustran cómo un déficit de micronutriente específico puede generar consecuencias clínicas concretas?',
  ops:[
    'El hierro y su relación con la anemia ferropénica infantil (Pediatría I), y el ácido fólico y su relación con defectos del tubo neural (Obstetricia I)', 'Ningún micronutriente específico tiene una consecuencia clínica documentada real en la literatura médica actual', 'Los macronutrientes, no los micronutrientes, son los únicos con consecuencias clínicas documentadas por déficit', 'El déficit de micronutrientes nunca tiene ninguna relación real con ninguna consecuencia clínica específica documentada'],
  ok:0,
  clave:'El hierro y su relación con la anemia ferropénica infantil (Pediatría I), y el ácido fólico y su relación con defectos del tubo neural (Obstetricia I).',
  exp:'El ejemplo ya visto del hierro y su relación con la anemia ferropénica infantil (Pediatría I) y el ácido fólico y su relación con los defectos del tubo neural (Obstetricia I) ilustran cómo un déficit de micronutriente específico puede generar consecuencias clínicas concretas.',
  no:{
    1:'Sí existen ejemplos documentados y ya vistos en este pensum de consecuencias clínicas por déficit de micronutrientes específicos.',
    2:'Tanto macronutrientes como micronutrientes pueden tener consecuencias clínicas documentadas por déficit.',
    3:'El déficit de micronutrientes sí tiene consecuencias clínicas específicas bien documentadas, como los ejemplos ya vistos.'
  },
  trampa:'Subestimar las consecuencias clínicas documentadas del déficit de micronutrientes específicos, sin reconocer los ejemplos ya vistos en el pensum.',
  obj:'Identificar ejemplos ya vistos de consecuencias clínicas por déficit de micronutrientes específicos.',
  ref:'Krause, Dietoterapia, cap. 1.',
  tags:['micronutrientes esenciales','ejemplos de consecuencias clínicas']
},
{
  id:'U11-NUT-Q12', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Macronutrientes y micronutrientes', sub:'Por qué la deficiencia de micronutrientes puede pasar desapercibida',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la deficiencia de un micronutriente específico puede pasar desapercibida en una persona con peso corporal aparentemente normal?',
  ops:[
    'Porque, a diferencia de los macronutrientes (cuya deficiencia o exceso se refleja con frecuencia en el peso corporal), el déficit de un micronutriente no necesariamente altera el peso de forma detectable', 'La deficiencia de un micronutriente siempre se refleja de forma inmediata y evidente en el peso corporal de la persona afectada', 'El peso corporal normal siempre descarta con total certeza cualquier posible deficiencia de micronutrientes específicos', 'La deficiencia de micronutrientes nunca puede coexistir con un peso corporal aparentemente normal en ningún paciente'],
  ok:0,
  clave:'Porque, a diferencia de los macronutrientes (cuya deficiencia o exceso se refleja con frecuencia en el peso corporal), el déficit de un micronutriente no necesariamente altera el peso de forma detectable.',
  exp:'A diferencia de los macronutrientes, cuya deficiencia o exceso con frecuencia se refleja en el peso corporal, la deficiencia de un micronutriente específico puede pasar desapercibida en una persona con peso corporal aparentemente normal.',
  no:{
    1:'Es precisamente lo contrario: la deficiencia de un micronutriente NO siempre se refleja de forma evidente en el peso corporal.',
    2:'Es precisamente lo contrario: un peso normal NO descarta con certeza la presencia de deficiencias específicas de micronutrientes.',
    3:'Es precisamente lo contrario: la deficiencia de micronutrientes SÍ puede coexistir con un peso corporal aparentemente normal.'
  },
  trampa:'Asumir que un peso corporal normal descarta cualquier posible deficiencia de micronutrientes específicos en una persona.',
  obj:'Explicar por qué la deficiencia de un micronutriente puede coexistir con un peso corporal aparentemente normal.',
  ref:'Krause, Dietoterapia, cap. 1.',
  tags:['micronutrientes esenciales','peso normal no descarta deficiencia']
},
{
  id:'U11-NUT-Q13', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Macronutrientes y micronutrientes', sub:'Función principal de las proteínas',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la función principal de las proteínas dentro de los macronutrientes, a diferencia de carbohidratos y grasas?',
  ops:[
    'Función principalmente estructural, aunque también pueden usarse como fuente de energía en ciertas circunstancias', 'Las proteínas tienen exactamente la misma función energética exclusiva que los carbohidratos, sin ninguna función estructural', 'Las proteínas nunca pueden utilizarse como fuente de energía bajo ninguna circunstancia fisiológica particular', 'Las proteínas no tienen ninguna función reconocida distinta de la de los carbohidratos o las grasas'],
  ok:0,
  clave:'Función principalmente estructural, aunque también pueden usarse como fuente de energía en ciertas circunstancias.',
  exp:'Las proteínas, a diferencia de los otros macronutrientes, tienen como función principal la estructural, aunque también pueden usarse como fuente de energía en ciertas circunstancias.',
  no:{
    1:'Es precisamente lo contrario: la función principal de las proteínas es ESTRUCTURAL, no exclusivamente energética como los carbohidratos.',
    2:'Es precisamente lo contrario: las proteínas SÍ pueden usarse como fuente de energía en ciertas circunstancias específicas.',
    3:'Las proteínas sí tienen una función distintiva (estructural) diferente de la principalmente energética de carbohidratos y grasas.'
  },
  trampa:'Asumir que las proteínas cumplen exactamente la misma función energética que los carbohidratos, sin reconocer su función estructural principal.',
  obj:'Explicar la función principal de las proteínas dentro de los macronutrientes.',
  ref:'Krause, Dietoterapia, cap. 1.',
  tags:['macronutrientes','función estructural de las proteínas']
},
{
  id:'U11-NUT-Q14', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Macronutrientes y micronutrientes', sub:'Individualización del requerimiento calórico según situación fisiológica',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un nutricionista aplica exactamente el mismo requerimiento calórico recomendado a una mujer gestante y a una mujer no gestante de la misma edad y peso, sin ajustar por el embarazo.',
  enunciado:'¿Qué principio de este tema cuestiona esta conducta?',
  ops:[
    'Que el requerimiento calórico varía según condiciones fisiológicas específicas, como el embarazo, y debe individualizarse en consecuencia', 'Esta conducta es completamente apropiada, ya que el embarazo nunca modifica realmente el requerimiento calórico de una mujer', 'El requerimiento calórico de una mujer gestante siempre es exactamente idéntico al de una mujer no gestante equivalente', 'La individualización del requerimiento calórico según condiciones fisiológicas nunca ha sido un principio reconocido en nutrición'],
  ok:0,
  clave:'Que el requerimiento calórico varía según condiciones fisiológicas específicas, como el embarazo, y debe individualizarse en consecuencia.',
  exp:'El requerimiento calórico varía considerablemente según condiciones fisiológicas específicas, incluyendo las demandas adicionales del embarazo ya vistas en Obstetricia I, por lo que aplicar el mismo requerimiento sin ajustar contradice este principio de individualización.',
  no:{
    1:'Es precisamente lo contrario: el embarazo SÍ modifica el requerimiento calórico, y esta conducta debería ajustarse en consecuencia.',
    2:'Es precisamente lo contrario: el requerimiento calórico de una gestante NO es idéntico al de una mujer no gestante equivalente.',
    3:'La individualización según condiciones fisiológicas sí es un principio reconocido y central en la nutrición clínica.'
  },
  trampa:'Aplicar un requerimiento calórico genérico sin ajustar por condiciones fisiológicas específicas como el embarazo.',
  obj:'Aplicar el principio de individualización del requerimiento calórico según condiciones fisiológicas específicas.',
  ref:'Krause, Dietoterapia, cap. 1.',
  tags:['requerimiento calórico','individualización según condición fisiológica']
},
{
  id:'U11-NUT-Q15', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Macronutrientes y micronutrientes', sub:'Qué son los micronutrientes esenciales',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué son los micronutrientes esenciales?',
  ops:[
    'Vitaminas y minerales, requeridos en cantidades mucho menores que los macronutrientes, pero igualmente indispensables para múltiples funciones corporales', 'Los micronutrientes esenciales son exactamente lo mismo que los macronutrientes, sin ninguna diferencia real en su definición', 'Los micronutrientes esenciales se requieren en cantidades mayores que los macronutrientes para el funcionamiento corporal', 'Los micronutrientes esenciales no tienen ninguna importancia real para el funcionamiento del organismo humano'],
  ok:0,
  clave:'Vitaminas y minerales, requeridos en cantidades mucho menores que los macronutrientes, pero igualmente indispensables para múltiples funciones corporales.',
  exp:'Los micronutrientes esenciales -vitaminas y minerales- se requieren en cantidades mucho menores que los macronutrientes, pero son igualmente indispensables para múltiples funciones corporales.',
  no:{
    1:'Son categorías distintas: los macronutrientes se requieren en grandes cantidades, y los micronutrientes en cantidades pequeñas.',
    2:'Es precisamente lo contrario: los micronutrientes se requieren en cantidades MENORES, no mayores, que los macronutrientes.',
    3:'Los micronutrientes esenciales sí tienen una importancia real y bien documentada para el funcionamiento del organismo.'
  },
  trampa:'Confundir la cantidad requerida de micronutrientes con la de macronutrientes, o subestimar su importancia funcional.',
  obj:'Definir qué son los micronutrientes esenciales.',
  ref:'Krause, Dietoterapia, cap. 1.',
  tags:['micronutrientes esenciales','definición']
},
{
  id:'U11-NUT-Q16', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Desnutrición y malnutrición', sub:'La desnutrición proteico-calórica más allá de la infancia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la desnutrición proteico-calórica no debe considerarse exclusiva de la infancia?',
  ops:[
    'Porque puede presentarse en cualquier etapa de la vida cuando el aporte de energía y proteínas es insuficiente de forma sostenida para cubrir las necesidades del organismo', 'La desnutrición proteico-calórica solo puede ocurrir durante la infancia, sin ninguna posibilidad real de presentarse en otras etapas', 'Los mismos principios fisiopatológicos de la desnutrición infantil nunca se extienden a otras etapas de la vida', 'La desnutrición proteico-calórica en el adulto nunca comparte ningún principio fisiopatológico con la forma pediátrica'],
  ok:0,
  clave:'Porque puede presentarse en cualquier etapa de la vida cuando el aporte de energía y proteínas es insuficiente de forma sostenida para cubrir las necesidades del organismo.',
  exp:'La desnutrición proteico-calórica no es exclusiva de la infancia: puede presentarse en cualquier etapa de la vida cuando el aporte de energía y proteínas es insuficiente de forma sostenida para cubrir las necesidades del organismo.',
  no:{
    1:'Es precisamente lo contrario: la desnutrición proteico-calórica SÍ puede ocurrir en cualquier etapa de la vida, no solo en la infancia.',
    2:'Los mismos principios fisiopatológicos SÍ se extienden, con adaptaciones, a otras etapas de la vida más allá de la infancia.',
    3:'La desnutrición del adulto sí comparte los principios fisiopatológicos básicos ya vistos en la forma pediátrica.'
  },
  trampa:'Limitar la sospecha clínica de desnutrición proteico-calórica al contexto pediátrico, sin considerar su posible presentación en otras etapas.',
  obj:'Explicar por qué la desnutrición proteico-calórica no debe considerarse exclusiva de la infancia.',
  ref:'Krause, Dietoterapia, cap. 19.',
  tags:['desnutrición proteico-calórica','no exclusiva de la infancia']
},
{
  id:'U11-NUT-Q17', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Desnutrición y malnutrición', sub:'Por qué la malnutrición en el adulto se subestima clínicamente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la malnutrición en el adulto con frecuencia se subestima clínicamente, particularmente en contextos de enfermedad crónica u hospitalización prolongada?',
  ops:[
    'Porque el deterioro nutricional puede atribuirse exclusivamente a la enfermedad de base, sin reconocer activamente el componente nutricional específico que también amerita intervención', 'La malnutrición en el adulto nunca ha sido un problema real reconocido en contextos de enfermedad crónica o de hospitalización', 'El deterioro nutricional en un paciente hospitalizado siempre se reconoce de inmediato como un problema nutricional independiente', 'La malnutrición en el adulto nunca tiene ninguna relación real con el contexto de enfermedad crónica u hospitalización'],
  ok:0,
  clave:'Porque el deterioro nutricional puede atribuirse exclusivamente a la enfermedad de base, sin reconocer activamente el componente nutricional específico que también amerita intervención.',
  exp:'La malnutrición en el adulto con frecuencia se subestima porque el paciente puede perder peso y masa muscular sin que este deterioro se reconozca activamente como un problema nutricional, sino que se atribuye exclusivamente a la enfermedad de base.',
  no:{
    1:'Es precisamente lo contrario: la malnutrición en el adulto SÍ es un problema real, particularmente en estos contextos.',
    2:'Es precisamente lo contrario: el deterioro nutricional con frecuencia NO se reconoce de inmediato como problema independiente.',
    3:'La malnutrición en el adulto sí tiene una relación real y frecuente con el contexto de enfermedad crónica u hospitalización.'
  },
  trampa:'Atribuir automáticamente el deterioro nutricional de un paciente crónico u hospitalizado exclusivamente a su enfermedad de base, sin evaluar el componente nutricional.',
  obj:'Explicar por qué la malnutrición en el adulto con frecuencia se subestima clínicamente.',
  ref:'Krause, Dietoterapia, cap. 19.',
  tags:['malnutrición en el adulto','subestimación clínica']
},
{
  id:'U11-NUT-Q18', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Desnutrición y malnutrición', sub:'Coexistencia de exceso calórico y déficit de micronutrientes',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una persona con sobrepeso, cuya alimentación es excesiva en calorías totales pero pobre en variedad de alimentos, es evaluada y se descubre que presenta una deficiencia específica de cierta vitamina.',
  enunciado:'¿Qué fenómeno ilustra este caso, según lo visto en este tema?',
  ops:[
    'Que el déficit de micronutrientes puede acompañar, de forma menos intuitiva, a estados de exceso calórico, si la alimentación es pobre en variedad y calidad nutricional', 'Este caso es imposible en la práctica clínica real, ya que el exceso calórico siempre descarta cualquier deficiencia de micronutrientes', 'El sobrepeso siempre garantiza automáticamente un aporte adecuado y completo de todos los micronutrientes esenciales', 'La variedad y calidad de la alimentación nunca tiene ninguna relación real con la presencia de deficiencias específicas de micronutrientes'],
  ok:0,
  clave:'Que el déficit de micronutrientes puede acompañar, de forma menos intuitiva, a estados de exceso calórico, si la alimentación es pobre en variedad y calidad nutricional.',
  exp:'El déficit de micronutrientes puede acompañar tanto a la desnutrición proteico-calórica como, de forma menos intuitiva, a estados de exceso calórico -una persona con sobrepeso puede presentar deficiencias específicas si su alimentación es pobre en variedad y calidad.',
  no:{
    1:'Este caso sí es posible y describe un fenómeno real reconocido: la coexistencia de exceso calórico con déficit de micronutrientes.',
    2:'Es precisamente lo contrario: el sobrepeso NO garantiza un aporte adecuado de todos los micronutrientes esenciales.',
    3:'La variedad y calidad de la alimentación sí tiene una relación directa con la presencia de deficiencias específicas.'
  },
  trampa:'Asumir que el sobrepeso o la obesidad descartan automáticamente cualquier posible deficiencia de micronutrientes específicos.',
  obj:'Aplicar el reconocimiento de la coexistencia de exceso calórico con déficit de micronutrientes en un caso clínico.',
  ref:'Krause, Dietoterapia, cap. 19.',
  tags:['déficit de micronutrientes','coexistencia con exceso calórico']
},
{
  id:'U11-NUT-Q19', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Desnutrición y malnutrición', sub:'Consecuencias de la malnutrición no reconocida en el hospital',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué consecuencia clínica tiene un paciente hospitalizado con malnutrición no reconocida y no tratada?',
  ops:[
    'Mayor riesgo de complicaciones, estancias hospitalarias más prolongadas, y peor recuperación general', 'La malnutrición no reconocida en un paciente hospitalizado nunca tiene ninguna consecuencia clínica real medible', 'Un paciente hospitalizado con malnutrición no tratada siempre tiene exactamente la misma recuperación que uno bien nutrido', 'La estancia hospitalaria nunca se ve afectada por la presencia de malnutrición no reconocida en un paciente'],
  ok:0,
  clave:'Mayor riesgo de complicaciones, estancias hospitalarias más prolongadas, y peor recuperación general.',
  exp:'Un paciente hospitalizado con malnutrición no reconocida y no tratada tiene mayor riesgo de complicaciones, estancias hospitalarias más prolongadas, y peor recuperación general.',
  no:{
    1:'Esta malnutrición no reconocida sí tiene consecuencias clínicas reales y medibles, documentadas en la literatura.',
    2:'Es precisamente lo contrario: un paciente con malnutrición no tratada tiene PEOR recuperación que uno bien nutrido.',
    3:'La estancia hospitalaria sí se ve afectada, tendiendo a prolongarse en presencia de malnutrición no reconocida.'
  },
  trampa:'Subestimar las consecuencias clínicas reales de la malnutrición no reconocida en un paciente hospitalizado.',
  obj:'Explicar las consecuencias clínicas de la malnutrición no reconocida en un paciente hospitalizado.',
  ref:'Krause, Dietoterapia, cap. 19.',
  tags:['malnutrición en el adulto','consecuencias en hospitalización']
},
{
  id:'U11-NUT-Q20', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Desnutrición y malnutrición', sub:'Concepto amplio de malnutrición',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué engloba el concepto de malnutrición en su sentido más amplio?',
  ops:[
    'Tanto el déficit como el exceso nutricional, y su posible coexistencia en una misma persona', 'La malnutrición en su sentido amplio se refiere exclusivamente al déficit nutricional, sin ninguna relación con el exceso', 'La malnutrición en su sentido amplio se refiere exclusivamente al exceso nutricional, sin ninguna relación con el déficit', 'El concepto de malnutrición nunca puede incluir tanto déficit como exceso nutricional simultáneamente en la misma persona'],
  ok:0,
  clave:'Tanto el déficit como el exceso nutricional, y su posible coexistencia en una misma persona.',
  exp:'Este fenómeno se conoce como malnutrición en su sentido más amplio, que engloba tanto el déficit como el exceso, y su posible coexistencia en una misma persona.',
  no:{
    1:'Es precisamente lo contrario: la malnutrición en sentido amplio incluye TAMBIÉN el exceso, no exclusivamente el déficit.',
    2:'Es precisamente lo contrario: la malnutrición en sentido amplio incluye TAMBIÉN el déficit, no exclusivamente el exceso.',
    3:'Es precisamente lo contrario: el concepto amplio de malnutrición SÍ puede incluir la coexistencia de déficit y exceso.'
  },
  trampa:'Reducir el concepto de malnutrición exclusivamente al déficit o exclusivamente al exceso, sin reconocer su sentido amplio combinado.',
  obj:'Definir el concepto amplio de malnutrición que engloba déficit, exceso, y su posible coexistencia.',
  ref:'Krause, Dietoterapia, cap. 19.',
  tags:['déficit de micronutrientes','concepto amplio de malnutrición']
},
{
  id:'U11-NUT-Q21', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Desnutrición y malnutrición', sub:'Marasmo y kwashiorkor en el adulto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué principio permite extender los conceptos de marasmo y kwashiorkor, ya vistos en la desnutrición infantil, a otras etapas de la vida?',
  ops:[
    'Que los mismos principios fisiopatológicos -déficit calórico global versus déficit predominantemente proteico- se extienden, con las adaptaciones correspondientes, a otras etapas de la vida', 'Los conceptos de marasmo y kwashiorkor son exclusivos de la infancia, sin ninguna posibilidad real de extenderse a otras etapas', 'El déficit calórico global y el déficit proteico nunca comparten ningún principio fisiopatológico común entre distintas etapas', 'Estos conceptos nunca han sido aplicables fuera del contexto específico de la desnutrición infantil pediátrica'],
  ok:0,
  clave:'Que los mismos principios fisiopatológicos -déficit calórico global versus déficit predominantemente proteico- se extienden, con las adaptaciones correspondientes, a otras etapas de la vida.',
  exp:'Los mismos principios fisiopatológicos aplicables a la desnutrición infantil -déficit calórico global versus déficit predominantemente proteico- se extienden, con las adaptaciones correspondientes, a otras etapas de la vida.',
  no:{
    1:'Es precisamente lo contrario: estos principios SÍ pueden extenderse, con adaptaciones, más allá del contexto pediátrico.',
    2:'Estos dos tipos de déficit sí comparten un principio fisiopatológico común, aplicable en distintas etapas de la vida.',
    3:'Estos conceptos sí son aplicables, con las adaptaciones correspondientes, fuera del contexto exclusivamente pediátrico.'
  },
  trampa:'Limitar los conceptos de marasmo y kwashiorkor exclusivamente al contexto pediátrico, sin reconocer su extensión a otras etapas de la vida.',
  obj:'Explicar cómo los principios fisiopatológicos del marasmo y kwashiorkor se extienden más allá de la infancia.',
  ref:'Krause, Dietoterapia, cap. 19.',
  tags:['desnutrición proteico-calórica','extensión de marasmo y kwashiorkor']
},
{
  id:'U11-NUT-Q22', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Desnutrición y malnutrición', sub:'Por qué el peso corporal por sí solo no descarta deficiencias',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el peso corporal por sí solo no permite descartar la presencia de deficiencias nutricionales específicas ocultas?',
  ops:[
    'Porque sin evaluar la calidad y variedad de la alimentación mediante la historia dietética, el peso no revela deficiencias específicas de micronutrientes', 'El peso corporal por sí solo siempre permite descartar con total certeza cualquier posible deficiencia nutricional específica', 'La calidad y variedad de la alimentación nunca tiene ninguna relación real con la presencia de deficiencias nutricionales ocultas', 'Un peso corporal normal siempre garantiza automáticamente que no existe ninguna deficiencia de micronutrientes en esa persona'],
  ok:0,
  clave:'Porque sin evaluar la calidad y variedad de la alimentación mediante la historia dietética, el peso no revela deficiencias específicas de micronutrientes.',
  exp:'El peso corporal por sí solo, sin evaluar la calidad y variedad de la alimentación, no permite descartar la presencia de deficiencias nutricionales específicas ocultas, retomando la importancia de la historia dietética detallada.',
  no:{
    1:'Es precisamente lo contrario: el peso corporal por sí solo NO permite descartar con certeza deficiencias específicas ocultas.',
    2:'La calidad y variedad de la alimentación sí tiene una relación directa con la presencia de deficiencias nutricionales ocultas.',
    3:'Es precisamente lo contrario: un peso normal NO garantiza automáticamente la ausencia de deficiencias de micronutrientes.'
  },
  trampa:'Asumir que un peso corporal normal es suficiente para descartar cualquier deficiencia nutricional específica, sin evaluar la calidad de la dieta.',
  obj:'Explicar por qué el peso corporal por sí solo no descarta deficiencias nutricionales específicas ocultas.',
  ref:'Krause, Dietoterapia, cap. 19.',
  tags:['déficit de micronutrientes','limitación del peso corporal aislado']
},
{
  id:'U11-NUT-Q23', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Obesidad', sub:'Naturaleza multifactorial de la obesidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la obesidad no puede explicarse simplemente como "comer demasiado"?',
  ops:[
    'Porque factores genéticos, hormonales, ambientales, psicosociales, y determinantes sociales contribuyen de forma variable e interconectada al desarrollo de esta condición', 'La obesidad siempre se explica exclusivamente por la cantidad de alimento consumido, sin ninguna otra causa contribuyente real', 'Los factores genéticos y hormonales nunca tienen ninguna relación real con el desarrollo de la obesidad en una persona', 'Los determinantes sociales nunca contribuyen de ninguna forma real al desarrollo de la obesidad en una población'],
  ok:0,
  clave:'Porque factores genéticos, hormonales, ambientales, psicosociales, y determinantes sociales contribuyen de forma variable e interconectada al desarrollo de esta condición.',
  exp:'Las causas de la obesidad van más allá de una simple explicación de "comer demasiado": factores genéticos, hormonales, ambientales, psicosociales, y de determinantes sociales contribuyen de forma variable e interconectada.',
  no:{
    1:'Es precisamente lo contrario: la obesidad tiene causas MULTIFACTORIALES, no se explica solo por la cantidad de alimento.',
    2:'Los factores genéticos y hormonales sí tienen una relación real y documentada con el desarrollo de la obesidad.',
    3:'Los determinantes sociales sí contribuyen de forma real al desarrollo de la obesidad a nivel poblacional.'
  },
  trampa:'Reducir la explicación de la obesidad a un solo factor (cantidad de alimento consumido), sin reconocer su naturaleza multifactorial.',
  obj:'Explicar la naturaleza multifactorial de la obesidad.',
  ref:'Krause, Dietoterapia, cap. 21.',
  tags:['obesidad','naturaleza multifactorial']
},
{
  id:'U11-NUT-Q24', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Obesidad', sub:'Componentes del síndrome metabólico',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué factores de riesgo cardiovascular componen típicamente el síndrome metabólico?',
  ops:[
    'Obesidad abdominal, hipertensión arterial, alteración del metabolismo de la glucosa, y alteraciones específicas del perfil lipídico', 'Únicamente la obesidad abdominal, sin ninguna relación con hipertensión, glucosa o perfil lipídico', 'Solo la hipertensión arterial, sin ninguna relación con los demás factores de riesgo cardiovascular descritos', 'El síndrome metabólico no tiene ningún componente específico reconocido en la práctica clínica actual'],
  ok:0,
  clave:'Obesidad abdominal, hipertensión arterial, alteración del metabolismo de la glucosa, y alteraciones específicas del perfil lipídico.',
  exp:'El síndrome metabólico es un conjunto de factores de riesgo cardiovascular que con frecuencia coexisten: obesidad abdominal, hipertensión arterial, alteración del metabolismo de la glucosa, y alteraciones específicas del perfil lipídico.',
  no:{
    1:'La obesidad abdominal es solo uno de varios componentes; también incluye hipertensión, glucosa y perfil lipídico.',
    2:'La hipertensión es solo uno de varios componentes; también incluye obesidad abdominal, glucosa y perfil lipídico.',
    3:'El síndrome metabólico sí tiene componentes específicos bien reconocidos en la práctica clínica actual.'
  },
  trampa:'Reducir el síndrome metabólico a un solo componente aislado, sin reconocer el conjunto completo de factores de riesgo.',
  obj:'Identificar los componentes del síndrome metabólico.',
  ref:'Krause, Dietoterapia, cap. 21.',
  tags:['síndrome metabólico y obesidad','componentes']
},
{
  id:'U11-NUT-Q25', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Obesidad', sub:'Relevancia de la distribución de grasa corporal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la distribución de la grasa corporal, no solo su cantidad total, es particularmente relevante en el riesgo metabólico?',
  ops:[
    'Porque la grasa acumulada predominantemente en la región abdominal se asocia con mayor riesgo metabólico que la misma cantidad de grasa distribuida de forma más periférica', 'La distribución de la grasa corporal nunca tiene ninguna relación real con el riesgo metabólico de una persona', 'La cantidad total de grasa corporal siempre es más relevante que su distribución para determinar el riesgo metabólico', 'La grasa distribuida en la región abdominal siempre representa exactamente el mismo riesgo que la grasa periférica'],
  ok:0,
  clave:'Porque la grasa acumulada predominantemente en la región abdominal se asocia con mayor riesgo metabólico que la misma cantidad de grasa distribuida de forma más periférica.',
  exp:'La grasa acumulada predominantemente en la región abdominal se asocia con mayor riesgo metabólico que la misma cantidad de grasa distribuida de forma más periférica, un matiz que el índice de masa corporal por sí solo no logra capturar.',
  no:{
    1:'La distribución de grasa corporal sí tiene una relación directa y documentada con el riesgo metabólico de una persona.',
    2:'Es precisamente lo contrario: la DISTRIBUCIÓN, no solo la cantidad total, es particularmente relevante para el riesgo metabólico.',
    3:'Es precisamente lo contrario: la grasa abdominal representa MAYOR riesgo que la misma cantidad distribuida perifericamente.'
  },
  trampa:'Asumir que solo la cantidad total de grasa corporal importa para el riesgo metabólico, sin considerar su distribución específica.',
  obj:'Explicar la relevancia de la distribución de la grasa corporal sobre el riesgo metabólico.',
  ref:'Krause, Dietoterapia, cap. 21.',
  tags:['síndrome metabólico y obesidad','relevancia de la distribución de grasa']
},
{
  id:'U11-NUT-Q26', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Obesidad', sub:'Enfoque escalonado del manejo del sobrepeso',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué enfoque sigue el manejo del sobrepeso y la obesidad?',
  ops:[
    'Un enfoque escalonado: modificaciones en la alimentación y actividad física como base, con opciones farmacológicas o quirúrgicas reservadas para casos específicos', 'Las opciones farmacológicas o quirúrgicas siempre deben ser la primera opción de manejo, sin importar la severidad del caso', 'El manejo del sobrepeso y la obesidad no sigue ningún enfoque escalonado reconocido en la práctica clínica actual', 'Las modificaciones en la alimentación y actividad física nunca tienen ningún papel real en el manejo de la obesidad'],
  ok:0,
  clave:'Un enfoque escalonado: modificaciones en la alimentación y actividad física como base, con opciones farmacológicas o quirúrgicas reservadas para casos específicos.',
  exp:'El manejo sigue un enfoque escalonado: modificaciones en la alimentación y la actividad física como base del manejo, con opciones farmacológicas o quirúrgicas reservadas para casos específicos según criterios bien definidos.',
  no:{
    1:'Es precisamente lo contrario: las opciones farmacológicas o quirúrgicas se reservan para casos específicos, no son la primera opción.',
    2:'El manejo del sobrepeso y la obesidad sí sigue un enfoque escalonado reconocido, similar al de otras condiciones crónicas.',
    3:'Las modificaciones en alimentación y actividad física sí tienen un papel central como base del manejo escalonado.'
  },
  trampa:'Asumir que las opciones farmacológicas o quirúrgicas deberían ser la primera opción de manejo del sobrepeso, sin seguir el enfoque escalonado.',
  obj:'Explicar el enfoque escalonado del manejo del sobrepeso y la obesidad.',
  ref:'Krause, Dietoterapia, cap. 21.',
  tags:['manejo del sobrepeso','enfoque escalonado']
},
{
  id:'U11-NUT-Q27', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Obesidad', sub:'Riesgo de un enfoque estigmatizante en el manejo de la obesidad',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico culpabiliza y avergüenza abiertamente a un paciente con obesidad por su condición, insistiendo repetidamente en que su problema se debe únicamente a la falta de voluntad.',
  enunciado:'¿Qué consecuencia puede generar este abordaje, según lo visto en este tema?',
  ops:[
    'Tiende a ser contraproducente, generando evitación de la atención médica en vez de facilitar un manejo efectivo y sostenido en el tiempo', 'Este abordaje es completamente apropiado y siempre mejora significativamente la adherencia del paciente al manejo propuesto', 'La culpabilización y el estigma nunca tienen ninguna consecuencia real sobre la relación del paciente con el sistema de salud', 'Un abordaje estigmatizante siempre facilita, en vez de dificultar, un manejo efectivo y sostenido de la obesidad'],
  ok:0,
  clave:'Tiende a ser contraproducente, generando evitación de la atención médica en vez de facilitar un manejo efectivo y sostenido en el tiempo.',
  exp:'Un abordaje que culpabiliza o avergüenza al paciente por su condición tiende a ser contraproducente, generando evitación de la atención médica en vez de facilitar un manejo efectivo y sostenido en el tiempo.',
  no:{
    1:'Es precisamente lo contrario: este abordaje es contraproducente, no apropiado, y tiende a empeorar la adherencia del paciente.',
    2:'Es precisamente lo contrario: la culpabilización y el estigma SÍ tienen una consecuencia real, generando evitación de la atención.',
    3:'Es precisamente lo contrario: un abordaje estigmatizante DIFICULTA, no facilita, un manejo efectivo y sostenido.'
  },
  trampa:'Asumir que un abordaje estigmatizante o culpabilizador mejora la adherencia del paciente al manejo de la obesidad propuesto.',
  obj:'Aplicar el reconocimiento del riesgo de un abordaje estigmatizante en el manejo de la obesidad.',
  ref:'Krause, Dietoterapia, cap. 21.',
  tags:['manejo del sobrepeso','riesgo de estigmatización']
},
{
  id:'U11-NUT-Q28', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Obesidad', sub:'Qué es la obesidad',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la obesidad, según su definición básica?',
  ops:[
    'La acumulación excesiva de grasa corporal con impacto en la salud, resultado de un desequilibrio sostenido entre la energía consumida y la energía gastada', 'La obesidad es exclusivamente un problema estético, sin ningún impacto real documentado sobre la salud de la persona', 'La obesidad se define únicamente por el peso corporal absoluto, sin ninguna relación con la energía consumida o gastada', 'La obesidad no tiene ninguna definición clínica reconocida en la literatura de nutrición actual'],
  ok:0,
  clave:'La acumulación excesiva de grasa corporal con impacto en la salud, resultado de un desequilibrio sostenido entre la energía consumida y la energía gastada.',
  exp:'La obesidad es la acumulación excesiva de grasa corporal con impacto en la salud, resultado de un desequilibrio sostenido entre la energía consumida y la energía gastada.',
  no:{
    1:'Es precisamente lo contrario: la obesidad SÍ tiene un impacto real y documentado sobre la salud, más allá de lo estético.',
    2:'La obesidad se relaciona con el desequilibrio energético, no se define únicamente por el peso corporal absoluto aislado.',
    3:'La obesidad sí tiene una definición clínica reconocida y bien establecida en la literatura de nutrición actual.'
  },
  trampa:'Reducir la obesidad a un problema meramente estético, sin reconocer su definición clínica basada en el desequilibrio energético y su impacto en la salud.',
  obj:'Definir qué es la obesidad según su definición básica.',
  ref:'Krause, Dietoterapia, cap. 21.',
  tags:['obesidad','definición básica']
},
{
  id:'U11-NUT-Q29', programa:'unirm', cuatri:11,
  esp:'Nutrición', tema:'Obesidad', sub:'Conexión con determinantes sociales ya vistos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué concepto ya visto en Salud y Comunidad I se conecta uno de los factores contribuyentes a la obesidad?',
  ops:[
    'Los determinantes sociales, ya que el acceso y la disponibilidad de alimentos (factor ambiental) contribuyen al desarrollo de la obesidad de forma similar a como los determinantes sociales influyen en otras condiciones de salud', 'La obesidad no tiene ninguna relación real con ningún concepto ya visto sobre determinantes sociales en Salud y Comunidad I', 'El signo de Blumberg ya visto en Semiología Quirúrgica, sin ninguna relación real con los factores contribuyentes a la obesidad', 'La escala de Glasgow ya vista en Neurología, sin ninguna relación real con los factores contribuyentes a la obesidad'],
  ok:0,
  clave:'Los determinantes sociales, ya que el acceso y la disponibilidad de alimentos (factor ambiental) contribuyen al desarrollo de la obesidad de forma similar a como los determinantes sociales influyen en otras condiciones de salud.',
  exp:'Factores ambientales (acceso y disponibilidad de alimentos) y de determinantes sociales ya vistos en Salud y Comunidad I contribuyen de forma variable e interconectada al desarrollo de la obesidad en cada persona.',
  no:{
    1:'Sí existe una conexión conceptual directa con los determinantes sociales ya vistos en Salud y Comunidad I.',
    2:'El signo de Blumberg es un hallazgo semiológico distinto, sin relación conceptual con los factores contribuyentes a la obesidad.',
    3:'La escala de Glasgow es una herramienta de evaluación neurológica distinta, sin relación conceptual con la obesidad.'
  },
  trampa:'No reconocer la conexión conceptual correcta entre los factores contribuyentes a la obesidad y los determinantes sociales ya vistos.',
  obj:'Identificar la conexión entre los factores contribuyentes a la obesidad y los determinantes sociales ya vistos.',
  ref:'Krause, Dietoterapia, cap. 21.',
  tags:['obesidad','conexión con determinantes sociales']
}

]);
