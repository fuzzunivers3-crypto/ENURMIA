/* ============================================================
   EXPLICACIONES — lote 07  (50 casos clínicos)
   Años 2013 a 2021. MIR 2017 de medicina excluido por cuarentena.

   Se leyó cada caso y se contrastó la respuesta oficial con la
   bibliografía: las 50 resultaron correctas.

   Una merece una advertencia y va escrita dentro de su propia
   explicación: MIR-2014-M132, sobre el rechazo de transfusión en
   un menor. La respuesta oficial (vía judicial) es válida cuando
   hay margen de tiempo; ante riesgo vital INMEDIATO se transfunde
   y se comunica después. Se explica el matiz en lugar de
   presentarlo como una regla única.

   Se corrige además la especialidad de las que el clasificador
   automático había colocado mal.
   ============================================================ */
window.EXPLICACIONES = Object.assign(window.EXPLICACIONES || {}, {

/* ==================== BIOÉTICA ==================== */
'MIR-2016-M221': {
  esp:'Bioética', tema:'Bioética', sub:'Consentimiento informado',
  clave:'Urgencia vital con riesgo inmediato: la ley exime del consentimiento.',
  exp:'El consentimiento informado tiene excepciones tasadas, y la principal es el riesgo inmediato y grave para la vida o la integridad del paciente cuando no es posible obtenerlo. Aquí hay obnubilación, cianosis y una saturación del 70%: el paciente no está en condiciones de decidir y cada minuto cuenta. Se actúa de inmediato y se documenta después. Fuera de esa excepción el consentimiento es la regla, y es un proceso de información y comprensión, no la firma de un papel.',
  no:{0:'Solicitarlo a un paciente obnubilado e hipoxémico no produce un consentimiento válido y retrasa el drenaje.',2:'Buscar familiares consume el tiempo del que no se dispone; además, en el adulto el representante no sustituye la urgencia vital.',3:'El drenaje sí es necesario: el paciente está en insuficiencia respiratoria.'},
  trampa:'Se aplica el consentimiento como un trámite obligatorio en todo caso. La urgencia vital con riesgo inmediato es precisamente su excepción legal.',
  dx:['Neumotórax a tensión','Neumotórax simple','Tromboembolia pulmonar'],
  obj:'Reconocer las excepciones al consentimiento informado.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Beauchamp y Childress y la normativa de autonomía del paciente.'
},

/* ==================== HEMATOLOGÍA Y TRASPLANTE ==================== */
'MIR-2015-M99': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Trasplante de progenitores',
  clave:'Se pide la FALSA. Quitar los linfocitos T del injerto reduce la EICH, pero EMPEORA el implante.',
  exp:'La depleción de linfocitos T del injerto es una estrategia eficaz para reducir la enfermedad del injerto contra el huésped, pero tiene un precio: esos mismos linfocitos favorecen el prendimiento del injerto y ejercen el efecto injerto contra leucemia. Al eliminarlos aumentan el fallo de implante y la recaída de la enfermedad de base. Por eso la afirmación de que mejora el implante es falsa: hace justo lo contrario.',
  no:{0:'Es cierta: son los linfocitos T del donante los que reconocen los tejidos del receptor como extraños.',1:'Es cierta: profilaxis con inmunosupresión, habitualmente ciclosporina con metotrexato, y corticoides para la enfermedad establecida.',3:'Es cierta: la forma crónica tiende a resolverse con el tiempo en una parte importante de los pacientes, permitiendo retirar la inmunosupresión.'},
  trampa:'Se asume que todo lo que reduce la EICH es beneficioso. El linfocito T del donante es a la vez el agresor y el que hace prender el injerto y controla la leucemia.',
  dx:['Enfermedad del injerto contra el huésped','Fallo de implante','Recaída'],
  obj:'Comprender el papel doble del linfocito T del donante.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías de la EBMT.'
},
'MIR-2018-M106': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Micosis invasivas',
  clave:'Hifas GRUESAS, NO septadas y con ramificación en ÁNGULO RECTO: Mucorales, no Aspergillus.',
  exp:'La histología resuelve el caso por encima de la imagen. Aspergillus tiene hifas finas, septadas y con ramificación en ángulo agudo, de unos 45 grados; los Mucorales tienen hifas gruesas, no septadas —cenocíticas— y se ramifican en ángulo recto. Aquí la biopsia describe el segundo patrón, de modo que se trata de una mucormicosis pulmonar, favorecida por la diabetes corticoidea y la inmunosupresión. Su tratamiento es la anfotericina B liposomal junto con desbridamiento quirúrgico y corrección del factor predisponente, porque los Mucorales son intrínsecamente resistentes al voriconazol y a las equinocandinas.',
  no:{1:'El voriconazol es el tratamiento de la aspergilosis, pero NO cubre Mucorales.',2:'Las equinocandinas como la caspofungina carecen de actividad frente a Mucorales.',3:'La anidulafungina tampoco los cubre.'},
  trampa:'El signo del halo empuja hacia Aspergillus, porque es su hallazgo clásico. Pero también aparece en la mucormicosis, y cuando hay histología, la histología manda.',
  dx:['Mucormicosis pulmonar','Aspergilosis invasiva','Neumonía bacteriana'],
  obj:'Diferenciar Mucorales de Aspergillus por la histología y elegir el antifúngico.',
  ref:'Examen MIR 2018, Ministerio de Sanidad de España. Contrastado con las guías ECMM/ESCMID sobre mucormicosis y las guías IDSA sobre aspergilosis.'
},

/* ==================== CIRUGÍA ==================== */
'MIR-2021-M140': {
  esp:'Cirugía', tema:'Cirugía general', sub:'Complicaciones postoperatorias',
  clave:'Fiebre en agujas y DIARREA a los 10 días de una peritonitis pélvica: absceso en el fondo de saco de Douglas.',
  exp:'El fondo de saco de Douglas es el punto más declive de la cavidad peritoneal, de modo que allí se acumula el pus tras una peritonitis pélvica. El absceso irrita el recto por contigüidad y produce deposiciones diarreicas, tenesmo y a veces síntomas urinarios, junto con fiebre en agujas y distensión: esa combinación de fiebre tardía con síntomas rectales es el patrón que hay que reconocer. El tacto rectal encuentra una masa dolorosa y fluctuante, la tomografía confirma y el tratamiento es el drenaje, percutáneo o transrectal, con antibiótico.',
  no:{1:'La infección de herida sería superficial, con eritema y supuración locales, y no explica la diarrea.',2:'La infección urinaria no produce fiebre en agujas con este contexto ni distensión abdominal.',3:'El absceso hepático daría dolor en hipocondrio derecho y hepatomegalia dolorosa.'},
  trampa:'La diarrea desvía hacia una gastroenteritis o hacia una colitis por antibióticos. En el postoperatorio de una peritonitis pélvica, la diarrea con fiebre apunta al absceso de Douglas.',
  dx:['Absceso de Douglas','Infección de herida','Colitis por C. difficile','Absceso hepático'],
  obj:'Reconocer el absceso pélvico postoperatorio por sus síntomas rectales.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con Schwartz, Principios de Cirugía, 11.ª ed.'
},
'MIR-2021-M142': {
  esp:'Cirugía', tema:'Cirugía general', sub:'Enfermedad diverticular',
  clave:'Estenosis sintomática que no deja pasar el colonoscopio y con biopsia no concluyente: hay que resecar.',
  exp:'La estenosis sigmoidea tras episodios repetidos de diverticulitis genera dos problemas a la vez. El primero es funcional: produce estreñimiento pertinaz y dolor cólico que no van a resolverse con medidas conservadoras. El segundo es diagnóstico: si el colonoscopio no pasa y la biopsia no es concluyente, no se ha descartado una neoplasia, y el cáncer de colon puede presentarse exactamente así. La sigmoidectomía resuelve el síntoma y aporta el diagnóstico definitivo con el estudio de la pieza.',
  no:{1:'La fibra y la rifaximina no resuelven una estenosis fibrótica establecida.',2:'La dilatación endoscópica tiene un papel muy limitado en la estenosis diverticular y no descarta malignidad.',3:'El stent se emplea como puente en la obstrucción maligna, no en una estenosis benigna crónica en una paciente operable.'},
  trampa:'Se intenta el manejo conservador porque los episodios previos fueron leves. Lo que cambia la conducta es la estenosis que no se puede atravesar ni tipificar.',
  dx:['Estenosis diverticular','Cáncer de colon','Colitis isquémica'],
  obj:'Indicar la resección ante una estenosis colónica sintomática no tipificada.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con las guías de la American Society of Colon and Rectal Surgeons sobre enfermedad diverticular.'
},
'MIR-2021-M186': {
  esp:'Medicina Familiar', tema:'Organización asistencial', sub:'Interconsulta',
  clave:'Se pide lo que NO corresponde. La asistencia compartida es proactiva y continuada, no a demanda.',
  exp:'El modelo clásico de interconsulta funciona *a demanda*: el servicio responsable pide una opinión puntual sobre una cuestión concreta y el consultor responde. La *asistencia compartida* es un modelo distinto: el internista o el geriatra se integra en el equipo desde el ingreso, con seguimiento proactivo y continuado, responsabilidad compartida sobre el paciente, atención integral a sus comorbilidades y comunicación fluida entre ambos médicos. Su ventaja demostrada es la reducción de complicaciones y de estancia en el paciente quirúrgico complejo, sobre todo el anciano con fractura de cadera.',
  no:{0:'La responsabilidad compartida sí es característica del modelo.',2:'La atención integral y global es precisamente lo que lo define frente a la consulta puntual.',3:'La comunicación fluida entre los dos médicos forma parte del modelo.'},
  trampa:'Se confunden los dos modelos porque ambos implican a un médico consultor. La diferencia está en si actúa cuando lo llaman o si forma parte del equipo desde el principio.',
  dx:[],
  obj:'Diferenciar la interconsulta clásica de la asistencia compartida.',
  ref:'Examen MIR 2021, Ministerio de Sanidad de España. Contrastado con documentos de la Sociedad Española de Medicina Interna sobre asistencia compartida.'
},

/* ==================== EMERGENCIAS ==================== */
'MIR-2013-M98': {
  esp:'Medicina Interna', tema:'Endocrinología', sub:'Apoplejía hipofisaria',
  clave:'Se pide la INCORRECTA. Con oftalmoplejía y déficit visual no se observa: se descomprime.',
  exp:'La apoplejía hipofisaria es la hemorragia o el infarto brusco de un adenoma, y se presenta con cefalea intensa, signos meníngeos, alteraciones visuales por compresión del quiasma y oftalmoplejía por afectación de los pares craneales del seno cavernoso. Tiene dos urgencias simultáneas: la endocrina, porque el déficit agudo de ACTH puede provocar una insuficiencia suprarrenal mortal y obliga a administrar glucocorticoides de inmediato; y la neuroquirúrgica, porque la afectación visual y la oftalmoplejía son indicación de descompresión sin demora. Esperar con corticoides a que la lesión se reduzca puede costar la visión de forma permanente.',
  no:{0:'Es correcta: el cuadro descrito es una apoplejía hipofisaria.',2:'Es correcta: los glucocorticoides se administran precisamente para evitar la insuficiencia suprarrenal secundaria.',3:'Es correcta: la oftalmoplejía y los defectos visuales indican descompresión urgente.',4:'Es correcta: el panhipopituitarismo posterior es frecuente y requiere seguimiento endocrino.'},
  trampa:'El corticoide se lee como tratamiento definitivo porque en muchos procesos reduce el edema. Aquí salva la vida por el eje suprarrenal, pero no sustituye a la cirugía cuando hay compromiso visual.',
  dx:['Apoplejía hipofisaria','Hemorragia subaracnoidea','Meningitis','Trombosis del seno cavernoso'],
  obj:'Manejar la apoplejía hipofisaria en sus dos frentes, endocrino y quirúrgico.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de la Endocrine Society sobre patología hipofisaria.'
},
'MIR-2014-M111': {
  esp:'Medicina Interna', tema:'Reumatología', sub:'Monoartritis',
  clave:'Toda monoartritis aguda de primera vez se puncióna: hay que descartar infección antes que nada.',
  exp:'El cuadro sugiere una artritis reactiva: monoartritis de rodilla con entesitis aquílea cuatro semanas después de una diarrea en un viaje, que es la secuencia clásica tras una infección entérica por Shigella, Salmonella, Yersinia o Campylobacter. Pero el diagnóstico probable no exime de descartar el diagnóstico peligroso: la artritis séptica destruye el cartílago en días y sus secuelas son irreversibles. Por eso, ante toda monoartritis aguda, la artrocentesis con recuento celular, tinción de Gram, cultivo y búsqueda de cristales es el paso obligado antes de tratar. La presencia de cristales, además, no descarta la infección: pueden coexistir.',
  no:{0:'Etiquetar de espondiloartropatía e iniciar metotrexato sin haber descartado infección es peligroso.',1:'Inmovilizar y dar antiinflamatorios sin puncionar deja pasar una posible artritis séptica.',3:'La artroscopia no es la primera exploración diagnóstica.',4:'No hay datos de gota, y el alopurinol no se inicia en la crisis sin diagnóstico ni profilaxis.'},
  trampa:'El contexto epidemiológico es tan sugestivo de artritis reactiva que se salta la punción. La punción no es para confirmar la reactiva: es para excluir la séptica.',
  dx:['Artritis reactiva','Artritis séptica','Gota','Espondiloartritis'],
  obj:'Puncionar toda monoartritis aguda antes de tratar.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con guías sobre artritis séptica y espondiloartritis.'
},
'MIR-2014-M132': {
  esp:'Bioética', tema:'Bioética', sub:'Menores y rechazo de tratamiento',
  clave:'Menor de edad + rechazo parental de un tratamiento vital: la decisión no corresponde a los padres. Se recurre a la autoridad judicial.',
  exp:'La patria potestad se ejerce en beneficio del hijo y no ampara decisiones que pongan en riesgo su vida. Cuando los representantes legales de un menor rechazan un tratamiento necesario para la vida, el médico no queda vinculado por esa negativa: debe poner el caso en conocimiento de la autoridad judicial, que resuelve en interés del menor. Conviene precisar un matiz importante, porque la respuesta correcta depende del tiempo disponible: si existe riesgo vital INMEDIATO y no hay margen para acudir al juez, el profesional debe actuar y transfundir, comunicándolo después. La vía judicial es la respuesta cuando hay margen, como plantea este enunciado, en el que el paciente ingresa y se documenta la negativa. En todo caso, el marco concreto lo fija la normativa de cada país.',
  no:{0:'Transfundir sin más es lo correcto solo ante riesgo vital inmediato sin margen para acudir al juez.',1:'Esperar a que pierda la conciencia para transfundir es un subterfugio éticamente inaceptable.',2:'El comité de ética asesora, pero no sustituye a la autoridad judicial ni decide por ella.',3:'Respetar la negativa de los padres ante un tratamiento vital para un menor no es una opción válida.'},
  trampa:'Se traslada al menor la autonomía del adulto. El adulto competente puede rechazar un tratamiento aunque muera; los padres no pueden rechazarlo en nombre de su hijo.',
  dx:[],
  obj:'Actuar ante el rechazo parental de un tratamiento vital en un menor.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con la Convención sobre los Derechos del Niño, la normativa española de autonomía del paciente y códigos deontológicos.'
},
'MIR-2014-M134': {
  esp:'Emergencias', tema:'Urgencias', sub:'Shock',
  clave:'Traumatismo en hipocondrio izquierdo con hipotensión, taquicardia y palidez: rotura esplénica y shock hipovolémico.',
  exp:'El bazo es el órgano más frecuentemente lesionado en el traumatismo abdominal cerrado, y el mecanismo descrito —impacto directo del manillar en el flanco izquierdo— es característico. El intervalo de unas horas entre el traumatismo y el deterioro corresponde a la rotura en dos tiempos, cuando un hematoma subcapsular se rompe después. El perfil clínico es el del shock hipovolémico: taquicardia, hipotensión, palidez y sudoración por vasoconstricción compensadora. Conviene recordar que la hipotensión es tardía: en una joven que compensa bien, cuando la presión cae la pérdida ya es importante.',
  no:{1:'No hay foco infeccioso ni contexto de sepsis.',2:'El cardiogénico cursaría con congestión e ingurgitación yugular, no con palidez y yugulares colapsadas.',3:'El anafiláctico requiere exposición a un alérgeno y cursa con vasodilatación y piel caliente.',4:'El neurogénico se acompaña de bradicardia y piel caliente, y requiere lesión medular alta.'},
  trampa:'Se espera la hipotensión para actuar. En el traumatizado joven la taquicardia y el estrechamiento de la presión de pulso aparecen mucho antes.',
  dx:['Rotura esplénica','Laceración hepática','Shock neurogénico'],
  obj:'Reconocer el shock hipovolémico postraumático y su origen esplénico.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con el ATLS, 10.ª ed.'
},
'MIR-2014-M43': {
  esp:'Medicina Interna', tema:'Gastroenterología', sub:'Cirrosis descompensada',
  clave:'Cirrótico con ascitis que se descompensa: paracentesis diagnóstica urgente.',
  exp:'La encefalopatía hepática casi siempre tiene un desencadenante identificable, y la infección del líquido ascítico es uno de los más frecuentes y más graves. La peritonitis bacteriana espontánea puede cursar sin fiebre y sin dolor abdominal, manifestándose únicamente como un deterioro del estado mental o de la función renal, de modo que esperar los síntomas clásicos retrasa el diagnóstico. Por eso todo cirrótico con ascitis que ingresa por cualquier descompensación merece una paracentesis diagnóstica: con 250 polimorfonucleares por mm³ o más se trata sin esperar al cultivo, con cefalosporina de tercera generación y albúmina.',
  no:{0:'La tomografía craneal se plantea si hay focalidad o traumatismo, no de entrada en una encefalopatía típica.',1:'La ascitis ya está constatada en la exploración: la ecografía no aporta lo urgente.',3:'El electroencefalograma muestra hallazgos inespecíficos y no cambia la conducta.',4:'El cribado de hepatocarcinoma es importante pero programado, no urgente.'},
  trampa:'Se atribuye la encefalopatía al estreñimiento o a la transgresión dietética y se trata solo con lactulosa. Sin buscar el desencadenante, se deja una infección sin tratar.',
  dx:['Peritonitis bacteriana espontánea','Encefalopatía hepática','Hemorragia digestiva'],
  obj:'Puncionar la ascitis en todo cirrótico que se descompensa.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las guías EASL sobre cirrosis descompensada.'
},

/* ==================== EPIDEMIOLOGÍA ==================== */
'MIR-2013-M198': {
  esp:'Epidemiología', tema:'Diseños de estudio', sub:'Sesgos',
  clave:'Cegar al entrevistador elimina su sesgo, pero no el de la MEMORIA de la entrevistada.',
  exp:'El enunciado está construido para descartar dos sesgos y dejar uno. El cuestionario validado y el cegamiento de los entrevistadores neutralizan el sesgo del entrevistador y buena parte del sesgo de información atribuible al observador. Lo que ningún cegamiento puede evitar es que una madre cuyo hijo nació con una malformación haya revisado su embarazo buscando explicaciones y recuerde con más detalle e intensidad las exposiciones que una madre con un hijo sano. Ese sesgo de memoria es propio de los estudios de casos y controles y sobreestima la asociación; se reduce usando registros objetivos en lugar de la memoria.',
  no:{0:'El sesgo de información es la categoría general; la pregunta pide el tipo concreto, y el cegamiento ya ha eliminado la parte atribuible al observador.',2:'El sesgo del entrevistador queda neutralizado precisamente por el cegamiento y el cuestionario validado.',3:'El sesgo de selección afecta a cómo se eligen los participantes, no a cómo se recoge la información.',4:'La falacia ecológica es un error de inferencia de los estudios ecológicos, con datos agregados.'},
  trampa:'Se contesta "sesgo de información" porque es cierto en sentido amplio. La pregunta pide el subtipo, y el enunciado ha eliminado a propósito los demás.',
  dx:[],
  obj:'Identificar el sesgo de memoria y lo que el cegamiento sí y no corrige.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Gordis, Epidemiología, y Rothman, Modern Epidemiology.'
},
'MIR-2013-M199': {
  esp:'Epidemiología', tema:'Diseños de estudio', sub:'Casos y controles anidado',
  clave:'Casos y controles seleccionados DENTRO de una cohorte o registro poblacional definido: anidado.',
  exp:'El estudio de casos y controles *anidado* selecciona los casos y sus controles dentro de una cohorte o población previamente definida y seguida, como aquí un registro poblacional de cáncer. Conserva la eficiencia del diseño de casos y controles —no hace falta medir la exposición en toda la cohorte— y añade dos ventajas importantes: los controles proceden de la misma población que generó los casos, lo que reduce el sesgo de selección, y la información sobre la exposición puede haberse recogido antes del diagnóstico, lo que reduce el sesgo de memoria.',
  no:{0:'La cohorte prospectiva partiría de la exposición y seguiría a los sujetos hacia adelante.',1:'Es un caso y controles, pero el matiz que pide la pregunta es que está anidado en un registro poblacional.',3:'La cohorte retrospectiva reconstruye el seguimiento de toda la cohorte, no aparea casos con controles.',4:'El estudio ecológico trabaja con datos agregados de poblaciones, no individuales.'},
  trampa:'Se responde "casos y controles" sin más. Está bien encaminado, pero el enunciado subraya que la selección se hace dentro de un registro poblacional: eso es lo que lo hace anidado.',
  dx:[],
  obj:'Reconocer el diseño de casos y controles anidado y sus ventajas.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Rothman, Modern Epidemiology.'
},
'MIR-2013-M200': {
  esp:'Epidemiología', tema:'Diseños de estudio', sub:'Confusión',
  clave:'El tabaco se asocia al alcohol y también causa cáncer de páncreas: es un factor de confusión.',
  exp:'Una variable es factor de confusión cuando cumple tres condiciones: se asocia con la exposición estudiada, es por sí misma un factor de riesgo del desenlace, y no forma parte de la cadena causal entre ambas. El tabaco cumple las tres: los bebedores fuman más, el tabaco causa cáncer de páncreas por su cuenta, y no es un paso intermedio del efecto del alcohol. Si no se controla, la asociación observada entre alcohol y cáncer estará distorsionada. A diferencia de los sesgos de selección e información, la confusión sí puede corregirse: en el diseño mediante restricción, apareamiento o aleatorización, y en el análisis mediante estratificación o modelos multivariantes.',
  no:{0:'No es una categoría reconocida en este contexto.',1:'El sesgo diagnóstico se refiere a que el diagnóstico se busque de forma desigual según la exposición.',2:'El sesgo de realización afecta al modo en que se aplican las intervenciones en un ensayo.',3:'El efecto Hawthorne es la modificación de la conducta por saberse observado.'},
  trampa:'Se confunde la confusión con un sesgo cualquiera. La diferencia práctica es que la confusión se puede ajustar en el análisis; los sesgos de información y selección, no.',
  dx:[],
  obj:'Reconocer un factor de confusión y cómo se controla.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Gordis, Epidemiología.'
},
'MIR-2013-M204': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'Interpretación de resultados',
  clave:'Significación estadística no es relevancia clínica: 4 mm de diferencia en una escala de 100 mm no cambia la práctica.',
  exp:'Con p igual a 0,03 la diferencia es estadísticamente significativa: es improbable que se deba solo al azar. Pero la magnitud del efecto es de 4 milímetros en una escala visual analógica de 100, muy por debajo de la diferencia mínima clínicamente importante, que en dolor se sitúa habitualmente alrededor de 10 a 20 milímetros. Con un tamaño muestral suficientemente grande, cualquier diferencia por minúscula que sea acaba siendo significativa; por eso hay que leer siempre la magnitud del efecto y su intervalo de confianza junto al valor de p, y no solo si cruza o no el umbral.',
  no:{0:'La diferencia no alcanza la magnitud que se considera clínicamente relevante.',2:'El estudio no aporta datos sobre seguridad, de modo que no puede concluirse nada sobre el balance beneficio-riesgo.',3:'Ese porcentaje no se deduce de los datos presentados.',4:'Recomendar el uso generalizado a partir de una diferencia clínicamente irrelevante no está justificado.'},
  trampa:'La p pequeña se lee como buen resultado. Lo que importa es cuánto mejora el paciente, no cuán improbable es el azar.',
  dx:[],
  obj:'Separar significación estadística de relevancia clínica.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Altman, Practical Statistics for Medical Research.'
},

/* ==================== FARMACOLOGÍA ==================== */
'MIR-2014-P89': {
  esp:'Farmacología', tema:'Farmacología clínica', sub:'Antihipertensivos',
  clave:'Tos por IECA: se cambia a un ARA II, que hace lo mismo sin acumular bradicinina.',
  exp:'Los inhibidores de la enzima convertidora bloquean también la degradación de la bradicinina, que se acumula en la vía aérea y produce tos seca en un 10 a 20% de los pacientes. Los antagonistas del receptor de angiotensina II, como el losartán, bloquean el mismo eje pero en el receptor, sin interferir con la bradicinina: conservan el efecto sobre las resistencias periféricas y sobre la retención de sodio y agua, y su nefroprotección, pero no producen tos. Ese mismo mecanismo explica por qué el angioedema, aunque mucho menos frecuente, también es propio de los IECA.',
  no:{1:'El nifedipino baja las resistencias, pero no actúa sobre el sistema renina-angiotensina ni previene la retención de sodio del mismo modo.',2:'El prazosín es un alfabloqueante, de tercera línea y con hipotensión de primera dosis.',3:'El propranolol reduce el gasto cardíaco, no las resistencias periféricas, y no comparte las acciones descritas.',4:'El enalaprilo es otro IECA: reproduciría exactamente la tos.'},
  trampa:'Se cambia a otro IECA pensando que la tos es un problema de molécula. Es un efecto de clase, mediado por la bradicinina.',
  dx:['Tos por IECA','Asma','Reflujo gastroesofágico'],
  obj:'Sustituir un IECA por un ARA II ante la tos.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Goodman y Gilman y la guía ESC/ESH sobre hipertensión.'
},
'MIR-2015-P75': {
  esp:'Farmacología', tema:'Farmacología clínica', sub:'Trombocitopenia por heparina',
  clave:'Trombopenia entre el quinto y el décimo día de heparina: anticuerpos contra el complejo heparina-factor 4 plaquetario.',
  exp:'La trombocitopenia inducida por heparina de tipo II es una reacción inmunomediada: se forman anticuerpos IgG contra el complejo entre la heparina y el factor 4 plaquetario, y esos inmunocomplejos activan las plaquetas a través del receptor FcγRIIa. El cronograma es característico —entre el día 5 y el 10 de exposición, o antes si hubo exposición previa— y la paradoja clínica es que, pese al descenso de plaquetas, el riesgo dominante es la *trombosis*, no la hemorragia. El manejo consiste en suspender toda heparina, incluidas las de bajo peso molecular y los lavados de vías, y anticoagular con un fármaco alternativo como argatrobán o fondaparinux; la transfusión de plaquetas está desaconsejada.',
  no:{0:'Los anticuerpos no van dirigidos directamente contra la plaqueta sino contra el complejo heparina-factor 4.',1:'No hay esplenomegalia ni contexto de hiperesplenismo.',2:'La heparina no suprime la médula ósea ni actúa sobre los megacariocitos.'},
  trampa:'Se transfunden plaquetas por la cifra baja. En este cuadro el problema es trombótico y la transfusión puede empeorarlo.',
  dx:['Trombocitopenia inducida por heparina tipo II','Trombocitopenia dilucional','Sepsis'],
  obj:'Reconocer la trombocitopenia inmune por heparina y su riesgo trombótico.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías de la American Society of Hematology sobre trombocitopenia inducida por heparina.'
},
'MIR-2017-P115': {
  esp:'Ciencias Básicas', tema:'Farmacocinética', sub:'Volumen de distribución',
  clave:'El volumen en estado estacionario se calcula cuando el compartimento periférico ha alcanzado su máximo, es decir, en equilibrio de distribución.',
  exp:'En el modelo bicompartimental, el fármaco se distribuye entre un compartimento central y otro periférico. El volumen de distribución en estado estacionario refleja la situación en la que la transferencia entre ambos compartimentos se ha equilibrado y la cantidad en el periférico es máxima; se calcula a partir de las constantes de velocidad de transferencia y es el parámetro que mejor describe la distribución real del fármaco, porque es independiente de la eliminación. El volumen de área, en cambio, se obtiene de la fase terminal y sí depende del aclaramiento, lo que lo hace menos fiable para comparar entre pacientes.',
  no:{1:'La cantidad en la fase terminal es la base del cálculo del volumen de área, no del estado estacionario.',2:'La relación entre dosis y concentración máxima en el compartimento central define el volumen del compartimento central, V1.',3:'La concentración en el compartimento periférico no se mide directamente ni sirve para ese cálculo.'},
  trampa:'Se confunden los distintos volúmenes de distribución. La clave está en de qué fase o momento se obtiene cada uno.',
  dx:[],
  obj:'Distinguir los volúmenes de distribución del modelo bicompartimental.',
  ref:'Examen MIR 2017 de farmacia, Ministerio de Sanidad de España. Contrastado con Rowland y Tozer, Farmacocinética Clínica.'
},
'MIR-2020-P18': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Amebas de vida libre',
  clave:'Agua dulce, meningoencefalitis fulminante y trofozoítos en el tejido: Naegleria fowleri.',
  exp:'Naegleria fowleri es una ameba de vida libre presente en agua dulce templada, que penetra por la mucosa nasal, atraviesa la lámina cribosa y alcanza el sistema nervioso central. Produce la meningoencefalitis amebiana primaria, un cuadro fulminante, hemorrágico y necrotizante, con mortalidad muy alta y un curso de pocos días. La exposición al agua dulce —buceo, natación, irrigaciones nasales con agua no estéril— es el dato epidemiológico que la señala, y el hallazgo de trofozoítos móviles en el líquido o en el tejido confirma. Se distingue de Acanthamoeba, que produce una encefalitis granulomatosa más subaguda en inmunodeprimidos.',
  no:{0:'Taenia solium produce neurocisticercosis, con quistes y calcificaciones, de curso crónico.',1:'Toxoplasma produce lesiones ocupantes con realce en anillo en inmunodeprimidos, no este cuadro fulminante.',3:'Cryptococcus produce meningitis subaguda en inmunodeprimidos, con levaduras encapsuladas, no trofozoítos.'},
  trampa:'Se busca un germen habitual de meningoencefalitis. El dato que resuelve el caso es la exposición al agua dulce junto con la palabra trofozoítos.',
  dx:['Meningoencefalitis amebiana primaria','Encefalitis herpética','Meningitis bacteriana'],
  obj:'Relacionar la exposición al agua dulce con la meningoencefalitis amebiana.',
  ref:'Examen MIR 2020 de farmacia, Ministerio de Sanidad de España. Contrastado con los CDC y Mandell, Enfermedades Infecciosas.'
},

/* ==================== GINECOLOGÍA Y OBSTETRICIA ==================== */
'MIR-2014-M162': {
  esp:'Ginecología y Obstetricia', tema:'Obstetricia', sub:'Rotura prematura de membranas',
  clave:'Rotura pretérmino SIN contracciones: corticoides y antibióticos. No hay nada que frenar con tocolíticos.',
  exp:'La paciente tiene una rotura prematura de membranas a las 31 semanas, sin fiebre, sin dinámica uterina y con bienestar fetal conservado. El manejo es expectante para ganar madurez pulmonar, y se apoya en dos pilares: corticoides, que reducen el distrés respiratorio, la hemorragia intraventricular, la enterocolitis y la mortalidad neonatal; y antibióticos, que prolongan el periodo de latencia y disminuyen la morbilidad infecciosa. Los tocolíticos no están indicados porque no hay contracciones que inhibir, y su uso mantenido en este contexto no ha demostrado beneficio. Por debajo de las 32 semanas se añade sulfato de magnesio como neuroprotector fetal.',
  no:{0:'Los tocolíticos sobran: el registro no muestra contracciones.',1:'Falta el corticoide, que es la medida que más cambia el pronóstico neonatal.',2:'Faltan los antibióticos, que prolongan la latencia y reducen la infección.',3:'La oxitocina induciría el parto, justo lo contrario de lo que se busca a las 31 semanas sin infección.'},
  trampa:'Se añaden tocolíticos por reflejo ante una amenaza de parto pretérmino. Aquí no hay dinámica: lo que hay es una rotura de membranas.',
  dx:['Rotura prematura de membranas pretérmino','Amenaza de parto pretérmino','Corioamnionitis'],
  obj:'Elegir el tratamiento de la rotura prematura pretérmino sin infección.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con los boletines del ACOG y Williams Obstetricia, 26.ª ed.'
},
'MIR-2014-M163': {
  esp:'Ginecología y Obstetricia', tema:'Obstetricia', sub:'Hemorragia del primer trimestre',
  clave:'Test positivo con dolor y sangrado: ecografía transvaginal para localizar la gestación.',
  exp:'Ante una mujer con amenorrea, prueba de embarazo positiva, dolor abdominal y sangrado, la pregunta que hay que responder de inmediato es dónde está la gestación. La ecografía transvaginal es la exploración que localiza el saco y descarta lo que no se puede pasar por alto: el embarazo ectópico. Si no se visualiza saco intrauterino, se interpreta junto con la beta-hCG y la zona discriminatoria, y se realiza seguimiento seriado. Cualquier decisión terapéutica —evacuar, sostener con progesterona, mandar a casa— tomada antes de localizar la gestación puede ser catastrófica.',
  no:{1:'El reposo no es tratamiento y esperar una semana con posible ectópico expone a una rotura tubárica.',2:'Legrar sin haber confirmado una gestación intrauterina no viable puede interrumpir un embarazo viable o dejar sin diagnosticar un ectópico.',3:'La progesterona no está indicada sin haber localizado y evaluado la gestación.',4:'Las prostaglandinas evacuarían un útero cuya gestación ni siquiera se ha localizado.'},
  trampa:'Se actúa sobre el útero antes de mirar. La primera pregunta no es si el embarazo es viable, sino dónde está.',
  dx:['Embarazo ectópico','Amenaza de aborto','Aborto en curso','Gestación normal'],
  obj:'Localizar la gestación antes de cualquier decisión terapéutica.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con los boletines del ACOG sobre embarazo tubárico y pérdida gestacional temprana.'
},
'MIR-2014-M95': {
  esp:'Medicina Interna', tema:'Endocrinología', sub:'Insuficiencia suprarrenal',
  clave:'Cortisol bajo que NO responde a ACTH, con ACTH muy elevada: el fallo está en la glándula.',
  exp:'La lógica es la misma que en el eje tiroideo. La ACTH plasmática está muy por encima del rango normal, lo que indica que la hipófisis está trabajando y pidiendo cortisol; y la glándula suprarrenal no responde ni a esa estimulación endógena ni a la prueba de estimulación con ACTH exógena, en la que el cortisol apenas se mueve. Eso localiza el fallo en la corteza suprarrenal: insuficiencia suprarrenal primaria o enfermedad de Addison. La clínica encaja: astenia, anorexia, pérdida de peso y amenorrea. En la forma primaria se pierden también los mineralocorticoides, de ahí la tendencia a la hiponatremia con hiperpotasemia y la hiperpigmentación por el exceso de ACTH.',
  no:{1:'En la secundaria la ACTH estaría baja o inapropiadamente normal, no elevada.',2:'En la terciaria, por lesión hipotalámica, la ACTH tampoco estaría elevada.',3:'Un corticotropinoma produciría exceso de cortisol, no déficit.',4:'El diagnóstico es concluyente con estos dos datos: cortisol bajo sin respuesta y ACTH alta.'},
  trampa:'Se mira solo el cortisol bajo. Sin la ACTH no se puede localizar el fallo, y la localización es lo que cambia el tratamiento y el pronóstico.',
  dx:['Insuficiencia suprarrenal primaria','Insuficiencia suprarrenal secundaria','Anorexia nerviosa'],
  obj:'Localizar la insuficiencia suprarrenal con cortisol y ACTH.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las guías de la Endocrine Society sobre insuficiencia suprarrenal primaria.'
},
'MIR-2016-M164': {
  esp:'Ginecología y Obstetricia', tema:'Ginecología', sub:'Ovario poliquístico',
  clave:'La resistencia a la insulina acompaña al síndrome, pero NO es criterio de Rotterdam.',
  exp:'Los criterios de Rotterdam son tres y se exigen dos de ellos: oligoovulación o anovulación, hiperandrogenismo clínico o bioquímico, y morfología ovárica poliquística en la ecografía, siempre tras excluir otras causas como la hiperplasia suprarrenal congénita no clásica, la hiperprolactinemia, la disfunción tiroidea y los tumores productores de andrógenos. La resistencia a la insulina está presente en una proporción alta de estas pacientes y explica su riesgo metabólico y cardiovascular, por lo que se criba, pero no forma parte de la definición diagnóstica.',
  no:{0:'El hiperandrogenismo sí es uno de los tres criterios.',2:'La oligoovulación o anovulación sí es criterio.',3:'La morfología ovárica poliquística sí es criterio.'},
  trampa:'La resistencia a la insulina es tan central en la fisiopatología del síndrome que se asume como criterio. Está en el manejo, no en la definición.',
  dx:['Síndrome de ovario poliquístico','Hiperplasia suprarrenal no clásica','Hiperprolactinemia'],
  obj:'Conocer con precisión los criterios de Rotterdam.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con el consenso de Rotterdam y la guía internacional sobre SOP.'
},
'MIR-2016-M166': {
  esp:'Ginecología y Obstetricia', tema:'Obstetricia', sub:'Gestación cronológicamente prolongada',
  clave:'42 semanas cumplidas con registro no reactivo: se finaliza la gestación.',
  exp:'Después de las 41 a 42 semanas, la placenta pierde eficiencia y aumentan el riesgo de oligohidramnios, aspiración de meconio, macrosomía y muerte fetal, de modo que la conducta habitual es finalizar la gestación aunque todo vaya bien. Si además el registro cardiotocográfico es *no reactivo*, es decir, sin las aceleraciones que indican bienestar fetal, ya no cabe seguir esperando: se suma la sospecha de compromiso fetal a una edad gestacional en la que continuar no aporta ningún beneficio. Repetir pruebas para confirmar lo que ya no va a cambiar la decisión solo añade riesgo.',
  no:{0:'Repetir el registro a las 48 horas prolonga la gestación en la situación de mayor riesgo.',1:'La ecografía puede complementar, pero no justifica retrasar la finalización con registro no reactivo a las 42 semanas.',2:'La amnioscopia aporta poco y ha caído en desuso.'},
  trampa:'Se buscan más pruebas para confirmar. Cuando el resultado de la prueba no va a cambiar la conducta, la prueba solo retrasa.',
  dx:['Gestación cronológicamente prolongada','Sufrimiento fetal','Insuficiencia placentaria'],
  obj:'Decidir la finalización en la gestación prolongada con registro no reactivo.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Williams Obstetricia, 26.ª ed., y boletines del ACOG.'
},
'MIR-2016-M46': {
  esp:'Ginecología y Obstetricia', tema:'Ginecología', sub:'Síndrome de Turner',
  clave:'Turner es 45,X: falta un cromosoma sexual.',
  exp:'El síndrome de Turner se debe a la ausencia total o parcial de un cromosoma X, con el cariotipo 45,X como forma clásica, aunque existen mosaicos y anomalías estructurales del X. Es una causa frecuente de amenorrea primaria con ausencia de desarrollo puberal, por disgenesia gonadal, y se acompaña de talla baja, cuello alado, implantación baja del cabello, cúbito valgo y malformaciones cardíacas —coartación de aorta, válvula aórtica bicúspide— y renales. Las gonadotropinas están elevadas, porque no hay gónada que responda. El manejo incluye hormona de crecimiento, inducción de la pubertad con estrógenos y seguimiento cardiológico de por vida.',
  no:{0:'47,XYY corresponde a un varón, habitualmente de talla alta.',1:'47,XXY es el síndrome de Klinefelter, con fenotipo masculino e hipogonadismo.',3:'47,XXX es la trisomía X, con fenotipo femenino y hallazgos leves.'},
  trampa:'Se confunden los cariotipos de las aneuploidías sexuales. Turner es el único que resta un cromosoma en lugar de sumarlo.',
  dx:['Síndrome de Turner','Síndrome de Klinefelter','Disgenesia gonadal pura'],
  obj:'Asociar el síndrome de Turner con su cariotipo y sus comorbilidades.',
  ref:'Examen MIR 2016, Ministerio de Sanidad de España. Contrastado con Thompson y Thompson, Genética en Medicina.'
},

/* ==================== MEDICINA INTERNA ==================== */
'MIR-2013-M114': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Neumonía en el inmunodeprimido',
  clave:'Condensación lobar con esputo purulento: la bacteria sigue siendo lo más frecuente, también en el neutropénico.',
  exp:'La neutropenia amplía el abanico de patógenos posibles, pero no elimina los habituales: la neumonía bacteriana, y en particular la neumocócica, sigue siendo la causa más frecuente de infiltrado pulmonar en estos pacientes, sobre todo si aparece de forma aguda, con esputo purulento y una condensación lobar bien definida. Además, el mieloma múltiple produce hipogammaglobulinemia funcional, lo que aumenta específicamente el riesgo de infección por gérmenes capsulados como el neumococo. Los hongos filamentosos entran en el diferencial cuando la neutropenia es prolongada y la imagen muestra nódulos con signo del halo o cavitación.',
  no:{0:'La neumonitis por quimioterapia es un diagnóstico de exclusión y no cursa con esputo purulento.',2:'Aspergillus produce nódulos con halo o cavitación en neutropenias prolongadas, no condensación lobar aguda.',3:'La neumonía viral comunitaria daría infiltrados intersticiales.',4:'El citomegalovirus afecta sobre todo a receptores de trasplante y da patrón intersticial difuso.'},
  trampa:'Se piensa primero en lo exótico porque el paciente está inmunodeprimido. Lo frecuente sigue siendo frecuente, y el patrón radiológico orienta.',
  dx:['Neumonía neumocócica','Aspergilosis invasiva','Neumonitis por fármacos'],
  obj:'Orientar la neumonía del neutropénico por el patrón radiológico y clínico.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías IDSA.'
},
'MIR-2013-M115': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Neumonía complicada',
  clave:'Germen sensible y antibiótico correcto pero fiebre al quinto día: hay una complicación local, no un problema de fármaco.',
  exp:'La concentración mínima inhibitoria de 0,0125 mg/l indica un neumococo plenamente sensible a la penicilina, y la dosis empleada es adecuada. Cuando el antibiótico es el correcto y el paciente no mejora, cambiarlo rara vez resuelve nada: lo que hay que buscar es una complicación que el fármaco no puede alcanzar. La más frecuente es el derrame paraneumónico complicado o el empiema, que se diagnostica con una toracocentesis y se trata con drenaje. Otras posibilidades son el absceso, una obstrucción bronquial subyacente o una fiebre medicamentosa.',
  no:{0:'La ceftriaxona no es más eficaz frente a un neumococo con esta sensibilidad a la penicilina.',1:'Añadir una quinolona amplía el espectro sin motivo y no drena una colección.',2:'La amoxicilina con clavulánico no aporta nada frente a un germen ya sensible a penicilina.',4:'Esperar sin buscar la causa permite que el derrame se tabique y evolucione a empiema.'},
  trampa:'La respuesta automática al fracaso terapéutico es cambiar el antibiótico. Si el germen es sensible y la dosis correcta, el problema está en otra parte.',
  dx:['Empiema pleural','Derrame paraneumónico complicado','Absceso pulmonar'],
  obj:'Buscar complicación local ante una neumonía que no responde.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de la British Thoracic Society sobre infección pleural.'
},
'MIR-2013-M116': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Faringoamigdalitis',
  clave:'Fiebre, exudado, adenopatías dolorosas y ausencia de tos: cuatro criterios de Centor. Penicilina o amoxicilina.',
  exp:'Los criterios de Centor —exudado amigdalar, adenopatías cervicales anteriores dolorosas, fiebre y ausencia de tos— identifican la probabilidad de infección por estreptococo beta-hemolítico del grupo A. Este paciente los cumple los cuatro. El tratamiento de elección sigue siendo la penicilina V o la amoxicilina, porque el estreptococo del grupo A no ha desarrollado resistencia a los betalactámicos. El objetivo principal del tratamiento no es acortar los síntomas, que mejoran poco más de un día, sino prevenir la fiebre reumática, que sigue siendo una causa relevante de valvulopatía.',
  no:{1:'La amoxicilina con clavulánico amplía el espectro sin necesidad: no hay resistencia que cubrir.',2:'La doxiciclina no es de elección y está limitada por la edad en menores.',3:'El ciprofloxacino tiene mala actividad frente al estreptococo del grupo A.',4:'El metronidazol cubre anaerobios y no tiene indicación aquí.'},
  trampa:'Ante un exudado llamativo se elige el antibiótico más potente. La penicilina sigue siendo la mejor opción, y hay que pensar también en la mononucleosis: dar amoxicilina en ese caso produce un exantema generalizado.',
  dx:['Faringitis estreptocócica','Faringitis viral','Mononucleosis infecciosa'],
  obj:'Aplicar los criterios de Centor y elegir el antibiótico correcto.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías IDSA sobre faringitis estreptocócica.'
},
'MIR-2013-M118': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Tuberculosis resistente',
  clave:'Sin rifampicina, el tratamiento se alarga a 18 meses y hay que reforzarlo con una quinolona.',
  exp:'La rifampicina es el fármaco más potente del esquema y el que permite acortar el tratamiento a seis meses. Cuando el aislamiento es resistente a ella, se pierde ese pilar y hay que reconstruir el régimen: se mantienen isoniacida, etambutol y pirazinamida, se añade una fluoroquinolona con actividad antituberculosa, y la duración se prolonga hasta unos 18 meses. Además, la resistencia a rifampicina obliga a comprobar la sensibilidad al resto de fármacos, porque con frecuencia se acompaña de resistencia a isoniacida, lo que definiría una tuberculosis multirresistente y cambiaría por completo el esquema.',
  no:{0:'Sin reforzar con una quinolona, tres fármacos de segunda línea durante 12 meses son insuficientes.',1:'La estreptomicina durante solo dos meses no compensa la pérdida de la rifampicina.',2:'Una quinolona limitada a dos meses no sostiene el régimen durante los 12 restantes.',4:'La duración de 18 meses es adecuada, pero la quinolona debe mantenerse todo el tratamiento, no dos meses.'},
  trampa:'Se retira la rifampicina y se mantiene la duración de seis meses. Sin ella, el esquema pierde potencia y acortar garantiza la recaída.',
  dx:['Tuberculosis resistente a rifampicina','Tuberculosis multirresistente','Tuberculosis sensible'],
  obj:'Reconstruir el esquema antituberculoso ante resistencia a rifampicina.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las directrices de la OMS sobre tuberculosis farmacorresistente.'
},
'MIR-2013-M119': {
  esp:'Medicina Interna', tema:'Infectología', sub:'Primoinfección por VIH',
  clave:'A las tres semanas se está en periodo ventana: el ELISA puede ser negativo y hay que medir carga viral.',
  exp:'El cuadro descrito —fiebre, adenopatías y exantema tres semanas después de una exposición de riesgo— es el síndrome retroviral agudo, que se parece a una mononucleosis. El problema es que los anticuerpos tardan semanas en aparecer, de modo que en ese periodo ventana el ELISA puede ser negativo pese a existir infección. Lo que sí está presente y en cifras muy altas es el ARN viral, de modo que ante un ELISA negativo con sospecha clínica alta se determina la carga viral por PCR, o se emplean pruebas de cuarta generación que detectan también el antígeno p24 y acortan la ventana. Reconocer esta fase importa: la carga viral es altísima y la transmisibilidad, máxima.',
  no:{0:'Un ELISA negativo en periodo ventana NO descarta la infección.',1:'El cuadro descrito es exactamente el del síndrome retroviral agudo.',2:'Un ELISA positivo siempre requiere confirmación con una prueba suplementaria.',3:'Es al revés: el ELISA tiene sensibilidad muy alta y especificidad algo menor, por eso se confirma todo positivo.'},
  trampa:'Se descarta la infección con una serología negativa precoz. Justo cuando el paciente es más contagioso, la serología todavía no ha virado.',
  dx:['Primoinfección por VIH','Mononucleosis infecciosa','Sífilis secundaria'],
  obj:'Diagnosticar la infección aguda por VIH en el periodo ventana.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de los CDC sobre diagnóstico de VIH.'
},
'MIR-2013-M120': {
  esp:'Medicina Interna', tema:'Hematología', sub:'Síndrome hemofagocítico',
  clave:'Mononucleosis que se complica con fiebre alta, pancitopenia, coagulopatía y FERRITINA muy elevada: hemofagocitosis.',
  exp:'El síndrome hemofagocítico secundario es una activación descontrolada de linfocitos y macrófagos que puede desencadenarse por infecciones, siendo el virus de Epstein-Barr el desencadenante clásico. Sus rasgos son fiebre persistente, citopenias en dos o más series, hepatoesplenomegalia, hipertrigliceridemia, hipofibrinogenemia y una *ferritina muy elevada*, que es el dato que más orienta y que aquí aparece de forma explícita. La procalcitonina normal y los cultivos negativos alejan la sepsis bacteriana. El diagnóstico se confirma demostrando hemofagocitosis en médula ósea, y el tratamiento es inmunosupresor según protocolo, sin el cual la mortalidad es muy alta.',
  no:{0:'Los cultivos son negativos y la procalcitonina es normal: la sepsis bacteriana no explica el cuadro.',1:'Ampliar la cobertura antibiótica no trata la tormenta inflamatoria.',2:'Los corticoides forman parte del tratamiento del síndrome, pero la respuesta exige antes confirmar el diagnóstico en médula.',3:'El aciclovir tiene un papel muy limitado en la mononucleosis y no trata la hemofagocitosis.'},
  trampa:'Se persigue una sepsis oculta con antibióticos cada vez más amplios. La ferritina muy alta con procalcitonina normal es la pista que cambia el rumbo.',
  dx:['Síndrome hemofagocítico secundario','Sepsis bacteriana','Mononucleosis grave','Linfoma'],
  obj:'Sospechar el síndrome hemofagocítico ante fiebre, citopenias y ferritina alta.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con los criterios HLH de la Histiocyte Society.'
},
'MIR-2013-M122': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Nefropatía IgA',
  clave:'Se pide la FALSA. En la nefropatía IgA la proteinuria en rango nefrótico es POCO frecuente.',
  exp:'La combinación de púrpura palpable en las piernas con hematuria recurrente apunta a una vasculitis por IgA. Su expresión renal es la nefropatía IgA, cuya presentación característica es la hematuria —macroscópica coincidiendo con infecciones respiratorias, o microscópica persistente— con proteinuria habitualmente escasa. La proteinuria en rango nefrótico es infrecuente y, cuando aparece, marca peor pronóstico. Los depósitos mesangiales de IgA en la biopsia son el hallazgo definitorio, y la biopsia cutánea de las lesiones purpúricas puede demostrar los mismos depósitos y ahorrar la biopsia renal.',
  no:{0:'Es cierta: la IgA sérica está elevada en una proporción importante de pacientes, aunque no sirve para diagnosticar.',1:'Es cierta: los depósitos mesangiales de IgA son el hallazgo característico.',3:'Es cierta: la mayoría no progresa a insuficiencia renal, aunque una minoría relevante sí lo hace.',4:'Es cierta: la biopsia cutánea puede establecer el diagnóstico en una parte de los casos.'},
  trampa:'Se asocia toda glomerulopatía con proteinuria masiva. La nefropatía IgA es fundamentalmente una enfermedad que sangra, no que filtra proteínas.',
  dx:['Nefropatía IgA','Vasculitis IgA','Glomerulonefritis postinfecciosa'],
  obj:'Reconocer el perfil urinario de la nefropatía IgA.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías KDIGO sobre glomerulonefritis.'
},
'MIR-2013-M126': {
  esp:'Medicina Interna', tema:'Nefrología', sub:'Enfermedad anti-membrana basal',
  clave:'Hemoptisis + fracaso renal + anti-MBG + depósito LINEAL: Goodpasture. Se plasmaferesa.',
  exp:'La enfermedad por anticuerpos antimembrana basal glomerular se caracteriza por un anticuerpo circulante dirigido contra el colágeno tipo IV, que se deposita de forma *lineal* y continua a lo largo de la membrana basal: ese patrón en la inmunofluorescencia la distingue de las glomerulonefritis por inmunocomplejos, que muestran depósitos granulares. Cuando afecta también a la membrana basal alveolar aparece la hemorragia pulmonar, y el conjunto se conoce como síndrome de Goodpasture. Es una glomerulonefritis rápidamente progresiva y una urgencia: el tratamiento combina *plasmaféresis*, que retira el anticuerpo circulante, con corticoides y ciclofosfamida, que frenan su producción. Cada día de retraso reduce la probabilidad de recuperar la función renal.',
  no:{0:'La nefropatía IgA muestra depósitos mesangiales granulares de IgA, no lineales.',2:'La glomerulonefritis membranosa cursa con síndrome nefrótico y depósitos subepiteliales granulares.',3:'El micofenolato no es el tratamiento inicial de esta entidad.',4:'El mecanismo no es por inmunocomplejos circulantes sino por anticuerpo dirigido contra un antígeno de la propia membrana basal.'},
  trampa:'Se trata como una glomerulonefritis más, con inmunosupresión sola. Aquí lo que salva el riñón es retirar el anticuerpo, y eso solo lo hace la plasmaféresis.',
  dx:['Enfermedad anti-MBG','Vasculitis ANCA','Nefropatía IgA','Glomerulonefritis lúpica'],
  obj:'Reconocer el patrón lineal y la indicación de plasmaféresis.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías KDIGO sobre glomerulonefritis.'
},
'MIR-2013-M131': {
  esp:'Medicina Interna', tema:'Urología', sub:'Cáncer de próstata',
  clave:'PSA elevado, cociente libre/total bajo y tacto sospechoso: hay que obtener tejido.',
  exp:'Tres datos apuntan en la misma dirección: un PSA por encima del umbral, un cociente PSA libre sobre total del 11% —los valores bajos, por debajo del 15 a 20%, se asocian a mayor probabilidad de cáncer— y una induración asimétrica en el tacto rectal. Con esa combinación, y con un antecedente familiar de primer grado, la indicación es obtener tejido: ecografía transrectal con biopsia, o hoy resonancia multiparamétrica previa con biopsia dirigida. Ninguna decisión terapéutica puede tomarse antes de tener el diagnóstico histológico y el grado.',
  no:{1:'La tomografía se emplea para estadificar una vez confirmado el cáncer, no para diagnosticarlo.',2:'Los inhibidores de la 5-alfa-reductasa bajan el PSA a la mitad y enmascararían el problema.',3:'El bloqueo hormonal es un tratamiento: no se inicia sin diagnóstico ni estadio.',4:'La gammagrafía ósea busca metástasis en el cáncer ya confirmado y de riesgo suficiente.'},
  trampa:'Se trata o se estadifica antes de biopsiar. Sin histología no hay diagnóstico, y el PSA elevado tiene muchas causas benignas.',
  dx:['Cáncer de próstata','Hiperplasia prostática benigna','Prostatitis'],
  obj:'Indicar la biopsia prostática según PSA, cociente libre/total y tacto.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con las guías de la European Association of Urology sobre cáncer de próstata.'
},
'MIR-2013-M132': {
  esp:'Medicina Interna', tema:'Oncología', sub:'Síndromes paraneoplásicos',
  clave:'Disfunción hepática reversible sin metástasis en un carcinoma renal: síndrome de Stauffer.',
  exp:'El carcinoma de células renales es célebre por sus síndromes paraneoplásicos: hipercalcemia por PTHrP, poliglobulia por eritropoyetina, hipertensión por renina, fiebre y amiloidosis. El *síndrome de Stauffer* es uno de ellos: una disfunción hepática no metastásica, con elevación de transaminasas y fosfatasa alcalina, alargamiento del tiempo de protrombina y alteración de las proteínas, en un hígado aumentado de tamaño pero *sin lesiones ocupantes*. Se atribuye a factores producidos por el tumor y su rasgo distintivo es que revierte tras la nefrectomía, lo que además tiene valor pronóstico.',
  no:{0:'Se especifica que no hay defectos de infiltración hepática: no hay metástasis.',1:'La trombosis tumoral afecta a la vena renal y a la cava, y no produce este patrón bioquímico difuso.',2:'Una hepatitis aguda cursaría con transaminasas mucho más elevadas y otro contexto.',4:'La hemocromatosis es una enfermedad de depósito crónica, sin relación con este cuadro.'},
  trampa:'Se asume que toda alteración hepática en un paciente oncológico son metástasis. Aquí la imagen las descarta, y eso obliga a pensar en un síndrome paraneoplásico.',
  dx:['Síndrome de Stauffer','Metástasis hepáticas','Hepatitis tóxica'],
  obj:'Reconocer el síndrome de Stauffer en el carcinoma renal.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Harrison, 21.ª ed., y guías EAU sobre carcinoma renal.'
},
'MIR-2013-M133': {
  esp:'Medicina Interna', tema:'Neumología', sub:'Crisis asmática',
  clave:'Se pide la MENOS indicada. Con pCO2 de 35 y sin fatiga muscular, la ventilación no invasiva no es el paso siguiente.',
  exp:'El paciente está en una crisis asmática que no responde, y lo que corresponde es intensificar el tratamiento: aumentar el oxígeno para corregir la hipoxemia, administrar corticoide sistémico, nebulizar ipratropio junto con salbutamol de forma repetida y considerar sulfato de magnesio intravenoso, que tiene indicación en la crisis grave refractaria. La ventilación mecánica no invasiva, en cambio, tiene un papel controvertido en el asma y no es el escalón inmediato: la pCO2 de 35 mmHg indica que el paciente todavía hiperventila y no está agotado. Si apareciera fatiga muscular con ascenso de la pCO2, deterioro de la conciencia o silencio auscultatorio, el escalón sería la intubación.',
  no:{0:'Está indicado: hay hipoxemia con pO2 de 54 mmHg.',1:'Está indicado y es prioritario: el corticoide sistémico tarda horas y debe darse precozmente.',2:'Está indicado: el ipratropio asociado al salbutamol es el estándar en la crisis que no responde.',3:'Está indicado: el magnesio intravenoso tiene su lugar en la crisis grave refractaria.'},
  trampa:'Una pCO2 de 35 se lee como tranquilizadora sin más. Lo que hay que vigilar es su tendencia: si empieza a subir hacia lo normal-alto en plena crisis, indica agotamiento.',
  dx:['Crisis asmática grave','Insuficiencia respiratoria','Neumotórax'],
  obj:'Escalonar el tratamiento de la crisis asmática y situar la ventilación.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con la estrategia GINA.'
},
'MIR-2013-M134': {
  esp:'Cirugía', tema:'Anatomía quirúrgica', sub:'Trauma torácico',
  clave:'Herida paraesternal a pocos milímetros del esternón: arteria torácica interna, que discurre justo ahí.',
  exp:'La arteria torácica interna, o mamaria interna, desciende por la cara posterior de la pared torácica anterior aproximadamente uno o dos centímetros lateral al borde del esternón, entre los cartílagos costales y la pleura. Una herida penetrante en esa zona la lesiona con facilidad, y su sangrado puede ser masivo y llenar el hemitórax, lo que explica la hipofonesis y la inestabilidad hemodinámica del caso. Es una lesión que se subestima porque el vaso parece pequeño, y sin embargo es causa conocida de hemotórax exanguinante en heridas paraesternales.',
  no:{0:'La carótida primitiva discurre en el cuello, no en el tercer espacio intercostal.',2:'La arteria subescapular está en la región axilar posterior.',3:'La tiroidea superior es cervical.',4:'No existe una arteria tímica superior con relevancia en este contexto.'},
  trampa:'Se buscan grandes vasos mediastínicos por la gravedad del cuadro. La localización exacta de la herida —a milímetros del esternón— señala directamente a la torácica interna.',
  dx:['Lesión de arteria torácica interna','Hemotórax masivo','Lesión cardíaca'],
  obj:'Relacionar la localización de la herida con la estructura vascular lesionada.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con Netter, Atlas de Anatomía Humana, y el ATLS.'
},

/* ==================== PEDIATRÍA ==================== */
'MIR-2014-M175': {
  esp:'Pediatría', tema:'Neonatología', sub:'Coagulopatía neonatal',
  clave:'Mal estado general con sangrado difuso, ambos tiempos alargados Y plaquetas descendidas: coagulación intravascular diseminada.',
  exp:'La clave está en que se afectan a la vez la coagulación y las plaquetas, en un recién nacido con mal estado general: eso es consumo, y en el neonato la causa habitual es la sepsis. La coagulación intravascular diseminada activa de forma difusa la cascada, consume factores y plaquetas y produce el sangrado por múltiples focos que describe el caso, incluida la hemorragia pulmonar. El manejo pasa por tratar la sepsis y dar soporte hemostático.',
  no:{1:'La trombocitopenia autoinmune afecta solo a las plaquetas, con coagulación normal y buen estado general.',2:'La aloinmune también es aislada, y el recién nacido suele estar por lo demás bien.',3:'El déficit de vitamina K alarga los tiempos pero NO consume plaquetas ni produce mal estado general.',4:'Una disfunción plaquetaria no alarga los tiempos de coagulación.'},
  trampa:'Se piensa en la enfermedad hemorrágica por vitamina K porque es lo más conocido del sangrado neonatal. La trombocitopenia y el mal estado general la descartan.',
  dx:['Coagulación intravascular diseminada','Enfermedad hemorrágica del recién nacido','Trombocitopenia aloinmune'],
  obj:'Diferenciar el sangrado neonatal por consumo del debido a déficit de vitamina K.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Nelson, 22.ª ed.'
},
'MIR-2014-M177': {
  esp:'Pediatría', tema:'Pediatría general', sub:'Trastorno del espectro autista',
  clave:'Se pide la EXCEPCIÓN. Tranquilizar y esperar tres meses ante señales de alarma claras es lo incorrecto.',
  exp:'La niña presenta las señales de alarma nucleares del trastorno del espectro autista a una edad en la que ya son valorables: no responde al nombre, escaso contacto ocular, vocalizaciones sin intención comunicativa y ausencia de atención conjunta —no mira hacia donde le señalan—. Ante ese cuadro, la conducta correcta es derivar para evaluación diagnóstica especializada e iniciar intervención temprana, además de descartar hipoacusia. Esperar tres meses o confiar en que la escolarización lo resuelva desaprovecha el periodo de mayor plasticidad, que es precisamente cuando la intervención cambia el pronóstico.',
  no:{1:'Es cierta: el cuadro descrito es muy sugestivo de trastorno del espectro autista.',2:'Es cierta: se requiere evaluación por un equipo con experiencia.',3:'Es cierta: la intervención temprana mejora los resultados a largo plazo.',4:'Es cierta: el origen es multifactorial, con fuerte componente genético.'},
  trampa:'El argumento de que cada niño lleva su ritmo se usa para posponer. Ante señales de alarma específicas, esa espera tiene un costo medible.',
  dx:['Trastorno del espectro autista','Hipoacusia','Retraso del lenguaje'],
  obj:'Actuar sin demora ante las señales de alarma del neurodesarrollo.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las guías de la American Academy of Pediatrics sobre cribado del autismo.'
},
'MIR-2014-M222': {
  esp:'Pediatría', tema:'Pediatría general', sub:'Mordeduras',
  clave:'Flora oral: grampositivos y anaerobios. Amoxicilina-clavulánico.',
  exp:'Las mordeduras humanas y de animales inoculan flora mixta de la boca, con predominio de estreptococos y otros grampositivos junto con anaerobios; en las de perro y gato se añade *Pasteurella multocida*, y en las humanas *Eikenella corrodens*. La amoxicilina con clavulánico cubre todo ese espectro y es el tratamiento de elección. El manejo no se agota en el antibiótico: lavado abundante con agua y jabón, que es la medida individual más eficaz, valoración de no cerrar la herida de forma primaria si es profunda, está en la mano o lleva horas de evolución, revisión del estado antitetánico y, en mordeduras de animal, valoración de la profilaxis antirrábica.',
  no:{0:'El ciprofloxacino cubre mal grampositivos y anaerobios, y no es de elección en pediatría.',1:'El aztreonam solo cubre gramnegativos aerobios: deja fuera lo principal.',3:'Las levaduras no son la flora predominante de la boca en este contexto.',4:'El metronidazol cubre anaerobios pero deja sin cubrir los grampositivos.'},
  trampa:'Se elige el antibiótico por el germen más llamativo. Aquí lo que decide es que la flora es mixta: hace falta cobertura amplia frente a grampositivos y anaerobios.',
  dx:['Herida por mordedura','Celulitis','Tétanos'],
  obj:'Elegir el antibiótico y el manejo integral de la mordedura.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las guías IDSA sobre infecciones de piel y partes blandas.'
},
'MIR-2014-M225': {
  esp:'Pediatría', tema:'Pediatría general', sub:'Bronquiolitis',
  clave:'Bronquiolitis del lactante: virus respiratorio sincitial.',
  exp:'El virus respiratorio sincitial es el agente causal de la mayoría de las bronquiolitis del lactante y el que produce los brotes epidémicos estacionales. La enfermedad es el primer episodio de dificultad respiratoria con sibilancias y crepitantes tras un catarro de vías altas, y su tratamiento es de soporte: hidratación, permeabilidad nasal, oxígeno si la saturación lo requiere y vigilancia del trabajo respiratorio. Ni broncodilatadores, ni corticoides, ni antibióticos han demostrado modificar el curso, porque la obstrucción se debe a moco, edema y detritus, no a broncoespasmo. Otros virus implicados con menor frecuencia son rinovirus, metapneumovirus, parainfluenza, adenovirus y bocavirus.',
  no:{0:'El adenovirus puede causar bronquiolitis, incluso graves y con secuelas, pero es mucho menos frecuente.',1:'El parainfluenza 1 se asocia sobre todo a laringotraqueítis, es decir, al crup.',2:'La gripe B produce cuadros gripales y no es la causa habitual de bronquiolitis.',3:'El bocavirus se identifica con frecuencia en coinfección, pero no es el agente principal.'},
  trampa:'Se busca un agente poco común porque el caso parece sencillo. En bronquiolitis del lactante, la respuesta frecuente es la correcta.',
  dx:['Bronquiolitis por VRS','Crup','Neumonía viral'],
  obj:'Asociar la bronquiolitis con su agente principal y su tratamiento.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Nelson, 22.ª ed., y las guías de la AAP sobre bronquiolitis.'
},
'MIR-2015-M147': {
  esp:'Pediatría', tema:'Traumatología', sub:'Dorsalgia del adolescente',
  clave:'Dolor dorsal mecánico en un adolescente, que aparece de pie y al caminar: enfermedad de Scheuermann.',
  exp:'La enfermedad de Scheuermann, o cifosis juvenil, se debe a una alteración del crecimiento de los platillos vertebrales que produce acuñamiento anterior de tres o más vértebras contiguas y una cifosis dorsal rígida. Aparece en la adolescencia y su síntoma principal es un dolor dorsal *mecánico*: aparece con la bipedestación y la marcha prolongadas y mejora con el reposo, que es exactamente lo que describe el caso. La radiografía lateral muestra el acuñamiento y los nódulos de Schmorl. El tratamiento suele ser conservador, con fisioterapia y control postural, reservando el corsé o la cirugía para las cifosis progresivas o muy pronunciadas.',
  no:{1:'La escoliosis produce deformidad en el plano frontal y habitualmente no duele en la adolescencia.',2:'Un tumor vertebral daría dolor de características inflamatorias, con dolor nocturno y síntomas generales.',3:'Atribuirlo a sobrecarga mecánica sin estudiar en un dolor de varios meses deja el diagnóstico sin hacer.'},
  trampa:'El dolor de espalda del adolescente se atribuye a la mochila o a la postura. Un dolor de meses merece una radiografía.',
  dx:['Enfermedad de Scheuermann','Escoliosis','Espondilolistesis','Tumor vertebral'],
  obj:'Reconocer la cifosis juvenil como causa de dorsalgia mecánica en el adolescente.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con Nelson, 22.ª ed.'
},
'MIR-2015-M156': {
  esp:'Pediatría', tema:'Pediatría general', sub:'Alergia alimentaria',
  clave:'Los síntomas aparecen con el biberón y NO con el pecho: la proteína de leche de vaca es la culpable.',
  exp:'El dato que resuelve el caso es la relación temporal: el lactante tolera bien el pecho y presenta eritema peribucal, vómitos, diarrea y rechazo justo tras el biberón. Eso señala a las proteínas de la leche de vaca, cuya introducción coincide con el inicio de los síntomas. El eritema peribucal inmediato tras el contacto orienta a un mecanismo mediado por IgE. Hay además dos antecedentes que aumentan la probabilidad: la carga atópica familiar y la exposición precoz a una fórmula el primer día de vida en la maternidad, que es un factor de sensibilización descrito. El manejo es la exclusión de la proteína de leche de vaca con fórmula extensamente hidrolizada, manteniendo la lactancia materna.',
  no:{0:'La celiaquía requiere semanas o meses de exposición al gluten para dar síntomas, y no produce eritema peribucal inmediato ni tolerancia selectiva al pecho.',1:'La gastroenteritis aguda no reaparece de forma reproducible con cada biberón.',3:'No existe la alergia al biberón como entidad: lo que se busca es el alérgeno del contenido.'},
  trampa:'El antecedente de un hermano celíaco desvía hacia la enfermedad celíaca. El gluten se introdujo hace días, y la relación de los síntomas es con el biberón, no con el cereal.',
  dx:['Alergia a proteínas de leche de vaca','Enfermedad celíaca','Gastroenteritis'],
  obj:'Identificar el alérgeno por la relación temporal de los síntomas.',
  ref:'Examen MIR 2015, Ministerio de Sanidad de España. Contrastado con las guías de la ESPGHAN sobre alergia a proteínas de leche de vaca.'
},

/* ==================== PSIQUIATRÍA ==================== */
'MIR-2014-M156': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Psicopatología del pensamiento',
  clave:'Fragmentos comprensibles pero sin idea directriz que los una: desorganización del pensamiento.',
  exp:'La desorganización del pensamiento, también llamada descarrilamiento o pérdida de las asociaciones, consiste en que el discurso pierde el hilo conductor: las frases sueltas se entienden, pero no llevan a ninguna parte y el interlocutor acaba sin comprender el conjunto. Es uno de los síntomas nucleares de la esquizofrenia. Conviene contrastarlo con otras alteraciones formales: la *fuga de ideas* es un discurso acelerado que salta de tema en tema por asociaciones superficiales, típica de la manía; la *perseveración* repite una y otra vez el mismo contenido; y el *bloqueo* es la interrupción brusca del discurso, que el paciente no puede retomar.',
  no:{0:'La disociación del pensamiento es un término próximo y más antiguo, pero la denominación que recoge la descripción del enunciado es la desorganización.',1:'La fuga de ideas implica aceleración con saltos por asociación, no ausencia de idea directriz con ritmo normal.',2:'La perseveración repite contenidos; aquí el problema es que no se conectan.',4:'El bloqueo es una interrupción brusca, no una pérdida del hilo mantenida.'},
  trampa:'Se confunde con la fuga de ideas porque ambas producen un discurso difícil de seguir. La diferencia está en la velocidad y en el tipo de conexión entre las ideas.',
  dx:['Esquizofrenia','Episodio maníaco','Trastorno esquizoafectivo'],
  obj:'Diferenciar las alteraciones formales del pensamiento.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con el DSM-5-TR y manuales de psicopatología.'
},
'MIR-2014-M157': {
  esp:'Psiquiatría', tema:'Psiquiatría', sub:'Trastornos de ansiedad',
  clave:'El miedo aparece SOLO al actuar en público, con temor a la humillación: fobia social de ejecución.',
  exp:'La fobia social se caracteriza por un miedo intenso a situaciones en las que la persona se expone al juicio de otros, con temor a actuar de forma humillante. Su variante *de ejecución* se limita a las situaciones de actuación —hablar en público, tocar un instrumento, competir—, y eso es exactamente lo que describe el caso: el músico no tiene síntomas en su vida diaria ni ensayando con sus compañeros, solo en las actuaciones públicas. Las crisis de pánico que presenta son *situacionales*, desencadenadas por ese contexto concreto, lo que la distingue del trastorno de pánico, en el que las crisis son inesperadas.',
  no:{0:'La fobia simple se refiere a objetos o situaciones específicas sin el componente de evaluación social.',1:'En el trastorno de pánico las crisis son espontáneas e inesperadas, no ligadas siempre a una misma situación.',3:'La ansiedad generalizada es una preocupación difusa y persistente sobre múltiples ámbitos.',4:'La agorafobia es el miedo a situaciones de las que sería difícil escapar o recibir ayuda.'},
  trampa:'Las crisis de pánico hacen pensar en trastorno de pánico. Lo que define el diagnóstico no es la crisis sino que sea siempre situacional y con contenido de evaluación social.',
  dx:['Fobia social de ejecución','Trastorno de pánico','Fobia específica'],
  obj:'Distinguir las crisis situacionales de las espontáneas.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con el DSM-5-TR.'
},
'MIR-2014-M186': {
  esp:'Epidemiología', tema:'Bioestadística', sub:'Pruebas estadísticas',
  clave:'Dos variables cuantitativas y se busca su relación: coeficiente de correlación.',
  exp:'La elección de la prueba depende del tipo de variables y de la pregunta. Aquí ambas son cuantitativas —una puntuación de calidad del sueño y otra de sintomatología depresiva— y lo que se quiere saber es si se relacionan entre sí, no si difieren entre grupos. Eso corresponde al coeficiente de correlación: el de Pearson si la relación es lineal y se cumple la normalidad, o el de Spearman si no. Conviene recordar el matiz clásico: correlación no implica causalidad, y el coeficiente mide la fuerza y la dirección de la asociación, no que una variable provoque la otra.',
  no:{0:'La t de Student compara medias entre dos grupos, y aquí no hay grupos que comparar.',1:'La regresión logística se usa cuando la variable dependiente es cualitativa dicotómica.',2:'El análisis de la varianza compara medias entre tres o más grupos.',3:'El chi cuadrado compara variables cualitativas.'},
  trampa:'Se elige la prueba por costumbre en lugar de por el tipo de variable. La pregunta a hacerse siempre es: ¿qué variables tengo y qué quiero saber de ellas?',
  dx:[],
  obj:'Elegir la prueba estadística según el tipo de variables y la pregunta.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Altman, Practical Statistics for Medical Research.'
},
'MIR-2014-M87': {
  esp:'Medicina Interna', tema:'Endocrinología', sub:'Diabetes en el anciano',
  clave:'Filtrado de 28 mL/min: la metformina está contraindicada. Y con 9,5% y bajo peso, la dieta sola no basta.',
  exp:'Tres datos cierran la decisión. El primero es el filtrado glomerular estimado de 28 mL/min: por debajo de 30, la metformina está contraindicada por el riesgo de acidosis láctica, y aquí la creatinina de 1,0 engaña porque la paciente pesa 39 kilos y tiene poca masa muscular. El segundo es la hemoglobina glucosilada de 9,5% sin mejoría en el último mes: la dieta sola ya ha demostrado ser insuficiente. El tercero es el perfil de la paciente —anciana, muy delgada, con ingesta escasa y vive sola—, en la que las sulfonilureas son especialmente peligrosas por hipoglucemias graves y prolongadas, agravadas por la insuficiencia renal. La insulina basal a dosis baja, titulada con cuidado, es la opción segura y eficaz.',
  no:{1:'La metformina está contraindicada con filtrado por debajo de 30 mL/min.',2:'La glibenclamida es la sulfonilurea con más riesgo de hipoglucemia grave en el anciano con insuficiencia renal.',3:'Con 9,5% y sin respuesta a la dieta, no tratar deja a la paciente sintomática y en riesgo.',4:'La pioglitazona produce retención hídrica, aumenta el riesgo de insuficiencia cardíaca y de fracturas en la anciana.'},
  trampa:'Se lee la creatinina de 1,0 como normal. En una mujer de 39 kilos, esa creatinina corresponde a un filtrado muy reducido, y el enunciado lo da calculado a propósito.',
  dx:['Diabetes tipo 2 con enfermedad renal crónica','Hipoglucemia por sulfonilureas'],
  obj:'Elegir el antidiabético según el filtrado glomerular y la fragilidad.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con los Standards of Care de la American Diabetes Association y los criterios de Beers.'
},

/* ==================== SALUD PÚBLICA Y OTROS ==================== */
'MIR-2013-M149': {
  esp:'Medicina Interna', tema:'Neurología', sub:'Demencias',
  clave:'Deterioro cognitivo + parkinsonismo + alucinaciones visuales + empeoramiento marcado con neurolépticos: cuerpos de Lewy.',
  exp:'La demencia por cuerpos de Lewy se define por deterioro cognitivo fluctuante, alucinaciones visuales bien formadas y recurrentes, y parkinsonismo. Un cuarto rasgo, muy característico y presente en este caso, es la *hipersensibilidad a los neurolépticos*: dosis bajas de risperidona provocan un empeoramiento motor marcado que puede llegar a ser grave. Esa reacción es prácticamente diagnóstica y tiene una consecuencia práctica de primer orden: los antipsicóticos típicos y muchos atípicos deben evitarse en estos pacientes. Se asocia además al trastorno de conducta del sueño REM, que suele preceder años al cuadro.',
  no:{0:'El Alzheimer se manifiesta con deterioro de memoria de instauración progresiva, sin parkinsonismo precoz ni alucinaciones visuales tempranas.',2:'La demencia frontotemporal debuta con cambios de conducta y del lenguaje, no con alucinaciones visuales.',3:'La demencia vascular tiene curso escalonado y hallazgos vasculares en la imagen.',4:'La enfermedad de Creutzfeldt-Jakob progresa en semanas o pocos meses, con mioclonías y alteraciones características en el electroencefalograma.'},
  trampa:'Se prescribe un neuroléptico para las alucinaciones sin considerar el diagnóstico. En esta demencia, esa prescripción puede provocar un deterioro motor grave.',
  dx:['Demencia por cuerpos de Lewy','Enfermedad de Alzheimer','Demencia asociada a Parkinson'],
  obj:'Reconocer la demencia por cuerpos de Lewy y su hipersensibilidad a neurolépticos.',
  ref:'Examen MIR 2013, Ministerio de Sanidad de España. Contrastado con los criterios del consorcio DLB y Harrison, 21.ª ed.'
},
'MIR-2014-M188': {
  esp:'Salud Pública', tema:'Economía de la salud', sub:'Coste-efectividad',
  clave:'ICER = (15.000 − 5.000) / (6 − 5) = 10.000 € por año ganado, por debajo del umbral de 30.000.',
  exp:'La razón de coste-efectividad *incremental* compara el coste adicional con el beneficio adicional: se resta el coste de la alternativa menos costosa y se divide por la diferencia en efectividad. Aquí, 10.000 euros de coste extra dividido entre un año de vida adicional da 10.000 euros por año de vida ganado. Como el umbral de disposición a pagar establecido es de 30.000 euros por año, el fármaco B es coste-efectivo respecto al A: se paga menos de lo que la sociedad ha decidido estar dispuesta a pagar por ese beneficio. La lectura correcta no es qué fármaco cuesta menos, sino si lo que se paga de más compra suficiente salud.',
  no:{1:'Que cueste menos no lo hace coste-efectivo: la comparación es entre coste adicional y beneficio adicional.',2:'El cálculo del incremental da 10.000, que está por debajo del umbral, no por encima.',3:'La cifra de 29.500 euros no se deriva de estos datos: el incremental es de 10.000.',4:'El razonamiento está invertido respecto al resultado del cálculo.'},
  trampa:'Se elige el fármaco más barato por instinto. La pregunta no es cuánto cuesta, sino cuánta salud compra cada euro adicional.',
  dx:[],
  obj:'Calcular e interpretar la razón de coste-efectividad incremental.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con Drummond, Métodos para la Evaluación Económica de Programas de Salud.'
},
'MIR-2014-M224': {
  esp:'Salud Pública', tema:'Uso de antimicrobianos', sub:'Antibiograma',
  clave:'Se pide la FALSA. La resistencia a quinolonas es de clase: cambiar ciprofloxacino por norfloxacino no habría servido.',
  exp:'El antibiograma informa de resistencia a quinolonas como grupo, de modo que sustituir el ciprofloxacino por otra quinolona como el norfloxacino habría mantenido el fallo terapéutico. Es un error frecuente en la práctica: se cambia de molécula dentro de la misma familia creyendo que se cambia de espectro. El resto de las afirmaciones son correctas y describen bien los conceptos: el cotrimoxazol en dosis nocturna diaria durante meses es una *profilaxis*, no un tratamiento; el ciprofloxacino se eligió antes de conocer el germen, de modo que fue *empírico*; y la fosfomicina se eligió a partir del antibiograma, de modo que es *dirigido*. Conviene añadir que la profilaxis previa con cotrimoxazol es precisamente lo que seleccionó la resistencia.',
  no:{1:'Es cierta: una dosis baja diaria y prolongada corresponde a un esquema profiláctico.',2:'Es cierta: elegir según el antibiograma define el tratamiento dirigido.',3:'Es cierta: prescribir sin conocer el germen es tratamiento empírico.',4:'Es cierta: la fosfomicina figura como sensible en el antibiograma.'},
  trampa:'Se cambia de fármaco dentro de la misma familia. La resistencia a quinolonas suele ser cruzada, y el antibiograma lo informa por grupo.',
  dx:['Infección urinaria por E. coli resistente','Infección urinaria recurrente'],
  obj:'Interpretar el antibiograma y distinguir profilaxis, tratamiento empírico y dirigido.',
  ref:'Examen MIR 2014, Ministerio de Sanidad de España. Contrastado con las guías IDSA sobre infección urinaria y programas de optimización de antimicrobianos.'
}

});
