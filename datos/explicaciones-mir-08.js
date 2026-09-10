/* ============================================================
   EXPLICACIONES — lote 08  (48 casos clínicos)
   Años 2013 a 2022. MIR 2017 de medicina excluido por cuarentena.

   Se leyó cada caso y se contrastó la respuesta oficial con la
   bibliografía: las 48 resultaron correctas. Dos llevan un matiz
   escrito dentro de su explicación, porque el enunciado oficial
   está redactado de forma más tajante de lo que la evidencia
   sostiene (MIR-2018-M224 y MIR-2015-M107).

   Se corrige además la especialidad de las mal clasificadas por
   el importador automático.
   ============================================================ */
window.EXPLICACIONES = Object.assign(window.EXPLICACIONES || {}, {

/* ==================== CARDIOLOGÍA ==================== */
'MIR-2022-M119': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Estenosis aórtica',
  clave:'Estenosis aórtica grave sintomática en un paciente de 75 años con riesgo intermedio: TAVI.',
  exp:'La tríada de angina, síncope de esfuerzo y disnea, junto con el pulso *parvus et tardus* y el soplo mesosistólico, define una estenosis aórtica grave sintomática. La aparición de síntomas es lo que marca el punto de inflexión pronóstico y constituye por sí sola la indicación de sustituir la válvula. Lo que decide *cómo* se sustituye es la edad y el riesgo quirúrgico: en el paciente mayor de 75 años, o con riesgo quirúrgico intermedio o alto, el implante percutáneo transcatéter ha demostrado resultados al menos equivalentes a la cirugía con menor morbilidad, y es la opción preferida. La insuficiencia renal del caso refuerza esa elección.',
  no:{0:'La válvula enferma es la aórtica, no la mitral.',2:'La cirugía abierta se prefiere en pacientes jóvenes y de bajo riesgo quirúrgico, no en este perfil.',3:'La valvulotomía mitral trata la estenosis mitral reumática.'},
  trampa:'Se opta por la cirugía abierta por considerarla el tratamiento definitivo. En este perfil de edad y riesgo, la TAVI es la indicada.',
  dx:['Estenosis aórtica grave sintomática','Miocardiopatía hipertrófica','Estenosis mitral'],
  obj:'Elegir entre TAVI y cirugía según edad y riesgo quirúrgico.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con la guía ESC/EACTS 2021 sobre valvulopatías.'
},
'MIR-2022-M125': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Valvulopatía y coronariopatía',
  clave:'Si hay que abrir el tórax para la válvula y además hay enfermedad de tres vasos, se hace todo en el mismo acto.',
  exp:'Cuando coinciden una estenosis aórtica grave que requiere sustitución y una enfermedad coronaria significativa de varios vasos, la estrategia con mejor respaldo es la *cirugía combinada*: recambio valvular más revascularización con injertos en el mismo tiempo quirúrgico. Evita someter al paciente a dos procedimientos con sus dos riesgos, y en la enfermedad de tres vasos con lesiones proximales el bypass ofrece mejores resultados a largo plazo que los stents, sobre todo en el paciente diabético. Este perfil —71 años, diabético, sin otras comorbilidades, con función ventricular normal— es precisamente el que tolera bien la cirugía.',
  no:{0:'Combinar stents en tres vasos con TAVI simultánea no es la estrategia de elección con este riesgo quirúrgico asumible.',1:'Fragmentar el tratamiento en dos tiempos multiplica los riesgos, y la prótesis mecánica añade anticoagulación de por vida innecesaria a esta edad.',2:'Diferir el tratamiento coronario de forma ambulatoria en una enfermedad de tres vasos deja al paciente expuesto.'},
  trampa:'Se elige lo menos invasivo por reflejo. Cuando el tórax se va a abrir de todos modos, resolver ambas cosas a la vez es lo que menos riesgo total supone.',
  dx:['Estenosis aórtica con enfermedad coronaria multivaso','Síndrome coronario agudo sin elevación del ST'],
  obj:'Decidir la estrategia combinada en valvulopatía con coronariopatía.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con la guía ESC/EACTS sobre valvulopatías y revascularización miocárdica.'
},
'MIR-2014-M50': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Síndrome coronario agudo',
  clave:'Dolor típico con bloqueo de rama izquierda: se trata como un infarto con elevación del ST.',
  exp:'El bloqueo completo de rama izquierda altera la repolarización y hace imposible valorar el segmento ST con los criterios habituales, de modo que puede enmascarar un infarto extenso. Por eso, ante un cuadro clínico sugestivo de isquemia aguda con un bloqueo de rama izquierda presumiblemente nuevo, la conducta es tratar al paciente como si tuviera un infarto con elevación del ST y activar la reperfusión lo antes posible, sin esperar a la troponina. Los criterios de Sgarbossa ayudan a identificar la isquemia sobre un bloqueo preexistente, pero su ausencia no descarta y no debe retrasar la decisión.',
  no:{0:'Esperar el resultado de la troponina desperdicia la ventana de reperfusión: la troponina tarda en elevarse.',2:'El bloqueo de rama izquierda aislado no es indicación de marcapasos profiláctico.',3:'La clínica y el electrocardiograma orientan a isquemia coronaria, no a embolia pulmonar.',4:'La pericarditis no explica este cuadro, y retrasar la reperfusión por probar antiinflamatorios es peligroso.'},
  trampa:'Se busca la elevación del ST y, al no encontrarla, se cataloga como síndrome sin elevación. El bloqueo de rama izquierda la esconde: hay que actuar igual.',
  dx:['Infarto agudo con bloqueo de rama izquierda','Pericarditis','Embolia pulmonar'],
  obj:'Tratar el dolor torácico con bloqueo de rama izquierda como un SCACEST.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con la guía ESC sobre síndromes coronarios agudos y los criterios de Sgarbossa.'
},

/* ==================== CIRUGÍA Y VÍA BILIAR ==================== */
'MIR-2022-M133': {
  esp:'Cirugía', tema:'Cirugía general', sub:'Coledocolitiasis',
  clave:'Riesgo intermedio de coledocolitiasis: prueba no invasiva primero, y la colangiorresonancia es la de elección.',
  exp:'La paciente tiene colestasis bioquímica y un colédoco dilatado de 1 centímetro, pero no se visualiza el cálculo ni hay colangitis: eso la sitúa en riesgo *intermedio*. En esa franja la conducta correcta es confirmar con una prueba de alta sensibilidad y no invasiva antes de intervenir la vía biliar. La *colangiorresonancia* cumple esa función sin radiación ni riesgo, y la ecoendoscopia es la alternativa cuando está disponible. Reservar la CPRE para cuando existe indicación terapéutica evita su complicación característica, la pancreatitis post-CPRE.',
  no:{0:'La CPRE es terapéutica e invasiva: usarla solo para diagnosticar expone a pancreatitis, perforación y sangrado.',1:'La ecoendoscopia es válida, pero requiere disponibilidad y sedación; la colangiorresonancia es la opción no invasiva de elección.',2:'La colangiografía transparietohepática es invasiva y se reserva para la obstrucción no accesible por vía endoscópica.'},
  trampa:'Se salta a la CPRE porque es "la prueba de la vía biliar". Es tratamiento, no cribado.',
  dx:['Coledocolitiasis','Colelitiasis','Tumor periampular'],
  obj:'Estratificar el riesgo antes de indicar una CPRE.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con las guías ASGE y ESGE sobre coledocolitiasis.'
},
'MIR-2022-M143': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Hemofilia',
  clave:'El factor VIII se sintetiza en el hígado: un hígado sano lo produce con normalidad, y la hemofilia A se cura.',
  exp:'El factor VIII se produce fundamentalmente en el endotelio sinusoidal hepático. Por eso el trasplante de hígado aporta un tejido con la dotación genética del donante, capaz de sintetizar factor VIII normal de forma permanente: la hemofilia A queda corregida, y lo mismo ocurre con la hemofilia B, cuyo factor IX también es de origen hepático. No es un efecto residual ni un artefacto: es la consecuencia lógica de dónde se fabrica la proteína que faltaba. Es un ejemplo clásico de cómo conocer el origen tisular de un factor explica un desenlace que a primera vista sorprende.',
  no:{1:'La hemofilia A es una enfermedad genética por déficit de factor, no un proceso autoinmune, y la inmunosupresión no la corrige.',2:'Los concentrados de factor tienen vida media de horas, no de meses: seis meses después no queda nada.',3:'No es un artefacto: el resultado es real y esperable tras el trasplante hepático.'},
  trampa:'Se asume que una enfermedad genética es incurable por definición. Si el gen defectuoso solo se expresa en un órgano, sustituir ese órgano corrige el defecto.',
  dx:['Hemofilia A corregida por trasplante hepático','Inhibidor del factor VIII'],
  obj:'Relacionar el origen hepático del factor VIII con la curación tras el trasplante.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., trastornos de la coagulación.'
},

/* ==================== EMERGENCIAS ==================== */
'MIR-2015-M107': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Complicaciones neurológicas del VIH',
  clave:'Se pide la MENOS probable. La leucoencefalopatía multifocal progresiva debuta con déficits focales progresivos, no con crisis.',
  exp:'Ante una crisis convulsiva en un paciente con VIH hay que pensar en las lesiones que ocupan espacio o irritan la corteza: la toxoplasmosis cerebral, el linfoma primario del sistema nervioso central, la meningitis criptocócica y la propia encefalopatía por VIH pueden desencadenarlas. La leucoencefalopatía multifocal progresiva, causada por el virus JC, afecta a la sustancia *blanca* de forma desmielinizante y su presentación característica es un déficit focal de instauración subaguda y progresiva —hemiparesia, alteración visual, deterioro cognitivo— sin fiebre y sin efecto masa. Conviene añadir un matiz: las crisis no son imposibles en la leucoencefalopatía, sobre todo cuando las lesiones se aproximan a la corteza, pero como forma de debut es la menos probable de las cuatro opciones.',
  no:{1:'La meningitis criptocócica puede cursar con crisis, sobre todo si hay hipertensión intracraneal.',2:'La encefalopatía por VIH puede asociarse a crisis en fases avanzadas.',3:'El linfoma primario del sistema nervioso central es una lesión ocupante y produce crisis con frecuencia.'},
  trampa:'Se elige la enfermedad que suena más grave o más rara. La pregunta es cuál se presenta *menos* con crisis, y eso depende de si la lesión afecta a la sustancia blanca o irrita la corteza.',
  dx:['Toxoplasmosis cerebral','Linfoma primario del SNC','Leucoencefalopatía multifocal progresiva','Meningitis criptocócica'],
  obj:'Relacionar el sustrato lesional con la probabilidad de crisis en el paciente con VIH.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías del DHHS sobre infecciones oportunistas y Harrison, 21.ª ed.'
},
'MIR-2015-M98': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Transfusión',
  clave:'Hematíes del donante universal es 0; plasma del donante universal es AB. Son opuestos.',
  exp:'La regla se deduce de qué contiene cada componente. Los *hematíes* llevan antígenos en su superficie: los del grupo 0 no tienen ni A ni B, de modo que no serán atacados por los anticuerpos del receptor; por eso 0 es el donante universal de hematíes. El *plasma* lleva anticuerpos: el del grupo AB no contiene anti-A ni anti-B, de modo que no atacará los hematíes del receptor; por eso AB es el donante universal de plasma. Es una simetría invertida que se memoriza mal si se intenta aprender de golpe y se entiende sola si se piensa en qué viaja en cada bolsa. En la urgencia extrema se usan hematíes 0 negativo, reservando el 0 positivo para varones y mujeres sin capacidad de gestar.',
  no:{0:'Los hematíes AB llevan ambos antígenos: serían destruidos por los anti-B del receptor A.',1:'Los hematíes B serían atacados por los anti-B que tiene un receptor del grupo A.',3:'Los hematíes B son incompatibles y el plasma B contiene anti-A, que atacaría los hematíes del receptor.'},
  trampa:'Se aplica la misma lógica a hematíes y plasma. Son opuestas, precisamente porque en un caso importan los antígenos y en el otro los anticuerpos.',
  dx:['Politraumatismo con necesidad transfusional'],
  obj:'Elegir el componente compatible cuando no hay isogrupo.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías de la AABB sobre medicina transfusional.'
},
'MIR-2018-M71': {
  esp:'Emergencias', tema:'Urgencias', sub:'Shock',
  clave:'Gasto BAJO con presión de enclavamiento ALTA y resistencias ALTAS: la bomba falla.',
  exp:'El catéter de Swan-Ganz da los tres datos que clasifican el shock. Un índice cardíaco de 1,4 indica gasto bajo. Una presión de enclavamiento capilar pulmonar de 25 mmHg —muy por encima de lo normal— refleja que la sangre se acumula por detrás del ventrículo izquierdo, es decir, presión de llenado alta. Y unas resistencias vasculares sistémicas de 2000 dinas indican vasoconstricción compensadora. Esa combinación define el shock cardiogénico: el corazón no bombea, la sangre se remansa y el organismo compensa cerrando el lecho vascular, de ahí la piel fría.',
  no:{1:'El shock séptico cursa con resistencias BAJAS y gasto habitualmente alto en la fase inicial.',2:'En el hipovolémico el gasto y las resistencias van igual, pero la presión de enclavamiento está BAJA por falta de volumen.',3:'El anafiláctico es distributivo, con vasodilatación y resistencias bajas.'},
  trampa:'Se confunde con el hipovolémico porque ambos tienen gasto bajo y resistencias altas. Lo que los separa es la presión de llenado: alta en el cardiogénico, baja en el hipovolémico.',
  dx:['Shock cardiogénico','Shock hipovolémico','Shock obstructivo'],
  obj:'Clasificar el shock por gasto, presión de llenado y resistencias.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., abordaje del paciente en shock.'
},
'MIR-2018-M98': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Reversión de anticoagulantes',
  clave:'Cada anticoagulante tiene su antídoto. El del dabigatrán es el idarucizumab.',
  exp:'El idarucizumab es un fragmento de anticuerpo monoclonal que se une al dabigatrán con una afinidad mucho mayor que la de este por la trombina, y revierte su efecto en minutos. Está indicado en la hemorragia grave o cuando se requiere un procedimiento urgente, como aquí. Conviene tener el mapa completo: la vitamina K y los concentrados de complejo protrombínico revierten los antivitamina K; la protamina revierte la heparina; y el andexanet alfa revierte los inhibidores del factor Xa, como rivaroxabán y apixabán. Un detalle útil del caso: el tiempo de trombina muy alargado es muy sensible a la presencia de dabigatrán, y si fuera normal prácticamente lo descartaría.',
  no:{0:'La vitamina K revierte los antagonistas de la vitamina K, como la warfarina, no el dabigatrán.',2:'El plasma fresco aporta factores pero no neutraliza el dabigatrán, que es un inhibidor directo de la trombina.',3:'La protamina revierte la heparina.'},
  trampa:'Se aplica la reversión de la warfarina a cualquier anticoagulado. Los anticoagulantes directos tienen sus propios antídotos.',
  dx:['Hemorragia digestiva en paciente anticoagulado','Sobredosificación de dabigatrán'],
  obj:'Asociar cada anticoagulante con su antídoto.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías del American College of Chest Physicians y fichas técnicas.'
},

/* ==================== EPIDEMIOLOGÍA ==================== */
'MIR-2013-M205': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'Intervalos de confianza',
  clave:'El intervalo del riesgo relativo va de 0,31 a 1,17: incluye el 1, luego no hay diferencias significativas.',
  exp:'Para razones como el riesgo relativo, el valor nulo es 1: significa ausencia de efecto. Cuando el intervalo de confianza lo incluye, el resultado es compatible tanto con un beneficio como con ausencia de efecto, e incluso con un ligero perjuicio, de modo que no puede afirmarse que existan diferencias. La estimación puntual de 0,69 sugiere una reducción del 31%, pero la amplitud del intervalo revela una imprecisión considerable, probablemente por un tamaño muestral insuficiente. Y hay un matiz importante: la ausencia de significación no demuestra ausencia de efecto; solo indica que este estudio no ha podido demostrarlo.',
  no:{0:'No puede afirmarse una reducción significativa: el intervalo cruza el 1.',1:'Recomendar la comercialización a partir de un resultado no significativo no está justificado.',2:'La irrelevancia clínica es otra cuestión distinta; lo que falla aquí es la significación estadística.',4:'La estimación puntual apunta a reducción del riesgo, no a aumento.'},
  trampa:'Se lee solo la estimación puntual, que parece un buen resultado. El intervalo es el que dice cuánta incertidumbre hay detrás de esa cifra.',
  dx:[],
  obj:'Interpretar el intervalo de confianza de una razón y su valor nulo.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Altman, Practical Statistics for Medical Research.'
},
'MIR-2014-M181': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'Medidas de asociación',
  clave:'Fumadoras 30 de 1.000; no fumadoras 20 de 2.000, que son 10 de 1.000. RR = 3 y riesgo atribuible = 20 por 1.000.',
  exp:'El error más frecuente en este cálculo es comparar los numeradores sin igualar los denominadores. Hay que convertir ambos a la misma base: entre las fumadoras, 30 casos en 1.000 mujeres son 30 por cada 1.000; entre las no fumadoras, 20 casos en 2.000 mujeres son 10 por cada 1.000. Con esas incidencias, el *riesgo relativo* es 30 dividido entre 10, es decir 3: las fumadoras tienen el triple de riesgo. Y el *riesgo atribuible* es la diferencia, 30 menos 10, es decir 20 por cada 1.000: es la parte del riesgo que se evitaría eliminando el tabaco, y es la medida que expresa el impacto en salud pública.',
  no:{0:'El riesgo relativo es correcto, pero la diferencia de incidencias es 20 por 1.000, no 10.',2:'Ese riesgo relativo saldría de comparar los casos brutos sin corregir los denominadores.',3:'Ni el riesgo relativo ni la diferencia se corresponden con los datos.',4:'Están intercambiadas las dos medidas.'},
  trampa:'Se comparan 30 casos contra 20 y sale un riesgo relativo de 1,5. Los grupos no tienen el mismo tamaño: hay que calcular incidencias, no contar casos.',
  dx:[],
  obj:'Calcular riesgo relativo y riesgo atribuible igualando denominadores.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Gordis, Epidemiología.'
},
'MIR-2014-M183': {
  esp:'Epidemiología', tema:'Diseños de estudio', sub:'Casos y controles',
  clave:'Se parte de los enfermos y se mira hacia atrás la exposición: casos y controles.',
  exp:'El diseño se identifica por su dirección. Aquí los participantes se seleccionan por su *condición de enfermos* —2.777 con hemorragia digestiva alta— y se comparan con controles emparejados por edad y momento de ingreso, mirando después qué antiinflamatorios habían tomado antes. Es decir, se parte del efecto y se busca hacia atrás la causa: casos y controles. Como los sujetos se eligen por enfermedad, no puede calcularse la incidencia y por tanto tampoco el riesgo relativo: la medida propia es el *odds ratio*. El emparejamiento por edad y por hospital busca controlar la confusión, y el punto débil característico es el sesgo de memoria.',
  no:{0:'La cohorte parte de la exposición y sigue a los sujetos hacia adelante para ver quién enferma.',2:'El transversal mide exposición y enfermedad a la vez, en un solo momento.',3:'En el experimental el investigador asigna la intervención, y aquí solo se observa.',4:'El ecológico trabaja con datos agregados de poblaciones, no individuales.'},
  trampa:'Se calcula riesgo relativo en un estudio de casos y controles. Sin incidencia no hay riesgo: solo odds.',
  dx:[],
  obj:'Identificar el diseño por su dirección y su medida de asociación.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Gordis, Epidemiología.'
},
'MIR-2014-M185': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'Intervalo de confianza de la media',
  clave:'El intervalo usa el ERROR ESTÁNDAR, que es la desviación típica dividida por la raíz de n.',
  exp:'La fórmula es la media más menos Z por el error estándar, y el error estándar es la desviación típica dividida por la raíz cuadrada del tamaño muestral. Aquí: la raíz de 85 es aproximadamente 9,22; 0,62 dividido entre 9,22 da unos 0,067; y multiplicado por 1,96 resulta 0,13. El intervalo es por tanto 0,8 más menos 0,13. El concepto que hay detrás es importante: la desviación típica describe la dispersión de los datos individuales, mientras que el error estándar describe la precisión con la que hemos estimado la media, y por eso disminuye al aumentar el tamaño muestral.',
  no:{0:'0,04 correspondería a un tamaño muestral mucho mayor.',2:'0,62 es la desviación típica sin dividir por la raíz de n ni multiplicar por Z.',3:'1,96 es el valor de Z, no el margen del intervalo.',4:'0,07 es aproximadamente el error estándar, pero falta multiplicarlo por 1,96.'},
  trampa:'Se usa la desviación típica directamente en la fórmula. Lo que entra en el intervalo de la media es el error estándar.',
  dx:[],
  obj:'Calcular el intervalo de confianza de una media.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Altman, Practical Statistics for Medical Research.'
},

/* ==================== FARMACOLOGÍA ==================== */
'MIR-2021-P114': {
  esp:'Ciencias Básicas', tema:'Farmacocinética', sub:'Cinética de orden uno',
  clave:'En cinética lineal, la concentración de equilibrio es proporcional a la velocidad de perfusión: cuadruplicar la dosis cuadruplica la concentración.',
  exp:'En una cinética de primer orden, la concentración en estado estacionario es igual a la velocidad de perfusión dividida por el aclaramiento, y el aclaramiento es una constante del paciente que no depende de la dosis. Por tanto, si la velocidad pasa de 10 a 40 mg por hora —se multiplica por cuatro— la concentración de equilibrio pasa de 40 a 160 mg por litro. Esta proporcionalidad es justamente lo que se pierde en la cinética de orden cero o saturable, donde el sistema de eliminación se satura y pequeños aumentos de dosis producen ascensos desproporcionados de la concentración: es lo que ocurre con la fenitoína, el alcohol y la teofilina a dosis altas.',
  no:{0:'10 mg/L supondría que la concentración baja al aumentar la dosis.',1:'40 mg/L es la concentración de partida, sin ningún cambio.',2:'80 mg/L correspondería a duplicar la velocidad, no a cuadruplicarla.'},
  trampa:'Se asume que la relación dosis-concentración siempre es proporcional. Lo es en cinética de primer orden; en la saturable, no.',
  dx:[],
  obj:'Aplicar la proporcionalidad de la cinética de primer orden.',
  ref:'Examen MIR 2021 de farmacia, Ministerio de Sanidad de España. Contrastado con Rowland y Tozer, Farmacocinética Clínica.'
},
'MIR-2021-P120': {
  esp:'Ciencias Básicas', tema:'Farmacocinética', sub:'Modelos y cinética saturable',
  clave:'Las dos son falsas: el análisis no compartimental es para cinética LINEAL, y la Km es una CONCENTRACIÓN, no media velocidad.',
  exp:'La primera afirmación invierte el concepto: el análisis no compartimental se apoya en el cálculo de áreas bajo la curva y asume proporcionalidad entre dosis y exposición, de modo que se aplica a fármacos con comportamiento *lineal*; la cinética no lineal requiere modelos que incorporen la saturación, como el de Michaelis-Menten.',
  no:{0:'Ambas afirmaciones contienen errores conceptuales.',1:'La primera no es correcta: el análisis no compartimental corresponde a la cinética lineal.',2:'La segunda tampoco lo es: la Km es una concentración, no una velocidad.'},
  trampa:'La constante de Michaelis-Menten se recuerda asociada a "la mitad de la velocidad máxima" y se acaba definiendo como si fuera una velocidad. Es la *concentración de sustrato* a la que se alcanza la mitad de la velocidad máxima: sus unidades son de concentración.',
  dx:[],
  obj:'Distinguir cinética lineal de saturable y definir bien la Km.',
  ref:'Examen MIR 2021 de farmacia, Ministerio de Sanidad de España. Contrastado con Rowland y Tozer y Goodman y Gilman.'
},
'MIR-2022-P105': {
  esp:'Medicina Interna', tema:'Oncología', sub:'Terapia dirigida',
  clave:'EGFR mutado con deleción del exón 19: inhibidor de tirosina cinasa de EGFR, y el de elección es osimertinib.',
  exp:'El estudio de biomarcadores en el adenocarcinoma de pulmón avanzado sirve para elegir la diana. Aquí solo hay una alteración: la mutación de *EGFR* con deleción del exón 19, que es una de las dos mutaciones sensibilizantes clásicas junto con la L858R del exón 21. En ese caso el tratamiento de primera línea es un inhibidor de tirosina cinasa de EGFR, y el osimertinib —de tercera generación— ha demostrado mejor supervivencia y mejor penetración en el sistema nervioso central que los de generaciones previas. El resto de marcadores son negativos, lo que descarta las otras dianas.',
  no:{0:'El lapatinib actúa sobre HER2, que aquí es negativo.',1:'El crizotinib se dirige a ALK y ROS1, ambos negativos en este caso.',3:'El dabrafenib se usa en tumores con BRAF mutado, y aquí BRAF es nativo.'},
  trampa:'Se elige el fármaco sin leer todo el panel. Cada línea del informe descarta o confirma una diana concreta.',
  dx:['Adenocarcinoma de pulmón EGFR mutado'],
  obj:'Emparejar el biomarcador con su terapia dirigida.',
  ref:'Examen MIR 2022 de farmacia, Ministerio de Sanidad de España. Contrastado con las guías ESMO y NCCN sobre cáncer de pulmón no microcítico.'
},
'MIR-2022-P123': {
  esp:'Pediatría', tema:'Neonatología', sub:'Errores congénitos del metabolismo',
  clave:'Hiperamonemia SIN acidosis, citrulina baja y ácido orótico ALTO en orina: déficit de ornitina transcarbamilasa.',
  exp:'El algoritmo de la hiperamonemia neonatal se resuelve con tres datos. La ausencia de acidosis descarta las acidemias orgánicas y orienta al ciclo de la urea. La citrulina baja localiza el bloqueo en los primeros pasos del ciclo, que son la carbamil-fosfato sintetasa 1 y la ornitina transcarbamilasa. Y el ácido orótico elevado en orina distingue entre ambas: cuando falla la ornitina transcarbamilasa, el carbamil fosfato acumulado se desvía hacia la síntesis de pirimidinas y aparece el orótico; si el fallo estuviera un paso antes, en la carbamil-fosfato sintetasa, no habría sustrato acumulado y el orótico sería bajo. Es además el único trastorno del ciclo de la urea con herencia ligada al X.',
  no:{0:'El déficit de carbamil-fosfato sintetasa 1 cursa con ácido orótico BAJO, porque el bloqueo es anterior a su formación.',1:'La enfermedad del jarabe de arce cursa con acidosis y olor característico de la orina, sin este perfil.',3:'El déficit de piruvato deshidrogenasa produce acidosis láctica, que aquí está ausente.'},
  trampa:'Se olvida el ácido orótico, que es exactamente el dato que separa los dos primeros defectos del ciclo. Sin él, el caso queda a medias.',
  dx:['Déficit de ornitina transcarbamilasa','Déficit de CPS1','Acidemia orgánica'],
  obj:'Ordenar el diagnóstico de la hiperamonemia neonatal.',
  ref:'Examen MIR 2022 de farmacia, Ministerio de Sanidad de España. Contrastado con Nelson, 22.ª ed., errores congénitos del metabolismo.'
},

/* ==================== GINECOLOGÍA Y OBSTETRICIA ==================== */
'MIR-2018-M107': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Cistitis no complicada',
  clave:'Mujer joven, no gestante y sin comorbilidad, con clínica típica: tratamiento empírico y sin urocultivo.',
  exp:'En la mujer premenopáusica, no embarazada y sin comorbilidades, la cistitis aguda no complicada se diagnostica por la clínica y se trata de forma empírica con una pauta corta —nitrofurantoína, fosfomicina o cotrimoxazol según la resistencia local—, sin necesidad de urocultivo ni de esperar resultados. El urocultivo se reserva para las infecciones recurrentes, el fracaso terapéutico, el embarazo, la sospecha de pielonefritis, el varón y las situaciones complicadas. La ausencia de flujo vaginal aleja la vaginitis y la cervicitis, y el antecedente de actividad sexual reciente es el factor precipitante clásico de la llamada cistitis de la luna de miel.',
  no:{0:'Diferir el tratamiento hasta el cultivo prolonga innecesariamente los síntomas.',1:'El cultivo no aporta en la cistitis no complicada típica y encarece sin cambiar la conducta.',2:'La cistitis no es una infección de transmisión sexual: no hay que tratar a la pareja.'},
  trampa:'Se pide urocultivo por sistema. En la cistitis simple de la mujer joven no cambia la decisión.',
  dx:['Cistitis no complicada','Pielonefritis','Vaginitis'],
  obj:'Tratar empíricamente la cistitis no complicada.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías IDSA sobre cistitis y pielonefritis no complicadas.'
},
'MIR-2018-M132': {
  esp:'Farmacología', tema:'Fuentes de información', sub:'Información de medicamentos',
  clave:'CIMA es el Centro de Información online de Medicamentos de la agencia española: ficha técnica y prospecto oficiales.',
  exp:'CIMA es la base de datos pública de la Agencia Española de Medicamentos y Productos Sanitarios, y contiene la información *oficial* de los medicamentos autorizados en España: ficha técnica, prospecto, estado de comercialización y problemas de suministro. Es la fuente que hay que consultar cuando se necesita el dato regulatorio. Conviene no confundirla con FEDRA, que es el sistema de notificación de sospechas de reacciones adversas de la red de farmacovigilancia, ni con las fuentes comerciales o extranjeras. Para el caso concreto del embarazo y la lactancia existen además bases especializadas que valoran la compatibilidad más allá de lo que dice la ficha técnica, que tiende a ser conservadora.',
  no:{1:'FEDRA es la base de datos de farmacovigilancia para notificar reacciones adversas, no de consulta de fichas técnicas.',2:'Vademecum es una fuente comercial, no oficial de la agencia reguladora.',3:'FDA-DRUGS corresponde a la agencia estadounidense, no a la española.'},
  trampa:'Se consulta la primera fuente que aparece en un buscador. Para una decisión regulatoria hace falta la ficha técnica oficial.',
  dx:[],
  obj:'Conocer las fuentes oficiales de información sobre medicamentos.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con la Agencia Española de Medicamentos y Productos Sanitarios.'
},
'MIR-2018-M168': {
  esp:'Ginecología y Obstetricia', tema:'Obstetricia', sub:'HELLP y restricción del crecimiento',
  clave:'Doppler alterado con peso en p5 es restricción, no feto pequeño sano. Y plaquetas 77.000 con transaminasas altas y esquistocitos es HELLP: se finaliza.',
  exp:'Hay que resolver dos preguntas y las dos apuntan a lo mismo. Primera: el feto no es simplemente pequeño, porque el Doppler está alterado —arterias uterinas en percentil 97 e índice cerebro-placentario en percentil 3, que indica redistribución—, y eso define una *restricción del crecimiento* por insuficiencia placentaria. Segunda: la madre presenta hemólisis con esquistocitos y LDH elevada, transaminasas por encima del doble y plaquetas de 77.000: es un *síndrome HELLP*. El cociente sFlt-1/PlGF de 577 confirma la disfunción placentaria. Con HELLP establecido a las 34 semanas, prolongar la gestación no es una opción: el tratamiento es finalizar, y la vía vaginal mediante inducción es válida si no hay contraindicación obstétrica.',
  no:{0:'No es un feto pequeño sano ni una preeclampsia leve: hay Doppler alterado y criterios de HELLP.',1:'Identifica bien el HELLP pero propone prolongar hasta la semana 35, lo que expone a la madre a complicaciones graves.',2:'No es una simple hipertensión gestacional: la plaquetopenia, la hemólisis y las transaminasas la convierten en HELLP.'},
  trampa:'Se busca ganar semanas de madurez fetal. Con HELLP establecido, cada día añade riesgo de rotura hepática, coagulopatía y eclampsia.',
  dx:['Síndrome HELLP','Restricción del crecimiento intrauterino','Preeclampsia grave'],
  obj:'Reconocer el HELLP con restricción del crecimiento y finalizar sin demora.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con los boletines del ACOG y las guías ISUOG sobre Doppler fetal.'
},
'MIR-2018-M231': {
  esp:'Ginecología y Obstetricia', tema:'Obstetricia', sub:'Hemorragia del tercer trimestre',
  clave:'Sangrado abundante, INDOLORO, sin contracciones y con feto reactivo: placenta previa.',
  exp:'Los cuatro cuadros de la hemorragia del tercer trimestre se separan por dos preguntas: si duele y cómo está el feto. La *placenta previa* sangra en rojo, de forma indolora, con útero relajado y con el estado fetal conservado al principio, y el antecedente de cesárea es un factor de riesgo conocido porque favorece la implantación baja y el acretismo. El *desprendimiento* duele, con útero hipertónico y afectación fetal precoz. La *rotura uterina* cursa con dolor intenso, pérdida de la estática fetal y deterioro materno. Y la *vasa previa* produce un sangrado de origen fetal con deterioro fulminante del feto. La regla que no puede olvidarse es que el tacto vaginal está contraindicado hasta descartar la previa por ecografía.',
  no:{0:'El desprendimiento cursa con dolor, hipertonía y afectación fetal, ausentes aquí.',1:'La rotura uterina produce dolor intenso y deterioro materno y fetal.',2:'La rotura de vasos previos provoca sufrimiento fetal inmediato, y el registro es reactivo.'},
  trampa:'Se hace un tacto vaginal por reflejo ante el sangrado. Con placenta previa puede desencadenar una hemorragia masiva.',
  dx:['Placenta previa','Desprendimiento de placenta','Rotura uterina','Vasa previa'],
  obj:'Diferenciar las hemorragias del tercer trimestre por dolor y estado fetal.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Williams Obstetricia, 26.ª ed.'
},
'MIR-2018-M74': {
  esp:'Medicina Interna', tema:'Dermatología', sub:'Reacciones cutáneas graves',
  clave:'Exantema con edema facial, adenopatías, EOSINOFILIA y transaminasas altas tras un mes de minociclina: DRESS.',
  exp:'El síndrome DRESS —reacción medicamentosa con eosinofilia y síntomas sistémicos— se distingue de un exantema banal por tres cosas que aparecen todas en este caso: la afectación sistémica con fiebre y adenopatías, el *edema facial*, que es muy característico, y las alteraciones analíticas con *eosinofilia* y elevación de transaminasas. El otro dato decisivo es el cronograma: aparece de forma tardía, entre dos y ocho semanas tras iniciar el fármaco, y aquí lleva un mes con minociclina, que junto con anticonvulsivantes, alopurinol y sulfamidas es de los inductores clásicos. El ibuprofeno, iniciado hace solo dos días, no encaja con esa latencia. El tratamiento es suspender el fármaco responsable y vigilar la afectación de órganos, que puede prolongarse semanas.',
  no:{0:'El síndrome estafilocócico cursa con exantema y descamación, sin eosinofilia ni este perfil hepático.',1:'Un enterovirus no produce edema facial con eosinofilia y afectación hepática.',3:'La epidemiología de la guardería despista: el cuadro de los niños es un exantema vírico banal, y aquí hay una reacción sistémica con eosinofilia.'},
  trampa:'El contexto epidemiológico de la guardería empuja hacia una causa viral. La eosinofilia con edema facial y hepatitis tras semanas de un fármaco señala al fármaco.',
  dx:['Síndrome DRESS','Exantema viral','Síndrome de Stevens-Johnson'],
  obj:'Reconocer el DRESS por su latencia y su perfil analítico.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con criterios RegiSCAR y guías de reacciones cutáneas graves.'
},
'MIR-2019-M66': {
  esp:'Ginecología y Obstetricia', tema:'Obstetricia', sub:'Estreptococo del grupo B',
  clave:'Portadora de estreptococo B en trabajo de parto activo: ingreso y penicilina INTRAPARTO, cuanto antes.',
  exp:'La gestante está en trabajo de parto establecido —5 centímetros, borrado del 80%, con dinámica regular y bolsa rota— de modo que corresponde ingreso en sala de dilatación. Y como el cribado vaginorrectal fue positivo para estreptococo del grupo B, se administra profilaxis antibiótica intraparto con penicilina o ampicilina. El objetivo es prevenir la sepsis neonatal precoz, y lo ideal es que transcurran al menos cuatro horas entre la primera dosis y el nacimiento para alcanzar concentraciones protectoras en el canal del parto: por eso se inicia al ingreso y no se espera al expulsivo.',
  no:{0:'Ingresar y observar sin administrar la profilaxis deja al recién nacido sin protección.',1:'Enviar a casa a una gestante en trabajo de parto activo con bolsa rota no es aceptable, y dar el antibiótico en el expulsivo llega tarde.',2:'Derivar a consultas externas a una paciente en fase activa con amniorrea no procede.'},
  trampa:'Se retrasa el antibiótico hasta el expulsivo pensando que así estará más cerca del nacimiento. Necesita horas para alcanzar concentración eficaz.',
  dx:['Trabajo de parto activo con colonización por estreptococo B','Sepsis neonatal precoz'],
  obj:'Administrar la profilaxis intraparto en el momento adecuado.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con las guías de los CDC y del ACOG.'
},

/* ==================== MEDICINA INTERNA ==================== */
'MIR-2013-M136': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Síndrome overlap',
  clave:'EPOC LEVE con poliglobulia e insuficiencia respiratoria: la EPOC no lo explica. Busca apneas del sueño.',
  exp:'La clave del caso es la desproporción: una EPOC leve no produce por sí sola insuficiencia respiratoria ni poliglobulia, y la radiografía no aporta otra explicación. Cuando los hallazgos superan a la gravedad de la enfermedad conocida, hay que buscar una segunda enfermedad que se sume. La más probable es el síndrome de apneas-hipopneas del sueño, cuya coexistencia con la EPOC se conoce como síndrome overlap y produce hipoxemia nocturna mantenida, con poliglobulia secundaria e hipertensión pulmonar. La poligrafía respiratoria es la prueba inicial para confirmarlo, sencilla y ambulatoria.',
  no:{1:'El ecocardiograma valora las consecuencias, como la hipertensión pulmonar, pero no identifica la causa.',2:'La tomografía torácica no aporta si la radiografía es normal y no hay sospecha de enfermedad intersticial o vascular.',3:'La gammagrafía se orienta a la enfermedad tromboembólica crónica, menos probable en este contexto.',4:'La poliglobulia aquí es secundaria a la hipoxemia; el estudio medular no es el primer paso.'},
  trampa:'Se atribuye todo a la EPOC porque ya está diagnosticada. Si la gravedad del hallazgo no cuadra con la de la enfermedad, falta un diagnóstico.',
  dx:['Síndrome overlap EPOC-apnea del sueño','Poliglobulia secundaria','Hipertensión pulmonar'],
  obj:'Sospechar apneas del sueño ante hallazgos desproporcionados a la EPOC.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con el informe GOLD y guías sobre trastornos respiratorios del sueño.'
},
'MIR-2013-M137': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Gasometría',
  clave:'pH bajo con CO2 alto y bicarbonato normal: acidosis respiratoria pura y aguda.',
  exp:'La lectura por pasos resuelve el caso. El pH de 7,25 indica acidemia. La pCO2 de 60 mmHg está elevada, de modo que el responsable es el pulmón: acidosis respiratoria. El bicarbonato de 26 mEq/L y el exceso de bases de -1 son esencialmente normales, lo que significa que el riñón todavía no ha compensado: se trata de un cuadro *agudo*, porque la compensación renal tarda días en instaurarse. En la acidosis respiratoria crónica el bicarbonato estaría claramente elevado. Clínicamente todo encaja con una depresión respiratoria por opioides, dadas las pupilas puntiformes, y ese es el cuadro que hay que revertir con naloxona y soporte ventilatorio.',
  no:{0:'La insuficiencia respiratoria es global, no parcial: hay hipoxemia CON hipercapnia.',1:'El bicarbonato es normal y el exceso de bases también: no hay componente metabólico.',3:'El pH es ácido, no alcalino, y el cloro es normal.',4:'Los valores son perfectamente compatibles con sangre arterial; una gasometría venosa tendría otro perfil.'},
  trampa:'Se etiqueta de mixta por costumbre. Aquí el bicarbonato normal es precisamente lo que indica que el trastorno es puro y agudo.',
  dx:['Acidosis respiratoria aguda','Intoxicación por opioides','Acidosis mixta'],
  obj:'Leer la gasometría por pasos y distinguir agudo de crónico.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., equilibrio ácido-base.'
},
'MIR-2013-M138': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Derrame pleural tuberculoso',
  clave:'Exudado linfocitario con ADA de 64 y menos del 5% de células mesoteliales: tuberculosis pleural.',
  exp:'Los cocientes de proteínas y LDH cumplen los criterios de Light, de modo que es un exudado. A partir de ahí, tres datos apuntan a la tuberculosis: el predominio linfocitario sin atipias, la adenosina desaminasa elevada —por encima de 40 U/L el valor predictivo es alto en zonas de prevalencia media o alta— y la escasez de células mesoteliales, que es muy característica porque la inflamación granulomatosa las desplaza de la superficie pleural. La baciloscopia del líquido suele ser negativa, lo que no descarta el diagnóstico; la biopsia pleural con estudio histológico y cultivo tiene el mayor rendimiento cuando se necesita confirmación.',
  no:{0:'El empiema tendría aspecto purulento, pH bajo y predominio de polimorfonucleares.',1:'Los cocientes de Light lo clasifican como exudado, no como trasudado.',2:'El mesotelioma cursa con abundantes células mesoteliales y atipias, justo lo contrario.',4:'El derrame por infarto pulmonar suele ser hemático y de curso agudo, sin ADA elevada.'},
  trampa:'Se busca el bacilo en el líquido y, al no encontrarlo, se descarta la tuberculosis. La baciloscopia pleural es negativa en la mayoría de los casos.',
  dx:['Derrame pleural tuberculoso','Derrame neoplásico','Empiema'],
  obj:'Reconocer el perfil del derrame tuberculoso.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de la British Thoracic Society sobre enfermedad pleural.'
},
'MIR-2013-M139': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Hidrotórax hepático',
  clave:'Todos los cocientes por debajo del umbral: es un trasudado, y en un cirrótico con ascitis eso es un hidrotórax hepático.',
  exp:'El cociente de proteínas de 0,3 y el de LDH de 0,2 quedan claramente por debajo de los umbrales de Light, de modo que el líquido es un *trasudado*. En un paciente con cirrosis y ascitis, eso corresponde al hidrotórax hepático: el líquido ascítico pasa a la cavidad pleural a través de pequeños defectos diafragmáticos, habitualmente al lado derecho. No es una enfermedad pleural, sino una manifestación más de la hipertensión portal, y por eso el tratamiento es el de la hepatopatía: restricción de sodio, diuréticos y, en casos refractarios, valorar TIPS o trasplante. Ampliar el estudio o biopsiar la pleura sería buscar una enfermedad que el propio análisis ya ha descartado.',
  no:{0:'El estudio ampliado se justifica ante un exudado, no ante un trasudado ya caracterizado.',1:'La biopsia pleural se reserva para exudados sin diagnóstico.',2:'La videotoracoscopia es un procedimiento invasivo sin indicación en un trasudado típico.',3:'No hay datos de infección ni de derrame paraneumónico que justifiquen antibiótico.'},
  trampa:'Se estudia el derrame como si fuera un problema pleural. El análisis ya ha dicho que el problema está en el hígado.',
  dx:['Hidrotórax hepático','Derrame paraneumónico','Empiema pleural espontáneo bacteriano'],
  obj:'Reconocer el trasudado pleural del cirrótico y evitar estudios innecesarios.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías EASL sobre cirrosis descompensada.'
},
'MIR-2013-M142': {
  esp:'Medicina Interna', tema:'Oncología', sub:'Trombosis venosa profunda',
  clave:'Sospecha de trombosis en un paciente con cáncer: ecografía Doppler. El dímero D no sirve aquí.',
  exp:'El edema y el dolor de todo el miembro inferior desde la ingle en un paciente con neoplasia de páncreas en quimioterapia describen una trombosis venosa profunda iliofemoral, y el cáncer es uno de los factores de riesgo más potentes. La *ecografía Doppler con compresión* es la prueba de elección: no invasiva, disponible, sin radiación y con excelente rendimiento, lo que la hace la opción más coste-efectiva. El dímero D queda descartado como estrategia porque en el paciente oncológico está elevado de forma casi constante por la propia enfermedad y por la quimioterapia: su valor predictivo negativo se pierde justo donde haría falta.',
  no:{0:'El dímero D es inespecífico en el paciente oncológico y no confirma nada.',1:'La resonancia es útil en territorios de difícil acceso, como el pélvico, pero no es la primera prueba ni la más eficiente.',2:'La flebografía era el patrón antiguo, es invasiva y ha sido desplazada.',4:'La tomografía se emplea para la embolia pulmonar, no para confirmar la trombosis de la extremidad.'},
  trampa:'Se pide dímero D por rutina. Su utilidad depende de la probabilidad previa y del contexto: en el cáncer activo, sobra.',
  dx:['Trombosis venosa profunda iliofemoral','Linfedema','Celulitis'],
  obj:'Elegir la prueba de confirmación de la trombosis venosa profunda.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías del American College of Chest Physicians.'
},
'MIR-2013-M146': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Enfermedad de Parkinson',
  clave:'La hipotensión ortostática es disautonomía: uno de los síntomas no motores del Parkinson.',
  exp:'La enfermedad de Parkinson no se limita a la vía nigroestriada: la patología por alfa-sinucleína afecta también al sistema autónomo, al bulbo olfatorio y a estructuras del tronco. De ahí un conjunto de manifestaciones *no motoras* que con frecuencia deterioran más la calidad de vida que el propio temblor: disautonomía con hipotensión ortostática, estreñimiento y disfunción urinaria; hiposmia, que puede preceder años al diagnóstico; trastorno de conducta del sueño REM, otro marcador precoz; depresión, ansiedad, apatía y deterioro cognitivo; y dolor. Reconocerlas importa porque se tratan de forma específica y porque la hipotensión ortostática, además, se agrava con la propia levodopa.',
  no:{0:'La hipoglucemia no forma parte del espectro de la enfermedad.',2:'Las crisis de ausencia son un tipo de epilepsia generalizada, sin relación.',3:'La cefalea no es una manifestación característica.',4:'La polineuropatía motora no forma parte del cuadro, aunque se ha descrito neuropatía asociada a tratamientos prolongados con levodopa.'},
  trampa:'Se estudia el Parkinson solo por sus síntomas motores. Las manifestaciones no motoras son las que más pesan en la vida diaria del paciente.',
  dx:['Enfermedad de Parkinson','Atrofia multisistémica','Hipotensión ortostática por fármacos'],
  obj:'Reconocer las manifestaciones no motoras del Parkinson.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías MDS.'
},
'MIR-2013-M147': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Traumatismo craneoencefálico',
  clave:'Coma desde el impacto con lesiones puntiformes en cuerpo calloso y unión córtico-subcortical: lesión axonal difusa.',
  exp:'La lesión axonal difusa se produce por fuerzas de aceleración y desaceleración rotacional que cizallan los axones en las interfases entre tejidos de distinta densidad: precisamente el cuerpo calloso, la unión entre sustancia gris y blanca y el tronco encefálico. En la tomografía se ven como lesiones hemorrágicas puntiformes, muchas veces desproporcionadamente escasas para la gravedad clínica; la resonancia es mucho más sensible. Explica el coma profundo desde el momento del impacto, sin intervalo lúcido y sin una lesión ocupante que justifique cirugía, y su pronóstico funcional es malo.',
  no:{0:'El hematoma subdural agudo es una colección en semiluna con efecto masa, no lesiones puntiformes dispersas.',1:'La púrpura trombocitopénica no produce este patrón ni encaja con el antecedente traumático.',2:'La contusión hemorrágica es focal y se localiza típicamente en polos frontales y temporales.',4:'La encefalopatía hipóxico-isquémica muestra afectación difusa de la sustancia gris y otro contexto clínico.'},
  trampa:'Se busca una lesión quirúrgica que explique el coma. En la lesión axonal difusa no hay nada que evacuar: el daño está en los axones.',
  dx:['Lesión axonal difusa','Hematoma subdural','Contusión cerebral'],
  obj:'Reconocer la lesión axonal difusa por su localización característica.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con el ATLS y Harrison, 21.ª ed.'
},
'MIR-2013-M152': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Hemorragia intracerebral',
  clave:'Hematoma LOBAR en un anciano con deterioro cognitivo y presión bien controlada: angiopatía amiloide.',
  exp:'La localización del hematoma orienta la causa. La hemorragia *hipertensiva* se produce en estructuras profundas —putamen, tálamo, cerebelo, protuberancia— por rotura de las arterias perforantes. La hemorragia *lobar*, en la sustancia blanca subcortical de un anciano, apunta a la angiopatía amiloide cerebral, en la que el depósito de beta-amiloide en la pared de las arterias corticales y leptomeníngeas las hace friables. Dos datos del caso lo refuerzan: la hipertensión está bien controlada solo con dieta, y hay un deterioro cognitivo en estudio, porque esta angiopatía se asocia con frecuencia a la enfermedad de Alzheimer. Es además causa de hemorragias lobares recurrentes.',
  no:{0:'Las malformaciones arteriovenosas sangran sobre todo en pacientes jóvenes.',1:'La hipertensión produce hemorragias profundas, y además está bien controlada.',2:'La vasculitis del sistema nervioso es rara y cursa con cuadro subagudo y lesiones múltiples.',3:'El enunciado especifica que no hay captación de contraste, lo que aleja el tumor.'},
  trampa:'Se atribuye a la hipertensión toda hemorragia cerebral. La localización lobar en el anciano señala a la angiopatía amiloide.',
  dx:['Angiopatía amiloide cerebral','Hemorragia hipertensiva','Malformación arteriovenosa'],
  obj:'Deducir la causa de la hemorragia por su localización.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías AHA/ASA sobre hemorragia intracerebral.'
},
'MIR-2013-M158': {
  esp:'Pediatría', tema:'Traumatología', sub:'Epifisiolisis femoral proximal',
  clave:'Adolescente obeso con dolor inguinal, cojera, rotación externa y limitación de la flexión: epifisiolisis femoral proximal.',
  exp:'La epifisiolisis femoral proximal es el desplazamiento de la epífisis femoral sobre el cuello a través del cartílago de crecimiento, y es la patología de cadera más frecuente en el adolescente. Afecta típicamente a varones obesos en el pico de crecimiento, y la exploración es muy característica: la extremidad adopta una *rotación externa*, y al flexionar la cadera esta rota hacia afuera de forma obligada, con limitación de la flexión en rotación neutra. El dolor puede referirse a la rodilla, lo que despista y retrasa el diagnóstico. Se confirma con radiografía en proyección axial, y el tratamiento es quirúrgico y urgente para evitar la progresión del desplazamiento y la necrosis avascular.',
  no:{0:'La fractura de cuello femoral requiere un traumatismo, ausente aquí, y da impotencia funcional aguda.',2:'La enfermedad de Perthes es una necrosis avascular que afecta a niños más pequeños, entre 4 y 8 años.',3:'La enfermedad de Still es una artritis idiopática juvenil sistémica, con fiebre y exantema.',4:'La sinovitis transitoria afecta a niños pequeños, sigue a un cuadro viral y se resuelve en días.'},
  trampa:'El dolor referido a la rodilla hace que se explore la rodilla y no la cadera. En todo adolescente con dolor de rodilla hay que explorar la cadera.',
  dx:['Epifisiolisis femoral proximal','Enfermedad de Perthes','Sinovitis transitoria','Artritis séptica'],
  obj:'Reconocer la epifisiolisis femoral proximal en el adolescente.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Nelson, 22.ª ed., y manuales de ortopedia pediátrica.'
},
'MIR-2013-M159': {
  esp:'Cirugía', tema:'Traumatología', sub:'Fracturas del húmero',
  clave:'Fractura de la diáfisis humeral con mano caída: el nervio radial recorre el canal de torsión.',
  exp:'El nervio radial desciende por la cara posterior del húmero, en el canal de torsión o surco radial, íntimamente aplicado al hueso. Por eso las fracturas de la *diáfisis* humeral, sobre todo en el tercio medio y distal, lo lesionan con relativa frecuencia. La manifestación característica es la imposibilidad de extender la muñeca y los dedos —la llamada mano caída o mano péndula—, con pérdida de sensibilidad en el dorso de la primera comisura. La mayoría de estas lesiones son neurapraxias que se recuperan espontáneamente en semanas o meses, de modo que el manejo inicial suele ser conservador con férula y seguimiento.',
  no:{0:'La fractura de troquíter no lesiona el radial ni impide la extensión de la muñeca.',2:'La fractura supraintercondílea afecta con más frecuencia al nervio mediano o al cubital, y su clínica es distinta.',3:'La fractura del cuello anatómico se asocia a lesión del nervio axilar y a necrosis de la cabeza humeral, no a mano caída.',4:'La fractura de epitróclea se asocia al nervio cubital, cuya lesión produce garra cubital, no mano caída.'},
  trampa:'Se asocia cualquier fractura de húmero con el nervio radial. Lo que lo lesiona es la localización *diafisaria*, por su recorrido pegado al hueso.',
  dx:['Fractura diafisaria de húmero con lesión del radial','Fractura de cuello humeral','Lesión del plexo braquial'],
  obj:'Relacionar el nivel de la fractura humeral con el nervio lesionado.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Netter y manuales de traumatología.'
},
'MIR-2013-M160': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Estenosis de canal lumbar',
  clave:'Claudicación al caminar que obliga a pararse y mejora al inclinarse hacia adelante: estenosis de canal.',
  exp:'La estenosis del canal lumbar produce *claudicación neurógena*: dolor, pérdida de fuerza y parestesias en las piernas que aparecen al caminar y obligan a detenerse. Su rasgo distintivo es la postura: la flexión del tronco hacia adelante amplía el diámetro del canal y alivia los síntomas, de modo que el paciente camina cada vez más inclinado y tolera mejor subir cuestas o empujar un carro de la compra que caminar erguido. Eso la separa de la claudicación *vascular*, que depende exclusivamente de la distancia recorrida, mejora con el simple reposo de pie y cursa con pulsos disminuidos.',
  no:{0:'La fractura vertebral osteoporótica produce dolor axial agudo, sin claudicación progresiva.',1:'La hernia discal da un dolor radicular en un dermatoma concreto, no claudicación bilateral postural.',2:'La espondilodiscitis cursa con dolor inflamatorio, fiebre y elevación de reactantes.',4:'La escoliosis degenerativa produce deformidad y dolor mecánico, sin este patrón de claudicación.'},
  trampa:'Se confunde con la claudicación vascular. La pregunta que las separa es si mejora al inclinarse hacia adelante o solo con el reposo.',
  dx:['Estenosis de canal lumbar','Claudicación vascular','Hernia discal'],
  obj:'Diferenciar la claudicación neurógena de la vascular.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías sobre patología degenerativa lumbar.'
},
'MIR-2013-M161': {
  esp:'Cirugía', tema:'Traumatología', sub:'Tumores óseos',
  clave:'Lesión lítica, EXCÉNTRICA, EPIFISARIA y que insufla la cortical en un adulto joven: tumor de células gigantes.',
  exp:'La localización resuelve buena parte de los tumores óseos. El tumor de células gigantes es característicamente *epifisario* —crece hacia la superficie articular—, *excéntrico* dentro del hueso, lítico y con adelgazamiento e insuflación de la cortical, sin esclerosis marginal. Aparece en el adulto joven, entre los 20 y los 40 años, una vez cerrada la fisis, y su localización predilecta es alrededor de la rodilla: extremo distal del fémur y proximal de la tibia, como en este caso. Es histológicamente benigno pero localmente agresivo, con tendencia a la recidiva local.',
  no:{0:'El osteosarcoma es metafisario, agresivo, con reacción perióstica en rayos de sol y triángulo de Codman, y afecta a adolescentes.',2:'El encondroma se localiza en huesos tubulares de las manos y tiene calcificaciones condroides.',3:'El osteoma osteoide produce dolor nocturno que cede con antiinflamatorios y muestra un nidus con esclerosis alrededor.',4:'El condrosarcoma afecta a pacientes de mayor edad y se localiza en pelvis y huesos proximales.'},
  trampa:'Se elige el osteosarcoma por ser el tumor óseo maligno más conocido. La epífisis y la excentricidad apuntan al tumor de células gigantes.',
  dx:['Tumor de células gigantes','Osteosarcoma','Quiste óseo aneurismático','Condroblastoma'],
  obj:'Localizar los tumores óseos por su topografía y su edad de aparición.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con manuales de radiología musculoesquelética y ortopedia oncológica.'
},

/* ==================== PEDIATRÍA ==================== */
'MIR-2018-M224': {
  esp:'Pediatría', tema:'Pediatría general', sub:'Reanimación pediátrica',
  clave:'En el niño el paro suele ser por hipoxia y el ritmo, no desfibrilable: la adrenalina es el fármaco inicial.',
  exp:'A diferencia del adulto, en el niño la parada cardiorrespiratoria es casi siempre la consecuencia final de una hipoxia o de un shock progresivo, y el ritmo que se encuentra suele ser *no desfibrilable* —asistolia o actividad eléctrica sin pulso—. En esos ritmos la adrenalina se administra cuanto antes, en cuanto se dispone de un acceso vascular, y se repite cada 3 a 5 minutos, mientras se buscan y corrigen las causas reversibles. La vía intraósea es la alternativa de elección cuando la venosa no se consigue rápidamente, como aquí. Conviene precisar un matiz que la opción no recoge: en los ritmos *desfibrilables* la prioridad es la descarga y la adrenalina se administra después de la tercera, de modo que decir que es el fármaco inicial "en todas" las paradas es una simplificación; en el escenario descrito, sin embargo, es la respuesta correcta.',
  no:{1:'La atropina ya no forma parte del algoritmo de parada; se reserva para bradicardias de origen vagal con pulso.',2:'El bicarbonato no se administra de rutina: la acidosis se corrige ventilando y restaurando la perfusión.',3:'La amiodarona se usa en los ritmos desfibrilables refractarios, que son minoría en el niño.'},
  trampa:'Se traslada el algoritmo del adulto, donde la fibrilación ventricular es frecuente. En pediatría el origen suele ser respiratorio.',
  dx:['Parada cardiorrespiratoria pediátrica','Asistolia','Actividad eléctrica sin pulso'],
  obj:'Aplicar el algoritmo de reanimación pediátrica y el papel de la adrenalina.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías del European Resuscitation Council y de la AHA sobre soporte vital pediátrico.'
},
'MIR-2018-M56': {
  esp:'Pediatría', tema:'Inmunología', sub:'Inmunodeficiencias',
  clave:'Enfermedad diseminada por una micobacteria atenuada: falla el eje interleucina 12 - interferón gamma.',
  exp:'La BCG es una vacuna de bacilo *vivo atenuado*, y en un niño con inmunidad normal no produce enfermedad. Que provoque una tuberculosis diseminada indica un defecto en la defensa frente a patógenos intracelulares, que depende del eje entre el macrófago y el linfocito T: el macrófago produce interleucina 12, el linfocito responde con interferón gamma, y este activa al macrófago para destruir la micobacteria. Los defectos de los receptores del interferón gamma rompen ese circuito y producen la llamada susceptibilidad mendeliana a enfermedad micobacteriana, cuya manifestación típica es exactamente esta.',
  no:{0:'La agammaglobulinemia de Bruton es un defecto de linfocitos B: predispone a bacterias capsuladas, no a micobacterias.',1:'La inmunodeficiencia común variable también es humoral y debuta más tarde.',3:'El síndrome de Wiskott-Aldrich cursa con eccema, trombocitopenia con plaquetas pequeñas e infecciones, con otro patrón.'},
  trampa:'Se piensa en las inmunodeficiencias humorales, que son las más frecuentes. Las infecciones por gérmenes intracelulares señalan la inmunidad celular y el eje del interferón gamma.',
  dx:['Susceptibilidad mendeliana a enfermedad micobacteriana','Inmunodeficiencia combinada grave','VIH'],
  obj:'Relacionar el tipo de germen con la rama inmunitaria deficitaria.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Abbas, Inmunología Celular y Molecular, y Nelson, 22.ª ed.'
},
'MIR-2019-M139': {
  esp:'Pediatría', tema:'Traumatología', sub:'Fracturas infantiles',
  clave:'En el niño, el punto débil no es el hueso sino el cartílago de crecimiento: epifisiolisis distal del radio.',
  exp:'La caída sobre la mano en extensión con deformidad en *dorso de tenedor* corresponde en el adulto a una fractura de Colles. En el niño, en cambio, el cartílago de crecimiento es más frágil que el hueso y que los ligamentos, de modo que el trazo tiende a pasar por la fisis: la lesión equivalente es una epifisiolisis distal del radio, que se clasifica según Salter-Harris. Esa diferencia importa porque las lesiones que atraviesan la fisis pueden alterar el crecimiento y dejar deformidad residual, y por eso requieren reducción cuidadosa y seguimiento.',
  no:{0:'La fractura-luxación de Monteggia asocia fractura del cúbito proximal con luxación de la cabeza radial, y su clínica es en el codo.',1:'La fractura de la cabeza radial afecta al codo, no a la muñeca.',3:'La fractura en tallo verde del cúbito no produce la deformidad en dorso de tenedor característica de la lesión distal del radio.'},
  trampa:'Se aplica el diagnóstico del adulto. Ante el mismo mecanismo, el hueso inmaduro se rompe por donde es más débil: la fisis.',
  dx:['Epifisiolisis distal del radio','Fractura de Colles','Fractura en tallo verde'],
  obj:'Reconocer que en el niño la fisis es el punto débil.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con Nelson, 22.ª ed., y la clasificación de Salter-Harris.'
},
'MIR-2019-M76': {
  esp:'Pediatría', tema:'Nefrología', sub:'Hiperpotasemia',
  clave:'El calcio NO baja el potasio: estabiliza la membrana del miocardio para que no se produzca la arritmia.',
  exp:'El tratamiento de la hiperpotasemia con repercusión electrocardiográfica tiene tres pasos y conviene tener claro qué hace cada uno. El *gluconato cálcico* antagoniza el efecto del potasio sobre el potencial de membrana de la célula miocárdica: actúa en minutos, no modifica la cifra de potasio, y su función es evitar la fibrilación ventricular mientras el resto de medidas hace efecto. Después vienen la *redistribución* —insulina con glucosa, salbutamol nebulizado, bicarbonato si hay acidosis—, que mete el potasio en la célula pero es transitoria; y por último la *eliminación* con diuréticos, resinas o diálisis, que es lo único que reduce el potasio corporal total.',
  no:{0:'Esa es la acción de la insulina con glucosa o del salbutamol, no del calcio.',1:'El calcio no quela el potasio, y este no se elimina por vía hepática.',2:'Las resinas de intercambio y los quelantes actúan en el intestino; el calcio no cumple esa función.'},
  trampa:'Se administra calcio esperando que baje la cifra de potasio y se interpreta como fracaso cuando no lo hace. Su papel es proteger el corazón, no corregir el número.',
  dx:['Hiperpotasemia con cambios electrocardiográficos','Enfermedad renal crónica'],
  obj:'Comprender el papel de cada fármaco en la hiperpotasemia.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con las guías del European Resuscitation Council sobre emergencias metabólicas.'
},
'MIR-2019-M77': {
  esp:'Pediatría', tema:'Pediatría general', sub:'Bronquiolitis',
  clave:'Bronquiolitis típica y estable: el diagnóstico es clínico y no hacen falta pruebas.',
  exp:'La bronquiolitis es un diagnóstico *clínico*: lactante con dificultad respiratoria, sibilancias y roncus tras un catarro de vías altas, en temporada epidémica. En el paciente estable —como este, con saturación del 95% en aire ambiente, dificultad moderada y constantes aceptables— las guías desaconsejan las pruebas complementarias de rutina. La radiografía de tórax no cambia el manejo y sí aumenta la prescripción innecesaria de antibióticos al interpretar como condensación lo que son atelectasias; la analítica y los reactantes de fase aguda no discriminan bien y solo añaden dolor y coste. La conducta correcta es observar, vigilar el trabajo respiratorio, la hidratación y la alimentación.',
  no:{0:'La analítica no modifica el manejo de una bronquiolitis típica y estable.',1:'La radiografía se reserva para el deterioro inesperado, la sospecha de complicación o la duda diagnóstica.',2:'La gasometría arterial es dolorosa y no está indicada en un lactante estable con saturación del 95%.'},
  trampa:'Se piden pruebas para "confirmar". En la bronquiolitis típica el diagnóstico ya está hecho, y la radiografía suele llevar a dar antibióticos que no hacen falta.',
  dx:['Bronquiolitis aguda','Neumonía','Crisis asmática'],
  obj:'Evitar pruebas innecesarias en la bronquiolitis típica.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con la guía de la American Academy of Pediatrics sobre bronquiolitis.'
},
'MIR-2019-M80': {
  esp:'Pediatría', tema:'Endocrinología', sub:'Pubertad precoz',
  clave:'Vello púbico SIN aumento testicular ni aceleración del crecimiento: es adrenarquia, no pubertad.',
  exp:'Lo que define el inicio de la pubertad en el varón no es el vello sino el *aumento del volumen testicular* por encima de 4 mL, porque refleja la activación del eje hipotálamo-hipófiso-gonadal. En este niño los testículos no han crecido, el pene tampoco y no hay aceleración de la velocidad de crecimiento: el eje está quieto. El vello púbico procede por tanto de los andrógenos suprarrenales, cuya producción aumenta de forma fisiológica pero algo adelantada: es una *adrenarquia precoz*, benigna y que solo requiere seguimiento. La edad ósea apenas adelantada —un año— refuerza esa lectura.',
  no:{0:'La pubertad precoz central activaría el eje y produciría aumento testicular y aceleración del crecimiento.',1:'En la periférica habría signos de exceso androgénico marcado, con crecimiento del pene y aceleración de la talla, con testículos pequeños.',3:'Un tumor suprarrenal produciría virilización rápida, aceleración marcada del crecimiento y edad ósea muy adelantada.'},
  trampa:'Se equipara la aparición de vello con el inicio puberal. En el varón, el marcador es el volumen testicular.',
  dx:['Adrenarquia precoz','Pubertad precoz central','Hiperplasia suprarrenal no clásica'],
  obj:'Usar el volumen testicular para valorar el inicio puberal.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con Nelson, 22.ª ed., y guías de endocrinología pediátrica.'
},

/* ==================== PSIQUIATRÍA ==================== */
'MIR-2015-M175': {
  esp:'Medicina Familiar', tema:'Atención integral', sub:'Caídas en el anciano',
  clave:'De los cinco fármacos, el psicótropo es el más asociado a caídas: la paroxetina.',
  exp:'Los fármacos psicótropos —antidepresivos, benzodiacepinas, antipsicóticos e hipnóticos— son los que muestran la asociación más consistente con las caídas en el anciano, y los antidepresivos figuran entre los primeros de esa lista. La paroxetina añade dos agravantes: es el inhibidor selectivo de la recaptación de serotonina con mayor actividad *anticolinérgica*, lo que produce sedación y deterioro cognitivo, y puede causar hiponatremia por secreción inadecuada de hormona antidiurética, otra causa de inestabilidad. Por eso figura entre los fármacos potencialmente inapropiados en los criterios de Beers para el anciano. El enunciado además descarta la hipotensión ortostática al señalar que no hay cambios posturales de la presión, lo que resta peso a los antihipertensivos.',
  no:{0:'El alopurinol no produce sedación ni inestabilidad.',1:'La hidroclorotiazida puede causar hipotensión ortostática, pero el enunciado especifica que no la hay.',2:'El lisinopril tampoco, por la misma razón.'},
  trampa:'Se busca el fármaco que baja la presión. El enunciado ya descartó la hipotensión postural a propósito, para que se piense en el psicótropo.',
  dx:['Caídas de repetición','Polifarmacia','Hiponatremia por ISRS'],
  obj:'Identificar los fármacos que más contribuyen a las caídas.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con los criterios de Beers y guías sobre prevención de caídas.'
},
'MIR-2016-M184': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Esquizofrenia',
  clave:'Síntomas negativos progresivos SIN haber tenido nunca delirios ni alucinaciones: esquizofrenia simple.',
  exp:'La esquizofrenia simple es una forma poco frecuente y de diagnóstico difícil, caracterizada por un desarrollo insidioso y progresivo de síntomas *negativos* —empobrecimiento afectivo, abulia, aislamiento, comportamiento extravagante y deterioro del rendimiento— sin que hayan existido nunca síntomas psicóticos positivos claros. Eso es lo que la separa de las demás formas: en la esquizofrenia *residual* los síntomas negativos también dominan, pero han estado precedidos por al menos un episodio psicótico previo, y ese antecedente es justamente lo que el enunciado niega.',
  no:{0:'La residual exige un episodio psicótico previo, que aquí no ha existido.',1:'La paranoide se define por delirios y alucinaciones, explícitamente ausentes.',3:'La hebefrénica cursa con desorganización marcada del pensamiento y afecto inapropiado, y suele presentar síntomas psicóticos.'},
  trampa:'Se elige la residual porque comparte el predominio de síntomas negativos. La diferencia está en si hubo o no psicosis antes.',
  dx:['Esquizofrenia simple','Esquizofrenia residual','Trastorno esquizotípico','Depresión'],
  obj:'Diferenciar las formas de esquizofrenia por la presencia previa de psicosis.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con la CIE-10 y el DSM-5-TR.'
},
'MIR-2016-M185': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Intoxicación por litio',
  clave:'Litemia de 4,1 con neurotoxicidad: hemodiálisis. El litio se dializa muy bien.',
  exp:'El litio tiene un margen terapéutico estrecho y su toxicidad se manifiesta de forma progresiva: temblor grosero, ataxia, disartria, nistagmo, confusión y, en fases avanzadas, convulsiones y coma. Con litemias por encima de 4 mEq/L, o por encima de 2,5 con clínica neurológica grave o insuficiencia renal, la *hemodiálisis* es el tratamiento de elección: el litio es una molécula pequeña, no se une a proteínas y tiene un volumen de distribución bajo, características que lo hacen extraordinariamente dializable. No existe antídoto. La hidratación con suero salino acompaña siempre, pero por sí sola es insuficiente en una intoxicación grave.',
  no:{0:'La hidratación forma parte del tratamiento pero no basta con esta litemia y esta clínica.',2:'El lavado gástrico tiene un papel muy limitado, y el carbón activado no adsorbe el litio.',3:'La aminofilina no tiene indicación en esta intoxicación.'},
  trampa:'Se busca un antídoto que no existe. En el litio, la vía de salida es la depuración extrarrenal.',
  dx:['Intoxicación aguda por litio','Síndrome serotoninérgico','Encefalopatía'],
  obj:'Indicar la hemodiálisis en la intoxicación grave por litio.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Goldfrank, Toxicologic Emergencies, y recomendaciones EXTRIP.'
},
'MIR-2016-M190': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Diagnóstico diferencial afectivo',
  clave:'Se pide lo POCO probable. Los cambios de humor de minutos y reactivos al estímulo no son bipolaridad.',
  exp:'El trastorno bipolar exige episodios de duración *sostenida*: al menos una semana para la manía y cuatro días para la hipomanía, con un cambio persistente del funcionamiento. Lo que este paciente describe es una labilidad afectiva de minutos, condicionada por el nivel de estímulo o gratificación del momento, que corresponde a una desregulación emocional y no a episodios afectivos. El resto del cuadro sí es coherente: la desatención, los descuidos, la desorganización y los cambios frecuentes de empleo desde siempre apuntan a un trastorno por déficit de atención del adulto; el consumo de alcohol y el juego descontrolado son comorbilidades muy frecuentes en ese trastorno; y el empeoramiento reciente por dificultades laborales y familiares encaja con un componente adaptativo.',
  no:{0:'El trastorno adaptativo es plausible: hay un estresor reciente identificable y un empeoramiento en los últimos meses.',1:'El déficit de atención del adulto es muy plausible, con síntomas presentes desde siempre y deterioro funcional.',3:'El abuso de alcohol está explícitamente descrito y en aumento.'},
  trampa:'La expresión "de muy eufórico a muy triste" hace pensar en bipolaridad. Lo que define la bipolaridad es la *duración* de los episodios, no la rapidez de los cambios.',
  dx:['TDAH del adulto','Trastorno bipolar','Trastorno adaptativo','Trastorno límite de la personalidad'],
  obj:'Usar la duración de los episodios para descartar bipolaridad.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con el DSM-5-TR.'
},

/* ==================== SALUD PÚBLICA ==================== */
'MIR-2015-M171': {
  esp:'Salud Pública', tema:'Atención primaria', sub:'Atributos de la atención primaria',
  clave:'Integral es abordar a la persona entera: física, psíquica y social.',
  exp:'Los atributos de la atención primaria tienen nombres parecidos y conviene separarlos con precisión. *Integral* significa atender a la persona en sus tres dimensiones —biológica, psicológica y social—, es decir, considerar al paciente completo y no solo el órgano enfermo. *Integrada* es la interrelación de promoción, prevención, curación, rehabilitación y reinserción, es decir, todas las actividades a lo largo del proceso de salud y enfermedad. *Continuada* o longitudinal se refiere al seguimiento a lo largo de toda la vida de la persona. Y *accesible* alude a la facilidad para entrar en contacto con el sistema.',
  no:{0:'Esa es la definición de atención integrada.',1:'Esa es la continuidad o longitudinalidad.',3:'Esa describe la accesibilidad y la coordinación de las modalidades de atención.'},
  trampa:'Integral e integrada se usan como sinónimos en el lenguaje corriente, pero en atención primaria designan atributos distintos.',
  dx:[],
  obj:'Distinguir los atributos de la atención primaria.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la Declaración de Alma-Ata y Starfield, Atención Primaria.'
},
'MIR-2015-M182': {
  esp:'Bioética', tema:'Bioética', sub:'Comunicación del error',
  clave:'Se reconoce el error, se explica, se pide disculpas y se corrige. El carácter del paciente no cambia nada.',
  exp:'La respuesta correcta es la única que cumple los cuatro elementos de la comunicación honesta de un evento adverso: explicar qué ha ocurrido y por qué —el exantema es una reacción a la amoxicilina, que pertenece a la familia de las penicilinas—, reconocer el propio error de no haber advertido la alergia registrada en la historia, pedir disculpas, y corregir con un plan concreto y un seguimiento. La transparencia ante el error no es solo una obligación ética: mejora la relación clínica, reduce la conflictividad y es la base de los sistemas de seguridad del paciente, que necesitan que los errores se declaren para poder prevenirlos.',
  no:{0:'Ocultar la causa y limitarse a cambiar el antibiótico es engañar al paciente y, además, deja sin registrar una alergia relevante.',1:'La explicación es cierta en cuanto al valor del antibiótico en la bronquitis, pero omite deliberadamente la causa real del exantema.',2:'Presentar la amoxicilina como algo distinto de la penicilina es incorrecto —es una penicilina— y disfraza el error tras una imprecisión técnica.'},
  trampa:'El enunciado insiste en el mal carácter del paciente para tentar a ocultar el error. La conducta correcta no depende de lo agradable que sea el paciente.',
  dx:['Exantema por betalactámicos','Alergia a penicilina'],
  obj:'Comunicar un error clínico de forma honesta y completa.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con códigos deontológicos y guías de seguridad del paciente.'
},
'MIR-2018-M202': {
  esp:'Cirugía', tema:'Traumatología', sub:'Metástasis óseas',
  clave:'Lesión lítica que ocupa más de dos tercios de la cortical: riesgo alto de fractura patológica. Se fija antes de que se rompa.',
  exp:'En las metástasis óseas de huesos largos, el riesgo de fractura patológica se estima con criterios como la escala de Mirels, que valora la localización, el tipo de lesión, el dolor y sobre todo el tamaño respecto al diámetro del hueso. Una lesión lítica que ocupa más de dos tercios de la cortical en la región peritrocantérica —zona sometida a cargas muy elevadas— tiene un riesgo alto, y en un paciente con esperanza de vida superior a las seis semanas y calidad aceptable, la conducta es la *fijación profiláctica* con clavo endomedular. La razón es práctica: fijar antes de la fractura es técnicamente más sencillo, la recuperación funcional es mejor y evita el dolor y la inmovilidad que seguirían a una fractura consumada. La radioterapia se administra después, para el control local.',
  no:{0:'La radioterapia controla el dolor y la enfermedad local, pero no previene la fractura a corto plazo ni aporta estabilidad.',1:'La descarga con muletas no es realista de forma indefinida ni protege una lesión de este tamaño.',3:'Ni la quimioterapia ni la radioterapia urgentes estabilizan mecánicamente el hueso.'},
  trampa:'Se espera a que se produzca la fractura para operar. Fijar antes es más sencillo, más seguro y mejor para el paciente.',
  dx:['Metástasis ósea con riesgo de fractura','Fractura patológica'],
  obj:'Indicar la fijación profiláctica en la metástasis ósea de riesgo.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con la escala de Mirels y guías de oncología ortopédica.'
}

});
