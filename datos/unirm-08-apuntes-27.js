/* ============================================================
   UNIRMIA — APUNTES DEL CUATRIMESTRE 8 (lote 27)
   GENETICA MEDICA reescrita al estandar extenso. Mismas 14
   claves de objeto que ya existian (en apuntes-2.js, -6.js y
   -8.js), asi que Object.assign las sobrescribe sin romper
   "Leer el tema". La cadena `sigue` de los temas 1-10 ya estaba
   en el orden correcto -se conserva-, y la de 11-14 tambien.
   Se cierran los DOS cabos sueltos reales: 'diagnostico-
   genetico-consejo' (tema 10, sigue:null) ahora encadena hacia
   'epigenetica-basica' (tema 11), y 'genetica-cancer-hereditario'
   (tema 14, ultimo de la materia, sigue:null) ahora encadena
   hacia 'muestra-poblacion-inferencia', primer tema de
   Bioestadistica (la materia siguiente del cuatrimestre).
   ============================================================ */
window.APUNTES = Object.assign(window.APUNTES || {}, {

'estructura-adn-cromosomas': {
  tema:'Estructura del ADN y cromosomas',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:13,
  idea:'El cariotipo -la foto de los 46 cromosomas de una persona- sigue siendo, hoy en día, la primera prueba que se pide ante la sospecha de un síndrome genético, y para leerlo bien primero hay que entender cómo se empaqueta el ADN dentro de un cromosoma.',
  claves:['ADN','cromosoma','cromatina','telómero','centrómero','cariotipo'],
  sigue:'replicacion-transcripcion-traduccion',
  secciones:[
    {
      t:'De la doble hélice al cromosoma visible',
      p:[
        'El ADN es una doble hélice de nucleótidos que, para caber dentro del núcleo celular, se empaqueta en niveles sucesivos de compactación: primero se enrolla alrededor de proteínas histonas formando nucleosomas (el "collar de perlas"), luego se compacta más en la fibra de cromatina, y durante la división celular se condensa al máximo en la forma de cromosoma visible al microscopio óptico, con sus dos cromátidas hermanas unidas por el centrómero. El ser humano tiene 46 cromosomas (23 pares): 22 pares de autosomas y un par de cromosomas sexuales (XX en la mujer, XY en el hombre).'
      ],
      foco:[
        'Compactación creciente: ADN → nucleosoma (con histonas) → fibra de cromatina → cromosoma condensado (visible solo durante la división celular, no en el núcleo en reposo).'
      ]
    },
    {
      t:'Telómeros y centrómero: los extremos y el punto de anclaje',
      p:[
        'Los telómeros son secuencias repetitivas no codificantes en los extremos de cada cromosoma, que protegen al ADN de la degradación y de la fusión con otros cromosomas; se acortan progresivamente con cada división celular (porque la ADN polimerasa no puede replicar completamente el extremo final de una hebra lineal), lo que se relaciona con el envejecimiento celular replicativo -la enzima telomerasa, activa en células madre y con frecuencia reactivada en células cancerosas, puede contrarrestar este acortamiento. El centrómero es la región donde se unen las dos cromátidas hermanas y donde se ensambla el cinetocoro, la estructura que permite que los microtúbulos del huso mitótico tiren de los cromosomas durante la división celular, asegurando un reparto correcto entre las células hijas.'
      ],
      foco:[
        'Telómero = protección de los extremos, se acorta con cada división (envejecimiento replicativo). Centrómero = punto de unión de cromátidas y anclaje del huso mitótico, esencial para el reparto correcto de cromosomas.'
      ]
    },
    {
      t:'El cariotipo como primera herramienta diagnóstica',
      p:[
        'El cariotipo es el análisis visual de los 46 cromosomas de una persona, ordenados por tamaño y patrón de bandas, obtenido a partir de células en división (con frecuencia linfocitos cultivados) detenidas en metafase, cuando los cromosomas están al máximo de su condensación y por tanto son visibles individualmente. Pese a la disponibilidad de técnicas moleculares más modernas y de mayor resolución, el cariotipo sigue siendo la primera prueba solicitada ante la sospecha de una alteración cromosómica NUMÉRICA (como una trisomía) o ESTRUCTURAL grande (como una translocación visible), precisamente porque da una visión global de los 46 cromosomas a la vez, algo que otras técnicas más dirigidas no ofrecen de entrada.'
      ],
      foco:[
        '*Consideración clínica*: el cariotipo sigue siendo la prueba de primera línea ante sospecha de alteración cromosómica, porque examina los 46 cromosomas completos de una vez -otras técnicas más finas se piden después, ya dirigidas por una sospecha específica.'
      ]
    }
  ],
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.'
},

'replicacion-transcripcion-traduccion': {
  tema:'Replicación, transcripción y traducción',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:14,
  idea:'El dogma central de la biología molecular -ADN a ARN a proteína- no es solo un esquema para memorizar: cada paso tiene su propia maquinaria enzimática, y saber cuál es cuál es lo que permite entender por qué ciertos fármacos y ciertas mutaciones actúan justo donde actúan.',
  claves:['replicación','transcripción','traducción','ARN mensajero','codón','splicing'],
  sigue:'tipos-mutacion-consecuencias',
  secciones:[
    {
      t:'Replicación: copiar el ADN antes de dividirse',
      p:[
        'La replicación del ADN es semiconservativa: cada nueva doble hélice conserva una hebra original (molde) y sintetiza una hebra nueva complementaria, de modo que cada célula hija recibe una copia con una hebra "vieja" y una "nueva". La ADN polimerasa sintetiza la nueva hebra siempre en dirección 5\' a 3\', lo que obliga a que una hebra (la líder) se sintetice de forma continua y la otra (la retrasada) se sintetice de forma discontinua, en fragmentos cortos (fragmentos de Okazaki) que luego se unen mediante la ADN ligasa. Este proceso ocurre antes de cada división celular, durante la fase S del ciclo celular.'
      ],
      foco:[
        'Replicación = semiconservativa (una hebra vieja + una nueva por cada doble hélice resultante). La ADN polimerasa solo sintetiza en dirección 5\'→3\', lo que obliga a la síntesis discontinua de una de las dos hebras (fragmentos de Okazaki).'
      ]
    },
    {
      t:'Transcripción: del ADN al ARN mensajero, con edición incluida',
      p:[
        'La transcripción, catalizada por la ARN polimerasa, copia la información de un gen del ADN a una molécula de ARN mensajero (ARNm) precursor. En eucariotas, este ARNm precursor contiene tanto exones (secuencias codificantes) como intrones (secuencias no codificantes intercaladas), y debe someterse al splicing (corte y empalme), un proceso catalizado por el espliceosoma que elimina los intrones y une los exones entre sí, produciendo el ARNm maduro listo para salir del núcleo. El splicing alternativo -unir los exones en distintas combinaciones según el tejido o el momento- permite que un solo gen produzca varias proteínas distintas, una fuente importante de diversidad proteica que no requiere genes adicionales.'
      ],
      foco:[
        'El splicing elimina intrones y une exones para formar el ARNm maduro. El splicing ALTERNATIVO (combinaciones distintas de exones) permite que un solo gen codifique varias proteínas distintas -diversidad sin necesidad de más genes.'
      ]
    },
    {
      t:'Traducción: del código de tres letras a la proteína',
      p:[
        'La traducción, que ocurre en el ribosoma, lee el ARNm maduro en tripletes consecutivos (codones), cada uno de los cuales especifica un aminoácido determinado (o una señal de inicio o de fin), según el código genético. El código genético es degenerado (varios codones distintos pueden codificar el mismo aminoácido, lo que confiere cierta tolerancia a mutaciones silenciosas) pero no ambiguo (cada codón específico codifica siempre el mismo único aminoácido). El ARN de transferencia (ARNt), cada uno con un anticodón complementario a un codón específico y cargado con el aminoácido correspondiente, es el que físicamente trae cada aminoácido al ribosoma en el orden correcto dictado por la secuencia de codones del ARNm.'
      ],
      foco:[
        'Código genético degenerado (varios codones → mismo aminoácido) pero no ambiguo (cada codón → siempre el mismo aminoácido). Esta degeneración es la base de por qué algunas mutaciones puntuales son silenciosas.'
      ]
    }
  ],
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.'
},

'tipos-mutacion-consecuencias': {
  tema:'Tipos de mutación y sus consecuencias',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:14,
  idea:'No todas las mutaciones son igual de graves: el mismo tipo de cambio en el ADN -sustituir, insertar o eliminar una sola letra- puede no tener ningún efecto o puede destruir por completo la función de una proteína, según dónde caiga y cómo altere la lectura del código genético.',
  claves:['mutación','sin sentido','de cambio de sentido','corrimiento del marco','silenciosa'],
  sigue:'herencia-mendeliana-autosomica',
  secciones:[
    {
      t:'Mutaciones puntuales: sustituir una sola base',
      p:[
        'Las mutaciones puntuales sustituyen una única base del ADN por otra, y sus consecuencias dependen de si ese cambio altera o no el aminoácido codificado. Una mutación silenciosa cambia la secuencia de ADN pero, por la degeneración del código genético, sigue codificando el MISMO aminoácido, sin ningún efecto sobre la proteína resultante. Una mutación de cambio de sentido (missense) cambia el codón para que codifique un aminoácido DISTINTO, lo que puede tener un efecto que va desde insignificante (si el nuevo aminoácido es químicamente similar y no está en un sitio crítico) hasta gravemente dañino (si altera la estructura o función de una región esencial de la proteína). Una mutación sin sentido (nonsense) cambia un codón que codificaba un aminoácido por un codón de PARO prematuro, truncando la proteína antes de su longitud normal -casi siempre con pérdida grave de función, porque la proteína queda incompleta.'
      ],
      foco:[
        'Silenciosa = mismo aminoácido, sin efecto. Cambio de sentido = aminoácido distinto, efecto variable. Sin sentido = codón de paro prematuro, proteína truncada, casi siempre grave. Tres consecuencias muy distintas del mismo tipo de cambio (sustitución de una base).'
      ]
    },
    {
      t:'Mutaciones de corrimiento del marco: el efecto más devastador',
      p:[
        'Las mutaciones de corrimiento del marco de lectura (frameshift) ocurren cuando se inserta o se elimina un número de bases que NO es múltiplo de tres, desplazando el marco de lectura de todos los codones posteriores al punto de la mutación. Como el ribosoma sigue leyendo en tripletes desde ese punto en adelante, prácticamente toda la secuencia de aminoácidos posterior al sitio de la mutación queda alterada, generalmente terminando en un codón de paro prematuro en algún punto -por eso las mutaciones de corrimiento del marco suelen ser mucho más devastadoras que una simple sustitución puntual, incluso cuando afectan a un solo o unos pocos nucleótidos.'
      ],
      foco:[
        '*Consideración clínica*: inserción o deleción de un número de bases NO múltiplo de 3 = corrimiento del marco de lectura, con efecto devastador en cascada sobre toda la proteína posterior. Un número de bases SÍ múltiplo de 3 (inserción/deleción "en marco") altera menos dramáticamente, insertando o quitando aminoácidos sin desplazar el resto de la lectura.'
      ]
    }
  ],
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.'
},

'herencia-mendeliana-autosomica': {
  tema:'Herencia mendeliana: autosómica',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:14,
  idea:'Los patrones de herencia autosómica dominante y recesiva se reconocen por su forma característica en un árbol genealógico, pero dos conceptos -penetrancia y expresividad- explican por qué la genética "de manual" casi nunca se comporta tan limpiamente en la práctica real.',
  claves:['autosómico dominante','autosómico recesivo','penetrancia','expresividad','portador'],
  sigue:'herencia-x-mitocondrial',
  secciones:[
    {
      t:'Dominante contra recesivo: cuántas copias mutadas hacen falta',
      p:[
        'En la herencia autosómica dominante, basta con UNA copia mutada del gen (heterocigoto) para manifestar la enfermedad; típicamente afecta a múltiples generaciones sucesivas en el árbol genealógico, con aproximadamente 50% de riesgo de transmisión a cada hijo de un progenitor afectado. En la herencia autosómica recesiva, se necesitan DOS copias mutadas (homocigoto) para manifestar la enfermedad; típicamente "salta" generaciones, porque los portadores heterocigotos (con una sola copia mutada) no manifiestan la enfermedad, y es más frecuente en hijos de padres consanguíneos, porque comparten una mayor proporción de su genoma y por tanto mayor probabilidad de portar la misma mutación recesiva rara.'
      ],
      foco:[
        'Dominante = 1 copia mutada basta, afecta generaciones sucesivas. Recesivo = 2 copias mutadas necesarias, "salta" generaciones, más frecuente con consanguinidad (portadores no manifiestan pero pueden transmitir).'
      ]
    },
    {
      t:'Penetrancia: no todos los que tienen el genotipo manifiestan el fenotipo',
      p:[
        'La penetrancia es la proporción de personas con un genotipo determinado que efectivamente manifiestan el fenotipo (la enfermedad) asociado a ese genotipo. Una penetrancia del 100% significa que TODA persona con la mutación desarrolla la enfermedad; una penetrancia incompleta (menor al 100%) significa que algunas personas con la mutación NUNCA desarrollan la enfermedad, pese a portarla y poder transmitirla a su descendencia. Este concepto explica por qué un árbol genealógico de una enfermedad autosómica dominante con penetrancia incompleta puede parecer que "salta generaciones" -algo que, en teoría, no debería ocurrir en la herencia dominante clásica-, generando confusión diagnóstica si no se considera este fenómeno.'
      ],
      foco:[
        '*Consideración clínica*: la penetrancia incompleta puede hacer que una enfermedad autosómica dominante parezca "saltar generaciones" en el árbol genealógico, un patrón que normalmente se asociaría a herencia recesiva -no asumir el patrón de herencia solo por la apariencia superficial del árbol sin considerar la penetrancia.'
      ]
    },
    {
      t:'Expresividad: entre quienes manifiestan la enfermedad, cuán grave es',
      p:[
        'La expresividad variable, un concepto distinto de la penetrancia, se refiere a que, entre las personas que SÍ manifiestan el fenotipo (ya pasado el filtro de la penetrancia), la gravedad o las características específicas de esa manifestación pueden variar considerablemente de una persona a otra, incluso dentro de la misma familia y con la misma mutación exacta. La neurofibromatosis tipo 1 es un ejemplo clásico de expresividad variable: algunos pacientes con la misma mutación tienen manifestaciones leves (unas pocas manchas café con leche), mientras otros de la misma familia tienen manifestaciones graves (neurofibromas múltiples, tumores del sistema nervioso). Penetrancia responde "¿se manifiesta o no?"; expresividad responde "si se manifiesta, qué tan grave es" -dos preguntas distintas sobre la misma mutación.'
      ],
      foco:[
        'Penetrancia = ¿se manifiesta la enfermedad o no (sí/no)? Expresividad = entre quienes la manifiestan, ¿qué tan grave o variable es? Son dos ejes distintos e independientes de variabilidad clínica de una misma mutación.'
      ]
    }
  ],
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.'
},

'herencia-x-mitocondrial': {
  tema:'Herencia ligada al X y mitocondrial',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:14,
  idea:'Dos patrones de herencia no siguen la lógica autosómica simple: la herencia ligada al X, donde el sexo del portador determina quién manifiesta la enfermedad, y la herencia mitocondrial, donde solo la madre transmite la condición -ambas se reconocen por patrones de árbol genealógico muy característicos.',
  claves:['ligado al X','herencia mitocondrial','heteroplasmia','portadora','Lyon'],
  sigue:'lectura-arboles-genealogicos',
  secciones:[
    {
      t:'Herencia recesiva ligada al X: por qué afecta más a los hombres',
      p:[
        'En la herencia recesiva ligada al X, el gen mutado está en el cromosoma X. Como el hombre tiene un solo cromosoma X (46,XY), basta con UNA copia mutada para que manifieste la enfermedad -no tiene un segundo X que compense-. La mujer, con dos cromosomas X (46,XX), necesita que AMBAS copias estén mutadas para manifestar la enfermedad; si solo tiene una copia mutada, es portadora asintomática (o con manifestación leve, dependiendo de la inactivación del X). Este patrón explica por qué enfermedades como la hemofilia o la distrofia muscular de Duchenne afectan predominantemente a hombres, transmitidas típicamente por madres portadoras asintomáticas -un patrón de "salto" característico donde el abuelo materno afectado no transmite la enfermedad a sus hijas (que son portadoras) pero sí puede reaparecer en sus nietos varones.'
      ],
      foco:[
        'Ligado al X recesivo: el hombre (un solo X) manifiesta con una sola copia mutada; la mujer (dos X) necesita ambas copias mutadas. Por eso predomina en hombres, transmitido por madres portadoras.'
      ]
    },
    {
      t:'Lyonización: por qué las mujeres portadoras a veces tienen síntomas leves',
      p:[
        'La hipótesis de Lyon (inactivación del cromosoma X) establece que, en cada célula de una mujer, uno de los dos cromosomas X se inactiva aleatoriamente y de forma permanente al inicio del desarrollo embrionario, para compensar la dosis génica entre hombres (un X) y mujeres (dos X). El resultado es que toda mujer es, en realidad, un mosaico celular: en unas células está activo el X materno, en otras el X paterno. Una mujer portadora de una mutación ligada al X recesiva puede, por simple azar en el patrón de inactivación, tener una proporción desfavorablemente alta de células con el X normal inactivado (y por tanto el X mutado activo en la mayoría de sus células), manifestando síntomas leves o parciales de una enfermedad que "en teoría" solo debería afectar a los hombres -un fenómeno llamado lyonización desfavorable.'
      ],
      foco:[
        '*Consideración clínica*: una mujer "portadora" con síntomas leves de una enfermedad ligada al X recesiva no es necesariamente un error diagnóstico -puede explicarse por lyonización desfavorable (inactivación aleatoria del X sesgada hacia el cromosoma normal).'
      ]
    },
    {
      t:'Herencia mitocondrial: solo la madre transmite',
      p:[
        'El ADN mitocondrial se hereda exclusivamente por vía MATERNA, porque el óvulo aporta prácticamente todas las mitocondrias del cigoto, mientras que las mitocondrias del espermatozoide se eliminan selectivamente tras la fecundación. Por eso, en un árbol genealógico, una enfermedad mitocondrial afecta a TODOS los hijos de una madre afectada (de ambos sexos), pero un padre afectado NUNCA la transmite a ninguno de sus hijos -un patrón de herencia inconfundible y distinto de todos los patrones mendelianos clásicos. Como cada célula tiene múltiples copias de ADN mitocondrial (y puede haber una mezcla de mitocondrias normales y mutadas dentro de la misma célula, un fenómeno llamado heteroplasmia), la gravedad de una enfermedad mitocondrial puede variar considerablemente según la proporción de mitocondrias mutadas heredadas y presentes en cada tejido.'
      ],
      foco:[
        'Herencia mitocondrial = exclusivamente materna: madre afectada transmite a TODOS sus hijos; padre afectado NUNCA transmite. La heteroplasmia (mezcla de mitocondrias normales y mutadas) explica la variabilidad de gravedad entre individuos e incluso entre tejidos de la misma persona.'
      ]
    }
  ],
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.'
},

'lectura-arboles-genealogicos': {
  tema:'Lectura de árboles genealógicos',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:13,
  idea:'Un árbol genealogico bien construido convierte varias generaciones de una familia en un patrón visual reconocible, y aprender a "leerlo" -en vez de solo dibujarlo- es lo que permite deducir el patrón de herencia más probable con solo mirarlo.',
  claves:['árbol genealógico','pedigrí','consanguinidad','probando','riesgo de recurrencia'],
  sigue:'alteraciones-cromosomicas-numericas',
  secciones:[
    {
      t:'Elementos básicos y el probando',
      p:[
        'El árbol genealógico (o pedigrí) usa una simbología estandarizada: cuadrados para hombres, círculos para mujeres, símbolos rellenos para individuos afectados, líneas horizontales para uniones de pareja (dobles si son consanguíneas), y líneas verticales descendentes hacia la progenie. El probando (o caso índice) es la persona a través de la cual la familia llegó a la atención médica o genética -se marca con una flecha en el árbol- y es el punto de partida para reconstruir el resto del árbol familiar, indagando sistemáticamente sobre la salud de familiares de primer, segundo y tercer grado.'
      ],
      foco:[
        'El probando es el punto de entrada del árbol (la persona que motivó la consulta), no necesariamente el más gravemente afectado ni el primer caso cronológico de la familia.'
      ]
    },
    {
      t:'Patrones visuales característicos de cada tipo de herencia',
      p:[
        'Cada patrón de herencia deja una "firma" visual reconocible en el árbol: la autosómica dominante muestra afectados en generaciones sucesivas, con proporción similar entre hombres y mujeres afectados, y transmisión de hombre a hombre posible (lo que descarta herencia ligada al X). La autosómica recesiva muestra afectados que "saltan" generaciones, con frecuencia hijos de padres sanos (portadores) y mayor probabilidad si hay consanguinidad en el árbol. La ligada al X recesiva muestra predominio marcado de hombres afectados, transmitida por madres portadoras, sin transmisión de hombre a hombre (porque el padre le da su Y, no su X, a un hijo varón). La mitocondrial muestra transmisión exclusiva por la madre afectada a todos sus hijos, sin transmisión paterna. Reconocer estos patrones visuales es más rápido y más fiable que intentar memorizar reglas abstractas.'
      ],
      foco:[
        '*Consideración clínica*: la ausencia de transmisión hombre a hombre en un árbol es la clave para sospechar herencia ligada al X (en vez de autosómica), porque un padre siempre transmite su Y (no su X) a un hijo varón.'
      ]
    },
    {
      t:'Riesgo de recurrencia: la pregunta que la familia realmente quiere responder',
      p:[
        'El riesgo de recurrencia es la probabilidad de que un futuro hijo de una pareja determinada herede una enfermedad genética específica, calculada a partir del patrón de herencia identificado y del genotipo conocido o inferido de los progenitores. Para una enfermedad autosómica recesiva con ambos padres portadores conocidos, el riesgo es 25% por embarazo (independientemente de los embarazos previos, porque cada concepción es un evento independiente -un error frecuente es pensar que, tras tener un hijo afectado, "toca" tener uno sano, cuando en realidad el riesgo sigue siendo el mismo 25% en cada embarazo nuevo). Para una enfermedad autosómica dominante con un progenitor afectado (heterocigoto) y el otro sano, el riesgo es 50% por embarazo. Comunicar correctamente este riesgo, sin el sesgo de pensar que embarazos pasados "cuentan" para el próximo, es una de las tareas centrales del consejo genético.'
      ],
      foco:[
        'El riesgo de recurrencia es el MISMO en cada embarazo nuevo, independiente de los resultados de embarazos anteriores -la falacia del jugador aplicada a genética, un error de comunicación frecuente que el consejo genético debe corregir explícitamente.'
      ]
    }
  ],
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.'
},

'alteraciones-cromosomicas-numericas': {
  tema:'Alteraciones cromosómicas numéricas',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:14,
  idea:'Un solo error en el reparto de cromosomas durante la meiosis -la no disyunción- es la causa de todas las trisomías y monosomías clínicamente relevantes, y su probabilidad aumenta de forma muy marcada con la edad materna.',
  claves:['trisomía','monosomía','no disyunción','Down','Turner','Klinefelter'],
  sigue:'alteraciones-estructurales-mosaicismo',
  secciones:[
    {
      t:'No disyunción: el mecanismo común detrás de trisomías y monosomías',
      p:[
        'La no disyunción es el fallo en la separación correcta de los cromosomas homólogos (en meiosis I) o de las cromátidas hermanas (en meiosis II) durante la formación de los gametos, produciendo gametos con un cromosoma de más o de menos. Cuando ese gameto anormal se fecunda, el cigoto resultante tiene una trisomía (tres copias de un cromosoma, si el gameto tenía uno de más) o una monosomía (una sola copia, si el gameto tenía uno de menos). Este es el mecanismo detrás de prácticamente todas las alteraciones cromosómicas numéricas clínicamente relevantes, y su frecuencia aumenta marcadamente con la edad materna avanzada, porque los ovocitos permanecen detenidos en meiosis I durante décadas (ya visto en Embriología), y ese tiempo prolongado aumenta el riesgo de errores en la maquinaria de segregación cromosómica.'
      ],
      foco:[
        'La no disyunción es el mecanismo común de todas las trisomías y monosomías. Su riesgo aumenta con la edad materna, por el tiempo prolongado que el ovocito permanece detenido en meiosis I antes de completarla.'
      ]
    },
    {
      t:'Las tres trisomías autosómicas viables más frecuentes',
      p:[
        'El síndrome de Down (trisomía 21) es la trisomía autosómica más frecuente y compatible con una supervivencia prolongada, con discapacidad intelectual, rasgos faciales característicos, hipotonía y mayor riesgo de cardiopatía congénita (especialmente defectos del canal auriculoventricular) y de leucemia. El síndrome de Edwards (trisomía 18) y el síndrome de Patau (trisomía 13) son mucho más graves, con múltiples malformaciones congénitas mayores y una supervivencia habitualmente muy limitada tras el nacimiento (la mayoría no sobrevive más allá del primer año). El patrón general es claro: cuanto MÁS PEQUEÑO es el cromosoma extra (menos material genético de más), MEJOR tolerada suele ser la trisomía -el cromosoma 21 es de los más pequeños del genoma humano, lo que en parte explica por qué su trisomía es compatible con la vida cuando trisomías de cromosomas más grandes no lo son.'
      ],
      foco:[
        'A menor tamaño del cromosoma extra, mejor tolerancia de la trisomía: 21 (pequeño, más viable) > 18 y 13 (más grandes, mucho más graves). El tamaño del cromosoma extra predice, en gran medida, la gravedad clínica.'
      ]
    },
    {
      t:'Alteraciones numéricas de los cromosomas sexuales',
      p:[
        'El síndrome de Turner (45,X -monosomía del cromosoma X, sin par-) afecta solo a mujeres, con talla baja, disgenesia gonadal (ovarios no funcionales, con infertilidad e insuficiencia hormonal), y a veces cardiopatía congénita (coartación aórtica) y linfedema de manos y pies al nacer. El síndrome de Klinefelter (47,XXY -un cromosoma X de más en un varón-) afecta a hombres, con hipogonadismo, infertilidad, talla alta y con frecuencia ginecomastia. A diferencia de las trisomías autosómicas, las alteraciones numéricas de los cromosomas sexuales suelen ser compatibles con una supervivencia normal, porque el mecanismo de inactivación del X (lyonización) "amortigua" en parte el efecto de tener un número anómalo de cromosomas X -un cromosoma X de más (como en Klinefelter) simplemente se inactiva igual que ocurre normalmente con uno de los dos X en toda mujer.'
      ],
      foco:[
        '*Consideración clínica*: las alteraciones numéricas de cromosomas SEXUALES son mucho mejor toleradas que las de autosomas, precisamente porque el mecanismo de inactivación del X (lyonización) amortigua el efecto de tener X de más o de menos -un mecanismo que no existe para los autosomas.'
      ]
    }
  ],
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.'
},

'alteraciones-estructurales-mosaicismo': {
  tema:'Alteraciones estructurales y mosaicismo',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:13,
  idea:'No todas las alteraciones cromosómicas cambian el NÚMERO de cromosomas: algunas reorganizan el material genético sin perder ni ganar nada (equilibradas, sin efecto clínico en el portador) y otras sí pierden o ganan fragmentos (desequilibradas, con consecuencias clínicas), una distinción que determina si el portador está sano o afectado.',
  claves:['translocación','deleción','inversión','mosaicismo','Robertsoniana'],
  sigue:'herencia-multifactorial-farmacogenetica',
  secciones:[
    {
      t:'Translocaciones equilibradas contra desequilibradas',
      p:[
        'Una translocación es el intercambio de material genético entre dos cromosomas no homólogos. Si el intercambio es EQUILIBRADO (no se pierde ni se gana material genético, solo se reorganiza), el portador es típicamente sano, porque tiene toda la información genética necesaria, aunque reorganizada -el riesgo real está en su descendencia, porque durante la meiosis esos cromosomas reorganizados pueden segregar de forma que un gameto reciba una combinación DESEQUILIBRADA (con pérdida o ganancia real de material), produciendo un embrión con anomalías, con frecuencia incompatibles con un embarazo a término. La translocación Robertsoniana, un tipo particular donde dos cromosomas acrocéntricos (con el centrómero muy cerca de un extremo, como los cromosomas 13, 14, 15, 21 y 22) se fusionan por sus centrómeros, es clínicamente relevante porque es la causa de una minoría pero importante de los casos de síndrome de Down -en estos casos, a diferencia de la trisomía 21 clásica por no disyunción, el riesgo de recurrencia en futuros embarazos es mucho mayor, porque depende de si uno de los padres es portador equilibrado de la translocación.'
      ],
      foco:[
        'Translocación equilibrada = portador sano, pero riesgo real transferido a la descendencia (gametos desequilibrados). La translocación Robertsoniana explica algunos casos de Down con RIESGO DE RECURRENCIA mucho mayor que la trisomía 21 clásica por no disyunción -por eso importa distinguir el mecanismo.'
      ]
    },
    {
      t:'Deleciones e inversiones: perder material o solo reordenarlo',
      p:[
        'Una deleción es la pérdida de un fragmento de un cromosoma, que SIEMPRE tiene consecuencias clínicas (porque se pierde material genético real, con los genes que contenía), con la gravedad dependiendo del tamaño del fragmento perdido y de qué genes contenía. Una inversión es el reordenamiento de un fragmento cromosómico que se invierte 180 grados dentro del mismo cromosoma, sin pérdida ni ganancia de material -como la translocación equilibrada, el portador suele ser sano, pero el riesgo recae en la descendencia, porque durante la meiosis un cromosoma con una inversión puede formar bucles y producir gametos con duplicaciones y deleciones si el punto de entrecruzamiento cae dentro de la región invertida.'
      ],
      foco:[
        'Deleción = pérdida real de material, siempre con consecuencias clínicas. Inversión = reordenamiento sin pérdida ni ganancia, portador típicamente sano pero con riesgo reproductivo (igual que la translocación equilibrada).'
      ]
    },
    {
      t:'Mosaicismo: dos (o más) líneas celulares distintas en la misma persona',
      p:[
        'El mosaicismo cromosómico ocurre cuando una persona tiene dos o más líneas celulares con constituciones cromosómicas distintas, originadas por un error mitótico que ocurre DESPUÉS de la fecundación (a diferencia de la no disyunción meiótica, que afecta a todas las células del organismo por igual desde el principio). La gravedad clínica del mosaicismo depende de la proporción relativa de células afectadas y de en qué tejidos predomina esa línea celular anormal -un mosaicismo con una proporción baja de células trisómicas puede producir un fenotipo mucho más leve que la trisomía completa clásica (por ejemplo, algunos casos de mosaicismo del síndrome de Down tienen un fenotipo más leve que la trisomía 21 completa en todas las células).'
      ],
      foco:[
        '*Consideración clínica*: el mosaicismo se origina POR ERROR MITÓTICO POSTERIOR a la fecundación (no meiótico), y su gravedad clínica depende de la proporción y distribución tisular de la línea celular anormal -puede dar fenotipos más leves que la alteración completa equivalente.'
      ]
    }
  ],
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.'
},

'herencia-multifactorial-farmacogenetica': {
  tema:'Herencia multifactorial y farmacogenética',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:12,
  idea:'La mayoría de las enfermedades comunes -diabetes, hipertensión, cardiopatía- no siguen un patrón mendeliano simple de un solo gen: resultan de la combinación de muchos genes de efecto pequeño más factores ambientales, y ese modelo explica por qué el riesgo familiar existe pero nunca es tan predecible como en una enfermedad monogénica.',
  claves:['multifactorial','umbral','heredabilidad','farmacogenética'],
  sigue:'diagnostico-genetico-consejo',
  secciones:[
    {
      t:'El modelo de umbral en la herencia multifactorial',
      p:[
        'Las enfermedades multifactoriales (como el labio hendido no sindrómico, la diabetes tipo 2, la hipertensión esencial, o muchas cardiopatías congénitas comunes) resultan de la combinación de múltiples genes de efecto pequeño (cada uno aportando una pequeña contribución al riesgo, sin ser suficiente por sí solo) más factores ambientales. El modelo de umbral propone que existe una susceptibilidad subyacente continua (distribuida en la población de forma similar a una campana), y que la enfermedad se manifiesta solo cuando esa susceptibilidad acumulada supera un umbral determinado. A diferencia de la herencia mendeliana, donde el riesgo de recurrencia es una fracción fija y precisa (25%, 50%), el riesgo de recurrencia en la herencia multifactorial es empírico (basado en la observación estadística de familias reales) y aumenta con el número de familiares afectados y con la gravedad de la presentación en el caso índice, pero nunca alcanza las fracciones limpias de la herencia mendeliana.'
      ],
      foco:[
        'Herencia multifactorial = muchos genes de efecto pequeño + ambiente, con un umbral de susceptibilidad acumulada. El riesgo de recurrencia es EMPÍRICO (basado en observación estadística), no una fracción fija como en la herencia mendeliana (25%, 50%).'
      ]
    },
    {
      t:'Heredabilidad: cuánto del riesgo se explica por genes, en una población dada',
      p:[
        'La heredabilidad es la proporción de la variabilidad de un rasgo en una POBLACIÓN determinada que se explica por factores genéticos (en contraste con factores ambientales). Es un concepto frecuentemente malinterpretado: una heredabilidad alta NO significa que el rasgo sea "principalmente genético" en un sentido determinista absoluto, ni que no pueda modificarse con cambios ambientales -es una medida estadística poblacional, específica del contexto ambiental en que se midió, que puede cambiar si el ambiente de esa población cambia significativamente (por ejemplo, la heredabilidad de la estatura puede ser alta en una población con nutrición uniforme, pero cambiaría si esa población tuviera una nutrición muy desigual, donde el ambiente pasaría a explicar más variabilidad).'
      ],
      foco:[
        'La heredabilidad es una medida POBLACIONAL y contextual, no una propiedad fija e inmutable del rasgo ni un enunciado sobre el destino genético de un individuo particular.'
      ]
    },
    {
      t:'Farmacogenética: variantes genéticas que cambian la respuesta a fármacos',
      p:[
        'La farmacogenética estudia cómo las variantes genéticas de una persona alteran su respuesta a fármacos específicos, tanto en eficacia como en seguridad. El ejemplo clásico son los polimorfismos del citocromo P450 (como el CYP2D6), que metaboliza numerosos fármacos: los metabolizadores lentos (con actividad enzimática reducida por variantes genéticas) acumulan concentraciones más altas de un fármaco dado, con mayor riesgo de toxicidad a dosis estándar; los metabolizadores ultrarrápidos, en cambio, eliminan el fármaco tan rápido que las dosis habituales pueden resultar ineficaces. Este campo es la base de la medicina personalizada, donde ciertos fármacos ya se prescriben con pruebas genéticas previas para ajustar la dosis según el genotipo metabolizador del paciente.'
      ],
      foco:[
        '*Consideración clínica*: metabolizador LENTO de un fármaco (por variante genética) = riesgo de toxicidad a dosis estándar. Metabolizador ULTRARRÁPIDO = riesgo de ineficacia a dosis estándar. La farmacogenética permite anticipar ambos escenarios antes de prescribir.'
      ]
    }
  ],
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.'
},

'diagnostico-genetico-consejo': {
  tema:'Diagnóstico genético y consejo',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:13,
  idea:'Existe una jerarquía de técnicas diagnósticas genéticas, cada una respondiendo una pregunta de resolución distinta -desde ver los 46 cromosomas completos hasta leer una sola letra del ADN-, y elegir la técnica equivocada para la pregunta clínica es tan problemático como no pedir ninguna.',
  claves:['diagnóstico prenatal','cariotipo','FISH','consejo genético','cribado'],
  sigue:'epigenetica-basica',
  secciones:[
    {
      t:'La jerarquía de resolución de las técnicas diagnósticas genéticas',
      p:[
        'El cariotipo (ya visto) detecta alteraciones cromosómicas grandes, visibles al microscopio: trisomías, monosomías, translocaciones grandes. La técnica de FISH (hibridación in situ fluorescente) usa sondas fluorescentes específicas para detectar la presencia, ausencia o número de copias de una región cromosómica CONCRETA y conocida de antemano -es más rápida que el cariotipo completo mostrando resultado en horas, pero solo responde a la pregunta específica para la que se diseñó la sonda, no da una visión global como el cariotipo. Los microarreglos (array-CGH) detectan deleciones y duplicaciones mucho más pequeñas que las visibles en un cariotipo convencional, en todo el genoma a la vez, aunque no detectan translocaciones equilibradas (porque no hay pérdida ni ganancia neta de material que el array pueda detectar). La secuenciación (desde genes específicos hasta el exoma o genoma completos) detecta cambios a nivel de una sola base, la resolución más fina de todas.'
      ],
      foco:[
        'De menor a mayor resolución: cariotipo (grande, visión global) → FISH (específico, dirigido, rápido) → microarreglos (deleciones/duplicaciones pequeñas, todo el genoma, pero ciego a translocaciones equilibradas) → secuenciación (una sola base, la más fina).'
      ]
    },
    {
      t:'Cribado contra diagnóstico prenatal: dos preguntas distintas',
      p:[
        'El cribado prenatal (como el cribado combinado del primer trimestre o el ADN fetal libre en sangre materna) estima la PROBABILIDAD de que el feto tenga una alteración cromosómica específica, sin dar un diagnóstico definitivo -un resultado de "alto riesgo" en el cribado no confirma la enfermedad, requiere una prueba diagnóstica para confirmarla. El diagnóstico prenatal propiamente dicho (biopsia de vellosidades coriónicas, ya vista en Embriología, o amniocentesis) obtiene material genético fetal directo para análisis cromosómico o molecular definitivo, con un riesgo pequeño pero real de complicación del embarazo (como pérdida gestacional), a diferencia del cribado, que no invade la cavidad uterina ni conlleva ese riesgo. Confundir un resultado de cribado de alto riesgo con un diagnóstico confirmado es un error de comunicación clínica grave y, lamentablemente, frecuente.'
      ],
      foco:[
        '*Consideración clínica*: un cribado de "alto riesgo" NUNCA es un diagnóstico -es una probabilidad que debe confirmarse (o descartarse) con una prueba diagnóstica invasiva. Comunicar esta distinción con claridad a la familia es una responsabilidad central del consejo genético.'
      ]
    },
    {
      t:'Consejo genético: informar sin dirigir la decisión',
      p:[
        'El consejo genético es el proceso de comunicar a una persona o familia información sobre el riesgo, el patrón de herencia, las implicaciones y las opciones disponibles frente a una condición genética, con un principio ético central: la no directividad -el profesional informa con la mayor claridad y neutralidad posibles, pero la decisión final (someterse o no a una prueba, continuar o no un embarazo, etc.) corresponde exclusivamente a la persona o familia, sin que el profesional imponga su propia valoración o preferencia. Este principio distingue al consejo genético moderno de enfoques históricos más directivos (y éticamente problemáticos) del pasado, y refleja el respeto a la autonomía de la persona frente a decisiones profundamente personales sobre su propia vida reproductiva y su salud.'
      ],
      foco:[
        'El principio de no directividad es central en el consejo genético: informar con claridad y neutralidad, sin imponer la decisión final, que corresponde exclusivamente a la persona o familia.'
      ]
    }
  ],
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.'
},

'epigenetica-basica': {
  tema:'Epigenética básica',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:12,
  idea:'La epigenética estudia cómo se regula la expresión de un gen SIN cambiar la secuencia de ADN subyacente -la diferencia entre tener un gen y que ese gen esté "encendido" o "apagado" en una célula determinada.',
  claves:['metilación del ADN','acetilación de histonas','herencia epigenética','expresión génica'],
  sigue:'enfermedades-expansion-repeticiones',
  secciones:[
    {
      t:'Metilación del ADN y acetilación de histonas: dos mecanismos, direcciones opuestas',
      p:[
        'La metilación del ADN añade un grupo metilo, típicamente a citosinas en regiones ricas en dinucleótidos CG (islas CpG), con frecuencia localizadas en regiones promotoras de genes. La metilación de un promotor generalmente SILENCIA la expresión del gen correspondiente, al dificultar la unión de la maquinaria de transcripción. La acetilación de histonas añade grupos acetilo a las proteínas histonas alrededor de las cuales se enrolla el ADN, relajando la estructura de la cromatina (haciéndola menos compacta) y facilitando el acceso de la maquinaria de transcripción -generalmente ACTIVANDO la expresión génica, el efecto contrario a la metilación del ADN. Ambos mecanismos modifican la expresión génica SIN alterar en absoluto la secuencia de nucleótidos del ADN, la definición misma de un cambio epigenético (en contraste con una mutación, que sí cambia la secuencia).'
      ],
      foco:[
        'Metilación del ADN (en promotores) = típicamente SILENCIA el gen. Acetilación de histonas = típicamente ACTIVA la expresión génica. Direcciones opuestas, pero ambos son cambios epigenéticos: alteran la expresión sin cambiar la secuencia de ADN.'
      ]
    },
    {
      t:'Por qué la epigenética explica más que la sola secuencia de ADN',
      p:[
        'Todas las células de una persona comparten exactamente la misma secuencia de ADN, y sin embargo una neurona y un hepatocito son células radicalmente distintas en forma y función -esa diferencia se explica precisamente por patrones epigenéticos distintos, que determinan qué genes están "encendidos" y cuáles "apagados" en cada tipo celular, pese a que todos tienen acceso al mismo genoma completo. Los patrones epigenéticos también pueden modificarse por factores ambientales a lo largo de la vida (dieta, exposición a tóxicos, estrés), y en algunos casos ciertos patrones epigenéticos pueden transmitirse a la descendencia (herencia epigenética transgeneracional), un área de investigación activa que sugiere que la experiencia ambiental de una generación puede, en cierta medida, influir en la expresión génica de las siguientes, sin cambiar la secuencia de ADN heredada.'
      ],
      foco:[
        '*Consideración clínica*: la diferenciación celular (por qué una neurona y un hepatocito son tan distintos con el mismo ADN) es, en esencia, un fenómeno epigenético -distintos patrones de qué genes están activos, no distintas secuencias de ADN.'
      ]
    }
  ],
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.'
},

'enfermedades-expansion-repeticiones': {
  tema:'Enfermedades por expansión de repeticiones',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:12,
  idea:'Un grupo de enfermedades genéticas no se debe a una mutación puntual sino a que una secuencia corta de ADN se repite un número anormal de veces -y ese número tiende a crecer de una generación a la siguiente, con consecuencias clínicas cada vez más tempranas y graves.',
  claves:['tripletes repetidos','Huntington','X frágil','anticipación génica'],
  sigue:'impronta-genomica',
  secciones:[
    {
      t:'Tripletes repetidos: cuando el número de copias importa más que la mutación en sí',
      p:[
        'Varias enfermedades genéticas se deben a la expansión anormal de una secuencia corta de nucleótidos (típicamente un triplete, como CAG o CGG) que normalmente se repite un número limitado de veces dentro o cerca de un gen específico. La enfermedad de Huntington (repetición CAG en el gen HTT, con herencia autosómica dominante) causa degeneración neurológica progresiva (movimientos coreicos, deterioro cognitivo, cambios psiquiátricos) de inicio típicamente en la edad adulta media. El síndrome del X frágil (repetición CGG en el gen FMR1, ligado al X) es la causa hereditaria más frecuente de discapacidad intelectual, con rasgos faciales característicos y, en algunos varones portadores de premutaciones, riesgo de un síndrome de temblor-ataxia de aparición tardía. En ambos casos, existe un umbral de número de repeticiones por debajo del cual la persona no está afectada (aunque puede tener una "premutación" con riesgo de expandirse en la siguiente generación) y por encima del cual sí se manifiesta la enfermedad.'
      ],
      foco:[
        'Huntington = repetición CAG, autosómica dominante, degeneración neurológica de inicio adulto. X frágil = repetición CGG, ligado al X, causa hereditaria más frecuente de discapacidad intelectual. Ambas dependen de un UMBRAL de número de repeticiones.'
      ]
    },
    {
      t:'Anticipación génica: por qué la enfermedad empeora en cada generación',
      p:[
        'La anticipación génica es el fenómeno por el cual, en las enfermedades por expansión de repeticiones, el número de repeticiones tiende a AUMENTAR de una generación a la siguiente (durante la formación de los gametos, donde la maquinaria de replicación es particularmente propensa a "resbalar" y añadir copias extra en estas secuencias repetitivas inestables), lo que se traduce clínicamente en una enfermedad que aparece a una edad cada vez más temprana y con mayor gravedad en generaciones sucesivas de la misma familia. Este fenómeno es clínicamente relevante para el consejo genético: un progenitor con una premutación asintomática (con un número de repeticiones por debajo del umbral de enfermedad) puede tener descendencia con la mutación completa y sintomática, porque el número de repeticiones se expandió durante la transmisión.'
      ],
      foco:[
        '*Consideración clínica*: la anticipación génica explica por qué un abuelo con síntomas leves y de inicio tardío puede tener un nieto con la misma enfermedad, pero de inicio mucho más temprano y más grave -el número de repeticiones creció en cada transmisión generacional.'
      ]
    }
  ],
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.'
},

'impronta-genomica': {
  tema:'Impronta genómica',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:12,
  idea:'Para un pequeño grupo de genes, no basta con heredar una copia funcional del padre o de la madre: importa específicamente DE CUÁL de los dos progenitores viene esa copia, porque el otro alelo está silenciado por impronta -y perder la copia "correcta" produce dos síndromes distintos según cuál progenitor sea.',
  claves:['impronta genómica','disomía uniparental','Prader-Willi','Angelman'],
  sigue:'genetica-cancer-hereditario',
  secciones:[
    {
      t:'Qué es la impronta genómica',
      p:[
        'La impronta genómica es un fenómeno epigenético (por metilación del ADN, ya visto en el tema anterior) por el cual la expresión de ciertos genes depende de cuál progenitor los transmitió: algunos genes improntados solo se expresan desde la copia HEREDADA DEL PADRE (el alelo materno está silenciado), y otros solo se expresan desde la copia HEREDADA DE LA MADRE (el alelo paterno está silenciado). Es una excepción notable a la regla general de que ambos alelos (materno y paterno) de la mayoría de los genes se expresan de forma equivalente -para los genes improntados, uno de los dos alelos está sistemáticamente "apagado" por impronta, sin importar si esa copia es normal o mutada.'
      ],
      foco:[
        'Impronta genómica = la expresión de un gen depende de CUÁL progenitor lo transmitió, no solo de si el alelo es normal o mutado. Es una excepción a la expresión biparental equivalente de la mayoría de los genes.'
      ]
    },
    {
      t:'Prader-Willi y Angelman: la misma región cromosómica, dos síndromes según el origen parental',
      p:[
        'El síndrome de Prader-Willi (hipotonía neonatal, hiperfagia y obesidad progresiva, discapacidad intelectual leve) y el síndrome de Angelman (discapacidad intelectual grave, ataxia, risa inapropiada frecuente, convulsiones) resultan ambos de una alteración de la MISMA región del cromosoma 15, pero con consecuencias clínicas completamente distintas según cuál copia se pierda: el síndrome de Prader-Willi ocurre cuando se pierde la contribución PATERNA de esa región (por deleción del cromosoma 15 paterno, o por disomía uniparental materna -heredar las dos copias del cromosoma 15 de la madre y ninguna del padre-), mientras que el síndrome de Angelman ocurre cuando se pierde la contribución MATERNA de la misma región (por mecanismos análogos pero del lado materno). Es el ejemplo clásico y más citado de impronta genómica en medicina: la misma pérdida cromosómica produce dos enfermedades completamente distintas según el origen parental del material perdido.'
      ],
      foco:[
        '*Consideración clínica*: Prader-Willi = falta la contribución PATERNA del cromosoma 15. Angelman = falta la contribución MATERNA de la misma región. Mismo cromosoma, mismo tipo de pérdida, dos síndromes distintos según el origen parental -el ejemplo de impronta genómica más preguntado.'
      ]
    },
    {
      t:'Disomía uniparental: dos copias del mismo progenitor, ninguna del otro',
      p:[
        'La disomía uniparental es una situación en la que una persona hereda las DOS copias de un cromosoma determinado del MISMO progenitor, y ninguna copia del otro progenitor -un error infrecuente pero real de la segregación cromosómica durante la formación de los gametos o las primeras divisiones del embrión. Para la mayoría de los cromosomas, esto no tendría consecuencias clínicas mayores si ambas copias son genéticamente normales (aunque sí aumenta el riesgo de manifestar una enfermedad autosómica recesiva si ese progenitor único es portador de una mutación, porque ambas copias heredadas podrían llevarla). Pero para regiones improntadas como la del cromosoma 15, la disomía uniparental tiene consecuencias directas y predecibles, precisamente porque ausencia total de contribución de un progenitor específico es exactamente el mecanismo que produce Prader-Willi o Angelman, según cuál progenitor falte.'
      ],
      foco:[
        'La disomía uniparental es clínicamente silente para la mayoría de los cromosomas (salvo mayor riesgo de recesivas si el progenitor único es portador), pero tiene consecuencias directas y predecibles en regiones improntadas como la del cromosoma 15.'
      ]
    }
  ],
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.'
},

'genetica-cancer-hereditario': {
  tema:'Genética del cáncer hereditario',
  bloque:'Genética Médica', programa:'unirm', cuatri:8, min:13,
  idea:'La mayoría de los cánceres son esporádicos, pero un subgrupo importante se debe a mutaciones hereditarias en genes específicos -y entender la diferencia entre un gen supresor tumoral y un oncogén es la clave para entender por qué heredar UNA copia mutada ya es suficiente para elevar mucho el riesgo de cáncer, incluso siendo un patrón "recesivo" a nivel celular.',
  claves:['gen supresor tumoral','BRCA','oncogén hereditario','síndrome de cáncer familiar'],
  sigue:'muestra-poblacion-inferencia',
  secciones:[
    {
      t:'Genes supresores tumorales: la hipótesis de los dos golpes',
      p:[
        'Los genes supresores tumorales (como BRCA1, BRCA2, TP53, RB1) normalmente frenan la proliferación celular descontrolada o reparan el ADN dañado; su pérdida de función contribuye al desarrollo de cáncer. La hipótesis de los "dos golpes" de Knudson explica por qué heredar una sola copia mutada ya aumenta mucho el riesgo: a nivel MOLECULAR, se necesitan dos golpes (dos copias inactivadas del gen) para perder por completo la función supresora en una célula determinada -en el cáncer esporádico, ambos golpes deben ocurrir por azar en la misma célula, un evento poco probable. Pero en el cáncer hereditario, la persona YA NACE con un golpe (una copia mutada heredada) en TODAS sus células, así que solo necesita UN segundo golpe somático adicional (una mutación adquirida) en cualquier célula del cuerpo para inactivar por completo el gen en esa célula -por eso el cáncer hereditario aparece a edades más tempranas y con mayor frecuencia que el esporádico: el "primer golpe" ya está presente desde el nacimiento en todas las células.'
      ],
      foco:[
        'Hipótesis de los dos golpes: se necesitan DOS copias inactivadas de un gen supresor tumoral para perder su función en una célula. En el cáncer hereditario, el primer golpe ya está en TODAS las células desde el nacimiento -solo falta un segundo golpe somático, por eso aparece más temprano y con más frecuencia.'
      ]
    },
    {
      t:'BRCA1 y BRCA2: el ejemplo más conocido de síndrome de cáncer familiar',
      p:[
        'Las mutaciones hereditarias en BRCA1 o BRCA2 (genes supresores tumorales involucrados en la reparación del ADN por recombinación homóloga) elevan considerablemente el riesgo de cáncer de mama y de ovario a lo largo de la vida, y en menor medida otros cánceres (próstata, páncreas). Las portadoras de estas mutaciones tienen indicación de vigilancia intensificada (resonancia magnética mamaria además de mamografía, desde edades más tempranas que la población general) y, según el caso, pueden considerarse opciones de reducción de riesgo (cirugía profiláctica). El asesoramiento genético en estas familias sigue el principio de no directividad ya visto: informar con claridad sobre el riesgo y las opciones, sin imponer una decisión, porque las implicaciones psicológicas, familiares y reproductivas de estas decisiones son profundamente personales.'
      ],
      foco:[
        '*Consideración clínica*: una mutación BRCA1/BRCA2 hereditaria justifica vigilancia intensificada y adaptada (edades más tempranas, técnicas de imagen adicionales) frente al protocolo poblacional estándar, precisamente por el riesgo marcadamente elevado que confiere.'
      ]
    },
    {
      t:'Por qué sospechar un síndrome de cáncer hereditario en una familia',
      p:[
        'Ciertos patrones en la historia familiar y personal de cáncer deben hacer sospechar un síndrome de cáncer hereditario, más allá del cáncer esporádico habitual: cáncer a una edad inusualmente temprana para ese tipo de tumor, múltiples familiares de primer grado afectados por el mismo tipo de cáncer o por cánceres relacionados con el mismo síndrome, cáncer bilateral en órganos pares (como ambas mamas), o la combinación de varios tipos de cáncer distintos en la misma persona o en la misma familia a lo largo de varias generaciones. Reconocer estos patrones de alarma es lo que orienta hacia solicitar estudio genético dirigido, en vez de asumir que cada caso de cáncer en la familia es un evento esporádico independiente sin relación entre sí.'
      ],
      foco:[
        'Señales de alarma para sospechar cáncer hereditario: edad de aparición inusualmente temprana, múltiples familiares de primer grado afectados, cáncer bilateral en órganos pares, o combinación de varios tipos de cáncer relacionados en la misma familia.'
      ]
    }
  ],
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.'
}

});
