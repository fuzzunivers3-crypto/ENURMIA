/* ============================================================
   EXPLICACIONES — lote 03  (56 casos clínicos)
   Reparto proporcional entre las doce áreas con más casos
   pendientes.

   De los 60 casos leídos para este lote, 4 quedaron fuera: su
   respuesta oficial contradice a la bibliografía y están
   documentados en revision-mir.js. No se explican mientras
   sigan en cuarentena.
   ============================================================ */
window.EXPLICACIONES = Object.assign(window.EXPLICACIONES || {}, {

/* ---------------------- MEDICINA GENERAL ---------------------- */
'MIR-2015-M50': {
  tema:'Infectología',
  clave:'Lesiones que ascienden por el brazo siguiendo un trayecto lineal, en un jardinero, sin fiebre.',
  exp:'La esporotricosis cutánea linfática es la infección del jardinero: Sporothrix schenckii vive en la materia vegetal en descomposición y entra por una herida mínima que el paciente ni recuerda. Desde la lesión inicial, habitualmente en el dedo o la mano, aparecen nódulos que ascienden siguiendo los vasos linfáticos, lo que da ese patrón esporotricoide en collar de cuentas. El estado general se conserva. El diagnóstico es por cultivo y el tratamiento, itraconazol.',
  no:{0:'Las dermatofitosis producen placas anulares descamativas con borde activo, no nódulos en trayecto linfático.',1:'La infección estafilocócica cursa con celulitis o abscesos y suele acompañarse de fiebre y evolución rápida, no de tres semanas indolentes.',3:'Mycobacterium marinum también produce un patrón esporotricoide, pero su exposición típica es el agua: acuarios, piscinas o pescado, no el jardín.'},
  trampa:'El diferencial fino está entre esporotricosis y Mycobacterium marinum, porque ambos ascienden por los linfáticos. Lo que decide es la exposición: tierra y plantas frente a agua.',
  dx:['Esporotricosis','Infección por Mycobacterium marinum','Nocardiosis cutánea','Leishmaniasis'],
  obj:'Reconocer el patrón esporotricoide y separarlo por la exposición.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Mandell, Principios y Práctica de Enfermedades Infecciosas.'
},
'MIR-2015-M59': {
  tema:'Cardiología',
  clave:'Insuficiencia cardíaca descompensada con presión arterial de 150/84: hay margen para optimizar el IECA.',
  exp:'La descompensación exige diurético intravenoso, porque el edema de la pared intestinal reduce la absorción del diurético oral. Pero además, la paciente está con enalapril a dosis baja y con presión arterial conservada: hay margen para subir el inhibidor de la enzima convertidora, que es tratamiento modificador de pronóstico. Tratar solo la congestión y no optimizar la medicación de fondo es una oportunidad perdida.',
  no:{0:'La furosemida intravenosa sola es correcta pero incompleta: alivia sin mejorar el pronóstico.',2:'Los betabloqueantes NO se inician durante la descompensación aguda con congestión: se introducen una vez estabilizada y euvolémica.',3:'El amlodipino es neutro en la insuficiencia cardíaca y no aporta beneficio pronóstico.'},
  trampa:'Elegir la opción que resuelve el síntoma. La respuesta correcta hace las dos cosas: descongestiona y optimiza el tratamiento de fondo.',
  dx:['Insuficiencia cardíaca descompensada'],
  obj:'Combinar el alivio de la congestión con la optimización del tratamiento pronóstico.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con la guía ESC de insuficiencia cardíaca.'
},
'MIR-2015-M64': {
  tema:'Cardiología',
  clave:'Se pide la INCORRECTA. El cuarto ruido no viene de una válvula estrecha: viene de un ventrículo rígido.',
  exp:'El cuarto ruido lo produce la contracción auricular al empujar sangre contra un ventrículo poco distensible. Aparece en la hipertrofia ventricular, la hipertensión de larga evolución, la isquemia y la miocardiopatía hipertrófica: todas situaciones de rigidez ventricular, no de estenosis valvular. De hecho, en la estenosis mitral significativa el cuarto ruido no puede generarse cuando hay fibrilación auricular, porque desaparece la contracción auricular.',
  no:{0:'Es correcta: el tercer ruido coincide con la fase de llenado rápido ventricular y traduce sobrecarga de volumen.',1:'Es correcta: ortopnea, disnea paroxística nocturna, crepitantes y galope componen un cuadro típico de insuficiencia cardíaca.',2:'Es correcta: un soplo holosistólico irradiado a axila es el de la insuficiencia mitral.'},
  trampa:'Se asocia cualquier ruido añadido a un problema valvular. Tercer y cuarto ruido son ruidos de llenado ventricular, no de válvula.',
  dx:['Insuficiencia cardíaca','Insuficiencia mitral','Miocardiopatía'],
  obj:'Entender el origen del tercer y del cuarto ruido.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., exploración cardiovascular.'
},
'MIR-2015-M73': {
  tema:'Gastroenterología',
  clave:'Vaso visible en el fondo de la úlcera: alto riesgo de resangrado aunque no sangre en ese momento.',
  exp:'La clasificación de Forrest estratifica el riesgo por lo que se ve en el fondo de la úlcera. Un vaso visible no sangrante es un Forrest IIa, con riesgo de recidiva en torno al 50% si no se trata. Por eso sí se aplica terapéutica endoscópica —habitualmente doble: inyección más método térmico o mecánico— y después se mantiene el inhibidor de la bomba de protones intravenoso en dosis altas. La combinación de ambas medidas reduce el resangrado, la necesidad de cirugía y la mortalidad.',
  no:{1:'La ausencia de sangrado activo no exime de tratar: el vaso visible es de alto riesgo por sí mismo.',2:'El inhibidor de bomba intravenoso tras la terapéutica endoscópica sí ha demostrado beneficio adicional.',3:'La cirugía se reserva para el fracaso del tratamiento endoscópico repetido o la hemorragia incontrolable.'},
  trampa:'Se decide por lo que se ve en el momento —no sangra— en vez de por el estigma de riesgo, que es lo que predice lo que va a pasar.',
  dx:['Úlcera duodenal con vaso visible','Hemorragia digestiva alta no varicosa'],
  obj:'Estratificar la úlcera sangrante por la clasificación de Forrest.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías europeas ESGE sobre hemorragia digestiva alta no varicosa.'
},
'MIR-2015-M85': {
  tema:'Endocrinología',
  clave:'Hipogonadismo hipogonadotropo con hiposmia: síndrome de Kallmann.',
  exp:'La ausencia de desarrollo puberal con testosterona baja y gonadotropinas también bajas localiza el fallo por encima de la gónada. La hiposmia lo sitúa en el hipotálamo: en el síndrome de Kallmann fallan la migración de las neuronas productoras de GnRH y la de las neuronas olfatorias, que comparten trayecto embrionario. Para inducir espermatogénesis y fertilidad hace falta reproducir la secreción PULSÁTIL de GnRH mediante bomba de infusión, o bien administrar gonadotropinas; la testosterona sola vitiliza los caracteres sexuales pero no genera espermatozoides.',
  no:{1:'La triptorelina es un análogo de GnRH de liberación mantenida: la estimulación continua desensibiliza el receptor y FRENA el eje, justo lo contrario de lo que se busca.',2:'La pauta semanal es insuficiente: las gonadotropinas requieren administración mucho más frecuente para ser eficaces.',3:'La bromocriptina trata la hiperprolactinemia, y la prolactina de este paciente es normal.'},
  trampa:'Análogo de GnRH continuo y GnRH pulsátil hacen lo contrario: uno frena el eje y el otro lo estimula. Es la misma molécula con efecto opuesto según cómo se administre.',
  dx:['Síndrome de Kallmann','Hipogonadismo hipogonadotropo idiopático','Retraso constitucional del desarrollo'],
  obj:'Entender por qué la GnRH debe administrarse de forma pulsátil para estimular el eje.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., trastornos del eje hipotálamo-hipófiso-gonadal.'
},

/* ---------------------- NEFROLOGÍA Y UROLOGÍA ---------------------- */
'MIR-2016-M230': {
  tema:'Urología',
  clave:'Cólico renoureteral: la tomografía sin contraste es la prueba más sensible.',
  exp:'La tomografía sin contraste detecta prácticamente todos los cálculos, incluidos los radiolúcidos de ácido úrico que la radiografía no ve, define su tamaño y localización exactos y muestra signos de obstrucción. Es rápida y no requiere contraste. Su desventaja es la radiación, motivo por el que en el embarazo y en pacientes jóvenes con episodios repetidos se prefiere la ecografía.',
  no:{0:'La radiografía simple solo detecta los cálculos radiopacos y tiene sensibilidad baja.',1:'La ecografía detecta la dilatación y los cálculos renales o de la unión ureterovesical, pero se le escapan con frecuencia los del uréter medio.',3:'La urografía intravenosa ha quedado desplazada: expone a contraste y tiene menor sensibilidad que la tomografía.'},
  trampa:'Se elige la ecografía porque no irradia. La pregunta pide la prueba MÁS SENSIBLE, no la más inocua; son criterios distintos.',
  dx:['Cólico renoureteral','Litiasis ureteral','Pielonefritis','Aneurisma de aorta abdominal'],
  obj:'Elegir la prueba de imagen del cólico renal según lo que se pregunte: sensibilidad o seguridad.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías de la European Association of Urology sobre urolitiasis.'
},
'MIR-2016-M232': {
  esp:'Pediatría',
  clave:'Hematuria macroscópica que aparece a la vez que la infección, no dos semanas después, y ya ha ocurrido otras veces.',
  exp:'La nefropatía IgA produce hematuria macroscópica sinfaringítica: coincide con la infección respiratoria, con un intervalo de horas o pocos días, y es recurrente con cada proceso infeccioso. Ese patrón es el que la separa de la glomerulonefritis postinfecciosa, en la que la hematuria aparece de una a tres semanas DESPUÉS de la faringitis y es un episodio único.',
  no:{0:'La glomerulonefritis membranoproliferativa cursa con hipocomplementemia persistente y curso progresivo, no con episodios autolimitados recurrentes.',2:'El síndrome de Alport ligado al X cursa con hematuria persistente, sordera neurosensorial y afectación ocular, con antecedentes familiares de insuficiencia renal.',3:'La glomerulonefritis postinfecciosa es un episodio ÚNICO que aparece semanas después y cursa con C3 bajo.'},
  trampa:'La faringitis reciente arrastra hacia la glomerulonefritis postinfecciosa. Lo que decide es el intervalo —simultánea frente a semanas después— y la recurrencia.',
  dx:['Nefropatía IgA','Glomerulonefritis postinfecciosa','Síndrome de Alport','Hematuria familiar benigna'],
  obj:'Diferenciar nefropatía IgA de glomerulonefritis postinfecciosa por el intervalo temporal.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed. y la guía KDIGO de glomerulonefritis.'
},
'MIR-2016-M77': {
  tema:'Gastroenterología',
  clave:'Se pide la MENOS adecuada. La ascitis no complicada no exige hospitalizar para empezar el diurético.',
  exp:'La ascitis de grado moderado en un paciente estable, sin encefalopatía y sin insuficiencia renal, se trata de forma ambulatoria: restricción de sodio y diurético, con controles analíticos y de peso. Ingresar para iniciar el tratamiento no aporta beneficio y consume recursos. Las otras tres afirmaciones sí son correctas y de hecho recogen las tres conductas obligadas en este paciente.',
  no:{0:'Es adecuada: todo primer episodio de ascitis exige paracentesis diagnóstica, aunque el paciente esté asintomático, para calcular el gradiente de albúmina y descartar infección.',1:'Es adecuada: una ascitis de novo obliga a repetir la imagen para descartar hepatocarcinoma o trombosis portal.',2:'Es adecuada: con varices grandes, el betabloqueante no cardioselectivo está indicado en profilaxis primaria aunque nunca haya habido sangrado.'},
  trampa:'La opción del ingreso suena prudente. En estas preguntas hay que buscar la que sobra, no la que parece más segura.',
  dx:['Cirrosis con ascitis','Peritonitis bacteriana espontánea','Hepatocarcinoma','Trombosis portal'],
  obj:'Reconocer qué exige y qué no exige hospitalización en la cirrosis con ascitis.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías EASL sobre complicaciones de la cirrosis.'
},
'MIR-2016-M85': {
  tema:'Gastroenterología',
  clave:'Hematocrito del 48%: hemoconcentración, es decir, el paciente ha perdido volumen al tercer espacio.',
  exp:'La fluidoterapia enérgica precoz es la medida con mayor impacto en la pancreatitis aguda. La inflamación pancreática produce una fuga masiva de líquido al tercer espacio, y la hemoconcentración con creatinina elevada indica que la hipovolemia ya está establecida. Reponer volumen en las primeras horas previene la necrosis por hipoperfusión y el fallo orgánico.',
  no:{1:'Los antibióticos profilácticos no reducen la necrosis infectada ni la mortalidad, y favorecen resistencias e infecciones fúngicas.',2:'La nutrición de elección es la ENTERAL, precoz y por vía oral o por sonda; la parenteral se reserva para la intolerancia digestiva mantenida.',3:'Los inhibidores de proteasas como la aprotinina se ensayaron y no demostraron beneficio: están abandonados.'},
  trampa:'La pancreatitis parece pedir "reposo digestivo total y antibióticos". Las dos ideas están desfasadas: hoy se hidrata mucho, se nutre pronto por vía enteral y no se dan antibióticos sin infección.',
  dx:['Pancreatitis aguda','Colecistitis','Úlcera perforada','Isquemia mesentérica'],
  obj:'Reconocer la hemoconcentración como señal de hipovolemia en la pancreatitis.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías de la American College of Gastroenterology sobre pancreatitis aguda.'
},
'MIR-2017-M116': {
  tema:'Infectología',
  clave:'Parasitemia del 6% con alteración de conciencia y fracaso renal: malaria GRAVE.',
  exp:'Los criterios de malaria grave incluyen parasitemia superior al 5%, alteración del nivel de conciencia, insuficiencia renal, acidosis, hipoglucemia y anemia grave. Ante cualquiera de ellos, el tratamiento es artesunato INTRAVENOSO, que ha demostrado reducir la mortalidad frente a la quinina intravenosa y es hoy el estándar. La vía oral no sirve en un paciente con deterioro de conciencia y absorción comprometida.',
  no:{0:'La mefloquina oral no se usa en malaria grave y además tiene efectos neuropsiquiátricos indeseables en un paciente con alteración de conciencia.',2:'La doxiciclina es un fármaco acompañante, nunca monoterapia para la malaria grave.',3:'La quinina fue el tratamiento clásico, pero el artesunato la ha desplazado por menor mortalidad y mejor tolerancia; además, aquí se propone por vía oral.'},
  trampa:'La vía es tan importante como el fármaco. En malaria grave todo tratamiento oral es incorrecto, aunque el principio activo sea razonable.',
  dx:['Malaria grave por Plasmodium falciparum','Fiebre tifoidea','Meningitis','Dengue'],
  obj:'Reconocer los criterios de malaria grave e indicar artesunato intravenoso.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con las directrices de la OMS para el tratamiento del paludismo.'
},

/* ---------------------- ONCOLOGÍA ---------------------- */
'MIR-2015-M86': {
  tema:'Endocrinología',
  clave:'Prolactina de 480 µg/L: en un macroadenoma, esa cifra ya es diagnóstica de prolactinoma.',
  exp:'Cuando la prolactina supera ampliamente los 200 µg/L en presencia de un macroadenoma, el tumor es un prolactinoma y no un adenoma no funcionante con hiperprolactinemia por compresión del tallo, en el que la prolactina rara vez pasa de 100-150. Y el prolactinoma es el único tumor hipofisario cuyo tratamiento de primera línea es MÉDICO: los agonistas dopaminérgicos como la cabergolina reducen el tamaño tumoral de forma espectacular y recuperan el campo visual, incluso con compresión quiasmática.',
  no:{1:'La cirugía transesfenoidal se reserva para el fracaso o la intolerancia al agonista dopaminérgico, o para la apoplejía hipofisaria.',2:'La radioterapia es tratamiento de tercera línea, tras el fracaso del fármaco y de la cirugía.',3:'Tratar solo el hipogonadismo con testosterona deja el tumor y la compresión del quiasma sin tratar.'},
  trampa:'Una masa que comprime el quiasma parece exigir cirugía urgente. El prolactinoma es la excepción: se opera solo si el fármaco falla.',
  dx:['Macroprolactinoma','Adenoma no funcionante','Craneofaringioma','Hipofisitis'],
  obj:'Reconocer el prolactinoma por la magnitud de la prolactina y tratarlo médicamente.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías de la Endocrine Society sobre hiperprolactinemia.'
},
'MIR-2016-M152': {
  tema:'Neumología',
  clave:'Exudado en un paciente inmunodeprimido con estudio microbiológico y citológico negativo.',
  exp:'Cuando un exudado pleural queda sin diagnóstico tras la toracocentesis, el paso siguiente es obtener tejido. La biopsia pleural con aguja aumenta el rendimiento en las causas que afectan la pleura de forma difusa, como la tuberculosis, y permite cultivo del propio tejido, que es más sensible que el del líquido. En un paciente con linfoma bajo quimioterapia hay que descartar tanto infección oportunista como afectación pleural del linfoma.',
  no:{1:'El PET es inespecífico en un paciente con inflamación pleural activa y no distingue infección de tumor.',2:'El hemocultivo para micobacterias tiene bajo rendimiento salvo en enfermedad diseminada.',3:'La lisozima pleural es un marcador auxiliar de tuberculosis, menos útil que la biopsia y sin capacidad de diagnosticar linfoma.'},
  trampa:'Se piden más marcadores del mismo líquido que ya resultó no diagnóstico. Cuando el líquido no basta, hay que pasar al tejido.',
  dx:['Tuberculosis pleural','Afectación pleural por linfoma','Empiema','Derrame paraneumónico'],
  obj:'Escalar del análisis del líquido a la biopsia pleural en el exudado no diagnosticado.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías de la British Thoracic Society sobre derrame pleural.'
},
'MIR-2016-M211': {
  tema:'Neumología',
  clave:'Invasión de pleura visceral con ganglios hiliares ipsilaterales: estadio IIB, todavía resecable.',
  exp:'La afectación ganglionar hiliar ipsilateral corresponde a N1, que no impide la cirugía. Un tumor de 4 cm que invade la pleura visceral con N1 es un estadio II, y el tratamiento de elección es la resección quirúrgica seguida de quimioterapia adyuvante. La frontera que cambia la estrategia es la afectación mediastínica N2, y sobre todo la contralateral N3, que ya contraindican la cirugía de entrada.',
  no:{0:'La radioterapia sobre los ganglios no es el abordaje de un N1 resecable.',1:'La neoadyuvancia se plantea en enfermedad localmente avanzada, típicamente N2, no en un N1 operable.',2:'La quimioterapia inicial sin cirugía renuncia al tratamiento con intención curativa.'},
  trampa:'La palabra "afectación ganglionar" hace pensar automáticamente en inoperable. Lo que decide es CUÁLES ganglios: hiliares no, mediastínicos sí.',
  dx:['Carcinoma de pulmón no microcítico estadio II','Estadio IIIA','Mesotelioma'],
  obj:'Distinguir N1 de N2 y su consecuencia sobre la resecabilidad.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con la clasificación TNM de la IASLC y las guías ESMO de cáncer de pulmón.'
},
'MIR-2016-M214': {
  clave:'K-ras mutado: los anticuerpos anti-EGFR no funcionan.',
  exp:'La vía del receptor del factor de crecimiento epidérmico transmite su señal a través de RAS. Si RAS está mutado y permanentemente activo, bloquear el receptor situado por encima no sirve de nada: la señal se genera aguas abajo del punto bloqueado. Por eso el cetuximab y el panitumumab solo se emplean en tumores RAS nativo. Con enfermedad hepática multifocal irresecable y K-ras mutado, el tratamiento es quimioterapia sistémica tipo FOLFOX, con antiangiogénico si procede.',
  no:{0:'El trasplante hepático no es tratamiento estándar de las metástasis colorrectales multifocales.',1:'Es exactamente el error que la mutación de K-ras descarta: el anti-EGFR es ineficaz.',3:'El paciente tiene buen estado general y sin comorbilidad: renunciar a la quimioterapia le priva de meses de supervivencia.'},
  trampa:'Se añade el fármaco dirigido por parecer más moderno, sin comprobar el biomarcador que determina si puede funcionar.',
  dx:['Cáncer colorrectal metastásico RAS mutado','Metástasis hepáticas resecables'],
  obj:'Entender por qué la mutación de RAS anula la eficacia del bloqueo del EGFR.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías ESMO sobre cáncer colorrectal metastásico.'
},
'MIR-2016-M216': {
  clave:'Estreñimiento en un paciente con opioides: es un efecto adverso que nunca desarrolla tolerancia.',
  exp:'El estreñimiento inducido por opioides aparece desde el primer día y, a diferencia de la somnolencia o las náuseas, no mejora con el tiempo. Por eso el laxante debe pautarse SIEMPRE de forma profiláctica al iniciar un opioide. Ante un paciente ya estreñido, se pauta un laxante osmótico y se descarta impactación fecal con tacto rectal, porque un laxante estimulante sobre un fecaloma impactado provoca dolor y puede complicar el cuadro.',
  no:{0:'Bajar el opioide reactivaría el dolor, que estaba bien controlado, sin resolver el estreñimiento.',2:'Los procinéticos actúan sobre el vaciamiento gástrico, no sobre la motilidad colónica inducida por opioides.',3:'El abdomen es blando, con ruidos presentes y sin vómitos: no hay datos de obstrucción que justifiquen una tomografía urgente.'},
  trampa:'Se busca una complicación grave —obstrucción por la propia neoplasia— cuando el efecto adverso previsible del tratamiento explica todo el cuadro.',
  dx:['Estreñimiento por opioides','Obstrucción intestinal maligna','Impactación fecal'],
  obj:'Prevenir y tratar el estreñimiento por opioides, que no desarrolla tolerancia.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías de la OMS y la EAPC sobre cuidados paliativos.'
},

/* ---------------------- NEUROLOGÍA ---------------------- */
'MIR-2016-M159': {
  clave:'Demencia rápidamente progresiva con mioclonías que PERSISTEN durante el sueño.',
  exp:'La enfermedad de Creutzfeldt-Jakob combina demencia de evolución en meses, mioclonías —que característicamente no desaparecen al dormir—, ataxia y signos piramidales o extrapiramidales. El electroencefalograma muestra complejos periódicos de ondas agudas y en el líquido cefalorraquídeo se detecta la proteína 14-3-3, marcador de destrucción neuronal rápida. Hoy se complementa con la prueba RT-QuIC, más específica.',
  no:{0:'La hipoglucorraquia es propia de las meningitis bacterianas, tuberculosas y fúngicas.',1:'Las bandas oligoclonales son características de la esclerosis múltiple.',2:'El aumento del índice de IgG también apunta a síntesis intratecal de inmunoglobulinas, propia de la esclerosis múltiple.'},
  trampa:'La proteína 14-3-3 no es específica: se eleva en cualquier destrucción neuronal rápida, incluidos ictus extensos y encefalitis. Apoya el diagnóstico en el contexto clínico correcto, no lo prueba en solitario.',
  dx:['Enfermedad de Creutzfeldt-Jakob','Encefalitis autoinmune','Demencia rápidamente progresiva vascular','Enfermedad de Alzheimer atípica'],
  obj:'Reconocer la demencia rápidamente progresiva con mioclonías y su marcador en líquido.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., enfermedades priónicas.'
},
'MIR-2016-M186': {
  esp:'Psiquiatría', tema:'Psiquiatría general',
  clave:'Se pide la EXCEPCIÓN. El delirium no encaja: aquí no hay alteración de la atención ni curso fluctuante.',
  exp:'El cuadro descrito es una depresión del anciano: seis semanas de instauración progresiva, anhedonia, anorexia con pérdida de peso, empeoramiento vespertino de la ansiedad, despertar precoz, enlentecimiento del pensamiento y quejas somáticas. El diferencial obligado incluye depresión secundaria a fármacos, depresión secundaria a enfermedad orgánica y pseudodemencia depresiva. El delirium no entra: exige inicio agudo en horas o días, alteración de la ATENCIÓN y curso fluctuante a lo largo del día, nada de lo cual aparece aquí.',
  no:{0:'Es válida: betabloqueantes, corticoides, interferón y otros fármacos pueden inducir depresión, y en el anciano polimedicado es obligado revisarlo.',1:'Es válida: hipotiroidismo, anemia, neoplasia oculta y déficit de vitamina B12 pueden debutar como depresión.',2:'Es válida: la pseudodemencia depresiva es precisamente el diferencial central en un anciano con quejas cognitivas y ánimo bajo.'},
  trampa:'Se confunde deterioro cognitivo con confusión. La depresión del anciano enlentece el pensamiento pero conserva la atención; el delirium la destruye.',
  dx:['Depresión mayor del anciano','Pseudodemencia depresiva','Delirium','Demencia incipiente'],
  obj:'Separar depresión del anciano, pseudodemencia, demencia y delirium.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con el DSM-5-TR y las guías NICE sobre depresión en el adulto.'
},
'MIR-2016-M197': {
  tema:'Reumatología',
  clave:'Amaurosis brusca sobre polimialgia y cefalea nueva: hay que salvar el otro ojo, y es cuestión de horas.',
  exp:'La arteritis de células gigantes con pérdida visual establecida se trata con corticoides intravenosos en pulsos —metilprednisolona 1 gramo diario durante tres días— antes de confirmar nada. El ojo afectado rara vez recupera, pero el objetivo es proteger el contralateral, que puede afectarse en días. La biopsia de arteria temporal sigue siendo interpretable hasta una o dos semanas después de iniciar el corticoide, de modo que tratar no impide diagnosticar.',
  no:{0:'Prednisona 10 mg diarios es la dosis de la polimialgia reumática sin arteritis: absolutamente insuficiente ante pérdida visual.',2:'La ciclofosfamida no es el tratamiento de inducción de esta vasculitis.',3:'El infliximab no ha demostrado eficacia en la arteritis de células gigantes; el biológico con indicación es el tocilizumab, y como ahorrador de corticoides, no como rescate urgente.'},
  trampa:'La dosis importa tanto como el fármaco. Acertar "corticoides" y equivocar la dosis cuesta el ojo contralateral.',
  dx:['Arteritis de células gigantes','Polimialgia reumática','Neuropatía óptica isquémica no arterítica'],
  obj:'Indicar pulsos de corticoide ante arteritis de células gigantes con pérdida visual.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las recomendaciones EULAR sobre vasculitis de grandes vasos.'
},
'MIR-2016-M65': {
  tema:'Urgencias',
  clave:'Golpe de calor por ejercicio: el enfriamiento depende de que la sangre llegue a la piel.',
  exp:'El tratamiento del golpe de calor es el enfriamiento rápido, y para que funcione la sangre caliente del núcleo debe alcanzar la superficie corporal, donde se disipa el calor. Los vasoconstrictores periféricos cierran precisamente esa vía y dificultan el enfriamiento, de modo que se evitan y la hipotensión se maneja con volumen. El cuadro descrito —hipertermia extrema, coma, fallo renal, acidosis láctica y coagulopatía— es un golpe de calor por esfuerzo con fallo multiorgánico.',
  no:{0:'Es al revés: la elevación de enzimas musculares y la rabdomiólisis son MUCHO mayores en el golpe de calor por ejercicio que en el clásico.',1:'La punción lumbar no diagnostica el golpe de calor; solo se plantearía si hubiera duda razonable de infección del sistema nervioso central.',2:'La digoxina no está indicada: la taquicardia es secundaria a la hipertermia y a la hipovolemia, y se corrige enfriando y reponiendo volumen.'},
  trampa:'Se trata la hipotensión con el reflejo habitual del shock —vasopresores— sin ver que aquí ese reflejo bloquea el tratamiento principal, que es enfriar.',
  dx:['Golpe de calor por esfuerzo','Hipertermia maligna','Síndrome neuroléptico maligno','Sepsis'],
  obj:'Entender por qué los vasoconstrictores dificultan el enfriamiento en el golpe de calor.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., trastornos por calor.'
},
'MIR-2017-M119': {
  tema:'Infectología',
  clave:'Veterinaria que asiste partos de ganado, con neumonía atípica: fiebre Q.',
  exp:'Coxiella burnetii se transmite por INHALACIÓN de aerosoles procedentes de placentas y fluidos del parto de ganado, no por garrapatas en la práctica humana. El diagnóstico serológico distingue dos fases: en la infección AGUDA predominan los anticuerpos frente a antígenos de fase II, pero también se elevan los de fase I; el predominio mantenido de fase I con títulos altos es lo que caracteriza la forma CRÓNICA, típicamente con endocarditis.',
  no:{0:'Aunque la garrapata puede mantener el ciclo en animales, la transmisión al ser humano es fundamentalmente por inhalación de aerosoles.',1:'La doxiciclina sí trata la forma aguda, pero la hidroxicloroquina se reserva para la forma CRÓNICA, asociada a doxiciclina, para alcalinizar el fagolisosoma.',3:'La mortalidad de la forma aguda es baja pero no inexistente, y la enfermedad puede cronificarse con endocarditis grave.'},
  trampa:'La exposición ocupacional se asocia automáticamente a garrapatas. En la fiebre Q el vehículo son los aerosoles del parto animal.',
  dx:['Fiebre Q','Neumonía por Mycoplasma','Brucelosis','Psitacosis'],
  obj:'Reconocer la fiebre Q por la exposición y distinguir las fases serológicas.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con Mandell, Principios y Práctica de Enfermedades Infecciosas.'
},

/* ---------------------- INFECTOLOGÍA ---------------------- */
'MIR-2016-M107': {
  clave:'Parásito intraeritrocitario transmitido por GARRAPATA que imita a la malaria.',
  exp:'Babesia infecta los hematíes y en el frotis teñido con Giemsa aparece como formas anulares muy parecidas a las de Plasmodium falciparum, lo que explica la confusión. El dato que las separa es epidemiológico: la babesiosis se transmite por garrapatas Ixodes en zonas templadas —el mismo vector que la enfermedad de Lyme— mientras que la malaria requiere mosquito Anopheles y viaje a zona endémica. En el frotis, la ausencia de pigmento y la tétrada en cruz de Malta son distintivas de Babesia.',
  no:{0:'Borrelia burgdorferi causa la enfermedad de Lyme, es una espiroqueta y no es intraeritrocitaria.',1:'Francisella tularensis produce tularemia, con úlcera cutánea y adenopatía regional.',2:'Rickettsia conorii causa la fiebre botonosa mediterránea, con mancha negra y exantema, y es intracelular pero no dentro del hematíe.'},
  trampa:'La pregunta ya da la pista clave —transmitido por garrapatas— y aun así se responde "malaria" por la descripción microscópica. Hay que leer el vector.',
  dx:['Babesiosis','Malaria','Enfermedad de Lyme','Anaplasmosis'],
  obj:'Diferenciar babesiosis de malaria por el vector y por el frotis.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Mandell, Principios y Práctica de Enfermedades Infecciosas.'
},
'MIR-2016-M128': {
  clave:'Expuesto NO vacunado ante una fuente con infección crónica: hacen falta las dos cosas.',
  exp:'La profilaxis postexposición al virus de la hepatitis B en una persona no vacunada combina inmunización pasiva y activa: la inmunoglobulina específica aporta anticuerpos de inmediato, y la vacuna genera protección duradera. Ambas se administran cuanto antes, preferiblemente en las primeras 24 horas y siempre dentro de los siete días, en lugares anatómicos distintos, completando después la pauta vacunal.',
  no:{1:'La ribavirina se usa en la hepatitis C y en algunas infecciones virales, no en la profilaxis de la hepatitis B.',2:'Mismo error con la ribavirina, y además omite la vacuna.',3:'La inmunoglobulina sola protege de forma transitoria y deja al profesional sin inmunidad duradera frente a exposiciones futuras.'},
  trampa:'Se elige una de las dos medidas. La lógica es que cubren ventanas temporales distintas: la inmunoglobulina protege ahora, la vacuna protege después.',
  dx:['Exposición ocupacional al virus de la hepatitis B'],
  obj:'Combinar inmunización pasiva y activa en la profilaxis postexposición.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las recomendaciones de los CDC sobre exposición ocupacional a patógenos hemáticos.'
},
'MIR-2016-M182': {
  esp:'Pediatría',
  clave:'Se pide lo que NO está indicado. La bronquiolitis es viral: el antibiótico sobra.',
  exp:'Lactante de 5 meses con catarro previo, primer episodio de sibilancias, tiraje y saturación del 96%: bronquiolitis aguda leve. El tratamiento es exclusivamente de soporte —posición semiincorporada, desobstrucción nasal, tomas pequeñas y frecuentes, oxígeno solo si la saturación lo exige—. La amoxicilina no está indicada: no hay foco bacteriano, y la fiebre de 38,2 °C es perfectamente compatible con la infección viral.',
  no:{0:'Está indicada: la posición semiincorporada mejora la mecánica respiratoria.',1:'Está indicada: la desobstrucción nasal es de las medidas más eficaces, porque el lactante respira por la nariz.',2:'Está indicada: fraccionar las tomas evita el agotamiento y el rechazo alimentario.'},
  trampa:'La fiebre empuja al antibiótico. En la bronquiolitis la fiebre moderada es parte del cuadro viral y no justifica antibiótico.',
  dx:['Bronquiolitis aguda','Neumonía','Asma del lactante','Tos ferina'],
  obj:'Resistir el tratamiento antibiótico innecesario en la bronquiolitis.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con la guía de práctica clínica de la American Academy of Pediatrics sobre bronquiolitis.'
},
'MIR-2016-M53': {
  clave:'BLEE: la betalactamasa de espectro extendido inactiva penicilinas y cefalosporinas.',
  exp:'Las enterobacterias productoras de betalactamasas de espectro extendido hidrolizan penicilinas, cefalosporinas de todas las generaciones y aztreonam. Los carbapenémicos son estables frente a esas enzimas y constituyen el tratamiento de elección en la infección grave. El ertapenem es adecuado para la infección urinaria complicada por BLEE, con la ventaja de la dosis única diaria; no cubre Pseudomonas, algo irrelevante aquí porque el agente es E. coli.',
  no:{1:'La amoxicilina con clavulánico no es fiable frente a BLEE en infección grave, aunque el antibiograma pueda mostrar sensibilidad in vitro.',2:'La piperacilina-tazobactam es una alternativa discutida en infección urinaria leve, pero en la bacteriemia ha mostrado peores resultados que el carbapenémico.',3:'Las cepas BLEE asocian con mucha frecuencia resistencia a quinolonas, y el paciente ya fracasó con tratamiento empírico.'},
  trampa:'Se confía en que un inhibidor de betalactamasas basta. Frente a BLEE en sepsis, el estándar es el carbapenémico.',
  dx:['Sepsis urinaria por E. coli BLEE','Pielonefritis complicada','Bacteriemia'],
  obj:'Elegir carbapenémico ante infección grave por enterobacteria productora de BLEE.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías IDSA sobre bacterias gramnegativas resistentes.'
},
'MIR-2016-M71': {
  esp:'Cirugía', tema:'Cirugía general',
  clave:'Absceso apendicular ya organizado, de 12 días de evolución: operar ahora es entrar en un plastrón inflamado.',
  exp:'Cuando la apendicitis ha evolucionado a plastrón con absceso, la cirugía inmediata es técnicamente difícil y se asocia a más complicaciones, incluida la necesidad de resecciones intestinales amplias. La estrategia establecida es el tratamiento conservador: antibiótico y drenaje percutáneo guiado por imagen del absceso, con apendicectomía diferida a las 8-12 semanas, cuando la inflamación ha cedido. En el adulto conviene además descartar neoplasia con colonoscopia.',
  no:{0:'La apendicectomía urgente sobre un plastrón organizado aumenta la morbilidad de forma significativa.',2:'La hemicolectomía es una cirugía desproporcionada para una apendicitis complicada sin sospecha tumoral confirmada.',3:'El tratamiento antibiótico sin drenar una colección de 7 centímetros probablemente fracasa: los abscesos de ese tamaño requieren drenaje.'},
  trampa:'"Apendicitis igual a quirófano" es cierto en las primeras horas. Pasados varios días, con absceso formado, la conducta se invierte.',
  dx:['Plastrón apendicular con absceso','Apendicitis aguda','Diverticulitis complicada','Neoplasia de ciego'],
  obj:'Manejar la apendicitis evolucionada a absceso con drenaje y cirugía diferida.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías de la World Society of Emergency Surgery sobre apendicitis aguda.'
},

/* ---------------------- CIRUGÍA ---------------------- */
'MIR-2016-M143': {
  tema:'Urología',
  clave:'Indicaciones absolutas de cirugía prostática: complicaciones, no intensidad de los síntomas.',
  exp:'La cirugía de la hiperplasia prostática es obligada cuando aparecen complicaciones del obstáculo: retención urinaria refractaria, infecciones urinarias de repetición, litiasis vesical, hematuria recidivante de origen prostático, divertículos vesicales y deterioro de la función renal por obstrucción. Fuera de esas situaciones la indicación es relativa y depende de cuánto molesten los síntomas al paciente y de la respuesta al tratamiento médico.',
  no:{1:'Los stents prostáticos se reservan para pacientes con alto riesgo quirúrgico y retención, no para jóvenes con pocos síntomas.',2:'El seguimiento tras la cirugía no requiere controles trimestrales durante el primer año en el paciente asintomático.',3:'La disfunción eréctil no es la norma; lo frecuente tras la resección transuretral es la eyaculación retrógrada, que conviene explicar antes de operar.'},
  trampa:'Se confunde eyaculación retrógrada con disfunción eréctil. Son cosas distintas y la información al paciente cambia por completo.',
  dx:['Hiperplasia benigna de próstata','Cáncer de próstata','Vejiga hiperactiva'],
  obj:'Distinguir indicaciones absolutas y relativas de cirugía en la hiperplasia prostática.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías de la European Association of Urology sobre síntomas del tracto urinario inferior.'
},
'MIR-2016-M171': {
  clave:'La biopsia decía carcinoma intraductal, pero la pieza mostró un carcinoma INFILTRANTE de 6 mm.',
  exp:'Ese cambio de diagnóstico lo cambia todo: mientras la lesión era intraductal no había riesgo ganglionar, pero un carcinoma infiltrante, por pequeño que sea, obliga a estadificar la axila. La biopsia selectiva del ganglio centinela es el procedimiento indicado con axila clínicamente negativa, y evita la linfadenectomía completa y su linfedema. Solo después, conocido el estado ganglionar, se define el tratamiento adyuvante.',
  no:{1:'Radioterapia y hormonoterapia formarán parte del tratamiento, pero no antes de estadificar la axila.',2:'La mastectomía con linfadenectomía es desproporcionada para un tumor de 6 mm con márgenes libres.',3:'La quimioterapia no está indicada de entrada en un tumor de 6 mm, receptores positivos, Her-2 negativo y Ki-67 bajo, que es un perfil de bajo riesgo.'},
  trampa:'La infraestimación de la biopsia percutánea es frecuente: un intraductal puede resultar infiltrante en la pieza. El diagnóstico definitivo es el de la pieza, no el de la aguja.',
  dx:['Carcinoma ductal infiltrante','Carcinoma intraductal','Lesión esclerosante compleja'],
  obj:'Estadificar la axila en cuanto aparece componente infiltrante.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías ESMO y NCCN sobre cáncer de mama precoz.'
},
'MIR-2016-M40': {
  clave:'Citalopram más fentanilo, con mioclonías, hipertermia, midriasis y agitación en el postoperatorio.',
  exp:'El síndrome serotoninérgico aparece cuando se suman dos fármacos serotoninérgicos: aquí un inhibidor selectivo de la recaptación de serotonina y el fentanilo, que también tiene actividad serotoninérgica. Se instaura en horas y su tríada es alteración del estado mental, hiperactividad autonómica y anomalías neuromusculares: mioclonías, hiperreflexia y clonus, característicamente de predominio en miembros inferiores. La midriasis y la hipersalivación completan el cuadro. Se trata retirando los fármacos, con soporte, benzodiacepinas y, en casos graves, ciproheptadina.',
  no:{0:'La intoxicación por fentanilo produciría miosis puntiforme y depresión respiratoria, es decir, lo contrario.',2:'Un trastorno de angustia no produce hipertermia ni mioclonías.',3:'La psicosis postoperatoria no cursa con midriasis, hipertermia ni hiperactividad neuromuscular.'},
  trampa:'Se confunde con el síndrome neuroléptico maligno. Los separan la velocidad —horas frente a días—, el tipo de rigidez y la presencia de clonus e hiperreflexia.',
  dx:['Síndrome serotoninérgico','Síndrome neuroléptico maligno','Hipertermia maligna','Anticolinérgico'],
  obj:'Reconocer el síndrome serotoninérgico y sus diferencias con el neuroléptico maligno.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Goodman y Gilman y Harrison 21.ª ed.'
},
'MIR-2016-M55': {
  tema:'Infectología',
  clave:'Donante positivo con receptor negativo: el virus entra con el órgano y el receptor no tiene defensas.',
  exp:'La combinación de mayor riesgo de enfermedad por citomegalovirus en trasplante de órgano sólido es donante seropositivo con receptor seronegativo. El receptor recibe el virus junto con el injerto, no tiene inmunidad previa y además está bajo inmunosupresión intensa, de modo que desarrolla una primoinfección grave. Es la situación que obliga a profilaxis antiviral prolongada con valganciclovir o a vigilancia estrecha con carga viral.',
  no:{0:'Donante y receptor positivos suponen riesgo intermedio: hay reactivación posible, pero el receptor tiene inmunidad previa.',1:'Donante negativo con receptor positivo es riesgo bajo-intermedio: solo puede haber reactivación del virus propio.',2:'Ambos negativos es el riesgo más bajo; solo cabría transmisión por hemoderivados.'},
  trampa:'Se piensa que el peligro está en el receptor infectado. Es al revés: el peligro está en el receptor virgen que recibe el virus por primera vez ya inmunodeprimido.',
  dx:['Enfermedad por citomegalovirus postrasplante','Rechazo agudo','Infección bacteriana'],
  obj:'Estratificar el riesgo de citomegalovirus por el emparejamiento serológico donante-receptor.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías internacionales de consenso sobre citomegalovirus en trasplante de órgano sólido.'
},
'MIR-2016-M68': {
  clave:'Melanoma de 1,3 mm de Breslow: espesor intermedio, con indicación de ganglio centinela.',
  exp:'El espesor de Breslow gobierna las dos decisiones. Para un melanoma de 1 a 2 mm, el margen de ampliación recomendado es de 1 cm, y el ganglio centinela está indicado porque a partir de 0,8 mm el riesgo de afectación ganglionar oculta justifica estadificar. La linfadenectomía completa ya no se realiza de forma sistemática ante centinela positivo: se prefiere la vigilancia ecográfica y el tratamiento sistémico adyuvante.',
  no:{0:'El PET no está indicado en un melanoma localizado sin adenopatías palpables: el rendimiento es bajo y genera hallazgos incidentales.',2:'La linfadenectomía axilar de entrada es un sobretratamiento con morbilidad elevada, hoy desplazada por el ganglio centinela.',3:'Dos centímetros de margen corresponden a melanomas de más de 2 mm, y omitir el centinela deja al paciente sin estadificar.'},
  trampa:'Se ampliaron márgenes y se dio el caso por cerrado. Sin ganglio centinela el paciente queda sin estadio, y el estadio determina el tratamiento adyuvante.',
  dx:['Melanoma de extensión superficial','Nevus displásico','Melanoma nodular'],
  obj:'Usar el espesor de Breslow para decidir márgenes y ganglio centinela.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías NCCN y ESMO sobre melanoma cutáneo.'
},

/* ---------------------- CARDIOLOGÍA ---------------------- */
'MIR-2016-M58': {
  clave:'Síncope en un joven con ondas Q profundas y soplo sistólico en borde esternal izquierdo bajo.',
  exp:'La miocardiopatía hipertrófica obstructiva produce ondas Q patológicas por la hipertrofia septal —no por infarto— y un soplo de obstrucción dinámica del tracto de salida que se ausculta en el borde esternal izquierdo bajo. Ese soplo aumenta con las maniobras que reducen la precarga, como Valsalva o la bipedestación, al contrario que el de la estenosis aórtica. El síncope de esfuerzo en un joven obliga a descartarla: es la principal causa de muerte súbita en el deportista.',
  no:{1:'La estenosis mitral produce un soplo DIASTÓLICO en ápex con chasquido de apertura.',2:'La insuficiencia aórtica da un soplo diastólico decreciente y pulso amplio y saltón.',3:'La comunicación interauricular cursa con desdoblamiento fijo del segundo ruido y soplo pulmonar, sin ondas Q profundas.'},
  trampa:'Las ondas Q hacen pensar en infarto antiguo. En un joven con soplo y síncope, esas Q son de hipertrofia septal.',
  dx:['Miocardiopatía hipertrófica obstructiva','Estenosis aórtica','Síncope vasovagal','Displasia arritmogénica'],
  obj:'Reconocer la miocardiopatía hipertrófica como causa de síncope y muerte súbita en el joven.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con la guía ESC de miocardiopatías.'
},
'MIR-2016-M62': {
  clave:'Antes de etiquetar de resistente hay que confirmar la cifra fuera de la consulta.',
  exp:'La hipertensión resistente se define como la que no se controla con tres fármacos a dosis plenas, uno de ellos diurético, y su diagnóstico exige haber CONFIRMADO las cifras fuera de la consulta y haber verificado la adherencia. La monitorización ambulatoria descarta el efecto de bata blanca, que es responsable de una parte importante de las resistencias aparentes. Solo con cifras elevadas confirmadas tiene sentido buscar causas secundarias o añadir un cuarto fármaco.',
  no:{0:'Añadir espironolactona como cuarto fármaco es el paso siguiente, pero solo tras confirmar que la hipertensión es realmente resistente.',1:'El paciente ya está con dosis plenas de amlodipino y de la combinación con diurético.',3:'El estudio de hipertensión secundaria se plantea después de confirmar la resistencia verdadera.'},
  trampa:'Se escala el tratamiento sobre una cifra tomada en consulta. Confirmar el diagnóstico antes de intensificar evita medicar de más durante años.',
  dx:['Hipertensión resistente','Hipertensión de bata blanca','Hipertensión secundaria','Falta de adherencia'],
  obj:'Confirmar con monitorización ambulatoria antes de diagnosticar hipertensión resistente.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con la guía ESC/ESH de hipertensión arterial.'
},
'MIR-2016-M63': {
  clave:'Sigue sintomático con IECA y betabloqueante: falta el tercer pilar.',
  exp:'En la insuficiencia cardíaca con fracción de eyección reducida que persiste sintomática pese al bloqueo del sistema renina-angiotensina y al betabloqueante, el paso siguiente es añadir un antagonista del receptor mineralocorticoide como la espironolactona o la eplerenona. Reduce mortalidad y hospitalizaciones. Requiere vigilar el potasio y la función renal. Hoy el esquema se completa además con un inhibidor de SGLT2.',
  no:{1:'Suspender el betabloqueante en un paciente estable empeora el pronóstico: es tratamiento modificador de mortalidad.',2:'La amiodarona no mejora la supervivencia en insuficiencia cardíaca y tiene toxicidad tiroidea, pulmonar y hepática.',3:'El verapamilo es inotrópico negativo y está contraindicado en la disfunción sistólica.'},
  trampa:'El paciente está en fibrilación auricular y eso tienta a añadir un antiarrítmico o un frenador. Lo que le falta es tratamiento de la insuficiencia cardíaca, no de la arritmia.',
  dx:['Insuficiencia cardíaca con FEVI reducida','Fibrilación auricular permanente'],
  obj:'Completar los pilares del tratamiento de la insuficiencia cardíaca con FEVI reducida.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con la guía ESC de insuficiencia cardíaca.'
},
'MIR-2016-M89': {
  clave:'Prevención secundaria con LDL de 162 mg/dL y sin estatina: falta el fármaco que reduce eventos.',
  exp:'Tras un infarto, el objetivo prioritario es reducir el colesterol LDL con una estatina de alta intensidad, porque es lo que reduce la recurrencia de eventos y la mortalidad. Este paciente está tomando un fibrato, indicado para hipertrigliceridemia, con triglicéridos normales y LDL muy alto: el fármaco no corresponde al problema. Cambiar gemfibrozilo por atorvastatina corrige la elección.',
  no:{0:'El estilo de vida es necesario pero insuficiente con LDL de 162 mg/dL en prevención secundaria.',1:'Elevar el colesterol HDL con ácido nicotínico no ha demostrado reducir eventos y se abandonó.',3:'El carvedilol es tratamiento pronóstico postinfarto; retirarlo por un efecto metabólico menor sería un error grave.'},
  trampa:'Se revisa el análisis y no la indicación de cada fármaco. El paciente lleva años con el medicamento equivocado para su perfil lipídico.',
  dx:['Cardiopatía isquémica crónica','Dislipidemia aterogénica'],
  obj:'Priorizar la reducción de LDL con estatina en prevención secundaria.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías ESC/EAS sobre dislipidemias.'
},

/* ---------------------- NEUMOLOGÍA ---------------------- */
'MIR-2017-M143': {
  clave:'Se pide lo MENOS probable. En el enfisema la difusión está BAJA, no normal.',
  exp:'El enfisema destruye el tabique alveolar y con él la superficie de intercambio y el lecho capilar, de modo que la capacidad de difusión del monóxido de carbono desciende. Es precisamente el parámetro que lo distingue de la bronquitis crónica, donde la difusión suele conservarse. El resto de hallazgos son los esperables: obstrucción con cociente FEV1/FVC bajo, FEV1 reducido y atrapamiento aéreo con capacidad pulmonar total aumentada.',
  no:{0:'Es esperable: el FEV1 está reducido en la EPOC establecida.',2:'Es esperable: el cociente por debajo de 0,70 tras broncodilatador define la obstrucción.',3:'Es esperable: la hiperinsuflación por atrapamiento aéreo eleva la capacidad pulmonar total.'},
  trampa:'Se memorizan los parámetros de obstrucción y se olvida la difusión, que es justamente la que separa enfisema de bronquitis crónica.',
  dx:['EPOC tipo enfisema','Bronquitis crónica','Asma','Enfermedad intersticial'],
  obj:'Usar la DLCO para diferenciar enfisema de bronquitis crónica.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con el informe GOLD y Harrison 21.ª ed.'
},
'MIR-2018-M147': {
  clave:'El silencio auscultatorio en el asma no es mejoría: es que ya no entra aire suficiente para generar sibilancias.',
  exp:'En la crisis asmática grave la obstrucción es tan intensa que el flujo aéreo resulta insuficiente para producir sibilancias, y el tórax queda silencioso. Es un signo de extrema gravedad, no de mejoría. Se acompaña de espiración alargada por la obstrucción al vaciado y de percusión timpánica por el atrapamiento aéreo e hiperinsuflación. Junto con el uso de musculatura accesoria, indica riesgo vital inminente.',
  no:{0:'La percusión mate implicaría condensación o derrame, no hiperinsuflación.',1:'En el asma lo alargado es la ESPIRACIÓN, porque la obstrucción dificulta el vaciado; además, si hubiera sibilancias no sería la crisis más grave.',3:'La percusión mate es incompatible con el atrapamiento aéreo del asma grave.'},
  trampa:'La desaparición de las sibilancias se interpreta como que el paciente mejora. Es el signo que obliga a preparar la vía aérea.',
  dx:['Crisis asmática grave','Neumotórax','Anafilaxia','Cuerpo extraño'],
  obj:'Reconocer el tórax silente como signo de gravedad extrema en el asma.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con GINA, manejo de las exacerbaciones asmáticas.'
},
'MIR-2018-M153': {
  clave:'Líquido lechoso con triglicéridos de 371 mg/dL: quilotórax.',
  exp:'Un derrame de aspecto lechoso con triglicéridos por encima de 110 mg/dL define el quilotórax. Con adenopatías generalizadas, la causa más probable es un linfoma que obstruye el conducto torácico. El manejo inicial mientras se completa el estudio es conservador: drenaje con tubo para aliviar la disnea, dieta pobre en grasas con triglicéridos de cadena media o nutrición parenteral, y octreótido, que reduce el flujo linfático. El tratamiento definitivo es el de la causa.',
  no:{0:'La derivación pleuroperitoneal es una opción de segunda línea para quilotórax refractario.',1:'La ligadura del conducto torácico se plantea si fracasa el tratamiento conservador tras varias semanas.',3:'La pleurodesis química se reserva para derrames malignos recidivantes, y esclerosar antes de conocer el diagnóstico sería precipitado.'},
  trampa:'El aspecto lechoso también puede darlo un derrame con colesterol alto o un empiema. Los triglicéridos son los que confirman el quilotórax.',
  dx:['Quilotórax','Linfoma','Pseudoquilotórax','Empiema'],
  obj:'Diagnosticar el quilotórax por los triglicéridos y aplicar el manejo conservador inicial.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., enfermedades de la pleura.'
},
'MIR-2018-M154': {
  clave:'Matidez con abolición de vibraciones vocales y tráquea desplazada al lado CONTRARIO.',
  exp:'La combinación de matidez a la percusión, abolición del murmullo vesicular y disminución de las vibraciones vocales indica que entre el pulmón y la pared hay líquido. Y la dirección del desplazamiento traqueal distingue lo que ocupa de lo que retrae: el derrame empuja el mediastino hacia el lado contrario, mientras que la atelectasia tira de él hacia el mismo lado.',
  no:{0:'El neumotórax daría timpanismo, no matidez.',1:'La atelectasia desviaría la tráquea HACIA el lado enfermo, no hacia el contrario.',2:'En la condensación con bronquio permeable las vibraciones vocales están AUMENTADAS y no hay desviación traqueal.'},
  trampa:'Se sabe que hay desviación traqueal pero no hacia dónde. La dirección es lo que distingue proceso ocupante de proceso retráctil.',
  dx:['Derrame pleural','Atelectasia','Condensación neumónica','Neumotórax'],
  obj:'Interpretar la semiología torácica completa, incluida la dirección de la desviación traqueal.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con Harrison 21.ª ed., exploración del aparato respiratorio.'
},
'MIR-2018-M64': {
  tema:'Cardiología',
  clave:'Síncope más bloqueo AV de segundo grado Mobitz II: indicación de marcapasos, sin más estudio.',
  exp:'El Mobitz II implica enfermedad del sistema de conducción por debajo del nodo auriculoventricular, con alto riesgo de progresar a bloqueo completo y asistolia. Cuando además se acompaña de síncope, la relación causa-efecto es suficiente y la indicación de marcapasos definitivo es directa: no hacen falta más pruebas. Buscar más documentación solo retrasa un tratamiento que previene muerte súbita.',
  no:{0:'El Holter podría no captar el episodio y su resultado normal no descartaría nada: ya tenemos el diagnóstico en el electrocardiograma.',2:'Un síncope con recuperación inmediata y bloqueo documentado no requiere neuroimagen: el origen es cardíaco.',3:'El seguimiento en consulta ante un síncope con Mobitz II expone al paciente a muerte súbita.'},
  trampa:'Se piden más pruebas por prudencia. Cuando ya existe una causa documentada y con indicación establecida, seguir estudiando es el riesgo.',
  dx:['Bloqueo AV de segundo grado Mobitz II','Síncope cardiogénico','Bloqueo AV completo intermitente'],
  obj:'Reconocer las indicaciones directas de marcapasos definitivo.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con la guía ESC sobre estimulación cardíaca.'
},

/* ---------------------- REUMATOLOGÍA ---------------------- */
'MIR-2016-M194': {
  clave:'Crisis de gota con filtrado glomerular de 30 mL/min: casi todo lo habitual está contraindicado.',
  exp:'En la crisis gotosa aguda con insuficiencia renal avanzada, los antiinflamatorios no esteroideos están contraindicados por el riesgo de deterioro renal, y la colchicina requiere ajuste importante de dosis o se evita. Los corticoides orales, como la prednisona en pauta corta, son eficaces y seguros en este escenario y constituyen la opción preferente. Además, los hipouricemiantes NUNCA se inician durante la crisis, porque las variaciones bruscas de uricemia la prolongan.',
  no:{0:'El diclofenaco está contraindicado con un aclaramiento de 30 mL/min.',1:'El alopurinol no se inicia durante la crisis aguda; se introduce después, con profilaxis antiinflamatoria concomitante.',2:'El probenecid es uricosúrico y resulta ineficaz e inadecuado con filtrado glomerular reducido, además de aumentar el riesgo de litiasis.'},
  trampa:'Se elige el antiinflamatorio por costumbre. En el paciente renal la lista de fármacos seguros se reduce drásticamente y el corticoide pasa a primera línea.',
  dx:['Crisis gotosa aguda','Artritis séptica','Artritis por pirofosfato'],
  obj:'Elegir el tratamiento de la gota aguda en el paciente con insuficiencia renal.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las recomendaciones EULAR y ACR sobre gota.'
},
'MIR-2016-M203': {
  clave:'Rótula BAJA: si la rótula ha descendido, lo que se rompió tira desde arriba.',
  exp:'El razonamiento es puramente mecánico. El tendón cuadricipital tracciona de la rótula hacia arriba; si se rompe, la rótula desciende y aparece rótula baja. El tendón rotuliano la ancla hacia abajo; si se rompe, la rótula asciende y aparece rótula alta. El paciente no puede extender activamente la rodilla porque el aparato extensor está interrumpido. Los corticoides crónicos y la gota son factores de riesgo conocidos de rotura tendinosa.',
  no:{0:'La osteonecrosis de rodilla produce dolor intenso pero no impide la extensión activa ni desplaza la rótula.',1:'La artritis gotosa cursa con derrame y dolor, pero conserva el aparato extensor.',2:'La rotura del tendón rotuliano produciría rótula ALTA, no baja: es exactamente lo contrario.'},
  trampa:'Los dos tendones se confunden constantemente. La regla es simple: la rótula se mueve en dirección contraria al tendón que se rompió.',
  dx:['Rotura del tendón cuadricipital','Rotura del tendón rotuliano','Fractura de rótula','Artritis gotosa'],
  obj:'Deducir el tendón roto por la posición de la rótula.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Campbell, Cirugía Ortopédica.'
},
'MIR-2016-M69': {
  tema:'Dermatología',
  clave:'Lesiones anulares fotoinducidas que curan SIN cicatriz, en una paciente con síndrome seco.',
  exp:'El lupus cutáneo subagudo produce lesiones anulares policíclicas o psoriasiformes en zonas fotoexpuestas —escote y espalda alta—, desencadenadas por el sol y que se resuelven sin dejar cicatriz ni atrofia. Se asocia a anticuerpos anti-Ro/SSA, lo que explica el síndrome seco de la paciente, y puede ser inducido por fármacos. Es esa ausencia de cicatriz la que lo separa del lupus discoide, que sí la deja.',
  no:{1:'La tiña corporal también forma anillos de borde activo, pero no se desencadena con el sol y responde a antifúngicos; el examen directo con KOH la identifica.',2:'La porfiria cutánea tarda produce ampollas y fragilidad cutánea en el dorso de las manos, no lesiones anulares en el escote.',3:'El eritema anular centrífugo forma anillos migratorios con descamación en el borde interno, sin relación con la fotoexposición ni con el síndrome seco.'},
  trampa:'El anillo con borde activo hace pensar en hongos. La fotodistribución, el mes de vacaciones y el síndrome seco reorientan hacia el lupus.',
  dx:['Lupus cutáneo subagudo','Tiña corporal','Eritema anular centrífugo','Lupus discoide'],
  obj:'Reconocer el lupus subagudo por su fotodistribución y su curación sin cicatriz.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Fitzpatrick, Dermatología en Medicina General.'
},
'MIR-2016-M75': {
  tema:'Gastroenterología',
  clave:'Úlcera gástrica: se trata y se REBIOPSIA, porque el cáncer gástrico puede ulcerarse y parecer benigno.',
  exp:'A diferencia de la duodenal, toda úlcera gástrica exige confirmar la curación con endoscopia y biopsias a las 8-12 semanas, porque un adenocarcinoma ulcerado puede tener bordes de aspecto benigno y una primera biopsia negativa. Se trata con inhibidor de la bomba de protones y se comprueba. La metaplasia intestinal encontrada añade motivo para el seguimiento, ya que es una lesión preneoplásica.',
  no:{0:'La erradicación de Helicobacter pylori es correcta si se demuestra la infección, pero la histología descrita no la menciona y, en cualquier caso, no sustituye a la comprobación endoscópica.',2:'Los corticoides no son la causa habitual de úlcera por sí solos, y suspenderlos no resuelve la necesidad de descartar malignidad.',3:'La cirugía no está indicada en una úlcera gástrica no complicada sin diagnóstico de malignidad.'},
  trampa:'Una biopsia negativa se toma como prueba de benignidad. En la úlcera gástrica, la biopsia negativa inicial obliga igualmente a repetir la endoscopia.',
  dx:['Úlcera gástrica','Adenocarcinoma gástrico ulcerado','Gastritis crónica atrófica'],
  obj:'Comprobar siempre la curación de la úlcera gástrica con endoscopia y biopsia.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías de la American College of Gastroenterology sobre úlcera péptica.'
},
'MIR-2017-M166': {
  clave:'Monoartritis nueva e invalidante en un paciente con anti-TNF y corticoides: infección hasta que se demuestre lo contrario.',
  exp:'Los inhibidores del TNF y los corticoides enmascaran la respuesta inflamatoria, de modo que la artritis séptica puede cursar SIN fiebre, y la radiografía es normal en los primeros días. Una monoartritis nueva, invalidante, con leucocitosis y elevación de la proteína C reactiva en un paciente inmunodeprimido obliga a ingresar, artrocentesis y antibiótico precoz. Retrasarlo destruye la articulación y puede llegar a sepsis.',
  no:{0:'Aumentar el corticoide en una infección no reconocida agrava la situación de forma directa.',1:'La osteonecrosis no produce leucocitosis ni elevación marcada de la proteína C reactiva.',3:'La gota es excepcional en la cadera y no explica la leucocitosis en este contexto; además el alopurinol no se inicia en fase aguda.'},
  trampa:'La ausencia de fiebre tranquiliza. En el paciente con biológicos y corticoides, la fiebre es justamente lo primero que desaparece.',
  dx:['Artritis séptica de cadera','Brote de artritis reumatoide','Osteonecrosis','Artritis microcristalina'],
  obj:'Sospechar infección ante monoartritis nueva en paciente inmunodeprimido, aunque no haya fiebre.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con las recomendaciones EULAR sobre manejo de infecciones en terapia biológica.'
},

/* ---------------------- GINECOLOGÍA ---------------------- */
'MIR-2016-M162': {
  clave:'Mioma intramural de 4 cm que casi no da síntomas: no hay nada que tratar.',
  exp:'Los miomas son muy frecuentes y solo se tratan cuando producen síntomas relevantes —sangrado abundante con anemia, dolor, compresión— o cuando crecen de forma llamativa. Un mioma de 4 cm en una mujer de 43 años con reglas solo algo abundantes, sin dolor y sin anemia, se vigila con ecografía de control. Además, en la perimenopausia los miomas tienden a regresar al caer los estrógenos.',
  no:{1:'La miomectomía tiene sentido para preservar fertilidad o ante síntomas importantes; la paciente ya tiene dos hijos y apenas tiene síntomas.',2:'La histerectomía es un sobretratamiento evidente en este caso.',3:'Los análogos de GnRH producen menopausia farmacológica con pérdida de masa ósea, y su efecto es transitorio: se usan para reducir el mioma antes de operar, no como tratamiento definitivo.'},
  trampa:'Se trata la imagen ecográfica. Lo que se trata son los síntomas, no el hallazgo.',
  dx:['Mioma uterino intramural','Adenomiosis','Sangrado menstrual abundante'],
  obj:'Reservar el tratamiento del mioma para el que produce síntomas relevantes.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías del ACOG sobre miomas uterinos.'
},
'MIR-2016-M163': {
  clave:'Formación redondeada DENTRO de la cavidad endometrial: hay que verla y quitarla.',
  exp:'Una imagen intracavitaria bien delimitada e hipoecogénica en una mujer con sangrado abundante corresponde con más probabilidad a un pólipo endometrial o a un mioma submucoso. La histeroscopia permite visualizar la lesión directamente y resecarla en el mismo acto, con estudio histológico posterior: es diagnóstica y terapéutica a la vez.',
  no:{0:'El aspirado endometrial es una biopsia a ciegas: puede pasar por alto una lesión focal precisamente porque no la ve.',2:'El tratamiento hormonal no resuelve una lesión estructural intracavitaria.',3:'El ácido tranexámico reduce el sangrado pero deja la lesión sin diagnosticar ni tratar.'},
  trampa:'Ante sangrado abundante se piensa en tratamiento hormonal. Con una lesión focal visible en la cavidad, la conducta es estructural, no hormonal.',
  dx:['Pólipo endometrial','Mioma submucoso','Hiperplasia endometrial','Sangrado uterino disfuncional'],
  obj:'Elegir la histeroscopia ante lesión focal intracavitaria.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías NICE sobre sangrado menstrual abundante.'
},
'MIR-2016-M167': {
  clave:'Se pide la prueba que NO corresponde. La reserva folicular mide capacidad de concebir, no de mantener el embarazo.',
  exp:'El estudio del aborto de repetición busca causas de PÉRDIDA gestacional: alteraciones cromosómicas de los progenitores, malformaciones o lesiones de la cavidad uterina, síndrome antifosfolípido y algunas trombofilias, y factores endocrinos como la disfunción tiroidea. La reserva folicular ovárica informa del pronóstico de fertilidad —de la probabilidad de quedarse embarazada— pero no explica por qué se pierde una gestación ya conseguida, y esta paciente se queda embarazada sin dificultad.',
  no:{0:'El cariotipo de ambos miembros detecta translocaciones equilibradas, causa reconocida de aborto de repetición.',1:'La histeroscopia valora la cavidad: septos, sinequias, pólipos y miomas submucosos.',2:'El estudio de trombofilias, y sobre todo del síndrome antifosfolípido, es obligado y además tiene tratamiento eficaz.'},
  trampa:'Se mezcla el estudio de la esterilidad con el del aborto de repetición. Son dos problemas distintos: no lograr el embarazo y no conservarlo.',
  dx:['Aborto de repetición','Síndrome antifosfolípido','Malformación uterina','Translocación equilibrada'],
  obj:'Distinguir el estudio del aborto de repetición del estudio de esterilidad.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías ESHRE sobre pérdida gestacional recurrente.'
},
'MIR-2016-M233': {
  clave:'Tras evacuar una mola, lo que se vigila es la curva de β-hCG.',
  exp:'El seguimiento de la mola hidatiforme busca detectar precozmente la neoplasia trofoblástica gestacional persistente. Se basa en determinaciones seriadas de β-hCG: semanales hasta obtener tres resultados consecutivos negativos y después mensuales durante varios meses. Durante todo ese periodo es imprescindible una anticoncepción eficaz, porque un nuevo embarazo elevaría la β-hCG e impediría interpretar la curva.',
  no:{0:'El metotrexato se administra si la β-hCG se estanca o asciende, es decir, ante enfermedad persistente; no de forma profiláctica sistemática.',2:'La tomografía seriada no forma parte del seguimiento rutinario y expone a radiación innecesaria.',3:'La radiografía de tórax se realiza al diagnóstico para descartar metástasis pulmonares, pero no de forma trimestral sistemática.'},
  trampa:'Se busca la prueba de imagen. El marcador tumoral es el instrumento de vigilancia, y la imagen solo se usa si el marcador se comporta mal.',
  dx:['Mola hidatiforme completa','Neoplasia trofoblástica gestacional','Aborto incompleto'],
  obj:'Vigilar la mola con β-hCG seriada y anticoncepción eficaz.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías de la FIGO sobre enfermedad trofoblástica gestacional.'
},

/* ---------------------- ENDOCRINOLOGÍA Y VARIOS ---------------------- */
'MIR-2019-M138': {
  tema:'Reumatología',
  clave:'Brote doloroso de artrosis de rodilla: tratamiento conservador, no cirugía ni resonancia.',
  exp:'Los hallazgos radiológicos —osteofitos y pinzamiento de la interlínea medial— confirman una gonartrosis. El manejo inicial de un brote doloroso combina explicación del diagnóstico, reposo relativo, analgesia escalonada con paracetamol y antiinflamatorio de rescate, y después ejercicio y control de peso. La cirugía se plantea cuando el dolor y la limitación funcional persisten pese al tratamiento conservador bien hecho.',
  no:{1:'La prótesis no se indica en un primer brote sin haber agotado el tratamiento conservador.',2:'El desbridamiento artroscópico en la artrosis de rodilla no ha demostrado beneficio frente a placebo y está desaconsejado.',3:'La resonancia detectaría lesiones meniscales degenerativas, muy prevalentes y casi siempre irrelevantes, que conducirían a cirugías innecesarias.'},
  trampa:'Pedir resonancia en una artrosis ya confirmada por radiografía genera hallazgos incidentales que llevan a intervenir lo que no debe intervenirse.',
  dx:['Gonartrosis','Meniscopatía degenerativa','Artritis microcristalina','Osteonecrosis'],
  obj:'Manejar la artrosis de rodilla de forma conservadora y evitar pruebas que inducen cirugía.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con las recomendaciones OARSI y EULAR sobre artrosis.'
},
'MIR-2019-M171': {
  tema:'Urgencias',
  clave:'Se pide lo que NO va en el manejo INICIAL. La dobutamina no es el vasoactivo del shock séptico.',
  exp:'El paquete inicial del shock séptico incluye medir lactato, extraer hemocultivos, administrar antibiótico precoz y reponer volumen con cristaloides. Si la hipotensión persiste pese a los líquidos, el vasopresor de elección es la NORADRENALINA, porque el shock séptico es distributivo y lo que falta es tono vascular. La dobutamina es un inotrópico que además produce vasodilatación periférica: se reserva para la disfunción miocárdica asociada, una vez restaurada la presión.',
  no:{1:'El lactato forma parte del paquete inicial y guía la reanimación.',2:'Los hemocultivos se extraen antes del antibiótico, siempre que no lo retrasen.',3:'La reposición con cristaloides es la primera medida hemodinámica.'},
  trampa:'Se confunden inotrópico y vasopresor. En el shock séptico el problema es la vasodilatación, y la dobutamina la agrava.',
  dx:['Shock séptico de origen urinario','Shock cardiogénico','Shock hipovolémico'],
  obj:'Distinguir vasopresor de inotrópico y elegir según el tipo de shock.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con las guías de la Surviving Sepsis Campaign.'
},
'MIR-2019-M69': {
  tema:'Oftalmología',
  clave:'Choca con los objetos de un lado pero él no nota nada, con agudeza visual y presión normales.',
  exp:'Cuando la agudeza visual central y la presión intraocular son normales pero el paciente tropieza y derrama las cosas, el defecto está en el CAMPO visual, no en la agudeza. Una hemianopsia homónima con respeto macular por lesión occipital explica exactamente eso: conserva la visión central —de ahí el 0,9 de agudeza— y pierde medio campo, sin que el paciente sea consciente del déficit. Hay que hacer campimetría y neuroimagen.',
  no:{0:'El glaucoma normotensional afecta el campo, pero de forma progresiva en años, no en días, y no produce hemianopsia.',2:'Atribuirlo a despistes de la edad ignora un cuadro de instauración reciente y potencialmente vascular.',3:'Un desprendimiento periférico daría fotopsias y un defecto en forma de cortina, habitualmente monocular, y no un patrón homónimo.'},
  trampa:'Agudeza visual normal se lee como "ve bien". La agudeza mide solo el centro del campo; se puede perder la mitad del mundo con un 0,9.',
  dx:['Hemianopsia homónima','Ictus occipital','Glaucoma','Desprendimiento de retina'],
  obj:'Separar agudeza visual de campo visual en la evaluación del paciente que tropieza.',
  ref:'Examen MIR 2019, Ministerio de Sanidad de España. Contrastado con Kanski, Oftalmología Clínica, y Harrison 21.ª ed.'
},
'MIR-2020-M100': {
  tema:'Neurología',
  clave:'Conciencia CONSERVADA durante todo el episodio: eso define la crisis focal simple.',
  exp:'La paciente mantuvo la conciencia y fue consciente de la situación en todo momento, lo que clasifica la crisis como focal sin alteración de la consciencia. La afasia de expresión transitoria junto con sacudidas del hemicuerpo derecho localiza el foco en el hemisferio izquierdo. La duración de dos minutos con resolución completa y el carácter positivo de los síntomas —sacudidas, no debilidad— apoyan crisis frente a isquemia.',
  no:{0:'La crisis focal compleja, hoy llamada focal con alteración de la consciencia, exige precisamente que la conciencia se altere.',1:'Un accidente isquémico transitorio produce síntomas NEGATIVOS —pérdida de fuerza, pérdida del habla— no movimientos involuntarios positivos, y el territorio sería el izquierdo, no el derecho, para dar clínica derecha.',2:'La crisis de ansiedad no produce afasia ni sacudidas lateralizadas de un hemicuerpo.'},
  trampa:'Se confunde el hemisferio: la clínica derecha corresponde a foco izquierdo. Y se confunden síntomas positivos, propios de la crisis, con negativos, propios de la isquemia.',
  dx:['Crisis focal sin alteración de la consciencia','Accidente isquémico transitorio','Aura migrañosa','Crisis psicógena'],
  obj:'Clasificar las crisis por el estado de la consciencia y distinguir síntomas positivos de negativos.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con la clasificación de crisis de la ILAE.'
},
'MIR-2020-M131': {
  clave:'Se pide la INCORRECTA. El cribado familiar es en cascada, no genético a todos de entrada.',
  exp:'El cuadro es una hipercolesterolemia familiar: LDL de 270 mg/dL resistente al tratamiento, xantomas en el tendón de Aquiles y triglicéridos normales. El cribado de los familiares de primer grado se realiza en cascada y empieza por la determinación de LÍPIDOS, que es barata y accesible; el estudio genético se reserva para casos concretos, sobre todo cuando se ha identificado la mutación en el caso índice y aporta información útil. Afirmar que hay que hacer estudio genético a todos los familiares de primer grado es incorrecto.',
  no:{0:'Es correcta: el diagnóstico puede confirmarse identificando la mutación en el receptor de LDL, ApoB o PCSK9.',2:'Es correcta: con LDL tan alto pese a estatina de alta intensidad y ezetimiba, el inhibidor de PCSK9 está indicado.',3:'Es correcta: la enfermedad cardiovascular precoz es la consecuencia que se quiere prevenir.'},
  trampa:'La opción del cribado familiar suena impecable, y de hecho el cribado en cascada es obligado. El error está en el método: lípidos primero, genética después.',
  dx:['Hipercolesterolemia familiar heterocigota','Hipercolesterolemia poligénica','Dislipidemia secundaria'],
  obj:'Aplicar el cribado en cascada de la hipercolesterolemia familiar.',
  ref:'Examen MIR 2020, Ministerio de Sanidad de España. Contrastado con las guías ESC/EAS sobre dislipidemias.'
},

/* ---------------------- DIGESTIVO ---------------------- */
'MIR-2016-M79': {
  clave:'Trombosis de la rama portal: eso convierte el hepatocarcinoma en estadio avanzado.',
  exp:'La clasificación BCLC ordena el tratamiento del hepatocarcinoma. La invasión vascular, aunque sea de una rama portal, define el estadio C o avanzado, en el que ni la resección, ni el trasplante, ni la quimioembolización están indicados. El tratamiento es sistémico. El sorafenib fue el primer fármaco que demostró aumento de supervivencia en este estadio, aunque hoy los esquemas de primera línea han evolucionado hacia combinaciones de inmunoterapia y antiangiogénicos.',
  no:{0:'El trasplante exige cumplir los criterios de Milán y la invasión vascular es una contraindicación absoluta.',1:'La resección no está indicada con invasión vascular por la altísima tasa de recidiva.',2:'La quimioembolización corresponde al estadio intermedio, sin invasión vascular ni extensión extrahepática.'},
  trampa:'Se decide por el tamaño del tumor y la función hepática, que aquí son favorables. La invasión vascular pesa más que ambos y salta directamente al estadio avanzado.',
  dx:['Hepatocarcinoma estadio BCLC C','Trombosis portal tumoral','Trombosis portal benigna'],
  obj:'Reconocer la invasión vascular como criterio de enfermedad avanzada en el hepatocarcinoma.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con las guías EASL sobre carcinoma hepatocelular.'
},
'MIR-2017-M163': {
  esp:'Pediatría',
  clave:'Los vómitos reaparecen, y peores, en cuanto se reintroduce la alimentación.',
  exp:'La secuencia es la clave: el neonato mejora con dieta absoluta y recae al realimentar, con vómitos más intensos que antes. Eso apunta a un problema desencadenado por la propia alimentación y no a una infección, que no mejoraría y empeoraría según se coma o no. En un neonato con lactancia artificial desde el nacimiento, vómitos desde el primer día, aspecto desnutrido y letargia, la reintroducción del alimento reproduce y agrava el cuadro.',
  no:{0:'La enterocolitis inducida por proteínas de leche de vaca es un diferencial razonable y también recae al realimentar, pero cursa típicamente con diarrea y vómitos tardíos a las 1-4 horas de la toma, con hipotensión.',1:'Una hernia hiatal grande podría dar reflujo intenso, pero es infrecuente y no explica por sí sola la leucocitosis con desviación izquierda.',2:'La sepsis no mejoraría con dieta absoluta ni empeoraría específicamente al realimentar.'},
  trampa:'La leucocitosis arrastra hacia la infección. El patrón temporal —mejora en ayunas, recae al comer— es lo que reorienta hacia una causa digestiva.',
  dx:['Enfermedad por reflujo gastroesofágico','Enterocolitis por proteínas de leche de vaca','Estenosis hipertrófica del píloro','Sepsis neonatal'],
  obj:'Leer la relación temporal entre alimentación y síntomas antes de atribuirlo todo a la infección.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con Nelson 22.ª ed., reflujo gastroesofágico en el lactante.'
},
'MIR-2017-M39': {
  clave:'Más de 50 células plasmáticas IgG4 positivas por campo, con flebitis obliterante y fibrosis estoriforme.',
  exp:'Esa histología define la pancreatitis autoinmune tipo 1, la manifestación pancreática de la enfermedad relacionada con IgG4. Su importancia clínica es enorme: simula un carcinoma de páncreas con ictericia obstructiva y masa cefálica, y responde espectacularmente a corticoides. El antecedente de tiroiditis de Riedel encaja, porque también forma parte del espectro IgG4. Reconocerla evita una duodenopancreatectomía innecesaria, como la que se hizo en este caso.',
  no:{0:'El hamartoma pancreático es una lesión benigna infrecuente sin infiltrado IgG4 ni flebitis obliterante.',2:'La malacoplaquia se caracteriza por histiocitos con cuerpos de Michaelis-Gutmann.',3:'La pancreatitis del surco afecta la región entre cabeza pancreática, duodeno y colédoco, sin este perfil inmunohistoquímico.'},
  trampa:'La masa pancreática con ictericia se asume maligna y se opera. Medir IgG4 antes de la cirugía puede ahorrarle al paciente una resección mayor.',
  dx:['Pancreatitis autoinmune tipo 1','Adenocarcinoma de páncreas','Pancreatitis crónica','Colangitis esclerosante'],
  obj:'Reconocer la pancreatitis autoinmune como imitadora de cáncer de páncreas.',
  ref:'Examen MIR 2017, Ministerio de Sanidad de España. Contrastado con los criterios internacionales de consenso sobre pancreatitis autoinmune y Robbins, Patología.'
}

});
