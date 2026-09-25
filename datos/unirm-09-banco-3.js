/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE SEMIOLOGIA CLINICA (2/2)
   Completa la ampliacion de Semiologia Clinica a 50 preguntas junto
   con unirm-09-banco-2.js. Esta parte cubre piel y faneras,
   semiologia ganglionar, registro/historia orientada por problemas,
   semiologia urinaria, endocrina, interpretacion de signos vitales
   e historia clinica en situaciones especiales (temas 9-15).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== SEMIOLOGIA CLINICA ===================== */
{
  id:'U9-SC-Q31', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Piel y faneras', sub:'Lesión primaria vs. secundaria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre una lesión primaria y una lesión secundaria de la piel?',
  ops:[
    'La primaria aparece directamente por el proceso patológico sin modificar (mácula, pápula, vesícula); la secundaria resulta de la evolución o manipulación de una primaria (costra, escama, úlcera)',
    'Ambos términos son exactamente sinónimos',
    'La secundaria siempre aparece antes que la primaria',
    'Ninguna lesión de piel puede clasificarse como primaria o secundaria'
  ],
  ok:0,
  clave:'La primaria aparece directamente por el proceso patológico; la secundaria resulta de la evolución o manipulación de una primaria.',
  exp:'Una lesión primaria es la que aparece directamente por el proceso patológico, sin haber sido modificada: una mácula, una pápula, una vesícula, entre otras. Una lesión secundaria es el resultado de la evolución de una lesión primaria, o de manipularla: una costra (tras romperse una vesícula), una escama, una úlcera. Distinguir entre ambas ayuda a reconstruir la cronología del proceso.',
  no:{
    1:'Son conceptos claramente distintos según el momento y el origen de la lesión en la evolución del proceso patológico.',
    2:'Es al revés: la primaria aparece PRIMERO (por el proceso patológico directo), y la secundaria resulta de su evolución posterior.',
    3:'Las lesiones de piel sí pueden y se clasifican sistemáticamente como primarias o secundarias en la práctica dermatológica y clínica general.'
  },
  trampa:'Invertir el orden cronológico entre lesión primaria (aparece primero) y lesión secundaria (resulta de la evolución de la primaria).',
  obj:'Distinguir una lesión primaria de una secundaria en la semiología de la piel.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 5.',
  tags:['lesión primaria','lesión secundaria','mácula','úlcera']
},
{
  id:'U9-SC-Q32', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Piel y faneras', sub:'Cianosis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué mecanismo fisiológico explica la cianosis (coloración azulada de labios y dedos)?',
  ops:[
    'Hemoglobina insuficientemente oxigenada, retomando la curva de disociación de la hemoglobina ya vista en fisiología',
    'Acumulación de bilirrubina en la piel', 'Vasodilatación periférica excesiva', 'Exceso de melanina en la piel'],
  ok:0,
  clave:'La cianosis se explica por hemoglobina insuficientemente oxigenada.',
  exp:'La cianosis (coloración azulada, típicamente de labios y dedos) se explica por hemoglobina insuficientemente oxigenada, retomando la curva de disociación de la hemoglobina ya vista en Fisiología II -cuando una proporción suficiente de hemoglobina circula sin oxígeno unido, la sangre y los tejidos periféricos adquieren esa coloración azulada característica.',
  no:{
    1:'La acumulación de bilirrubina en la piel explica la ictericia (coloración amarillenta), no la cianosis.',
    2:'La cianosis no se explica por vasodilatación; de hecho, con frecuencia se asocia a vasoconstricción periférica en el contexto de hipoxia.',
    3:'El exceso de melanina no está relacionado con la cianosis; es un pigmento distinto sin relación con la oxigenación de la hemoglobina.'
  },
  trampa:'Confundir el mecanismo de la cianosis (hemoglobina desoxigenada) con el de otros cambios de coloración de la piel, como la ictericia.',
  obj:'Explicar el mecanismo fisiológico de la cianosis.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 5.',
  tags:['cianosis','hemoglobina desoxigenada','curva de disociación']
},
{
  id:'U9-SC-Q33', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Piel y faneras', sub:'Comunicación de hallazgos entre colegas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es importante describir con precisión una lesión de piel (tipo, tamaño, color, forma, distribución) en vez de solo decir "una mancha"?',
  ops:[
    'Porque permite a otro clínico "ver" la lesión sin haberla examinado directamente, facilitando la comunicación clínica precisa entre colegas',
    'La descripción precisa no tiene ninguna utilidad práctica real',
    'Solo importa el color de la lesión, ningún otro atributo es relevante',
    'Una fotografía siempre reemplaza por completo la necesidad de describir la lesión'
  ],
  ok:0,
  clave:'La descripción precisa permite a otro clínico "ver" la lesión sin examinarla directamente.',
  exp:'Describir correctamente si una lesión es primaria o secundaria, junto con su tamaño, color, forma y distribución sobre el cuerpo, es lo que permite a otro clínico "ver" la lesión sin haberla examinado directamente -una habilidad especialmente central en dermatología, pero útil en cualquier examen de piel, y necesaria cuando no siempre se dispone de una fotografía o de la posibilidad de que otro colega examine directamente al paciente.',
  no:{
    1:'La descripción precisa sí tiene una utilidad práctica clara: comunicar hallazgos clínicos de forma efectiva entre colegas.',
    2:'Además del color, importan también el tipo de lesión, tamaño, forma y distribución -todos atributos relevantes para la descripción completa.',
    3:'Una fotografía es útil, pero no siempre está disponible ni sustituye la capacidad de describir con lenguaje clínico preciso lo observado.'
  },
  trampa:'Subestimar el valor comunicativo de una descripción precisa de las lesiones de piel, reduciéndolo a un solo atributo como el color.',
  obj:'Explicar la importancia de describir con precisión las lesiones de piel para la comunicación clínica.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 5.',
  tags:['descripción de lesiones','comunicación clínica','dermatología']
},
{
  id:'U9-SC-Q34', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología ganglionar y adenopatías', sub:'Ganglio benigno vs. maligno',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta un ganglio cervical duro, no doloroso a la palpación, y fijo a planos profundos.',
  enunciado:'¿Qué característica de este ganglio genera más preocupación por un proceso maligno?',
  ops:[
    'La combinación de consistencia dura, ausencia de dolor y fijación a planos profundos', 'El hecho de que esté en la región cervical, sin importar sus demás características', 'Un ganglio doloroso siempre es más preocupante que uno indoloro', 'El tamaño es la única característica relevante para sospechar malignidad'],
  ok:0,
  clave:'La combinación de consistencia dura, ausencia de dolor y fijación a planos profundos es el patrón que más preocupa por malignidad.',
  exp:'Un ganglio duro, no doloroso, fijo a planos profundos, sugiere más preocupación por un proceso maligno (infiltración tumoral, ya sea un cáncer del propio ganglio o metástasis de otro sitio) -a diferencia de un ganglio blando, doloroso y móvil, que sugiere más frecuentemente una causa inflamatoria o infecciosa reciente. Es la combinación de estas tres características, no una sola aislada, lo que orienta la sospecha.',
  no:{
    1:'La localización cervical por sí sola no determina malignidad; importa más la combinación de consistencia, dolor y movilidad.',
    2:'Es al revés: un ganglio doloroso sugiere más frecuentemente causa inflamatoria/infecciosa benigna, mientras que uno indoloro genera más preocupación por malignidad.',
    3:'El tamaño es solo una característica más; la consistencia, el dolor y la movilidad son igual o más relevantes para la sospecha de malignidad.'
  },
  trampa:'Fijarse en una sola característica del ganglio (como el tamaño o la localización) en vez de reconocer el patrón combinado que orienta la sospecha de malignidad.',
  obj:'Identificar el patrón de características ganglionares que más orienta hacia un proceso maligno.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 8.',
  tags:['adenopatía','ganglio duro','proceso maligno','fijación a planos profundos']
},
{
  id:'U9-SC-Q35', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología ganglionar y adenopatías', sub:'Territorio de drenaje ganglionar',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta una adenopatía inguinal palpable.',
  enunciado:'¿Hacia qué territorio orienta esta localización, según el drenaje linfático de esa cadena ganglionar?',
  ops:['Miembro inferior o genitales', 'Cabeza, cuello o faringe', 'Brazo o mama', 'La localización ganglionar no orienta hacia ningún territorio específico'],
  ok:0,
  clave:'Una adenopatía inguinal orienta hacia el territorio del miembro inferior o los genitales.',
  exp:'La cadena ganglionar donde se encuentra la adenopatía orienta directamente hacia el territorio que esa cadena drena: una adenopatía inguinal apunta hacia el miembro inferior o los genitales, retomando directamente el drenaje linfático ya estudiado en Anatomía I y II. Examinar una adenopatía sin pensar en qué territorio drena esa cadena es perder la mitad de la información que ese hallazgo puede ofrecer.',
  no:{
    1:'Cabeza, cuello o faringe corresponden al drenaje de la cadena cervical, no de la inguinal.',
    2:'Brazo o mama corresponden al drenaje de la cadena axilar, no de la inguinal.',
    3:'La localización de la adenopatía sí orienta directamente hacia el territorio de drenaje de esa cadena ganglionar específica.'
  },
  trampa:'No conocer el territorio de drenaje específico de cada cadena ganglionar (axilar, cervical, inguinal) y confundirlos entre sí.',
  obj:'Identificar el territorio de drenaje correspondiente a una adenopatía inguinal.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 8.',
  tags:['cadena ganglionar','drenaje linfático','adenopatía inguinal']
},
{
  id:'U9-SC-Q36', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología ganglionar y adenopatías', sub:'Ganglio reactivo a infección',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué patrón de características ganglionares sugiere más frecuentemente una causa inflamatoria o infecciosa reciente?',
  ops:['Ganglio blando, doloroso y móvil', 'Ganglio duro, indoloro y fijo', 'Un ganglio nunca puede reflejar una causa infecciosa', 'Solo el tamaño del ganglio determina si la causa es infecciosa'],
  ok:0,
  clave:'Un ganglio blando, doloroso y móvil sugiere más frecuentemente una causa inflamatoria o infecciosa reciente.',
  exp:'Un ganglio blando, doloroso y móvil sugiere más frecuentemente una causa inflamatoria o infecciosa reciente: el ganglio está reaccionando activamente, filtrando la infección, como se vio en Inmunología. Este patrón contrasta con el ganglio duro, indoloro y fijo, que genera más preocupación por un proceso maligno.',
  no:{
    1:'Ese es el patrón que sugiere más preocupación por malignidad, no una causa infecciosa reciente.',
    2:'Un ganglio agrandado sí puede y frecuentemente refleja una respuesta reactiva a una infección cercana.',
    3:'La consistencia, el dolor y la movilidad son al menos tan relevantes como el tamaño para orientar la causa probable.'
  },
  trampa:'Invertir el patrón de características (blando/doloroso/móvil vs. duro/indoloro/fijo) asociado a causa infecciosa frente a maligna.',
  obj:'Reconocer el patrón de características ganglionares asociado a una causa infecciosa reciente.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 8.',
  tags:['adenopatía','ganglio reactivo','infección','inmunología']
},
{
  id:'U9-SC-Q37', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Registro e historia clínica orientada por problemas', sub:'Componentes del SOAP',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué significan las cuatro letras del formato SOAP usado en las notas clínicas?',
  ops:[
    'Subjetivo, Objetivo, Análisis (Assessment) y Plan',
    'Signos, Observaciones, Antecedentes y Pronóstico', 'Síntomas, Origen, Anamnesis y Prescripción', 'El SOAP no corresponde a ningún acrónimo específico'],
  ok:0,
  clave:'SOAP significa Subjetivo, Objetivo, Análisis (Assessment) y Plan.',
  exp:'El formato SOAP organiza cada nota clínica en cuatro partes: Subjetivo (lo que el paciente cuenta, la anamnesis), Objetivo (los hallazgos del examen físico y de los estudios), Análisis o Assessment (la interpretación clínica de esos datos, el diagnóstico o los diagnósticos diferenciales) y Plan (qué se va a hacer: más estudios, tratamiento, seguimiento).',
  no:{
    1:'Esas palabras no corresponden al acrónimo SOAP, que tiene un significado específico y estandarizado en la documentación clínica.',
    2:'El acrónimo correcto es Subjetivo, Objetivo, Análisis y Plan, no esas otras palabras.',
    3:'El SOAP sí corresponde a un acrónimo específico y ampliamente usado en la documentación clínica.'
  },
  trampa:'Inventar o confundir el significado de las siglas SOAP con otros términos clínicos parecidos.',
  obj:'Recordar el significado del acrónimo SOAP usado en la documentación clínica.',
  ref:'Argente y Álvarez, Semiología Médica, cap. 2.',
  tags:['SOAP','nota clínica','formato de documentación']
},
{
  id:'U9-SC-Q38', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Registro e historia clínica orientada por problemas', sub:'Historia orientada por problemas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ventaja ofrece organizar el expediente de un paciente mediante la historia orientada por problemas, en vez de organizarlo puramente cronológicamente?',
  ops:[
    'Facilita seguir la evolución de cada condición por separado en un paciente con varias enfermedades a la vez',
    'No ofrece ninguna ventaja real sobre el orden cronológico simple',
    'Elimina por completo la necesidad de registrar la fecha de cada nota',
    'Solo es útil en pacientes con una única enfermedad'
  ],
  ok:0,
  clave:'Facilita seguir por separado la evolución de cada condición en un paciente con varias enfermedades a la vez.',
  exp:'La historia orientada por problemas organiza el expediente completo de un paciente alrededor de una lista explícita de sus problemas de salud (activos y resueltos), en vez de organizarlo cronológicamente sin más: cada nota puede referirse a un problema específico de esa lista, lo que facilita seguir la evolución de cada condición por separado en un paciente con varias enfermedades a la vez.',
  no:{
    1:'Sí ofrece una ventaja real y bien reconocida: facilitar el seguimiento independiente de cada problema de salud.',
    2:'La fecha sigue siendo relevante en cada nota; la historia orientada por problemas organiza el CONTENIDO por problema, no elimina la cronología dentro de cada uno.',
    3:'Es especialmente útil en pacientes con MÚLTIPLES enfermedades a la vez, no exclusivamente en pacientes con una sola condición.'
  },
  trampa:'Subestimar la ventaja específica de la historia orientada por problemas para pacientes con múltiples condiciones simultáneas.',
  obj:'Explicar la ventaja de organizar el expediente mediante historia orientada por problemas.',
  ref:'Argente y Álvarez, Semiología Médica, cap. 2.',
  tags:['historia orientada por problemas','expediente clínico','continuidad de atención']
},
{
  id:'U9-SC-Q39', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Registro e historia clínica orientada por problemas', sub:'Nota de ingreso',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la nota de ingreso, y qué función cumple para las evoluciones clínicas posteriores?',
  ops:[
    'Es el documento inicial y más completo al hospitalizar a un paciente (anamnesis completa, examen físico completo, plan inicial), y sirve de punto de referencia para las evoluciones diarias posteriores',
    'Es un resumen breve escrito solo al momento del alta hospitalaria',
    'La nota de ingreso no tiene ninguna relación con las evoluciones clínicas posteriores',
    'Solo incluye los signos vitales del paciente, sin ningún otro dato'
  ],
  ok:0,
  clave:'La nota de ingreso es el documento inicial y más completo, y sirve de punto de referencia para las evoluciones posteriores.',
  exp:'La nota de ingreso es el documento inicial y más completo, escrito al momento de hospitalizar a un paciente, que reúne la anamnesis completa, el examen físico completo, y el plan inicial, sirviendo de punto de referencia para todas las evoluciones diarias que se escribirán después, típicamente en formato SOAP abreviado.',
  no:{
    1:'La nota de ingreso se escribe al INICIO de la hospitalización, no al alta; el resumen de egreso es un documento distinto.',
    2:'La nota de ingreso sí tiene una relación directa y fundamental: es el punto de referencia de todas las evoluciones posteriores.',
    3:'La nota de ingreso incluye mucho más que signos vitales: anamnesis completa, examen físico completo y plan inicial.'
  },
  trampa:'Confundir la nota de ingreso con la nota de egreso, o subestimar su función como referencia para las evoluciones posteriores.',
  obj:'Definir la nota de ingreso y su función como referencia para las evoluciones clínicas posteriores.',
  ref:'Argente y Álvarez, Semiología Médica, cap. 2.',
  tags:['nota de ingreso','evolución clínica','hospitalización']
},
{
  id:'U9-SC-Q40', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología urinaria', sub:'Poliuria vs. oliguria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es especialmente importante no confundir los términos poliuria y oliguria?',
  ops:[
    'Porque son términos OPUESTOS (volumen aumentado vs. disminuido) y confundirlos invierte por completo la interpretación clínica del caso',
    'Ambos términos son intercambiables y significan exactamente lo mismo',
    'La poliuria y la oliguria no tienen ninguna relación con el volumen de orina',
    'Solo uno de los dos términos es clínicamente relevante'
  ],
  ok:0,
  clave:'Son términos opuestos (volumen aumentado vs. disminuido); confundirlos invierte la interpretación clínica.',
  exp:'La poliuria es un volumen de orina anormalmente AUMENTADO en 24 horas; la oliguria es un volumen anormalmente DISMINUIDO -son términos opuestos, y confundirlos invierte por completo la interpretación clínica del caso: la poliuria puede orientar hacia diabetes mellitus o insípida, mientras que la oliguria puede orientar hacia deshidratación severa o insuficiencia renal aguda, condiciones con manejos completamente distintos.',
  no:{
    1:'Son precisamente términos opuestos, no intercambiables; su confusión invertiría la interpretación clínica del caso.',
    2:'Ambos términos se refieren directamente al volumen de orina, en direcciones opuestas (aumentado y disminuido respectivamente).',
    3:'Ambos términos son clínicamente relevantes, cada uno orientando hacia un conjunto distinto de posibles causas.'
  },
  trampa:'Tratar poliuria y oliguria como sinónimos o como términos de relevancia clínica desigual, sin reconocer que son opuestos con implicaciones clínicas distintas.',
  obj:'Explicar por qué es clínicamente crítico distinguir correctamente poliuria de oliguria.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 18.',
  tags:['poliuria','oliguria','volumen urinario','diabetes mellitus']
},
{
  id:'U9-SC-Q41', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología urinaria', sub:'Puñopercusión renal positiva',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con fiebre y dolor lumbar presenta puñopercusión renal positiva en el lado derecho.',
  enunciado:'¿Qué sugiere esta combinación de hallazgos, y en qué se diferencia de una infección urinaria baja?',
  ops:[
    'Sugiere infección urinaria ALTA (pielonefritis), que compromete al riñón y generalmente requiere un manejo más agresivo que una infección baja limitada a la vejiga',
    'Sugiere exclusivamente una infección urinaria baja, sin compromiso renal',
    'La puñopercusión renal no tiene ninguna utilidad diagnóstica',
    'Este patrón es idéntico en presentación clínica a una infección urinaria baja simple'
  ],
  ok:0,
  clave:'Fiebre + dolor lumbar + puñopercusión positiva sugiere infección urinaria alta (pielonefritis), que requiere manejo más agresivo.',
  exp:'La puñopercusión renal positiva, combinada con fiebre y dolor lumbar, sugiere un proceso inflamatorio o infeccioso que compromete al riñón o a su cápsula (pielonefritis), a diferencia de una infección urinaria baja limitada a la vejiga, que típicamente no da ese dolor específico ni fiebre alta. Distinguir por la clínica una infección alta de una baja cambia directamente la conducta, porque la primera generalmente requiere un manejo más agresivo.',
  no:{
    1:'Es precisamente lo contrario: la combinación de fiebre, dolor lumbar y puñopercusión positiva sugiere compromiso renal (infección ALTA), no una infección baja aislada.',
    2:'La puñopercusión renal sí tiene una utilidad diagnóstica clara: distinguir infección urinaria alta de baja.',
    3:'El patrón clínico es distinto: la infección baja típicamente no cursa con fiebre alta ni puñopercusión positiva, a diferencia de la alta.'
  },
  trampa:'No distinguir el patrón clínico de infección urinaria alta (con fiebre, dolor lumbar y puñopercusión positiva) del de una infección baja limitada a la vejiga.',
  obj:'Interpretar la combinación de fiebre, dolor lumbar y puñopercusión positiva como infección urinaria alta.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 18.',
  tags:['puñopercusión renal','pielonefritis','infección urinaria alta']
},
{
  id:'U9-SC-Q42', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología urinaria', sub:'Hematuria',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la hematuria, y qué tan específica es su localización dentro del tracto urinario?',
  ops:[
    'Presencia de sangre en la orina (macroscópica o microscópica), cuyo origen puede estar en cualquier punto del tracto urinario, desde el riñón hasta la uretra',
    'Es sinónimo exacto de disuria', 'La hematuria siempre se origina exclusivamente en el riñón', 'La hematuria nunca puede detectarse solo por laboratorio'],
  ok:0,
  clave:'La hematuria es sangre en la orina, cuyo origen puede estar en cualquier punto del tracto urinario, sin localizar por sí sola el problema.',
  exp:'La hematuria es la presencia de sangre en la orina, visible a simple vista (macroscópica) o detectable solo por laboratorio (microscópica), y su origen puede estar en cualquier punto del tracto urinario, desde el riñón hasta la uretra -a diferencia de la disuria, que orienta específicamente hacia la vía urinaria baja, la hematuria por sí sola no localiza el problema.',
  no:{
    1:'La hematuria (sangre en orina) y la disuria (dolor/ardor al orinar) son conceptos distintos, no sinónimos.',
    2:'La hematuria puede originarse en cualquier punto del tracto urinario, no exclusivamente en el riñón.',
    3:'La hematuria sí puede ser exclusivamente microscópica, detectable solo por laboratorio, sin ser visible a simple vista.'
  },
  trampa:'Confundir la hematuria con la disuria, o asumir que siempre tiene un origen renal específico.',
  obj:'Definir la hematuria y explicar por qué no localiza específicamente el problema dentro del tracto urinario.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 18.',
  tags:['hematuria','tracto urinario','disuria']
},
{
  id:'U9-SC-Q43', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología endocrina', sub:'Mixedema vs. edema común',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica distingue al mixedema del edema común (como el de la insuficiencia cardíaca)?',
  ops:[
    'El mixedema NO deja fóvea al presionar (a diferencia del edema común), por acumulación de sustancias específicas en la dermis',
    'El mixedema y el edema común son exactamente el mismo hallazgo clínico',
    'El mixedema siempre deja fóvea marcada, más que el edema común',
    'El mixedema solo ocurre en las piernas, nunca en otras zonas'
  ],
  ok:0,
  clave:'El mixedema no deja fóvea al presionar, a diferencia del edema común, por acumulación de sustancias específicas en la dermis.',
  exp:'El mixedema es una hinchazón particular de la piel, de consistencia pastosa y que NO deja fóvea al presionar (a diferencia del edema común ya visto en semiología cardiovascular), típica del hipotiroidismo severo, por acumulación de sustancias específicas en la dermis. La ausencia de fóvea es precisamente lo que lo distingue del edema por insuficiencia cardíaca u otras causas más comunes de hinchazón.',
  no:{
    1:'Son hallazgos clínicos distintos, con mecanismos y presentación diferentes, aunque ambos impliquen hinchazón de tejidos.',
    2:'Es al revés: el edema común deja fóvea al presionar, y el mixedema NO la deja, no al revés.',
    3:'El mixedema no se limita a las piernas; puede afectar otras zonas de la piel, especialmente en el hipotiroidismo severo.'
  },
  trampa:'Confundir el mixedema con el edema común, o invertir cuál de los dos deja fóvea al presionar.',
  obj:'Distinguir el mixedema del edema común según la presencia o ausencia de fóvea.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 6.',
  tags:['mixedema','hipotiroidismo','fóvea','edema']
},
{
  id:'U9-SC-Q44', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología endocrina', sub:'Acantosis nigricans',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Con qué trastorno metabólico se asocia frecuentemente la acantosis nigricans?',
  ops:['Resistencia a la insulina', 'Hipotiroidismo severo', 'Exceso crónico de cortisol', 'Deficiencia de vitamina D'],
  ok:0,
  clave:'La acantosis nigricans se asocia con frecuencia a resistencia a la insulina.',
  exp:'La acantosis nigricans es un oscurecimiento y engrosamiento aterciopelado de la piel, típicamente en el cuello y las axilas, asociado con frecuencia a resistencia a la insulina, retomando el tema ya visto en Fisiopatología de la diabetes mellitus. Es un signo visible sin necesitar ningún instrumento que puede orientar tempranamente hacia ese trastorno metabólico.',
  no:{
    1:'El hipotiroidismo severo se asocia más típicamente al mixedema, no a la acantosis nigricans.',
    2:'El exceso crónico de cortisol se asocia al hábito cushingoide, no a la acantosis nigricans.',
    3:'La deficiencia de vitamina D no es la asociación clásica de la acantosis nigricans, que se relaciona con resistencia a la insulina.'
  },
  trampa:'Confundir la acantosis nigricans con otros signos endocrinos visibles, como el mixedema o el hábito cushingoide, que se asocian a trastornos hormonales distintos.',
  obj:'Asociar la acantosis nigricans con la resistencia a la insulina.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 6.',
  tags:['acantosis nigricans','resistencia a la insulina','signo endocrino']
},
{
  id:'U9-SC-Q45', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Semiología endocrina', sub:'Hábito cushingoide',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué cambios corporales describe el hábito cushingoide, y con qué exceso hormonal se relaciona?',
  ops:[
    'Redistribución de la grasa hacia la cara ("de luna llena") y el tronco, con adelgazamiento relativo de brazos y piernas, por exceso crónico de cortisol',
    'Aumento visible de la glándula tiroides, sin relación con el cortisol',
    'Protrusión anormal de los globos oculares, asociada a hipertiroidismo',
    'Oscurecimiento aterciopelado de la piel en cuello y axilas'
  ],
  ok:0,
  clave:'El hábito cushingoide describe redistribución de grasa hacia cara y tronco con adelgazamiento de extremidades, por exceso crónico de cortisol.',
  exp:'El hábito cushingoide describe un conjunto de cambios corporales característicos del exceso crónico de cortisol: redistribución de la grasa hacia la cara (cara "de luna llena") y el tronco, con adelgazamiento relativo de los brazos y piernas, entre otros rasgos.',
  no:{
    1:'El aumento de tamaño de la tiroides es el bocio, un signo distinto del hábito cushingoide.',
    2:'La protrusión ocular es el exoftalmos, asociado a hipertiroidismo, no al hábito cushingoide relacionado con cortisol.',
    3:'Esa descripción corresponde a la acantosis nigricans, asociada a resistencia a la insulina, no al hábito cushingoide.'
  },
  trampa:'Confundir el hábito cushingoide con otros signos endocrinos (bocio, exoftalmos, acantosis nigricans) que se asocian a trastornos hormonales distintos.',
  obj:'Describir el hábito cushingoide y su relación con el exceso crónico de cortisol.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 6.',
  tags:['hábito cushingoide','cortisol','redistribución de grasa']
},
{
  id:'U9-SC-Q46', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Interpretación de signos vitales', sub:'Patrón combinado en SIRS',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente presenta simultáneamente fiebre, taquicardia y taquipnea.',
  enunciado:'¿Qué enseña este caso sobre cómo interpretar correctamente los signos vitales?',
  ops:[
    'Que el patrón COMBINADO de varios signos vitales alterados cuenta una historia mucho más específica (aquí, sugiriendo un cuadro infeccioso con respuesta inflamatoria sistémica) que cualquiera de ellos por separado',
    'Que cada signo vital debe interpretarse siempre de forma completamente aislada, sin relacionarlo con los demás',
    'Que la combinación de estos tres signos no tiene ningún significado clínico coherente',
    'Que solo la fiebre es relevante en esta combinación, y los otros dos signos pueden ignorarse'
  ],
  ok:0,
  clave:'El patrón combinado (fiebre + taquicardia + taquipnea) sugiere un cuadro infeccioso con respuesta inflamatoria sistémica, más específico que cada signo aislado.',
  exp:'Un paciente con fiebre, taquicardia y taquipnea juntas sugiere, de forma coherente, un cuadro infeccioso con respuesta inflamatoria sistémica (SIRS) -cada signo por separado podría tener otras explicaciones, pero la combinación de los tres, presentándose juntos, cuenta una historia mucho más específica que cualquiera de ellos de forma aislada. La regla práctica es preguntarse qué mecanismo fisiológico único podría explicar TODOS los signos alterados a la vez.',
  no:{
    1:'Es precisamente lo contrario: el patrón combinado, no la interpretación aislada de cada signo, es lo que da la información más específica.',
    2:'La combinación sí tiene un significado clínico coherente y reconocible (respuesta inflamatoria sistémica), no es un hallazgo sin sentido.',
    3:'Los tres signos son relevantes en conjunto; ignorar dos de ellos perdería precisamente la información que da la combinación completa.'
  },
  trampa:'Interpretar cada signo vital de forma aislada, sin reconocer que el patrón combinado ofrece información más específica que cualquiera de ellos por separado.',
  obj:'Aplicar el principio de interpretación combinada de signos vitales en un caso de SIRS.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 2.',
  tags:['signos vitales','SIRS','patrón combinado','fiebre']
},
{
  id:'U9-SC-Q47', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Interpretación de signos vitales', sub:'Taquipnea compensatoria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la taquipnea puede reflejar tanto un problema respiratorio directo como una respuesta compensatoria de otro sistema?',
  ops:[
    'Porque, por ejemplo, ante una acidosis metabólica, el cuerpo aumenta la frecuencia respiratoria para eliminar CO2 y compensar el trastorno ácido-base',
    'La taquipnea siempre indica exclusivamente un problema pulmonar directo',
    'La taquipnea nunca tiene relación con el equilibrio ácido-base',
    'La frecuencia respiratoria no puede ser una respuesta compensatoria bajo ninguna circunstancia'
  ],
  ok:0,
  clave:'Ante acidosis metabólica, la taquipnea compensa eliminando CO2, sin que el problema primario sea pulmonar.',
  exp:'La taquipnea puede reflejar tanto un problema respiratorio directo como una respuesta compensatoria; por ejemplo, ante una acidosis metabólica (retomando la fisiopatología del equilibrio ácido-base ya vista), el cuerpo aumenta la frecuencia respiratoria para eliminar más CO2 y así compensar parcialmente el trastorno ácido-base, aunque el problema primario no sea pulmonar.',
  no:{
    1:'No siempre indica un problema pulmonar directo; puede ser una respuesta compensatoria de otro sistema, como en la acidosis metabólica.',
    2:'La taquipnea sí tiene una relación directa con el equilibrio ácido-base, precisamente como mecanismo compensatorio.',
    3:'La frecuencia respiratoria sí puede actuar como mecanismo compensatorio de trastornos no respiratorios, como la acidosis metabólica.'
  },
  trampa:'Asumir que la taquipnea siempre indica un problema pulmonar directo, sin considerar su papel como mecanismo compensatorio de otros trastornos, como la acidosis metabólica.',
  obj:'Explicar el mecanismo de la taquipnea como respuesta compensatoria ante una acidosis metabólica.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 2.',
  tags:['taquipnea','acidosis metabólica','mecanismo compensatorio']
},
{
  id:'U9-SC-Q48', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Interpretación de signos vitales', sub:'Sistema nervioso autónomo y frecuencia cardíaca',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué sistema fisiológico influye directamente sobre la frecuencia cardíaca, explicando la taquicardia y la bradicardia?',
  ops:['El sistema nervioso autónomo', 'Exclusivamente el sistema digestivo', 'El sistema tegumentario (piel)', 'La frecuencia cardíaca no está influida por ningún sistema regulador'],
  ok:0,
  clave:'La taquicardia y la bradicardia reflejan, entre otras causas, la actividad del sistema nervioso autónomo sobre el corazón.',
  exp:'La taquicardia (frecuencia cardíaca por encima de lo normal) y la bradicardia (por debajo) reflejan, entre otras causas, la actividad del sistema nervioso autónomo sobre el corazón, ya visto en Fisiología I y II -el sistema simpático tiende a aumentar la frecuencia, y el parasimpático (vía nervio vago) tiende a disminuirla.',
  no:{
    1:'El sistema digestivo no es el regulador directo de la frecuencia cardíaca; esa función corresponde al sistema nervioso autónomo.',
    2:'El sistema tegumentario (piel) no regula la frecuencia cardíaca de forma directa.',
    3:'La frecuencia cardíaca sí está regulada por un sistema fisiológico bien identificado: el sistema nervioso autónomo.'
  },
  trampa:'No identificar al sistema nervioso autónomo como el regulador directo de la frecuencia cardíaca, confundiéndolo con otros sistemas fisiológicos.',
  obj:'Identificar al sistema nervioso autónomo como regulador de la frecuencia cardíaca.',
  ref:'Surós, Semiología Médica y Técnica Exploratoria, cap. 2.',
  tags:['taquicardia','bradicardia','sistema nervioso autónomo']
},
{
  id:'U9-SC-Q49', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Historia clínica en situaciones especiales', sub:'Heteroanamnesis',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente llega inconsciente a la sala de emergencias, traído por un familiar.',
  enunciado:'¿Qué estrategia debe usarse para obtener información clínica relevante en esta situación, y qué datos se priorizan?',
  ops:[
    'Heteroanamnesis (obtener la historia a través de un tercero, como el familiar), priorizando identificación, medicamentos, alergias conocidas y circunstancias del hallazgo',
    'Esperar a que el paciente recupere la conciencia antes de recoger cualquier dato',
    'La anamnesis tradicional dirigida al paciente sigue siendo la única fuente válida de información',
    'No es posible obtener ninguna información útil si el paciente está inconsciente'
  ],
  ok:0,
  clave:'Se usa heteroanamnesis (a través de un tercero), priorizando identificación, medicamentos, alergias y circunstancias del hallazgo.',
  exp:'Ante un paciente inconsciente, la anamnesis tradicional no es posible, y la evaluación se apoya en el examen físico objetivo y en la heteroanamnesis: obtener la historia clínica a través de un tercero (un familiar, un acompañante, personal de emergencias). En estas situaciones, ciertos datos básicos se vuelven prioritarios: identificación del paciente, medicamentos que usa, alergias conocidas, y las circunstancias en que fue encontrado -información decisiva para el manejo inmediato.',
  no:{
    1:'Esperar a que el paciente recupere la conciencia podría retrasar peligrosamente decisiones de manejo urgentes; se debe actuar con la información disponible de inmediato.',
    2:'La anamnesis tradicional dirigida al paciente no es posible en este caso; por eso se recurre a la heteroanamnesis como alternativa válida.',
    3:'Sí es posible obtener información útil y clínicamente relevante mediante la heteroanamnesis, aunque limitada respecto a una anamnesis directa completa.'
  },
  trampa:'Asumir que sin la anamnesis tradicional directa no puede obtenerse ninguna información útil, sin reconocer el valor de la heteroanamnesis en situaciones de paciente inconsciente.',
  obj:'Aplicar la heteroanamnesis y priorizar datos clave ante un paciente inconsciente.',
  ref:'Argente y Álvarez, Semiología Médica, cap. 3.',
  tags:['heteroanamnesis','paciente inconsciente','datos prioritarios']
},
{
  id:'U9-SC-Q50', programa:'unirm', cuatri:9,
  esp:'Semiología Clínica', tema:'Historia clínica en situaciones especiales', sub:'Ritmo de la entrevista en urgencias',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué se diferencia el ritmo de la entrevista clínica en un contexto de urgencia respecto a una consulta programada?',
  ops:[
    'Prioriza obtener rápidamente la información que cambia el manejo inmediato, dejando la exploración exhaustiva y ordenada de cada antecedente para después de estabilizar al paciente',
    'El ritmo es exactamente el mismo en ambos contextos, sin ninguna diferencia',
    'En urgencias nunca se recoge ningún antecedente del paciente',
    'La entrevista en urgencias siempre es más larga y detallada que una consulta programada'
  ],
  ok:0,
  clave:'En urgencias se prioriza la información que cambia el manejo inmediato, dejando la exploración exhaustiva para después de estabilizar.',
  exp:'La entrevista en urgencias tiene un ritmo distinto al de una consulta programada: prioriza obtener rápidamente la información que cambia el manejo inmediato (el motivo de consulta y los datos de mayor riesgo) por encima de la exploración exhaustiva y ordenada de cada antecedente, que puede completarse después, una vez que la situación esté estabilizada. La estructura ideal de la historia clínica es el punto de partida, pero la práctica real exige adaptarla según la situación.',
  no:{
    1:'El ritmo es claramente distinto: en urgencias se prioriza la información urgente sobre la exploración exhaustiva, a diferencia de una consulta programada.',
    2:'En urgencias sí se recogen antecedentes relevantes, aunque de forma más selectiva y priorizada que en una consulta programada.',
    3:'Es al revés: la entrevista en urgencias típicamente es más breve y enfocada en lo urgente, no más larga y detallada que una consulta programada.'
  },
  trampa:'Asumir que el ritmo y la profundidad de la entrevista clínica son iguales en cualquier contexto, sin adaptarse a la urgencia de la situación.',
  obj:'Explicar cómo se adapta el ritmo de la entrevista clínica en un contexto de urgencia.',
  ref:'Argente y Álvarez, Semiología Médica, cap. 3.',
  tags:['entrevista en urgencias','priorización clínica','manejo inmediato']
}

]);
