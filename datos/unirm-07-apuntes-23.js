/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 23)
   ESTADISTICA I reescrita al estandar extenso (como Anatomia I,
   Fisiologia I, Histologia, Bioquimica I, Microbiologia Medica).
   Mismas 10 claves de objeto que ya existian (en apuntes.js,
   -3.js, -4.js y -11.js), asi que Object.assign las sobrescribe
   sin romper el enlace "Leer el tema". La cadena `sigue` se deja
   en el mismo orden del Temario, y el ultimo tema (fuentes de
   datos en salud, el cierre de TODO el cuatrimestre 7) ahora
   encadena hacia 'corazon-y-pericardio', el primer apunte del
   cuatrimestre 8, en vez de quedar en sigue:null.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'tipos-de-variables': {
  tema:'Tipos de variables y escalas de medición',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:13,
  idea:'Antes de calcular cualquier cosa, hay que clasificar bien la variable: de esa sola decisión depende qué operaciones tienen sentido hacer con los datos y qué gráfico los representa de forma honesta.',
  claves:['cualitativa','cuantitativa','nominal','ordinal','discreta','continua'],
  sigue:'medidas-tendencia-central',
  secciones:[
    {
      t:'La primera bifurcación: cualitativa o cuantitativa',
      p:[
        'Una variable cualitativa (o categórica) describe una cualidad o categoría, no una cantidad numérica con significado aritmético: el grupo sanguíneo, el sexo, el diagnóstico, el estadio de una enfermedad. Una variable cuantitativa (o numérica) sí representa una cantidad medible, sobre la que tiene sentido calcular promedios, sumas o diferencias: la edad, la presión arterial, el número de hijos. Esta primera bifurcación es la que determina, de entrada, qué tipo de análisis estadístico es válido: calcular un "promedio" de grupos sanguíneos (A, B, AB, O) no tiene ningún significado, aunque numéricamente sea posible asignarles códigos y hacer la cuenta.'
      ],
      foco:[
        'Antes de calcular una media, preguntarse: ¿tiene sentido sumar estos valores? Si la respuesta es no (como con grupos sanguíneos o diagnósticos), la variable es cualitativa y ese cálculo no aplica.'
      ]
    },
    {
      t:'Dentro de lo cualitativo: nominal contra ordinal',
      p:[
        'Las variables cualitativas se subdividen en nominales, donde las categorías no tienen un orden intrínseco (grupo sanguíneo, sexo, tipo de parto), y ordinales, donde sí existe un orden lógico entre las categorías, aunque la distancia entre ellas no sea necesariamente igual ni cuantificable (estadio tumoral I-II-III-IV, nivel de dolor leve-moderado-severo, clase funcional NYHA). La diferencia es clínicamente relevante: con una variable ordinal se puede decir razonablemente que una categoría es "peor" o "mayor" que otra, algo que no tiene sentido con una variable nominal (no existe un grupo sanguíneo que sea "mayor" que otro).'
      ],
      foco:[
        'Nominal = categorías sin orden (grupo sanguíneo). Ordinal = categorías CON orden pero sin distancia numérica fija entre ellas (estadio tumoral). El estadio III no es necesariamente "el doble" de grave que el estadio I I I, solo "más grave".'
      ]
    },
    {
      t:'Dentro de lo cuantitativo: discreta contra continua',
      p:[
        'Las variables cuantitativas se subdividen en discretas, que solo pueden tomar valores enteros específicos y contables, generalmente el resultado de contar algo (número de hijos, número de embarazos, número de células en un campo microscópico -nunca se tienen 2.5 hijos ni 3.7 embarazos), y continuas, que pueden tomar cualquier valor dentro de un rango, incluyendo decimales, generalmente el resultado de medir algo (talla, peso, presión arterial, concentración de glucosa en sangre). Esta distinción importa para elegir el gráfico adecuado: los datos discretos suelen representarse con gráficos de barras separadas, mientras que los datos continuos, agrupados en intervalos, se representan con histogramas de barras contiguas -sin espacio entre ellas, precisamente para reflejar que la variable no tiene "saltos" naturales.'
      ],
      foco:[
        '*Consideración clínica*: contar (número de crisis convulsivas en un mes) da variable discreta; medir (nivel de glucosa en sangre) da variable continua. La pregunta "¿estoy contando o midiendo?" resuelve la mayoría de las dudas de clasificación.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'medidas-tendencia-central': {
  tema:'Medidas de tendencia central',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:13,
  idea:'Media, mediana y moda responden preguntas distintas sobre "el centro" de un conjunto de datos, y elegir la equivocada para describir datos con valores extremos puede dar una imagen engañosa de la realidad clínica.',
  claves:['media','mediana','moda','asimetría'],
  sigue:'medidas-dispersion',
  secciones:[
    {
      t:'Media, mediana y moda: tres formas distintas de definir "el centro"',
      p:[
        'La media aritmética es la suma de todos los valores dividida entre el número de observaciones: es la medida más usada, pero también la más sensible a valores extremos (outliers), porque cada dato individual, por atípico que sea, participa en el cálculo con el mismo peso. La mediana es el valor que queda exactamente en el centro cuando los datos se ordenan de menor a mayor (o el promedio de los dos valores centrales, si el número de datos es par): no se ve afectada por valores extremos, porque solo depende de la posición central, no de la magnitud de cada dato. La moda es el valor que aparece con mayor frecuencia; es la única medida de tendencia central que puede calcularse para variables cualitativas (por ejemplo, el diagnóstico más frecuente en una consulta), y un conjunto de datos puede tener más de una moda (bimodal, multimodal) o ninguna moda clara.'
      ],
      foco:[
        'Media = sensible a valores extremos. Mediana = resistente a valores extremos. Moda = la única aplicable a variables cualitativas, y la única que puede repetirse o faltar.'
      ]
    },
    {
      t:'Cuándo la media engaña: el problema de la asimetría',
      p:[
        'Cuando la distribución de los datos es simétrica (como la distribución normal), la media, la mediana y la moda coinciden aproximadamente en el mismo valor central. Pero cuando la distribución está sesgada o es asimétrica -tiene una "cola" larga hacia un lado, por la presencia de algunos valores extremos-, la media se desplaza hacia esa cola, alejándose del centro real de la mayoría de los datos, mientras que la mediana permanece más representativa del "dato típico". Un ejemplo clásico en salud es el ingreso económico de una población, o el tiempo de estancia hospitalaria: unos pocos pacientes con estancias extremadamente largas (por complicaciones graves) elevan la media muy por encima de lo que experimenta la mayoría de los pacientes, mientras que la mediana refleja mejor la experiencia típica.'
      ],
      foco:[
        '*Consideración clínica*: ante datos con posibles valores extremos (tiempos de estancia, costos, ciertas variables de laboratorio con casos atípicos), reportar la mediana (y el rango intercuartílico) es más representativo que la media -y ver ambas medidas juntas, muy distantes entre sí, es en sí mismo un indicio de asimetría.'
      ]
    },
    {
      t:'Reconocer la asimetría por la relación entre media y mediana',
      p:[
        'Cuando la media es mayor que la mediana, la distribución tiene asimetría positiva (o hacia la derecha): hay una cola de valores altos que "jala" la media hacia arriba. Cuando la media es menor que la mediana, la asimetría es negativa (hacia la izquierda): hay una cola de valores bajos. Esta simple comparación entre dos números permite, sin necesidad de graficar nada, sospechar la forma general de la distribución de los datos y decidir si conviene reportar la media (apropiada solo para distribuciones razonablemente simétricas) o la mediana (más robusta y apropiada ante asimetría marcada).'
      ],
      foco:[
        'Media > mediana → asimetría positiva (cola a la derecha, hacia valores altos). Media < mediana → asimetría negativa (cola a la izquierda, hacia valores bajos). Media = mediana (aproximadamente) → distribución simétrica.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'medidas-dispersion': {
  tema:'Medidas de dispersión',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:13,
  idea:'Dos grupos de pacientes pueden tener exactamente la misma presión arterial promedio y aun así ser completamente distintos entre sí: uno donde todos están cerca del promedio, y otro donde hay de todo, desde muy bajos hasta muy altos. La media sola no distingue esos dos escenarios; la dispersión sí.',
  claves:['desviación estándar','varianza','rango','coeficiente de variación'],
  sigue:'presentacion-de-datos',
  secciones:[
    {
      t:'Qué tan lejos están los datos del centro',
      p:[
        'El rango es la medida de dispersión más simple: la diferencia entre el valor más alto y el más bajo. Es fácil de calcular pero muy sensible a un solo valor extremo, y no dice nada sobre cómo se distribuyen los datos intermedios. La varianza mide, en promedio, qué tan lejos está cada dato individual de la media, elevando al cuadrado esas distancias (para que las distancias negativas y positivas no se cancelen entre sí) y promediándolas. La desviación estándar es simplemente la raíz cuadrada de la varianza, y es la medida de dispersión más usada en la práctica porque queda en las mismas unidades que los datos originales (si los datos son mmHg de presión, la desviación estándar también se expresa en mmHg, mientras que la varianza quedaría en mmHg al cuadrado, una unidad poco intuitiva).'
      ],
      foco:[
        'La desviación estándar se prefiere sobre la varianza en la práctica clínica precisamente porque conserva las unidades originales de la variable, lo que la hace directamente interpretable.'
      ]
    },
    {
      t:'Comparar variabilidad entre grupos con unidades distintas',
      p:[
        'La desviación estándar por sí sola no permite comparar la variabilidad relativa de dos variables medidas en unidades distintas -por ejemplo, comparar qué tan dispersa es la talla (en cm) frente al peso (en kg) de un mismo grupo de pacientes no tiene sentido directo, porque las unidades no son comparables. El coeficiente de variación resuelve este problema: se calcula como la desviación estándar dividida entre la media (y habitualmente expresado como porcentaje), lo que da una medida de dispersión relativa, sin unidades, que sí permite comparar la variabilidad de variables distintas entre sí, o de la misma variable medida en poblaciones con medias muy diferentes.'
      ],
      foco:[
        'El coeficiente de variación permite comparar dispersión entre variables con unidades DISTINTAS (o con medias muy distintas), algo que la desviación estándar sola no puede hacer.'
      ]
    },
    {
      t:'Por qué reportar solo la media es información incompleta',
      p:[
        'Dos conjuntos de datos clínicos pueden tener exactamente la misma media y ser, en la práctica, completamente distintos: un grupo de pacientes con presión arterial promedio de 130 mmHg donde todos están entre 125 y 135 (baja dispersión) representa una situación clínica muy distinta de otro grupo con la misma media de 130 mmHg pero valores que van de 90 a 180 (alta dispersión), que incluye tanto pacientes hipotensos como severamente hipertensos. Por eso, reportar una medida de tendencia central sin su medida de dispersión correspondiente (típicamente, media ± desviación estándar) es una forma de información incompleta: la media dice dónde está el centro, pero la dispersión dice qué tan bien ese centro representa realmente al grupo.'
      ],
      foco:[
        '*Consideración clínica*: "media ± desviación estándar" siempre se reportan juntas, nunca la media sola, porque la misma media puede esconder grupos clínicamente muy distintos según su dispersión.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'presentacion-de-datos': {
  tema:'Presentación de datos: tablas y gráficos',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:12,
  idea:'Elegir mal el gráfico no es un problema estético: es una forma de decir algo falso sin mentir en ningún número individual.',
  claves:['histograma','frecuencia','gráfico de barras','diagrama de caja'],
  sigue:'probabilidad-basica',
  secciones:[
    {
      t:'Histograma contra gráfico de barras: una diferencia que sí importa',
      p:[
        'Aunque visualmente se parecen, el histograma y el gráfico de barras representan tipos de variables distintos y por eso se construyen de forma distinta. El histograma se usa para variables cuantitativas continuas, agrupadas en intervalos (clases) de valores consecutivos; sus barras van pegadas entre sí, sin espacio, precisamente porque la variable subyacente es continua y no tiene "saltos" naturales entre una clase y la siguiente. El gráfico de barras se usa para variables cualitativas (o cuantitativas discretas con pocas categorías); sus barras van separadas por un espacio, porque cada barra representa una categoría distinta e independiente, sin continuidad numérica entre ellas.'
      ],
      foco:[
        'Barras separadas = variable categórica (o discreta con pocas categorías). Barras pegadas (histograma) = variable continua agrupada en intervalos. El espacio entre barras no es un detalle estético: comunica si la variable es continua o no.'
      ]
    },
    {
      t:'El diagrama de caja: cinco números que resumen toda una distribución',
      p:[
        'El diagrama de caja (boxplot) resume una variable cuantitativa con cinco valores: el mínimo, el primer cuartil (Q1, el 25% de los datos está por debajo), la mediana (Q2), el tercer cuartil (Q3, el 75% de los datos está por debajo) y el máximo. La "caja" central va de Q1 a Q3 (contiene el 50% central de los datos, el rango intercuartílico), con una línea marcando la mediana dentro de ella; los "bigotes" se extienden hacia los valores extremos que no se consideran atípicos, y los puntos más allá de los bigotes se marcan individualmente como posibles valores atípicos (outliers). Su gran ventaja es que permite comparar visualmente la distribución de una variable entre varios grupos (por ejemplo, el tiempo de recuperación en tres brazos de tratamiento distintos) de un solo vistazo, mostrando a la vez tendencia central, dispersión y simetría.'
      ],
      foco:[
        'Un boxplot con la línea de la mediana descentrada dentro de la caja (más cerca de Q1 o de Q3) ya es un indicio visual de asimetría en los datos, sin necesidad de calcular nada.'
      ]
    },
    {
      t:'Cómo un gráfico puede distorsionar sin mentir en los números',
      p:[
        'La elección de la escala del eje vertical es una de las formas más comunes de distorsionar visualmente una diferencia sin alterar ningún dato: si el eje no comienza en cero, una diferencia pequeña entre dos barras puede verse dramáticamente grande, porque se está mostrando solo la porción superior de las barras. De igual forma, elegir un número inadecuado de intervalos en un histograma (muy pocos, que oculta la forma real de la distribución, o demasiados, que la vuelve ruidosa e ilegible) puede sugerir una conclusión que los datos crudos no sostienen realmente. Leer un gráfico de forma crítica implica siempre revisar los ejes, sus escalas y el tipo de gráfico elegido antes de aceptar la impresión visual que transmite a primera vista.'
      ],
      foco:[
        '*Consideración clínica*: al leer un gráfico en un artículo o una presentación, siempre revisar primero si el eje comienza en cero -es la forma más frecuente y más fácil de exagerar visualmente una diferencia real pero pequeña.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'probabilidad-basica': {
  tema:'Probabilidad básica',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:12,
  idea:'Casi todo el razonamiento diagnóstico clínico es, en el fondo, razonamiento probabilístico: qué tan probable es una enfermedad dado un síntoma, y cómo esa probabilidad cambia según qué otra información se tenga.',
  claves:['probabilidad','independencia','regla de la suma','regla del producto'],
  sigue:'distribucion-normal',
  secciones:[
    {
      t:'Independencia: cuándo un evento no cambia la probabilidad del otro',
      p:[
        'Dos eventos son independientes cuando la ocurrencia de uno no cambia en absoluto la probabilidad de que ocurra el otro. El sexo del segundo hijo de una pareja es independiente del sexo del primero: saber que el primero fue varón no cambia la probabilidad de que el segundo también lo sea. En cambio, dos eventos son dependientes cuando la ocurrencia de uno sí modifica la probabilidad del otro -por ejemplo, tener un familiar de primer grado con cierta enfermedad hereditaria sí cambia (aumenta) la probabilidad de padecerla uno mismo, así que ambos eventos no son independientes entre sí. Distinguir independencia de dependencia es el primer paso antes de aplicar cualquier regla de combinación de probabilidades, porque la regla correcta depende de esa distinción.'
      ],
      foco:[
        'Independencia = la información de un evento NO cambia la probabilidad del otro. Es un concepto sobre la RELACIÓN entre eventos, no sobre qué tan probable es cada uno por separado.'
      ]
    },
    {
      t:'Regla de la suma: la probabilidad de "esto O aquello"',
      p:[
        'La regla de la suma se usa para calcular la probabilidad de que ocurra UNO U OTRO de dos eventos. Si los eventos son mutuamente excluyentes (no pueden ocurrir ambos a la vez, como tener grupo sanguíneo A o tener grupo sanguíneo B en la misma persona), la probabilidad de que ocurra uno u otro es simplemente la suma de sus probabilidades individuales. Si los eventos NO son mutuamente excluyentes (pueden ocurrir ambos a la vez, como ser fumador o tener hipertensión, condiciones que pueden coexistir en la misma persona), hay que restar la probabilidad de que ocurran ambos simultáneamente, para no contarla dos veces en la suma.'
      ],
      foco:[
        'Eventos mutuamente excluyentes → sumar directamente las probabilidades. Eventos que pueden coexistir → sumar y luego RESTAR la probabilidad de que ocurran ambos a la vez, para no duplicar esa porción.'
      ]
    },
    {
      t:'Regla del producto: la probabilidad de "esto Y aquello"',
      p:[
        'La regla del producto se usa para calcular la probabilidad de que ocurran DOS eventos a la vez (uno Y el otro). Si los eventos son independientes, la probabilidad conjunta es simplemente el producto de sus probabilidades individuales -por ejemplo, la probabilidad de que dos pruebas diagnósticas independientes entre sí den ambas un resultado positivo en un paciente sano (dos falsos positivos seguidos) es el producto de la probabilidad de falso positivo de cada prueba, un número generalmente mucho más pequeño que cualquiera de las dos probabilidades individuales. Si los eventos son dependientes, el cálculo requiere usar la probabilidad condicional del segundo evento dado que el primero ya ocurrió, que suele ser distinta de su probabilidad "aislada".'
      ],
      foco:[
        '*Consideración clínica*: cuando dos pruebas diagnósticas son verdaderamente independientes entre sí, combinar sus resultados reduce mucho la probabilidad de un doble error (dos falsos positivos o dos falsos negativos seguidos) -es parte de la lógica detrás de pedir pruebas confirmatorias con un mecanismo distinto al de la prueba inicial.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'distribucion-normal': {
  tema:'Distribución normal',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:13,
  idea:'La distribución normal es la referencia que hace posible convertir un valor de laboratorio en un juicio clínico: "¿qué tan fuera de lo normal está este resultado?" es, casi siempre, una pregunta sobre esta curva.',
  claves:['distribución normal','campana','puntuación z','percentil','desviaciones'],
  sigue:'muestreo-tipos-muestra',
  secciones:[
    {
      t:'La forma de campana y sus propiedades',
      p:[
        'La distribución normal (o curva de Gauss, en forma de campana) es simétrica alrededor de su media, con la mayoría de los datos concentrados cerca del centro y cada vez menos datos a medida que uno se aleja hacia los extremos en cualquiera de las dos direcciones. En una distribución perfectamente normal, la media, la mediana y la moda coinciden en el mismo valor central. Muchas variables biológicas (talla, presión arterial en poblaciones sanas, ciertos parámetros de laboratorio) se aproximan razonablemente bien a esta distribución, lo que la convierte en la base de referencia más usada para establecer rangos de "normalidad" en medicina.'
      ],
      foco:[
        'En una distribución normal perfecta: media = mediana = moda, y la curva es simétrica. Cualquier desviación notable de esta igualdad sugiere que la distribución NO es normal.'
      ]
    },
    {
      t:'La regla empírica: 68-95-99.7',
      p:[
        'La regla empírica describe qué proporción de los datos cae dentro de cierto número de desviaciones estándar de la media, en una distribución normal: aproximadamente el 68% de los datos cae dentro de ±1 desviación estándar de la media, aproximadamente el 95% cae dentro de ±2 desviaciones estándar, y aproximadamente el 99.7% cae dentro de ±3 desviaciones estándar. Esta regla es la razón práctica de por qué muchos rangos de referencia de laboratorio se definen como "media ± 2 desviaciones estándar": ese rango captura, por definición estadística, aproximadamente al 95% de una población sana, dejando fuera de forma esperada (no necesariamente patológica) a un 5% de personas sanas cuyo valor simplemente cae en el extremo de la distribución normal.'
      ],
      foco:[
        '*Consideración clínica*: un valor de laboratorio "fuera del rango normal" no significa automáticamente enfermedad -el propio rango de referencia, definido como ±2 desviaciones estándar, excluye por diseño estadístico a un 5% de personas sanas.'
      ]
    },
    {
      t:'La puntuación z: convertir cualquier valor a una escala común',
      p:[
        'La puntuación z (o valor z) expresa a cuántas desviaciones estándar se encuentra un dato específico respecto a la media de su distribución, calculada como (valor - media) dividido entre la desviación estándar. Un z de +2 significa que el valor está 2 desviaciones estándar por encima de la media; un z de -1.5 significa que está 1.5 desviaciones estándar por debajo. Esta conversión permite comparar valores de variables distintas -o de la misma variable en poblaciones distintas, con medias y desviaciones estándar diferentes- en una escala común y estandarizada, y es la base para calcular percentiles: el percentil de un dato indica qué porcentaje de la población tiene un valor igual o menor que ese dato específico.'
      ],
      foco:[
        'La puntuación z convierte cualquier valor a "cuántas desviaciones estándar de la media está", permitiendo comparar variables distintas en una escala común, sin importar sus unidades originales.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'muestreo-tipos-muestra': {
  tema:'Muestreo y tipos de muestra',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:13,
  idea:'Ningún estudio puede examinar a toda una población, así que la calidad de sus conclusiones depende en gran medida de qué tan bien la muestra elegida representa a esa población -y de qué sesgos se colaron al elegirla.',
  claves:['muestra','aleatorio simple','estratificado','sesgo de selección','representatividad'],
  sigue:'relacion-variables-contingencia',
  secciones:[
    {
      t:'Muestreo probabilístico: cuando cada individuo tiene una probabilidad conocida de ser elegido',
      p:[
        'El muestreo aleatorio simple es el método más básico: cada individuo de la población tiene exactamente la misma probabilidad de ser seleccionado, como si se sortearan los nombres de una lista completa. El muestreo estratificado divide primero a la población en subgrupos (estratos) según una característica relevante -por ejemplo, por grupo etario o por sexo- y luego selecciona una muestra aleatoria dentro de cada estrato, lo que garantiza representación proporcional de cada subgrupo, algo que el muestreo aleatorio simple no asegura por sí solo (podría, por puro azar, incluir muy pocos participantes de un subgrupo pequeño pero clínicamente importante). El muestreo por conglomerados selecciona grupos naturales completos (por ejemplo, todos los pacientes de ciertos hospitales elegidos al azar) en lugar de individuos sueltos, lo cual suele ser más práctico y económico, aunque introduce cierta pérdida de precisión estadística respecto al aleatorio simple.'
      ],
      foco:[
        'Aleatorio simple = cada individuo, misma probabilidad. Estratificado = se garantiza representación proporcional de subgrupos relevantes. Por conglomerados = se seleccionan grupos naturales completos, más práctico pero menos preciso.'
      ]
    },
    {
      t:'Sesgo de selección: cuando la muestra no representa a la población',
      p:[
        'El sesgo de selección ocurre cuando el método usado para elegir la muestra hace que ciertos individuos tengan más (o menos) probabilidad de ser incluidos que otros, de una forma que distorsiona sistemáticamente los resultados. Un ejemplo clásico es el sesgo de voluntario: las personas que aceptan participar voluntariamente en un estudio suelen diferir sistemáticamente de las que no aceptan (por ejemplo, tienden a estar más preocupadas por su salud, o a tener más tiempo disponible), lo que hace que la muestra final no represente fielmente a la población general de interés. Otro ejemplo es el sesgo de sitio: reclutar participantes solo en un hospital de referencia de tercer nivel probablemente sobrerrepresenta casos más graves o complicados que los que se ven en la población general atendida en el primer nivel de atención.'
      ],
      foco:[
        '*Consideración clínica*: al leer un estudio, preguntarse siempre "¿de dónde y cómo se reclutó a los participantes?" -es la pregunta que detecta la mayoría de los sesgos de selección que pueden limitar qué tan generalizables son las conclusiones.'
      ]
    },
    {
      t:'Muestra representativa contra tamaño de muestra: no son lo mismo',
      p:[
        'Una confusión frecuente es asumir que una muestra grande es automáticamente una buena muestra. El tamaño de la muestra afecta la precisión de las estimaciones (una muestra más grande generalmente da intervalos de confianza más estrechos), pero no corrige un sesgo de selección: una muestra enorme pero sistemáticamente sesgada seguirá dando resultados distorsionados, simplemente con más "confianza" aparente en un resultado que sigue siendo incorrecto. La representatividad -que la muestra refleje fielmente la diversidad y las características relevantes de la población de interés- depende del MÉTODO de selección, no del tamaño; un método de muestreo bien diseñado con una muestra moderada puede ser más confiable que una muestra enorme reclutada de forma sesgada.'
      ],
      foco:[
        'Tamaño grande de muestra ≠ muestra representativa. El tamaño mejora la precisión; solo un buen método de selección (aleatorio, sin sesgo sistemático) garantiza representatividad. Ambos problemas son distintos y uno no corrige al otro.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'relacion-variables-contingencia': {
  tema:'Relación entre variables: tablas de contingencia',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:12,
  idea:'La tabla de contingencia es la estructura más básica y más usada en medicina para organizar la relación entre una exposición (o prueba) y un desenlace (o enfermedad), y de ella salen directamente conceptos como sensibilidad, especificidad y riesgo relativo.',
  claves:['tabla de contingencia','variable dependiente','variable independiente','frecuencia esperada'],
  sigue:'errores-medicion-validez-confiabilidad',
  secciones:[
    {
      t:'Qué es una tabla de contingencia y cómo se organiza',
      p:[
        'Una tabla de contingencia (o tabla de doble entrada) cruza dos variables categóricas, mostrando cuántas observaciones caen en cada combinación posible de categorías de ambas variables. En su forma más simple, una tabla 2x2, se organiza convencionalmente con la variable independiente (por ejemplo, la exposición a un factor de riesgo, o el resultado de una prueba diagnóstica) en las filas, y la variable dependiente (por ejemplo, la presencia o ausencia de la enfermedad, el desenlace de interés) en las columnas. Esta estructura es la base directa para calcular medidas como la sensibilidad y especificidad de una prueba diagnóstica, o el riesgo relativo y la razón de momios en un estudio de exposición y enfermedad.'
      ],
      foco:[
        'Convención: variable independiente (exposición/prueba) en las FILAS, variable dependiente (desenlace/enfermedad) en las COLUMNAS. Es la estructura de la que salen sensibilidad, especificidad, riesgo relativo y razón de momios.'
      ]
    },
    {
      t:'Variable independiente contra variable dependiente',
      p:[
        'La variable independiente es la que se considera como posible causa, predictor o exposición -en un estudio, suele ser la que el investigador mide o incluso asigna (como el tratamiento en un ensayo clínico). La variable dependiente es el desenlace o resultado que se observa, y que potencialmente depende de -o se ve influido por- la variable independiente. Esta distinción no es solo terminológica: determina cómo se plantea la pregunta de investigación y cómo se interpreta la asociación encontrada. Confundir cuál variable es cuál puede llevar a errores de interpretación, como invertir la dirección de una asociación observada.'
      ],
      foco:[
        'Independiente = la posible causa/exposición/predictor. Dependiente = el desenlace/resultado que se observa. La pregunta de investigación casi siempre se formula como "¿la [independiente] se asocia con [dependiente]?", nunca al revés.'
      ]
    },
    {
      t:'Frecuencia esperada y su papel en las pruebas de asociación',
      p:[
        'La frecuencia esperada en una celda de una tabla de contingencia es el número de observaciones que se esperaría encontrar en esa celda si NO existiera ninguna asociación real entre las dos variables (es decir, bajo el supuesto de independencia entre ellas), calculada a partir de los totales de fila y columna. Comparar la frecuencia observada (los datos reales) contra la frecuencia esperada (bajo independencia) es precisamente la lógica detrás de pruebas estadísticas como la prueba de chi-cuadrado: cuanto mayor sea la diferencia entre lo observado y lo esperado, más evidencia hay de que las dos variables sí están realmente asociadas entre sí, y no que la diferencia observada se debe simplemente al azar.'
      ],
      foco:[
        '*Consideración clínica*: la lógica general de una prueba de asociación estadística es siempre la misma -comparar lo que realmente se observó contra lo que se esperaría si no hubiera ninguna relación real entre las variables.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'errores-medicion-validez-confiabilidad': {
  tema:'Errores de medición, validez y confiabilidad',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:13,
  idea:'Un instrumento de medición puede ser muy consistente y, aun así, estar sistemáticamente equivocado -o puede acertar en promedio y, sin embargo, ser tan inconsistente que no sirve para nada en un paciente individual. Validez y confiabilidad son dos preguntas distintas, y confundirlas es un error frecuente.',
  claves:['validez','confiabilidad','error sistemático','error aleatorio','reproducibilidad'],
  sigue:'fuentes-datos-salud',
  secciones:[
    {
      t:'Validez: ¿mide lo que dice medir?',
      p:[
        'La validez de un instrumento o una prueba se refiere a qué tan bien mide realmente lo que pretende medir, sin desviarse sistemáticamente del valor verdadero. Un tensiómetro mal calibrado que siempre marca 10 mmHg por encima del valor real tiene un problema de validez: introduce un error sistemático (o sesgo), una desviación constante y predecible en una dirección determinada, que no se corrige repitiendo la medición muchas veces -al contrario, un error sistemático se repite de forma consistente en cada medición, precisamente porque es sistemático. La validez, en el contexto de una prueba diagnóstica, se relaciona directamente con conceptos como la sensibilidad y la especificidad: qué tan bien la prueba distingue realmente entre quienes tienen la enfermedad y quienes no.'
      ],
      foco:[
        'Error sistemático = sesgo constante en una dirección (por ejemplo, un instrumento mal calibrado). NO se corrige repitiendo la medición: se repite el mismo error cada vez.'
      ]
    },
    {
      t:'Confiabilidad: ¿da el mismo resultado si se repite?',
      p:[
        'La confiabilidad (o reproducibilidad, o precisión) se refiere a la consistencia de las mediciones repetidas: si se mide lo mismo varias veces en las mismas condiciones, ¿se obtienen resultados similares entre sí? Un instrumento poco confiable produce resultados muy dispersos de una medición a otra, aunque en promedio pudieran acertar al valor real -este tipo de inconsistencia se llama error aleatorio, y a diferencia del error sistemático, SÍ se puede reducir promediando varias mediciones repetidas (el promedio de muchas mediciones con error aleatorio tiende a acercarse al valor verdadero, mientras que el promedio de muchas mediciones con error sistemático simplemente confirma el mismo sesgo una y otra vez).'
      ],
      foco:[
        'Error aleatorio = dispersión inconsistente entre mediciones repetidas. SÍ se reduce promediando varias mediciones. Es el opuesto complementario del error sistemático, que NO se corrige de esa forma.'
      ]
    },
    {
      t:'Por qué un instrumento puede ser confiable pero no válido, y viceversa',
      p:[
        'Validez y confiabilidad son propiedades independientes entre sí, y un instrumento puede tener una sin la otra. Una báscula mal calibrada que siempre marca 3 kg de más es muy confiable (da resultados consistentes entre sí, siempre el mismo error) pero no es válida (no refleja el peso real). Por el contrario, un instrumento que en promedio acierta al valor verdadero pero cuyas mediciones individuales varían mucho de una vez a otra (alta dispersión, sin patrón consistente) puede considerarse válido "en promedio" pero poco confiable, porque cualquier medición individual aislada puede estar lejos del valor real. Para uso clínico en un paciente individual, ambas propiedades son necesarias: de nada sirve un instrumento válido en promedio si la medición de ESTE paciente en particular, hoy, puede estar muy alejada del valor verdadero por baja confiabilidad.'
      ],
      foco:[
        '*Consideración clínica*: validez y confiabilidad son ejes INDEPENDIENTES -se puede tener una sin la otra-, y un buen instrumento clínico necesita ambas: exactitud (validez) Y consistencia (confiabilidad).'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
},

'fuentes-datos-salud': {
  tema:'Fuentes de datos en salud',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:11,
  idea:'Toda estadística de salud pública -desde una tasa de mortalidad hasta una alerta de brote- sale de algún sistema de registro concreto, con sus propias fortalezas y sus propios puntos ciegos, que conviene conocer antes de interpretar cualquier cifra sin cuestionarla.',
  claves:['censo','registro vital','estadística vital','sistema de información en salud'],
  sigue:'corazon-y-pericardio',
  secciones:[
    {
      t:'Censo: la fuente de la población completa',
      p:[
        'El censo es un recuento que intenta incluir a la totalidad de la población de un país o territorio (no una muestra), habitualmente realizado cada varios años por la entidad estadística nacional. Proporciona el denominador poblacional que hace posible calcular tasas -por ejemplo, para calcular la tasa de mortalidad por cierta causa por cada 100,000 habitantes, se necesita conocer con razonable precisión el tamaño total de esa población, dato que aporta el censo. Entre un censo y otro, las estimaciones poblacionales se ajustan mediante proyecciones basadas en nacimientos, defunciones y migración, pero pierden precisión mientras más tiempo pasa desde el último censo real.'
      ],
      foco:[
        'El censo aporta el DENOMINADOR poblacional que hace posible calcular cualquier tasa de salud pública (mortalidad, incidencia, prevalencia por cada tantos habitantes).'
      ]
    },
    {
      t:'Registros vitales: nacimientos y defunciones',
      p:[
        'Los registros vitales son el sistema legal y administrativo de registro obligatorio de nacimientos, defunciones, matrimonios y, en algunos países, otros eventos demográficos relevantes. Son la fuente primaria de las estadísticas vitales -tasas de natalidad, mortalidad general, mortalidad infantil y materna, esperanza de vida- y su calidad depende críticamente de qué tan completo y preciso sea el registro en la práctica: en contextos con subregistro (nacimientos o defunciones que ocurren, sobre todo en zonas rurales o de difícil acceso, pero que nunca se registran formalmente), las estadísticas vitales calculadas a partir de estos datos subestiman sistemáticamente la magnitud real de esos eventos, un problema de validez de la fuente de datos, no del cálculo estadístico en sí.'
      ],
      foco:[
        '*Consideración clínica*: el subregistro de nacimientos y defunciones en zonas de difícil acceso es una causa frecuente de que las estadísticas vitales oficiales subestimen la mortalidad real, sobre todo la materna e infantil -un problema de la fuente, no de la fórmula usada para calcular la tasa.'
      ]
    },
    {
      t:'Sistemas de información en salud y vigilancia epidemiológica',
      p:[
        'Un sistema de información en salud recopila de forma continua y sistemática datos sobre la ocurrencia de enfermedades, el uso de servicios de salud y otros indicadores relevantes, generalmente a partir de los registros generados durante la atención clínica rutinaria (consultas, hospitalizaciones, notificación obligatoria de ciertas enfermedades). Es la base de la vigilancia epidemiológica, que permite detectar de forma temprana brotes o cambios inusuales en la frecuencia de una enfermedad, comparando lo observado en tiempo real contra el patrón histórico esperado. A diferencia del censo (una fotografía puntual, cada varios años) o de los registros vitales (eventos individuales específicos), un sistema de información en salud está diseñado para el monitoreo continuo y la respuesta rápida.'
      ],
      foco:[
        'Censo = fotografía poblacional puntual (cada varios años). Registros vitales = eventos individuales específicos (nacimiento, defunción). Sistema de información en salud = monitoreo CONTINUO, base de la vigilancia epidemiológica y la detección temprana de brotes.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.'
}

});
