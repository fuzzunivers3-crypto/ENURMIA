/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 10, TANDA DE SEMIOLOGIA QUIRURGICA (1/2)
   Primer banco de esta materia (0 preguntas previas). Prefijo
   U10-SQ-. Esta parte cubre historia clinica quirurgica, abdomen
   agudo, masas y tumores, heridas/cicatrizacion, evaluacion
   preoperatoria e ictericia quirurgica (temas 1-6).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== SEMIOLOGIA QUIRURGICA ===================== */
{
  id:'U10-SQ-Q01', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Historia clínica quirúrgica', sub:'Qué se añade a la historia clínica general',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué preguntas adicionales específicas añade la historia clínica quirúrgica a la estructura ya vista en Semiología Clínica?',
  ops:[
    'Cirugías previas y sus complicaciones, reacciones anestésicas previas propias o en familiares, trastornos de la coagulación, y uso de anticoagulantes o antiagregantes',
    'La historia clínica quirúrgica es exactamente idéntica a la historia clínica general, sin ninguna pregunta adicional específica', 'Solo se añade una pregunta sobre el motivo de consulta actual, sin ninguna otra información adicional relevante', 'La historia clínica quirúrgica elimina por completo las preguntas de antecedentes ya vistas en Semiología Clínica'],
  ok:0,
  clave:'Cirugías previas y sus complicaciones, reacciones anestésicas previas propias o en familiares, trastornos de la coagulación, y uso de anticoagulantes o antiagregantes.',
  exp:'La historia clínica quirúrgica añade preguntas específicas que orientan directamente la decisión de operar o no: cirugías previas (dónde, cuándo, por qué, si hubo complicaciones), reacciones anestésicas previas propias o en familiares, trastornos de la coagulación conocidos, y uso de anticoagulantes o antiagregantes.',
  no:{
    1:'Sí añade preguntas específicas adicionales, orientadas directamente a la decisión quirúrgica y anestésica.',
    2:'Se añaden múltiples preguntas específicas relevantes, no solo el motivo de consulta actual sin más información.',
    3:'La historia clínica quirúrgica conserva toda la estructura ya vista en Semiología Clínica, y añade preguntas adicionales.'
  },
  trampa:'Asumir que la historia clínica quirúrgica es idéntica a la general, o que elimina información previa, sin reconocer las preguntas específicas que añade.',
  obj:'Identificar las preguntas específicas adicionales que añade la historia clínica quirúrgica.',
  ref:'Sabiston, Tratado de Cirugía, cap. 1.',
  tags:['historia clínica quirúrgica','antecedentes quirúrgicos','riesgo anestésico']
},
{
  id:'U10-SQ-Q02', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Historia clínica quirúrgica', sub:'Valor predictivo de complicaciones quirúrgicas previas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué preguntar específicamente por complicaciones de cirugías previas aporta información clínicamente valiosa, más allá de un dato histórico?',
  ops:[
    'Aporta información predictiva real sobre el riesgo de complicaciones similares en una nueva cirugía',
    'Las complicaciones de cirugías previas nunca tienen ninguna relación real con el riesgo de una nueva intervención quirúrgica', 'Preguntar por complicaciones previas es solo un dato histórico sin ninguna relevancia práctica actual', 'El antecedente de una complicación quirúrgica previa siempre garantiza que no volverá a ocurrir en una nueva cirugía'],
  ok:0,
  clave:'Aporta información predictiva real sobre el riesgo de complicaciones similares en una nueva cirugía.',
  exp:'Preguntar específicamente por complicaciones de cirugías previas (infección de la herida, dehiscencia, reintervenciones) aporta información predictiva real sobre el riesgo de complicaciones similares en una nueva cirugía, no solo un dato histórico sin relevancia práctica actual.',
  no:{
    1:'Las complicaciones previas sí tienen una relación real y predictiva con el riesgo de complicaciones similares en una nueva intervención.',
    2:'Es precisamente lo contrario: este dato tiene relevancia práctica actual real, no solo valor histórico sin aplicación.',
    3:'El antecedente de complicación previa no garantiza que no volverá a ocurrir; más bien, aumenta el riesgo predictivo de recurrencia.'
  },
  trampa:'Reducir el antecedente de complicaciones quirúrgicas previas a un dato histórico sin valor predictivo real para una nueva intervención.',
  obj:'Explicar el valor predictivo real de preguntar por complicaciones de cirugías previas.',
  ref:'Sabiston, Tratado de Cirugía, cap. 1.',
  tags:['antecedentes quirúrgicos','valor predictivo','complicaciones previas']
},
{
  id:'U10-SQ-Q03', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Historia clínica quirúrgica', sub:'Factores que componen el riesgo anestésico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué factores, más allá del problema quirúrgico puntual, determinan el riesgo anestésico de un paciente?',
  ops:[
    'Enfermedades cardiovasculares o respiratorias de base, edad avanzada, obesidad, y la propia complejidad del procedimiento planeado',
    'El riesgo anestésico depende exclusivamente del problema quirúrgico específico, sin ninguna relación con otras condiciones del paciente', 'La edad del paciente nunca tiene ninguna relación real con el riesgo anestésico de un procedimiento', 'El riesgo anestésico es idéntico para cualquier paciente, sin importar sus enfermedades de base'],
  ok:0,
  clave:'Enfermedades cardiovasculares o respiratorias de base, edad avanzada, obesidad, y la propia complejidad del procedimiento planeado.',
  exp:'El riesgo anestésico de un paciente depende de factores que van más allá del problema quirúrgico puntual: enfermedades cardiovasculares o respiratorias de base, edad avanzada, obesidad, y la propia complejidad del procedimiento planeado, todos factores que deben explorarse activamente en la historia clínica quirúrgica.',
  no:{
    1:'El riesgo anestésico depende de múltiples factores del paciente, no exclusivamente del problema quirúrgico específico a tratar.',
    2:'La edad avanzada sí tiene una relación real y documentada con un mayor riesgo anestésico en muchos procedimientos.',
    3:'El riesgo anestésico varía considerablemente según las enfermedades de base y otras características individuales del paciente.'
  },
  trampa:'Reducir el riesgo anestésico al problema quirúrgico específico, sin reconocer la influencia de comorbilidades y características individuales del paciente.',
  obj:'Identificar los factores que determinan el riesgo anestésico de un paciente, más allá del problema quirúrgico puntual.',
  ref:'Sabiston, Tratado de Cirugía, cap. 1.',
  tags:['riesgo anestésico','comorbilidades','factores determinantes']
},
{
  id:'U10-SQ-Q04', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Historia clínica quirúrgica', sub:'Reacciones anestésicas previas, propias o familiares',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué preguntar por reacciones anestésicas previas, tanto propias como en familiares, es un paso clínico que puede evitar una complicación grave?',
  ops:[
    'Puede anticipar una complicación anestésica grave y evitable, al identificar un riesgo que de otra forma se descubriría solo durante el procedimiento',
    'Las reacciones anestésicas en familiares nunca tienen ninguna relación real con el riesgo del propio paciente', 'Preguntar por reacciones anestésicas previas es un paso completamente opcional, sin ninguna relevancia clínica real', 'Solo las reacciones anestésicas propias, nunca las familiares, tienen algún valor predictivo real'],
  ok:0,
  clave:'Puede anticipar una complicación anestésica grave y evitable, al identificar un riesgo que de otra forma se descubriría solo durante el procedimiento.',
  exp:'Preguntar específicamente por reacciones anestésicas previas, propias o familiares, es un paso que con frecuencia se omite en una historia clínica apresurada, pero que puede anticipar una complicación anestésica grave y evitable.',
  no:{
    1:'Las reacciones anestésicas en familiares sí pueden tener relación real, dado que algunas condiciones predisponentes tienen componente hereditario.',
    2:'Este paso sí tiene relevancia clínica real y significativa, no es un paso opcional prescindible en la evaluación.',
    3:'Tanto las reacciones propias como las familiares tienen valor predictivo real, ambas relevantes para anticipar el riesgo.'
  },
  trampa:'Subestimar el valor de preguntar por reacciones anestésicas familiares, asumiendo que solo el antecedente personal directo tiene relevancia.',
  obj:'Explicar por qué preguntar por reacciones anestésicas previas, propias o familiares, es un paso clínico relevante.',
  ref:'Sabiston, Tratado de Cirugía, cap. 1.',
  tags:['reacciones anestésicas previas','antecedente familiar','complicación evitable']
},
{
  id:'U10-SQ-Q05', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología del abdomen agudo', sub:'La pregunta binaria central del abdomen agudo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la pregunta central que prioriza la evaluación de un abdomen agudo, antes de llegar a un diagnóstico específico?',
  ops:[
    '¿Este paciente necesita cirugía ahora, o puede esperar mientras se completa el estudio?',
    'La única pregunta relevante en un abdomen agudo es determinar el diagnóstico exacto antes de tomar cualquier decisión', 'La evaluación del abdomen agudo nunca requiere una decisión rápida, siempre puede esperar el estudio completo', 'El abdomen agudo es siempre un diagnóstico específico en sí mismo, no una categoría clínica general'],
  ok:0,
  clave:'¿Este paciente necesita cirugía ahora, o puede esperar mientras se completa el estudio?',
  exp:'La evaluación de un abdomen agudo prioriza responder una pregunta binaria antes que llegar a un diagnóstico específico definitivo: ¿este paciente necesita cirugía ahora, o puede esperar mientras se completa el estudio? -una pregunta que con frecuencia debe responderse con la información disponible en ese momento.',
  no:{
    1:'La pregunta central prioritaria es la necesidad de cirugía urgente, no necesariamente el diagnóstico específico exacto de entrada.',
    2:'Es precisamente lo contrario: la evaluación con frecuencia requiere una decisión rápida sin esperar el estudio completo.',
    3:'El abdomen agudo no es un diagnóstico específico en sí mismo; es una categoría clínica que agrupa múltiples causas posibles.'
  },
  trampa:'Priorizar buscar un diagnóstico específico completo antes de responder la pregunta urgente sobre la necesidad de cirugía inmediata.',
  obj:'Explicar la pregunta binaria central que prioriza la evaluación de un abdomen agudo.',
  ref:'Sabiston, Tratado de Cirugía, cap. 46.',
  tags:['abdomen agudo','pregunta binaria','decisión quirúrgica urgente']
},
{
  id:'U10-SQ-Q06', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología del abdomen agudo', sub:'Mecanismo del signo de rebote',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué hallazgo describe el signo de rebote, y qué sugiere clínicamente?',
  ops:[
    'Dolor que aumenta al retirar bruscamente la mano tras palpar el abdomen, sugiriendo irritación del peritoneo',
    'El signo de rebote describe dolor que aumenta durante la palpación sostenida, no al retirar la mano', 'El signo de rebote nunca tiene ninguna relación real con la irritación de la membrana peritoneal', 'Este signo sugiere específicamente un problema respiratorio, no una condición abdominal'],
  ok:0,
  clave:'Dolor que aumenta al retirar bruscamente la mano tras palpar el abdomen, sugiriendo irritación del peritoneo.',
  exp:'El signo de rebote (dolor que aumenta al retirar bruscamente la mano tras palpar el abdomen, más que durante la palpación misma) sugiere irritación del peritoneo, la membrana que recubre la cavidad abdominal.',
  no:{
    1:'Es precisamente lo contrario: el dolor característico del signo de rebote ocurre al RETIRAR la mano, no durante la palpación sostenida.',
    2:'El signo de rebote sí tiene una relación directa y bien establecida con la irritación de la membrana peritoneal.',
    3:'Este signo es específico de una condición abdominal (irritación peritoneal), no de un problema respiratorio.'
  },
  trampa:'Invertir el momento en que ocurre el dolor característico del signo de rebote (al retirar la mano, no durante la palpación).',
  obj:'Explicar el mecanismo y significado clínico del signo de rebote.',
  ref:'Sabiston, Tratado de Cirugía, cap. 46.',
  tags:['signo de rebote','irritación peritoneal','abdomen agudo']
},
{
  id:'U10-SQ-Q07', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología del abdomen agudo', sub:'Modificadores del dolor abdominal como información diagnóstica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué información aporta observar cómo el movimiento, la tos o la respiración profunda modifican el dolor abdominal de un paciente?',
  ops:[
    'Un dolor que empeora con el movimiento o la tos sugiere irritación peritoneal, mientras que un dolor cólico que fluctúa en oleadas sugiere un mecanismo obstructivo distinto',
    'Estos modificadores del dolor nunca aportan ninguna información diagnóstica útil sobre la causa del abdomen agudo', 'El dolor cólico en oleadas siempre sugiere irritación peritoneal, igual que el dolor que empeora con el movimiento', 'Solo la localización del dolor importa clínicamente, sin ninguna relevancia de cómo se modifica con el movimiento'],
  ok:0,
  clave:'Un dolor que empeora con el movimiento o la tos sugiere irritación peritoneal, mientras que un dolor cólico que fluctúa en oleadas sugiere un mecanismo obstructivo distinto.',
  exp:'Localizar dónde predomina el dolor, cómo se irradia, y qué maniobras lo modifican aporta información diagnóstica valiosa: un dolor que empeora con el movimiento o la tos sugiere irritación peritoneal, mientras que un dolor cólico que fluctúa en oleadas sugiere un mecanismo obstructivo distinto.',
  no:{
    1:'Estos modificadores sí aportan información diagnóstica valiosa, orientando hacia distintos mecanismos fisiopatológicos subyacentes.',
    2:'Son patrones distintos: el dolor con el movimiento sugiere irritación peritoneal, el cólico en oleadas sugiere un mecanismo obstructivo.',
    3:'La forma en que el dolor se modifica con el movimiento también es información diagnóstica relevante, no solo la localización.'
  },
  trampa:'No reconocer que la forma en que el dolor abdominal se modifica con maniobras específicas orienta hacia distintos mecanismos fisiopatológicos.',
  obj:'Explicar la información diagnóstica que aportan los modificadores del dolor abdominal.',
  ref:'Sabiston, Tratado de Cirugía, cap. 46.',
  tags:['modificadores del dolor','irritación peritoneal','mecanismo obstructivo']
},
{
  id:'U10-SQ-Q08', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología del abdomen agudo', sub:'Riesgo de retrasar una cirugía necesaria',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con signos claros de irritación peritoneal generalizada y dolor abdominal progresivo espera varios estudios de imagen adicionales no urgentes antes de que se considere la evaluación quirúrgica.',
  enunciado:'¿Qué riesgo clínico real tiene este retraso?',
  ops:[
    'Una condición inicialmente manejable puede progresar hacia una complicación grave, como una perforación o una peritonitis generalizada',
    'Retrasar la evaluación quirúrgica mientras se completan estudios adicionales nunca representa ningún riesgo real para el paciente', 'Los signos de irritación peritoneal generalizada nunca indican la necesidad de una evaluación quirúrgica más urgente', 'Completar todos los estudios de imagen disponibles siempre debe priorizarse sobre la evaluación quirúrgica urgente'],
  ok:0,
  clave:'Una condición inicialmente manejable puede progresar hacia una complicación grave, como una perforación o una peritonitis generalizada.',
  exp:'Reconocer las banderas rojas de un abdomen agudo a tiempo es clínicamente determinante: retrasar una cirugía necesaria mientras se completan estudios adicionales no urgentes puede permitir que una condición inicialmente manejable progrese hacia una complicación grave, como una perforación o una peritonitis generalizada.',
  no:{
    1:'Este retraso sí representa un riesgo clínico real de progresión hacia complicaciones graves y potencialmente evitables.',
    2:'Los signos de irritación peritoneal generalizada SÍ indican con fuerza la necesidad de evaluación quirúrgica urgente, no de más estudios.',
    3:'Ante signos claros de irritación peritoneal generalizada, la evaluación quirúrgica urgente debe priorizarse sobre estudios adicionales no urgentes.'
  },
  trampa:'Priorizar completar estudios de imagen adicionales sobre una evaluación quirúrgica urgente ante signos claros de irritación peritoneal generalizada.',
  obj:'Explicar el riesgo real de retrasar una cirugía necesaria en un paciente con signos de alarma de abdomen agudo.',
  ref:'Sabiston, Tratado de Cirugía, cap. 46.',
  tags:['banderas rojas','retraso quirúrgico','progresión a complicación grave']
},
{
  id:'U10-SQ-Q09', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología del abdomen agudo', sub:'Definición amplia del abdomen agudo',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué describe el término "abdomen agudo"?',
  ops:[
    'Un cuadro de dolor abdominal de inicio relativamente reciente y severo, que puede requerir intervención quirúrgica urgente, agrupando múltiples causas posibles',
    'El abdomen agudo es un diagnóstico específico único, con una única causa posible siempre idéntica', 'El abdomen agudo describe exclusivamente el dolor abdominal crónico de larga evolución, nunca agudo', 'Este término se refiere únicamente a problemas digestivos leves que nunca requieren evaluación quirúrgica'],
  ok:0,
  clave:'Un cuadro de dolor abdominal de inicio relativamente reciente y severo, que puede requerir intervención quirúrgica urgente, agrupando múltiples causas posibles.',
  exp:'El abdomen agudo describe un cuadro de dolor abdominal de inicio relativamente reciente y severo, que puede requerir intervención quirúrgica urgente -no es un diagnóstico específico en sí mismo, sino una categoría clínica que agrupa múltiples causas posibles unidas por la urgencia de la evaluación.',
  no:{
    1:'No es un diagnóstico único; es una categoría clínica que agrupa múltiples causas posibles distintas.',
    2:'Es precisamente lo contrario: el abdomen agudo describe dolor de inicio RECIENTE, no crónico de larga evolución.',
    3:'El abdomen agudo puede representar condiciones potencialmente graves que sí requieren evaluación quirúrgica urgente.'
  },
  trampa:'Confundir el abdomen agudo con un diagnóstico único específico, o con dolor abdominal crónico de larga evolución.',
  obj:'Definir el concepto de abdomen agudo como categoría clínica que agrupa múltiples causas posibles.',
  ref:'Sabiston, Tratado de Cirugía, cap. 46.',
  tags:['abdomen agudo','categoría clínica','definición']
},
{
  id:'U10-SQ-Q10', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de masas y tumores', sub:'Patrón de examen transferible entre ubicaciones',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el patrón de examen semiológico de una masa palpable es transferible a cualquier ubicación anatómica, aunque el diagnóstico diferencial cambie?',
  ops:[
    'Porque el patrón de examen (tamaño, consistencia, movilidad, bordes, dolor, cambios de piel suprayacente) es consistente, aunque las causas posibles varíen según la ubicación',
    'El patrón de examen de una masa palpable es completamente distinto y no transferible entre distintas ubicaciones anatómicas', 'Solo las masas mamarias y ganglionares tienen un patrón semiológico reconocible, ninguna otra ubicación lo tiene', 'El diagnóstico diferencial de una masa nunca cambia según su ubicación anatómica específica'],
  ok:0,
  clave:'Porque el patrón de examen (tamaño, consistencia, movilidad, bordes, dolor, cambios de piel suprayacente) es consistente, aunque las causas posibles varíen según la ubicación.',
  exp:'Este patrón de examen no es exclusivo de una localización anatómica específica; se aplica de la misma forma sistemática a una masa en el cuello, en una extremidad, en la pared abdominal, o en cualquier otro sitio -la lógica semiológica es transferible, aunque el diagnóstico diferencial cambie según la ubicación.',
  no:{
    1:'El patrón de examen es consistente y transferible entre ubicaciones, aunque las causas específicas posibles sí varíen según la localización.',
    2:'El mismo patrón semiológico se aplica a masas en cualquier ubicación, no exclusivamente a masas mamarias o ganglionares.',
    3:'El diagnóstico diferencial sí cambia según la ubicación anatómica de la masa, aunque el patrón de examen semiológico sea el mismo.'
  },
  trampa:'Asumir que el patrón semiológico de examen de una masa es exclusivo de ciertas ubicaciones, sin reconocer su carácter transferible.',
  obj:'Explicar por qué el patrón de examen semiológico de una masa palpable es transferible entre distintas ubicaciones anatómicas.',
  ref:'Sabiston, Tratado de Cirugía, cap. 2.',
  tags:['masa palpable','patrón transferible','examen sistemático']
},
{
  id:'U10-SQ-Q11', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de masas y tumores', sub:'Ausencia de dolor como característica de malignidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la ausencia de dolor en una masa nueva puede ser, contraintuitivamente, una característica que sugiere malignidad?',
  ops:[
    'Una masa maligna con frecuencia no duele hasta etapas avanzadas, a diferencia de muchos procesos inflamatorios o infecciosos, que típicamente sí producen dolor',
    'El dolor siempre es una característica que sugiere malignidad, mientras que la ausencia de dolor sugiere benignidad en cualquier masa', 'La presencia o ausencia de dolor nunca aporta ninguna información diagnóstica útil sobre una masa palpable', 'Todas las masas malignas siempre producen dolor intenso desde su aparición inicial, sin ninguna excepción'],
  ok:0,
  clave:'Una masa maligna con frecuencia no duele hasta etapas avanzadas, a diferencia de muchos procesos inflamatorios o infecciosos, que típicamente sí producen dolor.',
  exp:'Las características semiológicas de un tumor que sugieren malignidad incluyen la ausencia de dolor (una masa maligna con frecuencia no duele hasta etapas avanzadas, a diferencia de muchos procesos inflamatorios o infecciosos que sí duelen).',
  no:{
    1:'Es precisamente lo contrario: la AUSENCIA de dolor, no su presencia, es una de las características que sugiere malignidad en una masa.',
    2:'La presencia o ausencia de dolor sí aporta información diagnóstica útil, orientando entre distintas causas posibles de la masa.',
    3:'Muchas masas malignas, especialmente en etapas tempranas, pueden ser indoloras, no producir dolor intenso desde su aparición.'
  },
  trampa:'Invertir el significado del dolor en una masa palpable, asumiendo que su presencia (no su ausencia) sugiere malignidad.',
  obj:'Explicar por qué la ausencia de dolor puede ser una característica que sugiere malignidad en una masa palpable.',
  ref:'Sabiston, Tratado de Cirugía, cap. 2.',
  tags:['ausencia de dolor','característica de malignidad','masa palpable']
},
{
  id:'U10-SQ-Q12', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de masas y tumores', sub:'Semiología no reemplaza la biopsia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el examen semiológico de una masa, aunque orienta hacia benignidad o malignidad, nunca reemplaza la confirmación histológica?',
  ops:[
    'Porque ni la palpación ni la imagen, por sí solas, permiten distinguir con certeza absoluta entre una masa benigna y una maligna',
    'El examen semiológico siempre es suficiente por sí solo para confirmar con certeza absoluta la naturaleza de cualquier masa', 'La biopsia nunca aporta ninguna información adicional más allá de lo que ya muestra el examen semiológico', 'La confirmación histológica solo es necesaria para masas mamarias, nunca para masas en otras ubicaciones'],
  ok:0,
  clave:'Ni la palpación ni la imagen, por sí solas, permiten distinguir con certeza absoluta entre una masa benigna y una maligna.',
  exp:'El examen semiológico de una masa nunca reemplaza la confirmación histológica mediante biopsia -retomando directamente el mismo principio ya visto en la patología de mama: ni la palpación ni la imagen, por sí solas, permiten distinguir con certeza absoluta entre una masa benigna y una maligna.',
  no:{
    1:'Es precisamente lo contrario: el examen semiológico, por sí solo, NO es suficiente para confirmar con certeza absoluta la naturaleza de una masa.',
    2:'La biopsia sí aporta información esencial adicional (confirmación histológica) que el examen semiológico por sí solo no puede dar.',
    3:'La confirmación histológica es necesaria para masas en cualquier ubicación con características sospechosas, no exclusivamente mamarias.'
  },
  trampa:'Asumir que el examen semiológico por sí solo es suficiente para confirmar con certeza la naturaleza de una masa, sin necesitar biopsia.',
  obj:'Explicar por qué el examen semiológico de una masa nunca reemplaza la confirmación histológica mediante biopsia.',
  ref:'Sabiston, Tratado de Cirugía, cap. 2.',
  tags:['confirmación histológica','biopsia necesaria','límite del examen semiológico']
},
{
  id:'U10-SQ-Q13', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de masas y tumores', sub:'Factores que orientan la decisión de biopsiar',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente joven, sin factores de riesgo relevantes, presenta una masa con características semiológicas tranquilizadoras (móvil, blanda, bordes definidos, indolora pero de aparición reciente y estable).',
  enunciado:'¿Qué combinación de factores orienta la decisión clínica de vigilar con seguimiento o biopsiar de inmediato?',
  ops:[
    'Las características semiológicas de la masa, la edad y el contexto clínico del paciente, y la evolución en el tiempo',
    'La decisión de biopsiar depende exclusivamente del tamaño absoluto de la masa, sin considerar ningún otro factor', 'La edad del paciente nunca debería influir en la decisión de vigilar o biopsiar una masa con características tranquilizadoras', 'Cualquier masa nueva, sin importar sus características, siempre debe biopsiarse de inmediato sin excepción'],
  ok:0,
  clave:'Las características semiológicas de la masa, la edad y el contexto clínico del paciente, y la evolución en el tiempo.',
  exp:'La decisión de biopsiar una masa se basa en la combinación de sus características semiológicas, la edad y el contexto clínico del paciente, y la evolución en el tiempo: una masa con características tranquilizadoras en un paciente joven y sin factores de riesgo puede vigilarse con seguimiento clínico.',
  no:{
    1:'El tamaño absoluto no es el único factor; se combina con características semiológicas, edad, contexto y evolución en el tiempo.',
    2:'La edad del paciente sí influye en esta decisión, siendo uno de los factores relevantes junto con las características de la masa.',
    3:'No toda masa requiere biopsia inmediata; una con características tranquilizadoras en contexto apropiado puede vigilarse con seguimiento.'
  },
  trampa:'Reducir la decisión de biopsiar a un solo factor (tamaño o presencia de la masa), sin considerar la combinación completa de factores relevantes.',
  obj:'Aplicar los factores combinados que orientan la decisión de vigilar o biopsiar una masa con características tranquilizadoras.',
  ref:'Sabiston, Tratado de Cirugía, cap. 2.',
  tags:['decisión de biopsiar','vigilancia con seguimiento','contexto clínico']
},
{
  id:'U10-SQ-Q14', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de heridas y cicatrización', sub:'Condiciones para cicatrización por primera intención',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué condiciones específicas se requieren para que una herida cicatrice sin complicaciones por primera intención?',
  ops:[
    'Ausencia de infección activa, buen aporte sanguíneo a los bordes de la herida, y ausencia de tensión excesiva sobre el cierre',
    'Cualquier herida, sin importar su condición, puede cerrarse por primera intención sin ningún riesgo de complicación', 'La cicatrización por primera intención no requiere ninguna condición específica previa para ocurrir con éxito', 'Solo el tamaño de la herida determina si puede cicatrizar exitosamente por primera intención'],
  ok:0,
  clave:'Ausencia de infección activa, buen aporte sanguíneo a los bordes de la herida, y ausencia de tensión excesiva sobre el cierre.',
  exp:'La cicatrización por primera intención requiere condiciones específicas para ocurrir sin complicaciones: ausencia de infección activa, buen aporte sanguíneo a los bordes de la herida, y ausencia de tensión excesiva sobre el cierre -condiciones que el cirujano busca activamente garantizar.',
  no:{
    1:'No cualquier herida puede cerrarse por primera intención sin riesgo; se requieren condiciones específicas favorables previas.',
    2:'Sí se requieren condiciones específicas (ausencia de infección, buen aporte sanguíneo, ausencia de tensión) para un cierre exitoso.',
    3:'El tamaño de la herida no es el único factor determinante; las condiciones de infección, aporte sanguíneo y tensión también importan.'
  },
  trampa:'Asumir que cualquier herida puede cerrarse por primera intención sin considerar las condiciones específicas necesarias para su éxito.',
  obj:'Identificar las condiciones necesarias para una cicatrización exitosa por primera intención.',
  ref:'Sabiston, Tratado de Cirugía, cap. 6.',
  tags:['cicatrización por primera intención','condiciones necesarias','cierre exitoso','cicatrización por primera y segunda intención','herida quirúrgica']
},
{
  id:'U10-SQ-Q15', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de heridas y cicatrización', sub:'Riesgo de forzar el cierre inmediato de una herida contaminada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué forzar el cierre inmediato de una herida contaminada, solo por preferir el resultado estético, es una decisión clínicamente riesgosa?',
  ops:[
    'Aumenta significativamente el riesgo de infección de la herida cerrada, priorizando mal el orden de las prioridades clínicas',
    'Forzar el cierre inmediato de una herida contaminada nunca representa ningún riesgo real adicional de infección', 'El resultado estético siempre debe priorizarse sobre el riesgo de infección al decidir cómo manejar una herida contaminada', 'Una herida contaminada cerrada de inmediato siempre cicatriza exactamente igual de bien que una herida limpia'],
  ok:0,
  clave:'Aumenta significativamente el riesgo de infección de la herida cerrada, priorizando mal el orden de las prioridades clínicas.',
  exp:'Forzar el cierre inmediato de una herida contaminada, solo por preferir el resultado estético de la primera intención, aumenta significativamente el riesgo de infección de la herida cerrada -una decisión que prioriza mal el orden de prioridades clínicas: primero controlar el riesgo de infección, y solo después optimizar el resultado estético.',
  no:{
    1:'Este riesgo de infección es real y significativo, precisamente el motivo por el que esta decisión es clínicamente riesgosa.',
    2:'Es precisamente lo contrario: el control del riesgo de infección debe priorizarse SOBRE el resultado estético, no al revés.',
    3:'Una herida contaminada cerrada de inmediato tiene un riesgo considerablemente mayor de complicaciones que una herida limpia.'
  },
  trampa:'Priorizar el resultado estético sobre el control del riesgo de infección al decidir cómo manejar una herida contaminada.',
  obj:'Explicar el riesgo de forzar el cierre inmediato de una herida contaminada por preferencia estética.',
  ref:'Sabiston, Tratado de Cirugía, cap. 6.',
  tags:['herida contaminada','riesgo de infección','prioridad clínica correcta','herida quirúrgica']
},
{
  id:'U10-SQ-Q16', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de heridas y cicatrización', sub:'Factores del paciente que comprometen la cicatrización',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué factores del paciente pueden retrasar o comprometer la cicatrización de cualquier herida, sin importar la técnica quirúrgica usada?',
  ops:[
    'Diabetes mal controlada, desnutrición, tabaquismo, y el uso de corticoides sistémicos',
    'Ningún factor del paciente puede influir realmente en la cicatrización, que depende exclusivamente de la técnica quirúrgica usada', 'Solo la edad del paciente puede afectar la cicatrización de una herida, sin ningún otro factor relevante', 'El tabaquismo nunca tiene ninguna relación real con el aporte sanguíneo necesario para la cicatrización'],
  ok:0,
  clave:'Diabetes mal controlada, desnutrición, tabaquismo, y el uso de corticoides sistémicos.',
  exp:'Múltiples factores del paciente pueden retrasar o comprometer la cicatrización de cualquier herida: diabetes mal controlada, desnutrición, tabaquismo (que reduce el aporte sanguíneo periférico), y el uso de corticoides sistémicos, que suprimen la respuesta inflamatoria necesaria para iniciar el proceso.',
  no:{
    1:'Los factores del paciente sí influyen de forma significativa en la cicatrización, más allá de la técnica quirúrgica usada.',
    2:'Existen múltiples factores relevantes además de la edad: diabetes, desnutrición, tabaquismo y uso de corticoides, entre otros.',
    3:'El tabaquismo sí tiene una relación directa con la cicatrización, al reducir el aporte sanguíneo periférico necesario.'
  },
  trampa:'Reducir los factores que afectan la cicatrización exclusivamente a la técnica quirúrgica, sin reconocer la influencia de condiciones sistémicas del paciente.',
  obj:'Identificar los factores del paciente que pueden comprometer la cicatrización de una herida.',
  ref:'Sabiston, Tratado de Cirugía, cap. 6.',
  tags:['factores que comprometen la cicatrización','diabetes','tabaquismo']
},
{
  id:'U10-SQ-Q17', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de heridas y cicatrización', sub:'Optimización preoperatoria de factores de riesgo',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente diabético con control glucémico deficiente tiene programada una cirugía electiva en las próximas semanas.',
  enunciado:'¿Qué ventaja tiene identificar y optimizar su control glucémico antes de la cirugía, en vez de proceder sin ajustarlo?',
  ops:[
    'Reduce el riesgo de complicaciones de la herida que, de otra forma, podrían haberse anticipado y mitigado',
    'Optimizar el control glucémico antes de una cirugía electiva nunca tiene ningún efecto real sobre el riesgo de complicaciones', 'El control glucémico del paciente no tiene ninguna relación real con el riesgo de complicaciones de la herida quirúrgica', 'Es preferible proceder con la cirugía sin ajustar el control glucémico, ya que el ajuste retrasaría innecesariamente el procedimiento'],
  ok:0,
  clave:'Reduce el riesgo de complicaciones de la herida que, de otra forma, podrían haberse anticipado y mitigado.',
  exp:'Identificar estos factores de riesgo antes de una cirugía electiva permite, en muchos casos, optimizarlos con anticipación -por ejemplo, mejorando el control glucémico de un paciente diabético antes de una cirugía programada- reduciendo así el riesgo de complicaciones de la herida que, de otra forma, podrían haberse anticipado y mitigado.',
  no:{
    1:'La optimización del control glucémico sí tiene un efecto real documentado sobre la reducción del riesgo de complicaciones.',
    2:'El control glucémico sí tiene una relación real y directa con el riesgo de complicaciones de la cicatrización de la herida.',
    3:'Optimizar el control glucémico, aunque tome tiempo, reduce el riesgo real de complicaciones, siendo una inversión clínica valiosa.'
  },
  trampa:'Asumir que optimizar el control glucémico antes de una cirugía electiva no aporta ningún beneficio real, o que retrasarla innecesariamente es preferible.',
  obj:'Explicar la ventaja de optimizar factores de riesgo como el control glucémico antes de una cirugía electiva.',
  ref:'Sabiston, Tratado de Cirugía, cap. 6.',
  tags:['optimización preoperatoria','control glucémico','anticipación de riesgo']
},
{
  id:'U10-SQ-Q18', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Evaluación preoperatoria', sub:'Función real de la evaluación preoperatoria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la evaluación preoperatoria no debe considerarse un trámite administrativo previo a la cirugía?',
  ops:[
    'Es el momento donde se decide si el paciente está en las mejores condiciones posibles para el procedimiento, o si conviene optimizar alguna condición médica antes',
    'La evaluación preoperatoria es, de hecho, exclusivamente un trámite administrativo sin ninguna relevancia clínica real', 'Esta evaluación nunca influye en la decisión de proceder o no con una cirugía electiva planeada', 'La evaluación preoperatoria solo sirve para completar el expediente médico, sin ninguna función clínica activa'],
  ok:0,
  clave:'Es el momento donde se decide si el paciente está en las mejores condiciones posibles para el procedimiento, o si conviene optimizar alguna condición médica antes.',
  exp:'Esta evaluación no es un trámite administrativo previo a la cirugía; es el momento donde se decide si el paciente está en las mejores condiciones posibles para el procedimiento planeado, o si conviene optimizar alguna condición médica antes de proceder.',
  no:{
    1:'La evaluación preoperatoria tiene una función clínica activa central, no es meramente administrativa.',
    2:'Esta evaluación sí puede influir directamente en la decisión de proceder, posponer, u optimizar antes de una cirugía electiva.',
    3:'La evaluación preoperatoria tiene una función clínica activa de identificación y optimización de riesgos, no solo documental.'
  },
  trampa:'Reducir la evaluación preoperatoria a un trámite administrativo sin función clínica real, ignorando su rol activo en la decisión quirúrgica.',
  obj:'Explicar la función clínica real de la evaluación preoperatoria, más allá de un trámite administrativo.',
  ref:'Sabiston, Tratado de Cirugía, cap. 12.',
  tags:['evaluación preoperatoria','función clínica activa','optimización de condiciones']
},
{
  id:'U10-SQ-Q19', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Evaluación preoperatoria', sub:'Propósito de la clasificación ASA',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué propósito cumple la clasificación ASA en la evaluación preoperatoria?',
  ops:[
    'Proporciona un lenguaje común y estandarizado que permite comunicar rápidamente el riesgo basal de un paciente entre distintos profesionales del equipo quirúrgico',
    'La clasificación ASA predice con exactitud absoluta el resultado específico de cualquier cirugía individual, sin ninguna incertidumbre', 'Esta clasificación no tiene ninguna relación real con el riesgo general de complicaciones perioperatorias', 'La clasificación ASA solo es relevante para el anestesiólogo, sin ningún valor para el resto del equipo quirúrgico'],
  ok:0,
  clave:'Proporciona un lenguaje común y estandarizado que permite comunicar rápidamente el riesgo basal de un paciente entre distintos profesionales del equipo quirúrgico.',
  exp:'La clasificación ASA categoriza a un paciente según su estado de salud general antes de la cirugía, proporcionando un lenguaje común y estandarizado que permite comunicar rápidamente el riesgo basal de un paciente entre distintos profesionales del equipo quirúrgico.',
  no:{
    1:'Esta clasificación no predice con exactitud absoluta el resultado de una cirugía específica; se correlaciona con el riesgo general.',
    2:'La clasificación ASA sí se correlaciona de forma consistente con el riesgo general de complicaciones perioperatorias.',
    3:'Esta clasificación tiene valor para todo el equipo quirúrgico, no solo para el anestesiólogo, al comunicar el riesgo basal.'
  },
  trampa:'Sobrestimar la capacidad predictiva exacta de la clasificación ASA para un procedimiento específico, o limitar su utilidad solo al anestesiólogo.',
  obj:'Explicar el propósito de la clasificación ASA como lenguaje común de riesgo en el equipo quirúrgico.',
  ref:'Sabiston, Tratado de Cirugía, cap. 12.',
  tags:['clasificación ASA','lenguaje común de riesgo','comunicación del equipo']
},
{
  id:'U10-SQ-Q20', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Evaluación preoperatoria', sub:'Comunicación del riesgo quirúrgico real al paciente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué comunicar el riesgo quirúrgico real, sin minimizarlo ni exagerarlo, es esencial para el proceso de consentimiento informado?',
  ops:[
    'Permite que el paciente pueda tomar una decisión verdaderamente informada sobre proceder o no con una cirugía electiva, especialmente si existen alternativas razonables',
    'El riesgo quirúrgico nunca debería comunicarse al paciente, ya que solo generaría ansiedad innecesaria sin ningún beneficio real', 'Minimizar el riesgo quirúrgico real siempre es la conducta más apropiada para tranquilizar al paciente antes de operar', 'La comunicación del riesgo quirúrgico no tiene ninguna relación real con el proceso de consentimiento informado'],
  ok:0,
  clave:'Permite que el paciente pueda tomar una decisión verdaderamente informada sobre proceder o no con una cirugía electiva, especialmente si existen alternativas razonables.',
  exp:'Comunicar el riesgo quirúrgico real, sin minimizarlo ni exagerarlo, es parte esencial de que el paciente pueda tomar una decisión verdaderamente informada sobre proceder o no con una cirugía electiva, especialmente cuando existen alternativas de manejo no quirúrgico razonables.',
  no:{
    1:'El riesgo sí debe comunicarse, siendo esencial para el consentimiento informado real, no una fuente de ansiedad sin beneficio.',
    2:'Minimizar el riesgo real compromete la validez del consentimiento informado, que requiere información completa y honesta.',
    3:'La comunicación del riesgo quirúrgico tiene una relación directa y central con el proceso de consentimiento informado.'
  },
  trampa:'Asumir que minimizar el riesgo real ante el paciente es la conducta apropiada, comprometiendo la validez del consentimiento informado.',
  obj:'Explicar por qué comunicar el riesgo quirúrgico real es esencial para el consentimiento informado.',
  ref:'Sabiston, Tratado de Cirugía, cap. 12.',
  tags:['comunicación del riesgo real','consentimiento informado','decisión informada']
},
{
  id:'U10-SQ-Q21', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Evaluación preoperatoria', sub:'Componentes integrados de la evaluación preoperatoria',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué integra la evaluación preoperatoria, según lo visto en este tema?',
  ops:[
    'Toda la información de la historia clínica quirúrgica, un examen físico dirigido, y estudios complementarios seleccionados según el perfil del paciente y la complejidad del procedimiento',
    'La evaluación preoperatoria se limita exclusivamente a un examen físico general, sin ninguna consideración de la historia clínica', 'Esta evaluación nunca incluye la selección de estudios complementarios específicos según el perfil del paciente', 'La evaluación preoperatoria consiste únicamente en revisar los estudios de laboratorio, sin ningún examen físico'],
  ok:0,
  clave:'Toda la información de la historia clínica quirúrgica, un examen físico dirigido, y estudios complementarios seleccionados según el perfil del paciente y la complejidad del procedimiento.',
  exp:'La evaluación preoperatoria integra toda la información recogida en la historia clínica quirúrgica con un examen físico dirigido y estudios complementarios seleccionados según el perfil del paciente y la complejidad del procedimiento planeado.',
  no:{
    1:'Va más allá del examen físico general; integra también la historia clínica quirúrgica y estudios complementarios seleccionados.',
    2:'Sí incluye la selección de estudios complementarios específicos, adaptados al perfil del paciente y la complejidad del procedimiento.',
    3:'La evaluación preoperatoria integra tanto el examen físico como la historia clínica y los estudios complementarios, no solo uno de estos.'
  },
  trampa:'Reducir la evaluación preoperatoria a un solo componente (examen físico o estudios de laboratorio), sin reconocer su naturaleza integrada.',
  obj:'Identificar los componentes integrados que conforman la evaluación preoperatoria completa.',
  ref:'Sabiston, Tratado de Cirugía, cap. 12.',
  tags:['componentes de la evaluación preoperatoria','integración','estudios complementarios']
},
{
  id:'U10-SQ-Q22', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de la ictericia quirúrgica', sub:'Distinguir ictericia obstructiva de hepatocelular',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué distinguir entre ictericia obstructiva y hepatocelular es la primera pregunta clínica ante cualquier paciente ictérico?',
  ops:[
    'Porque determina por completo si existe un rol para la cirugía o un procedimiento endoscópico, o si el problema requiere un abordaje médico dirigido a la función hepática',
    'Esta distinción no tiene ninguna relación real con el tipo de manejo que se le ofrecerá al paciente ictérico', 'La ictericia obstructiva y la hepatocelular siempre requieren exactamente el mismo tipo de manejo, sin ninguna diferencia', 'El origen de la ictericia (obstructivo o hepatocelular) nunca puede determinarse mediante evaluación clínica inicial'],
  ok:0,
  clave:'Determina por completo si existe un rol para la cirugía o un procedimiento endoscópico, o si el problema requiere un abordaje médico dirigido a la función hepática.',
  exp:'Distinguir entre ictericia obstructiva y hepatocelular es la primera pregunta clínica ante cualquier paciente ictérico, porque determina por completo si existe un rol para la cirugía o un procedimiento endoscópico en el manejo, o si el problema requiere un abordaje médico dirigido a la función hepática en sí.',
  no:{
    1:'Esta distinción tiene una relación directa y central con el tipo de manejo apropiado para el paciente ictérico.',
    2:'Requieren manejos claramente distintos: la obstructiva puede tener solución quirúrgica o endoscópica, la hepatocelular no directamente.',
    3:'La evaluación clínica inicial, junto con estudios básicos, sí puede orientar razonablemente hacia el origen probable de la ictericia.'
  },
  trampa:'No reconocer la implicación central de distinguir entre ictericia obstructiva y hepatocelular para determinar el tipo de manejo apropiado.',
  obj:'Explicar por qué distinguir el mecanismo de la ictericia es la primera pregunta clínica relevante.',
  ref:'Sabiston, Tratado de Cirugía, cap. 54.',
  tags:['ictericia obstructiva','ictericia hepatocelular','primera pregunta clínica']
},
{
  id:'U10-SQ-Q23', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de la ictericia quirúrgica', sub:'Interpretación del signo de Courvoisier',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el signo de Courvoisier sugiere más frecuentemente una obstrucción del colédoco por una causa distinta a los cálculos biliares?',
  ops:[
    'Porque una vesícula previamente enferma por cálculos suele estar fibrosada y no se distiende de la misma forma ante la obstrucción, a diferencia de una vesícula sana comprimida desde afuera',
    'El signo de Courvoisier siempre indica con certeza absoluta la presencia de cálculos biliares como causa de la ictericia', 'Este signo describe una vesícula biliar pequeña y dolorosa, no una vesícula aumentada de tamaño e indolora', 'La palpación de una vesícula biliar aumentada de tamaño nunca tiene ninguna relación real con la causa de la obstrucción'],
  ok:0,
  clave:'Una vesícula previamente enferma por cálculos suele estar fibrosada y no se distiende de la misma forma ante la obstrucción, a diferencia de una vesícula sana comprimida desde afuera.',
  exp:'El signo de Courvoisier está clásicamente asociado con una obstrucción del colédoco por una causa distinta a los cálculos biliares (con frecuencia un tumor), porque una vesícula previamente enferma por cálculos suele estar fibrosada y no se distiende de la misma forma ante la obstrucción.',
  no:{
    1:'Es precisamente lo contrario: este signo sugiere una causa DISTINTA a los cálculos biliares, no su presencia con certeza.',
    2:'El signo de Courvoisier describe precisamente una vesícula AUMENTADA de tamaño e INDOLORA, no pequeña y dolorosa.',
    3:'La palpación de esta vesícula aumentada sí tiene una relación clínica relevante con la causa probable de la obstrucción biliar.'
  },
  trampa:'Invertir la interpretación del signo de Courvoisier, asumiendo que sugiere cálculos biliares en vez de una causa distinta como un tumor.',
  obj:'Explicar por qué el signo de Courvoisier sugiere una causa de obstrucción distinta a los cálculos biliares.',
  ref:'Sabiston, Tratado de Cirugía, cap. 54.',
  tags:['signo de Courvoisier','vesícula distendida','causa distinta a cálculos']
},
{
  id:'U10-SQ-Q24', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de la ictericia quirúrgica', sub:'Enfoque escalonado del estudio de imagen',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué estudio de imagen suele ser el primer paso razonable ante una ictericia con sospecha de causa obstructiva?',
  ops:[
    'Una ecografía abdominal, capaz de detectar dilatación de la vía biliar y, con frecuencia, la presencia de cálculos, antes de avanzar hacia estudios más invasivos',
    'El primer estudio siempre debe ser el más invasivo y costoso disponible, sin considerar alternativas menos invasivas primero', 'La ecografía abdominal nunca aporta ninguna información útil en la evaluación de una ictericia obstructiva', 'No existe ningún orden razonable para solicitar estudios de imagen ante sospecha de ictericia obstructiva'],
  ok:0,
  clave:'Una ecografía abdominal, capaz de detectar dilatación de la vía biliar y, con frecuencia, la presencia de cálculos, antes de avanzar hacia estudios más invasivos.',
  exp:'Ante una ictericia con sospecha de causa obstructiva, la semiología orienta directamente qué estudio de imagen solicitar primero: una ecografía abdominal suele ser el primer paso razonable antes de estudios más invasivos o costosos, un enfoque escalonado que empieza con lo menos invasivo.',
  no:{
    1:'Es precisamente lo contrario: se prefiere empezar con el estudio MENOS invasivo que responda la pregunta clínica, no el más invasivo.',
    2:'La ecografía abdominal sí aporta información útil, detectando dilatación de la vía biliar y frecuentemente cálculos.',
    3:'Sí existe un enfoque escalonado razonable, empezando con estudios menos invasivos antes de avanzar hacia otros más complejos.'
  },
  trampa:'Asumir que el estudio más invasivo o costoso debe solicitarse primero, en vez de seguir un enfoque escalonado desde lo menos invasivo.',
  obj:'Explicar el enfoque escalonado de estudios de imagen ante sospecha de ictericia obstructiva.',
  ref:'Sabiston, Tratado de Cirugía, cap. 54.',
  tags:['enfoque escalonado','ecografía abdominal','estudio menos invasivo primero']
},
{
  id:'U10-SQ-Q25', programa:'unirm', cuatri:10,
  esp:'Semiología Quirúrgica', tema:'Semiología de la ictericia quirúrgica', sub:'Coledocolitiasis como causa mecánica de obstrucción',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la coledocolitiasis, y cómo se relaciona con la ictericia obstructiva?',
  ops:[
    'Un cálculo biliar que migra hacia el colédoco y lo obstruye, bloqueando mecánicamente el flujo normal de bilis hacia el intestino', 'Una infección viral del hígado que nunca tiene ninguna relación real con la obstrucción mecánica de la vía biliar', 'Un tumor del páncreas que siempre es la única causa posible de cualquier obstrucción de la vía biliar', 'Una condición que exclusivamente afecta la función hepatocelular, sin ningún componente mecánico obstructivo'],
  ok:0,
  clave:'Un cálculo biliar que migra hacia el colédoco y lo obstruye, bloqueando mecánicamente el flujo normal de bilis hacia el intestino.',
  exp:'La ictericia obstructiva ocurre cuando el flujo normal de bilis se bloquea mecánicamente en algún punto de su trayecto, con frecuencia por coledocolitiasis (un cálculo biliar que migra hacia el colédoco y lo obstruye), ya introducido conceptualmente en Anatomía Patológica II.',
  no:{
    1:'La coledocolitiasis es una causa mecánica (cálculo), no una infección viral, y sí tiene relación directa con la obstrucción biliar.',
    2:'Un tumor pancreático es solo una de varias causas posibles de obstrucción; la coledocolitiasis (cálculo) es otra causa frecuente distinta.',
    3:'La coledocolitiasis es precisamente una causa MECÁNICA de obstrucción, no un problema de la función hepatocelular en sí.'
  },
  trampa:'Confundir la coledocolitiasis (causa mecánica por cálculo) con otras causas de ictericia como infección viral o disfunción hepatocelular pura.',
  obj:'Definir la coledocolitiasis y su relación mecánica con la ictericia obstructiva.',
  ref:'Sabiston, Tratado de Cirugía, cap. 54.',
  tags:['coledocolitiasis','obstrucción mecánica','cálculo biliar']
}

]);
