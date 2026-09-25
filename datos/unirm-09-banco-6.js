/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE FISIOPATOLOGIA (1/2)
   Amplia Fisiopatologia de 5 a 50 preguntas junto con
   unirm-09-banco-7.js. Esta parte cubre equilibrio acido-base,
   liquidos y electrolitos, fiebre/SIRS, insuficiencia cardiaca,
   hipertension arterial, fisiopatologia respiratoria y renal
   (temas 1-7).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== FISIOPATOLOGIA ===================== */
{
  id:'U9-FP-Q06', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología del equilibrio ácido-base', sub:'Compensación respiratoria vs. metabólica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre la velocidad de la compensación respiratoria y la compensación metabólica (renal) ante un trastorno ácido-base primario?',
  ops:[
    'La compensación respiratoria es casi inmediata (minutos-horas); la compensación renal es lenta, tarda días en desarrollarse plenamente',
    'Ambas compensaciones ocurren exactamente a la misma velocidad', 'La compensación renal siempre es más rápida que la respiratoria', 'Ninguna de las dos compensaciones tiene relación con el tiempo'],
  ok:0,
  clave:'La compensación respiratoria es casi inmediata; la compensación renal es lenta, tarda días.',
  exp:'Ante un trastorno primario, el sistema NO afectado directamente intenta compensar: la compensación respiratoria (ajustar el CO2 mediante hiper o hipoventilación) es casi inmediata; la compensación renal/metabólica (ajustar el bicarbonato) tarda días en desarrollarse plenamente. Esta diferencia de velocidad es clave para interpretar un gas arterial según cuánto tiempo ha pasado desde que empezó el trastorno.',
  no:{
    1:'Tienen velocidades claramente distintas: la respiratoria es rápida, la renal es lenta.',
    2:'Es al revés: la compensación RESPIRATORIA es la rápida, y la RENAL es la lenta, no al contrario.',
    3:'Ambas compensaciones sí tienen una relación directa con el tiempo, precisamente porque difieren en su velocidad de instauración.'
  },
  trampa:'Invertir cuál compensación (respiratoria o renal) es rápida y cuál es lenta.',
  obj:'Distinguir la velocidad de la compensación respiratoria de la renal en los trastornos ácido-base.',
  ref:'Porth, Fisiopatología, cap. 33.',
  tags:['compensación respiratoria','compensación metabólica','equilibrio ácido-base']
},
{
  id:'U9-FP-Q07', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología del equilibrio ácido-base', sub:'Anion gap normal',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con diarrea severa presenta acidosis metabólica con anion gap normal.',
  enunciado:'¿Qué mecanismo explica esta acidosis metabólica con anion gap normal?',
  ops:[
    'Pérdida directa de bicarbonato (por las heces), sin acumulación de un ácido nuevo no medido',
    'Acumulación de un ácido no medido, como en la cetoacidosis diabética', 'El anion gap normal indica que no existe ninguna acidosis metabólica real', 'La diarrea nunca causa alteraciones del equilibrio ácido-base'],
  ok:0,
  clave:'Un anion gap normal en acidosis metabólica sugiere pérdida directa de bicarbonato, como en diarrea severa.',
  exp:'Un anion gap normal en el contexto de una acidosis metabólica sugiere pérdida directa de bicarbonato (como en una diarrea severa, donde se pierde bicarbonato por las heces) sin acumulación de un ácido nuevo no medido -a diferencia de un anion gap elevado, que sugeriría acumulación de un ácido no medido, como en la cetoacidosis diabética.',
  no:{
    1:'Esa es la explicación de un anion gap ELEVADO, no de uno normal como en este caso.',
    2:'Un anion gap normal no descarta la acidosis metabólica; solo orienta hacia un mecanismo específico (pérdida de bicarbonato) en vez de acumulación de ácido.',
    3:'La diarrea severa sí puede causar acidosis metabólica, específicamente por pérdida directa de bicarbonato en las heces.'
  },
  trampa:'Confundir el mecanismo de anion gap normal (pérdida de bicarbonato) con el de anion gap elevado (acumulación de ácido no medido).',
  obj:'Interpretar una acidosis metabólica con anion gap normal en el contexto de diarrea severa.',
  ref:'Porth, Fisiopatología, cap. 33.',
  tags:['anion gap normal','diarrea','pérdida de bicarbonato']
},
{
  id:'U9-FP-Q08', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología del equilibrio ácido-base', sub:'pH normal con trastornos mixtos',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué sugiere un pH sanguíneo completamente normal en presencia de alteraciones marcadas tanto del bicarbonato como del CO2?',
  ops:[
    'Que probablemente coexisten dos trastornos ácido-base opuestos, no una compensación perfecta',
    'Que no existe ningún trastorno ácido-base en absoluto', 'Que la compensación siempre normaliza el pH por completo de forma perfecta', 'El pH normal descarta cualquier alteración de bicarbonato o CO2'],
  ok:0,
  clave:'Un pH normal con alteraciones marcadas de bicarbonato y CO2 sugiere trastornos mixtos opuestos, no compensación perfecta.',
  exp:'La compensación nunca sobrecorrige por completo el pH hasta la normalidad exacta; si el pH está completamente normal en presencia de alteraciones marcadas de bicarbonato y CO2, esto sugiere que hay dos trastornos ácido-base opuestos coexistiendo (por ejemplo, una acidosis metabólica y una alcalosis respiratoria simultáneas), no una compensación perfecta de un solo trastorno primario.',
  no:{
    1:'Si hay alteraciones marcadas de bicarbonato y CO2, sí existe algún trastorno ácido-base activo, solo que probablemente sean dos opuestos coexistiendo.',
    2:'La compensación fisiológica normal NO llega a normalizar completamente el pH; por eso un pH exactamente normal con alteraciones marcadas sugiere trastornos mixtos, no compensación simple.',
    3:'Un pH normal no descarta alteraciones de bicarbonato o CO2; de hecho, puede ser precisamente la pista de que hay dos trastornos opuestos coexistiendo.'
  },
  trampa:'Asumir que un pH normal siempre significa ausencia de trastorno ácido-base, sin considerar la posibilidad de trastornos mixtos opuestos que se cancelan mutuamente.',
  obj:'Interpretar un pH normal con alteraciones marcadas de bicarbonato y CO2 como sugerente de trastornos mixtos.',
  ref:'Porth, Fisiopatología, cap. 33.',
  tags:['trastornos mixtos','pH normal','compensación']
},
{
  id:'U9-FP-Q09', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de líquidos y electrolitos', sub:'Hiponatremia y volumen',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es un error tratar la hiponatremia simplemente "reponiendo sodio", sin evaluar primero el estado de volumen del paciente?',
  ops:[
    'Porque la hiponatremia casi nunca refleja déficit real de sodio total, sino exceso relativo de agua respecto al sodio; el tratamiento correcto depende del estado de volumen (deshidratado, normal, con exceso de líquido)',
    'La hiponatremia siempre refleja un déficit absoluto de sodio total, así que reponer sodio siempre es correcto',
    'El estado de volumen del paciente nunca influye en el manejo de la hiponatremia',
    'La hiponatremia no tiene ninguna relación con el balance de agua corporal'
  ],
  ok:0,
  clave:'La hiponatremia casi nunca es déficit real de sodio, sino exceso relativo de agua; el manejo depende del estado de volumen.',
  exp:'La hiponatremia casi nunca significa que el cuerpo tenga poco sodio total: la mayoría de las veces significa que el cuerpo tiene relativamente DEMASIADA AGUA respecto al sodio que tiene, diluyendo su concentración. Por eso, antes de tratar una hiponatremia, hay que preguntarse cómo está el volumen del paciente, no simplemente "reponer sodio" sin pensar en el agua -el manejo correcto (restringir agua, o en algunos casos sí reponer sodio) depende de esa evaluación.',
  no:{
    1:'Es precisamente lo contrario: la hiponatremia casi nunca refleja un déficit absoluto de sodio total; refleja más frecuentemente un exceso relativo de agua.',
    2:'El estado de volumen del paciente es central para decidir el manejo correcto de la hiponatremia, no un factor irrelevante.',
    3:'La hiponatremia tiene una relación directa y fundamental con el balance de agua corporal, siendo precisamente esa relación agua-sodio la clave para su interpretación correcta.'
  },
  trampa:'Asumir que la hiponatremia siempre refleja un déficit real de sodio total, llevando a un tratamiento incorrecto sin evaluar el volumen del paciente.',
  obj:'Explicar por qué el manejo de la hiponatremia depende de evaluar el estado de volumen del paciente.',
  ref:'Porth, Fisiopatología, cap. 33.',
  tags:['hiponatremia','estado de volumen','balance de agua']
},
{
  id:'U9-FP-Q10', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de líquidos y electrolitos', sub:'Hiperkalemia y arritmias',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la hiperkalemia puede producir arritmias cardíacas graves antes que cualquier otro síntoma visible?',
  ops:[
    'Porque el potasio es central para el potencial de membrana en reposo; un potasio muy elevado altera directamente la excitabilidad de las células cardíacas',
    'La hiperkalemia no tiene ninguna relación con la actividad eléctrica del corazón',
    'El potasio elevado siempre produce primero síntomas digestivos evidentes, nunca arritmias',
    'La hiperkalemia es siempre inofensiva y nunca representa una urgencia médica'
  ],
  ok:0,
  clave:'El potasio es central para el potencial de membrana en reposo; su elevación altera directamente la excitabilidad cardíaca.',
  exp:'La hiperkalemia es particularmente peligrosa porque el potasio es central para el potencial de membrana en reposo: un potasio muy elevado altera directamente la excitabilidad de las células cardíacas, pudiendo producir arritmias graves antes que cualquier otro síntoma visible -una de las pocas alteraciones electrolíticas que puede matar en minutos si no se reconoce a tiempo.',
  no:{
    1:'La hiperkalemia tiene una relación directa y central con la actividad eléctrica cardíaca, precisamente por su efecto sobre el potencial de membrana.',
    2:'La hiperkalemia puede presentarse sin síntomas digestivos previos evidentes, y su riesgo principal es precisamente la arritmia cardíaca, no un síntoma digestivo.',
    3:'La hiperkalemia sí representa una urgencia médica real, precisamente por su capacidad de producir arritmias graves rápidamente.'
  },
  trampa:'Subestimar la urgencia de la hiperkalemia, sin reconocer su mecanismo directo sobre el potencial de membrana cardíaco.',
  obj:'Explicar por qué la hiperkalemia puede causar arritmias cardíacas graves como primera manifestación.',
  ref:'Porth, Fisiopatología, cap. 33.',
  tags:['hiperkalemia','potencial de membrana','arritmias cardíacas']
},
{
  id:'U9-FP-Q11', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de líquidos y electrolitos', sub:'Tercer espacio',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con cirrosis avanzada presenta signos clínicos de deshidratación (mucosas secas, baja turgencia de piel) a pesar de tener una ascitis marcada con gran acumulación de líquido en el abdomen.',
  enunciado:'¿Qué concepto explica esta aparente contradicción?',
  ops:[
    'Tercer espacio: el líquido acumulado en la ascitis está "atrapado" fuera del compartimento vascular normal y no está disponible para la circulación, aunque el cuerpo en total no haya perdido agua',
    'Es imposible que un paciente tenga simultáneamente signos de deshidratación y ascitis marcada', 'La ascitis siempre indica que el paciente tiene exceso de volumen circulante efectivo', 'El concepto de tercer espacio no tiene ninguna aplicación clínica real'],
  ok:0,
  clave:'El tercer espacio explica que el líquido de la ascitis está atrapado fuera del compartimento vascular, no disponible para la circulación, pese a que el agua corporal total no se perdió.',
  exp:'El tercer espacio es un concepto útil para entender por qué un paciente puede estar clínicamente deshidratado (con signos de bajo volumen circulante efectivo) mientras acumula líquido en algún lugar del cuerpo (como ascitis): ese líquido "atrapado" fuera del compartimento vascular normal no está disponible para la circulación, aunque el cuerpo, en total, no haya perdido agua -exactamente la situación descrita en este caso de cirrosis.',
  no:{
    1:'Esta combinación sí es posible y clínicamente bien reconocida, precisamente explicada por el concepto de tercer espacio.',
    2:'Es al revés: la ascitis en este contexto refleja líquido atrapado FUERA de la circulación efectiva, no un exceso de volumen circulante disponible.',
    3:'El concepto de tercer espacio tiene una aplicación clínica directa y relevante, precisamente para explicar casos como este.'
  },
  trampa:'No reconocer que la ascitis representa líquido "secuestrado" fuera del compartimento vascular efectivo, en vez de asumir automáticamente exceso de volumen circulante disponible.',
  obj:'Aplicar el concepto de tercer espacio para explicar la coexistencia de deshidratación clínica y ascitis marcada.',
  ref:'Porth, Fisiopatología, cap. 33.',
  tags:['tercer espacio','ascitis','volumen circulante efectivo']
},
{
  id:'U9-FP-Q12', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de líquidos y electrolitos', sub:'Manifestaciones de deshidratación',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué manifestaciones clínicas reflejan directamente la reducción del volumen circulante en un paciente deshidratado?',
  ops:['Sequedad de mucosas, disminución de la turgencia de la piel, cambios en la presión arterial', 'Exclusivamente fiebre alta, sin ningún otro signo', 'Aumento generalizado del peso corporal', 'La deshidratación nunca produce ningún signo clínico detectable'],
  ok:0,
  clave:'La deshidratación se manifiesta con sequedad de mucosas, disminución de turgencia de piel y cambios en la presión arterial, reflejando la reducción del volumen circulante.',
  exp:'La deshidratación es la pérdida de agua corporal, y sus manifestaciones -sequedad de mucosas, disminución de la turgencia de la piel, cambios en la presión arterial- reflejan directamente la reducción del volumen circulante.',
  no:{
    1:'La fiebre no es una manifestación directa y específica de la deshidratación; los signos característicos son los de reducción de volumen circulante.',
    2:'La deshidratación típicamente se asocia a PÉRDIDA de peso corporal (por pérdida de agua), no a un aumento.',
    3:'La deshidratación sí produce signos clínicos detectables y bien reconocidos, como los mencionados en la respuesta correcta.'
  },
  trampa:'Confundir las manifestaciones específicas de la deshidratación con signos inespecíficos de otras condiciones, como la fiebre.',
  obj:'Reconocer las manifestaciones clínicas características de la deshidratación.',
  ref:'Porth, Fisiopatología, cap. 33.',
  tags:['deshidratación','turgencia de la piel','volumen circulante']
},
{
  id:'U9-FP-Q13', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la fiebre y la respuesta inflamatoria sistémica', sub:'Mecanismo del pirógeno',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo produce fiebre un pirógeno, ya sea de origen externo o interno?',
  ops:[
    'Actúa sobre el hipotálamo, elevando el punto de ajuste de temperatura del cuerpo',
    'Actúa directamente sobre el corazón, sin ninguna relación con la temperatura corporal', 'Los pirógenos nunca tienen relación con el mecanismo de la fiebre', 'Actúan exclusivamente sobre los músculos esqueléticos, generando calor por contracción'],
  ok:0,
  clave:'Los pirógenos actúan sobre el hipotálamo, elevando el punto de ajuste de temperatura.',
  exp:'Un pirógeno es cualquier sustancia capaz de producir fiebre, ya sea externa (como el lipopolisacárido de bacterias gramnegativas) o interna (citocinas inflamatorias que el propio cuerpo libera). Estas sustancias actúan sobre el hipotálamo, elevando el punto de ajuste de temperatura, el mecanismo central detrás de la fiebre.',
  no:{
    1:'Los pirógenos no actúan directamente sobre el corazón; su acción central es sobre el hipotálamo, regulador de la temperatura corporal.',
    2:'Los pirógenos son, por definición, sustancias que sí tienen una relación directa y causal con el mecanismo de la fiebre.',
    3:'Aunque el escalofrío (contracción muscular) puede generar calor como parte de la respuesta febril, el mecanismo central del pirógeno es actuar sobre el hipotálamo, no directamente sobre el músculo.'
  },
  trampa:'Atribuir el mecanismo de la fiebre a un órgano incorrecto (corazón o músculo) en vez del hipotálamo, el verdadero centro regulador afectado por los pirógenos.',
  obj:'Explicar el mecanismo hipotalámico por el cual un pirógeno produce fiebre.',
  ref:'Porth, Fisiopatología, cap. 11.',
  tags:['pirógeno','hipotálamo','punto de ajuste de temperatura']
},
{
  id:'U9-FP-Q14', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la fiebre y la respuesta inflamatoria sistémica', sub:'De SIRS a sepsis a shock séptico',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la progresión de gravedad desde el SIRS hasta el shock séptico?',
  ops:[
    'SIRS por infección = sepsis; sepsis que progresa hasta comprometer la función de otros órganos por hipoperfusión generalizada = shock séptico',
    'El shock séptico siempre ocurre primero, y después progresa hacia sepsis y SIRS', 'SIRS, sepsis y shock séptico son exactamente el mismo concepto, sin ninguna diferencia', 'El SIRS nunca puede progresar hacia sepsis ni shock séptico'],
  ok:0,
  clave:'SIRS causado por infección = sepsis; sepsis con compromiso multiorgánico por hipoperfusión = shock séptico.',
  exp:'Cuando el SIRS se debe específicamente a una infección, se habla de sepsis; y si progresa hasta comprometer la función de otros órganos por la caída de la presión arterial y la mala perfusión tisular generalizada, se llega al shock séptico -una progresión de gravedad creciente por pérdida de contención de la inflamación.',
  no:{
    1:'La secuencia está invertida; el orden correcto es SIRS → sepsis (si hay infección) → shock séptico (si hay compromiso multiorgánico), no al revés.',
    2:'Son conceptos relacionados pero con distinto grado de gravedad y criterios específicos, no términos sinónimos e intercambiables.',
    3:'El SIRS sí puede progresar hacia sepsis (si es causado por infección) y potencialmente hacia shock séptico (si hay compromiso multiorgánico).'
  },
  trampa:'Invertir el orden de progresión de gravedad entre SIRS, sepsis y shock séptico.',
  obj:'Ordenar correctamente la progresión de gravedad desde SIRS hasta shock séptico.',
  ref:'Porth, Fisiopatología, cap. 11.',
  tags:['SIRS','sepsis','shock séptico','progresión de gravedad']
},
{
  id:'U9-FP-Q15', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la fiebre y la respuesta inflamatoria sistémica', sub:'Manifestaciones del SIRS',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuáles son las manifestaciones típicas del SIRS (síndrome de respuesta inflamatoria sistémica)?',
  ops:['Fiebre (o hipotermia paradójica), taquicardia, taquipnea y alteraciones en el conteo de glóbulos blancos', 'Exclusivamente dolor abdominal localizado, sin ningún otro signo', 'Bradicardia marcada y disminución de la frecuencia respiratoria', 'El SIRS nunca produce ninguna manifestación clínica detectable'],
  ok:0,
  clave:'El SIRS se manifiesta con fiebre/hipotermia, taquicardia, taquipnea y alteraciones del conteo de glóbulos blancos.',
  exp:'El SIRS es lo que ocurre cuando la liberación de citocinas inflamatorias, normalmente contenida en el sitio local de una infección o lesión, se derrama hacia la circulación general y afecta a todo el cuerpo a la vez: fiebre (o hipotermia paradójica en casos severos), taquicardia, taquipnea y alteraciones en el conteo de glóbulos blancos son sus manifestaciones típicas.',
  no:{
    1:'El SIRS es una respuesta sistémica generalizada, no un hallazgo localizado como el dolor abdominal aislado.',
    2:'Es al revés: el SIRS típicamente produce taquicardia y taquipnea (aumento de frecuencia), no bradicardia ni disminución de la frecuencia respiratoria.',
    3:'El SIRS sí produce manifestaciones clínicas bien reconocidas y sistemáticamente evaluadas en la práctica clínica.'
  },
  trampa:'Invertir las manifestaciones típicas del SIRS (taquicardia, taquipnea) con sus opuestos (bradicardia, bradipnea).',
  obj:'Recordar las manifestaciones clínicas típicas del SIRS.',
  ref:'Porth, Fisiopatología, cap. 11.',
  tags:['SIRS','taquicardia','taquipnea','manifestaciones clínicas']
},
{
  id:'U9-FP-Q16', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la fiebre y la respuesta inflamatoria sistémica', sub:'Patrón de la inflamación descontrolada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué patrón general ilustra el SIRS sobre el comportamiento de los mecanismos de defensa del cuerpo?',
  ops:[
    'Un mecanismo de defensa normal y útil (la inflamación local) se vuelve peligroso precisamente cuando pierde su contención y se generaliza a todo el cuerpo',
    'Los mecanismos de defensa del cuerpo nunca pueden volverse peligrosos bajo ninguna circunstancia',
    'La inflamación siempre es beneficiosa, sin importar su magnitud o extensión',
    'El SIRS no tiene ninguna relación con los mecanismos normales de inflamación'
  ],
  ok:0,
  clave:'Un mecanismo de defensa normal (inflamación local) se vuelve peligroso al perder su contención y generalizarse.',
  exp:'Este tema muestra un patrón que se repite en Fisiopatología: un mecanismo de defensa normal y útil (la inflamación local) se vuelve peligroso precisamente cuando pierde su contención y se generaliza a todo el cuerpo -el SIRS es exactamente ese fenómeno: la inflamación, útil cuando está localizada, se vuelve dañina cuando se derrama hacia la circulación sistémica.',
  no:{
    1:'Los mecanismos de defensa del cuerpo sí pueden volverse peligrosos cuando pierden su contención normal, como ilustra precisamente el SIRS.',
    2:'La inflamación es beneficiosa cuando está contenida localmente, pero puede volverse dañina cuando se generaliza sin control, como en el SIRS.',
    3:'El SIRS tiene una relación directa: es precisamente la generalización descontrolada del mecanismo normal de inflamación.'
  },
  trampa:'No reconocer el patrón conceptual general (mecanismo de defensa útil que se vuelve peligroso al perder contención) que ilustra el SIRS.',
  obj:'Explicar el patrón conceptual general que ilustra el SIRS sobre los mecanismos de defensa del cuerpo.',
  ref:'Porth, Fisiopatología, cap. 11.',
  tags:['SIRS','contención de la inflamación','mecanismo de defensa']
},
{
  id:'U9-FP-Q17', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la insuficiencia cardíaca', sub:'Fracción de eyección conservada',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con síntomas claros de insuficiencia cardíaca (disnea, edema) tiene una fracción de eyección medida como normal en el ecocardiograma.',
  enunciado:'¿Qué explicación fisiopatológica es más probable para este hallazgo aparentemente contradictorio?',
  ops:[
    'Un problema de RELAJACIÓN del ventrículo (que se llena mal, aunque se contraiga con normalidad), es decir, insuficiencia cardíaca con fracción de eyección conservada',
    'El paciente no tiene realmente insuficiencia cardíaca, ya que la fracción de eyección normal descarta ese diagnóstico por completo', 'La fracción de eyección normal siempre indica ausencia total de cualquier problema cardíaco', 'Este hallazgo no tiene ninguna explicación fisiopatológica conocida'],
  ok:0,
  clave:'Una fracción de eyección conservada con síntomas de insuficiencia cardíaca sugiere un problema de relajación ventricular (llenado deficiente).',
  exp:'Una fracción de eyección conservada, pero con síntomas de insuficiencia cardíaca de todos modos, sugiere un problema de RELAJACIÓN del ventrículo (que se llena mal, aunque se contraiga con normalidad) -a diferencia de una fracción de eyección reducida, que refleja un problema de contractilidad. Ambos escenarios pueden producir insuficiencia cardíaca clínica, por mecanismos distintos.',
  no:{
    1:'La fracción de eyección normal NO descarta la insuficiencia cardíaca; existe un tipo específico (con fracción de eyección conservada) explicado por un problema de relajación ventricular.',
    2:'Una fracción de eyección normal no garantiza ausencia de cualquier problema cardíaco; puede coexistir con un problema de relajación ventricular causante de insuficiencia cardíaca clínica.',
    3:'Este hallazgo sí tiene una explicación fisiopatológica bien establecida: la insuficiencia cardíaca con fracción de eyección conservada, por problema de relajación.'
  },
  trampa:'Asumir que una fracción de eyección normal descarta automáticamente la insuficiencia cardíaca, sin considerar el mecanismo de insuficiencia cardíaca con fracción de eyección conservada.',
  obj:'Explicar la insuficiencia cardíaca con fracción de eyección conservada como problema de relajación ventricular.',
  ref:'Porth, Fisiopatología, cap. 23.',
  tags:['fracción de eyección conservada','relajación ventricular','insuficiencia cardíaca']
},
{
  id:'U9-FP-Q18', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la insuficiencia cardíaca', sub:'Por qué se bloquean los mecanismos compensadores',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué muchos tratamientos de la insuficiencia cardíaca crónica (IECA, betabloqueantes) buscan BLOQUEAR los mecanismos compensadores del cuerpo, en vez de estimularlos?',
  ops:[
    'Porque estos mecanismos, útiles a corto plazo, se vuelven perjudiciales si se mantienen activados de forma crónica, acelerando el deterioro del corazón y produciendo congestión',
    'Los mecanismos compensadores siempre son beneficiosos, sin importar cuánto tiempo permanezcan activados',
    'Bloquear los mecanismos compensadores no tiene ningún fundamento fisiopatológico real',
    'Los IECA y betabloqueantes en realidad estimulan aún más los mecanismos compensadores, no los bloquean'
  ],
  ok:0,
  clave:'Los mecanismos compensadores, útiles a corto plazo, se vuelven perjudiciales si se mantienen crónicamente activados, acelerando el deterioro cardíaco y la congestión.',
  exp:'Los mecanismos compensadores (retención de sodio/agua, activación simpática, remodelado cardíaco), útiles a corto plazo, se vuelven perjudiciales si se mantienen activados de forma crónica: la retención de agua y sodio termina produciendo congestión, y la activación simpática y hormonal sostenida acelera el deterioro del propio músculo cardíaco. Por eso los tratamientos buscan bloquear estos mecanismos a largo plazo, en vez de estimularlos.',
  no:{
    1:'Es precisamente lo contrario: estos mecanismos son beneficiosos a corto plazo, pero perjudiciales si se mantienen activados crónicamente.',
    2:'Bloquear los mecanismos compensadores tiene un fundamento fisiopatológico claro: evitar el daño acumulado de su activación crónica.',
    3:'Los IECA y betabloqueantes efectivamente BLOQUEAN estos mecanismos compensadores (sistema renina-angiotensina-aldosterona y sistema simpático respectivamente), no los estimulan.'
  },
  trampa:'No reconocer la paradoja terapéutica de bloquear mecanismos compensadores que, a corto plazo, parecerían beneficiosos.',
  obj:'Explicar el fundamento fisiopatológico de bloquear los mecanismos compensadores en el tratamiento de la insuficiencia cardíaca crónica.',
  ref:'Porth, Fisiopatología, cap. 23.',
  tags:['mecanismos compensadores','IECA','betabloqueantes','insuficiencia cardíaca crónica']
},
{
  id:'U9-FP-Q19', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la insuficiencia cardíaca', sub:'Remodelado cardíaco',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es el remodelado cardíaco en el contexto de la insuficiencia cardíaca?',
  ops:[
    'Cambios estructurales del corazón, incluida cierta hipertrofia, como adaptación al esfuerzo sostenido de bombear con un déficit funcional',
    'Es un procedimiento quirúrgico para reemplazar el corazón dañado', 'El remodelado cardíaco no tiene relación con la insuficiencia cardíaca', 'Es exclusivamente la formación de una cicatriz tras un infarto, sin ninguna otra manifestación'],
  ok:0,
  clave:'El remodelado cardíaco son cambios estructurales, incluida hipertrofia, como adaptación al esfuerzo sostenido de bombeo deficitario.',
  exp:'Ante un gasto cardíaco insuficiente, el corazón sufre remodelado cardíaco: cambios estructurales, incluida cierta hipertrofia, como adaptación al esfuerzo sostenido. Es uno de los mecanismos compensadores del cuerpo ante la insuficiencia cardíaca, junto con el sistema renina-angiotensina-aldosterona y la activación simpática.',
  no:{
    1:'El remodelado cardíaco es un proceso fisiopatológico, no un procedimiento quirúrgico.',
    2:'El remodelado cardíaco tiene una relación directa y central con la insuficiencia cardíaca, siendo uno de sus mecanismos compensadores.',
    3:'El remodelado cardíaco incluye la hipertrofia como adaptación funcional, no se limita exclusivamente a la cicatrización post-infarto.'
  },
  trampa:'Confundir el remodelado cardíaco con un procedimiento quirúrgico o limitarlo únicamente a la cicatrización post-infarto, sin reconocer su papel como mecanismo compensador general.',
  obj:'Definir el remodelado cardíaco como mecanismo compensador de la insuficiencia cardíaca.',
  ref:'Porth, Fisiopatología, cap. 23.',
  tags:['remodelado cardíaco','hipertrofia','mecanismo compensador']
},
{
  id:'U9-FP-Q20', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la hipertensión arterial', sub:'Componentes de la presión arterial',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿De qué dos componentes depende la presión arterial, según la ecuación fisiológica básica?',
  ops:['Gasto cardíaco y resistencia vascular periférica', 'Frecuencia respiratoria y saturación de oxígeno', 'Volumen urinario y filtración glomerular', 'Temperatura corporal y frecuencia cardíaca exclusivamente'],
  ok:0,
  clave:'La presión arterial depende del gasto cardíaco y la resistencia vascular periférica.',
  exp:'La presión arterial depende del gasto cardíaco y de la resistencia vascular periférica. La hipertensión arterial esencial resulta de la interacción de múltiples factores que, en conjunto, elevan alguno de estos dos componentes.',
  no:{
    1:'La frecuencia respiratoria y la saturación de oxígeno no son los componentes directos de la ecuación de presión arterial.',
    2:'El volumen urinario y la filtración glomerular son parámetros renales, no los componentes directos de la presión arterial en esta ecuación.',
    3:'La presión arterial depende del gasto cardíaco (que incluye la frecuencia cardíaca como uno de sus factores) y la resistencia vascular, no exclusivamente de la temperatura y frecuencia cardíaca.'
  },
  trampa:'Confundir los componentes directos de la ecuación de presión arterial con otros parámetros fisiológicos no relacionados directamente.',
  obj:'Recordar los dos componentes de los que depende la presión arterial.',
  ref:'Porth, Fisiopatología, cap. 24.',
  tags:['gasto cardíaco','resistencia vascular periférica','presión arterial']
},
{
  id:'U9-FP-Q21', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la hipertensión arterial', sub:'Órganos diana',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el corazón, el riñón, la retina y los vasos grandes son considerados "órganos diana" del daño por hipertensión sostenida?',
  ops:[
    'Porque tienen lechos vasculares particularmente sensibles a la presión sostenida, ya sea por su alto flujo, su fragilidad vascular, o su dependencia de perfusión constante',
    'Son órganos elegidos al azar, sin ninguna característica común que explique su vulnerabilidad', 'Estos órganos son completamente inmunes al daño por hipertensión', 'Solo el corazón es realmente vulnerable a la hipertensión; los demás órganos no se ven afectados'],
  ok:0,
  clave:'Los órganos diana comparten lechos vasculares particularmente sensibles a la presión sostenida (alto flujo, fragilidad vascular, o dependencia de perfusión constante).',
  exp:'Esta lista de órganos diana no es aleatoria: son, precisamente, los órganos con lechos vasculares particularmente sensibles a la presión sostenida, ya sea por su alto flujo (riñón), su fragilidad vascular (retina, cerebro) o su dependencia de una perfusión constante y eficiente (corazón).',
  no:{
    1:'La selección de órganos diana no es aleatoria; comparten una característica vascular común que explica su vulnerabilidad específica.',
    2:'Estos órganos son precisamente los MÁS vulnerables al daño por hipertensión sostenida, no inmunes a él.',
    3:'Todos los órganos mencionados (corazón, riñón, retina, vasos grandes) son vulnerables al daño hipertensivo, no exclusivamente el corazón.'
  },
  trampa:'Asumir que los órganos diana de la hipertensión son elegidos arbitrariamente, sin reconocer la característica vascular compartida que explica su vulnerabilidad.',
  obj:'Explicar por qué ciertos órganos son particularmente vulnerables al daño por hipertensión sostenida.',
  ref:'Porth, Fisiopatología, cap. 24.',
  tags:['órganos diana','hipertensión sostenida','lechos vasculares']
},
{
  id:'U9-FP-Q22', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la hipertensión arterial', sub:'Hipertensión esencial',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se dice que la hipertensión arterial esencial no tiene "una causa única identificable"?',
  ops:[
    'Porque resulta de la interacción de múltiples factores (predisposición genética, sodio dietético, sistema renina angiotensina, activación simpática) que en conjunto elevan el gasto cardíaco o la resistencia vascular',
    'Porque en realidad siempre tiene una única causa genética específica, aún no descubierta', 'La hipertensión esencial es la forma menos frecuente de hipertensión arterial', 'La hipertensión esencial nunca tiene relación con factores dietéticos'],
  ok:0,
  clave:'La hipertensión esencial resulta de la interacción de múltiples factores que en conjunto elevan gasto cardíaco o resistencia vascular.',
  exp:'La hipertensión arterial esencial (sin una causa única identificable, la forma más frecuente con diferencia) resulta de la interacción de múltiples factores que, en conjunto, elevan alguno de los dos componentes de la presión arterial: predisposición genética, exceso de sodio en la dieta, activación crónica del sistema renina angiotensina, y activación simpática sostenida.',
  no:{
    1:'La hipertensión esencial no se explica por una única causa genética específica; es precisamente multifactorial, sin una causa única identificable.',
    2:'La hipertensión esencial es, de hecho, la forma MÁS frecuente de hipertensión arterial, no la menos frecuente.',
    3:'La hipertensión esencial sí tiene una relación directa con factores dietéticos, como el exceso de sodio, entre varios otros factores contribuyentes.'
  },
  trampa:'Buscar una única causa específica para la hipertensión esencial, en vez de reconocer su naturaleza multifactorial.',
  obj:'Explicar la naturaleza multifactorial de la hipertensión arterial esencial.',
  ref:'Porth, Fisiopatología, cap. 24.',
  tags:['hipertensión esencial','multifactorial','sistema renina angiotensina']
},
{
  id:'U9-FP-Q23', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología de la hipertensión arterial', sub:'Sistema renina angiotensina en hipertensión',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo contribuye la activación crónica del sistema renina angiotensina al desarrollo de hipertensión arterial?',
  ops:[
    'Aumenta tanto la resistencia vascular directamente como la retención de sodio, elevando ambos componentes de la presión arterial',
    'El sistema renina angiotensina reduce siempre la presión arterial, nunca la aumenta', 'El sistema renina angiotensina no tiene ninguna relación con la resistencia vascular ni el sodio', 'Solo afecta la frecuencia cardíaca, sin ningún otro efecto sobre la presión arterial'],
  ok:0,
  clave:'El sistema renina angiotensina aumenta la resistencia vascular directamente y la retención de sodio, elevando la presión arterial por dos vías.',
  exp:'La activación crónica del sistema renina angiotensina aumenta tanto la resistencia vascular directamente (por vasoconstricción mediada por angiotensina II) como la retención de sodio (mediada por aldosterona), contribuyendo a elevar ambos componentes -gasto cardíaco (por el volumen retenido) y resistencia vascular- de la ecuación de presión arterial.',
  no:{
    1:'El sistema renina angiotensina, cuando se activa, AUMENTA la presión arterial, no la reduce.',
    2:'El sistema renina angiotensina sí tiene una relación directa tanto con la resistencia vascular (vasoconstricción) como con el sodio (retención vía aldosterona).',
    3:'El sistema renina angiotensina afecta tanto la resistencia vascular como el volumen circulante (por retención de sodio), no exclusivamente la frecuencia cardíaca.'
  },
  trampa:'Subestimar los dos mecanismos distintos (vasoconstricción directa y retención de sodio) por los cuales el sistema renina angiotensina contribuye a la hipertensión.',
  obj:'Explicar los dos mecanismos por los cuales el sistema renina angiotensina contribuye a la hipertensión arterial.',
  ref:'Porth, Fisiopatología, cap. 24.',
  tags:['sistema renina angiotensina','resistencia vascular','retención de sodio']
},
{
  id:'U9-FP-Q24', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología respiratoria: hipoxemia e hipercapnia', sub:'Shunt pulmonar',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con hipoxemia severa no mejora significativamente su oxigenación al recibir oxígeno suplementario a altas concentraciones.',
  enunciado:'¿Qué mecanismo de hipoxemia explica mejor esta falta de respuesta al oxígeno suplementario?',
  ops:[
    'Shunt: sangre que pasa por el pulmón SIN ventilación alguna en esa zona, de modo que nunca tuvo contacto con el aire (ni con el oxígeno suplementario)',
    'Hipoventilación general simple, que siempre responde bien al oxígeno suplementario', 'El paciente no tiene ningún problema real de oxigenación', 'Alteración de la difusión, que siempre se corrige completamente con oxígeno suplementario'],
  ok:0,
  clave:'El shunt (sangre sin ventilación en esa zona) no mejora con oxígeno suplementario porque esa sangre nunca tuvo contacto con el aire.',
  exp:'El shunt es un caso extremo del desajuste ventilación-perfusión: sangre que pasa por el pulmón SIN ventilación alguna en esa zona (por ejemplo, un alvéolo completamente colapsado o lleno de líquido), de modo que ni siquiera aumentando el oxígeno inspirado se corrige del todo, porque esa sangre nunca tuvo contacto con aire -exactamente el patrón clínico descrito, de falta de respuesta al oxígeno suplementario.',
  no:{
    1:'La hipoventilación general típicamente SÍ responde, al menos parcialmente, al oxígeno suplementario, a diferencia del shunt.',
    2:'El paciente sí tiene un problema real de oxigenación (hipoxemia severa), y la falta de respuesta al oxígeno es precisamente la pista clínica del mecanismo subyacente.',
    3:'La alteración de la difusión puede mejorar parcialmente con oxígeno suplementario (al aumentar el gradiente de presión), a diferencia del shunt, que no responde porque la sangre nunca contacta el aire alveolar.'
  },
  trampa:'No reconocer el shunt como el mecanismo específico de hipoxemia que NO responde al oxígeno suplementario, a diferencia de los otros mecanismos.',
  obj:'Identificar el shunt pulmonar como causa de hipoxemia refractaria al oxígeno suplementario.',
  ref:'Porth, Fisiopatología, cap. 21.',
  tags:['shunt pulmonar','hipoxemia refractaria','oxígeno suplementario']
},
{
  id:'U9-FP-Q25', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología respiratoria: hipoxemia e hipercapnia', sub:'Efecto espacio muerto',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo agrava la hipercapnia el efecto espacio muerto?',
  ops:[
    'Si una parte del aire que se mueve con cada respiración va a zonas sin buen riego sanguíneo, ese aire no participa realmente en eliminar CO2, aunque el volumen total movido por minuto parezca adecuado',
    'El efecto espacio muerto siempre mejora la eliminación de CO2, reduciendo el riesgo de hipercapnia', 'El efecto espacio muerto no tiene ninguna relación con el intercambio de CO2', 'El efecto espacio muerto solo afecta la eliminación de oxígeno, nunca de CO2'],
  ok:0,
  clave:'El aire que va a zonas sin buen riego sanguíneo no participa en eliminar CO2, aunque el volumen movido por minuto parezca adecuado.',
  exp:'El efecto espacio muerto agrava específicamente la hipercapnia: si una parte del aire que se mueve con cada respiración va a zonas sin buen riego sanguíneo, ese aire no participa realmente en eliminar CO2, aunque el volumen total movido por minuto parezca adecuado -la ventilación "efectiva" para eliminar CO2 es menor de lo que sugiere el volumen minuto total.',
  no:{
    1:'Es precisamente lo contrario: el efecto espacio muerto EMPEORA la eliminación de CO2, contribuyendo a la hipercapnia, no mejorándola.',
    2:'El efecto espacio muerto tiene una relación directa con la eliminación de CO2, siendo un mecanismo que agrava específicamente la hipercapnia.',
    3:'El efecto espacio muerto afecta específicamente la eliminación de CO2 (agravando la hipercapnia), no exclusivamente el oxígeno.'
  },
  trampa:'No reconocer que el volumen minuto total puede parecer adecuado mientras la ventilación "efectiva" (que realmente participa en el intercambio gaseoso) es menor, por el efecto espacio muerto.',
  obj:'Explicar cómo el efecto espacio muerto agrava específicamente la hipercapnia.',
  ref:'Porth, Fisiopatología, cap. 21.',
  tags:['efecto espacio muerto','hipercapnia','ventilación efectiva']
},
{
  id:'U9-FP-Q26', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología respiratoria: hipoxemia e hipercapnia', sub:'Hipoxemia sin hipercapnia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Puede un paciente tener hipoxemia sin tener hipercapnia? ¿Por qué?',
  ops:[
    'Sí: los mecanismos de desajuste ventilación-perfusión o shunt pueden bajar el oxígeno sin necesariamente subir mucho el CO2, sobre todo al inicio del cuadro',
    'No, la hipoxemia y la hipercapnia siempre ocurren juntas de forma obligatoria', 'La hipercapnia siempre precede a la hipoxemia en cualquier trastorno respiratorio', 'La hipoxemia y la hipercapnia son exactamente el mismo fenómeno'],
  ok:0,
  clave:'Sí es posible: el desajuste ventilación-perfusión o el shunt pueden bajar el oxígeno sin necesariamente subir mucho el CO2, especialmente al inicio.',
  exp:'Un paciente puede tener hipoxemia SIN hipercapnia (los mecanismos de desajuste ventilación-perfusión o shunt pueden bajar el oxígeno sin necesariamente subir mucho el CO2, sobre todo al inicio), pero la hipercapnia casi siempre indica que la ventilación global ya es insuficiente, un dato más tardío y más preocupante en la evolución de una insuficiencia respiratoria.',
  no:{
    1:'No siempre ocurren juntas; la hipoxemia puede presentarse de forma aislada, sin hipercapnia, especialmente en etapas iniciales.',
    2:'No hay una relación de precedencia obligatoria fija entre ambos; de hecho, la hipoxemia suele aparecer antes que la hipercapnia en muchos escenarios clínicos.',
    3:'Son fenómenos fisiológicos distintos (oxígeno bajo frente a CO2 elevado), no el mismo fenómeno con nombres distintos.'
  },
  trampa:'Asumir que hipoxemia e hipercapnia siempre ocurren simultáneamente, sin reconocer que la hipoxemia puede presentarse aislada, especialmente en etapas iniciales.',
  obj:'Explicar por qué la hipoxemia puede presentarse sin hipercapnia, especialmente en etapas iniciales.',
  ref:'Porth, Fisiopatología, cap. 21.',
  tags:['hipoxemia','hipercapnia','insuficiencia respiratoria']
},
{
  id:'U9-FP-Q27', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología renal: síndrome nefrótico y nefrítico', sub:'Mecanismo del edema nefrótico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el síndrome nefrótico produce edema generalizado marcado?',
  ops:[
    'La proteinuria severa reduce la albúmina en sangre, bajando la presión oncótica del plasma, lo que favorece la salida de líquido hacia los tejidos',
    'El edema nefrótico se debe exclusivamente a un aumento de la presión hidrostática, sin relación con las proteínas', 'El síndrome nefrótico nunca produce edema', 'La hematuria masiva es la causa directa del edema en el síndrome nefrótico'],
  ok:0,
  clave:'La proteinuria severa reduce la albúmina sanguínea, bajando la presión oncótica del plasma y favoreciendo la salida de líquido hacia los tejidos.',
  exp:'En el síndrome nefrótico, la proteinuria severa reduce la proteína (albúmina) en la sangre, bajando la presión oncótica del plasma -la fuerza que normalmente retiene el líquido dentro de los vasos- y produciendo edema generalizado, a veces muy marcado, por la salida de líquido hacia el espacio intersticial.',
  no:{
    1:'El mecanismo central del edema nefrótico es la disminución de la presión oncótica por hipoalbuminemia, no un aumento aislado de la presión hidrostática.',
    2:'El síndrome nefrótico sí produce edema, con frecuencia marcado, como una de sus manifestaciones características.',
    3:'La hematuria no es una manifestación típica del síndrome nefrótico puro (es más bien del nefrítico), y no es la causa del edema, que se debe a la hipoalbuminemia.'
  },
  trampa:'Atribuir el edema nefrótico a un mecanismo incorrecto (presión hidrostática o hematuria) en vez de la hipoalbuminemia por proteinuria masiva.',
  obj:'Explicar el mecanismo del edema en el síndrome nefrótico.',
  ref:'Porth, Fisiopatología, cap. 26.',
  tags:['síndrome nefrótico','proteinuria','presión oncótica','edema']
},
{
  id:'U9-FP-Q28', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología renal: síndrome nefrótico y nefrítico', sub:'Mecanismo de la hematuria nefrítica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el síndrome nefrítico se caracteriza por hematuria prominente, a diferencia del síndrome nefrótico?',
  ops:[
    'Es un proceso predominantemente inflamatorio que daña físicamente los capilares glomerulares, dejando escapar glóbulos rojos hacia la orina',
    'El síndrome nefrítico nunca produce ningún tipo de sangrado', 'La hematuria en el síndrome nefrítico se debe a un problema exclusivamente de la vejiga, no del glomérulo', 'Ambos síndromes producen exactamente el mismo grado de hematuria'],
  ok:0,
  clave:'El síndrome nefrítico es un proceso inflamatorio que daña físicamente los capilares glomerulares, dejando escapar glóbulos rojos.',
  exp:'El síndrome nefrítico es un proceso predominantemente inflamatorio del glomérulo, que daña físicamente los capilares glomerulares lo suficiente como para dejar escapar glóbulos rojos hacia la orina -a diferencia del síndrome nefrótico, donde el daño afecta principalmente el tamaño de lo que se filtra (proteínas), sin romper los capilares lo suficiente como para dejar pasar glóbulos rojos.',
  no:{
    1:'El síndrome nefrítico sí se caracteriza por hematuria, con frecuencia visible, como una de sus manifestaciones centrales.',
    2:'El origen de la hematuria en el síndrome nefrítico es glomerular (por ruptura de capilares), no vesical.',
    3:'Los dos síndromes tienen patrones de hematuria claramente distintos: prominente en el nefrítico, leve o ausente en el nefrótico puro.'
  },
  trampa:'No reconocer el mecanismo inflamatorio de ruptura capilar glomerular específico del síndrome nefrítico, que lo distingue del nefrótico.',
  obj:'Explicar el mecanismo de la hematuria en el síndrome nefrítico.',
  ref:'Porth, Fisiopatología, cap. 26.',
  tags:['síndrome nefrítico','hematuria','inflamación glomerular']
},
{
  id:'U9-FP-Q29', programa:'unirm', cuatri:9,
  esp:'Fisiopatología', tema:'Fisiopatología renal: síndrome nefrótico y nefrítico', sub:'Contraste nefrótico vs. nefrítico',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta proteinuria masiva y edema generalizado marcado, pero sin hematuria significativa ni hipertensión notable.',
  enunciado:'¿Qué síndrome es más consistente con este cuadro clínico?',
  ops:['Síndrome nefrótico', 'Síndrome nefrítico', 'Ambos síndromes son igualmente consistentes con este cuadro', 'Ninguno de los dos síndromes se ajusta a esta presentación'],
  ok:0,
  clave:'Proteinuria masiva + edema marcado + poca hematuria/hipertensión es el patrón clásico del síndrome nefrótico.',
  exp:'Este cuadro (proteinuria masiva, edema marcado, sin hematuria significativa ni hipertensión notable) corresponde al patrón clásico del síndrome nefrótico: predomina la pérdida de proteínas con daño de la barrera de filtración por tamaño, sin ruptura significativa de capilares -por eso la hematuria es leve o ausente y la hipertensión no es tan prominente como en el nefrítico.',
  no:{
    1:'El síndrome nefrítico se caracteriza más bien por hematuria prominente e hipertensión, con proteinuria más modesta -un patrón distinto al descrito en este caso.',
    2:'Los dos síndromes tienen patrones de presentación clínica claramente distintos; este caso corresponde específicamente al patrón nefrótico.',
    3:'Este cuadro sí se ajusta claramente al patrón clásico del síndrome nefrótico, según la regla de contraste entre ambos síndromes.'
  },
  trampa:'No aplicar la regla de contraste (proteinuria masiva + edema + poca hematuria = nefrótico) para identificar correctamente el síndrome descrito.',
  obj:'Aplicar el contraste entre síndrome nefrótico y nefrítico para identificar el patrón clínico correcto.',
  ref:'Porth, Fisiopatología, cap. 26.',
  tags:['síndrome nefrótico','proteinuria masiva','edema generalizado']
}

]);
