/* ============================================================
   EXPLICACIONES — lote 11  (55 casos clínicos)
   Años 2014 a 2016. MIR 2017 de medicina excluido por cuarentena.
   Las 55 respuestas oficiales verificadas una a una y correctas.
   Muchas entradas corrigen ademas la especialidad/tema que el
   clasificador automatico habia asignado mal: traumatologia,
   psiquiatria, farmacologia, bioestadistica, oftalmologia y
   neumologia estaban absorbidas dentro de "Medicina Interna".
   ============================================================ */
window.EXPLICACIONES = Object.assign(window.EXPLICACIONES || {}, {

/* ==================== EPIDEMIOLOGÍA Y BIOESTADÍSTICA ==================== */
'MIR-2015-M192': {
  esp:'Epidemiología', tema:'Diseños de estudio', sub:'Estudio ecológico',
  clave:'La unidad de análisis es el PAÍS, no la persona: eso define un estudio ecológico.',
  exp:'La pregunta que clasifica cualquier diseño observacional es de quién se tiene el dato. Aquí no existe ninguna persona de la que se sepa a la vez cuánta carne come y si tiene cáncer: lo que se compara son *promedios de países*, consumo per cápita frente a incidencia registrada. Cuando la unidad de análisis es un grupo o una población y no el individuo, el estudio es *ecológico*. Su ventaja es la rapidez y el bajo coste, porque trabaja con estadísticas ya publicadas, y sirve muy bien para generar hipótesis. Su límite es la *falacia ecológica*: que una asociación se cumpla entre países no garantiza que se cumpla dentro de cada país, porque puede que quienes comen carne no sean los mismos que enferman. Por eso un hallazgo ecológico nunca cierra una relación causal, solo abre la puerta a un estudio individual.',
  no:{1:'Una serie de casos describe pacientes ya enfermos, sin grupo de comparación ni medida de exposición poblacional.',2:'El caso-cohorte selecciona un subgrupo aleatorio de una cohorte definida de individuos, que aquí no existe.',3:'El corte transversal mide exposición y enfermedad en cada PERSONA en un momento dado; aquí el dato es por país.'},
  trampa:'Como todo se mide en el mismo año, se etiqueta de transversal. Lo transversal y lo ecológico comparten el corte temporal, pero se separan por la unidad de análisis.',
  dx:[],
  obj:'Reconocer el estudio ecológico y su principal sesgo, la falacia ecológica.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Hernández-Aguado, Manual de Epidemiología y Salud Pública.'
},
'MIR-2015-M193': {
  esp:'Epidemiología', tema:'Diseños de estudio', sub:'Estudio transversal',
  clave:'Una sola visita, sin seguimiento y sin partir de la enfermedad: estudio de prevalencia (transversal).',
  exp:'Aquí se toma una muestra aleatoria de personas que acuden a vacunarse y, en *ese mismo momento*, se registra a la vez la exposición —tomar hipolipemiantes— y la enfermedad —tener diabetes—. No se espera a que ocurra nada ni se parte de enfermos ya diagnosticados: es un corte en el tiempo, es decir, un estudio *transversal o de prevalencia*. Sirve para describir la frecuencia de una condición y para explorar asociaciones, pero tiene una limitación de fondo: no distingue qué vino antes. Aquí eso es evidente, porque lo razonable es que la diabetes lleve a prescribir el hipolipemiante y no al revés; el diseño mide asociación, nunca secuencia temporal, y por eso no permite hablar de causa.',
  no:{1:'En un caso-control se parte de sujetos YA diabéticos y de controles sin diabetes, y se mira hacia atrás; aquí se muestrea sin conocer el diagnóstico.',2:'Una cohorte prospectiva exige seguir a los sujetos en el tiempo esperando la aparición de la enfermedad.',3:'No hay ensayo: el investigador no asigna ningún tratamiento, solo observa.'},
  trampa:'Que existan un grupo expuesto y otro no expuesto hace pensar en cohortes. La diferencia es que en el transversal ambos datos se recogen el mismo día.',
  dx:[],
  obj:'Identificar el diseño transversal y su incapacidad para establecer secuencia temporal.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Fletcher, Epidemiología Clínica, 5.ª ed.'
},
'MIR-2016-M119': {
  esp:'Epidemiología', tema:'Farmacovigilancia', sub:'Estudios postautorización',
  clave:'Vacuna ya comercializada más observar los efectos adversos según van apareciendo: EPA observacional de seguimiento prospectivo.',
  exp:'La vacuna de la fiebre amarilla está autorizada y en uso: cualquier estudio que se haga ahora con ella es, por definición, *postautorización*. Además el centro no asigna nada, se limita a administrar la vacuna como haría de todos modos y a *registrar* lo que ocurre después, de modo que es *observacional*; y como los sujetos se siguen hacia delante desde la vacunación, el seguimiento es *prospectivo*. Esa es exactamente la definición de un estudio postautorización de seguimiento prospectivo, la herramienta clásica de la farmacovigilancia activa: la fase III previa a la comercialización detecta lo frecuente, pero solo la vigilancia postautorización, con miles de expuestos reales, saca a la luz los efectos raros y los que aparecen en poblaciones que el ensayo excluyó.',
  no:{0:'Un ensayo fase III implica asignación e intervención con un producto aún no comercializado; aquí la vacuna ya está autorizada y nadie asigna nada.',1:'Un caso-control partiría de personas que YA sufrieron el efecto adverso y buscaría hacia atrás la exposición.',2:'Los estudios preautorización son los que se hacen antes de la comercialización, que no es el caso.'},
  trampa:'Se confunde "estudiar la seguridad de una vacuna" con "ensayo clínico". Lo que decide la etiqueta es si el producto ya está autorizado y si el investigador interviene.',
  dx:[],
  obj:'Clasificar un estudio de farmacovigilancia como EPA observacional prospectivo.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con la normativa de estudios postautorización de la AEMPS.'
},
'MIR-2016-M132': {
  esp:'Epidemiología', tema:'Diseños de estudio', sub:'Caso-control anidado',
  clave:'Casos y controles extraídos DE DENTRO de una cohorte ya definida: caso-control anidado en una cohorte.',
  exp:'El diseño se lee en dos tiempos. Primero existe una *cohorte* previamente definida, la población de la Comunidad de Madrid, a la que se sigue durante dos años. Después, dentro de esa cohorte, se identifican los que sufren infarto —los *casos*— y se les compara con un grupo *más numeroso sin infarto muestreado de la misma cohorte* —los *controles*—, y en ambos se mide hacia atrás la exposición a AINE. Esa comparación de exposición entre enfermos y no enfermos es lo que define un caso-control; que ambos grupos salgan de la misma cohorte es lo que lo hace *anidado*. La ventaja es que combina lo mejor de los dos mundos: la exposición está registrada antes de que ocurriera la enfermedad, lo que elimina el sesgo de memoria clásico del caso-control, pero solo hay que procesar los datos de una fracción de la cohorte, lo que abarata enormemente el estudio.',
  no:{0:'Está invertido: lo anidado es el caso-control dentro de la cohorte, no la cohorte dentro del caso-control.',1:'No hay aleatorización de ningún tipo: nadie asigna quién toma AINE.',2:'El diseño de casos y cohortes usa como comparador una subcohorte aleatoria tomada al INICIO, no controles libres de enfermedad al final del seguimiento.'},
  trampa:'La palabra "cohorte" en el enunciado empuja a responder cohortes. Lo que define el diseño es cómo se seleccionan los sujetos que se analizan: aquí, a partir de la enfermedad.',
  dx:[],
  obj:'Reconocer el caso-control anidado y su ventaja frente al caso-control clásico.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Rothman, Modern Epidemiology.'
},
'MIR-2016-M134': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'Riesgo atribuible',
  clave:'Riesgo atribuible en los expuestos: 15 menos 5 igual a 10 por mil al año. Es una RESTA, no un cociente.',
  exp:'Las dos medidas que se sacan de una tabla de cohortes responden a preguntas distintas. El *riesgo relativo* divide y contesta cuántas veces más probable es enfermar estando expuesto: aquí 15 entre 5 es 3, y sirve para juzgar si la asociación es fuerte y probablemente causal. El *riesgo atribuible* resta y contesta cuánta enfermedad se debe a la exposición en quienes la tienen: 15 menos 5 son *10 por mil al año*, es decir, de cada 15 infartos que ocurren entre los hipertensos, 10 no habrían ocurrido sin la hipertensión y 5 habrían ocurrido igualmente. Esta segunda cifra es la que importa en clínica y en salud pública, porque mide el *impacto absoluto* y, por tanto, cuánto se ganaría eliminando el factor. Su inverso, además, es el número necesario a tratar.',
  no:{0:'20 por mil sale de sumar ambas incidencias, operación que no significa nada.',1:'15 por mil es la incidencia TOTAL de los hipertensos, que incluye el riesgo basal que tendrían aun sin hipertensión.',3:'3 es el riesgo RELATIVO, un cociente sin unidades, no un riesgo por mil y año.'},
  trampa:'Se responde 3 porque es la cifra que primero sale al dividir. El riesgo relativo se divide y el atribuible se resta: la pregunta pedía lo segundo.',
  dx:[],
  obj:'Calcular el riesgo atribuible en los expuestos y distinguirlo del riesgo relativo.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Fletcher, Epidemiología Clínica, 5.ª ed.'
},
'MIR-2014-M131': {
  esp:'Epidemiología', tema:'Pruebas diagnósticas', sub:'Probabilidad preprueba',
  clave:'La probabilidad preprueba de una enfermedad es, en esencia, su PREVALENCIA en el entorno del paciente.',
  exp:'Antes de pedir ninguna prueba, el clínico parte de una estimación de cuán probable es la enfermedad en ese paciente: es la *probabilidad preprueba*, y su mejor aproximación objetiva es la *frecuencia de la enfermedad en el medio* donde se atiende. Esto no es un tecnicismo: la misma prueba con la misma sensibilidad y especificidad da valores predictivos radicalmente distintos según la prevalencia, porque el teorema de Bayes combina la probabilidad previa con el cociente de probabilidad de la prueba para dar la probabilidad posprueba. Si la hepatitis A es endémica en la zona, un resultado positivo casi confirma; si es rarísima, ese mismo positivo puede ser mayoritariamente un falso positivo. De ahí la regla práctica: una prueba solo es útil cuando la sospecha previa es intermedia, porque con sospecha muy baja o muy alta el resultado rara vez cambia la conducta.',
  no:{0:'La intensidad de la ictericia mide gravedad o colestasis, no la probabilidad de que la causa sea el virus A.',2:'La duración orienta a agudo frente a crónico, pero no cuantifica la probabilidad previa.',3:'La experiencia del médico mejora el juicio clínico, pero es subjetiva y no es un dato que se pueda medir ni transferir.',4:'Los antecedentes modulan el riesgo individual, pero el anclaje objetivo de la estimación es la prevalencia del entorno.'},
  trampa:'Se busca la respuesta "más clínica" y se descarta la epidemiológica. La probabilidad preprueba es, por definición, prevalencia ajustada por el contexto del paciente.',
  dx:[],
  obj:'Definir la probabilidad preprueba y su relación con la prevalencia.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Sackett, Medicina Basada en la Evidencia.'
},
'MIR-2014-M178': {
  esp:'Epidemiología', tema:'Ensayos clínicos', sub:'Diseño factorial',
  clave:'Dos intervenciones evaluadas a la vez y también su combinación: ensayo factorial.',
  exp:'La pregunta plantea dos objetivos simultáneos: probar el citostático nuevo y probar qué añade el anticuerpo monoclonal. El diseño hecho para eso es el *factorial*, que aleatoriza dos veces y genera cuatro grupos: ninguno de los dos fármacos, solo el citostático, solo el anticuerpo, y ambos. Su gran ventaja es la *eficiencia*: se responden dos preguntas con prácticamente el tamaño muestral de una sola, porque cada comparación usa a todos los pacientes. Además es el único diseño que permite estudiar la *interacción*, es decir, si el efecto conjunto es mayor o menor que la suma de los efectos por separado, justo lo que se quiere saber cuando se pregunta qué "añade" un fármaco al otro. Su condición es que las dos intervenciones no se estorben entre sí.',
  no:{0:'El ensayo paralelo compara solo dos ramas y obligaría a montar dos estudios distintos.',1:'El cruzado da a cada paciente ambos tratamientos en secuencia; no sirve en oncología con enfermedad progresiva ni con respuestas irreversibles.',3:'El diseño secuencial analiza los datos a medida que entran para parar antes de tiempo; resuelve cuándo terminar, no cómo evaluar dos fármacos.',4:'El ensayo n igual a 1 estudia a un único paciente y no permite generalizar.'},
  trampa:'Se elige "paralelo" por ser el diseño más común. Cuando el enunciado dice "al mismo tiempo" y "lo que añade", pide factorial.',
  dx:[],
  obj:'Elegir el diseño factorial para evaluar dos intervenciones y su interacción.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Friedman, Fundamentals of Clinical Trials.'
},
'MIR-2014-M180': {
  esp:'Epidemiología', tema:'Ensayos clínicos', sub:'Ensayo pragmático',
  clave:'El ensayo pragmático gana VALIDEZ EXTERNA: sus pacientes se parecen a los de la consulta real.',
  exp:'Los dos tipos de ensayo responden a preguntas distintas. El *explicativo* pregunta si el fármaco puede funcionar en condiciones ideales, y para ello selecciona pacientes muy homogéneos, con criterios de exclusión estrictos y un protocolo rígido: eso maximiza la *validez interna* y la capacidad de detectar diferencias, pero produce un resultado difícil de trasladar. El *pragmático* pregunta si el fármaco funciona en la práctica habitual, así que admite pacientes reales, ancianos, con comorbilidad, polimedicados y con adherencia imperfecta, y compara con la alternativa que se usaría de verdad. Lo que gana con eso es *validez externa*: información sobre subgrupos representativos de la clínica diaria. El precio es una muestra más heterogénea, más ruido y la necesidad de un tamaño muestral mayor.',
  no:{1:'La muestra homogénea con poca variabilidad es característica del ensayo explicativo, no del pragmático.',2:'La mayor capacidad de detectar diferencias corresponde al explicativo, que reduce el ruido al máximo.',3:'La mayor validez interna es también del explicativo; el pragmático sacrifica algo de ella para ganar aplicabilidad.',4:'El pragmático necesita MÁS pacientes, no menos, precisamente por su heterogeneidad.'},
  trampa:'Se mezclan validez interna y externa. El pragmático cambia precisión por aplicabilidad; el explicativo hace justo lo contrario.',
  dx:[],
  obj:'Distinguir ensayo pragmático de explicativo por validez interna frente a externa.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Sackett, Medicina Basada en la Evidencia.'
},
'MIR-2014-M182': {
  esp:'Epidemiología', tema:'Diseños de estudio', sub:'Cohorte prospectiva',
  clave:'Se parte de la EXPOSICIÓN, padres fumadores o no, en niños sanos, y se espera un año a ver quién enferma: cohorte prospectiva.',
  exp:'La secuencia del enunciado define el diseño sin ambigüedad. Se seleccionan niños *sanos*, se les clasifica según una *exposición* —convivir o no con padres fumadores— y solo *después* se sigue a ambos grupos durante un año para contar los casos nuevos de enfermedad respiratoria. Eso es una cohorte, y como el seguimiento avanza hacia el futuro desde el momento en que arranca el estudio, es *prospectiva*. Es un diseño observacional, no experimental, porque el investigador no decide quién fuma: solo lo registra. Su gran fortaleza es que permite medir *incidencia* y calcular riesgo relativo y riesgo atribuible, y que la exposición queda documentada antes de la enfermedad, lo que refuerza la secuencia temporal.',
  no:{1:'Un caso-control partiría de niños ya enfermos frente a niños sanos, mirando hacia atrás la exposición.',2:'La metodología cualitativa no cuantifica frecuencias ni compara grupos; aquí se cuentan casos.',3:'No es experimental porque el investigador no asigna la exposición, solo observa quién la tiene.',4:'La cohorte es INEFICIENTE para enfermedades raras, que es justo el terreno del caso-control.'},
  trampa:'Que ambos grupos se seleccionen "al mismo tiempo" hace pensar en transversal. Lo determinante es que la enfermedad se mide un año DESPUÉS.',
  dx:[],
  obj:'Identificar la cohorte prospectiva y para qué tipo de enfermedad es eficiente.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Hernández-Aguado, Manual de Epidemiología y Salud Pública.'
},
'MIR-2014-M184': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'Tipos de variable',
  clave:'Presencia o ausencia, sí o no: variable CATEGÓRICA dicotómica. El 0 y el 1 son etiquetas, no cantidades.',
  exp:'Que una variable se codifique con números no la convierte en numérica. Aquí el 1 significa "tiene bacteriuria" y el 0 "no la tiene": son *categorías mutuamente excluyentes* sin ningún orden ni magnitud, es decir, una variable *categórica nominal dicotómica*. La distinción importa porque decide qué se puede hacer con ella: en las categóricas se calculan proporciones y se comparan con chi cuadrado o test exacto de Fisher, mientras que en las cuantitativas se calculan medias y se comparan con la t de Student o el ANOVA. Sería ordinal si las categorías tuvieran un orden natural, como leve, moderado y grave; sería cuantitativa discreta si contase unidades enteras, como número de episodios; y continua si midiese en una escala con decimales, como las UFC por mililitro.',
  no:{0:'Ordinal exige un orden entre categorías; aquí solo hay presencia o ausencia, sin gradación.',1:'Los códigos 0 y 1 son etiquetas arbitrarias: no tiene sentido decir que 1 es "el doble" de 0.',3:'Continua sería el recuento en UFC por mililitro, que admite infinitos valores intermedios.',4:'Discreta cuantitativa sería contar el número de episodios de bacteriuria, no su mera presencia.'},
  trampa:'La codificación numérica engaña. Antes de elegir un test estadístico hay que preguntarse si el número mide o solo nombra.',
  dx:[],
  obj:'Clasificar correctamente una variable dicotómica y sus implicaciones estadísticas.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Altman, Practical Statistics for Medical Research.'
},
'MIR-2014-M195': {
  esp:'Epidemiología', tema:'Pruebas diagnósticas', sub:'Valor predictivo positivo',
  clave:'La paciente pregunta por el VPP: 16 verdaderos positivos entre 22 positivos totales, es decir 0,727.',
  exp:'La pregunta de la paciente —si sale positiva, qué probabilidad tengo de tener cáncer— es exactamente la definición del *valor predictivo positivo*, y se calcula leyendo la tabla en horizontal, por filas de resultado, no por columnas de enfermedad. Con 18 enfermos y 16 positivos hay *16 verdaderos positivos* y 2 falsos negativos; con 94 sanos y 88 negativos hay *6 falsos positivos*. El total de resultados positivos es por tanto 16 más 6, o sea 22, y de ellos son ciertos 16: el VPP es 16 entre 22, es decir *0,727*. Conviene ver que la sensibilidad, 16 entre 18 o 0,89, y la especificidad, 88 entre 94 o 0,94, describen la prueba y no cambian con la población, mientras que el VPP depende de la prevalencia y por eso solo es válido en poblaciones parecidas a esta.',
  no:{1:'0,93 corresponde aproximadamente a la especificidad, que se lee en la columna de los sanos.',2:'0,645 no corresponde a ninguna de las medidas que salen de esta tabla.',3:'0,56 no sale de ninguno de los cocientes posibles con estos datos.',4:'Sí puede calcularse: la prevalencia del estudio, 18 entre 112, es la que se aplica y está en el enunciado.'},
  trampa:'Se responde la sensibilidad porque es el cociente más familiar. La sensibilidad responde "si tiene cáncer, saldrá positiva"; el VPP responde "si sale positiva, tiene cáncer": son preguntas inversas.',
  dx:[],
  obj:'Calcular el valor predictivo positivo a partir de una tabla de dos por dos.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Sackett, Medicina Basada en la Evidencia.'
},

/* ==================== NEUMOLOGÍA ==================== */
'MIR-2014-M115': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Sarcoidosis',
  clave:'Sarcoidosis estadio I asintomática: NO se trata, se observa. Remite sola en la mayoría de los casos.',
  exp:'La tríada del caso —granulomas *no caseificantes*, adenopatías hiliares *bilaterales* y ECA elevada— dibuja una sarcoidosis, y la clave está en el estadio y en la clínica. La afectación es *estadio I*, solo adenopatías hiliares sin infiltrado pulmonar, y la paciente está asintomática salvo unas lesiones cutáneas banales. En esa situación la enfermedad *remite espontáneamente en la gran mayoría de los casos*, de modo que los corticoides no aportan beneficio y sí toda su toxicidad. La conducta es completar el estudio —función respiratoria con difusión, calcemia y calciuria, electrocardiograma y exploración oftalmológica— y vigilar. Los corticoides se reservan para la afectación *de órgano con riesgo*: deterioro funcional respiratorio o estadios avanzados, afectación cardiaca, neurológica, ocular grave o hipercalcemia sintomática.',
  no:{0:'Los corticoides solo se indican si hay afectación de órgano relevante o síntomas importantes; aquí no los hay.',1:'La hidroxicloroquina se reserva para la sarcoidosis cutánea desfigurante o la hipercalcemia, no para el estadio I asintomático.',2:'La azatioprina es ahorrador de corticoides en casos corticodependientes, no tratamiento inicial.',3:'La leflunomida es una alternativa de segunda o tercera línea en enfermedad refractaria.'},
  trampa:'Se trata la biopsia en lugar del paciente. En la sarcoidosis deciden el estadio radiológico y la clínica, no el granuloma.',
  dx:['Sarcoidosis estadio I','Tuberculosis','Linfoma','Beriliosis'],
  obj:'Decidir la conducta en la sarcoidosis estadio I asintomática.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías ATS/ERS sobre sarcoidosis.'
},
'MIR-2014-M124': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Neumonía adquirida en la comunidad',
  clave:'Neumococo confirmado por antígeno urinario y saturación del 80%: neumonía grave que ingresa. Ceftriaxona.',
  exp:'Dos decisiones se encadenan. La primera es el *nivel de gravedad*: una saturación del 80% con taquipnea y afectación general obliga a ingresar y a tratar por vía parenteral, de modo que quedan fuera los antibióticos orales de manejo ambulatorio. La segunda es la *cobertura*: el antígeno de neumococo en orina es positivo y la radiografía muestra un infiltrado alveolar con broncograma, patrón típicamente neumocócico, así que hace falta un betalactámico con buena actividad frente a *Streptococcus pneumoniae*, incluidas las cepas con sensibilidad disminuida a penicilina. La *ceftriaxona* es la elección: cefalosporina de tercera generación, intravenosa, de dosis única diaria y con excelente actividad antineumocócica. En la práctica hospitalaria se asocia un macrólido mientras no se ha identificado el germen, para cubrir atípicas; una vez confirmado el neumococo, el betalactámico es el eje del tratamiento.',
  no:{0:'La ceftazidima cubre Pseudomonas pero tiene actividad ANTINEUMOCÓCICA POBRE: es una mala elección justo aquí.',1:'La claritromicina en monoterapia deja mal cubierto al neumococo por las altas tasas de resistencia a macrólidos.',2:'La azitromicina comparte el problema de resistencia y es tratamiento oral de neumonía leve ambulatoria.',4:'La doxiciclina es alternativa ambulatoria en pacientes jóvenes sin comorbilidad, no en una neumonía hipoxémica.'},
  trampa:'Se elige un macrólido por reflejo ante cualquier neumonía. Con neumococo documentado y paciente hipoxémico hace falta betalactámico intravenoso.',
  dx:['Neumonía neumocócica','Neumonía atípica','Neumonía por aspiración'],
  obj:'Elegir el antibiótico empírico en la neumonía neumocócica que requiere ingreso.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con guías IDSA/ATS de neumonía adquirida en la comunidad.'
},
'MIR-2014-M137': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Acropaquias',
  clave:'Acropaquias de aparición reciente y progresiva en un adulto: tumor TORÁCICO. De la lista, el mesotelioma pleural.',
  exp:'Las acropaquias adquiridas se producen por mecanismos que arrancan en el *lecho vascular pulmonar*: los megacariocitos, que normalmente quedan atrapados en el capilar pulmonar, escapan a la circulación sistémica y liberan factor de crecimiento derivado de plaquetas y VEGF en los lechos distales de dedos y ortejos. Por eso la inmensa mayoría de las acropaquias adquiridas tienen origen *intratorácico*: neoplasias pulmonares y pleurales, supuración crónica como bronquiectasias, absceso o empiema, fibrosis pulmonar, y también cardiopatías cianóticas y endocarditis. Entre los tumores de la lista, el *mesotelioma pleural* es el que con más frecuencia y de forma más llamativa produce acropaquias y osteoartropatía hipertrófica. La aparición reciente y rápida obliga siempre a buscar tumor torácico; conviene además preguntar por exposición a *asbesto*, que es el factor de riesgo del mesotelioma.',
  no:{0:'El adenocarcinoma gástrico da síndromes paraneoplásicos cutáneos como la acantosis nigricans, no acropaquias.',1:'El epidermoide de esófago no es causa característica de acropaquias.',2:'El timoma se asocia a miastenia gravis, aplasia pura de serie roja e hipogammaglobulinemia.',3:'El carcinoma folicular de tiroides no produce acropaquias; la acropaquia tiroidea aparece en la enfermedad de Graves, no en el cáncer.'},
  trampa:'Se busca el tumor más frecuente en vez del que produce el signo. Las acropaquias apuntan al tórax, y eso reduce la lista a dos opciones.',
  dx:['Mesotelioma pleural','Carcinoma broncogénico','Bronquiectasias','Fibrosis pulmonar'],
  obj:'Relacionar las acropaquias adquiridas con la patología intratorácica.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed.'
},
'MIR-2014-M53': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Apnea obstructiva del sueño',
  clave:'HTA refractaria, patrón non-dipper, cefalea matutina e hipersomnia diurna: apnea del sueño. Polisomnografía.',
  exp:'Cuatro datos apuntan en la misma dirección. La hipertensión es *refractaria*, definida por seguir alta con tres fármacos entre ellos un diurético, lo que obliga a buscar causa secundaria. El MAPA muestra que las presiones *nocturnas superan a las diurnas*: es el patrón *riser* o non-dipper, el más característico de la apnea obstructiva, porque cada apnea provoca una descarga simpática con pico tensional durante el sueño. La *cefalea matutina* traduce la hipercapnia nocturna y la *hipersomnia diurna* el sueño fragmentado. Y el fenotipo, varón, obeso y fumador, completa el cuadro. La apnea del sueño es de hecho la primera causa de hipertensión secundaria en el adulto, por delante de las endocrinas y las renales. La prueba que confirma es la *polisomnografía nocturna*, y el tratamiento con CPAP mejora tanto la somnolencia como el control tensional.',
  no:{0:'Las catecolaminas se piden ante sospecha de feocromocitoma, que cursa con crisis paroxísticas de hipertensión con sudoración, palpitaciones y cefalea, no con hipersomnia.',1:'El cociente aldosterona/renina se pide ante hiperaldosteronismo primario, que suele acompañarse de hipopotasemia y no explica la somnolencia.',3:'El eco-doppler renal busca estenosis de arteria renal, que cursa con soplo abdominal, deterioro de función renal con IECA o edema agudo de pulmón recurrente.',4:'La TC de aorta busca coartación, propia del paciente joven con hipertensión en brazos y pulsos femorales débiles.'},
  trampa:'Se recorre la lista de hipertensiones secundarias endocrinas y se olvida la más frecuente. La cefalea matutina con hipersomnia es la pista que decide.',
  dx:['Apnea obstructiva del sueño','Hiperaldosteronismo primario','Feocromocitoma','Estenosis de arteria renal'],
  obj:'Sospechar apnea del sueño ante hipertensión refractaria con patrón non-dipper.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con guías ESC/ESH de hipertensión arterial.'
},
'MIR-2014-M61': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Agudización de EPOC',
  clave:'EPOC agudizada con pH 7,29 y pCO2 64: acidosis respiratoria. VENTILACIÓN NO INVASIVA antes de intubar.',
  exp:'La gasometría manda por encima de todo lo demás: *pH 7,29 con pCO2 de 64* es una acidosis respiratoria agudizada sobre crónica, es decir, un fallo ventilatorio que el paciente ya no compensa, de ahí la somnolencia, la taquipnea de 28 y el uso de musculatura accesoria. La indicación establecida en ese escenario es la *ventilación mecánica no invasiva con dos niveles de presión*: la presión inspiratoria descarga los músculos respiratorios y lava CO2, y la espiratoria contrarresta la PEEP intrínseca. Es la intervención con mejor evidencia en la agudización de EPOC, porque reduce la necesidad de intubación, las complicaciones infecciosas y la mortalidad. Se acompaña siempre de broncodilatadores, corticoides sistémicos y antibiótico intravenoso —aquí procede ampliar la cobertura porque ya llevaba moxifloxacino sin respuesta—, con oxigenoterapia controlada, buscando saturaciones de 88 a 92% y no más.',
  no:{0:'No hay datos de insuficiencia cardiaca que justifiquen diuréticos, y el oxígeno a alto flujo agravaría la hipercapnia.',1:'Mantener solo aerosoles y ampliar el antibiótico ignora el fallo ventilatorio: el paciente ya está acidótico y somnoliento.',2:'El bicarbonato está contraindicado en la acidosis respiratoria: genera más CO2 y empeora la situación. Lo que hay que corregir es la ventilación.',3:'La intubación se reserva para el fracaso de la ventilación no invasiva, la parada respiratoria, el deterioro de conciencia con incapacidad de proteger la vía aérea o la inestabilidad hemodinámica; aún hay margen.'},
  trampa:'Ver la acidosis y pensar en bicarbonato. En la acidosis respiratoria el tratamiento es ventilar, no alcalinizar.',
  dx:['Agudización de EPOC con acidosis respiratoria','Neumonía','Insuficiencia cardiaca descompensada'],
  obj:'Indicar la ventilación no invasiva en la agudización de EPOC con acidosis respiratoria.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con la guía GOLD y con recomendaciones ERS/ATS sobre ventilación no invasiva.'
},
'MIR-2014-M62': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Fisiopatología de la hipoxemia',
  clave:'Debilidad muscular con pCO2 de 48 y atelectasias: hipoventilación alveolar MÁS trastorno de la relación ventilación/perfusión.',
  exp:'La gasometría hay que leerla en dos capas. La primera es la *hipoventilación alveolar*: la pCO2 está en 48, y como el CO2 depende exclusivamente de la ventilación, cualquier elevación significa que el fuelle no mueve aire suficiente. En esta paciente la causa es evidente, porque la debilidad de cintura escapular, la disfagia y unos pulmones poco inspirados dibujan una enfermedad neuromuscular, y la hipoventilación por sí sola ya baja la pO2. La segunda capa la aporta la radiografía: las *atelectasias laminares basales* son zonas perfundidas pero no ventiladas, es decir, un *trastorno de la relación ventilación/perfusión* que añade hipoxemia por encima de lo que explicaría la hipoventilación aislada. La combinación de ambos mecanismos es la respuesta. El gradiente alveolo-arterial es la herramienta que los separa: en la hipoventilación pura es normal y se ensancha cuando se suma un problema del intercambio.',
  no:{0:'La FiO2 solo desciende en altitud o en atmósferas confinadas, situaciones que no constan.',1:'La difusión no basta por sí sola para explicar la retención de CO2, que depende únicamente de la ventilación.',2:'La hipoventilación es correcta, pero la FiO2 no está disminuida: la paciente respira aire ambiente a nivel del mar.',4:'La hipertensión pulmonar no es un mecanismo primario de hipoxemia aquí, y no hay datos de cor pulmonale.'},
  trampa:'Se quedan solo con la hipoventilación al ver la pCO2 alta. Las atelectasias del enunciado están puestas para que se añada el segundo mecanismo.',
  dx:['Enfermedad neuromuscular con fallo ventilatorio','Miastenia gravis','Miopatía inflamatoria','Esclerosis lateral amiotrófica'],
  obj:'Reconocer los mecanismos combinados de hipoxemia en la enfermedad neuromuscular.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con West, Fisiopatología Pulmonar.'
},
'MIR-2014-M63': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Asbestosis',
  clave:'Placas pleurales con patrón reticulonodulillar en campos INFERIORES: asbesto. Lo primero es preguntar por la ocupación.',
  exp:'Las *placas pleurales* en pleura parietal, diafragmática y mediastínica son el marcador radiológico más específico de exposición a *asbesto*: son prácticamente patognomónicas, y por sí solas indican exposición aunque no produzcan síntomas. Cuando además aparece afectación *reticulonodulillar de predominio en lóbulos inferiores*, el cuadro es una *asbestosis*, es decir, fibrosis intersticial por amianto. Lo primero que hay que hacer no es una prueba sino una pregunta: la *historia laboral detallada*, con oficio, años de exposición, uso de protección y también exposición doméstica o ambiental —astilleros, construcción, fibrocemento, aislamientos, frenos—, sin olvidar que el periodo de latencia puede superar los veinte o treinta años. Esa historia cierra el diagnóstico sin pruebas invasivas, tiene implicaciones de enfermedad profesional y obliga a vigilar el riesgo de mesotelioma y de carcinoma broncogénico, que se multiplica en fumadores.',
  no:{0:'La historia tabáquica importa por el riesgo añadido de cáncer, pero el tabaco no produce placas pleurales.',2:'La eosinofilia orientaría a neumonías eosinófilas o a la granulomatosis eosinofílica, que no cursan con placas pleurales.',3:'Las pruebas funcionales cuantifican la restricción, pero no dan el diagnóstico etiológico que aquí ya está a la vista.',4:'La biopsia transbronquial es innecesaria y de bajo rendimiento cuando la radiología y la historia laboral bastan.'},
  trampa:'Se salta a la prueba complementaria. Las placas pleurales son un diagnóstico de anamnesis: la pregunta correcta cuesta cero y decide todo lo demás.',
  dx:['Asbestosis','Fibrosis pulmonar idiopática','Neumonitis por hipersensibilidad'],
  obj:'Reconocer las placas pleurales como marcador de asbesto y priorizar la historia laboral.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., capítulo de neumopatías ocupacionales.'
},
'MIR-2014-M65': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Derrame pleural',
  clave:'Matidez con frémito DISMINUIDO y murmullo abolido: derrame pleural. Si el frémito estuviera aumentado sería condensación.',
  exp:'La exploración del tórax se resuelve combinando tres datos, y el que decide es el *frémito táctil*. Aquí hay matidez a la percusión, que indica que el aire ha sido sustituido por algo denso, y *disminución* tanto del frémito como del murmullo vesicular. El líquido pleural separa el pulmón de la pared torácica y actúa como aislante: por eso amortigua la transmisión de las vibraciones de la voz y de los ruidos respiratorios. En la *neumonía*, en cambio, el pulmón consolidado sigue en contacto con la pared y conduce mejor el sonido, de modo que la matidez se acompaña de frémito *aumentado*, soplo tubárico y crepitantes. Ese contraste, matidez con frémito bajo frente a matidez con frémito alto, es el que separa derrame de condensación en la cabecera. La confirmación es la radiografía y, si el derrame es significativo, la toracocentesis con criterios de Light.',
  no:{1:'La neumonía lobar da matidez con frémito AUMENTADO, soplo tubárico y broncofonía.',2:'La bronquitis aguda no altera la percusión ni el frémito: la exploración sería normal o con roncus dispersos.',3:'La tuberculosis puede causar derrame, pero lo que pide la pregunta es el síndrome, no la etiología, y una semana de evolución no es su curso típico.',4:'El neumotórax da HIPERresonancia a la percusión, no matidez.'},
  trampa:'Se responde neumonía por la fiebre y la tos. La fiebre acompaña también al derrame paraneumónico y al tuberculoso: quien decide es el frémito.',
  dx:['Derrame pleural','Neumonía lobar','Neumotórax','Atelectasia'],
  obj:'Separar derrame pleural de condensación por el frémito táctil.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías BTS sobre enfermedad pleural.'
},
'MIR-2014-M67': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Tumor de Pancoast',
  clave:'Opacidad en vértice, erosión costal, dolor cervicobraquial y Horner: tumor del sulcus superior o de Pancoast.',
  exp:'Todo el cuadro se explica por la *localización*, no por la estirpe. Un tumor que crece en el vértice pulmonar invade por vecindad las estructuras del estrecho torácico superior y produce un síndrome reconocible: dolor en hombro y en cara interna del brazo por infiltración del *plexo braquial inferior*, raíces C8 y T1; *síndrome de Horner* con miosis, ptosis, enoftalmos y anhidrosis hemifacial por lesión de la *cadena simpática cervical y del ganglio estrellado*; y destrucción de las primeras costillas y de los cuerpos vertebrales adyacentes. Esa combinación define el *tumor de Pancoast*, habitualmente un carcinoma no microcítico. Es importante porque se confunde durante meses con una cervicobraquialgia degenerativa y porque su tratamiento, si no hay metástasis, es quimiorradioterapia seguida de cirugía, con supervivencias apreciables.',
  no:{1:'El tumor mediastínico comprime estructuras centrales y da síndrome de vena cava superior o disfonía, no un Horner con erosión costal apical.',2:'El mesotelioma localizado no produce este síndrome apical característico.',3:'El bronquioloalveolar se manifiesta como infiltrados o nódulos difusos con broncorrea, no como masa del vértice.',4:'Las metástasis cerebrales darían focalidad neurológica central, no un Horner ipsilateral con destrucción costal.'},
  trampa:'Se confunde el Horner con una afectación cerebral. En el Pancoast la lesión es del simpático PERIFÉRICO cervical, en el propio vértice torácico.',
  dx:['Tumor de Pancoast','Cervicobraquialgia degenerativa','Metástasis apical','Tuberculosis apical'],
  obj:'Reconocer el síndrome de Pancoast por su semiología de vecindad.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed.'
},
'MIR-2014-M228': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Tromboembolismo pulmonar',
  clave:'Síncope, hipotensión e hipoxemia con AUSCULTACIÓN PULMONAR LIMPIA: tromboembolismo pulmonar.',
  exp:'La clave del caso es una discordancia: la paciente está gravemente hipoxémica, con saturación del 85%, taquipneica y taquicárdica, y sin embargo la *auscultación pulmonar es limpia*. Muy pocas cosas producen hipoxemia intensa con un pulmón que suena normal, y el tromboembolismo pulmonar es la primera. El *síncope* como forma de presentación es además un marcador de gravedad: indica obstrucción vascular importante con caída brusca del gasto cardiaco, y aquí se acompaña de *hipotensión de 88/46*, lo que ya lo clasifica como TEP de *alto riesgo*. La conducta es anticoagulación inmediata y, ante inestabilidad hemodinámica confirmada, valorar *fibrinólisis*. El angio-TC confirma, el ecocardiograma a la cabecera muestra sobrecarga derecha, y conviene recordar que el dímero D no sirve para descartar cuando la probabilidad clínica es alta.',
  no:{1:'Un ictus vertebrobasilar daría focalidad neurológica y no explica la hipoxemia del 85% ni la taquipnea.',2:'El síndrome coronario podría dar hipotensión, pero no hipoxemia grave con auscultación limpia y sin signos de congestión.',3:'El shock hipovolémico exige una pérdida de volumen, sangrado o deshidratación, que no se describe, y no produce hipoxemia por sí mismo.',4:'El edema agudo de pulmón daría crepitantes generalizados y ortopnea; aquí la auscultación es limpia.'},
  trampa:'Se busca una causa cardiaca por el síncope y la hipotensión. El dato que reorienta es la hipoxemia grave con pulmones limpios.',
  dx:['Tromboembolismo pulmonar','Síndrome coronario agudo','Taponamiento cardiaco','Shock hipovolémico'],
  obj:'Sospechar TEP de alto riesgo ante síncope con hipoxemia y auscultación normal.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con guías ESC de tromboembolismo pulmonar.'
},

/* ==================== CARDIOLOGÍA ==================== */
'MIR-2014-M48': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Anticoagulación en fibrilación auricular',
  clave:'Hipertensión más diabetes: CHADS2 de 2 y CHA2DS2-VASc de 3 al sumar el sexo femenino. Se anticoagula.',
  exp:'La decisión de anticoagular en la fibrilación auricular no depende de que el paciente esté en fibrilación *en ese momento*, sino de su riesgo embólico acumulado. La escala se cuenta así: la hipertensión suma *1*, la diabetes suma *1* y el sexo femenino suma *1* en el CHA2DS2-VASc; con 60 años no puntúa la edad, que empieza a contar a partir de 65. Salen por tanto *CHADS2 de 2 y CHA2DS2-VASc de 3*, cifras que indican anticoagulación oral crónica. Y hay un punto conceptual importante: la fibrilación *paroxística tiene el mismo riesgo embólico* que la permanente, porque los episodios son a menudo asintomáticos y el trombo se forma en la orejuela durante ellos. Por eso estar en ritmo sinusal en la consulta no cambia nada.',
  no:{0:'La fibrilación paroxística conlleva un riesgo tromboembólico equiparable al de la permanente: estar en sinusal hoy no protege.',1:'La edad y el ictus previo no son los únicos factores: hipertensión, diabetes, insuficiencia cardiaca, enfermedad vascular y sexo femenino también puntúan.',3:'La antiagregación es claramente inferior a la anticoagulación y ya no se recomienda como alternativa en pacientes con indicación.',4:'La heparina intermitente solo durante los episodios es inviable e ineficaz: los paroxismos son en gran parte silentes.'},
  trampa:'Se decide por el electrocardiograma de hoy en vez de por la escala de riesgo. El ritmo del momento no entra en ninguna de las dos escalas.',
  dx:['Fibrilación auricular paroxística'],
  obj:'Calcular el CHA2DS2-VASc e indicar anticoagulación en la fibrilación auricular paroxística.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con guías ESC de fibrilación auricular.'
},
'MIR-2014-M49': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Miocardiopatía hipertrófica obstructiva',
  clave:'En la miocardiopatía hipertrófica OBSTRUCTIVA todo lo que aumenta la contractilidad empeora el gradiente. La digoxina está contraindicada.',
  exp:'El caso reúne todos los rasgos de la miocardiopatía hipertrófica obstructiva: joven con hipertrofia septal asimétrica, *gradiente subvalvular dinámico de 70 mmHg*, insuficiencia mitral secundaria por movimiento sistólico anterior de la mitral, síncope de esfuerzo y muerte súbita familiar. El principio terapéutico es que la obstrucción es *dinámica*: aumenta cuando sube la contractilidad o cuando bajan la precarga o la poscarga. De ahí que se traten con *betabloqueantes* y con *verapamilo o diltiazem*, que reducen el inotropismo y alargan el llenado, y que estén contraindicados los inotropos, los vasodilatadores y la depleción con diuréticos a dosis altas. La *digoxina* es justamente un inotropo positivo: aumenta la contractilidad, estrecha aún más el tracto de salida y agrava el gradiente, por lo que es la opción menos indicada. Aparte, este paciente reúne dos criterios mayores de riesgo, el síncope de esfuerzo y la historia familiar de muerte súbita, de modo que el desfibrilador y la miectomía son opciones plenamente razonables.',
  no:{0:'Los betabloqueantes son el tratamiento de primera línea: reducen la contractilidad y el gradiente.',2:'El verapamilo y el diltiazem son la alternativa de primera línea cuando no se toleran los betabloqueantes.',3:'El desfibrilador está indicado por los criterios de riesgo de muerte súbita que reúne el paciente.',4:'La miectomía de Morrow es el tratamiento de la obstrucción severa refractaria, y este gradiente de 70 mmHg la justifica.'},
  trampa:'Se asocia la digoxina con "corazón que falla" y se olvida que aquí el problema no es contraer poco, sino contraer demasiado contra una salida estrecha.',
  dx:['Miocardiopatía hipertrófica obstructiva','Estenosis aórtica','Miocardiopatía hipertensiva'],
  obj:'Identificar los fármacos contraindicados en la miocardiopatía hipertrófica obstructiva.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con guías ESC de miocardiopatía hipertrófica.'
},
'MIR-2014-M51': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Complicaciones mecánicas del infarto',
  clave:'Infarto con hipotensión, edema pulmonar y SOPLO SISTÓLICO nuevo: insuficiencia mitral aguda por rotura de músculo papilar.',
  exp:'Cuando un infarto se complica con *hipotensión, congestión pulmonar y un soplo sistólico nuevo*, el soplo es el dato que obliga a pensar en una complicación *mecánica* y no en un simple fallo de bomba. Las dos que dan soplo son la comunicación interventricular por rotura septal y la *insuficiencia mitral aguda por rotura del músculo papilar*, y esta última es la que mejor explica la combinación de edema agudo de pulmón con soplo, porque el volumen regurgitado se descarga de golpe en una aurícula izquierda no dilatada y se transmite al capilar pulmonar. Ocurre típicamente en los primeros días, sobre todo en infartos inferiores, porque el papilar *posteromedial* tiene irrigación única por la coronaria derecha mientras que el anterolateral tiene doble aporte. El diagnóstico es el ecocardiograma urgente y el tratamiento, la cirugía; mientras tanto se estabiliza con vasodilatadores y balón de contrapulsación.',
  no:{0:'El shock cardiogénico por fallo de bomba no produce un soplo sistólico nuevo: el soplo es el que reorienta el diagnóstico.',1:'La rotura de pared libre causa taponamiento y disociación electromecánica, con muerte casi inmediata y sin soplo.',3:'El taponamiento cursa con ingurgitación yugular y pulmones limpios, no con crepitantes ni soplo.',4:'La trombosis del tronco común provoca shock masivo, pero tampoco explica la aparición de un soplo nuevo.'},
  trampa:'Se etiqueta de shock cardiogénico y se para ahí. El soplo nuevo cambia por completo el tratamiento: esto se opera.',
  dx:['Insuficiencia mitral aguda por rotura de papilar','Comunicación interventricular postinfarto','Shock cardiogénico','Rotura de pared libre'],
  obj:'Reconocer la complicación mecánica del infarto ante un soplo sistólico nuevo.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con guías ESC de síndrome coronario agudo con elevación del ST.'
},
'MIR-2014-M55': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Insuficiencia cardiaca descompensada',
  clave:'Ortopnea, edemas y crepitantes en bases sobre una infección respiratoria: insuficiencia cardiaca izquierda desencadenada por la infección. Se tratan las dos cosas.',
  exp:'El paciente tiene EPOC, pero lo que ha cambiado en las últimas 24 horas no es sibilante sino congestivo: *ortopnea*, *edemas maleolares*, *crepitantes en ambas bases* y tensión de 170/95 con taquiarritmia a 110. Ese conjunto describe una *insuficiencia cardiaca izquierda descompensada*, y el desencadenante es la infección respiratoria de los tres días previos, que en un paciente con fibrilación auricular crónica ha acelerado la respuesta ventricular y precipitado el fallo. La conducta correcta no obliga a elegir entre los dos problemas: se tratan *ambos*, con diuréticos y vasodilatadores para la congestión, control de la frecuencia, y broncodilatadores más antibiótico para la agudización infecciosa. En la práctica el BNP y el ecocardiograma ayudan a cuantificar, pero no deben retrasar un tratamiento que la clínica ya justifica.',
  no:{0:'La radiografía es útil, pero no es lo prioritario ni cambia que haya que tratar la congestión de inmediato.',1:'Tratar solo la EPOC deja sin tratar la ortopnea, los edemas y los crepitantes bibasales.',3:'La espirometría no se hace en la agudización: los valores no son fiables y no cambia el manejo urgente.',4:'El ecocardiograma confirmará, pero el tratamiento de la congestión no puede esperar a la prueba.'},
  trampa:'Con la etiqueta de EPOC se atribuye todo a los bronquios. La ortopnea y los edemas no son de la EPOC: son del corazón.',
  dx:['Insuficiencia cardiaca descompensada','Agudización de EPOC','Neumonía'],
  obj:'Reconocer la insuficiencia cardiaca desencadenada por infección respiratoria en el paciente con EPOC.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con guías ESC de insuficiencia cardiaca aguda.'
},

/* ==================== NEUROLOGÍA ==================== */
'MIR-2014-M69': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Esclerosis múltiple',
  clave:'Parálisis facial periférica MÁS diplopía por afectación del VI par: la lesión está en la protuberancia, no en el nervio facial.',
  exp:'La pista está en que hay *dos pares craneales* afectados a la vez, el VII y el VI, y ambos tienen su núcleo en la *protuberancia*, con las fibras del facial rodeando el núcleo del motor ocular externo. Una parálisis de Bell afecta solo al facial: si además hay diplopía en la mirada lateral hacia el mismo lado, la explicación económica es una única lesión *protuberancial* que alcanza ambos núcleos. En una mujer *joven previamente sana*, con instauración subaguda en unas veinte horas, la causa más probable de una lesión desmielinizante de tronco es un *brote de esclerosis múltiple*. Lo que hay que hacer es resonancia craneal con gadolinio buscando lesiones periventriculares, yuxtacorticales, infratentoriales y medulares, y estudio de líquido cefalorraquídeo en busca de bandas oligoclonales; el brote se trata con corticoides a dosis altas.',
  no:{0:'La parálisis de Bell afecta EXCLUSIVAMENTE al facial: no produce diplopía ni afecta a otro par craneal.',1:'El Ramsay-Hunt asocia vesículas en el conducto auditivo externo y otalgia intensa, que aquí no constan.',2:'La sarcoidosis puede dar parálisis facial, incluso bilateral, pero en una joven sana sin clínica sistémica ni adenopatías es mucho menos probable.',3:'Un infarto silviano daría parálisis facial CENTRAL, que respeta la frente y permite cerrar el ojo, además de hemiparesia o afasia.'},
  trampa:'Se responde Bell porque la parálisis facial es periférica. El detalle que lo cambia todo es la diplopía: dos pares craneales juntos localizan en el tronco.',
  dx:['Brote de esclerosis múltiple','Parálisis de Bell','Ramsay-Hunt','Ictus de tronco'],
  obj:'Localizar en la protuberancia una parálisis facial periférica acompañada de afectación del VI par.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y criterios de McDonald.'
},
'MIR-2014-M70': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Enfermedad de Parkinson',
  clave:'Rigidez ASIMÉTRICA, hipomimia, marcha sin braceo y sueños vívidos que despiertan agitado: enfermedad de Parkinson.',
  exp:'El caso reúne el núcleo del parkinsonismo idiopático. La afectación es *asimétrica*, empieza por una mano y se mantiene lateralizada durante años, lo que es muy característico. Hay *rigidez*, *hipomimia* —la cara inexpresiva que nota la mujer— y *pérdida del braceo* con marcha lenta, que suele ser el primer signo que percibe la familia antes de que aparezca temblor. Y hay un dato que muchas veces pasa desapercibido y que hoy se considera un marcador precoz de enfermedad: el *trastorno de conducta del sueño REM*, es decir, sueños muy vívidos con agitación motora durante la noche, que puede preceder en años a los síntomas motores y es propio de las sinucleinopatías. El diagnóstico es clínico, se apoya en la respuesta a levodopa y no requiere prueba de imagen salvo duda con parkinsonismos atípicos o vasculares.',
  no:{0:'Un infarto lacunar talámico se instaura de forma brusca y da síntomas sensitivos, no un cuadro progresivo de dos años.',1:'La esclerosis lateral amiotrófica cursa con debilidad, atrofia y fasciculaciones, sin rigidez extrapiramidal ni hipomimia.',3:'La plexopatía cervical da déficit motor y sensitivo en un territorio radicular, no rigidez ni alteración de la marcha.',4:'La degeneración corticobasal cursa con apraxia marcada, distonía y fenómeno de mano ajena, y responde mal a levodopa.'},
  trampa:'Se descarta el Parkinson porque no hay temblor. El temblor falta hasta en un tercio de los pacientes; la rigidez asimétrica y la hipomimia bastan.',
  dx:['Enfermedad de Parkinson','Degeneración corticobasal','Parkinsonismo vascular','Parkinsonismo farmacológico'],
  obj:'Diagnosticar la enfermedad de Parkinson y reconocer el trastorno de conducta del sueño REM como marcador precoz.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con los criterios diagnósticos de la MDS y Harrison, 21.ª ed.'
},
'MIR-2014-M72': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Degeneración combinada subaguda',
  clave:'Gastritis atrófica más cordones posteriores más Babinski bilateral: déficit de B12. Hemograma y niveles de B12.',
  exp:'El cuadro es una *degeneración combinada subaguda de la médula*, también llamada mielosis funicular, y su rasgo distintivo es que afecta a la vez a dos vías: los *cordones posteriores*, de donde salen las parestesias distales simétricas, la pérdida de sensibilidad profunda y la ataxia que empeora con los ojos cerrados —de ahí la dismetría con ojos cerrados y la marcha imposible sin ayuda—, y la *vía piramidal*, que explica los reflejos exaltados y el *Babinski bilateral*. Esa combinación de signo de neurona motora superior con pérdida propioceptiva es muy sugestiva. El antecedente lo cierra: la *gastritis atrófica* destruye las células parietales y con ellas el factor intrínseco, de modo que la B12 deja de absorberse en el íleon terminal. Los episodios confusionales encajan también con la afectación cerebral del déficit. La prueba es barata e inmediata: hemograma buscando macrocitosis y niveles séricos de B12, con homocisteína y ácido metilmalónico si el nivel es limítrofe. El tratamiento con B12 parenteral es urgente, porque el daño neurológico se hace irreversible.',
  no:{1:'La degeneración cerebelosa alcohólica da ataxia de la marcha y de miembros inferiores, pero no pérdida de sensibilidad profunda ni Babinski.',2:'La tiamina se administra ante oftalmoparesia, ataxia y confusión de instauración aguda; aquí los pares craneales son normales y el curso es de cuatro meses.',3:'La mielinolisis pontina aparece tras corregir una hiponatremia demasiado rápido y cursa con tetraparesia y síndrome de cautiverio, no con este perfil.',4:'La esclerosis lateral primaria es puramente motora: no produce alteración de la sensibilidad profunda.'},
  trampa:'El antecedente de alcoholismo desvía hacia Wernicke o hacia el cerebelo. La gastritis atrófica y el Babinski con cordones posteriores señalan a la B12.',
  dx:['Degeneración combinada subaguda por déficit de B12','Encefalopatía de Wernicke','Degeneración cerebelosa alcohólica','Mielopatía compresiva'],
  obj:'Reconocer la mielosis funicular por déficit de B12 en el paciente con gastritis atrófica.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed.'
},
'MIR-2014-M74': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Síndrome de Guillain-Barré',
  clave:'Tres semanas después de un catarro, debilidad ascendente con ARREFLEXIA: polirradiculoneuropatía desmielinizante aguda.',
  exp:'Lo que define el síndrome de Guillain-Barré es la combinación de *debilidad de instauración aguda o subaguda* con *pérdida de los reflejos osteotendinosos*, precedida en una a tres semanas por una infección, habitualmente respiratoria o digestiva. La arreflexia es el hallazgo que sitúa la lesión en el *nervio periférico y las raíces*, y el dolor lumbar inicial es típico por la inflamación radicular. Aunque el patrón clásico es ascendente y simétrico, cierta asimetría no descarta el diagnóstico. El estudio complementario muestra *disociación albuminocitológica* en el líquido cefalorraquídeo —proteínas altas con celularidad normal, aunque puede tardar una semana en aparecer— y un patrón desmielinizante en la electromiografía. Lo que nunca puede olvidarse es vigilar la *capacidad vital forzada* y la deglución, porque la insuficiencia respiratoria es la causa de muerte; el tratamiento es inmunoglobulina intravenosa o plasmaféresis, y los corticoides no son útiles.',
  no:{0:'La miastenia gravis cursa con fatigabilidad fluctuante y afectación ocular y bulbar, y CONSERVA los reflejos.',1:'La esclerosis múltiple da signos de neurona motora superior con reflejos exaltados y Babinski, no arreflexia.',3:'La dermatomiositis produce debilidad proximal con lesiones cutáneas características y elevación de CK, sin pérdida de reflejos ni parestesias.',4:'La esclerosis lateral amiotrófica combina signos de primera y segunda motoneurona, es progresiva en meses y no es postinfecciosa.'},
  trampa:'La asimetría de la debilidad hace dudar. El dato que manda es la arreflexia tras un cuadro infeccioso reciente.',
  dx:['Síndrome de Guillain-Barré','Miastenia gravis','Mielitis transversa','Botulismo'],
  obj:'Diagnosticar el Guillain-Barré por la debilidad postinfecciosa con arreflexia y vigilar la función respiratoria.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y criterios de Brighton.'
},

/* ==================== NEFROLOGÍA Y REUMATOLOGÍA ==================== */
'MIR-2014-M112': {
  esp:'Medicina Interna', tema:'Reumatología', sub:'Crisis renal esclerodérmica',
  clave:'Los CORTICOIDES a dosis moderadas o altas precipitan la crisis renal esclerodérmica. El tratamiento son los IECA, pero no se usan como profilaxis.',
  exp:'La crisis renal esclerodérmica es una urgencia de la esclerodermia *difusa* de pocos años de evolución, que se presenta como hipertensión maligna de aparición brusca con cefalea y deterioro rápido de la función renal, a menudo con anemia hemolítica microangiopática. Su desencadenante mejor documentado es la *exposición a glucocorticoides*: dosis de prednisona iguales o superiores a unos 15 mg al día multiplican el riesgo, y esta paciente recibía 30 mg. Por eso, en la esclerodermia difusa los corticoides se usan con extrema cautela y siempre a la dosis mínima. El tratamiento es el *inhibidor de la enzima convertidora de angiotensina*, sobre todo captopril, que se introduce y se sube rápido incluso si la creatinina empeora al principio, porque su beneficio se mantiene; lo que no está indicado es darlos de forma preventiva a pacientes normotensos, ya que no previenen la crisis y pueden empeorar el pronóstico si esta aparece.',
  no:{0:'La crisis renal es propia de la forma DIFUSA y precoz, no de la limitada, que se asocia más a hipertensión pulmonar.',2:'El diagnóstico es clínico: hipertensión de nueva aparición con deterioro renal en una esclerodermia difusa. La biopsia no es necesaria.',3:'Los IECA son el TRATAMIENTO, pero no se emplean de forma rutinaria como profilaxis en pacientes normotensos.',4:'El tratamiento de elección es el IECA, no un calcioantagonista; el objetivo es bloquear el eje renina-angiotensina, que está hiperactivado.'},
  trampa:'Se presupone que un IECA que trata también previene. Aquí la profilaxis no funciona y puede enmascarar el inicio de la crisis.',
  dx:['Crisis renal esclerodérmica','Hipertensión maligna','Microangiopatía trombótica'],
  obj:'Reconocer los corticoides como desencadenante de la crisis renal esclerodérmica y el papel de los IECA.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y recomendaciones EULAR sobre esclerosis sistémica.'
},
'MIR-2014-M120': {
  esp:'Medicina Interna', tema:'Reumatología', sub:'Artritis gonocócica',
  clave:'Joven con fiebre, PÚSTULAS HEMORRÁGICAS en zonas distales y artritis: infección gonocócica diseminada.',
  exp:'La infección gonocócica diseminada tiene una presentación reconocible que se llama *síndrome artritis-dermatitis*: fiebre con escalofríos, *tenosinovitis* de muñecas, manos o tobillos, y unas *pocas lesiones cutáneas* —pápulas que se hacen pustulosas y hemorrágicas, en número escaso y de distribución acral, sobre superficies extensoras distales—. Puede evolucionar a una artritis séptica monoarticular franca, típicamente de rodilla. Es la causa más frecuente de artritis séptica en el adulto joven sexualmente activo, y lo importante es que las lesiones cutáneas son la pista que la separa de cualquier otra monoartritis febril. El manejo exige artrocentesis con cultivo, hemocultivos y muestras de todas las mucosas expuestas —uretral, cervical, faríngea y rectal—, ceftriaxona, tratamiento simultáneo de la posible coinfección por clamidia y estudio de otras infecciones de transmisión sexual, VIH y sífilis incluidos.',
  no:{0:'La artritis reumatoide es poliarticular, simétrica, crónica y no cursa con fiebre alta ni con pústulas hemorrágicas.',1:'El síndrome de Reiter es reactivo, aparece semanas después de una uretritis o una diarrea, y sus lesiones son la queratodermia blenorrágica y la balanitis circinada, no pústulas hemorrágicas agudas con fiebre.',2:'La gota da monoartritis muy dolorosa, típicamente de la primera metatarsofalángica, sin este exantema pustuloso.',4:'El síndrome de Cogan cursa con queratitis intersticial y sordera neurosensorial, no con este cuadro.'},
  trampa:'Ante una monoartritis febril se piensa solo en estafilococo. Las pústulas hemorrágicas distales en un joven cambian el germen y el antibiótico.',
  dx:['Infección gonocócica diseminada','Artritis séptica por estafilococo','Artritis reactiva','Endocarditis'],
  obj:'Reconocer el síndrome artritis-dermatitis de la infección gonocócica diseminada.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías CDC de infecciones de transmisión sexual.'
},
'MIR-2014-M229': {
  esp:'Medicina Interna', tema:'Reumatología', sub:'Poliangeítis microscópica',
  clave:'Síndrome renopulmonar con p-ANCA positivo y anti-MBG negativo: poliangeítis microscópica.',
  exp:'El caso es un *síndrome renopulmonar*: hemorragia alveolar —hemoptisis, infiltrados alveolares bilaterales, hemosiderófagos en esputo y anemia— más *glomerulonefritis rápidamente progresiva* con creatinina de 5, proteinuria, microhematuria y cilindros hemáticos. Solo tres entidades lo producen con esta frecuencia, y se separan con tres anticuerpos: los *anti-membrana basal glomerular* apuntan a Goodpasture, los *ANA con anti-DNA* al lupus, y los *ANCA* a las vasculitis de pequeño vaso. Aquí los dos primeros son negativos y el *p-ANCA es positivo*, con un pródromo constitucional de dos meses —febrícula, astenia, anorexia y pérdida de peso— muy propio de la vasculitis. El p-ANCA, dirigido contra la mieloperoxidasa, es característico de la *poliangeítis microscópica*, que además no forma granulomas ni afecta a la vía aérea superior. Es una urgencia: se trata con corticoides a dosis altas más ciclofosfamida o rituximab, y con plasmaféresis si la hemorragia alveolar es grave.',
  no:{0:'La hemosiderosis pulmonar idiopática es un diagnóstico de exclusión de la infancia y NO afecta al riñón.',1:'En el Goodpasture los anticuerpos antimembrana basal glomerular serían positivos, y aquí son negativos.',2:'El lupus cursaría con anticuerpos antinucleares positivos y consumo de complemento, y aquí los ANA son negativos.',3:'La panarteritis nodosa clásica afecta a vasos de mediano calibre, NO produce glomerulonefritis ni capilaritis pulmonar, y es ANCA negativa.'},
  trampa:'Se responde Goodpasture ante todo síndrome renopulmonar. El perfil de autoanticuerpos es el que separa las tres causas, y aquí ya viene dado.',
  dx:['Poliangeítis microscópica','Síndrome de Goodpasture','Lupus con nefritis','Granulomatosis con poliangeítis'],
  obj:'Diferenciar las causas de síndrome renopulmonar según el perfil de autoanticuerpos.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y la nomenclatura de Chapel Hill.'
},

/* ==================== INFECTOLOGÍA Y DIGESTIVO ==================== */
'MIR-2014-M122': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Eosinofilia y parasitosis',
  clave:'Todos los helmintos de la lista dan eosinofilia; el que NO existe en Bolivia es Schistosoma haematobium.',
  exp:'La pregunta no se resuelve por fisiopatología sino por *geografía*. Todos los parásitos citados son helmintos con fase de migración tisular y todos producen eosinofilia, de modo que ninguno se descarta por el hemograma. Lo que los separa es dónde se adquieren: *Ancylostoma*, *Necator*, *Strongyloides* y *Ascaris* son geohelmintos de distribución universal en zonas tropicales y subtropicales, muy prevalentes en Sudamérica. En cambio *Schistosoma haematobium*, el que produce hematuria y afecta al aparato urinario, se limita a *África y Oriente Medio*. En el continente americano solo existe *Schistosoma mansoni*, y de forma focal en Brasil, Venezuela, Surinam y algunas islas del Caribe: nunca haematobium. En un paciente boliviano, por tanto, es el diagnóstico menos probable. La regla práctica es que ante toda eosinofilia hay que preguntar por procedencia y viajes, y que en el inmunodeprimido conviene descartar siempre *Strongyloides* antes de dar corticoides, por el riesgo de hiperinfestación.',
  no:{1:'Ancylostoma duodenale es un geohelminto frecuente en Sudamérica y causa clásica de eosinofilia con anemia ferropénica.',2:'Strongyloides stercoralis es endémico en Bolivia y produce eosinofilia mantenida durante años por autoinfestación.',3:'Ascaris lumbricoides es el helminto más prevalente del mundo y da eosinofilia durante la migración pulmonar.',4:'Necator americanus, como su nombre indica, es el anquilostoma propio del continente americano.'},
  trampa:'Se busca cuál produce menos eosinofilia. Todos la producen: lo que decide es que haematobium no existe en América.',
  dx:['Estrongiloidiasis','Anquilostomiasis','Ascaridiasis','Esquistosomiasis'],
  obj:'Usar la geografía para ordenar el diagnóstico diferencial de la eosinofilia parasitaria.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y mapas de distribución de la OMS.'
},
'MIR-2014-M42': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Hepatotoxicidad por fármacos',
  clave:'Patrón HEPATOCELULAR con transaminasas por encima de 1.000: amoxicilina-clavulánico. Los anabolizantes dan colestasis, no citólisis.',
  exp:'Hay tres candidatos y cada uno tiene una firma bioquímica distinta. La *hepatitis B aguda* queda descartada por la serología: anti-HBs y anti-HBc positivos con HBsAg ausente indican infección *pasada y resuelta* con inmunidad, no infección activa. Los *esteroides anabolizantes 17-alfa-alquilados* producen una *colestasis blanda*, con bilirrubina muy alta y transaminasas poco elevadas, un patrón que no encaja con AST y ALT en torno a 1.200 y 1.300. Lo que sí produce cifras así es la *amoxicilina-clavulánico*, el fármaco que más hepatotoxicidad causa en nuestro medio: su lesión es mixta o hepatocelular, y tiene un rasgo muy característico —la latencia—, ya que aparece con frecuencia *días o semanas después de haber terminado el tratamiento*, exactamente como aquí, quince días tras retirarlo. El daño es idiosincrásico, no dependiente de dosis, y el manejo consiste en retirar el fármaco, evitar la reexposición y vigilar la función hepática, que en la mayoría se normaliza en semanas.',
  no:{1:'Los anabolizantes 17-alfa-alquilados producen colestasis con transaminasas poco elevadas, no citólisis de 1.300.',2:'La serología indica infección pasada y resuelta: para una hepatitis B aguda haría falta HBsAg e IgM anti-HBc positivos.',3:'La esteatohepatitis no alcohólica eleva las transaminasas de forma leve y crónica, nunca por encima de 1.000 ni con ictericia aguda.',4:'La colestasis pura tendría fosfatasa alcalina y GGT desproporcionadamente altas frente a unas transaminasas casi normales, y aquí ocurre lo contrario.'},
  trampa:'El culturismo y los anabolizantes acaparan la atención. El patrón de laboratorio los descarta, y la latencia tras retirar el antibiótico es la firma del clavulánico.',
  dx:['Hepatotoxicidad por amoxicilina-clavulánico','Hepatitis por anabolizantes','Hepatitis vírica aguda','Hepatitis autoinmune'],
  obj:'Distinguir hepatotoxicidad hepatocelular de colestásica y reconocer la latencia del clavulánico.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y el registro español de hepatotoxicidad.'
},
'MIR-2014-M38': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Displasia en colitis ulcerosa',
  clave:'Displasia de ALTO GRADO confirmada por dos patólogos en colitis ulcerosa extensa: proctocolectomía total.',
  exp:'En la enfermedad inflamatoria intestinal el cáncer no aparece sobre un pólipo aislado, sino sobre una mucosa *difusamente alterada*: la displasia es multifocal y con frecuencia plana, de modo que encontrarla en una biopsia significa que puede haber más allí donde no se biopsió. Por eso una *displasia de alto grado confirmada por dos patólogos expertos* —la confirmación es obligada por la variabilidad interobservador— en una colitis ulcerosa extensa y de larga evolución es indicación de *proctocolectomía total*: en las series clásicas, una proporción muy alta de estos pacientes ya tiene un carcinoma sincrónico no detectado en la pieza quirúrgica. La displasia visible y bien delimitada puede resecarse endoscópicamente y seguir vigilancia, pero eso no aplica a la displasia plana de alto grado. Que la mucosa esté sin actividad inflamatoria no reduce el riesgo: el determinante es la duración y la extensión de la enfermedad.',
  no:{0:'Ya está confirmada por dos patólogos expertos: repetir la colonoscopia solo retrasaría la cirugía.',1:'La vigilancia intensiva se acepta para displasia de BAJO grado en casos seleccionados, no para el alto grado.',2:'La mucosectomía sirve para lesiones visibles y bien delimitadas, no para displasia plana de alto grado en mucosa extensa.',4:'La mesalazina reduce el riesgo a largo plazo pero no trata una displasia ya establecida.'},
  trampa:'Se aplica el criterio del pólipo esporádico. En la colitis ulcerosa la displasia marca un campo entero, y el campo entero es lo que se extirpa.',
  dx:['Displasia de alto grado sobre colitis ulcerosa','Carcinoma colorrectal','Pseudopólipo inflamatorio'],
  obj:'Indicar la proctocolectomía ante displasia de alto grado en colitis ulcerosa.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con guías ECCO sobre enfermedad inflamatoria intestinal y cáncer.'
},
'MIR-2014-M41': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Hemorragia digestiva alta',
  clave:'Úlcera en cara POSTERIOR del bulbo duodenal: la que sangra es la arteria gastroduodenal.',
  exp:'La anatomía explica el riesgo. La *arteria gastroduodenal* discurre justo por detrás de la primera porción del duodeno, de modo que una úlcera de la *cara posterior del bulbo* puede erosionarla y provocar una hemorragia masiva; por el mismo motivo, la úlcera de la cara *anterior* es la que perfora a peritoneo libre. Es un par que conviene tener fijado: posterior sangra, anterior perfora. Además el enunciado da un *Forrest Ib*, es decir, sangrado activo en babeo, que es una lesión de *alto riesgo* de recidiva, no de bajo. Por eso, tras la hemostasia endoscópica, el manejo incluye inhibidor de la bomba de protones intravenoso en perfusión, ingreso y vigilancia. Y ante una recidiva la primera opción no es el quirófano sino un *segundo intento endoscópico*, reservando la cirugía o la embolización arterial para el fracaso de este.',
  no:{0:'El Forrest Ib es sangrado activo: implica ALTO riesgo de recidiva, en torno al 20-30%.',1:'Ante la recidiva se intenta primero un segundo tratamiento endoscópico; la cirugía se reserva para el fracaso.',3:'La lesión de Dieulafoy es una arteria submucosa aberrante sin úlcera asociada, típicamente en fundus gástrico.',4:'La vagotomía troncular ha quedado prácticamente abandonada desde el tratamiento del Helicobacter y los inhibidores de la bomba de protones.'},
  trampa:'Se olvida la pareja anatómica. Cara posterior del bulbo significa gastroduodenal y hemorragia; cara anterior significa perforación.',
  dx:['Úlcera duodenal sangrante','Lesión de Dieulafoy','Varices esofágicas','Síndrome de Mallory-Weiss'],
  obj:'Relacionar la localización de la úlcera duodenal con la arteria gastroduodenal y clasificar el riesgo de Forrest.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías internacionales de hemorragia digestiva no varicosa.'
},

/* ==================== CIRUGÍA Y TRAUMATOLOGÍA ==================== */
'MIR-2014-M47': {
  esp:'Cirugía', tema:'Cirugía digestiva', sub:'Colangitis aguda',
  clave:'Tríada de Charcot con hipotensión y coledocolitiasis: colangitis. Hay que DRENAR la vía biliar, y la CPRE es la vía más eficaz.',
  exp:'La paciente tiene la *tríada de Charcot* —fiebre con escalofríos, dolor en hipocondrio derecho e ictericia— sobre una coledocolitiasis con vía biliar dilatada, y además hipotensión y taquicardia, lo que ya la acerca a la *pentada de Reynolds* y la convierte en una colangitis grave. El concepto que resuelve la pregunta es que la colangitis es una infección *a presión* dentro de un conducto obstruido: mientras la obstrucción persiste, los antibióticos no alcanzan concentración suficiente y la bacteriemia continúa, de modo que el tratamiento definitivo es *descomprimir la vía biliar*. La forma más eficaz y menos agresiva de hacerlo es la *colangiopancreatografía retrógrada endoscópica con esfinterotomía y extracción del cálculo*, que resuelve a la vez la obstrucción y su causa. La colecistectomía no se hace en la fase aguda: se programa después, en el mismo ingreso o poco más tarde, para evitar recurrencias.',
  no:{0:'Solo con antibiótico la infección no se controla mientras la vía siga obstruida: la mortalidad de la colangitis no drenada es alta.',1:'La colecistectomía trata la vesícula, pero deja el cálculo del colédoco, que es lo que está causando la colangitis.',2:'El drenaje transparietohepático se reserva para cuando la CPRE fracasa o no es posible.',3:'La cirugía con exploración del colédoco es más agresiva y tiene más morbilidad y mortalidad que la CPRE en un paciente séptico.'},
  trampa:'Se confunde colangitis con colecistitis. El Murphy positivo despista, pero la ictericia con vía dilatada indica obstrucción del colédoco, y eso se drena.',
  dx:['Colangitis aguda','Colecistitis aguda','Pancreatitis biliar','Absceso hepático'],
  obj:'Priorizar el drenaje de la vía biliar mediante CPRE en la colangitis aguda.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las guías de Tokio para colangitis aguda.'
},
'MIR-2014-M37': {
  esp:'Cirugía', tema:'Coloproctología', sub:'Cáncer de recto precoz',
  clave:'Adenocarcinoma de recto uT1N0 a 10 cm del margen anal en un anciano con comorbilidad: microcirugía transanal endoscópica.',
  exp:'Dos hechos gobiernan la decisión. El primero es el *estadio*: la ecografía endorrectal y la resonancia coinciden en *uT1N0*, es decir, tumor limitado a la submucosa sin ganglios, y la TC descarta enfermedad a distancia. Un T1 sin factores de mal pronóstico tiene un riesgo bajo de afectación ganglionar, lo que permite una resección local con intención curativa. El segundo es el *paciente*: 80 años con cardiopatía isquémica y EPOC, en quien una resección anterior baja o una amputación abdominoperineal suponen una morbimortalidad considerable y, en el segundo caso, una colostomía definitiva. La *microcirugía transanal endoscópica* permite extirpar la lesión de la pared rectal en bloque y con márgenes, sin abrir el abdomen y sin estoma, con una recuperación mucho más rápida. Si la pieza mostrara márgenes afectos, invasión linfovascular o un grado desfavorable, habría que rescatar con cirugía radical.',
  no:{0:'La amputación abdominoperineal se reserva para tumores que infiltran el esfínter, a menos de 5 cm del margen anal.',1:'La radioterapia neoadyuvante se indica en tumores localmente avanzados, T3-T4 o con ganglios, no en un T1N0.',3:'La resección anterior baja por laparotomía es un exceso terapéutico para un T1N0 y muy mal tolerada por este paciente.',4:'La radioterapia adyuvante no aporta nada en un tumor limitado a submucosa y sin ganglios.'},
  trampa:'Se elige la cirugía más radical por tratarse de un cáncer. Un T1N0 bien estadificado permite una resección local, sobre todo con esta comorbilidad.',
  dx:['Adenocarcinoma de recto T1N0','Adenoma velloso','Pólipo maligno'],
  obj:'Indicar la resección local en el cáncer de recto precoz y estadificar antes de decidir.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con guías ESMO de cáncer de recto.'
},
'MIR-2014-M36': {
  esp:'Cirugía', tema:'Pared abdominal', sub:'Hernia crural',
  clave:'Mujer mayor con tumoración DURA POR DEBAJO del ligamento inguinal y vómitos: hernia femoral incarcerada.',
  exp:'La referencia anatómica que resuelve la pregunta es el *ligamento inguinal*. Todo lo que aparece *por encima* de él corresponde al conducto inguinal, hernia directa o indirecta; lo que se palpa *por debajo*, medial a la vena femoral, es una *hernia femoral o crural*. Encaja además el perfil epidemiológico: la hernia crural es mucho más frecuente en *mujeres*, sobre todo mayores y multíparas, por la mayor anchura de la pelvis. Y encaja la clínica: el anillo crural es rígido y estrecho, de modo que estas hernias tienen la *tasa más alta de incarceración y estrangulación* de todas, y el vómito con tumoración dura e irreductible obliga a pensar en obstrucción intestinal por estrangulamiento. Por eso la hernia crural se opera siempre, incluso asintomática, y en este caso de urgencia.',
  no:{0:'La hernia inguinal directa se palpa POR ENCIMA del ligamento inguinal, medial a los vasos epigástricos.',1:'La hernia de Spiegel aparece en la línea semilunar, lateral al recto anterior y por debajo del ombligo, no en la ingle.',2:'La indirecta también es supra-inguinal, sigue el trayecto del conducto y puede descender al escroto o al labio mayor.',4:'La hernia obturatriz no es palpable: se manifiesta por obstrucción intestinal y por el signo de Howship-Romberg, dolor en cara interna del muslo.'},
  trampa:'Toda tumoración inguinal se etiqueta de hernia inguinal. El límite es el ligamento: por debajo es crural, y esa se estrangula.',
  dx:['Hernia femoral incarcerada','Hernia inguinal','Adenopatía inguinal','Hernia obturatriz'],
  obj:'Distinguir hernia crural de inguinal por su relación con el ligamento inguinal y su riesgo de estrangulación.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Schwartz, Principios de Cirugía.'
},
'MIR-2014-M119': {
  esp:'Cirugía', tema:'Traumatología', sub:'Rotura del ligamento cruzado anterior',
  clave:'Chasquido con la rodilla en giro sobre pie fijo, hemartros SIN gotas de grasa y LACHMAN positivo: rotura del cruzado anterior.',
  exp:'Tres datos convergen. El *mecanismo* es el típico: pie fijo en el suelo, rodilla en hiperextensión y rotación brusca, con un *chasquido audible* y la imposibilidad de seguir jugando. El *hemartros agudo e intenso* indica lesión de una estructura vascularizada, y en la rodilla el 70% de los hemartros agudos corresponden a rotura del cruzado anterior; que *no haya gotas de grasa* flotando es un dato positivo importante, porque su presencia significaría comunicación con la médula ósea, es decir, fractura intraarticular, y aquí lo descarta. Y la *maniobra de Lachman positiva* explora directamente el desplazamiento anterior de la tibia sobre el fémur, siendo la prueba más sensible para el cruzado anterior, por delante del cajón anterior. La sensación de fallo al apoyar completa el cuadro. La confirmación es la resonancia y el tratamiento en un deportista joven es la reconstrucción.',
  no:{0:'La rotura en asa de cubo del menisco produce BLOQUEO articular con limitación de la extensión, y aquí la movilidad está libre.',1:'La lesión aislada del colateral lateral da dolor y bostezo en varo, no hemartros masivo ni Lachman positivo.',2:'El arrancamiento de la espina tibial daría gotas de grasa en el líquido, por tratarse de una fractura, y se vería en la radiografía.',3:'Una fractura unicondílea también produciría lipohemartros y no cursaría con movilidad libre.'},
  trampa:'Se pasa por alto la ausencia de gotas de grasa, que está puesta a propósito para descartar las dos opciones de fractura.',
  dx:['Rotura del ligamento cruzado anterior','Rotura meniscal','Fractura osteocondral','Luxación rotuliana'],
  obj:'Diagnosticar la rotura del cruzado anterior por mecanismo, hemartros y maniobra de Lachman.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Campbell, Cirugía Ortopédica.'
},
'MIR-2014-M201': {
  esp:'Cirugía', tema:'Traumatología', sub:'Tríada desgraciada de la rodilla',
  clave:'Tríada de O Donoghue: ligamento colateral TIBIAL (medial), cruzado ANTERIOR y menisco MEDIAL. Todo del lado interno.',
  exp:'El mecanismo lesional explica por qué se lesionan precisamente esos tres elementos. Con el pie fijo en el suelo, un golpe sobre la cara *externa* de la rodilla la fuerza en *valgo* con rotación externa de la tibia. Ese valgo tensa y rompe primero el *ligamento colateral tibial o medial*, que es el que resiste esa dirección; si la energía continúa, cede el *ligamento cruzado anterior*, que controla la traslación anterior y la rotación; y como el *menisco medial* está firmemente adherido a la cara profunda del colateral medial —a diferencia del lateral, que es móvil—, se desgarra con él. De ahí que los tres elementos afectados sean del compartimento *interno*, aunque el golpe venga de fuera. Es una lesión clásica del fútbol y del esquí, cursa con hemartros y suele requerir reconstrucción del cruzado tras recuperar el balance articular.',
  no:{0:'Los elementos son del lado MEDIAL, no del lateral, y el cruzado implicado es el anterior.',2:'La tríada no incluye ambos cruzados: el posterior se lesiona por mecanismos de impacto anterior directo sobre la tibia flexionada.',3:'Falta el colateral medial, que es precisamente el primero en romperse con el valgo forzado.',4:'Los dos colaterales no se rompen a la vez: uno se tensa mientras el otro se relaja, según la dirección de la fuerza.'},
  trampa:'Se piensa que si el golpe viene de fuera se rompe lo de fuera. Ocurre al revés: el valgo distiende el lado interno y es ese el que cede.',
  dx:['Tríada desgraciada','Rotura aislada del cruzado anterior','Esguince de colateral medial'],
  obj:'Recordar los tres elementos de la tríada desgraciada y el mecanismo en valgo que la produce.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Campbell, Cirugía Ortopédica.'
},
'MIR-2014-M135': {
  esp:'Cirugía', tema:'Quemaduras', sub:'Síndrome compartimental por quemadura circular',
  clave:'Quemadura CIRCULAR de un miembro con ausencia de pulso: escarotomía urgente. Es una descompresión, no un desbridamiento.',
  exp:'Una quemadura profunda que rodea por completo un miembro crea una *escara rígida e inextensible*. A medida que el edema se acumula por debajo en las primeras horas, la presión dentro del compartimento sube hasta ocluir primero el retorno venoso y después el flujo arterial: es un *síndrome compartimental* con isquemia distal, y la *ausencia de pulso por doppler* confirma que ya está establecido. El tratamiento es mecánico e inmediato: la *escarotomía*, unas incisiones longitudinales que atraviesan todo el espesor de la escara a lo largo de las líneas medias lateral y medial del miembro, liberando la constricción y restaurando la perfusión. Se hace a la cabecera, apenas sangra ni duele porque la escara está desvitalizada, y no admite espera: cada hora de retraso añade daño isquémico irreversible. La misma lógica se aplica a las quemaduras circulares del tórax, donde la escara impide la expansión respiratoria.',
  no:{0:'Las curas tópicas y reevaluar en una semana condenan el miembro a la isquemia en las próximas horas.',1:'No hay lesión vascular que reparar: el problema es la presión externa de la escara, no una obstrucción intrínseca del vaso.',3:'La conducta expectante ante un miembro sin pulso es inaceptable.',4:'La amputación es prematura: el miembro es recuperable si se descomprime a tiempo.'},
  trampa:'El "10% de superficie corporal" hace pensar en una quemadura leve. La extensión mide el riesgo sistémico; la circularidad mide el riesgo del miembro.',
  dx:['Síndrome compartimental por quemadura circunferencial','Lesión arterial traumática','Trombosis arterial'],
  obj:'Indicar la escarotomía urgente en la quemadura circunferencial con compromiso vascular.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las guías de la American Burn Association.'
},

/* ==================== PSIQUIATRÍA ==================== */
'MIR-2014-M152': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Trastorno adaptativo',
  clave:'Síntomas ansioso-depresivos claramente ligados a un estresante identificable y reciente: trastorno adaptativo.',
  exp:'El diagnóstico se apoya en la *relación temporal y causal con un factor estresante identificable*: el despido y cinco meses de paro. Los síntomas —desánimo, inapetencia, nerviosismo, insomnio, preocupación por el futuro y retraimiento social— son reales y producen malestar y deterioro funcional, pero aparecen *en respuesta* al estresante, dentro de los tres meses siguientes, y no alcanzan los criterios completos de un episodio depresivo mayor ni de un trastorno de ansiedad definido. Cuando además hay síntomas de ambos registros se especifica *con síntomas mixtos ansiosos y depresivos*. Es importante porque el pronóstico y el tratamiento difieren: tiende a remitir cuando el estresante cede o el paciente se adapta, la intervención de elección es psicoterapéutica y de apoyo, y los psicofármacos son coadyuvantes y a corto plazo. Eso sí, hay que evaluar el riesgo suicida, que existe.',
  no:{0:'El trastorno obsesivo exige obsesiones o compulsiones; aquí hay preocupaciones realistas sobre el futuro, no ideas intrusivas egodistónicas.',2:'La fobia social es un miedo persistente al escrutinio ajeno, presente desde mucho antes; aquí la evitación es consecuencia del ánimo bajo.',3:'La distimia requiere ánimo depresivo la mayor parte del tiempo durante AL MENOS DOS AÑOS, y aquí llevan cinco meses.',4:'La agorafobia implica miedo a lugares de difícil escape con crisis de pánico, que no se describen.'},
  trampa:'Se confunde con distimia por el ánimo bajo persistente. El criterio temporal de dos años y la existencia de un desencadenante claro separan ambos diagnósticos.',
  dx:['Trastorno adaptativo mixto','Episodio depresivo mayor','Distimia','Trastorno de ansiedad generalizada'],
  obj:'Diagnosticar el trastorno adaptativo y diferenciarlo de la distimia y la depresión mayor.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con los criterios DSM-5-TR.'
},
'MIR-2014-M154': {
  esp:'Psiquiatría', tema:'Toxicología', sub:'Intoxicación por cocaína',
  clave:'La cocaína es un SIMPATICOMIMÉTICO: produce HIPERtermia. La hipotermia es lo que no encaja.',
  exp:'La cocaína bloquea la recaptación de dopamina, noradrenalina y serotonina, con lo que genera un *síndrome simpaticomimético* completo: taquicardia, hipertensión, *midriasis*, *diaforesis*, agitación psicomotriz, ideas delirantes de tipo paranoide y *hipertermia*. La fiebre es además uno de los signos de peor pronóstico, porque combina el aumento de la actividad muscular por la agitación con la vasoconstricción cutánea, que impide disipar el calor, y puede llegar a la hipertermia maligna con rabdomiólisis. El *dolor torácico* también es esperable, por vasoespasmo coronario y por el riesgo real de infarto incluso en jóvenes sin lesiones coronarias, además de disección aórtica. Por tanto la *hipotermia* es el único síntoma que contradice el mecanismo: aparece en las intoxicaciones por depresores del sistema nervioso central, como opiáceos, alcohol o benzodiacepinas. En el manejo conviene recordar que las benzodiacepinas son el tratamiento de la agitación y que los betabloqueantes se evitan por el riesgo de estimulación alfa sin oposición.',
  no:{1:'La taquicardia es un efecto directo de la estimulación adrenérgica.',2:'La midriasis es característica de todos los simpaticomiméticos.',3:'La diaforesis acompaña siempre a la hiperactividad adrenérgica.',4:'El dolor torácico por vasoespasmo coronario es una complicación clásica y potencialmente mortal.'},
  trampa:'Se responde el síntoma más grave en vez del que contradice el mecanismo. Basta clasificar la droga en estimulante o depresora para resolver la pregunta.',
  dx:['Intoxicación por cocaína','Intoxicación por anfetaminas','Síndrome serotoninérgico','Brote psicótico'],
  obj:'Reconocer el síndrome simpaticomimético y diferenciarlo del toxíndrome depresor.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Goldfrank, Toxicologic Emergencies.'
},
'MIR-2014-M155': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Pseudodemencia depresiva',
  clave:'Anciano que se QUEJA de su memoria, responde "no sé", empeora por las mañanas y venía de un bajón de ánimo: depresión. Sertralina.',
  exp:'Todo el cuadro apunta a una *pseudodemencia depresiva* y no a un Alzheimer. La secuencia lo indica: primero hubo un periodo de *ánimo bajo* y solo después aparecieron los olvidos, mientras que en la demencia degenerativa el deterioro cognitivo es lo primero. El curso es *rápido*, dos meses frente a los años del Alzheimer. La actitud es característica: el paciente *se queja activamente* de su mala memoria y responde *"no sé"* o *"no me importa"*, en lugar de disimular, confabular o restar importancia como hace el paciente con demencia. Hay *ritmo circadiano*, con empeoramiento matutino, que es un síntoma afectivo. Y, sobre todo, *se desenvuelve con relativa comodidad en el día a día*, es decir, la funcionalidad está conservada, lo que es incompatible con una demencia establecida. El tratamiento es antidepresivo, y en el anciano se prefiere un *ISRS como la sertralina* por su buen perfil de seguridad y su escasa acción anticolinérgica. La respuesta al tratamiento confirma el diagnóstico.',
  no:{0:'La quetiapina es un antipsicótico: no está indicada sin síntomas psicóticos y aumenta el riesgo de mortalidad en ancianos con demencia.',1:'La lamotrigina es un eutimizante para la prevención de fases depresivas en el trastorno bipolar, no un antidepresivo de primera línea.',2:'La tacrina está retirada por hepatotoxicidad y, además, aquí no hay demencia que tratar.',3:'El donepezilo trataría un Alzheimer, y el cuadro es una depresión que se cura con antidepresivo.'},
  trampa:'La edad y la queja de memoria arrastran hacia el anticolinesterásico. La pista es que el paciente se queja: el que tiene demencia suele no darse cuenta.',
  dx:['Pseudodemencia depresiva','Enfermedad de Alzheimer','Deterioro cognitivo leve','Delirium'],
  obj:'Diferenciar la pseudodemencia depresiva de la demencia y elegir el antidepresivo adecuado en el anciano.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con los criterios DSM-5-TR y guías NICE sobre depresión en el anciano.'
},

/* ==================== FARMACOLOGÍA ==================== */
'MIR-2014-M206': {
  esp:'Farmacología', tema:'Farmacología', sub:'Fármacos e hiperuricemia',
  clave:'Los ESTRÓGENOS son URICOSÚRICOS: bajan el ácido úrico. Por eso la gota es rara en la mujer premenopáusica.',
  exp:'Casi todos los fármacos de la lista elevan el ácido úrico porque *compiten con el urato en el túbulo proximal* y reducen su excreción renal: la *hidroclorotiazida* y los diuréticos de asa lo hacen de forma característica, la *ciclosporina* provoca hiperuricemia hasta en la mitad de los trasplantados, el *etambutol* y también la pirazinamida —conviene tenerlo presente en el tratamiento antituberculoso— la producen igualmente, y el *ácido acetilsalicílico a dosis bajas*, por debajo de 1-2 gramos al día, tiene un efecto paradójico: retiene urato, mientras que a dosis altas se vuelve uricosúrico. Los *estrógenos* hacen lo contrario: *aumentan la excreción renal de ácido úrico*, y esa es la razón fisiológica de que la gota sea rara en la mujer antes de la menopausia y de que su incidencia femenina se dispare después. Por eso son la respuesta correcta.',
  no:{0:'La aspirina a dosis bajas retiene urato de forma paradójica; solo a dosis altas es uricosúrica.',1:'Las tiazidas son una de las causas farmacológicas más frecuentes de hiperuricemia y de gota.',2:'La ciclosporina reduce el filtrado y la excreción de urato, y provoca hiperuricemia en gran parte de los trasplantados.',3:'El etambutol, igual que la pirazinamida, disminuye la excreción tubular de ácido úrico.'},
  trampa:'Se descarta la aspirina pensando que siempre es uricosúrica. El efecto depende de la dosis, y la dosis baja es la que retiene urato.',
  dx:[],
  obj:'Identificar los fármacos que elevan el ácido úrico y el efecto uricosúrico de los estrógenos.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Goodman y Gilman, Bases Farmacológicas de la Terapéutica.'
},
'MIR-2014-M209': {
  esp:'Farmacología', tema:'Farmacocinética', sub:'Estado estacionario',
  clave:'El estado estacionario se alcanza en 4 a 5 semividas: 4 o 5 por 72 horas son 12 a 15 días.',
  exp:'Sin dosis de carga, la concentración de un fármaco sube de forma exponencial hasta la meseta, y el tiempo que tarda depende *exclusivamente de la semivida*, no de la dosis ni del intervalo. La regla es que tras cada semivida se cubre la mitad de lo que falta: al cabo de una semivida se ha alcanzado el 50% de la concentración de equilibrio, tras dos el 75%, tras tres el 87,5%, tras cuatro el 93,75% y tras cinco el 97%. Por convención se considera alcanzado el estado estacionario a las *cuatro o cinco semividas*. Con una semivida de 72 horas eso son 288 a 360 horas, es decir, *12 a 15 días*. Dos consecuencias prácticas: los niveles plasmáticos de digoxina no deben medirse antes de ese plazo, porque no reflejarían la situación real; y si se necesita efecto inmediato hay que administrar una *dosis de carga*, que es justo lo que se ha omitido aquí. Conviene además recordar que la insuficiencia renal alarga la semivida de la digoxina y obliga a ajustar la dosis de mantenimiento.',
  no:{0:'Tres días es solo una semivida: se habría alcanzado la mitad de la concentración de equilibrio.',1:'Entre 3 y 9 días corresponde a una y tres semividas, todavía por debajo del 90%.',3:'Más de 30 días equivaldría a diez semividas: mucho más de lo necesario.',4:'Más de 60 días no guarda ninguna relación con una semivida de 72 horas.'},
  trampa:'Se intenta relacionar el tiempo con la dosis o el intervalo. El estado estacionario depende solo de la semivida; la dosis determina a qué altura queda la meseta, no cuándo se llega.',
  dx:[],
  obj:'Calcular el tiempo hasta el estado estacionario a partir de la semivida.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Goodman y Gilman, Bases Farmacológicas de la Terapéutica.'
},

/* ==================== CIENCIAS BÁSICAS ==================== */
'MIR-2014-M203': {
  esp:'Ciencias Básicas', tema:'Anatomía', sub:'Circulación colateral del colon',
  clave:'La mesentérica inferior se suple desde la mesentérica superior por la arteria CÓLICA MEDIA, a través de la arcada marginal de Drummond.',
  exp:'El colon está protegido por una red de anastomosis que recorre todo su borde mesentérico. La *arteria marginal de Drummond* conecta de forma continua las ramas de la mesentérica superior con las de la inferior, y el *arco de Riolano* establece una comunicación más central entre la *cólica media*, rama de la *mesentérica superior*, y la cólica izquierda, rama de la *mesentérica inferior*. Gracias a esa continuidad, cuando la mesentérica inferior se ocluye poco a poco por ateromatosis, el territorio del colon izquierdo y el sigma sigue recibiendo flujo *retrógrado desde la cólica media*, y el paciente puede permanecer completamente asintomático, como aquí. El punto débil de la red es el *ángulo esplénico*, la llamada zona de Griffiths, que es divisoria entre ambos territorios y donde se localizan preferentemente las colitis isquémicas.',
  no:{1:'La gastroduodenal pertenece al tronco celíaco e irriga estómago, duodeno y páncreas, no el colon izquierdo.',2:'La epigástrica inferior es rama de la ilíaca externa e irriga la pared abdominal anterior.',3:'La esplénica irriga bazo, páncreas y fundus gástrico, no el colon descendente.',4:'La gastroepiploica irriga la curvatura mayor gástrica y el epiplón.'},
  trampa:'Se busca la arteria más cercana en el espacio. Lo que importa es el eje vascular: el colon se rescata desde la mesentérica superior a través de la cólica media.',
  dx:[],
  obj:'Explicar la circulación colateral entre las mesentéricas y localizar el punto débil en el ángulo esplénico.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Moore, Anatomía con Orientación Clínica.'
},
'MIR-2014-M215': {
  esp:'Ciencias Básicas', tema:'Genética', sub:'Enfermedad de Gaucher',
  clave:'Déficit de beta-glucosidasa ácida o glucocerebrosidasa con mutación N370S: enfermedad de Gaucher.',
  exp:'La pregunta se resuelve emparejando enzima y enfermedad. La *glucocerebrosidasa*, también llamada beta-glucosidasa ácida, degrada el glucocerebrósido; cuando falta, el esfingolípido se acumula en los macrófagos del sistema mononuclear fagocítico, que adoptan el aspecto de *célula de Gaucher* con citoplasma en papel arrugado, y se depositan sobre todo en bazo, hígado y médula ósea. De ahí la *hepatoesplenomegalia*, la citopenia y las lesiones óseas. La mutación *N370S* es la más frecuente y define el *tipo 1 no neuronopático*, el más común y el de mejor pronóstico, muy prevalente en la población judía ashkenazí; existe *tratamiento sustitutivo enzimático* con imiglucerasa, que es la razón práctica de identificarla. Es una enfermedad *autosómica recesiva*, lo que encaja con unos padres sanos portadores y con la homocigosis de la niña, y su gen está en el cromosoma *1q22*.',
  no:{0:'El Fabry se debe a déficit de alfa-galactosidasa A, es ligado al X y cursa con acroparestesias, angioqueratomas y afectación renal y cardiaca.',1:'La enfermedad de Huntington es una expansión de tripletes CAG, autosómica dominante y de inicio en la edad adulta, con corea y demencia.',2:'La ataxia SCA1 es autosómica dominante y no cursa con visceromegalia.',3:'La adrenoleucodistrofia es peroxisomal, ligada al X, y asocia insuficiencia suprarrenal con desmielinización.'},
  trampa:'Se confunden las esfingolipidosis entre sí. El atajo fiable es la enzima: glucocerebrosidasa siempre significa Gaucher, y alfa-galactosidasa siempre significa Fabry.',
  dx:['Enfermedad de Gaucher tipo 1','Enfermedad de Niemann-Pick','Mucopolisacaridosis','Enfermedad de Fabry'],
  obj:'Asociar el déficit de glucocerebrosidasa con la enfermedad de Gaucher y su herencia recesiva.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., capítulo de enfermedades por depósito lisosomal.'
},

/* ==================== EMERGENCIAS ==================== */
'MIR-2014-M125': {
  esp:'Emergencias', tema:'Sepsis', sub:'Resucitación inicial',
  clave:'En la sepsis la meta de la resucitación con fluidos es una presión arterial MEDIA mayor de 65 mmHg.',
  exp:'La paciente tiene una sepsis de origen respiratorio con hipotensión, taquicardia y taquipnea, y la afirmación verdadera es la que define el objetivo hemodinámico: la *fluidoterapia precoz con cristaloides* es la primera medida y su meta es mantener una *presión arterial media por encima de 65 mmHg*, cifra que corresponde al umbral por debajo del cual se pierde la autorregulación del flujo en riñón y cerebro. A partir de ahí conviene fijar los otros errores del enunciado. La *antibioterapia en la primera hora* sí reduce la mortalidad, y de forma muy marcada: cada hora de retraso la aumenta. El *lactato por encima de 4* define hipoperfusión tisular y por sí solo marca gravedad aunque la tensión parezca aceptable, de modo que nunca puede ignorarse. La *ausencia de fiebre no descarta la sepsis*: el anciano se presenta a menudo con hipotermia o normotermia, como aquí, con 35,9 grados, y eso es un signo de mal pronóstico. Y el vasopresor de elección cuando la fluidoterapia no basta es la *noradrenalina*.',
  no:{0:'El antibiótico en la primera hora SÍ ha demostrado reducir la mortalidad de forma consistente.',2:'Un lactato mayor de 4 mmol/L indica hipoperfusión y define shock séptico junto con la necesidad de vasopresores: nunca puede minimizarse.',3:'La ausencia de fiebre no descarta nada: la hipotermia en el anciano séptico es un marcador de gravedad.',4:'El vasopresor de elección es la noradrenalina; el isoproterenol es un betaagonista que produce vasodilatación y taquicardia, y empeoraría la hipotensión.'},
  trampa:'Se confunde presión arterial media con sistólica. La meta de 65 mmHg es de la MEDIA, que aquí, con 84/50, está en torno a 61.',
  dx:['Sepsis de origen respiratorio','Shock séptico','Deshidratación','Delirium'],
  obj:'Conocer los objetivos de la resucitación inicial en la sepsis y los errores más comunes.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las guías de la Surviving Sepsis Campaign.'
},
'MIR-2014-M52': {
  esp:'Emergencias', tema:'Reanimación cardiopulmonar', sub:'Cadena de supervivencia',
  clave:'Reconocer y pedir ayuda, RCP precoz, desfibrilación precoz y cuidados posresucitación. Pedir ayuda va SIEMPRE primero.',
  exp:'La cadena de supervivencia ordena las intervenciones según lo que más vidas salva en la parada extrahospitalaria, y su primer eslabón es *reconocer la parada y activar el sistema de emergencias*. Ese orden no es arbitrario: un reanimador solo no puede sustituir a un equipo con desfibrilador, de modo que cuanto antes se avise, antes llega el recurso que revierte la fibrilación ventricular. El segundo eslabón es la *reanimación precoz*, con compresiones de calidad, que mantiene la perfusión coronaria y cerebral y duplica o triplica la supervivencia mientras llega la ayuda. El tercero es la *desfibrilación precoz*, porque la probabilidad de éxito cae aproximadamente un 10% por cada minuto de retraso, de ahí la importancia de los desfibriladores de acceso público. Y el cuarto son los *cuidados posresucitación*, que incluyen el control de la temperatura, el soporte hemodinámico y el tratamiento de la causa: hoy se sabe que ese eslabón determina buena parte del pronóstico neurológico final.',
  no:{0:'Desfibrilar antes de pedir ayuda invierte el orden y presupone que ya se dispone de un desfibrilador.',1:'Abrir la vía aérea antes que nada corresponde al esquema ABC antiguo, sustituido por la secuencia que prioriza las compresiones.',2:'Omite el reconocimiento inicial y la activación del sistema de emergencias, que es el primer eslabón.',3:'La ventilación boca a boca antes de las compresiones y las compresiones intermitentes contradicen todas las recomendaciones actuales.'},
  trampa:'Se prioriza actuar sobre el paciente antes que avisar. En la parada extrahospitalaria, pedir ayuda es una maniobra terapéutica en sí misma.',
  dx:[],
  obj:'Ordenar los eslabones de la cadena de supervivencia.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las recomendaciones del European Resuscitation Council.'
},

/* ==================== BIOÉTICA, ENDOCRINO Y OFTALMOLOGÍA ==================== */
'MIR-2014-M139': {
  esp:'Bioética', tema:'Final de la vida', sub:'Adecuación del esfuerzo terapéutico',
  clave:'Ni encarnizamiento ni abandono: definir objetivos, simplificar y respetar la voluntad ya expresada por la paciente.',
  exp:'La respuesta correcta es la que evita los dos extremos. Por un lado, el *encarnizamiento terapéutico*: pruebas invasivas y soporte ventilatorio agresivo en una paciente con insuficiencia cardiaca en clase D, seis ingresos en seis meses y una decisión ya tomada de no ir a cuidados intensivos. Por otro, el *abandono*, que sería no tratar por edad, o dar por hecho que está agónica y sedarla sin más: la paciente tiene una infección respiratoria que puede tratarse y una disnea que puede aliviarse. Lo que corresponde es la *adecuación del esfuerzo terapéutico*: fijar explícitamente qué se persigue —el control de síntomas y, si es posible, revertir el episodio—, retirar lo que no aporta a ese objetivo, y hacerlo *respetando los valores y las preferencias ya manifestadas* por la paciente y su familia. Es una decisión clínica compartida y documentada, no una renuncia; y la sedación paliativa tiene su lugar más adelante, si aparece un síntoma refractario, con su propia indicación y consentimiento.',
  no:{0:'La TC y las muestras invasivas no cambiarían el plan terapéutico ya acordado y añaden carga sin beneficio.',1:'La abstención terapéutica basada en la edad es discriminatoria: la paciente tiene un proceso tratable y síntomas que aliviar.',3:'El tratamiento intensivo con ventilación mecánica contradice de forma directa la voluntad expresada por la paciente.',4:'Presuponer la situación agónica y sedar sin más se salta la valoración: la sedación exige un síntoma refractario y su propio proceso de indicación y consentimiento.'},
  trampa:'Se plantea como si hubiera que elegir entre hacerlo todo o no hacer nada. La adecuación del esfuerzo es precisamente el camino intermedio, y es el correcto.',
  dx:[],
  obj:'Aplicar la adecuación del esfuerzo terapéutico respetando la autonomía del paciente.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con la Ley 41/2002 de autonomía del paciente y guías SECPAL.'
},
'MIR-2014-M231': {
  esp:'Medicina Interna', tema:'Endocrinología', sub:'Feocromocitoma y MEN 2',
  clave:'Carcinoma medular de tiroides familiar más masa suprarrenal: MEN 2. Antes de tocar nada, descartar feocromocitoma.',
  exp:'Un carcinoma medular de tiroides en el padre y en la hermana señala una *neoplasia endocrina múltiple tipo 2*, causada por mutaciones del protooncogén *RET*, en la que el carcinoma medular se asocia a *feocromocitoma* y, en el tipo 2A, a hiperparatiroidismo. Encontrar en esa paciente una *masa suprarrenal de 5 cm* obliga a asumir que es un feocromocitoma mientras no se demuestre lo contrario, aunque esté asintomática, porque hasta un tercio son normotensos entre crisis. El paso obligatorio es *bioquímico*: metanefrinas fraccionadas en plasma o en orina de 24 horas. La razón es de seguridad: cualquier manipulación —una punción de la masa, una cirugía o una anestesia— sobre un feocromocitoma no bloqueado puede desencadenar una *crisis hipertensiva mortal*. Solo tras confirmarlo y bloquear con alfabloqueantes durante una o dos semanas, añadiendo betabloqueo después si hace falta, puede procederse a la cirugía. También corresponde el estudio genético de RET a la paciente y a la familia.',
  no:{0:'Vigilar una masa de 5 cm en este contexto es inaceptable: por tamaño y por contexto sindrómico exige estudio y cirugía.',1:'El carcinoma medular importa y hay que buscarlo con calcitonina y estudio de RET, pero lo urgente y lo que condiciona la seguridad es descartar el feocromocitoma.',2:'El Cushing subclínico no forma parte del MEN 2 y no es la sospecha prioritaria en este cuadro.',3:'La punción de un posible feocromocitoma está CONTRAINDICADA: puede desencadenar una crisis hipertensiva fatal.'},
  trampa:'Se pide una punción para "saber qué es". En la suprarrenal la biopsia va después de la bioquímica, nunca antes, precisamente por esto.',
  dx:['Feocromocitoma en MEN 2','Incidentaloma suprarrenal','Carcinoma suprarrenal','Metástasis suprarrenal'],
  obj:'Descartar bioquímicamente el feocromocitoma antes de manipular una masa suprarrenal.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con guías de la Endocrine Society sobre feocromocitoma y paraganglioma.'
},
'MIR-2014-M159': {
  esp:'Ginecología y Obstetricia', tema:'Patología cervical', sub:'Virus del papiloma humano',
  clave:'El genotipo 16 es el más oncogénico: responsable por sí solo de más de la mitad de los cánceres de cuello uterino.',
  exp:'Los genotipos del papilomavirus se dividen en dos grupos con comportamientos opuestos. Los de *alto riesgo* integran su ADN en el genoma de la célula y expresan las oncoproteínas *E6 y E7*, que inactivan respectivamente los genes supresores *p53* y *Rb*, permitiendo la proliferación descontrolada que lleva de la lesión intraepitelial al carcinoma. Dentro de ese grupo, el *16* es con diferencia el más oncogénico —causa por sí solo alrededor del 50-60% de los cánceres de cérvix— seguido del *18*, que aporta otro 10-20% y tiene especial protagonismo en el adenocarcinoma. Los de *bajo riesgo*, el *6* y el *11*, no integran su ADN y producen lesiones benignas: condilomas acuminados y papilomatosis laríngea. Los genotipos 23 y 55 no figuran entre los de alto riesgo. Esta jerarquía es la que explica el diseño de las vacunas y la del cribado con determinación de VPH de alto riesgo.',
  no:{1:'El genotipo 11 es de BAJO riesgo: produce condilomas y papilomatosis respiratoria recurrente, no cáncer.',2:'El genotipo 6 es también de bajo riesgo y responsable, junto al 11, de la mayoría de los condilomas.',3:'El genotipo 23 no está entre los de alto riesgo oncogénico.',4:'El genotipo 55 tampoco figura entre los genotipos oncogénicos reconocidos.'},
  trampa:'Se confunden los cuatro genotipos de la vacuna tetravalente. El 6 y el 11 están en ella por los condilomas; los que causan cáncer son el 16 y el 18.',
  dx:[],
  obj:'Jerarquizar los genotipos del VPH por su potencial oncogénico.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y documentos de la IARC sobre VPH.'
},
'MIR-2014-M149': {
  esp:'Medicina Interna', tema:'Oftalmología', sub:'Degeneración macular asociada a la edad',
  clave:'Drusas blandas con desprendimiento seroso macular: DMAE exudativa o húmeda. Antiangiogénicos intravítreos.',
  exp:'El caso describe una *degeneración macular asociada a la edad en su forma exudativa*: varón mayor con pérdida rápida de la agudeza visual *central*, drusas blandas como sustrato de la enfermedad y un *desprendimiento seroso macular* que traduce la exudación desde una membrana neovascular coroidea. El mecanismo es la proliferación de vasos anómalos guiada por el *factor de crecimiento del endotelio vascular*, y de ahí sale el tratamiento: las *inyecciones intravítreas de antiangiogénicos* —ranibizumab, aflibercept, bevacizumab—, que bloquean ese factor, secan el exudado y, a diferencia de todo lo anterior, no solo frenan la pérdida sino que en una parte importante de pacientes *mejoran* la agudeza visual. Es un tratamiento de administración repetida, con controles mediante tomografía de coherencia óptica. Conviene distinguirla de la forma *seca o atrófica*, mucho más frecuente y de curso lento, para la que no hay tratamiento eficaz más allá de los suplementos antioxidantes de los estudios AREDS y el control de factores de riesgo, especialmente el tabaco.',
  no:{0:'La fotocoagulación focal con láser destruye la retina que trata y ha quedado relegada a lesiones extrafoveales muy concretas.',1:'La terapia fotodinámica con verteporfino fue el estándar previo, pero solo estabilizaba la visión y hoy es una alternativa de segunda línea.',3:'La vitrectomía no tiene papel en la DMAE exudativa; se usa en patología vitreorretiniana como el agujero macular o la membrana epirretiniana.',4:'La observación condenaría al paciente a una pérdida central irreversible, cuando existe un tratamiento que puede recuperar visión.'},
  trampa:'Se confunde la forma seca con la húmeda. La pérdida rápida en dos semanas con desprendimiento seroso indica exudación, y esa sí tiene tratamiento urgente.',
  dx:['DMAE exudativa','DMAE atrófica','Edema macular diabético','Coriorretinopatía serosa central'],
  obj:'Reconocer la DMAE húmeda y su tratamiento con antiangiogénicos intravítreos.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con la Academia Americana de Oftalmología, Preferred Practice Pattern sobre DMAE.'
}

});
