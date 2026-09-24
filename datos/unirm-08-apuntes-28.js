/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 28)
   BIOESTADISTICA reescrita al estandar extenso. Mismas 11 claves
   de objeto que ya existian (en apuntes-2.js y -7.js), asi que
   Object.assign las sobrescribe sin romper "Leer el tema". La
   cadena `sigue` YA estaba completa y en el orden correcto del
   Temario -se conserva-, solo se cierra el cabo suelto final:
   'meta-analisis-revision-sistematica' (ultimo tema de la
   materia, sigue:null) ahora encadena hacia 'generalidades-
   clasificacion-parasitos', primer tema de Parasitologia Medica
   (la materia siguiente del cuatrimestre).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'muestra-poblacion-inferencia': {
  tema:'De la muestra a la población: inferencia',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:13,
  idea:'Estadística I describía los datos que ya se tenían; Bioestadística da el salto a inferir: usar una muestra, necesariamente imperfecta, para decir algo con confianza cuantificada sobre una población que nunca se mide completa.',
  claves:['inferencia','parámetro','estimador','error estándar','población'],
  sigue:'intervalos-confianza',
  secciones:[
    {
      t:'Parámetro contra estimador: la distinción que sostiene toda la inferencia',
      p:[
        'Un parámetro es una característica numérica de la POBLACIÓN completa (por ejemplo, la media real de presión arterial de todos los adultos de un país), un valor generalmente desconocido y, en la práctica, casi imposible de medir directamente porque estudiar a toda la población es inviable. Un estimador es el valor calculado a partir de una MUESTRA (por ejemplo, la media de presión arterial de 500 pacientes estudiados), que se usa para aproximar el parámetro poblacional desconocido. Toda la inferencia estadística consiste, en esencia, en usar estimadores calculados de muestras para hacer afirmaciones razonadas -con un grado de incertidumbre cuantificado, nunca con certeza absoluta- sobre parámetros poblacionales que nunca se observan directamente.'
      ],
      foco:[
        'Parámetro = valor real de la POBLACIÓN (desconocido). Estimador = valor calculado de la MUESTRA (conocido, calculado). La inferencia usa el segundo para aproximar el primero, nunca con certeza absoluta.'
      ]
    },
    {
      t:'El error estándar: cuánto varía un estimador de una muestra a otra',
      p:[
        'El error estándar de la media mide cuánto variaría el valor de la media muestral si se repitiera el estudio muchas veces, tomando una muestra nueva cada vez de la misma población -no debe confundirse con la desviación estándar, que mide la dispersión de los DATOS INDIVIDUALES dentro de una sola muestra. El error estándar se calcula dividiendo la desviación estándar de los datos entre la raíz cuadrada del tamaño de la muestra, lo que revela una relación clave: a mayor tamaño de muestra, MENOR error estándar (la estimación se vuelve más precisa), aunque la relación no es lineal -para reducir el error estándar a la mitad, hace falta CUADRUPLICAR el tamaño de la muestra, no simplemente duplicarlo, por la raíz cuadrada en el denominador.'
      ],
      foco:[
        '*Consideración clínica*: desviación estándar mide dispersión de los DATOS individuales; error estándar mide la precisión del ESTIMADOR (media) entre muestras repetidas. Para reducir el error estándar a la mitad, hay que CUADRUPLICAR el tamaño muestral, no solo duplicarlo.'
      ]
    },
    {
      t:'Por qué toda inferencia lleva incertidumbre cuantificada, nunca certeza',
      p:[
        'Como el estimador se calcula de una sola muestra entre las infinitas muestras posibles que podrían haberse tomado de la misma población, siempre existe la posibilidad de que esa muestra particular, por azar, no represente exactamente al parámetro poblacional real. La inferencia estadística no pretende eliminar esa incertidumbre -algo imposible sin estudiar a toda la población-, sino CUANTIFICARLA de forma rigurosa, mediante herramientas como el intervalo de confianza y la prueba de hipótesis (ambas desarrolladas en los próximos temas), que expresan explícitamente cuánta confianza puede depositarse en una conclusión basada en una muestra, en vez de presentarla como un hecho poblacional cierto.'
      ],
      foco:[
        'La inferencia estadística cuantifica la incertidumbre (con intervalos de confianza, valores p), no la elimina. Ninguna conclusión basada en una muestra es una certeza poblacional absoluta -es una estimación con un margen de confianza explícito.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'intervalos-confianza': {
  tema:'Intervalos de confianza',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:14,
  idea:'Un intervalo de confianza del 95% no significa "hay 95% de probabilidad de que el parámetro real esté en este rango" -es una interpretación tentadora pero técnicamente incorrecta que casi todo el mundo comete alguna vez, y entender por qué está mal es lo que separa el manejo superficial del riguroso.',
  claves:['intervalo de confianza','precisión','95%','amplitud'],
  sigue:'hipotesis-nula-valor-p',
  secciones:[
    {
      t:'Qué es (y qué NO es) un intervalo de confianza del 95%',
      p:[
        'Un intervalo de confianza del 95% es un rango de valores calculado de tal forma que, si se repitiera el mismo estudio infinitas veces (con muestras nuevas cada vez de la misma población), el 95% de los intervalos calculados de esa manera contendría al verdadero parámetro poblacional. La interpretación intuitiva pero INCORRECTA es decir "hay un 95% de probabilidad de que el parámetro real esté dentro de este intervalo específico": una vez calculado, un intervalo de confianza particular O contiene al parámetro O no lo contiene -no hay una probabilidad asociada a ese intervalo ya calculado, porque el parámetro poblacional es un valor fijo (aunque desconocido), no una variable aleatoria. La probabilidad del 95% describe el PROCEDIMIENTO de construcción del intervalo a largo plazo, no a un intervalo individual ya obtenido.'
      ],
      foco:[
        'Interpretación correcta: el PROCEDIMIENTO produce intervalos que capturan al parámetro real el 95% de las veces, a largo plazo. Interpretación incorrecta (pero muy común): "este intervalo específico tiene 95% de probabilidad de contener al parámetro" -el parámetro es fijo, no aleatorio.'
      ]
    },
    {
      t:'Amplitud del intervalo: qué la determina y qué compromiso implica',
      p:[
        'La amplitud (ancho) de un intervalo de confianza refleja la precisión de la estimación: un intervalo más estrecho es más preciso. La amplitud depende de tres factores: el tamaño de la muestra (a mayor tamaño, intervalo más estrecho, por el mismo mecanismo que reduce el error estándar), la variabilidad de los datos (a mayor dispersión de los datos individuales, intervalo más amplio) y el nivel de confianza elegido (un intervalo de confianza del 99% es necesariamente MÁS AMPLIO que uno del 95% para los mismos datos, porque exigir mayor certeza de captura del parámetro obliga a abarcar un rango más amplio de valores posibles). Este último punto revela un compromiso inevitable: no se puede tener simultáneamente mayor confianza Y mayor precisión (intervalo más estrecho) sin aumentar el tamaño de la muestra.'
      ],
      foco:[
        'A mayor nivel de confianza exigido (99% en vez de 95%), MÁS AMPLIO el intervalo resultante, para los mismos datos -mayor certeza siempre cuesta precisión, salvo que se aumente el tamaño de la muestra.'
      ]
    },
    {
      t:'Usar el intervalo de confianza para juzgar significación, sin necesidad de un valor p',
      p:[
        'Una aplicación práctica muy usada del intervalo de confianza es evaluar la significación estadística de una diferencia o una asociación sin necesidad de calcular un valor p por separado: si el intervalo de confianza de una diferencia entre grupos (o de un riesgo relativo, o de una razón de momios) NO incluye el valor "nulo" correspondiente (cero para una diferencia de medias, uno para un riesgo relativo o razón de momios), el resultado es estadísticamente significativo al nivel de confianza correspondiente. Esta lectura tiene una ventaja añadida sobre el valor p solo: el intervalo de confianza también informa sobre la MAGNITUD y la PRECISIÓN del efecto, algo que un valor p aislado no comunica -dos estudios pueden tener el mismo valor p pero intervalos de confianza de amplitud muy distinta, reflejando precisión muy distinta de la estimación.'
      ],
      foco:[
        '*Consideración clínica*: si el intervalo de confianza de una diferencia NO incluye el cero (o el de un riesgo relativo/razón de momios no incluye el uno), el resultado es significativo -y el intervalo, a diferencia del valor p solo, también informa la magnitud y precisión del efecto encontrado.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'hipotesis-nula-valor-p': {
  tema:'Hipótesis nula y valor p',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:14,
  idea:'El valor p es, con diferencia, el número más citado y más malinterpretado de toda la estadística médica -entender exactamente qué pregunta responde (y qué preguntas NO responde) es la base de leer con criterio cualquier artículo científico.',
  claves:['hipótesis nula','valor p','significación','alfa','error tipo I','error tipo II'],
  sigue:'potencia-tamano-muestral',
  secciones:[
    {
      t:'La hipótesis nula: el punto de partida escéptico de toda prueba estadística',
      p:[
        'La hipótesis nula (H0) postula que NO existe diferencia real (o asociación real) entre los grupos o variables comparadas -es el punto de partida "escéptico" de cualquier prueba estadística, que se mantiene como verdadero por defecto hasta que la evidencia acumulada sea lo suficientemente fuerte como para rechazarlo. La hipótesis alternativa (H1) postula que sí existe una diferencia real. El objetivo de una prueba de hipótesis no es "demostrar" que H1 es verdadera de forma directa, sino evaluar cuán compatibles son los datos observados con la hipótesis nula, y decidir si esa compatibilidad es tan baja que resulta más razonable rechazarla.'
      ],
      foco:[
        'H0 = no hay diferencia real (punto de partida escéptico). H1 = sí hay diferencia real. Una prueba estadística nunca "demuestra" H1 directamente: evalúa qué tan compatibles son los datos con H0 y decide si rechazarla.'
      ]
    },
    {
      t:'Qué es (y qué NO es) el valor p',
      p:[
        'El valor p es la probabilidad de observar un resultado tan extremo o más extremo que el obtenido, SI la hipótesis nula fuera realmente cierta. Un valor p pequeño (convencionalmente, menor a 0.05, el umbral alfa habitual) sugiere que el resultado observado sería poco probable si realmente no hubiera diferencia, lo que lleva a rechazar la hipótesis nula. Es crucial lo que el valor p NO es: no es la probabilidad de que la hipótesis nula sea verdadera, no es la probabilidad de que el resultado se deba al azar, y no mide la magnitud ni la importancia clínica del efecto encontrado -un valor p muy pequeño puede corresponder a una diferencia clínicamente irrelevante si la muestra es muy grande, y un valor p no significativo no prueba que la hipótesis nula sea cierta, solo que no hay evidencia suficiente en esos datos para rechazarla.'
      ],
      foco:[
        'El valor p es P(datos tan extremos | H0 es cierta), NO P(H0 es cierta | los datos). Confundir estas dos probabilidades condicionales -invertidas entre sí- es el error de interpretación más frecuente y más grave del valor p.'
      ]
    },
    {
      t:'Error tipo I y tipo II: los dos modos de equivocarse',
      p:[
        'El error tipo I (con probabilidad alfa, convencionalmente 0.05) ocurre cuando se rechaza la hipótesis nula siendo en realidad verdadera -concluir que hay una diferencia cuando en realidad no la hay, un "falso positivo" estadístico. El error tipo II (con probabilidad beta) ocurre cuando NO se rechaza la hipótesis nula siendo en realidad falsa -no detectar una diferencia que sí existe realmente, un "falso negativo" estadístico. Ambos errores están en tensión: reducir el umbral alfa (exigir un valor p más pequeño para considerar significativo un resultado) reduce el riesgo de error tipo I, pero, a igualdad de las demás condiciones, aumenta el riesgo de error tipo II, porque se vuelve más difícil rechazar la hipótesis nula incluso cuando sí hay una diferencia real.'
      ],
      foco:[
        '*Consideración clínica*: error tipo I = falso positivo (concluir diferencia que no existe). Error tipo II = falso negativo (no detectar diferencia que sí existe). Son errores en tensión: reducir uno, a igualdad de condiciones, tiende a aumentar el otro.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'potencia-tamano-muestral': {
  tema:'Potencia y tamaño muestral',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:13,
  idea:'La potencia estadística responde a una pregunta muy práctica: si de verdad existe una diferencia real, ¿qué tan probable es que este estudio, con este tamaño de muestra, logre detectarla? Un estudio "negativo" con poca potencia no demuestra ausencia de efecto -puede simplemente no haber tenido la capacidad de encontrarlo.',
  claves:['potencia','beta','tamaño muestral','efecto'],
  sigue:'pruebas-variables-cuantitativas',
  secciones:[
    {
      t:'Potencia: la capacidad de detectar un efecto real cuando existe',
      p:[
        'La potencia estadística es la probabilidad de detectar correctamente una diferencia real cuando esta efectivamente existe -es decir, la probabilidad de rechazar correctamente la hipótesis nula cuando es falsa. Se calcula como 1 menos beta (la probabilidad de error tipo II ya vista): a mayor potencia, menor riesgo de un falso negativo. Por convención, se suele exigir una potencia mínima del 80% en el diseño de un estudio, lo que significa aceptar un riesgo de error tipo II de hasta el 20% -un umbral convencional, similar al 5% convencional para el error tipo I, sin que ninguno de los dos tenga una justificación matemática absoluta más allá de ser un compromiso práctico aceptado por la comunidad científica.'
      ],
      foco:[
        'Potencia = 1 − beta = probabilidad de detectar correctamente un efecto real. El estándar convencional de diseño es potencia mínima del 80% (equivalente a tolerar hasta 20% de riesgo de error tipo II).'
      ]
    },
    {
      t:'Los cuatro factores que determinan la potencia de un estudio',
      p:[
        'La potencia de un estudio depende de cuatro factores relacionados entre sí: el tamaño de la muestra (a mayor muestra, mayor potencia, manteniendo todo lo demás constante), el tamaño del efecto que se busca detectar (efectos más grandes son más fáciles de detectar con la misma muestra que efectos pequeños y sutiles), la variabilidad de los datos (menor variabilidad facilita detectar una diferencia real, con la misma muestra) y el nivel de significación alfa elegido (un alfa más permisivo, como 0.10 en vez de 0.05, aumenta la potencia pero a costa de mayor riesgo de error tipo I). Estos cuatro factores se interrelacionan en el cálculo del tamaño muestral necesario: para detectar un efecto pequeño y sutil con alta confianza, se necesita una muestra considerablemente mayor que para detectar un efecto grande y obvio.'
      ],
      foco:[
        'Cuatro factores de la potencia: tamaño de muestra, tamaño del efecto buscado, variabilidad de los datos, nivel alfa. Un efecto pequeño requiere una muestra mucho mayor que uno grande para lograr la misma potencia de detección.'
      ]
    },
    {
      t:'Por qué un resultado "no significativo" en un estudio con poca potencia no es concluyente',
      p:[
        'Un estudio con potencia insuficiente (por ejemplo, con una muestra demasiado pequeña para el tamaño del efecto que realmente existe) tiene un riesgo elevado de error tipo II: puede fallar en detectar una diferencia real simplemente porque no tuvo la capacidad estadística suficiente para hacerlo, no porque la diferencia no exista. Interpretar un resultado "no significativo" de un estudio con poca potencia como "prueba de que no hay diferencia" es un error de interpretación grave y frecuente -la ausencia de evidencia de efecto no es lo mismo que evidencia de ausencia de efecto, especialmente cuando el estudio nunca tuvo la potencia adecuada para detectar el efecto que se buscaba.'
      ],
      foco:[
        '*Consideración clínica*: "no se encontró diferencia significativa" en un estudio con muestra pequeña o poca potencia NO equivale a "no hay diferencia real" -puede simplemente reflejar que el estudio no tuvo la capacidad de detectarla, un error de interpretación frecuente en la lectura crítica de la literatura.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'pruebas-variables-cuantitativas': {
  tema:'Pruebas para variables cuantitativas',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:14,
  idea:'Elegir la prueba estadística correcta para comparar variables cuantitativas depende de tres preguntas concretas -¿cuántos grupos?, ¿los mismos sujetos medidos dos veces o grupos independientes?, ¿los datos siguen una distribución normal?-, y responderlas en orden es lo que evita usar la prueba equivocada.',
  claves:['t de Student','ANOVA','apareado','normalidad'],
  sigue:'pruebas-variables-cualitativas',
  secciones:[
    {
      t:'La prueba t de Student: comparar dos grupos',
      p:[
        'La prueba t de Student compara las medias de dos grupos, y se presenta en dos variantes según el diseño del estudio. La t de Student para muestras INDEPENDIENTES compara las medias de dos grupos distintos de sujetos (por ejemplo, un grupo tratado contra un grupo control, cada sujeto medido una sola vez). La t de Student PAREADA (o apareada) compara dos mediciones tomadas en los MISMOS sujetos (por ejemplo, antes y después de una intervención en el mismo grupo de pacientes), aprovechando que cada sujeto sirve como su propio control, lo que generalmente aumenta la potencia estadística al eliminar la variabilidad entre sujetos distintos de la comparación. Usar la prueba independiente cuando en realidad los datos están pareados desperdicia esa ganancia de potencia y es un error metodológico frecuente.'
      ],
      foco:[
        't de Student independiente = dos grupos DISTINTOS de sujetos. t de Student pareada = MISMOS sujetos medidos dos veces (antes/después). La pareada tiene mayor potencia porque cada sujeto es su propio control, eliminando variabilidad entre sujetos.'
      ]
    },
    {
      t:'ANOVA: cuando hay más de dos grupos que comparar',
      p:[
        'El análisis de varianza (ANOVA) se usa para comparar las medias de TRES O MÁS grupos simultáneamente. Es un error metodológico común hacer múltiples comparaciones de a pares con la prueba t de Student en vez de usar ANOVA cuando hay más de dos grupos, porque cada comparación individual tiene su propia probabilidad de error tipo I, y al multiplicar el número de comparaciones, el riesgo ACUMULADO de al menos un falso positivo aumenta considerablemente por encima del 5% nominal buscado para cada comparación individual -un problema conocido como el de comparaciones múltiples. El ANOVA controla este problema al evaluar todas las medias de una sola vez, con un único valor p global; si el resultado global es significativo, se procede después a pruebas post-hoc específicas (diseñadas para controlar el error acumulado) para identificar cuáles pares de grupos difieren entre sí.'
      ],
      foco:[
        '*Consideración clínica*: con tres o más grupos, usar múltiples pruebas t de a pares en vez de ANOVA infla el riesgo acumulado de error tipo I por el problema de comparaciones múltiples -el ANOVA controla ese riesgo con un único valor p global antes de comparar pares específicos.'
      ]
    },
    {
      t:'El supuesto de normalidad y las alternativas no paramétricas',
      p:[
        'Tanto la prueba t de Student como el ANOVA asumen que los datos siguen (aproximadamente) una distribución normal -este supuesto puede verificarse visualmente (histograma, gráfico Q-Q) o con pruebas formales de normalidad. Cuando los datos se apartan claramente de la normalidad (por ejemplo, con asimetría marcada o valores extremos influyentes, como ya se vio en Estadística I) y la muestra es pequeña (con muestras grandes, el teorema del límite central hace que la media muestral se aproxime a una distribución normal incluso si los datos individuales no lo son), se recurre a pruebas no paramétricas equivalentes, que no asumen normalidad: la prueba de Mann-Whitney U como alternativa a la t de Student independiente, la prueba de Wilcoxon como alternativa a la t pareada, y la prueba de Kruskal-Wallis como alternativa al ANOVA.'
      ],
      foco:[
        'Si los datos no cumplen normalidad (y la muestra es pequeña): Mann-Whitney U reemplaza a la t independiente, Wilcoxon reemplaza a la t pareada, Kruskal-Wallis reemplaza al ANOVA -el mismo tipo de comparación, sin el supuesto de normalidad.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'pruebas-variables-cualitativas': {
  tema:'Pruebas para variables cualitativas',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:12,
  idea:'Para comparar proporciones o variables categóricas entre grupos, la elección entre chi-cuadrado y la prueba exacta de Fisher depende de un solo dato práctico: cuántas observaciones caben en cada celda de la tabla.',
  claves:['chi cuadrado','Fisher','tabla de contingencia','proporciones'],
  sigue:'correlacion-regresion',
  secciones:[
    {
      t:'Chi-cuadrado: comparar proporciones entre grupos',
      p:[
        'La prueba de chi-cuadrado compara frecuencias observadas contra frecuencias esperadas (bajo la hipótesis de independencia entre las variables, ya visto en Estadística I) dentro de una tabla de contingencia, evaluando si existe asociación entre dos variables categóricas -por ejemplo, si el tipo de tratamiento recibido se asocia con la proporción de pacientes que se recuperan. Es la prueba estándar para este tipo de comparación, pero tiene una limitación práctica: su aproximación estadística es poco fiable cuando las frecuencias esperadas en alguna celda de la tabla son muy pequeñas (convencionalmente, cuando alguna celda tiene una frecuencia esperada menor a 5), porque la distribución chi-cuadrado es una aproximación que se vuelve inexacta con muestras o frecuencias por celda demasiado pequeñas.'
      ],
      foco:[
        'Chi-cuadrado compara proporciones/frecuencias entre categorías. Su aproximación falla con frecuencias esperadas pequeñas (convencionalmente, menor a 5 en alguna celda) -ahí es donde se necesita una alternativa exacta.'
      ]
    },
    {
      t:'La prueba exacta de Fisher: la alternativa para muestras pequeñas',
      p:[
        'La prueba exacta de Fisher se usa precisamente cuando las frecuencias esperadas son demasiado pequeñas para que la aproximación de chi-cuadrado sea fiable -típicamente en tablas 2x2 con muestras pequeñas. A diferencia de chi-cuadrado, que es una aproximación estadística, Fisher calcula la probabilidad EXACTA de obtener la distribución observada (o una más extrema) bajo la hipótesis nula, sin depender de ninguna aproximación que pueda fallar con números pequeños. Es computacionalmente más exigente que chi-cuadrado (históricamente, una limitación práctica antes de la computación moderna), pero hoy en día se calcula sin dificultad con cualquier software estadístico, así que no hay razón práctica para evitarla cuando está indicada por el tamaño pequeño de las frecuencias.'
      ],
      foco:[
        '*Consideración clínica*: ante una tabla de contingencia con frecuencias esperadas pequeñas (por ejemplo, un estudio piloto con pocos pacientes), usar la prueba exacta de Fisher en vez de chi-cuadrado, que puede dar un resultado poco fiable en esas condiciones.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'correlacion-regresion': {
  tema:'Correlación y regresión',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:13,
  idea:'Encontrar que dos variables se mueven juntas -correlación- nunca es, por sí solo, evidencia de que una cause a la otra, y confundir estos dos conceptos es probablemente el error de razonamiento estadístico más citado (y más repetido) en toda la literatura médica.',
  claves:['correlación','Pearson','regresión lineal','coeficiente','causalidad'],
  sigue:'significacion-relevancia-clinica',
  secciones:[
    {
      t:'El coeficiente de correlación de Pearson: fuerza y dirección de una asociación lineal',
      p:[
        'El coeficiente de correlación de Pearson (r) mide la fuerza y la dirección de la asociación LINEAL entre dos variables cuantitativas continuas, con valores que van de -1 (correlación negativa perfecta: cuando una variable sube, la otra baja de forma perfectamente predecible) a +1 (correlación positiva perfecta), pasando por 0 (ausencia de correlación lineal). Es importante notar que Pearson mide específicamente relaciones LINEALES: dos variables pueden tener una relación fuerte y clara pero NO lineal (por ejemplo, una relación en forma de U), y en ese caso el coeficiente de Pearson podría ser cercano a cero pese a que sí existe una relación real y fuerte entre ellas, solo que de una forma que este coeficiente específico no está diseñado para capturar.'
      ],
      foco:[
        'Pearson mide correlación LINEAL específicamente. Un coeficiente de Pearson cercano a cero NO significa ausencia de cualquier relación -puede haber una relación fuerte pero no lineal (como en forma de U) que este coeficiente no detecta.'
      ]
    },
    {
      t:'Correlación no es causalidad: la advertencia más repetida (y más ignorada) de la estadística',
      p:[
        'Que dos variables estén correlacionadas no implica que una cause a la otra -pueden estar relacionadas por una variable de confusión que influye sobre ambas (por ejemplo, el consumo de helado y el número de ahogamientos están correlacionados, no porque uno cause al otro, sino porque ambos aumentan en verano, la variable de confusión real), por causalidad inversa (la variable que se asume como "causa" podría en realidad ser la "consecuencia"), o simplemente por azar (sobre todo al examinar muchas correlaciones a la vez, algunas resultarán significativas solo por casualidad estadística). Establecer causalidad requiere criterios adicionales, mucho más exigentes que una simple correlación observada -entre ellos, la secuencia temporal correcta, la plausibilidad biológica, la consistencia entre distintos estudios, y idealmente evidencia experimental (ensayos aleatorizados), no solo observacional.'
      ],
      foco:[
        '*Consideración clínica*: ante cualquier correlación reportada en un estudio, preguntar siempre "¿podría haber una variable de confusión explicando esto?" antes de aceptar una interpretación causal -es el hábito de lectura crítica más importante de todo este tema.'
      ]
    },
    {
      t:'Regresión lineal: predecir una variable a partir de otra',
      p:[
        'La regresión lineal va un paso más allá de la correlación: en vez de solo medir la fuerza de la asociación, construye una ecuación (una línea recta) que permite PREDECIR el valor de una variable dependiente a partir del valor de una o más variables independientes. El coeficiente de determinación (R², el cuadrado del coeficiente de correlación en una regresión lineal simple) indica qué proporción de la variabilidad de la variable dependiente es explicada por el modelo -un R² de 0.64, por ejemplo, significa que el 64% de la variabilidad observada se explica por la variable(s) independiente(s) incluida(s) en el modelo, dejando el 36% restante sin explicar por factores no incluidos.'
      ],
      foco:[
        'R² (coeficiente de determinación) = proporción de la variabilidad de la variable dependiente explicada por el modelo de regresión. Un R² alto indica un modelo que explica bien la variabilidad observada; no mide, por sí solo, si la relación es causal.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'significacion-relevancia-clinica': {
  tema:'Significación estadística frente a relevancia clínica',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:12,
  idea:'Un resultado puede ser estadísticamente significativo y, al mismo tiempo, clínicamente irrelevante -y la única forma de distinguir ambas cosas es mirar más allá del valor p, hacia la magnitud real del efecto encontrado.',
  claves:['relevancia clínica','tamaño del efecto','intervalo','p pequeña'],
  sigue:'regresion-logistica',
  secciones:[
    {
      t:'Por qué una muestra muy grande puede hacer "significativo" un efecto trivial',
      p:[
        'El valor p depende tanto del tamaño del efecto como del tamaño de la muestra: con una muestra suficientemente grande, incluso una diferencia mínima y clínicamente trivial entre grupos puede alcanzar significación estadística (valor p menor a 0.05), simplemente porque la muestra grande da suficiente potencia estadística para detectar diferencias diminutas con precisión. Por ejemplo, un estudio con decenas de miles de participantes podría encontrar una diferencia "estadísticamente significativa" de 1 mmHg en la presión arterial entre dos tratamientos -un hallazgo real y no debido al azar, pero sin ninguna relevancia clínica práctica para el manejo de un paciente individual.'
      ],
      foco:[
        'Con muestras muy grandes, incluso diferencias clínicamente triviales pueden ser "estadísticamente significativas" (p menor a 0.05) -el valor p confirma que la diferencia es real (no azar), no que sea clínicamente importante.'
      ]
    },
    {
      t:'El tamaño del efecto: la medida que sí informa sobre relevancia clínica',
      p:[
        'El tamaño del efecto (por ejemplo, la diferencia de medias entre grupos, el riesgo relativo, la razón de momios, o medidas estandarizadas como la d de Cohen) cuantifica la MAGNITUD de una diferencia o asociación, independientemente de si es estadísticamente significativa o no. A diferencia del valor p (que solo indica si el efecto observado es improbable bajo la hipótesis nula), el tamaño del efecto -acompañado idealmente de su intervalo de confianza, que informa también sobre la precisión de esa estimación- es lo que realmente permite juzgar si una diferencia encontrada tiene relevancia práctica para la toma de decisiones clínicas, sin importar cuán pequeño sea el valor p asociado.'
      ],
      foco:[
        '*Consideración clínica*: al leer un estudio, buscar siempre el TAMAÑO DEL EFECTO (y su intervalo de confianza), no solo el valor p -un valor p pequeño confirma que el hallazgo probablemente no es azar, pero solo el tamaño del efecto dice si ese hallazgo importa clínicamente.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'regresion-logistica': {
  tema:'Regresión logística',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:13,
  idea:'La regresión lineal predice un número continuo; la regresión logística predice la probabilidad de un desenlace binario (sí/no) -y su verdadero valor en la práctica clínica es ajustar el efecto de una variable de interés eliminando la influencia de factores de confusión conocidos.',
  claves:['regresión logística','razón de momios','variable binaria','odds ratio ajustado'],
  sigue:'analisis-supervivencia',
  secciones:[
    {
      t:'Por qué la regresión lineal no sirve para desenlaces binarios',
      p:[
        'Cuando la variable dependiente es BINARIA (sí/no, vivo/muerto, presente/ausente), la regresión lineal convencional no es apropiada, porque podría predecir valores fuera del rango lógico de una probabilidad (menores a 0 o mayores a 1), algo sin sentido para una variable que solo puede tomar dos valores. La regresión logística resuelve este problema modelando, en cambio, el logaritmo de la razón de momios (log-odds) del desenlace en función de las variables independientes, una transformación matemática que garantiza que la probabilidad predicha siempre quede acotada entre 0 y 1, sin importar los valores de las variables independientes incluidas.'
      ],
      foco:[
        'La regresión logística existe precisamente porque la regresión lineal convencional podría predecir probabilidades imposibles (menores a 0 o mayores a 1) para un desenlace binario -el modelo logístico garantiza matemáticamente que la predicción quede siempre entre 0 y 1.'
      ]
    },
    {
      t:'La razón de momios ajustada: el resultado más citado de la regresión logística',
      p:[
        'El resultado principal que se reporta de una regresión logística es la razón de momios (odds ratio) asociada a cada variable independiente incluida en el modelo, interpretada de forma similar a la razón de momios simple ya vista en estudios de casos y controles: un valor mayor a 1 indica mayor probabilidad del desenlace asociada a esa variable, menor a 1 indica menor probabilidad, e igual a 1 indica ausencia de asociación. La diferencia crucial es que esta razón de momios está AJUSTADA por las demás variables incluidas simultáneamente en el mismo modelo -es decir, representa el efecto de esa variable específica MANTENIENDO CONSTANTES a las demás, lo que permite estimar el efecto independiente de un factor de exposición eliminando (o al menos reduciendo) la influencia de factores de confusión conocidos que también se incluyeron en el modelo.'
      ],
      foco:[
        '*Consideración clínica*: el valor principal de la regresión logística MULTIVARIABLE es que ajusta por factores de confusión conocidos, dando el efecto INDEPENDIENTE de una variable -un odds ratio ajustado es una estimación mucho más creíble de causalidad potencial que un odds ratio crudo (no ajustado), aunque sigue sin ser prueba definitiva de causalidad.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'analisis-supervivencia': {
  tema:'Análisis de supervivencia',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:13,
  idea:'El análisis de supervivencia resuelve un problema que ninguna otra técnica estadística maneja bien: qué hacer con los participantes de un estudio que, al terminar el seguimiento, todavía no han experimentado el desenlace de interés -la censura, un concepto central de este tema.',
  claves:['Kaplan-Meier','curva de supervivencia','censura','riesgo proporcional'],
  sigue:'meta-analisis-revision-sistematica',
  secciones:[
    {
      t:'Censura: el problema que resuelve el análisis de supervivencia',
      p:[
        'En un estudio que sigue a pacientes a lo largo del tiempo para observar cuándo ocurre un desenlace determinado (muerte, recaída, progresión de una enfermedad), es habitual que algunos participantes no hayan experimentado ese desenlace al finalizar el periodo de observación del estudio, o que se pierdan del seguimiento antes de tiempo por razones ajenas al desenlace (se mudan, retiran su consentimiento). Estos casos se llaman censurados: se sabe que el desenlace NO ocurrió durante el tiempo en que sí fueron observados, pero no se sabe qué pasó después de que dejaron de ser seguidos. Simplemente excluir a estos participantes del análisis (en vez de tratarlos como censurados) desperdiciaría información válida y podría introducir sesgo -el análisis de supervivencia está diseñado específicamente para aprovechar la información parcial que aportan los casos censurados sin descartarlos.'
      ],
      foco:[
        'Censura = un participante no experimentó el desenlace durante el tiempo que fue observado, pero se desconoce qué pasa después (fin del estudio, pérdida de seguimiento). El análisis de supervivencia aprovecha esta información parcial en vez de descartar a estos participantes.'
      ]
    },
    {
      t:'La curva de Kaplan-Meier: visualizar la probabilidad de supervivencia a lo largo del tiempo',
      p:[
        'La curva de Kaplan-Meier es la representación gráfica estándar del análisis de supervivencia: muestra, en el eje vertical, la probabilidad estimada de NO haber experimentado el desenlace (por ejemplo, seguir vivo) en función del tiempo transcurrido, en el eje horizontal. La curva desciende en escalones cada vez que ocurre el desenlace en algún participante, y los casos censurados se marcan típicamente con una pequeña marca vertical en la curva, en el momento en que dejaron de ser observados, sin que la curva descienda en ese punto (porque no experimentaron el desenlace, solo dejaron de observarse). Comparar dos curvas de Kaplan-Meier (por ejemplo, de dos brazos de tratamiento de un ensayo clínico) permite ver visualmente si un grupo tiene mejor supervivencia que el otro a lo largo de todo el seguimiento, no solo en un punto final único.'
      ],
      foco:[
        'La curva de Kaplan-Meier desciende en escalones con cada desenlace ocurrido; los casos censurados se marcan sin que la curva descienda en ese punto. Comparar curvas entre grupos permite ver diferencias de supervivencia a lo largo de TODO el seguimiento, no solo en un momento aislado.'
      ]
    },
    {
      t:'El supuesto de riesgos proporcionales',
      p:[
        'Cuando se comparan estadísticamente dos o más curvas de supervivencia (por ejemplo, con la prueba de log-rank, o con un modelo de regresión de Cox para ajustar por variables de confusión, análogo a la regresión logística pero para datos de supervivencia), se asume habitualmente el supuesto de riesgos proporcionales: que la razón entre el riesgo instantáneo del desenlace en un grupo comparado con el otro se mantiene relativamente constante a lo largo de todo el tiempo de seguimiento, aunque el riesgo absoluto de cada grupo por separado pueda cambiar con el tiempo. Si las curvas de supervivencia de dos grupos se cruzan (indicando que en un periodo un grupo tiene mejor supervivencia y en otro periodo la relación se invierte), este supuesto probablemente no se cumple, y los métodos estadísticos que dependen de él (como la regresión de Cox estándar) podrían dar resultados poco fiables sin ajustes adicionales.'
      ],
      foco:[
        '*Consideración clínica*: si dos curvas de Kaplan-Meier se CRUZAN en algún punto, es una señal visual de que el supuesto de riesgos proporcionales probablemente no se cumple, y los métodos estadísticos estándar que lo asumen (como la regresión de Cox) podrían no ser apropiados sin modificaciones.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'meta-analisis-revision-sistematica': {
  tema:'Meta-análisis y revisión sistemática',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:13,
  idea:'Combinar estadísticamente los resultados de varios estudios distintos en un solo número más preciso suena directo, pero solo tiene sentido si esos estudios son lo suficientemente parecidos entre sí -y el forest plot es la herramienta visual que permite juzgar, de un vistazo, si esa combinación es razonable.',
  claves:['meta-análisis','revisión sistemática','heterogeneidad','forest plot'],
  sigue:'generalidades-clasificacion-parasitos',
  secciones:[
    {
      t:'Revisión sistemática contra meta-análisis: dos conceptos relacionados pero distintos',
      p:[
        'Una revisión sistemática es un proceso metodológico riguroso y explícito para identificar, seleccionar y evaluar críticamente TODA la evidencia disponible sobre una pregunta clínica específica, siguiendo criterios de búsqueda y selección predefinidos (para minimizar el sesgo de selección de qué estudios se incluyen), a diferencia de una revisión narrativa tradicional, más informal y potencialmente sesgada en su selección de estudios. Un meta-análisis es el análisis ESTADÍSTICO específico que, dentro de (o a partir de) una revisión sistemática, combina cuantitativamente los resultados numéricos de varios estudios individuales en una sola estimación combinada, más precisa (con un intervalo de confianza más estrecho) que la de cualquier estudio individual por separado. No toda revisión sistemática incluye necesariamente un meta-análisis (por ejemplo, si los estudios encontrados son demasiado heterogéneos para combinarse estadísticamente de forma razonable).'
      ],
      foco:[
        'Revisión sistemática = proceso metodológico riguroso de búsqueda y selección de TODA la evidencia disponible. Meta-análisis = la combinación ESTADÍSTICA de los resultados numéricos, cuando es razonable hacerlo. Uno no implica automáticamente al otro.'
      ]
    },
    {
      t:'Heterogeneidad: cuándo NO tiene sentido combinar estudios',
      p:[
        'La heterogeneidad mide qué tan distintos son entre sí los resultados de los estudios individuales incluidos en un meta-análisis, más allá de lo que se esperaría solo por variación aleatoria de muestreo. Una heterogeneidad alta sugiere que los estudios difieren de forma sistemática (por diferencias reales en las poblaciones estudiadas, en las intervenciones exactas evaluadas, en la metodología, o en el contexto clínico), lo que pone en duda si combinarlos en una sola estimación numérica tiene sentido clínico y estadístico -combinar estudios muy heterogéneos puede producir un número "promedio" engañoso, que no representa fielmente a ninguno de los estudios individuales reales. Cuando la heterogeneidad es alta, se prefiere el modelo estadístico de efectos aleatorios (que asume que el efecto verdadero puede variar genuinamente entre los distintos estudios) sobre el modelo de efectos fijos (que asume un único efecto verdadero compartido por todos los estudios), y en casos de heterogeneidad extrema, puede ser más honesto no combinar los estudios en absoluto y reportar los resultados por separado.'
      ],
      foco:[
        '*Consideración clínica*: la heterogeneidad alta entre estudios de un meta-análisis pone en duda la validez de combinarlos en una sola cifra -en ese caso, usar un modelo de efectos aleatorios (no de efectos fijos) o, en casos extremos, reconsiderar si conviene combinarlos en absoluto.'
      ]
    },
    {
      t:'El forest plot: leer un meta-análisis de un vistazo',
      p:[
        'El forest plot es la representación gráfica estándar de un meta-análisis: cada línea horizontal representa a un estudio individual, con un cuadrado (cuyo tamaño suele ser proporcional al peso que ese estudio aporta al resultado combinado, generalmente relacionado con su tamaño muestral o precisión) marcando su estimación puntual del efecto, y una línea horizontal a cada lado representando su intervalo de confianza. En la parte inferior del gráfico, un rombo (diamante) representa la estimación combinada de todos los estudios y su intervalo de confianza conjunto, generalmente más estrecho (más preciso) que el de cualquier estudio individual. Una línea vertical marca el valor "nulo" (sin efecto); si el rombo combinado no cruza esa línea, el efecto combinado es estadísticamente significativo. Leer rápidamente si los cuadrados de los estudios individuales están dispersos ampliamente a ambos lados de la línea nula (heterogeneidad visual alta) o agrupados de forma consistente en un mismo lado (heterogeneidad visual baja) es una primera aproximación visual, antes incluso de revisar las medidas formales de heterogeneidad.'
      ],
      foco:[
        'En un forest plot: cada línea = un estudio (cuadrado = estimación puntual, tamaño ∝ peso; línea = intervalo de confianza). El rombo inferior = estimación combinada. Estudios dispersos a ambos lados de la línea nula sugieren heterogeneidad alta, antes incluso de calcular medidas formales.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
}

});
