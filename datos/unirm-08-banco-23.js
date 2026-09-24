/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE GENETICA MEDICA (1/2)
   Amplia Genetica Medica de 4 a 50 preguntas junto con banco-24.js.
   Esta parte cubre estructura del ADN, replicacion/transcripcion/
   traduccion, tipos de mutacion, herencia autosomica, ligada al X/
   mitocondrial, arboles genealogicos y alteraciones cromosomicas
   numericas (temas 1-7).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== GENETICA MEDICA ===================== */
{
  id:'U8-G-Q05', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Telómeros', sub:'Función protectora',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumplen los telómeros en los extremos de los cromosomas?',
  ops:[
    'Codifican proteínas esenciales para la división celular',
    'Protegen al ADN de la degradación y de la fusión con otros cromosomas, acortándose progresivamente con cada división celular',
    'Son el sitio donde se unen las cromátidas hermanas',
    'No tienen ninguna función real, son ADN "basura"'
  ],
  ok:1,
  clave:'Los telómeros protegen los extremos cromosómicos y se acortan con cada división, relacionándose con el envejecimiento celular.',
  exp:'Los telómeros son secuencias repetitivas no codificantes en los extremos de cada cromosoma, que protegen al ADN de la degradación y de la fusión con otros cromosomas. Se acortan progresivamente con cada división celular, porque la ADN polimerasa no puede replicar completamente el extremo final de una hebra lineal, lo que se relaciona con el envejecimiento celular replicativo. La telomerasa, activa en células madre y con frecuencia reactivada en células cancerosas, puede contrarrestar este acortamiento.',
  no:{
    0:'Los telómeros son secuencias no codificantes; no codifican proteínas, su función es estructural y protectora.',
    2:'El sitio de unión de las cromátidas hermanas es el centrómero, una estructura distinta situada en una región interna del cromosoma, no en sus extremos.',
    3:'Los telómeros sí tienen una función real y bien establecida: protección de los extremos cromosómicos y relación con el envejecimiento celular replicativo.'
  },
  trampa:'Confundir la función de los telómeros con la del centrómero, o subestimar su relevancia biológica.',
  obj:'Describir la función protectora de los telómeros y su relación con el envejecimiento celular.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['telómeros','envejecimiento celular','telomerasa','protección cromosómica']
},
{
  id:'U8-G-Q06', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Cariotipo', sub:'Prueba de primera línea',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el cariotipo sigue siendo, hoy en día, la primera prueba solicitada ante la sospecha de una alteración cromosómica numérica o estructural grande?',
  ops:[
    'Porque tiene mayor resolución que cualquier técnica molecular moderna',
    'Porque da una visión global de los 46 cromosomas completos a la vez, algo que técnicas más dirigidas como el FISH no ofrecen de entrada',
    'Porque es la única prueba genética que existe',
    'Porque nunca se usa junto con otras técnicas diagnósticas'
  ],
  ok:1,
  clave:'El cariotipo da una visión global de los 46 cromosomas de una vez, útil como primer paso antes de dirigir estudios más específicos.',
  exp:'El cariotipo examina los 46 cromosomas de una persona a la vez, ordenados por tamaño y patrón de bandas, dando una visión global de todo el complemento cromosómico. Pese a la disponibilidad de técnicas moleculares de mayor resolución para cambios pequeños (como el FISH o los microarreglos), el cariotipo sigue siendo la primera prueba solicitada ante sospecha de una alteración grande, porque no requiere saber de antemano qué región específica buscar -algo que sí es necesario para técnicas más dirigidas como el FISH.',
  no:{
    0:'El cariotipo tiene, de hecho, MENOR resolución que técnicas moleculares como los microarreglos o la secuenciación, que detectan cambios mucho más pequeños.',
    2:'Existen múltiples pruebas genéticas distintas (FISH, microarreglos, secuenciación), cada una con su propósito específico; el cariotipo es solo una de ellas.',
    3:'El cariotipo con frecuencia se usa como punto de partida, seguido de técnicas más dirigidas si se necesita mayor resolución para una región específica.'
  },
  trampa:'Asumir que "primera prueba solicitada" significa "prueba de mayor resolución", quando en realidad su ventaja es la visión global inicial, no la resolución fina.',
  obj:'Explicar por qué el cariotipo sigue siendo la prueba de primera línea pese a su menor resolución que otras técnicas.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['cariotipo','diagnóstico genético','visión global cromosómica','primera línea diagnóstica']
},
{
  id:'U8-G-Q07', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Replicación del ADN', sub:'Semiconservativa',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué significa que la replicación del ADN sea "semiconservativa"?',
  ops:[
    'Cada nueva doble hélice conserva una hebra original (molde) y sintetiza una hebra nueva complementaria',
    'Ambas hebras de la nueva doble hélice son completamente nuevas',
    'Ambas hebras de la nueva doble hélice son completamente originales, sin ninguna síntesis nueva',
    'La replicación no conserva ninguna parte del ADN original'
  ],
  ok:0,
  clave:'Cada nueva doble hélice conserva una hebra original y sintetiza una hebra complementaria nueva.',
  exp:'La replicación del ADN es semiconservativa: cada nueva doble hélice conserva una hebra original (que sirve de molde) y sintetiza una hebra nueva complementaria a partir de ella, de modo que cada célula hija recibe una copia con una hebra "vieja" (original) y una "nueva" (recién sintetizada). Este mecanismo fue uno de los hallazgos fundamentales que confirmó el modelo de doble hélice de Watson y Crick.',
  no:{
    1:'Si ambas hebras fueran completamente nuevas, la replicación sería "conservativa" en el sentido opuesto (la doble hélice original se mantendría intacta aparte), un modelo que fue descartado experimentalmente.',
    2:'Si ambas hebras fueran completamente originales, no habría síntesis de ADN nuevo en absoluto, lo cual contradice la definición misma de replicación.',
    3:'La replicación sí conserva una hebra original en cada nueva doble hélice; eso es precisamente lo que significa "semiconservativa".'
  },
  trampa:'Confundir el modelo semiconservativo con los modelos alternativos (conservativo o dispersivo) que fueron descartados experimentalmente.',
  obj:'Explicar el significado del carácter semiconservativo de la replicación del ADN.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['replicación semiconservativa','ADN polimerasa','doble hélice','síntesis de ADN']
},
{
  id:'U8-G-Q08', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Splicing', sub:'Splicing alternativo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ventaja aporta el splicing alternativo para la diversidad de proteínas de un organismo?',
  ops:[
    'Permite que un solo gen produzca varias proteínas distintas, combinando los exones de formas diferentes según el tejido o el momento',
    'Elimina por completo la necesidad de exones',
    'Obliga a que cada gen produzca siempre exactamente una única proteína',
    'Solo ocurre en procariotas, nunca en humanos'
  ],
  ok:0,
  clave:'El splicing alternativo permite que un solo gen produzca varias proteínas distintas, combinando exones de formas distintas.',
  exp:'El splicing alternativo -unir los exones de un ARNm precursor en distintas combinaciones según el tejido o el momento del desarrollo- permite que un solo gen produzca varias proteínas distintas, una fuente importante de diversidad proteica que no requiere genes adicionales en el genoma. Es uno de los mecanismos que explica por qué el número relativamente modesto de genes del genoma humano puede producir un número mucho mayor de proteínas distintas.',
  no:{
    1:'El splicing alternativo depende precisamente de la existencia de exones (que se combinan de distintas formas), no los elimina.',
    2:'Es exactamente lo contrario: el splicing alternativo permite que un gen produzca MÁS de una proteína, no que produzca siempre una única.',
    3:'El splicing es un proceso característico de eucariotas (que tienen intrones), incluyendo a los humanos; los procariotas, en general, no tienen intrones ni requieren splicing.'
  },
  trampa:'No reconocer la ventaja evolutiva y funcional específica del splicing alternativo: generar diversidad proteica sin necesidad de más genes.',
  obj:'Explicar la ventaja del splicing alternativo para la diversidad de proteínas.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['splicing alternativo','exones','intrones','diversidad proteica']
},
{
  id:'U8-G-Q09', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Código genético', sub:'Degenerado pero no ambiguo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué significa que el código genético sea "degenerado pero no ambiguo"?',
  ops:[
    'Varios codones distintos pueden codificar el mismo aminoácido (degenerado), pero cada codón específico codifica siempre el mismo único aminoácido (no ambiguo)',
    'Cada codón puede codificar varios aminoácidos distintos según el contexto',
    'Solo existe un codón para cada aminoácido, sin ninguna redundancia',
    'El código genético cambia completamente de una persona a otra'
  ],
  ok:0,
  clave:'Degenerado = varios codones para el mismo aminoácido. No ambiguo = cada codón específico siempre codifica el mismo aminoácido.',
  exp:'El código genético es degenerado porque varios codones distintos pueden codificar el mismo aminoácido (por ejemplo, varios codones distintos codifican para leucina), lo que confiere cierta tolerancia a mutaciones silenciosas. Pero no es ambiguo: cada codón específico codifica siempre el mismo único aminoácido, sin variar según el contexto -esta precisión es esencial para que la traducción sea fiable y reproducible.',
  no:{
    1:'Eso describiría ambigüedad, que es precisamente lo que el código genético NO tiene: cada codón codifica siempre un único aminoácido específico.',
    2:'El código genético sí tiene redundancia (degeneración): varios codones distintos pueden codificar el mismo aminoácido.',
    3:'El código genético es prácticamente universal entre organismos (con pocas excepciones), no varía de una persona a otra dentro de la misma especie.'
  },
  trampa:'Confundir "degenerado" (redundancia hacia el mismo aminoácido) con "ambiguo" (un mismo codón codificando distintos aminoácidos), que son conceptos opuestos.',
  obj:'Explicar la diferencia entre degeneración y ambigüedad en el código genético.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['código genético','degeneración','codón','traducción']
},
{
  id:'U8-G-Q10', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Mutaciones puntuales', sub:'Sin sentido vs. cambio de sentido',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un análisis molecular identifica una mutación puntual que cambia un codón que codificaba un aminoácido por un codón de paro prematuro.',
  enunciado:'¿Qué tipo de mutación es esta, y qué consecuencia general tiene sobre la proteína?',
  ops:[
    'Mutación silenciosa; sin ningún efecto sobre la proteína',
    'Mutación sin sentido (nonsense); trunca la proteína antes de su longitud normal, casi siempre con pérdida grave de función',
    'Mutación de cambio de sentido (missense); cambia un aminoácido por otro similar sin mayor efecto',
    'Mutación de corrimiento del marco de lectura'
  ],
  ok:1,
  clave:'Un codón de paro prematuro corresponde a una mutación sin sentido, que trunca la proteína con pérdida grave de función.',
  exp:'Una mutación sin sentido (nonsense) cambia un codón que codificaba un aminoácido por un codón de PARO prematuro, truncando la proteína antes de su longitud normal -casi siempre con pérdida grave de función, porque la proteína queda incompleta, con frecuencia faltando dominios funcionales esenciales. Es distinta de la mutación silenciosa (mismo aminoácido, sin efecto) y de la de cambio de sentido (aminoácido distinto, efecto variable, pero la proteína conserva su longitud completa).',
  no:{
    0:'Una mutación silenciosa mantiene el mismo aminoácido codificado, sin generar un codón de paro; este caso describe justamente lo contrario.',
    2:'La mutación de cambio de sentido cambia un aminoácido por otro, sin generar un codón de paro que trunque la proteína; este caso describe un codón de paro, no un cambio de aminoácido.',
    3:'Una mutación puntual (sustitución de una sola base) no corresponde a un corrimiento del marco de lectura, que requiere inserción o deleción de un número de bases no múltiplo de tres.'
  },
  trampa:'Confundir los distintos tipos de mutaciones puntuales entre sí, especialmente la sin sentido con la de cambio de sentido.',
  obj:'Identificar una mutación sin sentido y su consecuencia sobre la proteína resultante.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['mutación sin sentido','codón de paro','proteína truncada','mutación puntual']
},
{
  id:'U8-G-Q11', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Corrimiento del marco', sub:'Efecto devastador',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las mutaciones de corrimiento del marco de lectura suelen ser mucho más devastadoras que una simple mutación puntual?',
  ops:[
    'Porque desplazan el marco de lectura de TODOS los codones posteriores al punto de la mutación, alterando prácticamente toda la secuencia de aminoácidos siguiente',
    'Porque nunca afectan a la proteína resultante',
    'Porque solo cambian un único aminoácido, igual que una mutación puntual',
    'Porque ocurren exclusivamente cuando se inserta o elimina un múltiplo exacto de tres bases'
  ],
  ok:0,
  clave:'El corrimiento del marco desplaza la lectura de todos los codones posteriores, alterando prácticamente toda la proteína resultante.',
  exp:'Las mutaciones de corrimiento del marco ocurren cuando se inserta o se elimina un número de bases que NO es múltiplo de tres, desplazando el marco de lectura de todos los codones posteriores al punto de la mutación. Como el ribosoma sigue leyendo en tripletes desde ese punto en adelante, prácticamente toda la secuencia de aminoácidos posterior queda alterada, generalmente terminando en un codón de paro prematuro en algún punto -por eso son mucho más devastadoras que una simple sustitución puntual, que afecta como mucho a un solo aminoácido.',
  no:{
    1:'Sí afectan de forma muy significativa a la proteína resultante; de hecho, son de las mutaciones con efecto más devastador.',
    2:'Cambian mucho más que un único aminoácido: alteran toda la secuencia de aminoácidos posterior al punto de la mutación.',
    3:'Es al revés: el corrimiento del marco ocurre cuando el número de bases insertadas o eliminadas NO es múltiplo de tres; si lo fuera, sería una inserción/deleción "en marco", con un efecto mucho más limitado.'
  },
  trampa:'No reconocer el mecanismo específico (desplazamiento del marco de lectura completo) que explica por qué este tipo de mutación tiene un efecto tan extenso comparado con una mutación puntual.',
  obj:'Explicar por qué las mutaciones de corrimiento del marco tienen un efecto más devastador que las mutaciones puntuales.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['corrimiento del marco de lectura','frameshift','mutación','marco de lectura']
},
{
  id:'U8-G-Q12', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Herencia autosómica dominante', sub:'Patrón en el árbol',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica del árbol genealógico es compatible con herencia autosómica dominante y descarta herencia ligada al X?',
  ops:[
    'Transmisión de hombre a hombre (un padre afectado transmite la enfermedad a un hijo varón)',
    'La enfermedad afecta exclusivamente a mujeres',
    'La enfermedad "salta" generaciones de forma característica',
    'Solo se transmite por vía materna'
  ],
  ok:0,
  clave:'La transmisión de hombre a hombre es posible en herencia autosómica dominante, pero imposible en herencia ligada al X.',
  exp:'La transmisión de hombre a hombre (un padre afectado con un hijo varón también afectado) es posible en herencia autosómica dominante, porque el gen está en un autosoma, no en el cromosoma X. Esta observación descarta la herencia ligada al X, porque un padre siempre transmite su cromosoma Y (no su X) a un hijo varón, así que un padre afectado por una enfermedad ligada al X recesiva nunca podría transmitirla directamente a un hijo varón por esa vía.',
  no:{
    1:'La herencia autosómica dominante afecta por igual a hombres y mujeres, no exclusivamente a mujeres, salvo que el gen mismo esté en un cromosoma sexual.',
    2:'El "salto" de generaciones es más característico de la herencia autosómica RECESIVA (con portadores asintomáticos), no de la dominante, que típicamente afecta generaciones sucesivas.',
    3:'La transmisión exclusivamente materna es característica de la herencia MITOCONDRIAL, un patrón distinto de la autosómica dominante.'
  },
  trampa:'Confundir el patrón visual de la herencia autosómica dominante con el de otros patrones de herencia (recesiva, ligada al X, mitocondrial).',
  obj:'Identificar la transmisión de hombre a hombre como evidencia a favor de herencia autosómica (frente a ligada al X).',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['herencia autosómica dominante','transmisión hombre a hombre','árbol genealógico','herencia ligada al X']
},
{
  id:'U8-G-Q13', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Penetrancia incompleta', sub:'Aparente salto de generaciones',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un árbol genealógico de una enfermedad autosómica dominante conocida, un abuelo portador de la mutación nunca manifestó síntomas, pero su hijo y su nieta sí desarrollaron la enfermedad.',
  enunciado:'¿Qué concepto explica que el abuelo, pese a portar la mutación, nunca haya manifestado la enfermedad?',
  ops:[
    'Penetrancia incompleta: no toda persona con el genotipo manifiesta el fenotipo asociado, pese a poder transmitirlo a su descendencia',
    'El abuelo en realidad no portaba la mutación',
    'La enfermedad cambió de patrón de herencia a autosómica recesiva en esta familia',
    'Es imposible que esto ocurra en una enfermedad autosómica dominante'
  ],
  ok:0,
  clave:'La penetrancia incompleta explica que alguien con la mutación nunca manifieste el fenotipo, aunque pueda transmitirlo.',
  exp:'La penetrancia es la proporción de personas con un genotipo determinado que efectivamente manifiestan el fenotipo asociado. Una penetrancia incompleta (menor al 100%) significa que algunas personas con la mutación NUNCA desarrollan la enfermedad, pese a portarla y poder transmitirla a su descendencia -exactamente lo que ocurrió con el abuelo del caso. Este fenómeno explica por qué un árbol genealógico de una enfermedad autosómica dominante con penetrancia incompleta puede parecer que "salta generaciones", sin que eso implique un cambio real en el patrón de herencia.',
  no:{
    1:'El caso establece que el abuelo era portador de la mutación (transmitida a su hijo, quien sí manifestó la enfermedad); la penetrancia incompleta explica por qué él mismo no la manifestó.',
    2:'El patrón de herencia de una enfermedad no "cambia" entre generaciones de la misma familia; sigue siendo autosómico dominante, solo que con penetrancia incompleta.',
    3:'Es perfectamente posible y un fenómeno bien documentado en genética médica, precisamente por el concepto de penetrancia incompleta.'
  },
  trampa:'Asumir que la ausencia de síntomas en una persona significa automáticamente que no porta la mutación, sin considerar el concepto de penetrancia incompleta.',
  obj:'Aplicar el concepto de penetrancia incompleta para explicar un caso de aparente "salto" de generaciones en herencia dominante.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['penetrancia incompleta','herencia autosómica dominante','árbol genealógico','portador asintomático']
},
{
  id:'U8-G-Q14', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Expresividad variable', sub:'Neurofibromatosis',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué pregunta específica responde el concepto de "expresividad variable", a diferencia del concepto de penetrancia?',
  ops:[
    '¿Se manifiesta la enfermedad o no, en una persona con el genotipo?',
    'Entre las personas que SÍ manifiestan el fenotipo, ¿qué tan grave o variable es esa manifestación?',
    'Ambos conceptos responden exactamente la misma pregunta',
    'La expresividad variable no tiene relación con ninguna enfermedad genética real'
  ],
  ok:1,
  clave:'La expresividad variable responde: entre quienes manifiestan la enfermedad, ¿qué tan grave o distinta es su presentación?',
  exp:'La penetrancia responde "¿se manifiesta la enfermedad o no?" (sí/no), mientras que la expresividad variable responde una pregunta distinta: entre las personas que SÍ manifiestan el fenotipo (ya pasado el filtro de la penetrancia), ¿qué tan variable es la gravedad o las características específicas de esa manifestación? La neurofibromatosis tipo 1 es un ejemplo clásico: algunos pacientes con la misma mutación tienen manifestaciones leves, mientras otros de la misma familia tienen manifestaciones graves.',
  no:{
    0:'Esa es la pregunta que responde la PENETRANCIA, no la expresividad variable.',
    2:'Son dos conceptos distintos que responden preguntas diferentes: uno sobre si se manifiesta o no, el otro sobre la gravedad de la manifestación.',
    3:'La expresividad variable tiene ejemplos clínicos bien documentados, como la neurofibromatosis tipo 1, donde la gravedad varía considerablemente entre pacientes con la misma mutación.'
  },
  trampa:'Confundir penetrancia con expresividad variable, tratándolas como sinónimos cuando responden preguntas conceptualmente distintas.',
  obj:'Distinguir el concepto de expresividad variable del de penetrancia.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['expresividad variable','neurofibromatosis','penetrancia','variabilidad clínica']
},
{
  id:'U8-G-Q15', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Herencia ligada al X', sub:'Por qué afecta más a hombres',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la herencia recesiva ligada al X afecta predominantemente a hombres?',
  ops:[
    'Porque el hombre tiene un solo cromosoma X, así que basta con una copia mutada para manifestar la enfermedad, sin un segundo X que compense',
    'Porque las mujeres nunca portan mutaciones en el cromosoma X',
    'Porque el hombre tiene dos cromosomas X, igual que la mujer',
    'La herencia ligada al X afecta exactamente por igual a ambos sexos'
  ],
  ok:0,
  clave:'El hombre, con un solo X, manifiesta la enfermedad con una sola copia mutada, sin un segundo X que compense.',
  exp:'En la herencia recesiva ligada al X, el hombre (46,XY) tiene un solo cromosoma X, así que basta con UNA copia mutada para que manifieste la enfermedad -no tiene un segundo X que compense esa mutación. La mujer (46,XX), con dos cromosomas X, necesita que AMBAS copias estén mutadas para manifestar la enfermedad; con una sola copia mutada, es portadora típicamente asintomática. Esta asimetría es la razón fundamental por la que estas enfermedades predominan marcadamente en hombres.',
  no:{
    1:'Las mujeres sí pueden portar mutaciones en el cromosoma X (como portadoras heterocigotas), aunque típicamente no manifiesten la enfermedad si es recesiva.',
    2:'El hombre tiene un cromosoma X y un cromosoma Y (46,XY), no dos X como la mujer; esa diferencia es precisamente la base de la asimetría.',
    3:'La herencia ligada al X recesiva afecta de forma marcadamente desigual entre sexos, predominando en hombres, no por igual.'
  },
  trampa:'No reconocer la asimetría fundamental en el número de cromosomas X entre hombres y mujeres como la base de este patrón de herencia.',
  obj:'Explicar por qué la herencia recesiva ligada al X afecta predominantemente a hombres.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['herencia ligada al X','cromosoma X','portadora','herencia recesiva']
},
{
  id:'U8-G-Q16', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Herencia mitocondrial', sub:'Transmisión exclusivamente materna',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un árbol genealógico, todos los hijos (hombres y mujeres) de una madre afectada por una enfermedad determinada también están afectados, pero ninguno de los hijos de un padre afectado lo está.',
  enunciado:'¿Qué patrón de herencia sugiere este árbol genealógico?',
  ops:[
    'Herencia autosómica dominante', 'Herencia mitocondrial', 'Herencia ligada al X recesiva', 'Herencia autosómica recesiva'],
  ok:1,
  clave:'La transmisión exclusiva por la madre a todos sus hijos, sin ninguna transmisión paterna, es el patrón característico de la herencia mitocondrial.',
  exp:'El ADN mitocondrial se hereda exclusivamente por vía MATERNA, porque el óvulo aporta prácticamente todas las mitocondrias del cigoto, mientras que las mitocondrias del espermatozoide se eliminan tras la fecundación. Por eso, una enfermedad mitocondrial afecta a TODOS los hijos de una madre afectada (de ambos sexos), pero un padre afectado NUNCA la transmite a ninguno de sus hijos -exactamente el patrón descrito en el caso, un patrón inconfundible y distinto de todos los patrones mendelianos clásicos.',
  no:{
    0:'La herencia autosómica dominante no muestra esta asimetría absoluta entre transmisión materna y paterna; ambos progenitores afectados pueden transmitir la enfermedad.',
    2:'La herencia ligada al X recesiva sí puede ser transmitida por un padre afectado a sus hijas (que serían portadoras), un patrón distinto al descrito, donde el padre no transmite nada.',
    3:'La herencia autosómica recesiva no depende del sexo del progenitor transmisor de esta forma tan marcada; ambos progenitores portadores contribuyen por igual al riesgo.'
  },
  trampa:'No reconocer el patrón absolutamente asimétrico entre transmisión materna (a todos los hijos) y paterna (a ninguno) como la firma característica de la herencia mitocondrial.',
  obj:'Identificar el patrón de herencia mitocondrial a partir de un árbol genealógico.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['herencia mitocondrial','transmisión materna exclusiva','ADN mitocondrial','árbol genealógico']
},
{
  id:'U8-G-Q17', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Riesgo de recurrencia', sub:'Independencia de embarazos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una pareja, ambos portadores conocidos de una mutación autosómica recesiva, ya tuvo un hijo afectado por la enfermedad. Ahora planean un nuevo embarazo y preguntan si el riesgo es menor porque "ya les tocó" tener un hijo afectado.',
  enunciado:'¿Cuál es la respuesta correcta sobre el riesgo de recurrencia en este nuevo embarazo?',
  ops:[
    'El riesgo sigue siendo 25%, exactamente el mismo que en el primer embarazo, porque cada concepción es un evento independiente',
    'El riesgo es menor, porque ya tuvieron un hijo afectado',
    'El riesgo es mayor al 25%, porque el riesgo se acumula con cada embarazo',
    'El riesgo es del 100%, porque ambos son portadores conocidos'
  ],
  ok:0,
  clave:'El riesgo sigue siendo 25% en cada embarazo nuevo, independientemente de los resultados de embarazos previos.',
  exp:'Para una enfermedad autosómica recesiva con ambos padres portadores conocidos, el riesgo es 25% por embarazo, independientemente de los embarazos previos, porque cada concepción es un evento genético independiente. Pensar que, tras tener un hijo afectado, "toca" tener uno sano (o viceversa) es un error de razonamiento probabilístico (la falacia del jugador aplicada a la genética) -el riesgo del 25% se mantiene exactamente igual en cada embarazo nuevo, sin importar el resultado de los anteriores.',
  no:{
    1:'El riesgo no disminuye por haber tenido ya un hijo afectado; cada embarazo es un evento independiente con el mismo riesgo del 25%.',
    2:'El riesgo tampoco aumenta por acumulación; se mantiene constante en 25% en cada embarazo, sin importar cuántos embarazos previos haya habido ni sus resultados.',
    3:'El riesgo no es del 100%; para una enfermedad autosómica recesiva con ambos padres portadores heterocigotos, la probabilidad de que un hijo sea homocigoto afectado es 25%, no 100%.'
  },
  trampa:'Aplicar una lógica de "compensación" entre embarazos sucesivos, cuando en realidad cada concepción es estadísticamente independiente de las anteriores.',
  obj:'Explicar la independencia del riesgo de recurrencia entre embarazos sucesivos en una pareja de portadores.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['riesgo de recurrencia','herencia autosómica recesiva','independencia de eventos','consejo genético']
},
{
  id:'U8-G-Q18', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'No disyunción', sub:'Edad materna',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el riesgo de no disyunción cromosómica aumenta con la edad materna avanzada?',
  ops:[
    'Porque los ovocitos permanecen detenidos en meiosis I durante décadas, y ese tiempo prolongado aumenta el riesgo de errores en la maquinaria de segregación cromosómica',
    'Porque la edad materna no tiene ninguna relación con el riesgo de no disyunción',
    'Porque los espermatozoides son los que acumulan el riesgo con la edad',
    'Porque los ovocitos se producen continuamente durante toda la vida adulta, igual que los espermatozoides'
  ],
  ok:0,
  clave:'El tiempo prolongado que los ovocitos permanecen detenidos en meiosis I aumenta el riesgo de errores de segregación con la edad.',
  exp:'Los ovocitos entran en meiosis I durante la vida fetal pero quedan detenidos en esa fase hasta décadas después, cuando ese folículo específico es reclutado en un ciclo menstrual. Cuanto más tiempo permanece un ovocito detenido, más tiempo tienen sus estructuras de división (como el huso meiótico) para deteriorarse, aumentando el riesgo de errores en la segregación cromosómica (no disyunción) al completar finalmente la meiosis -esto explica por qué el riesgo de trisomías aumenta marcadamente con la edad materna avanzada.',
  no:{
    1:'La edad materna sí tiene una relación bien establecida y significativa con el riesgo de no disyunción, precisamente por el tiempo prolongado de detención meiótica de los ovocitos.',
    2:'El riesgo asociado a la edad se relaciona principalmente con los ovocitos maternos, no con los espermatozoides, cuya producción es continua y relativamente rápida.',
    3:'Los ovocitos NO se producen continuamente; la mujer nace con su dotación completa de ovocitos, que permanecen detenidos en meiosis I hasta ser reclutados -un patrón muy distinto al de la producción continua de espermatozoides.'
  },
  trampa:'No conectar el mecanismo específico (detención prolongada de la meiosis I en el ovocito) con el aumento del riesgo de no disyunción asociado a la edad materna.',
  obj:'Explicar por qué el riesgo de no disyunción cromosómica aumenta con la edad materna.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['no disyunción','edad materna','meiosis I','trisomía']
},
{
  id:'U8-G-Q19', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Trisomías autosómicas', sub:'Tamaño del cromosoma y gravedad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué patrón general relaciona el tamaño del cromosoma extra con la gravedad de una trisomía autosómica?',
  ops:[
    'A mayor tamaño del cromosoma extra, mejor tolerada es la trisomía',
    'A menor tamaño del cromosoma extra, mejor tolerada suele ser la trisomía (por eso la trisomía 21, uno de los cromosomas más pequeños, es la más viable)',
    'El tamaño del cromosoma no tiene ninguna relación con la gravedad de la trisomía',
    'Todas las trisomías autosómicas tienen exactamente la misma gravedad clínica'
  ],
  ok:1,
  clave:'A menor tamaño del cromosoma extra, mejor tolerancia; el cromosoma 21, pequeño, explica la mayor viabilidad de su trisomía.',
  exp:'Cuanto MÁS PEQUEÑO es el cromosoma extra (menos material genético de más), MEJOR tolerada suele ser la trisomía. El cromosoma 21 es de los más pequeños del genoma humano, lo que en parte explica por qué su trisomía (síndrome de Down) es compatible con una supervivencia prolongada, mientras que trisomías de cromosomas más grandes, como el 18 (síndrome de Edwards) o el 13 (síndrome de Patau), son mucho más graves y con supervivencia habitualmente muy limitada.',
  no:{
    0:'Es al revés: a MAYOR tamaño del cromosoma extra, PEOR tolerada es la trisomía, no mejor.',
    2:'El tamaño del cromosoma extra sí tiene una relación clara con la gravedad clínica de la trisomía correspondiente.',
    3:'Las distintas trisomías autosómicas tienen gravedades clínicas marcadamente distintas entre sí, relacionadas en parte con el tamaño del cromosoma involucrado.'
  },
  trampa:'Invertir la relación entre tamaño del cromosoma extra y gravedad de la trisomía, o asumir que todas las trisomías son equivalentes en gravedad.',
  obj:'Explicar la relación entre el tamaño del cromosoma extra y la gravedad clínica de una trisomía autosómica.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['trisomía 21','síndrome de Down','tamaño cromosómico','gravedad clínica']
},
{
  id:'U8-G-Q20', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Síndrome de Turner', sub:'Hallazgos característicos',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el cariotipo característico del síndrome de Turner, y a quién afecta?',
  ops:[
    '47,XXY; afecta a hombres', '45,X; afecta solo a mujeres', '47,XXX; afecta solo a hombres', '46,XY; afecta a ambos sexos por igual'],
  ok:1,
  clave:'El síndrome de Turner corresponde al cariotipo 45,X (monosomía del X), afectando exclusivamente a mujeres.',
  exp:'El síndrome de Turner corresponde al cariotipo 45,X -una monosomía del cromosoma X, sin un segundo cromosoma sexual-, y afecta exclusivamente a mujeres (ya que la ausencia total de cromosomas sexuales, como faltaría un Y también, no sería compatible con esta condición en un varón). Se caracteriza por talla baja, disgenesia gonadal con infertilidad, y a veces cardiopatía congénita (coartación aórtica) y linfedema de manos y pies al nacer.',
  no:{
    0:'El cariotipo 47,XXY corresponde al síndrome de Klinefelter, que afecta a hombres, no al síndrome de Turner.',
    2:'El cariotipo 47,XXX (síndrome del triple X) afecta a mujeres, no a hombres, y es una condición distinta del síndrome de Turner.',
    3:'El cariotipo 46,XY es el cariotipo masculino normal, no una alteración cromosómica asociada al síndrome de Turner.'
  },
  trampa:'Confundir los cariotipos característicos de las distintas alteraciones numéricas de cromosomas sexuales entre sí.',
  obj:'Identificar el cariotipo característico del síndrome de Turner.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['síndrome de Turner','45,X','monosomía del X','disgenesia gonadal']
},
{
  id:'U8-G-Q21', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Alteraciones sexuales numéricas', sub:'Mejor tolerancia que autosómicas',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las alteraciones numéricas de los cromosomas SEXUALES suelen ser mucho mejor toleradas que las de los autosomas?',
  ops:[
    'Porque el mecanismo de inactivación del X (lyonización) amortigua el efecto de tener un número anómalo de cromosomas X, un mecanismo que no existe para los autosomas',
    'Porque los cromosomas sexuales no contienen genes esenciales',
    'Porque las alteraciones de cromosomas sexuales son en realidad igual de graves que las autosómicas',
    'Porque el cromosoma Y siempre compensa cualquier alteración numérica'
  ],
  ok:0,
  clave:'La inactivación del X amortigua el efecto de un número anómalo de cromosomas X, un mecanismo exclusivo de los cromosomas sexuales.',
  exp:'El mecanismo de inactivación del X (lyonización) hace que, en cada célula, solo un cromosoma X permanezca activo, sin importar cuántos X totales tenga la persona. Esto "amortigua" el efecto de tener un número anómalo de cromosomas X -por ejemplo, en el síndrome de Klinefelter (47,XXY), el X extra simplemente se inactiva igual que ocurre normalmente con uno de los dos X en toda mujer. Los autosomas no tienen ningún mecanismo equivalente de compensación de dosis, así que una trisomía o monosomía autosómica altera directamente la dosis de todos los genes de ese cromosoma, con consecuencias mucho más graves.',
  no:{
    1:'Los cromosomas sexuales sí contienen genes esenciales; la mejor tolerancia de sus alteraciones numéricas se debe al mecanismo de compensación de dosis (inactivación del X), no a la ausencia de genes importantes.',
    2:'Las alteraciones numéricas de cromosomas sexuales son, en general, considerablemente MEJOR toleradas que las autosómicas, no igual de graves.',
    3:'El cromosoma Y no tiene un mecanismo de "compensación" equivalente al de la inactivación del X; el mecanismo protector específico es la lyonización del cromosoma X.'
  },
  trampa:'No identificar el mecanismo específico (inactivación del X) que explica la mejor tolerancia de las alteraciones numéricas de cromosomas sexuales frente a las autosómicas.',
  obj:'Explicar por qué las alteraciones numéricas de cromosomas sexuales son mejor toleradas que las autosómicas.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['lyonización','inactivación del X','síndrome de Klinefelter','compensación de dosis']
},
{
  id:'U8-G-Q22', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Síndrome de Klinefelter', sub:'Cariotipo y hallazgos',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué hallazgos característicos se asocian al síndrome de Klinefelter (47,XXY)?',
  ops:['Talla baja y disgenesia gonadal en mujeres', 'Hipogonadismo, infertilidad y talla alta en hombres, con frecuencia ginecomastia', 'Discapacidad intelectual grave con risa inapropiada', 'Obesidad progresiva e hiperfagia desde la infancia'],
  ok:1,
  clave:'El síndrome de Klinefelter (47,XXY) se caracteriza por hipogonadismo, infertilidad, talla alta y frecuente ginecomastia en hombres.',
  exp:'El síndrome de Klinefelter (47,XXY, un cromosoma X de más en un varón) afecta a hombres, con hipogonadismo, infertilidad, talla alta y con frecuencia ginecomastia. Es distinto del síndrome de Turner (talla baja y disgenesia gonadal, pero en mujeres), del síndrome de Angelman (discapacidad intelectual grave con risa inapropiada) y del síndrome de Prader-Willi (obesidad progresiva e hiperfagia).',
  no:{
    0:'Esa descripción corresponde al síndrome de Turner (45,X), que afecta a mujeres, no al síndrome de Klinefelter, que afecta a hombres.',
    2:'Esa descripción corresponde al síndrome de Angelman, un trastorno por impronta genómica distinto, sin relación con el cariotipo 47,XXY.',
    3:'Esa descripción corresponde al síndrome de Prader-Willi, también un trastorno por impronta genómica distinto del síndrome de Klinefelter.'
  },
  trampa:'Confundir los hallazgos característicos del síndrome de Klinefelter con los de otros síndromes genéticos de nombre o mecanismo distinto.',
  obj:'Identificar los hallazgos característicos del síndrome de Klinefelter.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['síndrome de Klinefelter','47,XXY','hipogonadismo','ginecomastia']
}

]);
