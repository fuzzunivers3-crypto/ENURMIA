/* ============================================================
   EXPLICACIONES — lote 05  (34 casos clínicos)
   Años 2016 y 2018-2021. MIR 2017 excluido por cuarentena.
   Ninguna respuesta oficial resultó sospechosa.
   ============================================================ */
window.EXPLICACIONES = Object.assign(window.EXPLICACIONES || {}, {

/* ---------------------- NEUROLOGÍA ---------------------- */
'MIR-2016-M154': {
  tema:'Neurología',
  clave:'Crisis de 15 minutos, varias al día, con signos autonómicos: hemicránea paroxística.',
  exp:'La respuesta absoluta a la indometacina es el rasgo definitorio de la hemicránea paroxística, hasta el punto de formar parte de sus criterios diagnósticos. Pertenece al grupo de las cefaleas trigémino-autonómicas, que comparten dolor periorbitario unilateral con lagrimeo, congestión nasal e inyección conjuntival del mismo lado. Lo que la separa de la cefalea en racimos es la duración —minutos frente a media hora o más— y la frecuencia mucho mayor de las crisis.',
  no:{0:'Estas cefaleas son episódicas: el paciente queda asintomático entre las crisis.',1:'La fotofobia con náuseas y vómitos define la migraña, que cursa con crisis de horas, no de minutos, y sin signos autonómicos tan marcados.',3:'La relación con el ciclo menstrual es propia de la migraña.'},
  trampa:'Se etiqueta como migraña por ser una cefalea unilateral en una mujer joven. La duración de minutos y la repetición varias veces al día son incompatibles con la migraña.',
  dx:['Hemicránea paroxística','Cefalea en racimos','Migraña','Neuralgia del trigémino'],
  obj:'Reconocer las cefaleas trigémino-autonómicas por duración y frecuencia, y la respuesta a indometacina.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con la clasificación internacional de cefaleas (ICHD-3).'
},
'MIR-2016-M173': {
  tema:'Oftalmología',
  clave:'El defecto pupilar aferente relativo exige lesión del NERVIO o de la retina, no del medio transparente.',
  exp:'La catarata opacifica el cristalino y reduce la luz que llega, pero la reduce por igual para las dos vías del reflejo, y además el sistema pupilar se adapta: no genera asimetría entre ambos ojos. Por eso una catarata, por densa que sea, no produce defecto pupilar aferente relativo. Cuando aparece, hay que buscar patología del nervio óptico o de la retina, no de los medios.',
  no:{0:'Un desprendimiento de retina extenso sí lo produce, porque hay retina que ya no capta luz.',2:'La neuritis óptica es la causa clásica: el nervio conduce peor por un lado.',3:'La obstrucción de la vena central de la retina produce isquemia retiniana suficiente para generarlo.'},
  trampa:'Se asume que "si ve menos, la pupila responde menos". La opacidad de medios no crea asimetría aferente; la lesión neural o retiniana sí.',
  dx:['Catarata','Neuropatía óptica','Desprendimiento de retina','Oclusión venosa retiniana'],
  obj:'Entender qué lesiones producen defecto pupilar aferente y cuáles no.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Kanski, Oftalmología Clínica.'
},
'MIR-2016-M188': {
  esp:'Psiquiatría', tema:'Psiquiatría general',
  clave:'Se pide la INCORRECTA. Sin conciencia de enfermedad y con heteroagresividad, dar el alta es inaceptable.',
  exp:'El paciente presenta un episodio maníaco con agresividad física, insomnio global y ausencia total de conciencia de enfermedad. En esa situación no puede otorgar un consentimiento válido para rechazar el ingreso, porque la propia enfermedad le impide valorar su necesidad. El internamiento involuntario existe precisamente para esto y está previsto legalmente, con la correspondiente comunicación judicial. Enviarlo a casa lo expone a él y a terceros.',
  no:{0:'Es correcta: el internamiento involuntario es la vía prevista cuando el paciente no puede decidir por su enfermedad y hay riesgo.',1:'Es correcta: la contención verbal precede siempre a la farmacológica, y esta a la mecánica.',3:'Es correcta: informar a la familia del motivo del ingreso forma parte del manejo.'},
  trampa:'Se aplica el principio de autonomía de forma automática. La autonomía exige capacidad, y en la manía con ausencia de conciencia de enfermedad esa capacidad está abolida.',
  dx:['Episodio maníaco','Trastorno bipolar tipo I','Psicosis inducida por sustancias'],
  obj:'Distinguir cuándo el rechazo del paciente es una decisión autónoma y cuándo es un síntoma.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con el DSM-5-TR y la normativa española de internamiento no voluntario.'
},
'MIR-2019-M170': {
  clave:'Glucosa de 5 mg/dL en el líquido: hipoglucorraquia extrema con celularidad mononuclear y curso de semanas.',
  exp:'Una glucorraquia prácticamente nula con pleocitosis mononuclear y proteínas altas, en un paciente con síndrome constitucional de semanas, orienta a meningitis neoplásica o carcinomatosa. Las células tumorales consumen glucosa de forma masiva. El diferencial incluye tuberculosis y meningitis fúngica, que también producen hipoglucorraquia con linfocitos, pero el contexto de astenia, anorexia y pérdida de peso apunta a neoplasia. El diagnóstico exige citología del líquido, a menudo repetida.',
  no:{1:'La meningitis bacteriana aguda cursa con predominio de POLIMORFONUCLEARES y evolución de horas, no de semanas.',2:'El Guillain-Barré produce disociación albuminocitológica: proteínas altas con celularidad NORMAL, y no altera la glucosa.',3:'La hemorragia subaracnoidea da xantocromía, pero con cefalea explosiva y sin este perfil bioquímico.'},
  trampa:'La xantocromía hace pensar en hemorragia subaracnoidea. En realidad aparece con cualquier proteinorraquia alta, y aquí las proteínas están muy elevadas.',
  dx:['Meningitis carcinomatosa','Meningitis tuberculosa','Meningitis fúngica','Meningitis bacteriana'],
  obj:'Interpretar la hipoglucorraquia con celularidad mononuclear en un curso subagudo.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., complicaciones neurológicas del cáncer.'
},
'MIR-2019-M173': {
  tema:'Urgencias',
  clave:'Incendio en espacio cerrado con poliuretano, acidosis láctica y saturación casi normal: cianuro.',
  exp:'La combustión de poliuretano, lana, seda y plásticos nitrogenados libera cianhídrico. El cianuro bloquea la citocromo oxidasa, de modo que la célula no puede usar el oxígeno aunque le llegue: por eso la saturación se mantiene mientras el lactato se dispara. La hidroxicobalamina es el antídoto de elección porque secuestra el cianuro formando cianocobalamina, es segura empíricamente y no compromete el transporte de oxígeno, algo crucial si además hay intoxicación por monóxido.',
  no:{0:'El oxígeno es necesario pero no es el tratamiento específico: la célula no puede utilizarlo.',2:'La cámara hiperbárica es el tratamiento de la intoxicación grave por monóxido de carbono, no del cianuro, y aquí no hay datos de carboxihemoglobina alta.',3:'La fluidoterapia es soporte, no antídoto.'},
  trampa:'Toda víctima de incendio se atribuye al monóxido de carbono. El lactato muy elevado con saturación conservada es la firma del cianuro, y ambas intoxicaciones coexisten con frecuencia.',
  dx:['Intoxicación por cianuro','Intoxicación por monóxido de carbono','Lesión por inhalación'],
  obj:'Sospechar cianuro en el incendio de espacio cerrado con acidosis láctica.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con Goldfrank, Toxicologic Emergencies.'
},
'MIR-2019-M49': {
  tema:'Dermatología',
  clave:'El porcentaje de superficie desprendida es lo que separa las dos entidades: más del 30% es necrólisis.',
  exp:'El síndrome de Stevens-Johnson y la necrólisis epidérmica tóxica son la misma enfermedad en distinto grado, y lo único que las distingue es la extensión del despegamiento epidérmico: menos del 10% es Stevens-Johnson, entre el 10 y el 30% es la forma de solapamiento, y más del 30% es necrólisis epidérmica tóxica o síndrome de Lyell. La carbamazepina es uno de los fármacos implicados con más frecuencia, junto con alopurinol, sulfamidas y lamotrigina.',
  no:{0:'La urticaria produce habones evanescentes y pruriginosos, sin desprendimiento epidérmico ni afectación mucosa.',1:'El eritema exudativo multiforme menor cursa con lesiones en diana típicas y afectación mucosa mínima o nula, sin despegamiento extenso.',2:'Sería Stevens-Johnson si el despegamiento fuera inferior al 10%; aquí supera el 30%.'},
  trampa:'Se responde Stevens-Johnson porque es el nombre más conocido, sin leer el porcentaje de superficie afectada, que es el dato que la pregunta pone a propósito.',
  dx:['Necrólisis epidérmica tóxica','Síndrome de Stevens-Johnson','Síndrome DRESS','Pénfigo vulgar'],
  obj:'Graduar las reacciones cutáneas graves por la superficie de despegamiento epidérmico.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con Fitzpatrick, Dermatología en Medicina General.'
},

/* ---------------------- CARDIOLOGÍA ---------------------- */
'MIR-2019-M165': {
  clave:'La fiebre por encima de 38 °C es criterio de mal pronóstico en la pericarditis aguda.',
  exp:'Los criterios que obligan a hospitalizar una pericarditis aguda son la fiebre mayor de 38 °C, el curso subagudo, el derrame pericárdico abundante o el taponamiento, la falta de respuesta a los antiinflamatorios tras una semana, la inmunosupresión, el traumatismo, la anticoagulación oral y la elevación de troponina que indique miopericarditis. Su presencia sugiere una causa distinta de la viral o idiopática y justifica el ingreso.',
  no:{0:'El comienzo agudo del dolor es lo habitual y no marca gravedad; lo que preocupa es el curso SUBAGUDO.',1:'La hipertensión mal controlada no es criterio pronóstico en la pericarditis.',3:'El derrame MODERADO no cumple criterio: el que preocupa es el abundante o con compromiso hemodinámico.'},
  trampa:'Se elige el derrame por parecer lo más "orgánico" del caso. El umbral es la cuantía, y un derrame moderado no lo alcanza.',
  dx:['Pericarditis aguda','Miopericarditis','Taponamiento cardíaco','SCACEST'],
  obj:'Conocer los criterios de mal pronóstico que indican ingreso en la pericarditis.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con la guía ESC de enfermedades del pericardio.'
},
'MIR-2019-M93': {
  clave:'El soplo se REDUCE con Valsalva y el segundo tono está atenuado: es valvular, no dinámico.',
  exp:'Aquí está la clave que separa la estenosis aórtica de la miocardiopatía hipertrófica obstructiva. La maniobra de Valsalva disminuye la precarga: en la estenosis aórtica llega menos sangre al ventrículo, pasa menos por la válvula estrecha y el soplo DISMINUYE; en la miocardiopatía hipertrófica, menos volumen significa más obstrucción dinámica y el soplo AUMENTA. El segundo tono atenuado por rigidez valvular y el síncope de esfuerzo completan el cuadro de estenosis aórtica grave.',
  no:{0:'La tromboembolia no produce soplo sistólico rudo ni hipertrofia ventricular en el ECG.',1:'En la miocardiopatía hipertrófica el soplo aumentaría con Valsalva, y el segundo tono no estaría atenuado.',3:'La disección aórtica cursa con dolor torácico desgarrador y asimetría de pulsos, no con síncope de esfuerzo y soplo eyectivo.'},
  trampa:'Los dos diagnósticos comparten síncope de esfuerzo, soplo sistólico e hipertrofia ventricular. La única forma de separarlos a pie de cama es la maniobra de Valsalva.',
  dx:['Estenosis aórtica grave','Miocardiopatía hipertrófica obstructiva','Síncope vasovagal'],
  obj:'Usar la respuesta del soplo a Valsalva para diferenciar obstrucción fija de dinámica.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., exploración cardiovascular.'
},
'MIR-2019-M95': {
  clave:'QTc de 510 ms con tres fármacos que lo alargan y bradicardia: torsade de pointes.',
  exp:'La paciente acumula factores para prolongar el QT: amiodarona, levofloxacino, haloperidol, bradicardia de 50 lpm, edad avanzada y probables trastornos electrolíticos por los vómitos. Sobre un QT largo aparece la taquicardia ventricular polimorfa en torsión de puntas, que suele ser autolimitada —de ahí el síncope con recuperación en segundos— pero puede degenerar en fibrilación ventricular. El manejo es retirar los fármacos implicados, corregir potasio y magnesio y administrar sulfato de magnesio.',
  no:{1:'El infarto produciría dolor y alteraciones del ST, ausentes aquí; el QRS es estrecho y el ritmo sinusal.',2:'Un ictus no produce síncope con recuperación completa en segundos y sin focalidad.',3:'El ECG muestra ritmo SINUSAL a 50 lpm, no bloqueo auriculoventricular completo.'},
  trampa:'Se busca la causa en la enfermedad de base y no en la lista de fármacos añadidos durante el ingreso. Tres fármacos que alargan el QT es una combinación evitable y frecuente.',
  dx:['Torsade de pointes','Bloqueo AV','Síncope vasovagal','Infarto de miocardio'],
  obj:'Reconocer el QT largo farmacológico como causa de síncope en el paciente polimedicado.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., arritmias ventriculares.'
},

/* ---------------------- NEFROLOGÍA Y REUMATOLOGÍA ---------------------- */
'MIR-2018-M178': {
  esp:'Pediatría', tema:'Neonatología',
  clave:'Quince minutos de reanimación correcta sin ningún signo vital: procede detenerse.',
  exp:'Las guías de reanimación neonatal establecen que, si tras al menos 10 a 20 minutos de reanimación adecuada —ventilación eficaz, compresiones y adrenalina— no hay ningún signo vital ni frecuencia cardíaca detectable, es razonable interrumpir el esfuerzo, porque la supervivencia sin secuelas neurológicas graves es excepcional. La decisión se toma con el equipo, se informa a la familia y se documenta.',
  no:{0:'La comprobación del tubo forma parte de los pasos correctivos y debería haberse hecho al principio, no a los 15 minutos.',1:'Prolongar la adrenalina sin ninguna respuesta no modifica el desenlace.',2:'La hipotermia terapéutica se aplica al recién nacido REANIMADO con encefalopatía hipóxico-isquémica, no al que no tiene signos vitales.'},
  trampa:'Cuesta aceptar que detenerse también es una decisión clínica correcta, y que prolongar sin criterio no es hacer más por el paciente.',
  dx:['Asfixia perinatal grave','Encefalopatía hipóxico-isquémica'],
  obj:'Conocer los criterios para interrumpir la reanimación neonatal.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con el Programa de Reanimación Neonatal (AAP/AHA).'
},
'MIR-2018-M195': {
  tema:'Reumatología',
  clave:'5.000 leucocitos con glucosa normal parece gota, pero con fiebre hay que descartar infección igual.',
  exp:'El cuadro es muy sugestivo de gota: monoartritis nocturna con afectación simultánea de la primera metatarsofalángica y dolor al roce. Pero el líquido debe analizarse siempre por completo: microscopía con luz polarizada para ver cristales de urato con birrefringencia negativa, y además Gram y cultivo, porque gota e infección pueden coexistir y el recuento celular por sí solo no las distingue con seguridad. El ácido úrico sérico no sirve: puede ser normal durante la crisis.',
  no:{1:'El ácido úrico no diagnostica la crisis y el alopurinol NUNCA se inicia en fase aguda.',2:'La imagen no aporta en una monoartritis aguda con líquido ya obtenido.',3:'La ceftazidima es un antipseudomónico sin indicación aquí, y tratar a ciegas sin analizar el líquido es prematuro.'},
  trampa:'El cuadro es tan típico de gota que se salta el cultivo. Confirmar cristales no descarta que haya además una infección.',
  dx:['Gota aguda','Artritis séptica','Artritis por pirofosfato'],
  obj:'Analizar siempre el líquido sinovial completo, aunque el cuadro parezca típico de gota.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las recomendaciones EULAR sobre gota.'
},
'MIR-2018-M196': {
  clave:'Vasculitis ANCA con afectación renal y pulmonar: es una forma GRAVE y necesita inducción potente.',
  exp:'La granulomatosis con poliangeítis con glomerulonefritis —creatinina elevada y cilindros hemáticos— y nódulos pulmonares cavitados es una enfermedad que amenaza órgano y vida. La inducción de remisión combina corticoides con ciclofosfamida o rituximab; el resto de inmunosupresores no tienen potencia suficiente para esta fase y se reservan para el mantenimiento posterior, una vez lograda la remisión.',
  no:{0:'La ciclosporina no forma parte del esquema de inducción de las vasculitis ANCA.',1:'La azatioprina es un fármaco de MANTENIMIENTO, no de inducción.',2:'El micofenolato también corresponde al mantenimiento o a formas sin compromiso orgánico grave.'},
  trampa:'Se confunde inducción con mantenimiento. Son fases distintas con fármacos distintos, y equivocarlas cuesta la función renal.',
  dx:['Granulomatosis con poliangeítis','Poliangeítis microscópica','Síndrome de Goodpasture','Lupus'],
  obj:'Distinguir los fármacos de inducción de los de mantenimiento en las vasculitis ANCA.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las recomendaciones EULAR/ERA-EDTA sobre vasculitis asociadas a ANCA.'
},

/* ---------------------- ONCOLOGÍA ---------------------- */
'MIR-2018-M145': {
  tema:'Urología',
  clave:'Hematuria macroscópica en una fumadora de 57 años: cáncer de vejiga hasta demostrar lo contrario.',
  exp:'La hematuria macroscópica monosintomática en un adulto, sobre todo fumador, obliga a descartar tumor urotelial. La ecografía tiene sensibilidad limitada para lesiones planas o pequeñas y para el carcinoma in situ, de modo que una ecografía normal no descarta nada. El estudio se completa con cistoscopia y con tomografía con contraste en fase excretora, la llamada uro-TC. El tabaco es el principal factor de riesgo, y las peluqueras tienen exposición ocupacional a aminas aromáticas.',
  no:{0:'No hay síntomas miccionales ni fiebre; tratar como infección retrasa el diagnóstico.',1:'La tomografía SIN contraste sirve para litiasis, pero no evalúa el urotelio.',2:'El cistocele no produce hematuria macroscópica con coágulos.'},
  trampa:'Una ecografía normal tranquiliza. En hematuria del adulto la ecografía nunca sustituye a la cistoscopia.',
  dx:['Carcinoma urotelial de vejiga','Litiasis','Infección urinaria','Carcinoma renal'],
  obj:'Indicar cistoscopia ante hematuria macroscópica del adulto pese a ecografía normal.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías de la European Association of Urology sobre cáncer vesical.'
},
'MIR-2018-M213': {
  clave:'Se pide la EXCEPCIÓN. Tiene 32 años: es PREmenopáusica y los inhibidores de aromatasa no le sirven solos.',
  exp:'Los inhibidores de la aromatasa bloquean la conversión periférica de andrógenos en estrógenos, que es la fuente principal de estrógenos DESPUÉS de la menopausia. En una mujer premenopáusica el ovario sigue produciendo estrógenos directamente y el inhibidor no lo impide; de hecho puede aumentar las gonadotropinas y estimular el ovario. En la premenopáusica se usa tamoxifeno, o un inhibidor de aromatasa solo si se asocia supresión ovárica.',
  no:{0:'La quimioterapia está indicada: 8 de 12 ganglios afectados es enfermedad de alto riesgo.',1:'La radioterapia sobre la mama es obligada tras cirugía conservadora.',3:'Con afectación ganglionar extensa, la irradiación de áreas ganglionares está indicada.'},
  trampa:'Se elige el fármaco hormonal por el perfil del tumor —receptores positivos— sin mirar la edad de la paciente. El estado menopáusico decide cuál se puede usar.',
  dx:['Carcinoma ductal infiltrante con afectación ganglionar','Cáncer de mama premenopáusico'],
  obj:'Elegir la hormonoterapia según el estado menopáusico.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías ESMO sobre cáncer de mama precoz.'
},
'MIR-2018-M217': {
  clave:'Se pide lo que NO se hace. El delirium se estudia, no se seda de entrada con benzodiacepinas.',
  exp:'La desorientación y la agitación de 48 horas en una paciente oncológica es un delirium, y el delirium tiene causa: hipercalcemia por metástasis óseas, fármacos, infección, deshidratación, fallo hepático o renal. Lo primero es buscarla con exploración y analítica. Las benzodiacepinas empeoran la confusión en el delirium hiperactivo del anciano y solo se usan en la abstinencia alcohólica o en la sedación paliativa terminal; si hace falta control sintomático, se prefiere un neuroléptico en dosis baja.',
  no:{0:'La analítica es correcta y prioritaria: la hipercalcemia es muy probable con metástasis óseas y es tratable.',1:'La exploración física completa es imprescindible: puede revelar globo vesical, fecaloma o foco infeccioso.',3:'Evitar la sujeción es correcto: aumenta la agitación y las complicaciones.'},
  trampa:'La agitación empuja a sedar. En el delirium sedar sin buscar la causa empeora el cuadro y oculta una situación reversible.',
  dx:['Delirium','Hipercalcemia tumoral','Progresión cerebral','Infección'],
  obj:'Buscar la causa del delirium antes de sedar, y evitar benzodiacepinas.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías NICE sobre delirium y la EAPC sobre cuidados paliativos.'
},

/* ---------------------- INFECTOLOGÍA ---------------------- */
'MIR-2018-M230': {
  esp:'Pediatría', tema:'Neonatología',
  clave:'Calcificaciones PERIVENTRICULARES con microcefalia y trombocitopenia: citomegalovirus congénito.',
  exp:'La localización de las calcificaciones cerebrales orienta el diagnóstico entre las infecciones congénitas: en el citomegalovirus son PERIVENTRICULARES, mientras que en la toxoplasmosis son difusas por todo el parénquima. El citomegalovirus congénito asocia además retraso del crecimiento intrauterino, microcefalia, hepatoesplenomegalia, ictericia con predominio DIRECTO —como aquí, 12 de bilirrubina con solo 2,5 de indirecta—, petequias por trombocitopenia y sordera neurosensorial, que es la secuela más frecuente.',
  no:{0:'El estreptococo del grupo B produce sepsis o meningitis neonatal aguda, no malformaciones ni calcificaciones.',1:'La rubéola congénita cursa con cardiopatía, cataratas y sordera, pero no con este patrón de calcificaciones periventriculares.',3:'El VIH congénito no produce este cuadro en las primeras 24 horas de vida.'},
  trampa:'Se confunden las calcificaciones del citomegalovirus con las de la toxoplasmosis. La localización es lo único que las separa en la imagen.',
  dx:['Citomegalovirus congénito','Toxoplasmosis congénita','Rubéola congénita','Sepsis neonatal'],
  obj:'Diferenciar las infecciones congénitas por el patrón de calcificaciones.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed., infecciones congénitas.'
},
'MIR-2018-M233': {
  clave:'No vacunado: hace falta inmunoglobulina Y la pauta vacunal COMPLETA, no una sola dosis.',
  exp:'La profilaxis postexposición combina protección inmediata y duradera. La inmunoglobulina específica aporta anticuerpos ya formados que actúan de inmediato pero se agotan en semanas; la vacuna genera inmunidad propia, y para eso necesita la pauta completa de tres dosis, no una sola. Ambas se administran cuanto antes, preferiblemente en las primeras 24 horas.',
  no:{0:'Una dosis aislada de vacuna no genera protección duradera: hay que completar la pauta.',2:'La antisepsia local es correcta y siempre se hace, pero sola no protege; y falta la vacuna.',3:'Omitir la inmunoglobulina deja al paciente sin protección durante las semanas que tarda la vacuna en hacer efecto.'},
  trampa:'Se acierta con las dos medidas pero se falla en la pauta. El detalle de "vacunación completa" es lo que distingue la respuesta correcta.',
  dx:['Exposición accidental a hepatitis B'],
  obj:'Recordar que la profilaxis postexposición requiere la pauta vacunal completa.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las recomendaciones de los CDC sobre exposición a patógenos hemáticos.'
},
'MIR-2018-M41': {
  tema:'Farmacología',
  clave:'Antibiótico anti-SARM que eleva la creatina cinasa: daptomicina.',
  exp:'La daptomicina se inserta en la membrana del microorganismo y despolariza, pero también afecta al músculo esquelético y produce elevación de la creatina cinasa, con riesgo de rabdomiólisis. Por eso se monitoriza la CPK semanalmente y se evita asociarla a estatinas —este paciente las toma—. Un detalle adicional: la daptomicina se inactiva con el surfactante pulmonar, de modo que no sirve para la neumonía, aunque sí para la endocarditis derecha y la bacteriemia.',
  no:{1:'La quinupristina-dalfopristina produce mialgias y artralgias, pero no es de uso habitual y no es la respuesta esperada.',2:'El linezolid produce mielosupresión, neuropatía óptica y periférica, y acidosis láctica, no elevación de la CPK.',3:'La cloxacilina no cubre SARM: precisamente por la resistencia a meticilina no se puede usar.'},
  trampa:'Se elige el antibiótico anti-SARM más conocido sin recordar cuál tiene toxicidad muscular. Cada uno tiene su órgano diana.',
  dx:['Endocarditis por SARM','Rabdomiólisis por daptomicina','Miopatía por estatinas'],
  obj:'Asociar cada anti-SARM con su toxicidad característica.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Mandell y con la guía ESC de endocarditis infecciosa.'
},

/* ---------------------- MEDICINA GERIÁTRICA Y NEUMOLOGÍA ---------------------- */
'MIR-2019-M137': {
  tema:'Traumatología',
  clave:'Acortamiento y rotación externa: fractura de cadera. Se opera pronto, aunque tenga 93 años.',
  exp:'La cirugía precoz, dentro de las primeras 24 a 48 horas, reduce la mortalidad, el dolor, el delirium y las complicaciones del encamamiento —úlceras, neumonía, tromboembolia—. El manejo ortogeriátrico conjunto y la sedestación precoz completan el estándar. Retrasar la intervención para "optimizar" comorbilidades estables no mejora el resultado y empeora el pronóstico; solo se demora si hay una condición aguda corregible.',
  no:{0:'La ecocardiografía sistemática sin sospecha clínica concreta solo genera retrasos.',1:'Encadenar interconsultas antes de decidir retrasa la cirugía sin beneficio demostrado.',2:'El tratamiento conservador en una fractura de cadera desplazada condena al encamamiento y multiplica la mortalidad.'},
  trampa:'La edad y la lista de comorbilidades empujan a "estabilizar primero". En la fractura de cadera la demora es en sí misma un factor de riesgo.',
  dx:['Fractura de cadera','Fractura pertrocantérea','Fractura subcapital'],
  obj:'Operar precozmente la fractura de cadera del anciano con manejo ortogeriátrico.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con las guías NICE sobre fractura de cadera.'
},
'MIR-2019-M163': {
  tema:'Endocrinología',
  clave:'Barthel de 30 con múltiples comorbilidades: el objetivo glucémico se relaja, no se aprieta.',
  exp:'En el anciano frágil con dependencia funcional grave, comorbilidad múltiple y expectativa de vida limitada, el beneficio del control estricto —que tarda años en aparecer— no llega a materializarse, mientras que el riesgo de hipoglucemia es inmediato y grave: caídas, fracturas, arritmias, deterioro cognitivo. Por eso las guías recomiendan objetivos de HbA1c entre 8 y 8,5% en este perfil, priorizando evitar hipoglucemias y síntomas de hiperglucemia.',
  no:{0:'Un objetivo de 6-6,5% en este paciente es peligroso: expone a hipoglucemias graves sin beneficio alguno.',1:'Menos de 7% es el objetivo del adulto sano con larga expectativa de vida.',2:'Entre 7 y 7,5% corresponde al anciano con buena situación funcional y pocas comorbilidades.'},
  trampa:'Se asume que cuanto más bajo, mejor. En el anciano frágil la hipoglucemia mata antes que la hiperglucemia moderada.',
  dx:['Diabetes tipo 2 en anciano frágil'],
  obj:'Individualizar el objetivo de HbA1c según la fragilidad y la expectativa de vida.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con ADA, Standards of Care, capítulo de adultos mayores.'
},
'MIR-2019-M164': {
  tema:'Neumología',
  clave:'Hipotensión, confusión, frecuencia respiratoria de 35 y saturación del 80%: criterios de neumonía grave.',
  exp:'Este paciente cumple varios criterios menores y prácticamente un criterio mayor de la clasificación ATS/IDSA: confusión, taquipnea igual o mayor de 30, hipotensión que requerirá fluidos, afectación multilobar e hipoxemia grave. Además su CURB-65 es alto: confusión, frecuencia respiratoria elevada, presión baja y edad mayor de 65. Todo ello indica ingreso en cuidados intensivos, no en planta.',
  no:{0:'El manejo domiciliario es impensable con esta hipoxemia y esta hipotensión.',1:'La observación en urgencias no proporciona el soporte que este paciente va a necesitar.',2:'La planta convencional no puede ofrecer soporte ventilatorio ni vasoactivo si se deteriora, que es lo esperable.'},
  trampa:'Se aplica CURB-65 y se concluye "ingreso" sin distinguir planta de cuidados intensivos. Con saturación del 80% e hipotensión, el nivel de cuidados es otro.',
  dx:['Neumonía adquirida en la comunidad grave','Shock séptico','Insuficiencia respiratoria aguda'],
  obj:'Aplicar los criterios de neumonía grave para decidir el nivel asistencial.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con las guías ATS/IDSA sobre neumonía adquirida en la comunidad.'
},

/* ---------------------- DIGESTIVO ---------------------- */
'MIR-2018-M79': {
  clave:'Colitis ulcerosa con patrón COLESTÁSICO: la asociación clásica es la colangitis esclerosante.',
  exp:'La fosfatasa alcalina y la gammaglutamiltransferasa muy elevadas con transaminasas solo ligeramente altas dibujan un patrón colestásico. En un paciente joven con colitis ulcerosa, esa combinación es colangitis esclerosante primaria hasta demostrar lo contrario: hasta un 5% de los pacientes con colitis ulcerosa la desarrollan. Se diagnostica con colangiorresonancia y obliga a vigilancia estrecha por el riesgo de colangiocarcinoma y de cáncer colorrectal.',
  no:{0:'La colangitis biliar primaria afecta sobre todo a mujeres de mediana edad y se asocia a anticuerpos antimitocondriales, no a colitis ulcerosa.',1:'La hepatitis autoinmune da patrón de CITÓLISIS, con transaminasas muy elevadas.',2:'La coledocolitiasis produce colestasis pero de forma aguda, con dolor y elevación de bilirrubina, y no encaja con un mes de astenia.'},
  trampa:'Se busca una complicación intestinal de la colitis ulcerosa. La manifestación extraintestinal hepática es la que explica la analítica.',
  dx:['Colangitis esclerosante primaria','Colangitis biliar primaria','Hepatitis autoinmune','Hepatotoxicidad'],
  obj:'Asociar colitis ulcerosa con colangitis esclerosante ante patrón colestásico.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías EASL sobre colangitis esclerosante primaria.'
},
'MIR-2018-M80': {
  clave:'Disfagia a sólidos de años con restos alimentarios en el esófago: acalasia.',
  exp:'La manometría de la acalasia muestra dos alteraciones simultáneas: ausencia de peristalsis en el cuerpo esofágico y esfínter esofágico inferior hipertenso que no relaja con la deglución. El resultado es un esófago que no propulsa y una puerta de salida que no se abre, de ahí los restos alimentarios y la pérdida de peso. Antes de tratarla hay que descartar pseudoacalasia por tumor de la unión, sobre todo en mayores con evolución corta.',
  no:{0:'El esfínter esofágico SUPERIOR es de músculo estriado y participa en los trastornos orofaríngeos, no en la acalasia.',1:'La presencia de peristalsis conservada excluye la acalasia por definición.',3:'Un esfínter inferior hipotenso con relajaciones completas es lo propio del reflujo gastroesofágico, exactamente lo contrario.'},
  trampa:'Se recuerda "el esfínter no relaja" y se olvida la otra mitad: también falta la peristalsis. Hacen falta las dos para el diagnóstico.',
  dx:['Acalasia','Pseudoacalasia tumoral','Espasmo esofágico difuso','Estenosis péptica'],
  obj:'Reconocer el patrón manométrico completo de la acalasia.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con la clasificación de Chicago y Harrison 21.ª ed.'
},
'MIR-2020-M151': {
  tema:'Infectología',
  clave:'Fracaso del metronidazol en Clostridioides difficile: se escala a vancomicina ORAL.',
  exp:'La vancomicina oral no se absorbe, de modo que alcanza concentraciones altas justo donde hace falta, en la luz del colon. Hoy es de hecho el tratamiento de primera línea, junto con la fidaxomicina, y el metronidazol ha quedado relegado. Ante un fracaso terapéutico en un paciente clínicamente estable, el paso siguiente es cambiar a vancomicina oral, no escalar a cirugía.',
  no:{1:'La piperacilina-tazobactam es un antibiótico de amplio espectro que agravaría la disbiosis: es parte del problema, no de la solución.',2:'La colectomía se reserva para el megacolon tóxico, la perforación o el fallo multiorgánico; el paciente está estable.',3:'La ileostomía en asa con lavado es una alternativa quirúrgica para casos graves, tampoco aplicable aquí.'},
  trampa:'La ausencia de respuesta en cuatro días hace pensar en fracaso grave. Estando el paciente estable, lo que corresponde es cambiar de antibiótico, no operar.',
  dx:['Colitis por Clostridioides difficile','Megacolon tóxico','Diarrea asociada a antibióticos'],
  obj:'Escalar correctamente el tratamiento de la infección por C. difficile.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con las guías IDSA/SHEA sobre Clostridioides difficile.'
},

/* ---------------------- HEMATOLOGÍA ---------------------- */
'MIR-2018-M97': {
  clave:'Resistencia a la heparina: la heparina necesita antitrombina para funcionar.',
  exp:'La heparina no es anticoagulante por sí misma: actúa potenciando mil veces la actividad de la antitrombina, que es la que inactiva la trombina y el factor Xa. Si falta antitrombina, la heparina no tiene sobre qué actuar y el TTPa no se prolonga por mucho que se suba la dosis. Ese fenómeno, llamado resistencia a la heparina, es el que delata el déficit y explica además la trombosis del paciente.',
  no:{0:'El déficit de proteína C predispone a trombosis y a necrosis cutánea con cumarínicos, pero no impide la acción de la heparina.',1:'El anticoagulante lúpico ALARGA el TTPa basal, es decir, produce el efecto contrario al descrito.',2:'El factor V Leiden causa trombofilia pero no interfiere con la respuesta a la heparina.'},
  trampa:'Se piensa que no se alcanza rango por dosis insuficiente y se sigue subiendo. El problema no es la dosis, es que falta el cofactor.',
  dx:['Déficit de antitrombina','Resistencia a heparina','Síndrome antifosfolípido'],
  obj:'Explicar la resistencia a la heparina desde su mecanismo de acción.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., trombofilias.'
},
'MIR-2019-M105': {
  clave:'Leucemia linfática crónica en estadio precoz y asintomática: no se trata, se vigila.',
  exp:'El inmunofenotipo CD5, CD19 y CD23 positivos en linfocitos maduros define la leucemia linfática crónica, y el diagnóstico se hace solo con citometría de sangre periférica: no hace falta médula ósea. Con hemoglobina y plaquetas normales, sin adenopatías ni síntomas, el paciente está en estadio 0 de Rai o A de Binet, y en ese estadio el tratamiento precoz NO mejora la supervivencia. La conducta es observación con controles periódicos.',
  no:{0:'El estudio de TP53 se realiza cuando se va a iniciar tratamiento, porque condiciona la elección del fármaco; ahora no aporta.',1:'La médula ósea no es necesaria: el diagnóstico se establece con citometría en sangre.',2:'El PET no forma parte del estudio salvo sospecha de transformación a linfoma agresivo.'},
  trampa:'La palabra "leucemia" empuja a actuar. En la linfática crónica precoz, tratar antes de tiempo solo añade toxicidad.',
  dx:['Leucemia linfática crónica','Linfocitosis monoclonal de significado incierto','Linfoma leucemizado'],
  obj:'Reconocer el estadio precoz de la LLC y su indicación de observación.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con las guías iwCLL y ESMO.'
},
'MIR-2019-M106': {
  clave:'t(15;17) con coagulopatía: leucemia promielocítica, y el ATRA no espera.',
  exp:'La leucemia promielocítica aguda es una urgencia hematológica: la coagulación intravascular diseminada que produce —fibrinógeno bajo y dímero D muy alto, como aquí— causa hemorragias mortales en las primeras horas. El ATRA debe iniciarse ante la sola SOSPECHA, sin esperar la confirmación genética, porque revierte la coagulopatía. Se combina con trióxido de arsénico en los casos de riesgo bajo e intermedio, junto con soporte transfusional intensivo de plaquetas y fibrinógeno.',
  no:{0:'Manejar en hospital de día una leucemia promielocítica con coagulopatía es inaceptable: requiere ingreso y soporte transfusional.',2:'La quimioterapia clásica no es hoy el esquema de elección frente a ATRA más arsénico, y la heparina no es el tratamiento de esta coagulopatía.',3:'Esperar a que ceda la fiebre para tratar la leucemia es un retraso que puede costar la vida por hemorragia.'},
  trampa:'Se prioriza tratar la fiebre y la infección antes que la leucemia. Aquí lo que mata en las primeras horas es el sangrado, y el ATRA es lo que lo corrige.',
  dx:['Leucemia promielocítica aguda','Leucemia mieloide aguda','Coagulación intravascular diseminada'],
  obj:'Iniciar ATRA ante la sospecha de leucemia promielocítica, sin esperar confirmación.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con las guías ELN sobre leucemia promielocítica aguda.'
},

/* ---------------------- CIRUGÍA Y URGENCIAS ---------------------- */
'MIR-2020-M103': {
  clave:'1.700 mL de sangre de golpe por el drenaje: criterio de toracotomía.',
  exp:'El hemotórax masivo se define por un débito inicial superior a 1.500 mL al colocar el drenaje, o superior a 200 mL por hora durante 2 a 4 horas. Cualquiera de los dos indica sangrado activo de un vaso importante que no va a ceder solo, y obliga a toracotomía urgente. El drenaje sirve para diagnosticar, cuantificar y reexpandir, pero no resuelve el sangrado.',
  no:{0:'La ventilación no invasiva no está indicada en un paciente hipotenso con sangrado activo.',2:'Observar y esperar el empeoramiento en un paciente que ya está en shock hemorrágico es perder tiempo.',3:'Trasladar a la tomografía a un paciente inestable con sangrado activo es peligroso: el quirófano está antes que la imagen.'},
  trampa:'Colocar el drenaje se siente como haber resuelto el problema. La cifra que sale por él es precisamente lo que indica que hay que operar.',
  dx:['Hemotórax masivo','Neumotórax a tensión','Contusión pulmonar','Rotura diafragmática'],
  obj:'Conocer los criterios de toracotomía urgente en el hemotórax traumático.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con ATLS, trauma torácico.'
},
'MIR-2021-M105': {
  tema:'Neurología',
  clave:'Deterioro progresivo un MES después: ese es el tiempo de la hidrocefalia, no del vasoespasmo.',
  exp:'Las complicaciones de la hemorragia subaracnoidea se ordenan en el tiempo: el resangrado es máximo en las primeras 24 a 48 horas, el vasoespasmo entre el cuarto y el decimocuarto día, y la hidrocefalia crónica comunicante aparece semanas o meses después, por alteración de la reabsorción del líquido cefalorraquídeo en las granulaciones aracnoideas. El deterioro subagudo con obnubilación al mes encaja con hidrocefalia, se confirma con tomografía craneal y se trata con derivación.',
  no:{0:'El vasoespasmo tiene su ventana entre los días 4 y 14; al mes ya pasó.',1:'El resangrado es un evento BRUSCO, no un deterioro progresivo, y además el aneurisma ya está tratado.',3:'La prueba de elección aquí es la tomografía craneal, que muestra la dilatación ventricular; la angiografía estudia vasos.'},
  trampa:'Se responde vasoespasmo porque es la complicación más nombrada de la hemorragia subaracnoidea, sin situar el evento en la línea temporal.',
  dx:['Hidrocefalia crónica posthemorrágica','Vasoespasmo','Resangrado','Crisis epilépticas'],
  obj:'Ordenar las complicaciones de la hemorragia subaracnoidea por su cronología.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con la guía AHA/ASA sobre hemorragia subaracnoidea aneurismática.'
},
'MIR-2021-M127': {
  tema:'Cirugía vascular',
  clave:'Déficit PARCIAL de sensibilidad y movilidad: la extremidad es viable y hay que revascularizar ya.',
  exp:'En la clasificación de Rutherford, el déficit sensitivo y motor parcial corresponde a una extremidad amenazada pero recuperable si se actúa de inmediato. La causa en un paciente con fibrilación auricular es casi siempre embólica, y el tratamiento es la tromboembolectomía urgente con sonda de Fogarty. Seis horas no son un tiempo excesivo: lo que define la viabilidad es la exploración, no el reloj.',
  no:{0:'Desestimar la cirugía por el tiempo es un error: la exploración indica que la extremidad todavía es recuperable.',1:'Aplicar calor aumenta la demanda metabólica del tejido isquémico y agrava el daño; se protege la extremidad y se mantiene a temperatura ambiente.',3:'Las prostaglandinas se usan en la isquemia crónica no revascularizable, no en la aguda embólica.'},
  trampa:'Se descarta la cirugía por las horas transcurridas. El criterio es la exploración: mientras haya sensibilidad y movilidad parciales, se revasculariza.',
  dx:['Isquemia arterial aguda embólica','Trombosis arterial aguda','Isquemia crónica descompensada'],
  obj:'Decidir la revascularización por la exploración, no por el tiempo transcurrido.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con la clasificación de Rutherford y las guías ESVS.'
},
'MIR-2016-M207': {
  tema:'Urgencias',
  clave:'Alta tensión: la superficie quemada visible no mide el daño real, que va por dentro.',
  exp:'En la quemadura eléctrica de alto voltaje la corriente atraviesa el cuerpo y destruye músculo, nervio y vaso a lo largo de todo su trayecto, mientras la piel solo muestra los puntos de entrada y salida. De ahí que un 0,2% de superficie quemada sea engañoso. El paciente puede desarrollar rabdomiólisis con fracaso renal, síndrome compartimental y arritmias. Es criterio de traslado a unidad de quemados tras estabilizar.',
  no:{0:'Tratar de forma ambulatoria una quemadura eléctrica de alto voltaje ignora todo el daño profundo.',2:'Ocho horas de observación no bastan: las complicaciones pueden aparecer más tarde.',3:'Practicar procedimientos y dejarlo en planta convencional no sustituye al manejo especializado.'},
  trampa:'El porcentaje pequeño de superficie quemada tranquiliza. En la lesión eléctrica de alto voltaje ese número no significa nada.',
  dx:['Quemadura eléctrica de alto voltaje','Rabdomiólisis','Síndrome compartimental','Arritmia'],
  obj:'Valorar la quemadura eléctrica por el trayecto de la corriente, no por la superficie visible.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con ATLS, lesiones térmicas y eléctricas.'
},
'MIR-2016-M225': {
  tema:'Urgencias',
  clave:'Glasgow 4 con anisocoria: hay que asegurar la vía aérea antes que nada.',
  exp:'La secuencia ABCDE no cambia por la existencia de una lesión cerebral: al contrario, la protege. Con Glasgow igual o menor de 8 el paciente no protege su vía aérea y la hipoxia y la hipercapnia son las dos agresiones que más empeoran el daño cerebral secundario. La intubación con control cervical, manteniendo normoxia y normocapnia, es la primera medida y es a la vez tratamiento neuroprotector.',
  no:{0:'La mascarilla laríngea no aísla la vía aérea ni permite controlar la ventilación con la precisión que exige el traumatismo craneal.',1:'El manitol trata la hipertensión intracraneal, pero después de asegurar la vía aérea y la ventilación.',3:'Trasladar sin asegurar la vía aérea a un paciente con Glasgow 4 y bradipnea es exponerlo a hipoxia durante todo el trayecto.'},
  trampa:'La anisocoria y la urgencia neuroquirúrgica hacen que se piense en manitol o en el traslado. El cerebro se protege primero garantizando oxígeno y ventilación.',
  dx:['Traumatismo craneoencefálico grave','Hematoma epidural','Herniación uncal'],
  obj:'Aplicar la secuencia ABCDE también, y sobre todo, en el traumatismo craneal grave.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con ATLS y las guías de la Brain Trauma Foundation.'
},
'MIR-2018-M151': {
  tema:'Urgencias',
  clave:'pH alto con PaCO₂ baja y bicarbonato aún normal: alcalosis respiratoria AGUDA.',
  exp:'La hiperventilación por la neumonía elimina CO₂ y eleva el pH. La clave para saber que es aguda está en el bicarbonato: sigue en 22, es decir, normal. La compensación renal tarda de dos a tres días en descender el bicarbonato de forma apreciable; si el trastorno fuera crónico, el bicarbonato ya habría bajado y el pH estaría más cerca de lo normal. Aquí el proceso lleva 48 horas.',
  no:{0:'No hay acidosis metabólica: el bicarbonato es normal y el pH está alto, no bajo.',1:'En la alcalosis respiratoria crónica el bicarbonato habría descendido de forma compensadora.',2:'No coexisten dos trastornos respiratorios opuestos; hay uno solo.'},
  trampa:'Se ve una PaO₂ de 40 y se piensa en insuficiencia respiratoria hipercápnica. La PaCO₂ está BAJA: el paciente hiperventila, todavía compensa.',
  dx:['Alcalosis respiratoria aguda','Neumonía','Acidosis metabólica','Insuficiencia respiratoria hipercápnica'],
  obj:'Distinguir alcalosis respiratoria aguda de crónica por el bicarbonato.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., trastornos ácido-base.'
},
'MIR-2018-M223': {
  tema:'Hematología',
  clave:'Probabilidad clínica BAJA: aquí el dímero D sí sirve, y su valor está en el resultado negativo.',
  exp:'Es el reverso exacto de la regla que suele preguntarse. El dímero D tiene alta sensibilidad y baja especificidad, de modo que un resultado NEGATIVO en un paciente con probabilidad pretest baja o intermedia descarta con seguridad la trombosis y evita la ecografía. Solo cuando la probabilidad es alta pierde su utilidad y hay que ir directamente a la imagen. La probabilidad se calcula con la escala de Wells, no por intuición.',
  no:{0:'Hacer eco-doppler a todos los pacientes con probabilidad baja es ineficiente y no mejora la seguridad respecto al dímero D negativo.',2:'No estar inmovilizada no basta para descartar: hay otros factores y por eso se usa una escala validada.',3:'El dímero D NO se pide a todos: en probabilidad alta no aporta nada y retrasa la imagen.'},
  trampa:'Se memoriza "el dímero D no sirve" del caso de probabilidad alta y se aplica al revés. Su utilidad depende por completo de la probabilidad pretest.',
  dx:['Trombosis venosa profunda','Rotura de quiste de Baker','Celulitis','Desgarro muscular'],
  obj:'Aplicar el dímero D según la probabilidad clínica pretest.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con la guía ESC de tromboembolia pulmonar y la escala de Wells.'
}

});
