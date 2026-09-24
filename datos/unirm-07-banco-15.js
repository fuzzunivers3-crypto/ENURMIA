/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 7, TANDA DE ESTADISTICA I (1/2)
   Amplia Estadistica I de 9 a 50 preguntas junto con banco-16.js.
   Esta parte cubre tipos de variables, tendencia central,
   dispersion, presentacion de datos, probabilidad y distribucion
   normal (temas 1-6).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== ESTADISTICA I ===================== */
{
  id:'U7-S-Q10', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Tipos de variables', sub:'Nominal vs. ordinal',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de las siguientes variables es un ejemplo de variable cualitativa ORDINAL?',
  ops:['Grupo sanguíneo', 'Estadio tumoral (I, II, III, IV)', 'Sexo', 'Tipo de parto (vaginal o cesárea)'],
  ok:1,
  clave:'El estadio tumoral tiene un orden lógico intrínseco entre sus categorías: es ordinal.',
  exp:'Una variable cualitativa es ordinal cuando sus categorías tienen un orden lógico entre sí, aunque la distancia entre ellas no sea numéricamente uniforme. El estadio tumoral (I, II, III, IV) cumple esta condición: se puede afirmar razonablemente que un estadio III es "más avanzado" que un estadio I. El grupo sanguíneo, el sexo y el tipo de parto son variables nominales: sus categorías no tienen un orden intrínseco entre sí.',
  no:{
    0:'El grupo sanguíneo (A, B, AB, O) es nominal: no existe un orden lógico entre esas categorías.',
    2:'El sexo es una variable nominal, sin orden intrínseco entre sus categorías.',
    3:'El tipo de parto (vaginal o cesárea) es nominal, sin un orden lógico entre ambas categorías.'
  },
  trampa:'Asumir que cualquier variable con varias categorías es automáticamente ordinal. Solo lo es cuando existe un orden lógico real entre ellas.',
  obj:'Identificar una variable cualitativa ordinal y distinguirla de una nominal.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['variable ordinal','variable nominal','estadio tumoral','escalas de medición']
},
{
  id:'U7-S-Q11', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Tipos de variables', sub:'Discreta vs. continua',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál de las siguientes es una variable cuantitativa DISCRETA?',
  ops:['La talla de un paciente', 'El número de embarazos previos de una paciente', 'La concentración de glucosa en sangre', 'La temperatura corporal'],
  ok:1,
  clave:'El número de embarazos se obtiene contando, solo toma valores enteros: es discreta.',
  exp:'Una variable cuantitativa discreta solo puede tomar valores enteros específicos, generalmente el resultado de contar algo -nunca se tienen 2.5 embarazos. La talla, la glucosa en sangre y la temperatura corporal son variables continuas: se obtienen midiendo, y pueden tomar cualquier valor dentro de un rango, incluyendo decimales.',
  no:{
    0:'La talla se mide, no se cuenta, y puede tomar cualquier valor decimal dentro de un rango: es continua.',
    2:'La concentración de glucosa se mide, con posibles valores decimales: es continua.',
    3:'La temperatura corporal se mide, con valores decimales posibles (36.8°C, por ejemplo): es continua.'
  },
  trampa:'Confundir "número de" con variable discreta automáticamente sin verificar si realmente se obtiene contando o midiendo.',
  obj:'Distinguir una variable cuantitativa discreta de una continua mediante ejemplos clínicos.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['variable discreta','variable continua','contar','medir']
},
{
  id:'U7-S-Q12', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Tendencia central', sub:'Media vs. mediana',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un estudio del tiempo de estancia hospitalaria de 20 pacientes, la mayoría estuvo internada entre 2 y 4 días, pero dos pacientes con complicaciones graves permanecieron 45 y 60 días respectivamente.',
  enunciado:'¿Qué medida de tendencia central representa mejor la experiencia típica de este grupo de pacientes?',
  ops:['La media, porque usa todos los datos', 'La mediana, porque no se distorsiona por los valores extremos de los dos pacientes con estancias muy prolongadas', 'La moda, porque siempre es la más representativa', 'Ninguna medida de tendencia central es útil en este caso'],
  ok:1,
  clave:'La mediana es resistente a valores extremos, y por eso representa mejor al grupo típico en este caso.',
  exp:'Los dos pacientes con estancias de 45 y 60 días son valores extremos (outliers) que elevarían considerablemente la media del grupo, dando una impresión distorsionada de que "el paciente típico" tiene una estancia mucho más larga de lo que realmente experimenta la mayoría. La mediana, al depender solo de la posición central de los datos ordenados y no de la magnitud de los valores extremos, sigue reflejando fielmente que la mayoría de los pacientes estuvo internada entre 2 y 4 días, siendo más representativa en este escenario de asimetría marcada.',
  no:{
    0:'Usar todos los datos es precisamente lo que hace que la media se distorsione por los dos valores extremos; no es una ventaja en este contexto.',
    2:'La moda no siempre es la más representativa; en este caso, con datos numéricos continuos, la mediana es la medida más apropiada frente a la asimetría.',
    3:'Sí hay una medida útil y apropiada para este escenario: la mediana, precisamente por su resistencia a los valores extremos.'
  },
  trampa:'Elegir la media por costumbre, sin considerar que su sensibilidad a valores extremos la hace poco representativa cuando existen datos muy alejados del resto.',
  obj:'Justificar el uso de la mediana frente a la media ante datos con valores extremos.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['mediana','media','valores extremos','asimetría']
},
{
  id:'U7-S-Q13', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Asimetría', sub:'Relación media-mediana',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'En un conjunto de datos, la media es notablemente mayor que la mediana. ¿Qué tipo de asimetría sugiere esta relación?',
  ops:['Asimetría negativa (cola hacia la izquierda)', 'Asimetría positiva (cola hacia la derecha)', 'Distribución perfectamente simétrica', 'No es posible determinar la asimetría con esta información'],
  ok:1,
  clave:'Media > mediana indica asimetría positiva, con una cola de valores altos que eleva la media.',
  exp:'Cuando la media es mayor que la mediana, la distribución tiene asimetría positiva (hacia la derecha): existe una cola de valores relativamente altos que "jala" la media hacia arriba, mientras que la mediana, resistente a esos valores extremos, permanece más cercana al centro real de la mayoría de los datos. Esta relación entre ambas medidas es, de hecho, una forma rápida de sospechar la forma de la distribución sin necesidad de graficarla.',
  no:{
    0:'La asimetría negativa correspondería a media MENOR que mediana, con una cola de valores bajos, lo contrario de lo descrito.',
    2:'En una distribución simétrica, la media y la mediana serían aproximadamente iguales, no notablemente distintas como en este caso.',
    3:'Precisamente la relación entre media y mediana sí permite sospechar el tipo de asimetría, sin necesidad de más información.'
  },
  trampa:'Invertir la dirección de la asimetría, confundiendo cuál relación (media mayor o menor que mediana) corresponde a cada tipo.',
  obj:'Relacionar la comparación entre media y mediana con el tipo de asimetría de una distribución.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['asimetría positiva','media','mediana','distribución']
},
{
  id:'U7-S-Q14', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Dispersión', sub:'Desviación estándar vs. varianza',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué se prefiere reportar la desviación estándar en lugar de la varianza en la práctica clínica habitual?',
  ops:[
    'Porque la varianza no puede calcularse para variables continuas',
    'Porque la desviación estándar conserva las mismas unidades que los datos originales, mientras que la varianza queda en unidades al cuadrado',
    'Porque la desviación estándar siempre es un número más pequeño',
    'Porque la varianza es más sensible a valores extremos que la desviación estándar'
  ],
  ok:1,
  clave:'La desviación estándar mantiene las unidades originales; la varianza queda en unidades al cuadrado, poco intuitivas.',
  exp:'La varianza se calcula elevando al cuadrado las distancias de cada dato respecto a la media, lo que deja el resultado en unidades al cuadrado (por ejemplo, mmHg², una unidad poco intuitiva clínicamente). La desviación estándar es la raíz cuadrada de la varianza, lo que la devuelve a las unidades originales de la variable (mmHg), haciéndola directamente interpretable y comparable con los datos crudos -por eso se prefiere en la práctica, aunque ambas midan, en esencia, lo mismo.',
  no:{
    0:'La varianza sí puede calcularse para variables cuantitativas continuas; de hecho, es una de sus aplicaciones principales.',
    2:'La desviación estándar no es necesariamente un número más pequeño en términos absolutos comparables; la razón de preferirla es de unidades, no de magnitud.',
    3:'Ambas medidas derivan del mismo cálculo (la desviación estándar es la raíz cuadrada de la varianza) y tienen la misma sensibilidad relativa a los valores extremos.'
  },
  trampa:'Buscar una diferencia de sensibilidad o de magnitud entre ambas medidas, cuando la razón real de preferencia es puramente de interpretabilidad de las unidades.',
  obj:'Explicar por qué la desviación estándar es preferible a la varianza para la interpretación clínica.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['desviación estándar','varianza','unidades','dispersión']
},
{
  id:'U7-S-Q15', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Dispersión', sub:'Coeficiente de variación',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un investigador quiere comparar la variabilidad relativa de la talla (en cm) y el peso (en kg) de un mismo grupo de pacientes.',
  enunciado:'¿Qué medida estadística le permite hacer esta comparación de forma válida, pese a que ambas variables están en unidades distintas?',
  ops:['La desviación estándar de cada variable, comparadas directamente', 'El coeficiente de variación de cada variable', 'El rango de cada variable', 'La media de cada variable'],
  ok:1,
  clave:'El coeficiente de variación es una medida de dispersión relativa, sin unidades, que permite comparar variables distintas entre sí.',
  exp:'El coeficiente de variación se calcula dividiendo la desviación estándar entre la media (habitualmente expresado como porcentaje), lo que produce una medida de dispersión relativa, sin unidades. Esto permite comparar la variabilidad de variables medidas en unidades distintas (como talla en cm y peso en kg) o de la misma variable en poblaciones con medias muy diferentes, algo que no se puede hacer comparando directamente las desviaciones estándar (que sí están en las unidades originales de cada variable, y por tanto no son directamente comparables entre sí).',
  no:{
    0:'Comparar directamente las desviaciones estándar de dos variables en unidades distintas no es válido, precisamente porque cada una conserva sus propias unidades no comparables entre sí.',
    2:'El rango, igual que la desviación estándar, está en las unidades originales de cada variable y tampoco permite una comparación directa válida entre variables de unidades distintas.',
    3:'La media no es una medida de dispersión, sino de tendencia central; no responde a la pregunta sobre variabilidad relativa.'
  },
  trampa:'Intentar comparar directamente medidas de dispersión que conservan las unidades originales (desviación estándar, rango) sin convertirlas primero a una escala relativa comparable.',
  obj:'Aplicar el coeficiente de variación para comparar la dispersión relativa de variables en unidades distintas.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['coeficiente de variación','dispersión relativa','desviación estándar','comparación de variables']
},
{
  id:'U7-S-Q16', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Presentación de datos', sub:'Histograma vs. gráfico de barras',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué las barras de un histograma se dibujan pegadas entre sí, sin espacio, a diferencia de un gráfico de barras convencional?',
  ops:[
    'Porque representa una variable cualitativa sin orden',
    'Porque representa una variable cuantitativa continua, agrupada en intervalos consecutivos sin "saltos" naturales entre ellos',
    'Es simplemente una convención estética sin ningún significado estadístico',
    'Porque siempre hay más de 20 categorías'
  ],
  ok:1,
  clave:'Las barras pegadas del histograma reflejan la continuidad de la variable subyacente, agrupada en intervalos.',
  exp:'El histograma se usa para representar variables cuantitativas continuas, agrupadas en intervalos (clases) de valores consecutivos. Las barras se dibujan pegadas entre sí porque la variable subyacente es continua: no existen "saltos" naturales entre un intervalo y el siguiente, ya que en principio podría haber un valor exactamente en el límite entre dos intervalos. El gráfico de barras convencional, en cambio, se usa para variables categóricas (o discretas con pocas categorías), donde cada barra representa una categoría independiente, separada por un espacio que refleja esa falta de continuidad entre categorías.',
  no:{
    0:'Es justo lo contrario: el histograma se usa para variables cuantitativas continuas, no para variables cualitativas sin orden, que usan gráficos de barras separadas.',
    2:'No es una convención puramente estética: el espacio (o su ausencia) comunica información real sobre el tipo de variable representada.',
    3:'El número de categorías o intervalos no es lo que determina si las barras van pegadas o separadas; lo determina el tipo de variable (continua o categórica/discreta).'
  },
  trampa:'Tratar la diferencia entre histograma y gráfico de barras como un simple detalle de diseño visual sin significado estadístico real.',
  obj:'Explicar por qué el histograma representa las barras sin espacio entre sí, a diferencia del gráfico de barras.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['histograma','gráfico de barras','variable continua','intervalos']
},
{
  id:'U7-S-Q17', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Presentación de datos', sub:'Diagrama de caja',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué cinco valores resume un diagrama de caja (boxplot)?',
  ops:[
    'Media, moda, varianza, desviación estándar y rango',
    'Mínimo, primer cuartil, mediana, tercer cuartil y máximo',
    'Solo la media y la desviación estándar',
    'Las frecuencias absolutas de cada categoría'
  ],
  ok:1,
  clave:'El boxplot resume mínimo, Q1, mediana, Q3 y máximo -los cinco números de resumen.',
  exp:'El diagrama de caja resume una variable cuantitativa con cinco valores: el mínimo, el primer cuartil (Q1, bajo el cual está el 25% de los datos), la mediana (Q2), el tercer cuartil (Q3, bajo el cual está el 75% de los datos) y el máximo. La caja central abarca de Q1 a Q3 (el 50% central de los datos, el rango intercuartílico), con la mediana marcada dentro de ella, mientras que los bigotes se extienden hacia los valores no considerados atípicos, y los valores más allá de ellos se marcan como posibles outliers.',
  no:{
    0:'La media, la varianza y la desviación estándar no son los valores que resume directamente un boxplot; este se basa en cuartiles y valores extremos, no en esas medidas.',
    2:'Un boxplot da mucha más información que solo media y desviación estándar; de hecho, ni siquiera marca la media por defecto, sino la mediana.',
    3:'Un boxplot no representa frecuencias de categorías; esa representación corresponde a un gráfico de barras, no a un diagrama de caja.'
  },
  trampa:'Confundir el resumen de cinco números del boxplot con otras medidas estadísticas (media, varianza) que no son las que visualiza directamente este gráfico.',
  obj:'Identificar los cinco valores que resume un diagrama de caja.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['diagrama de caja','boxplot','cuartiles','mediana']
},
{
  id:'U7-S-Q18', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Lectura crítica de gráficos', sub:'Distorsión del eje',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un gráfico de barras compara la eficacia de dos tratamientos (72% frente a 75%), pero el eje vertical comienza en 70% en lugar de en 0%, haciendo que la diferencia entre las barras se vea muy grande.',
  enunciado:'¿Qué principio de lectura crítica de gráficos permite identificar esta posible distorsión visual?',
  ops:[
    'Revisar siempre si el eje comienza en cero, porque no hacerlo puede exagerar visualmente una diferencia real pero pequeña',
    'Los gráficos de barras nunca pueden distorsionar la información, a diferencia de otros tipos de gráfico',
    'Una diferencia de solo 3 puntos porcentuales nunca puede representarse de forma engañosa',
    'El tipo de gráfico usado no influye en la percepción visual de una diferencia'
  ],
  ok:0,
  clave:'Revisar si el eje comienza en cero es la comprobación básica para detectar exageración visual de una diferencia.',
  exp:'Cuando el eje vertical de un gráfico de barras no comienza en cero, se está mostrando solo la porción superior de las barras, lo que puede hacer que una diferencia numéricamente pequeña (en este caso, 3 puntos porcentuales) se perciba visualmente como mucho más grande de lo que realmente es. Ningún número individual del gráfico es falso, pero la impresión visual que transmite sí puede ser engañosa. Por eso, revisar la escala del eje es uno de los primeros pasos de la lectura crítica de cualquier gráfico antes de aceptar la conclusión que sugiere a primera vista.',
  no:{
    1:'Los gráficos de barras sí pueden distorsionar visualmente la información, precisamente mediante manipulaciones como no iniciar el eje en cero.',
    2:'Una diferencia pequeña en términos absolutos sí puede representarse de forma visualmente engañosa si se manipula la escala del eje, como en el caso descrito.',
    3:'El tipo de gráfico y, sobre todo, cómo se construye (escalas, ejes) sí influye directamente en la percepción visual de una diferencia.'
  },
  trampa:'Aceptar la impresión visual inmediata de un gráfico sin revisar primero si la escala del eje está siendo usada para exagerar o minimizar una diferencia real.',
  obj:'Aplicar el principio de revisar la escala del eje al interpretar críticamente un gráfico.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['lectura crítica','distorsión de gráficos','escala del eje','sesgo visual']
},
{
  id:'U7-S-Q19', programa:'unirm', cuatri:7,
  esp:'Estadística I', tema:'Probabilidad', sub:'Eventos independientes',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Una pareja ya tiene un hijo varón. ¿Cómo afecta este dato a la probabilidad de que su próximo hijo también sea varón, asumiendo una probabilidad basal de 50% para cada sexo?',
  ops:[
    'Aumenta la probabilidad de que el próximo hijo sea varón',
    'No la afecta: el sexo de cada hijo es un evento independiente del sexo de los hijos anteriores',
    'Disminuye la probabilidad de que el próximo hijo sea varón, por compensación estadística',
    'La probabilidad se vuelve imposible de calcular con esta información'
  ],
  ok:1,
  clave:'El sexo de cada hijo es independiente del sexo de los hijos previos: la probabilidad basal no cambia.',
  exp:'El sexo de cada hijo de una pareja es un evento independiente del sexo de los hijos anteriores: la biología de la determinación del sexo (qué tipo de espermatozoide fecunda al óvulo en ese embarazo específico) no "recuerda" ni se ve influida por embarazos previos. Por tanto, tener ya un hijo varón no cambia la probabilidad de que el siguiente también lo sea, que sigue siendo aproximadamente la probabilidad basal (cercana al 50%). La creencia contraria (que "toca" que el siguiente sea de otro sexo, por una especie de compensación) es un error de razonamiento probabilístico frecuente.',
  no:{
    0:'No hay ningún mecanismo biológico o estadístico por el que un hijo varón previo aumente la probabilidad del siguiente; los eventos son independientes.',
    2:'La idea de "compensación estadística" (que después de un resultado, el otro se vuelve más probable para "equilibrar") es un error de razonamiento común, pero no se aplica a eventos genuinamente independientes.',
    3:'La probabilidad sí puede calcularse, y es simplemente la probabilidad basal, sin ajuste, precisamente por tratarse de eventos independientes.'
  },
  trampa:'Aplicar una lógica de "compensación" (la falacia del jugador) a eventos que son genuinamente independientes entre sí.',
  obj:'Aplicar el concepto de independencia de eventos a un ejemplo clínico-biológico concreto.',
  ref:'Dawson y Trapp, Bioestadística Médica. Daniel, Bioestadística.',
  tags:['independencia','probabilidad','falacia del jugador','determinación del sexo']
}

]);
