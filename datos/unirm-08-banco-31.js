/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE INMUNOLOGIA (1/2)
   Amplia Inmunologia de 2 a 50 preguntas junto con banco-32.js.
   Esta parte cubre inmunidad innata y adaptativa, celulas y
   organos del sistema inmunitario, antigeno/anticuerpo/MHC,
   complemento y respuesta humoral y celular (temas 1-5).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== INMUNOLOGIA ===================== */
{
  id:'U8-I-Q03', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Inmunidad innata y adaptativa', sub:'Velocidad y memoria',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la diferencia fundamental de velocidad y memoria entre la inmunidad innata y la adaptativa?',
  ops:[
    'La innata actúa en minutos-horas y NO deja memoria; la adaptativa tarda días en la primera exposición pero SÍ deja memoria',
    'Ambas actúan con la misma velocidad y ambas dejan memoria por igual',
    'La innata deja memoria y la adaptativa no',
    'La adaptativa siempre es más rápida que la innata'
  ],
  ok:0,
  clave:'La innata es rápida y sin memoria; la adaptativa es lenta la primera vez pero deja memoria inmunológica.',
  exp:'La inmunidad innata actúa en minutos u horas y responde igual la primera vez que la centésima, sin dejar memoria. La inmunidad adaptativa tarda días en montar una respuesta efectiva durante la primera exposición (necesita seleccionar y expandir los clones de linfocitos adecuados), pero deja memoria inmunológica, de modo que una segunda exposición al mismo antígeno genera una respuesta mucho más rápida e intensa -principio en el que se basa toda la vacunación.',
  no:{
    1:'No actúan con la misma velocidad ni dejan memoria por igual; son precisamente sus diferencias clave las que las distinguen.',
    2:'Es al revés: la innata NO deja memoria, y la adaptativa SÍ la deja.',
    3:'La adaptativa es más LENTA que la innata durante la primera exposición, precisamente porque necesita seleccionar y expandir clones específicos de linfocitos.'
  },
  trampa:'Invertir cuál sistema es rápido sin memoria y cuál es lento pero con memoria.',
  obj:'Distinguir la velocidad y la capacidad de memoria de la inmunidad innata frente a la adaptativa.',
  ref:'Abbas, Inmunología Celular y Molecular. Janeway, Inmunobiología.',
  tags:['inmunidad innata','adaptativa','memoria inmunitaria','velocidad de respuesta']
},
{
  id:'U8-I-Q04', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Inmunidad innata y adaptativa', sub:'Células dendríticas como puente',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se dice que las células dendríticas son el "puente" entre la inmunidad innata y la adaptativa?',
  ops:[
    'Porque, siendo parte del sistema innato, capturan el antígeno en el tejido periférico, migran al ganglio y lo presentan a los linfocitos T, activando así la respuesta adaptativa',
    'Porque las células dendríticas producen anticuerpos directamente',
    'Las células dendríticas no tienen ninguna relación con la activación de la respuesta adaptativa',
    'Porque las células dendríticas son en realidad linfocitos T maduros'
  ],
  ok:0,
  clave:'Las células dendríticas, parte de la innata, capturan y presentan el antígeno en el ganglio, activando así la adaptativa.',
  exp:'Las células dendríticas, que pertenecen al sistema inmunitario innato, capturan el antígeno en el tejido periférico donde ocurrió la infección, migran hacia el ganglio linfático más cercano y ahí lo presentan a los linfocitos T vírgenes -sin esta presentación previa, la respuesta adaptativa simplemente no se pone en marcha. Por eso la innata "instruye" a la adaptativa, y las dendríticas son el puente físico entre ambos sistemas.',
  no:{
    1:'Las células dendríticas no producen anticuerpos; esa es función de los linfocitos B (y las células plasmáticas derivadas de ellos).',
    2:'Las células dendríticas sí tienen una relación central y bien establecida con la activación de la respuesta adaptativa, precisamente como el puente que la desencadena.',
    3:'Las células dendríticas son células presentadoras de antígeno, un tipo celular distinto de los linfocitos T; no son linfocitos T maduros.'
  },
  trampa:'No reconocer el rol específico de las células dendríticas como el vínculo funcional entre la inmunidad innata y la activación de la respuesta adaptativa.',
  obj:'Explicar el rol de las células dendríticas como puente entre la inmunidad innata y la adaptativa.',
  ref:'Abbas, Inmunología Celular y Molecular. Janeway, Inmunobiología.',
  tags:['células dendríticas','presentación de antígeno','ganglio linfático','inmunidad innata']
},
{
  id:'U8-I-Q05', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Inmunidad innata y adaptativa', sub:'Reconocimiento de patrones',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipo de reconocimiento usa la inmunidad innata para identificar microorganismos, y en qué se diferencia del reconocimiento de la adaptativa?',
  ops:[
    'La innata reconoce PATRONES generales compartidos por familias enteras de microorganismos; la adaptativa reconoce antígenos INDIVIDUALES y específicos',
    'Ambas reconocen exactamente los mismos antígenos específicos individuales',
    'La innata reconoce antígenos específicos individuales y la adaptativa reconoce solo patrones generales',
    'Ninguna de las dos ramas del sistema inmunitario usa ningún tipo de reconocimiento molecular'
  ],
  ok:0,
  clave:'La innata reconoce patrones generales compartidos por familias de microorganismos; la adaptativa reconoce antígenos individuales específicos.',
  exp:'El reconocimiento de la inmunidad innata se basa en PATRONES moleculares generales, compartidos por familias enteras de microorganismos (como ciertas estructuras comunes de la pared bacteriana), lo que le permite responder rápidamente sin necesitar experiencia previa. El reconocimiento de la inmunidad adaptativa, en cambio, es mucho más fino: reconoce antígenos INDIVIDUALES y específicos, gracias a receptores de linfocitos generados por un proceso de diversificación genética que produce millones de especificidades distintas.',
  no:{
    1:'No reconocen exactamente lo mismo; el tipo de reconocimiento (patrones generales frente a antígenos específicos) es precisamente lo que las distingue.',
    2:'Está invertido: la innata reconoce patrones GENERALES, y la adaptativa reconoce antígenos ESPECÍFICOS individuales, no al revés.',
    3:'Ambas ramas del sistema inmunitario sí usan reconocimiento molecular, aunque de tipos distintos (patrones generales frente a antígenos específicos).'
  },
  trampa:'Invertir qué rama reconoce patrones generales y cuál reconoce antígenos específicos individuales.',
  obj:'Distinguir el tipo de reconocimiento molecular usado por la inmunidad innata frente a la adaptativa.',
  ref:'Abbas, Inmunología Celular y Molecular. Janeway, Inmunobiología.',
  tags:['reconocimiento de patrones','especificidad','inmunidad innata','inmunidad adaptativa']
},
{
  id:'U8-I-Q06', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Inmunidad innata y adaptativa', sub:'Barreras físicas y químicas',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿A cuál componente del sistema inmunitario pertenecen las barreras físicas y químicas, como la piel intacta y el pH ácido gástrico?',
  ops:['Inmunidad innata', 'Inmunidad adaptativa exclusivamente', 'Ninguna de las dos, son mecanismos independientes del sistema inmunitario', 'Solo a la memoria inmunitaria'],
  ok:0,
  clave:'Las barreras físicas y químicas (piel, pH ácido gástrico) son parte de la inmunidad innata.',
  exp:'Las barreras físicas y químicas -la piel intacta, las mucosas, el pH ácido del estómago, la lisozima presente en secreciones como las lágrimas y la saliva- son la primera línea de defensa del cuerpo, y forman parte de la inmunidad INNATA: actúan de inmediato, sin necesidad de exposición previa, y sin generar memoria inmunológica específica contra un patógeno en particular.',
  no:{
    1:'La inmunidad adaptativa no incluye barreras físicas y químicas; está compuesta por linfocitos B y T con receptores específicos.',
    2:'Las barreras físicas y químicas sí son parte formal del sistema inmunitario, específicamente de su rama innata.',
    3:'La memoria inmunitaria es una propiedad de la inmunidad adaptativa, no de las barreras físicas y químicas, que no generan memoria.'
  },
  trampa:'No reconocer que las barreras físicas y químicas son parte formal de la inmunidad innata, no un mecanismo separado del sistema inmunitario.',
  obj:'Clasificar las barreras físicas y químicas como componentes de la inmunidad innata.',
  ref:'Abbas, Inmunología Celular y Molecular. Janeway, Inmunobiología.',
  tags:['barreras físicas','barreras químicas','inmunidad innata','primera línea de defensa']
},
{
  id:'U8-I-Q07', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Inmunidad innata y adaptativa', sub:'Adyuvantes vacunales',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una vacuna incluye un adyuvante, una sustancia que estimula deliberadamente la respuesta inmunitaria innata junto con el antígeno vacunal.',
  enunciado:'¿Por qué tiene sentido incluir un adyuvante que estimula la respuesta INNATA en una vacuna diseñada para generar inmunidad ADAPTATIVA duradera?',
  ops:[
    'Porque la innata instruye a la adaptativa (por ejemplo, mediante la activación de células dendríticas); potenciar la señal innata inicial mejora la calidad de la respuesta adaptativa que se genera después',
    'El adyuvante no tiene ninguna relación con la respuesta adaptativa generada por la vacuna',
    'Los adyuvantes reemplazan por completo la necesidad del antígeno vacunal',
    'Los adyuvantes actúan solo después de que la respuesta adaptativa ya se completó'
  ],
  ok:0,
  clave:'El adyuvante potencia la señal innata inicial (por ejemplo, activando dendríticas), lo que mejora la calidad de la respuesta adaptativa generada después.',
  exp:'Como la inmunidad innata "instruye" a la adaptativa -las células dendríticas capturan y presentan el antígeno, activando a los linfocitos T-, potenciar deliberadamente esa señal innata inicial con un adyuvante mejora la calidad y la magnitud de la respuesta adaptativa que se genera después, incluyendo una memoria inmunitaria más robusta. Por eso muchas vacunas modernas incluyen adyuvantes específicamente diseñados para este propósito.',
  no:{
    1:'El adyuvante sí tiene una relación directa y bien fundamentada con la calidad de la respuesta adaptativa que genera la vacuna, precisamente por la conexión innata-adaptativa.',
    2:'El adyuvante no reemplaza al antígeno vacunal; actúa junto con él, potenciando la respuesta hacia ese antígeno específico, no sustituyéndolo.',
    3:'El adyuvante actúa AL INICIO del proceso, estimulando la señal innata que precede y potencia la activación de la respuesta adaptativa, no después de que esta ya se completó.'
  },
  trampa:'No conectar la lógica de por qué estimular la inmunidad innata (mediante un adyuvante) mejora la respuesta adaptativa generada por una vacuna.',
  obj:'Explicar la lógica biológica de incluir un adyuvante en una vacuna, conectando innata y adaptativa.',
  ref:'Abbas, Inmunología Celular y Molecular. Janeway, Inmunobiología.',
  tags:['adyuvante','vacuna','células dendríticas','inmunidad innata']
},
{
  id:'U8-I-Q08', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Células y órganos del sistema inmunitario', sub:'Órganos linfoides primarios',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre el timo y la médula ósea como órganos linfoides primarios?',
  ops:[
    'Ambos son órganos linfoides primarios, pero los linfocitos B nacen Y maduran en la médula ósea, mientras que los linfocitos T nacen en la médula ósea pero migran al timo para completar su maduración',
    'El timo y la médula ósea son exactamente el mismo órgano con dos nombres distintos',
    'Ambos son órganos linfoides secundarios, no primarios',
    'Ningún linfocito madura en la médula ósea'
  ],
  ok:0,
  clave:'Los linfocitos B nacen y maduran en la médula ósea; los linfocitos T nacen en la médula ósea pero maduran en el timo.',
  exp:'La médula ósea es donde nacen TODAS las células sanguíneas, incluidos los linfocitos B, que además maduran ahí mismo, sin necesidad de trasladarse a otro órgano. El timo, en cambio, es el órgano donde maduran específicamente los linfocitos T -que nacen en la médula ósea, como todas las células sanguíneas, pero deben viajar al timo para completar su proceso de entrenamiento y selección antes de salir a circular.',
  no:{
    1:'El timo y la médula ósea son órganos anatómicamente distintos, con funciones complementarias pero diferentes dentro de la maduración linfocitaria.',
    2:'Ambos son órganos linfoides PRIMARIOS (donde las células se generan y maduran), no secundarios (donde ocurre el encuentro con el antígeno).',
    3:'Los linfocitos B sí maduran en la médula ósea, precisamente ahí mismo donde nacen, sin necesidad de migrar a otro órgano.'
  },
  trampa:'Confundir el timo con la médula ósea, o no distinguir cuál linfocito madura en cuál órgano.',
  obj:'Distinguir la función del timo y la médula ósea como órganos linfoides primarios.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 1-2.',
  tags:['timo','médula ósea','órganos linfoides primarios','maduración linfocitaria']
},
{
  id:'U8-I-Q09', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Células y órganos del sistema inmunitario', sub:'Ganglios linfáticos vs. bazo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia funcional hay entre los ganglios linfáticos y el bazo como órganos linfoides secundarios?',
  ops:[
    'Los ganglios linfáticos filtran la LINFA de una región del cuerpo; el bazo filtra la SANGRE',
    'Ambos filtran exactamente el mismo fluido corporal',
    'El bazo filtra la linfa y los ganglios filtran la sangre',
    'Ninguno de los dos filtra ningún fluido corporal'
  ],
  ok:0,
  clave:'Los ganglios linfáticos filtran linfa de una región; el bazo filtra sangre.',
  exp:'Los ganglios linfáticos filtran la LINFA proveniente de una región específica del cuerpo, siendo el sitio típico donde las células dendríticas presentan el antígeno capturado en los tejidos periféricos. El bazo, en cambio, filtra la SANGRE, no la linfa -es el órgano linfoide secundario especializado en responder a antígenos que circulan directamente en el torrente sanguíneo, incluyendo bacterias encapsuladas, como se ve en detalle en el tema de este órgano.',
  no:{
    1:'No filtran el mismo fluido; esa es precisamente la diferencia funcional clave entre ambos órganos linfoides secundarios.',
    2:'Está invertido: los ganglios filtran LINFA y el bazo filtra SANGRE, no al revés.',
    3:'Ambos órganos sí tienen una función de filtración bien establecida, cada uno especializado en un fluido corporal distinto.'
  },
  trampa:'Invertir cuál órgano filtra la linfa y cuál filtra la sangre.',
  obj:'Distinguir la función de filtración de los ganglios linfáticos frente al bazo.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 1-2.',
  tags:['ganglios linfáticos','bazo','órganos linfoides secundarios','filtración']
},
{
  id:'U8-I-Q10', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Células y órganos del sistema inmunitario', sub:'Esplenectomía y bacterias encapsuladas',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente de 34 años fue sometido a una esplenectomía de urgencia tras un trauma abdominal con lesión esplénica grave.',
  enunciado:'¿Contra qué tipo específico de microorganismos queda este paciente particularmente vulnerable, y qué medida preventiva debe recibir?',
  ops:[
    'Queda vulnerable a bacterias ENCAPSULADAS (neumococo, meningococo, Haemophilus influenzae tipo B); debe vacunarse contra estos tres microorganismos lo antes posible',
    'Queda vulnerable únicamente a infecciones virales, sin ningún riesgo bacteriano aumentado',
    'La esplenectomía no aumenta el riesgo de ningún tipo de infección',
    'Queda vulnerable a hongos exclusivamente, sin ningún riesgo relacionado con bacterias'
  ],
  ok:0,
  clave:'El paciente esplenectomizado queda vulnerable a bacterias encapsuladas (neumococo, meningococo, Haemophilus) y debe vacunarse contra ellas.',
  exp:'El bazo es el sitio principal donde el sistema inmunitario reconoce y responde eficazmente a bacterias con cápsula polisacárida gruesa -neumococo, meningococo y Haemophilus influenzae tipo B-. Un paciente esplenectomizado pierde buena parte de esa capacidad específica, quedando con riesgo aumentado y bien documentado de infecciones fulminantes por estas bacterias encapsuladas (sepsis post-esplenectomía). Por esta razón, se vacuna a estos pacientes específicamente contra estos tres microorganismos, idealmente antes de una cirugía electiva o lo antes posible después de una esplenectomía de urgencia.',
  no:{
    1:'El riesgo aumentado es específicamente hacia bacterias encapsuladas, no hacia infecciones virales de forma predominante.',
    2:'La esplenectomía sí aumenta de forma real y bien documentada el riesgo de infecciones graves por bacterias encapsuladas específicamente.',
    3:'El riesgo aumentado tras la esplenectomía es específicamente hacia bacterias encapsuladas, no hacia hongos.'
  },
  trampa:'No identificar el riesgo específico de bacterias encapsuladas (y no de cualquier microorganismo en general) tras una esplenectomía.',
  obj:'Identificar el riesgo infeccioso específico y la conducta preventiva en un paciente esplenectomizado.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 1-2.',
  tags:['esplenectomía','bacterias encapsuladas','sepsis post-esplenectomía','vacunación']
},
{
  id:'U8-I-Q11', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Antígeno, anticuerpo y complejo mayor de histocompatibilidad', sub:'Estructura del anticuerpo',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué parte de la estructura de un anticuerpo (inmunoglobulina) le da su especificidad por un antígeno particular?',
  ops:[
    'La región VARIABLE, que difiere enormemente de un anticuerpo a otro', 'La región constante exclusivamente', 'Ninguna región del anticuerpo determina su especificidad', 'La especificidad depende únicamente del antígeno, no del anticuerpo'],
  ok:0,
  clave:'La región variable del anticuerpo, que difiere mucho entre anticuerpos, determina su especificidad por un antígeno particular.',
  exp:'La inmunoglobulina tiene una estructura característica en forma de Y, con una región VARIABLE que difiere enormemente de un anticuerpo a otro -dándole su especificidad exclusiva por un antígeno particular, de forma análoga a una llave que encaja en una sola cerradura- y una región CONSTANTE que determina su función efectora, es decir, cómo actúa el anticuerpo una vez que ya está unido al antígeno.',
  no:{
    1:'La región constante determina la función EFECTORA del anticuerpo (cómo actúa), no su especificidad por un antígeno particular.',
    2:'Sí existe una región específica (la región variable) responsable de la especificidad del anticuerpo por su antígeno.',
    3:'La especificidad depende de la estructura molecular de la región variable del anticuerpo, que debe encajar con el antígeno específico, no solo del antígeno por sí solo.'
  },
  trampa:'Confundir la región variable (especificidad) con la región constante (función efectora) del anticuerpo.',
  obj:'Identificar la región variable del anticuerpo como responsable de su especificidad antigénica.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 3 y 6.',
  tags:['anticuerpo','inmunoglobulina','región variable','especificidad']
},
{
  id:'U8-I-Q12', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Antígeno, anticuerpo y complejo mayor de histocompatibilidad', sub:'MHC clase I vs. clase II',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre el MHC de clase I y el de clase II, en cuanto a qué células lo expresan y qué presentan?',
  ops:[
    'MHC I: presente en casi todas las células nucleadas, presenta lo producido DENTRO de la célula. MHC II: solo en células presentadoras profesionales, presenta lo capturado DESDE AFUERA',
    'Ambas clases de MHC están presentes exactamente en las mismas células y presentan lo mismo',
    'MHC I presenta lo capturado desde afuera y MHC II presenta lo producido dentro',
    'Ninguna célula del cuerpo expresa MHC de ninguna clase'
  ],
  ok:0,
  clave:'MHC I: en casi todas las células nucleadas, presenta lo producido dentro. MHC II: solo en presentadoras profesionales, presenta lo capturado desde afuera.',
  exp:'El MHC de clase I está presente en prácticamente todas las células nucleadas del cuerpo, y presenta fragmentos de proteínas producidas DENTRO de la propia célula -útil para detectar una célula infectada por un virus. El MHC de clase II está presente solo en células especializadas (las células presentadoras de antígeno "profesionales": dendríticas, macrófagos, linfocitos B), y presenta fragmentos de proteínas capturadas DESDE AFUERA de la célula.',
  no:{
    1:'No están presentes en las mismas células ni presentan lo mismo; esa es precisamente la diferencia funcional clave entre ambas clases de MHC.',
    2:'Está invertido: MHC I presenta lo producido DENTRO, y MHC II presenta lo capturado DESDE AFUERA, no al revés.',
    3:'El MHC de clase I sí está presente en casi todas las células nucleadas del cuerpo, y el de clase II en células presentadoras específicas.'
  },
  trampa:'Invertir qué clase de MHC (I o II) presenta antígenos intracelulares y cuál presenta antígenos extracelulares capturados.',
  obj:'Distinguir el MHC de clase I del de clase II según qué células lo expresan y qué presentan.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 3 y 6.',
  tags:['MHC clase I','MHC clase II','presentación de antígeno','células nucleadas']
},
{
  id:'U8-I-Q13', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Antígeno, anticuerpo y complejo mayor de histocompatibilidad', sub:'MHC y HLA',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'En el ser humano, ¿qué relación existe entre los términos "MHC" y "HLA"?',
  ops:[
    'Son el MISMO sistema molecular; "HLA" (antígeno leucocitario humano) es el nombre que recibe el MHC específicamente en humanos',
    'Son dos sistemas moleculares completamente distintos y no relacionados',
    'El HLA es un tipo de anticuerpo, sin relación con el MHC',
    'El MHC solo existe en animales, nunca en humanos'
  ],
  ok:0,
  clave:'MHC y HLA son el mismo sistema; HLA es el nombre que recibe el MHC en humanos.',
  exp:'En el ser humano, el MHC tiene otro nombre muy usado en la práctica clínica: HLA (antígeno leucocitario humano). "MHC" y "HLA" se refieren, en humanos, exactamente al mismo sistema molecular de proteínas de superficie celular responsables de la presentación de antígeno -es simplemente una cuestión de nomenclatura según el contexto (básico/comparado o clínico/humano) en el que se use el término.',
  no:{
    1:'No son sistemas distintos; son exactamente el mismo sistema molecular, solo con nombres distintos según el contexto de uso.',
    2:'El HLA no es un anticuerpo; es el nombre humano del sistema MHC de proteínas de presentación de antígeno.',
    3:'El MHC sí existe en humanos, donde recibe específicamente el nombre de HLA.'
  },
  trampa:'Tratar "MHC" y "HLA" como conceptos distintos, sin reconocer que son el mismo sistema molecular con nombres distintos.',
  obj:'Reconocer que MHC y HLA son el mismo sistema molecular en el ser humano.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 3 y 6.',
  tags:['MHC','HLA','nomenclatura','histocompatibilidad']
},
{
  id:'U8-I-Q14', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Antígeno, anticuerpo y complejo mayor de histocompatibilidad', sub:'MHC y rechazo de trasplante',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la enorme variabilidad del MHC entre distintas personas es la razón molecular directa del riesgo de rechazo en un trasplante de órgano?',
  ops:[
    'Porque el sistema inmunitario del receptor reconoce el MHC del órgano donado, si es distinto al propio, como material "extraño", disparando una respuesta de rechazo',
    'El MHC no tiene ninguna relación con el rechazo de trasplantes',
    'El MHC es idéntico entre todas las personas, salvo casos excepcionales',
    'El rechazo de trasplantes ocurre únicamente por razones no inmunológicas'
  ],
  ok:0,
  clave:'El sistema inmunitario del receptor reconoce el MHC distinto del órgano donado como extraño, disparando una respuesta de rechazo.',
  exp:'Como el MHC es extremadamente variable entre personas (salvo entre gemelos idénticos, que comparten el mismo MHC), el sistema inmunitario de un receptor de trasplante reconoce el MHC de las células del órgano donado como "extraño" si no coincide con el propio, disparando una respuesta inmunitaria de rechazo -esta es la razón molecular directa y bien establecida detrás de la necesidad de evaluar la compatibilidad de tejidos antes de un trasplante.',
  no:{
    1:'El MHC sí tiene una relación directa y central con el rechazo de trasplantes, siendo precisamente su causa molecular fundamental.',
    2:'El MHC es, al contrario, extremadamente VARIABLE entre personas (salvo gemelos idénticos), no idéntico entre todas ellas.',
    3:'El rechazo de trasplante es, en su forma clásica, un fenómeno fundamentalmente inmunológico, relacionado directamente con el reconocimiento del MHC extraño.'
  },
  trampa:'No conectar la variabilidad del MHC entre personas con la causa molecular directa del rechazo de trasplantes.',
  obj:'Explicar por qué la variabilidad del MHC entre personas es la causa molecular del rechazo de trasplantes.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 3 y 6.',
  tags:['MHC','rechazo de trasplante','histocompatibilidad','variabilidad genética']
},
{
  id:'U8-I-Q15', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Complemento', sub:'Vía clásica vs. vía alterna',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre la vía clásica y la vía alterna de activación del complemento?',
  ops:[
    'La vía clásica necesita un anticuerpo previo unido al antígeno; la vía alterna se activa directamente sobre la superficie del microorganismo, sin necesitar anticuerpo',
    'Ambas vías requieren exactamente el mismo anticuerpo previo para activarse',
    'La vía alterna requiere anticuerpo y la vía clásica no',
    'Ninguna de las dos vías requiere ningún tipo de activación previa'
  ],
  ok:0,
  clave:'La vía clásica necesita anticuerpo previo; la vía alterna se activa directamente sobre el microorganismo, sin anticuerpo.',
  exp:'La vía clásica se activa cuando una proteína del complemento se une a un anticuerpo que ya está unido a su antígeno específico -conectando así el sistema adaptativo con el innato. La vía alterna, en cambio, se activa directamente sobre la superficie de ciertos microorganismos, sin necesitar la presencia previa de un anticuerpo específico, formando parte de la respuesta innata más inmediata, disponible desde el primer contacto con el patógeno.',
  no:{
    1:'No requieren el mismo mecanismo de activación; esa es precisamente la diferencia clave entre ambas vías.',
    2:'Está invertido: la vía CLÁSICA requiere anticuerpo previo, y la vía ALTERNA no, no al revés.',
    3:'Ambas vías sí tienen un mecanismo específico de activación, aunque distinto entre sí (con o sin anticuerpo previo).'
  },
  trampa:'Invertir cuál vía del complemento requiere anticuerpo previo y cuál se activa directamente sobre el microorganismo.',
  obj:'Distinguir la vía clásica de la vía alterna de activación del complemento.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 5.',
  tags:['complemento','vía clásica','vía alterna','activación']
},
{
  id:'U8-I-Q16', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Complemento', sub:'C3 como punto de convergencia',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué papel juega la proteína C3 dentro del sistema del complemento?',
  ops:[
    'Es el punto de CONVERGENCIA de las distintas vías de activación del complemento -todas terminan pasando por su activación',
    'C3 no tiene ninguna relación con las vías de activación del complemento',
    'C3 es exclusiva de la vía clásica, sin ninguna relación con la vía alterna',
    'C3 es el nombre de un tipo de anticuerpo, no del complemento'
  ],
  ok:0,
  clave:'C3 es el punto de convergencia de todas las vías de activación del complemento.',
  exp:'Tanto la vía clásica como la vía alterna (y una tercera vía, la de las lectinas) convergen en la activación de C3, la proteína central de todo el sistema del complemento. Al activarse, C3 se divide en dos fragmentos con funciones distintas: uno queda pegado a la superficie del microorganismo (permitiendo la opsonización), y el otro continúa la cascada hacia la formación final del complejo de ataque a la membrana.',
  no:{
    1:'C3 sí tiene una relación central con las vías de activación del complemento; es, precisamente, su punto de convergencia común.',
    2:'C3 no es exclusiva de la vía clásica; ambas vías (clásica y alterna) convergen en su activación.',
    3:'C3 es una proteína del sistema del COMPLEMENTO, no un tipo de anticuerpo (inmunoglobulina).'
  },
  trampa:'No reconocer que C3 es el punto de convergencia común de las distintas vías de activación del complemento, no exclusiva de una sola vía.',
  obj:'Explicar el papel de C3 como punto de convergencia del sistema del complemento.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 5.',
  tags:['C3','complemento','convergencia de vías','opsonización']
},
{
  id:'U8-I-Q17', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Complemento', sub:'Complejo de ataque a la membrana',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es el complejo de ataque a la membrana (MAC), y cómo destruye al microorganismo?',
  ops:[
    'Es un conjunto de proteínas del complemento que se ensamblan sobre la membrana del microorganismo, formando un poro que causa su lisis (destrucción física directa)',
    'El MAC es un tipo de anticuerpo especializado en marcar microorganismos',
    'El MAC actúa exclusivamente atrayendo células inflamatorias, sin destruir directamente al microorganismo',
    'El MAC no tiene ninguna función real dentro del sistema del complemento'
  ],
  ok:0,
  clave:'El MAC es un conjunto de proteínas del complemento que forman un poro en la membrana del microorganismo, causando su lisis directa.',
  exp:'Al final de la cascada del complemento, se forma el complejo de ataque a la membrana (MAC): un conjunto de proteínas del complemento que se ensamblan directamente sobre la membrana del microorganismo, formando literalmente un poro que causa su lisis -destrucción física directa por entrada masiva de agua y salida del contenido celular del microorganismo.',
  no:{
    1:'El MAC no es un anticuerpo; es un ensamblaje de proteínas del sistema del complemento que actúa por un mecanismo físico directo sobre la membrana.',
    2:'El MAC sí destruye directamente al microorganismo, formando un poro en su membrana, más allá de solo atraer células inflamatorias (que es efecto de otros fragmentos del complemento).',
    3:'El MAC sí tiene una función real y bien caracterizada: la destrucción directa por lisis del microorganismo, uno de los tres efectos principales de la activación del complemento.'
  },
  trampa:'No reconocer el mecanismo físico directo (formación de un poro en la membrana) por el cual el MAC destruye al microorganismo.',
  obj:'Explicar el mecanismo de acción del complejo de ataque a la membrana (MAC).',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 5.',
  tags:['complejo de ataque a la membrana','MAC','lisis','complemento']
},
{
  id:'U8-I-Q18', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Respuesta humoral y celular', sub:'CD4 vs. CD8',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre el trabajo de los linfocitos T CD4 y los T CD8?',
  ops:[
    'CD4 (MHC II) COORDINA mediante citocinas, sin destruir directamente; CD8 (MHC I) DESTRUYE directamente a las células infectadas',
    'Ambos tipos de linfocitos T realizan exactamente el mismo trabajo',
    'CD8 coordina mediante citocinas y CD4 destruye directamente',
    'Ninguno de los dos tipos de linfocitos T tiene ninguna función específica'
  ],
  ok:0,
  clave:'CD4 coordina mediante citocinas sin destruir directamente; CD8 destruye directamente células infectadas.',
  exp:'Los linfocitos T CD4 (colaboradores, reconocen MHC II) no destruyen directamente; su trabajo es COORDINAR y potenciar al resto del sistema inmunitario mediante la liberación de citocinas, activando a los linfocitos B, macrófagos y a los propios CD8. Los linfocitos T CD8 (citotóxicos, reconocen MHC I) DESTRUYEN DIRECTAMENTE a las células infectadas que detectan, siendo la rama más eficaz contra patógenos intracelulares como los virus.',
  no:{
    1:'No realizan el mismo trabajo; sus funciones (coordinación frente a destrucción directa) son claramente distintas y complementarias.',
    2:'Está invertido: CD4 COORDINA (sin destruir directamente) y CD8 DESTRUYE directamente, no al revés.',
    3:'Ambos tipos de linfocitos T sí tienen funciones específicas y bien caracterizadas, aunque distintas entre sí.'
  },
  trampa:'Invertir cuál subtipo de linfocito T (CD4 o CD8) coordina mediante citocinas y cuál destruye directamente células infectadas.',
  obj:'Distinguir la función de los linfocitos T CD4 frente a los CD8.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 1, 9 y 10.',
  tags:['CD4','CD8','citocinas','linfocitos T']
},
{
  id:'U8-I-Q19', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Respuesta humoral y celular', sub:'VIH y linfocitos CD4',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente con infección por VIH sin tratamiento antirretroviral presenta, con el paso de los años, un deterioro progresivo de su función inmunitaria.',
  enunciado:'¿Por qué la destrucción progresiva de los linfocitos T CD4 por el VIH compromete tanto a la respuesta humoral COMO a la celular, y no solo a una de las dos ramas?',
  ops:[
    'Porque el CD4 COORDINA a todo el sistema (ayuda a los B a producir anticuerpos y activa a los CD8 y macrófagos); su pérdida compromete indirectamente ambas ramas, aunque el CD4 mismo no sea ni B ni CD8',
    'El VIH no afecta en absoluto a la respuesta humoral, solo a la celular',
    'El VIH destruye directamente a los linfocitos B, no a los CD4',
    'La pérdida de CD4 no tiene ninguna consecuencia sobre el resto del sistema inmunitario'
  ],
  ok:0,
  clave:'El CD4 coordina a todo el sistema; su pérdida compromete indirectamente tanto la respuesta humoral (ayuda a B) como la celular (activa CD8/macrófagos).',
  exp:'El linfocito T CD4 no destruye nada directamente, pero ocupa el centro de la red de coordinación inmunitaria: ayuda a los linfocitos B a producir anticuerpos de mejor calidad (rama humoral) y activa a los macrófagos y sostiene la respuesta citotóxica de los CD8 (rama celular). Por eso, la destrucción progresiva de los CD4 por el VIH compromete indirectamente AMBAS ramas del sistema adaptativo, no solo una, explicando el amplio espectro de infecciones oportunistas que caracteriza al sida avanzado.',
  no:{
    1:'El VIH sí afecta indirectamente a la respuesta humoral, precisamente porque los CD4 ayudan a los linfocitos B a producir anticuerpos de calidad.',
    2:'El VIH infecta preferentemente a los linfocitos T CD4, no directamente a los linfocitos B.',
    3:'La pérdida de CD4 sí tiene consecuencias importantes sobre el resto del sistema, precisamente por su rol coordinador central.'
  },
  trampa:'Asumir que el VIH, al infectar CD4, solo compromete la rama celular, sin reconocer el rol coordinador del CD4 también sobre la rama humoral.',
  obj:'Explicar por qué la destrucción de linfocitos CD4 por el VIH compromete tanto la respuesta humoral como la celular.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 1, 9 y 10.',
  tags:['VIH','CD4','respuesta humoral','respuesta celular']
},
{
  id:'U8-I-Q20', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Respuesta humoral y celular', sub:'Eficacia según localización del patógeno',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la respuesta humoral es más eficaz contra bacterias extracelulares, mientras que la respuesta celular (CD8) es más eficaz contra virus?',
  ops:[
    'Los anticuerpos (respuesta humoral) alcanzan directamente lo que está en el espacio extracelular; los virus se esconden DENTRO de las células, fuera del alcance de un anticuerpo, y solo un CD8 puede destruir la célula infectada directamente',
    'No hay ninguna diferencia real de eficacia según la localización del patógeno',
    'Los anticuerpos son igual de eficaces contra patógenos intracelulares que contra extracelulares',
    'Los CD8 son más eficaces contra bacterias extracelulares que los anticuerpos'
  ],
  ok:0,
  clave:'Los anticuerpos alcanzan lo extracelular; los virus se esconden dentro de la célula, fuera del alcance de anticuerpos, por lo que se necesita CD8 para destruir la célula infectada.',
  exp:'Los anticuerpos, producidos en la respuesta humoral, actúan en el espacio EXTRACELULAR -pueden neutralizar bacterias circulantes, toxinas y parásitos en fluidos corporales, pero no pueden penetrar dentro de una célula ya infectada-. Los virus, en cambio, se replican DENTRO de las células del cuerpo, quedando fuera del alcance directo de un anticuerpo; por eso se necesita la respuesta celular (los linfocitos T CD8, que reconocen MHC clase I presente en cualquier célula nucleada) para destruir directamente a la célula ya infectada y así eliminar al virus replicándose en su interior.',
  no:{
    1:'Sí existe una diferencia real de eficacia, directamente relacionada con la localización -extracelular o intracelular- del patógeno.',
    2:'Los anticuerpos no son eficaces contra patógenos intracelulares, precisamente porque no pueden penetrar dentro de la célula ya infectada.',
    3:'Es al revés: los CD8 son más eficaces contra patógenos INTRACELULARES (como virus), y los anticuerpos son más eficaces contra los EXTRACELULARES (como muchas bacterias).'
  },
  trampa:'No conectar la localización del patógeno (extracelular o intracelular) con qué rama del sistema adaptativo es más eficaz contra él.',
  obj:'Explicar por qué la eficacia de la respuesta humoral y celular depende de la localización del patógeno.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 1, 9 y 10.',
  tags:['respuesta humoral','respuesta celular','patógenos extracelulares','patógenos intracelulares']
},
{
  id:'U8-I-Q21', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Células y órganos del sistema inmunitario', sub:'Tejido linfoide de mucosas',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué función cumple el tejido linfoide asociado a mucosas (intestino, vías respiratorias)?',
  ops:[
    'Es un órgano linfoide secundario especializado en la vigilancia inmunitaria de las superficies mucosas del cuerpo, muy expuestas a microorganismos del ambiente',
    'Es un órgano linfoide primario donde maduran los linfocitos T',
    'No tiene ninguna función inmunitaria real',
    'Solo filtra la sangre, igual que el bazo'
  ],
  ok:0,
  clave:'El tejido linfoide de mucosas es un órgano linfoide secundario especializado en vigilar las superficies mucosas expuestas a microorganismos.',
  exp:'El tejido linfoide asociado a mucosas (en el intestino, las vías respiratorias y otras superficies mucosas) es un órgano linfoide SECUNDARIO, especializado en la vigilancia inmunitaria de las superficies del cuerpo más expuestas a microorganismos del ambiente externo -junto con los ganglios linfáticos (que filtran linfa) y el bazo (que filtra sangre), completa el conjunto de órganos linfoides secundarios donde ocurre el encuentro entre células inmunitarias maduras y el antígeno.',
  no:{
    1:'El tejido linfoide de mucosas es un órgano linfoide SECUNDARIO, no primario; el timo es el órgano primario donde maduran los linfocitos T.',
    2:'Sí tiene una función inmunitaria real y bien establecida: la vigilancia de las superficies mucosas del cuerpo.',
    3:'El tejido linfoide de mucosas vigila las superficies mucosas, no filtra sangre; esa es función específica del bazo.'
  },
  trampa:'Confundir el tejido linfoide de mucosas con un órgano linfoide primario, o con la función específica del bazo.',
  obj:'Identificar la función del tejido linfoide asociado a mucosas como órgano linfoide secundario.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 1-2.',
  tags:['tejido linfoide de mucosas','órganos linfoides secundarios','vigilancia inmunitaria']
},
{
  id:'U8-I-Q22', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Células y órganos del sistema inmunitario', sub:'Selección negativa en el timo',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ocurre en el timo con los linfocitos T inmaduros que reaccionan con demasiada fuerza contra antígenos propios?',
  ops:[
    'Son eliminados o inactivados mediante un proceso de selección negativa, ANTES de completar su maduración y salir a circular',
    'Son enviados directamente a circular sin ningún control adicional',
    'Se convierten automáticamente en linfocitos B',
    'El timo no tiene ningún mecanismo de control sobre los linfocitos T que produce'
  ],
  ok:0,
  clave:'Los linfocitos T autorreactivos son eliminados o inactivados mediante selección negativa en el timo, antes de salir a circular.',
  exp:'Durante la maduración de los linfocitos T en el timo, mediante un proceso llamado selección negativa, los linfocitos inmaduros que reaccionan con demasiada fuerza contra antígenos propios del cuerpo son eliminados -o inactivados de forma permanente- ANTES de completar su maduración y salir a circular por el organismo. Es un control de calidad interno que descarta a las células potencialmente más peligrosas antes de que puedan causar daño, y es la base de la tolerancia central, que se estudia con detalle en el último tema de este bloque.',
  no:{
    1:'Precisamente lo contrario ocurre: son eliminados o inactivados ANTES de salir a circular, no enviados sin control adicional.',
    2:'Los linfocitos T no se convierten en linfocitos B; son linajes celulares distintos desde su origen en la médula ósea.',
    3:'El timo sí tiene un mecanismo de control bien establecido sobre los linfocitos T que produce: la selección negativa.'
  },
  trampa:'No reconocer la selección negativa como el mecanismo específico que elimina linfocitos T autorreactivos en el timo, antes de que salgan a circular.',
  obj:'Explicar el proceso de selección negativa de linfocitos T autorreactivos en el timo.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 1-2.',
  tags:['selección negativa','timo','linfocitos T autorreactivos','tolerancia central']
},
{
  id:'U8-I-Q23', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Complemento', sub:'Opsonización',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la opsonización, y cómo la facilita el fragmento de C3 pegado a la superficie de un microorganismo?',
  ops:[
    'El fragmento de C3 actúa como una "etiqueta" que los fagocitos reconocen fácilmente mediante receptores específicos, facilitando enormemente la fagocitosis del microorganismo',
    'La opsonización es un proceso exclusivo de la vía clásica, sin relación con C3',
    'La opsonización destruye directamente al microorganismo sin necesidad de fagocitos',
    'El fragmento de C3 dificulta la fagocitosis del microorganismo'
  ],
  ok:0,
  clave:'El fragmento de C3 actúa como etiqueta que los fagocitos reconocen, facilitando la fagocitosis (opsonización).',
  exp:'La opsonización es uno de los tres efectos principales de la activación del complemento: el fragmento de C3 que queda pegado a la superficie del microorganismo actúa como una "etiqueta" que los fagocitos (macrófagos, neutrófilos) reconocen fácilmente mediante receptores específicos en su superficie, facilitando enormemente la fagocitosis -un proceso que de otra forma sería mucho menos eficiente.',
  no:{
    1:'La opsonización depende de la activación de C3, que converge desde cualquiera de las vías de activación del complemento (clásica o alterna), no exclusivamente de la vía clásica.',
    2:'La opsonización no destruye directamente; FACILITA la fagocitosis por parte de los fagocitos, un mecanismo distinto de la lisis directa por el MAC.',
    3:'Al contrario: el fragmento de C3 FACILITA la fagocitosis, actuando como una etiqueta reconocible por los fagocitos.'
  },
  trampa:'Confundir la opsonización (que facilita la fagocitosis) con la lisis directa por el MAC, o atribuirla exclusivamente a una sola vía de activación del complemento.',
  obj:'Explicar el mecanismo de la opsonización mediada por el fragmento de C3.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 5.',
  tags:['opsonización','C3','fagocitosis','complemento']
},
{
  id:'U8-I-Q24', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Complemento', sub:'Bacterias encapsuladas y el MAC',
  dif:3, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las bacterias con cápsula gruesa (como el neumococo) son particularmente difíciles de destruir solo por el complejo de ataque a la membrana (MAC)?',
  ops:[
    'La cápsula gruesa dificulta la formación efectiva del poro del MAC sobre la membrana bacteriana; estas bacterias dependen más de la opsonización y la fagocitosis para ser eliminadas',
    'Las bacterias encapsuladas son completamente inmunes a cualquier componente del sistema del complemento',
    'El MAC solo actúa sobre virus, nunca sobre bacterias',
    'Las bacterias encapsuladas no tienen ninguna membrana sobre la cual el MAC pueda actuar'
  ],
  ok:0,
  clave:'La cápsula gruesa dificulta la acción efectiva del MAC; estas bacterias dependen más de opsonización y fagocitosis.',
  exp:'Las bacterias con cápsula polisacárida gruesa, como el neumococo, son particularmente difíciles de destruir solo por el MAC, porque la cápsula dificulta que el complejo de ataque a la membrana se ensamble efectivamente sobre la membrana bacteriana subyacente -por esta razón, estas bacterias dependen más de la opsonización (marcado por C3) y la fagocitosis posterior para ser eliminadas eficazmente, lo cual explica también por qué la pérdida del bazo (sitio clave de respuesta contra estas bacterias) es tan riesgosa específicamente frente a ellas.',
  no:{
    1:'No son completamente inmunes al complemento; siguen siendo susceptibles a la opsonización y fagocitosis, aunque menos al MAC directamente.',
    2:'El MAC actúa sobre membranas de microorganismos susceptibles, incluidas bacterias sin cápsula protectora gruesa, no exclusivamente sobre virus.',
    3:'Las bacterias encapsuladas sí tienen una membrana celular subyacente; es la cápsula adicional la que dificulta el acceso efectivo del MAC a esa membrana.'
  },
  trampa:'No conectar la dificultad del MAC contra bacterias encapsuladas con su mayor dependencia de opsonización y fagocitosis, y con el riesgo aumentado en pacientes esplenectomizados.',
  obj:'Explicar por qué las bacterias encapsuladas dependen más de la opsonización que del MAC para ser eliminadas.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 5.',
  tags:['bacterias encapsuladas','MAC','opsonización','neumococo']
},
{
  id:'U8-I-Q25', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Respuesta humoral y celular', sub:'Células plasmáticas',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿En qué se transforman los linfocitos B al activarse, y qué producen esas células resultantes?',
  ops:[
    'Se transforman en células plasmáticas, fábricas celulares especializadas en producir anticuerpos', 'Se transforman en linfocitos T citotóxicos', 'Se transforman directamente en células dendríticas', 'Los linfocitos B no se transforman en ningún tipo celular al activarse'],
  ok:0,
  clave:'Los linfocitos B activados se transforman en células plasmáticas, que producen anticuerpos.',
  exp:'Al activarse -habitualmente con ayuda de linfocitos T CD4-, los linfocitos B se transforman en células plasmáticas: fábricas celulares especializadas en producir anticuerpos que se liberan hacia la sangre y otros fluidos corporales. Esta transformación es la base celular de la respuesta humoral, la rama del sistema inmunitario adaptativo más eficaz contra patógenos extracelulares.',
  no:{
    1:'Los linfocitos B no se transforman en linfocitos T citotóxicos; son linajes celulares completamente distintos desde su origen.',
    2:'Los linfocitos B no se transforman en células dendríticas; las células dendríticas son un tipo celular distinto, parte de la inmunidad innata.',
    3:'Los linfocitos B sí se transforman en un tipo celular específico y bien caracterizado al activarse: la célula plasmática.'
  },
  trampa:'Confundir la transformación de linfocitos B activados (en células plasmáticas) con otros tipos celulares del sistema inmunitario.',
  obj:'Identificar la transformación de los linfocitos B activados en células plasmáticas productoras de anticuerpos.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 1, 9 y 10.',
  tags:['linfocitos B','células plasmáticas','anticuerpos','respuesta humoral']
},
{
  id:'U8-I-Q26', programa:'unirm', cuatri:8,
  esp:'Inmunología', tema:'Respuesta humoral y celular', sub:'Memoria inmunitaria y vacunación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué relación hay entre la memoria inmunitaria generada por linfocitos B y T tras una infección, y el principio de la vacunación?',
  ops:[
    'La vacunación aprovecha deliberadamente ese mismo mecanismo de memoria inmunitaria, exponiendo al sistema a una versión segura del antígeno para generar memoria sin pasar por la enfermedad real',
    'La vacunación no tiene ninguna relación con la memoria inmunitaria generada tras una infección natural',
    'La memoria inmunitaria solo se genera tras una vacuna, nunca tras una infección natural',
    'Los linfocitos de memoria desaparecen inmediatamente después de resolverse la infección'
  ],
  ok:0,
  clave:'La vacunación aprovecha deliberadamente el mecanismo de memoria inmunitaria, generando memoria sin exponer a la enfermedad real.',
  exp:'Tras resolverse una infección, una parte de los linfocitos B y T activados persiste como células de memoria inmunitaria, capaces de reconocer al mismo antígeno mucho más rápido y con más fuerza en una exposición futura. La vacunación aprovecha deliberadamente este mismo mecanismo biológico, exponiendo al sistema inmunitario a una versión segura del antígeno (microorganismo debilitado, inactivado, o solo un fragmento de él) para generar esa misma memoria protectora, sin que la persona tenga que pasar por la enfermedad real ni sus posibles complicaciones.',
  no:{
    1:'La vacunación tiene una relación directa y fundamental con la memoria inmunitaria; de hecho, es precisamente el mecanismo biológico en el que se basa.',
    2:'La memoria inmunitaria se genera tanto tras una infección natural como tras una vacuna; ambas activan el mismo mecanismo biológico de persistencia de linfocitos de memoria.',
    3:'Los linfocitos de memoria, al contrario, PERSISTEN después de resolverse la infección, precisamente para permitir una respuesta más rápida ante una futura exposición.'
  },
  trampa:'No conectar el mecanismo biológico de la memoria inmunitaria con el principio fundamental en el que se basa toda vacunación.',
  obj:'Explicar la relación entre la memoria inmunitaria y el principio biológico de la vacunación.',
  ref:'Abbas, Inmunología Celular y Molecular, cap. 1, 9 y 10.',
  tags:['memoria inmunitaria','vacunación','linfocitos de memoria','respuesta adaptativa']
}

]);
