/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE BIOESTADISTICA (2/2)
   Completa Bioestadistica a 50 preguntas junto con banco-25.js.
   Cubre correlacion/regresion, significacion vs. relevancia
   clinica, regresion logistica, analisis de supervivencia y
   meta-analisis/revision sistematica (temas 7-11).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== BIOESTADISTICA ===================== */
{
  id:'U8-S-Q27', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Coeficiente de Pearson', sub:'Correlación lineal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipo específico de relación mide el coeficiente de correlación de Pearson?',
  ops:[
    'Cualquier tipo de relación entre dos variables, sin importar su forma',
    'Específicamente la relación LINEAL entre dos variables cuantitativas continuas',
    'Solo relaciones entre variables categóricas',
    'La relación de causalidad entre dos variables'
  ],
  ok:1,
  clave:'El coeficiente de Pearson mide específicamente la fuerza y dirección de la asociación lineal entre dos variables cuantitativas.',
  exp:'El coeficiente de correlación de Pearson (r) mide la fuerza y la dirección de la asociación LINEAL entre dos variables cuantitativas continuas, con valores de -1 a +1. Es importante notar que mide específicamente relaciones lineales: dos variables pueden tener una relación fuerte pero NO lineal (como en forma de U), y en ese caso el coeficiente de Pearson podría ser cercano a cero pese a que sí existe una relación real y fuerte.',
  no:{
    0:'No mide cualquier tipo de relación; está diseñado específicamente para relaciones lineales, y puede fallar en detectar relaciones fuertes pero no lineales.',
    2:'El coeficiente de Pearson se usa para variables cuantitativas continuas, no para variables categóricas, que requieren otras medidas de asociación.',
    3:'La correlación (incluida la de Pearson) mide asociación, no causalidad; establecer causalidad requiere criterios adicionales más exigentes.'
  },
  trampa:'Asumir que el coeficiente de Pearson captura cualquier tipo de relación entre variables, sin reconocer su especificidad para relaciones lineales.',
  obj:'Identificar que el coeficiente de Pearson mide específicamente relaciones lineales.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['coeficiente de Pearson','correlación lineal','asociación','variables cuantitativas']
},
{
  id:'U8-S-Q28', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Correlación no lineal', sub:'Limitación de Pearson',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un investigador encuentra que el coeficiente de Pearson entre la dosis de un fármaco y su efecto terapéutico es cercano a cero, y concluye que no existe ninguna relación entre ambas variables. Un análisis gráfico posterior muestra que la relación tiene forma de U: el efecto es bajo a dosis muy bajas, alto a dosis intermedias, y vuelve a bajar (por toxicidad) a dosis muy altas.',
  enunciado:'¿Qué error cometió el investigador al concluir que no existe relación?',
  ops:[
    'Ningún error: un coeficiente de Pearson cercano a cero siempre significa ausencia total de cualquier relación',
    'Asumió que un coeficiente de Pearson cercano a cero significa ausencia de CUALQUIER relación, sin considerar que Pearson solo detecta relaciones LINEALES, y la relación real (en forma de U) es claramente no lineal',
    'El coeficiente de Pearson no puede calcularse para datos de dosis-respuesta',
    'La forma de U es imposible en datos biológicos reales'
  ],
  ok:1,
  clave:'Un Pearson cercano a cero no descarta relación; solo descarta relación LINEAL, y una relación en forma de U es claramente no lineal.',
  exp:'El coeficiente de Pearson mide específicamente relaciones LINEALES. Una relación en forma de U (como la descrita, típica de curvas dosis-respuesta con toxicidad a dosis altas) es claramente NO lineal, así que el coeficiente de Pearson puede resultar cercano a cero pese a que existe una relación real y sistemática entre las variables. El error del investigador fue interpretar la ausencia de correlación LINEAL como ausencia de CUALQUIER relación, sin verificar gráficamente la forma real de la asociación.',
  no:{
    0:'Es precisamente el error que se describe en el caso: un Pearson cercano a cero NO significa ausencia de cualquier relación, solo de relación lineal.',
    2:'El coeficiente de Pearson sí puede calcularse para cualquier par de variables cuantitativas, incluidas las de dosis-respuesta; el problema no es el cálculo, sino la interpretación de un resultado cercano a cero.',
    3:'Las relaciones en forma de U (como curvas dosis-respuesta con toxicidad) son un fenómeno biológico real y frecuente, no imposible.'
  },
  trampa:'Aceptar un coeficiente de Pearson cercano a cero como prueba definitiva de ausencia de relación, sin considerar (o graficar) si la relación real podría ser no lineal.',
  obj:'Explicar por qué un coeficiente de Pearson cercano a cero no descarta una relación no lineal fuerte.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['correlación no lineal','coeficiente de Pearson','relación en forma de U','limitación estadística']
},
{
  id:'U8-S-Q29', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Correlación y causalidad', sub:'Variable de confusión',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudio observacional encuentra una fuerte correlación positiva entre el consumo de helado y el número de ahogamientos en una ciudad a lo largo del año.',
  enunciado:'¿Cuál es la explicación más probable de esta correlación, sin asumir causalidad directa entre ambas variables?',
  ops:[
    'El consumo de helado causa directamente los ahogamientos',
    'Ambas variables aumentan en verano (una variable de confusión: la temporada/temperatura), sin que una cause directamente a la otra',
    'Los ahogamientos causan directamente el consumo de helado',
    'La correlación entre estas dos variables es imposible de explicar'
  ],
  ok:1,
  clave:'La temporada (verano) es la variable de confusión que explica el aumento simultáneo de ambas variables, sin relación causal directa entre ellas.',
  exp:'El consumo de helado y el número de ahogamientos están correlacionados no porque uno cause al otro, sino porque ambos aumentan en verano (más calor favorece tanto el consumo de helado como las actividades acuáticas, que a su vez aumentan el riesgo de ahogamiento) -la temporada o temperatura es la variable de confusión real que explica la correlación observada, sin que exista una relación causal directa entre el consumo de helado y los ahogamientos.',
  no:{
    0:'No existe un mecanismo biológico o físico plausible por el que comer helado cause directamente ahogamientos; la explicación real es la variable de confusión (temporada/temperatura).',
    2:'Tampoco existe un mecanismo plausible en la dirección inversa; ambas variables son consecuencias independientes de la misma variable de confusión estacional.',
    3:'Esta correlación tiene una explicación clara y bien conocida (variable de confusión estacional), no es inexplicable.'
  },
  trampa:'Interpretar cualquier correlación fuerte como evidencia de causalidad directa entre las dos variables, sin considerar variables de confusión que expliquen la asociación observada.',
  obj:'Identificar una variable de confusión como explicación alternativa de una correlación, sin asumir causalidad directa.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['correlación y causalidad','variable de confusión','estudio observacional','sesgo de confusión']
},
{
  id:'U8-S-Q30', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Establecer causalidad', sub:'Criterios adicionales',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué se necesita, más allá de una correlación observada, para establecer razonablemente una relación de causalidad?',
  ops:[
    'Basta con una correlación fuerte (coeficiente cercano a 1 o -1) para establecer causalidad',
    'Criterios adicionales como la secuencia temporal correcta, la plausibilidad biológica, la consistencia entre distintos estudios, e idealmente evidencia experimental (ensayos aleatorizados), no solo observacional',
    'La causalidad nunca puede establecerse en medicina',
    'Solo se necesita que el valor p de la correlación sea menor a 0.05'
  ],
  ok:1,
  clave:'Establecer causalidad requiere criterios adicionales: secuencia temporal, plausibilidad biológica, consistencia entre estudios, e idealmente evidencia experimental.',
  exp:'Establecer causalidad requiere criterios adicionales, mucho más exigentes que una simple correlación observada: la secuencia temporal correcta (la causa debe preceder al efecto), la plausibilidad biológica (debe existir un mecanismo razonable), la consistencia entre distintos estudios (el hallazgo se repite en poblaciones y contextos distintos), y idealmente evidencia experimental (ensayos aleatorizados, que pueden controlar variables de confusión de una forma que los estudios observacionales no pueden), no solo evidencia observacional basada en correlación.',
  no:{
    0:'Una correlación fuerte, por sí sola, no es suficiente para establecer causalidad; puede deberse a variables de confusión, causalidad inversa o azar, sin importar cuán fuerte sea el coeficiente.',
    2:'La causalidad sí puede establecerse en medicina, aplicando criterios más rigurosos que una simple correlación, especialmente con evidencia experimental de ensayos aleatorizados.',
    3:'Un valor p pequeño solo indica que el hallazgo probablemente no se debe al azar; no aporta ninguna información sobre si la relación es causal o no.'
  },
  trampa:'Reducir el establecimiento de causalidad a un único criterio (fuerza de correlación o valor p), sin reconocer el conjunto más amplio de criterios necesarios.',
  obj:'Enumerar los criterios adicionales necesarios para establecer razonablemente una relación de causalidad.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['causalidad','criterios de causalidad','ensayo aleatorizado','plausibilidad biológica']
},
{
  id:'U8-S-Q31', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Regresión lineal', sub:'Coeficiente de determinación R²',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'En un modelo de regresión lineal, el coeficiente de determinación (R²) es 0.49. ¿Qué significa este valor?',
  ops:[
    'El 49% de la variabilidad de la variable dependiente es explicada por el modelo (las variables independientes incluidas)',
    'La correlación entre las variables es negativa',
    'El modelo tiene un 49% de probabilidad de ser correcto',
    'El R² no tiene ninguna interpretación numérica clara'
  ],
  ok:0,
  clave:'R² = 0.49 significa que el 49% de la variabilidad de la variable dependiente se explica por el modelo.',
  exp:'El coeficiente de determinación (R²) indica qué proporción de la variabilidad de la variable dependiente es explicada por el modelo de regresión -un R² de 0.49 significa que el 49% de la variabilidad observada se explica por la(s) variable(s) independiente(s) incluida(s) en el modelo, dejando el 51% restante sin explicar por factores no incluidos en el modelo.',
  no:{
    1:'El R² no indica la dirección (positiva o negativa) de la relación; esa información la da el signo del coeficiente de correlación o de la pendiente de la regresión, no el R² en sí, que siempre es positivo (al ser un cuadrado).',
    2:'El R² no es una probabilidad de que el modelo sea "correcto"; es una medida de qué proporción de la variabilidad se explica por el modelo, un concepto distinto.',
    3:'El R² sí tiene una interpretación numérica clara y directa: la proporción de variabilidad explicada por el modelo.'
  },
  trampa:'Confundir el R² con una medida de probabilidad o con la dirección de la relación, en vez de reconocerlo como la proporción de variabilidad explicada.',
  obj:'Interpretar correctamente el coeficiente de determinación R² de un modelo de regresión lineal.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['coeficiente de determinación','R²','regresión lineal','variabilidad explicada']
},
{
  id:'U8-S-Q32', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Significación vs. relevancia clínica', sub:'Muestra grande y efecto trivial',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudio con 50,000 participantes encuentra una diferencia de 1 mmHg en la presión arterial sistólica entre dos tratamientos antihipertensivos, con un valor p de 0.001.',
  enunciado:'¿Cómo debe interpretarse clínicamente este resultado, pese a su alta significación estadística?',
  ops:[
    'Como una diferencia clínicamente muy importante, dado el valor p tan pequeño',
    'El valor p pequeño confirma que la diferencia es real (no debida al azar), pero con una muestra tan grande, incluso una diferencia de 1 mmHg puede alcanzar significación estadística sin tener relevancia clínica práctica',
    'El resultado debe ignorarse por completo, ya que el valor p es engañoso',
    'Un valor p de 0.001 siempre indica un efecto grande e importante'
  ],
  ok:1,
  clave:'Con muestra muy grande, hasta una diferencia clínicamente trivial (1 mmHg) puede ser estadísticamente significativa; el valor p no mide relevancia clínica.',
  exp:'El valor p depende tanto del tamaño del efecto como del tamaño de la muestra: con una muestra suficientemente grande, incluso una diferencia mínima y clínicamente trivial entre grupos puede alcanzar significación estadística, simplemente porque la muestra grande da suficiente potencia estadística para detectar diferencias diminutas con precisión. Una diferencia de 1 mmHg en presión arterial, aunque estadísticamente significativa (valor p muy pequeño), probablemente no tiene ninguna relevancia clínica práctica para el manejo de un paciente individual.',
  no:{
    0:'El valor p pequeño no implica automáticamente relevancia clínica; una diferencia de solo 1 mmHg es, en la práctica, clínicamente trivial, pese al valor p muy significativo.',
    2:'El valor p no es "engañoso" en sí mismo -es un dato real que confirma que la diferencia observada probablemente no se debe al azar-; el error sería usarlo como única medida de relevancia clínica.',
    3:'Un valor p pequeño solo indica que el resultado observado sería poco probable bajo la hipótesis nula; no dice nada sobre la MAGNITUD del efecto, que puede ser trivial pese al valor p pequeño.'
  },
  trampa:'Equiparar un valor p muy pequeño con importancia clínica grande, sin distinguir entre significación estadística (confirma que el efecto es real) y relevancia clínica (indica si el efecto importa en la práctica).',
  obj:'Distinguir significación estadística de relevancia clínica en un resultado con muestra muy grande.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['significación estadística','relevancia clínica','tamaño del efecto','muestra grande']
},
{
  id:'U8-S-Q33', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Tamaño del efecto', sub:'Qué buscar al leer un estudio',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Al leer críticamente un estudio, ¿qué dato es más útil para juzgar si un hallazgo tiene relevancia clínica práctica?',
  ops:[
    'Únicamente el valor p reportado', 'El tamaño del efecto (diferencia de medias, riesgo relativo, razón de momios) acompañado idealmente de su intervalo de confianza', 'El tamaño de la muestra del estudio', 'El nombre de la revista donde se publicó el estudio'],
  ok:1,
  clave:'El tamaño del efecto, acompañado de su intervalo de confianza, es lo que realmente informa sobre relevancia clínica.',
  exp:'El tamaño del efecto (por ejemplo, la diferencia de medias entre grupos, el riesgo relativo, la razón de momios) cuantifica la MAGNITUD de una diferencia o asociación, independientemente de si es estadísticamente significativa o no. A diferencia del valor p (que solo indica si el efecto observado es improbable bajo la hipótesis nula), el tamaño del efecto -acompañado idealmente de su intervalo de confianza- es lo que realmente permite juzgar si una diferencia encontrada tiene relevancia práctica para la toma de decisiones clínicas.',
  no:{
    0:'El valor p solo, sin el tamaño del efecto, no informa sobre la magnitud ni la relevancia clínica del hallazgo, como se vio en el caso de la diferencia de 1 mmHg con muestra grande.',
    2:'El tamaño de la muestra influye en la significación estadística, pero no es, por sí solo, una medida de relevancia clínica del hallazgo.',
    3:'El prestigio de la revista no es un dato estadístico relevante para juzgar la magnitud o la relevancia clínica de un hallazgo específico.'
  },
  trampa:'Buscar solo el valor p al leer un estudio, sin prestar atención al tamaño del efecto reportado, que es la información realmente relevante para juzgar importancia clínica.',
  obj:'Identificar el tamaño del efecto como el dato clave para juzgar la relevancia clínica de un hallazgo.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['tamaño del efecto','lectura crítica','relevancia clínica','intervalo de confianza']
},
{
  id:'U8-S-Q34', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Regresión logística', sub:'Por qué no usar regresión lineal',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la regresión lineal convencional no es apropiada cuando la variable dependiente es binaria (sí/no)?',
  ops:[
    'Porque la regresión lineal siempre da resultados idénticos a la regresión logística',
    'Porque la regresión lineal podría predecir valores fuera del rango lógico de una probabilidad (menores a 0 o mayores a 1), algo sin sentido para una variable binaria',
    'Porque las variables binarias no pueden analizarse con ningún método de regresión',
    'Porque la regresión lineal solo funciona con muestras muy pequeñas'
  ],
  ok:1,
  clave:'La regresión lineal podría predecir probabilidades imposibles (fuera de 0-1), lo que no tiene sentido para un desenlace binario.',
  exp:'Cuando la variable dependiente es BINARIA (sí/no), la regresión lineal convencional no es apropiada, porque podría predecir valores fuera del rango lógico de una probabilidad (menores a 0 o mayores a 1), algo sin sentido para una variable que solo puede tomar dos valores. La regresión logística resuelve este problema modelando el logaritmo de la razón de momios (log-odds), garantizando que la probabilidad predicha siempre quede acotada entre 0 y 1.',
  no:{
    0:'La regresión lineal y la logística son métodos distintos, con supuestos y resultados diferentes; no dan resultados idénticos, precisamente por esta limitación de la lineal con desenlaces binarios.',
    2:'Las variables binarias sí pueden analizarse con un método de regresión específico (la regresión logística), diseñado precisamente para este tipo de variable.',
    3:'La limitación de la regresión lineal con variables binarias no se relaciona con el tamaño de la muestra, sino con la naturaleza matemática de la predicción de probabilidades.'
  },
  trampa:'No reconocer el problema matemático específico (predicciones fuera del rango 0-1) que hace inapropiada a la regresión lineal para desenlaces binarios.',
  obj:'Explicar por qué la regresión lineal no es apropiada para variables dependientes binarias.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['regresión logística','regresión lineal','variable binaria','log-odds']
},
{
  id:'U8-S-Q35', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Razón de momios ajustada', sub:'Ventaja de la regresión multivariable',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la ventaja principal de reportar una razón de momios AJUSTADA (de una regresión logística multivariable) en vez de una razón de momios cruda (no ajustada)?',
  ops:[
    'La ajustada siempre es un número mayor que la cruda',
    'La ajustada representa el efecto de esa variable específica manteniendo constantes a las demás variables incluidas en el modelo, reduciendo la influencia de factores de confusión conocidos',
    'No existe ninguna diferencia real entre ambas medidas',
    'La ajustada nunca puede calcularse en estudios observacionales'
  ],
  ok:1,
  clave:'La razón de momios ajustada representa el efecto independiente de una variable, controlando por otras incluidas en el modelo (factores de confusión).',
  exp:'La razón de momios ajustada, obtenida de una regresión logística MULTIVARIABLE, representa el efecto de una variable específica MANTENIENDO CONSTANTES a las demás variables incluidas simultáneamente en el mismo modelo -es decir, estima el efecto independiente de un factor de exposición eliminando (o reduciendo) la influencia de factores de confusión conocidos que también se incluyeron en el modelo. Esto la hace una estimación más creíble del efecto real de esa variable que la razón de momios cruda, que no controla por ningún otro factor.',
  no:{
    0:'No hay una relación fija en cuanto a magnitud; la razón de momios ajustada puede ser mayor, menor o similar a la cruda, dependiendo de cómo los factores de confusión afecten a la asociación observada.',
    2:'Sí existe una diferencia conceptual y práctica importante: la ajustada controla por otras variables (reduciendo confusión), mientras la cruda no lo hace.',
    3:'La razón de momios ajustada es precisamente una herramienta muy usada en estudios observacionales, donde el control de factores de confusión es especialmente importante al no poder aleatorizar la exposición.'
  },
  trampa:'No reconocer la ventaja específica del ajuste por otras variables como la razón principal para preferir una razón de momios ajustada sobre una cruda.',
  obj:'Explicar la ventaja de una razón de momios ajustada frente a una cruda en el control de factores de confusión.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['razón de momios ajustada','regresión logística multivariable','factores de confusión','odds ratio']
},
{
  id:'U8-S-Q36', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Análisis de supervivencia', sub:'Concepto de censura',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué significa que un participante esté "censurado" en un análisis de supervivencia?',
  ops:[
    'Que el participante fue excluido por completo del análisis',
    'Que el participante no experimentó el desenlace de interés durante el tiempo en que fue observado, pero se desconoce qué pasó después de que dejó de ser seguido',
    'Que el participante murió inmediatamente al inicio del estudio',
    'La censura no tiene ningún significado estadístico específico'
  ],
  ok:1,
  clave:'Un caso censurado no experimentó el desenlace mientras fue observado, pero se desconoce qué ocurrió después de dejar de seguirse.',
  exp:'Un participante censurado es aquel que no experimentó el desenlace de interés (muerte, recaída, etc.) durante el tiempo en que fue observado, ya sea porque el estudio terminó antes de que ocurriera el desenlace, o porque se perdió del seguimiento por razones ajenas al desenlace (se mudó, retiró su consentimiento). Se sabe que el desenlace NO ocurrió durante el tiempo en que fue observado, pero no se sabe qué pasó después. El análisis de supervivencia está diseñado específicamente para aprovechar esta información parcial sin descartar a estos participantes.',
  no:{
    0:'Los participantes censurados NO se excluyen del análisis; su información parcial se aprovecha específicamente mediante las técnicas del análisis de supervivencia.',
    2:'Es lo contrario: un participante censurado es aquel que NO experimentó el desenlace mientras fue observado, no uno que murió al inicio del estudio.',
    3:'La censura tiene un significado estadístico preciso y es un concepto central del análisis de supervivencia.'
  },
  trampa:'Confundir "censurado" con "excluido" del análisis, cuando en realidad el análisis de supervivencia aprovecha específicamente la información parcial de estos casos.',
  obj:'Definir correctamente el concepto de censura en el análisis de supervivencia.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['censura','análisis de supervivencia','seguimiento incompleto','pérdida de seguimiento']
},
{
  id:'U8-S-Q37', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Curva de Kaplan-Meier', sub:'Lectura de la curva',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué representa el eje vertical de una curva de Kaplan-Meier, y cuándo desciende?',
  ops:[
    'Representa la edad de los pacientes; desciende con el tiempo automáticamente',
    'Representa la probabilidad estimada de NO haber experimentado el desenlace; desciende en escalones cada vez que ocurre el desenlace en algún participante',
    'Representa el número total de participantes reclutados; nunca desciende',
    'La curva de Kaplan-Meier no tiene ningún eje vertical con significado'
  ],
  ok:1,
  clave:'El eje vertical representa la probabilidad de no haber experimentado el desenlace, y desciende en escalones con cada desenlace ocurrido.',
  exp:'La curva de Kaplan-Meier muestra, en el eje vertical, la probabilidad estimada de NO haber experimentado el desenlace (por ejemplo, seguir vivo) en función del tiempo transcurrido (eje horizontal). La curva desciende en escalones cada vez que ocurre el desenlace en algún participante; los casos censurados se marcan sin que la curva descienda en ese punto, porque no experimentaron el desenlace, solo dejaron de observarse.',
  no:{
    0:'El eje vertical no representa la edad de los pacientes; representa la probabilidad estimada de supervivencia (o de no experimentar el desenlace) a lo largo del tiempo.',
    2:'El eje vertical no representa el número de participantes reclutados; representa una probabilidad, y la curva sí desciende cada vez que ocurre el desenlace.',
    3:'El eje vertical de una curva de Kaplan-Meier tiene un significado específico y central para la interpretación del análisis de supervivencia.'
  },
  trampa:'Confundir el significado del eje vertical de la curva de Kaplan-Meier con otras variables del estudio, o no reconocer cuándo y por qué la curva desciende.',
  obj:'Describir qué representa el eje vertical de una curva de Kaplan-Meier y cuándo desciende.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['curva de Kaplan-Meier','probabilidad de supervivencia','censura','análisis de supervivencia']
},
{
  id:'U8-S-Q38', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Riesgos proporcionales', sub:'Supuesto y su violación',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Al comparar las curvas de supervivencia de dos brazos de un ensayo clínico, se observa que las curvas se CRUZAN en un punto intermedio del seguimiento: un grupo tiene mejor supervivencia en la primera mitad del estudio, y el otro grupo tiene mejor supervivencia en la segunda mitad.',
  enunciado:'¿Qué implicación tiene este cruce de curvas para el análisis estadístico con un modelo de regresión de Cox estándar?',
  ops:[
    'Ninguna: el cruce de curvas nunca afecta la validez de ningún método estadístico',
    'Es una señal visual de que el supuesto de riesgos proporcionales probablemente no se cumple, y el modelo de Cox estándar podría dar resultados poco fiables sin ajustes adicionales',
    'El cruce de curvas siempre indica un error en la recolección de los datos',
    'El modelo de Cox nunca hace ningún supuesto sobre la relación entre los grupos'
  ],
  ok:1,
  clave:'Curvas de Kaplan-Meier que se cruzan sugieren violación del supuesto de riesgos proporcionales, afectando la fiabilidad del modelo de Cox estándar.',
  exp:'El modelo de regresión de Cox estándar asume el supuesto de riesgos proporcionales: que la razón entre el riesgo instantáneo del desenlace en un grupo comparado con el otro se mantiene relativamente constante a lo largo de todo el tiempo de seguimiento. Si las curvas de supervivencia de dos grupos se cruzan (indicando que la relación entre ambos grupos se invierte en distintos periodos del seguimiento), este supuesto probablemente no se cumple, y los métodos que dependen de él, como la regresión de Cox estándar, podrían dar resultados poco fiables sin ajustes metodológicos adicionales.',
  no:{
    0:'El cruce de curvas sí tiene implicaciones metodológicas importantes, específicamente para la validez del supuesto de riesgos proporcionales asumido por métodos como la regresión de Cox estándar.',
    2:'El cruce de curvas no indica necesariamente un error de recolección de datos; puede reflejar un fenómeno biológico real donde la relación de riesgo entre grupos cambia con el tiempo.',
    3:'El modelo de Cox sí hace un supuesto explícito (riesgos proporcionales) sobre la relación de riesgo entre los grupos comparados a lo largo del tiempo.'
  },
  trampa:'No reconocer el cruce visual de curvas de Kaplan-Meier como una señal de alerta metodológica relevante para la validez de los métodos estadísticos que asumen riesgos proporcionales.',
  obj:'Interpretar el cruce de curvas de Kaplan-Meier como señal de violación del supuesto de riesgos proporcionales.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['riesgos proporcionales','regresión de Cox','curvas de Kaplan-Meier','supuesto estadístico']
},
{
  id:'U8-S-Q39', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Regresión de Cox', sub:'Analogía con la regresión logística',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Para qué se usa un modelo de regresión de Cox en el análisis de supervivencia?',
  ops:[
    'Para comparar estadísticamente curvas de supervivencia ajustando por variables de confusión, de forma análoga a como la regresión logística ajusta el efecto de una variable en un desenlace binario',
    'Para calcular exclusivamente el error estándar de una media',
    'Solo se usa cuando no hay ningún caso censurado en el estudio',
    'La regresión de Cox no tiene ninguna aplicación en datos de supervivencia'
  ],
  ok:0,
  clave:'La regresión de Cox permite comparar curvas de supervivencia ajustando por variables de confusión, de forma análoga a la regresión logística.',
  exp:'El modelo de regresión de Cox se usa para comparar estadísticamente dos o más curvas de supervivencia, ajustando por variables de confusión incluidas en el modelo, de forma análoga a como la regresión logística ajusta el efecto de una variable sobre un desenlace binario (visto en el tema anterior). Es la herramienta estándar para analizar datos de supervivencia de forma multivariable, permitiendo estimar el efecto independiente de una exposición sobre el riesgo del desenlace a lo largo del tiempo.',
  no:{
    1:'La regresión de Cox no se usa para calcular el error estándar de una media; es un modelo específico para analizar datos de tiempo hasta un evento (supervivencia), ajustando por variables de confusión.',
    2:'La regresión de Cox está diseñada precisamente para manejar datos con censura, que es habitual en estudios de supervivencia; no requiere la ausencia de casos censurados.',
    3:'La regresión de Cox es, de hecho, una de las herramientas más usadas y centrales en el análisis multivariable de datos de supervivencia.'
  },
  trampa:'No reconocer la analogía funcional entre la regresión de Cox (para supervivencia) y la regresión logística (para desenlaces binarios), ambas orientadas a ajustar por variables de confusión.',
  obj:'Explicar el propósito de la regresión de Cox en el análisis multivariable de datos de supervivencia.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['regresión de Cox','análisis de supervivencia','ajuste multivariable','riesgo proporcional']
},
{
  id:'U8-S-Q40', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Revisión sistemática', sub:'Diferencia con revisión narrativa',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué distingue a una revisión sistemática de una revisión narrativa tradicional?',
  ops:[
    'La revisión sistemática sigue criterios de búsqueda y selección predefinidos y explícitos, minimizando el sesgo de selección de qué estudios se incluyen; la narrativa es más informal y potencialmente sesgada',
    'Ambos tipos de revisión son exactamente iguales en metodología',
    'La revisión narrativa siempre es más rigurosa que la sistemática',
    'Solo la revisión narrativa puede incluir un meta-análisis'
  ],
  ok:0,
  clave:'La revisión sistemática sigue criterios predefinidos y explícitos de búsqueda y selección, minimizando el sesgo, a diferencia de la narrativa.',
  exp:'Una revisión sistemática es un proceso metodológico riguroso y explícito para identificar, seleccionar y evaluar críticamente TODA la evidencia disponible sobre una pregunta clínica específica, siguiendo criterios de búsqueda y selección predefinidos (para minimizar el sesgo de selección de qué estudios se incluyen), a diferencia de una revisión narrativa tradicional, más informal y potencialmente sesgada en su selección de estudios, que puede reflejar las preferencias o el conocimiento previo del autor sin una metodología sistemática explícita.',
  no:{
    1:'Son metodológicamente distintas: la sistemática sigue un proceso riguroso y predefinido; la narrativa es más informal, sin esos criterios explícitos.',
    2:'Es al revés: la revisión sistemática es, en general, la más rigurosa metodológicamente, precisamente por sus criterios explícitos y predefinidos de búsqueda y selección.',
    3:'El meta-análisis (combinación estadística de resultados) se asocia típicamente a revisiones sistemáticas, no a revisiones narrativas, que no siguen el rigor metodológico necesario para justificar una combinación cuantitativa.'
  },
  trampa:'No reconocer la diferencia metodológica fundamental entre revisión sistemática (rigurosa, predefinida) y revisión narrativa (informal, potencialmente sesgada).',
  obj:'Distinguir la revisión sistemática de la revisión narrativa por su rigor metodológico.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['revisión sistemática','revisión narrativa','sesgo de selección','metodología de búsqueda']
},
{
  id:'U8-S-Q41', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Meta-análisis', sub:'Relación con revisión sistemática',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Toda revisión sistemática incluye necesariamente un meta-análisis?',
  ops:[
    'Sí, siempre, sin excepción',
    'No necesariamente: si los estudios encontrados son demasiado heterogéneos para combinarse estadísticamente de forma razonable, una revisión sistemática puede no incluir un meta-análisis',
    'El meta-análisis y la revisión sistemática son exactamente lo mismo',
    'Un meta-análisis nunca puede formar parte de una revisión sistemática'
  ],
  ok:1,
  clave:'No toda revisión sistemática incluye meta-análisis; si los estudios son muy heterogéneos, puede no ser razonable combinarlos estadísticamente.',
  exp:'Un meta-análisis es el análisis ESTADÍSTICO específico que, dentro de (o a partir de) una revisión sistemática, combina cuantitativamente los resultados de varios estudios individuales. No toda revisión sistemática incluye necesariamente un meta-análisis -por ejemplo, si los estudios encontrados son demasiado heterogéneos entre sí (en población, intervención, metodología) para combinarse estadísticamente de forma razonable, la revisión sistemática puede optar por presentar los resultados de forma narrativa o por separado, sin un meta-análisis cuantitativo formal.',
  no:{
    0:'No es siempre el caso; existen revisiones sistemáticas sin meta-análisis, precisamente cuando la heterogeneidad entre estudios lo desaconseja.',
    2:'Son conceptos relacionados pero distintos: la revisión sistemática es el proceso metodológico de búsqueda y selección; el meta-análisis es (opcionalmente) el análisis estadístico de combinación de resultados dentro de ese proceso.',
    3:'El meta-análisis frecuentemente SÍ forma parte de una revisión sistemática, cuando la heterogeneidad entre los estudios lo permite razonablemente.'
  },
  trampa:'Asumir que revisión sistemática y meta-análisis son sinónimos o que uno siempre implica al otro, sin reconocer que la heterogeneidad puede hacer inapropiado combinar estudios estadísticamente.',
  obj:'Explicar que no toda revisión sistemática incluye necesariamente un meta-análisis.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['meta-análisis','revisión sistemática','heterogeneidad','combinación estadística']
},
{
  id:'U8-S-Q42', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Heterogeneidad', sub:'Efectos fijos vs. aleatorios',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un meta-análisis encuentra una heterogeneidad alta entre los estudios incluidos, reflejando diferencias reales en las poblaciones estudiadas y en las intervenciones exactas evaluadas.',
  enunciado:'¿Qué modelo estadístico es más apropiado usar en este escenario de heterogeneidad alta?',
  ops:[
    'Modelo de efectos fijos, que asume un único efecto verdadero compartido por todos los estudios',
    'Modelo de efectos aleatorios, que asume que el efecto verdadero puede variar genuinamente entre los distintos estudios incluidos',
    'Ningún modelo estadístico puede usarse cuando hay heterogeneidad',
    'La heterogeneidad no tiene ninguna influencia en la elección del modelo estadístico'
  ],
  ok:1,
  clave:'Con heterogeneidad alta, se prefiere el modelo de efectos aleatorios, que asume que el efecto verdadero puede variar entre estudios.',
  exp:'Cuando la heterogeneidad es alta (los estudios difieren de forma sistemática entre sí, no solo por variación aleatoria de muestreo), se prefiere el modelo estadístico de efectos aleatorios, que asume que el efecto verdadero puede variar genuinamente entre los distintos estudios, sobre el modelo de efectos fijos, que asume un único efecto verdadero compartido por todos -un supuesto poco realista cuando existe heterogeneidad real entre las poblaciones o intervenciones estudiadas.',
  no:{
    0:'El modelo de efectos fijos es más apropiado cuando la heterogeneidad es BAJA, no alta; asume un único efecto compartido, un supuesto que no se sostiene bien con heterogeneidad real alta.',
    2:'Sí puede usarse un modelo estadístico apropiado (efectos aleatorios) incluso con heterogeneidad alta, aunque en casos de heterogeneidad extrema puede ser más honesto no combinar los estudios en absoluto.',
    3:'La heterogeneidad tiene una influencia directa y bien establecida en la elección entre el modelo de efectos fijos y el de efectos aleatorios.'
  },
  trampa:'Usar por defecto el modelo de efectos fijos sin considerar el nivel de heterogeneidad entre los estudios incluidos en el meta-análisis.',
  obj:'Elegir el modelo de efectos aleatorios para un meta-análisis con heterogeneidad alta entre estudios.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['heterogeneidad','modelo de efectos aleatorios','modelo de efectos fijos','meta-análisis']
},
{
  id:'U8-S-Q43', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Forest plot', sub:'Elementos gráficos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'En un forest plot, ¿qué representa el rombo (diamante) situado en la parte inferior del gráfico?',
  ops:[
    'Un estudio individual más de los incluidos en el meta-análisis',
    'La estimación combinada de todos los estudios y su intervalo de confianza conjunto',
    'El estudio con el resultado más extremo',
    'El rombo no tiene ningún significado en un forest plot'
  ],
  ok:1,
  clave:'El rombo representa la estimación combinada de todos los estudios del meta-análisis y su intervalo de confianza conjunto.',
  exp:'En un forest plot, cada línea horizontal representa a un estudio individual (con un cuadrado marcando su estimación puntual y una línea marcando su intervalo de confianza). En la parte inferior del gráfico, un rombo (diamante) representa la estimación COMBINADA de todos los estudios y su intervalo de confianza conjunto, generalmente más estrecho (más preciso) que el de cualquier estudio individual. Es el resultado principal y resumido del meta-análisis completo.',
  no:{
    0:'Los estudios individuales se representan con cuadrados en líneas horizontales separadas; el rombo es específicamente la estimación COMBINADA de todos ellos, no un estudio adicional.',
    2:'El rombo no representa a un único estudio (ni el más extremo ni ningún otro individual); es la síntesis estadística de TODOS los estudios incluidos.',
    3:'El rombo tiene un significado central y específico en el forest plot: es la representación visual de la estimación combinada del meta-análisis.'
  },
  trampa:'Confundir el rombo (estimación combinada) con la representación de un estudio individual más, en vez de reconocerlo como la síntesis de todos los estudios.',
  obj:'Identificar el rombo del forest plot como la estimación combinada del meta-análisis.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['forest plot','estimación combinada','meta-análisis','representación gráfica']
},
{
  id:'U8-S-Q44', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Forest plot', sub:'Tamaño del cuadrado',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué representa generalmente el tamaño del cuadrado de cada estudio individual en un forest plot?',
  ops:[
    'El peso que ese estudio aporta al resultado combinado, generalmente relacionado con su tamaño muestral o precisión',
    'La edad promedio de los participantes de ese estudio',
    'El tamaño del cuadrado nunca varía entre estudios',
    'El año de publicación del estudio'
  ],
  ok:0,
  clave:'El tamaño del cuadrado suele ser proporcional al peso que ese estudio aporta al resultado combinado (tamaño muestral o precisión).',
  exp:'En un forest plot, cada línea horizontal representa a un estudio individual, con un cuadrado marcando su estimación puntual del efecto, cuyo tamaño suele ser proporcional al peso que ese estudio aporta al resultado combinado -generalmente relacionado con su tamaño muestral o su precisión (estudios más grandes o más precisos, con intervalos de confianza más estrechos, típicamente aportan mayor peso y se representan con cuadrados más grandes).',
  no:{
    1:'El tamaño del cuadrado no representa la edad de los participantes; representa el peso relativo del estudio en la estimación combinada.',
    2:'El tamaño del cuadrado sí varía entre estudios, precisamente porque cada estudio aporta un peso distinto al resultado combinado, según su tamaño muestral o precisión.',
    3:'El año de publicación no es lo que determina el tamaño del cuadrado en un forest plot estándar; es el peso relativo del estudio, relacionado con su precisión.'
  },
  trampa:'No reconocer que el tamaño visual del cuadrado codifica información relevante (el peso del estudio) en vez de ser un detalle estético arbitrario.',
  obj:'Explicar qué representa el tamaño del cuadrado de cada estudio en un forest plot.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['forest plot','peso del estudio','precisión','tamaño muestral']
},
{
  id:'U8-S-Q45', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Intervalo de confianza', sub:'Precisión del estimador',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Dos estudios reportan exactamente el mismo valor p (0.03), pero uno tiene un intervalo de confianza mucho más estrecho que el otro para el mismo tipo de medida. ¿Qué información adicional aporta esta diferencia de amplitud del intervalo?',
  ops:[
    'Ninguna; si el valor p es el mismo, ambos estudios son igual de informativos',
    'El estudio con el intervalo más estrecho tiene una estimación más PRECISA del efecto, información que el valor p por sí solo no comunica',
    'El estudio con el intervalo más amplio es automáticamente más confiable',
    'Los intervalos de confianza nunca pueden diferir en amplitud si el valor p es el mismo'
  ],
  ok:1,
  clave:'Un intervalo más estrecho indica mayor precisión de la estimación, información adicional que el valor p solo no aporta.',
  exp:'El intervalo de confianza también informa sobre la MAGNITUD y la PRECISIÓN del efecto, algo que un valor p aislado no comunica -dos estudios pueden tener el mismo valor p pero intervalos de confianza de amplitud muy distinta, reflejando precisión muy distinta de la estimación. El estudio con el intervalo más estrecho da una estimación más precisa del verdadero efecto, una información valiosa que se perdería si solo se reportara el valor p.',
  no:{
    0:'Sí existe información adicional relevante: la amplitud del intervalo de confianza comunica la precisión de la estimación, algo que el valor p solo no aporta.',
    2:'Es al revés: un intervalo MÁS ESTRECHO (no más amplio) indica mayor precisión, generalmente asociada a mayor confiabilidad de la estimación puntual.',
    3:'Los intervalos de confianza sí pueden diferir considerablemente en amplitud entre estudios con el mismo valor p, precisamente porque miden cosas distintas (significación contra precisión).'
  },
  trampa:'Asumir que dos estudios con el mismo valor p son igual de informativos, sin considerar la información adicional de precisión que aporta la amplitud del intervalo de confianza.',
  obj:'Explicar la información adicional sobre precisión que aporta el intervalo de confianza más allá del valor p.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['intervalo de confianza','precisión','valor p','amplitud del intervalo']
},
{
  id:'U8-S-Q46', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Diseño de estudios', sub:'Elección de prueba: correlación vs. comparación',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un investigador quiere evaluar si existe una relación entre el nivel de colesterol LDL (variable cuantitativa continua) y la edad (variable cuantitativa continua) en una muestra de pacientes.',
  enunciado:'¿Qué análisis estadístico es el más apropiado para esta pregunta?',
  ops:[
    'Chi-cuadrado', 'Correlación de Pearson (o regresión lineal)', 't de Student', 'ANOVA'],
  ok:1,
  clave:'Para evaluar la relación entre dos variables cuantitativas continuas, el análisis apropiado es correlación de Pearson o regresión lineal.',
  exp:'Como ambas variables (colesterol LDL y edad) son cuantitativas continuas, y se busca evaluar la relación (asociación) entre ellas, el análisis apropiado es la correlación de Pearson (para medir la fuerza y dirección de la asociación lineal) o la regresión lineal (si además se quiere predecir una variable a partir de la otra), no pruebas diseñadas para comparar grupos o variables categóricas.',
  no:{
    0:'El chi-cuadrado se usa para variables categóricas en tablas de contingencia, no para dos variables cuantitativas continuas como en este caso.',
    2:'La t de Student compara medias de una variable cuantitativa ENTRE GRUPOS categóricos, no evalúa la relación entre dos variables cuantitativas continuas.',
    3:'El ANOVA compara medias de una variable cuantitativa entre tres o más grupos categóricos, no evalúa la relación entre dos variables cuantitativas continuas.'
  },
  trampa:'Elegir una prueba de comparación de grupos (t de Student, ANOVA) cuando en realidad se busca evaluar la relación entre dos variables cuantitativas continuas, que requiere correlación o regresión.',
  obj:'Elegir la correlación de Pearson (o regresión lineal) como el análisis apropiado para relacionar dos variables cuantitativas continuas.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['correlación de Pearson','regresión lineal','elección de prueba estadística','variables cuantitativas continuas']
},
{
  id:'U8-S-Q47', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Inferencia', sub:'Uso práctico del error estándar',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Dos estudios miden la misma variable en la misma población, pero uno usa una muestra de 100 pacientes y el otro usa una muestra de 400 pacientes, obteniendo medias muestrales similares.',
  enunciado:'¿Qué estudio tendrá, en general, un error estándar menor (una estimación más precisa) de la media?',
  ops:[
    'El estudio con 100 pacientes', 'El estudio con 400 pacientes, porque el error estándar disminuye con el aumento del tamaño de la muestra', 'Ambos estudios tendrán exactamente el mismo error estándar', 'El tamaño de la muestra no influye en el error estándar'],
  ok:1,
  clave:'El estudio con mayor tamaño de muestra (400) tendrá un error estándar menor, una estimación más precisa.',
  exp:'El error estándar se calcula dividiendo la desviación estándar de los datos entre la raíz cuadrada del tamaño de la muestra, así que a mayor tamaño de muestra, MENOR error estándar (la estimación se vuelve más precisa). El estudio con 400 pacientes (cuatro veces el tamaño del de 100 pacientes) tendrá, en igualdad de las demás condiciones (misma variabilidad de los datos), un error estándar la mitad del que tendría el estudio de 100 pacientes, por la relación con la raíz cuadrada.',
  no:{
    0:'El estudio con la muestra MÁS PEQUEÑA (100) tendría, en general, un error estándar MAYOR (menos preciso), no menor.',
    2:'Los tamaños de muestra distintos (100 contra 400) producen, en igualdad de las demás condiciones, errores estándar distintos, no iguales.',
    3:'El tamaño de la muestra sí influye directamente en el error estándar, a través de la raíz cuadrada en su fórmula de cálculo.'
  },
  trampa:'No aplicar la relación conocida entre tamaño muestral y error estándar a un caso concreto de comparación entre dos estudios.',
  obj:'Aplicar la relación entre tamaño de muestra y error estándar para comparar la precisión de dos estudios.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['error estándar','tamaño muestral','precisión del estimador','comparación de estudios']
},
{
  id:'U8-S-Q48', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Error tipo I', sub:'Definición precisa',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué describe el error tipo I en una prueba de hipótesis?',
  ops:[
    'No rechazar la hipótesis nula siendo en realidad falsa (un falso negativo)',
    'Rechazar la hipótesis nula siendo en realidad verdadera (un falso positivo)',
    'Aceptar siempre la hipótesis alternativa sin ninguna evidencia',
    'El error tipo I no tiene relación con la hipótesis nula'
  ],
  ok:1,
  clave:'El error tipo I es rechazar la hipótesis nula siendo en realidad verdadera: un falso positivo.',
  exp:'El error tipo I (con probabilidad alfa, convencionalmente 0.05) ocurre cuando se rechaza la hipótesis nula siendo en realidad verdadera -concluir que hay una diferencia cuando en realidad no la hay, un "falso positivo" estadístico. Es distinto del error tipo II, que ocurre cuando NO se rechaza la hipótesis nula siendo en realidad falsa (un falso negativo).',
  no:{
    0:'Esa descripción corresponde al error TIPO II, no al tipo I, que es precisamente lo opuesto.',
    2:'El error tipo I no se refiere a "aceptar siempre" la hipótesis alternativa sin evidencia; es un concepto probabilístico específico sobre el riesgo de rechazar incorrectamente H0.',
    3:'El error tipo I está directamente relacionado con la hipótesis nula: es precisamente el error de rechazarla incorrectamente cuando es verdadera.'
  },
  trampa:'Confundir el error tipo I (falso positivo) con el error tipo II (falso negativo), invirtiendo sus definiciones.',
  obj:'Definir correctamente el error tipo I en una prueba de hipótesis.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['error tipo I','falso positivo','hipótesis nula','alfa']
},
{
  id:'U8-S-Q49', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Diseño de estudios', sub:'Potencia mínima convencional',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la potencia mínima convencionalmente exigida en el diseño de un estudio, y qué riesgo de error tipo II implica?',
  ops:['50%, con 50% de riesgo de error tipo II', '80%, con hasta 20% de riesgo de error tipo II aceptado', '100%, sin ningún riesgo de error tipo II', 'No existe ninguna convención sobre la potencia mínima'],
  ok:1,
  clave:'La potencia mínima convencional es 80%, aceptando hasta un 20% de riesgo de error tipo II.',
  exp:'Por convención, se suele exigir una potencia mínima del 80% en el diseño de un estudio, lo que significa aceptar un riesgo de error tipo II de hasta el 20% (ya que potencia = 1 − beta, así que una potencia del 80% implica un beta del 20%). Es un umbral convencional, similar al 5% convencional para el error tipo I, sin que ninguno de los dos tenga una justificación matemática absoluta más allá de ser un compromiso práctico aceptado ampliamente por la comunidad científica.',
  no:{
    0:'El 50% no es el umbral convencional de potencia mínima; el estándar ampliamente aceptado es 80%.',
    2:'Una potencia del 100% (sin ningún riesgo de error tipo II) no es alcanzable en la práctica; siempre existe algún riesgo residual, y el estándar aceptado es 80%, no 100%.',
    3:'Sí existe una convención ampliamente aceptada en el diseño de estudios: una potencia mínima del 80%.'
  },
  trampa:'No recordar el valor convencional específico (80%) de potencia mínima exigida en el diseño de estudios.',
  obj:'Identificar la potencia mínima convencionalmente exigida en el diseño de un estudio y su riesgo de error tipo II asociado.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['potencia mínima','80%','error tipo II','convención de diseño']
},
{
  id:'U8-S-Q50', programa:'unirm', cuatri:8,
  esp:'Bioestadística', tema:'Meta-análisis', sub:'Ventaja de la estimación combinada',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué ventaja estadística tiene la estimación combinada de un meta-análisis frente a la de cualquier estudio individual incluido?',
  ops:[
    'Es siempre exactamente igual a la de cualquiera de los estudios individuales',
    'Generalmente tiene un intervalo de confianza más estrecho (mayor precisión) que el de cualquier estudio individual por separado',
    'Nunca puede calcularse si hay más de dos estudios incluidos',
    'La estimación combinada siempre es menos precisa que cada estudio individual'
  ],
  ok:1,
  clave:'La estimación combinada de un meta-análisis suele tener un intervalo de confianza más estrecho (mayor precisión) que cualquier estudio individual.',
  exp:'Un meta-análisis combina cuantitativamente los resultados de varios estudios individuales en una sola estimación combinada, generalmente más precisa (con un intervalo de confianza más estrecho) que la de cualquier estudio individual por separado -al combinar información de múltiples fuentes, el tamaño efectivo de la muestra combinada es mayor que el de cualquier estudio individual, lo que reduce el error estándar de la estimación combinada, siguiendo el mismo principio de que muestras más grandes dan estimaciones más precisas.',
  no:{
    0:'La estimación combinada no es idéntica a la de ningún estudio individual; es una síntesis ponderada de todos los estudios incluidos, generalmente distinta (y más precisa) que cualquiera de ellos por separado.',
    2:'Un meta-análisis puede (y con frecuencia incluye) más de dos estudios; de hecho, cuantos más estudios de calidad se incluyan, mayor suele ser la ganancia de precisión.',
    3:'Es al revés: la estimación combinada generalmente es MÁS (no menos) precisa que cualquier estudio individual, precisamente por la ventaja de combinar información de múltiples fuentes.'
  },
  trampa:'No reconocer la ganancia de precisión (intervalo de confianza más estrecho) como la ventaja estadística central de combinar estudios en un meta-análisis.',
  obj:'Explicar la ventaja de precisión de la estimación combinada de un meta-análisis frente a estudios individuales.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['meta-análisis','precisión combinada','intervalo de confianza','estimación combinada']
}

]);
