/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 11, TANDA DE GINECOLOGÍA I (1/2)
   Primer banco de esta materia (0 preguntas previas). Prefijo
   U11-GIN1-. Cubre los primeros 7 temas: anatomia y fisiologia
   del aparato reproductor femenino, ciclo menstrual, historia
   clinica ginecologica, trastornos menstruales, anticoncepcion,
   infecciones de transmision sexual, y enfermedad pelvica
   inflamatoria (Q01-Q28).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== GINECOLOGÍA I ===================== */
{
  id:'U11-GIN1-Q01', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Anatomía y fisiología del aparato reproductor femenino', sub:'Componentes de la anatomía pélvica femenina',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué órganos componen la anatomía pélvica femenina descrita en este tema?',
  ops:[
    'Vulva, vagina, útero (cuerpo y cuello), trompas de Falopio, y ovarios', 'Únicamente el útero, sin ninguna otra estructura anatómica relevante en la pélvis femenina', 'Solo los ovarios, sin ninguna relación estructural con el resto del aparato reproductor', 'Exclusivamente la vagina, sin ninguna otra estructura anatómica reproductiva pélvica'],
  ok:0,
  clave:'Vulva, vagina, útero (cuerpo y cuello), trompas de Falopio, y ovarios.',
  exp:'La anatomía pélvica femenina incluye los órganos genitales externos (vulva), la vagina, el útero (cuerpo y cuello), las trompas de Falopio, y los ovarios, cada uno con una relación anatómica específica con los órganos vecinos.',
  no:{
    1:'El útero es solo uno de varios órganos que componen la anatomía pélvica femenina completa.',
    2:'Los ovarios son solo una de varias estructuras; también incluye útero, trompas, vagina y vulva.',
    3:'La vagina es solo una de varias estructuras que componen la anatomía pélvica femenina completa.'
  },
  trampa:'Reducir la anatomía pélvica femenina a un solo órgano aislado, sin reconocer el conjunto completo de estructuras.',
  obj:'Identificar los órganos que componen la anatomía pélvica femenina.',
  ref:'Speroff, Endocrinología Ginecológica Clínica, cap. 1.',
  tags:['anatomía pélvica femenina','órganos componentes']
},
{
  id:'U11-GIN1-Q02', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Anatomía y fisiología del aparato reproductor femenino', sub:'Componentes del eje hipotálamo-hipófisis-ovario',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo funciona el eje hipotálamo-hipófisis-ovario en la regulación de la función reproductiva femenina?',
  ops:[
    'El hipotálamo libera GnRH, que estimula a la hipófisis a liberar FSH y LH, las cuales actúan sobre el ovario para regular el desarrollo folicular, la ovulación y la producción hormonal', 'El ovario controla directamente al hipotálamo sin ninguna intervención de la hipófisis en este eje de regulación hormonal', 'La hipófisis libera GnRH directamente al ovario, sin ninguna participación del hipotálamo en este proceso', 'Este eje hormonal no tiene ninguna relación real con la regulación del desarrollo folicular ni de la ovulación'],
  ok:0,
  clave:'El hipotálamo libera GnRH, que estimula a la hipófisis a liberar FSH y LH, las cuales actúan sobre el ovario para regular el desarrollo folicular, la ovulación y la producción hormonal.',
  exp:'El hipotálamo libera GnRH, que estimula a la hipófisis para liberar FSH y LH, las cuales actúan sobre el ovario para regular el desarrollo folicular, la ovulación, y la producción de estrógenos y progesterona.',
  no:{
    1:'La hipófisis sí interviene en este eje, mediando entre el hipotálamo y el ovario a través de FSH y LH.',
    2:'Está invertido: el HIPOTÁLAMO libera GnRH, que actúa sobre la HIPÓFISIS, no al revés.',
    3:'Este eje sí tiene una relación directa y central con la regulación del desarrollo folicular y la ovulación.'
  },
  trampa:'Invertir el orden correcto de la señalización hormonal del eje (hipotálamo→hipófisis→ovario), o omitir alguno de sus niveles.',
  obj:'Explicar el funcionamiento del eje hipotálamo-hipófisis-ovario en la regulación reproductiva femenina.',
  ref:'Speroff, Endocrinología Ginecológica Clínica, cap. 1.',
  tags:['eje hipotálamo-hipófisis-ovario','señalización hormonal']
},
{
  id:'U11-GIN1-Q03', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Anatomía y fisiología del aparato reproductor femenino', sub:'La retroalimentación del eje hormonal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo funciona el sistema de retroalimentación del eje hipotálamo-hipófisis-ovario?',
  ops:[
    'Los niveles de hormonas ováricas (estrógenos, progesterona) influyen de vuelta sobre el hipotálamo y la hipófisis, ajustando la liberación de GnRH, FSH y LH según la fase del ciclo', 'Las hormonas ováricas nunca tienen ninguna influencia real sobre la liberación de GnRH, FSH o LH en este sistema', 'La retroalimentación de este eje ocurre exclusivamente en una sola dirección, del hipotálamo hacia el ovario, sin ningún retorno', 'El sistema de retroalimentación de este eje es idéntico y constante durante todas las fases del ciclo menstrual'],
  ok:0,
  clave:'Los niveles de hormonas ováricas (estrógenos, progesterona) influyen de vuelta sobre el hipotálamo y la hipófisis, ajustando la liberación de GnRH, FSH y LH según la fase del ciclo.',
  exp:'Este eje funciona mediante un sistema de retroalimentación: los niveles de hormonas ováricas influyen de vuelta sobre el hipotálamo y la hipófisis, ajustando la liberación de GnRH, FSH y LH según la fase del ciclo.',
  no:{
    1:'Las hormonas ováricas sí influyen de vuelta sobre el hipotálamo y la hipófisis en este sistema de retroalimentación.',
    2:'Es precisamente lo contrario: la retroalimentación ocurre en AMBAS direcciones, no solo del hipotálamo hacia el ovario.',
    3:'El sistema de retroalimentación varía según la fase del ciclo, no es idéntico y constante en todo momento.'
  },
  trampa:'Asumir que la señalización hormonal de este eje ocurre en una sola dirección, sin retroalimentación de vuelta desde el ovario.',
  obj:'Explicar el sistema de retroalimentación del eje hipotálamo-hipófisis-ovario.',
  ref:'Speroff, Endocrinología Ginecológica Clínica, cap. 1.',
  tags:['fisiología reproductiva femenina','sistema de retroalimentación hormonal']
},
{
  id:'U11-GIN1-Q04', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Ciclo menstrual normal', sub:'Qué caracteriza a la fase folicular',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué caracteriza a la fase folicular del ciclo menstrual?',
  ops:[
    'El crecimiento de un grupo de folículos ováricos bajo la influencia de la FSH, con el estrógeno del folículo dominante estimulando el engrosamiento del endometrio', 'La producción de progesterona por el cuerpo lúteo, siendo esta la hormona predominante de esta fase específica del ciclo', 'La fase folicular ocurre siempre después de la ovulación, hasta el inicio del siguiente sangrado menstrual', 'La fase folicular es la porción del ciclo menstrual con duración más constante entre distintas mujeres'],
  ok:0,
  clave:'El crecimiento de un grupo de folículos ováricos bajo la influencia de la FSH, con el estrógeno del folículo dominante estimulando el engrosamiento del endometrio.',
  exp:'La fase folicular es la primera mitad del ciclo, desde el sangrado menstrual hasta la ovulación, caracterizada por el crecimiento folicular bajo influencia de la FSH, mientras el estrógeno del folículo dominante estimula el engrosamiento del endometrio.',
  no:{
    1:'La progesterona del cuerpo lúteo corresponde a la fase LÚTEA, no a la fase folicular descrita en este tema.',
    2:'Es precisamente lo contrario: la fase folicular ocurre ANTES de la ovulación, no después de ella.',
    3:'Es precisamente lo contrario: la fase folicular es la porción MÁS VARIABLE, no la más constante, del ciclo menstrual.'
  },
  trampa:'Confundir la fase folicular con la fase lútea, o invertir sus características hormonales y de duración.',
  obj:'Identificar las características de la fase folicular del ciclo menstrual.',
  ref:'Speroff, Endocrinología Ginecológica Clínica, cap. 3.',
  tags:['fase folicular','características']
},
{
  id:'U11-GIN1-Q05', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Ciclo menstrual normal', sub:'Qué desencadena la ovulación',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué evento hormonal desencadena la ovulación?',
  ops:[
    'Un pico brusco de LH', 'Un pico brusco de FSH, sin ninguna relación real con la liberación de LH en este proceso', 'Un descenso sostenido de los niveles de estrógeno durante toda la fase folicular del ciclo', 'La ovulación no está desencadenada por ningún evento hormonal específico reconocido clínicamente'],
  ok:0,
  clave:'Un pico brusco de LH.',
  exp:'La ovulación es desencadenada por un pico brusco de LH (el llamado pico de LH), que ocurre generalmente alrededor de la mitad del ciclo, marcando la transición entre la fase folicular y la fase lútea.',
  no:{
    1:'El evento desencadenante es un pico de LH, no de FSH, aunque ambas hormonas participan en el eje reproductivo.',
    2:'La ovulación es desencadenada por un pico brusco de LH, no por un descenso sostenido de estrógeno.',
    3:'La ovulación sí está desencadenada por un evento hormonal específico y bien identificado: el pico de LH.'
  },
  trampa:'Confundir el pico de LH que desencadena la ovulación con otros eventos hormonales del ciclo menstrual.',
  obj:'Identificar el evento hormonal que desencadena la ovulación.',
  ref:'Speroff, Endocrinología Ginecológica Clínica, cap. 3.',
  tags:['ovulación','pico de LH']
},
{
  id:'U11-GIN1-Q06', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Ciclo menstrual normal', sub:'Por qué la fase lútea es más constante que la folicular',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la duración de la fase lútea es notablemente más constante entre mujeres que la duración de la fase folicular?',
  ops:[
    'Porque a diferencia de la variabilidad de la fase folicular, la fase lútea generalmente dura alrededor de 14 días de forma relativamente constante', 'La fase lútea es, en realidad, la porción más variable de todo el ciclo menstrual, mucho más que la fase folicular', 'Ambas fases del ciclo menstrual tienen exactamente la misma variabilidad de duración entre distintas mujeres', 'La constancia de la duración de la fase lútea nunca ha sido documentada de forma consistente en la literatura ginecológica'],
  ok:0,
  clave:'Porque a diferencia de la variabilidad de la fase folicular, la fase lútea generalmente dura alrededor de 14 días de forma relativamente constante.',
  exp:'A diferencia de la fase folicular, la duración de la fase lútea es notablemente más constante entre mujeres, generalmente alrededor de 14 días -esta constancia es una herramienta útil para estimar retrospectivamente el momento aproximado de la ovulación.',
  no:{
    1:'Es precisamente lo contrario: la fase FOLICULAR es la más variable, y la LÚTEA la más constante, no al revés.',
    2:'Ambas fases tienen variabilidad distinta: la fase folicular es más variable que la fase lútea.',
    3:'La constancia de la fase lútea sí ha sido documentada de forma consistente, siendo una herramienta clínica útil.'
  },
  trampa:'Invertir la variabilidad relativa de la fase folicular (más variable) y la fase lútea (más constante).',
  obj:'Explicar por qué la fase lútea tiene una duración más constante que la fase folicular.',
  ref:'Speroff, Endocrinología Ginecológica Clínica, cap. 3.',
  tags:['fase lútea','constancia de duración']
},
{
  id:'U11-GIN1-Q07', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Ciclo menstrual normal', sub:'Qué ocurre si no hay implantación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ocurre con el cuerpo lúteo y el endometrio si no ocurre implantación de un embarazo durante la fase lútea?',
  ops:[
    'El cuerpo lúteo deja de producir progesterona, el endometrio pierde su soporte hormonal, y ocurre el sangrado menstrual que marca el inicio de un nuevo ciclo', 'El cuerpo lúteo continúa produciendo progesterona de forma indefinida, sin importar si ocurre o no la implantación de un embarazo', 'El endometrio se mantiene engrosado de forma permanente, sin generar ningún sangrado menstrual posterior', 'La ausencia de implantación nunca tiene ninguna consecuencia real sobre la producción hormonal del cuerpo lúteo'],
  ok:0,
  clave:'El cuerpo lúteo deja de producir progesterona, el endometrio pierde su soporte hormonal, y ocurre el sangrado menstrual que marca el inicio de un nuevo ciclo.',
  exp:'Si no ocurre implantación de un embarazo, el cuerpo lúteo deja de producir progesterona, el endometrio pierde su soporte hormonal, y ocurre el sangrado menstrual que marca el inicio de un nuevo ciclo.',
  no:{
    1:'Es precisamente lo contrario: sin implantación, el cuerpo lúteo DEJA de producir progesterona, no continúa indefinidamente.',
    2:'Es precisamente lo contrario: sin soporte hormonal, el endometrio se desprende, generando el sangrado menstrual.',
    3:'La ausencia de implantación sí tiene una consecuencia directa: el cese de la producción hormonal del cuerpo lúteo.'
  },
  trampa:'Asumir que el cuerpo lúteo mantiene su función hormonal de forma indefinida, sin importar si ocurre implantación o no.',
  obj:'Explicar qué ocurre con el cuerpo lúteo y el endometrio en ausencia de implantación de un embarazo.',
  ref:'Speroff, Endocrinología Ginecológica Clínica, cap. 3.',
  tags:['fase lútea','ausencia de implantación']
},
{
  id:'U11-GIN1-Q08', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Historia clínica ginecológica', sub:'Componentes específicos de la anamnesis ginecológica',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué elementos específicos incluye la anamnesis ginecológica, además de los componentes generales de cualquier historia clínica?',
  ops:[
    'Antecedentes menstruales, antecedentes obstétricos, antecedentes de métodos anticonceptivos, actividad sexual, y antecedentes de tamizajes ginecológicos previos', 'Únicamente antecedentes quirúrgicos generales, sin ninguna consideración específica del contexto ginecológico', 'Solo antecedentes familiares de enfermedades crónicas, sin ninguna relación con el contexto reproductivo de la paciente', 'La anamnesis ginecológica no incluye ningún elemento específico distinto de una historia clínica general'],
  ok:0,
  clave:'Antecedentes menstruales, antecedentes obstétricos, antecedentes de métodos anticonceptivos, actividad sexual, y antecedentes de tamizajes ginecológicos previos.',
  exp:'La anamnesis ginecológica incluye elementos específicos: antecedentes menstruales, antecedentes obstétricos, antecedentes de métodos anticonceptivos, actividad sexual, y antecedentes de tamizajes ginecológicos previos.',
  no:{
    1:'Los antecedentes quirúrgicos generales son parte de la historia clínica general, no los elementos específicos ginecológicos.',
    2:'Los antecedentes familiares son parte general de la historia; la anamnesis ginecológica incluye elementos específicos adicionales.',
    3:'La anamnesis ginecológica sí incluye elementos específicos distintos de una historia clínica general.'
  },
  trampa:'Confundir los componentes generales de cualquier historia clínica con los elementos específicos propios de la anamnesis ginecológica.',
  obj:'Identificar los elementos específicos que incluye la anamnesis ginecológica.',
  ref:'Berek y Novak, Ginecología, cap. 8.',
  tags:['anamnesis ginecológica','componentes específicos']
},
{
  id:'U11-GIN1-Q09', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Historia clínica ginecológica', sub:'Componentes del examen pélvico',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué incluye el examen pélvico ginecológico?',
  ops:[
    'Inspección de genitales externos, exploración vaginal y del cuello uterino mediante espéculo, y examen bimanual', 'Únicamente la inspección visual externa, sin ninguna exploración vaginal ni examen bimanual adicional', 'Solo el examen bimanual, sin ninguna inspección de genitales externos ni exploración con espéculo', 'El examen pélvico ginecológico no incluye ningún componente específico reconocido clínicamente'],
  ok:0,
  clave:'Inspección de genitales externos, exploración vaginal y del cuello uterino mediante espéculo, y examen bimanual.',
  exp:'El examen pélvico incluye la inspección de los genitales externos, la exploración vaginal y del cuello uterino mediante espéculo (especuloscopia), y el examen bimanual para evaluar útero y anexos.',
  no:{
    1:'La inspección visual externa es solo un componente; el examen pélvico también incluye exploración con espéculo y bimanual.',
    2:'El examen bimanual es solo un componente; también incluye inspección de genitales externos y especuloscopia.',
    3:'El examen pélvico sí incluye componentes específicos bien reconocidos clínicamente.'
  },
  trampa:'Reducir el examen pélvico a un solo componente aislado, sin reconocer el conjunto completo de elementos que lo integran.',
  obj:'Identificar los componentes del examen pélvico ginecológico.',
  ref:'Berek y Novak, Ginecología, cap. 8.',
  tags:['examen pélvico','componentes']
},
{
  id:'U11-GIN1-Q10', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Historia clínica ginecológica', sub:'Importancia del consentimiento antes del examen pélvico',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un médico se prepara para realizar un examen pélvico a una paciente y, antes de proceder, le explica con claridad en qué consiste el procedimiento y obtiene su consentimiento explícito.',
  enunciado:'¿Qué principio ya visto en otros bloques de este pensum ilustra mejor esta conducta del médico?',
  ops:[
    'La comunicación estructurada y el consentimiento informado, especialmente relevantes en un contexto de examen físico particularmente sensible', 'Esta conducta no tiene ninguna relación real con ningún principio ya visto previamente en otros bloques de este pensum', 'El consentimiento explícito solo es necesario para procedimientos quirúrgicos, nunca para un examen físico como el pélvico', 'Explicar el procedimiento antes de realizarlo retrasa innecesariamente la atención, sin ningún beneficio clínico real'],
  ok:0,
  clave:'La comunicación estructurada y el consentimiento informado, especialmente relevantes en un contexto de examen físico particularmente sensible.',
  exp:'Retomando la misma lógica ya vista sobre comunicación estructurada y consentimiento informado en Relación Médico-Paciente, el examen pélvico exige una explicación clara previa y el consentimiento explícito de la paciente, dado el contexto particularmente sensible de este examen.',
  no:{
    1:'Esta conducta sí retoma directamente el principio de comunicación estructurada y consentimiento informado ya visto en otros bloques.',
    2:'El consentimiento explícito también es relevante para exámenes físicos sensibles, no exclusivamente para procedimientos quirúrgicos.',
    3:'Explicar el procedimiento antes de realizarlo sí aporta un beneficio clínico real: generar confianza y respetar la autonomía de la paciente.'
  },
  trampa:'Asumir que el consentimiento informado y la comunicación clara solo aplican a procedimientos quirúrgicos, no a un examen físico sensible como el pélvico.',
  obj:'Aplicar el principio de comunicación estructurada y consentimiento informado al contexto del examen pélvico.',
  ref:'Berek y Novak, Ginecología, cap. 8.',
  tags:['especuloscopia','consentimiento antes del examen pélvico']
},
{
  id:'U11-GIN1-Q11', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Trastornos menstruales', sub:'Diferencia entre amenorrea primaria y secundaria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre amenorrea primaria y amenorrea secundaria?',
  ops:[
    'La primaria es cuando la menstruación nunca se ha presentado a una edad en que ya debería haber ocurrido; la secundaria es cuando la menstruación, previamente regular, cesa durante un periodo prolongado', 'Ambos tipos de amenorrea son exactamente idénticos, sin ninguna diferencia real que amerite distinguirlos clínicamente', 'La amenorrea primaria siempre sugiere con mayor frecuencia una disfunción del eje hipotálamo-hipófisis-ovario', 'La amenorrea secundaria siempre sugiere con mayor frecuencia una alteración estructural o del desarrollo'],
  ok:0,
  clave:'La primaria es cuando la menstruación nunca se ha presentado a una edad en que ya debería haber ocurrido; la secundaria es cuando la menstruación, previamente regular, cesa durante un periodo prolongado.',
  exp:'La amenorrea primaria es cuando la menstruación nunca se ha presentado a una edad esperada; la secundaria es cuando la menstruación, previamente presente y regular, cesa durante un periodo prolongado -esta distinción orienta el diagnóstico diferencial.',
  no:{
    1:'Son condiciones claramente distintas, con diagnósticos diferenciales orientados de forma distinta según el tipo.',
    2:'Está invertido: la amenorrea SECUNDARIA sugiere más una disfunción del eje, no la primaria.',
    3:'Está invertido: la amenorrea PRIMARIA sugiere más una alteración estructural o del desarrollo, no la secundaria.'
  },
  trampa:'Invertir las características y orientaciones diagnósticas de la amenorrea primaria y secundaria.',
  obj:'Distinguir la amenorrea primaria de la secundaria y su orientación diagnóstica.',
  ref:'Berek y Novak, Ginecología, cap. 15.',
  tags:['amenorrea','diferencia primaria-secundaria']
},
{
  id:'U11-GIN1-Q12', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Trastornos menstruales', sub:'Primer paso ante una amenorrea secundaria',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer en edad reproductiva, con ciclos menstruales previamente regulares, consulta porque no ha menstruado en los últimos tres meses.',
  enunciado:'¿Cuál debe ser el primer paso de la evaluación de esta paciente, según lo visto en este tema?',
  ops:[
    'Descartar un embarazo, antes de considerar otras causas del trastorno menstrual', 'Iniciar de inmediato un estudio hormonal completo del eje hipotálamo-hipófisis-ovario, sin considerar primero el embarazo', 'Asumir directamente una causa estructural sin descartar primero el embarazo como posibilidad más frecuente', 'No es necesario ningún paso específico prioritario; cualquier orden de evaluación es igualmente apropiado en este caso'],
  ok:0,
  clave:'Descartar un embarazo, antes de considerar otras causas del trastorno menstrual.',
  exp:'Descartar un embarazo como primera consideración ante una amenorrea secundaria en una mujer en edad reproductiva es un principio clínico básico: un embarazo no sospechado puede confundirse con otros trastornos menstruales si no se descarta activamente desde el inicio.',
  no:{
    1:'Iniciar un estudio hormonal completo sin descartar primero el embarazo omite el paso prioritario más básico y frecuente.',
    2:'Asumir una causa estructural sin descartar el embarazo primero contradice el principio clínico básico de este tema.',
    3:'Sí existe un paso prioritario específico: descartar el embarazo antes de considerar otras causas del trastorno.'
  },
  trampa:'Iniciar la evaluación de una amenorrea secundaria con estudios complejos, sin descartar primero la causa más frecuente y básica: el embarazo.',
  obj:'Aplicar el principio de descartar el embarazo como primer paso ante una amenorrea secundaria.',
  ref:'Berek y Novak, Ginecología, cap. 15.',
  tags:['amenorrea','descarte de embarazo como primer paso']
},
{
  id:'U11-GIN1-Q13', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Trastornos menstruales', sub:'Sangrado posterior a la menopausia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo debe considerarse cualquier sangrado vaginal que ocurre después de la menopausia?',
  ops:[
    'Siempre anormal, y que amerita evaluación', 'Siempre una variante normal del proceso de envejecimiento, sin ninguna necesidad de evaluación adicional', 'Relevante únicamente si se acompaña de dolor, sin ninguna importancia clínica si ocurre de forma indolora', 'Un hallazgo esperado y frecuente que nunca amerita ninguna consideración clínica adicional'],
  ok:0,
  clave:'Siempre anormal, y que amerita evaluación.',
  exp:'El sangrado posterior a la menopausia se considera siempre anormal y amerita evaluación -un principio que se retoma en el tema de climaterio y menopausia más adelante en este bloque.',
  no:{
    1:'Es precisamente lo contrario: el sangrado posmenopáusico NUNCA se considera una variante normal, siempre amerita evaluación.',
    2:'El sangrado posmenopáusico amerita evaluación independientemente de si se acompaña o no de dolor.',
    3:'Es precisamente lo contrario: este hallazgo siempre amerita evaluación, no debe ignorarse como algo esperado.'
  },
  trampa:'Normalizar cualquier sangrado que ocurre después de la menopausia, sin reconocer que siempre amerita evaluación clínica.',
  obj:'Explicar por qué cualquier sangrado vaginal posterior a la menopausia se considera siempre anormal.',
  ref:'Berek y Novak, Ginecología, cap. 15.',
  tags:['sangrado uterino anormal','sangrado posmenopáusico']
},
{
  id:'U11-GIN1-Q14', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Trastornos menstruales', sub:'Diferencia entre dismenorrea primaria y secundaria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre dismenorrea primaria y dismenorrea secundaria?',
  ops:[
    'La primaria es dolor sin una patología pélvica estructural identificable, relacionada con prostaglandinas; la secundaria es dolor asociado a una condición identificable subyacente', 'Ambas formas de dismenorrea son exactamente idénticas, sin ninguna diferencia real en su causa o mecanismo', 'La dismenorrea primaria siempre está asociada a una condición estructural identificable como la endometriosis', 'La dismenorrea secundaria nunca está asociada a ninguna condición estructural identificable subyacente'],
  ok:0,
  clave:'La primaria es dolor sin una patología pélvica estructural identificable, relacionada con prostaglandinas; la secundaria es dolor asociado a una condición identificable subyacente.',
  exp:'La dismenorrea primaria es dolor sin patología pélvica estructural identificable, relacionado con prostaglandinas; la secundaria es dolor asociado a una condición identificable subyacente, como la endometriosis.',
  no:{
    1:'Son condiciones claramente distintas, según exista o no una causa estructural identificable subyacente.',
    2:'Está invertido: la dismenorrea SECUNDARIA es la asociada a condiciones como la endometriosis, no la primaria.',
    3:'Es precisamente lo contrario: la dismenorrea SECUNDARIA sí está asociada a una condición estructural identificable.'
  },
  trampa:'Invertir las características de la dismenorrea primaria (sin causa estructural) y secundaria (con causa estructural, como endometriosis).',
  obj:'Distinguir la dismenorrea primaria de la secundaria según su causa.',
  ref:'Berek y Novak, Ginecología, cap. 15.',
  tags:['dismenorrea','diferencia primaria-secundaria']
},
{
  id:'U11-GIN1-Q15', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Anticoncepción', sub:'Mecanismo de acción de los métodos hormonales',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo actúan principalmente los métodos anticonceptivos hormonales para prevenir el embarazo?',
  ops:[
    'Suprimiendo la ovulación mediante la modificación del eje hipotálamo-hipófisis-ovario, además de espesar el moco cervical y modificar el endometrio', 'Los métodos anticonceptivos hormonales nunca tienen ninguna relación real con el eje hipotálamo-hipófisis-ovario ya visto', 'Actuando exclusivamente sobre las trompas de Falopio, sin ninguna relación con la ovulación ni el endometrio', 'Eliminando por completo la producción de estrógenos y progesterona del cuerpo de forma permanente'],
  ok:0,
  clave:'Suprimiendo la ovulación mediante la modificación del eje hipotálamo-hipófisis-ovario, además de espesar el moco cervical y modificar el endometrio.',
  exp:'Los métodos anticonceptivos hormonales actúan principalmente suprimiendo la ovulación mediante la modificación del eje hipotálamo-hipófisis-ovario, además de espesar el moco cervical y modificar el endometrio, dificultando la fecundación e implantación.',
  no:{
    1:'Estos métodos sí actúan directamente sobre el eje hipotálamo-hipófisis-ovario ya visto en este bloque.',
    2:'El mecanismo principal no involucra las trompas de Falopio, sino la supresión de la ovulación mediante el eje hormonal.',
    3:'Estos métodos no eliminan permanentemente la producción hormonal; su efecto es reversible al suspenderlos.'
  },
  trampa:'No reconocer la conexión entre el mecanismo de acción de los anticonceptivos hormonales y el eje hipotálamo-hipófisis-ovario ya visto.',
  obj:'Explicar el mecanismo de acción principal de los métodos anticonceptivos hormonales.',
  ref:'Berek y Novak, Ginecología, cap. 13.',
  tags:['métodos anticonceptivos hormonales','mecanismo de acción']
},
{
  id:'U11-GIN1-Q16', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Anticoncepción', sub:'Ventaja del dispositivo intrauterino frente a métodos diarios',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la principal ventaja práctica del dispositivo intrauterino frente a métodos que requieren uso diario o frecuente?',
  ops:[
    'No depende de la adherencia constante de la usuaria una vez colocado, reduciendo considerablemente el riesgo de embarazo no planificado por olvido o uso incorrecto', 'El dispositivo intrauterino nunca ha demostrado ninguna ventaja real frente a los métodos que requieren uso diario o frecuente', 'Los métodos que requieren uso diario siempre son más efectivos que el dispositivo intrauterino para prevenir el embarazo', 'El dispositivo intrauterino requiere exactamente la misma adherencia diaria que cualquier anticonceptivo oral disponible'],
  ok:0,
  clave:'No depende de la adherencia constante de la usuaria una vez colocado, reduciendo considerablemente el riesgo de embarazo no planificado por olvido o uso incorrecto.',
  exp:'La principal ventaja práctica del dispositivo intrauterino frente a métodos que requieren uso diario es que no depende de la adherencia constante de la usuaria una vez colocado, reduciendo considerablemente el riesgo de embarazo no planificado por olvido.',
  no:{
    1:'El dispositivo intrauterino sí ha demostrado esta ventaja real y documentada frente a métodos de uso diario.',
    2:'Es precisamente lo contrario: el dispositivo intrauterino tiene alta efectividad precisamente por no depender de la adherencia diaria.',
    3:'Es precisamente lo contrario: el dispositivo NO requiere adherencia diaria, a diferencia de los anticonceptivos orales.'
  },
  trampa:'Subestimar la ventaja del dispositivo intrauterino de no depender de la adherencia diaria de la usuaria.',
  obj:'Explicar la ventaja práctica del dispositivo intrauterino frente a métodos anticonceptivos de uso diario.',
  ref:'Berek y Novak, Ginecología, cap. 13.',
  tags:['dispositivo intrauterino','ventaja de acción prolongada']
},
{
  id:'U11-GIN1-Q17', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Anticoncepción', sub:'Aclaración sobre el mecanismo de la anticoncepción de emergencia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es importante aclarar que la anticoncepción de emergencia actúa antes de la implantación, y no interrumpe un embarazo ya establecido?',
  ops:[
    'Porque existe una confusión frecuente en la población general sobre este mecanismo, con relevancia clínica y ética que amerita ser comunicada con claridad', 'La anticoncepción de emergencia siempre interrumpe un embarazo ya establecido, siendo este su mecanismo de acción principal', 'Esta aclaración no tiene ninguna relevancia clínica ni ética real que amerite ser comunicada a las pacientes', 'No existe ninguna confusión frecuente en la población general sobre el mecanismo de la anticoncepción de emergencia'],
  ok:0,
  clave:'Porque existe una confusión frecuente en la población general sobre este mecanismo, con relevancia clínica y ética que amerita ser comunicada con claridad.',
  exp:'Es importante aclarar, dada la confusión frecuente en la población general, que la anticoncepción de emergencia actúa antes de la implantación, no interrumpe un embarazo ya establecido -una distinción con relevancia clínica y ética que amerita ser comunicada con claridad.',
  no:{
    1:'Es precisamente lo contrario: la anticoncepción de emergencia actúa ANTES de la implantación, no interrumpe un embarazo establecido.',
    2:'Esta aclaración sí tiene relevancia clínica y ética real, amerita ser comunicada con claridad a cualquier mujer que consulte.',
    3:'Sí existe una confusión frecuente en la población general sobre este mecanismo, que amerita aclaración clínica.'
  },
  trampa:'Confundir el mecanismo de acción de la anticoncepción de emergencia (previene la implantación) con la interrupción de un embarazo ya establecido.',
  obj:'Explicar por qué es importante aclarar el mecanismo correcto de la anticoncepción de emergencia.',
  ref:'Berek y Novak, Ginecología, cap. 13.',
  tags:['anticoncepción de emergencia','aclaración del mecanismo']
},
{
  id:'U11-GIN1-Q18', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Anticoncepción', sub:'Individualización de la elección anticonceptiva',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la elección del método anticonceptivo debe individualizarse según cada mujer, en vez de recomendar un único método universal?',
  ops:[
    'Porque depende de factores individuales como preferencias, contraindicaciones específicas, y el acceso real disponible en el contexto de cada mujer', 'Un único método anticonceptivo siempre es igualmente apropiado para cualquier mujer, sin importar sus condiciones individuales', 'La individualización de la elección anticonceptiva nunca aporta ninguna ventaja clínica real comprobada', 'Las contraindicaciones específicas de ciertos métodos nunca tienen ninguna relación real con la elección apropiada'],
  ok:0,
  clave:'Porque depende de factores individuales como preferencias, contraindicaciones específicas, y el acceso real disponible en el contexto de cada mujer.',
  exp:'La elección entre las distintas presentaciones anticonceptivas depende de factores individuales como la preferencia de la mujer, contraindicaciones específicas, y el acceso real disponible -una aplicación del principio de individualización que atraviesa toda la atención clínica de calidad.',
  no:{
    1:'Es precisamente lo contrario: NO existe un método único universalmente apropiado para cualquier mujer sin considerar sus condiciones.',
    2:'La individualización sí aporta una ventaja clínica real, ajustando la recomendación a las condiciones específicas de cada mujer.',
    3:'Las contraindicaciones específicas sí tienen una relación directa con la elección apropiada del método anticonceptivo.'
  },
  trampa:'Asumir que existe un único método anticonceptivo universalmente apropiado, sin considerar la individualización según cada mujer.',
  obj:'Explicar por qué la elección del método anticonceptivo debe individualizarse según cada mujer.',
  ref:'Berek y Novak, Ginecología, cap. 13.',
  tags:['métodos anticonceptivos hormonales','individualización de la elección']
},
{
  id:'U11-GIN1-Q19', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Infecciones de transmisión sexual en la mujer', sub:'Por qué el tamizaje activo es indispensable en las ITS',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el tamizaje activo, y no solo la evaluación reactiva ante síntomas, es parte central del manejo de las infecciones de transmisión sexual?',
  ops:[
    'Porque muchas infecciones de transmisión sexual se presentan de forma asintomática, y sin tamizaje pueden persistir sin diagnóstico con riesgo de complicaciones y transmisión continuada', 'Todas las infecciones de transmisión sexual siempre generan síntomas evidentes que motivan la consulta espontánea de la paciente', 'El tamizaje activo de infecciones de transmisión sexual nunca ha demostrado ninguna ventaja real frente a la evaluación reactiva', 'Las infecciones de transmisión sexual asintomáticas nunca representan ningún riesgo real de complicaciones o transmisión'],
  ok:0,
  clave:'Porque muchas infecciones de transmisión sexual se presentan de forma asintomática, y sin tamizaje pueden persistir sin diagnóstico con riesgo de complicaciones y transmisión continuada.',
  exp:'Muchas infecciones de transmisión sexual se detectan precisamente porque se buscan de forma activa en poblaciones de riesgo, no porque la paciente consulte espontáneamente -una infección asintomática, sin tamizaje, puede persistir con riesgo de complicaciones y transmisión continuada.',
  no:{
    1:'Es precisamente lo contrario: muchas infecciones de transmisión sexual son ASINTOMÁTICAS, no siempre generan síntomas evidentes.',
    2:'El tamizaje activo sí ha demostrado una ventaja real, detectando casos que de otra forma pasarían desapercibidos.',
    3:'Las infecciones asintomáticas sí representan un riesgo real de complicaciones (como la EPI) y de transmisión continuada.'
  },
  trampa:'Asumir que toda infección de transmisión sexual genera síntomas evidentes que motivan consulta espontánea, sin necesidad de tamizaje activo.',
  obj:'Explicar por qué el tamizaje activo es indispensable en el manejo de las infecciones de transmisión sexual.',
  ref:'Berek y Novak, Ginecología, cap. 17.',
  tags:['infección de transmisión sexual','tamizaje activo']
},
{
  id:'U11-GIN1-Q20', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Infecciones de transmisión sexual en la mujer', sub:'Riesgo de la clamidia no tratada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué riesgo conlleva una infección por clamidia no diagnosticada ni tratada oportunamente?',
  ops:[
    'Puede ascender desde el cuello uterino hacia el tracto genital superior, con riesgo de generar enfermedad pélvica inflamatoria', 'Una infección por clamidia no tratada nunca conlleva ningún riesgo real de complicaciones a nivel del tracto genital superior', 'La clamidia siempre se resuelve espontáneamente sin ningún tratamiento, sin ningún riesgo real de progresión', 'El riesgo de una clamidia no tratada se limita exclusivamente a síntomas locales leves, sin ninguna progresión posible'],
  ok:0,
  clave:'Puede ascender desde el cuello uterino hacia el tracto genital superior, con riesgo de generar enfermedad pélvica inflamatoria.',
  exp:'Sin tratamiento, la clamidia no diagnosticada puede ascender desde el cuello uterino hacia el tracto genital superior, con riesgo de generar enfermedad pélvica inflamatoria, tema que se desarrolla en el siguiente tema de este bloque.',
  no:{
    1:'La clamidia no tratada sí conlleva un riesgo real y documentado de ascenso hacia el tracto genital superior.',
    2:'Es precisamente lo contrario: la clamidia no tratada puede progresar y generar complicaciones significativas.',
    3:'El riesgo va más allá de síntomas locales leves; puede progresar hacia enfermedad pélvica inflamatoria.'
  },
  trampa:'Subestimar el riesgo de progresión de una clamidia no tratada hacia el tracto genital superior y sus complicaciones asociadas.',
  obj:'Explicar el riesgo de progresión de una infección por clamidia no diagnosticada ni tratada.',
  ref:'Berek y Novak, Ginecología, cap. 17.',
  tags:['clamidia','riesgo de progresión sin tratamiento']
},
{
  id:'U11-GIN1-Q21', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Infecciones de transmisión sexual en la mujer', sub:'Necesidad de tratar a la pareja sexual',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer es diagnosticada y tratada exitosamente por gonorrea, pero su pareja sexual, asintomática, no recibe ningún tratamiento.',
  enunciado:'¿Qué riesgo conlleva esta situación, según lo visto en este tema?',
  ops:[
    'El riesgo de una reinfección inmediata de la mujer por su propia pareja no tratada, comprometiendo la efectividad del tratamiento individual', 'Esta situación no conlleva ningún riesgo real, ya que el tratamiento exitoso de la mujer es suficiente por sí solo', 'La pareja sexual asintomática nunca puede transmitir la infección de vuelta a la mujer ya tratada exitosamente', 'El tratamiento de la pareja sexual solo es necesario si esta presenta síntomas evidentes de la infección'],
  ok:0,
  clave:'El riesgo de una reinfección inmediata de la mujer por su propia pareja no tratada, comprometiendo la efectividad del tratamiento individual.',
  exp:'Sin el manejo conjunto de la pareja sexual, la paciente tratada corre el riesgo de una reinfección inmediata por su propia pareja no tratada, un ciclo que compromete la efectividad del tratamiento individual aislado.',
  no:{
    1:'Esta situación sí conlleva un riesgo real: la reinfección inmediata de la mujer por su pareja no tratada.',
    2:'Una pareja asintomática sí puede portar y transmitir la infección de vuelta, comprometiendo el tratamiento ya realizado.',
    3:'El tratamiento de la pareja es necesario sin importar si presenta síntomas, precisamente por el riesgo de infección asintomática.'
  },
  trampa:'Asumir que el tratamiento exitoso de una de las partes es suficiente, sin considerar el riesgo de reinfección por una pareja no tratada.',
  obj:'Aplicar la importancia de tratar a la pareja sexual, incluso asintomática, ante una infección de transmisión sexual diagnosticada.',
  ref:'Berek y Novak, Ginecología, cap. 17.',
  tags:['gonorrea','tratamiento de la pareja sexual']
},
{
  id:'U11-GIN1-Q22', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Enfermedad pélvica inflamatoria', sub:'Origen más frecuente de la EPI',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el origen más frecuente de la enfermedad pélvica inflamatoria?',
  ops:[
    'El ascenso de una infección de transmisión sexual no tratada, como la clamidia o la gonorrea, desde el cuello uterino hacia las estructuras del tracto genital superior', 'La enfermedad pélvica inflamatoria nunca tiene ninguna relación real con infecciones de transmisión sexual previamente adquiridas', 'Un mioma uterino asintomático que nunca genera ningún síntoma es la causa más frecuente de esta condición', 'La enfermedad pélvica inflamatoria siempre ocurre de forma espontánea, sin ninguna relación con una infección previa'],
  ok:0,
  clave:'El ascenso de una infección de transmisión sexual no tratada, como la clamidia o la gonorrea, desde el cuello uterino hacia las estructuras del tracto genital superior.',
  exp:'La enfermedad pélvica inflamatoria se origina con mayor frecuencia por el ascenso de una infección de transmisión sexual no tratada -como la clamidia o la gonorrea- desde el cuello uterino hacia el tracto genital superior.',
  no:{
    1:'La EPI sí tiene una relación directa y frecuente con infecciones de transmisión sexual no tratadas previamente.',
    2:'Un mioma asintomático no es la causa más frecuente de EPI; el origen más frecuente es infeccioso, no estructural.',
    3:'La EPI generalmente tiene un origen infeccioso identificable, no ocurre de forma espontánea sin relación con una infección.'
  },
  trampa:'Asumir que la enfermedad pélvica inflamatoria ocurre sin relación con infecciones de transmisión sexual previas no tratadas.',
  obj:'Identificar el origen más frecuente de la enfermedad pélvica inflamatoria.',
  ref:'Berek y Novak, Ginecología, cap. 17.',
  tags:['enfermedad pélvica inflamatoria','origen infeccioso más frecuente']
},
{
  id:'U11-GIN1-Q23', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Enfermedad pélvica inflamatoria', sub:'Qué es el absceso tuboovárico',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es el absceso tuboovárico?',
  ops:[
    'Una colección de material purulento que involucra la trompa de Falopio y el ovario, una complicación más avanzada de la enfermedad pélvica inflamatoria no tratada', 'Un tumor benigno del músculo liso del útero, sin ninguna relación real con procesos infecciosos pélvicos', 'Una condición exclusivamente asociada al climaterio, sin ninguna relación con procesos infecciosos previos', 'Un hallazgo siempre esperado y sin ninguna relevancia clínica en el curso de una enfermedad pélvica inflamatoria'],
  ok:0,
  clave:'Una colección de material purulento que involucra la trompa de Falopio y el ovario, una complicación más avanzada de la enfermedad pélvica inflamatoria no tratada.',
  exp:'El absceso tuboovárico es una colección de material purulento que involucra la trompa de Falopio y el ovario, una complicación más avanzada y grave de la enfermedad pélvica inflamatoria no tratada oportunamente.',
  no:{
    1:'Esta descripción corresponde al mioma uterino, un tumor benigno distinto, no al absceso tuboovárico.',
    2:'El absceso tuboovárico no está asociado al climaterio; es una complicación infecciosa de la EPI.',
    3:'El absceso tuboovárico sí es un hallazgo clínicamente relevante y grave, no un hallazgo esperado sin importancia.'
  },
  trampa:'Confundir el absceso tuboovárico con otras condiciones ginecológicas benignas, o subestimar su relevancia clínica.',
  obj:'Definir qué es el absceso tuboovárico y su relación con la enfermedad pélvica inflamatoria.',
  ref:'Berek y Novak, Ginecología, cap. 17.',
  tags:['absceso tuboovárico','complicación de la EPI']
},
{
  id:'U11-GIN1-Q24', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Enfermedad pélvica inflamatoria', sub:'Secuelas permanentes sobre la fertilidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué secuelas puede dejar la enfermedad pélvica inflamatoria sobre la fertilidad futura de la mujer afectada?',
  ops:[
    'Infertilidad por daño tubárico, mayor riesgo de embarazo ectópico en embarazos futuros, y dolor pélvico crónico', 'La enfermedad pélvica inflamatoria nunca deja ninguna secuela real sobre la fertilidad futura de la mujer afectada', 'Las secuelas de la EPI siempre se revierten por completo una vez tratado exitosamente el episodio agudo de infección', 'La única secuela posible de la enfermedad pélvica inflamatoria es un aumento en la fertilidad futura de la mujer'],
  ok:0,
  clave:'Infertilidad por daño tubárico, mayor riesgo de embarazo ectópico en embarazos futuros, y dolor pélvico crónico.',
  exp:'Las secuelas de la EPI incluyen el riesgo de infertilidad por daño tubárico, embarazo ectópico en embarazos futuros por el mismo daño tubárico, y dolor pélvico crónico.',
  no:{
    1:'La EPI sí puede dejar secuelas reales y documentadas sobre la fertilidad futura de la mujer afectada.',
    2:'Es precisamente lo contrario: las secuelas de la EPI con frecuencia son PERMANENTES, incluso tras tratar exitosamente el episodio agudo.',
    3:'Es precisamente lo contrario: la EPI se asocia con un mayor riesgo de INFERTILIDAD, no con un aumento de la fertilidad.'
  },
  trampa:'Asumir que un tratamiento exitoso del episodio agudo de EPI revierte por completo cualquier secuela sobre la fertilidad futura.',
  obj:'Identificar las secuelas permanentes que puede dejar la enfermedad pélvica inflamatoria sobre la fertilidad.',
  ref:'Berek y Novak, Ginecología, cap. 17.',
  tags:['secuelas de la EPI','impacto sobre fertilidad futura']
},
{
  id:'U11-GIN1-Q25', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Enfermedad pélvica inflamatoria', sub:'Por qué la EPI puede tener presentación variable',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la presentación clínica variable de la enfermedad pélvica inflamatoria puede dificultar su diagnóstico oportuno?',
  ops:[
    'Porque puede ir desde dolor pélvico leve hasta cuadros de dolor abdominal significativo con fiebre, lo que dificulta el diagnóstico en presentaciones más leves', 'La enfermedad pélvica inflamatoria siempre se presenta con exactamente el mismo patrón clínico grave, sin ninguna variabilidad', 'La variabilidad de presentación de la EPI nunca dificulta el diagnóstico oportuno de esta condición', 'Un cuadro leve de EPI nunca amerita ninguna sospecha clínica activa que oriente hacia esta condición'],
  ok:0,
  clave:'Porque puede ir desde dolor pélvico leve hasta cuadros de dolor abdominal significativo con fiebre, lo que dificulta el diagnóstico en presentaciones más leves.',
  exp:'La presentación clínica de la EPI es variable, desde dolor pélvico leve hasta cuadros de dolor abdominal significativo con fiebre y compromiso del estado general, lo que puede dificultar el diagnóstico oportuno en presentaciones más leves.',
  no:{
    1:'Es precisamente lo contrario: la EPI tiene una presentación VARIABLE, no un único patrón clínico grave constante.',
    2:'Esta variabilidad sí dificulta el diagnóstico oportuno, especialmente en las presentaciones más leves de la condición.',
    3:'Un cuadro leve de EPI sí amerita mantener una sospecha clínica activa, dada su presentación potencialmente sutil.'
  },
  trampa:'Asumir que la enfermedad pélvica inflamatoria siempre se presenta con un cuadro clínico grave y evidente, sin considerar presentaciones más leves.',
  obj:'Explicar por qué la presentación clínica variable de la EPI puede dificultar su diagnóstico oportuno.',
  ref:'Berek y Novak, Ginecología, cap. 17.',
  tags:['enfermedad pélvica inflamatoria','presentación clínica variable']
},
{
  id:'U11-GIN1-Q26', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Trastornos menstruales', sub:'Causas de sangrado uterino anormal según la edad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el sangrado uterino anormal amerita una consideración diagnóstica distinta según ocurra en edad reproductiva o después de la menopausia?',
  ops:[
    'Porque en edad reproductiva son más frecuentes causas estructurales o disfuncionales, mientras después de la menopausia cualquier sangrado amerita descartar activamente una patología maligna', 'El diagnóstico diferencial del sangrado uterino anormal es exactamente el mismo, sin importar la edad de la mujer', 'Después de la menopausia, el sangrado uterino anormal nunca amerita descartar ninguna patología maligna subyacente', 'En edad reproductiva, el sangrado uterino anormal siempre debe considerarse como una patología maligna hasta demostrar lo contrario'],
  ok:0,
  clave:'Porque en edad reproductiva son más frecuentes causas estructurales o disfuncionales, mientras después de la menopausia cualquier sangrado amerita descartar activamente una patología maligna.',
  exp:'Las causas del sangrado uterino anormal varían según la edad: en la edad reproductiva son más frecuentes causas estructurales o disfuncionales, mientras después de la menopausia cualquier sangrado amerita descartar activamente una patología maligna hasta demostrar lo contrario.',
  no:{
    1:'Es precisamente lo contrario: el diagnóstico diferencial SÍ varía significativamente según la edad de la mujer.',
    2:'Es precisamente lo contrario: después de la menopausia, cualquier sangrado SÍ amerita descartar una patología maligna.',
    3:'En edad reproductiva, la primera consideración no es la malignidad; son más frecuentes causas estructurales o disfuncionales.'
  },
  trampa:'Aplicar el mismo diagnóstico diferencial del sangrado uterino anormal sin considerar la edad de la mujer (reproductiva vs. posmenopáusica).',
  obj:'Explicar por qué el diagnóstico diferencial del sangrado uterino anormal varía según la edad de la mujer.',
  ref:'Berek y Novak, Ginecología, cap. 15.',
  tags:['sangrado uterino anormal','diferencia según edad']
},
{
  id:'U11-GIN1-Q27', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Historia clínica ginecológica', sub:'Por qué cada componente del examen tiene un propósito específico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué omitir un componente de la evaluación ginecológica (anamnesis, examen pélvico, especuloscopia) sin una razón clínica clara compromete la calidad diagnóstica?',
  ops:[
    'Porque cada componente tiene un propósito específico dentro de una evaluación integral, y su omisión deja un vacío de información que los otros componentes no cubren', 'Cualquier componente de la evaluación ginecológica puede omitirse sin ninguna consecuencia real sobre la calidad del diagnóstico', 'Todos los componentes de la evaluación ginecológica aportan exactamente la misma información, siendo redundantes entre sí', 'La calidad diagnóstica nunca depende de si se realizan todos los componentes de la evaluación ginecológica completa'],
  ok:0,
  clave:'Porque cada componente tiene un propósito específico dentro de una evaluación integral, y su omisión deja un vacío de información que los otros componentes no cubren.',
  exp:'Cada componente de la evaluación ginecológica (anamnesis, examen pélvico, especuloscopia) tiene un propósito específico dentro de una evaluación integral, y omitir alguno sin una razón clínica clara compromete la calidad diagnóstica del proceso completo.',
  no:{
    1:'Es precisamente lo contrario: omitir un componente sin razón clínica SÍ compromete la calidad del diagnóstico completo.',
    2:'Los componentes no son redundantes; cada uno aporta información específica y complementaria distinta.',
    3:'La calidad diagnóstica sí depende de realizar todos los componentes relevantes de la evaluación ginecológica completa.'
  },
  trampa:'Asumir que los componentes de la evaluación ginecológica son intercambiables o redundantes, sin reconocer su propósito específico distinto.',
  obj:'Explicar por qué omitir un componente de la evaluación ginecológica compromete la calidad diagnóstica.',
  ref:'Berek y Novak, Ginecología, cap. 8.',
  tags:['examen pélvico','propósito específico de cada componente']
},
{
  id:'U11-GIN1-Q28', programa:'unirm', cuatri:11,
  esp:'Ginecología I', tema:'Ciclo menstrual normal', sub:'Rol del estrógeno en la fase folicular',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué papel cumple el estrógeno producido por el folículo en desarrollo durante la fase folicular?',
  ops:[
    'Estimula el engrosamiento del revestimiento uterino (endometrio)', 'El estrógeno producido durante la fase folicular nunca tiene ninguna relación real con el endometrio uterino', 'El estrógeno de la fase folicular actúa exclusivamente sobre el cuerpo lúteo, sin ninguna relación con el endometrio', 'El estrógeno durante la fase folicular reduce de forma activa el grosor del endometrio uterino'],
  ok:0,
  clave:'Estimula el engrosamiento del revestimiento uterino (endometrio).',
  exp:'Mientras el folículo dominante crece durante la fase folicular, el estrógeno que produce estimula el engrosamiento del revestimiento uterino (endometrio), preparándolo para una posible implantación posterior.',
  no:{
    1:'El estrógeno de la fase folicular sí tiene una relación directa con el engrosamiento del endometrio uterino.',
    2:'El cuerpo lúteo se forma después de la ovulación; el estrógeno de la fase folicular actúa principalmente sobre el endometrio.',
    3:'Es precisamente lo contrario: el estrógeno de la fase folicular AUMENTA, no reduce, el grosor del endometrio uterino.'
  },
  trampa:'Confundir el efecto del estrógeno sobre el endometrio con otros efectos hormonales, o invertir su dirección sobre el grosor endometrial.',
  obj:'Explicar el papel del estrógeno de la fase folicular sobre el engrosamiento del endometrio.',
  ref:'Speroff, Endocrinología Ginecológica Clínica, cap. 3.',
  tags:['fase folicular','estrógeno y endometrio']
}

]);
