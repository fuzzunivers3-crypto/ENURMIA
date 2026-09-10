/* ============================================================
   EXPLICACIONES — lote 06  (40 casos clínicos)
   Años 2013 y 2014. MIR 2017 excluido por cuarentena.

   Se leyó cada caso y se contrastó la respuesta oficial con la
   bibliografía: las 40 resultaron correctas. Ninguna sospechosa.

   Varias preguntas venían mal clasificadas por el importador
   automático (que reparte por palabras clave). Aquí se corrige
   también la especialidad y el tema, porque el overlay puede
   sobrescribir cualquier campo.
   ============================================================ */
window.EXPLICACIONES = Object.assign(window.EXPLICACIONES || {}, {

/* ==================== ONCOLOGÍA Y TUMORES ==================== */
'MIR-2013-M130': {
  esp:'Cirugía', tema:'Urología', sub:'Tumores testiculares',
  clave:'Nódulo testicular duro, metástasis pulmonares en suelta de globos y beta-hCG de 30.000: coriocarcinoma.',
  exp:'La cifra de beta-hCG es la que decide. El seminoma puede elevarla ligeramente, por células sincitiotrofoblásticas aisladas, pero nunca alcanza decenas de miles: valores tan altos corresponden a un tumor germinal NO seminomatoso con componente de coriocarcinoma, que es el más agresivo y el que disemina por vía hematógena de forma precoz, dando esas metástasis pulmonares redondeadas y múltiples conocidas como suelta de globos. En todo varón joven con masa pulmonar o retroperitoneal de origen incierto hay que palpar los testículos y pedir marcadores: alfafetoproteína, beta-hCG y LDH.',
  no:{0:'El seminoma no eleva la alfafetoproteína y solo sube discretamente la beta-hCG; 30.000 es incompatible.',1:'El angiomiolipoma renal es benigno, no produce beta-hCG ni metastatiza.',2:'El tumor de Wilms es una neoplasia de la infancia, no del adulto joven.',4:'El linfoma no Hodgkin no eleva la beta-hCG y su patrón radiológico es distinto.'},
  trampa:'Se piensa primero en el tumor testicular más frecuente —el seminoma— sin mirar el marcador. La beta-hCG masiva lo descarta y señala el coriocarcinoma.',
  dx:['Coriocarcinoma testicular','Seminoma','Tumor germinal no seminomatoso mixto','Linfoma'],
  obj:'Usar los marcadores tumorales para separar seminoma de no seminoma.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías EAU sobre cáncer de testículo y Harrison, 21.ª ed.'
},
'MIR-2013-M41': {
  esp:'Ciencias Básicas', tema:'Anatomía patológica', sub:'Tumores del sistema nervioso',
  clave:'Fibras de Rosenthal en una masa quística de cerebelo en un joven: astrocitoma pilocítico.',
  exp:'Las fibras de Rosenthal son acúmulos eosinófilos alargados y son el rasgo histológico característico del astrocitoma pilocítico, junto con las células de prolongaciones largas y finas —"piloides", de ahí el nombre— y el patrón bifásico con áreas fasciculares compactas y áreas microquísticas laxas. Es el tumor cerebral más frecuente de la infancia y la adolescencia, se localiza sobre todo en el cerebelo, corresponde a un grado I de la OMS y tiene excelente pronóstico: la resección completa suele ser curativa.',
  no:{1:'El xantoastrocitoma pleomórfico es superficial y temporal, con células xantomatosas y depósito de reticulina.',2:'El neurocitoma central se localiza en los ventrículos laterales y es de estirpe neuronal.',3:'El liponeurocitoma cerebeloso muestra diferenciación lipomatosa, ausente aquí.',4:'La enfermedad por priones no produce masas: da espongiosis, sin tumor.'},
  trampa:'Se intenta adivinar por la localización sin usar la histología. En estas preguntas, el dato patognomónico —las fibras de Rosenthal— resuelve el caso por sí solo.',
  dx:['Astrocitoma pilocítico','Meduloblastoma','Hemangioblastoma','Ependimoma'],
  obj:'Reconocer el astrocitoma pilocítico por su histología y su pronóstico.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con la clasificación de tumores del SNC de la OMS y Robbins, Patología Estructural y Funcional.'
},

/* ==================== ANESTESIA Y QUIRÓFANO ==================== */
'MIR-2014-M130': {
  esp:'Cirugía', tema:'Anestesiología', sub:'Complicaciones de la laparoscopia',
  clave:'Sube el CO2 espirado pero NO cambian ni la saturación ni las presiones de ventilación: el CO2 se está absorbiendo desde el tejido subcutáneo.',
  exp:'En la laparoscopia se insufla dióxido de carbono, que se absorbe por el peritoneo y eleva algo el CO2 espirado de forma esperable. Cuando el ascenso es marcado y tardío, con saturación y presiones de la vía aérea normales, lo más probable es que el gas esté disecando el tejido celular subcutáneo: hay más superficie de absorción y por tanto más CO2, pero el pulmón sigue funcionando igual. Por eso la conducta es explorar al paciente buscando crepitación subcutánea y bajar la presión de insuflación o suspender el neumoperitoneo.',
  no:{1:'El capnotórax comprimiría el pulmón: caería la saturación y subirían las presiones de ventilación.',2:'Un ascenso leve es normal, pero uno significativo y tardío obliga a buscar la causa, no solo a hiperventilar.',3:'La intubación endobronquial elevaría las presiones de la vía aérea y afectaría a la oxigenación.',4:'El embolismo pulmonar masivo DISMINUYE el CO2 espirado, porque hay ventilación sin perfusión: lo contrario de lo descrito.'},
  trampa:'Se piensa en el embolismo gaseoso, que es la complicación más temida. Pero el embolismo baja el CO2 espirado; aquí sube, y eso apunta a absorción, no a obstrucción.',
  dx:['Enfisema subcutáneo por CO2','Capnotórax','Embolismo gaseoso','Intubación selectiva'],
  obj:'Interpretar el capnograma intraoperatorio y localizar la causa del ascenso de CO2.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Miller, Anestesia, y guías de cirugía laparoscópica.'
},

/* ==================== HEMATOLOGÍA ==================== */
'MIR-2014-M219': {
  esp:'Pediatría', tema:'Hematología', sub:'Linfohistiocitosis hemofagocítica',
  clave:'Defecto de degranulación con CD107a alterado: es una forma FAMILIAR, y esas se curan con trasplante.',
  exp:'La linfohistiocitosis hemofagocítica se debe a una activación descontrolada de linfocitos T y macrófagos. Cuando aparece en un lactante y se demuestra un defecto de la citotoxicidad —la expresión de CD107a mide la degranulación—, se trata de una forma genética primaria, que no se resuelve sola y recae siempre. El tratamiento tiene dos tiempos: primero controlar la tormenta inflamatoria con inmunosupresión y quimioterapia según protocolo, y en paralelo tipificar el HLA y buscar donante, porque el único tratamiento curativo es el trasplante de progenitores hematopoyéticos.',
  no:{1:'Un anticuerpo anti-CD25 en monoterapia no controla el cuadro ni sustituye al trasplante.',2:'Retirar la inmunosupresión deja avanzar una enfermedad con mortalidad muy alta sin tratamiento.',3:'El antibiótico trata un desencadenante infeccioso si lo hay, pero no la enfermedad de base.',4:'Las gammaglobulinas son coadyuvantes; no curan la forma familiar.'},
  trampa:'Se trata solo el brote y no se busca donante. En la forma familiar, cada semana perdida es una recaída más cerca.',
  dx:['Linfohistiocitosis hemofagocítica familiar','Forma secundaria a infección','Sepsis','Leucemia'],
  obj:'Distinguir la forma familiar de la secundaria y conocer su tratamiento curativo.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con los protocolos HLH de la Histiocyte Society y Nelson, 22.ª ed.'
},
'MIR-2013-M108': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Trombocitopenia inmune',
  clave:'Trombocitopenia AISLADA tras un cuadro viral, sin esquistocitos y con el resto normal: púrpura trombocitopénica inmune.',
  exp:'El hemograma muestra plaquetas de 7.000 con hemoglobina, leucocitos y fórmula normales, frotis sin esquistocitos ni agregados, y bioquímica normal: es una trombocitopenia aislada, y en una joven tras un cuadro viral eso define la púrpura trombocitopénica inmune. El tratamiento inicial son los corticoides —prednisona 1 mg/kg/día—, con inmunoglobulinas intravenosas cuando se necesita un ascenso rápido. Las plaquetas solo se transfunden ante hemorragia grave, porque los anticuerpos destruyen también las transfundidas.',
  no:{0:'La transfusión de plaquetas no está indicada sin sangrado grave: se destruyen igual que las propias.',1:'El rituximab es una opción de segunda línea, no el tratamiento inicial.',2:'La ciclofosfamida se reserva para casos refractarios.',3:'La plasmaféresis es el tratamiento de la púrpura trombótica trombocitopénica, que aquí está descartada por la ausencia de esquistocitos y de hemólisis.'},
  trampa:'Se transfunden plaquetas por lo alarmante de la cifra. En la púrpura inmune eso no sube el recuento y retrasa el tratamiento que sí funciona.',
  dx:['Púrpura trombocitopénica inmune','Púrpura trombótica trombocitopénica','Leucemia aguda','Pseudotrombocitopenia'],
  obj:'Reconocer la trombocitopenia aislada y su tratamiento de primera línea.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de la American Society of Hematology sobre trombocitopenia inmune.'
},
'MIR-2013-M107': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Mieloma múltiple',
  clave:'Fractura patológica, anemia, brecha entre proteínas totales y albúmina, beta-2 microglobulina alta y creatinina elevada: mieloma.',
  exp:'Las proteínas totales de 11 g/dL con albúmina de 2 revelan una enorme cantidad de globulinas: es el componente monoclonal. Junto con la anemia, la lesión ósea y la insuficiencia renal, completa el cuadro clásico del mieloma múltiple —el acrónimo CRAB: calcio, renal, anemia, bone—. El diagnóstico exige demostrar dos cosas: la proteína monoclonal, con electroforesis e inmunofijación en suero y en orina, y la infiltración de la médula por células plasmáticas, con aspirado o biopsia. La beta-2 microglobulina no diagnostica: estadifica y da pronóstico.',
  no:{0:'La serie ósea documenta las lesiones pero no demuestra la proteína monoclonal.',1:'La electroforesis sin médula deja sin confirmar la infiltración plasmocitaria.',2:'El calcio aporta datos de la enfermedad, no el diagnóstico de la clonalidad.',4:'La biopsia del hueso fracturado es innecesaria y no sustituye al estudio medular.'},
  trampa:'Se olvida la brecha entre proteínas totales y albúmina. Ese cálculo mental, hecho en dos segundos, es lo que orienta a mieloma antes que cualquier otra prueba.',
  dx:['Mieloma múltiple','Metástasis óseas','Amiloidosis','Gammapatía monoclonal de significado incierto'],
  obj:'Ordenar las pruebas que confirman el mieloma múltiple.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con los criterios del International Myeloma Working Group.'
},
'MIR-2013-M105': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Mieloma de cadenas ligeras',
  clave:'HIPOgammaglobulinemia en suero con cadenas ligeras kappa en orina: mieloma de cadenas ligeras.',
  exp:'Lo llamativo del caso es que las inmunoglobulinas séricas están BAJAS, no altas. En el mieloma de cadenas ligeras el clon plasmocitario produce solo cadenas ligeras, que por su bajo peso molecular se filtran y se eliminan por la orina en lugar de acumularse en el suero: por eso no hay pico monoclonal sérico y sí proteinuria de Bence Jones, mientras las inmunoglobulinas normales quedan suprimidas por el clon. Esas cadenas dañan el túbulo y forman cilindros, lo que explica la insuficiencia renal, que aquí es la manifestación dominante.',
  no:{0:'La enfermedad por depósito de cadenas ligeras es una complicación posible, pero el diagnóstico de base sigue siendo el mieloma.',1:'El síndrome nefrótico es un síndrome, no una etiología, y no explica la hipogammaglobulinemia.',2:'La amiloidosis requiere demostración histológica con rojo Congo.',3:'Un mieloma IgA daría un pico monoclonal sérico, no hipogammaglobulinemia global.'},
  trampa:'Se busca el pico monoclonal en suero y, al no encontrarlo, se descarta el mieloma. En el de cadenas ligeras el suero puede estar "vacío": hay que mirar la orina.',
  dx:['Mieloma de cadenas ligeras','Mieloma IgG o IgA','Amiloidosis AL','Nefropatía por cilindros'],
  obj:'Reconocer el mieloma de cadenas ligeras por su perfil proteico paradójico.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., discrasias de células plasmáticas.'
},
'MIR-2013-M106': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Microangiopatía trombótica',
  clave:'Esquistocitos, trombopenia, LDH altísima y coagulación NORMAL: púrpura trombótica trombocitopénica.',
  exp:'La combinación de anemia hemolítica con esquistocitos, trombocitopenia, LDH muy elevada y reticulocitos altos define una microangiopatía trombótica. Lo que la separa de la coagulación intravascular diseminada es que aquí los tiempos de coagulación y el fibrinógeno son normales: en la púrpura trombótica trombocitopénica las plaquetas se consumen formando trombos de von Willebrand, sin activar la cascada. El déficit de ADAMTS13 —congénito o, más a menudo, adquirido por anticuerpos— es el mecanismo, y la ticlopidina es un desencadenante farmacológico clásico. El tratamiento es la plasmaféresis urgente, y las plaquetas están contraindicadas salvo hemorragia vital.',
  no:{0:'La púrpura autoinmune no produce hemólisis, esquistocitos ni elevación de LDH.',2:'La aplasia medular cursa con pancitopenia arregenerativa, con reticulocitos bajos.',3:'La trombocitopenia por fármacos es aislada y no da microangiopatía.',4:'La coagulación intravascular diseminada alteraría los tiempos y consumiría el fibrinógeno.'},
  trampa:'Se transfunden plaquetas ante el sangrado. En esta enfermedad son combustible para más trombos y pueden empeorar el cuadro.',
  dx:['Púrpura trombótica trombocitopénica','Síndrome hemolítico urémico','CID','Púrpura inmune'],
  obj:'Diferenciar la microangiopatía trombótica de la CID por el estudio de coagulación.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías ISTH sobre púrpura trombótica trombocitopénica.'
},
'MIR-2013-M103': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Aplasia medular',
  clave:'Aplasia grave en un paciente de 71 años: inmunosupresión, no trasplante.',
  exp:'En la aplasia medular grave el tratamiento depende sobre todo de la edad y de la disponibilidad de donante. En el paciente joven con hermano HLA idéntico se prefiere el trasplante alogénico; por encima de los 40-50 años, y desde luego a los 71, el trasplante tiene una mortalidad inaceptable y el tratamiento de elección es la inmunosupresión con globulina antitimocítica más ciclosporina, a la que hoy se añade eltrombopag. El soporte transfusional acompaña siempre, pero no modifica la enfermedad.',
  no:{0:'Los corticoides en monoterapia no son eficaces en la aplasia grave.',1:'El trasplante alogénico no es la opción a los 71 años, por su mortalidad.',3:'El soporte hemoterápico es imprescindible pero no es el abordaje fundamental.',4:'La aplasia no es una neoplasia: la quimioterapia y el trasplante autólogo no tienen sentido aquí.'},
  trampa:'Se elige el trasplante por ser el tratamiento "más definitivo". La edad del paciente es el dato que decide, y en la pregunta está puesto a propósito.',
  dx:['Aplasia medular grave','Síndrome mielodisplásico','Hemoglobinuria paroxística nocturna','Leucemia aguda'],
  obj:'Elegir el tratamiento de la aplasia medular según la edad y el donante.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de la British Society for Haematology sobre aplasia medular.'
},

/* ==================== INFECCIOSAS ==================== */
'MIR-2014-M232': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Micosis invasivas',
  clave:'Neutropenia profunda con dolor ocular, edema periorbitario y secreción nasal SEROSANGUINOLENTA: mucormicosis rino-orbitaria.',
  exp:'La mucormicosis es angioinvasiva: los hongos del orden Mucorales invaden los vasos, producen trombosis y necrosis, y por eso la secreción es sanguinolenta y aparecen escaras negras en cornetes o paladar. Progresa en horas o días desde la nariz hacia la órbita y el cerebro, en pacientes con neutropenia profunda, cetoacidosis diabética o sobrecarga de hierro. Es una urgencia: requiere anfotericina B liposomal y desbridamiento quirúrgico precoz, además de corregir el factor predisponente. La aspergilosis invasiva es el diferencial principal y también da sinusitis en el neutropénico, pero no responde a la anfotericina de la misma manera y su tratamiento de elección es distinto, de ahí que distinguirlas importe.',
  no:{0:'Un hematoma no produce fiebre ni secreción nasal, y no progresa así.',1:'Una reacción alérgica no explica la afectación orbitaria unilateral con secreción sanguinolenta.',2:'La sinusitis bacteriana no es tan agresiva ni cursa con este patrón necrosante en el neutropénico.',3:'La aspergilosis es el diferencial más serio, pero la secreción serosanguinolenta con invasión orbitaria rápida orienta antes a mucormicosis.'},
  trampa:'Se pierde tiempo esperando cultivos. En la mucormicosis, cada hora cuenta: el diagnóstico es clínico y el tratamiento se inicia sobre la sospecha.',
  dx:['Mucormicosis rino-orbitaria','Aspergilosis invasiva','Celulitis orbitaria bacteriana','Trombosis del seno cavernoso'],
  obj:'Reconocer la mucormicosis en el paciente inmunodeprimido.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las guías ECMM/ESCMID sobre mucormicosis.'
},
'MIR-2013-M111': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Aspergilosis invasiva',
  clave:'Signo del halo y menisco semilunar en un neutropénico: aspergilosis invasiva. Tratamiento, voriconazol.',
  exp:'El signo del halo —un nódulo rodeado de vidrio deslustrado, que corresponde a la hemorragia alrededor de la lesión angioinvasiva— y, más tarde, el signo del menisco o media luna aérea al cavitarse, son los hallazgos radiológicos característicos de la aspergilosis pulmonar invasiva en el paciente neutropénico. El tratamiento de elección es el voriconazol, superior a la anfotericina B en supervivencia; hoy el isavuconazol es una alternativa. La caspofungina es de rescate o combinación, no de primera línea en monoterapia.',
  no:{0:'El ganciclovir trata el citomegalovirus, que no produce este patrón nodular con halo.',1:'La caspofungina no es de primera línea en monoterapia para la aspergilosis invasiva.',2:'El fluconazol NO cubre Aspergillus: solo levaduras.',3:'La piperacilina-tazobactam es un antibacteriano; el paciente ya lleva cefepime y no mejora.'},
  trampa:'Se añade otro antibacteriano ante la falta de respuesta. En el neutropénico con fiebre persistente e infiltrado con halo, lo que falta es cobertura antifúngica de mohos.',
  dx:['Aspergilosis pulmonar invasiva','Mucormicosis pulmonar','Neumonía bacteriana','Infarto pulmonar'],
  obj:'Reconocer los signos radiológicos de la aspergilosis invasiva y su tratamiento.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías IDSA sobre aspergilosis.'
},
'MIR-2013-M112': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Arbovirosis',
  clave:'Viajero con fiebre alta, exantema que se hace petequial, LEUCOPENIA y TROMBOPENIA, con malaria negativa: dengue.',
  exp:'La tríada de leucopenia, trombocitopenia y elevación leve de transaminasas en un viajero febril con exantema es el perfil analítico del dengue. La malaria queda razonablemente descartada con gota gruesa, frotis, antígeno y PCR negativos, aunque ante duda persistente se repite la gota gruesa. El paso siguiente y decisivo es vigilar la defervescencia: la fase crítica del dengue comienza cuando cae la fiebre, y es entonces cuando aparecen la extravasación plasmática y los signos de alarma. En República Dominicana el dengue es endémico y esta pregunta describe exactamente lo que se ve en urgencias.',
  no:{0:'Los coronavirus estacionales no producen este perfil hematológico ni el exantema petequial.',1:'La coriomeningitis linfocitaria es rara y cursa con meningitis aséptica.',3:'El chikungunya comparte zona y vector, pero domina la artralgia intensa e incapacitante y la trombopenia es menos marcada.',4:'La encefalitis de Saint Louis cursa con afectación neurológica, ausente en el caso.'},
  trampa:'Se da el alta cuando baja la fiebre. En el dengue ese es justo el momento de mayor riesgo: empieza la fase crítica.',
  dx:['Dengue','Chikungunya','Malaria','Fiebre tifoidea'],
  obj:'Reconocer el perfil del dengue en el paciente febril procedente de zona endémica.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías OPS/OMS sobre dengue y el protocolo nacional dominicano.'
},
'MIR-2013-M113': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Leishmaniasis visceral',
  clave:'VIH con fiebre prolongada, ESPLENOMEGALIA marcada, pancitopenia e hipergammaglobulinemia POLICLONAL: leishmaniasis visceral.',
  exp:'La combinación de fiebre de semanas, esplenomegalia grande, pancitopenia e hipergammaglobulinemia policlonal en un paciente inmunodeprimido es el cuadro clásico del kala-azar. El corticoide que ha recibido durante meses actúa como factor facilitador. El diagnóstico se confirma visualizando los amastigotes en el aspirado o la biopsia de médula ósea, que además permite descartar las otras causas de pancitopenia. La LDH normal y la ausencia de adenopatías restan peso al linfoma, que sería el otro gran diferencial.',
  no:{1:'Una cirrosis no explica la fiebre de 15 días ni la hipergammaglobulinemia policlonal de este grado, y cerrar el caso sin estudiar sería un error.',2:'La prednisona no produce pancitopenia con esplenomegalia; de hecho suele elevar los leucocitos.',3:'El lupus no encaja con este perfil ni justificaría la esplenomegalia de 14 cm en este contexto.',4:'Con CD4 de 350 y carga viral baja, el VIH por sí solo no explica el cuadro.'},
  trampa:'Se atribuye todo al VIH sin estudiar. Con CD4 conservados y carga viral controlada, hay que buscar otra causa: la respuesta está en la médula.',
  dx:['Leishmaniasis visceral','Linfoma','Tuberculosis diseminada','Histoplasmosis'],
  obj:'Sospechar leishmaniasis visceral ante fiebre, esplenomegalia y pancitopenia.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías OMS sobre leishmaniasis y OPS.'
},
'MIR-2013-M110': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Sífilis',
  clave:'Úlcera indolora autolimitada hace 2 meses con serologías positivas: sífilis precoz, una sola dosis de penicilina benzatina.',
  exp:'La úlcera genital indolora con adenopatías bilaterales que curó sola es el chancro sifilítico, y las serologías confirman la infección: el RPR alto indica actividad y el TPHA confirma que es treponémica. Con menos de un año de evolución se trata de sífilis precoz —primaria, secundaria o latente precoz— y el tratamiento es una única dosis de penicilina G benzatina de 2,4 millones de unidades por vía intramuscular. Las tres dosis semanales se reservan para la sífilis tardía o de duración desconocida, y la penicilina intravenosa para la neurosífilis.',
  no:{0:'No tratar deja progresar la infección a formas tardías y mantiene la transmisión.',1:'La pauta intravenosa a dosis altas es para la neurosífilis, no descrita aquí.',2:'Las tres dosis corresponden a la sífilis tardía o de duración desconocida.',3:'La ceftriaxona es alternativa en alérgicos, pero no el tratamiento de elección.'},
  trampa:'Se olvida cronometrar la infección. La pauta depende por completo de si han pasado más o menos de doce meses, y de si hay afectación neurológica.',
  dx:['Sífilis precoz','Sífilis latente tardía','Neurosífilis','Herpes genital'],
  obj:'Elegir la pauta de penicilina según el estadio de la sífilis.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de los CDC sobre infecciones de transmisión sexual.'
},

/* ==================== DIGESTIVO Y URGENCIAS ==================== */
'MIR-2013-M90': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Hepatitis alcohólica',
  clave:'AST el DOBLE de la ALT, GGT alta, macrocitosis y bilirrubina de 15 en un bebedor: hepatitis alcohólica.',
  exp:'El cociente AST/ALT mayor de 2 es prácticamente característico del daño hepático alcohólico, y contrasta con las hepatitis virales, donde predomina la ALT y las cifras son muchísimo más altas. Se acompaña de GGT elevada, macrocitosis por el efecto tóxico sobre la médula, leucocitosis con neutrofilia —que no implica infección—, hiperbilirrubinemia y prolongación del tiempo de protrombina, que es el marcador de gravedad. La fiebre y la encefalopatía forman parte del cuadro. Con esta bilirrubina y esta coagulopatía hay que calcular índices pronósticos como la función discriminante de Maddrey y valorar corticoides, siempre tras descartar infección.',
  no:{0:'El absceso hepático daría una lesión focal en la imagen y un patrón analítico distinto.',1:'La colecistitis produce dolor localizado con Murphy positivo, sin este perfil de transaminasas.',2:'La colangitis cursa con patrón colestásico y dilatación de la vía biliar.',4:'La pancreatitis eleva amilasa y lipasa, no las transaminasas de este modo.'},
  trampa:'Se interpreta la leucocitosis como infección y se centra todo en buscar un foco. En la hepatitis alcohólica grave la neutrofilia forma parte del cuadro, aunque siempre haya que descartar infección antes de dar corticoides.',
  dx:['Hepatitis alcohólica','Colangitis','Hepatitis viral','Absceso hepático'],
  obj:'Reconocer el patrón analítico de la hepatitis alcohólica.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías EASL y AASLD sobre enfermedad hepática por alcohol.'
},
'MIR-2013-M88': {
  esp:'Emergencias', tema:'Urgencias', sub:'Hemorragia digestiva',
  clave:'Se pide la que NO se hace: el hematocrito no mide la pérdida de sangre en la fase aguda.',
  exp:'En la hemorragia aguda se pierde sangre completa, es decir, hematíes y plasma en la misma proporción, de modo que el hematocrito inicial puede ser normal aunque el paciente esté sangrando de forma masiva. Solo desciende horas después, cuando se produce la hemodilución por el paso de líquido al espacio intravascular y por la reposición con cristaloides. Guiarse por él en la valoración inicial es un error clásico que subestima la gravedad. Lo que orienta de verdad son la frecuencia cardíaca, la presión arterial, la perfusión periférica y el nivel de conciencia.',
  no:{0:'Asegurar la oxigenación forma parte de la atención inicial.',1:'Dos vías periféricas de grueso calibre permiten una reposición rápida.',3:'La reposición con cristaloides es la medida inicial de volumen.',4:'La sonda nasogástrica ya no se coloca de rutina, pero en 2013 formaba parte de la práctica habitual y no es el error que se busca.'},
  trampa:'Se pide un hemograma urgente y se toma la decisión por la cifra. En la primera hora esa cifra engaña: el paciente puede estar desangrándose con un hematocrito normal.',
  dx:['Hemorragia digestiva alta','Shock hipovolémico','Várices esofágicas'],
  obj:'Valorar la hemorragia aguda por la clínica y no por el hematocrito inicial.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías ESGE sobre hemorragia digestiva alta.'
},
'MIR-2013-M226': {
  esp:'Emergencias', tema:'Urgencias', sub:'Shock',
  clave:'Hipotensión CON bradicardia y piel CALIENTE tras un traumatismo: shock neurogénico.',
  exp:'En el shock hemorrágico, que es lo primero que hay que descartar en un traumatizado, la respuesta simpática produce taquicardia, vasoconstricción y piel fría y pálida. Aquí ocurre lo contrario: bradicardia y piel caliente, lo que indica que esa respuesta simpática no existe. Eso sucede cuando una lesión medular por encima de T6 interrumpe las vías simpáticas: se pierden el tono vascular y la aceleración cardíaca, y queda el vago sin oposición. El tratamiento combina volumen, vasopresores y atropina si la bradicardia compromete la perfusión, sin olvidar que puede coexistir una hemorragia.',
  no:{0:'El shock hipovolémico cursa con taquicardia y piel fría, justo lo contrario.',1:'El cardiogénico produce congestión y mala perfusión periférica, con piel fría.',3:'El shock séptico da piel caliente, pero con taquicardia y en otro contexto clínico.',4:'El obstructivo, por taponamiento o neumotórax a tensión, cursa con taquicardia e ingurgitación yugular.'},
  trampa:'Se asume hemorragia por ser un traumatismo y se transfunde sin más. La bradicardia con piel caliente es el dato que cambia el diagnóstico y el tratamiento.',
  dx:['Shock neurogénico','Shock hemorrágico','Shock obstructivo','Shock medular'],
  obj:'Identificar el shock neurogénico por su perfil hemodinámico opuesto al hemorrágico.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con el ATLS, 10.ª ed.'
},

/* ==================== ELECTROLITOS Y METABOLISMO ==================== */
'MIR-2013-M100': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Trastornos del magnesio',
  clave:'Con el magnesio en 0,25, ni el potasio ni el calcio se corregirán: hay que reponer MAGNESIO primero.',
  exp:'La hipomagnesemia grave del alcohólico con diarrea crónica bloquea la corrección de los demás iones por dos vías: aumenta la salida renal de potasio a través de los canales ROMK, que el magnesio normalmente inhibe, e impide la secreción de hormona paratiroidea y la respuesta del hueso a ella, lo que mantiene la hipocalcemia. Por eso, mientras no se repone el magnesio, el potasio administrado se pierde por la orina y el calcio no sube. Es el ejemplo clásico de que el orden de la corrección importa tanto como la corrección misma.',
  no:{0:'La hiperglucemia es secundaria y no es lo prioritario ante una hipomagnesemia grave con calambres.',1:'El potasio se seguirá perdiendo por la orina mientras el magnesio siga bajo.',2:'El calcio no se corregirá porque la paratiroides no responde sin magnesio.',3:'El fósforo es el trastorno menos urgente de los presentes.'},
  trampa:'Se corrige el potasio una y otra vez sin éxito. Ante una hipopotasemia refractaria, la respuesta casi siempre está en el magnesio.',
  dx:['Hipomagnesemia grave','Hipopotasemia refractaria','Hipocalcemia por hipomagnesemia'],
  obj:'Reponer el magnesio antes que el potasio y el calcio.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., trastornos electrolíticos.'
},
'MIR-2013-M101': {
  esp:'Medicina Interna', tema:'Endocrinología', sub:'Hipercalcemia',
  clave:'Hipercalcemia con PTH inapropiadamente normal y familiares operados que siguieron hipercalcémicos: hipercalcemia hipocalciúrica familiar.',
  exp:'El dato que cambia el caso es el antecedente familiar de paratiroidectomías que no corrigieron la hipercalcemia: eso indica que el problema no está en la glándula. La hipercalcemia hipocalciúrica familiar se debe a una mutación inactivante del receptor sensor de calcio, que hace que el organismo perciba como normal un calcio alto. El riñón reabsorbe calcio de forma ávida, y por eso el cociente calcio/creatinina en orina es bajo, típicamente inferior a 0,01, mientras que en el hiperparatiroidismo primario está elevado. Es una entidad benigna que NO se opera; reconocerla evita cirugías inútiles.',
  no:{0:'La 25-OH vitamina D valora el estado vitamínico, no distingue estas dos entidades.',1:'La 1,25-OH2 vitamina D es útil en hipercalcemias mediadas por granulomas o linfomas.',3:'La reabsorción tubular de fosfatos no separa las dos causas.',4:'La PTHrP se solicita ante sospecha de hipercalcemia tumoral, con PTH suprimida.'},
  trampa:'Una PTH "normal" con calcio alto se lee como normalidad. Es inapropiada: con hipercalcemia, la PTH debería estar suprimida.',
  dx:['Hipercalcemia hipocalciúrica familiar','Hiperparatiroidismo primario','Hipercalcemia tumoral'],
  obj:'Diferenciar la hipercalcemia hipocalciúrica familiar del hiperparatiroidismo primario.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de la Endocrine Society sobre hiperparatiroidismo primario.'
},
'MIR-2013-M99': {
  esp:'Medicina Interna', tema:'Endocrinología', sub:'Neoplasia endocrina múltiple',
  clave:'Tumor de páncreas, cólicos renales de repetición (hiperparatiroidismo) y amenorrea (prolactinoma), con historia familiar: MEN 1.',
  exp:'La neoplasia endocrina múltiple tipo 1, o síndrome de Wermer, se recuerda por las tres "P": paratiroides, páncreas e hipófisis. En este caso los tres aparecen: la litiasis renal de repetición desde los 20 años y el antecedente familiar apuntan al hiperparatiroidismo primario, que suele ser la primera manifestación; el tumor neuroendocrino pancreático es el segundo componente; y la amenorrea sugiere un prolactinoma. Su herencia es autosómica dominante por mutación del gen MEN1, lo que obliga a estudiar a los familiares.',
  no:{1:'La MEN 2A asocia carcinoma medular de tiroides, feocromocitoma e hiperparatiroidismo, sin tumor pancreático.',2:'La MEN 2B añade neuromas mucosos y hábito marfanoide, ausentes aquí.',3:'El somatostatinoma es un tumor aislado que no explica el hiperparatiroidismo familiar.',4:'Los tumores productores de PTH ectópica son excepcionales y no encajan con la historia familiar.'},
  trampa:'Se mira solo el tumor que motivó la consulta. Los cólicos renales desde los 20 años y la historia familiar son lo que convierte un caso aislado en un síndrome hereditario.',
  dx:['MEN 1','MEN 2A','Hiperparatiroidismo primario esporádico'],
  obj:'Reconocer el síndrome MEN 1 por la asociación de sus tres componentes.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de la Endocrine Society sobre neoplasia endocrina múltiple tipo 1.'
},
'MIR-2013-M155': {
  esp:'Medicina Interna', tema:'Reumatología', sub:'Osteoporosis por corticoides',
  clave:'Mujer de 75 años que va a tomar corticoides a dosis altas durante un año: se trata YA, sin esperar la densitometría.',
  exp:'La osteoporosis inducida por glucocorticoides pierde masa ósea sobre todo en los primeros meses de tratamiento, y aumenta el riesgo de fractura antes y con densidades minerales más altas que la osteoporosis posmenopáusica: la densitometría, por tanto, infraestima el riesgo. En una mujer de 75 años que va a recibir prednisona a dosis altas durante al menos un año, el riesgo es suficientemente alto como para iniciar bisfosfonato con calcio y vitamina D sin esperar una prueba que tardará meses. Esperar significaría perder justo el periodo de mayor pérdida ósea.',
  no:{0:'Esperar cuatro o cinco meses deja sin protección el periodo de máxima pérdida ósea.',1:'El FRAX ayuda a estratificar, pero en este perfil de riesgo no se necesita para decidir.',3:'El calcio y la vitamina D solos son insuficientes en un riesgo alto: acompañan al bisfosfonato, no lo sustituyen.',4:'La radiografía simple no detecta la osteopenia hasta que se ha perdido un 30% de la masa ósea.'},
  trampa:'Se pide la densitometría por rutina antes de decidir. En la osteoporosis por corticoides, el riesgo lo marca el tratamiento previsto, no la densidad.',
  dx:['Osteoporosis inducida por glucocorticoides','Osteoporosis posmenopáusica'],
  obj:'Indicar la profilaxis en la osteoporosis por corticoides sin esperar la densitometría.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías ACR sobre osteoporosis inducida por glucocorticoides.'
},

/* ==================== NEUMOLOGÍA ==================== */
'MIR-2014-M59': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Cirugía de reducción de volumen',
  clave:'La cirugía de reducción de volumen beneficia al enfisema de LÓBULOS SUPERIORES, con rehabilitación previa.',
  exp:'El ensayo NETT delimitó qué pacientes se benefician de la cirugía de reducción de volumen pulmonar: los que tienen enfisema de predominio en lóbulos superiores y baja capacidad de ejercicio tras rehabilitación. En ellos mejoran la supervivencia, la función pulmonar y la calidad de vida. La rehabilitación previa no es un trámite: forma parte del protocolo y selecciona a los candidatos. En cambio, el enfisema de distribución homogénea con FEV1 y DLCO muy bajos identifica a un grupo de mortalidad quirúrgica inaceptable, en el que la cirugía está contraindicada.',
  no:{0:'La insuficiencia cardíaca moderada o grave es una contraindicación, no una indicación.',1:'Una presión pulmonar inferior a 45 mmHg es precisamente lo aceptable; lo que contraindica es la hipertensión pulmonar significativa.',2:'El predominio en lóbulos inferiores y la patología pleural asociada empeoran los resultados.',3:'Una DLCO menor del 20% identifica alto riesgo de mortalidad quirúrgica, no buen pronóstico.'},
  trampa:'Se asume que a peor función pulmonar, más se beneficia el paciente de la cirugía. Es al revés: por debajo de ciertos umbrales, la cirugía mata.',
  dx:['EPOC con enfisema de lóbulos superiores','EPOC homogéneo','Hipertensión pulmonar'],
  obj:'Conocer los criterios de selección para la cirugía de reducción de volumen.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con el ensayo NETT y el informe GOLD.'
},

/* ==================== FARMACOLOGÍA Y TOXICOLOGÍA ==================== */
'MIR-2013-P15': {
  esp:'Ginecología y Obstetricia', tema:'Obstetricia', sub:'Estreptococo del grupo B',
  clave:'Portadora de estreptococo del grupo B a término: profilaxis antibiótica INTRAPARTO.',
  exp:'Streptococcus agalactiae coloniza la vagina de una proporción importante de gestantes sin causarles síntomas, pero es la principal causa de sepsis neonatal precoz. Por eso se realiza cribado entre las semanas 35 y 37 y las portadoras reciben penicilina o ampicilina por vía intravenosa durante el parto, idealmente al menos cuatro horas antes del nacimiento, que es cuando se alcanza concentración protectora en el canal. Tratar antes del parto no sirve: la colonización reaparece. Y no es indicación de cesárea.',
  no:{0:'Es comensal, cierto, pero eso no le resta importancia: es la primera causa de sepsis neonatal precoz.',1:'La cesárea no está indicada por esta causa y no evita la transmisión si hay rotura de membranas.',2:'El cribado sí está indicado, entre las semanas 35 y 37.',3:'Tratar al recién nacido después no sustituye a la profilaxis intraparto, que es lo que previene.'},
  trampa:'Se trata a la gestante en el momento del hallazgo. La colonización recurre: lo que protege es el antibiótico durante el parto.',
  dx:['Colonización por estreptococo del grupo B','Sepsis neonatal precoz'],
  obj:'Aplicar la profilaxis intraparto frente al estreptococo del grupo B.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de los CDC y del ACOG.'
},
'MIR-2013-P17': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Profilaxis antirrábica',
  clave:'Mordeduras graves en cuello y extremidades, animal no localizable y niño no vacunado: vacuna MÁS inmunoglobulina.',
  exp:'La profilaxis postexposición de la rabia depende de la categoría de la exposición y del estado vacunal previo. En una persona no vacunada con heridas múltiples y profundas —categoría III— se administran ambas cosas: la inmunoglobulina antirrábica, infiltrada alrededor de las heridas para neutralizar el virus in situ y aportar protección inmediata, y la pauta completa de vacuna, que genera la inmunidad activa que tarda días en aparecer. Todo ello precedido del lavado abundante de las heridas con agua y jabón, que por sí solo reduce mucho el riesgo. La rabia declarada es prácticamente siempre mortal, de modo que no se espera a localizar al animal.',
  no:{0:'No existen antivíricos eficaces frente a la rabia una vez declarada.',1:'La vacuna sola es insuficiente en una exposición de categoría III en no vacunados: tarda en proteger.',3:'La inmunoglobulina sola no genera memoria inmunitaria.',4:'Añadir antivíricos no aporta nada, porque no los hay eficaces.'},
  trampa:'Se espera a ver si aparece el perro. En una exposición grave con animal no localizable, la profilaxis se inicia de inmediato.',
  dx:['Exposición de riesgo a rabia','Herida por mordedura','Tétanos'],
  obj:'Aplicar la profilaxis postexposición antirrábica según la categoría.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las recomendaciones de la OMS sobre rabia.'
},
'MIR-2013-P90': {
  esp:'Farmacología', tema:'Toxicología', sub:'Organofosforados',
  clave:'Síndrome colinérgico por plaguicidas: el reactivador de la colinesterasa es la PRALIDOXIMA.',
  exp:'Los organofosforados inhiben la acetilcolinesterasa y producen un exceso de acetilcolina, con efectos muscarínicos —sialorrea, broncorrea, broncoconstricción, bradicardia, diarrea— y nicotínicos, como las fasciculaciones y la debilidad. El tratamiento tiene dos piezas: la atropina, que bloquea los receptores muscarínicos y se titula hasta secar las secreciones bronquiales, y la pralidoxima, que reactiva la enzima antes de que el enlace se haga irreversible por el fenómeno de envejecimiento, y que es la única que actúa sobre los síntomas nicotínicos. Entre las opciones ofrecidas, la pralidoxima es la respuesta; en la práctica se administran ambas, y la atropina primero.',
  no:{0:'La carbidopa se usa en el parkinson, junto con la levodopa.',1:'Administrar acetilcolina agravaría el cuadro: sobra acetilcolina, no falta.',2:'La nicotina estimularía aún más los receptores nicotínicos ya sobreestimulados.',3:'El flumazenilo revierte benzodiacepinas, no organofosforados.'},
  trampa:'Se administra pralidoxima tarde. Pasadas unas horas, el enlace entre el tóxico y la enzima envejece y se hace irreversible: entonces ya no reactiva nada.',
  dx:['Intoxicación por organofosforados','Intoxicación por carbamatos','Síndrome colinérgico'],
  obj:'Conocer el papel de la pralidoxima y la atropina en el síndrome colinérgico.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Goldfrank, Toxicologic Emergencies.'
},
'MIR-2013-P91': {
  esp:'Farmacología', tema:'Psicofarmacología', sub:'Interacciones',
  clave:'Crisis hipertensiva tras queso, embutido y cerveza: efecto queso por un IMAO.',
  exp:'La tranilcipromina es un inhibidor irreversible y no selectivo de la monoaminooxidasa. Esta enzima degrada la tiramina de los alimentos en la pared intestinal y en el hígado; al inhibirla, la tiramina pasa íntegra a la circulación, desplaza la noradrenalina de las vesículas presinápticas y provoca una descarga adrenérgica masiva, con crisis hipertensiva y cefalea intensa. Es el clásico "efecto queso", y por eso quien toma un IMAO debe evitar quesos curados, embutidos, alimentos fermentados, cerveza y vino tinto. La misma inhibición explica el riesgo de síndrome serotoninérgico al combinarlos con otros antidepresivos.',
  no:{1:'La fluoxetina es un inhibidor selectivo de la recaptación de serotonina y no produce este efecto.',2:'La venlafaxina puede elevar algo la presión de forma dosis-dependiente, pero no por la tiramina de la dieta.',3:'La imipramina es un tricíclico: sus efectos característicos son los anticolinérgicos y la cardiotoxicidad.',4:'La duloxetina no interactúa con la tiramina.'},
  trampa:'Se busca la explicación en el alcohol. El desencadenante es la tiramina de los alimentos fermentados y curados, no el etanol.',
  dx:['Crisis hipertensiva por IMAO','Feocromocitoma','Síndrome serotoninérgico'],
  obj:'Reconocer la interacción entre IMAO y alimentos ricos en tiramina.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Goodman y Gilman.'
},

/* ==================== GINECOLOGÍA Y OBSTETRICIA ==================== */
'MIR-2013-M184': {
  esp:'Ginecología y Obstetricia', tema:'Obstetricia', sub:'Insuficiencia cervical',
  clave:'Tres pérdidas del segundo trimestre SIN contracciones y con dilatación avanzada: insuficiencia cervical.',
  exp:'La clave está en lo que la paciente NO refiere: nunca sintió contracciones y, aun así, llegaba a urgencias con 8 centímetros y membranas prominentes. Eso describe una dilatación indolora y progresiva por incompetencia del cuello, favorecida aquí por la conización previa, que reduce el tejido cervical. Con el antecedente de tres pérdidas del segundo trimestre, la indicación es un cerclaje programado, que se coloca entre las semanas 12 y 14, una vez comprobada la viabilidad y descartadas malformaciones. Es la situación en la que el cerclaje ha demostrado mejor resultado.',
  no:{0:'El atosibán es un tocolítico intravenoso y aquí no hay contracciones que frenar.',1:'Madurar el pulmón a las 19-20 semanas no evita la pérdida y esa edad gestacional es inviable.',3:'Renunciar a nuevos embarazos es innecesario: existe un tratamiento eficaz.',4:'La reproducción asistida no resuelve un problema cervical: el obstáculo no está en concebir.'},
  trampa:'Se etiquetan como amenazas de parto pretérmino y se tratan con tocolíticos. Sin contracciones no hay nada que frenar: el problema es mecánico.',
  dx:['Insuficiencia cervical','Parto pretérmino','Corioamnionitis subclínica'],
  obj:'Reconocer la insuficiencia cervical e indicar el cerclaje programado.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con los boletines del ACOG sobre insuficiencia cervical.'
},
'MIR-2013-M186': {
  esp:'Ginecología y Obstetricia', tema:'Obstetricia', sub:'Asma en el embarazo',
  clave:'El asma mal controlada es MÁS peligrosa para el feto que los inhaladores: se mantiene el tratamiento.',
  exp:'La regla en el asma durante la gestación es que el riesgo de la hipoxemia materna supera con mucho al de los fármacos. Los corticoides inhalados, y en particular la budesonida, son los que más datos de seguridad acumulan en el embarazo, y el salbutamol de rescate también se considera seguro. Un asma mal controlada se asocia a preeclampsia, parto pretérmino, bajo peso al nacer y mortalidad perinatal. Por eso la conducta correcta es mantener el tratamiento, reforzar la técnica inhalatoria y la adherencia, y explicar a la paciente por qué es lo más seguro para su hijo.',
  no:{0:'El curso del asma en el embarazo es variable: en un tercio mejora, en un tercio empeora y en un tercio no cambia. Suspender el tratamiento es peligroso.',1:'La budesonida no se ha relacionado con aumento de malformaciones; es de los corticoides inhalados con mejor perfil en gestación.',2:'Sustituir el inhalado por corticoide oral aumenta la exposición sistémica sin necesidad.',4:'El omalizumab es un anticuerpo monoclonal, sí es un fármaco, y no es de primera línea en un asma ya controlada.'},
  trampa:'Se retira la medicación por precaución. Esa "precaución" es lo que provoca las crisis y la hipoxemia fetal.',
  dx:['Asma persistente grave controlada','Crisis asmática en el embarazo'],
  obj:'Mantener el tratamiento antiasmático durante la gestación.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con la estrategia GINA y los boletines del ACOG.'
},
'MIR-2013-M188': {
  esp:'Ginecología y Obstetricia', tema:'Ginecología', sub:'Amenorrea primaria',
  clave:'Útero y vagina ausentes, ovarios normales, testosterona NORMAL femenina y agenesia renal: síndrome de Rokitansky.',
  exp:'El síndrome de Mayer-Rokitansky-Küster-Hauser consiste en la agenesia de los conductos de Müller: no se forman el útero ni los dos tercios superiores de la vagina, mientras los ovarios, que tienen otro origen embriológico, son normales y funcionan. Por eso el desarrollo puberal es normal, con estradiol y testosterona en rango femenino, y la paciente consulta por amenorrea primaria. Se asocia con frecuencia a malformaciones renales —la agenesia renal del caso— y esqueléticas, y esa asociación es una pista diagnóstica muy útil. El cariotipo es 46,XX.',
  no:{1:'El síndrome de Morris, o insensibilidad androgénica, cursa con testosterona en rango MASCULINO y vello púbico escaso, no con testosterona femenina normal.',2:'La hiperplasia suprarrenal congénita produce virilización e hiperandrogenismo.',3:'El ovario poliquístico cursa con oligomenorrea o amenorrea secundaria, con útero presente.',4:'El síndrome de Kallman cursa con hipogonadismo hipogonadotropo y anosmia, sin desarrollo puberal normal.'},
  trampa:'Se confunde con el síndrome de Morris, porque ambos cursan con amenorrea primaria y vagina corta. Los distinguen la testosterona, el vello púbico y las malformaciones renales.',
  dx:['Síndrome de Rokitansky','Síndrome de insensibilidad androgénica','Himen imperforado','Disgenesia gonadal'],
  obj:'Diferenciar el síndrome de Rokitansky de la insensibilidad androgénica.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Williams Ginecología, 4.ª ed.'
},
'MIR-2013-M233': {
  esp:'Ginecología y Obstetricia', tema:'Ginecología', sub:'Amenorrea primaria',
  clave:'Mamas desarrolladas pero vello púbico y axilar ESCASO, talla alta y gonadotropinas elevadas: insensibilidad androgénica completa.',
  exp:'En el síndrome de Morris el cariotipo es 46,XY y los testículos funcionan, pero el receptor de andrógenos no responde. La testosterona no puede virilizar —de ahí los genitales externos femeninos y el vello púbico y axilar escaso, que depende de andrógenos—, y su aromatización a estrógenos produce un desarrollo mamario normal. La talla alta refleja la impronta del cromosoma Y, y las gonadotropinas se elevan porque falta la retroalimentación androgénica. No hay útero, porque los testículos produjeron hormona antimülleriana. Hay que localizar y vigilar las gónadas por el riesgo de tumor germinal.',
  no:{0:'El síndrome de Klinefelter es 47,XXY y se manifiesta con fenotipo masculino.',1:'El síndrome de Kallman cursa con gonadotropinas BAJAS y anosmia.',2:'El retraso constitucional no cursa con gonadotropinas elevadas ni con este desarrollo mamario a los 16 años.',3:'La hiperplasia suprarrenal congénita produce virilización, lo opuesto a lo descrito.'},
  trampa:'Se pasa por alto el vello púbico escaso. Es el dato que separa esta entidad del síndrome de Rokitansky, donde el vello es normal.',
  dx:['Insensibilidad androgénica completa','Síndrome de Rokitansky','Disgenesia gonadal pura'],
  obj:'Reconocer la insensibilidad androgénica completa por el patrón de vello y las gonadotropinas.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Williams Ginecología, 4.ª ed., y guías de diferencias del desarrollo sexual.'
},
'MIR-2014-M158': {
  esp:'Ginecología y Obstetricia', tema:'Ginecología', sub:'Prevención del cáncer de ovario',
  clave:'Un solo familiar con cáncer de ovario a los 64 años no define alto riesgo: anticonceptivos orales.',
  exp:'Los anticonceptivos orales combinados reducen el riesgo de cáncer de ovario en torno a un 30-50%, y el efecto aumenta con la duración de uso y persiste años después de suspenderlos; la explicación clásica es la supresión de la ovulación repetida. En una mujer de 28 años, nulípara y con un único antecedente familiar de aparición tardía, no hay criterios de síndrome hereditario y la cirugía sería desproporcionada. La salpingooforectomía reductora de riesgo se reserva para portadoras de mutación en BRCA u otros síndromes, y se realiza cuando se ha completado el deseo genésico.',
  no:{0:'La oclusión tubárica reduce algo el riesgo, pero es menos eficaz y además es irreversible.',1:'La ooforectomía a los 28 años provocaría menopausia precoz sin justificación genética.',2:'La aspirina no ha demostrado prevenir el cáncer de ovario.',3:'La lactancia es protectora: aconsejar lactancia artificial iría en contra del objetivo.'},
  trampa:'Se salta a la cirugía profiláctica ante cualquier antecedente familiar. Sin criterios de síndrome hereditario, esa cirugía causa más daño que el que evita.',
  dx:['Riesgo poblacional de cáncer de ovario','Síndrome de cáncer de mama y ovario hereditario'],
  obj:'Elegir la estrategia preventiva según el nivel real de riesgo.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las guías NCCN sobre evaluación genética y Williams Ginecología, 4.ª ed.'
},
'MIR-2014-M161': {
  esp:'Ginecología y Obstetricia', tema:'Obstetricia', sub:'Desprendimiento de placenta',
  clave:'Dolor BRUSCO, sangre OSCURA y escasa, mal estado general y registro no reactivo: desprendimiento de placenta.',
  exp:'El desprendimiento prematuro de placenta normoinserta se distingue de la placenta previa por tres datos: el dolor, que en la previa no existe; la sangre oscura y a menudo escasa, porque buena parte del sangrado queda retenida detrás de la placenta; y la afectación fetal precoz, porque se pierde superficie de intercambio. El útero suele estar hipertónico y doloroso. La hipertensión de esta paciente es el factor de riesgo clásico, junto con el traumatismo, el consumo de cocaína y la edad materna avanzada. Con registro no reactivo, la conducta es la extracción fetal urgente.',
  no:{0:'Una descompensación glucémica no produce dolor brusco, metrorragia ni alteración del registro fetal.',2:'La preeclampsia grave puede coexistir y ser el factor de riesgo, pero no explica por sí sola el cuadro agudo.',3:'La vasa previa cursa con sangrado FETAL tras la rotura de membranas y deterioro fetal fulminante, con hemorragia abundante y roja.',4:'La placenta previa sangra en rojo brillante, de forma indolora y con útero relajado.'},
  trampa:'Se descarta el desprendimiento porque el sangrado es escaso. La cantidad visible no mide la gravedad: la hemorragia puede quedar oculta detrás de la placenta.',
  dx:['Desprendimiento prematuro de placenta','Placenta previa','Rotura uterina','Vasa previa'],
  obj:'Diferenciar el desprendimiento de placenta de la placenta previa.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Williams Obstetricia, 26.ª ed.'
},

/* ==================== PEDIATRÍA ==================== */
'MIR-2013-M178': {
  esp:'Pediatría', tema:'Pediatría general', sub:'Colestasis neonatal',
  clave:'Bilirrubina total 7 con indirecta 1,5: la DIRECTA es 5,5. Eso es colestasis, y nunca es fisiológica.',
  exp:'La operación mental clave es restar: 7 menos 1,5 deja 5,5 mg/dL de bilirrubina directa. Una ictericia a expensas de bilirrubina conjugada indica colestasis y obliga a estudio urgente, con la atresia de vías biliares como primera sospecha en un lactante de un mes. El pronóstico depende del tiempo: la portoenterostomía de Kasai ofrece buenos resultados si se realiza antes de los 60 días de vida, y los pierde rápidamente después. Por eso toda ictericia que persiste más de dos semanas debe fraccionarse, sin excepción.',
  no:{1:'La ictericia por lactancia materna es a expensas de bilirrubina INDIRECTA.',2:'La isoinmunización produce hemólisis, es decir, bilirrubina indirecta.',3:'El síndrome de Gilbert cursa con hiperbilirrubinemia indirecta leve.',4:'La esferocitosis es hemolítica: también indirecta.'},
  trampa:'Se mira solo la bilirrubina total y se tranquiliza porque "no está tan alta". Sin fraccionar no se detecta la colestasis, y ahí se pierde la ventana quirúrgica.',
  dx:['Atresia de vías biliares','Quiste de colédoco','Hepatitis neonatal','Ictericia por lactancia'],
  obj:'Fraccionar la bilirrubina en toda ictericia neonatal prolongada.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Nelson, 22.ª ed., y las guías NASPGHAN sobre colestasis neonatal.'
},
'MIR-2013-M180': {
  esp:'Pediatría', tema:'Pediatría general', sub:'Anafilaxia',
  clave:'Anafilaxia: adrenalina 1/1000 INTRAMUSCULAR, en el vasto lateral del muslo.',
  exp:'El niño presenta afectación de dos sistemas —cutáneo-mucoso con angioedema, y respiratorio con sibilancias y ronquera— más hipotensión, tras la exposición a un alérgeno conocido: es una anafilaxia y no admite demora. La adrenalina es el único fármaco que revierte el mecanismo, y la vía intramuscular en la cara anterolateral del muslo alcanza concentraciones plasmáticas más rápidas y fiables que la subcutánea, cuya absorción es errática precisamente porque la vasoconstricción reduce el flujo local. La dosis es 0,01 mg/kg de la solución 1/1000, repetible cada 5 a 15 minutos.',
  no:{0:'Provocar el vómito no está indicado y añade riesgo de aspiración en un niño con compromiso de vía aérea.',1:'La vía subcutánea tiene absorción lenta e impredecible en el paciente en shock.',3:'Los corticoides tardan horas y no revierten la obstrucción ni la hipotensión.',4:'El salbutamol trata el broncoespasmo, pero no el edema laríngeo ni el shock.'},
  trampa:'Se empieza por el broncodilatador y el corticoide porque parecen "más suaves". El retraso de la adrenalina es la causa principal de muerte por anafilaxia.',
  dx:['Anafilaxia','Crisis asmática','Angioedema hereditario','Reacción vasovagal'],
  obj:'Administrar adrenalina intramuscular sin demora en la anafilaxia.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías EAACI y de la World Allergy Organization.'
},
'MIR-2013-M64': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Cardiopatías congénitas del adulto',
  clave:'Segundo ruido desdoblado AMPLIO y FIJO, con bloqueo de rama derecha y eje derecho: comunicación interauricular.',
  exp:'El desdoblamiento amplio y fijo del segundo ruido es prácticamente patognomónico de la comunicación interauricular: el cortocircuito de izquierda a derecha sobrecarga de volumen el ventrículo derecho, prolonga su eyección y hace que el componente pulmonar se retrase siempre igual, sin variar con la respiración. El soplo sistólico en foco pulmonar no lo produce el defecto, sino el hiperaflujo a través de la válvula pulmonar. El bloqueo de rama derecha y el eje derecho completan el cuadro. Es la cardiopatía congénita que más a menudo se diagnostica en la vida adulta, con frecuencia al aparecer una fibrilación auricular, como aquí.',
  no:{0:'La comunicación interventricular produce un soplo holosistólico rudo en borde esternal izquierdo bajo.',1:'La estenosis aórtica da soplo eyectivo irradiado a carótidas y pulso parvus et tardus.',2:'La estenosis mitral cursa con soplo diastólico y chasquido de apertura.',4:'El conducto arterioso persistente produce un soplo continuo "en maquinaria".'},
  trampa:'Se descarta la cardiopatía congénita por la edad. La comunicación interauricular puede pasar desapercibida décadas y debutar con arritmia e insuficiencia cardíaca en la edad media.',
  dx:['Comunicación interauricular','Comunicación interventricular','Estenosis pulmonar','Drenaje venoso anómalo'],
  obj:'Reconocer la comunicación interauricular por el desdoblamiento fijo del segundo ruido.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con la guía ESC sobre cardiopatías congénitas del adulto.'
},
'MIR-2014-M143': {
  esp:'Pediatría', tema:'Otorrinolaringología', sub:'Hipoacusia infantil',
  clave:'Hipoacusia leve a grave, pero no profunda: audioprótesis y logopedia. El implante coclear no toca todavía.',
  exp:'El implante coclear se indica en la hipoacusia neurosensorial profunda bilateral que no obtiene beneficio suficiente de los audífonos bien adaptados. En una hipoacusia de grado leve-moderado en un oído y moderado-grave en el otro, el tratamiento correcto es la adaptación protésica bilateral acompañada de rehabilitación logopédica, y cuanto antes mejor: el periodo crítico para el desarrollo del lenguaje son los primeros años, y el retraso en la intervención se traduce en un déficit lingüístico y cognitivo que después no se recupera del todo. El cribado auditivo neonatal existe precisamente para no perder ese tiempo.',
  no:{0:'Esperar seis meses desaprovecha el periodo crítico del desarrollo del lenguaje.',1:'El implante no está indicado en este grado de hipoacusia, y menos en el oído mejor.',2:'Esperar a los 3 años a ver si habla es exactamente lo que el cribado neonatal pretende evitar.',4:'Tampoco en el oído izquierdo: el grado moderado-grave se beneficia primero de audífono.'},
  trampa:'Se piensa en el implante coclear como la solución de toda hipoacusia infantil. Su indicación depende del grado y del beneficio previo con audífonos.',
  dx:['Hipoacusia neurosensorial bilateral','Hipoacusia de transmisión','Retraso del lenguaje'],
  obj:'Indicar audioprótesis o implante coclear según el grado de hipoacusia.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las recomendaciones sobre cribado auditivo neonatal e hipoacusia infantil.'
},
'MIR-2014-M144': {
  esp:'Pediatría', tema:'Otorrinolaringología', sub:'Sinusitis',
  clave:'En el lactante el único seno neumatizado es el ETMOIDES, y su pared con la órbita es papirácea.',
  exp:'Los senos se neumatizan en tiempos distintos: el etmoides y el maxilar están presentes desde el nacimiento —el etmoides mejor desarrollado—, el esfenoidal aparece hacia los 5 años y el frontal hacia los 7 u 8, alcanzando desarrollo completo en la adolescencia. Por eso en un lactante la sinusitis es etmoidal. La lámina papirácea que separa el etmoides de la órbita es finísima, de modo que la infección se propaga con facilidad y produce el edema palpebral descrito, con riesgo de celulitis orbitaria, absceso subperióstico y trombosis del seno cavernoso. Es una urgencia que requiere antibiótico intravenoso y valoración por imagen.',
  no:{0:'La pansinusitis exige senos ya neumatizados, que a esta edad no existen.',1:'El maxilar está presente pero da dolor facial, no edema palpebral.',3:'El seno esfenoidal no está neumatizado en el lactante.',4:'El seno frontal no se desarrolla hasta los 7-8 años.'},
  trampa:'Se trata el edema palpebral como una conjuntivitis o una picadura. Con fiebre y rinorrea del mismo lado hay que pensar en el etmoides y en la órbita.',
  dx:['Etmoiditis aguda','Celulitis preseptal','Celulitis orbitaria','Dacriocistitis'],
  obj:'Relacionar la neumatización de los senos con la edad y la clínica.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Nelson, 22.ª ed.'
},

/* ==================== PSIQUIATRÍA ==================== */
'MIR-2013-M220': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Trastornos del ánimo',
  clave:'Ánimo bajo, anhedonia, culpa, pérdida de peso, despertar precoz e incapacidad funcional durante un mes: depresión mayor.',
  exp:'Aunque exista un desencadenante vital —la separación—, el cuadro cumple criterios de episodio depresivo mayor: ánimo deprimido y anhedonia durante al menos dos semanas, más síntomas somáticos y cognitivos, con deterioro funcional. Los síntomas melancólicos —despertar precoz, pérdida de peso marcada, sentimientos de inutilidad y culpa— refuerzan el diagnóstico y lo separan del trastorno adaptativo, que por definición no alcanza estos criterios. La presencia de un estresor no descarta la depresión mayor: solo explica su contexto.',
  no:{0:'La distimia exige síntomas depresivos crónicos de al menos dos años y de menor intensidad.',1:'La pseudodemencia es una presentación de la depresión en el anciano; aquí el diagnóstico de base es el episodio depresivo.',2:'El trastorno adaptativo no reúne los criterios completos de episodio mayor ni este grado de síntomas melancólicos.',4:'La depresión menor implica menos síntomas y menos repercusión funcional.'},
  trampa:'Se atribuye todo al divorcio y se etiqueta de reacción normal. Un estresor identificable no excluye una depresión mayor que necesita tratamiento.',
  dx:['Episodio depresivo mayor','Trastorno adaptativo','Distimia','Duelo'],
  obj:'Aplicar los criterios del episodio depresivo mayor pese a la presencia de un estresor.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con el DSM-5-TR.'
},
'MIR-2013-M225': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Psicosis',
  clave:'Se pide lo que NO se plantea. La conducta de comprobación aquí nace de un DELIRIO, no de una obsesión.',
  exp:'La paciente revisa la instalación eléctrica porque cree firmemente que la Policía la vigila con cámaras, y se considera una enviada galáctica con poderes: son ideas delirantes de perjuicio y grandiosidad. En el trastorno obsesivo compulsivo las obsesiones son egodistónicas —el paciente las reconoce como propias, absurdas y las combate— y la conducta de comprobación busca aliviar la ansiedad, no confirmar una certeza delirante. Por eso el trastorno obsesivo no entra en este diferencial. Sí entran el episodio maníaco con síntomas psicóticos, dado el insomnio y la hiperactividad, la esquizofrenia, la psicosis tóxica y las causas orgánicas, que obligan a imagen y analítica.',
  no:{1:'La esquizofrenia sí entra en el diferencial de un primer episodio psicótico.',2:'El episodio maníaco con síntomas psicóticos es muy plausible: hiperactividad, insomnio y grandiosidad.',3:'La psicosis por tóxicos debe descartarse siempre en un primer episodio.',4:'Una causa orgánica como un tumor cerebral hay que excluirla en todo debut psicótico.'},
  trampa:'La palabra "obsesivamente" del enunciado empuja hacia el trastorno obsesivo. Es una descripción coloquial de la conducta, no un síntoma obsesivo en sentido técnico.',
  dx:['Episodio maníaco con síntomas psicóticos','Esquizofrenia','Psicosis tóxica','Causa orgánica'],
  obj:'Distinguir la obsesión egodistónica del delirio en la conducta de comprobación.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con el DSM-5-TR.'
},
'MIR-2013-M202': {
  esp:'Epidemiología', tema:'Diseños de estudio', sub:'Ensayos clínicos',
  clave:'Se pide la FALSA. El placebo SÍ se acepta en ensayos de depresión, con las debidas salvaguardas.',
  exp:'La afirmación de que el grupo placebo no es ético en depresión es falsa. La Declaración de Helsinki permite el placebo cuando no existe una intervención de eficacia probada, o cuando hay razones metodológicas convincentes y los participantes no quedan expuestos a un riesgo de daño grave o irreversible. En depresión leve o moderada, con criterios de exclusión que dejan fuera el riesgo suicida, con rescate previsto y retirada ante empeoramiento, los ensayos controlados con placebo se aceptan y de hecho son necesarios: la tasa de respuesta al placebo es muy alta y sin ese grupo no se puede medir el efecto real del fármaco.',
  no:{0:'Es cierta: las variables de seguridad son necesarias para situar terapéuticamente el fármaco.',2:'Es cierta: la respuesta se define por una reducción porcentual en escalas como Hamilton o Beck.',3:'Es cierta: los diseños de no inferioridad frente a activo tienen limitaciones para concluir eficacia.',4:'Es cierta: se requieren varias semanas de seguimiento para detectar diferencias significativas.'},
  trampa:'Se responde por intuición ética. La ética de la investigación no prohíbe el placebo: lo condiciona a que no exista riesgo de daño grave y a que haya justificación metodológica.',
  dx:[],
  obj:'Conocer las condiciones en que el placebo es aceptable en un ensayo clínico.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con la Declaración de Helsinki y guías de metodología de ensayos clínicos.'
}

});
