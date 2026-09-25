/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 9, TANDA DE ANATOMIA PATOLOGICA I (2/2)
   Completa la ampliacion de Anatomia Patologica I a 50 preguntas
   junto con unirm-09-banco-4.js. Esta parte cubre adaptaciones
   celulares, neoplasias, carcinogenesis, reparacion tisular,
   amiloidosis y patologia ambiental (temas 8-13).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== ANATOMIA PATOLOGICA I ===================== */
{
  id:'U9-AP-Q31', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Adaptaciones celulares', sub:'Hipertrofia vs. hiperplasia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre hipertrofia e hiperplasia como adaptaciones celulares?',
  ops:[
    'La hipertrofia es el aumento del TAMAÑO de las células individuales; la hiperplasia es el aumento del NÚMERO de células de un tejido',
    'Ambos términos son exactamente sinónimos', 'La hipertrofia siempre implica aumento del número celular, nunca del tamaño', 'La hiperplasia solo ocurre en tejidos que no pueden dividirse'],
  ok:0,
  clave:'Hipertrofia = aumento del TAMAÑO celular. Hiperplasia = aumento del NÚMERO de células.',
  exp:'La hipertrofia es el aumento del TAMAÑO de las células individuales de un tejido (no del número), típico de células que no se dividen mucho, como el músculo cardíaco. La hiperplasia es el aumento del NÚMERO de células de un tejido, posible en tejidos cuyas células sí conservan capacidad de dividirse -como el crecimiento de la glándula mamaria durante el embarazo.',
  no:{
    1:'Son conceptos claramente distintos: uno se refiere al tamaño celular, el otro al número de células.',
    2:'Es al revés: la hipertrofia implica aumento de TAMAÑO, no de número; el aumento de número corresponde a la hiperplasia.',
    3:'Es precisamente lo contrario: la hiperplasia ocurre en tejidos cuyas células SÍ pueden dividirse, no en los que no pueden.'
  },
  trampa:'Invertir o confundir cuál adaptación (hipertrofia o hiperplasia) corresponde al aumento de tamaño celular y cuál al aumento del número de células.',
  obj:'Distinguir la hipertrofia de la hiperplasia según el mecanismo celular involucrado.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 1.',
  tags:['hipertrofia','hiperplasia','adaptación celular']
},
{
  id:'U9-AP-Q32', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Adaptaciones celulares', sub:'Metaplasia respiratoria',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una biopsia bronquial de un fumador crónico muestra que el epitelio respiratorio normal ha sido reemplazado por otro tipo de epitelio adulto, más resistente pero con menos función ciliar protectora.',
  enunciado:'¿Qué adaptación celular explica este hallazgo, y qué la caracteriza?',
  ops:[
    'Metaplasia: reemplazo de un tipo de célula ADULTA y diferenciada por otro tipo celular adulto distinto, generalmente en respuesta a un irritante crónico',
    'Hipertrofia: aumento del tamaño de las células del epitelio respiratorio original', 'Necrosis coagulativa del epitelio respiratorio', 'Neoplasia maligna del epitelio bronquial'],
  ok:0,
  clave:'Metaplasia: reemplazo de un tipo celular adulto por otro, en respuesta a un irritante crónico como el humo del tabaco.',
  exp:'La metaplasia es el reemplazo de un tipo de célula ADULTA y diferenciada por otro tipo celular adulto distinto, generalmente en respuesta a un irritante crónico -el ejemplo clásico es el epitelio respiratorio de un fumador crónico, que cambia de su forma normal hacia un epitelio más resistente pero con menos función protectora ciliar, exactamente lo descrito en este caso.',
  no:{
    1:'La hipertrofia implica el mismo tipo celular aumentando de tamaño, no un cambio hacia otro tipo celular distinto, como se describe aquí.',
    2:'La necrosis coagulativa es un tipo de muerte celular por isquemia, sin relación con el cambio de tipo celular descrito en este caso.',
    3:'Una neoplasia maligna implicaría crecimiento descontrolado con invasión y potencial metástasis, no simplemente un cambio de tipo celular adulto por otro.'
  },
  trampa:'Confundir la metaplasia (cambio de tipo celular adulto) con otras adaptaciones o procesos patológicos que no implican ese cambio específico de tipo celular.',
  obj:'Identificar la metaplasia respiratoria en fumadores crónicos como ejemplo de adaptación celular.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 1.',
  tags:['metaplasia','epitelio respiratorio','fumador crónico']
},
{
  id:'U9-AP-Q33', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Adaptaciones celulares', sub:'Secuencia metaplasia-displasia-neoplasia',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la secuencia de progresión, de menor a mayor preocupación clínica, cuando un irritante crónico persiste sobre un tejido con metaplasia?',
  ops:[
    'Metaplasia (reversible) → displasia (desorden celular) → neoplasia (crecimiento descontrolado)',
    'Neoplasia → displasia → metaplasia', 'La metaplasia nunca puede progresar hacia ningún otro estado', 'Displasia → metaplasia → neoplasia'],
  ok:0,
  clave:'La secuencia de progresión es metaplasia → displasia → neoplasia, de menor a mayor preocupación clínica.',
  exp:'La metaplasia en sí es reversible si el irritante desaparece, pero si el estímulo persiste, el tejido metaplásico puede progresar hacia displasia: un crecimiento celular desordenado y con alteraciones en la forma y organización de las células, que ya representa un paso más cercano hacia el desarrollo de cáncer (neoplasia), un crecimiento celular verdaderamente descontrolado.',
  no:{
    1:'Esta secuencia está invertida; la progresión va de metaplasia hacia neoplasia, no al revés.',
    2:'La metaplasia sí puede progresar hacia displasia y, potencialmente, hacia neoplasia si el irritante persiste sin corregirse.',
    3:'Esta secuencia no corresponde al orden biológico correcto: la displasia es un paso intermedio entre metaplasia y neoplasia, no el primer paso.'
  },
  trampa:'Invertir el orden de la secuencia de progresión (metaplasia → displasia → neoplasia), confundiendo cuál etapa precede a cuál.',
  obj:'Recordar la secuencia de progresión de metaplasia a displasia a neoplasia.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 1.',
  tags:['metaplasia','displasia','neoplasia','secuencia de progresión']
},
{
  id:'U9-AP-Q34', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Neoplasias: conceptos generales', sub:'Anaplasia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la anaplasia, y qué relación tiene con la agresividad clínica de un tumor?',
  ops:[
    'Es la pérdida de diferenciación celular (núcleos grandes e irregulares, mayor división celular); cuanto más anaplásico es un tumor, generalmente más agresivo es su comportamiento',
    'Es sinónimo exacto de metástasis', 'La anaplasia siempre indica que un tumor es benigno', 'La anaplasia no tiene ninguna relación con el pronóstico de un tumor'],
  ok:0,
  clave:'La anaplasia es la pérdida de diferenciación celular; a mayor anaplasia, generalmente mayor agresividad clínica.',
  exp:'La anaplasia es la pérdida de diferenciación celular: las células cancerosas anaplásicas se parecen cada vez menos a las células normales del tejido de origen, con núcleos grandes e irregulares, y mayor actividad de división celular -cuanto más anaplásico es un tumor, generalmente más agresivo es su comportamiento clínico.',
  no:{
    1:'La anaplasia (pérdida de diferenciación) y la metástasis (diseminación a distancia) son conceptos relacionados pero distintos, no sinónimos.',
    2:'Es precisamente lo contrario: la anaplasia marcada se asocia más frecuentemente a tumores malignos, no a los benignos, que suelen conservar diferenciación.',
    3:'La anaplasia sí tiene una relación pronóstica directa: mayor anaplasia generalmente se correlaciona con mayor agresividad clínica.'
  },
  trampa:'Confundir la anaplasia con la metástasis, o no reconocer su valor pronóstico en relación con la agresividad del tumor.',
  obj:'Definir la anaplasia y su relación con la agresividad clínica de un tumor.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 7.',
  tags:['anaplasia','diferenciación celular','agresividad tumoral']
},
{
  id:'U9-AP-Q35', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Neoplasias: conceptos generales', sub:'Por qué la invasión y metástasis definen malignidad',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la capacidad de invasión y metástasis es la característica que define de forma más consistente el comportamiento maligno de un tumor?',
  ops:[
    'Porque un tumor benigno, aunque crezca, generalmente se puede extirpar por completo y curar; un tumor maligno puede haber enviado ya células a otros órganos incluso antes de extirpar el tumor original',
    'La invasión y la metástasis no tienen ninguna relación con el pronóstico del paciente',
    'Todos los tumores, benignos y malignos, invaden y hacen metástasis por igual',
    'El tamaño del tumor es siempre más importante que su capacidad de invasión y metástasis'
  ],
  ok:0,
  clave:'Un tumor benigno se puede curar extirpándolo; uno maligno puede haber diseminado ya antes de la cirugía, explicando por qué invasión/metástasis definen malignidad.',
  exp:'Un tumor benigno, aunque crezca, generalmente se puede extirpar por completo con cirugía y el paciente queda curado, porque permanece contenido en un solo lugar. Un tumor maligno, en cambio, puede haber enviado ya células a otros órganos (metástasis microscópicas, no siempre detectables) incluso antes de que el tumor original se haya extirpado, lo cual explica por qué el cáncer puede reaparecer en otro sitio del cuerpo tiempo después de una cirugía aparentemente exitosa.',
  no:{
    1:'La invasión y la metástasis tienen una relación directa y crítica con el pronóstico, siendo las características que más determinan el comportamiento clínico del tumor.',
    2:'Los tumores benignos, por definición, NO invaden tejidos vecinos ni hacen metástasis; esa es precisamente la diferencia con los malignos.',
    3:'El tamaño no es tan determinante como la capacidad de invasión y metástasis; un tumor pequeño pero invasivo/metastásico puede ser más peligroso que uno grande pero benigno.'
  },
  trampa:'Dar más peso al tamaño del tumor que a su capacidad de invasión y metástasis para determinar su comportamiento clínico real.',
  obj:'Explicar por qué la invasión y metástasis definen de forma más consistente el comportamiento maligno.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 7.',
  tags:['invasión','metástasis','neoplasia maligna','pronóstico']
},
{
  id:'U9-AP-Q36', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Neoplasias: conceptos generales', sub:'Ganglio centinela',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el estudio de los ganglios linfáticos cercanos a un tumor maligno es tan relevante clínicamente?',
  ops:[
    'Porque son, con frecuencia, la primera parada de una metástasis en camino, y su estado ayuda a estimar qué tan avanzada está la enfermedad',
    'Los ganglios linfáticos nunca se ven afectados por procesos tumorales malignos', 'Estudiar los ganglios linfáticos no aporta ninguna información pronóstica', 'Los ganglios linfáticos solo se estudian en tumores benignos, nunca en malignos'],
  ok:0,
  clave:'Los ganglios cercanos son con frecuencia la primera parada de la metástasis, y su estado ayuda a estimar el avance de la enfermedad.',
  exp:'El estudio de los ganglios linfáticos cercanos a un tumor maligno es tan importante porque son, con frecuencia, la primera parada de una metástasis en camino (vía el drenaje linfático del tumor), y su estado ayuda a estimar qué tan avanzada está la enfermedad -un ganglio afectado sugiere que las células tumorales ya comenzaron a diseminarse más allá del tumor primario.',
  no:{
    1:'Los ganglios linfáticos sí pueden verse afectados por metástasis de tumores malignos cercanos, siendo un hallazgo clínicamente relevante.',
    2:'El estudio ganglionar sí aporta información pronóstica central, especialmente en la estadificación de tumores malignos.',
    3:'El estudio de ganglios linfáticos es especialmente relevante en tumores MALIGNOS, precisamente por su riesgo de metástasis, no en los benignos.'
  },
  trampa:'Subestimar la relevancia clínica del estudio ganglionar como indicador temprano de diseminación metastásica.',
  obj:'Explicar la relevancia clínica del estudio de los ganglios linfáticos cercanos a un tumor maligno.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 7.',
  tags:['ganglio centinela','metástasis','estadificación tumoral']
},
{
  id:'U9-AP-Q37', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Carcinogénesis', sub:'Oncogén vs. gen supresor tumoral',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre un oncogén y un gen supresor tumoral, en cuanto a su función normal antes de mutar?',
  ops:[
    'El oncogén (mutado de un protooncogén) normalmente promueve la división celular; el gen supresor tumoral normalmente frena la división o repara el ADN dañado',
    'Ambos genes tienen exactamente la misma función normal antes de mutar', 'El oncogén siempre frena la división celular, y el gen supresor tumoral siempre la promueve', 'Ninguno de los dos tipos de gen tiene relación con el control del ciclo celular'],
  ok:0,
  clave:'El oncogén (de protooncogén) promueve división celular; el gen supresor tumoral frena la división o repara ADN.',
  exp:'Un oncogén es una versión mutada y hiperactiva de un gen normal (protooncogén), que normalmente promueve la división celular de forma regulada. Un gen supresor tumoral normalmente frena la división celular o repara el ADN dañado: cuando ambas copias se inactivan por mutación, ese freno desaparece. Ambos tipos de genes controlan el ciclo celular, pero en direcciones opuestas.',
  no:{
    1:'Tienen funciones normales opuestas: uno promueve la división (protooncogén) y el otro la frena o repara el ADN (supresor tumoral).',
    2:'Es al revés: el protooncogén (origen del oncogén) promueve la división, y el gen supresor tumoral la frena, no al contrario.',
    3:'Ambos tipos de gen sí tienen relación directa y central con el control del ciclo celular, aunque en direcciones opuestas.'
  },
  trampa:'Invertir las funciones normales del protooncogén (promueve división) y el gen supresor tumoral (frena división/repara ADN).',
  obj:'Distinguir la función normal de un oncogén (protooncogén) de la de un gen supresor tumoral.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 7.',
  tags:['oncogén','gen supresor tumoral','protooncogén','ciclo celular']
},
{
  id:'U9-AP-Q38', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Carcinogénesis', sub:'Mutación somática vs. germinal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre una mutación somática y una mutación germinal en el contexto del cáncer?',
  ops:[
    'La somática ocurre en una célula del cuerpo a lo largo de la vida, sin heredarse; la germinal se hereda de los padres, dando a la persona una ventaja de partida hacia el cáncer',
    'Ambos tipos de mutación son exactamente equivalentes en su origen y consecuencias', 'La mutación somática siempre se transmite a la descendencia', 'La mutación germinal ocurre solo después del nacimiento, nunca se hereda'],
  ok:0,
  clave:'La mutación somática ocurre en el cuerpo sin heredarse; la germinal se hereda, dando ventaja de partida hacia el cáncer.',
  exp:'La mayoría de las mutaciones que causan cáncer son mutaciones somáticas: ocurren en una célula del cuerpo a lo largo de la vida (no se heredan de los padres ni se transmiten a la descendencia), acumulándose con el tiempo por exposición a distintos factores -a diferencia de las mutaciones germinales heredadas, que dan a la persona una ventaja de partida (todas sus células ya nacen con una copia mutada) hacia desarrollar cáncer.',
  no:{
    1:'Son conceptos claramente distintos en origen (adquirida vs. heredada) y en sus implicaciones para la descendencia.',
    2:'Es al revés: la mutación GERMINAL es la que se transmite a la descendencia, no la somática, que ocurre solo en células del cuerpo del individuo.',
    3:'La mutación germinal se hereda de los padres, presente desde el nacimiento en todas las células, no ocurre exclusivamente después de nacer.'
  },
  trampa:'Invertir cuál tipo de mutación (somática o germinal) se hereda y se transmite a la descendencia.',
  obj:'Distinguir la mutación somática de la germinal en el contexto de la carcinogénesis.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 7.',
  tags:['mutación somática','mutación germinal','herencia del cáncer']
},
{
  id:'U9-AP-Q39', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Carcinogénesis', sub:'Tipos de carcinógenos',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipos de carcinógenos existen, según su naturaleza?',
  ops:[
    'Químicos (como componentes del humo del tabaco), físicos (radiación ultravioleta o ionizante) y biológicos (ciertos virus como el VPH)',
    'Solo existen carcinógenos de naturaleza química, ningún otro tipo', 'Los carcinógenos biológicos no existen; solo los físicos y químicos', 'Ningún virus puede actuar como carcinógeno'],
  ok:0,
  clave:'Existen carcinógenos químicos, físicos y biológicos.',
  exp:'Un carcinógeno es cualquier agente capaz de inducir o promover mutaciones cancerígenas: puede ser químico (como ciertos componentes del humo del tabaco), físico (radiación ultravioleta o ionizante, que daña directamente el ADN), o biológico (ciertos virus, como el virus del papiloma humano, capaces de interferir directamente con genes supresores tumorales de la célula que infectan).',
  no:{
    1:'Existen carcinógenos de más de un tipo: químicos, físicos y biológicos, no exclusivamente químicos.',
    2:'Los carcinógenos biológicos sí existen, como ciertos virus con capacidad de interferir con genes supresores tumorales.',
    3:'Ciertos virus, como el VPH, sí pueden actuar como carcinógenos biológicos bien documentados.'
  },
  trampa:'Limitar el concepto de carcinógeno a un solo tipo (químico), sin reconocer los carcinógenos físicos y biológicos.',
  obj:'Clasificar los tipos de carcinógenos según su naturaleza química, física o biológica.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 7.',
  tags:['carcinógeno','virus oncogénico','radiación ionizante']
},
{
  id:'U9-AP-Q40', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Carcinogénesis', sub:'Acumulación de mutaciones y tiempo de desarrollo',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el cáncer es, en la mayoría de los casos, una enfermedad que tarda años o décadas en desarrollarse, en vez de aparecer tras una sola exposición breve a un carcinógeno?',
  ops:[
    'Porque generalmente es necesaria la acumulación de varias mutaciones sucesivas, en varios oncogenes y genes supresores tumorales distintos, antes de que una célula se vuelva plenamente cancerosa',
    'El cáncer siempre aparece inmediatamente tras cualquier exposición a un carcinógeno, sin ningún retraso',
    'El tiempo de desarrollo del cáncer no tiene relación con el número de mutaciones acumuladas',
    'Una sola mutación en un solo gen siempre es suficiente para causar cáncer de forma inmediata'
  ],
  ok:0,
  clave:'Se necesita acumular varias mutaciones sucesivas en distintos genes antes de que una célula se vuelva plenamente cancerosa, lo que toma tiempo.',
  exp:'La acumulación de varias mutaciones (en varios oncogenes y genes supresores tumorales distintos, a lo largo de años) es, generalmente, necesaria antes de que una célula se vuelva plenamente cancerosa -es la razón biológica de por qué el cáncer es, en la mayoría de los casos, una enfermedad que tarda años o décadas en desarrollarse, y por qué la exposición prolongada a un carcinógeno aumenta el riesgo de forma mucho más marcada que una exposición breve.',
  no:{
    1:'El cáncer típicamente NO aparece inmediatamente tras una exposición; requiere la acumulación progresiva de varias mutaciones a lo largo del tiempo.',
    2:'El tiempo de desarrollo del cáncer tiene una relación directa con el número de mutaciones necesarias para acumularse antes de que la célula se vuelva plenamente cancerosa.',
    3:'Generalmente una sola mutación no es suficiente; se requiere la acumulación de varias mutaciones en distintos genes reguladores del ciclo celular.'
  },
  trampa:'Asumir que una sola mutación o una exposición breve a un carcinógeno es suficiente para causar cáncer de forma inmediata, sin reconocer la necesidad de acumulación progresiva de mutaciones.',
  obj:'Explicar por qué el cáncer típicamente tarda años o décadas en desarrollarse.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 7.',
  tags:['acumulación de mutaciones','tiempo de desarrollo del cáncer','exposición prolongada']
},
{
  id:'U9-AP-Q41', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Reparación tisular: regeneración y fibrosis', sub:'Condiciones para la regeneración',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué dos condiciones deben cumplirse para que un tejido dañado pueda repararse por regeneración, en vez de fibrosis?',
  ops:[
    'Que las células del tejido conserven capacidad de dividirse, y que la estructura de soporte del tejido (membrana basal, matriz extracelular) permanezca intacta',
    'Que el tejido dañado tenga siempre más de un año de edad', 'La regeneración no requiere ninguna condición específica, ocurre siempre por igual', 'Que el daño haya sido causado exclusivamente por un agente químico'],
  ok:0,
  clave:'Se requiere capacidad de división celular Y estructura de soporte intacta para que ocurra regeneración en vez de fibrosis.',
  exp:'La regeneración tisular reemplaza el tejido dañado por células NUEVAS del mismo tipo, restaurando la estructura y función original, y solo es posible en tejidos cuyas células conservan capacidad de dividirse y cuando la estructura de soporte del tejido permanece intacta como andamio sobre el cual reconstruir. Si falta cualquiera de estas dos condiciones, el cuerpo repara mediante fibrosis en vez de regeneración.',
  no:{
    1:'La edad del tejido no es la condición determinante para la regeneración; lo relevante es la capacidad de división celular y la integridad de la estructura de soporte.',
    2:'La regeneración sí requiere condiciones específicas bien definidas; no ocurre de forma automática en cualquier circunstancia.',
    3:'El tipo de agente causante del daño (químico u otro) no es la condición determinante para que ocurra regeneración; lo relevante son las dos condiciones celulares y estructurales mencionadas.'
  },
  trampa:'No reconocer las dos condiciones específicas (capacidad de división celular y estructura de soporte intacta) necesarias para que ocurra regeneración en vez de fibrosis.',
  obj:'Identificar las dos condiciones necesarias para la reparación tisular por regeneración.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 3.',
  tags:['regeneración tisular','capacidad de división celular','matriz extracelular']
},
{
  id:'U9-AP-Q42', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Reparación tisular: regeneración y fibrosis', sub:'Tejido de granulación',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es el tejido de granulación, y qué papel cumple en el proceso de cicatrización?',
  ops:[
    'Un tejido temporal, muy vascularizado, con fibroblastos activos produciendo colágeno nuevo, que con el tiempo madura hacia la cicatriz definitiva',
    'Es la cicatriz definitiva final, sin ningún cambio posterior', 'Es un tejido permanente que nunca madura hacia otra forma', 'El tejido de granulación no tiene relación con el proceso de cicatrización'],
  ok:0,
  clave:'El tejido de granulación es temporal, muy vascularizado, con fibroblastos activos, y madura hacia la cicatriz definitiva.',
  exp:'Cuando el tejido dañado no puede regenerarse, el cuerpo repara con cicatrización: primero se forma un tejido de granulación (un tejido temporal, muy vascularizado, con fibroblastos activos produciendo colágeno nuevo), que con el tiempo madura hacia una cicatriz definitiva de tejido conectivo denso, la fibrosis reparativa.',
  no:{
    1:'El tejido de granulación es una etapa TEMPORAL previa a la cicatriz definitiva, no la cicatriz final en sí misma.',
    2:'El tejido de granulación es precisamente temporal; madura hacia la fibrosis reparativa definitiva con el tiempo.',
    3:'El tejido de granulación tiene una relación central y fundamental con el proceso de cicatrización, siendo su etapa inicial.'
  },
  trampa:'Confundir el tejido de granulación (etapa temporal) con la cicatriz definitiva (fibrosis reparativa), tratándolos como si fueran el mismo estado final.',
  obj:'Definir el tejido de granulación y su papel en el proceso de cicatrización.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 3.',
  tags:['tejido de granulación','fibroblastos','cicatrización']
},
{
  id:'U9-AP-Q43', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Reparación tisular: regeneración y fibrosis', sub:'Cicatriz cardíaca post-infarto',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente sobrevive a un infarto de miocardio extenso. Meses después, la zona afectada del corazón ha "sanado" con una cicatriz de tejido conectivo, pero el paciente presenta debilidad persistente en la función de bombeo cardíaco.',
  enunciado:'¿Por qué la cicatrización de esta zona no restauró la función cardíaca normal?',
  ops:[
    'Porque la fibrosis restaura la integridad ESTRUCTURAL del tejido (lo "tapa"), pero NO restaura su función original: la cicatriz es tejido conectivo, no músculo cardíaco funcional',
    'La cicatrización siempre restaura completamente tanto la estructura como la función del tejido original',
    'El músculo cardíaco tiene una capacidad regenerativa excepcionalmente alta, similar a la del hígado',
    'La debilidad de bombeo no tiene ninguna relación con el proceso de cicatrización del infarto'
  ],
  ok:0,
  clave:'La fibrosis restaura integridad estructural pero no función; la cicatriz es tejido conectivo, no músculo cardíaco funcional.',
  exp:'El músculo cardíaco, al no dividirse (célula post-mitótica), no puede regenerarse tras un infarto, así que el cuerpo repara mediante fibrosis. La fibrosis restaura la INTEGRIDAD estructural del tejido, pero NO restaura su función original: la cicatriz es tejido conectivo, no músculo cardíaco funcional, así que esa zona ya no se contrae ni conduce el impulso eléctrico como lo hacía el tejido original -exactamente la razón de la debilidad de bombeo persistente descrita en el caso.',
  no:{
    1:'Es precisamente lo contrario: la cicatrización restaura integridad ESTRUCTURAL, pero no la función original del tejido perdido.',
    2:'El músculo cardíaco tiene una capacidad regenerativa muy LIMITADA (a diferencia del hígado), por ser un tejido con células que prácticamente no se dividen.',
    3:'La debilidad de bombeo tiene una relación directa con el proceso de cicatrización: la cicatriz de tejido conectivo no cumple la función contráctil del músculo cardíaco original.'
  },
  trampa:'Asumir que la cicatrización siempre restaura completamente la función del tejido dañado, sin distinguir entre restauración de integridad estructural y restauración de función.',
  obj:'Explicar por qué la fibrosis reparativa tras un infarto no restaura la función contráctil original del corazón.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 3.',
  tags:['fibrosis reparativa','infarto de miocardio','función cardíaca']
},
{
  id:'U9-AP-Q44', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Amiloidosis', sub:'Qué es el amiloide',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se dice que "el amiloide" no es una sola proteína específica, sino un nombre para un tipo de configuración anormal?',
  ops:[
    'Porque distintas proteínas de origen completamente distinto pueden plegarse de forma anormal adoptando la misma configuración fibrilar característica',
    'El amiloide es, de hecho, siempre exactamente la misma proteína específica en todos los casos', 'El amiloide no tiene relación con el plegamiento de proteínas', 'Solo existe un único tipo de amiloidosis posible'],
  ok:0,
  clave:'Distintas proteínas de origen distinto pueden plegarse anormalmente adoptando la misma configuración fibrilar característica del amiloide.',
  exp:'El amiloide no es una sola proteína: es un nombre para cualquier proteína que se pliega de forma anormal, adoptando una configuración fibrilar característica, resistente a ser degradada por el cuerpo. Distintas proteínas (más de treinta identificadas) pueden plegarse de esta forma anormal en distintas enfermedades, cada una dando origen a un tipo distinto de amiloidosis.',
  no:{
    1:'Es precisamente lo contrario: el amiloide agrupa a MÚLTIPLES proteínas distintas que comparten una configuración anormal común, no una sola proteína específica.',
    2:'El amiloide tiene una relación directa y central con el concepto de plegamiento anormal de proteínas.',
    3:'Existen múltiples tipos de amiloidosis (localizada, sistémica, y según la proteína involucrada específica), no un único tipo posible.'
  },
  trampa:'Asumir que el amiloide es siempre la misma proteína específica, sin reconocer que agrupa a múltiples proteínas de origen distinto con una configuración anormal común.',
  obj:'Explicar por qué el amiloide agrupa a múltiples proteínas de origen distinto con configuración anormal compartida.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.',
  tags:['amiloide','plegamiento anormal de proteínas','configuración fibrilar']
},
{
  id:'U9-AP-Q45', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Amiloidosis', sub:'Tinción de rojo Congo',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica distintiva presenta el amiloide con la tinción de rojo Congo bajo luz polarizada?',
  ops:[
    'Birrefringencia verde manzana', 'Fluorescencia azul intensa', 'Ninguna característica especial bajo luz polarizada', 'Coloración negra uniforme'],
  ok:0,
  clave:'El amiloide muestra birrefringencia verde manzana con luz polarizada tras tinción con rojo Congo.',
  exp:'El depósito extracelular de amiloide se identifica histológicamente con una tinción especial, el rojo Congo, que le da al amiloide una coloración rojiza característica bajo luz normal y, de forma distintiva, una birrefringencia verde manzana cuando se observa con luz polarizada -una de las pocas tinciones tan específicas en toda la patología.',
  no:{
    1:'La fluorescencia azul no es la característica distintiva del amiloide con rojo Congo bajo luz polarizada.',
    2:'El amiloide sí presenta una característica muy específica y distintiva bajo luz polarizada: la birrefringencia verde manzana.',
    3:'La coloración negra uniforme no corresponde a la característica distintiva del amiloide con esta tinción específica.'
  },
  trampa:'No recordar la característica específica (birrefringencia verde manzana) que hace de la tinción de rojo Congo tan diagnóstica para el amiloide.',
  obj:'Recordar la característica distintiva del amiloide con la tinción de rojo Congo bajo luz polarizada.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.',
  tags:['rojo Congo','birrefringencia','amiloide']
},
{
  id:'U9-AP-Q46', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Amiloidosis', sub:'Amiloidosis sistémica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre la amiloidosis localizada y la sistémica?',
  ops:[
    'La localizada afecta un solo órgano; la sistémica se deposita en múltiples órganos a la vez (riñón, corazón, hígado, nervios periféricos), con pérdida progresiva de función en cada uno',
    'Ambos términos son exactamente sinónimos', 'La amiloidosis sistémica afecta exclusivamente al sistema nervioso central', 'La amiloidosis localizada siempre es más grave que la sistémica'],
  ok:0,
  clave:'La localizada afecta un solo órgano; la sistémica afecta múltiples órganos a la vez, con pérdida progresiva de función.',
  exp:'Cuando el depósito de amiloide se limita a un solo órgano, se llama amiloidosis localizada; cuando se deposita en múltiples órganos a la vez (riñón, corazón, hígado, nervios periféricos, entre otros), se llama amiloidosis sistémica, y el órgano afectado va perdiendo función progresivamente a medida que el depósito de amiloide reemplaza tejido normal.',
  no:{
    1:'Son conceptos distintos según el número de órganos afectados: uno solo (localizada) o múltiples a la vez (sistémica).',
    2:'La amiloidosis sistémica puede afectar múltiples órganos, no exclusivamente el sistema nervioso central.',
    3:'Generalmente es al revés: la amiloidosis sistémica, al afectar múltiples órganos vitales simultáneamente, suele tener mayor impacto clínico que la localizada.'
  },
  trampa:'Confundir la amiloidosis localizada con la sistémica, o subestimar el impacto clínico multiorgánico de la sistémica.',
  obj:'Distinguir la amiloidosis localizada de la sistémica según el número de órganos afectados.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 4.',
  tags:['amiloidosis sistémica','amiloidosis localizada','pérdida de función orgánica']
},
{
  id:'U9-AP-Q47', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Patología ambiental', sub:'Mecanismo de la quemadura',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipo de necrosis produce típicamente una quemadura por calor extremo, y por qué mecanismo?',
  ops:[
    'Necrosis coagulativa, porque el calor desnaturaliza directamente las proteínas celulares y daña las membranas celulares',
    'Necrosis licuefactiva, porque el calor siempre licúa completamente el tejido', 'Las quemaduras nunca producen ningún tipo de necrosis tisular', 'Necrosis caseosa, igual que la tuberculosis'],
  ok:0,
  clave:'Una quemadura produce típicamente necrosis coagulativa, por desnaturalización directa de proteínas y daño de membranas celulares.',
  exp:'Una quemadura por calor extremo desnaturaliza directamente las proteínas celulares y daña las membranas celulares, produciendo necrosis coagulativa en el tejido afectado -el mismo mecanismo de desnaturalización que inactiva las enzimas digestivas, preservando temporalmente la arquitectura del tejido, ya visto en el tema de necrosis de este bloque.',
  no:{
    1:'La necrosis licuefactiva es típica del sistema nervioso central o de infecciones con pus, no del mecanismo directo de desnaturalización proteica por calor de una quemadura.',
    2:'Las quemaduras sí producen necrosis tisular, típicamente de tipo coagulativo, por el mecanismo de desnaturalización proteica.',
    3:'La necrosis caseosa es un patrón específico de la tuberculosis, sin relación con el mecanismo de daño térmico de una quemadura.'
  },
  trampa:'Confundir el tipo de necrosis producido por una quemadura (coagulativa) con otros patrones de necrosis que corresponden a mecanismos distintos.',
  obj:'Explicar el mecanismo y tipo de necrosis producido por una quemadura por calor extremo.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 8.',
  tags:['quemadura','necrosis coagulativa','patología ambiental']
},
{
  id:'U9-AP-Q48', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Patología ambiental', sub:'Radiación ionizante y ADN',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué estructura celular daña principalmente la radiación ionizante, y qué dos consecuencias posibles puede tener ese daño?',
  ops:[
    'Daña principalmente el ADN, pudiendo causar muerte celular directa (si el daño es masivo) o mutaciones que, con el tiempo, pueden derivar en cáncer',
    'Daña principalmente la membrana celular, sin ninguna relación con el ADN', 'La radiación ionizante nunca tiene relación con el desarrollo de cáncer', 'La radiación ionizante solo afecta a las mitocondrias, nunca al núcleo celular'],
  ok:0,
  clave:'La radiación ionizante daña principalmente el ADN, pudiendo causar muerte celular directa o mutaciones que deriven en cáncer.',
  exp:'La radiación ionizante daña sobre todo el ADN, pudiendo causar muerte celular directa (si el daño es masivo) o mutaciones que, con el tiempo, pueden derivar en cáncer, dependiendo de la dosis recibida -conectando directamente con la carcinogénesis ya vista en este mismo bloque, donde las mutaciones acumuladas son necesarias para el desarrollo del cáncer.',
  no:{
    1:'La radiación ionizante daña principalmente el ADN, no exclusivamente la membrana celular; el daño al ADN es su mecanismo central.',
    2:'La radiación ionizante sí tiene una relación bien documentada con el desarrollo de cáncer, precisamente por el daño mutagénico al ADN.',
    3:'La radiación ionizante daña principalmente el ADN nuclear, no exclusivamente las mitocondrias.'
  },
  trampa:'Confundir la estructura celular principalmente dañada por la radiación ionizante (ADN) con otras estructuras celulares, o no reconocer las dos consecuencias posibles del daño.',
  obj:'Explicar el mecanismo de daño de la radiación ionizante sobre el ADN y sus consecuencias posibles.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 8.',
  tags:['radiación ionizante','daño al ADN','carcinogénesis']
},
{
  id:'U9-AP-Q49', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Patología ambiental', sub:'Bioactivación de agentes químicos',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la bioactivación, en el contexto de la lesión por agentes químicos?',
  ops:[
    'El fenómeno por el cual una sustancia química requiere ser metabolizada primero por el cuerpo (con frecuencia por el hígado) para volverse tóxica',
    'La bioactivación es sinónimo exacto de desnaturalización de proteínas', 'Todos los agentes químicos son tóxicos directamente, sin necesitar ninguna transformación previa', 'La bioactivación ocurre exclusivamente en el sistema nervioso central'],
  ok:0,
  clave:'La bioactivación es el proceso por el cual una sustancia requiere ser metabolizada (con frecuencia por el hígado) para volverse tóxica.',
  exp:'La lesión por agentes químicos es muy variada en su mecanismo según la sustancia: algunas dañan directamente las membranas celulares, otras interfieren con enzimas específicas del metabolismo celular, y otras requieren ser metabolizadas primero por el cuerpo (frecuentemente por el hígado) para volverse tóxicas, un fenómeno llamado bioactivación.',
  no:{
    1:'La bioactivación es un concepto distinto de la desnaturalización de proteínas; se refiere específicamente a la transformación metabólica de una sustancia hacia una forma tóxica.',
    2:'No todos los agentes químicos son directamente tóxicos; algunos requieren bioactivación (metabolización previa) para volverse dañinos.',
    3:'La bioactivación ocurre típicamente en órganos con capacidad metabólica importante, como el hígado, no exclusivamente en el sistema nervioso central.'
  },
  trampa:'Confundir la bioactivación con otros mecanismos de lesión celular, o asumir que todos los agentes químicos son tóxicos de forma directa sin necesitar transformación metabólica previa.',
  obj:'Definir la bioactivación como mecanismo de toxicidad de ciertos agentes químicos.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 8.',
  tags:['bioactivación','agentes químicos','metabolismo hepático']
},
{
  id:'U9-AP-Q50', programa:'unirm', cuatri:9,
  esp:'Anatomía Patológica I', tema:'Patología ambiental', sub:'Repertorio limitado de mecanismos',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué principio integrador cierra el bloque de Anatomía Patológica I, resumiendo cómo el cuerpo responde a agentes lesivos de naturaleza muy distinta (isquemia, infección, calor, radiación, un químico)?',
  ops:[
    'Sin importar cuál sea el agente lesivo inicial, el cuerpo responde con el mismo repertorio limitado de mecanismos: lesión celular reversible o irreversible, necrosis o apoptosis, inflamación aguda o crónica, y reparación por regeneración o fibrosis',
    'Cada tipo de agente lesivo produce un mecanismo de respuesta completamente único e independiente de los demás',
    'El cuerpo no tiene ningún patrón común de respuesta ante agentes lesivos de distinta naturaleza',
    'Solo los agentes físicos activan los mecanismos estudiados en este bloque; los químicos y biológicos usan mecanismos completamente distintos'
  ],
  ok:0,
  clave:'El cuerpo responde a cualquier agente lesivo con el mismo repertorio limitado: lesión celular, necrosis/apoptosis, inflamación, y reparación por regeneración o fibrosis.',
  exp:'Sin importar cuál sea el agente lesivo inicial -isquemia, infección, calor, radiación, un químico- el cuerpo responde con el mismo repertorio limitado de mecanismos estudiado en todo este bloque: lesión celular reversible o irreversible, necrosis o apoptosis, inflamación aguda o crónica, y finalmente reparación por regeneración o por fibrosis. Este es el principio integrador que conecta todos los temas del bloque.',
  no:{
    1:'Es precisamente lo contrario: distintos agentes lesivos convergen en el MISMO repertorio limitado de mecanismos de respuesta, no en mecanismos completamente independientes entre sí.',
    2:'El cuerpo sí tiene un patrón común y bien caracterizado de respuesta (los mecanismos estudiados en este bloque), independientemente del agente lesivo específico.',
    3:'Los agentes químicos y biológicos también activan los mismos mecanismos generales (lesión celular, necrosis/apoptosis, inflamación, reparación) estudiados en este bloque, no mecanismos completamente distintos.'
  },
  trampa:'No reconocer el principio integrador que conecta todos los temas del bloque: la convergencia de distintos agentes lesivos hacia el mismo repertorio limitado de mecanismos de respuesta.',
  obj:'Sintetizar el principio integrador que conecta los mecanismos estudiados en todo el bloque de Anatomía Patológica I.',
  ref:'Robbins y Cotran, Patología Estructural y Funcional, cap. 8.',
  tags:['principio integrador','mecanismos de lesión celular','síntesis del bloque']
}

]);
