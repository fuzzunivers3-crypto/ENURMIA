/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 7)
   Termina de cubrir BIOESTADISTICA por completo.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'intervalos-confianza': {
  tema:'Intervalos de confianza',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:7,
  idea:'Un solo número (como "la media fue 130 mmHg") esconde la incertidumbre real de una estimación. Un intervalo de confianza la muestra explícitamente, y por eso un buen estudio siempre debería reportarlo, no solo el valor puntual.',
  claves:['intervalo de confianza','precisión','95%','amplitud'],
  sigue:'hipotesis-nula-valor-p',
  secciones:[
    {
      t:'Un rango, no un solo número',
      p:[
        'Un *intervalo de confianza* es un rango de valores, calculado a partir de una muestra, dentro del cual se espera que se encuentre el valor verdadero de la población, con un nivel de confianza determinado. El nivel más usado es el *95%*: interpretado correctamente, significa que si se repitiera el mismo estudio muchas veces, con muestras distintas del mismo tamaño, el 95% de los intervalos calculados así contendrían el valor verdadero de la población (no que hay un 95% de probabilidad de que el valor verdadero esté en ESE intervalo particular, una distinción sutil pero técnicamente importante).'
      ]
    },
    {
      t:'Qué determina qué tan ancho es el intervalo',
      p:[
        'La amplitud de un intervalo de confianza refleja directamente la *precisión* de la estimación: un intervalo estrecho indica una estimación precisa (poco margen de incertidumbre); uno ancho indica poca precisión. Esa amplitud depende, sobre todo, del tamaño de la muestra (muestras más grandes dan intervalos más estrechos, porque el error estándar, ya visto, disminuye) y de la variabilidad de los datos.',
        'Ejemplo trabajado: un estudio que estima que un fármaco reduce la presión arterial en promedio 10 mmHg, con un intervalo de confianza del 95% de 8 a 12 mmHg, es una estimación bastante precisa. Otro estudio que llega al mismo valor promedio (10 mmHg), pero con un intervalo de -2 a 22 mmHg, es una estimación mucho menos precisa —y ese intervalo tan amplio, que incluye valores negativos, sugiere además que no se puede descartar con confianza que el fármaco no tenga ningún efecto real, o incluso el efecto contrario.'
      ],
      foco:[
        'Cuando un intervalo de confianza para una diferencia entre dos grupos incluye el cero (o, para un cociente como el riesgo relativo, incluye el uno), eso generalmente indica que la diferencia observada no es estadísticamente significativa, anticipando el tema del valor p.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica, cap. 7.'
},

'hipotesis-nula-valor-p': {
  tema:'Hipótesis nula y valor p',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:8,
  idea:'El valor p es, probablemente, el número más citado y más malinterpretado de toda la literatura médica: no mide qué tan grande o importante es un efecto, mide solo qué tan compatibles son los datos observados con la idea de que ese efecto, en realidad, no existe.',
  claves:['hipótesis nula','valor p','significación','alfa','error tipo I','error tipo II'],
  sigue:'potencia-tamano-muestral',
  secciones:[
    {
      t:'La lógica de partida: asumir que no hay efecto',
      p:[
        'La *hipótesis nula* (H0) es la afirmación de partida que se pone a prueba: típicamente, que NO hay diferencia real entre los grupos comparados, o que no hay asociación real entre dos variables. Toda la lógica de la prueba estadística consiste en calcular qué tan probable sería observar los datos que realmente se obtuvieron (o algo más extremo), SI la hipótesis nula fuera cierta.',
        'El *valor p* es, precisamente, esa probabilidad: la probabilidad de observar un resultado tan extremo o más, asumiendo que la hipótesis nula es verdadera. Un valor p pequeño significa que los datos observados serían muy poco probables si realmente no hubiera efecto, lo que lleva a rechazar la hipótesis nula; un valor p grande significa que los datos son compatibles con la ausencia de efecto, y no hay motivo estadístico para rechazarla.'
      ]
    },
    {
      t:'El umbral de significación y los dos tipos de error',
      p:[
        'Por convención (no por una ley matemática absoluta), se suele usar un umbral de *alfa* = 0.05: si el valor p es menor que ese umbral, el resultado se considera "estadísticamente significativo". El *error tipo I* es rechazar la hipótesis nula cuando en realidad es verdadera (concluir que hay un efecto que en realidad no existe): la probabilidad de cometer este error es, precisamente, alfa. El *error tipo II* es lo contrario: no rechazar la hipótesis nula cuando en realidad es falsa (no detectar un efecto que sí existe).',
        'Ejemplo trabajado: un valor p de 0.03 en un ensayo clínico significa que, si el fármaco realmente no tuviera ningún efecto, un resultado como el observado (o más extremo) solo ocurriría el 3% de las veces por puro azar —lo cual se considera lo bastante improbable como para preferir la explicación de que sí hay un efecto real, aunque nunca con certeza absoluta.'
      ],
      foco:[
        'Un valor p pequeño NO significa que el efecto sea grande o clínicamente importante: solo significa que es poco probable que se deba al azar. Un efecto minúsculo, clínicamente irrelevante, puede tener un valor p muy pequeño si la muestra es enorme —el tema de "significación frente a relevancia clínica" retoma exactamente este punto más adelante.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica, cap. 8.'
},

'potencia-tamano-muestral': {
  tema:'Potencia y tamaño muestral',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:6,
  idea:'Un estudio "negativo" (que no encuentra diferencia significativa) no siempre significa que el efecto no exista: puede significar, simplemente, que el estudio era demasiado pequeño para detectarlo, aunque el efecto sí esté ahí.',
  claves:['potencia','beta','tamaño muestral','efecto'],
  sigue:'pruebas-variables-cuantitativas',
  secciones:[
    {
      t:'Potencia: la capacidad de detectar un efecto real',
      p:[
        'La *potencia* de un estudio es la probabilidad de detectar correctamente un efecto real, si ese efecto realmente existe (es decir, de rechazar correctamente la hipótesis nula cuando en efecto es falsa). Está directamente relacionada con el error tipo II ya visto: potencia = 1 − beta (la probabilidad de error tipo II). Una potencia convencionalmente aceptable suele ser del 80% o más, es decir, aceptar un riesgo de hasta un 20% de no detectar un efecto real que sí existe.'
      ]
    },
    {
      t:'Qué determina la potencia de un estudio',
      p:[
        'La potencia depende principalmente de tres factores: el *tamaño muestral* (muestras más grandes dan más potencia), el tamaño del *efecto* que se está buscando (un efecto grande es más fácil de detectar que uno pequeño, con el mismo tamaño de muestra), y la variabilidad de los datos (menos variabilidad facilita detectar un efecto real). Antes de iniciar un estudio, se puede calcular el tamaño de muestra necesario para alcanzar una potencia determinada, dado el tamaño de efecto que se considera clínicamente relevante detectar.',
        'Ejemplo trabajado: un estudio pequeño, con solo 20 pacientes por grupo, puede no encontrar una diferencia estadísticamente significativa entre dos tratamientos aunque en realidad SÍ exista una diferencia real moderada, simplemente porque el estudio no tenía suficiente potencia (tamaño de muestra insuficiente) para detectarla con confianza. Ese resultado "negativo" no prueba que los tratamientos sean iguales: prueba que el estudio no pudo demostrar la diferencia, que es algo distinto.'
      ],
      foco:[
        'Consideración clínica: antes de aceptar la conclusión de un estudio que no encontró diferencia significativa, vale la pena revisar si el estudio tenía tamaño de muestra y potencia suficientes para haber podido detectar un efecto clínicamente relevante, si es que existía.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica, cap. 9.'
},

'pruebas-variables-cuantitativas': {
  tema:'Pruebas para variables cuantitativas',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:7,
  idea:'No existe "la prueba estadística universal": la prueba correcta depende de cuántos grupos se comparan y de si las mediciones son independientes entre sí o están pareadas (como antes y después en los mismos pacientes).',
  claves:['t de Student','ANOVA','apareado','normalidad'],
  sigue:'pruebas-variables-cualitativas',
  secciones:[
    {
      t:'Comparar dos grupos: la prueba t de Student',
      p:[
        'La *t de Student* compara las medias de una variable cuantitativa entre dos grupos, para evaluar si la diferencia observada es estadísticamente significativa. Existen dos variantes según el diseño del estudio: una para grupos independientes (por ejemplo, comparar la presión arterial entre un grupo tratado con un fármaco y otro con placebo, personas distintas en cada grupo) y una para datos *apareados* (por ejemplo, comparar la presión arterial del MISMO grupo de pacientes antes y después de un tratamiento, donde cada medición "antes" está emparejada con su correspondiente "después" en la misma persona).',
        'Esta distinción entre independiente y apareado importa mucho: un diseño apareado, al comparar a cada persona consigo misma, elimina buena parte de la variabilidad debida a diferencias individuales entre personas, y suele tener más potencia para detectar un efecto real que un diseño con grupos independientes del mismo tamaño.'
      ]
    },
    {
      t:'Comparar más de dos grupos: ANOVA',
      p:[
        'Cuando se quieren comparar las medias de TRES o más grupos a la vez (por ejemplo, tres dosis distintas de un fármaco), no es correcto simplemente hacer varias pruebas t comparando cada par de grupos por separado (eso infla artificialmente la probabilidad de encontrar una diferencia significativa por puro azar, solo por hacer muchas comparaciones). El *ANOVA* (análisis de varianza) es la prueba diseñada para comparar tres o más grupos a la vez, en un solo análisis conjunto, controlando ese problema.',
        'La *normalidad* de los datos (que sigan aproximadamente una distribución normal, ya vista en Estadística I) es un supuesto que tanto la t de Student como el ANOVA asumen para ser válidos; cuando los datos se alejan mucho de la normalidad, existen pruebas alternativas (no paramétricas) diseñadas para esos casos.'
      ],
      foco:[
        'Regla práctica de decisión: ¿cuántos grupos se comparan? Dos → t de Student. Tres o más → ANOVA. ¿Los datos están apareados o son independientes? Eso determina cuál variante de la prueba usar.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica, cap. 10.'
},

'pruebas-variables-cualitativas': {
  tema:'Pruebas para variables cualitativas',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:6,
  idea:'Cuando las variables que se comparan no son números sino categorías (fuma o no fuma, mejoró o no mejoró), no tiene sentido calcular una media: hace falta otro tipo de prueba, apoyada directamente en las tablas de contingencia ya vistas en Estadística I.',
  claves:['chi cuadrado','Fisher','tabla de contingencia','proporciones'],
  sigue:'correlacion-regresion',
  secciones:[
    {
      t:'Chi cuadrado: comparar lo observado contra lo esperado',
      p:[
        'La prueba de *chi cuadrado* compara las frecuencias observadas en una *tabla de contingencia* (ya vista en Estadística I) contra las frecuencias que se esperarían si las dos variables fueran completamente independientes entre sí, sin ninguna relación. Cuanto más se alejen las frecuencias observadas de las esperadas, más evidencia hay de que las dos variables sí están relacionadas, y esa diferencia se traduce en un valor p siguiendo la misma lógica ya vista en el tema anterior.',
        'Esta prueba compara *proporciones* entre grupos (por ejemplo, la proporción de pacientes que mejoraron con un tratamiento frente a la proporción que mejoró con otro), en vez de comparar medias como hacían la t de Student o el ANOVA.'
      ]
    },
    {
      t:'Cuándo chi cuadrado no es confiable: la prueba exacta de Fisher',
      p:[
        'La prueba de chi cuadrado deja de ser confiable cuando el tamaño de la muestra es pequeño (una regla práctica frecuente es cuando alguna celda de la tabla de contingencia tiene una frecuencia esperada menor de 5): en esos casos, su aproximación matemática ya no es precisa. La prueba exacta de *Fisher* resuelve este problema calculando la probabilidad exacta (no una aproximación) de la tabla observada, y es la prueba preferida específicamente para tablas 2x2 con muestras pequeñas.'
      ],
      foco:[
        'Consideración práctica: ante una tabla de contingencia con una muestra pequeña, preferir la prueba de Fisher sobre chi cuadrado no es un capricho metodológico: es una corrección necesaria porque chi cuadrado, en esas condiciones, puede dar un valor p poco fiable.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica, cap. 12.'
},

'correlacion-regresion': {
  tema:'Correlación y regresión',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:7,
  idea:'"Correlación no implica causalidad" es la frase más repetida de toda la bioestadística, y con razón: dos variables pueden moverse juntas de forma perfectamente predecible sin que una sea la causa de la otra.',
  claves:['correlación','Pearson','regresión lineal','coeficiente','causalidad'],
  sigue:'significacion-relevancia-clinica',
  secciones:[
    {
      t:'Correlación: qué tan fuerte es la relación lineal entre dos variables',
      p:[
        'El *coeficiente* de correlación de *Pearson* mide qué tan fuerte y de qué dirección es la relación LINEAL entre dos variables cuantitativas, con un valor entre -1 y +1. Un valor cercano a +1 indica una relación positiva fuerte (cuando una variable sube, la otra también); cercano a -1 indica una relación negativa fuerte (cuando una sube, la otra baja); cercano a 0 indica poca o ninguna relación lineal.',
        'Este coeficiente solo mide relaciones LINEALES: dos variables pueden tener una relación fuerte pero curva (no lineal), y aun así dar un coeficiente de Pearson cercano a 0, porque esta prueba específicamente no está diseñada para capturar ese tipo de relación.'
      ]
    },
    {
      t:'Regresión: ir un paso más allá, prediciendo un valor',
      p:[
        'Mientras que la correlación solo describe qué tan fuerte es la relación entre dos variables, la *regresión lineal* va un paso más allá: construye una ecuación matemática que permite predecir el valor de una variable a partir del valor de otra (o de varias, en la regresión múltiple). Por ejemplo, una regresión podría estimar cuánto sube, en promedio, la presión arterial sistólica por cada año adicional de edad, en una población determinada.',
        'Y aquí vuelve la advertencia central del tema: encontrar una correlación fuerte, o incluso una buena ecuación de regresión, entre dos variables NO demuestra que una cause la otra. Ejemplo clásico: el número de ahogamientos y las ventas de helados se correlacionan fuertemente a lo largo del año, pero ninguno causa al otro —ambos están relacionados con una tercera variable, el calor del verano, que aumenta tanto las ventas de helado como la cantidad de gente que va a nadar.'
      ],
      foco:[
        'Demostrar *causalidad* real necesita mucho más que una correlación: necesita, entre otras cosas, descartar variables de confusión (como el calor en el ejemplo del helado), establecer una secuencia temporal clara, y generalmente requiere el tipo de diseño experimental controlado que se estudiará en Epidemiología.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica, cap. 11.'
},

'significacion-relevancia-clinica': {
  tema:'Significación estadística frente a relevancia clínica',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:6,
  idea:'Un estudio con cien mil participantes puede encontrar un valor p diminuto para una diferencia que, en la práctica, no cambiaría en nada la vida de un solo paciente. Distinguir esto de un efecto que sí importa clínicamente es, quizás, la habilidad más práctica de todo el bloque de estadística.',
  claves:['relevancia clínica','tamaño del efecto','intervalo','p pequeña'],
  sigue:'regresion-logistica',
  secciones:[
    {
      t:'Por qué una muestra enorme puede engañar',
      p:[
        'Como ya se insinuó en el tema del valor p, un efecto minúsculo puede volverse "estadísticamente significativo" (valor p muy pequeño) si el tamaño de muestra es lo bastante grande, simplemente porque una muestra enorme tiene la potencia para detectar hasta la diferencia más pequeña, aunque esa diferencia no tenga ningún valor práctico real.',
        'Ejemplo trabajado: un estudio con 50.000 participantes encuentra que un nuevo fármaco reduce la presión arterial en promedio 0.5 mmHg más que el fármaco estándar, con un valor p de 0.001 (altamente "significativo" en el sentido estadístico). Pero una reducción de 0.5 mmHg no tiene ninguna consecuencia clínica real para un paciente individual: no cambia su riesgo cardiovascular de forma perceptible. El resultado es estadísticamente significativo, pero clínicamente irrelevante.'
      ]
    },
    {
      t:'Cómo evaluar la relevancia clínica, más allá del valor p',
      p:[
        'La forma correcta de evaluar si un hallazgo importa en la práctica no es mirar solo el valor p: es mirar el *tamaño del efecto* (cuán grande es la diferencia en términos absolutos, y si esa magnitud tiene sentido clínico real) y el *intervalo* de confianza de esa estimación (ya visto), que muestra el rango plausible de valores reales, no solo si el efecto es "significativo" o no.',
        'Este tema conecta directamente el bloque completo de Bioestadística con la práctica real: un buen lector crítico de la literatura médica siempre pregunta dos cosas por separado —¿es esto estadísticamente significativo? y, si lo es, ¿es este efecto lo bastante grande como para importarle a un paciente real?'
      ],
      foco:[
        'Regla práctica final: ante cualquier resultado "significativo" en un estudio, la siguiente pregunta obligatoria es "¿cuán grande es el efecto, en términos que un paciente pueda sentir?", no solo "¿qué tan pequeño es el valor p?".'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 10.'
},

'regresion-logistica': {
  tema:'Regresión logística',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:6,
  idea:'La regresión lineal predice un número (como la presión arterial); pero muchas preguntas médicas importantes son de sí o no (¿desarrollará la enfermedad o no?), y para esas hace falta una herramienta distinta.',
  claves:['regresión logística','razón de momios','variable binaria','odds ratio ajustado'],
  sigue:'analisis-supervivencia',
  secciones:[
    {
      t:'Predecir una probabilidad, no un número continuo',
      p:[
        'La *regresión logística* se usa cuando la variable de resultado es *binaria* (sí/no, enfermo/sano, vivo/muerto), en vez de una variable cuantitativa continua como en la regresión lineal. En vez de predecir directamente un valor numérico, predice la PROBABILIDAD de que ocurra el evento, en función de una o varias variables independientes (como la edad, el hábito de fumar, u otros factores de riesgo).'
      ]
    },
    {
      t:'El resultado se expresa como razón de momios',
      p:[
        'El resultado de una regresión logística se expresa típicamente como una *razón de momios* (odds ratio), ya introducida en el vocabulario de medidas de asociación: un *odds ratio ajustado* mayor de 1 indica que esa variable aumenta la probabilidad del evento, manteniendo constantes (ajustadas) todas las demás variables incluidas en el modelo; menor de 1 indica que la reduce.',
        'Ejemplo trabajado: un estudio podría reportar que fumar tiene un odds ratio ajustado de 3.5 para desarrollar cierta enfermedad, "ajustado por edad, sexo e índice de masa corporal": eso significa que el efecto asociado al tabaquismo se calculó teniendo en cuenta (controlando estadísticamente) esas otras variables, para aislar mejor el efecto propio del tabaquismo, separándolo de la posible influencia de esos otros factores.'
      ],
      foco:[
        'El "ajuste" por otras variables es, en esencia, una forma estadística de intentar controlar el problema de la confusión (ya mencionado al hablar de causalidad): permite estimar el efecto de una variable de interés mientras se mantienen constantes otras variables que también podrían influir en el resultado.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica, cap. 14.'
},

'analisis-supervivencia': {
  tema:'Análisis de supervivencia',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:6,
  idea:'Cuando lo que importa no es solo SI algo ocurrió (murió o no murió) sino CUÁNDO ocurrió, y algunos pacientes salen del estudio antes de que termine sin haber tenido el evento, hace falta una herramienta estadística diseñada específicamente para ese problema.',
  claves:['Kaplan-Meier','curva de supervivencia','censura','riesgo proporcional'],
  sigue:'meta-analisis-revision-sistematica',
  secciones:[
    {
      t:'El problema de la censura',
      p:[
        'En estudios que siguen a pacientes durante un tiempo (por ejemplo, después del diagnóstico de un cáncer, para ver cuánto tiempo sobreviven), es frecuente que algunos participantes salgan del estudio antes de que termine el seguimiento, sin haber sufrido el evento de interés (todavía siguen vivos cuando termina el estudio, o se pierden del seguimiento por otra razón). A esos casos se les llama *censura*: se sabe que sobrevivieron AL MENOS hasta cierto punto, pero no se sabe qué pasó después.',
        'Ignorar simplemente a estos pacientes censurados (excluirlos del análisis) desperdiciaría información valiosa —sí aportan el dato de que sobrevivieron hasta cierto momento—, así que hacen falta métodos que los incorporen correctamente sin asumir, de forma incorrecta, que su seguimiento terminó porque murieron.'
      ]
    },
    {
      t:'La curva de Kaplan-Meier',
      p:[
        'La curva de *Kaplan-Meier* es la forma estándar de representar gráficamente la *curva de supervivencia* de un grupo a lo largo del tiempo, incorporando correctamente los datos censurados, mostrando la probabilidad estimada de seguir vivo (o libre del evento de interés) en cada punto del seguimiento. Comparar las curvas de Kaplan-Meier de dos grupos distintos (por ejemplo, dos tratamientos) es una forma visual e intuitiva de ver si un grupo sobrevive más tiempo que el otro.',
        'El modelo de *riesgo proporcional* (de Cox) es la extensión de este análisis que permite, además, ajustar por varias variables a la vez (como en la regresión logística), estimando cuánto cambia el riesgo del evento asociado a una variable específica, mientras se mantienen otras constantes.'
      ],
      foco:[
        'Consideración clínica: es exactamente este tipo de análisis el que produce las cifras de "supervivencia a 5 años" que se citan en oncología para distintos tipos y estadios de cáncer, incorporando de forma correcta a los pacientes que siguen en seguimiento sin haber fallecido todavía.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica, cap. 15.'
},

'meta-analisis-revision-sistematica': {
  tema:'Meta-análisis y revisión sistemática',
  bloque:'Bioestadística', programa:'unirm', cuatri:8, min:7,
  idea:'En la cima de la jerarquía de evidencia científica no está un solo estudio grande y bien hecho: está la combinación sistemática y rigurosa de TODOS los estudios relevantes sobre una misma pregunta, que suele dar una estimación más precisa y más confiable que cualquier estudio individual.',
  claves:['meta-análisis','revisión sistemática','heterogeneidad','forest plot'],
  sigue:null,
  secciones:[
    {
      t:'Dos pasos distintos: reunir la evidencia, y después combinarla',
      p:[
        'Una *revisión sistemática* es un proceso riguroso y explícito de buscar, evaluar críticamente y sintetizar TODA la evidencia disponible sobre una pregunta clínica específica, siguiendo un método predefinido y reproducible (a diferencia de una revisión narrativa tradicional, que puede seleccionar estudios de forma más subjetiva o incompleta). Un *meta-análisis* es un paso adicional, opcional dentro de una revisión sistemática: combina estadísticamente los resultados numéricos de varios estudios individuales similares, en un solo resultado combinado, más preciso que cualquiera de los estudios por separado (porque, en esencia, suma el tamaño de muestra efectivo de todos ellos).'
      ]
    },
    {
      t:'Heterogeneidad: cuándo NO tiene sentido combinar los estudios',
      p:[
        'No todos los estudios se pueden combinar sin más: la *heterogeneidad* mide qué tan distintos son entre sí los estudios incluidos (en su población, su metodología, o sus resultados). Una heterogeneidad alta sugiere que los estudios podrían estar midiendo cosas suficientemente distintas como para que combinarlos en un solo número promedio sea engañoso, y en esos casos hace falta investigar por qué difieren tanto, en vez de simplemente promediar sus resultados.',
        'El *forest plot* es la representación gráfica estándar de un meta-análisis: muestra el resultado (y su intervalo de confianza) de cada estudio individual como una línea horizontal, y el resultado combinado de todos ellos como un rombo al final, permitiendo ver de un vistazo tanto la estimación global como qué tanto varían entre sí los estudios individuales que la componen.'
      ],
      foco:[
        'Este tema cierra el bloque completo de Bioestadística en su punto más aplicado: el meta-análisis reúne, literalmente, todos los conceptos anteriores —intervalos de confianza, tamaño del efecto, heterogeneidad— en una sola herramienta usada constantemente para las guías clínicas basadas en evidencia.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 11.'
}

});
