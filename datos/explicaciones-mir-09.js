/* ============================================================
   EXPLICACIONES — lote 09  (42 casos clínicos)
   Años 2013 a 2022. MIR 2017 de medicina excluido por cuarentena.
   Las 42 respuestas oficiales verificadas y correctas.
   ============================================================ */
window.EXPLICACIONES = Object.assign(window.EXPLICACIONES || {}, {

/* ==================== EMERGENCIAS ==================== */
'MIR-2019-M175': {
  esp:'Emergencias', tema:'Urgencias', sub:'Shock hemorrágico',
  clave:'Taquicardia y taquipnea con presión arterial todavía NORMAL: clase II, entre el 15 y el 30% de la volemia.',
  exp:'La clasificación del shock hemorrágico del ATLS se lee de arriba abajo por lo que se altera primero. En la clase I, hasta un 15%, todo está prácticamente normal. En la *clase II*, entre el 15 y el 30%, aparecen la taquicardia por encima de 100, la taquipnea y el estrechamiento de la presión de pulso, pero la presión arterial sistólica se mantiene: es exactamente lo que muestra este paciente, con 115 latidos, 25 respiraciones y una tensión de 110/75. Se trata con cristaloides. La *hipotensión* no aparece hasta la clase III, con pérdidas superiores al 30%, y ahí ya se requiere sangre. Y en la clase IV, por encima del 40%, hay riesgo vital inmediato.',
  no:{1:'Con más del 30% ya habría hipotensión, que aquí no existe.',2:'Por encima del 40% el paciente estaría en shock franco con alteración del nivel de conciencia.',3:'Una pérdida del 50% sería incompatible con estas constantes.'},
  trampa:'Se espera a que caiga la presión para considerar que hay hemorragia significativa. En el joven la presión se mantiene hasta que la pérdida es grande: lo precoz es la taquicardia con presión de pulso estrecha.',
  dx:['Shock hemorrágico clase II','Shock clase III','Contusión'],
  obj:'Clasificar el shock hemorrágico y saber cuándo hace falta sangre.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con el ATLS, 10.ª ed.'
},
'MIR-2021-M199': {
  esp:'Emergencias', tema:'Urgencias', sub:'Edema agudo de pulmón',
  clave:'La CPAP recluta alvéolos colapsados y aumenta la capacidad residual funcional. Y de paso REDUCE precarga y poscarga.',
  exp:'La presión positiva continua actúa por dos vías en el edema agudo de pulmón. En el pulmón, mantiene abiertos los alvéolos que estaban colapsados o inundados y aumenta la *capacidad residual funcional*, lo que mejora la relación ventilación-perfusión, corrige la hipoxemia y reduce el trabajo respiratorio. En el corazón, el aumento de la presión intratorácica *disminuye* el retorno venoso —es decir, la precarga— y reduce la presión transmural del ventrículo izquierdo, que equivale a bajar la poscarga. Ambos efectos son favorables, y por eso la ventilación no invasiva reduce la necesidad de intubación y la mortalidad en el edema agudo cardiogénico.',
  no:{1:'La hipotensión es precisamente una precaución para la presión positiva, porque al reducir la precarga puede agravarla.',2:'El efecto sobre la precarga es el contrario: la disminuye.',3:'La presión transmural del ventrículo izquierdo también disminuye, no aumenta.'},
  trampa:'Se memoriza que la CPAP mejora la oxigenación sin entender el efecto hemodinámico. Ese efecto es el que explica por qué ayuda tanto en el edema cardiogénico y por qué hay que vigilar al paciente hipotenso.',
  dx:['Edema agudo de pulmón cardiogénico','Insuficiencia cardíaca descompensada','Fibrilación auricular rápida'],
  obj:'Explicar los efectos pulmonares y hemodinámicos de la CPAP.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con la guía ESC sobre insuficiencia cardíaca aguda.'
},
'MIR-2021-M53': {
  esp:'Emergencias', tema:'Urgencias', sub:'Toxíndromes',
  clave:'Miosis con sialorrea, lagrimeo, vómitos, diarrea y sudoración: síndrome colinérgico. Atropina.',
  exp:'El conjunto descrito es un *toxíndrome colinérgico muscarínico*, y se recuerda con el acrónimo inglés SLUDGE: salivación, lagrimeo, urgencia urinaria, diarrea, molestias gastrointestinales y emesis, a los que se suman la miosis, la bradicardia y, sobre todo, la broncorrea. Se produce por inhibición de la acetilcolinesterasa, habitualmente por organofosforados o carbamatos. La *atropina* es el tratamiento: bloquea los receptores muscarínicos y se titula hasta secar las secreciones bronquiales, que es el objetivo terapéutico y no la frecuencia cardíaca ni el tamaño pupilar. Se completa con pralidoxima, que reactiva la enzima antes de que el enlace envejezca.',
  no:{0:'La naloxona revierte opioides, que producen miosis pero con depresión respiratoria y piel seca, sin sialorrea ni diarrea.',1:'El flumazenilo revierte benzodiacepinas, que no producen síndrome colinérgico.',2:'La ciproheptadina se emplea en el síndrome serotoninérgico, que cursa con clonus, hiperreflexia e hipertermia.'},
  trampa:'La miosis hace pensar en opioides. Lo que separa ambos cuadros es la secreción: el colinérgico moja, el opioide no.',
  dx:['Intoxicación por organofosforados','Intoxicación por opioides','Síndrome serotoninérgico'],
  obj:'Reconocer el síndrome colinérgico y su antídoto.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con Goldfrank, Toxicologic Emergencies.'
},
'MIR-2022-M182': {
  esp:'Bioética', tema:'Bioética', sub:'Consentimiento por representación',
  clave:'Paciente inconsciente: el consentimiento lo otorgan sus representantes, y puede ser verbal en la urgencia.',
  exp:'Cuando el paciente no puede decidir por su estado, el consentimiento se obtiene *por representación*: lo otorgan sus familiares o allegados, tras recibir información suficiente. En la urgencia no se exige que ese consentimiento sea escrito ni que se firme un formulario: puede ser verbal, y lo que corresponde es dejar constancia en la historia clínica. Conviene añadir un matiz que las opciones incorrectas explotan: si no se logra contactar con nadie y existe riesgo inmediato para la vida, la intervención se realiza igualmente, amparada por la excepción de urgencia vital. Es decir, la imposibilidad de obtener el consentimiento nunca puede paralizar una cirugía que salva la vida.',
  no:{0:'El consentimiento verbal del representante sí es válido en la urgencia.',1:'La imposibilidad de contactar con la familia no impide intervenir ante riesgo vital.',3:'La firma del documento no es un requisito imprescindible en la situación de urgencia.'},
  trampa:'Se convierte el formulario firmado en un requisito absoluto. El consentimiento es un proceso de información, no un papel, y la urgencia vital es su excepción legal.',
  dx:['Laceración esplénica','Politraumatismo'],
  obj:'Aplicar el consentimiento por representación en la urgencia.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con la normativa de autonomía del paciente y códigos deontológicos.'
},
'MIR-2022-M186': {
  esp:'Medicina Familiar', tema:'Medicina legal', sub:'Certificación de la muerte',
  clave:'Muerte por traumatismo: es una muerte violenta. No se firma certificado ordinario, se emite parte de lesiones y se comunica al juzgado.',
  exp:'La causa de la muerte es un hematoma epidural secundario a un traumatismo craneal, de modo que se trata de una *muerte violenta* —de causa externa—, aunque el mecanismo sea una caída casual y no haya intención de terceros. En estas muertes el médico no puede firmar el certificado ordinario de defunción: la competencia pasa a la autoridad judicial, que ordenará la autopsia si lo considera. Lo que sí debe cumplimentar el facultativo es el *parte de lesiones*, que es el documento por el que se comunica al juzgado la existencia de lesiones de posible origen violento, y su emisión es obligatoria.',
  no:{0:'El certificado ordinario no procede en una muerte de causa externa.',1:'El boletín estadístico se cumplimenta a partir del certificado, que aquí no se emite.',2:'Lo mismo: sin certificado ordinario no hay boletín estadístico en la vía habitual.'},
  trampa:'Se firma el certificado porque la caída fue casual y no hubo terceros implicados. Lo que define la muerte violenta es la causa externa, no la intencionalidad.',
  dx:['Hematoma epidural agudo','Muerte violenta accidental'],
  obj:'Distinguir la muerte natural de la violenta a efectos de certificación.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con la normativa de medicina legal y códigos deontológicos.'
},

/* ==================== EPIDEMIOLOGÍA ==================== */
'MIR-2014-M189': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'Odds ratio',
  clave:'Tabla: casos 20 expuestos y 100 no; controles 20 y 400. OR = (20×400)/(100×20) = 4.',
  exp:'El odds ratio se calcula con el producto cruzado de la tabla de dos por dos. Entre los *casos*, 20 estaban expuestos y los 100 restantes no. Entre los *controles*, 20 expuestos y 400 no expuestos. El cociente de productos cruzados es 20 por 400 dividido entre 100 por 20, es decir 8.000 entre 2.000, que da 4. Interpretado: la exposición al factor X es cuatro veces más frecuente entre los enfermos que entre los sanos, lo que sugiere una asociación positiva. En un estudio de casos y controles el odds ratio es la medida propia, porque al seleccionar a los sujetos por su enfermedad no puede calcularse la incidencia y por tanto tampoco el riesgo relativo.',
  no:{0:'Un OR de 1 significaría que la exposición se distribuye igual en ambos grupos, y no es el caso.',1:'2 no resulta del producto cruzado con estos datos.',3:'6 tampoco se obtiene de esta tabla.',4:'8 correspondería al numerador sin dividir por el denominador.'},
  trampa:'Se compara el número de expuestos —20 en ambos grupos— y se concluye que no hay asociación. Los grupos tienen tamaños distintos: lo que importa es la proporción dentro de cada uno.',
  dx:[],
  obj:'Calcular el odds ratio con el producto cruzado.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Gordis, Epidemiología.'
},
'MIR-2014-M190': {
  esp:'Epidemiología', tema:'Diseños de estudio', sub:'Ensayos de no inferioridad',
  clave:'El intervalo baja hasta -59, que cruza el margen de -50: no se puede concluir no inferioridad, ni superioridad. No concluyente.',
  exp:'En un ensayo de no inferioridad se fija de antemano un margen que representa la máxima diferencia clínicamente tolerable: aquí, -50 mL. La conclusión de no inferioridad exige que *todo* el intervalo de confianza quede por encima de ese margen. En este estudio el intervalo va de -59 a +67, de modo que incluye valores peores que el límite tolerado: no puede afirmarse que el nuevo inhalador sea no inferior. Tampoco puede afirmarse superioridad, porque el intervalo incluye el cero. El resultado, por tanto, no permite concluir nada en ninguna dirección: el estudio es no concluyente, habitualmente por falta de precisión.',
  no:{0:'No hay superioridad: el intervalo incluye el cero.',1:'La pregunta se plantea sobre el fármaco experimental, y el diseño no permite invertir la conclusión.',3:'La equivalencia exige un diseño distinto, con márgenes en ambas direcciones y un intervalo que quede dentro de ellos.',4:'No puede concluirse no inferioridad porque el intervalo cruza el margen preestablecido.'},
  trampa:'Se mira la estimación puntual, que es favorable —8 mL a favor del nuevo—, y se concluye no inferioridad. Lo que decide es dónde queda el extremo inferior del intervalo respecto al margen.',
  dx:[],
  obj:'Interpretar un ensayo de no inferioridad según el margen y el intervalo.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con la declaración CONSORT para ensayos de no inferioridad.'
},
'MIR-2014-M196': {
  esp:'Epidemiología', tema:'Diseños de estudio', sub:'Ensayo clínico',
  clave:'El investigador asigna la intervención de forma aleatoria: eso es un ensayo clínico.',
  exp:'El rasgo que define un estudio como *experimental* es que el investigador asigna la exposición o la intervención, y aquí se asignan de forma aleatorizada tres alternativas terapéuticas —antibiótico oral, gotas óticas y observación— a tres grupos de niños. Eso es un ensayo clínico aleatorizado, que además incluye un brazo de no tratamiento como control. En los estudios *observacionales*, por el contrario, el investigador se limita a registrar lo que ocurre: en la cohorte sigue a expuestos y no expuestos hacia adelante, y en el transversal mide todo en un mismo momento.',
  no:{0:'En la cohorte la exposición no la asigna el investigador: se observa.',1:'Los estudios postautorización de seguimiento prospectivo son observacionales.',2:'Los ligados a la autorización son estudios observacionales exigidos por la agencia reguladora.',4:'El transversal mide exposición y desenlace simultáneamente, sin seguimiento.'},
  trampa:'La palabra prospectivo hace pensar en cohorte. Prospectivo describe la dirección temporal; lo que separa experimental de observacional es quién decide la intervención.',
  dx:[],
  obj:'Identificar el diseño experimental por la asignación de la intervención.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Gordis, Epidemiología.'
},
'MIR-2014-M197': {
  esp:'Epidemiología', tema:'Diseños de estudio', sub:'Fuentes de datos',
  clave:'Solo hay vacunados y solo se registran los diagnósticos que generan ingreso: únicamente cabe un descriptivo de incidencia de infarto.',
  exp:'La pregunta pone a prueba si se sabe qué permite y qué no permite una fuente de datos. Los registros disponibles tienen dos límites: solo contienen *personas vacunadas*, de modo que no hay grupo de comparación no expuesto, y solo recogen los diagnósticos de *alta hospitalaria*, de modo que solo se captan los eventos que motivan un ingreso. Con eso puede describirse la incidencia de un evento que sí genera ingreso, como el infarto agudo de miocardio, en el periodo posterior a la vacunación: es un análisis descriptivo, sin comparación.',
  no:{0:'Una cohorte analítica exige un grupo no vacunado con el que comparar, y el registro solo incluye vacunados.',2:'La fiebre no motiva habitualmente un ingreso hospitalario, de modo que no queda recogida en el registro de altas.',3:'Un ensayo clínico requiere que el investigador asigne la vacuna, y aquí solo se dispone de registros ya generados.',4:'Un caso y controles necesitaría controles sin la enfermedad y con información de exposición comparable, incluidos no vacunados.'},
  trampa:'Se propone el diseño más potente sin comprobar si los datos lo permiten. La pregunta no es qué estudio sería mejor, sino cuál es posible con lo que hay.',
  dx:[],
  obj:'Ajustar el diseño a las limitaciones de la fuente de datos.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con manuales de farmacoepidemiología.'
},

/* ==================== FARMACOLOGÍA ==================== */
'MIR-2022-P125': {
  esp:'Farmacología', tema:'Farmacología clínica', sub:'Déficit de G6PD',
  clave:'La rasburicasa genera peróxido de hidrógeno: en el déficit de G6PD provoca hemólisis grave. Está contraindicada.',
  exp:'La glucosa-6-fosfato deshidrogenasa es la enzima que mantiene el glutatión reducido y protege al hematíe del estrés oxidativo. La *rasburicasa*, que se usa para prevenir y tratar el síndrome de lisis tumoral degradando el ácido úrico, genera peróxido de hidrógeno como producto de esa reacción: en un paciente sin defensa antioxidante produce hemólisis grave y metahemoglobinemia, por lo que está formalmente contraindicada y obliga a descartar el déficit antes de usarla en poblaciones de riesgo. La lista de desencadenantes clásicos incluye además las sulfamidas, la primaquina, la nitrofurantoína, el azul de metileno y las habas.',
  no:{0:'El meropenem no es oxidante ni desencadena hemólisis en el déficit de G6PD.',1:'El tramadol no figura entre los fármacos oxidantes contraindicados.',3:'El bisoprolol es un betabloqueante sin relación con el estrés oxidativo del hematíe.'},
  trampa:'Se piensa solo en los antipalúdicos y las sulfamidas. En el paciente oncohematológico, la rasburicasa es el fármaco de riesgo, y precisamente el que más se usa en ese contexto.',
  dx:['Déficit de G6PD','Anemia hemolítica farmacológica','Síndrome de lisis tumoral'],
  obj:'Reconocer los fármacos oxidantes contraindicados en el déficit de G6PD.',
  ref:'Examen MIR 2022 de farmacia, Ministerio de Sanidad de España. Contrastado con fichas técnicas y Harrison, 21.ª ed.'
},
'MIR-2022-P132': {
  esp:'Medicina Interna', tema:'Nutrición', sub:'Déficit de vitamina K',
  clave:'Las naftoquinonas son la vitamina K. Sin duodeno y sin flora intestinal, falta y aparece el sangrado.',
  exp:'La vitamina K pertenece químicamente al grupo de las *naftoquinonas*, y ese es el término que la pregunta usa para comprobar si se reconoce. En este paciente confluyen los dos mecanismos que la agotan: la resección duodenal y de la vía biliar reduce la absorción de las vitaminas liposolubles, que necesitan sales biliares y superficie intestinal proximal, y los ciclos repetidos de antibióticos de amplio espectro han eliminado la flora colónica que sintetiza una parte de ella. El resultado es un déficit de los factores II, VII, IX y X, con alargamiento del tiempo de protrombina y sangrado, que aquí se manifiesta como hematuria.',
  no:{1:'El tocoferol es la vitamina E, cuyo déficit produce neuropatía y hemólisis, no trombopenia.',2:'La vitamina B12 se absorbe en el ÍLEON terminal unida al factor intrínseco, no en el duodeno, y su déficit da anemia megaloblástica y clínica neurológica.',3:'La púrpura de Schönlein-Henoch es una vasculitis por IgA, sin relación con las vitaminas liposolubles.'},
  trampa:'El nombre químico despista. Naftoquinona es vitamina K; tocoferol es vitamina E; retinol es vitamina A; calciferol es vitamina D.',
  dx:['Déficit de vitamina K','Déficit de vitamina B12','Coagulopatía'],
  obj:'Relacionar la anatomía de la absorción con el déficit vitamínico.',
  ref:'Examen MIR 2022 de farmacia, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., nutrición y coagulación.'
},
'MIR-2022-P140': {
  esp:'Medicina Interna', tema:'Nutrición', sub:'Síndrome de realimentación',
  clave:'Desnutrido que empieza a alimentarse y al día siguiente baja el fósforo, el potasio, el magnesio y la B1: realimentación.',
  exp:'El síndrome de realimentación aparece al reintroducir nutrientes en un organismo con los depósitos agotados. La carga de hidratos de carbono eleva la insulina, que empuja *fósforo, potasio y magnesio* al interior de las células, donde se consumen para producir ATP, y su concentración plasmática cae de forma brusca. La *tiamina* se agota además porque es cofactor del metabolismo de la glucosa. La consecuencia clínica puede ser grave: arritmias, insuficiencia cardíaca, debilidad muscular respiratoria y encefalopatía de Wernicke. Se previene comenzando con un aporte calórico bajo, subiéndolo despacio, administrando tiamina *antes* que la glucosa y controlando los electrolitos a diario en los primeros días.',
  no:{0:'Las nutriciones parenterales estandarizadas sí incluyen electrolitos; el problema no es de composición sino de desplazamiento intracelular.',2:'El perfil descrito es característico de la realimentación, no de una interacción farmacológica.',3:'No es una situación esperable ni banal: es un síndrome definido y potencialmente mortal.'},
  trampa:'Se atribuye la alteración a una nutrición mal formulada. El descenso es real y se produce dentro de la célula: hay que reponer y frenar el aporte, no cambiar la bolsa.',
  dx:['Síndrome de realimentación','Desnutrición','Íleo paralítico'],
  obj:'Reconocer y prevenir el síndrome de realimentación.',
  ref:'Examen MIR 2022 de farmacia, Ministerio de Sanidad de España. Contrastado con las guías NICE sobre soporte nutricional.'
},
'MIR-2022-P147': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Nefritis intersticial aguda',
  clave:'Deterioro renal brusco tras 10 días de omeprazol, con leucocituria y nitritos NEGATIVOS: nefritis intersticial.',
  exp:'La nefritis intersticial aguda es una reacción de hipersensibilidad del intersticio renal a un fármaco, y los inhibidores de la bomba de protones son hoy una de sus causas más frecuentes, junto con los antiinflamatorios y varios antibióticos. Se sospecha ante un deterioro rápido del filtrado glomerular —aquí de 100 a 40 mL/min en un mes— temporalmente ligado a la introducción del fármaco. El sedimento muestra leucocituria *estéril*, con nitritos negativos, que es el dato que la separa de la infección urinaria, y puede haber eosinofiluria, hematuria y una proteinuria leve, siempre por debajo del rango nefrótico. La tríada clásica de fiebre, exantema y eosinofilia aparece en una minoría, sobre todo con los inhibidores de bomba. El tratamiento es retirar el fármaco.',
  no:{1:'La nefropatía diabética se instaura en años, con proteinuria progresiva, no en un mes.',2:'El síndrome nefrótico exige proteinuria mayor de 3,5 g al día, y aquí es solo ligera.',3:'Los nitritos negativos y la ausencia de fiebre alejan la infección urinaria.'},
  trampa:'La leucocituria hace diagnosticar una infección urinaria y prescribir antibiótico. Con nitritos negativos y deterioro renal agudo, hay que mirar la lista de fármacos.',
  dx:['Nefritis intersticial aguda','Infección urinaria','Nefropatía diabética'],
  obj:'Sospechar nefritis intersticial ante leucocituria estéril y deterioro renal.',
  ref:'Examen MIR 2022 de farmacia, Ministerio de Sanidad de España. Contrastado con las guías KDIGO y Harrison, 21.ª ed.'
},

/* ==================== GINECOLOGÍA Y OBSTETRICIA ==================== */
'MIR-2019-M67': {
  esp:'Ginecología y Obstetricia', tema:'Ginecología', sub:'Esterilidad y ovario poliquístico',
  clave:'Fracaso del clomifeno tras seis ciclos: se sube de escalón a gonadotropinas, no se sube la dosis.',
  exp:'El tratamiento de la esterilidad anovulatoria del ovario poliquístico es escalonado. El primer escalón son la pérdida de peso y los inductores orales de la ovulación —letrozol o citrato de clomifeno—; hoy el letrozol se considera superior en tasas de nacido vivo. Cuando fracasan tras unos seis ciclos, como aquí, se pasa al siguiente escalón: *gonadotropinas* con FSH, con o sin inseminación artificial, bajo control ecográfico estricto para evitar la gestación múltiple y el síndrome de hiperestimulación ovárica. La fecundación in vitro se reserva para el fracaso de este escalón o para cuando coexisten otros factores de esterilidad, que el enunciado descarta expresamente.',
  no:{1:'Subir el clomifeno y prolongarlo seis meses más no aporta beneficio tras el fracaso y consume tiempo reproductivo.',2:'La fecundación in vitro es un salto injustificado sin haber probado las gonadotropinas y sin otros factores asociados.',3:'La metformina es coadyuvante, sobre todo si hay alteración del metabolismo de la glucosa, pero no es el tratamiento de la anovulación.'},
  trampa:'Se insiste con el mismo fármaco a más dosis. Tras seis ciclos sin respuesta, lo que hay que cambiar es el escalón, no la dosis.',
  dx:['Esterilidad anovulatoria','Síndrome de ovario poliquístico'],
  obj:'Escalonar el tratamiento de la esterilidad anovulatoria.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con la guía internacional sobre SOP y las guías de la ASRM.'
},
'MIR-2020-M105': {
  esp:'Emergencias', tema:'Urgencias', sub:'Anafilaxia en paciente betabloqueado',
  clave:'Anafilaxia en una paciente que toma PROPRANOLOL: la adrenalina puede no funcionar. Se añade glucagón.',
  exp:'El cuadro es una anafilaxia clara: tras el metamizol aparecen en treinta minutos disnea, ronquera por edema laríngeo, erupción, síntomas digestivos e hipotensión con desaturación. El tratamiento arranca siempre con adrenalina intramuscular. Pero hay un detalle en los antecedentes que cambia el manejo: la paciente toma *propranolol*, un betabloqueante no selectivo que ocupa los mismos receptores sobre los que actúa la adrenalina y puede hacerla ineficaz, dando lugar a una anafilaxia refractaria. En esa situación se administra *glucagón*, que aumenta el AMP cíclico intracelular por una vía independiente del receptor beta y restaura la respuesta. Los antihistamínicos y los corticoides son coadyuvantes.',
  no:{0:'La adrenalina sola puede resultar insuficiente por el bloqueo beta.',1:'Falta el glucagón, que es lo que resuelve la refractariedad en el paciente betabloqueado.',2:'El corticoide no aporta en la fase aguda y sigue faltando el glucagón.'},
  trampa:'Se lee el antecedente de migraña y se pasa por alto el propranolol. Ese fármaco es exactamente lo que hace especial esta anafilaxia.',
  dx:['Anafilaxia por metamizol','Anafilaxia refractaria','Angioedema'],
  obj:'Manejar la anafilaxia en el paciente betabloqueado.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con las guías de la EAACI y de la World Allergy Organization.'
},
'MIR-2020-M153': {
  esp:'Ginecología y Obstetricia', tema:'Ginecología', sub:'Prolapso de órganos pélvicos',
  clave:'Hay dos defectos —rectocele y descenso de la cúpula—: la cirugía tiene que corregir los dos y fijarlos al sacro.',
  exp:'El caso describe un prolapso de dos compartimentos: un rectocele de grado III, con la maniobra digital vaginal para poder defecar que es su síntoma más característico, y un descenso de la cúpula vaginal tras la histerectomía previa. Corregir solo el tabique rectovaginal dejaría sin resolver el descenso apical, que es el defecto de fondo y la causa más frecuente de recidiva. La *colporrectosacropexia con malla* suspende la cúpula y la pared posterior al promontorio sacro, restaurando el eje del suelo pélvico y tratando ambos defectos a la vez.',
  no:{1:'La técnica transanal de Khubchandani corrige el rectocele desde el recto, pero no aborda el descenso de la cúpula.',2:'La vía transperineal con malla tampoco resuelve el defecto apical.',3:'La esfinteroplastia trata la incontinencia fecal por lesión esfinteriana, que no es el problema aquí.'},
  trampa:'Se opera el síntoma más aparente, el rectocele. Si no se corrige el descenso apical, el prolapso recidiva.',
  dx:['Rectocele grado III','Prolapso de cúpula vaginal','Incontinencia fecal'],
  obj:'Corregir todos los compartimentos afectados en el prolapso.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con Williams Ginecología, 4.ª ed., y guías de suelo pélvico.'
},
'MIR-2020-M64': {
  esp:'Ginecología y Obstetricia', tema:'Ginecología', sub:'Enfermedad trofoblástica',
  clave:'Proliferación del trofoblasto INTERMEDIO: tumor del sitio placentario.',
  exp:'La histología es la que decide. La enfermedad trofoblástica gestacional agrupa entidades que se distinguen por el tipo de trofoblasto proliferante: la mola y el coriocarcinoma derivan del cito y del sinciciotrofoblasto, mientras que el *tumor del lecho o sitio placentario* deriva del trofoblasto *intermedio*, que es el que en el embarazo normal invade el endometrio para anclar la placenta. Ese origen explica sus dos particularidades: produce poca beta-hCG en comparación con el coriocarcinoma, y por eso el marcador puede ser engañosamente bajo; y responde mal a la quimioterapia, de modo que su tratamiento es fundamentalmente quirúrgico. Suele aparecer meses o años después de una gestación previa, como aquí, con sangrado persistente.',
  no:{1:'La hiperplasia atípica es una lesión del endometrio glandular, no del trofoblasto.',2:'El pólipo endometrial no muestra proliferación trofoblástica.',3:'El coriocarcinoma prolifera a expensas de cito y sinciciotrofoblasto, con beta-hCG muy elevada.'},
  trampa:'Se piensa en coriocarcinoma ante cualquier proliferación trofoblástica tras una gestación. El tipo celular concreto cambia el pronóstico y el tratamiento.',
  dx:['Tumor del sitio placentario','Coriocarcinoma','Mola invasiva','Pólipo endometrial'],
  obj:'Diferenciar las formas de enfermedad trofoblástica por el tipo celular.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con Williams Ginecología, 4.ª ed., y boletines del ACOG.'
},
'MIR-2020-M69': {
  esp:'Ginecología y Obstetricia', tema:'Ginecología', sub:'Dismenorrea primaria',
  clave:'Dismenorrea primaria: antiinflamatorios primero, y anticonceptivos si no basta. La edad no los contraindica.',
  exp:'El cuadro —dolor que empieza con la menstruación, se irradia a la zona lumbar, se acompaña de náuseas y diarrea y desaparece al terminar el sangrado, con exploración y analítica normales— es una dismenorrea *primaria*, mediada por la liberación de prostaglandinas endometriales. Precisamente por ese mecanismo, los *antiinflamatorios no esteroideos* son el tratamiento de primera línea: inhiben la síntesis de prostaglandinas y son más eficaces cuanto antes se inician, incluso el día previo. Las molestias digestivas forman parte del propio cuadro y no los contraindican. Si no hay respuesta suficiente, el segundo escalón son los anticonceptivos hormonales, que no están contraindicados por la edad y son una opción perfectamente válida en la adolescente.',
  no:{0:'El origen no es digestivo: las náuseas y la diarrea son efecto de las mismas prostaglandinas.',1:'Los antiinflamatorios son precisamente el tratamiento de elección, y la clínica digestiva no los excluye.',2:'La edad no contraindica los anticonceptivos hormonales.'},
  trampa:'Se normaliza el dolor menstrual incapacitante que hace faltar a clase. Si interfiere en la vida diaria, hay que tratarlo, y si no responde, replantear el diagnóstico y descartar endometriosis.',
  dx:['Dismenorrea primaria','Endometriosis','Dismenorrea secundaria'],
  obj:'Escalonar el tratamiento de la dismenorrea primaria.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con Williams Ginecología, 4.ª ed., y boletines del ACOG.'
},
'MIR-2021-M155': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Microangiopatía trombótica',
  clave:'Esquistocitos, Coombs NEGATIVO, plaquetas muy bajas, coagulación NORMAL y clínica neurológica: púrpura trombótica trombocitopénica.',
  exp:'Cuatro datos encajan la pieza. Hay hemólisis —anemia con reticulocitos altos, LDH muy elevada y haptoglobina indetectable—, pero el *Coombs directo es negativo*, lo que descarta el mecanismo autoinmune y señala una hemólisis *mecánica*, confirmada por los esquistocitos del frotis. Hay trombocitopenia grave por consumo, pero la coagulación es *normal*, lo que descarta la coagulación intravascular diseminada. Y hay clínica neurológica. El conjunto define la púrpura trombótica trombocitopénica, causada por déficit de ADAMTS13, que deja circular multímeros gigantes de von Willebrand y produce trombos plaquetarios en la microcirculación. Es una urgencia: el tratamiento es la plasmaféresis, y las plaquetas están contraindicadas salvo hemorragia vital.',
  no:{0:'La anemia hemolítica autoinmune tendría el Coombs directo positivo y no produce esquistocitos ni trombopenia de consumo.',2:'El síndrome de Evans combina dos citopenias inmunes, con Coombs positivo.',3:'La trombocitopenia inmune es aislada: no produce anemia hemolítica ni esquistocitos.'},
  trampa:'Se transfunden plaquetas por la cifra alarmante de 7.000. En esta enfermedad son combustible para más trombos y pueden empeorar el cuadro.',
  dx:['Púrpura trombótica trombocitopénica','Síndrome hemolítico urémico','CID','Síndrome de Evans'],
  obj:'Diferenciar la hemólisis mecánica de la autoinmune por el Coombs.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con las guías ISTH sobre púrpura trombótica trombocitopénica.'
},

/* ==================== MEDICINA INTERNA ==================== */
'MIR-2013-M162': {
  esp:'Cirugía', tema:'Anestesiología', sub:'Toxicidad por anestésicos locales',
  clave:'Procedimiento largo con infiltraciones repetidas y clínica neurológica progresiva: toxicidad sistémica por anestésico local.',
  exp:'La toxicidad sistémica por anestésicos locales se produce cuando la dosis acumulada supera el umbral seguro, algo favorecido por los procedimientos largos con infiltraciones repetidas, como aquí. La clínica sigue una secuencia característica: primero síntomas neurológicos *sensitivos* —mareo, acúfenos, alteraciones visuales, sabor metálico, parestesias periorales—, después excitación con agitación, desorientación, temblores y convulsiones, y por último depresión del sistema nervioso central y toxicidad cardiovascular, que es la fase mortal. Reconocerla en la fase inicial es lo que evita llegar a la convulsión: se suspende la administración, se administra una benzodiacepina y se vigila estrechamente. Hoy el tratamiento incluye además emulsión lipídica intravenosa al 20%, que secuestra el anestésico.',
  no:{1:'Un ictus no explicaría los síntomas auditivos y visuales bilaterales ni los temblores distales, y anticoagular sin descartar hemorragia sería peligroso.',2:'Administrar más anestésico local ante una toxicidad por anestésico local es exactamente lo que agravaría el cuadro.',3:'Un síndrome coronario no produce este cuadro neurológico progresivo.',4:'La cetoacidosis se instaura en horas o días, no en cuarenta y cinco minutos de quirófano.'},
  trampa:'Se atribuye la agitación al dolor y se infiltra más anestésico. Ese gesto, que parece razonable, es el que puede llevar a la convulsión y al colapso cardiovascular.',
  dx:['Toxicidad sistémica por anestésicos locales','Ictus','Crisis de ansiedad'],
  obj:'Reconocer la secuencia clínica de la toxicidad por anestésicos locales.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las recomendaciones de la ASRA sobre toxicidad por anestésicos locales.'
},
'MIR-2013-M163': {
  esp:'Medicina Interna', tema:'Cuidados paliativos', sub:'Disnea refractaria',
  clave:'En la disnea refractaria del paciente terminal, la morfina es el tratamiento. Si no basta, se sube la dosis.',
  exp:'La morfina es el fármaco de elección para la disnea refractaria en cuidados paliativos: actúa sobre la percepción central de la disnea y sobre la respuesta ventilatoria, y su beneficio está bien demostrado. Aquí el paciente sigue con 34 respiraciones por minuto e inquietud pocas horas después de iniciarla, de modo que la dosis es insuficiente y lo que corresponde es *titularla al alza* según la respuesta. El temor a que deprima la respiración está infundado cuando se titula de forma gradual sobre la clínica; ese temor es la razón principal por la que la disnea terminal se infratrata. El objetivo del tratamiento aquí no es corregir la saturación —la linfangitis carcinomatosa no es reversible— sino aliviar el sufrimiento.',
  no:{0:'Retirarla deja al paciente con disnea intensa sin tratamiento eficaz.',2:'Subir el oxígeno no alivia la disnea refractaria cuando la causa es una linfangitis carcinomatosa avanzada.',3:'La escopolamina trata los estertores por secreciones, no la disnea.',4:'La risperidona se emplea en el delirium, y aquí la inquietud es expresión de la disnea.'},
  trampa:'Se retira o se limita la morfina por miedo a la depresión respiratoria. Titulada sobre la clínica, es segura, y no darla condena al paciente a morir ahogado.',
  dx:['Disnea refractaria','Linfangitis carcinomatosa','Delirium'],
  obj:'Titular la morfina en la disnea refractaria del paciente terminal.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con guías de cuidados paliativos y recomendaciones de la OMS.'
},
'MIR-2013-M165': {
  esp:'Medicina Familiar', tema:'Atención integral', sub:'Úlceras por presión',
  clave:'La úlcera por presión se cura quitando la presión. Todo lo demás es secundario.',
  exp:'El nombre de la lesión contiene su tratamiento: si la presión persiste, ninguna cura local va a cerrar la úlcera. La primera prioridad son por tanto los *cambios posturales* cada dos horas, junto con las superficies especiales de manejo de la presión y el manejo de la humedad —que aquí es evidente, porque la paciente está sobre una almohadilla húmeda—, la nutrición adecuada y el desbridamiento del tejido no viable. El exudado verdoso no significa por sí mismo infección: todas las úlceras están colonizadas, y el diagnóstico de infección es clínico, por celulitis, dolor, olor o signos sistémicos, ninguno de los cuales aparece aquí, con piel perilesional normal y paciente afebril.',
  no:{0:'No hay datos de infección: la piel circundante es normal y la paciente está afebril.',1:'Cultivar el exudado superficial solo aísla la flora colonizadora y lleva a antibióticos innecesarios.',2:'Las curas locales son necesarias pero secundarias si no se elimina la presión.',4:'Sondar a una paciente incontinente añade riesgo de infección urinaria; el manejo de la humedad se hace con otras medidas.'},
  trampa:'El exudado verde hace pensar en infección y se pide cultivo o se dan antibióticos. La colonización es universal; la infección se diagnostica por la clínica.',
  dx:['Úlcera por presión grado III','Infección de úlcera','Osteomielitis'],
  obj:'Priorizar la eliminación de la presión en la úlcera por presión.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías EPUAP/NPIAP sobre úlceras por presión.'
},
'MIR-2013-M168': {
  esp:'Medicina Interna', tema:'Oncología', sub:'Cáncer de pulmón',
  clave:'Adenocarcinoma de pulmón avanzado, y más en una no fumadora: es obligado determinar EGFR antes de tratar.',
  exp:'En el carcinoma de pulmón no microcítico de histología no escamosa y estadio avanzado, la determinación de biomarcadores es obligatoria antes de decidir el tratamiento, porque cambia por completo la estrategia. Las mutaciones de *EGFR* son especialmente frecuentes en el adenocarcinoma de mujeres no fumadoras, y cuando están presentes, un inhibidor de tirosina cinasa mejora la supervivencia y la calidad de vida frente a la quimioterapia. Hoy el panel se ha ampliado a ALK, ROS1, BRAF, KRAS G12C, MET y RET, entre otros, además de la expresión de PD-L1 para decidir la inmunoterapia. Tratar sin esa información es renunciar a la opción más eficaz.',
  no:{1:'El gefitinib solo es el tratamiento adecuado si se ha demostrado la mutación: darlo a ciegas es incorrecto.',2:'Las camptotecinas no constituyen el tratamiento estándar de esta enfermedad.',3:'No cualquier quimioterapia es válida: la histología y los biomarcadores determinan el esquema.',4:'Existen factores predictivos bien establecidos, y el EGFR es el ejemplo clásico.'},
  trampa:'Se empieza la quimioterapia sin esperar los biomarcadores por urgencia clínica. Salvo situación de amenaza vital, merece la pena esperar el resultado.',
  dx:['Adenocarcinoma de pulmón estadio IV','Carcinoma escamoso','Carcinoma microcítico'],
  obj:'Determinar biomarcadores antes de tratar el cáncer de pulmón avanzado.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías ESMO y NCCN sobre cáncer de pulmón no microcítico.'
},
'MIR-2013-M169': {
  esp:'Medicina Interna', tema:'Oncología', sub:'Carcinomatosis peritoneal',
  clave:'Ascitis densa y gelatinosa, difícil de aspirar, en una anciana con síndrome constitucional: carcinomatosis por adenocarcinoma mucinoso.',
  exp:'La consistencia del líquido es el dato que resuelve el caso. Una ascitis *gelatinosa y densa*, que cuesta aspirar incluso con aguja gruesa, corresponde a material mucinoso producido por un adenocarcinoma, habitualmente de origen digestivo —apéndice, colon, estómago— o de ovario. La ausencia de implantes visibles en la imagen no descarta nada: la carcinomatosis peritoneal puede ser miliar y quedar por debajo de la resolución de la tomografía, y el diagnóstico se hace con la citología del líquido y, si hace falta, con laparoscopia y biopsia. El síndrome constitucional de meses refuerza el origen neoplásico.',
  no:{0:'La ascitis cirrótica es un trasudado claro y fluido, y el enunciado no describe estigmas de hepatopatía.',1:'La ascitis quilosa es lechosa por su contenido en triglicéridos, no gelatinosa.',2:'La tuberculosis peritoneal produce un exudado linfocitario con ADA elevada, y suele cursar con fiebre.',4:'La pericarditis constrictiva daría un trasudado con signos de congestión venosa sistémica e ingurgitación yugular.'},
  trampa:'Se descarta la neoplasia porque la imagen no muestra masas ni implantes. La carcinomatosis miliar puede no verse: hay que estudiar el líquido.',
  dx:['Carcinomatosis peritoneal','Ascitis cirrótica','Tuberculosis peritoneal','Ascitis quilosa'],
  obj:'Orientar la etiología de la ascitis por sus características macroscópicas.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías AASLD sobre ascitis.'
},
'MIR-2013-M172': {
  esp:'Emergencias', tema:'Urgencias', sub:'Golpe de calor',
  clave:'Golpe de calor con 41 °C: el cerebelo es la estructura más sensible al calor, y la ataxia es su secuela característica.',
  exp:'El caso es un golpe de calor clásico: agosto, sur de España, y un paciente con esquizofrenia en tratamiento, porque los antipsicóticos alteran la termorregulación central y la sudoración. Hay temperatura de 41 °C, alteración del nivel de conciencia con Glasgow de 5 y una CPK de 30.000 por rabdomiólisis. De las afirmaciones, la correcta señala una particularidad neuropatológica bien establecida: las células de Purkinje del *cerebelo* son especialmente vulnerables a la hipertermia, y por eso la ataxia cerebelosa persistente es la secuela neurológica más característica de los supervivientes de un golpe de calor.',
  no:{0:'La inmersión en agua helada es eficaz en el golpe de calor por esfuerzo del joven, pero en el clásico dificulta la monitorización y la reanimación, y no es el método más seguro en este paciente.',1:'Con un Glasgow de 5, taquipnea de 45 y saturación del 75% es imprescindible asegurar la vía aérea y ventilar.',2:'La afectación hepática es FRECUENTE en el golpe de calor, no rara: puede llegar al fallo hepático agudo.',3:'La dopamina a dosis altas produce vasoconstricción esplácnica y cutánea, lo que dificulta la disipación del calor: no es el vasopresor de elección aquí.'},
  trampa:'Se administran antitérmicos para bajar la temperatura. En la hipertermia ambiental no funcionan, porque el punto de ajuste hipotalámico no está elevado: hay que enfriar físicamente.',
  dx:['Golpe de calor','Síndrome neuroléptico maligno','Sepsis','Meningitis'],
  obj:'Reconocer el golpe de calor y sus complicaciones orgánicas.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., enfermedades por calor.'
},
'MIR-2013-M175': {
  esp:'Pediatría', tema:'Pediatría general', sub:'Gastroenteritis aguda',
  clave:'Rehidratación oral con solución de baja osmolalidad y seguir con la alimentación habitual. Nada de dieta astringente ni de ayuno.',
  exp:'La gastroenteritis aguda del niño previamente sano, sin sangre en las heces y con deshidratación leve, se trata con *solución de rehidratación oral de baja osmolalidad* —con 60 a 75 mEq/L de sodio, que es la formulación recomendada en nuestro medio y reduce el volumen de las deposiciones y los vómitos frente a la fórmula clásica— y con el mantenimiento de la *alimentación habitual*. Prolongar el ayuno o imponer dietas astringentes retrasa la recuperación de la mucosa y empeora el estado nutricional, y no aporta ningún beneficio. Se añade zinc en los contextos donde está recomendado.',
  no:{0:'La vía intravenosa y el ayuno prolongado no están indicados en una deshidratación leve con tolerancia oral conservada.',2:'La mayoría de las gastroenteritis son virales: el antibiótico no aporta y genera resistencias.',3:'La fórmula sin lactosa no es necesaria de rutina; se reserva para la intolerancia secundaria demostrada y persistente.',4:'La loperamida está contraindicada en niños por riesgo de íleo, distensión y enmascaramiento de las pérdidas.'},
  trampa:'Se retira la leche y se impone dieta blanda "para que el intestino descanse". Es justo lo contrario de lo recomendado.',
  dx:['Gastroenteritis aguda','Deshidratación leve','Intolerancia a la lactosa'],
  obj:'Aplicar el tratamiento actual de la gastroenteritis infantil.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de la ESPGHAN y de la OMS.'
},
'MIR-2013-M189': {
  esp:'Salud Pública', tema:'Prevención', sub:'Vacunación en el paciente con VIH',
  clave:'Le faltan gripe, neumocócica, meningocócica y hepatitis A. El Td está vigente y la triple vírica ya la tiene.',
  exp:'La respuesta se construye descartando lo que ya está cubierto. El *toxoide tetánico-diftérico* se puso hace 6 años y su refuerzo es cada 10, de modo que está vigente. La *triple vírica* la recibió en la infancia y la adolescencia, con dos dosis documentadas. La *hepatitis B* la tiene desde hace 3 años. Quedan por indicar cuatro: la *gripe estacional*, anual en todo paciente con VIH; la *neumocócica*, por el mayor riesgo de enfermedad invasiva; la *meningocócica tetravalente*, indicada en la infección por VIH; y la *hepatitis A*, recomendada en hombres que tienen sexo con hombres. Con más de 200 CD4 puede además recibir vacunas de virus vivos si las necesitara.',
  no:{1:'Incluye el Td, que está vigente, y omite la hepatitis A.',2:'Omite la hepatitis A, que es una de las indicadas en este perfil.',3:'Incluye el Td innecesario y omite gripe y hepatitis A.',4:'Incluye la triple vírica, que ya recibió con dos dosis, y omite la hepatitis A.'},
  trampa:'Se responde de memoria con el bloque de vacunas del inmunodeprimido sin cotejar lo que el paciente ya tiene. Hay que restar antes de sumar.',
  dx:['Infección por VIH asintomática'],
  obj:'Individualizar el calendario vacunal según antecedentes y riesgo.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las recomendaciones del ACIP y guías de vacunación en el paciente con VIH.'
},
'MIR-2013-M190': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'Medidas de dispersión',
  clave:'Dos grupos pueden tener la misma media y distribuciones completamente distintas: hace falta la dispersión.',
  exp:'La media es una medida de *tendencia central* y por sí sola no describe una distribución. Dos grupos pueden compartir exactamente la misma media de 52 años y ser muy diferentes: uno con edades concentradas entre 50 y 54, y otro con la mitad de participantes de 30 y la otra mitad de 74. Para juzgar si son comparables hace falta al menos una medida de *dispersión* —la desviación típica o el rango intercuartílico—, y en la práctica se comparan además las distribuciones completas. Este es el motivo por el que la tabla de características basales de todo ensayo clínico presenta siempre media y desviación típica, no solo la media.',
  no:{0:'Compartir la media no garantiza que las distribuciones sean iguales.',1:'La aleatorización puede perfectamente producir medias idénticas: no es un indicio de mal diseño.',3:'La comparabilidad de los grupos es esencial: si difieren en variables pronósticas, el resultado queda confundido.',4:'Coincidir en media, mediana y moda sugiere simetría, pero sigue sin informar de la dispersión.'},
  trampa:'Se acepta la comparabilidad al ver medias iguales. La media esconde la forma de la distribución.',
  dx:[],
  obj:'Comprender por qué la media necesita ir acompañada de dispersión.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Altman, Practical Statistics for Medical Research.'
},
'MIR-2013-M191': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'Tamaño muestral',
  clave:'Para estimar una MEDIA hacen falta la confianza, la precisión y la VARIABILIDAD. La media poblacional no se necesita: es justo lo que se quiere estimar.',
  exp:'El cálculo del tamaño muestral para estimar una media requiere tres elementos: el nivel de confianza, que da el valor de Z y aquí es del 95%; la precisión deseada, que aquí es de 1 unidad de índice de masa corporal; y una estimación de la *variabilidad* del parámetro en la población, es decir, la varianza o la desviación típica, que se obtiene de estudios previos o de una muestra piloto. Lo que no hace falta es la media poblacional: es precisamente el valor desconocido que el estudio pretende estimar. Y el tamaño de la población tampoco es necesario salvo que sea pequeña y se aplique la corrección para poblaciones finitas.',
  no:{0:'La media poblacional es el parámetro a estimar: si se conociera, no haría falta el estudio.',2:'La desviación típica sí es necesaria, pero la media no.',3:'Ni la media ni el tamaño de la población son imprescindibles en el caso general.',4:'La desviación típica es correcta, pero el tamaño de la población no es necesario aquí.'},
  trampa:'Se pide la media porque aparece en la fórmula del intervalo. En la fórmula del tamaño muestral lo que entra es la variabilidad, no el valor central.',
  dx:[],
  obj:'Identificar los parámetros necesarios para calcular el tamaño muestral.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Altman, Practical Statistics for Medical Research.'
},
'MIR-2013-M207': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'Elección de pruebas diagnósticas',
  clave:'El tratamiento es tóxico y caro: hay que evitar falsos positivos, y eso lo da la ESPECIFICIDAD.',
  exp:'La elección entre dos pruebas depende de cuál sea el error más costoso. Aquí el tratamiento produce efectos adversos importantes y tiene un coste muy elevado, de modo que tratar a un sano —un *falso positivo*— es especialmente dañino. La prueba que minimiza los falsos positivos es la más *específica*, y un resultado positivo en ella permite confirmar con seguridad: la prueba B, con especificidad del 99%, es la adecuada para establecer el diagnóstico. Es la aplicación de la regla SpPin: prueba muy específica con resultado positivo, diagnóstico confirmado. En la práctica clínica, la estrategia habitual combina ambas: se criba con la sensible, que no deja escapar enfermos, y se confirma con la específica antes de tratar.',
  no:{0:'La prueba A tiene especificidad del 60%: producirá MÁS falsos positivos, no menos.',1:'La mayor sensibilidad de A la hace buena para cribar y descartar, no para confirmar antes de un tratamiento tóxico.',2:'La prueba B produce MENOS falsos positivos, no más: ese es su valor.',3:'La prueba A, por su alta sensibilidad, produce menos falsos negativos, no más.'},
  trampa:'Se elige la prueba más sensible porque la enfermedad es grave. La gravedad justifica cribar con la sensible, pero antes de un tratamiento tóxico hay que confirmar con la específica.',
  dx:[],
  obj:'Elegir la prueba según el coste del falso positivo o del falso negativo.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Fletcher, Epidemiología Clínica.'
},
'MIR-2013-M210': {
  esp:'Medicina Interna', tema:'Oncología', sub:'Cáncer de orofaringe',
  clave:'Carcinoma de orofaringe en un paciente poco bebedor: hay que determinar el VPH, porque cambia el pronóstico y el estadio.',
  exp:'El carcinoma escamoso de orofaringe tiene dos entidades distintas bajo un mismo nombre. La forma clásica se asocia a tabaco y alcohol, aparece en pacientes mayores y tiene peor pronóstico. La forma asociada al *virus del papiloma humano* —determinada en la práctica mediante la sobreexpresión de p16— afecta a pacientes más jóvenes, con menor exposición a tóxicos, y tiene un pronóstico marcadamente mejor y mayor respuesta al tratamiento. La distinción no es académica: en la clasificación TNM vigente ambos tumores se estadifican con sistemas *diferentes*, de modo que el mismo cT1N2b corresponde a estadios distintos según el VPH, y eso condiciona la decisión del comité. Este paciente, de 45 años, fumador moderado y no bebedor, encaja en el perfil de la forma asociada al virus.',
  no:{0:'Helicobacter pylori se relaciona con el cáncer gástrico y el linfoma MALT.',1:'El herpes simple tipo 2 no tiene papel oncogénico establecido en la orofaringe.',3:'El virus de Epstein-Barr se asocia al carcinoma de nasofaringe, no de orofaringe.',4:'El citomegalovirus no tiene relación oncogénica con estos tumores.'},
  trampa:'Se confunde con el virus de Epstein-Barr, que también es un virus asociado a tumores de cabeza y cuello. La localización los separa: Epstein-Barr en nasofaringe, papiloma en orofaringe.',
  dx:['Carcinoma de orofaringe asociado a VPH','Carcinoma de nasofaringe','Carcinoma asociado a tabaco y alcohol'],
  obj:'Determinar el VPH en el carcinoma de orofaringe y conocer su implicación.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías NCCN y la clasificación TNM de la AJCC.'
},

/* ==================== PEDIATRÍA ==================== */
'MIR-2019-M91': {
  esp:'Pediatría', tema:'Traumatología', sub:'Escoliosis idiopática',
  clave:'Curva de 28° que progresó 10° en seis meses, premenárquica y Risser 2: queda mucho crecimiento. Corsé.',
  exp:'En la escoliosis idiopática del adolescente la decisión depende de dos variables: la magnitud de la curva y el potencial de crecimiento restante. Por debajo de 25 grados se observa; entre 25 y 45 grados con crecimiento pendiente se indica *corsé*; y por encima de 45 a 50 grados se plantea la artrodesis. El crecimiento restante se estima con el signo de Risser —que valora la osificación de la cresta ilíaca de 0 a 5— y con el estado menstrual: un Risser 2 en una niña premenárquica indica que queda mucho crecimiento por delante y, por tanto, alto riesgo de progresión. La progresión demostrada de 10 grados en seis meses confirma ese riesgo y decide el tratamiento.',
  no:{0:'La natación es saludable pero no detiene la progresión de la curva.',1:'La reeducación postural mejora la función y el dolor, pero no modifica la evolución de la escoliosis estructurada.',3:'La artrodesis se reserva para curvas por encima de 45 a 50 grados o con fracaso del corsé.'},
  trampa:'Se recomienda natación o gimnasia como tratamiento. Ninguna corrige la curva: lo único que frena la progresión en este rango es el corsé.',
  dx:['Escoliosis idiopática del adolescente','Escoliosis congénita','Cifosis de Scheuermann'],
  obj:'Indicar el corsé según ángulo de Cobb y crecimiento restante.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con Nelson, 22.ª ed., y guías de la SRS.'
},
'MIR-2020-M75': {
  esp:'Pediatría', tema:'Pediatría general', sub:'Maltrato infantil',
  clave:'Hemorragias retinianas + hematoma subdural + fractura costal POSTERIOR en un lactante: maltrato.',
  exp:'Esta tríada es prácticamente diagnóstica del traumatismo craneal por maltrato. Las *hemorragias retinianas* extensas se producen por los mecanismos de aceleración y desaceleración rotacional del zarandeo. El *hematoma subdural* procede de la rotura de las venas puente por el mismo mecanismo. Y la *fractura costal posterior* tiene una especificidad muy alta: se produce al comprimir el tórax con las manos, sujetando al lactante, y no se genera con las caídas domésticas habituales. La ausencia de un mecanismo traumático coherente que explique las lesiones completa el cuadro. La obligación del médico es proteger al niño, documentar de forma objetiva, completar el estudio con serie ósea y coagulación, y notificar a las autoridades.',
  no:{1:'Una caída de la cuna no genera hemorragias retinianas extensas ni fracturas costales posteriores.',2:'Una coagulopatía debe descartarse siempre, pero no explica la fractura costal ni el mecanismo.',3:'Un aspirado de médula ósea no produce hemorragias retinianas ni hematoma subdural.'},
  trampa:'Se busca una explicación médica alternativa para evitar el conflicto de la sospecha. Descartar coagulopatía es correcto; no notificar por incomodidad, no.',
  dx:['Traumatismo craneal por maltrato','Coagulopatía','Accidente doméstico'],
  obj:'Reconocer la tríada del traumatismo craneal abusivo.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con las declaraciones de la American Academy of Pediatrics sobre traumatismo craneal abusivo.'
},
'MIR-2020-M82': {
  esp:'Pediatría', tema:'Pediatría general', sub:'Exantemas',
  clave:'Cara de bofetón y exantema reticular en encaje: eritema infeccioso por parvovirus B19.',
  exp:'El eritema infeccioso, o quinta enfermedad, está causado por el parvovirus B19 y tiene dos rasgos que lo identifican sin necesidad de pruebas. El primero es el eritema malar intenso y confluyente que respeta el surco nasogeniano y la zona perioral, descrito como *cara de bofetón*. El segundo es el exantema del tronco y las extremidades con patrón *reticular o en encaje*, que aparece después y puede reaparecer durante semanas con el calor, el ejercicio o el sol. La niña está afebril y en buen estado, que es lo habitual en esta fase. Dos precauciones importantes: el virus produce crisis aplásicas en pacientes con anemias hemolíticas, e hidropesía fetal si infecta a una gestante no inmune.',
  no:{0:'La varicela cursa con vesículas en distintos estadios de evolución y prurito intenso.',1:'La rubéola da un exantema maculopapular difuso con adenopatías retroauriculares y occipitales prominentes.',3:'En el exantema súbito el exantema aparece justo cuando CEDE una fiebre alta de tres días, en lactantes.'},
  trampa:'Se busca fiebre para diagnosticar un exantema infeccioso. En el eritema infeccioso, cuando aparece el exantema el niño ya está afebril y ha dejado de contagiar.',
  dx:['Eritema infeccioso','Rubéola','Escarlatina','Exantema súbito'],
  obj:'Reconocer el eritema infeccioso por sus dos fases características.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con Nelson, 22.ª ed.'
},
'MIR-2021-M83': {
  esp:'Pediatría', tema:'Pediatría general', sub:'Enfermedad de Kawasaki',
  clave:'Fiebre de 6 días con conjuntivitis, labios y lengua, exantema, manos y pies, y adenopatía: cinco criterios.',
  exp:'La enfermedad de Kawasaki se diagnostica clínicamente con fiebre de cinco días o más junto con al menos cuatro de estos cinco criterios: conjuntivitis bilateral no exudativa, cambios en labios y cavidad oral —labios rojos y agrietados, lengua aframbuesada—, exantema polimorfo, cambios en extremidades con eritema y edema de manos y pies, y adenopatía cervical mayor de 1,5 cm, característicamente unilateral. Esta niña los cumple todos. Es una vasculitis de mediano vaso y su complicación temida son los *aneurismas coronarios*, que aparecen en una proporción importante de los niños no tratados. El tratamiento con inmunoglobulina intravenosa y aspirina, administrado *antes del décimo día*, reduce drásticamente ese riesgo. Hay que realizar ecocardiografía.',
  no:{1:'El sarampión cursa con tos, coriza y conjuntivitis —las tres "C"— y manchas de Koplik, con exantema cefalocaudal.',2:'La rubéola es más leve, con adenopatías retroauriculares y sin edema de manos y pies.',3:'La escarlatina da exantema en papel de lija y lengua aframbuesada, pero no conjuntivitis ni edema de extremidades.'},
  trampa:'Se espera a que la fiebre ceda sola. Pasado el décimo día, la inmunoglobulina pierde buena parte de su capacidad de proteger las coronarias.',
  dx:['Enfermedad de Kawasaki','Sarampión','Escarlatina','Síndrome de shock tóxico'],
  obj:'Aplicar los criterios de Kawasaki y tratar dentro de la ventana.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con la declaración científica de la American Heart Association sobre enfermedad de Kawasaki.'
},
'MIR-2021-M85': {
  esp:'Pediatría', tema:'Infectología', sub:'Meningococemia',
  clave:'Se pide lo que NO se hace. Con plaquetas de 12.000, protrombina del 35% e hipotensión, la punción lumbar está contraindicada.',
  exp:'El cuadro es una sepsis meningocócica con coagulación intravascular diseminada: fiebre, hipotensión, petequias y equimosis, trombocitopenia grave y actividad de protrombina del 35%. En esa situación la punción lumbar está *contraindicada* por dos motivos: la coagulopatía y la trombopenia grave hacen que exista riesgo de hematoma espinal, y la inestabilidad hemodinámica hace peligrosa la propia manipulación. Lo prioritario es la reanimación con fluidos, la extracción de hemocultivo y la administración inmediata de antibiótico —cefotaxima o ceftriaxona—, que nunca debe retrasarse por una prueba. La punción se difiere hasta que el paciente se estabilice y corrija la coagulación; el diagnóstico microbiológico puede obtenerse igualmente por hemocultivo y por PCR en sangre.',
  no:{0:'La cefotaxima es exactamente el tratamiento indicado y no debe retrasarse.',2:'El hemocultivo es imprescindible y se extrae antes del antibiótico, sin demorarlo.',3:'La fluidoterapia es prioritaria en el shock séptico.'},
  trampa:'Se hace la punción porque hay signos meníngeos y parece obligatoria para el diagnóstico. El antibiótico salva la vida; la punción puede esperar y aquí, además, es peligrosa.',
  dx:['Sepsis meningocócica con CID','Meningitis bacteriana','Púrpura fulminante'],
  obj:'Conocer las contraindicaciones de la punción lumbar.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con las guías IDSA sobre meningitis bacteriana y Nelson, 22.ª ed.'
},
'MIR-2021-M90': {
  esp:'Pediatría', tema:'Pediatría general', sub:'Bronquiolitis',
  clave:'Bronquiolitis con saturación del 89%: lo que necesita es oxígeno. Nada más ha demostrado servir.',
  exp:'La bronquiolitis aguda del lactante se trata con medidas de *soporte*, y en este caso la saturación del 89% indica hipoxemia que requiere oxígeno suplementario, además de asegurar la hidratación y la permeabilidad nasal. Ninguna de las otras opciones ha demostrado modificar el curso: los broncodilatadores no funcionan porque la obstrucción se debe a moco, edema y detritus celulares y no a broncoespasmo; los corticoides no han mostrado beneficio en el primer episodio típico; y la ribavirina, que sí tiene actividad frente al virus respiratorio sincitial, tiene una relación beneficio-riesgo desfavorable y se reserva para situaciones muy excepcionales en inmunodeprimidos graves.',
  no:{0:'La ribavirina no está indicada en la bronquiolitis del lactante inmunocompetente.',1:'Los broncodilatadores no han demostrado beneficio y no se recomiendan de rutina.',3:'Los corticoides no modifican el curso del primer episodio típico.'},
  trampa:'Se trata como si fuera asma por la presencia de sibilancias. El mecanismo de la obstrucción es distinto, y por eso el broncodilatador no funciona igual.',
  dx:['Bronquiolitis aguda','Asma del lactante','Neumonía'],
  obj:'Aplicar el tratamiento de soporte de la bronquiolitis.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con la guía de la American Academy of Pediatrics sobre bronquiolitis.'
},

/* ==================== PSIQUIATRÍA ==================== */
'MIR-2018-M188': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Tratamiento de la depresión',
  clave:'Se pide lo que NO se plantea. El metilfenidato es un psicoestimulante, no un tratamiento de la depresión.',
  exp:'El metilfenidato es un psicoestimulante indicado en el trastorno por déficit de atención y en la narcolepsia. En la depresión no forma parte del tratamiento estándar: su uso se limita a situaciones muy concretas y de indicación especializada, como la astenia en cuidados paliativos, y en un paciente con *ansiedad importante* como el descrito puede empeorarla claramente. Las otras tres opciones son razonables: la paroxetina es un inhibidor selectivo de la recaptación de serotonina, de primera línea; la amitriptilina es un tricíclico con efecto sedante útil cuando predominan el insomnio y la ansiedad, aunque con más efectos anticolinérgicos; y una benzodiacepina puede emplearse como coadyuvante los primeros días, siempre de forma limitada en el tiempo.',
  no:{0:'El alprazolam es aceptable como coadyuvante transitorio para la ansiedad, aunque no debe cronificarse.',1:'La paroxetina es un antidepresivo de primera línea.',3:'La amitriptilina es un antidepresivo eficaz, útil si se busca además efecto sedante.'},
  trampa:'La astenia hace pensar en un estimulante. En la depresión con ansiedad, un psicoestimulante puede agravar precisamente el síntoma más molesto.',
  dx:['Episodio depresivo con ansiedad','Trastorno de ansiedad generalizada'],
  obj:'Reconocer qué fármacos no tienen lugar en el tratamiento de la depresión.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías NICE sobre depresión en adultos.'
},
'MIR-2018-M92': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Anorexia nerviosa',
  clave:'Realimentación: la insulina mete fósforo y potasio en la célula. Hipofosforemia e hipopotasemia.',
  exp:'Al reintroducir la alimentación en una paciente gravemente desnutrida, la carga de hidratos de carbono eleva la insulina, que desplaza *fósforo, potasio y magnesio* al interior de las células, donde se consumen en la producción de ATP. Como los depósitos estaban agotados, la concentración plasmática cae bruscamente. La hipofosforemia es el hallazgo más característico y el responsable de las complicaciones graves: insuficiencia cardíaca, arritmias, debilidad de la musculatura respiratoria y encefalopatía. El caso lo ilustra bien: la disnea y los edemas que aparecen a los pocos días de iniciar la renutrición son manifestación de esa sobrecarga y de la disfunción cardíaca. Se previene renutriendo despacio, con tiamina y control diario de electrolitos.',
  no:{0:'El patrón es el contrario: el potasio baja, no sube.',1:'El fósforo y el magnesio descienden, no ascienden.',3:'La hiponatremia puede coexistir, pero el perfil característico del síndrome es el descenso de fósforo y potasio.'},
  trampa:'Se alimenta con generosidad a la paciente muy desnutrida, que parece lo más lógico. Renutrir deprisa puede matar: la lentitud aquí es tratamiento.',
  dx:['Síndrome de realimentación','Anorexia nerviosa','Insuficiencia cardíaca'],
  obj:'Reconocer el perfil bioquímico del síndrome de realimentación.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías NICE sobre soporte nutricional.'
},
'MIR-2019-M89': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Intoxicación por litio',
  clave:'Litemia de 4,1 con neurotoxicidad grave: hemodiálisis. El litio se dializa muy bien.',
  exp:'El litio es una molécula pequeña, no se une a proteínas plasmáticas y tiene un volumen de distribución bajo: tres características que lo convierten en uno de los tóxicos más dializables. Ante una litemia por encima de 4 mEq/L, o por encima de 2,5 con clínica neurológica grave o insuficiencia renal, la *hemodiálisis* es el tratamiento de elección. Los signos de neurotoxicidad progresan del temblor grosero a la ataxia, la disartria, las mioclonías y las fasciculaciones, y de ahí a las convulsiones y el coma. No existe antídoto. La hidratación con suero salino acompaña siempre y favorece la eliminación renal, pero por sí sola es insuficiente en la intoxicación grave.',
  no:{0:'La aminofilina aumenta ligeramente el aclaramiento renal del litio, pero es marginal y no sustituye a la diálisis.',1:'El carbón activado NO adsorbe el litio, por ser un ion metálico.',3:'La diuresis forzada no ha demostrado eficacia suficiente y añade riesgo de sobrecarga y de alteraciones electrolíticas.'},
  trampa:'Se administra carbón activado por reflejo ante cualquier intoxicación. No adsorbe metales: en el litio y en el hierro es inútil.',
  dx:['Intoxicación aguda por litio','Síndrome serotoninérgico','Encefalopatía metabólica'],
  obj:'Indicar la hemodiálisis en la intoxicación grave por litio.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con las recomendaciones EXTRIP y Goldfrank, Toxicologic Emergencies.'
},
'MIR-2020-M83': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Efectos extrapiramidales',
  clave:'Inquietud motora que obliga a moverse y no deja estar sentado: acatisia. Se trata con betabloqueante.',
  exp:'La acatisia es un efecto extrapiramidal precoz de los antipsicóticos y consiste en una sensación subjetiva de inquietud interna con necesidad imperiosa de moverse, que impide permanecer sentado o quieto. Es importante reconocerla porque se confunde con agitación psicótica o con ansiedad, y si se responde subiendo la dosis del antipsicótico el cuadro empeora; además se asocia a mayor riesgo de abandono del tratamiento y de conducta suicida. El tratamiento de elección son los *betabloqueantes*, habitualmente propranolol, junto con la reducción de la dosis del antipsicótico o el cambio a uno con menor perfil extrapiramidal. Conviene distinguirla del resto: la distonía aguda responde a anticolinérgicos, el parkinsonismo también, la discinesia tardía es de aparición tardía y difícil manejo, y el síndrome neuroléptico maligno cursa con fiebre y rigidez.',
  no:{0:'La bromocriptina se emplea en el síndrome neuroléptico maligno, que cursa con fiebre, rigidez y elevación de la creatinquinasa.',2:'El dantroleno también es tratamiento del síndrome neuroléptico maligno, no de la acatisia.',3:'Los anticolinérgicos son útiles en la distonía aguda y en el parkinsonismo farmacológico, pero poco eficaces en la acatisia.'},
  trampa:'Se interpreta como agitación psicótica y se aumenta el antipsicótico. Eso agrava la acatisia y empeora la adherencia.',
  dx:['Acatisia','Distonía aguda','Parkinsonismo farmacológico','Síndrome neuroléptico maligno'],
  obj:'Reconocer la acatisia y diferenciarla de otros efectos extrapiramidales.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con Goodman y Gilman y guías de manejo de efectos adversos de antipsicóticos.'
},

/* ==================== SALUD PÚBLICA ==================== */
'MIR-2020-M45': {
  esp:'Salud Pública', tema:'Prevención', sub:'Consejo breve',
  clave:'Las cinco aes son Averiguar, Aconsejar, Acordar, Ayudar y Asegurar. "Aumentar" no está.',
  exp:'El modelo de las cinco aes estructura el consejo breve sobre conductas de riesgo en la consulta. *Averiguar*: preguntar de forma sistemática por el consumo o la conducta. *Aconsejar*: dar un consejo claro, específico y personalizado para abandonarla. *Acordar*: pactar de forma colaborativa los objetivos y el plan, según la disposición al cambio. *Ayudar*: ofrecer apoyo concreto, farmacológico o conductual, para lograrlo. Y *Asegurar* el seguimiento: fijar contactos posteriores para sostener el cambio y prevenir la recaída. La opción de "aumentar la percepción de riesgo" describe una intervención razonable, pero no es uno de los cinco pasos del modelo.',
  no:{0:'Averiguar es el primer paso del modelo.',2:'Aconsejar es el segundo.',3:'Acordar es el tercero.'},
  trampa:'Se responde por lo que suena razonable en educación para la salud. La pregunta es por un modelo concreto con cinco pasos definidos.',
  dx:[],
  obj:'Conocer el modelo de las cinco aes para el consejo breve.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con las recomendaciones de la USPSTF y guías de cesación tabáquica.'
}

});
