/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 7 (lote 11)
   Termina de cubrir ESTADISTICA I por completo. Con esto,
   CUATRIMESTRE 7 QUEDA COMPLETO: las 7 materias, los 97 temas.
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'medidas-dispersion': {
  tema:'Medidas de dispersión',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:6,
  idea:'Dos grupos de pacientes pueden tener exactamente la misma presión arterial promedio y aun así ser completamente distintos entre sí: uno donde todos están cerca del promedio, y otro donde hay de todo, desde muy bajos hasta muy altos. La media sola no distingue esos dos escenarios; la dispersión sí.',
  claves:['desviación estándar','varianza','rango','coeficiente de variación'],
  sigue:'probabilidad-basica',
  secciones:[
    {
      t:'Qué tan lejos están los datos del centro',
      p:[
        'El *rango* es la medida de dispersión más simple: la diferencia entre el valor más alto y el más bajo. Es fácil de calcular pero muy sensible a un solo valor extremo, y no dice nada sobre cómo se distribuyen los datos intermedios.',
        'La *varianza* mide, en promedio, qué tan lejos está cada dato individual de la media, elevando al cuadrado esas distancias (para que las distancias negativas y positivas no se cancelen entre sí) y promediándolas. La *desviación estándar* es simplemente la raíz cuadrada de la varianza, y es la medida de dispersión más usada en la práctica porque queda en las mismas unidades que los datos originales (si los datos son mmHg de presión, la desviación estándar también se expresa en mmHg, mientras que la varianza quedaría en mmHg al cuadrado, una unidad poco intuitiva).'
      ]
    },
    {
      t:'Comparar la dispersión de dos grupos distintos',
      p:[
        'Ejemplo trabajado: dos grupos de pacientes tienen la misma presión arterial media, 130 mmHg, pero el grupo A tiene una desviación estándar de 5 mmHg (casi todos entre 120 y 140) y el grupo B tiene una desviación estándar de 20 mmHg (con pacientes desde 90 hasta 170). Aunque el "paciente promedio" sea idéntico en ambos grupos, son poblaciones clínicamente muy distintas: el grupo B es mucho más heterogéneo, y un tratamiento que funcione bien "en promedio" podría no ajustarse a muchos individuos dentro de ese grupo tan disperso.',
        'El *coeficiente de variación* (la desviación estándar dividida entre la media, expresada como porcentaje) es útil cuando se quiere comparar la dispersión relativa de dos variables medidas en unidades distintas, o con medias muy distintas entre sí, algo que la desviación estándar sola no permite comparar directamente.'
      ],
      foco:[
        'La desviación estándar y la media van siempre juntas al reportar un dato: reportar solo la media, sin su dispersión, oculta si esa media es representativa de un grupo homogéneo o de uno muy variado.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica, cap. 3.'
},

'probabilidad-basica': {
  tema:'Probabilidad básica',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:6,
  idea:'Toda la medicina basada en evidencia —desde interpretar un resultado de laboratorio hasta decidir si un tratamiento realmente funciona mejor que otro— descansa, en el fondo, sobre reglas de probabilidad relativamente simples.',
  claves:['probabilidad','independencia','regla de la suma','regla del producto'],
  sigue:'distribucion-normal',
  secciones:[
    {
      t:'Qué es la probabilidad y dos reglas básicas',
      p:[
        'La *probabilidad* de un evento es un número entre 0 (imposible) y 1 (seguro) que representa qué tan probable es que ese evento ocurra. Dos eventos son *independientes* cuando la ocurrencia de uno no afecta en nada la probabilidad del otro: por ejemplo, el sexo de un bebé no está influido por el sexo del hermano anterior, así que son eventos independientes.',
        'La *regla del producto* dice que la probabilidad de que ocurran DOS eventos independientes A LA VEZ es el producto de sus probabilidades individuales. La *regla de la suma* dice que la probabilidad de que ocurra UNO U OTRO de dos eventos mutuamente excluyentes (no pueden ocurrir ambos a la vez) es la suma de sus probabilidades individuales.'
      ]
    },
    {
      t:'Un ejemplo trabajado con ambas reglas',
      p:[
        'Si la probabilidad de que un embarazo termine en niño es aproximadamente 0.5 (y es independiente entre embarazos distintos), la probabilidad de que una pareja con dos embarazos tenga DOS niños se calcula con la regla del producto: 0.5 × 0.5 = 0.25, o 25%. La probabilidad de tener AL MENOS un niño en dos embarazos (niño-niño, niño-niña, o niña-niño) se puede calcular sumando esas probabilidades individuales (regla de la suma) para los casos que cumplen la condición, o, más fácil, restando de 1 la probabilidad del único caso que NO cumple la condición (niña-niña): 1 − 0.25 = 0.75, o 75%.',
        'Este tipo de razonamiento —combinar probabilidades independientes con la regla del producto, y probabilidades de eventos excluyentes con la regla de la suma— es exactamente la base matemática detrás de cálculos clínicos más complejos, como estimar el riesgo de que dos hijos consecutivos de una pareja portadora nazcan ambos con una enfermedad autosómica recesiva.'
      ],
      foco:[
        'Un error común es aplicar la regla del producto a eventos que NO son independientes: si dos eventos están relacionados entre sí (por ejemplo, tener una enfermedad y tener un síntoma asociado a ella), multiplicar sus probabilidades individuales sin ajustar por esa relación da un resultado incorrecto.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica, cap. 4.'
},

'distribucion-normal': {
  tema:'Distribución normal',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:7,
  idea:'La curva en forma de campana aparece una y otra vez en biología —estatura, presión arterial, niveles de una hormona en la población— porque describe lo que pasa cuando una característica está influida por muchos factores pequeños e independientes que se van sumando.',
  claves:['distribución normal','campana','puntuación z','percentil','desviaciones'],
  sigue:'muestreo-tipos-muestra',
  secciones:[
    {
      t:'La forma de campana y sus propiedades',
      p:[
        'La *distribución normal* es una distribución de probabilidad simétrica, con forma de campana, donde la mayoría de los valores se concentran cerca de la media, y la frecuencia va disminuyendo de forma simétrica a medida que uno se aleja de ella en cualquier dirección. En una distribución normal, la media, la mediana y la moda coinciden exactamente en el mismo valor central.',
        'Tiene una propiedad muy útil y práctica: aproximadamente el 68% de los valores caen dentro de una desviación estándar de la media, aproximadamente el 95% caen dentro de dos desviaciones estándar, y aproximadamente el 99.7% caen dentro de tres. Esta regla (a veces llamada regla 68-95-99.7) permite estimar rápidamente qué tan común o raro es un valor determinado, con solo conocer la media y la desviación estándar de esa variable en la población.'
      ]
    },
    {
      t:'La puntuación z: convertir cualquier valor a "cuántas desviaciones estándar de distancia"',
      p:[
        'La *puntuación z* convierte cualquier valor individual en una medida estandarizada: cuántas desviaciones estándar por encima o por debajo de la media se encuentra ese valor. Ejemplo trabajado: si la estatura media de un grupo es 170 cm con una desviación estándar de 10 cm, una persona de 190 cm tiene una puntuación z de +2 (está 2 desviaciones estándar por encima de la media); aplicando la regla del 95% ya mencionada, esa persona está entre el 2.5% más alto de ese grupo (porque el 95% central corresponde a z entre −2 y +2, dejando 2.5% en cada extremo).',
        'Esta estandarización es lo que permite comparar valores de variables distintas (o de la misma variable, medida en poblaciones distintas) en una misma escala común, y es la base para calcular *percentiles*, muy usados en pediatría para comparar el crecimiento de un niño contra la distribución poblacional de referencia para su edad.'
      ],
      foco:[
        'No toda variable biológica sigue una distribución normal: como se vio en el tema de tendencia central, variables como los días de hospitalización suelen ser asimétricas. Aplicar la regla 68-95-99.7 a una variable que no es normal da estimaciones incorrectas.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica, cap. 6.'
},

'muestreo-tipos-muestra': {
  tema:'Muestreo y tipos de muestra',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:6,
  idea:'Cómo se elige a los participantes de un estudio determina, en gran medida, si sus resultados se pueden generalizar al resto de la población o si solo describen a ese grupo particular de personas, sin que importe qué tan grande sea la muestra.',
  claves:['muestra','aleatorio simple','estratificado','sesgo de selección','representatividad'],
  sigue:'relacion-variables-contingencia',
  secciones:[
    {
      t:'Muestreo probabilístico: cada quien tiene una probabilidad conocida de entrar',
      p:[
        'El muestreo *aleatorio simple* es el más básico: cada individuo de la población tiene exactamente la misma probabilidad de ser seleccionado, como sacar nombres de una bolsa bien mezclada. El muestreo *estratificado* divide primero a la población en subgrupos (estratos) relevantes —por ejemplo, por grupo de edad o por sexo— y después toma una muestra aleatoria DENTRO de cada estrato, garantizando que cada subgrupo importante quede representado en la proporción adecuada, algo que el muestreo aleatorio simple no garantiza por sí solo (podría, por azar, incluir muy pocos participantes de un subgrupo pequeño pero relevante).'
      ]
    },
    {
      t:'Cuando la muestra no representa bien a la población: sesgo de selección',
      p:[
        'La *representatividad* de una muestra es lo que permite generalizar sus resultados al resto de la población; sin ella, ni una muestra enorme sirve para sacar conclusiones válidas sobre la población general. El *sesgo de selección* ocurre cuando el método usado para elegir a los participantes hace que la muestra sea sistemáticamente distinta de la población que se quiere estudiar, no por azar sino por cómo se reclutó.',
        'Ejemplo trabajado: un estudio sobre hábitos de ejercicio que recluta participantes únicamente en un gimnasio va a sobreestimar sistemáticamente cuánto ejercicio hace la población general, porque el lugar de reclutamiento ya filtró (sesgó) hacia personas más propensas a hacer ejercicio. No importa cuántas personas se encuesten dentro de ese gimnasio: el problema no es el tamaño de la muestra, es que el método de selección introdujo un sesgo sistemático que ningún tamaño de muestra puede corregir.'
      ],
      foco:[
        'Un tamaño de muestra grande reduce el ERROR ALEATORIO (el que se vio en el tema de error estándar), pero no corrige un SESGO sistemático de selección: son dos problemas distintos, y uno no arregla al otro.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 5.'
},

'relacion-variables-contingencia': {
  tema:'Relación entre variables: tablas de contingencia',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:6,
  idea:'Una tabla de contingencia es, probablemente, la herramienta más simple y más usada de toda la estadística en salud: organiza dos variables categóricas en filas y columnas para poder ver, de un vistazo, si parecen estar relacionadas entre sí.',
  claves:['tabla de contingencia','variable dependiente','variable independiente','frecuencia esperada'],
  sigue:'errores-medicion-validez-confiabilidad',
  secciones:[
    {
      t:'Organizar dos variables categóricas en una sola tabla',
      p:[
        'Una *tabla de contingencia* cruza dos variables categóricas, mostrando cuántas observaciones caen en cada combinación posible de categorías. Por ejemplo, una tabla que cruza "fuma" (sí/no) con "tiene bronquitis crónica" (sí/no) tiene cuatro celdas: fuma y tiene bronquitis, fuma y no tiene, no fuma y tiene, no fuma y no tiene. Con esos cuatro números ya se puede empezar a explorar si hay una relación entre ambas variables.',
        'Por convención, se suele poner la variable que se sospecha como posible causa —la *variable independiente*— en las filas o columnas, y la variable de resultado —la *variable dependiente*— en la otra dimensión, aunque esa organización es una convención de presentación, no algo que determine por sí solo si hay causalidad real (eso, como se verá en Epidemiología en 8vo, necesita mucho más que una tabla).'
      ]
    },
    {
      t:'La frecuencia esperada: el punto de comparación',
      p:[
        'La *frecuencia esperada* es lo que se esperaría ver en cada celda de la tabla SI las dos variables fueran completamente independientes entre sí (sin ninguna relación real). Comparar la frecuencia observada (los datos reales) contra la frecuencia esperada (lo que pasaría por puro azar, sin relación) es exactamente el principio detrás de la prueba de chi cuadrado, que se estudiará con más profundidad en Bioestadística en 8vo, para decidir si una diferencia observada es lo suficientemente grande como para no atribuirla solo al azar.'
      ],
      foco:[
        'Este tema es, en la práctica, el primer paso de todo el razonamiento epidemiológico que viene después: casi cualquier pregunta de "¿está X relacionado con Y?" empieza organizando los datos en una tabla de este tipo.'
      ]
    }
  ],
  ref:'Dawson y Trapp, Bioestadística Médica, cap. 12.'
},

'errores-medicion-validez-confiabilidad': {
  tema:'Errores de medición, validez y confiabilidad',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:6,
  idea:'Un instrumento de medición puede fallar de dos formas completamente distintas: dando resultados que no reflejan la realidad (poca validez) o dando resultados que cambian cada vez que se repite la medición (poca confiabilidad). Un tensiómetro descalibrado ilustra ambos problemas a la vez, y por razones distintas.',
  claves:['validez','confiabilidad','error sistemático','error aleatorio','reproducibilidad'],
  sigue:'fuentes-datos-salud',
  secciones:[
    {
      t:'Validez: ¿mide realmente lo que dice medir?',
      p:[
        'La *validez* de una medición se refiere a qué tan bien esa medición refleja el valor VERDADERO de lo que se quiere medir. Una medición con poca validez tiene un *error sistemático* (sesgo): se equivoca de forma consistente y en la misma dirección cada vez, no al azar. Ejemplo trabajado: un tensiómetro mal calibrado que siempre marca 10 mmHg por encima del valor real tiene un problema de validez —no importa cuántas veces se repita la medición en el mismo paciente, siempre estará sistemáticamente equivocado en la misma dirección.'
      ]
    },
    {
      t:'Confiabilidad: ¿da el mismo resultado si se repite?',
      p:[
        'La *confiabilidad* (o *reproducibilidad*) se refiere a qué tan consistentes son los resultados si se repite la misma medición, en las mismas condiciones, varias veces. Una medición con poca confiabilidad tiene mucho *error aleatorio*: los resultados varían de una medición a otra sin un patrón sistemático, a veces por encima del valor real, a veces por debajo. Un tensiómetro con un mecanismo defectuoso que da lecturas erráticas (a veces 120, a veces 135, a veces 115, en el mismo paciente y en el mismo minuto) tiene un problema de confiabilidad, independientemente de si en promedio se acerca o no al valor real.',
        'Estos dos problemas son independientes entre sí: un instrumento puede ser confiable pero no válido (da siempre el mismo resultado, pero ese resultado está sistemáticamente equivocado —como el tensiómetro descalibrado que consistentemente marca 10 mmHg de más), o válido pero no confiable (en promedio acierta, pero con mucha variación de una medición a otra).'
      ],
      foco:[
        'Un instrumento ideal es válido Y confiable a la vez: mide lo correcto (sin sesgo sistemático) y lo hace de forma consistente (con poco error aleatorio). Perder cualquiera de las dos propiedades compromete la utilidad de la medición, aunque por razones distintas.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 4.'
},

'fuentes-datos-salud': {
  tema:'Fuentes de datos en salud',
  bloque:'Estadística I', programa:'unirm', cuatri:7, min:5,
  idea:'Ningún estudio nace de la nada: los datos de salud que alimentan la investigación y la toma de decisiones en salud pública vienen de un puñado de fuentes bien establecidas, cada una con sus propias fortalezas y limitaciones.',
  claves:['censo','registro vital','estadística vital','sistema de información en salud'],
  sigue:null,
  secciones:[
    {
      t:'Datos que se recolectan de forma rutinaria, no para un estudio específico',
      p:[
        'Un *censo* es el conteo completo (no una muestra) de toda la población de un país, realizado periódicamente, que recoge datos demográficos básicos y sirve de denominador para calcular muchas medidas de salud poblacional (como tasas de incidencia o mortalidad, que necesitan saber cuántas personas hay en total en esa población para poder calcularse). Los *registros vitales* documentan de forma continua y obligatoria eventos vitales específicos: nacimientos, defunciones (y su causa), matrimonios. Estos registros son la fuente de las *estadísticas vitales*, como las tasas de natalidad, mortalidad general y mortalidad infantil de un país o una región.',
        'Un *sistema de información en salud* recopila de forma rutinaria datos generados por el propio sistema de salud en su funcionamiento diario: consultas, hospitalizaciones, enfermedades de notificación obligatoria, cobertura de vacunación. A diferencia de un estudio de investigación diseñado para responder una pregunta específica, estas fuentes recogen datos de forma continua y con otro propósito primario (administrativo, legal, de vigilancia), pero se pueden reutilizar después para investigación y para planificación en salud pública.'
      ]
    },
    {
      t:'Por qué esto cierra el bloque de Estadística I',
      p:[
        'Este tema conecta directamente con lo que se verá en Epidemiología en 8vo: los registros vitales y los sistemas de información en salud son, en la práctica, la materia prima con la que se calculan las medidas de frecuencia (incidencia, prevalencia) y se detectan los brotes que estudia la vigilancia epidemiológica. Sin estas fuentes de datos rutinarias, buena parte de la epidemiología descriptiva simplemente no tendría con qué trabajar.'
      ],
      foco:[
        'Una limitación real de estas fuentes: su calidad depende de qué tan completo y preciso sea el registro en la práctica (un nacimiento o una muerte no reportados no aparecen en ninguna estadística), algo especialmente relevante en zonas con sistemas de registro civil menos consolidados.'
      ]
    }
  ],
  ref:'Gordis, Epidemiología, cap. 3.'
}

});
