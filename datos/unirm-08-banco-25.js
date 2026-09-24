/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE BIOESTADISTICA (1/2)
   Amplia Bioestadistica de 3 a 50 preguntas junto con banco-26.js.
   Esta parte cubre inferencia, intervalos de confianza, hipotesis
   nula/valor p, potencia/tamano muestral, pruebas para variables
   cuantitativas y pruebas para variables cualitativas (temas 1-6).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== BIOESTADISTICA ===================== */
{
  id:'U8-S-Q04', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Inferencia', sub:'Parámetro vs. estimador',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la diferencia entre un parámetro y un estimador?',
  ops:[
    'Son exactamente lo mismo, sin ninguna diferencia',
    'El parámetro es una característica de la POBLACIÓN (generalmente desconocida); el estimador es el valor calculado a partir de una MUESTRA para aproximar ese parámetro',
    'El estimador es siempre exactamente igual al parámetro real',
    'El parámetro se calcula de una muestra, mientras el estimador es un valor poblacional'
  ],
  ok:1,
  clave:'El parámetro pertenece a la población (desconocido); el estimador se calcula de una muestra para aproximarlo.',
  exp:'Un parámetro es una característica numérica de la POBLACIÓN completa, generalmente desconocida y casi imposible de medir directamente. Un estimador es el valor calculado a partir de una MUESTRA, que se usa para aproximar el parámetro poblacional desconocido. Toda la inferencia estadística consiste en usar estimadores de muestras para hacer afirmaciones razonadas, con incertidumbre cuantificada, sobre parámetros poblacionales que nunca se observan directamente.',
  no:{
    0:'Son conceptos claramente distintos: uno pertenece a la población (parámetro), el otro se calcula de una muestra (estimador).',
    2:'El estimador es una aproximación al parámetro, calculada de una sola muestra entre las infinitas posibles; no es necesariamente idéntico al parámetro real, que permanece desconocido.',
    3:'Es al revés: el parámetro es de la población (desconocido), y el estimador se calcula de la muestra (conocido, calculable).'
  },
  trampa:'Invertir cuál de los dos conceptos (parámetro o estimador) corresponde a la población y cuál a la muestra.',
  obj:'Distinguir el concepto de parámetro poblacional del de estimador muestral.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['parámetro','estimador','inferencia estadística','muestra']
},
{
  id:'U8-S-Q05', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Error estándar', sub:'Relación con el tamaño muestral',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Para reducir el error estándar de una media muestral a la mitad, ¿qué debe hacerse con el tamaño de la muestra?',
  ops:[
    'Duplicar el tamaño de la muestra', 'Cuadruplicar el tamaño de la muestra, por la raíz cuadrada en el cálculo del error estándar', 'Reducir el tamaño de la muestra a la mitad', 'El tamaño de la muestra no tiene ninguna relación con el error estándar'],
  ok:1,
  clave:'Para reducir el error estándar a la mitad hay que cuadruplicar el tamaño muestral, por la raíz cuadrada en su fórmula.',
  exp:'El error estándar se calcula dividiendo la desviación estándar de los datos entre la raíz cuadrada del tamaño de la muestra. Por esta relación con la raíz cuadrada, para reducir el error estándar a la mitad, hace falta CUADRUPLICAR el tamaño de la muestra, no simplemente duplicarlo -duplicar la muestra solo reduce el error estándar en un factor de aproximadamente 1.41 (la raíz cuadrada de 2), no a la mitad.',
  no:{
    0:'Duplicar la muestra reduce el error estándar solo por un factor de aproximadamente 1.41, no a la mitad; se necesita cuadruplicar para lograr esa reducción específica.',
    2:'Reducir el tamaño de la muestra AUMENTARÍA el error estándar (menos precisión), no lo reduciría.',
    3:'El tamaño de la muestra sí tiene una relación directa y bien establecida con el error estándar, a través de la raíz cuadrada en su cálculo.'
  },
  trampa:'Asumir una relación lineal simple entre tamaño muestral y error estándar, ignorando que la relación es a través de la raíz cuadrada.',
  obj:'Calcular la relación entre el aumento del tamaño muestral y la reducción del error estándar.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['error estándar','tamaño muestral','raíz cuadrada','precisión del estimador']
},
{
  id:'U8-S-Q06', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Error estándar', sub:'Diferencia con desviación estándar',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre la desviación estándar y el error estándar de la media?',
  ops:[
    'Son exactamente el mismo concepto con nombres distintos',
    'La desviación estándar mide la dispersión de los DATOS individuales dentro de una muestra; el error estándar mide cuánto variaría la MEDIA muestral entre muestras repetidas',
    'El error estándar siempre es mayor que la desviación estándar',
    'La desviación estándar solo se usa en estadística inferencial'
  ],
  ok:1,
  clave:'La desviación estándar mide dispersión de datos individuales; el error estándar mide la variabilidad del estimador (media) entre muestras.',
  exp:'La desviación estándar mide la dispersión de los DATOS INDIVIDUALES dentro de una sola muestra (qué tan alejados están los valores individuales de la media). El error estándar mide cuánto variaría el valor de la media muestral si se repitiera el estudio muchas veces, tomando una muestra nueva cada vez de la misma población -es una medida de la precisión del ESTIMADOR, no de la dispersión de los datos crudos. El error estándar es matemáticamente siempre MENOR que la desviación estándar (se calcula dividiendo esta última entre la raíz del tamaño muestral).',
  no:{
    0:'Son conceptos relacionados pero distintos: uno mide dispersión de datos individuales, el otro mide precisión de un estimador entre muestras repetidas.',
    2:'Es al revés: el error estándar es siempre MENOR (nunca mayor) que la desviación estándar, porque se divide entre la raíz del tamaño muestral.',
    3:'La desviación estándar se usa tanto en estadística descriptiva (como en Estadística I) como en cálculos dentro de la estadística inferencial (como el propio error estándar).'
  },
  trampa:'Confundir la desviación estándar (dispersión de datos individuales) con el error estándar (precisión del estimador entre muestras), tratándolos como sinónimos.',
  obj:'Distinguir la desviación estándar del error estándar de la media.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['error estándar','desviación estándar','precisión','estimador']
},
{
  id:'U8-S-Q07', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Inferencia estadística', sub:'Incertidumbre cuantificada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el objetivo de las herramientas de inferencia estadística, como el intervalo de confianza y la prueba de hipótesis?',
  ops:[
    'Eliminar por completo la incertidumbre de cualquier conclusión basada en una muestra',
    'Cuantificar de forma rigurosa la incertidumbre asociada a una conclusión basada en una muestra, sin pretender eliminarla',
    'Garantizar que la muestra sea siempre idéntica a la población',
    'Estas herramientas no tienen ningún propósito real en la investigación médica'
  ],
  ok:1,
  clave:'Las herramientas de inferencia cuantifican la incertidumbre de una conclusión basada en muestra, sin eliminarla.',
  exp:'La inferencia estadística no pretende eliminar la incertidumbre inherente a trabajar con una muestra en vez de con la población completa -algo imposible sin estudiar a toda la población-, sino CUANTIFICARLA de forma rigurosa, mediante herramientas como el intervalo de confianza y la prueba de hipótesis, que expresan explícitamente cuánta confianza puede depositarse en una conclusión basada en una muestra, en vez de presentarla como un hecho poblacional cierto.',
  no:{
    0:'Ninguna herramienta estadística puede eliminar por completo la incertidumbre de trabajar con una muestra; su función es cuantificarla, no eliminarla.',
    2:'Una muestra, por definición, nunca es idéntica a la población completa; siempre existe la posibilidad de variación por azar entre la muestra específica tomada y la población real.',
    3:'Estas herramientas son fundamentales en la investigación médica, precisamente para poder hacer afirmaciones razonadas y cuantificadas sobre poblaciones a partir de muestras.'
  },
  trampa:'Pensar que la inferencia estadística puede dar certeza absoluta sobre la población, en vez de reconocer su función real de cuantificar la incertidumbre existente.',
  obj:'Explicar el propósito general de las herramientas de inferencia estadística.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['inferencia estadística','incertidumbre','intervalo de confianza','prueba de hipótesis']
},
{
  id:'U8-S-Q08', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Intervalos de confianza', sub:'Interpretación correcta',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la interpretación CORRECTA de un intervalo de confianza del 95%?',
  ops:[
    'Hay un 95% de probabilidad de que el parámetro real esté dentro de este intervalo específico ya calculado',
    'El procedimiento usado para construir el intervalo produce, a largo plazo, intervalos que contienen al verdadero parámetro poblacional el 95% de las veces',
    'El 95% de los datos individuales de la muestra están dentro de este intervalo',
    'El intervalo de confianza no tiene ninguna interpretación estadísticamente válida'
  ],
  ok:1,
  clave:'La interpretación correcta se refiere al procedimiento de construcción a largo plazo, no a la probabilidad de un intervalo específico ya calculado.',
  exp:'La interpretación correcta de un intervalo de confianza del 95% es que el PROCEDIMIENTO usado para construirlo, si se repitiera infinitas veces con muestras nuevas, produciría intervalos que contienen al verdadero parámetro poblacional el 95% de las veces. La interpretación intuitiva pero incorrecta ("95% de probabilidad de que el parámetro esté en este intervalo específico") es errónea porque, una vez calculado, un intervalo particular o contiene al parámetro o no lo contiene -el parámetro es un valor fijo, no una variable aleatoria con una probabilidad asociada.',
  no:{
    0:'Esta es precisamente la interpretación intuitiva pero técnicamente INCORRECTA que se debe evitar, porque el parámetro es un valor fijo, no una variable aleatoria.',
    2:'El intervalo de confianza no se refiere a la proporción de datos individuales de la muestra; se refiere a la estimación de un parámetro poblacional (como la media), no a la dispersión de los datos crudos.',
    3:'El intervalo de confianza sí tiene una interpretación estadísticamente válida y precisa, referida al comportamiento del procedimiento de construcción a largo plazo.'
  },
  trampa:'Caer en la interpretación intuitiva pero técnicamente incorrecta de que un intervalo específico ya calculado tiene una probabilidad asociada de contener al parámetro.',
  obj:'Identificar la interpretación correcta de un intervalo de confianza del 95%.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['intervalo de confianza','interpretación estadística','procedimiento a largo plazo','parámetro poblacional']
},
{
  id:'U8-S-Q09', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Intervalos de confianza', sub:'Nivel de confianza y amplitud',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Para los mismos datos, ¿cómo se compara la amplitud de un intervalo de confianza del 99% con la de uno del 95%?',
  ops:[
    'El intervalo del 99% es siempre más ESTRECHO que el del 95%',
    'El intervalo del 99% es necesariamente MÁS AMPLIO que el del 95%, porque exigir mayor certeza obliga a abarcar un rango más amplio de valores posibles',
    'Ambos intervalos tienen exactamente la misma amplitud, sin importar el nivel de confianza',
    'El nivel de confianza no tiene ninguna relación con la amplitud del intervalo'
  ],
  ok:1,
  clave:'Un intervalo del 99% es necesariamente más amplio que uno del 95% para los mismos datos, porque mayor certeza exige mayor rango.',
  exp:'Un intervalo de confianza del 99% es necesariamente MÁS AMPLIO que uno del 95% para los mismos datos, porque exigir mayor certeza de captura del parámetro obliga a abarcar un rango más amplio de valores posibles. Esto revela un compromiso inevitable: no se puede tener simultáneamente mayor confianza Y mayor precisión (intervalo más estrecho) sin aumentar el tamaño de la muestra.',
  no:{
    0:'Es al revés: el intervalo del 99% es MÁS AMPLIO, no más estrecho, que el del 95%, para los mismos datos.',
    2:'La amplitud sí varía según el nivel de confianza elegido; no son iguales para distintos niveles de confianza con los mismos datos.',
    3:'El nivel de confianza es uno de los factores determinantes de la amplitud del intervalo, junto con el tamaño muestral y la variabilidad de los datos.'
  },
  trampa:'Invertir la relación entre nivel de confianza exigido y amplitud del intervalo resultante.',
  obj:'Explicar la relación entre el nivel de confianza elegido y la amplitud del intervalo de confianza resultante.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['intervalo de confianza','nivel de confianza','amplitud','precisión']
},
{
  id:'U8-S-Q10', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Intervalos de confianza', sub:'Evaluar significación sin valor p',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudio reporta un riesgo relativo de 1.8 con un intervalo de confianza del 95% de 1.2 a 2.7 para la asociación entre una exposición y una enfermedad.',
  enunciado:'Sin necesidad de calcular un valor p por separado, ¿qué puede concluirse sobre la significación estadística de esta asociación?',
  ops:[
    'No puede determinarse nada sin el valor p exacto',
    'Es estadísticamente significativa, porque el intervalo de confianza (1.2 a 2.7) no incluye el valor nulo (1) para un riesgo relativo',
    'No es estadísticamente significativa, porque el intervalo incluye valores mayores a 1',
    'La significación estadística no puede evaluarse nunca con un intervalo de confianza'
  ],
  ok:1,
  clave:'Como el intervalo de confianza (1.2 a 2.7) no incluye el valor nulo (1), la asociación es estadísticamente significativa.',
  exp:'Si el intervalo de confianza de un riesgo relativo (o razón de momios) NO incluye el valor "nulo" correspondiente (que es 1 para estas medidas, indicando ausencia de asociación), el resultado es estadísticamente significativo al nivel de confianza correspondiente. En este caso, el intervalo va de 1.2 a 2.7, sin incluir el valor 1 en ningún punto del rango, así que la asociación es estadísticamente significativa, sin necesidad de calcular un valor p por separado.',
  no:{
    0:'Sí puede determinarse la significación estadística directamente a partir del intervalo de confianza, sin necesidad del valor p exacto, viendo si el intervalo incluye o no el valor nulo.',
    2:'El hecho de que el intervalo incluya valores mayores a 1 no lo hace no significativo; lo relevante es si el intervalo INCLUYE al valor 1 (nulo) en algún punto, y en este caso no lo incluye.',
    3:'La significación estadística sí puede evaluarse a partir de un intervalo de confianza, viendo si incluye o no el valor nulo correspondiente a la medida usada.'
  },
  trampa:'No usar el intervalo de confianza directamente para evaluar significación, o interpretar incorrectamente qué significa que el intervalo "incluya" o "no incluya" el valor nulo.',
  obj:'Evaluar la significación estadística de una asociación a partir de su intervalo de confianza, sin calcular un valor p por separado.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['intervalo de confianza','riesgo relativo','valor nulo','significación estadística']
},
{
  id:'U8-S-Q11', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Hipótesis nula', sub:'Punto de partida escéptico',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué postula la hipótesis nula (H0) en una prueba estadística?',
  ops:[
    'Que existe una diferencia real entre los grupos o variables comparadas',
    'Que NO existe diferencia real (o asociación real) entre los grupos o variables comparadas',
    'Que la muestra estudiada es idéntica a la población completa',
    'La hipótesis nula no tiene ningún significado estadístico definido'
  ],
  ok:1,
  clave:'La hipótesis nula postula que no existe diferencia (o asociación) real entre los grupos comparados.',
  exp:'La hipótesis nula (H0) postula que NO existe diferencia real (o asociación real) entre los grupos o variables comparadas -es el punto de partida "escéptico" de cualquier prueba estadística, que se mantiene como verdadero por defecto hasta que la evidencia acumulada sea lo suficientemente fuerte como para rechazarlo. La hipótesis alternativa (H1) es la que postula que sí existe una diferencia real.',
  no:{
    0:'Esa es la hipótesis ALTERNATIVA (H1), no la nula, que postula precisamente lo contrario: ausencia de diferencia real.',
    2:'La hipótesis nula no se refiere a la relación entre muestra y población, sino a la ausencia de diferencia entre los grupos o variables que se comparan dentro del estudio.',
    3:'La hipótesis nula tiene un significado estadístico preciso y bien definido: es el punto de partida por defecto de cualquier prueba de hipótesis.'
  },
  trampa:'Confundir la hipótesis nula con la hipótesis alternativa, invirtiendo cuál postula la ausencia y cuál la presencia de una diferencia real.',
  obj:'Definir correctamente la hipótesis nula en una prueba estadística.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['hipótesis nula','hipótesis alternativa','prueba de hipótesis','punto de partida escéptico']
},
{
  id:'U8-S-Q12', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Valor p', sub:'Definición precisa',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la definición precisa del valor p?',
  ops:[
    'La probabilidad de que la hipótesis nula sea verdadera',
    'La probabilidad de observar un resultado tan extremo o más extremo que el obtenido, SI la hipótesis nula fuera realmente cierta',
    'La probabilidad de que el resultado observado se deba al azar',
    'Una medida directa de la magnitud del efecto encontrado'
  ],
  ok:1,
  clave:'El valor p es la probabilidad de un resultado tan extremo o más, condicionada a que H0 sea cierta.',
  exp:'El valor p es la probabilidad de observar un resultado tan extremo o más extremo que el obtenido, SI la hipótesis nula fuera realmente cierta -es decir, P(datos tan extremos | H0 es cierta). Es crucial lo que el valor p NO es: no es la probabilidad de que la hipótesis nula sea verdadera (eso sería P(H0 es cierta | los datos), una probabilidad condicional invertida y distinta), no es la probabilidad de que el resultado se deba al azar de forma directa, y no mide la magnitud ni la importancia clínica del efecto encontrado.',
  no:{
    0:'Esa sería la probabilidad condicional INVERTIDA (P(H0|datos) en vez de P(datos|H0)), un error de interpretación frecuente pero incorrecto del valor p.',
    2:'Esta interpretación, aunque cercana en espíritu, no es técnicamente precisa; el valor p es una probabilidad condicional específica bajo el supuesto de que H0 es cierta, no una probabilidad directa sobre el azar del resultado observado.',
    3:'El valor p no mide la magnitud del efecto; esa función corresponde al tamaño del efecto (diferencia de medias, riesgo relativo, etc.), un concepto distinto.'
  },
  trampa:'Confundir el valor p con su probabilidad condicional inversa (la probabilidad de que H0 sea cierta dado los datos), un error de interpretación extremadamente frecuente.',
  obj:'Definir con precisión el valor p como una probabilidad condicional específica.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['valor p','probabilidad condicional','hipótesis nula','interpretación estadística']
},
{
  id:'U8-S-Q13', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Error tipo I y tipo II', sub:'Definición y tensión',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Un investigador reduce el umbral alfa de 0.05 a 0.01 para "ser más estricto" con sus conclusiones. ¿Qué consecuencia tiene esto sobre el riesgo de error tipo II, a igualdad de las demás condiciones?',
  ops:[
    'El riesgo de error tipo II disminuye también',
    'El riesgo de error tipo II tiende a aumentar, porque se vuelve más difícil rechazar la hipótesis nula incluso cuando sí hay una diferencia real',
    'El riesgo de error tipo II no tiene ninguna relación con el umbral alfa elegido',
    'El error tipo II desaparece por completo al reducir alfa'
  ],
  ok:1,
  clave:'Reducir alfa (ser más estricto) tiende a aumentar el riesgo de error tipo II, a igualdad de las demás condiciones.',
  exp:'Reducir el umbral alfa (exigir un valor p más pequeño para considerar significativo un resultado) reduce el riesgo de error tipo I, pero, a igualdad de las demás condiciones, aumenta el riesgo de error tipo II, porque se vuelve más difícil rechazar la hipótesis nula incluso cuando sí hay una diferencia real -ambos errores están en tensión entre sí, no se pueden reducir simultáneamente sin cambiar otros factores como el tamaño de la muestra.',
  no:{
    0:'Es al revés: reducir alfa tiende a AUMENTAR (no disminuir) el riesgo de error tipo II, a igualdad de las demás condiciones.',
    2:'El umbral alfa sí tiene una relación directa e inversa con el riesgo de error tipo II, precisamente por la tensión entre ambos tipos de error.',
    3:'El error tipo II no desaparece; de hecho, su riesgo tiende a aumentar al hacer más estricto el umbral alfa, no a eliminarse.'
  },
  trampa:'Asumir que hacer más estricto el umbral alfa mejora todos los aspectos de la prueba estadística sin ningún costo, ignorando la tensión con el error tipo II.',
  obj:'Explicar la tensión entre el umbral alfa (error tipo I) y el riesgo de error tipo II.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['error tipo I','error tipo II','umbral alfa','tensión estadística']
},
{
  id:'U8-S-Q14', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Potencia estadística', sub:'Definición',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cómo se calcula la potencia estadística de un estudio, y qué representa?',
  ops:[
    '1 menos alfa; representa la probabilidad de no cometer un error tipo I',
    '1 menos beta; representa la probabilidad de detectar correctamente una diferencia real cuando esta efectivamente existe',
    'Es exactamente igual al valor p obtenido',
    'La potencia no tiene ninguna fórmula ni definición precisa'
  ],
  ok:1,
  clave:'Potencia = 1 − beta = probabilidad de detectar correctamente un efecto real cuando existe.',
  exp:'La potencia estadística se calcula como 1 menos beta (la probabilidad de error tipo II), y representa la probabilidad de detectar correctamente una diferencia real cuando esta efectivamente existe -es decir, la probabilidad de rechazar correctamente la hipótesis nula cuando es falsa. Por convención, se suele exigir una potencia mínima del 80% en el diseño de un estudio.',
  no:{
    0:'1 menos alfa representaría la probabilidad de NO rechazar correctamente H0 cuando es verdadera, un concepto distinto de la potencia, que se relaciona con beta, no con alfa.',
    2:'La potencia es un concepto de diseño del estudio (calculado antes o evaluado en función de sus parámetros), distinto del valor p, que se calcula a partir de los datos ya obtenidos.',
    3:'La potencia tiene una fórmula y definición estadística precisa: 1 menos beta.'
  },
  trampa:'Confundir la fórmula de la potencia (1 menos beta) con otras relaciones que involucran a alfa, o confundirla con el valor p.',
  obj:'Definir la potencia estadística y su fórmula de cálculo.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['potencia estadística','beta','error tipo II','diseño de estudios']
},
{
  id:'U8-S-Q15', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Tamaño del efecto', sub:'Relación con la muestra necesaria',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué relación existe entre el tamaño del efecto que se busca detectar y el tamaño de muestra necesario para lograr una potencia adecuada?',
  ops:[
    'Para detectar un efecto pequeño y sutil, se necesita una muestra considerablemente MAYOR que para detectar un efecto grande y obvio',
    'El tamaño del efecto no tiene ninguna relación con el tamaño de muestra necesario',
    'Para detectar un efecto pequeño se necesita una muestra MENOR que para uno grande',
    'El tamaño de muestra necesario es siempre el mismo, sin importar el tamaño del efecto'
  ],
  ok:0,
  clave:'Detectar un efecto pequeño requiere una muestra considerablemente mayor que detectar un efecto grande, para la misma potencia.',
  exp:'Para detectar un efecto pequeño y sutil con alta confianza (potencia adecuada), se necesita una muestra considerablemente mayor que para detectar un efecto grande y obvio, que es más fácil de distinguir del ruido estadístico incluso con una muestra más pequeña. Esta relación es uno de los cuatro factores clave que determinan la potencia de un estudio, junto con el tamaño muestral en sí, la variabilidad de los datos y el nivel de significación alfa.',
  no:{
    1:'El tamaño del efecto sí tiene una relación directa y bien establecida con el tamaño de muestra necesario para una potencia adecuada.',
    2:'Es al revés: un efecto pequeño requiere una muestra MAYOR (no menor) que uno grande, para lograr la misma potencia de detección.',
    3:'El tamaño de muestra necesario varía considerablemente según el tamaño del efecto que se busca detectar, no es constante para cualquier situación.'
  },
  trampa:'Invertir la relación entre tamaño del efecto y tamaño de muestra necesario, o asumir que no existe relación entre ambos.',
  obj:'Explicar la relación entre el tamaño del efecto buscado y el tamaño de muestra necesario.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['tamaño del efecto','tamaño muestral','potencia','diseño de estudios']
},
{
  id:'U8-S-Q16', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Potencia insuficiente', sub:'Interpretación de resultados no significativos',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudio con una muestra pequeña no encuentra una diferencia estadísticamente significativa entre dos tratamientos, y el investigador concluye que "los dos tratamientos son igual de efectivos".',
  enunciado:'¿Qué error de interpretación puede estar cometiendo este investigador?',
  ops:[
    'Ninguno: un resultado no significativo siempre prueba que no hay diferencia real',
    'Puede estar cometiendo el error de asumir "ausencia de evidencia" como "evidencia de ausencia": el estudio pudo no tener la potencia suficiente para detectar una diferencia real que sí existe',
    'Los estudios con muestra pequeña siempre tienen suficiente potencia',
    'La potencia estadística no tiene ninguna relación con la interpretación de resultados no significativos'
  ],
  ok:1,
  clave:'Un resultado no significativo en un estudio con poca potencia no prueba ausencia de diferencia; puede reflejar falta de capacidad de detección.',
  exp:'Un estudio con potencia insuficiente (por ejemplo, con una muestra demasiado pequeña para el tamaño del efecto que realmente existe) tiene un riesgo elevado de error tipo II: puede fallar en detectar una diferencia real simplemente porque no tuvo la capacidad estadística suficiente para hacerlo, no porque la diferencia no exista. Interpretar un resultado "no significativo" como "prueba de que no hay diferencia" es un error de interpretación grave y frecuente -la ausencia de evidencia de efecto no es lo mismo que evidencia de ausencia de efecto.',
  no:{
    0:'Un resultado no significativo NO prueba automáticamente que no hay diferencia real; puede simplemente reflejar falta de potencia del estudio para detectarla.',
    2:'Los estudios con muestra pequeña con frecuencia tienen potencia INSUFICIENTE, precisamente por el tamaño reducido de la muestra, no suficiente por defecto.',
    3:'La potencia estadística tiene una relación directa con cómo debe interpretarse un resultado no significativo, precisamente el punto central de esta pregunta.'
  },
  trampa:'Aceptar la conclusión de "igual efectividad" a partir de un resultado no significativo sin considerar si el estudio tuvo la potencia adecuada para detectar una diferencia real.',
  obj:'Identificar el error de interpretar un resultado no significativo de un estudio con poca potencia como prueba de ausencia de efecto.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['potencia insuficiente','error tipo II','ausencia de evidencia','interpretación de resultados']
},
{
  id:'U8-S-Q17', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'t de Student', sub:'Independiente vs. pareada',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un investigador mide la presión arterial de 30 pacientes antes y después de iniciar un tratamiento antihipertensivo, en los mismos pacientes.',
  enunciado:'¿Qué versión de la prueba t de Student es la más apropiada para este diseño?',
  ops:[
    't de Student para muestras independientes', 't de Student pareada, porque las mismas mediciones se toman en los mismos sujetos antes y después', 'ANOVA, porque hay más de dos mediciones', 'Ninguna versión de la t de Student es apropiada para este diseño'],
  ok:1,
  clave:'La t de Student pareada es apropiada cuando se comparan dos mediciones en los mismos sujetos (antes/después).',
  exp:'La t de Student pareada compara dos mediciones tomadas en los MISMOS sujetos (en este caso, antes y después del tratamiento en los mismos 30 pacientes), aprovechando que cada sujeto sirve como su propio control, lo que generalmente aumenta la potencia estadística al eliminar la variabilidad entre sujetos distintos de la comparación. Es la prueba apropiada para este diseño, distinta de la t de Student independiente, que se usaría si se compararan dos grupos DISTINTOS de sujetos.',
  no:{
    0:'La t de Student independiente se usa para comparar dos grupos DISTINTOS de sujetos, no las mismas mediciones repetidas en los mismos sujetos, como en este caso.',
    2:'El ANOVA se usa para comparar tres o más GRUPOS, no dos mediciones repetidas en los mismos sujetos; este diseño tiene solo dos mediciones (antes/después) en un único grupo.',
    3:'La t de Student pareada es precisamente la prueba diseñada para este tipo de comparación (dos mediciones en los mismos sujetos).'
  },
  trampa:'Usar la versión independiente de la t de Student cuando en realidad los datos están pareados (mismos sujetos medidos dos veces), desperdiciando la ganancia de potencia de la versión pareada.',
  obj:'Elegir la versión pareada de la t de Student para un diseño de mediciones repetidas en los mismos sujetos.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['t de Student pareada','muestras pareadas','diseño antes-después','potencia estadística']
},
{
  id:'U8-S-Q18', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'ANOVA', sub:'Comparaciones múltiples',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es un error metodológico hacer múltiples comparaciones de a pares con la prueba t de Student, en vez de usar ANOVA, cuando se comparan tres o más grupos?',
  ops:[
    'Porque la t de Student nunca puede usarse para comparar dos grupos cualesquiera',
    'Porque cada comparación individual tiene su propia probabilidad de error tipo I, y al multiplicar el número de comparaciones, el riesgo acumulado de al menos un falso positivo aumenta considerablemente',
    'Porque el ANOVA y la t de Student dan siempre exactamente el mismo resultado',
    'Porque la t de Student es una prueba más moderna que el ANOVA'
  ],
  ok:1,
  clave:'Múltiples comparaciones con t de Student inflan el riesgo acumulado de error tipo I, un problema que ANOVA controla con un único valor p global.',
  exp:'Cada comparación individual con la t de Student tiene su propia probabilidad de error tipo I (habitualmente 5%), y al multiplicar el número de comparaciones (por ejemplo, tres comparaciones de a pares entre tres grupos), el riesgo ACUMULADO de al menos un falso positivo aumenta considerablemente por encima del 5% nominal buscado para cada comparación individual -el problema de comparaciones múltiples. El ANOVA controla este problema al evaluar todas las medias de una sola vez, con un único valor p global.',
  no:{
    0:'La t de Student sí puede usarse para comparar dos grupos; el problema surge específicamente cuando se usa repetidamente para múltiples comparaciones de a pares entre tres o más grupos.',
    2:'ANOVA y múltiples t de Student pueden dar conclusiones distintas precisamente por el problema del riesgo acumulado de error tipo I en las comparaciones múltiples.',
    3:'La antigüedad relativa de las pruebas no es la razón del problema; el problema es estadístico y se relaciona con la inflación del riesgo de error tipo I al multiplicar comparaciones.'
  },
  trampa:'No reconocer el mecanismo específico (inflación del riesgo acumulado de error tipo I) que hace problemático el uso de múltiples pruebas t en vez de ANOVA.',
  obj:'Explicar el problema de comparaciones múltiples y por qué el ANOVA lo controla mejor que múltiples pruebas t.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['ANOVA','comparaciones múltiples','error tipo I acumulado','pruebas post-hoc']
},
{
  id:'U8-S-Q19', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Normalidad', sub:'Alternativas no paramétricas',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un investigador tiene una muestra pequeña con datos que se apartan claramente de la distribución normal, y quiere comparar las medias de dos grupos independientes.',
  enunciado:'¿Qué prueba estadística es la alternativa no paramétrica apropiada en este caso, en vez de la t de Student independiente?',
  ops:['ANOVA', 'Mann-Whitney U', 'Regresión logística', 'Chi-cuadrado'],
  ok:1,
  clave:'La prueba de Mann-Whitney U es la alternativa no paramétrica a la t de Student para muestras independientes.',
  exp:'Cuando los datos se apartan claramente de la normalidad y la muestra es pequeña, se recurre a pruebas no paramétricas equivalentes, que no asumen normalidad: la prueba de Mann-Whitney U como alternativa a la t de Student independiente, específicamente para el caso descrito en este caso (comparar dos grupos independientes sin asumir normalidad de los datos).',
  no:{
    0:'El ANOVA se usa para tres o más grupos, no dos, y también asume normalidad; su alternativa no paramétrica sería Kruskal-Wallis, no Mann-Whitney.',
    2:'La regresión logística se usa para desenlaces binarios, un tipo de análisis distinto de comparar medias entre dos grupos.',
    3:'El chi-cuadrado se usa para variables categóricas (tablas de contingencia), no para comparar medias de una variable cuantitativa entre grupos.'
  },
  trampa:'Confundir las distintas alternativas no paramétricas entre sí, o no reconocer cuál corresponde específicamente al diseño de dos grupos independientes.',
  obj:'Identificar Mann-Whitney U como la alternativa no paramétrica a la t de Student independiente.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['Mann-Whitney U','pruebas no paramétricas','normalidad','muestras independientes']
},
{
  id:'U8-S-Q20', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Chi-cuadrado', sub:'Limitación con frecuencias pequeñas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la limitación práctica de la prueba de chi-cuadrado que obliga a usar, en su lugar, la prueba exacta de Fisher?',
  ops:[
    'El chi-cuadrado nunca puede usarse para tablas de contingencia',
    'La aproximación estadística del chi-cuadrado es poco fiable cuando las frecuencias esperadas en alguna celda de la tabla son muy pequeñas (convencionalmente, menores a 5)',
    'El chi-cuadrado solo puede usarse con muestras extremadamente grandes',
    'No existe ninguna limitación real del chi-cuadrado'
  ],
  ok:1,
  clave:'El chi-cuadrado es poco fiable con frecuencias esperadas pequeñas (convencionalmente menores a 5) en alguna celda de la tabla.',
  exp:'La prueba de chi-cuadrado tiene una limitación práctica: su aproximación estadística es poco fiable cuando las frecuencias esperadas en alguna celda de la tabla son muy pequeñas (convencionalmente, cuando alguna celda tiene una frecuencia esperada menor a 5), porque la distribución chi-cuadrado es una aproximación que se vuelve inexacta con frecuencias por celda demasiado pequeñas. En esos casos, se recurre a la prueba exacta de Fisher, que calcula la probabilidad exacta sin depender de esa aproximación.',
  no:{
    0:'El chi-cuadrado es precisamente la prueba estándar para tablas de contingencia; su limitación es específica de frecuencias pequeñas, no un problema general con este tipo de tabla.',
    2:'Es al revés: el chi-cuadrado funciona mejor con muestras y frecuencias GRANDES; su limitación aparece justo con frecuencias PEQUEÑAS.',
    3:'Sí existe una limitación real y bien documentada del chi-cuadrado, relacionada con la fiabilidad de su aproximación ante frecuencias esperadas pequeñas.'
  },
  trampa:'No identificar la condición específica (frecuencias esperadas pequeñas en alguna celda) que hace poco fiable a la aproximación de chi-cuadrado.',
  obj:'Explicar la limitación de la prueba de chi-cuadrado con frecuencias esperadas pequeñas.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['chi-cuadrado','prueba exacta de Fisher','frecuencias esperadas','tabla de contingencia']
},
{
  id:'U8-S-Q21', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Prueba exacta de Fisher', sub:'Cuándo usarla',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudio piloto con solo 12 pacientes en total compara la proporción de recuperación entre dos tratamientos distintos, organizados en una tabla de contingencia 2x2 con celdas de frecuencia esperada muy baja.',
  enunciado:'¿Qué prueba estadística es la más apropiada para este análisis, y por qué?',
  ops:[
    'Chi-cuadrado, porque siempre es la prueba de elección para tablas de contingencia',
    'La prueba exacta de Fisher, porque calcula la probabilidad exacta sin depender de una aproximación que puede fallar con frecuencias esperadas pequeñas, como en este estudio piloto',
    'ANOVA, porque hay dos grupos que comparar',
    'Regresión lineal, porque las variables son categóricas'
  ],
  ok:1,
  clave:'La prueba exacta de Fisher es apropiada con frecuencias esperadas pequeñas, como en este estudio piloto con muestra reducida.',
  exp:'Con una muestra tan pequeña (12 pacientes en total) y frecuencias esperadas bajas en la tabla de contingencia 2x2, la prueba exacta de Fisher es la más apropiada, porque calcula la probabilidad EXACTA de obtener la distribución observada (o una más extrema) bajo la hipótesis nula, sin depender de ninguna aproximación estadística que pueda fallar con números pequeños, a diferencia del chi-cuadrado.',
  no:{
    0:'El chi-cuadrado no es siempre la prueba de elección; con frecuencias esperadas pequeñas, como en este caso, su aproximación es poco fiable y se prefiere Fisher.',
    2:'El ANOVA se usa para comparar medias de una variable CUANTITATIVA entre tres o más grupos, no proporciones de una variable categórica entre dos grupos.',
    3:'La regresión lineal se usa para predecir una variable CUANTITATIVA continua, no para analizar la asociación entre dos variables categóricas en una tabla de contingencia.'
  },
  trampa:'Usar chi-cuadrado por default sin considerar el tamaño pequeño de las frecuencias esperadas, que hace más apropiada a la prueba exacta de Fisher.',
  obj:'Elegir la prueba exacta de Fisher para el análisis de una tabla de contingencia con frecuencias esperadas pequeñas.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['prueba exacta de Fisher','estudio piloto','frecuencias pequeñas','tabla de contingencia 2x2']
},
{
  id:'U8-S-Q22', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'ANOVA', sub:'Cuándo usarla',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Para qué tipo de comparación se usa el análisis de varianza (ANOVA)?',
  ops:['Para comparar las medias de dos grupos', 'Para comparar las medias de TRES O MÁS grupos simultáneamente', 'Para comparar proporciones entre grupos', 'Para calcular un intervalo de confianza'],
  ok:1,
  clave:'El ANOVA se usa para comparar las medias de tres o más grupos simultáneamente.',
  exp:'El análisis de varianza (ANOVA) se usa para comparar las medias de TRES O MÁS grupos simultáneamente, con un único valor p global que evalúa si existe alguna diferencia entre esas medias, controlando el problema de comparaciones múltiples que surgiría de hacer varias pruebas t de a pares por separado.',
  no:{
    0:'Para comparar las medias de solo DOS grupos, se usa la prueba t de Student (independiente o pareada, según el diseño), no el ANOVA, que está diseñado para tres o más grupos.',
    2:'Para comparar proporciones entre grupos (variables categóricas), se usan pruebas como chi-cuadrado o Fisher, no el ANOVA, que compara medias de variables cuantitativas.',
    3:'El ANOVA es una prueba de hipótesis, no un método para calcular un intervalo de confianza directamente.'
  },
  trampa:'Confundir el ANOVA con la t de Student (para dos grupos) o con pruebas para variables categóricas.',
  obj:'Identificar el ANOVA como la prueba apropiada para comparar tres o más grupos.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['ANOVA','comparación de medias','tres o más grupos','prueba de hipótesis']
},
{
  id:'U8-S-Q23', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Pruebas no paramétricas', sub:'Equivalente al ANOVA',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la alternativa no paramétrica al ANOVA, cuando los datos no cumplen el supuesto de normalidad?',
  ops:['Mann-Whitney U', 'Wilcoxon', 'Kruskal-Wallis', 'Chi-cuadrado'],
  ok:2,
  clave:'Kruskal-Wallis es la alternativa no paramétrica al ANOVA para comparar tres o más grupos sin asumir normalidad.',
  exp:'Cuando se comparan tres o más grupos y los datos no cumplen el supuesto de normalidad, la prueba de Kruskal-Wallis reemplaza al ANOVA como alternativa no paramétrica. Es análoga en su propósito (comparar múltiples grupos) pero no requiere el supuesto de normalidad de los datos, a diferencia del ANOVA convencional.',
  no:{
    0:'Mann-Whitney U es la alternativa no paramétrica a la t de Student INDEPENDIENTE, para comparar solo DOS grupos, no tres o más.',
    1:'Wilcoxon es la alternativa no paramétrica a la t de Student PAREADA, para mediciones repetidas en los mismos sujetos, no para comparar tres o más grupos independientes.',
    3:'El chi-cuadrado se usa para variables categóricas en tablas de contingencia, no como alternativa no paramétrica para comparar medias de variables cuantitativas.'
  },
  trampa:'Confundir las distintas alternativas no paramétricas entre sí, sin identificar cuál corresponde específicamente al diseño de tres o más grupos (equivalente al ANOVA).',
  obj:'Identificar Kruskal-Wallis como la alternativa no paramétrica al ANOVA.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['Kruskal-Wallis','ANOVA','pruebas no paramétricas','normalidad']
},
{
  id:'U8-S-Q24', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Muestra pequeña', sub:'Teorema del límite central',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el supuesto de normalidad de los datos individuales es menos crítico cuando la muestra es muy grande?',
  ops:[
    'Porque el teorema del límite central hace que la distribución de la media muestral se aproxime a una distribución normal incluso si los datos individuales no lo son',
    'Porque los datos siempre son normales cuando la muestra es grande',
    'Porque con muestras grandes nunca es necesario usar ninguna prueba estadística',
    'El tamaño de la muestra no tiene ninguna relación con el supuesto de normalidad'
  ],
  ok:0,
  clave:'El teorema del límite central hace que la media muestral se aproxime a la normalidad con muestras grandes, aunque los datos individuales no lo sean.',
  exp:'El teorema del límite central establece que, con muestras suficientemente grandes, la distribución de la media muestral se aproxima a una distribución normal, incluso si los datos individuales subyacentes no siguen una distribución normal. Por eso, con muestras grandes, las pruebas paramétricas (como la t de Student o el ANOVA) pueden seguir siendo razonablemente válidas incluso con datos que no son perfectamente normales, mientras que con muestras pequeñas esa robustez no existe y la violación de la normalidad es más problemática.',
  no:{
    1:'El tamaño de la muestra no hace que los datos INDIVIDUALES se vuelvan normales; lo que se aproxima a la normalidad, gracias al teorema del límite central, es la distribución de la MEDIA muestral.',
    2:'Las pruebas estadísticas siguen siendo necesarias con muestras grandes; lo que cambia es la robustez del supuesto de normalidad para las pruebas paramétricas.',
    3:'El tamaño de la muestra sí tiene una relación directa con qué tan crítico es el supuesto de normalidad, precisamente por el teorema del límite central.'
  },
  trampa:'Confundir la normalidad de los datos individuales con la normalidad de la distribución de la media muestral, que son conceptos distintos relacionados por el teorema del límite central.',
  obj:'Explicar el papel del teorema del límite central en la robustez de las pruebas paramétricas con muestras grandes.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['teorema del límite central','normalidad','muestra grande','distribución de la media']
},
{
  id:'U8-S-Q25', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'t de Student pareada', sub:'Ventaja de potencia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la t de Student pareada generalmente tiene mayor potencia estadística que la versión independiente, para el mismo número de sujetos?',
  ops:[
    'Porque cada sujeto sirve como su propio control, eliminando la variabilidad entre sujetos distintos de la comparación',
    'Porque la versión pareada siempre usa una muestra más grande',
    'Porque la versión pareada no tiene ningún supuesto estadístico',
    'No existe ninguna diferencia de potencia entre ambas versiones'
  ],
  ok:0,
  clave:'La versión pareada elimina la variabilidad entre sujetos distintos, porque cada sujeto es su propio control, aumentando la potencia.',
  exp:'La t de Student pareada compara dos mediciones en los MISMOS sujetos, lo que significa que cada sujeto sirve como su propio control. Esto elimina de la comparación la variabilidad debida a diferencias INDIVIDUALES entre sujetos distintos (que sí está presente en la versión independiente, donde se comparan dos grupos de personas diferentes), generalmente aumentando la potencia estadística para detectar una diferencia real con el mismo número total de mediciones.',
  no:{
    1:'La ventaja de potencia no depende de un mayor tamaño de muestra; depende del diseño (mismos sujetos medidos dos veces), que elimina variabilidad entre sujetos distintos.',
    2:'La t de Student pareada sí tiene supuestos estadísticos (como la normalidad de las diferencias entre las dos mediciones), no está exenta de ellos.',
    3:'Sí existe una diferencia real de potencia entre ambas versiones, precisamente por el mecanismo de eliminación de variabilidad entre sujetos en la versión pareada.'
  },
  trampa:'No identificar el mecanismo específico (eliminación de variabilidad entre sujetos, al usar cada uno como su propio control) que explica la mayor potencia de la versión pareada.',
  obj:'Explicar por qué la t de Student pareada tiene mayor potencia que la versión independiente.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['t de Student pareada','potencia estadística','control interno','variabilidad entre sujetos']
},
{
  id:'U8-S-Q26', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Diseño de estudios', sub:'Elección de prueba estadística',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un investigador quiere comparar la proporción de pacientes que desarrollan una complicación postoperatoria entre cuatro técnicas quirúrgicas distintas.',
  enunciado:'¿Qué tipo de prueba estadística es la más apropiada para este análisis?',
  ops:[
    'ANOVA, porque hay cuatro grupos que comparar',
    'Chi-cuadrado (con más de dos categorías en una de las variables), porque se comparan PROPORCIONES (variable categórica) entre varios grupos',
    't de Student independiente', 'Correlación de Pearson'],
  ok:1,
  clave:'Comparar proporciones (variable categórica) entre varios grupos requiere una prueba para variables cualitativas, como chi-cuadrado extendido.',
  exp:'Como la variable de interés es categórica (desarrollar o no la complicación, una proporción), y se compara entre varios grupos (cuatro técnicas quirúrgicas), la prueba apropiada es una extensión de chi-cuadrado para tablas de contingencia con más de dos categorías en una de las variables, no una prueba diseñada para comparar medias de una variable cuantitativa (como ANOVA o t de Student), que serían inapropiadas para una variable de desenlace categórica como esta.',
  no:{
    0:'El ANOVA se usa para comparar MEDIAS de una variable CUANTITATIVA entre grupos, no proporciones de una variable categórica, como en este caso.',
    2:'La t de Student compara medias entre dos grupos de una variable cuantitativa, ni el número de grupos (cuatro) ni el tipo de variable (categórica, no cuantitativa) coinciden con este caso.',
    3:'La correlación de Pearson mide la asociación lineal entre dos variables cuantitativas continuas, no la comparación de una proporción categórica entre grupos.'
  },
  trampa:'Elegir una prueba diseñada para variables cuantitativas (ANOVA, t de Student) cuando la variable de desenlace en realidad es categórica (proporción de una complicación).',
  obj:'Elegir la prueba estadística apropiada para comparar una proporción entre varios grupos.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['chi-cuadrado','variable categórica','comparación de proporciones','elección de prueba estadística']
}

]);
