/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 12, TANDA DE OBSTETRICIA II (2/2)
   Continua el prefijo U12-OB2- desde Q29. Cubre los ultimos 6
   temas: embarazo postermino, isoinmunizacion Rh, muerte fetal
   intrauterina, hemorragia posparto (manejo avanzado), infeccion
   puerperal, y medicina materno-fetal (Q29-Q50).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U12-OB2-Q29', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Embarazo postérmino', sub:'Definición del embarazo prolongado',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿A partir de qué semana de gestación se define un embarazo como prolongado o postérmino?',
  ops:[
    'Más allá de las 42 semanas de gestación', 'A partir de las 37 semanas de gestación, sin ninguna relación con el concepto de prolongación', 'A partir de las 40 semanas exactas, sin ninguna semana adicional de margen considerada', 'El embarazo postérmino no tiene ninguna definición específica basada en semanas de gestación'],
  ok:0,
  clave:'Más allá de las 42 semanas de gestación.',
  exp:'El embarazo prolongado (o postérmino) es aquel que se extiende más allá de las 42 semanas de gestación, una definición que depende críticamente de contar con una estimación precisa de la edad gestacional.',
  no:{
    1:'Las 37 semanas corresponden al límite de un embarazo a término temprano, no a la definición de embarazo postérmino.',
    2:'Las 40 semanas corresponden a la fecha probable de parto esperada, no al límite específico del embarazo postérmino.',
    3:'El embarazo postérmino sí tiene una definición específica basada en semanas de gestación: más allá de las 42 semanas.'
  },
  trampa:'Confundir el límite específico de las 42 semanas del embarazo postérmino con otros puntos de referencia gestacional ya vistos.',
  obj:'Definir a partir de qué semana de gestación se considera un embarazo como postérmino.',
  ref:'Williams, Obstetricia, cap. 43.',
  tags:['embarazo prolongado','definición por semanas']
},
{
  id:'U12-OB2-Q30', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Embarazo postérmino', sub:'Por qué la precisión de la edad gestacional es crítica aquí',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la definición de embarazo postérmino depende críticamente de contar con una estimación precisa de la edad gestacional?',
  ops:[
    'Porque sin una fecha confiable, no es posible diagnosticar correctamente esta condición ni distinguirla de un embarazo simplemente mal fechado', 'La precisión de la edad gestacional nunca tiene ninguna relación real con el diagnóstico del embarazo postérmino', 'Un embarazo mal fechado siempre se comporta exactamente igual que uno verdaderamente postérmino en su manejo', 'La estimación de la edad gestacional es igual de precisa sin importar el método utilizado para calcularla'],
  ok:0,
  clave:'Porque sin una fecha confiable, no es posible diagnosticar correctamente esta condición ni distinguirla de un embarazo simplemente mal fechado.',
  exp:'Sin una fecha confiable, no es posible diagnosticar correctamente esta condición ni distinguirla de un embarazo simplemente mal fechado, retomando la importancia ya vista en Obstetricia I sobre establecer esta edad con precisión.',
  no:{
    1:'La precisión de la edad gestacional sí tiene una relación directa y crítica con el diagnóstico correcto de esta condición.',
    2:'Un embarazo mal fechado NO es lo mismo que uno verdaderamente postérmino; distinguirlos correctamente es clínicamente relevante.',
    3:'La precisión de la estimación sí varía según el método utilizado, siendo la ecografía temprana la más confiable.'
  },
  trampa:'Asumir que un embarazo mal fechado, clasificado erróneamente como postérmino, debería manejarse igual que uno verdaderamente prolongado.',
  obj:'Explicar por qué la precisión de la edad gestacional es crítica para el diagnóstico del embarazo postérmino.',
  ref:'Williams, Obstetricia, cap. 43.',
  tags:['manejo del embarazo postérmino','importancia de la precisión gestacional']
},
{
  id:'U12-OB2-Q31', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Embarazo postérmino', sub:'Consecuencia del riesgo de insuficiencia placentaria tardía',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué justifica la vigilancia más cercana y la eventual consideración de finalizar el embarazo conforme este se aproxima y supera las 42 semanas?',
  ops:[
    'El riesgo de insuficiencia placentaria tardía, que aumenta progresivamente conforme el embarazo se prolonga más allá del término', 'El riesgo de insuficiencia placentaria nunca aumenta realmente conforme el embarazo se prolonga más allá del término', 'La placenta nunca muestra signos de envejecimiento funcional, sin importar cuánto se prolongue el embarazo', 'No existe ninguna justificación real para aumentar la vigilancia conforme el embarazo se aproxima a las 42 semanas'],
  ok:0,
  clave:'El riesgo de insuficiencia placentaria tardía, que aumenta progresivamente conforme el embarazo se prolonga más allá del término.',
  exp:'El riesgo de insuficiencia placentaria tardía aumenta progresivamente conforme el embarazo se prolonga más allá del término, siendo la base fisiopatológica que justifica la vigilancia más cercana y la eventual finalización.',
  no:{
    1:'Es precisamente lo contrario: este riesgo SÍ aumenta progresivamente conforme el embarazo se prolonga más allá del término.',
    2:'Es precisamente lo contrario: la placenta SÍ puede mostrar signos de envejecimiento funcional con el paso del tiempo.',
    3:'Sí existe una justificación real: el riesgo progresivo de insuficiencia placentaria tardía conforme avanza el embarazo.'
  },
  trampa:'Subestimar el riesgo progresivo de insuficiencia placentaria tardía conforme el embarazo se prolonga más allá del término esperado.',
  obj:'Explicar la justificación fisiopatológica de la vigilancia cercana en el embarazo que se aproxima a las 42 semanas.',
  ref:'Williams, Obstetricia, cap. 43.',
  tags:['riesgo de insuficiencia placentaria tardía','justificación de vigilancia cercana']
},
{
  id:'U12-OB2-Q32', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Isoinmunización Rh', sub:'Mecanismo de la isoinmunización materno-fetal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo ocurre típicamente la isoinmunización materno-fetal Rh?',
  ops:[
    'Una mujer Rh negativo desarrolla anticuerpos contra el antígeno Rh positivo tras la exposición a sangre fetal Rh positiva', 'Una mujer Rh positivo desarrolla anticuerpos contra el antígeno Rh negativo de su feto durante el embarazo', 'La isoinmunización Rh nunca requiere ninguna exposición previa a sangre fetal de tipo Rh distinto', 'Este mecanismo ocurre exclusivamente en el primer embarazo de cualquier mujer, sin importar su tipo de Rh'],
  ok:0,
  clave:'Una mujer Rh negativo desarrolla anticuerpos contra el antígeno Rh positivo tras la exposición a sangre fetal Rh positiva.',
  exp:'La isoinmunización materno-fetal Rh ocurre cuando una mujer Rh negativo desarrolla anticuerpos contra el antígeno Rh positivo, típicamente tras la exposición a sangre fetal Rh positiva durante el embarazo, el parto, u otros eventos.',
  no:{
    1:'Está invertido: es la mujer RH NEGATIVO la que desarrolla anticuerpos contra el antígeno Rh POSITIVO fetal, no al revés.',
    2:'Es precisamente lo contrario: SÍ requiere una exposición previa a sangre fetal Rh positiva para desarrollar sensibilización.',
    3:'Es precisamente lo contrario: el riesgo es mayor en embarazos SUBSECUENTES tras una sensibilización previa, no en el primero.'
  },
  trampa:'Invertir qué tipo de Rh materno desarrolla los anticuerpos, o asumir que el riesgo es mayor en el primer embarazo en vez de en los subsecuentes.',
  obj:'Explicar el mecanismo de la isoinmunización materno-fetal Rh.',
  ref:'Williams, Obstetricia, cap. 15.',
  tags:['isoinmunización materno-fetal','mecanismo de sensibilización']
},
{
  id:'U12-OB2-Q33', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Isoinmunización Rh', sub:'Consecuencia de la enfermedad hemolítica del recién nacido',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué consecuencia grave puede generar la enfermedad hemolítica del recién nacido no prevenida ni tratada?',
  ops:[
    'Anemia fetal que, en su forma más grave, puede progresar hacia hidropesía fetal y muerte fetal', 'Esta condición nunca genera ninguna consecuencia real sobre la salud del feto o del recién nacido', 'La enfermedad hemolítica del recién nacido siempre se resuelve espontáneamente sin ninguna intervención necesaria', 'La anemia fetal generada por esta condición nunca progresa hacia ninguna complicación adicional grave'],
  ok:0,
  clave:'Anemia fetal que, en su forma más grave, puede progresar hacia hidropesía fetal y muerte fetal.',
  exp:'Los anticuerpos maternos que atraviesan la placenta destruyen los glóbulos rojos fetales, generando anemia fetal que, en su forma más grave, puede progresar hacia hidropesía fetal y muerte fetal.',
  no:{
    1:'Esta condición sí genera consecuencias reales y graves sobre la salud fetal si no se previene ni se trata oportunamente.',
    2:'Es precisamente lo contrario: sin prevención ni tratamiento, esta condición puede progresar hacia complicaciones graves.',
    3:'Es precisamente lo contrario: la anemia fetal SÍ puede progresar hacia hidropesía fetal y muerte fetal en su forma grave.'
  },
  trampa:'Subestimar la gravedad potencial de la enfermedad hemolítica del recién nacido no prevenida ni tratada oportunamente.',
  obj:'Explicar las consecuencias graves de la enfermedad hemolítica del recién nacido no tratada.',
  ref:'Williams, Obstetricia, cap. 15.',
  tags:['enfermedad hemolítica del recién nacido','consecuencia grave sin tratamiento']
},
{
  id:'U12-OB2-Q34', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Isoinmunización Rh', sub:'Valor de la prevención con inmunoglobulina anti-D',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la administración de inmunoglobulina anti-D se considera uno de los ejemplos más claros de prevención primaria efectiva en obstetricia?',
  ops:[
    'Porque neutraliza los glóbulos rojos fetales Rh positivos antes de que el sistema inmune materno logre generar una respuesta de sensibilización completa', 'La inmunoglobulina anti-D nunca ha demostrado ninguna efectividad real en la prevención de la isoinmunización Rh', 'Esta intervención se administra únicamente después de que la sensibilización materna ya está completamente establecida', 'La incidencia de isoinmunización Rh nunca se ha reducido en poblaciones donde se aplica esta intervención de forma sistemática'],
  ok:0,
  clave:'Porque neutraliza los glóbulos rojos fetales Rh positivos antes de que el sistema inmune materno logre generar una respuesta de sensibilización completa.',
  exp:'Al neutralizar los glóbulos rojos fetales Rh positivos que pudieran haber entrado a la circulación materna, antes de que el sistema inmune materno logre generar una respuesta de sensibilización completa, esta intervención ha reducido dramáticamente la incidencia de esta condición.',
  no:{
    1:'Es precisamente lo contrario: la inmunoglobulina anti-D SÍ ha demostrado una efectividad real y bien documentada.',
    2:'Es precisamente lo contrario: esta intervención se administra ANTES de que se complete la sensibilización, como prevención.',
    3:'Es precisamente lo contrario: la incidencia SÍ se ha reducido dramáticamente donde se aplica esta intervención sistemáticamente.'
  },
  trampa:'Subestimar el valor preventivo de la inmunoglobulina anti-D, o asumir que se administra después de completada la sensibilización materna.',
  obj:'Explicar por qué la inmunoglobulina anti-D es un ejemplo destacado de prevención primaria efectiva.',
  ref:'Williams, Obstetricia, cap. 15.',
  tags:['coombs indirecto','prevención con inmunoglobulina anti-D']
},
{
  id:'U12-OB2-Q35', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Muerte fetal intrauterina', sub:'Relevancia de investigar las causas del óbito fetal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué relevancia tiene investigar las posibles causas de un óbito fetal, cuando es clínicamente posible hacerlo?',
  ops:[
    'Tiene relevancia tanto inmediata para el manejo de ese embarazo específico como futura para orientar la vigilancia de un embarazo posterior', 'Investigar las causas de un óbito fetal nunca aporta ninguna información relevante para embarazos futuros de la misma mujer', 'Esta investigación solo tiene relevancia inmediata, sin ninguna implicación real para el manejo de embarazos posteriores', 'En la mayoría de los casos de óbito fetal siempre es posible identificar la causa con total certeza absoluta'],
  ok:0,
  clave:'Tiene relevancia tanto inmediata para el manejo de ese embarazo específico como futura para orientar la vigilancia de un embarazo posterior.',
  exp:'Investigar las posibles causas de un óbito fetal tiene relevancia tanto inmediata (para el manejo de ese embarazo) como futura (para orientar la vigilancia de un embarazo posterior de la misma mujer).',
  no:{
    1:'Es precisamente lo contrario: esta investigación SÍ aporta información relevante para el manejo de embarazos futuros.',
    2:'Es precisamente lo contrario: esta investigación tiene relevancia tanto inmediata COMO futura, no solo una de las dos.',
    3:'Es precisamente lo contrario: en una proporción significativa de los casos NO se logra identificar la causa con certeza.'
  },
  trampa:'Subestimar el valor de investigar las causas de un óbito fetal, o sobrestimar la certeza con la que suele identificarse la causa específica.',
  obj:'Explicar la relevancia de investigar las causas de un óbito fetal para el manejo actual y futuro.',
  ref:'Williams, Obstetricia, cap. 35.',
  tags:['óbito fetal','relevancia de investigar la causa']
},
{
  id:'U12-OB2-Q36', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Muerte fetal intrauterina', sub:'Adaptar la comunicación según el momento del embarazo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una muerte fetal tardía conlleva un impacto emocional particularmente significativo, distinto de una pérdida gestacional más temprana?',
  ops:[
    'Porque con frecuencia ocurre después de que los padres ya han experimentado movimientos fetales y han desarrollado un vínculo más establecido con el embarazo', 'El impacto emocional de una pérdida gestacional nunca varía realmente según el momento del embarazo en que ocurre', 'Una pérdida gestacional temprana siempre genera exactamente el mismo impacto emocional que una muerte fetal tardía', 'El vínculo de los padres con el embarazo nunca influye realmente en el impacto emocional de una pérdida gestacional'],
  ok:0,
  clave:'Porque con frecuencia ocurre después de que los padres ya han experimentado movimientos fetales y han desarrollado un vínculo más establecido con el embarazo.',
  exp:'Una pérdida más avanzada en el embarazo, con frecuencia después de que los padres ya han experimentado movimientos fetales y han desarrollado un vínculo más establecido, conlleva un impacto emocional particularmente significativo.',
  no:{
    1:'Es precisamente lo contrario: el impacto emocional SÍ varía según el momento del embarazo en que ocurre la pérdida.',
    2:'Es precisamente lo contrario: una pérdida temprana y una muerte fetal tardía NO generan el mismo impacto emocional.',
    3:'El vínculo de los padres con el embarazo sí influye directamente en el impacto emocional de la pérdida gestacional.'
  },
  trampa:'Asumir que el impacto emocional de cualquier pérdida gestacional es equivalente, sin importar el momento del embarazo en que ocurre.',
  obj:'Explicar por qué la muerte fetal tardía conlleva un impacto emocional particularmente significativo.',
  ref:'Williams, Obstetricia, cap. 35.',
  tags:['muerte fetal tardía','impacto emocional según momento']
},
{
  id:'U12-OB2-Q37', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Muerte fetal intrauterina', sub:'Dimensión humana del manejo tras muerte fetal',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico, tras confirmar una muerte fetal, se enfoca exclusivamente en los aspectos técnicos del manejo (finalización del embarazo, posible investigación de causa), sin dedicar tiempo a acompañar el duelo de los padres ni respetar sus decisiones sobre cómo desean procesar la pérdida.',
  enunciado:'¿Qué principio de este tema cuestiona esta conducta del médico?',
  ops:[
    'Que la atención médica de calidad combina siempre el rigor técnico con la comunicación humana apropiada al contexto, especialmente ante la pérdida de un embarazo', 'Esta conducta es completamente apropiada, ya que el manejo técnico es lo único relevante ante una muerte fetal confirmada', 'El manejo puramente técnico, sin la dimensión humana, siempre constituye una atención médica completa y suficiente', 'Acompañar el duelo de los padres nunca es una responsabilidad real del médico que atiende una muerte fetal'],
  ok:0,
  clave:'Que la atención médica de calidad combina siempre el rigor técnico con la comunicación humana apropiada al contexto, especialmente ante la pérdida de un embarazo.',
  exp:'La atención médica de calidad combina siempre el rigor técnico con la comunicación humana apropiada al contexto, y en ninguna situación esta combinación es más necesaria que ante la pérdida de un embarazo.',
  no:{
    1:'Esta conducta es cuestionable: el manejo puramente técnico, sin la dimensión humana, es una atención incompleta.',
    2:'Es precisamente lo contrario: el manejo puramente técnico, SIN la dimensión humana, es una atención INCOMPLETA.',
    3:'Es precisamente lo contrario: acompañar el duelo de los padres SÍ es una responsabilidad real del médico en este contexto.'
  },
  trampa:'Enfocarse exclusivamente en los aspectos técnicos del manejo tras una muerte fetal, sin reconocer la importancia de la dimensión humana y el acompañamiento del duelo.',
  obj:'Aplicar el principio de combinar rigor técnico y comunicación humana en el manejo tras una muerte fetal.',
  ref:'Williams, Obstetricia, cap. 35.',
  tags:['manejo tras muerte fetal','dimensión humana del cuidado']
},
{
  id:'U12-OB2-Q38', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Hemorragia posparto: manejo avanzado', sub:'Causa más frecuente de hemorragia posparto',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la causa más frecuente de hemorragia posparto?',
  ops:[
    'La atonía uterina', 'La retención de restos placentarios, siendo esta la causa más frecuente de hemorragia posparto', 'Las laceraciones del canal del parto, siendo esta siempre la causa principal de hemorragia posparto', 'Los trastornos de la coagulación, siendo esta la causa más frecuente en cualquier caso de hemorragia posparto'],
  ok:0,
  clave:'La atonía uterina.',
  exp:'La atonía uterina -la incapacidad del útero de contraerse adecuadamente después del nacimiento- es la causa más frecuente de hemorragia posparto.',
  no:{
    1:'La retención de restos placentarios es una causa posible pero no la más frecuente; la atonía uterina lo es.',
    2:'Las laceraciones del canal del parto son una causa posible pero no la más frecuente; la atonía uterina lo es.',
    3:'Los trastornos de la coagulación son una causa posible pero no la más frecuente; la atonía uterina lo es.'
  },
  trampa:'Confundir la causa más frecuente (atonía uterina) con otras causas posibles pero menos frecuentes de hemorragia posparto.',
  obj:'Identificar la causa más frecuente de hemorragia posparto.',
  ref:'Williams, Obstetricia, cap. 41.',
  tags:['atonía uterina','causa más frecuente']
},
{
  id:'U12-OB2-Q39', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Hemorragia posparto: manejo avanzado', sub:'Por qué la atonía uterina causa hemorragia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué un útero mal contraído después del nacimiento genera sangrado excesivo?',
  ops:[
    'Porque no logra comprimir de forma efectiva los vasos sanguíneos que quedan expuestos tras el desprendimiento de la placenta', 'Un útero mal contraído nunca tiene ninguna relación real con el sangrado que ocurre después del nacimiento', 'Los vasos sanguíneos expuestos tras el desprendimiento placentario nunca requieren compresión uterina para su control', 'El grado de contracción uterina después del nacimiento nunca influye realmente en el volumen de sangrado posparto'],
  ok:0,
  clave:'Porque no logra comprimir de forma efectiva los vasos sanguíneos que quedan expuestos tras el desprendimiento de la placenta.',
  exp:'Un útero mal contraído no logra comprimir de forma efectiva los vasos sanguíneos que quedan expuestos tras el desprendimiento de la placenta, retomando la importancia ya vista sobre el manejo activo del alumbramiento.',
  no:{
    1:'Un útero mal contraído sí tiene una relación directa con el sangrado excesivo tras el nacimiento.',
    2:'Los vasos sanguíneos expuestos sí requieren la compresión uterina normal para controlar el sangrado tras el parto.',
    3:'El grado de contracción uterina sí influye directamente en el volumen de sangrado posparto experimentado.'
  },
  trampa:'Subestimar la relación entre la contracción uterina adecuada y el control del sangrado tras el desprendimiento placentario.',
  obj:'Explicar por qué la atonía uterina genera hemorragia posparto.',
  ref:'Williams, Obstetricia, cap. 41.',
  tags:['atonía uterina','mecanismo de hemorragia']
},
{
  id:'U12-OB2-Q40', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Hemorragia posparto: manejo avanzado', sub:'Lógica del manejo escalonado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué exige el manejo escalonado de la hemorragia posparto respecto a la respuesta a cada medida aplicada?',
  ops:[
    'Una reevaluación constante de la respuesta a cada medida, avanzando al siguiente escalón sin demora si la medida previa no logra controlar el sangrado', 'El manejo escalonado nunca requiere ninguna reevaluación real de la respuesta a las medidas ya aplicadas previamente', 'Una vez aplicada la primera medida de manejo, nunca es necesario considerar ninguna intervención adicional posterior', 'El manejo escalonado siempre debe completar todos los escalones disponibles, sin importar la respuesta observada en cada uno'],
  ok:0,
  clave:'Una reevaluación constante de la respuesta a cada medida, avanzando al siguiente escalón sin demora si la medida previa no logra controlar el sangrado.',
  exp:'Este enfoque escalonado exige una reevaluación constante de la respuesta a cada medida aplicada, en vez de asumir que una sola intervención resolverá necesariamente la situación.',
  no:{
    1:'Es precisamente lo contrario: el manejo escalonado SÍ requiere reevaluación constante de la respuesta a cada medida.',
    2:'Es precisamente lo contrario: SÍ es necesario considerar intervenciones adicionales si la primera medida no es efectiva.',
    3:'Es precisamente lo contrario: se avanza al siguiente escalón SEGÚN la respuesta observada, no completando todos sin evaluar.'
  },
  trampa:'Aplicar una sola medida de manejo sin reevaluar activamente su efectividad antes de decidir si escalar hacia una intervención más invasiva.',
  obj:'Explicar la lógica de reevaluación constante en el manejo escalonado de la hemorragia posparto.',
  ref:'Williams, Obstetricia, cap. 41.',
  tags:['manejo escalonado de la hemorragia posparto','reevaluación constante']
},
{
  id:'U12-OB2-Q41', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Hemorragia posparto: manejo avanzado', sub:'Cuándo se considera la histerectomía obstétrica',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una paciente con hemorragia posparto no responde a masaje uterino, uterotónicos adicionales, ni taponamiento uterino, y su vida está en riesgo inmediato por la hemorragia persistente.',
  enunciado:'¿Qué intervención corresponde considerar en este punto del manejo escalonado?',
  ops:[
    'La histerectomía obstétrica, como último escalón del manejo cuando todas las medidas menos invasivas han fracasado', 'Repetir nuevamente las mismas medidas iniciales ya aplicadas, sin considerar ninguna intervención adicional', 'Ninguna intervención adicional es apropiada en este punto, dejando que la situación se resuelva espontáneamente', 'Suspender todo manejo activo, ya que las medidas menos invasivas ya fracasaron sin ninguna alternativa posible'],
  ok:0,
  clave:'La histerectomía obstétrica, como último escalón del manejo cuando todas las medidas menos invasivas han fracasado.',
  exp:'La histerectomía obstétrica representa el último escalón de este manejo progresivo, reservada para cuando todas las medidas menos invasivas han fracasado y la vida de la madre está en riesgo inmediato.',
  no:{
    1:'Repetir las mismas medidas ya fracasadas no es apropiado; corresponde avanzar al siguiente escalón disponible.',
    2:'Es precisamente lo contrario: SÍ existe una intervención adicional apropiada en este punto: la histerectomía obstétrica.',
    3:'Suspender el manejo activo no es apropiado ante un riesgo inmediato de vida; existe una intervención de último recurso disponible.'
  },
  trampa:'Repetir medidas ya fracasadas o suspender el manejo activo, en vez de reconocer que la histerectomía obstétrica es el siguiente escalón apropiado.',
  obj:'Aplicar la decisión de considerar la histerectomía obstétrica como último escalón del manejo de la hemorragia posparto.',
  ref:'Williams, Obstetricia, cap. 41.',
  tags:['histerectomía obstétrica','último escalón del manejo']
},
{
  id:'U12-OB2-Q42', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Infección puerperal', sub:'Presentación característica de la endometritis puerperal',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se presenta característicamente la endometritis puerperal?',
  ops:[
    'Fiebre, dolor uterino a la palpación, y loquios de mal olor', 'Únicamente sangrado vaginal abundante, sin ninguna relación con fiebre o dolor uterino', 'Solo dolor de cabeza intenso, sin ninguna relación con fiebre, dolor uterino o loquios', 'La endometritis puerperal no tiene ninguna presentación clínica característica reconocida'],
  ok:0,
  clave:'Fiebre, dolor uterino a la palpación, y loquios de mal olor.',
  exp:'La endometritis puerperal se presenta característicamente con fiebre, dolor uterino a la palpación, y loquios de mal olor, retomando la evolución esperada de los loquios ya vista en Obstetricia I.',
  no:{
    1:'El sangrado vaginal abundante no es el hallazgo característico principal; la fiebre y el dolor uterino sí lo son.',
    2:'El dolor de cabeza no es un hallazgo característico de la endometritis puerperal.',
    3:'La endometritis puerperal sí tiene una presentación clínica característica bien reconocida en la práctica obstétrica.'
  },
  trampa:'Confundir la presentación de la endometritis puerperal con la de otras complicaciones ya vistas en el pensum.',
  obj:'Identificar la presentación clínica característica de la endometritis puerperal.',
  ref:'Williams, Obstetricia, cap. 37.',
  tags:['endometritis puerperal','presentación clínica']
},
{
  id:'U12-OB2-Q43', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Infección puerperal', sub:'Por qué investigar activamente ante fiebre puerperal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la fiebre puerperal nunca debe considerarse un hallazgo esperado o trivial, incluso sabiendo que la endometritis es la causa más frecuente?',
  ops:[
    'Porque otras causas (infección urinaria, mastitis, infección de la herida quirúrgica) también deben considerarse en el diagnóstico diferencial, y la frecuencia estadística no exime de confirmar el diagnóstico específico', 'La fiebre puerperal siempre corresponde exclusivamente a endometritis, sin ninguna otra causa posible a considerar', 'La frecuencia estadística de una causa siempre exime de la responsabilidad de confirmarla mediante evaluación clínica', 'La fiebre puerperal nunca requiere ninguna investigación activa de su causa específica en la práctica clínica'],
  ok:0,
  clave:'Porque otras causas (infección urinaria, mastitis, infección de la herida quirúrgica) también deben considerarse en el diagnóstico diferencial, y la frecuencia estadística no exime de confirmar el diagnóstico específico.',
  exp:'Aunque la endometritis es la causa más frecuente, otras causas también deben considerarse en el diagnóstico diferencial; la frecuencia estadística de una causa no exime de la responsabilidad de confirmarla mediante la evaluación clínica apropiada.',
  no:{
    1:'Es precisamente lo contrario: existen OTRAS causas posibles de fiebre puerperal, no exclusivamente la endometritis.',
    2:'Es precisamente lo contrario: la frecuencia estadística NO exime de confirmar el diagnóstico mediante evaluación clínica.',
    3:'Es precisamente lo contrario: la fiebre puerperal SÍ requiere investigación activa de su causa específica.'
  },
  trampa:'Asumir automáticamente que toda fiebre puerperal corresponde a endometritis, sin considerar otras causas posibles en el diagnóstico diferencial.',
  obj:'Explicar por qué la fiebre puerperal exige investigación activa, sin asumir automáticamente su causa más frecuente.',
  ref:'Williams, Obstetricia, cap. 37.',
  tags:['fiebre puerperal','necesidad de investigación activa']
},
{
  id:'U12-OB2-Q44', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Infección puerperal', sub:'Conexión de la sepsis puerperal con sepsis general',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué concepto ya visto en Patología Infecciosa (11vo) se conecta directamente la sepsis puerperal?',
  ops:[
    'El concepto general de sepsis, incluyendo el reconocimiento temprano mediante herramientas como los criterios de qSOFA', 'La sepsis puerperal no tiene ninguna relación real con el concepto general de sepsis ya visto en Patología Infecciosa', 'Los criterios de qSOFA nunca se aplican en el contexto específico de una infección de origen obstétrico', 'La sepsis puerperal representa un concepto completamente distinto y sin relación con la sepsis general ya vista'],
  ok:0,
  clave:'El concepto general de sepsis, incluyendo el reconocimiento temprano mediante herramientas como los criterios de qSOFA.',
  exp:'La sepsis puerperal retoma directamente el concepto de sepsis ya desarrollado en Patología Infecciosa: la misma lógica de reconocimiento temprano mediante los criterios de qSOFA se aplica aquí al contexto específico de una infección de origen obstétrico.',
  no:{
    1:'Es precisamente lo contrario: la sepsis puerperal SÍ retoma directamente el concepto general de sepsis ya visto.',
    2:'Es precisamente lo contrario: los criterios de qSOFA SÍ pueden aplicarse en el contexto de una infección obstétrica.',
    3:'Es precisamente lo contrario: la sepsis puerperal es una aplicación específica del mismo concepto general de sepsis.'
  },
  trampa:'No reconocer la conexión conceptual correcta entre la sepsis puerperal y el concepto general de sepsis ya desarrollado en Patología Infecciosa.',
  obj:'Identificar la conexión entre la sepsis puerperal y el concepto general de sepsis ya visto en Patología Infecciosa.',
  ref:'Williams, Obstetricia, cap. 37.',
  tags:['sepsis puerperal','conexión con sepsis general']
},
{
  id:'U12-OB2-Q45', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Medicina materno-fetal: conceptos básicos', sub:'Qué define a un embarazo de alto riesgo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué define a un embarazo de alto riesgo?',
  ops:[
    'Aquel donde la madre, el feto, o ambos, tienen una probabilidad mayor de lo habitual de experimentar un resultado adverso', 'Un embarazo de alto riesgo se define exclusivamente por la edad materna, sin ninguna otra consideración posible', 'Cualquier embarazo múltiple siempre se excluye por definición de la categoría de embarazo de alto riesgo', 'Un embarazo de alto riesgo nunca tiene ninguna relación real con complicaciones ya vistas en Obstetricia I'],
  ok:0,
  clave:'Aquel donde la madre, el feto, o ambos, tienen una probabilidad mayor de lo habitual de experimentar un resultado adverso.',
  exp:'Un embarazo de alto riesgo es aquel donde la madre, el feto, o ambos, tienen una probabilidad mayor de lo habitual de experimentar un resultado adverso, ya sea por condiciones preexistentes o complicaciones desarrolladas durante el embarazo.',
  no:{
    1:'La edad materna es solo uno de varios factores posibles, no el único criterio que define un embarazo de alto riesgo.',
    2:'Es precisamente lo contrario: el embarazo múltiple SÍ se incluye como ejemplo de embarazo de alto riesgo.',
    3:'Es precisamente lo contrario: este concepto SÍ integra muchas complicaciones ya vistas en Obstetricia I.'
  },
  trampa:'Reducir la definición de embarazo de alto riesgo a un solo factor aislado, como la edad materna, sin reconocer su amplitud conceptual.',
  obj:'Definir qué caracteriza a un embarazo de alto riesgo.',
  ref:'Williams, Obstetricia, cap. 1.',
  tags:['embarazo de alto riesgo','definición amplia']
},
{
  id:'U12-OB2-Q46', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Medicina materno-fetal: conceptos básicos', sub:'Función de la unidad de medicina materno-fetal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple una unidad de medicina materno-fetal?',
  ops:[
    'Es un nivel de atención especializado, con recursos y experiencia específicos para el manejo de embarazos de alto riesgo particularmente complejos', 'Esta unidad nunca tiene ninguna relación real con el manejo de embarazos de alto riesgo particularmente complejos', 'Cualquier centro de salud de primer nivel tiene exactamente la misma capacidad resolutiva que una unidad especializada', 'Referir a una gestante hacia esta unidad especializada siempre representa un fracaso del manejo inicial brindado'],
  ok:0,
  clave:'Es un nivel de atención especializado, con recursos y experiencia específicos para el manejo de embarazos de alto riesgo particularmente complejos.',
  exp:'La unidad de medicina materno-fetal es un nivel de atención especializado, con recursos y experiencia específicos para el manejo de embarazos de alto riesgo particularmente complejos.',
  no:{
    1:'Es precisamente lo contrario: esta unidad SÍ tiene una relación central con el manejo de embarazos de alto riesgo complejos.',
    2:'Es precisamente lo contrario: un centro de primer nivel NO tiene la misma capacidad resolutiva que una unidad especializada.',
    3:'Es precisamente lo contrario: referir oportunamente NO representa un fracaso, sino la aplicación correcta de reconocer límites.'
  },
  trampa:'Subestimar la función especializada de la unidad de medicina materno-fetal, o interpretar la referencia como un fracaso del manejo inicial.',
  obj:'Explicar la función de la unidad de medicina materno-fetal como nivel de atención especializado.',
  ref:'Williams, Obstetricia, cap. 1.',
  tags:['unidad de medicina materno-fetal','nivel de atención especializado']
},
{
  id:'U12-OB2-Q47', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Medicina materno-fetal: conceptos básicos', sub:'Integración de herramientas en la vigilancia fetal anteparto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué integra la vigilancia fetal anteparto en un embarazo de alto riesgo?',
  ops:[
    'Biometría fetal seriada, doppler obstétrico, y otras pruebas de bienestar fetal, ajustadas a la frecuencia e intensidad según el nivel de riesgo', 'La vigilancia fetal anteparto se limita exclusivamente a la biometría fetal, sin ninguna otra herramienta integrada', 'Esta vigilancia nunca se ajusta según el nivel específico de riesgo identificado en cada caso particular', 'La vigilancia fetal anteparto no tiene ninguna relación real con las herramientas ya desarrolladas en Obstetricia I y II'],
  ok:0,
  clave:'Biometría fetal seriada, doppler obstétrico, y otras pruebas de bienestar fetal, ajustadas a la frecuencia e intensidad según el nivel de riesgo.',
  exp:'La vigilancia fetal anteparto integra de forma sistemática las herramientas ya desarrolladas: biometría fetal seriada, doppler obstétrico, y otras pruebas de bienestar fetal, ajustadas según el nivel específico de riesgo identificado.',
  no:{
    1:'La vigilancia va más allá de la biometría sola; también integra el doppler y otras pruebas de bienestar fetal.',
    2:'Es precisamente lo contrario: esta vigilancia SÍ se ajusta según el nivel específico de riesgo de cada caso.',
    3:'Es precisamente lo contrario: esta vigilancia SÍ integra directamente las herramientas ya desarrolladas en ambos bloques.'
  },
  trampa:'Reducir la vigilancia fetal anteparto a una sola herramienta aislada, sin reconocer su integración de múltiples herramientas ajustadas al riesgo.',
  obj:'Explicar cómo se integra la vigilancia fetal anteparto en un embarazo de alto riesgo.',
  ref:'Williams, Obstetricia, cap. 1.',
  tags:['vigilancia fetal anteparto','integración de herramientas']
},
{
  id:'U12-OB2-Q48', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Medicina materno-fetal: conceptos básicos', sub:'Cierre integrador de ambos bloques de obstetricia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué recorrido conceptual completo cierra este último tema del bloque de Obstetricia II?',
  ops:[
    'Desde la fisiología normal del embarazo hasta las complicaciones más específicas y complejas, integrando la capacidad de reconocer desviaciones y aplicar el manejo apropiado según el nivel de riesgo', 'Este tema no tiene ninguna relación real con los demás temas ya vistos previamente en ambos bloques de obstetricia', 'El bloque de Obstetricia II no sigue ningún recorrido conceptual coherente entre sus distintos temas', 'La medicina materno-fetal es un concepto completamente aislado, sin ninguna conexión con Obstetricia I o II'],
  ok:0,
  clave:'Desde la fisiología normal del embarazo hasta las complicaciones más específicas y complejas, integrando la capacidad de reconocer desviaciones y aplicar el manejo apropiado según el nivel de riesgo.',
  exp:'Este tema, y con él todo el bloque, cierra retomando el hilo conductor completo que ha atravesado ambos bloques de obstetricia: desde la fisiología normal hasta las complicaciones más complejas, integrando el reconocimiento y manejo según el nivel de riesgo.',
  no:{
    1:'Este tema sí tiene una relación conceptual directa de cierre con todos los demás temas ya vistos en ambos bloques.',
    2:'El bloque de Obstetricia II sí sigue un recorrido conceptual coherente, desde distocias hasta este cierre integrador.',
    3:'Este tema es precisamente el cierre conceptual integrador, conectado con todo lo ya visto en Obstetricia I y II.'
  },
  trampa:'No reconocer el rol de cierre conceptual integrador que cumple este último tema respecto al recorrido completo de ambos bloques de obstetricia.',
  obj:'Explicar el rol de cierre conceptual que cumple el tema de medicina materno-fetal dentro de ambos bloques de obstetricia.',
  ref:'Williams, Obstetricia, cap. 1.',
  tags:['embarazo de alto riesgo','cierre integrador de ambos bloques']
},
{
  id:'U12-OB2-Q49', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Infección puerperal', sub:'Mayor riesgo de endometritis según vía de nacimiento',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué vía de nacimiento se asocia un mayor riesgo de endometritis puerperal?',
  ops:[
    'La cesárea', 'El parto vaginal, siendo esta la vía con mayor riesgo de endometritis puerperal en comparación con la cesárea', 'Ambas vías de nacimiento conllevan exactamente el mismo riesgo de endometritis puerperal, sin ninguna diferencia real', 'La vía de nacimiento nunca tiene ninguna relación real con el riesgo de desarrollar endometritis puerperal'],
  ok:0,
  clave:'La cesárea.',
  exp:'La endometritis puerperal es la forma más frecuente de infección puerperal, con mayor riesgo tras una cesárea que tras un parto vaginal.',
  no:{
    1:'Es precisamente lo contrario: la CESÁREA conlleva mayor riesgo de endometritis puerperal, no el parto vaginal.',
    2:'Es precisamente lo contrario: SÍ existe una diferencia real de riesgo entre ambas vías de nacimiento.',
    3:'La vía de nacimiento sí tiene una relación directa con el riesgo de desarrollar endometritis puerperal.'
  },
  trampa:'Invertir cuál vía de nacimiento (cesárea vs. parto vaginal) conlleva mayor riesgo de endometritis puerperal.',
  obj:'Identificar la vía de nacimiento asociada a mayor riesgo de endometritis puerperal.',
  ref:'Williams, Obstetricia, cap. 37.',
  tags:['endometritis puerperal','mayor riesgo según vía de nacimiento']
},
{
  id:'U12-OB2-Q50', programa:'unirm', cuatri:12,
  esp:'Obstetricia II', tema:'Infección puerperal', sub:'Hilo conductor de las complicaciones del bloque',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué principio general resume la conexión entre las distintas complicaciones obstétricas desarrolladas a lo largo de Obstetricia II?',
  ops:[
    'Cada complicación específica se entiende mejor a la luz de los principios generales ya establecidos en Obstetricia I y en otros bloques de este pensum, aplicados ahora a escenarios más específicos y complejos', 'Las complicaciones desarrolladas en Obstetricia II no tienen ninguna relación real con los principios ya vistos en Obstetricia I', 'Cada complicación de Obstetricia II debe entenderse de forma completamente aislada, sin ninguna conexión con el resto del bloque', 'No existe ningún principio general que conecte las distintas complicaciones desarrolladas a lo largo de este bloque'],
  ok:0,
  clave:'Cada complicación específica se entiende mejor a la luz de los principios generales ya establecidos en Obstetricia I y en otros bloques de este pensum, aplicados ahora a escenarios más específicos y complejos.',
  exp:'Cada complicación obstétrica específica desarrollada en este bloque se entiende mejor a la luz de los principios generales ya establecidos en Obstetricia I y en otros bloques, aplicados ahora a escenarios clínicos más específicos y complejos.',
  no:{
    1:'Es precisamente lo contrario: las complicaciones de Obstetricia II SÍ tienen una relación directa con los principios de Obstetricia I.',
    2:'Es precisamente lo contrario: cada complicación se entiende MEJOR quando se conecta con el resto del bloque y el pensum.',
    3:'Sí existe un principio general que conecta las complicaciones: la aplicación de principios ya vistos a escenarios más complejos.'
  },
  trampa:'Tratar cada complicación de Obstetricia II como un tema aislado, sin reconocer su conexión con los principios generales ya vistos en Obstetricia I.',
  obj:'Explicar el principio general que conecta las distintas complicaciones obstétricas desarrolladas en Obstetricia II.',
  ref:'Williams, Obstetricia, cap. 37.',
  tags:['infección puerperal','hilo conductor del bloque']
}

]);
