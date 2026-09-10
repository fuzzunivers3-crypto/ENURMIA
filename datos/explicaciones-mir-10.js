/* ============================================================
   EXPLICACIONES — lote 10  (52 casos clínicos)
   Años 2013 a 2022. MIR 2017 de medicina excluido por cuarentena.
   Las 52 respuestas oficiales verificadas y correctas.
   Varias entradas corrigen ademas la especialidad/tema que el
   clasificador automatico habia asignado mal.
   ============================================================ */
window.EXPLICACIONES = Object.assign(window.EXPLICACIONES || {}, {

/* ==================== EPIDEMIOLOGÍA Y BIOESTADÍSTICA ==================== */
'MIR-2014-M198': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'NNT y NNH',
  clave:'NNH de 50: hay que tratar a 50 personas para causar un daño atribuible al fármaco.',
  exp:'El número necesario para dañar es el inverso del *incremento absoluto de riesgo*. Aquí la incidencia de hemorragia grave pasa del 1% al 3%, de modo que el exceso atribuible al fármaco es del 2%, y su inverso es 50. La lectura correcta es por tanto: por cada 50 personas tratadas con el anticoagulante se produce un caso adicional de hemorragia grave que no habría ocurrido sin el fármaco. Es la medida gemela del número necesario a tratar y se interpreta igual, pero en la dirección del daño: cuanto *más pequeño* es el número, más peligroso es el fármaco. Junto al NNT permite ponerle cifras al balance entre beneficio y riesgo antes de prescribir.',
  no:{0:'50 no es un recuento de casos: es un cociente.',1:'El NNH no expresa la diferencia en número de casos entre grupos.',2:'Eso sería un riesgo relativo de 50, y aquí el riesgo relativo es 3.',4:'50 de cada 100 sería una incidencia del 50%, muy lejos del 3% observado.'},
  trampa:'Se lee el 50 como si fuera un número de pacientes afectados. Es el tamaño del grupo que hay que exponer para que aparezca UN daño.',
  dx:[],
  obj:'Calcular e interpretar el NNH a partir del riesgo absoluto.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Fletcher, Epidemiología Clínica.'
},
'MIR-2014-M199': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'Metaanálisis',
  clave:'RR 1,35 con intervalo de 1,15 a 1,50, todo por encima de 1: diferencia significativa a favor de la heparina.',
  exp:'La significación estadística de un riesgo relativo se lee mirando si su intervalo de confianza incluye el valor nulo, que para un cociente es el *1*. Aquí el intervalo va de 1,15 a 1,50 y queda íntegramente por encima de 1, de modo que la diferencia es significativa: el nuevo fármaco aumenta el riesgo de infarto, o dicho al revés, la heparina tiene un riesgo significativamente menor. La p de heterogeneidad de 0,95 indica que los quince estudios son consistentes entre sí, lo que *refuerza* la confianza en el resultado combinado en lugar de restarle valor.',
  no:{0:'La ausencia de heterogeneidad refuerza la validez del resultado combinado, no lo hace inconcluyente.',1:'El riesgo no es similar: el intervalo excluye el 1.',2:'El intervalo está por encima de 1, de modo que sí puede descartarse cualquier reducción del riesgo.',3:'El 15 y el 50 por ciento son los límites del riesgo RELATIVO, no del absoluto, que aquí es del 2,8%.'},
  trampa:'Se confunde el intervalo del riesgo relativo con un incremento absoluto. El salto real es del 8% al 10,8%: menos alarmante que un "50% más".',
  dx:[],
  obj:'Leer la significación y la heterogeneidad en un metaanálisis.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con el manual Cochrane de revisiones sistemáticas.'
},
'MIR-2015-M142': {
  esp:'Medicina Interna', tema:'Reumatología', sub:'Artritis por pirofosfato',
  clave:'Cristales romboidales con birrefringencia DÉBILMENTE POSITIVA y condrocalcinosis: pseudogota. El alopurinol no pinta nada aquí.',
  exp:'Los dos hallazgos que fijan el diagnóstico son la morfología de los cristales y el sentido de la birrefringencia. El pirofosfato cálcico da cristales *romboidales o cilíndricos* con birrefringencia *débilmente positiva*; el urato monosódico de la gota da cristales *en aguja* con birrefringencia *intensamente negativa*. Aquí, además, la radiografía muestra depósitos en el menisco: condrocalcinosis. Como se trata de depósito de calcio y no de ácido úrico, el alopurinol —que actúa inhibiendo la xantina oxidasa y bajando la uricemia— no previene nada: es la afirmación falsa. Lo que sí es correcto es artrocentesis con antiinflamatorios, y cultivar siempre el líquido, porque una artritis séptica puede coexistir con cristales y 30.000 células con neutrofilia obligan a descartarla.',
  no:{0:'La artrocentesis evacuadora con antiinflamatorios es el tratamiento inicial correcto.',1:'Cultivar el líquido es obligado: la presencia de cristales no excluye una artritis séptica.',3:'El diagnóstico de pseudogota es efectivamente el más probable.'},
  trampa:'Se aplica al calcio el tratamiento del ácido úrico. Solo la gota úrica se previene con hipouricemiantes.',
  dx:['Artritis por pirofosfato cálcico','Gota','Artritis séptica'],
  obj:'Distinguir pseudogota de gota por los cristales y su tratamiento.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías EULAR sobre pirofosfato cálcico.'
},
'MIR-2015-M191': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'NNT',
  clave:'NNT = 1 dividido entre la reducción absoluta del riesgo. Si la reducción es del 20%, el NNT es 5.',
  exp:'El número necesario a tratar es el inverso de la *reducción absoluta del riesgo*: uno dividido entre 0,20 da 5. Es decir, hay que tratar a cinco mujeres con el bifosfonato para evitar una fractura vertebral radiológica que se habría producido con placebo. Conviene añadir el matiz que hace tramposa a esta pregunta: en la literatura, "una reducción del 20%" suele expresar una reducción *relativa*, y en ese caso el NNT dependería además de la incidencia basal y no podría calcularse con el dato dado. El enunciado, al no ofrecer incidencias, obliga a leer el 20% como reducción absoluta, que es la única lectura que permite responder.',
  no:{0:'80 sería el inverso de una reducción del 1,25%.',2:'20 es la cifra del porcentaje, no su inverso.',3:'90 no se obtiene de ningún cálculo con este dato.'},
  trampa:'Se confunde reducción relativa con absoluta. Solo la absoluta permite calcular el NNT directamente.',
  dx:[],
  obj:'Calcular el NNT desde la reducción absoluta del riesgo.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Fletcher, Epidemiología Clínica.'
},

/* ==================== FARMACOLOGÍA ==================== */
'MIR-2022-P194': {
  esp:'Farmacología', tema:'Farmacología clínica', sub:'Terapias con anticuerpos',
  clave:'Fiebre, hipotensión y distrés tras un biespecífico: síndrome de liberación de citocinas.',
  exp:'Los anticuerpos biespecíficos y las células CAR-T actúan acercando el linfocito T a la célula tumoral, y esa activación masiva libera interleucina 6, interferón gamma y factor de necrosis tumoral. El resultado es el *síndrome de liberación de citocinas*: fiebre casi constante, seguida en los casos graves de hipotensión que requiere vasopresores e hipoxia que requiere ventilación, tal como se describe aquí. Aparece en las primeras horas o días tras la administración. El tratamiento es soporte más *tocilizumab*, un anticuerpo anti-receptor de interleucina 6, añadiendo corticoides en los casos graves o refractarios. Su hermano neurológico es el síndrome de neurotoxicidad asociada, que cursa con confusión, afasia y crisis.',
  no:{0:'El síndrome serotoninérgico se produce por fármacos serotoninérgicos y cursa con clonus, hiperreflexia e hipertermia.',2:'El síndrome neuroléptico maligno se debe a antipsicóticos y cursa con rigidez en tubo de plomo y elevación de la creatinquinasa.',3:'El DRESS aparece semanas después del fármaco, con exantema extenso, eosinofilia y afectación hepática.'},
  trampa:'Se interpreta como sepsis y se trata solo con antibióticos. Hay que cubrir la infección, pero sin tocilizumab el cuadro no cede.',
  dx:['Síndrome de liberación de citocinas','Shock séptico','Reacción anafiláctica'],
  obj:'Reconocer y tratar el síndrome de liberación de citocinas.',
  ref:'Examen MIR 2022 de farmacia, Ministerio de Sanidad de España. Contrastado con los criterios ASTCT y guías NCCN sobre toxicidad de inmunoterapia.'
},
'MIR-2022-P67': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Fibrilación auricular',
  clave:'82 años, hipertensa y diabética: CHA2DS2-VASc de al menos 5. Lo primero es anticoagular.',
  exp:'En la fibrilación auricular la decisión que más vidas salva no es la del ritmo ni la de la frecuencia, sino la de *prevenir el ictus*. La escala CHA2DS2-VASc puntúa esta paciente con 2 por la edad de 82 años, 1 por la hipertensión, 1 por la diabetes y 1 por ser mujer: al menos 5 puntos, muy por encima del umbral de indicación. Corresponde por tanto iniciar anticoagulación oral, hoy preferentemente con un anticoagulante de acción directa, valorando el riesgo hemorrágico para corregir los factores modificables —como la hipertensión mal controlada de esta paciente— y no para renunciar al tratamiento. La estrategia de frecuencia frente a ritmo se decide después, y en una paciente apenas sintomática de 82 años suele bastar el control de frecuencia.',
  no:{0:'La opción intercambia las definiciones: frenar la conducción auriculoventricular es control de FRECUENCIA, y revertir a sinusal es control de RITMO.',1:'La edad avanzada no justifica renunciar al tratamiento: es precisamente el mayor factor de riesgo de ictus.',3:'En la fibrilación auricular no hay ondas P: hay ondas f. La afirmación carece de sentido.'},
  trampa:'Se descarta anticoagular por la edad y el riesgo de caídas. En el anciano el beneficio neto de anticoagular es MAYOR, porque su riesgo de ictus es más alto.',
  dx:['Fibrilación auricular no valvular','Flutter auricular'],
  obj:'Priorizar la anticoagulación en la fibrilación auricular de alto riesgo.',
  ref:'Examen MIR 2022 de farmacia, Ministerio de Sanidad de España. Contrastado con las guías ESC sobre fibrilación auricular.'
},

/* ==================== GINECOLOGÍA Y OBSTETRICIA ==================== */
'MIR-2021-M75': {
  esp:'Ginecología y Obstetricia', tema:'Obstetricia', sub:'Síndrome HELLP',
  clave:'HELLP completo con esquistocitos y Doppler con diástole ausente: finalizar ya. La maduración pulmonar ya está puesta.',
  exp:'Coinciden dos indicaciones de finalización inmediata. Por parte materna, un *síndrome HELLP* completo: hemólisis con esquistocitos y LDH de 878, elevación de transaminasas por encima de 200 y plaquetas de 98.000, sobre una preeclampsia con cefalea. Por parte fetal, una restricción de crecimiento en percentil 1 con *ausencia de flujo telediastólico* en la arteria umbilical, que es un signo de deterioro placentario avanzado. El único tratamiento del HELLP es terminar la gestación, y a las 34 semanas el pronóstico neonatal es bueno; además la segunda dosis de corticoides ya se administró hace 24 horas, de modo que la maduración pulmonar está completa y no queda nada que esperar. Se finaliza con sulfato de magnesio para prevenir la eclampsia y antihipertensivos para la tensión.',
  no:{0:'Las plaquetas no van a recuperarse mientras la gestación continúe: el HELLP solo revierte tras el parto.',1:'El manejo domiciliario es inaceptable ante un HELLP con compromiso fetal.',2:'La maduración pulmonar ya está completa: no hay razón para esperar más.'},
  trampa:'Se espera a completar más días de maduración fetal. En el HELLP con esquistocitos y diástole ausente, cada hora de espera aumenta el riesgo de rotura hepática, eclampsia y muerte fetal.',
  dx:['Síndrome HELLP','Preeclampsia grave','Restricción de crecimiento intrauterino'],
  obj:'Indicar la finalización inmediata en el HELLP con compromiso fetal.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con los boletines del ACOG sobre trastornos hipertensivos del embarazo.'
},
'MIR-2022-M72': {
  esp:'Ginecología y Obstetricia', tema:'Obstetricia', sub:'Síndrome antifosfolípido',
  clave:'Síndrome antifosfolípido obstétrico confirmado a las 12 semanas: aspirina más heparina de bajo peso molecular profiláctica.',
  exp:'Se cumplen los criterios: un criterio *clínico* obstétrico —dos abortos de primer trimestre y un parto prematuro antes de la semana 34 por preeclampsia grave— y un criterio *analítico*, con anticuerpos antifosfolípido positivos confirmados en una segunda determinación separada al menos 12 semanas de la primera, requisito que evita confundirlo con las positividades transitorias que siguen a infecciones. En la siguiente gestación el tratamiento estándar es *aspirina a dosis bajas*, iniciada preconcepcionalmente o en el primer trimestre, junto con *heparina de bajo peso molecular a dosis profilácticas* desde que se confirma la gestación, manteniéndola hasta el puerperio. Esta combinación mejora claramente la tasa de recién nacido vivo.',
  no:{1:'Las vitaminas antioxidantes no han demostrado eficacia en la prevención de las complicaciones del síndrome antifosfolípido.',2:'El diagnóstico genético preimplantacional no tiene sentido: el problema es trombótico y materno, no genético embrionario.',3:'El cribado del primer trimestre no procede cuando ya existe un diagnóstico confirmado que indica tratamiento por sí mismo; además la aspirina sola es insuficiente.'},
  trampa:'Se trata solo con aspirina, como en la prevención general de la preeclampsia. En el síndrome antifosfolípido con criterios obstétricos hace falta añadir heparina.',
  dx:['Síndrome antifosfolípido obstétrico','Trombofilia hereditaria','Abortos de repetición'],
  obj:'Aplicar criterios y tratamiento del síndrome antifosfolípido obstétrico.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con los criterios de clasificación de Sídney y guías EULAR.'
},
'MIR-2022-M73': {
  esp:'Ginecología y Obstetricia', tema:'Ginecología', sub:'Insuficiencia ovárica prematura',
  clave:'Menos de 40 años con amenorrea y FSH alta en dos determinaciones: insuficiencia ovárica prematura. Cariotipo y terapia hormonal.',
  exp:'El diagnóstico se establece con amenorrea de al menos cuatro meses antes de los 40 años y *dos determinaciones de FSH en rango menopáusico separadas al menos cuatro semanas*, exactamente lo que aquí se documenta con una FSH de 65 confirmada dos meses después. No hay que esperar los doce meses de amenorrea que definen la menopausia fisiológica. El estudio etiológico incluye *cariotipo* —para descartar síndrome de Turner y sus mosaicismos—, premutación del gen FMR1 y autoinmunidad, sobre todo suprarrenal y tiroidea. Y el tratamiento es la *terapia hormonal sustitutiva*, que aquí no es opcional ni de segunda línea: estas mujeres tienen por delante décadas de hipoestrogenismo y la sustitución protege el hueso y el sistema cardiovascular, manteniéndose al menos hasta la edad natural de la menopausia.',
  no:{0:'La regla de los 12 meses define la menopausia fisiológica, no la insuficiencia ovárica prematura, y no debe retrasar el tratamiento.',2:'Los hábitos saludables son necesarios pero no sustituyen a la terapia hormonal, que aquí es de primera línea.',3:'En la amenorrea hipotalámica la FSH sería baja o normal, no de 65.'},
  trampa:'Se extrapola el miedo a la terapia hormonal de la posmenopausia tardía. En la insuficiencia ovárica prematura el balance se invierte: no tratar es lo perjudicial.',
  dx:['Insuficiencia ovárica prematura','Menopausia fisiológica','Amenorrea hipotalámica'],
  obj:'Diagnosticar y tratar la insuficiencia ovárica prematura.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con la guía ESHRE sobre insuficiencia ovárica prematura.'
},
'MIR-2022-M74': {
  esp:'Ginecología y Obstetricia', tema:'Obstetricia', sub:'Restricción de crecimiento fetal',
  clave:'Restricción con Doppler alterado pero diástole conservada a las 36,5 semanas: inducir a partir de las 37.',
  exp:'La restricción de crecimiento se gradúa según cuánto haya progresado el deterioro placentario, y ese grado marca la semana en que conviene terminar. Aquí hay un peso en percentil 6 con un *índice de pulsatilidad de la arteria umbilical por encima del percentil 95*, es decir, aumento de la resistencia placentaria, pero todavía con flujo diastólico presente, sin la ausencia ni la reversión que obligarían a actuar de inmediato. En esa situación el balance entre el riesgo de seguir dentro de un útero que nutre mal y el riesgo de la prematuridad se inclina hacia el parto *a partir de las 37 semanas*, por inducción, sin necesidad de cesárea sistemática. Que la tensión sea normal descarta preeclampsia asociada.',
  no:{0:'La cesárea inmediata está indicada cuando hay diástole ausente o reversa o alteración del ductus venoso, no en este grado.',1:'Dejar que el parto se inicie espontáneamente prolonga la exposición a una placenta insuficiente.',2:'Llegar a las 40 semanas es claramente excesivo con el Doppler alterado.'},
  trampa:'Se confunde el feto pequeño constitucional con el restringido. Lo que separa a ambos es el Doppler: con Doppler normal se puede esperar; con Doppler alterado, no.',
  dx:['Restricción de crecimiento fetal','Feto pequeño para edad gestacional','Preeclampsia'],
  obj:'Decidir el momento del parto en la restricción de crecimiento según el Doppler.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con las guías ISUOG y del ACOG sobre restricción de crecimiento fetal.'
},
'MIR-2022-M75': {
  esp:'Ginecología y Obstetricia', tema:'Ginecología', sub:'Incontinencia de urgencia',
  clave:'Urgencia miccional y nicturia: vejiga hiperactiva. Se empieza por diario miccional y reeducación vesical.',
  exp:'La pérdida de orina *precedida de urgencia*, con nicturia, define la incontinencia de urgencia por vejiga hiperactiva, distinta de la de esfuerzo, que se escapa con el esfuerzo y sin aviso. El tratamiento inicial es siempre *conservador*: diario miccional durante tres días para objetivar frecuencia, volúmenes e ingesta, reeducación vesical con micciones programadas espaciando progresivamente los intervalos, ejercicios del suelo pélvico y medidas sobre los irritantes vesicales, como reducir cafeína y alcohol. La atrofia vaginal moderada que presenta contribuye a los síntomas y mejora con estrógenos locales. Solo si esto fracasa se pasa a los antimuscarínicos o a mirabegrón.',
  no:{0:'Un cistocele de primer grado es leve y no justifica cirugía, que además no trata la urgencia.',2:'La urodinamia se reserva para casos dudosos, mixtos o refractarios al tratamiento inicial.',3:'Los colinérgicos ESTIMULAN la contracción del detrusor y empeorarían el cuadro: lo indicado, en su caso, serían anticolinérgicos.'},
  trampa:'Se salta al fármaco sin diario miccional. Ese registro reordena por sí solo los hábitos y a menudo evita el tratamiento farmacológico.',
  dx:['Vejiga hiperactiva','Incontinencia de esfuerzo','Incontinencia mixta'],
  obj:'Iniciar el tratamiento conservador de la vejiga hiperactiva.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con las guías NICE y de la EAU sobre incontinencia urinaria.'
},
'MIR-2022-M83': {
  esp:'Pediatría', tema:'Pediatría general', sub:'Invaginación intestinal',
  clave:'Lactante con llanto en crisis, heces en jalea de grosella y masa cilíndrica: invaginación. Se confirma con ECOGRAFÍA.',
  exp:'La tríada clásica es dolor abdominal cólico e intermitente —el niño llora y encoge las piernas y entre las crisis queda pálido y decaído—, heces con sangre y moco en "jalea de grosella", y una masa alargada palpable en el flanco derecho, la morcilla de invaginación. La *ecografía* es la prueba de elección: es rápida, no irradia, se hace a pie de cama y muestra los signos de la diana en el corte transversal y del pseudorriñón en el longitudinal, con una sensibilidad prácticamente del 100%. La tomografía irradia sin aportar y no debe usarse. El tratamiento, si no hay perforación ni inestabilidad, es la reducción con enema de aire o suero bajo control radiológico o ecográfico.',
  no:{0:'La apendicitis es rarísima a los 14 meses y no cursa con crisis de llanto intermitentes ni con heces sanguinolentas.',2:'Además de errar el diagnóstico, la tomografía es una prueba que irradia innecesariamente al lactante.',3:'El diagnóstico es correcto pero la prueba no: la ecografía sustituye a la tomografía en este cuadro.'},
  trampa:'La palidez y el decaimiento entre las crisis hacen pensar en un cuadro neurológico o en una sepsis. Es la fase de calma entre dos ondas de dolor.',
  dx:['Invaginación intestinal','Apendicitis aguda','Divertículo de Meckel','Gastroenteritis'],
  obj:'Diagnosticar la invaginación intestinal con la prueba adecuada.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con Nelson, 22.ª ed.'
},

/* ==================== MEDICINA INTERNA Y ÁREAS AFINES ==================== */
'MIR-2013-M211': {
  esp:'Cirugía', tema:'Cirugía maxilofacial', sub:'Articulación temporomandibular',
  clave:'No puede ABRIR la boca: bloqueo agudo por luxación anterior del menisco. Si no pudiera CERRARLA, sería luxación del cóndilo.',
  exp:'La dirección del bloqueo distingue los dos cuadros. En el *bloqueo articular agudo*, el disco articular se desplaza hacia delante y no se recoloca al abrir: el cóndilo choca contra él y la boca queda *cerrada*, con apertura limitada y dolor intenso. Ocurre en pacientes con desplazamiento discal previo y bruxismo, como esta mujer que usa placa de descarga. En la *luxación del cóndilo* por delante de la eminencia articular ocurre lo contrario: el cóndilo se escapa hacia delante y la boca queda *abierta*, sin poder cerrarla, típicamente tras un bostezo amplio. Las anquilosis, fibrosa u ósea, producen limitación progresiva de meses o años, no de instauración súbita, y suelen seguir a traumatismos o infecciones.',
  no:{0:'La luxación del cóndilo deja la boca abierta y sin poder cerrarla.',2:'La fractura de cóndilo exige un antecedente traumático, que aquí se niega expresamente.',3:'La anquilosis fibrosa limita de forma progresiva, no súbita.',4:'La anquilosis ósea produce una limitación crónica y establecida.'},
  trampa:'Se lee "luxación" y se elige la del cóndilo por ser la más conocida. Hay que fijarse en si la boca queda bloqueada abierta o cerrada.',
  dx:['Bloqueo articular agudo de la ATM','Luxación condilar','Fractura de cóndilo'],
  obj:'Diferenciar el bloqueo discal de la luxación condilar por la clínica.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con manuales de cirugía oral y maxilofacial.'
},
'MIR-2013-M216': {
  esp:'Medicina Interna', tema:'Dermatología', sub:'Balanitis',
  clave:'Pústulas pequeñas MUY PRURIGINOSAS que erosionan glande y prepucio: candidiasis. El herpes duele, no pica.',
  exp:'La clave está en el síntoma y en la extensión. La *balanitis candidiásica* produce pápulas y pústulas pequeñas muy *pruriginosas* que se erosionan, con eritema difuso que afecta al glande y a la cara interna del prepucio, y aparece a los pocos días de la relación. El herpes genital, que es el diagnóstico que primero se sospecha ante lesiones agrupadas tras un contacto de riesgo, cursa con vesículas *dolorosas y agrupadas*, y sobre todo con quemazón, no con picor. La *sífilis* da un chancro único, indoloro e indurado, y tarda unas tres semanas en aparecer, no tres días. El *chancroide* produce úlceras dolorosas de fondo sucio con adenopatía supurada.',
  no:{1:'El chancroide produce úlceras dolorosas y sucias, con adenopatía inguinal supurativa.',2:'La sífilis secundaria aparece semanas o meses después, con exantema palmoplantar generalizado.',3:'La balanitis por Trichomonas es poco frecuente y no da este cuadro pustuloso pruriginoso.',4:'Los dermatofitos afectan a pliegues inguinales con borde descamativo activo, no al glande.'},
  trampa:'Cualquier lesión genital tras un contacto de riesgo se etiqueta de enfermedad de transmisión sexual clásica. El picor intenso y el plazo de tres días señalan la cándida.',
  dx:['Balanitis candidiásica','Herpes genital','Sífilis primaria','Chancroide'],
  obj:'Orientar la balanitis por el tipo de lesión, el síntoma y el plazo.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Fitzpatrick, Dermatología en Medicina General.'
},
'MIR-2013-M219': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Trastornos de la personalidad',
  clave:'Inestabilidad de las relaciones, gestos autolíticos repetidos y sensación de ser incomprendida: trastorno límite.',
  exp:'El trastorno límite de la personalidad se reconoce por un patrón estable de *inestabilidad*: en las relaciones interpersonales, que oscilan entre la idealización y la devaluación; en la imagen de sí misma; y en la afectividad, con reactividad intensa a los acontecimientos, como la crisis desencadenada aquí por una discusión de pareja. A ello se suman la impulsividad, los *gestos autolíticos y las autolesiones repetidas* —el rasgo que más lo distingue del histriónico— y un sentimiento crónico de vacío. Las demandas urgentes reiteradas y la queja de sentirse incomprendida por todos, incluidos los profesionales que la atienden, completan un cuadro muy característico.',
  no:{1:'El trastorno histriónico busca atención con dramatización y seducción, pero sin la autolesión repetida ni el vacío crónico.',2:'La distimia es un ánimo depresivo persistente de al menos dos años, sin esta inestabilidad relacional.',3:'Los trastornos disociativos cursan con alteraciones de la conciencia, la memoria o la identidad.',4:'La despersonalización es la vivencia de extrañeza respecto a uno mismo, y aquí no se describe.'},
  trampa:'Se etiqueta de "paciente demandante" y se cierra el episodio. Estos pacientes tienen un riesgo real de suicidio consumado y necesitan un plan de continuidad asistencial.',
  dx:['Trastorno límite de la personalidad','Trastorno histriónico','Distimia'],
  obj:'Identificar el trastorno límite por su patrón de inestabilidad.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con los criterios DSM-5-TR.'
},
'MIR-2013-M221': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Trastorno bipolar',
  clave:'Episodio maníaco: el bupropión es un ANTIDEPRESIVO y puede virar la manía. Es el menos indicado.',
  exp:'El cuadro es un episodio maníaco de manual: ánimo expansivo, disminución de la necesidad de sueño sin fatiga, verborrea, aceleración del pensamiento, megalomanía, gastos desmedidos y nula conciencia de enfermedad, sobre un antecedente de episodio depresivo que completa un trastorno bipolar. El *bupropión* es un antidepresivo, y aunque el paciente venga precisamente pidiendo ayuda para dejar de fumar, en plena manía es el fármaco menos indicado: los antidepresivos pueden agravar o prolongar el episodio, e incluso precipitar un estado mixto. Lo que corresponde es estabilizar primero con un eutimizante —litio o valproato— o con un antipsicótico atípico, y abordar el tabaquismo cuando el episodio se haya resuelto.',
  no:{1:'El ácido valproico es un eutimizante adecuado en la manía aguda.',2:'El litio es el estabilizador clásico y reduce además el riesgo de suicidio.',3:'La risperidona es eficaz en la manía aguda.',4:'La olanzapina también es un tratamiento de primera línea del episodio maníaco.'},
  trampa:'Se atiende la demanda que trae el paciente —dejar de fumar— sin ver el episodio que tiene delante. Lo urgente aquí es la manía.',
  dx:['Episodio maníaco','Trastorno bipolar tipo I','Trastorno por consumo de sustancias'],
  obj:'Evitar antidepresivos en el episodio maníaco.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías CANMAT/ISBD sobre trastorno bipolar.'
},
'MIR-2013-M227': {
  esp:'Cirugía', tema:'Cirugía torácica', sub:'Hemotórax traumático',
  clave:'Hemotórax postraumático: tubo de drenaje GRUESO y monitorizar. La toracotomía depende del débito.',
  exp:'La abolición del murmullo vesicular con matidez a la percusión y derrame en la radiografía tras un traumatismo de alta energía es un *hemotórax*. El tratamiento inicial es la colocación de un tubo de tórax de *grueso calibre*, que cumple tres funciones: evacua la sangre, reexpande el pulmón —lo que por sí solo suele cohibir el sangrado al aponerse las pleuras— y permite *cuantificar* el débito, que es lo que decide si hace falta cirugía. La toracotomía urgente se indica cuando el drenaje inicial supera aproximadamente 1.500 mL o cuando persiste un débito por encima de 200 mL por hora durante varias horas, o ante inestabilidad hemodinámica; no de entrada. Dejar la sangre dentro conduce a hemotórax coagulado y a empiema.',
  no:{0:'La toracotomía inmediata no está indicada de entrada: se decide por el débito del drenaje.',1:'No actuar es incorrecto: la sangre retenida se organiza y se infecta.',3:'Una aguja fina no evacua sangre ni coágulos y no permite cuantificar el débito.',4:'El quilotórax no aparece de forma inmediata tras un traumatismo, y su tratamiento son los triglicéridos de cadena MEDIA, no la restricción de cadena pesada.'},
  trampa:'Se usa un tubo fino, como en un derrame pleural simple. La sangre coagula y obstruye: el calibre importa.',
  dx:['Hemotórax traumático','Neumotórax','Contusión pulmonar','Quilotórax'],
  obj:'Manejar el hemotórax traumático y saber cuándo operar.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con el ATLS, 10.ª ed.'
},
'MIR-2013-M228': {
  esp:'Medicina Interna', tema:'Reumatología', sub:'Monoartritis aguda',
  clave:'Monoartritis aguda con fiebre y reactantes altos en un joven: artritis séptica hasta que se demuestre lo contrario.',
  exp:'Toda monoartritis aguda con fiebre y elevación de reactantes debe manejarse como *séptica* mientras no se demuestre otra cosa, porque es la única que destruye la articulación en días y la única cuyo retraso diagnóstico cuesta función y a veces la vida. Lo obligado es la artrocentesis urgente con recuento celular, tinción de Gram, cultivo y examen con luz polarizada, e iniciar antibiótico empírico tras la toma de muestras, junto con drenaje articular. En un varón de 19 años sexualmente activo hay que pensar además en *Neisseria gonorrhoeae*, que es la causa más frecuente a esta edad y obliga a tomar muestras uretrales y faríngeas. La gota es excepcional a los 19 años y la artritis reactiva aparece semanas después de una infección genitourinaria o digestiva.',
  no:{0:'La artritis por microcristales es muy rara a los 19 años.',1:'La artritis reactiva aparece dos a cuatro semanas tras la infección desencadenante y no suele dar fiebre alta.',3:'La artritis tuberculosa tiene un curso subagudo o crónico, de semanas o meses.',4:'La artritis reumatoide es poliarticular, simétrica y de instauración progresiva.'},
  trampa:'Se espera al resultado del cultivo para tratar. Se toma la muestra y se empieza el antibiótico: en la artritis séptica el retraso destruye el cartílago.',
  dx:['Artritis séptica','Artritis gonocócica','Artritis por microcristales','Artritis reactiva'],
  obj:'Manejar la monoartritis aguda febril como séptica hasta descartarlo.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías de artritis séptica.'
},
'MIR-2013-M229': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Hipertensión intracraneal idiopática',
  clave:'Mujer joven y obesa con papiledema y diplopía: hipertensión intracraneal idiopática. Confirma la PUNCIÓN LUMBAR midiendo la presión de apertura.',
  exp:'El cuadro reúne todos los rasgos del síndrome: mujer joven con sobrepeso, cefalea, *papiledema bilateral*, oscurecimientos visuales transitorios de segundos y diplopía horizontal por paresia del sexto par, que es un falso signo localizador porque se debe a la propia presión y no a una lesión focal. El diagnóstico exige medir la *presión de apertura* del líquido cefalorraquídeo mediante punción lumbar —por encima de 25 cm de agua— con composición del líquido normal, y esa medición solo se obtiene con la punción. Un matiz importante que la pregunta no menciona: la resonancia debe hacerse *antes*, con venografía, para descartar una masa y una trombosis de senos venosos; es imprescindible en la secuencia diagnóstica, pero no es la prueba que confirma. Sin tratamiento la enfermedad puede acabar en ceguera.',
  no:{0:'La ecografía de troncos supraaórticos no valora la presión intracraneal.',1:'La resonancia es imprescindible para descartar otras causas, pero por sí sola no confirma el diagnóstico: no mide la presión.',2:'El electroencefalograma no aporta nada en este cuadro.',4:'Los potenciales evocados valoran la vía óptica, pero no la presión intracraneal.'},
  trampa:'Se descarta la hipertensión intracraneal porque la imagen es normal. En este síndrome la imagen es normal por definición: lo que está alta es la presión.',
  dx:['Hipertensión intracraneal idiopática','Trombosis de senos venosos','Tumor cerebral'],
  obj:'Confirmar la hipertensión intracraneal idiopática midiendo la presión de apertura.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con los criterios de Friedman y Harrison, 21.ª ed.'
},
'MIR-2013-M36': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Síndrome de Horner',
  clave:'Horner: la lesión está en la vía SIMPÁTICA, que va del hipotálamo al centro cilioespinal de la médula dorsal alta.',
  exp:'La ptosis leve con miosis y anhidrosis facial define el síndrome de Horner, que se produce por interrupción de la vía *simpática* oculosimpática. Esa vía tiene tres neuronas: la primera desciende desde el hipotálamo por el tronco hasta el centro cilioespinal de Budge, en el asta intermediolateral de la médula entre C8 y T2; la segunda sale de allí y asciende por la cadena simpática cervical rodeando el vértice pulmonar; y la tercera acompaña a la carótida interna hasta la órbita. Que el reflejo fotomotor esté *conservado* y que el paciente pueda cerrar los párpados con fuerza descarta la afectación del tercer par, cuya ptosis es completa y cursa con midriasis arreactiva. En este fumador con tos, dolor y déficit en el territorio C8-T1 de la mano, la causa es un tumor de Pancoast en el vértice pulmonar que lesiona la segunda neurona junto con el plexo braquial inferior.',
  no:{1:'La lesión del tercer par produce ptosis completa, MIDRIASIS y limitación de los movimientos oculares.',2:'El núcleo de Edinger-Westphal es parasimpático: su lesión daría midriasis, no miosis.',3:'La vía parasimpática controla la constricción pupilar; su lesión produce midriasis.',4:'La afectación aislada del músculo tarsal daría ptosis, pero no explicaría la miosis ni la anhidrosis.'},
  trampa:'Se busca la lesión en el tercer par por la ptosis. El tamaño de la pupila lo decide todo: miosis es simpático, midriasis es parasimpático.',
  dx:['Síndrome de Horner por tumor de Pancoast','Parálisis del III par','Pupila de Adie'],
  obj:'Localizar la lesión en el síndrome de Horner.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y Adams, Principios de Neurología.'
},
'MIR-2013-M42': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'IECA',
  clave:'Tos seca por picor de garganta más hiperpotasemia: es el IECA.',
  exp:'Los dos hallazgos apuntan al mismo fármaco. La *tos seca* aparece en un 5 a 20% de los tratados con inhibidores de la enzima convertidora de angiotensina y se debe a la acumulación de bradicinina y sustancia P en la vía aérea, que produce esa sensación de picor faríngeo característica; puede empezar meses después de iniciar el tratamiento y solo cede al retirarlo. La *hiperpotasemia* se explica porque al inhibir la angiotensina II se reduce la aldosterona y disminuye la excreción renal de potasio. La solución es sustituir el enalapril por un antagonista del receptor de angiotensina II, que conserva el beneficio cardiovascular y no produce tos porque no interfiere con la bradicinina.',
  no:{0:'Las tiazidas producen hipopotasemia, hiponatremia e hiperuricemia, no hiperpotasemia.',1:'Los betabloqueantes pueden causar broncoespasmo, pero no esta tos seca ni la hiperpotasemia.',2:'La furosemida produce hipopotasemia, justo lo contrario.',4:'La hidralazina causa cefalea, taquicardia refleja y, a largo plazo, un cuadro lupus-like.'},
  trampa:'La tos en una paciente con insuficiencia cardíaca se atribuye a la congestión pulmonar y se sube el diurético. La hiperpotasemia acompañante es la pista que delata al fármaco.',
  dx:['Tos por IECA','Insuficiencia cardíaca descompensada','Asma'],
  obj:'Reconocer los efectos adversos característicos de los IECA.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Goodman y Gilman y guías ESC.'
},
'MIR-2013-M50': {
  esp:'Medicina Interna', tema:'Genética', sub:'Herencia autosómica dominante',
  clave:'Autosómica dominante en heterocigosis con penetrancia completa: 50% de la descendencia, y todos enfermarán.',
  exp:'Las ataxias espinocerebelosas por expansión de tripletes CAG, como la SCA1, son *autosómicas dominantes*: basta un alelo mutado para enfermar. El caso índice, heterocigoto, transmite el alelo mutado a la mitad de sus hijos con independencia del sexo, porque el gen está en el cromosoma 6, que es autosómico. Y la *penetrancia completa* significa que quien hereda la mutación desarrolla la enfermedad en algún momento de su vida, sin excepciones. Conviene añadir un concepto propio de estas enfermedades: la *anticipación*, por la cual la expansión tiende a crecer al transmitirse —especialmente por vía paterna—, de modo que los hijos suelen debutar antes y con más gravedad que el progenitor.',
  no:{0:'Estar en un autosoma implica que el sexo del descendiente no influye en la transmisión.',2:'El 25% correspondería a una herencia autosómica recesiva con ambos progenitores portadores.',3:'Transmitir a toda la descendencia ocurriría solo si el afectado fuese homocigoto.',4:'Al ser dominante, no hace falta que la pareja aporte nada: un solo alelo mutado basta.'},
  trampa:'Se calcula el 25% por inercia del cuadro de Punnett recesivo. En la dominante con un progenitor heterocigoto la cifra es siempre el 50%.',
  dx:['Ataxia espinocerebelosa tipo 1','Ataxia de Friedreich'],
  obj:'Aplicar el riesgo de recurrencia en la herencia autosómica dominante.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Thompson y Thompson, Genética en Medicina.'
},
'MIR-2013-M51': {
  esp:'Medicina Interna', tema:'Genética', sub:'Herencia mitocondrial',
  clave:'El ADN mitocondrial solo lo transmite la madre. Un varón afectado no lo pasa a ningún hijo.',
  exp:'Las mitocondrias del cigoto proceden íntegramente del *óvulo*: los pocos orgánulos que aporta el espermatozoide se degradan tras la fecundación. Por eso las enfermedades del genoma mitocondrial, como la neuropatía óptica hereditaria de Leber, siguen una *herencia materna estricta*: una mujer afectada las transmite a toda su descendencia, hijos e hijas, mientras que un varón afectado no las transmite a ninguno. Dos conceptos completan el cuadro y explican la variabilidad clínica de estas enfermedades: la *heteroplasmia*, es decir, la coexistencia de mitocondrias normales y mutadas en la misma célula, y el *efecto umbral*, por el cual los síntomas aparecen solo cuando la proporción de mitocondrias mutadas supera cierto nivel en un tejido.',
  no:{0:'La herencia holándrica es la del cromosoma Y, no la mitocondrial.',1:'El 50% corresponde a la herencia autosómica dominante nuclear.',2:'La herencia paterna no existe en el genoma mitocondrial: es exactamente lo contrario.',3:'La transmisión ligada al sexo del descendiente corresponde a los genes del cromosoma X.'},
  trampa:'Se aplica el 50% de la dominante por costumbre. En la herencia mitocondrial la pregunta es solo quién es el progenitor afectado: si es el padre, el riesgo es cero.',
  dx:['Neuropatía óptica hereditaria de Leber','Neuritis óptica'],
  obj:'Aplicar las reglas de la herencia mitocondrial en el consejo genético.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Thompson y Thompson, Genética en Medicina.'
},
'MIR-2013-M57': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Citomegalovirus',
  clave:'En el inmunodeprimido el diagnóstico y el seguimiento del CMV se hacen con PCR CUANTITATIVA en sangre.',
  exp:'En el paciente inmunodeprimido la serología no sirve: la IgG solo indica infección pasada y el virus queda latente en casi toda la población adulta, y la IgM puede no producirse por la propia inmunosupresión o persistir sin significar enfermedad activa. Lo que se necesita es demostrar *replicación viral*, y eso se hace con *PCR cuantitativa en sangre*, que mide la carga viral. Su valor no es solo diagnóstico: permite además monitorizar la respuesta al tratamiento con ganciclovir o valganciclovir y sustenta la estrategia de tratamiento anticipado, en la que se trata al superarse un umbral de carga viral antes de que aparezcan los síntomas. El cultivo es lento y poco sensible.',
  no:{0:'La IgG indica infección pasada y es positiva en la mayoría de los adultos.',1:'El cultivo celular es lento y de baja sensibilidad, poco útil en la práctica.',3:'La detección de antígeno en orina no refleja la enfermedad sistémica.',4:'La IgM puede faltar en el inmunodeprimido y no distingue reactivación de infección pasada.'},
  trampa:'Se pide serología por costumbre. En el inmunodeprimido, la serología informa del pasado; la PCR cuantitativa informa de lo que está pasando ahora.',
  dx:['Enfermedad por citomegalovirus','Infección latente por CMV','Rechazo de injerto'],
  obj:'Elegir la PCR cuantitativa para diagnosticar CMV en el inmunodeprimido.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de la AST y Mandell, Enfermedades Infecciosas.'
},
'MIR-2013-M62': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Disfunción sinusal',
  clave:'Pausas sinusales con escape de la unión y SÍNTOMAS: marcapasos. La regla de los 3 segundos vale para el asintomático.',
  exp:'El registro muestra fases sin ondas P sinusales con un ritmo de escape de la unión auriculoventricular a 40 latidos por minuto y P retrógradas: es una *disfunción sinusal* con bloqueo sinoauricular. Que el QRS sea estrecho y exista escape nodal demuestra que la conducción auriculoventricular está intacta, lo que descarta el bloqueo completo. La indicación de marcapasos en la disfunción sinusal se basa en la *correlación entre síntomas y bradiarritmia*, no en un umbral fijo de duración de las pausas: el criterio de los 3 segundos se aplica al paciente asintomático. Aquí los mareos repentinos, sin pródromos y de corta duración, coinciden con esas fases y bastan para indicar la estimulación permanente.',
  no:{0:'En el bloqueo completo la conducción auriculoventricular está interrumpida y hay disociación entre P y QRS, no ausencia de ondas P.',1:'La ausencia de pausas de más de 3 segundos no excluye una causa cardíaca cuando hay correlación clínica.',2:'El problema está en el nodo sinusal, no en la conducción auriculoventricular, que funciona correctamente.',4:'Estas alteraciones no son un hallazgo banal de la edad cuando producen síntomas.'},
  trampa:'Se descarta la indicación porque no hay pausas de más de 3 segundos. Lo que manda es que los síntomas coincidan con la arritmia.',
  dx:['Disfunción sinusal','Bloqueo AV completo','Síncope vasovagal'],
  obj:'Indicar marcapasos en la disfunción sinusal sintomática.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías ESC sobre estimulación cardíaca.'
},
'MIR-2013-M63': {
  esp:'Farmacología', tema:'Farmacología clínica', sub:'Interacciones farmacodinámicas',
  clave:'Betabloqueante + digoxina + verapamilo: tres frenos sobre el mismo nodo. Interacción FARMACODINÁMICA.',
  exp:'La paciente recibe tres fármacos que deprimen la conducción del nodo auriculoventricular por *mecanismos distintos*: el atenolol bloqueando los receptores beta, la digoxina aumentando el tono vagal y el verapamilo bloqueando los canales lentos de calcio. Al sumar sus efectos sobre la misma diana fisiológica se produce un bloqueo completo. Esto es una interacción *farmacodinámica*: los fármacos no alteran las concentraciones unos de otros, sino que suman su efecto sobre el mismo órgano. Se distingue de la *farmacocinética*, en la que un fármaco modifica la absorción, distribución, metabolismo o eliminación de otro y cambia su concentración plasmática. Es el motivo por el que asociar verapamilo a un betabloqueante está desaconsejado.',
  no:{0:'El verapamilo sí eleva los niveles de digoxina, pero la clínica descrita es de bloqueo por suma de efectos, no de intoxicación digitálica, que cursaría con náuseas, alteraciones visuales y arritmias específicas.',1:'La hipopotasemia favorece la toxicidad digitálica, pero no explica un bloqueo completo inmediato tras el verapamilo.',3:'El efecto hipotensor del diurético no produce bloqueo auriculoventricular.',4:'El verapamilo no es proarrítmico en este sentido: el problema es la asociación, no el fármaco aislado.'},
  trampa:'Se busca la interacción farmacocinética entre verapamilo y digoxina, que existe. Pero lo que ha producido el bloqueo es la suma de tres frenos sobre el mismo nodo.',
  dx:['Bloqueo AV completo farmacológico','Intoxicación digitálica'],
  obj:'Distinguir la interacción farmacodinámica de la farmacocinética.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Goodman y Gilman.'
},
'MIR-2013-M65': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Revascularización coronaria',
  clave:'Lesión ÚNICA de un vaso con angina: angioplastia con stent. La cirugía se reserva para la enfermedad multivaso.',
  exp:'La decisión entre angioplastia y cirugía depende sobre todo de la *extensión* de la enfermedad coronaria. Aquí hay una lesión única, subtotal, en el tercio medio de la descendente anterior, que es una lesión perfectamente abordable por vía percutánea: se dilata con balón y se implanta un *stent* farmacoactivo, que reduce la reestenosis frente al balón solo y frente al stent metálico. La cirugía de revascularización con arteria mamaria interna izquierda se reserva para la enfermedad de tronco común, la enfermedad de tres vasos y, muy particularmente, para el paciente *diabético con enfermedad multivaso*, en el que ha demostrado mejor supervivencia. El tratamiento médico antianginoso acompaña siempre, pero con una lesión subtotal sintomática no basta.',
  no:{0:'El tratamiento médico solo es insuficiente ante una lesión subtotal con angina.',1:'La actitud expectante con reposo no revasculariza y deja al paciente en riesgo de infarto.',2:'La cirugía es un procedimiento desproporcionado para una lesión única accesible por vía percutánea.',3:'La dilatación con balón sin stent ha quedado superada por la alta tasa de reestenosis.'},
  trampa:'Se opta por cirugía por tratarse de un diabético. El beneficio quirúrgico en el diabético está demostrado en la enfermedad MULTIVASO, no en la lesión única.',
  dx:['Angina estable','Enfermedad coronaria de un vaso','Síndrome coronario agudo'],
  obj:'Elegir entre angioplastia y cirugía según la extensión de la enfermedad.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías ESC/EACTS sobre revascularización miocárdica.'
},
'MIR-2013-M68': {
  esp:'Medicina Interna', tema:'Cardiología', sub:'Estenosis aórtica',
  clave:'Gradiente medio de 55 y área de 0,7: estenosis aórtica grave. Y con disnea, es sintomática: hay que recambiar la válvula.',
  exp:'Los criterios de gravedad de la estenosis aórtica son un área valvular por debajo de 1 cm² —aquí 0,7—, un gradiente medio por encima de 40 mmHg —aquí 55— y una velocidad máxima superior a 4 m/s. Y el factor que dispara la indicación quirúrgica es la aparición de *síntomas*: angina, síncope o disnea, que es el que presenta este paciente. Es una regla dura porque el pronóstico cambia radicalmente: la estenosis grave asintomática puede vigilarse, pero desde que aparecen los síntomas la supervivencia media sin cirugía se mide en dos a tres años. El tratamiento es la sustitución valvular. Un matiz de actualización: en 2013 la respuesta era la cirugía abierta en un paciente de 52 años; hoy el implante percutáneo se ha extendido, pero sigue reservándose para pacientes de más edad o alto riesgo quirúrgico, de modo que en este caso la prótesis quirúrgica sigue siendo la opción correcta.',
  no:{0:'Los diuréticos alivian la congestión pero no modifican el pronóstico ni la obstrucción.',1:'La valvuloplastia con balón en el adulto tiene resultados pobres y transitorios: es solo un puente en casos seleccionados.',3:'El homoinjerto se reserva para indicaciones muy concretas, sobre todo la endocarditis con destrucción de la raíz aórtica.',4:'La válvula percutánea se indica en pacientes de edad avanzada o alto riesgo quirúrgico, no en un paciente de 52 años.'},
  trampa:'Se espera a que la disnea empeore. Desde el primer síntoma, el reloj corre: la muerte súbita es una posibilidad real.',
  dx:['Estenosis aórtica grave sintomática','Miocardiopatía hipertrófica','Insuficiencia cardíaca'],
  obj:'Indicar el recambio valvular en la estenosis aórtica sintomática.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías ESC/EACTS sobre valvulopatías.'
},
'MIR-2013-M75': {
  esp:'Cirugía', tema:'Cirugía vascular', sub:'Isquemia arterial aguda',
  clave:'Inicio BRUSCO con foco embolígeno y pulsos normales en la otra pierna: embolia. Instauración lenta con claudicación previa: trombosis.',
  exp:'Separar embolia de trombosis cambia el tratamiento, y se hace con tres datos. La *embolia* ocurre en un paciente sin arteriopatía previa: el comienzo es *brusco* y muy sintomático porque no ha dado tiempo a desarrollar circulación colateral, existe un *foco embolígeno* —típicamente fibrilación auricular—, y la extremidad contralateral tiene *todos los pulsos presentes*, prueba de que las arterias están sanas. La *trombosis* asienta sobre una arteria ya enferma: hay antecedente de claudicación intermitente, el cuadro se instaura más lentamente y de forma menos dramática gracias a la colateralidad, y la pierna contralateral suele tener pulsos disminuidos o ausentes. En la embolia se hace embolectomía con catéter de Fogarty; en la trombosis suele requerirse arteriografía y un procedimiento de revascularización más complejo.',
  no:{0:'Foco embolígeno con pulsos contralaterales normales apunta a EMBOLIA, no a trombosis.',1:'Los antecedentes de claudicación indican arteriopatía previa y orientan a trombosis.',2:'Los pulsos contralaterales conservados apuntan a embolia; el inicio lento a trombosis: la opción mezcla criterios contradictorios.',4:'Una derivación previa que se ocluye es el ejemplo típico de trombosis, no de embolia.'},
  trampa:'Se olvida explorar la pierna sana. Ese es a menudo el dato que más rápido resuelve la duda.',
  dx:['Embolia arterial aguda','Trombosis arterial aguda','Trombosis venosa profunda'],
  obj:'Diferenciar embolia de trombosis en la isquemia arterial aguda.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Rutherford, Cirugía Vascular.'
},
'MIR-2013-M78': {
  esp:'Cirugía', tema:'Cirugía digestiva', sub:'Síndrome de dumping',
  clave:'Síntomas ANTES de media hora tras comer: dumping precoz. Se trata con dieta, no con fármacos ni cirugía.',
  exp:'Tras una gastrectomía con Billroth II se pierde el píloro, y el contenido hiperosmolar pasa de golpe al yeyuno. Eso arrastra agua hacia la luz intestinal, produce distensión, retortijones y diarrea, y reduce el volumen plasmático, lo que explica los síntomas vasomotores: sudoración, mareo, taquicardia y astenia. Es el *dumping precoz*, que aparece en los primeros 30 minutos tras la comida. Su tratamiento inicial es *dietético*: comidas pequeñas y frecuentes, reducir los azúcares simples, aumentar proteínas y fibra, separar los líquidos de los sólidos y descansar recostado tras comer. Con esto mejora la mayoría. El octreótido y la cirugía se reservan para los casos refractarios. Conviene distinguirlo del *dumping tardío*, que ocurre a las dos o tres horas y se debe a una hipoglucemia reactiva por descarga excesiva de insulina.',
  no:{0:'El octreótido es un tratamiento de segunda línea, para cuando la dieta fracasa.',2:'No es un cuadro ansioso: tiene una fisiopatología mecánica bien definida.',3:'Buscar un tumor neuroendocrino es innecesario cuando la causa quirúrgica es evidente.',4:'La reintervención es el último recurso, solo tras el fracaso del tratamiento conservador.'},
  trampa:'Se confunde con una hipoglucemia y se recomienda tomar azúcar. En el dumping precoz el azúcar simple empeora el cuadro.',
  dx:['Síndrome de dumping precoz','Dumping tardío','Síndrome de asa aferente'],
  obj:'Tratar el dumping precoz con medidas dietéticas.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Sabiston, Tratado de Cirugía.'
},
'MIR-2013-M79': {
  esp:'Pediatría', tema:'Cirugía pediátrica', sub:'Defectos de la pared abdominal',
  clave:'El onfalocele tiene SACO y sale por el ombligo. La gastrosquisis no tiene saco y sale al lado, casi siempre a la derecha.',
  exp:'La diferencia esencial es la presencia de *saco*. En el *onfalocele* las vísceras salen a través del anillo umbilical recubiertas por una membrana formada por peritoneo y amnios, con el cordón insertado en el propio saco; se asocia con mucha frecuencia a otras malformaciones y a cromosomopatías —trisomías 13 y 18, síndrome de Beckwith-Wiedemann—, de modo que obliga a un estudio completo, y ese es su principal determinante pronóstico. En la *gastrosquisis* el defecto es paraumbilical, casi siempre a la derecha del cordón, y las asas salen *libres*, sin recubrimiento: por eso están inflamadas y engrosadas por el contacto con el líquido amniótico, y por eso el tratamiento es urgente, para evitar la desecación, la pérdida de calor y la infección. La gastrosquisis se asocia mucho menos a otras malformaciones.',
  no:{0:'Ambos se localizan en la región umbilical; el epigastrio no es la localización de la gastrosquisis.',1:'El defecto de la gastrosquisis suele ser MENOR que el del onfalocele, que puede ser gigante.',3:'La atresia intestinal se asocia sobre todo a la gastrosquisis, no al onfalocele.',4:'Es al revés: la gastrosquisis, con las asas expuestas, es la que exige tratamiento urgente.'},
  trampa:'Se recuerda solo que "uno tiene saco" sin asociar las consecuencias. El saco protege pero acompaña a cromosomopatías; la ausencia de saco obliga a operar ya.',
  dx:['Onfalocele','Gastrosquisis','Hernia umbilical'],
  obj:'Diferenciar onfalocele y gastrosquisis y sus implicaciones.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Nelson, 22.ª ed., y Sabiston, Tratado de Cirugía.'
},
'MIR-2013-M80': {
  esp:'Cirugía', tema:'Cirugía digestiva', sub:'Diverticulitis aguda',
  clave:'Absceso pélvico contenido: drenaje percutáneo guiado por imagen. La prueba de elección es la TC, nunca el enema con bario.',
  exp:'En la diverticulitis aguda complicada con un absceso *contenido*, habitualmente por encima de 3 a 4 cm, el tratamiento consiste en antibioterapia más *drenaje percutáneo* guiado por tomografía o ecografía. Esto resuelve el episodio sin cirugía urgente y, si después hiciera falta operar, permite hacerlo de forma programada, en un solo tiempo y en mejores condiciones, evitando una colostomía. La prueba diagnóstica de elección es la *tomografía con contraste*: el enema con bario está formalmente contraindicado en la fase aguda porque el bario puede pasar a la cavidad peritoneal a través de una perforación y causar una peritonitis química gravísima.',
  no:{0:'El enema con bario está contraindicado en la diverticulitis aguda por riesgo de peritonitis por bario.',2:'El abordaje laparoscópico programado es hoy perfectamente válido y de elección en manos expertas.',3:'Tras un primer episodio no complicado no se indica cirugía electiva sistemática: la decisión se individualiza.',4:'En la peritonitis generalizada hay que resecar el segmento enfermo, clásicamente con una intervención de Hartmann; derivar sin resecar deja el foco séptico dentro.'},
  trampa:'Se opera de urgencia todo absceso. Drenarlo y enfriar el proceso permite después una cirugía mucho más segura, si es que hace falta.',
  dx:['Diverticulitis aguda complicada','Absceso pélvico','Perforación intestinal'],
  obj:'Manejar el absceso diverticular con drenaje percutáneo.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con la clasificación de Hinchey y guías de la ASCRS.'
},
'MIR-2013-M82': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Anemia ferropénica',
  clave:'HLA-DQ2 y DQ8 negativos DESCARTAN la celiaquía. Varón de 55 con anemia ferropénica y cambio del ritmo: colonoscopia.',
  exp:'La determinación del HLA tiene un valor peculiar: su *valor predictivo negativo es prácticamente del 100%*, porque casi toda la enfermedad celíaca se desarrolla sobre estos haplotipos. Ser negativo para DQ2 y DQ8 permite por tanto excluir la celiaquía y no seguir estudiándola, que es justo lo que hacen tres de las opciones. Descartada esa vía, quedan los datos que importan: un varón de 55 años con *anemia ferropénica* y *cambio reciente del ritmo deposicional*. Esa combinación es cáncer colorrectal mientras no se demuestre lo contrario, y obliga a una *colonoscopia*. Es un ejemplo de cómo una prueba con buen valor predictivo negativo sirve sobre todo para cerrar una hipótesis y dejar ver la que de verdad importa.',
  no:{0:'Los anticuerpos antitransglutaminasa carecen de sentido con HLA negativo.',1:'La biopsia duodenal buscaría de nuevo una celiaquía ya excluida.',2:'El test de D-xilosa valora malabsorción de forma inespecífica y está en desuso.',3:'Probar dieta sin gluten no está justificado y retrasaría el diagnóstico de una neoplasia.'},
  trampa:'El antecedente familiar de celiaquía arrastra a seguir buscándola. El HLA negativo cierra esa puerta y obliga a mirar el colon.',
  dx:['Cáncer colorrectal','Enfermedad celíaca','Angiodisplasia'],
  obj:'Usar el valor predictivo negativo del HLA y priorizar la neoplasia.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de la ESPGHAN y de la AGA sobre anemia ferropénica.'
},
'MIR-2013-M83': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Colitis ulcerosa grave',
  clave:'Brote grave corticorrefractario a los 3-7 días: rescate con ciclosporina o infliximab. Si eso falla, colectomía.',
  exp:'En el brote grave de colitis ulcerosa se administran corticoides intravenosos y se evalúa la respuesta al *tercer día*, habitualmente con el índice de Oxford, que combina número de deposiciones y proteína C reactiva. Si no hay respuesta, se pasa al *tratamiento de rescate*, y las dos opciones válidas son la *ciclosporina intravenosa* a 2 mg/kg y el infliximab; ambas tienen eficacia similar y la elección depende de la experiencia del centro y de si el paciente ya recibía tiopurinas. La colectomía se reserva para el fracaso del rescate o para las complicaciones —megacolon tóxico, perforación, hemorragia masiva—, y no debe demorarse indefinidamente si el rescate no funciona.',
  no:{0:'La colectomía urgente todavía no está indicada: queda el escalón del rescate médico.',1:'La azatioprina tarda entre 8 y 12 semanas en actuar: es inútil en un brote agudo.',2:'La mesalazina es un tratamiento de mantenimiento y de brotes leves, sin papel en el brote grave.',4:'El etanercept NO es eficaz en la enfermedad inflamatoria intestinal: los anti-TNF útiles son infliximab y adalimumab.'},
  trampa:'Se prolonga la corticoterapia esperando una mejoría que ya no va a llegar. Pasado el tercer día sin respuesta, seguir esperando solo aumenta el riesgo quirúrgico.',
  dx:['Colitis ulcerosa corticorrefractaria','Megacolon tóxico','Colitis infecciosa'],
  obj:'Escalonar el tratamiento del brote grave de colitis ulcerosa.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías ECCO sobre colitis ulcerosa.'
},
'MIR-2013-M87': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Anemia ferropénica de origen oscuro',
  clave:'Anemia ferropénica con gastroscopia y colonoscopia normales: toca mirar el intestino delgado con cápsula endoscópica.',
  exp:'Cuando una anemia ferropénica persiste tras un estudio alto y bajo normales se llama *hemorragia digestiva de origen oscuro*, y el territorio que queda por explorar es el *intestino delgado*, inaccesible a ambas endoscopias. La *cápsula endoscópica* es la prueba de elección: es no invasiva, recorre todo el delgado y detecta las causas típicas de este escenario —angiodisplasias, que son las más frecuentes, lesiones por antiinflamatorios como los que toma esta paciente, tumores del delgado y enfermedad de Crohn—. Su única contraindicación relevante es la sospecha de estenosis, por riesgo de retención. La arteriografía solo es útil con sangrado activo abundante y la gammagrafía con hematíes marcados requiere también sangrado activo.',
  no:{0:'La biopsia de yeyuno no procede con serología celíaca negativa y no explora todo el delgado.',1:'La arteriografía requiere sangrado activo con débito alto para localizar el punto.',3:'La gammagrafía con hematíes marcados también exige sangrado activo en el momento del estudio.',4:'La resonancia pélvica no explora el tubo digestivo.'},
  trampa:'Se repiten las endoscopias ya hechas. Una vez son normales, el siguiente paso es cambiar de territorio, no de repetir el mismo.',
  dx:['Angiodisplasia de intestino delgado','Lesión por AINE','Tumor de intestino delgado'],
  obj:'Estudiar el intestino delgado en la anemia ferropénica de origen oscuro.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de la ESGE sobre hemorragia de intestino delgado.'
},
'MIR-2013-M91': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Hiperbilirrubinemia',
  clave:'Bilirrubina INDIRECTA aislada, sin hemólisis y con hígado normal: síndrome de Gilbert.',
  exp:'Lo primero es fraccionar la bilirrubina. De los 3,2 mg/dL totales, solo 0,4 son directos: se trata por tanto de una hiperbilirrubinemia *indirecta o no conjugada*. Con transaminasas, fosfatasa alcalina y gammaglutamiltransferasa normales queda descartada la enfermedad hepatobiliar, y sin anemia queda descartada la hemólisis. Lo que queda es el *síndrome de Gilbert*, un déficit parcial y benigno de la enzima UDP-glucuroniltransferasa que afecta a un 5 a 10% de la población. Su rasgo clínico característico es que la ictericia aflora en situaciones de *estrés metabólico*: ayuno, ejercicio intenso —este paciente es deportista—, infecciones, alcohol o falta de sueño. No requiere tratamiento ni tiene consecuencias, pero conviene conocerlo porque altera el metabolismo de algunos fármacos, como el irinotecán.',
  no:{0:'El síndrome de Rotor cursa con hiperbilirrubinemia DIRECTA.',1:'La coledocolitiasis elevaría la bilirrubina directa, la fosfatasa alcalina y la GGT, y daría dolor.',2:'El Dubin-Johnson también es de predominio directo, con hígado pigmentado.',3:'En la hepatitis aguda las transaminasas estarían muy elevadas.'},
  trampa:'Se estudia el hígado a fondo antes de fraccionar la bilirrubina. Ese fraccionamiento orienta todo el diagnóstico y evita pruebas innecesarias.',
  dx:['Síndrome de Gilbert','Hemólisis','Síndrome de Dubin-Johnson','Hepatitis aguda'],
  obj:'Orientar la hiperbilirrubinemia según su fracción predominante.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed.'
},
'MIR-2013-M93': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Cribado previo a anti-TNF',
  clave:'Antes de un anti-TNF: tuberculosis, hepatitis B, VIH. El contaje linfocitario NO hace falta.',
  exp:'El bloqueo del factor de necrosis tumoral alfa desarma dos mecanismos concretos: el granuloma que mantiene contenida la *tuberculosis latente* y el control inmunitario del *virus de la hepatitis B*. De ahí el cribado obligado antes de iniciarlo: prueba de la tuberculina o test de liberación de interferón gamma junto con radiografía de tórax —y si la tuberculosis latente es positiva, tratarla antes de empezar—, serología completa del virus B —porque un portador puede sufrir una reactivación fulminante y necesita profilaxis antiviral— y serología del VIH, que condiciona todo el manejo. Lo que *no* forma parte de este cribado es el recuento linfocitario: los anti-TNF no producen linfopenia y esa cifra no predice el riesgo infeccioso de estos fármacos.',
  no:{1:'La serología del virus B es imprescindible por el riesgo de reactivación.',2:'La tuberculina es obligada: la reactivación tuberculosa es el riesgo clásico de los anti-TNF.',3:'La radiografía de tórax complementa el cribado de tuberculosis.',4:'La serología del VIH forma parte del estudio previo.'},
  trampa:'Se pide un recuento linfocitario por asociar inmunosupresión con linfopenia. Ese parámetro pertenece al VIH y a otros escenarios, no al cribado de los anti-TNF.',
  dx:['Enfermedad de Crohn','Tuberculosis latente','Hepatitis B crónica'],
  obj:'Conocer el cribado obligatorio antes de iniciar terapia anti-TNF.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías ECCO y recomendaciones sobre terapia biológica.'
},
'MIR-2013-M95': {
  esp:'Medicina Interna', tema:'Endocrinología', sub:'Diabetes tipo 2 de inicio',
  clave:'Diabetes recién diagnosticada en un paciente obeso y asintomático: dieta y ejercicio como primera medida.',
  exp:'Dos glucemias en ayunas por encima de 126 mg/dL en días distintos —138 y 130— establecen el diagnóstico de diabetes. En un paciente asintomático, con obesidad y sin criterios de gravedad, la primera recomendación es la *modificación del estilo de vida*: dieta, pérdida de peso y ejercicio, que en este perfil pueden normalizar la glucemia por sí solos y actúan sobre la causa, que es la resistencia a la insulina. Conviene añadir una precisión de actualización: las guías actuales recomiendan iniciar *metformina desde el diagnóstico* en la mayoría de los pacientes, junto con —nunca en lugar de— los cambios de estilo de vida. La pregunta es de 2013 y pide la medida "en primer lugar", que sigue siendo el cambio conductual; hoy la respuesta más completa sería ambas cosas a la vez.',
  no:{0:'La metformina hoy suele añadirse desde el inicio, pero nunca sustituye a los cambios de estilo de vida, que son la primera medida.',1:'Las sulfonilureas no son de primera línea y producen hipoglucemia y aumento de peso, indeseable en un obeso.',3:'La insulina prandial se reserva para hiperglucemias graves, síntomas cardinales o cetosis.',4:'La acarbosa actúa sobre la glucemia posprandial y tiene un papel muy limitado.'},
  trampa:'Se prescribe un fármaco de entrada y se despacha el consejo higiénico-dietético en una frase. La intervención sobre el estilo de vida es tratamiento, y requiere concreción y seguimiento.',
  dx:['Diabetes mellitus tipo 2','Prediabetes','Obesidad'],
  obj:'Iniciar el tratamiento de la diabetes tipo 2 recién diagnosticada.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con los Standards of Care de la ADA.'
},
'MIR-2013-M96': {
  esp:'Medicina Interna', tema:'Endocrinología', sub:'Intensificación en diabetes tipo 2',
  clave:'Pérdida de peso, astenia y HbA1c que sube a 8,5 con dos orales: hay déficit de insulina. Insulina basal.',
  exp:'La combinación de *pérdida de peso*, astenia y deterioro progresivo del control con dos fármacos orales bien tomados y buena adherencia dietética indica que el paciente ha entrado en *insulinopenia*: tras años de evolución, la célula beta se agota y ya no basta con mejorar la sensibilidad ni con potenciar las incretinas. Añadir una *insulina basal* —una insulina de acción prolongada nocturna, manteniendo la metformina— es la medida más eficaz y la que corrige la causa. La pérdida de peso no intencionada en un diabético es siempre un signo de alarma que obliga además a descartar otras causas, en particular una neoplasia.',
  no:{0:'Aumentar la ingesta no corrige la causa y empeoraría el control glucémico.',2:'La acarbosa tiene una potencia muy limitada y no resuelve el déficit de insulina.',3:'La pioglitazona actúa sobre la resistencia, no sobre el déficit, y favorece la retención de líquidos.',4:'Cambiar a una sulfonilurea exprime una célula beta que ya está agotada, con riesgo de hipoglucemia.'},
  trampa:'Se posterga la insulina por considerarla un fracaso o un último recurso. Ante insulinopenia establecida, retrasarla solo prolonga la hiperglucemia y el catabolismo.',
  dx:['Diabetes tipo 2 insulinopénica','Diabetes tipo LADA','Neoplasia oculta'],
  obj:'Reconocer cuándo iniciar insulina basal en la diabetes tipo 2.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con los Standards of Care de la ADA.'
},
'MIR-2013-M97': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Prevención del ictus',
  clave:'De todos los factores, el control de la presión arterial es el que más reduce el riesgo de ictus.',
  exp:'La hipertensión es, con diferencia, el factor de riesgo modificable más importante para el ictus, tanto isquémico como hemorrágico, y su control es la intervención con mayor impacto sobre el riesgo poblacional. Esta paciente tiene 150/80 mmHg con tratamiento, de modo que hay un margen claro de mejora. Merece un matiz honesto: *dejar de fumar* es también una intervención de enorme valor —duplica el riesgo de ictus isquémico y su abandono lo reduce sustancialmente en pocos años— y debe abordarse en la misma consulta; la pregunta obliga a elegir el factor de mayor magnitud, y ese es la presión arterial. En cambio, el control glucémico estricto ha demostrado reducir las complicaciones microvasculares, pero su efecto sobre el ictus es mucho menor.',
  no:{0:'El control glucémico estricto reduce sobre todo las complicaciones microvasculares, no el ictus.',2:'Los antioxidantes no han demostrado beneficio en la prevención cardiovascular.',3:'Dejar de fumar es muy relevante y debe recomendarse, pero el control tensional tiene mayor impacto sobre el riesgo de ictus.',4:'Las estatinas reducen el riesgo, pero menos que el control tensional en esta paciente.'},
  trampa:'Se reparte el esfuerzo entre todos los factores por igual. Priorizar el de mayor impacto es lo que más beneficio produce con los mismos recursos.',
  dx:['Riesgo cardiovascular alto','Hipertensión mal controlada','Diabetes tipo 2'],
  obj:'Jerarquizar los factores de riesgo modificables del ictus.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de la AHA/ASA sobre prevención primaria del ictus.'
},
'MIR-2014-M100': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Nefritis tubulointersticial aguda',
  clave:'Fiebre, exantema, eosinofilia y eosinofiluria a los 12 días de rifampicina: nefritis tubulointersticial.',
  exp:'Este caso presenta la *tríada clásica completa* de la nefritis tubulointersticial aguda por hipersensibilidad —fiebre, exantema y eosinofilia—, que en la práctica solo aparece en una minoría de los pacientes, junto con la *eosinofiluria* demostrada con tinción de Wright y una proteinuria en rango no nefrótico. El plazo también encaja: entre 7 y 15 días tras iniciar el fármaco. La *rifampicina* es el antituberculoso más característicamente implicado, sobre todo en pautas intermitentes o al reintroducirla, y puede además producir un cuadro inmunoalérgico sistémico. El tratamiento es retirar el fármaco responsable y valorar corticoides si la función renal no se recupera.',
  no:{0:'La necrosis tubular tóxica no cursa con fiebre, exantema ni eosinofilia: es un daño directo del túbulo.',1:'La necrosis tubular isquémica requiere un episodio de hipoperfusión, ausente aquí.',2:'La enfermedad ateroembólica sigue a una manipulación arterial y da livedo y lesiones cutáneas distales.',3:'La oclusión de la arteria renal produce dolor lumbar brusco y elevación de la LDH, sin exantema ni eosinofilia.'},
  trampa:'Se piensa en toxicidad directa por el número de fármacos. El mecanismo aquí es inmunoalérgico, y la eosinofilia con exantema es lo que lo delata.',
  dx:['Nefritis tubulointersticial aguda','Necrosis tubular aguda','Enfermedad ateroembólica'],
  obj:'Reconocer la nefritis tubulointersticial por fármacos.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las guías KDIGO y Harrison, 21.ª ed.'
},
'MIR-2014-M104': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Nefritis lúpica',
  clave:'El lupus es una enfermedad por INMUNOCOMPLEJOS. Por definición no puede dar una glomerulonefritis PAUCIINMUNE.',
  exp:'La pregunta se responde por incompatibilidad de mecanismos. El lupus daña el riñón mediante el *depósito de inmunocomplejos*, que se ve en la inmunofluorescencia como el llamado patrón "full house", con depósitos de IgG, IgA, IgM, C3 y C1q. La clasificación de la nefritis lúpica recorre seis clases, desde la mesangial mínima hasta la esclerosante, e incluye las formas proliferativas focal y difusa y la membranosa: cualquiera de ellas es posible en esta paciente con ANA, anti-DNA e hipocomplementemia. Lo que no puede aparecer es una glomerulonefritis *pauciinmune*, definida precisamente por la *ausencia* de depósitos inmunes; esa forma es propia de las vasculitis asociadas a ANCA, y en este caso los ANCA son negativos, lo que refuerza aún más la exclusión.',
  no:{0:'La clase II mesangial forma parte de la clasificación de la nefritis lúpica.',2:'La clase III proliferativa focal es una de las formas típicas.',3:'La clase IV proliferativa difusa es la más frecuente y la más grave.',4:'La clase V membranosa explica bien el síndrome nefrótico de esta paciente.'},
  trampa:'Se responde por la gravedad del cuadro clínico en lugar de por el mecanismo inmunológico. Aquí lo que decide es si hay o no depósitos.',
  dx:['Nefritis lúpica','Vasculitis ANCA','Glomerulonefritis membranosa'],
  obj:'Relacionar el mecanismo inmunológico con el patrón histológico.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con la clasificación ISN/RPS de la nefritis lúpica.'
},
'MIR-2014-M106': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Enfermedad ateroembólica',
  clave:'Fracaso renal SEMANAS después de un cateterismo, con lesiones purpúreas en los dedos: ateroembolia de colesterol.',
  exp:'Lo que fija el diagnóstico es el *plazo* junto con las lesiones cutáneas. La nefropatía por contraste aparece en las primeras 24 a 72 horas y se recupera en una o dos semanas; aquí han pasado *tres semanas* y la función renal está peor. La enfermedad *ateroembólica* se debe al desprendimiento de cristales de colesterol de las placas aórticas durante la manipulación arterial, que embolizan de forma progresiva a riñón, piel y otros órganos: por eso el deterioro es diferido y escalonado. Las manifestaciones cutáneas distales son características —livedo reticularis, lesiones purpúreas en los dedos, el llamado síndrome del dedo azul con pulsos conservados— y suele acompañarse de eosinofilia e hipocomplementemia. El pronóstico renal es malo y el tratamiento es de soporte, con estatinas y control tensional.',
  no:{0:'La hipertensión maligna cursa con retinopatía grave y afectación de órganos diana, y no explica las lesiones digitales.',1:'La nefropatía por contraste aparece en las primeras 72 horas y suele recuperarse.',2:'La glomerulonefritis rápidamente progresiva tendría sedimento activo con cilindros hemáticos.',4:'La estenosis bilateral produciría deterioro tras un IECA, no lesiones cutáneas embólicas.'},
  trampa:'Se atribuye todo al contraste porque hubo cateterismo. Las fechas separan un diagnóstico del otro: días frente a semanas.',
  dx:['Enfermedad ateroembólica renal','Nefropatía por contraste','Vasculitis'],
  obj:'Diferenciar ateroembolia de nefropatía por contraste por el plazo.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías KDIGO.'
},
'MIR-2014-M107': {
  esp:'Medicina Interna', tema:'Urología', sub:'Hiperplasia benigna de próstata',
  clave:'Síntomas obstructivos con PSA de 0,5 y sin residuo: hiperplasia benigna. Alfabloqueantes.',
  exp:'El cuadro es una hiperplasia benigna con síntomas del tracto urinario inferior moderados: PSA de 0,5 ng/mL, próstata sin nódulos al tacto, volumen de 35 gramos y *sin residuo posmiccional*, es decir, sin criterios de complicación. En esa situación el tratamiento inicial son los *alfabloqueantes* —tamsulosina, silodosina—, que relajan el músculo liso del cuello vesical y la próstata y alivian los síntomas en pocos días. Los inhibidores de la 5-alfa-reductasa se añaden cuando la próstata es grande, por encima de unos 40 gramos, y actúan reduciendo el volumen glandular, pero tardan meses. La cirugía se reserva para el fracaso del tratamiento médico o para las complicaciones: retención aguda repetida, litiasis vesical, infecciones de repetición, hematuria persistente o deterioro renal.',
  no:{0:'La prostatectomía radical trata el cáncer, y aquí no hay ningún dato que lo sugiera.',1:'La gammagrafía busca metástasis de un cáncer inexistente: el PSA de 0,5 y el tacto normal lo descartan.',2:'El bloqueo androgénico es tratamiento del cáncer avanzado, no de la hiperplasia.',3:'La resección transuretral se reserva para el fracaso médico o las complicaciones.'},
  trampa:'La próstata "mediana-grande" del tacto arrastra a pensar en cirugía. El tamaño importa mucho menos que los síntomas y el residuo.',
  dx:['Hiperplasia benigna de próstata','Cáncer de próstata','Vejiga hipoactiva'],
  obj:'Iniciar el tratamiento médico de la hiperplasia prostática.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las guías de la EAU sobre síntomas del tracto urinario inferior.'
},
'MIR-2014-M108': {
  esp:'Medicina Interna', tema:'Urología', sub:'Pielonefritis obstructiva',
  clave:'Pielonefritis con antecedente de litiasis: imagen urgente. Si hay obstrucción, hay que DRENAR, no solo dar antibiótico.',
  exp:'Una pielonefritis aguda en una paciente con antecedente de cólico nefrítico y dolor cólico de tres días obliga a descartar *obstrucción de la vía urinaria*, mediante ecografía o tomografía sin contraste, y a hacerlo con urgencia. El motivo es que una pionefrosis —pus a presión detrás de una obstrucción— no se resuelve con antibióticos: el fármaco no penetra en una cavidad cerrada, la infección progresa a sepsis y el riñón se destruye en pocas horas. El tratamiento es el *drenaje inmediato*, mediante nefrostomía percutánea o catéter doble jota, además del antibiótico intravenoso. Es uno de los pocos escenarios infecciosos en los que la actuación mecánica urgente pesa más que la elección del antimicrobiano.',
  no:{0:'No es una infección no complicada: hay fiebre, leucocitosis y sospecha de obstrucción.',2:'El germen más frecuente en la infección urinaria complicada sigue siendo E. coli, no S. aureus.',3:'El fluconazol trataría una infección fúngica, que no hay motivo para sospechar aquí.',4:'El sondaje vesical drena la vejiga, no la vía urinaria ALTA, que es donde está la obstrucción.'},
  trampa:'Se ingresa con antibiótico intravenoso y se espera. Si hay obstrucción, sin drenaje el antibiótico no llega y la paciente se deteriora.',
  dx:['Pielonefritis obstructiva','Pionefrosis','Pielonefritis no complicada'],
  obj:'Descartar obstrucción en la pielonefritis y drenar si existe.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las guías de la EAU sobre infecciones urológicas.'
},
'MIR-2014-M110': {
  esp:'Medicina Interna', tema:'Reumatología', sub:'Amiloidosis AA',
  clave:'Artritis reumatoide mal controlada durante años + patrón restrictivo + proteinuria nefrótica: amiloidosis AA.',
  exp:'La amiloidosis *AA* o secundaria es la complicación de las enfermedades inflamatorias crónicas mal controladas: artritis reumatoide, espondiloartritis, enfermedad inflamatoria intestinal, infecciones crónicas y fiebre mediterránea familiar. La inflamación mantenida eleva de forma sostenida la proteína sérica amiloide A, un reactante de fase aguda que se deposita como fibrillas en los tejidos. En este paciente están los dos órganos diana clásicos: el *riñón*, con proteinuria de 4,8 g al día y deterioro del filtrado, que es la manifestación más frecuente y la que marca el pronóstico; y el *corazón*, con engrosamiento de la pared y patrón *restrictivo* con fracción de eyección relativamente conservada, la firma ecocardiográfica de la infiltración. La proteína C reactiva de 124 confirma la inflamación no controlada. El diagnóstico se hace con biopsia y rojo Congo, que muestra la birrefringencia verde manzana.',
  no:{0:'El síndrome cardiorrenal no explica la proteinuria nefrótica ni el engrosamiento parietal.',2:'La miocarditis de células gigantes es fulminante, con insuficiencia cardíaca aguda y arritmias graves.',3:'El infliximab no produce este patrón restrictivo con proteinuria masiva.',4:'La glomerulonefritis membranosa explicaría la proteinuria pero no la miocardiopatía restrictiva.'},
  trampa:'Se atribuye todo a la evolución natural de la artritis reumatoide. La combinación de corazón restrictivo y proteinuria masiva es la firma de la amiloidosis.',
  dx:['Amiloidosis AA','Amiloidosis AL','Miocardiopatía restrictiva'],
  obj:'Sospechar amiloidosis AA en la inflamación crónica mal controlada.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed.'
},

/* ==================== PEDIATRÍA ==================== */
'MIR-2022-M63': {
  esp:'Pediatría', tema:'Traumatología', sub:'Traumatismo facial',
  clave:'Golpe en el MENTÓN y luego la boca se desvía al abrir: fractura de cóndilo por transmisión de la fuerza.',
  exp:'El cóndilo mandibular es el punto débil de la mandíbula: un golpe frontal en el mentón transmite la fuerza a lo largo del arco mandibular y la fractura se produce a distancia, en el cuello del cóndilo. Por eso *toda herida en el mentón obliga a explorar la articulación temporomandibular*, y aquí ese paso se omitió en urgencias. La clínica aparece o se hace evidente en los días siguientes: limitación de la apertura bucal y *desviación de la mandíbula hacia el lado fracturado* al abrir, porque el músculo pterigoideo lateral del lado sano tira sin oposición. En el niño el tratamiento suele ser conservador —dieta blanda, fisioterapia y control—, con un matiz importante: el cóndilo alberga un centro de crecimiento, de modo que estas fracturas exigen seguimiento prolongado por el riesgo de asimetría facial y de anquilosis.',
  no:{0:'Las fracturas de Le Fort afectan al maxilar superior y se producen por traumatismos de alta energía sobre el tercio medio facial.',1:'No hay datos de afectación del maxilar superior.',3:'Una fractura de sínfisis o de rama horizontal daría deformidad y alteración de la oclusión evidentes desde el primer día.'},
  trampa:'Se sutura la herida visible y se da el alta. La lesión importante está lejos del punto de impacto.',
  dx:['Fractura de cóndilo mandibular','Luxación temporomandibular','Contusión facial'],
  obj:'Sospechar fractura condílea ante un traumatismo mentoniano.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con manuales de cirugía oral y maxilofacial.'
},
'MIR-2022-M64': {
  esp:'Pediatría', tema:'Infectología', sub:'Mastoiditis',
  clave:'Pabellón desplazado hacia fuera y abajo con piel retroauricular roja tras una otitis: mastoiditis.',
  exp:'La mastoiditis aguda es la complicación más frecuente de la otitis media y se produce cuando la infección se extiende a las celdillas mastoideas. Su signo característico es el *desplazamiento del pabellón auricular hacia fuera y abajo*, empujado por el edema y la colección retroauricular, junto con eritema, tumefacción y borramiento del surco retroauricular, y la reaparición de la fiebre tras una mejoría inicial, tal como se describe aquí. Es una urgencia: requiere ingreso, antibioterapia intravenosa y tomografía, y drenaje quirúrgico o mastoidectomía si hay absceso o no responde. Sin tratamiento puede progresar a absceso cerebral, trombosis del seno lateral o meningitis.',
  no:{0:'La otitis externa duele al traccionar del pabellón pero no lo desplaza ni afecta a la región retroauricular.',2:'La condritis afecta al cartílago del pabellón, respetando característicamente el lóbulo.',3:'La celulitis periauricular no desplaza el pabellón ni sigue el patrón de recaída febril tras una otitis.'},
  trampa:'Se interpreta como una recaída de la otitis y se repite el antibiótico oral. El desplazamiento del pabellón cambia el escenario por completo.',
  dx:['Mastoiditis aguda','Otitis externa','Celulitis periauricular'],
  obj:'Reconocer la mastoiditis como complicación de la otitis media.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con Nelson, 22.ª ed.'
},

/* ==================== PSIQUIATRÍA ==================== */
'MIR-2021-M97': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Duelo',
  clave:'Un mes tras la muerte de su madre, funcionando bien y capaz de disfrutar: es duelo normal. No se antidepresiva.',
  exp:'El duelo no es una enfermedad. Un mes después de la pérdida, la añoranza, la emoción intensa al recordarla, la dificultad para aceptar la muerte y algún problema de sueño son manifestaciones *esperables*. Dos datos confirman que el proceso es normal: el hombre mantiene la *capacidad de disfrutar* cuando se distrae y su rendimiento laboral es prácticamente normal, algo que no ocurre en el episodio depresivo, donde la anhedonia es global y persistente y la funcionalidad cae. Prescribir un antidepresivo aquí medicaliza un proceso adaptativo y no ha demostrado beneficio: es la afirmación falsa. Lo indicado es acompañar, permitir un hipnótico puntual si el insomnio afecta al día siguiente y *citar de nuevo* en uno o dos meses para vigilar la evolución, porque si a los seis o doce meses persistiera con la misma intensidad e incapacidad, sí habría que replantear el diagnóstico.',
  no:{0:'El diagnóstico de duelo como problema psicosocial es correcto.',1:'Un hipnótico puntual y limitado en el tiempo es aceptable si el insomnio repercute en la vigilia.',3:'La reevaluación en uno o dos meses es exactamente lo indicado.'},
  trampa:'Se receta un antidepresivo por dolor emocional, sin comprobar si hay anhedonia global y pérdida de funcionalidad. El sufrimiento normal no requiere fármaco.',
  dx:['Duelo normal','Episodio depresivo','Trastorno de duelo prolongado'],
  obj:'Distinguir el duelo normal de la depresión y evitar medicalizarlo.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con la CIE-10 y los criterios DSM-5-TR.'
},
'MIR-2022-M132': {
  esp:'Medicina Interna', tema:'Metabolismo', sub:'Porfiria aguda intermitente',
  clave:'Dolor abdominal ligado al ciclo, debilidad, hiponatremia y pruebas normales: porfiria. Se pide PBG y ALA en orina.',
  exp:'La porfiria aguda intermitente es la gran imitadora, y aquí están todas sus señas: mujer joven —el 80% de los casos sintomáticos son mujeres—, crisis de *dolor abdominal intenso* con náuseas y vómitos pero con abdomen blando y pruebas de imagen normales, *relación con el ciclo menstrual* por el efecto desencadenante de la progesterona, *neuropatía* con debilidad de extremidades e *hiponatremia* por secreción inadecuada de ADH. El diagnóstico es sencillo si se piensa en él: determinación de *porfobilinógeno y ácido delta-aminolevulínico en orina* durante la crisis, idealmente en muestra protegida de la luz. Es un caso que enseña algo importante: cuando una paciente acumula diagnósticos vagos —fibromialgia, depresión, dolor funcional— y una cirugía que no resolvió nada, hay que replantear el diagnóstico desde cero en lugar de seguir sumando etiquetas.',
  no:{0:'El gen MEFV corresponde a la fiebre mediterránea familiar, que cursa con fiebre alta y serositis en las crisis.',2:'Los anticuerpos antimitocondriales son de la colangitis biliar primaria, con colestasis y prurito.',3:'La calprotectina fecal cribaría enfermedad inflamatoria intestinal, que no explicaría la neuropatía ni la hiponatremia.'},
  trampa:'Se acepta la etiqueta previa de fibromialgia y depresión. La hiponatremia y la debilidad de extremidades no encajan en esas etiquetas y obligan a mirar de nuevo.',
  dx:['Porfiria aguda intermitente','Fibromialgia','Fiebre mediterránea familiar','Endometriosis'],
  obj:'Sospechar porfiria aguda ante dolor abdominal con neuropatía e hiponatremia.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed.'
},
'MIR-2022-M137': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Hiponatremia',
  clave:'Na 118 con orina MUY DILUIDA (78 mOsm/kg, densidad 1002): polidipsia primaria. En el SIADH la orina está concentrada.',
  exp:'Toda hiponatremia se analiza en dos pasos: primero la osmolaridad plasmática, que aquí es de 252 y confirma que es una hiponatremia *hipotónica* verdadera; y después la osmolaridad *urinaria*, que es la que separa las causas. Una orina de 78 mOsm/kg con densidad de 1002 significa que el riñón está *diluyendo al máximo* y eliminando agua correctamente: la ADH está suprimida, como debe ser. El problema, por tanto, es un aporte de agua que supera la capacidad de excreción, es decir, *polidipsia primaria*, muy frecuente en pacientes con esquizofrenia —la potomanía psicógena— y favorecida por el abandono del tratamiento. En el SIADH ocurre justo lo contrario: la ADH está inapropiadamente alta y la orina sale *concentrada*, por encima de 100 y habitualmente de 300 mOsm/kg. La corrección debe ser lenta, por el riesgo de mielinólisis pontina.',
  no:{0:'La insuficiencia suprarrenal cursa con hiperpotasemia, hipotensión e hiperpigmentación, y la orina no estaría tan diluida.',2:'La diabetes insípida produce HIPERnatremia por pérdida de agua libre, no hiponatremia.',3:'En el SIADH la osmolaridad urinaria estaría elevada, no en 78.'},
  trampa:'Se diagnostica SIADH ante cualquier hiponatremia en un paciente psiquiátrico —y hay antipsicóticos que lo producen—. La osmolaridad urinaria distingue un cuadro del otro en un solo dato.',
  dx:['Polidipsia primaria','SIADH','Diabetes insípida','Insuficiencia suprarrenal'],
  obj:'Diferenciar polidipsia primaria de SIADH por la osmolaridad urinaria.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías europeas sobre hiponatremia.'
},
'MIR-2022-M88': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Depresión en el anciano',
  clave:'Anciano con "fallo de memoria" de tres semanas, angustia matutina y delirio de culpa: depresión psicótica, no demencia.',
  exp:'Varios datos separan este cuadro de una demencia. La *instauración es rápida*, en tres semanas, frente al deterioro insidioso de meses o años del Alzheimer. Los síntomas cardinales son afectivos: angustia con *empeoramiento matutino*, insomnio, pérdida de peso e inquietud. Y hay *ideas delirantes congruentes con el estado de ánimo* —de culpa y de perjuicio—, que son las típicas de la depresión psicótica. El déficit de memoria y la inatención corresponden a la *pseudodemencia depresiva*: el paciente no está desmemoriado, está tan inatento y enlentecido que no registra; suele quejarse activamente de su fallo de memoria y responder "no sé" en lugar de confabular, al revés que el paciente con demencia. El diagnóstico importa porque es *tratable*: responde a antidepresivo con antipsicótico, y la terapia electroconvulsiva es muy eficaz en el anciano con síntomas psicóticos o riesgo vital.',
  no:{0:'La catalepsia es un signo motor, no un diagnóstico, y no se describe aquí.',1:'La esquizofrenia de inicio tardío no cursa con esta angustia matutina ni con delirios de culpa congruentes.',2:'El Alzheimer se instaura en meses o años y no cursa con delirio de culpa ni con ritmo circadiano del ánimo.'},
  trampa:'Se etiqueta de demencia incipiente por la edad y la queja de memoria, y se pierde un cuadro que se cura. En el anciano, toda "demencia" de tres semanas es depresión hasta que se demuestre lo contrario.',
  dx:['Depresión psicótica','Enfermedad de Alzheimer','Delirium','Esquizofrenia tardía'],
  obj:'Distinguir la pseudodemencia depresiva de la demencia.',
  ref:'Examen MIR 2022, Ministerio de Sanidad de España. Contrastado con los criterios DSM-5-TR y guías NICE sobre depresión.'
}

});
