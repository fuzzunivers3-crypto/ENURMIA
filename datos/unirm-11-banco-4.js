/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 11, TANDA DE OBSTETRICIA I (2/2)
   Continua el prefijo U11-OB1- desde Q30. Cubre los ultimos 7
   temas: puerperio normal, hemorragia obstetrica del primer y
   tercer trimestre, trastornos hipertensivos del embarazo,
   diabetes gestacional, e infecciones en el embarazo (Q30-Q50).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

{
  id:'U11-OB1-Q30', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Puerperio normal', sub:'Por qué el puerperio inmediato exige mayor vigilancia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el puerperio inmediato -las primeras horas después del parto- es el periodo de mayor riesgo de complicaciones hemorrágicas?',
  ops:[
    'Porque es cuando debe verificarse que el útero se mantenga adecuadamente contraído y que el sangrado vaginal se mantenga dentro de lo esperado, retomando la vigilancia iniciada durante el alumbramiento', 'El riesgo de complicaciones hemorrágicas es exactamente el mismo durante todo el puerperio, sin ninguna variación en el tiempo', 'El puerperio inmediato nunca requiere ninguna vigilancia específica distinta de la del resto del puerperio completo', 'El riesgo de hemorragia disminuye significativamente justo después del parto, aumentando solo semanas más tarde'],
  ok:0,
  clave:'Porque es cuando debe verificarse que el útero se mantenga adecuadamente contraído y que el sangrado vaginal se mantenga dentro de lo esperado, retomando la vigilancia iniciada durante el alumbramiento.',
  exp:'El puerperio inmediato es el periodo de mayor riesgo de complicaciones hemorrágicas, retomando directamente la vigilancia ya iniciada durante el alumbramiento: verificar que el útero se mantenga contraído y que el sangrado se mantenga dentro de lo esperado.',
  no:{
    1:'El riesgo de complicaciones hemorrágicas es mayor precisamente en las primeras horas, no constante durante todo el puerperio.',
    2:'El puerperio inmediato sí requiere una vigilancia específica y más cercana que el resto del puerperio.',
    3:'Es precisamente lo contrario: el riesgo de hemorragia es MAYOR en las primeras horas, no menor, disminuyendo después.'
  },
  trampa:'Asumir que el riesgo de complicaciones hemorrágicas es constante durante todo el puerperio, sin reconocer la mayor vulnerabilidad de las primeras horas.',
  obj:'Explicar por qué el puerperio inmediato exige la mayor vigilancia de complicaciones hemorrágicas.',
  ref:'Williams, Obstetricia, cap. 36.',
  tags:['puerperio inmediato','mayor riesgo de hemorragia']
},
{
  id:'U11-OB1-Q31', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Puerperio normal', sub:'Qué señala una involución uterina que no progresa',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué puede señalar una involución uterina que no progresa según lo esperado -un útero anormalmente grande o blando más allá del tiempo esperado?',
  ops:[
    'Una posible complicación, como retención de restos placentarios o infección puerperal, que amerita evaluación adicional', 'La involución uterina que no progresa según lo esperado nunca tiene ninguna relevancia clínica real que amerite evaluación', 'Un útero anormalmente grande o blando más allá del tiempo esperado siempre representa una variante normal sin importancia', 'La involución uterina siempre sigue exactamente el mismo patrón, sin ninguna posibilidad real de desviación'],
  ok:0,
  clave:'Una posible complicación, como retención de restos placentarios o infección puerperal, que amerita evaluación adicional.',
  exp:'Una involución uterina que no progresa según lo esperado -un útero que permanece anormalmente grande o blando más allá del tiempo esperado- puede señalar una complicación (retención de restos placentarios, infección puerperal) que amerita evaluación adicional.',
  no:{
    1:'Esta desviación sí tiene relevancia clínica real, señalando una posible complicación que amerita evaluación adicional.',
    2:'Es precisamente lo contrario: un útero anormalmente grande o blando más allá del tiempo esperado es una señal de alarma, no una variante normal.',
    3:'La involución uterina sí puede desviarse del patrón esperado, y esa desviación es clínicamente relevante de reconocer.'
  },
  trampa:'Interpretar una involución uterina anormal como una variante normal sin importancia, sin reconocerla como posible señal de complicación puerperal.',
  obj:'Explicar qué puede señalar una involución uterina que no progresa según lo esperado.',
  ref:'Williams, Obstetricia, cap. 36.',
  tags:['involución uterina','desviación del patrón esperado']
},
{
  id:'U11-OB1-Q32', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Puerperio normal', sub:'Evolución esperada de los loquios',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer en su segunda semana de puerperio presenta un loquio que se mantiene con sangrado rojo intenso, sin disminuir, y se acompaña de mal olor.',
  enunciado:'¿Qué interpretación es apropiada ante este hallazgo?',
  ops:[
    'Se desvía de la evolución esperada de los loquios y amerita evaluación adicional por una posible complicación puerperal', 'Esta presentación corresponde exactamente a la evolución normal esperada de los loquios en cualquier etapa del puerperio', 'El mal olor de los loquios nunca tiene ninguna relevancia clínica real dentro de la evaluación puerperal', 'Un loquio con sangrado rojo intenso persistente nunca amerita ninguna evaluación adicional durante el puerperio'],
  ok:0,
  clave:'Se desvía de la evolución esperada de los loquios y amerita evaluación adicional por una posible complicación puerperal.',
  exp:'Un loquio que se mantiene con sangrado rojo intenso más allá del tiempo esperado, que no disminuye, o que se acompaña de mal olor, son señales que ameritan evaluación adicional por una posible complicación puerperal -a diferencia de la evolución esperada hacia un color más claro y cantidad decreciente.',
  no:{
    1:'Esta presentación se desvía de la evolución esperada (progresión hacia color más claro y cantidad decreciente).',
    2:'El mal olor sí tiene relevancia clínica real, siendo una señal de alarma en la evaluación de los loquios puerperales.',
    3:'Un loquio con sangrado rojo intenso persistente sí amerita evaluación adicional por una posible complicación.'
  },
  trampa:'Aceptar una evolución anormal de los loquios (sangrado persistente, mal olor) como parte del proceso normal del puerperio.',
  obj:'Aplicar el reconocimiento de una desviación de la evolución esperada de los loquios como señal de alarma.',
  ref:'Williams, Obstetricia, cap. 36.',
  tags:['loquios','desviación de la evolución esperada']
},
{
  id:'U11-OB1-Q33', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Hemorragia obstétrica del primer trimestre', sub:'Distinción entre amenaza de aborto y aborto en curso',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué distingue clínicamente a la amenaza de aborto de un aborto en curso?',
  ops:[
    'En la amenaza de aborto el embrión sigue viable y el cuello uterino permanece cerrado; en el aborto en curso el cuello ya se encuentra dilatado y el proceso es generalmente irreversible', 'Ambas condiciones son exactamente idénticas en su presentación clínica, sin ninguna diferencia real entre ellas', 'En la amenaza de aborto el cuello uterino siempre está dilatado, y en el aborto en curso el cuello permanece siempre cerrado', 'Ninguna de las dos condiciones puede distinguirse mediante la evaluación clínica combinada con la ecografía obstétrica'],
  ok:0,
  clave:'En la amenaza de aborto el embrión sigue viable y el cuello uterino permanece cerrado; en el aborto en curso el cuello ya se encuentra dilatado y el proceso es generalmente irreversible.',
  exp:'En la amenaza de aborto el embrión sigue viable y el cuello uterino permanece cerrado; en el aborto en curso el cuello ya se encuentra dilatado y el proceso es generalmente irreversible -esta distinción combina la evaluación clínica con la ecografía obstétrica.',
  no:{
    1:'Son condiciones claramente distintas, con diferencias en viabilidad del embrión y estado del cuello uterino.',
    2:'Está invertido: en la AMENAZA de aborto el cuello está cerrado, y en el ABORTO EN CURSO el cuello está dilatado, no al revés.',
    3:'Ambas condiciones sí pueden distinguirse mediante la combinación de evaluación clínica y ecografía obstétrica.'
  },
  trampa:'Invertir las características distintivas de la amenaza de aborto (cuello cerrado) y el aborto en curso (cuello dilatado).',
  obj:'Distinguir la amenaza de aborto del aborto en curso según sus características clínicas.',
  ref:'Williams, Obstetricia, cap. 18.',
  tags:['aborto espontáneo','amenaza vs. aborto en curso']
},
{
  id:'U11-OB1-Q34', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Hemorragia obstétrica del primer trimestre', sub:'Sospecha de embarazo ectópico por discordancia beta-hCG/ecografía',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer en edad reproductiva consulta por dolor pélvico y sangrado vaginal, con una prueba de embarazo positiva. El nivel de beta-hCG es lo suficientemente alto como para esperar visualizar un embarazo intrauterino, pero la ecografía no logra confirmarlo dentro del útero.',
  enunciado:'¿Qué diagnóstico debe sospecharse activamente ante este hallazgo, y por qué?',
  ops:[
    'Embarazo ectópico, porque la discordancia entre el nivel de beta-hCG esperado y la ausencia de un embarazo intrauterino visible orienta hacia esta sospecha', 'Enfermedad trofoblástica gestacional, ya que cualquier discordancia entre beta-hCG y ecografía siempre corresponde a esta condición específica', 'Ninguna sospecha diagnóstica adicional es apropiada ante este hallazgo, ya que es una variante normal frecuente del embarazo', 'Aborto completo, ya que la ausencia de hallazgos intrauterinos en la ecografía siempre confirma este diagnóstico específico'],
  ok:0,
  clave:'Embarazo ectópico, porque la discordancia entre el nivel de beta-hCG esperado y la ausencia de un embarazo intrauterino visible orienta hacia esta sospecha.',
  exp:'La sospecha de embarazo ectópico debe mantenerse activa especialmente si la ecografía no logra confirmar un embarazo intrauterino a pesar de un nivel de beta-hCG que, según el patrón esperado, debería ya mostrar un embarazo visible dentro del útero.',
  no:{
    1:'La enfermedad trofoblástica gestacional tiene un hallazgo ecográfico característico distinto, no simplemente ausencia de embarazo intrauterino.',
    2:'Esta discordancia sí amerita una sospecha diagnóstica activa, no debe interpretarse como una variante normal del embarazo.',
    3:'El aborto completo no explica por sí solo esta discordancia específica entre el nivel de beta-hCG y los hallazgos ecográficos.'
  },
  trampa:'No reconocer la discordancia entre beta-hCG y hallazgos ecográficos como señal de alarma de un posible embarazo ectópico.',
  obj:'Aplicar el reconocimiento de la discordancia beta-hCG/ecografía como herramienta de sospecha de embarazo ectópico.',
  ref:'Williams, Obstetricia, cap. 18.',
  tags:['embarazo ectópico','discordancia beta-hCG y ecografía']
},
{
  id:'U11-OB1-Q35', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Hemorragia obstétrica del primer trimestre', sub:'Hallazgos característicos de la enfermedad trofoblástica gestacional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué hallazgos pueden orientar hacia el diagnóstico de enfermedad trofoblástica gestacional?',
  ops:[
    'Sangrado vaginal, un útero de tamaño mayor al esperado para la edad gestacional, y niveles de beta-hCG marcadamente más elevados de lo esperado', 'Un útero de tamaño exactamente igual al esperado para la edad gestacional, sin ninguna elevación de beta-hCG identificable', 'Ausencia completa de sangrado vaginal, siendo este un criterio diagnóstico excluyente de la enfermedad trofoblástica gestacional', 'Niveles de beta-hCG siempre por debajo de lo esperado para la edad gestacional correspondiente'],
  ok:0,
  clave:'Sangrado vaginal, un útero de tamaño mayor al esperado para la edad gestacional, y niveles de beta-hCG marcadamente más elevados de lo esperado.',
  exp:'La enfermedad trofoblástica gestacional puede incluir sangrado vaginal, un útero de tamaño mayor al esperado para la edad gestacional, y niveles de beta-hCG marcadamente más elevados de lo esperado.',
  no:{
    1:'El útero es de tamaño MAYOR al esperado, no igual, y los niveles de beta-hCG son marcadamente más elevados, no ausentes.',
    2:'El sangrado vaginal sí puede estar presente como parte de la presentación clínica de esta condición.',
    3:'Es precisamente lo contrario: los niveles de beta-hCG están marcadamente MÁS ELEVADOS de lo esperado, no por debajo.'
  },
  trampa:'Invertir los hallazgos característicos de la enfermedad trofoblástica gestacional, especialmente en cuanto al tamaño uterino y el nivel de beta-hCG.',
  obj:'Identificar los hallazgos característicos que orientan hacia el diagnóstico de enfermedad trofoblástica gestacional.',
  ref:'Williams, Obstetricia, cap. 18.',
  tags:['enfermedad trofoblástica gestacional','hallazgos característicos']
},
{
  id:'U11-OB1-Q36', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Hemorragia obstétrica del tercer trimestre', sub:'Placenta previa: por qué evitar el tacto vaginal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué debe evitarse el tacto vaginal digital ante la sospecha de placenta previa hasta descartarla mediante ecografía?',
  ops:[
    'Porque la manipulación del cuello uterino en presencia de una placenta previa puede desencadenar una hemorragia significativa', 'El tacto vaginal digital nunca tiene ninguna relación real con el riesgo de hemorragia en presencia de placenta previa', 'El tacto vaginal digital siempre es un procedimiento seguro y recomendado en cualquier sangrado del tercer trimestre', 'Evitar el tacto vaginal ante sospecha de placenta previa es una práctica sin ningún fundamento clínico real'],
  ok:0,
  clave:'Porque la manipulación del cuello uterino en presencia de una placenta previa puede desencadenar una hemorragia significativa.',
  exp:'Un principio de manejo particularmente importante en la placenta previa es evitar el tacto vaginal digital hasta descartar esta condición mediante ecografía, ya que la manipulación del cuello uterino en presencia de placenta previa puede desencadenar una hemorragia significativa.',
  no:{
    1:'El tacto vaginal sí tiene una relación directa y peligrosa con el riesgo de hemorragia en presencia de placenta previa.',
    2:'Es precisamente lo contrario: el tacto vaginal digital debe EVITARSE ante sospecha de placenta previa, no es un procedimiento seguro en ese contexto.',
    3:'Esta práctica sí tiene un fundamento clínico real y bien establecido: prevenir una hemorragia significativa desencadenada por la manipulación.'
  },
  trampa:'Realizar un tacto vaginal digital de rutina ante cualquier sangrado del tercer trimestre, sin considerar el riesgo específico de la placenta previa.',
  obj:'Explicar por qué debe evitarse el tacto vaginal digital ante sospecha de placenta previa hasta descartarla por ecografía.',
  ref:'Williams, Obstetricia, cap. 41.',
  tags:['placenta previa','contraindicación del tacto vaginal']
},
{
  id:'U11-OB1-Q37', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Hemorragia obstétrica del tercer trimestre', sub:'Distinción entre placenta previa y desprendimiento de placenta',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una gestante en el tercer trimestre presenta sangrado vaginal, dolor abdominal significativo y un útero que se palpa hipertónico y doloroso.',
  enunciado:'¿Qué condición es más probable según esta presentación, y en qué se diferencia de la otra causa principal de hemorragia del tercer trimestre?',
  ops:[
    'Desprendimiento prematuro de placenta, ya que se presenta con dolor y útero hipertónico, a diferencia del sangrado indoloro característico de la placenta previa', 'Placenta previa, ya que el dolor abdominal y el útero hipertónico son hallazgos característicos exclusivos de esta condición', 'Ambas condiciones se presentan siempre con exactamente el mismo patrón clínico, sin ninguna diferencia distintiva entre ellas', 'Esta presentación no corresponde a ninguna de las causas principales de hemorragia del tercer trimestre descritas en este tema'],
  ok:0,
  clave:'Desprendimiento prematuro de placenta, ya que se presenta con dolor y útero hipertónico, a diferencia del sangrado indoloro característico de la placenta previa.',
  exp:'El desprendimiento prematuro de placenta, a diferencia de la placenta previa, típicamente se presenta con dolor abdominal significativo y un útero que puede palparse hipertónico -esta distinción entre sangrado indoloro (placenta previa) y doloroso con útero hipertónico (desprendimiento) es clave para el diagnóstico diferencial.',
  no:{
    1:'La placenta previa se caracteriza por sangrado INDOLORO, no por dolor abdominal y útero hipertónico como en este caso.',
    2:'Ambas condiciones tienen patrones clínicos distintos y diferenciables: dolor/útero hipertónico vs. sangrado indoloro.',
    3:'Esta presentación sí corresponde a una causa principal descrita en este tema: el desprendimiento prematuro de placenta.'
  },
  trampa:'Confundir la presentación del desprendimiento de placenta (doloroso, útero hipertónico) con la de la placenta previa (indoloro).',
  obj:'Aplicar la distinción entre placenta previa y desprendimiento de placenta según la presentación clínica.',
  ref:'Williams, Obstetricia, cap. 41.',
  tags:['desprendimiento prematuro de placenta','distinción con placenta previa']
},
{
  id:'U11-OB1-Q38', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Hemorragia obstétrica del tercer trimestre', sub:'Factor de riesgo principal de rotura uterina',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué factor aumenta particularmente el riesgo de rotura uterina durante el trabajo de parto?',
  ops:[
    'Una cicatriz uterina previa (como una cesárea anterior) en una mujer que intenta un trabajo de parto vaginal', 'La rotura uterina ocurre con la misma frecuencia en cualquier mujer, sin ningún factor de riesgo particular identificable', 'Un primer embarazo sin ningún antecedente quirúrgico uterino previo es el principal factor de riesgo de rotura uterina', 'La rotura uterina nunca tiene ninguna relación real con antecedentes quirúrgicos uterinos previos de la mujer'],
  ok:0,
  clave:'Una cicatriz uterina previa (como una cesárea anterior) en una mujer que intenta un trabajo de parto vaginal.',
  exp:'La rotura uterina, aunque poco frecuente, tiene mayor riesgo en mujeres con una cicatriz uterina previa (como una cesárea anterior) que intentan un trabajo de parto vaginal.',
  no:{
    1:'Sí existe un factor de riesgo particular bien identificado: la cicatriz uterina previa en un intento de parto vaginal.',
    2:'Es precisamente lo contrario: un primer embarazo sin cicatriz uterina previa tiene un riesgo mucho menor de rotura uterina.',
    3:'La rotura uterina sí tiene una relación directa y bien documentada con antecedentes quirúrgicos uterinos previos.'
  },
  trampa:'Asumir que la rotura uterina ocurre de forma aleatoria sin relación con antecedentes quirúrgicos uterinos previos, como una cesárea anterior.',
  obj:'Identificar el factor de riesgo principal para el desarrollo de rotura uterina durante el trabajo de parto.',
  ref:'Williams, Obstetricia, cap. 41.',
  tags:['rotura uterina','factor de riesgo de cicatriz previa']
},
{
  id:'U11-OB1-Q39', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Trastornos hipertensivos del embarazo', sub:'Diferencia entre hipertensión gestacional y preeclampsia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre la hipertensión gestacional y la preeclampsia?',
  ops:[
    'La hipertensión gestacional es la elevación de la presión arterial sin proteinuria u otros signos de compromiso multiorgánico; la preeclampsia se acompaña de estos hallazgos adicionales', 'Ambas condiciones son exactamente idénticas en su presentación clínica, sin ninguna diferencia real que amerite distinguirlas', 'La hipertensión gestacional siempre se acompaña de proteinuria significativa, igual que la preeclampsia, sin ninguna diferencia', 'La preeclampsia nunca se acompaña de ningún signo de compromiso multiorgánico adicional más allá de la elevación de presión'],
  ok:0,
  clave:'La hipertensión gestacional es la elevación de la presión arterial sin proteinuria u otros signos de compromiso multiorgánico; la preeclampsia se acompaña de estos hallazgos adicionales.',
  exp:'La hipertensión gestacional es la elevación de la presión arterial sin la presencia de proteinuria u otros signos de compromiso multiorgánico; la preeclampsia se caracteriza por la elevación de la presión acompañada de proteinuria u otros signos de compromiso de órganos maternos.',
  no:{
    1:'Son condiciones claramente distintas, con diferencias en la presencia o ausencia de proteinuria y otros signos de compromiso.',
    2:'Está invertido: la hipertensión gestacional NO se acompaña de proteinuria significativa, a diferencia de la preeclampsia.',
    3:'Es precisamente lo contrario: la preeclampsia SÍ se acompaña de signos de compromiso multiorgánico adicionales.'
  },
  trampa:'Confundir la hipertensión gestacional (sin compromiso multiorgánico) con la preeclampsia (con compromiso multiorgánico), o asumir que son idénticas.',
  obj:'Distinguir la hipertensión gestacional de la preeclampsia según sus hallazgos clínicos.',
  ref:'Williams, Obstetricia, cap. 40.',
  tags:['hipertensión gestacional','diferencia con preeclampsia']
},
{
  id:'U11-OB1-Q40', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Trastornos hipertensivos del embarazo', sub:'Qué determina la conducta de manejo en preeclampsia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué determina la conducta de manejo apropiada ante un caso de preeclampsia, desde vigilancia ambulatoria hasta considerar finalizar el embarazo?',
  ops:[
    'La severidad de la preeclampsia, que se clasifica según el grado de compromiso de órganos maternos, y el balance entre el riesgo materno y el beneficio de continuar la gestación', 'La conducta de manejo en preeclampsia es siempre exactamente la misma, sin importar la severidad del cuadro clínico presentado', 'Finalizar el embarazo es siempre la primera conducta apropiada ante cualquier grado de preeclampsia diagnosticada', 'La severidad de la preeclampsia nunca tiene ninguna relación real con la conducta de manejo apropiada a seguir'],
  ok:0,
  clave:'La severidad de la preeclampsia, que se clasifica según el grado de compromiso de órganos maternos, y el balance entre el riesgo materno y el beneficio de continuar la gestación.',
  exp:'La severidad de la preeclampsia varía considerablemente, y esta clasificación determina directamente la conducta de manejo -desde vigilancia ambulatoria estrecha en formas leves, hasta considerar finalizar el embarazo en formas graves, dependiendo del balance entre riesgo materno y beneficio de continuar.',
  no:{
    1:'La conducta de manejo sí varía significativamente según la severidad del cuadro de preeclampsia presentado.',
    2:'Finalizar el embarazo no es la primera conducta en todos los casos; depende de la severidad y el balance riesgo-beneficio.',
    3:'La severidad sí tiene una relación directa y determinante con la conducta de manejo apropiada a seguir.'
  },
  trampa:'Asumir que el manejo de la preeclampsia es uniforme sin considerar la severidad del cuadro y el balance riesgo-beneficio individualizado.',
  obj:'Explicar qué determina la conducta de manejo apropiada ante un caso de preeclampsia.',
  ref:'Williams, Obstetricia, cap. 40.',
  tags:['preeclampsia','conducta según severidad']
},
{
  id:'U11-OB1-Q41', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Trastornos hipertensivos del embarazo', sub:'Síntomas premonitorios de eclampsia',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una gestante con diagnóstico ya conocido de preeclampsia reporta cefalea intensa persistente y alteraciones visuales en las últimas horas.',
  enunciado:'¿Qué significado clínico tienen estos síntomas en esta gestante, según lo visto en este tema?',
  ops:[
    'Se consideran signos de alarma premonitorios de una posible eclampsia inminente, y ameritan evaluación urgente', 'Estos síntomas nunca tienen ninguna relación real con la evolución de la preeclampsia hacia una posible eclampsia', 'La cefalea y las alteraciones visuales son hallazgos esperados y sin ninguna relevancia clínica en cualquier gestante con preeclampsia', 'Ante estos síntomas, la conducta apropiada es simplemente continuar con el control prenatal habitual sin ninguna evaluación adicional'],
  ok:0,
  clave:'Se consideran signos de alarma premonitorios de una posible eclampsia inminente, y ameritan evaluación urgente.',
  exp:'La cefalea intensa persistente y las alteraciones visuales en una gestante con preeclampsia ya conocida se consideran signos de alarma premonitorios de una posible eclampsia inminente, ameritando evaluación urgente para intervenir antes de que ocurra la convulsión.',
  no:{
    1:'Estos síntomas sí tienen una relación directa y bien documentada con el riesgo de progresión hacia eclampsia.',
    2:'Estos síntomas NO son esperados ni carecen de relevancia; son señales de alarma que ameritan evaluación urgente.',
    3:'Ante estos síntomas de alarma, la conducta apropiada es una evaluación urgente, no continuar con el control habitual sin cambios.'
  },
  trampa:'Subestimar la cefalea intensa y las alteraciones visuales en una gestante con preeclampsia, sin reconocerlas como signos premonitorios de eclampsia.',
  obj:'Aplicar el reconocimiento de los síntomas premonitorios de eclampsia en una gestante con preeclampsia conocida.',
  ref:'Williams, Obstetricia, cap. 40.',
  tags:['eclampsia','síntomas premonitorios']
},
{
  id:'U11-OB1-Q42', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Diabetes gestacional en el embarazo', sub:'Por qué se desarrolla la diabetes gestacional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se desarrolla la diabetes gestacional en algunas mujeres durante el embarazo?',
  ops:[
    'Por los cambios hormonales propios de la gestación que generan un estado de mayor resistencia a la insulina, que en algunas mujeres excede la capacidad de su páncreas de compensar con mayor producción de insulina', 'La diabetes gestacional nunca tiene ninguna relación real con los cambios hormonales propios del embarazo', 'El embarazo siempre disminuye la resistencia a la insulina, facilitando el control glucémico en cualquier gestante', 'La diabetes gestacional se desarrolla exclusivamente por causas genéticas, sin ninguna relación con cambios hormonales del embarazo'],
  ok:0,
  clave:'Por los cambios hormonales propios de la gestación que generan un estado de mayor resistencia a la insulina, que en algunas mujeres excede la capacidad de su páncreas de compensar con mayor producción de insulina.',
  exp:'La diabetes gestacional se relaciona con los cambios hormonales propios de la gestación que generan un estado de mayor resistencia a la insulina, necesario fisiológicamente, pero que en algunas mujeres excede la capacidad de su páncreas de compensar.',
  no:{
    1:'Los cambios hormonales del embarazo sí tienen una relación directa con el desarrollo de la diabetes gestacional.',
    2:'Es precisamente lo contrario: el embarazo AUMENTA la resistencia a la insulina, no la disminuye.',
    3:'Aunque existen factores de riesgo genéticos asociados, el mecanismo central involucra los cambios hormonales propios del embarazo.'
  },
  trampa:'Asumir que el embarazo facilita el control glucémico disminuyendo la resistencia a la insulina, cuando en realidad ocurre lo contrario.',
  obj:'Explicar por qué se desarrolla la diabetes gestacional durante el embarazo.',
  ref:'Williams, Obstetricia, cap. 57.',
  tags:['diabetes gestacional','mecanismo de resistencia a la insulina']
},
{
  id:'U11-OB1-Q43', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Diabetes gestacional en el embarazo', sub:'Por qué el tamizaje es universal, no solo para gestantes de riesgo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el tamizaje de diabetes gestacional se realiza de forma universal a toda gestante, y no solo a quienes presentan factores de riesgo evidentes?',
  ops:[
    'Porque una proporción significativa de los casos de diabetes gestacional ocurre en mujeres sin factores de riesgo claramente identificables antes del tamizaje', 'El tamizaje de diabetes gestacional únicamente debería aplicarse a gestantes con factores de riesgo evidentes, nunca de forma universal', 'Todas las gestantes sin excepción presentan siempre algún factor de riesgo identificable para el desarrollo de diabetes gestacional', 'El tamizaje universal de diabetes gestacional no aporta ninguna ventaja real frente a un tamizaje dirigido solo a gestantes de riesgo'],
  ok:0,
  clave:'Porque una proporción significativa de los casos de diabetes gestacional ocurre en mujeres sin factores de riesgo claramente identificables antes del tamizaje.',
  exp:'Este tamizaje se realiza de forma universal precisamente porque una proporción significativa de los casos de diabetes gestacional ocurre en mujeres sin factores de riesgo claramente identificables antes del tamizaje.',
  no:{
    1:'Es precisamente lo contrario: el tamizaje universal es necesario porque limitarlo a gestantes de riesgo dejaría casos sin detectar.',
    2:'No todas las gestantes presentan factores de riesgo identificables; muchos casos ocurren sin ellos.',
    3:'El tamizaje universal sí aporta una ventaja real, detectando casos que un tamizaje dirigido solo a gestantes de riesgo dejaría pasar.'
  },
  trampa:'Asumir que solo las gestantes con factores de riesgo evidentes desarrollan diabetes gestacional, justificando un tamizaje limitado a ese grupo.',
  obj:'Explicar por qué el tamizaje de diabetes gestacional se realiza de forma universal, no solo dirigido a gestantes de riesgo.',
  ref:'Williams, Obstetricia, cap. 57.',
  tags:['tamizaje de diabetes gestacional','tamizaje universal']
},
{
  id:'U11-OB1-Q44', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Diabetes gestacional en el embarazo', sub:'Consecuencias de una diabetes gestacional no controlada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué consecuencias se asocian a una diabetes gestacional no controlada adecuadamente?',
  ops:[
    'Mayor riesgo de trastornos hipertensivos del embarazo para la madre, y macrosomía fetal con alteraciones metabólicas del recién nacido para el feto', 'Una diabetes gestacional no controlada nunca tiene ninguna consecuencia real ni para la madre ni para el feto en desarrollo', 'Las únicas consecuencias posibles de una diabetes gestacional no controlada afectan exclusivamente a la madre, nunca al feto', 'Las únicas consecuencias posibles de una diabetes gestacional no controlada afectan exclusivamente al feto, nunca a la madre'],
  ok:0,
  clave:'Mayor riesgo de trastornos hipertensivos del embarazo para la madre, y macrosomía fetal con alteraciones metabólicas del recién nacido para el feto.',
  exp:'Una diabetes gestacional no controlada adecuadamente se asocia con consecuencias documentadas tanto para la madre (mayor riesgo de trastornos hipertensivos) como para el feto (macrosomía fetal, alteraciones metabólicas del recién nacido).',
  no:{
    1:'Esta condición sí tiene consecuencias reales y documentadas tanto para la madre como para el feto.',
    2:'Las consecuencias no son exclusivas de la madre; el feto también enfrenta riesgos documentados como la macrosomía fetal.',
    3:'Las consecuencias no son exclusivas del feto; la madre también enfrenta un mayor riesgo de trastornos hipertensivos.'
  },
  trampa:'Reducir las consecuencias de la diabetes gestacional no controlada a un solo lado (solo madre o solo feto), sin reconocer ambas dimensiones.',
  obj:'Identificar las consecuencias de una diabetes gestacional no controlada tanto para la madre como para el feto.',
  ref:'Williams, Obstetricia, cap. 57.',
  tags:['control glucémico en el embarazo','consecuencias de diabetes no controlada']
},
{
  id:'U11-OB1-Q45', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Diabetes gestacional en el embarazo', sub:'Enfoque escalonado del manejo de la diabetes gestacional',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué enfoque sigue el manejo de la diabetes gestacional, según lo visto en este tema?',
  ops:[
    'Un enfoque escalonado: iniciar con modificaciones en la alimentación y actividad física, avanzando hacia tratamiento farmacológico solo si estas medidas no logran el control glucémico esperado', 'El tratamiento farmacológico con insulina siempre debe iniciarse de inmediato en toda gestante diagnosticada con diabetes gestacional', 'Las modificaciones en la alimentación y actividad física nunca tienen ningún efecto real sobre el control glucémico durante el embarazo', 'El manejo de la diabetes gestacional no sigue ningún enfoque escalonado; todas las gestantes reciben exactamente el mismo tratamiento'],
  ok:0,
  clave:'Un enfoque escalonado: iniciar con modificaciones en la alimentación y actividad física, avanzando hacia tratamiento farmacológico solo si estas medidas no logran el control glucémico esperado.',
  exp:'El manejo de la diabetes gestacional sigue un enfoque escalonado similar al ya visto en otras condiciones: iniciar con modificaciones en la alimentación y actividad física, y avanzar hacia tratamiento farmacológico solo si las medidas iniciales no logran el control glucémico esperado.',
  no:{
    1:'Es precisamente lo contrario: el manejo inicia con modificaciones de estilo de vida, no directamente con insulina en toda gestante.',
    2:'Las modificaciones en alimentación y actividad física sí tienen un efecto real y documentado sobre el control glucémico.',
    3:'El manejo sí sigue un enfoque escalonado, ajustado según la respuesta de cada gestante a las medidas iniciales.'
  },
  trampa:'Asumir que toda gestante con diabetes gestacional requiere tratamiento farmacológico inmediato, sin considerar el enfoque escalonado inicial.',
  obj:'Explicar el enfoque escalonado del manejo de la diabetes gestacional.',
  ref:'Williams, Obstetricia, cap. 57.',
  tags:['prueba de tolerancia a la glucosa','enfoque escalonado del manejo']
},
{
  id:'U11-OB1-Q46', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Infecciones en el embarazo', sub:'Por qué se trata la bacteriuria asintomática en el embarazo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la bacteriuria asintomática se trata activamente durante el embarazo, a diferencia de lo que podría considerarse en una mujer no embarazada?',
  ops:[
    'Porque los cambios anatómicos y fisiológicos del embarazo aumentan el riesgo de que progrese hacia una pielonefritis, con riesgo asociado de parto pretérmino', 'La bacteriuria asintomática nunca amerita ningún tratamiento durante el embarazo, igual que en una mujer no embarazada', 'El embarazo reduce significativamente el riesgo de que una bacteriuria asintomática progrese hacia una infección más grave', 'No existe ninguna diferencia real en el manejo de la bacteriuria asintomática entre una mujer embarazada y una no embarazada'],
  ok:0,
  clave:'Porque los cambios anatómicos y fisiológicos del embarazo aumentan el riesgo de que progrese hacia una pielonefritis, con riesgo asociado de parto pretérmino.',
  exp:'La bacteriuria asintomática se trata activamente durante la gestación porque los cambios anatómicos y fisiológicos del embarazo aumentan el riesgo de que una infección urinaria asintomática progrese hacia una pielonefritis, con riesgo asociado de parto pretérmino.',
  no:{
    1:'Es precisamente lo contrario: la bacteriuria asintomática SÍ se trata activamente durante el embarazo, a diferencia de fuera de él.',
    2:'Es precisamente lo contrario: el embarazo AUMENTA el riesgo de progresión de una bacteriuria asintomática hacia pielonefritis.',
    3:'Sí existe una diferencia real: el umbral de intervención cambia específicamente durante el embarazo por el riesgo asociado.'
  },
  trampa:'Asumir que el manejo de la bacteriuria asintomática es idéntico dentro y fuera del embarazo, sin reconocer el cambio en el umbral de intervención.',
  obj:'Explicar por qué la bacteriuria asintomática se trata activamente durante el embarazo.',
  ref:'Williams, Obstetricia, cap. 64.',
  tags:['infección urinaria en el embarazo','tratamiento activo de bacteriuria asintomática']
},
{
  id:'U11-OB1-Q47', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Infecciones en el embarazo', sub:'Por qué el tamizaje de sífilis previene la sífilis congénita',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el tratamiento oportuno de la sífilis durante el embarazo previene de forma efectiva la sífilis congénita en la mayoría de los casos?',
  ops:[
    'Porque el tratamiento con el esquema y el tiempo de anticipación adecuados antes del parto previene la transmisión al feto', 'El tratamiento de la sífilis durante el embarazo nunca tiene ninguna relación real con la prevención de la sífilis congénita', 'La sífilis gestacional nunca puede transmitirse al feto, sin importar si la madre recibe tratamiento o no lo recibe', 'El tamizaje sistemático de sífilis durante el embarazo no aporta ninguna ventaja real frente a no realizar ningún tamizaje'],
  ok:0,
  clave:'Porque el tratamiento con el esquema y el tiempo de anticipación adecuados antes del parto previene la transmisión al feto.',
  exp:'El tratamiento oportuno de la sífilis durante el embarazo, con el esquema y el tiempo de anticipación adecuados antes del parto, previene de forma efectiva la transmisión al feto en la gran mayoría de los casos.',
  no:{
    1:'El tratamiento oportuno sí tiene una relación directa y bien documentada con la prevención de la sífilis congénita.',
    2:'Es precisamente lo contrario: sin tratamiento, la sífilis gestacional SÍ puede transmitirse al feto con consecuencias graves.',
    3:'El tamizaje sistemático sí aporta una ventaja real, permitiendo detectar y tratar la sífilis antes de que se transmita al feto.'
  },
  trampa:'Subestimar la efectividad del tratamiento oportuno de la sífilis gestacional para prevenir la transmisión al feto.',
  obj:'Explicar por qué el tratamiento oportuno de la sífilis gestacional previene la sífilis congénita.',
  ref:'Williams, Obstetricia, cap. 64.',
  tags:['sífilis gestacional','prevención de sífilis congénita']
},
{
  id:'U11-OB1-Q48', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Infecciones en el embarazo', sub:'El momento de la infección determina el riesgo en toxoplasmosis',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una gestante se infecta por primera vez con Toxoplasma gondii durante el primer trimestre de su embarazo.',
  enunciado:'¿Qué característica particular tiene el riesgo de transmisión y la gravedad de las consecuencias en este momento específico del embarazo, comparado con una infección en el tercer trimestre?',
  ops:[
    'La transmisión es menos frecuente en el primer trimestre, pero cuando ocurre en esa etapa temprana, tiende a generar consecuencias más graves en el feto', 'La transmisión es igual de frecuente y las consecuencias son igual de graves, sin importar en qué trimestre ocurra la infección materna', 'La transmisión es más frecuente en el primer trimestre que en el tercer trimestre, con consecuencias igualmente más graves en ambos casos', 'El momento de la infección materna nunca tiene ninguna relación real con el riesgo de transmisión o la gravedad de las consecuencias fetales'],
  ok:0,
  clave:'La transmisión es menos frecuente en el primer trimestre, pero cuando ocurre en esa etapa temprana, tiende a generar consecuencias más graves en el feto.',
  exp:'El riesgo de transmisión al feto y la gravedad de las consecuencias varían según el trimestre: la transmisión es menos frecuente en el primer trimestre pero, cuando ocurre en esa etapa temprana, tiende a generar consecuencias más graves; en el tercer trimestre la transmisión es más frecuente pero las consecuencias tienden a ser menos graves.',
  no:{
    1:'El riesgo y la gravedad SÍ varían según el trimestre, no son iguales en cualquier momento del embarazo.',
    2:'Está invertido: la transmisión es MENOS frecuente en el primer trimestre, no más frecuente que en el tercer trimestre.',
    3:'El momento de la infección materna sí tiene una relación directa con el riesgo de transmisión y la gravedad de las consecuencias.'
  },
  trampa:'Asumir que el riesgo de transmisión y la gravedad de la toxoplasmosis congénita son uniformes sin importar el trimestre de infección materna.',
  obj:'Aplicar la comprensión de cómo el trimestre de infección materna determina el riesgo y la gravedad de la toxoplasmosis congénita.',
  ref:'Williams, Obstetricia, cap. 64.',
  tags:['toxoplasmosis congénita','riesgo según trimestre de infección']
},
{
  id:'U11-OB1-Q49', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Infecciones en el embarazo', sub:'Por qué la infección previa a toxoplasmosis generalmente protege',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una mujer con infección previa por Toxoplasma gondii antes del embarazo generalmente no representa el mismo riesgo de toxoplasmosis congénita que una infección adquirida durante la gestación?',
  ops:[
    'Porque la infección previa al embarazo generalmente confiere inmunidad protectora frente a una nueva transmisión al feto', 'La infección previa al embarazo nunca confiere ningún tipo de inmunidad protectora frente a la toxoplasmosis congénita', 'El riesgo de toxoplasmosis congénita es exactamente el mismo, sin importar si la infección materna es previa o adquirida durante el embarazo', 'Una infección por Toxoplasma gondii siempre debe adquirirse durante el embarazo para representar algún riesgo fetal real'],
  ok:0,
  clave:'Porque la infección previa al embarazo generalmente confiere inmunidad protectora frente a una nueva transmisión al feto.',
  exp:'La toxoplasmosis congénita ocurre cuando una mujer se infecta por primera vez durante el embarazo, ya que la infección previa al embarazo generalmente confiere inmunidad protectora que reduce el riesgo de transmisión al feto en un embarazo posterior.',
  no:{
    1:'Es precisamente lo contrario: la infección previa SÍ confiere inmunidad protectora frente a una nueva transmisión.',
    2:'El riesgo SÍ difiere significativamente según si la infección es previa (con inmunidad protectora) o adquirida durante la gestación.',
    3:'Es precisamente lo contrario: la toxoplasmosis congénita ocurre específicamente cuando la infección se adquiere POR PRIMERA VEZ durante el embarazo.'
  },
  trampa:'Asumir que cualquier antecedente de infección por Toxoplasma gondii representa el mismo riesgo, sin considerar la inmunidad protectora de la infección previa.',
  obj:'Explicar por qué la infección previa al embarazo por Toxoplasma gondii generalmente protege frente a la toxoplasmosis congénita.',
  ref:'Williams, Obstetricia, cap. 64.',
  tags:['toxoplasmosis congénita','inmunidad protectora previa']
},
{
  id:'U11-OB1-Q50', programa:'unirm', cuatri:11,
  esp:'Obstetricia I', tema:'Infecciones en el embarazo', sub:'El embarazo cambia el umbral de intervención clínica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué principio general ilustra el hecho de que una bacteriuria asintomática se trate activamente durante el embarazo, cuando en otro contexto podría solo observarse sin tratamiento?',
  ops:[
    'Que el embarazo cambia el umbral de intervención clínica frente a un mismo hallazgo, por el contexto fisiológico específico de la gestación', 'Que el umbral de intervención clínica ante un mismo hallazgo nunca cambia, sin importar si la mujer está embarazada o no', 'Que cualquier hallazgo clínico debe tratarse siempre de la misma forma, independientemente del contexto fisiológico de la paciente', 'Que el embarazo nunca modifica ninguna decisión clínica relacionada con el tratamiento de infecciones identificadas'],
  ok:0,
  clave:'Que el embarazo cambia el umbral de intervención clínica frente a un mismo hallazgo, por el contexto fisiológico específico de la gestación.',
  exp:'Este es un ejemplo claro de cómo el embarazo cambia el umbral de intervención clínica frente a un mismo hallazgo, retomando la lógica ya vista sobre interpretar cualquier hallazgo clínico dentro del contexto fisiológico específico del embarazo.',
  no:{
    1:'Es precisamente lo contrario: el embarazo SÍ cambia el umbral de intervención clínica frente a un mismo hallazgo.',
    2:'Es precisamente lo contrario: un mismo hallazgo puede tratarse de forma distinta según el contexto fisiológico de la paciente.',
    3:'El embarazo sí modifica decisiones clínicas relevantes, como se ilustra con el tratamiento activo de la bacteriuria asintomática.'
  },
  trampa:'Asumir que las decisiones clínicas frente a un mismo hallazgo son siempre idénticas, sin importar el contexto fisiológico particular como el embarazo.',
  obj:'Explicar el principio general de que el embarazo cambia el umbral de intervención clínica frente a un mismo hallazgo.',
  ref:'Williams, Obstetricia, cap. 64.',
  tags:['infección urinaria en el embarazo','cambio del umbral de intervención']
}

]);
