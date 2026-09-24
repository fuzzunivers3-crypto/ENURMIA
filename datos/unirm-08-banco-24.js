/* ============================================================
   UNIRMIA — BANCO DEL CUATRIMESTRE 8, TANDA DE GENETICA MEDICA (2/2)
   Completa Genetica Medica a 50 preguntas junto con banco-23.js.
   Cubre el resto de estructura del ADN, mutaciones, arboles
   genealogicos, alteraciones estructurales/mosaicismo, herencia
   multifactorial, diagnostico/consejo, epigenetica, expansion de
   repeticiones, impronta genomica y cancer hereditario.
   ============================================================ */
window.BANCO = (window.BANCO || []).concat([

/* ===================== GENETICA MEDICA ===================== */
{
  id:'U8-G-Q23', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Centrómero', sub:'Función en la división celular',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué estructura se ensambla en el centrómero y qué función cumple durante la división celular?',
  ops:[
    'El cinetocoro, que permite que los microtúbulos del huso mitótico tiren de los cromosomas, asegurando un reparto correcto entre las células hijas',
    'Los telómeros, que protegen los extremos del cromosoma',
    'El nucleosoma, la unidad básica de empaquetamiento del ADN',
    'El centrómero no tiene ninguna función durante la división celular'
  ],
  ok:0,
  clave:'El cinetocoro se ensambla en el centrómero y permite el anclaje de los microtúbulos del huso mitótico para el reparto cromosómico.',
  exp:'El centrómero es la región donde se unen las dos cromátidas hermanas y donde se ensambla el cinetocoro, la estructura proteica que permite que los microtúbulos del huso mitótico se anclen y tiren de los cromosomas durante la división celular, asegurando un reparto correcto de una copia de cada cromosoma hacia cada célula hija. Un error en este proceso es precisamente el mecanismo de la no disyunción.',
  no:{
    1:'Los telómeros son estructuras distintas, situadas en los extremos del cromosoma, no en la región central del centrómero.',
    2:'El nucleosoma es la unidad de empaquetamiento del ADN alrededor de histonas, una estructura repetida a lo largo de todo el cromosoma, no específica del centrómero.',
    3:'El centrómero tiene una función central y esencial durante la división celular, precisamente por el ensamblaje del cinetocoro y su papel en la segregación cromosómica.'
  },
  trampa:'Confundir las estructuras y funciones del centrómero con las de otras regiones cromosómicas como los telómeros o los nucleosomas.',
  obj:'Describir la función del cinetocoro ensamblado en el centrómero durante la división celular.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['centrómero','cinetocoro','huso mitótico','división celular']
},
{
  id:'U8-G-Q24', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Compactación del ADN', sub:'Niveles sucesivos',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuándo está el ADN en su forma de cromosoma condensado, visible al microscopio óptico?',
  ops:[
    'Durante todo el ciclo celular, sin ninguna variación',
    'Solo durante la división celular; en el núcleo en reposo (interfase), el ADN está en forma de cromatina descondensada',
    'El ADN nunca se condensa en forma de cromosoma visible',
    'Solo en las células que no se dividen nunca'
  ],
  ok:1,
  clave:'El cromosoma condensado y visible solo existe durante la división celular; en interfase el ADN está como cromatina descondensada.',
  exp:'El ADN se empaqueta en niveles sucesivos de compactación: nucleosoma, fibra de cromatina, y solo durante la división celular se condensa al máximo en la forma de cromosoma visible al microscopio óptico, con sus dos cromátidas hermanas unidas por el centrómero. En el núcleo en reposo (interfase, la mayor parte del ciclo celular), el ADN permanece como cromatina descondensada, mucho menos compacta, lo que permite el acceso de la maquinaria de transcripción a los genes -un cromosoma completamente condensado no sería accesible para la transcripción activa.',
  no:{
    0:'El grado de condensación del ADN sí varía significativamente a lo largo del ciclo celular, siendo máximo durante la división y mínimo durante la interfase activa.',
    2:'El ADN sí se condensa en forma de cromosoma visible, específicamente durante la división celular, cuando se necesita repartir el material genético de forma ordenada.',
    3:'Todas las células que se dividen (la gran mayoría de las células del cuerpo, en algún momento) pasan por esta fase de condensación cromosómica durante su división.'
  },
  trampa:'No reconocer que el grado de condensación del ADN varía según la fase del ciclo celular, con el cromosoma "clásico" visible solo durante la división.',
  obj:'Explicar cuándo el ADN adopta la forma de cromosoma condensado visible al microscopio.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['compactación del ADN','cromatina','cromosoma condensado','ciclo celular']
},
{
  id:'U8-G-Q25', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Mutación silenciosa', sub:'Base de la tolerancia',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué característica del código genético hace posible que existan mutaciones silenciosas?',
  ops:[
    'La degeneración del código genético, donde varios codones distintos pueden codificar el mismo aminoácido',
    'La ambigüedad del código genético',
    'Las mutaciones silenciosas no existen realmente',
    'El hecho de que cada aminoácido tenga solo un codón posible'
  ],
  ok:0,
  clave:'La degeneración del código (varios codones para el mismo aminoácido) es la base de las mutaciones silenciosas.',
  exp:'Una mutación silenciosa cambia la secuencia de ADN pero, gracias a la degeneración del código genético (donde varios codones distintos pueden codificar el mismo aminoácido), sigue codificando el MISMO aminoácido, sin ningún efecto sobre la proteína resultante. Sin esta degeneración, cualquier cambio en la secuencia de ADN cambiaría necesariamente el aminoácido codificado, y las mutaciones silenciosas no podrían existir.',
  no:{
    1:'La ambigüedad (un mismo codón codificando distintos aminoácidos) no existe en el código genético real; y de existir, no explicaría las mutaciones silenciosas, sino todo lo contrario.',
    2:'Las mutaciones silenciosas sí existen y son un fenómeno bien documentado, precisamente gracias a la degeneración del código genético.',
    3:'Si cada aminoácido tuviera un único codón posible, no habría degeneración, y por tanto no podrían existir mutaciones silenciosas.'
  },
  trampa:'Confundir degeneración con ambigüedad, o no conectar la existencia de mutaciones silenciosas con la redundancia específica del código genético.',
  obj:'Explicar la base molecular de las mutaciones silenciosas a partir de la degeneración del código genético.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['mutación silenciosa','degeneración del código genético','codón','proteína']
},
{
  id:'U8-G-Q26', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Lectura de árboles genealógicos', sub:'El probando',
  dif:1, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué es el "probando" en un árbol genealógico?',
  ops:[
    'La persona más gravemente afectada de toda la familia',
    'La persona a través de la cual la familia llegó a la atención médica o genética, marcada con una flecha en el árbol',
    'Siempre el primer caso cronológico de la enfermedad en la familia',
    'Un término que no se usa en genética médica'
  ],
  ok:1,
  clave:'El probando es la persona a través de la cual la familia llegó a la atención médica, marcada con una flecha en el árbol.',
  exp:'El probando (o caso índice) es la persona a través de la cual la familia llegó a la atención médica o genética -se marca con una flecha en el árbol genealógico- y es el punto de partida para reconstruir el resto del árbol familiar, indagando sistemáticamente sobre la salud de familiares de primer, segundo y tercer grado. No necesariamente es el más gravemente afectado ni el primer caso cronológico de la enfermedad en la familia; simplemente es quien motivó la consulta.',
  no:{
    0:'El probando no es necesariamente el más gravemente afectado; puede ser cualquier miembro de la familia cuya consulta inició la evaluación genética.',
    2:'El probando tampoco es necesariamente el primer caso cronológico; puede haber casos previos en la familia que se identifiquen después, al reconstruir el árbol a partir del probando.',
    3:'El término probando (o caso índice) es un concepto estándar y ampliamente usado en genética médica y consejo genético.'
  },
  trampa:'Asumir que el probando tiene que ser el caso más grave o el primero cronológicamente, en vez de reconocerlo simplemente como el punto de entrada de la familia a la evaluación genética.',
  obj:'Definir correctamente el concepto de probando en un árbol genealógico.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['probando','caso índice','árbol genealógico','pedigrí']
},
{
  id:'U8-G-Q27', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Translocación Robertsoniana', sub:'Riesgo de recurrencia',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una pareja tiene un hijo con síndrome de Down. Al estudiar el cariotipo, se descubre que uno de los padres es portador equilibrado de una translocación Robertsoniana entre los cromosomas 14 y 21, y que el síndrome de Down del hijo se debe a esta translocación, no a una trisomía 21 clásica por no disyunción.',
  enunciado:'¿Qué implicación tiene este hallazgo para el riesgo de recurrencia en futuros embarazos de esta pareja, comparado con una trisomía 21 clásica?',
  ops:[
    'El riesgo de recurrencia es exactamente el mismo que en la trisomía 21 clásica por no disyunción (relacionado solo con la edad materna)',
    'El riesgo de recurrencia es considerablemente mayor que en la trisomía 21 clásica, porque depende de que el progenitor sea portador equilibrado de la translocación, no de un evento aleatorio de no disyunción',
    'No existe ningún riesgo de recurrencia en este caso',
    'El riesgo de recurrencia es siempre del 100% en este tipo de translocación'
  ],
  ok:1,
  clave:'Un síndrome de Down por translocación Robertsoniana en un padre portador conlleva un riesgo de recurrencia mucho mayor que la trisomía clásica.',
  exp:'Cuando el síndrome de Down se debe a una translocación Robertsoniana heredada de un progenitor portador equilibrado (en vez de a una trisomía 21 clásica por no disyunción esporádica), el riesgo de recurrencia en futuros embarazos es considerablemente mayor que el riesgo asociado solo a la edad materna en la trisomía clásica, porque depende de la segregación de los cromosomas reorganizados durante la meiosis del progenitor portador, un mecanismo distinto y de mayor riesgo recurrente. Por eso es clínicamente crucial distinguir el mecanismo (no disyunción esporádica contra translocación heredada) al dar consejo genético sobre futuros embarazos.',
  no:{
    0:'El riesgo NO es el mismo; precisamente la distinción entre ambos mecanismos (no disyunción esporádica contra translocación heredada) es clínicamente crucial porque cambia sustancialmente el riesgo de recurrencia.',
    2:'Sí existe un riesgo de recurrencia real y considerablemente elevado en este escenario, precisamente por el mecanismo de translocación heredada.',
    3:'El riesgo no es del 100%; depende de cómo segreguen los cromosomas translocados durante la meiosis, pero sí es considerablemente mayor que en la trisomía clásica, sin llegar necesariamente al 100%.'
  },
  trampa:'No distinguir el mecanismo del síndrome de Down (no disyunción esporádica contra translocación heredada) al estimar el riesgo de recurrencia, un error clínico con consecuencias reales para el consejo genético.',
  obj:'Explicar por qué el riesgo de recurrencia del síndrome de Down por translocación Robertsoniana difiere del de la trisomía clásica.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['translocación Robertsoniana','síndrome de Down','riesgo de recurrencia','portador equilibrado']
},
{
  id:'U8-G-Q28', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Deleción cromosómica', sub:'Siempre consecuencias clínicas',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué una deleción cromosómica SIEMPRE tiene consecuencias clínicas, a diferencia de una translocación o inversión equilibrada?',
  ops:[
    'Porque se pierde material genético real, con los genes que contenía, a diferencia de una reorganización equilibrada que no pierde ni gana material',
    'Porque las deleciones nunca afectan a ningún gen',
    'Porque las translocaciones equilibradas también pierden material genético, igual que las deleciones',
    'Las deleciones nunca tienen consecuencias clínicas'
  ],
  ok:0,
  clave:'La deleción pierde material genético real; una reorganización equilibrada (translocación, inversión) no pierde ni gana nada.',
  exp:'Una deleción es la pérdida de un fragmento de un cromosoma, que SIEMPRE tiene consecuencias clínicas porque se pierde material genético real, con los genes que contenía -la gravedad depende del tamaño del fragmento perdido y de qué genes contenía. Esto contrasta con una translocación o inversión EQUILIBRADA, donde el material genético se reorganiza pero no se pierde ni se gana nada, así que el portador suele ser clínicamente sano (aunque con riesgo reproductivo para su descendencia).',
  no:{
    1:'Las deleciones, por definición, sí eliminan un fragmento de cromosoma que contenía genes; esa pérdida es precisamente la causa de sus consecuencias clínicas.',
    2:'Es lo contrario: las translocaciones EQUILIBRADAS no pierden ni ganan material genético; solo lo reorganizan, a diferencia de las deleciones.',
    3:'Las deleciones sí tienen consecuencias clínicas, precisamente por la pérdida real de material genético que representan.'
  },
  trampa:'No distinguir entre alteraciones cromosómicas equilibradas (sin pérdida ni ganancia neta) y desequilibradas (como la deleción, con pérdida real de material).',
  obj:'Explicar por qué una deleción cromosómica siempre tiene consecuencias clínicas, a diferencia de una reorganización equilibrada.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['deleción cromosómica','translocación equilibrada','pérdida de material genético','alteración desequilibrada']
},
{
  id:'U8-G-Q29', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Mosaicismo cromosómico', sub:'Origen mitótico posterior',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la diferencia de origen entre el mosaicismo cromosómico y la no disyunción meiótica clásica?',
  ops:[
    'El mosaicismo se origina por un error mitótico DESPUÉS de la fecundación, afectando solo a una proporción de las células del organismo; la no disyunción meiótica afecta a TODAS las células desde el inicio',
    'Ambos fenómenos son exactamente idénticos en su origen y consecuencias',
    'El mosaicismo siempre afecta al 100% de las células del organismo, igual que la no disyunción meiótica',
    'El mosaicismo nunca puede coexistir con líneas celulares normales'
  ],
  ok:0,
  clave:'El mosaicismo se origina por error mitótico posterior a la fecundación, afectando solo a una proporción de las células; la no disyunción meiótica afecta a todas desde el principio.',
  exp:'El mosaicismo cromosómico ocurre cuando una persona tiene dos o más líneas celulares con constituciones cromosómicas distintas, originadas por un error mitótico que ocurre DESPUÉS de la fecundación. Esto contrasta con la no disyunción meiótica clásica, que ocurre durante la formación de los gametos (antes de la fecundación) y por tanto afecta a TODAS las células del organismo resultante por igual, desde el cigoto en adelante. La gravedad clínica del mosaicismo depende de la proporción de células afectadas y de en qué tejidos predomina esa línea celular anormal.',
  no:{
    1:'Son fenómenos con orígenes temporales distintos (mitótico posterior a la fecundación contra meiótico previo a ella), con consecuencias distintas sobre la distribución celular de la alteración.',
    2:'El mosaicismo, por definición, implica que NO todas las células están afectadas -coexisten al menos dos líneas celulares distintas, a diferencia de la no disyunción meiótica clásica.',
    3:'El mosaicismo, por definición, implica la coexistencia de al menos una línea celular normal junto con al menos una línea celular anormal en la misma persona.'
  },
  trampa:'No distinguir el momento del error (mitótico posterior contra meiótico previo a la fecundación) como la diferencia clave entre mosaicismo y no disyunción meiótica clásica.',
  obj:'Explicar la diferencia de origen temporal entre el mosaicismo cromosómico y la no disyunción meiótica.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['mosaicismo cromosómico','no disyunción meiótica','error mitótico','líneas celulares']
},
{
  id:'U8-G-Q30', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Herencia multifactorial', sub:'Modelo de umbral',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué propone el modelo de umbral en la herencia multifactorial?',
  ops:[
    'Existe una susceptibilidad subyacente continua en la población, y la enfermedad se manifiesta solo cuando esa susceptibilidad acumulada supera un umbral determinado',
    'Un único gen determina completamente si la enfermedad se manifiesta o no',
    'El ambiente nunca influye en las enfermedades multifactoriales',
    'El riesgo de recurrencia en la herencia multifactorial es siempre exactamente 25% o 50%, igual que en la herencia mendeliana'
  ],
  ok:0,
  clave:'El modelo de umbral propone una susceptibilidad continua que se manifiesta como enfermedad solo al superar un umbral determinado.',
  exp:'El modelo de umbral propone que existe una susceptibilidad subyacente continua (distribuida en la población de forma similar a una campana), resultado de la combinación de múltiples genes de efecto pequeño más factores ambientales, y que la enfermedad se manifiesta solo cuando esa susceptibilidad acumulada supera un umbral determinado. A diferencia de la herencia mendeliana, el riesgo de recurrencia en la herencia multifactorial es empírico, no una fracción fija como 25% o 50%.',
  no:{
    1:'La herencia multifactorial, por definición, involucra a MÚLTIPLES genes de efecto pequeño, no un único gen determinante como en la herencia mendeliana.',
    2:'El ambiente es un componente esencial de las enfermedades multifactoriales, junto con la contribución de múltiples genes; no se trata de un modelo puramente genético.',
    3:'El riesgo de recurrencia en la herencia multifactorial es empírico (basado en observación estadística de familias reales), no una fracción fija como en la herencia mendeliana clásica.'
  },
  trampa:'Aplicar conceptos de la herencia mendeliana (un solo gen, fracciones fijas de riesgo) a la herencia multifactorial, que sigue una lógica distinta.',
  obj:'Explicar el modelo de umbral de la herencia multifactorial.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['herencia multifactorial','modelo de umbral','susceptibilidad poligénica','riesgo empírico']
},
{
  id:'U8-G-Q31', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Heredabilidad', sub:'Malinterpretación frecuente',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué es incorrecto interpretar que una heredabilidad alta significa que un rasgo es "principalmente genético" en un sentido determinista absoluto e inmutable?',
  ops:[
    'Porque la heredabilidad es una medida poblacional y contextual, específica del ambiente en que se midió, que puede cambiar si el ambiente de esa población cambia',
    'Porque la heredabilidad nunca puede ser alta para ningún rasgo humano',
    'Porque la heredabilidad mide exactamente lo mismo que la penetrancia',
    'Porque la heredabilidad solo aplica a enfermedades mendelianas clásicas'
  ],
  ok:0,
  clave:'La heredabilidad es una medida poblacional específica del contexto ambiental, no una propiedad fija e inmutable del rasgo.',
  exp:'La heredabilidad es la proporción de la variabilidad de un rasgo en una POBLACIÓN determinada que se explica por factores genéticos, en contraste con factores ambientales. Es un concepto frecuentemente malinterpretado: una heredabilidad alta NO significa que el rasgo sea "principalmente genético" en un sentido determinista absoluto, ni que no pueda modificarse con cambios ambientales -es una medida estadística poblacional, específica del contexto ambiental en que se midió, que puede cambiar si el ambiente de esa población cambia significativamente.',
  no:{
    1:'La heredabilidad puede ser alta para muchos rasgos humanos (como la estatura en ciertas poblaciones), dependiendo del contexto ambiental específico en que se mida.',
    2:'La heredabilidad (una medida poblacional de variabilidad explicada por genes) y la penetrancia (la proporción de personas con un genotipo que manifiestan el fenotipo) son conceptos claramente distintos.',
    3:'La heredabilidad es un concepto aplicable a rasgos multifactoriales complejos, no específicamente a enfermedades mendelianas clásicas, donde el patrón de herencia es distinto.'
  },
  trampa:'Interpretar la heredabilidad como una propiedad determinista y fija del rasgo, en vez de reconocerla como una medida estadística poblacional dependiente del contexto ambiental.',
  obj:'Explicar por qué la heredabilidad es una medida poblacional contextual, no una propiedad determinista fija.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['heredabilidad','medida poblacional','malinterpretación','herencia multifactorial']
},
{
  id:'U8-G-Q32', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Farmacogenética', sub:'Metabolizadores lentos y ultrarrápidos',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Un paciente recibe un fármaco metabolizado por CYP2D6 a la dosis estándar y desarrolla toxicidad grave, pese a que la dosis era la habitual para la mayoría de los pacientes.',
  enunciado:'¿Qué explicación farmacogenética es más probable para este cuadro?',
  ops:[
    'El paciente es un metabolizador ULTRARRÁPIDO de CYP2D6',
    'El paciente es un metabolizador LENTO de CYP2D6, acumulando concentraciones más altas del fármaco de lo esperado a la dosis estándar',
    'La farmacogenética no tiene ninguna relación con la toxicidad de fármacos',
    'Todos los pacientes metabolizan CYP2D6 exactamente igual, sin variación genética'
  ],
  ok:1,
  clave:'Un metabolizador lento acumula concentraciones más altas del fármaco a dosis estándar, con mayor riesgo de toxicidad.',
  exp:'Los metabolizadores lentos de CYP2D6 (con actividad enzimática reducida por variantes genéticas) acumulan concentraciones más altas de un fármaco metabolizado por esta vía, con mayor riesgo de toxicidad a dosis estándar -exactamente el patrón descrito en el caso, donde la dosis habitual resultó tóxica para este paciente en particular. Los metabolizadores ultrarrápidos tendrían el problema opuesto: eliminarían el fármaco tan rápido que la dosis estándar resultaría ineficaz, no tóxica.',
  no:{
    0:'Un metabolizador ultrarrápido tendría el problema opuesto: eliminaría el fármaco demasiado rápido, con riesgo de ineficacia, no de toxicidad por acumulación.',
    2:'La farmacogenética tiene una relación directa y bien establecida con la respuesta individual a fármacos, incluyendo el riesgo de toxicidad según el genotipo metabolizador.',
    3:'Existe variabilidad genética real en la actividad de CYP2D6 entre individuos, lo que da lugar a distintos fenotipos metabolizadores (lento, normal, ultrarrápido).'
  },
  trampa:'Confundir el patrón clínico de un metabolizador lento (toxicidad por acumulación) con el de uno ultrarrápido (ineficacia por eliminación excesiva), que son escenarios opuestos.',
  obj:'Aplicar el concepto de metabolizador lento para explicar toxicidad farmacológica a dosis estándar.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['farmacogenética','CYP2D6','metabolizador lento','toxicidad farmacológica']
},
{
  id:'U8-G-Q33', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Cribado prenatal', sub:'Diferencia con diagnóstico',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una paciente embarazada recibe un resultado de "alto riesgo" en el cribado combinado del primer trimestre para trisomía 21, y le informan erróneamente que su bebé "tiene" síndrome de Down.',
  enunciado:'¿Qué error de comunicación se cometió en este caso?',
  ops:[
    'Ninguno: un resultado de alto riesgo en el cribado es equivalente a un diagnóstico confirmado',
    'Se confundió un resultado de cribado (que estima una PROBABILIDAD) con un diagnóstico definitivo; se necesitaría una prueba diagnóstica (como amniocentesis) para confirmar o descartar la condición',
    'El cribado prenatal nunca puede dar resultados de alto riesgo',
    'La amniocentesis y el cribado combinado son exactamente la misma prueba'
  ],
  ok:1,
  clave:'Un resultado de alto riesgo en el cribado es una probabilidad, no un diagnóstico; requiere confirmación con una prueba diagnóstica.',
  exp:'El cribado prenatal estima la PROBABILIDAD de que el feto tenga una alteración cromosómica específica, sin dar un diagnóstico definitivo -un resultado de "alto riesgo" no confirma la enfermedad, requiere una prueba diagnóstica (como la amniocentesis o la biopsia de vellosidades coriónicas) para confirmarla o descartarla. Comunicar un resultado de cribado como si fuera un diagnóstico confirmado es un error de comunicación clínica grave, que puede causar angustia innecesaria si finalmente el diagnóstico resulta negativo.',
  no:{
    0:'Un resultado de alto riesgo en el cribado NO es equivalente a un diagnóstico confirmado; es precisamente esa confusión la que constituye el error de comunicación en este caso.',
    2:'El cribado prenatal sí puede (y con cierta frecuencia lo hace, dada su naturaleza probabilística) dar resultados de alto riesgo, que después deben confirmarse o descartarse con una prueba diagnóstica.',
    3:'La amniocentesis (una prueba diagnóstica invasiva) y el cribado combinado (una estimación probabilística no invasiva) son pruebas conceptualmente distintas, con propósitos y niveles de certeza diferentes.'
  },
  trampa:'Comunicar un resultado de cribado de alto riesgo como si fuera un diagnóstico definitivo, sin aclarar que se necesita una prueba diagnóstica adicional para confirmarlo.',
  obj:'Distinguir entre un resultado de cribado prenatal y un diagnóstico prenatal confirmado.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['cribado prenatal','diagnóstico prenatal','amniocentesis','comunicación de riesgo']
},
{
  id:'U8-G-Q34', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Consejo genético', sub:'Principio de no directividad',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿En qué consiste el principio de no directividad en el consejo genético?',
  ops:[
    'El profesional decide por la familia qué opción es la mejor',
    'El profesional informa con la mayor claridad y neutralidad posibles, pero la decisión final corresponde exclusivamente a la persona o familia, sin que el profesional imponga su propia valoración',
    'El consejo genético nunca debe darse a las familias afectadas',
    'El principio de no directividad solo aplica a enfermedades autosómicas dominantes'
  ],
  ok:1,
  clave:'La no directividad implica informar con neutralidad, dejando la decisión final exclusivamente a la persona o familia.',
  exp:'El principio de no directividad es central en el consejo genético moderno: el profesional informa con la mayor claridad y neutralidad posibles sobre el riesgo, el patrón de herencia y las opciones disponibles, pero la decisión final (someterse o no a una prueba, continuar o no un embarazo, etc.) corresponde exclusivamente a la persona o familia, sin que el profesional imponga su propia valoración o preferencia. Este principio respeta la autonomía de la persona frente a decisiones profundamente personales.',
  no:{
    0:'Es precisamente lo contrario del principio de no directividad, que evita que el profesional decida o imponga una opción sobre la familia.',
    2:'El consejo genético es precisamente el proceso mediante el cual se informa y acompaña a las familias afectadas; no se trata de evitarlo, sino de hacerlo de forma no directiva.',
    3:'El principio de no directividad es un principio general del consejo genético, aplicable a cualquier tipo de condición genética, no limitado a un patrón de herencia específico.'
  },
  trampa:'Confundir informar de forma neutral con decidir por la familia, o subestimar la aplicabilidad general de este principio ético.',
  obj:'Explicar el principio de no directividad en el consejo genético.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['consejo genético','no directividad','autonomía','ética genética']
},
{
  id:'U8-G-Q35', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Metilación del ADN', sub:'Efecto sobre la expresión génica',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué efecto general tiene la metilación de un promotor génico sobre la expresión de ese gen?',
  ops:[
    'Generalmente ACTIVA la expresión del gen',
    'Generalmente SILENCIA la expresión del gen, al dificultar la unión de la maquinaria de transcripción',
    'No tiene ningún efecto sobre la expresión génica',
    'Cambia permanentemente la secuencia de nucleótidos del gen'
  ],
  ok:1,
  clave:'La metilación de un promotor generalmente silencia la expresión del gen correspondiente.',
  exp:'La metilación del ADN añade un grupo metilo, típicamente a citosinas en regiones ricas en dinucleótidos CG (islas CpG), con frecuencia localizadas en regiones promotoras de genes. La metilación de un promotor generalmente SILENCIA la expresión del gen correspondiente, al dificultar la unión de la maquinaria de transcripción a esa región reguladora. Es un mecanismo epigenético: modifica la expresión génica sin alterar en absoluto la secuencia de nucleótidos del ADN.',
  no:{
    0:'Es al revés: la metilación de un promotor generalmente SILENCIA (no activa) la expresión génica.',
    2:'La metilación sí tiene un efecto significativo y bien documentado sobre la expresión génica, típicamente silenciándola cuando ocurre en regiones promotoras.',
    3:'La metilación es un mecanismo epigenético que NO cambia la secuencia de nucleótidos del ADN; solo añade un grupo químico (metilo) que modifica la expresión sin alterar la secuencia subyacente.'
  },
  trampa:'Invertir el efecto de la metilación sobre la expresión génica, o confundirla con un cambio real en la secuencia de ADN (que sería una mutación, no un fenómeno epigenético).',
  obj:'Explicar el efecto silenciador de la metilación de promotores sobre la expresión génica.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['metilación del ADN','islas CpG','silenciamiento génico','epigenética']
},
{
  id:'U8-G-Q36', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Acetilación de histonas', sub:'Efecto sobre la cromatina',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cómo afecta la acetilación de histonas a la estructura de la cromatina y a la expresión génica?',
  ops:[
    'Compacta aún más la cromatina, silenciando la expresión génica',
    'Relaja la estructura de la cromatina, facilitando el acceso de la maquinaria de transcripción y generalmente activando la expresión génica',
    'No tiene ningún efecto sobre la cromatina',
    'Cambia la secuencia de nucleótidos de las histonas de forma permanente'
  ],
  ok:1,
  clave:'La acetilación de histonas relaja la cromatina, facilitando la transcripción y activando generalmente la expresión génica.',
  exp:'La acetilación de histonas añade grupos acetilo a las proteínas histonas alrededor de las cuales se enrolla el ADN, relajando la estructura de la cromatina (haciéndola menos compacta) y facilitando el acceso de la maquinaria de transcripción -generalmente ACTIVANDO la expresión génica, el efecto contrario al de la metilación del ADN en promotores. Como la metilación, es un mecanismo epigenético que modifica la expresión sin alterar la secuencia de ADN.',
  no:{
    0:'Es al revés: la acetilación RELAJA (no compacta) la estructura de la cromatina, favoreciendo (no silenciando) la expresión génica.',
    2:'La acetilación de histonas sí tiene un efecto significativo sobre la estructura de la cromatina, relajándola y facilitando la transcripción.',
    3:'Las histonas son proteínas, no ADN; la acetilación es una modificación química de la proteína, no un cambio en ninguna secuencia de nucleótidos.'
  },
  trampa:'Invertir el efecto de la acetilación de histonas sobre la cromatina y la expresión génica, confundiéndolo con el efecto de la metilación del ADN.',
  obj:'Explicar el efecto activador de la acetilación de histonas sobre la expresión génica.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['acetilación de histonas','cromatina','expresión génica','epigenética']
},
{
  id:'U8-G-Q37', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Diferenciación celular', sub:'Base epigenética',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'Una neurona y un hepatocito comparten exactamente la misma secuencia de ADN, pero son células radicalmente distintas en forma y función. ¿Qué explica esta diferencia?',
  ops:[
    'Tienen secuencias de ADN distintas, pese a lo que sugiere la pregunta',
    'Tienen patrones epigenéticos distintos, que determinan qué genes están "encendidos" y cuáles "apagados" en cada tipo celular, pese a compartir el mismo genoma completo',
    'No existe ninguna explicación biológica para esta diferencia',
    'La diferencia se debe exclusivamente a mutaciones específicas de cada tipo celular'
  ],
  ok:1,
  clave:'La diferenciación celular se explica por patrones epigenéticos distintos que determinan qué genes están activos en cada tipo celular.',
  exp:'Todas las células de una persona comparten exactamente la misma secuencia de ADN, y sin embargo distintos tipos celulares (como una neurona y un hepatocito) son radicalmente distintos en forma y función -esa diferencia se explica precisamente por patrones epigenéticos distintos, que determinan qué genes están "encendidos" y cuáles "apagados" en cada tipo celular, pese a que todos tienen acceso al mismo genoma completo. La diferenciación celular es, en esencia, un fenómeno epigenético, no genético.',
  no:{
    0:'Todas las células somáticas de una persona comparten la misma secuencia de ADN (salvo excepciones muy específicas, como en ciertas células inmunes); la diferencia entre tipos celulares no se debe a secuencias distintas.',
    2:'Sí existe una explicación biológica bien establecida: la regulación epigenética diferencial de la expresión génica entre tipos celulares.',
    3:'La diferenciación celular normal no se debe a mutaciones específicas de cada tipo celular, sino a la regulación epigenética de la expresión de un mismo conjunto de genes compartido.'
  },
  trampa:'Buscar la explicación de la diferenciación celular en cambios de secuencia de ADN (mutaciones), en vez de en la regulación epigenética de la expresión génica sobre el mismo genoma compartido.',
  obj:'Explicar la base epigenética de la diferenciación celular.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['diferenciación celular','epigenética','expresión génica','regulación génica']
},
{
  id:'U8-G-Q38', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Enfermedad de Huntington', sub:'Repetición CAG',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué tipo de secuencia repetida se expande en el gen HTT de la enfermedad de Huntington, y cuál es su patrón de herencia?',
  ops:['Repetición CGG; ligada al X', 'Repetición CAG; autosómica dominante', 'Repetición CTG; autosómica recesiva', 'La enfermedad de Huntington no se debe a repeticiones'],
  ok:1,
  clave:'La enfermedad de Huntington se debe a expansión de repeticiones CAG en el gen HTT, con herencia autosómica dominante.',
  exp:'La enfermedad de Huntington se debe a la expansión anormal de una repetición CAG en el gen HTT, con herencia autosómica dominante, causando degeneración neurológica progresiva (movimientos coreicos, deterioro cognitivo, cambios psiquiátricos) de inicio típicamente en la edad adulta media. Es uno de los ejemplos clásicos de enfermedad por expansión de repeticiones, junto con el síndrome del X frágil (repetición CGG, ligado al X).',
  no:{
    0:'La repetición CGG corresponde al síndrome del X frágil, no a la enfermedad de Huntington, que se debe a repetición CAG.',
    2:'La repetición CTG se asocia a otras enfermedades por expansión (como la distrofia miotónica), no específicamente a la enfermedad de Huntington.',
    3:'La enfermedad de Huntington es precisamente uno de los ejemplos clásicos de enfermedad genética causada por expansión de repeticiones de tripletes.'
  },
  trampa:'Confundir el tipo de repetición y el patrón de herencia de la enfermedad de Huntington con los de otras enfermedades por expansión de repeticiones.',
  obj:'Identificar el tipo de repetición y el patrón de herencia de la enfermedad de Huntington.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['enfermedad de Huntington','repetición CAG','herencia autosómica dominante','gen HTT']
},
{
  id:'U8-G-Q39', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Síndrome del X frágil', sub:'Causa hereditaria de discapacidad intelectual',
  dif:2, hab:'Recuerdo', tipo:'directa', verificado:true,
  enunciado:'¿Qué relevancia epidemiológica tiene el síndrome del X frágil dentro de las causas de discapacidad intelectual?',
  ops:[
    'Es una causa extremadamente rara, casi anecdótica',
    'Es la causa HEREDITARIA más frecuente de discapacidad intelectual',
    'Nunca causa discapacidad intelectual, solo rasgos faciales',
    'Solo afecta a mujeres, nunca a hombres'
  ],
  ok:1,
  clave:'El síndrome del X frágil es la causa hereditaria más frecuente de discapacidad intelectual.',
  exp:'El síndrome del X frágil (repetición CGG en el gen FMR1, ligado al X) es la causa HEREDITARIA más frecuente de discapacidad intelectual, con rasgos faciales característicos y, en algunos varones portadores de premutaciones, riesgo de un síndrome de temblor-ataxia de aparición tardía. Al ser ligado al X, afecta predominantemente (aunque no exclusivamente) a hombres, aunque las mujeres portadoras también pueden tener manifestaciones más leves.',
  no:{
    0:'Es, de hecho, una de las causas hereditarias más comunes de discapacidad intelectual, no una causa rara o anecdótica.',
    2:'El síndrome del X frágil sí causa discapacidad intelectual de forma característica, además de rasgos faciales específicos, no solo estos últimos.',
    3:'Al ser una condición ligada al X, afecta predominantemente a hombres (con un solo X), aunque las mujeres portadoras (con dos X) también pueden tener manifestaciones, típicamente más leves.'
  },
  trampa:'Subestimar la relevancia epidemiológica del síndrome del X frágil como causa hereditaria de discapacidad intelectual.',
  obj:'Reconocer la relevancia epidemiológica del síndrome del X frágil como causa hereditaria de discapacidad intelectual.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['síndrome del X frágil','discapacidad intelectual','gen FMR1','repetición CGG']
},
{
  id:'U8-G-Q40', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Anticipación génica', sub:'Mecanismo y consecuencia clínica',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'En una familia con enfermedad de Huntington, el abuelo desarrolló síntomas leves a los 60 años, su hijo desarrolló síntomas moderados a los 45 años, y su nieto está desarrollando síntomas más graves a los 30 años.',
  enunciado:'¿Qué fenómeno genético explica este patrón de aparición cada vez más temprana y grave en generaciones sucesivas?',
  ops:[
    'Anticipación génica: el número de repeticiones tiende a aumentar de una generación a la siguiente, causando enfermedad más temprana y grave',
    'Este patrón es pura coincidencia, sin ninguna explicación genética',
    'La enfermedad de Huntington nunca muestra este tipo de patrón',
    'El número de repeticiones siempre disminuye en cada generación'
  ],
  ok:0,
  clave:'La anticipación génica explica que el número de repeticiones aumente en cada generación, con enfermedad cada vez más temprana y grave.',
  exp:'La anticipación génica es el fenómeno por el cual, en las enfermedades por expansión de repeticiones, el número de repeticiones tiende a AUMENTAR de una generación a la siguiente (durante la formación de los gametos, donde la maquinaria de replicación es propensa a "resbalar" en estas secuencias repetitivas inestables), lo que se traduce clínicamente en una enfermedad que aparece a una edad cada vez más temprana y con mayor gravedad en generaciones sucesivas -exactamente el patrón descrito en el caso de esta familia con Huntington.',
  no:{
    1:'No es coincidencia; es un fenómeno genético bien caracterizado y predecible en las enfermedades por expansión de repeticiones, como la enfermedad de Huntington.',
    2:'La enfermedad de Huntington es precisamente uno de los ejemplos clásicos donde se observa anticipación génica.',
    3:'Es al revés: el número de repeticiones tiende a AUMENTAR (no disminuir) en cada generación, lo que explica el patrón de agravamiento progresivo.'
  },
  trampa:'No reconocer el fenómeno específico de anticipación génica como la explicación de un patrón familiar de agravamiento progresivo en generaciones sucesivas.',
  obj:'Aplicar el concepto de anticipación génica para explicar un patrón familiar de agravamiento progresivo.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['anticipación génica','enfermedad de Huntington','expansión de repeticiones','herencia']
},
{
  id:'U8-G-Q41', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Impronta genómica', sub:'Concepto básico',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué significa que un gen esté sujeto a "impronta genómica"?',
  ops:[
    'Que su expresión depende de cuál progenitor lo transmitió, con uno de los dos alelos (materno o paterno) sistemáticamente silenciado',
    'Que el gen se expresa siempre de ambos alelos por igual, sin importar el origen parental',
    'Que el gen nunca puede transmitirse a la descendencia',
    'Que el gen solo existe en mujeres'
  ],
  ok:0,
  clave:'La impronta genómica significa que la expresión de un gen depende del progenitor de origen, con un alelo sistemáticamente silenciado.',
  exp:'La impronta genómica es un fenómeno epigenético por el cual la expresión de ciertos genes depende de cuál progenitor los transmitió: algunos genes improntados solo se expresan desde la copia heredada del padre (el alelo materno está silenciado), y otros solo desde la copia heredada de la madre (el alelo paterno está silenciado). Es una excepción a la regla general de que ambos alelos de la mayoría de los genes se expresan de forma equivalente, sin importar su origen parental.',
  no:{
    1:'Esa descripción corresponde a la expresión biparental EQUIVALENTE, que es la regla general para la mayoría de los genes; la impronta genómica es precisamente la excepción a esa regla.',
    2:'Los genes improntados sí se transmiten normalmente a la descendencia, como cualquier otro gen; lo particular es cómo se regula su expresión según el origen parental.',
    3:'La impronta genómica no está limitada a genes exclusivos de un sexo; afecta a genes presentes en ambos sexos, cuya expresión depende del origen parental de la copia heredada.'
  },
  trampa:'Confundir la impronta genómica con otros conceptos de herencia ligada al sexo o con la regla general de expresión biparental equivalente, que es precisamente lo que la impronta excepciona.',
  obj:'Definir el concepto de impronta genómica y su excepción a la expresión biparental equivalente.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['impronta genómica','expresión génica','origen parental','epigenética']
},
{
  id:'U8-G-Q42', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Prader-Willi vs. Angelman', sub:'Origen parental de la pérdida',
  dif:3, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Dos pacientes distintos tienen una pérdida de la misma región del cromosoma 15. Uno de ellos presenta hipotonía neonatal, hiperfagia y obesidad progresiva; el otro presenta discapacidad intelectual grave, ataxia y risa inapropiada frecuente.',
  enunciado:'¿Qué explica que la misma región cromosómica perdida produzca dos síndromes tan distintos entre estos pacientes?',
  ops:[
    'Es pura coincidencia, sin ninguna explicación genética específica',
    'El síndrome depende de cuál progenitor aportaba la contribución perdida: falta de la contribución paterna produce Prader-Willi (primer paciente); falta de la contribución materna produce Angelman (segundo paciente)',
    'Ambos pacientes tienen exactamente el mismo síndrome, solo que con distinta gravedad',
    'La región del cromosoma 15 no tiene ninguna relación con la impronta genómica'
  ],
  ok:1,
  clave:'Prader-Willi resulta de la falta de contribución paterna; Angelman, de la falta de contribución materna, de la misma región del cromosoma 15.',
  exp:'El síndrome de Prader-Willi (hipotonía neonatal, hiperfagia y obesidad progresiva, discapacidad intelectual leve) y el síndrome de Angelman (discapacidad intelectual grave, ataxia, risa inapropiada frecuente) resultan ambos de una alteración de la MISMA región del cromosoma 15, pero con consecuencias clínicas completamente distintas según cuál copia se pierda: Prader-Willi ocurre cuando se pierde la contribución PATERNA de esa región, mientras que Angelman ocurre cuando se pierde la contribución MATERNA de la misma región -el ejemplo clásico y más citado de impronta genómica en medicina.',
  no:{
    0:'No es coincidencia; existe una explicación genética precisa y bien caracterizada basada en el fenómeno de impronta genómica de esa región del cromosoma 15.',
    2:'Son dos síndromes clínicamente distintos y bien diferenciados, no el mismo síndrome con distinta gravedad; la diferencia se debe al origen parental de la pérdida, no a un espectro de gravedad de una única condición.',
    3:'La región del cromosoma 15 involucrada en Prader-Willi y Angelman es precisamente el ejemplo más citado de una región sujeta a impronta genómica en medicina.'
  },
  trampa:'No reconocer el mecanismo de impronta genómica como la explicación de por qué la misma pérdida cromosómica produce dos síndromes tan distintos según el origen parental.',
  obj:'Distinguir el síndrome de Prader-Willi del de Angelman según el origen parental de la región perdida del cromosoma 15.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['síndrome de Prader-Willi','síndrome de Angelman','impronta genómica','cromosoma 15']
},
{
  id:'U8-G-Q43', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Disomía uniparental', sub:'Concepto y relevancia',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué es la disomía uniparental, y por qué es especialmente relevante en regiones improntadas del genoma?',
  ops:[
    'Es heredar las dos copias de un cromosoma del mismo progenitor, sin ninguna copia del otro; en regiones improntadas, esto equivale a la ausencia total de la contribución de un progenitor específico, produciendo directamente el síndrome correspondiente',
    'Es un fenómeno que nunca tiene consecuencias clínicas de ningún tipo',
    'Es heredar tres copias de un cromosoma en vez de dos',
    'Solo puede ocurrir con el cromosoma X'
  ],
  ok:0,
  clave:'La disomía uniparental implica heredar ambas copias de un cromosoma de un solo progenitor; en regiones improntadas, equivale a la ausencia de la contribución del otro progenitor.',
  exp:'La disomía uniparental es una situación en la que una persona hereda las DOS copias de un cromosoma determinado del MISMO progenitor, sin ninguna copia del otro. Para regiones improntadas como la del cromosoma 15, esto tiene consecuencias directas y predecibles, porque la ausencia total de contribución de un progenitor específico es exactamente el mecanismo que produce Prader-Willi (si falta la contribución paterna, por disomía uniparental materna) o Angelman (si falta la materna), según cuál progenitor falte por completo.',
  no:{
    1:'Para la mayoría de los cromosomas, la disomía uniparental es clínicamente silente, pero para regiones improntadas SÍ tiene consecuencias clínicas directas y predecibles.',
    2:'La disomía uniparental implica heredar DOS copias (no tres) de un cromosoma, ambas del mismo progenitor, no una trisomía.',
    3:'La disomía uniparental puede ocurrir con cualquier cromosoma, no exclusivamente con el X; es especialmente relevante clínicamente en regiones improntadas como la del cromosoma 15.'
  },
  trampa:'Confundir la disomía uniparental con una trisomía, o subestimar su relevancia específica en regiones improntadas del genoma.',
  obj:'Explicar el concepto de disomía uniparental y su relevancia clínica en regiones improntadas.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['disomía uniparental','impronta genómica','cromosoma 15','origen parental']
},
{
  id:'U8-G-Q44', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Genes supresores tumorales', sub:'Hipótesis de los dos golpes',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Qué propone la hipótesis de los "dos golpes" de Knudson sobre la inactivación de los genes supresores tumorales?',
  ops:[
    'Se necesita solo UN golpe (una copia inactivada) para perder por completo la función supresora de un gen en una célula',
    'Se necesitan DOS golpes (dos copias inactivadas) para perder por completo la función supresora del gen en una célula determinada; en el cáncer hereditario, el primer golpe ya está presente en todas las células desde el nacimiento',
    'Los genes supresores tumorales nunca pueden inactivarse',
    'La hipótesis de los dos golpes no tiene ninguna relación con el cáncer hereditario'
  ],
  ok:1,
  clave:'Se necesitan dos copias inactivadas de un gen supresor tumoral para perder su función; en el cáncer hereditario, el primer golpe ya está en todas las células.',
  exp:'La hipótesis de los "dos golpes" de Knudson explica que, a nivel molecular, se necesitan dos golpes (dos copias inactivadas del gen) para perder por completo la función supresora tumoral en una célula determinada. En el cáncer hereditario, la persona YA NACE con un golpe (una copia mutada heredada) en TODAS sus células, así que solo necesita UN segundo golpe somático adicional en cualquier célula del cuerpo para inactivar por completo el gen en esa célula -por eso el cáncer hereditario aparece a edades más tempranas y con mayor frecuencia que el esporádico.',
  no:{
    0:'La hipótesis propone que se necesitan DOS golpes, no uno solo, para inactivar por completo la función supresora tumoral de un gen en una célula.',
    2:'Los genes supresores tumorales sí pueden inactivarse, precisamente mediante la acumulación de estos dos golpes -ese es el mecanismo central de la hipótesis.',
    3:'Esta hipótesis es precisamente la que explica por qué el cáncer hereditario aparece más temprano y con mayor frecuencia que el esporádico: el primer golpe ya está presente desde el nacimiento en las personas con predisposición hereditaria.'
  },
  trampa:'Confundir el número de golpes necesarios para inactivar un gen supresor tumoral, o no conectar la hipótesis con su relevancia específica para explicar el patrón del cáncer hereditario.',
  obj:'Explicar la hipótesis de los dos golpes de Knudson y su relación con el cáncer hereditario.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['hipótesis de los dos golpes','genes supresores tumorales','cáncer hereditario','Knudson']
},
{
  id:'U8-G-Q45', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'BRCA1 y BRCA2', sub:'Riesgo de cáncer',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer con una mutación hereditaria confirmada en BRCA1 pregunta qué implicaciones tiene esto para su vigilancia médica.',
  enunciado:'¿Qué recomendación es más apropiada, considerando el riesgo asociado a esta mutación?',
  ops:[
    'Ninguna medida especial: la mutación en BRCA1 no eleva el riesgo de ningún tipo de cáncer',
    'Vigilancia intensificada (como resonancia magnética mamaria además de mamografía, desde edades más tempranas que la población general), dado el riesgo considerablemente elevado de cáncer de mama y ovario asociado a esta mutación',
    'La mutación en BRCA1 solo afecta el riesgo de cáncer de próstata, no el de mama ni ovario',
    'No existe ninguna opción de manejo distinta a la de la población general'
  ],
  ok:1,
  clave:'Las mutaciones BRCA1/BRCA2 elevan considerablemente el riesgo de cáncer de mama y ovario, justificando vigilancia intensificada.',
  exp:'Las mutaciones hereditarias en BRCA1 o BRCA2 (genes supresores tumorales involucrados en la reparación del ADN) elevan considerablemente el riesgo de cáncer de mama y de ovario a lo largo de la vida, y en menor medida otros cánceres. Las portadoras de estas mutaciones tienen indicación de vigilancia intensificada (resonancia magnética mamaria además de mamografía, desde edades más tempranas que la población general) y, según el caso, pueden considerarse opciones de reducción de riesgo, siguiendo siempre el principio de no directividad ya visto en el consejo genético.',
  no:{
    0:'Las mutaciones en BRCA1 sí elevan de forma considerable el riesgo de varios tipos de cáncer, particularmente mama y ovario, justificando medidas de vigilancia específicas.',
    2:'BRCA1 y BRCA2 se asocian principalmente al riesgo de cáncer de mama y ovario, y en menor medida a otros cánceres (incluyendo próstata en hombres), no exclusivamente a próstata.',
    3:'Sí existen opciones de manejo distintas a las de la población general para las portadoras de mutaciones BRCA, precisamente por el riesgo elevado que confieren.'
  },
  trampa:'Subestimar la relevancia clínica de una mutación BRCA1/BRCA2 confirmada, o confundir los tipos de cáncer específicamente asociados a estos genes.',
  obj:'Explicar las implicaciones de una mutación BRCA1/BRCA2 confirmada para la vigilancia médica.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['BRCA1','BRCA2','cáncer de mama hereditario','vigilancia intensificada']
},
{
  id:'U8-G-Q46', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Síndrome de cáncer familiar', sub:'Señales de alarma',
  dif:2, hab:'Aplicación', tipo:'caso', verificado:true,
  caso:'Una mujer de 32 años es diagnosticada con cáncer de mama bilateral. Su madre y su tía materna también tuvieron cáncer de mama antes de los 45 años.',
  enunciado:'¿Qué patrón de la historia clínica y familiar de esta paciente debe hacer sospechar un síndrome de cáncer hereditario?',
  ops:[
    'Ninguno de los datos presentados es relevante para sospechar herencia',
    'La combinación de edad de aparición inusualmente temprana, cáncer bilateral, y múltiples familiares de primer/segundo grado afectados por el mismo tipo de cáncer a edades tempranas',
    'El cáncer de mama nunca tiene un componente hereditario',
    'Solo la edad de la paciente es relevante; los antecedentes familiares no aportan ninguna información'
  ],
  ok:1,
  clave:'Edad temprana, bilateralidad y múltiples familiares afectados a edades tempranas son señales de alarma clásicas de cáncer hereditario.',
  exp:'Ciertos patrones en la historia familiar y personal de cáncer deben hacer sospechar un síndrome de cáncer hereditario: cáncer a una edad inusualmente temprana para ese tipo de tumor, cáncer bilateral en órganos pares (como ambas mamas), y múltiples familiares de primer grado afectados por el mismo tipo de cáncer o relacionado. La paciente del caso reúne los tres criterios simultáneamente: edad temprana (32 años), bilateralidad, y antecedente familiar materno fuerte con la misma edad temprana de aparición -un patrón que justifica claramente derivar a evaluación y consejo genético.',
  no:{
    0:'Todos los datos presentados (edad, bilateralidad, antecedentes familiares) son señales de alarma clásicas y relevantes para sospechar un componente hereditario.',
    2:'El cáncer de mama sí tiene un componente hereditario bien establecido en un subgrupo importante de casos, particularmente asociado a mutaciones en genes como BRCA1 y BRCA2.',
    3:'Los antecedentes familiares (madre y tía materna afectadas a edades tempranas) son igual de relevantes que la edad de la paciente para sospechar un patrón hereditario, no datos irrelevantes.'
  },
  trampa:'No reconocer la combinación específica de señales de alarma (edad temprana, bilateralidad, agregación familiar) que, juntas, justifican sospechar un síndrome de cáncer hereditario.',
  obj:'Identificar las señales de alarma en la historia clínica y familiar que sugieren un síndrome de cáncer hereditario.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['síndrome de cáncer familiar','señales de alarma','cáncer de mama bilateral','agregación familiar']
},
{
  id:'U8-G-Q47', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'FISH', sub:'Uso dirigido',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la principal limitación de la técnica de FISH (hibridación in situ fluorescente) comparada con el cariotipo convencional?',
  ops:[
    'Solo responde a la pregunta específica para la que se diseñó la sonda, sin dar una visión global de todo el genoma como el cariotipo',
    'El FISH siempre es más lento que el cariotipo convencional',
    'El FISH no puede usarse para ninguna aplicación clínica real',
    'El FISH y el cariotipo son exactamente la misma técnica con distinto nombre'
  ],
  ok:0,
  clave:'El FISH solo responde a la región específica para la que se diseñó la sonda, sin dar visión global como el cariotipo.',
  exp:'La técnica de FISH usa sondas fluorescentes específicas para detectar la presencia, ausencia o número de copias de una región cromosómica CONCRETA y conocida de antemano -es más rápida que el cariotipo completo (resultado en horas), pero solo responde a la pregunta específica para la que se diseñó la sonda, no da una visión global del genoma completo como el cariotipo convencional. Por eso el FISH se usa típicamente de forma dirigida, cuando ya existe una sospecha clínica específica sobre una región conocida.',
  no:{
    1:'El FISH es, de hecho, considerablemente más RÁPIDO que el cariotipo convencional, dando resultados en horas en vez de días.',
    2:'El FISH tiene múltiples aplicaciones clínicas reales y bien establecidas, precisamente por su rapidez y especificidad para preguntas dirigidas.',
    3:'El FISH y el cariotipo son técnicas distintas, con fundamentos, resolución y propósitos diferentes, no la misma técnica con otro nombre.'
  },
  trampa:'No reconocer que la ventaja de rapidez del FISH viene acompañada de la limitación de no dar una visión global, a diferencia del cariotipo.',
  obj:'Explicar la limitación del FISH frente al cariotipo convencional en cuanto a su alcance diagnóstico.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['FISH','cariotipo','diagnóstico dirigido','técnicas citogenéticas']
},
{
  id:'U8-G-Q48', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Microarreglos', sub:'Ceguera a translocaciones equilibradas',
  dif:3, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Por qué los microarreglos (array-CGH), pese a detectar deleciones y duplicaciones mucho más pequeñas que el cariotipo, NO pueden detectar translocaciones equilibradas?',
  ops:[
    'Porque en una translocación equilibrada no hay pérdida ni ganancia neta de material genético que el array pueda detectar, ya que este método se basa en medir cantidad relativa de material, no su posición',
    'Porque los microarreglos son técnicamente idénticos al cariotipo',
    'Porque las translocaciones equilibradas no existen en realidad',
    'Porque los microarreglos solo pueden analizar el cromosoma X'
  ],
  ok:0,
  clave:'Los microarreglos detectan cambios de CANTIDAD de material genético, y una translocación equilibrada no cambia esa cantidad, solo la posición.',
  exp:'Los microarreglos (array-CGH) detectan deleciones y duplicaciones -cambios de CANTIDAD de material genético- comparando la cantidad relativa de ADN entre una muestra y un control de referencia. Una translocación equilibrada reorganiza el material genético entre cromosomas, pero no cambia la CANTIDAD total presente (no hay pérdida ni ganancia neta), así que el array no detecta ningún cambio, aunque la posición del material sí esté alterada. Por eso los microarreglos no detectan translocaciones equilibradas ni inversiones, pese a su alta resolución para deleciones y duplicaciones.',
  no:{
    1:'Los microarreglos son técnicamente muy distintos del cariotipo, con un fundamento (comparación de cantidad de ADN) y una resolución (mucho mayor para cambios pequeños) diferentes.',
    2:'Las translocaciones equilibradas sí existen y son un fenómeno genético real, aunque los microarreglos no puedan detectarlas por su fundamento técnico específico.',
    3:'Los microarreglos pueden analizar todo el genoma, no exclusivamente el cromosoma X; de hecho, su ventaja es precisamente examinar todo el genoma a la vez.'
  },
  trampa:'No entender el fundamento técnico específico de los microarreglos (medir cantidad relativa de material) como la razón de su ceguera específica a las reorganizaciones equilibradas.',
  obj:'Explicar por qué los microarreglos no pueden detectar translocaciones equilibradas pese a su alta resolución.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['microarreglos','array-CGH','translocación equilibrada','resolución diagnóstica']
},
{
  id:'U8-G-Q49', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Secuenciación', sub:'Resolución de una sola base',
  dif:1, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la resolución diagnóstica de la secuenciación genética, comparada con el cariotipo, el FISH y los microarreglos?',
  ops:[
    'Es la técnica de menor resolución de todas',
    'Detecta cambios a nivel de una sola base, la resolución más fina de todas las técnicas diagnósticas genéticas mencionadas',
    'Tiene exactamente la misma resolución que el cariotipo convencional',
    'Nunca se usa en genética médica'
  ],
  ok:1,
  clave:'La secuenciación detecta cambios a nivel de una sola base, la resolución más fina entre las técnicas diagnósticas genéticas.',
  exp:'La secuenciación (desde genes específicos hasta el exoma o genoma completos) detecta cambios a nivel de una sola base, la resolución más fina de todas las técnicas diagnósticas genéticas: más fina que el cariotipo (alteraciones grandes, visibles al microscopio), el FISH (regiones específicas conocidas) y los microarreglos (deleciones y duplicaciones, pero no mutaciones puntuales ni translocaciones equilibradas). Es la técnica de elección cuando se sospecha una mutación puntual específica.',
  no:{
    0:'Es precisamente lo contrario: la secuenciación es la técnica de MAYOR resolución de todas las mencionadas, no la de menor.',
    2:'La secuenciación tiene una resolución muchísimo más fina que el cariotipo, que solo detecta alteraciones cromosómicas grandes visibles al microscopio.',
    3:'La secuenciación es ampliamente usada en genética médica moderna, especialmente para identificar mutaciones puntuales específicas causantes de enfermedades monogénicas.'
  },
  trampa:'Subestimar la resolución de la secuenciación frente a otras técnicas diagnósticas genéticas de menor precisión.',
  obj:'Ubicar la secuenciación como la técnica de mayor resolución diagnóstica genética disponible.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['secuenciación genética','resolución diagnóstica','mutación puntual','exoma']
},
{
  id:'U8-G-Q50', programa:'unirm', cuatri:8,
  esp:'Genética Médica', tema:'Alteraciones cromosómicas', sub:'Comparación numérica y estructural',
  dif:2, hab:'Comprensión', tipo:'directa', verificado:true,
  enunciado:'¿Cuál es la diferencia fundamental entre una alteración cromosómica NUMÉRICA (como una trisomía) y una ESTRUCTURAL (como una translocación)?',
  ops:[
    'La numérica cambia la CANTIDAD de cromosomas completos (de más o de menos); la estructural reorganiza o altera partes de uno o más cromosomas, sin necesariamente cambiar el número total de cromosomas',
    'Ambos términos describen exactamente el mismo tipo de alteración',
    'Las alteraciones numéricas nunca tienen consecuencias clínicas',
    'Las alteraciones estructurales siempre cambian el número total de cromosomas'
  ],
  ok:0,
  clave:'Las alteraciones numéricas cambian la cantidad de cromosomas completos; las estructurales reorganizan partes de cromosomas sin necesariamente cambiar el número total.',
  exp:'Una alteración cromosómica numérica (como una trisomía o monosomía) cambia la CANTIDAD de cromosomas completos que tiene una persona (de más o de menos), típicamente por no disyunción durante la meiosis. Una alteración estructural (translocación, deleción, inversión) reorganiza o altera partes de uno o más cromosomas -ganando, perdiendo o reubicando fragmentos-, sin necesariamente cambiar el número TOTAL de cromosomas (por ejemplo, una translocación equilibrada mantiene el mismo número total de 46 cromosomas, solo reorganizados entre sí).',
  no:{
    1:'Son dos categorías conceptualmente distintas de alteración cromosómica, con mecanismos y consecuencias clínicas diferentes.',
    2:'Las alteraciones numéricas sí tienen consecuencias clínicas significativas, como se vio con las trisomías autosómicas y las alteraciones de cromosomas sexuales.',
    3:'Las alteraciones estructurales EQUILIBRADAS (translocaciones, inversiones) mantienen el mismo número total de cromosomas; solo las alteraciones estructurales DESEQUILIBRADAS (como algunas deleciones grandes) podrían, en ciertos casos, acompañarse de un cambio de número.'
  },
  trampa:'Confundir el concepto de alteración numérica (cambio en la cantidad total de cromosomas) con el de alteración estructural (reorganización de partes de cromosomas), que son categorías distintas.',
  obj:'Distinguir conceptualmente las alteraciones cromosómicas numéricas de las estructurales.',
  ref:'Nussbaum, Genética en Medicina. Jorde, Genética Médica.',
  tags:['alteración cromosómica numérica','alteración cromosómica estructural','trisomía','translocación']
}

]);
