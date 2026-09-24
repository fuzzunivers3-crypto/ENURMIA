/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE EPIDEMIOLOGIA (2/2)
   Completa la ampliacion de Epidemiologia a 50 preguntas junto
   con banco-29.js. Esta parte cubre ensayo clinico aleatorizado,
   sesgos/confusion/interaccion, validez de pruebas diagnosticas,
   causalidad, vigilancia epidemiologica y epidemiologia de
   enfermedades transmisibles/no transmisibles (temas 8-13).
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== EPIDEMIOLOGIA ===================== */
{
  id:'U8-E-Q27', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Ensayo clínico aleatorizado', sub:'Propósito de la aleatorización',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el propósito fundamental de aleatorizar la asignación del tratamiento en un ensayo clínico?',
  ops:[
    'Distribuir de forma equilibrada, en promedio, TANTO los factores de confusión CONOCIDOS COMO los DESCONOCIDOS entre los grupos comparados',
    'Garantizar que todos los pacientes reciban exactamente el mismo tratamiento',
    'Eliminar por completo la necesidad de un grupo control',
    'La aleatorización no tiene ningún propósito metodológico real'
  ],
  ok:0,
  clave:'La aleatorización distribuye equilibradamente, en promedio, factores de confusión tanto conocidos como desconocidos entre los grupos.',
  exp:'La aleatorización asigna a los participantes al azar entre los grupos de tratamiento y control, con el propósito de distribuir de forma equilibrada, EN PROMEDIO, tanto los factores de confusión CONOCIDOS como los DESCONOCIDOS entre ambos grupos -esta es su gran ventaja sobre otros diseños: incluso variables que el investigador no sabe que son importantes tienden a distribuirse equitativamente entre los grupos comparados, gracias al azar.',
  no:{
    1:'La aleatorización determina a qué grupo pertenece cada paciente (tratamiento o control), no que todos reciban el mismo tratamiento; de hecho, el objetivo es comparar grupos con tratamientos distintos.',
    2:'La aleatorización no elimina la necesidad de un grupo control; de hecho, típicamente se usa precisamente para distribuir a los participantes entre un grupo de tratamiento y un grupo control.',
    3:'La aleatorización sí tiene un propósito metodológico central y bien establecido: el control de la confusión, tanto conocida como desconocida.'
  },
  trampa:'No reconocer que la ventaja única de la aleatorización es controlar también factores de confusión DESCONOCIDOS, algo que ningún otro método de control de confusión puede lograr.',
  obj:'Explicar el propósito de la aleatorización en un ensayo clínico.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['ensayo clínico aleatorizado','aleatorización','confusión','factores desconocidos']
},
{
  id:'U8-E-Q28', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Ensayo clínico aleatorizado', sub:'Doble ciego',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es deseable que un ensayo clínico sea DOBLE CIEGO, es decir, que ni el paciente ni el investigador que evalúa el desenlace sepan a qué grupo pertenece cada participante?',
  ops:[
    'Para evitar el sesgo del observador (evaluación distinta del desenlace según la expectativa) y el efecto placebo diferencial, que podrían distorsionar los resultados si se supiera la asignación',
    'El cegamiento no tiene ninguna utilidad real en un ensayo clínico',
    'Solo para cumplir un requisito burocrático sin ningún fundamento metodológico',
    'El doble ciego solo es relevante quirúrgicamente, nunca en tratamientos farmacológicos'
  ],
  ok:0,
  clave:'El doble ciego evita el sesgo del observador y el efecto placebo diferencial que distorsionarían los resultados si se conociera la asignación.',
  exp:'El cegamiento evita que el CONOCIMIENTO de la asignación de grupo influya en la evaluación del desenlace -si el paciente sabe qué recibió, su percepción de mejoría puede cambiar (efecto placebo diferencial); si el investigador que evalúa el desenlace lo sabe, su juicio clínico (consciente o inconscientemente) puede sesgarse hacia el resultado esperado (sesgo del observador). El doble ciego protege contra ambos problemas simultáneamente.',
  no:{
    1:'El cegamiento sí tiene una utilidad metodológica real y bien fundamentada: proteger contra el sesgo del observador y el efecto placebo diferencial.',
    2:'El cegamiento no es un mero requisito burocrático; responde a un fundamento metodológico claro relacionado con la validez de la evaluación del desenlace.',
    3:'El doble ciego es relevante en cualquier tipo de intervención donde sea posible ocultar la asignación, incluyendo tratamientos farmacológicos, no solo intervenciones quirúrgicas.'
  },
  trampa:'Subestimar el fundamento metodológico del cegamiento, tratándolo como un formalismo sin relación con la validez de los resultados.',
  obj:'Explicar el propósito metodológico del cegamiento (doble ciego) en un ensayo clínico.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['doble ciego','cegamiento','sesgo del observador','efecto placebo']
},
{
  id:'U8-E-Q29', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Ensayo clínico aleatorizado', sub:'Análisis por intención de tratar',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En un ensayo clínico, varios pacientes asignados al grupo de tratamiento nuevo abandonaron el estudio por efectos adversos y no completaron el tratamiento. El equipo de investigación decide analizar los resultados incluyendo a estos pacientes dentro del grupo de tratamiento al que fueron ORIGINALMENTE asignados, sin importar si lo completaron o no.',
  enunciado:'¿Qué principio metodológico están aplicando, y por qué es importante preservarlo?',
  ops:[
    'Análisis por intención de tratar, que preserva el beneficio de la aleatorización original y refleja mejor la efectividad real en la práctica clínica, incluyendo el abandono por efectos adversos',
    'Análisis "por protocolo", que solo incluye a quienes completaron el tratamiento tal como se planeó',
    'Ningún principio metodológico reconocido; es simplemente un error de análisis',
    'El análisis por intención de tratar solo aplica a estudios de casos y controles'
  ],
  ok:0,
  clave:'El análisis por intención de tratar mantiene a los pacientes en su grupo original asignado, preservando el beneficio de la aleatorización y reflejando la efectividad real.',
  exp:'El análisis por intención de tratar mantiene a cada participante en el grupo al que fue ORIGINALMENTE asignado por aleatorización, sin importar si completó el tratamiento, cambió de grupo o abandonó el estudio. Esto preserva el beneficio de la aleatorización original (el equilibrio de factores de confusión conocidos y desconocidos) y refleja mejor la efectividad REAL de una estrategia de tratamiento en la práctica clínica, donde el abandono y la falta de adherencia (que pueden estar relacionados con el propio tratamiento, como los efectos adversos) también ocurren.',
  no:{
    1:'Lo descrito en el caso es precisamente lo opuesto al análisis "por protocolo", que excluiría a los pacientes que no completaron el tratamiento tal como se planeó.',
    2:'El escenario descrito corresponde a un principio metodológico bien reconocido y deliberado (intención de tratar), no a un error de análisis.',
    3:'El análisis por intención de tratar es específico de los ensayos clínicos con asignación aleatoria a grupos, no de los estudios de casos y controles.'
  },
  trampa:'Confundir el análisis por intención de tratar con el análisis "por protocolo", que excluiría precisamente a los pacientes que abandonan el tratamiento.',
  obj:'Identificar y justificar el análisis por intención de tratar en un ensayo clínico.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['intención de tratar','ensayo clínico aleatorizado','análisis por protocolo','adherencia']
},
{
  id:'U8-E-Q30', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Ensayo clínico aleatorizado', sub:'Jerarquía de evidencia',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el ensayo clínico aleatorizado ocupa un lugar tan alto en la jerarquía de evidencia científica para evaluar la eficacia de una intervención?',
  ops:[
    'Porque combina asignación aleatoria (que controla la confusión conocida y desconocida) con un grupo de comparación y frecuentemente cegamiento, minimizando sesgo y confusión mejor que los diseños observacionales',
    'Porque los ensayos clínicos nunca tienen limitaciones de ningún tipo',
    'Porque todos los ensayos clínicos automáticamente incluyen a millones de participantes',
    'La jerarquía de evidencia no tiene ninguna relación con el diseño metodológico del estudio'
  ],
  ok:0,
  clave:'El ensayo clínico combina aleatorización, grupo de comparación y cegamiento, minimizando sesgo y confusión mejor que los diseños observacionales.',
  exp:'El ensayo clínico aleatorizado combina varias fortalezas metodológicas simultáneamente: la aleatorización (que controla la confusión conocida y desconocida), un grupo de comparación bien definido, y frecuentemente cegamiento (que reduce sesgo de observador y efecto placebo) -esta combinación lo hace, en general, más robusto frente a sesgo y confusión que los diseños observacionales (cohortes, casos y controles), lo cual explica su posición alta en la jerarquía de evidencia para evaluar eficacia de intervenciones.',
  no:{
    1:'Los ensayos clínicos sí tienen limitaciones importantes, como problemas de generalización (validez externa), consideraciones éticas y costos elevados, entre otras.',
    2:'El tamaño de muestra de un ensayo clínico varía ampliamente según el estudio; no todos incluyen millones de participantes, ni ese es el fundamento de su posición en la jerarquía de evidencia.',
    3:'La jerarquía de evidencia está directamente relacionada con las fortalezas y debilidades metodológicas de cada tipo de diseño de estudio.'
  },
  trampa:'Atribuir la posición alta del ensayo clínico en la jerarquía de evidencia a factores irrelevantes (como el tamaño de muestra) en vez de sus fortalezas metodológicas reales.',
  obj:'Explicar por qué el ensayo clínico aleatorizado ocupa un lugar alto en la jerarquía de evidencia.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['jerarquía de evidencia','ensayo clínico aleatorizado','sesgo','confusión']
},
{
  id:'U8-E-Q31', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Sesgo de selección', sub:'Definición y momento de aparición',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué etapa del estudio se origina el sesgo de selección, y cómo se define de forma general?',
  ops:[
    'Se origina en la etapa de RECLUTAMIENTO o SELECCIÓN de los participantes, cuando el modo en que se seleccionan introduce una distorsión sistemática de la asociación estudiada',
    'El sesgo de selección solo puede ocurrir después de que el estudio ya ha terminado y se publican los resultados',
    'El sesgo de selección es sinónimo exacto de la confusión',
    'El sesgo de selección nunca puede evitarse ni minimizarse con ningún diseño'
  ],
  ok:0,
  clave:'El sesgo de selección se origina al reclutar o seleccionar a los participantes, cuando ese proceso distorsiona sistemáticamente la asociación estudiada.',
  exp:'El sesgo de selección se origina específicamente en la etapa de RECLUTAMIENTO o SELECCIÓN de los participantes del estudio -ocurre cuando la forma en que se identifican o incluyen los sujetos (por ejemplo, sesgo de voluntario, sesgo de Berkson en pacientes hospitalizados, o una pérdida de seguimiento diferencial) introduce una distorsión sistemática en la asociación observada entre exposición y desenlace, distinta de la asociación real en la población de interés.',
  no:{
    1:'El sesgo de selección se origina en el diseño y ejecución del estudio (durante el reclutamiento o seguimiento), no después de la publicación de resultados.',
    2:'El sesgo de selección y la confusión son problemas metodológicos DISTINTOS: el sesgo de selección se relaciona con cómo se seleccionan los participantes, mientras que la confusión se relaciona con una tercera variable que distorsiona la asociación.',
    3:'El sesgo de selección sí puede minimizarse con un diseño metodológico cuidadoso, como una selección de participantes bien definida y representativa.'
  },
  trampa:'Confundir el sesgo de selección con la confusión, tratándolos como el mismo problema metodológico cuando son conceptualmente distintos.',
  obj:'Definir el sesgo de selección y su momento característico de aparición en un estudio.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['sesgo de selección','reclutamiento','sesgo de Berkson','confusión']
},
{
  id:'U8-E-Q32', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Confusión', sub:'Tres criterios de un factor confusor',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Para que una variable sea considerada un verdadero factor de confusión en la relación entre una exposición y un desenlace, ¿qué tres criterios debe cumplir simultáneamente?',
  ops:[
    'Debe estar asociada con la exposición, debe ser un factor de riesgo independiente para el desenlace, y NO debe ser un paso intermedio en la vía causal entre la exposición y el desenlace',
    'Solo necesita estar asociada con el desenlace, sin ningún otro criterio adicional',
    'Cualquier variable medida en el estudio automáticamente cumple los criterios de confusión',
    'Debe ser exactamente la misma variable que la exposición estudiada'
  ],
  ok:0,
  clave:'Un factor de confusión debe asociarse con la exposición, ser factor de riesgo independiente del desenlace, y no ser un paso intermedio en la vía causal.',
  exp:'Para ser un verdadero factor de confusión, una variable debe cumplir SIMULTÁNEAMENTE tres criterios: (1) estar asociada con la exposición estudiada, (2) ser un factor de riesgo INDEPENDIENTE para el desenlace (es decir, asociada al desenlace incluso en ausencia de la exposición), y (3) NO ser un paso intermedio en la vía causal entre la exposición y el desenlace -si fuera un paso intermedio, ajustar por ella eliminaría parte del efecto real de la exposición, en vez de corregir un sesgo.',
  no:{
    1:'Estar asociada solo con el desenlace no es suficiente; también debe estar asociada con la exposición y no ser un paso intermedio en la vía causal, para ser un verdadero factor de confusión.',
    2:'No cualquier variable cumple automáticamente los tres criterios; deben verificarse explícitamente para cada variable candidata a ser un factor de confusión.',
    3:'Un factor de confusión es una variable DISTINTA de la exposición estudiada, que se asocia tanto con la exposición como (independientemente) con el desenlace.'
  },
  trampa:'Simplificar los criterios de confusión a solo uno (como estar asociado al desenlace), sin exigir el cumplimiento simultáneo de los tres criterios, incluyendo la exclusión de los pasos intermedios en la vía causal.',
  obj:'Enunciar los tres criterios que debe cumplir un verdadero factor de confusión.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['confusión','factor confusor','vía causal','criterios de confusión']
},
{
  id:'U8-E-Q33', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Control de la confusión', sub:'Estratificación y ajuste multivariado',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Qué estrategias pueden usarse en la etapa de ANÁLISIS (después de recolectar los datos) para controlar el efecto de un factor de confusión conocido?',
  ops:[
    'La estratificación (analizar la asociación dentro de cada nivel del factor confusor) y el ajuste multivariado (mediante modelos estadísticos como la regresión)',
    'Ninguna estrategia de análisis puede controlar la confusión una vez recolectados los datos',
    'La única forma de controlar la confusión es mediante aleatorización, nunca en el análisis',
    'La confusión solo puede controlarse cambiando el tamaño de la muestra'
  ],
  ok:0,
  clave:'La estratificación y el ajuste multivariado (regresión) son estrategias de análisis para controlar un factor de confusión conocido después de recolectar los datos.',
  exp:'Si un factor de confusión fue medido durante el estudio, puede controlarse en la etapa de ANÁLISIS mediante ESTRATIFICACIÓN (calcular la asociación por separado dentro de cada nivel o categoría del factor confusor, y luego combinar los resultados) o mediante AJUSTE MULTIVARIADO (usar modelos estadísticos, como la regresión logística o de Cox, que incluyen al factor confusor como covariable para aislar el efecto independiente de la exposición de interés).',
  no:{
    1:'Sí existen estrategias de análisis efectivas para controlar la confusión posterior a la recolección de datos, siempre que el factor confusor haya sido medido.',
    2:'La aleatorización es una estrategia de control de confusión aplicada en el DISEÑO del estudio (antes de recolectar los datos), pero también existen estrategias aplicables en el ANÁLISIS, como la estratificación y el ajuste multivariado.',
    3:'El tamaño de la muestra afecta la precisión estadística (poder), pero no es la estrategia específica para controlar sesgo por confusión; para eso se requiere estratificación o ajuste multivariado.'
  },
  trampa:'Asumir que la confusión solo puede controlarse en el diseño del estudio (como con aleatorización), sin reconocer las estrategias disponibles en la etapa de análisis.',
  obj:'Identificar la estratificación y el ajuste multivariado como estrategias de análisis para controlar la confusión.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['control de confusión','estratificación','ajuste multivariado','regresión']
},
{
  id:'U8-E-Q34', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Interacción (modificación de efecto)', sub:'Diferencia con confusión',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la diferencia conceptual fundamental entre confusión e interacción (modificación de efecto)?',
  ops:[
    'La confusión es un sesgo que hay que corregir estadísticamente (distorsiona la asociación observada); la interacción es un hallazgo BIOLÓGICO real, que indica que el efecto de la exposición varía según el nivel de otra variable, y debe describirse, no "corregirse"',
    'Confusión e interacción son exactamente el mismo concepto con nombres distintos',
    'La interacción siempre debe corregirse estadísticamente igual que la confusión',
    'La confusión es un hallazgo biológico real y la interacción es un sesgo que hay que corregir'
  ],
  ok:0,
  clave:'La confusión es un sesgo a corregir; la interacción es un hallazgo real que indica que el efecto varía según otra variable, y debe describirse, no corregirse.',
  exp:'La confusión es un problema metodológico -un SESGO que distorsiona la asociación observada entre exposición y desenlace, y que debe corregirse estadísticamente (mediante estratificación o ajuste) para obtener una estimación no distorsionada. La interacción (o modificación de efecto), en cambio, es un hallazgo BIOLÓGICO o CLÍNICO real: indica que la magnitud del efecto de la exposición sobre el desenlace VARÍA genuinamente según el nivel de una tercera variable -por lo tanto, la interacción debe DESCRIBIRSE (reportando el efecto por separado en cada estrato), no "corregirse" como si fuera un error a eliminar.',
  no:{
    2:'La interacción NO debe corregirse como si fuera un sesgo; es un hallazgo real que debe describirse y reportarse por estratos, precisamente porque refleja una diferencia biológica genuina en el efecto.',
    3:'Está invertido: la confusión es el sesgo a corregir, y la interacción es el hallazgo biológico real a describir, no al revés.',
    1:'Son conceptos claramente distintos con implicaciones de manejo estadístico opuestas: uno se corrige (confusión), el otro se describe (interacción).'
  },
  trampa:'Confundir confusión con interacción, o invertir cuál de las dos debe corregirse estadísticamente y cuál debe describirse como hallazgo real.',
  obj:'Distinguir conceptualmente la confusión (sesgo a corregir) de la interacción (hallazgo real a describir).',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['interacción','modificación de efecto','confusión','estratos']
},
{
  id:'U8-E-Q35', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Validez de la prueba diagnóstica', sub:'Sensibilidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué responde la SENSIBILIDAD de una prueba diagnóstica, y en qué situación clínica es especialmente relevante una prueba muy sensible?',
  ops:[
    'Responde qué proporción de los verdaderamente ENFERMOS la prueba detecta correctamente como positivos; es especialmente relevante para DESCARTAR enfermedades graves cuando un resultado negativo debe ser confiable',
    'Responde qué proporción de los verdaderamente SANOS la prueba identifica correctamente como negativos',
    'La sensibilidad y la especificidad son exactamente el mismo concepto',
    'La sensibilidad no tiene ninguna relación con la proporción de verdaderos positivos'
  ],
  ok:0,
  clave:'La sensibilidad es la proporción de enfermos detectados correctamente; una prueba muy sensible es útil para descartar enfermedad cuando el resultado es negativo.',
  exp:'La sensibilidad es la proporción de personas VERDADERAMENTE ENFERMAS que la prueba identifica correctamente como positivas (verdaderos positivos entre todos los enfermos). Una prueba muy sensible tiene pocos falsos negativos, por lo que es especialmente útil para DESCARTAR una enfermedad grave cuando el resultado es NEGATIVO -si la prueba es muy sensible y el resultado es negativo, es poco probable que la persona realmente tenga la enfermedad (regla mnemotécnica: SnNout, sensibilidad alta, negativo descarta).',
  no:{
    1:'Esa descripción corresponde a la ESPECIFICIDAD, no a la sensibilidad; la especificidad mide la proporción de sanos correctamente identificados como negativos.',
    2:'Sensibilidad y especificidad son conceptos complementarios pero distintos, que miden aspectos diferentes del desempeño de una prueba diagnóstica (uno se enfoca en enfermos, el otro en sanos).',
    3:'La sensibilidad está directamente relacionada con la proporción de verdaderos positivos identificados entre todos los verdaderamente enfermos.'
  },
  trampa:'Confundir sensibilidad con especificidad, o no reconocer la regla mnemotécnica (SnNout) para aplicar la sensibilidad en la práctica clínica de descarte.',
  obj:'Definir la sensibilidad y explicar su utilidad clínica para descartar enfermedad.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['sensibilidad','SnNout','prueba diagnóstica','falsos negativos']
},
{
  id:'U8-E-Q36', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Validez de la prueba diagnóstica', sub:'Especificidad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué responde la ESPECIFICIDAD de una prueba diagnóstica, y en qué situación clínica es especialmente relevante una prueba muy específica?',
  ops:[
    'Responde qué proporción de los verdaderamente SANOS la prueba identifica correctamente como negativos; es especialmente relevante para CONFIRMAR una enfermedad cuando un resultado positivo debe ser confiable',
    'Responde qué proporción de los verdaderamente ENFERMOS la prueba detecta correctamente como positivos',
    'La especificidad mide exactamente lo mismo que el valor predictivo positivo',
    'La especificidad no tiene ninguna relación con la proporción de verdaderos negativos'
  ],
  ok:0,
  clave:'La especificidad es la proporción de sanos correctamente identificados; una prueba muy específica es útil para confirmar enfermedad cuando el resultado es positivo.',
  exp:'La especificidad es la proporción de personas VERDADERAMENTE SANAS que la prueba identifica correctamente como negativas (verdaderos negativos entre todos los sanos). Una prueba muy específica tiene pocos falsos positivos, por lo que es especialmente útil para CONFIRMAR una enfermedad cuando el resultado es POSITIVO -si la prueba es muy específica y el resultado es positivo, es poco probable que sea un falso positivo (regla mnemotécnica: SpPin, especificidad alta, positivo confirma).',
  no:{
    1:'Esa descripción corresponde a la SENSIBILIDAD, no a la especificidad; la sensibilidad mide la proporción de enfermos correctamente identificados como positivos.',
    2:'La especificidad es una propiedad intrínseca de la prueba (independiente de la prevalencia); el valor predictivo positivo, en cambio, SÍ depende de la prevalencia de la enfermedad en la población estudiada -son conceptos relacionados pero distintos.',
    3:'La especificidad está directamente relacionada con la proporción de verdaderos negativos identificados entre todos los verdaderamente sanos.'
  },
  trampa:'Confundir especificidad con valor predictivo positivo, sin reconocer que uno depende de la prevalencia (VPP) y el otro es intrínseco a la prueba (especificidad).',
  obj:'Definir la especificidad y explicar su utilidad clínica para confirmar enfermedad.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['especificidad','SpPin','prueba diagnóstica','falsos positivos']
},
{
  id:'U8-E-Q37', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Validez de la prueba diagnóstica', sub:'Valores predictivos y prevalencia',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'La misma prueba diagnóstica, con sensibilidad y especificidad fijas, se aplica primero en una población de bajo riesgo (baja prevalencia de la enfermedad) y después en una población de alto riesgo (alta prevalencia de la enfermedad).',
  enunciado:'¿Qué ocurre con el valor predictivo positivo (VPP) de la prueba al pasar de la población de baja prevalencia a la de alta prevalencia?',
  ops:[
    'El VPP AUMENTA al aumentar la prevalencia, porque los valores predictivos (a diferencia de la sensibilidad y especificidad) sí dependen de la prevalencia de la enfermedad en la población estudiada',
    'El VPP permanece exactamente igual, sin importar la prevalencia de la población',
    'El VPP siempre disminuye al aumentar la prevalencia',
    'La prevalencia no tiene ninguna relación con ningún parámetro de una prueba diagnóstica'
  ],
  ok:0,
  clave:'El VPP aumenta al aumentar la prevalencia, porque los valores predictivos dependen de la prevalencia, a diferencia de la sensibilidad y especificidad.',
  exp:'A diferencia de la sensibilidad y la especificidad (que son propiedades intrínsecas de la prueba, relativamente estables sin importar la población), los valores predictivos SÍ dependen directamente de la PREVALENCIA de la enfermedad en la población estudiada. Al aumentar la prevalencia, el valor predictivo positivo (VPP) AUMENTA -en una población con más enfermos reales, un resultado positivo tiene mayor probabilidad de ser un verdadero positivo, no un falso positivo. Este concepto es clave para interpretar correctamente los resultados de pruebas diagnósticas según el contexto clínico (por ejemplo, un paciente de alto riesgo con síntomas).',
  no:{
    1:'El VPP no permanece igual; cambia sustancialmente según la prevalencia de la enfermedad en la población donde se aplica la prueba.',
    2:'Es al revés: el VPP aumenta, no disminuye, al aumentar la prevalencia de la enfermedad en la población estudiada.',
    3:'La prevalencia tiene una relación directa y bien establecida con los valores predictivos (positivo y negativo), aunque no con la sensibilidad ni la especificidad.'
  },
  trampa:'Asumir que todos los parámetros de una prueba diagnóstica (sensibilidad, especificidad, VPP, VPN) son igualmente estables frente a cambios en la prevalencia, cuando solo sensibilidad y especificidad lo son.',
  obj:'Explicar cómo la prevalencia afecta al valor predictivo positivo de una prueba diagnóstica.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['valor predictivo positivo','prevalencia','sensibilidad','especificidad']
},
{
  id:'U8-E-Q38', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Validez de la prueba diagnóstica', sub:'Curva ROC',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué representa gráficamente una curva ROC (Receiver Operating Characteristic), y qué compensación (trade-off) ilustra?',
  ops:[
    'Representa la sensibilidad frente a (1-especificidad) en distintos puntos de corte posibles, ilustrando el trade-off entre sensibilidad y especificidad al mover el umbral de positividad de una prueba',
    'Representa únicamente la prevalencia de una enfermedad a lo largo del tiempo',
    'La curva ROC no tiene ninguna relación con el desempeño de una prueba diagnóstica',
    'La curva ROC solo puede usarse para pruebas cualitativas, nunca para pruebas con resultados numéricos continuos'
  ],
  ok:0,
  clave:'La curva ROC grafica sensibilidad frente a 1-especificidad en distintos puntos de corte, mostrando el trade-off al mover el umbral de positividad.',
  exp:'La curva ROC grafica la sensibilidad (eje Y) frente a (1-especificidad, es decir, la tasa de falsos positivos, eje X) en distintos puntos de corte posibles para una prueba con resultado numérico continuo. Ilustra el trade-off inevitable entre sensibilidad y especificidad: al mover el umbral de positividad para aumentar la sensibilidad, típicamente se sacrifica especificidad, y viceversa. El área bajo la curva (AUC) resume el desempeño discriminativo global de la prueba a lo largo de todos los posibles puntos de corte.',
  no:{
    1:'La curva ROC no representa la prevalencia a lo largo del tiempo; representa el trade-off entre sensibilidad y especificidad de una prueba diagnóstica en distintos puntos de corte.',
    2:'La curva ROC sí tiene relación directa con el desempeño de una prueba diagnóstica; es precisamente una herramienta central para evaluar y comparar pruebas diagnósticas.',
    3:'La curva ROC es especialmente útil para pruebas con resultados NUMÉRICOS CONTINUOS, donde el punto de corte puede ajustarse; no está limitada a pruebas cualitativas.'
  },
  trampa:'No reconocer que la curva ROC ilustra específicamente el trade-off entre sensibilidad y especificidad al variar el punto de corte de una prueba con resultado continuo.',
  obj:'Explicar qué representa una curva ROC y el trade-off que ilustra.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['curva ROC','sensibilidad','especificidad','punto de corte']
},
{
  id:'U8-E-Q39', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Causalidad', sub:'Criterios de Bradford Hill',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'De los criterios de Bradford Hill para evaluar causalidad, ¿cuál es el ÚNICO que se considera absolutamente indispensable, sin excepción?',
  ops:[
    'La temporalidad: la exposición debe preceder al desenlace en el tiempo',
    'La fuerza de la asociación (un riesgo relativo muy alto)',
    'La plausibilidad biológica del mecanismo propuesto',
    'Ninguno de los criterios de Bradford Hill se considera indispensable'
  ],
  ok:0,
  clave:'La temporalidad (la exposición debe preceder al desenlace) es el único criterio de Bradford Hill absolutamente indispensable.',
  exp:'De los criterios de Bradford Hill (temporalidad, fuerza de la asociación, gradiente biológico, consistencia, plausibilidad, entre otros), la TEMPORALIDAD -que la exposición debe preceder cronológicamente al desenlace- es el único criterio absolutamente indispensable para poder considerar una relación como causal. Los demás criterios son considerados evidencia que FORTALECE la probabilidad de causalidad, pero ninguno de ellos por sí solo, ni su ausencia, descarta o confirma causalidad de forma absoluta como sí lo hace la temporalidad.',
  no:{
    1:'La fuerza de la asociación fortalece la sospecha de causalidad, pero no es un criterio absolutamente indispensable; asociaciones causales pueden tener riesgos relativos modestos.',
    2:'La plausibilidad biológica es útil como apoyo, pero el conocimiento biológico puede estar incompleto en el momento de evaluar la asociación, así que no es un criterio absolutamente indispensable.',
    3:'Sí existe un criterio considerado absolutamente indispensable entre los de Bradford Hill: la temporalidad.'
  },
  trampa:'No reconocer la temporalidad como el único criterio verdaderamente indispensable entre todos los criterios de Bradford Hill, tratándolos todos como igualmente obligatorios (o igualmente opcionales).',
  obj:'Identificar la temporalidad como el criterio indispensable entre los criterios de Bradford Hill.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['causalidad','criterios de Bradford Hill','temporalidad','gradiente biológico']
},
{
  id:'U8-E-Q40', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Causalidad', sub:'Gradiente biológico (dosis-respuesta)',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un estudio encuentra que, a mayor número de cigarrillos fumados por día, mayor es el riesgo de cáncer de pulmón, en una relación gradual y consistente.',
  enunciado:'¿Qué criterio de causalidad de Bradford Hill ilustra este hallazgo, y por qué fortalece la sospecha de causalidad?',
  ops:[
    'Gradiente biológico (relación dosis-respuesta), que fortalece la causalidad porque es difícil explicar una relación gradual y consistente entre "dosis" de exposición y desenlace únicamente por un factor de confusión',
    'Este hallazgo no corresponde a ningún criterio de causalidad reconocido',
    'Temporalidad, ya que el hallazgo se refiere únicamente a la secuencia temporal entre exposición y desenlace',
    'Plausibilidad biológica exclusivamente, sin relación con ningún otro criterio'
  ],
  ok:0,
  clave:'El hallazgo ilustra el gradiente biológico (dosis-respuesta), que fortalece la causalidad porque es difícil de explicar solo por confusión.',
  exp:'Este hallazgo -a mayor "dosis" de exposición (cigarrillos por día), mayor riesgo del desenlace, de forma gradual y consistente- ilustra el criterio de GRADIENTE BIOLÓGICO (relación dosis-respuesta) de Bradford Hill. Fortalece la sospecha de causalidad porque es difícil explicar una relación gradual y consistente de este tipo únicamente por la acción de un factor de confusión, que tendría que replicar exactamente el mismo patrón gradual para generar una asociación espuria similar -una coincidencia menos probable que si la relación fuera simplemente binaria (expuesto o no expuesto).',
  no:{
    2:'La temporalidad se refiere específicamente a que la exposición preceda al desenlace en el tiempo, no a la relación gradual entre dosis de exposición y magnitud del riesgo descrita en el caso.',
    3:'La plausibilidad biológica se refiere a si existe un mecanismo biológico conocido que explique la asociación, no específicamente al patrón gradual dosis-respuesta descrito.',
    1:'Este hallazgo sí corresponde a un criterio de causalidad bien reconocido y nombrado específicamente: el gradiente biológico o relación dosis-respuesta.'
  },
  trampa:'Confundir el gradiente biológico (dosis-respuesta) con otros criterios de Bradford Hill como la temporalidad o la plausibilidad biológica, que responden preguntas distintas.',
  obj:'Identificar el gradiente biológico (dosis-respuesta) como criterio de causalidad en un escenario clínico.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['gradiente biológico','dosis-respuesta','criterios de Bradford Hill','causalidad']
},
{
  id:'U8-E-Q41', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Vigilancia epidemiológica', sub:'Enfermedades de notificación obligatoria',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es el propósito de designar ciertas enfermedades como de NOTIFICACIÓN OBLIGATORIA dentro de un sistema de vigilancia epidemiológica?',
  ops:[
    'Garantizar que las autoridades de salud pública reciban información oportuna sobre casos de enfermedades de importancia para la salud pública, permitiendo una respuesta rápida (investigación de brotes, control de contactos, medidas de contención)',
    'La notificación obligatoria no tiene ningún propósito de salud pública real',
    'Solo cumplir un requisito administrativo sin ninguna utilidad práctica',
    'Se aplica únicamente a enfermedades crónicas no transmisibles'
  ],
  ok:0,
  clave:'La notificación obligatoria garantiza información oportuna a las autoridades de salud pública para permitir respuesta rápida ante enfermedades de importancia.',
  exp:'Designar a ciertas enfermedades como de NOTIFICACIÓN OBLIGATORIA garantiza que los proveedores de salud reporten oportunamente los casos a las autoridades de salud pública, permitiendo una respuesta RÁPIDA cuando sea necesaria -como la investigación de un posible brote, el rastreo de contactos, o la implementación de medidas de contención. Sin este sistema, muchos brotes podrían pasar desapercibidos hasta que ya hayan crecido considerablemente, retrasando una respuesta efectiva.',
  no:{
    1:'La notificación obligatoria sí tiene un propósito de salud pública real y bien establecido: permitir detección y respuesta oportuna ante enfermedades de importancia.',
    2:'No es solo un requisito administrativo sin utilidad; responde a una necesidad práctica clara de vigilancia y respuesta oportuna en salud pública.',
    3:'La notificación obligatoria se aplica principalmente a enfermedades TRANSMISIBLES de importancia epidemiológica (donde la rapidez de respuesta es crítica para contener la propagación), aunque algunos sistemas también incluyen ciertas condiciones no transmisibles.'
  },
  trampa:'Subestimar el propósito práctico de la notificación obligatoria, tratándola como un mero trámite administrativo sin relación con la respuesta de salud pública.',
  obj:'Explicar el propósito de la notificación obligatoria de enfermedades dentro de un sistema de vigilancia.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['notificación obligatoria','vigilancia epidemiológica','investigación de brotes','salud pública']
},
{
  id:'U8-E-Q42', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Vigilancia epidemiológica', sub:'Vigilancia pasiva vs. activa',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué diferencia hay entre la vigilancia epidemiológica PASIVA y la ACTIVA?',
  ops:[
    'En la vigilancia pasiva, los proveedores de salud reportan casos por iniciativa propia según lo establecido; en la vigilancia activa, el sistema de salud pública BUSCA activamente los casos, contactando directamente a los proveedores o revisando registros',
    'Ambos términos son exactamente sinónimos, sin ninguna diferencia real',
    'La vigilancia pasiva siempre detecta más casos que la vigilancia activa',
    'La vigilancia activa nunca requiere ningún recurso adicional comparado con la pasiva'
  ],
  ok:0,
  clave:'En la vigilancia pasiva, los proveedores reportan por iniciativa propia; en la activa, el sistema de salud pública busca los casos directamente.',
  exp:'En la vigilancia PASIVA, el sistema depende de que los proveedores de salud reporten los casos por iniciativa propia, según lo establecido por la normativa -es el modelo más común y menos costoso, pero tiende a subestimar el número real de casos (subregistro). En la vigilancia ACTIVA, el sistema de salud pública BUSCA activamente los casos, contactando directamente a los proveedores de salud o revisando registros clínicos, lo cual es más costoso en recursos pero típicamente detecta una proporción mayor de los casos reales, especialmente útil durante la investigación de un brote específico.',
  no:{
    2:'Es al revés: la vigilancia ACTIVA, al buscar proactivamente los casos, típicamente detecta MÁS casos que la vigilancia pasiva, que depende del reporte espontáneo y tiende al subregistro.',
    1:'Son conceptos claramente distintos, que difieren en quién toma la iniciativa de identificar y reportar los casos.',
    3:'La vigilancia activa sí requiere típicamente más recursos (personal, tiempo, presupuesto) que la vigilancia pasiva, precisamente por su naturaleza proactiva de búsqueda de casos.'
  },
  trampa:'No reconocer que la vigilancia activa detecta típicamente más casos que la pasiva, precisamente por buscarlos proactivamente en vez de depender del reporte espontáneo.',
  obj:'Distinguir la vigilancia epidemiológica pasiva de la activa.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['vigilancia pasiva','vigilancia activa','subregistro','investigación de brotes']
},
{
  id:'U8-E-Q43', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Investigación de brotes', sub:'Curva epidémica',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Durante la investigación de un brote, se elabora una curva epidémica (histograma de casos según fecha de inicio de síntomas) que muestra un pico único, agudo, seguido de un descenso gradual, sin ondas secundarias sostenidas.',
  enunciado:'¿Qué tipo de patrón de exposición sugiere esta curva epidémica?',
  ops:[
    'Una exposición COMÚN y PUNTUAL (fuente común de exposición única), como un alimento contaminado consumido en un evento específico',
    'Una transmisión persona a persona sostenida y propagada, con múltiples generaciones de contagio',
    'La curva epidémica no aporta ninguna información sobre el patrón de exposición del brote',
    'Necesariamente una exposición ambiental continua sin ningún punto de inicio definido'
  ],
  ok:0,
  clave:'Un pico único agudo seguido de descenso gradual sugiere una fuente común de exposición puntual, como un alimento contaminado en un evento específico.',
  exp:'Una curva epidémica con un pico único, agudo, seguido de un descenso gradual (sin ondas secundarias sostenidas que sugieran transmisión continuada) es característica de una exposición COMÚN y PUNTUAL -todos los afectados se expusieron aproximadamente al mismo tiempo a la misma fuente (por ejemplo, un alimento contaminado en un evento social específico), y los casos aparecen agrupados según el periodo de incubación típico de la enfermedad, sin propagación secundaria sostenida de persona a persona.',
  no:{
    1:'Un patrón de transmisión persona a persona sostenida y propagada típicamente genera una curva epidémica con múltiples picos u ondas sucesivas (una por cada generación de contagio), distinto del pico único agudo descrito.',
    2:'La curva epidémica sí aporta información valiosa sobre el patrón probable de exposición del brote, precisamente por su forma característica.',
    3:'Una exposición ambiental continua típicamente generaría un patrón distinto (una curva más sostenida o con una meseta), no un pico único agudo con descenso gradual como el descrito.'
  },
  trampa:'No reconocer que la forma de la curva epidémica (pico único vs. múltiples ondas) es una pista clave sobre el tipo de fuente de exposición durante una investigación de brote.',
  obj:'Interpretar el patrón de exposición sugerido por la forma de una curva epidémica.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['curva epidémica','fuente común','investigación de brotes','periodo de incubación']
},
{
  id:'U8-E-Q44', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Epidemiología de enfermedades transmisibles', sub:'Número reproductivo básico (R0)',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué representa el número reproductivo básico (R0) de una enfermedad transmisible, y qué implica que sea mayor a 1?',
  ops:[
    'Representa el número promedio de casos secundarios generados por un caso índice en una población totalmente susceptible; un R0 mayor a 1 implica que la epidemia tiende a CRECER',
    'R0 representa exclusivamente la letalidad de la enfermedad',
    'Un R0 mayor a 1 siempre implica que la epidemia se extinguirá espontáneamente',
    'El R0 no tiene ninguna utilidad práctica en el control de enfermedades transmisibles'
  ],
  ok:0,
  clave:'R0 es el número promedio de casos secundarios por caso índice en población susceptible; mayor a 1 implica que la epidemia tiende a crecer.',
  exp:'El número reproductivo básico (R0) representa el número PROMEDIO de casos secundarios que genera un único caso índice, en una población TOTALMENTE susceptible (sin inmunidad previa ni medidas de control). Si R0 es mayor a 1, cada caso genera, en promedio, más de un caso nuevo, por lo que la epidemia tiende a CRECER; si R0 es menor a 1, la epidemia tiende a extinguirse espontáneamente. El R0 es fundamental para estimar, por ejemplo, la cobertura de vacunación necesaria para lograr inmunidad de rebaño.',
  no:{
    1:'El R0 no mide letalidad (que se relacionaría con la tasa de mortalidad de casos); mide la capacidad de transmisión de la enfermedad, expresada como casos secundarios generados por caso índice.',
    2:'Es al revés: un R0 mayor a 1 implica que la epidemia tiende a CRECER, no a extinguirse; un R0 menor a 1 sería el que sugiere extinción espontánea.',
    3:'El R0 sí tiene utilidad práctica central en el control de enfermedades transmisibles, incluyendo el cálculo de la cobertura de vacunación necesaria para inmunidad de rebaño.'
  },
  trampa:'Invertir la interpretación del R0 mayor o menor a 1 respecto a si la epidemia tiende a crecer o a extinguirse.',
  obj:'Definir el número reproductivo básico (R0) e interpretar su relación con el crecimiento de una epidemia.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['número reproductivo básico','R0','inmunidad de rebaño','enfermedades transmisibles']
},
{
  id:'U8-E-Q45', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Epidemiología de enfermedades transmisibles', sub:'Inmunidad de rebaño',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo protege la inmunidad de rebaño (inmunidad colectiva) incluso a las personas NO inmunizadas dentro de una población?',
  ops:[
    'Al reducir la proporción de personas susceptibles por debajo de un umbral crítico, se interrumpe la cadena de transmisión de la enfermedad, reduciendo indirectamente el riesgo también para quienes no están inmunizados',
    'La inmunidad de rebaño no ofrece ninguna protección a las personas no inmunizadas',
    'La inmunidad de rebaño requiere que absolutamente el 100% de la población esté vacunada, sin ninguna excepción',
    'La inmunidad de rebaño solo aplica a enfermedades no transmisibles'
  ],
  ok:0,
  clave:'Al reducir la proporción de susceptibles bajo un umbral crítico, se interrumpe la cadena de transmisión, protegiendo indirectamente incluso a los no inmunizados.',
  exp:'Cuando una proporción suficientemente alta de la población es inmune (ya sea por vacunación o por infección previa), la probabilidad de que un caso infeccioso entre en contacto con una persona susceptible disminuye considerablemente, interrumpiendo la cadena de transmisión sostenida -esto protege INDIRECTAMENTE incluso a las personas no inmunizadas (por ejemplo, quienes no pueden vacunarse por razones médicas), al reducir su probabilidad de exposición a la enfermedad. El umbral necesario para lograr esta protección colectiva depende del R0 de la enfermedad: cuanto más contagiosa, mayor cobertura de inmunidad se requiere.',
  no:{
    1:'La inmunidad de rebaño sí ofrece protección indirecta real a las personas no inmunizadas, al reducir su probabilidad de exposición dentro de una población mayoritariamente inmune.',
    2:'No se requiere el 100% de cobertura; el umbral necesario depende del R0 de la enfermedad y típicamente es menor al 100%, aunque varía considerablemente según qué tan contagiosa sea la enfermedad.',
    3:'La inmunidad de rebaño aplica específicamente a enfermedades TRANSMISIBLES, donde existe una cadena de transmisión entre personas que puede interrumpirse; no aplica a enfermedades no transmisibles.'
  },
  trampa:'Asumir que la inmunidad de rebaño requiere cobertura del 100% de la población, sin reconocer que el umbral necesario depende del R0 específico de cada enfermedad.',
  obj:'Explicar el mecanismo por el cual la inmunidad de rebaño protege indirectamente a personas no inmunizadas.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['inmunidad de rebaño','R0','umbral crítico','vacunación']
},
{
  id:'U8-E-Q46', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Epidemiología de enfermedades no transmisibles', sub:'Transición epidemiológica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué describe el concepto de "transición epidemiológica" en salud pública?',
  ops:[
    'El cambio poblacional gradual desde un predominio de enfermedades TRANSMISIBLES (infecciosas, asociadas a mortalidad temprana) hacia un predominio de enfermedades CRÓNICAS NO TRANSMISIBLES (cardiovasculares, cáncer, diabetes), típicamente acompañando el desarrollo socioeconómico',
    'Se refiere exclusivamente al cambio de un solo paciente entre distintos diagnósticos',
    'La transición epidemiológica no tiene ninguna relación con el desarrollo socioeconómico de una población',
    'Describe únicamente el cambio de temporada del año en la frecuencia de enfermedades'
  ],
  ok:0,
  clave:'La transición epidemiológica describe el cambio poblacional de predominio de enfermedades transmisibles hacia enfermedades crónicas no transmisibles.',
  exp:'La transición epidemiológica describe el cambio poblacional GRADUAL, observado históricamente en muchos países a medida que se desarrollan socioeconómicamente, desde un predominio de enfermedades TRANSMISIBLES (infecciosas, asociadas frecuentemente a alta mortalidad en edades tempranas) hacia un predominio de enfermedades CRÓNICAS NO TRANSMISIBLES (cardiovasculares, cáncer, diabetes, asociadas a una mayor esperanza de vida y a cambios en los estilos de vida). Este concepto es relevante para planificar recursos y prioridades de salud pública según la etapa de transición de cada población.',
  no:{
    1:'La transición epidemiológica es un concepto POBLACIONAL, no se refiere al cambio de diagnóstico de un solo paciente individual.',
    2:'La transición epidemiológica está directamente relacionada con el desarrollo socioeconómico de una población, siendo uno de sus determinantes reconocidos.',
    3:'La transición epidemiológica describe un cambio poblacional a largo plazo (años o décadas) en el patrón predominante de enfermedades, no un cambio estacional dentro de un mismo año.'
  },
  trampa:'Confundir la transición epidemiológica poblacional con cambios individuales de diagnóstico o con variaciones estacionales de corto plazo.',
  obj:'Definir el concepto de transición epidemiológica y su relación con el desarrollo socioeconómico.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['transición epidemiológica','enfermedades no transmisibles','desarrollo socioeconómico','carga de enfermedad']
},
{
  id:'U8-E-Q47', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Epidemiología de enfermedades no transmisibles', sub:'Factores de riesgo modificables',
  dif:2, hab:'Aplicación', tipo:'directa', verificado:true,
  enunciado:'¿Por qué la identificación de factores de riesgo MODIFICABLES (como el tabaquismo, el sedentarismo o la dieta) es particularmente relevante en la epidemiología de las enfermedades crónicas no transmisibles?',
  ops:[
    'Porque permite diseñar intervenciones de prevención primaria dirigidas a reducir la exposición a esos factores, potencialmente reduciendo la incidencia futura de la enfermedad, a diferencia de los factores de riesgo no modificables como la edad o la genética',
    'Los factores de riesgo modificables no tienen ninguna utilidad práctica en salud pública',
    'Solo los factores de riesgo NO modificables (como la edad) son relevantes en salud pública',
    'Identificar factores de riesgo modificables no tiene ninguna relación con la prevención de enfermedades'
  ],
  ok:0,
  clave:'Identificar factores modificables permite diseñar intervenciones de prevención primaria, a diferencia de los factores no modificables como edad o genética.',
  exp:'Identificar factores de riesgo MODIFICABLES es particularmente valioso en salud pública porque, a diferencia de los factores de riesgo NO modificables (como la edad, el sexo o la predisposición genética, que no pueden cambiarse), los modificables SÍ pueden ser objeto de intervenciones de PREVENCIÓN PRIMARIA -campañas antitabaco, promoción de actividad física, políticas de alimentación saludable- con el potencial real de reducir la incidencia futura de enfermedades crónicas no transmisibles a nivel poblacional.',
  no:{
    1:'Los factores de riesgo modificables sí tienen una utilidad práctica central en salud pública, precisamente porque son el objetivo de las intervenciones de prevención primaria.',
    2:'Los factores de riesgo NO modificables también son relevantes (por ejemplo, para estratificar riesgo o priorizar tamizaje), pero los modificables tienen la ventaja específica de ser susceptibles de intervención preventiva.',
    3:'Identificar factores de riesgo modificables está directamente relacionado con el diseño de estrategias de prevención primaria de enfermedades.'
  },
  trampa:'No reconocer la ventaja práctica específica de los factores de riesgo modificables sobre los no modificables: la posibilidad de intervenir preventivamente sobre ellos.',
  obj:'Explicar la relevancia de los factores de riesgo modificables para la prevención primaria de enfermedades no transmisibles.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['factores de riesgo modificables','prevención primaria','enfermedades no transmisibles','salud pública']
},
{
  id:'U8-E-Q48', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Epidemiología de enfermedades no transmisibles', sub:'Niveles de prevención',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una campaña de salud pública promueve dejar de fumar entre personas sanas que nunca han tenido cáncer de pulmón, con el objetivo de reducir la incidencia futura de esa enfermedad en la población general.',
  enunciado:'¿Qué nivel de prevención ilustra esta intervención?',
  ops:[
    'Prevención PRIMARIA, que actúa ANTES de que la enfermedad se desarrolle, reduciendo la exposición a un factor de riesgo en personas aún sanas',
    'Prevención secundaria, que se enfoca en la detección temprana de una enfermedad ya presente pero asintomática',
    'Prevención terciaria, que se enfoca en reducir complicaciones en personas que ya tienen la enfermedad',
    'Esta intervención no corresponde a ningún nivel reconocido de prevención'
  ],
  ok:0,
  clave:'Reducir un factor de riesgo en personas sanas, antes de que la enfermedad se desarrolle, es prevención primaria.',
  exp:'La prevención PRIMARIA actúa ANTES de que la enfermedad se desarrolle, reduciendo la exposición a factores de riesgo en personas que todavía están sanas -como en este caso, promover el cese del tabaquismo entre personas sin cáncer de pulmón, con el objetivo de reducir la incidencia futura de esa enfermedad. Esto contrasta con la prevención SECUNDARIA (detección temprana mediante tamizaje en personas ya enfermas pero asintomáticas) y la prevención TERCIARIA (reducir complicaciones y mejorar el pronóstico en personas que ya tienen la enfermedad diagnosticada).',
  no:{
    1:'La prevención secundaria se enfoca en la detección TEMPRANA de una enfermedad que YA está presente (aunque asintomática), no en evitar que la enfermedad se desarrolle desde el inicio como en este caso.',
    2:'La prevención terciaria se enfoca en personas que YA tienen la enfermedad diagnosticada, buscando reducir complicaciones, distinto del escenario descrito de personas sanas.',
    3:'Esta intervención sí corresponde a un nivel de prevención claramente reconocido y nombrado: la prevención primaria.'
  },
  trampa:'Confundir la prevención primaria con la secundaria, sin distinguir si la intervención actúa antes de que la enfermedad exista o busca detectarla tempranamente una vez ya presente.',
  obj:'Identificar la prevención primaria en un escenario de intervención de salud pública.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['prevención primaria','prevención secundaria','prevención terciaria','niveles de prevención']
},
{
  id:'U8-E-Q49', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Epidemiología de enfermedades no transmisibles', sub:'Carga global de enfermedad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué mide un indicador como los "años de vida ajustados por discapacidad" (AVAD o DALY), usado para estimar la carga global de enfermedad?',
  ops:[
    'Combina tanto los años de vida PERDIDOS por muerte prematura COMO los años vividos con DISCAPACIDAD debido a una enfermedad, en una sola medida integral del impacto de esa enfermedad en la población',
    'Mide únicamente la mortalidad de una enfermedad, sin considerar la discapacidad',
    'Mide únicamente la discapacidad, sin considerar la mortalidad prematura',
    'El AVAD no tiene ninguna utilidad para comparar el impacto de distintas enfermedades'
  ],
  ok:0,
  clave:'El AVAD combina años de vida perdidos por muerte prematura y años vividos con discapacidad, en una medida integral del impacto de una enfermedad.',
  exp:'El indicador de AVAD (años de vida ajustados por discapacidad, DALY en inglés) combina DOS componentes en una sola medida integral: los años de vida PERDIDOS por muerte PREMATURA debido a la enfermedad, y los años vividos con DISCAPACIDAD causada por esa enfermedad (ponderados según la severidad de la discapacidad). Esta medida integral permite comparar el impacto relativo de enfermedades muy distintas entre sí -por ejemplo, comparar el impacto poblacional de una enfermedad muy letal pero de baja discapacidad con otra de baja letalidad pero alta discapacidad crónica- algo que la mortalidad sola no puede capturar.',
  no:{
    1:'El AVAD específicamente combina mortalidad prematura CON discapacidad; medir solo mortalidad correspondería a otro indicador más limitado (como la tasa de mortalidad simple).',
    2:'El AVAD específicamente combina discapacidad CON mortalidad prematura; medir solo discapacidad no capturaría el impacto completo de enfermedades altamente letales.',
    3:'El AVAD sí tiene una utilidad central bien reconocida: permitir comparaciones del impacto relativo de distintas enfermedades sobre la carga global de enfermedad de una población.'
  },
  trampa:'Asumir que el AVAD mide solo uno de sus dos componentes (mortalidad o discapacidad) sin reconocer que combina ambos en una sola medida integral.',
  obj:'Definir el indicador de años de vida ajustados por discapacidad (AVAD/DALY) y su utilidad para medir carga de enfermedad.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['AVAD','DALY','carga global de enfermedad','mortalidad prematura']
},
{
  id:'U8-E-Q50', programa:'unirm', cuatri:8,
  esp:'Epidemiología', tema:'Epidemiología de enfermedades no transmisibles', sub:'Enfoque multicausal',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué el enfoque MULTICAUSAL (red de causalidad) es más apropiado que el modelo unicausal para entender la mayoría de las enfermedades crónicas no transmisibles?',
  ops:[
    'Porque la mayoría de las enfermedades crónicas no transmisibles resultan de la INTERACCIÓN de MÚLTIPLES factores (genéticos, ambientales, conductuales, sociales), no de una única causa necesaria y suficiente como en muchas enfermedades infecciosas clásicas',
    'Todas las enfermedades, transmisibles y no transmisibles, tienen siempre una única causa suficiente y necesaria',
    'El modelo multicausal no tiene ninguna aplicación práctica en la epidemiología moderna',
    'Las enfermedades crónicas no transmisibles nunca tienen ningún factor genético involucrado'
  ],
  ok:0,
  clave:'Las enfermedades crónicas no transmisibles resultan de la interacción de múltiples factores, no de una única causa necesaria y suficiente.',
  exp:'A diferencia del modelo unicausal clásico (útil para muchas enfermedades infecciosas, donde un agente específico es necesario para la enfermedad, como el bacilo de la tuberculosis), la mayoría de las enfermedades crónicas no transmisibles (enfermedad cardiovascular, diabetes, muchos cánceres) resultan de la INTERACCIÓN de MÚLTIPLES factores simultáneos -genéticos, ambientales, conductuales y sociales- ninguno de los cuales es, por sí solo, necesario ni suficiente para causar la enfermedad. El enfoque multicausal (red de causalidad) refleja mejor esta complejidad, y orienta hacia estrategias de prevención que abordan múltiples factores de riesgo simultáneamente.',
  no:{
    1:'No todas las enfermedades siguen el modelo unicausal; muchas enfermedades crónicas no transmisibles requieren un enfoque multicausal precisamente porque no tienen una única causa necesaria y suficiente.',
    2:'El modelo multicausal sí tiene aplicaciones prácticas importantes, orientando estrategias de prevención que abordan simultáneamente múltiples factores de riesgo modificables.',
    3:'Los factores genéticos sí pueden estar involucrados en muchas enfermedades crónicas no transmisibles, como uno más de los múltiples factores que interactúan en el modelo multicausal.'
  },
  trampa:'Aplicar el modelo unicausal clásico (una causa necesaria y suficiente) a enfermedades crónicas no transmisibles, que típicamente requieren un enfoque multicausal más complejo.',
  obj:'Explicar por qué el enfoque multicausal es apropiado para entender la mayoría de las enfermedades crónicas no transmisibles.',
  ref:'Gordis, Epidemiología. Hulley, Diseño de Investigación Clínica.',
  tags:['enfoque multicausal','red de causalidad','modelo unicausal','enfermedades crónicas']
}

]);
