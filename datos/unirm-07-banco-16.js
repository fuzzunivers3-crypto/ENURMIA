/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 7, TANDA DE ESTADISTICA I (2/2)
   Completa Estadistica I a 50 preguntas junto con banco-15.js.
   Cubre el resto de variables, tendencia central, dispersion,
   probabilidad, distribucion normal, muestreo, tablas de
   contingencia, errores de medicion y fuentes de datos en salud
   (temas 1-2 refuerzo y 5-10).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== ESTADISTICA I ===================== */
{
  id:'U7-S-Q20', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Tipos de variables', sub:'Contar vs. medir',
  dif:1, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'El número de crisis convulsivas que presenta un paciente en un mes es un dato que se obtiene contando. ¿Qué tipo de variable es?',
  ops:['Cualitativa nominal', 'Cualitativa ordinal', 'Cuantitativa discreta', 'Cuantitativa continua'],
  ok:2,
  clave:'Contar eventos da como resultado una variable cuantitativa discreta.',
  exp:'El número de crisis convulsivas en un periodo determinado es el resultado de CONTAR un evento, por lo que solo puede tomar valores enteros (0, 1, 2, 3...) -nunca un valor decimal como 2.5 crisis. Esto la clasifica como una variable cuantitativa discreta, a diferencia de las variables continuas, que se obtienen MIDIENDO y pueden tomar cualquier valor dentro de un rango, incluidos decimales.',
  no:{
    0:'No es cualitativa: representa una cantidad numérica con significado aritmético (se puede sumar, promediar), no una categoría.',
    1:'Tampoco es ordinal, que es una subcategoría de variable cualitativa; el número de crisis es una cantidad numérica, no una categoría con orden.',
    3:'No es continua: al ser el resultado de contar (no de medir), solo toma valores enteros, sin decimales posibles.'
  },
  trampa:'Confundir "es un número" con "es continua", sin distinguir si ese número proviene de contar (discreta) o de medir (continua).',
  obj:'Clasificar correctamente una variable obtenida por conteo como cuantitativa discreta.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['variable discreta','contar','crisis convulsivas','clasificación de variables']
},
{
  id:'U7-S-Q21', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Tendencia central', sub:'Moda en variables cualitativas',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la única medida de tendencia central que puede calcularse para una variable cualitativa, como el diagnóstico más frecuente en una consulta?',
  ops:['La media', 'La mediana', 'La moda', 'El rango'],
  ok:2,
  clave:'La moda es la única medida de tendencia central aplicable a variables cualitativas.',
  exp:'La moda es el valor (o categoría) que aparece con mayor frecuencia en un conjunto de datos, y es la única medida de tendencia central que tiene sentido calcular para variables cualitativas, porque no requiere que los datos tengan un orden numérico ni que sea posible sumarlos: solo requiere poder contar frecuencias de aparición de cada categoría. La media y la mediana requieren que la variable sea al menos ordinal (mediana) o cuantitativa con significado aritmético (media), y el rango es una medida de dispersión, no de tendencia central, y tampoco aplica a variables cualitativas nominales.',
  no:{
    0:'La media requiere que los valores puedan sumarse con significado aritmético real, algo que no aplica a categorías cualitativas nominales.',
    1:'La mediana requiere poder ordenar los datos de menor a mayor, lo cual no tiene sentido para una variable cualitativa nominal sin orden intrínseco.',
    3:'El rango es una medida de dispersión, no de tendencia central, y tampoco es calculable de forma significativa para variables cualitativas nominales.'
  },
  trampa:'Intentar calcular una media o mediana de categorías nominales (como diagnósticos) solo porque numéricamente se les podría asignar un código.',
  obj:'Identificar la moda como la medida de tendencia central aplicable a variables cualitativas.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['moda','variable cualitativa','tendencia central','diagnóstico frecuente']
},
{
  id:'U7-S-Q22', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Tendencia central', sub:'Distribución simétrica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'En una distribución perfectamente simétrica, como la distribución normal, ¿qué relación existe entre la media, la mediana y la moda?',
  ops:[
    'La media siempre es mayor que la mediana y la moda',
    'Las tres medidas coinciden aproximadamente en el mismo valor central',
    'La moda siempre es mayor que la media',
    'No existe ninguna relación predecible entre ellas'
  ],
  ok:1,
  clave:'En una distribución simétrica, media, mediana y moda coinciden aproximadamente.',
  exp:'En una distribución perfectamente simétrica (como la distribución normal ideal), la media, la mediana y la moda coinciden aproximadamente en el mismo valor central, precisamente porque no hay una cola de valores extremos hacia ningún lado que desplace a la media respecto a las otras dos medidas. Esta coincidencia es, de hecho, uno de los indicios que sugieren que una distribución es razonablemente simétrica, y su ausencia (medidas notablemente distintas entre sí) sugiere asimetría.',
  no:{
    0:'Esa relación (media > mediana) es característica de una distribución con asimetría POSITIVA, no de una distribución simétrica.',
    2:'No hay una regla general de que la moda sea siempre mayor que la media; en una distribución simétrica, ambas coinciden aproximadamente.',
    3:'Sí existe una relación predecible y bien conocida: en una distribución simétrica, las tres medidas convergen aproximadamente al mismo valor.'
  },
  trampa:'Aplicar a una distribución simétrica una relación (como media > mediana) que en realidad corresponde a una distribución asimétrica.',
  obj:'Describir la relación entre media, mediana y moda en una distribución simétrica.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['distribución simétrica','media','mediana','moda']
},
{
  id:'U7-S-Q23', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Dispersión', sub:'Rango',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la principal limitación del rango como medida de dispersión?',
  ops:[
    'No puede calcularse para variables cuantitativas',
    'Es muy sensible a un solo valor extremo y no dice nada sobre cómo se distribuyen los datos intermedios',
    'Siempre da el mismo resultado que la desviación estándar',
    'Requiere que los datos sigan una distribución normal'
  ],
  ok:1,
  clave:'El rango depende solo de los dos valores extremos, es muy sensible a outliers y no informa sobre los datos intermedios.',
  exp:'El rango es la diferencia entre el valor máximo y el valor mínimo de un conjunto de datos. Su principal limitación es que depende únicamente de esos dos valores extremos, así que un solo dato atípico puede alterarlo drásticamente, y no aporta ninguna información sobre cómo están distribuidos el resto de los datos intermedios -dos conjuntos de datos con el mismo rango pueden tener distribuciones internas completamente distintas entre sí.',
  no:{
    0:'El rango sí puede calcularse para cualquier variable cuantitativa; de hecho, es una de las medidas de dispersión más simples y directas de obtener.',
    2:'El rango y la desviación estándar son medidas distintas, calculadas de forma diferente, y no coinciden necesariamente en su valor.',
    3:'El cálculo del rango no depende de ningún supuesto sobre la distribución de los datos; es simplemente una resta entre el máximo y el mínimo.'
  },
  trampa:'Subestimar la sensibilidad del rango a valores extremos, tratándolo como una medida tan robusta como la desviación estándar o el rango intercuartílico.',
  obj:'Explicar la principal limitación del rango como medida de dispersión.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['rango','dispersión','valores extremos','limitación']
},
{
  id:'U7-S-Q24', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Dispersión', sub:'Información completa',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Dos grupos de pacientes tienen exactamente la misma presión arterial media (130 mmHg). En el grupo A, todos los valores están entre 125 y 135 mmHg. En el grupo B, los valores van de 90 a 180 mmHg.',
  enunciado:'¿Por qué reportar solo la media de ambos grupos sería una forma de información clínica incompleta?',
  ops:[
    'Porque la media siempre es incorrecta si no se acompaña de la mediana',
    'Porque, pese a tener la misma media, ambos grupos son clínicamente muy distintos: el grupo B incluye tanto pacientes hipotensos como severamente hipertensos, algo que la media sola no revela',
    'Porque la presión arterial nunca debe resumirse con una medida de tendencia central',
    'Porque el grupo B tiene, en realidad, una media distinta a la del grupo A'
  ],
  ok:1,
  clave:'La misma media puede esconder dispersiones muy distintas con implicaciones clínicas muy diferentes.',
  exp:'Aunque ambos grupos comparten la misma media (130 mmHg), su dispersión es radicalmente distinta: en el grupo A todos los pacientes están cerca del promedio, mientras que en el grupo B hay pacientes con presión muy baja y otros con presión muy alta, una situación clínica mucho más heterogénea y de mayor riesgo colectivo. Reportar únicamente la media, sin su medida de dispersión correspondiente (como la desviación estándar), oculta esta diferencia clínicamente relevante entre ambos grupos, por eso ambas medidas siempre deben reportarse juntas.',
  no:{
    0:'No se trata de que la media sea "incorrecta"; el problema es que, sin una medida de dispersión, la media sola no cuenta toda la historia clínicamente relevante.',
    2:'La presión arterial sí puede y suele resumirse con una medida de tendencia central; el punto es que debe acompañarse siempre de una medida de dispersión.',
    3:'Según el enunciado del caso, ambos grupos tienen exactamente la misma media (130 mmHg); lo que difiere es la dispersión de los valores individuales.'
  },
  trampa:'Asumir que dos grupos con la misma media son necesariamente similares entre sí, sin considerar la dispersión de los datos.',
  obj:'Justificar por qué la media debe reportarse siempre junto con una medida de dispersión.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['dispersión','media','presión arterial','información incompleta']
},
{
  id:'U7-S-Q25', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Dispersión', sub:'Rango intercuartílico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué representa el rango intercuartílico (la "caja" de un diagrama de caja)?',
  ops:[
    'La diferencia entre el valor máximo y el mínimo de todo el conjunto de datos',
    'El 50% central de los datos, entre el primer cuartil (Q1) y el tercer cuartil (Q3)',
    'El valor promedio de todos los datos',
    'El dato que aparece con mayor frecuencia'
  ],
  ok:1,
  clave:'El rango intercuartílico abarca del primer al tercer cuartil, el 50% central de los datos.',
  exp:'El rango intercuartílico es la diferencia entre el tercer cuartil (Q3, bajo el cual está el 75% de los datos) y el primer cuartil (Q1, bajo el cual está el 25% de los datos), y representa al 50% central de los datos ordenados, dejando fuera el 25% más bajo y el 25% más alto. En un diagrama de caja, esta es precisamente la región que forma la "caja" central, y es una medida de dispersión más resistente a valores extremos que el rango total, porque no depende de los valores mínimo y máximo absolutos.',
  no:{
    0:'Esa definición corresponde al rango total (máximo menos mínimo), no al rango intercuartílico, que se limita al 50% central de los datos.',
    2:'El rango intercuartílico no es un promedio; es una medida de dispersión basada en la posición de los cuartiles, no de tendencia central.',
    3:'El dato más frecuente es la moda, una medida de tendencia central distinta, sin relación directa con el rango intercuartílico.'
  },
  trampa:'Confundir el rango intercuartílico con el rango total, cuando el primero se limita específicamente al 50% central de los datos.',
  obj:'Definir el rango intercuartílico y su relación con los cuartiles.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['rango intercuartílico','cuartiles','diagrama de caja','dispersión']
},
{
  id:'U7-S-Q26', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Probabilidad', sub:'Regla de la suma',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Para calcular la probabilidad de que un paciente sea fumador O tenga hipertensión (condiciones que pueden coexistir en la misma persona), ¿qué ajuste debe hacerse respecto a simplemente sumar ambas probabilidades individuales?',
  ops:[
    'No se necesita ningún ajuste: siempre se suman directamente',
    'Debe restarse la probabilidad de que el paciente tenga ambas condiciones a la vez, para no contarla dos veces',
    'Debe multiplicarse por dos el resultado de la suma',
    'Es imposible calcular esta probabilidad si los eventos no son mutuamente excluyentes'
  ],
  ok:1,
  clave:'Cuando los eventos pueden coexistir, se resta la probabilidad de que ocurran ambos, para no duplicarla en la suma.',
  exp:'Ser fumador y tener hipertensión son condiciones que pueden coexistir en la misma persona, así que no son mutuamente excluyentes. Al sumar directamente la probabilidad de ser fumador más la probabilidad de tener hipertensión, la probabilidad de que un paciente tenga AMBAS condiciones a la vez se cuenta dos veces (una en cada probabilidad individual). Para corregir esto, la regla de la suma para eventos no mutuamente excluyentes exige restar la probabilidad de que ocurran ambos simultáneamente, evitando ese doble conteo.',
  no:{
    0:'Sumar directamente sin ajuste solo es válido cuando los eventos son mutuamente excluyentes, lo cual no es el caso aquí, ya que ambas condiciones pueden coexistir.',
    2:'No se multiplica por dos; el ajuste correcto es restar la probabilidad de la intersección (ambos eventos a la vez), no duplicar el resultado.',
    3:'Sí es posible calcularla, aplicando la regla de la suma con el ajuste correspondiente para eventos no mutuamente excluyentes.'
  },
  trampa:'Aplicar la regla de la suma simple (solo sumar) a eventos que pueden coexistir, sin el ajuste necesario para evitar el doble conteo.',
  obj:'Aplicar correctamente la regla de la suma para eventos que no son mutuamente excluyentes.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['regla de la suma','eventos no excluyentes','probabilidad','fumador e hipertensión']
},
{
  id:'U7-S-Q27', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Probabilidad', sub:'Regla del producto',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Dos pruebas diagnósticas independientes entre sí tienen, cada una, una probabilidad de falso positivo del 5% en personas sanas. ¿Cómo se calcula la probabilidad de que AMBAS den un falso positivo en la misma persona sana?',
  ops:[
    'Sumando las dos probabilidades: 5% + 5% = 10%',
    'Multiplicando las dos probabilidades: 5% × 5% = 0.25%',
    'Es la misma probabilidad que una sola prueba: 5%',
    'No puede calcularse sin más información sobre las pruebas'
  ],
  ok:1,
  clave:'Para eventos independientes, la probabilidad conjunta ("Y") es el producto de las probabilidades individuales.',
  exp:'Para calcular la probabilidad de que ocurran DOS eventos independientes a la vez (uno Y el otro), se aplica la regla del producto: se multiplican las probabilidades individuales. En este caso, 5% × 5% = 0.25%, una probabilidad mucho menor que la de un solo falso positivo aislado. Este cálculo es precisamente la razón estadística por la que combinar dos pruebas diagnósticas verdaderamente independientes entre sí reduce mucho la probabilidad de un doble error, lo cual es parte del fundamento de pedir pruebas confirmatorias con mecanismos distintos.',
  no:{
    0:'Sumar las probabilidades es la regla para el evento "uno U otro" (al menos uno), no para el evento "ambos a la vez", que requiere multiplicar.',
    2:'La probabilidad conjunta de dos eventos independientes NO es igual a la de uno solo; al multiplicar dos probabilidades menores que 1, el resultado siempre es menor que cualquiera de ellas por separado.',
    3:'Sí puede calcularse con la información dada, aplicando directamente la regla del producto para eventos independientes.'
  },
  trampa:'Confundir la regla de la suma (para "uno u otro") con la regla del producto (para "uno y otro"), aplicando la incorrecta según lo que realmente pregunta el enunciado.',
  obj:'Aplicar la regla del producto para calcular la probabilidad conjunta de dos eventos independientes.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['regla del producto','eventos independientes','falso positivo','pruebas diagnósticas']
},
{
  id:'U7-S-Q28', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Probabilidad', sub:'Eventos dependientes',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué tener un familiar de primer grado con una enfermedad hereditaria y padecer uno mismo esa enfermedad NO son eventos independientes?',
  ops:[
    'Porque son exactamente el mismo evento',
    'Porque la ocurrencia de uno (el antecedente familiar) sí modifica la probabilidad del otro (padecer la enfermedad uno mismo)',
    'Porque ambos eventos son mutuamente excluyentes',
    'Porque nunca puede calcularse la probabilidad de enfermedades hereditarias'
  ],
  ok:1,
  clave:'Tener un familiar afectado sí cambia (aumenta) la probabilidad de padecer la enfermedad: son eventos dependientes.',
  exp:'Dos eventos son dependientes cuando la ocurrencia de uno modifica la probabilidad del otro. Tener un familiar de primer grado con una enfermedad hereditaria aumenta la probabilidad de padecerla uno mismo, precisamente por el componente genético compartido -esa es la definición misma de dependencia entre eventos. Esto contrasta con eventos genuinamente independientes (como el sexo de hijos sucesivos de una pareja), donde la ocurrencia de uno no aporta ninguna información sobre la probabilidad del otro.',
  no:{
    0:'Son dos eventos distintos (uno es el antecedente familiar, otro es padecer la enfermedad uno mismo), no el mismo evento repetido.',
    2:'Ser mutuamente excluyentes significa que no pueden ocurrir ambos a la vez, lo cual no aplica aquí: una persona puede tener el antecedente familiar Y padecer la enfermedad simultáneamente.',
    3:'Sí puede calcularse la probabilidad de enfermedades hereditarias, considerando precisamente la dependencia entre el antecedente familiar y el riesgo individual.'
  },
  trampa:'Confundir "eventos dependientes" con "el mismo evento" o con "eventos mutuamente excluyentes", que son conceptos distintos entre sí.',
  obj:'Reconocer un ejemplo clínico de eventos dependientes y explicar por qué no son independientes.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['eventos dependientes','independencia','enfermedad hereditaria','antecedente familiar']
},
{
  id:'U7-S-Q29', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Distribución normal', sub:'Regla empírica 68-95-99.7',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Según la regla empírica de la distribución normal, ¿qué proporción aproximada de los datos cae dentro de ±2 desviaciones estándar de la media?',
  ops:['68%', '95%', '99.7%', '50%'],
  ok:1,
  clave:'Aproximadamente el 95% de los datos cae dentro de ±2 desviaciones estándar en una distribución normal.',
  exp:'La regla empírica establece que, en una distribución normal, aproximadamente el 68% de los datos cae dentro de ±1 desviación estándar de la media, aproximadamente el 95% dentro de ±2 desviaciones estándar, y aproximadamente el 99.7% dentro de ±3 desviaciones estándar. Esta regla es, de hecho, la razón práctica por la que muchos rangos de referencia de laboratorio se construyen como "media ± 2 desviaciones estándar": ese rango captura, por definición estadística, aproximadamente al 95% de una población sana.',
  no:{
    0:'El 68% corresponde a ±1 desviación estándar, no a ±2.',
    2:'El 99.7% corresponde a ±3 desviaciones estándar, no a ±2.',
    3:'El 50% no corresponde a ningún múltiplo entero de desviación estándar en la regla empírica estándar.'
  },
  trampa:'Confundir los porcentajes correspondientes a cada número de desviaciones estándar de la regla empírica (68-95-99.7).',
  obj:'Aplicar la regla empírica para determinar la proporción de datos dentro de un número dado de desviaciones estándar.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['regla empírica','distribución normal','desviación estándar','68-95-99.7']
},
{
  id:'U7-S-Q30', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Distribución normal', sub:'Rango de referencia',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un rango de referencia de laboratorio se define como "media ± 2 desviaciones estándar" de una población sana. Un paciente sano tiene un valor justo fuera de ese rango.',
  enunciado:'¿Cómo debe interpretarse este resultado, considerando cómo se construyó el rango de referencia?',
  ops:[
    'Automáticamente indica que el paciente tiene una enfermedad',
    'Es un hallazgo esperado en aproximadamente el 5% de las personas sanas, precisamente porque el rango de referencia se definió para incluir solo al 95% central de la población sana',
    'Indica que el laboratorio cometió un error de medición',
    'Significa que el rango de referencia está mal calculado'
  ],
  ok:1,
  clave:'El rango de ±2 desviaciones estándar excluye, por diseño estadístico, a un 5% de personas sanas.',
  exp:'Si el rango de referencia se define como media ± 2 desviaciones estándar, por la regla empírica ese rango captura aproximadamente al 95% de una población sana, dejando fuera de forma esperada (no patológica) a un 5% de personas sanas cuyo valor simplemente cae en el extremo de la distribución normal. Por tanto, un valor "fuera del rango normal" en un paciente por lo demás sano no significa automáticamente enfermedad: puede tratarse simplemente de ese 5% esperado por el propio diseño estadístico del rango, y debe interpretarse en el contexto clínico completo, no de forma aislada.',
  no:{
    0:'Un valor fuera del rango de referencia no indica automáticamente enfermedad, precisamente por el diseño estadístico del propio rango, que excluye por definición a una fracción de personas sanas.',
    2:'No necesariamente hay un error de medición; el hallazgo es estadísticamente esperado en una fracción de la población sana, dado cómo se construyó el rango.',
    3:'El rango no está mal calculado; está funcionando exactamente como fue diseñado estadísticamente, incluyendo al 95% central y dejando fuera al 5% restante.'
  },
  trampa:'Interpretar cualquier valor fuera del rango de referencia como sinónimo automático de enfermedad, sin considerar cómo se construyó estadísticamente ese rango.',
  obj:'Interpretar correctamente un resultado fuera del rango de referencia considerando su construcción estadística.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['rango de referencia','regla empírica','distribución normal','interpretación clínica']
},
{
  id:'U7-S-Q31', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Distribución normal', sub:'Puntuación z',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué representa una puntuación z de -1.5 para un dato específico?',
  ops:[
    'El dato está 1.5 unidades por debajo del valor máximo posible',
    'El dato está 1.5 desviaciones estándar por debajo de la media de su distribución',
    'El dato representa el percentil 1.5 de la distribución',
    'El dato es imposible dentro de una distribución normal'
  ],
  ok:1,
  clave:'Una puntuación z indica a cuántas desviaciones estándar de la media se encuentra un dato.',
  exp:'La puntuación z se calcula como (valor - media) dividido entre la desviación estándar, y expresa a cuántas desviaciones estándar se encuentra un dato específico respecto a la media de su distribución. Un z de -1.5 significa que el dato está 1.5 desviaciones estándar POR DEBAJO de la media (el signo negativo indica la dirección: por debajo de la media). Esta conversión permite comparar valores de distintas variables o poblaciones en una escala común y estandarizada.',
  no:{
    0:'La puntuación z no se refiere al valor máximo posible de la distribución, sino a la distancia respecto a la media, medida en desviaciones estándar.',
    2:'La puntuación z no es directamente un percentil, aunque ambos conceptos están relacionados; el percentil se deriva a partir del valor z usando la distribución normal, no es el mismo número.',
    3:'Un z de -1.5 es un valor perfectamente posible y relativamente común dentro de una distribución normal, sin nada de excepcional o imposible en él.'
  },
  trampa:'Confundir la puntuación z con un percentil directo, o malinterpretar el significado del signo negativo como si indicara un valor imposible.',
  obj:'Interpretar correctamente el significado de una puntuación z específica.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['puntuación z','desviación estándar','distribución normal','percentil']
},
{
  id:'U7-S-Q32', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Distribución normal', sub:'Utilidad de la puntuación z',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es útil convertir un valor de laboratorio a una puntuación z antes de compararlo con un valor de otra variable distinta, medida en otras unidades?',
  ops:[
    'Porque la puntuación z elimina la necesidad de cualquier medida de dispersión',
    'Porque la puntuación z estandariza ambos valores a una escala común (desviaciones estándar respecto a su propia media), independiente de las unidades originales',
    'Porque la puntuación z siempre da como resultado el mismo número para cualquier variable',
    'Porque la puntuación z solo se puede calcular para una variable a la vez, nunca para comparar dos'
  ],
  ok:1,
  clave:'La puntuación z estandariza cualquier valor a una escala común, permitiendo comparar variables distintas.',
  exp:'La puntuación z convierte cualquier valor a "cuántas desviaciones estándar de su propia media está", una escala estandarizada y sin unidades. Esto permite comparar directamente valores de variables completamente distintas -por ejemplo, comparar qué tan atípico es un valor de glucosa frente a qué tan atípico es un valor de presión arterial en el mismo paciente-, algo que no tendría sentido comparando directamente los valores crudos en sus unidades originales (mg/dL frente a mmHg).',
  no:{
    0:'La puntuación z no elimina la necesidad de la desviación estándar; de hecho, la usa directamente en su cálculo.',
    2:'La puntuación z no da siempre el mismo resultado; varía según qué tan lejos esté cada valor específico de la media de su propia distribución.',
    3:'La puntuación z se calcula para cada variable de forma independiente, y es precisamente eso lo que permite comparar los resultados estandarizados de varias variables entre sí.'
  },
  trampa:'No entender que el valor de la utilidad de la puntuación z está en la estandarización (eliminar unidades), no en alguna propiedad mágica del cálculo en sí.',
  obj:'Explicar la utilidad de la puntuación z para comparar variables medidas en unidades distintas.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['puntuación z','estandarización','comparación de variables','distribución normal']
},
{
  id:'U7-S-Q33', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Muestreo', sub:'Muestreo estratificado',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un investigador quiere asegurarse de que su muestra de estudio incluya una representación proporcional de cada grupo etario (niños, adultos, adultos mayores) de la población de interés.',
  enunciado:'¿Qué tipo de muestreo es el más apropiado para este objetivo?',
  ops:['Muestreo aleatorio simple', 'Muestreo estratificado', 'Muestreo por conveniencia', 'Muestreo de voluntarios'],
  ok:1,
  clave:'El muestreo estratificado divide la población en subgrupos y garantiza representación proporcional de cada uno.',
  exp:'El muestreo estratificado divide primero a la población en subgrupos (estratos) según una característica relevante -en este caso, el grupo etario- y luego selecciona una muestra aleatoria dentro de cada estrato, lo que garantiza representación proporcional de cada subgrupo. Esto es precisamente lo que necesita el investigador del caso, a diferencia del muestreo aleatorio simple, que no asegura por sí solo una representación adecuada de subgrupos específicos, especialmente si alguno de ellos es relativamente pequeño en la población general.',
  no:{
    0:'El muestreo aleatorio simple no garantiza representación proporcional de subgrupos específicos; por puro azar podría subrepresentar a alguno de ellos.',
    2:'El muestreo por conveniencia selecciona participantes según su facilidad de acceso, no según ningún criterio de representación proporcional por estrato.',
    3:'El muestreo de voluntarios depende de quién decide participar, lo cual introduce sesgo de selección y tampoco garantiza representación proporcional por grupo etario.'
  },
  trampa:'Asumir que cualquier método de muestreo aleatorio garantiza automáticamente representación proporcional de subgrupos específicos, sin distinguir estratificado de aleatorio simple.',
  obj:'Identificar el muestreo estratificado como el método apropiado para garantizar representación proporcional de subgrupos.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['muestreo estratificado','representatividad','subgrupos','muestreo aleatorio simple']
},
{
  id:'U7-S-Q34', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Muestreo', sub:'Sesgo de voluntario',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué reclutar participantes exclusivamente mediante voluntarios que responden a un anuncio puede introducir sesgo de selección?',
  ops:[
    'Porque los voluntarios siempre mienten en sus respuestas',
    'Porque las personas que aceptan participar voluntariamente suelen diferir sistemáticamente de las que no aceptan, distorsionando la representatividad de la muestra',
    'Porque los voluntarios nunca pueden ser incluidos en ningún tipo de estudio',
    'Porque el tamaño de la muestra de voluntarios siempre es insuficiente'
  ],
  ok:1,
  clave:'Los voluntarios suelen diferir sistemáticamente de quienes no se ofrecen, lo que distorsiona la representatividad.',
  exp:'El sesgo de voluntario ocurre porque las personas que aceptan participar voluntariamente en un estudio tienden a diferir sistemáticamente de las que no aceptan -por ejemplo, suelen estar más preocupadas por su salud, tener más tiempo disponible, o tener características particulares que las motivan a participar-, lo que hace que la muestra final no represente fielmente a la población general de interés. No se trata de que los voluntarios mientan, sino de que el propio método de reclutamiento selecciona sistemáticamente a un tipo particular de persona.',
  no:{
    0:'El sesgo de voluntario no se refiere a la veracidad de las respuestas, sino a que el grupo que se ofrece a participar no representa fielmente a la población general.',
    2:'Los voluntarios sí pueden y de hecho frecuentemente se incluyen en estudios; el problema es específicamente la representatividad de la muestra así obtenida, no la exclusión total de este tipo de participantes.',
    3:'El problema del sesgo de voluntario no es de tamaño de muestra, sino de representatividad: incluso una muestra grande de voluntarios puede seguir estando sesgada.'
  },
  trampa:'Confundir el sesgo de selección con problemas de veracidad de los datos o de tamaño muestral, en vez de reconocerlo como un problema de representatividad del método de reclutamiento.',
  obj:'Explicar el mecanismo del sesgo de voluntario en el reclutamiento de participantes.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['sesgo de voluntario','sesgo de selección','representatividad','reclutamiento']
},
{
  id:'U7-S-Q35', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Muestreo', sub:'Tamaño vs. representatividad',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una muestra muy grande no corrige necesariamente un problema de sesgo de selección?',
  ops:[
    'Porque el tamaño de la muestra solo afecta la precisión de las estimaciones, no corrige un sesgo sistemático en la forma en que se seleccionó a los participantes',
    'Porque las muestras grandes siempre son representativas por definición',
    'Porque el sesgo de selección desaparece automáticamente al superar los 1000 participantes',
    'Porque el tamaño de la muestra y la representatividad son exactamente el mismo concepto'
  ],
  ok:0,
  clave:'El tamaño de la muestra mejora la precisión, pero no corrige un sesgo sistemático de selección, que depende del método usado.',
  exp:'El tamaño de la muestra afecta la precisión de las estimaciones (una muestra más grande generalmente da intervalos de confianza más estrechos), pero no corrige un sesgo de selección: una muestra enorme pero sistemáticamente sesgada seguirá dando resultados distorsionados, simplemente con más "confianza" estadística aparente en un resultado que sigue siendo incorrecto. La representatividad depende del MÉTODO de selección (que no introduzca sesgo sistemático), no del tamaño de la muestra obtenida con ese método.',
  no:{
    1:'Las muestras grandes no son representativas por definición; pueden ser grandes y, al mismo tiempo, estar sistemáticamente sesgadas si el método de selección fue deficiente.',
    2:'No existe un umbral numérico de tamaño muestral que corrija automáticamente un sesgo de selección; el sesgo depende del método, no de la cantidad de participantes.',
    3:'Tamaño de muestra y representatividad son conceptos relacionados pero distintos: uno mide cantidad, el otro mide qué tan bien la muestra refleja a la población de interés.'
  },
  trampa:'Asumir que "más participantes" siempre significa "mejor estudio", sin distinguir entre el problema de precisión (que sí mejora con el tamaño) y el problema de sesgo (que no).',
  obj:'Distinguir el efecto del tamaño de muestra sobre la precisión del efecto del método de selección sobre la representatividad.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['tamaño de muestra','representatividad','sesgo de selección','precisión']
},
{
  id:'U7-S-Q36', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Tablas de contingencia', sub:'Estructura 2x2',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'En la convención habitual para construir una tabla de contingencia 2x2 en un estudio de exposición y enfermedad, ¿dónde se coloca cada variable?',
  ops:[
    'La variable dependiente (enfermedad) en las filas y la independiente (exposición) en las columnas',
    'La variable independiente (exposición) en las filas y la dependiente (enfermedad) en las columnas',
    'No existe ninguna convención establecida para esto',
    'Ambas variables se colocan siempre en la misma fila'
  ],
  ok:1,
  clave:'Convención habitual: variable independiente (exposición) en filas, variable dependiente (enfermedad) en columnas.',
  exp:'La convención habitual para construir una tabla de contingencia 2x2 coloca a la variable independiente (la exposición, el factor de riesgo, o el resultado de una prueba diagnóstica) en las filas, y a la variable dependiente (el desenlace, la presencia o ausencia de la enfermedad) en las columnas. Esta estructura es la base directa para calcular medidas como sensibilidad, especificidad, riesgo relativo y razón de momios, y seguirla de forma consistente facilita la interpretación y comparación entre distintos estudios y tablas.',
  no:{
    0:'Es al revés de la convención habitual: la variable dependiente (enfermedad) se coloca típicamente en las columnas, no en las filas.',
    2:'Sí existe una convención ampliamente seguida (aunque no sea una regla matemática absoluta), que facilita la interpretación estandarizada de estas tablas.',
    3:'Ambas variables no se colocan en la misma fila; una tabla de contingencia 2x2 cruza dos variables distintas, una en filas y otra en columnas.'
  },
  trampa:'Invertir la convención de filas y columnas, lo que puede llevar a errores al calcular o interpretar medidas derivadas de la tabla.',
  obj:'Aplicar la convención habitual de construcción de una tabla de contingencia 2x2.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['tabla de contingencia','variable independiente','variable dependiente','2x2']
},
{
  id:'U7-S-Q37', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Variable independiente y dependiente', sub:'Distinción conceptual',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'En un ensayo clínico que evalúa si un nuevo fármaco reduce la mortalidad, ¿cuál es la variable independiente y cuál la dependiente?',
  ops:[
    'Independiente: la mortalidad. Dependiente: el tratamiento asignado',
    'Independiente: el tratamiento asignado (fármaco o placebo). Dependiente: la mortalidad observada',
    'Ambas son la misma variable en este diseño',
    'No se puede determinar sin conocer el tamaño de la muestra'
  ],
  ok:1,
  clave:'El tratamiento asignado es la variable independiente (la posible causa); la mortalidad es la dependiente (el desenlace).',
  exp:'La variable independiente es la que se considera como posible causa o predictor, y que en un ensayo clínico el investigador asigna directamente: en este caso, el tratamiento (fármaco o placebo). La variable dependiente es el desenlace que se observa y que potencialmente depende de esa asignación: la mortalidad. La pregunta de investigación se formula como "¿el tratamiento (independiente) se asocia con la mortalidad (dependiente)?", nunca al revés, porque no tendría sentido lógico plantear que la mortalidad determina qué tratamiento recibió el paciente en este diseño.',
  no:{
    0:'Está invertido: la mortalidad es el desenlace que se observa (dependiente), y el tratamiento es lo que se asigna como posible causa (independiente).',
    2:'Son conceptualmente distintas en este diseño: una es la intervención asignada, la otra es el resultado observado tras esa intervención.',
    3:'La distinción entre variable independiente y dependiente es conceptual, basada en el diseño del estudio, y no depende del tamaño de la muestra utilizada.'
  },
  trampa:'Invertir cuál variable es la causa/predictor asignado y cuál es el desenlace observado, especialmente en diseños donde ambas parecen relacionadas.',
  obj:'Identificar correctamente la variable independiente y la dependiente en un diseño de ensayo clínico.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['variable independiente','variable dependiente','ensayo clínico','tratamiento']
},
{
  id:'U7-S-Q38', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Frecuencia esperada', sub:'Lógica de las pruebas de asociación',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la lógica general detrás de comparar la frecuencia observada contra la frecuencia esperada en una tabla de contingencia, como en la prueba de chi-cuadrado?',
  ops:[
    'Se compara para verificar que no haya errores de captura de datos, sin relación con la asociación entre variables',
    'Cuanto mayor sea la diferencia entre lo observado y lo que se esperaría bajo el supuesto de independencia entre las variables, más evidencia hay de que sí existe una asociación real entre ellas',
    'La frecuencia esperada siempre debe ser igual a la observada para que el estudio sea válido',
    'Esta comparación solo aplica a variables cuantitativas continuas'
  ],
  ok:1,
  clave:'Una gran diferencia entre lo observado y lo esperado bajo independencia sugiere asociación real entre las variables.',
  exp:'La frecuencia esperada es el número de observaciones que se esperaría en cada celda de la tabla SI no existiera ninguna asociación real entre las dos variables (bajo el supuesto de independencia). Comparar la frecuencia observada (los datos reales) contra esta frecuencia esperada es la lógica central de pruebas como la de chi-cuadrado: cuanto mayor sea la diferencia entre ambas, más evidencia estadística hay de que las variables SÍ están realmente asociadas, y que la diferencia observada no se debe simplemente al azar.',
  no:{
    0:'No se trata de verificar errores de captura de datos; es una herramienta estadística específicamente diseñada para evaluar si existe asociación real entre dos variables.',
    2:'No es un requisito de validez que ambas frecuencias coincidan; de hecho, una gran diferencia entre ellas es justamente lo que sugiere una asociación real, el resultado de interés en este tipo de análisis.',
    3:'Esta lógica aplica específicamente a variables categóricas organizadas en tablas de contingencia, no a variables cuantitativas continuas analizadas de otra forma.'
  },
  trampa:'Malinterpretar el propósito de comparar frecuencias observadas y esperadas, pensando que buscan igualdad en vez de evaluar si la diferencia es lo suficientemente grande como para sugerir asociación real.',
  obj:'Explicar la lógica general de comparar frecuencia observada y esperada para evaluar asociación entre variables.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['frecuencia esperada','chi-cuadrado','asociación','independencia']
},
{
  id:'U7-S-Q39', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Tablas de contingencia', sub:'Aplicación diagnóstica',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un investigador organiza los resultados de una nueva prueba diagnóstica (positiva o negativa) frente al diagnóstico confirmado por el estándar de referencia (enfermo o sano) en una tabla 2x2.',
  enunciado:'¿Qué tipo de medidas se pueden calcular directamente a partir de esta tabla de contingencia?',
  ops:[
    'Solo la media y la desviación estándar de la edad de los pacientes',
    'Medidas como sensibilidad, especificidad y valores predictivos de la prueba diagnóstica',
    'Únicamente el coeficiente de variación',
    'Ninguna medida útil, porque se necesitan variables continuas'
  ],
  ok:1,
  clave:'Una tabla de contingencia 2x2 de prueba diagnóstica vs. enfermedad permite calcular sensibilidad, especificidad y valores predictivos.',
  exp:'Una tabla de contingencia 2x2 que cruza el resultado de una prueba diagnóstica (positiva/negativa) con la condición real del paciente según el estándar de referencia (enfermo/sano) es precisamente la estructura de la que se derivan directamente medidas como la sensibilidad (capacidad de detectar correctamente a los enfermos), la especificidad (capacidad de identificar correctamente a los sanos), y los valores predictivos positivo y negativo. Estas medidas son fundamentales para evaluar el desempeño de cualquier prueba diagnóstica.',
  no:{
    0:'La media y la desviación estándar de la edad no se derivan de esta tabla de contingencia, que cruza dos variables categóricas (resultado de la prueba y condición real), no la edad de los pacientes.',
    2:'El coeficiente de variación es una medida de dispersión relativa para variables cuantitativas, no algo que se calcule a partir de una tabla de contingencia categórica.',
    3:'Esta tabla sí permite calcular medidas útiles y ampliamente usadas en la práctica clínica, precisamente por estar organizada como una tabla de contingencia de variables categóricas.'
  },
  trampa:'No reconocer que una tabla de contingencia de prueba diagnóstica frente a enfermedad es exactamente la estructura de la que se derivan sensibilidad y especificidad.',
  obj:'Relacionar la estructura de una tabla de contingencia 2x2 con las medidas diagnósticas que se derivan de ella.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['tabla de contingencia','sensibilidad','especificidad','prueba diagnóstica']
},
{
  id:'U7-S-Q40', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Tablas de contingencia', sub:'Interpretación de asociación',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Si, al organizar los datos en una tabla de contingencia, la frecuencia observada en cada celda es prácticamente idéntica a la frecuencia esperada bajo independencia, ¿qué sugiere esto sobre la relación entre las dos variables?',
  ops:[
    'Sugiere una asociación muy fuerte entre las variables',
    'Sugiere que no hay evidencia de asociación real entre las variables; los datos son consistentes con que sean independientes entre sí',
    'Indica que los datos fueron mal recolectados',
    'Indica que una de las dos variables debe eliminarse del análisis'
  ],
  ok:1,
  clave:'Frecuencias observadas muy cercanas a las esperadas bajo independencia sugieren ausencia de asociación real.',
  exp:'Cuando la frecuencia observada en cada celda de la tabla de contingencia es muy similar a la frecuencia que se esperaría SI las dos variables fueran independientes entre sí, esto sugiere que los datos son consistentes con la ausencia de una asociación real: no hay evidencia de que una variable esté relacionada con la otra más allá de lo que el azar explicaría. Es exactamente el resultado opuesto al que sugeriría una gran diferencia entre frecuencia observada y esperada, que apuntaría hacia una asociación real.',
  no:{
    0:'Una asociación fuerte se sugeriría por una GRAN diferencia entre lo observado y lo esperado, no por una coincidencia cercana entre ambas.',
    2:'Una coincidencia cercana entre frecuencia observada y esperada no indica un error de recolección de datos; es simplemente el patrón esperado si las variables son realmente independientes.',
    3:'No hay ninguna razón, a partir de este resultado, para eliminar una variable del análisis; simplemente sugiere que esa asociación particular no parece existir en los datos.'
  },
  trampa:'Invertir la interpretación: pensar que una coincidencia cercana entre observado y esperado indica asociación fuerte, cuando en realidad indica lo contrario.',
  obj:'Interpretar correctamente una cercanía entre frecuencia observada y esperada como ausencia de asociación.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['frecuencia esperada','frecuencia observada','independencia','asociación']
},
{
  id:'U7-S-Q41', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Validez y confiabilidad', sub:'Error sistemático',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un tensiómetro mal calibrado marca sistemáticamente 10 mmHg por encima del valor real de presión arterial en todos los pacientes en los que se usa.',
  enunciado:'¿Qué tipo de error introduce este tensiómetro, y se corrige repitiendo la medición varias veces en el mismo paciente?',
  ops:[
    'Error aleatorio; sí se corrige promediando varias mediciones',
    'Error sistemático; NO se corrige repitiendo la medición, porque el sesgo se repite de forma constante cada vez',
    'No es un error de ningún tipo, es una variación normal',
    'Error aleatorio; tampoco se corrige repitiendo la medición'
  ],
  ok:1,
  clave:'Un sesgo constante en una dirección es error sistemático, y no se corrige repitiendo la medición.',
  exp:'Un tensiómetro que siempre marca 10 mmHg por encima del valor real introduce un error sistemático (o sesgo): una desviación constante y predecible en una dirección determinada. Este tipo de error NO se corrige repitiendo la medición varias veces, porque el mismo sesgo se repite de forma consistente en cada nueva medición -promediar diez mediciones de este tensiómetro seguiría dando un resultado 10 mmHg por encima del real. Esto contrasta con el error aleatorio, una dispersión inconsistente entre mediciones, que sí puede reducirse promediando varias repeticiones.',
  no:{
    0:'No es un error aleatorio, sino sistemático: la desviación es constante y en la misma dirección cada vez, no dispersa de forma inconsistente.',
    2:'Sí es un error real y clínicamente relevante (de validez), no una variación normal esperable de la medición.',
    3:'Es correcto que no se corrige repitiendo la medición, pero el tipo de error es sistemático, no aleatorio.'
  },
  trampa:'Confundir error sistemático con error aleatorio, o asumir que cualquier tipo de error se corrige simplemente repitiendo la medición varias veces.',
  obj:'Identificar un error sistemático y explicar por qué no se corrige con mediciones repetidas.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['error sistemático','validez','tensiómetro','sesgo']
},
{
  id:'U7-S-Q42', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Validez y confiabilidad', sub:'Error aleatorio',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué estrategia permite reducir el efecto del error aleatorio en una medición?',
  ops:[
    'Recalibrar el instrumento una sola vez',
    'Promediar varias mediciones repetidas de la misma variable',
    'Ninguna estrategia puede reducir el error aleatorio',
    'Usar un instrumento distinto cada vez que se mide'
  ],
  ok:1,
  clave:'El error aleatorio se reduce promediando varias mediciones repetidas, a diferencia del error sistemático.',
  exp:'El error aleatorio es una dispersión inconsistente entre mediciones repetidas de la misma variable, sin un patrón constante en una dirección determinada. A diferencia del error sistemático (que se repite igual cada vez y no se corrige por repetición), el error aleatorio sí puede reducirse promediando varias mediciones repetidas: como las desviaciones aleatorias tienden a distribuirse tanto por encima como por debajo del valor real, el promedio de muchas mediciones tiende a acercarse más al valor verdadero que una sola medición aislada.',
  no:{
    0:'Recalibrar el instrumento aborda más bien el error sistemático (un problema de exactitud), no específicamente el error aleatorio (un problema de consistencia).',
    2:'Sí existe una estrategia efectiva: promediar mediciones repetidas reduce el impacto del error aleatorio, aprovechando que las desviaciones tienden a cancelarse entre sí en promedio.',
    3:'Cambiar de instrumento en cada medición no reduce el error aleatorio de forma sistemática; de hecho, podría introducir variabilidad adicional entre instrumentos distintos.'
  },
  trampa:'Aplicar al error aleatorio una estrategia de corrección (recalibración) que en realidad corresponde al error sistemático, o asumir erróneamente que ningún error puede reducirse.',
  obj:'Identificar la estrategia adecuada para reducir el error aleatorio en una medición.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['error aleatorio','confiabilidad','mediciones repetidas','reproducibilidad']
},
{
  id:'U7-S-Q43', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Validez y confiabilidad', sub:'Independencia de los conceptos',
  dif:3, hab:'Comprensión', tipo:'caso', verificado:true,
  caso:'Una báscula mal calibrada marca siempre 3 kg de más en cada pesaje, pero da resultados muy consistentes entre sí (siempre marca esos mismos 3 kg de más, sin variar).',
  enunciado:'¿Cómo debe describirse esta báscula en términos de validez y confiabilidad?',
  ops:[
    'Ni válida ni confiable',
    'Válida pero no confiable',
    'Confiable pero no válida',
    'Válida y confiable a la vez'
  ],
  ok:2,
  clave:'Es confiable (consistente entre mediciones) pero no válida (no refleja el peso real).',
  exp:'Esta báscula es muy confiable: da resultados consistentes entre sí de una medición a otra, sin dispersión aleatoria (siempre el mismo error de +3 kg). Sin embargo, NO es válida: no refleja el peso real del paciente, porque tiene un error sistemático constante. Este caso ilustra que validez y confiabilidad son propiedades independientes entre sí: un instrumento puede ser muy consistente (confiable) y, al mismo tiempo, estar sistemáticamente equivocado (no válido) -la consistencia del error no lo convierte en un error menos real.',
  no:{
    0:'La báscula sí es confiable, porque sus mediciones son consistentes entre sí; el problema es exclusivamente de validez, no de ambas propiedades a la vez.',
    1:'Es al revés de lo descrito: la báscula NO es válida (no refleja el peso real) pero SÍ es confiable (consistente entre mediciones).',
    3:'No es válida, precisamente porque el error sistemático de +3 kg hace que nunca refleje el peso real del paciente, aunque sí sea consistente (confiable).'
  },
  trampa:'Asumir que un instrumento con resultados consistentes (confiable) tiene que ser automáticamente válido también, sin reconocer que ambas propiedades son independientes.',
  obj:'Distinguir validez de confiabilidad aplicando ambos conceptos a un ejemplo concreto con error sistemático.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['validez','confiabilidad','error sistemático','báscula']
},
{
  id:'U7-S-Q44', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Validez', sub:'Relación con sensibilidad y especificidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'En el contexto de una prueba diagnóstica, ¿con qué conceptos se relaciona más directamente la validez de esa prueba?',
  ops:[
    'Con el costo económico de realizar la prueba',
    'Con la sensibilidad y la especificidad: qué tan bien la prueba distingue entre quienes tienen la enfermedad y quienes no',
    'Con el tiempo que tarda en procesarse la muestra',
    'Con la facilidad de acceso a la prueba en el sistema de salud'
  ],
  ok:1,
  clave:'La validez de una prueba diagnóstica se relaciona con su sensibilidad y especificidad.',
  exp:'En el contexto de una prueba diagnóstica, la validez se relaciona directamente con qué tan bien la prueba distingue realmente entre quienes tienen la enfermedad y quienes no la tienen -es decir, con su sensibilidad (capacidad de detectar correctamente a los enfermos) y su especificidad (capacidad de identificar correctamente a los sanos). Una prueba con alta sensibilidad y especificidad refleja fielmente la condición real del paciente, que es precisamente la definición de validez aplicada a un instrumento diagnóstico.',
  no:{
    0:'El costo económico es una consideración práctica relevante para la implementación de una prueba, pero no es lo que define su validez como instrumento de medición.',
    2:'El tiempo de procesamiento es una consideración operativa, no relacionada con qué tan bien la prueba mide realmente la presencia o ausencia de la enfermedad.',
    3:'La facilidad de acceso es una consideración de disponibilidad del sistema de salud, no una propiedad de la validez de la prueba en sí misma.'
  },
  trampa:'Confundir la validez de una prueba diagnóstica (una propiedad de su capacidad de medición) con consideraciones prácticas de implementación (costo, tiempo, acceso).',
  obj:'Relacionar el concepto de validez con la sensibilidad y especificidad en el contexto diagnóstico.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['validez','sensibilidad','especificidad','prueba diagnóstica']
},
{
  id:'U7-S-Q45', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Confiabilidad', sub:'Uso clínico individual',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un instrumento de medición es válido en promedio (no tiene sesgo sistemático), pero sus mediciones individuales varían mucho de una vez a otra en el mismo paciente, sin ningún patrón consistente.',
  enunciado:'¿Por qué este instrumento puede seguir siendo problemático para tomar una decisión clínica en un paciente individual, pese a ser válido en promedio?',
  ops:[
    'No es problemático en absoluto, porque la validez es la única propiedad que importa clínicamente',
    'Porque una medición individual aislada, en un paciente específico, puede estar muy alejada del valor real debido a la baja confiabilidad, aunque el instrumento acierte "en promedio" a través de muchas mediciones',
    'Porque la validez y la confiabilidad son exactamente lo mismo, así que esto es imposible',
    'Porque este escenario nunca ocurre en la práctica clínica real'
  ],
  ok:1,
  clave:'Baja confiabilidad implica que una medición individual puede estar muy lejos del valor real, aunque el promedio de muchas mediciones sea acertado.',
  exp:'Que un instrumento sea válido "en promedio" significa que, si se repitieran muchísimas mediciones, su promedio se acercaría al valor verdadero. Pero en la práctica clínica, generalmente se toma UNA medición (o pocas) en un paciente individual, no un promedio de cientos de mediciones. Si el instrumento tiene baja confiabilidad (alta dispersión aleatoria entre mediciones repetidas), esa medición individual y aislada puede estar muy lejos del valor real de ESE paciente en ESE momento, aunque el instrumento sea, en teoría, válido en promedio. Por eso, para uso clínico individual, se necesitan ambas propiedades: validez Y confiabilidad.',
  no:{
    0:'La confiabilidad también importa clínicamente, especialmente para decisiones basadas en una medición individual aislada, como suele ocurrir en la práctica real.',
    2:'Validez y confiabilidad son conceptualmente distintos e independientes entre sí; este escenario (válido en promedio, poco confiable individualmente) es perfectamente posible.',
    3:'Este escenario sí puede ocurrir en la práctica: instrumentos con baja precisión pero sin sesgo sistemático detectable en el agregado son una situación real y clínicamente relevante.'
  },
  trampa:'Asumir que la validez "en promedio" es suficiente garantía para confiar en una medición clínica individual, sin considerar el papel de la confiabilidad en ese contexto específico.',
  obj:'Explicar por qué la confiabilidad es necesaria además de la validez para el uso clínico de una medición individual.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['confiabilidad','validez','uso clínico individual','error aleatorio']
},
{
  id:'U7-S-Q46', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Fuentes de datos en salud', sub:'Censo',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué aporta el censo poblacional que resulta indispensable para calcular la mayoría de las tasas de salud pública?',
  ops:[
    'El número exacto de muertes por cada causa específica',
    'El denominador poblacional, necesario para calcular tasas como la de mortalidad por cada 100,000 habitantes',
    'El diagnóstico detallado de cada enfermedad en la población',
    'La lista de medicamentos disponibles en el sistema de salud'
  ],
  ok:1,
  clave:'El censo aporta el denominador poblacional necesario para calcular cualquier tasa de salud pública.',
  exp:'El censo es un recuento que intenta incluir a la totalidad de la población de un territorio, y su principal aporte para las estadísticas de salud pública es proporcionar el denominador poblacional necesario para calcular tasas -por ejemplo, para calcular una tasa de mortalidad por cada 100,000 habitantes, es indispensable conocer con razonable precisión el tamaño total de esa población, dato que aporta el censo. Sin ese denominador, un número absoluto de casos o muertes no puede convertirse en una tasa comparable entre distintas poblaciones o momentos.',
  no:{
    0:'El número de muertes por causa específica proviene de los registros vitales (defunciones), no del censo, que cuenta a la población viva total.',
    2:'El diagnóstico detallado de enfermedades proviene de los sistemas de información en salud (registros clínicos), no del censo poblacional.',
    3:'La disponibilidad de medicamentos no es información que aporte el censo poblacional, que se centra en el conteo de la población.'
  },
  trampa:'Confundir el censo (conteo de población) con otras fuentes de datos de salud (registros vitales, sistemas de información clínica), que responden preguntas distintas.',
  obj:'Explicar el aporte específico del censo poblacional para el cálculo de tasas de salud pública.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['censo','denominador poblacional','tasa de mortalidad','salud pública']
},
{
  id:'U7-S-Q47', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Fuentes de datos en salud', sub:'Subregistro',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el subregistro de nacimientos y defunciones en zonas rurales de difícil acceso puede distorsionar las estadísticas vitales oficiales de mortalidad materna e infantil?',
  ops:[
    'Porque hace que las tasas oficiales sobreestimen la mortalidad real',
    'Porque los eventos que ocurren pero nunca se registran formalmente hacen que las tasas calculadas a partir de esos registros subestimen sistemáticamente la magnitud real del problema',
    'Porque el subregistro no tiene ningún efecto sobre las tasas calculadas',
    'Porque el subregistro solo afecta a las estadísticas de enfermedades infecciosas, nunca a la mortalidad materna o infantil'
  ],
  ok:1,
  clave:'Los eventos no registrados hacen que las tasas oficiales subestimen la mortalidad real.',
  exp:'Los registros vitales son la fuente primaria de las estadísticas de mortalidad materna e infantil, pero su calidad depende de qué tan completo sea el registro en la práctica. En contextos con subregistro -nacimientos o defunciones que ocurren realmente, sobre todo en zonas rurales o de difícil acceso, pero que nunca llegan a registrarse formalmente-, las tasas calculadas a partir de esos registros incompletos subestiman sistemáticamente la magnitud real del problema, porque el numerador (número de eventos) está incompleto mientras el problema real (la magnitud verdadera de la mortalidad) sigue siendo mayor que lo que reflejan las cifras oficiales.',
  no:{
    0:'Es al revés: el subregistro produce una SUBestimación de la mortalidad real en las estadísticas oficiales, no una sobreestimación.',
    2:'El subregistro sí tiene un efecto real y significativo sobre las tasas calculadas, precisamente al dejar fuera eventos que ocurrieron pero nunca se documentaron.',
    3:'El subregistro puede afectar a cualquier tipo de evento vital, incluyendo específicamente la mortalidad materna e infantil, que es frecuentemente uno de los indicadores más afectados en contextos de acceso limitado a registro civil.'
  },
  trampa:'Invertir el efecto del subregistro, pensando que produce sobreestimación en vez de subestimación de la magnitud real del problema.',
  obj:'Explicar el efecto del subregistro sobre la precisión de las estadísticas vitales oficiales.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['subregistro','registros vitales','mortalidad materna','mortalidad infantil']
},
{
  id:'U7-S-Q48', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Fuentes de datos en salud', sub:'Vigilancia epidemiológica',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica distingue a un sistema de información en salud, usado para vigilancia epidemiológica, del censo poblacional?',
  ops:[
    'El sistema de información en salud permite monitoreo continuo y detección temprana de brotes; el censo es una fotografía puntual, realizada cada varios años',
    'Ambos son exactamente el mismo tipo de fuente de datos, con el mismo propósito',
    'El censo permite detectar brotes en tiempo real; el sistema de información en salud no',
    'El sistema de información en salud solo se usa una vez cada diez años, igual que el censo'
  ],
  ok:0,
  clave:'El sistema de información en salud permite monitoreo continuo; el censo es una fotografía puntual y periódica.',
  exp:'Un sistema de información en salud recopila datos de forma continua y sistemática, generalmente a partir de los registros generados durante la atención clínica rutinaria, lo que lo convierte en la base de la vigilancia epidemiológica: permite comparar lo observado en tiempo real contra el patrón histórico esperado, y así detectar de forma temprana brotes o cambios inusuales en la frecuencia de una enfermedad. El censo, en cambio, es un recuento poblacional puntual, realizado cada varios años, diseñado para otro propósito (conocer el tamaño y composición de la población), no para el monitoreo continuo de eventos de salud.',
  no:{
    1:'No son el mismo tipo de fuente: difieren en su propósito, en la frecuencia de recolección y en el tipo de información que capturan.',
    2:'Es al revés: el sistema de información en salud es el que permite monitoreo continuo y detección de brotes; el censo, por su periodicidad de varios años, no sirve para eso.',
    3:'El sistema de información en salud está diseñado precisamente para recolección continua, a diferencia del censo, que sí tiene esa periodicidad de varios años.'
  },
  trampa:'Confundir el propósito y la frecuencia de recolección del censo con los de un sistema de información en salud orientado a vigilancia epidemiológica continua.',
  obj:'Distinguir el sistema de información en salud del censo poblacional por su propósito y frecuencia de recolección.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['sistema de información en salud','vigilancia epidemiológica','censo','detección de brotes']
},
{
  id:'U7-S-Q49', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Fuentes de datos en salud', sub:'Registros vitales',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué eventos demográficos registran principalmente los registros vitales de un país?',
  ops:[
    'Solo el número de camas hospitalarias disponibles',
    'Nacimientos, defunciones y, en muchos países, matrimonios y otros eventos demográficos relevantes',
    'Únicamente el número de consultas médicas realizadas al año',
    'Solo los brotes epidémicos declarados oficialmente'
  ],
  ok:1,
  clave:'Los registros vitales documentan formalmente nacimientos, defunciones y otros eventos demográficos clave.',
  exp:'Los registros vitales son el sistema legal y administrativo de registro obligatorio de eventos demográficos fundamentales: nacimientos, defunciones y, en muchos países, matrimonios y otros eventos relevantes. Son la fuente primaria de las estadísticas vitales -tasas de natalidad, mortalidad general, mortalidad infantil y materna, esperanza de vida-, y su completitud y precisión determinan directamente la calidad de esas estadísticas oficiales.',
  no:{
    0:'El número de camas hospitalarias es un indicador de infraestructura de salud, no un evento demográfico registrado por los registros vitales.',
    2:'El número de consultas médicas es un dato de utilización de servicios de salud, que se recopila en sistemas de información en salud, no en los registros vitales.',
    3:'Los brotes epidémicos se documentan mediante sistemas de vigilancia epidemiológica, no son el objeto principal de los registros vitales.'
  },
  trampa:'Confundir los registros vitales con otras fuentes de datos de salud (infraestructura, utilización de servicios, vigilancia de brotes) que documentan cosas distintas.',
  obj:'Identificar los eventos demográficos principales que documentan los registros vitales.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['registros vitales','nacimientos','defunciones','estadísticas vitales']
},
{
  id:'U7-S-Q50', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Fuentes de datos en salud', sub:'Comparación de fuentes',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'Un investigador quiere calcular la tasa de mortalidad infantil de una región. ¿Qué combinación de fuentes de datos necesita?',
  ops:[
    'Solo el censo, sin ninguna otra fuente',
    'Los registros vitales, para obtener el número de defunciones infantiles (numerador), y el censo (o sus proyecciones), para obtener la población de referencia (denominador)',
    'Solo un sistema de información en salud, sin necesidad de registros vitales ni censo',
    'Ninguna fuente de datos oficial es necesaria; basta con una encuesta pequeña'
  ],
  ok:1,
  clave:'Calcular una tasa requiere el numerador (defunciones, de registros vitales) y el denominador (población, del censo).',
  exp:'Calcular cualquier tasa, incluida la de mortalidad infantil, requiere dos componentes: el numerador (el número de eventos de interés -en este caso, defunciones infantiles-, que se obtiene de los registros vitales) y el denominador (la población de referencia sobre la que se calcula la tasa -en este caso, el número de nacidos vivos en el mismo periodo, también documentado en los registros vitales, o la población infantil correspondiente, que se apoya en datos censales). Ninguna fuente por sí sola basta: se necesita la combinación de ambos tipos de datos para construir una tasa con sentido.',
  no:{
    0:'El censo por sí solo no aporta el número de defunciones infantiles (el numerador), que proviene de los registros vitales.',
    2:'Un sistema de información en salud clínico no sustituye a los registros vitales ni al censo para este cálculo específico, que depende de registros formales de nacimientos y defunciones y de datos poblacionales.',
    3:'Una encuesta pequeña no tiene la cobertura ni la representatividad necesaria para calcular con precisión una tasa oficial de mortalidad infantil de toda una región; se requieren las fuentes de datos formales y sistemáticas.'
  },
  trampa:'Pensar que una sola fuente de datos basta para calcular una tasa, sin reconocer que se necesita tanto el numerador (eventos) como el denominador (población) de fuentes distintas y complementarias.',
  obj:'Identificar la combinación de fuentes de datos necesarias para calcular una tasa de mortalidad infantil.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['tasa de mortalidad infantil','registros vitales','censo','numerador y denominador']
}

]);
